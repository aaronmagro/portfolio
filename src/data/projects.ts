import type { Project } from '../types';

export const featuredProjects: readonly Project[] = [
  {
    id: 'project-01',
    label: {
      es: 'Lorem ipsum',
      en: 'Lorem ipsum',
    },
    title: {
      es: 'Lorem ipsum dolor sit amet',
      en: 'Lorem ipsum dolor sit amet',
    },
    description: {
      es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem at sapien tincidunt luctus eget sed arcu.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem at sapien tincidunt luctus eget sed arcu.',
    },
    technologies: ['Lorem', 'Ipsum', 'Dolor'],
  },
  {
    id: 'project-02',
    label: {
      es: 'Dolor sit',
      en: 'Dolor sit',
    },
    title: {
      es: 'Consectetur adipiscing elit',
      en: 'Consectetur adipiscing elit',
    },
    description: {
      es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem at sapien tincidunt.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem at sapien tincidunt.',
    },
    technologies: ['Lorem', 'Ipsum', 'Amet'],
  },
  {
    id: 'project-03',
    label: {
      es: 'Amet lorem',
      en: 'Amet lorem',
    },
    title: {
      es: 'Integer vitae lorem sapien',
      en: 'Integer vitae lorem sapien',
    },
    description: {
      es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem at sapien tincidunt.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem at sapien tincidunt.',
    },
    technologies: ['Lorem', 'Dolor', 'Sit'],
  },
];
