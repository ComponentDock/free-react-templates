# Dropwell — Implementation Tasks

Source design: **Dropdown 07** (`https://colorlib.com/wp/template/dropdown-07/`) → recreation name **dropwell**. Shipped at https://dropwell.free.componentdock.com.

Scope: Provide a multi-level nested dropdown menu component showcasing expandable submenu items in a Bootstrap-style dropdown pattern.

## Component breakdown

Render order as composed in `apps/dropwell/src/App.tsx`:

### 1. NestedDropdown
- Users SHALL be able to open and close the dropdown menu by clicking the toggle button.
- Scenario — Click opens menu:
  - **WHEN** I click the dropdown toggle button
  - **THEN** the menu is visible
  - **AND** menu items are listed
- Scenario — Click closes open menu:
  - **GIVEN** the dropdown menu is open
  - **WHEN** I click the toggle button again
  - **THEN** the menu is not visible

### 2. Footer
- Users SHALL see a page titled "Dropdown" with a "Dropwell" branded footer linking to Component Dock.
- Scenario — Heading is visible:
  - **WHEN** the page loads
  - **THEN** the heading "Dropdown" is visible
  - **AND** the footer shows "Dropwell"
  - **AND** the footer has a link to componentdock.com

### Cross-cutting requirements

- **Nested submenu expands** — Users SHALL be able to expand and collapse nested submenus by clicking parent items with chevron indicators.
  - Scenario — Submenu expands on click: **GIVEN** the dropdown menu is open; **WHEN** I click a parent menu item with submenu; **THEN** the nested submenu is visible
  - Scenario — Submenu collapses on second click: **GIVEN** the dropdown menu is open and a submenu is expanded; **WHEN** I click the same parent menu item again; **THEN** the nested submenu is not visible
- **Click outside closes menu** — Users SHALL be able to close the dropdown by clicking outside of it.
  - Scenario — Click outside closes menu: **GIVEN** the dropdown menu is open; **WHEN** I click outside the dropdown; **THEN** the menu is not visible
- **Escape closes menu** — Users SHALL be able to close the dropdown by pressing the Escape key.
  - Scenario — Escape closes menu: **GIVEN** the dropdown menu is open; **WHEN** I press Escape; **THEN** the menu is not visible
  - Scenario — Non-Escape key does not close menu: **GIVEN** the dropdown menu is open; **WHEN** I press ArrowDown; **THEN** the menu is still visible
- **Footer links to Component Dock** — The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
  - Scenario — Footer link is correct: **WHEN** I view the footer; **THEN** the "Component Dock" link points to https://www.componentdock.com/; **AND** the link opens in a new tab
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dropwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dropwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dropwell` ships on https://dropwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dropwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dropwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropwell/public/CNAME` = `dropwell.free.componentdock.com`
  and the package `homepage` = `https://dropwell.free.componentdock.com`.
