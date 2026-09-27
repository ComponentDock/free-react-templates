# PropVault — Prep Notes

## Source
- ColorLib "Holmes": https://colorlib.com/wp/template/holmes/
- Preview: https://preview.colorlib.com/theme/holmes/
- Screenshot: holmes-free-template.jpg

## Stack
Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo standard)

## Design Tokens
- Primary coral: #ea6c5d
- Light lavender bg: #f9f9ff
- Dark charcoal footer: #222222
- Hero overlay: rgba(0,0,0,0.18)
- Body text: #777777
- Heading text: #222222
- Font: "Poppins" (Google Fonts, weights 100-700)
- Button: pill shape (border-radius 25px), coral bg, white text
- Section gap padding: 120px desktop / 80px tablet / 60px mobile

## Section Order (top → bottom)
1. TopBar — light lavender bg, right-aligned: phone, sell/rent, login/register
2. Navbar — white bg, box-shadow, logo + 6 nav links (Blog/Pages have dropdowns)
3. Hero — full-screen bg image, dark overlay, headline at bottom
4. SearchForm — white bg overlapping hero, Sell/Rent toggle, 4 selects, 2 range sliders, search btn
5. Properties — 3-col grid: property cards (image + badge, title + price, bed/bath/area, amenities, likes/comments)
6. About — split: 3 text blocks left, large image right, lavender bg
7. Cities — asymmetric image grid (1 tall left, 1 large top-right, 2 small bottom-right), hover fade-in
8. Testimonials — carousel with circular avatars, quotes, names/titles, lavender bg
9. Blog — 3-col cards (thumb, title, excerpt, meta row)
10. Footer — dark charcoal bg, 4 columns (About Us, Newsletter, Instagram Feed, Follow Us), copyright + Component Dock

## Component Plan
- `src/components/TopBar.tsx` — thin bar, right-aligned list
- `src/components/Navbar.tsx` — logo + nav links + dropdown menus + sticky behavior
- `src/components/Hero.tsx` — full-screen bg image + overlay + headline
- `src/components/SearchForm.tsx` — form with toggle, selects, range inputs, search btn
- `src/components/PropertyGrid.tsx` — 3-col grid of PropertyCard components
- `src/components/PropertyCard.tsx` — single property card (image, badge, details, amenities, meta)
- `src/components/About.tsx` — split layout, 3 text blocks + image
- `src/components/CityGrid.tsx` — asymmetric image grid with hover overlay
- `src/components/CityCard.tsx` — single city card (bg image, overlay, title)
- `src/components/Testimonials.tsx` — embla carousel of testimonial cards
- `src/components/TestimonialCard.tsx` — circular avatar + quote + name + title
- `src/components/BlogGrid.tsx` — 3-col blog cards
- `src/components/BlogCard.tsx` — thumb + title + excerpt + meta
- `src/components/Footer.tsx` — 4-col footer + copyright bar + Component Dock link

## Key Fidelity Notes
- The original uses Bootstrap grid classes (col-lg-4, row, container) — replace with Tailwind grid/flex
- Property amenity indicators: green "Yes" / red "No" spans — use text-green-600 / text-red-500
- City grid is asymmetric: left tall column, right has 1 large + 2 small — CSS grid with span
- Testimonials use owl.carousel — replace with embla-carousel-react
- Range sliders use ion.rangeSlider — replace with native <input type="range">
- Nice-select dropdowns — replace with native selects + Tailwind styling
- Sell/Rent toggle uses custom CSS checkbox — implement with Tailwind toggle switch
- Linearicons and Font Awesome icons → lucide-react equivalents
- No ColorLib references in any app files — provenance in spec only
- Footer MUST link to https://www.componentdock.com/

## Images
Use seeded picsum placeholders: `https://picsum.photos/seed/propvault-hero/1920/1080`, etc.
