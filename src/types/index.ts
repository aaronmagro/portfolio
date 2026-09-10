export type Locale = 'es' | 'en';

export type MonthNumber =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12';

export type YearMonth = `${number}-${MonthNumber}`;

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
  startDate: YearMonth;
  endDate: YearMonth | null;
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
