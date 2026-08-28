# Template: ButtonCraft (Dark Bootstrap Buttons Collection)

## Purpose

ButtonCraft is a single-page showcase of versatile dark-themed buttons and interactive UI elements in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Bootstrap Buttons 12" free template (source: https://colorlib.com/wp/template/bootstrap-buttons-12/), built under a DIFFERENT name (**ButtonCraft**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a comprehensive showcase of custom Bootstrap-based buttons featuring dark styling, diverse border radii (pill, rounded, square), outline variants, gradient fills, sizes (sm, md, lg, block), and social media buttons with brand icons (Facebook, Twitter, Google+, LinkedIn, GitHub, etc.).

**WHAT MAKES BUTTONCRAFT DISTINCT (signature behaviors):**

1. **Dark theme layout with vibrant interactive buttons**: A polished dark canvas (`#121212` / `#1a1a1a`) showcasing categorized button groups: Standard/Solid, Pill/Rounded, Outline, Gradients, Sizes, and Social Media brand buttons with hover scale/shadow transitions.
2. **Interactive Playground / Copy-to-Clipboard**: Clicking any button in the showcase copies its Tailwind/React snippet or triggers a subtle ripple/active state feedback, making it a functional UI component catalog as well as a template showcase.
3. **Responsive Grid & Filtering**: Category tabs or filter buttons (All, Solid, Outline, Social, Sizes) to explore button variants cleanly across desktop and mobile views.

## Requirements

### Requirement: Layout & Theme

The system SHALL render a responsive dark-themed button showcase matching the reference aesthetic.

#### Scenario: Dark canvas and typography

- **GIVEN** the ButtonCraft app is loaded
- **THEN** the background SHALL be a dark neutral shade (`#121212` or similar deep slate)
- **AND** the typography SHALL use a clean modern sans-serif font (Inter / Roboto) with high-contrast text

### Requirement: Button Categories & Variants

The system SHALL display categorized sections of buttons covering all required styles.

#### Scenario: Categorized button groups

- **GIVEN** the ButtonCraft app is rendered
- **THEN** it SHALL display sections for Standard Solid buttons, Pill & Rounded buttons, Outline buttons, Gradient buttons, and Social Media buttons with brand icons (using `lucide-react`)
- **AND** each button SHALL exhibit responsive hover and active states (scale up, shadow elevation, background shift)

### Requirement: Interactive Clipboard & Feedback

The system SHALL provide interactive feedback when interacting with catalog items.

#### Scenario: Click-to-copy snippet

- **GIVEN** a user clicks on any button in the showcase
- **THEN** a subtle toast or tooltip SHALL appear indicating "Copied Tailwind snippet!" or similar feedback

### Requirement: Accessibility & Footer

The system SHALL include accessible semantics and the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the ButtonCraft app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/ branded as "Component Dock"
- **AND** all interactive buttons SHALL have appropriate `aria-label` or accessible names

## Verification checklist

- [ ] `npm run verify:app -- button-craft` green: typecheck → lint → vitest (100% coverage) → build (per-app gate).
- [ ] Visual diff vs reference aesthetic: dark theme showcase, categorized button styles (solid, outline, pill, gradient, social), smooth hover effects.
- [ ] Behavior check: category filtering works, click-to-copy or interactive feedback works, responsive grid layout.
- [ ] No ColorLib references in any app file; footer links https://www.componentdock.com/.
- [ ] Icon exports probed with `node -e "console.log(typeof require('lucide-react').X)"` before use.

## Design tokens

| Token      | Value                                   | Use                               |
| ---------- | --------------------------------------- | --------------------------------- |
| Background | `#121212` / `#1a1a1a`                   | Main dark canvas                  |
| Primary    | `#3b82f6` (Blue) / `#6366f1` (Indigo)   | Primary actions & badges          |
| Accent     | `#10b981` (Emerald) / `#f59e0b` (Amber) | Success / highlights              |
| Surface    | `#242424`                               | Card containers & grouping panels |
| Text       | `#f3f4f6` (Light gray)                  | Primary headings & copy           |
| Font       | Inter / system sans-serif               | Google Fonts `<link>`             |
