# Tasks: Datewise (ColorLib Calendar 02 Recreation)

## Overview

- **Source:** ColorLib Calendar 02 (`https://colorlib.com/wp/template/calendar-02/`)
- **New Name:** Datewise (`apps/datewise`)
- **Category:** Productivity / Calendar UI

## Section Structure & Fidelity Notes

1. **Header / Title**
   - Clean title display above the calendar container.
2. **Vertical Calendar Layout**
   - **Left:** Monthly grid with weekday headers and clickable dates.
   - **Right (Sidebar):** Prominent vertical display of the selected day (Day name, large date number, month, year, event summary).
3. **Interactive Month Navigation**
   - Prev/Next buttons to shift months.
4. **Footer**
   - Component Dock attribution linking to `https://www.componentdock.com/`.

## Implementation Steps

- [ ] Create `apps/datewise` workspace (copy simplest template, rename package to `@free-react-templates/datewise`).
- [ ] Write unit tests for Datewise components (Navbar, CalendarGrid, VerticalSidebar, Footer) achieving 100% coverage.
- [ ] Implement components.
- [ ] Verify with `scripts/verify-app.sh datewise`.
