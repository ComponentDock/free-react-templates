# Template: SelectCap (Multi-Select Component)

## Purpose

Recreation of ColorLib Multi-Select 17 — a Bootstrap-based multi-select dropdown component with a max-selection limit.

- **Source:** https://colorlib.com/wp/template/multiselect-17/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-17/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Source mapping

| Field         | Value                                                                   |
| ------------- | ----------------------------------------------------------------------- |
| ColorLib slug | `multiselect-17`                                                        |
| Preview URL   | `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`          |
| Screenshot    | `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-17.jpg` |

## Design tokens (extracted from preview)

### Fonts

- **Primary / body:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`
- **Fallback headings also use Roboto**
- Font weights: 300 (light paragraphs), 400 (normal)

### Colors

| Token               | Value             | Usage                                       |
| ------------------- | ----------------- | ------------------------------------------- |
| Body background     | `#efefef`         | Page background                             |
| Body text           | `#26282b`         | Default text color (from ColorLib page CSS) |
| Paragraph text      | `#b3b3b3`         | Light paragraph color, weight 300           |
| Accent green        | `#8cba51`         | Selected item text + check mark icon        |
| Selection highlight | Bootstrap default | Dropdown item hover                         |

### Layout

- Single centered column (`col-md-5`) within a Bootstrap container
- Content vertical padding: `7rem 0`
- Heading font-size: 20px

### Component behavior

- Bootstrap-select plugin (`bootstrap-select.min.js`)
- `<select class="selectpicker form-control" multiple data-max-options="7">`
- Checkbox-style dropdown items (check-mark icon before each option)
- Max 7 selections enforced; item becomes unselectable after limit
- Selected items show green text (`#8cba51`) and green check mark

## Structure (section order)

1. **Page wrapper** — light gray `#efefef` background, centered content
2. **Heading** — "Multi-Select #7 (Limit to 7 selection)" centered, 20px
3. **Select component** — single Bootstrap multi-select dropdown with:
   - Checkbox-style items (check mark icon)
   - 50 US state options (Alabama through Wyoming)
   - Max 7 selection limit
   - Dropdown menu with scrollable list
4. **No footer** (component-only demo page)

## Gherkin scenarios

### Scenario: Page renders with correct heading

```gherkin
Given the user loads the SelectCap page
Then the heading "Multi-Select #7 (Limit to 7 selection)" is visible
And the heading is centered on the page
```

### Scenario: Dropdown opens and shows all state options

```gherkin
Given the user loads the SelectCap page
When the user clicks the select dropdown
Then 50 US state options are displayed
And each option has a checkbox-style indicator
```

### Scenario: Single selection works

```gherkin
Given the dropdown is open
When the user clicks "Alabama"
Then "Alabama" becomes selected
And the checkbox indicator turns green (#8cba51)
```

### Scenario: Multi-selection up to limit

```gherkin
Given the dropdown is open
When the user selects 7 different states
Then all 7 states show as selected with green indicators
And the selection count is 7
```

### Scenario: Max selection limit enforced

```gherkin
Given the user has selected 7 states
When the user tries to select an 8th state
Then the 8th state cannot be selected
And only 7 states remain selected
```

### Scenario: Deselecting an item

```gherkin
Given the user has selected 3 states
When the user clicks a selected state
Then that state becomes deselected
And the selection count decreases by 1
```

### Scenario: Responsive layout

```gherkin
Given the user loads the page on a mobile viewport
Then the select component remains centered
And the dropdown adjusts to fit the viewport width
```

## Verification checklist

- [ ] Heading text matches original: "Multi-Select #7 (Limit to 7 selection)"
- [ ] Heading is centered on the page
- [ ] Page background is light gray (#efefef or equivalent)
- [ ] Select component renders with 50 US state options
- [ ] Multiple selection is enabled
- [ ] Max 7 selections enforced
- [ ] Selected items show green text/check (#8cba51)
- [ ] Dropdown items have checkbox-style indicators
- [ ] Content has appropriate vertical padding
- [ ] Responsive on mobile viewports
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
