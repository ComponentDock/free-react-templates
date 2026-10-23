# Calmark — Implementation Tasks

Source design: **Calendar 05** (`https://colorlib.com/wp/template/calendar-05/`) → recreation name **calmark**. Shipped at https://calmark.free.componentdock.com.

Scope: A Calendar Dashboard template with hero and features sections. Recreation of ColorLib Calendar V05 (`https://colorlib.com/wp/template/calendar-05/`, preview: `https://preview.colorlib.com/theme/bootstrap/calendar-05/`), built as a modern React 19 + Vite + Tailwind CSS 4 application named `calmark.

## Component breakdown

Render order as composed in `apps/calmark/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Calmark" and navigation links.
- Scenario — Navbar content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the navigation bar
  - **THEN** it shows the site name "Calmark" and navigation links to Calendar and Features sections

### 2. Hero
- The system SHALL render a hero section with a title and subtitle for the calendar dashboard.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it shows a level-1 headline "Calendar & Schedule Dashboard"
  - **AND** it shows a descriptive subtitle

### 3. CalendarDashboard
- No dedicated spec block — hold this band to the design notes.
- Anchors: Year · Month

### 4. Features
- The system SHALL render a features grid highlighting calendar capabilities.
- Scenario — Features content:
  - **GIVEN** the page is rendered
  - **WHEN** the features section is displayed
  - **THEN** it shows at least three feature cards (Real-Time Sync, Smart Reminders, Usage Analytics)

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

### Cross-cutting requirements

- **Display current temporal grid** — The system SHALL render three distinct columns: Year, Month, and Day. Each column displays a previous value, a prominent current value with its label, and a next value.
  - Scenario — Display current temporal grid: **GIVEN** the user opens the Calmark web app; **WHEN** the application loads current date and time; **THEN** it renders three distinct columns: Year, Month, and Day; **AND** each column displays a previous value, a prominent current value with its label, and a next value; **AND** the Year column uses deep violet (`#7e0cf5`), the Month column uses medium purple (`#983df7`), and the Day column uses lighter purple (`#a555f8`)
  - Scenario — Month wrapping at boundaries: **GIVEN** the current month is January; **WHEN** the previous month card is displayed; **THEN** it shows December
  - Scenario — Day wrapping at month start: **GIVEN** the current day is 1; **WHEN** the yesterday card is displayed; **THEN** it shows 28

## Verification

- [x] `apps/calmark` ships on https://calmark.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/calmark/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/calmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/calmark/public/CNAME` = `calmark.free.componentdock.com`
  and the package `homepage` = `https://calmark.free.componentdock.com`.
