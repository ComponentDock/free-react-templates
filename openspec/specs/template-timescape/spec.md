# Template: Timescape (Calendar / Month-Grid Event Calendar)

## Purpose

Timescape is a single-page month-calendar template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 19" website template design
(source: https://colorlib.com/wp/template/calendar-19/), built under a
DIFFERENT name (Timescape — "a view across time", fitting a month event
calendar, and the natural successor to the series' prior renames: chronos,
metronome, kalends, span, equinox, interval, lunar, epoch, dyad) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

New name **timescape** is a single lowercase kebab-case word, differs from
the ColorLib source slug (`calendar-19`), and collides with nothing in
`apps/`, `openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Timescape lives in `apps/timescape` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 19" — one of the 20 "Bootstrap Calendars"
  demos (page title "Calendar #9"; the series numbering is inconsistent —
  slug is calendar-19, page title says "Calendar #9"). A single centered
  page holding a FullCalendar v4 MONTH-GRID event calendar (dayGrid plugin
  only — no week/day views, no time grid, no list; the toolbar shows ONLY
  title + today/prev/next buttons, no view switcher). It is the event-
  calendar variant of the series, distinct from the date-picker variants
  (calendar-10/chronos … calendar-18/dyad) — this one renders a full month
  of EVENT BLOCKS with drag/resize (editable: true), "+N more" overflow
  links (eventLimit: true), and a click-popover listing the day's events.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-19/`
  (reachable; DOM fetched — 14.5KB HTML + `css/style.css` (1.1KB custom:
  body bg + `#calendar` max-width 900px + `.fc-view-container` white card +
  shadow) + `css/bootstrap.min.css` + `fonts/icomoon/style.css` (icon font,
  NOT used by the calendar itself — the FullCalendar prev/next arrows come
  from FullCalendar's own embedded `fcicons` font) + FullCalendar v4
  packages `core` + `interaction` + `daygrid` (their CSS is injected from
  per-package `main.css` files served at
  `fullcalendar/packages/<pkg>/main.css`); rendered live in a browser and
  the interactions verified end-to-end).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/calendar-19/`
  404s — the whole "Bootstrap Calendars" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  prior calendar preps; `products.js` has no calendar entries at all).
- **Screenshot:** `calendar-19.jpg` (1200×972 AVIF, converted + viewed in
  browser; pixel-sampled) — very light grey page (`#efefef`), a single
  white rounded card floating on a soft drop shadow (`0 15px 30px 0
rgba(0,0,0,0.2)`), inside it a FullCalendar month view: toolbar with
  "February 2020" (dark, 28px) top-left and a salmon-pink "today" button +
  `<`/`>` arrow buttons top-right; weekday header row (Sun…Sat, dark,
  bold); a 7-column grid with very faint light-grey borders (`#f9f9f9`);
  current-month day numbers dark, adjacent-month numbers faint grey/30%
  opacity; salmon-pink event bars (`#f67280`, white text, slightly rounded)
  on Feb 1 ("All Day Event"), Feb 7+10 ("Long Event"), Feb 9+16 ("Repeating
  Event"), Feb 11–13 ("Conference"), Feb 12 (Meeting/Lunch/Happy Hour/
  Dinner), Feb 13 ("Birthday Party"), Feb 28 ("Click for Google"); a blue
  "+5 more" link under the Feb 12 events. No navbar, no hero, no footer, no
  other page furniture.
- **Stack of the source:** FullCalendar v4 (core + interaction + dayGrid
  plugins) + jQuery 3.3.1 + Popper + Bootstrap 4.3.1 grid/utilities (the
  page uses only `.content` / `#calendar` — Bootstrap provides the button +
  popover styling), Roboto font. `js/main.js` is an EMPTY jQuery
  `$(function(){})` stub; the real init is an inline script:
  `new FullCalendar.Calendar(el, {plugins:['interaction','dayGrid'],
defaultDate:'2020-02-12', editable:true, eventLimit:true, events:[...]})`.
  The recreation must NOT copy any of this — build a pure-React month grid
  with lucide-react icons (ChevronLeft / ChevronRight for the nav arrows)
  and no images (this design is pure CSS).
- **Event data (paraphrase freely, keep the same kinds):** 12 events on
  defaultDate February 2020 —
  1. "All Day Event" — Feb 1 (all-day, spans full cell width).
  2. "Long Event" — Feb 7 → Feb 10 (multi-day, all-day; renders a bar on
     every spanned day).
  3. "Repeating Event" — Feb 9 16:00 and Feb 16 16:00 (same `groupId` 999;
     renders "4p Repeating Event").
  4. "Conference" — Feb 11 → Feb 13 (multi-day all-day).
  5. "Meeting" — Feb 12 10:30–12:30 ("10:30a Meeting").
  6. "Lunch" — Feb 12 12:00 ("12p Lunch").
  7. "Meeting" — Feb 12 14:30–16:30 ("2:30p Meeting").
  8. "Happy Hour" — Feb 12 17:30 ("5:30p Happy Hour").
  9. "Dinner" — Feb 12 20:00 ("8p Dinner").
  10. "Birthday Party" — Feb 13 07:00 ("7a Birthday Party").
  11. "Click for Google" — Feb 28 (links to http://google.com/).
  12. Feb 12 has SIX events total → with the default ~4 rows of room the
      grid shows the first one and "+5 more".
      Timed events render with the lowercase `h:mma` time prefix ("10:30a",
      "12p", "2:30p", "5:30p", "8p", "7a"); all-day events have no prefix.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. Section (`.content`) — page background `#efefef`, vertical padding
   `7rem 0` (computed 112px), content centered.
   - `<div id="calendar">` — `max-width: 900px`, `margin: 0 auto`:
     - `.fc-view-container` — white card, `padding: 30px`,
       `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)` (the floating card).
       - `.fc-toolbar.fc-header-toolbar` — flex row, space-between,
         `margin-bottom: 1.5em`:
         - `.fc-left` → `<h2 class="fc-title">` "February 2020" (28px,
           weight 500, `#212529`).
         - `.fc-right` → three Bootstrap buttons in a `.btn-group`:
           "today" (`.fc-button-primary`: `#f67280` bg, white text, 1px
           `#f67280` border, `border-radius: 4px`, padding
           `.375rem .75rem`), "prev" (icon-only `fcicons` glyph `<`),
           "next" (icon-only `fcicons` glyph `>`). Recreation: "Today"
           text button + lucide ChevronLeft / ChevronRight icon buttons
           (aria-labels "Previous month" / "Next month").
       - `.fc-view` (`.fc-dayGrid-view`) → `.fc-head` → one `tr` of 7×
         `<th class="fc-day-header">` Sun Mon Tue Wed Thu Fri Sat
         (16px, weight 700, `#212529`, borders `#f9f9f9`).
       - `.fc-body` → `.fc-day-grid` → 6 `.fc-row` blocks (Feb 2020 starts
         on a Saturday → leading Jan 26–31 cells, trailing Mar 1–7 cells;
         leap year → 29 days):
         - each row = `.fc-bg` table (empty `td` day cells) + `.fc-content-skeleton`
           table (day numbers `.fc-day-number` floated right in
           `.fc-day-top`, then `.fc-event-container` with the day's event
           bars).
         - event bar `.fc-day-grid-event` / `.fc-event`: `#f67280` bg,
           white text, `border: 1px solid #f67280`, `border-radius: 3px`,
           `font-size: .85em` (13.6px), `line-height: 1.4`, margin
           `1px 2px 0`, padding `0 1px`, `cursor: pointer`, draggable +
           resizable (editable: true).
         - `.fc-other-month` day tops: `opacity: .3` (adjacent-month
           numbers faint).
         - `.fc-today` cell: `background: #40e0d0` (turquoise).
         - `.fc-more` link ("+5 more"): `#007bff` blue, `font-size: .85em`,
           `cursor: pointer`, `text-decoration: none`, margin `1px 3px`;
           hover underlines. Clicking opens `.fc-more-popover` (white,
           `box-shadow: 0 2px 6px rgba(0,0,0,.15)`) listing the remaining
           events (verified live: Feb 12 popover shows Conference, 10:30a
           Meeting, 12p Lunch, 2:30p Meeting, 5:30p Happy Hour, 8p Dinner).

The widget is a real interactive month event calendar: prev/next/today
navigation, draggable + resizable events (editable), "+N more" overflow
popovers, and event click-through (the Google event opens a URL).

## Design tokens (from preview stylesheets `css/style.css` + FullCalendar `main.css` + live computed styles)

- **Brand / event color:** `#f67280` (salmon pink) — event bar background
  AND border (`.fc-event`), toolbar "today"/prev/next buttons
  (`.fc-button-primary`). Put in `@theme` and use via Tailwind classes.
- **Today highlight:** `#40e0d0` (turquoise) — `td.fc-today` background.
- **Page background:** `#efefef` (very light grey); body text `#212529`
  (Bootstrap default dark grey).
- **Card (`.fc-view-container`):** `#fff` background, `padding: 30px`,
  `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)` (Tailwind:
  `shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]`). The screenshot shows slightly
  rounded corners on the card — the live demo renders square
  (`border-radius: 0`); the visible rounding is the shadow's soft edge.
  Keep square like the live DOM (1:1 to the current original).
- **Fonts:** `"Roboto", -apple-system, ...` for the whole page (Google
  Fonts Roboto; the source loads Roboto 300/400/500 + Poppins 300/400/500
  but the body CSS uses Roboto). Load Roboto 300, 400, 500, 700 via Google
  Fonts `<link>` in index.html (no font files copied).
- **Toolbar title:** `<h2>` 28px computed (FullCalendar sizes it up from
  the 20px h2 base), weight 500, `#212529`, left-aligned.
- **Toolbar buttons:** Bootstrap `btn` tokens — `border-radius: 4px`,
  `padding: .375rem .75rem`, `font-size: 1rem`, `line-height: 1.5`; primary
  variant `#f67280` bg + border, `#fff` text; disabled `opacity: .65`;
  focus ring `0 0 0 .2rem rgba(76,91,106,.5)`. Grouped with a 1px gap
  (`.btn-group`); the prev/next are icon-only, the "today" button is text.
- **Grid borders:** `#f9f9f9` (very faint light grey) — every `th`/`td`
  border is `1px solid #f9f9f9`.
- **Weekday headers (`th.fc-day-header`):** 16px, weight 700 (browser
  default th), `#212529`.
- **Day numbers:** `.fc-day-number` — 16px, `#212529` for current month;
  adjacent-month day tops `.fc-other-month` at `opacity: .3`; number
  floated right in the cell top with `padding: 2px`.
- **Event bars (`.fc-event`):** `#f67280` bg + 1px `#f67280` border, `#fff`
  text, `border-radius: 3px`, `font-size: .85em` (13.6px), `line-height:
1.4`, `margin: 1px 2px 0`, `padding: 0 1px`; timed events prefixed with
  lowercase `h:mma` ("10:30a", "12p", "2:30p", "5:30p", "8p", "7a").
- **"+N more" link (`.fc-more`):** `#007bff` (Bootstrap primary blue),
  `font-size: .85em`, `cursor: pointer`, no underline (underline on hover),
  margin `1px 3px`.
- **More popover (`.fc-more-popover`):** `#fff` bg,
  `box-shadow: 0 2px 6px rgba(0,0,0,.15)`, lists the day's remaining event
  bars (same `.fc-event` styling).
- **Section rhythm:** `padding: 7rem 0` (Tailwind `py-28`); `#calendar`
  `max-width: 900px`, `margin: 0 auto` (Tailwind `mx-auto max-w-[900px]`).
- **Icons/images:** the source DOM uses NO `<img>`; the only icons are the
  FullCalendar `fcicons` font glyphs (`<`/`>` prev/next; `x` close on the
  popover). Recreation uses lucide ChevronLeft/ChevronRight + X and no
  images.

## Requirements

### Requirement: Page composition

The system SHALL render a single centered section on the very light grey
background (`#efefef`) with generous vertical padding, containing one white
floating card holding the month event calendar.

#### Scenario: Page layout

- **GIVEN** the Timescape page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#efefef`
- **AND** the section SHALL have vertical padding of `7rem` (Tailwind
  `py-28`)
- **AND** the content SHALL be horizontally centered
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html)

#### Scenario: The calendar card

- **GIVEN** the Timescape page is rendered
- **WHEN** the calendar container is inspected
- **THEN** the calendar SHALL be inside a white card (`#fff`) with 30px
  padding and the soft drop shadow `0 15px 30px 0 rgba(0,0,0,0.2)`
- **AND** the card SHALL be at most 900px wide and centered

### Requirement: Toolbar

The system SHALL render a calendar toolbar with the current month/year
title on the left and "Today", previous-month, and next-month buttons on
the right.

#### Scenario: Toolbar layout

- **GIVEN** the Timescape page is rendered
- **WHEN** the toolbar is inspected
- **THEN** a heading SHALL read "<Month> <Year>" (e.g. "February 2020"),
  left-aligned, 28px, weight 500, `#212529`
- **AND** a "Today" button SHALL sit on the right with an accessible name
  "Today"
- **AND** a previous-month button with accessible name "Previous month"
  and a next-month button with accessible name "Next month" SHALL sit
  beside it
- **AND** all three buttons SHALL have salmon-pink background `#f67280`,
  white text, `border-radius: 4px`, and visible focus rings

#### Scenario: Navigate months

- **GIVEN** the calendar shows February 2020
- **WHEN** the next-month button is activated
- **THEN** the title SHALL read "March 2020" and the grid SHALL render
  March's days
- **WHEN** the previous-month button is activated twice
- **THEN** the title SHALL read "January 2020" and the grid SHALL render
  January's days
- **AND** navigation SHALL roll over year boundaries (Dec 2020 → Jan 2021)

#### Scenario: Today button

- **GIVEN** the system clock is fixed (tests mock the date)
- **WHEN** the "Today" button is activated from any other month
- **THEN** the calendar SHALL navigate to the current month
- **AND** the current month's today cell SHALL be highlighted turquoise
  (`#40e0d0`)

### Requirement: Weekday header row

The system SHALL render a header row of seven abbreviated weekday names
starting Sunday: Sun, Mon, Tue, Wed, Thu, Fri, Sat.

#### Scenario: Weekday headers

- **GIVEN** the calendar is rendered
- **WHEN** its header row is inspected
- **THEN** seven column headers SHALL read Sun, Mon, Tue, Wed, Thu, Fri,
  Sat in order
- **AND** they SHALL be styled 16px, weight 700, `#212529`, with faint
  `#f9f9f9` borders

### Requirement: Month grid

The system SHALL render the month's days in a 7-column grid with the
first/last rows filled by adjacent-month days.

#### Scenario: Day cells

- **GIVEN** the calendar shows February 2020
- **WHEN** its grid is inspected
- **THEN** the grid SHALL have 7 columns and exactly enough rows to cover
  the month (Feb 2020: 6 rows, leading Jan 26–31 and trailing Mar 1–7)
- **AND** current-month day numbers SHALL be `#212529`, floated right in
  their cell top
- **AND** adjacent-month day numbers SHALL be faint (30% opacity)
- **AND** every cell border SHALL be `1px solid #f9f9f9`

#### Scenario: Leap year

- **GIVEN** the calendar shows February 2020 (a leap year)
- **WHEN** the grid is inspected
- **THEN** February SHALL have 29 days
- **AND** the trailing cells SHALL start on March 1

### Requirement: Event rendering

The system SHALL render the event data on their dates as salmon-pink bars
with white text; timed events SHALL carry a lowercase `h:mma` time prefix,
multi-day events SHALL span every day in their range.

#### Scenario: All-day event bar

- **GIVEN** an all-day event exists on Feb 1
- **WHEN** the Feb 1 cell is inspected
- **THEN** a bar SHALL render spanning the full cell width with the event
  title "All Day Event" (or an equivalent paraphrase)
- **AND** the bar SHALL have background `#f67280`, white text,
  `border-radius: 3px`, and `font-size: .85em`

#### Scenario: Timed event prefix

- **GIVEN** timed events exist on Feb 12
- **WHEN** their bars are inspected
- **THEN** each bar SHALL begin with the lowercase time (e.g. "10:30a
  Meeting", "12p Lunch", "2:30p Meeting", "5:30p Happy Hour", "8p Dinner")

#### Scenario: Multi-day event

- **GIVEN** a multi-day all-day event exists (Feb 7 → Feb 10)
- **WHEN** the grid is inspected
- **THEN** the event SHALL render a bar on EACH spanned day (Feb 7, 8, 9, 10)
- **AND** a two-day conference (Feb 11 → Feb 13) SHALL render on Feb 11,
  12, and 13

### Requirement: Today highlight

The system SHALL highlight the current day's cell with a turquoise
background (`#40e0d0`).

#### Scenario: Today cell

- **GIVEN** the system clock is fixed to a date within the shown month
- **WHEN** the grid is rendered
- **THEN** the today cell SHALL have background `#40e0d0`
- **AND** all other cells SHALL have no background

### Requirement: Event overflow ("+N more")

When a day holds more events than fit in its cell, the system SHALL render
a blue "+N more" link; activating it SHALL open a small popover listing the
day's remaining events.

#### Scenario: Overflow link

- **GIVEN** Feb 12 holds six events (one shown + five hidden)
- **WHEN** the Feb 12 cell is inspected
- **THEN** a link SHALL read "+5 more" in blue `#007bff` at `.85em`
- **AND** activating it SHALL open a popover (white, shadow
  `0 2px 6px rgba(0,0,0,.15)`) listing the five hidden events with their
  time prefixes
- **AND** the popover SHALL be dismissible (close button or outside click)

### Requirement: Event interactions

The system SHALL make event bars clickable and draggable to other days
(paraphrase of the source's `editable: true`); events with a URL SHALL open
it when clicked.

#### Scenario: Click a linked event

- **GIVEN** an event with a URL exists (e.g. Feb 28 "Click for Google")
- **WHEN** its bar is activated
- **THEN** the URL SHALL open in a new tab

#### Scenario: Drag an event

- **GIVEN** an all-day event bar on Feb 1
- **WHEN** it is dragged to Feb 14
- **THEN** the event SHALL move to Feb 14 (its bar disappears from Feb 1
  and renders on Feb 14)

### Requirement: Responsive behavior

The system SHALL keep the calendar usable from mobile to desktop: the card
is centered and the grid never overflows horizontally.

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the card SHALL be centered at up to 900px wide with the toolbar
  title left and buttons right
- **AND** all 7 columns SHALL fit without horizontal scroll

#### Scenario: Mobile

- **GIVEN** a viewport < 768px
- **WHEN** the page is rendered
- **THEN** the toolbar SHALL wrap or shrink so title and buttons stay
  visible
- **AND** the grid SHALL remain 7 columns with no horizontal overflow
- **AND** day cells SHALL stay tappable (≥ 44px effective hit area or
  clearly separated)

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Timescape page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/timescape` exists; package `@free-react-templates/timescape`;
      `public/CNAME` = `timescape.free.componentdock.com`; `homepage` =
      `https://timescape.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/timescape` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Page background `#efefef`, section `py-28`, content centered
- [ ] White card: `#fff`, 30px padding, shadow
      `0 15px 30px 0 rgba(0,0,0,0.2)`, max-width 900px, centered
- [ ] Toolbar: title "<Month> <Year>" (28px, weight 500, `#212529`) left;
      "Today" text button + ChevronLeft/ChevronRight icon buttons right,
      all `#f67280` bg, white text, radius 4px, aria-labels "Today" /
      "Previous month" / "Next month"; navigation rolls over year
      boundaries; "Today" jumps to the current month
- [ ] Weekday headers Sun Mon Tue Wed Thu Fri Sat — 16px, weight 700,
      `#212529`, `#f9f9f9` borders
- [ ] Month grid: 7 columns, 5–6 rows, adjacent-month fill (Feb 2020: 6
      rows, Jan 26–31 leading, Mar 1–7 trailing), current-month numbers
      `#212529` floated right, adjacent-month at 30% opacity, borders
      `1px solid #f9f9f9`; leap February (2020 → 29 days)
- [ ] Events (paraphrased titles OK): Feb 1 all-day bar; Feb 7–10 long
      event on every spanned day; Feb 9 + 16 "4p Repeating Event"; Feb
      11–13 conference on every spanned day; Feb 12 timed events with
      lowercase `h:mma` prefixes ("10:30a", "12p", "2:30p", "5:30p", "8p");
      Feb 13 "7a Birthday Party"; Feb 28 linked event opening in a new tab
- [ ] Event bar style: `#f67280` bg + border, `#fff` text, radius 3px,
      `font-size: .85em`
- [ ] Today cell highlighted `#40e0d0` (fixed-clock tests)
- [ ] "+5 more" overflow on Feb 12 (blue `#007bff`, `.85em`); popover
      lists the hidden events, dismissible
- [ ] Events draggable to another day (interaction paraphrase)
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic table/buttons, aria-labels, focus
      rings; tests mock the clock (`vi.setSystemTime`) for deterministic
      "today" assertions and cover month-boundary cases (Sunday-start,
      Saturday-start, 5-row vs 6-row months, leap February, Dec→Jan and
      Jan→Dec navigation)
- [ ] `npm run verify:app -- timescape` (or `scripts/verify-app.sh
    timescape`) passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://timescape.free.componentdock.com (200, correct
      content)
