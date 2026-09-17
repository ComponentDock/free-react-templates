# CaseWork — Implementation Notes

Source: ColorLib Ca App (`ca-app`)
Preview: https://preview.colorlib.com/theme/ca-app/ (unreachable — based on screenshot)
Name: `casework` (new, original)
Package: `@free-react-templates/casework`

## Design Notes

### Color Palette
- Primary gradient: purple → indigo → lavender (diagonal 135deg)
- Accent/CTA: pink-coral (#ff6b8a)
- Page bg: white
- Card bg: very light gray (#f8f9fa)
- Text: white on gradient, dark gray (#333) on white

### Typography
- Font: Poppins (Google Fonts)
- Headings: bold, white on gradient, dark gray on white
- Body: regular weight, secondary gray

### Buttons
- CTA: pill shape (full border-radius), pink-coral bg, white text
- Nav CTA: outlined, white border, white text, pill shape
- Hover: darken accent color

### Layout Patterns
- Hero: two-column (text left, image right), gradient full-width
- Features: 3-column grid, centered heading with accent underline
- Pricing: 3-column grid, middle card elevated/highlighted
- Testimonials: 2–3 column grid, avatar + text
- Team: 3-column grid, photo + info + social icons
- Footer: 3-column grid on dark bg

## Section Build Order

1. **Navbar** — Sticky header, logo text "Ca.", nav links array, outlined CTA button
2. **Hero** — Gradient bg via Tailwind `bg-gradient-to-br`, two flex cols, email input + button, phone mockup image (picsum)
3. **Features** — Section wrapper, heading + underline, 3 Card components with lucide icons
4. **Screenshot showcase** — Dark gradient bg, heading, centered phone mockup (picsum)
5. **Pricing** — 3 tier cards, props for name/price/features/isPopular
6. **Testimonials** — 2–3 testimonial cards, avatar images (picsum), quote text
7. **Team** — 3 member cards, photos (picsum), social icon links (lucide)
8. **CTA download** — Gradient bg, heading, subtext, CTA button
9. **Footer** — Dark bg, 3-column grid, bottom bar with copyright + Component Dock link

## Fidelity Notes

- Match the exact purple→indigo gradient direction (135deg diagonal)
- Match the pink-coral accent (#ff6b8a) for all CTA buttons
- Phone mockup in hero: tilted/rotated slightly, showing a dark dashboard UI
- Feature cards have subtle shadow + rounded corners
- Pricing middle card has a distinct border/shadow/elevation to stand out
- Section headings use a small accent-colored underline/divider below them
- Footer is dark (#2d2d2d or similar) with white text
- All images use picsum.photos with deterministic seeds per template

## Source Mapping

| Field         | Value                                                  |
| ------------- | ------------------------------------------------------ |
| ColorLib slug | `ca-app`                                               |
| Source URL    | https://colorlib.com/wp/template/ca-app/               |
| Preview URL   | https://preview.colorlib.com/theme/ca-app/ (404)       |
| Screenshot    | https://colorlib.com/wp/wp-content/uploads/sites/2/ca-app-showcase-website-template.jpg |
| New name      | `casework`                                             |
| Deploy target | https://casework.free.componentdock.com                |
