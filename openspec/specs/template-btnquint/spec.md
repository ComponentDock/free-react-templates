# Spec: BtnQuint (Bootstrap Buttons 05)

Recreation of ColorLib "Bootstrap Buttons V05" (https://colorlib.com/wp/template/bootstrap-buttons-05/).

## Purpose

A modern React button showcase and playground built with React 19, TypeScript, and Tailwind CSS 4. Recreation of ColorLib **Bootstrap Buttons 05** as **BtnQuint**.

## Design reference (replication findings)

- **Source:** ColorLib "Bootstrap Buttons V05" — https://colorlib.com/wp/template/bootstrap-buttons-05/
- **Source slug:** `bootstrap-buttons-05`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bb/bootstrap-buttons-05/ — **HTTP 200**, 3,561 B, fetched 2026-10-23 (page `<title>`: "Button #1"). The slug-only path `https://preview.colorlib.com/theme/bootstrap-buttons-05/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bb/bootstrap-buttons-05/css/style.css?v=cbd17a42`, fetched 2026-10-23): brand `#007bff`, `#28a745`, `#17a2b8`, `#ffc107`; dominant neutrals `#212529`, `#6c757d`, `#f8f9fa`; type Roboto, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-05.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/btnquint` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement 1: Navbar

Users SHALL see a top navigation bar with the brand name and navigation links.

#### Scenario: Display navbar

- **WHEN** the user loads BtnQuint
- **THEN** they see a sticky navbar with brand name and navigation links

### Requirement 2: Hero Section

Users SHALL see a hero section introducing BtnQuint with a heading and subtitle.

#### Scenario: Display hero

- **WHEN** the user loads BtnQuint
- **THEN** they see a hero with the main heading "#05 — Bootstrap Buttons" and subtitle text

### Requirement 3: Solid Buttons

Users SHALL see a section displaying standard solid buttons across all semantic intents (primary, secondary, success, danger, warning, info, light, dark).

#### Scenario: Display solid buttons

- **WHEN** the user scrolls to the solid variants section
- **THEN** they see eight solid-colored buttons with semantic color coding

### Requirement 4: Outline Buttons

Users SHALL see a section showcasing transparent buttons with colored borders and hover-fill effects.

#### Scenario: Display outline buttons

- **WHEN** the user scrolls to the outline variants section
- **THEN** they see outline buttons with colored borders matching semantic intents

### Requirement 5: Shape Variants

Users SHALL see a section demonstrating pill (rounded-full) and square (rounded-none) button radii.

#### Scenario: Display shape variants

- **WHEN** the user scrolls to the shape variants section
- **THEN** they see pill-shaped and square button variants grouped under sub-headings

### Requirement 6: Sizes and States

Users SHALL see a section showing buttons in three sizes (large, default, small) and disabled/active states.

#### Scenario: Display size variants

- **WHEN** the user scrolls to the sizes and states section
- **THEN** they see large, default, and small buttons alongside disabled and active state buttons

### Requirement 7: Icon Buttons

Users SHALL see a section showcasing buttons with leading or trailing icons.

#### Scenario: Display icon buttons

- **WHEN** the user scrolls to the icon buttons section
- **THEN** they see buttons with icon + label combinations

### Requirement 8: Playground

Users SHALL see an interactive playground section with a preview button that demonstrates the current configuration.

#### Scenario: Display playground

- **WHEN** the user scrolls to the playground section
- **THEN** they see a heading and a preview button demonstrating the current button style

### Requirement 9: Footer

Users SHALL see a footer with a link to https://www.componentdock.com/.

#### Scenario: Display footer

- **WHEN** the user scrolls to the bottom of the page
- **THEN** they see a footer with a link to Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnquint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnquint/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
