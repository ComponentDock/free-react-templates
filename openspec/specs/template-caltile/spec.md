# Template: CalTile (Productivity / Calendar)
<!-- prep-status: shipped-as=calio -->
> **SHIPPED-UNDER** — the ColorLib `calendar-20` design this prep describes already
> ships as `apps/calio` (<https://calio.free.componentdock.com>).
> Do not scaffold `apps/caltile`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calio/spec.md`.

## Purpose

Recreation of ColorLib Calendar 20 (`https://colorlib.com/wp/template/calendar-20/`), styled as a modern React web application built with Vite, React 19, Tailwind CSS 4, and TypeScript.

- **Preview URL:** `https://preview.colorlib.com/theme/calendar-20/` (fallback reference: ColorLib screenshot thumbnail `https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-20.jpg`)
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons.
- **Source design:** ColorLib "Calendar 20" — https://colorlib.com/wp/template/calendar-20/

## Design Tokens (Inferred from Screenshot / Standard Calendar UI)

- **Brand Colors:**
  - Primary: Indigo/Blue (`#4f46e5` / Tailwind `indigo-600`) for active dates, main header CTAs, and selected indicators.
  - Neutral dark: Slate 900 (`#0f172a`) for titles and primary headers.
  - Neutral light: Slate 50 (`#f8fafc`) for calendar background and card containers.
  - Accent/Highlight: Emerald (`#10b981`) for event badges and success indicators.
- **Typography:**
  - Font Family: Inter / System Sans-Serif (`font-sans`).
- **Surface & Shadows:**
  - Rounded card containers (`rounded-2xl shadow-sm border border-slate-100`).
- **Surface (measured):** `#f67280` — paints it ×10 — `background-color` on `.fc-button-primary`; style.css?v=eba3b761 (24,935 B, sha256 c1f1bf4ff455) · <https://preview.colorlib.com/theme/bootstrap/calendar-20/>

## Requirements

### Feature: Calendar Dashboard & Date Grid

As a user, I want to view a clean calendar grid with event indicators so that I can manage my schedule efficiently.

#### Scenario: Display Monthly Calendar Grid

- **GIVEN** the CalTile application is loaded
- **WHEN** the user views the main calendar view
- **THEN** the current month grid is displayed with correct days of the week headers (Sun-Sat)
- **AND** today's date is prominently highlighted with the primary brand color

#### Scenario: Interactive Date Selection & Event Preview

- **GIVEN** the user is viewing the calendar grid
- **WHEN** the user clicks on a specific date (e.g. 15th)
- **THEN** the date is marked as selected
- **AND** the sidebar/panel updates to show events scheduled for that day

### Feature: Event Management

As a user, I want to add and view scheduled events so I never miss important appointments.

#### Scenario: Add New Event

- **GIVEN** the user has selected a date
- **WHEN** the user fills in the event form (Title, Time, Category) and clicks "Add Event"
- **AND** the event appears in both the daily schedule list and as a badge on the calendar grid

### Feature: Footer & Attribution

As a visitor, I want clear footer navigation and branding.

#### Scenario: Footer Component Link

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a clean footer is visible containing navigation links and a required link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links Component Dock correctly (`https://www.componentdock.com/`)
- [ ] No reference to ColorLib in app source files
- [ ] Calendar Dashboard & Date Grid — the current month grid is displayed with correct days of the week headers (Sun-Sat)
- [ ] Event Management — GIVEN** the user has selected a date

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/calendar-20/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#0056b3` (d=95)
- `#10b981` — nearest `#40e0d0` (d=100)
<!-- live-palette-unverified:end -->
