# Spec: Loginblush — Gradient Login Form with Social Buttons

## Purpose

Recreation of ColorLib "Login Form V11" as Loginblush — a centered login form on a blue-to-pink gradient background with a decorative wave overlay, white card, gray input fields with left-aligned icons, pink submit button, "Remember me" checkbox, and Facebook/Google social login buttons.

- **Source:** https://colorlib.com/wp/template/login-form-v11/
- **Preview (ColorLib):** https://preview.colorlib.com/theme/login-form-v11/ (HTTP 404 at time of prep; fallback to demo URL + screenshot)
- **Demo (live):** https://colorlib.com/etc/lf/Login_v11/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v11.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the original `css/main.css` (demo live at colorlib.com/etc/lf/Login_v11/).

| Token | Value | Usage |
| --- | --- | --- |
| --color-primary | #d33f8d | Hot pink/magenta — button bg, focus glow, link hover, checkbox border/fill, social button hover border |
| --color-heading | #333333 | Dark — form title text |
| --color-card | #ffffff | White card background |
| --color-input-bg | #e6e6e6 | Input field background (light gray) |
| --color-body | #666666 | Body text, links default |
| --color-input-text | #686868 | Input field text color |
| --color-placeholder | #acacac | Input placeholder text |
| --color-muted | #999999 | Checkbox label, social login text, input icons |
| --color-validation | #c80000 | Validation error border/text |
| --color-facebook | #3b5998 | Facebook button text/icon |
| --color-google | #555555 | Google button text |
| --color-social-border | #e6e6e6 | Social button border |
| --color-bg-start | #0250c5 | Gradient start (blue, bottom) |
| --color-bg-end | #d43f8d | Gradient end (pink, top) |
| --font-body | Poppins, sans-serif | Body text, base font |
| --font-heading | Raleway Black, sans-serif | Form title "LOGIN" |
| --font-button | Raleway Bold, sans-serif | Login button, social buttons |
| --font-input | Raleway SemiBold, sans-serif | Input field text |
| --font-label | Raleway Regular, sans-serif | Checkbox label, "Or login with", footer text |
| --input-height | 62px | Input and button height |
| --input-radius | 3px | Input, button, card border-radius |
| --card-width | 450px | Form card width |
| --card-padding | left: 50px, right: 50px, top: 77px, bottom: 30px | Card padding |
| --social-btn-height | 40px | Social login buttons |
| --social-btn-radius | 3px | Social button border-radius |
| --transition-speed | 0.4s | Focus and hover transitions |

## Visual Design Notes (from screenshot)

- Full-page gradient background from blue (#0250c5, bottom) to hot pink (#d43f8d, top) — CSS `linear-gradient(bottom, ...)`.
- A decorative wave/curve image overlay sits behind the gradient (::before pseudo-element).
- White card (450px wide, 3px border-radius) centered vertically and horizontally.
- "LOGIN" title in Raleway Black, 30px, uppercase, dark (#333333), centered.
- Two full-width inputs (Email, Password) with gray background (#e6e6e6), 62px height, left-aligned icons (envelope, lock) in gray (#999999), 3px border-radius.
- Custom checkbox: "Remember me" label, pink border (#d33f8d) when checked, pink fill.
- Full-width "LOGIN" button: hot pink (#d33f8d) background, white text, Raleway Bold, uppercase, 62px height, 3px border-radius. Hover: dark (#333333).
- "Or login with" text in Raleway Regular, 16px, #999999, centered.
- Two social buttons side-by-side: Facebook (blue icon + text) and Google (G icon + text), white bg, #e6e6e6 border, 40px height, 3px border-radius. Hover: pink border.
- Footer: "Not a member? Sign up now" — "Sign up now" is a link with bottom border.

## Requirements

### Requirement: Full-page gradient background

The template SHALL render a full-page container with a linear gradient from blue (#0250c5, bottom) to hot pink (#d43f8d, top), centering its content both vertically and horizontally with min-height 100vh. A decorative wave/curve image SHALL overlay the gradient via a ::before pseudo-element.

#### Scenario: Background renders

- **WHEN** the user loads the page
- **THEN** the page background is a vertical gradient from blue to hot pink
- **AND** the content is centered vertically and horizontally

#### Scenario: Wave overlay visible

- **WHEN** the user loads the page
- **THEN** a subtle decorative wave/curve overlay is visible on the gradient background

### Requirement: White login card

The template SHALL render a white card (450px wide, 3px border-radius) containing the login form, centered on the gradient background. The card SHALL have padding: 50px left, 50px right, 77px top, 30px bottom.

#### Scenario: Card renders

- **WHEN** the user loads the page
- **THEN** a white card with rounded corners is visible in the center of the viewport
- **AND** the card width is approximately 450px

### Requirement: Login form title

The template SHALL display a "LOGIN" heading (uppercase, Raleway Black, 30px, color #333333) centered at the top of the form.

#### Scenario: Title renders

- **WHEN** the user loads the page
- **THEN** the text "LOGIN" is visible centered at the top of the card
- **AND** the text is uppercase and dark (#333333)

### Requirement: Email input field

The template SHALL render a full-width email input with gray background (#e6e6e6), no visible border, "Email" placeholder in gray (#acacac), 62px height, 3px border-radius, left padding of 65px for the icon, and Raleway SemiBold 18px text color #686868. An envelope icon SHALL be positioned absolutely on the left side of the input in gray (#999999). On focus, a pink (#d33f8d) glow animation SHALL play.

#### Scenario: Email input renders

- **WHEN** the user views the form
- **THEN** an email input field is visible with gray background and "Email" placeholder
- **AND** an envelope icon is positioned on the left side

#### Scenario: Email focus effect

- **WHEN** the user focuses the email input
- **THEN** a pink glow animation plays around the input
- **AND** the envelope icon color changes to pink (#d33f8d)

### Requirement: Password input field

The template SHALL render a full-width password input with the same styling as the email input, with "Password" placeholder and a lock icon on the left.

#### Scenario: Password input renders

- **WHEN** the user views the form
- **THEN** a password input field is visible with gray background and "Password" placeholder
- **AND** a lock icon is positioned on the left side

#### Scenario: Password focus effect

- **WHEN** the user focuses the password input
- **THEN** a pink glow animation plays around the input
- **AND** the lock icon color changes to pink (#d33f8d)

### Requirement: Remember me checkbox

The template SHALL render a custom-styled "Remember me" checkbox with a pink (#d33f8d) border. When checked, the checkbox SHALL show a pink checkmark. The label SHALL be in Raleway Regular, 16px, color #999999.

#### Scenario: Checkbox renders unchecked

- **WHEN** the user views the form
- **THEN** a "Remember me" checkbox is visible below the password field
- **AND** the checkbox is unchecked with a pink border

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the checkbox
- **THEN** the checkbox becomes checked with a pink checkmark

### Requirement: Login submit button

The template SHALL render a full-width "LOGIN" button with hot pink (#d33f8d) background, white text, Raleway Bold 16px, uppercase, 62px height, 3px border-radius. On hover, the background SHALL transition to dark (#333333) with a 0.4s transition.

#### Scenario: Button renders

- **WHEN** the user views the form
- **THEN** a full-width pink "LOGIN" button is visible below the checkbox

#### Scenario: Button hover

- **WHEN** the user hovers over the login button
- **THEN** the button background transitions to dark (#333333)

### Requirement: Social login section

The template SHALL render an "Or login with" text (Raleway Regular, 16px, #999999, centered) followed by two social login buttons (Facebook and Google) displayed side-by-side. Each button SHALL be approximately `calc((100% - 10px) / 2)` wide, 40px height, white background, #e6e6e6 border, 3px border-radius. On hover, the border SHALL change to pink (#d33f8d).

#### Scenario: Social buttons render

- **WHEN** the user scrolls to the social login section
- **THEN** "Or login with" text is visible centered
- **AND** Facebook and Google buttons are displayed side-by-side below it

#### Scenario: Facebook button styling

- **WHEN** the user views the Facebook button
- **THEN** it shows a blue Facebook icon and "Facebook" text in blue (#3b5998)

#### Scenario: Google button styling

- **WHEN** the user views the Google button
- **THEN** it shows a Google "G" icon and "Google" text in gray (#555555)

#### Scenario: Social button hover

- **WHEN** the user hovers over either social button
- **THEN** the border color changes to pink (#d33f8d)

### Requirement: Sign up footer link

The template SHALL display a "Not a member? Sign up now" text at the bottom of the card. "Sign up now" SHALL be a link with a bottom border (#999999) that changes to pink (#d33f8d) on hover.

#### Scenario: Footer renders

- **WHEN** the user scrolls to the bottom of the card
- **THEN** "Not a member? Sign up now" text is visible centered
- **AND** "Sign up now" has a bottom border underline

#### Scenario: Footer link hover

- **WHEN** the user hovers over "Sign up now"
- **THEN** the underline color changes to pink (#d33f8d)

### Requirement: Form validation

The template SHALL validate that the email field contains a valid email format and that the password field is not empty. Validation errors SHALL display as a tooltip with red border (#c80000) and red text (#c80000).

#### Scenario: Empty email validation

- **WHEN** the user submits the form with an empty email field
- **THEN** a validation error message appears near the email input

#### Scenario: Invalid email validation

- **WHEN** the user enters an invalid email format
- **THEN** a validation error message appears near the email input

#### Scenario: Empty password validation

- **WHEN** the user submits the form with an empty password field
- **THEN** a validation error message appears near the password input

### Requirement: Responsive layout

The template SHALL be responsive. On viewports narrower than 480px, the card padding SHALL reduce to 15px left and right. The card SHALL remain centered and the layout SHALL not break.

#### Scenario: Mobile layout

- **WHEN** the user views the page on a viewport narrower than 480px
- **THEN** the card padding reduces to 15px left and right
- **AND** the form remains centered and fully functional

### Requirement: Accessibility

The template SHALL use semantic HTML elements, proper form labels, focus-visible rings, and keyboard-navigable controls. All interactive elements SHALL be accessible via keyboard.

#### Scenario: Keyboard navigation

- **WHEN** the user tabs through the form
- **THEN** each interactive element receives visible focus
- **AND** the tab order follows logical top-to-bottom flow

#### Scenario: Screen reader labels

- **WHEN** a screen reader encounters the form
- **THEN** each input has an associated label
- **AND** the social buttons have descriptive accessible names

### Requirement: Component Dock footer link

Every template's footer MUST link https://www.componentdock.com/ (branded as "Component Dock").

#### Scenario: Footer link present

- **WHEN** the user views the page
- **THEN** a "Component Dock" link is present in the footer area

## Verification Checklist

- [ ] Gradient background renders (blue to pink)
- [ ] Wave overlay image visible on background
- [ ] White card centered with correct dimensions
- [ ] "LOGIN" title in correct font/color
- [ ] Email input with envelope icon, gray background
- [ ] Password input with lock icon, gray background
- [ ] Focus glow animation on inputs (pink)
- [ ] Custom "Remember me" checkbox with pink styling
- [ ] Pink "LOGIN" button, hover → dark
- [ ] "Or login with" section with Facebook + Google buttons
- [ ] Social buttons side-by-side, bordered, hover → pink border
- [ ] "Not a member? Sign up now" footer with link underline
- [ ] Form validation with error tooltips
- [ ] Responsive layout on mobile
- [ ] Keyboard navigation works
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
