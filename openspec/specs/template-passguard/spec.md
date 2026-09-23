# PassGuard — Login Form Template Spec

## Purpose

Recreation of ColorLib **Login Form 05** under the NEW name **PassGuard**.
A split-screen login page with a full-height kitchen-lifestyle background
image on the left and a centered white login card on the right containing
username/password fields, a "Remember me" checkbox, "Forgot Password" link,
a primary "Log In" button, and social login options (Facebook + Google).

- **ColorLib source:** https://colorlib.com/wp/template/login-form-05/
- **Preview URL — UNREACHABLE (404):** https://preview.colorlib.com/theme/login-form-05/
  Returns HTTP 404. Design tokens extracted from screenshot analysis + ColorLib
  listing page meta.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

| Token        | Value               | Use                                                        |
| ------------ | ------------------- | ---------------------------------------------------------- |
| Page bg      | `#f5f5f5`           | Full-viewport light gray background (right half + body)    |
| Card bg      | `#ffffff`           | White login card background                                |
| Brand orange | `#f26522`           | "Log In" button bg, "Remember me" checkbox, "Forgot Password" link |
| Facebook blue| `#3b5998`           | "Login with Facebook" button bg                            |
| Google red   | `#dd4b39`           | "Login with Google" button bg                              |
| Title text   | `#333333`           | "LOGIN TO PASSGUARD" heading                               |
| Label text   | `#555555`           | "Username", "Password" field labels                         |
| Input bg     | `#eeeeee`           | Light gray input field background                          |
| Placeholder  | `#999999`           | Input placeholder text                                     |
| Button text  | `#ffffff`           | All button labels (Log In, Facebook, Google)               |
| Divider text | `#999999`           | "or" separator text                                        |
| Link hover   | `#d4500a`           | Orange darker on hover                                     |
| Font         | 'Poppins' 400/500/600 | Sans-serif via Google Fonts                              |
| Inputs       | ~4px border-radius  | Light gray bg, full width, ~48px height                    |
| Buttons      | ~22px border-radius | Pill-shaped, full width, ~48px height                      |
| Card shadow  | `0 8px 32px rgba(0,0,0,0.08)` | Subtle elevated shadow                          |
| Card max-w   | ~420px              | Centered in right half                                     |
| Left image   | Full-height cover   | Kitchen lifestyle photo via picsum (seeded)                 |

## Requirements

### Requirement: Split-screen layout
The page SHALL display a split-screen layout with a full-height background
image on the left and the login card area on the right.

#### Scenario: Layout rendered
- **GIVEN** the app has loaded
- **WHEN** the user views the page
- **THEN** a full-height background image occupies the left half
- **AND** the right half contains the login card centered vertically

#### Scenario: Responsive stacking
- **GIVEN** the viewport width is less than 768px
- **WHEN** the user views the page
- **THEN** the background image is hidden and the card fills the viewport width

### Requirement: Login card heading
The card SHALL display an uppercase heading "LOGIN TO PASSGUARD".

#### Scenario: Heading visible
- **GIVEN** the app has loaded
- **WHEN** the user views the login card
- **THEN** the text "LOGIN TO PASSGUARD" is visible in uppercase

### Requirement: Username field
The form SHALL display a labeled Username text input with placeholder text.

#### Scenario: Username input renders
- **GIVEN** the form is displayed
- **WHEN** the user views the Username field
- **THEN** a "Username" label is visible above the input
- **AND** the input has placeholder "your-email@gmail.com"

#### Scenario: User types username
- **GIVEN** the form is displayed
- **WHEN** the user types "alice@example.com" into the Username field
- **THEN** the field contains "alice@example.com"

### Requirement: Password field
The form SHALL display a labeled Password input with placeholder text.

#### Scenario: Password input renders
- **GIVEN** the form is displayed
- **WHEN** the user views the Password field
- **THEN** a "Password" label is visible above the input
- **AND** the input has placeholder "Your Password"

#### Scenario: User types password
- **GIVEN** the form is displayed
- **WHEN** the user types "secret123" into the Password field
- **THEN** the field contains "secret123"

### Requirement: Remember me checkbox
The form SHALL include a "Remember me" checkbox, checked by default.

#### Scenario: Checkbox visible
- **GIVEN** the form is displayed
- **WHEN** the user views the form
- **THEN** a "Remember me" checkbox is visible and checked

#### Scenario: User unchecks
- **GIVEN** the form is displayed
- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox is unchecked

### Requirement: Forgot Password link
The form SHALL display a "Forgot Password" link aligned to the right.

#### Scenario: Link visible
- **GIVEN** the form is displayed
- **WHEN** the user views the form
- **THEN** a "Forgot Password" link is visible, aligned to the right

### Requirement: Log In button
The form SHALL include a full-width "Log In" button with orange background.

#### Scenario: Button visible
- **GIVEN** the form is displayed
- **WHEN** the user views the form
- **THEN** a "Log In" button is visible with orange background and white text

#### Scenario: Submit click prevents navigation
- **GIVEN** the form is displayed
- **WHEN** the user clicks the "Log In" button
- **THEN** the form does not navigate (preventDefault)

### Requirement: Divider text
The form SHALL display an "or" divider between the Log In button and social buttons.

#### Scenario: Divider visible
- **GIVEN** the form is displayed
- **WHEN** the user views the form
- **THEN** an "or" text separator is visible between the primary and social buttons

### Requirement: Social login buttons
The form SHALL display "Login with Facebook" and "Login with Google" buttons.

#### Scenario: Facebook button visible
- **GIVEN** the form is displayed
- **WHEN** the user views the social buttons
- **THEN** a "Login with Facebook" button is visible with blue background

#### Scenario: Google button visible
- **GIVEN** the form is displayed
- **WHEN** the user views the social buttons
- **THEN** a "Login with Google" button is visible with red background

#### Scenario: Social buttons prevent navigation
- **GIVEN** the form is displayed
- **WHEN** the user clicks "Login with Facebook" or "Login with Google"
- **THEN** the form does not navigate

### Requirement: Card shadow and styling
The login card SHALL have a white background with a subtle drop shadow.

#### Scenario: Card styling
- **GIVEN** the app has loaded
- **WHEN** the user views the login card
- **THEN** the card has a white background and visible shadow

### Requirement: Footer links to Component Dock
The footer SHALL display a "More templates at Component Dock" link.

#### Scenario: Footer link
- **GIVEN** the page is displayed
- **WHEN** the user scrolls to the footer
- **THEN** a "Component Dock" link is visible
- **AND** the link points to https://www.componentdock.com/

## Verification checklist

- [ ] Split-screen layout renders (image left, card right)
- [ ] Responsive: stacks vertically below 768px
- [ ] Heading "LOGIN TO PASSGUARD" is uppercase and visible
- [ ] Username field accepts input, shows placeholder
- [ ] Password field accepts input, shows placeholder
- [ ] "Remember me" checkbox is checked by default, toggles
- [ ] "Forgot Password" link is visible, right-aligned
- [ ] "Log In" button is orange, pill-shaped, prevents navigation
- [ ] "or" divider is visible between primary and social buttons
- [ ] "Login with Facebook" button is blue, prevents navigation
- [ ] "Login with Google" button is red, prevents navigation
- [ ] Card has white bg + subtle shadow
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
