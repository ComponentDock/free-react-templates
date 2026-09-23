# Advocat — Design Notes

Recreation of ColorLib Atorni (https://colorlib.com/wp/template/atorni/)

## Design Tokens (from original css/style.css)

| Token        | Value              | Notes                     |
| ------------ | ------------------ | ------------------------- |
| Brand        | #c18e3c            | Gold, used for CTAs       |
| Dark         | #262626            | Hero bg, footer, counters |
| Light gray   | #f7f7f7            | About, practice sections  |
| Body text    | #6c757d            | Muted gray                |
| Font body    | Poppins            | 300–700 weights           |
| Font heading | Cormorant Garamond | Serif for headings        |

## Sections (in order)

1. TopBar — Phone + logo + location
2. Navbar — Sticky, responsive with mobile hamburger
3. Hero — Full-width slider, 3 slides with bg images, overlay, CTA
4. Counter — Dark bg, 4 stats with icons
5. About — Light bg, heading + description + video placeholder
6. Practice Areas — 4 cards with image bg + icon overlay
7. Appointment — Parallax bg, services left + form right
8. Case Studies — 4 image cards with gradient overlay text
9. CTA Banner — Dark parallax, question + button
10. Testimonials — 5 cards with quote, avatar, name, role
11. Blog — 3 cards with image + date badge
12. Newsletter CTA — Dark parallax, phone + email buttons
13. Footer — 4-column: brand + social, practice links, hours, contact; copyright bar with Component Dock

## Differences from Original

- No carousel/slider JS library — CSS-based fade transitions
- No Font Awesome — lucide-react icons
- No Bootstrap — Tailwind CSS 4
- Placeholder images via picsum.photos
- Footer links to Component Dock instead of Colorlib
