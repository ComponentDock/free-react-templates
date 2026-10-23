# Questbar — Implementation Tasks

Source design: **Search Form Bar 05** (`https://colorlib.com/wp/template/search-form-bar-05/`) → recreation name **questbar**. Shipped at https://questbar.free.componentdock.com.

Scope: A standalone search form bar component with a category dropdown, text input, and search icon button. Recreation of ColorLib **Search Form Bar 05**.

## Component breakdown

Render order as composed in `apps/questbar/src/App.tsx`:

### 1. QuestBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search

### 2. Footer
- The template SHALL include a footer that links to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders:
  - **WHEN** the page loads
  - **THEN** a footer element SHALL be present
  - **AND** the footer SHALL contain a link to "https://www.componentdock.com/" with text "Component Dock"

### Cross-cutting requirements

- **Search bar renders all elements** — The QuestBar component SHALL render a horizontal search form bar with a category dropdown button, a text search input, and a search submit button.
  - Scenario — All elements visible: **WHEN** the QuestBar component is rendered; **THEN** a category dropdown button SHALL be visible with text "All Product"; **AND** a search input SHALL be visible with placeholder "Search..."; **AND** a search submit button with a magnifying glass icon SHALL be visible
- **Page title** — The page SHALL display a heading "QuestBar Search" above the search bar.
  - Scenario — Title visible: **WHEN** the page loads; **THEN** a heading "QuestBar Search" SHALL be visible above the search bar
- **Category dropdown opens and closes** — The category dropdown SHALL open a menu of category options on click and close when a category is selected or when clicking outside.
  - Scenario — Dropdown opens on click: **WHEN** the user clicks the category dropdown button; **THEN** a dropdown menu SHALL appear with category options; **AND** "All Product" SHALL be one of the options
  - Scenario — Dropdown closes after selection: **WHEN** the user selects "Electronics" from the dropdown; **THEN** the dropdown menu SHALL close
  - Scenario — Dropdown closes on outside click: **WHEN** the dropdown is open and the user clicks outside the dropdown; **THEN** the dropdown menu SHALL close
- **Category selection updates label** — Selecting a category from the dropdown SHALL update the dropdown button label to reflect the selected category.
  - Scenario — Select Electronics: **WHEN** the user selects "Electronics" from the dropdown; **THEN** the dropdown button SHALL display "Electronics"
- **Search input accepts text** — The search input SHALL accept and display typed text.
  - Scenario — Typing in search input: **WHEN** the user types "wireless headphones" in the search input; **THEN** the search input SHALL contain "wireless headphones"
- **Form submission** — The form SHALL submit when the user clicks the search button or presses Enter.
  - Scenario — Submit via button click: **WHEN** the user types "laptop" in the search input; **AND** clicks the search button; **THEN** the form SHALL submit
  - Scenario — Submit via Enter key: **WHEN** the search input is focused; **AND** the user presses Enter; **THEN** the form SHALL submit
  - Scenario — Submit with empty query: **WHEN** the user clicks the search button without typing; **THEN** the form SHALL submit with an empty query
- **No ColorLib references in app code** — The app source files SHALL NOT contain any references to "colorlib" or "ColorLib" in code, comments, or strings.
  - Scenario — Clean source: **WHEN** the app code is inspected; **THEN** no files under apps/questbar/ SHALL contain the string "colorlib" (case-insensitive)
- **100% test coverage** — All application code SHALL have 100% line, function, branch, and statement coverage as measured by Vitest with the v8 provider.
  - Scenario — Coverage thresholds met: **WHEN** tests are run with coverage enabled; **THEN** lines, functions, branches, and statements coverage SHALL all be 100%

## Verification

- [x] `apps/questbar` ships on https://questbar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/questbar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/questbar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/questbar/public/CNAME` = `questbar.free.componentdock.com`
  and the package `homepage` = `https://questbar.free.componentdock.com`.
