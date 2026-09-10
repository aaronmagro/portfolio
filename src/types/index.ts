export type Locale = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface NavigationItem {
  id: string;
  href: `#${string}`;
  label: LocalizedText;
}

export interface Project {
  id: string;
  label: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  technologies: readonly string[];
}

export interface Experience {
  id: string;
  period: LocalizedText;
  company: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  highlights: readonly LocalizedText[];
  technologies: readonly string[];
}
