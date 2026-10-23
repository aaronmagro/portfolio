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
      { name: 'C# · .NET', icon: 'devicon:csharp/csharp-plain', usage: ['professional'] },
      { name: 'ASP.NET Web API', icon: 'devicon:dotnetcore/dotnetcore-plain', usage: ['professional'] },
      { name: 'Java', icon: 'si:siOpenjdk', usage: ['professional'] },
      { name: 'Spring Boot', icon: 'si:siSpringboot', usage: ['professional'] },
      { name: 'PHP · Laravel', icon: 'si:siLaravel', usage: ['training'] },
      { name: 'Cloudflare Pages Functions', icon: 'si:siCloudflarepages', usage: ['project'] },
    ],
  },
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'JavaScript', icon: 'si:siJavascript', usage: ['professional', 'project'] },
      { name: 'TypeScript', icon: 'si:siTypescript', usage: ['project'] },
      { name: 'Astro', icon: 'si:siAstro', usage: ['project'] },
      { name: 'Angular', icon: 'si:siAngular', usage: ['project'] },
      { name: 'React', icon: 'si:siReact', usage: ['project'] },
      { name: 'HTML · CSS', icon: 'si:siHtml5', usage: ['professional', 'project'] },
      { name: 'Tailwind CSS', icon: 'si:siTailwindcss', usage: ['project'] },
    ],
  },
  {
    id: 'data',
    label: { es: 'Datos', en: 'Data' },
    items: [
      { name: 'SQL · SQL Server', icon: 'devicon:microsoftsqlserver/microsoftsqlserver-plain', usage: ['professional'] },
      { name: 'MySQL', icon: 'devicon:mysql/mysql-original', usage: ['project'] },
      { name: 'Cloudflare Workers KV', icon: 'si:siCloudflareworkers', usage: ['project'] },
    ],
  },
  {
    id: 'tooling',
    label: { es: 'Herramientas', en: 'Tooling' },
    items: [
      { name: 'Postman', icon: 'si:siPostman', usage: ['professional'] },
      { name: 'Git · GitHub Actions', icon: 'si:siGithubactions', usage: ['project'] },
      { name: 'Docker', icon: 'si:siDocker', usage: ['training'] },
      { name: 'Cloudflare (WAF, Zero Trust)', icon: 'si:siCloudflare', usage: ['project'] },
      { name: 'Cloudinary', icon: 'si:siCloudinary', usage: ['project'] },
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
