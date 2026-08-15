# Template: Fjord (Portfolio Carousel / Featured Works Slider)

## Purpose

Fjord is a single-section featured-works carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 03" website template design
(source: https://colorlib.com/wp/template/carousel-03/), built under a
DIFFERENT name (Fjord — "a long, narrow, deep inlet of sea between high
cliffs", fitting the travel/destinations naming theme of the "Bootstrap
Carousels (20)" series renames) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **fjord** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-03`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the THIRD of the "Bootstrap Carousels (20)" series
renames (lineage established in the Wanderlust prep: carousel-01 →
wanderlust, carousel-02 → faraway, carousel-03 → fjord, ... — theme: travel /
destinations; the name is thematic, the content is a portfolio slider).

Fjord lives in `apps/fjord` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 03" — the THIRD of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 03"). A white-background single
  section showcasing a responsive featured-works carousel: `.ftco-section`
  with a centered `.heading-section` ("Carousel #03") above a
  `.featured-carousel.owl-carousel` holding FIVE `.work` cards (work-1.jpg …
  work-5.jpg, all categorized "Web Design", all titled "Working Spaces for
  Startups Freelancer" — a placeholder title, so paraphrased per-card titles
  are fine). Each card = a 500px-tall rounded photo with a bottom black
  gradient overlay; the title + category chip OVERLAY the photo's bottom edge
  (`align-items-end`), NOT below the photo like Carousel 02. No navbar, no
  hero, no footer — the carousel section IS the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-03/`
  (reachable; DOM fetched — 8.2KB HTML + `css/owl.carousel.min.css` +
  `css/owl.theme.default.min.css` + `css/style.css` (223.5KB, includes full
  Bootstrap 4 + template styles) + ionicons 4.5.6 icon font + `js/main.js`).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/carousel-03/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  "Bootstrap Calendars" and Carousel 01/02 preps). The carousel is driven by
  `js/main.js`: `$('.featured-carousel').owlCarousel({ loop:true,
autoplay:true, margin:30, animateOut:'fadeOut', animateIn:'fadeIn',
nav:true, dots:true, autoplayHoverPause:false, items:1,
navText:["<span class='ion-ios-arrow-back'></span>","<span
class='ion-ios-arrow-forward'></span>"], responsive:{0:{items:1},
600:{items:2}, 1000:{items:3}} })` — 1/2/3 items per view at 0/600/1000px,
  fading between pages, auto-playing, looping (identical config to Carousel
  02).
- **Screenshot:** `carousel-03.jpg` (1200×972 AVIF, viewed in browser) —
  stark white page with centered near-black "Carousel #03" heading; below it
  a row of THREE cards: (1) woman in beige coat/hat/scarf outdoors, (2) hand
  holding an ice cream cone against blurred green foliage, (3) two people
  talking on stone steps outside a modern building. Each card: full-bleed
  photo with a WHITE serif title ("Working Spaces for Startups Freelancer")
  overlaid at the BOTTOM and a small white uppercase "WEB DESIGN" chip above
  it. Below the left card: TWO pagination dots — left dot PURPLE = active,
  right light grey = inactive. At the bottom-right of the third card: faint
  prev/next chevron arrows. Aesthetic: clean, minimalist, light — an
  agency/portfolio works slider with a serif editorial feel and a single
  purple accent.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1 + Owl
  Carousel 2.3.4 + ionicons 4.5.6 + Google Poppins + Playfair Display. The
  recreation must NOT copy any of this — build a pure-React multi-item
  carousel with lucide-react icons (ChevronLeft / ChevronRight for arrows)
  and picsum placeholder photos (the source's work photos are NOT copied).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` (padding: 7em 0) > `.container` > `.row`:
   1. `.col-md-12.text-center` — `<h2 class="heading-section mb-5">`
      "Carousel #03" (28px Poppins heading, dark).
   2. `.col-md-12` — `.featured-carousel.owl-carousel` holding FIVE `.item`
      divs, each a `.work` card:
      - `.img.d-flex.align-items-end.justify-content-center`
        (`height: 500px`, `width: 100%`, `border-radius: 15px`,
        `overflow: hidden`, `box-shadow: 0px 20px 35px -30px rgba(0,0,0,0.26)`,
        `z-index: 0`, `background-image: url(images/work-N.jpg)`
        cover-centered) with an `::after` overlay — a bottom-to-top black
        gradient (`linear-gradient(to bottom, transparent 0%, transparent
42%, black 100%)`, `opacity: .6`, `z-index: -1`, absolutely
        inset-0) that darkens the lower half so white text stays readable.
      - Inside the `.img` (bottom-aligned via `align-items-end`): `.text.w-100`
        (`padding: 35px`, `padding-top: 0`) containing:
        - `<span class="cat">Web Design</span>` — 12px, uppercase,
          `letter-spacing: 1px`, weight 400, `color: #b063c5`, background
          `rgba(255,255,255,0.9)`, `padding: 1px 8px`, `display: inline-block`,
          `margin-bottom: 5px` (a white pill chip with purple text).
        - `<h3><a href="#">Working Spaces for Startups Freelancer</a></h3>`
          — 34px, weight 400, `font-family: "Playfair Display", serif`,
          `color: #fff`, `margin-bottom: 0`.
   - Carousel furniture (from Owl + style.css):
     - `.owl-nav` — `position: absolute; bottom: 0; width: 100%`; prev/next
       buttons BOTH on the right edge (`right: 0`; prev additionally
       `margin-right: 20px`, so prev sits 20px LEFT of next), each
       `transform: translateY(-50%)` + `margin-top: -10px`, resting
       `color: rgba(0,0,0,0.2)`, ALWAYS visible (`opacity: 1` — unlike
       Carousel 02's hover-reveal), glyphs 16px; on hover the glyph turns
       `#b063c5` (0.3s transition).
     - `.owl-dots` — `text-align: LEFT` (left-aligned, unlike Carousel 02's
       centered dots), `margin-top: 10px`; each dot a 10px circle
       (`border-radius: 50%`, `margin: 5px`), `background: rgba(0,0,0,0.1)`;
       ACTIVE dot `background: #b063c5` (the template's brand color).

## Design tokens (from preview stylesheet `css/style.css`)

- **Brand / accent:** `#b063c5` (purple) — the ACTIVE carousel dot, the
  `.cat` chip text color, the link color, and the arrow hover color. Put in
  `@theme` (e.g. `--color-brand: #b063c5`) and use via Tailwind classes. It
  appears nowhere else in the source (rest is black/white/greys) — use it
  for those accents only, to stay faithful.
- **Page background:** `#fff` (white).
- **Section:** `.ftco-section` — `padding: 7em 0` (Tailwind `py-[7em]`, i.e.
  ~112px top+bottom).
- **Section heading:** `.heading-section` — `font-size: 28px`, Poppins
  (body stack `"Poppins", Arial, sans-serif`), dark (reads near-black in the
  screenshot; Bootstrap body color `#212529`). `.mb-5` bottom spacing.
- **Work card image (`.work .img`):** `height: 500px`, `width: 100%`,
  `border-radius: 15px`, `overflow: hidden`, cover/center background,
  `box-shadow: 0px 20px 35px -30px rgba(0,0,0,0.26)` (soft downward drop —
  Tailwind arbitrary `shadow-[0_20px_35px_-30px_rgba(0,0,0,0.26)]`).
- **Bottom gradient overlay (`.work .img:after`):** absolutely inset-0,
  `z-index: -1` behind the text, `background: linear-gradient(to bottom,
transparent 0%, transparent 42%, black 100%)`, `opacity: .6` — darkens
  the bottom ~58% of the photo. In Tailwind: an absolutely positioned div
  with `bg-gradient-to-b from-transparent from-0% via-transparent via-42%
to-black opacity-60` (or arbitrary
  `[background:linear-gradient(to_bottom,transparent_0%,transparent_42%,black_100%)]`
  - `opacity-60`).
- **Text block (`.work .text`):** `padding: 35px`, `padding-top: 0`,
  `width: 100%`; positioned at the BOTTOM of the image (flex
  `items-end` on the `.img`).
- **Category chip (`.work .text .cat`):** `font-size: 12px`,
  `letter-spacing: 1px`, `text-transform: uppercase`, `font-weight: 400`,
  `color: #b063c5`, `background: rgba(255,255,255,0.9)`,
  `padding: 1px 8px`, `display: inline-block`, `margin-bottom: 5px`.
- **Work title (`.work .text h3`):** `font-size: 34px`, `font-weight: 400`,
  `font-family: "Playfair Display", serif`, `margin-bottom: 0`; link
  `color: #fff`.
- **Fonts:** body `"Poppins", Arial, sans-serif` (14px, `line-height: 1.8`,
  weight normal); work titles `"Playfair Display", serif`. Load Poppins
  300/400/500/700 AND Playfair Display 400/700 via Google Fonts `<link>` in
  index.html (no font files copied).
- **Links:** `a { color: #b063c5 }` (only relevant if a link appears outside
  the white title overlay).
- **Arrows (`.owl-nav`):** positioned at the carousel's BOTTOM edge, both
  on the RIGHT (`right: 0`; prev `margin-right: 20px` → sits left of next),
  `transform: translateY(-50%)`, `margin-top: -10px`, resting
  `color: rgba(0,0,0,0.2)`; ALWAYS visible (`opacity: 1`); glyphs 16px
  (lucide ChevronLeft / ChevronRight); hover → `#b063c5` (0.3s).
- **Dots (`.owl-dots`):** `text-align: left`, `margin-top: 10px`; dots 10px
  circles, `margin: 5px`, `border-radius: 50%`, `background: rgba(0,0,0,0.1)`;
  ACTIVE dot `background: #b063c5`.
- **Carousel behavior (from `js/main.js`):** `loop: true`, `autoplay: true`,
  `margin: 30` (30px gutter between items), `animateOut: 'fadeOut'`,
  `animateIn: 'fadeIn'` (cross-fade between pages), `nav: true`, `dots:
true`, `autoplayHoverPause: false`, `items: 1` base; responsive: 0px →
  1 item, 600px → 2 items, 1000px → 3 items. IDENTICAL config to Carousel 02
  (Faraway) — only the card styling differs.
- **Icons/images:** source uses the ionicons font for arrow glyphs and local
  `images/work-*.jpg` photos. Recreation uses lucide-react
  (ChevronLeft/ChevronRight) and picsum placeholders
  (`https://picsum.photos/seed/fjord-<n>/800/1100` — ~4:5 portrait to match
  the 500px-tall card at ~360px wide; one distinct seed per work card;
  implementer MUST screen seeds per the seed-screening method — the source
  subjects are people/street/lifestyle scenes).

## Requirements

### Requirement: Page composition

The system SHALL render a single white-background section containing a
centered section heading and a featured-works carousel; the section SHALL
fill the page width with the carousel constrained to a centered container.

#### Scenario: Single section layout

- **GIVEN** the Fjord page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be white
- **AND** the section SHALL contain a centered heading "Carousel #03" (or an
  equivalent paraphrase of the same kind)
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, dark (near-black `#212529`),
  centered
- **AND** the heading SHALL be followed by bottom margin (`.mb-5`, ~3rem)

### Requirement: Work cards

The system SHALL render exactly five work cards, each a tall rounded photo
with a bottom black gradient overlay carrying a white serif title and an
uppercase category chip overlaid on the photo's bottom edge.

#### Scenario: Five portfolio cards

- **GIVEN** the carousel is rendered
- **WHEN** the card items are inspected
- **THEN** five distinct work cards SHALL exist (work 1 … work 5,
  paraphrased titles allowed)
- **AND** each card SHALL show a 500px-tall image with `border-radius: 15px`
  and `overflow: hidden` (`object-fit: cover`)
- **AND** each image SHALL carry a soft downward drop shadow
  (`0px 20px 35px -30px rgba(0,0,0,0.26)`)
- **AND** a black gradient overlay SHALL darken the bottom of each image
  (`linear-gradient(to bottom, transparent 0%, transparent 42%, black 100%)`
  at `opacity: .6`) behind the text
- **AND** the title + chip SHALL overlay the BOTTOM edge of the photo
  (flex items-end), NOT sit below it

#### Scenario: Title and category chip

- **GIVEN** a work card is displayed
- **WHEN** the overlay text is inspected
- **THEN** an uppercase category chip SHALL appear above the title
  (source copy: "Web Design")
- **AND** the chip SHALL be 12px, uppercase, `tracking-[1px]`, purple text
  (`#b063c5`) on a `rgba(255,255,255,0.9)` background, `px-2 py-px`
  inline-block with a 5px bottom margin
- **AND** the title SHALL be 34px weight-400 Playfair Display (serif),
  white (`#fff`), with no bottom margin, linking to `#`
- **AND** the text block SHALL have 35px padding (no top padding)

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

The system SHALL render one dot per page at the bottom-left of the carousel;
the active page's dot SHALL be brand purple `#b063c5`, the others
`rgba(0,0,0,0.1)`; activating a dot SHALL jump to that page.

#### Scenario: Dots render and track

- **GIVEN** the carousel is displayed
- **WHEN** the dots are inspected
- **THEN** one dot per page SHALL be rendered, LEFT-aligned below the cards
  with ~10px top margin
- **AND** each dot SHALL be a 10px circle with 5px gaps
- **AND** the dot for the current page SHALL be `#b063c5`
- **AND** the other dots SHALL be `rgba(0,0,0,0.1)`

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first page
- **WHEN** the last dot is activated
- **THEN** the last page of cards SHALL display
- **AND** the last dot SHALL become the active (purple) dot

### Requirement: Arrow navigation

The system SHALL provide prev/next arrow buttons at the bottom-right of the
carousel, ALWAYS visible; activating them SHALL move to the previous/next
page; hovering an arrow SHALL tint its glyph brand purple.

#### Scenario: Arrows always visible at bottom-right

- **GIVEN** the carousel is displayed
- **WHEN** the arrow buttons are inspected
- **THEN** both arrows SHALL be visible (no hover requirement) at the
  bottom-right edge: next flush right, prev 20px to its left
- **AND** each arrow SHALL carry an accessible label (aria-label "Previous
  works" / "Next works")
- **WHEN** an arrow is hovered or focused
- **THEN** its glyph SHALL turn `#b063c5` (0.3s transition)

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

- **GIVEN** the Fjord page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/fjord` exists; package `@free-react-templates/fjord`;
      `public/CNAME` = `fjord.free.componentdock.com`; `homepage` =
      `https://fjord.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (300, 400, 500, 700) AND
      Playfair Display (400, 700); no font/image/icon assets copied from
      ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/fjord` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single white section `py-[7em]` with centered 28px dark heading
      ("Carousel #03" or paraphrase); body font Poppins
- [ ] Five work cards (work 1–5, paraphrased titles OK), each: 500px-tall
      image (`rounded-[15px]`, `object-cover`, overflow hidden,
      `shadow-[0_20px_35px_-30px_rgba(0,0,0,0.26)]`), picsum seed `fjord-<n>`
      800×1100 (screened for people/street subject), black bottom gradient
      overlay (transparent → transparent 42% → black, `opacity-60`) behind
      the text, title + chip overlaid at the BOTTOM of the photo
- [ ] Chip: 12px uppercase `tracking-[1px]` purple `#b063c5` on
      `rgba(255,255,255,0.9)`, `px-2 py-px`, inline-block, `mb-[5px]`
      ("Web Design")
- [ ] Title: 34px weight-400 Playfair Display serif, white, link `#`; text
      block `p-[35px] pt-0`
- [ ] Carousel pages: 1 item < 600px, 2 at 600–999px, 3 at ≥ 1000px, 30px
      gutter; autoplay advances; loop wraps last → first; cross-fade
      transition
- [ ] Dots: one per page, LEFT-aligned below cards (`mt-2.5`), 10px circles
      5px gap, `rgba(0,0,0,0.1)`; active = `#b063c5` (brand); clicking jumps
      to page
- [ ] Arrows: at bottom-right (next `right-0`, prev `right-0 mr-5`), ALWAYS
      visible, `rgba(0,0,0,0.2)` glyphs, hover/focus → `#b063c5`; lucide
      ChevronLeft/ChevronRight; aria-labels; clicking navigates prev/next
- [ ] `@theme` defines `--color-brand: #b063c5` used for the active dot,
      chip text, and arrow hover; no other brand color introduced (rest of
      palette is white/black/greys)
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic buttons, aria-labels on arrow + dot
      controls, focus-visible rings, `aria-current` on the active dot; tests
      use `vi.useFakeTimers()` for deterministic autoplay assertions and
      cover: heading + five cards render, first-page default, responsive
      per-view counts, next/prev wrap-around (first ↔ last), dot jump, arrow
      navigation, autoplay tick, active-dot tracking, gradient overlay
      present per card, footer link
- [ ] `npm run verify:app -- fjord` (or `scripts/verify-app.sh fjord`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://fjord.free.componentdock.com (200, correct
      content)
