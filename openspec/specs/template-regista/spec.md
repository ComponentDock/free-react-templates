# Template: Regista (Registration Form)

## Purpose

Regista is a single-page registration form template — a full-viewport signup
experience. It is an original React recreation of the ColorLib free
"Colorlib Reg Form V9" template
(preview: https://colorlib.com/etc/regform/colorlib-regform-9/ — email signup
form for special discounts, coupon codes, gaming industry), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand gold `#b18757` (form panel overlay at 75% opacity: `rgba(177,135,77,0.75)`)
- White text on dark/gold backgrounds
- Typeface: Poppins (Google Fonts 400/600/700)
- Pill-shaped buttons with box-shadow (`0px 15px 9.9px 0.1px rgba(0,0,0,0.15)`)
- Full-page dark background image (cinematic cityscape theme)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Regista lives in `apps/regista` and uses shared components from `packages/ui`
(Button, cn).

## Design tokens

| Token         | Value                                                    | Use                                                         |
| ------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| Page bg       | Dark cinematic image (full viewport, `background-size: cover`) | Replace with a picsum.photos seeded dark placeholder image  |
| Form panel    | `rgba(177,135,77,0.75)` (#b18757 at 75% opacity)        | Right-aligned card covering ~half the viewport width         |
| Text          | `#fff` (white)                                           | All text — headings, body, inputs, placeholders              |
| Heading       | 36px bold Poppins, `#fff`, line-height 1.2               | "Sign up" h2                                                |
| Body          | 14px weight 600 Poppins, `#fff`, line-height 1.8         | Description paragraph                                       |
| Bold span     | `font-weight: bold`                                      | Highlighted product name in description ("Batman Beyond")    |
| Inputs        | borderless, transparent bg, 14px bold Poppins, `#fff`   | Name, Email, Password — bottom border `1px solid #ebebeb`   |
| Placeholder   | 400 weight Poppins, `#fff`                               | Input placeholder text                                      |
| Eye icon      | Float right, `#fff`, position relative to password input  | Toggle password visibility (eye/eye-off SVGs)               |
| Checkbox      | 13px 400 weight Poppins, `#fff`                          | Terms of service agreement label                             |
| Checkbox box  | 13×13px, `border: 1px solid #fff`, 2px radius            | Custom checkbox visual                                      |
| Sign Up btn   | White bg `#fff`, gold text `#b18757`, 50px height        | Pill shape (radius 25px), 130px wide, uppercase, bold, shadow |
| Sign Up hover | `#e6e6e6` bg                                             | Hover state                                                 |
| Sign In btn   | White border `2px solid #fff`, transparent bg, `#fff` text | Pill shape, 130px wide, same height as Sign Up              |
| Sign In hover | White bg, gold text `#b18757`                             | Inverts colors on hover                                     |
| Container     | 1123px max-width, centered                               | Background image container, 135px top / 115px bottom padding|
| Card overlay  | Right-floated, 562px wide                                 | `.signup-content` with the form panel                       |
| Form padding  | 54px 80px 36px 55px                                      | `.signup-form` inner spacing                                |
| Mobile ≤992px | Container becomes full-width with 15px side margin        | Card takes 100% width                                       |
| Mobile ≤480px | Buttons full-width stacked, form padding 54px 30px 36px  | Stacked button layout                                       |

## Requirements

### Requirement: Full-viewport background

The system SHALL render a full-viewport dark background image covering the
entire page. The original uses a cinematic Batman-themed cityscape; the
recreation SHALL use a dark-toned picsum.photos placeholder.

#### Scenario: Background coverage

- **GIVEN** the page is rendered
- **WHEN** the background is displayed
- **THEN** it SHALL fill the entire viewport
- **AND** it SHALL use `background-size: cover` and `background-position: center center`

### Requirement: Form container

The system SHALL render a centered container (max-width 1123px) with generous
vertical padding (135px top, 115px bottom) and a background image
(container-bg). Inside it, a right-floated signup panel occupies roughly half
the container width (562px).

#### Scenario: Container layout

- **GIVEN** the page is rendered
- **WHEN** the container is displayed
- **THEN** it SHALL be centered with max-width 1123px
- **AND** it SHALL contain a right-floated signup panel (562px)

#### Scenario: Responsive container

- **GIVEN** the viewport width is ≤992px
- **WHEN** the container is displayed
- **THEN** it SHALL take full width with 15px horizontal margin
- **AND** the signup panel SHALL take 100% width

### Requirement: Signup panel overlay

The system SHALL render the signup panel as a semi-transparent gold overlay
(`rgba(177,135,77,0.75)`) that floats to the right side of the container.

#### Scenario: Panel appearance

- **GIVEN** the page is rendered
- **WHEN** the signup panel is displayed
- **THEN** it SHALL have a semi-transparent gold background
- **AND** it SHALL float right within the container

### Requirement: Heading section

The system SHALL render an h2 "Sign up" in white 36px bold Poppins, followed
by a description paragraph.

#### Scenario: Heading content

- **GIVEN** the page is rendered
- **WHEN** the heading is displayed
- **THEN** it SHALL show "Sign up" as the primary heading
- **AND** it SHALL show a description mentioning a discount with a bold
  product name

### Requirement: Name input

The system SHALL render a text input with placeholder "Your Name", styled with
a transparent background and a thin bottom border.

#### Scenario: Name field

- **GIVEN** the page is rendered
- **WHEN** the name input is displayed
- **THEN** it SHALL have placeholder text "Your Name"
- **AND** it SHALL be a text type input
- **AND** it SHALL have a bottom border separator

### Requirement: Email input

The system SHALL render an email input with placeholder "Email".

#### Scenario: Email field

- **GIVEN** the page is rendered
- **WHEN** the email input is displayed
- **THEN** it SHALL have placeholder text "Email"
- **AND** it SHALL be an email type input

### Requirement: Password input with visibility toggle

The system SHALL render a password input with placeholder "Password" and an
eye icon that toggles password visibility.

#### Scenario: Password field

- **GIVEN** the page is rendered
- **WHEN** the password input is displayed
- **THEN** it SHALL have placeholder text "Password"
- **AND** it SHALL have `type="password"` by default
- **AND** it SHALL show an eye icon to the right

#### Scenario: Password toggle

- **GIVEN** the password field is displayed with hidden text
- **WHEN** the user clicks the eye icon
- **THEN** the input type SHALL change to "text" (visible)
- **AND** the icon SHALL change to eye-off

#### Scenario: Password hide

- **GIVEN** the password field is displayed with visible text
- **WHEN** the user clicks the eye-off icon
- **THEN** the input type SHALL change back to "password"
- **AND** the icon SHALL change back to eye

### Requirement: Terms checkbox

The system SHALL render a checkbox with label "I agree all statements in
Terms of service" where "Terms of service" is a link.

#### Scenario: Terms content

- **GIVEN** the page is rendered
- **WHEN** the terms checkbox is displayed
- **THEN** it SHALL have a checkbox input
- **AND** it SHALL show "I agree all statements in" followed by a
  "Terms of service" link

#### Scenario: Terms link

- **GIVEN** the terms checkbox is displayed
- **WHEN** the user clicks "Terms of service"
- **THEN** it SHALL navigate to the linked URL (href="#")

### Requirement: Action buttons

The system SHALL render two pill-shaped buttons side by side: "Sign up" (white
background, gold text) and "Sign in" (white border, transparent background,
white text).

#### Scenario: Sign up button

- **GIVEN** the page is rendered
- **WHEN** the action buttons are displayed
- **THEN** it SHALL show a "SIGN UP" button with white background and gold text
- **AND** it SHALL be pill-shaped (border-radius 25px)
- **AND** it SHALL have uppercase text

#### Scenario: Sign in button

- **GIVEN** the page is rendered
- **WHEN** the action buttons are displayed
- **THEN** it SHALL show a "SIGN IN" button with white border and transparent
  background
- **AND** it SHALL be pill-shaped (border-radius 25px)
- **AND** it SHALL have uppercase text

#### Scenario: Sign up hover

- **GIVEN** the sign up button is displayed
- **WHEN** the user hovers over it
- **THEN** its background SHALL change to `#e6e6e6`

#### Scenario: Sign in hover

- **GIVEN** the sign in button is displayed
- **WHEN** the user hovers over it
- **THEN** its background SHALL become white and text SHALL become gold

### Requirement: Responsive buttons (mobile)

The system SHALL stack the buttons vertically on small screens.

#### Scenario: Mobile button layout

- **GIVEN** the viewport width is ≤480px
- **WHEN** the buttons are displayed
- **THEN** they SHALL be full-width and stacked vertically
- **AND** sign up SHALL appear above sign in

### Requirement: Footer

The system SHALL render a minimal footer crediting Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to https://www.componentdock.com/
- **AND** it SHALL be branded as "Component Dock"

## Verification checklist

- [ ] Full-viewport dark background image
- [ ] Centered 1123px container with 135px/115px vertical padding
- [ ] Right-floated semi-transparent gold panel (`rgba(177,135,77,0.75)`)
- [ ] "Sign up" heading in 36px bold white Poppins
- [ ] Description paragraph with bold product name
- [ ] Name input (text, "Your Name" placeholder, bottom border)
- [ ] Email input (email, "Email" placeholder, bottom border)
- [ ] Password input (password by default, "Password" placeholder, bottom border)
- [ ] Eye toggle: click shows/hides password, icon flips
- [ ] Terms checkbox with "Terms of service" link
- [ ] Sign up button: white bg, gold text, pill shape, 130px wide, uppercase
- [ ] Sign in button: white border, transparent bg, pill shape, 130px wide, uppercase
- [ ] Hover states: sign up → grey bg, sign in → white bg/gold text
- [ ] Mobile ≤992px: container full-width, panel 100%
- [ ] Mobile ≤480px: buttons full-width stacked, form padding adjusted
- [ ] Footer with Component Dock credit
- [ ] `npm run verify:app -- regista` passes (typecheck + lint + 100% coverage + build)
