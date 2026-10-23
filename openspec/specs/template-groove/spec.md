# Groove — Concert Registration Form

Recreation of ColorLib "Regform 35" (https://colorlib.com/wp/template/colorlib-regform-35/).

## Purpose

A free concert registration form template with a dark card over a blue background, semi-transparent inputs in a 2x2 grid, and a coral Register button.

## Requirements

### Requirement: Heading display

Users SHALL see a "Registration Form" heading centered above the form.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Registration Form" is displayed

### Requirement: Form fields

Users SHALL see four input fields: Name, Email, Password, and Confirm Password.

#### Scenario: All four fields are present

- **WHEN** the form renders
- **THEN** inputs for "Your Name", "Your Email", "Your Password", and "Confirm Password" exist

#### Scenario: Fields accept input

- **WHEN** a user types into any field
- **THEN** the field value updates accordingly

### Requirement: Form submission

Users SHALL be able to click Register without causing a page navigation.

#### Scenario: Submit prevented

- **WHEN** the user clicks the Register button
- **THEN** the form does not submit or navigate

### Requirement: Responsive layout

Users SHALL see inputs stack to a single column on small screens.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrow
- **THEN** inputs are displayed in a single column

### Requirement: Footer attribution

Users SHALL see a link to componentdock.com in the footer.

#### Scenario: Footer link present

- **WHEN** the page renders
- **THEN** a link to https://www.componentdock.com/ is visible with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/groove/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/groove/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
