# Forkbite — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Meal2" — https://colorlib.com/wp/template/meal2/
- **Preview:** https://preview.colorlib.com/theme/meal2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/meal2-free-template.jpg
- **Preview fetched:** Yes (HTML + CSS analyzed)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, section backgrounds

## Section Order (top → bottom)

1. **Navbar** — sticky, logo "Forkbite." with orange dot, desktop nav with dropdowns, "Book a table" button, hamburger → off-canvas menu
2. **Hero** — full-width bg image + dark overlay, "Enjoy Your Healthy Delicious Meal" caption, "Treat Yourself" heading, "Explore now" CTA, scroll-down indicator, social icons on left
3. **Popular Foods** — 2-column: left category tabs (Breakfast/Lunch/Dinner/Drinks with icons) + right OwlCarousel with 4 slides, each showing 4 dishes in 2×2 grid
4. **Desserts** — 4-column grid of bordered cards (image + name + price)
5. **Testimonials + Gallery** — parallax bg + warm overlay, left: testimonial carousel, right: 2×2 photo gallery + "More Galleries" button
6. **Events** — OwlCarousel with event cards (alternating image/text layout, price, title, description, checklist)
7. **Book a Table CTA** — parallax bg + warm overlay, centered heading + button
8. **Footer** — dark olive (#645f56), 4-column: About+social, Projects links, Services links, Contact info + copyright

## Fidelity Notes

### Navbar
- White bg on scroll, transparent over hero
- Logo: "Forkbite" + orange dot (`<span class="text-primary">.</span>`)
- Desktop: horizontal nav with dropdown menus (Menu → Elements, Menu Two → Sub Menus)
- "Book a table" button: small, primary, pill shape, right-aligned
- Mobile: off-canvas slide menu with close button

### Hero Section
- Background image with dark overlay (rgba(0,0,0,0.4))
- Content centered, AOS fade-up animations with staggered delays
- Social icons: vertical stack on left side (WhatsApp, Instagram, Facebook, Twitter)
- Scroll-down indicator at bottom center

### Popular Foods
- Two-column layout: left (3 cols) category selector, right (8 cols) carousel
- Left: subtitle + heading + 4 category tabs with small food icons (use picsum or lucide icons)
- Right: OwlCarousel replacement → React carousel, 4 slides, 2×2 grid per slide
- Each dish card: image thumbnail + h3 name + price
- Slide counter in top-right corner

### Desserts
- 4 equal columns, each card with border (1px solid rgba(0,0,0,0.1)), border-radius 4px
- Each: small dessert image (60px) + name + price
- AOS fade-up with staggered delays

### Testimonials + Gallery
- Parallax background with WARM overlay (rgba(245,201,126,0.9)) — not dark
- Left column (5 cols): testimonial carousel
  - Each: circular author photo, name, position, blockquote with large quote mark
  - 3 testimonials: John Doe (CEO), James Woodland (Designer), Rob Smith (Product Designer)
- Right column (6 cols): photo gallery
  - 2×2 image grid with border-radius 7px
  - "More Galleries" CTA button

### Events
- OwlCarousel with 2 event slides
- Each slide: two-column, alternating image position
  - Image: party photo (use placeholder)
  - Details: price badge, h3 title, description, checklist items
- Events: "Birthday Party" ($200.99), "Guest Chef Night Party" ($200.99)

### Book a Table CTA
- Same warm overlay as testimonials section
- Centered content: subtitle, heading, description, single CTA button
- Links to a reservation page (in React, just a CTA button)

### Footer
- Dark olive (#645f56) background
- 4-column layout:
  - About + social icons (white circles, 30×30px, black icons)
  - Projects links (muted white text, hover to full white)
  - Services links
  - Contact: address, phone numbers, email
- Copyright bar at bottom

## Component Plan

- `src/App.tsx` — compose all sections
- `src/components/Navbar.tsx` — sticky nav with off-canvas menu
- `src/components/Hero.tsx` — full-width bg + overlay + content + social icons
- `src/components/PopularFoods.tsx` — category tabs + dish carousel
- `src/components/Desserts.tsx` — 4-column dessert grid
- `src/components/TestimonialsGallery.tsx` — split section with carousel + gallery
- `src/components/Events.tsx` — event carousel with alternating layout
- `src/components/BookTableCta.tsx` — parallax CTA section
- `src/components/Footer.tsx` — 4-column footer + copyright

## Design Token Usage in Tailwind

In `src/index.css` `@theme` block:
- `--color-brand: #ff5200` (orange primary)
- `--color-brand-hover: #ff6014` (hover state)
- `--color-body: #fee2b3` (warm peach page bg)
- `--color-warm-overlay: rgba(245,201,126,0.9)` (testimonials/gallery overlay)
- `--color-footer: #645f56` (dark olive footer)
- `--color-heading: #000000` (headings)
- `--color-body-text: #333` (paragraphs)
