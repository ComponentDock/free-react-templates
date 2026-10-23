# Btnvortex — Implementation Tasks

Source design: **Bootstrap Buttons 14** (`https://colorlib.com/wp/template/bootstrap-buttons-14/`) → recreation name **btnvortex**. Shipped at https://btnvortex.free.componentdock.com.

Scope: BtnVortex is a modern button showcase template featuring vortex gradient buttons, neon/glow buttons, 3D depth buttons, and an interactive playground customizer. It demonstrates Bootstrap-style button variants recreated with Tailwind CSS and React.

## Component breakdown

Render order as composed in `apps/btnvortex/src/App.tsx`:

### 1. Navbar
- The template SHALL display a navigation bar with brand title, section links, a theme toggle (light/dark), and a call-to-action button.
- Scenario — Navbar renders all elements:
  - **WHEN** the page loads
  - **THEN** the navbar is visible with brand name, navigation links to each section, a theme toggle button, and a CTA button
- Scenario — Theme toggle switches mode:
  - **WHEN** the user clicks the theme toggle
  - **THEN** the page switches between light and dark mode

### 2. Hero
- The template SHALL display a hero section with a catchy header, subtitle, and action buttons introducing the button collection.
- Scenario — Hero displays heading and buttons:
  - **WHEN** the page loads
  - **THEN** the hero section shows the main heading, subtitle text, and at least one action button

### 3. SolidButtons
- The template SHALL display a section of gradient-styled buttons with smooth hover transitions and glow effects.
- Scenario — Gradient buttons render:
  - **WHEN** the vortex gradient section is visible
  - **THEN** at least 8 gradient buttons are displayed with distinct color variants

### 4. OutlineButtons
- The template SHALL display neon-bordered and glowing button styles.
- Scenario — Neon buttons render:
  - **WHEN** the neon and glow section is visible
  - **THEN** neon-bordered buttons with glow effects are displayed

### 5. ShapeVariants
- No dedicated spec block — hold this band to the design notes.
- Anchors: Pill &amp; Square Radii · Buttons with rounded-full pill shape and sharp-edged square shape. · Pill Buttons · Square Buttons

### 6. SizesAndStates
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sizes &amp; States · Small, medium, and large buttons, plus active, disabled, and loading states. · Sizes · Small · Medium · Large

### 7. IconButtons
- The template SHALL display buttons with realistic 3D elevation and active push states.
- Scenario — 3D buttons render:
  - **WHEN** the 3D depth section is visible
  - **THEN** buttons with shadow-based 3D elevation are displayed

### 8. Playground
- The template SHALL provide a live customizer where users can tweak button text, variant, size, and rounded corners, and copy the generated React/Tailwind code.
- Scenario — Playground renders controls:
  - **WHEN** the playground section is visible
  - **THEN** input controls for text, variant selector, size selector, and rounded corner toggle are present
- Scenario — Playground generates code:
  - **WHEN** the user modifies playground controls
  - **THEN** the preview button updates and the code snippet reflects the current settings

### 9. Footer
- The template SHALL display a footer linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/ with visible "Component Dock" text

### Cross-cutting requirements

- **100% Test Coverage** — All source files in apps/btnvortex/src/ SHALL have 100% line, function, branch, and statement coverage.
  - Scenario — Coverage thresholds met: **WHEN** tests run with vitest coverage; **THEN** all coverage metrics are at 100%
- **Build and Typecheck** — The template SHALL pass TypeScript type checking and Vite production build without errors.
  - Scenario — Typecheck passes: **WHEN** `tsc --noEmit` runs in the btnvortex workspace; **THEN** no type errors are reported
  - Scenario — Build succeeds: **WHEN** `vite build` runs in the btnvortex workspace; **THEN** the production bundle is generated in dist/
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnvortex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnvortex/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnvortex` ships on https://btnvortex.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnvortex/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnvortex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnvortex/public/CNAME` = `btnvortex.free.componentdock.com`
  and the package `homepage` = `https://btnvortex.free.componentdock.com`.
