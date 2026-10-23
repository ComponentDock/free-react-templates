# Carouselhub — Implementation Tasks

Source design: **Carousel 03** (`https://colorlib.com/wp/template/carousel-03/`) → recreation name **carouselhub**. Shipped at https://carouselhub.free.componentdock.com.

Scope: CarouselHub is a single-page carousel gallery template with a three-slide hero carousel, collection grids, a horizontal work slider and a newsletter capture, all in a sky-blue-on-slate palette with dark-mode support.

## Component breakdown

Render order as composed in `apps/carouselhub/src/App.tsx`:

### 1. Navbar
- The navbar SHALL expose the brand, the section links, a mobile menu toggle (`Open menu` / `Close menu`) and a dark-mode toggle whose name flips between `Switch to dark mode` and `Switch to light mode`.
- Scenario — Visitor toggles the mobile menu:
  - **WHEN** the visitor activates the menu toggle on a narrow viewport
  - **THEN** the menu opens, the toggle's accessible name becomes
- Scenario — Visitor toggles dark mode:
  - **WHEN** the visitor activates the theme toggle
  - **THEN** the `.dark` class flips on `document.documentElement` and the

### 2. Carousel
- The hero SHALL be a three-slide carousel with circular `Previous slide` and `Next slide` controls and one dot button per slide named `Go to slide 1` … `Go to slide 3`.
- Scenario — Visitor steps through the slides:
  - **WHEN** the visitor activates `Next slide`
  - **THEN** the active slide advances and wraps from the last slide to the
  - **AND** activating a `Go to slide N` dot jumps straight to that slide

### 3. FeaturedGrid
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured Collections · Explore our curated portfolio of creative works

### 4. SliderSection
- The page SHALL render a `Featured Collections` grid and an `Explore Our Work` slider section, each laid out as an h2 heading over a responsive card grid.
- Scenario — Visitor scrolls past the carousel:
  - **WHEN** the visitor scrolls the page
  - **THEN** the h2 `Featured Collections` and its card grid are visible
  - **AND** the h2 `Explore Our Work` renders its own card row below it

### 5. Footer
- The footer SHALL link `https://www.componentdock.com/` branded as Component Dock.
- Scenario — Visitor looks for more templates:
  - **WHEN** the visitor reaches the footer
  - **THEN** a `contentinfo` landmark contains a link to

### Cross-cutting requirements

- **Newsletter Capture** — The newsletter section SHALL provide an email field and a `Subscribe` button that intercepts submission and clears the field (front-end demo, no backend call).
  - Scenario — Visitor subscribes: **WHEN** the visitor submits an email; **THEN** the form's default submit is prevented and the input is reset; **AND** the visitor stays on the page
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/carouselhub/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/carouselhub/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/carouselhub`); [ ] Lint passes (`npm run lint`); [ ] Vitest coverage is 100% for `apps/carouselhub`; [ ] Build succeeds (`npm run build --workspace @free-react-templates/carouselhub`); [ ] Footer links to Component Dock; [ ] `public/CNAME` is `carouselhub.free.componentdock.com` and `homepage` matches; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/carouselhub` ships on https://carouselhub.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/carouselhub/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/carouselhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carouselhub/public/CNAME` = `carouselhub.free.componentdock.com`
  and the package `homepage` = `https://carouselhub.free.componentdock.com`.
