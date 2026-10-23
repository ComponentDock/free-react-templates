# Btnclick — Implementation Tasks

Source design: **Bootstrap Buttons 10** (`https://colorlib.com/wp/template/bootstrap-buttons-10/`) → recreation name **btnclick**. Shipped at https://btnclick.free.componentdock.com.

Scope: Btnclick is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 10** design (https://colorlib.com/wp/template/bootstrap-buttons-10/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-10/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/btnclick/src/App.tsx`:

### 1. Header
- No dedicated spec block — hold this band to the design notes.

### 2. SizeScale
- #### Scenario: Size Variants & Layout - The page displays size variant buttons (Large, Medium, Small) matching the Bootstrap 4 buttons style #10. - Heading `#10 — Bootstrap 4 Buttons` is prominently displayed.
- Scenario — Size Variants & Layout:
  - The page displays size variant buttons (Large, Medium, Small) matching the Bootstrap 4 buttons style #10.
  - Heading `#10 — Bootstrap 4 Buttons` is prominently displayed.

### 3. ColorPalette
- #### Scenario: Color Palette Buttons - Displays a comprehensive set of button color variants (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray).
- Scenario — Color Palette Buttons:
  - Displays a comprehensive set of button color variants (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray).

### 4. FullWidth
- No dedicated spec block — hold this band to the design notes.
- Anchors: Full width button

### 5. Footer
- #### Scenario: Block Button & Footer - Includes a full-width block button. - Includes a professional footer linking `https://www.componentdock.com/` ("Component Dock").
- Scenario — Block Button & Footer:
  - Includes a full-width block button.
  - Includes a professional footer linking `https://www.componentdock.com/` ("Component Dock").

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnclick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnclick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnclick` ships on https://btnclick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnclick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnclick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnclick/public/CNAME` = `btnclick.free.componentdock.com`
  and the package `homepage` = `https://btnclick.free.componentdock.com`.
