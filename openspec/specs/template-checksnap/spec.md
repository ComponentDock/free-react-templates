# Template: Checksnap (Hover-Effect Checkbox Component)

## Purpose

Checksnap is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 16"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-16/), built under a
DIFFERENT name (Checksnap — evoking the snap-click hover interaction) per the
monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The page is a minimal custom checkbox demo: a centered heading "Checkbox #16",
a subtitle describing the template, and four checkbox items demonstrating
different states: checked, unchecked, disabled, and disabled-and-checked.
The distinguishing feature is a hover effect on each checkbox — a subtle scale
and background color change on hover. The design is clean, white-background,
Roboto font, single-column centered layout with a green accent palette.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 16" — sixteenth of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 748 — mark that line `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/checkbox-16/
  (preview unreachable — falling back to page metadata and analogous templates).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-16.jpg
- **Page metadata:** "Free Checkbox w/ Hover Effect Template" — a Bootstrap checkbox
  component demo with hover effects.
- **Visual design (from page description + analogous templates):** Clean,
  minimalist demo page on a white background. Centered column layout. Black
  heading "Checkbox #16" (h1). Four custom checkboxes using Bootstrap
  custom-control styling with hover effects: First checkbox (checked),
  Second checkbox (unchecked), Disabled (unchecked), Disabled & checked.
  Green accent palette (#28a745) for checked state. Hover effect: subtle
  background color change and slight scale on the checkbox container.
  Roboto font family. No footer in the original; we add a "Component Dock"
  footer per monorepo mandate.
- **Design tokens:**
  - Brand color: `#28a745` (Bootstrap success green for checked checkbox)
  - Hover background: `#f0fdf4` (green-50 light tint)
  - Background: `#ffffff` (white)
  - Text: `#212529` (Bootstrap body text)
  - Disabled text: `#6c757d` (Bootstrap muted)
  - Font: Roboto (Google Fonts)
  - Checkbox border: `#dee2e6` unchecked, `#28a745` checked
  - Hover scale: 1.02 on the container

## Requirements

### Requirement: Renders the main heading and subtitle

The template SHALL display a centered heading "Checkbox #16" and a subtitle
"Hover effect checkbox component demo" at the top of the page.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Checkbox #16" is rendered at level 1

#### Scenario: Subtitle is visible

- **WHEN** the page loads
- **THEN** the text "Hover effect checkbox component demo" is displayed

### Requirement: Renders four checkbox items with correct states

The template SHALL render four labeled checkboxes: "First checkbox" (checked
by default), "Second checkbox" (unchecked), "Disabled" (unchecked and
disabled), and "Disabled & checked" (checked and disabled).

#### Scenario: Four checkboxes are rendered

- **WHEN** the page loads
- **THEN** 4 checkbox inputs are present

#### Scenario: Default checked state

- **WHEN** the page loads
- **THEN** the first checkbox is checked
- **AND** the second checkbox is unchecked
- **AND** the third checkbox is unchecked
- **AND** the fourth checkbox is checked

#### Scenario: Disabled checkboxes

- **WHEN** the page loads
- **THEN** the third checkbox is disabled
- **AND** the fourth checkbox is disabled

### Requirement: Toggle behavior

The template SHALL toggle a checkbox's checked state when the user clicks
its label or the checkbox itself.

#### Scenario: Clicking an unchecked checkbox checks it

- **GIVEN** I see an unchecked checkbox labeled "Second checkbox"
- **WHEN** I click the label "Second checkbox"
- **THEN** the checkbox becomes checked

#### Scenario: Clicking a checked checkbox unchecks it

- **GIVEN** I see a checked checkbox labeled "First checkbox"
- **WHEN** I click the label "First checkbox"
- **THEN** the checkbox becomes unchecked

#### Scenario: Disabled checkboxes do not toggle

- **GIVEN** I see a disabled checkbox labeled "Disabled"
- **WHEN** I click the label "Disabled"
- **THEN** the checkbox remains unchecked

### Requirement: Hover effect

The template SHALL apply a visual hover effect to each checkbox container
when the user hovers over it.

#### Scenario: Hover effect changes background

- **WHEN** I hover over a checkbox container
- **THEN** the container background changes to a light green tint

### Requirement: Footer with Component Dock link

The template SHALL display a footer with the template name "Checksnap" and
a link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer is visible

- **WHEN** the page loads
- **THEN** a footer element is rendered

#### Scenario: Footer contains Component Dock link

- **WHEN** I look at the footer
- **THEN** I see a link with text "Component Dock"
- **AND** the link points to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

#### Scenario: Footer shows template name

- **WHEN** I look at the footer
- **THEN** I see the text "Checksnap"
