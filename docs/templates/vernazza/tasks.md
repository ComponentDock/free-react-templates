# Vernazza (ColorLib Carousel 17) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vernazza`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 17" — the SEVENTEENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-17/).
  Single occurrence in TEMPLATES.md (line 724, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Vernazza**
  (seventeenth of the carousel-series renames; lineage: carousel-01 →
  wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 →
  lido, carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
  carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
  carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
  carousel-14 → taormina, carousel-15 → tropea, carousel-16 → procida,
  carousel-17 → vernazza — theme: travel / destinations; the name is
  thematic, the content is a hero image carousel).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-17/`
  — HTTP 200, 16,390 bytes DOM (fetched + rendered 2026-08-15). **Gotcha:**
  the standard path `https://preview.colorlib.com/theme/carousel-17/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under `.../theme/bootstrap/carousel-17/css/` (same
  finding as the Bootstrap Calendars and Carousel 01–16 preps).
  Stylesheets: `owl.carousel.min.css` (Owl 2.3.4 base) +
  `bootstrap.min.css` (4.3.1) + `animate.css` (slide in/out animations) +
  `style.css` (2,099 bytes) + `fonts/icomoon/style.css` (icon font — used
  ONLY for the two arrow chevrons) + Roboto.
- **What this demo IS:** a WHITE single-section FULL-WIDTH HERO IMAGE
  CAROUSEL — ONE `.content` wrapper (`padding: 7rem 0`), no navbar, no hero,
  no footer. Centered near-black heading (`.h2.my-5.text-center`, 20px,
  `#212529`) above `.container` → `.owl-carousel.owl-1` with THREE full-width
  image slides (1900×1150, `img-fluid`), white chevron arrows overlaid
  left/right, white dots overlaid bottom-center.
  **KEY DIFFERENCES vs Carousel 16 (Procida) — do NOT copy Procida's
  requirements:** (1) slides are full-width IMAGES, not avatar/team cards;
  (2) **ARROWS ARE VISIBLE** (Procida hides them) — white 40px chevrons at
  left 20px / right 20px, vertically centered; (3) **AUTOPLAY OFF** —
  Procida autoplays ~5s; (4) dots are OVERLAID on the image (bottom 40px),
  WHITE (inactive `rgba(255,255,255,0.5)` → active solid white) — Procida's
  dots hang below the cards in gray → blue `#007bff`; (5) **~450ms VERTICAL
  slide** (`slideOutDown`/`slideInUp`) — Procida slides horizontally at ~1s;
  (6) ONE slide per view at ALL breakpoints — Procida is 1/2/3 responsive.
- **Carousel config (`js/main.js` — 141 bytes, fetched live via the page):**
  `$('.owl-1').owlCarousel({ animateOut: 'slideOutDown', animateIn:
'slideInUp', items: 1, loop: true, nav: true, margin: 0, stagePadding: 0,
smartSpeed: 450, navText: ['<span class="icon-keyboard_arrow_left">',
'<span class="icon-keyboard_arrow_right">'] })` — **1 per view always**,
  LOOP ON, **NO autoplay**, NAV ON (arrows VISIBLE), DOTS ON (Owl default),
  ~450ms VERTICAL slide (out-down / in-up). No `responsive` block. Recreate:
  1-per-view, loop, ~450ms vertical slide, no autoplay, white chevron
  arrows, white dots overlaid bottom-center.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally say "Carousel #7" (untouched copy from demo #7; this is demo
  #17 — same artifact pattern as Carousel 16's "Carousel #6"). Recreation
  SHALL use "Carousel #17" (corrected) or a same-kind paraphrase ("Featured" /
  "Our Work" / "Gallery").
- **Arrow border scaffolding (do NOT reproduce):** `style.css` has leftover
  debug styles — `.owl-1 .owl-nav .owl-next, .owl-prev { border: 1px solid
red }` and `.owl-next { border: 4px solid blue }`. The live render and the
  screenshot show plain WHITE chevrons, never red/blue boxes. The recreation
  renders plain white chevron buttons only.
- **Dots (live computed):** `.owl-1 .owl-dots` — `position: absolute;
bottom: 40px; left: 50%; transform: translateX(-50%)` (overlaid ON the
  image, bottom-center). Each `.owl-dot span`: `width: 7px; height: 7px;
border-radius: 50%; background: rgba(255,255,255,0.5); margin: 4px`;
  `.active span`: `background: white`. The recreation's dots must be real
  buttons with ≥44px hit areas (7px visual + padding).
- **Slide images:** `hero_1.jpg` (hand holding a "GENESIS" paperback —
  beige wall, warm earthy tones, pastel gradient cover), `hero_2.jpg` (hand
  in white knit sleeve holding a magazine, eucalyptus sprig, matte teal +
  dusty-blue boxes — beige wall), `hero_3.jpg` ("BOOK OF PROVERBS" hardcover
  against deep crimson fabric). All 1900×1150 editorial lifestyle/product
  shots, warm/muted/sophisticated (cream, beige, teal, dusty blue, crimson),
  bookshop/subscription theme. Recreation: THREE wide picsum placeholders
  (screen seeds for editorial/warm-tone subjects per the replication skill),
  descriptive alt text.
- **Screenshot (carousel-17.jpg, 1200×972):** browser chrome over
  `preview.colorlib.com`, white page, centered small dark sans heading
  "Carousel #7", large rectangular slider showing the hand + "GENESIS"
  book (warm beige/tan, pastel cover), subtle white chevrons on the left and
  right edges, white pagination dots bottom-center (first filled = active).
  Minimalist, flat, whitespace-heavy; the only color lives in the photos.
- **Dead/irrelevant classes:** none in the DOM besides the artifact heading;
  `.content` (padding 7rem 0) and Bootstrap `.container` are the only
  wrappers.
- **Mobile (<600px):** 1 slide per view, image fits the viewport (no
  horizontal overflow), dots ≥44px tap targets, arrows stay clickable;
  nothing collapses.

## Implementation tasks

- [ ] Copy the simplest existing app → `apps/vernazza`; rename package to
      `@free-react-templates/vernazza`
- [ ] `public/CNAME` = `vernazza.free.componentdock.com`; `"homepage"` =
      `https://vernazza.free.componentdock.com` in package.json
- [ ] index.html: Google Fonts Roboto (300/400/500), title "Vernazza"
- [ ] Single-section layout: white page, `py-[7em]` wrapper, centered ~1140px
      container, centered near-black ~20px heading ("Carousel #17" or
      paraphrase — NOT "Carousel #7")
- [ ] Carousel: THREE full-width slides — wide picsum placeholders
      (screened per replication skill, editorial/warm-tone subjects,
      descriptive alt), ONE slide per view at every breakpoint
- [ ] Carousel behavior: LOOP on; ~450ms VERTICAL slide (out-going exits
      down, in-coming enters up); NO autoplay (idle = stays put)
- [ ] Arrows: white ~40px chevron buttons overlaid left 20px / right 20px,
      vertically centered, aria-labels (prev/next); click → slide + loop
      wrap; NO red/blue borders (demo debug scaffolding)
- [ ] Dot navigation: round 7px buttons, 4px gaps, overlaid bottom-center of
      the image (bottom 40px); inactive `rgba(255,255,255,0.5)`, active
      solid white; ≥44px hit areas + aria-labels; click → slide; active dot
      syncs on every change (click, loop wrap); first dot active initially
- [ ] Responsive: no horizontal overflow on mobile, dots tappable, arrows
      clickable at every breakpoint
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh vernazza`
- [ ] PR: branch `feat/template-vernazza`, PR description with source slug,
      preview URL, tokens, renames (esp. "vertical slide + no autoplay +
      visible arrows + overlaid white dots — differs from Procida"); merge
      immediately
