# Template: Checkify (Bootstrap Custom Checkbox)

## Purpose

Checkify is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 12"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-12/), built under a
DIFFERENT name (Checkify — evoking the check/checkbox action) per the monorepo
naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The page is a minimal custom checkbox demo: a centered heading "Checkbox #12",
a subtitle describing the template, and four checkbox items demonstrating
different states: checked, unchecked, disabled, and disabled-and-checked.
The design is clean, white-background, Roboto font, single-column centered layout
with a blue accent palette.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 12" — twelfth of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 744 — mark that line `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/checkbox-12/
  (preview returned 404 — falling back to screenshot and page metadata).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-12.jpg
- **Page metadata:** "Disabled/Checked Checkbox Snippet" — a Bootstrap checkbox
  component demo showing disabled and checked states.
- **Visual design (from page description + analogous templates):** Clean,
  minimalist demo page on a white background. Centered column layout. Black
  heading "Checkbox #12" (h2). Four custom checkboxes using Bootstrap 4
  custom-control styling: First checkbox (checked), Second checkbox (unchecked),
  Disabled (unchecked), Disabled & checked. Standard Bootstrap blue accent
  (#0d6efd) for checked state. Roboto font family. No footer in the original;
  we add a "Component Dock" footer per monorepo mandate.
- **Design tokens:**
  - Brand color: `#0d6efd` (Bootstrap primary blue for checked checkbox)
  - Background: `#ffffff` (white)
  - Text: `#212529` (Bootstrap body text)
  - Disabled text: `#6c757d` (Bootstrap muted)
  - Font: Roboto (Google Fonts)
  - Checkbox border: `#dee2e6` unchecked, `#0d6efd` checked

## Requirements

### Requirement: Renders the main heading and subtitle

The template SHALL display a centered heading "Checkbox #12" and a subtitle
"Bootstrap custom checkbox component demo" at the top of the page.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Checkbox #12" is rendered at level 1

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

### Requirement: Checkboxes are interactive

Enabled checkboxes SHALL toggle state when clicked.

#### Scenario: Clicking an enabled checkbox toggles it

- **WHEN** the user clicks the unchecked "Second checkbox"
- **THEN** it becomes checked

#### Scenario: Clicking a checked checkbox unchecks it

- **WHEN** the user clicks the checked "First checkbox"
- **THEN** it becomes unchecked

#### Scenario: Disabled checkboxes do not toggle

- **WHEN** the user clicks the disabled "Disabled" checkbox
- **THEN** it remains unchecked

### Requirement: Footer links to Component Dock

The template SHALL include a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer is present

- **WHEN** the page loads
- **THEN** a footer element is rendered at the bottom

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a link pointing to "https://www.componentdock.com/" is visible in the footer
