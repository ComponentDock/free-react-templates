# Spec: Loginsplash — Vibrant Login Form

## Purpose

Recreation of ColorLib Login Form V11 as Loginsplash — a centered login form on a vibrant blue-to-pink gradient background, with Poppins/Raleway fonts, email/password inputs with left-aligned icons, remember-me checkbox, pink login button, Facebook/Google social buttons, and "Not a member? Sign up now" CTA.

- Source: https://colorlib.com/wp/template/login-form-v11/
- Preview: https://colorlib.com/etc/lf/Login_v11/index.html
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token                 | Value   | Usage                                                |
| --------------------- | ------- | ---------------------------------------------------- |
| --color-page-start    | #0250c5 | Gradient start — blue                                |
| --color-page-end      | #d43f8d | Gradient end — pink                                  |
| --color-card          | #ffffff | Card background                                      |
| --color-primary       | #d33f8d | Pink/magenta accent — button, focus, checkbox, hover |
| --color-primary-hover | #333333 | Dark hover state                                     |
| --color-ink           | #333333 | Heading text                                         |
| --color-body          | #666666 | Body text                                            |
| --color-caption       | #999999 | Secondary text, social labels                        |
| --color-input-bg      | #e6e6e6 | Input background                                     |
| --color-input-text    | #686868 | Input text                                           |
| --color-placeholder   | #acacac | Placeholder text                                     |
| --color-social-border | #e6e6e6 | Social button borders                                |
| --color-facebook      | #3b5998 | Facebook brand blue                                  |
| --color-google        | #555555 | Google gray                                          |
| --font-body           | Poppins | Body text                                            |
| --font-heading        | Raleway | Headings, buttons, labels                            |

## Requirements

### Requirement: Centered gradient background

The template SHALL render a full-viewport page with a vertical linear gradient from blue (#0250c5) to pink (#d43f8d), centering a white card.

#### Scenario: Gradient background visible

- **WHEN** the user loads the page
- **THEN** a blue-to-pink gradient covers the full viewport

#### Scenario: Card is centered

- **WHEN** the user loads the page
- **THEN** a white card is centered horizontally and vertically

### Requirement: Login heading

The template SHALL display an uppercase "Login" heading in Raleway-Black font inside the card.

#### Scenario: Heading is visible

- **WHEN** the user loads the page
- **THEN** a "Login" heading is visible in uppercase

### Requirement: Email input with icon

The template SHALL render an email input with a mail icon on the left, gray background, and placeholder text "Email".

#### Scenario: Email input renders

- **WHEN** the user loads the page
- **THEN** an email input is visible with placeholder "Email"

#### Scenario: Email accepts input

- **WHEN** the user types an email address
- **THEN** the input displays the typed text

### Requirement: Password input with icon

The template SHALL render a password input with a lock icon on the left, gray background, and placeholder text "Password".

#### Scenario: Password input renders

- **WHEN** the user loads the page
- **THEN** a password input is visible with placeholder "Password"

#### Scenario: Password accepts input

- **WHEN** the user types a password
- **THEN** the input displays masked characters

### Requirement: Remember me checkbox

The template SHALL render a "Remember me" checkbox, unchecked by default.

#### Scenario: Checkbox unchecked by default

- **WHEN** the user loads the page
- **THEN** the "Remember me" checkbox is unchecked

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the checkbox
- **THEN** it becomes checked

### Requirement: Login button

The template SHALL render a full-width uppercase "Login" button with pink (#d33f8d) background.

#### Scenario: Button renders

- **WHEN** the user loads the page
- **THEN** a "Login" button is visible with pink background

#### Scenario: Button hover

- **WHEN** the user hovers the Login button
- **THEN** the background changes to dark (#333333)

### Requirement: Social login buttons

The template SHALL render Facebook and Google social login buttons side by side, each with an icon and label.

#### Scenario: Facebook button

- **WHEN** the user loads the page
- **THEN** a "Login with Facebook" link is visible with blue (#3b5998) text

#### Scenario: Google button

- **WHEN** the user loads the page
- **THEN** a "Login with Google" link is visible with gray (#555555) text

### Requirement: Sign up CTA

The template SHALL display "Not a member? Sign up now" with a link to #signup.

#### Scenario: CTA visible

- **WHEN** the user loads the page
- **THEN** "Not a member?" text and a "Sign up now" link are visible

### Requirement: Component Dock footer

The template SHALL render a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the user loads the page
- **THEN** a "More templates at Component Dock" link is visible pointing to https://www.componentdock.com/

### Requirement: Form submission

The template SHALL handle form submission without page reload.

#### Scenario: Submit

- **WHEN** the user fills in email and password and clicks Login
- **THEN** the form submits without navigation or error
