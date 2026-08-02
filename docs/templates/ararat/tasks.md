# Ararat (Colorlib Ararat) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-ararat`.

## Design notes (replication findings)

- **Original:** ColorLib "Ararat" — architecture / interior design template
  (source: https://colorlib.com/wp/template/ararat/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ararat/
  (HTTP 200, full rendered DOM + `css/style.css` (55KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with an
  **orange** brand (`#ff5e13`), Playfair Display + Roboto fonts, a "We
  Design your space" hero, a "25 Years of Experience" stat, and an
  architectural about section.
- **Structure (1:1, section order):**
  1. Navbar: logo "Ararat" + home, About, Projects, Services, blog,
     pages, Contact + **GET IN TOUCH**.
  2. Hero (slider): "We Design your space" + blurb + **See Our Projects**.
  3. Stats: **25 Years of Experience**.
  4. About: "About Us — Architechtural plan design and build" + blurb +
     list ("Consectetur adipiscing sed do eiusmod.", "Eiusmod tempor
     incididunt labore.").
  5. Projects: project grid.
  6. Services + Contact sections.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff5e13`** (buttons, accents).
  - Dark `#131313`; light `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"Playfair Display"** + **"Roboto"** (Google Fonts `<link>`).
  - Orange buttons with white text.
- **Recreation name:** Ararat (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/ararat`, package
  `@free-react-templates/ararat`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/ararat-<n>/<w>/<h>`); lucide-react icons; Playfair
  Display + Roboto via Google Fonts; orange primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-ararat/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/ararat` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/ararat`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-ararat`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
