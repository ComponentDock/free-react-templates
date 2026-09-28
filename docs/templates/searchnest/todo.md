# Searchnest — Design Notes

## Source

ColorLib Search 14: https://preview.colorlib.com/theme/colorlib-search-14/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-14.jpg

## Structure order

1. SearchFormBar (full-page centered horizontal form on gradient background)

## Section-by-section fidelity notes

### SearchFormBar

- Full viewport height, centered content, peach-to-light-pink gradient background
- Horizontal flex layout: 4 input fields + 1 search button in a row
- Each input field has:
  - A small gray label above ("GOING TO", "CHECK-IN", "CHECK-OUT", "GUESTS")
  - White background, light gray border, rounded corners (~8px)
  - Padding inside for comfortable spacing
- GOING TO: text input, placeholder "Destination, hotel name"
- CHECK-IN: date input (native or custom), placeholder "mm/dd/yyyy"
- CHECK-OUT: date input (native or custom), placeholder "mm/dd/yyyy"
- GUESTS: stepper control with - and + buttons flanking "N Guests" text, default 2
- Search button: gold/yellow background (#f0c75e), dark text, rounded corners, no border
- The whole form bar has a subtle shadow or is floating on the gradient

### Implementation notes

- Use Tailwind's gradient utilities: `bg-gradient-to-b from-[#f9e4d4] to-[#f5d6cc]`
- Inputs: `bg-white border border-gray-200 rounded-lg px-4 py-3`
- Search button: `bg-[#f0c75e] text-gray-800 rounded-lg font-medium`
- Guest stepper: simple +/- buttons with counter state (useState, min 1)
- No other sections — this is a single-component template
- Use `picsum.photos` for any placeholder images (none needed here)

## Component plan

- `App.tsx` — renders SearchFormBar
- `components/SearchFormBar.tsx` — the main (and only) component
- Tests: render all fields, guest increment/decrement, search click
