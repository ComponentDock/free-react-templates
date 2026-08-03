# Camille (Colorlib Camille) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-camille`.

## Design notes

- **Original:** ColorLib "Camille" — free beauty salon website template
  (source: https://colorlib.com/wp/template/camille/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/camille/`
  (HTTP 200, 50.8KB) + stylesheet `css/style.css` (88.7KB, Bootstrap 4.3.1
  base + custom theme). Full rendered DOM extracted; structure below is from
  the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Camille + Home/Services/Gallery/
  About/Blog/Contact) → hero ("Get Pretty Look" / "Beauty Salon" +
  "Discover Now") → about ("A World Class Beauty Salon Company" + Makeup /
  Hair Styling / Nails / Body Treatment) → services (bg-light: "Services" /
  "The beauty is not luxurious imagination") → numbered services (01
  Manicure & Pedicure, 02 Haircut & Coloring, 03 Professional Makeup, 04
  Body Spa + "Get Offer") → booking ("Make an Appointment" + service
  select) → team ("Stylist" / "Makeup Artist" + Danica Lewis, Nicole Simon,
  Cloe Meyer, Rachel Clinton, Dave Buff) → gallery ("Working on a Salon" +
  Makeup/Model tiles) → pricing ("Our Prices": Hair Style $50.00, Manicure
  Pedicure $34.50, Makeup $54.50, Body Treatment + "Get Offer") → testimony
  (bg-light "Happy Customer") → footer (Information: FAQs/Privacy/Terms/
  Condition; Links: Home/About/Services/Work/Blog/Contact; "Have a
  Questions?": 203 Fake St. Mountain View, San Francisco, California, USA /
  +2 392 3929 210 / info@yourdomain.com).
- **Design tokens:** brand rose pink **#f18c8e** + dark plum **#563b4c**;
  light pink **#f7b9bb**; section bg **#f7f5f6**/`bg-light`; headings
  **Playfair Display** (serif) + brand display **Pacifico** (cursive) +
  body **Work Sans** via Google Fonts; rose-pink filled rounded uppercase
  buttons (`btn-primary`).
- **Recreation name:** Camille. App folder `apps/camille`, package
  `@free-react-templates/camille`.
- **Design approach:** light theme with rose-pink accents; hero = seeded
  picsum background photo + headline + CTA; about split; services with
  lucide icons; numbered service cards; booking band with service select;
  team cards with initials avatars; gallery grid with seeded photo tiles;
  pricing cards with feature lists; testimony band; footer with
  Information/Links/contact columns; all images picsum-seeded
  (`picsum.photos/seed/camille-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-camille` from latest origin/main.
- [ ] Mark Camille `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-camille/spec.md).
- [ ] Scaffold `apps/camille` (copy simplest multi-section app, rename package to `@free-react-templates/camille`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, about, services,
      booking, team, gallery, pricing, testimony, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Pacifico + Playfair Display +
      Work Sans).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
