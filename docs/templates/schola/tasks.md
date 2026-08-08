# Academix (Colorlib Academix) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-academix`.

## Design notes (replication findings)

- **Original:** ColorLib "Academix" — education template
  (source: https://colorlib.com/wp/template/academix/).
- **Demo DOM analyzed:** https://academix-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/academix/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** modern education landing
  — light gray neutrals with dark-mode support, DM Sans + Space Grotesk
  fonts, "Forge Your Future with Expert-Led Courses" hero, course cards, a
  "Browse by Category" grid (Software Engineering, Creative Design, Digital
  Marketing, Data & Analytics, Cloud & DevOps, Leadership & Management,
  Cybersecurity), instructors, and pricing.
- **Structure (1:1, section order):**
  1. Navbar: Courses, Categories, Instructors, Pricing, About, Sign in,
     Get Started.
  2. Hero: "Forge Your Future with Expert-Led Courses" + CTA.
  3. Courses: "Complete Machine Learning & AI Bootcamp" cards.
  4. Categories: "Browse by Category" grid.
  5. Instructors: profile cards.
  6. Pricing: plans.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light gray neutrals (`gray-50/100/900`), dark-mode aware (`dark:`
    classes); accent category colors (red, pink, cyan, violet tiles).
  - Fonts: **"DM Sans"** + **"Space Grotesk"** (Google Fonts `<link>`).
- **Recreation name:** Academix (kept — matches ColorLib name). App folder
  `apps/academix`, package `@free-react-templates/academix`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/academix-<n>/<w>/<h>`); lucide-react icons; DM Sans
  - Space Grotesk via Google Fonts; repo-standard Navbar (dark-mode toggle)
  - Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-academix/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/academix` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/academix`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-academix`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
