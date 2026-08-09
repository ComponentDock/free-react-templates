# Razor (Colorlib Barbero) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the original slug
> (`template-barbero`); renamed to the new template name `razor` during
> implementation (spec folder + docs folder).

## Design notes

- **Original:** ColorLib "Barbero" — free barber shop website template
  (source: https://colorlib.com/wp/template/barbero/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barbero/`
  (HTTP 200, 50KB) + stylesheet `css/style.css` (90KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens + screenshot.
- **Structure observed (1:1):** navbar (Barbero + Home/About/Pricing/
  Gallery/Team/Blog/Contact) → hero (photo bg, centered, "Welcome to Barbero" /
  "We Will Make Your Style of Your Dreams" + ghost "Learn More About Us"
  button) → services (tan band, 4 circular photo cards: Hair Styles, Beard
  Trim, Hot Shave, Hair Shampoo) → about ("About Barber" / "A Smooth Barber
  Experience In Your Town") → counter band (Places/Events/Photos/Speakers) →
  team ("Our Expert Team") → video band ("Watch Our Video Popular Hair Style")
  → gallery ("Photos of Our Events", photo grid) → pricing ("Price & Plans",
  3 plan cards $78/$88/$98) → testimonials ("People Say About Our Barber") →
  appointment ("Make An Appointment" form) → blog row ("Recent Post") → dark
  footer (logo + social + Explore/Info links + contact column).
- **Design tokens:** brand gold **#bf925b** on dark **#090601**; fonts
  **Barlow Condensed** (display) + **Poppins** (body) via Google Fonts; gold
  `btn-custom` links; photo bands with dark overlays mixed with light
  sections.
- **Recreation name:** Razor. App folder `apps/razor`, package
  `@free-react-templates/razor`.
- **Design approach:** dark theme with gold accents (defined in `@theme`);
  hero = seeded picsum photo + headline with gold spans; services/gallery/
  blog cards with seeded photos; counters static; appointment form
  client-side with zod; all images picsum-seeded
  (`picsum.photos/seed/razor-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/crewcut` (most recent barber-shop template,
  same section families) — adapted to the Barbero section order + gold/dark
  tokens.

## Tasks

- [x] Write `openspec/specs/template-razor/spec.md` (Gherkin requirements +
      scenarios + replication findings) — prepped on main as
      `template-barbero`, renamed during implementation.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/razor` (copy `apps/crewcut`; rename package to
      `@free-react-templates/razor`).
- [ ] TDD: tests first for Navbar, Hero, Services, Counters, Team, Gallery,
      Pricing, AppointmentForm, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh razor` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
