# Barber (Colorlib Barber) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-barber`.

## Design notes

- **Original:** ColorLib "Barber" — free barber shop website template
  (source: https://colorlib.com/wp/template/barber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barber/`
  (HTTP 200, 32.3KB) + stylesheet `css/main.css` (34.9KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (gradient, logo + Home/Service/Team/
  Price/Contact/Pages) → banner (gradient bg, "HairStyle is a Must try
  Fashion for all Occasion" + View More Changes) → services ("What We Can Do
  for You", 4 rows: Beard Trimming, Quality Gel Shave, Effective Body
  Massage, Stylish Hair Cutting) → gallery (photo strip, "Upper Cutting"
  captions) → features ("Some Features that Made us Unique", 6 cards) →
  about ("We Believe that Interior beautifies…" + See Details + video) →
  team ("Experienced Mentor Team", 4 members) → price ("Choose the Perfect
  Plan", Standard £199 / Business £399 / Ultimate £499 + Purchase Plan) →
  contact ("If you need, Just drop us a line", 4 info columns + form) →
  footer (About Us + Newsletter + Follow Us).
- **Design tokens:** brand pink→purple gradient **#f61daf → #691cff**
  (header, banner, primary buttons, hover); headings **#222222**, body
  **#777777** on light **#f9f9ff**; font **Poppins** via Google Fonts; pill
  buttons (radius 25px) with gradient + arrow.
- **Recreation name:** Barber. App folder `apps/barber`, package
  `@free-react-templates/barber`.
- **Design approach:** light theme with gradient accents (defined in `@theme`
  as `--color-brand` with a gradient utility); banner = headline + seeded
  picsum photo + gradient CTA; services/features with lucide icons; gallery
  photo strip; team initials avatars; pricing with gradient hover; contact
  form client-side with zod; newsletter input in footer; all images
  picsum-seeded (`picsum.photos/seed/barber-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-barber/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/barber` (copy `apps/aurora`; rename package to
      `@free-react-templates/barber`).
- [ ] TDD: tests first for Navbar, Banner, Services, Features, Team, Pricing,
      ContactForm, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
