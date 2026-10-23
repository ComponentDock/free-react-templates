# Template: Oversample (Multiselect Widget)

## Purpose

Oversample is a multiselect dropdown widget template: a single accessible
combobox that opens a checkbox listbox, shows the current selection as
removable chips and reports how many options are selected.

It is an original React recreation of the ColorLib "Multiselect 05" free
template (source: https://colorlib.com/wp/template/multiselect-05/),
built under a DIFFERENT name (**Oversample**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a component demo rather than a marketing page: a light
`#fafafa` page, a `Multiselect #05` heading, one dropdown trigger reading
"Select options...", a white list of checkbox rows and an orange
`#fd5f00` accent for the trigger and selected states. Lato carries the
type. The recreation keeps that demo framing and implements the widget as
a proper combobox/listbox pair (`role="combobox"`, `role="listbox"`,
`role="option"`, `aria-selected`, `aria-haspopup`) with chip removal.

## Design Tokens

| Token          | Value            | Notes                                  |
| -------------- | ---------------- | -------------------------------------- |
| Font family    | `'Lato', sans-serif` | Whole page                          |
| Brand          | `#fd5f00`        | Trigger, chips, active row             |
| Brand light    | `#ff7a2e`        | Hover                                  |
| Brand dark     | `#e04f00`        | Pressed                                |
| Page surface   | `#fafafa`        | Page background                        |
| Body text      | `#808080`        | Secondary copy                         |
| Heading text   | `#000000`        | `Multiselect #05` heading              |
| Menu surface   | `#ffffff`        | Dropdown panel                         |

## Requirements

### Requirement 1: Demo Framing

The page SHALL render a header area with the h1 `Multiselect #05` and a
short description above the widget, on the `#fafafa` page background.

#### Scenario: Visitor loads the page

- **WHEN** the page loads
- **THEN** the h1 `Multiselect #05` is visible
- **AND** the document title is `Oversample — Multiselect Dropdown Template`

### Requirement 2: Combobox Trigger

The widget SHALL expose a single trigger button with `aria-haspopup`,
`aria-expanded` and an accessible name (`Select options…`) that toggles
the listbox open and closed.

#### Scenario: Visitor opens the dropdown

- **WHEN** the visitor activates the trigger
- **THEN** the listbox appears and the trigger reports
  `aria-expanded="true"`

#### Scenario: Visitor closes the dropdown

- **WHEN** the visitor activates the trigger again or presses the mouse
  outside the widget
- **THEN** the listbox closes and the highlighted row resets

### Requirement 3: Option Selection

The listbox SHALL render each option as `role="option"` with
`aria-selected` reflecting whether it is chosen, and toggling an option
SHALL update the selection without closing the listbox.

#### Scenario: Visitor selects an option

- **WHEN** the visitor activates `Option1`
- **THEN** `Option1` reports `aria-selected="true"` and the selection
  counter increments

#### Scenario: Visitor clears an option

- **WHEN** the visitor activates the selected `Option1` again
- **THEN** it reports `aria-selected="false"` and the counter decrements

### Requirement 4: Selection Chips And Counter

Selected values SHALL be rendered as chips, each with its own
`Remove <option>` button, alongside a counter reading e.g.
`3 selected`; removing a chip SHALL deselect the matching option.

#### Scenario: Visitor removes a chip

- **WHEN** the visitor activates `Remove Option1`
- **THEN** the chip disappears, the option is deselected and the counter
  reflects the new total

### Requirement 5: Keyboard Access And Component Dock Footer

The widget SHALL be operable by keyboard (open, arrow through options,
select with Enter/Space) with a visible focus ring, and the footer SHALL
link `https://www.componentdock.com/`.

#### Scenario: Visitor drives the widget from the keyboard

- **WHEN** the trigger has focus and Enter is pressed, then an option is
  focused and Space is pressed
- **THEN** the listbox opens and that option toggles

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor reaches the footer
- **THEN** a link to `https://www.componentdock.com/` is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/oversample/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/oversample/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/oversample`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% for `apps/oversample`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/oversample`)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` is `oversample.free.componentdock.com` and `homepage` matches
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
