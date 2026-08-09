# Shear (ColorLib Barberz) — Tasks & Design Notes

> Recreated as **Shear** (new original name; the ColorLib source is "Barberz").
> Prep artifacts were prepared on `main` by the prep stream; implementation
> ships on `feat/template-shear` (spec folder `template-barberz` was renamed to
> `template-shear` when the new name was chosen).

## Design notes

- **Original:** ColorLib "Barberz" — free barber shop website template
  (source: https://colorlib.com/wp/template/barberz/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barberz/`
  (HTTP 200, 23.4KB) + stylesheet `css/style.css` (25KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Barberz + Home/Services/Barber
  Shop/About/Blog/Contact) → hero (photo bg, "More Than Just A Haircut" +
  Learn More) → welcome split ("Welcome To Barberz!" + 3-years badge) →
  services & pricing (3 cards: Haircut, Hair Styling, Hair Scalp Care with
  priced rows) → more hair styles (3 photo cards: Beard Shaving, Crew Cut,
  Beard Trim, $50.00 only) → more services (photo bg, 6 icon cards) →
  testimonials ("Our Top Client Says", Mike Fisher/Jean Stanley/Katie Rose)
  → blog ("Our Blog", 3 posts) → CTA band ("Quality Haircut" + Contact Us
  Now) → light footer (About Us + Quick Links + Newsletter).
- **Design tokens:** brand red **#dc3545** (primary buttons, accents); dark
  gray text on white/light `#f8f9fa`; font **DM Sans** via Google Fonts;
  solid red `btn-primary`; photo bands for hero/More Services/CTA.
- **Recreation name:** Shear. App folder `apps/shear`, package
  `@free-react-templates/shear`.
- **Design approach:** light theme with red accents; hero = seeded picsum
  photo + headline; welcome split with badge; pricing cards with price rows;
  style cards with seeded photos and price tags; services with lucide icons;
  testimonials with initials avatars; newsletter input in footer; all images
  picsum-seeded (`picsum.photos/seed/shear-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-shear/spec.md` (Gherkin requirements +
      scenarios + replication findings) — renamed from `template-barberz` when
      the new name was chosen.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/shear` (copy `apps/aurora`; rename package to
      `@free-react-templates/shear`).
- [ ] TDD: tests first for Navbar, Hero, Welcome, Pricing, HairStyles,
      Testimonials, BlogSection, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh shear` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
