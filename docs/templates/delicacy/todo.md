# Delicacy — Implementation TODO

Source: ColorLib Caviar (https://preview.colorlib.com/theme/caviar/)
Spec: openspec/specs/template-delicacy/spec.md

## Section order (match source 1:1)

1. **Navbar** — sticky, dark semi-transparent on scroll, brand "delicacy", 7 nav links
2. **Hero** — fullscreen background image slider, dark overlay, heading + paragraph + "Reservation" CTA
3. **About Us** — two-column (image left, text right), subtitle "restaurant style"
4. **About Us (row 2)** — reversed layout, subtitle "our chef"
5. **Dish Menu** — dark bg (#333), heading "Special", 3-column dish cards, "View The Menu" button
6. **Awards** — light bg, heading "Awards", horizontal row of award/logos
7. **Testimonials** — heading, carousel of cards with circular avatars + name + review
8. **Reservation** — split: form left (date, time, persons, name, message + submit), image right
9. **Footer** — dark bg (#333), brand "delicacy", copyright, Component Dock link

## Design fidelity notes

### Colors
- Brand/accent: #ff0000 (pure red) — buttons hover, nav active, section accents
- Dark surface: #333333 — dish menu bg, footer bg
- Body bg: #fafafa
- White: #ffffff — hero overlay, button default, headings on dark
- Border: #b2b2b2 — button border
- Input underline: #c1c1c1
- Awards bg: #f9f9f9

### Typography
- Body: Open Sans, sans-serif
- Buttons: Work Sans, sans-serif
- Section headings: 36px, font-weight 700, line-height 1
- Body text: 14-16px, rgba(0,0,0,0.8) for secondary

### Buttons
- Rectangular (border-radius: 0) — important visual identity
- min-width: 180px, height: 54px
- Border: 1px solid #b2b2b2
- Default: white bg, black text
- Hover: red text (#ff0000)
- Dot decoration: red circle on the left side (caviar-btn > span)

### Layout patterns
- Hero: full-viewport height, background image with rgba(0,0,0,0.6) overlay
- About: two-column alternating (image left/text right, then reversed)
- Dish menu: 3-column grid, circular dish images, dark bg
- Awards: flex row of grayscale logos
- Testimonials: owl-carousel style, circular avatar thumbnails
- Reservation: split 50/50, form with underline-only inputs, image on right
- Footer: centered, dark, minimal

### Shared components to reuse from packages/ui
- Button / ButtonLink (with custom variant for rectangular style)
- Card (for dish cards if applicable)
- cn() for class composition

### Placeholder images
- Hero backgrounds: picsum.photos/seed/delicacy-hero-1/1920x1080
- About images: picsum.photos/seed/delicacy-about-1/600x400
- Dish images: picsum.photos/seed/delicacy-dish-N/400x400
- Testimonial avatars: picsum.photos/seed/delicacy-testimonial-N/100x100
- Reservation image: picsum.photos/seed/delicacy-reservation/800x600
- Award logos: use lucide-react icons or placeholder SVGs

### Component file structure
- src/App.tsx — compose all sections
- src/components/Navbar.tsx
- src/components/Hero.tsx
- src/components/AboutUs.tsx
- src/components/DishMenu.tsx
- src/components/Awards.tsx
- src/components/Testimonials.tsx
- src/components/Reservation.tsx
- src/components/Footer.tsx
