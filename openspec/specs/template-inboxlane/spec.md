# Spec: InboxLane — Contact Form with Map

> Recreation of ColorLib Contact Form 18 (https://colorlib.com/wp/template/contact-form-18/)

## Purpose

InboxLane is a two-column contact form template with a dark-themed map section. It provides a clean, professional way for visitors to send messages, with form validation and a responsive layout.

## Requirements

### Requirement: Contact form renders with correct fields

The page SHALL display a two-column contact form with fields for Name, Email, Phone, Company, and Message.

#### Scenario: Form renders all fields

- **WHEN** the page loads
- **THEN** the heading "Send us a message" is visible
- **AND** fields for Name, Email, Phone, Company, and Message are present
- **AND** Name, Email, and Message are marked as required

### Requirement: Form validates required fields

The form SHALL prevent submission when required fields are empty and display validation errors.

#### Scenario: Submitting empty form shows errors

- **WHEN** the user clicks "Send Message" without filling any fields
- **THEN** error messages appear for Name, Email, and Message

#### Scenario: Invalid email shows error

- **WHEN** the user enters an invalid email address and submits
- **THEN** an "Invalid email" error message is shown

### Requirement: Form submits with valid data

The form SHALL call the onSubmit handler with form data when all required fields pass validation.

#### Scenario: Successful submission

- **WHEN** the user fills Name, Email, and Message with valid data and clicks "Send Message"
- **THEN** the onSubmit callback is invoked with the entered data
- **AND** a success confirmation message is displayed

### Requirement: Map section renders alongside form

The page SHALL display a dark-themed map section to the right of the form.

#### Scenario: Map renders

- **WHEN** the page loads
- **THEN** a map section with a location marker is visible
- **AND** the map displays a "My Co." label

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** the footer displays "More templates at Component Dock"
- **AND** the link points to https://www.componentdock.com/

### Requirement: Responsive layout

The template SHALL stack the form and map into a single column on mobile screens.

#### Scenario: Mobile layout

- **WHEN** the viewport width is less than 768px
- **THEN** the form takes full width and the map is hidden
