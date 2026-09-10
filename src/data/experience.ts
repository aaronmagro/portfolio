import type { Experience } from '../types';

export const experienceItems = [
  {
    id: 'experience-01',
    period: {
      es: '2024 — Actualidad',
      en: '2024 — Present',
    },
    company: {
      es: 'Lorem Ipsum',
      en: 'Lorem Ipsum',
    },
    role: {
      es: 'Lorem ipsum dolor sit amet',
      en: 'Lorem ipsum dolor sit amet',
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
      {
        es: 'Donec aliquet sem at neque luctus, vitae posuere lorem luctus.',
        en: 'Donec aliquet sem at neque luctus, vitae posuere lorem luctus.',
      },
    ],
    technologies: ['Lorem', 'Ipsum', 'Dolor', 'Sit amet'],
  },
  {
    id: 'experience-02',
    period: {
      es: '2022 — 2024',
      en: '2022 — 2024',
    },
    company: {
      es: 'Dolor Sit',
      en: 'Dolor Sit',
    },
    role: {
      es: 'Consectetur adipiscing elit',
      en: 'Consectetur adipiscing elit',
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
    technologies: ['Consectetur', 'Adipiscing', 'Integer'],
  },
] satisfies readonly Experience[];
