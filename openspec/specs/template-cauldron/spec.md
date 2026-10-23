# Template: Cauldron (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 6" — a multi-step onboarding/registration wizard form with avatar upload, profile fields, and step pagination. Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-6/ (returns 404 at prep time; design based on screenshot reference) — **re-probed 2026-10-23: the demo serves** (measured record below). Source slug: `colorlib-wizard-6`.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html` — HTTP 200, 7,014 B, title `FormWizard_v6`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-6/css/style.css?v=59e273aa` (10,428 B).
> Faces it actually declares: `Poppins-Medium`.
> The prescribed face `roboto` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with avatar selection, text fields, step indicator, and a macOS-style browser window chrome wrapper.

## Design Tokens (from screenshot reference)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Roboto', sans-serif` (clean modern sans-serif) | Screenshot analysis |
| Background gradient top | `#a8b8d1` (soft periwinkle blue) | Gradient background |
| Background gradient bottom | `#e8b8d1` (soft pink) | Gradient background |
| Overlay text (bg) | `#8997b5` (muted blue-gray, low opacity) | Background watermark text |
| Form card background | `#f7f7f8` (off-white) | Central form card |
| Form card shadow | Subtle drop shadow (box-shadow) | Card elevation |
| Input field background | `#f2f2f4` (light gray) | Pill-shaped inputs |
| Input field border | `#e0e0e2` (thin gray) | Input borders |
| Input placeholder text | `#9a9aa0` (medium gray) | Uppercase placeholder labels |
| Profile circle accent | `#dbadd2` (soft pink/mauve) | Avatar ring accent |
| Profile circle outer border | `#e0e0e2` | Avatar outer ring |
| Continue button background | `#a8b8d2` (pastel blue) | CTA button |
| Continue button text | `#ffffff` | Button label |
| Active step dot | `#666666` (dark gray, solid) | Step indicator |
| Inactive step dot | `#cccccc` (light gray, outline) | Step indicator |
| macOS traffic lights | `#ff5f57` red, `#febc2e` yellow, `#28c840` green | Browser chrome |
| Form card border-radius | `~10-12px` | Rounded corners |
| Input border-radius | Full pill/rounded (`~20px`) | Rounded inputs |

## Requirements

### Feature: Multi-Step Onboarding Wizard

#### Scenario: Page Load and Background

- **GIVEN** the user loads the wizard page
- **WHEN** the page renders
- **THEN** a full-page pastel gradient background is displayed (blue-to-pink)
- **AND** large semi-transparent italic bold text overlays the background reading "TELL US ABOUT YOURSELF"
- **AND** a centered form card with rounded corners is shown
- **AND** the macOS-style browser window chrome bar is at the top

#### Scenario: Step 1 - Profile Setup

- **GIVEN** the user is on step 1 of the wizard
- **WHEN** step 1 is displayed
- **THEN** an avatar upload area is shown on the left side of the card
- **AND** the text "CHOOSE PICTURE" with a camera icon is visible below the avatar
- **AND** form fields are displayed on the right: First Name, Last Name, Team Name, Email, Create a Password
- **AND** each input has a small circular accent dot to its left
- **AND** inputs are pill-shaped with uppercase placeholder text
- **AND** a "CONTINUE →" button is shown at the bottom left of the card
- **AND** the first pagination dot is active (solid dark), remaining dots are light/outline

#### Scenario: Avatar Upload Interaction

- **GIVEN** the user is on step 1
- **WHEN** the user clicks "CHOOSE PICTURE"
- **THEN** a file picker dialog opens for image selection
- **AND** the selected image replaces the default avatar placeholder

#### Scenario: Step 1 Form Validation

- **GIVEN** the user is on step 1
- **WHEN** the user clicks "CONTINUE →" without filling required fields
- **THEN** validation errors appear for the missing required fields (First Name, Last Name, Email, Password)
- **AND** the wizard does not advance to step 2

#### Scenario: Step 1 to Step 2 Navigation

- **GIVEN** the user has filled all required fields on step 1
- **WHEN** the user clicks "CONTINUE →"
- **THEN** step 2 content is displayed
- **AND** the pagination updates: step 1 dot becomes light/outline, step 2 dot becomes active/solid
- **AND** the form card smoothly transitions to show step 2 fields

#### Scenario: Step 2 Content

- **GIVEN** step 2 is displayed
- **WHEN** the wizard shows step 2
- **THEN** appropriate profile/team configuration fields are shown
- **AND** a back/previous action is available to return to step 1

#### Scenario: Step 2 to Step 3 Navigation

- **GIVEN** the user has completed step 2
- **WHEN** the user clicks the continue action
- **THEN** step 3 content is displayed
- **AND** the pagination updates: step 2 dot becomes light/outline, step 3 dot becomes active/solid

#### Scenario: Step 3 Completion

- **GIVEN** step 3 is displayed
- **WHEN** the user completes all required fields on step 3
- **THEN** a final submission or confirmation action is available
- **AND** the wizard can be completed

#### Scenario: Pagination Navigation

- **GIVEN** the wizard has multiple steps
- **WHEN** the user views the pagination dots below the card
- **THEN** the current step dot is solid dark gray
- **AND** future step dots are light gray outlines
- **AND** completed step dots reflect completion state

#### Scenario: Responsive Layout

- **GIVEN** the user views the wizard on a mobile device
- **WHEN** the viewport is narrow
- **THEN** the form card stacks vertically (avatar above fields)
- **AND** the macOS window chrome is hidden or simplified
- **AND** inputs and buttons remain tappable (minimum 44px touch targets)

#### Scenario: Keyboard Accessibility

- **GIVEN** the wizard is displayed
- **WHEN** the user navigates with keyboard
- **THEN** all form fields are focusable with visible focus rings
- **AND** the tab order follows logical field sequence
- **AND** the "CONTINUE" button is reachable via Tab/Enter

## Verification checklist

- [ ] Pastel gradient background renders (blue-to-pink vertical)
- [ ] Background watermark text "TELL US ABOUT YOURSELF" is visible but low-opacity
- [ ] macOS-style browser window chrome bar at top with traffic light buttons
- [ ] Central form card has rounded corners (~10-12px) and subtle shadow
- [ ] Avatar upload area with "CHOOSE PICTURE" text and camera icon
- [ ] Five pill-shaped inputs with uppercase placeholder labels
- [ ] Small accent dot (mauve/pink) on each input field
- [ ] "CONTINUE →" button in pastel blue with white text
- [ ] Pagination dots below card (active = solid dark, inactive = light outline)
- [ ] Multi-step navigation works (step 1 → 2 → 3)
- [ ] Form validation prevents advancing with missing required fields
- [ ] Responsive layout on mobile (stacked vertical)
- [ ] Keyboard accessible (focus rings, tab order)
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code

<!-- live-palette-revalue:start -->
**Live palette re-value (2026-10-23)** — the demo `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html` answers **HTTP 200** (7,014 B); the declarations below are quoted from its own stylesheets.

| claimed | painted | d | sheet (bytes, sha256) | declaration |
| --- | --- | --- | --- | --- |
| `#d8a8d8` | `#dbadd2` ×1 | 8 | `style.css?v=59e273aa` (10,428 B, `c9bc979f15b9…`) | `background: #dbadd2;` |

The claimed hex was a screenshot sample of the same hue; the sheet value is canonical (`docs/replication.md`).
<!-- live-palette-revalue:end -->

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#a8b8d1` — nearest `#98add6` (d=20)
- `#e8b8d1` — nearest `#dbadd2` (d=17)
- `#8997b5` — nearest `#98add6` (d=42)
- `#a8b8d2` — nearest `#98add6` (d=20)
- `#ff5f57` — nearest `#dbadd2` (d=150)
- `#febc2e` — nearest `#dbadd2` (d=168)
- `#28c840` — nearest `#98add6` (d=189)
<!-- live-palette-unverified:end -->
