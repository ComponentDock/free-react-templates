# Template: LoginGlimmer (Login Form)

## Purpose

LoginGlimmer is a clean, minimalist login form template that recreates ColorLib Login Form V19 (preview: https://colorlib.com/wp/template/login-form-v19/; live preview unreachable — spec derived from screenshot). It provides a centered card layout with a login form (email, password) on a light blue-gray background, with forgot password and sign-up links. Fully responsive down to mobile.

**Source:** ColorLib Login Form V19
**Preview URL:** https://preview.colorlib.com/theme/login-form-v19/ (unreachable — screenshot used as reference)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v19.jpg

## Design tokens

- **Page background:** Light blue-gray `#e8f4f8` (solid, full-screen)
- **Card background:** White `#ffffff`
- **Card border/shadow:** Very subtle shadow or no visible border
- **Card border radius:** ~4px rounded corners
- **Button background (primary):** Blue `#5b7def` (medium blue, full-width)
- **Button text:** White `#ffffff`
- **Button border radius:** ~4px
- **Button padding:** ~12px vertical
- **Input border:** Light gray `#d1d5db`
- **Input background:** White `#ffffff`
- **Input placeholder text:** Light gray `#9ca3af`
- **Heading text:** Dark gray `#374151`
- **Body text:** Medium gray `#6b7280`
- **Link text:** Blue `#5b7def` (matches button)
- **Font family:** System sans-serif or Inter/Roboto (clean, modern)
- **Font weight:** Heading ~500–600, body ~400
- **Link underline:** None by default (hover underline optional)

## Requirements

### Requirement: Login form renders all fields and controls

Users SHALL see a login form with email input, password input, sign-in button, forgot password link, and create account link.

#### Scenario: Form renders with all elements

- **WHEN** the page loads
- **THEN** the heading "Account Login" is visible
- **AND** an email input is visible
- **AND** a password input is visible
- **AND** a "SIGN IN" button is visible
- **AND** a "Forgot Username / Password?" link is visible
- **AND** a "Create an account? Sign up" link is visible

### Requirement: Form is centered on page

The login form SHALL be displayed as a centered card on the viewport.

#### Scenario: Card is centered

- **WHEN** the page loads
- **THEN** the form card is horizontally centered
- **AND** the form card is vertically centered (or near-center on the page)

### Requirement: Validation errors on empty submit

Users SHALL see validation errors when submitting the form with empty fields.

#### Scenario: Empty submit shows errors

- **WHEN** the user clicks "SIGN IN" without filling any fields
- **THEN** an email validation error is shown
- **AND** a password validation error is shown

### Requirement: Valid submission clears errors

Users SHALL not see validation errors when submitting with valid data.

#### Scenario: Valid submit

- **WHEN** the user enters a valid email and password
- **AND** the user clicks "SIGN IN"
- **THEN** no validation errors are shown

### Requirement: Responsive layout

The login form SHALL be fully responsive down to mobile viewports.

#### Scenario: Mobile viewport

- **WHEN** the viewport is 375px wide
- **THEN** the form card is visible and usable
- **AND** all form elements are full-width within the card

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible
- **AND** it links to https://www.componentdock.com/

## Verification checklist

- [ ] Form renders email input, password input, SIGN IN button, forgot link, sign-up link
- [ ] Card is centered on page with light blue-gray background
- [ ] Button is full-width, blue, white text
- [ ] Inputs have light gray borders and placeholders
- [ ] Validation errors show on empty submit
- [ ] No errors on valid submit
- [ ] Responsive on mobile (375px)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Uses placeholder images via picsum.photos
- [ ] Google fonts via <link> in index.html
- [ ] Icons from lucide-react (if needed)
