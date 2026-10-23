# Keycard — Creative Login Form

## Purpose

Recreation of ColorLib "Creative Login Form" (https://colorlib.com/wp/template/creative-login-form/) as a React 19 + Tailwind CSS 4 + TypeScript template. Provides a clean, flat login form with a sage green background and centered white card containing username/password fields, a login button, and a registration link.

## Requirements

### Requirement: Full-page login layout

The template SHALL render a full-viewport sage green background with a white login card centered both vertically and horizontally.

#### Scenario: Login card renders centered

- **WHEN** the page loads
- **THEN** a white card is visible in the center of the viewport
- **AND** the background is sage green (#8bc34a)

### Requirement: Login form with username and password fields

The template SHALL render a form with username and password input fields, both required.

#### Scenario: Username field renders

- **WHEN** the page loads
- **THEN** a text input with placeholder "username" is visible
- **AND** the username field is required

#### Scenario: Password field renders

- **WHEN** the page loads
- **THEN** a password input with placeholder "password" is visible
- **AND** the password field is required
- **AND** the password input masks characters

### Requirement: Login button

The template SHALL render a full-width login button with sage green background and white text.

#### Scenario: Login button displays

- **WHEN** the page loads
- **THEN** a button with text "LOGIN" is visible
- **AND** the button is full-width within the card

#### Scenario: Form submission

- **WHEN** the user fills in username and password
- **AND** clicks the LOGIN button
- **THEN** the form submits without error

### Requirement: Registration link

The template SHALL display a registration link below the login form.

#### Scenario: Registration text and link

- **WHEN** the page loads
- **THEN** the text "Not registered?" is visible
- **AND** a "Create an account" link pointing to #register is visible

### Requirement: Component Dock footer

The template SHALL render a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link renders

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" is visible
- **AND** the link text mentions "Component Dock"
- **AND** the link opens in a new tab

### Requirement: Document title

The template SHALL set the document title on load.

#### Scenario: Title is set

- **WHEN** the page loads
- **THEN** the document title is "Keycard — Login Form Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/keycard/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/keycard/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
