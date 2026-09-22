# Kasumi — Implementation Notes

## Source
- ColorLib "Hiroto": https://colorlib.com/wp/template/hiroto/
- Preview: https://preview.colorlib.com/theme/hiroto/

## Section Order (implement in this order)

1. **TopBar** — simple flex row, address/phone left, auth + language right
2. **Navbar** — logo + nav links + Book Now button (sticky)
3. **Hero** — background image, heading, booking form (Location, CheckIn, CheckOut, Person, Submit)
4. **About** — 2-col split: text left, image right
5. **Services** — 3×2 grid of icon cards
6. **Rooms** — 4 full-width room cards with overlay text + price
7. **Testimonials** — 5/7 split: image left, slider right
8. **WhyChooseUs** — parallax bg, centered CTA
9. **Gallery** — header + carousel of 4 images
10. **Blog** — 3 blog cards
11. **Footer** — dark, 3-col + copyright bar

## Design Fidelity Notes

### Colors
- Brand: `#E9AD28` (gold/amber) — use as primary in `@theme`
- Dark text: `#1d1c1c` / `#19191A`
- Body text: `#777C81`
- Light bg: `#F9F8F6`
- White: `#ffffff`

### Fonts
- Headings: Barlow Condensed (Google Fonts)
- Body: DM Sans (Google Fonts)

### Button Styles
- Primary: gold bg, white text, no radius, letter-spacing 2px, padding 14px 20px 12px
- Book Now in navbar: pill shape (border-radius: 60px)

### Layout Notes
- Hero: full-width bg image with semi-transparent form overlay
- About: `col-lg-6` / `col-lg-6` split
- Services: `col-lg-4 col-md-4 col-sm-6` grid
- Rooms: `col-lg-3` full-bleed cards (p-0, no gap)
- Testimonials: `col-lg-5` image / `col-lg-7` slider
- Why Choose Us: full-width parallax bg, centered `col-lg-8`
- Gallery: section-title row + owl-carousel row
- Blog: 3 equal cards

### Asset Mapping
| Original | Replacement |
|---|---|
| `img/hero.jpg` | `https://picsum.photos/seed/kasumi-hero/1920/800` |
| `img/home-about/home-about.png` | `https://picsum.photos/seed/kasumi-about/600/400` |
| `img/home-about/sign.png` | Use a cursive-style signature placeholder or skip |
| `img/services/services-*.png` | Use `lucide-react` icons (Wifi, Waves, Coffee, Wine, Tv, UtensilsCrossed) |
| `img/home-room/hr-*.jpg` | `https://picsum.photos/seed/kasumi-room-{1-4}/400/300` |
| `img/testimonial-left.jpg` | `https://picsum.photos/seed/kasumi-testi/500/600` |
| `img/gallery/gallery-*.jpg` | `https://picsum.photos/seed/kasumi-gallery-{1-4}/400/300` |
| `img/latest-blog/lb-*.jpg` | `https://picsum.photos/seed/kasumi-blog-{1-3}/400/250` |
| `img/chooseus-bg.jpg` | `https://picsum.photos/seed/kasumi-cta/1920/600` |
| `img/logo.png` | Text-based "Kasumi" logo (no image needed) |

### Component Notes
- Hero booking form: useState for form fields, no real backend needed
- Rooms: hardcoded array of 4 room objects with name, price, image
- Testimonials: use a simple CSS carousel or useState-based slider
- Gallery: horizontal scrolling carousel (CSS overflow or lightweight lib)
- Blog: hardcoded array of 3 blog posts
- Footer: newsletter form with email input (no submission)
