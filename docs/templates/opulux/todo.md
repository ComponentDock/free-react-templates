# Opulux — Implementation Todo

Recreation of ColorLib "Deluxe" hotel template.
Source: https://colorlib.com/wp/template/deluxe/
Preview: https://preview.colorlib.com/theme/deluxe/

## Task Checklist

- [ ] Scaffold app: copy simplest existing app → `apps/opulux/`, rename package to `@free-react-templates/opulux`
- [ ] Create `public/CNAME` with `opulux.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://opulux.free.componentdock.com`
- [ ] Add Google Fonts link (Playfair Display + Poppins) to `index.html`
- [ ] Configure Tailwind theme tokens in `src/index.css` (brand gold, cyan button, dark backgrounds)
- [ ] Build `Navbar.tsx` — dark bg, brand "Opulux", nav links, mobile hamburger
- [ ] Build `HeroSlider.tsx` — full-width slider, 2+ slides, overlay, text, CTA button
- [ ] Build `BookingForm.tsx` — horizontal form: 2 date pickers, room dropdown, customer dropdown, submit
- [ ] Build `AboutSection.tsx` — two-column: image left, heading + text + 4 feature cards right
- [ ] Build `RoomsSection.tsx` — heading + 3-column grid of 6 room cards (image, name, price, link)
- [ ] Build `CounterSection.tsx` — parallax bg, 4 stat columns with count-up animation
- [ ] Build `TestimonialsSection.tsx` — carousel of guest quotes
- [ ] Build `BlogSection.tsx` — heading + 3-column blog cards
- [ ] Build `InstagramSection.tsx` — row of 6 images with hover overlay
- [ ] Build `Footer.tsx` — dark bg, 3 columns, Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for all components (100% coverage)
- [ ] Run `scripts/verify-app.sh opulux` — typecheck + lint + tests + build
- [ ] Commit and open PR

## Design Notes

### Section Order (matches ColorLib source exactly)
1. Navbar (dark, fixed)
2. Hero Slider (full-width, 2 slides, overlay)
3. Booking Form (overlaps hero bottom)
4. About Section (image + text + features)
5. Rooms Section (3-col grid, 6 cards)
6. Counter Section (parallax, stats)
7. Testimonials (carousel)
8. Blog (3-col cards)
9. Instagram (image row)
10. Footer (dark, 3 columns)

### Key Fidelity Notes
- **Brand palette:** Gold/tan family (#c9af7e primary, #d1ba90 light, #8d703b dark, #7b6233 deep, #3c312e darkest). Use these in Tailwind @theme config.
- **Button CTA:** Cyan (#4ac7ea) with white text, rounded. "Check Availability" uses gold/brown tones instead.
- **Fonts:** Playfair Display for headings (serif, elegant), Poppins for body/UI. Load via Google Fonts link in index.html.
- **Hero slider:** 2 slides minimum, each with different background image. Dark overlay (rgba(0,0,0,0.1-0.2)). Centered text with serif heading.
- **Booking form:** Semi-transparent warm off-white (#f6f2ea) background. Horizontal layout on desktop, stacked on mobile. Overlaps the hero section bottom edge (negative margin or absolute positioning).
- **About section:** Left column is a full-height hotel image. Right column has "Welcome to Deluxe Hotel" in gold caps, "Welcome To Our Hotel" as H2, body text, then 2x2 grid of service icons.
- **Rooms:** 3-column grid with 2 rows = 6 cards. Each card: full-width image top, room name, price in gold, "View Room Details" link. Cards have subtle shadow/border.
- **Counter:** Parallax background image with dark overlay. 4 columns: number + label. Numbers count up when scrolled into view (use Intersection Observer or framer-motion).
- **Testimonials:** Carousel with 2-3 testimonials. Each: quote in italics, guest name, "Guests" label. Dot navigation.
- **Blog:** 3 cards with image, date/author meta, title, excerpt. Standard blog card layout.
- **Instagram:** Horizontal row of 6 square images, no gaps. Hover shows Instagram icon overlay with semi-transparent background.
- **Footer:** Dark (#1d2124) background. 3 columns: brand description, useful links, contact info. Bottom bar with copyright and Component Dock link.
- **Parallax:** Use `background-attachment: fixed` or a lightweight parallax library for the counter section background.
- **No external dependencies:** Use picsum.photos for all images with seeds like `opulux-hero-1`, `opulux-room-1`, etc.
