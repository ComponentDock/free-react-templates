# ImaStudio — Implementation Tasks & Design Notes

Source: ColorLib Imahe (https://colorlib.com/wp/template/imahe/)
Preview: https://preview.colorlib.com/theme/imahe/
New name: imastudio

## Task Outline

### Phase 1: Scaffolding
- [ ] Copy simplest existing app as base (e.g. similar photography app)
- [ ] Rename package to `@free-react-templates/imastudio`
- [ ] Update `public/CNAME` to `imastudio.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Components (TDD order)
- [ ] Navbar — logo with camera icon, split left/right nav, Gallery dropdown
- [ ] Hero — full-width video/image bg with dark overlay, decorative headline, circular CTA
- [ ] Services — 3-card row with yellow icons
- [ ] About — split layout (image left, text right)
- [ ] Gallery — 4-column grid with hover overlays and category tags
- [ ] Blog — 3-column article cards with metadata
- [ ] Instagram — horizontal feed strip with dark background
- [ ] Footer — 4-column layout with social icons, recent blog, contact info
- [ ] CopyBar — dark copyright bar with Component Dock link

### Phase 3: Assembly
- [ ] Compose all sections in `App.tsx` in correct order
- [ ] Add responsive breakpoints
- [ ] Add Animate.css / scroll reveal equivalent (AOS or Framer Motion)
- [ ] Verify all design tokens in `index.css` via `@theme`

### Phase 4: Verification
- [ ] Run `npm run test:coverage` — must be 100%
- [ ] Run `scripts/verify-app.sh imastudio`
- [ ] Visual comparison with original preview

## Section Order (from original)
1. Navbar (fixed/absolute over hero)
2. Video Hero (full-width, dark overlay, centered text)
3. Services (3 cards, icons)
4. About (split image+text)
5. Gallery (4-col grid with overlays)
6. Blog (3-col article cards)
7. Instagram (horizontal feed)
8. Footer (4-col)
9. Copyright bar

## Design Notes

### Color Palette
- Primary accent: #FFDD00 (bright yellow) — use for icons, active states, hover
- Dark backgrounds: #000000 (nav, hero overlay), #252525 (copy bar, instagram)
- Body: #ffffff bg, #666666 text, #000000 headings
- Footer: white bg with dark copy bar

### Typography
- Headings/body: "Josefin Sans" — weights 300, 400, 700
- Decorative: "Amatic SC" — for the hero "holder" label above headline
- Import both via Google Fonts `<link>` in index.html

### Key Component Details

**Navbar:**
- Transparent/dark background, centered logo with camera icon (use lucide-react Camera icon)
- Left: Home, Gallery (dropdown with 4 items), Services
- Right: Blog, About, Contact
- Mobile: hamburger toggle

**Hero:**
- 800px height, background image with dark overlay (rgba(0,0,0,0.7))
- Yellow "holder" label in Amatic SC font
- Main headline in Josefin Sans
- Date line below headline
- Circular white CTA button (border-radius: 50%, white bg, black text)

**Services:**
- 3 cards in a row: Photography (camera icon), Image Processing (image icon), Videography (video icon)
- Yellow circular icon containers
- Title + description text below each icon

**About:**
- Split layout: image fills left half, text on right half
- Heading: "We Are ImaStudio a Photography Studio"
- Two paragraphs of descriptive text

**Gallery:**
- 4-column grid (no gutters between items)
- Each item: image with dark overlay on hover
- Hover shows: title text + category tags in pill badges
- Category tags: "Fashion", "Jacket", "Woman", "Male" etc.

**Blog:**
- 3-column grid of article cards
- Each: background image, title link, excerpt, author name, date, comment count
- Blog images use background-image style

**Instagram:**
- Dark background (#252525)
- Instagram icon + heading centered
- 8 square thumbnails in horizontal row

**Footer:**
- White background, 4-column layout
- Col 1: About text + social icons (Twitter, Facebook, LinkedIn, Dribbble)
- Col 2: Information links with check icons
- Col 3: Recent blog entries with thumbnails
- Col 4: Contact info (address, phone, email, website)
- Dark copy bar at bottom with copyright + Component Dock link

### Placeholder Images
- Hero: `https://picsum.photos/seed/imastudio-hero/1920/800`
- About: `https://picsum.photos/seed/imastudio-about/960/600`
- Gallery items: `https://picsum.photos/seed/imastudio-gal-1/400/400` through `-8`
- Blog items: `https://picsum.photos/seed/imastudio-blog-1/400/300` through `-3`
- Instagram items: `https://picsum.photos/seed/imastudio-insta-1/200/200` through `-8`
