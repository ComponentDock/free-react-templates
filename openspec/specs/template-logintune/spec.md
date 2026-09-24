# Template: LoginTune (Login Form)

## Purpose

Recreation of ColorLib **WordPress Login Customizer** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/wordpress-login-customizer/
- **Preview URL:** https://preview.colorlib.com/theme/wordpress-login-customizer/ (404 — preview unavailable; design captured from screenshot only)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/creative-colorlib-login-form.jpg
- **New name:** `logintune` (app folder `apps/logintune`, package `@free-react-templates/logintune`)
- **Deploy URL:** https://logintune.free.componentdock.com

## Design tokens (from screenshot analysis)

| Token | Value | Source |
| --- | --- | --- |
| `--color-brand` | `#6ab04c` | Solid green background, login button |
| `--color-bg-page` | `#6ab04c` | Full-viewport green background |
| `--color-bg-card` | `#ffffff` | White centered card |
| `--color-bg-input` | `#f0f0f0` | Light gray input backgrounds |
| `--color-text` | `#333333` | Input placeholder text, body |
| `--color-text-muted` | `#999999` | "Not registered?" text |
| `--color-text-link` | `#6ab04c` | "Create an account" link (matches brand) |
| `--color-text-button` | `#ffffff` | White button text |
| `--font-family` | `Arial, sans-serif` | System font stack (no custom font visible) |
| `--radius-card` | `4px` | Subtle card rounding |
| `--radius-input` | `4px` | Input field rounding |
| `--radius-button` | `4px` | Login button rounding |
| `--shadow-card` | `0 2px 10px rgba(0,0,0,0.1)` | Subtle card drop shadow |

## Requirements

### Requirement: Full-viewport green background

The page SHALL render a solid green (#6ab04c) background covering the full viewport.

#### Scenario: Page background renders

- **WHEN** the user navigates to LoginTune
- **THEN** the page background is solid green (#6ab04c)
- **AND** the background covers the full viewport height (min-height 100vh)

### Requirement: Centered white login card

The login form SHALL be contained in a white card centered on the page.

#### Scenario: Card renders

- **WHEN** the page loads
- **THEN** a white (#ffffff) card is visible, centered horizontally and vertically
- **AND** the card has a subtle box-shadow (0 2px 10px rgba(0,0,0,0.1))
- **AND** the card has border-radius of approximately 4px
- **AND** the card width is approximately 350–400px

#### Scenario: Card responsive layout

- **WHEN** the viewport is 375px wide
- **THEN** the card shrinks to fit within the viewport with horizontal padding

### Requirement: Username input field

The form SHALL include a username input field with light gray background.

#### Scenario: Username input renders

- **WHEN** the page loads
- **THEN** a text input with placeholder "username" is visible
- **AND** the input has a light gray (#f0f0f0) background
- **AND** the input has rounded corners (border-radius ~4px)
- **AND** the input is full-width within the card
- **AND** the input text is dark gray (#333333)

### Requirement: Password input field

The form SHALL include a password input field that masks typed characters.

#### Scenario: Password input renders

- **WHEN** the page loads
- **THEN** a password input with placeholder "password" is visible below the username input
- **AND** the input has a light gray (#f0f0f0) background
- **AND** typed characters are masked
- **AND** the input has the same styling as the username input

### Requirement: Green login button

The form SHALL include a full-width green login button.

#### Scenario: Button renders

- **WHEN** the page loads
- **THEN** a button labeled "LOGIN" is visible below the password input
- **AND** the button has a green (#6ab04c) background
- **AND** the button text is white, uppercase, and centered
- **AND** the button is full-width within the card
- **AND** the button has rounded corners matching the input fields

#### Scenario: Button hover effect

- **WHEN** the user hovers over the LOGIN button
- **THEN** the button background darkens slightly (e.g. #5a9e40)

### Requirement: Registration link

The form SHALL display a "Not registered? Create an account" link below the button.

#### Scenario: Registration link renders

- **WHEN** the page loads
- **THEN** the text "Not registered?" is visible in muted gray (#999999)
- **AND** the text "Create an account" appears as a link in green (#6ab04c)
- **AND** the text is centered below the login button
- **AND** clicking the link navigates to a registration page (or does nothing if single-page)

### Requirement: No header, no footer, no logo

The template SHALL be a minimal login form with no header, footer, or logo elements.

#### Scenario: Minimal layout

- **WHEN** the page loads
- **THEN** there is no visible header bar, navigation, or logo
- **AND** there is no visible footer or copyright text
- **AND** the page contains only the centered card with form fields and link

### Requirement: Accessibility

The form SHALL be accessible with proper labels and keyboard navigation.

#### Scenario: Keyboard navigation

- **WHEN** the user presses Tab to navigate
- **THEN** focus moves from username input to password input to login button
- **AND** focus is visible on each interactive element

#### Scenario: Screen reader support

- **WHEN** a screen reader parses the page
- **THEN** the username input has an accessible label ("Username")
- **AND** the password input has an accessible label ("Password")
- **AND** the login button has an accessible name ("Login")

### Requirement: Footer with Component Dock link

The template footer SHALL link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** a minimal footer is visible at the bottom of the page
- **AND** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"
