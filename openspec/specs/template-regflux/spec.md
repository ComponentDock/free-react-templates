# Template: Regflux (Registration Form)

## Purpose

Recreation of ColorLib Regform 14 (https://colorlib.com/wp/template/colorlib-regform-14/).
A centered registration form on a light blue background with gender toggle buttons,
collapsible additional info section, and clean uppercase labels.
- **Source design:** ColorLib "Colorlib Regform 14" — https://colorlib.com/wp/template/colorlib-regform-14/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/regform/colorlib-regform-14/ (HTTP 200, 6,004 B, fetched 2026-10-23) and its theme stylesheet `etc/regform/colorlib-regform-14/css/style.css` (11,833 B, sha256 `b7e84e5dbab9…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#1da0f2` | 8 declarations — `a`, `input:focus` |
| Other chromatic values | `#c70000` | `#c70000` × 2 (label.error:after) |
| Surface | `#ffffff` | 8 declarations — `.cl-container`, `.form-radio input + label` |
| Ink / dark surface | `#222222` | 3 declarations — `body`, `ul li` |
| Typeface | `'Material-Design-Iconic-Font'` (2 rules — li.init:after)<br>`'Montserrat'` (2 rules — body) | `font-family` declarations in the theme sheet |
| Radii | `5px`, `0 5px 5px 0`, `5px 0 0 5px` | `5px` (.signup-form::-webkit-scrollbar-track); `0 5px 5px 0` (.form-flex input + label:last-of-type); `5px 0 0 5px` (.form-flex input + label:first-of-type) |

Palette in order of use: `#1da0f2` ×8, `#ffffff` ×8, `#999999` ×6, `#ebebeb` ×4, `#222222` ×3, `#c70000` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Form renders all required fields

The registration form SHALL display First Name, Last Name, Birth Date, Gender toggle
(Male/Female), Phone Number, Password, and Repeat Your Password fields.

#### Scenario: All fields are visible on initial render

- **WHEN** I render the Regflux registration form
- **THEN** I see a "First Name" text input
- **AND** I see a "Last Name" text input
- **AND** I see a "Birth Date" date input
- **AND** I see a "Phone Number" telephone input
- **AND** I see a "Password" password input
- **AND** I see a "Repeat Your Password" password input
- **AND** I see a "Submit" button

### Requirement: Gender toggle selection

The form SHALL provide Male and Female toggle buttons for gender selection.

#### Scenario: Selecting a gender highlights the chosen button

- **WHEN** I render the Regflux registration form
- **AND** I click the "Male" button
- **THEN** the "Male" button is highlighted with the accent color
- **WHEN** I click the "Female" button
- **THEN** the "Female" button is highlighted
- **AND** the "Male" button is no longer highlighted

### Requirement: Collapsible additional info section

The form SHALL provide a collapsible "Additional Info" section with Address and City fields.

#### Scenario: Additional info expands on click

- **WHEN** I render the Regflux registration form
- **THEN** I do not see an "Address" field
- **WHEN** I click the "Additional Info" toggle
- **THEN** I see an "Address" text input
- **AND** I see a "City" text input

#### Scenario: Additional info collapses on second click

- **WHEN** I render the Regflux registration form
- **AND** I click the "Additional Info" toggle
- **AND** I click the "Additional Info" toggle again
- **THEN** I do not see an "Address" field

### Requirement: Form submission shows confirmation

The form SHALL display a success message when submitted.

#### Scenario: Submitting the form shows confirmation

- **WHEN** I render the Regflux registration form
- **AND** I click the "Submit" button
- **THEN** I see a "Registration submitted" confirmation message
- **AND** the form fields are no longer visible

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regflux/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regflux/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Form renders all required fields — I see a "First Name" text input
- [x] Gender toggle selection — the "Male" button is highlighted with the accent color
- [ ] Collapsible additional info section — I do not see an "Address" field
- [x] Form submission shows confirmation — I see a "Registration submitted" confirmation message
