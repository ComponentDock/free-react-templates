# Energen (Colorlib Energen) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-energen`.

## Design notes

- **Original:** ColorLib "Energen" — free spa & beauty website template
  (source: https://colorlib.com/wp/template/energen/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/energen/`
  (HTTP 200, 55.6KB) + stylesheet `css/style.css` (74.3KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Home/About/Treatments/Specialists/
  Pricing/Blog/Contact) → hero ("Spa & Beauty Center") → intro ("Benefits
  of Doing Spa & Massage" + Book Your Treatment / Great Gift Packages /
  Special Offer & Deal) → services (bg-light: Aromatherapy, Skin Care,
  Herbal Spa, Body Massage) → treatments (Salt & Aroma, Hydro, Hot Stone,
  Aroma) → therapies (bg-light: Spa/Massage Therapies — Relaxation,
  Athlete, Thai, Rose) → pricing (Year/Monthly/Weekly Cards — "Enjoy All
  The Features") → testimony ("Successful Stories") → counter band →
  blog ("Recent Posts": "Is wellness the new luxury") → gallery ("See the
  latest photos") → footer (Popular Links / Quick Links / "Have a
  Questions?").
- **Design tokens:** brand gold **#d9bf77** + dark **#212529** text; light
  **#f8f9fa**/`bg-light` bands; font **Open Sans** via Google Fonts;
  Ionicons icons; gold filled uppercase buttons.
- **Recreation name:** Energen. App folder `apps/energen`, package
  `@free-react-templates/energen`.
- **Design approach:** light theme with gold accents; hero = seeded picsum
  photo + headline; intro cards; services with lucide icons; treatments
  grid; therapies cards; pricing cards; testimony band; counter band; blog
  cards with seeded photos; gallery grid; footer with link columns; all
  images picsum-seeded (`picsum.photos/seed/energen-N/w/h`); Google Fonts
  via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-energen` from latest origin/main.
- [ ] Mark Energen `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-energen/spec.md).
- [ ] Scaffold `apps/energen` (copy simplest multi-section app, rename package to `@free-react-templates/energen`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, intro, services,
      treatments, therapies, pricing, testimony, blog, gallery, footer +
      dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Open Sans).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
