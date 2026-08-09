# Syllabus (ColorLib Ednews) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-syllabus`.

## Design notes (replication findings)

- **Original:** ColorLib "Ednews" — free Bootstrap news/magazine website
  template (source: https://colorlib.com/wp/template/ednews/). TEMPLATES.md
  line 256 (Blog section, first `- [ ]` whose prep was missing on main).
  Recreation uses the NEW name **Syllabus** (an outline of study —
  education/news motif; single word, no collision with `ls apps/` or spec
  folders).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ednews/ (HTTP
  200, ~64 KB; title "Ednews"). Stylesheets: `common/styles.css` (~93 KB
  custom) + `plugin-frameworks/bootstrap.css` + `fonts/ionicons.css`.
  JS: jquery-3.2.1, tether, bootstrap, `common/scripts.js`. Fonts inlined
  as self-hosted `@font-face` (Roboto 400/600/700 + "Encode Sans
  Expanded"); load both via Google Fonts `<link>` in index.html.
- **Screenshot:** `ednews-free-template.jpg` (TEMPLATES.md line 256) —
  light-grey utility bar (Stockholm, Sweden 11°C · Thursday, 24 May, 2018
  09:00 AM · grey social icons), white header (bold dark-navy "EDNEWS" logo
  - realestate.com.au banner ad with black READ MORE button), solid deep
    navy nav (white uppercase items), navy ticker (red BREAKING NEWS tag +
    search input), 2×2 mosaic of photo cards with bold white uppercase
    headline overlays on dark gradients, navy footer theme. Palette: deep
    navy + white + red accent.
- **Visual design (DOM + CSS tokens + screenshot):**
  - Primary **#0C0E68** navy (`bg-primary`, `btn-fill-primary`, dropdown
    hover, `.btn-fill-white` hover, `list-a-hvr-primary`); nav **#0A2D8B**
    (`bottom-menu`); darker **#050658** (`bg-dark-primary` footer strip);
    red accent **#E3493D** (`btn-fill-red` BREAKING NEWS tag: 45px, radius
    3px, white text; hover transparent + red text); footer **#191919**
    with **#ccc** text; meta **#888**; hairlines #ccc/#ddd/#aaa.
  - Social blocks: FB #4270E8 / TW #39CBF0 / G+ #F63F39 / RSS #EDAA15.
  - Overlays: hero cards `bg-grad-layer-6:after` =
    `linear-gradient(to top,#000 0%,rgba(0,0,0,.4) 60%)` opacity .8; REAL
    ESTATE `bg-layer-8:after` = to-top #000 → rgba(0,0,0,.6); video hover
    `linear-gradient(49deg,#000,rgba(0,0,0,.4))` opacity .5 (hover .2).
  - Fonts: body **Roboto** 14px; headings h1–h3 **Encode Sans Expanded**
    (h4–h6 Roboto bold); nav + hero overlay headlines uppercase.
  - Buttons: radius 2–3px; `.btn-fill-white` (ad READ MORE) = white
    bg/navy text+border, hover navy; `.btn-fill-primary` (SUBSCRIBE NOW) =
    navy bg white text; heights 45/35/30px (`btn-b-md`/`btn-b-sm`).
  - `.card-view`: white, radius 3px, `box-shadow: 1px 1px 4px
rgba(0,0,0,.10)`, padding 20–30px. `.p-title` = bold uppercase h4 with
    full-width 1px #ccc underline 15px below; navy-band variant
    `.p-title.in` uses #777 line + #fff short bar.
  - Meta rows: clock (date) / person (author) / chatbubble (comments) /
    eye (views); #ccc on hero cards, #888 elsewhere. Sub-stories:
    `brdr-l-grey-2` 2px #ccc left border + pl-20.
  - Search (`abs-form`): transparent, 35px, radius 3px, border 1px #777,
    text #eee, right search icon.
  - Video play: 40px white circle (34px `.sm`), 2px white border, centered
    play icon; hover shrinks toward top-left.
  - Spacing utilities px-based: ptb-50/30/10, pb-20, pt-50, mtb-10/20/30,
    mb-20/30, p-30, plr-50/30.
- **Structure (1:1, section order):**
  1. `header`: `top-header` (white, border-bottom #ddd): left "Stockholm,
     Sweden [cloud] 15℃" · "Thursda, 24 May, 2018" · "09:00 AM" (font .9em);
     right 5 grey social icons (facebook/twitter/pinterest/google/rss).
     `middle-header` (white mtb-20): logo (logo-black.png) + banner ad
     (bg image + overlay, white): h5 "realestate.com.au" h6 "Discover the
     latest properties of australia" + `btn-fill-white btn-b-sm` READ
     MORE. `bottom-menu` (#0A2D8B): mobile `menu-nav-icon` + `ul.main-menu`
     (white uppercase, 60px line-height, padding 15px 0): HOME/BUSINESS/
     SPORT/POLITICS/TRAVEL/LIFESTYLE/CULTURE/TECH/VIDEO/FEATURES — each
     li.drop-down with chevron + `ul.drop-down-menu.drop-down-inner`
     (absolute top 60px, PAGE 1/PAGE 2, border-top 1px #0C0E68, hover
     bg #0C0E68).
  2. `section.pt-0.bg-primary`: row 1 — `btn-fill-red btn-b-md` BREAKING
     NEWS + link "8:30 AM Eight People have died and violent protest
     involving tens of thousands..." (color-grey, hover white); right
     search form (placeholder Search). Row 2 — mosaic `plr-50 h-600x`:
     left 60% two tall cards (bg-1 lead "WHAT'S INCLUDED IN CONGRESS'
     $13 TRILLION SPENDING BILL" 550x600 + bg-2 "Five places under the
     falls and above the clouds" 550x600), right 40% two stacked short
     cards (bg-3/bg-4 600x300, same "Five places…" title). Each card:
     gradient overlay + abs-bottom white p-20 h3.t-upper title + meta
     (Jan 25, 2018 · John Dowson · 15 · 105).
  3. `section` (white ptb-50) col-lg-8 + col-lg-4: main h4.p-title TODAY
     FEATURED + big feature (news-1-700x400 WPP story + meta + excerpt) +
     6 small items (news-2..7-250x250: Bahrain GP / NZ v England / Russia-
     West / California crash / Facebook CEO / Tesla). Sidebar: STAY CONNECT
     (4 full-width social blocks: bg-fb 2135 / bg-twtr 5176 / bg-gogl 2244
     / bg-rss 2111 followers); second widget = 8 latest-news items
     (sidebar-news-1..8-100x100, sided-80x thumb + title + clock/eye);
     review card (sidebar-review-400x300 + "Berney Sander…" + "Judge
     Overseeing: 9.2/10").
  4. `section.bg-primary.color-white.pb-20` FEATURED VIDEO (original
     headline misspelled "FEATIRED VIDEO" — correct it): 4 video cards
     (video-1..4-300x300) with hover-video dark overlay + 40px white play
     circle + h5 title + meta.
  5. `section.pb-20` (white ptb-50) col-lg-8 + col-lg-4: 6 category blocks
     (card-view p-30): POLITICS/SPORT/LIFESTYLE/BUSINESS/CULTURE/TECH —
     each h4.p-title + featured story (image 400x300 + h4 title + meta +
     excerpt) + brdr-grey-1 divider + 4 sub-stories (2×2, brdr-l-grey-2
     pl-20, h5 + clock/eye). Sidebar: MOST READ (6 × sided-80x),
     ARTICLES BY AUTHOR (4 × sided-90x: avatar + name + "Reporter"),
     REAL ESTATE banner (bg-7 300x300 + bg-layer-8 + READ MORE), NEWSLETTER
     (card-view text-center: title + "The best selling Magic-Magazine" +
     cover 100x150 + form-sm email + btn-fill-primary SUBSCRIBE NOW).
  6. `footer.bg-191.pos-relative.color-ccc.pt-50` (#191919 + faint bg-map
     layer): QUICK LINKS (6) / FEATURED VIDEO (2 × sided-80x with
     hover-video.sm) / OUR WORK (6) / RECENT POST (2 × sided-80x); divider
     brdr-ash-1 opacty-4; center row: logo-white + lorem + 5 social circles
     (list-radial-35); `bg-dark-primary` #050658 strip: copyright + credit
     - bottom nav (Home/Business/Sport/Politics/Travel/Lifestyle/Culture/
       Tech/Video).

## Implementation todo

- [ ] Scaffold `apps/syllabus` (copy simplest existing app, package
      `@free-react-templates/syllabus`).
- [ ] `index.html`: title "Syllabus — News Magazine", Roboto (400,600,700) + Encode Sans Expanded via Google Fonts `<link>`.
- [ ] `@theme` tokens: `--color-brand: #0C0E68`, `--color-navy: #0A2D8B`,
      `--color-navy-deep: #050658`, `--color-accent: #E3493D`,
      `--color-footer: #191919`, `--color-muted: #888`, `--color-faint:
  #ccc`, font-sans Roboto, font-display "Encode Sans Expanded".
- [ ] Header: utility bar (location/weather · date · time + 5 grey social
      icons), middle header (Syllabus wordmark + realestate banner ad with
      white READ MORE), navy bottom nav (10 items with PAGE 1/PAGE 2
      dropdowns) + mobile toggler with aria-expanded.
- [ ] Breaking ticker: red BREAKING NEWS tag, 8:30 AM headline link,
      labeled search input (icon button).
- [ ] Hero mosaic: 4 picsum photo cards (seeds syllabus-1..4) in the
      60/40 layout with bottom-up gradient overlays, uppercase white
      headlines, meta rows (Clock/User/MessageCircle/Eye lucide icons).
- [ ] TODAY FEATURED: big feature (seed syllabus-5) + 6 small items (seeds
      syllabus-6..11) + sidebar STAY CONNECT (4 brand-colored follower
      blocks) + LATEST NEWS (8 × 80px thumb, seeds syllabus-12..19) +
      review card (seed syllabus-20).
- [ ] FEATURED VIDEO band: navy bg, 4 cards (seeds syllabus-21..24) with
      hover overlay + circular Play button (aria-label).
- [ ] Six category blocks (POLITICS…TECH): heading + featured story (seed
      syllabus-25..30) + divider + 4 left-bordered sub-stories each.
- [ ] Sidebar: MOST READ (6 × thumb), ARTICLES BY AUTHOR (4 reporter rows,
      90px avatars seeds syllabus-31..34), REAL ESTATE banner (seed
      syllabus-35 + dark overlay + READ MORE), NEWSLETTER form ("Your
      Email" + SUBSCRIBE NOW, submit → success state).
- [ ] Footer: #191919 + faint map texture (CSS pattern or low-opacity
      image), QUICK LINKS / FEATURED VIDEO / OUR WORK / RECENT POST
      widgets, logo + lorem + 5 social circles, #050658 strip with credit + 9 category links.
- [ ] Tests (vitest + RTL, 100% coverage): header bars + dropdowns +
      toggler, ticker + search, mosaic cards, featured section + sidebar
      widgets, video band, category blocks, footer, page composition +
      title.
- [ ] Verify: `npm run verify:app -- syllabus` green.
- [ ] PR: `feat/template-syllabus`, description with source (Ednews),
      preview URL, tokens, renames; merge immediately with `gh pr merge
    --squash --delete-branch`; mark TEMPLATES.md line 256 `[x]` + surge
      URL + `npm run readme:status`.

## Pitfalls

- **No Google Fonts `<link>` in the original** — fonts are inlined
  `@font-face` self-hosted woff2 (Roboto + Encode Sans Expanded). Load both
  families from fonts.googleapis.com in index.html instead.
- **Original copy-paste bugs to decide on** (document in PR): the second
  sidebar widget in TODAY FEATURED repeats the **STAY CONNECT** heading
  (recreate as **LATEST NEWS**); the video band headline is misspelled
  **FEATIRED VIDEO** (recreate as **FEATURED VIDEO**); the newsletter input
  placeholder is "Yor Email" (recreate as **"Your Email"**).
- **Breaking ticker text**: the DOM reads "8:30 AM" (the screenshot shows
  "5:30 AM") — use the DOM value.
- **Brand icons**: ion-social-facebook/twitter/pinterest/google(plus)/rss
  are NOT in lucide-react — use inline SVG (simple-icons paths). Non-brand
  icons (Clock, Eye, User, MessageCircle, Play, Search, ChevronDown, Menu,
  Heart, Cloud) are fine from lucide-react.
- **Duplicate headings in the DOM**: "POLITICS"/"SPORT" appear both in the
  nav and as section headings — in tests use roles/scoping, and the hero
  cards share one repeated headline ("Five places under the falls…") across
  three cards → `getAllByText`.
- **Meta rows repeat everywhere** (date · author · 15 · 105) — build one
  `ArticleMeta`-style component (packages/ui or local) and reuse; don't
  duplicate markup 40×.
- **Mosaic responsiveness**: original uses fixed `h-600x` (h-md-800x /
  h-xs-1000x) with `w-60/w-40` floats — recreate with a grid that stacks
  (2 tall → 2 short) on mobile; keep the lead card dominant.
- **h4 vs h3 semantics**: only h1–h3 use Encode Sans Expanded; category
  titles (POLITICS etc.) and widget titles are h4/h5 in Roboto bold —
  match the font pairing, not just the sizes.
- **`.p-title` underline** is a `:after` bar (full-width 1px #ccc 15px
  below the text) — recreate it; the navy-band variant uses #777/#fff.
- **Footer strip contrast**: bottom bar is `bg-dark-primary` #050658 (not
  #191919) — two distinct dark values; don't merge them.
