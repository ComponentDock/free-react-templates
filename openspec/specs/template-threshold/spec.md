# Template: Threshold

**Original:** ColorLib Login Form 02 (https://colorlib.com/wp/template/login-form-02/)
**Preview:** https://preview.colorlib.com/theme/bootstrap/login-form-02/
**New name:** Threshold

## Purpose

Threshold provides a 50/50 split-screen login form template with a light form panel on the left and a full-height decorative image on the right. It uses the Roboto font (weights 300, 400) and a distinctive orange (#fb771a) checkbox accent. Designed for authentication pages that need a modern, minimal aesthetic with visual depth.

## Requirements

### Requirement: Split-screen layout

The template SHALL render a 50/50 split-screen layout with a form panel on the left (bg #f6f7fc) and a decorative image panel on the right, spanning the full viewport height.

#### Scenario: Desktop layout shows both panels

- **WHEN** the page loads on a desktop viewport (>= 640px)
- **THEN** the left form panel and right image panel are both visible side by side

#### Scenario: Mobile layout hides image panel

- **WHEN** the page loads on a mobile viewport (< 640px)
- **THEN** only the form panel is visible and the image panel is hidden

### Requirement: Login form fields

The template SHALL render a login form with username and password inputs, each with a visible label above the field.

#### Scenario: Username input accepts text

- **WHEN** the user types into the username field
- **THEN** the field accepts and displays the typed text

#### Scenario: Password input is masked

- **WHEN** the user types into the password field
- **THEN** the input is masked (type="password")

### Requirement: Remember me and forgot password

The template SHALL render a "Remember me" checkbox and a "Forgot Password" link below the password field.

#### Scenario: Remember me checkbox toggles

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox state toggles

#### Scenario: Forgot Password link present

- **WHEN** the page loads
- **THEN** a "Forgot Password" link is visible and points to "#forgot"

### Requirement: Submit button

The template SHALL render a full-width "Log In" submit button with 54px height.

#### Scenario: Button is present and clickable

- **WHEN** the page loads
- **THEN** a "Log In" button is visible and can be clicked to submit the form

### Requirement: Form submission

The template SHALL handle form submission and prevent default browser navigation.

#### Scenario: Form submits without navigation

- **WHEN** the user fills in credentials and clicks "Log In"
- **THEN** the form submission is handled without page navigation

### Requirement: Footer with Component Dock link

The template SHALL render a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link present

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible
- **AND** the link points to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

### Requirement: Heading and subtitle

The template SHALL render a heading "Welcome Back" and a welcome subtitle above the form.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the heading "Welcome Back" is displayed

#### Scenario: Subtitle is visible

- **WHEN** the page loads
- **THEN** a welcome subtitle text is displayed below the heading

### Requirement: Background image panel

The template SHALL render a decorative background image panel on the right side using picsum.photos.

#### Scenario: Background image panel exists

- **WHEN** the page loads on a desktop viewport
- **THEN** a decorative image panel is visible on the right side

### Requirement: Document title

The template SHALL set the document title to "Threshold — Login Form Template" on mount.

#### Scenario: Title set on load

- **WHEN** the app mounts
- **THEN** document.title equals "Threshold — Login Form Template"
