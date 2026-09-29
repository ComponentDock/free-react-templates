# SearchBlue — Implementation Todo

Source: ColorLib "Colorlib Search 7"
Preview: https://preview.colorlib.com/theme/colorlib-search-7/ (404, using downloaded CSS)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-7.jpg

## Structure (component order)

1. `App.tsx` — root wrapper with full-viewport sky blue background + flex centered layout
2. `SearchCard.tsx` — white card container (box-shadow, border-radius) holding both tiers
3. `BasicSearch.tsx` — search input row: icon + input + result count badge
4. `AdvancedSearch.tsx` — heading + 3×2 filter grid + action buttons
5. `FilterRow.tsx` — reusable row component (3 columns, flex spaced)
6. `FilterSelect.tsx` — individual dropdown select with bottom border + chevron icon
7. `ActionButton.tsx` — green Search button / transparent Delete button

## Section-by-section fidelity notes

### App wrapper
- Full viewport (`min-h-screen`), flex centered (`flex justify-center items-center`)
- Background: `#00b5e9` (sky blue)
- Padding: `15px`

### BasicSearch
- White card background, `box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.15)`
- Border-radius: `3px`, height `70px`
- Search icon: magnifying glass SVG, positioned absolute left, `fill: #ccc`, `width: 34px`
- Input: `font-size: 18px`, `color: #555`, placeholder `#999`
- Result count: absolute right, bold `14px`, green number (`#57b846`), gray "results" (`#555`)

### AdvancedSearch
- Background: `#fff`, padding `40px`, same box-shadow + border-radius
- "Advanced Search" heading: `font-size: 15px`, color `#999`, margin-bottom `26px`
- Two filter rows: flex, `justify-content: space-between`, `align-items: center`
- Row 1 margin-bottom: `20px`, Row 2 margin-bottom: `46px`
- Each filter: `width: calc(33.333% - 30px)`, height `40px`, `border-bottom: 2px solid #ccc`
- Chevron: SVG data URI, fill `#999`, background-position right center

### Action buttons
- Row 3 (third): flex, margin-bottom `0`
- Search button: `#57b846` bg, white text, bold `14px`, height `40px`, min-width `100px`, border-radius `3px`, hover `#4ea63f`
- Delete button: transparent bg, `#555` text, bold `14px`, height `40px`, min-width `100px`, hover `#000`
- Both buttons: `transition: all .2s ease-out`

### Responsive (≤767px)
- Filter rows: `display: block`, each filter full width, margin-bottom `20px`
- Search input padding: `10px 110px 10px 60px`
- Search icon: `26px`, container centered

## Tokens to put in @theme

```css
@theme {
  --color-skyblue: #00b5e9;
  --color-brand-green: #57b846;
  --color-brand-green-hover: #4ea63f;
  --color-text-primary: #555;
  --color-text-secondary: #888;
  --color-text-muted: #999;
  --color-border-filter: #ccc;
  --color-icon-search: #ccc;
  --color-result-green: #57b846;
  --font-roboto: 'Roboto', sans-serif;
}
```

## Key decisions

- Use native `<select>` elements (not a Choices.js library) for filter dropdowns — simpler, no extra dependency
- Magnifying glass icon: inline SVG (same path as original)
- Chevron icon: inline SVG or lucide-react ChevronDown
- Result count is static text (no real data backend)
- Placeholder images not needed (this is a form widget, not a page template)
