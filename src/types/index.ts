import type { ImageMetadata } from 'astro';

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

export interface ProjectLink {
  href: string;
  label: LocalizedText;
}

// One thumbnail per theme and language: the text in it is translated and the colours follow the theme.
export interface ProjectImage {
  sources: Record<'dark' | 'light', Record<Locale, ImageMetadata>>;
  alt: LocalizedText;
  caption?: LocalizedText;
}

export interface Project {
  id: string;
  title: LocalizedText;
  kind: LocalizedText;
  startDate: YearMonth;
  endDate: YearMonth | null;
  summary: LocalizedText;
  highlights: readonly LocalizedText[];
  technologies: readonly string[];
  links: readonly ProjectLink[];
  caseStudy?: LocalizedText;
  image?: ProjectImage;
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
  sector: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  highlights: readonly LocalizedText[];
  technologies: readonly string[];
}

export type TechnologyUsage = 'professional' | 'project' | 'training';

export interface Technology {
  name: string;
  // Only for names that change with the language, like the practices.
  localizedName?: LocalizedText;
  // Its logo, see src/utils/tech-icons.ts: 'si:siAstro' or 'devicon:csharp/csharp-plain'.
  icon?: string;
  usage: readonly TechnologyUsage[];
}

export interface TechnologyGroup {
  id: string;
  label: LocalizedText;
  items: readonly Technology[];
}
