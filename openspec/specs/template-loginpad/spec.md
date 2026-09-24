# Template: Loginpad (Login Form V14)

## Purpose

Recreation of ColorLib **Login Form V14** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v14`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v14/index.html
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v14/
- **New name:** `loginpad` (apps/loginpad, package @free-react-templates/loginpad)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from live preview CSS)

### Colors

| Token               | Hex       | Usage                               |
| ------------------- | --------- | ----------------------------------- |
| Page background     | `#ebebeb` | Full viewport light gray            |
| Card background     | `#ffffff` | Login card white                    |
| Text dark (labels)  | `#555555` | Title, labels, forgot password link |
| Placeholder / muted | `#999999` | Input placeholder, checkbox label   |
| Input border        | `#e6e6e6` | Input fields, checkbox border       |
| Focus green         | `#57b846` | Focus ring, hover states            |
| Button background   | `#333333` | Login button default                |
| Button hover        | `#57b846` | Login button hover                  |
| Button text         | `#ffffff` | Login button text                   |

### Fonts

| Token      | Font family      | Usage                                     |
| ---------- | ---------------- | ----------------------------------------- |
| Body       | Raleway Regular  | Body text, links                          |
| Title      | Raleway Medium   | "Account Login" heading (30px, uppercase) |
| Labels     | Raleway SemiBold | Field labels (13px, uppercase)            |
| Input text | Raleway Medium   | Input fields (18px)                       |
| Button     | Raleway Bold     | Login button (16px)                       |

### Layout & Shapes

- Full viewport height, centered flex layout, light gray background
- Card: 560px wide, white, border-radius 10px, responsive padding
- Inputs: 55px height, border-radius 2px, 1px border
- Login button: full-width, 55px height, border-radius 27px (pill shape)
- Focus effect: green border scale animation on input focus

## Requirements

### Requirement: Renders account login form

The login form SHALL display an "Account Login" heading, username input, password input with visibility toggle, remember-me checkbox, forgot password link, and login button.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the heading "Account Login" is displayed

#### Scenario: Username input accepts text

- **WHEN** the user types in the username field
- **THEN** the input value updates to reflect the typed text

#### Scenario: Password input defaults to hidden

- **WHEN** the page loads
- **THEN** the password input has type "password"

#### Scenario: Password visibility toggle

- **WHEN** the user clicks the show password button
- **THEN** the password input type changes to "text"
- **AND** the button label changes to "Hide password"

#### Scenario: Remember me checkbox toggles

- **WHEN** the user clicks the remember me checkbox
- **THEN** the checkbox state toggles

#### Scenario: Form submission

- **WHEN** the user fills in username and password and clicks Login
- **THEN** the form submits without error

### Requirement: Pill-shaped login button

The login button SHALL be full-width with pill shape (border-radius 27px), dark background (#333333), and green hover (#57b846).

#### Scenario: Button styling

- **WHEN** the login button renders
- **THEN** it has full-width, pill-shaped, and dark background styling

### Requirement: Component Dock footer

The footer SHALL link to https://www.componentdock.com/ with the text "More templates at Component Dock" and open in a new tab.

#### Scenario: Footer link is present

- **WHEN** the page loads
- **THEN** the footer contains a link to Component Dock

#### Scenario: Footer link opens in new tab

- **WHEN** the user clicks the footer link
- **THEN** it opens in a new tab (target="_blank")

### Requirement: Centered card layout

The form SHALL be rendered inside a centered white card on a light gray background, with responsive padding.

#### Scenario: Card is centered

- **WHEN** the page loads
- **THEN** the form card is centered on the viewport
