# Apps (Colorlib Apps) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-apps`.

## Design notes (replication findings)

- **Original:** ColorLib "Apps" — app landing / software showcase site
  (source: https://colorlib.com/wp/template/apps/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/apps/
  (HTTP 200, full rendered DOM + `css/main.css` (37KB) extracted).
- **Visual design (from DOM + CSS tokens):** app landing with a **cyan**
  brand (`#42d1ff`), Poppins font, light (`#f9f9ff`) sections, pill-shaped
  buttons, category cards, a 3-tile services grid, 3 pricing plans, FAQ +
  stats, and a download CTA.
- **Structure (1:1, section order):**
  1. Navbar: logo "Apps" + links Home, Service, feature, price, Faq, Pages,
     Generic, Elements.
  2. Hero (`banner-area`): h1 "The Best App in the Universe" + blurb +
     **Load More Item**.
  3. Categories (`cat-area`): "Latest News from all categories" + 3 cards —
     **Maintenance, Residental Service, Commercial Service** (icon + title +
     blurb).
  4. About (`about-area`): "We Believe that Interior beautifies the Total
     Architecture" + blurb + **see details**.
  5. Services (`service-area`): "Some Features that Made us Unique" + 3
     tiles — **Expert Technicians, Professional Service, Great Support**.
  6. Video band (`video-area`): "Being unique is the preference" + play
     button (Youtube popover in original).
  7. Features (`feature-area`): "Some Features that Made us Unique" (second
     pass, icon tiles).
  8. Pricing (`price-area`): "Choose the Perfect Plan for you" + **Standard
     £199 / Business £399 / Ultimate £499** — each: audience line, 5
     features (2.5 GB Free Photos, Secure Online Transfer Indeed, Unlimited
     Styles for interface, Reliable Customer Service, Manual Backup
     Provided) + **Purchase Plan**.
  9. FAQ (`faq-area`): "Frequently Asked Questions" + 3 Q&As (Are your
     Templates responsive? / Does it have all the plugin as mentioned? /
     Can i use the these theme for my client?) + stats: **5962 Projects
     Completed, 2394 New Projects, 1439 Tickets Submitted, 933 Cup of
     Coffee**.
  10. CTA (`call-to-action-area`): "Download This App Today!" + blurb +
      **Available on App Store / Available on Play Store**.
  11. Footer: **Top Products** (Managed Website, Manage Reputation, Power
      Tools, Marketing Service) + **Newsletter** (subscribe input) +
      **Instragram Feed** + social + copyright.
- **Design tokens extracted from `main.css`:**
  - Primary **cyan `#42d1ff`** (buttons `.primary-btn`, accents); supporting
    `#4cd3e3`, `#38a4ff`.
  - Light bgs `#f9f9ff`, `#f1f1f1`; dark footer `#222222`; muted `#777777`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
  - `.primary-btn`: height 42px, padding 0 40px, **border-radius 25px**
    (pill), white text.
- **Recreation name:** Apps (matches ColorLib name — distinct from existing
  app names; package-safe lowercase). App folder `apps/apps`, package
  `@free-react-templates/apps`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/apps-<n>/<w>/<h>`); lucide-react icons; Poppins via
  Google Fonts; video band as styled play button (no actual video); FAQ as
  accessible disclosure accordion; cyan primary in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-apps/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/apps` (copy the section-rich landing app pattern —
      Appru; rename package to `@free-react-templates/apps`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-apps`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
