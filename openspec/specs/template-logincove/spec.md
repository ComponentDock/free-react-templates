# Spec: Logincove — Split-Screen Login Form

## Purpose

Recreation of ColorLib Login Form 14 as Logincove — a split-screen sign-in form template with gold accent, Lato font, Facebook/Twitter social login, and "Not a member? Sign Up" CTA.

- Source: https://colorlib.com/wp/template/login-form-14/
- Preview: https://preview.colorlib.com/theme/bootstrap/login-form-14/
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token                 | Value            | Usage                                                      |
| --------------------- | ---------------- | ---------------------------------------------------------- |
| --color-page          | #f8f9fd          | Page background (light gray-blue)                          |
| --color-card          | #ffffff          | Card background                                            |
| --color-primary       | #e3b04b          | Gold/amber accent — buttons, links, checkbox, focus border |
| --color-primary-hover | #d4a040          | Gold hover state                                           |
| --color-ink           | #000000          | Heading text, labels                                       |
| --color-caption       | #666666          | Body text, placeholder                                     |
| --color-border        | rgba(0,0,0,0.1)  | Input borders                                              |
| --color-social-border | rgba(0,0,0,0.05) | Social icon borders                                        |
| --color-social-text   | #999999          | Social icon color before hover                             |
| --font-sans           | Lato, sans-serif | Primary font                                               |

## Requirements

### Requirement: Split-screen login layout

The template SHALL render a split-screen layout with a decorative illustration on the left half (hidden on mobile) and a login form on the right half, wrapped in a white card with rounded corners and box shadow.

#### Scenario: Desktop layout

- **WHEN** the user loads the page on a desktop viewport
- **THEN** a decorative illustration is visible on the left half and the login form is visible on the right half

#### Scenario: Mobile layout

- **WHEN** the user loads the page on a mobile viewport
- **THEN** a decorative illustration is shown above the form and the layout is single-column

### Requirement: Sign In heading

The template SHALL display a "Sign In" heading above the form fields.

#### Scenario: Heading is visible

- **WHEN** the user loads the page
- **THEN** a "Sign In" heading is visible

### Requirement: Username and password fields

The template SHALL render a username text input and a password input, each with an uppercase label and placeholder text.

#### Scenario: Username input

- **WHEN** the user loads the page
- **THEN** a username input is visible with label "Username" and placeholder "Username"

#### Scenario: Password input

- **WHEN** the user loads the page
- **THEN** a password input is visible with label "Password" and placeholder "Password"

#### Scenario: Username accepts input

- **WHEN** the user types "testuser" in the username field
- **THEN** the username field contains "testuser"

#### Scenario: Password accepts input

- **WHEN** the user types "secret" in the password field
- **THEN** the password field contains "secret"

### Requirement: Sign In button

The template SHALL render a full-width "Sign In" submit button with gold/amber background.

#### Scenario: Button is visible

- **WHEN** the user loads the page
- **THEN** a "Sign In" button is visible

#### Scenario: Form submits without error

- **WHEN** the user fills in username and password and clicks Sign In
- **THEN** no error occurs

### Requirement: Remember Me and Forgot Password

The template SHALL render a "Remember Me" checkbox (checked by default) on the left and a "Forgot Password" link on the right.

#### Scenario: Remember Me checkbox

- **WHEN** the user loads the page
- **THEN** a "Remember Me" checkbox is visible and checked by default

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the Remember Me checkbox
- **THEN** the checkbox state toggles

#### Scenario: Forgot Password link

- **WHEN** the user loads the page
- **THEN** a "Forgot Password" link is visible

### Requirement: Social login buttons

The template SHALL render Facebook and Twitter circular social login icons on the right side above the Sign Up CTA.

#### Scenario: Social buttons visible

- **WHEN** the user loads the page
- **THEN** Facebook and Twitter social login icons are visible

### Requirement: Sign Up CTA

The template SHALL render "Not a member? Sign Up" text at the bottom of the form area.

#### Scenario: Sign Up link

- **WHEN** the user loads the page
- **THEN** "Not a member?" text and a "Sign Up" link are visible

### Requirement: Component Dock footer

The template SHALL include a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the user loads the page
- **THEN** a "More templates at Component Dock" link is visible

### Requirement: No ColorLib references

The template SHALL NOT contain any references to ColorLib in app source files, comments, or CSS.

#### Scenario: Clean source

- **WHEN** the app source code is inspected
- **THEN** no "colorlib" or "colorlib.com" strings appear in any file under apps/logincove/
