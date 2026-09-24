# Template: AccessGate (Login Form)

## Purpose

AccessGate is a single-page LOGIN FORM in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Login Form V6" free
template (source: https://colorlib.com/wp/template/login-form-v6/, preview:
https://preview.colorlib.com/theme/login-form-v6/), built under a DIFFERENT
name (**AccessGate**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a single-page login form with a glassmorphism-style card
centered over a full-screen background image. The card has a semi-transparent
backdrop-blur effect with a rounded border. The form contains two inputs
(email/phone + password), a "Login" button, "Remember me" checkbox, "Forgot
Password?" link, and "Create new account" link. Typography uses Roboto
Condensed. The aesthetic is clean, minimal, and modern with transparent
UI elements over a photographic background.

## Requirements

### Requirement: Full-page background image

The page body SHALL display a full-screen background image centered and covering the viewport.

#### Scenario: Background renders

- **WHEN** the user navigates to AccessGate
- **THEN** the page body SHALL have a background image covering the viewport (min-height: 100vh)

### Requirement: Glassmorphism card renders centered

A frosted-glass card SHALL be centered on the page with a semi-transparent backdrop blur effect and rounded border.

#### Scenario: Card renders

- **WHEN** the user navigates to AccessGate
- **THEN** a card with backdrop-filter blur SHALL be visible centered on the page
- **AND** the card SHALL have a rounded border (border-radius: 20px)

### Requirement: Login heading visible

A heading "Login" SHALL be visible inside the card.

#### Scenario: Heading renders

- **WHEN** the user navigates to AccessGate
- **THEN** a heading "Login" SHALL be visible inside the card

### Requirement: Email/phone input renders

An input field for email or phone number SHALL be visible with appropriate placeholder text.

#### Scenario: Email input renders

- **WHEN** the user navigates to AccessGate
- **THEN** a text input with placeholder "Email address or phone number" SHALL be visible
- **AND** the input SHALL accept text input

### Requirement: Password input renders

A password input SHALL be visible with masked characters.

#### Scenario: Password input renders

- **WHEN** the user navigates to AccessGate
- **THEN** a password input with placeholder "Password" SHALL be visible
- **AND** the input SHALL mask typed characters

### Requirement: Login button renders and is clickable

A "Login" button SHALL be visible and clickable as a form submit button.

#### Scenario: Button renders

- **WHEN** the user navigates to AccessGate
- **THEN** a button labeled "Login" SHALL be visible
- **AND** clicking the button SHALL submit the form without page reload

### Requirement: Remember me checkbox renders

A checkbox labeled "Remember me" SHALL be visible and toggleable.

#### Scenario: Checkbox renders unchecked

- **WHEN** the user navigates to AccessGate
- **THEN** a checkbox labeled "Remember me" SHALL be visible
- **AND** the checkbox SHALL be unchecked by default

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox SHALL toggle its checked state

### Requirement: Forgot Password link renders

A link labeled "Forgot Password?" SHALL be visible.

#### Scenario: Link renders

- **WHEN** the user navigates to AccessGate
- **THEN** a link labeled "Forgot Password?" SHALL be visible
- **AND** the link SHALL point to "#forgot"

### Requirement: Create new account link renders

A link labeled "Create new account" SHALL be visible.

#### Scenario: Link renders

- **WHEN** the user navigates to AccessGate
- **THEN** a link labeled "Create new account" SHALL be visible
- **AND** the link SHALL point to "#register"

### Requirement: Responsive layout on mobile

The card SHALL shrink to fit the viewport width on mobile devices.

#### Scenario: Responsive on 375px

- **WHEN** the user resizes the viewport to 375px width
- **THEN** the card SHALL fit within the viewport width
- **AND** all inputs and button SHALL remain usable

### Requirement: Accessibility - semantic elements

The form SHALL use semantic HTML elements with accessible labels.

#### Scenario: Semantic elements

- **WHEN** the user navigates to AccessGate
- **THEN** the form SHALL use semantic HTML form elements
- **AND** inputs SHALL have placeholders for context
- **AND** the button SHALL have an accessible name

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to Component Dock.

#### Scenario: Footer link

- **WHEN** the user navigates to AccessGate
- **THEN** the footer SHALL contain a link to "https://www.componentdock.com/"
- **AND** the link text SHALL reference "Component Dock"
