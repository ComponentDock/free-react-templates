# Marga (Colorlib Marga) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-marga`.

## Design notes (replication findings)

- **Original:** ColorLib "Marga" — architecture template
  (source: https://colorlib.com/wp/template/marga/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/marga/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **teal** brand (`#43ab92`), DM Sans font, a "We Are Specialist In The
  Field of Architect" hero, a "What We Do" services grid, and a "Ready To
  Start Your Home" CTA.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Hero: "We Are Specialist In The Field of Architect" + **Contact Us**.
  3. About: "Welcome To Our Company" + blurb.
  4. Services: "What We Do" + Creative Stairs, Kitchen Design, Lamp
     Decoration, Interior Blueprint, Dinning Table.
  5. Projects: gallery.
  6. CTA: "Ready To Start Your Home".
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **teal `#43ab92`** (buttons, accents); dark `#364d59`.
  - Light backgrounds `#f8f9fa`.
  - Font: **"DM Sans"** (Google Fonts `<link>`).
- **Recreation name:** Marga (kept — matches ColorLib name). App folder
  `apps/marga`, package `@free-react-templates/marga`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/marga-<n>/<w>/<h>`); lucide-react icons; DM Sans via
  Google Fonts; forms prevent default (no backend); teal primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-marga/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/marga` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/marga`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-marga`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
