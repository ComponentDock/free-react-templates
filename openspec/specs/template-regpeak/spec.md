# Template: Regpeak (Registration Form — Split-Screen)

## Purpose

Recreation of **Colorlib Reg Form V32** — a split-screen registration form with a dark-to-cyan gradient background, left-side image panel, and a centered white card containing the form.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-32/
- **Live preview:** https://colorlib.com/etc/regform/colorlib-regform-32/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-32.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from CSS)

- **Page background:** `linear-gradient(136deg, #000046 0%, #1cb5e0 100%)` — dark navy to bright cyan
- **Card background:** `#ffffff` (white)
- **Card border-radius:** `8px`
- **Card max-width:** `968px`
- **Card vertical margin:** `180px auto` (centered vertically with padding)
- **Card box-shadow:** default (no explicit shadow on card)
- **Card layout:** `display: flex` — image panel left, form right
- **Font family:** `"Nunito", sans-serif` — weights 400 (Regular) and 700 (Bold)
- **Form heading:** `#333333`, 35px, centered, bold
- **Form label / heading color:** `#333333`
- **Input text color:** `#333333`
- **Input font-size:** `16px`, weight 700
- **Input border:** `2px solid transparent` with `border-bottom: 2px solid #e5e5e5`
- **Input focus border-bottom:** `2px solid #fe892a` (orange accent)
- **Input placeholder color:** `#666666`
- **Register button background:** `#fe892a` (orange)
- **Register button hover:** `#e37b27` (darker orange)
- **Register button text:** `#ffffff`, 18px, bold, uppercase
- **Register button border-radius:** `6px`
- **Register button width:** `160px`
- **Register button box-shadow:** `0px 3px 10px 0px rgba(0, 0, 0, 0.15)`
- **Image panel border-radius:** left side gets 8px top-left and bottom-left; on mobile stacks to top with 8px top-right

## Mobile responsive behavior (≤ 991px)

- Card stacks vertically (flex-direction: column)
- Image panel goes to top, spans full width
- Image gets 8px top-right border-radius (bottom-left removed)
- Form padding reduces to 30px 20px
- Input width adjusts to 96% (991px), 94% (767px), 89% (575px)

## Requirements

### Requirement: Full-viewport gradient background

The page SHALL render a full-height gradient background from dark navy (#000046) to bright cyan (#1cb5e0) at 136 degrees, centering its content both horizontally and vertically.

#### Scenario: Gradient background renders

- **GIVEN** the page is rendered
- **WHEN** the background is displayed
- **THEN** it SHALL occupy the full viewport height
- **AND** it SHALL have a linear gradient from #000046 to #1cb5e0 at 136deg
- **AND** its content SHALL be centered horizontally and vertically

### Requirement: Registration card (split-screen)

The page SHALL render a white card with 8px border-radius, max-width 968px, displayed as a horizontal flex container with an image panel on the left and the form on the right.

#### Scenario: Card layout on desktop

- **GIVEN** the viewport is wider than 991px
- **WHEN** the card is displayed
- **THEN** it SHALL be a flex row with the image panel on the left
- **AND** it SHALL have a white (#fff) background
- **AND** it SHALL have 8px border-radius

#### Scenario: Card stacks on mobile

- **GIVEN** the viewport is 991px or narrower
- **WHEN** the card is displayed
- **THEN** it SHALL stack vertically (flex-direction: column)
- **AND** the image panel SHALL appear on top spanning full width

### Requirement: Image panel

The left side of the card SHALL display a decorative image placeholder with matching border-radius (top-left and bottom-left on desktop; top-left and top-right on mobile).

#### Scenario: Desktop image panel

- **GIVEN** the viewport is wider than 991px
- **WHEN** the image panel is displayed
- **THEN** it SHALL have 8px border-radius on top-left and bottom-left

#### Scenario: Mobile image panel

- **GIVEN** the viewport is 991px or narrower
- **WHEN** the image panel is displayed
- **THEN** it SHALL span full width
- **AND** it SHALL have 8px border-radius on top-left and top-right

### Requirement: Form heading

The form section SHALL display a centered heading "Register Form" in bold Nunito font, color #333, size 35px.

#### Scenario: Heading text and styling

- **GIVEN** the form section is rendered
- **WHEN** the heading is displayed
- **THEN** it SHALL show the text "Register Form"
- **AND** it SHALL be centered
- **AND** it SHALL use Nunito Bold font at 35px
- **AND** it SHALL have color #333

### Requirement: Form fields

The form SHALL contain four input fields: "Your Name" (text), "Email Address" (email), "Password" (password), and "Confirm Password" (password), each with underline-style bottom borders.

#### Scenario: Four fields rendered

- **GIVEN** the form is rendered
- **WHEN** the fields are displayed
- **THEN** there SHALL be a text input with placeholder "Your Name"
- **AND** there SHALL be an email input with placeholder "Email Address"
- **AND** there SHALL be a password input with placeholder "Password"
- **AND** there SHALL be a password input with placeholder "Confirm Password"

#### Scenario: Underline-style input borders

- **GIVEN** the form fields are rendered
- **WHEN** an input is in its default state
- **THEN** it SHALL have a bottom border of 2px solid #e5e5e5
- **AND** it SHALL have transparent borders on all other sides

#### Scenario: Focus accent on inputs

- **GIVEN** a user focuses on a form field
- **WHEN** the field is focused
- **THEN** the bottom border color SHALL change to #fe892a (orange accent)

### Requirement: Register button

The form SHALL contain a centered "Register" submit button with an orange (#fe892a) background, white text, 6px border-radius, and a subtle box-shadow.

#### Scenario: Button appearance

- **GIVEN** the form is rendered
- **WHEN** the Register button is displayed
- **THEN** it SHALL have a background color of #fe892a
- **AND** it SHALL have white (#fff) text
- **AND** it SHALL have 6px border-radius
- **AND** it SHALL be 160px wide
- **AND** it SHALL have font-size 18px, bold, uppercase

#### Scenario: Button hover state

- **GIVEN** a user hovers over the Register button
- **WHEN** the button is hovered
- **THEN** the background color SHALL change to #e37b27 (darker orange)

### Requirement: Footer attribution

The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer is present

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL contain a link to https://www.componentdock.com/
- **AND** the link text SHALL include "Component Dock"

## Verification checklist

- [ ] Gradient background renders correctly (136deg, #000046 → #1cb5e0)
- [ ] Card is centered both horizontally and vertically
- [ ] Image panel on left (desktop) / top (mobile) with correct border-radius
- [ ] Form heading "Register Form" centered, Nunito Bold, #333, 35px
- [ ] Four inputs rendered with correct placeholders
- [ ] Input bottom border: 2px #e5e5e5, focus: 2px #fe892a
- [ ] Register button: #fe892a, 160px wide, 6px radius, white text
- [ ] Button hover: #e37b27
- [ ] Mobile responsive stacking at ≤991px
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] Tests pass with 100% coverage
