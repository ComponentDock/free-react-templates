# Template: Kairos (Calendar / Utility Widget — Inline Date Picker with Result Field)

## Purpose

Kairos is a minimal single-page inline date-picker template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 17" website template design
(source: https://colorlib.com/wp/template/calendar-17/), built under a
DIFFERENT name (Kairos — Greek for "the right/opportune moment", fitting a
date-picking widget) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **kairos** is a single lowercase word, differs from the ColorLib
source slug (`calendar-17`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-30).

Kairos lives in `apps/kairos` and uses shared components from `packages/ui`
(cn at minimum).

## Requirements

### Requirement: Render page heading

Users SHALL see a heading "Inline Date Picker" on page load.

#### Scenario: Heading visible

- **WHEN** I visit the Kairos page
- **THEN** I see a heading "Inline Date Picker"

### Requirement: Render result input with placeholder

Users SHALL see a disabled input field with placeholder text "Select date".

#### Scenario: Input placeholder

- **WHEN** I visit the Kairos page
- **THEN** I see a disabled input with placeholder "Select date"

### Requirement: Render current month calendar

Users SHALL see the current month calendar with weekday headers and day cells.

#### Scenario: Calendar grid

- **WHEN** I visit the Kairos page
- **THEN** I see the current month and year label
- **AND** I see 7 weekday column headers (Su, Mo, Tu, We, Th, Fr, Sa)
- **AND** I see all days of the current month as selectable buttons

### Requirement: Preselect today

The calendar SHALL preselect today's date on first render.

#### Scenario: Today selected

- **WHEN** today is August 15, 2026
- **THEN** day "15" has aria-selected="true"

### Requirement: Update result input on day click

When a user clicks a day, the result input SHALL display the formatted date.

#### Scenario: Click day

- **WHEN** I click day "20"
- **THEN** the result input shows "August 20, 2026"

### Requirement: Navigate to next month

Users SHALL be able to navigate to the next month via the next button.

#### Scenario: Next month navigation

- **WHEN** I click the "Next month" button
- **THEN** the month label shows the next month
- **AND** the result input still shows the previously selected date

### Requirement: Navigate to previous month

Users SHALL be able to navigate to the previous month via the previous button.

#### Scenario: Previous month navigation

- **WHEN** I click the "Previous month" button
- **THEN** the month label shows the previous month

### Requirement: Adjacent-month days not selectable

Adjacent-month day cells SHALL NOT be selectable.

#### Scenario: Click adjacent day

- **WHEN** I click an adjacent-month day
- **THEN** it remains unselected (aria-selected="false")

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ opening in a new tab.

#### Scenario: Footer link

- **WHEN** I visit the Kairos page
- **THEN** I see a footer with a link to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

### Requirement: Keyboard activation on day cell

Day cells SHALL be activatable via Enter or Space key.

#### Scenario: Enter key

- **WHEN** I press Enter on a day cell
- **THEN** the day becomes selected

#### Scenario: Space key

- **WHEN** I press Space on a day cell
- **THEN** the day becomes selected

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 17" — one of the 20 "Bootstrap Calendars"
  demos: a single centered page holding an inline calendar with a result
  input field. The page title is "Calendar #7 (Inline + Result)".
  The original uses Bootstrap 4.3.1 + Rome.js date-picker library.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-17/`

### Design tokens

| Token       | Value                              |
| ----------- | ---------------------------------- |
| Background  | #efefef                            |
| Text        | #212529                            |
| Muted       | #ccc                               |
| Brand       | #f67280 (rose/coral accent)        |
| Font        | Roboto, weights 300-700            |
| Calendar BG | #ffffff                            |
| Shadow      | 0 15px 30px 0 rgba(0,0,0,0.2)      |
| Cell size   | 50x50px                            |
| Border-r    | 50% (rounded-full on selected day) |

### Differences from Lunar (Calendar 16)

- **Result input field** — Kairos adds a disabled text input above the
  calendar showing the selected date ("Select date" placeholder). Lunar has
  no input field.
- **Heading text** — Kairos uses "Inline Date Picker"; Lunar uses "Pick a Date".
