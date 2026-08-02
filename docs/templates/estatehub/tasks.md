# Estatehub (Colorlib Estatehub) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-estatehub`.

## Design notes (replication findings)

- **Original:** ColorLib "Estatehub" — real estate template
  (source: https://colorlib.com/wp/template/estatehub/).
- **Demo DOM analyzed:** https://estatehub-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/estatehub/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** luxury real estate
  landing — light neutrals with **amber** accents (`amber-400`), Inter +
  Playfair Display fonts, "Find Your Dream Home" hero with search, and a
  "Featured Properties" grid (Luxury Manhattan Penthouse, Modern Brooklyn
  Townhouse, Waterfront Hamptons Estate, Tribeca Industrial Loft).
- **Structure (1:1, section order):**
  1. Navbar: Properties, Agents, About, Contact, List Your Property.
  2. Hero: "Find Your Dream Home" + search.
  3. Featured Properties: 4 property cards.
  4. Why Choose Prestige Homes: "Trusted Expertise" features.
  5. Agents: agent cards.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light surfaces, **amber `amber-400`** accents.
  - Fonts: **"Inter"** + **"Playfair Display"** (Google Fonts `<link>`).
- **Recreation name:** Estatehub (kept — matches ColorLib name). App
  folder `apps/estatehub`, package `@free-react-templates/estatehub`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/estatehub-<n>/<w>/<h>`); lucide-react icons; Inter
  - Playfair Display via Google Fonts; amber accent in `@theme`;
    repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-estatehub/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/estatehub` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/estatehub`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-estatehub`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
