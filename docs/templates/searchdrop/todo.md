# Searchdrop — Design Notes & Task Outline

Source: ColorLib Search Form Bar 17
Preview: https://preview.colorlib.com/theme/search-form-bar-17/ (unreachable; screenshot analyzed)
ColorLib: https://colorlib.com/wp/template/search-form-bar-17/

## Structure order

1. **Navbar** — horizontal bar, brand left, nav links + search icon right
2. **Search bar strip** — expandable/collapsible, appears below navbar
3. **Main content** — placeholder area with instruction text

## Section-by-section fidelity notes

### Navbar
- Fixed/sticky at top, white background, horizontal flex layout
- Left: "Brand" (or "Searchdrop") in brand blue (#4A90D9), bold
- Right: nav links ("Home", "About", "Contact") in dark gray, spaced evenly
- Far right: search icon (magnifying glass from lucide-react)
- Height: ~60px, padding horizontal

### Search bar strip
- Full-width horizontal bar directly below navbar
- Background: #F5F5F5 (light gray)
- Contains: search input (white bg, rounded, "Search..." placeholder) + blue "Search" button (pill shape, ~#4A90D9 bg, white text) + X close icon
- Toggle animation: slide down or fade in on search icon click
- Close: X icon click, Escape key, or click outside

### Main content
- White background, centered text
- Instructional text: "Please click the search icon toggle button top right." in gray
- Minimal — this template is primarily the search bar component

## Implementation tasks

1. Create app scaffold (copy simplest existing app, rename package)
2. Build Navbar component with brand, nav links, search icon
3. Build SearchBar component with input, button, close icon
4. Implement toggle state (open/close) with keyboard (Escape) and click-outside handlers
5. Style with Tailwind using extracted design tokens
6. Make responsive for mobile
7. Add accessibility (aria-labels, focus management)
8. Write tests (toggle open/close, keyboard, form submit, accessibility)
9. Verify 100% coverage
10. Commit and push
