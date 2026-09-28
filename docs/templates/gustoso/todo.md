# Gustoso — Prep Notes

Source: ColorLib "Luto" (https://colorlib.com/wp/template/luto/)
Preview: https://preview.colorlib.com/theme/luto/
New name: gustoso

## Section Build Order

1. **Navbar** — Transparent header with cutlery icon logo, hamburger toggle, full-screen overlay
2. **Hero Slider** — FlexSlider with 4 food-photography slides, centered text, dot pagination
3. **Info Bar** — Dark purple 4-column strip (Address, Hours, Phone, Email)
4. **About** — Text + video image + 3 specialty cards
5. **Video CTA** — Background image section with "Watch Video" button
6. **Specialties** — 3-column card grid (same as about specialty cards)
7. **Testimonials** — Blockquote carousel
8. **Menu** — Tabbed dish list (Main/Desserts/Drinks), 2-col per tab
9. **Reservation** — Form with 6 fields on dark purple background
10. **Footer** — 4-column: brand, blog, Instagram, newsletter
11. **Copyright** — Bottom bar with Component Dock attribution

## Design Notes

### Colors
- Primary brand: #FF6107 (vivid orange) — buttons, price highlights, accents
- Dark purple: #302939 — info bar, reservation section, footer
- Body text: #404044 on white
- Muted text: #7d7d7d / #969696
- Light bg: #FBFBFB / #F7F7F7

### Typography
- Display/headings: "Lora" (Google Font, serif) — elegant restaurant feel
- Body/nav: "Poppins" (Google Font, sans-serif) — clean readability

### Key Visual Elements
- **Cutlery icon**: flaticon cutlery/utensils icon used as logo mark and section decorators
- **FlexSlider**: 4-slide hero with dot pagination, dark food photography backgrounds
- **Video popup**: Play button overlay on about image, opens Vimeo popup
- **Info bar**: Dark purple strip with 4 icon+text columns (Address, Hours, Phone, Email)
- **Tabbed menu**: Bootstrap-style tabs (Main/Desserts/Drinks) with dish list
- **Reservation form**: Full form with datepicker and time/person dropdowns
- **Newsletter**: Email input + Subscribe button in footer

### Layout
- Full-width hero slider (750px min-height)
- 4-column info bar (flexbox/grid)
- About: 2-column (text + image), then 3-column specialty cards
- Menu: 2-column dish list per tab (image + text)
- Reservation: single-column form on dark background
- Footer: 4-column grid

### Placeholder Images
- Hero slides: `https://picsum.photos/seed/gustoso-hero-<n>/1920/750`
- Specialty cards: `https://picsum.photos/seed/gustoso-spec-<n>/400/300`
- Menu dishes: `https://picsum.photos/seed/gustoso-dish-<n>/120/120`
- Blog thumbnails: `https://picsum.photos/seed/gustoso-blog-<n>/100/100`
- Instagram: `https://picsum.photos/seed/gustoso-insta-<n>/200/200`
- Reservation bg: `https://picsum.photos/seed/gustoso-reserve/1920/600`

### Implementation Tips
- Use `lucide-react` icons (replace flaticon/ionicons): Utensils, MapPin, Clock, Phone, Mail, Play, Facebook, Twitter, Instagram, ChevronDown
- Use `cn()` from packages/ui for class composition
- Tab filtering: simple React state with category filter on menu items
- FlexSlider: use a React carousel library (e.g. swiper or embla-carousel)
- Video popup: use react-player or a simple modal with iframe
- Reservation form: basic controlled form with state (no backend needed)
- Dark purple sections: use `bg-[#302939]` Tailwind class
