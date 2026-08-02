# Template: Coral (404 Error Page — Rounded Display with Search)

## Purpose

Coral is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V7" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a simple error page with a search bar: a large rounded
pink "404" display, an uppercase
"Oops, The Page you are looking for can't be found!" heading, a search bar to
help users find what they need, and a teal "Return To Homepage" link. Coral
follows the same structure and adds the repo's standard dark-mode toggle and
accessible patterns.

Coral lives in `apps/coral` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Coral", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Coral page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Coral" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered error section with a large rounded pink
"404" level-1 heading, an uppercase
"Oops, The Page you are looking for can't be found!" level-2 heading, and a
"Back to home" button that links to the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Oops, The Page you are looking for can't be found!"
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Rounded pink display
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "404" heading SHALL use a very large, rounded, heavy type style in a pink tone

#### Scenario: Button accent
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "Back to home" button SHALL use a distinct teal accent style

### Requirement: Search bar
The system SHALL render a search bar with a labeled text input and a submit
button so users can search instead of leaving the page.

#### Scenario: Search input
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a search input with an accessible label and a submit button

#### Scenario: Submitting a search
- **GIVEN** the user has typed a query into the search input
- **WHEN** the user submits the search form
- **THEN** the form SHALL submit the query to a search results URL
- **AND** the submitted URL SHALL contain the encoded query

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Coral" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Coral app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Coral — Error Page Template"
