# GoingOnce — Implementation Tasks & Design Notes

## Source
- ColorLib slug: `auction`
- Preview: https://preview.colorlib.com/theme/auction/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/auction-free-template.jpg
- New name: `goingonce`

## Design Notes

### Color Palette
- Primary brand: `#f37121` (orange) — buttons, links, section accents
- Background white: `#fff`
- Background gray sections: `#f4f5f9`
- Background subtle gray: `#f8f9fa` (testimonials)
- Text primary: `#25262a`
- Text dark: `#000`, `#343a40`
- Text muted: `#999999`
- Hero overlay: `rgba(0,0,0,0.2)`

### Typography
- Font: Muli (Google Fonts) — weights 300, 400, 700, 900
- Hero heading: 60px, weight 900, white, line-height 1
- Section subtitles: small uppercase or colored text above main heading

### Buttons
- `.btn-primary`: orange (#f37121), no border-radius (sharp), white text
- `.btn-bid`: padding 7px 15px, border-radius 0, used on auction cards
- All buttons: sharp corners, no rounded borders

### Layout
- Bootstrap-style grid (12-column, responsive breakpoints)
- Hero: full-viewport height (100vh, min-height 500px)
- Auctions: 4-column grid on desktop, 2-column on tablet, 2 on mobile
- How It Works: 4-column steps
- About: 3-column features
- Footer: 3-column layout, dark background

### Section Order (1:1 fidelity)
1. Navbar (sticky, dark logo area, white links, dark Sign In button)
2. Hero / Intro (full-screen bg image + overlay + centered text + CTA)
3. Current Auctions (grid of 8+ auction item cards with prices, bids, bid button)
4. How It Works (4 step cards: Register → Buy/Bid → Submit → Win)
5. About Us (3 feature cards with icons)
6. Testimonials (carousel with circular avatars)
7. CTA Banner (full-width, registration prompt)
8. Footer (3 columns, dark background, ComponentDock link)

### Assets (no copying)
- Placeholder images: `https://picsum.photos/seed/goonce-<n>/<w>/<h>`
- Icons: lucide-react
- Font: Google Fonts `<link>` for Muli (or Mulish as modern equivalent)
- Hero background: picsum.photos with auction-themed seed

## Task Checklist

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base, rename to `goingonce`
- [ ] Update package name to `@free-react-templates/goingonce`
- [ ] Set `public/CNAME` to `goingonce.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://goingonce.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Add Muli/Mulish font link to `index.html`
- [ ] Set up `index.css` with Tailwind + brand tokens

### Phase 2: Components
- [ ] `Navbar.tsx` — sticky nav with logo, links, dropdown, sign-in button
- [ ] `Hero.tsx` — full-viewport hero with bg image, overlay, heading, CTA
- [ ] `AuctionGrid.tsx` — 4-column grid of auction item cards
- [ ] `AuctionCard.tsx` — individual card: image, price, title, category, bids, bid button
- [ ] `HowItWorks.tsx` — 4-column step cards with icons
- [ ] `AboutUs.tsx` — 3-column feature cards
- [ ] `Testimonials.tsx` — carousel of testimonial cards
- [ ] `CtaBanner.tsx` — full-width call-to-action
- [ ] `Footer.tsx` — 3-column footer with ComponentDock link

### Phase 3: Tests
- [ ] Navbar: renders all links, dropdown works, mobile toggle
- [ ] Hero: displays heading and CTA, full-viewport
- [ ] AuctionGrid: renders 8+ cards in grid
- [ ] AuctionCard: shows all details, bid button clickable
- [ ] HowItWorks: 4 steps rendered
- [ ] AboutUs: 3 features rendered
- [ ] Testimonials: carousel renders cards
- [ ] CtaBanner: text visible
- [ ] Footer: 3 columns, ComponentDock link
- [ ] App.tsx: all sections compose correctly
- [ ] Coverage at 100%

### Phase 4: Polish & Deploy
- [ ] Responsive behavior verified
- [ ] Brand color consistent
- [ ] No ColorLib references in app code
- [ ] Build succeeds
- [ ] Commit and push

## Fidelity Notes

The original template uses Bootstrap grid + jQuery plugins (owl-carousel for
hero/testimonials, AOS for scroll animations). The React recreation should:

- Replace owl-carousel with a lightweight React carousel (or CSS-based)
- Replace AOS with Intersection Observer + CSS transitions
- Keep the 4-column → 2-column → 1-column responsive grid
- Maintain the sharp-cornered button aesthetic (no rounded corners)
- Use the orange #f37121 as the sole brand accent color
- Replicate the dark navbar with white text + dark Sign In button
- Hero should be full-viewport with a dark overlay on background image
