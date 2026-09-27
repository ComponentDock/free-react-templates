# Regvox — Implementation TODO & Design Notes

## Structure (section order)

1. **Page wrapper** — light gray bg (#e0e0e0), full viewport, flex center
2. **White card** — max-width ~900px, centered, white bg, shadow-lg, rounded-md
3. **Two-column flex layout** — image left (~40%), form right (~60%)
4. **Hero image** — placeholder via `https://picsum.photos/seed/regvox-hero/600/800`
   - Text overlay: "#Collection 2018" in white italic, positioned bottom-left
5. **Form** — white bg, padding
   - Heading: "REGISTRATION FORM" (bold, uppercase, centered)
   - Row 1: First Name + Last Name (side by side, flex row)
   - Row 2: Username (with user icon right-aligned)
   - Row 3: Email Address (with mail icon right-aligned)
   - Row 4: Gender (select dropdown)
   - Row 5: Password (with lock icon right-aligned)
   - Row 6: Confirm Password (with lock icon right-aligned)
   - Button: Register (dark bg, white text, arrow icon), centered

## Fidelity notes

### Colors
- Body bg: `#e0e0e0` → `bg-[#e0e0e0]`
- Card: white → `bg-white`
- Card shadow: `shadow-lg`
- Heading text: `#333` → `text-[#333]`
- Label/placeholder text: `#666` → `text-[#666]`
- Input bottom border: `#ddd` → `border-b border-[#ddd]`
- Button bg: `#333` → `bg-[#333]`
- Button text: white → `text-white`
- Button hover: `#222` → `hover:bg-[#222]`
- Icons: `#999` → `text-[#999]`

### Typography
- All text: Poppins via Google Fonts `<link>`
- Heading: bold, uppercase, ~18px, letter-spacing slightly wider
- Labels: ~13px, normal weight
- Inputs: ~14px, placeholder text lighter

### Form fields
- Underline-only borders: `border-b border-[#ddd]` with no other borders
- Focus: border color transitions to brand or darker
- Side-by-side fields: flex row with gap
- Icons positioned absolute right inside input wrapper
- Select: custom chevron or native appearance

### Responsive
- ≤768px: flex-direction column (stack image + form)
- ≤480px: First Name / Last Name stack to single column

### Button shapes
- Slight border-radius (rounded)
- Dark background (#333), white text
- Arrow icon (→) after label
- Centered below form fields

### Existing pattern reference
- See `apps/regwell/`, `apps/regpulse/`, `apps/regflux/` for other regform implementations
- Use same form component patterns but adapt layout to 2-column split with image
