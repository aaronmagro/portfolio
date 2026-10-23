# Aarón Magro — Portfolio

Mi portfolio personal. Hecho con [Astro](https://astro.build) y TypeScript, sin librerías de UI.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
npm run cv       # regenera los CV en PDF (español e inglés) desde /cv y /en/cv (usa Chrome)
npm run check    # comprueba tipos (también lo hace el CI en cada push)
```

Requiere Node 22.12 o superior.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Nombre, email, enlaces, CV | `src/config/site.ts` |
| Proyectos | `src/data/projects.ts` (miniaturas en `src/assets/projects/`) |
| Caso de estudio de Francis | `src/components/pages/CaseStudyFrancis.astro` |
| Experiencia | `src/data/experience.ts` |
| Stack | `src/data/technologies.ts` (logos en `src/utils/tech-icons.ts`) |
| Formación, idiomas, disponibilidad | `src/data/profile.ts` |
| Foto de perfil | cualquier imagen en `src/assets/profile/` |
| CV | `src/components/pages/CvPage.astro` → `npm run cv` |
| Rutas en cada idioma | `src/utils/i18n.ts` |
| Secciones | `src/components/sections/` |
| Colores y espaciado | `src/styles/variables.css` |

La web está en español (`/`) y en inglés (`/en/`). Los textos van en `{ es, en }` y las páginas comparten componente en `src/components/pages/`.
En la primera visita se usa el idioma y el tema claro u oscuro del navegador; si el visitante los cambia a mano, se recuerda su elección.
