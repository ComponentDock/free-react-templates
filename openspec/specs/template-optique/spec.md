# Template: Optique (Dark Multiselect Dropdown)

## Purpose

Optique is a single-page DARK MULTISELECT DROPDOWN WIDGET demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect V09" free template (source:
https://colorlib.com/wp/template/multiselect-09/), built under a
DIFFERENT name (**Optique**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4.3.1 + Select2 multiselect dropdown widget:
a single centered section on a dark `#343434` background with a white
heading "Multiselect #09" and a dark-themed multi-select dropdown showing
13 options with custom checkbox styling. The dropdown uses Font Awesome
4.7 for checkbox icons and custom CSS for dark theme treatment. Selected
options appear as gold `#f6c523` pills with black text. The dropdown
background is `rgba(0, 0, 0, 0.8)` with a black dropdown menu. The
template is a component demo (not a full website), so the recreation
focuses on the widget itself with a centered layout.

**WHAT MAKES OPTIQUE DISTINCT (signature behaviors):**

1. **Dark themed page with centered dropdown widget.** Page background
   `#343434` (dark gray), section padding `7em 0`, centered heading
   "Multiselect #09" in white 28px Lato font. The widget is centered
   in a Bootstrap-style grid (col-lg-5). No navigation, no footer in
   the source — just the widget demo.

2. **Select2 multiselect with dark custom styling.** The select element
   uses `multiple="multiple"` and Select2 library for the dropdown UI.
   The selection area has a semi-transparent black background
   `rgba(0, 0, 0, 0.8)` with white text, 2px transparent border, and
   a soft box shadow. The dropdown menu opens with solid black background,
   4px border-radius, and the same shadow.

3. **Custom checkbox styling (gold accent).** Options display with a
   20×20px checkbox (2px solid `rgba(255, 255, 255, 0.18)` border,
   4px radius) on the left. When selected, the checkbox fills with
   gold `#f6c523` and shows a Font Awesome checkmark (`\f00c`), and
   the option row turns black with gold text. The selected state
   transitions 0.3s.

4. **Gold pill-style selected items.** Selected options render as
   inline pills (background `#f6c523`, color `#000`, font-size 15px,
   padding 2px 10px, no border) with an × remove button. The clear
   button is also gold.

5. **13 demo options (Option1 through Option13).** The select has
   exactly 13 options with `data-badge=""` attributes, using generic
   labels. No pre-selected options on load.

## Naming

The ColorLib source name "Multiselect 09" is FORBIDDEN as the app name
(and "multiselect" itself should not be reused as a standalone name).
**Optique** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `optique` in `ls apps/`,
`openspec/specs/`, `docs/templates/`). Source slug + preview URL are
recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect V09" (page title: "Multiselect V09
  - Free Dark Multiselect Dropdown 2026"). Listed in TEMPLATES.md under
    **Bootstrap Multiselect** (section at line 833; the one row for
    `multiselect-09/`).
- **Preview URL — REACHABLE (verified 2026-09-07):**
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-09/`**
  (HTTP 200, 4,097 bytes, `<title>Multiselect 09</title>`). The naive
  `https://preview.colorlib.com/theme/multiselect-09/` returns 404.
  **Note:** the TEMPLATES.md row does not include the `/bootstrap/` path
  segment — the correct preview path has it.
- **Source URL:** https://colorlib.com/wp/template/multiselect-09/
- **Preview CSS:** `css/style.css` — hand-written custom styles on top
  of Bootstrap 4.3.1 + Select2 4.0.4. Key custom rules:
  - `body { font-family: "Lato", Arial, sans-serif; background: #343434; color: gray; }`
  - `.ftco-section { padding: 7em 0; }`
  - `.heading-section { font-size: 28px; color: #fff; }`
  - Select2 dark overrides (see design tokens below)
- **Preview HTML structure:**
  - `<section class="ftco-section">` → `<div class="container">` →
    heading row (`col-md-6 text-center mb-5`, h2 "Multiselect #09") →
    widget row (`col-lg-5 d-flex justify-content-center align-items-center`)
    → `<select class="js-select2" multiple="multiple">` with 13 options
  - Scripts: jQuery (local), Popper.js (local), Select2 (CDN), `js/main.js`
- **Fonts:** Lato 300/400/700 via Cloudflare CDN @font-face — replace
  with Google Fonts `<link>`.
- **Dependencies:** Select2 4.0.4 (CDN CSS + JS) — for the recreation,
  use a React multiselect component (e.g. `react-select` or custom)
  instead of the jQuery Select2 library. Preserve the visual design
  tokens exactly.

- **Screenshot (`multiselect-09.jpg`, 1200×972 AVIF):** The screenshot
  shows a dark gray page with centered white heading "Multiselect #09"
  and below it a dark-themed multi-select dropdown with a search/selected
  area showing gold pills for selected items and a dropdown menu with
  checkbox-style options. Aesthetic: dark, minimal, component-demo style.
  **No imagery — NO picsum placeholders needed** (solid-color page,
  no photos).

## Design tokens

| Token                     | Value                                 | Notes                                                                        |
| ------------------------- | ------------------------------------- | ---------------------------------------------------------------------------- |
| `--color-page`            | `#343434`                             | Solid dark gray page background; section padding `7em 0`                     |
| `--color-brand`           | `#f6c523`                             | Accent gold — links, selected pills, checkbox fill, clear button             |
| `--color-dropdown-bg`     | `rgba(0, 0, 0, 0.8)`                  | Select2 selection area background (semi-transparent black)                   |
| `--color-dropdown-menu`   | `#000`                                | Dropdown menu open background (solid black)                                  |
| `--color-ink`             | `gray`                                | Body text color (default)                                                    |
| `--color-heading`         | `#fff`                                | Heading text color (white, 28px)                                             |
| `--color-text-white`      | `rgba(255, 255, 255, 0.8)`            | Search/selected text in the dropdown input                                   |
| `--color-checkbox-border` | `rgba(255, 255, 255, 0.18)`           | 2px solid checkbox border (unchecked state)                                  |
| `--color-selected-bg`     | `#000`                                | Selected option row background                                               |
| `--color-selected-text`   | `#f6c523`                             | Selected option text color (gold)                                            |
| `--color-pill-bg`         | `#f6c523`                             | Selected item pill background                                                |
| `--color-pill-text`       | `#000`                                | Selected item pill text color                                                |
| `--font-body`             | 'Lato', Arial, sans-serif             | Google Fonts 300/400/700; base 16px/1.8                                      |
| `--heading`               | 28px, weight 400, `#fff`              | `.heading-section` — centered, white                                         |
| `--checkbox`              | 20×20px, radius 4px                   | 2px solid border (unchecked); gold fill + checkmark glyph `\f00c` (selected) |
| `--pill`                  | bg `#f6c523`, color `#000`, 15px      | Padding 2px 10px, no border; remove button × in black                        |
| `--shadow`                | `0px 3px 22px -15px rgba(0,0,0,0.63)` | Applied to dropdown selection area and open dropdown menu                    |
| `--border-radius`         | `4px`                                 | Dropdown menu corners, checkbox corners                                      |
| `--transition`            | `0.3s all ease`                       | Links, selections, and checkbox state transitions                            |
| `--section-padding`       | `7em 0`                               | `.ftco-section` vertical padding                                             |

## Requirements

### Requirement: Page shell

The system SHALL render a dark-themed page with the centered heading and
the multiselect dropdown widget.

#### Scenario: Dark page with heading

- **GIVEN** the Optique app is rendered on a desktop viewport
- **THEN** the page background SHALL be the solid dark gray `#343434`
  with no photo, gradient, or pattern
- **AND** a centered white heading "Multiselect #09" SHALL render at 28px
  Lato font weight 400
- **AND** the section SHALL have vertical padding of `7em 0`
- **AND** the body font SHALL be Lato (300/400/700 from Google Fonts),
  16px, line-height 1.8

#### Scenario: Responsive layout

- **GIVEN** a viewport at or below 768px
- **THEN** the widget container SHALL remain centered and usable without
  horizontal overflow
- **AND** the heading SHALL remain visible and centered

### Requirement: Multiselect dropdown widget

The system SHALL render a dark-themed multi-select dropdown with checkbox
styling, gold accent pills, and the ability to select/deselect options.

#### Scenario: Initial state

- **GIVEN** the Optique app is rendered
- **THEN** a multi-select dropdown SHALL render centered below the heading
- **AND** the dropdown selection area SHALL have a semi-transparent black
  background `rgba(0, 0, 0, 0.8)` with 2px transparent border
- **AND** the selection area SHALL display placeholder text in white at
  `rgba(255, 255, 255, 0.8)`
- **AND** a soft box shadow `0px 3px 22px -15px rgba(0,0,0,0.63)` SHALL
  appear on the selection area
- **AND** 13 options SHALL be available (Option1 through Option13)
- **AND** no options SHALL be pre-selected

#### Scenario: Opening the dropdown

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the selection area
- **THEN** a dropdown menu SHALL open below the selection area
- **AND** the dropdown menu background SHALL be solid black `#000`
- **AND** the dropdown SHALL have a 4px border-radius
- **AND** the same box shadow SHALL apply to the open dropdown
- **AND** all 13 options SHALL be visible in the dropdown

#### Scenario: Option display with checkboxes

- **GIVEN** the dropdown is open
- **THEN** each option SHALL display a 20×20px checkbox on the left
  with 2px solid `rgba(255, 255, 255, 0.18)` border and 4px radius
- **AND** the option text SHALL appear to the right of the checkbox
- **AND** unselected options SHALL have a transparent checkbox background
- **AND** hovering an option SHALL highlight the row with
  `rgba(255, 255, 255, 0.1)` background and gold text

#### Scenario: Selecting an option

- **GIVEN** the dropdown is open
- **WHEN** the user clicks an unselected option
- **THEN** the checkbox SHALL fill with gold `#f6c523` and display a
  checkmark icon (lucide Check, replacing Font Awesome `\f00c`)
- **AND** the option row background SHALL turn black `#000` with gold
  `#f6c523` text
- **AND** a gold pill SHALL appear in the selection area showing the
  option text (background `#f6c523`, color `#000`, font-size 15px,
  padding 2px 10px)
- **AND** the pill SHALL have an × remove button in black
- **AND** the transition SHALL animate over 0.3s

#### Scenario: Deselecting an option

- **GIVEN** an option is selected (gold pill visible)
- **WHEN** the user clicks the × on the pill in the selection area
- **THEN** the pill SHALL be removed
- **AND** the checkbox in the dropdown SHALL return to unchecked state
  (transparent background, `rgba(255, 255, 255, 0.18)` border)

#### Scenario: Clear all selections

- **GIVEN** one or more options are selected
- **THEN** a clear button SHALL be available in the selection area
- **WHEN** the user clicks the clear button
- **THEN** all selections SHALL be removed and all pills cleared
- **AND** all checkboxes SHALL return to unchecked state

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for the multiselect widget.

#### Scenario: Keyboard and screen reader support

- **GIVEN** the Optique app is rendered
- **THEN** the dropdown SHALL be operable via keyboard (Tab, Enter,
  Space, Arrow keys)
- **AND** the selection count SHALL be announced (e.g. "3 of 13 selected")
- **AND** each option SHALL expose its selected state via
  `aria-selected` or equivalent
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Optique app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- optique` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bootstrap/multiselect-09/:
      dark `#343434` page, white "Multiselect #09" heading, dark
      dropdown with semi-transparent black selection area, gold
      `#f6c523` pills for selected items, black dropdown menu with
      checkbox options.
- [ ] Behavior check: dropdown opens/closes on click, options selectable
      with checkbox animation, pills appear/disappear, clear all works,
      hover states correct.
- [ ] Responsive check at 768px (no horizontal overflow, widget centered).
- [ ] Accessibility: keyboard navigation, screen reader announcements,
      focus-visible rings.
