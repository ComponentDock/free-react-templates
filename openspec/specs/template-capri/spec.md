# Template: Capri (Testimonials Carousel)

## Purpose

Capri is a single-section testimonials carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 05" website template design
(source: https://colorlib.com/wp/template/carousel-05/), built under a
DIFFERENT name (Capri — "a fashionable Mediterranean resort island",
fitting the travel/destinations naming theme of the "Bootstrap Carousels
(20)" series renames) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **capri** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-05`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the FIFTH of the "Bootstrap Carousels (20)" series
renames (lineage established in the Wanderlust prep: carousel-01 →
wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
carousel-05 → capri, ... — theme: travel / destinations; the name is
thematic, the content is a testimonials slider).

Capri lives in `apps/capri` and uses shared components from `packages/ui` (cn
at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 05" — the FIFTH of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 05"). A **sage-green page
  (`#83b582`)** single section showcasing a responsive **testimonials
  carousel**: `.ftco-section` (padding 7em 0) with a centered `.heading-section`
  ("Carousel #05") above a `.featured-carousel.owl-carousel` holding FIVE
  `.item > .testimony-wrap.py-4` testimonial cards. No navbar, no hero, no
  footer — the section is the whole page. **Differs from Carousel 04 (Lido):
  the page is green, the heading is white, cards are radius-5 with no quote
  glyph, avatars sit bottom-left INSIDE the card next to the name, dots are
  white pills, and the carousel AUTOPLAYS.**
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-05/`
  (HTTP 200, 9,879 bytes DOM; fetched 2026-08-15). NOTE: the standard
  preview path `https://preview.colorlib.com/theme/carousel-05/` 404s — the
  whole "Bootstrap Carousels" series lives under the `/theme/bootstrap/`
  prefix on the preview portal (same finding as the Bootstrap Calendars and
  Carousel 01/02/03/04 preps). Stylesheets: `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/style.css` (222,147 bytes — bundles
  Bootstrap 4.3.1 + the template's custom ftco styles at the tail) +
  ionicons 4.5.6 (CDN) + Google fonts via cf-fonts (Playfair Display
  400/400i/700 — loaded but **UNUSED in this demo's CSS**, no playfair
  selectors in style.css; the recreation may skip it; body font is Poppins).
  Carousel driven by `js/main.js`:
  `$('.featured-carousel').owlCarousel({ loop: false, autoplay: true,
margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn', nav: false,
dots: true, autoplayHoverPause: false, items: 1,
navText: [ion-ios-arrow-back, ion-ios-arrow-forward],
responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } } })`
  — 1/2/3 cards per view at 0/600/1000px, cross-fade, **AUTOPLAY ON**
  (Owl default 5,000ms interval, `autoplayHoverPause: false`), NO loop, NO
  arrows (nav: false), dots only. **NO `center: true`** (unlike Carousel 04)
  → with 5 items / 3 per view Owl pages at positions 0 and 2: exactly TWO
  pages (cards 1–3, then cards 3–5 overlapping at card 3) — confirmed by the
  screenshot's two dots.
- **Screenshot:** `carousel-05.jpg` (1200×972, viewed in browser) — flat
  sage/seafoam-green page (`#83b582`), centered thin WHITE "Carousel #05"
  heading, THREE white testimonial cards side by side: each a white rounded
  card (radius ~5px, soft shadow) with identical grey placeholder
  testimonial text, and at the card's bottom-left a circular male portrait
  avatar beside a bold dark name ("Roger Scott") and a green role line
  ("Marketing Manager" in the page-green); below the row TWO small
  horizontal pill dots (left bright white = active, right grey). NO
  decorative quote marks anywhere. Aesthetic: clean, minimal, fresh-green
  testimonial strip.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1 (bundled
  into style.css) + Owl Carousel 2.3.4 + ionicons 4.5.6 + Google Poppins.
  The recreation must NOT copy any of this — build a pure-React carousel
  with lucide-react icons (Quote if desired) and picsum placeholder avatars
  (the source's person photos are NOT copied).
- **Fidelity exception (responsive):** the source stylesheet forces
  `body { min-width: 992px !important; }` (a desktop-only demo artifact).
  The recreation MUST be responsive (1 card per view below 600px per the
  carousel config) and MUST NOT force a min-width — mobile support is a
  monorepo hard requirement.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` — single section, `padding: 7em 0`, on the page's sage
   green background. Inside `.container` > `.row`:
   - `.col-md-12.text-center` > `h2.heading-section.mb-5` — "Carousel #05"
     (28px, **#fff**, Poppins, centered, `margin-bottom: 3rem`).
   - `.col-md-12` > `.featured-carousel.owl-carousel` — FIVE `.item` cards,
     each:
     - `.testimony-wrap.py-4` — the card: `display: block`,
       `position: relative`, `background: white`, `padding: 0 30px`
       (horizontal) + `.py-4` = 1.5rem vertical (Bootstrap),
       `border-radius: 5px`, `box-shadow: 0px 5px 21px -14px rgba(0,0,0,0.14)`.
       - `.text` — plain block (NO `pl-4`/quote layout like Carousel 04):
         - `p.mb-4` — the testimonial text (inherits body: Poppins 16px,
           line-height 1.8, color `#999999`; `margin-bottom: 1.5rem`).
           Placeholder: "Far far away, behind the word mountains, far from
           the countries Vokalia and Consonantia, there live the blind
           texts." — IDENTICAL in all five cards; recreation should
           paraphrase per person.
         - `.d-flex.align-items-center` — bottom row (avatar + identity):
           - `.user-img` — 80×80 circle, `border-radius: 50%`,
             `background-image: url(images/person_N.jpg)` (cover, centered).
             Source cycles person_1, person_2, person_3, person_1,
             person_2 across the five cards.
           - `.pl-3` — `padding-left: 1rem` (Bootstrap):
             - `p.name` — 20px, `font-weight: 500`, `#000`,
               `margin-bottom: 0`. Source repeats "Roger Scott" in ALL five
               cards — recreation should use distinct names (same kind).
             - `span.position` — 16px, `#83b582`. Source repeats "Marketing
               Manager" in ALL five cards — recreation should use distinct
               roles (same kind: name + role).
   - Carousel furniture (Owl + style.css): `.owl-dots` — `text-align:
center`, `margin-top: 10px`; dots are **20×3px PILLS** (not circles),
     `margin: 5px`, `border-radius: 1px`, `background: rgba(255,255,255,0.2)`;
     ACTIVE dot `background: #fff`. `nav: false` → NO prev/next arrows in
     this demo. With 5 items / 3 per view and NO `center: true`: TWO pages
     (cards 1–3, then cards 3–5) → exactly TWO dots.

## Design tokens (from preview stylesheet `css/style.css`)

- **Page background (brand green):** `#83b582` (muted sage/seafoam green) —
  the `body` background; also the role text color (`.position`). Put in
  `@theme` and use via Tailwind classes.
- **Heading:** `.heading-section` — 28px, `color: #fff`, Poppins (inherited
  from body), centered, `margin-bottom: 3rem` (`.mb-5`).
- **Body text:** Poppins 16px, `line-height: 1.8`, `color: #999999`
  (grey — applies to the testimonial paragraph inside the white cards).
- **Card (`.testimony-wrap`):** `background: white`; `padding: 0 30px` +
  1.5rem vertical (`.py-4`); `border-radius: 5px` (NOT 10px — differs from
  Carousel 04); `box-shadow: 0px 5px 21px -14px rgba(0,0,0,0.14)` (Tailwind
  `shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)]`); `display: block`,
  `position: relative`. NO border, NO quote glyph, NO flex row at card level.
- **Avatar (`.user-img`):** 80×80 (NOT 90 — differs from Carousel 04),
  `border-radius: 50%`, cover background image, NO white border, sits at the
  bottom-left of the card inside a `d-flex align-items-center` row with
  `padding-left: 1rem` (`.pl-3`) to its right.
- **Name (`.name`):** 20px, `font-weight: 500`, `color: #000`,
  `margin-bottom: 0`.
- **Role (`.position`):** 16px, `color: #83b582` (the brand green).
- **Dots (`.owl-dots`):** centered below the cards, `margin-top: 10px`;
  20×3px pills, `margin: 5px`, `border-radius: 1px`,
  `background: rgba(255,255,255,0.2)`; ACTIVE dot `background: #fff`. Two
  dots total (two pages).
- **Section:** `.ftco-section` — `padding: 7em 0`, page background `#83b582`.
- **Fonts:** `"Poppins", Arial, sans-serif` for the heading and card text
  (Google Poppins via cf-fonts in the source). Load Poppins 300, 400, 500,
  700 via Google Fonts `<link>` in index.html (no font files copied).
  Playfair Display is loaded by the source page but has NO selectors in this
  demo's stylesheet — skip it (same finding as Carousel 04).
- **Icons/images:** source uses the ionicons font (unused in this demo —
  navText icons are hidden) and local `images/person_*.jpg` photos.
  Recreation uses lucide-react if any icon is wanted and picsum placeholder
  avatars (`https://picsum.photos/seed/capri-<n>/160/160`, circle-cropped).
  Avatar seeds should be SCREENED for portrait subjects (see the
  colorlib-template-replication skill's verified person picsum IDs: 1027,
  64, 823, 996) — do not ship arbitrary landscape seeds in person slots.

## Requirements

### Requirement: Page composition

The system SHALL render a single section with sage-green (`#83b582`) page
background containing a centered section heading and a testimonials
carousel; the section SHALL fill the page width with the carousel
constrained to a centered container.

#### Scenario: Single section layout

- **GIVEN** the Capri page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be the brand sage green `#83b582`
- **AND** the section SHALL contain a centered heading "Carousel #05" (or an
  equivalent paraphrase of the same kind, e.g. "Testimonials")
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)
- **AND** the page SHALL be responsive (source forces `min-width: 992px`
  — the recreation MUST NOT; see fidelity exception above)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, WHITE (`#fff` — the page is
  green, unlike Carousel 04's black-on-white), centered
- **AND** the heading SHALL be followed by bottom margin (`.mb-5`, ~3rem)

### Requirement: Testimonial cards

The system SHALL render exactly five testimonial cards, each a white rounded
card (radius 5px, soft shadow) with a testimonial sentence and, at the
bottom, a flex row of a circular avatar and the person's name + role (role
in the brand green).

#### Scenario: Five testimonial cards

- **GIVEN** the carousel is rendered
- **WHEN** the card items are inspected
- **THEN** five distinct testimonial cards SHALL exist (persons 1 … 5,
  paraphrased names/roles allowed, same kind: name + role)
- **AND** each card SHALL be white with `border-radius: 5px`, the soft
  shadow `0px 5px 21px -14px rgba(0,0,0,0.14)`, horizontal padding 30px and
  vertical padding 1.5rem (`py-4`)
- **AND** each card SHALL be a plain block (`display: block`, no card-level
  flex, no border, no quote glyph)

#### Scenario: Card content

- **GIVEN** a testimonial card is displayed
- **WHEN** its content is inspected
- **THEN** the testimonial sentence SHALL be Poppins 16px, line-height 1.8,
  `#999999`, with ~1.5rem bottom margin
- **AND** the sentence SHALL differ per person (paraphrased, same kind of
  content — the source repeats one placeholder in all five cards)
- **AND** a bottom row (`display: flex`, `align-items: center`) SHALL hold an
  80×80 circular avatar (`border-radius: 50%`, cover image, no border) on
  the left and a text block with `padding-left: 1rem` on the right
- **AND** the name SHALL be 20px, weight 500, `#000`, `margin-bottom: 0`
- **AND** the role SHALL be 16px, `#83b582`
- **AND** NO decorative quote mark SHALL float above the card (the source
  has none — differs from Carousel 04)

### Requirement: Carousel pagination

The system SHALL display 1, 2, or 3 cards per view depending on breakpoint
(1 below 600px, 2 at 600–999px, 3 at 1000px+); it SHALL NOT loop; page
changes SHALL cross-fade; with five cards there SHALL be exactly TWO pages
(cards 1–3, then cards 3–5 overlapping at card 3).

#### Scenario: Responsive items per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px
- **THEN** exactly one card SHALL be visible at a time
- **WHEN** the viewport is 600–999px
- **THEN** exactly two cards SHALL be visible at a time
- **WHEN** the viewport is ≥ 1000px
- **THEN** exactly three cards SHALL be visible at a time
- **AND** adjacent visible cards SHALL be separated by a 30px gutter
  (`gap: 30px` / `margin: 30px`)

#### Scenario: No loop

- **GIVEN** the carousel is on the last page
- **WHEN** a next-page action is attempted
- **THEN** the carousel SHALL NOT wrap from the last page back to the first
  (loop off)

#### Scenario: Two pages

- **GIVEN** the carousel is rendered at a breakpoint showing 3 cards per view
- **WHEN** the page count is inspected
- **THEN** exactly TWO pages SHALL exist: page 1 = cards 1–3, page 2 = cards
  3–5 (card 3 appears in both pages — Owl's default paging at positions 0
  and 2 with 5 items / 3 per view, no `center: true`)

#### Scenario: Cross-fade transition

- **GIVEN** the carousel is changing pages
- **WHEN** the transition is observed
- **THEN** the outgoing page SHALL fade out while the incoming page fades in
  (opacity cross-fade, no horizontal slide motion)

### Requirement: Autoplay

The system SHALL advance to the next page automatically every ~5 seconds
(Owl default `autoplayTimeout: 5000`; source sets `autoplay: true`,
`autoplayHoverPause: false`). For accessibility, autoplay SHALL pause when
the user prefers reduced motion (`prefers-reduced-motion: reduce`).

#### Scenario: Automatic advance

- **GIVEN** the carousel is displayed without user interaction
- **WHEN** ~5 seconds elapse
- **THEN** the carousel SHALL advance to the next page (and continue every
  ~5s; on the last page with loop off it SHALL stop or hold — never wrap)
- **AND** autoplay SHALL NOT pause on hover (source `autoplayHoverPause:
false`)

#### Scenario: Reduced motion

- **GIVEN** the user has `prefers-reduced-motion: reduce`
- **WHEN** the carousel is displayed
- **THEN** autoplay SHALL be disabled (pages change only via dots)

### Requirement: Dot indicators

The system SHALL render one dot per page (two total) centered below the
cards; each dot SHALL be a 20×3px white-tinted pill; the active page's dot
SHALL be solid white; activating a dot SHALL jump to that page.

#### Scenario: Dots render and track

- **GIVEN** the carousel is displayed
- **WHEN** the dots are inspected
- **THEN** exactly two dots SHALL be rendered, CENTERED below the cards with
  ~10px top margin
- **AND** each dot SHALL be a 20×3px pill (`border-radius: 1px`) with 5px
  gaps
- **AND** the dot for the current page SHALL be `#fff`
- **AND** the other dot SHALL be `rgba(255,255,255,0.2)`

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first page (cards 1–3)
- **WHEN** the last dot is activated
- **THEN** the last page of cards SHALL display (cards 3–5)
- **AND** the last dot SHALL become the active (white) dot

### Requirement: No arrow navigation

The source demo disables arrows (`nav: false`) — the recreation SHALL NOT
render prev/next arrow buttons.

#### Scenario: No arrows

- **GIVEN** the Capri page is rendered
- **WHEN** the carousel area is inspected
- **THEN** no prev/next arrow buttons SHALL be present
- **AND** the carousel SHALL be navigable via the dot indicators only

### Requirement: Responsive behavior

The system SHALL keep the layout usable from mobile to desktop (the source
is desktop-only via `min-width: 992px` — the recreation MUST be responsive).

#### Scenario: Mobile

- **GIVEN** a viewport < 600px
- **WHEN** the page is rendered
- **THEN** one card SHALL show at a time with no horizontal overflow
- **AND** the dots SHALL remain tappable (≥ 44px effective hit area or
  clearly separated)

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 1000px
- **WHEN** the page is rendered
- **THEN** three cards SHALL show at a time with the 30px gutter
- **AND** the dots SHALL sit centered below with ~10px top margin

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Capri page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/capri` exists; package `@free-react-templates/capri`;
      `public/CNAME` = `capri.free.componentdock.com`; `homepage` =
      `https://capri.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/capri` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on brand sage-green `#83b582` page
      background; centered WHITE heading (28px, Poppins, `#fff`, `mb-12`/
      3rem) "Carousel #05" or paraphrase; responsive (NO min-width: 992px)
- [ ] Five testimonial cards; each: white, radius 5px,
      `shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)]`, `px-[30px] py-6`
      (1.5rem); plain block, no border, no quote glyph
- [ ] Card body: testimonial sentence Poppins 16px/lh-1.8/`#999999`/`mb-6`,
      paraphrased per person (5 distinct); bottom flex row: 80px circular
      avatar (cover, picsum seed `capri-<n>`, screened for portraits) +
      `pl-4` (1rem) block with name 20px/500/`#000` and role
      16px/`#83b582`
- [ ] Paged carousel: 1/2/3 cards per view at <600 / 600–999 / ≥1000px,
      30px gutter; NO loop; cross-fade page transition; exactly TWO pages
      (cards 1–3, then 3–5) — two dots
- [ ] Autoplay ON ~5s (fake timers), does NOT pause on hover, disabled
      under `prefers-reduced-motion`; last page never wraps
- [ ] Dots: centered below, `mt-2.5`, 20×3px pills, 5px gaps,
      `bg-white/20`; active `#fff`; clicking jumps to that page; NO arrow
      buttons
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic buttons with aria-labels on dots,
      `aria-current`/`aria-selected` on the active dot, focus-visible
      rings; tests cover: five cards render, per-view counts at each
      breakpoint, dot jump + active-dot tracking, autoplay advance (fake
      timers) + reduced-motion pause, no-loop (last page cannot wrap),
      cross-fade, no arrows, mobile/desktop token differences
- [ ] `npm run verify:app -- capri` (or `scripts/verify-app.sh capri`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://capri.free.componentdock.com (200, correct
      content)
