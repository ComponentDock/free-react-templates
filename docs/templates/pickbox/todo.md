# Pickbox — Implementation Notes

## Source
- ColorLib: Multiselect 03
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-03/
- New name: pickbox

## Structure (section order)
1. Page container (centered, white background)
2. Title section — "Multiselect #03" heading, centered
3. Form section — "Select Language" label + multi-select dropdown

## Component breakdown
- `App.tsx` — Single page layout with centered content
- `components/MultiselectDropdown.tsx` — Custom multi-select dropdown component
  - Label "Select Language"
  - Dropdown trigger showing selected items or "All" placeholder
  - Dropdown menu with language options
  - Multi-select: toggle items on/off
  - Brand blue (#3e64ff) for selected/hover states
  - Light gray border (#e6e6e6), subtle shadow when open
  - Smooth transitions (0.3s ease)

## Design fidelity notes
- **Font**: Load Lato from Google Fonts (weights 300, 400, 700)
- **Brand color**: #3e64ff for links, active states, hover highlights
- **Dropdown border**: #e6e6e6, active border same
- **Dropdown shadow**: 0px 3px 19px -15px rgba(0,0,0,0.41)
- **Body text color**: gray (Tailwind: text-gray-500)
- **Heading color**: #000 (Tailwind: text-black)
- **Section padding**: 7em top/bottom (Tailwind: py-28)
- **Heading size**: 28px (Tailwind: text-[28px])
- **Dropdown item font**: 13px
- **Line height**: 1.8 (Tailwind: leading-relaxed)

## Key differences from original
- No jQuery, Semantic UI, or Bootstrap — pure React + Tailwind
- Custom dropdown component instead of Semantic UI dropdown
- Placeholder images via picsum.photos (not needed for this template)
- Footer links to Component Dock

## Test scenarios
1. Page renders heading
2. Dropdown shows with label
3. Default state shows "All"
4. Dropdown opens on click
5. Single item selection
6. Multiple item selection
7. Item hover styling
8. Responsive layout
