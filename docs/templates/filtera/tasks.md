# Filtera — Implementation Tasks

Source design: **Colorlib Search 10** (`https://colorlib.com/wp/template/colorlib-search-10/`) → recreation name **filtera**. Shipped at https://filtera.free.componentdock.com.

Scope: Filtera is a single-page fancy search form template in the free-react-templates monorepo. It recreates the ColorLib "Search Form V10" template (https://colorlib.com/wp/template/colorlib-search-10/) under a different name.

## Component breakdown

Render order as composed in `apps/filtera/src/App.tsx`:

### 1. SearchForm
- The template SHALL display a full-width gradient search bar (blue-to-pink) with a "Type Keywords" placeholder, a white search icon, and rounded pill shape.
- Scenario — User types in search bar:
  - **WHEN** the user visits the page
  - **THEN** a text input with placeholder "Type Keywords" is visible
  - **AND** a search icon is displayed to the right of the input
- Scenario — Search input accepts text:
  - **WHEN** the user types "shoes" into the search input
  - **THEN** the input value updates to "shoes"

### 2. Footer
- The template SHALL display a footer with the template name and a link to Component Dock (https://www.componentdock.com/).
- Scenario — Footer link to Component Dock:
  - **WHEN** the user visits the page
  - **THEN** a footer is visible with a link to "https://www.componentdock.com/"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Advanced search panel** — The template SHALL display an "ADVANCED SEARCH" panel below the search bar with 6 filter dropdowns arranged in a 3-column grid (2 rows).
  - Scenario — Filter dropdowns are present: **WHEN** the user visits the page; **THEN** 6 filter dropdowns are visible: Category, Color, Size, Sale, Time, Type
  - Scenario — User selects a filter value: **WHEN** the user selects "Red" from the Color dropdown; **THEN** the Color dropdown value updates to "Red"
- **Result count display** — The template SHALL display a result count (e.g. "108 results") in the advanced search panel.
  - Scenario — Result count is visible: **WHEN** the user visits the page; **THEN** the text "108" and "results" are displayed
- **Reset functionality** — The template SHALL provide a RESET button that clears all filter selections.
  - Scenario — Reset clears all filters: **WHEN** the user selects values in the Color and Size dropdowns; **AND** clicks the "RESET" button; **THEN** all dropdowns return to their default empty values; **AND** the search input is cleared
- **Search submission** — The template SHALL provide a SEARCH button that triggers form submission without page reload.
  - Scenario — Search button submits form: **WHEN** the user clicks the "SEARCH" button; **THEN** the form submission is handled without page navigation
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/filtera/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/filtera/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/filtera` ships on https://filtera.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/filtera/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/filtera/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/filtera/public/CNAME` = `filtera.free.componentdock.com`
  and the package `homepage` = `https://filtera.free.componentdock.com`.
