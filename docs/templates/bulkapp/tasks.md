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
     Pages, Elements, Blog, Contact (recreated as Home, Features, Pricing,
     Screens + dark-mode toggle).
  2. Hero (`home_banner_area`): h1 "The Best App in the Universe" + blurb +
     **Explore Now** + phone mockup.
  3. Features (`feature_area p_120`): "Unique Features" + blurb + 4 tiles
     (icon + "Maintenance" title + blurb — the original repeats the
     Maintenance tile x4, kept 1:1).
  4. About (`interior_area` + `interior_two`): 2 x "We Believe that Interior
     beautifies the Total Architecture" + blurb + **See Details**; the second
     section embeds the product tour video (`video_area`, thumbnail + play
     button).
  5. Pricing (`price_area`): "Pricing Table" + the same **Standard £199 — For
     the individuals** card rendered three times in a three-column row (5
     features: 2.5 GB Free Photos, Secure Online Transfer Indeed, Unlimited
     Styles for interface, Reliable Customer Service, Manual Backup Provided)
     - **Purchase Plan** (kept 1:1).
  6. Screenshots (`screenshot_area`): "Unique Screenshots" + image row.
  7. Testimonials (`testimonials_area`): "Testimonials" + quote +
     **Mark Alviro Wiens — CEO at Google**.
  8. Download CTA (`download_app_area`): "Download This App Today!" + store
     buttons ("Available on App Store" / "Available on Google Play").
  9. Latest news (`latest_news_area`): "Latest News" + 3 article cards (date,
     title, blurb).
  10. Footer: "Top Products" + "Newsletter" + "Instagram Feed" columns,
      social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **purple gradient `#7249fb` → `#bc2bff`** (buttons, accents);
    supporting `#6247ea`.
  - Light bgs `#f9f9ff`; dark footer `#222222`; body text `#777777`.
  - Fonts: body **"Roboto"**, headings **"Open Sans"** (Google Fonts `<link>`).
  - Buttons: gradient bg, white text, `border-radius: 5px`, padding `0 45px`.
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
- [x] Refine spec with replication findings (Video, Download CTA, Latest
      News requirements; 3-card pricing note).
- [x] Create `apps/bulkapp` (copied the Bold landing app pattern; renamed
      package to `@free-react-templates/bulkapp`).
- [x] TDD: tests for each section component (14 tests, all green).
- [x] Implement components (green) at 100% coverage.
- [x] `npm install` at root so package-lock.json registers the workspace.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-bulkapp`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
