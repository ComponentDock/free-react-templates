# Investpro (Colorlib Investpro) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Blaze PR (#6) awaits review.
> Implementation ships later on `feat/template-investpro`.

## Design notes (replication findings)

- **Original:** ColorLib "Investpro" — fintech investing platform template
  (source: https://colorlib.com/wp/template/investpro/).
- **Demo DOM analyzed:** https://investpro-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/investpro/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** dark, premium fintech
  landing — navy (#002244) surfaces with blue (#0f74c5) primary accents,
  Plus Jakarta Sans display + Inter body + JetBrains Mono numerals, rounded
  cards, pill buttons, grid-overlay hero, gradient CTAs, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: Invest, Markets, Pricing, Learn, About + Log in / Get Started.
  2. Hero: "Invest Smarter, Trade Better" + Watch Demo + "12M+ investors,
     4.9/5" + mock portfolio widget (+$2,341.20 (5.19%) today, AAPL
     holdings, order feed).
  3. Features: Commission-Free Trading, Fractional Shares, Instant
     Deposits, Professional Research, Award-Winning App, Bank-Level
     Security, Developer API, Tax Optimization.
  4. Markets: Stocks, ETFs, Crypto, Options, Bonds, Futures.
  5. Security: SIPC Protected, FDIC Insured Cash, 256-bit Encryption,
     Two-Factor Auth, SEC Registered, 24/7 Monitoring.
  6. Pricing: Basic (free), Pro, Premium.
  7. Testimonials: 6 quotes with metrics (Portfolio Growth +47%,
     Trades/Month 500+, Clients Referred 200+, Crypto Holdings $85K, Tax
     Savings $3,200, Win Rate 68%).
  8. FAQ: 8 questions (free?, money protection, transfers, fractional
     shares, retirement, deposits, crypto, API).
  9. CTA: "Ready to Start Building Wealth?" + View Pricing + app badges.
  10. Footer: Products / Company / Resources + Important Disclosures.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **#0f74c5** (blue-600), **#002244** (navy), **#1c398e**
    (deep blue); greens #22c55e / #00ac5f.
  - Neutrals: white/black/#030304.
  - Fonts: **"Plus Jakarta Sans"** + **"Inter"** + **"JetBrains Mono"** via
    Google Fonts.
  - Shapes: rounded-sm…2xl cards, pill buttons, gradient primary buttons.
- **Recreation name:** Investpro (kept — matches ColorLib name). App folder
  `apps/investpro`, package `@free-react-templates/investpro`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/investpro-<n>/<w>/<h>`); lucide-react icons; Plus
  Jakarta Sans + Inter + JetBrains Mono via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome; FAQ as accessible disclosure
  buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-investpro/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/investpro` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/investpro`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-investpro`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
