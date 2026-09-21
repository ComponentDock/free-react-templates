# Bodhi (ColorLib DoYoga) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bodhi`. Recreation name: **Bodhi** (NEW name —
> the ColorLib source keeps its name "DoYoga").

## Source mapping

- **ColorLib item:** "Doyoga" (TEMPLATES.md line 1840).
- **Source URL:** https://colorlib.com/wp/template/doyoga/
- **Preview URL — REACHABLE (verified 2026-09-23 by direct fetch):**
  **https://preview.colorlib.com/theme/doyoga/**
  (HTTP 200, full HTML returned with all sections visible).
- **Preview CSS:** `css/style.css` (hand-written styles over Bootstrap 4).
  Fonts: Quicksand 400/500/700 via Cloudflare font-face. Scripts: jQuery,
  Owl Carousel, AOS, Fancybox, Magnific Popup — all replaced by React.

## Reference research (done — do not redo)

### Preview DOM structure (fetched 2026-09-23)

The page has 9 major sections in order:
1. **Navbar** — `.site-navbar-wrap` with top bar (contact + social) and main
   nav. Logo "DoYoga" in h1. Links: Home, Classes, Pages (dropdown), About,
   Events, Gallery, Contact. Sticky via `.js-sticky-header`.
2. **Hero** — `.site-blocks-cover.overlay` with background-image
   `images/doyoga_hero_1.jpg`, dark overlay. Centered content: h1 "A Yoga
   Studio", subtitle, video play button with Fancybox link to Vimeo.
3. **Featured Classes** — `.owl-carousel.centernonloop` with 4 `.item-class`
   cards. Each: image + `.class-price` + `.class-heading`. Previous/Next
   buttons.
4. **Schedule** — 2-column `.container-fluid` grid. 4 `.sched` blocks, each
   with `.bg-image` (cover photo) and `.text` (h3, description, time, join
   button). Alternating image/text order.
5. **About Us** — 2-col: `.heading-wrap` text on left, two `.img-overlap`
   images on right (CSS overlap effect).
6. **Events** — 2-col `.blog` cards. Each: `.bg-image` + `.text` (h3, date,
   excerpt, "Read More" button).
7. **Gallery** — `.filters` button group (All/Classes/Intern/Training) +
   `.row#posts` masonry grid with `.item` cards (`.fancybox` links, search
   icon overlay on hover). 12 items, 3 columns.
8. **Contact** — Form (name, phone, email, message, send) + contact details
   (address, phone, email with ionicons).
9. **Footer** — `.site-footer` dark bg. 3-col: About, Quick Links (2-col
   list), Newsletter + Follow Us social. Copyright bottom.

### Design tokens from CSS

| Token | Value | Source |
|-------|-------|--------|
| Font family | Quicksand, weights 400/500/700 | `@font-face` in `<style>` |
| Body text color | `gray` (#808080) | `body { color: gray }` |
| Heading color | `#000` | `h1-h6 { color: #000 }` |
| Primary button bg | Bootstrap default (indigo `#6610f2` focus ring) | `.form-control:focus { border-color: #6610f2 }` |
| Primary button text | `#fff` | `.btn.btn-primary { color: #fff }` |
| Button hover | Transparent bg, black text | `.btn.btn-primary:hover { color: #000; background-color: transparent }` |
| Button border | 2px | `.btn { border-width: 2px }` |
| Footer bg | `#333333` | `.site-footer { background: #333333 }` |
| Footer text | `#8c8c8c` | `.site-footer p { color: #8c8c8c }` |
| Footer headings | `#fff` | `.site-footer h2-h5 { color: #fff }` |
| Footer links | `#b3b3b3` → white hover | `.site-footer a { color: #b3b3b3 }` |
| Dropdown bg | `#fff`, radius 4px | `.dropdown { background: #fff; border-radius: 4px }` |
| Section padding | 4.5em mobile / 7em desktop | `.site-section { padding: 4.5em 0 }` |
| Hero overlay | `rgba(0,0,0,0.4)` | `.bg-image.overlay:before { background: rgba(0,0,0,0.4) }` |

### Screenshot visual notes

The TEMPLATES.md screenshot (`doyoga-free-template.jpg`) shows:
- Dark/moody hero with a woman in yoga pose, centered white text
- Light gray section backgrounds alternating with white
- Class cards with image backgrounds and white text overlays
- Schedule items with alternating image/text layout
- Dark footer at bottom

## Implementation tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as template base
- [ ] Rename package to `@free-react-templates/bodhi`
- [ ] Update `package.json`, `vite.config.ts`, `public/CNAME`
- [ ] Set up `src/index.css` with Quicksand font + Tailwind theme tokens
- [ ] Create `src/App.tsx` composing all section components

### Phase 2: Components (TDD — write test first)
- [ ] `Navbar.tsx` — transparent overlay, sticky, hamburger on mobile
- [ ] `Hero.tsx` — full-width bg image, dark overlay, heading + video CTA
- [ ] `FeaturedClasses.tsx` — carousel of class cards with price + name
- [ ] `Schedule.tsx` — 2-col grid, alternating image/text layout
- [ ] `About.tsx` — text left + overlapping images right
- [ ] `Events.tsx` — blog-style cards with image + meta + excerpt
- [ ] `Gallery.tsx` — filter buttons + masonry image grid + hover overlay
- [ ] `Contact.tsx` — form + contact details with icons
- [ ] `Footer.tsx` — 3-col dark footer with Component Dock link

### Phase 3: Polish
- [ ] Responsive breakpoints (hamburger nav, stacked grids)
- [ ] Smooth scroll for anchor links
- [ ] Gallery filter functionality (show/hide by category)
- [ ] All placeholder images via picsum.photos with deterministic seeds
- [ ] Verify 100% test coverage
- [ ] Run `scripts/verify-app.sh bodhi`
