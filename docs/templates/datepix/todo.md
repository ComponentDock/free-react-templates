# DatePix — Implementation Notes

## Source

- ColorLib slug: `calendar-09`
- Preview: `https://preview.colorlib.com/theme/bootstrap/calendar-09/`
- Description: "A modern free calendar date picker template with an option to select the exact time that uses Bootstrap as a base."

## Structure order

1. **Heading section** — centered h2 "Calendar Date Picker" (originally "Calendar #09")
2. **Date picker form** — single input field, pill-shaped, with soft shadow

## Fidelity notes

### Layout

- Original uses Bootstrap grid (container → row justify-content-center → col-md-6 for heading, col-md-4 for picker).
- In React: use Tailwind flex/centering. No need for a grid library.
- The page is a single centered column — very simple layout.

### Typography

- Font: Lato (Google Fonts, weights 300/400/700)
- Heading: 28px, color #000, font-weight 400 (normal, not bold)
- Body text: 16px, color gray, line-height 1.8
- Load Lato via Google Fonts `<link>` in `index.html`

### Colors / tokens

- Background: #f8f9fd (light blue-gray)
- Text: gray
- Headings: #000
- Accent/link: #fc7fb2 (soft pink) — use as brand color in @theme
- No gradient backgrounds, no images (pure CSS page)

### Input styling

- Height: 50px
- Border-radius: 40px (pill shape)
- Border: none
- Padding: 0 20px
- Shadow: 0px 5px 13px 0px rgba(0,0,0,0.09)
- Focus shadow: 0px 5px 13px 0px rgba(0,0,0,0.14)
- Placeholder: "MM/DD/YYYY hh:mm:ss"
- In React: use a controlled <input type="text"> with the same styling. Optionally add a lightweight date picker library, but the original is just a plain text input.

### Footer

- Original has NO footer — just the section with heading + input.
- We MUST add a footer linking to https://www.componentdock.com/ per repo rules.

### What differs from original

- Bootstrap 4.3.1 → Tailwind CSS 4 + React
- jQuery + moment.js datetimepicker → plain input (or lightweight React date picker)
- No Font Awesome icons needed (original uses none in visible UI)
- New footer added (repo requirement)
- Name changed from "Calendar #09" to "DatePix" / "Calendar Date Picker"

## Component plan

- `src/App.tsx` — main layout (centered container)
- `src/components/Heading.tsx` — centered heading section
- `src/components/DatePickerForm.tsx` — the pill-shaped date input
- `src/components/Footer.tsx` — Component Dock footer (standard)
- `src/index.css` — Tailwind entry + Lato font import + brand token

## Test plan

- Heading renders and is centered
- Input renders with correct placeholder
- Input accepts user typing
- Focus state applies correct styling
- Footer renders with Component Dock link
- Background color matches design token
