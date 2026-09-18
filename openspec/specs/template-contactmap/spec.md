# Template: ContactMap (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V8** — a centered single-column contact
form floating over a full-page Google Maps background, with underline-style
input fields, a "send copy" checkbox, and a solid green submit button. The
defining visual feature is the interactive map filling the entire viewport
behind the form card.

- **Source slug:** `contact-form-v8`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v8/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v8/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v8.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the ColorLib screenshot (preview unavailable):

| Token | Value | Notes |
|-------|-------|-------|
| Primary / brand color | `#44b89d` (teal-green) | Submit button, active input underline, checkbox |
| Background | Google Maps (grayscale) | Full-viewport interactive map with CSS `filter: grayscale(1)` |
| Card background | `#ffffff` | White centered form card |
| Card shadow | `0 2px 12px rgba(0,0,0,0.12)` | Subtle drop shadow on card |
| Card border-radius | `4px` | Slightly rounded card corners |
| Heading text | `#212121` (near-black) | "Contact Us" bold heading |
| Input text | `#333333` (dark gray) | Typed value color |
| Placeholder text | `#999999` (gray-400) | Input placeholder text |
| Input underline (idle) | `#e0e0e0` (gray-300) | Thin line below each field |
| Input underline (active) | `#44b89d` (primary teal) | Focus/active state underline |
| Checkbox color | `#44b89d` (primary teal) | Checked checkbox fill |
| Button background | `#44b89d` (primary teal) | "SEND EMAIL" button |
| Button text | `#ffffff` (white) | Button label |
| Button border-radius | `4px` | Slightly rounded rectangular button |
| Font family | `"Poppins", sans-serif` | Inferred from visual weight/spacing |
| Font weight (heading) | `700` (bold) | "Contact Us" |
| Font weight (inputs) | `400` (normal) | Input values |

## Requirements

### Requirement: Page layout

The page SHALL render a full-viewport Google Maps background with a centered
contact form card overlaid on top.

#### Scenario: Full-page map background

- **WHEN** I visit the ContactMap page
- **THEN** the page background SHALL be a full-viewport Google Maps embed
  displayed in grayscale (desaturated)

#### Scenario: Centered form card

- **WHEN** I visit the ContactMap page
- **THEN** a white card SHALL be centered on the page with a subtle drop
  shadow, floating over the map background

### Requirement: Form heading

The form card SHALL display a heading at the top.

#### Scenario: Heading text

- **WHEN** I view the form card
- **THEN** a "Contact Us" heading SHALL be displayed at the top of the card
  in dark bold text, left-aligned

### Requirement: Form fields

The form SHALL contain name, email, and message fields with underline-style
borders.

#### Scenario: Name field

- **WHEN** I view the form
- **THEN** a text input SHALL be displayed with placeholder text "Full Name"
  and a thin underline border

#### Scenario: Email field

- **WHEN** I view the form
- **THEN** an email input SHALL be displayed with placeholder text
  "Contact@colorlib.com" (or equivalent placeholder) and a thin underline
  border

#### Scenario: Message field

- **WHEN** I view the form
- **THEN** a textarea SHALL be displayed with placeholder text "Your Message"
  and a thin underline border

#### Scenario: Input focus state

- **WHEN** I click into any input field
- **THEN** the underline SHALL change to the primary teal color (`#44b89d`)

### Requirement: Send copy checkbox

The form SHALL include a checkbox to receive a copy of the message.

#### Scenario: Checkbox displayed

- **WHEN** I view the form
- **THEN** a checkbox with label "Send copy to my email" SHALL be displayed
  below the message field

#### Scenario: Checkbox checked state

- **WHEN** I check the "Send copy to my email" checkbox
- **THEN** the checkbox SHALL show a teal/green checkmark indicator

### Requirement: Submit button

The form SHALL have a solid green submit button.

#### Scenario: Submit button displayed

- **WHEN** I view the form
- **THEN** a "SEND EMAIL" button SHALL be displayed at the bottom of the form
  with a teal-green background, white text, and slightly rounded rectangular
  shape

#### Scenario: Submit button hover

- **WHEN** I hover over the submit button
- **THEN** the button SHALL show a hover state (darkened teal or shadow)

#### Scenario: Form submission

- **WHEN** I fill all required fields with valid data and click "SEND EMAIL"
- **THEN** the form SHALL submit (or show a success state)

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"
  branded as "Component Dock"

### Requirement: Responsive layout

The form and map SHALL be responsive across screen sizes.

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile device (width < 640px)
- **THEN** the form card SHALL fill most of the viewport width with appropriate
  padding, and the map SHALL remain visible behind/around it

## Verification checklist

- [ ] Full-viewport Google Maps background renders in grayscale
- [ ] Centered white card with shadow floats over the map
- [ ] "Contact Us" heading in bold dark text, left-aligned
- [ ] Three underline-style inputs (name, email, message)
- [ ] Input focus shows teal underline
- [ ] "Send copy to my email" checkbox with teal checkmark
- [ ] "SEND EMAIL" teal-green button with white text
- [ ] Footer links to componentdock.com
- [ ] Responsive layout on mobile viewports
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
