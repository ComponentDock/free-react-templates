# Template: Grimoire (Sign-Up Wizard)

> Recreation of ColorLib Wizard 16 (https://colorlib.com/wp/template/colorlib-wizard-16/)
> Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-16/index.html

## Purpose

A three-step sign-up wizard form with a clean, card-based layout on a background
image. Each step has a title bar, form fields, and a footer showing step progress.
The design uses Roboto Slab font, green accent (#6DAB3C), white card container
with rounded corners, and a full-page background image.

## Requirements

### Requirement: Renders heading and first step on load

The template SHALL display a heading "Sign up to great new account" and show the
first step "Account Information" with a "Step 1 of 3" indicator.

#### Scenario: Initial page load

- **WHEN** the user loads the page
- **THEN** "Sign up to great new account" heading is visible
- **AND** "Account Information" step title is visible
- **AND** "Step 1 of 3" footer text is visible

### Requirement: Step 1 contains account form fields

The Account Information step SHALL contain username, email, password, and avatar
upload fields.

#### Scenario: Step 1 form fields exist

- **WHEN** the user is on step 1
- **THEN** username input is visible
- **AND** email input is visible
- **AND** password input is visible
- **AND** avatar file input is visible

### Requirement: Can navigate to step 2

The user SHALL be able to advance from step 1 to step 2 by clicking Next.

#### Scenario: Advance to step 2

- **WHEN** the user clicks Next on step 1
- **THEN** "Personal Information" step title becomes visible
- **AND** "Step 2 of 3" footer text is visible

### Requirement: Step 2 contains personal form fields

The Personal Information step SHALL contain full name, country select, gender
radio buttons, and about textarea.

#### Scenario: Step 2 form fields exist

- **WHEN** the user is on step 2
- **THEN** full name input is visible
- **AND** country select is visible
- **AND** gender radio buttons are visible
- **AND** about textarea is visible

### Requirement: Can navigate to step 3

The user SHALL be able to advance from step 2 to step 3 by clicking Next.

#### Scenario: Advance to step 3

- **WHEN** the user clicks Next on step 2
- **THEN** "Payment Details" step title becomes visible
- **AND** "Step 3 of 3" footer text is visible

### Requirement: Step 3 contains payment form fields

The Payment Details step SHALL contain payment type radios, credit card, CVC,
expiry date selects, and card name input.

#### Scenario: Step 3 form fields exist

- **WHEN** the user is on step 3
- **THEN** credit card input is visible
- **AND** CVC input is visible
- **AND** card name input is visible
- **AND** payment type radios are visible

### Requirement: Can navigate back to previous step

The user SHALL be able to go back to the previous step by clicking Previous.

#### Scenario: Go back to previous step

- **WHEN** the user is on step 2
- **AND** the user clicks Previous
- **THEN** step 1 content becomes visible again

### Requirement: Footer shows Component Dock branding

The template footer SHALL link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer link visible

- **WHEN** the user loads the page
- **THEN** a link to componentdock.com is visible
- **AND** it contains "Component Dock" text

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/grimoire/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/grimoire/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
