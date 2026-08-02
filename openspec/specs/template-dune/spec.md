# Template: Dune (404 Error Page — Minimal Boxy Design with Search)

## Purpose

Dune is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V2" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a minimal, boxy error page for users who like to keep
things simple: a big "404" sign with additional text and a search bar to help
prevent the user from leaving early. Dune follows the same structure and adds
the repo's standard dark-mode toggle and accessible patterns.

Dune lives in `apps/dune` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Dune", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Dune page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Dune" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered error section with a large "404" heading, a
"Page not found" subheading, a short explanatory message, and a "Back to home"
button that links to the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message
- **AND** it SHALL show a "Back to home" button linking to the page root

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
- **THEN** it SHALL show the site name "Dune" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Dune app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Dune — Error Page Template"
