# Blitz — Prep Notes (ColorLib Cleanex)

## Structure order (14 sections, top to bottom)

1. TopBar — contact info + social icons
2. Navbar — dark bg, logo, nav links, CTA button
3. Hero — full-width bg image + overlay + headline + CTA
4. About — two-column text
5. Why Choose Us — 4 feature cards with icons
6. Counter — bg image + overlay + 4 stat counters
7. Industries We Serve — 4-column icon list
8. Our Services — 6 service cards (3×2 grid)
9. How it Works — bg image + overlay + 3 steps
10. Testimonials — carousel on light bg
11. Pricing — 3 pricing cards
12. CTA Banner — bg image + headline
13. Blog — 3 blog cards on light bg
14. Footer — bg image + 4 columns

## Fidelity notes per section

### TopBar
- Light gray (#f8f9fa) background
- Two columns: left = email + phone (with Font Awesome icons), right = hours + social icons
- Font size small, Roboto 400

### Navbar
- Dark background (#343a40 → near-black)
- Logo with flaticon-clean icon + "Blitz."
- Nav links: Home, About, Pricing, Services, Blog, Contact
- CTA button: gray (#6c757d) "Request A Quote", rounded
- Mobile: hamburger menu with fa-bars icon

### Hero
- Full-width background image (use picsum.photos/seed/blitz-hero/1920/900)
- Dark semi-transparent overlay (rgba(0,0,0,0.5))
- Left-aligned content: subheading "Introducing Blitz", h1 "A Clean Home is A Happy Home", paragraph, CTA button
- CTA: gray .btn-secondary, rounded

### About
- White background, no padding top
- Subheading "About Company", heading "Most Awarded Cleaning Company Since 2000"
- Two-column layout: left = heading + text, right = heading + text
- Roboto 300 for body, 700 for headings

### Why Choose Us
- White background
- Subheading "Why Choose Us?"
- 4-column grid: icon (circle, brand blue bg), heading, description
- Icons: flaticon or lucide equivalents (checkmark-in-shield, tools, warranty, fast)

### Counter
- Background image (picsum.photos/seed/blitz-counter/1920/500) with dark overlay
- 4 counters in a row: number (#fedd32 yellow) + label (white)
- Animated count-up on scroll (use framer-motion or CSS)

### Industries
- White background
- Subheading "Services", heading "Industries We Serve"
- 4-column list: icon (flaticon or lucide) + heading + checkmark list
- Items: Home Cleaning, Office Cleaning, Industry, Car Cleaning

### Our Services
- White background
- Subheading "Our Services", heading "Offering Best Cleaning Services"
- 6 cards in 3-column grid: icon circle (brand blue), heading, description, arrow link
- Hover: card lifts (-5px), shadow appears, icon bg turns brand blue
- Card border-left on hover: brand blue

### How it Works
- Background image (picsum.photos/seed/blitz-works/1920/600) with dark overlay
- Subheading "How it Works", heading "Get Amazing Cleaning in 3 Simple Ways"
- 3 columns: icon circle, step title, description
- Steps: "Pick a suitable plan", "Set your schedule", "Get things done"

### Testimonials
- Light gray (#f7f7f7) background
- Subheading "Testimonial", heading "What Are Clients Says"
- Carousel (owl-carousel style): avatar circle, client name, quote text
- Navigation dots at bottom

### Pricing
- White background
- Subheading "Pricing", heading "Our Plans & Pricing"
- 3 cards: plan name, price, period, feature list (checkmarks), CTA button
- Cards in a row, equal width

### CTA Banner
- Background image (picsum.photos/seed/blitz-cta/1920/400) with dark overlay
- Centered text: "Need to clean your house? Just hire us!"
- CTA button

### Blog
- Light gray (#f7f7f7) background
- Subheading "Our Blog", heading "Recent Post"
- 3 cards: image (rounded), date, title, excerpt
- Cards in a row

### Footer
- Background image (picsum.photos/seed/blitz-footer/1920/600) with dark overlay
- 4 columns: logo + description + social icons, Recent Posts (2 posts with thumbnails), Explore links, Contact info (address, phone, email)
- Bottom: copyright + "Made with Component Dock" link to https://www.componentdock.com/

## Key CSS tokens to map to Tailwind @theme

```
--brand: #225ae1
--accent: #fedd32
--dark-navy: #161655
--text-primary: #212529
--text-muted: #6c757d
--bg-light: #f7f7f7
--bg-gray: #f8f9fa
```

## Placeholder images

All images should use deterministic picsum.photos URLs:
- Hero: picsum.photos/seed/blitz-hero/1920/900
- Counter: picsum.photos/seed/blitz-counter/1920/500
- Works: picsum.photos/seed/blitz-works/1920/600
- CTA: picsum.photos/seed/blitz-cta/1920/400
- Footer: picsum.photos/seed/blitz-footer/1920/600
- Blog images: picsum.photos/seed/blitz-blog-1/800/500, etc.
- Service icons: lucide-react equivalents
