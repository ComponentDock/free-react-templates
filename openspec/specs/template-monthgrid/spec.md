# Template: MonthGrid (Calendar 03)
<!-- prep-status: shipped-as=calday -->
> **SHIPPED-UNDER** — the ColorLib `calendar-03` design this prep describes already
> ships as `apps/calday` (<https://calday.free.componentdock.com>).
> Do not scaffold `apps/monthgrid`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calday/spec.md`.

- **Category**: Productivity / Calendar
- **Source**: ColorLib Calendar 03 (`https://colorlib.com/wp/template/calendar-03/`)
- **Preview URL**: `https://preview.colorlib.com/theme/calendar-03/`
- **New Name**: `monthgrid`
- **Package**: `@free-react-templates/monthgrid`

## Purpose

A clean, modern two-month interactive calendar template featuring dual-month side-by-side display, month navigation controls, event management, and a clean minimalist aesthetic.
- **Source design:** ColorLib "Calendar 03" — https://colorlib.com/wp/template/calendar-03/

## Design Tokens (Captured from Reference)

- **Primary Color**: Indigo / Deep Blue (`#4f46e5` / `indigo-600`) with soft accent shading (`#818cf8` / `indigo-400`).
- **Neutral Palette**: Clean grays (`slate-50` backgrounds, `slate-900` text, `slate-200` borders).
- **Typography**: Sans-serif font family (Inter / System UI), bold uppercase month headings (`tracking-wider`).
- **Layout**: Responsive two-month grid layout with previous/next month navigation buttons, day cells with hover effects, and event indicator dots.
- **Footer**: Required Component Dock attribution (`https://www.componentdock.com/`).

## Requirements

### Feature: Two-Month Calendar View

As a user, I want to view two consecutive months side by side so I can easily plan across months.

#### Scenario: Initial Load

- **GIVEN** the user opens the MonthGrid application
- **WHEN** the page loads
- **THEN** two months are displayed side by side (e.g., current month and the following month) with clear grid headers for days of the week (Sun-Sat)

#### Scenario: Month Navigation

- **GIVEN** the user is viewing the calendar
- **WHEN** the user clicks the previous or next month navigation buttons
- **THEN** the calendar updates both month views accordingly

### Feature: Event Management & Day Details

As a user, I want to click on a day cell to view or add events.

#### Scenario: Selecting a Date

- **GIVEN** the user is viewing the calendar grid
- **WHEN** the user clicks on a specific day cell
- **THEN** a detail panel or modal opens showing scheduled events for that date and an option to add a new event

## Verification checklist

- [ ] App folder created at `apps/monthgrid`
- [ ] Registered in `package.json` workspaces and `package-lock.json`
- [ ] `vite.config.ts` includes `injectUiSource()`
- [ ] Public CNAME set to `monthgrid.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/`
- [ ] 100% test coverage with Vitest + Testing Library
- [ ] Verified via `scripts/verify-app.sh monthgrid`

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/calendar-03/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#0056b3` (d=95)
- `#818cf8` — nearest `#bd83ce` (d=74)
<!-- live-palette-unverified:end -->
