# Groove — Concert Registration Form

Recreation of ColorLib "Regform 35" (https://colorlib.com/wp/template/colorlib-regform-35/).

## Purpose

A free concert registration form template with a dark card over a blue background, semi-transparent inputs in a 2x2 grid, and a coral Register button.

## Requirements

### Requirement: Heading display

Users SHALL see a "Registration Form" heading centered above the form.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Registration Form" is displayed

### Requirement: Form fields

Users SHALL see four input fields: Name, Email, Password, and Confirm Password.

#### Scenario: All four fields are present

- **WHEN** the form renders
- **THEN** inputs for "Your Name", "Your Email", "Your Password", and "Confirm Password" exist

#### Scenario: Fields accept input

- **WHEN** a user types into any field
- **THEN** the field value updates accordingly

### Requirement: Form submission

Users SHALL be able to click Register without causing a page navigation.

#### Scenario: Submit prevented

- **WHEN** the user clicks the Register button
- **THEN** the form does not submit or navigate

### Requirement: Responsive layout

Users SHALL see inputs stack to a single column on small screens.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrow
- **THEN** inputs are displayed in a single column

### Requirement: Footer attribution

Users SHALL see a link to componentdock.com in the footer.

#### Scenario: Footer link present

- **WHEN** the page renders
- **THEN** a link to https://www.componentdock.com/ is visible with text "Component Dock"
