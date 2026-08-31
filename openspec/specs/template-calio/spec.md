# Spec: Calio — Multi-View Calendar Template

**Source:** Recreation of ColorLib Calendar V20 (https://colorlib.com/wp/template/calendar-20/)
**Preview:** https://preview.colorlib.com/theme/bootstrap/calendar-20/
**Name:** Calio (new, original)

## Design Tokens

- **Background:** #efefef (page), #fff (calendar container)
- **Font:** Roboto (300, 400, 500, 700)
- **Container shadow:** 0 15px 30px 0 rgba(0,0,0,0.2)
- **Brand/accent:** #007bff (links, active states)
- **Text:** #212529 (primary), #666 (secondary)
- **Today highlight:** #007bff background on current day cell
- **Calendar layout:** Fixed-position, fills viewport with 20px margins

## Sections (in order)

1. **Toolbar** — prev/next/today buttons (left), month/year title (center), view toggle buttons (right: Month, Week, Day, List)
2. **Month View** (default) — 7-column grid, weekday headers (Sun–Sat), day cells with event bars, "+N more" overflow
3. **Week View** — 7-column time grid, hourly rows (00:00–23:00), event blocks positioned by time
4. **Day View** — single-column time grid, hourly rows, event blocks positioned by time
5. **List View** — chronological list of events for the current week, grouped by day
6. **Footer** — "Made with Component Dock" link (https://www.componentdock.com/)

## Scenarios

### G1: Renders calendar region

- The calendar container has role="region" with aria-label="Calendar"

### G2: Default view is month

- On initial render, the month grid is visible with weekday headers

### G3: Switch views

- Clicking Month/Week/Day/List buttons switches the active view
- The toolbar title updates to reflect the current view

### G4: Navigate months

- Prev/Next buttons change the displayed month
- Today button returns to the current month

### G5: Navigate weeks

- In week view, Prev/Next change the displayed week
- Today button returns to the current week

### G6: Navigate days

- In day view, Prev/Next change the displayed day
- Today button returns to today

### G7: Display events in month view

- Events appear as colored bars on their respective days
- Multi-day events span across days
- "+N more" link appears when events exceed the visible limit

### G8: Display events in week/day view

- Events appear as positioned blocks in the time grid
- Timed events show with correct vertical position

### G9: Display events in list view

- Events are listed chronologically, grouped by day

### G10: Footer

- Footer contains a link to https://www.componentdock.com/

### G11: Event click opens URL

- Clicking an event with a URL opens it in a new tab

### G12: Accessibility

- Calendar region has aria-label
- Toolbar buttons have aria-labels
- View switcher buttons have aria-labels
