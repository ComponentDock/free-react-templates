# Ecobit (Colorlib Ecobit) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-ecobit`.

## Design notes (replication findings)

- **Original:** ColorLib "Ecobit" — app / networking landing page
  (source: https://colorlib.com/wp/template/ecobit/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ecobit/
  (HTTP 200, full rendered DOM + `css/style.css` (160KB) extracted).
- **Visual design (from DOM + CSS tokens):** app landing with an **orange**
  brand (`#ff4800`), Barlow Semi Condensed + Rajdhani fonts, light
  (`#f9f9ff`, `#f0e9ff`) sections, hero with phone mockup, 3 feature tiles,
  2 splits, pricing, reviews, and subscribe band.
- **Structure (1:1, section order):**
  1. Navbar: logo "ecobit" + Home, features, pricing, Blog, pages,
     Elements, Contact + **sing up**.
  2. Hero (`banner_part`): h1 "Building Networks For People" + blurb +
     **try for free**.
  3. Feature tiles (`use_sasu`): **Fully Secured, Unique Design, A
     Volunteer** (icon + title + blurb).
  4. Split (`about_us`): "Easy To Access Social Media" + blurb +
     **learn more**.
  5. Split (`about_us right_time`): "With efficiency to unlock more
     opportunities" + blurb + **learn more**.
  6. Pricing (`pricing_part`): "Simple Pricing" + **Standard $50.00/mo**
     (2GB Bandwidth, Two Account, 15GB Storage, Sale After Service, 3 Host
     Domain, 24/7 Support) + **Business** + **Purchase Now**.
  7. Reviews (`review_part`): quote carousel.
  8. Subscribe (`subscribe_part`): email + subscribe.
  9. Clients (`client_logo`): logo strip.
  10. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff4800`** (buttons, accents).
  - Light bgs `#f9f9ff`, `#f0e9ff`; muted text `#888888`, `#999999`.
  - Fonts: **"Barlow Semi Condensed"** + **"Rajdhani"** (Google Fonts
    `<link>`).
  - Orange buttons with white text.
- **Recreation name:** Ecobit (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/ecobit`, package
  `@free-react-templates/ecobit`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/ecobit-<n>/<w>/<h>`); lucide-react icons; Barlow
  Semi Condensed + Rajdhani via Google Fonts; forms prevent default (no
  backend); orange primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-ecobit/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/ecobit` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/ecobit`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-ecobit`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
