# Multichip — Tasks & Design Notes

## Source mapping

- **ColorLib source:** "Multiselect 19"
- **Source slug:** `multiselect-19`
- **Source URL:** https://colorlib.com/wp/template/multiselect-19/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-19/
- **New name:** `multichip`
- **Package:** `@free-react-templates/multichip`

## Section order (single-section layout, triple widget)

1. **Wrapper** — `.content` div with `padding: 7rem 0`, light grey background
2. **Heading** — `<h2>` centered: "Multi-Select #9"
3. **Container** — Bootstrap-style grid: `container` > `row justify-content-center` > `col-md-5`
4. **Widget 1 (default)** — Multi-select chip widget with grey chips
5. **Widget 2 (green)** — Multi-select chip widget with green chips (`#c7f0db`)
6. **Widget 3 (blue)** — Multi-select chip widget with blue chips (`#d3f4ff`)

## Fidelity notes

### Layout

- Single centered column (`col-md-5`) on a grey background
- No navbar, no hero, no footer beyond Component Dock attribution
- Vertical padding: `7rem 0` on the content wrapper
- Heading: centered, `font-size: 20px`, Roboto font
- Three widget instances stacked vertically with spacing between them

### Multi-select behavior (Chosen.js pattern)

- Click input area to open dropdown panel
- Dropdown shows scrollable list of 8 tech-category options
- Selecting an option adds a colored chip/tag inside the input area
- Each chip has an × close button to remove it
- Removed options reappear in the dropdown list
- Clicking outside or pressing Escape closes the dropdown
- No search input (unlike Chklmt/Multiselect 17)

### Design tokens (from preview CSS)

- Font: Roboto (Google Fonts, weights 300/400/500)
- Body background: `#efefef` (light grey)
- Paragraph text: `#b3b3b3`, weight 300
- Heading: 20px, Roboto, default dark color
- Input container: border-radius `4px`, box-shadow `0 1px 4px 0 rgba(0,0,0,0.1)`
- Dropdown: border-radius `4px`, heavy box-shadow `0 15px 30px 0 rgba(0,0,0,0.2)`
- Chip default color: `#e5e4cc` (warm beige)
- Chip green variant: `#c7f0db`
- Chip blue variant: `#d3f4ff`
- Chip border: `#aaa` (Chosen default), no border-radius on chips (sharp edges)
- Bootstrap 4 defaults for form controls, grid, dropdowns

### Implementation approach

- Use a React custom multi-select chip component (NOT the Chosen.js jQuery plugin)
- Implement chip tags with lucide-react `X` icon for close buttons
- Implement dropdown panel with scrollable option list
- Implement three color theme variants using Tailwind utility classes
- Use picsum.photos for any placeholder imagery (none expected — pure form)
- Footer: Component Dock attribution link only

### What differs from original

- React + Tailwind instead of jQuery + Chosen.js + Bootstrap 4
- No jQuery dependency
- No Chosen.js plugin dependency
- Same visual layout: centered heading + three stacked multi-select widgets
- Same 8 tech-category options
- Same chip-tag selection pattern
- Three color themes preserved (grey, green, blue)
