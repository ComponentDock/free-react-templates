# FineDine — Implementation Todo

Source: ColorLib "Caviar" (https://colorlib.com/wp/template/caviar/)
Preview: https://preview.colorlib.com/theme/caviar/
New name: finedine (apps/finedine, @free-react-templates/finedine)

## Design Notes

### Section Order (fidelity reference)
1. Header/Navbar — transparent, sticky, dark on scroll
2. Hero — carousel, full-width bg image, dark overlay, CTA
3. About Us — two alternating image+text blocks
4. Dish Menu — "Special" heading, 3-col grid, dish cards
5. Awards — horizontal badge row
6. Testimonials — carousel with avatar cards
7. Reservation — split layout: form left, image right
8. Footer — dark bg, centered text

### Color Palette
- Primary accent: #ff0000 (red) — buttons, prices, hover states
- Body bg: #fafafa
- Text: #000 (headings), rgba(0,0,0,0.8) (body)
- Footer bg: #333333
- Nav sticky: rgba(0,0,0,0.85)
- Hero overlay: rgba(0,0,0,0.6)

### Typography
- Body/headings: Open Sans (300–700)
- Buttons/labels: Work Sans (400–700)

### Button Style
- White bg, 1px #b2b2b2 border, no border-radius
- Small red circle element inside
- Hover: text becomes red

### Component Breakdown
- `Navbar.tsx` — transparent header, sticky class toggle, search overlay
- `Hero.tsx` — carousel with bg images, overlay, content, thumbnail nav
- `AboutUs.tsx` — two alternating layout blocks
- `DishMenu.tsx` — section heading + 3-col grid of DishCard
- `Awards.tsx` — horizontal badge row
- `Testimonials.tsx` — carousel of TestimonialCard (avatar, name, quote)
- `Reservation.tsx` — split layout: form + image
- `Footer.tsx` — dark bg, centered brand + copyright

### Fidelity Notes
- Hero uses a carousel — implement as static slide or simple React carousel
- Thumbnail nav in hero bottom-right is a unique Caviar detail — include as decorative element
- About Us has generous padding (~150px vertical) — use Tailwind py-36 or similar
- Reservation form inputs have bottom-border-only styling
- No border-radius on CTA buttons (sharp corners, not rounded)
- Awards section is a simple horizontal flex row of images
- Footer is minimal — just brand name + copyright + Component Dock link

### Replication Reference
- Live preview DOM fetched and parsed (see spec.md for full section list)
- CSS tokens extracted from style.css on preview server
- Screenshot analyzed for visual layout and aesthetic direction
