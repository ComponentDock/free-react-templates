# Edifice (Colorlib Construction) — Tasks & Design Notes

> Implementation ships on `feat/template-edifice` (new original name; the
> ColorLib source name "Construction" is never reused).

## Design notes (replication findings)

- **Original:** ColorLib "Construction" — construction website template
  (source: https://colorlib.com/wp/template/construction/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/construction/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
- **Visual design (from DOM + CSS tokens + screenshot):** construction
  landing with a **yellow** brand (`#fab700`), Poppins font, a dark photo
  banner hero ("Discover the Colorful World" / "Build Your Dream"), a
  3-card features grid, an "Alex Complex for residence" project gallery, a
  stats band, a services grid, a testimonial slider, and a blog.
- **Structure (1:1, section order):**
  1. Navbar: logo "Edifice" + Home, Feature, Project, Service, Blog, Contact
     - phone number (+ dark-mode toggle).
  2. Banner hero: eyebrow "Discover the Colorful World", h1 "Build Your
     Dream", blurb, "Discover Now" (solid yellow).
  3. Features (`#feature`): 3 "Building Drawings" cards with blurbs.
  4. Projects: "Alex Complex for residence" gallery of 6 captioned images.
  5. Facts band: counters 2536 / 6784 / 1059 / 2239.
  6. Services: "Some Features that Made us Unique" + subline + 3 cards
     (Basic & Common Repairs, Brake Repairs & Services, Preventive
     Maintenance).
  7. Testimonials: "Why we are the best" quote slider (prev/next).
  8. Latest Blog: "Latest From Blog" + 3 post cards.
  9. Footer: link columns + social + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **yellow `#fab700`** (buttons, accents); hover `#e6a500`.
  - Dark text `#222222`; light backgrounds `#f9f9ff`.
  - Font: "Poppins" (Google Fonts).
- **Recreation name:** Edifice (NEW original name — never reuse
  "Construction"). App folder `apps/edifice`, package
  `@free-react-templates/edifice`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/edifice-<n>/<w>/<h>`); lucide-react icons; Poppins via
  Google Fonts; yellow primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Rename prep spec/docs to `template-edifice` (new original name).
- [x] Rewrite `openspec/specs/template-edifice/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [x] Create `apps/edifice` (copy the section-rich landing app pattern —
      Girder; rename package to `@free-react-templates/edifice`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh edifice` (typecheck + lint + tests + build) + spec:validate.
- [ ] Push `feat/template-edifice`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` (both duplicate lines) + Surge
      URL + homepage + `npm run readme:status` (bookkeeping on main).
