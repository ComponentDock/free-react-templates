# Template: Regpilot (Registration Forms)

## Purpose

Registration form template with a split-panel layout: a hero image on the left, and a registration form on the right featuring name fields, username, email, gender select, password confirmation, and a register button.

Recreation of ColorLib "Colorlib Regform 17" (https://colorlib.com/wp/template/colorlib-regform-17/).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/colorlib-regform-17.zip (HTTP 200, 285,180 B, sha256 `5bab518dad77…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | none — grayscale design | no chromatic value in the design sheet |
| Surface | `#ffffff` | 2 declarations — `.inner`, `button` |
| Ink / dark surface | `#333333` | 7 declarations — `.cl-form-control::-webkit-input-placeholder`, `body` |
| Typeface | `Poppins-Regular` (6 rules — `.cl-form-control::-webkit-input-placeholder`)<br>`Poppins-SemiBold` (1 rule — `.inner h3`) | `font-family` declarations in the design sheet |

Palette in order of use: `#333333` ×7, `#ffffff` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- No rounding in the sheet: keep buttons and cards square unless a shared `packages/ui` component supplies its own.

## Requirements

### Requirement: Split-panel card layout

The template SHALL display a centered white card with a split layout on desktop: a hero image panel on the left, and the registration form on the right. On mobile, the layout SHALL stack vertically with the image hidden.

#### Scenario: Desktop layout

- **WHEN** the user opens the Regpilot page on a desktop viewport
- **THEN** the hero image panel occupies the left half of the card
- **AND** the registration form occupies the right half

#### Scenario: Mobile layout

- **WHEN** the user opens the Regpilot page on a mobile viewport
- **THEN** the hero image panel is hidden
- **AND** the registration form is displayed full-width

### Requirement: Hero image panel

The hero panel SHALL display a placeholder image with a semi-transparent overlay and a text overlay reading "#Collection 2024".

#### Scenario: Hero displays correctly

- **WHEN** the user views the hero panel
- **THEN** a placeholder image is displayed
- **AND** the text "#Collection 2024" is visible in white

### Requirement: Registration form fields

The form SHALL contain the following fields: First Name (required, text), Last Name (required, text), Username (required, text with user icon), Email Address (required, email with mail icon), Gender (required, select dropdown), Password (required, password with lock icon), Confirm Password (required, password with lock icon).

#### Scenario: All fields are rendered

- **WHEN** the user views the registration form
- **THEN** the heading "Registration Form" is visible
- **AND** input fields for First Name, Last Name, Username, Email Address, Password, and Confirm Password are present
- **AND** a select field for Gender is present
- **AND** a "Register" button is visible

### Requirement: Form submission with validation

The form SHALL validate that all required fields are filled and that Password matches Confirm Password before submitting.

#### Scenario: Successful registration

- **WHEN** all required fields are filled correctly and passwords match
- **AND** the user clicks "Register"
- **THEN** a thank-you confirmation message is shown

#### Scenario: Password mismatch error

- **WHEN** the Password field is "abc123" and the Confirm Password field is "xyz789"
- **AND** the user clicks "Register"
- **THEN** an error message "Passwords do not match" is displayed

#### Scenario: Empty fields prevent submission

- **WHEN** the form is empty
- **AND** the user clicks "Register"
- **THEN** the form remains visible without a confirmation message

### Requirement: Background

The template SHALL display a light gray (#e8e8e8) background filling the full viewport.

#### Scenario: Background renders correctly

- **WHEN** the user loads the page
- **THEN** a light gray background is visible behind the card

### Requirement: Component Dock footer

The footer SHALL link to https://www.componentdock.com/ with the text "Made with Component Dock".

#### Scenario: Footer displays correctly

- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regpilot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regpilot/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split-panel card layout — the hero image panel occupies the left half of the card
- [ ] Hero image panel — a placeholder image is displayed
- [x] Registration form fields — the heading "Registration Form" is visible
- [ ] Form submission with validation — a thank-you confirmation message is shown
- [ ] Background — a light gray background is visible behind the card
