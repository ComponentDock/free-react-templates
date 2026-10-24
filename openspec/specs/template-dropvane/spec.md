---
name: dropvane
description: >
  Recreation of ColorLib Dropdown 10 — a request-a-quote form dropdown
  that reveals a consultation form (full name, email, subject, message)
  when a green "Request A Quote" button is clicked.
source: https://colorlib.com/wp/template/dropdown-10/
preview: https://preview.colorlib.com/theme/bootstrap/dropdown-10/
design_tokens:
  font: Roboto (Google Fonts)
  bg_page: '#fafafa'
  bg_menu: '#ffffff'
  brand_primary: '#94aa2a'
  brand_hover: '#708120'
  text_body: gray
  text_heading: '#000000'
  button_radius: 5px
  button_shadow: '0px 10px 20px -6px rgba(0,0,0,0.12)'
  menu_shadow: '0px 10px 34px -20px rgba(0,0,0,0.41)'
  menu_padding: 20px
  menu_min_width: 20rem
  menu_margin_top: 20px
  font_size_body: 18px
  form_control_height: 48px
  form_control_border: '2px solid rgba(0,0,0,0.05)'
  heading_title_bg: '#94aa2a'
  heading_title_color: '#ffffff'
---

# Template: Dropvane (Bootstrap Dropdowns)

## Purpose

Recreate the ColorLib Dropdown 10 template as "DropVane" — a responsive
dropdown snippet that reveals a consultation form when the user clicks a
"Request A Quote" button. The design uses a clean light background, Roboto
font, olive-green accent (#94aa2a), and a white dropdown panel with shadow
and arrow indicator. The form includes fields for full name, email address,
subject, and message, plus a submit button.
- **Source design:** ColorLib "Dropdown 10" — https://colorlib.com/wp/template/dropdown-10/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/dropdown-10.zip (HTTP 200, 194,482 B, sha256 `b2a024d4aff3…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#94aa2a` | 4 declarations — `.cl-btn-group .cl-dropdown-menu:after`, `.cl-btn-group .heading-title` |
| Other chromatic values | `#708120` (2), `#80bdff` (1), `#005cbf` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 13 declarations — `.cl-form-control`, `.cl-form-control:focus` |
| Ink / dark surface | `#000000` | 2 declarations — `.heading-section`, `h2, h3, .h2, .h3` |
| Typeface | `Roboto` (2 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `0.25rem`, `4px`, `5px`, `4px 4px 0 0` | `0.25rem` (`.cl-btn`); `4px` (`.cl-form-control`); `5px` (`.cl-btn`); `4px 4px 0 0` (`.cl-btn-group .heading-title`) |

Palette in order of use: `#ffffff` ×13, `#212529` ×5, `#6c757d` ×5, `#007bff` ×5, `#94aa2a` ×4, `#495057` ×2, `#0062cc` ×2, `#000000` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/bootstrap/dropdown-10/css/style.css?v=fcc7e83a` — 18,135 B, sha256 `07ba34017256…`.

## Requirements

### Requirement: Page renders heading
The page SHALL display a centered heading "Dropdown #10".

#### Scenario: Heading visible on load
- **WHEN** the user loads the page
- **THEN** a heading with text "Dropdown #10" is visible and centered

### Requirement: Dropdown trigger button is visible
The page SHALL display a "Request A Quote" button styled with the brand
accent color (#94aa2a).

#### Scenario: Button visible on load
- **WHEN** the user loads the page
- **THEN** a button labeled "Request A Quote" is visible

### Requirement: Clicking the button opens the dropdown form
The button SHALL toggle a dropdown panel containing a consultation form.

#### Scenario: Dropdown opens on click
- **WHEN** the user clicks the "Request A Quote" button
- **THEN** a dropdown panel appears below the button
- **AND** the panel contains a green header bar with text "Consultation"
- **AND** the panel contains a "Full Name" text input
- **AND** the panel contains an "Email Address" text input
- **AND** the panel contains a "Subject" text input
- **AND** the panel contains a "Message" textarea
- **AND** the panel contains a "Send A Message" submit button

### Requirement: Dropdown closes on outside click
The dropdown SHALL close when the user clicks outside the dropdown area.

#### Scenario: Outside click closes dropdown
- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown panel closes

### Requirement: Dropdown toggles on repeated clicks
The button SHALL toggle the dropdown open and closed on repeated clicks.

#### Scenario: Toggle open and closed
- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the "Request A Quote" button
- **THEN** the dropdown opens
- **WHEN** the user clicks the "Request A Quote" button again
- **THEN** the dropdown closes

### Requirement: Form inputs are interactive
Each form field SHALL be a functional input element.

#### Scenario: User can type in Full Name field
- **GIVEN** the dropdown is open
- **WHEN** the user focuses the Full Name input
- **THEN** the user can type text into the field

#### Scenario: User can type in Email Address field
- **GIVEN** the dropdown is open
- **WHEN** the user focuses the Email Address input
- **THEN** the user can type text into the field

#### Scenario: User can type in Subject field
- **GIVEN** the dropdown is open
- **WHEN** the user focuses the Subject input
- **THEN** the user can type text into the field

#### Scenario: User can type in Message field
- **GIVEN** the dropdown is open
- **WHEN** the user focuses the Message textarea
- **THEN** the user can type text into the field

### Requirement: Form submission button
The "Send A Message" button SHALL be clickable.

#### Scenario: Submit button is visible and clickable
- **GIVEN** the dropdown is open
- **WHEN** the user inspects the form
- **THEN** a button labeled "Send A Message" is visible

### Requirement: Accessibility attributes
The button SHALL have proper ARIA attributes for dropdown state.

#### Scenario: aria-expanded reflects state
- **GIVEN** the dropdown is closed
- **WHEN** the user inspects the button
- **THEN** aria-expanded is "false"
- **WHEN** the user clicks the button
- **THEN** aria-expanded is "true"

### Requirement: Footer renders Component Dock link
The page SHALL display a footer with a link to Component Dock.

#### Scenario: Footer with Component Dock link
- **WHEN** the user loads the page
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text contains "Component Dock"

### Requirement: Responsive layout
The dropdown menu SHALL be centered on mobile screens.

#### Scenario: Mobile centering
- **WHEN** the viewport is narrower than 768px
- **AND** the dropdown is open
- **THEN** the dropdown menu is horizontally centered on the page

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/dropvane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dropvane/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page renders heading — a heading with text "Dropdown #10" is visible and centered
- [ ] Dropdown trigger button is visible — a button labeled "Request A Quote" is visible
- [ ] Clicking the button opens the dropdown form — a dropdown panel appears below the button
- [ ] Dropdown closes on outside click — the dropdown panel closes
- [ ] Dropdown toggles on repeated clicks — the dropdown opens
- [ ] Form inputs are interactive — the user can type text into the field
- [ ] Form submission button — a button labeled "Send A Message" is visible
- [x] Accessibility attributes — aria-expanded is "false"
- [ ] Responsive layout — the dropdown menu is horizontally centered on the page
