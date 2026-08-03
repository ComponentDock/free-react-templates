# Alotan (Colorlib Alotan) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-alotan`.

## Design notes

- **Original:** ColorLib "Alotan" — free barber shop website template
  (source: https://colorlib.com/wp/template/alotan/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/alotan/`
  (HTTP 200, 32.1KB) + stylesheet `css/style.css` (13.9KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (logo + Home/About/Contact) → hero
  (photo bg + barbershop wordmark) → quick-info orange strip (phone +1 234
  5633 342 · location 249 Division Rad · hours Daily 8am-10pm) → services
  ("Services", prev/next + photo cards: Haircuting, Beard Shaving, Cream &
  Shampoo) → barber features ("Barber Features", 3 cards: Shave & Haircut,
  Cream & Shampoo, Mustache Expert) → CTA band (photo bg, "Appoint a Haircut
  Today and Get 25% discount" + Make an Appointment) → "Good Looking Style"
  (video + text) → light footer (About + Links + Latest Blog).
- **Design tokens:** brand orange **#ff6d24** (quick-info strip, accents);
  dark gray text on white; black buttons; font **Roboto** via Google Fonts;
  photo backdrops for hero and CTA band.
- **Recreation name:** Alotan. App folder `apps/alotan`, package
  `@free-react-templates/alotan`.
- **Design approach:** light theme with orange accents; hero = seeded picsum
  photo + wordmark; quick-info strip with lucide icons (phone, map-pin,
  clock); service photo cards with titles; feature cards with lucide icons;
  CTA band with discount message; video block with play icon; all images
  picsum-seeded (`picsum.photos/seed/alotan-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-alotan/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/alotan` (copy `apps/aurora`; rename package to
      `@free-react-templates/alotan`).
- [ ] TDD: tests first for Navbar, Hero, QuickInfo, Services, Features, Cta,
      StyleSection, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
