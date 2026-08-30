# Calvoy — Tasks, Outline & Design Notes

## Overview

- **ColorLib Source**: Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`)
- **New Name**: `calvoy`
- **Deploy Target**: `calvoy.free.componentdock.com`

## Structure & Section Order

1. **Header / Hero Section**: Centered heading ("Calvoy Date Picker") and subtitle description.
2. **Date Picker Card**: Clean form container with an interactive date input and popup calendar widget supporting month/year navigation and day selection.
3. **Footer**: Minimalist footer containing copyright and the required Component Dock link (`https://www.componentdock.com/`).

## Implementation Tasks for Stream 1/2

1. Scaffold `apps/calvoy` using `@free-react-templates/<slug>` structure and `vite.config.ts` with `injectUiSource()`.
2. Implement components: `Header.h`, `DatePickerWidget.tsx`, `Footer.tsx`.
3. Add unit tests with Vitest + Testing Library ensuring 100% coverage.
4. Verify with `scripts/verify-app.sh calvoy`.
