# Tickmark — Implementation Tasks

Source design: **Checkbox 01** (`https://colorlib.com/wp/template/checkbox-01/`) → recreation name **tickmark**. Shipped at https://tickmark.free.componentdock.com.

Scope: Tickmark is a single-page component showcase template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Checkbox 01" checkbox showcase design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/tickmark/src/App.tsx`:

### 1. CheckboxShowcase
- The system SHALL render 6 custom-styled checkboxes arranged in a 3-column grid.
- Scenario — Checkbox variants:
  - **GIVEN** the page is rendered
  - **WHEN** the checkbox showcase is displayed
  - **THEN** there SHALL be 6 checkboxes with labels: "Primary", "Success", "Danger", "Warning", "Info", and "Disabled"
  - **AND** each checkbox SHALL have a distinct color scheme (Primary #0075f6, Success #28a745, Danger #dc3545, Warning #ffc107, Info #17a2b8, Disabled gray)
  - **AND** checkboxes SHALL be arranged in a responsive 3-column grid
- Scenario — Checkbox interaction:
  - **GIVEN** the page is rendered
  - **WHEN** the user clicks a non-disabled checkbox
  - **THEN** the checkbox SHALL toggle between checked and unchecked states
  - **AND** a checkmark indicator SHALL appear when checked
- Scenario — Disabled checkbox:
  - **GIVEN** the page is rendered
  - **WHEN** the user clicks the disabled checkbox
  - **THEN** the checkbox SHALL NOT toggle state

### 2. Footer
- The system SHALL render a minimal footer with the site name and a link to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the site name "Tickmark"
  - **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Cross-cutting requirements

- **Page heading** — The system SHALL render a centered page heading "Checkbox #01".
  - Scenario — Heading content: **GIVEN** the Tickmark page is rendered; **WHEN** the page loads; **THEN** the heading "Checkbox #01" SHALL be displayed as the main heading
- **Page background** — The system SHALL render the page on a #fafafa background.
  - Scenario — Background color: **GIVEN** the page is rendered; **WHEN** the page is displayed; **THEN** the page background SHALL be #fafafa
- **Page composition** — The system SHALL compose the heading, checkbox showcase, and footer in a single page with a main landmark and a document title.
  - Scenario — Page structure: **GIVEN** the Tickmark page is rendered; **WHEN** the page loads; **THEN** the document title SHALL be "Tickmark — Checkbox Showcase Template"; **AND** the page SHALL contain a main landmark; **AND** the main landmark SHALL contain the checkbox showcase heading
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tickmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tickmark/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tickmark` ships on https://tickmark.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tickmark/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tickmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tickmark/public/CNAME` = `tickmark.free.componentdock.com`
  and the package `homepage` = `https://tickmark.free.componentdock.com`.
