# Trailblaze — Prep Notes

Source: ColorLib Safario (https://colorlib.com/wp/template/safario/)
Preview: https://preview.colorlib.com/theme/safario/
Design category: Travel / Safari

## Section order (from preview DOM)

1. Navbar (header.header_area)
2. Hero Banner (section.hero-banner)
3. Popular Services (3 cards: Hotel, Flight, Destination)
4. About Section (image + text, two-column)
5. Popular Tours (4 cards, 2×2 grid, overlay hover)
6. Testimonials (carousel)
7. Newsletter (email input + subscribe)
8. Footer (dark bg, 4 widget columns)

## Fidelity notes

### Navbar
- Logo left, links right, hamburger on mobile
- Links: Home, About, Packages, Elements, News, Contact
- Light background, sticky on scroll

### Hero Banner
- Full-width background image (safari scene)
- Centered overlay text: "Travel More To Discover Yourself"
- Pill-shaped CTA button (#6059f6, white text)
- Overlay semi-transparent dark

### Popular Services
- 3 cards in a row (desktop), stacked on mobile
- Each: icon/image + title + short description
- White card background, subtle shadow
- Section background: white

### About Section
- Two-column layout: image left, text right
- Gray/light purple background (#f0e9ff / #fbf9ff)
- "magic-ball" decorative elements (can simplify)
- Heading: "Exploration is really the essence of the human spirit"
- CTA button

### Popular Tours
- 4 tour cards in 2×2 grid
- Each: background image + gradient overlay + title + price
- Hover: overlay darkens/shifts
- "Paris tour offer" + "$65/day" pattern (use varied destinations)

### Testimonials
- Carousel (use simple React carousel, not owl-carousel)
- Each item: avatar circle + author name + text
- Light gray/white background

### Newsletter
- Centered section
- Email input + subscribe button
- Subtle background (#f0e9ff)

### Footer
- Dark background (#04091e)
- 4 columns: About, Quick Links, Newsletter, Instagram
- Copyright bar with "Component Dock" link
- White/light text

## Design tokens to apply in index.css @theme

```
--color-primary: #6059f6;
--color-primary-hover: #7676ff;
--color-primary-dark: #201aa3;
--color-text: #2a2a2a;
--color-text-muted: #999999;
--color-text-light: #888888;
--color-section-alt: #f0e9ff;
--color-section-subtle: #fbf9ff;
--color-dark-bg: #04091e;
```

## Component plan

- `Navbar.tsx` — responsive nav with hamburger
- `Hero.tsx` — full-width banner with CTA
- `Services.tsx` — 3 service cards
- `About.tsx` — two-column layout
- `Tours.tsx` — 4 tour cards grid
- `Testimonials.tsx` — carousel component
- `Newsletter.tsx` — email signup form
- `Footer.tsx` — dark footer with columns
