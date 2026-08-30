# Specification: Calflow (Calendar 14)

## Purpose

Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`), implemented as a modern React 19 + Tailwind CSS 4 application (`apps/calflow`).

## Design Tokens & Aesthetic

- **Brand Colors**: Clean corporate slate (`bg-slate-900`, `text-slate-100`), vibrant blue accent (`bg-blue-600`, `text-blue-500`), crisp white card containers (`bg-white dark:bg-slate-800`), muted gray borders (`border-slate-200 dark:border-slate-700`).
- **Typography**: Sans-serif (`Inter`, system-ui), clean hierarchy, high contrast.
- **Layout**: Centered dashboard calendar widget with interactive date selection, event sidebar, quick scheduling modal, month/week view toggle, and footer linking Component Dock.

## Requirements & Gherkin Scenarios

### Feature: Calendar Dashboard & Interactive Date Grid

As a user, I want to view a fully interactive calendar grid, switch months, select dates, and see scheduled events so I can organize my schedule.

#### Scenario: Default view shows current month grid

- **Given** the user opens the Calflow calendar application
- **When** the calendar loads
- **Then** the current month and year are displayed in the header
- **And** the days of the week and date grid are rendered accurately with today highlighted.

#### Scenario: Switching months

- **Given** the user is viewing the calendar grid
- **When** the user clicks the "Next Month" or "Previous Month" navigation buttons
- **Then** the calendar grid updates to show the corresponding month's days correctly aligned.

#### Scenario: Selecting a date and viewing events

- **Given** the user is on the calendar view
- **When** the user clicks on a specific date cell (e.g., the 15th)
- **Then** that date becomes active and the event sidebar displays events scheduled for that day or an empty state prompting to add an event.

### Feature: Event Management & Quick Add

As a user, I want to add new events, filter by category, and view upcoming reminders.

#### Scenario: Adding a new event

- **Given** the user clicks "Add Event" or selects a date
- **When** the user fills in the event title, time, and category and clicks Save
- **Then** the new event appears in both the daily schedule list and calendar indicator dots.

### Feature: Footer & Attribution

#### Scenario: Footer links Component Dock

- **Given** the user scrolls to the bottom of the page
- **When** the footer renders
- **Then** it displays "Made with Component Dock" linking to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes.
- [ ] 100% test coverage on all components.
- [ ] Component Dock footer link present.
- [ ] Zero mention of ColorLib in app code.
