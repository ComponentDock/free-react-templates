# RoxyGlow — Implementation Notes

## Source
- ColorLib Roxandrea: https://colorlib.com/wp/template/roxandrea/
- Preview: https://preview.colorlib.com/theme/roxandrea/

## Structure Order (implement in this order)

1. **Navbar** — dark bg (navbar-dark), brand text left, nav links right (Home, Rooms, Restaurant, About, Blog, Contact), hamburger mobile, sticky scroll transition
2. **HeroSlider** — owl-carousel style 2-slide slider, parallax bg images with dark overlay, centered large text (h1 + h2), video play button (top-right circular)
3. **BookingForm** — overlapping white card row, 5 fields: check-in date, check-out date, room dropdown, guests dropdown, black "Check Availability" button with subtext
4. **ServicesGrid** — 4-column image cards (Special Rooms, Swimming Pool, Restaurant, Suites & Rooms), hover overlay, last card dark overlay with arrow CTA
5. **WelcomeSection** — centered heading "A New Vision of Luxury Hotel", 5 icon service cards (Friendly Service, Get Breakfast, Transfer Services, Suits & SPA, Cozy Rooms), middle card active state
6. **RoomsSection** — light bg, first: large welcome image overlay, then alternating 2-col rooms (Suite, Family, Deluxe, Luxury, Superior) with image + half-width text panel (stars, price, name, details link)
7. **Testimonials** — light bg, carousel of testimonial cards: circular avatar, quote icon, 5 gold stars, text, name + position
8. **VideoHero** — full-width parallax bg, 800px height, large heading "We're Most Recommended Hotel", YouTube video background
9. **Restaurant** — pattern bg, 2-col menu grid: food image + dish name + price + description
10. **Footer** — dark bg, 4-col: brand + social, Useful Links, Privacy, Contact info, copyright bar

## Design Fidelity Notes

### Fonts
- Headings: Playfair Display (serif) — load via Google Fonts `<link>`
- Body: Poppins (sans-serif) — load via Google Fonts `<link>`
- Both are critical to the luxury hotel aesthetic

### Colors
- Primary gold: #b69100 — nav active, links, star ratings, prices, accents, CTA hover
- Dark/black: #000000 — booking button, overlays, dark sections, text
- Light bg: #f8f9fa (Bootstrap bg-light) — rooms section, testimony section
- White: #ffffff — booking form cards, testimony background
- Text dark: #000000 — headings
- Text muted: #cccccc — testimony position labels
- Counter section bg: #312b30 — dark purple-brown

### Buttons
- Sharp rectangular (border-radius: 0px) — NOT rounded
- Primary CTA: solid black bg, white text ("Check Availability")
- Primary hover: transparent bg, gold border, gold text
- "View Room Details" link: gold (#b69100) text, uppercase, letter-spacing
- "Best Price Guaranteed!" subtext on booking button

### Layout
- Bootstrap-based 12-column grid
- Hero: full-width owl-carousel with parallax scroll
- Booking form: floating card row overlapping hero section
- Services grid: 4 equal columns with background images
- Rooms: alternating 2-col layout (image left/right with text panel)
- Restaurant: 2-col grid with food images + descriptions
- Footer: 4-column layout with dark background

### Key Visual Patterns
- Dark overlay on hero slides (`.overlay` class)
- Video play button: circular, top-right of hero, links to YouTube
- Star ratings: 5 gold ion-ios-star icons
- Testimony avatars: 100px circular images with quote icon overlay
- Services active state: highlighted middle card
- Room panels: alternating left/right arrows (`.left-arrow`, `.right-arrow`)
- Restaurant pattern background image behind menu section

## Placeholder Images
- Hero slide 1: `https://picsum.photos/seed/roxyglow-hero1/1920/1080`
- Hero slide 2: `https://picsum.photos/seed/roxyglow-hero2/1920/1080`
- Services grid: `https://picsum.photos/seed/roxyglow-svc-{1-4}/400/300`
- Welcome image: `https://picsum.photos/seed/roxyglow-welcome/1200/600`
- Room images: `https://picsum.photos/seed/roxyglow-room-{1-5}/800/500`
- Testimonial avatars: `https://picsum.photos/seed/roxyglow-testi-{1-5}/100/100`
- Video hero bg: `https://picsum.photos/seed/roxyglow-video/1920/1080`
- Restaurant menu: `https://picsum.photos/seed/roxyglow-menu-{1-8}/400/300`

## Implementation Gotchas
1. **Owl-carousel replacement**: Avoid jQuery owl-carousel. Use a lightweight React carousel or simple CSS snap scroll for sliders.
2. **Parallax effect**: Use CSS `background-attachment: fixed` for hero/room/video backgrounds.
3. **Video hero**: The original uses jQuery videoBG plugin. For React, use a muted `<video>` element or YouTube iframe embed with autoplay.
4. **Room alternating layout**: Use CSS Grid or flexbox with `order` property for left/right alternation. The `.left-arrow` and `.right-arrow` classes indicate directional indicators.
5. **Booking form dropdowns**: HTML5 `<select>` elements. Room options: Suite, Family Room, Deluxe Room, Classic Room, Superior Room, Luxury Room.
6. **Services active state**: Middle card (index 2) gets a highlighted/active style — implement via conditional class.
7. **Testimony carousel**: Circular avatars with quote icon overlay positioned bottom-right. Use absolute positioning.
8. **Restaurant pattern bg**: The restaurant section uses a background pattern image — use a subtle pattern or gradient as fallback.
