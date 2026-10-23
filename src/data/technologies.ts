import type { Locale, LocalizedText, Technology, TechnologyGroup, TechnologyUsage } from '../types';

export const usageLabels: Record<TechnologyUsage, LocalizedText> = {
  professional: { es: 'Profesional', en: 'Professional' },
  project: { es: 'Proyecto', en: 'Project' },
  training: { es: 'Formación', en: 'Training' },
};

// 'training' only for what I have not used at work or in a project yet.
export const technologyGroups: readonly TechnologyGroup[] = [
  {
    id: 'backend',
    label: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'C# · .NET', usage: ['professional'] },
      { name: 'ASP.NET Web API', usage: ['professional'] },
      { name: 'Java', usage: ['professional'] },
      { name: 'Spring Boot', usage: ['professional'] },
      { name: 'PHP · Laravel', usage: ['training'] },
      { name: 'Cloudflare Pages Functions', usage: ['project'] },
    ],
  },
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'JavaScript', usage: ['professional', 'project'] },
      { name: 'TypeScript', usage: ['project'] },
      { name: 'Astro', usage: ['project'] },
      { name: 'Angular', usage: ['project'] },
      { name: 'HTML · CSS', usage: ['professional', 'project'] },
      { name: 'Tailwind CSS', usage: ['project'] },
    ],
  },
  {
    id: 'data',
    label: { es: 'Datos', en: 'Data' },
    items: [
      { name: 'SQL · SQL Server', usage: ['professional'] },
      { name: 'MySQL', usage: ['project'] },
      { name: 'Cloudflare Workers KV', usage: ['project'] },
    ],
  },
  {
    id: 'tooling',
    label: { es: 'Herramientas', en: 'Tooling' },
    items: [
      { name: 'Postman', usage: ['professional'] },
      { name: 'Git · GitHub Actions', usage: ['project'] },
      { name: 'Docker', usage: ['training'] },
      { name: 'Cloudflare (WAF, Zero Trust)', usage: ['project'] },
      { name: 'Cloudinary', usage: ['project'] },
    ],
  },
  {
    id: 'practices',
    label: { es: 'Buenas prácticas', en: 'Practices' },
    items: [
      { name: 'Accesibilidad web', localizedName: { es: 'Accesibilidad web', en: 'Web accessibility' }, usage: ['professional', 'project'] },
      { name: 'Seguridad web', localizedName: { es: 'Seguridad web', en: 'Web security' }, usage: ['professional', 'project'] },
      { name: 'SEO técnico', localizedName: { es: 'SEO técnico', en: 'Technical SEO' }, usage: ['project'] },
      { name: 'Testing de APIs', localizedName: { es: 'Testing de APIs', en: 'API testing' }, usage: ['professional'] },
    ],
  },
];

export const technologyName = (item: Technology, lang: Locale) => item.localizedName?.[lang] ?? item.name;
