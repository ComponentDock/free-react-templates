# Datebook Implementation Tasks & Design Notes
<!-- prep-status: shipped-as=calgrid -->
> **SHIPPED-UNDER** — the ColorLib `calendar-12` design this prep describes already
> ships as `apps/calgrid` (<https://calgrid.free.componentdock.com>).
> Do not scaffold `apps/datebook`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calgrid/spec.md`.

Recreation of ColorLib Calendar 12 (`calendar-12`).

## Structure & Section Order

1. **Header / Navbar**: App title ("Datebook"), navigation links, theme toggle, and quick status.
2. **Main Hero / Container**: Centered card layout housing the interactive calendar and event agenda sidebar.
3. **Calendar Component**: Month/year selector, day-of-week header, grid of interactive days with hover states, today indicator, and selected state.
4. **Quick Action Bar**: "Today", "Clear", and "Close" buttons with clean focus rings.
5. **Event Agenda Panel**: List of scheduled appointments/tasks for the selected date with time, title, and status badges.
6. **Footer**: Copyright, navigation links, and mandatory "More templates at [Component Dock](https://www.componentdock.com/)" link.

## Design Notes

- **Palette**: Indigo/violet primary accent (`#6366f1`) with slate neutral background and card surfaces.
- **Interactivity**: Fully reactive state for current month, selected date, and agenda items.
- **Icons**: Lucide React icons for navigation chevrons, calendar icon, close button, and status indicators.
