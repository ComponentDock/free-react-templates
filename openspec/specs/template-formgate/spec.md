# FormGate — Contact Form Template Spec

## Purpose

Minimalist single-page contact form recreating ColorLib "Contact Form 19"
under the original name **FormGate**. A centered white card on a light gray
background containing a "Get Started" heading and a clean form with
underline-style inputs, a budget dropdown, message textarea, and a coral
"SEND MESSAGE" button.

## Requirements

### Requirement: Renders all form fields

The form SHALL display Name, Email, Budget, and Message fields with a SEND MESSAGE submit button.

#### Scenario: All fields visible

- **GIVEN** the app has loaded
- **WHEN** the user views the form
- **THEN** the Name, Email, Budget, and Message fields are visible
- **AND** the SEND MESSAGE button is visible

### Requirement: Renders heading

The form SHALL display a "Get Started" heading above the form fields.

#### Scenario: Heading displayed

- **GIVEN** the app has loaded
- **WHEN** the user views the page
- **THEN** a "Get Started" heading is visible

### Requirement: Updates Name input

The Name field SHALL accept and display typed text.

#### Scenario: User types name

- **GIVEN** the form is displayed
- **WHEN** the user types "Alice" into the Name field
- **THEN** the Name field contains "Alice"

### Requirement: Updates Email input

The Email field SHALL accept and display typed email addresses.

#### Scenario: User types email

- **GIVEN** the form is displayed
- **WHEN** the user types "alice@example.com" into the Email field
- **THEN** the Email field contains "alice@example.com"

### Requirement: Updates Budget select

The Budget dropdown SHALL allow selecting from predefined budget ranges.

#### Scenario: User selects budget

- **GIVEN** the form is displayed
- **WHEN** the user selects "Low" from the Budget dropdown
- **THEN** the Budget dropdown shows "Low"

### Requirement: Updates Message textarea

The Message field SHALL accept and display typed text.

#### Scenario: User types message

- **GIVEN** the form is displayed
- **WHEN** the user types "Hello there" into the Message field
- **THEN** the Message field contains "Hello there"

### Requirement: Prevents default form submission

Clicking SEND MESSAGE SHALL prevent the browser's default form submission.

#### Scenario: Submit click

- **GIVEN** the form is displayed
- **WHEN** the user clicks the SEND MESSAGE button
- **THEN** the form does not navigate

### Requirement: Has underline-style inputs

All text inputs and the textarea SHALL use bottom-border underline styling.

#### Scenario: Input border style

- **GIVEN** the form is displayed
- **WHEN** the user inspects the Name input
- **THEN** it has a bottom border class

### Requirement: Has coral send button

The SEND MESSAGE button SHALL have a coral/salmon background color.

#### Scenario: Button color

- **GIVEN** the form is displayed
- **WHEN** the user inspects the SEND MESSAGE button
- **THEN** it has a coral background

### Requirement: Footer links to Component Dock

The footer SHALL display a "More templates at Component Dock" link pointing to componentdock.com.

#### Scenario: Footer link

- **GIVEN** the page is displayed
- **WHEN** the user scrolls to the footer
- **THEN** a "Component Dock" link is visible
- **AND** the link points to https://www.componentdock.com/
