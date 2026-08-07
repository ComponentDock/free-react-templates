# Ledger (ColorLib "Daren") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-ledger` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Daren" — Blog / Magazine HTML Template
  (source: https://colorlib.com/wp/template/daren/). Listed in
  TEMPLATES.md under **Blog (60)** (line 253).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/daren/`. DOM fetched
  (`/tmp/daren-preview.html`, 29 KB) + stylesheet
  (`/tmp/daren-style.css`, 123 KB, Sass-compiled with per-file source
  maps) + screenshot (`daren-free-template.jpg`, 1200×946, viewed in
  browser). All references verified live.
- **Visual design:** clean white editorial magazine blog. Header:
  serif logo "DarEn." top-left, centered small uppercase nav (HOME,
  ARCHIVE, CATEGORY, CONTACT, PAGES ▾), right: expanding "Search
  here" input + Facebook/Twitter/Instagram icons. Split hero banner:
  left ~36% block = pink summer-accessories photo (straw hat,
  sunglasses, fan) with white text card at its bottom; right ~63.5%
  block = lime-green Easter eggs photo whose white card overlaps the
  bottom edge of the image; each card: tiny red uppercase category
  ("CREATIVE & DESIGN"), large Source Serif Pro headline, "By Michal |
  March 30, 2019". Below: 3 featured posts (beetle photo / ART &
  ILLUSTRATION text card / feathery yellow photo), category grid with
  white pill labels, 5px light-pink divider, main list + sidebar
  (search, popular feeds, categories, tags), dark `#111516` footer.
  Red `#ef1313` accents on every category label/button.
- **Structure (1:1 from the preview DOM):**
  1. Header `header.main_menu` (container → `nav.navbar
navbar-expand-lg navbar-light`, padding 33px 0): logo
     `a.navbar-brand > img` (left desktop / absolutely centered
     mobile), burger (mobile), centered `ul.navbar-nav` — Home
     (active), Archive, Category, Contact, Pages ▾ (`div.dropdown-menu`
     bg `#fafafa`: "Single blog", "elements"); right
     `div.header_social_icon.d-none.d-sm-block`: `div#wrap` search
     form (`input#search` placeholder "Search here" + `span.ti-search`;
     CSS: width 0 → expands, border 2px `#ffe4e4`, bg `#fafafa`,
     10px radius) + 3 social `a` (`i.ti-facebook`, `i.ti-twitter-alt`,
     `i.ti-instagram`, hidden below lg). Nav links Source Serif Pro
     600 13px uppercase `#2a2a2a` padding 7px 20px. Mobile collapse:
     absolute top 71px, full-width white centered.
  2. Banner `section.banner_post` (container-fluid, col-lg-12):
     - `.banner_post_1.banner_post_bg_1`: bg image cover center;
       desktop 36% × 810px, float left. `.banner_post_iner
text-center`: white card max-width 490px, margin auto, absolute
       bottom of block, padding 45px → `a>h5` "Creative & Design"
       (11px uppercase `#ef1313` Open Sans 700 mb 12px), `a>h2` "All
       said replenish years void <br> kind say void" (Serif 600
       `#2a2a2a` lh 1.333, hover `#ef1313`), `p` "By Michal / March
       30, 2019" (`#8a8a8a` 13px, `span` author `#0a0a0a` 800).
     - `.banner_post_2.banner_post_bg_2`: bg image cover center;
       desktop 63.5% × 810px, margin-left .5%. `.banner_post_iner`:
       white card absolute right 0, left 23%, bottom -96px (overlaps
       below image edge), padding 45px 144px 50px 50px; same content
       pattern (h5 "Creative & Design", h2 "Behold given land one
       first face fish which all said male fruit void king saying").
     - Responsive: blocks stack full-width 400px, cards inset.
  3. Feature posts `section.feature_post` (padding 70px 0): 3 ×
     `.single_feature_post.post_1` (33.33%, float left): `img` (w
     100%) + `.post_text_1` (margin 20px 0): `h5` cat (11px uppercase
     `#ef1313` mb 14px), `a>h3` 18px, `p` meta,
     `.post_icon>ul` (mt 20 pt 20, border-top 1px `#ecf0f2`):
     ti-comment "2 Comment", ti-heart "0 Like", ti-export "Share"
     (li padding-left 16px). Middle card = text ABOVE image
     (`d-block d-sm-none d-lg-block`, `pl_pr_30`).
  4. `div.border_top`: 5px solid `#ffe4e4`, width 1110px (90% small),
     margin auto — pink divider.
  5. Category grid `section.catagory_post` (padding 70px 0 50px): 3 ×
     `col-sm-6 col-lg-4` → `.single_catagory_post.post_2`:
     `.category_post_img` (relative): img +
     `a.category_btn` (absolute bottom -5px,
     border-top-right-radius 10px, padding 15px 30px, bg #fff, color
     `#ef1313`, uppercase 11px 600): "abstract design", "illustration",
     "brand identity"; `.post_text_1.pr_30` (margin 21px 0 55px): meta
     p, `a>h3` 24px, post_icon row.
  6. `div.border_top` — second pink divider.
  7. Main list + sidebar `section.all_post.section_padding` (padding
     100px 0):
     - `col-lg-8`: 5 × `.single_post.media.post_3` (mb 20):
       `.single_post_img` (relative): img +
       `a.category_btn` (absolute bottom 0 left 0,
       border-top-left-radius 10px, padding 15px 30px, white/red
       uppercase 11px): "Tours & travel", "branding", "Culture",
       "Creative design", "Illustration"; `.post_text_1.media-body
align-self-center` (border 1px `#e9ecee`, border-left 0,
       padding 35px 15px 40px 40px): meta p, `a>h3` 20px, post_icon.
       Then `.load_btn.text-center` (mt 80) → `a.btn_1` "LOADING
       MORE" + `i.ti-angle-right` (inline-block, padding 14.5px 22px,
       14px, #fff on `#ef1313`, capitalize, .4s, hover bg `#2a2a2a`).
     - `col-lg-4` → `.sidebar_widget` (mt 50):
       - "Search Objects" (`h3` 24px `#2a2a2a` 600 mb 45; `::before`
         15×4px `#ef1313` left 0 bottom -13px, `::after` 40×1px
         `#ef1313` left 25px bottom -12px) + form: `input.form-control`
         (radius 0, 13px `#999999`, h 52px, placeholder "Search
         Keyword", focus border `#e9ecee`) + `button.btn` (bg
         `#ef1313` white, w 50, radius 0, ti-search, ml 10).
       - "Popular Feeds": 3 × `.single_catagory_post.post_2
.single_border_bottom` (last plain): sidebar thumb img +
         `.post_text_1.pr_30` (margin 30px 0): meta p + `a>h3`.
       - "Categories": `.single_catagory_item.category` ul li a
         (Source Serif Pro `#888888` 18px, mb 12): Culture (12),
         Creative Design (15), Illustration (25), Production (16),
         Mangement (10), Branding (15).
       - "Popular Tags": `.single_catagory_item.tags` ul li a
         (inline-block, bg #fff, `#888888` 13px, border 1px
         transparent, hover border `#ef1313`): Nature, business, tech,
         News, html.
  8. Footer `footer.footer-area` (bg `#111516`, padding 100px 0 30px):
     - `footer_1` "About Me": h4 (white 24px 700 mb 23), p (14px
       `#8f8f8f`).
     - `footer_2` "Contact us": 2 × `.contact_info` (relative,
       padding-left 35px, mb 20; span icon 18px `#ef1313` absolute
       left 0 top 5): ti-home + h5 "Los angeles, United States" (16px
       white) + p address; ti-headphone-alt + h5 "+44 6532 986 652" +
       p "Mon to Fri 9am to 6 pm."
     - `footer_3` "Newsletter": p + form: `input.form-control` (radius
       0, 13px `#999999`, h 48, border 1px `#3b3f40`, placeholder
       "Enter email address") + `button.btn` (bg `#ef1313` white,
       49×48, radius 0, lnr-arrow-right icon, mt 23).
     - `.copyright_part_text.text-center` (border-top 1px `#41404f`,
       pt 30, mt 83): p "© <year> All rights reserved | This template
       is made with <i.ti-heart> by <a>" (`#8f8f8f` 14px; heart 12px;
       link `#ef1313`).
- **Design tokens (extracted from style.css):**
  - Brand: **`#ef1313`** vivid red (46 usages) — category h5s, `.btn_1`
    bg, search/submit btns, sidebar tittle underline pair, banner h2
    hover, footer icons/links/button, tag hover border, copyright
    link. `.btn_1` hover bg `#2a2a2a`.
  - Tint: `#ffe4e4` — 5px `border_top` dividers + header search border.
  - Text: `#2a2a2a` (nav, banner h2, tittles), `#2f373d` (global
    headings), `#0a0a0a` (author spans 800), `#8a8a8a` (meta),
    `#888888` (cat links/tags), `#8f8f8f` (footer text), `#999999`
    (inputs).
  - Bg: page `#fff`, footer `#111516`, dropdown + search `#fafafa`.
  - Borders: `#e9ecee` (post_3 card + input focus), `#ecf0f2`
    (post_icon hairline), `#3b3f40` (footer input), `#41404f`
    (copyright top).
  - Fonts: **Source Serif Pro** (headings, nav, category links;
    400/600/700) + **Open Sans** (body/meta/buttons/inputs;
    400/400i/600/700) via Google Fonts `@import`.
  - Headings: h2 30px lh 1.222 `#2f373d` 600; banner h2 `#2a2a2a` lh
    1.333 hover red; h3 24px (post_2) / 18px (post_1) / 20px
    (post_3); category h5 11px uppercase red.
  - Buttons: `.btn_1` padding 14.5px 22px 14px red, square, hover
    `#2a2a2a`; `.category_btn` white/red uppercase 11px 600 padding
    15px 30px, one 10px top corner radius; sidebar search btn red
    50px; footer submit red 49×48.
  - Forms: sidebar input radius 0 h 52; footer h 48 border `#3b3f40`;
    header search border 2px `#ffe4e4` bg `#fafafa`.
- **Recreation name:** Ledger (NEW name, differs from ColorLib
  "Daren"). App folder `apps/ledger`, package
  `@free-react-templates/ledger`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/ledger-<n>/<w>/<h>`: banner 1 900×810, banner 2
  1600×810, feature posts 700×470, category posts 700×470, list post
  images 470×350, sidebar thumbs 110×110); lucide-react icons
  (MessageCircle, Heart, Share2, Search, ArrowRight, Menu, X, Home,
  Headphones; Facebook/Twitter/Instagram as inline SVG — lucide has no
  brand icons); Source Serif Pro + Open Sans via Google Fonts
  `<link>`; logo → serif text wordmark "Ledger."; section dividers =
  `h-px`/5px bars with `#ffe4e4`; post_icon row = hairline
  `border-t border-[#ecf0f2]` + 3 icon items; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-ledger/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/ledger` (copy a section-rich landing app pattern,
      e.g. Chronicle/Aurora; rename package to
      `@free-react-templates/ledger`; run `npm install` at root so
      `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (logo
      wordmark + centered nav + Pages dropdown + expanding search +
      socials + mobile burger panel), Banner (split 36/63.5 blocks,
      white cards, responsive stack), BorderDivider (`#ffe4e4` 5px),
      FeaturedPosts (3 cards, middle text-above-image), CategoryGrid
      (3 cards with white pill labels), PostList (5 horizontal rows +
      LOADING MORE btn), Sidebar (Search/Feeds/Categories/Tags
      widgets), Footer (About/Contact/Newsletter + copyright bar).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh ledger` in
      FAST_MODE).
- [ ] Push `feat/template-ledger`, open PR (source template ColorLib
      "Daren", preview URL reachable, design tokens, what differs:
      name, placeholder images, text logo), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-ledger.surge.sh) + homepage; run
      `npm run readme:status`; push.
