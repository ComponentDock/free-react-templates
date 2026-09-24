# Pressly (ColorLib Newsflex) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-pressly`.

## Design notes (replication findings)

- **Original:** ColorLib "Newsflex" — free responsive news website template
  for online magazines and newspaper-like pages (source:
  https://colorlib.com/wp/template/newsflex/). TEMPLATES.md has TWO copies
  of this item (lines 276 — Blog category, and 2207 — Magazine category;
  mark BOTH `[x]` when done). **Screenshot trap:** both rows point at
  `newsbox-free-template.jpg` (the Newsbox template's image) — the REAL
  Newsflex screenshot is
  `newsflex-free-news-magazine-website-template.jpg`. Fix the image
  reference in both rows when marking done.
- **Demo DOM analyzed:** NOT REACHABLE. `https://preview.colorlib.com/theme/
newsflex/` → HTTP 404 (curl + browser). Slug absent from
  `preview.colorlib.com/assets/js/products.js`; `newsflex-colorlib.pages.dev`
  does not resolve (`ERR_NAME_NOT_RESOLVED`); the preview portal
  normalizes `#newsflex` to `#news` (a DIFFERENT template). No Wayback
  captures. Fallback: screenshot as the SOLE reference (per
  docs/replication.md — say so in the PR).
- **Screenshot:** `newsflex-free-news-magazine-website-template.jpg`
  (1200×978) — verified in a browser with vision analysis + pixel sampling:
  clean white news-magazine layout, red accents, cyan ad banner, light-gray
  trending strip, 2-column featured grid, tabbed news feed, newsletter
  widget. The screenshot CROPS at the newsletter box — the footer is NOT
  visible in the reference and is inferred (see gotchas).
- **Visual design:** content-first news aesthetic — white page, near-black
  text, brand red `#ef1c49` (logo, trending label, active tab, Subscribe
  button), light cyan `#74cbe0` header ad banner, light gray `#f4f4f4`
  trending bar + widget backgrounds; every article image carries a dark
  gradient overlay at the bottom with a small semi-transparent white date
  line above a white headline; rectangular (0-radius) buttons; clean
  sans-serif typography (Open Sans/Roboto/Helvetica-class).

## Design tokens (from pixel sampling of the real screenshot)

| Token         | Value      | Where                                                                               |
| ------------- | ---------- | ----------------------------------------------------------------------------------- |
| Brand red     | `#ef1c49`  | logo wordmark, "Trending" label, active tab text + underline, Subscribe button fill |
| Ad cyan       | `#74cbe0`  | header "YOUR ADD HERE" banner background                                            |
| Page bg       | `#ffffff`  | main page background                                                                |
| Light gray    | `#f4f4f4`  | trending bar strip, section dividers, newsletter widget box                         |
| Text          | near-black | headings; gray muted for meta (dates, bylines)                                      |
| Fonts         | sans-serif | clean modern stack (Open Sans / Roboto / Helvetica-class) — Google Fonts `<link>`   |
| Buttons       | 0-radius   | rectangular red CTA (Subscribe), no rounded corners in the reference                |
| Image overlay | gradient   | dark gradient at bottom of every article image; white date line + headline          |

## Tasks (implementation order)

1. Scaffold `apps/pressly` (copy the simplest existing app; package
   `@free-react-templates/pressly`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/pressly" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #ef1c49`,
   `--color-accent: #74cbe0`, `--color-surface: #f4f4f4`,
   `--font-sans: 'Open Sans', sans-serif` (or Roboto). Add the Google Fonts
   `<link>` to `index.html`.
4. `Header.tsx` — red bold wordmark "Pressly" left; centered nav links
   International / Local News / Pages / Sport / Lifestyle (uppercase,
   dark text, hover → brand red); right placeholder ad box labeled "YOUR
   ADD HERE" (bordered box, `bg-accent/30` + dashed border — do NOT embed
   a real ad); mobile: hamburger (lucide `Menu`) opens a dropdown/panel
   with the same links (aria-expanded).
5. `TrendingBar.tsx` — light-gray `#f4f4f4` strip: red "Trending" label
   (small caps/badge) + placeholder headline text (truncated/ellipsis on
   small screens).
6. `FeaturedGrid.tsx` — 2-column grid: LEFT large lead card (picsum
   `pressly-1` ~800×600) with bottom gradient overlay, small date line
   "June 20, 2018" (semi-transparent white), white headline "Traffic
   Problems in Time Square"; RIGHT two stacked smaller cards (picsum
   `pressly-2`/`pressly-3` ~400×300) with same treatment — "The best way
   to spend your holiday" / "Sport results for the weekend games". Stack
   vertically on mobile (lead first).
7. `NewsFeed.tsx` — letter-spaced "ALL THE NEWS" heading; tab row LATEST
   (active: `text-primary` + 2px `bg-primary` underline) / POPULAR /
   INTERNATIONAL / LOCAL; clicking a tab moves the active state; below,
   2+ thumbnail cards (picsum, image + title) side by side, stacking on
   mobile. Tab content can filter placeholder items or just swap the
   active indicator — keep it simple, tests assert the active-state swap.
8. `NewsletterWidget.tsx` — light-gray box: bold dark "Subscribe to our
   newsletter" heading, email input (placeholder "Your Email"), red
   `#ef1c49` "Subscribe" button (0-radius); zod validation, success message
   on valid submit, per-field error on invalid.
9. `Footer.tsx` — INFERRED dark footer (reference crops before it; follow
   the monorepo's news-template conventions e.g. bullion): brand/About
   blurb column, "Popular post"/links column, contact line, inline-SVG
   social icons, bottom copyright line with the ColorLib credit ("made
   with ♥ by Colorlib"). NOTE in the PR that the footer is inferred, not
   from the reference.
10. `App.tsx` — compose Header + TrendingBar + main (FeaturedGrid,
    NewsFeed, NewsletterWidget) + Footer; document title "Pressly — News
    Template".
11. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements. Watch the
    duplicate-link trap: desktop + mobile navs render duplicate links —
    use `getAllByRole` and index the mobile one last.
12. Run `scripts/verify-app.sh pressly` (typecheck + lint + coverage tests
    - build) until green.
13. Update TEMPLATES.md lines 276 AND 2207: `[ ]` → `[x]` (BOTH copies)
    with surge URL + homepage after deploy, and FIX the screenshot URL in
    both rows (`newsbox-free-template.jpg` →
    `newsflex-free-news-magazine-website-template.jpg`);
    `npm run readme:status`; commit `feat: Pressly — news template
(ColorLib Newsflex)`; PR → main → merge immediately.

## Fidelity gotchas

- **Preview is dead — screenshot is the ONLY reference.** Do not invent
  sections beyond what the screenshot shows; the visible order is: header →
  trending bar → featured grid → "ALL THE NEWS" → newsletter widget →
  footer (inferred). Document the fallback in the PR description.
- **Screenshot trap in TEMPLATES.md:** both rows reference the Newsbox
  screenshot. Use `newsflex-free-news-magazine-website-template.jpg` as the
  design reference and fix the rows when marking done.
- **Brand red is `#ef1c49`** (pixel-sampled from the real screenshot: the
  dominant saturated cluster (239,28,73)); ad cyan `#74cbe0` ((116,203,223)).
  Don't guess a bootstrap red — use these exact values.
- **Footer is NOT in the reference** — the screenshot crops at the
  newsletter box. Build a reasonable dark news-footer consistent with
  sibling replications (bullion/newsbit conventions) and flag it as
  inferred in the PR. Do NOT claim 1:1 fidelity for the footer.
- **Rectangular buttons** — the reference CTA has straight corners; avoid
  rounded-full / large-radius buttons.
- **Image overlays** — every article image needs a bottom dark gradient
  (`bg-gradient-to-t from-black/60`) with the date line and white headline
  on top; this is the template's signature treatment.
- **Dup rows:** TWO TEMPLATES.md copies (276 Blog, 2207 Magazine) — BOTH
  must be marked `[x]` and BOTH get the corrected screenshot URL.
- Nav links are duplicate in the DOM on mobile (desktop + mobile menu) —
  `getAllByRole('link')` and index; decorative images: `alt=""` images have
  no `img` role in Testing Library — query with
  `container.querySelectorAll('img')` where needed.
