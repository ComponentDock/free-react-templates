# spec: Loginwell

## Purpose

Recreation of ColorLib "Login Form V10" (https://colorlib.com/wp/template/login-form-v10/). A minimal, centered login form on a light background with gray rectangular inputs, a "Remember me" checkbox, "Forgot?" link, and a full-width purple/periwinkle LOGIN button. No card container — form floats directly on the page.

## Design Tokens

- Background: #ffffff (white page)
- Heading "LOGIN": dark navy #3b3b6d, uppercase, bold, sans-serif ~28px
- Inputs: #d9d9d9 gray background, rectangular with subtle 4px border-radius, ~48px height, placeholder text in #888888
- Remember me checkbox: blue accent #5b6abf, checked state
- "Remember me" text: #666666, regular weight
- "Forgot?" link: #5b6abf blue/purple, regular weight
- LOGIN button: #7c7cf7 purple/periwinkle, full width, white uppercase text, slight border-radius ~6px, ~50px height
- Font: Open Sans (400, 600, 700) via Google Fonts
- No card shadow or border — form is flat on the page
- Responsive: form width ~380px max, centered

## Requirements

### Requirement: Layout

The template SHALL display a full-page centered layout with a white background and a centered login form.

#### Scenario: Desktop layout

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** a centered login form is visible on a white background

#### Scenario: Mobile layout

- **GIVEN** the user is on a mobile viewport (≤480px)
- **WHEN** the page loads
- **THEN** the login form occupies the available width with proper padding

### Requirement: Login heading

The template SHALL display a "LOGIN" heading above the form.

#### Scenario: Heading present

- **GIVEN** the page has loaded
- **WHEN** the user views the form area
- **THEN** a heading with text "LOGIN" is visible, uppercase, bold, dark navy color

### Requirement: Login form

The template SHALL render a login form with username input, password input, and a Login button.

#### Scenario: Form elements present

- **GIVEN** the page has loaded
- **WHEN** the user views the form
- **THEN** a username input with placeholder "Username" is visible
- **AND** a password input with placeholder "Password" is visible
- **AND** a "LOGIN" button is visible

#### Scenario: Form accepts input

- **GIVEN** the form is displayed
- **WHEN** the user types a username
- **THEN** the username input reflects the typed text

#### Scenario: Form submits

- **GIVEN** the form has input values
- **WHEN** the user clicks the Login button
- **THEN** the form submits without error

### Requirement: Remember me

The template SHALL display a "Remember me" checkbox.

#### Scenario: Checkbox present

- **GIVEN** the page has loaded
- **WHEN** the user views the form below the password field
- **THEN** a "Remember me" checkbox is visible

#### Scenario: Checkbox is toggleable

- **GIVEN** the checkbox is displayed
- **WHEN** the user clicks the checkbox
- **THEN** the checkbox state toggles

### Requirement: Forgot password link

The template SHALL display a "Forgot?" link.

#### Scenario: Link present

- **GIVEN** the form is displayed
- **WHEN** the user looks at the row with Remember me
- **THEN** a "Forgot?" link is visible on the right side

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock footer

- **GIVEN** the page has loaded
- **WHEN** the user scrolls to the bottom
- **THEN** a "More templates at Component Dock" link pointing to https://www.componentdock.com/ is visible
- **AND** the link opens in a new tab
