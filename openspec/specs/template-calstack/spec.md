# Spec: Calstack (Calendar 15 Recreation)

## Purpose

Recreation of ColorLib Calendar 15 (`https://colorlib.com/wp/template/calendar-15/`), an interactive calendar date picker and event scheduling interface featuring dual month grids with navigation and a minimal branded footer.

## Requirements

### Requirement: Interactive calendar grid with month navigation

Each calendar instance SHALL display a month/year header flanked by previous and next navigation buttons, a weekday abbreviations row (Sun Mon Tue Wed Thu Fri Sat), and a 7-column date grid with correct alignment. Today's date SHALL be highlighted with an accent background.

#### Scenario: Calendar renders correct day grid

- **WHEN** the calendar displays a given month
- **THEN** it shows the correct number of day buttons with empty cells before the 1st

#### Scenario: Month navigation with year rollover

- **WHEN** the user clicks the previous or next button at the boundary of January/December
- **THEN** the year increments or decrements accordingly

#### Scenario: Today is highlighted

- **WHEN** the calendar renders the current month
- **THEN** today's date button has an accent background and includes "(today)" in its accessible label

### Requirement: Dual calendar layout

The page SHALL display two side-by-side calendar instances in a responsive grid that stacks on mobile.

#### Scenario: Both calendars render with the same initial month

- **WHEN** the page loads
- **THEN** both calendars show the current month and year

### Requirement: Footer with Component Dock branding

The footer SHALL display a link to `https://www.componentdock.com/` branded as "Component Dock". No references to ColorLib SHALL appear in the application code.

#### Scenario: Footer renders Component Dock link

- **WHEN** the user views the footer
- **THEN** it contains a link to componentdock.com branded as "Component Dock"
