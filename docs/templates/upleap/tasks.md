# Upleap (Colorlib GaaS) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/upleap`
> (<https://upleap.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-upleap`.

## Design notes (replication findings)

- **Original:** ColorLib "GaaS" — software-as-a-service landing page
  (source: https://colorlib.com/wp/template/gaas/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/gaas/
  (HTTP 200, full rendered DOM + `css/style.css` (95KB) extracted).
- **Visual design (from DOM + CSS tokens):** SaaS landing with a **purple**
  brand (`#8252fa`) + **pink** accent (`#eca2f1`), Rajdhani + Roboto fonts,
  a "Mass People Oriented Software" hero, 3 feature tiles, repeated split
  rows, and pricing.
- **Structure (1:1, section order):**
  1. Navbar: logo "Upleap Software" + Home, Features, Pricing, Pages, Blog,
     Contact + **free trial**.
  2. Hero (`home_banner_area`): h1 "Mass People Oriented Software" + blurb +
     **Get Started / watch the video**.
  3. Features (`features_area`): "Exclusive Stunning Features — A Complete
     Software Based Website" + blurb + **Start Free Trial Now!**.
  4. Feature tiles: **Stunning Visuals** x3 — **Design Trends, Development,
     Delivery** (icon + blurb).
  5. Splits (`recent_update_area`): 3 x "Modern Daesign Trends / We Believe
     that Inner beauty Lasts Long" + blurb + **Learn More**.
  6. Features Specs (`big_features`): "Features Specifications — Amazing
     Features That make it Awesome!" + blurb + more split rows.
  7. Pricing (`price_area`): plans + purchase buttons.
  8. Brands (`brand_area`): logo strip.
  9. Impress band (`impress_area`): CTA.
  10. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **purple `#8252fa`**; **pink `#eca2f1`** accent; yellow
    `#f8b600`.
  - Dark `#222222`; light `#f9f9ff`; muted `#777777`.
  - Fonts: **"Rajdhani"** + **"Roboto"** (Google Fonts `<link>`).
  - Purple buttons with white text.
- **Recreation name:** **Upleap** — an original name that evokes the software
  growth pitch; it must not reuse the source design name (AGENTS.md rule 5).
  The design first shipped as `apps/gaas` and was renamed to `apps/upleap`
  (package `@free-react-templates/upleap`).
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/upleap-<n>/<w>/<h>`); lucide-react icons; Rajdhani +
  Roboto via Google Fonts; video button as styled play button; purple
  primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-upleap/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/upleap` (copy the section-rich landing app pattern —
      Favison; rename package to `@free-react-templates/upleap`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [x] Push `feat/template-upleap`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/upleap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/upleap/public/CNAME` = `upleap.free.componentdock.com`
  and the package `homepage` = `https://upleap.free.componentdock.com`.
