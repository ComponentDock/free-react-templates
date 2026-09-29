# SeekQuest — Implementation Notes

## Source
- **ColorLib:** Search Form Bar 07
- **Slug:** search-form-bar-07
- **Preview:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-07/
- **Category:** Search Form & Bar Templates

## Structure Order
1. Page heading (centered, 28px Poppins)
2. Booking form container (white bg, horizontal flex on desktop)
   - Location (text input + search icon)
   - Property Type (select dropdown)
   - Property Status (select dropdown)
   - Price Limit (select dropdown)
   - Search Availability button (full-width, pink)

## Section-by-Section Fidelity Notes

### Heading
- Poppins font, 28px, weight 400 (normal), color black
- Centered text, margin-bottom for spacing
- Text: "SearchQuest" (our name, not the original)

### Form Container
- White background (#fff)
- On desktop (md+): horizontal flex row, 30px left padding
- On mobile: vertical stack, 20px all-side padding
- Max-width ~1140px (container class)

### Form Fields
- Each field has:
  - Label: 12px, uppercase, bold (700), pink (#ff62a5), letter-spacing 1px
  - Input/select: 40px height, transparent bg, 1px border rgba(0,0,0,0.05), 0 border-radius
  - Placeholder: black color
  - Icons: search icon (Location), down-arrow (selects) positioned right, rgba(0,0,0,0.3)
- Location: text input with magnifying glass SVG icon
- Property Type: select with options (Commercial, Office, Residential, Villa, Condominium, Apartment)
- Property Status: select (Rent, Sale)
- Price Limit: select ($5,000 to $2,000,000)

### Button
- Full-width block, align-self-stretch
- Background: #ff62a5 (hot pink)
- Text: white, uppercase, 14px, weight 500
- Subtitle: "Best Price Guaranteed!" — smaller, white, normal case
- Hover: background #000, text white
- Border-radius: 0 (sharp corners)
- No box-shadow on hover/focus

## Design Token Summary
- Brand: #ff62a5 (hot pink)
- Background: #fafafa
- Font: Poppins
- Form bg: white
- Labels: pink, uppercase, 12px
- Inputs: transparent bg, sharp corners, 40px height
- Button: pink, sharp corners, full-width
- Section padding: 7em vertical
