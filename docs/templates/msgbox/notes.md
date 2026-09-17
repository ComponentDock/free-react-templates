# MsgBox — Design Notes & Tasks

## Source
- **ColorLib:** Contact Form 12 (V12)
- **Preview:** https://preview.colorlib.com/theme/contact-form-12/ (404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-12.jpg

## Layout Order (top to bottom)

1. **Container** — centered max-width ~1000px, white/light background
2. **Two-column grid** — left info panel (40%), right form panel (60%)
3. **Footer** — Component Dock link

## Section-by-Section Fidelity Notes

### Left Column
- Large "Contact Us" heading (h1, bold, ~36px, dark text)
- Short lorem ipsum paragraph (gray, ~14px, normal weight)
- Three contact info items, each with:
  - Icon (map pin, phone, envelope) — use lucide-react
  - Text label — address spans two lines, phone and email are single-line
  - Items stacked vertically with ~16px gap

### Right Column (Form)
- Three fields stacked vertically: Name, Email, Message
- Labels are small, bold, above inputs
- Inputs: full-width, light gray border, ~40px height, no background fill
- Message textarea: same style but ~120px tall
- "Send Message" button: blue (#1a73e8 or #2196F3), white text,
  rectangular with ~4px border-radius, ~48px tall, full-width of form
- Form has no submit action beyond preventing default (static demo)

### Footer
- Simple centered text with "Component Dock" link

## Tasks

- [ ] Copy simplest existing app as scaffold (e.g. apps/formdrop or similar)
- [ ] Rename package to `@free-react-templates/msgbox`
- [ ] Create two-column layout (CSS Grid or Flexbox, ~40/60 split)
- [ ] Implement left column: heading, description, contact info items
- [ ] Implement right column: form with Name, Email, Message, Send button
- [ ] Style with Tailwind using extracted design tokens
- [ ] Add lucide-react icons (MapPin, Phone, Mail)
- [ ] Footer with Component Dock link
- [ ] Tests: 100% coverage
- [ ] public/CNAME: msgbox.free.componentdock.com
- [ ] homepage: https://msgbox.free.componentdock.com
