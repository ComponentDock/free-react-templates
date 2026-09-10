# Pastella — Implementation Tasks & Design Notes

Source: ColorLib Cakes (https://colorlib.com/wp/template/cakes/)
Preview: https://preview.colorlib.com/theme/cakes/
Spec: openspec/specs/template-pastella/spec.md

## Implementation Tasks

### Phase 1: Scaffolding
- [ ] Copy simplest existing app as base (e.g. `apps/pulp` or similar small template)
- [ ] Rename package to `@free-react-templates/pastella`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set `public/CNAME` to `pastella.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://pastella.free.componentdock.com`
- [ ] Run `npm install` at root to register workspace in lockfile
- [ ] Add Google Fonts links to `index.html`: Quicksand (400,500,600,700), DM Sans (400,500,700), Lobster (400)

### Phase 2: Theme Tokens (index.css)
- [ ] Define `@theme` block with brand colors:
  - `--color-brand: #F04506`
  - `--color-brand-secondary: #A85432`
  - `--color-brand-tertiary: #FF9F67`
  - `--color-bg-blush: #FFF5F2`
  - `--color-bg-warm: #FFF7F3`
- [ ] Set default font-family to Quicksand, DM Sans for headings
- [ ] Define button utility styles (pill radius 30px, brand color bg)

### Phase 3: Components (in section order)
1. **Navbar.tsx** — Sticky header, responsive, hamburger on mobile
2. **Hero.tsx** — Full-width with background image, script accent, heading, CTA
3. **PopularItems.tsx** — Section heading + 4-card grid with picsum images
4. **About.tsx** — Split layout (image left, text right), CTA button
5. **Features.tsx** — 3-column service cards with lucide-react icons
6. **VideoArea.tsx** — Dark background section with play button (modal/placeholder)
7. **Testimonials.tsx** — Carousel with testimonial cards (use carousel pattern from other templates)
8. **Newsletter.tsx** — Email signup form
9. **Footer.tsx** — Multi-column with links, contact, Component Dock attribution

### Phase 4: App.tsx Composition
- [ ] Import and compose all section components in order
- [ ] Verify no ColorLib references in any source file

### Phase 5: Tests (TDD)
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Run `npx vitest run --coverage` from app directory

### Phase 6: Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
- [ ] Visual check against screenshot/preview

## Design Notes

### Section-by-Section Fidelity Notes

**Navbar:**
- Sticky position with transparent-to-white background transition on scroll
- Logo on left (text-based, use Lobster font for brand feel)
- Nav links: Home, Product, About, Blog, Contact
- Right side: phone icon + number, "Order Online" pill button (brand color)
- Mobile: hamburger icon, slide-down menu

**Hero:**
- Full-width slider area with `slider-bg1` class (background image)
- Script-font "Delicious" word in accent color (#F04506)
- Large heading "Delicious Cake For Everyone" (DM Sans, ~80px desktop)
- Description paragraph (Quicksand, muted color)
- "Explore Menu" pill button (brand color, white text, 30px radius)
- Decorative shape element (bottom-right curve)

**Popular Items:**
- Light pink background (#FFF5F2)
- Centered section heading with decorative line
- 4-column grid (responsive: 3 → 2 → 1 columns)
- Each card: image top (rounded corners), name (DM Sans bold), description (Quicksand, gray), price + "Order Now" button (pill, brand color)

**About / Support:**
- Split layout: large image left (6 cols), text content right (5 cols)
- Heading with script accent word + main heading
- Description paragraph
- "Our Story" pill button

**Features:**
- Light pink background (#FFF5F2) again
- 3-column grid of service cards
- Each: circular icon container (brand color or accent), title, description text
- Use lucide-react icons (Cake, Heart, Star or similar)

**Video Area:**
- Dark background with background image/overlay
- Centered circular play button (white border, white triangle)
- Opens a placeholder modal on click

**Testimonials:**
- Light background
- Carousel/slider with testimonial cards
- Each card: quote text, avatar image (picsum), name in bold, role in muted color
- Auto-rotation or dot navigation

**Newsletter:**
- Clean centered section
- Heading, description, email input + submit button
- Brand color accent on button

**Footer:**
- Warm background (#FFF7F3)
- 4 columns: About (logo + description), Quick Links, Product links, Contact
- Bottom bar: copyright text + "Component Dock" link (https://www.componentdock.com/)

### Color Palette Summary
- Primary: #F04506 (orange-red) — CTAs, hover states
- Secondary: #A85432 (warm brown) — accents
- Tertiary: #FF9F67 (peach) — highlights
- Background: #FFF5F2 (blush pink), #FFF7F3 (warm white)
- Text: #1A1A1A (headings), #5E5E5E (body), #777 (muted)
