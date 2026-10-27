import type { LocalizedText } from '../types';

export const availability: LocalizedText = {
  es: 'Incorporación inmediata · Badajoz, Madrid o remoto',
  en: 'Available now · Badajoz, Madrid or remote',
};

// Roles I am looking for, short enough to read as tags.
export const lookingFor: readonly LocalizedText[] = [
  { es: 'Full-stack', en: 'Full-stack' },
  { es: '.NET', en: '.NET' },
  { es: 'Soporte y mantenimiento', en: 'Support and maintenance' },
];

export const workModes: readonly LocalizedText[] = [
  { es: 'Presencial', en: 'On-site' },
  { es: 'Híbrido', en: 'Hybrid' },
  { es: 'Remoto', en: 'Remote' },
];

export const workPlaces = ['Badajoz', 'Madrid'] as const;

export const education = [
  {
    id: 'daw',
    short: { es: 'CFGS DAW', en: 'Web development diploma' },
    title: {
      es: 'CFGS Desarrollo de Aplicaciones Web',
      en: 'Higher Diploma in Web Application Development',
    },
    school: 'I.E.S. Castelar · Badajoz',
    period: '2022–2024',
  },
  {
    id: 'bachillerato',
    short: { es: 'Bachillerato', en: 'High school' },
    title: {
      es: 'Bachillerato',
      en: 'High school diploma',
    },
    school: 'I.E.S. Zurbarán · Badajoz',
    period: '2022',
  },
] as const;

export const languages = [
  // `steps`: how far along the CEFR scale (A1–C2, six steps); native fills it.
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'nativo', en: 'native' }, steps: 6 },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2', en: 'B2' }, steps: 4 },
] as const;

export const extras: readonly LocalizedText[] = [
  { es: 'Carnet de conducir y vehículo propio', en: 'Driving licence and own car' },
];
