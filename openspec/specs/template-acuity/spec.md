# Template: Acuity (Interactive Profile & Widget Accordions)
<!-- prep-status: shipped-as=foldkit -->
> **SHIPPED-UNDER** — the ColorLib `accordion-15` design this prep describes already
> ships as `apps/foldkit` (<https://foldkit.free.componentdock.com>).
> Do not scaffold `apps/acuity`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-foldkit/spec.md`.

## Purpose

Recreation of ColorLib "Accordion 15" (`https://colorlib.com/wp/template/accordion-15/`), preview URL: `https://preview.colorlib.com/theme/accordion-15/` (fallback to ColorLib listing and screenshot reference).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**: Primary indigo (`#4f46e5`), Accent cyan (`#06b6d4`), Neutral light background (`#f8fafc`), Card background (`#ffffff`), Text primary (`#0f172a`), Text muted (`#64748b`).
- **Font Family**: "Inter", sans-serif.
- **Button Shapes**: Rounded-xl (`border-radius: 0.75rem`), smooth transitions, shadow-md.
- **Section Backgrounds**: Clean white and light slate alternating backgrounds with card shadows and accordion expanders.

## Requirements

### Feature: Interactive Profile & Widget Accordion Sections

As a site visitor, I want to interact with profile widgets and collapsible accordion cards so that I can view detailed user metrics, biographical info, and interactive stats.

#### Scenario: Expanding profile accordion items

- **GIVEN** the user is on the Acuity template home page
- **WHEN** the user clicks on a profile accordion header
- **THEN** the respective profile card expands smoothly to reveal detailed stats, bio, and social links
- **AND** clicking another accordion item collapses the previous one or expands independently

#### Scenario: Interacting with profile widgets and action buttons

- **GIVEN** an expanded profile accordion section
- **WHEN** the user clicks on action buttons (e.g., "Follow", "Message", "View Profile")
- **THEN** interactive feedback or success states are displayed

#### Scenario: Responsive layout and navigation

- **GIVEN** the user views the template on mobile or desktop devices
- **WHEN** the page renders
- **THEN** the accordion cards stack neatly with responsive padding and readable typography
- **AND** the footer links to Component Dock (`https://www.componentdock.com/`)

## Verification checklist

- [ ] `npm run verify:app -- acuity` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 3 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Interactive Profile & Widget Accordion Sections
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
