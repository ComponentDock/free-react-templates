# Template: Dayloom

## Purpose

Recreation of ColorLib Calendar 04 (https://colorlib.com/wp/template/calendar-04/). A modern interactive calendar and event schedule application featuring month navigation, event creation, date selection details panel, and responsive sidebar navigation.

## Design tokens

- Brand colors: Primary indigo (#4f46e5), Slate neutral (#0f172a, #64748b, #f8fafc), Accent violet (#8b5cf6)
- Font family: Inter, system-ui, sans-serif
- Button shape: Rounded-lg (border-radius: 0.5rem), smooth hover transitions
- Section backgrounds: Clean white (bg-white) and soft neutral gray (bg-slate-50)

## Requirements

### Requirement: Navigation & Header

A top navigation bar with brand title, view switcher, and search input.

#### Scenario: Navbar renders brand and controls

- **GIVEN** the app is loaded
- **WHEN** the page renders
- **THEN** the navbar shows the brand title "Dayloom", view switcher buttons (Month, Week, Day), and a search input

### Requirement: Interactive Calendar Grid

A full month grid with days of the week, today highlight, and date selection.

#### Scenario: Calendar grid displays current month

- **GIVEN** the app is loaded
- **WHEN** the calendar renders
- **THEN** it shows the current month name, all seven weekday headers, and correct number of date buttons for the current month

#### Scenario: Today is highlighted

- **GIVEN** the calendar is rendered
- **WHEN** the current date is visible
- **THEN** today's date cell has indigo styling and bold text

#### Scenario: Month navigation

- **GIVEN** the calendar is rendered
- **WHEN** the user clicks the previous or next month button
- **THEN** the calendar updates to show the adjacent month

#### Scenario: Date selection

- **GIVEN** the calendar is rendered
- **WHEN** the user clicks a date cell
- **THEN** the date is selected and the sidebar updates to show events for that date

### Requirement: Event Details Sidebar

A sidebar displaying events for the selected date with add and delete functionality.

#### Scenario: Sidebar shows selected date

- **GIVEN** a date is selected
- **WHEN** the sidebar renders
- **THEN** it shows the formatted date and an events list

#### Scenario: Add new event

- **GIVEN** the sidebar is visible
- **WHEN** the user fills in the event title and clicks Add Event
- **THEN** the new event appears in the event list and on the calendar

#### Scenario: Delete event

- **GIVEN** events exist for the selected date
- **WHEN** the user clicks the delete button on an event
- **THEN** that event is removed from the list

### Requirement: Footer & Attribution

A footer with Component Dock branding.

#### Scenario: Footer links to Component Dock

- **GIVEN** the app is loaded
- **WHEN** the footer renders
- **THEN** it shows a link to https://www.componentdock.com/ labeled "Component Dock"

### Requirement: Calendar Grid with Event Badges

The calendar grid shows event badges on dates that have scheduled events.

#### Scenario: Event badges on calendar cells

- **GIVEN** events exist for a specific date
- **WHEN** the calendar renders that date
- **THEN** the date cell shows a truncated badge with the event title

#### Scenario: More than two events

- **GIVEN** more than two events exist on a single date
- **WHEN** the calendar renders that date
- **THEN** only the first two event badges are shown and a "+N more" indicator appears
