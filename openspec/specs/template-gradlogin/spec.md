# Spec: Gradlogin — Split-Screen Login Form with Gradient

## Purpose

Recreation of ColorLib Login Form V17 as Gradlogin — a split-screen sign-in form template with a pink-to-red gradient decorative panel, Lato font, Facebook/Twitter social icons, and "Welcome to login / Sign Up" CTA on the decorative side.

- Source: https://colorlib.com/wp/template/login-form-17/
- Preview: https://preview.colorlib.com/theme/bootstrap/login-form-17/
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token                      | Value                      | Usage                                                     |
| -------------------------- | -------------------------- | --------------------------------------------------------- |
| --color-page               | #ffffff                    | Page background                                            |
| --color-card               | #ffffff                    | Login card background                                      |
| --color-gradient-start     | #f75959                    | Gradient start (warm red)                                  |
| --color-gradient-end       | #f35587                    | Gradient end (pink)                                        |
| --color-primary            | #f35588                    | Button background, checkbox accent, social hover           |
| --color-primary-hover      | #e84070                    | Button hover state                                         |
| --color-ink                | #212529                    | Heading, label, and body text                              |
| --color-caption            | #999999                    | Social icon color before hover                             |
| --color-link               | #007bff                    | "Forgot Password" and generic link color                   |
| --color-link-hover         | #0056b3                    | Link hover state                                           |
| --font-sans                | Lato, sans-serif           | Primary font (weights 300, 400, 700, 900)                 |
| --radius-card              | 5px                        | Card border-radius                                         |
| --radius-button            | 50px                       | Pill-shaped buttons (Sign In, Sign Up)                     |
| --radius-social            | 50%                        | Circular social icon buttons                               |
| --shadow-card              | 0 10px 34px -15px rgba(0,0,0,0.24) | Card box-shadow                            |

## Requirements

### Requirement: Split-screen login layout

The template SHALL render a split-screen layout with a gradient decorative panel on the left half (hidden on mobile) and a login form on the right half, wrapped in a white card with rounded corners and box shadow.

#### Scenario: Desktop layout

- **WHEN** the user loads the page on a desktop viewport (>= 992px)
- **THEN** a gradient decorative panel is visible on the left half and the login form is visible on the right half

#### Scenario: Mobile layout

- **WHEN** the user loads the page on a mobile viewport (< 992px)
- **THEN** the layout is single-column with the decorative panel above the form

### Requirement: Decorative panel text

The template SHALL display "Welcome to login" heading and "Don't have an account?" subtext on the gradient decorative panel, followed by a "Sign Up" outline button.

#### Scenario: Decorative text visible on desktop

- **WHEN** the user loads the page on a desktop viewport
- **THEN** "Welcome to login" heading is visible on the gradient panel
- **AND** "Don't have an account?" subtext is visible below the heading
- **AND** a "Sign Up" outline button is visible below the subtext

#### Scenario: Sign Up button styling

- **WHEN** the user views the Sign Up button
- **THEN** it has a white outline on the gradient background and rounded pill shape

### Requirement: Sign In heading

The template SHALL display a "Sign In" heading above the form fields.

#### Scenario: Heading is visible

- **WHEN** the user loads the page
- **THEN** a "Sign In" heading is visible in the login form panel

### Requirement: Social login icons

The template SHALL render Facebook and Twitter circular social icons at the top-right of the form, aligned with the Sign In heading.

#### Scenario: Social icons visible

- **WHEN** the user loads the page
- **THEN** a Facebook circular icon and a Twitter circular icon are visible

#### Scenario: Social icon hover

- **WHEN** the user hovers over a social icon
- **THEN** the icon background changes to the primary pink color (#f35588) and the icon color changes to white

### Requirement: Username and password fields

The template SHALL render a username text input and a password input, each with a label above.

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

The template SHALL render a full-width "Sign In" submit button with gradient background matching the decorative panel.

#### Scenario: Button is visible

- **WHEN** the user loads the page
- **THEN** a "Sign In" button is visible with gradient background

#### Scenario: Button submits form

- **WHEN** the user fills in username and password and clicks Sign In
- **THEN** no error occurs

### Requirement: Remember Me and Forgot Password

The template SHALL render a "Remember Me" checkbox (checked by default) on the left and a "Forgot Password" link on the right.

#### Scenario: Remember Me checkbox

- **WHEN** the user loads the page
- **THEN** a "Remember Me" checkbox is visible and checked by default

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the Remember Me checkbox
- **THEN** the checkbox toggles between checked and unchecked

#### Scenario: Forgot Password link

- **WHEN** the user loads the page
- **THEN** a "Forgot Password" link is visible on the right side

### Requirement: Responsive behavior

The template SHALL be fully responsive, stacking into a single-column layout on mobile with the decorative panel above the form.

#### Scenario: Mobile single column

- **WHEN** the user loads the page on a viewport < 992px
- **THEN** the layout is single-column with the gradient panel above the login form

### Requirement: Footer branding

The template SHALL include a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Footer link visible

- **WHEN** the user loads the page
- **THEN** a footer is visible with a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Split-screen layout renders correctly at desktop width
- [ ] Gradient panel shows correct colors (#f75959 → #f35587)
- [ ] "Welcome to login" and "Don't have an account?" text visible on panel
- [ ] "Sign Up" outline button on gradient panel
- [ ] "Sign In" heading in form panel
- [ ] Facebook and Twitter circular social icons
- [ ] Social icon hover changes to pink background
- [ ] Username input with label and placeholder
- [ ] Password input with label and placeholder
- [ ] "Sign In" button with gradient background, full width, pill shape
- [ ] "Remember Me" checkbox checked by default
- [ ] "Forgot Password" link visible
- [ ] Mobile: single-column layout, panel above form
- [ ] Footer with Component Dock link
- [ ] Lato font loaded and applied
