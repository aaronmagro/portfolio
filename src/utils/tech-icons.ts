import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as simpleIcons from 'simple-icons';

export interface TechIcon {
  viewBox: string;
  body: string;
}

// Logos come from simple-icons ('si:siAstro') or, where it only has a wordmark or nothing, from devicon
// ('devicon:csharp/csharp-plain'). Both are drawn in one colour by the page, so they read as one set.
export const techIcon = (key?: string): TechIcon | undefined => {
  if (!key) return undefined;
  const [source, name] = key.split(':');

  if (source === 'si') {
    const icon = (simpleIcons as Record<string, { path: string } | undefined>)[name];
    return icon && { viewBox: '0 0 24 24', body: `<path d="${icon.path}"></path>` };
  }

  if (source === 'devicon') {
    const svg = readFileSync(join(process.cwd(), 'node_modules/devicon/icons', `${name}.svg`), 'utf-8');
    const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 128 128';
    const body = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
    return { viewBox, body };
  }

  return undefined;
};

// Logo for each technology name used across the data files, so every list of technologies shows the same set.
const iconsByName: Record<string, string> = {
  'C#': 'devicon:csharp/csharp-plain',
  'C# · .NET': 'devicon:csharp/csharp-plain',
  '.NET': 'si:siDotnet',
  'ASP.NET': 'devicon:dotnetcore/dotnetcore-plain',
  'ASP.NET Web API': 'devicon:dotnetcore/dotnetcore-plain',
  'Visual Basic .NET': 'devicon:visualbasic/visualbasic-plain',
  Java: 'si:siOpenjdk',
  'Java · Spring Boot': 'si:siSpringboot',
  'Spring Boot': 'si:siSpringboot',
  SQL: 'devicon:microsoftsqlserver/microsoftsqlserver-plain',
  'SQL Server': 'devicon:microsoftsqlserver/microsoftsqlserver-plain',
  Postman: 'si:siPostman',
  JavaScript: 'si:siJavascript',
  TypeScript: 'si:siTypescript',
  CSS: 'si:siCss',
  Astro: 'si:siAstro',
  'Tailwind CSS': 'si:siTailwindcss',
  'Cloudflare Pages': 'si:siCloudflarepages',
  'Cloudflare Pages Functions': 'si:siCloudflarepages',
  'Workers KV': 'si:siCloudflareworkers',
  Cloudinary: 'si:siCloudinary',
  'GitHub Actions': 'si:siGithubactions',
};

export const techIconFor = (name: string) => techIcon(iconsByName[name]);
