---
name: stepforge
description: >
  Multi-step booking form wizard template — recreation of ColorLib Wizard 26
  (https://colorlib.com/wp/template/colorlib-wizard-26/).
  Three-step wizard: Personal Info → Booking → Confirm.
  Dark navy background (#383a4f), teal accent (#55e8d5), Open Sans font.
---

# Template: StepForge (Bootstrap Wizards)

## Purpose

Stepforge is a multi-step booking form wizard that recreates the ColorLib Wizard 26 design under a
different name. It provides a three-step flow (Personal Info, Booking, Confirm) with a dark navy
background, teal accent colors, and Open Sans typography. Users fill in personal details, select
booking preferences, and review a summary before submitting.
- **Source design:** ColorLib "Colorlib Wizard 26" — https://colorlib.com/wp/template/colorlib-wizard-26/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/colorlib-wizard-26.zip (HTTP 200, 273,754 B, sha256 `be99691663f0…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#55e8d5` | 4 declarations — `.form-register .steps li.current a .step-icon, .form-register .steps li.current a:active .`, `.inner .cl-form-row .form-holder .cl-form-control:focus + .label, .inner .cl-form-row .for` |
| Other chromatic values | `#43ccba` (1), `#32998b` (1), `#525575` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 16 declarations — `.form-register .steps li a .title .step-icon`, `.form-register .steps li, .form-register .steps li.current` |
| Ink / dark surface | `#333333` | 1 declarations — `.form-register .steps li a .step-text` |
| Typeface | `Open Sans` (3 rules — `.inner .cl-form-row .form-holder input, .inner .cl-form-row .form-holder select`) | `font-family` declarations in the design sheet |
| Radii | `5px`, `10px` | `5px` (`.actions ul li`); `10px` (`.wizard-v6-content`) |

Palette in order of use: `#ffffff` ×16, `#55e8d5` ×4, `#cccccc` ×2, `#666666` ×2, `#383a4f` ×1, `#525575` ×1, `#333333` ×1, `#43ccba` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `style.css` — 14,751 B, sha256 `eb2d2f825115…` (member of `downloads/free/colorlib-wizard-26.zip`). These sheets are archive members: no live demo serves this skin.

## Requirements

### Requirement: Three-step wizard flow

The wizard SHALL display three sequential steps: Personal Info (step 1), Booking (step 2), and
Confirm (step 3). Only one step is visible at a time.

#### Scenario: Initial state shows step 1

- **WHEN** the user opens the wizard page
- **THEN** the heading "Form Booking Wizard" is visible
- **AND** the Personal Info form is displayed
- **AND** step 1 is marked as active

#### Scenario: Navigate to step 2

- **WHEN** the user clicks "Next" on step 1
- **THEN** step 2 (Booking Information) is displayed
- **AND** step 1 icon shows completed

#### Scenario: Navigate to step 3

- **WHEN** the user clicks "Next" on step 2
- **THEN** step 3 (Confirm Details) is displayed
- **AND** the summary table is shown

### Requirement: Step indicator reflects progress

The step indicator SHALL show all three steps with numbered icons. The current step and completed
steps use the teal accent color (#55e8d5). Inactive steps use gray (#cccccc).

#### Scenario: Active step styling

- **WHEN** the user is on step 2
- **THEN** step 1 icon shows completed (teal)
- **AND** step 2 icon shows active (teal)
- **AND** step 3 icon shows inactive (gray)

### Requirement: Personal Info form fields

Step 1 SHALL contain fields for First Name, Last Name, Phone Number, E-Mail, Date of Birth
(day/month/year selects), and Address Location.

#### Scenario: Fill personal info

- **WHEN** the user types in the First Name field
- **THEN** the field value updates

### Requirement: Booking form fields

Step 2 SHALL contain a Room selection dropdown, Organization Day date input, and Time Open dropdown.
It SHALL display a booking image placeholder.

#### Scenario: Select room

- **WHEN** the user selects a room from the dropdown
- **THEN** the selected room value updates

### Requirement: Confirmation summary

Step 3 SHALL display a summary table with Full Name, Room, Day, Time, and Price. Empty fields
SHALL show a dash placeholder.

#### Scenario: Review confirmation

- **WHEN** the user reaches step 3
- **THEN** the table shows all booking details
- **AND** the Submit button is visible

### Requirement: Submit flow

Clicking Submit SHALL show a confirmation screen with a "Booking Confirmed!" message.

#### Scenario: Submit booking

- **WHEN** the user clicks "Submit" on step 3
- **THEN** a "Booking Confirmed!" message is displayed
- **AND** the user's first name appears in the thank-you text

### Requirement: Footer with Component Dock link

Every template footer MUST link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text includes "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/stepforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/stepforge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Three-step wizard flow — the heading "Form Booking Wizard" is visible
- [ ] Step indicator reflects progress — step 1 icon shows completed (teal)
- [ ] Personal Info form fields — the field value updates
- [ ] Booking form fields — the selected room value updates
- [ ] Confirmation summary — the table shows all booking details
- [x] Submit flow — a "Booking Confirmed!" message is displayed
