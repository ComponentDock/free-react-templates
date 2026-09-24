# Template: Loginbreeze (Login Form V18)

## Purpose

Recreation of ColorLib **Login Form V18** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v18`
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v18/ (404 — using screenshot)
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v18/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v18.jpg
- **New name:** `loginbreeze` (apps/loginbreeze, package @free-react-templates/loginbreeze)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from screenshot — preview unreachable)

### Colors

| Token               | Hex / Value            | Usage                                              |
| ------------------- | ---------------------- | -------------------------------------------------- |
| Page background     | `#f0f0f0`              | Full viewport light gray background                |
| Form background     | `#ffffff`              | Login form card white                              |
| Brand blue          | `#5b6abf`              | LOGIN button background, checkbox checked state    |
| Button hover        | `#4a5aa8`              | Login button hover state (darker blue)             |
| Heading text        | `#333333`              | "Login to continue" heading                        |
| Label text          | `#999999`              | Field labels (Email, Password)                     |
| Input text          | `#333333`              | Input field text color                             |
| Placeholder         | `#cccccc`              | Input placeholder text                             |
| Link text           | `#999999`              | "Forgot password?" link                            |
| Link hover          | `#5b6abf`              | Link hover color (matches brand blue)              |
| Input border        | `#dddddd`              | Input field border                                 |
| Social icon bg      | `#3b5998`              | Facebook icon circle background (Facebook blue)    |
| Social icon Twitter | `#1da1f2`              | Twitter icon circle background (Twitter blue)      |
| Divider text        | `#999999`              | "or sign up using" text                            |

### Fonts

| Token      | Font family          | Usage                                       |
| ---------- | -------------------- | ------------------------------------------- |
| Body       | Poppins Regular      | Body text, inputs, labels, links            |
| Heading    | Poppins Medium       | "Login to continue" heading (~28px)         |
| Button     | Poppins SemiBold     | "LOGIN" button text (uppercase, ~14px)      |
| Labels     | Poppins Regular      | Field labels (14px, #999999)                |
| Placeholder| Poppins Regular      | Input placeholder text (14px, #cccccc)      |
| Link       | Poppins Regular      | "Forgot password?" (13px, #999999)          |
| Social     | Poppins Regular      | "or sign up using" (13px, #999999)          |

### Layout & Shapes

- Full viewport height, split layout: left side decorative image, right side form
- Left panel: ~55% width, background image (office/desk scene with monstera leaves), gray overlay
- Right panel: ~45% width, white background, vertically centered form content
- Form inputs: full width, height ~50px, border 1px solid #dddddd, border-radius 4px, padding-left 15px
- Email input: has a small hand/click icon on the right side
- LOGIN button: full width, height ~50px, border-radius 25px (pill shape), background #5b6abf, white uppercase text, letter-spacing ~1px
- "Remember me" checkbox (blue/indigo when checked) on left, "Forgot password?" link on right — same row
- "or sign up using" divider text below button
- Social icons: circular buttons, Facebook (#3b5998) and Twitter (#1da1f2), ~40px diameter
- Responsive: below ~768px, left panel hides or stacks above the form

## Requirements

### Requirement: Renders split layout with image panel and form panel

The login page SHALL display a split layout with a decorative image panel on the left and a login form on the right.

#### Scenario: Split layout is visible on desktop

- **WHEN** the page loads on a viewport wider than 768px
- **THEN** a left image panel (~55% width) and a right form panel (~45% width) are displayed side by side

#### Scenario: Responsive stacking on mobile

- **WHEN** the page loads on a viewport narrower than 768px
- **THEN** the image panel and form panel stack vertically

### Requirement: Renders login form heading

The form panel SHALL display a "Login to continue" heading centered above the form fields.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the text "Login to continue" is displayed centered above the email input

### Requirement: Renders email input field

The login form SHALL display a labeled email text input with placeholder text.

#### Scenario: Email label is visible

- **WHEN** the page loads
- **THEN** a label "Email" is displayed above or beside the email field

#### Scenario: Email placeholder shows example

- **WHEN** the email field is empty
- **THEN** the placeholder "johndoe@example.com" is shown in light gray

#### Scenario: Email input accepts text

- **WHEN** the user types into the email field
- **THEN** the typed text appears in the field

### Requirement: Renders password input field

The login form SHALL display a labeled password input field.

#### Scenario: Password label is visible

- **WHEN** the page loads
- **THEN** a label "Password" is displayed above or beside the password field

#### Scenario: Password input masks characters

- **WHEN** the user types into the password field
- **THEN** the characters are masked (shown as dots or asterisks)

### Requirement: Renders remember me checkbox

The login form SHALL display a "Remember me" checkbox below the password field.

#### Scenario: Checkbox is visible and unchecked by default

- **WHEN** the page loads
- **THEN** the "Remember me" checkbox is displayed and unchecked

#### Scenario: Checkbox can be toggled

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox toggles between checked and unchecked states

### Requirement: Renders forgot password link

The login form SHALL display a "Forgot password?" link aligned to the right on the same row as the remember me checkbox.

#### Scenario: Forgot password link is visible

- **WHEN** the page loads
- **THEN** "Forgot password?" is displayed to the right of the remember me checkbox

### Requirement: Renders login button

The login form SHALL display a full-width rounded "LOGIN" button.

#### Scenario: Button is visible with correct label

- **WHEN** the page loads
- **THEN** a button labeled "LOGIN" is displayed full-width with pill-shaped rounded corners

#### Scenario: Button has brand color

- **WHEN** the page loads
- **THEN** the login button has a blue (#5b6abf) background with white text

#### Scenario: Button hover effect

- **WHEN** the user hovers over the login button
- **THEN** the button background darkens slightly

### Requirement: Renders social login section

The login form SHALL display an "or sign up using" text followed by social login icons (Facebook and Twitter).

#### Scenario: Social login text is visible

- **WHEN** the page loads
- **THEN** the text "or sign up using" is displayed below the login button

#### Scenario: Facebook icon is visible

- **WHEN** the page loads
- **THEN** a circular Facebook icon button (blue #3b5998 background) is displayed

#### Scenario: Twitter icon is visible

- **WHEN** the page loads
- **THEN** a circular Twitter icon button (blue #1da1f2 background) is displayed

### Requirement: Footer links to Component Dock

The login page SHALL display a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer is visible

- **WHEN** the page loads
- **THEN** a footer section with a "Component Dock" link is present

## Verification checklist

- [ ] Split layout renders correctly (image left, form right)
- [ ] Responsive: stacks on mobile (<768px)
- [ ] "Login to continue" heading centered
- [ ] Email input with placeholder "johndoe@example.com"
- [ ] Password input with masked characters
- [ ] "Remember me" checkbox toggles
- [ ] "Forgot password?" link visible and right-aligned
- [ ] LOGIN button full-width, pill-shaped, brand blue
- [ ] Button hover darkens
- [ ] "or sign up using" text visible
- [ ] Facebook and Twitter circular icon buttons visible
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Tests pass at 100% coverage
- [ ] No new dependencies added
