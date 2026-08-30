# Spec: Daylark (Calendar Template)

## Purpose

Recreation of ColorLib Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`) as a modern React 19 + Tailwind CSS 4 application named **daylark**.

- **Source Template**: ColorLib Calendar 12
- **Preview URL**: `https://preview.colorlib.com/theme/calendar-12/` (fallback to screenshot analysis)
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, Vitest

## Design Tokens

- **Brand Palette**: Primary Indigo (`#6366f1` / `indigo-600`), Neutral Slate (`#0f172a` / `slate-900` for headers, `#f8fafc` / `slate-50` for backgrounds), Accent Violet (`#8b5cf6`).
- **Typography**: Font family `'Inter', sans-serif`, clean sans-serif weights (400, 500, 600, 700).
- **Buttons & UI Elements**: Rounded-xl containers, smooth hover transitions, subtle shadows (`shadow-sm`, `shadow-md`), pill-shaped badge filters.
- **Section Backgrounds**: Clean white and light slate alternating with card containers.

## Requirements & Scenarios

### Requirement 1: Header & Navigation

- The app shall render a top navigation bar with brand title ("Daylark"), date indicator, view switcher (Month / Week / Day / List), and quick action button ("+ New Event").

### Requirement 2: Interactive Calendar Grid

- The app shall display a fully interactive monthly/weekly calendar grid showing days of the current month, highlighted current date, and scheduled events with category color badges.
- Users can click on any day cell to view events or create a new event.

### Requirement 3: Event Management Panel

- A sidebar or modal showing upcoming events for the selected date, with details (title, time, location, attendees, description) and ability to add/edit/delete events.

### Requirement 4: Mini Calendar & Filters

- A sidebar widget featuring a mini month picker and category filters (Work, Personal, Meetings, Reminders).

### Requirement 5: Footer

- A clean footer with copyright and mandatory link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links Component Dock
