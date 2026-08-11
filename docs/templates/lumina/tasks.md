# Lumina (Colorlib Sunzine) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-lumina`.

## Design notes (replication findings)

- **Original:** ColorLib "Sunzine" — photography/photo-gallery template
  (source: https://colorlib.com/wp/template/sunzine/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sunzine/
  (HTTP 200; `css/style.css` ~35 KB parsed for tokens). Screenshot
  `sunzine-free-template.jpg` used as the visual reference.
- **Visual design (from screenshot):** clean minimalist photography
  portfolio. Transparent header: bold uppercase "SUNZINE" logo (camera
  icon) left; uppercase nav right (HOME, ABOUT, BLOG, CONTACT) + search
  and hamburger icons. Hero: centered uppercase headline on white,
  two lines ("HELLO! WELCOME TO SUNZINE PHOTO GALLERY / WITH CREATIVE &
  UNIQUE STYLE"). Category filter row below the headline (ALL,
  PHOTOGRAPHY, TRAVEL, NATURE, FASHION, LIFE STYLE, each with a small
  green dot). Body: 4-column masonry photo grid, irregular item widths,
  mixed aspect ratios (interiors, portraits, food, pets, details).
  Footer dark with logo, copyright, social icons. Mint-green accents on
  stark white; geometric sans type throughout.
- **Structure (1:1, section order — home page):**
  1. Preloader (`#preloder` fixed full-screen + `.loader` spinner).
  2. Header (`.header`, padding 28px 78px, z-index 999, top -50px):
     `.site-logo` (img `img/logo.png`) left; `.header__right` →
     `.main__menu` ul: HOME (`menu--active`), ALBUMS, ABOUT (dropdown
     `.sub__menu`: Albums Details, Blog Details), BLOG, CONTACT —
     uppercase 14px Aldrich; `.header__switches`: `.search-switch`
     (fa-search) + `.nav-switch` (fa-bars). Mobile: menu hidden, offcanvas
     panel (`.offcanvas-menu` + overlay).
  3. Hero (`.hero`, padding 80px 0): `.col-lg-10 m-auto` centered h2 —
     "Hello! Welcome to SUNZINE photo gallery With Creative & Unique
     Style" — uppercase, weight 400, line-height 1.6, 36px desktop /
     30px mobile.
  4. Gallery (`.gallery__section`, padding 0 5px, overflow hidden):
     `.filter-controls` (text-align center, padding-top 30px, margin-
     bottom 40px): ul li inline-block, uppercase 14px Aldrich, #B7B7B7,
     bullet separators (`:after` content "•", right -19px), hover/active
     #111111 + growing underline (`:before` width 100%). Then
     `.gallery__warp` (overflow hidden): mixitup grid of `.mix.grid__item`
     tiles, each `<a class="gallery_img set-bg">` (height 360px,
     margin-bottom 10px, position relative) + `.gellery__text` (absolute,
     bottom 20px, padding 0 30px, z-index 3): `<span>` "Photography /
     Flower" + `<h3>` "Flower In Door". Hover: `.gallery_img:after` black
     overlay opacity 0 → 0.1; text block slides up to bottom 0.
  5. Footer (`.footer__section`, bg **#222222**, padding 25px 40px 15px):
     row → col-lg-3 `.footer__logo` (img `img/footer-logo.png`) | col-lg-6
     `.footer__copyright__text` centered ("Copyright © <year> All rights
     reserved | Made with ♥ by Colorlib") | col-lg-3 `.footer__social`
     text-align right (fa-facebook, fa-twitter, fa-instagram; centered on
     mobile).
- **Grid widths (irregular masonry):** `.grid__item` default 25% width,
  float left, padding 0 5px; `grid--1` 28%, `grid--2` 19%, `grid--3`
  27%, `grid--4` 26%, `grid--5` 22%, `grid--8` 21% (grid--6/9/10/11/12/
  13/15 also exist in the markup). Tablet ~40–60%, mobile 100%. Filter
  categories on items: `photo`, `travel`, `natural`, `fashion`,
  `lifestyle`.
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#0ECE91** (mint/teal green) — `.site-btn` bg (white
    text), link/logo accents, filter dots (22 occurrences).
  - Text: headings/dark **#111111**; secondary **#707070**; muted
    **#B7B7B7** (filter text). Page bg #fff; light grays **#F3F3F3** /
    **#EBEBEB**; footer **#222222**.
  - Fonts: Google Fonts `@import` — **"Aldrich"** (headings, nav, filter
    controls; uppercase) + **"Raleway"** (body). h2 36px/1.4, h3 30px.
  - Buttons (`.site-btn`): 14px, padding 16px 15px, min-width 180px,
    white on #0ECE91.
  - Gallery tiles: 360px height, 10px bottom margin, overlay
    rgba(0,0,0,.1) on hover, caption bottom padding 0 30px.
- **Recreation name:** Lumina (NEW — differs from ColorLib "Sunzine").
  App folder `apps/lumina`, package `@free-react-templates/lumina`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/lumina-<n>/<w>/<h>`); Aldrich + Raleway via Google
  Fonts `<link>` in index.html; lucide-react for camera/search/menu icons
  - inline SVG brand icons (Facebook/Twitter/Instagram — lucide-react
    removed brand icons); mint-green accent in `@theme`; repo-standard
    Navbar (dark-mode toggle) + Footer chrome; reuse `packages/ui`
    (Button, ButtonLink, cn). Original is multi-page (albums/about/blog/
    contact) — recreate as single page with anchor links (Home, Gallery,
    About with dropdown, Blog, Contact) per the home preview only.
- **TEMPLATES.md note:** Sunzine appears in FOUR unchecked rows (lines
  ~290, ~1807, ~2476, ~2569); mark all of them `[x]` at bookkeeping time.

## Tasks

- [x] Write `openspec/specs/template-lumina/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/lumina` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/lumina`; run
      `npm install` at root so package-lock registers the workspace).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `npm run verify:app -- lumina` (typecheck + lint +
      100% coverage + build).
- [ ] Push `feat/template-lumina`, open PR (source template, preview
      URL, design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D) — remember TEMPLATES.md has FOUR
      "Sunzine" rows; mark ALL of them.
