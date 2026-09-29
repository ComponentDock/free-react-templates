# Searchcraft — Implementation Tasks

Source: ColorLib "Search Form Bar 07"
Preview: https://preview.colorlib.com/theme/search-form-bar-07/ (404 — unreachable)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-07.jpg
New name: searchcraft
Stack: Vite + React 19 + Tailwind 4 + TypeScript

## Structure Order

1. `App.tsx` — page shell (light gray background, centered title, form card)
2. `components/SearchFormBar.tsx` — the main horizontal form bar component
3. `components/LocationInput.tsx` — text input with magnifying glass icon
4. `components/SelectField.tsx` — reusable select dropdown with label + chevron
5. `components/SearchButton.tsx` — the pink/magenta CTA button
6. `index.css` — Tailwind entry + theme tokens (brand color #E91E63, bg #f5f5f5)

## Section-by-Section Fidelity Notes

### Page Shell
- Background: solid light gray #f5f5f5, no gradient/pattern
- Title: "Search Form/Form #07" centered, dark gray #333, large font
- White card below title with subtle border-radius (4px), padding
- Card uses flexbox row for horizontal field layout

### Form Fields (4 fields in horizontal row)
- **Location**: text input, label "LOCATION" uppercase pink, placeholder
  "City/Locality Name" gray, magnifying glass icon (Search from lucide)
  at right end inside input
- **Property Type**: select dropdown, label "PROPERTY TYPE" uppercase pink,
  placeholder "Type" gray, chevron-down icon, options: Apartment, House,
  Villa, Office
- **Property Status**: select dropdown, label "PROPERTY STATUS" uppercase
  pink, placeholder "Type" gray, chevron-down icon, options: For Sale,
  For Rent, Sold
- **Price Limit**: select dropdown, label "PRICE LIMIT" uppercase pink,
  default "$5,000", chevron-down icon, options: $1K, $5K, $10K, $50K,
  $100K+

All four fields have equal width in the flex row.

### CTA Button
- Full height of the field row (align-stretch on the flex container)
- Background: #E91E63 (Material pink 500)
- No border-radius (sharp corners per screenshot)
- Two lines: "SEARCH AVAILABILITY" bold uppercase white,
  "Best Price Guaranteed!" smaller white
- Hover: darken to ~#C2185B

### Footer
- Minimal: just the Component Dock link
- Links to https://www.componentdock.com/

## Design Tokens (from screenshot analysis)

- Brand: #E91E63 (pink/magenta)
- Page bg: #f5f5f5
- Card bg: #ffffff
- Title: #333
- Labels: #E91E63 uppercase
- Placeholder: #999
- Input border: #e0e0e0
- Input text: #333
- CTA bg: #E91E63, text: #ffffff
- Font: system sans-serif (no distinctive font visible in screenshot)
- Card radius: 4px
- Button radius: 0px

## Implementation Notes

- This is a SINGLE-COMPONENT template — the entire template is
  one search form bar, not a full page with hero/nav/sections.
- No images needed (pure form UI).
- Use lucide-react for Search and ChevronDown icons.
- The preview was 404; all tokens are from the screenshot.
- The design is from the "Search Form Bar" series (07 of ~11),
  which are compact search bar components for real-estate sites.
