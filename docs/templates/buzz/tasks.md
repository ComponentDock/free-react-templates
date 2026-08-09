# Buzz (Colorlib Buzz) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-buzz`.

## Design notes

- **Original:** ColorLib "Br" — free barber shop website template
  (source: https://colorlib.com/wp/template/br/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/br/`
  (HTTP 200, 48.5KB) + stylesheet `css/style.css` (142.1KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Barber logo + home/service/blog/pages/
  about/elements/Contact + Appointment btn) → hero slider (900px photos,
  "Modern barber shop in center of the city" + Appointment) → about ("About
  Us" + blurb + Opening Hour 10:00 am - 10:00 pm) → services ("Our Services":
  Smooth Shave, Beard Triming, Haircut Styles) → pricing ("Our Pricing" +
  tabs + Hair Cut $8 / Hair Style $8 / Shaving $8) → team ("Barber": Jhon
  Smith, Jems Smith, Thomas J Watson — Junior Barber) → testimonials (photo
  band, "Watson, web developer") → make an appointment ("Make an
  Appointment" + booking form: Choose services / Choose Barbers / Submit) →
  footer (#0d0e0f: address, contacts, working hours, links, social).
- **Design tokens:** brand orange-red **#eb592d**; warm light section bg
  **#fdf9f6**; footer **#0d0e0f**; headings **Yeseva One** (display) + body
  **Lato** (sans-serif) via Google Fonts; `boxed-btn` style (white bg, 1px
  solid #EB592D border, uppercase, letter-spacing 3px); hero slides 900px
  tall cover backgrounds.
- **Recreation name:** Buzz. App folder `apps/buzz`, package
  `@free-react-templates/buzz`.
- **Design approach:** light theme with orange accents; hero = seeded picsum
  photo + headline; about split with opening hours; services with lucide
  icons; pricing with tabbed category headers and price rows; team cards with
  initials avatars; appointment section with booking form; testimonial with
  initials avatar; all images picsum-seeded (`picsum.photos/seed/buzz-N/w/h`);
  Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-buzz/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/buzz` (copy `apps/aurora`; rename package to
      `@free-react-templates/buzz`).
- [ ] TDD: tests first for Navbar, Hero, About, Services, Pricing, Team,
      Testimonials, Appointment, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
