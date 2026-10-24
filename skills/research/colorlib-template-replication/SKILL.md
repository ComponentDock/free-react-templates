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
- **IPv6 is IP-banned, IPv4 works (2026-10-13):** `colorlib.com` and
  `preview.colorlib.com` answer Cloudflare "Error 1106 — the owner of this
  website has banned your IP address" (403, 17 bytes) for **every IPv6**
  request — HTML, CSS and the checklist screenshots alike — while plain
  `curl -4` to the same URL returns 200. The browser tool shares the ban, so
  try `curl -4` before declaring the preview unreachable.
- **Resolve the snippet's stylesheet against the page URL:** the accordion
  family's CSS is `<page>/css/style.css?v=…`
  (`/theme/bac/accordion-12/css/style.css`), _not_
  `/theme/bac/css/style.css` — the latter 404s with a 9-byte "Not Found".
  The page's own `href` is the authority.
- The **Website Menus** family (`website-menu-*`) does **not** live at
  `/theme/<slug>/` (that 404s) — its live preview is
  `https://preview.colorlib.com/theme/bootstrap/<slug>/`, found through the
  preview host's own catalog index. Verify the preview's CSS byte size +
  sha256 against the snippet archive (`/downloads/free/<slug>.zip`) before
  trusting a prep spec's token table.
- **Off-canvas sidebar + closed panel:** a panel that is `aria-hidden` while
  shut exposes **no accessible roles** — `getAllByRole('link')` throws. Query
  the shut state via `getByTestId`/`hidden: true`, or open the panel first, and
  keep a labelled `button` for the veil (a bare `div` overlay is not operable).
- **"No rounding" class assertions:** `/rounded/` also matches a legitimate
  square-language `rounded-none`. Assert the absence of real radii
  (`rounded-full`, `rounded-lg`, `rounded-md`, `rounded-sm`) or filter the
  class list for `rounded` tokens other than `-none`.
- **Class-string assertions:** `not.toContain('text-brand')` also matches
  `hover:text-brand`. Compare `className.split(' ')` tokens instead.
- **Declared-but-missing pages:** when the source's menu points at
  `about.html` etc. that do not exist, materialise each as a real in-band panel
  with a matching `id` and `scroll-mt-[7rem]`, and keep the first viewport pure
  image (`pt-[100vh]` inside a `min-h-screen` band) — never ship `href="#"`.
- **Focus-return hooks:** read refs once at effect start
  (`panelRef.current as HTMLElement`) and capture the trigger node in the
  closure so the cleanup can return focus without optional-chaining branches —
  that keeps 100% branch coverage reachable.
- **In-page anchor clicks in tests:** attach a native `{ once: true }`
  `preventDefault` listener before `user.click(anchor)` (see
  `docs/ai-context.md`) or the click can silently be dropped from the suite.
- If the preview is unreachable, fall back to the screenshot as the sole
  reference and say so in the PR.
- **A `[x]` row is a claim, not proof.** `TEMPLATES.md` rows can credit an app
  that renders a _different_ design (measured 2026-10-24: 10 such rows, incl.
  Spark → `apps/spark`, which is Appco's at 25 exclusive copy hits vs 0).
  Before treating the backlog as closed, adjudicate with
  `python3 scripts/verify-spec-row-mismatch.py --network --only <app>`: a
  `ROW-POINTER` verdict means the row's design was never built. Re-point the
  row at the app you build (never edit the other app's source to "become" the
  design) and mark **every** copy of a duplicated row — the same design often
  appears on 2–3 rows in different categories.
