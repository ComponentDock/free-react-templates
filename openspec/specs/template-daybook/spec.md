# Template: Daybook (Productivity / Calendar)

## Purpose

Recreation of ColorLib Calendar V14 (`https://colorlib.com/wp/template/calendar-14/`), preview URL `https://colorlib.com/etc/calendar/cal_14/` (or similar ColorLib calendar demo format), built as a modern React 19 + Tailwind CSS 4 application using TypeScript.

## Design Tokens

- **Brand Colors**: Primary indigo/violet (`#6366f1` / `#4f46e5`), slate neutrals (`#0f172a`, `#1e293b`, `#f8fafc`).
- **Font Family**: Inter / system-ui sans-serif.
- **Button Shapes**: Rounded-lg, subtle shadow, smooth hover states.
- **Section Backgrounds**: Clean white / slate-50 background with a card-based calendar layout featuring interactive date selection and event management.

## Requirements & Scenarios (Gherkin)

### Feature: Interactive Calendar & Datepicker Interface

As a user visiting Daybook, I want an intuitive calendar interface so that I can view dates, manage schedules, and interact with calendar entries.

#### Scenario: Calendar Grid Display

- **Given** the Daybook application is loaded
- **When** the user views the main calendar view
- **Then** the current month and year are displayed with a full interactive calendar grid (days of the week, dates, active/selected day highlight).

#### Scenario: Month Navigation

- **Given** the calendar is displayed
- **When** the user clicks the previous or next month buttons
- **Then** the calendar updates to show the corresponding month's grid correctly.

#### Scenario: Event Management / Date Selection

- **Given** a date is visible on the calendar grid
- **When** the user clicks on a specific date
- **Then** the date details panel opens, showing scheduled events or allowing the user to add a new event.

#### Scenario: Footer Attribution

- **Given** the user scrolls to the bottom of the page
- **When** the footer is rendered
- **Then** it displays a link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] App builds successfully with Vite and TypeScript strict mode.
- [ ] All Vitest tests pass with 100% coverage.
- [ ] Tailwind CSS 4 setup includes correct `@theme` tokens and `injectUiSource()`.
- [ ] Footer links correctly to Component Dock.
