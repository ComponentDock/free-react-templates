# Template: Calendry (Calendar / UI Component)
<!-- prep-status: shipped-as=chronogrid -->
> **SHIPPED-UNDER** — the ColorLib `calendar-02` design this prep describes already
> ships as `apps/chronogrid` (<https://chronogrid.free.componentdock.com>).
> Do not scaffold `apps/calendry`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-chronogrid/spec.md`.

## Purpose

- Recreation of ColorLib "Calendar 02" (`https://colorlib.com/wp/template/calendar-02/`, preview `https://preview.colorlib.com/theme/calendar-02/`).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons, Vitest.
- Design category: Vertical Calendar Widget / Scheduling UI.

## Design Tokens

- Brand Primary: Indigo / Deep Blue (`#4f46e5` / `#6366f1`)
- Neutral Dark: Slate 900 (`#0f172a`), Slate 800 (`#1e293b`)
- Neutral Light: Slate 50 (`#f8fafc`), Slate 100 (`#f1f5f9`)
- Accent / Highlight: Rose / Pink (`#f43f5e`) for selected dates or events.
- Font Family: Inter / Sans-serif (`ui-sans-serif, system-ui, sans-serif`)
- Radii: Rounded-xl (`0.75rem`) for cards, rounded-lg for buttons and day cells.

## Requirements

### Feature: Vertical Calendar Widget

As a user, I want to view a vertical calendar layout showing month navigation, day cells with event indicators, and selected date details so that I can easily schedule and review events.

#### Scenario: Initial Render

- **GIVEN** the Calendry application is loaded
- **WHEN** the user views the main interface
- **THEN** it displays the current month and year header with navigation controls (prev/next month)
- **AND** renders a vertical list/grid of calendar days with weekday headers (Sun-Sat)
- **AND** highlights today's date and any active selected date

#### Scenario: Date Selection and Event Details

- **GIVEN** the calendar is displayed
- **WHEN** the user clicks on a specific date cell (e.g., 15th)
- **THEN** that date becomes selected with a distinct highlight
- **AND** the sidebar or detail panel displays events scheduled for that date or an option to add an event

#### Scenario: Month Navigation

- **GIVEN** the calendar is displaying a specific month
- **WHEN** the user clicks the "Next Month" or "Previous Month" button
- **THEN** the calendar updates to show the correct days for the target month with accurate starting weekday alignment

## Verification checklist

- [ ] Spec validation (`npm run spec:validate`)
- [ ] Per-app gate verification (`scripts/verify-app.sh calendry`)
- [ ] 100% test coverage on all components
- [ ] Footer links Component Dock (`https://www.componentdock.com/`)
- [ ] CNAME and homepage configured correctly (`calendry.free.componentdock.com`)
