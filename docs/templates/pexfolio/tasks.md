# Pexfolio — Implementation Tasks & Design Notes

## Template Identity

- **New name:** pexfolio
- **Source:** ColorLib Pexman (https://colorlib.com/wp/template/pexman/)
- **Preview:** https://preview.colorlib.com/theme/pexman/
- **Category:** Creative Agency / Portfolio
- **Deploy:** https://pexfolio.free.componentdock.com

## Implementation Tasks

### Phase 1: Scaffold
- [ ] Create `apps/pexfolio/` by copying simplest existing app (e.g. `apps/pexflow/`)
- [ ] Rename package to `@free-react-templates/pexfolio`
- [ ] Update `public/CNAME` to `pexfolio.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://pexfolio.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in package-lock.json
- [ ] Verify `grep -c "free-react-templates/pexfolio" package-lock.json` returns 1

### Phase 2: Design Tokens in index.css
- [ ] Set `@theme` brand color: `--color-brand: #d9bf77`
- [ ] Set text color: `--color-text: #000000`
- [ ] Set dark overlay color: `--color-overlay: #000000`
- [ ] Set light bg: `--color-bg-light: #f7f7f7`
- [ ] Set footer bg: `--color-bg-footer: #000000`
- [ ] Load Montserrat from Google Fonts (weights 300-700) in index.html

### Phase 3: Components (in order)
- [ ] **Navbar** — dark bg, brand "Pexfolio Creative Agency", 5 nav links, mobile hamburger
- [ ] **HeroSlider** — 3 slides, background images via picsum, 50% black overlay, heading + CTA, thumbnail nav
- [ ] **AboutSection1** — 50/50 split, image left, text right, gold subheading, heading, paragraphs, CTA button
- [ ] **CounterSection** — parallax bg, black overlay 0.8, 4 stat items (10K+, 21K+, 27, 30K+)
- [ ] **WhatWeOffer** — 50/50 split (text left, image right), 4 numbered services with black circle icons
- [ ] **ServicesGrid** — light gray bg, 4 cards with gold circle icons: Web Design, Photography, Marketing, Graphic Design
- [ ] **PortfolioGrid** — heading + filter tabs + 4-col grid of 8 cards, hover overlay effect
- [ ] **Testimonials** — carousel with avatar, 5 gold stars, quote, name, position
- [ ] **BlogSection** — heading + 4-col grid of blog cards (image + text)
- [ ] **Footer** — 3-col layout, brand + social, nav links, contact; bottom bar with Component Dock link

### Phase 4: App Assembly
- [ ] Wire all components in `App.tsx` in correct section order
- [ ] Add scroll-to-section behavior for nav links
- [ ] Verify footer links to componentdock.com

### Phase 5: Tests (TDD)
- [ ] Write tests for each component (one describe per component)
- [ ] Achieve 100% lines/functions/branches/statements coverage
- [ ] Run `scripts/verify-app.sh pexfolio` — must pass

### Phase 6: Finalize
- [ ] Run `npm run readme:status` to regenerate README
- [ ] Commit: `feat: add pexfolio (ColorLib pexman) template`
- [ ] Open PR, merge immediately
- [ ] Verify Surge deploy

## Design Notes — Section-by-Section Fidelity

### 1. Navbar
- Dark background (`bg-dark` equivalent), fixed position
- Brand: "Pexfolio" + "Creative Agency" small text next to it
- Nav links: Home, About, Works, Blog, Contact — right-aligned (ml-auto)
- Mobile: hamburger icon toggles collapse

### 2. Hero Slider
- Full-width, 600px height
- 3 slides with background images
- Left 50% has black overlay (opacity 0.5) — use `after:` pseudo-element or overlay div
- Right side (or centered) has large white heading (58px desktop, 40px mobile, bold)
- Gold CTA button "View Portfolio →" with arrow icon
- Thumbnail indicators positioned on left side vertically centered
- Active indicator is gold (#d9bf77), others white at 0.2 opacity
- Implement as simple React carousel with useState for current slide

### 3. About Section 1
- Full-width container-fluid, no padding top/bottom
- 50/50 split using flex
- Left: background image, 750px height (500px mobile)
- Right: text content vertically centered (absolute positioning trick or flex centering)
- Gold subheading "Welcome Pexfolio", heading, 2 paragraphs, gold CTA button

### 4. Counter Section
- Background image with parallax (use `bg-fixed` or CSS `background-attachment: fixed`)
- Black overlay at 0.8 opacity
- 4 columns, each with: large number (40px, white, bold), optional K+ suffix (gold), label below (white, uppercase, 14px)
- Use animated counters (optional but nice) or just static numbers

### 5. What We Offer
- Same split layout as About 1 but reversed (text left, image right)
- Subheading "What we offer", heading "What We Offer"
- 4 service items: black circle (50px) with white number, title (18px bold), description
- Gold "Start A Project" button at bottom

### 6. Services Grid
- Light gray background (#f7f7f7)
- 4 columns (col-md-3)
- Each card: gold circle (60px) with black icon inside, title (22px bold), description
- Use lucide-react icons instead of flaticon
- Cards should stretch to equal height

### 7. Portfolio Grid
- Section heading left, filter tabs right-aligned
- Filter tabs: All (active/gold), Branding, Web Design, Illustration, Application
- 4-column grid of 8 cards, each 300px height with background image
- On hover: black overlay fades in at 0.7 opacity, white project name + tags appear
- Use picsum.photos with seed `pexfolio-<n>` for deterministic images

### 8. Testimonials
- Gold subheading "Testimonial", heading "What Are Clients Says"
- Carousel (use simple React carousel, no Owl needed)
- Each testimonial: circular avatar (70px), 5 gold stars, quote text, name, position
- Center-aligned layout, max-width ~col-md-6

### 9. Blog Section
- Heading "Our Latest Blog"
- 4-column grid of blog cards
- Each card: 190px background image, below that: date (uppercase, small), title (18px bold), excerpt
- Hover: slight shadow on text card

### 10. Footer
- Black background, 6em top padding
- 3-column layout:
  - Col 1: Brand name "Pexfolio" (white, link), description, "Connect with us" social icons (50px rounded squares, white bg, hover = white bg + black icon)
  - Col 2: "Navigation" heading, two sub-columns of links (gold, hover = gold)
  - Col 3: "Have a Question?" heading, address/phone/email with gold icons
- Bottom bar: black bg, centered copyright text, link to componentdock.com

## Image Strategy

All placeholder images use `https://picsum.photos/seed/pexfolio-<N>/<W>/<H>`:
- Hero slides: `pexfolio-hero-1/1920/600`, `pexfolio-hero-2/1920/600`, `pexfolio-hero-3/1920/600`
- About images: `pexfolio-about-1/960/750`, `pexfolio-about-2/960/750`
- Counter bg: `pexfolio-counter/1920/600`
- Portfolio: `pexfolio-work-1/400/300` through `pexfolio-work-8/400/300`
- Testimonial avatars: `pexfolio-person-1/140/140` through `pexfolio-person-4/140/140`
- Blog images: `pexfolio-blog-1/400/190` through `pexfolio-blog-4/400/190`
