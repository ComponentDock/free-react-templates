# Erase (Colorlib Erase) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-erase`.

## Design notes

- **Original:** ColorLib "Erase" — free photography website template
  (source: https://colorlib.com/wp/template/erase/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/erase/`
  (HTTP 200, 30.5KB) + stylesheet `css/style.css` (60.9KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Erase) → hero ("Erase") → feature
  slider ("Make Peace With Your Broken Pieces" — Jamie Jonson) → blog
  ("Recent Blog" + "Even the all-powerful Pointing has no control about"
  cards + "Read more") → footer (Site Links / "Have a Questions?").
- **Design tokens:** brand slate blue **#69779b** + dark **#212121** text;
  light **#f8f9fa** band; headings **Abril Fatface** (cursive display) +
  body **Poppins** via Google Fonts; slate-blue filled buttons
  (`btn-primary`).
- **Recreation name:** Erase. App folder `apps/erase`, package
  `@free-react-templates/erase`.
- **Design approach:** dark hero with seeded picsum photo + site name;
  feature slider with testimonial cards; blog cards with seeded photos +
  "Read more" buttons; footer with link columns; all images picsum-seeded
  (`picsum.photos/seed/erase-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-erase` from latest origin/main.
- [ ] Mark Erase `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-erase/spec.md).
- [ ] Scaffold `apps/erase` (copy simplest multi-section app, rename package to `@free-react-templates/erase`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, slider, blog,
      footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Abril Fatface + Poppins).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
