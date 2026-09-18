# Mentorly — Implementation Todo & Design Notes

## Source
- **ColorLib slug:** coach
- **Preview:** https://preview.colorlib.com/theme/coach/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coach-free-template.jpg

## Implementation Order

### Phase 1: Scaffold
- [ ] Copy simplest existing app (e.g. `apps/clarity`) to `apps/mentorly`
- [ ] Rename package to `@free-react-templates/mentorly`
- [ ] Create `public/CNAME` with `mentorly.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://mentorly.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Set up `index.html` with Google Fonts: Playfair Display (headings) + Open Sans (body)
- [ ] Set up `src/index.css` with Tailwind `@theme` tokens:
  - `--color-brand-primary: #037ef3`
  - `--color-brand-hero: #ffdd40`
  - `--color-brand-orange: #fd7e14`
  - `--color-surface-dark: #333333`

### Phase 2: Components (section by section)
- [ ] `Navbar.tsx` — Absolute positioned, logo left, nav links right, mobile hamburger
- [ ] `Hero.tsx` — Full-height yellow bg, large Playfair heading, subtext, blue CTA button
- [ ] `About.tsx` — Two-column: founder image + bio, speaking gigs list, 4 team cards
- [ ] `Training.tsx` — Light gray bg, heading + subtext, 2×3 card grid (image + title + desc)
- [ ] `Services.tsx` — White bg, heading + subtext, 2×3 card grid (icon/title/desc)
- [ ] `Gallery.tsx` — 12-image responsive grid, rounded corners, hover opacity
- [ ] `Testimonials.tsx` — Heading, carousel of 4 quotes with author names
- [ ] `Blog.tsx` — 4 blog post cards with image/date/title/excerpt/read-more
- [ ] `Contact.tsx` — 3-column info + newsletter form
- [ ] `Footer.tsx` — Dark bg, 3 columns (about, links, follow/subscribe), copyright with Component Dock link

### Phase 3: Assembly & Polish
- [ ] `App.tsx` — Compose all sections in order
- [ ] `src/main.tsx` — Entry point (excluded from coverage)
- [ ] Verify `vite.config.ts` has `injectUiSource()` pattern

### Phase 4: Tests (TDD)
- [ ] Test each component renders correctly (heading, text, structure)
- [ ] Test responsive behavior (mobile nav toggle)
- [ ] Test form interaction (newsletter email input)
- [ ] Test all links/buttons have correct text
- [ ] Achieve 100% coverage

### Phase 5: Verification
- [ ] `scripts/verify-app.sh mentorly` passes
- [ ] Build succeeds
- [ ] No ColorLib references in app source

## Design Notes

### Color Usage
- Yellow (#ffdd40) is ONLY on the hero background — a distinctive warm accent
- Blue (#037ef3) is the interactive color — buttons, nav hover, form focus
- Orange (#fd7e14) appears only on hero body links
- Footer is dark (#333333) with white/gray text
- Most section backgrounds are white or light gray (#f8f9fa)

### Typography
- Headings use Playfair Display — a high-contrast serif that gives the coaching theme authority
- Hero h1 is extra bold (weight 900) at 4rem desktop / 2rem mobile
- Body text uses Open Sans at regular weight (400)
- Section headings are black, subtext is gray

### Layout Patterns
- Sections use standard padding: 5em 0 desktop, 2.5em 0 mobile
- Training and Services use identical 2×3 grids (on bg-light for training, white for services)
- Gallery is a masonry-ish grid: 2 cols mobile → 3 cols md → 4 cols xl
- Team members and speaking gigs are in horizontal card layouts

### Image Treatment
- All images use border-radius: 7px
- Gallery images have hover opacity transition (0.5 opacity on hover)
- Training figures also use 7px border-radius
- Use picsum.photos with deterministic seeds for placeholders

### Interactive Elements
- Mobile hamburger with offcanvas overlay (rgba(0,0,0,0.2))
- Gallery uses lightbox (fancybox) — implement as simple click-to-expand modal
- Testimonials use carousel/slider — implement with state or simple CSS scroll-snap
- Newsletter form in contact section and footer
