# Regnet — Implementation TODO & Design Notes

## Structure (section order)

1. **Page wrapper** — dark body bg (#282828), full viewport, flex center
2. **White container** — max-width 1400px, centered, white bg
3. **Two-column flex layout** — image left (50%), form right (50%)
4. **Hero image** — placeholder via `https://picsum.photos/seed/regnet-hero/800/1000`
5. **Form** — white bg, padding 50px 100px 50px 70px
   - Heading: "STUDENT REGISTRATION FORM"
   - Row 1: Name + Father Name (side by side)
   - Row 2: Address (full width)
   - Row 3: Gender (radio group, Male default checked)
   - Row 4: State + City (select dropdowns, side by side)
   - Row 5: DOB (text input)
   - Row 6: Pincode (text input)
   - Row 7: Course (select dropdown)
   - Row 8: Email ID (email input)
   - Buttons: Reset All + Submit Form, right-aligned

## Fidelity notes

### Colors
- Body bg: `#282828` → `bg-[#282828]`
- Container: white → `bg-white`
- Accent: `#ff6801` → brand color in `@theme` or `bg-[#ff6801]`
- Text: `#222` → `text-[#222]`
- Muted: `#999` → `text-[#999]`
- Input border: `#ebebeb` → `border-[#ebebeb]`
- Reset button: `#f8f8f8` bg, `#999` text
- Submit hover: `#cd5300`

### Typography
- Headings + labels + inputs: Montserrat via Google Fonts `<link>`
- Buttons: Poppins via Google Fonts `<link>`
- Heading: 20px, bold, uppercase, `line-height: 1.66`
- Labels: 14px, bold, Montserrat
- Inputs: 13px, Montserrat weight 500

### Form fields
- Input styling: 1px solid #ebebeb border, 11px 20px padding, 13px font
- Focus: border → #ff6801
- Radio: custom styled with CSS (hidden native input, custom .cl-check circle)
  - Use native radio + Tailwind peer-checked for simplicity
- Select: custom chevron icon (SVG) positioned absolute right, appearance: none
  - Use Tailwind `appearance-none` + custom icon overlay
- Form rows with `display: flex` for side-by-side fields

### Responsive
- ≤992px: flex-direction column (stack image + form)
- ≤575px: form rows stack to single column, remove horizontal padding on row children
- ≤480px: gender radio stacks vertically, buttons go full width and stack

### Button shapes
- Square corners (border-radius: 0) — important distinction from other regform templates
- 140px × 40px fixed size
- Submit: `#ff6801` bg, white text, hover `#cd5300`
- Reset: `#f8f8f8` bg, `#999` text, hover `#ff6801` bg white text

### Existing pattern reference
- See `apps/regwell/`, `apps/regpulse/`, `apps/regflux/` for other regform implementations
- Use same form component patterns but adapt layout to 2-column split
