# Template: Dayscape (Design category: Calendar / Datepicker)

## Purpose

Recreation of ColorLib "Calendar V09" (source slug: `calendar-09`, preview: https://preview.colorlib.com/theme/calendar-09/, ColorLib page: https://colorlib.com/wp/template/calendar-09/).

Stack: Vite + React 19 + TypeScript + Tailwind CSS 4. No ColorLib references in app code — provenance lives only in this spec, TEMPLATES.md, and the PR. Footer MUST link `https://www.componentdock.com/` ("Component Dock").

## Design tokens (from screenshot analysis — preview unreachable)

### Colors

- **Background**: `#f3f4f6` (Tailwind `gray-100`) — light gray page background
- **Surface**: `#ffffff` (white) — datepicker container background
- **Primary/Accent**: `#007bff` (Tailwind `blue-500`) — selected date highlight, month nav arrows
- **Text primary**: `#111827` (Tailwind `gray-900`) — headings, day numbers, day headers
- **Text muted**: `#6b7280` (Tailwind `gray-500`) — placeholder, adjacent month dates
- **Icon accent**: `#e11d48` (Tailwind `rose-600`) — footer icons (chevron, clock, trash, close)
- **Border**: `#e5e7eb` (Tailwind `gray-200`) — input border, container border
- **Shadow**: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` (Tailwind `shadow-lg`)

### Typography

- **Font family**: System UI stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) — no custom font load needed
- **Heading (Calendar #09)**: `text-3xl font-bold tracking-tight` (~30px, weight 700)
- **Sub-heading (Calendar Datepicker)**: `text-lg font-medium` (~18px, weight 500)
- **Month label**: `text-base font-semibold` (~16px, weight 600)
- **Day headers**: `text-sm font-semibold uppercase tracking-wider` (~14px, weight 600)
- **Date numbers**: `text-base` (~16px)
- **Input placeholder**: `text-gray-500` (~16px)

### Spacing & Sizing

- **Container max-width**: ~320px (calendar dropdown width)
- **Container padding**: `p-4` (16px)
- **Border radius**: `rounded-lg` (8px) on container, `rounded-md` (6px) on input, `rounded-full` on selected date circle
- **Gap**: `gap-2` (8px) between day cells, `gap-4` (16px) between sections
- **Input height**: `h-10` (40px) with `px-3`

### Button / Icon Styles

- **Month nav arrows**: Circular, `w-8 h-8`, `bg-blue-500 text-white`, `rounded-full`, hover `bg-blue-600`
- **Footer icons**: `w-5 h-5`, `text-rose-600`, hover `text-rose-700`
- **Selected date**: `w-8 h-8`, `bg-blue-500 text-white`, `rounded-full`, centered

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/calendar-09/` | HTTP 200 · 8,117 B · title `Calendar 09` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/calendar-09/css/style.css?v=6d2199ce` | HTTP 200 · 23,693 B · sha256 `48dbc60cd528` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×13,
`#212529`×5, `#007bff`×5, `#777777`×5, `#6c757d`×4, `#000000`×4,
`#dee2e6`×3, `#eeeeee`×3, `#337ab7`×3, `#495057`×2.

**Token deltas** — the sheet, not the screenshot, decides:

- `#3b82f6` → **`#007bff`** — the sheet paints `a{color}` with it

**Low-chroma values the sheet actually uses** — `#212529`, `#777777`,
`#6c757d`, `#dee2e6`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#e11d48`.

## Requirements

### Feature: Calendar Datepicker

As a user I want to select a date and time from a visual calendar so that I can input datetime values easily.

#### Scenario: Initial render shows datepicker with current selection

- **GIVEN** the Dayscape page loads
- **WHEN** the datepicker renders
- **THEN** the input field displays a formatted datetime placeholder "MM/DD/YYYY hh:mm:ss"
- **AND** the calendar dropdown is visible below the input
- **AND** the current month/year is displayed in the header (e.g. "December 2020")
- **AND** day headers show "Su Mo Tu We Th Fr Sa"
- **AND** dates for the current month are shown in a 7-column grid
- **AND** dates from adjacent months are shown in muted gray
- **AND** the currently selected date (if any) is highlighted with a blue circle
- **AND** four footer icons are visible: chevron-up, clock, trash, X

#### Scenario: Month navigation

- **GIVEN** the calendar dropdown is open
- **WHEN** the user clicks the right arrow
- **THEN** the month advances by one and the date grid updates
- **WHEN** the user clicks the left arrow
- **THEN** the month goes back by one and the date grid updates

#### Scenario: Date selection

- **GIVEN** the calendar dropdown is open
- **WHEN** the user clicks a date cell for the current month
- **THEN** that date becomes highlighted with a blue circle
- **AND** the input field updates to show the selected date in "MM/DD/YYYY hh:mm:ss" format

#### Scenario: Adjacent month date selection

- **GIVEN** the calendar shows dates from previous/next month in muted gray
- **WHEN** the user clicks an adjacent-month date
- **THEN** the month switches to that month
- **AND** the date becomes highlighted
- **AND** the input updates accordingly

#### Scenario: Footer icon interactions

- **GIVEN** the calendar dropdown is open
- **WHEN** the user clicks the chevron-up icon
- **THEN** the time picker view toggles (if implemented) or selection confirms
- **WHEN** the user clicks the clock icon
- **THEN** the time resets to current time or opens time picker
- **WHEN** the user clicks the trash icon
- **THEN** the selection clears and input shows placeholder
- **WHEN** the user clicks the X icon
- **THEN** the calendar dropdown closes

#### Scenario: Input focus behavior

- **GIVEN** the page loads
- **WHEN** the user clicks the input field
- **THEN** the calendar dropdown becomes visible (if not already)
- **WHEN** the user clicks outside the datepicker
- **THEN** the calendar dropdown closes

#### Scenario: Responsive layout

- **GIVEN** the viewport is mobile (< 640px)
- **WHEN** the datepicker renders
- **THEN** the container uses full width with comfortable padding
- **AND** all date cells remain tappable (min 44x44px touch targets)

#### Scenario: Dark mode

- **GIVEN** the user has `prefers-color-scheme: dark`
- **WHEN** the page renders
- **THEN** background becomes `gray-900`, surface becomes `gray-800`
- **AND** text colors invert appropriately
- **AND** blue/rose accents remain accessible

## Verification checklist

- [ ] Page renders with correct background color (`gray-100`)
- [ ] Heading "Dayscape" (or similar) and sub-heading "Datepicker" present
- [ ] Input field shows placeholder "MM/DD/YYYY hh:mm:ss"
- [ ] Calendar dropdown visible with month/year header
- [ ] Day headers: Su Mo Tu We Th Fr Sa
- [ ] 7-column date grid renders correctly for current month
- [ ] Adjacent month dates shown in muted gray
- [ ] Selected date highlighted with blue circle
- [ ] Month nav arrows work (prev/next)
- [ ] Footer icons: chevron-up, clock, trash, X (rose-600)
- [ ] Date selection updates input value
- [ ] Click outside closes dropdown
- [ ] Dark mode colors correct
- [ ] Mobile layout works (< 640px)
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines/functions/branches/statements)
- [ ] TypeScript strict mode passes
- [ ] Lint passes
- [ ] Build succeeds
