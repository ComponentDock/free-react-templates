# Faithcommunity (Colorlib Faithcommunity) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-faithcommunity`.

## Design notes (replication findings)

- **Original:** ColorLib "Faithcommunity" — church template
  (source: https://colorlib.com/wp/template/faithcommunity/).
- **Demo DOM analyzed:** https://faithcommunity-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/faithcommunity/` returns
  404 — demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** warm church landing —
  light neutrals, Inter + Lora fonts, "A Place to Belong" hero, a "Service
  Times" section (Sunday Worship, Wednesday Bible Study, Youth Group), and
  ministries.
- **Structure (1:1, section order):**
  1. Navbar: About, Services, Events, Ministries, Sermons, Contact, Give,
     Plan Your Visit.
  2. Hero: "A Place to Belong" + **Join Us This Week**.
  3. Service Times: Sunday Worship, Wednesday Bible Study, Youth Group.
  4. Who We Are: blurb.
  5. Events: listings.
  6. Ministries: cards.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light warm neutrals.
  - Fonts: **"Inter"** + **"Lora"** (Google Fonts `<link>`).
- **Recreation name:** Faithcommunity (kept — matches ColorLib name). App
  folder `apps/faithcommunity`, package
  `@free-react-templates/faithcommunity`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/faithcommunity-<n>/<w>/<h>`); lucide-react icons;
  Inter + Lora via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-faithcommunity/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/faithcommunity` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/faithcommunity`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-faithcommunity`, open PR (source template,
      preview URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
