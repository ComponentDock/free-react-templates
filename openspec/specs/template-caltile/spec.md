# Template: CalTile (Productivity / Calendar)

## Purpose

Recreation of ColorLib Calendar 20 (`https://colorlib.com/wp/template/calendar-20/`), styled as a modern React web application built with Vite, React 19, Tailwind CSS 4, and TypeScript.

- **Preview URL:** `https://preview.colorlib.com/theme/calendar-20/` (fallback reference: ColorLib screenshot thumbnail `https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-20.jpg`)
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons.

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

## Gherkin Requirements & Scenarios

### Feature: Calendar Dashboard & Date Grid

As a user, I want to view a clean calendar grid with event indicators so that I can manage my schedule efficiently.

#### Scenario: Display Monthly Calendar Grid

- **Given** the CalTile application is loaded
- **When** the user views the main calendar view
- **Then** the current month grid is displayed with correct days of the week headers (Sun-Sat)
- **And** today's date is prominently highlighted with the primary brand color

#### Scenario: Interactive Date Selection & Event Preview

- **Given** the user is viewing the calendar grid
- **When** the user clicks on a specific date (e.g. 15th)
- **Then** the date is marked as selected
- **And** the sidebar/panel updates to show events scheduled for that day

### Feature: Event Management

As a user, I want to add and view scheduled events so I never miss important appointments.

#### Scenario: Add New Event

- **Given** the user has selected a date
- **When** the user fills in the event form (Title, Time, Category) and clicks "Add Event"
- **And** the event appears in both the daily schedule list and as a badge on the calendar grid

### Feature: Footer & Attribution

As a visitor, I want clear footer navigation and branding.

#### Scenario: Footer Component Link

- **Given** the user scrolls to the bottom of the page
- **Then** a clean footer is visible containing navigation links and a required link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links Component Dock correctly (`https://www.componentdock.com/`)
- [ ] No reference to ColorLib in app source files
