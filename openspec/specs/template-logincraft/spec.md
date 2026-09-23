# Spec: Logincraft — Split-Screen Login Form

## Purpose

Recreation of ColorLib Login Form V1 as Logincraft — a split-screen login form with a purple-to-blue gradient background, white card, decorative illustration with tilt effect, green pill-shaped inputs and button, Poppins + Montserrat fonts.

- **Source:** https://colorlib.com/wp/template/login-form-v1/
- **Demo (live):** https://colorlib.com/etc/lf/Login_v1/index.html
- **Preview (ColorLib):** https://preview.colorlib.com/theme/login-form-v1/ (HTTP 404 at time of prep; fallback to demo URL + screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v1.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the original `css/main.css` (demo live at colorlib.com/etc/lf/Login_v1/).

| Token                    | Value                                        | Usage                                                        |
| ------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| --color-bg-gradient-start| #c850c0                                      | Pink-purple gradient start (left)                            |
| --color-bg-gradient-end  | #4158d0                                      | Blue gradient end (right)                                    |
| --color-card             | #ffffff                                      | Card background                                              |
| --color-card-radius      | 10px                                         | Card border-radius                                           |
| --color-primary          | #57b846                                      | Green accent — button bg, input focus glow, link hover, icon focus color |
| --color-primary-hover    | #333333                                      | Button hover background                                      |
| --color-ink              | #333333                                      | Heading text (form title)                                    |
| --color-body             | #666666                                      | Body text, input text, link default color, input icons       |
| --color-muted            | #999999                                      | Placeholder text, utility caption text                       |
| --color-input-bg         | #e6e6e6                                      | Input background                                             |
| --color-validation       | #c80000                                      | Validation alert border/text                                 |
| --font-body              | Poppins, sans-serif                          | Body, inputs, links, captions                                |
| --font-heading           | Poppins Bold, sans-serif                     | Form title                                                   |
| --font-button            | Montserrat Bold, sans-serif                  | Login button                                                 |
| --input-height           | 50px                                         | Input and button height                                      |
| --input-radius           | 25px                                         | Pill-shaped inputs and button                                |
| --card-width             | 960px                                        | Max card width                                               |
| --pic-width              | 316px                                        | Decorative illustration width                                |
| --form-width             | 290px                                        | Form column width                                            |

## Requirements

### Requirement: Full-page gradient background

The template SHALL render a full-page gradient background from pink-purple (#c850c0) to blue (#4158d0) at a -135deg angle, centering its content both vertically and horizontally with min-height 100vh.

#### Scenario: Background renders

- **WHEN** the user loads the page
- **THEN** the page background is a diagonal gradient from pink-purple to blue
- **AND** the content is centered vertically and horizontally

### Requirement: White card container

The template SHALL render a white card (960px max-width, 10px border-radius) containing a split layout: decorative illustration on the left, login form on the right.

#### Scenario: Desktop layout

- **WHEN** the user loads the page on a desktop viewport (>768px)
- **THEN** a white card is visible with an illustration on the left and a form on the right

#### Scenario: Mobile layout

- **WHEN** the user loads the page on a mobile viewport (<=768px)
- **THEN** the illustration is hidden and the form occupies the full card width

### Requirement: Decorative illustration with tilt effect

The template SHALL display a decorative illustration image on the left side of the card (316px wide on desktop, hidden on mobile). The illustration SHALL have a subtle hover scale/tilt effect.

#### Scenario: Desktop illustration

- **WHEN** the user views the page on desktop
- **THEN** a decorative illustration is visible on the left side of the card

#### Scenario: Mobile illustration hidden

- **WHEN** the user views the page on mobile (<=768px)
- **THEN** the illustration is not visible

#### Scenario: Tilt hover effect

- **WHEN** the user hovers over the illustration on desktop
- **THEN** the image scales up slightly (approximately 1.1x)

### Requirement: "Member Login" form title

The template SHALL display a centered "Member Login" heading in Poppins Bold, 24px, color #333333, with 54px bottom padding.

#### Scenario: Title visible

- **WHEN** the user loads the page
- **THEN** a "Member Login" heading is visible above the form fields, centered

### Requirement: Email input field

The template SHALL render an email text input with a left-side envelope icon, placeholder "Email", pill shape (border-radius 25px), gray background (#e6e6e6), 50px height.

#### Scenario: Email input visible

- **WHEN** the user loads the page
- **THEN** an email input is visible with an envelope icon on the left and "Email" placeholder

#### Scenario: Email accepts input

- **WHEN** the user types "user@example.com" in the email field
- **THEN** the email field contains "user@example.com"

#### Scenario: Email focus animation

- **WHEN** the user focuses the email input
- **THEN** the envelope icon color transitions to green (#57b846) and shifts slightly left

### Requirement: Password input field

The template SHALL render a password input with a left-side lock icon, placeholder "Password", pill shape (border-radius 25px), gray background (#e6e6e6), 50px height.

#### Scenario: Password input visible

- **WHEN** the user loads the page
- **THEN** a password input is visible with a lock icon on the left and "Password" placeholder

#### Scenario: Password accepts input

- **WHEN** the user types "secret123" in the password field
- **THEN** the password field contains "secret123" (masked)

#### Scenario: Password focus animation

- **WHEN** the user focuses the password input
- **THEN** the lock icon color transitions to green (#57b846) and shifts slightly left

### Requirement: Login submit button

The template SHALL render a full-width "Login" submit button with green background (#57b846), white text, Montserrat Bold font, uppercase, 15px, pill shape (border-radius 25px), 50px height.

#### Scenario: Button visible

- **WHEN** the user loads the page
- **THEN** a green "LOGIN" button is visible below the password field, full-width, uppercase

#### Scenario: Button hover

- **WHEN** the user hovers over the Login button
- **THEN** the button background transitions to dark (#333333)

### Requirement: Forgot password link

The template SHALL display "Forgot Username / Password?" as a text + link combination below the login button.

#### Scenario: Link visible

- **WHEN** the user loads the page
- **THEN** "Forgot" text (gray #999) followed by "Username / Password?" link (#666) is visible below the button

#### Scenario: Link hover

- **WHEN** the user hovers over "Username / Password?"
- **THEN** the link color transitions to green (#57b846)

### Requirement: Create account link

The template SHALL display a "Create your Account" link with a right arrow icon at the bottom of the form.

#### Scenario: Link visible

- **WHEN** the user loads the page
- **THEN** "Create your Account →" link is visible at the bottom of the form

#### Scenario: Link hover

- **WHEN** the user hovers over "Create your Account"
- **THEN** the link color transitions to green (#57b846)

### Requirement: Form validation

The template SHALL validate the email and password fields on submit, showing red validation tooltips (#c80000) with descriptive messages when fields are empty or invalid.

#### Scenario: Empty email validation

- **WHEN** the user submits the form with an empty email field
- **THEN** a red validation tooltip appears with "Valid email is required: ex@abc.xyz"

#### Scenario: Empty password validation

- **WHEN** the user submits the form with an empty password field
- **THEN** a red validation tooltip appears with "Password is required"

#### Scenario: Successful submit

- **WHEN** the user submits the form with a valid email and password
- **THEN** the form submits without validation errors

### Requirement: Responsive breakpoints

The template SHALL adapt layout at three breakpoints: >992px (full split), 768-992px (reduced padding), <=768px (illustration hidden, full-width form), <=576px (minimal padding).

#### Scenario: Tablet layout

- **WHEN** the user views the page at 768-992px width
- **THEN** the card padding reduces and the illustration narrows to ~35% width

#### Scenario: Mobile layout

- **WHEN** the user views the page at <=768px width
- **THEN** the illustration is hidden and the form takes full width

#### Scenario: Small mobile layout

- **WHEN** the user views the page at <=576px width
- **THEN** the card padding reduces to 15px horizontal

## Verification Checklist

- [ ] Gradient background renders at -135deg from #c850c0 to #4158d0
- [ ] White card centered with 10px border-radius, 960px max-width
- [ ] Decorative illustration visible on left (desktop), hidden on mobile
- [ ] Tilt/scale hover effect on illustration
- [ ] "Member Login" heading centered, Poppins Bold 24px
- [ ] Email input: pill shape, gray bg, envelope icon, green focus
- [ ] Password input: pill shape, gray bg, lock icon, green focus
- [ ] Login button: green bg, white text, Montserrat Bold, uppercase, pill
- [ ] Button hover: dark bg (#333333)
- [ ] "Forgot Username / Password?" link below button
- [ ] "Create your Account →" link at bottom
- [ ] Validation tooltips on empty submit
- [ ] Responsive at 992px, 768px, 576px breakpoints
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
