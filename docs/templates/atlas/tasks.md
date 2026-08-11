# Atlas (ColorLib World) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-atlas`.

## Source mapping

- **ColorLib item:** "World" (TEMPLATES.md — appears 3×: lines 297, 538,
  2222; all three rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/world/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/world/
- **Preview URL:** https://preview.colorlib.com/theme/world/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~214.5 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/world/style.css
  (~38.7 KB) — imports bootstrap.min.css, animate.css, owl.carousel.min.css,
  magnific-popup.css, slicknav.css, font-awesome.min.css (internal css/
  subfolder). Site is jQuery + owl.carousel + wow + slicknav — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`world-free-template-1.jpg`, 1200×946; verified via browser vision)

"WORLD" logo white uppercase top-left; nav links white (Home, Pages ▾, Gadgets
▾, Lifestyle, Video, Contact) + magnifier icon, over a dark city-skyline night
photo hero (Hong Kong style, neon reflections). Three numbered circles (1, 2, 3) with a van Gogh headline snippet over the hero bottom center — the active
circle filled in the blue accent. A circular scroll-down arrow sits at the
hero's bottom right (NOT in the live DOM — skip). Below: white content section
"Don't Miss" with tabs (All active, blue underline) — large highway photo card
with a blue "TRAVEL" chip + headline + "Katy Liu · Sep 29, 2017" meta, and two
stacked abstract-art thumb+title rows; sidebar shows "About World" paragraph
and the top of "Top Stories". Clean modern sans-serif magazine look, single
pure-blue #0000ff accent on white + grays. NOTE: the screenshot is a slightly
older build (3 circles vs 4 in the DOM, 7 tabs vs 9) — the DOM is the
reference.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Preloader** `div#preloader > div.preload-content > div#world-load` —
   cosmetic loading spinner; safe to drop or keep as a quick fade.
2. **Header** `header.header-area` — `position: fixed; top: 0; margin-top:
20px; width: 100%; z-index: 300`.
   - `nav.navbar.navbar-expand-lg` — `height: 55px; border-bottom: 1px solid
#fff`.
   - Brand: `a.navbar-brand` logo image → recreate as bold white uppercase
     text "ATLAS" (Ubuntu 700, ~26px).
   - `ul.navbar-nav.ml-auto` — links (500 weight, padding 0.5em, white hover):
     Home (`.active`), Pages (`li.dropdown` with `a.nav-link.dropdown-toggle`
     → `div.dropdown-menu`: Home, Catagory, Single Blog, Regular Page…),
     Gadgets, Lifestyle, Video, Contact. (Screenshot shows a "Gadgets" arrow
     too; dropdowns optional per link.)
   - `button.navbar-toggler` — white hamburger (`navbar-toggler-icon` SVG,
     stroke rgba(255,255,255,1)) → collapse panel `#worldNav` (mobile).
   - Search trigger → `div#search-wrapper` overlay: `form` with `input#search`
     placeholder "Search something..." + `#close-icon` close control.
3. **Hero** `div.hero-area` → `div.hero-slides.owl-carousel`:
   - 2 × `div.single-hero-slide.bg-img.background-overlay` — `height: 600px`
     (450px ≤1199px, 400px ≤767px), inline `background-image` cover,
     `.background-overlay::after` = full-height `rgba(0,0,0,0.7)` overlay.
   - Slides have NO text content in the DOM (pure imagery carousel).
4. **Hero post strip** `div.hero-post-area` — `position: absolute; bottom:
40px; width: 100%; z-index: 200` → `div.hero-post-slide` (owl): 4 ×
   `div.single-slide.d-flex.align-items-center`:
   - `div.post-number` (flex 0 0 80px) > `p` — 55×55px circle, `border: 5px
solid #8d8d8d`, `border-radius: 50%`, Ubuntu 700 24px, line-height 45px.
   - `div.post-title > a` — 14px 700 (base #8d8d8d; white in hero context per
     later `.post-title a { color: #ffffff }` override).
5. **Main content** `div.main-content-wrapper.section-padding-100` (white,
   `padding: 100px 0`). Row `justify-content-center` → left `col-12 col-lg-8`
   (tabs + trending + latest), right `col-12 col-md-8 col-lg-4` (sidebar).
   a. **"Don't Miss" tabs** `div.world-catagory-area`:
   - `div.nav-tabs` — `border-bottom: 2px solid #f1f1f1; padding: 10px 0`;
     `p.title` (Ubuntu 700 18px black, margin-right auto) + 9 `a.nav-link`
     tabs: All, Style hunter, Vogue, Health & Fitness, Travel, Gadgets,
     Sports, Politices, Features.
   - Active tab: `color: #000` + `::after` `background-color: #0000ff;
width: calc(100% - 30px); height: 2px; left: 15px; bottom: -17px;
box-shadow: 0 2px 10px rgba(0,0,0,0.15)`.
   - 9 `div.tab-pane` (world-tab-1..9): row → `col-12 col-md-6`:
     `div.world-catagory-slider.owl-carousel` with ONE featured
     `div.single-blog-post` — card `box-shadow: 0 2px 8px
rgba(0,0,0,0.15)`; `div.post-thumbnail` img + `div.post-cta`
     (absolute top 15px left 30px; chip = height 20px, uppercase 10px,
     weight 500, ls 0.75px, padding 0 10px, white bg + #0000ff text, hover
     invert) + `div.post-content` (padding 20px 30px): `a.headline > h5`
     18px black + excerpt `p` + `div.post-meta` — 12px, `border-bottom:
2px solid #f1f1f1`, mb 30px, "Katy Liu on Sep 29, 2017 at 9:48 am".
     Other `col-12 col-md-6`: 4 × `div.single-blog-post.post-style-2.d-flex
.align-items-center` — thumb `flex: 0 0 97px` (mb 15px) + content
     (title 14px 700 + meta).
     b. **"What's Trending" tabs** `div.world-catagory-area.mt-50` — same tab
     bar style, title "What's Trending", 9 tabs (world-tab-10..18, same
     labels). Pane layout: 2 × `col-12 col-md-6` of 4 `post-style-2.mb-1`
     rows each + `col-12` → `div.world-catagory-slider2.owl-carousel`: 2 ×
     `div.single-cata-slide`, each a row of 4 `post-style-2.mb-1` posts.
     c. **Sidebar** `div.post-sidebar-area` — 4 × `div.sidebar-widget-area`
     (`border-bottom: 2px solid #f1f1f1`), `h5.title` Ubuntu 700 18px black,
     `padding: 12px 0 12px 30px`, 2px #f1f1f1 bottom border:
   - "About World" — `div.widget-content` (padding 30px 0 30px 30px):
     paragraph ("The mango is perfect in it. It is always yellow…").
   - "Top Stories" — 5 × `div.single-blog-post.post-style-2.widget-post`
     (97px thumb + title + meta).
   - "Stay Connected" — `div.social-area.d-flex.justify-content-between`:
     6 × `a` 36×36px, `border: 1px solid #f1f1f1`, radius 50%, line-height
     32px: facebook, twitter, pinterest, vimeo, instagram, google.
   - "Today's Pick" — `div.single-blog-post.todays-pick` (box-shadow none)
     thumb + `div.post-content.px-0.pb-0` (headline + meta).
     d. **Cards row** `div.row.justify-content-center` → 3 × `col-12 col-md-6
   col-lg-4`: `div.single-blog-post.post-style-3.mt-50` — thumb + `div.post
   -content.d-flex.align-items-center.justify-content-between`: `div.post-
   tag a` chip (same style as post-cta) + `div.post-meta`.
     e. **Latest articles** `div.world-latest-articles` — row:
   - `col-12 col-lg-8`: `div.title > h5` "Latest Articles" (border-bottom
     2px #f1f1f1, padding 10px 0, mb 30px) + 4 × `div.single-blog-post.
post-style-4.d-flex.align-items-center` (thumb + content + meta).
   - `col-12 col-lg-4`: `div.title` "Most Popular Videos" + 2 ×
     `div.single-blog-post` (thumb + post-cta chip + content + meta).
     f. **Load more** `div.load-more-btn.mt-50.text-center` → `a.btn.world-btn`
     "Load More" — pill (border-radius 50px), height 35px, padding 0 25px,
     #0000ff bg, white text.
6. **Footer** `footer.footer-area` — `background-color: #161616; padding:
70px 0`. Row → 3 × `div.col-12.col-md-4` `div.footer-single-widget`:
   - Logo (white) + `div.copywrite-text.mt-30`: "Copyright © <year> All
     rights reserved | This template is made with <heart> by Colorlib" →
     original attribution.
   - `ul.footer-menu.d-flex.justify-content-between.flex-wrap` — 6 links
     (Home, Fashion, Lifestyle, Contact, Gadgets, Video), `flex: 0 0
33.3333%` each, padding 7.5px 5px.
   - `h5` "Subscribe" (Ubuntu 700 18px white, mb 20px) + `form`: `input[type=
email]` — 35px, transparent bg, `border-bottom: 1px solid #959595`,
     color #959595, placeholder "Enter your mail" + `button` arrow icon.

## Design tokens (from style.css — computed)

| Token        | Value                        | Usage                                                                                                                          |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| brand-blue   | `#0000ff`                    | `.world-btn` bg/border (solid) + hover fill (outlined), `a:hover`, active-tab underline (2px), chip text + hover bg            |
| footer-dark  | `#161616`                    | `.footer-area` background                                                                                                      |
| ink          | `#000000`                    | headings h1–h6, `.title` text, active tab text                                                                                 |
| text-gray    | `#8d8d8d`                    | default `a` color, `.post-title a`, `.post-number p` border (5px), muted footer links                                          |
| divider      | `#f1f1f1`                    | `.post-meta` 2px bottom border, `.nav-tabs` border, widget 2px separators, social circle borders, latest-articles title border |
| border-gray  | `#d7d7d7`                    | `.world-btn` outlined variant border (also #d8d8d8 in owl-nav)                                                                 |
| input-gray   | `#959595`                    | footer subscribe input text/placeholder + bottom border                                                                        |
| dark-extra   | `#232323`                    | minor dark hover accents                                                                                                       |
| paper        | `#ffffff`                    | page/section bg, chip bg, hero strip titles, footer headings/links                                                             |
| hero-overlay | `rgba(0,0,0,0.7)`            | `.background-overlay::after`                                                                                                   |
| card-shadow  | `0 2px 8px rgba(0,0,0,0.15)` | `.single-blog-post`                                                                                                            |
| font-heading | "Ubuntu"                     | titles 18px 700, nav 500, links 14px 400, number badges 700 24px, footer h5 700 18px, buttons                                  |
| font-body    | "Work Sans"                  | body copy (300–700)                                                                                                            |

Radii: 50px (pill buttons), 50% (55px number badges, 36px social circles).
Spacing: section padding 100px 0; nav 55px; hero 600px (450/400 responsive);
`post-style-2` thumb 97px; `post-content` padding 20px 30px; post-meta 12px
with 2px #f1f1f1 bottom border (mb 30px); chips 20px tall uppercase 10px
ls 0.75px.

## Implementation task outline

1. Scaffold `apps/atlas` (copy the simplest existing app, rename package to
   `@free-react-templates/atlas`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, Ubuntu (300/400/500/700) + Work Sans
   (300/400/500/600/700) Google Fonts `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #0000ff`,
   `--color-footer: #161616`, `--color-ink: #000`, `--color-text-muted:
#8d8d8d`, `--color-divider: #f1f1f1`, `--color-border: #d7d7d7`,
   `--color-input: #959595`, `--color-dark-extra: #232323`, `--color-paper:
#fff`, `--font-heading: "Ubuntu", sans-serif`, `--font-body: "Work Sans",
sans-serif`. Page bg white.
3. Components: `Navbar` (fixed transparent over hero, white bottom border,
   logo text, Pages dropdown, search overlay toggle, mobile hamburger),
   `HeroSlider` (state carousel of 2 bg-image slides, rgba(0,0,0,0.7) overlay,
   prev/next or dots), `HeroPostStrip` (4 numbered slides, circle badges +
   titles, auto-advance or arrows), `CategoryTabs` (reused twice: "Don't
   Miss" + "What's Trending"; 9 tabs, blue underline, panes from a shared
   posts dataset; prop-driven layout variant — featured+stack vs
   2-col+slider), `TrendingSlider` (carousel of post groups), `Sidebar`
   (About World, Top Stories, Stay Connected with 6 inline-SVG brand icons,
   Today's Pick), `FeaturedCards` (3 post-style-3 cards), `LatestArticles`
   (left rows + right video cards), `LoadMoreButton`, `Footer` (brand +
   copyright, menu, subscribe form with success state).
4. Carousels: state-based index carousels (no new deps); fake timers in tests
   for auto-advance.
5. Subscribe form: email validation, block submit until valid, success
   message swaps the form (assert input absent after submit — input unmounts).
6. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- atlas`.
7. PR: `feat: implement Atlas (ColorLib World)`, description must list source
   template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- The pure-blue #0000ff is the single brand accent: solid pill buttons, link
  hover, active-tab underline, chip text (hover inverts chip to blue bg).
- Nav is transparent over the hero with a white bottom border; nav links are
  white (screenshot) — no scrolled/white variant in the source CSS (the
  header stays fixed with margin-top 20px).
- Hero slides are PURE IMAGERY in the DOM (no headline text on the slides) —
  the numbered-posts strip over the hero bottom carries the headlines. Do
  NOT invent slide headline text.
- Two tab groups share the same 9 labels (All … Features) and can share one
  posts dataset; only the pane LAYOUT differs (group 1: featured + 4-stack;
  group 2: 2-col stacks + sliding row). Tab panes in the source are static
  Bootstrap tab-panes (no AJAX) — client-side state is fine.
- "Politices" is a source typo for "Politics" — keep the source label for
  fidelity (or fix; note the choice in the PR).
- post-style-2 thumb is exactly 97px wide; post-style-3 cards have the chip +
  meta in a justify-between row; post-style-4 rows are horizontal
  thumb+content lists.
- Footer menu links are laid out at 33.3% width each (2-col grid look).
- Footer subscribe: underline input + icon-only arrow button; add a success
  state (input unmounts → test with queryByLabelText absence).
- "World" brand → "Atlas" everywhere (logo, About widget heading "About
  Atlas", footer). Footer "made with <heart> by Colorlib" credit → original
  attribution.
- Screenshot-only elements (scroll-down circle bottom-right of hero) are NOT
  in the DOM — skip (documented in spec).
- All images: `https://picsum.photos/seed/atlas-<n>/<w>/<h>` — suggested seed
  map: hero slides atlas-1..2 (1200×600), featured/tab posts atlas-3..20
  (featured 600×400, small thumbs 97×97 or 200×140), sidebar top-stories
  atlas-21..25, today's pick atlas-26, cards row atlas-27..29, latest rows
  atlas-30..33, videos atlas-34..35. Icons: lucide-react (Search, X, Menu,
  ChevronLeft, ChevronRight, ArrowRight); brand icons (facebook, twitter,
  pinterest, vimeo, instagram, google) as inline SVG paths.
