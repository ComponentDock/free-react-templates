# Morselry — Design Notes

## Source Mapping

- **ColorLib source:** Resta (https://colorlib.com/wp/template/resta/)
- **Preview:** https://preview.colorlib.com/theme/resta/
- **New name:** morselry

## Structure Order

1. Navbar (transparent, logo left, nav center, CTA right)
2. Hero Slider (carousel with dark gradient overlay)
3. About (2-col: text left, overlapping images right)
4. Delicious Menu (tabbed: Dinner/Breakfast/Lunch, 6 items grid)
5. Testimonials (dark overlay bg, carousel)
6. Photo Gallery (asymmetric grid, lightbox)
7. Reservation (map left, form right)
8. Footer (3-col + copyright bar)

## Fidelity Notes

### Navbar
- Transparent background over hero slider
- Logo on left (image-based, use text/SVG placeholder)
- Center nav: Home, Menu, Pages (dropdown), Blog (dropdown), Contact
- Right: "Book a Table" link with underline accent (#FFE8C3)
- Becomes sticky/solid on scroll (white bg)

### Hero Slider
- Full-viewport-width carousel, 2-3 slides
- Each slide has a background image with gradient overlay:
  linear-gradient(to right, rgba(0,29,56,0.7), rgba(26,13,1,0.6))
- Centered white text: "Fresh And Delicious Food For Your Health"
- "View Menus" CTA button: #DB9A64 bg, white text, 0px radius, letter-spacing 2px
- Left/right circular nav arrows (50px, border #4D6174, white text)

### About Section
- White background (#fff)
- Left column: heading in Philosopher font (#001D38), long dash accent (#DB9A64),
  paragraph (#596672), food list with SVG icons
- Right column: two overlapping images (large behind, small in front offset)
- Decorative food SVG icons positioned absolutely outside container

### Delicious Menu
- White background
- Section title "Delicious Food For You" centered
- Tab navigation with food icons (Dinner/Breakfast/Lunch)
- Active tab: icon + h4 text
- 2-column grid of menu items:
  Each: circular food thumbnail + h3 title + p description + span price
- Tab content switches between category items

### Testimonials
- Background: image (bg.png) with dark overlay
- Subtitle "Testimonials" in #DB9A64
- Heading "Our Customer's Say" in white
- Carousel: quote text (white), author photo (circular), name (h3), 5 gold stars
- 2 testimonials, auto-rotating

### Photo Gallery
- White background
- Section title "Photo Gallery" centered
- Asymmetric grid: 1 large image spans 2 cols, 4 small images in rows,
  then another large image
- Click opens Magnific Popup lightbox (use react-photoswipe-gallery or similar)

### Reservation
- Light background (#FFFBF5) with decorative icons
- Section title "Reservation" centered
- Left half: Google Map embed (use placeholder/static map)
- Right half: "Book a Table" form
  - Fields: Name (text), Phone (text), Date (date picker), Dinner (select), Person (select)
  - Submit button: "Book"
  - Below form: Address info + Reservation phone, each with icon

### Footer
- Dark background (#1A0D01 or similar dark)
- 3-column layout:
  Col 1: Logo + address + phone + email + social icons (FB, Twitter, Instagram, Pinterest, YouTube)
  Col 2: "Useful Links" — Menu, About, Blog
  Col 3: "Subscribe" — email input + button, newsletter text
- Copyright bar: light border top, centered text
- **Must replace Colorlib attribution with "Made with Component Dock" linking to componentdock.com**

## Key CSS Classes to Replicate

| Original Class | Purpose | Tailwind Equivalent |
|---|---|---|
| `.boxed-btn3` | CTA button | custom button component |
| `.overlay` + `::before` | Dark gradient over hero/testimonials | `bg-gradient-to-r from-[rgba(0,29,56,0.7)] to-[rgba(26,13,1,0.6)]` |
| `.long_dash` | Accent underline | `w-16 h-0.5 bg-brand` |
| `.say_hello a` | Header CTA with underline | custom with `border-b-2 border-[#FFE8C3]` |
| `.single_delicious` | Menu item row | flex row with thumb + info |
| `.testimonial_area` | Dark bg section | background image + overlay |
| `.gallery_area .single_gallery` | Gallery image with hover overlay | group relative overflow hidden |

## Implementation Notes

- Use picsum.photos with seed `morselry-<n>` for all placeholder images
- Hero slider: implement with simple CSS-only carousel or lightweight JS (no heavy deps)
- Tabbed menu: React state for active tab, no Bootstrap dependency
- Gallery lightbox: consider react-photoswipe-gallery or custom modal
- Reservation form: controlled inputs with basic validation
- Map: static placeholder image or Leaflet with a fixed marker
- Footer social icons: lucide-react equivalents (Facebook, Twitter, Instagram, etc.)
