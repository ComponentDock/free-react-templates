# BookSpot — Implementation Notes

## Source

- **ColorLib:** Search Form Bar 18
- **Slug:** `colorlib-search-18`
- **Preview:** https://preview.colorlib.com/theme/colorlib-search-18/ (404 — screenshot-only reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-18.jpg

## Structure (section order)

This is a **single-section template** — one centered search card on a full-bleed background.

1. **Background layer** — full-viewport image (beach sunset), use `picsum.photos` placeholder
2. **Search card** — dark semi-transparent overlay, centered
   - Tab bar: HOTELS | CAR | FLIGHT
   - Where input (text, with search icon)
   - Check-In / Check-Out date inputs (side by side)
   - Travellers dropdown
   - SEARCH button (purple, right-aligned)

## Fidelity notes

### Layout
- Card is centered both vertically and horizontally on viewport
- Card has rounded corners (~8px) and dark background with ~85% opacity
- On mobile, card fills width with padding; fields stack vertically

### Colors
- Card: dark navy rgba(20,20,35,0.85)
- Active tab: white, bold, uppercase
- Inactive tabs: rgba(255,255,255,0.6)
- Inputs: white background, light border
- Labels: white, bold
- Search button: #6c63ff purple-blue, white text

### Typography
- Font: Poppins (Google Fonts)
- Labels: bold, white
- Button: uppercase, bold, white

### Components to build
- `SearchCard.tsx` — main card container
- `TabBar.tsx` — HOTELS/CAR/FLIGHT tabs with active state
- `WhereInput.tsx` — text input with search icon
- `DateInputs.tsx` — Check-In and Check-Out side-by-side
- `TravellersDropdown.tsx` — dropdown with default value
- `SearchButton.tsx` — purple CTA button

### Placeholder assets
- Background: `https://picsum.photos/seed/bookspot-beach/1920/1080`
- Icons: lucide-react (Search icon for the Where field)

### What differs from ColorLib
- No real search functionality (static form)
- Placeholder background image instead of proprietary beach photo
- No backend integration for hotel/car/flight search
- Footer replaced with Component Dock attribution
