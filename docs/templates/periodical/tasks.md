# Periodical (ColorLib Magazine) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-periodical`.

## Design notes (replication findings)

- **Original:** ColorLib "Magazine" — classic news/magazine blog template
  (source: https://colorlib.com/wp/template/magazine/). TEMPLATES.md has
  TWO copies (lines 270 and 2197 — duplicate rows; one recreation covers
  both; implementer marks BOTH `[x]`).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/magazine/ (HTTP
  200, 37,264 bytes; page brand "Magazine"). Master stylesheet
  `css/main.css` (50 KB) fully extracted; libs: bootstrap, owl.carousel,
  jquery-ui, nice-select, magnific-popup, animate, font-awesome,
  linearicons.
- **Screenshot:** `magazine-free-template.jpg` (1200×946, viewed in
  browser) — thin dark top bar (social icons + contact), white header with
  logo (red flower icon) + light-gray 728×90 ad placeholder, DARK navbar
  with uppercase white links (HOME, ARCHIVE, CATEGORY, POST TYPES ▼,
  ABOUT, CONTACT) + search icon; hero grid: large coffee-cup photo with
  white headline bottom-left on dark gradient + 2 smaller stacked posts
  right; white "Breaking News: Astronomy Binoculars A Great Alternative"
  strip; 2-col content below (left: post card with photo + pink category
  tag + headline + meta "Mark Waren | 03 April, 2016 | 09 Comments"; right:
  second post card). Accent hot pink/red; light-gray page bg; dark navy
  footer. Demo brands itself "Magazine"; recreation uses the NEW name
  **Periodical**.
- **Visual design (from DOM + CSS tokens + screenshot):** high-contrast
  digital magazine. Dark #04091e on top bar/nav/footer; white header and
  content cards on #ecf0f1 page bg; brand #f6214b on category tags,
  primary buttons, hover states. Poppins everywhere (body 14px/300/
  #777777). Hero text white over rgba(0,0,0,0.4) overlay at bottom-left.
  Demo copy is placeholder lorem — paraphrase into news/magazine copy
  (lifestyle, travel, fashion, science, food categories).
- **Structure (1:1, section order):**
  1. `div.header-top` (dark) — social icons left (facebook, twitter,
     dribbble, behance) + contact info right.
  2. `div.logo-wrap` (white) — logo left (col-lg-4), 728×90 ads-banner
     placeholder right (col-lg-8).
  3. Navbar (dark, uppercase) — Home, Archive, Category, Post Types
     (dropdown: Standard/Image/Gallery/Video/Audio Post), About, Contact +
     search icon.
  4. `section.top-post-area.pt-10` — featured hero: `div.single-top-post`
     with `div.feature-image-thumb.relative` + `div.overlay.overlay-bg`
     (rgba(0,0,0,.4)) + `div.top-post-details` (absolute bottom:30px
     left:40px): `h4.cat-title` pill (bg #04091e, 14px 600, white, padding
     10px 25px) + white h3/h4 headline. Screenshot shows grid: 1 LARGE
     main feature + 2 smaller stacked right.
  5. `div.news-tracker-wrap` (white, mt-10, padding 12px 15px) — h6 (500)
     "Breaking News: Astronomy Binoculars A Great Alternative".
  6. `section.latest-post-area.pb-120` — 2-col row:
     - Left col: `div.latest-post-wrap` (white card, padding 20px)
       "Latest News" + `div.single-latest-post.row.align-items-center`
       items (col-lg-5 img + col-lg-7: h4 title hover→#f6214b + meta
       "Mark Waren | 03 April, 2016 | 09 Comments"); `div.ad-widget-wrap`
       (mt-30 mb-30); `div.popular-post-wrap` (white card) "Popular
       Posts" (feature-post img+details + 2 feature-img-wrap);
       `div.relavent-story-post-wrap` (white card, mt-30) "Relavent
       Stories" (SIC — fix to "Relevant Stories") 4× thumb+detail rows.
     - Right col `div.sidebars-area`: editors-pick-widget ("Editor's
       Pick", thumb+detail list), ads-widget, newsletter-widget (h6.title
       "Newsletter" + blurb + email input + `a.primary-btn` "Subscribe"),
       most-popular-widget, social-network-widget ("Social Networks":
       pills fb #4c63a2 "983 Likes", tw #69c9ff "847 Followers", rs
       #f17300, yt #c41713 "245 Subscribers").
  7. `footer.footer-area.section-gap` (bg #04091e) — 5 widget columns:
     Top Products (col-lg-3: Managed Website, Manage Reputation, Power
     Tools, Marketing Service), Quick Links (col-lg-2), Features
     (col-lg-2), Resources (col-lg-2), Instagram Feed (col-lg-3; source
     typo "Instragram Feed" — fix) + `div.footer-bottom.row.align-items-center`
     (mt-90) copyright.
- **Design tokens (from css/main.css):**
  - Font: "Poppins", sans-serif; body 14px, 300, #777777, lh 1.625em.
  - Brand: **#f6214b** (primary-btn bg; h4 hover; category accents).
  - Dark: **#04091e** (footer, navbar, cat-title pill, top bar).
  - Page bg **#ecf0f1**; white cards padding 20px.
  - Overlay **rgba(0,0,0,0.4)**; hero text bottom 30px / left 40px.
  - `.primary-btn`: bg #f6214b, lh 42px, px 30px, #fff, 500, no border,
    transition 0.3s (hover → darker red).
  - `.cat-title`: 14px, 600, bg #04091e, #fff, padding 10px 25px.
  - Social pills: fb #4c63a2, tw #69c9ff, rs #f17300, yt #c41713 (white
    icon + count right, border-left #eee).
  - Rhythm: section-gap 120px 0; top-post pt-10; latest-post pb-120;
    footer-bottom mt-90.
- **Recreation decisions:** seeded picsum placeholders
  (`picsum.photos/seed/periodical-<n>/<w>/<h>`, ~18 seeds); lucide-react
  icons (search, menu, mail, phone, map-pin, chevron-down, rss, users,
  thumbs-up, play, calendar, message-circle) + inline SVG brand icons for
  social (facebook, twitter, dribbble, behance, youtube — NOT lucide brand
  icons); Poppins via Google Fonts `<link>`; newsletter/subscribe forms
  with zod validation; ad slots = labeled placeholder boxes; hero =
  static grid 1 large + 2 stacked (owl.carousel not needed); mobile nav
  collapse toggle with aria.

## Task outline (implementer)

- [ ] Scaffold app: copy simplest existing app → `apps/periodical`,
      package `@free-react-templates/periodical`
- [ ] `@theme` tokens: brand #f6214b, dark #04091e, page bg #ecf0f1, grays
- [ ] Poppins font link in `index.html`
- [ ] Layout: sticky/normal header (utility bar + logo/ad row + dark nav
      with dropdown + search), responsive
- [ ] Hero: 1 large feature + 2 stacked, overlay, cat pill, white headline
- [ ] Breaking news ticker strip
- [ ] Latest News list (img + title + meta, hover #f6214b)
- [ ] Ad band placeholder
- [ ] Popular Posts (feature + 2 thumbs)
- [ ] Relevant Stories (4 thumb rows)
- [ ] Sidebar: Editor's Pick, ad, Newsletter (validated), Most Popular,
      Social Networks pills
- [ ] Footer: 5 columns + copyright row
- [ ] Tests first (Vitest + Testing Library, 100% coverage), then
      implementation
- [ ] `scripts/verify-app.sh periodical` green
- [ ] PR to main, immediate squash merge; mark BOTH TEMPLATES.md dup rows
      (lines 270, 2197) `[~]`→`[x]` + surge URL; `npm run readme:status`
