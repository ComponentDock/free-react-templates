# Epoch (Calendar 14 Recreation) — Tasks & Plan

## Overview

- **Source Template**: ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`)
- **App Directory**: `apps/epoch`
- **Package Name**: `@free-react-templates/epoch`
- **Primary Aesthetic**: Modern sleek scheduling dashboard with indigo/cyan accents, clean typography, interactive calendar grid, and event management sidebar.

## Implementation Tasks (for Implementer)

1. Scaffold `apps/epoch` (copy from simplest existing app, update name and package.json).
2. Configure `vite.config.ts` with `injectUiSource()`.
3. Create Tailwind v4 tokens in `src/index.css`.
4. Implement components:
   - `Navbar.tsx`: branding, navigation links, search/action buttons.
   - `CalendarGrid.tsx`: interactive month view with day cells, selection state, and event indicators.
   - `EventSidebar.tsx`: daily schedule list, event details, and add-event form modal.
   - `Footer.tsx`: copyright and mandatory link to `https://www.componentdock.com/`.
5. Wire up state management in `App.tsx` (selected date, events state, modal open/close).
6. Write Vitest unit tests achieving 100% test coverage across all lines/functions/branches/statements.
7. Verify build, typecheck, lint, and test suite.
