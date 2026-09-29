# QueryKit — Design Notes

## Source
- ColorLib: Search Form/Bar 08
- Preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-08/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-08.jpg

## Structure (section order)
1. Hero section (full-width blue background)
   - Title: centered, white, 28px Poppins
   - Subtitle: centered, white, 24px Poppins
   - Search form (horizontal flex row):
     - Keywords text input + search icon
     - Location text input + search icon
     - Budget select dropdown + arrow-down icon
     - "SEARCH JOB" button (black, uppercase)

## Fidelity Notes

### Colors
- Brand: #1089ff (bright blue) — body background, icon color, input placeholder/text
- Button: #000000 background, #ffffff text
- Inputs: #ffffff background, #1089ff text/placeholder

### Typography
- Font: Poppins (Google Fonts), weights 400 and 700
- Body: 16px, line-height 1.8
- Heading: 28px, weight 400, white
- Subtitle: 24px, white
- Input/button: 14px

### Layout
- Single section, centered container (max-width 1140px)
- Form row: 4 equal columns on desktop (flex, gap via padding)
- Mobile: stack vertically (column layout)
- Section padding: 7em top/bottom

### Form Elements
- Input height: 40px (within booking-form context)
- Border: 1px solid rgba(0,0,0,0.05), radius 4px
- Placeholder color: #1089ff (blue, matches brand)
- Search icon: absolute positioned, right side, blue
- Dropdown: appearance:none, custom arrow icon

### Button
- Height: 40px, width: 100% of column
- Background: #000, text: #fff, uppercase, weight 500
- Border-radius: 4px, no border
- Hover: no visual change (stays black)

### Accessibility
- Inputs need proper labels (original uses placeholder only)
- Button needs aria-label
- Form needs proper form semantics
- Icons should be decorative (aria-hidden)

## Implementation Notes
- Use Tailwind's @theme for brand color #1089ff
- Use lucide-react for search and chevron-down icons
- Google Fonts Poppins via <link> in index.html
- This is a single-component template (no navbar, no footer beyond CTA)
- Footer: "Made with Component Dock" link
