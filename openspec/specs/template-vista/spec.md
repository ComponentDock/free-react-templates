# Template: Vista (404 Error Page — Image Background)

## Purpose

Vista is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V11" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is an image-background error page: instead of a plain
backdrop it uses a scenic full-page background image, with a transparent
(glass) content box holding a large "404" display, a "page not found" message,
a search bar, social media icons, and a "back to homepage" button. Vista
follows the same structure and adds the repo's standard dark-mode toggle and
accessible patterns. The background image is recreated as an original inline
SVG scenic illustration (no assets copied).

Vista lives in `apps/vista` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Vista", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Vista page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Vista" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with image background
The system SHALL render a full-viewport error section with a scenic background
illustration and a transparent content box containing a large "404" heading, a
"Page not found" subheading, a short explanatory message, a search bar, social
media icon links, and a "Back to home" button linking to the page root.

#### Scenario: Background illustration
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a scenic background illustration with an accessible label
- **AND** the content box SHALL be visually transparent (glass) over the background

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Search bar
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a search bar with a labeled text input and a search submit button
- **AND** submitting the form SHALL NOT navigate away from the page (no results for an unknown page)

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
- **THEN** it SHALL show the site name "Vista" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Vista app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Vista — Error Page Template"
