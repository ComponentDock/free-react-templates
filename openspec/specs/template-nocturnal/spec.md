# Template: Nocturnal (UI Components / Dark Buttons Showcase)

## Purpose

- Recreation of ColorLib **Bootstrap Buttons V12** (`https://colorlib.com/wp/template/bootstrap-buttons-12/`).
- Preview URL: `https://preview.colorlib.com/theme/bootstrap-buttons-12/` (Note: Live preview URL is unreachable; designed from the official ColorLib screenshot and description showing a comprehensive collection of styled dark buttons, neon glows, gradients, icons, states, and interactive button groups).
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript, Lucide Icons.

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

## Requirements & Gherkin Scenarios

### Requirement 1: Header / Navigation & Hero Showcase Intro

- The template must feature a clean, sticky dark header with branding and navigation links.
- A prominent Hero section introducing the dark button collection with title, subtitle, and quick stats/badges.

#### Scenario: User views the hero showcase

- **Given** the user opens the Nocturnal template
- **When** the page loads
- **Then** the header and hero section display the title "Nocturnal Buttons", subtitle, and quick navigation links on a dark background.

### Requirement 2: Solid & Filled Dark Button Variants

- The template must display a comprehensive showcase of solid buttons across dark color states (Primary Cyan, Success, Danger, Warning, Dark).

#### Scenario: User explores solid dark buttons

- **Given** the user is viewing the solid buttons section
- **When** they inspect the color options
- **Then** all standard color variants are rendered with proper hover, focus, and active glow states.

### Requirement 3: Outline & Neon Glow Button Variants

- The template must provide outline and neon glow button styles with distinct borders and luminous hover transitions.

#### Scenario: User interacts with outline and glow buttons

- **Given** the user scrolls to the outline and glow buttons section
- **When** they hover over a glow button
- **Then** the luminous shadow intensity increases smoothly while maintaining high contrast.

### Requirement 4: Gradient & Shadow Button Effects

- The template must showcase modern dark buttons with gradient backgrounds and drop shadows.

#### Scenario: User views gradient and shadow buttons

- **Given** the user views the gradient and shadow section
- **When** the components render
- **Then** dark gradient fills and layered glow effects are clearly visible.

### Requirement 5: Icon Buttons & Button Groups

- The template must include buttons with leading/trailing icons (using Lucide icons) and segmented button groups.

#### Scenario: User tests icon and grouped buttons

- **Given** the user navigates to the icon and group section
- **When** they click within a button group
- **Then** the connected buttons highlight interactively as a cohesive group.

### Requirement 6: Footer with Component Dock Attribution

- The footer must display copyright, quick links, and a mandatory link to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: User checks the footer

- **Given** the user scrolls to the bottom of the page
- **When** the footer renders
- **Then** it contains the Component Dock link and standard copyright notice.

---

## Verification Checklist

- [ ] TypeScript strict compilation passes (`npm run typecheck`).
- [ ] Linting passes without errors (`npm run lint`).
- [ ] Vitest test suite runs with 100% coverage (`npm run test:coverage`).
- [ ] Build succeeds (`npm run build`).
- [ ] Component Dock footer attribution is present and links correctly.
