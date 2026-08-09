# Drively (ColorLib Carrent) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-drively`.

## Design notes

- **Original:** ColorLib "Carrent" — free car rental website template
  (source: https://colorlib.com/wp/template/carrent/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/carrent/`
  (HTTP 200, 23.7KB) + stylesheet `css/style.css` (23KB). Full rendered DOM
  extracted; structure below is reconstructed from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (CarRent logo + Home/Services/Cars/
  About/Blog/Contact) → full-screen photo hero with white featured-car card
  (blue top bar, "Range Rover S7", specs list, `$150/day` + "Rent Now") →
  light-gray trip form ("Begin your trip here", 32 cars available, 4 fields:
  from/to/journey/return + Submit) → "Our Offer" (prev/next + car cards with
  photo, name, 5-star rating, `$250/day`, specs, "Rent Now") → "Our services"
  photo strip (Repair · Car Accessories · Own a Car) → "How it works" (5 steps
  01–05: Time & Place, Car, Details, Checkout, Done) → "Customer Testimony" (3
  quotes: Mike Fisher, Jean Stanley, Katie Rose) → "Our Blog" (3 posts) → dark
  footer (About Us + 3× Quick Links + copyright).
- **Design tokens:** brand blue **#007bff** (active nav, hover, card top bar,
  all primary buttons); font **DM Sans** via Google Fonts; white cards on
  light-gray `#f8f9fa` section backgrounds; photo hero + services strip with
  dark overlay; solid blue pill buttons with white text.
- **Recreation name:** Drively. App folder `apps/drively`, package
  `@free-react-templates/drively`.
- **Design approach:** light theme with blue accents; hero = seeded picsum
  photo + dark overlay + white spec card (blue top accent); trip form
  client-side (no reload) with zod types; car cards use lucide icons for
  specs; testimonials use initials avatars; all images picsum-seeded
  (`picsum.photos/seed/carrent-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-drively/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/drively` (copy `apps/aurora`; rename package to
      `@free-react-templates/drively`).
- [ ] TDD: tests first for Navbar, Hero (featured car card), TripForm,
      OfferSection, Services, HowItWorks, Testimonials, BlogSection, Footer,
      App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
