# Template: Metronome (Date Picker Widget)

## Purpose

Metronome is a minimal single-page date-picker widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 11" website template design
(source: https://colorlib.com/wp/template/calendar-11/), built under a
DIFFERENT name (Metronome — a timekeeping instrument, fitting a date/clock
widget) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **metronome** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`calendar-11`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Metronome lives in `apps/metronome` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 11" — one of the 20 "Bootstrap Calendars"
  demos: a date-picker demo. Bootstrap 4.3.1 + jQuery 3.3.1 + pickadate.js
  (`picker.js` + `picker.date.js`) + Font Awesome/icomoon CSS (linked but NO
  icon classes used in the DOM). The demo brands itself "Calendar #1 (Date
  Picker)" (the label is stale — it says #1 while the slug is calendar-11);
  the recreation brands itself **Metronome**.
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-11/` (reachable;
  HTTP 200 — 13KB HTML dominated by the inline cf-fonts @font-face block;
  the visible body is a handful of elements). The page has NO navbar, NO
  footer, NO images, NO icons.
  NOTE: the standard preview path `https://preview.colorlib.com/theme/calendar-11/`
  404s (verified) — the whole "Bootstrap Calendars" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  Chronos prep; `products.js` has no calendar entries).
- **Screenshot:** `calendar-11.jpg` (1200×972 AVIF, viewed in browser) —
  flat, minimalist, light-neutral page: the heading "Calendar #1 (Date
  Picker)" centered above one light-grey-bordered input ("Pick A Date"
  placeholder), and below it a floating WHITE rounded calendar popup with a
  subtle drop shadow: header "February 2021" with black `<`/`>` triangles,
  a grey small-caps weekday row (Sun–Sat), a day grid with faint grey
  out-of-month days, the selected day (16) on a salmon/orange
  (`#f78b65`) background, and a footer row of three text buttons —
  Today (small triangle icon), Clear (dash icon), Close (×) — with red
  accent icons. Neutral palette (white/greys/black) with ONE salmon accent.
- **Stack of the source:** Bootstrap 4.3.1 grid/utilities + jQuery +
  pickadate.js + custom `style.css` (Roboto body, `#fff` bg). The static
  HTML contains ONLY the input — pickadate injects the whole popup DOM
  (header/table/footer) at runtime. Recreation must NOT copy any of this;
  use the monorepo stack + a small React date-grid component (no new
  dependency; `new Date()` + Intl, or a tiny helper set — see tasks.md).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — there is no navbar, no hero band, no footer
in the source demo:

1. Section (`.content`) — page background `#fff`, vertical padding `7rem 0`,
   content centered.
   - Container (`.container.text-left`) → centered row
     (`.row.justify-content-center`) → narrow column (`.col-lg-3` ≈ 25% on
     lg+, full width below) →
     - `<h2 class="mb-5 text-center">` reading "Calendar #1 (Date Picker)"
       (20px, centered) — recreation: "Pick a Date" (paraphrase of the
       title label; content-kind preserved: a heading above the input).
     - `<form>` → `.form-group` → text `<input class="form-control">`
       (`id="pick-date"`, `placeholder="Pick A Date"`).
2. Picker popup (`.picker`, injected by pickadate on input focus; NOT in
   static HTML) — white rounded box over a `rgba(0,0,0,.32)` backdrop:
   - `.picker__header` — month + year, prev/next CSS-triangle nav.
   - `.picker__table` — weekday row (Sun–Sat) + 6×7 day grid (out-of-month
     days shown faint).
   - `.picker__footer` — Today / Clear / Close buttons.

## Design tokens (from `css/style.css`, `css/bootstrap.min.css`, `css/default.css`, `css/default.date.css`)

- **Accent (brand) color:** `#f78b65` (salmon/orange) — selected day
  background, today corner-triangle, focused-select/highlight borders.
  Put in `@theme` and use via Tailwind classes.
- **Hover fill:** `#f2d1c5` (soft peach) — nav triangles, highlighted/
  hovered days, footer-button hover.
- **Input active border:** `#0089ec` (blue) while the picker is open
  (`.picker__input--active`).
- **Page background:** `#fff`; body text `#000`; muted text `#999`
  (weekday labels, year); out-of-focus days `#ddd`; disabled cells
  `#f5f5f5` bg; placeholder/paragraph grey `#b3b3b3` (weight 300).
- **Fonts:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
"Helvetica Neue", Arial, sans-serif` for the whole page (Google Fonts
  Roboto 300/400/500/700 via `<link>` in index.html — no font files copied).
- **Section rhythm:** `.content { padding: 7rem 0 }` (Tailwind `py-28`);
  Bootstrap `.container` max-width ~1140px; `.col-lg-3` = 25% on lg+,
  full width below; heading `mb-5` (3rem) below it.
- **Heading:** `h2` 20px, `#000`, weight 400, centered.
- **Input (.form-control, Bootstrap 4):** block, `width: 100%`,
  `height: calc(1.5em + .75rem + 2px)`, `padding: .375rem .75rem`,
  `font-size: 1rem`, `font-weight: 400`, `line-height: 1.5`,
  `color: #495057`, `background: #fff`, `border: 1px solid #ced4da`,
  `border-radius: .25rem`; focus → `border-color: #80bdff`,
  `box-shadow: 0 0 0 .2rem rgba(0,123,255,.25)`. Placeholder grey.
- **Picker box:** `background: #fff`; `border: 1px solid #777` with
  `border-top-color: #898989`; `border-radius: 5px 5px 0 0` (bottom corners
  open); `box-shadow: 0 12px 36px 16px rgba(0,0,0,.24)`; width
  `min-width: 256px; max-width: 666px`; backdrop `rgba(0,0,0,.32)`.
- **Picker header:** month+year `font-weight: 500`, inline; year `#999`,
  `.8em`, italic; nav triangles are pure CSS borders (black), hover
  `background: #f2d1c5`.
- **Weekday row:** `.75em`, `#999`, `font-weight: 500`, `padding-bottom:
.25em` (`.5em` on tall screens).
- **Day cells:** `font-weight: 200`, `padding: .3125em 0`; today = small
  `#f78b65` corner triangle (`.5em` border, top-right); selected =
  `background: #f78b65; color: #fff`; highlighted/hover = `background:
#f2d1c5`; outfocus `color: #ddd`; disabled `background: #f5f5f5`.
- **Footer buttons (Today/Clear/Close):** `border: 1px solid #fff`,
  `background: #fff`, `.8em`, `padding: .66em 0`, `font-weight: 700`,
  `width: 33%`, inline-block; hover `background: #f2d1c5`; focus outline
  `#f78b65`. Icons: Today = `#f78b65` triangle, Clear = `#e20` 3px line,
  Close = `×` glyph `#777`.
- **Icons/images:** NONE beyond the CSS-triangle/glyph accents above — no
  image assets, no icon font. Use lucide-react ONLY if needed for the nav
  triangles/× (preferred: CSS borders + `×` text to match 1:1).

## Requirements

### Requirement: Page composition

The system SHALL render a single centered section on the white background
(`#fff`) with generous vertical padding, containing a heading and a date
input; the column SHALL be narrow (≈25% on lg+, full width below).

#### Scenario: Page layout

- **GIVEN** the Metronome page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#fff`
- **AND** the section SHALL have vertical padding of `7rem` (Tailwind
  `py-28`)
- **AND** the content SHALL be horizontally centered
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html)

#### Scenario: Column width

- **GIVEN** a viewport ≥ 992px
- **WHEN** the page is rendered
- **THEN** the content column SHALL occupy about 25% of the container
  width, centered

#### Scenario: Mobile column

- **GIVEN** a viewport < 992px
- **WHEN** the page is rendered
- **THEN** the content SHALL span the full width
- **AND** no horizontal overflow SHALL occur

### Requirement: Section heading

The system SHALL render a centered heading above the input, paraphrasing
the source's "Calendar #1 (Date Picker)" title label.

#### Scenario: Heading text

- **GIVEN** the Metronome page is rendered
- **WHEN** the heading is displayed
- **THEN** an H2 SHALL read "Pick a Date"
- **AND** it SHALL be centered, 20px, `#000`, weight 400, with ~3rem
  spacing below (source `mb-5`)

### Requirement: Date input

The system SHALL render a single text input labeled by its placeholder
"Pick A Date", styled like the Bootstrap 4 `.form-control` (grey border,
rounded, full width of the column).

#### Scenario: Input shell

- **GIVEN** the Metronome page is rendered
- **WHEN** the input is displayed
- **THEN** an input of type text SHALL be present with
  `placeholder="Pick A Date"`
- **AND** it SHALL span the full column width
- **AND** it SHALL have `border: 1px solid #ced4da`, `border-radius:
.25rem`, `padding: .375rem .75rem`, `height: calc(1.5em + .75rem + 2px)`,
  `color: #495057`

#### Scenario: Input focus

- **GIVEN** the Metronome page is rendered
- **WHEN** the input receives focus
- **THEN** its border SHALL turn `#80bdff` with the soft blue focus ring
  `0 0 0 .2rem rgba(0,123,255,.25)`
- **AND** the date picker SHALL open (see Picker requirements)

### Requirement: Picker open/close behavior

The system SHALL open the date picker when the input is focused, close it
when a day is selected, when Close is pressed, when Esc is pressed, or when
the backdrop is clicked. While open, the input border SHALL be `#0089ec`
(source `.picker__input--active`).

#### Scenario: Opens on focus

- **GIVEN** the Metronome page is rendered and the picker is closed
- **WHEN** the input is focused
- **THEN** the picker SHALL be visible
- **AND** the input border SHALL be `#0089ec`

#### Scenario: Closes on day select

- **GIVEN** the picker is open
- **WHEN** a day cell is clicked
- **THEN** the picker SHALL close
- **AND** the input SHALL contain the selected date in the source's
  pickadate default format ("d mmmm, yyyy", e.g. "16 February, 2026")

#### Scenario: Closes on Close / Esc / backdrop

- **GIVEN** the picker is open
- **WHEN** the Close footer button is clicked, OR the Esc key is pressed,
  OR the dimmed backdrop is clicked
- **THEN** the picker SHALL close
- **AND** the input SHALL keep its current value

### Requirement: Picker shell and header

The system SHALL render the picker as a white rounded box (`border-radius:
5px 5px 0 0`, `box-shadow: 0 12px 36px 16px rgba(0,0,0,.24)`, max-width
666px) over a `rgba(0,0,0,.32)` backdrop, with a header showing the current
month and year plus prev/next navigation.

#### Scenario: Header content

- **GIVEN** the picker is open
- **WHEN** the header is inspected
- **THEN** it SHALL show the current month name and year (e.g. "February
  2026")
- **AND** the year SHALL be styled `#999`, italic, `.8em`
- **AND** prev/next controls SHALL be present on the left/right (black
  triangles, hover `background: #f2d1c5`)

#### Scenario: Month navigation

- **GIVEN** the picker is open in a given month
- **WHEN** the next control is activated
- **THEN** the header SHALL show the following month and the day grid
  SHALL update accordingly
- **AND** when the prev control is activated the header SHALL show the
  previous month and the grid SHALL update accordingly

### Requirement: Weekday row and day grid

The system SHALL render a weekday row (Sun–Sat) and a 6×7 day grid for the
displayed month, with out-of-month days from the adjacent months shown
faintly.

#### Scenario: Weekday labels

- **GIVEN** the picker is open
- **WHEN** the table header row is inspected
- **THEN** it SHALL contain the seven weekday abbreviations Sun through
  Sat
- **AND** they SHALL be `#999`, `.75em`, weight 500

#### Scenario: Day cells

- **GIVEN** the picker is open
- **WHEN** the day grid is inspected
- **THEN** each day SHALL be a `font-weight: 200` cell
- **AND** days of the displayed month SHALL be `#000` on white
- **AND** out-of-month days SHALL be `#ddd`

#### Scenario: Today marker

- **GIVEN** the picker is open
- **WHEN** today's cell is inspected
- **THEN** it SHALL carry a small `#f78b65` corner triangle in its top-right

#### Scenario: Selected day

- **GIVEN** the picker is open with a selected date
- **WHEN** the selected cell is inspected
- **THEN** it SHALL have `background: #f78b65` and `color: #fff`
- **AND** cells hovered with the pointer SHALL get `background: #f2d1c5`

### Requirement: Picker footer buttons

The system SHALL render a footer row of three equal-width text buttons —
Today, Clear, Close — each `33%` width with `background: #fff` and hover
`background: #f2d1c5`, with the source's small accent icons.

#### Scenario: Today

- **GIVEN** the picker is open
- **WHEN** Today is activated
- **THEN** the grid SHALL jump to the current month with today highlighted
- **AND** the input SHALL be filled with today's date ("d mmmm, yyyy")

#### Scenario: Clear

- **GIVEN** the picker is open with a value set
- **WHEN** Clear is activated
- **THEN** the input SHALL be emptied

#### Scenario: Close

- **GIVEN** the picker is open
- **WHEN** Close is activated
- **THEN** the picker SHALL close (see open/close requirements)

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Metronome page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/metronome` exists; package `@free-react-templates/metronome`;
      `public/CNAME` = `metronome.free.componentdock.com`; `homepage` =
      `https://metronome.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (300, 400, 500, 700); no
      font/image/icon assets copied from ColorLib; no pickadate/jQuery/
      Bootstrap dependency added (React date-grid helper instead)
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/metronome` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Page background `#fff`, section `py-28`, content centered; column
      ≈25% on lg+, full width below; Roboto body font
- [ ] H2 "Pick a Date" — centered, 20px, `#000`, `mb-5` (3rem below)
- [ ] Input: placeholder "Pick A Date", `#ced4da` border, `.25rem` radius,
      `#495057` text; focus ring `0 0 0 .2rem rgba(0,123,255,.25)` +
      `#80bdff` border
- [ ] Picker opens on input focus (input border → `#0089ec`); closes on
      day select / Close / Esc / backdrop click; value persists
- [ ] Picker shell: white, radius `5px 5px 0 0`, shadow
      `0 12px 36px 16px rgba(0,0,0,.24)`, max-width 666px, backdrop
      `rgba(0,0,0,.32)`
- [ ] Header: current month+year, year italic `#999` `.8em`, prev/next
      black triangles (CSS borders) with `#f2d1c5` hover; navigation
      updates grid + header
- [ ] Weekday row Sun–Sat: `#999`, `.75em`, weight 500
- [ ] Day grid 6×7: current-month days `#000` weight 200, out-of-month
      `#ddd`; today corner triangle `#f78b65`; selected `#f78b65` bg +
      white text; hover `#f2d1c5`
- [ ] Footer buttons Today/Clear/Close: 33% width, white bg, `#f2d1c5`
      hover; Today jumps to current month + fills input, Clear empties
      input, Close closes picker; input value format "d mmmm, yyyy"
      (e.g. "16 February, 2026")
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; tests mock the clock (`vi.setSystemTime`) for
      deterministic month-grid assertions, then `vi.useRealTimers()`;
      a11y: semantic elements, aria-expanded on the input when picker
      open, Esc handling, focus-visible rings
- [ ] `npm run verify:app -- metronome` (or `scripts/verify-app.sh
    metronome`) passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://metronome.free.componentdock.com (200, correct
      `<title>`, bundle hash matches local build)
