# Threadlane — Implementation Tasks

Source: ColorLib Fashiop (https://colorlib.com/wp/template/fashiop/)
Preview: https://preview.colorlib.com/theme/fashiop/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Tasks

### Phase 1: Scaffolding
- [ ] Create `apps/threadlane/` (copy simplest existing app, rename package to `@free-react-templates/threadlane`)
- [ ] Set up `public/CNAME` → `threadlane.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Roboto font link to `index.html`
- [ ] Define brand tokens in `src/index.css` (`@theme`: blue #1641ff, gold #f8b600, lavender #f9f9ff)

### Phase 2: Components
- [ ] `TopBar.tsx` — phone number + Login/Register, My Account, Contact Us links
- [ ] `Navbar.tsx` — logo + nav links (Home, Shop, Blog, Pages, Contact) + dark-mode toggle
- [ ] `HeroBanner.tsx` — full-width bg image, "Fashion for Upcoming Winter" heading, paragraph, "View Collection" CTA
- [ ] `HotDeals.tsx` — two side-by-side panels with bg images, headings, "shop now" CTAs
- [ ] `ClientLogos.tsx` — horizontal row of 5 placeholder logo SVGs (no carousel dependency needed)
- [ ] `FeaturedProducts.tsx` — "Featured Products" heading + 4-col grid of 8 product cards
- [ ] `ProductCard.tsx` — image + hover overlay (cart icon) + title + price
- [ ] `Newsletter.tsx` — heading + email input + submit button, lavender bg
- [ ] `Footer.tsx` — 4 columns (About Us, Quick Links, Instagram Feed, Newsletter) + copyright bar + Component Dock link

### Phase 3: Composition & Tests
- [ ] `App.tsx` — compose all sections in order
- [ ] Write tests for each component (TDD: tests first, then implement)
- [ ] Ensure 100% coverage via `npm run test:coverage`

### Phase 4: Verification
- [ ] Run `npm run verify:app threadlane`
- [ ] Check responsive layout at mobile/tablet/desktop
- [ ] Verify no ColorLib references in any app file
- [ ] Verify footer links to componentdock.com
