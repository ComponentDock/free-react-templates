# AurumStay — Implementation Todo

Recreation of ColorLib Hiroto → https://preview.colorlib.com/theme/hiroto/

## Section Order (fidelity)

1. Header — sticky navbar with top bar (address, phone, auth, language)
2. Hero — full-width dark background, centered welcome text, booking form
3. About Us — two-column: hotel image + text block
4. Services — 6 amenities in 3×2 grid, dark background
5. Our Rooms — 4 room cards with images and prices
6. Testimonials — carousel with author photos
7. Gallery — image carousel, mixed sizes
8. Booking Banner — full-width dark CTA
9. Footer — dark bg, logo, newsletter, social, copyright

## Component Outline

| Component      | Notes                                                        |
|----------------|--------------------------------------------------------------|
| `Navbar.tsx`   | Top bar + main nav. Sticky. "Book Now" pill button. Hamburger on mobile. |
| `Hero.tsx`     | Dark overlay bg image. Centered text. Booking form below.     |
| `BookingForm.tsx` | Location search + 2 date pickers + room select + "Search" btn. |
| `About.tsx`    | Two-column: image left, text right. Accent subtitle + heading. |
| `Services.tsx` | 6 items, 3×2 grid. Dark bg. Each: icon (lucide) + title.      |
| `Rooms.tsx`    | 4 cards. Image + name + price. Hover overlay.                 |
| `Testimonials.tsx` | Carousel. Author photo (round) + quote + name + social.   |
| `Gallery.tsx`  | Carousel of images. Mixed sizes.                              |
| `BookingBanner.tsx` | Dark strip. CTA text.                                    |
| `Footer.tsx`   | Dark bg. Logo, newsletter, social links, Component Dock link.  |
| `App.tsx`      | Composes all sections in order.                               |

## Design Notes

### Colors
- Brand accent: `#E9AD28` (golden yellow) — use as Tailwind `--color-brand` in index.css
- Dark bg: `#19191A` / `#1d1c1c` — sections with dark treatment
- Body text: `#111111` — light sections
- Muted: `#777C81` — subheadings, secondary text
- White: `#ffffff` — headings on dark, light section backgrounds

### Typography
- Body: "DM Sans" from Google Fonts — paragraphs, labels, nav links
- Headings: "Barlow Condensed" from Google Fonts — section titles, hero h2
- Hero h2: 72px, weight 500, line-height 82px
- Section subtitle: uppercase, 14px, letter-spacing 4px, accent color
- Section heading: 36px, weight 600, dark color

### Buttons
- `.primary-btn`: pill shape (border-radius 60px), bg #E9AD28, white text
- Padding: 14px 20px 12px, letter-spacing 2px, font-size 16px
- Hover: darken or opacity change

### Layout
- Sections use `spad` class (extra vertical padding ~80px)
- Container: Bootstrap-style 12-col grid (use Tailwind grid or flex)
- Rooms: 4 equal columns on desktop, 2 on tablet, 1 on mobile
- Services: 3×2 grid on desktop, 2×3 on tablet, stacked on mobile
- About: 2-column split (image left, text right), reversed on mobile

### Images
- Hero: dark hotel lobby — `picsum.photos/seed/aurumstay-hero/1920/800`
- About: hotel exterior/interior — `picsum.photos/seed/aurumstay-about/600/400`
- Rooms: 4 different hotel rooms — `picsum.photos/seed/aurumstay-room-1/400/300` etc.
- Gallery: 6 hotel scenes — `picsum.photos/seed/aurumstay-gallery-1/600/400` etc.
- Testimonial authors: `picsum.photos/seed/aurumstay-author-1/80/80` (circular)

### Animations
- Hero text: optional fade-in on load
- Gallery: owl-carousel style (use simple React carousel or CSS scroll-snap)
- Testimonials: auto-rotating carousel with dots/arrows
- Service cards: subtle hover lift

### Mobile
- Navbar collapses to hamburger menu
- Hero text scales down (h2 → ~36px)
- Booking form stacks vertically
- Services grid → 2 columns → 1 column
- Rooms grid → 2 columns → 1 column
- About section stacks vertically
