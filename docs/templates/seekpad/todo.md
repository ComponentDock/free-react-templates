# Seekpad — Implementation Notes

Source: ColorLib Search Form V20 (colorlib-search-20)
New name: seekpad
Preview: https://preview.colorlib.com/theme/colorlib-search-20/

## Section Order (top to bottom)

1. **Full-viewport wrapper** — background image (picsum.photos placeholder), min-height 100vh
2. **Centered card** — max-width 900px, positioned with 240px top padding
   - Gradient overlay: linear-gradient(to top, #3d2161, #004d91) at 0.9 opacity
   - 10px border-radius
3. **Form grid** — 3 rows, 2 columns each (20px gap via calc)
   - Row 1: From text input | To text input
   - Row 2: Depart date input | Return date input
   - Row 3: Passengers dropdown field | Search button
4. **Passengers dropdown** — absolute positioned below input
   - Room list with Adults/Children +/- counters
   - "Add room" link at bottom with top border
   - Max-height 210px with scroll
5. **Footer** — Component Dock branding link

## Component Structure

```
src/
  App.tsx              — page layout (full-viewport bg + centered card)
  components/
    SearchCard.tsx     — the gradient card container
    FromToRow.tsx      — From/To text inputs
    DateRow.tsx        — Depart/Return date pickers
    PassengersRow.tsx  — Passengers field + dropdown
    QuantityControl.tsx — +/- buttons with number input
    RoomList.tsx       — Room entries with Adults/Children
```

## Fidelity Notes

- Card gradient is a pseudo-element (::before) overlay — use an absolute-positioned div or Tailwind bg-gradient
- Card content sits above the gradient (relative z-index)
- Inputs are plain text (no framework) — use native `<input>` with Tailwind classes
- Date inputs are native `<input type="date">`
- Quantity buttons are 32px circles with 2px border — use Tailwind rounded-full + border
- Button hover: #ff4b5a → #eb3746 (slightly darker red)
- Quantity hover: #ccc → #6c7ae0 (periwinkle)
- Dropdown font switches to Lato (keep Poppins for form labels/inputs)
- Mobile breakpoint at 767px: columns become full-width, padding changes
- No images needed beyond the background — all form elements are native HTML
