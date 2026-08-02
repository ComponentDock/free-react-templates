---
name: colorlib-template-replication
description: 'Recreate ColorLib templates faithfully from preview and CSS.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [colorlib, templates, replication, design, css, react, frontend]
    related_skills: [web-catalog-scraping, vite-react-monorepo-tooling, autonomous-cron-pipelines]
---

# ColorLib Template Replication

Recreate a ColorLib website template in a modern stack (React/Vite/Tailwind)
**faithfully** — the original design is the reference, never the agent's
imagination. Developed while rebuilding the "Aurora" template to match
ColorLib "Maze" (the first attempt looked nothing like the original because
it was built from a spec with no visual reference).

## When to use

- Any task that recreates/clones/port of a ColorLib (or similar) template.
- Templates built "from memory" or "from a name" will NOT match — always pull
  the real reference first.

## Reference sources (all self-serve, no manual steps)

1. **Live preview DOM** — `https://preview.colorlib.com/theme/<slug>/`
   (e.g. Maze → https://preview.colorlib.com/theme/maze/).
   This is the REAL rendered template: section order, headings, copy, buttons,
   forms. Fetch with curl and grep the structure:
   `grep -oE '<(header|section|footer|nav|div)[^>]*(id|class)="[^"]*"' preview.html`
   or load it in a browser and read the accessibility snapshot.
   - URL discovery: `preview.colorlib.com/assets/js/products.js` maps slugs to
     URLs. Older entries use base arrays: `U = ['https://preview.colorlib.com/theme/', ...]`
     and build `U[idx] + slug + '/'`.
2. **CSS tokens** — fetch the stylesheets the preview references (usually
   `css/main.css`): extract brand colors (`background:` on `.banner-area`,
   `.newsletter-area`, `.footer-area`), font family (often
   `font-family: "Poppins", sans-serif`), button styling (radius, padding),
   section backgrounds.
3. **Screenshot** — template screenshots are on the ColorLib template page
   (`https://colorlib.com/wp/template/<slug>/`) under
   `/wp-content/uploads/sites/2/<slug>*.jpg`, and in sitemap image tags.
   Open the image in a browser and describe the visual design (colors, layout,
   aesthetic) BEFORE writing code.

## Process

1. Fetch preview HTML + CSS to /tmp; extract section structure + design tokens.
2. View the screenshot; note the visual design.
3. Document structure + tokens in the template spec (Gherkin requirements per
   section: navbar, hero, cards, parallax, gallery, features, newsletter,
   footer, composition).
4. TDD: tests first, then implement section-for-section with matching layout,
   colors, font, and content types.
5. PR/description must state: source template, preview URL, design tokens,
   what differs (renames, placeholder images).

## Fidelity rules

- Match section structure + order 1:1.
- Match design tokens: brand color (put in `@theme` / CSS variable), font
  (Google Fonts `<link>`), button shapes, spacing rhythm.
- Match layout: split heroes, column counts, grid patterns.
- **Never copy assets** (images, font files, icons, CSS). Use:
  - placeholder images: `https://picsum.photos/seed/<template>-<n>/<w>/<h>`
    (deterministic per template)
  - Google Fonts via `<link>` in index.html
  - icons from lucide-react — but note: **lucide-react removed brand icons**
    (Facebook/Instagram/Linkedin/Twitter → `undefined`). Use inline SVG brand
    icons (simple-icons paths) instead.
- Text may be paraphrased but keep the same kind of content.

## Pitfalls

- Brand icons missing from lucide-react (see above) — verify exports with
  `node -e "console.log(typeof require('lucide-react').Facebook)"`.
- Test queries: desktop + mobile navs render duplicate links in the DOM —
  use `getAllByRole` and index the mobile one last.
- Forms that swap to a success message unmount the input — assert
  `queryByLabelText(...)` is absent instead of checking the input value.
- The ColorLib preview can be slow/bot-guarded; retry with a browser
  (Browserbase) if curl gets blocked.
- If the preview is unreachable, fall back to the screenshot as the sole
  reference and say so in the PR.
