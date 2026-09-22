# AzurePeak (ColorLib The Grand Azure) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the PREP stream.
> Implementation ships later by an implementer stream.

## Design notes

- **Original:** ColorLib "The Grand Azure" — free luxury hotel template
  (source: https://colorlib.com/wp/template/the-grand-azure/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/grandazure/`
  (HTTP 200) + stylesheet `_astro/Base.CVaHg8hR.css`. The preview slug is
  `grandazure`. Screenshot at
  `https://colorlib.com/wp/wp-content/uploads/sites/2/grandazure-template-1771943856380.jpg`
  confirms the visual design.
- **Design tokens:**
  - Primary: **#1e40af** (blue-800) — buttons, stat numbers, focus rings
  - Primary dark: **#1e3a8a** (blue-900) — gradient endpoint
  - Primary light: **#60a5fa** (blue-400) — gradient start, dark accents
  - Accent: **#f59e0b** (amber-500) — price badges, decorative accents, stars
  - Accent hover: **#fbbf24** (amber-400) — borders, hover states
  - Heading font: **Playfair Display** (serif) via Google Fonts
  - Body font: **Plus Jakarta Sans** (sans-serif) via Google Fonts
  - Card radius: rounded-2xl; Button radius: rounded-lg; Badge: rounded-full
  - Shadows: shadow-lg → shadow-xl on hover
  - Section bg pattern: white / gray-50 / gray-950 (dark)
  - CTA gradient: primary-700 → primary-900
  - Booking form: glass morphism (bg-primary-900/60, backdrop-blur-md)

- **Structure (1:1 section order):**
  1. Navbar — sticky, backdrop-blur, logo + nav links + CTA + hamburger
  2. Hero — full-viewport, ocean bg, gradient overlay, heading, booking form
  3. Stats Bar — 4 metrics (5+ years, 10000+ guests, 150+ rooms, 25+ awards)
  4. Rooms & Suites — 3 cards (Deluxe Ocean, Premium Suite, Presidential Villa)
  5. Amenities — 6 cards in 3×2 grid (Pool, Spa, Dining, Fitness, Beach, Concierge)
  6. Dining — 3 venue cards (The Azure, Coral Bar, Sunrise Cafe)
  7. Gallery — image grid with placeholder URLs
  8. Testimonials — 3 cards with star ratings + quotes
  9. FAQ — accordion with toggle
  10. CTA — gradient bg, "Make Your Stay Extraordinary", email signup
  11. Footer — dark bg, 4 columns, social icons, Component Dock link

- **Recreation name:** AzurePeak (evokes the azure blue + peak luxury).
  App folder `apps/azurepeak`, package `@free-react-templates/azurepeak`.
- **Recreation decisions:**
  - Replace original hotel images with picsum.photos placeholders
  - Use Google Fonts (Playfair Display + Plus Jakarta Sans) via `<link>` in index.html
  - Lucide React icons for amenity/guest/bed icons
  - Full dark mode support via Tailwind dark: variants + localStorage
  - Navbar: site name + nav links + "Book Now" CTA + dark-mode toggle + hamburger
  - Footer: Component Dock link replaces any external attribution
  - No ColorLib references in app code
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation suggestion: start from a hotel or resort template if one
  exists, otherwise from a clean app scaffold.

## Tasks

- [x] Write `openspec/specs/template-azurepeak/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Write tests (Vitest + Testing Library) for all components
- [ ] Implement `apps/azurepeak/` — Navbar, Hero (with BookingForm), StatsBar,
      Rooms (3 cards), Amenities (6 cards), Dining (3 cards), Gallery,
      Testimonials (3 cards), FAQ (accordion), CTA, Footer
- [ ] Add Google Fonts (Playfair Display + Plus Jakarta Sans) to index.html
- [ ] Configure Tailwind with primary/accent color tokens in index.css @theme
- [ ] Ensure 100% test coverage (Vitest + Testing Library)
- [ ] Verify: `scripts/verify-app.sh azurepeak` passes
- [ ] Commit as `feat: add AzurePeak (The Grand Azure) template` on
      `feat/template-azurepeak` branch, open PR, squash merge
- [ ] Deploy via Surge: `azurepeak.free.componentdock.com`
- [ ] Update TEMPLATES.md: mark `[x]` for The Grand Azure
