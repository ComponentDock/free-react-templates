# Searchbloom — Implementation Notes

## Template: Searchbloom (ColorLib Search Form Bar 15)

### Structure (section order)

1. **Navbar** — horizontal flex container
   - Left: brand name ("Brand") in blue, bold/semi-bold
   - Right: nav links (Home, About, Contact) + search icon (magnifying glass from lucide-react)
2. **Search Overlay** — slides down from top on search icon click
   - Full-width strip with light gray background
   - Centered search input (white bg, rounded, "Search..." placeholder)
   - Blue (#4A7DFA) pill button ("Search") to the right of input
   - Close (×) button on far right
3. **Content Area** — white background, centered placeholder text

### Design fidelity notes

- **Brand color:** #4A7DFA — used on brand text, nav links, search button
- **Button:** solid blue pill (`rounded-full`), white text, ~40px height
- **Search input:** white bg, subtle border or shadow, rounded corners
- **Overlay animation:** slide-down transition (CSS transform or height transition)
- **Close icon:** × symbol or X icon from lucide-react, positioned top-right of overlay
- **Font:** Inter or Roboto via Google Fonts link in index.html
- **Overall aesthetic:** minimal, clean, lots of whitespace, search-focused

### Implementation approach

1. Copy simplest existing app as base (e.g. `searcharc`)
2. Rename package to `@free-react-templates/searchbloom`
3. Build `Navbar.tsx` with brand, links, search icon
4. Build `SearchOverlay.tsx` as a toggleable component (useState for open/close)
5. Compose in `App.tsx`: Navbar + SearchOverlay + empty ContentArea
6. Style with Tailwind classes using the #4A7DFA brand color
7. Add transition for overlay slide-down animation
8. Tests: cover navbar rendering, overlay open/close, search input, responsive

### Key differences from source

- No ColorLib branding or attribution in the app
- Footer links to Component Dock instead of ColorLib
- Placeholder images via picsum.photos if any images are added
- Brand name kept as "Brand" (matches source placeholder)
