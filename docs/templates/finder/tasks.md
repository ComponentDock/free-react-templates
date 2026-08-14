# Finder (ColorLib Nissa) — Tasks & Design Notes

> **SUPERSEDED** — ColorLib "Nissa" shipped as **Lensa** (PR #409,
> https://lensa.free.componentdock.com). Do not implement; delete on cleanup.

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-finder/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Nissa" — free Bootstrap photography portfolio
  website template (source: https://colorlib.com/wp/template/nissa/;
  listed THREE times in TEMPLATES.md — line 465 [Bootstrap], line 1110
  [Business], line 2458 [Photography], all `- [ ]`, same slug → implement
  ONE app, mark ALL THREE rows `[x]` at bookkeeping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/nissa/ (HTTP
  200, 45.1KB HTML + `css/style.css` 19.3KB + Bootstrap 4 + font-awesome
  4.7 + magnific-popup + owl.carousel, extracted 2026-08-14 during prep).
  Screenshot `nissa-free-template.jpg` (AVIF — served by Colorlib as
  `.jpg`; convert to PNG and view in the browser).
- **Visual design:** minimal, editorial, monochrome photography portfolio
  — split-screen (white left column ≈40% / photo right column ≈60%);
  strictly black-on-white UI, color comes only from the photography
  (snowy mountain over dark-blue water; white modern architecture against
  blue sky); huge spaced uppercase serif wordmark + spaced-caps tagline;
  elegant Playfair serif intro headline; thin-outlined uppercase CTA with
  arrow; small icon rows for contact and socials; generous whitespace.
- **Palette (CSS-verified):** ink **#242424** (site-btn text, sb-solid
  bg, hero arrow buttons, off-canvas menu bg, contact links); white
  **#fff** (sidebar, header bar, hero info cards, copyright bar);
  border **#e1e1e1** (2px outline buttons); muted **#aaaaaa** (tagline,
  contact text); secondary **#828282** / rgba(130,130,130,0.29)
  (copyright line); hamburger **#4e4e4e**; sub-page-only accents
  **#f44336** (red) + **#673ab7** (purple) — video play buttons, omit on
  homepage.
- **Fonts:** **Playfair Display, serif** (headings — about h2 weight 900,
  logo weight 400 at 100px) + **Open Sans, sans-serif** (body). Load both
  via Google Fonts `<link>` in index.html.
- **Buttons:** `.site-btn` uppercase 14px/700, min-width 167px, padding
  19px 35px, line-height 1, transparent bg, 2px solid #e1e1e1 border,
  #242424 text, arrow icon after label (margin-left 15px); `.sb-solid`
  = solid #242424 + white text; `.sb-dark` = border #242424. Sharp
  corners (no radius).
- **Layout:** fixed white sidebar 614px (mb-warp padding 151px 95px 100px
  145px; logo mb 80px; about-info mb 80px; contact-info mb 65px); hero
  carousel right with 750px slides, white info card 221px bottom-left
  (padding 44px 0 10px 0); carousel arrows 30px circles #242424 below
  (padding-top 30px); copyright bar fixed bottom-left 80px/614px
  (padding-left 145px, 13px, rgba(130,130,130,0.29)).
- **Responsive:** ≤575px — header-social hidden, menu full-screen
  (left -100% → 0), sidebar relative full-width (mb-warp padding
  100px 15px, max-width 420px centered), hero slides 600px full-width,
  copyright static centered (padding 60px 15px 50px); ~768px —
  content padding-left 350px, mb-warp padding 110px 30px 91px 50px, logo
  70px, about h2 36px.

## Section order (1:1, LIVE DOM — comments stripped)

1. **Preloader** `div.loader` — full-page white preloader; optional in the
   React recreation (brief fade or omit — adds no content).
2. **Off-canvas menu** `div.site-menu-warp` (dark #242424, slides from
   left): `div.close-menu` "x"; `ul.site-menu` — Home (`a.active`) / About
   Me / Blog / Portfolio / Contact / Elements (uppercase, large, white);
   `div.menu-social` — Pinterest, Facebook, Twitter, Dribbble, Behance
   (white 18px, margin-right 30px; container padding-left 185px,
   padding-top 50px).
3. **Header bar** `header.header-section` (absolute top, white, padding
   27px 45px, z-index 999): `div.nav-switch` hamburger (fa-bars, 28px,
   #4e4e4e) left; `div.header-social` (5 icons) right — hidden ≤575px.
4. **Fixed sidebar** `div.main-sidebar` (white, 614px, absolute left,
   full height, z-index 99) > `div.mb-warp` (padding 151px 95px 100px
   145px):
   - `a.site-logo` (mb 80px): h2 **"Nissa"** → rename **"Finder"** (100px,
     uppercase, weight 400, letter-spacing 18px) + p **"Photography
     Studio"** (12px uppercase, #aaaaaa, letter-spacing 12px).
   - `div.about-info` (mb 80px): h2 **"My name is Michael Smith."**
     (Playfair 900, 48px, line-height 1.1, mb 40px) + lorem intro p.
   - `ul.contact-info` (mb 65px; map-pin `:after` icon): "1525 Boring
     Lane, Los Angeles, CA" · "+34 56672 9984 22" · email link
     "contactme@myemail.com" (mailto:) — 14px #aaaaaa, links #242424.
   - CTA `a.site-btn` **"see my portfolio"** + arrow (outlined, see
     buttons above).
5. **Hero carousel** `div.page-section` > `section.hero-section` >
   `div.hero-track` (overflow hidden; Owl horizontal track, padding-bottom
   50px): 3 `div.hs-item.set-bg` slides (750px, mr 50px; bg images
   hero/1.jpg, hero/2.jpg, hero/1.jpg):
   - Slide 1: `div.hs-info` (221px white card, absolute bottom-left,
     padding 44px 0 10px 0): h5 **"Ice Cold Love"** + p **"Nature
     Photography"** (source typo "Photoagraphy" — fix it).
   - Slide 2: h5 **"Bold Architecture"** + p **"Cityscape Photography"**.
   - Slide 3: repeats slide 1.
   - `div.hero-track .owl-nav` (padding-top 30px, centered): round
     prev/next 30px circles, #242424 bg, white chevrons, margin 0 5px.
   - `div.hero-scroll` — small scroll indicator.
6. **Copyright bar** `div.copyright` (fixed bottom-left, white, 80px,
   614px wide — aligns with sidebar, padding-left 145px, padding-top 20px,
   13px rgba(130,130,130,0.29)): "Copyright © <year> All rights reserved |
   This template is made with ♥ by Colorlib" → Component Dock line.

## Implementation tasks (TDD, in order)

- [ ] Scaffold `apps/finder` (copy simplest existing app; package
      `@free-react-templates/finder`; vite.config.ts with
      `injectUiSource()`; npm install at root so package-lock.json
      registers the workspace)
- [ ] Spec-driven tests first: `HeaderBar.test.tsx`,
      `OffCanvasMenu.test.tsx`, `Sidebar.test.tsx`,
      `HeroCarousel.test.tsx`, `CopyrightBar.test.tsx`, `App.test.tsx`
      (100% coverage; RTL user-event for menu open/close + carousel
      arrows; carousel timers cleaned up — fake timers)
- [ ] `@theme` tokens in `src/index.css`: `--color-ink: #242424`,
      `--color-paper: #ffffff`, `--color-border: #e1e1e1`,
      `--color-muted: #aaaaaa`, `--color-secondary: #828282`,
      `--color-hamburger: #4e4e4e`; Playfair Display + Open Sans Google
      Fonts links in index.html
- [ ] HeaderBar: white bar, hamburger (aria-label "Open menu", 28px
      #4e4e4e), 5 social icons right (hidden on mobile), z-index above
      everything
- [ ] OffCanvasMenu: #242424 panel sliding from left, close "x"
      (aria-label "Close menu"), 6 links (Home active), 5 white social
      icons; body/menu state wired to hamburger; transition 0.4s
- [ ] Sidebar: fixed white column (≈614px on desktop, full-width relative
      on mobile), "Finder" 100px uppercase tracking-[18px] wordmark +
      "Photography Studio" tagline, "My name is Michael Smith." Playfair
      900 48px + intro paragraph, contact list with MapPin/Phone/Mail
      icons, outlined "See my portfolio" CTA (lucide ArrowRight)
- [ ] HeroCarousel: 3 photo slides (picsum `seed/finder-1..3` — nature /
      cityscape crops), white 221px info cards bottom-left (h5 + p),
      round #242424 prev/next buttons, auto-advance with wrap, timer
      cleanup on unmount
- [ ] CopyrightBar: fixed bottom-left white bar (80px, aligned with
      sidebar), "Copyright © {year} All rights reserved" 13px
      rgba(130,130,130,0.29) + Component Dock link
      (https://www.componentdock.com/)
- [ ] App composition: header + menu + sidebar + carousel + copyright in
      the reference layout; document title "Finder — Photography
      Portfolio"
- [ ] Responsive pass: ≤575px (menu full-screen, sidebar stacked,
      header-social hidden, copyright static centered), ~768px
      (content padding-left 350px)
- [ ] Gate: `bash scripts/verify-app.sh finder` from repo root
      (typecheck + lint + 100% coverage + build)
- [ ] Bookkeeping: mark ALL THREE Nissa rows (lines 465, 1110, 2458)
      `[x]` with the finder surge URL; `npm run readme:status`; PR +
      immediate squash merge to main

## Pitfalls / notes

- The reference hero slider is Owl Carousel 2 (horizontal track, arrows
  below, slides float with margin-right 50px). Implement a lightweight
  custom carousel hook (index state, auto-advance interval, prev/next,
  wrap-around) — no new deps.
- Source DOM renders the category "Nature Photoagraphy" (typo) — use
  "Nature Photography".
- The map-pin icon is a CSS `:after` background image on
  `.contact-info`; recreate with lucide MapPin inline.
- `data-setbg` images load via JS (jQuery) — in React just use `<img>` or
  CSS background with the seeded picsum URL.
- Fonts: the 100px spaced wordmark relies on Playfair Display weight 400
  (its high-contrast serif look); about h2 uses weight 900. Load both
  weights.
- The copyright bar in the reference credits Colorlib; per monorepo
  conventions the app footer must link Component Dock
  (https://www.componentdock.com/) — adapt the "made with ♥" line to
  Component Dock branding (provenance stays in spec/TEMPLATES.md/PR
  only).
- The off-canvas menu covers the full viewport at ≤575px and sits behind
  the header bar (z-index 999 on header, menu z-index 998-ish) — check
  stacking so the close "x" stays reachable.
- Duplicate TEMPLATES.md rows: all three Nissa rows share the slug; one
  app, mark all three `[x]` at bookkeeping (lines 465, 1110, 2458).
