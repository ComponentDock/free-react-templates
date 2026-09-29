# FindQuest — Design Notes

## Structure order

1. **Hero section** — full-viewport background image with dark overlay
2. **Search card** — gradient card centered on hero containing the form
3. **Form fields** — From, To, Passengers, Depart, Return, Search button

## Section-by-section fidelity notes

### Hero section
- Full-viewport height (`h-screen`) with background image covering the viewport
- Dark overlay (black ~30–40% opacity) for text/form contrast
- Background image: coastal/ocean landscape with palm trees and rocky cliffs
  - Use `https://picsum.photos/seed/findquest-hero/1920/1080` for placeholder
- Image uses `object-cover` to fill viewport

### Search card
- Gradient background: blue (#5b7fd4) → purple (#9b6dd4) → pink (#c47dd4)
  - Use `bg-gradient-to-r` from blue via purple to pink
- Rounded corners: `rounded-xl` (~12px border-radius)
- Semi-transparent: opacity ~0.9 (`opacity-90`)
- Max-width: `max-w-3xl` (~768px), centered with `mx-auto`
- Padding: `p-6` or `p-8`
- Position: vertically centered on hero (`flex items-center justify-center`)

### Row 1: From + To
- Two-column equal-width layout (`grid grid-cols-2 gap-4`)
- Labels: white, bold, `text-sm font-semibold text-white`
- Inputs: white background, `rounded-md`, `h-11`, placeholder gray
- Placeholders: "City, Region or Airport"
- Inputs use standard text input type

### Row 2: Passengers + Depart + Return + Search
- Four-column layout (`grid grid-cols-4 gap-4`)
- Passengers: select/dropdown with "1 Adult, 0 Children, 1 Room +" default
  - Options: various passenger combinations
  - White background, same styling as text inputs
- Depart: date input with `type="date"` or custom date picker
  - Placeholder: "mm/dd/yyyy"
  - White background, same input styling
- Return: same as Depart
- Search button: `bg-[#44c767] text-white font-bold uppercase text-sm rounded-md px-6 py-3`
  - Full height matching the input fields
  - Green color: `#44c767`

### Responsive behavior
- Mobile (<768px): single column, all fields stack vertically
- Tablet (768px–1024px): two columns for Row 1, full width for Row 2 fields
- Desktop (>1024px): original 2-column + 4-column layout

## Component structure

```
src/
  App.tsx              — Hero + SearchCard composition
  components/
    Hero.tsx           — Full-viewport hero with background image + overlay
    SearchCard.tsx     — Gradient card wrapper
    SearchForm.tsx     — The form with all fields
    FromField.tsx      — From location input
    ToField.tsx        — To location input
    PassengersField.tsx — Passenger count dropdown
    DepartDatePicker.tsx — Departure date picker
    ReturnDatePicker.tsx — Return date picker
    SearchButton.tsx   — Green SEARCH button
  index.css            — Tailwind entry + gradient tokens
```

## Implementation notes

- Use `type="date"` for date pickers (native HTML5) for simplicity
- Passengers dropdown can be a `<select>` with pre-defined options
- Gradient can be defined as a custom Tailwind color or inline style
- Hero image should use `picsum.photos` with a seed for determinism
- No external dependencies needed beyond the stack
