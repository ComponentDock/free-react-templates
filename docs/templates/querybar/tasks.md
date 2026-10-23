# Querybar — Implementation Tasks

Source design: **Colorlib Search 19** (`https://colorlib.com/wp/template/colorlib-search-19/`) → recreation name **querybar**. Shipped at https://querybar.free.componentdock.com.

Scope: A standalone flight search form widget with a gradient card overlay on a full-viewport background image. Recreation of ColorLib **Colorlib Search Form V19**.

## Component breakdown

Render order as composed in `apps/querybar/src/App.tsx`:

### 1. FlightSearchForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Passengers · Toggle passengers dropdown · Decrease adults · Increase adults · Decrease children · Increase children

### 2. Footer
- The footer SHALL display a Component Dock link and copyright.
- Scenario — Component Dock link:
  - **WHEN** the app loads
  - **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"
- Scenario — Copyright text:
  - **WHEN** the app loads
  - **THEN** the footer shows "QueryBar. All rights reserved."

### Cross-cutting requirements

- **Page title** — The app SHALL set the document title to "QueryBar — Flight Search" on mount.
  - Scenario — Document title on load: **WHEN** the app loads; **THEN** the document title is "QueryBar — Flight Search"
- **Search form fields** — The form SHALL contain From, To, Passengers, Depart, Return fields and a Search button.
  - Scenario — From and To text inputs: **WHEN** the app loads; **THEN** two text inputs with placeholder "City, Region or Airport" are visible
  - Scenario — Depart date input: **WHEN** the app loads; **THEN** a date input labeled "Depart" is visible
  - Scenario — Return date input: **WHEN** the app loads; **THEN** a date input labeled "Return" is visible
  - Scenario — Passengers default value: **WHEN** the app loads; **THEN** the Passengers field shows "1 Adult, 0 Children, 1 Room"
  - Scenario — Search button: **WHEN** the app loads; **THEN** a button labeled "Search" is visible
- **Text input interaction** — Users SHALL be able to type in the From and To fields.
  - Scenario — Type in From field: **WHEN** the user types "New York" in the From field; **THEN** the From field contains "New York"
  - Scenario — Type in To field: **WHEN** the user types "London" in the To field; **THEN** the To field contains "London"
- **Date input interaction** — Users SHALL be able to set depart and return dates.
  - Scenario — Set depart date: **WHEN** the user sets the depart date to "2026-12-25"; **THEN** the depart date is "2026-12-25"
  - Scenario — Set return date: **WHEN** the user sets the return date to "2026-12-30"; **THEN** the return date is "2026-12-30"
- **Passengers dropdown** — The Passengers field SHALL open a dropdown when clicked, showing room controls.
  - Scenario — Open dropdown on field click: **WHEN** the user clicks the Passengers input; **THEN** the dropdown is visible with "Room 1"
  - Scenario — Open dropdown on toggle button click: **WHEN** the user clicks the passengers toggle button; **THEN** the dropdown is visible with "Room 1"
- **Adult count controls** — Users SHALL be able to increment and decrement adult counts with a minimum of 1.
  - Scenario — Increment adults: **WHEN** the user clicks the adults plus button; **THEN** the adults count increases by 1
  - Scenario — Decrement adults: **WHEN** the user clicks the adults minus button; **THEN** the adults count decreases by 1
  - Scenario — Adults minimum of 1: **WHEN** the user clicks the adults minus button when count is 1; **THEN** the adults count remains 1
- **Children count controls** — Users SHALL be able to increment and decrement children counts with a minimum of 0.
  - Scenario — Increment children: **WHEN** the user clicks the children plus button; **THEN** the children count increases by 1
  - Scenario — Decrement children: **WHEN** the user clicks the children minus button; **THEN** the children count decreases by 1
  - Scenario — Children minimum of 0: **WHEN** the user clicks the children minus button when count is 0; **THEN** the children count remains 0
- **Room management** — Users SHALL be able to add rooms and the summary text SHALL update.
  - Scenario — Add room: **WHEN** the user clicks "Add room"; **THEN** a second room appears and the summary shows "2 Rooms"
  - Scenario — Increment adults in room 2: **WHEN** the user adds a room and clicks the second adults plus button; **THEN** the summary shows "3 Adults"
  - Scenario — Decrement adults in room 2: **WHEN** the user adds a room, increments, then decrements the second adults; **THEN** the summary shows "2 Adults"
  - Scenario — Adults in room 2 minimum: **WHEN** the user adds a room and clicks the second adults minus button; **THEN** the second room adults count remains 1
  - Scenario — Increment children in room 2: **WHEN** the user adds a room and clicks the second children plus button; **THEN** the summary shows "1 Children"
  - Scenario — Decrement children in room 2: **WHEN** the user adds a room, increments, then decrements the second children; **THEN** the second room children count is 0
  - Scenario — Children in room 2 minimum: **WHEN** the user adds a room and clicks the second children minus button; **THEN** the second room children count remains 0
- **Form submission** — The form SHALL submit without causing a page reload.
  - Scenario — Submit form: **WHEN** the user clicks the Search button; **THEN** the page does not reload and the form remains rendered
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/querybar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/querybar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/querybar` ships on https://querybar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/querybar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/querybar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/querybar/public/CNAME` = `querybar.free.componentdock.com`
  and the package `homepage` = `https://querybar.free.componentdock.com`.
