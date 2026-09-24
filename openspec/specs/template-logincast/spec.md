# Spec: Logincast — Vibrant Gradient Login Form

## Purpose

Recreation of ColorLib "Login Form V11" as Logincast — a vibrant centered login form on a blue-to-pink gradient background with social login options (Facebook + Google), "Remember me" checkbox, and Raleway/Poppins typography. The form features icon-prefixed inputs, a bold pink submit button, and social auth buttons with subtle border styling.

- **Source:** https://colorlib.com/wp/template/login-form-v11/
- **Preview (ColorLib):** https://preview.colorlib.com/theme/login-form-v11/ (HTTP 404 at time of prep; fallback to download ZIP + screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v11.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the original `css/main.css` (from the ColorLib download ZIP).

| Token | Value | Usage |
| --- | --- | --- |
| --color-primary | #d33f8d | Vibrant pink — button bg, focus icon, checkbox border, link hover, social border hover |
| --color-accent | #0250c5 | Blue — gradient start (bottom) |
| --color-accent-end | #d43f8d | Pink — gradient end (top) |
| --color-heading | #333333 | Dark gray — form title, button hover bg |
| --color-card | #ffffff | Form card background |
| --color-input-bg | #e6e6e6 | Input field background (light gray) |
| --color-input-text | #686868 | Input text color |
| --color-body | #666666 | Body text, paragraphs |
| --color-icon | #999999 | Input icons, checkbox label, "Or login with" text, footer link |
| --color-placeholder | #acacac | Input placeholder text |
| --color-facebook | #3b5998 | Facebook button text |
| --color-google | #555555 | Google button text |
| --color-validation | #c80000 | Validation error border/text |
| --color-social-border | #e6e6e6 | Social button border (default) |
| --font-body | Poppins, sans-serif | Body, base font |
| --font-heading | Raleway Black, sans-serif | Form title (uppercase) |
| --font-input | Raleway SemiBold, sans-serif | Input fields |
| --font-button | Raleway Bold, sans-serif | Submit button, social buttons |
| --font-link | Raleway Regular, sans-serif | "Or login with", "Not a member?", checkbox label |
| --input-height | 62px | Input and submit button height |
| --input-radius | 3px | Input, button, checkbox border-radius |
| --card-width | 450px | Form card width |
| --card-radius | 3px | Form card border-radius |
| --card-padding | 50px 50px 77px 30px | Card inner padding (top, right, bottom, left) |
| --social-btn-height | 40px | Social button height |
| --social-btn-gap | 10px | Gap between social buttons |
| --focus-shadow | 0px 0px 60px 20px rgba(211,63,141,0.6) | Focus animation shadow |
| --transition-speed | 0.4s | Focus and hover transitions |
| --title-size | 30px | Form title font size |
| --input-size | 18px | Input font size |
| --button-size | 16px | Button and social button font size |

## Visual Description (from screenshot)

The template shows a centered white card (450px wide) on a vibrant blue-to-pink gradient background. The gradient runs from deep blue (#0250c5) at the bottom to hot pink (#d43f8d) at the top. There's a subtle background image overlay on the gradient.

Inside the card:
1. "LOGIN" title in bold uppercase Raleway Black, dark gray
2. Email input with envelope icon on the left, gray background
3. Password input with lock icon on the left, gray background
4. "Remember me" checkbox (pink border when checked)
5. Full-width pink "LOGIN" button with uppercase text
6. "Or login with" divider text
7. Two side-by-side social login buttons: Facebook (blue icon/text) and Google (gray text with icon)
8. "Not a member? Sign up now" footer link

The aesthetic is vibrant and modern — the gradient is the hero element, with the clean white card floating on top.

## Requirements

### Requirement: Full-page centered layout

The template SHALL render a full-page container with a blue-to-pink linear gradient background, centering the login card both vertically and horizontally using flexbox with min-height 100vh.

#### Scenario: Centered layout

- **WHEN** the user loads the page
- **THEN** the login card is centered vertically and horizontally on a gradient background
- **AND** the card takes up the full viewport height

#### Scenario: Gradient background renders

- **WHEN** the user loads the page
- **THEN** a linear gradient from blue (#0250c5, bottom) to pink (#d43f8d, top) fills the full viewport

### Requirement: Login card container

The template SHALL render a white card (450px wide, 3px border-radius) containing the login form.

#### Scenario: Card renders

- **WHEN** the user loads the page
- **THEN** a white card with rounded corners is visible in the center of the viewport
- **AND** the card width is approximately 450px
- **AND** the card has internal padding (50px left/right, 77px top, 30px bottom)

### Requirement: Login form title

The template SHALL display a "LOGIN" heading (uppercase, Raleway Black, 30px, color #333333) centered at the top of the form.

#### Scenario: Title renders

- **WHEN** the user loads the page
- **THEN** the text "LOGIN" is visible centered at the top of the card
- **AND** the text is uppercase, dark gray (#333333), and bold

### Requirement: Email input field

The template SHALL render a full-width email input with light gray background (#e6e6e6), no visible border, "Email" placeholder in gray (#acacac), 62px height, 3px border-radius, left-padded to accommodate an envelope icon. On focus, the icon SHALL change color to pink (#d33f8d) and a shadow animation SHALL play.

#### Scenario: Email input renders

- **WHEN** the user views the form
- **THEN** an email input field is visible with gray background and "Email" placeholder
- **AND** an envelope icon is visible on the left side of the input

#### Scenario: Email focus effect

- **GIVEN** the email input is displayed
- **WHEN** the user focuses the email input
- **THEN** the envelope icon changes to pink (#d33f8d)
- **AND** a fade-out shadow animation plays

### Requirement: Password input field

The template SHALL render a full-width password input with the same styling as the email input, with a lock icon and "Password" placeholder.

#### Scenario: Password input renders

- **WHEN** the user views the form
- **THEN** a password input field is visible with gray background and "Password" placeholder
- **AND** a lock icon is visible on the left side of the input

#### Scenario: Password focus effect

- **GIVEN** the password input is displayed
- **WHEN** the user focuses the password input
- **THEN** the lock icon changes to pink (#d33f8d)
- **AND** a fade-out shadow animation plays

### Requirement: Remember me checkbox

The template SHALL display a "Remember me" checkbox with a pink (#d33f8d) border that fills with pink when checked. The checkbox label uses Raleway Regular 16px in gray (#999999).

#### Scenario: Checkbox renders unchecked

- **GIVEN** the form is displayed
- **WHEN** the user views the checkbox area
- **THEN** a "Remember me" checkbox is visible with a pink border
- **AND** the checkbox is unchecked by default

#### Scenario: Checkbox toggles

- **GIVEN** the checkbox is displayed
- **WHEN** the user clicks the checkbox
- **THEN** the checkbox becomes checked with a pink fill
- **AND** clicking again unchecks it

### Requirement: Login submit button

The template SHALL render a full-width "LOGIN" button with pink background (#d33f8d), white text, uppercase, Raleway Bold 16px, 62px height, 3px border-radius. On hover, the background SHALL change to dark gray (#333333).

#### Scenario: Button renders

- **WHEN** the user views the form
- **THEN** a full-width "LOGIN" button is visible with pink background and white uppercase text

#### Scenario: Button hover effect

- **GIVEN** the login button is displayed
- **WHEN** the user hovers over the button
- **THEN** the button background changes to dark gray (#333333)

### Requirement: Social login buttons

The template SHALL display an "Or login with" divider text, followed by two side-by-side social login buttons: Facebook (blue text, Facebook icon) and Google (gray text, Google icon). Each button is bordered (#e6e6e6), white background, 40px height, 3px border-radius. On hover, the border changes to pink (#d33f8d).

#### Scenario: Social buttons render

- **WHEN** the user views the form below the submit button
- **THEN** an "Or login with" text divider is visible
- **AND** a Facebook button with Facebook icon and "Facebook" text is visible
- **AND** a Google button with Google icon and "Google" text is visible
- **AND** the two buttons are side by side

#### Scenario: Social button hover

- **GIVEN** the social buttons are displayed
- **WHEN** the user hovers over either social button
- **THEN** the button border changes to pink (#d33f8d)

### Requirement: Sign up link

The template SHALL display a "Not a member? Sign up now" footer section with the "Sign up now" text underlined and linked.

#### Scenario: Sign up link renders

- **WHEN** the user views the bottom of the form
- **THEN** a "Not a member?" text is visible
- **AND** a "Sign up now" link is visible with an underline

#### Scenario: Sign up link hover

- **GIVEN** the sign up link is displayed
- **WHEN** the user hovers over "Sign up now"
- **THEN** the underline color changes to pink (#d33f8d)

### Requirement: Form validation

The template SHALL validate form inputs and display inline error messages when the user submits with invalid data.

#### Scenario: Empty email validation

- **GIVEN** the email field is empty
- **WHEN** the user submits the form
- **THEN** a validation error message is displayed next to the email input
- **AND** the error message has a red (#c80000) border and text

#### Scenario: Empty password validation

- **GIVEN** the password field is empty
- **WHEN** the user submits the form
- **THEN** a validation error message is displayed next to the password input

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock footer

- **WHEN** the user views the page
- **THEN** a footer section is visible with a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

### Requirement: Responsive layout

The template SHALL be responsive and adapt to mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the user is on a mobile viewport (≤480px)
- **WHEN** the page loads
- **THEN** the card padding is reduced to 15px on the left and right
- **AND** the card remains centered

## Verification checklist

- [ ] Card renders centered on gradient background (blue bottom → pink top)
- [ ] "LOGIN" title in uppercase Raleway Black
- [ ] Email input with envelope icon, gray background, focus animation
- [ ] Password input with lock icon, gray background, focus animation
- [ ] "Remember me" checkbox with pink border/check
- [ ] Pink "LOGIN" button, hover → dark gray
- [ ] "Or login with" divider
- [ ] Facebook + Google social buttons side by side, hover → pink border
- [ ] "Not a member? Sign up now" link with hover effect
- [ ] Validation errors for empty fields (red border + message)
- [ ] Responsive at ≤480px (reduced padding)
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
