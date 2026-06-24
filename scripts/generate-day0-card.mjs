import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const width = 1600;
const height = 900;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#07111f"/>
      <stop offset="48%" stop-color="#0f2330"/>
      <stop offset="100%" stop-color="#10251f"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7dd3fc"/>
      <stop offset="45%" stop-color="#a7f3d0"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#000000" flood-opacity="0.28"/>
    </filter>
    <style>
      .sans { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
      .mono { font-family: 'SF Mono', 'JetBrains Mono', 'Cascadia Code', Menlo, Consolas, monospace; }
      .title { font-size: 92px; font-weight: 800; fill: #f8fafc; letter-spacing: 0; }
      .subtitle { font-size: 36px; font-weight: 520; fill: #cbd5e1; }
      .small { font-size: 25px; fill: #94a3b8; }
      .chip { font-size: 27px; font-weight: 650; fill: #e2e8f0; }
      .node { font-size: 31px; font-weight: 700; fill: #07111f; }
      .label { font-size: 28px; font-weight: 650; fill: #e2e8f0; }
      .muted { font-size: 24px; fill: #9fb0c5; }
    </style>
  </defs>

  <rect width="1600" height="900" fill="url(#bg)"/>

  <g opacity="0.28">
    <circle cx="1380" cy="120" r="230" fill="#0ea5e9" opacity="0.22"/>
    <circle cx="1230" cy="780" r="260" fill="#22c55e" opacity="0.18"/>
    <circle cx="200" cy="760" r="260" fill="#f59e0b" opacity="0.12"/>
  </g>

  <g opacity="0.22" stroke="#94a3b8" stroke-width="1">
    <path d="M80 160 H1520"/>
    <path d="M80 740 H1520"/>
    <path d="M230 70 V820"/>
    <path d="M1370 70 V820"/>
  </g>

  <g transform="translate(92 76)">
    <rect x="0" y="0" width="300" height="54" rx="27" fill="#0f172a" stroke="#334155"/>
    <circle cx="30" cy="27" r="9" fill="#34d399"/>
    <text class="sans chip" x="52" y="36">Day 0 launch</text>
  </g>

  <text class="sans title" x="92" y="205">BuildEcho</text>
  <rect x="92" y="228" width="522" height="8" rx="4" fill="url(#accent)"/>
  <text class="sans subtitle" x="92" y="300">Agentic public building for developers</text>
  <text class="sans small" x="92" y="348">Turn real development progress into public proof, social drafts,</text>
  <text class="sans small" x="92" y="383">community feedback, and the next build step.</text>

  <g filter="url(#softShadow)" transform="translate(92 455)">
    <rect x="0" y="0" width="1416" height="164" rx="28" fill="#f8fafc" opacity="0.96"/>
    <g transform="translate(48 52)">
      <rect x="0" y="0" width="190" height="64" rx="32" fill="#bae6fd"/>
      <text class="sans node" x="95" y="42" text-anchor="middle">Build</text>
      <path d="M210 32 H290" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
      <path d="M290 32 l-16 -12 M290 32 l-16 12" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>

      <rect x="314" y="0" width="170" height="64" rx="32" fill="#bbf7d0"/>
      <text class="sans node" x="399" y="42" text-anchor="middle">Tell</text>
      <path d="M504 32 H584" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
      <path d="M584 32 l-16 -12 M584 32 l-16 12" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>

      <rect x="608" y="0" width="190" height="64" rx="32" fill="#fde68a"/>
      <text class="sans node" x="703" y="42" text-anchor="middle">Listen</text>
      <path d="M818 32 H898" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
      <path d="M898 32 l-16 -12 M898 32 l-16 12" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>

      <rect x="922" y="0" width="205" height="64" rx="32" fill="#ddd6fe"/>
      <text class="sans node" x="1024" y="42" text-anchor="middle">Decide</text>
      <path d="M1147 32 H1227" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
      <path d="M1227 32 l-16 -12 M1227 32 l-16 12" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>

      <rect x="1251" y="0" width="170" height="64" rx="32" fill="#fecaca"/>
      <text class="sans node" x="1336" y="42" text-anchor="middle">Build</text>
    </g>
  </g>

  <g transform="translate(92 690)">
    <text class="sans label" x="0" y="0">Agent-driven. Human-approved.</text>
    <text class="sans muted" x="0" y="44">Open-source • CLI first • Contributions welcome</text>
  </g>

  <g transform="translate(940 662)">
    <rect x="0" y="0" width="568" height="104" rx="22" fill="#0f172a" stroke="#334155"/>
    <text class="mono small" x="34" y="42" fill="#dbeafe">github.com/apuslabs/BuildEcho</text>
    <text class="sans muted" x="34" y="76">Help shape the public-building agent loop</text>
  </g>
</svg>`;

await writeFile('assets/social/buildecho-day0.svg', svg);
await sharp(Buffer.from(svg)).png().toFile('assets/social/buildecho-day0.png');
console.log('assets/social/buildecho-day0.png');
