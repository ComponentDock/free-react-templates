# Wire (ColorLib Meranda) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-wire`.

## Design notes (replication findings)

- **Original:** ColorLib "Meranda" — clean, minimalist news/magazine blog
  template (source: https://colorlib.com/wp/template/meranda/).
  TEMPLATES.md has TWO copies (lines 272 and 2204 — duplicate rows in the
  Blog and Magazine sections; one recreation covers both; implementer
  marks BOTH `[x]`).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/meranda/
  (HTTP 200, 30,254 bytes; title "Meranda — Website Template by
  Colorlib"). Master stylesheet `css/style.css` (23.6 KB) fully extracted;
  libs: bootstrap 4 grid, Owl Carousel (hero), jQuery UI, fancybox, AOS;
  fonts Cabin (body) + B612 Mono (nav/logo) via Cloudflare Fonts; icon
  fonts icomoon + flaticon.
- **Screenshot:** `meranda-free-template.jpg` (1200×946, viewed in
  browser) — white/light-gray layout; serif-style wordmark top-left;
  social icons + search top-right; nav HOME / CATEGORIES / POLITICS /
  BUSINESS / HEALTH / DESIGN / SPORT / CONTACT; split hero (kitchen photo
  left, "EDITOR'S PICK" + headline + meta right) with arrow controls and
  a green active dot; below: "Editor's Pick" image row left + "Trending"
  numbered list (green 01/02) right. Cross-checks the live DOM analysis.
  Demo brands itself "Meranda"; recreation uses the NEW name **Wire**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean minimalist
  news/magazine on white. Header-top: logo left, socials + pill search
  right. Nav row in B612 Mono uppercase (.8rem, letter-spacing .05rem).
  Hero carousel of 3 split featured posts: photo 50% left, contents 50%
  right on a light-gray `bg-light` band (grey uppercase caption, 26px
  headline, excerpt, meta "Jun 14 • 3 min read ★"); square-bar dots with
  the active bar green. Section titles: 20px/400 inline-block with a
  short black underline (1px #222) + 50px margin. "Editor's Pick" grid:
  1 big image card + 2 compact thumbnail rows (one bg-light). "Trending"
  sidebar: 4 numbered rows (30px #ccc numbers) + green uppercase "See All
  Trends →". Two 6-col category columns "Politics"/"Business" (3
  thumbnail rows with excerpt each). "Recent News" (col-lg-9, thumbnail
  on the RIGHT) + "Popular Posts" sidebar (4 numbered rows) + "See All
  Popular" + pagination 1 2 3 4 (2 active). Light-gray newsletter band
  ("Newsletter Subscribe" + email input + black pill paper-plane button
  that turns green on hover). Minimal centered footer. Accent light green
  **#8bc34a** (See-All links, active carousel bar, link/button hover);
  text black; captions grey #808080; date-read #b4b4b4; numbers #ccc.
- **Structure (1:1, section order):**
  1. `div.header-top` (container, padding 30px 0) — row: `a.site-logo`
     left (2rem, #000) + mobile burger; right: `div.top-social` (facebook,
     twitter, instagram `a.p-3`, #000 hover #777) + `form.search-form`
     (pill input "Search..." 50px + black pill `button.btn.btn-secondary`
     with search icon).
  2. `div.site-navbar.py-2.js-sticky-header` (sticky, bg #fff, B612 Mono)
     — `ul.site-menu` uppercase links: Home, Categories (dropdown),
     Politics, Business, Health, Design, Sport, Contact; active underline
     #8bc34a. Mobile off-canvas menu (`.site-mobile-menu`, burger
     toggle).
  3. `div.site-section.py-0` — hero `div.owl-carousel.hero-slide` of 3
     slides: `div.half-post-entry.d-block.d-lg-flex.bg-light` —
     `div.img-bg` (50%) + `div.contents` (50%, padding 50px): caption
     "Editor's Pick" (#808080 uppercase), h2 26px, excerpt, post-meta;
     arrows (40px white squares) + square-bar dots (active #8bc34a).
  4. `div.site-section` — row: `div.col-lg-8` "Editor's Pick":
     `post-entry-1` big card + 2× `post-entry-2.d-flex` (thumbnail 30% /
     contents 70%, one bg-light); `div.col-lg-4` "Trending": 4×
     `trend-entry` (number 01–04, 30px #ccc, flex 0 0 50px + contents
     h2 18px + meta) + `a.more` "See All Trends →" (green, uppercase).
  5. `div.site-section` — row of 2× `div.col-lg-6`: "Politics" / "Business"
     section titles, each with 3× `post-entry-2.d-flex` (thumb 30% +
     contents h2 15px + excerpt + meta).
  6. `div.site-section` — row: `div.col-lg-9` "Recent News": 3×
     `post-entry-2.d-flex` with thumbnail RIGHT (`order-md-2`) + contents
     LEFT (`order-md-1.pl-0`); `div.col-lg-3` "Popular Posts": 4×
     trend-entry numbered + `a.more` "See All Popular →"; then
     `ul.custom-pagination` 1 2 3 4 (2 active).
  7. `div.site-section.subscribe.bg-light` — form row: `h2` "Newsletter
     Subcribe" (source typo; use "Newsletter Subscribe") + `p`, then
     email input ("Enter your email", pill) + black pill paper-plane
     button (hover #8bc34a).
  8. `div.footer` (centered, .85rem, padding 2rem 0) — "Copyright © {year}
     All rights reserved | This template is made with ♥ by Colorlib".
     Recreation: keep copyright + ♥, drop the Colorlib credit (precedent:
     Newsprint/Lede footers).
- **Design tokens (from `css/style.css` + computed styles):**
  - Brand accent **#8bc34a** — See-All links (uppercase .83rem), active
    carousel bar, link hover, active nav underline, button hover.
  - Text: #000 headings/links; caption **#808080** (computed; .9rem
    uppercase ls .1rem); `.date-read` **#b4b4b4** (`.post-meta` .8rem);
    `.trend-entry .number` **#ccc** 30px; section-title underline 1px
    **#222**; pagination #000.
  - Backgrounds: #fff; light **#f8f9fa** (bg-light bands: hero, one
    post-entry-2, newsletter).
  - Buttons/inputs: pill radius **30px**; button bg **#000** color #fff
    padding 0 20px uppercase 14px ls .2rem, hover #8bc34a; inputs 50px
    height, bg #fff, border-bottom 1px #ccc.
  - Fonts: **Cabin** (body, 400/700) + **B612 Mono** (navbar/logo) via
    Google Fonts `<link>`.
  - Rhythm: site-section 7em 0 (desktop) / 2.5em 0 (mobile); header-top
    padding 30px 0; section-title margin-bottom 50px; post-entry-1 img
    margin-bottom 30px; footer padding 2rem 0.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/wire-<n>/<w>/<h>` — 3 hero + 1 big card + ~14
  thumbnails ≈ 18 seeds); icons → lucide-react (search, menu, facebook,
  twitter, instagram, star, paper-plane, chevron-left/right,
  arrow-right); Cabin + B612 Mono via Google Fonts; Owl Carousel →
  React state slider (index, prev/next, square-bar dots, no dependency);
  sticky nav; Categories dropdown hover/focus; newsletter zod-validated
  with success state; mobile nav aria-expanded; skip jQuery UI/fancybox/
  AOS.

## Tasks (implementation order, TDD — tests first)

- [ ] Scaffold `apps/wire` (copy simplest existing app, rename package to
      `@free-react-templates/wire`; register `injectUiSource()` in
      `vite.config.ts`; `npm install` at root for lockfile)
- [ ] `src/index.css` — Tailwind theme tokens: brand `#8bc34a`, caption
      `#808080`, date-read `#b4b4b4`, number `#ccc`, ink `#000`,
      underline `#222`, light `#f8f9fa`; font families Cabin + B612 Mono
- [ ] `index.html` — Google Fonts `<link>` (Cabin 400/700, B612 Mono) +
      title "Wire — News Template"
- [ ] `HeaderTop.tsx` (+ test) — logo, socials, pill search form
- [ ] `Navbar.tsx` (+ test) — sticky uppercase nav, Categories dropdown,
      mobile burger with aria-expanded
- [ ] `HeroCarousel.tsx` (+ test) — 3 slides, prev/next arrows, square-bar
      dots (active green)
- [ ] `PostMeta.tsx` (+ test) — author in category · date • read time
      (shared by all post entries)
- [ ] `EditorsPick.tsx` (+ test) — section title + big card + 2 compact
      rows (one bg-light)
- [ ] `TrendingWidget.tsx` (+ test) — numbered 01–04 rows + See All link
      (reused for Popular Posts via props)
- [ ] `CategoryColumns.tsx` (+ test) — Politics / Business, 3 rows each
      with excerpt
- [ ] `RecentNews.tsx` (+ test) — image-right rows + Popular Posts sidebar + pagination (2 active)
- [ ] `Newsletter.tsx` (+ test) — zod validation, error + success states
- [ ] `Footer.tsx` (+ test) — centered copyright with ♥, neutral credit
- [ ] `App.tsx` (+ test) — compose all sections in order, document title
- [ ] `scripts/verify-app.sh wire` → green; `TEMPLATES.md` lines 272 AND
      2204 `[~]`→`[x]` + surge URL; `npm run readme:status`; PR +
      immediate squash merge
