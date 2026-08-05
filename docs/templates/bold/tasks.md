# Bold (Colorlib Bold) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-bold`.

## Design notes (replication findings)

- **Original:** ColorLib "Bold" — startup / software marketing landing page
  (source: https://colorlib.com/wp/template/bold/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/bold/
  (HTTP 200, full rendered DOM + `css/style.css` (27KB) extracted).
- **Visual design (from DOM + CSS tokens):** startup marketing landing with
  a **coral/orange** brand (`#ff926b`), Raleway font, light (`#f8f9fa`)
  sections, achievement counters, 3 feature rows, a testimonial, and a
  lead-capture form.
- **Structure (1:1, section order):**
  1. Navbar: logo "Bold" + links Home, Dropdown (Menu One/Two/Three), Inner
     Page, Contact us, Free Templates.
  2. Hero: h1 "Another cool free template by the fine folks at colorlib" +
     blurb + CTA.
  3. Achievements: **0 M+ Members, 0 K+ Likes, 0 K+ Share** (counter-style
     stats in original).
  4. Brand trust: "Leading brands trust Bold for good" + blurb + 3 columns
     (each: heading + blurb).
  5. Feature rows: 3 alternating rows — each "Far far away Behind the Word
     Mountains" + blurb + **Learn more**.
  6. Testimonial: "Join over 1M+ people who enjoy using our app" + quote +
     **Kayla Bryant — Socia Media Manager, Digital App** (carousel in
     original).
  7. Form: "Fill out the form" + Company size selector (1 / 2 / 3+) +
     submit.
  8. Footer: About, Solutions (Studio, Creative, Design), Why Bold
     (Marketing, Social Media, Agencies, Internal, Enterprise,
     Communications), Resources (Blog, Customers, Video Showcase, Watch a
     Demo), Company (About Us, Jobs, Press) + Terms & Conditions, Privacy
     Policy + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **coral `#ff926b`** (buttons, accents); lighter `#ffa585`.
  - Light bgs `#f8f9fa`, `#f9f9f9`; dark text `#000`.
  - Font: **"Raleway"** (Google Fonts `<link>`).
  - Rounded coral buttons with white text.
- **Recreation name:** Bold (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/bold`, package
  `@free-react-templates/bold`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/bold-<n>/<w>/<h>`); lucide-react icons; Raleway via
  Google Fonts; form prevents default (no backend); coral primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-bold/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/bold` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/bold`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [x] Push `feat/template-bold`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
