# Template: Blaze (404 Error Page — Bold Design)

## Purpose

Blaze is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V13" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a bold error page that integrates smoothly into any
website: it pairs a set of icons with a main notification (the "404"), lets the
site add extra explanatory text, and brings users back to the front page with a
home button. Blaze follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns. The icon set is recreated as original
inline SVG illustrations (no assets copied).

Blaze lives in `apps/blaze` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Blaze", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Blaze page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Blaze" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with bold notification
The system SHALL render a centered error section with a bold "404" notification,
a set of decorative icon illustrations, a "Page not found" subheading, a short
explanatory message with extra supporting text, and a "Back to home" button that
links to the page root.

#### Scenario: Icon illustrations
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show decorative icon illustrations with accessible labels

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message and extra supporting text
- **AND** it SHALL show a "Back to home" button linking to the page root

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Blaze" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Blaze app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Blaze — Error Page Template"
