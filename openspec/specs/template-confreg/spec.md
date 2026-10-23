# Template: Confreg (Registration Forms)

## Purpose

Conference registration form template with a split-panel layout: a hero image with green overlay on the left, and a two-column registration form on the right featuring personal info, meal preference, payment mode, donation slider, and submit/reset buttons.

Recreation of ColorLib "Colorlib Regform 16" (https://colorlib.com/wp/template/colorlib-regform-16/).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/regform/colorlib-regform-16/ (HTTP 200, 7,041 B, fetched 2026-10-23) and its theme stylesheet `etc/regform/colorlib-regform-16/css/style.css` (18,479 B, sha256 `381cad107901…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#329e5e` | 9 declarations — `input:focus`, `input[type=radio]:checked ~ .cl-check` |
| Other chromatic values | `#c70000` | `#c70000` × 2 (label.error:after) |
| Surface | `#ffffff` | 15 declarations — `.noUi-handle`, `.noUi-active` |
| Ink / dark surface | `#222222` | 5 declarations — `.form-link`, `body` |
| Typeface | `'Material-Design-Iconic-Font'` (4 rules — li.init:after)<br>`'Poppins'` (4 rules — h2) | `font-family` declarations in the theme sheet |
| Radii | `5px`, `3px`, `50%` | `5px` (input); `3px` (.noUi-connects); `50%` (.cl-check) |

Palette in order of use: `#ffffff` ×15, `#329e5e` ×9, `#222222` ×5, `#ebebeb` ×5, `#bbbbbb` ×3, `#999999` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Split-panel layout

The template SHALL display a two-column layout on desktop: a hero image panel on the left with a dark green overlay and registration headline, and the registration form on the right. On mobile, the layout SHALL stack vertically.

#### Scenario: Desktop layout

- **WHEN** the user opens the Confreg page on a desktop viewport
- **THEN** the hero panel occupies the left half of the card
- **AND** the registration form occupies the right half

#### Scenario: Mobile layout

- **WHEN** the user opens the Confreg page on a mobile viewport
- **THEN** the hero panel is hidden
- **AND** the registration form is displayed full-width

### Requirement: Hero panel content

The hero panel SHALL display a background image with a dark green semi-transparent overlay, the heading "Register Now" in white uppercase text, and the subtitle "while seats are available !" below it.

#### Scenario: Hero displays correctly

- **WHEN** the user views the hero panel
- **THEN** the heading "Register Now" is visible
- **AND** the subtitle "while seats are available !" is visible
- **AND** a conference event image is displayed

### Requirement: Registration form fields

The form SHALL contain the following fields arranged in two columns: First Name (required), Last Name (required), Company (required), Email (required), Phone Number (required) in the left column; Meal Preference (dropdown), Payment Mode (radio buttons), DD/Cheque No., Drawn On (Bank Name), Payable At in the right column.

#### Scenario: All text fields present

- **WHEN** the user views the form
- **THEN** fields for First Name, Last Name, Company, Email, and Phone Number are visible
- **AND** each required field has a red asterisk marker

#### Scenario: Meal preference dropdown

- **WHEN** the user views the Meal Preference field
- **THEN** a dropdown is shown with options Vegetarian, Vegan, Non-Vegetarian
- **AND** Vegetarian is selected by default

#### Scenario: Payment mode radio buttons

- **WHEN** the user views the Payment Mode field
- **THEN** radio buttons for Cash, Cheque, and Demand Draft are displayed
- **AND** Cash is selected by default

### Requirement: Donation slider

The form SHALL include a "Donate Us" range slider from 0 to 1000 with a default value of 500. The current value SHALL be displayed in a green badge next to the slider.

#### Scenario: Slider displays default value

- **WHEN** the form loads
- **THEN** the donation badge shows "$ 500"

#### Scenario: Slider updates on interaction

- **WHEN** the user moves the donation slider to 750
- **THEN** the donation badge shows "$ 750"

### Requirement: Form submission

When the user fills all required fields and clicks Submit, the form SHALL display a success message "Registration submitted successfully!" and a "Register Another" button.

#### Scenario: Successful submission

- **WHEN** the user fills First Name, Last Name, Company, Email, and Phone Number
- **AND** the user clicks Submit
- **THEN** a success message is displayed
- **AND** the form fields are hidden

#### Scenario: Register another

- **WHEN** the user clicks Register Another after a successful submission
- **THEN** the form fields are displayed again with default values

### Requirement: Form reset

Clicking the Reset button SHALL reset all controlled form state (meal preference to Vegetarian, payment mode to Cash, donation to $500) and keep the form visible.

#### Scenario: Reset clears state

- **WHEN** the user changes meal preference to Vegan and payment mode to Cheque
- **AND** the user clicks Reset
- **THEN** meal preference shows Vegetarian
- **AND** payment mode shows Cash selected
- **AND** donation badge shows "$ 500"

### Requirement: Footer with Component Dock link

The template SHALL display a footer with a "Made with Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer link

- **WHEN** the user scrolls to the footer
- **THEN** a link to "Component Dock" is visible
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/confreg/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/confreg/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split-panel layout — the hero panel occupies the left half of the card
- [x] Hero panel content — the heading "Register Now" is visible
- [ ] Registration form fields — fields for First Name, Last Name, Company, Email, and Phone Number are visible
- [ ] Donation slider — the donation badge shows "$ 500"
- [ ] Form submission — a success message is displayed
- [ ] Form reset — meal preference shows Vegetarian
