# Template: ClickForge (UI Components Showcase)
<!-- prep-status: shipped-as=btnridge -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-12` design this prep describes already
> ships as `apps/btnridge` (<https://btnridge.free.componentdock.com>).
> Do not scaffold `apps/clickforge`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnridge/spec.md`.

## Purpose

Recreation of ColorLib Bootstrap Buttons 12 (`https://colorlib.com/wp/template/bootstrap-buttons-12/`).
Preview URL: https://colorlib.com/wp/template/bootstrap-buttons-12/ (Preview URL unreachable / archived; recreated faithfully from template screenshot and design system patterns).
Stack: React 19, Tailwind CSS 4, TypeScript, Lucide Icons.

## Design Tokens

- Primary: Indigo (`#4f46e5`, `bg-indigo-600`)
- Secondary: Emerald (`#10b981`, `bg-emerald-600`)
- Neutral Dark: Slate 900 (`#0f172a`)
- Neutral Light: Slate 50 (`#f8fafc`)
- Typography: Inter (`font-sans`)
- Radii: Rounded-lg (`0.5rem`), Pill (`9999px`), Sharp (`0px`)

## Requirements

### Feature: ClickForge UI Showcase

As a developer or designer visiting ClickForge,
I want to explore a comprehensive interactive library of modern button styles and interactive components,
So that I can copy or inspect production-ready Tailwind/React buttons.

#### Scenario: Hero and Quick Filter

- **GIVEN** the user lands on ClickForge
- **WHEN** the page loads
- **THEN** the hero displays the title "ClickForge Component Library", subtitle, and category filter tabs (All, Solid, Outline, Gradients, Interactive)

#### Scenario: Solid Buttons Section

- **GIVEN** the user views the Solid Buttons section
- **WHEN** examining the buttons
- **THEN** primary, secondary, success, danger, warning, and dark buttons are rendered with hover and active states

#### Scenario: Outline and Ghost Buttons

- **GIVEN** the user views the Outline & Ghost section
- **WHEN** examining the buttons
- **THEN** border-only buttons and transparent hover background buttons are displayed

#### Scenario: Gradient and Glow Buttons

- **GIVEN** the user views the Gradient & Glow section
- **WHEN** examining the buttons
- **THEN** vibrant gradient buttons with subtle drop shadows/glows are rendered

#### Scenario: Interactive State Buttons

- **GIVEN** the user views the Interactive States section
- **WHEN** the user clicks a loading button
- **THEN** it transitions to a loading spinner state and then to a success checkmark state

#### Scenario: Footer Attribution

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** viewing the footer
- **THEN** it displays copyright and a link to Component Dock (`https://www.componentdock.com/`)

## Verification checklist

- [ ] Spec validated (`npm run spec:validate`)
- [ ] 100% test coverage on new components
- [ ] No mention of ColorLib in app code
- [ ] Footer links https://www.componentdock.com/
- [ ] CNAME configured for clickforge.free.componentdock.com
