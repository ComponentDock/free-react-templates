## Purpose

Regwave is a membership registration form template with a two-column card layout. The left panel provides informational content and a login action, while the right panel contains a multi-field registration form. The design uses a cyan background with a blue accent brand color, following the Colorlib Reg Form V30 pattern.

## Design reference (replication findings)

- **Source:** ColorLib "Colorlib Reg Form V30" — https://colorlib.com/wp/template/colorlib-regform-30/
- **Source slug:** `colorlib-regform-30`
- **Preview URL analyzed:** https://colorlib.com/etc/regform/colorlib-regform-30/ — **HTTP 200**, 2,706 B, fetched 2026-10-23 (page `<title>`: "Form-v4 by Colorlib"). The slug-only path `https://preview.colorlib.com/theme/colorlib-regform-30/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://colorlib.com/etc/regform/colorlib-regform-30/css/style.css?v=326630c5`, fetched 2026-10-23): brand `#3786bd`, `#53c83c`, `#75e2e9`, `#2f73a3`; dominant neutrals `#e5e5e5`; type Open Sans, LineAwesome. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-30.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/regwave` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Two-column registration card layout

Users SHALL see a centered card with two columns: a left information panel and a right registration form panel.

#### Scenario: Card renders with two columns

- **WHEN** the user visits the page
- **THEN** a card with a left info panel and right form panel is visible
- **AND** the card is centered on a cyan background

### Requirement: Information heading

Users SHALL see an "INFOMATION" heading in the left panel.

#### Scenario: Left panel shows information heading

- **WHEN** the user visits the page
- **THEN** the left panel displays heading "INFOMATION"

### Requirement: Register form heading

Users SHALL see a "REGISTER FORM" heading in the right panel.

#### Scenario: Right panel shows register form heading

- **WHEN** the user visits the page
- **THEN** the right panel displays heading "REGISTER FORM"

### Requirement: All registration form fields

Users SHALL see fields for First Name, Last Name, Email, Password, and Confirm Password.

#### Scenario: Form has all required fields

- **WHEN** the user visits the page
- **THEN** the form has fields for First Name, Last Name, Email, Password, and Confirm Password
- **AND** the password fields use password type
- **AND** the email field uses email type

### Requirement: Terms and Conditions checkbox

Users SHALL see a Terms and Conditions checkbox that is required.

#### Scenario: Checkbox is present and required

- **WHEN** the user visits the page
- **THEN** a checkbox for Terms and Conditions is visible
- **AND** the checkbox is required

### Requirement: Register button

Users SHALL see a Register submit button.

#### Scenario: Register button is visible

- **WHEN** the user visits the page
- **THEN** a "Register" submit button is visible

### Requirement: Have An Account button

Users SHALL see a "Have An Account" button in the left panel.

#### Scenario: Have An Account button is visible

- **WHEN** the user visits the page
- **THEN** a "Have An Account" button is visible in the left panel

### Requirement: Form submission prevention

Users SHALL not experience a page reload when submitting the form.

#### Scenario: Form submission is prevented

- **WHEN** the user fills in the form
- **AND** they click Register
- **THEN** the form submission is prevented

### Requirement: Typing in form fields

Users SHALL be able to type text into form fields.

#### Scenario: User can type in First Name field

- **WHEN** the user visits the page
- **AND** they type in the First Name field
- **THEN** the field shows the typed text

### Requirement: Document title

The page SHALL set a descriptive document title on mount.

#### Scenario: Title is set on mount

- **WHEN** the user visits the page
- **THEN** the document title contains "Regwave"

### Requirement: Footer Component Dock link

The footer SHALL link to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the user visits the page
- **THEN** a footer link points to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regwave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regwave/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
