# Template: BtnVortex (Bootstrap Buttons)

Recreation of ColorLib "Bootstrap Buttons 14" (`https://colorlib.com/wp/template/bootstrap-buttons-14/`). Note: preview URL was unreachable; falling back to screenshot and professional button showcase patterns with modern vortex/gradient styling.

## Purpose

BtnVortex is a modern button showcase template featuring vortex gradient buttons, neon/glow buttons, 3D depth buttons, and an interactive playground customizer. It demonstrates Bootstrap-style button variants recreated with Tailwind CSS and React.

## Requirements

### Requirement: Navbar

The template SHALL display a navigation bar with brand title, section links, a theme toggle (light/dark), and a call-to-action button.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** the navbar is visible with brand name, navigation links to each section, a theme toggle button, and a CTA button

#### Scenario: Theme toggle switches mode

- **WHEN** the user clicks the theme toggle
- **THEN** the page switches between light and dark mode

### Requirement: Hero Section

The template SHALL display a hero section with a catchy header, subtitle, and action buttons introducing the button collection.

#### Scenario: Hero displays heading and buttons

- **WHEN** the page loads
- **THEN** the hero section shows the main heading, subtitle text, and at least one action button

### Requirement: Vortex Gradient Buttons

The template SHALL display a section of gradient-styled buttons with smooth hover transitions and glow effects.

#### Scenario: Gradient buttons render

- **WHEN** the vortex gradient section is visible
- **THEN** at least 8 gradient buttons are displayed with distinct color variants

### Requirement: Neon and Glow Buttons

The template SHALL display neon-bordered and glowing button styles.

#### Scenario: Neon buttons render

- **WHEN** the neon and glow section is visible
- **THEN** neon-bordered buttons with glow effects are displayed

### Requirement: 3D Depth Buttons

The template SHALL display buttons with realistic 3D elevation and active push states.

#### Scenario: 3D buttons render

- **WHEN** the 3D depth section is visible
- **THEN** buttons with shadow-based 3D elevation are displayed

### Requirement: Interactive Playground

The template SHALL provide a live customizer where users can tweak button text, variant, size, and rounded corners, and copy the generated React/Tailwind code.

#### Scenario: Playground renders controls

- **WHEN** the playground section is visible
- **THEN** input controls for text, variant selector, size selector, and rounded corner toggle are present

#### Scenario: Playground generates code

- **WHEN** the user modifies playground controls
- **THEN** the preview button updates and the code snippet reflects the current settings

### Requirement: Footer

The template SHALL display a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ with visible "Component Dock" text

### Requirement: 100% Test Coverage

All source files in apps/btnvortex/src/ SHALL have 100% line, function, branch, and statement coverage.

#### Scenario: Coverage thresholds met

- **WHEN** tests run with vitest coverage
- **THEN** all coverage metrics are at 100%

### Requirement: Build and Typecheck

The template SHALL pass TypeScript type checking and Vite production build without errors.

#### Scenario: Typecheck passes

- **WHEN** `tsc --noEmit` runs in the btnvortex workspace
- **THEN** no type errors are reported

#### Scenario: Build succeeds

- **WHEN** `vite build` runs in the btnvortex workspace
- **THEN** the production bundle is generated in dist/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnvortex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnvortex/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
