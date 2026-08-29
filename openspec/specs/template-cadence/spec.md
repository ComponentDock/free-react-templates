# Template: Cadence — Modern Monthly Calendar & Event Planner

## Purpose

Recreation of ColorLib "Calendar 04" (https://colorlib.com/wp/template/calendar-04/)
as "Cadence" — a modern monthly calendar and event planner component built with
React 19, Tailwind CSS 4, and TypeScript. (Note: Live preview URL `https://preview.colorlib.com/theme/calendar-04/` returned 404; research based on official ColorLib screenshot `https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-04.jpg`).

## Requirements

### Requirement: Calendar renders month grid and header

Users SHALL see a clean monthly calendar view featuring a header with month and year navigation, weekday headers, and a responsive date grid.

#### Scenario: Page loads with calendar view

- **WHEN** the page loads
- **THEN** I see the current month and year in the header
- **AND** I see weekday headers (Sun–Sat)
- **AND** I see the date cells for the month

### Requirement: Month navigation via arrows

Users SHALL be able to navigate forward and backward between months using left and right chevron buttons.

#### Scenario: Navigate to next month

- **GIVEN** the calendar shows August 2026
- **WHEN** I click the next month button
- **THEN** the calendar updates to show September 2026

#### Scenario: Navigate to previous month

- **GIVEN** the calendar shows August 2026
- **WHEN** I click the previous month button
- **THEN** the calendar updates to show July 2026

### Requirement: Today's date is highlighted

Today's date cell SHALL feature a distinctive primary brand color highlight.

#### Scenario: Today highlight

- **GIVEN** the page loads on today's date
- **WHEN** I view the calendar grid
- **THEN** today's date cell has a highlighted background and accessible label

### Requirement: Event indicators and list view

The calendar SHALL display event badges on specific days and support selecting a date to view scheduled events.

#### Scenario: Select date with events

- **GIVEN** a date has scheduled events
- **WHEN** I click on that date
- **THEN** the event details panel updates to show the events for that day

### Requirement: Footer links to Component Dock

The page footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the page loads
- **WHEN** I scroll to the footer
- **THEN** I see "More templates at Component Dock" linking to https://www.componentdock.com/

## Design Tokens

| Token          | Value               |
| -------------- | ------------------- |
| Font family    | Inter / System Sans |
| Primary accent | #4f46e5 (Indigo)    |
| Neutral dark   | #1f2937 (Gray 800)  |
| Neutral light  | #f9fafb (Gray 50)   |
| Border color   | #e5e7eb (Gray 200)  |
| Header height  | 60px                |
| Calendar max-w | 768px               |
