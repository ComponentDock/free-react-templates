# Spec: Authgate — Split-Screen Login Form

## Purpose

Recreation of ColorLib Login Form V16 as Authgate — a split-screen card login form centered on a light gray background. Left panel (white) holds the sign-in form with underline-style inputs; right panel (dusty mauve) holds the submit button, remember-me/forgot-password options, and social login icons.

- Source: https://colorlib.com/wp/template/login-form-v16/
- Preview: https://preview.colorlib.com/theme/login-form-v16/ (404 at time of prep — design captured from screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v16.jpg
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token                | Value        | Usage                                   |
| -------------------- | ------------ | --------------------------------------- |
| --color-page-bg      | #f5f5f5      | Page background — light gray            |
| --color-card-left    | #ffffff      | Left panel background — white           |
| --color-card-right   | #9b6b8a      | Right panel background — dusty mauve    |
| --color-btn          | #2d3436      | Submit button background — dark navy    |
| --color-btn-text     | #ffffff      | Submit button text — white              |
| --color-heading      | #333333      | "Sign In" heading — dark                |
| --color-label        | #666666      | Input labels — medium gray              |
| --color-input-text   | #333333      | Input text — dark                       |
| --color-placeholder  | #aaaaaa      | Placeholder text — light gray           |
| --color-divider      | #ffffff      | "Or Sign In With" text — white          |
| --color-social-icon  | #ffffff      | Social icon circle fill — white         |
| --color-social-text  | #9b6b8a      | Social icon letter color — mauve        |
| --color-checkbox     | #2196F3      | Remember Me checkbox — blue             |
| --color-link         | #ffffff      | Forgot Password link — white            |
| --font-body          | Poppins      | Body text via Google Fonts              |

## Requirements

### Requirement: Centered split-screen card layout

The template SHALL render a full-viewport page with a light gray (#f5f5f5) background and a centered card (max-width ~700px) split vertically into two equal-width panels.

#### Scenario: Card centered on page

- **WHEN** the user loads the page
- **THEN** a card is centered horizontally and vertically on a light gray background

#### Scenario: Left panel is white

- **WHEN** the user views the card
- **THEN** the left panel has a white (#ffffff) background

#### Scenario: Right panel is dusty mauve

- **WHEN** the user views the card
- **THEN** the right panel has a dusty mauve (#9b6b8a) background

### Requirement: Sign In heading

The template SHALL display a bold "Sign In" heading at the top of the left panel in dark text (#333333).

#### Scenario: Heading visible

- **WHEN** the user loads the page
- **THEN** a "Sign In" heading is rendered at the top of the left panel

### Requirement: Username input with underline style

The template SHALL provide a username input with a label ("Username") above it and an underline-style bottom border (no full border box), using placeholder text "Username".

#### Scenario: Username field present

- **WHEN** the user views the form
- **THEN** a username input is present with a label and placeholder

#### Scenario: Username input accepts text

- **WHEN** the user types in the username field
- **THEN** the input accepts and displays the typed text

### Requirement: Password input with toggle

The template SHALL provide a password input with a label ("Password") above it, an underline-style bottom border, placeholder text "Password", and an eye icon toggle to show/hide the password.

#### Scenario: Password field present

- **WHEN** the user views the form
- **THEN** a password input is present with a label and placeholder

#### Scenario: Password visibility toggle

- **WHEN** the user clicks the eye icon
- **THEN** the password field switches between masked and visible text

### Requirement: Submit button on right panel

The template SHALL display a full-width "Sign me in now" button on the right panel with dark navy (#2d3436) background, white text, and rounded corners.

#### Scenario: Button visible

- **WHEN** the user views the right panel
- **THEN** a "Sign me in now" button is rendered at the top of the right panel

#### Scenario: Button click submits form

- **WHEN** the user clicks the submit button
- **THEN** the form submission is triggered

### Requirement: Remember Me checkbox

The template SHALL display a "Remember Me" checkbox on the right panel, positioned below the submit button, checked by default.

#### Scenario: Checkbox visible and checked

- **WHEN** the user views the right panel
- **THEN** a "Remember Me" checkbox is visible and checked by default

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the checkbox
- **THEN** the checkbox state toggles

### Requirement: Forgot Password link

The template SHALL display a "Forgot Password" link on the right panel, positioned next to the Remember Me checkbox, in white text.

#### Scenario: Link visible

- **WHEN** the user views the right panel
- **THEN** a "Forgot Password" link is rendered in white

### Requirement: Social login divider

The template SHALL display a "— Or Sign In With —" divider text on the right panel below the remember-me row, in white text with em-dash decorations.

#### Scenario: Divider visible

- **WHEN** the user views the right panel
- **THEN** a divider text "— Or Sign In With —" is rendered in white

### Requirement: Social login buttons

The template SHALL display two circular social login buttons (Facebook and Twitter) on the right panel below the divider, as white circles with colored icons/letters.

#### Scenario: Facebook button

- **WHEN** the user views the social login area
- **THEN** a circular white button with an "f" (Facebook) is rendered

#### Scenario: Twitter button

- **WHEN** the user views the social login area
- **THEN** a circular white button with a bird icon (Twitter) is rendered

### Requirement: Component Dock footer

The template SHALL include a footer linking to https://www.componentdock.com/ (branded "Component Dock").

#### Scenario: Footer link present

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer with a link to Component Dock is visible

## Verification Checklist

- [ ] Page renders with light gray background and centered card
- [ ] Left panel is white with "Sign In" heading
- [ ] Username input with label and underline border
- [ ] Password input with label, underline border, and eye toggle
- [ ] Right panel is dusty mauve (#9b6b8a)
- [ ] "Sign me in now" button in dark navy, full width
- [ ] "Remember Me" checkbox (checked by default)
- [ ] "Forgot Password" link in white
- [ ] "— Or Sign In With —" divider in white
- [ ] Facebook and Twitter circular social buttons
- [ ] Component Dock footer link
- [ ] Responsive: stacks vertically on mobile
