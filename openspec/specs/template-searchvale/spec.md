# Template: SearchVale (Search Form & Bar)

## Purpose

Recreation of ColorLib **Search Form V3** (`colorlib-search-3`).
Preview: https://colorlib.com/etc/searchf/colorlib-search-3/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-3.jpg
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

A single-section search form component: a category dropdown, text input, and
search button centered on a solid purple background. Designed as an embeddable
eCommerce search bar snippet.

## Design Tokens

| Token                | Value                              | Source                   |
|----------------------|------------------------------------|--------------------------|
| Page background      | `#a598ee` (purple/lavender)        | `.s003` background-color |
| Font family          | Poppins, sans-serif (400)          | `@font-face` + `.s003`   |
| Search bar background| `#ffffff`                          | `.inner-form` background |
| Search bar shadow    | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.inner-form` box-shadow |
| Search bar radius    | `3px`                              | `.inner-form` border-radius |
| Search button bg     | `#63c76a` (green)                  | `.btn-search` background |
| Search button hover  | `#50c058`                          | `.btn-search:hover`      |
| Input placeholder    | `#888888`                          | `::-webkit-input-placeholder` |
| Input text color     | `#555555`                          | `.input-field input`     |
| Category text color  | `#888888`                          | `.cl-sel-0` color        |
| Category chevron     | `#e5e5e5`                          | dropdown arrow color     |
| Separator color      | `rgba(0,0,0,0.1)`                  | `border-right` on category |
| Max-width            | `790px`                            | `form` max-width         |
| Input field height   | `68px` (desktop) / `50px` (mobile) | `.input-field` height    |
| Category width       | `200px` (desktop) / `100%` (mobile)| `.first-wrap` width      |
| Search button width  | `74px` (desktop) / `100%` (mobile) | `.third-wrap` width      |

## Structure

Single full-viewport section (`.s003`):
1. **Search form** — centered horizontally and vertically, max-width 790px
2. **Inner form container** — white background, flex row, box-shadow, 3px radius
3. **Category dropdown** — left segment (200px), native `<select>` with styled wrapper
4. **Text input** — center segment (flex-grow), placeholder "Enter Keywords?"
5. **Search button** — right segment (74px), green background, white magnifying glass icon (SVG)

## Gherkin Requirements

### Scenario: Page renders with purple background
```
Given the user opens the SearchVale page
Then the page background is purple (#a598ee)
And the viewport is filled with the background
```

### Scenario: Search form is centered on page
```
Given the user opens the SearchVale page
Then the search form is centered both horizontally and vertically
And the search form has a max-width of 790px
```

### Scenario: Category dropdown displays options
```
Given the user opens the SearchVale page
Then a "Category" dropdown is visible on the left of the search bar
When the user clicks the dropdown
Then the following options are visible:
  | option       |
  | Category     |
  | New Arrivals |
  | Sale         |
  | Ladies       |
  | Men          |
  | Clothing     |
  | Footwear     |
  | Accessories  |
```

### Scenario: Text input accepts keywords
```
Given the user opens the SearchVale page
Then a text input with placeholder "Enter Keywords?" is visible
When the user types "sneakers" into the input
Then the input value is "sneakers"
```

### Scenario: Search button is clickable
```
Given the user opens the SearchVale page
Then a green search button with a magnifying glass icon is visible on the right
When the user hovers over the search button
Then the button background darkens slightly
```

### Scenario: Responsive layout on mobile
```
Given the user opens the SearchVale page on a viewport narrower than 768px
Then the search form wraps vertically
And the category dropdown spans full width
And the text input spans full width
And the search button spans full width
```

## Verification Checklist

- [ ] Page background is `#a598ee`
- [ ] Font is Poppins (loaded via Google Fonts link in index.html)
- [ ] Search bar has white background, `3px` border-radius, `0px 8px 20px 0px rgba(0,0,0,0.15)` shadow
- [ ] Category dropdown shows all 8 options (Category + 7 items)
- [ ] Text input has placeholder "Enter Keywords?"
- [ ] Search button is `#63c76a` with white SVG icon
- [ ] Search button hover transitions to `#50c058`
- [ ] Form is centered horizontally and vertically in viewport
- [ ] Max-width is `790px`
- [ ] Responsive: wraps to vertical layout below 768px
- [ ] No reference to ColorLib anywhere in app code
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
