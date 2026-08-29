# Calendry — Implementation Tasks & Design Notes

## Overview

Recreation of ColorLib **Calendar 02** as **Calendry** (`apps/calendry`), a modern, responsive vertical calendar and event scheduling widget built with React 19 and Tailwind CSS 4.

## Section Breakdown & Fidelity Notes

1. **Header / Navigation Bar**: Clean app bar with logo, title, and quick links. Footer link pointing to Component Dock (`https://www.componentdock.com/`).
2. **Calendar Header**: Month and year display with chevron navigation (Previous / Next month).
3. **Weekday Row**: Sunday through Saturday labels in subtle slate text.
4. **Vertical / Grid Month View**: Full grid of days for the active month, padding out leading/trailing days from adjacent months. Today badge, selected state, and event indicator dots.
5. **Event Details / Sidebar**: Panel showing selected date details, scheduled meetings/events list, and a quick "Add Event" form with validation.

## Verification & Test Plan

- Unit tests for calendar date computation helper functions (leap years, month start offsets).
- Component tests for `CalendarView`, `EventPanel`, `Header`, and `Footer`.
- Integration test for clicking a date and adding an event.
- 100% test coverage requirement.
