# Template: SignupNest (Registration Form)

## Purpose

Recreation of ColorLib **Regform 28** — a split-panel registration form with a hero image on the left and a form on the right, centered on a pastel gradient background.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-28/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-28.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Gradient background

The page SHALL render a full-height gradient background transitioning from lavender (#e0c3fc) to sky blue (#8ec5fc) at approximately 136 degrees.

#### Scenario: Gradient background renders

- **WHEN** I visit the SignupNest page
- **THEN** I see a gradient background from lavender to sky blue
- **AND** the content is centered vertically and horizontally on the page

### Requirement: Split-panel card layout

The page SHALL display a centered card with two halves: a left hero image panel and a right form panel, with 15px border-radius.

#### Scenario: Card renders with two panels

- **WHEN** I visit the SignupNest page
- **THEN** I see a card with a left image panel and a right white form panel
- **AND** the card has rounded corners (15px border-radius)

#### Scenario: Responsive stacking on mobile

- **WHEN** the viewport width is less than 768px
- **THEN** the card stacks vertically with the hero image on top and form below

### Requirement: Hero panel displays subscription info

The left hero panel SHALL display overlaid white text with the headline "Bring Your Music Along", subline "try Unlimited", and pricing "$9.99 / Month".

#### Scenario: Hero text is visible

- **WHEN** I visit the SignupNest page
- **THEN** I see the headline "Bring Your Music Along" in white bold text
- **AND** I see "try Unlimited" below the headline
- **AND** I see "$9.99" with "/ Month" at the bottom right of the image

### Requirement: Registration form fields

The form SHALL contain four input fields: Full Name, Your Email, Password, and Confirm Password, each with a label.

#### Scenario: All four fields render

- **WHEN** I visit the SignupNest page
- **THEN** I see a text input labeled "Full Name:" with placeholder "ex: Lindsey Wilson"
- **AND** I see an email input labeled "Your Email:"
- **AND** I see a password input labeled "Password:"
- **AND** I see a password input labeled "Confirm Password:"

### Requirement: Form validation — required fields

The form SHALL require Email, Password, Confirm Password, and Terms checkbox before submission.

#### Scenario: Empty submission shows errors

- **WHEN** I click the Register button without filling any fields
- **THEN** I see "Email is required" error message
- **AND** I see "Password is required" error message
- **AND** I see "Please confirm your password" error message
- **AND** I see "You must agree to the terms" error message

### Requirement: Email format validation

The form SHALL validate that the email field contains a valid email address.

#### Scenario: Invalid email shows format error

- **WHEN** I type "invalid-email" in the Email field and click Register
- **THEN** I see "Invalid email format" error message

### Requirement: Password confirmation match

The form SHALL validate that Password and Confirm Password fields match.

#### Scenario: Mismatched passwords show error

- **WHEN** I fill Password with "Password123" and Confirm Password with "Password456" and click Register
- **THEN** I see "Passwords do not match" error message

### Requirement: Terms checkbox

The form SHALL include a checkbox for agreeing to the Play Term of Service, with a link to the Component Dock website.

#### Scenario: Unchecked terms blocks submission

- **WHEN** I fill all fields correctly but do NOT check the Terms checkbox and click Register
- **THEN** I see "You must agree to the terms" error message

#### Scenario: Checked terms allows submission

- **WHEN** I fill all fields correctly and check the Terms checkbox and click Register
- **THEN** the form submits successfully and shows a success message

### Requirement: Register button styling

The Register button SHALL be styled with blue background (#3b63ca), 6px border-radius, and darken on hover.

#### Scenario: Button renders with correct styling

- **WHEN** I visit the SignupNest page
- **THEN** I see a "Register" button with blue background

### Requirement: Input focus styling

Input fields SHALL show a green border (#53c83c) when focused.

#### Scenario: Focus shows green border

- **WHEN** I click into any input field
- **THEN** the input border changes to green

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** I visit the SignupNest page
- **THEN** I see a footer link "More templates at Component Dock" pointing to https://www.componentdock.com/
