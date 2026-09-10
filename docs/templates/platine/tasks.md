# Platine — Design Notes & Task Outline

Source: ColorLib "Caviar" (https://colorlib.com/wp/template/caviar/)
Preview: https://preview.colorlib.com/theme/caviar/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg

## Structure Order

1. **Navbar** — transparent overlay → sticky black on scroll
2. **Hero** — full-bleed bg image, dark overlay, left-aligned heading + paragraph + CTA
3. **About Us** — two alternating rows (img+text, text+img)
4. **Dish Menu** — dark bg, "Special" heading, 3-column dish cards
5. **Awards** — light bg, heading + 5 award logos horizontal
6. **Testimonials** — dark bg, carousel of reviewer cards
7. **Reservation** — dark bg, form (date, time, persons, name, message) + food image
8. **Footer** — dark bg, brand + copyright + Component Dock link

## Section-by-Section Fidelity Notes

### Navbar
- Brand text "platine" (lowercase) on left
- Nav links right-aligned: About Us, Menu, Awards, Testimonials, Reservation, Contact
- Transparent over hero; becomes `rgba(0,0,0,0.85)` sticky on scroll
- Mobile: hamburger toggles dropdown menu
- Optional search button (icon only) — can simplify to icon button

### Hero
- Full-width background image (hero-1.jpg original) with dark overlay
- Dark overlay: `rgba(0, 0, 0, 0.6)`
- Left-aligned content: h2 "Lorem Ipsum", paragraph, "Reservation" CTA button
- Button style: `background: #fff; color: #000; border-radius: 0;` with circular red dot (`#ff0000, border-radius: 50%`) before text
- Social icons vertically stacked on far left: Facebook, Instagram, Twitter
- Slider nav arrows on right side of hero

### About Us
- Section bg: `#f9f9f9`
- Two rows, each with image + text side by side
- Row 1: image left, text right — heading "About Us", subtitle "restaurant style", paragraph
- Row 2: text left ("our chef" subtitle), image right
- Images: food/restaurant photography
- Vertical padding: generous (~120-180px)

### Dish Menu
- Dark background: `#333333`
- "Special" heading centered
- "View The Menu" button (sharp corners, red dot accent)
- 3-column grid of dish cards:
  - Each card: dish image (transparent PNG), dish name (h6), price ($45)
  - Price color: `#ff0000`
- Section has semi-transparent overlay pseudo-element

### Awards
- Light/white background
- "Awards" heading on left column
- 5 award images in a horizontal flex row on the right
- Images are transparent PNGs (logos)

### Testimonials
- Dark background: `#333333`
- "Testimonials" heading centered
- Carousel of reviewer cards:
  - Each card: circular avatar image, reviewer name (h5), subtitle, quote paragraph
  - Cards arranged in a horizontal scroll/carousel
- Carousel navigation arrows

### Reservation
- Dark background: `#333333`
- "Reservation" heading
- Form fields (2-column layout where possible):
  - Date picker, Time picker
  - "Select Persons" text input, "Last name" text input
  - Full-width textarea (message)
  - "Reserve Your Desk" submit button (sharp corners, red dot accent)
- Large food image beside the form (flex layout)
- Form inputs: light bg, clean styling

### Footer
- Dark background: `#333333`
- Brand text "platine" (Work Sans font)
- Copyright text: year + "All rights reserved"
- Attribution: "Made with ❤ by Component Dock" linking to https://www.componentdock.com/
- Simple, centered layout

## Implementation Tasks

- [ ] Create `apps/platine/` from simplest existing app scaffold
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `src/index.css` with Tailwind + brand tokens (@theme)
- [ ] Implement `Navbar.tsx` — transparent → sticky, mobile toggle
- [ ] Implement `Hero.tsx` — bg image, overlay, text, CTA, social icons
- [ ] Implement `AboutUs.tsx` — two alternating image/text rows
- [ ] Implement `DishMenu.tsx` — dark bg, dish grid
- [ ] Implement `Awards.tsx` — logo row
- [ ] Implement `Testimonials.tsx` — dark bg, reviewer carousel
- [ ] Implement `Reservation.tsx` — dark bg, form + image
- [ ] Implement `Footer.tsx` — dark bg, brand + Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for each component (100% coverage)
- [ ] Verify: `scripts/verify-app.sh platine`
- [ ] Set `public/CNAME` to `platine.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://platine.free.componentdock.com`
