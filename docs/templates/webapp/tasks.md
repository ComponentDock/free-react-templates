# WebApp (Colorlib WebApp) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-webapp`.

## Design notes (replication findings)

- **Original:** ColorLib "WebApp" — web app / software marketing template
  (source: https://colorlib.com/wp/template/webapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/webapp/
  (HTTP 200, full rendered DOM + `css/style.css` (60KB) extracted).
- **Visual design (from DOM + CSS tokens):** software marketing landing with
  an **orange** brand (`#fd7e14`), Open Sans font, light (`#f8f9fa`)
  sections, a "Boost Productivity with WebApp" hero, feature grids, and
  testimonials.
- **Structure (1:1, section order):**
  1. Navbar: logo "WebApp." + Home, Features (Money Saving, Powerful Apps,
     Efficient Support, Innovative Technologies, Corporate Solutions),
     Pricing, Blog, Contact.
  2. Hero: h1 "Boost Productivity with WebApp" + blurb + **Try it for
     free**.
  3. Features: "The Features" + tiles — **Powerful Apps, Strategic
     Partners, Business in Mind, Innovative Technologies, Many Features,
     Easy to use, Safe secure and reliable** (icon + title + blurb).
  4. More Features: "More Features" + Strategic Partners, Business in Mind.
  5. Testimonials: "What People Says" + **User Collaboration, Mobile
     Integration, Smart Analytics**.
  6. Pricing + Blog sections.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#fd7e14`** (buttons, accents).
  - Light bgs `#f8f9fa`, `#dee2e6`.
  - Font: **"Open Sans"** (Google Fonts `<link>`); icomoon icons (replaced
    by lucide-react).
  - Orange buttons with white text.
- **Recreation name:** WebApp (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/webapp`, package
  `@free-react-templates/webapp`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/webapp-<n>/<w>/<h>`); lucide-react icons; Open Sans
  via Google Fonts; forms prevent default (no backend); orange primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-webapp/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/webapp` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/webapp`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-webapp`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
