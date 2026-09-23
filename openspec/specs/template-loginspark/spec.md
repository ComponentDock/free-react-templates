# spec: Loginspark

## Purpose

Recreation of ColorLib "Login Form V1" (https://colorlib.com/wp/template/login-form-v1/). A centered two-column login card on a pink-to-blue gradient background with pill-shaped inputs, green submit button, and Poppins/Montserrat typography.

## Design Tokens

- Background gradient: #c850c0 (pink) → #4158d0 (blue), angle -135deg
- Card: white (#fff), border-radius 10px, max-width 960px, two-column flex
- Font: Poppins (Regular 400, Medium 500, Bold 700) + Montserrat Bold 700
- Title: "Member Login", Poppins Bold 24px, #333333
- Inputs: #e6e6e6 bg, 50px height, border-radius 25px (pill), icon left
- Button: #57b846 green, 50px height, 25px border-radius, uppercase, hover #333333
- Links: #666666, Poppins Regular 13px
- Responsive: ≤768px image hidden, form full width

## Requirements

### Requirement: Layout

The template SHALL display a full-page centered layout with a pink-to-blue gradient background and a white two-column card.

#### Scenario: Desktop layout

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** a white card with two columns is visible: a hero image on the left and a login form on the right

#### Scenario: Mobile layout

- **GIVEN** the user is on a mobile viewport (≤768px)
- **WHEN** the page loads
- **THEN** the hero image is hidden and the login form occupies the full width

### Requirement: Login form

The template SHALL render a login form with email input, password input, and a Login button.

#### Scenario: Form elements present

- **GIVEN** the page has loaded
- **WHEN** the user views the form
- **THEN** an email input with placeholder "Email" is visible
- **AND** a password input with placeholder "Password" is visible
- **AND** a "LOGIN" button is visible

#### Scenario: Form accepts input

- **GIVEN** the form is displayed
- **WHEN** the user types an email address
- **THEN** the email input reflects the typed text

#### Scenario: Form submits

- **GIVEN** the form has input values
- **WHEN** the user clicks the Login button
- **THEN** the form submits without error

### Requirement: Navigation links

The template SHALL provide navigation links below the form.

#### Scenario: Forgot password link

- **GIVEN** the form is displayed
- **WHEN** the user looks below the Login button
- **THEN** a "Forgot Username / Password?" link is visible

#### Scenario: Create account link

- **GIVEN** the form is displayed
- **WHEN** the user looks at the bottom of the card
- **THEN** a "Create your Account →" link is visible

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock footer

- **GIVEN** the page has loaded
- **WHEN** the user views the footer
- **THEN** a "More templates at Component Dock" link is visible
- **AND** the link opens https://www.componentdock.com/ in a new tab
