# Sideframe — Right-side Contact Form Sidebar Template

## Purpose

Recreation of ColorLib Sidebar V04 — a right-side contact form panel on a deep purple/indigo background, with a chat toggle button and a left-hand blog post grid on a gray background.

## Requirements

### Requirement: Contact sidebar

The template SHALL render a right-side contact form sidebar with a deep purple (#4a3f6b) background, a "Get in touch" heading, name and email input fields, a message textarea, and a "SEND" submit button. The sidebar SHALL be toggleable via a chat icon button.

#### Scenario: Sidebar opens on chat toggle click

- **WHEN** the page loads and the sidebar is closed
- **THEN** a chat icon button is visible in the top-right corner
- **WHEN** the user clicks the chat icon button
- **THEN** the contact sidebar slides open from the right
- **AND** the heading "Get in touch" is visible
- **AND** the name input, email input, and message textarea are visible
- **AND** the SEND button is visible

#### Scenario: Sidebar closes on close button click

- **WHEN** the sidebar is open
- **THEN** a close (X) button is visible in the sidebar
- **WHEN** the user clicks the close button
- **THEN** the sidebar is hidden
- **AND** the chat toggle button reappears

#### Scenario: Chat toggle hidden when sidebar open

- **WHEN** the sidebar is open
- **THEN** the chat toggle button is not visible

### Requirement: Contact form inputs

The template SHALL provide contact form fields that accept text input: a name field, an email field, and a message textarea. The form SHALL prevent default browser submission.

#### Scenario: Name field accepts text

- **WHEN** the user types into the name input
- **THEN** the input field reflects the typed value

#### Scenario: Email field accepts text

- **WHEN** the user types into the email input
- **THEN** the input field reflects the typed value

#### Scenario: Message field accepts text

- **WHEN** the user types into the message textarea
- **THEN** the textarea reflects the typed value

### Requirement: Post grid

The template SHALL render a 2-column responsive grid of 8 blog post cards in the main content area. Each card SHALL display a thumbnail image, a title, and a posted date. The grid SHALL collapse to 1 column on mobile.

#### Scenario: Post cards render

- **WHEN** the page loads
- **THEN** 8 link elements are visible in the post grid
- **AND** each post card shows an image, a title, and a "Posted:" date line

#### Scenario: Responsive grid

- **WHEN** the viewport is narrower than 768px
- **THEN** the post grid displays in a single column

### Requirement: Footer

The template SHALL render a footer containing a "Made with Component Dock" line with a link to https://www.componentdock.com/.

#### Scenario: Footer renders with Component Dock link

- **WHEN** the page loads
- **THEN** the footer text "Made with" is visible
- **AND** a link labeled "Component Dock" points to https://www.componentdock.com/

### Requirement: Design tokens

The template SHALL use a deep purple (#4a3f6b) as the brand color for the sidebar background, gray (#e5e7eb) for the main content area, and a system font stack.

#### Scenario: Sidebar uses brand color

- **WHEN** the sidebar is visible
- **THEN** the sidebar background is the deep purple brand color
