# Spec: Loginaura — Personalized Avatar Login

## Purpose

Recreation of ColorLib Login Form V12 as Loginaura — a full-viewport centered login with a circular avatar, blue gradient background (#005bea → #00c6fb) with photo overlay, username/password inputs with left icons, dark Login button with gradient hover reveal, and "Create new account" CTA.

- Source: https://colorlib.com/wp/template/login-form-v12/
- Preview: https://colorlib.com/etc/lf/Login_v12/index.html
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token               | Value      | Usage                          |
| ------------------- | ---------- | ------------------------------ |
| --color-page-start  | #005bea    | Gradient start — blue          |
| --color-page-end    | #00c6fb    | Gradient end — cyan            |
| --color-btn         | #333333    | Button background — dark       |
| --color-btn-hover   | #005bea    | Button hover — gradient reveal |
| --color-avatar-ring | #ffffff    | Avatar border — white ring     |
| --color-heading     | #ffffff    | Heading text — white           |
| --color-body        | #cccccc    | Links, body text               |
| --color-input       | #ffffff    | Input background — white       |
| --color-input-text  | #333333    | Input text — dark              |
| --color-placeholder | #999999    | Placeholder text               |
| --color-icon        | #999999    | Left icon in inputs            |
| --color-icon-focus  | #00c6fb    | Icon color on focus            |
| --font-body         | Montserrat | Body text via Google Fonts     |

## Requirements

### Requirement: Full-viewport gradient background

The template SHALL render a full-viewport page with a vertical linear gradient from blue (#005bea) to cyan (#00c6fb), with a semi-transparent photo overlay.

#### Scenario: Gradient background visible

- **WHEN** the user loads the page
- **THEN** a blue-to-cyan gradient covers the full viewport

#### Scenario: Background photo overlay visible

- **WHEN** the user loads the page
- **THEN** a semi-transparent photo overlay is displayed on top of the gradient

### Requirement: Circular avatar

The template SHALL display a circular avatar image (120×120px) centered above the login form, with a white border ring.

#### Scenario: Avatar image present

- **WHEN** the user loads the page
- **THEN** a circular avatar image is displayed

### Requirement: Username display

The template SHALL display a white "John Doe" heading below the avatar in Montserrat ExtraBold font.

#### Scenario: Heading visible

- **WHEN** the user loads the page
- **THEN** the heading "John Doe" is rendered in white

### Requirement: Login form with rounded inputs

The template SHALL provide username and password inputs with rounded pill shape, white background, left-aligned icons (User, Lock), and placeholder text.

#### Scenario: Username field

- **WHEN** the user views the form
- **THEN** a username input is present with a User icon on the left

#### Scenario: Password field

- **WHEN** the user views the form
- **THEN** a password input is present with a Lock icon on the left

#### Scenario: Input validation

- **WHEN** the user submits the form with empty fields
- **THEN** the default form validation prevents submission

### Requirement: Login button with gradient hover

The template SHALL provide a dark (#333333) "Login" button that reveals a blue-to-cyan gradient on hover.

#### Scenario: Button visible

- **WHEN** the user views the form
- **THEN** a "Login" button is displayed

#### Scenario: Button hover effect

- **WHEN** the user hovers over the Login button
- **THEN** a blue-to-cyan gradient is revealed behind the button text

### Requirement: Forgot password link

The template SHALL display a "Forgot Username / Password?" link below the button.

#### Scenario: Link visible

- **WHEN** the user views the form
- **THEN** a "Forgot Username / Password?" link is displayed

### Requirement: Create new account link

The template SHALL display a "Create new account →" link below the forgot password link.

#### Scenario: Link visible

- **WHEN** the user views the form
- **THEN** a "Create new account" link with an arrow is displayed

### Requirement: Component Dock footer

The template SHALL display a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer visible

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a "More templates at Component Dock" link pointing to componentdock.com is displayed
