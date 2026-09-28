# Template: Joinbox (Signup Registration Form)

## Purpose

Joinbox is a single-page split-layout SIGNUP REGISTRATION FORM in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Signup Form 02" free template (source:
https://colorlib.com/wp/template/signup-form-02/), built under a
DIFFERENT name (**Joinbox**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based two-panel registration form: left panel
has a #f6f7fc background with a centered form containing seven fields
(First Name, Last Name, Email, Phone, Website, Password, Re-type
Password) in a mix of single/double column layout, an orange (#fb771a)
"Register" button, and a terms checkbox. The right panel shows a cover
background image. Font is Roboto (weights 300, 400). On mobile the layout
stacks vertically (image on top, form below).

## Requirements

### Requirement: Split-layout page structure

The page SHALL render a full-height split layout with the form panel on
the left (#f6f7fc background) and a background image panel on the right.
On viewports below md breakpoint the layout SHALL stack vertically with
the image panel on top (200px height) and the form panel below.

#### Scenario: Desktop layout renders two panels side by side

- **WHEN** the page loads on a viewport wider than 768px
- **THEN** I see the form panel on the left and the image panel on the right

#### Scenario: Mobile layout stacks panels vertically

- **WHEN** the page loads on a viewport narrower than 768px
- **THEN** I see the image panel on top and the form panel below

### Requirement: Registration form with seven fields

The form SHALL contain seven input fields: First Name (text), Last Name
(text), Email Address (email), Phone Number (text, optional), Website
(text, optional), Password (password), Re-type Password (password). Fields
SHALL be arranged in a responsive grid: First Name + Last Name in a row,
Email full width, Phone + Website in a row, Password + Re-type Password
in a row.

#### Scenario: All seven fields render with correct placeholders

- **WHEN** the page loads
- **THEN** I see inputs with placeholders "e.g. John", "e.g. Smith",
  "e.g. john@your-domain.com", "+00 0000 000 0000", "e.g. https://google.com",
  and two inputs with "Your Password"

### Requirement: Form validation

The form SHALL validate required fields (First Name, Last Name, Email,
Password, Re-type Password) and enforce email format and minimum 8
character password length. Password and Re-type Password SHALL match.
The terms checkbox SHALL be required.

#### Scenario: Empty form submission shows all required errors

- **WHEN** I click Register with all fields empty
- **THEN** I see errors for First name, Last name, Email, Password, and
  Re-type Password

#### Scenario: Invalid email shows format error

- **WHEN** I enter "not-an-email" in the Email field and submit
- **THEN** I see "Invalid email format"

#### Scenario: Short password shows length error

- **WHEN** I enter "short" in the Password field and submit
- **THEN** I see "Password must be at least 8 characters"

#### Scenario: Password mismatch shows error

- **WHEN** I enter different values in Password and Re-type Password and submit
- **THEN** I see "Passwords do not match"

#### Scenario: Unchecked terms shows error

- **WHEN** I uncheck the terms checkbox and submit
- **THEN** I see "You must agree to the terms"

### Requirement: Successful submission state

When all fields pass validation, the form SHALL replace itself with a
success message "You're all set!" and a CircleCheck icon.

#### Scenario: Valid form shows success

- **WHEN** I fill all required fields correctly with matching passwords
  and submit
- **THEN** I see "You're all set!" and the form is no longer visible

### Requirement: Footer with Component Dock branding

The page SHALL render a footer with a link to https://www.componentdock.com/
labeled "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** I see a footer link to "https://www.componentdock.com/" labeled
  "Component Dock" with target="_blank"
