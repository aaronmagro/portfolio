import type { ExperienceCompany } from '../types';

export const experienceCompanies = [
  {
    id: 'ntt-data',
    company: {
      es: 'NTT DATA, Inc.',
      en: 'NTT DATA, Inc.',
    },
    period: {
      es: '2024 — 2026',
      en: '2024 — 2026',
    },
    location: {
      es: 'Salamanca · En remoto',
      en: 'Salamanca · Remote',
    },
    roles: [
      {
        id: 'support-maintenance-developer',
        startDate: '2025-10',
        endDate: '2026-07',
        period: {
          es: '2025 — 2026',
          en: '2025 — 2026',
        },
        role: {
          es: 'Desarrollador / Soporte y Mantenimiento',
          en: 'Developer / Support and Maintenance',
        },
        description: {
          es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem at sapien tincidunt luctus eget sed arcu.',
          en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem at sapien tincidunt luctus eget sed arcu.',
        },
        highlights: [
          {
            es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            es: 'Integer vitae lorem at sapien tincidunt luctus eget sed arcu.',
            en: 'Integer vitae lorem at sapien tincidunt luctus eget sed arcu.',
          },
        ],
        technologies: ['SQL', 'JavaScript'],
      },
      {
        id: 'web-developer',
        startDate: '2024-09',
        endDate: '2025-10',
        period: {
          es: '2024 — 2025',
          en: '2024 — 2025',
        },
        role: {
          es: 'Desarrollador web',
          en: 'Web Developer',
        },
        description: {
          es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo sapien eget lorem tincidunt, a volutpat sapien cursus.',
          en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo sapien eget lorem tincidunt, a volutpat sapien cursus.',
        },
        highlights: [
          {
            es: 'Suspendisse potenti. Cras sed lectus vitae nulla posuere tincidunt.',
            en: 'Suspendisse potenti. Cras sed lectus vitae nulla posuere tincidunt.',
          },
          {
            es: 'Praesent consequat arcu id risus luctus, sed tincidunt erat interdum.',
            en: 'Praesent consequat arcu id risus luctus, sed tincidunt erat interdum.',
          },
        ],
        technologies: ['.NET', 'ASP.NET', 'Web API', 'SQL', 'Postman'],
      },
      {
        id: 'intern',
        startDate: '2024-04',
        endDate: '2024-06',
        period: {
          es: '2024',
          en: '2024',
        },
        role: {
          es: 'Becario',
          en: 'Intern',
        },
        description: {
          es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem at neque luctus, vitae posuere lorem luctus.',
          en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sem at neque luctus, vitae posuere lorem luctus.',
        },
        highlights: [
          {
            es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            es: 'Integer vitae lorem at sapien tincidunt luctus eget sed arcu.',
            en: 'Integer vitae lorem at sapien tincidunt luctus eget sed arcu.',
          },
        ],
        technologies: ['JavaScript', 'CSS'],
      },
    ],
  },
] satisfies readonly ExperienceCompany[];
