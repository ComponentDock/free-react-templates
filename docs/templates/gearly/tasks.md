# Gearly (Colorlib Dreams) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-gearly`.

## Design notes

- **Original:** ColorLib "Dreams" — free driving school website template
  (source: https://colorlib.com/wp/template/dreams/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/dreams/`
  (HTTP 200, 42.9KB) + stylesheet `css/style.css` (43KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (logo + nav) → hero (photo bg, "Best
  options for you" / "drive safe & get license", Contact us + See Courses) →
  feature ("Why choose us?" / "Our feature", 3 items: Unlimited Car Support,
  Driving School Insures, Any Time Any Location) → about-video ("looking for
  lessons?" + Learn more) → application form (name/email/phone/date/course
  type/car type + SEND INQUIRY) → pricing ("Our Pricing", 3 cards $199/$379/
  $259 with 20% off ribbon) → team ("Our Instructors", DAVID WARNER cards) →
  dark footer (COMPANY · Courses · USEFUL LINKS · About + copyright).
- **Design tokens:** brand gold **#f3bd00** (primary buttons/accents) + dark
  navy **#0c2b4b** (footer/secondary buttons); text **#111111**/**#444444**
  on white; font **Open Sans** via Google Fonts; uppercase solid buttons
  (gold `primary-btn` and navy `second-bg`); photo backdrops for hero and
  pricing.
- **Recreation name:** Gearly. App folder `apps/gearly`, package
  `@free-react-templates/gearly`.
- **Design approach:** light theme with gold/navy accents; hero = seeded
  picsum photo + overline + headline + two CTAs; feature items use lucide
  icons; inquiry form client-side with zod; pricing cards with gold ribbon
  and bullet lists; instructor cards with initials avatars; all images
  picsum-seeded (`picsum.photos/seed/gearly-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-gearly/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/gearly` (copy `apps/aurora`; rename package to
      `@free-react-templates/gearly`).
- [ ] TDD: tests first for Navbar, Hero, Features, About, ApplicationForm,
      Pricing, Team, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
