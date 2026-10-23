# Template: Formzen (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V10"
(https://colorlib.com/wp/template/contact-form-v10/).
A minimalist contact form page with a light gray background, centered white
card with subtle shadow, and a clean purple-branded send button.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/cf/ContactFrom_v10/index.html (HTTP 200, 2,307 B, fetched 2026-10-23) and its theme stylesheet `etc/cf/ContactFrom_v10/css/style.css` (9,750 B, sha256 `7f23a2e68953…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#c80000` | 3 declarations — `.alert-validate::after`, `.alert-validate::before` |
| Other chromatic values | `#403866` | `#403866` × 2 (.contact100-form-title) |
| Surface | `#ffffff` | 6 declarations — `body`, `.input100` |
| Ink / dark surface | `#212529` | 1 declarations — `body` |
| Typeface | `Ubuntu-Bold` (5 rules — a)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `31px`, `14px` | `31px` (.wrap-input100); `14px` (.alert-validate::before) |

Palette in order of use: `#bdbdd3` ×8, `#ffffff` ×6, `#c80000` ×3, `#403866` ×2, `#0056b3` ×1, `#007bff` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders with form

The page SHALL display a centered contact form card on a light gray background.

#### Scenario: Form heading is visible

- **WHEN** I visit the Formzen page
- **THEN** I should see the heading "SEND US A MESSAGE"

#### Scenario: All form fields are present

- **WHEN** I visit the Formzen page
- **THEN** I should see Name, Email, Phone, and Message fields
- **AND** I should see a Send button

### Requirement: Form field interactions

The form SHALL accept user input in all fields.

#### Scenario: Name field accepts text

- **WHEN** I type "Jane Smith" in the Name field
- **THEN** the Name field should contain "Jane Smith"

#### Scenario: Email field accepts text

- **WHEN** I type "jane@example.com" in the Email field
- **THEN** the Email field should contain "jane@example.com"

#### Scenario: Phone field accepts text

- **WHEN** I type "555-1234" in the Phone field
- **THEN** the Phone field should contain "555-1234"

#### Scenario: Message field accepts text

- **WHEN** I type "Hello there" in the Message field
- **THEN** the Message field should contain "Hello there"

### Requirement: Form submission

The form SHALL prevent default browser navigation on submit.

#### Scenario: Clicking Send does not navigate

- **WHEN** I click the Send button
- **THEN** the page should not navigate away

### Requirement: Visual styling

The page SHALL match the original design's visual language.

#### Scenario: Page has light gray background

- **WHEN** I visit the Formzen page
- **THEN** the page background should be light gray

#### Scenario: Card has white background

- **WHEN** I visit the Formzen page
- **THEN** the form card should have a white background with shadow

#### Scenario: Send button is purple

- **WHEN** I visit the Formzen page
- **THEN** the Send button should be purple

### Requirement: Footer

The page SHALL display a footer linking to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** I visit the Formzen page
- **THEN** I should see a "More templates at Component Dock" link
- **AND** the link should point to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formzen/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formzen/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page renders with form — I should see the heading "SEND US A MESSAGE"
- [ ] Form field interactions — the Name field should contain "Jane Smith"
- [ ] Form submission — the page should not navigate away
- [ ] Visual styling — the page background should be light gray
