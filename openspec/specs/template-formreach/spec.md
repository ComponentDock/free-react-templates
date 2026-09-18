# template-formreach

## Purpose

Recreation of ColorLib "Contact Form 11" (https://colorlib.com/wp/template/contact-form-11/) as a React + Tailwind CSS template. A minimal two-column contact form with bold typography and bottom-border-only inputs.

## Requirements

### Requirement: Page renders main heading and two-column layout

The page SHALL display a prominent "Fill the form. It's easy." heading and a two-column layout (form on left, sidebar on right).

#### Scenario: Main heading is visible

- **WHEN** the page loads
- **THEN** the heading "Fill the form" is rendered

### Requirement: Form renders all required fields

The contact form SHALL include first name, last name, email, and message fields, plus a submit button.

#### Scenario: First name and last name fields exist

- **WHEN** the form is rendered
- **THEN** inputs with placeholders "First name" and "Last name" are visible

#### Scenario: Email field exists

- **WHEN** the form is rendered
- **THEN** an input with placeholder "Email" is visible

#### Scenario: Message textarea exists

- **WHEN** the form is rendered
- **THEN** a textarea with placeholder "Write your message" is visible

#### Scenario: Submit button exists

- **WHEN** the form is rendered
- **THEN** a button labeled "Send Message" is visible

### Requirement: Form accepts user input

The form fields SHALL accept typed input and update their values.

#### Scenario: User types in first name

- **WHEN** the user types "John" in the first name field
- **THEN** the field value is "John"

#### Scenario: User types in last name

- **WHEN** the user types "Doe" in the last name field
- **THEN** the field value is "Doe"

#### Scenario: User types in email

- **WHEN** the user types "john@example.com" in the email field
- **THEN** the field value is "john@example.com"

#### Scenario: User types in message

- **WHEN** the user types "Hello" in the message field
- **THEN** the field value is "Hello"

### Requirement: Form submission shows success message

The form SHALL prevent default submission and display a success message.

#### Scenario: Success message appears after submit

- **WHEN** the user clicks "Send Message"
- **THEN** the text "Your message was sent, thank you!" is displayed

### Requirement: Sidebar displays descriptive content

The right column SHALL display a heading, paragraph, and "Read more" link.

#### Scenario: Sidebar heading is visible

- **WHEN** the page loads
- **THEN** the heading "Let's talk about everything" is rendered

#### Scenario: Sidebar link is present

- **WHEN** the page loads
- **THEN** a link labeled "Read more" is visible

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link target

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" with text "Component Dock"
