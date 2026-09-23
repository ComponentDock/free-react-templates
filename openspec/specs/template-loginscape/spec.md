# Spec: LoginScape — Centered Card Login Form

## Purpose

Recreation of ColorLib Login Form 18 as LoginScape — a centered-card login form template with purple accent, user avatar icon, gray input fields, and "Get Started" CTA button.

- Source: https://colorlib.com/wp/template/login-form-18/
- Preview: https://preview.colorlib.com/theme/login-form-18/ (404 — design captured from screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-18-2.jpg
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token                 | Value              | Usage                                                         |
| --------------------- | ------------------ | ------------------------------------------------------------- |
| --color-page          | #f0f0f5            | Page background (light gray-blue)                             |
| --color-card          | #ffffff            | Card background (white)                                       |
| --color-primary       | #7B5EA7            | Purple accent — avatar circle, heading, button, checkbox      |
| --color-primary-hover | #6A4F96            | Purple hover state                                            |
| --color-ink           | #333333            | Body text                                                     |
| --color-caption       | #999999            | Placeholder text, secondary links                             |
| --color-input-bg      | #f0f0f0            | Input field background (light gray)                           |
| --color-input-border  | transparent        | No visible border — input bg provides contrast                |
| --color-card-shadow   | 0 4px 20px rgba(0,0,0,0.08) | Subtle card elevation                              |
| --font-sans           | Poppins, sans-serif | Primary font (clean geometric sans-serif)                    |

## Requirements

### Requirement: Centered card login layout

The template SHALL render a centered card on a light gray background. The card is white with rounded corners and a subtle box shadow, vertically centered in the viewport.

#### Scenario: Desktop layout

- **WHEN** the user loads the page on a desktop viewport
- **THEN** a white card is centered horizontally and vertically on a light gray background

#### Scenario: Mobile layout

- **WHEN** the user loads the page on a mobile viewport
- **THEN** the card remains centered with appropriate padding and scales to fit

### Requirement: User avatar icon

The template SHALL display a purple circular avatar icon at the top center of the card containing a user silhouette.

#### Scenario: Avatar is visible

- **WHEN** the user loads the page
- **THEN** a purple circle with a white user icon is visible at the top of the card

### Requirement: Heading text

The template SHALL display "Have an account?" text below the avatar in purple color, centered.

#### Scenario: Heading is visible

- **WHEN** the user loads the page
- **THEN** "Have an account?" text is visible below the avatar

### Requirement: Username and password fields

The template SHALL render a username text input and a password input, each with placeholder text and a light gray background.

#### Scenario: Username input

- **WHEN** the user loads the page
- **THEN** a username input is visible with placeholder "Username" and a light gray background

#### Scenario: Password input

- **WHEN** the user loads the page
- **THEN** a password input is visible with placeholder "Password" and a light gray background

#### Scenario: Username accepts input

- **WHEN** the user types "testuser" in the username field
- **THEN** the username field contains "testuser"

#### Scenario: Password accepts input

- **WHEN** the user types "secret" in the password field
- **THEN** the password field contains "secret"

### Requirement: Remember Me and Forgot Password

The template SHALL render a "Remember Me" checkbox (checked by default) on the left and a "Forgot Password" link on the right, below the password input.

#### Scenario: Remember Me checkbox

- **WHEN** the user loads the page
- **THEN** a "Remember Me" checkbox is visible and checked by default

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the Remember Me checkbox
- **THEN** the checkbox state toggles

#### Scenario: Forgot Password link

- **WHEN** the user loads the page
- **THEN** a "Forgot Password" link is visible

### Requirement: Get Started button

The template SHALL render a full-width "Get Started" button with purple background, white text, and rounded corners, spanning the full card width below the Remember Me row.

#### Scenario: Button is visible

- **WHEN** the user loads the page
- **THEN** a "Get Started" button is visible with purple background

#### Scenario: Form submits without error

- **WHEN** the user fills in username and password and clicks Get Started
- **THEN** no error occurs

### Requirement: Component Dock footer

The template SHALL include a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the user loads the page
- **THEN** a "More templates at Component Dock" link is visible

### Requirement: No ColorLib references

The template SHALL NOT contain any references to ColorLib in app source files, comments, or CSS.

#### Scenario: Clean source

- **WHEN** the app source code is inspected
- **THEN** no "colorlib" or "colorlib.com" strings appear in any file under apps/loginscape/

## Verification Checklist

- [ ] Card is centered on light gray background
- [ ] Purple avatar circle with user icon at top of card
- [ ] "Have an account?" heading in purple
- [ ] Username input with gray background and placeholder
- [ ] Password input with gray background and placeholder
- [ ] "Remember Me" checkbox checked by default, toggles on click
- [ ] "Forgot Password" link visible
- [ ] Full-width purple "Get Started" button
- [ ] Component Dock footer link present
- [ ] No ColorLib references in source
- [ ] 100% test coverage
- [ ] Typecheck passes
- [ ] Build succeeds
