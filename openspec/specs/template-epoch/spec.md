# Template: Epoch (Calendar & Scheduling)
<!-- prep-status: shipped-as=caldesk -->
> **SHIPPED-UNDER** — the ColorLib `calendar-14` design this prep describes already
> ships as `apps/caldesk` (<https://caldesk.free.componentdock.com>).
> Do not scaffold `apps/epoch`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-caldesk/spec.md`.

## Purpose

Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`, preview unreachable, designed from screenshot reference) — **re-probed 2026-10-23: the demo serves** (measured record below). Built with Vite, React 19, Tailwind CSS 4, and TypeScript. Provides an elegant modern calendar event planner and scheduling interface with date selection, event management, and responsive layout.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bootstrap/calendar-14/` — HTTP 200, 1,146 B, title `Calendar #4`.
>
> Sheet: `https://preview.colorlib.com/theme/bootstrap/calendar-14/css/style.css?v=4c250d36` (11,192 B).
> Faces it actually declares: `Roboto`, `Segoe UI`, `Helvetica Neue`, `Noto Sans`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
- **Source design:** ColorLib "Calendar 14" — https://colorlib.com/wp/template/calendar-14/

## Design Tokens

- **Brand Colors**:
  - Primary: `#4f46e5` (Indigo-600) for active dates, buttons, and brand accents.
  - Secondary/Accent: `#06b6d4` (Cyan-500) for highlights and badges.
  - Neutral Background: `#f8fafc` (Slate-50) for canvas, `#ffffff` for cards.
  - Text: `#0f172a` (Slate-900) for headings, `#475569` (Slate-600) for body/muted text.
- **Typography**:
  - Font Family: `Inter`, sans-serif.
- **Radii & Shadows**:
  - Card Radius: `rounded-xl` (12px).
  - Button Radius: `rounded-lg` (8px).
  - Shadows: `shadow-md`, `shadow-lg`.

## Requirements

### Feature: Calendar View & Date Navigation

As a user, I want to view a monthly calendar grid and navigate between months so that I can check dates and schedules.

#### Scenario: Display current month grid

- **GIVEN** the user loads the Epoch calendar application
- **THEN** the current month and year header should be displayed
- **AND** a 7-column grid of days of the week should be visible
- **AND** all days of the month should be correctly laid out with weekend highlights

#### Scenario: Navigate months

- **GIVEN** the user is viewing the calendar
- **WHEN** the user clicks the "Next Month" or "Previous Month" button
- **THEN** the calendar grid should update to show the corresponding month and year

### Feature: Event Management & Schedule List

As a user, I want to see scheduled events for selected dates and add new events.

#### Scenario: View events for selected date

- **GIVEN** the user selects a specific date on the calendar grid
- **THEN** the event sidebar or list should display scheduled events for that date
- **AND** each event should show time, title, and category badge

#### Scenario: Add a new event

- **GIVEN** the user clicks the "Add Event" button or selects a time slot
- **WHEN** the user fills in the event title, time, and description and submits
- **THEN** the new event should appear in the schedule list for that date

### Feature: Responsive Layout & Footer Attribution

As a user, I want a fully responsive layout and clear attribution.

#### Scenario: Responsive view across devices

- **GIVEN** the user views the application on mobile or desktop
- **THEN** the layout should adapt gracefully with collapsible sidebars and touch-friendly buttons

#### Scenario: Footer attribution link

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer must display copyright and link `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] Vite dev server starts successfully with zero type or build errors
- [ ] Calendar grid renders correct month days and navigation works
- [ ] Event scheduling and list interaction work smoothly
- [ ] Tailwind v4 `@theme` tokens and styles apply correctly
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Vitest unit tests pass with 100% coverage

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/calendar-14/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#0056b3` (d=95)
- `#06b6d4` — nearest `#007bff` (d=73)
- `#475569` — nearest `#0056b3` (d=103)
<!-- live-palette-unverified:end -->
