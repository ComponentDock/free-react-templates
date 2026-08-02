# Belara (Colorlib Belara) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-belara`.

## Design notes (replication findings)

- **Original:** ColorLib "Belara" — architecture template
  (source: https://colorlib.com/wp/template/belara/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/belara/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (76KB) extracted).
- **Visual design (from DOM + CSS tokens):** real-estate / architecture
  landing with a **gold** brand (`#D6A04C`) on light lavender-gray
  backgrounds (`#f9f9ff`, `#f0e9ff`), Questrial + Cabin fonts, a
  full-screen hero slider with a "Play Reel" video link, and a hero footer
  strip with stats.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, Work, Services, Products, Tips & Tricks, FAQ,
     Contact Us.
  2. Hero slider: "SALT LAKE CITY, UNITED STATES" label + "Homeownership
     never looked so affordable" + **Play Reel** video icon; hero footer
     strip with features.
  3. About: "About Us" + blurb.
  4. What We Do?: service cards.
  5. Projects: "Projects" + "Casa la perla nera residential interior
     design" gallery.
  6. Why Us?: "Curating a workplace that inspires all of us".
  7. Footer: Quick Links, Services, Newsletter + social + copyright.
- **Design tokens extracted from `assets/css/style.css`:**
  - Primary **gold `#D6A04C`** (buttons, accents); secondary deep
    purple-blue `#415094`.
  - Light backgrounds `#f9f9ff`, `#f0e9ff`, `#E9E3D9`.
  - Fonts: **"Questrial"** (Google Fonts `<link>`) + **"Cabin"** (body).
- **Recreation name:** Belara (kept — matches ColorLib name). App folder
  `apps/belara`, package `@free-react-templates/belara`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/belara-<n>/<w>/<h>`); lucide-react icons; Questrial
  - Cabin via Google Fonts; forms prevent default (no backend); gold
    primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
    chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-belara/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/belara` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/belara`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-belara`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
