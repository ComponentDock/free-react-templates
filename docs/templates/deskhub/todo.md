# DeskHub — Implementation Design Notes

**Source**: ColorLib Sharespace (https://colorlib.com/wp/template/sharespace/)
**Preview**: https://preview.colorlib.com/theme/sharespace/
**New name**: deskhub

## Design Notes

- Primary brand: warm gold/tan `#c6a16e` — very distinctive, not a typical tech blue
- Font pairing: Josefin Sans (geometric, clean) + Great Vibes (decorative cursive accent)
- Sharp corners throughout (border-radius: 0 for containers), only buttons get 5px radius
- Two section bg variants: lavender `#fbf9ff` (theme-bg1 for testimonials), pale `#f9f9ff` (section-bg2 for video)
- Hero is a full-width image slider with overlay text, not a split hero
- Spaces cards: 4-column grid, each card has image + title + price + location button
- Video section: centered play icon on a dark overlay, opens popup modal
- Blog: 3 cards with category badge, title, date, author, excerpt
- Newsletter: simple email + subscribe button, no complex form

## Implementation TODO

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/deskhub`
- [ ] Set up `public/CNAME` as `deskhub.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add `injectUiSource()` to vite.config.ts
- [ ] Run `npm install` at repo root

### Phase 2: Structure & Tokens
- [ ] Set up `index.css` with `@theme` tokens:
  - `--color-brand: #c6a16e`
  - `--color-text-dark: #222222`
  - `--color-bg-testimonial: #fbf9ff`
  - `--color-bg-video: #f9f9ff`
  - `--color-bg-blog: #f7f7f7`
  - Font: Josefin Sans (Google Fonts), Great Vibes (decorative)
- [ ] Import Google Fonts in `index.html`

### Phase 3: Components (in order)

1. **Navbar** — sticky header, logo text "DeskHub", nav links, mobile hamburger
   - Reuse `packages/ui` Button for mobile toggle if available
   - Nav items: Home, Spaces, About, Blog, Contact
   - Smooth scroll to sections via href="#section-id"

2. **Hero** — full-width slider
   - 2 slides with auto-transition (3-5s interval)
   - Heading: "Amazing workspace you will love"
   - Subtext: "Discover our spaces that defines a new dimension of luxury."
   - CTA button "Explore Our Spaces" (gold, uppercase)
   - Rating badge: star icon + "4.8" + "Rating based on 500+ reviews"
   - Background images: `https://picsum.photos/seed/deskhub-hero-1/1920/800`

3. **About** — two-column layout
   - Left: heading "Premium quality spaces for agency and personal", paragraph text, "Learn More" link
   - Right: image `https://picsum.photos/seed/deskhub-about/600/400` with rating overlay
   - Responsive: stacks on mobile

4. **Spaces** — 4-card grid
   - Section heading: "Spaces that you'd love"
   - Subtext paragraph
   - 4 cards: image + title + "$500" price + "location-btn"
   - Images: `https://picsum.photos/seed/deskhub-space-{1..4}/400/300`
   - "Explore More Spaces" CTA below cards

5. **Features** — 4 icon items
   - Heading: "Make the customer the hero of your story"
   - 4 items: icon (lucide-react) + title + description
   - Items: Money saver, A locker and key, Active Listening, Space for events
   - 2x2 grid on desktop, 1-column on mobile

6. **Video** — centered play button
   - Full-width section with dark overlay background
   - Centered play icon (lucide-react `Play` or `PlayCircle`)
   - On click: show a modal with an embedded YouTube placeholder or autoplay video

7. **Blog** — 3 post cards
   - Heading: "Company Insights"
   - 3 cards: image + category badge + title + date + excerpt
   - Images: `https://picsum.photos/seed/deskhub-blog-{1..3}/400/300`

8. **Newsletter** — email subscription
   - Heading: "Subscribe our newsletter to get updates"
   - Email input + subscribe button
   - On submit: show confirmation message (no real backend)

9. **Footer** — dark background
   - Logo + nav links (Home, Spaces, About, Blog, Contact)
   - Copyright text
   - "Made with Component Dock" link to https://www.componentdock.com/

### Phase 4: Testing
- [ ] Write tests for each component (vitest + testing library)
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Verify responsive behavior (not strictly testable, but check CSS)

### Phase 5: Polish
- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Update README if needed
