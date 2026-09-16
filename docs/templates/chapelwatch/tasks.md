# ChapelWatch — Prep Notes

## Source
- ColorLib slug: `advent`
- Preview: https://preview.colorlib.com/theme/advent/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg

## Section Order (from DOM)
1. **Navbar** — transparent, absolute-positioned over hero. Brand + 5 links (Ministries has dropdown with 5 items). Black bg on mobile only.
2. **Hero Slider** — 2-slide owl-carousel. Full-viewport (min 700px). Background images with dark overlay (rgba(0,0,0,0.2)). White serif heading + body + outline CTA button. Dot navigation at bottom.
3. **Upcoming Events Highlight** — Dark bg. Left: gold label badge + event title + meta. Right: 5-column countdown in gold blocks (Weeks/Days/Hours/Min/Sec).
4. **Worship Time** — White bg. 50/50 split: text left (heading + 3-item schedule list with borders), image right. Bottom border on section.
5. **Recent Sermons** — Light bg. Gold label + heading centered. 3-column grid of sermon cards (black bg, white text, audio player per card).
6. **Ministries** — Light bg. Gold label + heading centered. 3-column grid. Each item: thumbnail (120px) + title + date + category + description.
7. **Footer** — Dark bg (#262626), top border. 3 columns: About + social icons, Quick Links, Contact Info. Copyright line at bottom.

## Design Tokens (extracted from style.css)
- `--brand`: #ffc107 (amber/gold)
- `--brand-hover`: #ffce3a
- `--bg-body`: #262626
- `--bg-black`: #000 (sermons)
- `--bg-white`: #fff (worship section)
- `--text-body`: #b3b3b3
- `--text-heading`: #fff
- `--border-dark`: #2e2e2e
- `--border-light`: #e0e0e0
- Font body: "Open Sans", 15px, 400, 1.8
- Font heading: "Playfair Display", serif
- Buttons: radius 0, border 2px, 13px uppercase, letter-spacing .2em
- Section padding: 7em 0
- Slider: calc(100vh - 217px), min 700px
- Dropdown: shadow 0 2px 30px rgba(0,0,0,0.2), hover bg #ffc107
- Footer social: 50% radius, border rgba(255,255,255,0.1)

## Fidelity Notes
- The original uses Bootstrap grid + Owl Carousel. Our React version should use Tailwind grid + a lightweight carousel (e.g. embla-carousel or a simple custom implementation).
- Audio players in sermon cards: use native HTML5 `<audio>` or a React wrapper; keep it minimal.
- The countdown is jQuery-based in the original. Replace with a React countdown component (e.g. react-countdown or custom hook).
- The "element-animate" class triggers scroll-triggered fade-in. Implement with Intersection Observer.
- Loader (spinner) is a pre-render overlay. Optional — can implement with a Suspense fallback.

## Implementation Tasks
1. Scaffold `apps/chapelwatch/` from simplest existing app template
2. Rename package to `@free-react-templates/chapelwatch`
3. Set up `index.css` with Tailwind @theme tokens (brand, bg, text, font families)
4. Build `Navbar.tsx` — transparent, mobile collapsible, dropdown for Ministries
5. Build `HeroSlider.tsx` — 2 slides with background images, dark overlay, carousel navigation
6. Build `UpcomingEvents.tsx` — event details + countdown component
7. Build `WorshipTime.tsx` — split layout, schedule list
8. Build `RecentSermons.tsx` — 3-column cards with audio players
9. Build `Ministries.tsx` — 3-column grid with thumbnails + metadata
10. Build `Footer.tsx` — 3-column, social icons, Component Dock link
11. Compose all in `App.tsx`
12. Write tests (Vitest + RTL) for each component
13. Verify 100% coverage, typecheck, lint, build
