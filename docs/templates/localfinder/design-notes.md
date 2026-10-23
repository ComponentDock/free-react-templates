# LocalFinder — Design Notes

## Source

ColorLib "Directing" — https://colorlib.com/wp/template/directing/
Preview: https://preview.colorlib.com/theme/directing/

## Design Analysis

- Directory listing / local services discovery template
- Font: Cairo (Google Fonts), weights 400-800
- Primary brand: #f03250 (coral red) — buttons, logo, accents
- Hero: photo mosaic grid background with dark overlay
- Search bar: pill-shaped with 2 dropdowns
- Category icons: colored circular backgrounds (green, red, yellow, pink, coral)
- Dark testimonial section (#222222 background)
- Footer with Component Dock branding (mandatory)

## Layout Sections

1. Navbar — logo + nav + CTA button + user icon
2. Hero — background grid + heading + search form + category pills
3. Categories — 5 circular icon cards
4. Services — tabbed listing grid
5. Locations — photo grid with overlay
6. Testimonials — dark bg, cards with avatars
7. Blog — 3 post cards
8. Newsletter — email input + subscribe
9. Footer — 3 columns + copyright bar

## Implementation Plan

- 9 components: Navbar, Hero, Categories, Services, Locations, Testimonials, Blog, Newsletter, Footer
- Reuse: lucide-react icons (UtensilsCrossed, ShoppingBag, Bed, Sparkles, Store, MapPin, Phone, Mail, etc.)
- Placeholder images: picsum.photos seeded
- Brand colors in @theme for Tailwind
