# Template: Timely (Calendar & Scheduling)

## Purpose

Recreation of ColorLib Calendar V09 (`https://colorlib.com/wp/template/calendar-09/`), previewed at `https://preview.colorlib.com/theme/calendar-09/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript (strict).

## Design Tokens

- **Brand Colors**: Clean minimalist slate/gray palette with primary accent blue (`#2563eb` / tailwind `blue-600`), neutral dark text (`#1f2937`), light gray surface backgrounds (`#f8fafc`).
- **Typography**: Inter / system sans-serif font stack.
- **Button / Input Radios**: Rounded corners (`rounded-lg`), subtle shadow (`shadow-sm`), clear focus rings.
- **Layout**: Centered elegant calendar date-picker card with clean header, interactive calendar grid, and time-picker inputs.

## Requirements & Gherkin Scenarios

### Requirement 1: Hero / Header Section

- The application shall display a clean header with the template title ("Timely - Advanced Calendar & Scheduling") and subtitle.
- Every page footer shall link `https://www.componentdock.com/` as "Component Dock".

### Requirement 2: Interactive Calendar & Datepicker

- The application shall feature an interactive calendar grid allowing month navigation and date selection.
- Selected dates and times shall be cleanly displayed in a modern datepicker input.

### Requirement 3: Event / Schedule Management

- Users shall be able to view and add simple scheduled events for selected dates.

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links Component Dock (`https://www.componentdock.com/`)
