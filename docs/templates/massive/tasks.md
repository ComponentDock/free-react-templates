# Massive (Colorlib Massive) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-massive`.

## Design notes (replication findings)

- **Original:** ColorLib "Massive" — Html5 app landing template
  (source: https://colorlib.com/wp/template/massive/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/massive/
  (HTTP 200, full rendered DOM + `style.css` (61KB) extracted).
- **Visual design (from DOM + CSS tokens):** app landing with a **teal/cyan
  gradient** brand (`#00e2d9` → `#1193d4`), Open Sans + Libre Baskerville
  fonts, a "Welcome To Massive App Store" hero, 4 feature tiles, app split,
  video band, screenshots, team, and pricing.
- **Structure (1:1, section order):**
  1. Navbar: logo + SignUp, home, Features, App, Video, Screenshot, Team,
     Pricing, Contact.
  2. Hero: h1 "Welcome To Massive App Store." + blurb + **Get App Now /
     Discover More**.
  3. Features (`features-top-area`): "welcome to app features" + tiles —
     Rapidiously monetize..., **Premium Quality, Chat with love, 3d
     Display** + **Learn More**.
  4. App split (`app-area sky-gray-bg`): "all you want from app" +
     **Awesome Beauty Camera, Live Chat Support, Retina Ready**.
  5. Video (`video-area`): "Description With Video" + **Play The Video**.
  6. Work (`work-area`): how-it-works steps.
  7. Screenshots (`screenshot-area gray-bg`): image row.
  8. Testimonials (`testmonial-area`): quote carousel.
  9. Download (`download-area white`): store buttons.
  10. Team (`team-area`): member cards.
  11. Pricing + Contact.
  12. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **teal gradient `#00e2d9` → `#1193d4`**; accents `#81ee8e`,
    `#2deab6`, `#00d7f2`, `#00c9fd`.
  - Dark sections; `sky-gray-bg` light sections.
  - Fonts: **"Open Sans"** + **"Libre Baskerville"** (Google Fonts
    `<link>`).
  - Gradient buttons with white text.
- **Recreation name:** Massive (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/massive`, package
  `@free-react-templates/massive`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/massive-<n>/<w>/<h>`); lucide-react icons; Open Sans
  - Libre Baskerville via Google Fonts; video button as styled play button;
    teal gradient primary in `@theme`; repo-standard Navbar (dark-mode
    toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-massive/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/massive` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/massive`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-massive`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
