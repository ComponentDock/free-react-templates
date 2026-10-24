# Template: SignFlux (Login Form)
<!-- prep-status: shipped-as=keycard -->
> **SHIPPED-UNDER** — the ColorLib `creative-login-form` design this prep describes already
> ships as `apps/keycard` (<https://keycard.free.componentdock.com>).
> Do not scaffold `apps/signflux`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-keycard/spec.md`.

## Purpose

Recreation of ColorLib "Creative Login Form" — a minimal, centered login form page with a green gradient background, white card, and simple username/password inputs.

- **Source:** https://colorlib.com/wp/template/creative-login-form/
- **Preview:** https://preview.colorlib.com/theme/creative-login-form/ (unreachable at prep time; design based on screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/creative-html5-css3-login-form.png
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Source mapping

| Field         | Value                                                                       |
| ------------- | --------------------------------------------------------------------------- |
| ColorLib slug | `creative-login-form`                                                       |
| Preview URL   | `https://preview.colorlib.com/theme/creative-login-form/`                   |
| Screenshot    | `https://colorlib.com/wp/wp-content/uploads/sites/2/creative-html5-css3-login-form.png` |

## Design tokens (extracted from screenshot)

### Fonts

- **Primary / body:** `"Poppins", sans-serif` (standard ColorLib login form font)
- Input placeholder text: light gray, regular weight

### Colors

| Token               | Value             | Usage                                                        |
| ------------------- | ----------------- | ------------------------------------------------------------ |
| Page background     | `#77CC6D`         | Full-page solid green background                             |
| Card background     | `#ffffff`         | White login form card                                        |
| Card shadow         | `0 4px 24px rgba(0,0,0,0.08)` | Subtle box-shadow on form card                    |
| Input background    | `#f7f7f7`         | Light gray input fields                                      |
| Input text          | `#94a3b8`         | Placeholder text color (gray)                                |
| Login button        | `#77CC6D`         | Solid green button, full-width                               |
| Button text         | `#ffffff`         | White text on login button                                   |
| Link text           | `#77CC6D`         | "Create an account" link color                               |
| Body text           | `#64748b`         | "Not registered?" text color                                 |

### Layout

- Page: full viewport height, flexbox centered (both axes)
- Card: ~480px max-width, centered, white background, generous padding (~40px)
- Inputs: full-width inside card, light gray background, no visible border, rounded corners (~4px)
- Button: full-width inside card, green background, white uppercase text, no border-radius (sharp corners)
- Responsive: scales down on mobile; card width adjusts via max-width + padding

### Button styling

- Full-width green (`#77CC6D`) background
- White uppercase text, bold/medium weight, letter-spacing
- No border-radius (sharp/square corners)
- Hover: slightly darker green (or opacity change)

## Structure (section order)

1. **Full-page background** — Solid green (#77CC6D) covering the entire viewport
2. **Login card** — Centered white card containing:
   - **Username input** — Light gray background, placeholder "username"
   - **Password input** — Light gray background, placeholder "password"
   - **Login button** — Full-width green button with "LOGIN" text (uppercase)
   - **Registration link** — "Not registered? Create an account" text

## Requirements

### Feature: SignFlux template behaviour

#### Scenario: Page renders with centered login form

- **GIVEN** the user loads the SignFlux page
- **THEN** a login form card is displayed centered on the page
- **AND** the page background is solid green

#### Scenario: Login form contains username field

- **GIVEN** the login form is visible
- **THEN** a username input field is present
- **AND** the username input has a placeholder "username"

#### Scenario: Login form contains password field

- **GIVEN** the login form is visible
- **THEN** a password input field is present
- **AND** the password input has a placeholder "password"

#### Scenario: Login button is displayed

- **GIVEN** the login form is visible
- **THEN** a "LOGIN" button is displayed below the inputs
- **AND** the button is full-width with green background
- **AND** the button text is white and uppercase

#### Scenario: Registration link is present

- **GIVEN** the login form is visible
- **THEN** the text "Not registered? Create an account" is shown below the login button
- **AND** "Create an account" is a green clickable link

#### Scenario: Form submission with empty fields

- **GIVEN** the login form is visible
- **WHEN** the user clicks the LOGIN button without entering any data
- **THEN** the form should not navigate away
- **AND** the form should remain displayed

#### Scenario: Form submission with credentials

- **GIVEN** the login form is visible
- **WHEN** the user enters a username and password
- **AND** clicks the LOGIN button
- **THEN** the form attempts to submit the credentials

#### Scenario: Responsive layout on mobile

- **GIVEN** the user loads the page on a mobile viewport (375px)
- **THEN** the login form card is centered and scales to fit the viewport
- **AND** the inputs and button remain full-width within the card
- **AND** the card has appropriate padding for mobile

#### Scenario: Button hover effect

- **GIVEN** the login form is visible
- **WHEN** the user hovers over the LOGIN button
- **THEN** the button background changes to a slightly darker green

## Verification checklist

- [ ] Page renders with solid green background covering full viewport
- [ ] Login card is centered vertically and horizontally
- [ ] Username input is present with placeholder "username"
- [ ] Password input is present with placeholder "password"
- [ ] LOGIN button is full-width, green, white uppercase text
- [ ] "Not registered? Create an account" link is present below button
- [ ] "Create an account" link is green and clickable
- [ ] Card has white background with subtle shadow
- [ ] Inputs have light gray background
- [ ] Responsive on mobile viewports
- [ ] Button hover effect works (darker green)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
