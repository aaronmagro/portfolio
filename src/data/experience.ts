import type { ExperienceCompany, ExperienceEntry } from '../types';
import { toMonthIndex } from '../utils/dates';

export const companies = [
  {
    id: 'ntt-data',
    name: {
      es: 'NTT DATA',
      en: 'NTT DATA',
    },
    location: {
      es: 'Salamanca · En remoto',
      en: 'Salamanca, Spain · Remote',
    },
  },
] satisfies readonly ExperienceCompany[];

export const experiences = [
  {
    id: 'intern',
    companyId: 'ntt-data',
    startDate: '2024-04',
    endDate: '2024-06',
    sector: { es: 'Banca', en: 'Banking' },
    role: {
      es: 'Becario',
      en: 'Intern',
    },
    description: {
      es: 'Prácticas del ciclo en el equipo que mantenía la web de un banco.',
      en: 'Work placement in the team maintaining a bank website.',
    },
    highlights: [
      {
        es: 'Rehice por completo un apartado de la web siguiendo los requisitos del cliente, tanto el diseño como la funcionalidad.',
        en: 'Rebuilt a whole section of the site to the client’s requirements, both design and functionality.',
      },
      {
        es: 'Corregí errores e implementé mejoras en la aplicación .NET.',
        en: 'Fixed bugs and shipped improvements in the .NET application.',
      },
      {
        es: 'Apoyé al equipo de Application Management con incidencias.',
        en: 'Supported the Application Management team with incidents.',
      },
    ],
    technologies: ['.NET', 'ASP.NET', 'Visual Basic .NET', 'SQL', 'JavaScript', 'CSS'],
  },
  {
    id: 'web-developer',
    companyId: 'ntt-data',
    startDate: '2024-09',
    endDate: '2025-10',
    sector: { es: 'Banca', en: 'Banking' },
    role: {
      es: 'Desarrollador web',
      en: 'Web Developer',
    },
    description: {
      es: 'Servicios Web API en .NET para un cliente de banca: su web y su app móvil.',
      en: '.NET Web API services for a banking client: its website and mobile app.',
    },
    highlights: [
      {
        es: 'Diseñé y mantuve endpoints consumidos por sistemas Java, y participé en nuevos servicios y versionados para la app móvil.',
        en: 'Designed and maintained endpoints consumed by Java systems, and worked on new services and versioning for the mobile app.',
      },
      {
        es: 'Automaticé todas las pruebas de los servicios API con colecciones de Postman.',
        en: 'Automated all API service tests with Postman collections.',
      },
      {
        es: 'Implementé un programa de automatización de fallos en cliente para controlar mejor las incidencias y resolverlas antes.',
        en: 'Implemented a client-side failure automation tool to keep incidents under control and resolve them sooner.',
      },
      {
        es: 'Participé en la nueva web del banco con mejoras de usabilidad, rendimiento y seguridad.',
        en: 'Worked on the bank’s new website with usability, performance and security improvements.',
      },
      {
        es: 'Resolví incidencias de F&F, UAT, accesibilidad y servicios, y también de ciberseguridad: revisión de accesos y validaciones.',
        en: 'Resolved F&F, UAT, accessibility and service incidents, plus security ones: access reviews and validation.',
      },
    ],
    technologies: ['C#', '.NET', 'ASP.NET Web API', 'Java', 'Spring Boot', 'SQL', 'Postman', 'JavaScript'],
  },
  {
    id: 'support-maintenance-developer',
    companyId: 'ntt-data',
    startDate: '2025-10',
    endDate: '2026-07',
    sector: { es: 'Inmobiliario', en: 'Real estate' },
    role: {
      es: 'Desarrollador · Soporte y mantenimiento',
      en: 'Developer · Support and Maintenance',
    },
    description: {
      es: 'Soporte de varias aplicaciones de un cliente del sector inmobiliario.',
      en: 'Support for several applications of a real-estate client.',
    },
    highlights: [
      {
        es: 'Gestioné tickets y resolví incidencias funcionales y técnicas.',
        en: 'Handled tickets and resolved functional and technical incidents.',
      },
      {
        es: 'Analicé y corregí datos de incidencias con SQL y JavaScript.',
        en: 'Analysed and fixed incident data with SQL and JavaScript.',
      },
      {
        es: 'Me coordiné con otros equipos para tareas operativas sin cortar el servicio.',
        en: 'Coordinated with other teams on operational tasks without service interruptions.',
      },
    ],
    technologies: ['SQL', 'JavaScript'],
  },
] satisfies readonly ExperienceEntry[];

const byNewest = (a: ExperienceEntry, b: ExperienceEntry) =>
  toMonthIndex(b.startDate) - toMonthIndex(a.startDate);

export const experienceCompanies = companies.map((company) => {
  const roles = experiences.filter((experience) => experience.companyId === company.id).sort(byNewest);
  const oldest = roles[roles.length - 1];

  return {
    id: company.id,
    company: company.name,
    location: company.location,
    startDate: oldest.startDate,
    endDate: roles[0].endDate,
    roles,
  };
});
