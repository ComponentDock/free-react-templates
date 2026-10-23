## Purpose

LoginLume is a login form template that recreates ColorLib Login Form V18
(preview: https://colorlib.com/etc/lf/Login_v18/index.html). It provides a
centered card layout with a login form (email, password, remember me, social
buttons) on the left and a decorative image panel on the right, fully
responsive down to mobile.

## Design reference (replication findings)

- **Source:** ColorLib "Login Form 18 by Colorlib" — https://colorlib.com/wp/template/login-form-v18/
- **Source slug:** `login-form-v18`
- **Preview URL analyzed:** https://colorlib.com/etc/lf/Login_v18/index.html — **HTTP 200**, 3,463 B, fetched 2026-10-23 (page `<title>`: "Login V18"). The slug-only path `https://preview.colorlib.com/theme/login-form-v18/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://colorlib.com/etc/lf/Login_v18/css/style.css?v=e8521769`, fetched 2026-10-23): brand `#6675df`, `#c80000`, `#007bff`, `#0056b3`; dominant neutrals `#999999`, `#333333`, `#555555`; type Poppins-Regular, Montserrat-Regular, Montserrat-Bold. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v18.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/loginlume` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Login form renders all fields and controls

Users SHALL see a login form with email input, password input, remember me
checkbox, forgot password link, login button, social signup buttons, and a
decorative image panel.

#### Scenario: Form renders with all elements

- **WHEN** the page loads
- **THEN** the title "Login to continue" is visible
- **AND** an email input is visible
- **AND** a password input is visible
- **AND** a "Login" button is visible
- **AND** a "Remember me" checkbox is visible
- **AND** a "Forgot Password?" link is visible
- **AND** "or sign up using" text is visible
- **AND** a Facebook social button is visible
- **AND** a Twitter social button is visible

### Requirement: Validation errors on empty submit

Users SHALL see validation errors when submitting the form with empty fields.

#### Scenario: Empty submit shows errors

- **WHEN** the user clicks "Login" without filling any fields
- **THEN** an email validation error is shown
- **AND** a password validation error is shown

### Requirement: Valid submission clears errors

Users SHALL not see validation errors when submitting with valid data.

#### Scenario: Valid submit

- **WHEN** the user enters a valid email and password
- **AND** the user clicks "Login"
- **THEN** no validation errors are shown

### Requirement: Remember me toggle

Users SHALL be able to toggle the remember me checkbox.

#### Scenario: Toggle remember me

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox state toggles

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible
- **AND** it links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/loginlume/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/loginlume/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
