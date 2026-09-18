# Template: Relaybox (Contact Form Template)

## Purpose

Relaybox is a single-page contact-form template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
"Contact Form V17" website template (see TEMPLATES.md, line 1432), built
under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a split-panel contact page: a light-gray full-page
background; a centered two-column card — the left column is dark with a
background architectural image and contact info (address, phone, email
with icons), the right column is white with a "Send Us A Message" heading,
form fields (name split into first/last, email, phone, message textarea)
with uppercase labels and light borders, and a green "SEND MESSAGE"
submit button.

## Design reference (replication findings)

- **Original:** ColorLib "Contact Form V17" — contact form template
  (source: https://colorlib.com/wp/template/contact-form-v17/).
  Listed in TEMPLATES.md line 1432. Screenshot:
  `ContactFrom_v17.jpg` (1920×939, JPEG, reviewed visually).
- **Live preview URL:** `https://preview.colorlib.com/theme/contact-form-v17/`
  — **UNREACHABLE (returns HTTP 404, only 9 bytes "Not Found").**
  Fallback to the screenshot analysis.
- **Screenshot analysis (browser-reviewed, 1920×939 JPEG):**
  The screenshot shows a split two-column contact form layout:
  1. Full-page light gray background (~#F5F5F5).
  2. Centered card/container with two columns:
     - **Left column (~40% width):** Dark background (~#1a1a2e or
       #2d2d3f) with a dark architectural/building photo overlay.
       Contains three contact info blocks stacked vertically:
       - Map pin icon + "Address" heading + "Media Center 8th floor,
         379 Hudson St, New York, NY 10018 US" (white text)
       - Phone icon + "Lets Talk" heading + "+1 800 1236879"
         (green link, ~#2ecc71)
       - Envelope icon + "General Support" heading +
         "contact@example.com" (green link)
     - **Right column (~60% width):** White background. Contains:
       - "Send Us A Message" heading (dark, ~24px, regular weight)
       - "TELL US YOUR NAME *" — uppercase gray label, two side-by-side
         fields: "First name" | "Last name"
       - "ENTER YOUR EMAIL *" — uppercase gray label, full-width field
         with "Eg. example@email.com" placeholder
       - "ENTER PHONE NUMBER" — uppercase gray label (no asterisk =
         optional), "Eg. +1 800 000000" placeholder
       - "MESSAGE *" — uppercase gray label, textarea with
         "Write us a message" placeholder
       - "SEND MESSAGE" button — green (~#28a745) bg, white uppercase
         text, rounded corners (~4px), centered
  3. Aesthetic: clean, corporate, professional. Green accent color.
     Two-column split layout is the defining visual feature.

## Section order (from screenshot analysis — preview unreachable)

1. **Page background** — full-viewport light gray (#F5F5F5).
2. **Container** — centered, max-width ~960px, flex two-column layout,
   subtle shadow or border.
3. **Left panel (contact info):**
   - Dark background with architectural photo overlay
   - "Address" block: MapPin icon + heading + address text
   - "Lets Talk" block: Phone icon + heading + phone number (green link)
   - "General Support" block: Mail icon + heading + email (green link)
4. **Right panel (contact form):**
   - "Send Us A Message" heading
   - Name row: two side-by-side fields (First name, Last name) under
     "TELL US YOUR NAME *" label
   - Email field under "ENTER YOUR EMAIL *" label
   - Phone field under "ENTER PHONE NUMBER" label (optional)
   - Message textarea under "MESSAGE *" label
   - "SEND MESSAGE" green button, centered
5. **Footer** — Component Dock attribution link.

## Design tokens (from screenshot analysis)

| Token           | Value / Description                                   | Use                                         |
| --------------- | ----------------------------------------------------- | ------------------------------------------- |
| Page bg         | ~`#F5F5F5` (light gray)                               | Full-viewport background                    |
| Left panel bg   | ~`#1a1a2e` or `#2d2d3f` (dark navy/charcoal)          | Contact info panel background               |
| Left panel img  | Dark architectural/building photo                     | Background image overlay on left panel      |
| Brand accent    | ~`#28a745` or `#2ecc71` (green)                       | Links in left panel + submit button         |
| Card bg (right) | `#FFFFFF`                                             | Form panel background                       |
| Card shadow     | ~`0 2px 12px rgba(0,0,0,0.08)` (estimated)            | Container elevation                         |
| Heading text    | ~`#333333` (dark gray)                                | "Send Us A Message" + contact info headings |
| Label text      | ~`#666666` (medium gray), uppercase, small (~11–12px) | Form field labels                           |
| Input border    | ~`#E5E7EB` (light gray)                               | Field borders                               |
| Input text      | ~`#999999` (placeholder gray)                         | Placeholder text                            |
| Body text       | ~`#333333` or `#555555`                               | Address text, general text                  |
| Button bg       | ~`#28a745` (green)                                    | Submit button                               |
| Button text     | `#FFFFFF`                                             | Submit button text                          |
| Button radius   | ~4px                                                  | Slight rounding                             |
| Font family     | Sans-serif (system or Google Font like Open Sans)     | All text                                    |
| Icons           | White on dark panel, small, inline with headings      | MapPin, Phone, Mail                         |

## Requirements

### Requirement: Split-panel contact form layout

The page SHALL display a two-column centered container on a light gray background, with a narrow dark left panel (~40%) for contact info and a wider white right panel (~60%) for the contact form.

#### Scenario: Page loads with light gray background

- **WHEN** the Relaybox page loads
- **THEN** the full viewport has a light gray (#F5F5F5) background

#### Scenario: Two-column layout is centered

- **WHEN** the page renders
- **THEN** a centered container with two columns is displayed
- **AND** the left column is narrower with a dark background
- **AND** the right column is wider with a white background

#### Scenario: Responsive layout on mobile

- **WHEN** the viewport is narrow (mobile)
- **THEN** the two columns stack vertically
- **AND** all fields remain accessible and usable

### Requirement: Left panel contact information

The left panel SHALL display three contact blocks: address with map pin icon, phone with phone icon, and email with envelope icon. Phone and email links SHALL use the green accent color.

#### Scenario: Left panel displays contact address

- **WHEN** the left panel renders
- **THEN** a map pin icon is displayed
- **AND** the text "Address" is shown as a heading
- **AND** the address "Media Center 8th floor, 379 Hudson St, New York, NY 10018 US" is displayed

#### Scenario: Left panel displays phone contact

- **WHEN** the left panel renders
- **THEN** a phone icon is displayed
- **AND** the text "Lets Talk" is shown as a heading
- **AND** a green phone number link "+1 800 1236879" is displayed

#### Scenario: Left panel displays email contact

- **WHEN** the left panel renders
- **THEN** an envelope icon is displayed
- **AND** the text "General Support" is shown as a heading
- **AND** a green email link "contact@example.com" is displayed

### Requirement: Contact form with fields and submission

The right panel SHALL display a "Send Us A Message" heading and a form with name (first/last side-by-side), email, phone (optional), and message fields, plus a green "SEND MESSAGE" submit button.

#### Scenario: Form heading is displayed

- **WHEN** the right panel renders
- **THEN** "Send Us A Message" is shown as the heading

#### Scenario: Name fields render as side-by-side inputs

- **WHEN** the form renders
- **THEN** a label "TELL US YOUR NAME *" is displayed (uppercase)
- **AND** two side-by-side text inputs are shown: "First name" and "Last name"

#### Scenario: Email field renders with placeholder

- **WHEN** the form renders
- **THEN** a label "ENTER YOUR EMAIL *" is displayed (uppercase)
- **AND** the email field has placeholder "Eg. example@email.com"
- **AND** the email field has type "email"

#### Scenario: Phone field renders with placeholder (optional)

- **WHEN** the form renders
- **THEN** a label "ENTER PHONE NUMBER" is displayed (uppercase, no asterisk)
- **AND** the phone field has placeholder "Eg. +1 800 000000"

#### Scenario: Message field renders as textarea

- **WHEN** the form renders
- **THEN** a label "MESSAGE *" is displayed (uppercase)
- **AND** the message field is a textarea with placeholder "Write us a message"

#### Scenario: Successful form submission

- **WHEN** valid name, email, and message are entered
- **AND** the user clicks "SEND MESSAGE"
- **THEN** a success confirmation is displayed

#### Scenario: Submit button styling

- **WHEN** the form renders
- **THEN** the "SEND MESSAGE" button is green with white uppercase text
- **AND** the button has slightly rounded corners
- **AND** the button is centered below the form

### Requirement: Footer Component Dock link

The page footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer Component Dock link

- **WHEN** the page footer renders
- **THEN** the page contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Spec created with full section order and design tokens
- [ ] Screenshot analyzed visually (1920×939 JPEG)
- [ ] Preview URL documented as unreachable (404) — fallback to screenshot
- [ ] Split-panel layout captured (dark left + white right)
- [ ] Contact info blocks identified (address, phone, email with icons)
- [ ] Form fields identified (first/last name, email, phone, message)
- [ ] Green accent color captured (#28a745 range)
- [ ] Gherkin scenarios cover: layout, contact info, fields, validation,
      submission, responsiveness, footer
- [ ] Design tokens table complete with hex estimates
- [ ] No ColorLib references in implementation code (only in spec)
- [ ] Name "relaybox" verified no collision with apps/ or specs/
