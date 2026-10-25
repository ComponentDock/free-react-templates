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
   section backgrounds. **Resolve the cascade, don't just grep**: a grep hit is
   the *declared* value, not the painted one. Elements carry several classes, so
   check specificity + declaration order before writing a token — measured on
   `readit` (2026-10-24): the footer element carries `ftco-footer ftco-bg-dark`,
   `.ftco-bg-dark{background:#3c312e}` precedes `.ftco-footer{background:#222831}`
   at equal specificity, so `#222831` paints while the grep table says `#3c312e`;
   and `.ftco-footer .ftco-heading-2{color:#000}` is dead because the more
   specific `.ftco-footer .ftco-footer-widget h2` paints those headings white.
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
- **Astro-built demos have no `css/main.css`.** A growing share of new previews
  (`theme/saasify/`) ship one hashed sheet — `_astro/Base.<hash>.css` — and no
  `js/main.js`. Tokens are compiled Tailwind utilities, not author custom
  properties: `grep -oE '\.(bg|text|from|to|border|ring)-<name>-[0-9]+\{[^}]*\}'`
  and read the literal out of the rule (`.bg-primary-600{background-color:#7c3aed}`)
  — looking for `--color-primary-*` in `@theme` finds nothing. Gradient-clipped
  headlines live in `.text-gradient` (`--tw-gradient-from/to`, often
  `to right in oklab`); a near-miss hex pair there is a real fidelity delta.
- **Multi-page previews 308 on the slug path.** `/contact` answers `308` with a
  0-byte body and redirects to `/contact/` (then `200`); probe with `-L` or the
  size reads as an empty page and the inner-page census silently comes back
  blank. Their links are absolute (`/theme/<slug>/docs/`), so a one-pager must
  map them to on-page anchors rather than copying `href`s.
- **Copy the layout utility, not a lookalike wrapper.** Astro/Tailwind sources
  wrap every band in `container mx-auto px-4 lg:px-8`, **not**
  `mx-auto max-w-7xl px-4`. The two only agree at 1280 and 1440: `container`
  steps its max-width at each theme breakpoint (475 / 640 / 768 / 1024 / 1280),
  so at 992 the reference's 4-column card row collapses to two **360 px** cards
  and at 576 to two **213 px** cards, while `max-w-7xl` keeps the row full-bleed
  (472 / 264 px). Reproduce it by using `container` and declaring the source's
  extra step (`--breakpoint-xs: 475px`) in `@theme` — measured on
  `theme/fixtura/` (2026-10-25), where the delta was 24–110 px per card.
- **`bg-<name>-50` can be a phantom class.** A sheet may use a utility it never
  emitted (Astro content scanning misses dynamic strings); on
  `theme/fixtura/` `bg-sand-50` has no rule, so the band renders the body
  ground. Measure the band's computed background before "restoring" the tint,
  define the token at the **rendered** value, and note the deviation in the PR.
- **Measure the census before and after a spec rewrite.** `git stash push --
  openspec/specs/template-<name> docs/templates/<name>` → run
  `verify-spec-row-mismatch.py` → `git stash pop` gives the true "before"
  numbers (`AGREE`/`DRIFT`/`SLUG-OWNER`), so the `docs/spec-row-mismatch.md`
  table records measured values instead of a hand-computed guess — a spec
  rewrite can move `SLUG-OWNER` too, not just `DRIFT`.
- **`openspec validate` works from a clone without `node_modules`:** run the
  main tree's binary from your own workdir
  (`/root/free-react-templates/node_modules/.bin/openspec validate template-<name>`).
