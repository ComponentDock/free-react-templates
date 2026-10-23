# Btnbolt — Implementation Tasks

Source design: **Bootstrap Buttons 09** (`https://colorlib.com/wp/template/bootstrap-buttons-09/`) → recreation name **btnbolt**. Shipped at https://btnbolt.free.componentdock.com.

Scope: Recreate ColorLib Bootstrap Buttons V09 as a React + Tailwind template named BtnBolt. This template showcases rounded Bootstrap 4 buttons in multiple sizes and the full 18-color Bootstrap palette, with a full-width block button variant.

## Component breakdown

Render order as composed in `apps/btnbolt/src/App.tsx`:

### 1. SizeButtons
- The page SHALL display three button size variants (Large, Medium, Small) each with a text label above the button.
- Scenario — Size labels and buttons visible:
  - **WHEN** the page loads
  - **THEN** the labels "Large", "Medium", and "Small" are visible
  - **AND** three buttons labeled "Button" are rendered

### 2. ColorButtons
- The page SHALL display all 18 Bootstrap 4 color variants as individual buttons.
- Scenario — All color buttons visible:
  - **WHEN** the page loads
  - **THEN** 18 buttons are rendered
  - **AND** each button displays its color name (Primary, Secondary, Success, etc.)

### 3. BlockButton
- The page SHALL display a full-width primary button with a "Full width button" label.
- Scenario — Block button visible:
  - **WHEN** the page loads
  - **THEN** the text "Full width button" is visible
  - **AND** a full-width "Button" element is rendered

### 4. Footer
- The page footer SHALL contain a link to https://www.componentdock.com/ that opens in a new tab.
- Scenario — Footer link present:
  - **WHEN** the page loads
  - **THEN** a link with href "https://www.componentdock.com/" exists in the footer
  - **AND** the link has target="_blank" and rel="noopener noreferrer"

### Cross-cutting requirements

- **Render page title** — The page SHALL display the heading "#09 — Bootstrap 4 Buttons".
  - Scenario — Heading visible on load: **WHEN** the page loads; **THEN** the heading text "#09 — Bootstrap 4 Buttons" is visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnbolt/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnbolt/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnbolt` ships on https://btnbolt.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnbolt/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnbolt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnbolt/public/CNAME` = `btnbolt.free.componentdock.com`
  and the package `homepage` = `https://btnbolt.free.componentdock.com`.
