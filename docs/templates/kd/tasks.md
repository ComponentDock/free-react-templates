# Kd (Colorlib Kd) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-kd`.

## Design notes (replication findings)

- **Original:** ColorLib "Kd" — architecture template
  (source: https://colorlib.com/wp/template/kd/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/kd/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **gold** accent (`#ccb78f`) on dark (`#000000`, `#212529`) sections, Work
  Sans + Poppins fonts, an "Architects with need a different design" hero,
  and a project gallery (Home Interior Design, Office Interior Design,
  Apartment Design, Dining Table).
- **Structure (1:1, section order):**
  1. Navbar: logo "KD" + Home, Project, About, Services, Blog, Contact.
  2. Hero: "Architects with need a different design".
  3. About: "About KD Architecture" + Perfectly Design, Carefully
     Planned, Smartly Execute.
  4. Projects: Home Interior Design, Office Interior Design, Apartment
     Design, Dining Table + **View All Projects**.
  5. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **gold `#ccb78f`** (accents); dark `#000000`, `#212529`;
    light `#f8f9fa`.
  - Fonts: **"Work Sans"** (Google Fonts `<link>`) + **"Poppins"**.
- **Recreation name:** Kd (kept — matches ColorLib name). App folder
  `apps/kd`, package `@free-react-templates/kd`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/kd-<n>/<w>/<h>`); lucide-react icons; Work Sans +
  Poppins via Google Fonts; gold accent in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-kd/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/kd` (copy the section-rich landing app pattern — Aurora;
      rename package to `@free-react-templates/kd`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-kd`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
