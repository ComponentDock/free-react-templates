# template-talkwell

## Purpose

Recreation of ColorLib "Contact Form 20" (https://colorlib.com/wp/template/contact-form-20/) as a React + Tailwind CSS template. A centered white card contact form on light gray background with "Let's Talk" heading, two-column Name/Email row, Subject, Message textarea, and blue pill submit button.

## Design Tokens (extracted from screenshot)

- Page background: #f5f5f5 (light gray)
- Card: white (#ffffff) with box-shadow
- Heading: dark (#333), large sans-serif (Poppins via Google Fonts)
- Labels: #999 gray, small size
- Input borders: light gray (#ccc) bottom-border only
- Button background: #5c6bc0 (indigo/blue)
- Button text: white, uppercase, letter-spacing
- Button shape: pill (full rounded corners)
- Font family: Poppins, sans-serif (Google Fonts)

## Structure

1. Full-page container with light gray background
2. Centered white card (~50% width, generous padding, box-shadow)
3. "Let's Talk" heading (centered, large)
4. Two-column row: Name input (left) + Email input (right), each with floating label and bottom border
5. Subject input (full width, bottom border)
6. Message textarea (full width, bottom border)
7. "SEND MESSAGE" pill button (centered, indigo/blue)
8. Footer linking to Component Dock

## Requirements

### Requirement: Page renders centered card with heading

The page SHALL display a centered white card on a light gray background with a "Let's Talk" heading.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the heading "Let's Talk" is rendered inside a centered card

#### Scenario: Card has white background

- **WHEN** the page loads
- **THEN** the card container has a white background

### Requirement: Form renders all required fields

The contact form SHALL include Name, Email, Subject, and Message fields plus a submit button.

#### Scenario: Name input exists

- **WHEN** the form is rendered
- **THEN** an input labeled "Name" with placeholder "Your name" is visible

#### Scenario: Email input exists

- **WHEN** the form is rendered
- **THEN** an input labeled "Email" with placeholder "Your email" is visible

#### Scenario: Subject input exists

- **WHEN** the form is rendered
- **THEN** an input labeled "Subject" with placeholder "Your subject" is visible

#### Scenario: Message textarea exists

- **WHEN** the form is rendered
- **THEN** a textarea labeled "Message" with placeholder "Write your message" is visible

#### Scenario: Submit button exists

- **WHEN** the form is rendered
- **THEN** a button labeled "SEND MESSAGE" is visible

### Requirement: Form accepts user input

The form fields SHALL accept typed input and update their values.

#### Scenario: User types in Name

- **WHEN** the user types "John" in the Name field
- **THEN** the field value is "John"

#### Scenario: User types in Email

- **WHEN** the user types "john@example.com" in the Email field
- **THEN** the field value is "john@example.com"

#### Scenario: User types in Subject

- **WHEN** the user types "Hello" in the Subject field
- **THEN** the field value is "Hello"

#### Scenario: User types in Message

- **WHEN** the user types "Hi there" in the Message field
- **THEN** the field value is "Hi there"

### Requirement: Form submission shows success message

The form SHALL prevent default submission and display a success message.

#### Scenario: Success message appears after submit

- **WHEN** the user clicks "SEND MESSAGE"
- **THEN** the text "Your message was sent, thank you!" is displayed

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link target

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" with text "Component Dock"
