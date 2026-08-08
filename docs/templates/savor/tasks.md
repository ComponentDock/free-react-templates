# Savor (ColorLib Foodeiblog) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-savor`.

## Design notes (replication findings)

- **Original:** ColorLib "Foodeiblog" — food blog / magazine template
  (source: https://colorlib.com/wp/template/foodeiblog/). TEMPLATES.md has TWO
  copies of this item (lines 263 and 1782) — mark BOTH when done.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/foodeiblog/
  (HTTP 200, full rendered DOM; stylesheets: `css/style.css` main, plus
  bootstrap.min.css, font-awesome.min.css, elegant-icons.css,
  owl.carousel.min.css, slicknav.min.css). Fonts self-hosted in the demo via
  `/cf-fonts/` (Nunito Sans 300–800 + Unna 400/700) — use Google Fonts in the
  recreation. Cross-checked against the TEMPLATES.md screenshot
  (`foodeiblog-free-template.jpg`, viewed in browser) — designs match. The
  demo brands itself "foodeiblog"; recreation uses the NEW name **Savor**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean white
  food-magazine aesthetic — cursive orange wordmark logo; orange `#f4952f`
  accents (subscribe button, active nav underline, social icons, category
  labels, dates, hover states); hero slider with dark-overlay square date
  badge (big serif "08" + "Aug") and large serif white titles over food
  photography; row of four square category tiles below the hero; blog post
  cards with square date box; About Me sidebar widget with circular author
  photo; footer Instagram strip. Serif (Unna) titles vs uppercase Nunito Sans
  meta labels.
- **Structure (1:1, section order):**
  1. Preloader (`#preloder`, optional in recreation).
  2. Mobile menu overlay (`.humberger__menu__overlay`): logo, nav links,
     author about block (title + blurb + social), subscribe block. Slide-in
     from left with close control.
  3. Header (`.header`):
     - Top row: hamburger button (col-lg-2), main nav (col-lg-8): HOME /
       RECIPES / DINNER / DESSERTS / PAGES — uppercase, `#111111`, weight 700,
       hover/active underline `#f4952f`; PAGES opens a mega-dropdown
       (Categories Grid, Categories List, Single Post, Sign In, Typography,
       About, Contact — simplify to a plain dropdown); search form with icon
       - SUBSCRIBE button (col-lg-3).
     - Logo row: centered cursive "foodeiblog" wordmark (col-lg-6) + social
       icons (col-lg-3).
  4. Hero slider (`.hero__slider`, owl carousel; `.hero__inside__item` height
     633px): 4 slides, each a wide featured post on the left + narrow stacked
     posts on the right (render as a carousel of wide slides or the
     wide+stacked composition — keep the wide-item content overlay). Overlay
     bottom-left: 110×110 dark square date block ("08" span 42px / "Aug" p
     24px), category label (12px uppercase `#f4952f`, e.g. "Vegan Desserts"),
     big serif title (Unna), byline "by Admin · 3 min read · 20 Comment".
     Owl prev/next arrows: 50×50 circular, `rgba(0,0,0,0.3)`, white 30px
     glyph, positioned left/right 30px, top 50%.
     Slide titles: "Vegan White Peach Mug Cobbler With Cardamom",
     "How to Make a Milkshake With Any Ice Cream, Any Toppings...",
     "Vintage Copper Preserve Pan with Brass Handles, Mid 19th Century",
     "Marinated Lentil Salad with Zucchini and Tomatoes" (all 08 Aug / Vegan
     Desserts).
  5. Categories section (`.categories.spad`):
     - Category tiles (`.categories__item`): 4 square image tiles with
       hover-revealed category text (Dinner / Desserts / Vegan / etc.).
     - Blog post grid (`.categories__post`, main column col-lg-8): mixed card
       variants — `.categories__post__item` (pic + meta + text),
       `--plain` (text only), `--small` (smaller layout); each with date
       badge, orange category, serif title, excerpt, "by Admin" byline
       (`.posted__by`), share icons (`.post__social`).
     - Load more (`.load__more__btn`): centered, 14px `#111111` uppercase
       weight 700, padding 12px 125px 10px, bg `#ebebeb`.
  6. Sidebar (col-lg-4, widgets): About Me (`.sidebar__about__item`:
     circular author photo + "Hi every one! I,m Lena Mollein." blurb), Follow
     (`.sidebar__follow__item` + social links), Featured Posts
     (`.sidebar__feature__item`: one large + list of small thumb/title/byline),
     ad banner (`.sidebar__item__banner`, placeholder), Categories list
     (`.sidebar__item__categories`), Subscribe (`.sidebar__subscribe__item`:
     email input + orange SUBSCRIBE `.site-btn`).
  7. Footer (`.footer`, bg `#f5f5f5`, padding-top 20px): Instagram strip
     (`.footer__instagram`: avatar block with handle/followers + row of 6–8
     square tiles, 305px tall), footer text (`.footer__text`: logo + social),
     copyright bar (`.footer__copyright`): "© <year> Savor. All rights
     reserved."
- **Design tokens extracted from the preview CSS:**
  - Brand **orange `#f4952f`** (category labels/dates, hovers, active nav
    underline, `.site-btn` bg).
  - Ink **`#111111`** (headings, nav, load-more text); body **`#444444`**;
    muted **`#888888`** (bylines/meta).
  - Surfaces: white page; `#f5f5f5` (footer bg, light blocks); `#f2f2f2`,
    `#ebebeb` (load-more bg); borders `#e1e1e1`.
  - Fonts: **"Nunito Sans", sans-serif** (body/nav/meta, 300–800), **"Unna",
    serif** (headings/post titles, 400/700).
  - Buttons: `.site-btn` — 15px white, weight 800, uppercase, padding 13px
    26px 12px, bg `#f4952f`, square; load-more — 14px `#111111`, weight 700,
    uppercase, padding 12px 125px 10px, bg `#ebebeb`.
  - Radii: square throughout; circles only for slider arrows (50px) and
    author/avatar photos.
  - Hero: item height 633px; date block 110×110; label 12px uppercase
    `#f4952f`.
- **Recreation name:** Savor (NEW — differs from source "Foodeiblog"). App
  folder `apps/savor`, package `@free-react-templates/savor`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/savor-<n>/<w>/<h>`); lucide-react icons; social brand
  icons as inline SVG; Nunito Sans + Unna via Google Fonts `<link>`; orange +
  ink in `@theme`; hero slider as a React state carousel with accessible
  prev/next buttons (no owl.carousel); repo-standard Navbar/Footer chrome
  adapted to this layout (top row + logo row + slide-in mobile menu).
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-savor/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/savor` (copy a simple blog/landing app pattern — e.g.
      Crumb/Feast if a blog exists, else Aurora; rename package to
      `@free-react-templates/savor`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-savor`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: BOTH TEMPLATES.md Foodeiblog copies (lines 263 + 1782)
      `[~]` → `[x]` + Surge URL (`free-react-templates-savor.surge.sh`) +
      homepage + `npm run readme:status`.
