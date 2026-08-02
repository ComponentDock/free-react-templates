# Barberkraft (Colorlib Barberkraft) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-barberkraft`.

## Design notes (replication findings)

- **Original:** ColorLib "Barberkraft" — barbershop template
  (source: https://colorlib.com/wp/template/barberkraft/).
- **Demo DOM analyzed:** https://barberkraft-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/barberkraft/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** dark-themed barbershop
  landing with **amber** accents (`amber-400`), Space Grotesk font,
  "Crafting Style, Building Confidence" hero, a "Our Service Menu"
  haircut grid (Classic Haircut, Skin Fade, Buzz Cut, Long Hair Cut), and
  barber profile cards.
- **Structure (1:1, section order):**
  1. Navbar: About, Services, Barbers, Pricing, Blog, Contact, Book Now.
  2. Hero: "Crafting Style, Building Confidence" + **Book Your
     Appointment**.
  3. Services: "Our Service Menu" + haircut cards.
  4. Barbers: profile cards.
  5. Pricing: plans.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Dark surfaces, **amber `amber-400`** accents.
  - Font: **"Space Grotesk"** (Google Fonts `<link>`).
- **Recreation name:** Barberkraft (kept — matches ColorLib name). App
  folder `apps/barberkraft`, package `@free-react-templates/barberkraft`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/barberkraft-<n>/<w>/<h>`); lucide-react icons;
  Space Grotesk via Google Fonts; amber accent in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-barberkraft/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/barberkraft` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/barberkraft`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-barberkraft`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
