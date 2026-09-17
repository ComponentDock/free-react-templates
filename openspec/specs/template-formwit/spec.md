# Template: FormWit (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V17** — a split-screen contact page with
a dark photographic left panel containing contact details and a white right
panel with a functional multi-field contact form.

- **Source slug:** `contact-form-v17`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v17/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v17/ (404 at
  prep time — design tokens extracted from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v17.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the ColorLib screenshot (preview unavailable):

| Token | Value | Notes |
|-------|-------|-------|
| Brand / accent color | `#28a745` (green) | Button background, link text on left panel |
| Page background | `#f5f5f5` (light gray) | Surrounds the split card |
| Left panel background | `#1a1a1a` (near-black) | Dark photographic background image |
| Left panel text | `#ffffff` | White text for address labels |
| Left panel link color | `#28a745` (green) | Phone number and email links |
| Right panel background | `#ffffff` | White card for form |
| Heading text | `#212121` (near-black) | "Send Us A Message" heading |
| Label text | `#666666` (gray-600) | Uppercase field labels (e.g. "TELL US YOUR NAME *") |
| Placeholder text | `#aaaaaa` (gray-400) | Input placeholder text |
| Input border | `#e0e0e0` (gray-300) | Light gray input borders |
| Button background | `#28a745` (green) | "SEND MESSAGE" button |
| Button text | `#ffffff` | White button label |
| Font family | `"Jost", sans-serif` | Inferred from visual weight/letter-spacing |
| Border radius (card) | `4px` | Slightly rounded card corners |
| Border radius (button) | `4px` | Slightly rounded (not pill) |
| Section padding | ~`40px` | Internal spacing |

## Requirements

### Requirement: Split-screen layout

The page SHALL render a centered card with two columns side by side.

#### Scenario: Two-column card

- **WHEN** I visit the FormWit page
- **THEN** a centered card SHALL be displayed with a left column (dark
  photographic background) and a right column (white form area) of roughly
  equal width

#### Scenario: Page background

- **WHEN** I view the page
- **THEN** the page background SHALL be a light gray (`#f5f5f5`)

#### Scenario: Card centering

- **WHEN** I view the page on a desktop screen
- **THEN** the split card SHALL be horizontally centered with margins on both
  sides

### Requirement: Left panel — contact details

The left column SHALL display contact information on a dark photographic
background.

#### Scenario: Dark background image

- **WHEN** I view the left panel
- **THEN** it SHALL have a dark (near-black) photographic background image

#### Scenario: Address block

- **WHEN** I view the left panel
- **THEN** an address block SHALL be displayed with a location pin icon,
  the label "Address", and the address text "Media Center 8th floor, 370
  Hudson St, New York, NY 10018 US"

#### Scenario: Phone block

- **WHEN** I view the left panel
- **THEN** a phone block SHALL be displayed with a phone icon, the label
  "Lets Talk", and the phone number "+1 800 1236879" in green

#### Scenario: Email block

- **WHEN** I view the left panel
- **THEN** an email block SHALL be displayed with an envelope icon, the
  label "General Support", and the email "contact@example.com" in green

#### Scenario: Icon color

- **WHEN** I view any contact detail icon on the left panel
- **THEN** the icon SHALL be white or light-colored to contrast with the
  dark background

### Requirement: Right panel — contact form

The right column SHALL display a contact form titled "Send Us A Message".

#### Scenario: Form heading

- **WHEN** I view the right panel
- **THEN** a heading "Send Us A Message" SHALL be displayed at the top in
  dark text

#### Scenario: Name fields (split)

- **WHEN** I view the form
- **THEN** two side-by-side name inputs SHALL be displayed under the label
  "TELL US YOUR NAME *" with placeholders "First name" and "Last name"

#### Scenario: Email field

- **WHEN** I view the form
- **THEN** an email input SHALL be displayed under the label "ENTER YOUR
  EMAIL *" with placeholder "Eg. example@email.com"

#### Scenario: Phone field

- **WHEN** I view the form
- **THEN** a phone input SHALL be displayed under the label "ENTER PHONE
  NUMBER" with placeholder "Eg. +1 800 000000"

#### Scenario: Message field

- **WHEN** I view the form
- **THEN** a textarea SHALL be displayed under the label "MESSAGE *" with
  placeholder "Write us a message"

#### Scenario: Required field indicators

- **WHEN** I view the form labels
- **THEN** required fields (name, email, message) SHALL show an asterisk (*)
  after their label text

### Requirement: Submit button

The form SHALL have a green submit button.

#### Scenario: Submit button displayed

- **WHEN** I view the form
- **THEN** a "SEND MESSAGE" button SHALL be displayed at the bottom of the
  form with a green background, white text, and slightly rounded corners

#### Scenario: Submit button hover

- **WHEN** I hover over the submit button
- **THEN** the button SHALL show a hover state (darker green or shadow)

#### Scenario: Form submission

- **WHEN** I fill all required fields with valid data and click "SEND MESSAGE"
- **THEN** the form SHALL submit (or show a success state)

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"
  branded as "Component Dock"

### Requirement: Responsive layout

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile device (viewport < 768px)
- **THEN** the two columns SHALL stack vertically with the contact details
  on top and the form below

## Verification checklist

- [ ] Centered split-screen card with dark left + white right panels
- [ ] Dark photographic background on left panel
- [ ] Address, phone, and email blocks with icons on left panel
- [ ] Phone/email links in green color on left panel
- [ ] "Send Us A Message" heading on right panel
- [ ] Split name inputs (first/last) side by side
- [ ] Email, phone, and message fields with placeholders
- [ ] Required field asterisks on name, email, message labels
- [ ] "SEND MESSAGE" green button with white text
- [ ] Footer with Component Dock link
- [ ] Responsive: columns stack on mobile
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
