# Hairsal (Colorlib HairSal) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-hairsal`.

## Design notes

- **Original:** ColorLib "HairSal" — free hair salon website template
  (source: https://colorlib.com/wp/template/hairsal/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hairsal/`
  (HTTP 200, 15.6KB) + stylesheet `css/style.css` (18.2KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Hairsal + Home/About/Services/Book
  Online/Contact) → hero slider ("Welcome to Hairsal" / "Hair Salon Expert"
  / "Beautiful Hair, Healthy You!" + CTA) → about (bg-light, "Welcome to
  Hair Salon" + copy + Opening Hours) → featured services ("Experience Our
  Outstanding Services" + icon cards: Barber Razor, Location Pin, Barber
  Shave, New hairstyle!) → about Hairsal ("About Hairsal" + copy + stats) →
  footer (Quick Menu + Subscribe Newsletter form + copyright).
- **Design tokens:** brand light green **#8bc34a**; dark text **#25262a**;
  light section bgs `#edf0f5`/`#f4f5f9`; footer dark `#25262a`; display
  headings **"Display Playfair"** (recreate with Google Font Playfair
  Display) + sans body; green filled uppercase buttons.
- **Recreation name:** Hairsal. App folder `apps/hairsal`, package
  `@free-react-templates/hairsal`.
- **Design approach:** light theme with green accents; hero = seeded picsum
  photo + headline; about split with opening hours; featured services with
  lucide icons; about stats; footer with newsletter form; all images
  picsum-seeded (`picsum.photos/seed/hairsal-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-hairsal/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hairsal` (copy `apps/aurora`; rename package to
      `@free-react-templates/hairsal`).
- [ ] TDD: tests first for Navbar, Hero, About (opening hours), Services,
      AboutHairsal, Footer (newsletter), App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
