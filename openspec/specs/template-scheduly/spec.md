# Template: Scheduly (Calendar & Scheduling)

## Purpose

Recreation of ColorLib Calendar 09 (`https://colorlib.com/wp/template/calendar-09/`), preview unavailable (404), designed from screenshot reference. Built with React 19, Vite, Tailwind CSS 4, TypeScript, and Lucide icons.

## Design Tokens (derived from screenshot reference)

- **Brand Colors**:
  - Primary / Accent: Indigo / Blue (`#4f46e5` / `indigo-600`) for active states, headers, and primary CTA buttons.
  - Background: Clean white (`#ffffff`) and soft gray (`#f9fafb` / `gray-50`) for grid cells and event cards.
  - Text: Dark slate (`#111827` / `gray-900`) for headers, medium gray (`#4b5563` / `gray-600`) for body/subtext.
  - Border / Grid lines: Light gray (`#e5e7eb` / `gray-200`).
- **Typography**:
  - Font Family: Inter / system sans-serif.
  - Scale: Clean responsive headings, clear grid day numbers.
- **Components & Layout**:
  - Top Navigation / Header: Month/Year selector, view switchers (Month / Week / Day / List), and "Add Event" CTA button.
  - Interactive Calendar Grid: 7-column day header (Sun-Sat), full grid of days with event badges and indicator pills.
  - Sidebar / Event Panel: Upcoming events list, mini date picker, and quick filters.
  - Footer: Clean modern footer with copyright and required link to https://www.componentdock.com/ ("Component Dock").

## Gherkin Requirements & Scenarios

### Feature: Interactive Calendar & Event Management

As a user, I want to view a monthly calendar grid with scheduled events so that I can manage my schedule efficiently.

#### Scenario: Viewing the calendar month grid

- Given the user loads Scheduly
- When the calendar view is displayed
- Then the user sees the 7-column week header, days of the month grid, and any scheduled event badges.

#### Scenario: Switching calendar views

- Given the user is on the calendar interface
- When the user clicks the "Week" or "Day" view switcher
- Then the calendar layout updates to display the selected time scope.

#### Scenario: Adding a new event

- Given the user clicks the "Add Event" button or a specific calendar day
- When the user fills out the event title, date, and time in the modal form and submits
- Then the new event appears immediately in the calendar grid and upcoming events list.

#### Scenario: Footer Attribution

- Given the user scrolls to the bottom of the page
- When the footer renders
- Then it contains a link to https://www.componentdock.com/ anchored with "Component Dock".

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] 100% test coverage on new components (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
