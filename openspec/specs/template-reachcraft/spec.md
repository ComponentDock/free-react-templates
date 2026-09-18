# Template: Reachcraft (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V15** — a minimal centered contact form card
overlaying a full-page Google Maps background, with a green-accented header banner,
underline-style inputs, and a rounded green submit button.

- **Source slug:** `contact-form-v15`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v15/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v15/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

| Token              | Value                         | Notes                                            |
| ------------------ | ----------------------------- | ------------------------------------------------ |
| Brand green        | `#4CAF50`                     | Submit button, banner overlay, accents            |
| Background         | Full-page map image           | Dark muted grayscale map (NYC area)               |
| Card surface       | `#FFFFFF`                     | Centered form card background                    |
| Card header bg     | Green overlay on photo        | Workspace/desk photo with green tint             |
| Text on banner     | `#FFFFFF`                     | "Contact Us" heading, subtitle                   |
| Text primary       | `#333333`                     | Form field labels                                |
| Text placeholder   | `#999999`                     | Input placeholder text                           |
| Button bg          | Brand green (`#4CAF50`)       | Rounded/pill shape                               |
| Button text        | `#FFFFFF`                     | White on green                                   |
| Button radius      | ~25px (pill)                  | Fully rounded corners                            |
| Input style        | Underline (bottom border only) | No box border, bottom line only                  |
| Card shadow        | Subtle drop shadow            | Floating card effect over map                    |
| Card border-radius | ~8px                          | Slight rounding on card corners                  |
| Font — headings    | Poppins (sans-serif)          | "Contact Us" and labels                          |
| Font — body        | Poppins (sans-serif)          | Placeholder text, button                        |

## Requirements

### Requirement: Page layout

The page renders a full-screen map background with a centered form card overlay.

#### Scenario: Map background

- **WHEN** I visit the Reachcraft page
- **THEN** the entire viewport is covered by a dark grayscale map background

#### Scenario: Centered form card

- **WHEN** I visit the Reachcraft page
- **THEN** a white card is centered vertically and horizontally over the map
- **AND** the card has a subtle drop shadow

### Requirement: Card header banner

The top of the card has a banner area with a photo and green overlay containing the heading.

#### Scenario: Banner background

- **WHEN** I visit the Reachcraft page
- **THEN** the card header displays a workspace/desk photo with a green-tinted overlay

#### Scenario: Contact Us heading

- **WHEN** I visit the Reachcraft page
- **THEN** I see "Contact Us" in large white bold text centered in the banner

#### Scenario: Subtitle text

- **WHEN** I visit the Reachcraft page
- **THEN** I see "Feel free to drop us a line below!" in smaller white text below the heading

### Requirement: Contact form

The form section below the banner has four fields with underline-style inputs and a submit button.

#### Scenario: Full Name field

- **WHEN** I visit the Reachcraft page
- **THEN** I see a "Full Name" label with an underline input field

#### Scenario: Email field

- **WHEN** I visit the Reachcraft page
- **THEN** I see an "Email" label with an underline input field

#### Scenario: Phone field

- **WHEN** I visit the Reachcraft page
- **THEN** I see a "Phone" label with an underline input field

#### Scenario: Message field

- **WHEN** I visit the Reachcraft page
- **THEN** I see a "Message" label with a textarea field

#### Scenario: Underline input style

- **WHEN** I view the form fields
- **THEN** all inputs have a bottom border only (underline style), no full box border

#### Scenario: Submit button

- **WHEN** I visit the Reachcraft page
- **THEN** I see a green rounded "Submit" button with white text and an arrow icon

#### Scenario: Form fields stacked vertically

- **WHEN** I visit the Reachcraft page
- **THEN** all four form fields are stacked vertically in a single column

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Reachcraft page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock
