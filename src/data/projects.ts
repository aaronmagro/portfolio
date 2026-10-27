import type { Project } from '../types';
import { siteConfig } from '../config/site';
import { routes } from '../utils/i18n';
import francisDarkEs from '../assets/projects/francis/dark-es.png';
import francisDarkEn from '../assets/projects/francis/dark-en.png';
import francisLightEs from '../assets/projects/francis/light-es.png';
import francisLightEn from '../assets/projects/francis/light-en.png';
import erensitoDarkEs from '../assets/projects/erensito/dark-es.png';
import erensitoDarkEn from '../assets/projects/erensito/dark-en.png';
import erensitoLightEs from '../assets/projects/erensito/light-es.png';
import erensitoLightEn from '../assets/projects/erensito/light-en.png';
import portfolioDarkEs from '../assets/projects/portfolio/dark-es.png';
import portfolioDarkEn from '../assets/projects/portfolio/dark-en.png';
import portfolioLightEs from '../assets/projects/portfolio/light-es.png';
import portfolioLightEn from '../assets/projects/portfolio/light-en.png';

// The workshop's own site says "Artesanos desde 1988".
const francisYears = new Date().getFullYear() - 1988;

export const projects: readonly Project[] = [
  {
    id: 'calzado-francis',
    title: {
      es: 'Calzado Francis',
      en: 'Calzado Francis',
    },
    kind: {
      es: 'Cliente real · En producción',
      en: 'Real client · Live',
    },
    startDate: '2026-08',
    endDate: '2026-09',
    summary: {
      es: `Web y CMS a medida para un taller de reparación de calzado de Leganés con +${francisYears} años de oficio. La hice de principio a fin: diseño, desarrollo, despliegue y SEO. El objetivo era que el dueño pudiera cambiar casi todo sin llamarme.`,
      en: `Website and custom CMS for a shoe repair workshop in Leganés, Madrid, with +${francisYears} years in the trade. I built it end to end: design, development, deployment and SEO. The goal was for the owner to change almost everything without calling me.`,
    },
    highlights: [
      {
        es: 'Panel privado para editar textos, fotos, servicios, preguntas frecuentes, horarios por mes, vacaciones y avisos.',
        en: 'Private panel to edit copy, photos, services, FAQs, monthly opening hours, holidays and notices.',
      },
      {
        es: 'Cada servicio creado en el CMS genera su página, su URL, sus metadatos SEO y su entrada en el sitemap.',
        en: 'Every service created in the CMS generates its own page, URL, SEO metadata and sitemap entry.',
      },
      {
        es: 'Backend serverless con Cloudflare Pages Functions y Workers KV; el panel va detrás de Cloudflare Zero Trust.',
        en: 'Serverless backend with Cloudflare Pages Functions and Workers KV; the admin panel sits behind Cloudflare Zero Trust.',
      },
      {
        es: 'Copias de seguridad automáticas con GitHub Actions y pruebas de integridad, seguridad y SEO.',
        en: 'Automated backups with GitHub Actions plus integrity, security and SEO checks.',
      },
      {
        es: 'Temas de temporada (Halloween, Navidad) que se activan solos según la fecha.',
        en: 'Seasonal themes (Halloween, Christmas) that switch on by themselves based on the date.',
      },
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Workers KV', 'Cloudinary', 'GitHub Actions'],
    caseStudy: routes.francis,
    links: [
      {
        href: 'https://reparaciondecalzadofrancis.es/',
        label: { es: 'Ver la web', en: 'Visit site' },
      },
    ],
    image: {
      sources: {
        dark: { es: francisDarkEs, en: francisDarkEn },
        light: { es: francisLightEs, en: francisLightEn },
      },
      alt: {
        es: 'Cartel de Calzado Francis con su lema «Reparamos. Restauramos. Cuidamos tu calzado.», su logo y sus huellas',
        en: 'Calzado Francis poster with its motto “We repair. We restore. We care for your shoes.”, its logo and its footprints',
      },
    },
  },
  {
    id: 'erensito',
    title: {
      es: 'erensito.com',
      en: 'erensito.com',
    },
    kind: {
      es: 'Web personal · En producción',
      en: 'Personal site · Live',
    },
    startDate: '2026-10',
    endDate: '2026-10',
    summary: {
      es: 'Mi web como jugador competitivo: trayectoria, rangos y aficiones. Una sola página estática, en español e inglés, con un único trozo de backend para lo que tiene que estar en vivo.',
      en: 'My site as a competitive player: history, ranks and hobbies. A single static page, in Spanish and English, with just one piece of backend for what has to be live.',
    },
    highlights: [
      {
        es: 'Rango de Valorant en directo a través de una función de Cloudflare, sin exponer la clave de la API.',
        en: 'Live Valorant rank through a Cloudflare function, without exposing the API key.',
      },
      {
        es: 'Test de reflejos interactivo que compara tu tiempo con el mío.',
        en: 'Interactive reaction test that compares your time with mine.',
      },
      {
        es: 'Modo claro y oscuro, con un script que comprueba el contraste de la paleta.',
        en: 'Light and dark mode, with a script that checks the palette contrast.',
      },
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages Functions'],
    links: [
      {
        href: 'https://erensito.com/',
        label: { es: 'Ver la web', en: 'Visit site' },
      },
    ],
    image: {
      sources: {
        dark: { es: erensitoDarkEs, en: erensitoDarkEn },
        light: { es: erensitoLightEs, en: erensitoLightEn },
      },
      alt: {
        es: 'Miniatura de erensito.com con la tarjeta de jugador de eReN',
        en: 'erensito.com thumbnail with the eReN player card',
      },
    },
  },
  {
    id: 'portfolio',
    title: {
      es: 'Este portfolio',
      en: 'This portfolio',
    },
    kind: {
      es: 'Proyecto personal',
      en: 'Personal project',
    },
    startDate: '2026-09',
    endDate: null,
    summary: {
      es: 'Hecho con Astro y TypeScript, sin librerías de UI. El contenido vive en ficheros de datos tipados: añadir un proyecto o un puesto es tocar un solo archivo.',
      en: 'Built with Astro and TypeScript, no UI libraries. Content lives in typed data files: adding a project or a role means editing a single file.',
    },
    highlights: [
      {
        es: 'Modo claro y oscuro que respeta la preferencia del sistema.',
        en: 'Light and dark mode that follows the system preference.',
      },
      {
        es: 'Navegable con teclado, con enlace para saltar al contenido y movimiento reducido si el sistema lo pide.',
        en: 'Keyboard navigable, with a skip link and reduced motion when the system asks for it.',
      },
      {
        es: 'En español e inglés, con el idioma del navegador en la primera visita.',
        en: 'In Spanish and English, following the browser language on the first visit.',
      },
    ],
    technologies: ['Astro', 'TypeScript', 'CSS'],
    links: [
      {
        href: siteConfig.repositoryUrl,
        label: { es: 'Ver código en GitHub', en: 'View code on GitHub' },
      },
    ],
    image: {
      sources: {
        dark: { es: portfolioDarkEs, en: portfolioDarkEn },
        light: { es: portfolioLightEs, en: portfolioLightEn },
      },
      alt: {
        es: 'Miniatura de este portfolio con la tarjeta de presentación de Aarón Magro',
        en: 'Thumbnail of this portfolio with Aarón Magro’s profile card',
      },
    },
  },
];
