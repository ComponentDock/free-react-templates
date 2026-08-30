# Template: Epoch (Calendar & Scheduling)

## Purpose

Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`, preview unreachable, designed from screenshot reference). Built with Vite, React 19, Tailwind CSS 4, and TypeScript. Provides an elegant modern calendar event planner and scheduling interface with date selection, event management, and responsive layout.

## Design Tokens

- **Brand Colors**:
  - Primary: `#4f46e5` (Indigo-600) for active dates, buttons, and brand accents.
  - Secondary/Accent: `#06b6d4` (Cyan-500) for highlights and badges.
  - Neutral Background: `#f8fafc` (Slate-50) for canvas, `#ffffff` for cards.
  - Text: `#0f172a` (Slate-900) for headings, `#475569` (Slate-600) for body/muted text.
- **Typography**:
  - Font Family: `Inter`, sans-serif.
- **Radii & Shadows**:
  - Card Radius: `rounded-xl` (12px).
  - Button Radius: `rounded-lg` (8px).
  - Shadows: `shadow-md`, `shadow-lg`.

## Gherkin Requirements & Scenarios

### Feature: Calendar View & Date Navigation

As a user, I want to view a monthly calendar grid and navigate between months so that I can check dates and schedules.

#### Scenario: Display current month grid

- **Given** the user loads the Epoch calendar application
- **Then** the current month and year header should be displayed
- **And** a 7-column grid of days of the week should be visible
- **And** all days of the month should be correctly laid out with weekend highlights

#### Scenario: Navigate months

- **Given** the user is viewing the calendar
- **When** the user clicks the "Next Month" or "Previous Month" button
- **Then** the calendar grid should update to show the corresponding month and year

### Feature: Event Management & Schedule List

As a user, I want to see scheduled events for selected dates and add new events.

#### Scenario: View events for selected date

- **Given** the user selects a specific date on the calendar grid
- **Then** the event sidebar or list should display scheduled events for that date
- **And** each event should show time, title, and category badge

#### Scenario: Add a new event

- **Given** the user clicks the "Add Event" button or selects a time slot
- **When** the user fills in the event title, time, and description and submits
- **Then** the new event should appear in the schedule list for that date

### Feature: Responsive Layout & Footer Attribution

As a user, I want a fully responsive layout and clear attribution.

#### Scenario: Responsive view across devices

- **Given** the user views the application on mobile or desktop
- **Then** the layout should adapt gracefully with collapsible sidebars and touch-friendly buttons

#### Scenario: Footer attribution link

- **Given** the user scrolls to the bottom of the page
- **Then** the footer must display copyright and link `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] Vite dev server starts successfully with zero type or build errors
- [ ] Calendar grid renders correct month days and navigation works
- [ ] Event scheduling and list interaction work smoothly
- [ ] Tailwind v4 `@theme` tokens and styles apply correctly
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Vitest unit tests pass with 100% coverage
