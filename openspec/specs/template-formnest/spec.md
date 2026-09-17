# Formnest — Contact Form Template

## Purpose

Formnest is a split-screen contact form template for marketing agencies and
freelancers. It features an olive green background with a text panel on the
left and a white form card on the right. The design recreates ColorLib
Contact Form 14 under the original name "Formnest".

## Requirements

### Requirement: Page renders with split-screen layout

The page SHALL display a two-column layout on desktop with the text panel on
the left and the form card on the right, stacking vertically on mobile.

#### Scenario: Desktop layout

- **GIVEN** the user opens the page on a desktop viewport
- **WHEN** the page loads
- **THEN** the heading "Let's work together" is visible on the left
- **AND** the form card with "How can we help?" label is visible on the right

#### Scenario: Mobile layout

- **GIVEN** the user opens the page on a mobile viewport
- **WHEN** the page loads
- **THEN** the text panel appears above the form card

### Requirement: Contact information panel

The left panel SHALL display a heading, descriptive paragraphs, and an email
contact link.

#### Scenario: Heading renders

- **GIVEN** the page is loaded
- **WHEN** the user views the left panel
- **THEN** the heading "Let's work together" is displayed

#### Scenario: Email link

- **GIVEN** the page is loaded
- **WHEN** the user views the left panel
- **THEN** the email "info@mywebsite.com" is displayed as a mailto link

### Requirement: Contact form renders all fields

The form card SHALL contain fields for Name, Organization, Email, Project
Description, Budget, and Target Launch.

#### Scenario: Form fields present

- **GIVEN** the form card is visible
- **WHEN** the user inspects the form
- **THEN** the Name input with placeholder "Your name" is present
- **AND** the Organization input with placeholder "Your organization" is present
- **AND** the Email input with placeholder "Your email address" is present
- **AND** the Project Description textarea is present
- **AND** the Budget select dropdown is present with "Choose..." as default
- **AND** the Target Launch input with placeholder "Example: January 15th" is present

#### Scenario: Required fields marked

- **GIVEN** the form is rendered
- **WHEN** the user views the form labels
- **THEN** Name, Email, and Project Description are marked as required

### Requirement: Form submission

The form SHALL prevent default submission when the Send Message button is
clicked.

#### Scenario: Submit button works

- **GIVEN** the form is rendered
- **WHEN** the user clicks "Send Message"
- **THEN** the form submission is handled (default prevented)

### Requirement: Footer with Component Dock link

The page SHALL display a footer with a link to Component Dock.

#### Scenario: Footer renders

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" is present

### Requirement: User can fill form fields

The form SHALL allow the user to type in all text fields and select budget
options.

#### Scenario: Type in text fields

- **GIVEN** the form is rendered
- **WHEN** the user types in the Name field
- **THEN** the field value updates to reflect the typed text

#### Scenario: Select budget option

- **GIVEN** the form is rendered
- **WHEN** the user selects a budget option from the dropdown
- **THEN** the dropdown value updates to the selected option
