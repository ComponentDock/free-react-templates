# Template: FormWalk (Multi-step Form Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 30 (`https://colorlib.com/wp/template/colorlib-wizard-30/`)
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html`
- **New Name**: `formwalk` (App directory: `apps/formwalk`, Package: `@free-react-templates/formwalk`)
- **Category**: Forms / Multi-step Form Wizard
- **Description**: A centered white card wizard on a full-page background image. Blue header bar with "FORM WIZARD" heading. Three circular step indicators connected by gray lines. Step 1: First Name + Last Name. Step 2: Email + Password. Step 3: Subject dropdown + Comment. Pill-shaped blue Next/Back buttons. Montserrat font, clean minimal aesthetic.
- **Source design:** ColorLib "Colorlib Wizard 30" — https://colorlib.com/wp/template/colorlib-wizard-30/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/colorlib-wizard-30.zip (HTTP 200, 400,055 B, sha256 `6f7e1b10b4da…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#3760e5` | 3 declarations — `.actions ul li`, `.form-register .steps li.current a, .form-register .steps li.current a:active, .form-regis` |
| Other chromatic values | `#2b4ab3` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 4 declarations — `.form-register .steps li .title`, `.wizard-form .wizard-header h3` |
| Ink / dark surface | `#333333` | 2 declarations — `.inner .cl-form-row .form-holder input, .inner .cl-form-row .form-holder select`, `.inner .cl-form-row .form-holder label` |
| Typeface | `Montserrat` (4 rules — `.form-register .steps li .title`) | `font-family` declarations in the design sheet |
| Radii | `8px`, `50%`, `5px`, `25px` | `8px` (`.wizard-v10-content`); `50%` (`.form-register .steps li a`); `5px` (`.inner .cl-form-row .form-holder input, .inner .cl-form-row .form-holder select`); `25px` (`.actions ul li`) |

Palette in order of use: `#ffffff` ×4, `#3760e5` ×3, `#333333` ×2, `#666666` ×2, `#cccccc` ×1, `#e5e5e5` ×1, `#2b4ab3` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `etc/bwiz/colorlib-wizard-30/css/style.css?v=79adf51a` — 9,710 B, sha256 `81ab3cd870ee…`.

## Requirements

### Requirement: Full-page background with centered wizard card

The page SHALL display a full-page background image with a centered white wizard card.

#### Scenario: Page loads with background and card

- **WHEN** the user visits the FormWalk page
- **THEN** a full-page background image covers the viewport
- **AND** a centered white wizard card is visible
- **AND** the card has rounded corners and a drop shadow

### Requirement: Wizard header displays correctly

The wizard card SHALL display a blue header bar with the title.

#### Scenario: Header renders on load

- **WHEN** the page renders
- **THEN** a blue header bar (#3760e5) is displayed at the top of the card
- **AND** the heading "FORM WIZARD" appears in white bold uppercase text (28px, Montserrat)

### Requirement: Step indicators render with correct state

The wizard SHALL display 3 circular step indicators connected by horizontal lines.

#### Scenario: Step 1 is active on load

- **WHEN** the page loads
- **THEN** 3 circular step indicators are displayed
- **AND** the circles are connected by horizontal gray lines
- **AND** step 1 circle is highlighted blue (active)
- **AND** steps 2 and 3 circles are gray (inactive)

#### Scenario: Active step updates on navigation

- **WHEN** the user navigates to step 2
- **THEN** step 1 circle turns blue (completed)
- **AND** step 2 circle turns blue (active)
- **AND** step 3 circle remains gray

### Requirement: Step 1 form fields

The wizard SHALL display First Name and Last Name inputs on step 1.

#### Scenario: Step 1 fields visible

- **WHEN** the wizard is on step 1
- **THEN** a "First Name" text input is displayed
- **AND** a "Last Name" text input is displayed
- **AND** both inputs have labels above them in bold text

### Requirement: Step 2 form fields

The wizard SHALL display Email and Password inputs on step 2.

#### Scenario: Step 2 fields visible

- **WHEN** the user navigates to step 2
- **THEN** an "Email Address" email input is displayed
- **AND** a "Password" password input is displayed

### Requirement: Step 3 form fields

The wizard SHALL display Subject dropdown and Comment input on step 3.

#### Scenario: Step 3 fields visible

- **WHEN** the user navigates to step 3
- **THEN** a "Subject" dropdown select is displayed with options: Finance, Marketing, IT Support
- **AND** a "Comment" text input is displayed

### Requirement: Forward navigation

The wizard SHALL allow forward navigation via the Next button.

#### Scenario: Navigate to next step

- **WHEN** the user fills in the current step fields and clicks Next
- **THEN** the wizard transitions to the next step
- **AND** the step indicator updates to show the new active step

#### Scenario: Submit button on last step

- **WHEN** the user is on step 3
- **THEN** the Next button is replaced by a Submit button

### Requirement: Backward navigation

The wizard SHALL allow backward navigation via the Back button.

#### Scenario: Navigate to previous step

- **WHEN** the user is on step 2 or 3 and clicks Back
- **THEN** the wizard transitions to the previous step

#### Scenario: No Back button on step 1

- **WHEN** the user is on step 1
- **THEN** no Back button is displayed

### Requirement: Responsive layout

The wizard SHALL adapt to mobile screen sizes.

#### Scenario: Mobile layout

- **WHEN** the user views the wizard on a screen narrower than 576px
- **THEN** the wizard card width adapts to approximately 90% of the viewport
- **AND** form fields stack vertically in a single column

### Requirement: Footer links to Component Dock

The template footer SHALL link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the page renders
- **THEN** a footer is visible below the wizard card
- **AND** the footer contains a "Component Dock" link to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formwalk/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formwalk/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Full-page background with centered wizard card — a full-page background image covers the viewport
- [ ] Wizard header displays correctly — a blue header bar (#3760e5) is displayed at the top of the card
- [ ] Step indicators render with correct state — 3 circular step indicators are displayed
- [x] Step 1 form fields — a "First Name" text input is displayed
- [x] Step 2 form fields — an "Email Address" email input is displayed
- [x] Step 3 form fields — a "Subject" dropdown select is displayed with options: Finance, Marketing, IT Support
- [ ] Forward navigation — the wizard transitions to the next step
- [ ] Backward navigation — the wizard transitions to the previous step
- [ ] Responsive layout — the wizard card width adapts to approximately 90% of the viewport
