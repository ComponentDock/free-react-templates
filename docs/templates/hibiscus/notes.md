# Hibiscus — Implementation Notes

Source: ColorLib "Hiroto" (https://preview.colorlib.com/theme/hiroto/)

## Section order (top to bottom)

1. Header/Nav — top info bar (address, phone) + main nav + Book Now CTA
2. Hero — dark image background, gold "WELCOME HIROTO" subheading, white heading, booking form with check-in/out/room/search
3. About Us — split layout: text left (gold subheading, heading, description), image right
4. Services — 3-col grid, 6 service cards (Free Wi-Fi, Premium Pool, Coffee Maker, Bar Wine, TV HD, Restaurant)
5. Rooms — row of 4 room cards with bg images, each labeled "Deluxe Room" with "Booking Now" link
6. Choose Us — dark parallax background, text + icon-based feature highlights (4-8)
7. Testimonial — owl-carousel slider, testimonial cards with photo/name/title/quote/social icons
8. Gallery — owl-carousel slider, 4+ images in grid layout
9. Latest Blog — row of 4 blog post cards (image, heading, "Read More")
10. Footer — dark image bg, phone number, quick links, services links, newsletter subscribe, social icons, copyright

## Key design fidelity notes

### Colors
- Brand gold: `#E9AD28` — section subheadings (h5), primary buttons, highlights
- Near-black: `#19191A` — section titles (h2)
- Body text: `#777C81` — paragraphs
- Footer bg: `#1a1a1a` / dark image overlay

### Typography
- Headings: Barlow Condensed (600 weight, condensed)
- Body: DM Sans (400 weight)
- Section subheadings (h5): gold, uppercase, letter-spacing 2-4px

### Buttons
- Flat/square (border-radius: 0), gold bg `#E9AD28`, white text
- Letter-spacing 2px
- Padding: ~14px 20px 12px

### Layout
- Bootstrap-style 12-col grid (recreate with Tailwind grid/flex)
- `.spad` = 100px top + 100px bottom padding
- Hero: large heading (72px), centered text max-width 700px
- Services: 3-column grid (col-lg-4)
- Rooms: 4-column grid (col-lg-3) with equal heights
- Blog: 4-column grid (col-lg-3)
- Gallery: full-width carousel with 700px height items (desktop), 430-450px (tablet)

### Images
- Use `https://picsum.photos/seed/hibiscus-<n>/<w>/<h>` for all placeholder images
- Hero: 1920×900
- Room cards: 360×300
- Gallery: 700×700
- Blog: 360×260
- Choose Us bg: 1920×800
- Footer bg: 1920×400

### Interactions
- Offcanvas mobile menu (slides from right)
- Testimonial owl-carousel (left/right arrows, dots)
- Gallery owl-carousel
- Booking form: datepicker-style inputs (use HTML date inputs)
- Smooth scroll to sections
