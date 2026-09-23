# Template: Portalink

**Original:** ColorLib Login Form 15 (https://colorlib.com/wp/template/login-form-15/)
**Preview:** https://preview.colorlib.com/theme/login-form-15/ (unreachable — screenshot used as sole reference)
**New name:** Portalink

## Purpose

Portalink provides a centered white login card on a light gray background with a hero image spanning the top of the card. It features social login icons (Facebook, Twitter), username and password fields with a password visibility toggle, a green pill-shaped "Sign In" button, remember-me checkbox, forgot-password link, and sign-up CTA. Designed for authentication pages needing a clean, modern card-based layout.

## Design Tokens

- Background: #f5f5f5 (light gray)
- Card: #ffffff (white)
- Primary accent: #4ecdc4 (teal/mint green) — button, links, checkbox, focus ring
- Primary hover: #3dbdb5 (darker teal)
- Text ink: #333333 (dark gray)
- Caption text: #999999 (medium gray)
- Input border: rgba(0, 0, 0, 0.1)
- Social icon border: rgba(0, 0, 0, 0.1)
- Social icon text: #aaaaaa
- Shadow: 0px 0px 45px rgba(0, 0, 0, 0.08)
- Font: Poppins (Google Fonts)
- Button radius: 25px (rounded pill)

## Requirements

### Requirement: Centered card layout

The template SHALL render a centered white card on a light gray background with a hero image at the top.

#### Scenario: Card is centered on page

- **WHEN** the page loads
- **THEN** the login card is centered horizontally and vertically on the viewport

#### Scenario: Hero image renders at top of card

- **WHEN** the page loads
- **THEN** a decorative hero image is visible at the top of the card

### Requirement: Login form fields

The template SHALL render a login form with username and password inputs.

#### Scenario: Username input accepts text

- **WHEN** the user types into the username field
- **THEN** the field accepts and displays the typed text

#### Scenario: Password input is masked by default

- **WHEN** the user types into the password field
- **THEN** the input is masked (type="password")

#### Scenario: Password visibility toggle

- **WHEN** the user clicks the show password button
- **THEN** the password field type changes to "text"
- **AND** the button aria-label changes to "Hide password"

#### Scenario: Password visibility toggle reverts

- **WHEN** the password is visible and the user clicks the hide password button
- **THEN** the password field type changes back to "password"
- **AND** the button aria-label changes to "Show password"

### Requirement: Sign In button

The template SHALL render a full-width rounded green "Sign In" button.

#### Scenario: Button renders with correct styling

- **WHEN** the page loads
- **THEN** the Sign In button is visible, full-width, and has a rounded pill shape

#### Scenario: Form submits without error

- **WHEN** the user fills in username and password and clicks Sign In
- **THEN** the form submits without JavaScript error

### Requirement: Remember me and forgot password

The template SHALL render a "Remember Me" checkbox and a "Forgot Password" link.

#### Scenario: Remember Me checkbox is checked by default

- **WHEN** the page loads
- **THEN** the Remember Me checkbox is checked

#### Scenario: Remember Me checkbox toggles

- **WHEN** the user clicks the Remember Me checkbox
- **THEN** the checkbox state toggles

#### Scenario: Forgot Password link present

- **WHEN** the page loads
- **THEN** a "Forgot Password" link is visible and points to "#forgot"

### Requirement: Social login icons

The template SHALL render Facebook and Twitter icon links in the form header area.

#### Scenario: Social icons render

- **WHEN** the page loads
- **THEN** a Facebook icon link with aria-label "Login with Facebook" is visible
- **AND** a Twitter icon link with aria-label "Login with Twitter" is visible

#### Scenario: Social icons are circular

- **WHEN** the page loads
- **THEN** the social icon links have a rounded-full border-radius

### Requirement: Sign Up CTA

The template SHALL render a "Not a member? Sign Up" call to action.

#### Scenario: Sign Up link renders

- **WHEN** the page loads
- **THEN** "Not a member?" text is visible with a "Sign Up" link pointing to "#signup"

### Requirement: Footer

The template SHALL render a footer with a Component Dock link.

#### Scenario: Footer link renders

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible
- **AND** it links to https://www.componentdock.com/
- **AND** it opens in a new tab
