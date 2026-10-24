# Template: Bootstrap Buttons Ten (Gradient & Shadow Button Showcase)
<!-- prep-status: shipped-as=btnclick -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-10` design this prep describes already
> ships as `apps/btnclick` (<https://btnclick.free.componentdock.com>).
> Do not scaffold `apps/bootstrap-buttons-ten`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnclick/spec.md`.

## Purpose

Recreation of ColorLib Bootstrap Buttons 10 (`https://colorlib.com/wp/template/bootstrap-buttons-10/`). A modern UI component showcase highlighting gradient, shadow-enhanced, and pill-shaped button variations with rich interactive hover and click states, built with React 19, Tailwind CSS 4, and TypeScript.
- **Source design:** ColorLib "Bootstrap Buttons 10" — https://colorlib.com/wp/template/bootstrap-buttons-10/

## Design tokens

- **Primary Brand Color**: Indigo-600 / Violet-600 with vibrant gradient pairings (from-indigo-600 to-violet-600)
- **Accent Colors**: Emerald-500, Amber-500, Rose-500, Cyan-500, Slate-800
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radii**: Rounded-xl, rounded-full, pill styles
- **Section Backgrounds**: Clean neutral light mode (slate-50 / white) with subtle shadow-md / shadow-lg card containers

## Requirements

### Requirement 1: Gradient & Shadow Button Showcase

- As a developer, I want to explore buttons styled with rich gradients and elevated shadows so I can use high-impact CTA elements in my applications.

#### Scenario: Viewing gradient and shadow variants

- **GIVEN** the user is on the Bootstrap Buttons Ten home page
- **WHEN** the user views the gradient and shadow section
- **THEN** they should see buttons featuring multi-stop gradient backgrounds and depth-enhancing box shadows

### Requirement 2: Pill & Rounded Shape Variations

- As a designer, I want to view buttons in pill and rounded-xl shapes to match modern UI design systems.

#### Scenario: Browsing shape variations

- **GIVEN** the user is browsing the shape variations section
- **WHEN** the user inspects the buttons
- **THEN** they should see fully rounded pill buttons alongside softly rounded buttons with hover scaling effects

### Requirement 3: Interactive Copy-to-Clipboard Snippets

- As a developer, I want to copy code snippets for each button style so I can accelerate my frontend development.

#### Scenario: Copying button code

- **GIVEN** the user clicks the "Copy Code" button on a button component card
- **WHEN** the action is triggered
- **THEN** the corresponding Tailwind CSS classes should be copied to the clipboard with a visual success confirmation

### Requirement 4: Component Dock Footer Attribution

- As a visitor, I want to see a clear attribution link to Component Dock in the footer.

#### Scenario: Checking footer attribution

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is rendered
- **THEN** it must include a link to https://www.componentdock.com/

## Verification checklist

- [ ] `npm run verify:app -- bootstrap-buttons-ten` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 4 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
