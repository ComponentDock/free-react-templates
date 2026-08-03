# Brber (Colorlib Brber) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-brber`.

## Design notes

- **Original:** ColorLib "Brber" — free barber shop website template
  (source: https://colorlib.com/wp/template/brber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/brber/`
  (HTTP 200, 38.1KB) + stylesheet `assets/css/style.css` (64.3KB). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Barber HTML-5 Template logo +
  Home/About/Services/Portfolio/Blog/Blog Details/Element/Contact) → hero
  slider (2 photo slides: "Our Hair Style make your look elegance" / "Get
  More confident" + "make an appointment now" btn) → about split ("52 Years
  Of Experience In Hair cut!" + lead paragraphs) → services ("Professional
  Services": 3 icon cards — Stylish Hair Cut · Body Massege · Breard Style)
  → team ("Professional Teams": 4 member cards — Guy C. Pulido, Steve L.
  Nolan, Edgar P. Mathis ×2, roles Master Barber / Color Expart) → pricing
  ("Our Best Pricing": two-column list — Styling $25 · Styling + Color $65 ·
  Styling + Tint $65 · Semi-permanent wave $65 · Cut + Styling $63 · Cut +
  Styling + Color $100 · Cut + Styling + Tint $100 / Cut $25 · Shave $65 ·
  Beard trim $65 · Cut + beard trim $65 · Cut + shave $63 · Clean up $100) →
  gallery ("our image gellary": 4 photo tiles) → testimonials (quote slider,
  JONT NICOLIN KOOK) → blog ("our recent news": 2 post cards) → footer
  (section-bg photo band: "Receive updates and latest news", phone
  +564 7885 3222, email youremail@gmail.com, Location/Information/Explore
  link columns, newsletter form, copyright).
- **Design tokens:** brand tan/gold **#d19f68**; buttons `background:
#d19f68`, font **Oswald**, uppercase, padding 27px 44px, no radius;
  headings/buttons **Oswald** + body **Poppins**/Open Sans via Google Fonts;
  light sections white/`#f9f9ff`; footer `section-bg` photo band; body text
  dark gray `#999999`/`#7c7c7c`.
- **Recreation name:** Brber. App folder `apps/brber`, package
  `@free-react-templates/brber`.
- **Design approach:** light theme with tan/gold accents; hero = seeded
  picsum photo + headline; about split with years-of-experience badge;
  services with lucide icons; team cards with initials avatars; pricing as a
  two-column price list; gallery with seeded photo tiles; testimonial with
  initials avatar; blog cards with seeded photos; newsletter input in the
  footer; all images picsum-seeded (`picsum.photos/seed/brber-N/w/h`);
  Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-brber/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/brber` (copy `apps/aurora`; rename package to
      `@free-react-templates/brber`).
- [ ] TDD: tests first for Navbar, Hero, About, Services, Team, Pricing,
      Gallery, Testimonials, BlogSection, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
