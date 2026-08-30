# Spec: CalGrid (Calendar & Date Picker)

## Purpose

Recreation of ColorLib Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`), a clean calendar date picker template featuring a centered dual-calendar grid layout with month navigation and a minimal footer.

## Requirements

### Requirement: Centered page layout with dual calendar grids

The CalGrid page SHALL display a centered vertical layout with white background, a prominent title heading, and two calendar instances displayed side by side on desktop and stacked on mobile.

#### Scenario: Page load renders layout

- **WHEN** the user visits the CalGrid page
- **THEN** the page shows a centered heading and two calendar grids

### Requirement: Calendar grid with month header and weekday row

Each calendar instance SHALL display a month/year header in uppercase bold text, flanked by previous/next navigation chevron buttons, with a weekday abbreviations row (Sun–Sat) and a 7-column date grid.

#### Scenario: Calendar renders correct day grid

- **WHEN** the calendar displays a given month
- **THEN** it shows the correct number of day buttons with empty cells before the 1st

### Requirement: Month navigation with year rollover

Clicking the previous or next button SHALL navigate to the prior or subsequent month respectively, correctly handling year rollover (December → January increments the year).

#### Scenario: Navigate to next month

- **WHEN** the user clicks the "next month" button
- **THEN** the calendar displays the subsequent month with correct day positions

#### Scenario: Year rollover from December to January

- **WHEN** the calendar shows December and the user clicks "next month"
- **THEN** the calendar displays January of the following year

### Requirement: Today highlighting with accent color

Today's date SHALL be visually highlighted with the accent background color and white text, and its aria-label SHALL include "(today)".

#### Scenario: Today is highlighted

- **WHEN** the calendar renders the current month
- **THEN** today's date button has the accent background and "(today)" in its label

### Requirement: Accessible date buttons and navigation

All date buttons SHALL have descriptive aria-labels including day number, month, year, and "(today)" for the current date. Navigation buttons SHALL have aria-labels distinguishing them per calendar instance.

#### Scenario: Date buttons have accessible labels

- **WHEN** the calendar renders a date button
- **THEN** its aria-label includes the day number, month name, and year

### Requirement: Component Dock footer

The template footer SHALL link to `https://www.componentdock.com/` branded as "Component Dock" with a message like "More templates at Component Dock".

#### Scenario: Footer branding

- **WHEN** the page footer is rendered
- **THEN** it contains a link to componentdock.com with rel="noopener noreferrer"
