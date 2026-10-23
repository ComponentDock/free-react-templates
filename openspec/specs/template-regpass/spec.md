# Template: Regpass (Registration Forms)

## Purpose

A Registration Forms template with all form fields, form fields, user and form sections. Recreation of ColorLib "Regform 19" (https://colorlib.com/wp/template/colorlib-regform-19/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript registration form template.

## Requirements

### Requirement: Page renders with all sections

Users SHALL see a hero image, registration form card, and footer when loading the page.

#### Scenario: Page renders with all sections

- **WHEN** the user loads the registration page
- **THEN** the hero image is visible
- **AND** the "Registration Form" heading is displayed
- **AND** the "Register Now" button is visible

### Requirement: All form fields are present

Users SHALL see username, email, password, repeat password, country, and gender fields.

#### Scenario: All form fields are present

- **WHEN** the user loads the registration page
- **THEN** the username field is displayed
- **AND** the email field is displayed
- **AND** the password field is displayed
- **AND** the repeat password field is displayed
- **AND** the country dropdown is displayed
- **AND** the gender dropdown is displayed

### Requirement: Form fields are arranged in two-column rows

Users SHALL see form fields arranged in pairs side by side.

#### Scenario: Form fields are arranged in two-column rows

- **WHEN** the user loads the registration page
- **THEN** the username and email fields are side by side
- **AND** the password and repeat password fields are side by side
- **AND** the country and gender dropdowns are side by side

### Requirement: User can fill in the form

Users SHALL be able to type in text and email fields.

#### Scenario: User can fill in the form

- **WHEN** the user types "john" in the username field
- **THEN** the username field contains "john"
- **WHEN** the user types "john@example.com" in the email field
- **THEN** the email field contains "john@example.com"

### Requirement: User can select dropdown options

Users SHALL be able to select options from country and gender dropdowns.

#### Scenario: User can select dropdown options

- **WHEN** the user selects "United Kingdom" from the country dropdown
- **THEN** the country dropdown shows "United Kingdom"
- **WHEN** the user selects "Female" from the gender dropdown
- **THEN** the gender dropdown shows "Female"

### Requirement: User can toggle the terms checkbox

Users SHALL be able to check and uncheck the terms agreement checkbox.

#### Scenario: User can toggle the terms checkbox

- **WHEN** the user clicks the terms checkbox
- **THEN** the terms checkbox is checked
- **WHEN** the user clicks the terms checkbox again
- **THEN** the terms checkbox is unchecked

### Requirement: Form submits without error

Users SHALL be able to submit the form without errors.

#### Scenario: Form submits without error

- **WHEN** the user clicks the "Register Now" button
- **THEN** the form submits without error

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the user loads the registration page
- **THEN** the footer contains a "Component Dock" link
- **AND** the link opens in a new tab
- **AND** the link points to "https://www.componentdock.com/"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regpass/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regpass/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
