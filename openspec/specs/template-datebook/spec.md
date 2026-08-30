# Template: Datebook (Calendar / Productivity)

## Purpose

Recreation of ColorLib **Calendar 12** (`https://colorlib.com/wp/template/calendar-12/`), previewed at `https://preview.colorlib.com/theme/calendar-12/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons, Vitest.

## Design tokens

- **Brand Colors**: Primary indigo/violet (`#6366f1` / `#4f46e5`), slate neutrals (`#f8fafc` background, `#0f172a` text, `#e2e8f0` borders).
- **Typography**: Inter / system sans-serif font family. Clean modern weights (400, 500, 600, 700).
- **Component Shapes**: Rounded cards (`rounded-2xl`), smooth button transitions, soft shadow elevations (`shadow-xl`).
- **Layout**: Centered interactive date picker widget with month header, day grid, quick actions (Today, Clear, Close), and event list sidebar.

## Requirements & Gherkin Scenarios

### Feature: Interactive Calendar & Date Picker Widget

As a user, I want to view an interactive calendar month grid, select dates, view scheduled events for the selected date, and use quick actions so I can manage my schedule efficiently.

#### Scenario: Monthly navigation and date selection

- **Given** the Datebook calendar application is loaded
- **When** the user clicks the next/previous month chevron buttons
- **Then** the calendar view updates to display the correct month and year
- **And** clicking any day cell selects that date and highlights it

#### Scenario: Quick action buttons

- **Given** the calendar date picker is open
- **When** the user clicks the "Today" button
- **Then** the calendar jumps to the current date and selects it
- **When** the user clicks "Clear"
- **Then** the current date selection is cleared
- **When** the user clicks "Close"
- **Then** the date picker dialog closes or collapses

#### Scenario: Event listing for selected date

- **Given** a date with scheduled events is selected
- **When** the event panel renders
- **Then** it displays time slots, event titles, and categories with appropriate badges
- **And** the footer links to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] App renders correctly with responsive layout
- [ ] Tailwind CSS 4 theme tokens configured
- [ ] 100% test coverage with Vitest + Testing Library
- [ ] Footer contains Component Dock link
- [ ] No mention of ColorLib in source code
