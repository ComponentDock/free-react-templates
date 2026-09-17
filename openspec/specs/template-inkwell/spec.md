## Purpose

Inkwell is a minimalist two-column contact form template designed for marketing agencies and web service providers. It provides a clean, professional contact page with separate first/last name fields, email, and message inputs alongside an introductory text column.

## Requirements

### Requirement: Two-column layout

The template SHALL display a two-column layout on desktop (≥768px) with an introductory text column on the left and a contact form card on the right. On mobile (<768px), the columns SHALL stack vertically.

#### Scenario: Desktop layout shows two columns

- **WHEN** the viewport width is ≥768px
- **THEN** the intro text and form card are displayed side by side

#### Scenario: Mobile layout stacks columns

- **WHEN** the viewport width is <768px
- **THEN** the intro text and form card are stacked vertically

### Requirement: Intro text column

The left column SHALL contain a heading "Get in Touch", descriptive text about the service, and a note about response time.

#### Scenario: Heading and text are visible

- **WHEN** the page loads
- **THEN** a heading "Get in Touch" is visible
- **AND** descriptive text about hearing from the user is visible
- **AND** a note about 24-hour response time is visible

### Requirement: Contact form with four fields

The form SHALL contain four controlled fields: First Name (text), Last Name (text), Email (email), and Message (textarea). Each field SHALL have a visible placeholder and an sr-only label for accessibility.

#### Scenario: User fills first name

- **WHEN** the user types "Jane" in the First Name field
- **THEN** the First Name field value is "Jane"

#### Scenario: User fills last name

- **WHEN** the user types "Doe" in the Last Name field
- **THEN** the Last Name field value is "Doe"

#### Scenario: User fills email

- **WHEN** the user types "jane@example.com" in the Email field
- **THEN** the Email field value is "jane@example.com"

#### Scenario: User fills message

- **WHEN** the user types "Hello there!" in the Message field
- **THEN** the Message field value is "Hello there!"

### Requirement: Form submission

The form SHALL prevent default submission (no page reload) when the submit button is clicked.

#### Scenario: Submit does not reload page

- **WHEN** the user fills all fields and clicks "Send Message"
- **THEN** the form submission is handled without page reload

### Requirement: Accessible form

The form SHALL have an aria-label "Contact form" and each field SHALL have a sr-only label for screen readers.

#### Scenario: Form has accessible landmark

- **WHEN** the page loads
- **THEN** a form with aria-label "Contact form" is present

### Requirement: Footer with Component Dock link

The template SHALL display a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link opens in new tab

- **WHEN** the user views the footer
- **THEN** a link to "Component Dock" pointing to https://www.componentdock.com/ is visible
- **AND** the link opens in a new tab

### Requirement: Design tokens

The template SHALL use a blue brand color (#4a90d9), light gray page background (#f5f7fa), white card backgrounds, and the Inter font family.

#### Scenario: Brand color is applied

- **WHEN** the page loads
- **THEN** the submit button has a blue background color

#### Scenario: Page has light background

- **WHEN** the page loads
- **THEN** the page background is a light gray
