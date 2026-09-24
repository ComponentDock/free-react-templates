# Pennant — Design Notes & Task Outline

**Source:** ColorLib Nikki (https://preview.colorlib.com/theme/nikki/)
**New name:** pennant
**Category:** Blog & Magazine

## Section order (matches original 1:1)

1. **Navbar** — Sticky, white background, logo left, nav links (Home, Pages dropdown, Categories mega-menu, About, Contact), search icon, social icons right
2. **Hero Carousel** — Full-width, 3 slides: each split 50/50 left image / right text (date, title, excerpt, "Read More" CTA button). Auto-rotating with dots.
3. **Blog Content Area** — 8/4 grid layout (main + sidebar)
   - **Featured Post** — Full-width card: large image, date, title, excerpt, author + comment count + social icons meta row
   - **Blog Post Grid** — 2-column × 3 rows = 6 posts: thumbnail, date, title, short excerpt
   - **Pagination** — Newer ← / Older → arrows
4. **Sidebar** (right column, 1/3 on desktop)
   - About Me: photo + signature + bio
   - Subscribe & Follow: social icon buttons row
   - Latest Posts: 5 items with small thumbnails
   - Advertisement placeholder
   - Newsletter: email input + send button
   - Popular Tags: pill/tag links
5. **Instagram Feed** — 8 images in a flex row, hover overlay with Instagram icon
6. **Footer** — Dark background, social links bar (7 platforms with labels), copyright line with Component Dock link

## Fidelity notes

- **Color palette:** Brand tan #d1bb95 is the primary accent. Dark text #191919, body text #595959, light meta text #a6a6a6. White background everywhere except footer (dark).
- **Typography:** "Barlow" from Google Fonts. Clean sans-serif. Headings bold, body regular weight.
- **Buttons:** .nikki-btn has border-radius: 2px, white bg + dark text. Hover transitions to #d1bb95 bg + white text. Simple, no rounded corners.
- **Hero overlay:** Deep purple-black rgba(21,4,48,0.89) behind text for readability over images.
- **Layout:** Bootstrap-like grid (container → row → col). The original uses 12-col grid. Tailwind equivalent: max-w-7xl mx-auto, grid grid-cols-12.
- **Mega menu:** Categories dropdown shows 4 columns of links. Simplify to a basic dropdown in React.
- **Sidebar widgets:** Stacked vertically with mb-30 spacing (7.5rem → ~1.875rem Tailwind).
- **Instagram strip:** 8 equal-width images, each with hover overlay. Full-width container.
- **Footer:** Dark bg with social icons + labels in a flex row, centered copyright below.

## Implementation tasks

- [ ] Scaffold app from template copy (rename package, update CNAME/homepage)
- [ ] Add Barlow font link to index.html
- [ ] Set up Tailwind theme tokens (#d1bb95 brand, font, etc.)
- [ ] Build Navbar component (sticky, responsive hamburger)
- [ ] Build HeroCarousel component (3 slides, auto-rotate, split layout)
- [ ] Build FeaturedPost component (full-width card)
- [ ] Build BlogPostGrid component (2-col × 3 rows)
- [ ] Build Pagination component (Newer/Older)
- [ ] Build Sidebar with 5 widget components
- [ ] Build InstagramFeed component (8 images, hover overlay)
- [ ] Build Footer component (social bar + copyright + Component Dock)
- [ ] Compose App.tsx (section order: Navbar → Hero → BlogContent → Instagram → Footer)
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck, lint, tests, build
