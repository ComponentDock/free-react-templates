# Template: Dayloom (Calendar / Productivity)

## Purpose

Recreation of ColorLib Calendar 04 (`https://colorlib.com/wp/template/calendar-04/`).
A modern interactive calendar and event schedule application featuring month/week view toggle, event creation, date selection details panel, and responsive sidebar navigation.

## Design tokens

- Brand colors: Primary indigo (`#4f46e5`), Slate neutral (`#0f172a`, `#64748b`, `#f8fafc`), Accent violet (`#8b5cf6`).
- Font family: Inter, system-ui, sans-serif.
- Button shape: Rounded-lg (`border-radius: 0.5rem`), smooth hover transitions.
- Section backgrounds: Clean white (`bg-white`) and soft neutral gray (`bg-slate-50`), dark header/footer accents.

## Requirements & Gherkin Scenarios

### 1. Navigation & Header

- As a user, I want a clean top navigation bar with search and quick actions so I can navigate the calendar app.
- Scenario: Navbar renders brand title "Dayloom", view switcher (Month / Week / Day), search input, and profile trigger.

### 2. Interactive Calendar Grid

- As a user, I want to view a full month grid with days of the week, highlight today, and select any date to view scheduled events.
- Scenario: Calendar grid renders correct days for the current month, highlights current date, and allows clicking a date cell to open day details.

### 3. Event Details Sidebar

- As a user, I want a sidebar displaying events for the selected date so I can manage my schedule.
- Scenario: Clicking a date populates the sidebar with scheduled events, time slots, and a form to add a new event.

### 4. Event Management & Modal

- As a user, I want to add new events and filter my schedule.
- Scenario: User fills out the "New Event" form, submits, and the event appears instantly in the active list and calendar marker.

### 5. Footer & Attribution

- As a user, I want a footer with quick links and required Component Dock branding.
- Scenario: Footer renders copyright, navigation links, and "Made with Component Dock" linking to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] `npm run test:coverage` passes at 100%
- [ ] Accessibility: ARIA roles, keyboard navigation, focus rings
- [ ] Responsive design on mobile and desktop
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] CNAME points to `dayloom.free.componentdock.com`
