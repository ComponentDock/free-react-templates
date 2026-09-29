# ProbeBar — Search Form Bar Template

Recreation of ColorLib **Search Form/Bar 06**
(https://colorlib.com/wp/template/search-form-bar-06/)

## Design Tokens (from screenshot analysis)

- **Font**: System sans-serif (Helvetica/Arial-like), no Google Font loaded
- **Heading font size**: ~24px, weight 400, color #333, centered
- **Background**: #f5f5f5 (very light gray, almost white)
- **Search bar**: white (#fff) input with rounded-left corners, light gray border
- **Search button**: olive-green (#8B9A3B or similar) circle, ~50px diameter, overlapping the left edge of the input
- **Search icon**: white magnifying glass inside the green circle
- **Input**: "Search..." placeholder, transparent/white background, no visible border on the input itself
- **Section padding**: generous vertical padding (~8em)
- **Layout**: centered, single component, clean minimal aesthetic
- **Overall style**: Ultra-minimal — just a title and one search bar component. No footer section in original; recreation will add Component Dock footer per convention.

## Screenshot Analysis

The template is a single-component showcase: a centered heading "Search Form/Bar #06" above a search bar. The search bar features a distinctive olive-green circular button with a white magnifying glass icon, positioned at the left of a rounded input field. The green circle overlaps or is flush with the input's left edge, creating a two-part pill shape (circle + rounded rectangle). The background is a clean light gray. The design is extremely minimal — just the search component, no navigation, no cards, no other content. The green is a muted olive tone (not bright green), giving an earthy, understated feel.

## Structure

Single section with:
1. Centered heading ("Search Form/Bar #06" → will use descriptive title)
2. Search form: circular green button (left) + rounded input field (right)
3. Footer with Component Dock branding (added per convention)

## Scenarios

### ProbeBar component
- GIVEN the page loads, THEN the heading is visible and centered
- GIVEN the page loads, THEN the search input is visible with placeholder "Search..."
- GIVEN the page loads, THEN the green circular search button is visible to the left of the input
- GIVEN the user clicks the search button, THEN no page navigation occurs (form submit prevented)
- GIVEN the user types in the search input, THEN the input value updates
- GIVEN the user focuses the input, THEN the input is focused and ready for typing
- GIVEN the footer is present, THEN it links to componentdock.com

### Responsive behavior
- GIVEN a mobile viewport, THEN the search bar scales down proportionally
- GIVEN a desktop viewport, THEN the search bar is centered with max-width constraint

## Verification Checklist

- [ ] Green circular search button with white magnifying glass icon
- [ ] Pill-shaped search bar (circle button + rounded input)
- [ ] Light gray (#f5f5f5) page background
- [ ] Centered heading above search bar
- [ ] "Search..." placeholder text
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Package name: @free-react-templates/probebar
- [ ] CNAME: probebar.free.componentdock.com
