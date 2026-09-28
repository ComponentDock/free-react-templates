# Template: Joinflow (Signup Form)

## Purpose

Joinflow is a single-page signup/registration form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Signup Form 10" design
(source: https://colorlib.com/wp/template/signup-form-10/), built under a
DIFFERENT name (Joinflow — evokes the "join" / registration flow) with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a centered two-column registration page on a light gray
background. The left column presents social login options (Facebook, Twitter,
Google) stacked vertically under an "Or register with" heading, separated from
the right column by a vertical "— or —" divider. The right column is a white
card containing a "Register" heading, subtitle text, a form with four
underline-style inputs (Name, Email, Password, Re-type Password), a Terms &
Conditions checkbox, a "Sign In" link for existing users, and a green pill-shaped
"Register" submit button. Typography uses Roboto (300–700). The aesthetic is
clean and minimal with a teal/green primary accent (#38d39f).

## Design reference

- **Original:** ColorLib "Signup Form 10" — free signup/registration form
  template (source: https://colorlib.com/wp/template/signup-form-10/).
- **Visual design:** centered two-column layout on `#f8fafb` background.
  Left column: "Or register with" text + 3 full-width social login buttons
  (Facebook `#3b5998`, Twitter `#1da1f2`, Google `#ea4335`) stacked vertically.
  Center: "— or —" divider text. Right column: white card with drop shadow
  containing "Register" heading, subtitle, 4 underline-style form fields,
  Terms checkbox, "Sign In" link, and pill-shaped green "Register" button.
  Footer at bottom with Component Dock link.

## Design tokens

| Token                      | Value                       | Usage                                    |
| -------------------------- | --------------------------- | ---------------------------------------- |
| --color-page-bg            | #f8fafb                     | Page background — light gray-blue        |
| --color-text               | #212529                     | Body text — dark                         |
| --color-muted              | #b3b3b3                     | Muted/secondary text                     |
| --color-primary            | #38d39f                     | Primary accent — teal/green              |
| --color-primary-hover      | #29bb8a                     | Primary button hover                     |
| --color-card-bg            | #ffffff                     | Form card background — white             |
| --color-card-shadow        | 0 2px 3px 0 rgba(0,0,0,0.1) | Card drop shadow                         |
| --color-facebook           | #3b5998                     | Facebook social button                   |
| --color-twitter            | #1da1f2                     | Twitter social button                    |
| --color-google             | #ea4335                     | Google social button                     |
| --color-input-border       | #cccccc                     | Input underline border                   |
| --color-link               | #888888                     | Link text (Sign In)                      |
| --color-checkbox-unchecked | #e6e6e6                     | Checkbox unchecked indicator             |
| --color-checkbox-checked   | #38d39f                     | Checkbox checked fill                    |
| --font-body                | Roboto (300, 400, 500, 700) | Body and heading text — via Google Fonts |
| --btn-border-radius        | 30px                        | Pill-shaped submit button                |
| --btn-height               | 54px                        | Submit button height                     |

## Requirements

### Requirement: Page layout with centered two-column form

The page SHALL render a full-viewport layout with a light gray-blue
(`#f8fafb`) background and a centered two-column container. On desktop, the
container shows a left column (social login), a center divider, and a right
column (registration form) side by side. On mobile, the columns SHALL stack
vertically.

#### Scenario: Page renders with correct background

- **WHEN** the user navigates to Joinflow
- **THEN** the page body SHALL have a `#f8fafb` background

#### Scenario: Two columns render side by side on desktop

- **WHEN** the user views Joinflow on a desktop viewport (≥768px)
- **THEN** the left column (social login) and right column (registration form)
  are displayed side by side with a center divider between them

#### Scenario: Columns stack on mobile

- **WHEN** the user views Joinflow on a mobile viewport (<768px)
- **THEN** the social login section and registration form stack vertically

### Requirement: Left column — social login section

The left column SHALL display the text "Or register with" followed by three
full-width social login buttons stacked vertically: Facebook, Twitter, and
Google. Each button SHALL display the platform name and be colored with the
platform's brand color.

#### Scenario: Social login heading renders

- **WHEN** the user views the left column
- **THEN** the text "Or register with" SHALL be visible

#### Scenario: Facebook login button renders

- **WHEN** the user views the left column
- **THEN** a button labeled "Sign in with Facebook" (or similar) with
  Facebook brand color (`#3b5998`) background SHALL be visible

#### Scenario: Twitter login button renders

- **WHEN** the user views the left column
- **THEN** a button labeled "Sign in with Twitter" (or similar) with
  Twitter brand color (`#1da1f2`) background SHALL be visible

#### Scenario: Google login button renders

- **WHEN** the user views the left column
- **THEN** a button labeled "Sign in with Google" (or similar) with
  Google brand color (`#ea4335`) background SHALL be visible

#### Scenario: Social buttons are full width and stacked

- **WHEN** the user views the left column
- **THEN** all three social buttons SHALL be full-width and stacked
  vertically with consistent spacing

### Requirement: Center divider with "— or —" text

A vertical divider SHALL be visible between the left and right columns,
containing the text "— or —" to visually separate social login from the
registration form.

#### Scenario: Divider renders

- **WHEN** the user views the two-column layout on desktop
- **THEN** a divider containing "— or —" SHALL be visible between the
  social login column and the registration form column

### Requirement: Right column — registration form card

The right column SHALL display a white card with a subtle box shadow
(`0 2px 3px 0 rgba(0,0,0,0.1)`) containing the registration form.

#### Scenario: Card renders with white background

- **WHEN** the user views the right column
- **THEN** a white (`#ffffff`) card with a subtle drop shadow is visible

#### Scenario: Register heading visible

- **WHEN** the user views the registration card
- **THEN** a heading "Register" SHALL be visible at the top of the card

#### Scenario: Subtitle visible

- **WHEN** the user views the registration card
- **THEN** a subtitle paragraph (e.g., "Create your account") SHALL be
  visible below the heading

### Requirement: Registration form fields

The form SHALL contain four underline-style input fields: Name, Email,
Password, and Re-type Password. Each input SHALL have a label and a bottom
border (`#cccccc`). Password fields SHALL mask typed characters.

#### Scenario: Name input renders

- **WHEN** the user views the form
- **THEN** an input labeled "Name" with placeholder "Name" SHALL be visible
- **AND** the input SHALL have a bottom border only (underline style)

#### Scenario: Email input renders

- **WHEN** the user views the form
- **THEN** an input labeled "Email" with placeholder "Email" SHALL be visible
- **AND** the input SHALL accept text input

#### Scenario: Password input renders masked

- **WHEN** the user views the form
- **THEN** a password input labeled "Password" SHALL be visible
- **AND** typed characters SHALL be masked

#### Scenario: Re-type Password input renders masked

- **WHEN** the user views the form
- **THEN** a password input labeled "Re-type Password" SHALL be visible
- **AND** typed characters SHALL be masked

#### Scenario: Form fields accept input

- **WHEN** the user types in any input field
- **THEN** the input SHALL accept and display the typed text (or mask it for
  password fields)

### Requirement: Terms and Conditions checkbox

A checkbox labeled "I agree to the Terms and Conditions" (or similar) SHALL
be visible and unchecked by default.

#### Scenario: Checkbox renders unchecked

- **WHEN** the user views the form
- **THEN** a Terms and Conditions checkbox SHALL be visible and unchecked

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the Terms and Conditions checkbox
- **THEN** the checkbox SHALL toggle its checked state
- **AND** when checked, the checkbox indicator SHALL be `#38d39f` (teal/green)

### Requirement: Sign In link

A link labeled "Already have an account? Sign In" (or similar) SHALL be
visible, styled in muted text (`#888`).

#### Scenario: Sign In link renders

- **WHEN** the user views the form card
- **THEN** a "Sign In" link SHALL be visible in muted text

### Requirement: Register submit button

A "Register" button SHALL be visible as the form's submit button, styled as a
pill shape (`border-radius: 30px`, height 54px) with a teal/green primary
background (`#38d39f`) and white text.

#### Scenario: Button renders with correct styling

- **WHEN** the user views the form card
- **THEN** a "Register" button SHALL be visible with pill shape, green
  background, and white text

#### Scenario: Button click submits form

- **WHEN** the user clicks the "Register" button
- **THEN** the form SHALL attempt submission (without page reload)

### Requirement: Validation — empty form submit

Submitting the form with all fields empty SHALL display validation errors for
each required field.

#### Scenario: Empty submit shows all errors

- **WHEN** the user clicks "Register" without filling any fields
- **THEN** validation error messages SHALL appear for Name, Email, Password,
  Re-type Password, and Terms and Conditions

### Requirement: Validation — invalid email

Submitting the form with an invalid email SHALL display an email-specific error.

#### Scenario: Invalid email shows error

- **WHEN** the user enters "not-an-email" in the Email field and submits
- **THEN** a validation error message SHALL appear for the Email field

#### Scenario: Valid email does not show error

- **WHEN** the user enters "user@example.com" in the Email field and
  submits (with other fields valid)
- **THEN** no validation error SHALL appear for the Email field

### Requirement: Validation — short password

Submitting the form with a password shorter than the minimum length (e.g., 6
characters) SHALL display a password-specific error.

#### Scenario: Short password shows error

- **WHEN** the user enters "123" in the Password field and submits
  (with other fields valid)
- **THEN** a validation error message SHALL appear for the Password field

#### Scenario: Acceptable password does not show error

- **WHEN** the user enters "securepass" in the Password field and submits
  (with other fields valid)
- **THEN** no validation error SHALL appear for the Password field

### Requirement: Validation — passwords do not match

Submitting the form when the Password and Re-type Password fields do not
match SHALL display a mismatch error.

#### Scenario: Mismatched passwords show error

- **WHEN** the user enters "password1" in Password and "password2" in
  Re-type Password and submits (with other fields valid)
- **THEN** a validation error message SHALL appear indicating passwords
  do not match

#### Scenario: Matching passwords do not show error

- **WHEN** the user enters "password1" in both Password and Re-type
  Password and submits (with other fields valid)
- **THEN** no password mismatch error SHALL appear

### Requirement: Validation — terms checkbox unchecked

Submitting the form without checking the Terms and Conditions checkbox SHALL
display an error for the Terms field.

#### Scenario: Unchecked terms shows error

- **WHEN** the user fills all fields correctly but leaves the Terms
  checkbox unchecked and submits
- **THEN** a validation error message SHALL appear for the Terms and
  Conditions checkbox

#### Scenario: Checked terms does not show error

- **WHEN** the user checks the Terms and Conditions checkbox and submits
  (with all other fields valid)
- **THEN** no Terms validation error SHALL appear

### Requirement: Clear field error on typing

When a validation error is showing for a field, typing into that field SHALL
clear the error for that specific field.

#### Scenario: Typing clears name error

- **WHEN** a validation error is displayed for the Name field
- **AND** the user types into the Name field
- **THEN** the Name validation error SHALL disappear

#### Scenario: Typing clears email error

- **WHEN** a validation error is displayed for the Email field
- **AND** the user types into the Email field
- **THEN** the Email validation error SHALL disappear

### Requirement: Successful form submission

Submitting the form with all valid data SHALL show a success state (e.g.,
success message or visual confirmation).

#### Scenario: Valid submission shows success

- **WHEN** the user enters valid Name, Email, Password, matching Re-type
  Password, checks Terms, and clicks "Register"
- **THEN** a success message or confirmation SHALL be displayed

### Requirement: Component Dock footer

The template SHALL include a footer with a link to
https://www.componentdock.com/ (branded "Component Dock").

#### Scenario: Footer link present

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer with a link to Component Dock is visible

## Verification Checklist

- [ ] Page renders with `#f8fafb` background
- [ ] Two-column layout (social left, form right) with center divider
- [ ] "Or register with" text visible in left column
- [ ] Facebook social button (`#3b5998`) renders
- [ ] Twitter social button (`#1da1f2`) renders
- [ ] Google social button (`#ea4335`) renders
- [ ] "— or —" divider visible between columns
- [ ] White registration card with drop shadow renders
- [ ] "Register" heading and subtitle visible
- [ ] Name, Email, Password, Re-type Password inputs render (underline style)
- [ ] Terms and Conditions checkbox renders unchecked
- [ ] "Sign In" link visible in muted text
- [ ] "Register" pill button (`#38d39f`, border-radius 30px) renders
- [ ] Empty submit shows all validation errors
- [ ] Invalid email shows email error
- [ ] Short password shows password error
- [ ] Mismatched passwords show error
- [ ] Unchecked terms shows terms error
- [ ] Typing into a field clears its error
- [ ] Valid submission shows success state
- [ ] Component Dock footer link present
- [ ] Responsive: stacks vertically on mobile
