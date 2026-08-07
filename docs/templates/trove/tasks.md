# Trove (ColorLib Bounty) — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-trove` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Bounty" — blog/magazine template
  (source: https://colorlib.com/wp/template/bounty/).
- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/bounty/
  — live DOM fetched, `css/main.css` parsed for tokens; screenshot
  `bounty-free-template.jpg` (in TEMPLATES.md) used as visual cross-check.
  NOTE: the preview `<title>` says "Ruft Blog" (shared stylesheet/leftover
  naming) but the rendered content matches the Bounty screenshot 1:1 —
  same post titles ("2nd Gen Smoke Alarm get up from sleep", "An Stormy
  Evening"), author "Marvel Maison", date "13th Oct, 2018", astronomer
  excerpt. The preview IS the Bounty design; mention this in the PR.
- **Visual design:** clean white blog/magazine layout with purple accents.
  Header: purple script logo "Bounty" (text-style image in the original —
  render as styled text "Trove") + centered search bar, then an uppercase
  nav row (HOME / CATEGORY / ARCHIVE / PAGES ▾ / BLOG ▾ / CONTACT).
  Full-width stories strip (thumbnails + title + uppercase date, thin
  dividers), then 3 large image columns with bottom-left white overlay
  (h2 title, avatar + author + date, excerpt), then a 2-column post grid
  of white cards overlapping their images (h4 indigo title, excerpt, meta
  row: date + comments), then pagination (01–04, 09). Right sidebar: 4
  dark charcoal `#1e1c27` widgets — About (avatar, "Peter Anderson", bio,
  socials), Popular Posts (8 rows), Post Categories (6 links + counts),
  Post Tags (9 pills). Black footer: About Us + Newsletter form, Instagram
  Feed 8-image grid, Follow Us socials, copyright bar with "Made with
  Colorlib" credit.
- **Structure (1:1, section order):**
  1. Header-top: logo left, search trigger icon right (opens search
     overlay).
  2. Nav menu (below header-top): Home, Category, Archive, Pages ▾,
     Blog ▾, Contact — uppercase, dark text, hover → `#415094`.
  3. Search overlay: full-width purple-gradient
     (`#7c32ff → #c738d8`) bar, white placeholder "Search or enter
     website name.", close icon.
  4. Top stories strip (`.top-stories-area`): owl carousel, 12 items —
     `.stories-thumb` img + `.stories-details` (h6 title + uppercase
     date); items `padding: 0 20px`, 1px `rgba(65,80,148,0.15)`
     border-right.
  5. Featured post slider (`.post-slider-area`): owl carousel, 6 slides
     — full-width `.post-thumb` img + `.post-details` (absolute
     bottom-left, padding 30px): h2 30px white title, `.post-content`
     row: `.post-meta` (avatar 60px circle with `margin-top:-25px` +
     h6 author "Marvel Maison" + uppercase 12px date, separated by 1px
     `rgba(255,255,255,0.25)` border) + `.details` excerpt (white).
  6. Post area (`.post-area`): 8× `.single-post-item` in `col-lg-6`
     (2-col grid) — `.post-thumb` img + `.post-details` white panel
     (absolute `left:30px; bottom:-30px`, padding 30px, shadow
     `0 10px 30px rgba(65,80,148,0.1)`): h4 20px `#415094` title,
     excerpt, `.blog-meta` row: `.m-gap` "March 14, 2018" + comments
     count "05" (uppercase, `#828bb2`, icon + text, 20px gaps).
  7. Pagination (`.blog-pagination`): Previous · 01 02 03 04 09 · Next;
     active/hover page link gets the purple-gradient background.
  8. Sidebar (`col-lg-4`, `.sidebar` margin-top 80px): 4×
     `.single-widget` (bg `#1e1c27`, 1px #eee border, padding 30px):
     - `.protfolio-widget`: avatar, h4 "Peter Anderson" (white, bottom
       border `rgba(130,139,178,0.4)`), bio paragraph, `.social-links`
       (4 white icons, hover → gradient).
     - `.popular-posts-widget`: tab menu (2 tabs, 12px uppercase, active
       underline) + 8 `.single-popular-post` rows (thumb 80px + h6 white
       14px title + uppercase 12px date), rows separated by 1px
       `rgba(130,139,178,0.4)`.
     - `.category-widget`: h4 "Post Categories" + 6 links with counts —
       International (56), Tours and Travels (45), Cooking Tips (23),
       Life Style and Fashion (72), Organic News (37), Games and Sports
       (19); `#828bb2`.
     - `.tags-widget`: h4 "Post Tags" + 9 pills (bg
       `rgba(130,139,178,0.3)`, padding 5px 10px, `#828bb2` weight 300,
       hover → gradient bg): Lifestyle, Art, Adventure, Food,
       Technology (original typo "Techlology" → fix), Fashion,
       Architecture, Food (dup — dedupe), Technology (dup — dedupe).
  9. Footer (`.footer-area`, bg `#000`): 4× `col-lg-3` widgets —
     About Us (text), Newsletter (email input + `.sub-btn` gradient
     subscribe button, absolute right/top, border-radius 0), Instagram
     Feed (8-image grid), Follow Us (`.f_social` white icons, hover
     `#7c32ff`); `.footer-bottom` row: copyright + "Made with Colorlib".
- **Design tokens (from `css/main.css`):**
  - Fonts: body **Roboto** 400/14px, line-height 24px, `#828bb2`;
    headings **Rubik** 500, line-height 1.2em, #000 (h2 30px, h4 18px).
  - Primary: gradient `linear-gradient(90deg, #7c32ff 0%, #c738d8 100%)`
    (search overlay bg, subscribe btn, pagination active, tag/social
    hover).
  - Secondary **#415094** (post card titles, nav hover, search-trigger
    links); body text **#828bb2**; widget bg **#1e1c27**; footer bg
    **#000**; white cards with shadow `0 10px 30px rgba(65,80,148,0.1)`.
  - Hover: images `scale(1.1)` (0.3s); titles → gradient text.
- **Recreation name:** Trove (NEW name, differs from ColorLib "Bounty").
  App folder `apps/trove`, package `@free-react-templates/trove`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/trove-<n>/<w>/<h>`: stories 160×120, slider
  1600×700, post cards 800×500, avatars 120×120, instafeed 90×90);
  lucide-react icons (Search, X, Calendar, MessageCircle, socials — the
  original uses FontAwesome; use the closest available lucide social
  icons); Roboto + Rubik via Google Fonts `<link>` in `index.html`;
  `#7c32ff`, `#c738d8`, `#415094`, `#828bb2`, `#1e1c27`, `#000` in
  `@theme`; logo rendered as styled script text "Trove"; carousels may be
  static grids (structure faithful) or a simple auto-rotate; search
  overlay toggled by the header search icon.
- **Documented copy deviations:** fix tag typo "Techlology" →
  "Technology"; dedupe the duplicated "Food"/"Technology" tags; the
  original repeats the same titles/excerpts on every card — vary per card
  (same style/kind of content); nav dropdowns (Pages/Blog) may be plain
  links.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-trove/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above, incl. newsletter form
      validation).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/trove` (copy a section-rich landing app pattern, e.g.
      Aurora; rename package to `@free-react-templates/trove`; run
      `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (logo + nav +
      search trigger + search overlay), StoriesStrip, FeaturedSlider,
      PostGrid (cards + meta row), Pagination, Sidebar (about/popular/
      categories/tags widgets), Footer (newsletter form validation).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow
      → spec:validate (or `scripts/verify-app.sh trove` in FAST_MODE).
- [ ] Push `feat/template-trove`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-trove.surge.sh) + homepage; run
      `npm run readme:status`; push.
