# Trellis (Colorlib Monarch) — Tasks & Design Notes

> Implemented on `feat/template-trellis` (renamed from the prep
> artifacts, which shipped under the ColorLib SOURCE name `monarch`).

## Design notes (replication findings)

- **Original:** ColorLib "Monarch" — architecture portfolio template
  (source: https://colorlib.com/wp/template/monarch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/monarch/
  (HTTP 200, full rendered DOM + `css/style.css` extracted; screenshot
  `monarch-colorlib-template.jpg` as visual reference). NOTE: the live
  preview is the ground truth — the prep draft's Hero/About/Services
  sections do NOT exist on the index page. The real page is brand header
  → dark navbar → 12-image portfolio grid → footer → black copyright bar.
- **Visual design (from DOM + CSS tokens + screenshot):** architecture
  portfolio with a **sage green** brand (`#8db1ab`), dark navy `#141b25`
  navbar + copyright bar, `#f8f9fa` light social chips, Bootstrap system
  sans stack, centered brand header above the nav.
- **Structure (1:1, section order):**
  1. Brand header: compass icon + "Trellis" + "Architecture Agency".
  2. Navbar (dark): Home, About, Services, Portfolio, Blog, Contact.
  3. Portfolio: 12 project image cards (hover → dark overlay + search
     icon circle).
  4. Footer: brand blurb + "Connect with us" socials (X, Facebook,
     Instagram) + "Navigation" column + 2 link columns.
  5. Copyright bar: "© 2026 Trellis. All rights reserved." (black bg).
- **Design tokens extracted from `style.css`:**
  - Primary **sage `#8db1ab`** (28 color refs + 13 bg refs); dark navy
    `#141b25`; text `#212529`; muted `#6c757d`; light `#f8f9fa`.
  - Font: Bootstrap system sans stack.
  - Project cards 220px tall; social chips 50px, 5px radius, `#f8f9fa`.
- **Recreation name:** Trellis (NEW — differs from ColorLib source).
  App folder `apps/trellis`, package `@free-react-templates/trellis`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/trellis-<n>/<w>/<h>`); lucide-react icons
  (Compass, Search); BrandIcon inline SVGs (x, facebook, instagram);
  sage primary in `@theme`; repo-standard Navbar (dark-mode toggle +
  mobile menu) + Footer chrome. About/Services/Blog nav links anchor to
  the page top (original links to separate pages, out of scope for the
  single-page recreation).
- Reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [x] Rename prep artifacts `template-monarch` → `template-trellis`
      (spec + docs), rewrite content with the new name and the REAL
      section list (brand header, navbar, portfolio grid, footer —
      prep draft's Hero/About/Services removed).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/trellis` (copy the portfolio-grid pattern; rename
      package to `@free-react-templates/trellis`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh trellis` + spec:validate.
- [x] Push `feat/template-trellis`, open PR (source template, preview
      URL, design tokens, what differs), merge immediately.
- [x] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      `npm run readme:status` (bookkeeping on main).
