# Formlane — Implementation Notes

## Template: Formlane (recreates ColorLib Contact Form 13)

Source: https://colorlib.com/wp/template/contact-form-v13/
Source HTML: https://colorlib.com/etc/cf/ContactFrom_v13/index.html
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v13.jpg
Preview: https://preview.colorlib.com/theme/contact-form-v13/ (404 at prep time)

## Structure order (section-by-section)

1. **Map + form overlay** — full-viewport flex container
   - Google Maps embed (left, absolutely positioned, fills space behind form)
   - Floating phone pill (fixed position on map, green #39b54a bg)
   - White form card (right, 640px wide, full height)
2. **Form card contents**
   - "Contact Us" title (Poppins Bold, 39px, #333333)
   - Name input (label + underline input)
   - Email input (label + underline input)
   - Phone input (label + underline input)
   - Message textarea (label + underline textarea)
   - Send button (pill-shaped, gradient, centered)
3. **Footer** — links to Component Dock

## Fidelity notes

### Section 1: Map + phone pill
- Map is absolutely positioned behind the form card (z-index: -2)
- Use a React-interactive map (e.g. @react-google-maps/api or Leaflet)
- Phone pill: fixed position, centered vertically on map, green bg (#39b54a), white text, pill radius (25px), phone icon + number
- On mobile (< 768px): map hidden, pill becomes transparent at bottom

### Section 2: Form card
- White bg, 2px border-radius, 82px top padding, 55px horizontal padding, 33px bottom padding
- Title: "Contact Us" — Poppins Bold 39px, #333333
- Each field: label (Poppins SemiBold 18px, #999999) above input
- Inputs: Poppins Regular 22px, #555555 text, #cccccc placeholder
- Input border: 2px solid #dbdbdb bottom only (underline style)
- Focus: gradient line (#d5007d → #e53935 at 45deg) appears below input
- Send button: pill (25px radius), 50px height, min-width 244px, gradient bg, white text, Poppins Medium 16px, centered
- Button hover: sweeping gradient animation from left

### Section 3: Footer
- Simple footer with Component Dock link

## Component plan

| Component    | Purpose                                    |
| ------------ | ------------------------------------------ |
| MapPanel     | Google Maps embed + phone pill overlay     |
| ContactForm  | Title, fields, validation, send button     |
| FormInput    | Label + underline input + focus indicator  |
| Footer       | Component Dock link                        |

## Key implementation notes

- **No ColorLib references** in any app file — provenance only in spec + TEMPLATES.md
- Use `https://picsum.photos/seed/formlane-1/...` for any placeholder images
- Use `lucide-react` for the phone icon, map marker, etc.
- Footer MUST link `https://www.componentdock.com/` branded as "Component Dock"
- Register workspace: `npm install` at repo root after creating `apps/formlane`
- `apps/formlane/public/CNAME` → `formlane.free.componentdock.com`
- `apps/formlane/package.json` homepage → `https://formlane.free.componentdock.com`
