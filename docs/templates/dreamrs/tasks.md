# Dreamrs (Colorlib Dreamrs) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-dreamrs`.

## Design notes (replication findings)

- **Original:** ColorLib "Dreamrs" — real estate / architecture template
  (source: https://colorlib.com/wp/template/dreamrs/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dreamrs/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** real-estate landing with a
  **red** brand (`#ff3334`) on light lavender-gray backgrounds (`#f9f9ff`,
  `#f0e9ff`), Poppins font, a "Proparties Now In City" hero, and property
  cards with "learn More" CTAs.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Blog, Contact.
  2. Hero: "Proparties Now In City" + **learn More**.
  3. About: "Hello City We are leader in proparties." + blurb.
  4. Our Project: "Hello City We are leader in Projects." + property
     cards (image + title + blurb + learn more).
  5. Testimonials: "Etiam tortor aliquet habitan" quote cards.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff3334`** (buttons, accents); `#415094` secondary.
  - Light backgrounds `#f9f9ff`, `#f0e9ff`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
- **Recreation name:** Dreamrs (kept — matches ColorLib name). App folder
  `apps/dreamrs`, package `@free-react-templates/dreamrs`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/dreamrs-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; forms prevent default (no backend); red primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-dreamrs/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/dreamrs` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/dreamrs`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-dreamrs`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
