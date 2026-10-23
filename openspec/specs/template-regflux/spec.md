# Template: Regflux (Registration Form)

## Purpose

Recreation of ColorLib Regform 14 (https://colorlib.com/wp/template/colorlib-regform-14/).
A centered registration form on a light blue background with gender toggle buttons,
collapsible additional info section, and clean uppercase labels.

## Requirements

### Requirement: Form renders all required fields

The registration form SHALL display First Name, Last Name, Birth Date, Gender toggle
(Male/Female), Phone Number, Password, and Repeat Your Password fields.

#### Scenario: All fields are visible on initial render

- **WHEN** I render the Regflux registration form
- **THEN** I see a "First Name" text input
- **AND** I see a "Last Name" text input
- **AND** I see a "Birth Date" date input
- **AND** I see a "Phone Number" telephone input
- **AND** I see a "Password" password input
- **AND** I see a "Repeat Your Password" password input
- **AND** I see a "Submit" button

### Requirement: Gender toggle selection

The form SHALL provide Male and Female toggle buttons for gender selection.

#### Scenario: Selecting a gender highlights the chosen button

- **WHEN** I render the Regflux registration form
- **AND** I click the "Male" button
- **THEN** the "Male" button is highlighted with the accent color
- **WHEN** I click the "Female" button
- **THEN** the "Female" button is highlighted
- **AND** the "Male" button is no longer highlighted

### Requirement: Collapsible additional info section

The form SHALL provide a collapsible "Additional Info" section with Address and City fields.

#### Scenario: Additional info expands on click

- **WHEN** I render the Regflux registration form
- **THEN** I do not see an "Address" field
- **WHEN** I click the "Additional Info" toggle
- **THEN** I see an "Address" text input
- **AND** I see a "City" text input

#### Scenario: Additional info collapses on second click

- **WHEN** I render the Regflux registration form
- **AND** I click the "Additional Info" toggle
- **AND** I click the "Additional Info" toggle again
- **THEN** I do not see an "Address" field

### Requirement: Form submission shows confirmation

The form SHALL display a success message when submitted.

#### Scenario: Submitting the form shows confirmation

- **WHEN** I render the Regflux registration form
- **AND** I click the "Submit" button
- **THEN** I see a "Registration submitted" confirmation message
- **AND** the form fields are no longer visible

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regflux/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regflux/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Form renders all required fields — I see a "First Name" text input
- [ ] Gender toggle selection — the "Male" button is highlighted with the accent color
- [ ] Collapsible additional info section — I do not see an "Address" field
- [ ] Form submission shows confirmation — I see a "Registration submitted" confirmation message
