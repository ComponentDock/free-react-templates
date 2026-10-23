# Template: CalPulse (Calendar)

## Purpose

Recreation of ColorLib Calendar 11 (`https://colorlib.com/wp/template/calendar-11/`).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict).
Preview URL (source): `https://colorlib.com/wp/template/calendar-11/`

## Design tokens

- Primary Accent: Indigo / Blue (`#4f46e5` / `bg-indigo-600`)
- Neutral Background: Clean white `#ffffff` and subtle gray `#f9fafb`
- Text Colors: Dark slate `#1f2937` for headings, muted gray `#6b7280` for secondary text
- Typography: Inter / system sans-serif font family
- Borders & Radii: Rounded corners (`rounded-xl`, `rounded-lg`), subtle borders (`border-gray-200`)

## Requirements

### Feature: Interactive Calendar & Event Popup

As a user, I want to view a monthly calendar, navigate between months, select dates, and view/add popup event notes so I can manage my schedule efficiently.

#### Scenario: Month Navigation

- **GIVEN** the calendar is displaying the current month
- **WHEN** the user clicks the "Next" or "Previous" month buttons
- **THEN** the calendar updates to display the corresponding month and year correctly

#### Scenario: Date Selection & Event Popup

- **GIVEN** the calendar grid is displayed
- **WHEN** the user clicks on a specific date (e.g. 15th)
- **THEN** a pop-up modal or card appears showing scheduled events for that date and allowing the user to add a new event

#### Scenario: Component Dock Footer Branding

- **GIVEN** the calendar view is rendered
- **WHEN** the user scrolls to the bottom footer
- **THEN** a "Made with Component Dock" link pointing to `https://www.componentdock.com/` is displayed

## Verification checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] 100% test coverage with Vitest & Testing Library
- [ ] Component Dock footer link present and correct
- [ ] Responsive layout across mobile and desktop viewports

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/calendar-11/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#0056b3` (d=95)
<!-- live-palette-unverified:end -->
