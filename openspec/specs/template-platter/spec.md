# Template: Platter (Restaurant Reservation Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 7" (https://colorlib.com/wp/template/colorlib-wizard-7/)
as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant reservation wizard.
The original is a 3-step booking form with a split layout: food image on the left,
dark form panel on the right. Preview was 404; fell back to screenshot analysis — **re-probed 2026-10-23: the demo serves** (measured record below).

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html` — HTTP 200, 10,359 B, title `FormWizard_v7`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-7/css/style.css?v=7973a996` (8,628 B).
> Faces it actually declares: `Raleway-Bold`, `Satisfy-Regular`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Colorlib Wizard 7** — https://colorlib.com/wp/template/colorlib-wizard-7/
- **Preview**: all three preview paths return **HTTP 404** for this slug on 2026-10-23 — `/theme/colorlib-wizard-7/`, `/theme/bootstrap/colorlib-wizard-7/`, `/theme/bb/colorlib-wizard-7/` — so the demo is archive-only. Reference recovered from `https://preview.colorlib.com/downloads/free/colorlib-wizard-7.zip` -> `colorlib-wizard-7/css/style.css` (research only; no asset copied).
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg
- **Measured how**: hex-literal census of `colorlib-wizard-7/css/style.css` from the official free-template ZIP.

### Colors

| Token       | Value     | Occurrences | Role                                  |
| ----------- | --------- | ----------- | ------------------------------------- |
| Accent tan  | `#cdaa7c` | 4           | Uppercase heading rule, small accents |
| Cream text  | `#e9e0cf` | 1           | Secondary text on the dark panel      |
| Panel brown | `#524b42` | 1           | Right-hand form panel                 |
| Body grey   | `#666`    | 12          | Labels, helper copy                   |
| Ink         | `#333`    | 1           | Panel text                            |
| White       | `#fff`    | 7           | Field text, script sub-heading        |

### Typography

| Element       | Family                  | Evidence                                  |
| ------------- | ----------------------- | ----------------------------------------- |
| Headings      | `Raleway` Semibold/Bold | 9 `font-family` rules across Raleway cuts |
| Script accent | `Satisfy`               | 3 rules — the cursive Book a table line   |

### Shapes & rhythm

| Property | Reference value                                                               |
| -------- | ----------------------------------------------------------------------------- |
| Radii    | essentially none (`50%` decorative only) — sharp panels and inputs            |
| Inputs   | underline-only fields on the dark panel                                       |
| Layout   | split: full-height food photograph left, dark panel right, n / 3 step counter |

### Section order (shipped app, 1:1 with the reference)

`Navbar -> ReservationWizard -> Footer`

### Delta vs shipped app

- Typefaces differ: the app loads **Playfair Display + Dancing Script + Inter**; the reference uses **Raleway + Satisfy**.
- The app's tan scale is anchored on `--color-brand-500: #b87a4a` (`#b87a4a` occurs 0 times in the reference); the reference accent is `#cdaa7c` and its panel is `#524b42` (app uses `#221310`).

## Requirements

### Requirement: Three-step reservation wizard

The template SHALL implement a 3-step wizard form for restaurant table booking.

#### Scenario: Step 1 — Select reservation details

- **WHEN** the page loads
- **THEN** the user sees a "Book a Table" heading, a "~ Check out our place ~" subheading, People/Date/Time fields, and a "NEXT" button
- **AND** the step indicator shows "1 / 3"

#### Scenario: Step 2 — Enter contact information

- **WHEN** the user fills in a date and clicks "NEXT"
- **THEN** the user sees a "Your Details" heading, Full Name/Email/Phone fields, and "BACK"/"NEXT" buttons
- **AND** the step indicator shows "2 / 3"

#### Scenario: Step 3 — Confirm booking

- **WHEN** the user fills in name and email and clicks "NEXT"
- **THEN** the user sees a "Confirm Booking" heading with a summary of all selections
- **AND** "BACK"/"CONFIRM" buttons and "3 / 3" indicator

#### Scenario: Confirmation success

- **WHEN** the user clicks "CONFIRM" on step 3
- **THEN** a "Reservation Confirmed!" success message is displayed

#### Scenario: Back navigation

- **WHEN** the user clicks "BACK" on step 2 or step 3
- **THEN** they return to the previous step with all previously entered data preserved

#### Scenario: Validation — empty date blocks navigation

- **WHEN** the date field is empty on step 1
- **THEN** clicking "NEXT" does not advance to step 2

### Requirement: Design fidelity

The template SHALL match the original's visual design tokens.

#### Scenario: Dark moody color scheme

- **THEN** the form panel uses a dark background (#1a1a2e)
- **AND** headings are white bold uppercase
- **AND** decorative subheading uses a copper/gold script font (#c9956b)
- **AND** form fields use white text with subtle underlines

#### Scenario: Split layout with food image

- **THEN** the left side displays a food photography placeholder image
- **AND** the right side displays the dark form panel

### Requirement: Mandatory footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Footer link

- **WHEN** the user scrolls to the footer
- **THEN** a "Made with Component Dock" link points to https://www.componentdock.com/

### Requirement: No ColorLib references in app code

The template SHALL NOT reference "colorlib" in any source file, comment, or asset.

#### Scenario: Provenance isolation

- **THEN** no file under apps/platter/ contains the string "colorlib"

## Verification checklist

- [ ] `npm run verify:app -- platter` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 10 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names): - Three-step reservation wizard - Design fidelity - Mandatory footer
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
