# Kaleido — Implementation Tasks

Source design: **Jellyfish Ui Kit** (`https://colorlib.com/wp/template/jellyfish-ui-kit/`) → recreation name **kaleido**. Shipped at https://kaleido.free.componentdock.com.

Scope: A clean, elegant UI kit showcase template. The original features an underwater jellyfish hero image with centered title, followed by component showcase sections (color palette, typography, buttons). The recreation uses an ocean-blue color scheme with an underwater aesthetic.

## Component breakdown

Render order as composed in `apps/kaleido/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Kaleido · Colors · Typography · Buttons

### 2. Hero
- The template SHALL display a full-viewport hero section with an ocean-blue gradient background, centered heading, subtitle, and decorative jellyfish SVG elements.
- Scenario — renders hero heading:
  - **WHEN** the user loads the page
  - **THEN** a heading "Kaleido UI Kit" is visible
- Scenario — renders hero subtitle:
  - **WHEN** the user loads the page
  - **THEN** a subtitle describing the UI kit is visible

### 3. ColorPalette
- The template SHALL display a 3x3 grid of color swatches showing the design token palette: Primary, Secondary, Success, Info, Warning, Danger, Indigo, Dark, Teal.
- Scenario — renders color swatches:
  - **WHEN** the user loads the page
  - **THEN** 9 color swatches are visible
  - **AND** each swatch has a label (Primary, Secondary, etc.)

### 4. Typography
- The template SHALL display heading levels h1 through h6 plus a body text paragraph to demonstrate the type scale.
- Scenario — renders heading hierarchy:
  - **WHEN** the user loads the page
  - **THEN** headings from h1 to h6 are visible

### 5. Buttons
- The template SHALL display button variants (primary, outline, ghost, danger) and sizes (sm, md, lg) using the shared Button component.
- Scenario — renders button variants:
  - **WHEN** the user loads the page
  - **THEN** primary, outline, ghost, and danger buttons are visible

### 6. Footer
- The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — links to Component Dock:
  - **WHEN** the user loads the page
  - **THEN** a link to componentdock.com is visible in the footer
  - **AND** the link text mentions "Component Dock"

### Cross-cutting requirements

- **Dark mode toggle** — The template SHALL support dark mode via a toggle in the navbar that adds a .dark class to the html element.
  - Scenario — toggles dark mode: **WHEN** the user clicks the dark mode toggle; **THEN** the page switches to dark theme
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/kaleido/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/kaleido/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/kaleido` ships on https://kaleido.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/kaleido/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/kaleido/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kaleido/public/CNAME` = `kaleido.free.componentdock.com`
  and the package `homepage` = `https://kaleido.free.componentdock.com`.
