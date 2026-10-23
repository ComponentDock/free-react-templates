# Dropkit — Implementation Tasks

Source design: **Dropdown 01** (`https://colorlib.com/wp/template/dropdown-01/`) → recreation name **dropkit**. Shipped at https://dropkit.free.componentdock.com.

Scope: A single-page React component showcase displaying four Bootstrap-style dropdown menu variations (dropdown, dropup, dropright, dropleft), each with a regular and split button variant. Serves as a reference implementation for interactive dropdown menus built with React and Tailwind CSS.

## Component breakdown

Render order as composed in `apps/dropkit/src/App.tsx`:

### 1. DropdownShowcase
- Each variation column SHALL contain a regular dropdown button that toggles a dropdown menu on click.
- Scenario — Clicking dropdown button opens menu:
  - **WHEN** the user clicks the "Dropdown" button in the Dropdown Variation column
  - **THEN** a dropdown menu appears with items: Dropdown, Active, Something else here, Separated link
- Scenario — Clicking menu item closes menu:
  - **WHEN** a dropdown menu is open
  - **AND** the user clicks a menu item
  - **THEN** the menu closes

### 2. Footer
- The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer has Component Dock link:
  - **WHEN** the user views the footer
  - **THEN** a link to componentdock.com is present with text "Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page structure and heading** — The page SHALL render a centered heading "Dropdown" at the top, followed by a 4-column responsive grid of dropdown variations, and a footer at the bottom.
  - Scenario — Page renders with all sections: **WHEN** the user visits the Dropkit page; **THEN** a heading with text "Dropdown" is visible; **AND** four variation columns are displayed: Dropdown, Dropup, Dropright, Dropleft; **AND** a footer with "Component Dock" link is present
- **Split dropdown button behavior** — Each variation column SHALL contain a split dropdown with a main action button and a separate caret toggle button.
  - Scenario — Split caret toggles menu: **WHEN** the user clicks the split dropdown caret button; **THEN** the dropdown menu toggles open/closed
- **Dropup, Dropright, Dropleft positioning** — The Dropup, Dropright, and Dropleft variations SHALL position their menus in the corresponding direction relative to the button.
  - Scenario — Dropup opens above button: **WHEN** the user clicks the "Dropup" button; **THEN** the menu appears above the button
  - Scenario — Dropright opens to the right: **WHEN** the user clicks the "Dropright" button; **THEN** the menu appears to the right of the button
  - Scenario — Dropleft opens to the left: **WHEN** the user clicks the "Dropleft" button; **THEN** the menu appears to the left of the button
- **Click outside closes menu** — Any open dropdown menu SHALL close when the user clicks outside the dropdown container.
  - Scenario — Click outside closes open menu: **GIVEN** a dropdown menu is open; **WHEN** the user clicks outside the menu area; **THEN** the menu closes
- **Escape key closes menu** — Any open dropdown menu SHALL close when the user presses the Escape key.
  - Scenario — Escape closes open menu: **GIVEN** a dropdown menu is open; **WHEN** the user presses Escape; **THEN** the menu closes
- **Design token fidelity** — The template SHALL use the following design tokens from the original ColorLib preview: - Font: Poppins (Google Fonts) - Primary brand color: #0075f6 - Button border-radius: 5px - Background: #fafafa
  - Scenario — Design tokens applied: **WHEN** the page renders; **THEN** the font family includes Poppins; **AND** primary buttons use the #0075f6 color
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dropkit/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dropkit/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dropkit` ships on https://dropkit.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dropkit/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dropkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropkit/public/CNAME` = `dropkit.free.componentdock.com`
  and the package `homepage` = `https://dropkit.free.componentdock.com`.
