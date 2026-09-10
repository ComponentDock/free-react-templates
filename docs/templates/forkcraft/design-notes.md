# Forkcraft — Prep Notes

Source: ColorLib Caviar (https://colorlib.com/wp/template/caviar/)
Preview: https://preview.colorlib.com/theme/caviar/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg

## Section order (from preview HTML)

1. **Navbar** — sticky, logo "forkcraft" left, nav links right, search icon
2. **Hero** — full-width background image slider with dark overlay (rgba(0,0,0,0.5)), heading 52px white, paragraph, CTA button, social sidebar, slider nav arrow
3. **About Us** — two sub-sections: (a) image left + text right, (b) text left + image right; subtitle span above paragraph; alternating layout with large vertical spacing (200px between sub-sections)
4. **Special Dishes** — centered heading "Special", "View The Menu" CTA button, 3-column grid of dish cards (image + name + price), decorative watermark text "Special" behind
5. **Awards** — heading "Awards" left column, 5 award logos right column in flex row, bottom padding 200px
6. **Testimonials** — centered heading, carousel with cards: circular avatar + name/subtitle left, quote text below, padding 70px 100px on container
7. **Reservation** — split 50/50: left form (date, time, persons, name, message textarea, submit button), right side full-height background image; form 390px wide, bottom-border-only inputs
8. **Footer** — dark bg #333333, centered logo 30px, copyright text in rgba(255,255,255,0.2), Component Dock link

## Design tokens extracted

- Fonts: Open Sans (body 400, headings 700), Work Sans (buttons 500)
- Accent: #ff0000 (red) — buttons, hover states, preloader
- Backgrounds: #fafafa (body), #f9f9f9 (about section), #333333 (footer)
- Headings: 36px default, 52px hero, 700 weight, #000
- Button: white bg, 1px #b2b2b2 border, border-radius 0, 180×54px min, red hover
- Footer: #333 bg, rgba(255,255,255,0.2) text, 14px
- Form inputs: bottom-border 1px #c1c1c1, transparent bg
- Overlays: rgba(0,0,0,0.5) hero, rgba(0,0,0,0.6) testimonials, rgba(0,0,0,0.3) reservation
- Section padding: 150px vertical (generous)

## Implementation task outline

### Phase 1: Scaffolding
- [ ] Create `apps/forkcraft/` (copy simplest existing app, rename package to `@free-react-templates/forkcraft`)
- [ ] Update `public/CNAME` → `forkcraft.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://forkcraft.free.componentdock.com`
- [ ] Set up `src/index.css` with Tailwind v4 theme tokens (@theme block for brand colors)
- [ ] Import Google Fonts (Open Sans + Work Sans) in `index.html`

### Phase 2: Component build (section by section)
- [ ] `Navbar.tsx` — sticky nav, logo, links, search icon, mobile hamburger
- [ ] `Hero.tsx` — background image with overlay, heading, text, CTA button, slider nav, social sidebar
- [ ] `AboutUs.tsx` — two-column alternating layout with images + text blocks
- [ ] `SpecialDishes.tsx` — 3-column grid, dish cards with image/name/price
- [ ] `Awards.tsx` — heading + 5 logo images in flex row
- [ ] `Testimonials.tsx` — carousel with avatar, name, subtitle, quote
- [ ] `Reservation.tsx` — split form (left) + image (right), bottom-border inputs
- [ ] `Footer.tsx` — dark bg, centered logo, copyright, Component Dock link

### Phase 3: Testing
- [ ] Unit tests for each component (Vitest + Testing Library)
- [ ] 100% coverage on all components
- [ ] Responsive behavior tests

### Phase 4: Verification
- [ ] `npm run verify:app forkcraft` passes
- [ ] Build succeeds
- [ ] Deploy to Surge on merge
