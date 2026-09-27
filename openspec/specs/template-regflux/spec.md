# Regflux — Registration Form Template

## Purpose

Recreation of ColorLib Regform 14 (https://colorlib.com/wp/template/colorlib-regform-14/).
A centered registration form on a light blue background with gender toggle buttons,
collapsible additional info section, and clean uppercase labels.

## Requirements

### Requirement: Form renders all required fields

The registration form SHALL display First Name, Last Name, Birth Date, Gender toggle
(Male/Female), Phone Number, Password, and Repeat Your Password fields.

#### Scenario: All fields are visible on initial render

- **WHEN** I render the Regflux registration form
- **THEN** I see a "First Name" text input
- **AND** I see a "Last Name" text input
- **AND** I see a "Birth Date" date input
- **AND** I see a "Phone Number" telephone input
- **AND** I see a "Password" password input
- **AND** I see a "Repeat Your Password" password input
- **AND** I see a "Submit" button

### Requirement: Gender toggle selection

The form SHALL provide Male and Female toggle buttons for gender selection.

#### Scenario: Selecting a gender highlights the chosen button

- **WHEN** I render the Regflux registration form
- **AND** I click the "Male" button
- **THEN** the "Male" button is highlighted with the accent color
- **WHEN** I click the "Female" button
- **THEN** the "Female" button is highlighted
- **AND** the "Male" button is no longer highlighted

### Requirement: Collapsible additional info section

The form SHALL provide a collapsible "Additional Info" section with Address and City fields.

#### Scenario: Additional info expands on click

- **WHEN** I render the Regflux registration form
- **THEN** I do not see an "Address" field
- **WHEN** I click the "Additional Info" toggle
- **THEN** I see an "Address" text input
- **AND** I see a "City" text input

#### Scenario: Additional info collapses on second click

- **WHEN** I render the Regflux registration form
- **AND** I click the "Additional Info" toggle
- **AND** I click the "Additional Info" toggle again
- **THEN** I do not see an "Address" field

### Requirement: Form submission shows confirmation

The form SHALL display a success message when submitted.

#### Scenario: Submitting the form shows confirmation

- **WHEN** I render the Regflux registration form
- **AND** I click the "Submit" button
- **THEN** I see a "Registration submitted" confirmation message
- **AND** the form fields are no longer visible
