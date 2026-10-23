---
name: formforge
description: >-
  Multi-step form wizard template — recreation of ColorLib Wizard 28
  (https://colorlib.com/wp/template/colorlib-wizard-28/).
  Three-step wizard: Personal Info → Address → Payment.
  Gradient background (#4158d0 → #c850c0 → #ffcc70), green accent (#36c240),
  Roboto + Montserrat fonts.
---

# Template: Formforge (Bootstrap Wizards)

## Purpose

FormForge is a multi-step form wizard that recreates the ColorLib Wizard 28 design under a
different name. It provides a three-step flow (Personal Info, Address, Payment) with a vibrant
gradient background, green accent colors, and Roboto/Montserrat typography. Users fill in
personal details, enter their address, and provide payment information before submitting.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/colorlib-wizard-28.zip (HTTP 200, 2,724,594 B, sha256 `4a43586bec26…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#36c240` | 3 declarations — `.btn-next, .btn-back, .btn-last`, `.cl-progress-bar` |
| Other chromatic values | `#22ae2c` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 6 declarations — `.btn-next, .btn-back, .btn-last`, `.cl-progress-bar` |
| Ink / dark surface | `#333333` | 2 declarations — `.input--style-1`, `.input-icon` |
| Typeface | `Roboto` (2 rules — `.input--style-1`)<br>`Montserrat` (1 rule — `.card-1 .card-heading`) | `font-family` declarations in the design sheet |
| Radii | `17.5px`, `22.5px`, `3px`, `5px` | `17.5px` (`.cl-progress`); `22.5px` (`.btn-next, .btn-back, .btn-last`); `3px` (`.input--style-1`); `5px` (`.card-1`) |

Palette in order of use: `#ffffff` ×6, `#999999` ×6, `#36c240` ×3, `#666666` ×2, `#333333` ×2, `#22ae2c` ×1, `#f5f5f5` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `style.css` — 12,835 B, sha256 `14ef25410eb7…` (member of `downloads/free/colorlib-wizard-28.zip`). These sheets are archive members: no live demo serves this skin.

## Requirements

### Requirement: Gradient background

The page SHALL display a full-viewport gradient background transitioning from blue (#4158d0)
through pink (#c850c0) to yellow (#ffcc70) at approximately 316 degrees.

#### Scenario: Gradient renders on page load

- **WHEN** the user visits the FormForge page
- **THEN** the page background should be a gradient from blue through pink to yellow

### Requirement: Centered card layout

The form SHALL be contained in a white card centered on the page with rounded corners (5px),
a subtle shadow, and max-width of 690px.

#### Scenario: Card displays centered

- **WHEN** the user visits the FormForge page
- **THEN** a white card should be centered on the page
- **AND** the card should have rounded corners and a shadow

### Requirement: Card heading

The card SHALL display a "Form Wizard" heading using Montserrat font, uppercase, white at 60%
opacity, positioned overlapping the card top.

#### Scenario: Heading renders with correct styling

- **WHEN** the user visits the FormForge page
- **THEN** the card heading should display "Form Wizard"
- **AND** the heading should use Montserrat font and be uppercase

### Requirement: Progress bar

The wizard SHALL display a progress bar showing the current step percentage with a green fill
(#36c240) on a light gray track.

#### Scenario: Progress bar shows step 1 percentage

- **WHEN** the user is on step 1 of 3
- **THEN** the progress bar should show 33%

#### Scenario: Progress bar updates on navigation

- **WHEN** the user advances to step 2
- **THEN** the progress bar should show 67%

### Requirement: Step 1 — Personal Info

Step 1 SHALL display fields for Full name, Email, and Phone number with labels and a Next
button.

#### Scenario: Step 1 fields render

- **WHEN** the user is on step 1
- **THEN** fields for "Full name", "Email", and "Phone number" should be visible
- **AND** a "Next" button should be visible

### Requirement: Step 2 — Address

Step 2 SHALL display fields for Building Number, Street, Town, and Zip code with Back and
Next buttons.

#### Scenario: Step 2 fields render

- **WHEN** the user advances to step 2
- **THEN** fields for "Building Number", "Street", "Town", and "Zip code" should be visible
- **AND** "Back" and "Next" buttons should be visible

### Requirement: Step 3 — Payment

Step 3 SHALL display fields for Card Holder Name, Card Number (with icon), CVC (with icon),
and Expiration with Back and Submit buttons.

#### Scenario: Step 3 fields render

- **WHEN** the user advances to step 3
- **THEN** fields for "Card Holder Name", "Card Number", "CVC", and "Expiration" should be visible
- **AND** "Back" and "Submit" buttons should be visible

### Requirement: Step navigation

The wizard SHALL allow forward and backward navigation between steps, preserving entered data.

#### Scenario: Advance to next step

- **WHEN** the user clicks "Next"
- **THEN** the next step should become visible
- **AND** the previous step fields should be hidden

#### Scenario: Return to previous step

- **WHEN** the user clicks "Back"
- **THEN** the previous step should become visible
- **AND** previously entered data should be preserved

### Requirement: Form submission

The wizard SHALL handle form submission when the Submit button is clicked on step 3.

#### Scenario: Submit completes the form

- **WHEN** the user clicks "Submit" on step 3
- **THEN** the form should handle the submission

### Requirement: Input focus styling

Form inputs SHALL display a green border (#36c240) when focused.

#### Scenario: Focus shows green border

- **WHEN** the user focuses on any form input
- **THEN** the input border should change to green

### Requirement: Pill-shaped buttons

Next and Submit buttons SHALL have pill shape (22.5px radius) with green background and shadow.
Back buttons SHALL be gray without shadow.

#### Scenario: Button styling

- **WHEN** the user views the form actions
- **THEN** Next/Submit buttons should be green with pill shape
- **AND** Back buttons should be gray

### Requirement: Footer with Component Dock link

The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders

- **WHEN** the user views the page footer
- **THEN** a link to Component Dock should be visible

### Requirement: Responsive layout

The template SHALL be responsive, adjusting layout for mobile devices (< 768px).

#### Scenario: Mobile layout adjusts

- **WHEN** the user views the page on a mobile device
- **THEN** the card heading should reposition and reduce in size
- **AND** buttons should display as full-width blocks

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formforge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Gradient background — the page background should be a gradient from blue through pink to yellow
- [ ] Centered card layout — a white card should be centered on the page
- [x] Card heading — the card heading should display "Form Wizard"
- [ ] Progress bar — the progress bar should show 33%
- [x] Step 1 — Personal Info — fields for "Full name", "Email", and "Phone number" should be visible
- [x] Step 2 — Address — fields for "Building Number", "Street", "Town", and "Zip code" should be visible
- [x] Step 3 — Payment — fields for "Card Holder Name", "Card Number", "CVC", and "Expiration" should be visible
- [ ] Step navigation — the next step should become visible
- [ ] Form submission — the form should handle the submission
- [ ] Input focus styling — the input border should change to green
- [ ] Pill-shaped buttons — Next/Submit buttons should be green with pill shape
- [ ] Responsive layout — the card heading should reposition and reduce in size
