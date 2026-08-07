# Marlowe (ColorLib "Callie") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-marlowe` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Callie" — Blog / Magazine HTML Template
  (source: https://colorlib.com/wp/template/callie/). Listed in
  TEMPLATES.md under **Blog (60)**.
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/callie/`. DOM fetched
  (`/tmp/callie-prep/callie.html`, 46 KB) + stylesheet
  (`/tmp/callie-prep/style.css`, 27 KB) + screenshot
  (`callie-free-template.jpg`, viewed in browser + live render). All
  references verified live.
- **Visual design:** clean white magazine blog. Top nav row: social icons
  left, centered logo, aside-toggle + search buttons right; category menu
  below (HOME, LIFESTYLE ▾, FASHION ▾, TECHNOLOGY, HEALTH, TRAVEL). Hot
  posts hero: big featured image (dark gradient overlay, pink LIFESTYLE
  tag, white title) + 2 stacked posts right. Two-column: post rows (image
  40% + body: pink tags, title, JOHN DOE • 20 APRIL 2018 meta, excerpt)
  with section titles RECENT POSTS / LIFESTYLE / FASHION & TRAVEL /
  TECHNOLOGY & HEALTH + LOAD MORE; sidebar = ad placeholder, SOCIAL MEDIA
  tiles (21.2K/10.2K/5K followers), CATEGORIES with counts, NEWSLETTER
  (dashed borders + envelope watermark), POPULAR POSTS. Full-width
  INSTAGRAM 6-tile grid. Dark `#1b1c1e` footer: about + socials,
  CATEGORIES, TAGS (11), NEWSLETTER; bottom bar = nav links (Home, About
  Us, Contacts, Advertise, Privacy) + copyright. Accent = hot pink
  `#ee4266`.
- **Structure (1:1 from the preview DOM):**
  1. Nav (banner): top row — `nav-social` left (4 social icons), centered
     `nav-logo` (logo image → recreate as text wordmark "Marlowe"),
     `nav-btns` right (aside toggle + search). Menu below: HOME,
     LIFESTYLE, FASHION, TECHNOLOGY, HEALTH, TRAVEL (dropdown arrows).
     Search overlay `#nav-search` (full-width, bg `#1b1c1e`, slides down);
     aside `#nav-aside` (fixed right, max-width 360px, bg `#1b1c1e`,
     slides in from right).
  2. Hot posts (`row hot-post`): left col-md-8 `hot-post-left` = 1 large
     `post post-thumb` (image + dark gradient overlay
     `rgba(27,28,30,0)→rgba(27,28,30,.8)` + pink tag + title + meta);
     right col-md-4 `hot-post-right` = 2 stacked `post post-sm` (image +
     tag + title + meta).
  3. Main row: col-md-8 = RECENT POSTS (5 `post post-row`: image left
     40%, body right — pink category links, title, meta, excerpt), then
     LIFESTYLE (3), FASHION & TRAVEL (3), TECHNOLOGY & HEALTH (3), then
     `section-row loadmore text-center` with `primary-button` "Load More".
     col-md-4 sidebar = `aside-widget text-center` ad placeholder
     (728x90) → `social-widget` (3 tiles: Facebook 21.2K, Twitter 10.2K,
     Google+ 5K) → `category-widget` (Lifestyle 451, Fashion 230,
     Technology 40, Travel 38, Health 24) → `newsletter-widget` (email +
     SUBSCRIBE) → `post-widget` POPULAR POSTS (4 rows).
  4. Instagram (`aside-widget` w/ `galery-widget`): section-title
     "Instagram" + 6 square tiles (3 per row, hover zoom 1.2 / 1.6s).
  5. Footer (`#footer`, bg `#1b1c1e`, padding 80px top / 40px bottom):
     4 `footer-widget` cols — logo + about blurb + socials; CATEGORIES
     (5 w/ counts); TAGS (Social, Lifestyle, Blog, Travel, Technology,
     Fashion, Life, News, Magazine, Food, Health); NEWSLETTER (email +
     SUBSCRIBE). `footer-bottom` (border-top 1px `#323335`): copyright
     left + footer-nav right (Home, About Us, Contacts, Advertise,
     Privacy).
- **Design tokens (extracted from style.css):**
  - Brand: **`#ee4266`** hot pink (22 usages; primary buttons, category
    tags, hovers, active states). Dark text `#323335`, near-black
    `#1b1c1e` (footer/search/aside/page-header/gradient), meta `#97989b`,
    secondary `#353535`, line/border `#e8eaed`.
  - Fonts: **Montserrat** 400/700 + **Muli** 400/700 (Google Fonts
    `<link>`). Headings Montserrat, body Muli.
  - `.primary-button`: bg `#ee4266`, white text, inset shadow `0 0 0 2px
#ee4266`, hover → transparent bg + pink text (flat, no radius).
    `.secondary-button`: bg `#353535`, same pattern.
  - `.section-title`: uppercase 16px inline-block on a 2px `#e8eaed` rule
    (title z-20 above line z-10).
  - `.post-category a`: 12px w700 UPPERCASE `#ee4266`, comma-separated.
    `.post-meta li`: 12px UPPERCASE `#97989b`, "•" separators, hover pink.
  - Post body overlap: `.post .post-body { margin: -50px 0 0 3%; padding:
5%; background: #fff; z-index: 10 }`. Image zoom hover scale(1.2),
    1.6s, overflow hidden.
  - `post-thumb` gradient: `linear-gradient(180deg, rgba(27,28,30,0) 0%,
rgba(27,28,30,.8) 90%)`, body absolutely over image.
  - Newsletter widget: dashed 2px `#e8eaed` L/R borders, 160px rotated
    (13deg) envelope watermark `#e8eaed`; footer variant borderless,
    watermark `#323335`.
  - Social tile colors: `#225b99` fb, `#00adf2` tw, `#dc4d2d` g+, `#d341b2`
    insta, `#cc2127` pin. Tiles: 33.33% width, white text, padding 30px,
    icon 30px + label 14px w700.
  - Footer: text `#97989b`, links hover `#ee4266`, `.footer-title` 14px
    UPPERCASE white, `footer-bottom` border-top `#323335`.
- **Recreation name:** Marlowe (NEW name, differs from ColorLib "Callie").
  App folder `apps/marlowe`, package `@free-react-templates/marlowe`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/marlowe-<n>/<w>/<h>`: hot-post feature 800×500,
  hot-post right 400×250, post-row 400×300, sidebar thumbs 100×100,
  insta tiles 300×300); lucide-react icons (Search, Menu, X, Mail; brand
  socials as inline SVG); Montserrat + Muli via Google Fonts `<link>`;
  logo image → text wordmark "Marlowe"; ads → bordered placeholder boxes
  ("Sample Ad 728x90" / "300x250"); section title = uppercase text over a
  grey rule (border-t + inline bg). No assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-marlowe/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/marlowe` (copy a section-rich landing app pattern,
      e.g. Aurora; rename package to `@free-react-templates/marlowe`;
      run `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Navbar (socials +
      centered wordmark + menu + search overlay + aside panel), HotPosts,
      PostRow + SectionTitle, LoadMore, Sidebar (AdPlaceholder,
      SocialWidget, CategoriesWidget, NewsletterWidget, PopularPosts),
      InstagramStrip, Footer (4 widgets + bottom bar).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh marlowe` in
      FAST_MODE).
- [ ] Push `feat/template-marlowe`, open PR (source template ColorLib
      "Callie", preview URL reachable, design tokens, what differs: name,
      placeholder images, text logo, placeholder ads), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-marlowe.surge.sh) + homepage; run
      `npm run readme:status`; push.
