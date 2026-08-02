# Colid (Colorlib Colid) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-colid`.

## Design notes (replication findings)

- **Original:** ColorLib "Colid" — business promotion landing page
  (source: https://colorlib.com/wp/template/colid/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/colid/
  (HTTP 200, full rendered DOM + `style.css` (19KB) extracted).
- **Visual design (from DOM + CSS tokens):** business landing with a
  **blue** brand (`#138fc2` + sky `#75cbe7`), Poppins font, gray/white
  sections, "Watch video" hero, 3 highlight tiles, feature rows, 6 special
  feature tiles, and 2 pricing plans.
- **Structure (1:1, section order):**
  1. Navbar: logo "colid" + Home, Service, Features, Pricing, Team, FAQ,
     Blog, Contact.
  2. Hero: h1 "It's all about Promoting your Business" + **Watch video**.
  3. Highlights: **EASY TO USE / AWESOEM DESIGN / EASY TO CUSTOMAIZE**
     (icon + blurb).
  4. Feature rows: **Easy to build, Easy to use, Easy to customize, Awesome
     design** + blurb + **Read more**.
  5. Feature icons: 4 x "Lorem ipsum" icon tiles.
  6. Special features: "SPECIAL FEATURES" + **Creative Design, Unlimited
     Features, Full Free Chat, Retina ready, High Resolution, Clean Codes**.
  7. Pricing (`price-area overlay`): "Afortable Price" + **Basic $20/Month**
     (100 MB Disk Space, 2 Subdomains, 5 Email Accounts, Webmail Support,
     Customer Support 24/7) + **STABDARD $39/Month** + **Purchase**.
  8. Team (`gray-bg`): member cards.
  9. FAQ (`testimonial-area`): questions + testimonial quotes.
  10. Clients (`client-area`): logo strip.
  11. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#138fc2`**; light sky `#75cbe7`; deep `#2f60c3`.
  - Light/gray section backgrounds; white cards.
  - Font: **"Poppins"** (Google Fonts `<link>`); themify icons (replaced by
    lucide-react).
  - Blue rounded buttons with white text.
- **Recreation name:** Colid (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/colid`, package
  `@free-react-templates/colid`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/colid-<n>/<w>/<h>`); lucide-react icons; Poppins via
  Google Fonts; blue primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-colid/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/colid` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/colid`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-colid`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
