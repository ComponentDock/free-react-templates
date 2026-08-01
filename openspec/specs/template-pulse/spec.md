# Template: Pulse (404 Error Page — Creative Design)

## Purpose

Pulse is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V16" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a free creative error page template based on the
Bootstrap framework: a bold, creative "page not found" layout that guarantees
amazing performance, with a large "404" display, a short message, a homepage
button, and social media icons so visitors are less likely to leave after
hitting an error. Pulse follows the same structure and adds the repo's
standard dark-mode toggle and accessible patterns. The creative element is
recreated as an original decorative illustration (no assets copied).

Pulse lives in `apps/pulse` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Pulse", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Pulse page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pulse" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with creative illustration
The system SHALL render a centered error section with a creative decorative
illustration, a large "404" heading, a "Page not found" subheading, a short
explanatory message, a "Back to home" button that links to the page root, and
social icon links.

#### Scenario: Creative illustration
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a decorative illustration with an accessible label
- **AND** the illustration SHALL use the repo's primary indigo palette

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Social links
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show social icon links (GitHub, X, LinkedIn) with accessible names

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Pulse" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Pulse app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pulse — Error Page Template"
