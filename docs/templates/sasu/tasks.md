# Sasu (Colorlib Sasu) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-sasu`.

## Design notes (replication findings)

- **Original:** ColorLib "Sasu" — app / digital marketing landing page
  (source: https://colorlib.com/wp/template/sasu/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sasu/
  (HTTP 200, full rendered DOM + `css/style.css` (151KB) extracted).
- **Visual design (from DOM + CSS tokens):** digital-marketing landing with
  a **blue** brand (`#0ab6ff`), Poppins + Roboto fonts, light (`#f9f9ff`,
  `#f0e9ff`) sections, a "Drive More Customers" hero, feature tiles, a
  stats split, pricing, and reviews.
- **Structure (1:1, section order):**
  1. Navbar: logo "sasu" + Home, feature, pricing, Blog, pages, Contact.
  2. Hero (`banner_part`): h1 "Drive More Customers Through Digital" +
     blurb + **Get Started / Sign up for free**.
  3. Feature tiles: **A Volunteer** x3 (icon + blurb).
  4. Featured split (`about_us`): "featured" + blurb + **50k Total
     Volunteer, 100k Successed Mission** + **learn more**.
  5. Split (`about_us right_time`): "Right people at the Right time." +
     blurb + **get started / sing up free**.
  6. Who can use: "Who can use Sasu?" + cards.
  7. Pricing (`pricing_part`): plans + purchase buttons.
  8. Reviews (`review_part`): quote carousel.
  9. Clients (`client_logo`): logo strip.
  10. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0ab6ff`** (buttons, accents).
  - Light bgs `#f9f9ff`, `#f0e9ff`; muted `#999999`, `#7f7f7f`.
  - Fonts: **"Poppins"** + **"Roboto"** (Google Fonts `<link>`).
  - Blue buttons with white text.
- **Recreation name:** Sasu (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/sasu`, package
  `@free-react-templates/sasu`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/sasu-<n>/<w>/<h>`); lucide-react icons; Poppins +
  Roboto via Google Fonts; forms prevent default (no backend); blue primary
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-sasu/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sasu` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/sasu`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-sasu`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
