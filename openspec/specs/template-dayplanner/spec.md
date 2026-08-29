# Template: DayPlanner (Calendar & Events App)

## Purpose

Recreation of ColorLib Calendar V07 (`https://colorlib.com/wp/template/calendar-07/`), a calendar widget with an integrated image background and events display, built using Vite, React 19, Tailwind CSS 4, and TypeScript (strict).

## Design Tokens

- **Brand Colors:** Primary blue `#007bff`, dark slate `#1a1a1a`, soft gray background `#f8f9fa`, white cards `#ffffff`.
- **Font Family:** "Poppins", sans-serif.
- **Button & Card Styling:** Rounded corners (`rounded-xl`), soft shadow (`shadow-lg`), clean hover transitions.
- **Section Structure:** Split layout with an image/event background panel on the left/top and an interactive calendar grid on the right/bottom.

## Gherkin Requirements & Scenarios

### Feature: Interactive Calendar Widget

As a user, I want to view a monthly calendar grid with selectable days, so that I can check dates and view scheduled events.

#### Scenario: Display current month and navigation

- Given the user opens the DayPlanner application
- When the calendar renders
- Then the current month and year are displayed with previous/next month navigation arrows
- And weekdays (Sun-Sat) are correctly listed

#### Scenario: Select a date and view events

- Given the calendar shows the current month
- When the user clicks on a specific date (e.g. 15th)
- Then that date is highlighted as selected
- And the side panel updates to show the background image, date header, and scheduled events for that day

#### Scenario: Add a new event

- Given the user is viewing a selected date
- When the user clicks the "Add Event" button and submits event details (title, time)
- Then the event is added to the list for that date
- And displayed immediately in the events panel

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements
- [ ] Production build succeeds (`npm run build`)
- [ ] Footer includes link to `https://www.componentdock.com/` ("Component Dock")
- [ ] Public CNAME and homepage configured correctly
