# Template: Compress (UI / Accordion Component Showcase)
<!-- prep-status: shipped-as=foldkit -->
> **SHIPPED-UNDER** — the ColorLib `accordion-15` design this prep describes already
> ships as `apps/foldkit` (<https://foldkit.free.componentdock.com>).
> Do not scaffold `apps/compress`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-foldkit/spec.md`.

## Purpose

Recreation of ColorLib "Accordion 15" (preview URL: `https://colorlib.com/wp/template/accordion-15/`), built as a modern, responsive React 19 + Tailwind CSS 4 single-page application.

- **Design Category**: UI Components / Accordions / Profile Widgets
- **Tech Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict), Lucide React.

## Design Tokens

- **Primary Brand Color**: Indigo / Violet (`#6366f1` / `indigo-600`) with Slate neutrals (`#0f172a` text, `#f8fafc` background).
- **Typography**: Inter / sans-serif.
- **Button / Component Shape**: Rounded-xl borders with smooth accordion transition animations and clean shadows.
- **Section Backgrounds**: Clean light gray (`#f8fafc`) with white card surfaces.

## Requirements

### Feature: Interactive Accordion Showcase

As a user browsing the profile widget accordions,
I want to view and interact with various accordion styles and profile cards,
So that I can easily inspect information in a compact layout.

#### Scenario: View main accordion showcase

- **GIVEN** the Compress application is loaded
- **WHEN** the user views the main page
- **THEN** the header, interactive accordion sections, profile widget components, and footer with Component Dock link should be visible

#### Scenario: Expand and collapse accordion panels

- **GIVEN** an accordion panel is collapsed
- **WHEN** the user clicks the accordion header
- **THEN** the panel expands smoothly to reveal its content and toggle icon rotates

#### Scenario: Toggle multiple panels

- **GIVEN** multiple accordion sections are present
- **WHEN** the user clicks different panels
- **THEN** the active panels toggle correctly according to the accordion mode

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to `https://www.componentdock.com/`

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bac/accordion-15/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#6366f1` — nearest `#007bff` (d=102)
<!-- live-palette-unverified:end -->
