# Mint (ColorLib Interior Design) — Tasks & Design Notes

> Recreation of ColorLib "Interior Design"
> (https://colorlib.com/wp/template/interior-design/). Built as **Mint**
> (new original name — evokes the teal `#98ccd3` brand palette).
> Branch: `feat/template-mint`.

## Design notes (replication findings)

- **Original:** ColorLib "Interior Design" — interior decorating template.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/interiordesign/
  (HTTP 200 — NOTE: the preview slug is `interiordesign`; the
  `interior-design` slug 404s, which is why the prep notes recorded the
  preview as unreachable. Full rendered DOM + `css/style.css` extracted;
  screenshot viewed in the browser).
- **Visual design:** light interior-design landing — hero "Experience
  Interior Design" over a full-bleed interior photo with a teal overlay,
  teal `#98ccd3` buttons/accents, "What we offer" service cards (Interior
  Architecture, Interior Design, Furniture), "Why Us" numbered FAQ,
  "Testimonials" quotes (Cloe Marena, Nathalie Channie, Will Turner,
  Nicolas Stainer), Works gallery (Pool Decor, Seat Decor, Intuitive Idea,
  Decorations), "Our Blog Posts" cards, dark footer (Navigation + Recent
  News).
- **Structure (1:1, section order):**
  1. Navbar: logo "Mint" + Home / About / Services / Projects / Blog /
     Contact.
  2. Hero: "Experience Interior Design" + CTA.
  3. Services: "What we offer" — 3 icon cards.
  4. Why Us: 4 numbered FAQ items.
  5. Testimonials: 4 client quotes.
  6. Works: 4 project cards (image + caption).
  7. Blog: 3 post cards.
  8. Footer: dark, columns + socials + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Primary **teal `#98ccd3`** (buttons, accents); `#212529` / `#343a40`
    dark; `#edf0f5` / `#f8f9fa` light.
  - Font: **"Nunito Sans"** (Google Fonts).
  - Teal buttons with dark text; dark charcoal footer.
- **Recreation name:** Mint. App folder `apps/mint`, package
  `@free-react-templates/mint`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/mint-<n>/<w>/<h>`); lucide-react icons; Nunito Sans
  via Google Fonts; forms prevent default (no backend); teal primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication research: preview DOM (`interiordesign`) + `css/style.css`
      tokens + screenshot.
- [x] Rename prep artifacts `openspec/specs/template-interior-design` →
      `template-mint`, `docs/templates/interior-design` → `mint`; rewrite
      spec with the REAL sections + tokens (preview was reachable under the
      correct slug).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/mint` (copy girder; rename package to
      `@free-react-templates/mint`; Nunito Sans font; teal `#98ccd3`
      primary).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh mint` + spec:validate.
- [ ] Push `feat/template-mint`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main).
