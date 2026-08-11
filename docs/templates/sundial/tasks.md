# Sundial (ColorLib Sunzine) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-sundial`.

## Design notes (replication findings)

- **Original:** ColorLib "Sunzine" — photography gallery template
  (source: https://colorlib.com/wp/template/sunzine/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sunzine/
  (HTTP 200; `css/style.css` ~35.5 KB parsed for tokens). Screenshot
  `sunzine-free-template.jpg` used as the visual reference.
- **Visual design (from screenshot):** stark white minimal photography
  portfolio; bold uppercase black "SUNZINE" logo + camera icon; right
  nav (HOME, ABOUT, BLOG, CONTACT) + search + menu icons; centered
  uppercase hero headline "HELLO! WELCOME TO SUNZINE PHOTO GALLERY WITH
  CREATIVE & UNIQUE STYLE"; dense masonry gallery of mixed-aspect photos
  (portrait/landscape/square); category filter bar with green diamond
  markers; dark footer.
- **Structure (1:1, section order):**
  1. Header (`.header`, padding 28px 78px / mobile 28px 15px, sticky →
     white on scroll): logo "SUNZINE" (img/logo.png, Aldrich uppercase) +
     `.main__menu` links HOME, ALBUMS, ABOUT, BLOG, CONTACT (14px
     uppercase Aldrich #B7B7B7; active = #111111 + green 6px underline
     bar `bottom: 8px`; dropdown submenu on ABOUT → Albums Details /
     Blog Details); `.header__switches` search + menu icons (18px
     #111111, margin-left 25px).
  2. Hero (`.hero`, padding 80px 0, white): centered uppercase h2, 30px,
     weight 400, line-height 1.6 — "Hello! Welcome to SUNZINE photo
     gallery With Creative & Unique Style".
  3. Gallery (`.gallery__section`, padding 0 5px): `.filter-controls`
     ul (uppercase 14px, #B7B7B7, "•" Aldrich separators, active #111111
     - green 6px underline `bottom: 4px`; buttons ALL, PHOTOGRAPHY,
       TRAVEL, NATURE, FASHION, LIFE STYLE — mixitup filters
       `.photo`/`.travel`/`.natural`/`.fashion`/`.lifestyle`); then
       `.gallery__warp` masonry grid — `.mix.grid__item` width 25%,
       padding 0 5px, floated; each item = `<a class="gallery_img set-bg">`
       with `data-setbg` image + `.gellery__text` (span = category
       "Photography / Flower", h3 = title "Flower In Door"). Hover: #000
       overlay fades in (`gallery_img:after`, opacity 0→1) and caption
       (uppercase 14px Raleway white span + uppercase 24px white h3)
       slides up (0.3s transitions). ~15–20 items with varying `grid--N`
       size classes (grid--1 … grid--15) for masonry variety.
  4. Footer (`.footer__section`, bg #222222, padding 25px 40px 15px):
     centered `.footer__copyright__text` p (16px Raleway #B7B7B7,
     "Copyright © <year> All rights reserved" + red #b91b1b heart icon +
     credit link white → green hover); `.footer__social` icons (16px
     #fff, margin-left 25px; right-aligned on desktop, centered mobile).
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#0ECE91** (mint/lime green) — nav underline, active
    filter underline, footer link hover, breadcrumb span.
  - Ink: **#111111** — headings, active nav/filter labels, switch icons.
  - Muted: **#B7B7B7** (nav links, inactive filters, separators, footer
    copyright); **#707070** (body p).
  - Footer bg **#222222**; heart **#b91b1b**; socials **#fff**.
  - Fonts: body **"Raleway"** 16px lh 1.8; headings/nav/logo
    **"Aldrich"** uppercase.
- **Recreation name:** Sundial (NEW — differs from ColorLib "Sunzine").
  App folder `apps/sundial`, package `@free-react-templates/sundial`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/sundial-<n>/<w>/<h>`); Raleway + Aldrich via
  Google Fonts `<link>`; lucide-react icons (camera, search, menu;
  inline SVG for social brands — lucide removed brand icons); green
  accent in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
  chrome; reuse `packages/ui` (Button, ButtonLink, cn).
- **Gallery filter behaviour:** implement a lightweight client-side
  filter (All/Photography/Travel/Nature/Fashion/Life Style) — no
  mixitup dependency; hidden items keep their grid slot removed
  (display:none) so the masonry reflows like the original.

## Tasks

- [x] Write `openspec/specs/template-sundial/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sundial` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/sundial`; run
      `npm install` at root so package-lock registers the workspace).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `npm run verify:app -- sundial` (typecheck + lint +
      100% coverage + build).
- [ ] Push `feat/template-sundial`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
