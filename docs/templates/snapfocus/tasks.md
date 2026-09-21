# SnapFocus — Implementation Tasks & Design Notes

Source: ColorLib "Pentax" → https://preview.colorlib.com/theme/pentax/
New name: SnapFocus (apps/snapfocus)

## Section Order (top to bottom)

1. Navbar
2. Hero Banner
3. Portfolio (Filterable Gallery)
4. Services
5. Pricing Table
6. About
7. Testimonials (Carousel)
8. Blog
9. Footer

## Tasks

### Phase 1 — Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/aurora or similar)
- [ ] Rename package to `@free-react-templates/snapfocus`
- [ ] Set up `public/CNAME` → `snapfocus.free.componentdock.com`
- [ ] Set `"homepage"` in package.json
- [ ] Run `npm install` at repo root to register workspace
- [ ] Add Google Fonts link in index.html: Playfair Display + Roboto

### Phase 2 — Components
- [ ] Navbar.tsx — Logo + nav links (Home, About, Services, Projects, Blog dropdown, Contact) + search icon + sticky scroll + hamburger mobile
- [ ] HeroBanner.tsx — Parallax bg + dark overlay + headline with brand-red span + subtitle + CTA button + social links bar
- [ ] Portfolio.tsx — Section heading + filter tabs (All, Wedding, Motion, Portrait, Fashion) + masonry grid with 6 items + filter logic
- [ ] Services.tsx — Section heading + 4-column grid (Nature, Property, Event, Wedding) with icons
- [ ] Pricing.tsx — Section heading + 3 pricing cards (Wedding $76, Studio $86, Fashion $96) with checkmarks/crosses + CTA buttons
- [ ] About.tsx — Two-column: overlapping images left + heading + paragraphs + CTA button right
- [ ] Testimonials.tsx — Section heading + carousel with photo (1/3) + name/title/quote (2/3)
- [ ] Blog.tsx — Section heading + 3-column grid of blog cards (image, meta, title, excerpt, read more)
- [ ] Footer.tsx — 3-column: About Us + Newsletter (email input + submit) + Follow Us (social icons) + Component Dock link
- [ ] App.tsx — Compose all sections in order

### Phase 3 — Styling & Tokens
- [ ] Set up Tailwind theme tokens: brand-red (#f81c1c), dark (#1a1d24), body-gray (#797979), muted-bg (#f7f7f7)
- [ ] Implement nav separator `/` character between items
- [ ] Implement parallax background on hero (via CSS transform or library)
- [ ] Implement masonry grid layout for portfolio
- [ ] Implement testimonial carousel (use existing package or simple slider)
- [ ] Implement card hover effects on pricing (border-color transition)

### Phase 4 — Tests + Verification
- [ ] Vitest + RTL tests for each component
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Run scripts/verify-app.sh snapfocus

### Phase 5 — Deploy
- [ ] Commit as `docs: prep SnapFocus (ColorLib Pentax) spec + research`
- [ ] Push to main

## Design Notes

### Fidelity Reference
- Preview: https://preview.colorlib.com/theme/pentax/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pentax-free-template.jpg (AVIF format)

### Visual Character
- Photography portfolio with dark, moody aesthetic
- Hero: full-bleed parallax with dark overlay, large serif headline
- Portfolio: masonry grid with hover overlays showing category + title
- Pricing: clean card layout with feature checklists
- About: asymmetric image composition (two overlapping photos with border accent)
- Testimonials: large photo beside quote text, carousel navigation
- Blog: standard 3-column card layout

### Key Differentiators
- Parallax hero (not slider — single static parallax image)
- Nav items separated by decorative `/` character
- Masonry portfolio grid with category filtering
- Pricing table with checkmark/cross feature lists
- Overlapping image composition in About section
- Social links bar at bottom of hero banner

### Placeholder Images
- Use `https://picsum.photos/seed/snapfocus-<n>/<w>/<h>` for all images
- Portfolio items: 6 images at various sizes for masonry effect
- About: 2 images for overlapping composition
- Testimonials: 1 portrait image (reused)
- Blog: 3 card thumbnails
