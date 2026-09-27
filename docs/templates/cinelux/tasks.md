# Cinelux — Implementation Tasks & Design Notes

Source: ColorLib Videograph (https://preview.colorlib.com/theme/videograph/)
New name: `cinelux`
Category: Portfolio

## Implementation Tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/reel` or similar portfolio app)
- [ ] Rename package to `@free-react-templates/cinelux`
- [ ] Update `public/CNAME` to `cinelux.free.componentdock.com`
- [ ] Update `homepage` in `package.json`
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Structure & Tokens
- [ ] Create `src/index.css` with Tailwind entry + theme tokens:
  - `--color-accent: #00bfe7`
  - `--color-dark: #100028`
  - `--color-darkest: #0a0119`
  - Font families: Play (headings), Josefin Sans (body)
- [ ] Add Google Fonts links to `index.html` (Play + Josefin Sans)
- [ ] Create `src/App.tsx` composing all section components

### Phase 3: Components (section-by-section)

#### Header.tsx
- Transparent absolute header
- Logo left, nav links center, social icons right
- White text, border-bottom `rgba(255,255,255,0.1)`
- Mobile hamburger menu

#### Hero.tsx
- Full-width slider (use simple React state or CSS for slides)
- 3 slides with background images (picsum.photos)
- Left-aligned: subtitle span, h2 heading, CTA button
- Button: white text, uppercase, letter-spacing 2px, decorative corner brackets
- Pagination dots at bottom

#### Services.tsx
- Section padding: 100px top/bottom
- Left column (col-lg-4): subtitle "Our services", heading "What We do?", description, CTA button
- Right column (col-lg-8): 2×2 grid of service cards
- Each card: icon (lucide-react), h4 title, description paragraph
- Services: Motion graphics, Scriptwriting and editing, Video distribution, Video hosting

#### WorkGallery.tsx
- Masonry-style grid with mixed item sizes (wide, large, small)
- Background: #100028
- Each item: background image (picsum.photos), hover overlay with project info
- CSS grid or flexbox with varying column spans

#### Counter.tsx
- Background: #100028
- 4-column row of stat items
- Each: icon (lucide-react), animated number, label text
- Stats: Completed Projects (230), Happy Clients (1068), Perspective Clients (230), Awards (45)

#### Team.tsx
- Background image section
- Heading "OUR Team" centered
- 4-column grid of team cards
- Each card: background image (picsum.photos), name, role, social icons overlay
- Hover reveals social icons

#### Blog.tsx
- Section padding: 100px top/bottom
- Heading "Blog Update" centered
- 3-column grid (or carousel) of blog cards
- Each card: h4 title, date + comment count, excerpt, "Read more" link with arrow

#### CallToAction.tsx
- Full-width background image (picsum.photos)
- Large h2 heading, subtitle p, CTA link
- Background: dark overlay on image

#### Footer.tsx
- Background: #0a0119
- Top row: logo left, social icons right, border-bottom
- Middle: 3-column layout
  - Col 1: "About us" heading, description, "Read more" link
  - Col 2: "Who we are" heading, link list (Team, Careers, Contact, Locations)
  - Col 3: "Newsletter" heading, email input + subscribe button
- Copyright bar at bottom
- MUST link to https://www.componentdock.com/

### Phase 4: Testing
- [ ] Write tests for each component (describe + scenario-style it blocks)
- [ ] Verify 100% coverage with `npm run test:coverage`
- [ ] Test mobile responsive behavior
- [ ] Test hero slider interaction
- [ ] Test hover states on work gallery and team cards

### Phase 5: Verification
- [ ] Run `scripts/verify-app.sh cinelux`
- [ ] Confirm no ColorLib references in app code
- [ ] Confirm footer links to Component Dock
- [ ] Confirm CNAME and homepage are correct

## Design Notes

### Section Order (matches original)
1. Header (transparent overlay)
2. Hero (full-width slider, 3 slides)
3. Services (2×2 grid + left column)
4. Work Gallery (masonry, dark bg)
5. Counter/Stats (4 items, dark bg)
6. Team (4 cards, bg image)
7. Blog (3 cards, carousel)
8. Call-to-Action (bg image, large text)
9. Footer (dark, 3-column)

### Fidelity Notes
- **Hero slider:** Original uses Swiper.js. For React, use a simple state-based carousel or Swiper React wrapper. Maintain the left-aligned text overlay pattern.
- **Work gallery masonry:** Original uses float-based masonry. Use CSS grid with `grid-template-rows: masonry` or manual row spans for cross-browser support.
- **Button brackets:** Original buttons have decorative corner bracket pseudo-elements. Recreate with CSS `::before`/`::after` or SVG borders.
- **Team hover overlay:** Cards show social icons on hover. Use absolute positioning + opacity transition.
- **Counter animation:** Numbers count up on scroll. Use Intersection Observer + requestAnimationFrame.
- **Background images:** Use `picsum.photos/seed/cinelux-{n}/w/h` for deterministic placeholders.
- **No assets copied:** All images are placeholders, fonts are Google Fonts, icons from lucide-react.
