# Travelogue (ColorLib Travel Wordpress Themes) — Tasks & Design Notes

## Design notes

- **Original:** ColorLib "Travel Wordpress Themes" — free travel agency
  website template (source: https://colorlib.com/wp/template/travel-wordpress-themes/).
- **Live preview DOM:** https://preview.colorlib.com/theme/travel-wordpress-themes/
  returned HTTP 404 — preview unreachable. Fallback to TEMPLATES.md screenshot
  (`travel-wordpress-themes.jpg`) as sole reference.
- **Structure observed (from screenshot):** transparent navbar (logo "The Valley"
  + nav links Home/Destination/Regions/Shop/Blog + phone + search) → full-viewport
  hero (aerial ocean photo with boats, white heading "Travel WordPress Themes",
  dark CTA button "Let's go now", left/right slider arrows). Remaining sections
  not visible in screenshot — inferred as: destinations, features, popular trips,
  testimonials, newsletter, footer.
- **Design tokens (estimated from screenshot):**
  - Brand color: **#00b4d8** (turquoise/teal from ocean imagery)
  - Hero overlay: semi-transparent dark (rgba(0,0,0,0.3)–rgba(0,0,0,0.5))
  - Text: **#ffffff** (white) on hero, **#333333** (dark) on light sections
  - Button: dark semi-transparent background, white text, rounded (~4px)
  - Font: serif/display for hero heading; sans-serif for body/nav
  - Navbar: transparent background, white text
  - Overall: light/airy with ocean-teal accents
- **Recreation name:** Travelogue (branch `feat/template-travelogue`). App
  folder `apps/travelogue`, package `@free-react-templates/travelogue`.
- **Design approach:** teal/turquoise accent theme; hero = seeded picsum aerial
  photo + overlay + heading + CTA + slider arrows; destinations card grid;
  features with lucide icons; popular trips with pricing cards; testimonials;
  newsletter signup; footer with Component Dock link; all images picsum-seeded
  (`picsum.photos/seed/travelogue-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) — do NOT duplicate components.
- Base implementation on `apps/voyage` (existing travel template) — closest
  existing travel app; adapt sections to Travel Wordpress Themes' structure
  and tokens.

## Tasks

- [x] Write `openspec/specs/template-travelogue/spec.md` (Gherkin
      requirements + scenarios + replication findings).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/travelogue` (copy `apps/voyage`; rename package to
      `@free-react-templates/travelogue`).
- [ ] TDD: tests first for Navbar, Hero, Destinations, Features, Trips,
      Testimonials, Newsletter, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh travelogue` (typecheck → lint →
      100% coverage tests → build).
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D; line 1495).
- [ ] Update README structure + `docs/ai-context.md` app list.
