import type { LocalizedText } from '../types';

export const availability: LocalizedText = {
  es: 'Presencial, híbrido o remoto en Badajoz o Madrid · preferiblemente remoto o híbrido',
  en: 'On-site, hybrid or remote in Badajoz or Madrid · ideally remote or hybrid',
};

export const lookingFor: LocalizedText = {
  es: 'Puesto full-stack, backend o frontend',
  en: 'Full-stack, backend or frontend role',
};

export const education = [
  {
    id: 'daw',
    title: {
      es: 'CFGS Desarrollo de Aplicaciones Web',
      en: 'Higher Diploma in Web Application Development',
    },
    school: 'I.E.S. Castelar · Badajoz',
    period: '2022–2024',
  },
  {
    id: 'bachillerato',
    title: {
      es: 'Bachillerato',
      en: 'High school diploma',
    },
    school: 'I.E.S. Zurbarán · Badajoz',
    period: '2022',
  },
] as const;

export const languages = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'nativo', en: 'native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2', en: 'B2' } },
] as const;

export const extras: readonly LocalizedText[] = [
  { es: 'Carnet de conducir y vehículo propio', en: 'Driving licence and own car' },
];
