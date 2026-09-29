# SearchBeacon — Search Form Bar Template

Recreation of ColorLib **Search Form Bar 03**
(https://colorlib.com/wp/template/search-form-bar-03/)

Preview: https://preview.colorlib.com/theme/search-form-bar-03/
(Note: preview URL returned 404 at time of prep — spec based on screenshot analysis)

## Design Tokens (from screenshot analysis)

- **Font**: system default (no Google Fonts visible — heading appears to be serif or system serif)
- **Background**: #fafafa (very light gray, near-white)
- **Text color**: #000 (heading), #999 (placeholder)
- **Search bar**: white (#fff), border-radius 40px (pill), box-shadow 0px 5px 20px -12px rgba(0,0,0,0.34)
- **Search button**: coral/salmon (#e07057 or similar), 50x50px circle, positioned absolute left of input
- **Search icon**: white magnifying glass, 20px, centered inside coral circle button
- **Input**: height 50px, no border, no shadow, placeholder color rgba(0,0,0,0.7)
- **Section padding**: 7em vertical (centered on page)
- **Layout**: centered, max-width ~33% on large screens (col-lg-4), 50% on medium

## Screenshot Analysis

The template shows a minimalist search bar centered on a light gray background:

- Title "Search Form/Bar #03" centered above the search bar, dark serif-like text
- Pill-shaped (rounded) white search bar with subtle shadow
- Coral/salmon circular button with white magnifying glass icon positioned on the LEFT side of the search bar
- "Search..." placeholder text in the input area to the right of the button
- Clean, modern, minimal design
- Very sparse — only the search component, no other sections

## Structure

Single section with:
1. Centered heading
2. Search form with circular coral button + input (pill-shaped)
3. Footer with Component Dock branding

## Gherkin Requirements

### SearchBar component

- Renders a search input with placeholder "Search..."
- Displays a coral/salmon circular search button on the left with a white magnifying glass icon
- Has pill-shaped (rounded-full) styling
- Has white background with shadow
- The coral button is clickable
- Accepts keyboard input
- Prevents default form submission on Enter
- Focuses input when button is clicked

### App

- Renders the heading "SearchBeacon"
- Renders the SearchBar component
- Uses system/serif font for heading
- Has light gray (#fafafa) background
- Centers content vertically and horizontally on the page

### Footer

- Links to https://www.componentdock.com/
- Shows "Component Dock" branding
- Shows copyright text

## Verification Checklist

- [ ] Spec covers all visible sections from screenshot
- [ ] Design tokens match screenshot visual analysis
- [ ] Component structure matches section order
- [ ] Naming follows conventions (kebab-case, new original name)
- [ ] No ColorLib references in planned app code
- [ ] Footer links to Component Dock
- [ ] Placeholder images use picsum.photos
