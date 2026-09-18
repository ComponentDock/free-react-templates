# Template: JotDown (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V19** — a centered single-column contact
form overlaying a muted map background, with an email input field (envelope
icon), a message textarea, and a rectangular blue submit button.

- **Source slug:** `contact-form-v19`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v19/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v19/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the ColorLib screenshot:

| Token                  | Value                               | Notes                      |
| ---------------------- | ----------------------------------- | -------------------------- |
| Primary / brand color  | `#3563e9` (vivid blue)              | Submit button, links       |
| Brand hover            | `#2948b8` (darker blue)             | Button hover state         |
| Background image       | `picsum.photos/seed/jotdown-map`    | Seeded placeholder for map |
| Background overlay     | `#e8edf5` at 70% opacity + multiply | Muted blue-gray tint       |
| Card background        | `#ffffff`                           | White centered card        |
| Card shadow            | `shadow-xl` (Tailwind)              | Subtle drop shadow         |
| Text (headings)        | `#2d3748` (dark gray)               | Bold headings              |
| Text (placeholders)    | `#a0aec0` (gray-400)                | Input placeholders         |
| Input border           | `#e2e8f0` (gray-200)                | Light gray outline         |
| Button background      | `#3563e9` (primary blue)            | "SEND MESSAGE" button      |
| Button text            | `#ffffff`                           | White button label         |
| Icon color             | `#a0aec0` (gray-400)                | Left-side envelope icon    |
| Font family            | `"DM Sans", sans-serif`             | Clean sans-serif           |
| Border radius (card)   | `8px` (rounded-lg)                  | Rounded card corners       |
| Border radius (button) | `0` (rounded)                       | Rectangular submit button  |

## Requirements

### Requirement: Page layout

The page SHALL render a full-page map background image with a muted blue-gray
overlay and a centered white contact form card.

#### Scenario: Map background

- **WHEN** I visit the JotDown page
- **THEN** a full-viewport background image SHALL be displayed covering the
  entire page

#### Scenario: Muted overlay

- **WHEN** I view the background
- **THEN** the image SHALL have a muted blue-gray tint overlay

### Requirement: Contact form card

The form SHALL be rendered in a centered white card with a heading, email input,
message textarea, and submit button.

#### Scenario: Centered white card

- **WHEN** I visit the JotDown page
- **THEN** a white card SHALL be centered on the page with a drop shadow

#### Scenario: Form heading

- **WHEN** I view the card
- **THEN** a heading SHALL display "Send Us A Message" at the top of the card

#### Scenario: Email input

- **WHEN** I view the form
- **THEN** an email input SHALL be visible with an envelope icon and the
  placeholder "Your Email Address"

#### Scenario: Message textarea

- **WHEN** I view the form
- **THEN** a textarea SHALL be visible with the placeholder "How Can We Help?"

#### Scenario: Submit button

- **WHEN** I view the form
- **THEN** a rectangular blue button SHALL display "SEND MESSAGE" in uppercase

### Requirement: Form interaction

The form SHALL support controlled input and submission with a confirmation view.

#### Scenario: Typing in email field

- **WHEN** I type "user@example.com" in the email input
- **THEN** the input SHALL display "user@example.com"

#### Scenario: Typing in message field

- **WHEN** I type "Hello there!" in the textarea
- **THEN** the textarea SHALL display "Hello there!"

#### Scenario: Form submission

- **WHEN** I click the "Send Message" button
- **THEN** the form SHALL be replaced with a "Thank You!" confirmation message

#### Scenario: Reset after submission

- **WHEN** I click "Send another message" after submission
- **THEN** the form SHALL reappear with empty fields

### Requirement: Footer

The page SHALL display a footer linking to Component Dock.

#### Scenario: Footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** a "Made with Component Dock" link SHALL be visible pointing to
  https://www.componentdock.com/
