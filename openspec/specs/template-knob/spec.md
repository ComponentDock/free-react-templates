# Template: Knob (Bootstrap Checkboxes)

Recreation of ColorLib Checkbox V18 (https://colorlib.com/wp/template/checkbox-18/)

## Purpose

A toggle buttons template showcasing smooth, pill-shaped toggle switches in
various states (on/off, disabled, color variants). Clean centered layout with
a heading, subtitle, and a vertical stack of toggle controls.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/checkbox-18/ (HTTP 200, 2,977 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/checkbox-18/css/style.css` (8,563 B, sha256 `9d83c112d334…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#0056b3` | 2 declarations — `.btn-link:hover`, `a:hover` |
| Other chromatic values | `#007bff` | `#007bff` × 2 (a) |
| Surface | `#ffffff` | 2 declarations — `body` |
| Ink / dark surface | `#212529` | 1 declarations — `body` |
| Typeface | `"Roboto", sans-serif` (3 rules — body)<br>`sans-serif` (1 rule — html) | `font-family` declarations in the theme sheet |
| Radii | `16px`, `50%` | `16px` (.cl-custom-control.material-switch .material-switch-control-indicator); `50%` (.cl-custom-control.material-switch .material-switch-control-indicator::after) |

Palette in order of use: `#0056b3` ×2, `#007bff` ×2, `#6c757d` ×2, `#ffffff` ×2, `#212529` ×1, `#efefef` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Toggle switch component

The template SHALL provide a reusable toggle switch component (KnobToggle) that
renders an accessible checkbox input with a visible pill-shaped track and sliding knob.

#### Scenario: renders with label

- **WHEN** a KnobToggle is rendered with label "Notifications"
- **THEN** a checkbox input with accessible name "Notifications" is present

#### Scenario: unchecked by default

- **WHEN** a KnobToggle is rendered without defaultChecked
- **THEN** the checkbox is not checked

#### Scenario: toggles on click

- **WHEN** a KnobToggle is rendered
- **AND** the user clicks the toggle
- **THEN** the checkbox becomes checked
- **AND** when clicked again the checkbox becomes unchecked

#### Scenario: respects defaultChecked

- **WHEN** a KnobToggle is rendered with defaultChecked=true
- **THEN** the checkbox is checked

#### Scenario: disabled state

- **WHEN** a KnobToggle is rendered with disabled=true
- **THEN** the checkbox is disabled
- **AND** clicking the toggle does not change its state

### Requirement: Toggle showcase section

The template SHALL display a showcase section with a heading, subtitle, and
a vertical stack of 4 toggle switches in different states.

#### Scenario: renders heading

- **WHEN** the ToggleShowcase is rendered
- **THEN** a heading "Checkbox #18" is present

#### Scenario: renders subtitle

- **WHEN** the ToggleShowcase is rendered
- **THEN** the text "Toggle Buttons" is present

#### Scenario: renders all toggles

- **WHEN** the ToggleShowcase is rendered
- **THEN** 4 toggle inputs are present

#### Scenario: Notifications is checked by default

- **WHEN** the ToggleShowcase is rendered
- **THEN** "Notifications" is checked

#### Scenario: Dark mode is unchecked by default

- **WHEN** the ToggleShowcase is rendered
- **THEN** "Dark mode" is not checked

#### Scenario: Marketing emails is disabled

- **WHEN** the ToggleShowcase is rendered
- **THEN** "Marketing emails" is disabled

### Requirement: App composition

The App component SHALL compose the ToggleShowcase and Footer, set the document
title, and render inside a full-height flex column.

#### Scenario: composes showcase and footer

- **WHEN** the App is rendered
- **THEN** the main element contains the showcase heading
- **AND** the footer is present

#### Scenario: sets document title

- **WHEN** the App is rendered
- **THEN** the document title is "Knob — Toggle Buttons Template"

#### Scenario: footer links to Component Dock

- **WHEN** the App is rendered
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is present

### Requirement: Footer with Component Dock link

The Footer component SHALL display the template name and a link to Component Dock.

#### Scenario: renders template name

- **WHEN** the Footer is rendered
- **THEN** the text "Knob" is present

#### Scenario: renders Component Dock link

- **WHEN** the Footer is rendered
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link has target="_blank"
- **AND** the link has rel="noreferrer"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/knob/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/knob/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Toggle switch component — a checkbox input with accessible name "Notifications" is present
- [ ] Toggle showcase section — a heading "Checkbox #18" is present
