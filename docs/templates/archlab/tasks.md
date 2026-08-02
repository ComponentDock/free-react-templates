# ArcLab (Colorlib ArcLab) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-archlab`.

## Design notes (replication findings)

- **Original:** ColorLib "ArcLab" — Free Bootstrap 4 architecture template
  (source: https://colorlib.com/wp/template/archlab/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/archlab/
  (HTTP 200, full rendered DOM + `css/style.css` (73KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **green** brand (`#96bb7c`), Nunito Sans font, a "Modern Innovative
  Architecture" hero, a 3-card design process, and a quote form with
  service selector.
- **Structure (1:1, section order):**
  1. Navbar: logo "ArcLab." + Home, About, Team, Services, Project, Blog,
     Contact.
  2. Hero: "Modern Innovative Architecture" + blurb ("From as low as $20
     ...") + **Explore Projects / Watch our video**.
  3. Design Process: **Design Process, Supervision, Budget Planning**
     (number + title + blurb).
  4. CTA: "Build a Home For You" + **Request A Quote**.
  5. Quote form: "Select Your Services" — **Construction, Renovation,
     Interior Design, Exterior Design, Painting**.
  6. About: "ArcLab" + blurb + stats (Years of Experienced, Project).
  7. Team + Projects sections.
  8. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#96bb7c`** (buttons, accents).
  - Dark `#000`, `#212529`; muted `#6c757d`.
  - Font: **"Nunito Sans"** (Google Fonts `<link>`).
  - Green buttons with white text.
- **Recreation name:** ArcLab (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/archlab`, package
  `@free-react-templates/archlab`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/archlab-<n>/<w>/<h>`); lucide-react icons; Nunito
  Sans via Google Fonts; video button as styled play button; quote form
  prevents default (no backend); green primary in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-archlab/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/archlab` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/archlab`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-archlab`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
