# MedVault — Implementation Tasks & Design Notes

## Template Identity

- **New name:** medvault
- **Source:** ColorLib Pharma (https://colorlib.com/wp/template/pharma/)
- **Preview:** https://preview.colorlib.com/theme/pharma/
- **Category:** Pharmacy / Health Store / E-commerce
- **Deploy:** https://medvault.free.componentdock.com

## Implementation Tasks

### Phase 1: Scaffold
- [ ] Create `apps/medvault/` by copying simplest existing app
- [ ] Rename package to `@free-react-templates/medvault`
- [ ] Update `public/CNAME` to `medvault.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://medvault.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in package-lock.json
- [ ] Verify `grep -c "free-react-templates/medvault" package-lock.json` returns 1

### Phase 2: Design Tokens in index.css
- [ ] Set `@theme` brand color: `--color-brand: #51eaea`
- [ ] Set green banner: `--color-green: #74d12b`
- [ ] Set sale tag orange: `--color-sale: #e86b00`
- [ ] Set dark text: `--color-text: #25262a`
- [ ] Set footer muted: `--color-footer-text: #5c626e`
- [ ] Set light section bg: `--color-bg-light: #f4f5f9`
- [ ] Load Rubik (400, 700) and Crimson Text from Google Fonts in index.html

### Phase 3: Components (in order)
- [ ] **Navbar** — sticky white bg, brand "MedVault", nav links with dropdown, search + bag icons, mobile toggle
- [ ] **HeroCover** — full-height bg image, centered subtitle + heading + pill-shaped CTA
- [ ] **PromoBanners** — 3 overlapping cards (green, white, yellow) with italic headings
- [ ] **PopularProducts** — heading with cyan underline, 6 product cards (3-col), sale tags, "View All Products" CTA
- [ ] **NewProducts** — light gray bg, carousel of 4 product cards
- [ ] **Testimonials** — carousel with circular avatars, serif blockquotes, author names
- [ ] **PromoBanners2** — dark bg with background image, 2 banner cards with hover lift
- [ ] **Footer** — 3-column layout: About Us, Quick Links, Contact Info; bottom copyright

### Phase 4: App Assembly
- [ ] Wire all components in `App.tsx` in correct section order
- [ ] Implement dropdown menu functionality in navbar
- [ ] Implement product carousel for New Products section
- [ ] Implement testimonial carousel
- [ ] Verify footer links to componentdock.com

### Phase 5: Tests (TDD)
- [ ] Write tests for each component (one describe per component)
- [ ] Achieve 100% lines/functions/branches/statements coverage
- [ ] Run `scripts/verify-app.sh medvault` — must pass

### Phase 6: Finalize
- [ ] Run `npm run readme:status` to regenerate README
- [ ] Commit: `feat: add medvault (ColorLib pharma) template`
- [ ] Open PR, merge immediately
- [ ] Verify Surge deploy

## Design Notes — Section-by-Section Fidelity

### 1. Navbar
- White/light sticky navbar with `py-2`
- Logo "MedVault" on left
- Nav links centered: Home, Store, Dropdown (Supplements, Vitamins, Diet & Nutrition, Tea & Coffee), About, Contact
- Icons on right: search icon, shopping bag icon with number badge (circular, brand color bg)
- Mobile: hamburger menu toggle
- Search overlay: full-width input with close button (implement as modal or slide-down)

### 2. Hero Cover
- Full viewport height (100vh, min-height 700px)
- Background image (use picsum with seed)
- Centered content: subtitle (14px, white), heading (50px/70px desktop, weight 900, white), pill-shaped CTA button
- Button: `#51eaea` bg, dark text, uppercase, 2px border, border-radius 50%, padding 20px 30px

### 3. Promo Banners
- 3-column grid with `section-overlap` class (margin-top: -150px to overlap hero)
- First card: green bg (#74d12b), white text, italic heading "Free Shipping", description
- Second card: white bg, dark text, "Season Sale 50% Off"
- Third card: yellow/warning bg (#ffc107), white text, "Buy A Gift Card"
- All cards: border-radius 4px, 30px padding, centered text
- Each has: h5 italic heading, p description, p strong sub-description

### 4. Popular Products
- Section heading "Popular Products" with cyan underline bar
- 3-column grid of 6 product cards
- Each card: product image (centered), product name (h3, dark), price (with optional del strikethrough)
- "Sale" tag: absolute positioned, orange bg (#e86b00), white text
- "View All Products" pill-shaped button centered below

### 5. New Products
- Light gray background (#f4f5f9)
- Section heading "New Products"
- Carousel of 4 product cards (use simple React carousel, no Owl needed)
- Each card: centered image, product name, price

### 6. Testimonials
- Section heading "Testimonials"
- Carousel of testimonial cards
- Each card: circular avatar image (w-25, rounded-circle), blockquote with serif font (Crimson Text), author name with em-dash
- No navigation arrows (original hides them with `.no-direction .owl-nav { display: none }`)

### 7. Promo Banners 2
- Dark background with background image (bg-secondary + bg-image)
- 2 large banner cards side by side
- Each card: background image, inner content with heading (uppercase, weight 900) and description
- Hover: translateY(-10px) with box-shadow

### 8. Footer
- White background, 6em padding
- 3-column layout:
  - Col 1: "About Us" heading, description paragraph
  - Col 2: "Quick Links" heading, list of category links (Supplements, Vitamins, Diet & Nutrition, Tea & Coffee)
  - Col 3: "Contact Info" heading, address, phone link, email
- Footer links: muted color (#5c626e), hover = brand color (#51eaea)
- Bottom bar: copyright text with Component Dock link

## Image Strategy

All placeholder images use `https://picsum.photos/seed/medvault-<N>/<W>/<H>`:
- Hero bg: `medvault-hero/1920/1080`
- Product images: `medvault-prod-1/300/300` through `medvault-prod-6/300/300`
- New product images: `medvault-new-1/300/300` through `medvault-new-4/300/300`
- Testimonial avatars: `medvault-person-1/200/200` through `medvault-person-4/200/200`
- Promo banner 1: `medvault-promo-1/800/500`
- Promo banner 2: `medvault-promo-2/800/500`
- Promo bg: `medvault-promo-bg/1920/800`
