# Financeflow (Colorlib Financeflow) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-financeflow`.

## Design notes (replication findings)

- **Original:** ColorLib "Financeflow" — trading education template
  (source: https://colorlib.com/wp/template/financeflow/).
- **Demo DOM analyzed:** https://financeflow-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/financeflow/` returns
  404 — demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** light neutral trading
  landing — Inter + JetBrains Mono fonts, rounded cards, pill buttons,
  "Learn to Trade from Millionaire Mentors" hero.
- **Structure (1:1, section order):**
  1. Navbar: Courses, Mentors, Markets, Pricing, About, Sign in,
     Start Trading.
  2. Hero: "Learn to Trade from Millionaire Mentors".
  3. Markets: "Choose Your Market" + Cryptocurrency, Stock Trading, Forex,
     Options Trading, Prediction Markets.
  4. Courses: course cards with titles and prices.
  5. Mentors: mentor cards.
  6. Pricing: pricing cards.
  7. Footer: link columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light theme with neutral surfaces.
  - Fonts: **"Inter"** (body) + **"JetBrains Mono"** (mono accents) via
    Google Fonts.
- **Recreation name:** Financeflow (kept — matches ColorLib name). App
  folder `apps/financeflow`, package
  `@free-react-templates/financeflow`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/financeflow-<n>/<w>/<h>`); lucide-react icons;
  Inter + JetBrains Mono via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-financeflow/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/financeflow` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/financeflow`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-financeflow`, open PR (source template,
      preview URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
