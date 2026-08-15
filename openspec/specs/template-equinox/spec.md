# Template: Equinox (Single-Date Picker Widget)

## Purpose

Equinox is a minimal single-page date-picker widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 14" website template design
(source: https://colorlib.com/wp/template/calendar-14/), built under a
DIFFERENT name (Equinox — a calendar/date word, fitting a date-picker
widget) per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

New name **equinox** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`calendar-14`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Equinox lives in `apps/equinox` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 14" — one of the 20 "Bootstrap Calendars"
  demos: a SINGLE-date picker demo. Bootstrap 4.3.1 + jQuery 3.3.1 +
  **rome.js v2.1.22** (`js/rome.js` + `css/rome.css` — a different picker
  library than the pickadate demos Calendar 12/13 use) + icomoon CSS (linked
  but NO icon classes used in the DOM). The demo brands itself
  "Calendar #4" (the label is stale — it says #4 while the slug is
  calendar-14, same stale-label quirk as Calendar 11/12/13); the recreation
  brands itself **Equinox**.
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-14/` (reachable;
  HTTP 200 — 13,006 bytes; `<title>Calendar #4</title>`; the visible body is
  a handful of elements). The page has NO navbar, NO footer, NO images, NO
  icons.
  NOTE: the standard preview path
  `https://preview.colorlib.com/theme/calendar-14/` 404s (verified for the
  whole series) — the "Bootstrap Calendars" demos live under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  Kalends/Span/Metronome/Chronos preps).
- **DIFFERENT picker library than its siblings:** Calendar 12 (Kalends) and
  13 (Span) use pickadate (classic theme, square selected day, footer
  Today/Clear/Close buttons, dimmed or border shell, `#f78b65` accent).
  Calendar 14 uses **rome** (bevacqua/rome v2.1.22, "no jQuery!"): a
  borderless floating white popup, **CIRCULAR** selected day
  (`border-radius: 50%`), NO footer buttons, `#f67280` accent, ←/→ Unicode
  arrows for month nav, and `YYYY-MM-DD` input value format. Do NOT copy the
  pickadate shell/button/format values from the Kalends/Span specs — this
  recreation is a rome-style picker.
- **What main.js does:** `$(function() { rome(input, { time: false }); });`
  — ONE picker attached to the single input, date-only (no time selector).
  No min/max range wiring (unlike Span's From/To range logic), no custom
  formats. rome defaults apply: `autoClose: true` (picker closes when a day
  is picked), `autoHideOnClick: true` (picker closes on outside click),
  `monthsInCalendar: 1`, week starts Sunday, input value format
  `YYYY-MM-DD` (e.g. `2021-02-16`), month label format `MMMM YYYY` (e.g.
  "February 2021").
- **Screenshot:** `calendar-14.jpg` (1200×972, viewed in browser) — flat,
  minimalist, light-neutral page: heading "Calendar #4" centered above a
  narrow column with a "Select Date" label and a light-grey-bordered input,
  and a floating WHITE calendar popup anchored below the input: "February
  2021" header with black `<`/`>` triangles, grey "Su Mo Tu We Th Fr Sa"
  weekday row, a day grid (faint grey out-of-month days, black current-month
  days), the selected day (16) on a salmon-PINK (`#f67280`) **CIRCLE** with
  white text, and NO footer buttons. Neutral palette (white/greys/black)
  with ONE salmon accent. Distinctly different from the Calendar 12/13
  screenshots (circle vs square selection, no Today/Clear/Close footer).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — there is no navbar, no hero band, no footer
in the source demo:

1. Section (`.content`) — page background `#fff`, vertical padding `7rem 0`,
   content centered.
   - Container (`.container.text-left`) → centered row
     (`.row.justify-content-center`) → column (`.col-lg-3` ≈ 25% on lg+,
     full width below) →
     - `<h2 class="mb-5 text-center">` reading "Calendar #4" (20px,
       centered) — recreation: "Pick a Date" (paraphrase of the title
       label; content-kind preserved: a heading above the form).
     - `<form action="#" class="row">` → `.col-md-12` →
       - `.form-group` → `<label for="input_from">Select Date</label>` →
         `<input type="text" class="form-control" id="input">` (NO
         placeholder).
         NOTE a source quirk: the label's `for="input_from"` does NOT match
         the input's `id="input"` (stale reference — the label is not
         actually linked in the source). The recreation SHALL use a matching
         `for`/`id` pair (real label → input association, a11y fix).
2. Picker popup (`.rd-container`, injected by rome on input focus/click; NOT
   in static HTML) — white floating box, NO border, NO backdrop:
   - `.rd-container-attachment` (position absolute, anchored below input)
     → `.rd-container` (background `#fff`, `padding: 10px`,
     `text-align: center`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)`;
     `display: none` until opened):
     - `.rd-date` → `.rd-month` (one, `monthsInCalendar: 1`):
       - `.rd-back` `<button type="button">` (float left; `:before` content
         `\2190` "←") and `.rd-next` `<button type="button">` (float right;
         `:before` content `\2192` "→").
       - `.rd-month-label` — current month + year, e.g. "February 2021"
         (`MMMM YYYY`).
       - `table.rd-days` → `thead.rd-days-head` → `tr.rd-days-row` → seven
         `th.rd-day-head` (Su Mo Tu We Th Fr Sa — `weekdaysMin`).
       - `tbody.rd-days-body` → day cells `td.rd-day-body` (50×50px,
         clickable): current-month days, `.rd-day-prev-month` /
         `.rd-day-next-month` (adjacent-month days, faint), selected day
         `.rd-day-selected`, disabled days `.rd-day-disabled` (none by
         default here — no min/max configured).

## Design tokens (from `css/style.css`, `css/bootstrap.min.css`, `css/rome.css`)

- **Accent (brand) color:** `#f67280` (salmon-pink) — selected-day circle
  background, white text inside. Put in `@theme` and use via Tailwind
  classes.
- **Disabled-day text:** `#fcc` (light pink) — `.rd-day-disabled` (not used
  in this demo since no min/max, but style it for the component).
- **Out-of-month days:** `#999` (grey) — `.rd-day-prev-month` /
  `.rd-day-next-month`.
- **Page background:** `#fff`; headings/text `#000`; muted paragraph text
  `#b3b3b3` (weight 300, per `p` rule).
- **Fonts:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
"Helvetica Neue", Arial, "Noto Sans", sans-serif` for the whole page
  (Google Fonts Roboto via `<link>` in index.html — no font files copied).
- **Section rhythm:** `.content { padding: 7rem 0 }` (Tailwind `py-28`);
  Bootstrap `.container` max-width ~1140px; `.col-lg-3` ≈ 25% on lg+, full
  width below; heading `mb-5` (3rem) below it.
- **Heading:** `h2` 20px, `#000`, weight 400, centered.
- **Label:** Bootstrap 4 `.form-group label` — 12px, `#000`, weight 400,
  `margin-bottom: .5rem`, `display: inline-block`.
- **Input (.form-control, Bootstrap 4):** block, `width: 100%`,
  `height: calc(1.5em + .75rem + 2px)`, `padding: .375rem .75rem`,
  `font-size: 1rem`, `font-weight: 400`, `line-height: 1.5`,
  `color: #495057`, `background: #fff`, `border: 1px solid #ced4da`,
  `border-radius: .25rem`. **NO placeholder** in the source.
- **Input focus (DIFFERS from pickadate demos):** this demo's `style.css`
  strips the Bootstrap focus ring — `.form-control:active, .form-control:focus
{ outline: none; box-shadow: none; }`. NO `#80bdff` border, NO blue focus
  ring, and NO active-input border color change (rome adds no input class,
  unlike pickadate's `.picker__input--active`). Keep the focus treatment
  minimal (only a subtle accessible outline is acceptable; do NOT add the
  Bootstrap blue ring).
- **Picker shell (ROME — differs from pickadate classic):** `.rd-container`:
  `background: #fff`, `padding: 10px`, `text-align: center`,
  `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)` (soft drop shadow), **NO
  border** (the `border: 1px solid #333` is commented out in rome.css), **NO
  dimmed backdrop**, `display: none` until open, `position: absolute`
  (`.rd-container-attachment`) anchored below the input.
- **Picker header:** `.rd-month-label` — month name + year, `MMMM YYYY`
  format (e.g. "February 2021"), inline with nav buttons on both sides.
  `.rd-back` / `.rd-next`: `cursor: pointer`, `border: none`, `background:
none`, `padding: 0`, `margin: 0`, float left/right; their glyphs are
  `:before` content — `\2190` ("←") and `\2192` ("→") — no icons/images.
  `[disabled]` state exists (`cursor: default`) but never triggers here (no
  min/max).
- **Weekday row:** `th.rd-day-head` ×7 — Su, Mo, Tu, We, Th, Fr, Sa
  (`weekdaysMin`; Sunday first). No explicit styling in rome.css (inherits
  page font; default color).
- **Day grid:** `td.rd-day-body` — `cursor: pointer`, `text-align: center`,
  `width: 50px; height: 50px` (square cells); `.rd-days { margin-top: 20px }`
  above the grid.
- **Selected day:** `.rd-day-selected` — `background-color: #f67280; color:
#fff; border-radius: 50%` (**CIRCLE**). rome sets this class on the picked
  day's cell.
- **Month nav behavior:** clicking `.rd-next`/`.rd-back` changes the
  displayed month (`.rd-month-label` + grid update via `offsetCal.format(o.monthFormat)`).
- **Icons/images:** NONE — nav glyphs are CSS `:before` content (←/→). No
  image assets, no icon font. Use plain text glyphs or lucide-react
  ChevronLeft/ChevronRight only if needed (preferred: `←`/`→` characters to
  match 1:1).
- **Value format:** input receives `YYYY-MM-DD` (rome's date-only default,
  e.g. `2021-02-16`).

## Requirements

### Requirement: Page composition

The system SHALL render a single centered section on the white background
(`#fff`) with generous vertical padding, containing a heading and a
single-input date form; the column SHALL be narrow (≈25% on lg+, full width
below).

#### Scenario: Page layout

- **GIVEN** the Equinox page is rendered
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

The system SHALL render a centered heading above the form, paraphrasing the
source's "Calendar #4" title label (the source number is stale — do NOT
reproduce it).

#### Scenario: Heading text

- **GIVEN** the Equinox page is rendered
- **WHEN** the heading is displayed
- **THEN** an H2 SHALL read "Pick a Date"
- **AND** it SHALL be centered, 20px, `#000`, weight 400, with ~3rem
  spacing below (source `mb-5`)

### Requirement: Date input

The system SHALL render a single labeled text input, "Select Date", styled
like the Bootstrap 4 `.form-control` (grey border, rounded, full width of
the column) with NO placeholder, and with the demo's stripped focus
treatment (no Bootstrap blue focus ring).

#### Scenario: Input shell

- **GIVEN** the Equinox page is rendered
- **WHEN** the form is displayed
- **THEN** a text input labeled "Select Date" SHALL be present
- **AND** the label SHALL be a real `<label>` linked to the input via a
  matching `for`/`id` pair (clicking it focuses the input), 12px, `#000`,
  `margin-bottom: .5rem`
- **AND** the input SHALL have `border: 1px solid #ced4da`,
  `border-radius: .25rem`, `padding: .375rem .75rem`,
  `height: calc(1.5em + .75rem + 2px)`, `color: #495057`
- **AND** the input SHALL have no placeholder text

#### Scenario: Input focus

- **GIVEN** the Equinox page is rendered
- **WHEN** the input receives focus
- **THEN** the Bootstrap blue focus ring SHALL NOT appear (source
  `style.css` sets `outline: none; box-shadow: none` on
  `.form-control:focus`)
- **AND** the date picker SHALL open (see Picker open/close behavior)

### Requirement: Picker open/close behavior

The single input SHALL open the date picker when focused or clicked, and
close it when a day is selected (rome `autoClose: true`) or when clicking
outside the picker (rome `autoHideOnClick: true`). The input's value SHALL
persist when the picker closes without a selection.

#### Scenario: Opens on focus/click

- **GIVEN** the Equinox page is rendered and the picker is closed
- **WHEN** the input is focused or clicked
- **THEN** the picker SHALL be visible, anchored below the input

#### Scenario: Closes on day select

- **GIVEN** the picker is open
- **WHEN** a day cell is clicked
- **THEN** the picker SHALL close
- **AND** the input SHALL contain the selected date in `YYYY-MM-DD` format
  (e.g. "2021-02-16")

#### Scenario: Closes on outside click

- **GIVEN** the picker is open
- **WHEN** a click lands outside the picker (and outside the input)
- **THEN** the picker SHALL close
- **AND** the input SHALL keep its current value

### Requirement: Picker shell

The picker SHALL render as a floating white box (ROME shell: `background:
#fff`, `padding: 10px`, `text-align: center`, `box-shadow: 0 15px 30px 0
rgba(0,0,0,.2)`, NO border, NO dimmed backdrop) anchored below the input.

#### Scenario: Shell appearance

- **GIVEN** the picker is open
- **WHEN** the popup is inspected
- **THEN** it SHALL have a white background and `10px` padding
- **AND** it SHALL have the soft drop shadow `0 15px 30px 0 rgba(0,0,0,.2)`
- **AND** it SHALL have NO border
- **AND** it SHALL NOT dim or cover the page behind it (no backdrop)

### Requirement: Picker header and month navigation

The picker SHALL render a header with the current month name and year
(`MMMM YYYY`, e.g. "February 2021") and prev/next navigation buttons on the
left/right whose glyphs are `←` / `→`.

#### Scenario: Header content

- **GIVEN** the picker is open
- **WHEN** the header is inspected
- **THEN** it SHALL show the current month name and year (e.g. "February
  2026")
- **AND** a prev control SHALL sit on the left and a next control on the
  right, each a borderless button with `cursor: pointer` showing `←` / `→`

#### Scenario: Month navigation

- **GIVEN** the picker is open in a given month
- **WHEN** the next control is activated
- **THEN** the header SHALL show the following month and the day grid SHALL
  update accordingly
- **AND** when the prev control is activated the header SHALL show the
  previous month and the grid SHALL update accordingly
- **AND** navigation SHALL always be enabled (no min/max configured)

### Requirement: Weekday row and day grid

The picker SHALL render a weekday row (Su Mo Tu We Th Fr Sa — Sunday first)
and a single-month day grid of square 50×50px cells, with adjacent-month
days shown faintly (`#999`).

#### Scenario: Weekday labels

- **GIVEN** the picker is open
- **WHEN** the weekday row is inspected
- **THEN** it SHALL contain the seven weekday abbreviations Su, Mo, Tu, We,
  Th, Fr, Sa in order, starting with Sunday

#### Scenario: Current-month days

- **GIVEN** the picker is open in a given month
- **WHEN** the day grid is inspected
- **THEN** each day of the current month SHALL be rendered as a clickable
  cell of 50×50px, centered
- **AND** days from the previous/next month SHALL fill the leading/trailing
  cells and SHALL be styled `#999` (faint)

#### Scenario: Day selection

- **GIVEN** the picker is open
- **WHEN** a current-month day cell is clicked
- **THEN** the cell SHALL be styled with `background: #f67280; color: #fff;
border-radius: 50%` (a CIRCLE, not a square)
- **AND** the picker SHALL close with the input value set to `YYYY-MM-DD`
  (e.g. "2021-02-16")
- **AND** selecting a different day on a later open SHALL move the circle to
  that day (only one selected day at a time)

### Requirement: Component Dock footer link

The system SHALL render a small footer line linking to Component Dock, per
monorepo convention (replaces the source demo's absence of any footer).

#### Scenario: Footer link

- **GIVEN** the Equinox page is rendered
- **WHEN** the page bottom is inspected
- **THEN** a footer link reading "Component Dock" SHALL link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/equinox` exists; package `@free-react-templates/equinox`;
      `public/CNAME` = `equinox.free.componentdock.com`; `homepage` =
      `https://equinox.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto; no font/image/icon assets
      copied from ColorLib; no rome/jQuery/Bootstrap dependency added
      (React date-grid component instead)
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/equinox` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Page background `#fff`, section `py-28`, content centered; column
      ≈25% on lg+, full width below; Roboto body font
- [ ] H2 "Pick a Date" — centered, 20px, `#000`, `mb-5` (3rem below); do
      NOT reproduce the stale "Calendar #4" label
- [ ] Real `<label>` "Select Date" with MATCHING `for`/`id` (fix the source
      quirk), input styled `#ced4da` border, `.25rem` radius, `#495057`
      text, no placeholder; focus shows NO Bootstrap blue ring (source
      strips it)
- [ ] Picker opens on input focus/click, anchored below the input; closes
      on day select (`autoClose`) and on outside click (`autoHideOnClick`);
      value persists when closed without selection
- [ ] Picker shell is the ROME shell: white bg, 10px padding, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, NO border, NO backdrop (do NOT copy
      the pickadate classic/default shell values from Kalends/Span/Metronome)
- [ ] Header: month+year `MMMM YYYY` (e.g. "February 2026"), `←`/`→`
      borderless nav buttons (left/right); navigation always enabled and
      updates header + grid
- [ ] Weekday row: Su Mo Tu We Th Fr Sa (Sunday first)
- [ ] Day grid: single month, 50×50px centered cells; out-of-month days
      `#999`; selected day is a CIRCLE `#f67280` bg + white text
      (`border-radius: 50%`); only one selected day at a time
- [ ] Input value format `YYYY-MM-DD` (e.g. "2021-02-16")
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; tests mock the clock (`vi.setSystemTime`) for
      deterministic month-grid assertions, then `vi.useRealTimers()`;
      a11y: semantic elements, real label association, focus-visible rings
- [ ] `npm run verify:app -- equinox` (or `scripts/verify-app.sh equinox`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://equinox.free.componentdock.com (200, correct
      `<title>`, bundle hash matches local build)
