# Darkroom (Colorlib Sunzine) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-darkroom`.

## Design notes (replication findings)

- **Original:** ColorLib "Sunzine" — photography/photo-gallery template
  (source: https://colorlib.com/wp/template/sunzine/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sunzine/
  (HTTP 200; `css/style.css` ~35 KB parsed for tokens). Title tag:
  "SUNZINE | Photography HTML Template". Screenshot
  `sunzine-free-template.jpg` used as the visual reference.
- **Visual design (from screenshot):** clean minimalist photography
  portfolio on white. Sparse fixed header: camera-icon logo "SUNZINE" left,
  uppercase nav (HOME, ABOUT, BLOG, CONTACT) + search + hamburger icons
  right. Centered uppercase black hero headline. Below it a category filter
  bar (Photography, Travel, Nature, Fashion, Life Style) with small
  lime-green icons, then a masonry ~4-column grid of photo tiles (interiors,
  architecture, food, portraits, watches, dogs, cars). Palette is neutral
  white/black/grey with a single lime-green accent (#0ECE91). Footer not
  visible in the screenshot (taken from CSS).
- **Structure (1:1, section order):**
  1. Header (`.header`, fixed, `background: #fff`, shadow
     `0 10px 50px rgba(0,0,0,0.1)`): `.site-logo` (img) left; `.header__right`
     float right — `.main__menu` ul with HOME (`.menu--active`), ALBUMS,
     ABOUT (sub-menu: Albums Details, Blog Details), BLOG, CONTACT; then
     `.header__switches` (search-switch + nav-switch, 18px, #111111,
     margin-left 25px). Offcanvas mobile menu with logo + slicknav.
     Menu links: 14px uppercase Aldrich, #B7B7B7, padding 5px 9px,
     margin-right 20px; `:after` 6px-high #0ECE91 bar (bottom: 8px,
     width 0 → 100% transition 0.3s) on hover/.menu--active; color → #111111.
  2. Hero (`.hero`, padding 80px 0, white): centered h2, uppercase, weight
     400, line-height 1.6, Aldrich 36px (#111111; 30px on ≤576px):
     "Hello! Welcome to SUNZINE photo gallery With Creative & Unique Style".
  3. Gallery (`.gallery__section`, padding 0 5px, overflow hidden):
     - `.filter-controls` (text-align center, padding-top 30px,
       margin-bottom 40px): ul li inline-block 14px Aldrich uppercase
       #B7B7B7, margin 10px 15px 10px, "•" `:after` separator (right -19px,
       none on last child), `:before` 6px-high #0ECE91 bar bottom 4px
       width 0 → 100% on hover/.active, color → #111111. Items: ALL,
       PHOTOGRAPHY, TRAVEL, NATURE, FASHION, LIFE STYLE (data-filter
       `*`/`.photo`/`.travel`/`.natural`/`.fashion`/`.lifestyle`).
     - `.gallery__warp` (overflow hidden): ~20 `.mix.grid__item` floated
       tiles, varied widths (default 25%; grid--1 28%, grid--2 19%,
       grid--3 27%, grid--4 26%, grid--8/9/10 variants; 40% tablet, 100%
       ≤576px), 5px padding gutters (10px effective), each an `<a
class="gallery_img set-bg">` with `height: 360px`, `margin-bottom:
10px`, background photo. Hover: `:after` black overlay opacity
       0 → 0.1; `.gellery__text` (absolute bottom 20px, padding 0 30px,
       z-index 3) — `<span>` uppercase category + `<h3>` title — slides up
       - fades in (span 0.3s ease 0.2s delay, h3 0.3s).
  4. Footer (`.footer__section`, bg **#222222**, padding 25px 40px 15px):
     col-lg-3 footer logo left, col-lg-6 centered `.footer__copyright__text`
     (16px Raleway #B7B7B7: "Copyright © <year> All rights reserved | This
     template is made with ♥ by Colorlib"; links #fff, hover #0ECE91;
     heart icon #b91b1b), col-lg-3 `.footer__social` right (fa-facebook,
     fa-twitter, fa-instagram).
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#0ECE91** (lime green) — nav underline bars, filter
    underline bars, link hovers.
  - Ink: **#111111** — headings (h2 36px/1.4, h3 30px, h4 24px, all
    Aldrich), nav hover/active, switch icons.
  - Grays: **#B7B7B7** (nav links, filter text, footer text), #707070.
  - Footer bg **#222222**; heart icon **#b91b1b**.
  - Fonts: **Raleway** (body) + **Aldrich** (headings + nav + filters).
  - Header shadow `0 10px 50px rgba(0,0,0,0.1)`; gallery hover overlay
    rgba(0,0,0,0.1). No radii anywhere (square corners). No CTA buttons on
    the homepage.
- **Recreation decisions:** photos → `picsum.photos/seed/darkroom-<n>/<w>/<h>`
  (tiles ~600×360); icons → lucide-react (search, menu, camera, facebook,
  twitter, instagram, heart); Raleway + Aldrich via Google Fonts `<link>` in
  `index.html`; `#0ECE91` in `@theme` as the brand color; no assets copied.

## Implementation tasks

1. Scaffold `apps/darkroom` (copy the simplest existing app, rename package
   to `@free-react-templates/darkroom`), register workspace + `npm install`
   at root (lockfile!), `injectUiSource()` in vite.config.ts.
2. `src/index.css`: `@theme` tokens — `--color-brand: #0ECE91`,
   `--color-ink: #111111`, `--color-footer: #222222`, `--color-muted:
#B7B7B7`; font families `--font-display: Aldrich`, `--font-body: Raleway`.
3. `src/components/Navbar.tsx` — fixed white header (shadow), camera icon +
   "Darkroom" logo, uppercase nav (Aldrich, #B7B7B7 → #111111 + green
   underline bar on hover/active), About dropdown, search + menu icon
   switches; mobile menu (offcanvas overlay).
4. `src/components/Hero.tsx` — centered uppercase headline (Aldrich, 400,
   line-height 1.6), white bg, 80px vertical padding.
5. `src/components/Gallery.tsx` — filter bar (All/Photography/Travel/
   Nature/Fashion/Life Style, bullet separators, green underline on active)
   - masonry grid (~20 tiles, varied widths 19–28%, picsum seeds
     `darkroom-1..20`, 360px tall) with hover caption overlay (category span +
     title h3 slide-up). Filtering state filters tiles by category.
6. `src/components/Footer.tsx` — dark #222222, logo left, centered
   attribution line, social icons right; hover → green.
7. `src/App.tsx` — compose Navbar (banner) + main(Hero, Gallery) + Footer
   (contentinfo); document title "Darkroom — Photography Template".
8. Tests (TDD, 100% coverage): Navbar (links, dropdown, hover/active
   styling), Hero (headline), Gallery (filter bar, filtering behaviour,
   grid render, tile hover captions), Footer (content, hover), App
   composition + landmark roles.
9. Gate: `npm run verify:app -- darkroom`; PR to main, merge immediately,
   TEMPLATES.md `[~]`→`[x]` + surge URL + `npm run readme:status`.

## Verification checklist (spec)

- `npm run spec:validate` passes
- 100% coverage on `apps/darkroom`
- `npm run verify:app -- darkroom` green
- Full gate green in CI on merge
- Section order 1:1 vs preview; tokens #0ECE91/#111111/#222222/#B7B7B7,
  Raleway + Aldrich via `@theme`
- No ColorLib assets copied (picsum + Google Fonts + lucide only)
