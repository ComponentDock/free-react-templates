# Template: Foldover (Accordion / UI Components)
<!-- prep-status: shipped-as=creel -->
> **SHIPPED-UNDER** — the ColorLib `accordion-12` design this prep describes already
> ships as `apps/creel` (<https://creel.free.componentdock.com>).
> Do not scaffold `apps/foldover`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-creel/spec.md`.

## Purpose

Recreation of ColorLib "Accordion 12" (`https://colorlib.com/wp/template/accordion-12/`, preview URL: `https://colorlib.com/preview/theme/accordion-12/`).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript.

## Design tokens

- **Primary / Brand Colors**: Deep slate/charcoal backgrounds (`#111827`, `#1f2937`), warm accent orange/amber (`#f59e0b`, `#d97706`), clean white text (`#ffffff`), muted gray descriptions (`#9ca3af`).
- **Typography**: Sans-serif font family (`Inter`, `system-ui`, sans-serif), clean hierarchy with distinct headings and collapsible content blocks.
- **Surface & Shape**: Rounded card corners (`rounded-xl` / `rounded-2xl`), subtle drop shadows (`shadow-lg`), clear chevron indicators that rotate smoothly on expansion.

## Requirements

### Feature: Foldover Accordion Showcase

As a visitor, I want to explore interactive accordion sections with smooth expand/collapse behavior so that I can easily digest structured FAQs or feature content.

#### Scenario: Display Accordion Items

- **GIVEN** the user loads the Foldover page
- **THEN** all accordion headers are displayed with their respective titles and chevron icons
- **AND** the first accordion item is expanded by default while others remain collapsed

#### Scenario: Toggle Accordion Item

- **GIVEN** an accordion item is collapsed
- **WHEN** the user clicks the accordion header
- **THEN** the accordion item expands smoothly to reveal its content
- **AND** the chevron icon rotates 180 degrees

#### Scenario: Single or Multi-expansion Mode

- **GIVEN** multiple accordion items are available
- **WHEN** the user expands another item
- **THEN** the previous items collapse (accordion behavior) or remain open depending on configuration

#### Scenario: Footer Branding Link

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer displays copyright information and a link to `https://www.componentdock.com/` ("Component Dock")
- **AND** no mention of ColorLib appears in the app code

## Verification checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] Typecheck, lint, unit tests, and build pass successfully
- [ ] 100% test coverage maintained on all new components
- [ ] Footer links correctly to Component Dock

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bac/accordion-12/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#f59e0b` — nearest `#72c02c` (d=139)
- `#d97706` — nearest `#72c02c` (d=132)
<!-- live-palette-unverified:end -->
