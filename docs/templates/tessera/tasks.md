# Tessera (ColorLib Mosaic) — Tasks & Design Notes

> Recreation of ColorLib "Mosaic" under the NEW name **Tessera**
> (source: https://colorlib.com/wp/template/mosaic/).
> App folder `apps/tessera`, package `@free-react-templates/tessera`.

## Design notes (replication findings)

- **Original:** ColorLib "Mosaic" — architecture firm template.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/mosaic/
  (HTTP 200, full rendered DOM + `css/style.css` extracted; screenshot
  `mosaic-free-template.jpg` used as visual reference).
- **Visual design:** architecture firm landing with a **blue** brand
  (`#0033c7` service icon circles, Bootstrap action blue `#007bff` buttons),
  Poppins font, hero slider with dark overlay, dark footer `#141313`.
- **Structure (1:1, section order):**
  1. Navbar: Tessera brand + Home, About, Project, Services, Team, Blog,
     Contact + dark-mode toggle + mobile menu.
  2. Hero slider (2 slides): "Architecture Firm / We Love Modern Designs"
     and "Since - 2018 / We Create Amazing Architecture Designs", both with
     the Duden river copy + **View our works** button.
  3. About: "About" eyebrow + "We are the best Interior, Exterior &
     Architecture Firm" + copy + read-more link (image left).
  4. Stats band: Years of Experience, Happy Clients, Finished Projects,
     Working Days (blue overlay on image).
  5. Workflow: "Our Work Flow" + Perfectly Design, Carefully Planned,
     Smartly Execute.
  6. Services: "Our Services" + Design, Industrial Design, Architecture
     Support, Renovation (100px blue icon circles).
  7. Featured Projects: filter tabs (All Work / Interior / Exterior /
     Landscape) + 8 project cards.
  8. Testimonials: "Our satisfied customer says" carousel (Garreth Smith —
     CEO, Founder of Commercial Building).
  9. Team: "Our Architect Team" + John Wilson (Co-Founder / CEO) + 2× David
     Smith (Architect).
  10. Blog: "Recent Blog" + 3 posts (Jan. 20, 2019 · Admin · 3 comments).
  11. Clients: "Our Clients" + 7 text logos.
  12. Footer: brand blurb + Links + Services columns + Newsletter form
      (validated) + copyright bar (dark `#141313`).
- **Design tokens extracted from `style.css`:** primary blue `#0033c7`;
  button blue `#007bff` / hover `#0069d9`; text `#212529`; muted `#6c757d`;
  light `#f8f9fa`; footer `#141313`; font Poppins.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/tessera-<n>/<w>/<h>`); lucide-react icons
  (PencilRuler, Factory, HardHat, Hammer, PenTool, ClipboardList, Rocket,
  ChevronLeft/Right, Calendar, User, MessageSquare); inline SVG BrandIcon
  for social brands; Poppins via Google Fonts; blue primary in `@theme`.
- Reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [x] Write `openspec/specs/template-tessera/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Create `apps/tessera` (copied from `apps/trellis`; package
      `@free-react-templates/tessera`; `injectUiSource()` kept in
      vite.config.ts; lockfile registered via root `npm install`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh tessera` (typecheck → lint →
      vitest 100% coverage → build) + `npm run spec:validate`.
- [x] Push `feat/template-tessera`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [x] Bookkeeping on main: TEMPLATES.md `[~]` → `[x]` (all duplicate lines) + Surge URL + homepage + `npm run readme:status`.
