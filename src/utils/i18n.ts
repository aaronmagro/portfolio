import type { Locale, LocalizedText } from '../types';

// Every page that exists in both languages, with its path in each one.
export const routes = {
  home: { es: '/', en: '/en/' },
  francis: { es: '/proyectos/calzado-francis/', en: '/en/projects/calzado-francis/' },
  cv: { es: '/cv/', en: '/en/cv/' },
} as const satisfies Record<string, LocalizedText>;

export type Alternates = Readonly<LocalizedText>;

// Section anchors are bare on the home page and absolute everywhere else.
export const sectionHref = (anchor: string, lang: Locale, pathname: string) =>
  pathname === routes.home[lang] ? anchor : `${routes.home[lang]}${anchor}`;
