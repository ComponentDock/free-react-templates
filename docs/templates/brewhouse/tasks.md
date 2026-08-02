# Brewhouse (Colorlib Brewhouse) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-brewhouse`.

## Design notes (replication findings)

- **Original:** ColorLib "Brewhouse" — coffee shop template
  (source: https://colorlib.com/wp/template/brewhouse/).
- **Demo DOM analyzed:** https://brewhouse-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/brewhouse/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** warm coffee-shop landing
  with DM Sans + Playfair Display fonts, "Crafted with Passion & Precision"
  hero, an "Our Menu" section (Espresso Drinks: Espresso, Cortado,
  Cappuccino; Pour Overs: Ethiopian Yirgacheffe), story, process, and
  locations sections.
- **Structure (1:1, section order):**
  1. Navbar: Menu, Our Story, Process, Locations, Shop, Order Online.
  2. Hero: "Crafted with Passion & Precision".
  3. Menu: "Our Menu" + drink cards.
  4. Our Story: heading + blurb.
  5. Process: steps.
  6. Locations: store list.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Warm coffee-toned palette, light surfaces.
  - Fonts: **"DM Sans"** + **"Playfair Display"** (Google Fonts `<link>`).
- **Recreation name:** Brewhouse (kept — matches ColorLib name). App folder
  `apps/brewhouse`, package `@free-react-templates/brewhouse`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/brewhouse-<n>/<w>/<h>`); lucide-react icons; DM Sans
  - Playfair Display via Google Fonts; repo-standard Navbar (dark-mode
    toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-brewhouse/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/brewhouse` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/brewhouse`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-brewhouse`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
