# Template: Optlatch (UI Component — Multi-Select Dropdown with Search)

## Purpose

Recreation of ColorLib "Multiselect 10" — a free Bootstrap multi-select
dropdown component with live search filtering.

- **ColorLib source:** https://colorlib.com/wp/template/multiselect-10/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-10/
  (Note: `preview.colorlib.com/theme/multiselect-10/` returns 404; the
  bootstrap-prefixed URL is the correct one.)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Original stack:** Bootstrap 4.3.1 · jQuery · Lodash · Font Awesome 4.7
- **New name:** `optlatch` (app folder `apps/optlatch`, package
  `@free-react-templates/optlatch`)

## Design Tokens (extracted from preview CSS)

| Token              | Value                                    | Usage                                     |
| ------------------ | ---------------------------------------- | ----------------------------------------- |
| Brand color        | `#ff5959` (coral red)                    | Links, accent, checked checkbox, quantity |
| Background         | `#f8f9fd` (very light gray-blue)         | Page body background                      |
| Dropdown bg        | `#ffffff`                                | Dropdown container + button + list        |
| Text color         | `gray` (default)                         | Body text, labels                         |
| Heading color      | `#000`                                   | h1-h5, `.heading-section`                 |
| Font family        | `"Lato", Arial, sans-serif`              | Body + headings                           |
| Font weights       | 300, 400, 700 (Lato)                     | Light, normal, bold                       |
| Border radius      | `5px`                                    | Dropdown container                        |
| Search input bg    | `rgba(0,0,0,0.05)`                       | Search field background                   |
| Search radius      | `4px`                                    | Search input corners                      |
| Box shadow         | `0px 10px 30px -4px rgba(0,0,0,0.15)`    | Dropdown container shadow                 |
| Checkbox checked   | FontAwesome `\f14a` in `#ff5959`         | Custom checkbox when selected             |
| Checkbox unchecked | FontAwesome `\f0c8` in `rgba(0,0,0,0.1)` | Custom checkbox when deselected           |
| Transition         | `0.3s all ease`                          | Links, checkbox animation                 |
| Section padding    | `7em 0`                                  | `.ftco-section` vertical spacing          |

## Visual Description (from screenshot + preview DOM)

The template is a single centered UI component demo page with:

1. **Title section** — centered heading "Multiselect #10" in black, 28px
2. **Dropdown container** — centered in a `col-md-5`, containing:
   - **Dropdown button** — white background, full width, shows label "States"
     on the left and "(Any)" in coral red on the right, with a coral red
     chevron-down icon
   - **Dropdown list** (hidden by default, toggled on click) — white background
     with:
     - Search input at top with light gray background, placeholder "Search states"
     - Scrollable list (`max-height: 200px`) of checkbox items, each with a
       custom FontAwesome checkbox and state name label

The overall aesthetic is clean, minimal, and component-focused — a single
form element demo centered on a light background.

## Section Structure

| #   | Section         | Description                                                     |
| --- | --------------- | --------------------------------------------------------------- |
| 1   | Page wrapper    | Full-page light gray-blue background (`#f8f9fd`)                |
| 2   | Heading         | Centered "States Multi-Select" title (28px, black, bold)        |
| 3   | Dropdown button | Clickable trigger showing label + selected count + chevron icon |
| 4   | Dropdown panel  | Search input + scrollable checkbox list (togglable)             |

## Gherkin Requirements

### Scenario: Page renders with dropdown in default state

```
Given the user loads the page
Then the heading "States Multi-Select" is visible
And the dropdown button shows "States" and "(Any)"
And the dropdown list is not visible
```

### Scenario: Dropdown opens on button click

```
Given the user loads the page
When the user clicks the dropdown button
Then the dropdown list becomes visible
And the search input with placeholder "Search states" is displayed
And the list of states with checkboxes is displayed
```

### Scenario: Dropdown closes on second click

```
Given the dropdown list is open
When the user clicks the dropdown button
Then the dropdown list is hidden
```

### Scenario: Search filters states

```
Given the dropdown list is open
When the user types "Cal" in the search input
Then only states containing "Cal" are visible in the list
And states not matching "Cal" are hidden
```

### Scenario: Search with no results shows empty state

```
Given the dropdown list is open
When the user types "xyz" in the search input
Then no states are visible in the list
```

### Scenario: Checkbox selection updates count

```
Given the dropdown list is open
When the user checks the "Alabama" checkbox
Then the quantity text changes from "(Any)" to "(1)"
And the checkbox for "Alabama" shows a coral-red checked state
```

### Scenario: Multiple selections update count

```
Given the dropdown list is open
When the user checks "Alabama" and "Alaska"
Then the quantity text shows "(2)"
```

### Scenario: Deselecting updates count

```
Given the user has selected "Alabama" and "Alaska"
When the user unchecks "Alabama"
Then the quantity text shows "(1)"
```

### Scenario: Search clears when dropdown closes

```
Given the dropdown list is open and the user typed "Cal" in search
When the user clicks the dropdown button to close
And the user clicks the dropdown button to reopen
Then the search input is empty
And all states are visible again
```

### Scenario: Keyboard accessibility

```
Given the dropdown list is open
When the user presses Tab to navigate through checkboxes
Then focus moves through each checkbox in order
And the focused checkbox has a visible focus indicator
```

### Scenario: Visual styling matches reference

```
Given the page loads
Then the background color is #f8f9fd
And the dropdown container has a white background
And the dropdown container has a 5px border-radius
And the dropdown container has a subtle box shadow
And the brand accent color is #ff5959 (coral red)
And the font family is Lato, sans-serif
```

## Verification Checklist

- [ ] Page renders with centered heading and dropdown button
- [ ] Dropdown toggles open/closed on button click
- [ ] Search input filters states in real time
- [ ] Checkbox selection updates the "(N)" count display
- [ ] Deselection updates count correctly
- [ ] Custom checkbox styling matches (coral red when checked)
- [ ] Dropdown shadow and border-radius match reference
- [ ] Background color is #f8f9fd
- [ ] Font is Lato (Google Fonts)
- [ ] Search clears on dropdown close
- [ ] Keyboard navigation works through checkboxes
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` contains `optlatch.free.componentdock.com`
- [ ] `package.json` homepage is `https://optlatch.free.componentdock.com`

## Fidelity Notes

- Original uses jQuery for DOM manipulation; React version uses state + refs
- Original uses Lodash for filtering; React version uses native `.filter()`
- Original uses Font Awesome 4.7 for checkbox icons; React version uses
  lucide-react equivalents (CheckSquare / Square) or inline SVG
- Original uses Bootstrap 4 grid; React version uses Tailwind CSS utilities
- State list (50 US states) is hardcoded in the component
- The dropdown animation (show/hide) should use CSS transitions matching
  the original 0.3s ease
