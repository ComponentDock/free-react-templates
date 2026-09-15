# Chronopulse — Implementation Tasks & Design Notes

## Source
- ColorLib template: **Watch**
- Preview URL: https://preview.colorlib.com/theme/watch/
- Source URL: https://colorlib.com/wp/template/watch/

## Task breakdown

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/bolt/` or similar small template)
- [ ] Rename package to `@free-react-templates/chronopulse`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set `public/CNAME` to `chronopulse.free.componentdock.com`
- [ ] Set `"homepage"` in `package.json` to `https://chronopulse.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Components (TDD order)
- [ ] `Navbar.tsx` — sticky header, logo, nav links (Home, About, Service, Unique Feature, Review, FAQ)
- [ ] `Hero.tsx` — full-screen banner, background image (picsum), dark overlay, h5/h1/CTA
- [ ] `VideoSection.tsx` — split layout: text left + video play button right
- [ ] `CoursesGrid.tsx` — center image + 4 feature cards (2 per side), Linearicons
- [ ] `AboutSection.tsx` — full-width split: image left, text+CTA right
- [ ] `ServiceArea.tsx` — 3×2 grid of 6 service cards with icons
- [ ] `ProductsSection.tsx` — dark blue bg, 4 product cards (image/name/price/Pre Order)
- [ ] `ReviewsSection.tsx` — horizontal row of 7 testimonial cards with star ratings
- [ ] `FaqSection.tsx` — accordion (4 items), first expanded by default, click toggles
- [ ] `Footer.tsx` — 3-column: About Us, Newsletter form, Social icons
- [ ] `App.tsx` — compose all sections in DOM order

### Phase 3: Styling
- [ ] Add Poppins font via `<link>` in `index.html`
- [ ] Define design tokens in `index.css` `@theme` block
- [ ] Primary button: gradient #235ee7→#4ae7fa, pill radius 25px, white text
- [ ] Section alternation: white / #f9f9ff backgrounds
- [ ] Products section: #235ee7 solid background
- [ ] Responsive breakpoints (mobile-first Tailwind)

### Phase 4: Tests
- [ ] One `describe` per component
- [ ] Scenario-style `it` blocks matching spec Gherkin
- [ ] 100% coverage (lines, functions, branches, statements)

### Phase 5: Verify & Ship
- [ ] `scripts/verify-app.sh chronopulse` passes
- [ ] Commit as `feat: add chronopulse template (ColorLib Watch)`
- [ ] Push, open PR, squash merge
- [ ] Surge deploy verified at chronopulse.free.componentdock.com

## Design notes

### Section order (from DOM)
1. Navbar (sticky)
2. Hero/Banner (full-screen, dark overlay bg image)
3. Video Section (split 50/50)
4. Courses/Features Grid (center image + 4 surrounding cards)
5. About Section (full-width split)
6. Service Area (3×2 grid)
7. Unique Features/Products (dark blue bg, 4 cards)
8. Reviews/Testimonials (horizontal row)
9. FAQ Accordion
10. Footer (3-column)

### Color palette from CSS
- Primary: #235ee7 (deep blue)
- Gradient end: #4ae7fa (cyan) — used in primary-btn gradient
- Accent cyan: #4cd3e3 — service section icons
- Accent blue: #38a4ff — alternative accent
- Accent yellow: #f4e700 — highlight
- Accent red: #f44a40 — alert
- Text: #222222 (dark), #777777 (gray)
- Backgrounds: #fff (white), #f9f9ff (light blue-white)

### Typography
- Font: Poppins (Google Fonts), weights 300–700
- Hero h1: large, white, bold
- Section headings: h1, dark, centered
- Body: p tags, gray (#777)

### Button styles
- Primary: pill shape (border-radius 25px), gradient background, white text, uppercase
- Hover: transparent bg, white border, white text
- Dark sections: white bg, dark text, invert on hover

### Fidelity notes
- Banner uses a background image (`header-bg.png`) with dark overlay — use picsum.photos placeholder
- Products section items show Apple Watch images — use picsum with watch-related seeds
- Star ratings use Font Awesome star icons (filled/unfilled) — use lucide-react Star icon
- FAQ uses Bootstrap accordion pattern — implement with React state (open/closed)
- Newsletter form is presentational only (no real backend)
- Footer attribution must link Component Dock, not Colorlib
