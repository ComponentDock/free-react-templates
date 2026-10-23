# Dropnest — Implementation Tasks

Source design: **Dropdown 19** (`https://colorlib.com/wp/template/dropdown-19/`) → recreation name **dropnest**. Shipped at https://dropnest.free.componentdock.com.

Scope: A dropdown menu designed for online education platforms. The dropdown displays a trigger button labeled "Courses" and, when opened, reveals three category columns: Design, Development, and Marketing. Each category has a heading and a list of course links.

## Component breakdown

Render order as composed in `apps/dropnest/src/App.tsx`:

### 1. CoursesDropdown
- The dropdown SHALL open on trigger click, close on second click, outside click, or Escape key.
- Scenario — Open dropdown:
  - **WHEN** the user clicks the Courses trigger
  - **THEN** three category columns appear (Design, Development, Marketing)
  - **AND** aria-expanded is "true" on the trigger
- Scenario — Close on second click:
  - **WHEN** the dropdown is open and the user clicks the trigger again
  - **THEN** the dropdown closes and categories are hidden
- Scenario — Close on outside click:
  - **WHEN** the dropdown is open and the user clicks outside
  - **THEN** the dropdown closes
- Scenario — Close on Escape:
  - **WHEN** the dropdown is open and the user presses Escape
  - **THEN** the dropdown closes

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Dropnest · Courses Dropdown · Component Dock

### Cross-cutting requirements

- **Rendering** — The page SHALL render a heading, a Courses trigger button, and a footer with Component Dock branding.
  - Scenario — Page renders correctly: **WHEN** the app loads; **THEN** the heading "Dropdown #19" is visible; **AND** a "Courses" button is visible; **AND** the footer shows "Dropnest" and a Component Dock link; **AND** the document title is "Dropnest — Courses Dropdown"
- **Category content** — Each category SHALL display a heading and at least three course links.
  - Scenario — Course links visible: **WHEN** the dropdown is open; **THEN** each category shows its heading and course links; **AND** all links have href="#"
- **Customization** — The component SHALL accept custom category data via props.
  - Scenario — Custom categories: **WHEN** custom categories are passed via the categories prop; **THEN** only those categories are displayed
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dropnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dropnest/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dropnest` ships on https://dropnest.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dropnest/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dropnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropnest/public/CNAME` = `dropnest.free.componentdock.com`
  and the package `homepage` = `https://dropnest.free.componentdock.com`.
