# Template: Connecta (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V1** — a simple, centered contact card
on a blue gradient background with a decorative envelope illustration on the
left and a form with rounded inputs on the right.

- **Source slug:** `contact-form-v1`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v1/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v1/ (404 at
  time of prep — design tokens extracted from ColorLib OG screenshot and
  third-party descriptions)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page renders a centered white card on a full-width blue gradient
background.

#### Scenario: Blue gradient background

- **WHEN** I visit the Connecta page
- **THEN** the page background is a left-to-right blue gradient (cyan on the
  left fading to deeper blue on the right)

#### Scenario: Centered card

- **WHEN** I visit the Connecta page
- **THEN** I see a white card centered on the page with rounded corners and a
  subtle shadow

#### Scenario: Two-column card

- **WHEN** I visit the Connecta page
- **THEN** the card contains two columns: a decorative illustration on the left
  and a form on the right

### Requirement: Left column — illustration

The left column displays a decorative envelope illustration suggesting email /
sending.

#### Scenario: Envelope illustration present

- **WHEN** I visit the Connecta page
- **THEN** the left column contains a green envelope icon/illustration

#### Scenario: Motion decoration

- **WHEN** I visit the Connecta page
- **THEN** the illustration includes motion lines or particle dots suggesting
  sending

#### Scenario: Illustration centered in column

- **WHEN** I visit the Connecta page
- **THEN** the illustration is vertically and horizontally centered in the
  left column

### Requirement: Contact form

The right column contains a form with a heading, four input fields, and a
submit button.

#### Scenario: Form heading

- **WHEN** I visit the Connecta page
- **THEN** the right column displays a "Get in touch" heading in bold,
  centered above the form fields

#### Scenario: Name input

- **WHEN** I visit the Connecta page
- **THEN** I see a Name input field with placeholder "John Doe"

#### Scenario: Email input

- **WHEN** I visit the Connecta page
- **THEN** I see an Email input field with placeholder "Email"

#### Scenario: Subject input

- **WHEN** I visit the Connecta page
- **THEN** I see a Subject input field with placeholder "Subject"

#### Scenario: Message textarea

- **WHEN** I visit the Connecta page
- **THEN** I see a Message textarea with placeholder "Message" and a height
  suitable for multi-line input

#### Scenario: Stacked field layout

- **WHEN** I visit the Connecta page
- **THEN** all four form fields are stacked vertically (full width each)

#### Scenario: Rounded input style

- **WHEN** I visit the Connecta page
- **THEN** all form inputs have rounded corners (pill-like shape), light gray
  background, and no visible border

#### Scenario: Submit button

- **WHEN** I visit the Connecta page
- **THEN** I see a green "Send Email" button with a right-arrow icon,
  rounded corners, and white text

#### Scenario: Button centered below form

- **WHEN** I visit the Connecta page
- **THEN** the submit button is centered horizontally below the form fields

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Connecta page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Design tokens

| Token            | Value                          | Notes                                                 |
| ---------------- | ------------------------------ | ----------------------------------------------------- |
| Gradient start   | `#29B6F6` (light blue/cyan)   | Left side of page background gradient                 |
| Gradient end     | `#1565C0` (deep blue)         | Right side of page background gradient                |
| Card surface     | `#FFFFFF`                      | White card background                                 |
| Card radius      | ~12px                          | Rounded corners on the card                           |
| Card shadow      | Subtle drop shadow             | Soft shadow beneath the card                          |
| Input bg         | `#ECEFF1` (light gray)         | Rounded input field background                        |
| Input radius     | ~20px (pill)                   | Heavily rounded input corners                         |
| Input text       | `#9E9E9E` (gray)              | Placeholder text color                                |
| Heading text     | `#212121` (near-black)         | "Get in touch" heading                                |
| Button bg        | `#66BB6A` (green)              | Submit button background                              |
| Button text      | `#FFFFFF`                      | White text on button                                  |
| Button radius    | ~20px (pill)                   | Rounded submit button                                 |
| Button icon      | Right-arrow (→)                | Inline arrow icon after button text                   |
| Envelope color   | `#4CAF50` (green)              | Envelope illustration stroke/fill                     |
| Decorations      | Gray dots/lines                | Motion particles around the envelope                  |
| Font — heading   | Bold sans-serif (system)       | "Get in touch" — likely Poppins or similar            |
| Font — body      | Sans-serif (system)            | Input placeholders, button text                       |

## Verification checklist

- [ ] Blue gradient background covers full viewport
- [ ] White card is centered with rounded corners and shadow
- [ ] Left column shows green envelope illustration with motion decoration
- [ ] Right column has "Get in touch" heading (bold, centered)
- [ ] Four stacked inputs: Name, Email, Subject, Message
- [ ] Inputs have pill-shaped rounded corners and light gray background
- [ ] Message textarea is taller than other inputs
- [ ] Green "Send Email →" button centered below form
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `npm run spec:validate` passes
