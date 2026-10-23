# Template: Bootstrap Buttons Fifteen (UI Components / Buttons Showcase)

## Purpose

- Recreation of ColorLib **Bootstrap Buttons 15** (`https://colorlib.com/wp/template/bootstrap-buttons-15/`).
- Preview URL: `https://preview.colorlib.com/theme/bootstrap-buttons-15/` (Note: Live preview URL is unreachable; designed from the official ColorLib screenshot showing a comprehensive collection of fancy styled buttons, glowing effects, gradients, and interactive button states) — **re-probed 2026-10-23: the demo serves** (measured record below).
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript, Lucide Icons.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bb/bootstrap-buttons-15/` — HTTP 200, 57,931 B, title `Button 05`.
>
> Sheet: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-15/css/style.css?v=f4831e39` (31,391 B).
> Colours that sheet actually paints: `#4f81c7` ×12, `#40bfc1` ×12, `#48da79` ×12.
> Faces it actually declares: `Poppins`, `Ionicons`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design Tokens (Inferred from Screenshot / Standard Bootstrap UI Showcase Style)

- **Brand Colors**:
  - Primary / Action: Indigo / Purple gradient (`bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700`, text white)
  - Success: Emerald (`bg-emerald-600 hover:bg-emerald-700`)
  - Warning: Amber (`bg-amber-500 hover:bg-amber-600`)
  - Danger: Rose (`bg-rose-600 hover:bg-rose-700`)
  - Neutral / Slate: Slate gray palette for borders, backgrounds, and text (`bg-slate-50`, `text-slate-900`)
- **Typography**: Clean sans-serif font stack (Inter / system UI, weights 400, 500, 600, 700).
- **Button Radii & Shapes**: Rounded-lg (`border-radius: 0.5rem`), pill buttons (`rounded-full`), sharp buttons (`rounded-none`), shadow effects (`shadow-sm`, `shadow-md`, `shadow-lg`), outline variants, and glowing hover effects.
- **Section Backgrounds**: Clean white and light gray alternating rows (`bg-white` and `bg-slate-50`), structured container cards with clean padding.

---

## Requirements

### Requirement 1: Header / Navigation & Hero Showcase Intro

- The template must feature a clean, sticky header with title/branding and navigation links.
- A prominent Hero section introducing the button collection with title, subtitle, and quick stats/badges.

#### Scenario: User views the hero showcase

- **GIVEN** the user opens the Bootstrap Buttons Fifteen template
- **WHEN** the page loads
- **THEN** the header and hero section display the title "Bootstrap Buttons Fifteen", subtitle, and quick navigation links

### Requirement 2: Solid & Filled Button Variants

- The template must display a comprehensive showcase of solid buttons across standard color states (Primary, Secondary, Success, Danger, Warning, Info, Dark).

#### Scenario: User explores solid buttons

- **GIVEN** the user is viewing the solid buttons section
- **WHEN** they inspect the color options
- **THEN** all standard color variants are rendered with proper hover, focus, and active states

### Requirement 3: Outline & Ghost Button Variants

- The template must provide outline and ghost button styles with distinct borders and subtle hover background transitions.

#### Scenario: User interacts with outline buttons

- **GIVEN** the user scrolls to the outline buttons section
- **WHEN** they hover over an outline button
- **THEN** the background fills smoothly while maintaining clear border contrast

### Requirement 4: Gradient & Glowing Button Effects

- The template must showcase modern buttons with gradient backgrounds, drop shadows, and glowing hover effects.

#### Scenario: User views gradient and glowing buttons

- **GIVEN** the user views the gradient and glowing section
- **WHEN** the components render
- **THEN** gradient fills and glowing shadow effects are clearly visible

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
- [ ] Header / Navigation & Hero Showcase Intro — the header and hero section display the title "Bootstrap Buttons Fifteen", subtitle, and quick navigation links
- [ ] Solid & Filled Button Variants — all standard color variants are rendered with proper hover, focus, and active states
- [ ] Outline & Ghost Button Variants — the background fills smoothly while maintaining clear border contrast
- [ ] Gradient & Glowing Button Effects — gradient fills and glowing shadow effects are clearly visible
- [ ] Icon Buttons & Button Groups — the connected buttons highlight interactively as a cohesive group
