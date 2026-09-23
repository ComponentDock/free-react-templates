# SignWell — Login Form Template

## Purpose

Recreation of ColorLib "Login Form 10"
(https://colorlib.com/wp/template/login-form-10/).
A clean, modern login page with social login buttons on the left and a
traditional username/password form on the right, separated by a divider.
Preview was unreachable (404); design based on screenshot.

## Design Tokens

- Background: `#f5f5f5` (light gray)
- Card: white with subtle shadow
- Login button: `#4ecdc4` (teal/mint green), rounded, full-width
- Facebook button: `#3b5998` (dark navy)
- Twitter button: `#1da1f2` (sky blue)
- Google button: `#dd4b39` (coral red)
- Text: dark gray headings, gray subtitle
- Font: Poppins (Google Fonts)
- Inputs: bordered, clean, no background fill
- Checkbox: teal when checked

## Requirements

### Requirement: App composition and title

The app SHALL compose a login page with social login section, divider, and
login form card, and set the document title.

#### Scenario: Page renders with all sections

- **WHEN** the app loads
- **THEN** the page displays a social login section, a divider, and a login form card
- **AND** `document.title` is "SignWell — Login Form Template"

#### Scenario: Header and footer present

- **WHEN** the app loads
- **THEN** a banner (header) and contentinfo (footer) are present

### Requirement: Login form fields

The login form SHALL include username and password inputs, a remember-me
checkbox, a forgot-password link, and a log-in button.

#### Scenario: Username input exists

- **WHEN** the login form is visible
- **THEN** a text input with placeholder "Username" is present

#### Scenario: Password input exists

- **WHEN** the login form is visible
- **THEN** a password input with placeholder "Password" is present

#### Scenario: Remember me checkbox

- **WHEN** the login form is visible
- **THEN** a "Remember me" checkbox is present and unchecked by default

#### Scenario: Forgot Password link

- **WHEN** the login form is visible
- **THEN** a link with text "Forgot Password" is present

#### Scenario: Log In button

- **WHEN** the login form is visible
- **THEN** a button with text "Log In" is present

#### Scenario: Form submission prevented

- **GIVEN** the user fills in username and password
- **WHEN** the user clicks "Log In"
- **THEN** the page does not reload (default prevented)

### Requirement: Social login buttons

The page SHALL display three social login buttons (Facebook, Twitter, Google)
with appropriate brand colors.

#### Scenario: Three social buttons

- **WHEN** the social login section renders
- **THEN** buttons for Facebook, Twitter, and Google are present

#### Scenario: Social button label

- **WHEN** the social login section renders
- **THEN** the text "or sign in with" is displayed above the buttons

### Requirement: Divider

The page SHALL display a divider between the social and form sections.

#### Scenario: Divider text

- **WHEN** the page renders
- **THEN** a separator with text "or" is visible between the two sections

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer Component Dock link

- **WHEN** the footer renders
- **THEN** a link to "https://www.componentdock.com/" with text containing "Component Dock" is present

### Requirement: Responsive layout

The layout SHALL stack vertically on narrow viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport width is less than 768px
- **WHEN** the page renders
- **THEN** the social buttons and login form are stacked vertically

### Requirement: Dark mode

The app SHALL support dark mode via a toggle.

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the html element gains the "dark" class
