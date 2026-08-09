# Tressly (Colorlib HairSal) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships on `feat/template-tressly` (prep folders renamed from
> the original slug `template-hairsal` by the implementer).

## Design notes

- **Original:** ColorLib "HairSal" — free hair salon website template
  (source: https://colorlib.com/wp/template/hairsal/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hairsal/`
  (HTTP 200, 15.6KB) + stylesheet `css/style.css` (18.2KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Hairsal + Home/About/Services/Book
  Online/Contact) → hero slider ("Welcome to Hairsal" / "Hair Salon Expert"
  / "Beautiful Hair, Healthy You!" + CTA) → about (bg-light, "Welcome to
  Hair Salon" + copy + Opening Hours) → featured services ("Featured
  Services" + icon cards: Barber Razor, Location Pin, Barber Shave) →
  "New hairstyle!" display band + "Experience Our Outstanding Services"
  white image band → footer (About Hairsal + Quick Menu + Subscribe
  Newsletter form + copyright).
- **Design tokens:** brand light green **#8bc34a**; dark text **#25262a**;
  light section bgs `#edf0f5`/`#f4f5f9`; footer dark `#25262a`; display
  headings **"Display Playfair"** (recreate with Google Font Playfair
  Display) + Poppins sans body; green filled uppercase buttons.
- **Recreation name:** Tressly. App folder `apps/tressly`, package
  `@free-react-templates/tressly`.
- **Design approach:** light theme with green accents; hero = seeded picsum
  photo slider + headline; about split with opening hours; featured services
  with lucide icons; about stats; footer with newsletter form; all images
  picsum-seeded (`picsum.photos/seed/tressly-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks and Keyhaven's
  dark-mode toggle + MemoryStorage test polyfill.

## Tasks

- [x] Write `openspec/specs/template-tressly/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (prep, as template-hairsal) + renamed by implementer.
- [x] Validate spec: `npm run spec:validate` (implementer).
- [x] Create `apps/tressly` (copy `apps/aurora`; rename package to
      `@free-react-templates/tressly`).
- [x] TDD: tests first for Navbar, Hero, About (opening hours), Services,
      AboutTressly, Footer (newsletter), App composition; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `scripts/verify-app.sh tressly` (typecheck + lint +
      coverage + build) + spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
