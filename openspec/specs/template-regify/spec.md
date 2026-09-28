# Spec: Regify — Account Application Registration Form

## Purpose

Regify is a free account application registration form template that recreates ColorLib "Colorlib Reg Form V8" (https://colorlib.com/wp/template/colorlib-regform-8/) as a React 19 + Tailwind CSS 4 + TypeScript application. The form provides a clean, centered signup card with name, email, password (with visibility toggle), repeat password, terms checkbox, and a gradient submit button on a full-page background photo.

## Requirements

### Requirement: Page layout and branding

Users SHALL see a full-page background photo with a centered signup card, document title "Regify — Account Application Form", and a Component Dock footer link.

#### Scenario: Page loads with correct title and layout

- WHEN I visit the Regify page
- THEN I should see "Regify — Account Application Form" in the document title
- AND I should see a centered signup card with white background
- AND I should see a full-page background image covering the viewport

#### Scenario: Footer links to Component Dock

- WHEN I visit the Regify page
- THEN I should see a link to "https://www.componentdock.com/"
- AND the link should open in a new tab
- AND the link text should contain "Component Dock"

### Requirement: Signup form displays all required fields

Users SHALL see a "Create account" heading, name input, email input, password input with show/hide toggle, repeat password input, terms checkbox, and "Sign up" submit button.

#### Scenario: Form displays all required fields

- WHEN I visit the Regify page
- THEN I should see a "Create account" heading
- AND I should see a name input with placeholder "Your Name"
- AND I should see an email input with placeholder "Your Email"
- AND I should see a password input with placeholder "Password"
- AND I should see a repeat password input with placeholder "Repeat your password"
- AND I should see a terms checkbox
- AND I should see a "Sign up" button

### Requirement: Password visibility toggle

Users SHALL be able to toggle password visibility using an eye icon button.

#### Scenario: Password starts hidden

- WHEN I visit the Regify page
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

### Requirement: Login and terms links

Users SHALL see a "Have already an account? Login here" link and a "Terms of service" link.

#### Scenario: Login link is present

- WHEN I visit the Regify page
- THEN I should see "Have already an account?"
- AND I should see a "Login here" link pointing to #login

#### Scenario: Terms of service link is present

- WHEN I visit the Regify page
- THEN I should see a "Terms of service" link pointing to #terms

### Requirement: Form styling matches design tokens

The signup card SHALL use Montserrat font, white background, 10px border-radius, gradient submit button (#74ebd5 to #9face6), and bordered inputs with 5px radius.

#### Scenario: Card has correct styling

- WHEN I visit the Regify page
- THEN the signup card should have white background
- AND the card should have 10px border-radius
- AND the card should be centered with max-width 660px

#### Scenario: Submit button has gradient styling

- WHEN I visit the Regify page
- THEN the submit button should have gradient background
- AND the button text should be uppercase and bold
- AND the button should be full width

#### Scenario: Inputs have correct border styling

- WHEN I visit the Regify page
- THEN the inputs should have 1px border
- AND the inputs should have 5px border-radius
