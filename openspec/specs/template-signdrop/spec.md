## Purpose

Signdrop is a registration form template — a recreation of ColorLib Signup Form 06 (https://colorlib.com/wp/template/signup-form-06/). It features a split viewport layout with a centered registration form on the left and a full-height hero image on the right.

## Requirements

### Requirement: Page renders with registration form

Users SHALL see a full-viewport split layout with a white form panel on the left and a hero image on the right.

#### Scenario: Heading is visible

- **WHEN** the user loads the page
- **THEN** the heading "Register" is visible

#### Scenario: Form fields are present

- **WHEN** the user loads the page
- **THEN** an "Email" input is visible
- **AND** a "Password" input is visible
- **AND** a "Re-type Password" input is visible

#### Scenario: Terms checkbox is present

- **WHEN** the user loads the page
- **THEN** the "Agree our Terms and Conditions" checkbox is unchecked by default

### Requirement: User interactions work correctly

Users SHALL be able to fill in form fields and toggle the terms checkbox.

#### Scenario: User types in email field

- **WHEN** the user types "test@example.com" in the email field
- **THEN** the email field contains "test@example.com"

#### Scenario: User toggles terms checkbox

- **WHEN** the user clicks the terms checkbox
- **THEN** the checkbox is checked

### Requirement: Social registration buttons are present

Users SHALL see social login buttons for Facebook, Twitter, and Google.

#### Scenario: Social buttons visible

- **WHEN** the user loads the page
- **THEN** "Register with Facebook" button is visible
- **AND** "Register with Twitter" button is visible
- **AND** "Register with Google" button is visible

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to Component Dock.

#### Scenario: Footer link present

- **WHEN** the user loads the page
- **THEN** a link to "https://www.componentdock.com/" is present
