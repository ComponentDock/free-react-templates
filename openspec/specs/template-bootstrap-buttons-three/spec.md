# Template: Bootstrap Buttons Three (Solid & Outline Button Collection)
<!-- prep-status: shipped-as=btnstack -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-03` design this prep describes already
> ships as `apps/btnstack` (<https://btnstack.free.componentdock.com>).
> Do not scaffold `apps/bootstrap-buttons-three`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnstack/spec.md`.

## Purpose

Recreation of ColorLib Bootstrap Buttons 03 (https://colorlib.com/wp/template/bootstrap-buttons-03/). A polished UI component library showcasing solid fill buttons, modern outline styles, dual-tone variants, badge integrations, and interactive states, built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Primary Brand Color**: Emerald / Teal (`#10b981` / `#059669`)
- **Secondary Accent**: Slate / Gray (`#657a8e` / `#475569`)
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radii**: Rounded-md (`rounded-md`), rounded-lg (`rounded-lg`), rounded-full (`rounded-full`), square (`rounded-none`)
- **Section Backgrounds**: Slate-50 / White light mode, Slate-900 / Slate-800 dark mode

## Requirements

### Requirement 1: Solid & Outline Button Collections

- As a developer, I want to explore solid fill and clean outline button variants with clear hover and active states.

#### Scenario: Viewing solid and outline categories

- **GIVEN** the user is on the Bootstrap Buttons Three home page
- **WHEN** the user views the button showcase sections
- **THEN** they should see Solid Fill Buttons, Clean Outline Buttons, Status Variations (Success, Warning, Danger, Info), and Size Scaling (Sm, Md, Lg, Xl)

### Requirement 2: Interactive States & Copy Snippet

- As a user, I want to test focus, active, and disabled states, and copy button markup instantly.

#### Scenario: Copying code snippet

- **GIVEN** the user clicks the "Code" action on any button card
- **WHEN** the snippet view opens
- **AND** the user clicks the copy button
- **THEN** the React/Tailwind markup should be copied to the clipboard with success feedback

### Requirement 3: Component Dock Footer & Navigation

- As a user, I want a responsive header and footer linking to Component Dock.

#### Scenario: Footer attribution check

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer must display "Made with Component Dock" linking to https://www.componentdock.com/

## Verification checklist

- [ ] All solid and outline button variants render correctly with responsive padding
- [ ] Hover, active, focus, and disabled states function properly
- [ ] Code snippet copy-to-clipboard works as expected
- [ ] Footer contains the mandatory Component Dock link
- [ ] 100% test coverage with Vitest & Testing Library

<!-- live-palette-revalue:start -->
**Live palette re-value (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bb/bootstrap-buttons-03/` answers **HTTP 200** (8,863 B); the declarations below are quoted from its own stylesheets.

| claimed | painted | d | sheet (bytes, sha256) | declaration |
| --- | --- | --- | --- | --- |
| `#64748b` | `#657a8e` ×1 | 7 | `style.css?v=8dbf01b1` (24,040 B, `9cef0291bdeb…`) | `color: #657a8e;` |

The claimed hex was a screenshot sample of the same hue; the sheet value is canonical (`docs/replication.md`).
<!-- live-palette-revalue:end -->

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bb/bootstrap-buttons-03/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#10b981` — nearest `#138496` (d=57)
- `#059669` — nearest `#10707f` (d=45)
- `#475569` — nearest `#3f4d71` (d=14)
<!-- live-palette-unverified:end -->
