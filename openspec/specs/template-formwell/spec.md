# Template: FormWell (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V15** — a single-page contact form with
a full-page Google Maps background, a centered white card with a banner image,
and underline-style form inputs with a green submit button.

- **Source slug:** `contact-form-v15`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v15/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v15/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

### Colors
- **Map background:** dark charcoal overlay over map tiles (rgba(0,0,0,0.5) or similar)
- **Card background:** white (#ffffff)
- **Card shadow:** soft box-shadow, spread ~20px
- **Submit button:** green (#4cd137 or #5cb85c), white text, rounded pill shape
- **Input text:** dark gray (#333 or #444)
- **Input placeholder:** light gray (#aaa or #999)
- **Heading text on banner:** white, bold
- **Subheading on banner:** white, lighter weight

### Fonts
- **Body/inputs:** Poppins (sans-serif)
- **Headings:** Poppins bold (sans-serif)

### Button
- Rounded pill shape (border-radius ~20px)
- Green background (#4cd137)
- White text
- Arrow icon (→) after "Submit" text
- Padding: ~10px 30px

### Inputs
- Underline-style: bottom border only (no full box border)
- Full width within card padding
- Labels above inputs, small uppercase or normal case
- Light gray bottom border line

## Requirements

### Requirement: Full-page map background

The page renders a full-viewport Google Maps background with a dark overlay.

#### Scenario: Map background visible

- **WHEN** I visit the FormWell page
- **THEN** the entire page background shows a map (Google Maps tile or static map image)

#### Scenario: Dark overlay on map

- **WHEN** I visit the FormWell page
- **THEN** the map has a dark semi-transparent overlay so the card stands out

### Requirement: Centered contact card

A white card is centered on the page over the map background.

#### Scenario: Card rendered centered

- **WHEN** I visit the FormWell page
- **THEN** I see a white card centered horizontally and vertically on the page

#### Scenario: Card has shadow

- **WHEN** I visit the FormWell page
- **THEN** the card has a soft box-shadow for depth

### Requirement: Banner image section

The top of the card has a banner image with a dark overlay and text.

#### Scenario: Banner image displayed

- **WHEN** I visit the FormWell page
- **THEN** the top section of the card shows a banner image (person with laptop or similar)

#### Scenario: Dark overlay on banner

- **WHEN** I visit the FormWell page
- **THEN** the banner image has a dark semi-transparent overlay

#### Scenario: Contact Us heading

- **WHEN** I visit the FormWell page
- **THEN** the text "Contact Us" is displayed centered on the banner in white bold text

#### Scenario: Subheading

- **WHEN** I visit the FormWell page
- **THEN** the text "Feel free to drop us a line below!" is displayed below the heading in white

### Requirement: Contact form

Below the banner, the card contains a form with underline-style inputs.

#### Scenario: Full Name field

- **WHEN** I visit the FormWell page
- **THEN** I see a "Full Name:" label with a text input showing placeholder "John Doe"

#### Scenario: Email field

- **WHEN** I visit the FormWell page
- **THEN** I see an "Email:" label with a text input showing placeholder "Enter email address"

#### Scenario: Phone field

- **WHEN** I visit the FormWell page
- **THEN** I see a "Phone:" label with a text input showing placeholder "Enter phone number"

#### Scenario: Message field

- **WHEN** I visit the FormWell page
- **THEN** I see a "Message:" label with a textarea showing placeholder "Your Comments..."

#### Scenario: Underline input style

- **WHEN** I look at any form input
- **THEN** it has a bottom border only (underline style) with no full box border

#### Scenario: Labels left-aligned

- **WHEN** I view the form
- **THEN** labels are left-aligned next to or above their inputs

### Requirement: Submit button

A green rounded submit button appears below the form fields.

#### Scenario: Submit button rendered

- **WHEN** I visit the FormWell page
- **THEN** I see a green "Submit" button with an arrow icon

#### Scenario: Button rounded pill shape

- **WHEN** I view the submit button
- **THEN** it has a rounded pill shape (large border-radius)

#### Scenario: Button centered

- **WHEN** I visit the FormWell page
- **THEN** the submit button is centered below the form fields

### Requirement: Responsive layout

The template is responsive and works on mobile.

#### Scenario: Mobile stacking

- **WHEN** I view the page on a mobile viewport (375px wide)
- **THEN** the card takes full width with horizontal padding

#### Scenario: Form readable on mobile

- **WHEN** I view the page on a mobile viewport
- **THEN** all form fields and the button are readable and usable

### Requirement: Footer

The page includes a footer with a Component Dock link.

#### Scenario: Footer present

- **WHEN** I visit the FormWell page
- **THEN** I see a footer with a link to https://www.componentdock.com/
