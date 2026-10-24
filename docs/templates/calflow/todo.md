# Calflow Tasks & Design Notes
<!-- prep-status: shipped-as=caldesk -->
> **SHIPPED-UNDER** — the ColorLib `calendar-14` design this prep describes already
> ships as `apps/caldesk` (<https://caldesk.free.componentdock.com>).
> Do not scaffold `apps/calflow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-caldesk/spec.md`.

Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`).
<!-- corrected 2026-10-24: this line read `calendar-12` (a sibling design that
     several apps recreate), while the header, README.md and the shipped spec
     `openspec/specs/template-caldesk/spec.md` all read `calendar-14`.
     https://colorlib.com/wp/template/calendar-14/ is HTTP 200 (113,648 B). -->

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
