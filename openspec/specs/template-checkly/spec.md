# Template: Checkly (Custom Checkbox Showcase)

Recreation of ColorLib "Checkbox V02" (https://colorlib.com/wp/template/checkbox-02/).

## Purpose

Checkly is a single-page component showcase template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 02"
checkbox showcase design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a simple, centered page with heading "Checkbox #02",
a sub-heading "Choose your favorite sports", and 3 custom-styled checkboxes
(Basketball, Baseball, Badminton) with circular icon indicators — unchecked
shows a gray circle, checked shows a coral (#f76262) circle with a rotation
animation. Poppins font, white background, centered single-column layout.

Checkly follows the same structure and adds the repo's standard dark-mode toggle
and accessible patterns.

Checkly lives in `apps/checkly` and uses shared components from `packages/ui`
(cn).

## Design reference (replication findings)

- **Source:** ColorLib "Checkbox V02" — https://colorlib.com/wp/template/checkbox-02/
- **Source slug:** `checkbox-02`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/checkbox-02/ — **HTTP 200**, 1,347 B, fetched 2026-10-23 (page `<title>`: "Checkbox 02"). The slug-only path `https://preview.colorlib.com/theme/checkbox-02/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/checkbox-02/css/style.css?v=2f2549cc`, fetched 2026-10-23): brand `#f76262`; dominant neutrals `#212529`, `#fafafa`; type Poppins, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-02.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/checkly` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Checkbox #02".

#### Scenario: Heading content

- **GIVEN** the Checkly page is rendered
- **WHEN** the page loads
- **THEN** the heading "Checkbox #02" SHALL be displayed as the main heading

### Requirement: Sub-heading

The system SHALL render a sub-heading "Choose your favorite sports" below
the main heading.

#### Scenario: Sub-heading content

- **GIVEN** the page is rendered
- **WHEN** the checkbox section is displayed
- **THEN** the sub-heading "Choose your favorite sports" SHALL be shown

### Requirement: Custom checkboxes

The system SHALL render 3 custom-styled circular checkboxes.

#### Scenario: Checkbox labels

- **GIVEN** the page is rendered
- **WHEN** the checkbox showcase is displayed
- **THEN** there SHALL be 3 checkboxes with labels: "Basketball", "Baseball", and "Badminton"

#### Scenario: Checkbox interaction

- **GIVEN** the page is rendered
- **WHEN** the user clicks a checkbox
- **THEN** the checkbox SHALL toggle between checked and unchecked states
- **AND** the checked state SHALL display a coral (#f76262) circle icon
- **AND** the unchecked state SHALL display a gray circle icon

#### Scenario: Default state

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** "Basketball" SHALL be checked by default
- **AND** "Baseball" and "Badminton" SHALL be unchecked by default

### Requirement: Checkbox icon style

The system SHALL render circular checkbox indicators (not square).

#### Scenario: Unchecked icon

- **GIVEN** a checkbox is unchecked
- **WHEN** the checkbox is rendered
- **THEN** the indicator SHALL be a gray (#rgba(0,0,0,0.3)) circle

#### Scenario: Checked icon

- **GIVEN** a checkbox is checked
- **WHEN** the checkbox is rendered
- **THEN** the indicator SHALL be a coral (#f76262) circle with a checkmark
- **AND** the indicator SHALL animate with a rotation effect

### Requirement: Page background

The system SHALL render the page on a white background.

#### Scenario: Background color

- **GIVEN** the page is rendered
- **WHEN** the page is displayed
- **THEN** the page background SHALL be white

### Requirement: Footer

The system SHALL render a minimal footer with the site name and a link to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Checkly"
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Page composition

The system SHALL compose the heading, sub-heading, checkbox showcase, and footer
in a single page with a main landmark and a document title.

#### Scenario: Page structure

- **GIVEN** the Checkly page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Checkly — Checkbox Showcase Template"
- **AND** the page SHALL contain a main landmark
- **AND** the main landmark SHALL contain the checkbox showcase

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/checkly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/checkly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
