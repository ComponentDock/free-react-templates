# Template: Groove (Concert Registration Form)

Recreation of ColorLib "Regform 35" (https://colorlib.com/wp/template/colorlib-regform-35/).

## Purpose

A free concert registration form template with a dark card over a blue background, semi-transparent inputs in a 2x2 grid, and a coral Register button.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/regform/colorlib-regform-35/ (HTTP 200, 1,587 B, fetched 2026-10-23) and its theme stylesheet `etc/regform/colorlib-regform-35/css/style.css` (6,144 B, sha256 `4e675dd233b6…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#4077c8` | 1 declarations — `.page-content` |
| Surface | `#ffffff` | 3 declarations — `.form-v9-content`, `.form-v9-content .form-detail h2::after` |
| Typeface | `'Nunito', sans-serif` (3 rules — .form-v9-content) | `font-family` declaration in the theme sheet |
| Radii | `15px`, `25px`, `27.5px` | `15px` (.form-v9-content); `25px` (.form-v9-content .form-detail .register); `27.5px` (.form-v9-content .form-detail input) |

Palette in order of use: `#e5e5e5` ×4, `#ffffff` ×3, `#4077c8` ×1, `#999999` ×1, `#cccccc` ×1, `#d95252` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Heading display

Users SHALL see a "Registration Form" heading centered above the form.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Registration Form" is displayed

### Requirement: Form fields

Users SHALL see four input fields: Name, Email, Password, and Confirm Password.

#### Scenario: All four fields are present

- **WHEN** the form renders
- **THEN** inputs for "Your Name", "Your Email", "Your Password", and "Confirm Password" exist

#### Scenario: Fields accept input

- **WHEN** a user types into any field
- **THEN** the field value updates accordingly

### Requirement: Form submission

Users SHALL be able to click Register without causing a page navigation.

#### Scenario: Submit prevented

- **WHEN** the user clicks the Register button
- **THEN** the form does not submit or navigate

### Requirement: Responsive layout

Users SHALL see inputs stack to a single column on small screens.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrow
- **THEN** inputs are displayed in a single column

### Requirement: Footer attribution

Users SHALL see a link to componentdock.com in the footer.

#### Scenario: Footer link present

- **WHEN** the page renders
- **THEN** a link to https://www.componentdock.com/ is visible with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/groove/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/groove/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Heading display — a heading with text "Registration Form" is displayed
- [x] Form fields — inputs for "Your Name", "Your Email", "Your Password", and "Confirm Password" exist
- [ ] Form submission — the form does not submit or navigate
- [ ] Responsive layout — inputs are displayed in a single column
