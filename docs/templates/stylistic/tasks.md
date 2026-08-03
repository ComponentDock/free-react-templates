# Stylistic (Colorlib Stylistic) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-stylistic`.

## Design notes

- **Original:** ColorLib "Stylistic" — free model agency website template
  (source: https://colorlib.com/wp/template/stylistic/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/stylistic/`
  (HTTP 200, 51.7KB) + stylesheet `css/style.css` (71.5KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Stylistic) → hero ("Stylistic
  Model Agency") → featured model ("A Professional Model Agency": Andrea/
  AndreaSmith, Nicole/NicoleWall, Cindy/CindySmith, Jannah/JannahDoe) →
  services (bg-dark: Fashion Shows, Corporate Events, Commercial Photo
  Shots, Exhibitions/Trade Shows) → top models ("Our Tops Model's":
  Andrea, Cassy, Angela, May, Nicole, Jannah, Mariel, Maria, Ozawa, Maine)
  → blog ("Recent Blog": "Asia's Next Top Model") → testimony band →
  appointment ("Contact Us" / "Become A Model?" / "Model Courses") → quote
  ("Request a Quote") → footer (Recent Blog / Site Links / "Have a
  Questions?").
- **Design tokens:** brand pink **#f34573** + dark **#212529**/**#343a40**
  text; `bg-dark` service band; headings **Vidaloka** (serif) via Google
  Fonts + system sans body.
- **Recreation name:** Stylistic. App folder `apps/stylistic`, package
  `@free-react-templates/stylistic`.
- **Design approach:** hero = seeded picsum photo + headline; featured
  model cards; services with lucide icons; top-models grid with initials
  avatars; blog cards with seeded photos; testimony band; appointment
  band; quote band; footer with link columns; all images picsum-seeded
  (`picsum.photos/seed/stylistic-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-stylistic` from latest origin/main.
- [ ] Mark Stylistic `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-stylistic/spec.md).
- [ ] Scaffold `apps/stylistic` (copy simplest multi-section app, rename package to `@free-react-templates/stylistic`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, featured, services,
      top models, blog, appointment, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Vidaloka).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
