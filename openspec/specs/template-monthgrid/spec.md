# Template: MonthGrid (Calendar 03)

- **Category**: Productivity / Calendar
- **Source**: ColorLib Calendar 03 (`https://colorlib.com/wp/template/calendar-03/`)
- **Preview URL**: `https://preview.colorlib.com/theme/calendar-03/`
- **New Name**: `monthgrid`
- **Package**: `@free-react-templates/monthgrid`

## Purpose

A clean, modern two-month interactive calendar template featuring dual-month side-by-side display, month navigation controls, event management, and a clean minimalist aesthetic.

## Design Tokens (Captured from Reference)

- **Primary Color**: Indigo / Deep Blue (`#4f46e5` / `indigo-600`) with soft accent shading (`#818cf8` / `indigo-400`).
- **Neutral Palette**: Clean grays (`slate-50` backgrounds, `slate-900` text, `slate-200` borders).
- **Typography**: Sans-serif font family (Inter / System UI), bold uppercase month headings (`tracking-wider`).
- **Layout**: Responsive two-month grid layout with previous/next month navigation buttons, day cells with hover effects, and event indicator dots.
- **Footer**: Required Component Dock attribution (`https://www.componentdock.com/`).

## Requirements & Gherkin Scenarios

### Feature: Two-Month Calendar View

As a user, I want to view two consecutive months side by side so I can easily plan across months.

#### Scenario: Initial Load

- **Given** the user opens the MonthGrid application
- **When** the page loads
- **Then** two months are displayed side by side (e.g., current month and the following month) with clear grid headers for days of the week (Sun-Sat).

#### Scenario: Month Navigation

- **Given** the user is viewing the calendar
- **When** the user clicks the previous or next month navigation buttons
- **Then** the calendar updates both month views accordingly.

### Feature: Event Management & Day Details

As a user, I want to click on a day cell to view or add events.

#### Scenario: Selecting a Date

- **Given** the user is viewing the calendar grid
- **When** the user clicks on a specific day cell
- **Then** a detail panel or modal opens showing scheduled events for that date and an option to add a new event.

## Verification Checklist

- [ ] App folder created at `apps/monthgrid`
- [ ] Registered in `package.json` workspaces and `package-lock.json`
- [ ] `vite.config.ts` includes `injectUiSource()`
- [ ] Public CNAME set to `monthgrid.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/`
- [ ] 100% test coverage with Vitest + Testing Library
- [ ] Verified via `scripts/verify-app.sh monthgrid`
