# Template: DayPlanner (Calendar & Events App)

## Purpose

Recreation of ColorLib Calendar V07 (`https://colorlib.com/wp/template/calendar-07/`), a calendar widget with an integrated image background and events display, built using Vite, React 19, Tailwind CSS 4, and TypeScript (strict).

## Design Tokens

- **Brand Colors:** Primary blue `#007bff`, dark slate `#1a1a1a`, soft gray background `#f8f9fa`, white cards `#ffffff`.
- **Font Family:** "Poppins", sans-serif.
- **Button & Card Styling:** Rounded corners (`rounded-xl`), soft shadow (`shadow-lg`), clean hover transitions.
- **Section Structure:** Split layout with an image/event background panel on the left/top and an interactive calendar grid on the right/bottom.

## Requirements

### Feature: Interactive Calendar Widget

As a user, I want to view a monthly calendar grid with selectable days, so that I can check dates and view scheduled events.

#### Scenario: Display current month and navigation

- **GIVEN** the user opens the DayPlanner application
- **WHEN** the calendar renders
- **THEN** the current month and year are displayed with previous/next month navigation arrows
- **AND** weekdays (Sun-Sat) are correctly listed

#### Scenario: Select a date and view events

- **GIVEN** the calendar shows the current month
- **WHEN** the user clicks on a specific date (e.g. 15th)
- **THEN** that date is highlighted as selected
- **AND** the side panel updates to show the background image, date header, and scheduled events for that day

#### Scenario: Add a new event

- **GIVEN** the user is viewing a selected date
- **WHEN** the user clicks the "Add Event" button and submits event details (title, time)
- **THEN** the event is added to the list for that date
- **AND** displayed immediately in the events panel

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements
- [ ] Production build succeeds (`npm run build`)
- [ ] Footer includes link to `https://www.componentdock.com/` ("Component Dock")
- [ ] Public CNAME and homepage configured correctly

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/calendar-07/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#007bff` — nearest `#e13a9d` (d=254)
<!-- live-palette-unverified:end -->
