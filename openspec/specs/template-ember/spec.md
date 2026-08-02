# Template: Ember (404 Error Page — Lightweight "Oops!" with Orange CTA)

## Purpose

Ember is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V4" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean Bootstrap error page with a distinctive
typographic play: a giant, light-weight "Oops!" display with a solid
"404 - The Page can't be found" pill label overlapping its base, plus an
orange "Go TO Homepage" call-to-action button. Ember follows the same
structure and adds the repo's standard dark-mode toggle and accessible
patterns.

Ember lives in `apps/ember` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Ember", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Ember page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ember" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered error section with a giant light-weight
"Oops!" level-1 heading, a solid "404 - The Page can't be found" level-2 label
overlapping the base of the display, and an orange "Back to home" button that
links to the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "Oops!" and a level-2 heading "404 - The Page can't be found"
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Lightweight display
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "Oops!" heading SHALL use a very large, light (weight 200) type style
- **AND** the "404 - The Page can't be found" label SHALL be uppercase and rendered as a solid pill overlapping the base of the display

#### Scenario: Button accent
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "Back to home" button SHALL use a distinct orange accent style

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Ember" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Ember app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Ember — Error Page Template"
