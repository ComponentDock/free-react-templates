# Architect (Colorlib Architect) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-architect`.

## Design notes (replication findings)

- **Original:** ColorLib "Architect" — construction services template
  (source: https://colorlib.com/wp/template/architect/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/architect/
  (HTTP 200, full rendered DOM + `css/style.css` (32KB) extracted).
- **Visual design (from DOM + CSS tokens):** construction/architecture
  landing with a **yellow** brand (`#FFCD00`), Montserrat font, a
  "Providing all Kinds of Construction Services" hero, a welcome section
  with "25 Years Experience", and a projects grid.
- **Structure (1:1, section order):**
  1. Navbar: logo "Architect" + Home, Projects, Services, Blog, About,
     Contact.
  2. Hero: "Providing all Kinds of Construction Services" + taglines —
     **Constructing Spaces For You / Building Your Solid / High Class
     Building**.
  3. Welcome: "Welcome! Secrets of Success of Our Projects" + **25 Years
     Experience** + blurb.
  4. Works: "Our Done Projects" + **California Mega Mall, Commercial
     Building, Miami Private Apartment** + **View All Projects**.
  5. Projects + Services sections.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#FFCD00`** (buttons, accents).
  - Dark `#333333`, `#252525`; light `#fafafa`.
  - Font: **"Montserrat"** (Google Fonts `<link>`).
  - Yellow buttons with dark text.
- **Recreation name:** Architect (kept — matches ColorLib name, distinct
  from existing names). App folder `apps/architect`, package
  `@free-react-templates/architect`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/architect-<n>/<w>/<h>`); lucide-react icons;
  Montserrat via Google Fonts; yellow primary in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-architect/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/architect` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/architect`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-architect`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
