# Spec: Regmark — Registration Form Template

## Purpose

A clean, centered registration form with user type selection, built with
React 19, Tailwind CSS 4, and TypeScript. Recreates ColorLib Regform 10
under a different name.

**Source:** https://preview.colorlib.com/theme/colorlib-regform-10/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-10.jpg

## Requirements

### Requirement: Page Structure

The template SHALL render a full-viewport registration page with a light blue-gray background, a centered white card, and a "Component Dock" footer.

#### Scenario: Initial page load

- **WHEN** the page loads
- **THEN** the document title is "Regmark — Registration Form Template"
- **AND** a main landmark is present
- **AND** a banner (header) landmark is present
- **AND** a contentinfo (footer) landmark is present

### Requirement: User Type Selection

The form SHALL display three user type options as pill buttons, with "New bee" selected by default.

#### Scenario: Default selection

- **WHEN** the page loads
- **THEN** "New bee" has aria-pressed="true"
- **AND** "Average" has aria-pressed="false"
- **AND** "Master" has aria-pressed="false"

#### Scenario: Switching user type

- **WHEN** I click "Average"
- **THEN** "Average" has aria-pressed="true"
- **AND** "New bee" has aria-pressed="false"

### Requirement: Registration Form Fields

The form SHALL include Full name, Email, and Password fields with bottom-border styling.

#### Scenario: Form fields present

- **WHEN** the page loads
- **THEN** a "Full name" input is present
- **AND** an "Email" input is present
- **AND** a "Password" input is present

### Requirement: Terms Agreement

The form SHALL include a checkbox for terms agreement and a "Terms of service" link.

#### Scenario: Terms checkbox present

- **WHEN** the page loads
- **THEN** a checkbox labeled "Terms of service" is present
- **AND** a "Terms of service" link is present

### Requirement: Form Submission

The form SHALL only submit when all required fields are filled and terms are agreed.

#### Scenario: Successful submission

- **WHEN** I fill in Full name, Email, and Password
- **AND** I check the terms checkbox
- **AND** I click "Create account"
- **THEN** a success message appears
- **AND** the form is hidden

#### Scenario: Submission without terms

- **WHEN** I fill in all fields but do not check terms
- **AND** I click "Create account"
- **THEN** no success message appears

### Requirement: Login Link

The card SHALL display an "Already have an account? Log in" link.

#### Scenario: Login link present

- **WHEN** the page loads
- **THEN** a "Log in" link is present

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: Dark Mode

The navbar SHALL include a dark mode toggle.

#### Scenario: Toggle dark mode

- **WHEN** I click "Dark mode"
- **THEN** the document root gains the "dark" class
- **AND** the button text changes to "Light mode"
