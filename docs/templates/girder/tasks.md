# Girder (Colorlib Constructed) — Tasks & Design Notes

> Implementation ships on `feat/template-girder` (new original name; the
> ColorLib source name "Constructed" is never reused).

## Design notes (replication findings)

- **Original:** ColorLib "Constructed" — architecture template
  (source: https://colorlib.com/wp/template/constructed/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/constructed/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens + screenshot):** construction
  landing with a **red** brand (`#eb1c24`), Bootstrap-based light layout
  (`#f8f9fa`, `#212529` text), a split hero (architectural photo left, text
  right), a 6-card services grid, a Recent Projects gallery, and a footer.
- **Structure (1:1, section order):**
  1. Navbar: logo "Girder" + Home, Projects, Services, About, Contact Us +
     phone number (+ dark-mode toggle).
  2. Hero: "We Are Girder" + blurb + "See our projects" (solid red) +
     "Watch our video" (outlined) buttons, split with photo.
  3. Our Services: 6 cards (Pre-Construction Services, General
     Construction, Expert Engineer, Design Build, Modeling, Industrial),
     each icon + blurb + "Learn more" link.
  4. Recent Projects: gallery of 6 project images with captions +
     "See all portfolio" link.
  5. People Says: 4 testimonial quotes (Alan Crew, Jean Doe, Jessica Smith,
     Ben Miller).
  6. CTA banner: "The road of success is always under construction".
  7. Footer: link columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#eb1c24`** (buttons, accents); hover `#ee3e45`.
  - Dark text `#212529`; light backgrounds `#f8f9fa`, `#e9ecef`.
  - Font: "Roboto" body / "Montserrat" display stack.
- **Recreation name:** Girder (NEW original name — never reuse "Constructed").
  App folder `apps/girder`, package `@free-react-templates/girder`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/girder-<n>/<w>/<h>`); lucide-react icons; Roboto +
  Montserrat via Google Fonts; red primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Rename prep spec/docs to `template-girder` (new original name).
- [x] Rewrite `openspec/specs/template-girder/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/girder` (copy the section-rich landing app pattern —
      Elevation; rename package to `@free-react-templates/girder`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh girder` (typecheck + lint + tests + build) + spec:validate.
- [ ] Push `feat/template-girder`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` (both duplicate lines) + Surge
      URL + homepage + `npm run readme:status` (bookkeeping on main).
