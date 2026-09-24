# spec: Loginnest

## Purpose

Recreation of ColorLib "Login Form V12" (https://colorlib.com/wp/template/login-form-v12/). A personalized sign-in experience with circular avatar, user name, and pill-shaped inputs on a blue cityscape background. Preview URL: https://preview.colorlib.com/theme/login-form-v12/ (404 at time of prep — screenshot used as sole reference).

## Design Tokens

- Background: blue gradient overlay on cityscape photo — #2196F3 (light cyan-blue) top-left → #0D47A1 (dark blue) bottom-right, with city skyline image underneath
- Avatar: circular, ~120px diameter, white border 4px, centered
- Name text: white (#FFFFFF), Poppins Bold 24px, centered
- Input fields: white (#FFFFFF), pill-shaped (border-radius 50px), height 50px, box-shadow 0 2px 10px rgba(0,0,0,0.1), icon left (user, lock)
- Input placeholder: #AAAAAA, Poppins Regular 14px
- Button: #333333 (dark gray/charcoal), pill-shaped (border-radius 50px), white text, uppercase, bold, hover darkens
- Links: white (#FFFFFF), Poppins Regular 14px, centered
- "Create new account" link: includes arrow (→) icon
- Font: Poppins (Regular 400, Medium 500, Bold 600)
- Responsive: full-width on mobile, avatar scales down

## Requirements

### Requirement: Layout

The template SHALL display a full-page centered layout with a blue-tinted cityscape background and form elements centered vertically and horizontally.

#### Scenario: Desktop layout

- **GIVEN** the user is on a desktop viewport (≥768px)
- **WHEN** the page loads
- **THEN** form elements (avatar, name, inputs, button, links) are centered in the viewport
- **AND** the background displays a blue gradient overlay on a cityscape image

#### Scenario: Mobile layout

- **GIVEN** the user is on a mobile viewport (≤768px)
- **WHEN** the page loads
- **THEN** form elements occupy full width with appropriate padding
- **AND** the background image scales appropriately

### Requirement: Avatar display

The template SHALL display a circular avatar image with the user's name below.

#### Scenario: Avatar visible

- **GIVEN** the page has loaded
- **WHEN** the user views the top of the form area
- **THEN** a circular avatar image with a white border is visible
- **AND** the user name "John Doe" is displayed below in bold white text

### Requirement: Login form

The template SHALL render a login form with username input, password input, and a Login button.

#### Scenario: Form elements present

- **GIVEN** the page has loaded
- **WHEN** the user views the form
- **THEN** a username input with placeholder "Username" and user icon is visible
- **AND** a password input with placeholder "Password" and lock icon is visible
- **AND** a dark "Login" button is visible

#### Scenario: Form accepts input

- **GIVEN** the form is displayed
- **WHEN** the user types a username
- **THEN** the username input reflects the typed text

#### Scenario: Form submits

- **GIVEN** the form has input values
- **WHEN** the user clicks the Login button
- **THEN** the form submits without error

### Requirement: Navigation links

The template SHALL provide navigation links below the form.

#### Scenario: Forgot password link

- **GIVEN** the form is displayed
- **WHEN** the user looks below the Login button
- **THEN** a "Forgot Username / Password?" link is visible in white text

#### Scenario: Create account link

- **GIVEN** the form is displayed
- **WHEN** the user looks at the bottom of the page
- **THEN** a "Create new account →" link is visible in white text

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock footer

- **GIVEN** the page has loaded
- **WHEN** the user scrolls to the page footer
- **THEN** a link to https://www.componentdock.com/ is visible with text "Component Dock"
