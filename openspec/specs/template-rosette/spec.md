# Rosette — Registration Form Template

Recreation of ColorLib Regform 20 (https://colorlib.com/wp/template/colorlib-regform-20/).

## Purpose

A free, production-ready React registration form template with a pink/coral beauty theme. Split-screen layout with overlapping hero images on the left and a sign-up form (Name, Email, Password) with terms checkbox on the right. Designed for beauty, cosmetics, and lifestyle sign-up pages.

## Requirements

### Requirement: Page layout renders correctly

Users SHALL see a centered white card on a pink (#F8C8C8) full-page background with split-screen layout on desktop (images left, form right) and form-only on mobile.

#### Scenario: Desktop layout

- **WHEN** the page loads on a desktop viewport
- **THEN** the hero images and registration form are displayed side by side

#### Scenario: Mobile layout

- **WHEN** the page loads on a mobile viewport
- **THEN** only the registration form is visible (hero images hidden)

### Requirement: Registration form renders all fields

Users SHALL see a "Sign Up" heading, three input fields (Name, Email, Password) each with a coral dot indicator, a Terms & Conditions checkbox, a "SIGN UP" submit button, and a "Login" link.

#### Scenario: Form fields present

- **WHEN** the page loads
- **THEN** the Name, Email, and Password input fields are rendered with placeholder text

#### Scenario: Terms checkbox present

- **WHEN** the page loads
- **THEN** a Terms & Conditions checkbox and link text are visible

#### Scenario: Submit button present

- **WHEN** the page loads
- **THEN** a "SIGN UP" button with coral styling is rendered

### Requirement: Form interaction works

Users SHALL be able to type in all input fields, toggle the terms checkbox, and submit the form.

#### Scenario: Typing in name field

- **WHEN** the user types in the Name field
- **THEN** the field value updates

#### Scenario: Typing in email field

- **WHEN** the user types in the Email field
- **THEN** the field value updates

#### Scenario: Typing in password field

- **WHEN** the user types in the Password field
- **THEN** the field value updates

#### Scenario: Toggling terms checkbox

- **WHEN** the user clicks the Terms checkbox
- **THEN** the checkbox state toggles

#### Scenario: Form submission

- **WHEN** the user clicks the SIGN UP button
- **THEN** the form submits without error

### Requirement: Footer links to Component Dock

Users SHALL see a footer with "More templates at Component Dock" linking to https://www.componentdock.com/.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** the footer contains a link to componentdock.com that opens in a new tab

### Requirement: Design tokens match the original

The template SHALL use the coral/pink color palette (#E8888A brand, #F8C8C8 background, #E8888A dots/links) with Cormorant Garamond for the heading and Poppins for body text.

#### Scenario: Brand colors applied

- **WHEN** the page renders
- **THEN** the background is pink, the heading and button use coral, and input fields have light gray backgrounds
