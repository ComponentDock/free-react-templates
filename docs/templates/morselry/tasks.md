# Morselry — Implementation Tasks

## Setup
- [ ] Create apps/morselry (copy simplest existing app, rename package)
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up index.html with Google Fonts (Poppins + Philosopher)
- [ ] Configure Tailwind theme tokens in index.css (#DB9A64 brand, #001D38 dark)

## Components (TDD: write tests first)

### Navbar.tsx
- [ ] Tests: renders logo, nav links, CTA, transparent bg
- [ ] Implement: transparent header with logo, nav, "Book a Table" CTA
- [ ] Sticky behavior on scroll (optional enhancement)

### HeroSlider.tsx
- [ ] Tests: renders slides, headline, CTA button, navigation arrows, overlay
- [ ] Implement: full-width carousel with gradient overlay, centered text, nav arrows
- [ ] Use picsum.photos for slide backgrounds with morselry seeds

### About.tsx
- [ ] Tests: renders heading, description, food list, images
- [ ] Implement: 2-column layout with text left, overlapping images right
- [ ] SVG icons for food list items (use lucide-react)
- [ ] Decorative accent elements

### DeliciousMenu.tsx
- [ ] Tests: renders tabs, menu items, tab switching, pricing
- [ ] Implement: tab navigation (Dinner/Breakfast/Lunch), 2-column menu grid
- [ ] Each item: thumbnail, title, description, price
- [ ] State management for active tab

### Testimonials.tsx
- [ ] Tests: renders quotes, authors, stars, carousel behavior
- [ ] Implement: carousel with 2 testimonials, dark overlay background
- [ ] Star rating display, author photos

### PhotoGallery.tsx
- [ ] Tests: renders grid, image count, lightbox interaction
- [ ] Implement: asymmetric grid (large + small images), lightbox on click
- [ ] Use picsum.photos for gallery images

### Reservation.tsx
- [ ] Tests: renders form fields, submit button, address info, map placeholder
- [ ] Implement: map placeholder left, booking form right
- [ ] Form fields: Name, Phone, Date, Dinner select, Person select
- [ ] Address and phone info below form

### Footer.tsx
- [ ] Tests: renders columns, social icons, subscribe form, copyright, Component Dock link
- [ ] Implement: 3-column footer with logo/links/subscribe
- [ ] Social icons (lucide-react)
- [ ] Copyright bar with Component Dock attribution

### App.tsx
- [ ] Tests: renders all sections in correct order
- [ ] Implement: compose all sections

## Verification
- [ ] npm run test:coverage — 100%
- [ ] npm run build — no errors
- [ ] Visual comparison with original preview
- [ ] No Colorlib references in app code
- [ ] Footer links to componentdock.com
