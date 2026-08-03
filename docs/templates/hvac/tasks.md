# Hvac (Colorlib HVAC) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-hvac`.

## Design notes

- **Original:** ColorLib "HVAC" — free car dealership website template
  (source: https://colorlib.com/wp/template/hvac/). The ColorLib name is
  "HVAC" but the design is a car rental/sales landing page.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hvac/`
  (HTTP 200, 52.1KB) + stylesheet `css/style.css` (58KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (logo + nav + Add Car) → hero (photo
  bg, "FIND YOUR DREAM CAR" / "Porsche Cayenne S", Model 2019, $399/Month,
  Test Drive + Learn More; tabbed Car Rental/Buy Car search form) → services
  ("What We Offers", 4 cards: Rental A Cars, Buying A Cars, Car Maintenance,
  Support 24/7) → feature ("We Are a Trusted Name In Auto" + About Us / Our
  Partners + icon grid) → car offers ("Best Vehicle Offers" with Most
  Researched/Latest on sale filters + car cards) → chooseus ("Why People
  Choose Us" checklist + video) → latest blog ("Latest News Updates", 3
  posts) → dark footer ("Contact Us Now!" + phone/email + about + social).
- **Design tokens:** brand red **#db2d2e** (primary buttons/accents); dark
  **#353535**/**#323232** headings, **#727171**/**#8d8d8d** body; white;
  font **Lato** via Google Fonts; solid red uppercase `primary-btn`; photo
  backdrops for hero and footer.
- **Recreation name:** Hvac. App folder `apps/hvac`, package
  `@free-react-templates/hvac`.
- **Design approach:** light theme with red accents; hero = seeded picsum
  photo + featured car + price + two CTAs; search form client-side with zod
  (year/brand selects); services/features with lucide icons; offer cards with
  seeded photos; choose-us checklist with check icons; blog cards with meta
  lines; all images picsum-seeded (`picsum.photos/seed/hvac-N/w/h`); Google
  Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-hvac/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hvac` (copy `apps/aurora`; rename package to
      `@free-react-templates/hvac`).
- [ ] TDD: tests first for Navbar, Hero, SearchForm, Services, Offers,
      ChooseUs, BlogSection, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
