# Tealpick — Implementation Tasks

Source design: **Multiselect 13** (`https://colorlib.com/wp/template/multiselect-13/`) → recreation name **tealpick**. Shipped at https://tealpick.free.componentdock.com.

Scope: A Multiselect Dropdown template with multiselect dropdown, selecting an option creates and multiple selections sections. Recreation of ColorLib Multiselect 13 (https://colorlib.com/wp/template/multiselect-13/).

## Component breakdown

Render order as composed in `apps/tealpick/src/App.tsx`:

### 1. SearchableMultiselect
- The multiselect dropdown SHALL display a list of name options when opened.
- Scenario — Opening the dropdown:
  - **WHEN** the user clicks the dropdown input
  - **THEN** the options list appears
  - **AND** options include "Joefrey", "Robert", "Jorge", "Mark", "Luke", "John", "James", "Ryan", "Ronnie"

### 2. Footer
- The footer SHALL link to Component Dock.
- Scenario — Footer renders correctly:
  - **WHEN** the page loads
  - **THEN** the footer shows "Made with Component Dock"
  - **AND** the footer links to https://www.componentdock.com/

### Cross-cutting requirements

- **Page renders with correct layout and heading** — The template SHALL render a centered page with a gray background, a heading "Multi-Select #3", and instruction text.
  - Scenario — Page loads with heading and instruction: **WHEN** the page loads; **THEN** the heading "Multi-Select #3" is visible; **AND** the instruction text "Names separate with comma ','" is visible; **AND** the page background is `#efefef`
- **Selecting an option creates a tag pill** — When a user selects an option, a teal green tag pill SHALL appear.
  - Scenario — Selecting an option: **WHEN** the user clicks "Joefrey" in the open dropdown; **THEN** a teal green tag pill labeled "Joefrey" appears; **AND** the option shows as selected
- **Multiple selections are supported** — The dropdown SHALL support selecting multiple options simultaneously.
  - Scenario — Multi-selection: **WHEN** one option is selected; **AND** the user clicks another option; **THEN** both tag pills are visible
- **Deselecting via tag remove button** — A selected option SHALL be deselectable by clicking the remove button on its tag.
  - Scenario — Deselecting an option: **WHEN** "Joefrey" is selected; **AND** the user clicks the remove button on the "Joefrey" tag; **THEN** the "Joefrey" tag is removed; **AND** "Joefrey" returns to the option list as unselected
- **Live search filters options** — The search input SHALL filter options by matching against option labels.
  - Scenario — Live search filtering: **WHEN** the dropdown is open; **AND** the user types "rob" in the search field; **THEN** only "Robert" is shown in the filtered list; **WHEN** the user clears the search field; **THEN** all options are visible again
- **Keyboard navigation** — The dropdown SHALL support keyboard navigation.
  - Scenario — Keyboard navigation: **WHEN** the dropdown is open; **AND** the user presses ArrowDown; **THEN** focus moves to the next option; **WHEN** the user presses Enter; **THEN** the focused option is selected
- **Closing the dropdown** — The dropdown SHALL close when the user clicks outside or presses Escape.
  - Scenario — Closing on click outside: **WHEN** the dropdown is open; **AND** the user clicks outside the dropdown; **THEN** the dropdown closes
- **Accessibility** — The dropdown SHALL be accessible with proper ARIA attributes.
  - Scenario — ARIA attributes: **WHEN** the dropdown is closed; **THEN** the combobox has `aria-expanded="false"`; **WHEN** the dropdown is opened; **THEN** the combobox has `aria-expanded="true"`; **AND** the listbox has `aria-multiselectable="true"`; **AND** each option has `aria-selected`
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tealpick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tealpick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tealpick` ships on https://tealpick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tealpick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tealpick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tealpick/public/CNAME` = `tealpick.free.componentdock.com`
  and the package `homepage` = `https://tealpick.free.componentdock.com`.
