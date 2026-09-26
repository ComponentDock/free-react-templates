# Pundit — Implementation Tasks & Design Notes

Source: ColorLib "Politics" → https://preview.colorlib.com/theme/politics/
New name: `pundit`

## Task List

### Phase 1: Scaffolding
- [ ] Create `apps/pundit/` from simplest existing app (copy, rename package to `@free-react-templates/pundit`)
- [ ] Set `public/CNAME` to `pundit.free.componentdock.com`
- [ ] Set `package.json` homepage to `https://pundit.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Structure & Tokens
- [ ] Set up `index.css` with Tailwind `@theme` tokens:
  - `--color-brand: #3898f8` (primary blue)
  - `--color-surface: #f9f9ff` (light grey-blue)
  - `--color-navy: #04091e` (dark footer)
  - `--color-dark: #222` (headings, header bar)
  - `--color-muted: #777` (body text)
- [ ] Add Poppins font link in `index.html`
- [ ] Create `src/App.tsx` composing all sections in order

### Phase 3: Components (section by section)
- [ ] `Navbar.tsx` — Fixed header with top bar (social + contact) + main nav (logo + links). Logo has blue left-border accent. Nav links uppercase, 12px, Poppins 400.
- [ ] `Hero.tsx` — Fullscreen with background image + dark overlay. Centered h6 subtitle, h1 "Support Our Party", paragraph, CTA "Get Started" (square corners `rounded-none`).
- [ ] `Countdown.tsx` — Split layout. Left: heading + subtitle. Right: 4 countdown columns on brand blue background. Use static display (no JS countdown needed).
- [ ] `Services.tsx` — 3-column grid. Section heading + 3 cards. Each: image placeholder (picsum), h4, paragraph. Hover: `scale(1.1) rotate(-2deg)` on image.
- [ ] `About.tsx` — Split layout. Left: background image (CSS pseudo-element pattern or Tailwind `bg-cover`). Right: h1 heading, paragraph, 2 feature items with Lucide icons (Diamond, Phone).
- [ ] `Gallery.tsx` — Masonry grid. Row 1: 2-col (8/4). Row 2: 2-col (6/6). Images with hover opacity transition.
- [ ] `Counter.tsx` — Full-width dark overlay. 4 circular counters. Blue border circle + blue filled inner circle + white number. Static values.
- [ ] `Accordion.tsx` — Split layout. Left: accordion (4 items: Success, Info, Danger, Warning) with expand/collapse. Right: video play button over dark overlay image.
- [ ] `Brands.tsx` — Carousel of 5 logo placeholders. Grayscale default, color on hover. Light grey background.
- [ ] `Blog.tsx` — 4-column grid. Each card: image (hover scale), black date badge, h4 title (hover blue), excerpt, likes + comments row.
- [ ] `Footer.tsx` — Dark navy (#04091e). 3 columns: links, newsletter form, Instagram grid. Bottom: copyright + social icons + Component Dock link.

### Phase 4: Testing
- [ ] Component tests for each section (Vitest + RTL)
- [ ] Ensure 100% line/branch/function/statement coverage
- [ ] Verify responsive breakpoints (mobile, tablet, desktop)

### Phase 5: Verification
- [ ] `npm run verify:app pundit` passes
- [ ] Visual check against original design
- [ ] No ColorLib references in any app file
- [ ] Footer links to Component Dock

## Design Notes

### Section Order (1:1 with original)
1. Navbar (fixed)
2. Hero/Banner (fullscreen, dark overlay)
3. Countdown (split, blue bg right)
4. Services (3 cards, image hover)
5. About (split, bg image left)
6. Gallery (masonry 4 images)
7. Counter (dark overlay, 4 circles)
8. Feedback/Accordion (split, video right)
9. Brands (carousel, grayscale)
10. Blog (4 cards)
11. Footer (dark navy)

### Key Fidelity Points
- **Primary blue #3898f8** — this is the defining color. Used for: buttons, counters, accordion active, hover states, footer social hover, brand accent.
- **Pill-shaped primary button** (`rounded-full` / `border-radius: 25px`) for most CTAs. Hero CTA uses square corners.
- **Dark overlays** on hero (`rgba(0,0,0,0.5)`), counter (`rgba(0,0,0,0.7)`), and video section.
- **About section** uses a CSS `:after` pseudo-element for the left background image — in React, use a `div` with `bg-cover` instead.
- **Counter circles** are distinctive: outer circle with blue border, inner filled blue circle, number centered in white.
- **Accordion** uses chevron rotation (0° → 90°) on open, background changes to brand blue when active.
- **Blog date badge**: black background, white text, fixed width 115px, centered.
- **Brand logos**: grayscale filter + opacity 0.5 by default, full color on hover.

### Placeholder Strategy
- Hero background: `https://picsum.photos/seed/pundit-hero/1920/1080`
- Service images: `https://picsum.photos/seed/pundit-svc1/400/300` (etc.)
- About image: `https://picsum.photos/seed/pundit-about/800/600`
- Gallery images: `https://picsum.photos/seed/pundit-gal1/800/600` (etc.)
- Counter background: `https://picsum.photos/seed/pundit-counter/1920/600`
- Video background: `https://picsum.photos/seed/pundit-video/600/400`
- Blog images: `https://picsum.photos/seed/pundit-blog1/400/300` (etc.)
- Instagram thumbnails: `https://picsum.photos/seed/pundit-inst1/200/200` (etc.)
- Brand logos: SVG placeholders or lucide icons as stand-ins
