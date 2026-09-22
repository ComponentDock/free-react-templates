# Grandview — Prep Notes & Todo

**Source:** ColorLib "Sogo Hotel" → https://preview.colorlib.com/theme/sogo/
**New name:** grandview
**Category:** Hotel landing page

## Tasks

- [ ] Set up app: copy simplest existing app, rename package to @free-react-templates/grandview
- [ ] Add Playfair Display + Roboto fonts via Google Fonts link in index.html
- [ ] Define design tokens in index.css @theme: brand #ffba5a, heading font, body font
- [ ] Implement Navbar component (sticky, logo, nav links, hamburger)
- [ ] Implement Hero component (full-viewport bg image, dark overlay, centered text, mouse scroll)
- [ ] Implement CheckAvailability component (4-column form, date pickers, selects, button)
- [ ] Implement Welcome component (2-column layout, heading, text, Learn More btn, images)
- [ ] Implement Rooms component (heading, 3-column card grid, room data)
- [ ] Implement PhotoGallery component (heading, image carousel/slider)
- [ ] Implement RestaurantMenu component (dark overlay, heading, menu items grid)
- [ ] Implement Testimonials component (heading, testimonial cards)
- [ ] Implement Events component (heading, 3-column blog cards)
- [ ] Implement CTA component (dark overlay, heading, Reserve Now button)
- [ ] Implement Footer component (4-column, contact, social, newsletter, Component Dock link)
- [ ] Compose all sections in App.tsx in correct order
- [ ] Write tests for each component (100% coverage)
- [ ] Verify responsive design (mobile breakpoints)
- [ ] Run verify-app.sh and ensure all checks pass

## Section Order

1. Navbar
2. Hero (full-viewport, dark overlay)
3. Check Availability (light bg #f2f4fb)
4. Welcome (2-column, light bg)
5. Rooms & Suites (3-column cards)
6. Photo Gallery (slider)
7. Restaurant Menu (dark overlay)
8. Testimonials
9. Events/Blog (light bg)
10. CTA Reserve (dark overlay)
11. Footer (dark bg)

## Design Notes

- Brand color: warm gold #ffba5a — use for all primary buttons and accents
- Heading font: Playfair Display (serif) — elegant hotel feel
- Body font: Roboto (sans-serif) — clean readability
- Buttons: pill-shaped (border-radius: 50px), gold background, white text
- Alternating section backgrounds: white / #f2f4fb (light blue-gray) / dark overlays
- Dark overlay sections: rgba(0,0,0,0.45) on background images
- Dark backgrounds: #1a1a1a (restaurant menu, footer)
- Use picsum.photos with seed "grandview-N" for placeholder images
- Hero background: full-viewport with parallax-like effect (CSS background-attachment: fixed)
- Check availability form: use native date inputs or datepicker component
- Photo gallery: implement as a horizontal scrollable carousel or image slider
- Restaurant menu: organize dishes in 3-column grid with dish names
- Testimonials: use avatar images, quotes, and reviewer names
- Footer: Component Dock branding link required
