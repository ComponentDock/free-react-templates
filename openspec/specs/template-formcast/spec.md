---
name: FormCast
description: >-
  A clean, centered contact form template with a map-inspired background,
  envelope icon, two-column name/email fields, textarea, and coral-red send
  button. Recreation of ColorLib Contact Form V20.
source: https://colorlib.com/wp/template/contact-form-v20/
preview: https://preview.colorlib.com/theme/contact-form-v20/
status: in-progress
---

# Template: Formcast (Contact Form)

## Purpose

FormCast is a centered contact form template that recreates ColorLib Contact Form V20 (https://colorlib.com/wp/template/contact-form-v20/). It features a full-screen muted map-like gradient background with a centered white card, envelope icon, two-column name/email fields, a message textarea, and a coral-red send button.

Design tokens: brand coral-red #ef4444, font Inter, card shadow, light gray-blue gradient background.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Contact Form V20** — https://colorlib.com/wp/template/contact-form-v20/
- **Preview**: **no live demo** — `/theme/contact-form-v20/`, `/theme/bootstrap/`, `/theme/bft/`, `/theme/bb/`, `/theme/bac/`, `/theme/sidebar/` and `/etc/{regform,bforms}/` all answered **404** on 2026-10-23. The reference is the official source archive `https://preview.colorlib.com/downloads/free/contact-form-v20.zip` (HTTP 200, 71,150 B): `contact-form-v20/index.html` 1,761 B, title `Contact V20`.
- **Stylesheet measured**: `css/style.css` inside the archive — 11,349 bytes, sha256 `a12b10eedd02…`. No live twin exists to hash against, so this is archive-only evidence (stated as such, not as a verified live page).
- **Measured how**: hex-literal census of that sheet + winning rule per selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand coral | `#ff4b5a` | 2 | `.contact100-form-btn` background · `.focus-input100` 1px focus ring (`border-radius: 2px`) |
| Button hover | `#333333` | 3 | `.contact100-form-btn:hover` background; also `.contact100-form-title` and `.input100` text |
| Placeholder | `#555555` | 8 | `input`/`textarea` `::placeholder` (all vendor prefixes) |
| Error | `#c80000` | 2 | `.alert-validate::before/::after` (client-side validation bubble) |
| Input border | `#dbdbdb` | 1 | `.wrap-input100` `1px solid`, `border-radius: 2px` |
| Symbol ring | `#e7e7e7` | 1 | `.contact100-form-symbol` 100×100 circle, `1px`, `border-radius: 50%` |
| Card / symbol | `#fff` | 6 | `.wrap-contact100` background · `.contact100-form-symbol` fill · labels |
| Page veil | `rgba(173,173,173,0.4)` | — | `.container-contact100::before` full-bleed overlay above the map iframe (`z-index: -2`) |
| Link | `#666666` | 1 | `a` |

Bootstrap residues (`#212529`, `#007bff`, `#0056b3`) are unused by the page and are **not** tokens.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Page | `OpenSans-Regular, sans-serif` | `body, html` override (custom face, declared `@font-face` with a local `fonts/` woff2) |
| Card title | OpenSans-Regular · 30px · `#333333` · centered | `.contact100-form-title` |
| Inputs | OpenSans-Regular · 20px (textarea 15px) · `#333333` | `input.input100` / `textarea.input100` |
| Button | OpenSans-Regular · 13px · uppercase-ish label `Send` | `.contact100-form-btn` |

Substitution for the app: **Open Sans** is on Google Fonts (the app ships Inter — a documented delta, not a reference face).

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Page | `min-height: 100vh`, centered flex, `padding: 15px`; Google-map iframe at `z-index: -2`, gray veil `rgba(173,173,173,0.4)` above it |
| Card | `.wrap-contact100` **800px**, `border-radius: 2px`, `margin-top: 55px`, `padding: 92px 70px 88px 70px`, `box-shadow: 0 3px 20px 0 rgba(0,0,0,0.1)` |
| Symbol | 100×100 circle, `1px solid #e7e7e7`, white fill, centered on the card's top edge (`top: -55px`) |
| Fields | `.wrap-input100` 1px `#dbdbdb`, `border-radius: 2px`, `margin-bottom: 30px`; input `height: 60px`; textarea `min-height: 199px` |
| Name/Email row | `.rs1` = two columns on ≥576px (flex, `width: calc(100% - 15px)`) |
| Focus | `.focus-input100` inset ring 1px `#ff4b5a`, `border-radius: 2px`, scale-in on focus |
| Button | `height: 50px`, `min-width: 100px`, `background: #ff4b5a`, `border-radius: 2px`, right-aligned (`justify-content: flex-end`), hover `#333333` |

Section order measured in the archive DOM: map iframe → gray veil → card [`contact100-form-symbol` (100px circle, mail glyph) → `h3 "Drop Us A Message"` → Name + Email (two-up) → Message textarea → `Send` right-aligned] → end. No footer in the reference; the app appends the Component Dock footer.

## Requirements

### Requirement: Page renders with correct layout and heading

The template SHALL display a full-screen gradient background with a centered white contact card containing an envelope icon and the heading "Drop Us A Message".

#### Scenario: Heading is visible on page load

- **WHEN** the page loads
- **THEN** the heading "Drop Us A Message" is displayed

#### Scenario: Envelope icon is visible

- **WHEN** the page loads
- **THEN** an envelope icon is displayed above the heading

#### Scenario: Contact card is centered

- **WHEN** the page loads
- **THEN** the contact card is rendered with a centered layout

### Requirement: Form fields are present and interactive

The template SHALL display a Name text input, an Email Address email input, a Message textarea, and a Send submit button.

#### Scenario: All form fields are rendered

- **WHEN** the page loads
- **THEN** a Name field is present
- **AND** an Email Address field is present
- **AND** a Message textarea is present
- **AND** a Send button is present

#### Scenario: User can type in the name field

- **WHEN** the user types "Jane" in the Name field
- **THEN** the Name field value is "Jane"

#### Scenario: User can type in the email field

- **WHEN** the user types "jane@example.com" in the Email field
- **THEN** the Email field value is "jane@example.com"

#### Scenario: User can type in the message field

- **WHEN** the user types "Hello!" in the Message field
- **THEN** the Message field value is "Hello!"

#### Scenario: Form fields are required

- **WHEN** the form renders
- **THEN** the Name field is required
- **AND** the Email field is required
- **AND** the Message field is required

#### Scenario: Send button has submit type

- **WHEN** the form renders
- **THEN** the Send button has type="submit"

### Requirement: Form submission shows success state

The template SHALL display a success message after the form is submitted with all fields filled in.

#### Scenario: Submission shows thank you message

- **WHEN** the user fills in all fields and clicks "Send"
- **THEN** a success state is displayed with a "Thank You!" message
- **AND** the message "Your message has been sent" is shown

#### Scenario: Form can be reset after submission

- **WHEN** the form was submitted successfully
- **AND** the user clicks "Send Another Message"
- **THEN** the form reappears with empty fields

### Requirement: Footer links to Component Dock

The template SHALL display a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a "Component Dock" link is present
- **AND** it points to https://www.componentdock.com/
- **AND** it opens in a new tab

### Requirement: Document title is set correctly

The template SHALL set the document title to "FormCast — Contact Form Template".

#### Scenario: Document title on load

- **WHEN** the page loads
- **THEN** the document title is "FormCast — Contact Form Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formcast/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formcast/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page renders with correct layout and heading — the heading "Drop Us A Message" is displayed
- [ ] Form fields are present and interactive — a Name field is present
- [x] Form submission shows success state — a success state is displayed with a "Thank You!" message
- [x] Document title is set correctly — the document title is "FormCast — Contact Form Template"
