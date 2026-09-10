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
