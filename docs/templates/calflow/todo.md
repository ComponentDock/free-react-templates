# Calflow Tasks & Design Notes

Recreation of ColorLib Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`).

## Architecture & Structure

1. `Navbar.tsx` — Top bar with brand, view switcher, and "New Event" CTA.
2. `CalendarGrid.tsx` — Month calendar view with grid cells, day indicators, and event dots.
3. `EventSidebar.tsx` — Agenda sidebar showing scheduled events for the active date.
4. `EventModal.tsx` — Form for creating new calendar events.
5. `Footer.tsx` — Footer with Component Dock branding (`https://www.componentdock.com/`).

## Design Tokens & Fidelity

- Colors: Slate (`#1e293b`), Indigo (`#6366f1`), Neutral gray (`#f8fafc`).
- Typography: Inter (`font-sans`).
- Interactive states: Hover states on calendar cells, active pill indicators, accessible buttons.
