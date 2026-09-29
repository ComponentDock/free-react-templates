# Searchpop — Implementation Notes

Source: ColorLib Search Form 21 (colorlib-search-21)
New name: searchpop
Preview: https://preview.colorlib.com/theme/colorlib-search-21/

## Section Order (top to bottom)

1. **Full-viewport container** — light blue #d8f4fe background, flex center
2. **Form wrapper** — max-width 570px, two rows with 80px spacing
   - Row 1: Round pill search input (collapses to 60x60 circle, expands on focus)
   - Row 2: Square search input (collapses to 60x60 square, expands on focus)
3. **Footer** — Component Dock branding

## Component Structure

```
src/
  App.tsx              — page layout (full-viewport bg + centered form)
  components/
    SearchBar.tsx      — reusable expandable search input (accepts shape variant)
    ClearButton.tsx    — the X clear button that shows/hides based on input value
    Footer.tsx         — Component Dock link
```

## Fidelity Notes

- Two input variants: "round" (border-radius 30px) and "square" (border-radius 3px)
- Both start at 60x60px and expand to 100% width on focus
- Round input: left-aligned search icon via background-image SVG, clear button on right
- Square input: right-aligned search icon via background-image SVG, no clear button
- The expand/collapse is driven by CSS :focus state — use Tailwind group-focus or state management
- Round input transition: 0.2s ease-in; square input transition: 0.3s
- Clear button: opacity-based show/hide (0 default, 1 when text present)
- Clear button click clears input value and triggers collapse
- Click-outside detection needed for collapse behavior (useRef + useEffect)
- Search icon SVGs are inline data URIs — use lucide-react Search icon instead
- Background color #d8f4fe as full-page bg
- Poppins font loaded via Google Fonts (300 + 400 weights only)
