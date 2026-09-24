# Spec: LoginLens — Social + Email Login Form

## Purpose

Recreation of ColorLib **Login Form V7** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. A clean, centered login page with social login buttons (Facebook, Twitter), email/password fields with password visibility toggle, and a dark pill-shaped login button.

- **Source:** https://colorlib.com/wp/template/login-form-v7/
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v7/ (404 at prep time — design captured from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v7.jpg
- **New name:** `loginlens` (app folder `apps/loginlens`, package `@free-react-templates/loginlens`)
- **Deploy URL:** https://loginlens.free.componentdock.com

## Design Tokens (from screenshot analysis)

| Token                    | Value               | Usage                               |
| ------------------------ | ------------------- | ----------------------------------- |
| `--color-page-bg`        | `#d5d5d5`           | Full viewport light gray background |
| `--color-facebook`       | `#4a5568`           | Facebook social login button        |
| `--color-facebook-hover` | `#3d4759`           | Facebook hover state                |
| `--color-twitter`        | `#1da1f2`           | Twitter social login button         |
| `--color-twitter-hover`  | `#1a91da`           | Twitter hover state                 |
| `--color-btn-dark`       | `#2d2d2d`           | Email login button (dark)           |
| `--color-btn-dark-hover` | `#1a1a1a`           | Login button hover                  |
| `--color-input-bg`       | `#ffffff`           | Input field backgrounds             |
| `--color-input-border`   | `#e0e0e0`           | Input field borders                 |
| `--color-heading`        | `#2d2d2d`           | Login heading text                  |
| `--color-text-muted`     | `#777777`           | Subtext and labels                  |
| `--color-signup-link`    | `#2d2d2d`           | Sign up link text                   |
| `--font-poppins`         | Poppins, sans-serif | All text                            |

## Requirements

### Requirement: Centered login layout

The template SHALL render a full-viewport centered layout with a light gray background (#d5d5d5). The login form is vertically and horizontally centered.

#### Scenario: Desktop layout

- **WHEN** the user loads the page on a desktop viewport
- **THEN** the login form is centered horizontally and vertically on a light gray background

#### Scenario: Mobile layout

- **WHEN** the user loads the page on a mobile viewport
- **THEN** the form scales to fit with appropriate padding

### Requirement: Login heading

The template SHALL display a "Login" heading at the top of the form, centered, in dark bold text.

#### Scenario: Heading is visible

- **WHEN** the user loads the page
- **THEN** a "Login" heading is visible, centered, in dark bold text

### Requirement: Social login buttons

The template SHALL display two full-width pill-shaped social login buttons: "Login with Facebook" (dark slate blue) and "Login with Twitter" (bright blue). Each button has an SVG brand icon and text label.

#### Scenario: Facebook button renders

- **WHEN** the user loads the page
- **THEN** a "Login with Facebook" button is visible with a Facebook icon

#### Scenario: Twitter button renders

- **WHEN** the user loads the page
- **THEN** a "Login with Twitter" button is visible with a Twitter icon

#### Scenario: Hover effect on social buttons

- **WHEN** the user hovers over a social login button
- **THEN** the button background color changes to the hover variant

#### Scenario: Hover leave on social buttons

- **WHEN** the user moves the mouse away from a social login button
- **THEN** the button background color reverts to the original color

### Requirement: Email login section

The template SHALL display a "Login with email" subheading followed by an email input field and a password input field, both pill-shaped with white backgrounds and light borders.

#### Scenario: Email input renders

- **WHEN** the user loads the page
- **THEN** an email input field with placeholder "Email" is visible

#### Scenario: Password input renders

- **WHEN** the user loads the page
- **THEN** a password input field with placeholder "Password" is visible with masked input

#### Scenario: Email input accepts text

- **WHEN** the user types in the email field
- **THEN** the typed text appears in the field

#### Scenario: Password input accepts text

- **WHEN** the user types in the password field
- **THEN** the typed text appears masked (password type)

### Requirement: Password visibility toggle

The template SHALL display an eye icon button next to the password field that toggles password visibility between masked and plain text.

#### Scenario: Toggle shows password

- **WHEN** the user clicks the show password button
- **THEN** the password field changes from type "password" to type "text"

#### Scenario: Toggle hides password

- **WHEN** the password is visible and the user clicks the hide password button
- **THEN** the password field changes from type "text" to type "password"

### Requirement: Login submit button

The template SHALL display a full-width dark pill-shaped "LOGIN" button below the password field.

#### Scenario: Login button renders

- **WHEN** the user loads the page
- **THEN** a "Login" button is visible below the form fields

#### Scenario: Form submission is prevented

- **WHEN** the user clicks the Login button with empty fields
- **THEN** the form does not navigate or reload

### Requirement: Sign up link

The template SHALL display "Don't have an account?" text and a "SIGN UP NOW" underlined link below the login form.

#### Scenario: Sign up text is visible

- **WHEN** the user loads the page
- **THEN** "Don't have an account?" text is visible below the form

#### Scenario: Sign up link renders

- **WHEN** the user loads the page
- **THEN** a "SIGN UP NOW" link is visible and underlined

### Requirement: Component Dock footer

The template SHALL display a footer with a link to https://www.componentdock.com/ labeled "More templates at Component Dock".

#### Scenario: Footer link renders

- **WHEN** the user loads the page
- **THEN** a "More templates at Component Dock" link is visible in the footer

#### Scenario: Footer link opens in new tab

- **WHEN** the user views the footer link attributes
- **THEN** the link has target="_blank" and rel="noopener noreferrer"
