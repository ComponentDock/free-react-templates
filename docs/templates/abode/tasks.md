# Abode (Colorlib Belara) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-belara);
> renamed to the NEW name **Abode** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Belara" — architecture template
  (source: https://colorlib.com/wp/template/belara/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/belara/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (76KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **gold** brand (`#D6A04C`) on light lavender/cream backgrounds
  (`#f9f9ff`, `#f0e9ff`, `#E9E3D9`), deep purple-blue secondary
  (`#415094`), Questrial + Cabin fonts, and gold CTA buttons.
- **Structure (1:1, section order):**
  1. Navbar: logo "abode" + Home, About, Services, Projects, Why Us,
     Contact + dark-mode toggle.
  2. Hero: "Homeownership never looked so affordable" + **Play Reel** video
     link + location label ("SALT LAKE CITY, UNITED STATES").
  3. About: "About Us" + description + **Learn More**.
  4. Services: "What We Do?" + cards **Commercial Architecture Design,
     Residential Architecture Design, Architecture Design**.
  5. Projects: "Projects" + featured "Casa la perla nera residential
     interior design" + **Learn More**.
  6. Why Us: "Curating a workplace that inspires all of us" + reason items.
  7. Footer: Quick Links, Services, Newsletter form + social + copyright.
- **Design tokens extracted from `assets/css/style.css`:**
  - Primary **gold `#D6A04C`** (buttons, accents).
  - Secondary deep purple-blue `#415094`.
  - Light backgrounds `#f9f9ff`, `#f0e9ff`, `#E9E3D9`.
  - Fonts: **"Questrial"** (display, Google Fonts `<link>`) + **"Cabin"**
    (body).
  - Gold buttons with white text.
- **Recreation name:** Abode (NEW — the ColorLib source is "Belara").
  App folder `apps/abode`, package `@free-react-templates/abode`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/belara-<n>/<w>/<h>`); lucide-react icons; Questrial +
  Cabin via Google Fonts; forms prevent default (no backend); gold primary
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-abode/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/abode` (copy the architecture landing app pattern —
      Masonry; rename package to `@free-react-templates/abode`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh abode` + `npm run spec:validate`.
- [x] Push `feat/template-abode`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
