# Template: Chronoboard (Event Calendar)

## Purpose

Recreation of ColorLib **Calendar 19** (source slug: `calendar-19`, preview URL: `https://preview.colorlib.com/theme/calendar-19/` — **unreachable at prep time**, fell back to ColorLib template page screenshot and DOM analysis of the live FullCalendar instance at the preview domain).

Stack: Vite · React 19 · TypeScript (strict) · Tailwind CSS 4 · `@fullcalendar/react` + `@fullcalendar/daygrid` + `@fullcalendar/interaction` + `@fullcalendar/timegrid` (for timed events) + `@fullcalendar/list` (optional list view).

Category: **Event Calendar / Scheduling** (Bootstrap-based FullCalendar wrapper).

---

## Design Tokens (extracted from preview screenshot + live FullCalendar DOM)

| Token                        | Value                                                       | Source / Notes                                                                                                                                        |
| ---------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Font family**              | `Roboto` (weights 300, 400, 500, 700)                       | Google Fonts, loaded via `<link>` in `index.html`                                                                                                     |
| **Brand primary (event bg)** | `#e74c3c` (dark pink/maroon)                                | FullCalendar `.fc-event` background — visible on "All Day Event", "Long Event", "Conference", "Birthday Party", "Repeating Event", "Click for Google" |
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

## Gherkin Requirements

### Feature: Calendar Toolbar

**As a** user  
**I want to** see the current month, navigate months, and jump to today  
**So that** I can browse my schedule across time

#### Scenario: Toolbar renders with month title and navigation

- Given the calendar is mounted
- When the component renders
- Then the toolbar shows the current month name and year (e.g. "February 2020") on the left
- And a "today" button on the right
- And "prev" (chevron-left) and "next" (chevron-right) buttons next to "today"

#### Scenario: Clicking "today" navigates to current month

- Given the calendar shows February 2020
- When the user clicks the "today" button
- Then the calendar navigates to the current month/year
- And the month title updates accordingly

#### Scenario: Clicking "prev" goes to previous month

- Given the calendar shows February 2020
- When the user clicks the prev button
- Then the calendar shows January 2020

#### Scenario: Clicking "next" goes to next month

- Given the calendar shows February 2020
- When the user clicks the next button
- Then the calendar shows March 2020

---

### Feature: Month Grid

**As a** user  
**I want to** see a 6-week grid with day numbers and proper other-month dimming  
**So that** I can orient myself in the calendar

#### Scenario: Grid shows 7 columns (Sun–Sat) with day headers

- Given the calendar renders
- Then the header row shows "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" in order
- And each header has the design token day header bg/text colors

#### Scenario: Current month dates render in dark text

- Given February 2020 is displayed
- Then dates 1 through 29 render with `color: #212529`

#### Scenario: Other-month dates render in muted text

- Given February 2020 is displayed
- Then dates 26–31 (Jan) and 1–7 (Mar) render with `color: #adb5bd`
- And their cells have `bg: #f8f9fa`

#### Scenario: Today's date is highlighted

- Given today falls within the displayed month
- Then that cell has `bg: #fff3cd` (pale yellow highlight)

#### Scenario: Grid has 6 week rows (fixed height)

- Then exactly 6 `.fc-row` elements render, each ~106px tall

---

### Feature: Events (All-day + Timed)

**As a** user  
**I want to** see events rendered as colored pills on their dates  
**So that** I can see my schedule at a glance

#### Scenario: All-day event spans full cell width

- Given an all-day event on Feb 1 ("All Day Event")
- Then a pill with `bg: #e74c3c`, white text, radius 4px renders in the Feb 1 cell
- And the pill spans the full cell width (minus small padding)

#### Scenario: Multi-day event spans consecutive cells

- Given "Long Event" spans Feb 7–8
- Then a single pill renders across both Feb 7 and Feb 8 cells
- With the same brand styling

#### Scenario: Timed events show time + title

- Given "7a Birthday Party" on Feb 13
- Then the pill shows "7a" (time) and "Birthday Party" (title)
- And uses the same brand styling

#### Scenario: Repeating event shows on multiple separate days

- Given "4p Repeating Event" on Feb 9 and Feb 16
- Then separate pills render on each date
- Each with time "4p" and title "Repeating Event"

#### Scenario: Overflow indicator shows when events exceed cell capacity

- Given Feb 12 has 6+ events ("Conference", "Meeting", "Lunch", "Meeting", "Happy Hour", "Dinner", etc.)
- Then the cell shows the first few pills + a "+5 more" link (`.fc-more`)
- And clicking "+5 more" opens a popover/list of all events for that day

#### Scenario: Event with external link ("Click for Google")

- Given "Click for Google" on Feb 28
- Then the pill renders as a link (`<a>`) with `href` to Google Calendar
- And clicking it navigates externally (target="_blank")

---

### Feature: Responsive Behavior

**As a** user on mobile  
**I want** the calendar to adapt to narrow viewports  
**So that** I can use it on my phone

#### Scenario: Toolbar stacks on mobile

- Given viewport width < 640px
- Then the toolbar stacks: month title on its own row, buttons below

#### Scenario: Grid scrolls horizontally on very narrow screens

- Given viewport width < 480px
- Then the grid gains horizontal scroll (or switches to list view — implementation choice)

---

### Feature: Accessibility

**As a** screen-reader user  
**I want** proper ARIA labels and keyboard navigation  
**So that** I can use the calendar fully

#### Scenario: Prev/Next buttons have aria-label

- Then prev button has `aria-label="prev"` (or "previous month")
- And next button has `aria-label="next"` (or "next month")

#### Scenario: Today button has accessible name

- Then today button has accessible text "today"

#### Scenario: Grid is a proper table with headers

- Then the day headers are `<th scope="col">`
- And each date cell is a `<td>` with `data-date` attribute

#### Scenario: Keyboard navigation works

- Given focus is on the calendar
- Then arrow keys move between days
- And Enter/Space activates events

---

## Verification Checklist

- [ ] Toolbar renders with correct month title, today/prev/next buttons
- [ ] Toolbar buttons styled per design tokens (colors, radius, hover)
- [ ] Month grid: 7 columns, correct day headers (Sun–Sat)
- [ ] Current month dates: dark text (#212529)
- [ ] Other-month dates: muted text (#adb5bd), tinted bg (#f8f9fa)
- [ ] Today highlight: pale yellow bg (#fff3cd)
- [ ] 6 week rows, each ~106px
- [ ] All-day events: brand pill (#e74c3c), white text, full-width
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
