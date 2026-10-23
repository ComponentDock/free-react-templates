---
name: template-gatepass
description: >
  Recreation of ColorLib Login Form 05 (https://colorlib.com/wp/template/login-form-05/).
  A modern, eye-catchy login form template with social login buttons,
  gradient background, and responsive split-screen layout.
governance:
  owner: ComponentDock
  status: active
---

# Template: Gatepass (Login Forms)

## Purpose

A modern, eye-catchy login form template featuring a dark gradient background,
split-screen layout with decorative hero image, centered white card with
email/password fields, social login buttons (Google, Facebook), remember me
checkbox, forgot password link, and create account link. Responsive design
shows hero image above form on mobile.

## Requirements

### Requirement: Renders welcome heading and subtitle

Users SHALL see "Welcome Back" heading and "Sign in to continue to Gatepass" subtitle when the login form loads.

#### Scenario: Welcome heading visible

- **GIVEN** the login form is loaded
- **THEN** I should see "Welcome Back"
- **AND** I should see "Sign in to continue to Gatepass"

### Requirement: Renders email and password fields

Users SHALL see email and password input fields with labels.

#### Scenario: Form fields visible

- **GIVEN** the login form is loaded
- **THEN** I should see an email field labeled "Email"
- **AND** I should see a password field labeled "Password"

### Requirement: Renders social login buttons

Users SHALL see Google and Facebook social login buttons.

#### Scenario: Social buttons visible

- **GIVEN** the login form is loaded
- **THEN** I should see a "Sign in with Google" button
- **AND** I should see a "Sign in with Facebook" button

### Requirement: Renders forgot password link

Users SHALL see a "Forgot Password?" link.

#### Scenario: Forgot password visible

- **GIVEN** the login form is loaded
- **THEN** I should see a "Forgot Password?" link

### Requirement: Renders create account link

Users SHALL see a "Create an account" link.

#### Scenario: Create account visible

- **GIVEN** the login form is loaded
- **THEN** I should see a "Create an account" link

### Requirement: Accepts email input

Users SHALL be able to type an email address into the email field.

#### Scenario: Email input works

- **GIVEN** the login form is loaded
- **WHEN** I type "user@example.com" in the email field
- **THEN** the email field should contain "user@example.com"

### Requirement: Accepts password input

Users SHALL be able to type a password into the password field.

#### Scenario: Password input works

- **GIVEN** the login form is loaded
- **WHEN** I type "secret123" in the password field
- **THEN** the password field should contain "secret123"

### Requirement: Form submits without error

Users SHALL be able to submit the form without errors.

#### Scenario: Form submission

- **GIVEN** the login form is loaded
- **WHEN** I fill in valid credentials
- **AND** I click the Log In button
- **THEN** the form should submit without error

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/.

#### Scenario: Footer link visible

- **GIVEN** the login form is loaded
- **THEN** I should see a "More templates at Component Dock" link
- **AND** the link should point to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/gatepass/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/gatepass/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Renders welcome heading and subtitle — I should see "Welcome Back"
- [x] Renders email and password fields — I should see an email field labeled "Email"
- [x] Renders social login buttons — I should see a "Sign in with Google" button
- [x] Renders forgot password link — I should see a "Forgot Password?" link
- [x] Renders create account link — I should see a "Create an account" link
- [ ] Accepts email input — the email field should contain "user@example.com"
- [ ] Accepts password input — the password field should contain "secret123"
- [ ] Form submits without error — the form should submit without error
