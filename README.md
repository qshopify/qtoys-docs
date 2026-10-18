# QToys Docs

Documentation, FAQ and support site for the **QToys** Shopify theme — the
links the Theme Store listing and `theme_info` point to.

Built from the QDN guide engine (`qsortby-user-guide`): Astro 4 + MDX +
Tailwind, deployed on Netlify.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## What's here

| Path | What |
| --- | --- |
| `src/content/docs/<n>-<section>/<n>-<page>.mdx` | Doc pages. Folders and number prefixes set the sidebar order. |
| `src/data/theme-schema.json` | The theme editor's settings, exported from the theme. **Don't edit by hand.** |
| `src/components/SettingsTable.astro` | `<SettingsTable section="hero" />` renders a section's settings from that JSON. |
| `src/data/faqs.ts` | Questions on `/faq` (also emitted as FAQPage structured data). |
| `src/pages/support.astro` | Support form (Netlify Forms, with file upload). |
| `netlify/functions/submission-created.mjs` | Auto-reply email for the support form. |
| `src/config.ts` | Brand preset (`qtoys`), demo store URL, support email, response time. |

## Keep the docs in sync with the theme

Settings tables must match the theme editor word for word (Theme Store
requirement). After changing any section schema in the theme repo:

```bash
# in the QToys theme repo
node scripts/export-docs-schema.mjs   # writes ../qtoys-docs/src/data/theme-schema.json
```

`SettingsTable` throws at build time if a page references a section, block or
settings group that no longer exists, so renamed sections can't slip through.

## Netlify setup

1. Create a site from this repo (build command and publish dir come from `netlify.toml`).
2. **Forms**: enable form detection. Add a notification email for the `support` form.
3. **Auto-reply**: set `RESEND_API_KEY`, `SUPPORT_FROM` (a verified sender) and
   optionally `SUPPORT_REPLY_TO` in *Site configuration → Environment variables*.
4. Point the docs domain (https://qtoys.qdn.vn) at the site and update `site` in `astro.config.mjs`
   and the theme's `theme_documentation_url` / `theme_support_url`.
