# Template: FormBreeze (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V1** — a full-page blue gradient
background with a centered white card containing a "Get in touch" form on the
right and an illustration on the left. Features pill-shaped inputs with gray
backgrounds and a green submit button with arrow icon.

- **Source slug:** `contact-form-v1`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v1/
- **Preview URL:** https://colorlib.com/etc/cf/ContactFrom_v1/index.html
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (extracted from original CSS)

| Token                | Value                             |
| -------------------- | --------------------------------- |
| Font family          | Montserrat (Google Fonts)         |
| Background gradient  | #0072ff → #00c6ff (left to right) |
| Card background      | #ffffff                           |
| Card border-radius   | 10px                              |
| Card max-width       | 1163px                            |
| Title color          | #333333 (ExtraBold 24px)          |
| Input background     | #e6e6e6                           |
| Input border-radius  | 25px (pill)                       |
| Input height         | 50px                              |
| Button background    | #57b846 (green)                   |
| Button hover         | #333333 (dark)                    |
| Button border-radius | 25px (pill)                       |
| Placeholder color    | #999999                           |
| Text muted           | #666666                           |

## Requirements

### Requirement: Full-page gradient background

The page SHALL display a full-screen blue gradient background (#0072ff → #00c6ff).

#### Scenario: Gradient renders

- **WHEN** I visit the FormBreeze page
- **THEN** the page has a blue gradient background from #0072ff to #00c6ff
- **AND** the gradient is displayed full-screen

### Requirement: White card with two-column layout

The page SHALL display a centered white card with rounded corners containing an
illustration on the left and the form on the right.

#### Scenario: Card renders centered

- **WHEN** I visit the FormBreeze page
- **THEN** I see a white card centered on the gradient background
- **AND** the card has rounded corners (border-radius 10px)

#### Scenario: Two columns layout

- **WHEN** I visit the FormBreeze page
- **THEN** the card has an illustration on the left side
- **AND** the card has a form on the right side

### Requirement: Contact form

The form SHALL contain Name, Email, Subject, and Message fields with a "Get in
touch" title and a "Send Email" submit button.

#### Scenario: Form displays title

- **WHEN** I visit the FormBreeze page
- **THEN** I see a heading "Get in touch" above the form

#### Scenario: Form displays all fields

- **WHEN** I visit the FormBreeze page
- **THEN** I see a Name input field
- **AND** I see an Email input field
- **AND** I see a Subject input field
- **AND** I see a Message textarea field

#### Scenario: Pill-shaped inputs

- **WHEN** I look at the form inputs
- **THEN** each input has a gray (#e6e6e6) background
- **AND** each input has fully rounded corners (border-radius 25px)

#### Scenario: Submit button

- **WHEN** I look at the form
- **THEN** I see a "Send Email" button with a send icon
- **AND** the button is green (#57b846)
- **AND** the button has pill-shaped corners (border-radius 25px)

#### Scenario: Form submission prevents default

- **WHEN** I fill in the form fields and click "Send Email"
- **THEN** the form submission is prevented (no page reload)

### Requirement: Illustration section

The left column SHALL display a decorative illustration with a chat bubble icon
and descriptive text.

#### Scenario: Illustration renders

- **WHEN** I visit the FormBreeze page
- **THEN** I see a decorative illustration with icons
- **AND** I see the text "We'd love to hear from you"

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer with Component Dock link

- **WHEN** I visit the FormBreeze page
- **THEN** I see a footer with "More templates at Component Dock"
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Responsive design

The layout SHALL adapt to different screen sizes.

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile device (width < 768px)
- **THEN** the illustration is hidden
- **AND** the form takes full width
