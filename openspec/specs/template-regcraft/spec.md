# Spec: Regcraft

## Purpose

Regcraft is a free class registration form template recreating ColorLib "Reg Form V1"
(https://colorlib.com/wp/template/colorlib-regform-1/). It features a centered white card
with a grayscale cityscape header image, a "Registration Info" form with five fields
(Name, Birthdate, Gender, Class, Registration Code), and a green Submit button, all
on a solid blue (#2563eb) background.

## Requirements

### Requirement: Page layout

The page SHALL render a full-height solid blue (#2563eb) background with a single centered white card.

#### Scenario: Card is centered on the blue background

- **WHEN** I visit the Regcraft page
- **THEN** I see a white card centered horizontally and vertically on a blue background
- **AND** the card has rounded corners and a drop shadow

### Requirement: Card header image

The card SHALL display a grayscale cityscape photograph as a header banner above the form.

#### Scenario: Grayscale header image is visible

- **WHEN** I visit the Regcraft page
- **THEN** I see a cityscape image inside the card
- **AND** the image has a grayscale filter applied

### Requirement: Registration form heading

The card SHALL display the heading "Registration Info" above the form fields.

#### Scenario: Heading is visible

- **WHEN** I visit the Regcraft page
- **THEN** I see a heading with text "Registration Info"

### Requirement: Form fields

The form SHALL contain five fields: Name (text input), Birthdate (date input), Gender (select), Class (select), and Registration Code (text input).

#### Scenario: All five fields are rendered

- **WHEN** I visit the Regcraft page
- **THEN** I see a text input labeled "Name"
- **AND** I see a date input labeled "Birthdate"
- **AND** I see a select element labeled "Gender"
- **AND** I see a select element labeled "Class"
- **AND** I see a text input labeled "Registration Code"

#### Scenario: Fields have underline-style borders

- **WHEN** I visit the Regcraft page
- **THEN** each form field has a bottom border only (no full border box)

### Requirement: Submit button

The form SHALL contain a green Submit button that triggers form submission.

#### Scenario: Submit button is visible and styled green

- **WHEN** I visit the Regcraft page
- **THEN** I see a "Submit" button with a green background

#### Scenario: Submitting the form shows a success message

- **WHEN** I click the Submit button
- **THEN** I see a "Registration submitted successfully" message
- **AND** the form fields are no longer visible

### Requirement: Dark mode toggle

The navbar SHALL include a dark-mode toggle button.

#### Scenario: Toggling dark mode changes the background

- **WHEN** I click the "Dark mode" button in the navbar
- **THEN** the document root receives the "dark" class
- **AND** the button label changes to "Light mode"

#### Scenario: Dark class is removed on unmount

- **WHEN** I enable dark mode and then unmount the navbar
- **THEN** the "dark" class is removed from the document root

### Requirement: Footer with Component Dock link

The page SHALL display a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present and opens externally

- **WHEN** I visit the Regcraft page
- **THEN** I see a footer with a link to "Component Dock"
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Document title

The page SHALL set the document title to "Regcraft — Registration Form Template".

#### Scenario: Title is set on mount

- **WHEN** I visit the Regcraft page
- **THEN** the document title is "Regcraft — Registration Form Template"
