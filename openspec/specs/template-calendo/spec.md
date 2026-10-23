# Template: Calendo (Calendar & Scheduling)
<!-- prep-status: shipped-as=calmark -->
> **SHIPPED-UNDER** — the ColorLib `calendar-05` design this prep describes already
> ships as `apps/calmark` (<https://calmark.free.componentdock.com>).
> Do not scaffold `apps/calendo`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calmark/spec.md`.

## Purpose

Recreation of Colorlib **Calendar V05** (`https://colorlib.com/wp/template/calendar-05/`), implemented as a modern React 19 + TypeScript + Tailwind CSS 4 application (`apps/calendo`).

## Design Tokens (Reference Extraction)

- **Brand Colors**:
  - Primary Indigo: `#4f46e5` (`indigo-600`)
  - Primary Hover: `#4338ca` (`indigo-700`)
  - Accent Teal: `#14b8a6` (`teal-500`)
  - Background Light: `#f8fafc` (`slate-50`)
  - Text Dark: `#0f172a` (`slate-900`)
  - Text Muted: `#64748b` (`slate-500`)
- **Typography**:
  - Font Family: `"Poppins", system-ui, sans-serif`
  - Headings: Bold sans-serif (`font-semibold`, `font-bold`)
- **Border Radius**:
  - Cards & Buttons: `rounded-xl` (`0.75rem`)
- **Shadows**:
  - Soft elevations: `shadow-sm`, `shadow-md`

## Sections & Layout Structure

1. **Navbar**: Brand title ("Calendo"), Quick Date indicator, View switcher (Month / Week / Day), Add Event button, User Avatar.
2. **Date Ribbon**: Horizontal display of yesterday, today, and tomorrow with quick date navigation and status highlights.
3. **Monthly Calendar Grid**: Full interactive calendar grid with days of the week header, date numbers, current day highlight, and event badges.
4. **Events / Schedule Sidebar**: Daily agenda list showing scheduled meetings, reminders, time slots, and quick actions.
5. **Footer**: Clean minimal footer with copyright and mandatory link to [Component Dock](https://www.componentdock.com/).

## Requirements

### Feature: Interactive Calendar Grid & Navigation

#### Scenario: User views the current month's grid

- **GIVEN** the user opens Calendo
- **THEN** the calendar grid displays all days of the current month with correct weekday alignment
- **AND** today's date is prominently highlighted

#### Scenario: User navigates between months

- **GIVEN** the user is viewing the current month
- **WHEN** the user clicks the Next or Previous month buttons
- **THEN** the calendar updates to display the corresponding month and year

### Feature: Date Ribbon & Quick Selection

#### Scenario: User reviews the date ribbon

- **GIVEN** the calendar is loaded
- **THEN** a date ribbon displays yesterday, today, and tomorrow
- **WHEN** the user clicks on any date in the ribbon
- **AND** the view centers or highlights events for that date

### Feature: Event Management & Agenda

#### Scenario: User views daily schedule

- **GIVEN** the user is on the main calendar dashboard
- **THEN** the sidebar displays scheduled events with times, titles, and category tags

#### Scenario: User adds a new event

- **GIVEN** the user clicks the "Add Event" button
- **WHEN** the user fills out the event title, time, and date and submits
- **THEN** the new event appears in both the calendar grid and sidebar agenda

## Verification checklist

- [ ] `npm run verify:app -- calendo` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 5 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Interactive Calendar Grid & Navigation
      - Date Ribbon & Quick Selection
      - Event Management & Agenda
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
