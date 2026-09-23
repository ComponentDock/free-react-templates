# Spec: Loginstar — Centered Purple Login Form

## Purpose

Recreation of ColorLib Login Form V10 as Loginstar — a minimalist, centered login form on a plain white background. Ubuntu font family, lavender-purple brand color (#827ffe), full-width inputs with light gray backgrounds, a full-width purple submit button, "Remember me" checkbox, and "Forgot?" link. No images, no split layout — pure form.

- **Source:** https://colorlib.com/wp/template/login-form-v10/
- **Preview (ColorLib):** https://preview.colorlib.com/theme/login-form-v10/ (HTTP 404 at time of prep; fallback to download ZIP + screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v10.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the original `css/main.css` (from the ColorLib download ZIP).

| Token | Value | Usage |
| --- | --- | --- |
| --color-primary | #827ffe | Lavender-purple accent — button bg, focus border, link color, checkbox border |
| --color-heading | #403866 | Dark purple/navy — form title, input text, link hover, button hover bg |
| --color-card | #ffffff | Form card background |
| --color-input-bg | #e6e6e6 | Input field background (light gray) |
| --color-body | #666666 | Body text, links default, paragraph text |
| --color-placeholder | #8f8fa1 | Input placeholder text |
| --color-muted | #999999 | Checkbox label text |
| --color-validation | #c80000 | Validation error border/text |
| --font-body | Ubuntu, sans-serif | Body, inputs, links, checkbox label |
| --font-heading | Ubuntu Bold, sans-serif | Form title, input text, button |
| --input-height | 62px | Input and button height |
| --input-radius | 3px | Input, button, checkbox border-radius |
| --card-width | 390px | Form card width |
| --card-radius | 10px | Form card border-radius |
| --card-padding-top | 50px | Top padding inside card |
| --card-padding-bottom | 90px | Bottom padding inside card |
| --button-height | 62px | Submit button height |
| --focus-border | #827ffe | Focus ring color (animated scale transition) |
| --transition-speed | 0.4s | Focus and hover transitions |

## Requirements

### Requirement: Full-page centered layout

The template SHALL render a full-page container with white/transparent background, centering the login card both vertically and horizontally with min-height 100vh and flexbox centering.

#### Scenario: Centered layout

- **WHEN** the user loads the page
- **THEN** the login card is centered vertically and horizontally on a plain background
- **AND** the card takes up the full viewport height

### Requirement: Login card container

The template SHALL render a white card (390px wide, 10px border-radius) containing the login form, with 50px top padding and 90px bottom padding.

#### Scenario: Card renders

- **WHEN** the user loads the page
- **THEN** a white card with rounded corners is visible in the center of the viewport
- **AND** the card width is approximately 390px

### Requirement: Login form title

The template SHALL display a "Login" heading (uppercase, Ubuntu Bold, 30px, color #403866) centered at the top of the form.

#### Scenario: Title renders

- **WHEN** the user loads the page
- **THEN** the text "LOGIN" is visible centered at the top of the card
- **AND** the text is uppercase and dark purple (#403866)

### Requirement: Username input field

The template SHALL render a full-width username input with light gray background (#e6e6e6), no visible border, "Username" placeholder in gray (#8f8fa1), 62px height, 3px border-radius, and Ubuntu Bold 18px text color #403866. On focus, a purple (#827ffe) border ring SHALL animate in with a scale transition.

#### Scenario: Username input renders

- **WHEN** the user views the form
- **THEN** a username input field is visible with gray background and "Username" placeholder

#### Scenario: Username focus effect

- **WHEN** the user clicks/tabs into the username input
- **THEN** a purple (#827ffe) border ring animates in around the input

### Requirement: Password input field

The template SHALL render a full-width password input identical in styling to the username input, with "Password" placeholder text.

#### Scenario: Password input renders

- **WHEN** the user views the form
- **THEN** a password input field is visible below the username field with "Password" placeholder

#### Scenario: Password focus effect

- **WHEN** the user clicks/tabs into the password input
- **THEN** a purple (#827ffe) border ring animates in around the input

### Requirement: Remember me checkbox and Forgot link row

The template SHALL render a row below the password field containing a "Remember me" checkbox (custom styled: 18px box, 2px solid #827ffe border, checkmark in #827ffe when checked) on the left, and a "Forgot?" link (Ubuntu Regular, 16px, color #827ffe) on the right, with space-between alignment.

#### Scenario: Checkbox and link row

- **WHEN** the user views the form
- **THEN** a "Remember me" checkbox is visible on the left
- **AND** a "Forgot?" link in purple is visible on the right
- **AND** both are vertically aligned on the same row

#### Scenario: Checkbox checked state

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox shows a purple (#827ffe) checkmark

### Requirement: Login submit button

The template SHALL render a full-width submit button (62px height, 3px border-radius) with purple background (#827ffe), white text (Ubuntu Bold, 16px, uppercase), centered content. On hover, the background SHALL transition to dark purple (#403866) over 0.4s.

#### Scenario: Button renders

- **WHEN** the user views the form
- **THEN** a full-width "LOGIN" button is visible in purple with white text

#### Scenario: Button hover

- **WHEN** the user hovers over the login button
- **THEN** the button background transitions from purple (#827ffe) to dark purple (#403866)

### Requirement: Form validation

The template SHALL validate that both username and password fields are non-empty before allowing form submission. Empty fields SHALL display inline validation messages styled with red border (#c80000) and red text.

#### Scenario: Empty form submission

- **WHEN** the user clicks "Login" with both fields empty
- **THEN** validation messages appear for both fields

#### Scenario: Partial submission

- **WHEN** the user clicks "Login" with only username filled
- **THEN** a validation message appears for the password field only

### Requirement: Responsive design

The template SHALL be fully responsive. On viewports narrower than 480px, the card width SHALL expand to fill available width with appropriate padding.

#### Scenario: Mobile layout

- **WHEN** the user views the form on a mobile viewport (<480px)
- **THEN** the card fills the available width with horizontal padding
- **AND** all form elements remain accessible and properly sized

### Requirement: Component Dock footer link

The template SHALL include a footer (or link within the page) that links to https://www.componentdock.com/ with the text "Component Dock" or similar branding.

#### Scenario: Footer link

- **WHEN** the user views the page
- **THEN** a link to https://www.componentdock.com/ is visible somewhere on the page

## Verification Checklist

- [ ] Card centered vertically and horizontally on full-viewport page
- [ ] Card width ~390px with 10px border-radius on desktop
- [ ] "LOGIN" title: uppercase, Ubuntu Bold, 30px, color #403866, centered
- [ ] Username input: 62px height, #e6e6e6 bg, 3px radius, placeholder #8f8fa1
- [ ] Password input: same styling as username
- [ ] Focus ring: #827ffe border with scale animation on input focus
- [ ] Remember me checkbox: custom styled, purple border + checkmark
- [ ] "Forgot?" link: Ubuntu Regular 16px, color #827ffe, right-aligned
- [ ] Login button: full-width, 62px height, #827ffe bg, white uppercase text, 3px radius
- [ ] Button hover: transitions to #403866 over 0.4s
- [ ] Form validation: red error messages for empty fields
- [ ] Responsive: card fills width on mobile with padding
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Ubuntu font loaded via Google Fonts in index.html
