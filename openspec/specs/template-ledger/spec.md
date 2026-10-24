# Template: Ledger (Blog / Magazine)

## Purpose

A light editorial blog landing page in the classic magazine shape: a white wordmark
navbar with a collapsing search field, a two-panel photographic hero whose white overlay
cards carry a red uppercase category eyebrow and a serif headline, a three-story feature
row, a three-card category grid with white category chips sitting on the image edge, a
five-row post list with a four-widget sidebar ("LOADING MORE" beneath it), and a near-black
three-column footer with a newsletter form.

Recreation of the ColorLib **"Daren"** template
(https://colorlib.com/wp/template/daren/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

- **Source slug:** `daren`
- **ColorLib page:** https://colorlib.com/wp/template/daren/
- **Live preview:** https://preview.colorlib.com/theme/daren/ (slug-only path answers **200,
  29,433 B**; the `/theme/bootstrap/daren/` and `/theme/bb/daren/` siblings both 404, so the
  slug-only path is the demo — no prefix is involved)
- **Diagnostic page title:** `DarEn BLOG || HOME` (the wordmark is rendered as the red-and-black
  logo image `img/logo.png`; the served title is the authority for this fact, not a browser
  tab)
- **New name:** `ledger` (apps/ledger, `@free-react-templates/ledger`) — a single lowercase
  word that differs from the source name, has no collision in `apps/` and none in
  `openspec/specs/`
- **Deploy target:** https://ledger.free.componentdock.com (`apps/ledger/public/CNAME`,
  `homepage` in `apps/ledger/package.json`)
- **Category:** Blog / Magazine — TEMPLATES.md `## Blog (60)`, row **253**. The same design is
  listed a second time at row **372** under `## Bootstrap (216)`; both rows link `ledger`, so
  this is one app standing for one design listed twice (`ROW-MULTI`), not two templates.
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/daren-free-template.jpg — **172,229 B**,
  JPEG 1200 × 946 (served as JPEG here, not the usual AVIF; no conversion was needed)

### Why this spec was rewritten

`apps/ledger` shipped recreating this design, but the spec it shipped with named a different
one — ColorLib "Accounting" (a green `#1BA12D` / Montserrat business theme). The
spec ↔ row census (`docs/spec-row-mismatch.md`) flagged the disagreement, and its network
adjudication searched the app's own copy in both candidate previews: every distinctive
string under `apps/ledger/src` occurs in the Daren body ("Creative & Design", "Search
Objects", "Popular Feeds", "LOADING MORE", "Subdue lesser beast winged bearing meat tree
one"), none in the Accounting body — verdict `SPEC-STALE`. This spec is therefore the
measured Daren reference, and `docs/templates/ledger/` was rewritten with it. The app folder
keeps its name: `ledger` does not equal the source slug, so rule 5 is satisfied and no
rename is needed.

## Reference readings (2026-10-24, `curl -4`)

`preview.colorlib.com` answers IPv4 only from this host — plain `curl` (IPv6 first) hangs, so
every probe below passes `-4`. Sizes are wire bytes; hashes are the canonical `curl` body.

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/daren/` page | 29,433 | — (page bodies are request-unstable; bytes only) |
| `theme/daren/css/style.css` (token authority) | 123,435 | `427b90d065d4f203af45cbb473f7edeec8b2986532408a2231e1444e83b37177` |
| `theme/daren/css/bootstrap.min.css` (vendor, no design tokens) | 27,374 | `f7824716a710442bf556c8baff34ddb86bacb95b587012c49b3b3d1d1823a9dc` |
| `theme/daren/css/animate.css` (vendor) | 55,499 | `ac6ab293294886d5592b11233b3e77a08d7045e7d7d46446d82030ffe81a0d8f` |
| `theme/daren/css/owl.carousel.min.css` (vendor, unused by this page) | 214 | `814e8e293a46d6124e3c5dadb4d1ba3a6d1f4f9e686ad1b721444afef5d93497` |
| `theme/daren/css/themify-icons.css` (icon face) | 1,316 | `82ac862ff856a6f29dc52a5602e5d9e28a0008d2c3b2529d4e23d53ff08dccc9` |
| `theme/daren/css/liner_icon.css` (icon face) | 820 | `d17bf02fefeead1a139372e8d846d7e4b1558f2b1f3b43126305126bdca94061` |
| `theme/daren/css/search.css` (header search overlay) | 541 | `24bbfcc053e9232c5f7227fc94f59a59288124d109761e5da83b7d1201fab0fa` |
| `theme/daren/js/custom.js` (behaviour) | 424 | `cff480607f9f5a96493930146a621baf047233c8024ae916bdbba62faae43efb` |
| screenshot (above) | 172,229 | — |

- **No archive twin:** `https://preview.colorlib.com/downloads/free/daren.zip` answers **404**,
  so the live preview is the sole DOM/CSS reference. That is not an unreachable reference —
  the page, its sheet and every inner page are live and were read.
- **Style sheet set:** the page links `css/bootstrap.min.css`, `css/animate.css`,
  `css/owl.carousel.min.css`, `css/themify-icons.css`, `css/liner_icon.css`, `css/search.css`,
  `css/style.css`. Only `style.css` carries design tokens; the vendor sheets contribute
  Bootstrap defaults the theme overrides.
- **Behaviour (`js/custom.js`, 424 B):** one rule — past `scrollTop() + 1 > 50` the header
  gains `menu_fixed animated fadeInDown` (the sticky shrink), removed below that. Plus the
  `#default-select` guard for `niceSelect()`, which this page's markup never triggers. There
  is no slider script on the home page (`owl.carousel` is loaded but no `.owl-carousel`
  element exists), so the hero is static markup, not a carousel.
- **Anchor census (51 anchors in the live home page):** 28 → `single-blog.html`,
  11 → `category.html`, **6 dead `href="#"`** (the Pages dropdown toggle, the four social
  icons and "LOADING MORE"), 2 → `index.html`, 1 each → `archive.html`, `contact.html`,
  `elements.html`, and 1 external → `https://colorlib.com` (the footer credit line, which
  this recreation replaces with Component Dock). `index.html` on this theme *is* the page
  itself (byte-identical to the directory URL), so those two are no-ops rather than 404s.
- **Inner pages are live** and are the reference for anything the home page does not show:
  `single-blog.html` (**200, 26,631 B**, breadcrumb "Blog Single", post body, author box,
  comments), `category.html` (**200, 21,230 B**, breadcrumb "Category Page", same post list +
  sidebar), `archive.html` (**200, 26,192 B**, breadcrumb "Post Archive"), `contact.html`
  (**200, 12,196 B**, "Get in Touch" + address/phone/email blocks), `elements.html`
  (**200, 35,989 B**, "Text Sample" / "Sample Buttons"). Each carries the same header,
  `header.breadcrumb.breadcrumb_bg` band and footer.

## Design tokens

Extracted from `theme/daren/css/style.css` (123,435 B, sha above). Counts are hex
occurrences in that sheet.

### Colors

| Token | Value | Usage (reference sheet) |
| --- | --- | --- |
| `--color-brand` | `#ef1313` | Vivid red brand — **46** declarations: `.btn_1` and `.button` fill, the 11 px uppercase eyebrow `h5` on every card, the white category chip's text, `h3`/`a` hover, the sidebar-title underline pair (`:before` 15 × 4 px, `:after` 40 × 1 px), the sidebar search button, the footer newsletter button |
| `--color-brand-tint` | `#ffe4e4` | **7**: the `5px` `.border_top` band divider (five breakpoint variants) and the expanded header-search border (`2px solid`) |
| `--color-ink` | `#2a2a2a` | **9**: nav links, the banner headline, card `h3`, sidebar widget titles, tag links, and the `.btn_1` hover fill |
| `--color-heading` | `#2f373d` | **3**: the global `h1…h6` colour (headings default here, cards override to `#2a2a2a`) |
| `--color-meta` | `#8a8a8a` | **6**: the byline paragraph (13 px, weight 600) |
| `--color-muted` | `#888888` | **5**: `.post_icon` list items (13 px) and the tag links |
| `--color-author` | `#0a0a0a` | **3**: the author span inside the byline (13 px, weight 800) |
| `--color-soft` | `#f9f9ff` | **27**: input/textarea fills (`.single-input`, `.single-textarea`), the generic button family, blockquote and progress table — the off-white panel tint |
| `--color-line` | `#e9ecee` | **7**: the list-card `border-left` (`post_3`) |
| `--color-hairline` | `#ecf0f2` | **3**: the `.post_icon` top rule — the divider between a card's byline and its comment/like/share row |
| `--color-footer-bg` | `#111516` | Footer canvas (`padding: 100px 0 30px`) |
| `--color-footer-top` | `#41404f` | Copyright bar's `1px` top border |
| `--color-footer-text` | `#8f8f8f` | Footer copy; the newsletter input's text |
| `--color-input-text` | `#999999` | Placeholder/typed text in the header and sidebar search fields |
| `--color-white` | `#fff` | **52**: page canvas, navbar, the hero overlay cards, the category chips, tag chips |

Secondary literals present in the sheet but owned by unused demo widgets — do **not**
promote them to theme tokens: `#415094` (7, `.genric-btn` colour), `#4cd3e3` (7),
`#38a4ff` (6), `#f4e700` (6), `#f44a40` (6) — the four brand-colour swatches of the
"elements" demo, `#f1f1f1` (6), `#000` (5), `#eee` (5), `#777` (4), `#a0a5a7` (4).

### Fonts

| Role | Family | Notes |
| --- | --- | --- |
| Body / UI | `"Open Sans", sans-serif` | `body` = `font-size: 14px`, margin/padding 0; bylines 13 px/600, eyebrow 11 px/600–700, nav links 14 px |
| Headings | `"Source Serif Pro", serif` | Global `h1…h6` (colour `#2f373d`, `line-height: 1.2em`); card titles weight 600, `line-height: 1.333` |
| Icons | `themify-icons`, `liner_icon` | The reference paints comment/heart/share, search, arrows and the footer's home/phone glyphs from these faces — re-implement with `lucide-react` |

The sheet's own import is
`@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700|Source+Serif+Pro:400,600,700");`
— verified **200** with a browser UA, and both families also resolve on the `css2` API
(`Open+Sans` and `Source+Serif+Pro`, with and without the `wght@400;600;700` axis). Load the
same two families from Google Fonts in `index.html`; never copy the theme's font files.

Type scale measured in the sheet: `h1` 36 px · `h2` 30 px (`line-height: 28px`, then `1.222`)
· `h3` 24 px · `h4` 18 px · `h5` 18 px; banner headline 22 px; card title 20 px
(`line-height: 1.333`) and 18 px inside `.feature_post`; eyebrow 11 px; byline 13 px;
sidebar widget title 24 px/600; footer `h4` 24 px/700 and `h5` 16 px.

### Button shape

- **Primary** (`.btn_1`): `padding: 14.5px 22px`, `font-size: 14px`, white text on
  `#ef1313`, **square** (no `border-radius` declared), `text-transform: capitalize`, hover
  fill `#2a2a2a`. Used by "LOADING MORE" (with a trailing chevron) and the two category-style
  calls to action.
- **Generic** (`.button`): `padding: 12px 54px`, `font-size: 15px`, weight 500,
  `border-radius: 4px`, brand fill, white text.
- **Icon buttons, square**: sidebar search `50px` wide, `border-radius: 0px`, brand fill;
  footer newsletter `49 × 48px`, `border-radius: 0px`, brand fill.
- **Category chip** (`.category_btn`): white fill, brand text, `text-transform: uppercase`,
  `font-size: 11px`, weight 600, `padding: 15px 30px`, pinned to the image's bottom edge with
  `border-top-right-radius: 10px` (`post_2`) or `border-top-left-radius: 10px` (`post_3`).
- **Radii present in the sheet:** `0px` (8), `3px` (7), `50%` (6), `8px` (6), `8.5px` (5),
  `5px` (2), `12px` (2), `4px` (1) — the layout itself is square-cornered; the radii belong to
  demo widgets and to the category chip.

### Section backgrounds and rhythm

- Header `header.main_menu`: white, no shadow at rest; past 50 px of scroll it becomes
  `.menu_fixed` (sticky + `fadeInDown`).
- Hero `section.banner_post`: two full-bleed photograph panels (`banner_post_bg_1`,
  `banner_post_bg_2`, `background-size: cover`), each carrying a **white** overlay card —
  panel 1 `max-width: 490px`, centred, `bottom: 160px`, `padding: 45px`; panel 2 anchored
  `left: 23%`, `bottom: -96px`, `padding: 45px 144px 50px 50px`.
- `section.feature_post`, `section.catagory_post`, `section.all_post`: white `#fff`.
  `section.all_post` carries `.section_padding` = `padding: 100px 0` (80 px / 70 px at the
  narrower breakpoints).
- Band separators: `div.border_top` = `border-top: 5px solid #ffe4e4`, centred and width-
  clamped per breakpoint (`1110px` → `930px` → `690px` → `510px` → `90%`).
- Footer `footer.footer-area`: `#111516`, `padding: 100px 0 30px`; copyright bar separated by
  `1px solid #41404f` and `margin-top: 83px`.

## Section structure (DOM order)

Verified against the live DOM on 2026-10-24 (`<section>`/`<header>`/`<footer>` classes, in
document order) and cross-checked with the screenshot.

1. **Header** (`header.main_menu`) — `img/logo.png` wordmark (red "E" inside black text) at
   the left; centred `ul.navbar-nav` with **Home · Archive · Category · Contact · Pages**
   (Pages is a `href="#"` dropdown holding "Single blog" and "elements"); at the right a
   `#wrap` search field — `input#search` with placeholder "Search here" that grows from
   `0` to `300px` on focus (`2px solid #ffe4e4`, left radii 10 px, `#fafafa` fill) beside a
   magnifier `span` whose `2px solid #a0a5a7` right border divides it from **four** social
   icons (Facebook, Twitter, Instagram, Skype — `d-none d-lg-block`, 13 px, `#2a2a2a`).
   Under 50 px of scroll the bar is static; past it, sticky with `fadeInDown`.
2. **Hero** (`section.banner_post`) — two panels side by side, edges flush (the section's
   `col` padding is zeroed). Panel 1: pink still-life photograph, white card with eyebrow
   "Creative & Design" and `h2` "All said replenish years void kind say void" plus the byline
   "By **Michal** / March 30 , 2019". Panel 2: green eggs photograph, white card anchored
   bottom-right whose headline is clipped by the section edge in the reference screenshot
   (only "saying" and the byline are visible) — keep the clipping behaviour, not a shortened
   title.
3. **Feature row** (`section.feature_post`) — three `.single_feature_post.post_1` blocks, each
   a photograph beside a text column: eyebrow `h5` ("creative design", "Art & illustration",
   "creative design"), serif `h3` ("Subdue lesser beast winged bearing meat tree one",
   "Hath form you given fac one under behold night give", "Greater whales morning firsts you
   moveth morning"), byline, and the icon row **2 Comment · 0 Like · Share** above a
   `#ecf0f2` hairline. The middle block is hidden below `lg`
   (`d-block d-sm-none d-lg-block`).
4. **Divider** — `div.border_top` (5 px `#ffe4e4`).
5. **Category grid** (`section.catagory_post`) — three `.single_catagory_post.post_2` cards:
   image with a white category chip on its bottom edge ("abstract design", "illustration",
   "brand identity"), then the serif title ("Subdue lesser beast winged bearing meat tree
   one") and icon row. Third card hidden below `lg`.
6. **Divider** — `div.border_top`.
7. **Post list + sidebar** (`section.all_post.section_padding`) — `col-lg-8`: **five**
   `.single_post.media.post_3` rows (square thumbnail left, `1px solid #e9ecee` left rule on
   the text column, category chip, `h3` "Called face there light this said wherein replenish
   sadin made green grass", byline, icon row), then a centred "**LOADING MORE**" `.btn_1`.
   `col-lg-4` sidebar: **Search Objects** (input on `#f9f9ff` + red square button with a
   search glyph), **Popular Feeds** (three thumbnail rows, each title + byline, separated by
   `single_border_bottom`), **Categories** (link list), **Popular Tags** (chips: Nature,
   business, tech, News, html — serif, `#888888`, white fill). Every widget title sits over
   the red 15 × 4 px / 40 × 1 px underline pair.
8. **Footer** (`footer.footer-area`, `#111516`) — three columns: **About Me** (paragraph),
   **Contact us** (home + phone glyph blocks: "Los angeles, United States" / "659, Rocky beach
   bullevard, santa monica, Rocky beach, USA." and "+44 6532 986 652" / "Mon to Fri 9am to
   6 pm."), **Newsletter** (paragraph + email field with a red square arrow button). Then the
   centred copyright bar, where the reference prints its own credit; this recreation prints
   the Component Dock credit instead.

## Requirements

### Feature: Header and navigation

The template SHALL render the white wordmark navbar with the five primary entries, a Pages
dropdown, the focus-expanding search field and the four social icons.

#### Scenario: Navigation entries

- **GIVEN** the page is loaded at a desktop width
- **WHEN** the header is displayed
- **THEN** it SHALL show the wordmark and the links Home, Archive, Category, Contact, Pages
- **AND** every entry SHALL resolve to a real in-page target — no dead `href="#"` anchor

#### Scenario: Pages dropdown

- **GIVEN** the header is displayed
- **WHEN** the user activates "Pages"
- **THEN** it SHALL reveal "Single blog" and "elements"
- **AND** `aria-expanded` SHALL be `true` while open and `false` once dismissed

#### Scenario: Search field

- **GIVEN** the header is displayed
- **WHEN** the user focuses the search input
- **THEN** it SHALL grow from zero width to `300px` and take focus
- **AND** its border SHALL be `2px solid #ffe4e4` on a `#fafafa` fill
- **AND** the magnifier glyph beside it SHALL sit against a `2px solid #a0a5a7` divider

#### Scenario: Sticky header

- **GIVEN** the page is at the top
- **WHEN** the user scrolls past 50 px
- **THEN** the header SHALL stick to the viewport top
- **AND** it SHALL return to its static position above that threshold

#### Scenario: Social icons

- **GIVEN** the header is displayed at a desktop width
- **WHEN** it renders
- **THEN** it SHALL show four social icons (Facebook, Twitter, Instagram, Skype) in 13 px
  `#2a2a2a`
- **AND** they SHALL be hidden below the `lg` breakpoint

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user activates the menu toggle
- **THEN** a stacked menu SHALL show the primary links plus the Pages entries
- **AND** the search field SHALL collapse to its glyph so the bar stays one row

### Feature: Hero band

The template SHALL render two side-by-side photographic panels, each carrying a white
overlay card with the red eyebrow, the serif headline and the byline.

#### Scenario: Two panels

- **GIVEN** the hero band is displayed
- **WHEN** it renders
- **THEN** it SHALL show two cover-cropped photographs side by side with no gutter
- **AND** the second panel's card SHALL be anchored to its bottom-right so the headline is
  clipped by the section edge

#### Scenario: Overlay card anatomy

- **GIVEN** a hero panel is displayed
- **WHEN** its card renders
- **THEN** it SHALL show a white `#fff` card with `45px` padding
- **AND** the eyebrow SHALL be "Creative & Design" in 11 px uppercase `#ef1313`
- **AND** the headline SHALL be the panel's serif title in `#2a2a2a`
- **AND** the byline SHALL read "By Michal / March 30 , 2019" with the author span in
  `#0a0a0a` at weight 800

### Feature: Feature row

The template SHALL render three photograph-and-text feature blocks with eyebrow, title,
byline and the comment/like/share row.

#### Scenario: Three feature blocks

- **GIVEN** the feature row is displayed
- **WHEN** it renders at a desktop width
- **THEN** it SHALL show three blocks, each a photograph beside a text column
- **AND** each eyebrow SHALL be 11 px uppercase `#ef1313` and each title serif `#2a2a2a` at
  18 px with weight 600

#### Scenario: Icon row

- **GIVEN** a feature block is displayed
- **WHEN** its meta area renders
- **THEN** it SHALL show "2 Comment", "0 Like" and "Share" in 13 px `#888888`
- **AND** a `1px solid #ecf0f2` rule SHALL separate them from the byline above

#### Scenario: Responsive collapse

- **GIVEN** the viewport is narrower than the `lg` breakpoint
- **WHEN** the row renders
- **THEN** the middle block SHALL be hidden
- **AND** the remaining two SHALL stack

### Feature: Band divider

The template SHALL separate the feature row and the category grid with the brand-tint rule.

#### Scenario: Divider rule

- **GIVEN** the page is scrolled between the two bands
- **WHEN** the divider renders
- **THEN** it SHALL be a `5px` top border in `#ffe4e4`
- **AND** its width SHALL be centred and clamped per breakpoint (1110 / 930 / 690 / 510 px,
  then 90 %)

### Feature: Category grid

The template SHALL render three category cards whose white chip sits on the bottom edge of
the image.

#### Scenario: Card anatomy

- **GIVEN** the category grid is displayed
- **WHEN** the cards render
- **THEN** each card SHALL show its photograph with a white chip reading its category in
  11 px uppercase `#ef1313`
- **AND** the chip SHALL carry `border-top-right-radius: 10px` and `padding: 15px 30px`
- **AND** the title below SHALL be serif `#2a2a2a` at 20 px with the comment/like/share row

#### Scenario: Third card hides on small screens

- **GIVEN** the viewport is narrower than the `lg` breakpoint
- **WHEN** the grid renders
- **THEN** only two cards SHALL be visible

### Feature: Post list and Load More

The template SHALL render a five-row post list with a "LOADING MORE" control beneath it.

#### Scenario: List rows

- **GIVEN** the post-list band is displayed
- **WHEN** it renders
- **THEN** it SHALL show five rows, each with a square photograph, a category chip, a serif
  title, a byline and the comment/like/share row
- **AND** the text column SHALL carry a `1px solid #e9ecee` left rule

#### Scenario: Load more

- **GIVEN** five rows are visible
- **WHEN** the user activates "LOADING MORE"
- **THEN** five further rows SHALL be appended
- **AND** each SHALL carry the same anatomy and the list SHALL keep its single column

### Feature: Sidebar widgets

The template SHALL render four sidebar widgets in the documented order, each titled with the
brand underline pair.

#### Scenario: Widget order

- **GIVEN** the sidebar is displayed
- **WHEN** it renders
- **THEN** it SHALL show Search Objects, Popular Feeds, Categories and Popular Tags in that
  order
- **AND** each title SHALL carry the `15 × 4px` and `40 × 1px` `#ef1313` rules beneath it

#### Scenario: Search widget

- **GIVEN** the search widget is displayed
- **WHEN** the user types and submits
- **THEN** the input SHALL sit on `#f9f9ff` with a placeholder "Search Keyword"
- **AND** the submit control SHALL be a `50px`-wide square brand-filled button with no radius
- **AND** the submission SHALL be handled in-page, never by a navigation

#### Scenario: Popular feeds, categories, tags

- **GIVEN** the sidebar is displayed
- **WHEN** those three widgets render
- **THEN** Popular Feeds SHALL list three thumbnail rows with title and byline, separated by
  `single_border_bottom`
- **AND** Categories SHALL list its category links
- **AND** Popular Tags SHALL show Nature, business, tech, News and html as serif `#888888`
  chips on white

### Feature: Footer and newsletter

The template SHALL render the near-black three-column footer with the newsletter form and the
Component Dock attribution.

#### Scenario: Column content

- **GIVEN** the page is scrolled to the footer
- **WHEN** the footer renders on `#111516`
- **THEN** it SHALL show About Me, Contact us (address and phone blocks) and Newsletter
- **AND** the copyright bar SHALL be separated by `1px solid #41404f`
- **AND** the footer SHALL link to https://www.componentdock.com/

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an empty or malformed address
- **THEN** it SHALL show an inline error and mark the input `aria-invalid`
- **AND** no confirmation SHALL be shown
- **AND** when a valid address is submitted the form SHALL be replaced by a status message

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under `apps/ledger/`
may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code,
comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec,
`TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL
credit Component Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ledger/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] The eight bands render in the DOM order above: header, hero, feature row, divider,
      category grid, divider, post list + sidebar, footer.
- [ ] Header shows the wordmark, five entries, the Pages dropdown, the focus-expanding search
      field and four social icons; no anchor is a dead `href="#"`.
- [ ] Header sticks past 50 px of scroll and returns to static above it.
- [ ] Hero renders two gutters-free panels with white `45px`-padded cards; the second card is
      clipped at the bottom-right as in the reference.
- [ ] Eyebrows are 11 px uppercase `#ef1313`; card titles are `"Source Serif Pro"` weight 600
      in `#2a2a2a`; the author span is `#0a0a0a` at weight 800.
- [ ] Dividers are `5px solid #ffe4e4` and width-clamped per breakpoint.
- [ ] Category chips are white with `#ef1313` 11 px uppercase text, `padding: 15px 30px`,
      `border-top-right-radius: 10px`.
- [ ] Post list shows five rows with the `#e9ecee` left rule; "LOADING MORE" appends five more.
- [ ] Sidebar shows the four widgets in order with the red underline pair; the search button is
      a `50px` square with `border-radius: 0`.
- [ ] Footer is `#111516` with the `#41404f` copyright rule; the newsletter rejects invalid
      input (inline error, `aria-invalid`) and confirms a valid one.
- [ ] Tokens live in `@theme` (`#ef1313`, `#ffe4e4`, `#2a2a2a`, `#2f373d`, `#8a8a8a`,
      `#888888`, `#0a0a0a`, `#f9f9ff`, `#e9ecee`, `#ecf0f2`, `#111516`, `#41404f`,
      `#8f8f8f`, `#999999`; Open Sans + Source Serif Pro) and are consumed through Tailwind
      classes.
- [ ] No app file mentions ColorLib, the source domain or the source name; placeholders only
      (seeded `picsum.photos` images), no copied assets.
- [ ] `apps/ledger/public/CNAME` is `ledger.free.componentdock.com` and `homepage` in
      `apps/ledger/package.json` matches it.
- [ ] `openspec validate template-ledger --type spec` passes and `scripts/verify-app.sh ledger`
      is green (typecheck + lint + 100 % coverage + build).

## Prep status (rewritten 2026-10-24)

This spec replaces the previous one, which recorded ColorLib "Accounting" (preview
`https://preview.colorlib.com/theme/accounting/`, green `#1BA12D`, Montserrat) — a design
`apps/ledger` does not render. The rewrite follows the `SPEC-STALE` verdict in
`docs/spec-row-mismatch.md` (main `268627962`, network adjudication) and re-measures every
token from the Daren sheet read on 2026-10-24; the byte/hash table, the anchor census, the
inner-page inventory and the screenshot note above are that reading. `docs/templates/ledger/`
was re-derived in the same commit. Provenance-only correction is not possible here: the body,
the token table and the Requirements all belonged to the other design.
