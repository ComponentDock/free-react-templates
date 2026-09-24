# Spec: Loginscribe — Welcome Login Form

## Purpose

Recreate the ColorLib Login Form V2 (https://colorlib.com/wp/template/login-form-v2/) as a centered welcome login card with gradient accents, avatar icon, email/password inputs with visibility toggle, and a gradient pill-shaped submit button.

## Requirements

### Requirement: Renders welcome heading and avatar

Users SHALL see a bold "Welcome" heading and a dark avatar icon with letter "A" at the top of the login card.

#### Scenario: Heading is visible

- **WHEN** the login page loads
- **THEN** the heading "Welcome" is displayed

#### Scenario: Avatar is visible

- **WHEN** the login page loads
- **THEN** a user avatar with letter "A" is displayed

### Requirement: Email input with gradient underline

Users SHALL be able to enter their email address in an input field that shows a gradient underline (cyan to purple).

#### Scenario: Email accepts text input

- **WHEN** the user types "user@example.com" in the email field
- **THEN** the email field contains "user@example.com"

### Requirement: Password input with visibility toggle

Users SHALL be able to enter their password (hidden by default) and toggle visibility with an eye icon button.

#### Scenario: Password is hidden by default

- **WHEN** the login page loads
- **THEN** the password field type is "password"

#### Scenario: Show password

- **WHEN** the user clicks the show password button
- **THEN** the password field type becomes "text"

#### Scenario: Hide password

- **WHEN** the password is visible and the user clicks the hide password button
- **THEN** the password field type becomes "password"

### Requirement: Gradient LOGIN button

Users SHALL see a full-width, pill-shaped LOGIN button with a cyan-to-purple gradient background.

#### Scenario: Button has gradient

- **WHEN** the login page loads
- **THEN** the LOGIN button has a gradient background and is full width with rounded-full styling

#### Scenario: Form submits without error

- **WHEN** the user fills in email and password and clicks LOGIN
- **THEN** the form submits without error

### Requirement: Footer with Component Dock link

Users SHALL see a "Don't have an account? Sign Up" line in the footer, where "Sign Up" links to Component Dock.

#### Scenario: Footer link points to Component Dock

- **WHEN** the login page loads
- **THEN** the "Sign Up" link has href "https://www.componentdock.com/" and opens in a new tab
