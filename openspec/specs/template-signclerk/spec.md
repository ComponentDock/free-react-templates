# Spec: SignClerk — Promotional Signup Form

## Purpose

SignClerk is a promotional signup form template that recreates ColorLib "Colorlib Reg Form V9" (https://colorlib.com/wp/template/colorlib-regform-9/) as a React 19 + Tailwind CSS 4 + TypeScript application. The form provides a cinematic, split-panel registration experience with a dark full-viewport background image, a semi-transparent gold/tan form panel floated right, and minimalist underline-style inputs with pill-shaped action buttons.

**Preview URL**: https://preview.colorlib.com/theme/colorlib-regform-9/ (currently 404; design verified from downloaded source ZIP + screenshot)

## Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| Font family | Poppins (400, 600, 700) | Google Fonts, CSS @font-face |
| Brand color (gold/tan) | `#b18757` | submit button text, sign-in hover fill |
| Panel background | `rgba(177, 135, 77, 0.75)` | .signup-content background |
| Text color | `#ffffff` | body, headings, inputs, labels |
| Input border (bottom) | `1px solid #ebebeb` | form inputs |
| Input placeholder | `#ffffff` weight 400 | input::-webkit-input-placeholder |
| Submit button fill | `#ffffff` | .form-submit background |
| Submit button text | `#b18757` | .form-submit color |
| Submit button radius | `25px` (pill) | .submit border-radius |
| Submit button shadow | `0px 15px 9.9px 0.1px rgba(0,0,0,0.15)` | .form-submit box-shadow |
| Sign-in button | `2px solid #fff` border, transparent fill, white text | .submit-link |
| Sign-in hover | `#fff` fill, `#b18757` text | .submit-link:hover |
| Checkbox | 13×13px, `1px solid #fff`, 2px radius | custom checkbox |
| Heading (h2) | 36px, bold, white, Poppins | h2 rule |
| Description | 14px, weight 400, white | p rule |

## Requirements

### Requirement: Full-viewport cinematic background

Users SHALL see a full-viewport background image covering the entire page with no scrollable empty space.

#### Scenario: Page loads with full-viewport background

- WHEN I visit the SignClerk page
- THEN the body SHALL display a full-viewport background image
- AND the background SHALL cover the entire viewport without repeating

#### Scenario: Background image covers viewport on all screen sizes

- WHEN I resize the browser to any width
- THEN the background image SHALL always cover the full viewport

### Requirement: Semi-transparent gold form panel floated right

Users SHALL see a semi-transparent gold/tan panel on the right side of the viewport containing the signup form.

#### Scenario: Form panel displays on the right

- WHEN I visit the SignClerk page on a desktop viewport (≥993px)
- THEN I should see a form panel positioned on the right side
- AND the panel should have a semi-transparent gold/tan background (rgba(177, 135, 77, 0.75))
- AND the panel should be approximately 562px wide

#### Scenario: Form panel is full-width on mobile

- WHEN I visit the SignClerk page on a viewport ≤992px
- THEN the form panel SHALL take the full available width

### Requirement: Signup form displays all required fields

Users SHALL see a "Sign up" heading, promotional subtitle, name input, email input, password input with visibility toggle, terms checkbox, and two action buttons.

#### Scenario: Form displays all required fields

- WHEN I visit the SignClerk page
- THEN I should see a "Sign up" heading (h2)
- AND I should see a subtitle "to get discount 10% when pre - order" with a bold product name
- AND I should see a name input with placeholder "Your Name"
- AND I should see an email input with placeholder "Email"
- AND I should see a password input with placeholder "Password"
- AND I should see an eye toggle icon on the password field
- AND I should see a terms checkbox with label "I agree all statements in Terms of service"
- AND I should see a "SIGN UP" button
- AND I should see a "SIGN IN" button/link

### Requirement: Password visibility toggle

Users SHALL be able to toggle password visibility using an eye icon button.

#### Scenario: Password starts hidden

- WHEN I visit the SignClerk page
- THEN the password input should have type "password"

#### Scenario: Clicking toggle shows password

- WHEN I click the password toggle button
- THEN the password input should have type "text"

#### Scenario: Clicking toggle again hides password

- WHEN I click the password toggle button twice
- THEN the password input should have type "password"

### Requirement: Form accepts user input

Users SHALL be able to type in all form fields and toggle the terms checkbox.

#### Scenario: Form accepts text input

- WHEN I type "Jane Doe" in the name field
- THEN the name field should contain "Jane Doe"

#### Scenario: Form accepts email input

- WHEN I type "jane@example.com" in the email field
- THEN the email field should contain "jane@example.com"

#### Scenario: Terms checkbox toggles

- WHEN I click the terms checkbox
- THEN the checkbox should be checked
- WHEN I click the terms checkbox again
- THEN the checkbox should be unchecked

### Requirement: Action buttons styled as pills

The SIGN UP button SHALL be a solid white pill button with gold text and box-shadow. The SIGN IN button SHALL be a white-bordered pill button with transparent background.

#### Scenario: SIGN UP button has correct styling

- WHEN I visit the SignClerk page
- THEN the SIGN UP button SHALL have white background
- AND the button text SHALL be gold (#b18757) and uppercase
- AND the button SHALL have border-radius 25px (pill shape)
- AND the button SHALL have a subtle box-shadow

#### Scenario: SIGN IN button has correct styling

- WHEN I visit the SignClerk page
- THEN the SIGN IN button/link SHALL have a white border
- AND the background SHALL be transparent
- AND the text SHALL be white and uppercase
- AND the button SHALL have border-radius 25px (pill shape)

#### Scenario: Buttons stack on mobile

- WHEN I visit the SignClerk page on a viewport ≤480px
- THEN both action buttons SHALL stack vertically at full width

### Requirement: Underline-style form inputs

All text inputs SHALL use a minimal underline-only border style (bottom border only, no side/top borders) with white text on transparent background.

#### Scenario: Inputs have correct underline styling

- WHEN I visit the SignClerk page
- THEN the text inputs SHALL have only a bottom border (1px solid #ebebeb)
- AND the input text SHALL be white and bold
- AND the input background SHALL be transparent

#### Scenario: Inputs use correct font

- WHEN I visit the SignClerk page
- THEN the inputs SHALL use Poppins font at 14px

### Requirement: Terms and service link

Users SHALL see a terms checkbox with a linked "Terms of service" text.

#### Scenario: Terms link is present

- WHEN I visit the SignClerk page
- THEN I should see "Terms of service" as a clickable link
- AND the link text should be white

### Requirement: Footer links to Component Dock

Users SHALL see a footer link to Component Dock.

#### Scenario: Footer links to Component Dock

- WHEN I visit the SignClerk page
- THEN I should see a link to "https://www.componentdock.com/"
- AND the link should open in a new tab
- AND the link text should contain "Component Dock"

### Requirement: Page title and accessibility

The page SHALL have a descriptive document title and use semantic HTML elements.

#### Scenario: Page has correct title

- WHEN I visit the SignClerk page
- THEN the document title SHALL contain "SignClerk"

#### Scenario: Form uses semantic elements

- WHEN I visit the SignClerk page
- THEN the form SHALL use a `<form>` element
- AND inputs SHALL have associated `<label>` elements or placeholder attributes
- AND the password toggle button SHALL have an accessible label
