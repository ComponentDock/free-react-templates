# Archi (Colorlib Archi) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-archi`.

## Design notes (replication findings)

- **Original:** ColorLib "Archi" — architecture / design quality template
  (source: https://colorlib.com/wp/template/archi/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/archi/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (59KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **red** brand (`#ff1f1f`) + **navy** (`#1f2b7b`), Poppins + Rajdhani
  fonts, a "Focus on Design Quality" hero, a "52 Years" about, and 3
  service cards.
- **Structure (1:1, section order):**
  1. Navbar: logo "Architects" + Home, About, Services, Project, Blog,
     contact.
  2. Hero (slider): "#1 aritecture in united stare — Focus on Design
     Quality" + blurb + **Contact Us**.
  3. About: "About Us — 52 Years Of Experience in this area" + blurb.
  4. Services: "Our Services — We provide best intorior solution for you"
     - **Architecture, Interior Design, Urban Design** (icon + blurb).
  5. Recent work: "Our recent work — Our best recent popular work here" +
     **Downside Low House** + project grid.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff1f1f`**; navy `#1f2b7b`.
  - Light bgs `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"Poppins"** + **"Rajdhani"** (Google Fonts `<link>`).
  - Red buttons with white text.
- **Recreation name:** Archi (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/archi`, package
  `@free-react-templates/archi`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/archi-<n>/<w>/<h>`); lucide-react icons; Poppins +
  Rajdhani via Google Fonts; red primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-archi/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/archi` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/archi`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-archi`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
