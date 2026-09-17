# Template: Mailnest (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 16** — a minimalist two-column contact
page with an illustration and heading on the left and a clean form with
rounded input fields on the right.

- **Source slug:** `contact-form-16`
- **Source URL:** https://colorlib.com/wp/template/contact-form-16/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-16/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page renders a centered two-column layout on a white background with no
visible navbar.

#### Scenario: Two-column layout rendered

- **WHEN** I visit the Mailnest page
- **THEN** I see a centered two-column layout with the left column containing
  an illustration and text, and the right column containing a contact form

#### Scenario: White background

- **WHEN** I visit the Mailnest page
- **THEN** the page background is white

### Requirement: Left column — illustration and heading

The left column contains a large bold heading, a short subtext paragraph,
and a decorative illustration.

#### Scenario: Heading text

- **WHEN** I visit the Mailnest page
- **THEN** I see the heading "Let's talk about everything!" in large bold
  sans-serif text

#### Scenario: Subtext below heading

- **WHEN** I visit the Mailnest page
- **THEN** I see a short paragraph below the heading (e.g. "Lorem ipsum dolor
  sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?")

#### Scenario: Decorative illustration

- **WHEN** I visit the Mailnest page
- **THEN** I see an illustration below the subtext showing a person holding an
  envelope with decorative plant and geometric elements

#### Scenario: Accent color on illustration

- **WHEN** I visit the Mailnest page
- **THEN** the illustration uses blue/indigo accent elements (location pin,
  envelope details)

### Requirement: Contact form

The right column contains a form with rounded input fields and a dark submit
button.

#### Scenario: All form fields present

- **WHEN** I visit the Mailnest page
- **THEN** I see a "Your name" input, an "Email" input, a "Subject" input,
  a "Write your message" textarea, and a "Send Message" button

#### Scenario: Name field

- **WHEN** I visit the Mailnest page
- **THEN** the first input field has placeholder text "Your name"

#### Scenario: Email field

- **WHEN** I visit the Mailnest page
- **THEN** the second input field has placeholder text "Email"

#### Scenario: Subject field

- **WHEN** I visit the Mailnest page
- **THEN** the third input field has placeholder text "Subject"

#### Scenario: Message textarea

- **WHEN** I visit the Mailnest page
- **THEN** I see a textarea with placeholder text "Write your message"

#### Scenario: Send Message button

- **WHEN** I visit the Mailnest page
- **THEN** I see a "Send Message" button with a dark background and white text

#### Scenario: Rounded input style

- **WHEN** I visit the Mailnest page
- **THEN** all form inputs have a light gray background, no visible border,
  and rounded corners

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Mailnest page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Design tokens

| Token            | Value              | Notes                                      |
| ---------------- | ------------------ | ------------------------------------------ |
| Background       | `#FFFFFF`          | Page background (white)                    |
| Heading text     | `#1A1A2E`          | Large bold heading, dark/black             |
| Body text        | `#666666`          | Subtext paragraph, gray                    |
| Accent color     | `#5B4AFF`          | Blue/indigo on illustration elements       |
| Input bg         | `#F5F5F5`          | Light gray background for input fields     |
| Input radius     | 6px                | Rounded corners on input fields            |
| Input placeholder| `#AAAAAA`          | Light gray placeholder text                |
| Button bg        | `#1A1A2E`          | Dark/black background                      |
| Button text      | `#FFFFFF`          | White text on button                       |
| Button radius    | 6px                | Rounded corners matching inputs            |
| Font — headings  | Poppins (bold)     | Large sans-serif heading                   |
| Font — body      | Poppins (regular)  | Form fields, subtext, button               |
| Illustration     | SVG / placeholder  | Person with envelope + decorative elements |
