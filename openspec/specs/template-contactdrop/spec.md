# Template: ContactDrop (Contact Form)

## Purpose

A centered single-column contact form modal on a full-page purple gradient background, with icon-labeled fields. It also includes field validation indicators, a header image banner, and a pill-shaped submit button. Recreation of ColorLib "Contact Form V16".

- **Source slug:** `contact-form-v16`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v16/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v16/ (404 at
  time of prep — design tokens extracted from screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v16/index.html` — HTTP 200, 7,014 B, title `Contact V16`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v16/css/style.css?v=96a32ec2` (13,697 B).
> Faces it actually declares: `Montserrat-Bold`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
> The prescribed face `poppins` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

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
| Surface (measured) | `#846add` | paints it ×5 — `background` on `.contact100-form-btn`; style.css?v=96a32ec2 (13,697 B, sha256 23893b513d9c) · <https://colorlib.com/etc/cf/ContactFrom_v16/index.html> |

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/contactdrop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/contactdrop/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Full-page purple gradient background renders correctly
- [x] Navigation bar with "Co." logo and "CONTACT US" button
- [ ] Centered white card with header image banner
- [x] "CONTACT US" heading on the banner with dark overlay
- [ ] Close (X) button dismisses the card
- [ ] Four form fields with left-side icons (name, email, phone, message)
- [ ] Light gray input borders and placeholder text
- [ ] Validation: red border + red X on invalid fields
- [x] "SEND NOW" pill button with purple background
- [x] Footer links to componentdock.com
- [ ] Responsive layout (mobile-friendly)
- [x] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
