# Template: BtnCraft (UI Component Library)

## Purpose

Recreation of ColorLib "Bootstrap Buttons 01" (`https://colorlib.com/wp/template/bootstrap-buttons-01/`).
Note: The live preview URL returned 404, so replication fidelity is based on the official ColorLib screenshot and standard modern Bootstrap design principles.
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide icons.
New Name: `btncraft` (Package: `@free-react-templates/btncraft`).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bb/bootstrap-buttons-01/ (HTTP 200, 46,374 B, fetched 2026-10-23) and its theme stylesheet `theme/bb/bootstrap-buttons-01/css/style.css` (40,120 B, sha256 `025012fb6870…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#3e64ff` | 15 declarations — `.cl-btn.cl-btn-link`, `.cl-btn.cl-btn-primary` |
| Other chromatic values | `#007bff`, `#64c4ed`, `#94aa2a` | `#007bff` × 14 (a); `#64c4ed` × 13 (.cl-btn.cl-btn-info); `#94aa2a` × 13 (.cl-btn.cl-btn-success) |
| Surface | `#ffffff` | 57 declarations — `.cl-btn-primary`, `.cl-btn-primary:hover` |
| Ink / dark surface | `#212529` | 17 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `"Poppins", sans-serif` (2 rules — body)<br>`'Ionicons'` (1 rule — input[type="checkbox"]:checked:after) | `font-family` declarations in the theme sheet |
| Radii | `0.25rem`, `100%`, `0.2rem` | `0.25rem` (.cl-btn); `100%` (input[type="radio"]:checked + label:before); `0.2rem` (.cl-btn-sm) |

Palette in order of use: `#ffffff` ×57, `#343a40` ×24, `#212529` ×17, `#3e64ff` ×15, `#007bff` ×14, `#64c4ed` ×13.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navigation & Header

The app SHALL display a professional sticky navigation bar with a brand logo, navigation links, and a theme toggle.

#### Scenario: User views navigation

- **WHEN** the user visits BtnCraft
- **THEN** the header shows the brand logo "BtnCraft" and navigation links (Showcase, Variants, Sizes, States, Code)
- **AND** the sticky bar remains at the top on scroll

### Requirement: Hero & Introduction

The hero section SHALL feature a compelling headline, subtitle, and quick action buttons.

#### Scenario: User views hero

- **WHEN** the user lands on the page
- **THEN** the heading "BtnCraft — Modern Bootstrap Button Showcase" is visible
- **AND** CTA buttons link to #showcase and #playground

### Requirement: Solid Button Variants

The Solid Variants section SHALL display standard solid buttons across all semantic color intents.

#### Scenario: User views solid buttons

- **WHEN** the user scrolls to the Solid Variants section
- **THEN** all 8 semantic color buttons (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark) are visible with correct styling

### Requirement: Outline Button Variants

The Outline Variants section SHALL display transparent background buttons with solid borders that fill on hover.

#### Scenario: User views outline buttons

- **WHEN** the user scrolls to the Outline Variants section
- **THEN** all 8 outline variant buttons are visible

### Requirement: Shape Variants

The Shape Variants section SHALL demonstrate pill (rounded-full) and square (rounded-none) button shapes.

#### Scenario: User views shape variants

- **WHEN** the user scrolls to the Shape Variants section
- **THEN** both Pill Buttons and Square Buttons subsections are displayed

### Requirement: Sizes & States

The Sizes & States section SHALL display small, medium, and large buttons, plus active, disabled, and loading states.

#### Scenario: User views sizes and states

- **WHEN** the user scrolls to the Sizes & States section
- **THEN** Small, Medium, and Large buttons are visible
- **AND** Active, Disabled, and Loading state buttons are rendered correctly

### Requirement: Icon Buttons

The Icon Buttons section SHALL display buttons augmented with Lucide icons.

#### Scenario: User views icon buttons

- **WHEN** the user scrolls to the Icon Buttons section
- **THEN** buttons with icons (Download, Delete, Add to Cart, etc.) are visible

### Requirement: Interactive Playground

The Interactive Playground SHALL allow users to customize button variant, size, shape, and state, and copy generated JSX code.

#### Scenario: User customizes button in playground

- **WHEN** the user selects a different variant in the playground
- **THEN** the preview button updates immediately to show the selected variant

#### Scenario: User copies button code

- **WHEN** the user clicks the "Copy code" button
- **THEN** the JSX/Tailwind code is copied to the clipboard

### Requirement: Footer

The footer SHALL contain copyright information and a mandatory link to Component Dock.

#### Scenario: User checks footer attribution

- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer displays a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btncraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btncraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation & Header — the header shows the brand logo "BtnCraft" and navigation links (Showcase, Variants, Sizes, States, Code)
- [x] Hero & Introduction — the heading "BtnCraft — Modern Bootstrap Button Showcase" is visible
- [ ] Solid Button Variants — all 8 semantic color buttons (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark) are visible with correct styling
- [ ] Outline Button Variants — all 8 outline variant buttons are visible
- [ ] Shape Variants — both Pill Buttons and Square Buttons subsections are displayed
- [ ] Sizes & States — Small, Medium, and Large buttons are visible
- [ ] Icon Buttons — buttons with icons (Download, Delete, Add to Cart, etc.) are visible
- [ ] Interactive Playground — the preview button updates immediately to show the selected variant
