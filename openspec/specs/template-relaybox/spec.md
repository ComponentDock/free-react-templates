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

| Token          | Value / Description                                    | Use                                                        |
| -------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| Page bg        | ~`#F5F5F5` (light gray)                               | Full-viewport background                                   |
| Left panel bg  | ~`#1a1a2e` or `#2d2d3f` (dark navy/charcoal)          | Contact info panel background                              |
| Left panel img | Dark architectural/building photo                      | Background image overlay on left panel                     |
| Brand accent   | ~`#28a745` or `#2ecc71` (green)                       | Links in left panel + submit button                        |
| Card bg (right)| `#FFFFFF`                                              | Form panel background                                      |
| Card shadow    | ~`0 2px 12px rgba(0,0,0,0.08)` (estimated)            | Container elevation                                        |
| Heading text   | ~`#333333` (dark gray)                                | "Send Us A Message" + contact info headings                |
| Label text     | ~`#666666` (medium gray), uppercase, small (~11–12px) | Form field labels                                          |
| Input border   | ~`#E5E7EB` (light gray)                               | Field borders                                              |
| Input text     | ~`#999999` (placeholder gray)                         | Placeholder text                                           |
| Body text      | ~`#333333` or `#555555`                               | Address text, general text                                 |
| Button bg      | ~`#28a745` (green)                                     | Submit button                                              |
| Button text    | `#FFFFFF`                                              | Submit button text                                         |
| Button radius  | ~4px                                                   | Slight rounding                                            |
| Font family    | Sans-serif (system or Google Font like Open Sans)      | All text                                                   |
| Icons          | White on dark panel, small, inline with headings       | MapPin, Phone, Mail                                        |

## Gherkin requirements

```gherkin
Feature: Relaybox — Contact Form Template
  As a visitor to a business website
  I want to send a message via a split-panel contact form
  So that I can reach the business with my inquiry

  Background:
    Given the Relaybox page is loaded

  Scenario: Page loads with light gray background
    Then the full viewport has a light gray (#F5F5F5) background

  Scenario: Two-column layout is centered on the page
    Then a centered container with two columns is displayed
    And the left column is narrower (~40%) with a dark background
    And the right column is wider (~60%) with a white background

  Scenario: Left panel displays contact address
    Then the left panel has a dark background with an architectural image
    And a map pin icon is displayed
    And the text "Address" is shown as a heading
    And the address "Media Center 8th floor, 379 Hudson St, New York, NY 10018 US" is displayed

  Scenario: Left panel displays phone contact
    Then a phone icon is displayed in the left panel
    And the text "Lets Talk" is shown as a heading
    And a green phone number link "+1 800 1236879" is displayed

  Scenario: Left panel displays email contact
    Then an envelope icon is displayed in the left panel
    And the text "General Support" is shown as a heading
    And a green email link "contact@example.com" is displayed

  Scenario: Form heading is displayed
    Then the right panel shows "Send Us A Message" as the heading

  Scenario: Name fields render as side-by-side inputs
    Then a label "TELL US YOUR NAME *" is displayed (uppercase)
    And two side-by-side text inputs are shown: "First name" and "Last name"

  Scenario: Email field renders with placeholder
    Then a label "ENTER YOUR EMAIL *" is displayed (uppercase)
    And the email field has placeholder "Eg. example@email.com"
    And the email field has type "email"

  Scenario: Phone field renders with placeholder (optional)
    Then a label "ENTER PHONE NUMBER" is displayed (uppercase, no asterisk)
    And the phone field has placeholder "Eg. +1 800 000000"

  Scenario: Message field renders as textarea
    Then a label "MESSAGE *" is displayed (uppercase)
    And the message field is a textarea with placeholder "Write us a message"

  Scenario: Required field validation on submit
    Given the name fields are empty
    And the email field is empty
    When the user clicks "SEND MESSAGE"
    Then the form shows validation errors on required fields
    And the form does not submit

  Scenario: Successful form submission
    Given valid name, email, and message are entered
    When the user clicks "SEND MESSAGE"
    Then a success confirmation is displayed

  Scenario: Submit button styling
    Then the "SEND MESSAGE" button is green with white uppercase text
    And the button has slightly rounded corners
    And the button is centered below the form

  Scenario: Responsive layout on mobile
    When the viewport is narrow (mobile)
    Then the two columns stack vertically
    And all fields remain accessible and usable

  Scenario: Footer Component Dock link
    Then the page footer contains a link to https://www.componentdock.com/
    And the link text mentions "Component Dock"
```

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
