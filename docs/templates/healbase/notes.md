# HealBase — Implementation Notes

## Source

- **ColorLib template:** Healthcouch
- **Source URL:** https://colorlib.com/wp/template/healthcouch/
- **Preview URL:** https://preview.colorlib.com/theme/healthcouch/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/healthcouch-free-template.jpg

## Section Order (from live preview DOM)

1. **Header / Navigation** — sticky, white bg, logo left, nav links right
2. **Hero / Slider** — full-width background image, overlay text, CTA button
3. **About Section** — image left, text right ("Create a healthy life you love!")
4. **CTA Banner** — full-width dark navy bg, "Happy mind healthy life"
5. **Services** — 3 icon cards ("Physical Activity" x3), hover turns green
6. **Testimonials** — carousel with dots, founder images, quotes
7. **Video Area** — background image, centered play button, ~400px height
8. **Blog** — 3 cards with images, titles, descriptions
9. **Newsletter** — email subscribe form, dark bg
10. **Footer** — dark bg, logo, link columns, social icons, copyright

## Design Notes

### Color Palette
- Primary: `#5AAC4E` (green) — buttons, hover states, service card hovers
- Secondary: `#1f2b7b` (dark navy) — CTA banner, footer wrapper, button base
- Button base: `#234821` (dark green) — `.btn` default background
- Page bg: `#f9f9ff` (light purple-tinted white) — section backgrounds
- Text: `#000000` primary, `#999999` muted

### Typography
- Font: `"Poppins", sans-serif` throughout
- Headings: bold, varying sizes h1-h5

### Buttons
- Asymmetric border-radius: `0 0 0 17px` (left-bottom corner only)
- Hover animation: green `#5AAC4E` fills via `scaleX` transform
- White border default, transitions on color

### Section Backgrounds
- Hero: background image `h1_hero.png` with cover
- CTA Banner: `section_bg01.png` (dark overlay)
- Video: `section_bg02` image
- Footer wrapper: `section_bg3` (dark)
- Light sections: `#f9f9ff`

### Layout
- Bootstrap-style grid (col-xl, col-lg, col-md)
- Container-based centered layout
- Hero: full-width with negative margin for service cards overlap (not needed in React)
- About: 2-column (image + text) on desktop
- Services: 3-column grid
- Blog: 3-column grid
- Footer: multi-column

## Implementation Tasks

1. [ ] Scaffold app: `apps/healbase/` from simplest existing app
2. [ ] Create `src/App.tsx` composing all sections
3. [ ] Implement `Navbar.tsx` — sticky header with logo + nav links
4. [ ] Implement `Hero.tsx` — background image, overlay text, CTA button
5. [ ] Implement `About.tsx` — 2-column image + text layout
6. [ ] Implement `CtaBanner.tsx` — full-width dark banner
7. [ ] Implement `Services.tsx` — 3 icon cards in grid, hover effect
8. [ ] Implement `Testimonials.tsx` — carousel with dots
9. [ ] Implement `VideoArea.tsx` — background image + play button
10. [ ] Implement `Blog.tsx` — 3 cards in grid
11. [ ] Implement `Newsletter.tsx` — email subscribe form
12. [ ] Implement `Footer.tsx` — columns, social, copyright, Component Dock link
13. [ ] Write `index.css` with Tailwind theme tokens
14. [ ] Write tests for each component (100% coverage)
15. [ ] Run `scripts/verify-app.sh healbase`
16. [ ] Commit and push

## Fidelity Notes

- Match the asymmetric button radius exactly (`0 0 0 17px`)
- Use green `#5AAC4E` hover animation on buttons (CSS transition)
- Services cards: icon above title above description, "+" button
- Testimonials: dots navigation, auto-rotate optional
- Video area: use a placeholder video/image with play icon overlay
- Blog cards: image top, title, description — 3 per row on desktop
- Newsletter: dark background, centered form
- Footer: dark bg, 4-column layout, social icons (Facebook, Twitter, Pinterest)
