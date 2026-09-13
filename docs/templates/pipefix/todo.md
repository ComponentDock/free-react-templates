# PipeFix — Implementation Todo & Design Notes

## Source
- **ColorLib slug:** plumber
- **Preview URL:** https://preview.colorlib.com/theme/plumber/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/plumber-free-template.jpg
- **New name:** pipefix

## Section Order (from live preview DOM)

1. Navbar
2. Banner/Hero
3. Quote Section
4. Service Categories (3 cards)
5. Features Section (image + 4 feature cards)
6. Counter Section (4 stats)
7. Video Section
8. Call-to-Action
9. Testimonials Carousel
10. Contact Form
11. Footer

## Design Notes

### Navbar
- Fixed top, transparent by default, dark bg on scroll
- Logo "PipeFix" with red (#f53f51) left border (4px solid)
- Nav links: Home, Services, Features, Testimonials, Contact
- Hamburger on mobile (slide-in mobile nav from left)

### Banner/Hero
- Full-width background image with dark navy overlay (rgba(4,9,30,0.9))
- Heading: "We're your plumber" — 72px, bold, uppercase, white
- Description paragraph in white
- CTA: "Get a Quote" pill button (bg: #f53f51, radius: 50px, white text, hover: transparent + white border)
- Use picsum.photos for background

### Quote Section
- Two-column layout
- Left: description text
- Right: "Plumbing for those Area Nowhere." with <span> accent on key words
- White background

### Service Categories
- 3 cards in a row (responsive: stack on mobile)
- Each: hexagon icon (use lucide-react: Wrench, Home, Building2), title, description
- Titles: Maintenance, Residential Service, Commercial Service
- Light bg (#f9f9ff)

### Features Section
- Left: image of person working (picsum.photos)
- Right: heading + 4 feature cards
- Feature cards: white bg, padding 30px, hover shadow (box-shadow: -14.142px 14.142px 20px rgba(157,157,157,0.2))
- Features: Multiple Layouts, Clean Coding, Endless Features, Fully Customizable

### Counter Section
- 4 stat cards in a row
- Each: large red number (#f53f51, 60px), label below
- Stats: Happy Clients (2536), Total Projects (6784), Cups Coffee (1059), Tickets Submitted (12239)
- White cards with red shadow, border-radius 10px
- Animate count-up on scroll (use intersection observer + requestAnimationFrame)

### Video Section
- Dark background image with overlay (rgba(4,9,30,0.75))
- Heading: "Explore ourself in a new way" (white)
- Play button (use lucide-react Play icon in a circle)

### Call-to-Action
- Dark navy bg (#04091e)
- Heading: "Got Impressed to our features" (white)
- Description text (white)
- "Get a free Quote" white pill button (bg: white, text: dark, hover: transparent + white border)

### Testimonials
- Carousel of testimonial cards
- Each card: star rating (5 stars), quote text, client name + role
- Light bg (#f9f9ff), border-radius 10px, border: 1px solid #eee
- Hover: bg white, name color changes to red
- Navigation dots at bottom (red active dot)
- Use CSS-only carousel or lightweight React carousel

### Contact Section
- Dark navy bg (#04091e)
- "Get in Touch" heading (white, 36px, letter-spacing 4px)
- Form: Name, Email, Message (transparent inputs, border: 1px solid rgba(111,117,152,0.3))
- "Send Message" button (primary-btn style)
- Form validation with zod + react-hook-form

### Footer
- Dark navy bg (#04091e)
- 3 widget columns: About (text + newsletter input), Support (nav links), Social (icon links)
- Newsletter input + red submit button
- Copyright bar with Component Dock link
- Social icons: lucide-react (Facebook, Twitter, Instagram, LinkedIn)

## Token Reference

```
Primary:    #f53f51 (red)
Navy:       #04091e (dark)
Surface:    #f9f9ff (light)
White:      #ffffff
Text dark:  #222222
Muted:      #777777
Footer:     #cccccc
Font:       Poppins
Button:     pill shape (radius: 50px), 42px height, 500 weight, uppercase
Button hover: transparent bg + white border (or inverse for dark sections)
Card radius: 10px
Counter shadow: 0px 10px 50px rgba(245,63,81,0.3)
```

## Fidelity Notes

- The original uses Owl Carousel for testimonials — replace with a simple React carousel (CSS scroll-snap or a lightweight lib)
- The original uses hexagon CSS shapes for service icons — use lucide-react icons in styled containers instead
- The original uses animate.min.css for scroll animations — use framer-motion or intersection observer + CSS
- The original uses nice-select for dropdowns — not needed (no dropdowns in main template)
- The original uses a video background image with play button — static image with play overlay is fine
- All images: use picsum.photos with seed for determinism
- Icons: lucide-react instead of FontAwesome
- Counter animation: implement with React state + requestAnimationFrame triggered by intersection observer
