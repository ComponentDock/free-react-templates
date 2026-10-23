# Template: Formreach (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form 11" (https://colorlib.com/wp/template/contact-form-11/) as a React + Tailwind CSS template. A minimal two-column contact form with bold typography and bottom-border-only inputs.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/contact-form-11/ (HTTP 200, 2,969 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/contact-form-11/css/style.css` (14,659 B, sha256 `86cb1b267770…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#eb4d55` | 5 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled` |
| Other chromatic values | `#e61f29` | `#e61f29` × 2 (.cl-btn-primary:hover) |
| Surface | `#ffffff` | 9 declarations — `body`, `.cl-form-control` |
| Ink / dark surface | `#000000` | 3 declarations — `body`, `.cl-form-control:focus` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`"Poppins", sans-serif` (1 rule — h2) | `font-family` declarations in the theme sheet |
| Radii | `0.25rem`, `0 !important` | `0.25rem` (.cl-form-control); `0 !important` (.cl-rounded-0) |

Palette in order of use: `#ffffff` ×9, `#eb4d55` ×5, `#6c757d` ×4, `#000000` ×3, `#212529` ×3, `#495057` ×3.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders main heading and two-column layout

The page SHALL display a prominent "Fill the form. It's easy." heading and a two-column layout (form on left, sidebar on right).

#### Scenario: Main heading is visible

- **WHEN** the page loads
- **THEN** the heading "Fill the form" is rendered

### Requirement: Form renders all required fields

The contact form SHALL include first name, last name, email, and message fields, plus a submit button.

#### Scenario: First name and last name fields exist

- **WHEN** the form is rendered
- **THEN** inputs with placeholders "First name" and "Last name" are visible

#### Scenario: Email field exists

- **WHEN** the form is rendered
- **THEN** an input with placeholder "Email" is visible

#### Scenario: Message textarea exists

- **WHEN** the form is rendered
- **THEN** a textarea with placeholder "Write your message" is visible

#### Scenario: Submit button exists

- **WHEN** the form is rendered
- **THEN** a button labeled "Send Message" is visible

### Requirement: Form accepts user input

The form fields SHALL accept typed input and update their values.

#### Scenario: User types in first name

- **WHEN** the user types "John" in the first name field
- **THEN** the field value is "John"

#### Scenario: User types in last name

- **WHEN** the user types "Doe" in the last name field
- **THEN** the field value is "Doe"

#### Scenario: User types in email

- **WHEN** the user types "john@example.com" in the email field
- **THEN** the field value is "john@example.com"

#### Scenario: User types in message

- **WHEN** the user types "Hello" in the message field
- **THEN** the field value is "Hello"

### Requirement: Form submission shows success message

The form SHALL prevent default submission and display a success message.

#### Scenario: Success message appears after submit

- **WHEN** the user clicks "Send Message"
- **THEN** the text "Your message was sent, thank you!" is displayed

### Requirement: Sidebar displays descriptive content

The right column SHALL display a heading, paragraph, and "Read more" link.

#### Scenario: Sidebar heading is visible

- **WHEN** the page loads
- **THEN** the heading "Let's talk about everything" is rendered

#### Scenario: Sidebar link is present

- **WHEN** the page loads
- **THEN** a link labeled "Read more" is visible

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link target

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formreach/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formreach/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Page renders main heading and two-column layout — the heading "Fill the form" is rendered
- [x] Form renders all required fields — inputs with placeholders "First name" and "Last name" are visible
- [ ] Form accepts user input — the field value is "John"
- [x] Form submission shows success message — the text "Your message was sent, thank you!" is displayed
- [ ] Sidebar displays descriptive content — the heading "Let's talk about everything" is rendered
