## Purpose

LoginLume is a login form template that recreates ColorLib Login Form V18
(preview: https://colorlib.com/etc/lf/Login_v18/index.html). It provides a
centered card layout with a login form (email, password, remember me, social
buttons) on the left and a decorative image panel on the right, fully
responsive down to mobile.

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
