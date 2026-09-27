# Regpilot

## Purpose

Registration form template with a split-panel layout: a hero image on the left, and a registration form on the right featuring name fields, username, email, gender select, password confirmation, and a register button.

Recreation of ColorLib "Colorlib Regform 17" (https://colorlib.com/wp/template/colorlib-regform-17/).

## Requirements

### Requirement: Split-panel card layout

The template SHALL display a centered white card with a split layout on desktop: a hero image panel on the left, and the registration form on the right. On mobile, the layout SHALL stack vertically with the image hidden.

#### Scenario: Desktop layout

- **WHEN** the user opens the Regpilot page on a desktop viewport
- **THEN** the hero image panel occupies the left half of the card
- **AND** the registration form occupies the right half

#### Scenario: Mobile layout

- **WHEN** the user opens the Regpilot page on a mobile viewport
- **THEN** the hero image panel is hidden
- **AND** the registration form is displayed full-width

### Requirement: Hero image panel

The hero panel SHALL display a placeholder image with a semi-transparent overlay and a text overlay reading "#Collection 2024".

#### Scenario: Hero displays correctly

- **WHEN** the user views the hero panel
- **THEN** a placeholder image is displayed
- **AND** the text "#Collection 2024" is visible in white

### Requirement: Registration form fields

The form SHALL contain the following fields: First Name (required, text), Last Name (required, text), Username (required, text with user icon), Email Address (required, email with mail icon), Gender (required, select dropdown), Password (required, password with lock icon), Confirm Password (required, password with lock icon).

#### Scenario: All fields are rendered

- **WHEN** the user views the registration form
- **THEN** the heading "Registration Form" is visible
- **AND** input fields for First Name, Last Name, Username, Email Address, Password, and Confirm Password are present
- **AND** a select field for Gender is present
- **AND** a "Register" button is visible

### Requirement: Form submission with validation

The form SHALL validate that all required fields are filled and that Password matches Confirm Password before submitting.

#### Scenario: Successful registration

- **WHEN** all required fields are filled correctly and passwords match
- **AND** the user clicks "Register"
- **THEN** a thank-you confirmation message is shown

#### Scenario: Password mismatch error

- **WHEN** the Password field is "abc123" and the Confirm Password field is "xyz789"
- **AND** the user clicks "Register"
- **THEN** an error message "Passwords do not match" is displayed

#### Scenario: Empty fields prevent submission

- **WHEN** the form is empty
- **AND** the user clicks "Register"
- **THEN** the form remains visible without a confirmation message

### Requirement: Background

The template SHALL display a light gray (#e8e8e8) background filling the full viewport.

#### Scenario: Background renders correctly

- **WHEN** the user loads the page
- **THEN** a light gray background is visible behind the card

### Requirement: Component Dock footer

The footer SHALL link to https://www.componentdock.com/ with the text "Made with Component Dock".

#### Scenario: Footer displays correctly

- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"
