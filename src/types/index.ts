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

export interface ExperienceRole {
  id: string;
  startDate: string;
  endDate: string | null;
  period: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  highlights: readonly LocalizedText[];
  technologies: readonly string[];
}

export interface ExperienceCompany {
  id: string;
  company: LocalizedText;
  period: LocalizedText;
  location: LocalizedText;
  roles: readonly ExperienceRole[];
}
