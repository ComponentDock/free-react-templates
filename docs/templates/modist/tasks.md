# Modist (Colorlib Modist) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-modist`.

## Design notes

- **Original:** ColorLib "Modist" — free fashion shop website template
  (source: https://colorlib.com/wp/template/modist/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/modist/`
  (HTTP 200, 43.4KB) + stylesheet `css/style.css` (79.2KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Modist + Home/Shop/About/Blog/
  Contact) → hero ("Le Stylist" / "Wear Your Dress") → trending (product
  tiles "Young Woman Wearing Dress") → products ("Our Products" grid) →
  sale band ("Summer Sale") → testimony band → blog ("Recent Blog":
  "Even the all-powerful Pointing has no control about the blind texts")
  → services ("We want you to express yourself": Refund Policy, Premium
  Packaging, Superior Quality) → subscribe ("Subscribe to our Newsletter")
  → footer (Menu / Help / "Have a Questions?").
- **Design tokens:** brand pink **#f1b8c4** + black **#000000** / dark
  **#212529** text; light **#f8f9fa**/`bg-light` bands; headings **Roboto
  Condensed** + body **Work Sans**/**Lato** via Google Fonts.
- **Recreation name:** Modist. App folder `apps/modist`, package
  `@free-react-templates/modist`.
- **Design approach:** hero = seeded picsum fashion photo + headline;
  trending/products grids with seeded photo tiles; sale band; testimony
  band; blog cards with seeded photos; services with lucide icons;
  subscribe band; footer with link columns; all images picsum-seeded
  (`picsum.photos/seed/modist-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-modist` from latest origin/main.
- [ ] Mark Modist `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-modist/spec.md).
- [ ] Scaffold `apps/modist` (copy simplest multi-section app, rename package to `@free-react-templates/modist`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, trending, products,
      sale, services, subscribe, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Roboto Condensed + Work Sans).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
