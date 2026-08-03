# Barbero (Colorlib Barbero) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-barbero`.

## Design notes

- **Original:** ColorLib "Barbero" — free barber shop website template
  (source: https://colorlib.com/wp/template/barbero/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barbero/`
  (HTTP 200, 50KB) + stylesheet `css/style.css` (90KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Barbero + Home/About/Services/
  Gallery/Blog/Contact) → hero (photo bg, "Welcome to Barbero" / "We Will
  Make Your Style of Your Dreams" + Learn More About Us) → services (4 photo
  cards: Hair Styles, Beard Trim, Hot Shave, Hair Shampoo) → about ("A
  Smooth Barber Experience In Your Town") → counter band (Places/Events/
  Photos/Speakers) → team ("Our Expert Team") → video band ("Watch Our Video
  Popular Hair Style") → gallery ("Photos of Our Events", photo grid) →
  testimonials ("People Say About Our Barber") → appointment ("Make An
  Appointment" form) → blog row → dark footer (logo + social + Explore/Info
  links).
- **Design tokens:** brand gold **#bf925b** on dark **#090601**; fonts
  **Barlow Condensed** (display) + **Poppins** (body) via Google Fonts; gold
  `btn-custom` links; photo bands with dark overlays mixed with light
  sections.
- **Recreation name:** Barbero. App folder `apps/barbero`, package
  `@free-react-templates/barbero`.
- **Design approach:** dark theme with gold accents (defined in `@theme`);
  hero = seeded picsum photo + headline with gold spans; services/gallery/
  blog cards with seeded photos; counters static; appointment form
  client-side with zod; all images picsum-seeded
  (`picsum.photos/seed/barbero-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-barbero/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/barbero` (copy `apps/aurora`; rename package to
      `@free-react-templates/barbero`).
- [ ] TDD: tests first for Navbar, Hero, Services, Counters, Team, Gallery,
      AppointmentForm, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
