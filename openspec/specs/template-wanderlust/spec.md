# Template: Wanderlust (Bootstrap Carousel / Full-Screen Travel Hero Slider)

## Purpose

Wanderlust is a single-section FULL-SCREEN auto-playing hero carousel
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Carousel 01" website template design
(source: https://colorlib.com/wp/template/carousel-01/), built under a
DIFFERENT name (Wanderlust — "a strong desire to travel", fitting a
full-screen travel hero that cycles through destinations) per the monorepo
naming mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

New name **wanderlust** is a single lowercase kebab-case word, differs from
the ColorLib source slug (`carousel-01`), and collides with nothing in
`apps/`, `openspec/specs/`, or `docs/templates/` (checked 2026-08-15). It is
the FIRST of the "Bootstrap Carousels (20)" series renames (future preps:
carousel-02 → faraway, carousel-03 → fjord, ... — theme: travel /
destinations).

Wanderlust lives in `apps/wanderlust` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 01" — the FIRST of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 01"). A full-screen Owl Carousel
  travel hero: `.home-slider.owl-carousel.js-fullheight` holding THREE
  `.slider-item.js-fullheight` slides, each a full-viewport background photo
  (Norway, Japan, Singapore) with a black overlay and centered
  kicker + destination headline. No navbar, no content sections, no footer —
  the slider IS the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-01/`
  (reachable; DOM fetched — 9.1KB HTML + `css/owl.carousel.min.css` +
  `css/owl.theme.default.min.css` + `css/style.css` (224.7KB, includes full
  Bootstrap 4 + template styles) + ionicons 4.5.6 icon font + `js/main.js`).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/carousel-01/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  "Bootstrap Calendars" series preps). The carousel is driven by
  `js/main.js`: `$('.home-slider').owlCarousel({ loop:true, autoplay:true,
margin:0, animateOut:'fadeOut', animateIn:'fadeIn', nav:true, dots:true,
autoplayHoverPause:false, items:1, navText:["<span
class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"] })`
  and `fullHeight()` sets `.js-fullheight` elements' height to
  `$(window).height()` (recomputed on resize) — the slider always fills the
  viewport.
- **Screenshot:** `carousel-01.jpg` (1200×972 AVIF, viewed in browser) — a
  Lofoten/Norway fjord photo: dark jagged mountains rising from calm water,
  red rorbu fishing cabins at the water's edge, overcast sky with soft
  purple/pink sunrise/sunset hues. Centered in the frame: small uppercase
  white "BEST PLACE TO TRAVEL" (tracked-out) above a MASSIVE bold white
  "NORWAY" headline. Three carousel dots at bottom-center (middle one solid
  white = active, others faint). No arrows visible (hover-reveal only).
  Aesthetic: modern, minimalist, immersive full-bleed travel hero. No other
  page furniture.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1 +
  Owl Carousel 2.3.4 + ionicons 4.5.6 + Google Poppins (300/400/500/700 via
  cf-fonts). The recreation must NOT copy any of this — build a pure-React
  crossfade slider with lucide-react icons (ChevronLeft / ChevronRight) and
  picsum placeholder photos (the source's travel photos are NOT copied).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.home-slider.owl-carousel.js-fullheight` — full-viewport slider
   (`height: 100vh` via the js-fullheight script; base CSS fallback 650px).
   Holds exactly THREE `.slider-item.js-fullheight` slides, in order:
   1. Norway — `background-image:url(images/slider-1.jpg)`
   2. Japan — `background-image:url(images/slider-2.jpg)`
   3. Singapore — `background-image:url(images/slider-2.jpg)` (source
      reuses the same image for slides 2+3; the recreation SHOULD use a
      distinct placeholder per slide — Norway/Japan/Singapore are all
      different places).
      Each slide:
   - `.overlay` — absolute inset-0, `background: #000`, `opacity: .3`.
   - `.container > .row.no-gutters.slider-text.js-fullheight
align-items-center justify-content-center > .col-md-12.ftco-animate >
.text.w-100.text-center` — centered column:
     - `<h2>Best Place to Travel</h2>` — the tracked-out uppercase kicker.
     - `<h1 class="mb-3">Norway</h1>` (then Japan, Singapore) — the
       destination headline.
   - Carousel furniture (from Owl + style.css):
     - `.owl-nav` — prev/next arrow buttons, absolutely positioned
       `top: 50%` at `left: 0` / `right: 0`, `opacity: 0` (hidden) until
       `.home-slider:hover` → `opacity: 1` and the arrows slide outward
       (`margin-left/right: 50px` on hover). Glyphs: ionicons chevrons,
       30px, `rgba(255,255,255,0.5)` → `#fff` on hover/focus.
     - `.owl-dots` — three dot indicators, absolutely positioned
       `bottom: 40px` (media query → `bottom: 5px`), centered; each dot a
       10px circle (`border-radius: 50%`, `margin: 5px`),
       `background: rgba(255,255,255,0.4)`; ACTIVE dot `background: #fff`.

## Design tokens (from preview stylesheet `css/style.css`)

- **Brand / kicker accent:** `#f5e4c3` (warm cream/gold) — the "Best Place
  to Travel" kicker color (`h2`; the stylesheet sets `color: white` then
  overrides to `#f5e4c3`). Put in `@theme` and use via Tailwind classes.
- **Headline:** `h1` — `font-size: 9vw` (desktop; media query
  `max-width: 991.98px` → `50px`), `font-weight: 800`, `text-transform:
uppercase`, `color: #fff`, `line-height: 1`, margin-bottom ~1rem
  (`.mb-3`).
- **Kicker:** `h2` — `font-size: 16px`, `text-transform: uppercase`,
  `letter-spacing: 4px`, `font-family: "Poppins", Arial, sans-serif`,
  `font-weight: 700`, `color: #f5e4c3`, `display: inline-block`.
- **Text block:** `.slider-text .text` — `color: rgba(255,255,255,0.9)`,
  `text-align: center`, full width.
- **Overlay:** `.overlay` — `position: absolute; inset: 0; background:
#000; opacity: .3` (black at 30% — Tailwind `bg-black/30`).
- **Slide images:** `.slider-item` — `background-size: cover`,
  `background-repeat: no-repeat`, `background-position: center center`.
- **Slider height:** `.home-slider` / `.slider-item` base `height: 650px`,
  but the js-fullheight script forces `height: 100vh` (recomputed on
  resize) — the effective design is FULL-SCREEN (Tailwind `h-screen`).
- **Fonts:** `"Poppins", Arial, sans-serif` for headings and general text
  (Google Poppins 300/400/500/700 via cf-fonts). Load Poppins 300, 400,
  500, 700 via Google Fonts `<link>` in index.html (no font files copied).
- **Arrows (`.owl-nav`):** absolutely positioned `top: 50%`,
  `transform: translateY(-50%)`; prev `left: 0`, next `right: 0`; hidden
  (`opacity: 0`) by default, shown on `.home-slider:hover` (`opacity: 1`)
  and nudged outward (`margin-left: 50px` / `margin-right: 50px`); glyphs
  30px, `rgba(255,255,255,0.5)` resting, `#fff` on hover/focus. Recreation
  uses lucide ChevronLeft/ChevronRight.
- **Dots (`.owl-dots`):** absolute `left: 0; right: 0; bottom: 40px`
  (`bottom: 5px` ≤ 991.98px), `text-align: center`; dots 10px circles,
  `margin: 5px`, `border-radius: 50%`, `background: rgba(255,255,255,0.4)`;
  ACTIVE dot `background: #fff`.
- **Transitions:** slides cross-fade (`animateIn: 'fadeIn'`,
  `animateOut: 'fadeOut'`); `loop: true`, `autoplay: true`,
  `autoplayHoverPause: false`, `items: 1` at all breakpoints (0/600/1000).
- **Icons/images:** the source uses the ionicons font for the arrow glyphs
  and local `images/slider-*.jpg` photos. Recreation uses lucide-react
  ChevronLeft/ChevronRight and picsum placeholders
  (`https://picsum.photos/seed/wanderlust-<n>/1920/1080`), one distinct
  seed per destination slide.

## Requirements

### Requirement: Page composition

The system SHALL render a single full-screen travel hero slider on the
page: the slider SHALL fill the viewport height and width, with each slide
a full-bleed background photo, a black overlay, and centered text.

#### Scenario: Full-screen slider

- **GIVEN** the Wanderlust page is rendered
- **WHEN** the page loads
- **THEN** a slider SHALL be present occupying the full viewport height
  (100vh) and full width
- **AND** each slide SHALL show a full-bleed background image
  (`background-size: cover`, centered)
- **AND** a black overlay at 30% opacity SHALL cover each slide
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)

### Requirement: Slide content

The system SHALL render exactly three slides, each with a small uppercase
kicker ("Best Place to Travel" or an equivalent paraphrase) above a large
uppercase destination headline; content SHALL be centered horizontally and
vertically.

#### Scenario: Three destination slides

- **GIVEN** the slider is rendered
- **WHEN** the slides are inspected
- **THEN** three slides SHALL exist in order: Norway, Japan, Singapore
  (paraphrased destination names allowed, same kind of content)
- **AND** each slide SHALL show the kicker above the destination headline
- **AND** the kicker SHALL be 16px, uppercase, letter-spacing 4px, Poppins
  weight 700, color `#f5e4c3`
- **AND** the headline SHALL be uppercase, weight 800, color `#fff`,
  `line-height: 1`, `font-size: 9vw` on desktop and 50px below 992px

#### Scenario: Centered text

- **GIVEN** any slide is displayed
- **WHEN** its text block is inspected
- **THEN** the kicker and headline SHALL be centered both horizontally and
  vertically within the viewport

### Requirement: Autoplay and loop

The system SHALL advance slides automatically and wrap around from the last
slide back to the first.

#### Scenario: Auto-advance

- **GIVEN** the slider is displayed (no user interaction)
- **WHEN** an autoplay interval elapses
- **THEN** the displayed slide SHALL advance to the next one

#### Scenario: Loop

- **GIVEN** the slider is on the last slide (Singapore)
- **WHEN** the next transition fires
- **THEN** the slider SHALL wrap back to the first slide (Norway)

### Requirement: Fade transition

The system SHALL cross-fade between slides (paraphrase of the source's
`animateIn: 'fadeIn'` / `animateOut: 'fadeOut'`).

#### Scenario: Cross-fade

- **GIVEN** the slider is transitioning between two slides
- **WHEN** the transition is observed
- **THEN** the outgoing slide SHALL fade out while the incoming slide fades
  in (no horizontal slide motion)

### Requirement: Dot indicators

The system SHALL render three dot indicators at the bottom center of the
slider; the active slide's dot SHALL be solid white, the others 40% white;
activating a dot SHALL jump to that slide.

#### Scenario: Dots render and track

- **GIVEN** the slider is displayed
- **WHEN** the dots are inspected
- **THEN** three dots SHALL sit centered near the bottom of the slider
- **AND** the dot for the current slide SHALL be solid white
  (`background: #fff`)
- **AND** the other dots SHALL be `rgba(255,255,255,0.4)`
- **AND** all dots SHALL be 10px circles with 5px gaps

#### Scenario: Click a dot

- **GIVEN** the slider is on the Norway slide
- **WHEN** the third dot is activated
- **THEN** the Singapore slide SHALL display
- **AND** the third dot SHALL become the active (solid white) dot

### Requirement: Arrow navigation

The system SHALL provide prev/next arrow buttons vertically centered at the
left/right edges of the slider; they SHALL be hidden until the slider is
hovered, then SHALL appear (and nudge outward); activating them SHALL move
to the previous/next slide.

#### Scenario: Arrows hidden until hover

- **GIVEN** the slider is displayed and the pointer is not over it
- **WHEN** the arrow buttons are inspected
- **THEN** they SHALL be invisible (opacity 0)
- **WHEN** the pointer hovers the slider
- **THEN** the arrows SHALL become visible (opacity 1) and nudge outward
  from the edges
- **AND** each arrow SHALL carry an accessible label (aria-label
  "Previous slide" / "Next slide")

#### Scenario: Navigate with arrows

- **GIVEN** the slider is on the Norway slide
- **WHEN** the next arrow is activated
- **THEN** the Japan slide SHALL display
- **WHEN** the previous arrow is activated
- **THEN** the Norway slide SHALL display again

### Requirement: Responsive behavior

The system SHALL keep the slider full-screen and usable from mobile to
desktop.

#### Scenario: Mobile

- **GIVEN** a viewport < 992px
- **WHEN** the page is rendered
- **THEN** the headline SHALL be 50px (not 9vw)
- **AND** the dots SHALL sit 5px from the bottom
- **AND** the slider SHALL still fill the viewport height with no
  horizontal overflow
- **AND** the dots SHALL remain tappable (≥ 44px effective hit area or
  clearly separated)

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 992px
- **WHEN** the page is rendered
- **THEN** the headline SHALL scale with the viewport (`9vw`)
- **AND** the dots SHALL sit 40px from the bottom

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Wanderlust page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/wanderlust` exists; package `@free-react-templates/wanderlust`;
      `public/CNAME` = `wanderlust.free.componentdock.com`; `homepage` =
      `https://wanderlust.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/wanderlust` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Slider fills the viewport (`h-screen`, full width); three slides in
      order Norway → Japan → Singapore (paraphrased destination names OK),
      each with a distinct full-bleed placeholder image
      (`picsum.photos/seed/wanderlust-<n>/1920/1080`)
- [ ] Each slide: 30% black overlay (`bg-black/30`); centered kicker
      (16px, uppercase, `tracking-[4px]`, Poppins 700, `#f5e4c3`) above
      uppercase headline (weight 800, `#fff`, `leading-none`, 9vw desktop /
      50px < 992px)
- [ ] Autoplay advances slides; loop wraps last → first
- [ ] Cross-fade transition between slides (opacity, no horizontal motion)
- [ ] Dots: 3, bottom-center (`bottom-10`, 5px ≤ 992px), 10px circles,
      `rgba(255,255,255,0.4)`; active = `#fff`; clicking a dot jumps to
      that slide
- [ ] Arrows: vertically centered at edges, hidden (`opacity-0`) until
      slider hover → visible + nudge outward; lucide ChevronLeft/
      ChevronRight; aria-labels; clicking navigates prev/next
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic buttons, aria-labels on arrow + dot
      controls, focus-visible rings, `aria-current`/`aria-selected` on the
      active dot; tests use `vi.useFakeTimers()` for deterministic autoplay
      assertions and cover: initial slide, next/prev wrap-around (first ↔
      last), dot jump, arrow navigation, autoplay tick, active-dot
      tracking, hover-reveal of arrows, mobile/desktop token differences
- [ ] `npm run verify:app -- wanderlust` (or `scripts/verify-app.sh
wanderlust`) passes: typecheck + lint + knip + fallow + 100% coverage +
      build
- [ ] Deployed to https://wanderlust.free.componentdock.com (200, correct
      content)
