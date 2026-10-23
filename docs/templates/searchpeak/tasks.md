# Searchpeak — Implementation Tasks

Source design: **Colorlib Search 7** (`https://colorlib.com/wp/template/colorlib-search-7/`) → recreation name **searchpeak**. Shipped at https://searchpeak.free.componentdock.com.

Scope: Recreation of ColorLib "Colorlib Search 7" — an advanced search form with dropdown filters centered on a sky blue background. The form includes a search bar with result count, six filter dropdowns in a 2×3 grid, and Search/Delete action buttons.

## Component breakdown

Render order as composed in `apps/searchpeak/src/App.tsx`:

### 1. SearchBar
- The form SHALL contain a search bar with a magnifying glass icon, a "Search..." placeholder input, and a "108 results" count displayed on the right side in green text.
- Scenario — Search input is visible:
  - **WHEN** the page loads
  - **THEN** a search input with placeholder "Search..." is visible
  - **AND** the text "108 results" is displayed next to the input
  - **AND** a search icon is visible
- Scenario — Search input is controlled:
  - **WHEN** I type "test" in the search input
  - **THEN** the input value is "test"

### 2. AdvancedSearch
- The form SHALL contain an "Advanced Search" section with six dropdown filter selects arranged in a 2×3 grid: ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE. Each filter SHALL display an uppercase label and a select element with a down chevron icon.
- Scenario — All six filter dropdowns are visible:
  - **WHEN** the page loads
  - **THEN** six dropdown selects are visible
  - **AND** the filter labels are ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE
- Scenario — FilterSelect has "All" default option:
  - **WHEN** a filter select renders
  - **THEN** the first option is "All"
- Scenario — FilterSelect calls onChange:
  - **WHEN** I select an option in a FilterSelect with an onChange handler
  - **THEN** the onChange callback is called with the selected value

### 3. Footer
- The footer SHALL display "More templates at Component Dock" with a link to https://www.componentdock.com/.
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** a link to componentdock.com is visible
  - **AND** the link text contains "Component Dock"

### Cross-cutting requirements

- **Page layout and background** — The page SHALL render a centered, full-viewport container with a sky blue (#5BC0DE) background and Poppins font.
  - Scenario — Page loads with correct background: **WHEN** the page loads; **THEN** the viewport background color is sky blue; **AND** the form card is centered both vertically and horizontally
- **Action buttons** — The form SHALL contain a green rounded "Search" button and a dark "Delete" text link.
  - Scenario — Search button is clickable: **WHEN** I click the "Search" button; **THEN** no error occurs
  - Scenario — Delete button is clickable: **WHEN** I click the "Delete" button; **THEN** no error occurs
- **Form submission prevention** — The form SHALL prevent default submission when the user presses Enter in the search input.
  - Scenario — Enter key does not navigate: **WHEN** I press Enter in the search input; **THEN** the form does not navigate away from the page
- **Document title** — The app SHALL set the document title to "Searchpeak — Advanced Search Form" on mount.
  - Scenario — Title is set correctly: **WHEN** the page loads; **THEN** the document title is "Searchpeak — Advanced Search Form"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/searchpeak/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/searchpeak/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/searchpeak` ships on https://searchpeak.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/searchpeak/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/searchpeak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/searchpeak/public/CNAME` = `searchpeak.free.componentdock.com`
  and the package `homepage` = `https://searchpeak.free.componentdock.com`.
