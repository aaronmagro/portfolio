import type { ExperienceCompany, ExperienceEntry } from '../types';

export const companies = [
  {
    id: 'ntt-data',
    name: {
      es: 'NTT DATA, Inc.',
      en: 'NTT DATA, Inc.',
    },
    location: {
      es: 'Salamanca · En remoto',
      en: 'Salamanca · Remote',
    },
  },
] satisfies readonly ExperienceCompany[];

export const experiences = [
  {
    id: 'intern',
    companyId: 'ntt-data',
    startDate: '2024-04',
    endDate: '2024-06',
    role: {
      es: 'Becario',
      en: 'Intern',
    },
    description: {
      es: 'Participación en desarrollo y mantenimiento web, trabajando sobre aplicaciones existentes y nuevas funcionalidades orientadas a mejorar estabilidad, funcionalidad y experiencia de usuario.',
      en: 'Worked on web development and maintenance across existing applications and new features focused on improving stability, functionality and user experience.',
    },
    highlights: [
      {
        es: 'Remodelación completa de un apartado de una web existente siguiendo los requisitos del cliente.',
        en: 'Complete redesign of an existing website section following client requirements.',
      },
      {
        es: 'Desarrollo y mantenimiento de la aplicación con .NET, resolviendo errores e incidencias funcionales.',
        en: 'Development and maintenance of the application with .NET, resolving functional errors and incidents.',
      },
      {
        es: 'Implementación de nuevas funcionalidades y apoyo en la resolución de incidencias de Application Management.',
        en: 'Implementation of new features and support in resolving Application Management incidents.',
      },
    ],
    technologies: ['.NET', 'ASP.NET', 'Visual Basic .NET', 'SQL', 'JavaScript', 'CSS'],
  },
  {
    id: 'web-developer',
    companyId: 'ntt-data',
    startDate: '2024-09',
    endDate: '2025-10',
    role: {
      es: 'Desarrollador web',
      en: 'Web Developer',
    },
    description: {
      es: 'Desarrollo y mantenimiento de servicios Web API en .NET para entornos bancarios, combinando evolución funcional, automatización de pruebas y resolución de incidencias.',
      en: 'Development and maintenance of .NET Web API services for banking environments, combining feature work, test automation and incident resolution.',
    },
    highlights: [
      {
        es: 'Diseño y mantenimiento de endpoints consumidos por sistemas Java y colaboración en nuevos servicios y versionados para aplicaciones bancarias.',
        en: 'Designed and maintained endpoints consumed by Java systems and collaborated on new services and versioning for banking applications.',
      },
      {
        es: 'Automatización de pruebas de servicios API mediante colecciones de Postman para acelerar validaciones y detectar errores antes.',
        en: 'Automated API service testing with Postman collections to speed up validation and detect errors earlier.',
      },
      {
        es: 'Resolución de incidencias en distintos entornos y participación en mejoras de usabilidad, rendimiento, accesibilidad y seguridad.',
        en: 'Resolved incidents across multiple environments and contributed to usability, performance, accessibility and security improvements.',
      },
      {
        es: 'Apoyo en incidencias de ciberseguridad mediante revisión de accesos, validaciones y aplicación de buenas prácticas.',
        en: 'Supported cybersecurity incidents through access reviews, validation and security best practices.',
      },
    ],
    technologies: ['C#', '.NET', 'ASP.NET Web API', 'SQL', 'Postman', 'JavaScript', 'Accesibilidad'],
  },
  {
    id: 'support-maintenance-developer',
    companyId: 'ntt-data',
    startDate: '2025-10',
    endDate: '2026-07',
    role: {
      es: 'Desarrollador / Soporte y Mantenimiento',
      en: 'Developer / Support and Maintenance',
    },
    description: {
      es: 'Soporte y mantenimiento de múltiples aplicaciones del entorno inmobiliario, combinando resolución de incidencias con tareas operativas y tratamiento de datos.',
      en: 'Support and maintenance of multiple applications in a real-estate environment, combining incident resolution with operational work and data handling.',
    },
    highlights: [
      {
        es: 'Gestión de tickets y resolución de incidencias funcionales y técnicas en aplicaciones del cliente.',
        en: 'Managed support tickets and resolved functional and technical incidents across client applications.',
      },
      {
        es: 'Análisis, validación y corrección de datos asociados a incidencias mediante SQL y JavaScript.',
        en: 'Analysed, validated and corrected incident-related data using SQL and JavaScript.',
      },
      {
        es: 'Coordinación con otros equipos para ejecutar tareas operativas y asegurar la continuidad del servicio.',
        en: 'Coordinated with other teams to carry out operational tasks and maintain service continuity.',
      },
    ],
    technologies: ['SQL', 'JavaScript'],
  },
] satisfies readonly ExperienceEntry[];

export const experienceCompanies = companies.map((company) => ({
  id: company.id,
  company: company.name,
  location: company.location,
  roles: experiences.filter((experience) => experience.companyId === company.id),
}));
