# Zesty (ColorLib Yummy) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-zesty`.

## Source mapping

- **ColorLib item:** "Yummy" (TEMPLATES.md — appears 3×: lines 298, 1499,
  2481; all three rows point to the same source, one prep covers all;
  verified with `grep -c 'wp/template/yummy/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/yummy/
- **Preview URL:** https://preview.colorlib.com/theme/yummy/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~21.7 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/yummy/css/style.css
  (~42.7 KB) — also imports bootstrap.min.css, font-awesome.min.css,
  nice-select.css, slicknav.min.css (internal css/ subfolder). Site is
  jQuery + slicknav + class-based filtering — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`yummy-minimal-food-blog-website-template.jpg`, 1200×988)

**DO NOT USE for fidelity.** The listing screenshot shows an older/different
"Yummy Blog" variant (utility bar, script logo, GET PATTERN button) and
pixel-sampling shows a gray-dominant palette with no pink accent — it does
not match the live template at all. The live preview DOM + parsed stylesheet
are the authoritative reference.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Header** `header.header-section` — padding-top 65px / padding-bottom
   30px, white. `div.container`:
   - `div.logo > a > img` (logo.png → recreate as bold text "ZESTY", 700,
     ~28px, `#353535`).
   - `div.nav-menu > nav.main-menu.mobile-menu > ul`: Home, Pages
     (`ul.sub-menu` dropdown: About Me, Categories, Recipe, Blog, Contact),
     Recipes, Best Of, Contact. Links: 20px 700 `#353535`, padding 5px;
     hover underline = `a:after` 2px `#FC0254`, width 100%, bottom -3px,
     opacity 0→1 (transition 0.2s).
   - `div.nav-right.search-switch` → opens `div.search-model` fullscreen
     overlay: `form.search-model-form > input#search-input` placeholder
     "Search here....." + `div.search-close-switch` ("+" close).
   - `div#mobile-menu-wrap` — slicknav mobile menu (hamburger on narrow).
2. **Page-top recipes** `section.page-top-recipe` — container > row, padding-
   bottom 110px. Columns (order-lg-1 / order-lg-2 / order-lg-3):
   - Center `col-lg-6.order-lg-2`: `div.pt-recipe-item.large-item` —
     `div.pt-recipe-img.set-bg` (`data-setbg="img/recipe-3.jpg"`,
     background-size cover, `::after` hover overlay opacity 0.34) +
     `div.pt-recipe-text` — white inline-block card, `margin-top: -56px`
     (overlaps image bottom), padding 19px 35px 30px, text-align center,
     z-index 999: `span` meta (14px 700 `#878787`, line-height 30px) + `h3`
     (700 `#353535`, line-height 33px).
   - Left `col-lg-3.order-lg-1`: 2 × `pt-recipe-item` (img + h4 700
     `#353535`, line-height 30px).
   - Right `col-lg-3.order-lg-3`: 2 × `pt-recipe-item` (same).
3. **Top recipes** `section.top-recipe.spad` — bg `#F8F9FB`, `.spad` 100px
   top/bottom padding (bottom overridden to 60px), position relative.
   - `div.section-title` — width 470px, bg `#FC0254`, text-align right,
     padding 18px 0 18px 40px, `position: absolute; top: -57px; left: 0` →
     `h5` white 700 "Top Recipes this Week".
   - `div.container.po-relative` + `div.plus-icon` — absolute right 0,
     top -157px, 80×57px `#FC0254`, white "+" centered (line-height 57px).
   - `col-lg-6`: `div.top-recipe-item.large-item` — `div.top-recipe-img.set-bg`
     height 514px, `::after` overlay opacity 0.5 + `div.top-recipe-text`:
     `div.cat-name` pill (`#FC0254` bg, white 12px 700 uppercase, padding
     4px 25px, inline-block) + `a > h4` (700, margin 23px 0 20px) + `p`
     excerpt (mb 0).
   - `col-lg-6`: 4 × `div.top-recipe-item` (mb 40px) — row:
     `col-sm-4` `div.top-recipe-img.set-bg` (+ `i.fa.fa-plus` hover icon) +
     `col-sm-8` `div.top-recipe-text` (cat-name + `a > h4` + `p`).
4. **Categories filter** `div.categories-filter-section.spad` — bg `#F8F9FB`.
   - `div.filter-item > ul` (centered, `col-lg-12.text-center`): `li.active`
     "Vegetarian" (`data-filter="*"`), "Most popular" (`.mostpopular`),
     "Meat Lover" (`.meatlover`), "Gluten Free" (`.glutenfree`) — 700
     `#353535`, padding 15px 42px, inline-block, cursor pointer.
   - `div.cf-filter#category-filter`: 5 × `div.cf-item.mix.all[+category
classes]` — `float: left; width: calc(20% - 32px); margin-right: 40px;
margin-bottom: 30px` (5-across desktop); `div.cf-item-pic > img`
     (min-width 100%) + `div.cf-item-text` (centered, padding 18px 15px 0) >
     `h5` (700 `#353535`, line-height 27px). All 5 titles are the same
     placeholder "Sunday Brunch: Spaghetti and Eggs Recipe".
5. **Featured recipes** `section.feature-recipe` — bg `#F8F9FB`, padding
   55px 0, position relative. `div.section-title` (same pink bar) > `h5`
   "Featured Recipes"; `div.container.po-relative` + `div.plus-icon`.
   Row: 2 × `col-lg-6` `div.fr-item` (mb 30px): `div.fr-item-img`
   (float left, margin-right 30px) > img + `div.fr-item-text` (padding
   32px 0 25px): `h4` (700 `#353535`, line-height 30px, mb 10px) + `p`
   excerpt.
6. **Footer** `footer.footer-section` — bg `#EAEDF2`, padding-top 70px.
   - `col-lg-5` `div.fs-left`: `div.logo > a > img` (footer-logo.png) + `p`
     blurb.
   - `col-lg-6.offset-lg-1`: `form.subscribe-form` (padding-top 25px,
     margin-bottom 38px): `h3` "Subscribe to our newsletter" (700 `#353535`,
     mb 20px) + input (height 64px, width `calc(100% - 225px)`, border 1px
     solid #fff, padding-left 34px, italic 16px `#353535`, margin-right
     15px) + button (border 1px `#FC0254`, bg `#FC0254`, white 18px 700,
     padding 17px 40px, min-width 205px, cursor pointer); then
     `div.social-links`: 5 × `a` (inline-block, margin-right 35px, mb 15px)
     — icon + `span` label: Instagram, Pinterest, Facebook, Twitter, Youtube.
   - `div.copyright-text` (14px `#b8c1d0`, padding 50px 8px): "Copyright ©
     <year> All rights reserved | This template is made with <heart> by
     Colorlib" → original attribution.

## Design tokens (from style.css — computed)

| Token      | Value     | Usage                                                                                              |
| ---------- | --------- | -------------------------------------------------------------------------------------------------- |
| brand-pink | `#FC0254` | section-title bars, cat-name pills, plus-icon box, subscribe button bg/border, nav hover underline |
| ink        | `#353535` | nav links, headlines (h3/h4/h5), filter pills, subscribe h3, input text                            |
| meta-gray  | `#878787` | page-top category `span`                                                                           |
| section-bg | `#F8F9FB` | top-recipe / categories-filter / feature-recipe backgrounds                                        |
| footer-bg  | `#EAEDF2` | footer background                                                                                  |
| copyright  | `#b8c1d0` | copyright text                                                                                     |
| paper      | `#ffffff` | page bg, pt-recipe-text card, subscribe input border                                               |
| font-body  | "PT Sans" | whole site; headings 700                                                                           |

Radii: none (square corners; pills get their shape from horizontal padding).
Spacing: header 65px/30px; `.spad` 100px; section-title bar 470px wide, 18px
vertical padding; pt-recipe-text -56px overlap; top-recipe large img 514px;
subscribe input 64px; button 17px 40px min-width 205px; fr-item-img float-left
30px gap; cf-item `calc(20% - 32px)` + 40px margin.

## Implementation task outline

1. Scaffold `apps/zesty` (copy the simplest existing app, rename package to
   `@free-react-templates/zesty`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, PT Sans (400/700) Google Fonts
   `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #FC0254`,
   `--color-ink: #353535`, `--color-meta: #878787`, `--color-section:
#F8F9FB`, `--color-footer: #EAEDF2`, `--color-copyright: #b8c1d0`,
   `--color-paper: #fff`, `--font-body: "PT Sans", sans-serif`. Page bg
   white.
3. Components: `Navbar` (logo text, centered links, Pages dropdown, search
   trigger + fullscreen search overlay, mobile hamburger), `PageTopRecipes`
   (6/3/3 grid, large center card with -56px overlapping white text card),
   `TopRecipes` (pink section-title bar + plus-icon, large card + 2×2 small
   grid with cat-name pills and hover "+"), `CategoryFilter` (4 pills +
   5-card filterable grid via client-side state), `FeaturedRecipes` (2
   horizontal cards), `Footer` (brand + blurb, subscribe form with
   validation + success swap, 5 text social links as inline SVG brand icons,
   copyright).
4. Search overlay: state-based open/close, focus input, Escape/close control.
5. Subscribe form: email validation, block submit until valid, success
   message swaps the form (input unmounts → assert `queryByLabelText`/
   `queryByRole` absence after submit).
6. Filter grid: 5 cards with `category` tags (mostpopular/meatlover/glutenfree
   subsets); active pill state; filtered rendering; test the "Meat Lover"
   scenario.
7. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- zesty`.
8. PR: `feat: implement Zesty (ColorLib Yummy)`, description must list source
   template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- Hot pink `#FC0254` is the single brand accent — used for the overlapping
  section-title bars, the cat-name pills, the plus-icon box, the subscribe
  button, and the nav hover underline. Do NOT soften it.
- The section-title bars and plus-icon boxes are ABSOLUTE-positioned
  decorations overlapping section edges (top -57px bar, -157px plus box) —
  recreate the overlap; do not render them as in-flow headers.
- Square corners everywhere; "pill" look comes from cat-name's 25px
  horizontal padding, not border-radius.
- The 5 filter-grid cards all share the same placeholder title in the source
  — vary the titles in the recreation (paraphrase is fine; the layout/kind
  of content must match).
- Nav hover underline: implement as a pseudo-element/span underline 2px
  `#FC0254` growing on hover (opacity transition 0.2s).
- pt-recipe-text card overlaps its image by 56px (white card with centered
  text, z-index above the image).
- Category pills: white 12px 700 uppercase text on `#FC0254`, padding 4px
  25px, inline-block.
- Footer subscribe input is white-bordered (1px solid #fff) on the `#EAEDF2`
  footer — keep the white border even though the bg is light gray.
- Social links have TEXT LABELS (Instagram, Pinterest, Facebook, Twitter,
  Youtube) next to the icons — not icon-only. lucide-react removed brand
  icons → inline SVG brand icons (simple-icons paths).
- "Zesty" brand replaces "Yummy" everywhere (logo, blurb). Footer "made with
  <heart> by Colorlib" credit → original attribution.
- All images: `https://picsum.photos/seed/zesty-<n>/<w>/<h>` — suggested
  seed map: page-top large zesty-1 (640×460), page-top smalls zesty-2..5
  (360×300), top-recipe large zesty-6 (570×514), top-recipe smalls
  zesty-7..10 (200×160 + text 320×160), filter cards zesty-11..15 (260×260),
  featured zesty-16..17 (300×220). Icons: lucide-react (Search, X, Menu,
  Plus, ChevronDown); brand icons inline SVG.
