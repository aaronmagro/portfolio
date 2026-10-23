// Moves the background ridges (src/components/layout/Backdrop.astro) sideways at different speeds while
// scrolling. Only transforms on the ridges change, so nothing is repainted and it stays smooth even without
// hardware acceleration. The ridges hold still while the pinned climb in Experience plays.

const ridges = [...document.querySelectorAll<SVGSVGElement>('[data-ridge]')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Pixels each ridge slides per scrolled pixel: the farther, the slower.
const speeds: Record<string, number> = { far: 0.02, mid: 0.04, near: 0.07 };

if (ridges.length > 0 && !reducedMotion) {
  const climbTrack = document.querySelector<HTMLElement>('[data-profile-track]');
  const climb = climbTrack?.firstElementChild as HTMLElement | null;

  // Page scroll minus the stretch spent inside the pinned climb.
  const distance = () => {
    let scroll = window.scrollY;
    if (climbTrack && climb && getComputedStyle(climb).position === 'sticky') {
      const start = climbTrack.getBoundingClientRect().top + window.scrollY;
      const pinned = Math.max(0, climbTrack.offsetHeight - window.innerHeight);
      scroll -= Math.min(Math.max(scroll - start, 0), pinned);
    }
    return scroll;
  };

  let queued = false;
  const slide = () => {
    queued = false;
    const scroll = distance();
    // Ridges are two periods wide (200vw): wrapping at one viewport width loops them seamlessly.
    const loop = window.innerWidth;
    for (const ridge of ridges) {
      const offset = -((scroll * (speeds[ridge.dataset.ridge ?? ''] ?? 0)) % loop);
      ridge.style.transform = `translate3d(${offset.toFixed(1)}px, 0, 0)`;
    }
  };
  const request = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(slide);
  };

  slide();
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
}

export {};
