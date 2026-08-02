# Brightsmile (Colorlib Brightsmile) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-brightsmile`.

## Design notes (replication findings)

- **Original:** ColorLib "Brightsmile" — dental clinic template
  (source: https://colorlib.com/wp/template/brightsmile/).
- **Demo DOM analyzed:** https://brightsmile-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/brightsmile/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** light dental-clinic
  landing with **yellow** accents (`yellow-400`), Plus Jakarta Sans font,
  "Your Smile Deserves the Best Care" hero, a "Comprehensive Dental Care"
  6-card grid (General Dentistry, Cosmetic Dentistry, Dental Implants,
  Orthodontics, Teeth Whitening, Emergency Care), team, why-us,
  testimonials, and pricing.
- **Structure (1:1, section order):**
  1. Navbar: About, Services, Team, Why Us, Testimonials, Pricing, Blog,
     Contact.
  2. Hero: "Your Smile Deserves the Best Care".
  3. Services: "Comprehensive Dental Care" grid.
  4. Team: doctor cards.
  5. Why Us: feature list.
  6. Testimonials: quotes.
  7. Pricing: plans.
  8. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light surfaces, **yellow `yellow-400`** accents.
  - Font: **"Plus Jakarta Sans"** (Google Fonts `<link>`).
- **Recreation name:** Brightsmile (kept — matches ColorLib name). App
  folder `apps/brightsmile`, package `@free-react-templates/brightsmile`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/brightsmile-<n>/<w>/<h>`); lucide-react icons; Plus
  Jakarta Sans via Google Fonts; yellow accent in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-brightsmile/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/brightsmile` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/brightsmile`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-brightsmile`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
