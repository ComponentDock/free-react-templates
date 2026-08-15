# Template: Ravello (Full-Bleed Image Carousel)

## Purpose

Ravello is a single-section full-bleed image carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 09" website template design
(source: https://colorlib.com/wp/template/carousel-09/), built under a
DIFFERENT name (Ravello — "the cliffside town on the Amalfi Coast, the
sister town of Sorrento", continuing the travel/destinations naming theme
of the "Bootstrap Carousels (20)" series renames) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

New name **ravello** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-09`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the NINTH of the "Bootstrap Carousels (20)" series
renames (lineage: carousel-01 → wanderlust, carousel-02 → faraway,
carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri, carousel-06 →
cannes, carousel-07 → positano, carousel-08 → sorrento, carousel-09 →
ravello — theme: travel / destinations; the name is thematic, the content
is a full-screen travel-photo slider).

Ravello lives in `apps/ravello` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 09" — the NINTH of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 09"). A **FULL-BLEED IMAGE
  carousel** — NOT the split testimonial card of Carousel 08 (Sorrento),
  NOT a blog-card grid (Carousel 07/Positano). `.ftco-section` (padding
  7em 0) on a WHITE page with a centered near-black heading ("Carousel
  #09") above a `.hero.featured-carousel.owl-carousel` holding THREE
  `.item` slides, each a `.work` > `.img` full-width **600px-tall
  background-image slide** (cover, centered) with **NO inner text in the
  DOM** — the demo is a pure travel-photography slider. **Differs from
  Carousel 08 (Sorrento): the content is FULL-BLEED PHOTOS (not a 50/50
  quote split card), the accent is RED `#ff5959` (not gold `#dbcc8f`),
  the transition is a CROSS-FADE `fadeOut`/`fadeIn` with a 15,000ms
  `smartSpeed` (not slide-down/flip-in), the nav arrows are bare 30px
  white ion-ios-arrow-back/forward icons (not 40px round icons with
  "Prev"/"Next" text labels), and the dots are OVERLAID at the bottom of
  the image (absolute, bottom 20px — not a row below the card) with
  translucent-white fill (active red).** No navbar, no hero band, no
  footer — the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-09/`
  (HTTP 200, 8,438 bytes DOM; fetched 2026-08-15). NOTE: the standard
  preview path `https://preview.colorlib.com/theme/carousel-09/` 404s —
  the whole "Bootstrap Carousels" series lives under the `/theme/bootstrap/`
  prefix (same finding as the Bootstrap Calendars and Carousel 01–08
  preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-09/css/`. Stylesheets: `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/style.css` (223,179 bytes —
  bundles Bootstrap 4.3.1 + the template's custom ftco styles at the
  tail, ~lines 8135–8301) + ionicons 4.5.6 (CDN). Body font Poppins
  (Google, loaded via cf-fonts in the source head). Carousel driven by
  `js/main.js` (32 lines): `$('.featured-carousel').owlCarousel({
loop: true, autoplay: true, margin: 30, animateOut: 'fadeOut',
animateIn: 'fadeIn', smartSpeed: 15000, nav: true, dots: true,
autoplayHoverPause: false, items: 1, navText: ["<span
class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"] })`
  — **ONE slide per view at ALL breakpoints (1/1/1; NO responsive block
  → items: 1 everywhere)**, **LOOP ON**, **AUTOPLAY ON** (Owl default
  5,000ms interval, `autoplayHoverPause: false`), **CROSS-FADE
  transition** (`fadeOut`/`fadeIn`) with a **15-SECOND `smartSpeed`**
  (the fade itself is very slow in the source — a demo artifact; the
  recreation should use a sensible crossfade (~1.5–2s) and note the
  deviation), **ARROWS ON** (bare ion-ios-arrow-back/forward icons,
  30px via `span:before`, `color: white !important`, **ALWAYS VISIBLE**
  `opacity: 1`, at `left: 20px` / `right: 20px`, vertically centered),
  dots ON (overlaid at the bottom of the slides).
- **Screenshot:** `carousel-09.jpg` (1200×972 AVIF, viewed in browser) —
  minimalist photography-focused layout. Top: centered dark sans "Carousel
  #09" heading on a WHITE page. Below: ONE large full-bleed photo slide
  (the single-slide desktop view of the carousel): a Mediterranean coastal
  town (terracotta/red-tiled roofs climbing a hill, calm blue water with
  small boats in the foreground, a hilltop fortress wall against an
  overcast sky). A subtle WHITE right-pointing chevron arrow floats at the
  right edge of the image (mid-height). At the bottom center of the image:
  three small dots — the ACTIVE dot RED/PINK (`#ff5959`), the other two
  translucent grey. Aesthetic: clean, neutral, photography-first; white
  page, near-black text, a single red accent.
- **Slide images (from the preview, NOT copied — picsum placeholders
  only):** `images/slider-1.jpg` (1920×1148 — Mediterranean coastal town
  with terracotta roofs + boats, overcast), `images/slider-2.jpg`
  (2000×1660 — woman in a white dress + wide-brim hat in a circular
  hanging swing chair on a white tropical beach, turquoise sea),
  `images/slider-3.jpg` (1920×1280 — woman sitting cross-legged on the
  bow of a wooden longtail boat, arms outstretched, limestone karsts +
  turquoise water, sunny). All three are travel scenes; the recreation
  should screen picsum seeds for travel/coast subjects (see the
  colorlib-template-replication skill's seed-screening method; verified
  coastal candidate: picsum id 1055; landscape-ish ids 1015/1016/1018/
  1036/1039 to screen).
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (bundled into style.css) + Owl Carousel 2.3.4 + ionicons 4.5.6 + Google
  Poppins. The recreation must NOT copy any of this — build a pure-React
  carousel with lucide-react icons (ChevronLeft/ChevronRight for nav) and
  picsum placeholder travel photos.
- **Fidelity exception (responsive):** the source stylesheet forces
  `body { min-width: 992px !important; }` (a desktop-only demo artifact —
  13 occurrences in style.css, same as Carousel 08). The recreation MUST
  be responsive (600px-tall slides become ~300–400px on small screens,
  arrows stay reachable, dots stay tappable) and MUST NOT force a
  min-width — mobile support is a monorepo hard requirement.
- **Fidelity note (empty slides):** the source slides contain NO text
  (the `.img` divs are empty in the DOM; the `.work .text h3` / `.work
.text span` and `.work .img .icon` hover-circle rules in the stylesheet
  are unused leftovers from the template family). The recreation SHALL
  keep the slides image-only (no captions/overlays — matching the source
  1:1); alt text on the slide images satisfies accessibility.
- **Fidelity note (dot overlay):** unlike Carousel 08's below-card dots,
  the dots here are ABSOLUTE-POSITIONED at `bottom: 20px` OVER the image
  (`left: 0; right: 0; text-align: center`) — translucent white
  (`rgba(255,255,255,0.5)`) with the active dot solid red `#ff5959`. The
  recreation must place the dots INSIDE the carousel area over the
  slides, not below them.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` — single section, `padding: 7em 0`, on the WHITE page
   background. Inside `.container` > `.row`:
   - `.col-md-12.text-center` > `h2.heading-section.mb-5.pb-md-4` —
     "Carousel #09" (28px, Poppins, near-black, centered,
     `margin-bottom: 3rem` (`.mb-5`) + `padding-bottom: 1.5rem` at
     ≥768px (`.pb-md-4`)).
   - `.col-md-12` > `.hero.featured-carousel.owl-carousel` — THREE
     `.item` slides, each:
     - `.work` (width: 100%) > `.img.d-flex.align-items-center.justify-content-center`
       — the SLIDE: `width: 100%; height: 600px; position: relative;
z-index: 0;` cover-centered background image
       (`background-image: url(images/slider-N.jpg)`), plus a soft
       downward shadow `0px 20px 35px -30px rgba(0,0,0,0.26)` and a
       `::after` overlay gradient (transparent → black at bottom,
       `opacity: .3` — a subtle bottom-darkening vignette). The inner
       flex centering + `.icon` white circle + `.text` blocks are
       UNUSED in this demo (no children in the DOM).
   - Carousel furniture (Owl + style.css custom tail):
     - `.owl-carousel .owl-nav` — `position: absolute; top: 50%;
width: 100%;` — a full-width side strip at mid-height.
       `.owl-prev { left: 20px; }`, `.owl-next { right: 20px; }` —
       both `transform: translateY(-50%); margin-top: 0; color:
white !important; opacity: 1;` (ALWAYS VISIBLE — no
       hover-reveal), `transition: 0.7s` (disabled under
       `prefers-reduced-motion`). Inner `span:before` — the arrow
       icon — `font-size: 30px` (ion-ios-arrow-back /
       ion-ios-arrow-forward).
     - `.owl-carousel .owl-dots` — `text-align: center; position:
absolute; bottom: 20px; right: 0; left: 0;` — OVERLAID at the
       bottom of the slides. Dots: `width: 10px; height: 10px; margin:
5px; border-radius: 50%; background: rgba(255,255,255,0.5);`
       (translucent white circles); ACTIVE dot `background: #ff5959;`
       (solid RED). Three slides → three dots.

## Design tokens (from preview stylesheet `css/style.css`, custom tail)

- **Page background:** WHITE (`#fff` — Bootstrap body default; the
  source has NO gray page tint like Carousel 08).
- **Section:** `.ftco-section` — `padding: 7em 0` (Tailwind `py-[7em]`).
- **Heading (`.heading-section`):** 28px, Poppins, near-black (inherits
  `#212529` — no explicit color rule), centered, `margin-bottom: 3rem`
  (`.mb-5`), `padding-bottom: 1.5rem` at ≥768px (`.pb-md-4`). Headings
  base rule: `h1..h5, .h1..h5 { line-height: 1.5; font-weight: 400;
font-family: "Poppins", Arial, sans-serif; }`.
- **Body text:** Poppins 14px, `line-height: 1.8`, `font-weight:
normal` (no color override → `#212529`). Body rule: `body {
font-family: "Poppins", Arial, sans-serif; font-size: 14px;
line-height: 1.8; font-weight: normal; }`.
- **Links:** `a { color: #ff5959; }` (the red accent on any links;
  `transition: .3s all ease`).
- **Slide (`.work .img`):** `width: 100%; height: 600px; position:
relative; z-index: 0;` cover-centered background image;
  `box-shadow: 0px 20px 35px -30px rgba(0,0,0,0.26)` (soft downward
  shadow). `::after` overlay: `linear-gradient(to bottom, rgba(255,93,177,0)
0%, rgba(148,54,103,0) 42%, black 100%)` with `opacity: .3` — a subtle
  bottom-darkening vignette under the dots/arrows (the pink hues are
  fully transparent — only the black tail shows).
- **Nav arrows (`.owl-nav`):** absolute strip at `top: 50%` (`left:
20px` / `right: 20px`), `translateY(-50%)`; ALWAYS VISIBLE (`opacity:
1`); WHITE (`color: white !important`) 30px bare arrow icons
  (ion-ios-arrow-back / ion-ios-arrow-forward — recreate with lucide
  ChevronLeft/ChevronRight at 30px); `transition: 0.7s` (none under
  `prefers-reduced-motion`).
- **Dots (`.owl-dots`):** OVERLAID on the slides — absolute `bottom:
20px`, `left: 0; right: 0`, centered; 10×10px circles, `margin: 5px`,
  `border-radius: 50%`, `background: rgba(255,255,255,0.5)` (translucent
  white); ACTIVE dot `background: #ff5959` (solid RED). Three slides →
  three dots.
- **Accent color:** `#ff5959` (RED/coral) — active dot + link color.
  Put it in `@theme` (e.g. `--color-brand`) and use it via Tailwind
  classes.
- **Fonts:** body + headings `"Poppins", Arial, sans-serif` (Google via
  cf-fonts in the source). Load Poppins 400 (+ 500/600 if needed) via
  Google Fonts `<link>` in index.html (no font files copied).
- **Icons/images:** source uses the ionicons font (back/forward arrows)
  and local `images/slider-1..3.jpg` travel photos. Recreation uses
  lucide-react icons (ChevronLeft/ChevronRight for nav) and picsum
  placeholder travel photos (`https://picsum.photos/seed/ravello-<n>/1920/1148`
  etc. — 16:9-ish landscape crops for the 600px-tall slides; seed IDs
  MUST be screened for travel/coast subjects — see the
  colorlib-template-replication skill's seed-screening method; verified
  coastal candidate: picsum id 1055; screen landscape ids 1015/1016/
  1018/1036/1039).

## Requirements

### Requirement: Page composition

The system SHALL render a single section on a white page containing a
centered section heading and a full-bleed image carousel; the section
SHALL fill the page width with the carousel constrained to a centered
container.

#### Scenario: Single section layout

- **GIVEN** the Ravello page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be white
- **AND** the section SHALL contain a centered heading "Carousel #09" (or
  an equivalent paraphrase of the same kind, e.g. "Featured Destinations")
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)
- **AND** the page SHALL be responsive (source forces `min-width: 992px`
  — the recreation MUST NOT; see fidelity exception above)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, near-black, centered
- **AND** the heading SHALL be followed by a ~3rem bottom margin

### Requirement: Full-bleed image slides

The system SHALL render exactly three slides, each a full-width
cover-positioned travel photo 600px tall with a soft downward shadow and
a subtle bottom-darkening gradient overlay; the slides SHALL contain no
text (image-only, matching the source).

#### Scenario: Three slides

- **GIVEN** the carousel is rendered
- **WHEN** the slide items are inspected
- **THEN** exactly three distinct slides SHALL exist
- **AND** each slide SHALL be `width: 100%; height: 600px` with a
  cover-positioned, center-aligned background image (or an `<img>` with
  `object-fit: cover`)
- **AND** each slide SHALL have the soft downward shadow
  (`0px 20px 35px -30px rgba(0,0,0,0.26)`)
- **AND** each slide SHALL carry the subtle bottom-darkening gradient
  overlay (transparent → black at bottom, ~0.3 opacity)
- **AND** each slide SHALL be image-only — no caption text, no overlay
  copy (the source's slides are empty in the DOM; `.text`/`.icon`
  blocks are unused leftovers)
- **AND** each slide image SHALL have a descriptive `alt` text (e.g.
  "Coastal town on the Mediterranean")

### Requirement: Carousel behavior

The system SHALL display exactly one slide per view at every breakpoint
(1/1/1); it SHALL loop; slide changes SHALL cross-fade; autoplay SHALL
advance every ~5 seconds without pausing on hover.

#### Scenario: One slide per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px, 600–999px, or ≥ 1000px
- **THEN** exactly one slide SHALL be visible at a time at every viewport
  size (source has NO responsive block → items: 1 everywhere)

#### Scenario: Loop

- **GIVEN** the carousel is on the last slide
- **WHEN** a next-page action is attempted
- **THEN** the carousel SHALL wrap around to the first slide (loop on)

#### Scenario: Slide transition

- **GIVEN** the carousel is changing slides
- **WHEN** the transition is observed
- **THEN** the outgoing slide SHALL fade out while the incoming slide
  SHALL fade in (cross-fade flavor — NOT a horizontal slide, NOT
  slide-down/flip-in like Carousel 08)
- **AND** the fade SHALL complete in ~1.5–2s (the source's 15,000ms
  `smartSpeed` is a demo artifact — a sensible crossfade is a documented
  deviation)

#### Scenario: Autoplay

- **GIVEN** the carousel is displayed without user interaction
- **WHEN** ~5 seconds elapse
- **THEN** the carousel SHALL advance to the next slide and continue every
  ~5s, wrapping from the last slide back to the first
- **AND** autoplay SHALL NOT pause on hover (source
  `autoplayHoverPause: false`)
- **AND** under `prefers-reduced-motion: reduce`, autoplay SHALL be
  disabled (slides change only via arrows/dots)

### Requirement: Navigation arrows

The system SHALL render Prev/Next controls at the sides of the carousel
(mid-height, 20px from the edges) that are ALWAYS visible; each SHALL be
a bare 30px white chevron icon; they SHALL move one slide per click and
honor looping.

#### Scenario: Arrows render and navigate

- **GIVEN** the carousel is displayed
- **WHEN** the nav strip is inspected
- **THEN** a Prev control SHALL sit at the left edge (mid-height, ~20px
  inset) and a Next control at the right edge
- **AND** the controls SHALL be visible WITHOUT hover (opacity 1) — no
  hover-reveal
- **AND** each control SHALL be a bare ~30px arrow icon (lucide
  ChevronLeft/ChevronRight) in white (source ion-ios-arrow-back/forward
  at 30px — no text labels, no circles, unlike Carousel 08)
- **AND** clicking Prev SHALL move to the previous slide (wrapping to the
  last on the first slide)
- **AND** clicking Next SHALL move to the next slide (wrapping to the
  first on the last slide)
- **AND** buttons SHALL have accessible labels (`aria-label="Previous
slide"` / `aria-label="Next slide"`) and focus-visible rings

### Requirement: Dot indicators

The system SHALL render one dot per slide (three total) OVERLAID at the
bottom center of the carousel area (inside the slides, ~20px from the
bottom); dots SHALL be 10×10px translucent-white circles and the active
dot SHALL be solid red `#ff5959`; activating a dot SHALL jump to that
slide.

#### Scenario: Dots render and track

- **GIVEN** the carousel is displayed
- **WHEN** the dots are inspected
- **THEN** exactly three dots SHALL be rendered, one per slide, centered
  and OVERLAID at the bottom of the slides (absolute, bottom ~20px) —
  NOT in a row below the carousel (unlike Carousel 08)
- **AND** each dot SHALL be a 10×10px circle (`border-radius: 50%`) with
  5px gaps, `background: rgba(255,255,255,0.5)` (translucent white)
- **AND** the dot for the current slide SHALL have `background: #ff5959`
  (solid red)
- **AND** the other dots SHALL remain translucent white

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first slide
- **WHEN** the third dot is activated
- **THEN** the third slide SHALL display
- **AND** the third dot SHALL become the active (red) dot

### Requirement: Responsive behavior

The system SHALL keep the layout usable from mobile to desktop (the source
is desktop-only via `min-width: 992px` — the recreation MUST be
responsive).

#### Scenario: Mobile

- **GIVEN** a viewport < 768px
- **WHEN** the page is rendered
- **THEN** the slides SHALL be full-width with a reduced height (~300–400px;
  the source's 600px is desktop-scaled) with no horizontal overflow (no
  forced min-width)
- **AND** the dots SHALL remain tappable (≥ 44px effective hit area or
  clearly separated)
- **AND** the nav arrows SHALL remain reachable on touch

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the slides SHALL be 600px tall full-width cover images
- **AND** the arrows SHALL sit at the sides (20px inset, mid-height,
  always visible) and the dots overlaid at the bottom center of the
  slides

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component
Dock"). The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Ravello page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/ravello` exists; package `@free-react-templates/ravello`;
      `public/CNAME` = `ravello.free.componentdock.com`; `homepage` =
      `https://ravello.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins; no font/image/icon assets
      copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/ravello` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (28px, Poppins, ~3rem bottom margin)
      "Carousel #09" or paraphrase; responsive (NO min-width: 992px)
- [ ] Three distinct slides; each full-width 600px-tall cover image with
      the soft downward shadow (`0px 20px 35px -30px rgba(0,0,0,0.26)`)
      and the subtle bottom-darkening gradient overlay; image-only (no
      captions); descriptive alt text; travel-subject picsum seeds
      (screened per the replication skill)
- [ ] Carousel: exactly 1 slide per view at <600px / 600–999px / ≥1000px;
      LOOP on; cross-fade transition (~1.5–2s — source's 15s smartSpeed
      is a documented deviation); autoplay ON ~5s (fake timers) that does
      NOT pause on hover and is disabled under `prefers-reduced-motion`
- [ ] Arrows: ALWAYS visible at mid-height sides (~20px inset); bare 30px
      white chevrons (lucide ChevronLeft/ChevronRight — no text labels,
      no circles); wrap-around navigation; aria-labels + focus-visible
      rings; reachable on touch
- [ ] Dots: three 10×10px translucent-white circles
      (`rgba(255,255,255,0.5)`) OVERLAID at the bottom center of the
      slides (absolute, bottom ~20px — NOT below the carousel); active
      dot solid red `#ff5959`; clicking jumps to that slide
- [ ] Footer: minimal footer linking "Component Dock" →
      https://www.componentdock.com/
