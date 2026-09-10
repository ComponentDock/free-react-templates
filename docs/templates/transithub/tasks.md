# Transithub — Implementation Tasks & Design Notes

Source: ColorLib Carries (https://preview.colorlib.com/theme/carries/)
New name: `transithub`

## Component breakdown (section order)

1. **Navbar** — sticky dark navy bar; logo left, nav links center, utility icons right (user, search, cart, language dropdown)
2. **HeroSlider** — full-width parallax slider, 3 slides, dark overlay, centered heading + 2 outlined CTA buttons, prev/next arrows
3. **FreightServices** — 3-column card grid (Ocean/Air/Street Freight), each with image, icon badge, title, description, "Read More" link
4. **AboutSection** — two-column: left = quote form (7 fields + submit), right = about text + 3 stat counters (120, 100, 30)
5. **ServiceArea** — two sub-sections:
   - Top: centered title + 2-column (left: headline + Learn More; right: cargo image + "Why Choose Us?" overlay with checklist)
   - Bottom: dark parallax bg with 4 hexagon-icon service items (Ware House, Road Freight, Ocean Freight, Air Freight)
6. **PromoArea** — two sub-sections:
   - Top: 2x2 feature grid (Our Location, Latest News, 24/7 Support, Fast Delivery) with icons
   - Bottom: parallax CTA banner with dark overlay + "Get a quote" button
7. **Testimonials** — centered title, photo carousel (5 photos), prev/next arrows, quote text + client name/title
8. **Footer** — newsletter bar (dark bg, email input + subscribe), four-column footer (About Us, Latest Tweets, Customer Service, Instagram feed), bottom bar with Component Dock attribution

## Design fidelity notes

### Colors
- Brand orange: `#f39c12` — use as primary accent in @theme, for buttons, icon badges, links, hover states
- Heading text: `#3c4a62` dark navy
- Body text: `#687284` medium gray-blue
- Secondary text: `#5d6b82` — also used as footer dark bg
- Gray section bg: `#f7f9fc`
- Alternate light bg: `#eff1ff`
- Dark footer bg: `#5d6b82` (main footer), `#3c4147` (newsletter area), `#212121` (bottom bar)

### Typography
- Font: Roboto (Google Fonts) — add via `<link>` in index.html
- Headings: bold, uppercase for section titles
- Body: regular weight
- Nav: uppercase, small caps feel

### Buttons & Shapes
- Standard buttons: `border-radius: 3px`
- CTA/hero buttons: `border-radius: 5px`, outlined style (white border, transparent bg)
- Service icons: hexagonal CSS shape (custom clip-path or polygon)
- Icon badges: `border-radius: 50%` circular
- "Read More" links: orange text with arrow icon

### Hero
- Full-width with parallax scroll (`data-stellar-background-ratio`)
- Dark semi-transparent overlay (`rgba(0,0,0,0.6)` approx)
- 3 slides with transport imagery (use picsum.photos placeholders)
- Centered text, max-width ~80%, white text

### Parallax sections
- Service bottom area: dark image bg with parallax
- Promo CTA: dark image bg with parallax
- Both use `background-attachment: fixed` or similar

### Spacing
- Section padding: consistent `section-padding` (e.g., `py-16`)
- Container: centered, max-width ~1170px (Bootstrap default)
- Grid: 12-column Bootstrap-style responsive

### Accessibility notes
- Semantic `<nav>`, `<header>`, `<section>`, `<footer>` elements
- Alt text on all images
- Form labels for all inputs
- `aria-label` on icon-only buttons
- Keyboard-navigable carousel

### Placeholder images
- Hero slides: `https://picsum.photos/seed/transithub-hero-1/1920/1080` etc.
- Service cards: `https://picsum.photos/seed/transithub-ocean/600/400` etc.
- About/stats: `https://picsum.photos/seed/transithub-about/800/600`
- Testimonial photos: `https://picsum.photos/seed/transithub-client-1/100/100` etc.
- Footer bg: solid colors (no image needed)

### Icons
- Use `lucide-react` icons to replace Font Awesome:
  - Ship → `Ship`, Plane → `Plane`, Truck → `Truck`
  - User → `User`, Search → `Search`, ShoppingBag → `ShoppingBag`
  - Anchor → `Anchor`, Newspaper → `Newspaper`, Umbrella → `Umbrella`
  - Bicycle → `Bicycle`, Check → `Check`
  - Phone → `Phone`, MapPin → `MapPin`, Mail → `Mail`
  - Quote → use styled `<q>` element
