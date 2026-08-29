# Template: Calmark (Calendar Dashboard)

## Purpose

Recreation of ColorLib Calendar V05 (`https://colorlib.com/wp/template/calendar-05/`, preview: `https://preview.colorlib.com/theme/bootstrap/calendar-05/`), built as a modern React 19 + Vite + Tailwind CSS 4 application named `calmark.

## Design tokens

- **Primary / Year panel background**: `#7e0cf5` (Deep Violet)
- **Month panel background**: `#983df7` (Medium Purple)
- **Day panel background**: `#a555f8` (Lighter Purple)
- **Previous/Next side strips**: `rgba(255, 255, 255, 0.1)` with `opacity: 0.6` on text
- **Font family**: `'Lato'`, sans-serif
- **Heading color**: `#1a1a2e` / `#ffffff`
- **Layout**: 3-column horizontal grid (`year`, `month`, `day`), each with previous (past), current (active), and next (future) cards.

## Requirements

### Requirement: Display current temporal grid

The system SHALL render three distinct columns: Year, Month, and Day. Each column displays a previous value, a prominent current value with its label, and a next value.

#### Scenario: Display current temporal grid

- **GIVEN** the user opens the Calmark web app
- **WHEN** the application loads current date and time
- **THEN** it renders three distinct columns: Year, Month, and Day
- **AND** each column displays a previous value, a prominent current value with its label, and a next value
- **AND** the Year column uses deep violet (`#7e0cf5`), the Month column uses medium purple (`#983df7`), and the Day column uses lighter purple (`#a555f8`)

#### Scenario: Month wrapping at boundaries

- **GIVEN** the current month is January
- **WHEN** the previous month card is displayed
- **THEN** it shows December

#### Scenario: Day wrapping at month start

- **GIVEN** the current day is 1
- **WHEN** the yesterday card is displayed
- **THEN** it shows 28

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Calmark" and navigation links.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the user views the navigation bar
- **THEN** it shows the site name "Calmark" and navigation links to Calendar and Features sections

### Requirement: Hero section

The system SHALL render a hero section with a title and subtitle for the calendar dashboard.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it shows a level-1 headline "Calendar & Schedule Dashboard"
- **AND** it shows a descriptive subtitle

### Requirement: Features section

The system SHALL render a features grid highlighting calendar capabilities.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it shows at least three feature cards (Real-Time Sync, Smart Reminders, Usage Analytics)

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
