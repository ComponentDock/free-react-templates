# Carroute — Design Notes & Implementation Tasks

## Source Mapping
- **ColorLib source:** CarRental (carrentals)
- **Preview URL:** https://preview.colorlib.com/theme/carrentals/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carrentals-free-template.jpg
- **New name:** carroute

## Section-by-Section Fidelity Notes

### 1. Navbar
- Absolute positioning (over hero), transparent background initially
- Logo: bold 900 weight, left-aligned
- Nav links right-aligned, hover → black, active → brand blue #0779e4
- Mobile: hamburger icon → slide-in panel from right (300px wide)
- Use `packages/ui` Navbar if applicable, else build standalone

### 2. Hero
- Full viewport height (100vh, min 570px), background image cover
- Dark overlay implied by the design
- Large heading: "Rent a car is within your finger tips." — bold
- Search form: 4-column row on desktop (car type select, pick-up date, drop-off date, search button)
- On mobile: stack vertically
- Form control height: 55px, Bootstrap-style rounded
- Button: brand blue, full-width on mobile

### 3. How It Works
- White background section
- Section heading: bold, with subtitle "Easy steps to get you started"
- 3 step cards: numbered circle (1, 2, 3 as large background span), number badge (01., 02., 03.) in brand blue, title, description
- Circles are large decorative elements

### 4. Video CTA
- Centered play icon button with circle background
- Caption: "Video how it works"
- Simple centered layout

### 5. Promo Section
- Two-column: image (right on desktop, left on mobile), text (left on desktop)
- Heading: bold, "You can easily avail our promo for renting a car."
- Body paragraph + "Meet them now" button (brand blue)

### 6. Car Listings
- bg-light (#f7f7f7) background
- Section heading bold with subtitle
- 6 cards in 3-col grid (md-6, lg-4)
- Each card: image left, content right (horizontal layout via d-flex)
- Card content: car name (h3), rent price ($389.00/day), specs row (luggage, doors, passengers), description, "Rent Now" button
- Border-bottom between specs and description

### 7. Features
- White background
- 6 service cards in 3-col grid
- Each card: dark background, circular icon (brand icon font → use lucide-react), title, description, "Learn more" link
- Hover effect on cards

### 8. Testimonials
- bg-light background
- 3 testimonial cards in 3-col grid
- Each: blockquote with quote marks, author photo, author name (bold), role

### 9. CTA Banner
- Full-width bg-primary (#0779e4) section
- Two-column: heading + subtitle left, "Rent a car now" white button right
- White text on blue background

### 10. Footer
- White background, dark text
- About Us column with social icons (facebook, instagram, twitter, linkedin)
- 4 link columns: Quick Links, Resources, Support, Company (each with 5 links)
- Bottom: copyright line with Component Dock link (replacing Colorlib attribution)

## Component Architecture

```
src/
  main.tsx
  App.tsx              — composes all sections
  index.css            — Tailwind + @theme tokens
  components/
    Navbar.tsx         — absolute navbar, mobile menu
    Hero.tsx           — full-viewport hero with search form
    HowItWorks.tsx     — 3 numbered steps
    VideoCta.tsx       — play button with caption
    PromoSection.tsx   — 2-column promo
    CarListings.tsx    — 6 car cards grid
    Features.tsx       — 6 feature cards grid
    Testimonials.tsx   — 3 testimonial cards
    CtaBanner.tsx      — blue CTA section
    Footer.tsx         — about + link columns + copyright
  test/
    setup.ts
```

## Design Tokens for Tailwind @theme

```css
@theme {
  --color-primary: #0779e4;
  --color-body: #364d59;
  --color-black: #000000;
  --color-surface: #ffffff;
  --color-surface-alt: #f7f7f7;
  --font-family-body: "Roboto", sans-serif;
}
```

## Placeholder Images

| Slot | URL |
|------|-----|
| Hero background | `https://picsum.photos/seed/carroute-hero/1920/1080` |
| Promo image | `https://picsum.photos/seed/carroute-promo/800/600` |
| Car 1–6 | `https://picsum.photos/seed/carroute-car-1/600/400` through `...car-6/` |
| Testimonial 1–3 | `https://picsum.photos/seed/carroute-person-1/100/100` through `...person-3/` |

## Implementation Task Order

1. Scaffold app from simplest existing template, rename package to `@free-react-templates/carroute`
2. Set up `index.css` with @theme tokens (brand blue, Roboto font)
3. Build Navbar component (absolute, mobile menu)
4. Build Hero component (bg image, heading, search form)
5. Build HowItWorks component (3 steps)
6. Build VideoCta component (play button)
7. Build PromoSection component (2-col layout)
8. Build CarListings component (6 card grid)
9. Build Features component (6 card grid)
10. Build Testimonials component (3 cards)
11. Build CtaBanner component (blue full-width)
12. Build Footer component (columns + copyright + Component Dock link)
13. Compose all sections in App.tsx
14. Write tests for each component (TDD, 100% coverage)
15. Run `scripts/verify-app.sh carroute`
16. Commit + push + PR
