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

export interface ExperienceCompany {
  id: string;
  name: LocalizedText;
  location: LocalizedText;
}

export interface ExperienceEntry {
  id: string;
  companyId: ExperienceCompany['id'];
  startDate: YearMonth;
  endDate: YearMonth | null;
  role: LocalizedText;
  description: LocalizedText;
  highlights: readonly LocalizedText[];
  technologies: readonly string[];
}
