# Template: Calwave (Calendar & Timepiece Planner)

## Purpose

A Calendar & Timepiece Planner template with calendar & timepiece, hero and features sections. Recreation of ColorLib Calendar 06 (`https://colorlib.com/wp/template/calendar-06/`), built as a modern React 19 + Vite + Tailwind CSS 4 application named `calwave`.

## Design tokens

- **Primary / Brand accent**: `#3b82f6` (Blue) / `#2563eb`
- **Background**: `#f8fafc` (Light Slate) / `#0f172a` (Dark Slate)
- **Font family**: `'Inter'`, sans-serif
- **Layout**: Navbar, Hero section, Interactive Calendar & Timepiece Planner grid, Features section, and Footer.
- **Accent (measured):** `#8e24aa` — paints it ×4 — `color` on `[data-theme="july"] .cl-row.head`; style.css?v=025d7870 (14,584 B, sha256 daa8d924d775) · <https://preview.colorlib.com/theme/bootstrap/calendar-06/>

## Requirements

### Requirement: Calendar & Timepiece Planner component

The system SHALL render an interactive calendar grid with event planning capabilities.

#### Scenario: Display calendar grid

- **GIVEN** the user opens the Calwave app
- **WHEN** the calendar component renders
- **THEN** it displays the current month, grid of days, and scheduling controls

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the brand name "Calwave" and navigation links.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the user views the navigation bar
- **THEN** it shows the brand name "Calwave" and links to Schedule and Features

### Requirement: Hero section

The system SHALL render a hero section with a headline and call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it shows a headline "Advanced Time & Schedule Management" and CTA buttons

### Requirement: Features section

The system SHALL render feature cards highlighting time planning capabilities.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it shows key features such as Event Scheduling, Smart Notifications, and Time Tracking

### Requirement: Footer

The system SHALL render a footer with copyright and a link to Component Dock.

#### Scenario: Component Dock footer attribution

- **GIVEN** the footer is rendered at the bottom of the page
- **WHEN** the user views the footer
- **THEN** it includes a link to `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [x] Typecheck passes (`npm run typecheck`)
- [x] Lint passes (`npm run lint`)
- [x] Vitest tests pass with 100% coverage (`npm run test:coverage`)
- [x] Build succeeds (`npm run build`)
- [x] Footer links to `https://www.componentdock.com/`
- [x] No references to ColorLib in app code
- [ ] Calendar & Timepiece Planner component — it displays the current month, grid of days, and scheduling controls
- [x] Navigation bar — it shows the brand name "Calwave" and links to Schedule and Features
- [ ] Hero section — it shows a headline "Advanced Time & Schedule Management" and CTA buttons
- [ ] Features section — it shows key features such as Event Scheduling, Smart Notifications, and Time Tracking

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/calendar-06/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#3b82f6` — nearest `#308ff0` (d=18)
- `#2563eb` — nearest `#1e88e5` (d=38)
<!-- live-palette-unverified:end -->
