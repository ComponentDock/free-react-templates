# Template: BtnVault (Bootstrap Buttons UI Component Showcase)
<!-- prep-status: shipped-as=btnflare -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-07` design this prep describes already
> ships as `apps/btnflare` (<https://btnflare.free.componentdock.com>).
> Do not scaffold `apps/btnvault`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnflare/spec.md`.

## Purpose

Recreation of ColorLib **Bootstrap Buttons 07** (`https://colorlib.com/wp/template/bootstrap-buttons-07/`), preview URL: `https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-07.jpg`, stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens (Inferred from reference aesthetic)

- **Brand Colors**: Primary indigo/blue (`#4f46e5`, `#6366f1`), Accent violet/purple (`#8b5cf6`), Neutral dark (`#1f2937`), Neutral light (`#f9fafb`), Success emerald (`#10b981`), Warning amber (`#f59e0b`), Danger rose (`#ef4444`).
- **Font Family**: Inter, system-ui, sans-serif.
- **Button Shapes**: Rounded-full (pill / circular buttons), rounded-lg, sharp edges, outline variants, gradient fills, shadow effects, icon-badge buttons, social buttons, floating action buttons.
- **Section Backgrounds**: Clean white and light gray (`#f8fafc`) cards with soft drop shadows and border accents.

## Requirements

### Feature: Interactive Button Showcase & Playground

As a developer or designer visiting BtnVault, I want to explore various styled button components, copy code snippets, and test button states interactively.

#### Scenario: View button categories

- **GIVEN** the user opens the BtnVault page
- **WHEN** the page loads
- **THEN** the user sees navigation tabs for Solid Buttons, Gradient Buttons, Outline Buttons, Pill & Circular Buttons, Social Buttons, and Floating Action Buttons

#### Scenario: Interactive state testing

- **GIVEN** the user is on the button showcase section
- **WHEN** the user hovers or clicks a button variant
- **THEN** the button exhibits interactive feedback (scale, shadow elevation, color shift, ripple or loading spinner state)

#### Scenario: Copy button snippet

- **GIVEN** the user clicks "Copy Code" on a button card
- **WHEN** the action is triggered
- **THEN** the Tailwind / React JSX code snippet is copied to the clipboard with a success toast confirmation

#### Scenario: Footer attribution

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is rendered
- **THEN** it contains a copyright notice and a mandatory link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] Header banner with title, description, and category filter pills.
- [ ] Multiple interactive button sections with diverse shapes, colors, and shadows.
- [ ] Interactive click handlers / demo states (disabled, loading, active).
- [ ] Code snippet copy functionality with feedback.
- [ ] Responsive grid layout across mobile, tablet, and desktop viewports.
- [ ] Footer with Component Dock link (`https://www.componentdock.com/`).
- [ ] 100% test coverage with Vitest and Testing Library.

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bb/bootstrap-buttons-07/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#6f42c1` (d=48)
- `#6366f1` — nearest `#784ec5` (d=54)
- `#8b5cf6` — nearest `#784ec5` (d=54)
- `#10b981` — nearest `#138496` (d=57)
- `#f59e0b` — nearest `#e0a800` (d=26)
- `#ef4444` — nearest `#de4251` (d=21)
<!-- live-palette-unverified:end -->
