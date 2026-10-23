# Calwave — Implementation Tasks

Source design: **Calendar 06** (`https://colorlib.com/wp/template/calendar-06/`) → recreation name **calwave**. Shipped at https://calwave.free.componentdock.com.

Scope: A Calendar & Timepiece Planner template with calendar & timepiece, hero and features sections. Recreation of ColorLib Calendar 06 (`https://colorlib.com/wp/template/calendar-06/`), built as a modern React 19 + Vite + Tailwind CSS 4 application named `calwave`.

## Component breakdown

Render order as composed in `apps/calwave/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the brand name "Calwave" and navigation links.
- Scenario — Navbar content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the navigation bar
  - **THEN** it shows the brand name "Calwave" and links to Schedule and Features

### 2. Hero
- The system SHALL render a hero section with a headline and call-to-action button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it shows a headline "Advanced Time & Schedule Management" and CTA buttons

### 3. CalendarDashboard
- The system SHALL render an interactive calendar grid with event planning capabilities.
- Scenario — Display calendar grid:
  - **GIVEN** the user opens the Calwave app
  - **WHEN** the calendar component renders
  - **THEN** it displays the current month, grid of days, and scheduling controls

### 4. Features
- The system SHALL render feature cards highlighting time planning capabilities.
- Scenario — Features content:
  - **GIVEN** the page is rendered
  - **WHEN** the features section is displayed
  - **THEN** it shows key features such as Event Scheduling, Smart Notifications, and Time Tracking

### 5. Footer
- The system SHALL render a footer with copyright and a link to Component Dock.
- Scenario — Component Dock footer attribution:
  - **GIVEN** the footer is rendered at the bottom of the page
  - **WHEN** the user views the footer
  - **THEN** it includes a link to `https://www.componentdock.com/` branded as "Component Dock"
  - [x] Typecheck passes (`npm run typecheck`)
  - [x] Lint passes (`npm run lint`)
  - [x] Vitest tests pass with 100% coverage (`npm run test:coverage`)
  - [x] Build succeeds (`npm run build`)
  - [x] Footer links to `https://www.componentdock.com/`
  - [x] No references to ColorLib in app code

## Verification

- [x] `apps/calwave` ships on https://calwave.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/calwave/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/calwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/calwave/public/CNAME` = `calwave.free.componentdock.com`
  and the package `homepage` = `https://calwave.free.componentdock.com`.
