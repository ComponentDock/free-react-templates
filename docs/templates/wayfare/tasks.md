# Wayfare — Implementation Tasks

Source design: **Colorlib Search 11** (`https://colorlib.com/wp/template/colorlib-search-11/`) → recreation name **wayfare**. Shipped at https://wayfare.free.componentdock.com.

Scope: A travel search form component for hotel booking websites. Features a full-viewport background image with dark overlay, tabbed search type selector, and a search form with destination, dates, travelers, flight/car options, and an orange search button.

## Component breakdown

Render order as composed in `apps/wayfare/src/App.tsx`:

### 1. SearchTabs
- The component SHALL render four tab buttons (HOTEL ONLY, HOTEL+FLIGHT, HOTEL+FLIGHT+CAR, HOTEL+CAR) with appropriate icons, defaulting to HOTEL ONLY as active.
- Scenario — Default active tab:
  - **WHEN** the component renders without a controlled activeTab
  - **THEN** HOTEL ONLY has aria-selected=true and other tabs have aria-selected=false
- Scenario — Click changes active tab:
  - **WHEN** the user clicks a different tab
  - **THEN** that tab becomes active (aria-selected=true) and the previous tab becomes inactive
- Scenario — Controlled mode:
  - **WHEN** activeTab prop is provided
  - **THEN** the specified tab is rendered as active regardless of internal state
- Scenario — onTabChange callback:
  - **WHEN** the user clicks a tab
  - **THEN** onTabChange is called with the tab id

### 2. SearchForm
- The component SHALL render a form with destination text input, check-in/check-out date inputs, travelers dropdown, "Add a Flight" and "Add a Car" checkboxes, and a Search button. Flight checkbox SHALL default to checked.
- Scenario — Form fields render:
  - **WHEN** the form renders
  - **THEN** all fields (destination, check-in, check-out, travelers, checkboxes, search button) are visible
- Scenario — Destination input:
  - **WHEN** the user types in the destination field
  - **THEN** the field value updates to reflect the typed text
- Scenario — Travelers dropdown:
  - **WHEN** the user selects a different option
  - **THEN** the dropdown value changes to the selected option
- Scenario — Checkbox toggling:
  - **WHEN** the user clicks the flight checkbox (initially checked)
  - **THEN** it becomes unchecked
- Scenario — Form submission:
  - **WHEN** the user fills in fields and clicks Search
  - **THEN** onSubmit is called with the current form data object

### 3. Footer
- The footer SHALL display the brand name "Wayfare", a tagline, and a link to https://www.componentdock.com/ labeled "Component Dock".
- Scenario — Component Dock link:
  - **WHEN** the footer renders
  - **THEN** a link to https://www.componentdock.com/ with text "Component Dock" and target=_blank is present

### Cross-cutting requirements

- **App composition** — The App SHALL compose the search heading, tabs, form, and footer with a full-viewport background image.
  - Scenario — Layout: **WHEN** the app renders; **THEN** a heading "Search Hotels", tabs, form, and footer are all present in the document
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/wayfare/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/wayfare/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/wayfare` ships on https://wayfare.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/wayfare/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/wayfare/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wayfare/public/CNAME` = `wayfare.free.componentdock.com`
  and the package `homepage` = `https://wayfare.free.componentdock.com`.
