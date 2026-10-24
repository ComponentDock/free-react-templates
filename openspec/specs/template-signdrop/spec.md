# Template: Signdrop (Registration Forms)

## Purpose

Signdrop is a registration form template — a recreation of ColorLib Signup Form 06 (https://colorlib.com/wp/template/signup-form-06/). It features a split viewport layout with a centered registration form on the left and a full-height hero image on the right.
- **Source design:** ColorLib "Signup Form 06" — https://colorlib.com/wp/template/signup-form-06/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/signup-form-06/ (HTTP 200, 5,263 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/signup-form-06/css/style.css` (17,208 B, sha256 `9a7767475da4…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 6 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled` |
| Other chromatic values | `#0062cc` | `#0062cc` × 2 (.cl-btn-primary:hover) |
| Surface | `#ffffff` | 11 declarations — `body`, `.cl-form-control` |
| Ink / dark surface | `#212529` | 3 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`"Roboto", sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `0.25rem`, `4px` | `0.25rem` (.cl-form-control); `4px` (.control__indicator) |

Palette in order of use: `#ffffff` ×11, `#007bff` ×6, `#6c757d` ×6, `#212529` ×3, `#0062cc` ×2, `#495057` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders with registration form

Users SHALL see a full-viewport split layout with a white form panel on the left and a hero image on the right.

#### Scenario: Heading is visible

- **WHEN** the user loads the page
- **THEN** the heading "Register" is visible

#### Scenario: Form fields are present

- **WHEN** the user loads the page
- **THEN** an "Email" input is visible
- **AND** a "Password" input is visible
- **AND** a "Re-type Password" input is visible

#### Scenario: Terms checkbox is present

- **WHEN** the user loads the page
- **THEN** the "Agree our Terms and Conditions" checkbox is unchecked by default

### Requirement: User interactions work correctly

Users SHALL be able to fill in form fields and toggle the terms checkbox.

#### Scenario: User types in email field

- **WHEN** the user types "test@example.com" in the email field
- **THEN** the email field contains "test@example.com"

#### Scenario: User toggles terms checkbox

- **WHEN** the user clicks the terms checkbox
- **THEN** the checkbox is checked

### Requirement: Social registration buttons are present

Users SHALL see social login buttons for Facebook, Twitter, and Google.

#### Scenario: Social buttons visible

- **WHEN** the user loads the page
- **THEN** "Register with Facebook" button is visible
- **AND** "Register with Twitter" button is visible
- **AND** "Register with Google" button is visible

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to Component Dock.

#### Scenario: Footer link present

- **WHEN** the user loads the page
- **THEN** a link to "https://www.componentdock.com/" is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/signdrop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/signdrop/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Page renders with registration form — the heading "Register" is visible
- [ ] User interactions work correctly — the email field contains "test@example.com"
- [x] Social registration buttons are present — "Register with Facebook" button is visible
