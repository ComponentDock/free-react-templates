# Modelo (Colorlib Modelo) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-modelo`.

## Design notes

- **Original:** ColorLib "Modelo" — free model management website template
  (source: https://colorlib.com/wp/template/modelo/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/modelo/`
  (HTTP 200, 21.3KB) + stylesheet `styles/main_styles.css` (22.5KB). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (Home/About us/Models/News/Contact)
  → hero ("Modelo.Model Management") → models gallery ("See the Models.")
  → spotlight ("Model of the week.") → footer (brand + link columns).
- **Design tokens:** brand purple **#690772** + dark **#121212**
  backgrounds; white text; gray **#a4a4a4** secondary; Helvetica Neue LT
  Pro (recreated with a modern sans like Poppins via Google Fonts); Roboto
  fallback.
- **Recreation name:** Modelo. App folder `apps/modelo`, package
  `@free-react-templates/modelo`.
- **Design approach:** dark hero with seeded picsum photo + headline;
  models gallery with seeded photo tiles; spotlight feature; footer with
  link columns; all images picsum-seeded (`picsum.photos/seed/modelo-N/w/h`);
  Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-modelo` from latest origin/main.
- [ ] Mark Modelo `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-modelo/spec.md).
- [ ] Scaffold `apps/modelo` (copy simplest multi-section app, rename package to `@free-react-templates/modelo`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, gallery, spotlight,
      footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Poppins).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
