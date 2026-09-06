# Template: Pickbox (Form — Multiselect Dropdown)

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

## Gherkin requirements

### Scenario: Page renders with title
- Given the user visits the Pickbox page
- Then the heading "Multiselect #03" is visible
- And the heading is centered on the page

### Scenario: Dropdown displays with label
- Given the page has loaded
- Then a label "Select Language" is visible above the dropdown
- And a dropdown component is rendered below the label

### Scenario: Dropdown shows default state
- Given the dropdown is in its default state
- Then the placeholder text "All" is displayed
- And the dropdown has a light gray border (#e6e6e6)

### Scenario: Dropdown opens on click
- Given the dropdown is closed
- When the user clicks the dropdown
- Then the dropdown menu expands
- And the menu displays language options: PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS
- And the dropdown has a subtle shadow

### Scenario: Single item selection
- Given the dropdown is open
- When the user clicks "PHP"
- Then "PHP" is selected and highlighted in brand blue (#3e64ff)
- And the dropdown label updates to show the selected item

### Scenario: Multiple item selection
- Given the dropdown is open
- When the user clicks "PHP"
- And the user clicks "Javascript"
- Then both "PHP" and "Javascript" are selected
- And selected items are displayed with check marks or highlight

### Scenario: Item hover styling
- Given the dropdown is open
- When the user hovers over an item
- Then the item text color changes to brand blue (#3e64ff)
- And the hover transition is smooth (0.3s ease)

### Scenario: Responsive layout
- Given the user views on a mobile device
- Then the dropdown is full width within its container
- And the heading remains centered
- And the layout adjusts to single-column

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
