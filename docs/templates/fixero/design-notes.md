# Fixero — Design Notes

Recreation of ColorLib "Handyman" (https://colorlib.com/wp/template/handyman/)

## Source Analysis

Fetched from https://preview.colorlib.com/theme/handyman/ (live preview DOM + css/style.css).

### Sections

1. Navbar (transparent, dark background on scroll)
2. Hero (full-width bg image, dark overlay, white heading)
3. Quotation (split: text left, form right)
4. Services (6 cards, lavender background)
5. About Tabs (3 tabs with image+text)
6. Testimonials (2 cards, light gray bg)
7. Projects (6 cards with hover overlay)
8. Blog (3 post cards)
9. Footer (dark bg, about + 4 link columns)

### Design Tokens

- Brand: #fb7400 (orange)
- Footer: #000 bg, #fff text
- Services bg: #dedffe (lavender)
- Dark text: #364d59
- Font: Work Sans (400/500/700)
- Heading accent: orange underline

### Differences from Original

- Name changed from "Handyman" to "Fixero"
- Footer links to Component Dock instead of Colorlib
- Placeholder images via picsum.photos
- Icons via lucide-react (inline SVG for brand)
- Single-page app (no multi-page navigation)
- Tabs implemented with React state (no jQuery/Bootstrap JS)
