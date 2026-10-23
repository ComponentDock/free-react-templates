# Template: BtnVibe (Bootstrap Buttons)

Recreation of ColorLib Bootstrap Buttons 06 under the original name **BtnVibe**.

## Purpose

Btnvibe is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 06** design (https://colorlib.com/wp/template/bootstrap-buttons-06/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Requirements

### Requirement 1: Navigation Bar

#### Scenario: Navigation Bar

- Navbar with brand logo ("BtnVibe"), navigation links (Showcase, Outline, Shapes, Sizes, Icons, Playground), and dark mode toggle.

### Requirement 2: Hero Section

#### Scenario: Hero Section

- Engaging header presenting BtnVibe as a modern bootstrap button showcase with quick action buttons.

### Requirement 3: Solid Buttons Section

#### Scenario: Solid Buttons Section

- Showcase of solid-colored button variants across standard intents.

### Requirement 4: Outline & Ghost Buttons Section

#### Scenario: Outline & Ghost Buttons Section

- Showcase of transparent/outline button variants.

### Requirement 5: Shape & Size Variants

#### Scenario: Shape & Size Variants

- Rounded, pill, square, small, medium, large, and disabled state variations.

### Requirement 6: Interactive Playground

#### Scenario: Interactive Playground

- Live playground where users can customize button properties and copy snippet code.

### Requirement 7: Component Dock Footer

#### Scenario: Component Dock Footer

- Footer linking to https://www.componentdock.com/ ("Made with Component Dock").

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnvibe/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnvibe/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation Bar — Navbar with brand logo ("BtnVibe"), navigation links (Showcase, Outline, Shapes, Sizes, Icons, Playground), and dark mode toggle
- [ ] Hero Section — Engaging header presenting BtnVibe as a modern bootstrap button showcase with quick action buttons
- [ ] Solid Buttons Section — Showcase of solid-colored button variants across standard intents
- [ ] Outline & Ghost Buttons Section — Showcase of transparent/outline button variants
- [ ] Shape & Size Variants — Rounded, pill, square, small, medium, large, and disabled state variations
- [ ] Interactive Playground — Live playground where users can customize button properties and copy snippet code
