# Template: Chronos (Bootstrap Calendar / Date Display)

## Purpose

Chronos is a minimal single-page calendar / "today's date" display template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 10" website template design
(source: https://colorlib.com/wp/template/calendar-10/), built under a
DIFFERENT name (Chronos — Greek personification of time, fitting a date/clock
widget) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **chronos** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`calendar-10`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Chronos lives in `apps/chronos` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 10" — one of the 20 "Bootstrap Calendars"
  demos: a single centered "today" date card with a stacked day / month /
  date / year layout (Bootstrap 4.3.1 + jQuery + Font Awesome 4.7; the DOM
  uses NO icons and NO nav — it is a pure date widget demo). The demo brands
  itself "Calendar #10"; the recreation brands itself **Chronos**.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-10/`
  (reachable; DOM fetched — 3.2KB HTML + 220KB `css/style.css` (Bootstrap
  4.3.1 + ~90 lines of custom ftco styles at the tail) — and the design
  confirmed visually via the screenshot in a browser).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/calendar-10/`
  404s — the whole "Bootstrap Calendars" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding pattern as
  the Astro `-colorlib.pages.dev` series; `products.js` has NO calendar
  entries at all).
- **Screenshot:** `calendar-10.jpg` (1200×972 AVIF, viewed in browser) —
  very clean minimalist design on a pale grey-blue background: the heading
  "Calendar #10" centered, and one stacked vertical card: a mint-green top
  band with white uppercase "SATURDAY", a white middle with a thin "December"
  and a huge thin black "19th", and a mint-green bottom band with white
  "2020". Subtle soft drop shadow under the card. No other page furniture.
- **Stack of the source:** Bootstrap 4.3.1 grid/utilities + jQuery +
  Font Awesome 4.7 + custom ftco CSS. Recreation must NOT copy any of this;
  use the monorepo stack + lucide-react icons (none needed here) + no images
  at all (this design is pure CSS).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — there is no navbar, no hero band, no footer
in the source demo:

1. Section (`.ftco-section`) — page background `#f8f9fd`, vertical padding
   `7em 0`, content centered.
   - Container (`.container`) → centered row (`.row.justify-content-center`)
     → heading column (`.col-md-6.text-center.mb-5`) → `<h2 class="heading-section">`
     reading "Calendar #10" (28px, `#000`, Lato) — recreation: "Today"
     (paraphrase of the title label; content-kind preserved).
   - Card column (`.col-md-4`) → the date card (`.today`, width 100% of a
     1/3 column on md+, full width below md):
     1. `.today-piece.top.day` — weekday name, e.g. "Sunday" — white,
        uppercase, letterspaced text on the brand green band.
     2. `.today-piece.middle.month` — month name, e.g. "August" — thin,
        large text on white.
     3. `.today-piece.middle.date` — day of month with ordinal suffix, e.g.
        "15th" — the hero element: very large thin black text on white.
     4. `.today-piece.bottom.year` — e.g. "2026" — white, uppercase,
        letterspaced text on the brand green band.

The four pieces stack flush into one rounded card (the top band has no
bottom corners, the bottom band no top corners, the two middle pieces have
no rounding at all), and `js/main.js` fills every piece from the client's
current date at load time.

## Design tokens (from preview stylesheet `css/style.css`)

- **Brand color:** `#52de97` (mint green) — day band, year band, and link
  color (`.bg-primary`). Put in `@theme` and use via Tailwind classes.
- **Page background:** `#f8f9fd` (pale blue-grey); body text `gray`
  (`#808080`); card pieces `#fff`; heading/card date text `#000`.
- **Fonts:** `"Lato", Arial, sans-serif` for the whole page (Google Fonts
  Lato supports weights 100–900; source @font-face only shipped 300/400/700
  so 100/200/500 weights render as the nearest loaded weight). Load Lato
  100, 300, 400, 700, 900 via Google Fonts `<link>` in index.html (no font
  files copied).
- **Card:** `.today` — `box-shadow: 0 15px 30px -16px rgba(0,0,0,0.3)`
  (soft drop shadow, Tailwind: `shadow-[0_15px_30px_-16px_rgba(0,0,0,0.3)]`);
  pieces `border-radius: 0.25rem` with the outer corners squared as
  described above.
- **Day/year bands:** `font-size: 0.65em` (of the piece's 1.25em base),
  `font-weight: 500`, `letter-spacing: 0.35em`, `text-transform: uppercase`,
  `color: #fff`, `background: #52de97`; padding `1.6rem` per piece.
- **Month piece:** `font-size: 1.5em`, `font-weight: 200` (thin),
  `padding-top: 1.75rem`, `padding-bottom: 0`.
- **Date piece:** `font-size: 3em`, `font-weight: 100` (thin — the
  screenshot's elegant large numeral), `color: #000`,
  `padding-top: 0`, `padding-bottom: 1.75rem`.
- **Heading:** `.heading-section` 28px, `#000`, weight 400, centered;
  page `line-height: 1.8`, base `font-size: 16px`.
- **Section rhythm:** `padding: 7em 0`; Bootstrap `.container` max-width
  ~1140px; `.col-md-4` = 33.33% on md+ (card centers via
  `.justify-content-center`), full width below.
- **Icons/images:** NONE in the source DOM — this template needs no icon
  library and no images (pure CSS card). Do not add decorative assets.

## Requirements

### Requirement: Page composition

The system SHALL render a single centered section on the pale blue-grey
background (`#f8f9fd`) with generous vertical padding, containing a heading
and the date card.

#### Scenario: Page layout

- **GIVEN** the Chronos page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#f8f9fd`
- **AND** the section SHALL have vertical padding of `7em` (Tailwind `py-28`)
- **AND** the content SHALL be horizontally centered
- **AND** the body font SHALL be Lato (via Google Fonts link in index.html)

### Requirement: Section heading

The system SHALL render a centered heading above the card, paraphrasing the
source's "Calendar #10" title label.

#### Scenario: Heading text

- **GIVEN** the Chronos page is rendered
- **WHEN** the heading is displayed
- **THEN** an H2 SHALL read "Today"
- **AND** it SHALL be centered, 28px, `#000`, weight 400

### Requirement: Date card structure

The system SHALL render a single stacked card (`max-width` ≈ 1/3 of the
container on md+ screens, full width on mobile, centered) made of four
flush vertical pieces: day band, month, date, year band, with the card
outline rounded `0.25rem` and a soft drop shadow `0 15px 30px -16px
rgba(0,0,0,0.3)`.

#### Scenario: Card shell

- **GIVEN** the Chronos page is rendered
- **WHEN** the card is displayed
- **THEN** the card SHALL be centered and narrower than the heading column
  (≈33% width on desktop, full width on mobile)
- **AND** the card SHALL have the soft drop shadow
- **AND** the four pieces SHALL stack flush (no gaps) with the top piece's
  bottom corners square and the bottom piece's top corners square

#### Scenario: Day band

- **GIVEN** the card is rendered
- **WHEN** the top piece is inspected
- **THEN** it SHALL show the current weekday name in full (e.g. "Saturday")
- **AND** the text SHALL be white, uppercase, `letter-spacing: 0.35em`, on
  the brand green `#52de97` background

#### Scenario: Month piece

- **GIVEN** the card is rendered
- **WHEN** the month piece is inspected
- **THEN** it SHALL show the current month name in full (e.g. "August")
- **AND** the text SHALL be thin (weight 200), ~1.5× the base size, `#000`,
  on white

#### Scenario: Date piece

- **GIVEN** the card is rendered
- **WHEN** the date piece is inspected
- **THEN** it SHALL show the current day of month with its ordinal suffix
  (e.g. "15th")
- **AND** the text SHALL be the largest element (~3em), very thin (weight
  100), `#000`, on white

#### Scenario: Year band

- **GIVEN** the card is rendered
- **WHEN** the bottom piece is inspected
- **THEN** it SHALL show the current four-digit year (e.g. "2026")
- **AND** the text SHALL be white, uppercase, `letter-spacing: 0.35em`, on
  the brand green `#52de97` background

### Requirement: Date logic

The system SHALL compute all four values from the client's current date at
render time (the source fills the pieces with jQuery from `new Date()`).

#### Scenario: Values match today

- **GIVEN** the system clock is fixed (tests mock the date)
- **WHEN** the page renders
- **THEN** the day piece SHALL equal the weekday name of that date
- **AND** the month piece SHALL equal the month name of that date
- **AND** the date piece SHALL equal the day-of-month with the correct
  ordinal suffix (1st, 2nd, 3rd, 4th…, 11th–13th stay "th")
- **AND** the year piece SHALL equal the full year

### Requirement: Responsive behavior

The system SHALL keep the card centered and readable from mobile to desktop
(the source column is `col-md-4`, i.e. 1/3 width from the md breakpoint up,
full width below).

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the card SHALL occupy about one third of the container width,
  centered

#### Scenario: Mobile

- **GIVEN** a viewport < 768px
- **WHEN** the page is rendered
- **THEN** the card SHALL span the full content width
- **AND** no horizontal overflow SHALL occur

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Chronos page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/chronos` exists; package `@free-react-templates/chronos`;
      `public/CNAME` = `chronos.free.componentdock.com`; `homepage` =
      `https://chronos.free.componentdock.com`
- [ ] index.html loads Google Fonts Lato (weights 100, 300, 400, 700, 900);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/chronos` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Page background `#f8f9fd`, section `py-28`, content centered
- [ ] H2 "Today" — centered, 28px, `#000`
- [ ] Card: ~1/3 width centered on md+, full width on mobile; shadow
      `0 15px 30px -16px rgba(0,0,0,0.3)`; radius `0.25rem`; flush stack
- [ ] Day band: weekday name, white uppercase `tracking-[0.35em]` on
      `#52de97`
- [ ] Month: full month name, thin (font-light/extralight), `#000`, white bg
- [ ] Date: "15th"-style ordinal, ~3em, thin, `#000`
- [ ] Year band: 4-digit year, white uppercase `tracking-[0.35em]` on
      `#52de97`
- [ ] All four values derive from the current date at render time; tests
      mock the clock (`vi.setSystemTime`) for deterministic assertions
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic elements, focus-visible rings
- [ ] `npm run verify:app -- chronos` (or `scripts/verify-app.sh chronos`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://chronos.free.componentdock.com (200, correct
      `<title>`, bundle hash matches local build)
