# Herald (ColorLib "Ednews") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-herald` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Ednews" — news/magazine template
  (source: https://colorlib.com/wp/template/ednews/). Listed in TEMPLATES.md
  (Blog section, line 256).
- **Preview URL:** https://preview.colorlib.com/theme/ednews/ — reachable.
  Fetched: `/tmp/ednews/index.html` (64 KB, 1174 lines), `common/styles.css`
  (93 KB), `fonts/ionicons.css` (57 KB), `plugin-frameworks/bootstrap.css`
  (192 KB). Screenshot `ednews-free-template.jpg` (1200×946, viewed in
  browser). Preview DOM and screenshot agree — navy/white news portal,
  bento hero grid, breaking-news tag, video strip.
- **Visual design:** classic desktop news portal. Deep navy
  (`#0C0E68` / `#0A2D8B` / `#050658`) + white; red accent ONLY on the
  BREAKING NEWS tag; white cards with soft shadows on white content rows;
  navy section bands behind hero, video strip, footer; uppercase bold
  headlines over dark photo gradients; meta rows with small
  clock/user/comment/eye icons; brand-color social rows (FB #4270E8, TW
  #39CBF0, GOOGLE #F63F39, RSS #EDAA15). Dense, newspaper-like, high
  contrast.
- **Structure (1:1 from the preview DOM):**
  1. Top utility bar `header .top-header` — border-bottom #ddd; left:
     "Stockholm, Sweden [cloud] 15 °C" · "Thursda, 24 May, 2018" · "09:00
     AM" (li dividers 1px #ccc); right: 5 social icon links (FB, TW,
     Pinterest, Google, RSS).
  2. Middle header `header .middle-header` (mtb-20) — row: `col-sm-4` logo
     (img logo-black.png, h-24) · `col-sm-8` ad banner
     `div.banner-area.dplay-tbl.plr-30.color-white` (bg image
     banner-1-800x200 + black overlay .5): h5 "realestate.com.au" + h6
     subtitle (left cell) + `a.btn-fill-white.btn-b-sm` "READ MORE" (right
     cell).
  3. Bottom nav `header .bottom-menu` — bg #0A2D8B, white text; hamburger
     (`ion-navicon`, mobile only); `ul.main-menu`: HOME · BUSINESS · SPORT ·
     POLITICS · TRAVEL · LIFESTYLE · CULTURE · TECH · VIDEO · FEATURES, each
     `li.drop-down` (chevron) → dropdown (min-w 180px, bg #0A2D8B, items
     border-top #0C0E68, hover bg #0C0E68 + translateX(4px)) with PAGE 1 /
     PAGE 2; hover underline 3px #fff scaleX 0→1; mobile slide-down
     `visible-menu` block.
  4. Breaking news + search `section.pt-0.bg-primary` → container ptb-10 →
     row: `col-lg-9` = `a.btn-fill-red.btn-b-md` "**BREAKING NEWS**" +
     `a.color-grey.hover-grey` ticker headline; `col-lg-3` = `form.abs-form`
     (input placeholder "Search", h-35, radius 3, border #777, color #eee,
     focus #eee) + search button (`ion-ios-search`).
  5. Hero slider `div.plr-50.h-600x.oflow-hidden` (h-md-800x / h-xs-1000x):
     left `w-60 w-md-100 h-100` = 2 stacked `w-50 h-100` cards (bg-1
     slider-1-550x600, bg-2 slider-2-550x600); right `w-40 h-100` = 2
     stacked `h-50` cards (bg-3 slider-3-600x300, bg-4 slider-4-600x300).
     Each: `.bg-grad-layer-6:after` linear-gradient(to top, #000,
     rgba(0,0,0,.4) 60%) opacity .8; overlay `div.abs-blr.color-white.p-20`:
     `h3.t-upper` bold headline + meta ul (date / author / 15 comments / 105
     views).
  6. Content row 1: main `col-lg-8` — TODAY FEATURED `card-view` (h4.p-title,
     img 700×400, h3 headline, meta, excerpt) + 6 × `sided-250x.card-view`
     (250×250 img left, h4 + meta right; last no mb). Sidebar `col-lg-4`:
     STAY CONNECT social card (4 brand-color rows, white square icon chip +
     bold count + "followers", hover → navy), news list card (8 × 100×100 +
     h5 + date/views; NOTE original reuses "STAY CONNECT" heading — rename
     to e.g. "RECENT NEWS", record deviation), review card (400×300 img +
     h4 + meta + `a.color-blue` "Judge Overseeing: 9.2/10").
  7. Video `section.bg-primary.color-white.pb-20` — `h4.p-title.in`
     "**FEATURED VIDEO**" (fix original typo "FEATIRED"; `.in` = after #777,
     before #fff) + 4 × `col-md-3` video cards (300×300 img +
     `.hover-video` play circle border 2px #fff, hover translate -30%,-30%
     over dark overlay; h5 + meta).
  8. Content row 2: main `col-lg-8` — POLITICS card (lead: 400×300 img +
     h4 + meta + excerpt; divider `brdr-grey-1`; 4 × `brdr-l-grey-2.pl-20`
     mini headlines + meta), SPORT card (same), 2×2 grid (LIFESTYLE,
     BUSINESS, CULTURE, TECH — each: 400×300 img + h4 + meta + divider +
     3 paragraphs). Sidebar: MOST READ (6 × 100×100 + h5 + date/views),
     ARTICLES BY AUTHOR (4 × circular 100×100 avatar + name + "Reporter"),
     banner card `.bg-7` (banner-2-300x300 bg + dark layer: h3 "REAL
     ESTATE" + blurb + white READ MORE), NEWSLETTER card (h4 + blurb + 100×150
     portrait + `form.form-sm` email input (h-35, border #ccc, radius 3) +
     `button.btn-fill-primary.btn-b-sm` "SUBSCRIBE NOW").
  9. Footer `footer.bg-primary.color-ccc.pt-50` (bg #0C0E68 !important; faint
     `bg-map.opacty-1` map overlay): QUICK LINKS (6 links) · FEATURED VIDEO
     (2 × 80×80 thumb + `.hover-video.sm` + h5 + meta) · OUR WORK (6 links)
     · RECENT POST (2 × thumb + h5 + meta); divider `brdr-ash-1.opacty-4`;
     bottom row (logo-white + blurb + 5 radial social icons); dark bar
     `bg-dark-primary` #050658 (copyright — drop Colorlib attribution +
     right-aligned link list Home/Business/Sport/Politics/Travel/Lifestyle/
     Culture/Tech/Video).
- **Design tokens (extracted from common/styles.css + DOM):**
  - Brand primary navy **`#0C0E68`** (bg-primary, color-primary,
    btn-fill-primary, p-title:before, dropdown borders/hover, social-row
    hover). Dark navy **`#050658`** (bg-dark-primary — bottom bar).
  - Nav navy **`#0A2D8B`** (bottom-menu, dropdown bg).
  - Accent red **`#E3493D`** (btn-fill-red — BREAKING NEWS tag, radius 3).
  - Link blue **`#2458C5`** (color-blue — rating link).
  - Social: FB **#4270E8** · TW **#39CBF0** · Google **#F63F39** · RSS
    **#EDAA15**; 20px white square chips (radius 3).
  - Text: #fff (white) · #888 (meta: color-ash / color-lite-black) · #ccc
    (color-grey ticker / color-ccc footer) · #111 (color-black) · footer p
    #ddd.
  - Fonts: body **Roboto** 14px/400; headings **Encode Sans Expanded**
    (Google Fonts `<link>` both).
  - Buttons: squared `border-radius: 2px` (red 3px), `height: 45px` (md 35 /
    sm 30), 1px fill borders; primary #0C0E68 fill → hover outline; red
    #E3493D fill → hover outline; white #fff fill, color #0C0E68 → hover
    navy fill white text. NOT pills.
  - Cards `.card-view`: white, radius 3, shadow `1px 1px 4px rgba(0,0,0,.10)`.
  - Section titles `.p-title`: pb-15 mb-30; `:after` 100%×1px #ccc; `:before`
    80×5px #0C0E68; `.p-title.in` (dark) after #777 before #fff; footer
    `.f-title:before` 50×3px #fff.
  - Hero overlay: `linear-gradient(to top, #000 0%, rgba(0,0,0,.4) 60%)`,
    opacity .8.
  - Video hover: `.hover-video:after` black overlay; `.icon i` 40px circle
    border 2px #fff (34px `.sm`); hover translate -30%,-30%.
  - Forms: abs-form input h-35 radius 3 border #777 color #eee; form-sm input
    h-35 radius 3 border #ccc.
  - Misc: top-header border-bottom #ddd; sided-250x / sided-80x / sided-90x
    thumbnail layouts; mini headlines left border + pl-20; nav hover
    underline 3px #fff; footer map overlay opacity .1.
- **Recreation name:** Herald (NEW name, differs from ColorLib "Ednews").
  App folder `apps/herald`, package `@free-react-templates/herald`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/herald-<n>/<w>/<h>`: hero 550×600 / 600×300, featured
  700×400, thumbs 250×250, sidebar 100×100, video 300×300, category 400×300,
  avatars 100×100, newsletter portrait 100×150); logo → bold navy "HERALD"
  text wordmark (Encode Sans Expanded) + white footer variant; lucide-react
  (Clock, User, MessageCircle, Eye, Search, Menu, ChevronDown, Play, Heart,
  Cloud) EXCEPT brand icons — inline SVG simple-icons for Facebook,
  Twitter/X, Pinterest, Google+, RSS; Roboto + Encode Sans Expanded via
  Google Fonts; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-herald/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/herald` (copy a section-rich app pattern, e.g.
      postie/wordpressapp; rename package to `@free-react-templates/herald`;
      run `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: TopBar (utility bar),
      MiddleHeader (logo + ad banner), Navbar (10 dropdown items, hover
      underline, mobile hamburger + slide-down menu), BreakingNews (red tag +
      ticker + search form), HeroGrid (bento 4-card grid with gradient
      overlays + meta rows), TodayFeatured (featured card), NewsList (6
      side-thumbnail cards), Sidebar (StayConnect social rows, news list,
      review card with rating link), VideoSection (4 cards + play hover
      overlay), CategoryCard (Politics/Sport with mini headlines), CategoryGrid
      (Lifestyle/Business/Culture/Tech), SecondSidebar (MostRead, Authors,
      banner card, Newsletter form with validation), Footer (columns, bottom
      row, dark bar).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate (or `scripts/verify-app.sh herald` in FAST_MODE).
- [ ] Push `feat/template-herald`, open PR (source template ColorLib
      "Ednews", preview URL https://preview.colorlib.com/theme/ednews/,
      design tokens, what differs: name, placeholder images, text logo,
      heading typo fixes, renamed duplicate "STAY CONNECT" list heading),
      merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-herald.surge.sh) + homepage; run
      `npm run readme:status`; push.
