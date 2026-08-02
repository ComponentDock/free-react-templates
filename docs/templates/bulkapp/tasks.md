# BulkApp (Colorlib BulkApp) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-bulkapp`.

## Design notes (replication findings)

- **Original:** ColorLib "BulkApp" — app landing / software showcase site
  (source: https://colorlib.com/wp/template/bulkapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/bulkapp/
  (HTTP 200, full rendered DOM + `css/style.css` (71KB) extracted).
- **Visual design (from DOM + CSS tokens):** app landing with a **purple
  gradient** brand (`#7249fb` → `#bc2bff`), Open Sans + Roboto fonts, light
  (`#f9f9ff`) sections, phone-mockup hero, 4 feature tiles, 2 about splits,
  pricing, screenshots, testimonials, and a download CTA.
- **Structure (1:1, section order):**
  1. Navbar: logo "BulkApp" + links Home, FEATURES, VIDEO, PRICING, SCREENS,
     Pages, Elements, Blog, Contact.
  2. Hero (`home_banner_area`): h1 "The Best App in the Universe" + blurb +
     **Explore Now** + phone mockup.
  3. Features (`feature_area p_120`): "Unique Features" + blurb + 4 tiles
     (Maintenance icon + title + blurb).
  4. About (`interior_area` + `interior_two`): 2 x "We Believe that Interior
     beautifies the Total Architecture" + blurb + **See Details**.
  5. Pricing (`price_area`): "Pricing Table" + **Standard £199 — For the
     individuals** + 5 features (2.5 GB Free Photos, Secure Online Transfer
     Indeed, Unlimited Styles for interface, Reliable Customer Service,
     Manual Backup Provided) + **Purchase Plan**.
  6. Screenshots (`screenshot_area`): "Unique Screenshots" + image row.
  7. Testimonials (`testimonials_area`): "Testimonials" + quote +
     **Mark Alviro Wiens — CEO at Google**.
  8. Download CTA (`download_app_area`): store buttons.
  9. Latest news (`latest_news_area`): blog-style cards.
  10. Footer: link columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **purple gradient `#7249fb` → `#bc2bff`**; supporting `#6247ea`.
  - Light bgs `#f9f9ff`; dark footer `#222222`.
  - Fonts: **"Open Sans"** + **"Roboto"** (Google Fonts `<link>`).
  - Purple gradient buttons with white text.
- **Recreation name:** BulkApp (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/bulkapp`, package
  `@free-react-templates/bulkapp`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/bulkapp-<n>/<w>/<h>`); lucide-react icons; Open Sans
  - Roboto via Google Fonts; purple gradient primary in `@theme`;
    repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-bulkapp/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/bulkapp` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/bulkapp`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-bulkapp`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
