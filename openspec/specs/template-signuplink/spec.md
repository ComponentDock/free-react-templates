# SignupLink — ColorLib Signup Form 09

**Source:** [ColorLib Signup Form 09](https://colorlib.com/wp/template/signup-form-09/)
**Preview:** https://preview.colorlib.com/theme/bootstrap/signup-form-09/
**New name:** SignupLink
**App folder:** `apps/signuplink`
**Package:** `@free-react-templates/signuplink`

## Purpose

A minimal, clean registration form template with floating label inputs, custom checkbox, social login buttons, and a centered layout. Recreates the ColorLib Signup Form 09 design in React + Tailwind CSS.

## Design Tokens

| Token              | Value                          | Usage                                       |
| ------------------ | ------------------------------ | ------------------------------------------- |
| Font family        | Roboto (300, 400)              | Google Fonts via `<link>`                   |
| Primary/accent     | #38d39f                        | Button, checkbox checked, focus ring, links |
| Primary hover      | #29bb8a                        | Button hover                                |
| Text color         | #212529                        | Body text                                   |
| Muted text         | #888                           | Captions, links, social label area          |
| Border color       | #ccc                           | Input bottom border                         |
| Checkbox unchecked | #e6e6e6                        | Checkbox indicator background               |
| Facebook           | #3b5998                        | Social button circle                        |
| Twitter/X          | #1da1f2                        | Social button circle                        |
| Google             | #ea4335                        | Social button circle                        |
| Background         | #fff                           | Page background (white/light)               |
| Button height      | 54px                           | Register button                             |
| Button radius      | 30px                           | Pill shape                                  |
| Form label size    | 12px                           | Floating label text                         |
| Form input font    | 20px                           | Input text                                  |
| Content width      | 50% on desktop, 100% on mobile | Centered form column                        |

## Requirements

### Requirement: Renders sign-up heading

The template SHALL display a "Sign Up" heading above the form.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Sign Up" is displayed

### Requirement: Renders form input fields

The template SHALL provide Name, Email, Password, and Re-type Password input fields with floating labels.

#### Scenario: All four fields are present

- **WHEN** the page loads
- **THEN** there are four text input fields labeled Name, Email, Password, and Re-type Password

#### Scenario: Floating label moves up on input

- **WHEN** the user types text into the Name field
- **THEN** the Name label moves from center position to above the input

### Requirement: Renders terms checkbox

The template SHALL include a checkbox for agreeing to Terms and Conditions, checked by default.

#### Scenario: Checkbox is checked by default

- **WHEN** the page loads
- **THEN** the terms checkbox is checked

#### Scenario: Checkbox toggles on click

- **WHEN** the user clicks the terms checkbox
- **THEN** the checkbox state toggles

### Requirement: Renders register button

The template SHALL display a full-width pill-shaped "Register" button.

#### Scenario: Register button is present

- **WHEN** the page loads
- **THEN** there is a button labeled "Register"

#### Scenario: Form submission is prevented

- **WHEN** the user clicks the Register button without filling fields
- **THEN** the form does not navigate away (default prevented)

### Requirement: Renders social login section

The template SHALL show an "or register with" divider and social login buttons for Facebook, Twitter, and Google.

#### Scenario: Social login buttons are present

- **WHEN** the page loads
- **THEN** there are social login buttons labeled Facebook, Twitter, and Google

#### Scenario: Social login text is displayed

- **WHEN** the page loads
- **THEN** text "or register with" is visible between the register button and social buttons

### Requirement: Renders Component Dock footer

The template SHALL display a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** the page loads
- **THEN** there is a link with text "More templates at Component Dock" pointing to https://www.componentdock.com/
