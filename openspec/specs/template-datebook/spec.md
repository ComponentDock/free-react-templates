# Template: Datebook (Calendar / Productivity)
<!-- prep-status: shipped-as=calgrid -->
> **SHIPPED-UNDER** — the ColorLib `calendar-12` design this prep describes already
> ships as `apps/calgrid` (<https://calgrid.free.componentdock.com>).
> Do not scaffold `apps/datebook`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calgrid/spec.md`.

## Purpose

Recreation of ColorLib "Calendar 12" (`https://colorlib.com/wp/template/calendar-12/`), previewed at `https://preview.colorlib.com/theme/calendar-12/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons, Vitest.

## Design tokens

- **Brand Colors**: Primary indigo/violet (`#6366f1` / `#4f46e5`), slate neutrals (`#f8fafc` background, `#0f172a` text, `#e2e8f0` borders).
- **Typography**: Inter / system sans-serif font family. Clean modern weights (400, 500, 600, 700).
- **Component Shapes**: Rounded cards (`rounded-2xl`), smooth button transitions, soft shadow elevations (`shadow-xl`).
- **Layout**: Centered interactive date picker widget with month header, day grid, quick actions (Today, Clear, Close), and event list sidebar.

## Requirements

### Feature: Interactive Calendar & Date Picker Widget

As a user, I want to view an interactive calendar month grid, select dates, view scheduled events for the selected date, and use quick actions so I can manage my schedule efficiently.

#### Scenario: Monthly navigation and date selection

- **GIVEN** the Datebook calendar application is loaded
- **WHEN** the user clicks the next/previous month chevron buttons
- **THEN** the calendar view updates to display the correct month and year
- **AND** clicking any day cell selects that date and highlights it

#### Scenario: Quick action buttons

- **GIVEN** the calendar date picker is open
- **WHEN** the user clicks the "Today" button
- **THEN** the calendar jumps to the current date and selects it
- **WHEN** the user clicks "Clear"
- **THEN** the current date selection is cleared
- **WHEN** the user clicks "Close"
- **THEN** the date picker dialog closes or collapses

#### Scenario: Event listing for selected date

- **GIVEN** a date with scheduled events is selected
- **WHEN** the event panel renders
- **THEN** it displays time slots, event titles, and categories with appropriate badges
- **AND** the footer links to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] App renders correctly with responsive layout
- [ ] Tailwind CSS 4 theme tokens configured
- [ ] 100% test coverage with Vitest + Testing Library
- [ ] Footer contains Component Dock link
- [ ] No mention of ColorLib in source code

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/calendar-12/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#6366f1` — nearest `#80bdff` (d=93)
- `#4f46e5` — nearest `#0056b3` (d=95)
<!-- live-palette-unverified:end -->
