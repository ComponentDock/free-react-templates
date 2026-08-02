# Constructed (Colorlib Constructed) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-constructed`.

## Design notes (replication findings)

- **Original:** ColorLib "Constructed" — architecture template
  (source: https://colorlib.com/wp/template/constructed/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/constructed/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** construction landing with a
  **red** brand (`#eb1c24`), Bootstrap-based light layout (`#f8f9fa`,
  `#212529` text), a "We Are Constructed" hero, a 6-card services grid
  (Pre-Construction Services, General Construction, Expert Engineer,
  Design Build, Modeling, Industrial), and a Recent Projects gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Blog, Contact.
  2. Hero: "We Are Constructed" + blurb.
  3. Our Services: 6 cards (Pre-Construction Services, General
     Construction, Expert Engineer, Design Build, Modeling, Industrial).
  4. Recent Projects: Project One, Project Two gallery.
  5. Testimonials: quotes.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#eb1c24`** (buttons, accents).
  - Dark text `#212529`; light backgrounds `#f8f9fa`, `#e9ecef`.
  - Font: Bootstrap system sans / **"Roboto"** stack.
- **Recreation name:** Constructed (kept — matches ColorLib name). App
  folder `apps/constructed`, package `@free-react-templates/constructed`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/constructed-<n>/<w>/<h>`); lucide-react icons; Roboto
  via Google Fonts; red primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-constructed/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/constructed` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/constructed`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-constructed`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
