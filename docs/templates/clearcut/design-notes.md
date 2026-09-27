# ClearCut — Design Notes & Implementation Tasks

**Source:** ColorLib Whitespace  
**Preview:** https://preview.colorlib.com/theme/whitespace/  
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg  
**Category:** Business / Agency  
**Stack:** React 19 + Vite + Tailwind 4 + TypeScript

## Section Order (top to bottom)

1. Navbar (dark, sticky)
2. Hero (split: text left / video-image right)
3. About / Services Detail (two-column: image right, services left)
4. Services Cards (4-column grid)
5. Stats Counter (parallax bg, animated counters)
6. Projects Gallery (masonry grid with overlays)
7. Testimonials (carousel)
8. Blog (3-column cards)
9. Pricing (4 tiers on light bg)
10. Partners (5 logos)
11. Footer (dark, 4-column)

## Section-by-Section Fidelity Notes

### 1. Navbar
- Dark background (`bg-dark` class equivalent)
- Brand text "ClearCut" (left-aligned)
- Nav links: Home, About, Work, Pricing, Blog, Contact (right-aligned, `ml-auto`)
- Mobile: hamburger toggle with collapse
- Sticky on scroll (detect scroll position, add shadow)

### 2. Hero
- **Split layout** using flexbox: left = text panel (60% width), right = visual panel (40%)
- Left panel: white/light bg, contains:
  - Subheading "Welcome" (small, uppercase, accent-colored)
  - h1 "We Help to Build You the Product"
  - h2 "Business Solution"
  - CTA button "Get in touch" — `.btn-custom` style (transparent bg, animated underline on hover)
- Right panel: full-height background image (750px), optional video background
- On mobile: stack vertically (text on top, image below)

### 3. About / Services Detail
- Two-column row (no gutters):
  - Left (7 cols): heading section with "Providing" subheading + "What We Can Do for You" h2
    - 4 service items each with:
      - Circular icon container (brand color bg)
      - Service title (h3)
      - Short description paragraph
  - Right (5 cols): background image
- Services: Market Research, Financial Services, Online Marketing, 24/7 Support
- On mobile: image on top, content below

### 4. Services Cards
- 4-column grid (col-md-6 col-lg-3)
- Each card: centered icon + heading + paragraph
- Cards: Business Strategy, Data Analysis, Graphic Design, Creative
- Light borders or subtle shadow between cards

### 5. Stats Counter
- Full-width section with parallax background image
- Dark overlay for readability
- Left side: "Some" subheading + "Interesting Facts" h2 (white text)
- Right side: 4 counters in a row
  - 2000 Done Works
  - 300 Happy Customers
  - 100 Coffee
  - 1000 Work Hours
- Numbers animate on scroll into view (count-up animation)

### 6. Projects Gallery
- Heading: "Recents Projects" with subheading "Projects"
- Masonry-style grid (not uniform):
  - Row 1: 1 small (col-4) + 1 large (col-8)
  - Row 2: 1 large (col-8) containing 2 stacked images + 1 small (col-4) containing 2 stacked images
- Each card:
  - Full background image
  - Dark overlay on hover
  - Arrow icon (link)
  - Text overlay: title + category ("Web Design")
- Use picsum.photos with deterministic seeds

### 7. Testimonials
- Carousel (owl-carousel style — use a React carousel library or CSS scroll-snap)
- Each slide:
  - Circular avatar image (with border/quote icon overlay)
  - Quote paragraph
  - Name (bold)
  - Position/title (smaller, muted)
- Testimonial data: Garreth Smith / Marketing Manager + others

### 8. Blog
- "Our Blog" heading (centered)
- 3-column grid
- Each card:
  - Image thumbnail (top)
  - Title (linked)
  - Meta date
  - Short excerpt
- Use picsum.photos for thumbnails

### 9. Pricing
- Light background section (`bg-light`)
- "Pricing Plans" subheading + "Our Best Pricing" h2
- 4-column pricing cards:
  - Free: $0, "100% free. Forever", features list, "Get Started" button
  - Basic: $19.95/mo, features, "Get Started"
  - Standard: $29.95/mo, features, "Get Started"
  - Premium: $49.95/mo, features, "Get Started"
- Featured card (Standard?) should be highlighted with brand color accent

### 10. Partners
- Horizontal row of 5 partner/logo images
- Grayscale or muted, full-width
- Use placeholder logo images or SVGs

### 11. Footer
- Dark background (`ftco-bg-dark`)
- 4-column layout:
  - Col 1: Brand name "ClearCut" + description + social icons (Twitter, Facebook, Instagram)
  - Col 2: "Useful Links" — list of links
  - Col 3: "Quick Links" — list of links
  - Col 4: "Have a Questions?" — address, phone number, email
- MUST include link to https://www.componentdock.com/ ("Component Dock")

## Implementation Tasks

- [ ] Create `apps/clearcut/` workspace (copy from simplest existing app, rename package)
- [ ] Set up `src/index.css` with Tailwind v4 + theme tokens (#78d5ef brand, Work Sans/Poppins fonts)
- [ ] Build `src/components/Navbar.tsx`
- [ ] Build `src/components/Hero.tsx` (split layout)
- [ ] Build `src/components/AboutServices.tsx` (two-column with service items)
- [ ] Build `src/components/ServicesCards.tsx` (4-column grid)
- [ ] Build `src/components/StatsCounter.tsx` (parallax bg + animated counters)
- [ ] Build `src/components/ProjectsGallery.tsx` (masonry grid with overlays)
- [ ] Build `src/components/Testimonials.tsx` (carousel)
- [ ] Build `src/components/Blog.tsx` (3-column cards)
- [ ] Build `src/components/Pricing.tsx` (4-tier cards)
- [ ] Build `src/components/Partners.tsx` (logo row)
- [ ] Build `src/components/Footer.tsx` (dark, 4-col, Component Dock link)
- [ ] Compose all sections in `src/App.tsx`
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Verify 100% coverage, typecheck, lint, build
- [ ] Run `scripts/verify-app.sh clearcut`
- [ ] Deploy to clearcut.free.componentdock.com
