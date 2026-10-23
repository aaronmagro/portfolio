// Builds the site, serves it and prints /cv/ and /en/cv/ to the PDFs in public/.
// Uses the local Chrome; set CHROME_PATH if it lives somewhere else.
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { promisify } from 'node:util';
import { build, preview } from 'astro';

const run = promisify(execFile);

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
];
const chrome = chromeCandidates.find((path) => path && existsSync(path));
if (!chrome) throw new Error('Chrome not found. Set CHROME_PATH.');

const port = 4329;
const outputs = [
  { path: '/cv/', file: resolve('public/cv-aaron-magro-maldonado.pdf') },
  { path: '/en/cv/', file: resolve('public/cv-aaron-magro-maldonado-en.pdf') },
];

await build({ logLevel: 'warn' });
const server = await preview({ server: { port }, logLevel: 'warn' });

try {
  for (const { path, file } of outputs) {
    await run(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=5000',
      `--print-to-pdf=${file}`,
      `http://localhost:${port}${path}`,
    ]);
    console.log(`CV written to ${file}`);
  }
} finally {
  await server.stop();
}
