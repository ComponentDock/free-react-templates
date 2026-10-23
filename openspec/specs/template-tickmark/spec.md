# Template: Tickmark (Custom Checkbox Showcase)

Recreation of ColorLib "Checkbox V01" (https://colorlib.com/wp/template/checkbox-01/).

## Purpose

Tickmark is a single-page component showcase template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 01"
checkbox showcase design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a simple, centered page with a heading "Checkbox #01" and
6 custom-styled checkboxes (Primary blue #0075f6, Success green #28a745, Danger
red #dc3545, Warning yellow #ffc107, Info teal #17a2b8, and Disabled gray)
arranged in a 3-column grid on a #fafafa background, using Poppins font. No
navbar, minimal page with just a footer.

Tickmark follows the same structure and adds the repo's standard dark-mode toggle
and accessible patterns.

Tickmark lives in `apps/tickmark` and uses shared components from `packages/ui`
(cn).

## Design reference (replication findings)

- **Source:** ColorLib "Checkbox V01" — https://colorlib.com/wp/template/checkbox-01/
- **Source slug:** `checkbox-01`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/checkbox-01/ — **HTTP 200**, 1,742 B, fetched 2026-10-23 (page `<title>`: "Checkbox 01"). The slug-only path `https://preview.colorlib.com/theme/checkbox-01/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/checkbox-01/css/style.css?v=0596307b`, fetched 2026-10-23): brand `#0075f6`, `#dc3545`, `#17a2b8`, `#ffc107`; dominant neutrals `#212529`, `#fafafa`; type Poppins, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-01.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/tickmark` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Checkbox #01".

#### Scenario: Heading content

- **GIVEN** the Tickmark page is rendered
- **WHEN** the page loads
- **THEN** the heading "Checkbox #01" SHALL be displayed as the main heading

### Requirement: Custom checkboxes

The system SHALL render 6 custom-styled checkboxes arranged in a 3-column grid.

#### Scenario: Checkbox variants

- **GIVEN** the page is rendered
- **WHEN** the checkbox showcase is displayed
- **THEN** there SHALL be 6 checkboxes with labels: "Primary", "Success", "Danger", "Warning", "Info", and "Disabled"
- **AND** each checkbox SHALL have a distinct color scheme (Primary #0075f6, Success #28a745, Danger #dc3545, Warning #ffc107, Info #17a2b8, Disabled gray)
- **AND** checkboxes SHALL be arranged in a responsive 3-column grid

#### Scenario: Checkbox interaction

- **GIVEN** the page is rendered
- **WHEN** the user clicks a non-disabled checkbox
- **THEN** the checkbox SHALL toggle between checked and unchecked states
- **AND** a checkmark indicator SHALL appear when checked

#### Scenario: Disabled checkbox

- **GIVEN** the page is rendered
- **WHEN** the user clicks the disabled checkbox
- **THEN** the checkbox SHALL NOT toggle state

### Requirement: Page background

The system SHALL render the page on a #fafafa background.

#### Scenario: Background color

- **GIVEN** the page is rendered
- **WHEN** the page is displayed
- **THEN** the page background SHALL be #fafafa

### Requirement: Footer

The system SHALL render a minimal footer with the site name and a link to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Tickmark"
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Page composition

The system SHALL compose the heading, checkbox showcase, and footer in a single
page with a main landmark and a document title.

#### Scenario: Page structure

- **GIVEN** the Tickmark page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Tickmark — Checkbox Showcase Template"
- **AND** the page SHALL contain a main landmark
- **AND** the main landmark SHALL contain the checkbox showcase heading

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/tickmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/tickmark/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page heading — the heading "Checkbox #01" SHALL be displayed as the main heading
- [x] Custom checkboxes — there SHALL be 6 checkboxes with labels: "Primary", "Success", "Danger", "Warning", "Info", and "Disabled"
- [ ] Page background — the page background SHALL be #fafafa
- [x] Page composition — the document title SHALL be "Tickmark — Checkbox Showcase Template"
