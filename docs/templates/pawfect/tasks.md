# Pawfect (Anipat) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-pawfect`.

## Design notes

- **Original:** ColorLib "Anipat" — free pet-care website template
  (source: https://colorlib.com/wp/template/anipat/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/anipat/`
  (HTTP 200) + `css/style.css`.
- **Structure observed (1:1):** top info bar (phone `+880 4664 216`, hours
  `Mon - Sat 10:00 - 7:00`, email `Demomail@gmail.Com`) → navbar (logo,
  links, phone CTA, "Contact Us") → hero slider ("We Care Your Pets",
  accent on "Your Pets", "Contact Us" boxed button) → services ("Services
  for every dog": Pet Boarding, Healthy Meals, Pet Spa cards) → about
  (`adapt_about`, image + copy + "About Us" button) → team ("Our Team":
  Rala Emaia, jhon Smith, ...) → testimonials (Jhon Walker quotes) +
  counters (452) → contact CTA band (`contact_anipat anipat_bg_1`: "Why go
  with Anipat?" + "Contact Us") → footer (logo, social, 4 widget columns:
  Pet Care links, About links, contact info).
- **Design tokens:** brand orange **#eb592d**/**#ff3500** (CTAs), light
  purple **#f0e9ff** + **#f9f9ff** (section backgrounds), indigo **#415094**
  (headings), teal **#4cd3e3** + yellow **#f4e700** accents, text **#222222**,
  muted **#999999**; fonts **Poppins** + **Open Sans** via Google Fonts;
  filled rounded buttons.
- **Recreation name:** Pawfect (pet-care friendly). App folder
  `apps/pawfect`, package `@free-react-templates/pawfect`.
- **Design approach:** full multi-section landing page; `@theme` tokens for
  the brand palette; seeded picsum placeholders for hero/team/about imagery;
  lucide-react icons; repo-standard Navbar (dark-mode toggle) + Footer;
  social icons (GitHub, X, LinkedIn) inline SVG; reuse packages/ui (Button,
  ButtonLink, Card, Badge, cn).
- Base implementation on `apps/aurora` (multi-section landing app with
  Navbar/Hero/Features/Gallery/Newsletter/Footer structure) — adapt sections
  to the Anipat structure above.

## Tasks

- [ ] Write `openspec/specs/template-pawfect/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/pawfect` (copy `apps/aurora`; rename package to
      `@free-react-templates/pawfect`).
- [ ] TDD: tests first for TopBar, Navbar, Hero, Services, About, Team,
      Testimonials, ContactCta, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
