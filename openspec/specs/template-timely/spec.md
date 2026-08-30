# Template: Timely (Calendar & Scheduling)

## Purpose

Recreation of ColorLib Calendar V09 (`https://colorlib.com/wp/template/calendar-09/`), previewed at `https://preview.colorlib.com/theme/calendar-09/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript (strict).

## Design Tokens

- **Brand Colors**: Clean minimalist slate/gray palette with primary accent pink (`#e13a9d`), neutral dark text (`#000000`), light gray page background (`#f8f9fd`), white card (`#ffffff`), selected state (`#2a3246`).
- **Typography**: Lato font family (Google Fonts), weight 300/400/700.
- **Button / Input Radii**: Rounded date circles, small border-radius on pills.
- **Layout**: Two-panel calendar widget — left photo overlay with large day number, right white grid with weekday headers and 6-row date grid.

## Requirements

### Requirement: Page Structure

The application SHALL display a centered calendar widget with a left photo panel and a right date grid, plus a footer linking Component Dock.

#### Scenario: Initial page render

- **WHEN** the user loads the page
- **THEN** a heading "Timely - Advanced Calendar & Scheduling" is visible
- **AND** a calendar widget is rendered
- **AND** a footer with a "More templates at Component Dock" link is visible

### Requirement: Calendar Widget — Default State

The calendar widget SHALL default to December 2020 (reference today) with day 19 highlighted as "today".

#### Scenario: Default month and day

- **WHEN** the page loads
- **THEN** the month label reads "DECEMBER - 2020"
- **AND** the large day number on the left panel shows "19"
- **AND** day 19 has the brand-colored circle

#### Scenario: Weekday headers

- **WHEN** the calendar renders
- **THEN** seven weekday abbreviations are shown: Sun, Mon, Tue, Wed, Thu, Fri, Sat

#### Scenario: Date cell count

- **WHEN** the calendar shows December 2020
- **THEN** 31 date buttons are rendered

### Requirement: Date Selection

Users SHALL be able to click a date to select it, which updates the large day number display.

#### Scenario: Select a date

- **WHEN** the user clicks day 5
- **THEN** day 5 gets the selected styling
- **AND** the large day number changes to "5"

#### Scenario: Today remains highlighted

- **WHEN** the user selects a different date
- **THEN** day 19 still has the brand-colored circle

### Requirement: Month Navigation

Users SHALL navigate between months using prev/next arrows. The big day number resets to 1 on navigation.

#### Scenario: Next month

- **WHEN** the user clicks the next-month arrow
- **THEN** the month label shows "JANUARY - 2021"
- **AND** 31 date buttons are rendered

#### Scenario: Previous month

- **WHEN** the user clicks the previous-month arrow
- **THEN** the month label shows "NOVEMBER - 2020"
- **AND** 30 date buttons are rendered

#### Scenario: Year rollover

- **WHEN** the user is on December 2020 and clicks next
- **THEN** the month label shows "JANUARY - 2021"

#### Scenario: Day resets on navigation

- **WHEN** the user navigates to another month
- **THEN** the large day number resets to "1"

### Requirement: Reset to Today

Users SHALL be able to reset the calendar back to the reference today (December 2020, day 19) via a "Today" pill button.

#### Scenario: Reset button

- **WHEN** the user navigates away from December 2020
- **AND** clicks the "Today" button
- **THEN** the month label shows "DECEMBER - 2020"
- **AND** the large day number shows "19"

#### Scenario: Reset clears selection

- **WHEN** the user selects a date and then clicks "Today"
- **THEN** the selected date is no longer highlighted

### Requirement: Keyboard Accessibility

Date cells SHALL be keyboard accessible via Enter and Space keys.

#### Scenario: Enter key selects date

- **WHEN** the user focuses a date cell and presses Enter
- **THEN** that date becomes selected

#### Scenario: Space key selects date

- **WHEN** the user focuses a date cell and presses Space
- **THEN** that date becomes selected

### Requirement: Footer

The footer SHALL contain a link to Component Dock.

#### Scenario: Footer link

- **WHEN** the page renders
- **THEN** a "More templates at Component Dock" link points to `https://www.componentdock.com/`
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links Component Dock (`https://www.componentdock.com/`)
