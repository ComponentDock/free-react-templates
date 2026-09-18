# EstateHaven — Implementation Todo

**Source:** ColorLib Hamlet (https://colorlib.com/wp/template/hamlet/)
**Preview:** https://preview.colorlib.com/theme/hamlet/
**New name:** estate-haven
**Category:** Real Estate Agency

## Implementation Order

### 1. Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/abjure or similar small app)
- [ ] Rename package to `@free-react-templates/estate-haven`
- [ ] Update `public/CNAME` to `estate-haven.free.componentdock.com`
- [ ] Update `homepage` in `package.json`
- [ ] Run `npm install` at repo root

### 2. Design Tokens (`src/index.css`)
- [ ] Add `@theme` block with brand tokens:
  - `--color-primary: #ffdfdf` (pink accent)
  - `--color-dark: #000000`
  - `--color-surface: #2f3035`
  - `--color-muted: #6c757d`
- [ ] Import Google Fonts: Rubik (300, 400, 500, 700)
- [ ] Set body font to Rubik

### 3. Navbar (`src/components/Navbar.tsx`)
- [ ] Dark navbar bg, brand "EstateHaven"
- [ ] Nav links: Home, Properties, Agents, Blog, About, Contact
- [ ] Sign Up CTA button
- [ ] Mobile hamburger menu

### 4. Hero Slider (`src/components/HeroSlider.tsx`)
- [ ] Full-width image carousel (2-3 slides)
- [ ] Each slide: background image, overlay, headline + description
- [ ] Property details card (pink bg): category tag, name, location, specs list
- [ ] "View Properties" button (outlined black)
- [ ] Use `https://picsum.photos/seed/estate-haven-hero-{n}/1920/700` for images

### 5. Property Search (`src/components/PropertySearch.tsx`)
- [ ] Dark bg (#2f3035) search bar
- [ ] Location text input
- [ ] Property Type select dropdown
- [ ] Property Status select dropdown
- [ ] Price Limit select dropdown
- [ ] Search button (primary blue or black)

### 6. Recently Added Properties (`src/components/PropertiesCarousel.tsx`)
- [ ] Heading "Recently Added" + subtitle
- [ ] Horizontal scrollable carousel of property cards
- [ ] Each card: image with overlay, sale badge, name, price, location, beds/baths
- [ ] Use `https://picsum.photos/seed/estate-haven-prop-{n}/600/400` for images

### 7. About / Services (`src/components/About.tsx`)
- [ ] Two-column layout (5 + 7 cols)
- [ ] Left: background image with text overlay
- [ ] Right: heading, paragraph, 2×2 service grid
- [ ] Services: Find Places, Agents Experience, Buy & Rent, Making Money
- [ ] Each service: icon (lucide-react) + heading
- [ ] "Learn More" text link with arrow

### 8. Buy vs Rent (`src/components/BuyRent.tsx`)
- [ ] Two side-by-side full-bleed image cards
- [ ] Left: "Buying A Properties" + "Read more" CTA
- [ ] Right: "Renting A Properties" + "Read more" CTA
- [ ] Text overlays with dark bg on images
- [ ] Use `https://picsum.photos/seed/estate-haven-buy/600/400` and `seed/estate-haven-rent/600/400`

### 9. Testimonials (`src/components/Testimonials.tsx`)
- [ ] Dark overlay section background
- [ ] Heading "Our satisfied customer says"
- [ ] Carousel of testimonial cards
- [ ] Each card: circular avatar, quote icon, quote text, name, role
- [ ] Use `https://picsum.photos/seed/estate-haven-person-{n}/100/100` for avatars

### 10. Blog / Press Releases (`src/components/BlogSection.tsx`)
- [ ] Heading "Press Releases" + subtitle + "Read our blog" link
- [ ] 3-column blog card grid
- [ ] Each card: image, date/author/comments meta, title
- [ ] Use `https://picsum.photos/seed/estate-haven-blog-{n}/600/400` for images

### 11. Counter Stats (`src/components/CounterStats.tsx`)
- [ ] Background image with dark overlay
- [ ] 4 stat blocks: 1000 Properties, 351 Happy Clients, 564 Finished Projects, 300 Working Days
- [ ] Animate numbers on scroll intersection

### 12. Footer (`src/components/Footer.tsx`)
- [ ] 5-column layout
- [ ] Brand + social icons (Twitter, Facebook, Instagram via lucide-react)
- [ ] Company links: Home, About, Services, FAQ, Reviews, Stories
- [ ] Explore links: Privacy, Policy, Terms, Review, Features
- [ ] Get Started links: Buy, Rent, Payment, Mortgage, Loan
- [ ] Newsletter: email input + Subscribe button
- [ ] Copyright bar with "Made with Component Dock" linking to https://www.componentdock.com/

### 13. App Composition (`src/App.tsx`)
- [ ] Compose all sections in order: Navbar → HeroSlider → PropertySearch → PropertiesCarousel → About → BuyRent → Testimonials → BlogSection → CounterStats → Footer

### 14. Tests
- [ ] Component tests for each section (Vitest + Testing Library)
- [ ] 100% coverage enforced

### 15. Verification
- [ ] `scripts/verify-app.sh estate-haven` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
