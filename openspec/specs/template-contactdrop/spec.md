# Template: ContactDrop (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V16** — a centered single-column contact
form modal on a full-page purple gradient background, with icon-labeled fields,
field validation indicators, a header image banner, and a pill-shaped submit
button.

- **Source slug:** `contact-form-v16`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v16/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v16/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the ColorLib screenshot (preview unavailable):

| Token | Value | Notes |
|-------|-------|-------|
| Primary / brand color | `#7c4dff` (vivid purple) | Background gradient, submit button |
| Background gradient | `#6a1b9a` → `#9c27b0` → `#ba68c8` | Full-page purple-to-lavender |
| Card background | `#ffffff` | White centered modal card |
| Card shadow | `0 8px 32px rgba(0,0,0,0.18)` | Subtle drop shadow |
| Text (headings) | `#212121` (near-black) | Bold headings |
| Text (placeholders) | `#9e9e9e` (gray-500) | Input placeholders |
| Input border | `#e0e0e0` (gray-300) | Light gray bottom/outline |
| Input border (error) | `#f44336` (red-500) | Validation error border |
| Button background | `#7c4dff` (primary purple) | "SEND NOW" pill button |
| Button text | `#ffffff` | White button label |
| Icon color | `#9e9e9e` (gray-500) | Left-side field icons |
| Header image overlay | Semi-transparent dark | Over architectural photo |
| Font family | `"Poppins", sans-serif` | Inferred from visual weight/spacing |
| Border radius (card) | `8px` | Rounded card corners |
| Border radius (button) | `24px` (pill) | Fully rounded submit button |
| Nav background | Transparent / gradient | Overlays page gradient |

## Requirements

### Requirement: Page layout

The page SHALL render a full-page purple gradient background with a navigation
bar and a centered contact form card.

#### Scenario: Purple gradient background

- **WHEN** I visit the ContactDrop page
- **THEN** the page background SHALL be a full-page gradient transitioning from
  deep purple on the edges to lighter purple/violet in the center

#### Scenario: Navigation bar

- **WHEN** I visit the ContactDrop page
- **THEN** a navigation bar SHALL be displayed at the top with a brand logo on
  the left and a "CONTACT US" button on the right

#### Scenario: Brand logo text

- **WHEN** I view the navigation bar
- **THEN** the left side SHALL display "Co." as brand text in white

#### Scenario: Nav contact button

- **WHEN** I view the navigation bar
- **THEN** the right side SHALL display a "CONTACT US" button with a white
  border outline

### Requirement: Contact form card

The form SHALL be rendered in a centered white card with a header image and a
close button.

#### Scenario: Centered white card

- **WHEN** I visit the ContactDrop page
- **THEN** a white card SHALL be centered on the page with rounded corners and
  a drop shadow

#### Scenario: Header image banner

- **WHEN** I view the form card
- **THEN** a banner image SHALL appear at the top of the card with a
  semi-transparent dark overlay and "CONTACT US" heading in white, centered

#### Scenario: Close button

- **WHEN** I view the form card
- **THEN** a close (X) button SHALL appear in the top-right corner of the card

#### Scenario: Close button dismisses card

- **WHEN** I click the close (X) button
- **THEN** the contact form card SHALL be hidden or dismissed

### Requirement: Form fields

The form SHALL contain name, email, phone, and message fields with left-side
icons.

#### Scenario: Name field

- **WHEN** I view the form
- **THEN** a name input SHALL be displayed with a person icon on the left and
  placeholder text "Your name"

#### Scenario: Email field

- **WHEN** I view the form
- **THEN** an email input SHALL be displayed with a mail icon on the left and
  placeholder text "Your email"

#### Scenario: Phone field

- **WHEN** I view the form
- **THEN** a phone input SHALL be displayed with a phone icon on the left and
  placeholder text "Your phone"

#### Scenario: Message field

- **WHEN** I view the form
- **THEN** a message textarea SHALL be displayed with a comment/chat icon on
  the left and placeholder text "Your comments..."

#### Scenario: Input styling

- **WHEN** I view any form field
- **THEN** the input SHALL have a light gray bottom border, rounded corners,
  and the icon SHALL be gray-colored on the left side

### Requirement: Field validation

Fields SHALL show visual feedback for valid/invalid states.

#### Scenario: Valid field indicator

- **WHEN** a field has a valid value
- **THEN** no error indicator SHALL be shown

#### Scenario: Invalid field indicator

- **WHEN** a required field is empty or has an invalid value
- **THEN** a red border SHALL appear around the field and a red X icon SHALL
  appear on the right side of the field

### Requirement: Submit button

The form SHALL have a pill-shaped submit button.

#### Scenario: Submit button displayed

- **WHEN** I view the form
- **THEN** a "SEND NOW" button SHALL be displayed at the bottom of the form
  with a purple background, white text, and fully rounded (pill) shape

#### Scenario: Submit button hover

- **WHEN** I hover over the submit button
- **THEN** the button SHALL show a hover state (darkened purple or shadow)

#### Scenario: Form submission

- **WHEN** I fill all required fields with valid data and click "SEND NOW"
- **THEN** the form SHALL submit (or show a success state)

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"
  branded as "Component Dock"

## Verification checklist

- [ ] Full-page purple gradient background renders correctly
- [ ] Navigation bar with "Co." logo and "CONTACT US" button
- [ ] Centered white card with header image banner
- [ ] "CONTACT US" heading on the banner with dark overlay
- [ ] Close (X) button dismisses the card
- [ ] Four form fields with left-side icons (name, email, phone, message)
- [ ] Light gray input borders and placeholder text
- [ ] Validation: red border + red X on invalid fields
- [ ] "SEND NOW" pill button with purple background
- [ ] Footer links to componentdock.com
- [ ] Responsive layout (mobile-friendly)
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
