# Buildex — Implementation Todo & Design Notes

## Source

- **ColorLib**: Consto (https://colorlib.com/wp/template/consto/)
- **Preview**: https://preview.colorlib.com/theme/consto/
- **New name**: buildex (apps/buildex, @free-react-templates/buildex)

## Implementation Order (section-by-section)

### Phase 1: Scaffold

- [ ] Copy simplest existing app (e.g. apps/aurora) as apps/buildex
- [ ] Rename package to @free-react-templates/buildex
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Update index.html: Google Fonts link for Raleway
- [ ] Set up index.css with @theme tokens:
  - `--color-brand: #FF5E14`
  - `--color-dark: #2D0A31`
  - `--color-navy: #1f2b7b`
  - `--color-heading: #1A1A1A`
  - `--color-body: #5E5E5E`
  - `--color-footer-bg: #F5F6F7`

### Phase 2: Components (in section order)

- [ ] Navbar.tsx — sticky nav with logo, links, mobile hamburger
- [ ] Hero.tsx — slider or static hero with dark bg, heading, CTA button
- [ ] About.tsx — two-column layout (image left, text right)
- [ ] Services.tsx — dark bg section with 2x2 service card grid
- [ ] Projects.tsx — 3 project cards with images, titles, CTA buttons
- [ ] Testimonials.tsx — carousel with quote cards
- [ ] ContactForm.tsx — form with name, email, message + submit
- [ ] CtaBanner.tsx — "Any help needed?" with Contact Us button
- [ ] Footer.tsx — 4-column layout with logo, nav, services, newsletter

### Phase 3: App Composition

- [ ] App.tsx — compose all sections in order
- [ ] Verify visual fidelity against preview/screenshot

### Phase 4: Tests + Verification

- [ ] Write tests for each component (100% coverage)
- [ ] Run scripts/verify-app.sh buildex
- [ ] Run npm run gate (if time permits)

## Design Notes

### Color Palette

- Primary orange: #FF5E14 — all CTAs, links, active states
- Dark purple: #2D0A31 — hero, services bg, contact bg, CTA banner bg
- Navy blue: #1f2b7b — secondary dark (sparingly)
- Heading: #1A1A1A — section headings
- Body: #5E5E5E — paragraph text
- Footer bg: #F5F6F7 — light gray

### Typography

- Font: Raleway (Google Fonts)
- Weights: 400 (body), 500 (nav), 600 (headings), 700 (hero)
- Hero heading: very large (48-60px)
- Section headings: 36-40px

### Button Styles

- Primary: bg #FF5E14, color white, border-radius 0, padding 14px 34px
- Outline: border 1px solid #FF5E14, color #FF5E14, no bg, border-radius 0
- Secondary: bg white, color #FF5E14, border-radius 0

### Section Rhythm

- Section padding: 120px top, 110px bottom (desktop)
- Mobile: reduced to ~65px top, 70px bottom
- Dark sections (#2D0A31) with subtle texture overlay (use picsum or CSS gradient)

### Placeholder Images

- Hero: `https://picsum.photos/seed/buildex-hero/1920/800`
- About: `https://picsum.photos/seed/buildex-about/700/500`
- Services icons: lucide-react icons
- Projects: `https://picsum.photos/seed/buildex-proj1/400/300`, etc.
- Testimonial avatars: `https://picsum.photos/seed/buildex-testi1/80/80`

### Fidelity Notes

- Hero is originally a slider; implement as static hero (single slide) for simplicity
- Section-bg2 texture overlay: use a CSS gradient overlay on dark purple instead of external image
- The "more-project" section between projects and testimonials can be merged into the projects section
- Footer newsletter form: static (no backend needed)
- Contact form: show success message on submit (no backend)
