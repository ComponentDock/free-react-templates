# Template: ReachForm (Contact Form)

## Purpose

ReachForm is a centered contact form template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Contact Form V2"
free template (source: https://colorlib.com/wp/template/contact-form-v2/),
built under a DIFFERENT name (**ReachForm**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a full-page contact form with a mountain landscape background
image overlaid with a pink-to-coral gradient. A centered white card contains
the form with three fields (Name, Email, Message) using underline-style inputs
and a gradient submit button. The title uses a serif/display font.

## Design Tokens

- **Font Family (title):** Playfair Display, serif (display heading)
- **Font Family (body):** DM Sans, sans-serif (labels, inputs, button)
- **Background:** Mountain landscape image with pink-coral gradient overlay
  - Gradient: linear-gradient from `#e84393` (pink) to `#fd7e14` (coral-orange)
  - Image: picsum.photos seeded placeholder (mountain landscape)
- **Card:** White `#ffffff`, rounded corners (8px), subtle shadow
- **Title:** Dark charcoal `#2d3748`, bold, centered
- **Input labels:** Gray uppercase `#999999`, small text
- **Input borders:** Light gray `#dddddd` (default), pink `#e84393` (focused)
- **Button:** Pink-to-coral gradient, white text, rounded (4px)
- **Spacing:** Generous card padding (40px+)

## Requirements

### Requirement 1: Page Layout

The page shall display a full-viewport background with a mountain landscape
image overlaid with a pink-to-coral gradient. A centered white card sits on top
containing the contact form.

#### Scenario: User views the page on initial load

- **WHEN** the user opens the application
- **THEN** the page shows a full-bleed background image with gradient overlay
- **AND** a centered white card with the contact form is visible

### Requirement 2: Contact Form Title

The form card shall display a bold serif heading "Contact Us".

#### Scenario: User sees the form title

- **WHEN** the page loads
- **THEN** the heading "Contact Us" is visible in the form card

### Requirement 3: Form Fields

The form shall contain three fields: Name (text input), Email (email input),
and Message (textarea). All fields use underline-style borders.

#### Scenario: User sees all form fields

- **WHEN** the page loads
- **THEN** a Name input field is visible
- **AND** an Email input field is visible
- **AND** a Message textarea is visible

#### Scenario: User types in the Name field

- **WHEN** the user clicks the Name input and types "Kevin Nguyen"
- **THEN** the Name field shows "Kevin Nguyen"

#### Scenario: User types in the Email field

- **WHEN** the user clicks the Email input and types "test@example.com"
- **THEN** the Email field shows "test@example.com"

#### Scenario: User types in the Message field

- **WHEN** the user clicks the Message textarea and types "Hello there!"
- **THEN** the Message textarea shows "Hello there!"

### Requirement 4: Submit Button

The form shall have a "Send Your Message" submit button with a pink-coral
gradient background.

#### Scenario: User sees the submit button

- **WHEN** the page loads
- **THEN** a button labeled "Send Your Message" is visible

#### Scenario: User submits the form

- **WHEN** the user clicks "Send Your Message"
- **THEN** a thank-you confirmation message is displayed
- **AND** the form fields are hidden

### Requirement 5: Thank You State

After form submission, the card shall show a thank-you message with a "Send
another message" reset link.

#### Scenario: User sees thank-you after submission

- **WHEN** the form is submitted
- **THEN** the card shows "Thank You!" heading
- **AND** the card shows a confirmation message

#### Scenario: User resets the form

- **WHEN** the user clicks "Send another message" after submission
- **THEN** the form is shown again with empty fields

### Requirement 6: Footer

The page shall include a footer linking to Component Dock.

#### Scenario: User sees the footer

- **WHEN** the page loads
- **THEN** a footer with a "Component Dock" link to https://www.componentdock.com/ is visible
