# Interior Design (Colorlib Interior Design) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-interior-design`.

## Design notes (replication findings)

- **Original:** ColorLib "Interior Design" — free interior decorating
  website template for architects and interior designers
  (source: https://colorlib.com/wp/template/interior-design/).
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/interior-design/`
  returned HTTP 404. Per `docs/replication.md`, the design is reconstructed
  from the TEMPLATES.md screenshot (`interiordesign-free-template.jpg`,
  HTTP 200) as the sole visual reference.
- **Visual design (from screenshot):** interior-design marketing landing —
  top navigation with logo + menu links, hero with headline + CTA over a
  light background, service cards with icons, project gallery, dark footer
  with link columns. Typical ColorLib architecture-landing layout with a
  warm accent color.
- **Structure (reconstructed):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Hero: headline + CTA button.
  3. Services: icon cards.
  4. Projects: gallery.
  5. Footer: columns + social + copyright.
- **Recreation name:** Interior Design (kept — matches ColorLib name). App
  folder `apps/interior-design`, package
  `@free-react-templates/interior-design`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/interiordesign-<n>/<w>/<h>`); lucide-react icons;
  Poppins via Google Fonts; warm accent in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome. NOTE for the PR: preview unreachable,
  screenshot-based reconstruction.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-interior-design/spec.md` (Gherkin
      requirements + scenarios reflecting the screenshot reference).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/interior-design` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/interior-design`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-interior-design`, open PR (source template,
      preview URL, design tokens, what differs — note screenshot fallback).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
