# Template: Portofino (Product Card Carousel with Pill-Bar Dots)

## Purpose

Portofino is a single-section product-card carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 12" website template design
(source: https://colorlib.com/wp/template/carousel-12/), built under a
DIFFERENT name (Portofino — the Italian Riviera fishing village, continuing
the coastal-destinations naming theme of the "Bootstrap Carousels (20)"
series renames) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **portofino** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-12`), and collides with nothing in `apps/`,
`openspec/specs/`, `docs/templates/`, or any repo content (checked
2026-08-15 against origin/main, including git history; zero hits). It is the
TWELFTH of the "Bootstrap Carousels (20)" series renames (lineage:
carousel-01 → wanderlust, carousel-02 → faraway, carousel-03 → fjord,
carousel-04 → lido, carousel-05 → capri, carousel-06 → cannes,
carousel-07 → positano, carousel-08 → sorrento, carousel-09 → ravello,
carousel-10 → amalfi, carousel-11 → santorini, carousel-12 → portofino —
theme: travel / coastal destinations; the name is thematic, the content is a
product showcase).

Portofino lives in `apps/portofino` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 12" — the TWELFTH of the 20 "Bootstrap
  Carousels" demos. **NOT a full-width image slider like Carousel 11 — this
  is a PRODUCT-CARD carousel** ("Our Products" showcase): a light-gray
  LEFT-HALF background band (`#f8f9fa`) behind a 6-card image+title carousel
  that shows 1 → 2 → 3 cards per view across breakpoints, with PILL-BAR dots
  (15×3px, `#ccc` inactive / `#007bff` active) centered BELOW the carousel
  and NO visible arrows (the JS enables `nav: true` but the demo CSS hides
  `.owl-2-style .owl-nav` with `display: none`). Autoplay is ON (~5s) with
  hover-pause OFF (`pauseOnHover: false` — differs from Carousel 11). The
  page is ONE `.content` wrapper (`padding: 7rem 0`) on a WHITE page. No
  navbar, no hero band, no footer.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-12/`
  (HTTP 200, 17,596 bytes DOM; fetched + rendered in a browser 2026-08-15).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/carousel-12/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–11 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-12/css/`. Stylesheets: `css/owl.carousel.min.css`
  (3,351 bytes), `css/bootstrap.min.css` (Bootstrap 4.3.1, separate file),
  `css/style.css` (2,203 bytes — the template's custom rules, see tokens
  below), `fonts/icomoon/style.css` (the icon font for the arrow glyphs —
  irrelevant, arrows are hidden) + Google Roboto.
- **Carousel driven by `js/main.js`:** `$('.owl-2').owlCarousel({ center:
false, items: 1, loop: true, stagePadding: 0, margin: 20, smartSpeed:
1000, autoplay: true, nav: true, dots: true, pauseOnHover: false,
responsive: { 600: { margin: 20, nav: true, items: 2 }, 1000: { margin:
20, stagePadding: 0, nav: true, items: 3 } } })` — **1 card per view
  < 600px, 2 ≥ 600px, 3 ≥ 1000px** (each breakpoint adds `margin: 20` between
  cards), **LOOP ON**, **AUTOPLAY ON (~5s Owl default) with HOVER-PAUSE OFF**,
  **DOTS ON** (Owl default), **NAV ON in JS but CSS-HIDDEN** (see below),
  **1,000ms `smartSpeed`** and NO `animateOut` → default **HORIZONTAL SLIDE**
  (confirmed live: `.owl-stage` `translate3d(-1130px,0,0)`). Recreate:
  1/2/3-per-view responsive, loop, 20px gaps, dots, autoplay-without-hover-
  pause, ~1s horizontal slide, NO visible arrows.
- **Dots count is responsive (pages, not slides):** Owl renders one dot per
  "page" — verified live: **2 dots at desktop** (6 slides ÷ 3 per view),
  which implies 3 dots at ≥600px (6 ÷ 2) and 6 dots below 600px (6 ÷ 1).
  Each `.owl-dot > span` is a **15px × 3px bar, `border-radius: 0`,
  `background: #cccccc`**, margin 3px; the active dot's span is
  **`#007bff`**. The dots wrapper `.owl-2-style .owl-dots` is in NORMAL FLOW
  BELOW the carousel (`position: relative; bottom: -30px; text-align:
center`) — NOT overlaid on the images (confirmed visually: dots sit under
  the cards).
- **Arrows are hidden — do NOT render them:** `js/main.js` sets `nav: true`
  but `css/style.css` has `.owl-2-style .owl-nav { display: none; }`. The
  `.owl-prev`/`.owl-next` buttons DO exist in the DOM (verified) but are
  invisible. The recreation SHALL have no visible arrow buttons (keyboard
  access to slides still via focusable dots / aria-live region per a11y).
- **Card markup (×6, `.media-29101`):** `<a href="#"><img src="images/img_N.jpg"
alt="Image" class="img-fluid"></a>` + `<h3><a href="#">Title</a></h3>` —
  the IMAGE is wrapped in a link and the TITLE is a link too (whole card
  clickable; links go to "#" in the demo — recreation can keep card links as
  inert `href="#"` placeholders or drop the wrapper, but the image+title
  structure stays). Images: 900×600 natural (3:2 landscape, verified via
  `file` on all six `img_1..6.jpg`), `margin-bottom: 20px` on the img.
  Titles (lorem, each repeated twice across the six cards): "Consectetur
  Adipisicing Elit", "Beatae Doloribu", "Accusantium Eius Soluta". The
  recreation SHALL keep the same KIND of content (image card + short title
  link) with paraphrased/own placeholder titles.
- **Verified live in the browser (2026-08-15):** page rendered white with
  "Carousel #2" centered near-black heading at top; "Our Products" in
  `rgb(0,123,255)` (#007bff) left-aligned; light-gray left half
  `rgb(248,249,250)` (#f8f9fa) behind the product section (::before, 50%
  width, 100% height, z-index -1); three cards visible at desktop (image +
  gray title); two pill dots below (right dot blue = slide 2 active after
  autoplay advanced); no arrows visible; `.owl-stage` translate3d horizontal
  movement. Heading font-sizes both 20px Roboto weight 500.
- **Screenshot:** `carousel-12.jpg` (AVIF, 1200×972, viewed in browser) —
  clean minimalist product-showcase layout on a WHITE page. Top: centered
  dark sans "Carousel #2" heading. Below: a light-gray band (left half of
  the content width) containing the blue left-aligned "Our Products" heading
  and a row of THREE product cards (image on top, lorem caption below):
  skincare bottles + woven basket flat-lay, a white "COCOON" bottle with a
  small plant in a geometric pot, and white wireless earbuds in an open case
  on pink. Under the cards: TWO small horizontal pill dots (left one BLUE =
  active, right one GRAY), centered. Aesthetic: clean, modern, minimal,
  photography-first; palette is white + light gray + Bootstrap-blue accent +
  product photos.
- **Slide images (from the preview, NOT copied — picsum placeholders only):**
  `images/img_1..6.jpg` — all **900×600 (3:2 landscape)**, product/
  lifestyle photography (the live render showed: hand pulling a "GENESIS"
  magazine from a teal box with eucalyptus sprigs, a light-blue handheld
  console, white ONNE-branded skincare flat-lay; the screenshot shows a
  different arrangement — skincare basket, COCOON bottle, earbuds). The
  recreation should screen picsum seeds for product/lifestyle-flat-lay
  subjects (see the colorlib-template-replication skill's seed-screening
  method) and render them at natural aspect ratio via `img-fluid` behavior
  (max-width 100%, height auto — the source does NOT cover-crop).
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (`css/bootstrap.min.css`) + Owl Carousel 2.3.4 + icomoon icon font
  (keyboard-arrow glyphs — hidden) + Google Roboto. The recreation must NOT
  copy any of this — build a pure-React carousel (dots as real `<button>`s,
  placeholder picsum photos, lucide only if an icon is ever needed — none
  are visible here).
- **Fidelity note (heading copy-paste artifact):** the demo `<title>` AND the
  top visible `h2` literally read "Carousel #2" — an untouched copy-paste
  from Carousel 02's demo (this is demo #12). The recreation SHALL NOT
  reproduce the wrong number: use "Carousel #12" (corrected) or an
  equivalent same-kind paraphrase (e.g. "Featured Products", "Our Gallery").
  The "Our Products" section heading is NOT an artifact — keep it (or an
  equivalent paraphrase).
- **Fidelity note (Bootstrap utility classes):** `text-primary` =
  `#007bff`, `py-5` = 3rem vertical padding, `my-5` = 3rem top/bottom
  margins, `mb-5` = 3rem bottom margin, `img-fluid` = `max-width: 100%;
height: auto`. In Tailwind: `text-primary` token, `py-12`, `my-12`,
  `mb-12`.
- **Fidelity note (responsive):** the recreation MUST be responsive as a
  monorepo hard requirement — 1 card below 600px, 2 at ≥600px, 3 at ≥1000px
  (mirror the source breakpoints), images scale with the container, dots
  stay tappable (≥ 44px effective hit area on mobile despite the source's
  15px bars).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE `.content` wrapper — no navbar, no hero band, no
footer in the source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the WHITE page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px).
     - `h2.my-5.text-center` — the top heading: "Carousel #2" in the demo
       (copy-paste artifact — see note; use "Carousel #12" or paraphrase),
       20px, Roboto, near-black `#212529`, centered, `margin: 3rem 0`
       (`.my-5`).
   - `.site-section.bg-left-half.mb-5` — the product section (margin-bottom
     3rem). `position: relative`; its `::before` paints the LIGHT-GRAY LEFT
     HALF: absolute, `width: 50%; height: 100%; left: 0; top: 0;
z-index: -1; background-color: #f8f9fa`.
     - `.container.owl-2-style` — centered container (same 1140px max).
       - `h2.text-primary.py-5` — the section heading "Our Products":
         `#007bff`, 20px, Roboto, weight 500, left-aligned, `padding: 3rem
0` (`.py-5`).
       - `.owl-carousel.owl-2` — the card carousel: SIX `.media-29101`
         cards, each `<a><img class="img-fluid"></a>` (900×600, margin-
         bottom 20px) + `<h3><a>Title</a></h3>` (18px, weight 900, link
         `#6c757d`), 20px gap between cards (owl `margin: 20`), 1/2/3
         cards per view, loop, autoplay ~5s (no hover pause), ~1s
         horizontal slide.
   - Carousel furniture:
     - `.owl-nav` — present in DOM but `display: none` (arrows NOT
       rendered visually — do NOT recreate them).
     - `.owl-dots` — in normal flow BELOW the carousel (`position:
relative; bottom: -30px; text-align: center`); one dot per page
       (2 at desktop, 3 at ≥600px, 6 at mobile); each `> span` a 15×3px
       bar, `border-radius: 0`, `#cccccc`, margin 3px; active `#007bff`.

## Design tokens (from preview stylesheet `css/style.css` + Bootstrap base)

- **Page background:** WHITE (`#fff` — Bootstrap body default; no gray page
  tint).
- **Section (`.content`):** `padding: 7rem 0` (Tailwind `py-[7em]`).
- **Left-half band (`.bg-left-half::before`):** `background-color: #f8f9fa`
  (light gray), absolute, `width: 50%; height: 100%; left: 0; top: 0;
z-index: -1` — paints ONLY the left half of the product section, behind
  the content.
- **Top heading (`h2.my-5.text-center`):** 20px, Roboto, weight 500,
  near-black `#212529` (Bootstrap default), centered, `margin: 3rem 0`
  (`.my-5`).
- **Section heading (`h2.text-primary.py-5`):** **`#007bff`** (Bootstrap
  primary blue), 20px, Roboto, weight 500, left-aligned, `padding: 3rem 0`
  (`.py-5`).
- **Card title (`h3`):** 18px, Roboto, **weight 900**, `#212529`; the link
  inside (`h3 a`) is **`#6c757d`** (gray). `a` global: `transition: .3s all
ease; text-decoration: none`.
- **Card image (`img`):** `margin-bottom: 20px`; `img-fluid` (max-width
  100%, height auto); natural 900×600 (3:2).
- **Body text:** Roboto stack (body AND headings — this demo's custom rule
  applies Roboto to both; NOT Poppins). Bootstrap defaults: 16px,
  `line-height: 1.5`, weight 400, `#212529`; `p` is `#b3b3b3` weight 300
  (no body paragraphs in this demo — informational).
- **Font family:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — load Google
  Roboto 300/400/500 via `<link>` in index.html.
- **Accent color:** **`#007bff`** (Bootstrap primary blue) — used by the
  "Our Products" heading AND the active dot. Tokenize it in `@theme`.
- **Dots (`.owl-2-style .owl-dots`):** `position: relative; bottom: -30px;
text-align: center` (below the carousel, in normal flow). `.owl-dot`
  `display: inline-block;` `> span`: `width: 15px; height: 3px;
border-radius: 0; background: #cccccc; margin: 3px; transition: .3s all
cubic-bezier(.32,.71,.53,.53)`. **Active `> span`: `background:
#007bff`.** One dot per PAGE (2 desktop / 3 ≥600px / 6 mobile).
- **Arrows:** NONE visible — `.owl-2-style .owl-nav { display: none }`.
  Do NOT render arrow buttons.
- **Images:** local `images/img_1..6.jpg` (900×600 each, 3:2 landscape).
  Recreation uses picsum placeholder product/lifestyle photos
  `https://picsum.photos/seed/portofino-<n>/900/600` (or similar 3:2);
  seed IDs MUST be screened for product/flat-lay/lifestyle subjects — see
  the colorlib-template-replication skill's seed-screening method.
- **Icons:** none visible in this demo (the icomoon arrow glyphs are hidden
  with the nav).

## Requirements

### Requirement: Page composition

The system SHALL render a single-section page on a white background
containing a centered top heading and a product-carousel section with a
light-gray left-half band; the page wrapper SHALL have vertical padding of
7em.

#### Scenario: Single section layout

- **GIVEN** the Portofino page is rendered
- **WHEN** the page loads
- **THEN** a page wrapper SHALL be present with vertical padding of 7em top
  and bottom (`py-[7em]`)
- **AND** the page background SHALL be white
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html, weights 300/400/500)
- **AND** the page SHALL be responsive (no horizontal overflow on mobile)

#### Scenario: Top heading

- **GIVEN** the page is rendered
- **WHEN** the top heading is inspected
- **THEN** a centered heading SHALL be present above the product section —
  "Carousel #12" (corrected — the demo literally says "Carousel #2", a
  copy-paste artifact from demo 02; do NOT reproduce the wrong number) or an
  equivalent same-kind paraphrase
- **AND** the heading SHALL be ~20px, Roboto, near-black (`#212529`),
  centered, with ~3rem top and bottom margin (`my-12`)

### Requirement: Product section with left-half background

The system SHALL render a product section whose LEFT HALF is painted
light gray (`#f8f9fa`) behind the content, with the section heading in the
brand blue.

#### Scenario: Left-half band

- **GIVEN** the product section is rendered
- **WHEN** the section background is inspected
- **THEN** the left half of the section SHALL be `#f8f9fa` light gray and
  the right half SHALL remain white
- **AND** the band SHALL extend the full height of the section and sit
  BEHIND the content (z-index -1 equivalent)
- **AND** the band SHALL be exactly 50% of the section width, left-aligned

#### Scenario: Section heading

- **GIVEN** the product section is rendered
- **WHEN** the section heading is inspected
- **THEN** the heading "Our Products" (or an equivalent same-kind
  paraphrase) SHALL be present, left-aligned, in `#007bff`, ~20px Roboto
  weight 500
- **AND** the heading SHALL have ~3rem vertical padding (`py-12`)

### Requirement: Product cards

The system SHALL render exactly six product cards, each with an image at
natural 3:2 aspect ratio (with 20px bottom margin) and a short title link
(18px, weight 900, gray link color).

#### Scenario: Six cards

- **GIVEN** the carousel is rendered
- **WHEN** the card items are inspected
- **THEN** exactly six distinct cards SHALL exist (source has six
  `.media-29101` items; Owl's DOM clones are a library artifact, NOT
  content — the recreation has six)
- **AND** each card SHALL contain an image at natural aspect ratio
  (`max-width: 100%; height: auto`, 3:2 source ratio — NOT a fixed-height
  cover crop)
- **AND** each image SHALL have a ~20px bottom margin before the title
- **AND** each image SHALL have a descriptive `alt` text (source uses
  generic "Image"; the recreation SHALL use descriptive alt per a11y
  conventions)

#### Scenario: Card titles

- **GIVEN** a card is inspected
- **WHEN** its title is examined
- **THEN** the title SHALL be ~18px, Roboto, weight 900
- **AND** the title SHALL be a link in gray `#6c757d` (source: `<h3><a>`)
- **AND** the titles SHALL be short product-ish placeholder texts
  (paraphrased from the source's lorem titles — same KIND of content)

### Requirement: Carousel behavior

The system SHALL display 1 card per view below 600px, 2 at ≥600px, and 3 at
≥1000px, with a 20px gap between cards; it SHALL loop; slide changes SHALL
slide horizontally in ~1 second; autoplay SHALL advance on an ~5s interval
and SHALL NOT pause on hover.

#### Scenario: Responsive cards per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px, 600–999px, or ≥ 1000px
- **THEN** exactly one card SHALL be visible below 600px, two at 600–999px,
  and three at ≥ 1000px (source `responsive` block: 600 → items 2, 1000 →
  items 3)
- **AND** a ~20px gap SHALL separate adjacent cards at every breakpoint
  (source `margin: 20`)

#### Scenario: Loop

- **GIVEN** the carousel is on the last card
- **WHEN** the carousel advances (autoplay or dot click)
- **THEN** it SHALL wrap around to the first card (loop on)

#### Scenario: Slide transition

- **GIVEN** the carousel is changing cards
- **WHEN** the transition is observed
- **THEN** the cards SHALL slide HORIZONTALLY (translateX — Owl's default;
  NOT a cross-fade)
- **AND** the slide SHALL complete in ~1s (source `smartSpeed: 1000`)

#### Scenario: Autoplay without hover pause

- **GIVEN** the carousel is displayed without user interaction
- **WHEN** ~5 seconds elapse
- **THEN** the carousel SHALL advance automatically (source `autoplay:
true`, Owl default ~5s timeout)
- **AND** when the pointer hovers over the carousel, autoplay SHALL
  CONTINUE (source `pauseOnHover: false` — unlike Carousel 11)

### Requirement: Pill-bar dot navigation

The system SHALL render one dot per page (2 at desktop, 3 at ≥600px, 6 at
mobile) as 15×3px pill bars centered BELOW the carousel; inactive dots SHALL
be `#cccccc`, the active dot SHALL be `#007bff`; clicking a dot SHALL jump
to its page.

#### Scenario: Dots render

- **GIVEN** the carousel is rendered
- **WHEN** the dots are inspected
- **THEN** the number of dots SHALL equal the number of pages (slides ÷
  cards-per-view: 2 at ≥1000px, 3 at 600–999px, 6 below 600px)
- **AND** the dots SHALL be centered horizontally BELOW the carousel
  (~30px below it, in normal flow — NOT overlaid on the images)
- **AND** each dot SHALL be a ~15px × 3px bar with `border-radius: 0`
  (pill bar, NOT a circle — differs from Carousel 11)
- **AND** inactive dots SHALL be `#cccccc` and the active dot SHALL be
  `#007bff`
- **AND** each dot SHALL be a real `<button>` with an `aria-label` (e.g.
  "Go to page 2")

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first page
- **WHEN** the second dot is clicked
- **THEN** the carousel SHALL slide to the second page
- **AND** the second dot SHALL become active (`#007bff`) and the first SHALL
  become inactive (`#cccccc`)

#### Scenario: Active dot sync

- **GIVEN** the carousel is on the first page
- **WHEN** the slide changes (autoplay advance, loop wrap-around, or dot
  click)
- **THEN** the active dot SHALL follow the displayed page (including
  wrap-around from the last page back to the first)

### Requirement: No visible arrows

The source enables `nav: true` in JS but hides the arrows with CSS
(`display: none`); the system SHALL render NO arrow buttons.

#### Scenario: No arrows

- **GIVEN** the carousel is rendered
- **WHEN** the carousel area is inspected
- **THEN** NO prev/next arrow buttons SHALL be visible anywhere over or
  beside the carousel (the source's `.owl-nav` is `display: none`)
- **AND** slides SHALL still be reachable via the focusable dot buttons and
  autoplay (keyboard/a11y parity with the source's visible controls)

### Requirement: Responsive behavior

The system SHALL keep the layout usable from mobile to desktop (cards scale
with the container; dots remain tappable).

#### Scenario: Mobile

- **GIVEN** a viewport < 600px
- **WHEN** the page is rendered
- **THEN** one card SHALL be visible at a time, full container width, with
  images scaling naturally (height follows width; no fixed 900px source
  height)
- **AND** no horizontal overflow SHALL occur
- **AND** the dots SHALL remain tappable (≥ 44px effective hit area or
  clearly separated)

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 1000px
- **WHEN** the page is rendered
- **THEN** the section SHALL be constrained to the centered container
  (~1140px max) with three cards per view

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component
Dock"). The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Portofino page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/portofino` exists; package `@free-react-templates/portofino`;
      `public/CNAME` = `portofino.free.componentdock.com`; `homepage` =
      `https://portofino.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300/400/500); no
      font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/portofino` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Page wrapper `py-[7em]` on WHITE background; top centered heading
      ~20px Roboto `#212529` `my-12` — "Carousel #12" or same-kind
      paraphrase (NOT the demo's "Carousel #2" copy-paste artifact);
      responsive (no overflow on mobile)
- [ ] Product section: LEFT HALF `#f8f9fa` band (50% width, full height,
      behind content) + right half white; "Our Products" heading
      left-aligned `#007bff` 20px `py-12`
- [ ] Exactly six cards; each image at natural 3:2 ratio (max-width 100%,
      height auto), ~20px bottom margin, descriptive alt; product/lifestyle
      picsum seeds (screened per the replication skill); title ~18px weight
      900 in gray `#6c757d` link
- [ ] Carousel: 1/2/3 cards per view at <600px / 600–999px / ≥1000px with
      ~20px gaps; LOOP on; ~1s HORIZONTAL slide (NOT cross-fade); autoplay
      ~5s WITHOUT hover-pause
- [ ] Dots: one per page (2 desktop / 3 ≥600px / 6 mobile), 15×3px pill
      bars (`border-radius: 0`), `#cccccc` inactive / `#007bff` active,
      centered ~30px BELOW the carousel, real buttons with aria-labels;
      click jumps; active dot follows autoplay/loop wrap-around
- [ ] NO visible arrow buttons anywhere (source hides `.owl-nav`)
- [ ] Mobile: one card, images scale naturally, no horizontal overflow,
      dots tappable (≥44px hit area)
- [ ] Footer: minimal footer linking "Component Dock" →
      https://www.componentdock.com/
