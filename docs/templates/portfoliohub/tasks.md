# PortfolioHub — Prep Notes & Task Outline

## Source

- ColorLib template: Cvportfolio
- Preview URL: https://preview.colorlib.com/theme/cvportfolio/
- Source slug: cvportfolio
- Preview analyzed: 2026-09-26 (live DOM + CSS fetched)

## Section Order (from live DOM)

1. Header — floating amber contact bar + download CV button
2. Intro — profile image (circle, 200px), name, title, info list, social icons (purple circles → amber on hover)
3. Portfolio — heading + filter tabs (ALL / WEB DESIGN / BRANDING / GRAPHIC DESIGN) + masonry 3-column grid (Isotope-like)
4. About — heading + bio + radial progress skill charts (4 skills at ~25% each in row)
5. Experience — dark purple bg (#28023D), work entries with bullet lists
6. Education — vertical timeline with amber dots (#FFAB00) + line
7. Counter — bg image with overlay, 4 animated counters (Degrees, Projects, Clients, Finished)
8. Footer — dark purple bg, copyright

## Design Token Notes

- Brand accent: #FFA804 (amber) — used in headings bar, buttons, filter active, social hover, education dots, radial progress
- Dark sections: #28023D (deep purple) — experience bg, footer bg
- Social icons: #887392 default → #FFA804 on hover (scale animation)
- Fonts: Poppins (body + headings), Allura loaded but not visually used in CSS
- Heading accent bar: 50px wide × 10px tall, #FFA804, border-radius 5px
- Buttons: border-radius 4px, box-shadow inset, translateY(-4px) hover
- Profile image: 200px circle, positioned to overlap intro section

## Implementation Tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. abjure or similar small template)
- [ ] Rename package to `@free-react-templates/portfoliohub`
- [ ] Update `public/CNAME` to `portfoliohub.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://portfoliohub.free.componentdock.com`

### Phase 2: Components (in order)
- [ ] Header component — floating amber bar, 3-column layout (location, phone, email), download button
- [ ] Intro component — hero background image, centered profile image (overlapping), name, title, info list, social icon row
- [ ] Portfolio component — heading with amber bar, filter tab row, masonry grid (use CSS grid with aspect ratios)
- [ ] About component — heading, bio text, 4-column radial progress charts
- [ ] Experience component — dark purple bg, heading, 2 experience entries with bullet lists
- [ ] Education component — heading, vertical timeline with amber dots, 3 education entries
- [ ] Counter component — bg image with overlay, 4-column animated counters
- [ ] Footer component — dark purple bg, copyright + Component Dock link

### Phase 3: Styling
- [ ] Tailwind theme tokens: brand accent, dark purple, font families
- [ ] Responsive breakpoints (mobile stacking)
- [ ] Hover effects (button lift, social icon scale, filter active state)

### Phase 4: Tests
- [ ] Each component: render, content presence, responsive behavior
- [ ] 100% coverage gate

### Phase 5: Verification
- [ ] `npm run verify:app portfoliohub` passes
- [ ] Visual fidelity check against preview screenshot
