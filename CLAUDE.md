# Identity: QToys · DOCS

**This folder = the QToys theme's public docs, FAQ and support site.**

- **What:** Astro docs site — `.mdx` pages, `/faq`, `/support` (Netlify Forms + auto-reply function).
- **Source of truth for settings copy:** `src/data/theme-schema.json`, exported from the theme repo
  with `node scripts/export-docs-schema.mjs` (writes `../qtoys-docs/src/data/theme-schema.json`). Never hand-edit it; never retype setting labels in
  prose that a `<SettingsTable>` already shows.
- **Writing rules (Theme Store):** American English, sentence case, same terminology as the theme
  editor (heading, signup, navigation, main menu, footer menu, slideshow, top bar), and QToys' own
  terms: grow line, age band (0–6m · 6–12m · 1–2y · 2–3y · 3–5y · 5–8y), skill tags (Move, Think, Feel, Pretend, Create), gift finder, trade-in, pre-loved. Keep the FAQ
  current. Bold the exact setting labels you mention. Never promise custom work — point to the support policy and the Partner Directory.
- **Images:** `public/images/docs/*.png`, captured from the QToys demo store (preset QToys). Every filename used in the `.mdx` must exist.
- **Engine:** forked from `qcut-docs`; brand preset `qtoys` in `src/config.ts`. Live at https://qtoys.qdn.vn.
