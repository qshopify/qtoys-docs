/* =====================================================================
   GUIDE CONFIG — the ONE file to style this guide for a given app.
   Change `preset` to one of the QDN-family apps and the whole guide
   reskins (accent color + logo glyph + name). Or set custom overrides.
   ===================================================================== */

export type Glyph = 'square' | 'stack' | 'signal' | 'rosette';

/** SVG inner shapes for each app's mark (frame is added by the logo). */
export const GLYPHS: Record<Glyph, (c: string) => string> = {
  square: (c) => `<rect x="11" y="11" width="10" height="10" rx="2.5" fill="${c}"/>`,
  stack: (c) =>
    `<rect x="13.25" y="7.6" width="5.5" height="5.5" rx="1.5" fill="${c}"/><rect x="13.25" y="13.75" width="5.5" height="5.5" rx="1.5" fill="${c}" fill-opacity="0.55"/><rect x="13.25" y="19.9" width="5.5" height="5.5" rx="1.5" fill="${c}" fill-opacity="0.28"/>`,
  signal: (c) =>
    `<rect x="9.2" y="17.2" width="5.6" height="5.6" rx="1.5" fill="${c}"/><path d="M12 14 A6 6 0 0 1 18 20" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/><path d="M12 10.5 A9.5 9.5 0 0 1 21.5 20" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>`,
  rosette: (c) =>
    `<rect x="10.3" y="10.3" width="11.4" height="11.4" rx="1.6" fill="${c}"/><rect x="10.3" y="10.3" width="11.4" height="11.4" rx="1.6" fill="${c}" transform="rotate(45 16 16)"/>`,
};

export type Preset = {
  brand: string;        // wordmark, e.g. "QSortby"
  accent: string;       // main accent (fills, borders)
  accentInk: string;    // darker accent for text on light (AA)
  accentSoft: string;   // tint for pills / active nav
  glyph: Glyph;
};

/** The QDN family — reuse the exact brand marks + colors. */
export const PRESETS: Record<string, Preset> = {
  qdn:     { brand: 'QDN',     accent: '#e2622a', accentInk: '#ab4715', accentSoft: '#f7e4d8', glyph: 'square' },
  // QSortby — matches the marketing site's "Polaris Pro" Shopify-green accent.
  qsortby: { brand: 'QSortby', accent: '#00a36b', accentInk: '#067a55', accentSoft: '#e9f6f0', glyph: 'stack' },
  qnotify: { brand: 'QNotify', accent: '#2f6fed', accentInk: '#1e4fbf', accentSoft: '#dde6fb', glyph: 'signal' },
  qmember: { brand: 'QMember', accent: '#7c5cff', accentInk: '#5b3fd6', accentSoft: '#e7e1ff', glyph: 'rosette' },
  // QThe — the theme's own bronze (logo square) on warm ink.
  qthe:    { brand: 'QThe',    accent: '#a16207', accentInk: '#7a4a06', accentSoft: '#f6efe3', glyph: 'square' },
  // QCut — the fit-marker orange (Halden preset) on ink.
  qcut:    { brand: 'QCut',    accent: '#d9461a', accentInk: '#a8340f', accentSoft: '#fbe6dc', glyph: 'square' },
  // QToys — the Myoi pink of the grow line, with an AA ink for text.
  qtoys:   { brand: 'QToys',   accent: '#F784C9', accentInk: '#9d2f6e', accentSoft: '#fde7f3', glyph: 'square' },
};

/* ------------------------------------------------------------------ */
/*  EDIT HERE to spin up a guide for another app.                     */
/* ------------------------------------------------------------------ */
export const site = {
  preset: 'qtoys' as keyof typeof PRESETS,    // ← the product this guide is for
  guideLabel: 'Docs',                        // tag next to the wordmark
  tagline: 'Set up QToys, put the grow line on every toy, and get answers from the team that built it.',
  homeUrl: 'https://qdn-theme-demo.myshopify.com', // "view demo" link
  demoLabel: 'Demo store',
  themeStoreUrl: 'https://themes.shopify.com', // TODO: QToys listing URL once published
  supportEmail: 'support@qdn.vn',            // TODO: confirm the support inbox
  responseTime: 'two business days',
  // Optional overrides (uncomment to customise a preset):
  // brand: 'My App',
  // accent: '#123456', accentInk: '#0a1a2e', accentSoft: '#dbe7f5',
  // glyph: 'square' as Glyph,
} as Record<string, any>;

/** Resolved theme = preset + any overrides in `site`. */
export function theme(): Preset {
  const base = PRESETS[site.preset] ?? PRESETS.qdn;
  return {
    brand: site.brand ?? base.brand,
    accent: site.accent ?? base.accent,
    accentInk: site.accentInk ?? base.accentInk,
    accentSoft: site.accentSoft ?? base.accentSoft,
    glyph: (site.glyph ?? base.glyph) as Glyph,
  };
}

/** QCut symbol — the Q with an orange square carrying the fit line (rule + marker). */
const QCUT_MARK = (size: number) =>
  `<svg viewBox="-30 110 352 320" width="${size}" height="${size}" aria-hidden="true"><path fill="#1E1E1A" fill-rule="evenodd" d="M77.97 140L216.54 140A75.37 75.37 0 0 1 291.91 215.37L291.91 285.61A43.09 43.09 0 0 0 265.59 276.63L220.16 276.63L220.15 233.17A28.76 28.76 0 0 0 191.4 204.42L97.4 204.42A25.64 25.64 0 0 0 71.76 230.05L71.76 311.73A25.25 25.25 0 0 0 97.01 336.98L153.14 336.98L153.14 373.67A43.09 43.09 0 0 0 162.12 400L74.33 400A74.33 74.33 0 0 1 0 325.67L0 217.97A77.97 77.97 0 0 1 77.97 140Z"/><path fill="#D9461A" d="M196.24 293.40H265.58A26.33 26.33 0 0 1 291.91 319.73V373.67A26.33 26.33 0 0 1 265.58 400.00H196.24A26.33 26.33 0 0 1 169.91 373.67V319.73A26.33 26.33 0 0 1 196.24 293.40Z"/><rect x="186" y="358" width="90" height="9" rx="4.5" fill="#F4F1EA"/><path fill="#F4F1EA" d="M238.5 322h20l-10 22z"/></svg>`;

/** QToys symbol — the Q with a pink square carrying the grow line (six bands, three lit). */
const QTOYS_MARK = (size: number) =>
  `<svg viewBox="-30 110 352 320" width="${size}" height="${size}" aria-hidden="true"><path fill="#282828" fill-rule="evenodd" d="M77.97 140L216.54 140A75.37 75.37 0 0 1 291.91 215.37L291.91 285.61A43.09 43.09 0 0 0 265.59 276.63L220.16 276.63L220.15 233.17A28.76 28.76 0 0 0 191.4 204.42L97.4 204.42A25.64 25.64 0 0 0 71.76 230.05L71.76 311.73A25.25 25.25 0 0 0 97.01 336.98L153.14 336.98L153.14 373.67A43.09 43.09 0 0 0 162.12 400L74.33 400A74.33 74.33 0 0 1 0 325.67L0 217.97A77.97 77.97 0 0 1 77.97 140Z"/><path fill="#F784C9" d="M196.24 293.40H265.58A26.33 26.33 0 0 1 291.91 319.73V373.67A26.33 26.33 0 0 1 265.58 400.00H196.24A26.33 26.33 0 0 1 169.91 373.67V319.73A26.33 26.33 0 0 1 196.24 293.40Z"/><g fill="#FFFFFF"><rect x="186" y="352" width="11" height="9" rx="4"/><rect x="200" y="352" width="11" height="9" rx="4"/><rect x="214" y="352" width="11" height="9" rx="4"/></g><g fill="#FFFFFF" fill-opacity="0.45"><rect x="228" y="352" width="11" height="9" rx="4"/><rect x="242" y="352" width="11" height="9" rx="4"/><rect x="256" y="352" width="11" height="9" rx="4"/></g><path fill="#84C9F4" d="M231 330c0-9 6-15 15-15 0 9-6 15-15 15z"/><path fill="#FFFFFF" d="M229 330c0-8-5-13-13-13 0 8 5 13 13 13z"/></svg>`;

/** Logo mark for a given pixel size. QCut uses its own symbol; the QDN family keeps frame + glyph. */
export function logo(size = 28, frame = '#101317'): string {
  if (site.preset === 'qcut') return QCUT_MARK(size);
  if (site.preset === 'qtoys') return QTOYS_MARK(size);
  const t = theme();
  return `<svg viewBox="0 0 32 32" width="${size}" height="${size}" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="27" height="27" rx="7" stroke="${frame}" stroke-width="2"/>${GLYPHS[t.glyph](t.accent)}</svg>`;
}
