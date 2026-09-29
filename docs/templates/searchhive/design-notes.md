# SearchHive — Design Notes

## Source
- ColorLib: Search Form Bar 11
- URL: https://colorlib.com/wp/template/search-form-bar-11/
- Preview: 404 (unreachable)
- Reference: screenshot analysis

## Structure order
1. Navbar (brand text left, search input right)
2. Center body (instructional note text)
3. Footer (Component Dock link)

## Section-by-section fidelity notes

### Navbar
- Full-width horizontal flex row, items centered, justify-between
- Left: "Brand" text in blue semibold (h1 or span)
- Right: search input with magnifying glass icon
- Search input: white bg, gray border, slightly rounded (4px)
- Placeholder: "Enter keyword and hit enter..."
- Icon: Search from lucide-react, blue, positioned absolute right inside input
- Toggle behavior: clicking the icon toggles input visibility/focus

### Body area
- Centered instructional note: "Please click the search icon🔍 toggle button top right"
- Gray text (#6b7280), small font (14px)
- Light background

### Footer
- Simple footer with Component Dock link
- Follows existing Footer.tsx pattern from other search-form-bar templates

## Implementation notes
- Use existing packages/ui components (cn, Button if needed)
- SearchBar component: useState for query, useState for expanded/toggled
- useRef + useEffect for click-outside-to-close
- Lucide-react Search icon for magnifying glass
- No new dependencies needed
- Tailwind CSS 4 @theme tokens for brand blue (#2563eb)
