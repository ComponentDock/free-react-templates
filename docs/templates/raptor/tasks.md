# Raptor (Colorlib Raptor) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-raptor`.

## Design notes (replication findings)

- **Original:** ColorLib "Raptor" — Free Bootstrap 4 domain & hosting
  template (source: https://colorlib.com/wp/template/raptor/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/raptor/
  (HTTP 200, full rendered DOM + `css/style.css` (71KB) extracted).
- **Visual design (from DOM + CSS tokens):** domain/hosting site with a
  **teal** brand (`#2ebdc4`) + **green** accent (`#68e5b2`), Poppins +
  Work Sans fonts, a "Design. Development. Hosting." hero, domain search
  with TLD prices, "Why choose us" services, and pricing plans.
- **Structure (1:1, section order):**
  1. Navbar: logo "Raptor." + Home, About, Domain, Hosting, Blog, Contact
     - **Get started**.
  2. Hero: h1 "Design. Development. Hosting." + blurb + **Get started /
     Get domain**.
  3. Domain search: "Get A Domain Name — With FREE Email, DNS, Theft
     Protection, and other features" + search form + TLD prices — **.com
     9.75, .net 9.90, .biz $8.95, .me $7.95**.
  4. Services: "Why choose us" + **100% Uptime Guarantee, Safe and
     Secured, Our Dedicated Support** (icon + blurb).
  5. Pricing: "Pricing Plans — Our Best Pricing" + **Free $0 — 100% free.
     Forever** (150 GB Bandwidth, 100 GB ...) + **Get Started**.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **teal `#2ebdc4`**; **green `#68e5b2`** accent.
  - Dark `#3a4348`; muted `#6c757d`.
  - Fonts: **"Poppins"** + **"Work Sans"** (Google Fonts `<link>`).
  - Teal buttons with white text.
- **Recreation name:** Raptor (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/raptor`, package
  `@free-react-templates/raptor`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/raptor-<n>/<w>/<h>`); lucide-react icons; Poppins +
  Work Sans via Google Fonts; domain search form prevents default (no
  backend); teal primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-raptor/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/raptor` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/raptor`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-raptor`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
