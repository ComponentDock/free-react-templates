# SearchMode — Implementation Todo

Source: ColorLib "Colorlib Search 8"
Preview: https://preview.colorlib.com/theme/colorlib-search-8/ (404, using downloaded CSS)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-8.jpg

## Structure (component order)

1. `App.tsx` — root wrapper with full-viewport background image + flex centered layout
2. `SearchCard.tsx` — white card container (basic search) + dark card container (advanced search)
3. `BasicSearch.tsx` — search input row: input + magnifying glass icon on RIGHT
4. `AdvancedSearch.tsx` — heading + 3×2 filter grid + action row (result count + buttons)
5. `FilterRow.tsx` — reusable row component (3 columns, flex spaced)
6. `FilterSelect.tsx` — individual dropdown select with bottom border + chevron icon
7. `ActionButton.tsx` — orange Search button / transparent Reset button

## Section-by-section fidelity notes

### App wrapper
- Full viewport (`min-h-screen`), flex centered (`flex justify-center items-center`)
- Background: placeholder image (`https://picsum.photos/seed/searchmode/1920/1080`)
- Padding: `15px`

### BasicSearch
- White card background, `box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.15)`
- Border-radius: `3px`, height `70px`
- Input: `font-size: 18px`, `color: #555`, placeholder `#999`, placeholder text "Type Keywords"
- Search icon: magnifying glass SVG, positioned absolute RIGHT, `fill: #ccc`, `width: 34px`
- Icon wrapper: `width: 60px`, centered vertically, `justify-content: center`

### AdvancedSearch
- Background: `#000` (black), padding `40px`, same box-shadow + border-radius
- "Advanced Search" heading: `font-size: 15px`, color `#999`, margin-bottom `26px`
- Two filter rows: flex, `justify-content: space-between`, `align-items: center`
- Row 1 margin-bottom: `20px`, Row 2 margin-bottom: `46px`
- Each filter: `width: calc(33.333% - 30px)`, height `40px`, `border-bottom: 2px solid #ccc`
- Filter text color: `#666`
- Chevron: SVG data URI, fill `#999`, background-position right center

### Action row (third row)
- Row 3: `display: flex`, `justify-content: space-between`, `align-items: center`, width 100%
- Left side: result count badge — `width: 110px`, bold `14px`, white text, orange number (`#e45c27`)
- Right side: group-btn container with Reset button + Search button
- Search button: `#e45c27` bg (orange), white text, bold `14px`, height `40px`, min-width `100px`, border-radius `3px`, hover `#d7501b`
- Reset button: transparent bg, white text (`#fff`), bold `14px`, height `40px`, min-width `100px`, hover stays white
- Both buttons: `transition: all .2s ease-out`

### Responsive (≤767px)
- Filter rows: `display: block`, each filter full width, margin-bottom `20px`
- Search input padding: `10px 60px 10px 40px`
- Search icon: `26px`, container centered

## Tokens to put in @theme

```css
@theme {
  --color-brand-orange: #e45c27;
  --color-brand-orange-hover: #d7501b;
  --color-dark-bg: #000000;
  --color-text-primary: #555;
  --color-text-filter: #666;
  --color-text-muted: #999;
  --color-border-filter: #ccc;
  --color-icon-search: #ccc;
  --color-result-orange: #e45c27;
  --font-roboto: 'Roboto', sans-serif;
}
```

## Key decisions

- Background image: use `https://picsum.photos/seed/searchmode/1920/1080` as placeholder (original uses a fashion photo)
- Use native `<select>` elements (not Choices.js) for filter dropdowns
- Magnifying glass icon: inline SVG (same path as original)
- Chevron icon: inline SVG or lucide-react ChevronDown
- Result count and buttons are in the dark advanced section (not in the basic search bar)
- "Reset" button text (not "Delete") — matches original
