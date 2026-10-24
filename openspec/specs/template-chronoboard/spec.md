# Template: Chronoboard (Event Calendar)
<!-- prep-status: shipped-as=timescape -->
> **SHIPPED-UNDER** — the ColorLib `calendar-19` design this prep describes already
> ships as `apps/timescape` (<https://timescape.free.componentdock.com>).
> Do not scaffold `apps/chronoboard`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-timescape/spec.md`.

## Purpose

Recreation of ColorLib "Calendar 19" (source slug: `calendar-19`, preview URL: `https://preview.colorlib.com/theme/calendar-19/` — **unreachable at prep time**, fell back to ColorLib template page screenshot and DOM analysis of the live FullCalendar instance at the preview domain).

Stack: Vite · React 19 · TypeScript (strict) · Tailwind CSS 4 · `@fullcalendar/react` + `@fullcalendar/daygrid` + `@fullcalendar/interaction` + `@fullcalendar/timegrid` (for timed events) + `@fullcalendar/list` (optional list view).

Category: **Event Calendar / Scheduling** (Bootstrap-based FullCalendar wrapper).

---

## Design Tokens (extracted from preview screenshot + live FullCalendar DOM)

| Token                        | Value                                                       | Source / Notes                                                                                                                                        |
| ---------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Font family**              | `Roboto` (weights 300, 400, 500, 700)                       | Google Fonts, loaded via `<link>` in `index.html`                                                                                                     |
| **Brand primary (event bg)** | `#f67280` (dark pink/maroon)                                | FullCalendar `.fc-event` background — visible on "All Day Event", "Long Event", "Conference", "Birthday Party", "Repeating Event", "Click for Google" |
| **Brand primary hover**      | `#c0392b`                                                   | Slightly darker on hover (FullCalendar default)                                                                                                       |
| **Text on brand**            | `#ffffff` (white)                                           | Event title/time text                                                                                                                                 |
| **Toolbar bg**               | `#ffffff` (white)                                           | Header toolbar area                                                                                                                                   |
| **Toolbar text**             | `#2c3e50` (dark slate)                                      | Month title "February 2020"                                                                                                                           |
| **Today button**             | `bg: #f8f9fa`, `text: #495057`, `border: 1px solid #dee2e6` | Light gray button, flat                                                                                                                               |
| **Prev/Next buttons**        | `bg: #343a40`, `text: #fff`, `border: 1px solid #343a40`    | Dark gray buttons with chevron icons                                                                                                                  |
| **Day header text**          | `#495057` (medium gray)                                     | Sun, Mon, Tue...                                                                                                                                      |
| **Day header bg**            | `#f8f9fa` (very light gray)                                 | Header row background                                                                                                                                 |
| **Grid border**              | `#dee2e6` (light gray)                                      | Thin lines between cells                                                                                                                              |
| **Current month day number** | `#212529` (near black)                                      | Dates 1–29 in February                                                                                                                                |
| **Other month day number**   | `#adb5bd` (muted gray)                                      | Dates 26–31 (Jan), 1–7 (Mar)                                                                                                                          |
| **Cell bg (current month)**  | `#ffffff` (white)                                           |                                                                                                                                                       |
| **Cell bg (other month)**    | `#f8f9fa` (very light gray)                                 | Slightly tinted                                                                                                                                       |
| **Today highlight**          | `#fff3cd` (pale yellow)                                     | Background on today's cell (FullCalendar default)                                                                                                     |
| **Event border radius**      | `0.25rem` (4px)                                             | FullCalendar default `.fc-event`                                                                                                                      |
| **Button border radius**     | `0.25rem` (4px)                                             | Toolbar buttons                                                                                                                                       |
| **Toolbar height**           | `auto` (content + padding)                                  | ~44px effective                                                                                                                                       |
| **Row height**               | `106px` (fixed per week row)                                | FullCalendar `fc-rigid`                                                                                                                               |
| **Event padding**            | `2px 4px`                                                   | Internal spacing of event pills                                                                                                                       |
| **Font size (base)**         | `0.875rem` (14px)                                           | FullCalendar default                                                                                                                                  |
| **Font size (month title)**  | `1.5rem` (24px)                                             | `h2` in toolbar                                                                                                                                       |
| **Icon font**                | FullCalendar icon font (chevron-left, chevron-right)        | Via `@fullcalendar/core`                                                                                                                              |

---

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/calendar-19/` | HTTP 200 · 2,459 B · title `Calendar #9` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/calendar-19/css/style.css?v=7588fd9e` | HTTP 200 · 24,504 B · sha256 `8eedbdb7f6ba` |

> ⚠️ the demo's own `<title>` reads `Calendar #9` though the path is
> `calendar-19` — the host's titles are not reliable labels; the readings
> above are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×14,
`#f67280`×10, `#212529`×4, `#dee2e6`×3, `#d7d7d7`×2, `#000000`×2,
`#fddee2`×1, `#8fdf82`×1, `#f9f9f9`×1, `#eeeeee`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#e74c3c` → **`#f67280`** — the sheet paints `.fc-event{border}` with it

**Low-chroma values the sheet actually uses** — `#212529`, `#dee2e6`,
`#d7d7d7`, `#f9f9f9`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#c0392b`, `#2c3e50`, `#fff3cd`.

## Requirements

### Feature: Calendar Toolbar

**As a** user  
**I want to** see the current month, navigate months, and jump to today  
**So that** I can browse my schedule across time

#### Scenario: Toolbar renders with month title and navigation

- **GIVEN** the calendar is mounted
- **WHEN** the component renders
- **THEN** the toolbar shows the current month name and year (e.g. "February 2020") on the left
- **AND** a "today" button on the right
- **AND** "prev" (chevron-left) and "next" (chevron-right) buttons next to "today"

#### Scenario: Clicking "today" navigates to current month

- **GIVEN** the calendar shows February 2020
- **WHEN** the user clicks the "today" button
- **THEN** the calendar navigates to the current month/year
- **AND** the month title updates accordingly

#### Scenario: Clicking "prev" goes to previous month

- **GIVEN** the calendar shows February 2020
- **WHEN** the user clicks the prev button
- **THEN** the calendar shows January 2020

#### Scenario: Clicking "next" goes to next month

- **GIVEN** the calendar shows February 2020
- **WHEN** the user clicks the next button
- **THEN** the calendar shows March 2020

---

### Feature: Month Grid

**As a** user  
**I want to** see a 6-week grid with day numbers and proper other-month dimming  
**So that** I can orient myself in the calendar

#### Scenario: Grid shows 7 columns (Sun–Sat) with day headers

- **GIVEN** the calendar renders
- **THEN** the header row shows "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" in order
- **AND** each header has the design token day header bg/text colors

#### Scenario: Current month dates render in dark text

- **GIVEN** February 2020 is displayed
- **THEN** dates 1 through 29 render with `color: #212529`

#### Scenario: Other-month dates render in muted text

- **GIVEN** February 2020 is displayed
- **THEN** dates 26–31 (Jan) and 1–7 (Mar) render with `color: #adb5bd`
- **AND** their cells have `bg: #f8f9fa`

#### Scenario: Today's date is highlighted

- **GIVEN** today falls within the displayed month
- **THEN** that cell has `bg: #fff3cd` (pale yellow highlight)

#### Scenario: Grid has 6 week rows (fixed height)

- **THEN** exactly 6 `.fc-row` elements render, each ~106px tall

---

### Feature: Events (All-day + Timed)

**As a** user  
**I want to** see events rendered as colored pills on their dates  
**So that** I can see my schedule at a glance

#### Scenario: All-day event spans full cell width

- **GIVEN** an all-day event on Feb 1 ("All Day Event")
- **THEN** a pill with `bg: #f67280`, white text, radius 4px renders in the Feb 1 cell
- **AND** the pill spans the full cell width (minus small padding)

#### Scenario: Multi-day event spans consecutive cells

- **GIVEN** "Long Event" spans Feb 7–8
- **THEN** a single pill renders across both Feb 7 and Feb 8 cells
- With the same brand styling

#### Scenario: Timed events show time + title

- **GIVEN** "7a Birthday Party" on Feb 13
- **THEN** the pill shows "7a" (time) and "Birthday Party" (title)
- **AND** uses the same brand styling

#### Scenario: Repeating event shows on multiple separate days

- **GIVEN** "4p Repeating Event" on Feb 9 and Feb 16
- **THEN** separate pills render on each date
- Each with time "4p" and title "Repeating Event"

#### Scenario: Overflow indicator shows when events exceed cell capacity

- **GIVEN** Feb 12 has 6+ events ("Conference", "Meeting", "Lunch", "Meeting", "Happy Hour", "Dinner", etc.)
- **THEN** the cell shows the first few pills + a "+5 more" link (`.fc-more`)
- **AND** clicking "+5 more" opens a popover/list of all events for that day

#### Scenario: Event with external link ("Click for Google")

- **GIVEN** "Click for Google" on Feb 28
- **THEN** the pill renders as a link (`<a>`) with `href` to Google Calendar
- **AND** clicking it navigates externally (target="_blank")

---

### Feature: Responsive Behavior

**As a** user on mobile  
**I want** the calendar to adapt to narrow viewports  
**So that** I can use it on my phone

#### Scenario: Toolbar stacks on mobile

- **GIVEN** the recreation is viewed below 576px (the `calendar-19` sheet ships **no width query at all** — this stacking is our own defensive breakpoint, not a source behaviour)
- **THEN** the toolbar stacks: month title on its own row, buttons below

#### Scenario: Grid scrolls horizontally on very narrow screens

- **GIVEN** the recreation is viewed at 480px or narrower (recreation-side choice; the source sheet has no width query)
- **THEN** the grid gains horizontal scroll (or switches to list view — implementation choice)

---

### Feature: Accessibility

**As a** screen-reader user  
**I want** proper ARIA labels and keyboard navigation  
**So that** I can use the calendar fully

#### Scenario: Prev/Next buttons have aria-label

- **THEN** prev button has `aria-label="prev"` (or "previous month")
- **AND** next button has `aria-label="next"` (or "next month")

#### Scenario: Today button has accessible name

- **THEN** today button has accessible text "today"

#### Scenario: Grid is a proper table with headers

- **THEN** the day headers are `<th scope="col">`
- **AND** each date cell is a `<td>` with `data-date` attribute

#### Scenario: Keyboard navigation works

- **GIVEN** focus is on the calendar
- **THEN** arrow keys move between days
- **AND** Enter/Space activates events

---

## Verification checklist

- [ ] Toolbar renders with correct month title, today/prev/next buttons
- [ ] Toolbar buttons styled per design tokens (colors, radius, hover)
- [ ] Month grid: 7 columns, correct day headers (Sun–Sat)
- [ ] Current month dates: dark text (#212529)
- [ ] Other-month dates: muted text (#adb5bd), tinted bg (#f8f9fa)
- [ ] Today highlight: pale yellow bg (#fff3cd)
- [ ] 6 week rows, each ~106px
- [ ] All-day events: brand pill (#f67280), white text, full-width
- [ ] Multi-day events: span cells correctly
- [ ] Timed events: show time + title
- [ ] Repeating events: render on each occurrence
- [ ] Overflow: "+N more" link appears and opens popover
- [ ] External link events: render as `<a target="_blank">`
- [ ] Font: Roboto loaded via Google Fonts link
- [ ] Responsive: toolbar stacks on mobile, grid scrolls or switches view
- [ ] A11y: ARIA labels, keyboard nav, semantic table
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No ColorLib references in app code (source only in spec/PR/TEMPLATES.md)
- [ ] Placeholder images via `picsum.photos/seed/chronoboard-<n>/<w>/<h>` if any needed
- [ ] Icons from `lucide-react` (not FullCalendar icon font — replace chevrons)
- [ ] 100% test coverage (lines, functions, branches, statements)
