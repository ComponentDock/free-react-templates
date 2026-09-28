# Forkfully — Prep Notes

**Source:** ColorLib Foodbar — https://colorlib.com/wp/template/foodbar/
**Preview:** https://preview.colorlib.com/theme/foodbar/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/foodbar-free-template.jpg

## Section Order (from live DOM)

1. Navbar (fixed, transparent → sticky)
2. Hero Banner (split: left text panel + right decorative planet/food)
3. Top Rated Dishes (3-col grid of dish cards)
4. Menu Area (2-col list of menu items)
5. Gallery (masonry image grid with hover overlay)
6. Testimonials (owl-carousel slider)
7. Reservation Form (name, email, phone, date, event, submit)
8. Footer (4 link columns + newsletter + copyright + social icons)

## Design Notes

### Colors
- Primary: #f42f2c (red) — buttons, active nav, hover states
- Light bg: #f9f9ff — hero left panel, alternating sections
- Headings: #222222
- Body: #777777
- Footer newsletter button: gradient #2c28b1 → #9b5cf6 (purple)

### Typography
- Headings: Oswald, weight 700, various sizes (60px hero, 48px section titles)
- Body: Roboto, weight 400, 16px, line-height 27px

### Layout
- Hero: full viewport height, split 50/50
- Section padding: 120px top/bottom
- Max container width: 1170px
- Dish grid: 3 equal columns
- Menu: 2 equal columns
- Gallery: masonry (7+5, 4+4+5, 7 columns across 3 rows)
- Footer: 4+2 column layout (4 link cols + newsletter col)

### Buttons
- .main_btn: solid #f42f2c, no border-radius visible (flat/square), padding 0 30px
- .submit_btn: same style, full-width in form
- Hover: transparent background, #f42f2c text
- Newsletter .sub-btn: gradient purple, small arrow icon

### Decorative Elements
- Animated planet circles on hero right and section titles
- Shape images rotating around circles (CSS keyframe animations)
- Gallery hover overlay with semi-transparent background + picture icon

### Component Structure
- `src/App.tsx` — compose all sections
- `src/components/Navbar.tsx` — sticky nav with mobile toggle
- `src/components/Hero.tsx` — split hero with CTA
- `src/components/TopDishes.tsx` — 3-col dish card grid
- `src/components/MenuSection.tsx` — 2-col menu list
- `src/components/Gallery.tsx` — masonry image grid
- `src/components/Testimonials.tsx` — carousel slider
- `src/components/Reservation.tsx` — booking form
- `src/components/Footer.tsx` — links + newsletter + social

### Implementation Notes
- No parallax (unlike some other ColorLib templates)
- Carousel can use a simple CSS/JS solution or a lightweight React carousel
- Gallery masonry: use CSS grid with varying column spans
- Form: controlled inputs with basic validation
- Mobile: hamburger triggers off-canvas side menu
- Placeholder images: picsum.photos with seed forkfully-1, forkfully-2, etc.
