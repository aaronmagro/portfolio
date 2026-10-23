import type { Locale, YearMonth } from '../types';

const monthLabels = {
  es: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
} as const;

const presentLabel = { es: 'actualidad', en: 'present' } as const;

export const toMonthIndex = (value: YearMonth) => {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + month - 1;
};

export const formatYearMonth = (value: YearMonth, lang: Locale) => {
  const [year, month] = value.split('-').map(Number);
  return `${monthLabels[lang][month - 1]} ${year}`;
};

export const formatPeriod = (start: YearMonth, end: YearMonth | null, lang: Locale) => {
  if (end === start) return formatYearMonth(start, lang);
  return `${formatYearMonth(start, lang)} – ${end ? formatYearMonth(end, lang) : presentLabel[lang]}`;
};

const currentYearMonth = (): YearMonth => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}` as YearMonth;
};

// Inclusive, like LinkedIn: oct 2025 – jul 2026 is 10 months.
export const formatDuration = (start: YearMonth, end: YearMonth | null, lang: Locale) => {
  const total = toMonthIndex(end ?? currentYearMonth()) - toMonthIndex(start) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;

  const words =
    lang === 'es'
      ? { year: ['año', 'años'], month: ['mes', 'meses'] }
      : { year: ['year', 'years'], month: ['month', 'months'] };

  const parts = [];
  if (years) parts.push(`${years} ${words.year[years === 1 ? 0 : 1]}`);
  if (months) parts.push(`${months} ${words.month[months === 1 ? 0 : 1]}`);
  return parts.join(' ');
};
