# Mane (Colorlib Haircare) — Tasks & Design Notes

> Prep artifacts prepared on `main` (spec at `openspec/specs/template-haircare`,
> renamed to `template-mane` on the implementation branch).

## Design notes

- **Original:** ColorLib "Haircare" — free hair salon website template
  (source: https://colorlib.com/wp/template/haircare/).
- **Recreation name:** Mane. App folder `apps/mane`, package
  `@free-react-templates/mane`.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/haircare/`
  (HTTP 200, 36.8KB) + stylesheet `css/style.css` (77.2KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Haircare + Home/Services/Gallery/
  About/Blog/Contact) → hero (full-height photo slider, "We are professional
  care for your hair" + For Men / For Women split) → services (4 image
  blocks: Haircut & Styling, Beard, Makeup, Body Treatment) → services icon
  row (4 icon cards) → booking (bg-light, "Make an Appointment" form:
  name/email/phone + Call Us: 012-3456-7890) → team ("Makeup Artist": Danica
  Lewis, Nicole Simon, Cloe Meyer, Rachel Clinton, Dave Buff) → gallery
  ("Our gallery", 8 photo tiles) → pricing ("Our Prices": Hair Style $50.00
  / Manicure Pedicure $34.50 / Makeup $54.50 / Body Treatment $89.50 per
  session, middle card active) → testimonials (bg-light, "Happy Customer"
  quote carousel) → footer (Haircare about + Information + Links + "Have a
  Questions?" + copyright).
- **Design tokens:** brand tan/gold **#bf925b** + dark plum **#563b4c**
  (footer); headings **Barlow Condensed** + body **Poppins** via Google
  Fonts; light sections with `bg-light` bands; rounded pill buttons in brand
  tan.
- **Design approach:** light theme with tan/gold accents and dark plum
  footer; hero = seeded picsum photo + headline + For Men/For Women split;
  services with lucide icons + photo cards; booking form (name/email/phone);
  team cards with initials avatars; gallery with seeded photo tiles; pricing
  tiers with highlighted middle card; testimonial with initials avatar; all
  images picsum-seeded (`picsum.photos/seed/mane-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/taper` (barber-shop landing with
  Navbar/Hero/Services/Team/Pricing/Gallery/Testimonials/Footer — closest
  section list to Haircare) + `apps/aegis` Contact form pattern for the
  booking form.

## Tasks

- [x] Write `openspec/specs/template-mane/spec.md` (Gherkin requirements + scenarios + replication findings) — renamed from prep spec on the impl branch.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/mane` (copy `apps/taper`; rename package to
      `@free-react-templates/mane`).
- [ ] TDD: tests first for Navbar, Hero, Services, Booking, Team, Gallery,
      Pricing, Testimonials, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh mane` (typecheck → lint →
      vitest 100% coverage → build) + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
