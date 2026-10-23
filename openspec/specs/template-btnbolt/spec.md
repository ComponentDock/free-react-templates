## Purpose

Recreate ColorLib Bootstrap Buttons V09 as a React + Tailwind template named BtnBolt.
This template showcases rounded Bootstrap 4 buttons in multiple sizes and the full
18-color Bootstrap palette, with a full-width block button variant.

## Requirements

### Requirement: Render page title

The page SHALL display the heading "#09 — Bootstrap 4 Buttons".

#### Scenario: Heading visible on load

- **WHEN** the page loads
- **THEN** the heading text "#09 — Bootstrap 4 Buttons" is visible

### Requirement: Render size buttons

The page SHALL display three button size variants (Large, Medium, Small) each with a
text label above the button.

#### Scenario: Size labels and buttons visible

- **WHEN** the page loads
- **THEN** the labels "Large", "Medium", and "Small" are visible
- **AND** three buttons labeled "Button" are rendered

### Requirement: Render color buttons

The page SHALL display all 18 Bootstrap 4 color variants as individual buttons.

#### Scenario: All color buttons visible

- **WHEN** the page loads
- **THEN** 18 buttons are rendered
- **AND** each button displays its color name (Primary, Secondary, Success, etc.)

### Requirement: Render full-width block button

The page SHALL display a full-width primary button with a "Full width button" label.

#### Scenario: Block button visible

- **WHEN** the page loads
- **THEN** the text "Full width button" is visible
- **AND** a full-width "Button" element is rendered

### Requirement: Footer links to Component Dock

The page footer SHALL contain a link to https://www.componentdock.com/ that opens in a
new tab.

#### Scenario: Footer link present

- **WHEN** the page loads
- **THEN** a link with href "https://www.componentdock.com/" exists in the footer
- **AND** the link has target="_blank" and rel="noopener noreferrer"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnbolt/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnbolt/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
