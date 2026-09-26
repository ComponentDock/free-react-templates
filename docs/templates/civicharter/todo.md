# Civicharter — Implementation Notes

## Source Mapping
- **ColorLib source:** Politics (https://colorlib.com/wp/template/politics/)
- **Preview:** https://preview.colorlib.com/theme/politics/
- **New name:** civicharter
- **App path:** apps/civicharter

## Design Tokens (from CSS analysis)
- Font: Poppins (Google Fonts, weights 300-700)
- Brand blue: #3898f8
- Body: #777, Headings: #222
- Light sections: #f9f9ff
- Dark footer: #04091e
- Header top: #222
- Button radius: 25px (pill)
- Banner button: 0 radius, transparent hover

## Section Order (fidelity reference)

1. **TopBar** — social icons left, phone+email right, bg #222, font 12px
2. **Navbar** — fixed, white bg, logo left, nav links right, shadow on scroll
3. **Hero** — fullscreen parallax banner, overlay rgba(0,0,0,0.5), centered text, "Get Started" button (radius 0, hover transparent)
4. **Countdown** — split: left text + right blue countdown strip (#3898f8 bg)
5. **Services** — 3 cards, image+title+desc, hover: img scale(1.1) rotate(-2deg), title color change
6. **About** — split: left 48% bg image (::after), right text + 2 icon features (diamond, phone)
7. **Gallery** — header + 4 images asymmetric grid (8+4 top, 6+6 bottom)
8. **Counters** — parallax dark bg, 4 circular counters with animated numbers, circle border #3898f8
9. **Feedback/Goals** — accordion left (4 items, open=blue bg), video play right (dark overlay)
10. **Brands** — grayscale logo carousel, color on hover, bg #f9f9ff
11. **Blog** — 4 cards, image+date badge(bg #000)+title+excerpt+likes/comments
12. **Footer** — dark #04091e, 3-col (links, newsletter with rounded input, Instagram grid), social icons, copyright → Component Dock

## Implementation Tasks

### Phase 1: Scaffold
- [ ] Create apps/civicharter from a minimal existing app template
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Set public/CNAME to civicharter.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Run npm install at repo root
- [ ] Add Poppins font link to index.html

### Phase 2: Shared tokens
- [ ] Define @theme tokens in index.css: brand-blue #3898f8, body #777, heading #222, light-bg #f9f9ff, dark-footer #04091e

### Phase 3: Components (in order)
- [ ] TopBar.tsx — social icons (lucide), phone, email
- [ ] Navbar.tsx — fixed, logo, nav links with dropdown, scroll shadow
- [ ] Hero.tsx — fullscreen bg image, overlay, text, CTA button
- [ ] Countdown.tsx — split layout, countdown logic (days/hours/min/sec)
- [ ] Services.tsx — 3 cards, images from picsum, hover effects
- [ ] About.tsx — split layout, bg image, 2 feature boxes with icons
- [ ] Gallery.tsx — 4 images asymmetric grid
- [ ] Counters.tsx — parallax bg, 4 animated counters with circles
- [ ] Feedback.tsx — accordion (4 items expandable) + video play button
- [ ] Brands.tsx — logo carousel, grayscale default, color hover
- [ ] Blog.tsx — 4 cards, date badges, meta row
- [ ] Footer.tsx — dark bg, 3-col, newsletter form, Instagram grid, social, copyright → Component Dock

### Phase 4: Assembly
- [ ] App.tsx composing all sections in order
- [ ] main.tsx entry point

### Phase 5: Verification
- [ ] npm run test:coverage — 100% coverage
- [ ] Build succeeds
- [ ] Responsive layout check
- [ ] No ColorLib references in app code

## Fidelity Notes

- The countdown timer is a key interactive feature — needs a real countdown to a future date
- The accordion in Feedback/Goals section is custom (mn-accordion jQuery plugin) — recreate with React state
- The "Get Started" hero button has radius 0 (square corners), different from the pill-shaped primary buttons elsewhere
- The gallery uses Magnific Popup for lightbox — can use a React lightbox library or skip lightbox
- The brand carousel uses Owl Carousel — can use a simple CSS-based carousel
- The about section's background image is implemented as a CSS ::after pseudo-element at 48% width
- Counter circles use a nested div structure with border + inner fill + overlay text
- Blog date badges are black background, white text, centered, specific width 115px
- Newsletter input has 20px border-radius (pill-shaped)
- Footer social icons: 40x40px black squares, hover turns brand blue with white icon color
