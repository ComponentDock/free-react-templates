# Spec: CalDesk (Calendar 14 Recreation)

## Purpose

Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`), a professional desktop datepicker and calendar widget template featuring a dual-calendar grid layout with month navigation and a minimal branded footer.

## Requirements

### Requirement: Datepicker input with calendar popup

The CalDesk page SHALL display a datepicker input field with a calendar icon. Clicking the input or icon SHALL toggle a calendar popup open/closed. Selecting a date SHALL populate the input and close the popup.

#### Scenario: Clicking input opens calendar popup

- **WHEN** the user clicks the datepicker input field
- **THEN** the calendar popup becomes visible

#### Scenario: Selecting a date populates input and closes popup

- **WHEN** the user clicks a day in the calendar
- **THEN** the input displays the selected date and the popup closes

### Requirement: Interactive calendar grid with month navigation

Each calendar instance SHALL display a month/year header flanked by previous and next navigation buttons, a weekday abbreviations row (Su Mo Tu We Th Fr Sa), and a 7-column date grid with correct alignment.

#### Scenario: Calendar renders correct day grid

- **WHEN** the calendar displays a given month
- **THEN** it shows the correct number of day buttons with empty cells before the 1st

#### Scenario: Month navigation with year rollover

- **WHEN** the user clicks the previous or next button at the boundary of January/December
- **THEN** the year increments or decrements accordingly

### Requirement: Footer with Component Dock branding

The footer SHALL display copyright information and a link to `https://www.componentdock.com/` branded as "Component Dock". No references to ColorLib SHALL appear in the application code.

#### Scenario: Footer renders Component Dock link

- **WHEN** the user views the footer
- **THEN** it contains a link to componentdock.com branded as "Component Dock"
