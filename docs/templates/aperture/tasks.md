# Aperture (ColorLib Sunzine) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-aperture`.

## Design notes (replication findings)

- **Original:** ColorLib "Sunzine" — photography portfolio/gallery template
  (source: https://colorlib.com/wp/template/sunzine/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sunzine/
  (HTTP 200; ~11 KB HTML + `css/style.css` ~35 KB parsed for tokens).
  Screenshot `sunzine-free-template.jpg` viewed in browser (1200×946).
- **Visual design (from screenshot):** clean, minimalist, modern; stark
  white background, photography dominates. Header: camera-icon logo +
  bold uppercase "SUNZINE" left; uppercase links HOME/ABOUT/BLOG/CONTACT
  - search + hamburger icons right. Hero: centered bold uppercase
    headline + sub-line; category filter row (PHOTOGRAPHY, TRAVEL, NATURE,
    FASHION, LIFE STYLE). Body: dense 4-column masonry grid of photos
    (architecture, abstract B&W, food, portraits, textures, travel).
    No CTA buttons — the gallery IS the hero. Footer not visible in
    screenshot; captured from DOM/CSS (dark #222222, logo left, centered
    copyright, socials right).
- **Structure (1:1, section order):**
  1. Header (`.header`, padding 28px 78px): `.site-logo` (camera icon +
     "Aperture") left; `.main__menu` right — HOME / ALBUMS / ABOUT
     (dropdown `.sub__menu`: Albums Details, Blog Details) / BLOG /
     CONTACT, 14px uppercase Aldrich #B7B7B7, hover #111111 with 6px
     green underline growing L→R; `.header__switches` — search icon +
     `.nav-switch` hamburger (18px #111111, margin-left 25px). Sticky:
     `.header.sticky` fixed white + shadow `0 10px 50px
rgba(0,0,0,0.1)`. Mobile: `.offcanvas-menu` 270px slide-in from
     left + overlay rgba(0,0,0,0.5); `.slicknav` mobile menu.
  2. Hero (`.hero`, padding 80px 0): centered `.container > .row >
.col-lg-10.m-auto` with h2 "Hello! Welcome to SUNZINE photo gallery
     With Creative & Unique Style" — 30px, weight 400, uppercase,
     line-height 1.6. NOTE: copy must be paraphrased to the new name
     ("Hello! Welcome to Aperture photo gallery With Creative & Unique
     Style").
  3. Gallery (`.gallery__section`, padding 0 5px):
     - `.filter-controls` (padding-top 30px, margin-bottom 40px,
       centered): `ul li` inline-block 14px uppercase Aldrich #B7B7B7
       with `•` separators (last child none), hover #111111 + 6px green
       underline; data-filter: `*` ALL, `.photo` PHOTOGRAPHY, `.travel`
       TRAVEL, `.natural` NATURE, `.fashion` FASHION, `.lifestyle`
       LIFE STYLE. Implement with React state (no mixitup): tiles carry
       a category; clicking a filter shows matching tiles only.
     - `.gallery__warp` masonry grid: 20 `.mix.grid__item` tiles
       (`grid--1..4`), each `a.gallery_img.set-bg` with cover image +
       `.gellery__text` overlay: `span` (14px uppercase Raleway #fff,
       category) + `h3` (uppercase #fff, title). Hover: span/h3 slide
       up + fade in (opacity 0→1, transitions 0.3s, h3 24px on hover).
       Reference tiles are all "Photography / Flower — Flower In Door"
       (static demo) — implementers should vary captions across tiles
       (e.g. Nature, Travel, Fashion, Lifestyle categories matching the
       filters). Grid: 4-column masonry (CSS columns or grid with
       varying row spans).
  4. Footer (`.footer__section`, bg #222222, padding 25px 40px 15px,
     text-align center): 3 columns — `.footer__logo` (camera icon +
     name) left; `.footer__copyright__text` center: "Copyright © <year>
     All rights reserved | This template is made with ♥ by Colorlib"
     (Raleway 16px #B7B7B7, link #fff → #0ECE91 hover, heart #B91B1B);
     `.footer__social` right: Facebook / Twitter / Instagram icons,
     white 16px, margin-left 25px.
- **Design tokens (from CSS):**
  - Brand: **#0ECE91** (green) — nav/filter hover underlines, footer
    link hover, `.site-btn` bg (site-btn not used in this page's DOM —
    optional).
  - Text: #111111 (headings, menu hover, icons); #B7B7B7 (menu, filters,
    footer copy); #707070 secondary; #EBEBEB/#F3F3F3 light surfaces.
  - Footer bg #222222; heart #B91B1B; white #fff.
  - Fonts: "Aldrich" (display/menu/filters) + "Raleway" (body/captions).
  - Header sticky shadow: 0 10px 50px rgba(0,0,0,0.1).

## Implementation tasks (order)

1. Scaffold `apps/aperture` (copy simplest existing app, rename package
   to `@free-react-templates/aperture`; register workspace via root
   `npm install`; verify `grep -c "free-react-templates/aperture"
package-lock.json`).
2. `src/index.css`: Tailwind entry + `@theme` tokens — `--color-brand:
#0ECE91`, fonts Aldrich (display) + Raleway (body) via Google Fonts
   `<link>` in `index.html`.
3. `src/components/Navbar.tsx`: logo (Camera icon + name), menu links,
   search + hamburger icons (aria-labels), sticky behavior, mobile
   offcanvas menu. Tests: navbar content, icons focusable, mobile toggle
   opens/closes menu, dark-mode toggle if included (per monorepo
   convention; reference has no dark toggle — optional).
4. `src/components/Hero.tsx`: centered uppercase h1. Test: headline
   text + centered styling class.
5. `src/components/Gallery.tsx`: filter bar (All + 5 categories) +
   masonry grid of 20 tiles (picsum seeds `aperture-1..20`) with hover
   captions; category state filtering. Tests: filter bar options render,
   clicking a category filters tiles, hover reveals caption, all tiles
   have images.
6. `src/components/Footer.tsx`: dark footer — logo, copyright line,
   social links (aria-labels). Tests: content + focusable links.
7. `src/App.tsx`: compose sections; document title "Aperture —
   Photography Template"; main landmark.
8. Gate: `scripts/verify-app.sh aperture` (typecheck + lint + 100%
   coverage + build). PR: `feat: Aperture — photography gallery template
(ColorLib Sunzine)` → merge immediately.

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh aperture` green (100% coverage)
- [ ] Section order 1:1 with reference; filters actually filter
- [ ] Brand #0ECE91 in @theme; Aldrich + Raleway loaded
- [ ] Placeholder images seeded per template; no copied assets
