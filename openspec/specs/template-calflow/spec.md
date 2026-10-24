# Specification: Calflow (Calendar 14)
<!-- prep-status: shipped-as=caldesk -->
> **SHIPPED-UNDER** — the ColorLib `calendar-14` design this prep describes already
> ships as `apps/caldesk` (<https://caldesk.free.componentdock.com>).
> Do not scaffold `apps/calflow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-caldesk/spec.md`.

## Purpose

Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`), implemented as a modern React 19 + Tailwind CSS 4 application (`apps/calflow`).
- **Source design:** ColorLib "Calendar 14" — https://colorlib.com/wp/template/calendar-14/

## Design Tokens & Aesthetic

- **Brand Colors**: Clean corporate slate (`bg-slate-900`, `text-slate-100`), vibrant blue accent (`bg-blue-600`, `text-blue-500`), crisp white card containers (`bg-white dark:bg-slate-800`), muted gray borders (`border-slate-200 dark:border-slate-700`).
- **Typography**: Sans-serif (`Inter`, system-ui), clean hierarchy, high contrast.
- **Layout**: Centered dashboard calendar widget with interactive date selection, event sidebar, quick scheduling modal, month/week view toggle, and footer linking Component Dock.

## Requirements

### Feature: Calendar Dashboard & Interactive Date Grid

As a user, I want to view a fully interactive calendar grid, switch months, select dates, and see scheduled events so I can organize my schedule.

#### Scenario: Default view shows current month grid

- **GIVEN** the user opens the Calflow calendar application
- **WHEN** the calendar loads
- **THEN** the current month and year are displayed in the header
- **AND** the days of the week and date grid are rendered accurately with today highlighted

#### Scenario: Switching months

- **GIVEN** the user is viewing the calendar grid
- **WHEN** the user clicks the "Next Month" or "Previous Month" navigation buttons
- **THEN** the calendar grid updates to show the corresponding month's days correctly aligned

#### Scenario: Selecting a date and viewing events

- **GIVEN** the user is on the calendar view
- **WHEN** the user clicks on a specific date cell (e.g., the 15th)
- **THEN** that date becomes active and the event sidebar displays events scheduled for that day or an empty state prompting to add an event

### Feature: Event Management & Quick Add

As a user, I want to add new events, filter by category, and view upcoming reminders.

#### Scenario: Adding a new event

- **GIVEN** the user clicks "Add Event" or selects a date
- **WHEN** the user fills in the event title, time, and category and clicks Save
- **THEN** the new event appears in both the daily schedule list and calendar indicator dots

### Feature: Footer & Attribution

#### Scenario: Footer links Component Dock

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer renders
- **THEN** it displays "Made with Component Dock" linking to `https://www.componentdock.com/`

## Verification checklist

- [ ] Spec validation (`npm run spec:validate`) passes.
- [ ] 100% test coverage on all components.
- [ ] Component Dock footer link present.
- [ ] Zero mention of ColorLib in app code.
