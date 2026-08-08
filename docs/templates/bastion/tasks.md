# Bastion (Colorlib Tough) — Tasks & Design Notes

> Recreated from the ColorLib "Tough" architecture template. Claimed on
> `feat/template-bastion` (2026-08-08); original prep artifacts lived under
> the source name `template-tough` and were renamed to Bastion per the
> new-original-name rule.

## Design notes (replication findings)

- **Original:** ColorLib "Tough" — architecture template
  (source: https://colorlib.com/wp/template/tough/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/tough/
  (HTTP 200, 36 KB DOM + `css/style.css` extracted). Screenshot
  (`tough-free-template.jpg`) shows the older layout; live DOM is the
  reference.
- **Visual design:** architecture landing with a **mint green** brand
  (`#53d397` / `#79efb4`) on dark (`#1b212c`) canvas, Montserrat font, a
  four-slide hero carousel (#01 Exterior Building, #02 American Building,
  #03 Louie's Residences, #04 Business Building), numbered nav (01 Home …
  07 Contact), stats band, 4 service cards, quote CTA, 8-work portfolio,
  testimonials, 3 pricing plans, footer.
- **Structure (1:1, section order):**
  1. Navbar: wordmark + numbered links (Home, About, Services, Pricing,
     Portfolio, Blog, Contact) + dark-mode toggle + mobile menu.
  2. Hero: 4-slide carousel with dots/next controls.
  3. Counter band: Finished Projects / Happy Customers / Working Hours /
     Cups of Coffee + Explore Further.
  4. Services: Interior Design, Concept Design, Residential Design,
     Hospitality Design (4 cards, Learn More links).
  5. Quote CTA: "Get started" + Request a quote.
  6. Portfolio: 8 work items (Residence Work 01–08).
  7. Testimonials: "Clients Says" + quotes with author/role.
  8. Pricing: Basic / Standard / Premium Plan, $29 per month, Get started.
  9. Footer: Contact Us + email + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **mint `#53d397`** / `#79efb4` (buttons, accents); dark
    `#1b212c`; secondary `#4a5562`; light `#f8f9fa`.
  - Font: **"Montserrat"** (Google Fonts `<link>`).
  - Icons: flaticon-house-plans → DraftingCompass, flaticon-ideas →
    Lightbulb, flaticon-modern-house → Home, flaticon-skyline → Building2.
- **Recreation name:** Bastion. App folder `apps/bastion`, package
  `@free-react-templates/bastion`, homepage
  `https://free-react-templates-bastion.surge.sh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/bastion-<n>/<w>/<h>`); lucide-react icons; Montserrat
  via Google Fonts; mint primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Rename prep artifacts: `openspec/specs/template-tough` →
      `openspec/specs/template-bastion`, `docs/templates/tough` →
      `docs/templates/bastion`.
- [x] Rewrite `openspec/specs/template-bastion/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above —
      includes quote CTA, portfolio, testimonials, pricing that the old
      spec missed).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/bastion` (copy the section-rich landing app pattern —
      facet; rename package to `@free-react-templates/bastion`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh bastion` + spec:validate.
- [ ] Push `feat/template-bastion`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` (ALL THREE copies, lines
      122/1986/2570) + Surge URL + homepage + `npm run readme:status`
      (bookkeeping on main).
