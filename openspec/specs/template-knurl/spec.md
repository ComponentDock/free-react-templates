# Template: Knurl (Button / UI Kit Showcase)

## Purpose

Knurl is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 16" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-16/), built under a
DIFFERENT name (**Knurl** — per the monorepo naming mandate — never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a flat, white, single-column Bootstrap 4 UI-kit page: a 20px
heading "#16 — Bootstrap 4 Buttons", three showcase blocks stacked vertically (Sizes, Button Colors with 18 solid buttons, and Full width button). Square buttons (`border-radius: 0`), uppercase bold 12px labels, and a white left-to-right sweep overlay on hover. No navbar, no footer, no images, no forms.

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 16" is FORBIDDEN
> as the app name. **Knurl** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-27). Source slug + preview URL are recorded
> below.

> PREVIEW URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-16/` (slug `bootstrap-buttons-16`).

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 16". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)**.
- **Visual design:** clean, flat, single-column kit page on a white (`#ffffff`) background. Heading `#16 — Bootstrap 4 Buttons` (20px, `#212529`). Sizes row, 18-button color grid, and full-width button. Square buttons (`border-radius: 0`), hover sweep effect, Roboto font.
- **Section order:**
  1. Title (`#16 — Bootstrap 4 Buttons`)
  2. Sizes (`Large`, `Medium`, `Small`)
  3. Button Colors (18 solid color buttons)
  4. Full width button (`btn-block`)
  5. Footer (Component Dock attribution linking `https://www.componentdock.com/`)

## Requirements

### Requirement: Page structure

The system SHALL render the Knurl page as a single-column, centered document
on a white background, in this order: the "#16 — Bootstrap 4 Buttons" title,
the three showcase blocks (Sizes, Button Colors, Full width button), and a
minimal footer.

#### Scenario: Default render

- **GIVEN** the Knurl page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a left-aligned title SHALL read "#16 — Bootstrap 4 Buttons"
  (20px, `#212529`)
- **AND** the page SHALL contain, in order, the blocks: Sizes, Button
  Colors, Full width button
- **AND** a footer SHALL render at the bottom linking Component Dock

### Requirement: Button size variants

The system SHALL render the Sizes block with three blue "Button" buttons at
small, medium, and large sizes.

### Requirement: Button color palette

The system SHALL render the Button Colors block with all 18 solid color
buttons.
