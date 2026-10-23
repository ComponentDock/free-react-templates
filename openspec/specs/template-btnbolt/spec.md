# Template: Btnbolt (Bootstrap Buttons)

## Purpose

Recreate ColorLib Bootstrap Buttons V09 as a React + Tailwind template named BtnBolt.
This template showcases rounded Bootstrap 4 buttons in multiple sizes and the full
18-color Bootstrap palette, with a full-width block button variant.

## Design reference (replication findings)

- **Source:** ColorLib "Bootstrap Buttons V09" — https://colorlib.com/wp/template/bootstrap-buttons-09/
- **Source slug:** `bootstrap-buttons-09`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bb/bootstrap-buttons-09/ — **HTTP 200**, 3,279 B, fetched 2026-10-23 (page `<title>`: "Button #9"). The slug-only path `https://preview.colorlib.com/theme/bootstrap-buttons-09/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bb/bootstrap-buttons-09/css/style.css?v=942b5964`, fetched 2026-10-23): brand `#007bff`, `#28a745`, `#17a2b8`, `#ffc107`; dominant neutrals `#212529`, `#f8f9fa`, `#6c757d`; type Roboto, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-09.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/btnbolt` had no recorded reference (docs/replication.md requires one).

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
