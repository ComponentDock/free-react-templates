# Template: Santorini (Full-Width Image Carousel with Arrows, Dots + Autoplay)

## Purpose

Santorini is a single-section full-width image carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 11" website template design
(source: https://colorlib.com/wp/template/carousel-11/), built under a
DIFFERENT name (Santorini — the Greek island in the Aegean, continuing the
travel/destinations naming theme of the "Bootstrap Carousels (20)" series
renames) per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

New name **santorini** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-11`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main; the only "santorini" hits in the repo are picsum seed strings in
the unrelated `apps/wander` app's data, not a name). It is the ELEVENTH of the
"Bootstrap Carousels (20)" series renames (lineage: carousel-01 → wanderlust,
carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido, carousel-05 →
capri, carousel-06 → cannes, carousel-07 → positano, carousel-08 → sorrento,
carousel-09 → ravello, carousel-10 → amalfi, carousel-11 → santorini — theme:
travel / destinations; the name is thematic, the content is an editorial
photography slider).

Santorini lives in `apps/santorini` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 11" — the ELEVENTH of the 20 "Bootstrap
  Carousels" demos. A **FULL-WIDTH IMAGE carousel with WHITE NAV ARROWS, WHITE
  DOTS and AUTOPLAY** — the classic Owl Carousel "gallery" pattern. The page
  is ONE `.content` wrapper (`padding: 7rem 0`) on a WHITE page with a
  centered near-black heading (the demo text is a copy-paste artifact —
  see below) above `.owl-carousel.owl-1` holding THREE plain `<div><img>`
  slides (`images/hero_1.jpg`, `hero_2.jpg`, `hero_3.jpg` — each 1900×1150
  natural aspect ratio, `img-fluid` = `max-width: 100%; height: auto`, NO
  fixed height, NO overlay, NO captions, NO rounded corners). **Differs from
  Carousel 10 (Amalfi): the slides are IMAGE-ONLY (Amalfi had centered caption
  text + 30% black overlay + 600px-tall cover + radius-10 rounded corners),
  navigation is ARROWS + DOTS (Amalfi had a circular thumbnail strip only),
  AUTOPLAY IS ON with hover-pause (Amalfi: off), and the transition is a
  1,000ms HORIZONTAL SLIDE (Amalfi: 1,500ms cross-fade).** No navbar, no hero
  band, no footer — the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-11/`
  (HTTP 200, 16,338 bytes DOM; fetched + rendered 2026-08-15). NOTE: the
  standard preview path `https://preview.colorlib.com/theme/carousel-11/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–10 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-11/css/`. Stylesheets: `css/owl.carousel.min.css`
  (3,351 bytes), `css/bootstrap.min.css` (Bootstrap 4.3.1, separate file),
  `css/style.css` (2,101 bytes — the template's custom rules, see tokens
  below), `fonts/icomoon/style.css` (the icon font for the arrow glyphs) +
  Google Roboto. **`css/owl.theme.default.min.css` 404s — NOT present** (the
  demo relies on owl.carousel.min.css's own button reset + the custom
  `.owl-1` rules in style.css for arrow/dot appearance).
- **Carousel driven by `js/main.js` (10 lines):**
  `$('.owl-1').owlCarousel({ loop:true, margin:0, nav:true, items: 1,
smartSpeed: 1000, autoplay: true, autoplayHoverPause: true, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at ALL
  breakpoints (1/1/1; NO responsive block → items: 1 everywhere)**, **LOOP
  ON**, **NAV ARROWS ON** (navText are the icomoon keyboard-arrow spans),
  **AUTOPLAY ON** (Owl default ~5s timeout) **with AUTOPLAY-HOVER-PAUSE**,
  **DOTS ON** (Owl default `dots: true` — not disabled here, unlike Carousel
  10), **1,000ms `smartSpeed`** and NO `animateOut` → the transition is Owl's
  default **HORIZONTAL SLIDE** (confirmed live: `.owl-stage` transform is a
  translateX matrix). Recreate: 1-per-view, loop, prev/next arrows, dots,
  autoplay-with-hover-pause, ~1s horizontal slide.
- **Verified live in the browser (2026-08-15):** heading "Carousel #1"
  rendered; THREE slides (hero_1/2/3.jpg); `.owl-prev`/`.owl-next` `<button>`
  elements render with **NO border and transparent background** (see fidelity
  note on the dead debug borders), white 40px icons, positioned
  `left/right: 20px`, vertically centered (nav wrapper `top: 50%`, buttons
  `top: 50%`, `z-index: 92`); THREE `.owl-dot` buttons (first active at load),
  each a 10px circle `rgba(255,255,255,0.5)`, active `#fff`; autoplay
  advanced the slide within ~6s (default 5s timeout) and the active dot
  followed. The `.owl-stage` used `matrix(1,0,0,1,-2220,0)` → horizontal
  translateX sliding.
- **Screenshot:** `carousel-11.jpg` (AVIF, 1200×972, viewed in browser) —
  minimalist editorial/lifestyle layout on a WHITE page. Top: centered dark
  sans "Carousel #1" heading. Below: ONE large photo slide (the single-slide
  desktop view): a hand in a white knit sweater holding a paperback book
  titled "GENESIS" with a landscape cover (pink/orange-to-blue gradient sky,
  mountains) against a warm textured beige/tan wall, a blurry dried-plant
  arrangement on the right. Over the image: faint semi-transparent white
  chevron arrows at the left and right edges (vertically centered), and THREE
  white dots at the bottom center (middle dot more prominent — the screenshot
  caught slide 2 active). Aesthetic: clean, modern, whitespace-driven,
  photography-first editorial style; white page, near-black heading, no
  colored accent in use.
- **Slide images (from the preview, NOT copied — picsum placeholders only):**
  `images/hero_1.jpg` (1900×1150), `images/hero_2.jpg` (1900×1150),
  `images/hero_3.jpg` (1900×1150) — editorial/lifestyle photography (the
  GENESIS-book hand shot is hero_2, the slide the screenshot shows). All are
  ~1.65:1 landscape; the recreation should screen picsum seeds for
  editorial/lifestyle/object-photography subjects (see the
  colorlib-template-replication skill's seed-screening method) and render
  them at natural aspect ratio (NOT cover-cropped — the source uses plain
  `img-fluid` images, so height follows width).
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (`css/bootstrap.min.css`) + Owl Carousel 2.3.4 + icomoon icon font
  (keyboard-arrow glyphs) + Google Roboto. The recreation must NOT copy any
  of this — build a pure-React carousel (arrows/dots from lucide-react
  ChevronLeft/ChevronRight, placeholder picsum photos).
- **Fidelity note (heading copy-paste artifact):** the demo heading and
  `<title>` literally read "Carousel #1" — an untouched copy-paste from
  Carousel 01's demo (this is demo #11). The recreation SHALL NOT reproduce
  the wrong number: use "Carousel #11" (corrected) or an equivalent
  same-kind paraphrase ("Featured Gallery", "Editorial Carousel", etc.).
- **Fidelity note (dead debug borders — SKIP):** style.css declares
  `border: 1px solid red` on `.owl-1 .owl-nav .owl-next/.owl-prev` and
  `border: 4px solid blue` on `.owl-next` — obvious leftover debug styles.
  In the live render they do NOT appear: owl.carousel.min.css's reset
  `.owl-carousel .owl-nav button.owl-prev, .owl-carousel .owl-nav
button.owl-next, .owl-carousel button.owl-dot { background: 0 0; color:
inherit; border: none; padding: 0 !important; font: inherit }` has higher
  specificity (0,3,1 vs 0,3,0) and wins (verified via getComputedStyle:
  `border: 0px none`). Do NOT render any borders on the arrows.
- **Fidelity note (icons):** the arrow glyphs are icomoon-font
  `icon-keyboard_arrow_left/right` spans (color #fff, font-size 40px). In
  React use lucide-react `ChevronLeft`/`ChevronRight` (size ~40) colored
  white.
- **Fidelity note (responsive):** this demo's small style.css has NO
  `min-width: 992px` force (unlike Carousel 08/09/10) — but the recreation
  MUST still be responsive (single column, images scale with the container,
  arrows/dots stay tappable ≥ 44px hit area on mobile) as a monorepo hard
  requirement.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the WHITE page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px;
     the carousel is NOT full-bleed — it's constrained to the container).
     - `h2.my-5.text-center` — the heading: "Carousel #1" in the demo
       (copy-paste artifact — see note; use "Carousel #11" or paraphrase),
       20px, Roboto, near-black, centered, `margin: 3rem 0` (`.my-5`).
     - `.owl-carousel.owl-1` — the carousel: THREE slides, each a plain
       `<div><img src="images/hero-N.jpg" alt="Image" class="img-fluid"></div>`
       — full container width, natural aspect ratio (`max-width: 100%;
height: auto`), NO fixed height, NO overlay, NO caption text.
   - Carousel furniture (rendered — unlike Carousel 10):
     - `.owl-nav` — `width: 100%; position: absolute; top: 50%` over the
       carousel; `.owl-prev` at `left: 20px`, `.owl-next` at `right: 20px`,
       both `position: absolute; top: 50%; z-index: 92`, transparent
       background, NO border, white 40px chevron icon inside.
     - `.owl-dots` — `position: absolute; bottom: 40px; left: 50%;
translateX(-50%)`; three `.owl-dot` buttons, each `> span` a 10px
       circle `rgba(255,255,255,0.5)`, margin 4px; the active dot's span is
       `#fff`.

## Design tokens (from preview stylesheet `css/style.css` + Bootstrap base)

- **Page background:** WHITE (`#fff` — Bootstrap body default; no gray page
  tint).
- **Section (`.content`):** `padding: 7rem 0` (Tailwind `py-[7em]`).
- **Heading (`h2`):** `font-size: 20px` (custom override of Bootstrap's
  32px), Roboto, near-black (inherits Bootstrap `#212529`), centered,
  `margin: 3rem 0` (`.my-5`). Bootstrap h2 base: `font-weight: 500;
line-height: 1.2; margin-bottom: .5rem` (overridden by .my-5's 3rem).
- **Body text:** Roboto (custom body rule — NOT Poppins, unlike most ftco
  templates), Bootstrap defaults: 16px, `line-height: 1.5`, `font-weight:
400`, color `#212529`. Paragraphs (`p`): `color: #b3b3b3; font-weight:
300` (no paragraphs in this demo — informational).
- **Font family:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — body AND
  headings (the custom rule applies the Roboto stack to both; Google Roboto
  loaded by the source head). Load Roboto 300/400/500 via Google Fonts
  `<link>` in index.html.
- **Links (`a`):** `transition: .3s all ease; text-decoration: none` — no
  color override in this demo (Bootstrap link blue `#007bff` for any links;
  the only link in the recreation will be the mandated footer's).
- **Nav arrows (`.owl-1 .owl-nav`):** wrapper `width: 100%; position:
absolute; top: 50%`. Buttons `position: absolute; top: 50%; z-index: 92`,
  `left/right: 20px`, transparent background, NO border (owl reset wins over
  the red/blue debug styles — see fidelity note), icon span `color: #fff`,
  `font-size: 40px !important` (chevron glyphs). Focus/active: `outline:
none` (the recreation should keep focus-visible rings per a11y, see
  conventions).
- **Dots (`.owl-1 .owl-dots`):** `position: absolute; bottom: 40px; left:
50%; transform: translateX(-50%)`. `.owl-dot` `background: none; display:
inline-block`; `> span`: `width: 10px; height: 10px; border-radius: 50%;
background: rgba(255,255,255,0.5); margin: 4px`. **Active dot `> span`:
  `background: white`.**
- **Accent color:** NONE in use — no brand-colored element renders in this
  demo (the `#ff5959` link red of the wider family is not in this small
  stylesheet). The visible page is monochrome (white page, near-black
  heading, white arrows/dots over photos).
- **Images:** local `images/hero-1..3.jpg` (1900×1150 each, ~1.65:1
  landscape). Recreation uses picsum placeholder editorial photos
  `https://picsum.photos/seed/santorini-<n>/1900/1150` (or similar 3:2-ish
  landscape); seed IDs MUST be screened for editorial/lifestyle subjects —
  see the colorlib-template-replication skill's seed-screening method
  (screen landscape ids 1015/1016/1018/1036/1039 and similar).
- **Icons:** source uses the icomoon font (keyboard-arrow glyphs). Recreation
  uses lucide-react `ChevronLeft` / `ChevronRight` (~40px, white).

## Requirements

### Requirement: Page composition

The system SHALL render a single section on a white page containing a
centered section heading and a full-width image carousel constrained to a
centered container; the section SHALL have vertical padding of 7em.

#### Scenario: Single section layout

- **GIVEN** the Santorini page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be white
- **AND** the section SHALL contain a centered heading "Carousel #11" (or an
  equivalent same-kind paraphrase — the source demo literally says "Carousel
  #1", a copy-paste artifact from demo 01; do NOT reproduce the wrong number)
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html, weights 300/400/500)
- **AND** the carousel SHALL be constrained to a centered container
  (max-width ~1140px), NOT full-bleed
- **AND** the page SHALL be responsive (no horizontal overflow on mobile)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be ~20px, Roboto, near-black, centered
- **AND** the heading SHALL have a ~3rem top and bottom margin

### Requirement: Full-width image slides

The system SHALL render exactly three slides, each a plain full-container-
width image at natural aspect ratio (no fixed height, no overlay, no caption
text, no rounded corners) with descriptive alt text.

#### Scenario: Three slides

- **GIVEN** the carousel is rendered
- **WHEN** the slide items are inspected
- **THEN** exactly three distinct slides SHALL exist
- **AND** each slide SHALL be a plain image at natural aspect ratio
  (`max-width: 100%; height: auto` — NOT a fixed-height cover crop, NOT a
  background-image slide)
- **AND** each slide image SHALL have a descriptive `alt` text (source uses
  generic "Image"; the recreation SHALL use descriptive alt per a11y
  conventions, e.g. "Hand holding a book with a mountain landscape cover")

#### Scenario: No slide overlays or captions

- **GIVEN** a slide is displayed
- **WHEN** the slide is inspected
- **THEN** the slide SHALL have NO overlay (no darkening layer, no gradient
  vignette — unlike Carousel 10)
- **AND** the slide SHALL have NO caption text overlaid (unlike Carousel 10)

### Requirement: Carousel behavior

The system SHALL display exactly one slide per view at every breakpoint
(1/1/1); it SHALL loop; slide changes SHALL slide horizontally in ~1 second;
autoplay SHALL advance slides on an ~5s interval and pause while hovered;
prev/next arrows and dots SHALL be rendered (unlike Carousel 10, both are
enabled here).

#### Scenario: One slide per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px, 600–999px, or ≥ 1000px
- **THEN** exactly one slide SHALL be visible at a time at every viewport
  size (source has NO responsive block → items: 1 everywhere)

#### Scenario: Loop

- **GIVEN** the carousel is on the last slide
- **WHEN** the next arrow is clicked
- **THEN** the carousel SHALL wrap around to the first slide (loop on)

#### Scenario: Slide transition

- **GIVEN** the carousel is changing slides
- **WHEN** the transition is observed
- **THEN** the slides SHALL slide HORIZONTALLY (translateX — Owl's default;
  NOT a cross-fade, unlike Carousel 10)
- **AND** the slide SHALL complete in ~1s (source `smartSpeed: 1000`)

#### Scenario: Autoplay with hover pause

- **GIVEN** the carousel is displayed without user interaction
- **WHEN** ~5 seconds elapse
- **THEN** the carousel SHALL advance to the next slide automatically
  (source `autoplay: true`, Owl default ~5s timeout)
- **AND** when the pointer hovers over the carousel, autoplay SHALL pause
  (source `autoplayHoverPause: true`)
- **AND** autoplay SHALL resume when the pointer leaves

### Requirement: Arrow navigation

The system SHALL render prev/next arrow buttons at the left/right edges,
vertically centered over the carousel, transparent with NO border, each
containing a white chevron icon (~40px); clicking an arrow SHALL move one
slide (with wrap-around).

#### Scenario: Arrows render

- **GIVEN** the carousel is rendered
- **WHEN** the arrows are inspected
- **THEN** a prev arrow SHALL be at the left edge (~20px inset) and a next
  arrow SHALL be at the right edge (~20px inset)
- **AND** both SHALL be vertically centered over the carousel
- **AND** both SHALL have a transparent background and NO border (the
  source's red/blue debug borders are overridden in the live render — do
  NOT reproduce them)
- **AND** each SHALL contain a white chevron icon sized ~40px (lucide
  ChevronLeft / ChevronRight)
- **AND** each arrow SHALL be a real `<button>` with an `aria-label`
  ("Previous slide" / "Next slide")

#### Scenario: Click arrows

- **GIVEN** the carousel is on the first slide
- **WHEN** the next arrow is clicked
- **THEN** the second slide SHALL display with a ~1s horizontal slide
- **AND** the active dot SHALL move to the second dot

### Requirement: Dot navigation

The system SHALL render one dot per slide centered near the bottom of the
carousel (~40px from the bottom); dots SHALL be ~10px circles,
semi-transparent white when inactive and solid white when active; clicking a
dot SHALL jump to its slide.

#### Scenario: Dots render

- **GIVEN** the carousel is rendered
- **WHEN** the dots are inspected
- **THEN** exactly three dots SHALL be rendered, centered horizontally near
  the bottom of the carousel (~40px inset)
- **AND** each dot SHALL be a ~10px circle with `rgba(255,255,255,0.5)`
  background
- **AND** the dot for the current slide SHALL be solid white
- **AND** each dot SHALL be a real `<button>` with an `aria-label` (e.g.
  "Go to slide 2")

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first slide
- **WHEN** the third dot is clicked
- **THEN** the third slide SHALL display
- **AND** the third dot SHALL become active (solid white) and the first
  SHALL become inactive

### Requirement: Active dot sync

The system SHALL keep the active dot in sync with the displayed slide
whenever the slide changes (arrows, dots, or autoplay), including
wrap-around from the last slide to the first.

#### Scenario: Active dot follows slide changes

- **GIVEN** the carousel is on the second slide (second dot active)
- **WHEN** the slide changes to the third (via arrow, dot click, or
  autoplay)
- **THEN** the third dot SHALL become active and the second SHALL become
  inactive
- **AND** after looping from the last slide back to the first, the first dot
  SHALL be active again

### Requirement: Responsive behavior

The system SHALL keep the layout usable from mobile to desktop (single
column; images scale with the container; arrows and dots remain tappable).

#### Scenario: Mobile

- **GIVEN** a viewport < 768px
- **WHEN** the page is rendered
- **THEN** the carousel SHALL be full container width with images scaling
  naturally (height follows width; no fixed 1900px source height)
- **AND** no horizontal overflow SHALL occur
- **AND** the arrows and dots SHALL remain tappable (≥ 44px effective hit
  area or clearly separated)

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the carousel SHALL be constrained to the centered container
  (~1140px max) with one slide per view

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component
Dock"). The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Santorini page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/santorini` exists; package `@free-react-templates/santorini`;
      `public/CNAME` = `santorini.free.componentdock.com`; `homepage` =
      `https://santorini.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300/400/500); no
      font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/santorini` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (~20px, Roboto, ~3rem top/bottom margins) —
      "Carousel #11" or same-kind paraphrase (NOT the demo's "Carousel #1"
      copy-paste artifact); carousel constrained to a centered ~1140px
      container; responsive (no overflow on mobile)
- [ ] Three distinct slides; each a plain full-width image at natural
      aspect ratio (NO fixed height, NO overlay, NO caption, NO rounded
      corners); descriptive alt text; editorial/lifestyle-subject picsum
      seeds (screened per the replication skill)
- [ ] Carousel: exactly 1 slide per view at <600px / 600–999px / ≥1000px;
      LOOP on; ~1s HORIZONTAL slide transition (NOT cross-fade); autoplay
      ~5s with hover-pause; wrap-around works
- [ ] Arrows: prev at left ~20px / next at right ~20px, vertically
      centered, transparent bg, NO border, white ~40px chevron icons
      (lucide), real buttons with aria-labels; click moves one slide and
      syncs the active dot
- [ ] Dots: exactly three, centered ~40px from the bottom, ~10px circles,
      inactive `rgba(255,255,255,0.5)` / active solid white; click jumps to
      its slide; active dot follows arrows/autoplay/wrap-around
- [ ] Mobile: images scale naturally, no horizontal overflow, arrows/dots
      tappable (≥44px hit area)
- [ ] Footer: minimal footer linking "Component Dock" →
      https://www.componentdock.com/
