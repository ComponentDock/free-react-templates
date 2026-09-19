# Premises — Implementation Tasks & Design Notes

## Source
- **ColorLib:** Royalestate
- **Preview:** https://preview.colorlib.com/theme/royalestate/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/royalestate-free-template.jpg
- **New name:** premises

## Design Notes

### Color Palette
- Primary: #78d5ef (light cyan/sky blue) — CTAs, active states, accents
- Primary hover: #4ac7ea / #56caeb
- Accent/Price: #f05d23 (orange) — price display
- Dark: #252a2b — top bar, navbar, footer
- Dark alt: #3c312e — parallax/counter overlay
- Body text: #212529
- Section light bg: #f8f9fa
- Muted: #546062 — top bar text
- Border: #2e3536 — top bar dividers

### Typography
- Font: Poppins (Google Fonts, weights 300–700)
- Headings: 400–600 weight
- Body: 400 weight

### Button Styles
- Primary CTA: bg #78d5ef, white text, uppercase, no border-radius
- Navbar Sign-In: dark bg, border
- Navbar Sign-Up: #78d5ef bg
- Search: dark bg (#252a2b), white text
- Footer subscribe: white bg, dark text

### Layout Notes
- Top bar: flex row, social left, phone right, #252a2b bg
- Navbar: dark bg, brand split (bold "Premise" + light "s"), right-aligned CTAs
- Hero: full-width image carousel, dark overlay, card overlay on right side (col-md-6)
- Search: horizontal form, 8 columns for fields, dark Search button
- Services: 4-col grid, icon + heading + desc
- Properties: 4-col grid cards (2 sections)
- Counter: bg image, 4 stat columns
- Testimonials: carousel, quote cards
- Blog: 4-col grid cards
- Newsletter: parallax bg, centered form
- Footer: 4-col (brand+social, Buy, Sell, Contact), copyright bar

## Tasks

- [ ] Create app scaffold: `apps/premises/` (copy simplest existing app, rename package)
- [ ] Configure Tailwind theme tokens (colors, fonts)
- [ ] Build TopBar component (social icons, phone)
- [ ] Build Navbar component (brand, links, CTAs, sticky behavior)
- [ ] Build HeroSlider component (image carousel, property card overlay)
- [ ] Build SearchBar component (8-field horizontal form)
- [ ] Build Services component (4-column feature cards)
- [ ] Build PropertyGrid component (reusable for Recent + Recommended)
- [ ] Build StatsCounter component (animated counters with bg image)
- [ ] Build Testimonials component (carousel with quotes)
- [ ] Build BlogGrid component (4-column blog cards)
- [ ] Build Newsletter component (parallax bg, email form)
- [ ] Build Footer component (4-column, social, links, Component Dock)
- [ ] Compose App.tsx with all sections in order
- [ ] Add placeholder images via picsum.photos
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% coverage
- [ ] Verify responsive behavior (hamburger nav, stacked cards)
- [ ] Run: `npm run spec:validate`
- [ ] Run: `scripts/verify-app.sh premises`
- [ ] Commit and push
