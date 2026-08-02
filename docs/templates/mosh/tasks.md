# Mosh (Colorlib Mosh) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-mosh`.

## Design notes (replication findings)

- **Original:** ColorLib "Mosh" — creative business template
  (source: https://colorlib.com/wp/template/mosh/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/mosh/
  (HTTP 200, full rendered DOM + `style.css` (33KB) extracted).
- **Visual design (from DOM + CSS tokens):** creative business site with a
  **blue** brand (`#4a7aec`), Roboto font, a "A Clean and Modern Template"
  hero, 6 numbered highlight cards, clients strip, services, and feature
  cards.
- **Structure (1:1, section order):**
  1. Navbar: logo "Mosh" + Home, Pages, About Us, Services, Portfolio,
     Blog, Contact + **Login / Register**.
  2. Hero: h1 "A Clean and Modern Template" + **Get your freebie template
     now!**.
  3. Highlights: 6 numbered cards — **01. No1 in Sales!, 02. Online
     Marketing, 03. Modern Design, 04. No1 in Sales!, 05. Online Marketing, 06. Modern Design** + **Discover More**.
  4. Clients: "clients / All our clients love our work" + logo strip.
  5. Services: "What you get if you start your business with us" +
     **Development, Design, SEO** + blurb.
  6. Feature cards: **No1 in Sales!, Documentation inside, Modern Design,
     Marketing Strategist**.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#4a7aec`**; light blue `#a2baff`.
  - Dark text `#211b31`, `#404551`; light gray bgs.
  - Font: **"Roboto"** (Google Fonts `<link>`).
  - Blue buttons with white text.
- **Recreation name:** Mosh (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/mosh`, package
  `@free-react-templates/mosh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/mosh-<n>/<w>/<h>`); lucide-react icons; Roboto via
  Google Fonts; blue primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-mosh/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/mosh` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/mosh`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-mosh`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
