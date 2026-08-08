# Newswire (ColorLib Meranda) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-newswire`.

## Design notes (replication findings)

- **Original:** ColorLib "Meranda" — news/magazine template
  (source: https://colorlib.com/wp/template/meranda/). TEMPLATES.md has
  TWO copies of this item (lines 272, 2204 — mark BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/meranda/ (HTTP
  200, 30.3 KB, title "Meranda — Website Template by Colorlib").
  Stylesheet `css/style.css` (23.6 KB) on Bootstrap 4 base. Hero is an
  **owl-carousel** (`.owl-carousel.hero-slide.owl-style`) with edge
  prev/next arrows + dot nav (active dot `#8bc34a`).
- **Screenshot:** `meranda-free-template.jpg` — also viewed live in a
  browser (vision): white editorial news layout; logo + socials top-left,
  pill search top-right, uppercase menu bar below; split hero (photo left,
  text right) with lime "EDITOR'S PICK" tag; lime dash underlines on
  section headers; numbered Trending/Popular lists; grey newsletter band
  with pill input + dark circular send button; minimal copyright footer.
- **Visual design:** modern editorial news — white page bg, dark ink text,
  generous whitespace, lime `#8bc34a` interactive accent, B612 Mono
  (monospace) navbar vs Cabin body/headings, pill (30px radius) inputs and
  dark buttons that flip to lime on hover, numbered lists, category
  columns, `bg-light` hero panel + subscribe band.

## Design tokens (from css/style.css)

| Token          | Value                                                   | Where                                                                                     |
| -------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Accent lime    | `#8bc34a`                                               | `.caption`/`.more` links, active nav underline, owl active dot, btn hover, ul-check icons |
| Ink            | `#000` (links `#212529`/`#343a40`)                      | site-logo, headlines, `.btn-secondary` bg                                                 |
| Body text      | Bootstrap gray `#808080`, weight 300, .9rem             | paragraphs; `.post-meta` `.8rem`                                                          |
| Light bg       | `#f8f9fa` (`bg-light`)                                  | hero panel, featured half-post panel, subscribe band                                      |
| Pill buttons   | radius 30px, bg `#000`, hover `#8bc34a`                 | `.btn-secondary` (search, subscribe send)                                                 |
| Pill inputs    | radius 30px, white bg, height 50px                      | search + newsletter email inputs                                                          |
| Section titles | 20px, weight 400, 1px solid `#222` bottom border        | `.section-title h2`                                                                       |
| Trend numbers  | 30px, `#ccc`, `flex: 0 0 50px`                          | `.trend-entry .number`                                                                    |
| More links     | uppercase, `.83rem`, `#8bc34a`                          | "See All Trends" / "See All Popular"                                                      |
| Navbar         | white bg, B612 Mono, sticky, active underline `#8bc34a` | `.site-navbar`                                                                            |
| Fonts          | Cabin (body/headings) + B612 Mono (nav)                 | Google Fonts                                                                              |

## Tasks (implementation order)

1. Scaffold `apps/newswire` (copy simplest existing app; package
   `@free-react-templates/newswire`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json).
3. `index.css` `@theme` tokens: `--color-accent: #8bc34a`,
   `--color-ink: #000000`, `--color-muted: #808080`, `--color-soft:
#f8f9fa`, `--font-sans: "Cabin"`, `--font-mono: "B612 Mono"`. Load
   Cabin (400/500/600/700) + B612 Mono via Google Fonts in `index.html`.
4. Tests first (TDD, 100% coverage), then components:
   - `TopBar` — site name "Newswire" (2rem, ink), social icons (inline
     SVG), pill search form ("Search...") with dark circular search
     button.
   - `Navbar` — sticky white bar in B612 Mono: Home (active) / Categories
     / Politics / Business / Health / Design / Sport / Contact; active
     link lime underline; hamburger + mobile off-canvas menu.
   - `HeroCarousel` — owl-style slider of `.half-post-entry` slides:
     image panel left (bg-image div or img), contents right: lime
     "Editor's Pick" caption, h2 headline, excerpt, meta (author in
     category · date • read time + star); prev/next arrows + dot nav with
     active lime dot. Lightweight index-based carousel.
   - `EditorsPick` — section-title heading + large post card (image top,
     title, excerpt, meta) + list of small post rows (title + meta).
   - `TrendingList` — numbered entries 01–04 (30px `#ccc` numbers) +
     "See All Trends" accent link.
   - `FeaturedPost` — standalone `bg-light` horizontal half-post panel
     (image left, headline + meta right).
   - `CategoryColumns` — Politics + Business columns, each with heading +
     3 post entries.
   - `RecentNews` — heading + list of post rows.
   - `PopularPosts` — numbered entries 01–04 + "See All Popular" link.
   - `Pagination` — page links 1 2 3 4, first active.
   - `Subscribe` — `bg-light` band, "Newsletter Subcribe" h2 (keep the
     source's typo or fix to "Subscribe" — prefer fixed spelling), pill
     email input (Enter your email) + dark circular send button
     (paper-plane), validation + success states.
   - `Footer` — copyright bar: "Copyright © <year> All rights reserved |
     made with ♥ by Colorlib".
5. Section order in `App.tsx`: TopBar → Navbar → HeroCarousel →
   EditorsPick → TrendingList → FeaturedPost → CategoryColumns →
   RecentNews → PopularPosts → Pagination → Subscribe → Footer.
6. Placeholder images: `https://picsum.photos/seed/newswire-<n>/<w>/<h>`
   (e.g. `newswire-1/900/600` hero, `newswire-2/600/400` editor's pick,
   `newswire-3/400/300` category/featured).
7. Verify: `scripts/verify-app.sh newswire` (typecheck + lint + 100%
   coverage tests + build). PR description must list source template,
   preview URL, tokens, renames, and that picsum/lucide replace assets.
8. After merge: mark BOTH Meranda lines in TEMPLATES.md `[x]` (272, 2204)
   - surge URL + `npm run readme:status`.
