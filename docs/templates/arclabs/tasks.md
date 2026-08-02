# Arclabs (Colorlib Arclabs) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-arclabs`.

## Design notes (replication findings)

- **Original:** ColorLib "Arclabs" — architecture template
  (source: https://colorlib.com/wp/template/arclabs/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/arclabs/
  (HTTP 200, full rendered DOM + `css/main.css` (51KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **tan/bronze** brand (`#cea06c`) + **navy** (`#263a4e`), Roboto Condensed
  - Roboto fonts, a "Building for society Future Architechure" hero, 4
    feature tiles, and a filterable recent-work grid.
- **Structure (1:1, section order):**
  1. Navbar: logo "arclabs" + Home, About, Services, Pages, Projects,
     Blog, Contact.
  2. Hero: "Building for society Future Architechure" + **View project**.
  3. Feature tiles: **Creative Design, Experienced Style, Product
     Research, Affordable Price** (icon + blurb).
  4. About: "About Us — We are world number one Company" + blurb +
     **Read More**.
  5. Recent Work: "Recent Work — View Our Project" + filters (All,
     Popular, Latest, Following, Upcoming) + **Dell Villa, New York**
     (Architecture, Modern Design), **Eedn Park, Singapore**.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `main.css`:**
  - Primary **tan `#cea06c`**; navy `#263a4e`.
  - Light bgs `#f9f9ff`.
  - Fonts: **"Roboto Condensed"** + **"Roboto"** (Google Fonts `<link>`).
  - Tan buttons with white text.
- **Recreation name:** Arclabs (kept — matches ColorLib name, distinct
  from existing names). App folder `apps/arclabs`, package
  `@free-react-templates/arclabs`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/arclabs-<n>/<w>/<h>`); lucide-react icons; Roboto
  Condensed + Roboto via Google Fonts; tan primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-arclabs/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/arclabs` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/arclabs`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-arclabs`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
