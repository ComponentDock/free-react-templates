# Pretty (Colorlib Pretty) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-pretty`.

## Design notes

- **Original:** ColorLib "Pretty" — free beauty salon website template
  (source: https://colorlib.com/wp/template/pretty/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/pretty/`
  (HTTP 200, 33.8KB) + stylesheet `css/style.css` (65.3KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Pretty + Home/About/Services/Work/
  Blog/Contact) → hero slider (Beauty Salon / Skin & Beauty Care / Makeup
  Pro / Hair Style) → about ("Skin & Beauty Care" + copy) → team (bg-light,
  "Our Beauty Experts": Mellisa Smith, Marie Mush, Ana Jacobson, Ivan
  Dorchsner) → discount band ("Save up to 25% Off", Student Discount) →
  work ("Our Work": Lips Makeover, Hair Style, Makeup) → pricing (bg-light,
  "Beauty Pricing": Basic, Standard, Premium, Platinum) → counter band →
  blog ("Recent from blog": "Skin Care for Teen Skin") → appointment form →
  footer (About Us + Recent Blog + Address/Phone/Opening Hours/Appointments
  - "Spa Center" + "Have a Questions?" + social).
- **Design tokens:** brand hot pink **#fa5bdd** + sky blue **#78d5ef**;
  light bgs `#f8f9fa`/white; headings **Montserrat** + body **Work Sans**
  via Google Fonts; pink filled rounded uppercase buttons.
- **Recreation name:** Pretty. App folder `apps/pretty`, package
  `@free-react-templates/pretty`.
- **Design approach:** light theme with pink accents; hero = seeded picsum
  photo + headline; about split; team cards with initials avatars; discount
  band; portfolio tiles with seeded photos; pricing tiers; counter stats;
  blog cards with seeded photos; appointment form; footer with
  contact/hours + social links; all images picsum-seeded
  (`picsum.photos/seed/pretty-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-pretty/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/pretty` (copy `apps/aurora`; rename package to
      `@free-react-templates/pretty`).
- [ ] TDD: tests first for Navbar, Hero, About, Team, Work, Pricing,
      Blog, Appointment, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
