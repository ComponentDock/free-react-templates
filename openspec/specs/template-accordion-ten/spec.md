# Template: Accordion Ten (UI Component Showcase & FAQ)
<!-- prep-status: shipped-as=gather -->
> **SHIPPED-UNDER** — the ColorLib `accordion-10` design this prep describes already
> ships as `apps/gather` (<https://gather.free.componentdock.com>).
> Do not scaffold `apps/accordion-ten`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-gather/spec.md`.

## Purpose

Recreation of ColorLib **Accordion 10** (`https://colorlib.com/wp/template/accordion-10/`), preview URL: `https://preview.colorlib.com/theme/accordion-10/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**: Primary deep slate blue (`#1e293b`), Accent vibrant blue (`#3b82f6`), Neutral light background (`#f8fafc`), Card background (`#ffffff`), Text primary (`#0f172a`), Text muted (`#64748b`).
- **Font Family**: "Inter", sans-serif.
- **Button Shapes**: Rounded-lg (`border-radius: 0.5rem`), subtle shadow, hover elevation with transition.
- **Section Backgrounds**: Alternating clean white and slate-50 sections with structured grid and accordion card containers.

## Requirements

### Feature: Accordion Navigation & Interactive FAQ Sections

As a site visitor, I want to explore collapsible accordion panels, category tabs, and interactive FAQ sections so that I can easily find detailed answers and structured content.

#### Scenario: Expanding and collapsing accordion items

- **GIVEN** the user is on the Accordion Ten template home page
- **WHEN** the user clicks on an accordion header
- **THEN** the corresponding accordion content panel expands smoothly, displaying detailed text and icons
- **AND** clicking the header again collapses the content panel

#### Scenario: Filtering accordion content by category tabs

- **GIVEN** the user views the interactive accordion filter section
- **WHEN** the user clicks on a category tab (e.g., "General", "Billing", "Security", "Support")
- **THEN** the displayed accordion items update to show only the relevant items for that category

#### Scenario: Submitting a support inquiry form

- **GIVEN** the user scrolls to the contact/inquiry section at the bottom
- **WHEN** the user fills in name, email, and message fields and clicks submit
- **THEN** a success confirmation message is displayed
- **AND** the input fields are reset

## Verification checklist

- [ ] `npm run verify:app -- accordion-ten` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 3 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Accordion Navigation & Interactive FAQ Sections
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bac/accordion-10/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#3b82f6` — nearest `#38ade0` (d=48)
- `#64748b` — nearest `#38ade0` (d=111)
<!-- live-palette-unverified:end -->
