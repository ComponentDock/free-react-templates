# Searchkick — Implementation Tasks & Design Notes

Source: ColorLib "Colorlib Search Form V21" (slug: `colorlib-search-21`)
New name: `searchkick`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: flex centered, `bg-[#d8f4fe]`, min-h-screen
   - Compose the two search input components

2. **Rounded pill search input** (`src/components/PillSearch.tsx`)
   - Collapsed: 60×60 white circle with magnifying glass SVG (left-aligned)
   - Click → expand to 100% width with CSS transition (`width .2s ease-in`)
   - Input with placeholder "Keyword", `font-weight: 300`, placeholder color `#ccc`
   - Clear button (X icon) appears when input has text, absolute positioned right
   - Blur outside → collapse back to 60×60 circle

3. **Square search input** (`src/components/SquareSearch.tsx`)
   - Collapsed: 60×60 white square with magnifying glass SVG (right-aligned)
   - Click → expand to 100% width with CSS transition (`width .3s`)
   - Input type="search", placeholder "Keyword", placeholder color `#666`
   - Minimal border-radius (3px)
   - Blur outside → collapse back to 60×60 square

4. **Shared components**
   - MagnifyingGlassIcon (SVG, `#ccc` fill, 24×24 viewBox)
   - ClearIcon (X SVG, `#ccc` fill, 22×22)
   - Use `packages/ui` cn() for class composition

5. **Styling** (`src/index.css`)
   - Tailwind @theme for brand color `#d8f4fe` (ice-blue)
   - Font: Poppins 300+400 via Google Fonts link in `index.html`
   - Custom transition utilities if needed

6. **Tests** (`src/components/*.test.tsx`)
   - PillSearch: renders collapsed, expands on click, clears text, collapses on blur
   - SquareSearch: renders collapsed, expands on click, collapses on blur
   - App: renders both inputs, full viewport layout
   - Accessibility: aria-labels, keyboard navigation

## Fidelity notes

- **Color match**: Background `#d8f4fe` exact from CSS. White inputs `#fff`.
- **Typography**: Poppins 300 (placeholder weight) + 400 (input text) exact.
- **Animation timing**: Pill `.2s ease-in`, Square `.3s` — match original.
- **Icon placement**: Pill icon left (background-position `14px 14px`), Square icon right (`calc(100% - 14px) 14px`).
- **Row spacing**: `80px` margin-bottom between the two input rows.
- **Form max-width**: `570px` centered.
- **Input dimensions**: Collapsed 60×60px, expanded 100% width (max 570px).
- **No borders/shadows**: Both inputs have `border: 0` and no box-shadow.
- **Placeholder styling**: Pill = `#ccc` + weight 300; Square = `#666`.
- **Clear button**: Absolute positioned in pill input, opacity 0 → visible with text, SVG X icon `#ccc` → `#333` on hover.

## Potential implementation pitfalls

- The original uses `all: revert` CSS reset — in React + Tailwind, this is handled by Tailwind's base layer instead.
- The original inputs use `width: 60px` with `overflow: visible` and CSS transitions on `width` — in Tailwind this needs a custom class or inline style for the animation.
- The `input[type="search"]` needs `-webkit-appearance: textfield` to hide the default search clear button.
- The expand-on-click interaction requires tracking focus state and outside-click detection (useRef + useEffect).
