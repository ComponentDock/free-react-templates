# Floresco — Implementation TODO & Design Notes

## Source
- ColorLib slug: `florist`
- Preview: https://preview.colorlib.com/theme/florist/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/florist-free-template.jpg

## Implementation Order

### Phase 1 — Foundation
- [ ] Create `apps/floresco/` (copy simplest existing app, rename package to `@free-react-templates/floresco`)
- [ ] Set up `public/CNAME` → `floresco.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `index.css` with Tailwind entry + `@theme` tokens for brand `#f45d96`
- [ ] Add Google Fonts link in `index.html`: Libre Baskerville + Quicksand

### Phase 2 — Components (top to bottom)
- [ ] `Navbar.tsx` — sticky header with logo, nav links (Home, About, Services, Shop, Pages dropdown, Blog, Contact), right icons (search, heart, bag with counts), mobile hamburger
- [ ] `Hero.tsx` — full-width bg image slider, left-aligned text (subtitle, heading, pill CTA "Shop now")
- [ ] `Benefits.tsx` — 4-column grid with icon + heading + description
- [ ] `Categories.tsx` — 2x2 grid of bg-image cards with overlay text
- [ ] `About.tsx` — split layout: title left, text right; video thumbnail + text+CTA below
- [ ] `ProductGrid.tsx` — filter tabs + product card grid with labels, hover actions, price, add-to-cart
- [ ] `CallToAction.tsx` — full-width bg image, left text, two pill buttons (brand + white)
- [ ] `BlogPosts.tsx` — section title + 3 blog cards (image, label, title, excerpt, date)
- [ ] `Testimonials.tsx` — centered quote card on `#f7f5fa` bg, italic serif text
- [ ] `InstagramFeed.tsx` — 5 equal images in row, hover overlay with icon + follow link
- [ ] `Footer.tsx` — logo + desc + socials; Company/Account links + Newsletter form; copyright with componentdock.com

### Phase 3 — Tests
- [ ] Write test per component mirroring Gherkin scenarios from spec
- [ ] Achieve 100% coverage on all new files

### Phase 4 — Integration
- [ ] Compose all sections in `App.tsx` in correct page order
- [ ] Verify responsive layout on mobile breakpoints
- [ ] Run `scripts/verify-app.sh floresco`

## Design Notes

### Color Palette
- Primary brand: `#f45d96` (pink/rose) — used for buttons, links, prices, section subtitle labels
- Headings: `#111111` dark
- Body text: `#444444`
- Testimonial bg: `#f7f5fa` (very light lavender)
- Dropdown bg: `#111111`

### Typography
- Headings: Libre Baskerville (serif) — gives an elegant, floral feel
- Body: Quicksand (sans-serif) — rounded, friendly, modern
- Button text: uppercase, letter-spacing 2px, weight 700, 15px

### Button Variants
1. **Primary pill**: bg `#f45d96`, text white, `border-radius: 50px`
2. **White pill**: bg white, text `#f45d96`
3. **Border pill**: transparent bg, 2px solid `#f45d96`, text `#f45d96`
4. **Site button** (footer): bg `#111111`, text white, uppercase, letter-spacing 4px

### Layout Patterns
- Standard section padding: 100px top/bottom (`.spad`)
- Grid: Bootstrap-like 12-col (col-lg-3/4/5/6/7)
- Product grid: 5 items per row on desktop, filterable by mix category
- Instagram: 5 equal-width images, 372px height

### Fidelity Priorities
1. Section order must match 1:1
2. Pill-shaped buttons are critical to the design identity
3. Brand pink `#f45d96` must be consistent across all accents
4. Serif headings (Libre Baskerville) give the elegant floral aesthetic
5. Product filter tabs must work (switching categories)
