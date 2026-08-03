# Instylr (Colorlib Instylr) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-instylr`.

## Design notes

- **Original:** ColorLib "Instylr" — free fashion website template
  (source: https://colorlib.com/wp/template/instylr/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/instylr/`
  (HTTP 200, 13.3KB) + stylesheet `css/style.css` (28.1KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (InStyle + Home/the Brand/
  Portfolio/Shop/Blog/Contact) → hero ("Style is forever") → intro quote
  ("I firmly believe that with the right footwear one can rule the
  world.") → portfolio grid ("See More" tiles) → blog ("Recent Posts":
  Paris Fashion Week, About Our Fashion App, Simple Blog Post + "Read
  More") → footer (Useful Links / Contact).
- **Design tokens:** brand hot pink **#ff006c** + dark navy **#081624**
  backgrounds; light **#f8f9fb** sections; Helvetica Neue family (recreated
  with a modern sans like Poppins via Google Fonts); hot-pink filled
  buttons (`site-btn`) + `sb-dark` variant.
- **Recreation name:** Instylr. App folder `apps/instylr`, package
  `@free-react-templates/instylr`.
- **Design approach:** hero = seeded picsum fashion photo + headline; intro
  quote; portfolio grid with seeded photo tiles + "See More"; blog cards
  with seeded photos + "Read More"; footer with link columns; all images
  picsum-seeded (`picsum.photos/seed/instylr-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-instylr` from latest origin/main.
- [ ] Mark Instylr `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-instylr/spec.md).
- [ ] Scaffold `apps/instylr` (copy simplest multi-section app, rename package to `@free-react-templates/instylr`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, intro, portfolio,
      blog, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Poppins).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
