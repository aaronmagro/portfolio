// Scroll-driven HUD effects. Everything here is decoration: the page is complete and readable without it.
const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

type Updater = () => void;
const updaters: Updater[] = [];
let queued = false;

const runUpdaters = () => {
  queued = false;
  for (const update of updaters) update();
};

const requestUpdate = () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(runUpdaters);
};

window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate);

// Reading progress bar. Set on the bar itself, not as a variable on <html>: a variable there restyles the
// whole page on every scrolled frame, which is what makes scrolling stutter without hardware acceleration.
const progressBar = document.querySelector<HTMLElement>('.scroll-progress');
updaters.push(() => {
  if (!progressBar) return;
  const max = root.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? clamp(window.scrollY / max) : 0})`;
});

// Highlight the menu entry of the section in view.
const sectionLinks = new Map<string, HTMLAnchorElement[]>();
document.querySelectorAll<HTMLAnchorElement>('[data-section-link]').forEach((link) => {
  const id = link.hash.slice(1);
  if (!id) return;
  sectionLinks.set(id, [...(sectionLinks.get(id) ?? []), link]);
});

if (sectionLinks.size > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        sectionLinks.forEach((links, id) => {
          links.forEach((link) => {
            if (id === entry.target.id) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        });
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sectionLinks.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
}

// Count numbers up once when they appear. The final value is already in the HTML.
if (!reducedMotion) {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      const element = entry.target as HTMLElement;
      const target = Number(element.dataset.count);
      if (!Number.isFinite(target)) continue;
      const start = performance.now();
      const duration = 900;
      const tick = (now: number) => {
        const t = clamp((now - start) / duration);
        element.textContent = String(Math.round(target * (1 - (1 - t) ** 3)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  });
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((element) => counterObserver.observe(element));
}

// Mountain profile. On wide screens the panel is pinned inside a tall track and scrolling "conquers" the
// route. Each stage gets the same share of the scroll with a short hold at every stop, so a three-month
// role is not a blur and "today" arrives well before the end.
const pinnedLayout = window.matchMedia('(min-width: 60rem) and (min-height: 48rem)');

document.querySelectorAll<SVGSVGElement>('[data-profile]').forEach((svg) => {
  const line = svg.querySelector<SVGPathElement>('[data-profile-line]');
  const runner = svg.querySelector<SVGGElement>('[data-profile-runner]');
  const stops = [...svg.querySelectorAll<SVGGElement>('[data-profile-stop]')];
  const reveal = svg.querySelector<SVGRectElement>('[data-profile-reveal]');
  const track = svg.closest<HTMLElement>('[data-profile-track]');
  const cards = track ? [...track.querySelectorAll<HTMLElement>('[data-stage-card]')] : [];
  const steps = track ? [...track.querySelectorAll<HTMLButtonElement>('[data-stage-jump]')] : [];
  if (!line) return;

  const length = line.getTotalLength();
  const startX = line.getPointAtLength(0).x;
  const endX = line.getPointAtLength(length).x;
  const xFraction = (x: number) => (x - startX) / (endX - startX);

  // Length along the path where it reaches a given horizontal fraction.
  const lengthAt = (fraction: number) => {
    let low = 0;
    let high = length;
    for (let i = 0; i < 24; i++) {
      const mid = (low + high) / 2;
      if (xFraction(line.getPointAtLength(mid).x) < fraction) low = mid;
      else high = mid;
    }
    return high;
  };

  const anchors = [...stops.map((stop) => lengthAt(Number(stop.dataset.profileStop))), length];
  const segments = anchors.length - 1;
  line.style.strokeDasharray = String(length);

  // Only the pinned panel plays the climb. Elsewhere every stage is listed in full below the chart, so the
  // chart is shown complete too.
  const scrollProgress = () => {
    if (reducedMotion || !track || !pinnedLayout.matches) return 1;
    const rect = track.getBoundingClientRect();
    const travel = rect.height - window.innerHeight;
    return travel > 0 ? clamp(-rect.top / travel) : 1;
  };

  const routeLength = (progress: number) => {
    if (progress >= 1) return length;
    const segment = Math.min(Math.floor(progress * segments), segments - 1);
    const local = progress * segments - segment;
    const moving = clamp((local - 0.12) / 0.76);
    const eased = moving * moving * (3 - 2 * moving);
    return anchors[segment] + (anchors[segment + 1] - anchors[segment]) * eased;
  };

  const update = () => {
    const travelled = routeLength(scrollProgress());
    const point = line.getPointAtLength(travelled);
    const reached = xFraction(point.x) + 0.001;

    line.style.strokeDashoffset = String(length - travelled);
    runner?.setAttribute('transform', `translate(${point.x} ${point.y})`);
    reveal?.setAttribute('width', String(travelled >= length ? svg.viewBox.baseVal.width : point.x));
    for (const stop of stops) {
      stop.classList.toggle('is-reached', reached >= Number(stop.dataset.profileStop));
    }

    let active = 0;
    cards.forEach((card, index) => {
      if (reached >= Number(card.dataset.stageCard)) active = index;
    });
    cards.forEach((card, index) => card.classList.toggle('is-active', index === active));
    steps.forEach((step, index) => {
      if (index === active) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
    });
  };

  // The stage buttons jump to the middle of their stretch of the climb.
  steps.forEach((step, index) => {
    step.addEventListener('click', () => {
      if (!track) return;
      const target = index === steps.length - 1 ? 1 : (index + 0.5) / segments;
      const top = track.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + (track.offsetHeight - window.innerHeight) * target, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  });

  updaters.push(update);
});

// Cards that lean towards the pointer. Hit testing uses the card's resting box, not the leaning one:
// near the border the leaning edge slid away from the pointer and the card flickered in and out of hover.
if (finePointer && !reducedMotion) {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    let engaged = false;

    const restingBox = () => {
      const parent = card.offsetParent as HTMLElement | null;
      const origin = parent ? parent.getBoundingClientRect() : { left: -window.scrollX, top: -window.scrollY };
      return {
        left: origin.left + (parent?.clientLeft ?? 0) + card.offsetLeft,
        top: origin.top + (parent?.clientTop ?? 0) + card.offsetTop,
        width: card.offsetWidth,
        height: card.offsetHeight,
      };
    };

    const release = () => {
      engaged = false;
      card.classList.remove('is-tilted');
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      window.removeEventListener('pointermove', follow);
      window.removeEventListener('scroll', release);
    };

    const follow = (event: PointerEvent) => {
      const box = restingBox();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      if (Math.abs(x) > 0.5 || Math.abs(y) > 0.5) return release();
      card.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * 8).toFixed(2)}deg`);
    };

    const engage = (event: PointerEvent) => {
      if (engaged) return;
      engaged = true;
      card.classList.add('is-tilted');
      window.addEventListener('pointermove', follow, { passive: true });
      window.addEventListener('scroll', release, { passive: true });
      follow(event);
    };

    card.addEventListener('pointerenter', engage);
    card.addEventListener('pointermove', engage);
  });
}

requestUpdate();
