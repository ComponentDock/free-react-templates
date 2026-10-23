# Btnstack — Implementation Tasks

Source design: **Bootstrap Buttons 03** (`https://colorlib.com/wp/template/bootstrap-buttons-03/`) → recreation name **btnstack**. Shipped at https://btnstack.free.componentdock.com.

Scope: BtnStack is a single-page button showcase template demonstrating solid and outline Bootstrap 4 button variants across multiple colors, sizes, shapes, and states, with an interactive playground for live preview.

## Component breakdown

Render order as composed in `apps/btnstack/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navigation bar with the brand name "BtnStack", navigation links (Home, Sizes, Solid, Outline, Playground), and a Component Dock link. The hero section SHALL show the heading "#03 — Solid & Outline Bootstrap 4 Buttons" with subtitle and quick-jump action buttons.
- Scenario — Navbar renders with brand and links:
  - **WHEN** the page loads
  - **THEN** the navbar displays "BtnStack" brand text, navigation links for Home, Sizes, Solid, Outline, and Playground, and a Component Dock link
- Scenario — Hero section renders heading and actions:
  - **WHEN** the page loads
  - **THEN** the hero displays the heading "#03 — Solid & Outline Bootstrap 4 Buttons" with a subtitle and quick-jump buttons

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Modern Bootstrap Button Library · BtnSpark — Modern Bootstrap Button Showcase · Explore Showcase · Try Playground

### 3. SolidButtons
- The template SHALL display a grid of solid color button variants including Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, and Blue Gray.
- Scenario — All solid color variants render:
  - **WHEN** the user views the solid buttons section
  - **THEN** all 18 solid color variant buttons are visible with their respective background colors

### 4. OutlineButtons
- The template SHALL display a grid of outline color variants with transparent backgrounds and colored borders that fill on hover.
- Scenario — All outline color variants render:
  - **WHEN** the user views the outline buttons section
  - **THEN** all outline variant buttons are visible with transparent backgrounds and colored borders

### 5. ShapeVariants
- The template SHALL showcase Large, Medium, and Small button sizes for both solid and outline styles with appropriate padding and text scaling.
- Scenario — Size variants display for solid buttons:
  - **WHEN** the user views the size variants section
  - **THEN** Large, Medium, and Small solid buttons are displayed with progressively smaller padding and text
- Scenario — Size variants display for outline buttons:
  - **WHEN** the user views the size variants section
  - **THEN** Large, Medium, and Small outline buttons are displayed with matching size progression

### 6. SizesAndStates
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sizes &amp; States · Small, medium, and large buttons, plus active, disabled, and loading states. · Sizes · Small · Medium · Large

### 7. IconButtons
- No dedicated spec block — hold this band to the design notes.
- Anchors: Icon Buttons · Buttons augmented with Lucide icons for leading and trailing positions.

### 8. Playground
- The template SHALL provide an interactive playground where users can select style (solid/outline), size, color variant, roundedness, and icon options, with a live preview and JSX snippet copy functionality.
- Scenario — Playground renders with controls:
  - **WHEN** the user views the playground section
  - **THEN** dropdown selectors for style, size, color, and roundedness are displayed along with a live preview button and a code snippet
- Scenario — Playground updates preview on selection change:
  - **WHEN** the user changes any playground option
  - **THEN** the preview button updates to reflect the new selection and the code snippet regenerates

### 9. Footer
- The template SHALL display a branded footer with a link to https://www.componentdock.com/ labeled "Component Dock".
- Scenario — Footer renders Component Dock link:
  - **WHEN** the user scrolls to the footer
  - **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is visible

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnstack/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnstack/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnstack` ships on https://btnstack.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnstack/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnstack/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnstack/public/CNAME` = `btnstack.free.componentdock.com`
  and the package `homepage` = `https://btnstack.free.componentdock.com`.
