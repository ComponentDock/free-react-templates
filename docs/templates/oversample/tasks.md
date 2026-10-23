# Oversample — Implementation Tasks

Source design: **Multiselect 05** (`https://colorlib.com/wp/template/multiselect-05/`) → recreation name **oversample**. Shipped at https://oversample.free.componentdock.com.

Scope: Oversample is a multiselect dropdown widget template: a single accessible combobox that opens a checkbox listbox, shows the current selection as removable chips and reports how many options are selected.

## Component breakdown

Render order as composed in `apps/oversample/src/App.tsx`:

### 1. Header
- No dedicated spec block — hold this band to the design notes.
- Anchors: Multiselect #05

### 2. MultiselectDropdown
- No dedicated spec block — hold this band to the design notes.
- Anchors: combobox · Select options · listbox · Options · option

### 3. Footer
- The widget SHALL be operable by keyboard (open, arrow through options, select with Enter/Space) with a visible focus ring, and the footer SHALL link `https://www.componentdock.com/`.
- Scenario — Visitor drives the widget from the keyboard:
  - **WHEN** the trigger has focus and Enter is pressed, then an option is
  - **THEN** the listbox opens and that option toggles
- Scenario — Visitor looks for more templates:
  - **WHEN** the visitor reaches the footer
  - **THEN** a link to `https://www.componentdock.com/` is present

### Cross-cutting requirements

- **Demo Framing** — The page SHALL render a header area with the h1 `Multiselect #05` and a short description above the widget, on the `#fafafa` page background.
  - Scenario — Visitor loads the page: **WHEN** the page loads; **THEN** the h1 `Multiselect #05` is visible; **AND** the document title is `Oversample — Multiselect Dropdown Template`
- **Combobox Trigger** — The widget SHALL expose a single trigger button with `aria-haspopup`, `aria-expanded` and an accessible name (`Select options…`) that toggles the listbox open and closed.
  - Scenario — Visitor opens the dropdown: **WHEN** the visitor activates the trigger; **THEN** the listbox appears and the trigger reports
  - Scenario — Visitor closes the dropdown: **WHEN** the visitor activates the trigger again or presses the mouse; **THEN** the listbox closes and the highlighted row resets
- **Option Selection** — The listbox SHALL render each option as `role="option"` with `aria-selected` reflecting whether it is chosen, and toggling an option SHALL update the selection without closing the listbox.
  - Scenario — Visitor selects an option: **WHEN** the visitor activates `Option1`; **THEN** `Option1` reports `aria-selected="true"` and the selection
  - Scenario — Visitor clears an option: **WHEN** the visitor activates the selected `Option1` again; **THEN** it reports `aria-selected="false"` and the counter decrements
- **Selection Chips And Counter** — Selected values SHALL be rendered as chips, each with its own `Remove <option>` button, alongside a counter reading e.g. `3 selected`; removing a chip SHALL deselect the matching option.
  - Scenario — Visitor removes a chip: **WHEN** the visitor activates `Remove Option1`; **THEN** the chip disappears, the option is deselected and the counter
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/oversample/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/oversample/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/oversample`); [ ] Lint passes (`npm run lint`); [ ] Vitest coverage is 100% for `apps/oversample`; [ ] Build succeeds (`npm run build --workspace @free-react-templates/oversample`); [ ] Footer links to Component Dock; [ ] `public/CNAME` is `oversample.free.componentdock.com` and `homepage` matches; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/oversample` ships on https://oversample.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/oversample/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/oversample/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/oversample/public/CNAME` = `oversample.free.componentdock.com`
  and the package `homepage` = `https://oversample.free.componentdock.com`.
