# Spec: Formloom — Student Registration Form Template

## Purpose

Formloom is a student registration form template recreating the Colorlib Reg Form V15 design (colorlib-regform-15) under a new, original name. The template features a split-layout design with a hero image on the left and a comprehensive student registration form on the right, set against a dark charcoal background.

## Requirements

### Requirement: Split-layout hero with image and form card

The template SHALL display a split-layout hero section with a hero image occupying the left half and a white form card occupying the right half of the viewport.

#### Scenario: Hero image is displayed on the left

- **WHEN** the page loads
- **THEN** an image SHALL be visible on the left side of the layout
- **AND** the image SHALL use a picsum.photos placeholder

#### Scenario: Form card is displayed on the right

- **WHEN** the page loads
- **THEN** a white card containing the registration form SHALL be visible on the right side

### Requirement: Student Registration Form with all fields

The template SHALL render a student registration form with the following fields: Name (required text input), Father Name (text input), Address (text input), Gender (radio buttons: Male/Female), State (dropdown), City (dropdown), DOB (date input), Pincode (text input), Course (dropdown), and Email ID (email input).

#### Scenario: All form fields are present

- **WHEN** the page loads
- **THEN** the Name, Father Name, Address, DOB, Pincode, and Email ID text/date inputs SHALL be visible
- **AND** the State, City, and Course dropdowns SHALL be visible
- **AND** the Male and Female radio buttons SHALL be visible with Male selected by default

#### Scenario: Gender radio button selection

- **WHEN** the user clicks the Female radio button
- **THEN** Female SHALL be selected
- **AND** Male SHALL be deselected

### Requirement: Form submission and reset behavior

The template SHALL support form submission (displaying a success message) and form reset (clearing state).

#### Scenario: Successful form submission

- **WHEN** the user fills in the Name field and clicks Submit Form
- **THEN** a success message "Registration submitted successfully!" SHALL be displayed
- **AND** the form fields SHALL be hidden

#### Scenario: Submit Another after success

- **WHEN** the form is submitted and the success message is shown
- **THEN** a "Submit Another" button SHALL be visible
- **AND** clicking it SHALL return to the form view

#### Scenario: Reset All button

- **WHEN** the user clicks Reset All
- **THEN** the form state SHALL be reset

### Requirement: Navbar with site name and dark mode toggle

The template SHALL display a navbar with the site name "Formloom", a Home link, and a dark mode toggle button.

#### Scenario: Navbar elements are present

- **WHEN** the page loads
- **THEN** the text "Formloom" SHALL be visible in the navbar
- **AND** a "Home" link SHALL be present
- **AND** a dark mode toggle button SHALL be present

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the document root SHALL have the "dark" class
- **AND** clicking again SHALL remove the "dark" class

### Requirement: Footer with Component Dock link

The template SHALL display a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ SHALL be visible in the footer
- **AND** the link text SHALL contain "Component Dock"

### Requirement: Design tokens matching original

The template SHALL use a dark charcoal background (#2d2d2d), white form card, orange submit button (#e67e22), and Inter font family via Google Fonts.

#### Scenario: Brand colors are applied

- **WHEN** the page loads
- **THEN** the page background SHALL be dark charcoal
- **AND** the submit button SHALL be orange
