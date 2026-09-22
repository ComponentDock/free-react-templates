# Lucerne — Prep Notes & Todo

**Source:** ColorLib "Suites" → https://preview.colorlib.com/theme/suites/
**New name:** lucerne
**Category:** Hotel landing page

## Tasks

- [ ] Set up app: copy simplest existing app, rename package to @free-react-templates/lucerne
- [ ] Add Work Sans + Playfair Display fonts via Google Fonts link in index.html
- [ ] Define design tokens in index.css @theme: primary #f23a2e, heading font Playfair Display, body font Work Sans
- [ ] Implement Navbar component (sticky, Playfair Display logo, nav links with dropdown, hamburger)
- [ ] Implement HeroSlider component (3-slide owl-carousel-style slider, full-viewport bg images, dark overlay, centered text)
- [ ] Implement OurRooms component (heading, 6 room cards in 3-col grid, image + name + price, hover effects)
- [ ] Implement AboutUs component (2-column, image with play-button overlay, heading, text, Watch Video link)
- [ ] Implement HotelFeatures component (heading, 8 features in 4-col grid, icons + labels)
- [ ] Implement PromoBanner component (parallax bg, heading, outlined button, countdown timer)
- [ ] Implement Gallery component (heading, 8 images in 2×4 grid, lightbox popup)
- [ ] Implement UpcomingEvents component (heading, carousel of event cards)
- [ ] Implement Testimonials component (heading, carousel of circular-avatar + quote + name cards)
- [ ] Implement Footer component (dark bg overlay, columns, social icons, copyright, Component Dock link)
- [ ] Compose all sections in App.tsx in correct order
- [ ] Write tests for each component (100% coverage)
- [ ] Verify responsive design (mobile breakpoints)
- [ ] Run verify-app.sh and ensure all checks pass

## Section Order

1. Navbar (transparent → white on scroll, Playfair Display logo)
2. Hero Slider (3 slides, full-viewport, dark overlay, centered text)
3. Our Rooms (light bg #f8f9fa, 6 cards in 3-col grid)
4. About Us (2-column, image with play overlay + text)
5. Hotel Features (8 items in 4-col grid, icon + label)
6. Promo Banner (parallax bg, dark overlay, countdown)
7. Our Gallery (8 images, 2×4 grid, lightbox)
8. Upcoming Events (carousel of event cards)
9. What People Say / Testimonials (light bg, carousel)
10. Footer (dark bg, columns, social, copyright)

## Design Notes

- Brand color: #f23a2e (red) — used on feature icons (text-primary), link hovers, form focus
- Heading font: Playfair Display (serif) — used for logo (weight 200) and hero headings (weight 700-900)
- Body font: Work Sans (sans-serif) — weights 300/400/700, general text
- Buttons: pill-shaped (border-radius: 30px), outlined warning style for promo CTA
- Section backgrounds: white / #f8f9fa (bg-light) alternating, dark overlays for hero/promo/footer
- Hero: full-viewport with parallax-like effect (background-attachment: fixed via stellar), dark overlay rgba(0,0,0,0.4)
- Hotel room cards: white bg, uppercase heading, price in #5c7893, hover shadow + image scale(1.05)
- Navbar: transparent bg over hero, switches to white bg when scrolled, Playfair Display logo weight 200
- Dropdown: black bg, white text, 7px border-radius, arrow-top triangle
- Footer: rgba(0,0,0,0.8) overlay on bg image, white/50% text, social icon links
- Gallery: full-width no-gutters grid, lightbox popup on click
- Testimonials: circular avatar images (border-radius: 50%)
- Features: flaticon icons with text-primary (#f23a2e), display-3 size
- Promo: parallax background-attachment: fixed, dark overlay, countdown timer
- Use picsum.photos with seed "lucerne-N" for placeholder images
- Hero background: full-viewport with parallax-like effect
- Events: Owl Carousel-style slider for event cards
- Testimonials: Owl Carousel-style slider for testimonial cards
- Footer requires Component Dock branding link
