# Template: Lido (Testimonials Carousel)

## Purpose

Lido is a single-section testimonials carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 04" website template design
(source: https://colorlib.com/wp/template/carousel-04/), built under a
DIFFERENT name (Lido — "a fashionable seaside resort or pleasure beach",
fitting the travel/destinations naming theme of the "Bootstrap Carousels
(20)" series renames) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **lido** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-04`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the FOURTH of the "Bootstrap Carousels (20)" series
renames (lineage established in the Wanderlust prep: carousel-01 →
wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
... — theme: travel / destinations; the name is thematic, the content is a
testimonials slider).

Lido lives in `apps/lido` and uses shared components from `packages/ui` (cn
at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 04" — the FOURTH of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 04"). A white-background single
  section showcasing a responsive **testimonials carousel**:
  `.ftco-section` (padding 7em 0) with a centered `.heading-section`
  ("Carousel #04") above a `.featured-carousel.owl-carousel` holding FIVE
  `.item > .testimony-wrap.d-flex` testimonial cards. No navbar, no hero, no
  footer — the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-04/`
  (HTTP 200, 9,959 bytes DOM; fetched 2026-08-15). NOTE: the standard
  preview path `https://preview.colorlib.com/theme/carousel-04/` 404s — the
  whole "Bootstrap Carousels" series lives under the `/theme/bootstrap/`
  prefix on the preview portal (same finding as the Bootstrap Calendars and
  Carousel 01/02/03 preps). Stylesheets: `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/style.css` (222,435 bytes — bundles
  Bootstrap 4.3.1 + the template's custom ftco styles at the tail) +
  ionicons 4.5.6 (CDN) + Google fonts via cf-fonts (Poppins 300/400/700 +
  **Playfair Display 400/400i/700 — loaded but UNUSED in this demo's CSS**,
  no playfair selectors in style.css; the recreation may skip it). Carousel
  driven by `js/main.js`:
  `$('.featured-carousel').owlCarousel({ center: true, loop: false,
autoplay: false, margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn',
nav: false, dots: true, autoplayHoverPause: false, items: 1,
navText: [ion-ios-arrow-back, ion-ios-arrow-forward],
responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } } })`
  — 1/2/3 cards per view at 0/600/1000px, cross-fade, NO autoplay, NO loop,
  NO arrows (nav: false), dots only, `center: true`.
- **Screenshot:** `carousel-04.jpg` (1200×972, viewed in browser) — stark
  white page, centered dark "Carousel #04" heading, THREE testimonial cards
  side by side: each a white rounded card (subtle border + soft shadow) with
  a circular male portrait avatar on the left, a large gold/mustard
  double-quote glyph floating above the text, identical dark-grey
  placeholder testimonial text, a bold dark name, and the role ("Businessman")
  in the same gold/mustard shade; three small dots centered below the row
  (middle darker = active). Aesthetic: clean, minimalist, professional
  testimonial strip.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1 (bundled
  into style.css) + Owl Carousel 2.3.4 + ionicons 4.5.6 + Google Poppins.
  The recreation must NOT copy any of this — build a pure-React paged
  carousel with lucide-react icons (Quote) and picsum placeholder avatars
  (the source's person photos are NOT copied).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` — single section, `padding: 7em 0`, white background.
   Inside `.container` > `.row`:
   - `.col-md-12.text-center` > `h2.heading-section.mb-5` — "Carousel #04"
     (28px, #000, Poppins, centered, `margin-bottom: 3rem`).
   - `.col-md-12` > `.featured-carousel.owl-carousel` (`.owl-stage-outer`
     has `padding-top: 1.5em` to make room for the quote glyphs that
     overflow the cards' top edge) — FIVE `.item` cards, each:
     - `.testimony-wrap.d-flex` — the card: `display: flex` (avatar +
       text row), `position: relative`, `padding: 30px 20px`,
       `border: 1px solid rgba(0,0,0,0.03)`, `border-radius: 10px`,
       `box-shadow: 0px 5px 21px -14px rgba(0,0,0,0.14)`.
       - `.user-img` — 90×90 circle, `border-radius: 50%`,
         `border: 4px solid #fff`, `background-image: url(images/person_N.jpg)`
         (cover, centered) — N = 1..5.
       - `.text.pl-4` — `width: calc(100% - 90px)`,
         `padding-left: 1.5rem` (Bootstrap pl-4):
         - `span.quote.d-flex.align-items-center.justify-content-center` —
           ABSOLUTE, `top: -65px; left: 25px` (floats ABOVE the card's top
           edge), holding `i.ion-ios-quote` (40px, `#afa939`).
         - `p` — the testimonial text (placeholder: "Far far away, behind
           the word mountains, far from the countries Vokalia and
           Consonantia, there live the blind texts." — IDENTICAL in all
           five cards; recreation should paraphrase per person).
         - `p.name` — the person's name (16px, weight 500, #000,
           `margin-bottom: 0`). Source names in order: Racky Henderson,
           Henry Dee, Mark Huff, Rodel Golez, Ken Bosh.
         - `span.position` — the role (13px, `#afa939`). Source roles are
           placeholder junk — four of five say "Businesswoman" and one says
           "Father"; recreation should use sensible roles (same kind: name +
           role).
   - Carousel furniture (Owl + style.css): `.owl-dots` — `text-align:
center`, `margin-top: 10px`; dots 10px circles, `margin: 5px`,
     `border-radius: 50%`, `background: rgba(0,0,0,0.1)`; ACTIVE dot
     `background: #afa939`. `nav: false` → NO prev/next arrows in this demo.

## Design tokens (from preview stylesheet `css/style.css`)

- **Brand accent:** `#afa939` (muted gold/mustard) — the quote glyph
  (`.quote i`, 40px), the role text (`.position`, 13px), and the ACTIVE
  carousel dot. Put in `@theme` and use via Tailwind classes.
- **Heading:** `.heading-section` — 28px, `color: #000`, Poppins,
  centered, `margin-bottom: 3rem` (`.mb-5`).
- **Card (`.testimony-wrap`):** `padding: 30px 20px`;
  `border: 1px solid rgba(0,0,0,0.03)`; `border-radius: 10px`;
  `box-shadow: 0px 5px 21px -14px rgba(0,0,0,0.14)` (Tailwind
  `shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)]`); inner layout flex row:
  avatar (90px) + text (`calc(100% - 90px)`, `pl-4` = 1.5rem padding-left).
- **Avatar (`.user-img`):** 90×90, `border-radius: 50%`,
  `border: 4px solid #fff`, cover background image.
- **Quote glyph (`.quote`):** absolute `top: -65px; left: 25px` (sticks
  out ABOVE the card), icon 40px, `#afa939`. The carousel stage needs
  `padding-top: 1.5em` so the glyph isn't clipped. Recreation: lucide
  `Quote` icon (fill or stroke, sized 40px, `#afa939`).
- **Name (`.name`):** 16px, `font-weight: 500`, `color: #000`,
  `margin-bottom: 0`.
- **Role (`.position`):** 13px, `color: #afa939`.
- **Dots (`.owl-dots`):** centered below the cards, `margin-top: 10px`;
  10px circles, `margin: 5px`, `border-radius: 50%`,
  `background: rgba(0,0,0,0.1)`; ACTIVE dot `background: #afa939`.
- **Section:** `.ftco-section` — `padding: 7em 0`, white page background.
- **Fonts:** `"Poppins", Arial, sans-serif` for the heading and card text
  (Google Poppins 300/400/500/700 via cf-fonts in the source). Load Poppins
  300, 400, 500, 700 via Google Fonts `<link>` in index.html (no font files
  copied). Playfair Display is loaded by the source page but has NO
  selectors in this demo's stylesheet — skip it.
- **Icons/images:** source uses the ionicons font for the quote glyph and
  local `images/person_*.jpg` photos. Recreation uses lucide-react `Quote`
  and picsum placeholder avatars
  (`https://picsum.photos/seed/lido-<n>/180/180`, circle-cropped). Avatar
  seeds should be SCREENED for portrait subjects (see the
  colorlib-template-replication skill's verified person picsum IDs: 1027,
  64, 823, 996) — do not ship arbitrary landscape seeds in person slots.

## Requirements

### Requirement: Page composition

The system SHALL render a single white-background section containing a
centered section heading and a testimonials carousel; the section SHALL
fill the page width with the carousel constrained to a centered container.

#### Scenario: Single section layout

- **GIVEN** the Lido page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be white
- **AND** the section SHALL contain a centered heading "Carousel #04" (or an
  equivalent paraphrase of the same kind, e.g. "Testimonials")
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, dark (near-black `#000`),
  centered
- **AND** the heading SHALL be followed by bottom margin (`.mb-5`, ~3rem)

### Requirement: Testimonial cards

The system SHALL render exactly five testimonial cards, each a white rounded
card (subtle border, soft shadow) with a circular avatar on the left, a
gold quote glyph floating above the card's top edge, a testimonial
sentence, the person's name, and their role in the brand gold.

#### Scenario: Five testimonial cards

- **GIVEN** the carousel is rendered
- **WHEN** the card items are inspected
- **THEN** five distinct testimonial cards SHALL exist (persons 1 … 5,
  paraphrased names/roles allowed, same kind: name + role)
- **AND** each card SHALL be white with `border-radius: 10px`, a
  `1px solid rgba(0,0,0,0.03)` border and the soft shadow
  `0px 5px 21px -14px rgba(0,0,0,0.14)`, `padding: 30px 20px`
- **AND** each card SHALL lay out as a flex row: a 90px circular avatar
  (`border-radius: 50%`, `border: 4px solid #fff`, cover image) on the left
  and the text block (`width: calc(100% - 90px)`, `padding-left: 1.5rem`)
  on the right

#### Scenario: Card content

- **GIVEN** a testimonial card is displayed
- **WHEN** its content is inspected
- **THEN** a quote glyph SHALL float above the card's top edge
  (absolute, `top: -65px; left: 25px`), sized 40px, colored `#afa939`
- **AND** the testimonial sentence SHALL differ per person (paraphrased,
  same kind of content — the source repeats one placeholder in all five
  cards)
- **AND** the name SHALL be 16px, weight 500, `#000`, `margin-bottom: 0`
- **AND** the role SHALL be 13px, `#afa939`
- **AND** the stage SHALL reserve ~1.5em of space above the cards so the
  quote glyphs are not clipped

### Requirement: Carousel pagination

The system SHALL display 1, 2, or 3 cards per view depending on breakpoint
(1 below 600px, 2 at 600–999px, 3 at 1000px+), with the active page
centered in the track; it SHALL NOT autoplay and SHALL NOT loop
(loop: false, autoplay: false in the source); page changes SHALL
cross-fade.

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

#### Scenario: No autoplay, no loop

- **GIVEN** the carousel is displayed (no user interaction)
- **WHEN** several seconds elapse
- **THEN** the displayed page SHALL NOT change (autoplay off)
- **AND** the carousel SHALL NOT wrap from the last page back to the first
  (loop off)

#### Scenario: Cross-fade transition

- **GIVEN** the carousel is changing pages
- **WHEN** the transition is observed
- **THEN** the outgoing page SHALL fade out while the incoming page fades in
  (opacity cross-fade, no horizontal slide motion)

#### Scenario: Centered page

- **GIVEN** the carousel is displayed at any breakpoint
- **WHEN** the visible page of cards is inspected
- **THEN** the page SHALL be centered within the track (source
  `center: true`; with 5 cards and 3 per view this yields two pages:
  cards 1–3, then cards 3–5 overlapping at card 3)

### Requirement: Dot indicators

The system SHALL render one dot per page centered below the cards; the
active page's dot SHALL be brand gold `#afa939`, the others
`rgba(0,0,0,0.1)`; activating a dot SHALL jump to that page.

#### Scenario: Dots render and track

- **GIVEN** the carousel is displayed
- **WHEN** the dots are inspected
- **THEN** one dot per page SHALL be rendered, CENTERED below the cards
  with ~10px top margin
- **AND** each dot SHALL be a 10px circle with 5px gaps
- **AND** the dot for the current page SHALL be `#afa939`
- **AND** the other dots SHALL be `rgba(0,0,0,0.1)`

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first page (cards 1–3)
- **WHEN** the last dot is activated
- **THEN** the last page of cards SHALL display (cards 3–5)
- **AND** the last dot SHALL become the active (gold) dot

### Requirement: No arrow navigation

The source demo disables arrows (`nav: false`) — the recreation SHALL NOT
render prev/next arrow buttons.

#### Scenario: No arrows

- **GIVEN** the Lido page is rendered
- **WHEN** the carousel area is inspected
- **THEN** no prev/next arrow buttons SHALL be present
- **AND** the carousel SHALL be navigable via the dot indicators only

### Requirement: Responsive behavior

The system SHALL keep the layout usable from mobile to desktop.

#### Scenario: Mobile

- **GIVEN** a viewport < 600px
- **WHEN** the page is rendered
- **THEN** one card SHALL show at a time with no horizontal overflow
- **AND** the dots SHALL remain tappable (≥ 44px effective hit area or
  clearly separated)

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 1000px
- **WHEN** the page is rendered
- **THEN** three cards SHALL show at a time, centered, with the 30px gutter
- **AND** the dots SHALL sit centered below with ~10px top margin

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Lido page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/lido` exists; package `@free-react-templates/lido`;
      `public/CNAME` = `lido.free.componentdock.com`; `homepage` =
      `https://lido.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/lido` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single white section (`py-[7em]`); centered heading (28px, Poppins,
      `#000`, `mb-12`/3rem) "Carousel #04" or paraphrase
- [ ] Five testimonial cards; each: white, radius 10px,
      `border-[1px] border-black/[0.03]`,
      `shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)]`, `px-5 py-7`; flex row:
      90px circular avatar (border 4px white, cover, picsum seed
      `lido-<n>`, screened for portraits) + text block (`pl-6`, ~1.5rem)
- [ ] Quote glyph: lucide `Quote`, 40px, `#afa939`, absolute
      `top-[-65px] left-[25px]`; stage reserves ~1.5em top padding
      (`pt-[1.5em]`) so glyphs aren't clipped
- [ ] Name 16px/500/`#000`; role 13px/`#afa939`; testimonial sentence
      paraphrased per person (5 distinct)
- [ ] Paged carousel: 1/2/3 cards per view at <600 / 600–999 / ≥1000px,
      30px gutter, page centered; NO autoplay, NO loop; cross-fade page
      transition; two pages at desktop (cards 1–3, then 3–5)
- [ ] Dots: centered below, `mt-2.5`, 10px circles, 5px gaps,
      `bg-black/10`; active `#afa939`; clicking jumps to that page; NO
      arrow buttons
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic buttons with aria-labels on dots,
      `aria-current`/`aria-selected` on the active dot, focus-visible
      rings; tests cover: five cards render, per-view counts at each
      breakpoint, dot jump + active-dot tracking, no-autoplay (fake
      timers, assert no advance), no-loop (last page cannot wrap),
      cross-fade, no arrows, mobile/desktop token differences
- [ ] `npm run verify:app -- lido` (or `scripts/verify-app.sh lido`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://lido.free.componentdock.com (200, correct
      content)
