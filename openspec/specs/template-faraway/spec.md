# Template: Faraway (Portfolio Carousel / Featured Works Slider)

## Purpose

Faraway is a single-section featured-works carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 02" website template design
(source: https://colorlib.com/wp/template/carousel-02/), built under a
DIFFERENT name (Faraway — "a distant or remote place", fitting the
travel/destinations naming theme of the "Bootstrap Carousels (20)" series
renames) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **faraway** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-02`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the SECOND of the "Bootstrap Carousels (20)" series
renames (lineage established in the Wanderlust prep: carousel-01 →
wanderlust, carousel-02 → faraway, carousel-03 → fjord, ... — theme: travel /
destinations; the name is thematic, the content is a portfolio slider).

Faraway lives in `apps/faraway` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 02" — the SECOND of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 02"). A white-background single
  section showcasing a responsive featured-works carousel: `.ftco-section`
  with a centered `.heading-section` ("Carousel #02") above a
  `.featured-carousel.owl-carousel` holding SIX `.work` cards (Work 01–06,
  all categorized "Web Design"). Each card = rounded photo (`images/work-N.jpg`,
  hover reveals a white circular search icon) + title link + uppercase
  category label. No navbar, no hero, no footer — the carousel section IS
  the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-02/`
  (reachable; DOM fetched — 10.9KB HTML + `css/owl.carousel.min.css` +
  `css/owl.theme.default.min.css` + `css/style.css` (222.1KB, includes full
  Bootstrap 4 + template styles) + ionicons 4.5.6 icon font + `js/main.js`).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/carousel-02/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  "Bootstrap Calendars" and Carousel 01 preps). The carousel is driven by
  `js/main.js`: `$('.featured-carousel').owlCarousel({ loop:true,
autoplay:true, margin:30, animateOut:'fadeOut', animateIn:'fadeIn',
nav:true, dots:true, autoplayHoverPause:false, items:1,
navText:["<span class='ion-ios-arrow-back'></span>","<span
class='ion-ios-arrow-forward'></span>"], responsive:{0:{items:1},
600:{items:2}, 1000:{items:3}} })` — 1/2/3 items per view at 0/600/1000px,
  fading between pages, auto-playing, looping.
- **Screenshot:** `carousel-02.jpg` (1200×972 AVIF, viewed in browser) —
  stark white page with centered dark "Carousel #02" heading; below it a row
  of THREE portfolio cards: (1) black-and-white triangular architecture
  facade photo, (2) vibrant orange modern chair on grey studio background,
  (3) dark-haired woman fashion portrait. Each card: rectangular image with
  slightly rounded corners, below it a bold dark title ("Work 01/02/03") and
  a small light-grey uppercase "WEB DESIGN" label. Two pagination dots below
  the center card (left dot BLUE = active, right light grey = inactive). No
  arrows visible in the static shot (hover-reveal only, per CSS). Aesthetic:
  clean, minimalist, light — a classic agency/portfolio works slider.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1 + Owl
  Carousel 2.3.4 + ionicons 4.5.6 + Google Poppins (via cf-fonts). The
  recreation must NOT copy any of this — build a pure-React multi-item
  carousel with lucide-react icons (ChevronLeft / ChevronRight for arrows,
  Search for the hover icon) and picsum placeholder photos (the source's
  work photos are NOT copied).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` (padding: 7em 0) > `.container` > `.row`:
   1. `.col-md-12.text-center` — `<h2 class="heading-section mb-5 pb-md-4">`
      "Carousel #02" (28px Poppins heading, dark).
   2. `.col-md-12` — `.featured-carousel.owl-carousel` holding SIX `.item`
      divs, each a `.work` card:
      - `.img.d-flex.align-items-center.justify-content-center.rounded`
        (`height: 300px`, `width: 100%`, `border-radius: 0.25rem`,
        `box-shadow: 0px 20px 35px -30px rgba(0,0,0,0.26)`,
        `background-image: url(images/work-N.jpg)` cover-centered) with a
        hidden `.icon` inside — 70px white circle, `border-radius: 50%`,
        `opacity: 0` → `opacity: 1` on `.work:hover`, containing the
        ion-ios-search magnifier glyph.
      - `.text.pt-3.w-100.text-center` — `<h3><a href="#">Work NN</a></h3>`
        (18px, weight 500, `color: #000`) + `<span>Web Design</span>`
        (12px, uppercase, `letter-spacing: 1px`, weight 500,
        `color: rgba(0,0,0,0.3)`).
   - Carousel furniture (from Owl + style.css):
     - `.owl-nav` — prev/next arrow buttons, absolutely positioned
       `top: 50%` + `translateY(-50%)` at `left: 0` / `right: 0`,
       `color: rgba(0,0,0,0.1)`, `opacity: 0` (hidden) until
       `.owl-carousel:hover` → `opacity: 1` and nudged outward
       (`left: -25px` / `right: -25px` on hover). Glyphs: ionicons chevrons,
       30px.
     - `.owl-dots` — dot indicators, `text-align: center`,
       `margin-top: 20px`; each dot a 10px circle (`border-radius: 50%`,
       `margin: 5px`), `background: rgba(0,0,0,0.1)`; ACTIVE dot
       `background: #1089ff` (the template's ONLY brand color).

## Design tokens (from preview stylesheet `css/style.css`)

- **Brand / accent:** `#1089ff` (bright blue) — the ACTIVE carousel dot.
  Put in `@theme` (e.g. `--color-brand: #1089ff`) and use via Tailwind
  classes. It appears nowhere else in the source (rest is
  black/white/greys) — use it for the active dot only, to stay faithful.
- **Page background:** `#fff` (white) — `body { background-color: #fff }`.
- **Section:** `.ftco-section` — `padding: 7em 0` (Tailwind `py-[7em]`, i.e.
  ~112px top+bottom).
- **Section heading:** `.heading-section` — `font-size: 28px`, Poppins
  (headings stack `"Poppins", Arial, sans-serif`, weight 400 default), dark
  text `#212529` (Bootstrap body color; the h2 inherits it — in the
  screenshot it reads near-black). `.mb-5.pb-md-4` bottom spacing.
- **Work card image (`.work .img`):** `height: 300px`, `width: 100%`,
  `border-radius: 0.25rem` (Bootstrap `.rounded`), cover/center background,
  `box-shadow: 0px 20px 35px -30px rgba(0,0,0,0.26)` (soft downward drop —
  Tailwind arbitrary `shadow-[0_20px_35px_-30px_rgba(0,0,0,0.26)]`).
- **Hover icon (`.work .img .icon`):** 70px circle (`border-radius: 50%`),
  `background: #fff`, `opacity: 0` → `1` on `.work:hover` with
  `transition: 0.3s`; contains the magnifier glyph (recreate with lucide
  `Search` in a 70px white circle). Centered via flexbox.
- **Work title (`.work .text h3`):** `font-size: 18px`, `font-weight: 500`,
  Poppins; link `color: #000`.
- **Work category (`.work .text span`):** `font-size: 12px`,
  `letter-spacing: 1px`, `text-transform: uppercase`, `font-weight: 500`,
  `color: rgba(0,0,0,0.3)`; `padding-top: 0.75rem` (`.pt-3`) below the title,
  centered (`.text-center`).
- **Fonts:** `"Poppins", Arial, sans-serif` for headings AND body (the
  template's `body` override at the end of style.css). Load Poppins 300/400/
  500/700 via Google Fonts `<link>` in index.html (no font files copied).
- **Arrows (`.owl-nav`):** absolutely positioned `top: 50%`,
  `transform: translateY(-50%)`, `margin-top: -60px`; prev `left: 0`, next
  `right: 0`; resting `color: rgba(0,0,0,0.1)`; hidden (`opacity: 0`) until
  `.owl-carousel:hover` → `opacity: 1` and nudged outward (`left: -25px` /
  `right: -25px`); glyphs 30px (lucide ChevronLeft / ChevronRight).
- **Dots (`.owl-dots`):** `text-align: center`, `margin-top: 20px`; dots
  10px circles, `margin: 5px`, `border-radius: 50%`,
  `background: rgba(0,0,0,0.1)`; ACTIVE dot `background: #1089ff`.
- **Carousel behavior (from `js/main.js`):** `loop: true`, `autoplay: true`,
  `margin: 30` (30px gutter between items), `animateOut: 'fadeOut'`,
  `animateIn: 'fadeIn'` (cross-fade between pages), `nav: true`, `dots:
true`, `autoplayHoverPause: false`, `items: 1` base; responsive: 0px →
  1 item, 600px → 2 items, 1000px → 3 items.
- **Icons/images:** source uses the ionicons font for arrow + search glyphs
  and local `images/work-*.jpg` photos. Recreation uses lucide-react
  (ChevronLeft/ChevronRight/Search) and picsum placeholders
  (`https://picsum.photos/seed/faraway-<n>/800/600` — 4:3 to match the
  300px-tall card at ~400px wide), one distinct seed per work card.

## Requirements

### Requirement: Page composition

The system SHALL render a single white-background section containing a
centered section heading and a featured-works carousel; the section SHALL
fill the page width with the carousel constrained to a centered container.

#### Scenario: Single section layout

- **GIVEN** the Faraway page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be white
- **AND** the section SHALL contain a centered heading "Carousel #02" (or an
  equivalent paraphrase of the same kind)
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, dark (`#212529`), centered
- **AND** the heading SHALL be followed by bottom margin (~1.25rem + 1.5rem
  padding, mirroring `.mb-5.pb-md-4`)

### Requirement: Work cards

The system SHALL render exactly six work cards, each with a rounded photo, a
title link, and an uppercase category label; the photo SHALL reveal a white
circular search icon on hover.

#### Scenario: Six portfolio cards

- **GIVEN** the carousel is rendered
- **WHEN** the card items are inspected
- **THEN** six distinct work cards SHALL exist (Work 01 … Work 06,
  paraphrased titles allowed)
- **AND** each card SHALL show a 300px-tall rounded-corner image
  (`border-radius: 0.25rem`, `object-fit: cover`)
- **AND** each image SHALL carry a soft downward drop shadow
  (`0px 20px 35px -30px rgba(0,0,0,0.26)`)
- **AND** below the image SHALL be an 18px weight-500 dark (`#000`) title
  link
- **AND** below the title SHALL be a 12px uppercase `tracking-[1px]`
  category label in `rgba(0,0,0,0.3)` (source copy: "Web Design")
- **AND** each card's text block SHALL be centered and padded 0.75rem above
  the title

#### Scenario: Hover search icon

- **GIVEN** a work card is displayed
- **WHEN** the pointer hovers the card's image
- **THEN** a 70px white circle SHALL appear centered on the image
  (`opacity` 0 → 1 with a 0.3s transition)
- **AND** the circle SHALL contain a search (magnifier) icon
- **AND** the icon control SHALL be keyboard-accessible and carry an
  accessible label (e.g. aria-label "View Work 01")

### Requirement: Carousel pagination

The system SHALL display 1, 2, or 3 cards per view depending on breakpoint
(1 below 600px, 2 at 600–999px, 3 at 1000px+), SHALL auto-advance with
cross-fade, SHALL loop, and SHALL expose dot indicators and prev/next
arrows.

#### Scenario: Responsive items per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px
- **THEN** exactly one card SHALL be visible at a time
- **WHEN** the viewport is 600–999px
- **THEN** exactly two cards SHALL be visible at a time
- **WHEN** the viewport is ≥ 1000px
- **THEN** exactly three cards SHALL be visible at a time
- **AND** adjacent visible cards SHALL be separated by a 30px gutter

#### Scenario: Auto-advance and loop

- **GIVEN** the carousel is displayed (no user interaction)
- **WHEN** an autoplay interval elapses
- **THEN** the carousel SHALL advance to the next page of cards
- **AND** when the last page is reached the carousel SHALL wrap back to the
  first page (loop)

#### Scenario: Cross-fade transition

- **GIVEN** the carousel is changing pages
- **WHEN** the transition is observed
- **THEN** the outgoing page SHALL fade out while the incoming page fades in
  (opacity cross-fade, no horizontal slide motion)

### Requirement: Dot indicators

The system SHALL render one dot per page at the bottom of the carousel; the
active page's dot SHALL be brand blue `#1089ff`, the others `rgba(0,0,0,0.1)`;
activating a dot SHALL jump to that page.

#### Scenario: Dots render and track

- **GIVEN** the carousel is displayed
- **WHEN** the dots are inspected
- **THEN** one dot per page SHALL be rendered, centered below the cards with
  ~20px top margin
- **AND** each dot SHALL be a 10px circle with 5px gaps
- **AND** the dot for the current page SHALL be `#1089ff`
- **AND** the other dots SHALL be `rgba(0,0,0,0.1)`

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first page
- **WHEN** the last dot is activated
- **THEN** the last page of cards SHALL display
- **AND** the last dot SHALL become the active (blue) dot

### Requirement: Arrow navigation

The system SHALL provide prev/next arrow buttons vertically centered at the
left/right edges of the carousel; they SHALL be hidden until the carousel is
hovered, then SHALL appear and nudge outward; activating them SHALL move to
the previous/next page.

#### Scenario: Arrows hidden until hover

- **GIVEN** the carousel is displayed and the pointer is not over it
- **WHEN** the arrow buttons are inspected
- **THEN** they SHALL be invisible (opacity 0)
- **WHEN** the pointer hovers the carousel
- **THEN** the arrows SHALL become visible (opacity 1) and nudge outward
  from the edges (`-25px`)
- **AND** each arrow SHALL carry an accessible label (aria-label "Previous
  works" / "Next works")

#### Scenario: Navigate with arrows

- **GIVEN** the carousel is on the first page
- **WHEN** the next arrow is activated
- **THEN** the second page SHALL display
- **WHEN** the previous arrow is activated
- **THEN** the first page SHALL display again

### Requirement: Responsive behavior

The system SHALL keep the carousel usable from mobile to desktop with no
horizontal overflow.

#### Scenario: Mobile

- **GIVEN** a viewport < 600px
- **WHEN** the page is rendered
- **THEN** the carousel SHALL show one card with no horizontal overflow
- **AND** dots and arrows SHALL remain tappable (≥ 44px effective hit area
  or clearly separated)

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 1000px
- **WHEN** the page is rendered
- **THEN** three cards SHALL show per page with a 30px gutter
- **AND** the whole layout SHALL stay within the centered container

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Faraway page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/faraway` exists; package `@free-react-templates/faraway`;
      `public/CNAME` = `faraway.free.componentdock.com`; `homepage` =
      `https://faraway.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/faraway` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single white section `py-[7em]` with centered 28px dark heading
      ("Carousel #02" or paraphrase); body font Poppins
- [ ] Six work cards (Work 01–06, paraphrased titles OK), each: 300px-tall
      rounded image (`rounded`, `object-cover`,
      `shadow-[0_20px_35px_-30px_rgba(0,0,0,0.26)]`), picsum seed
      `faraway-<n>` 800×600, 18px/500 dark title link, 12px uppercase
      `tracking-[1px]` `rgba(0,0,0,0.3)` category label ("Web Design")
- [ ] Hover: 70px white circle with lucide Search appears on image hover
      (opacity 0→1, 0.3s), keyboard-accessible, aria-label
- [ ] Carousel pages: 1 item < 600px, 2 at 600–999px, 3 at ≥ 1000px, 30px
      gutter; autoplay advances; loop wraps last → first; cross-fade
      transition
- [ ] Dots: one per page, centered below cards (`mt-5`), 10px circles 5px
      gap, `rgba(0,0,0,0.1)`; active = `#1089ff` (brand); clicking jumps to
      page
- [ ] Arrows: vertically centered at edges (`top-1/2 -translate-y-1/2`),
      hidden (`opacity-0`) until carousel hover → visible + nudge outward
      (`-left-6` / `-right-6`); lucide ChevronLeft/ChevronRight; aria-labels;
      clicking navigates prev/next
- [ ] `@theme` defines `--color-brand: #1089ff` used for the active dot;
      no other brand color introduced (rest of palette is white/black/greys)
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic buttons, aria-labels on arrow + dot +
      hover-icon controls, focus-visible rings, `aria-current` on the active
      dot; tests use `vi.useFakeTimers()` for deterministic autoplay
      assertions and cover: heading + six cards render, first-page default,
      responsive per-view counts, next/prev wrap-around (first ↔ last), dot
      jump, arrow navigation, autoplay tick, active-dot tracking,
      hover-reveal of arrows and search icon, footer link
- [ ] `npm run verify:app -- faraway` (or `scripts/verify-app.sh faraway`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://faraway.free.componentdock.com (200, correct
      content)
