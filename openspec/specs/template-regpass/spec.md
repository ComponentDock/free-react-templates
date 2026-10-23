# Template: Regpass (Registration Forms)

## Purpose

A Registration Forms template with all form fields, form fields, user and form sections. Recreation of ColorLib "Regform 19" (https://colorlib.com/wp/template/colorlib-regform-19/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript registration form template.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/regform/colorlib-regform-19/ (HTTP 200, 6,608 B, fetched 2026-10-23) and its theme stylesheet `etc/regform/colorlib-regform-19/css/style.css` (7,243 B, sha256 `9de3fb51940d…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ea9f48` | 1 declarations — `button` |
| Surface | `#ffffff` | 2 declarations — `.inner`, `button` |
| Ink / dark surface | `#000000` | 1 declarations — `.checkmark` |
| Typeface | **Mulish** — request the Google family `Mulish` (400/600/700) (`Muli` is the same face's former name); the sheet declares the file stems `Muli-Regular` (2 rules — body), `Muli-SemiBold` (2 rules — button), and a font-file stem is never a family: `css?family=Muli-Regular` answers HTTP 400, so an app that follows the stem falls back to the UA default | `font-family` declarations in the theme sheet |
| Radii | `2px` | `2px` (.checkmark) |

**Shipped app (recorded delta, 2026-10-23o):** the shipped app declares no `--font-*` token at all, so it renders in the Tailwind default face. The prep records the reference face; correcting the app is an implementer task, not a prep edit.

Palette in order of use: `#999999` ×8, `#ffffff` ×2, `#000000` ×1, `#333333` ×1, `#666666` ×1, `#6d5555` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders with all sections

Users SHALL see a hero image, registration form card, and footer when loading the page.

#### Scenario: Page renders with all sections

- **WHEN** the user loads the registration page
- **THEN** the hero image is visible
- **AND** the "Registration Form" heading is displayed
- **AND** the "Register Now" button is visible

### Requirement: All form fields are present

Users SHALL see username, email, password, repeat password, country, and gender fields.

#### Scenario: All form fields are present

- **WHEN** the user loads the registration page
- **THEN** the username field is displayed
- **AND** the email field is displayed
- **AND** the password field is displayed
- **AND** the repeat password field is displayed
- **AND** the country dropdown is displayed
- **AND** the gender dropdown is displayed

### Requirement: Form fields are arranged in two-column rows

Users SHALL see form fields arranged in pairs side by side.

#### Scenario: Form fields are arranged in two-column rows

- **WHEN** the user loads the registration page
- **THEN** the username and email fields are side by side
- **AND** the password and repeat password fields are side by side
- **AND** the country and gender dropdowns are side by side

### Requirement: User can fill in the form

Users SHALL be able to type in text and email fields.

#### Scenario: User can fill in the form

- **WHEN** the user types "john" in the username field
- **THEN** the username field contains "john"
- **WHEN** the user types "john@example.com" in the email field
- **THEN** the email field contains "john@example.com"

### Requirement: User can select dropdown options

Users SHALL be able to select options from country and gender dropdowns.

#### Scenario: User can select dropdown options

- **WHEN** the user selects "United Kingdom" from the country dropdown
- **THEN** the country dropdown shows "United Kingdom"
- **WHEN** the user selects "Female" from the gender dropdown
- **THEN** the gender dropdown shows "Female"

### Requirement: User can toggle the terms checkbox

Users SHALL be able to check and uncheck the terms agreement checkbox.

#### Scenario: User can toggle the terms checkbox

- **WHEN** the user clicks the terms checkbox
- **THEN** the terms checkbox is checked
- **WHEN** the user clicks the terms checkbox again
- **THEN** the terms checkbox is unchecked

### Requirement: Form submits without error

Users SHALL be able to submit the form without errors.

#### Scenario: Form submits without error

- **WHEN** the user clicks the "Register Now" button
- **THEN** the form submits without error

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the user loads the registration page
- **THEN** the footer contains a "Component Dock" link
- **AND** the link opens in a new tab
- **AND** the link points to "https://www.componentdock.com/"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regpass/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regpass/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page renders with all sections — the hero image is visible
- [ ] All form fields are present — the username field is displayed
- [ ] Form fields are arranged in two-column rows — the username and email fields are side by side
- [ ] User can fill in the form — the username field contains "john"
- [x] User can select dropdown options — the country dropdown shows "United Kingdom"
- [ ] User can toggle the terms checkbox — the terms checkbox is checked
- [ ] Form submits without error — the form submits without error
