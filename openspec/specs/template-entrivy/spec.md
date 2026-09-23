# Entrivy — Login Form 07

## Purpose

Recreate the ColorLib Login Form 07 template as a React 19 + Tailwind CSS 4 + TypeScript application. The template features a split-screen login form with a decorative illustration on the left and a styled login form with social login buttons on the right.

## Requirements

### Requirement: Split-screen layout

The template SHALL display a two-column layout on desktop (illustration left, form right) and a single-column stacked layout on mobile.

#### Scenario: Desktop layout

- **WHEN** the viewport is desktop width (>= 1024px)
- **THEN** the illustration occupies the left half and the form occupies the right half

#### Scenario: Mobile layout

- **WHEN** the viewport is mobile width (< 1024px)
- **THEN** the illustration is shown above the form in a stacked layout

### Requirement: Login form

The template SHALL display a login form with username, password, remember me checkbox, forgot password link, and a submit button.

#### Scenario: Form fields

- **WHEN** the page loads
- **THEN** a "Sign In" heading is visible
- **AND** a username text input is present
- **AND** a password input is present
- **AND** a "Remember me" checkbox is present (unchecked by default)
- **AND** a "Forgot Password" link is present with href="#forgot"
- **AND** a "Log In" submit button is present

#### Scenario: Floating labels

- **WHEN** the username field is empty
- **THEN** the label "Username" is centered vertically in the field
- **WHEN** the user types in the username field
- **THEN** the label moves to the top of the field

#### Scenario: Form interaction

- **WHEN** the user types a username and password and clicks "Log In"
- **THEN** the form submits without error

### Requirement: Social login

The template SHALL display three circular social login buttons for Facebook, Twitter, and Google.

#### Scenario: Social buttons rendered

- **WHEN** the page loads
- **THEN** a "Login with Facebook" link is present
- **AND** a "Login with Twitter" link is present
- **AND** a "Login with Google" link is present
- **AND** each has the correct aria-label

#### Scenario: Divider text

- **WHEN** the page loads
- **THEN** the text "— or login with —" is visible between the form and social buttons

### Requirement: Footer

The template SHALL display a footer linking to Component Dock.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is present
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Design tokens

The template SHALL use Roboto font and a purple (#6c63ff) accent color matching the original design.

#### Scenario: Font family

- **WHEN** the page renders
- **THEN** the body uses Roboto font family

#### Scenario: Brand color

- **WHEN** the page renders
- **THEN** the primary button uses #6c63ff background color
