# Template: Nocturnal (UI Components / Dark Buttons Showcase)
<!-- prep-status: shipped-as=btnridge -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-12` design this prep describes already
> ships as `apps/btnridge` (<https://btnridge.free.componentdock.com>).
> Do not scaffold `apps/nocturnal`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnridge/spec.md`.

## Purpose

- Recreation of ColorLib **Bootstrap Buttons V12** (`https://colorlib.com/wp/template/bootstrap-buttons-12/`).
- Preview URL: `https://preview.colorlib.com/theme/bootstrap-buttons-12/` (Note: Live preview URL is unreachable; designed from the official ColorLib screenshot and description showing a comprehensive collection of styled dark buttons, neon glows, gradients, icons, states, and interactive button groups) — **re-probed 2026-10-23: the demo serves** (measured record below).
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript, Lucide Icons.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/` — HTTP 200, 46,741 B, title `Button 02`.
>
> Sheet: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/css/style.css?v=ed38b1d6` (40,302 B).
> Colours that sheet actually paints: `#494ca2` ×15, `#94aa2a` ×13, `#f0134d` ×13.
> Faces it actually declares: `Poppins`, `Ionicons`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design Tokens (Inferred from Screenshot / Dark UI Showcase Style)

- **Brand Colors**:
  - Background: Deep Dark Slate / Midnight (`bg-slate-950`, `bg-slate-900`)
  - Primary / Action: Vibrant Cyan / Neon Blue (`bg-cyan-600 hover:bg-cyan-500`, text white)
  - Success: Neon Emerald (`bg-emerald-500 hover:bg-emerald-400`)
  - Warning: Amber / Neon Gold (`bg-amber-500 hover:bg-amber-400`)
  - Danger: Neon Rose (`bg-rose-600 hover:bg-rose-500`)
  - Neutral / Dark Cards: Slate gray palette for containers and borders (`bg-slate-900`, `border-slate-800`, `text-slate-100`)
- **Typography**: Clean sans-serif font stack (Inter / system UI, weights 400, 500, 600, 700).
- **Button Radii & Shapes**: Rounded-lg (`border-radius: 0.5rem`), pill buttons (`rounded-full`), sharp buttons (`rounded-none`), glow effects (`shadow-[0_0_15px_rgba(6,182,212,0.5)]`), outline variants, and dark gradient fills.
- **Section Backgrounds**: Deep dark surfaces with contrasting card containers (`bg-slate-900/50` with glassmorphic borders).

---

## Requirements

### Requirement 1: Header / Navigation & Hero Showcase Intro

- The template must feature a clean, sticky dark header with branding and navigation links.
- A prominent Hero section introducing the dark button collection with title, subtitle, and quick stats/badges.

#### Scenario: User views the hero showcase

- **GIVEN** the user opens the Nocturnal template
- **WHEN** the page loads
- **THEN** the header and hero section display the title "Nocturnal Buttons", subtitle, and quick navigation links on a dark background

### Requirement 2: Solid & Filled Dark Button Variants

- The template must display a comprehensive showcase of solid buttons across dark color states (Primary Cyan, Success, Danger, Warning, Dark).

#### Scenario: User explores solid dark buttons

- **GIVEN** the user is viewing the solid buttons section
- **WHEN** they inspect the color options
- **THEN** all standard color variants are rendered with proper hover, focus, and active glow states

### Requirement 3: Outline & Neon Glow Button Variants

- The template must provide outline and neon glow button styles with distinct borders and luminous hover transitions.

#### Scenario: User interacts with outline and glow buttons

- **GIVEN** the user scrolls to the outline and glow buttons section
- **WHEN** they hover over a glow button
- **THEN** the luminous shadow intensity increases smoothly while maintaining high contrast

### Requirement 4: Gradient & Shadow Button Effects

- The template must showcase modern dark buttons with gradient backgrounds and drop shadows.

#### Scenario: User views gradient and shadow buttons

- **GIVEN** the user views the gradient and shadow section
- **WHEN** the components render
- **THEN** dark gradient fills and layered glow effects are clearly visible

### Requirement 5: Icon Buttons & Button Groups

- The template must include buttons with leading/trailing icons (using Lucide icons) and segmented button groups.

#### Scenario: User tests icon and grouped buttons

- **GIVEN** the user navigates to the icon and group section
- **WHEN** they click within a button group
- **THEN** the connected buttons highlight interactively as a cohesive group

### Requirement 6: Footer with Component Dock Attribution

- The footer must display copyright, quick links, and a mandatory link to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: User checks the footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer renders
- **THEN** it contains the Component Dock link and standard copyright notice

---

## Verification checklist

- [ ] TypeScript strict compilation passes (`npm run typecheck`).
- [ ] Linting passes without errors (`npm run lint`).
- [ ] Vitest test suite runs with 100% coverage (`npm run test:coverage`).
- [ ] Build succeeds (`npm run build`).
- [ ] Component Dock footer attribution is present and links correctly.
- [ ] Header / Navigation & Hero Showcase Intro — the header and hero section display the title "Nocturnal Buttons", subtitle, and quick navigation links on a dark background
- [ ] Solid & Filled Dark Button Variants — all standard color variants are rendered with proper hover, focus, and active glow states
- [ ] Outline & Neon Glow Button Variants — the luminous shadow intensity increases smoothly while maintaining high contrast
- [ ] Gradient & Shadow Button Effects — dark gradient fills and layered glow effects are clearly visible
- [ ] Icon Buttons & Button Groups — the connected buttons highlight interactively as a cohesive group
