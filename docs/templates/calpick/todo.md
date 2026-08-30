# CalPick — Implementation Notes

## Source

- ColorLib: Calendar 09 (https://colorlib.com/wp/template/calendar-09/)
- Preview: https://preview.colorlib.com/theme/bootstrap/calendar-09/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-09.jpg

## Structure (section order, top → bottom)

1. **Single full-viewport section** — `.ftco-section` with centered content
   - Container → row → centered column (col-md-6) → heading "Calendar #09"
   - Container → row → centered column (col-md-4) → subheading + date input

## Design Notes

### Layout

- Single centered section, vertically padded (7em top + bottom)
- Two rows: heading row (col-md-6 centered) and picker row (col-md-4 centered)
- On mobile, columns stack full-width
- Very simple — one section, one interactive element

### Styling

- Body: #f8f9fd background, Lato font, gray text
- Headings: #000, font-weight 400, line-height 1.5
- Links/accent: #fc7fb2 (pink)
- Input: pill shape (border-radius 40px), no border, white background, shadow
  - Shadow: 0px 5px 13px rgba(0,0,0,0.09) resting, 0.14 on focus
  - Height: 50px, padding: 0 20px
- Section padding: 7em 0

### Fidelity Notes

- Original uses Bootstrap datetimepicker plugin; our React version will use
  a native HTML date/time input or a lightweight React datetimepicker
- The pill-shaped input with shadow is the key visual signature
- Font Awesome 4 icons were used in the original; we'll use lucide-react
- No navigation, no footer, no complex sections — this is a minimal template
- The pink accent (#fc7fb2) is the brand color

### Component Outline

- `App.tsx` — single CalPickSection component
- `CalPickSection.tsx` — heading + datetime input
- Footer with Component Dock link (required by conventions)
