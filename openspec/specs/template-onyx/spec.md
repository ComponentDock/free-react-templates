# Template: Onyx (404 Error Page — Dark Canvas with Amber Glow)

## Purpose

Onyx is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V8" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean, creative dark error page: a giant "404"
display cut out of the dark canvas with a gray outline effect, whose middle
"0" digit glows amber, a short explanatory message, and a gray outlined
"home page" link. Onyx follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns.

Onyx lives in `apps/onyx` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Onyx", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Onyx page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Onyx" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered error section on a dark canvas with a giant
"404" level-1 heading cut out of the canvas with a gray outline effect, an
explanatory message, and a gray outlined "Back to home" button that links to
the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404"
- **AND** it SHALL show an explanatory message telling the user the requested page might have been removed, renamed, or be temporarily unavailable
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Dark canvas with amber glow
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the section SHALL use a dark canvas as its background
- **AND** the "404" heading SHALL use a very large, heavy type style in the canvas color with a gray outline shadow
- **AND** the middle "0" digit SHALL use an amber glow effect

#### Scenario: Button accent
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "Back to home" button SHALL use a gray outline accent style

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Onyx" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Onyx app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Onyx — Error Page Template"
