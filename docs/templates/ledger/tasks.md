tasks.md
---

# Ledger (Recreation of ColorLib Accounting)

## Tasks & Implementation Plan

1. **Scaffold App:**
   - Copy skeleton structure into `apps/ledger`.
   - Update `package.json` name to `@free-react-templates/ledger` and add `vite.config.ts` with `injectUiSource()`.
   - Register workspace in root `package.json` or verify.
2. **Design Tokens & Fonts:**
   - Configure Tailwind `@theme` in `src/index.css` with `#1BA12D` (primary green), `#212529` (heading), `#6C757D` (muted text), `#F8F9FA` (light bg).
   - Load Google Fonts (`Montserrat`) in `index.html`.
3. **Components & TDD:**
   - `Navbar.tsx` + `Navbar.test.tsx` (top bar, links, search, mobile menu)
   - `Hero.tsx` + `Hero.test.tsx` (carousel slides, CTAs)
   - `ServicesOverview.tsx` + `ServicesOverview.test.tsx` (about image + 4 services)
   - `FeaturesGrid.tsx` + `FeaturesGrid.test.tsx` (4 core services)
   - `Counters.tsx` + `Counters.test.tsx` (stats)
   - `Testimonials.tsx` + `Testimonials.test.tsx`
   - `FaqSection.tsx` + `FaqSection.test.tsx` (accordion)
   - `BlogSection.tsx` + `BlogSection.test.tsx` (3 blog cards)
   - `CtaBanner.tsx` + `CtaBanner.test.tsx` (newsletter/consultation)
   - `PricingSection.tsx` + `PricingSection.test.tsx` (4 pricing tiers)
   - `Footer.tsx` + `Footer.test.tsx` (linking `https://www.componentdock.com/`)
4. **Integration & Verification:**
   - Assemble in `App.tsx`.
   - Run `scripts/verify-app.sh ledger`.
   - Ensure 100% test coverage.
