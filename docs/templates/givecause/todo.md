# GiveCause — Implementation Todo & Design Notes

## Template mapping
- **New name:** GiveCause
- **ColorLib source:** Charity Works
- **Preview URL:** https://preview.colorlib.com/theme/charityworks/
- **Source slug:** charity-works (note: preview uses `charityworks` without hyphen)

## Implementation order

1. [ ] Scaffold `apps/givecause` (copy simplest existing app, rename package)
2. [ ] Set up `index.html` with Google Fonts links (Josefin Sans, Great Vibes, Barlow, Montserrat)
3. [ ] Configure `vite.config.ts` with `injectUiSource()` pattern
4. [ ] Create `src/index.css` with Tailwind `@theme` tokens:
   - `--color-brand: #c6a16e`
   - `--color-brand-hover: #e6373d`
   - `--color-heading: #0b1c39`
   - `--color-body: #506172`
   - `--color-muted: #868c98`
   - `--color-surface: #f9f9ff`
   - `--color-surface-alt: #f0e9ff`
5. [ ] Build `Navbar` component (top bar + sticky nav + hamburger mobile)
6. [ ] Build `Hero` component (full-width slider area, dark overlay, two CTAs)
7. [ ] Build `About` component (text + image side-by-side)
8. [ ] Build `Services` component (3-column card grid with icons)
9. [ ] Build `Causes` component (3-column card grid with images)
10. [ ] Build `FeaturedEvents` component (event cards on lavender bg)
11. [ ] Build `Countdown` component (timer with days/hours/min/sec)
12. [ ] Build `Team` component (4-card grid, gradient overlay on hover)
13. [ ] Build `Testimonials` component (slider with quote icon)
14. [ ] Build `CTABanner` component (gold banner with headline)
15. [ ] Build `Blog` component (2–3 blog cards with date badge)
16. [ ] Build `Footer` component (4-column + bottom bar, Component Dock link)
17. [ ] Compose all sections in `App.tsx`
18. [ ] Write tests for all components (100% coverage)
19. [ ] Add `public/CNAME` → `givecause.free.componentdock.com`
20. [ ] Set `homepage` in `package.json`
21. [ ] Run `npm install` at repo root for lockfile
22. [ ] Run `scripts/verify-app.sh givecause` (typecheck + lint + tests + build)

## Design fidelity notes

### Hero
- Full-width slider with min-height ~830px, dark overlay gradient
- Hero h1: Barlow 900, uppercase, white, 70px desktop
- Hero p: Great Vibes cursive, white, 18px
- Two buttons: solid gold (`#c6a16e`, 5px radius) + outlined (white bg, gold border)
- Button hover: red (`#e6373d`) sweep from left (scaleX animation)
- Replace original slider JS with simple static hero or React state carousel

### About
- Section padding: 200px top/bottom
- Two-column layout: text left, image right
- Heading: Josefin Sans 500, `#0b1c39`
- Body: Great Vibes cursive, `#506172`

### Services
- 3-column grid with icon + title + description
- Section padding: 200px/170px
- Card icons: use lucide-react equivalents
- Light background (#fff)

### Causes
- 3-column grid, same layout as services but with images
- Images: use picsum.photos/seed/givecause-n/...

### Featured Events
- Light lavender bg (`#f0e9ff` section-bg2)
- Event cards with shadow and border

### Countdown
- Dark bg section
- Timer: days, hours, minutes, seconds in separate boxes
- Use CSS counters or React state for live countdown

### Team
- 4-member grid
- Each member: full-width image with dark gradient overlay at bottom
- Name in Josefin Sans 500, role in Great Vibes
- Hover: image scales 1.1 + slight rotation

### Testimonials
- Dark background section
- Quote icon (use lucide-react Quote)
- Large italic testimonial text (Great Vibes, white)
- Slider navigation (prev/next arrows in gold circles)

### CTA Banner
- Full-width, `#c6a16e` background
- Large white headline
- Animated arrow at bottom (can be CSS-only or simple SVG)

### Blog
- 2–3 cards in a row
- Each: image with date badge overlay (gold bg, white text, 5px radius)
- Title, excerpt, meta (author, date, comments)
- Card shadow: `0px 10px 20px rgba(221,221,221,0.3)`

### Footer
- Dark background, 4 columns: logo/about, Quick Links, Support, Newsletter
- Newsletter: input + submit button
- Bottom bar: copyright + social icons
- **Must link Component Dock** in footer

## Pitfalls
- Body font "Great Vibes" is cursive — only use for paragraphs, not headings
- Hero h1 uses "Barlow" not "Josefin Sans" (different from other headings)
- Button hover uses `::before` pseudo-element with scaleX transform — replicate with Tailwind group-hover or CSS
- Team section has generous padding (pt-160 pb-160) — don't reduce
- Footer padding is 170px top/bottom on desktop
