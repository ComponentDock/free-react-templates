# Template: Amalfi (Full-Bleed Image Carousel with Captions + Circular Thumbnail Navigation)

## Purpose

Amalfi is a single-section full-bleed image carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 10" website template design
(source: https://colorlib.com/wp/template/carousel-10/), built under a
DIFFERENT name (Amalfi — the coastal town at the heart of the Amalfi Coast,
continuing the travel/destinations naming theme of the "Bootstrap Carousels
(20)" series renames) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **amalfi** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-10`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the TENTH of the "Bootstrap Carousels (20)" series
renames (lineage: carousel-01 → wanderlust, carousel-02 → faraway,
carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri, carousel-06 →
cannes, carousel-07 → positano, carousel-08 → sorrento, carousel-09 →
ravello, carousel-10 → amalfi — theme: travel / destinations; the name is
thematic, the content is a full-screen travel-photo slider with captions).

Amalfi lives in `apps/amalfi` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 10" — the TENTH of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 10"). A **FULL-BLEED IMAGE
  carousel with CAPTION OVERLAYS and a CIRCULAR THUMBNAIL STRIP as the ONLY
  navigation**. `.ftco-section` (padding 7em 0) on a WHITE page with a
  centered near-black heading ("Carousel #10") above
  `.slider-hero > .featured-carousel.owl-carousel` holding THREE `.item`
  slides, each `.work` > `.img` — a full-width **600px-tall cover
  background-image slide** (rounded corners, black overlay) with a **text
  overlay h2 caption** centered on the photo. BELOW the carousel: a
  `ul.thumbnail` strip of THREE **circular thumbnails** that straddle the
  bottom edge of the hero and drive slide selection. **Differs from
  Carousel 09 (Ravello): the slides carry centered CAPTION TEXT (Ravello's
  slides were image-only), the photo has a plain 30% BLACK overlay (not the
  bottom gradient vignette), slides have ROUNDED CORNERS
  (`border-radius: 10px` — Ravello had none), navigation is the THUMBNAIL
  STRIP ONLY (no always-visible arrows, no dots, NO autoplay — Ravello had
  arrows + dots + autoplay), and the transition is a 1,500ms cross-fade
  (Ravello's source was 15,000ms).** No navbar, no hero band, no footer —
  the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-10/`
  (HTTP 200, 10,294 bytes DOM; fetched 2026-08-15). NOTE: the standard
  preview path `https://preview.colorlib.com/theme/carousel-10/` 404s —
  the whole "Bootstrap Carousels" series lives under the `/theme/bootstrap/`
  prefix (same finding as the Bootstrap Calendars and Carousel 01–09
  preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-10/css/`. Stylesheets: `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/animate.css`, `css/style.css`
  (223,049 bytes — bundles Bootstrap 4.3.1 + the template's custom ftco
  styles at the tail, ~lines 8135–8330) + ionicons 4.5.6 (CDN). Body font
  Poppins (weights 200–900 inlined as @font-face via cf-fonts in the head —
  weight 200 is CRITICAL for the captions).
- **Carousel driven by `js/main.js` (27 lines):**
  `$('.featured-carousel').owlCarousel({ animateOut: 'fadeOut', center:
false, items: 1, loop: true, stagePadding: 0, margin: 0, smartSpeed:
1500, autoplay: false, dots: false, nav: false, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at ALL
  breakpoints (1/1/1; NO responsive block → items: 1 everywhere)**, **LOOP
  ON**, **NO AUTOPLAY** (user-driven only), **NO DOTS, NO NAV ARROWS**
  (the navText spans are set but `nav: false` — dead config), **CROSS-FADE
  OUT transition** (`animateOut: 'fadeOut'`, no animateIn) at **1,500ms
  `smartSpeed`** (a sensible ~1.5s crossfade — recreate as-is, NOT the
  15s of Carousel 09). Thumbnail navigation:
  `$('.thumbnail li').each(function(slide_index){ $(this).click(function(e)
{ owl.trigger('to.owl.carousel',[slide_index,1500]); e.preventDefault();
}) })` — clicking a thumbnail jumps to that slide with a 1500ms
  transition; and `owl.on('changed.owl.carousel', function(event) {
$('.thumbnail li').removeClass('active');
$('.thumbnail li').eq(event.item.index - 2).addClass('active'); })` —
  the active thumbnail follows the current slide (**the `- 2` offset is
  Owl's loop-clone offset: with `loop: true` Owl prepends 2 clones, so the
  DOM item index maps back to the real slide index minus 2; in React,
  track the active index directly — no offset needed**). The FIRST
  thumbnail is hardcoded `active` in the HTML (`<li class="active img">`).
- **Screenshot:** `carousel-10.jpg` (1200×972, viewed in browser) —
  minimalist travel-resort layout. Top: centered dark sans "Carousel #10"
  heading on a WHITE page. Below: ONE large full-bleed photo slide (the
  single-slide desktop view): a luxury tropical resort — a large curved
  infinity pool in the foreground, palm trees and lounge chairs, ocean
  meeting a cloudy sky. Centered over the image: "DISCOVER NEW PLACES" in
  white, uppercase, THIN/light sans-serif (matches the 60px weight-200
  caption style), slightly above the vertical center. At the bottom, half
  overlapping the photo's bottom edge: THREE CIRCULAR thumbnails — the
  left (pool view, matching the current slide) has a thin WHITE border
  (active state); the middle and right show white resort-building views.
  Aesthetic: clean, minimal, photography-first; white page, near-black
  heading, white captions over photos, no colored accent in use.
- **Slide images (from the preview, NOT copied — picsum placeholders
  only):** `images/slider-1.jpg` (2000×1334 — luxury resort infinity pool
  with curved edge, palm trees, loungers, ocean + cloudy sky; caption
  "Discover New Places"), `images/slider-2.jpg` (2000×1335 — resort pool
  deck: turquoise pool, modern white multi-story building, loungers with
  beige umbrellas, palm trees, blue sky; caption "Dream Destination"),
  `images/slider-3.jpg` (2000×1216 — beach scene: white high-rise hotels
  along the coast, sandy beach with umbrellas, people, turquoise water;
  caption "Travel Exploration"). Thumbnails `images/thumb-1..3.jpg`
  (400×400 SQUARES — circular crops of the same three scenes). All are
  travel-resort scenes; the recreation should screen picsum seeds for
  tropical/travel subjects (see the colorlib-template-replication skill's
  seed-screening method; verified coastal candidate: picsum id 1055;
  landscape-ish ids 1015/1016/1018/1036/1039 to screen).
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (bundled into style.css) + Owl Carousel 2.3.4 + ionicons 4.5.6 + Google
  Poppins (cf-fonts). The recreation must NOT copy any of this — build a
  pure-React carousel with picsum placeholder travel photos (thumbnails are
  the same picsum seeds at 400×400 square crops).
- **Fidelity exception (responsive):** the source stylesheet forces
  `body { min-width: 992px !important; }` (13 occurrences in style.css,
  same as Carousel 08/09). The recreation MUST be responsive (600px-tall
  slides become ~300–400px on small screens, thumbnails shrink 80px → 50px
  per the source's own ≤767.98px rule, thumbnails stay tappable) and MUST
  NOT force a min-width — mobile support is a monorepo hard requirement.
- **Fidelity note (caption text):** UNLIKE Carousel 09 (image-only
  slides), the slides here DO carry text — the `.text.text-center > h2`
  caption is present in the demo DOM. The recreation SHALL render the
  captions centered over each slide (uppercase, weight 200, white).
- **Fidelity note (family leftovers — SKIP):** the stylesheet's shared
  family tail still defines `.owl-carousel .owl-nav` (white arrows at
  left/right 20px, always visible), `.owl-dots` (10px translucent-white
  dots overlaid bottom 20px, active `#ff5959`), `.work .text span` (12px
  uppercase grey kicker), and `.owl-item { opacity: 1 }` overrides — but
  `nav: false` and `dots: false` in JS mean NO arrows and NO dots render,
  and the span is absent from the DOM. Do NOT render arrows, dots, or the
  span kicker. The `.owl-item opacity: 1` override matters only for Owl's
  fade mechanics (the outgoing item fades, incoming stays opaque) — in
  React, a simple cross-fade of the active slide satisfies it.
- **Fidelity note (thumbnail strip position):** `ul.thumbnail` is
  `position: absolute; bottom: 0px; left: 50%; transform: translateY(50%)
translateX(-50%); z-index: 99; width: 100%;` — positioned against the
  nearest positioned ancestor `.slider-hero` (`position: relative`), so the
  strip straddles the hero's bottom edge: the top half of the circles
  overlaps the photo, the bottom half hangs below it. The recreation must
  reproduce this straddle (a wrapper around the carousel with
  `position: relative` and the thumb strip absolutely positioned at
  `bottom: 0; translateY(50%)`).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` — single section, `padding: 7em 0`, on the WHITE page
   background. Inside `.container` > `.row`:
   - `.col-md-12.text-center` > `h2.heading-section.mb-5.pb-md-4` —
     "Carousel #10" (28px, Poppins, near-black, centered,
     `margin-bottom: 3rem` (`.mb-5`) + `padding-bottom: 1.5rem` at
     ≥768px (`.pb-md-4`)).
   - `.col-md-12` > `.slider-hero` (`position: relative`) >
     `.featured-carousel.owl-carousel` — THREE `.item` slides, each:
     - `.work` (width: 100%) > `.img.d-flex.align-items-center.justify-content-center`
       — the SLIDE: `width: 100%; height: 600px; position: relative;
z-index: 0; border-radius: 10px; overflow: hidden;` cover-centered
       inline background image (`background-image: url(images/slider-N.jpg)`),
       soft downward shadow `0px 20px 35px -30px rgba(0,0,0,0.26)`, and a
       `::after` — `position: absolute; inset: 0; content: '';
z-index: -1; background: #000; opacity: .3` — a PLAIN 30% BLACK
       overlay (NOT the bottom gradient of Carousel 09).
       - INSIDE the `.img`: `.text.text-center > h2` — the CAPTION:
         "Discover New Places" / "Dream Destination" / "Travel Exploration"
         (60px, Poppins weight 200, white, uppercase; 40px below 992px),
         flex-centered both axes over the photo.
   - Carousel furniture: NONE rendered — `nav: false`, `dots: false`,
     `autoplay: false` (the shared owl-nav/owl-dots CSS in the family tail
     is dead in this demo).
   - `.my-5.text-center` > `ul.thumbnail` — the NAVIGATION STRIP:
     absolute at the hero's bottom edge (see fidelity note above), three
     `<li>` (first has classes `active img` — the `img` class is a
     harmless leftover), each `<a href="#"><img src="images/thumb-N.jpg"
class="img-fluid" alt="Image"></a>` — 80px circular images (50px
     below 768px), scale 0.8 idle; the ACTIVE li's img gets
     `border: 4px solid #fff; scale(1.1)` + a stronger shadow.

## Design tokens (from preview stylesheet `css/style.css`, custom tail)

- **Page background:** WHITE (`#fff` — Bootstrap body default; no gray
  page tint).
- **Section:** `.ftco-section` — `padding: 7em 0` (Tailwind `py-[7em]`).
- **Heading (`.heading-section`):** 28px, Poppins, near-black (inherits
  `#212529` — no explicit color rule), centered, `margin-bottom: 3rem`
  (`.mb-5`), `padding-bottom: 1.5rem` at ≥768px (`.pb-md-4`). Headings
  base rule: `h1..h5, .h1..h5 { line-height: 1.5; font-weight: 400;
font-family: "Poppins", Arial, sans-serif; }`.
- **Body text:** Poppins 14px, `line-height: 1.8`, `font-weight: normal`
  (no color override → `#212529`). Body rule: `body { font-family:
"Poppins", Arial, sans-serif; font-size: 14px; line-height: 1.8;
font-weight: normal; }`.
- **Links:** `a { color: #ff5959; transition: .3s all ease; }` — the red
  accent exists for links only; in this demo the only link is the footer's
  (see below), so the accent is effectively unused in the visible page.
- **Slide (`.work .img`):** `width: 100%; height: 600px; position:
relative; z-index: 0; border-radius: 10px; overflow: hidden;`
  cover-centered background image; `box-shadow: 0px 20px 35px -30px
rgba(0,0,0,0.26)` (soft downward shadow). `::after` overlay:
  `background: #000; opacity: .3` — a PLAIN 30% BLACK overlay across the
  whole photo (NOT Carousel 09's bottom gradient) that darkens the photo
  so the white caption pops.
- **Caption (`.work .text h2`):** `font-size: 60px; font-weight: 200`
  (LIGHT — Poppins 200, the thinnest weight), `color: #fff; text-transform:
uppercase;` centered over the slide (flex centering on `.img`).
  `@media (max-width: 991.98px) { font-size: 40px }`.
- **Thumbnail strip (`ul.thumbnail`):** `list-style: none; padding: 0;
margin: 0; position: absolute; bottom: 0; left: 50%; transform:
translateY(50%) translateX(-50%); z-index: 99; width: 100%;` — straddles
  the hero's bottom edge (half over the photo, half below), centered.
  `li { display: inline-block }`; `a { display: block; margin: 4px }`.
  **Thumb img:** `width: 80px; border-radius: 50%` (CIRCULAR); `transform:
scale(0.8)`; `transition: .3s all ease`; `box-shadow: 0 5px 10px 0
rgba(0,0,0,0.2)`. **Active thumb img:** `border: 4px solid #fff;
transform: scale(1.1); box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2)`.
  `@media (max-width: 767.98px) { img { width: 50px } }`.
- **Accent color:** `#ff5959` (RED/coral) — links only in this demo (no
  dots/arrows render). Put it in `@theme` (e.g. `--color-brand`) for the
  footer link hover; the visible page is otherwise monochrome
  (white/near-black/photos).
- **Fonts:** body + headings `"Poppins", Arial, sans-serif` (weights
  200–900 inlined via cf-fonts in the source head). Load Poppins 200 +
  400 (+ 500/600 if needed) via Google Fonts `<link>` in index.html — the
  200 weight is required for the caption look (no font files copied).
- **Icons/images:** source uses the ionicons font (navText spans — dead)
  and local `images/slider-1..3.jpg` (2000×1334/1335/1216) + square
  `images/thumb-1..3.jpg` (400×400). Recreation uses picsum placeholder
  travel photos: slides `https://picsum.photos/seed/amalfi-<n>/2000/1334`
  etc. (3:2-ish landscape for the 600px-tall slides) and thumbnails the
  SAME seeds at `https://picsum.photos/seed/amalfi-<n>/400/400` (square
  crops for the circles); seed IDs MUST be screened for travel/resort
  subjects — see the colorlib-template-replication skill's seed-screening
  method; verified coastal candidate: picsum id 1055; screen landscape ids
  1015/1016/1018/1036/1039.

## Requirements

### Requirement: Page composition

The system SHALL render a single section on a white page containing a
centered section heading, a full-bleed image carousel, and a circular
thumbnail strip straddling the carousel's bottom edge; the section SHALL
fill the page width with the carousel constrained to a centered container.

#### Scenario: Single section layout

- **GIVEN** the Amalfi page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be white
- **AND** the section SHALL contain a centered heading "Carousel #10" (or
  an equivalent paraphrase of the same kind, e.g. "Featured Destinations")
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html, including the 200 weight)
- **AND** the page SHALL be responsive (source forces `min-width: 992px`
  — the recreation MUST NOT; see fidelity exception above)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, near-black, centered
- **AND** the heading SHALL be followed by a ~3rem bottom margin

### Requirement: Full-bleed image slides with captions

The system SHALL render exactly three slides, each a full-width
cover-positioned travel photo 600px tall with rounded corners, a soft
downward shadow, a plain 30% black overlay, and a centered uppercase
caption; the slides SHALL contain the caption text (unlike Carousel 09).

#### Scenario: Three slides

- **GIVEN** the carousel is rendered
- **WHEN** the slide items are inspected
- **THEN** exactly three distinct slides SHALL exist
- **AND** each slide SHALL be `width: 100%; height: 600px` with a
  cover-positioned, center-aligned background image (or an `<img>` with
  `object-fit: cover`)
- **AND** each slide SHALL have `border-radius: 10px` and
  `overflow: hidden` (rounded corners — NEW vs Carousel 09)
- **AND** each slide SHALL have the soft downward shadow
  (`0px 20px 35px -30px rgba(0,0,0,0.26)`)
- **AND** each slide SHALL carry a plain 30% BLACK overlay across the
  whole photo (`background: #000; opacity: .3` — NOT Carousel 09's bottom
  gradient vignette)
- **AND** each slide image SHALL have a descriptive `alt` text (e.g.
  "Luxury resort infinity pool with palm trees")

#### Scenario: Slide captions

- **GIVEN** a slide is displayed
- **WHEN** the caption is inspected
- **THEN** a caption SHALL be centered over the slide (both axes)
- **AND** the caption SHALL be an `h2` in Poppins weight 200, white,
  uppercase, ~60px on desktop and ~40px below 992px
- **AND** the caption text SHALL be one of "Discover New Places", "Dream
  Destination", "Travel Exploration" (or same-kind paraphrases: destination
  - travel-experience phrases)
- **AND** the caption SHALL remain readable against the photo (the 30%
  black overlay provides contrast)

### Requirement: Thumbnail navigation strip

The system SHALL render three circular thumbnails (one per slide) centered
at the bottom edge of the carousel hero, straddling the edge (top half over
the photo, bottom half below); thumbnails SHALL be 80px circles scaled to
0.8, the active one SHALL get a 4px white border and scale to 1.1; clicking
a thumbnail SHALL jump to its slide. The thumbnail strip SHALL be the ONLY
navigation control.

#### Scenario: Thumbnails render and straddle the hero edge

- **GIVEN** the page is rendered
- **WHEN** the thumbnail strip is inspected
- **THEN** exactly three thumbnails SHALL be rendered, one per slide,
  centered horizontally
- **AND** the strip SHALL be absolutely positioned at `bottom: 0` of the
  carousel hero wrapper with `translateY(50%)` — the top half of the
  circles overlapping the photo's bottom edge, the bottom half below it
  (NOT a strip fully below the carousel, NOT overlaid fully on the photo)
- **AND** each thumbnail SHALL be a circular image (`border-radius: 50%`,
  ~80px wide, scaled to 0.8 by default)
- **AND** each thumbnail SHALL have the soft shadow
  (`0 5px 10px 0 rgba(0,0,0,0.2)`) and a ~0.3s transition on
  transform/border

#### Scenario: Active thumbnail styling

- **GIVEN** the carousel is on the first slide
- **WHEN** the thumbnails are inspected
- **THEN** the first thumbnail SHALL be active: a 4px WHITE border, scale
  1.1, and the stronger shadow (`0 10px 20px 0 rgba(0,0,0,0.2)`)
- **AND** the other two thumbnails SHALL be inactive (scale 0.8, no white
  border)

#### Scenario: Click a thumbnail

- **GIVEN** the carousel is on the first slide
- **WHEN** the third thumbnail is clicked
- **THEN** the third slide SHALL display (cross-fading over ~1.5s)
- **AND** the third thumbnail SHALL become the active one (white border,
  scale 1.1)

### Requirement: Carousel behavior

The system SHALL display exactly one slide per view at every breakpoint
(1/1/1); it SHALL loop; slide changes SHALL cross-fade in ~1.5 seconds;
there SHALL be NO autoplay, NO arrows, and NO dots (the source disables
all three — the thumbnails are the only navigation).

#### Scenario: One slide per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px, 600–999px, or ≥ 1000px
- **THEN** exactly one slide SHALL be visible at a time at every viewport
  size (source has NO responsive block → items: 1 everywhere)

#### Scenario: Loop

- **GIVEN** the carousel is on the last slide
- **WHEN** the first thumbnail is clicked
- **THEN** the carousel SHALL wrap around to the first slide (loop on)

#### Scenario: Slide transition

- **GIVEN** the carousel is changing slides
- **WHEN** the transition is observed
- **THEN** the outgoing slide SHALL fade out while the incoming slide
  SHALL be revealed (cross-fade flavor — NOT a horizontal slide)
- **AND** the fade SHALL complete in ~1.5s (source `smartSpeed: 1500`)

#### Scenario: No autoplay / no arrows / no dots

- **GIVEN** the carousel is displayed without user interaction
- **WHEN** several seconds elapse
- **THEN** the slide SHALL NOT change (source `autoplay: false` — the
  carousel is user-driven only)
- **AND** no Prev/Next arrow controls SHALL be rendered
- **AND** no dot indicators SHALL be rendered

### Requirement: Active thumbnail sync

The system SHALL keep the active thumbnail in sync with the displayed
slide whenever the slide changes, mapping slide index → thumbnail index
correctly (in React, track the active index directly — no Owl loop-clone
offset needed).

#### Scenario: Active thumbnail follows slide changes

- **GIVEN** the carousel is on the first slide (first thumbnail active)
- **WHEN** the second thumbnail is clicked (or the slide otherwise changes)
- **THEN** the second thumbnail SHALL become active and the first SHALL
  become inactive
- **AND** after looping from the last slide back to the first, the first
  thumbnail SHALL be active again

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
- **AND** the caption SHALL shrink to ~40px (source's own ≤992px rule)
- **AND** the thumbnails SHALL shrink to ~50px (source's own ≤768px rule)
  and remain tappable (≥ 44px effective hit area or clearly separated)

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the slides SHALL be 600px tall full-width cover images with
  rounded corners
- **AND** the thumbnail strip SHALL straddle the hero's bottom edge with
  ~80px circles (active: white border + scale 1.1)

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component
Dock"). The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Amalfi page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/amalfi` exists; package `@free-react-templates/amalfi`;
      `public/CNAME` = `amalfi.free.componentdock.com`; `homepage` =
      `https://amalfi.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (INCLUDING weight 200 — the
      caption weight); no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/amalfi` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (28px, Poppins, ~3rem bottom margin)
      "Carousel #10" or paraphrase; responsive (NO min-width: 992px)
- [ ] Three distinct slides; each full-width 600px-tall cover image with
      ROUNDED corners (`border-radius: 10px`, overflow hidden), the soft
      downward shadow (`0px 20px 35px -30px rgba(0,0,0,0.26)`), and the
      plain 30% BLACK overlay (NOT Carousel 09's bottom gradient);
      descriptive alt text; travel/resort-subject picsum seeds (screened
      per the replication skill)
- [ ] Captions: one per slide, centered over the photo, Poppins weight
      200, white, uppercase, ~60px desktop / ~40px mobile; the three
      travel-phrase captions (Discover New Places / Dream Destination /
      Travel Exploration or same-kind paraphrases)
- [ ] Thumbnail strip: exactly three CIRCULAR thumbnails (one per slide)
      absolutely positioned at the hero's bottom edge and straddling it
      (`bottom: 0; translateY(50%)` — half over the photo, half below);
      ~80px circles scaled 0.8 with soft shadow; active gets 4px white
      border + scale 1.1 + stronger shadow; ~50px on mobile; clicking a
      thumbnail cross-fades to its slide (~1.5s)
- [ ] Carousel: exactly 1 slide per view at <600px / 600–999px / ≥1000px;
      LOOP on; cross-fade transition (~1.5s); NO autoplay (user-driven
      only); NO arrows; NO dots; active-thumbnail sync follows slide
      changes (loop-safe)
- [ ] Footer: minimal footer linking "Component Dock" →
      https://www.componentdock.com/
