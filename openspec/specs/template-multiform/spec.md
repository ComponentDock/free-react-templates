# Template: Multiform (Form Element — Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect V15" — a free state multiselect dropdown snippet
using Bootstrap Framework.

- **Source**: https://colorlib.com/wp/template/multiselect-15/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-15/
- **Source slug**: `multiselect-15`
- **New name**: `multiform`
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the live preview HTML/CSS:

| Token | Value | Notes |
| --- | --- | --- |
| **Primary font** | `"Roboto", sans-serif` | Body + headings |
| **Heading font** | `"Poppins", sans-serif` | From CF font-face declarations |
| **Body background** | `#efefef` | Light gray page background |
| **Text color (body)** | `#26282b` | Dark text on light background |
| **Text color (secondary)** | `#b3b3b3` | Paragraph / muted text |
| **Dropdown button bg** | `#ffffff` | White background |
| **Dropdown button border** | `1px solid #aaa` | Subtle gray border |
| **Dropdown button shadow** | `0 1px 1px 0 rgba(0,0,0,0.1)` | Rest state |
| **Dropdown button shadow (hover/active)** | `0 2px 10px 0 rgba(0,0,0,0.1)` | Expanded state |
| **Selected item bg** | `#e1f2fb` | Light blue highlight |
| **Hover item bg** | `#f7f7f7` | Near-white hover |
| **Dropdown list shadow** | `0 15px 30px 0 rgba(0,0,0,0.1)` | Panel shadow |
| **Border radius** | `4px` | Consistent across button + dropdown + items |
| **Select-all label color** | `#aaaaaa` | Uppercase, 11px |
| **Select-all hover color** | `#000` | Black on hover |
| **Arrow indicator** | CSS triangle `border-top-color: #999` | Dropdown caret |
| **Body font size** | `16px` (base) | From style.css |
| **Button height** | `40px` | Dropdown trigger |
| **Dropdown item padding** | `5px 20px 5px 5px` | Button internal |
| **Content padding** | `7rem 0` | Page vertical padding |

## Layout

Single-page component showcase (no multi-section page). The design is a centered
form snippet:

1. **Heading** — centered `<h2>Multi-Select #5</h2>`, 20px, Roboto, bold
2. **Container** — centered Bootstrap grid (`col-md-5` inside `justify-content-center`)
3. **Multiselect component** — a `<select multiple>` enhanced into a styled dropdown:
   - Trigger button: white bg, rounded (4px), subtle shadow, shows "None selected"
   - Dropdown panel: white bg, elevated shadow (0 15px 30px rgba), rounded (4px)
   - Select-all toggle: uppercase small text
   - List items: 50 US states, checkbox-style with label
   - Selected items: light blue (#e1f2fb) background
   - Hover: #f7f7f7 background
   - Search/filter input at top of dropdown
   - Clean borderless items inside the panel

## Gherkin scenarios

### Scenario: Page renders correctly
```gherkin
Given the user navigates to the multiform page
Then a centered heading "State Selector" is visible
And a dropdown trigger button is visible below the heading
```

### Scenario: Dropdown opens on click
```gherkin
Given the user sees the dropdown trigger
When the user clicks the trigger button
Then a dropdown panel appears below the trigger
And the panel contains a search input
And the panel contains a "select all" toggle
And the panel lists 50 US states with checkbox indicators
And the dropdown button shadow changes to 0 2px 10px
```

### Scenario: Single state selection
```gherkin
Given the dropdown is open
When the user clicks "Alabama"
Then "Alabama" gets a light blue (#e1f2fb) background
And the trigger button text shows "1 selected"
```

### Scenario: Multiple state selection
```gherkin
Given the dropdown is open
When the user selects "California"
And the user selects "New York"
And the user selects "Texas"
Then all three items show light blue (#e1f2fb) background
And the trigger button text shows "3 selected"
```

### Scenario: Deselect a state
```gherkin
Given the user has selected "California" and "Texas"
When the user clicks "California" again
Then "California" loses the light blue background
And the trigger button text shows "1 selected"
```

### Scenario: Select all states
```gherkin
Given the dropdown is open
When the user clicks the "select all" toggle
Then all 50 states are selected
And the trigger button text shows "50 selected"
```

### Scenario: Deselect all states
```gherkin
Given all states are selected
When the user clicks the "select all" toggle again
Then no states are selected
And the trigger button text shows "None selected"
```

### Scenario: Search filters states
```gherkin
Given the dropdown is open
When the user types "New" in the search input
Then only states containing "New" are visible (New Hampshire, New Jersey, New Mexico, New York)
And other states are hidden
```

### Scenario: Search with no results
```gherkin
Given the dropdown is open
When the user types "ZZZ" in the search input
Then no states are visible in the list
```

### Scenario: Dropdown closes on outside click
```gherkin
Given the dropdown is open
When the user clicks outside the dropdown
Then the dropdown panel closes
And the trigger button shadow returns to rest state (0 1px 1px)
```

### Scenario: Keyboard accessibility
```gherkin
Given the dropdown trigger is focused
When the user presses Enter or Space
Then the dropdown opens
And the user can navigate options with arrow keys
And the user can select with Enter
And the user can close with Escape
```

### Scenario: Responsive layout
```gherkin
Given the user views the page on a mobile device (< 768px)
Then the heading is centered
And the dropdown takes full width within its container
```

## Verification checklist

- [ ] Heading matches Roboto font, centered, 20px
- [ ] Page background is #efefef
- [ ] Dropdown trigger has white bg, 4px border-radius, subtle shadow
- [ ] Dropdown panel has elevated shadow (0 15px 30px 0 rgba(0,0,0,0.1))
- [ ] Selected items have #e1f2fb background
- [ ] Hover items have #f7f7f7 background
- [ ] All 50 US states are listed
- [ ] Multi-select works (toggle individual items)
- [ ] Select-all / deselect-all works
- [ ] Search input filters the list in real time
- [ ] Component is keyboard-accessible (focus, Enter/Space, Escape)
- [ ] Responsive: works on mobile viewport
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Vite config registers injectUiSource()
