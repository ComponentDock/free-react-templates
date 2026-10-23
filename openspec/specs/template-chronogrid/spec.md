# Template: ChronoGrid (Calendar)

## Purpose

Recreation of ColorLib template **Calendar 02** (`https://colorlib.com/wp/template/calendar-02/`), preview URL: `https://preview.colorlib.com/theme/calendar-02/` (fallback to screenshot analysis as preview is currently 404). Built as a modern, accessible React 19 + Tailwind CSS 4 single-page template with interactive calendar views, appointment scheduling cards, event lists, and responsive layout.

## Design tokens

- **Brand primary**: `#3d88f7` (accent blue) / `#1371e6` (month label)
- **Backgrounds**: `#f7f8fc` (page), `#ffffff` (calendar card)
- **Typography**: Poppins / sans-serif
- **Grid lines**: `#e6e6e6`
- **Past dates**: `#7c7d81` (gray)
- **Future dates**: `#111111` (black)
- **Chevrons**: `#b9cae7` (light blue)

## Requirements

### Requirement: Render the monthly calendar grid

The page SHALL display a calendar grid with the current month name, weekday headers (Sun–Sat), and clickable day cells.

#### Scenario: Calendar grid visible on load

- **WHEN** the page loads
- **THEN** the heading "Calendar #01" is visible
- **AND** a month name (e.g. "December 2020") is displayed
- **AND** seven weekday abbreviations (Sun, Mon, Tue, Wed, Thu, Fri, Sat) are shown

#### Scenario: Day cells are clickable

- **WHEN** the user clicks on a day number (e.g. 15)
- **THEN** that day becomes selected (highlighted with the accent color)

### Requirement: Navigate between months

The calendar SHALL provide Previous and Next month navigation buttons.

#### Scenario: Navigate to previous month

- **WHEN** the user clicks the "Previous month" button
- **THEN** the displayed month changes to the previous month
- **AND** the correct number of days for that month are shown

#### Scenario: Navigate to next month

- **WHEN** the user clicks the "Next month" button
- **THEN** the displayed month changes to the next month

### Requirement: Highlight selected date

The calendar SHALL visually distinguish the selected date with the brand accent color.

#### Scenario: Selected date has accent styling

- **WHEN** a date is selected (default: 19th)
- **THEN** that date cell has a rounded accent background and white text
- **AND** `aria-selected` is set to true on that cell

### Requirement: Show past and future date colors

Dates before and after the selected date SHALL use distinct text colors.

#### Scenario: Past dates are gray

- **WHEN** the calendar renders
- **THEN** dates before the selected date display in the past color (#7c7d81)

#### Scenario: Future dates are dark

- **WHEN** the calendar renders
- **THEN** dates after the selected date display in the future color (#111111)

### Requirement: Footer branding

The page footer SHALL link to the Component Dock website.

#### Scenario: Footer link present

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a link to "https://www.componentdock.com/" is visible
- **AND** the link text contains "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/chronogrid/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/chronogrid/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Render the monthly calendar grid — the heading "Calendar #01" is visible
- [ ] Navigate between months — the displayed month changes to the previous month
- [ ] Highlight selected date — that date cell has a rounded accent background and white text
- [ ] Show past and future date colors — dates before the selected date display in the past color (#7c7d81)
