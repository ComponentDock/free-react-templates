# Wideshot — Design Notes & Implementation Tasks

## Source
- ColorLib: Ilene Berg
- URL: https://colorlib.com/wp/template/ilene-berg/
- Preview: https://preview.colorlib.com/theme/ilene-berg/

## Design Notes

### Visual Aesthetic
Creative digital agency template with a bold, colorful palette. The hero is fullscreen with a purple-tinted overlay. Each major section uses a distinct background color (pink services, teal projects, yellow newsletter, dark gray footer), creating a vibrant, blocky color rhythm. Typography is Poppins (light weight body, medium headings). Buttons are pill-shaped (20px border-radius) with white outlines on dark backgrounds and filled variants on light backgrounds.

### Section Order (top to bottom)
1. Header — absolute position, transparent bg over hero
2. Banner/Hero — fullscreen, purple overlay, centered white text + CTA
3. History — light gray bg (#f2f5f7), tabbed content with left image
4. Services — pink bg (#f3487f), 4 cards in grid, hover flip effect
5. Experience — white bg, 2-column: images left, text right
6. Projects — teal bg (#5dd1e3), carousel of project cards
7. Contact — white bg, form (name, email, message, send)
8. Newsletter — yellow bg (#f9c400), email + CTA
9. Footer — dark blue-gray (#4e5375), 4 columns + social links

### Key Fidelity Points
- Service cards have a distinctive flip animation on hover (top half changes color, icons swap from pink to white)
- Tabbed content in History section must be keyboard accessible
- Projects carousel should auto-rotate or have navigation dots
- Buttons have a subtle arrow-slide animation on hover (margin-right transition)
- Banner overlay must use the brand purple at 80% opacity

### Color Map for Tailwind @theme
```
brand: #8460f6
brand-alt: #8560f6
service-bg: #f3487f
service-card: #6f7598
projects-bg: #5dd1e3
newsletter-bg: #f9c400
history-bg: #f2f5f7
footer-bg: #4e5375
text-body: #777777
text-heading: #222222
```

## Implementation Tasks

### Phase 1: Scaffolding
- [ ] Copy simplest existing app as base (e.g., `apps/aurora` or similar minimal app)
- [ ] Rename package to `@free-react-templates/wideshot`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Update `public/CNAME` to `wideshot.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Theme Tokens
- [ ] Configure `src/index.css` with Tailwind `@theme` block using extracted colors
- [ ] Import Poppins via Google Fonts link in `index.html`

### Phase 3: Components (TDD)
- [ ] `Header.tsx` — logo + nav links + hamburger menu
- [ ] `Hero.tsx` — fullscreen banner, overlay, heading, subtext, CTA button
- [ ] `History.tsx` — section title, tabbed content (History/Mission/Vision), left image
- [ ] `Services.tsx` — 4 service cards with icons, hover flip animation
- [ ] `Experience.tsx` — 2-column layout, images + text block
- [ ] `Projects.tsx` — carousel of project items on teal background
- [ ] `Contact.tsx` — form with name, email, message, send button
- [ ] `Newsletter.tsx` — yellow bg, heading, email input, CTA button
- [ ] `Footer.tsx` — 4-column links, instafeed grid, social icons, Component Dock link

### Phase 4: Assembly
- [ ] `App.tsx` — compose all sections in order
- [ ] Ensure no ColorLib references in any app file

### Phase 5: Verification
- [ ] `npm run test:coverage` → 100% coverage
- [ ] `scripts/verify-app.sh wideshot` passes
- [ ] Build succeeds
- [ ] Footer links to https://www.componentdock.com/

### Phase 6: Ship
- [ ] Commit: `feat: Wideshot — Creative Agency template (ColorLib Ilene Berg)`
- [ ] Open PR, merge, deploy
