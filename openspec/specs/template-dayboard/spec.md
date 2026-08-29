# Template: Dayboard (Calendar & Scheduling)

## Purpose

Recreation of ColorLib Calendar 05 (`https://colorlib.com/wp/template/calendar-05/`, preview: `https://preview.colorlib.com/theme/bootstrap/calendar-05/`).
A modern, interactive scheduling and date picker calendar application built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Brand Colors**: Primary deep indigo (`#4f46e5` / `indigo-600`), accent teal (`#0d9488` / `teal-600`), neutral slate background (`#f8fafc` / `slate-50`), card surface (`#ffffff`), text primary (`#0f172a` / `slate-900`), text muted (`#64748b` / `slate-500`).
- **Font Family**: Inter / system sans-serif (`font-sans`).
- **Button / Shape Styles**: Rounded-xl (`rounded-xl`), soft shadows (`shadow-sm`), subtle border states, smooth hover transitions.
- **Section Structure**:
  1. Header / Navigation bar with branding and quick view toggles.
  2. Hero / Intro banner with title and quick date status.
  3. Interactive Year / Month / Day Picker columns and selectors.
  4. Calendar Grid view displaying current month days, selected date highlights, and event markers.
  5. Schedule / Event Details sidebar or panel for managing daily appointments.
  6. Footer featuring the Component Dock attribution (`https://www.componentdock.com/`).

## Requirements & Scenarios (Gherkin)

### Feature: Interactive Date Selection & Calendar Grid

As a user, I want to select years, months, and days to view and manage my calendar schedule seamlessly.

#### Scenario: Selecting Year, Month, and Day

- **Given** the Dayboard calendar is loaded
- **When** I select year "2026", month "09", and day "28" from the selector columns
- **Then** the calendar grid updates to highlight September 28, 2026, showing scheduled events for that date.

#### Scenario: Navigating Calendar Months

- **Given** the calendar is currently displaying August 2026
- **When** I click the "Next Month" button
- **Then** the view transitions to September 2026 with correct day alignment.

### Feature: Schedule & Event Management

As a user, I want to view, add, and filter daily scheduled items.

#### Scenario: Viewing Daily Events

- **Given** I have selected a date with scheduled appointments
- **When** I look at the event list panel
- **Then** I see the time, title, category, and status of each appointment.

#### Scenario: Adding a New Event

- **Given** I am viewing the daily schedule
- **When** I click "New Event", fill in title "Team Sync" at 10:00 AM, and save
- **Then** the new event appears in the schedule list and updates the calendar indicator.

## Verification Checklist

- [ ] App builds successfully with Vite and TypeScript strict mode.
- [ ] All tests pass under Vitest with 100% code coverage.
- [ ] Footer correctly links to `https://www.componentdock.com/`.
- [ ] Responsive layout adapts cleanly across mobile, tablet, and desktop viewports.
