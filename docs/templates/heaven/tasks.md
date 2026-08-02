# Heaven (Colorlib Heaven) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-heaven`.

## Design notes (replication findings)

- **Original:** ColorLib "Heaven" — architecture / interior template
  (source: https://colorlib.com/wp/template/heaven/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/heaven/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture/interior landing
  with an **orange** brand (`#ff7e00`), Poppins font, a "HEAVEN X LEATEST
  PROJECT" hero slideshow, an About Us section, and "Home Decor" service
  cards.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, about, service, project, blog, single blog,
     elements, contact.
  2. Hero: "HEAVEN X LEATEST PROJECT" slideshow.
  3. About: "About Us" + blurb.
  4. Our Service: "our service" + Home Decor cards.
  5. Projects: gallery.
  6. Testimonials: quotes.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff7e00`** (buttons, accents); `#415094` secondary.
  - Light backgrounds `#f9f9ff`, `#f0e9ff`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
- **Recreation name:** Heaven (kept — matches ColorLib name). App folder
  `apps/heaven`, package `@free-react-templates/heaven`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/heaven-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; forms prevent default (no backend); orange primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-heaven/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/heaven` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/heaven`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-heaven`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
