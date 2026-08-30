# Template: Calnest (Calendar & Schedule Planner)

## Purpose

Recreation of ColorLib Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`), built as a modern React 19 + Vite + Tailwind CSS 4 application named `calnest`.

_Note: The live preview URL (`https://preview.colorlib.com/theme/calendar-12/`) returned 404, so design, layout, and structure were faithfully derived from the official ColorLib screenshot (`https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-12.jpg`)._

## Design tokens

- **Primary / Brand accent**: `#4f46e5` (Indigo) / `#6366f1`
- **Secondary / Accent**: `#0ea5e9` (Sky) / `#10b981` (Emerald)
- **Background**: `#f8fafc` (Light Slate) / `#ffffff` (White card containers)
- **Text**: `#0f172a` (Slate 900) for headers, `#64748b` (Slate 500) for muted text
- **Font family**: `'Inter'`, sans-serif
- **Border radius**: `rounded-xl` / `rounded-2xl`
- **Layout**: Navbar, Hero section with calendar highlights, Interactive Calendar Grid & Event Sidebar, Features section, and Footer linking to Component Dock (`https://www.componentdock.com/`).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with brand name and links.

#### Scenario: Display navigation

- **GIVEN** the user loads Calnest
- **WHEN** the navigation bar is rendered
- **THEN** it displays the brand logo "Calnest", navigation links (Calendar, Schedule, Events, Features), and a CTA button

### Requirement: Hero section

The system SHALL render a hero section introducing the calendar platform.

#### Scenario: Display hero

- **GIVEN** the user views the landing page
- **WHEN** the hero section renders
- **THEN** it displays a headline, subtitle, primary action button, and a visual calendar preview card

### Requirement: Interactive calendar grid & event sidebar

The system SHALL render an interactive calendar grid with month navigation and an event sidebar.

#### Scenario: Interact with calendar grid

- **GIVEN** the user views the calendar section
- **WHEN** the calendar grid and event sidebar render
- **THEN** it allows switching months, selecting days, viewing scheduled events, and adding new events

### Requirement: Features section

The system SHALL render feature cards highlighting productivity and synchronization tools.

#### Scenario: Display features

- **GIVEN** the user scrolls to features
- **WHEN** the feature cards render
- **THEN** it displays 3-4 feature cards with icons, titles, and descriptions

### Requirement: Footer

The system SHALL render a footer with copyright and a link to Component Dock.

#### Scenario: Footer link verification

- **GIVEN** the user reaches the bottom of the page
- **WHEN** the footer renders
- **THEN** it includes copyright information and a prominent link to `https://www.componentdock.com/` ("Component Dock")
