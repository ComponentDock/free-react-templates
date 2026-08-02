# Layal (Colorlib Layal) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-layal`.

## Design notes (replication findings)

- **Original:** ColorLib "Layal" — interior design / architecture template
  (source: https://colorlib.com/wp/template/layal/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/layal/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
- **Visual design (from DOM + CSS tokens):** interior-design landing with a
  **sky blue** (`#77d5f7`) + **indigo** (`#3c50ca`) palette, Poppins font,
  numbered feature steps, a services grid, and a latest projects gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Features: numbered steps ("01", "02", "03" + Becoming A Dvd Repair
     Expert Online).
  3. Services: "Our Offred Services" + "Reasons To Choose Notebook".
  4. Projects: "Our latest Projects" gallery.
  5. Newsletter: email subscribe band.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **sky blue `#77d5f7`** (accents) + **indigo `#3c50ca`**
    (buttons).
  - Light backgrounds `#f9f9ff`; body text `#777777`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
- **Recreation name:** Layal (kept — matches ColorLib name). App folder
  `apps/layal`, package `@free-react-templates/layal`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/layal-<n>/<w>/<h>`); lucide-react icons; Poppins via
  Google Fonts; forms prevent default (no backend); indigo primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-layal/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/layal` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/layal`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-layal`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
