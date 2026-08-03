# Makeupartist (Colorlib Makeup Artist) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-makeupartist`.

## Design notes

- **Original:** ColorLib "Makeup Artist" — free makeup artist website
  template (source: https://colorlib.com/wp/template/makeupartist/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/makeupartist/`
  (HTTP 200, 32.5KB) + stylesheet `css/style.css` (63.2KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (Home/About/Services/Shop/Pages/
  Works/Blog/Contact) → hero ("the center of attention.") → about
  ("Professional makeup": Daily makeup, Wedding makeup, Event makeup,
  Creative Makeup) → services (set-bg: Danielle Benton, Dani Alves) →
  blog ("Makeup artist tips": "Tips From Makeup Artists You've Never
  Heard", "Everything I Learned From A Professional Makeup Artist", "10
  Makeup-Artist Tips That Surprised (and Delighted) Us") → shop ("Beauty
  products": Leather shopper bag) → CTA ("20% discount" + "Get a quote") →
  footer (Address / Phone / Email + "Follow us on @makeupartist").
- **Design tokens:** brand pink **#e65783** on dark maroon **#200204** /
  **#111111**; light **#f8f2f2** sections; white text; headings/body
  **Spartan** + "Mattings Regular" display via Google Fonts; pink filled
  buttons (`primary-btn`).
- **Recreation name:** Makeupartist. App folder `apps/makeupartist`,
  package `@free-react-templates/makeupartist`.
- **Design approach:** dark hero with seeded picsum photo + headline; about
  with 4 service types; services band with artist cards; blog cards with
  seeded photos; shop grid with seeded photo tiles; CTA band; footer with
  contact columns + social handle; all images picsum-seeded
  (`picsum.photos/seed/makeupartist-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-makeupartist` from latest origin/main.
- [ ] Mark Makeupartist `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-makeupartist/spec.md).
- [ ] Scaffold `apps/makeupartist` (copy simplest multi-section app, rename package to `@free-react-templates/makeupartist`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, about, artist
      cards, tips, products, CTA, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Spartan).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
