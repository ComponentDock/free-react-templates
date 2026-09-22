# Regale — Implementation Todo

Source: ColorLib "Deluxe" → https://preview.colorlib.com/theme/deluxe/
New name: `regale`

## Section order (fidelity to original)

1. **Navbar** — dark bg, brand left, links right (Home, Rooms, Restaurant, About, Blog, Contact), hamburger on mobile
2. **Hero Slider** — full-width image carousel, dark overlay, centered white text (Playfair Display), auto-rotate
3. **Booking Form** — overlapping hero, 4 fields (check-in, check-out, room select, customer select) + gold CTA button
4. **About Section** — split layout: left = background image with play button (vimeo popup), right = text (subheading + heading + 2 paragraphs + social icons)
5. **Services** — 4-column grid: icon + heading + description (24/7 Front Desk, Restaurant Bar, Transfer Services, Spa Suites)
6. **Rooms** — 3-column grid, 6 room cards: image with hover overlay, name, price, "View Room Details" link
7. **Counter** — parallax background image, 4 stats (50000 Happy Guests, 3000 Rooms, 1000 Staff, 100 Destinations)
8. **Testimonials** — carousel, user image + quote bubble + name + role, bg-light
9. **Blog** — 4-column grid, 4 blog cards: image, title, date, author, comment count
10. **Instagram** — full-width row, 5 images with Instagram icon overlay
11. **Footer** — dark bg (#3c312e), 4 columns (brand/desc, Useful Links, Privacy, Contact info), social icons, copyright + Component Dock link

## Design notes

- **Fonts**: Playfair Display for headings (serif, elegant), Poppins for body (clean sans-serif)
- **Color palette**: Dark gold #8d703b (primary CTA), warm gold #c9af7e (accents), cream #f6f2ea (alt bg), deep brown #3c312e (footer/overlays)
- **No border radius** on buttons — Bootstrap sharp style
- **Booking form** sits at the bottom of the hero section, creating a visual overlap effect
- **Parallax** on counter section background image
- **Images**: Use picsum.photos with seeds for all room/hero/about images
- **Icons**: Use lucide-react (reception bell → Bell, serving dish → UtensilsCrossed, car → Car, spa → Flower2)
- **Slider**: Can use a simple CSS-based auto-rotating carousel or a lightweight React carousel
