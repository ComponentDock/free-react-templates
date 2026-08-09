# Terra (ColorLib Kayelux) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-terra`.

## Design notes

- **Original:** ColorLib "Kayelux" — free beauty & spa website template
  (source: https://colorlib.com/wp/template/kayelux/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/kayelux/`
  (HTTP 200, 50.1KB) + stylesheet `css/style.css` (76.5KB, Bootstrap 5
  base + custom theme). Full rendered DOM extracted; structure below is
  from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Home/About/Gallery/Services/
  Pricing/Blog/Contact) → hero ("Beauty & Spa Wellness" + "Make An
  Appointment") → intro ("Beauty Anywhere Anytime") → services ("Our
  Beauty & Spa Services": Beauty Massage, Facial Therapy, Skin Care,
  Parlor & Beauty, Eye Shadow, Relaxation Room, MakeUp, Aroma Therapy) →
  featured ("Discover the Best Beauty Salon Center": Massage, Tea Therapy,
  Hand & Foot Spa, Body Treatments, Facials, Waxing) → counter (60/9200/
  5800/100) → team ("Our Expert Makeup & Beautician Artist": Kaye Bruce,
  Lanie William, Catherine Smith, Sonya Lopez) → gallery ("Beauty &
  Massage" tiles) → pricing ("Get Our Package Pricing" + "Get Started") →
  appointment ("Make An Appointment") → testimony ("What Customers
  Saying") → blog ("Recent From Blog": "Tips for Perfect Makeup") →
  footer (Services / Recent Posts / "Have a Questions?").
- **Design tokens:** brand terracotta **#e95b3a** + dark **#212529**/
  **#111111** text; light **#f8ebe6**/`bg-light` bands; headings **Prata**
  (serif) + body **Poppins** via Google Fonts; terracotta filled buttons
  (`btn-primary`) + white/custom variants.
- **Recreation name:** Terra (recreated from ColorLib Kayelux under a NEW name).
  App folder `apps/terra`, package `@free-react-templates/terra`.
- **Design approach:** light theme with terracotta accents; hero = seeded
  picsum photo + headline + CTA; services with lucide icons; featured band;
  stats band; team cards with initials avatars; gallery grid; pricing
  cards; appointment band; testimony band; blog cards with seeded photos;
  footer with link columns; all images picsum-seeded
  (`picsum.photos/seed/terra-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-terra` from latest origin/main.
- [x] Mark Kayelux `[~]` in TEMPLATES.md (claimed) in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-terra/spec.md).
- [ ] Scaffold `apps/terra` (copy simplest multi-section app, rename package to `@free-react-templates/terra`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, services, featured,
      team, pricing, appointment, testimony, blog, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Prata + Poppins).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
