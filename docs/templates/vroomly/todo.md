# Vroomly — Implementation Notes

Source: ColorLib "Car Rental" (slug: `car-rental`)
Preview: https://preview.colorlib.com/theme/carrental/

## Component Structure

```
apps/vroomly/
  src/
    main.tsx              — entry (excluded from coverage)
    App.tsx               — composes all sections in order
    index.css             — Tailwind entry + @theme tokens
    components/
      Navbar.tsx          — sticky header, logo + nav links
      Hero.tsx            — full-screen banner + booking form
      Features.tsx        — 6 service cards in 3-col grid
      About.tsx           — split image/text layout
      CarModels.tsx       — carousel of car cards with pricing
      Facts.tsx           — gold bar with 5 stat counters
      Reviews.tsx         — 6 review cards with star ratings
      CallToAction.tsx    — dark overlay CTA section
      Blog.tsx            — 4 blog cards in 4-col grid
      Footer.tsx          — 5-column footer with newsletter
    test/
      setup.ts            — vitest setup (jest-dom)
  vite.config.ts          — injectUiSource() required
  package.json            — @free-react-templates/vroomly
  public/
    CNAME                  — vroomly.free.componentdock.com
```

## Section-by-Section Fidelity Notes

### 1. Navbar
- Sticky header with logo left, nav links right
- Links: Home, About, Cars, Service, Blog, Contact
- Mobile: hamburger menu toggle
- Use lucide-react icons for hamburger (Menu/X)

### 2. Hero / Banner
- Full-screen height (100vh) with background image + dark overlay (rgba(0,0,0,0.8))
- Left side: headline "Relaxed Journey Ever", subtext, "Rent Car Now" gold button
- Right side: booking form with custom-styled selects and date inputs
  - Fields: car model select, pickup select, pickup date, dropoff select, dropoff date, name, email, phone
  - "Confirm Car Booking" button (full width)
- Use `picsum.photos/seed/vroomly-hero/1920/1080` for background
- Form is display-only (no backend submission)

### 3. Features / Services
- Section heading: "What Services we offer to our clients"
- 6 cards in responsive grid (3 cols → 2 → 1)
- Each card: icon (lucide-react), title, short description
- Card bg: #f9f9ff, border-radius: 10px, hover: shadow + title turns gold
- Icons: Users, Shield, Headphones, Wrench, Award, MessageSquare (mapped from Linearicons)

### 4. About
- Split layout: left half image, right half text
- Heading: "Globally Connected by Large Network"
- Bold subtext: "We are here to listen from you deliver excellence"
- Paragraph with lorem-style copy
- "get details" primary button
- Use `picsum.photos/seed/vroomly-about/800/600` for image

### 5. Car Models
- Section heading: "Choose your Desired Car Model"
- Carousel of 3+ car cards (owl-carousel pattern → use CSS scroll-snap or simple state carousel)
- Each card: left side (name, price/day, description, specs list), right side (car image)
- Specs: Capacity, Doors, Air Condition, Transmission
- Price in gold (#fab700), "Book This Car Now" button (dark #222 bg)
- Use `picsum.photos/seed/vroomly-car-N/600/400` for car images

### 6. Facts / Stats
- Full-width gold (#fab700) background bar
- 5 stat items in a row: number + label
- Numbers: use animated counter (countUp on scroll into view)
- Items: Projects Completed, Happy Clients, Tasks Completed, Cups of Coffee, Professionals

### 7. Reviews
- Section heading: "Some Features that Made us Unique"
- 6 review cards in 3-col grid
- Each: name, review text, star rating (orange filled stars)
- Card bg: #f9f9ff, border-radius: 10px
- Star component: render 5 stars, filled based on rating

### 8. Call-to-Action
- Background image with dark overlay (rgba(4, 9, 30, 0.75))
- Centered text: "Experience Great Support"
- Paragraph description
- "Reach Our Support Team" button (gold bg, hover → transparent)
- Use `picsum.photos/seed/vroomly-cta/1920/600` for background

### 9. Blog
- Section heading: "Latest From Our Blog"
- 4 blog cards in 4-col grid (→ 2 → 1 on mobile)
- Each: thumbnail image, date, title, excerpt, bottom meta (likes + comments with icons)
- Use lucide-react Heart and MessageSquare icons
- Use `picsum.photos/seed/vroomly-blog-N/400/300` for thumbnails

### 10. Footer
- Dark navy background (#04091e)
- 5 columns: Quick Links, Features, Resources, Social, Newsletter
- Social: Facebook, Twitter, Dribbble, Behance icons (use lucide-react)
- Newsletter: email input + submit arrow button
- Bottom: copyright with Component Dock link (required)
- Footer links are placeholder `#` hrefs

## Design Token Implementation

```css
/* In index.css @theme */
--color-brand: #fab700;
--color-dark: #04091e;
--color-surface: #f9f9ff;
--color-text: #222222;
--color-text-muted: #777777;
--color-star: orange;
--color-social: #cccccc;
```

## Key Implementation Pitfalls

1. **No ColorLib references** in any app file — provenance only in spec + TEMPLATES.md
2. **Footer MUST link Component Dock** — `https://www.componentdock.com/`
3. **CNAME file** must exist: `public/CNAME` → `vroomly.free.componentdock.com`
4. **injectUiSource()** required in vite.config.ts
5. **Poppins font** via Google Fonts `<link>` in index.html (not a local file)
6. **Carousel** — original uses owl-carousel; implement with CSS scroll-snap or React state, not a jQuery plugin
7. **Counter animation** — implement with IntersectionObserver + requestAnimationFrame, not jQuery.counterup
8. **Placeholder images** via picsum.photos with deterministic seeds
9. **Booking form** is visual only — no backend, prevent default on submit
10. **Responsive breakpoints**: 768px (tablet), 991px (large tablet), 1200px (desktop)
