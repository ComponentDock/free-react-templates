# Btnquint — Implementation Tasks

Source design: **Bootstrap Buttons 05** (`https://colorlib.com/wp/template/bootstrap-buttons-05/`) → recreation name **btnquint**. Shipped at https://btnquint.free.componentdock.com.

Scope: A modern React button showcase and playground built with React 19, TypeScript, and Tailwind CSS 4. Recreation of ColorLib **Bootstrap Buttons 05** as **BtnQuint**.

## Component breakdown

Render order as composed in `apps/btnquint/src/App.tsx`:

### 1. Navbar
- Users SHALL see a top navigation bar with the brand name and navigation links.
- Scenario — Display navbar:
  - **WHEN** the user loads BtnQuint
  - **THEN** they see a sticky navbar with brand name and navigation links

### 2. Hero
- Users SHALL see a hero section introducing BtnQuint with a heading and subtitle.
- Scenario — Display hero:
  - **WHEN** the user loads BtnQuint
  - **THEN** they see a hero with the main heading "#05 — Bootstrap Buttons" and subtitle text

### 3. SolidButtons
- Users SHALL see a section displaying standard solid buttons across all semantic intents (primary, secondary, success, danger, warning, info, light, dark).
- Scenario — Display solid buttons:
  - **WHEN** the user scrolls to the solid variants section
  - **THEN** they see eight solid-colored buttons with semantic color coding

### 4. OutlineButtons
- Users SHALL see a section showcasing transparent buttons with colored borders and hover-fill effects.
- Scenario — Display outline buttons:
  - **WHEN** the user scrolls to the outline variants section
  - **THEN** they see outline buttons with colored borders matching semantic intents

### 5. ShapeVariants
- Users SHALL see a section demonstrating pill (rounded-full) and square (rounded-none) button radii.
- Scenario — Display shape variants:
  - **WHEN** the user scrolls to the shape variants section
  - **THEN** they see pill-shaped and square button variants grouped under sub-headings

### 6. SizesAndStates
- Users SHALL see a section showing buttons in three sizes (large, default, small) and disabled/active states.
- Scenario — Display size variants:
  - **WHEN** the user scrolls to the sizes and states section
  - **THEN** they see large, default, and small buttons alongside disabled and active state buttons

### 7. IconButtons
- Users SHALL see a section showcasing buttons with leading or trailing icons.
- Scenario — Display icon buttons:
  - **WHEN** the user scrolls to the icon buttons section
  - **THEN** they see buttons with icon + label combinations

### 8. Playground
- Users SHALL see an interactive playground section with a preview button that demonstrates the current configuration.
- Scenario — Display playground:
  - **WHEN** the user scrolls to the playground section
  - **THEN** they see a heading and a preview button demonstrating the current button style

### 9. Footer
- Users SHALL see a footer with a link to https://www.componentdock.com/.
- Scenario — Display footer:
  - **WHEN** the user scrolls to the bottom of the page
  - **THEN** they see a footer with a link to Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnquint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnquint/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnquint` ships on https://btnquint.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnquint/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnquint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnquint/public/CNAME` = `btnquint.free.componentdock.com`
  and the package `homepage` = `https://btnquint.free.componentdock.com`.
