# Multiform — Implementation Tasks

Source design: **Multiselect 15** (`https://colorlib.com/wp/template/multiselect-15/`) → recreation name **multiform**. Shipped at https://multiform.free.componentdock.com.

Scope: A free state multiselect dropdown snippet using Bootstrap Framework. Recreation of ColorLib "Multiselect V15".

## Component breakdown

Render order as composed in `apps/multiform/src/App.tsx`:

### 1. Multiselect
- Multiple states SHALL be selectable simultaneously.
- Scenario — Multiple state selection:
  - **GIVEN** the dropdown is open
  - **WHEN** the user selects "California"
  - **AND** the user selects "New York"
  - **AND** the user selects "Texas"
  - **THEN** all three items show light blue (#e1f2fb) background
  - **AND** the trigger button text shows "3 selected"

### 2. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link:
  - **GIVEN** the page is loaded
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page renders correctly** — The page SHALL display a centered heading "State Selector" and a dropdown trigger button below it.
  - Scenario — Page renders correctly: **GIVEN** the user navigates to the multiform page; **THEN** a centered heading "State Selector" is visible; **AND** a dropdown trigger button is visible below the heading
- **Dropdown opens on click** — The dropdown SHALL open when the trigger button is clicked, showing a search input, select-all toggle, and 50 US states.
  - Scenario — Dropdown opens on click: **GIVEN** the user sees the dropdown trigger; **WHEN** the user clicks the trigger button; **THEN** a dropdown panel appears below the trigger; **AND** the panel contains a search input; **AND** the panel contains a "select all" toggle; **AND** the panel lists 50 US states with checkbox indicators
- **Single state selection** — Clicking a state SHALL toggle its selection state.
  - Scenario — Single state selection: **GIVEN** the dropdown is open; **WHEN** the user clicks "Alabama"; **THEN** "Alabama" gets a light blue (#e1f2fb) background; **AND** the trigger button text shows "1 selected"
- **Deselect a state** — Clicking a selected state SHALL deselect it.
  - Scenario — Deselect a state: **GIVEN** the user has selected "California" and "Texas"; **WHEN** the user clicks "California" again; **THEN** "California" loses the light blue background; **AND** the trigger button text shows "1 selected"
- **Select all states** — The select-all toggle SHALL select all visible states.
  - Scenario — Select all states: **GIVEN** the dropdown is open; **WHEN** the user clicks the "select all" toggle; **THEN** all 50 states are selected; **AND** the trigger button text shows "50 selected"
- **Deselect all states** — The deselect-all toggle SHALL deselect all states.
  - Scenario — Deselect all states: **GIVEN** all states are selected; **WHEN** the user clicks the "select all" toggle again; **THEN** no states are selected; **AND** the trigger button text shows "None selected"
- **Search filters states** — The search input SHALL filter the state list in real time.
  - Scenario — Search filters states: **GIVEN** the dropdown is open; **WHEN** the user types "New" in the search input; **THEN** only states containing "New" are visible (New Hampshire, New Jersey, New Mexico, New York); **AND** other states are hidden
  - Scenario — Search with no results: **GIVEN** the dropdown is open; **WHEN** the user types "ZZZ" in the search input; **THEN** no states are visible in the list
- **Dropdown closes on outside click** — Clicking outside the dropdown SHALL close it.
  - Scenario — Dropdown closes on outside click: **GIVEN** the dropdown is open; **WHEN** the user clicks outside the dropdown; **THEN** the dropdown panel closes
- **Keyboard accessibility** — The dropdown SHALL support keyboard navigation.
  - Scenario — Keyboard accessibility: **GIVEN** the dropdown trigger is focused; **WHEN** the user presses Enter or Space; **THEN** the dropdown opens; **AND** the user can close with Escape
- **Responsive layout** — The dropdown SHALL be responsive on mobile viewports.
  - Scenario — Responsive layout: **GIVEN** the user views the page on a mobile device (< 768px); **THEN** the heading is centered; **AND** the dropdown takes full width within its container
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/multiform/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/multiform/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/multiform` ships on https://multiform.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/multiform/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/multiform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/multiform/public/CNAME` = `multiform.free.componentdock.com`
  and the package `homepage` = `https://multiform.free.componentdock.com`.
