# Traverse — Implementation Notes

Source: ColorLib **Cruise** (https://colorlib.com/wp/template/cruise/)
Preview: https://preview.colorlib.com/theme/cruise/
New name: `traverse` (apps/traverse, @free-react-templates/traverse)

## Tasks / Todo

- [ ] Scaffold `apps/traverse` from simplest existing app (copy + rename package)
- [ ] Register `@free-react-templates/traverse` in root `package.json` workspaces + `npm install`
- [ ] Add DM Sans font to `index.html` via Google Fonts `<link>` (weights: 300, 400, 700)
- [ ] Set up `src/index.css` with `@theme` block: brand accent `#ff5533`, dark bg `#1c2d37`, footer bg `#000`, blog bg `#f6f5f5`
- [ ] Build `Navbar.tsx` — centered logo, split nav links, sticky, hamburger toggle
- [ ] Build `Hero.tsx` — full-viewport cover, background image (picsum), dark overlay, centered h1 + p
- [ ] Build `WhatWeDo.tsx` — accent label, centered heading, 3-column feature cards with hover reveal
- [ ] Build `OurFeatures.tsx` — dark bg section, numbered 9:3 image-text blocks, alternating layout
- [ ] Build `DesignFuture.tsx` — accent label, 2×2 text feature grid
- [ ] Build `Testimonial.tsx` — blockquote with accent quote icon, author citation
- [ ] Build `BlogPosts.tsx` — light bg, 4-column post cards with image + white content
- [ ] Build `Footer.tsx` — black bg, 3-column, newsletter subscribe, social icons, Component Dock link
- [ ] Compose all sections in `App.tsx` in correct order
- [ ] Write Vitest + Testing Library tests for each component (100% coverage)
- [ ] Run `scripts/verify-app.sh traverse` — typecheck + lint + test + build
- [ ] Create `public/CNAME` → `traverse.free.componentdock.com`
- [ ] Set `"homepage"` in package.json → `https://traverse.free.componentdock.com`

## Design Fidelity Notes

### Section Order
Navbar → Hero → What We Do → Our Features (dark) → Design for the Future → Testimonial → Blog → Footer

### Section-by-Section

1. **Navbar**: The original uses a centered logo with nav links split on both sides (col-4 | col-4 | col-4). This is unusual — most templates have logo on left. Preserve this layout. The navbar becomes sticky on scroll (use `position: sticky; top: 0;` with `z-index`). Mobile: collapse to hamburger.

2. **Hero**: `100vh` height, `min-height: 600px`. Background image with a `::before` overlay (`rgba(0,0,0,0.4)`). Text is centered. Simple single-line heading + paragraph.

3. **What We Do**: Three equal-width columns. Each feature card has `background: #ccc` as a placeholder behind the image. Content overlay sits on top (`position: absolute; top: 0`). On hover/focus, content becomes visible with opacity transition. The "Learn More" link uses the `.more` style: uppercase, small, letter-spaced, red-orange bottom border.

4. **Our Features (dark)**: The most visually striking section. Full-width dark background (`#1c2d37`). Two alternating 9:3 image-text blocks. The image takes up most of the width (75%), text takes 25% on the opposite side. Text blocks have a numbered caption (`01.`, `02.`) and body paragraphs. The second block reverses the layout (image right, text left).

5. **Design for the Future**: Simple 2×2 grid of text-only feature blocks. No images. Just h3 + paragraph for each: Creative Technology, World-class Quality, Deep Resources, World-class Quality.

6. **Testimonial**: Centered blockquote with a large quote icon (`#ff5533`, 2rem font). Text at 1.5rem. Citation with author name (bold) and title (muted). Top border `1px solid #efefef` separates it from previous section.

7. **Blog/News**: `bg-light` section (`#f6f5f5`). Four post cards in a row. Each card: image on top, white content card below with date meta (`color: #ccc`), title, and "Read More" link. Use realistic dates (not all the same).

8. **Footer**: Black background. Left half: About Us text + Features link list. Right half: Newsletter subscribe form + Follow Us social icons. Bottom: copyright with Component Dock attribution. The subscribe button uses `btn-primary` (which maps to `#ff5533` in Bootstrap).

### Color Palette
- `#ff5533` — primary accent (red-orange): labels, links, quote icon
- `#1c2d37` — dark section bg (teal-navy)
- `#000` — footer bg
- `#f6f5f5` — blog section bg (light warm gray)
- `#ccc` — feature card placeholder bg
- `#efefef` — section border
- `#fff` — card content bg, feature-2 text

### Typography
- DM Sans (weights 300, 400, 700) via Google Fonts
- Heading h1: 3rem (hero)
- Heading h2: varies (section headings ~2rem)
- Body: default (DM Sans 400)
- Labels: accent color, small caps / uppercase
- "More" links: 0.75rem, uppercase, letter-spacing 0.1rem
