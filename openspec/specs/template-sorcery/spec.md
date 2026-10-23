# Template: Sorcery (Financial Form Wizard)

## Purpose

Recreation of ColorLib **Colorlib Wizard 24** (`https://colorlib.com/wp/template/colorlib-wizard-24/`), preview URL `https://preview.colorlib.com/theme/colorlib-wizard-24/` (preview unreachable, designed from ColorLib screenshot and clean financial wizard / multi-step form patterns) — **re-probed 2026-10-23: the demo serves** (measured record below). Built with Vite, React 19, Tailwind CSS 4, TypeScript.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-24/index.html` — HTTP 200, 16,184 B, title `Wizard-v4`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-24/css/style.css?v=e23e72d8` (17,041 B).
> Faces it actually declares: `Open Sans`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design Tokens

- Brand Primary: `#2563eb` (Blue 600)
- Brand Accent: `#10b981` (Emerald 500)
- Neutral Dark: `#0f172a` (Slate 900)
- Neutral Light: `#f8fafc` (Slate 50)
- Font Family: `Inter, sans-serif`
- Border Radius: `0.5rem` (rounded-lg)

## Requirements

### Feature: Multi-Step Financial Form Wizard & Interactive Validation

#### Scenario: Multi-Step Financial Form Wizard & Interactive Validation

- Scenario: User navigates through multi-step financial wizard steps
- **GIVEN** the user is on the Sorcery financial wizard template home page
- **WHEN** the user views Step 1 (Personal & Account Information)
- **AND** fills in valid details and clicks "Next"
- **THEN** the wizard advances to Step 2 (Financial Profile & Income)
- **AND** displays real-time input validation and progress indicators
- Scenario: User completes the wizard and submits
- **GIVEN** the user has reached the final step of the wizard
- **WHEN** the user reviews their summary and clicks "Submit Application"
- **THEN** a success confirmation screen is rendered with reference details

## Verification checklist

- [ ] `npm run verify:app -- sorcery` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 1 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Multi-Step Financial Form Wizard & Interactive Validation
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
