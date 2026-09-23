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
