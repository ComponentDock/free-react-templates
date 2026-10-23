# Btnvibe — Implementation Tasks

Source design: **Bootstrap Buttons 06** (`https://colorlib.com/wp/template/bootstrap-buttons-06/`) → recreation name **btnvibe**. Shipped at https://btnvibe.free.componentdock.com.

Scope: Btnvibe is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 06** design (https://colorlib.com/wp/template/bootstrap-buttons-06/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/btnvibe/src/App.tsx`:

### 1. Navbar
- #### Scenario: Navigation Bar - Navbar with brand logo ("BtnVibe"), navigation links (Showcase, Outline, Shapes, Sizes, Icons, Playground), and dark mode toggle.
- Scenario — Navigation Bar:
  - Navbar with brand logo ("BtnVibe"), navigation links (Showcase, Outline, Shapes, Sizes, Icons, Playground), and dark mode toggle.

### 2. Hero
- #### Scenario: Hero Section - Engaging header presenting BtnVibe as a modern bootstrap button showcase with quick action buttons.
- Scenario — Hero Section:
  - Engaging header presenting BtnVibe as a modern bootstrap button showcase with quick action buttons.

### 3. SolidButtons
- #### Scenario: Solid Buttons Section - Showcase of solid-colored button variants across standard intents.
- Scenario — Solid Buttons Section:
  - Showcase of solid-colored button variants across standard intents.

### 4. OutlineButtons
- #### Scenario: Outline & Ghost Buttons Section - Showcase of transparent/outline button variants.
- Scenario — Outline & Ghost Buttons Section:
  - Showcase of transparent/outline button variants.

### 5. ShapeVariants
- #### Scenario: Shape & Size Variants - Rounded, pill, square, small, medium, large, and disabled state variations.
- Scenario — Shape & Size Variants:
  - Rounded, pill, square, small, medium, large, and disabled state variations.

### 6. SizesAndStates
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sizes &amp; States · Small, medium, and large buttons, plus active, disabled, and loading states. · Sizes · Small · Medium · Large

### 7. IconButtons
- No dedicated spec block — hold this band to the design notes.
- Anchors: Icon Buttons · Buttons augmented with Lucide icons for leading and trailing positions.

### 8. Playground
- #### Scenario: Interactive Playground - Live playground where users can customize button properties and copy snippet code.
- Scenario — Interactive Playground:
  - Live playground where users can customize button properties and copy snippet code.

### 9. Footer
- #### Scenario: Component Dock Footer - Footer linking to https://www.componentdock.com/ ("Made with Component Dock").
- Scenario — Component Dock Footer:
  - Footer linking to https://www.componentdock.com/ ("Made with Component Dock").

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnvibe/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnvibe/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnvibe` ships on https://btnvibe.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnvibe/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnvibe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnvibe/public/CNAME` = `btnvibe.free.componentdock.com`
  and the package `homepage` = `https://btnvibe.free.componentdock.com`.
