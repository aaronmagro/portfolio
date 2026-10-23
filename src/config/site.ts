export const siteConfig = {
  name: 'Aarón Magro',
  fullName: 'Aarón Magro Maldonado',
  title: {
    es: 'Aarón Magro | Desarrollador full-stack',
    en: 'Aarón Magro | Full-stack developer',
  },
  description: {
    es: 'Desarrollador full-stack. APIs en .NET y webs con Astro y TypeScript. Dos años en NTT DATA y una web con CMS propio en producción para un negocio real.',
    en: 'Full-stack developer. .NET APIs and websites with Astro and TypeScript. Two years at NTT DATA and a website with its own CMS live for a real business.',
  },
  // Both forward to the same inbox; each language shows its own word.
  email: {
    es: 'contacto@aaronmagro.com',
    en: 'contact@aaronmagro.com',
  },
  url: 'https://aaronmagro.com',
  linkedinUrl: 'https://www.linkedin.com/in/aaronmagro/',
  githubUrl: 'https://github.com/aaronmagro',
  repositoryUrl: 'https://github.com/aaronmagro/portfolio',
  // Generated with `npm run cv`.
  cvPath: {
    es: '/cv-aaron-magro-maldonado.pdf',
    en: '/cv-aaron-magro-maldonado-en.pdf',
  },
  defaultLocale: 'es',
  locales: ['es', 'en'],
} as const;

export type SupportedLocale = (typeof siteConfig.locales)[number];
