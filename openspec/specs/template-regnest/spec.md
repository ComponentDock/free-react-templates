# Template: Regnest (Booking Ticket Registration Form)

> Recreation of ColorLib "Regform 29" (https://colorlib.com/wp/template/colorlib-regform-29/)
> Preview unreachable (404); implementation based on screenshot analysis.

## Purpose

Provide a clean, centered booking ticket registration form with an image
carousel, supporting multiple ticket types with dynamic pricing.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/regform/colorlib-regform-29/ (HTTP 200, 3,768 B, fetched 2026-10-23) and its theme stylesheet `etc/regform/colorlib-regform-29/css/style.css` (11,478 B, sha256 `1098131a35d1…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#385cb9` | 4 declarations — `.form-v3-content .form-detail h2::before`, `.form-v3-content .form-detail .special span` |
| Surface | `#ffffff` | 2 declarations — `.form-v3-content`, `.form-v3-content .form-detail .register` |
| Ink / dark surface | `#333333` | 9 declarations — `.form-v3-content .form-right i`, `.form-v3-content .form-detail h2` |
| Typeface | `'Raleway', sans-serif` (2 rules — .form-v3-content)<br>`'Lora', serif` (1 rule — .form-v3-content .form-detail h2) | `font-family` declarations in the theme sheet |

Palette in order of use: `#333333` ×9, `#385cb9` ×4, `#666666` ×4, `#e5e5e5` ×2, `#ffffff` ×2, `#000000` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.

## Requirements

### Requirement: Form renders all booking fields

Users SHALL see a "Booking Tickets" heading, inputs for Full Name, Email,
Person count, Date, and Ticket Type, a price display, terms checkbox, and
a "BUY NOW" button.

#### Scenario: renders the form with all fields

- **WHEN** the page loads
- **THEN** the heading "Booking Tickets" is visible
- **AND** a "Full Name" text input exists
- **AND** an "Email" text input exists
- **AND** a "Person" number input exists
- **AND** a "Date" date input exists
- **AND** a "Ticket Type" select exists
- **AND** a price "$20.00" is displayed
- **AND** a "BUY NOW" button exists

### Requirement: Dynamic pricing based on ticket type and person count

The displayed price SHALL update when the ticket type or person count changes.
Default: VIP at $20/person.

#### Scenario: shows price based on ticket type

- **WHEN** the ticket type changes to "Regular"
- **THEN** the price updates to "$10.00"

#### Scenario: shows price based on person count

- **WHEN** the person count changes to 3
- **THEN** the total price updates to reflect 3 persons ($60.00 for VIP)

### Requirement: Form submission with terms validation

The form SHALL only submit when all required fields are filled and the terms
checkbox is checked. Upon submission, a confirmation message is shown.

#### Scenario: submits the form successfully

- **WHEN** the user fills in Full Name, Email, Date
- **AND** the user checks the terms checkbox
- **AND** the user clicks "BUY NOW"
- **THEN** a confirmation message is shown

#### Scenario: blocks submission without terms

- **WHEN** the user fills in all required fields
- **AND** the user does NOT check the terms checkbox
- **AND** the user clicks "BUY NOW"
- **THEN** the form remains visible

#### Scenario: blocks submission with empty required fields

- **WHEN** the user checks the terms checkbox
- **AND** required fields are empty
- **AND** the user clicks "BUY NOW"
- **THEN** the form remains visible

### Requirement: Image carousel navigation

The right side of the card SHALL display an image carousel with prev/next
navigation.

#### Scenario: image carousel navigation

- **WHEN** the user clicks the next arrow
- **THEN** the displayed image changes
- **WHEN** the user clicks the previous arrow
- **THEN** the image returns to the previous one

### Requirement: Footer attribution

The page footer SHALL link to Component Dock (https://www.componentdock.com/).

#### Scenario: footer links to Component Dock

- **THEN** a link to componentdock.com is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regnest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Form renders all booking fields — the heading "Booking Tickets" is visible
- [ ] Dynamic pricing based on ticket type and person count — the price updates to "$10.00"
- [ ] Form submission with terms validation — a confirmation message is shown
- [ ] Image carousel navigation — the displayed image changes
