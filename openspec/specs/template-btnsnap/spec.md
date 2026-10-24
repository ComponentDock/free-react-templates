# Template: BtnSnap (UI Component Showcase / Buttons)
<!-- prep-status: shipped-as=btnmatrix -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-20` design this prep describes already
> ships as `apps/btnmatrix` (<https://btnmatrix.free.componentdock.com>).
> Do not scaffold `apps/btnsnap`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnmatrix/spec.md`.

## Purpose

Recreation of ColorLib **Bootstrap Buttons 20** (`https://colorlib.com/wp/template/bootstrap-buttons-20/`, live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/`). A comprehensive interactive UI component showcase featuring default buttons, outline buttons, color variants (primary `#007bff`, secondary `#6c757d`, tertiary `#ff4893`, quaternary `#01d28e`), social buttons (Twitter, Facebook, LinkedIn, Pinterest, Dribbble) with various styles (solid, outline, rounded, with counter badges), and icon integrations. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors**:
  - Primary: `#007bff` (Blue)
  - Secondary: `#6c757d` (Gray)
  - Tertiary: `#ff4893` (Pink)
  - Quaternary: `#01d28e` (Green)
  - Social / Platform Colors:
    - Twitter: `#69b6f0`
    - Facebook: `#4f69a2`
    - Dribbble: `#ea6294`
    - LinkedIn: `#2884ba`
    - Pinterest: `#d03940`
  - Background: `#ffffff` (White container/body), `#f8f9fa` (Light section background)
  - Text: `#212529` (Dark body text), `#ffffff` (White button text)
- **Typography**:
  - Font Family: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
  - Heading Font Size: 32px (`heading-section`), Subheadings 16px (`small`)
- **Button Shapes & Radii**:
  - Border Radius: `4px` (default buttons), `40px` (`btn-round`)
  - Padding: `12px 16px`

## Requirements

### Requirement 1: Section Header and Style Showcase

- **As a** visitor,
- **I want** to see the section header and style variation buttons,
- **So that** I can preview default primary buttons, buttons with icons, and icon-only buttons in both solid and outline variants.

#### Scenario: Display style variation buttons

- **GIVEN** the BtnSnap page is loaded
- **WHEN** the user views the style showcase section
- **THEN** solid and outline primary buttons with text, icons, and icon-only variants are displayed correctly

### Requirement 2: Color Palette Showcase

- **As a** visitor,
- **I want** to see buttons in all four brand color variants,
- **So that** I can compare primary, secondary, tertiary, and quaternary styles.

#### Scenario: Display color variant buttons

- **GIVEN** the color palette section is visible
- **WHEN** the user views the solid and outline color rows
- **THEN** buttons styled with primary (`#007bff`), secondary (`#6c757d`), tertiary (`#ff4893`), and quaternary (`#01d28e`) colors are rendered with proper hover states

### Requirement 3: Social Media Buttons Showcase

- **As a** visitor,
- **I want** to see social media buttons with icons, rounded shapes, outlines, and counter badges,
- **So that** I can test Twitter, Facebook, LinkedIn, Pinterest, and Dribbble action buttons.

#### Scenario: Display social media buttons

- **GIVEN** the social buttons section is visible
- **WHEN** the user inspects the social button rows
- **THEN** Twitter, Facebook, LinkedIn, Pinterest, and Dribbble buttons are rendered in solid, outline, rounded (`btn-round`), icon-only, and stat counter badge formats (e.g., "Share - 8.2k", "Pin it - 1k")

### Requirement 4: Footer Attribution

- **As a** visitor,
- **I want** to see the Component Dock attribution link in the footer,
- **So that** I know where to find more templates.

#### Scenario: Footer link present

- **GIVEN** the footer is rendered
- **WHEN** the user views the bottom of the page
- **THEN** a link to `https://www.componentdock.com/` branded as "Component Dock" is visible

## Verification checklist

- [ ] `npm run verify:app -- btnsnap` green: typecheck → lint → vitest
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
- [ ] Section Header and Style Showcase — solid and outline primary buttons with text, icons, and icon-only variants are displayed correctly
- [ ] Color Palette Showcase — buttons styled with primary (`#007bff`), secondary (`#6c757d`), tertiary (`#ff4893`), and quaternary (`#01d28e`) colors are rendered with proper hover states
- [ ] Social Media Buttons Showcase — Twitter, Facebook, LinkedIn, Pinterest, and Dribbble buttons are rendered in solid, outline, rounded (`btn-round`), icon-only, and stat counter badge formats (e.g.…
