# Template: Pickbox (Form — Multiselect Dropdown)
<!-- prep-status: shipped-as=combobox -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-03` design this prep describes already
> ships as `apps/combobox` (<https://combobox.free.componentdock.com>).
> Do not scaffold `apps/pickbox`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-combobox/spec.md`.

## Purpose

Recreation of ColorLib "Multiselect 03" — a free custom select dropdown menu template.

- **Source**: https://colorlib.com/wp/template/multiselect-03/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-03/
- **Description**: Fully responsive custom select dropdown menu for any project or application.
- **Stack**: React 19 + Tailwind CSS 4 + TypeScript (Vite)
- **New name**: `pickbox` (apps/pickbox, @free-react-templates/pickbox)

## Design tokens (extracted from preview stylesheet)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Lato", Arial, sans-serif` | Weights 300, 400, 700 |
| Brand color | `#3e64ff` | Links, active items, hover highlights |
| Background | `#fff` | Page body |
| Body text | `gray` | Default paragraph color |
| Heading color | `#000` | h1-h5 |
| Dropdown border | `#e6e6e6` | Selection dropdown borders |
| Dropdown item text | `#000` | Menu items |
| Dropdown item hover | `#3e64ff` | Brand blue on hover |
| Active item | `#3e64ff` | Selected state |
| Section padding | `7em 0` | ftco-section |
| Heading size | `28px` | .heading-section |
| Line height | `1.8` | Body text |
| Dropdown item font | `13px` | Menu items |
| Dropdown shadow | `0px 3px 19px -15px rgba(0,0,0,0.41)` | Active dropdown menu |

## Visual design notes (from TEMPLATES.md screenshot + preview HTML)

- Clean, minimal single-section layout centered on page
- White background throughout
- Title "Multiselect #03" centered above the form component
- Semantic UI fluid selection dropdown with multi-select enabled
- Label "Select Language" above the dropdown
- Dropdown shows "All" as default, with language options: PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS
- When active, dropdown expands with a subtle shadow and light gray border
- Selected items highlighted in brand blue (#3e64ff)
- Very compact — single form component in a centered column (col-md-6 col-lg-4)

## Requirements

### Feature: Pickbox template behaviour

#### Scenario: Page renders with title

- **GIVEN** the user visits the Pickbox page
- **THEN** the heading "Multiselect #03" is visible
- **AND** the heading is centered on the page

#### Scenario: Dropdown displays with label

- **GIVEN** the page has loaded
- **THEN** a label "Select Language" is visible above the dropdown
- **AND** a dropdown component is rendered below the label

#### Scenario: Dropdown shows default state

- **GIVEN** the dropdown is in its default state
- **THEN** the placeholder text "All" is displayed
- **AND** the dropdown has a light gray border (#e6e6e6)

#### Scenario: Dropdown opens on click

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the dropdown
- **THEN** the dropdown menu expands
- **AND** the menu displays language options: PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS
- **AND** the dropdown has a subtle shadow

#### Scenario: Single item selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "PHP"
- **THEN** "PHP" is selected and highlighted in brand blue (#3e64ff)
- **AND** the dropdown label updates to show the selected item

#### Scenario: Multiple item selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "PHP"
- **AND** the user clicks "Javascript"
- **THEN** both "PHP" and "Javascript" are selected
- **AND** selected items are displayed with check marks or highlight

#### Scenario: Item hover styling

- **GIVEN** the dropdown is open
- **WHEN** the user hovers over an item
- **THEN** the item text color changes to brand blue (#3e64ff)
- **AND** the hover transition is smooth (0.3s ease)

#### Scenario: Responsive layout

- **GIVEN** the user views on a mobile device
- **THEN** the dropdown is full width within its container
- **AND** the heading remains centered
- **AND** the layout adjusts to single-column

## Verification checklist

- [ ] Page renders with centered heading "Multiselect #03"
- [ ] "Select Language" label visible above dropdown
- [ ] Dropdown shows "All" as default placeholder
- [ ] Dropdown opens on click with language options
- [ ] Multiple items can be selected
- [ ] Selected items highlighted in brand blue (#3e64ff)
- [ ] Hover effect on dropdown items (brand blue, 0.3s transition)
- [ ] Dropdown has light gray border (#e6e6e6)
- [ ] Active dropdown has subtle shadow
- [ ] Font is Lato (Google Fonts link in index.html)
- [ ] Responsive: full-width dropdown on mobile
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] Tests pass with 100% coverage
- [ ] Typecheck passes
- [ ] Build succeeds
