# Template: Checkoff (Bootstrap Custom Checkbox)

## Purpose

Checkoff is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 11"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-11/), built under a
DIFFERENT name (Checkoff — evoking the "checking off" action of ticking a checkbox)
per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The page is a minimal custom checkbox demo: a centered heading "Checkbox #11",
a subtitle describing the template, and four checkbox items demonstrating
different states: checked, unchecked, disabled, and disabled-and-checked.
The design is clean, white-background, Roboto font, single-column centered layout
with a blue accent palette.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 11" — eleventh of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 743 — mark that line `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/checkbox-11/
  (live preview confirmed — renders Bootstrap 4 custom checkboxes).
- **Visual design (from live preview):** Clean, minimalist demo page on a white
  background. Centered column layout on the left side. Black heading "BS4 Custom
  Checkbox #1" (h2). Four custom checkboxes using Bootstrap 4 custom-control
  styling: First checkbox (checked), Second checkbox (unchecked), Disabled
  (unchecked), Disabled & checked. Standard Bootstrap blue accent (#0d6efd) for
  checked state. Roboto font family. No footer in the original; we add a
  "Component Dock" footer per monorepo mandate.
- **Design tokens:**
  - Brand color: `#0d6efd` (Bootstrap primary blue for checked checkbox)
  - Background: `#ffffff` (white)
  - Text: `#212529` (Bootstrap body text)
  - Disabled text: `#6c757d` (Bootstrap muted)
  - Font: Roboto (Google Fonts)
  - Checkbox border: `#dee2e6` unchecked, `#0d6efd` checked

## Requirements

### Requirement: Renders the main heading and subtitle

The template SHALL display a centered heading "Checkbox #11" and a subtitle
"Bootstrap custom checkbox component demo" at the top of the page.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Checkbox #11" is rendered at level 1

#### Scenario: Subtitle is visible

- **WHEN** the page loads
- **THEN** the text "Bootstrap custom checkbox component demo" is displayed

### Requirement: Renders four checkbox items with correct states

The template SHALL render four custom checkboxes with distinct labels and
initial states matching the original ColorLib design.

#### Scenario: First checkbox is checked by default

- **WHEN** the page loads
- **THEN** the checkbox labeled "First checkbox" is in the checked state

#### Scenario: Second checkbox is unchecked by default

- **WHEN** the page loads
- **THEN** the checkbox labeled "Second checkbox" is in the unchecked state

#### Scenario: Third checkbox is disabled and unchecked

- **WHEN** the page loads
- **THEN** the checkbox labeled "Disabled" is disabled and unchecked

#### Scenario: Fourth checkbox is disabled and checked

- **WHEN** the page loads
- **THEN** the checkbox labeled "Disabled & checked" is disabled and checked

### Requirement: Checkboxes are interactive (non-disabled)

The template SHALL allow toggling of non-disabled checkboxes via click.

#### Scenario: Toggle unchecked to checked

- **WHEN** the user clicks the "Second checkbox" label
- **THEN** the "Second checkbox" becomes checked

#### Scenario: Toggle checked to unchecked

- **WHEN** the user clicks the "First checkbox" label
- **THEN** the "First checkbox" becomes unchecked

### Requirement: Disabled checkboxes do not toggle

The template SHALL NOT change the state of disabled checkboxes when clicked.

#### Scenario: Disabled checkbox stays unchecked

- **WHEN** the user clicks the "Disabled" label
- **THEN** the "Disabled" checkbox remains unchecked

### Requirement: Footer with Component Dock link

The template SHALL render a footer containing a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** the page loads
- **THEN** a link with text "Component Dock" pointing to
  https://www.componentdock.com/ is visible in the footer
