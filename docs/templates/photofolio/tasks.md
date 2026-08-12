# Photofolio (ColorLib Photographer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-photofolio/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Photographer" — photography portfolio website
  template (source: https://colorlib.com/wp/template/photographer/; listed in
  TEMPLATES.md under Bootstrap, item "Photographer").
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/photographer/
  (HTTP 200, full rendered DOM, 20KB + `css/style.css` 18.6KB + Bootstrap 4 +
  font-awesome + owl.carousel + slicknav + magnific-popup + masonry + mixitup
  - instafeed + circle-progress, extracted 2026-08-12 during prep). Live
    preview viewed in the browser + screenshot `photographer-free-template.jpg`
    (AVIF) downloaded and confirmed — both match.
- **Visual design:** minimalist, modern, monochrome, content-focused — dense
  masonry wall of ~15–21 photographs (landscapes, macro, B&W portraits,
  street, animals) with NO gutters, auto-playing at the top; white page; dark
  text logo top-left, hamburger + search top-right; big black 48px headline
  "My name is Sam. I'm a photographer", grey body copy, underlined CTA; black
  6px progress bars with white % tags; white vertical social sidebar on the
  hero's right edge; dark #212121 footer with tiny white copyright + social
  icons. No accent color — the photography is the color.
- **Palette (CSS-verified):** ink `#212121` (headings, progress fills + % tag
  bg, CTA underline, footer bg); white `#fff` (page, overlay caption, footer
  text/icons, social sidebar bg); overlay `#060606` (hero hover); social icon
  `#121212`; body text `#7d7d7d`; hairline `#e8e8e8` (scrolled-header border,
  mobile social bar border); search overlay `#000` bg / `#333` input border /
  `#999` input text. Loader spinner #f44336/#673ab7 is preloader-only — NOT a
  design color.
- **Fonts:** Poppins, sans-serif everywhere (headings weight 500). Type scale:
  h1 70 / h2 36 (intro h2 48, margin-bottom 25) / h3 30 / h4 24 / h5 18 / h6
  16; p 16px lh 1.8. Preview head has NO Google Fonts link — load Poppins via
  `<link>` in `index.html`.
- **Buttons/links:** no box buttons — transparent icon buttons (hamburger
  21px, search 19px) + text CTA `.sp-link` (16px/500 #212121 with 3px solid
  #212121 bottom border, padding-right 15px).
- **Structure (1:1, section order):**
  1. Header `.header-section` (padding-top 15px, transparent): `.site-logo`
     (img/logo.png text wordmark) left; `.header-controls` right —
     `.nav-switch-btn` (hamburger 21px) + `.search-btn` (19px); hidden desktop
     `.main-menu` (display:none) — Home / About the Artist / Portfolio
     (dropdown: Portfolio 1/2/3) / Blog / Elements / Contact; opens as a
     slide-down (slicknav "MENU" bar); `.hs-bd` variant gets 1px #e8e8e8
     bottom border.
  2. Hero `.hero-section`: `.hero-slider` owl carousel of **21**
     `.hero-item.portfolio-item.set-bg` photo tiles (`img/portfolio/1..21.jpg`,
     cover, top center; ~278px tall each), loop + autoplay + smartSpeed 1000,
     responsive items 1/2/3/4/5/7 (≤480/768/991/1200/1400+). Hover →
     `.hero-link` overlay (bg #060606, opacity 0→1, 0.3s) with white h2 "Take
     a look at my Portfolio" (lh 1.5, slides top 50px→0, 0.5s).
     `.hero-social-links` pinned bottom-right (110px wide, bg #fff, padding
     40px 0): 5 vertical icons (Pinterest/Facebook/Twitter/Dribbble/Behance,
     16px #121212, padding 16px 0); mobile → full-width bar, padding 30px 0,
     1px #e8e8e8 bottom border, inline icons.
  3. Intro `.intro-section` (padding 120px 15px 90px; `.intro-warp` max-width
     1780px): left `.intro-text` h2 "My name is Sam. I'm a photographer"
     (48px), p (16px #7d7d7d lh 1.8, margin-bottom 45px), `.sp-link` "Take a
     look @my portfolio". Right `.skill-warp` (padding-left 83px, padding-top
     80px): 3 `.single-progress-item` (margin-bottom 30px): `.progress-bar-style`
     (6px tall; `.bar-inner` bg #212121, width from data-progress 75/100/90;
     `.bar-inner span` white % tag 54×40 bg #212121 at right:0 top:22px) +
     label p "Nature"/"Passion"/"Portraits" (padding-top 28px).
  4. Footer `.footer-section` (bg #212121, padding 19px 40px): `.copyright`
     (11px/500 #fff) "Copyright © All rights reserved | This template is made
     with by Colorlib" (Colorlib link); `.footer-social-links` right — 5
     icons (17px #fff, margin-left 40px, first 0).
  5. Search `.search-model` (fixed full-screen bg #000, z 99999): input 40px,
     border-bottom 2px #333, bg none, color #999; close glyph "+".

## Implementation tasks (suggested order, TDD)

1. Scaffold `apps/photofolio` (copy the simplest existing app; rename package
   to `@free-react-templates/photofolio`; register workspace, update vitest
   setup per repo pattern).
2. `index.html`: title "Photofolio — Photography Portfolio Template", Google
   Fonts `<link>` for Poppins (400/500/600).
3. `@theme` tokens in the app CSS: `--color-ink` #212121, `--color-overlay`
   #060606, `--color-social` #121212, `--color-body` #7d7d7d,
   `--color-hairline` #e8e8e8, `--color-search-border` #333, `--color-search-text`
   #999; body font Poppins.
4. Header: text logo + hamburger + search buttons (desktop + mobile), slide-
   down nav with the 6 links + Portfolio sub-links, search overlay (state-
   toggled fixed full-screen input with close "+") — test open/close for both
   menu and search.
5. Hero photo wall: 21 seeded picsum tiles in a masonry-style CSS grid, an
   auto-advancing active window (1/2/3/4/5/7 per breakpoint — implement with a
   simple index + interval, NOT a carousel dep; use fake timers with `act()`
   in tests), hover overlay (#060606 + white caption slide-up via
   group-hover).
6. Social sidebar: white vertical bar (5 lucide icons with aria-labels:
   Pinterest/Facebook/Twitter/Dribbble/Behance → closest lucide equivalents)
   pinned to the hero's right edge; full-width horizontal under the hero on
   mobile.
7. Intro: 48px headline, grey paragraph, underlined CTA (border-b-[3px]
   border-ink).
8. Progress bars: three 6px bars (Nature 75 / Passion 100 / Portraits 90)
   with #212121 fill and the white % tag (54×40, ink bg) at the fill end.
9. Footer: #212121 bar, 11px copyright with the ColorLib credit link, 5
   social icons right (centered on mobile).
10. Composition + document title; run `scripts/verify-app.sh photofolio` until
    green (typecheck + lint + 100% coverage + build), then PR + immediate
    squash merge per FAST_MODE, bookkeeping: mark the TEMPLATES.md
    "Photographer" row `[x]` with the surge URL + `npm run readme:status`.

## Fidelity notes / pitfalls

- The hero is a CAROUSEL of 21 photos, not a static grid — it auto-advances
  and shows 1–7 tiles by breakpoint (1 ≤480 / 2 ≤768 / 3 ≤991 / 4 ≤1200 / 5
  ≤1400 / 7 >1400). A static 21-tile grid is NOT faithful; implement the
  sliding window or a 7-tile grid that rotates.
- Buttons are flat glyphs (hamburger/search), NO colored CTA boxes anywhere on
  the page. The only "button" is the text link with a 3px ink underline.
- Progress-bar % tag sits ABOVE the label at the right end of the FILL (54×40
  white-on-ink box, `right:0; top:22px` relative to the bar) — not inline with
  the label, not at the bar's right edge.
- Label `p` under each progress bar has padding-top 28px — the label is BELOW
  the 6px track.
- Keep the ColorLib credit line in the footer ("made with by Colorlib") —
  required for template licensing attribution.
- Intro section padding is 120px 15px 90px; skill-warp uses padding-left 83px
  on desktop (0 on mobile) and padding-top 80px — match the desktop rhythm.
- Social links are Pinterest/Facebook/Twitter/Dribbble/Behance (NOT
  Instagram) — keep the same set with aria-labels.
- Hero photos are decorative (background images) — query them via
  `container.querySelectorAll('img')` in tests; the caption h2s are hidden
  until hover (visible on focus/keyboard for a11y is a bonus).
- No Google Fonts link exists in the source preview head — add Poppins via
  `<link>` in index.html (the source assumes it's loaded elsewhere).
