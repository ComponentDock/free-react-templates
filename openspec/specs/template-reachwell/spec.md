# Template: Reachwell (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V10** — a minimal, centered contact form
with pill-shaped inputs on a light gray background. The design is
mobile-inspired with rounded edges and an expanding focus animation.

- **Source slug:** `contact-form-v10`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v10/
- **Preview URL:** https://colorlib.com/etc/cf/ContactFrom_v10/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v10.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`css/main.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Font family | Ubuntu-Bold (Google Font) | All text — title, inputs, button |
| Page background | `#f2f2f2` | Full-viewport light gray background |
| Form title color | `#403866` | Dark purple — heading text |
| Input background | `#ffffff` | White pill-shaped input fields |
| Input text color | `#8f8fa1` | Medium gray — typed text |
| Placeholder color | `#bdbdd3` | Light purple-gray — placeholder text |
| Button pseudo-bg | `#827ffe` | Purple-blue — button fill behind transparent btn |
| Button hover bg | `#403866` | Dark purple — button expands on hover |
| Button text | `#ffffff` | White — uppercase button label |
| Error color | `#c80000` | Red — validation alerts |
| Link/body color | `#666666` | Medium gray — body text |
| Border radius (inputs) | `31px` | Pill/rounded shape for inputs and button |
| Input height | `62px` | Standard input field height |
| Textarea min-height | `169px` | Message textarea |
| Button min-width | `150px` | Submit button |
| Focus expansion | `calc(100% + 20px)` | Input/button widens 20px on focus/hover |

## Requirements

### Requirement: Page layout

The page renders a centered form on a light gray background that fills the
entire viewport.

#### Scenario: Full-viewport background

- **WHEN** I visit the Reachwell page
- **THEN** the background is light gray (#f2f2f2) filling the full viewport

#### Scenario: Centered form wrapper

- **WHEN** I visit the Reachwell page
- **THEN** the form is vertically and horizontally centered on the page

### Requirement: Form title

A centered uppercase heading above the form fields.

#### Scenario: Title displayed

- **WHEN** I visit the Reachwell page
- **THEN** I see "Send Us A Message" as the form title

#### Scenario: Title styling

- **WHEN** I visit the Reachwell page
- **THEN** the title is uppercase, centered, dark purple (#403866), 30px,
  Ubuntu-Bold font

### Requirement: Form fields

Four pill-shaped input fields with rounded edges, each with a focus animation.

#### Scenario: Full Name field

- **WHEN** I visit the Reachwell page
- **THEN** I see a text input with placeholder "Full Name"

#### Scenario: Email field

- **WHEN** I visit the Reachwell page
- **THEN** I see a text input with placeholder "E-mail"

#### Scenario: Phone field

- **WHEN** I visit the Reachwell page
- **THEN** I see a text input with placeholder "Phone"

#### Scenario: Message field

- **WHEN** I visit the Reachwell page
- **THEN** I see a textarea with placeholder "Your Message"

#### Scenario: Pill-shaped inputs

- **WHEN** I view any input field
- **THEN** it has a white background with 31px border-radius (pill shape)

#### Scenario: Input dimensions

- **WHEN** I view any text input
- **THEN** it is 62px tall with 35px horizontal padding

#### Scenario: Textarea dimensions

- **WHEN** I view the message textarea
- **THEN** it has a minimum height of 169px

#### Scenario: Focus expansion animation

- **WHEN** I click into an input field
- **THEN** the input expands 20px wider with a smooth 0.4s transition

#### Scenario: Placeholder styling

- **WHEN** I view any empty input
- **THEN** the placeholder text is light purple-gray (#bdbdd3)

### Requirement: Submit button

A centered pill-shaped submit button with a purple-blue background.

#### Scenario: Button displayed

- **WHEN** I visit the Reachwell page
- **THEN** I see a "Send" button with a paper plane icon

#### Scenario: Button styling

- **WHEN** I view the submit button
- **THEN** it has a purple-blue (#827ffe) background, white uppercase text,
  31px border-radius, and 62px height

#### Scenario: Button hover animation

- **WHEN** I hover over the submit button
- **THEN** it expands 20px wider and the background changes to dark purple
  (#403866) with a smooth 0.4s transition

### Requirement: Form validation

Fields show validation errors when submitted empty.

#### Scenario: Empty name error

- **WHEN** I submit the form without entering a name
- **THEN** I see a validation message "Please enter your name"

#### Scenario: Empty email error

- **WHEN** I submit the form without entering an email
- **THEN** I see a validation message "Please enter your email: e@a.x"

#### Scenario: Empty phone error

- **WHEN** I submit the form without entering a phone
- **THEN** I see a validation message "Please enter your phone"

#### Scenario: Empty message error

- **WHEN** I submit the form without entering a message
- **THEN** I see a validation message "Please enter your message"

#### Scenario: Error styling

- **WHEN** a validation error is displayed
- **THEN** it shows as a tooltip-style bubble with red text (#c80000),
  red border, 14px border-radius, and a warning icon

### Requirement: Responsive design

The form adapts to different screen sizes.

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile device (width < 576px)
- **THEN** the form remains centered with full-width inputs

#### Scenario: Tablet layout

- **WHEN** I view the page on a tablet (width 576–992px)
- **THEN** the form remains centered with appropriate input widths

### Requirement: Footer

A footer with the Component Dock attribution link.

#### Scenario: Footer link

- **WHEN** I visit the Reachwell page
- **THEN** I see a footer with a link to https://www.componentdock.com/
