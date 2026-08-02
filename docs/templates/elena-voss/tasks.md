# Elena Voss (Colorlib Elena Voss) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-elena-voss`.

## Design notes (replication findings)

- **Original:** ColorLib "Elena Voss" — photographer portfolio template
  (source: https://colorlib.com/wp/template/elena-voss/).
- **Demo DOM analyzed:** https://elenavoss-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/elena-voss/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** elegant photography
  portfolio — light neutrals, Fraunces + DM Sans fonts, "Capturing
  Moments That Last Forever" hero, a "Selected Work" gallery (Golden Hour
  Ceremony, Studio Portrait, Mountain Dawn, Fashion Editorial, Coastal
  Vows, Environmental Portrait), services, testimonials, and pricing.
- **Structure (1:1, section order):**
  1. Navbar: Portfolio, About, Services, Testimonials, Pricing, Blog,
     Gallery, Contact.
  2. Hero: "Capturing Moments That Last Forever".
  3. Selected Work: 6 work cards.
  4. About: blurb.
  5. Services: cards.
  6. Testimonials: quotes.
  7. Pricing: plans.
  8. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light neutral surfaces.
  - Fonts: **"Fraunces"** + **"DM Sans"** (Google Fonts `<link>`).
- **Recreation name:** Elena Voss (kept — matches ColorLib name; folder
  uses kebab case). App folder `apps/elena-voss`, package
  `@free-react-templates/elena-voss`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/elenavoss-<n>/<w>/<h>`); lucide-react icons;
  Fraunces + DM Sans via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-elena-voss/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/elena-voss` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/elena-voss`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-elena-voss`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
