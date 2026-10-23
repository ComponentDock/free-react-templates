# Searchgrid — Implementation Tasks

Source design: **Search Form Bar 12** (`https://colorlib.com/wp/template/search-form-bar-12/`) → recreation name **searchgrid**. Shipped at https://searchgrid.free.componentdock.com.

Scope: Searchgrid is a minimal search form bar template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/searchgrid/src/App.tsx`:

### 1. Navbar
- The navbar SHALL be displayed as a full-width horizontal bar at the top of the viewport with a white background and a thin gray bottom border.
- Scenario — Navbar renders on page load:
  - **WHEN** the page loads
  - **THEN** a navigation bar is visible at the top
  - **AND** the navbar has a white background
  - **AND** the navbar has a 1px light gray bottom border (#e8e8e8)
  - **AND** the navbar content is centered with max-width ~1200px

### 2. Footer
- The template SHALL display a footer with a link to Component Dock.
- Scenario — Footer renders:
  - **WHEN** the app loads
  - **THEN** a footer is visible at the bottom
  - **AND** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text contains "Component Dock"

### Cross-cutting requirements

- **Brand Logo** — The navbar SHALL display brand text on the far left in blue (#2874f0), bold and approximately 20px.
  - Scenario — Brand text is visible: **WHEN** the navbar renders; **THEN** the brand text "Brand" appears on the far left; **AND** the brand text is styled in blue (#2874f0); **AND** the brand text is bold
- **Navigation Links** — The navbar SHALL display navigation links "Home", "About", "Contact" positioned to the right of the brand, styled in dark gray.
  - Scenario — Nav links are visible: **WHEN** the navbar renders; **THEN** navigation links "Home", "About", "Contact" appear; **AND** the links are positioned to the right of the brand; **AND** the links are styled in dark gray (#333333); **AND** the links are evenly spaced with horizontal padding
- **Search Input** — The navbar SHALL display a search input on the far right with a magnifying glass icon, rounded corners (20px), and placeholder text "Search".
  - Scenario — Search input renders: **WHEN** the navbar renders; **THEN** a search input appears on the far right of the navbar; **AND** the search input has a magnifying glass icon on its left side; **AND** the search input has placeholder text "Search"; **AND** the search input has rounded corners (border-radius: 20px); **AND** the search input has a light gray border
  - Scenario — Search input accepts text: **WHEN** the user types in the search input; **THEN** the input value updates with the typed text
- **Responsive Behavior** — The navbar SHALL collapse navigation links on narrow viewports while keeping brand and search visible.
  - Scenario — Mobile view: **WHEN** the viewport width is less than 768px; **THEN** the navigation links are hidden; **AND** the brand and search bar remain visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/searchgrid/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/searchgrid/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/searchgrid` ships on https://searchgrid.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/searchgrid/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/searchgrid/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchgrid/public/CNAME` = `searchgrid.free.componentdock.com`
  and the package `homepage` = `https://searchgrid.free.componentdock.com`.
