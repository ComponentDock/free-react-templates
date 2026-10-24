# Ledger — Design Notes

Reference: **Daren** — `https://colorlib.com/wp/template/daren/`
Live preview: `https://preview.colorlib.com/theme/daren/` (HTTP 200, 29,433 B, read 2026-10-24)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/daren-free-template.jpg (172,229 B, JPEG 1200 × 946)
Shipped: https://ledger.free.componentdock.com

A light editorial blog landing page: white wordmark navbar with a collapsing search field,
two-panel photographic hero with white overlay cards, a three-story feature row, a
three-card category grid whose white chips sit on the image edge, a five-row post list with
a four-widget sidebar and "LOADING MORE", and a near-black three-column footer with the
newsletter form.

Provenance note: this brief and `openspec/specs/template-ledger/spec.md` were rewritten on
2026-10-24. The earlier pair recorded ColorLib "Accounting" (green `#1BA12D`, Montserrat) —
a design `apps/ledger` does not render. The spec ↔ row census adjudicated the app's own copy
in both previews (`SPEC-STALE` in `docs/spec-row-mismatch.md`, main `268627962`), and the
tokens below were re-measured from the Daren sheet. `TEMPLATES.md` lists the design twice
(row 253 under `## Blog (60)`, row 372 under `## Bootstrap (216)`); both rows link `ledger`,
which is one app for one design listed twice, so there is no pointer to fix and no rename
(`ledger` ≠ `daren`, rule 5 holds).

## Typography

Loaded by `index.html` (Google Fonts): **Open Sans** (`400`, `400i`, `600`, `700`) and
**Source Serif Pro** (`400`, `600`, `700`) — the same pair the reference `@import`s
(`css?family=Open+Sans:400,400i,600,700|Source+Serif+Pro:400,600,700`, verified 200).

| role | face | reference sizes |
| --- | --- | --- |
| body / UI | Open Sans | body 14 px; byline 13 px/600; eyebrow 11 px/600–700; nav 14 px; icon row 13 px |
| headings | Source Serif Pro | `h1` 36 · `h2` 30 (`line-height` 28 px then 1.222) · `h3` 24 · `h4` 18 · `h5` 18; hero `h2` 22; card `h3` 20/1.333 (18 inside the feature row); sidebar title 24/600; footer `h4` 24/700 |

Global heading colour in the reference is `#2f373d` (`.h1…h6`), but every card headline
overrides it to `#2a2a2a`.

## Design tokens (`apps/ledger/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ef1313` | brand (46 declarations: primary button fill, eyebrow, chip text, hovers, sidebar-title rules, icon buttons) |
| `--color-brand-tint` | `#ffe4e4` | brand tint (5 px band divider + expanded search border) |
| `--color-ink` | `#2a2a2a` | ink (nav links, hero and card headlines, widget titles, primary-button hover fill) |
| `--color-heading` | `#2f373d` | heading (global `h1…h6`) |
| `--color-author` | `#0a0a0a` | author span in the byline |
| `--color-meta` | `#8a8a8a` | meta (byline paragraph) |
| `--color-muted` | `#888888` | muted (icon-row items, tag links) |
| `--color-footer-text` | `#8f8f8f` | footer copy / newsletter text |
| `--color-input-text` | `#999999` | search field text |
| `--color-footer-bg` | `#111516` | footer canvas |
| `--color-dropdown` | `#fafafa` | expanded search fill |
| `--color-line` | `#e9ecee` | list-card left rule |
| `--color-hairline` | `#ecf0f2` | icon-row top rule |
| `--color-footer-border` | `#3b3f40` | newsletter input border |
| `--color-footer-top` | `#41404f` | copyright top rule |
| `--color-soft` | `#f9f9ff` | soft panel (input fills) |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | body face |
| `--font-display` | `'Source Serif Pro', Georgia, serif` | heading face |

Every value above is a literal in `theme/daren/css/style.css` (123,435 B, sha256
`427b90d065d4f203af45cbb473f7edeec8b2986532408a2231e1444e83b37177`); nothing is
pixel-sampled. Radii in the reference are
square by default (`0px` ×8) — the only shaped surfaces are the category chip
(`border-top-right-radius: 10px` / `border-top-left-radius: 10px`) and the
expanded search field's left corners (10 px).

## Document order

Order read from `apps/ledger/src/App.tsx`, band anatomy from the live DOM.

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Feature: Header and navigation | wordmark + 5 entries + Pages dropdown + search + 3 social icons; sticky past 50 px |
| 2 | `Banner` | Feature: Hero band | two cover panels, white overlay cards (panel 2 clipped bottom-right) |
| 3 | `FeaturedPosts` | Feature: Feature row | three photo+text blocks, middle hidden below `lg` |
| 4 | `BorderDivider` | Feature: Band divider | `border-top: 5px solid #ffe4e4` |
| 5 | `CategoryGrid` | Feature: Category grid | three cards with white category chip on the image edge |
| 6 | `BorderDivider` | Feature: Band divider | second divider, same rule |
| 7 | `PostList` + `Sidebar` | Feature: Post list and Load More · Feature: Sidebar widgets | five media rows in `col-lg-8`; four widgets in `col-lg-4` |
| 8 | `Footer` | Feature: Footer and newsletter | About Me · Contact us · Newsletter; Component Dock credit |

## Section-by-section fidelity

### `Header` — `header.main_menu`
Wordmark image (black text, red "E") at the left; centred nav **Home · Archive · Category ·
Contact · Pages** where Pages opens "Single blog" / "elements"; right side = a `#wrap` search
field (`input#search`, placeholder "Search here", grows 0 → `300px` on focus, `2px #ffe4e4`
border, `#fafafa` fill) with a magnifier `span` whose `2px solid #a0a5a7` right border divides
it from **four** social glyphs (Facebook, Twitter, Instagram, Skype) at 13 px in `#2a2a2a`,
all `d-none d-lg-block`. Past 50 px of scroll the bar gains `menu_fixed` (sticky +
`fadeInDown`) — that is the whole of `js/custom.js` (424 B). Reference anchors: 28 → a
single-post page, 11 → a category page, 2 → `index.html` (a no-op: that URL is this page),
and exactly 6 dead `#` (the Pages toggle, the four social icons, LOADING MORE). The
recreation resolves every nav entry in-page: no dead anchors.

### `Banner` — `section.banner_post`
Two panels, gutters zeroed (`col` padding 0), `background-size: cover`. Panel 1's card:
`max-width: 490px`, centred, `bottom: 160px`, `padding: 45px`. Panel 2's card: `left: 23%`,
`bottom: -96px`, `padding: 45px 144px 50px 50px`, so its headline is clipped by the section
edge — the screenshot shows only the word "saying" and the byline. Reproduce the clipping,
not a shortened title. Both cards: eyebrow "Creative & Design" (11 px uppercase `#ef1313`),
serif `h2` 22 px in `#2a2a2a`, byline "By **Michal** / March 30 , 2019" (13 px `#8a8a8a`,
author span `#0a0a0a` at weight 800).

### `FeaturedPosts` — `section.feature_post`
Three `.post_1` blocks, each a photograph beside a text column: eyebrow ("creative design",
"Art & illustration", "creative design"), serif `h3` 18 px/600, byline, then the icon row
**2 Comment · 0 Like · Share** (13 px `#888888`) above a `1px solid #ecf0f2` rule. The middle
block is `d-block d-sm-none d-lg-block` — hidden below `lg`.

### `BorderDivider` — `div.border_top`
`border-top: 5px solid #ffe4e4`, centred, width-clamped per breakpoint
(1110 → 930 → 690 → 510 px → 90 %). It is a hairline of brand tint, not a section background.

### `CategoryGrid` — `section.catagory_post`
Three `col-lg-4` cards. The chip (`.category_btn`) is white, `#ef1313`, 11 px/600 uppercase,
`padding: 15px 30px`, pinned `bottom: -5px` with `border-top-right-radius: 10px`; the
reference chips read "abstract design", "illustration", "brand identity". Title below the
image is serif 20 px `#2a2a2a` with the icon row. Third card hidden below `lg`.

### `PostList` + `Sidebar` — `section.all_post.section_padding`
`.section_padding` = `padding: 100px 0` (80/70 px at narrower breakpoints). `col-lg-8` holds
**five** `.post_3` media rows: square thumbnail, `1px solid #e9ecee` left rule on the text
column, chip with `border-top-left-radius: 10px`, `h3` 20 px, byline, icon row; then a
centred "LOADING MORE" `.btn_1` (`14.5px 22px`, square, `#ef1313`, chevron).
`col-lg-4` sidebar, in order: **Search Objects** (input on `#f9f9ff`, placeholder "Search
Keyword", 50 px square brand button), **Popular Feeds** (three thumbnail rows, each
`single_border_bottom`), **Categories** (link list), **Popular Tags** (Nature, business,
tech, News, html — serif `#888888` chips on white). Widget titles are 24 px/600 with the
`:before` 15 × 4 px and `:after` 40 × 1 px `#ef1313` rules.

### `Footer` — `footer.footer-area`
`#111516`, `padding: 100px 0 30px`. Three columns: About Me (paragraph), Contact us (home
glyph + "Los angeles, United States" / "659, Rocky beach bullevard, santa monica, Rocky
beach, USA.", phone glyph + "+44 6532 986 652" / "Mon to Fri 9am to 6 pm."), Newsletter
(paragraph, email field, 49 × 48 px square brand arrow button, `border-radius: 0`). The
centred copyright bar sits behind a `1px solid #41404f` rule and carries the Component Dock
credit where the reference credits its own author.

## Source → React adaptation

| reference mechanism | recreation |
| --- | --- |
| jQuery `menu_fixed` toggle on scroll | `useEffect` scroll listener toggling a sticky class after 50 px |
| `input-group` + icon font buttons | Tailwind flex group; `lucide-react` glyphs (`Search`, `ChevronRight`, arrow) |
| `.niceSelect()` on `<select>` | not used — the layout has no select control |
| `owl.carousel.min.css` loaded, no carousel element | omitted; the hero is static markup |
| Themify / liner icon faces (`ti-comment`, `ti-heart`, `ti-export`, `ti-angle-right`, `lnr-arrow-right`) | `lucide-react` equivalents, same sizes and colours |
| Photos (`img/banner_blog/*.png`, `img/feature_post/*.png`, `img/post/*.png`, `img/sidebar/*.png`) | seeded `picsum.photos` placeholders (`ledger-*` seeds), no copied asset |
| Page-to-page links (`single-blog.html`, `category.html`, …) | in-page anchors / client-side state — no dead `href="#"` |
| Reference's own footer credit | Component Dock credit (delivery contract below) |

## Deltas from the reference

- Photographs are deterministic placeholders; the reference's collage imagery is not copied.
- Icons come from `lucide-react`, never the reference's icon fonts.
- The reference's inner pages (single post, category, archive, contact, elements) are not
  rebuilt: the recreation is the single home page, so their links resolve in-page.
- The reference's six dead `href="#"` anchors are not reproduced.
- Copy is lorem-of-the-same-kind; the headline/eyebrow/byline structure is preserved.

## Sibling comparison

Daren sits in ColorLib's blog family beside Blogger (a light editorial theme whose measured
sheet pairs Poppins for both headings and body, pill-shaped buttons and a light-blue brand
`#69b4fd` — the reading `template-quill` records) and the reading/accordion themes
(`readit`, `author`). Against Blogger, Daren's identity is the opposite set of choices: a
serif display face over a sans body, a red brand on square buttons, and a hero made of two
clipped photographic panels with overlaid white cards rather than one full-bleed banner. If
a band looks "too soft or too round", it has drifted toward the Blogger sibling.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string, it is what the source band renders: the recreation
  replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/ledger/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ledger/public/CNAME` = `ledger.free.componentdock.com`
  and the package `homepage` = `https://ledger.free.componentdock.com`.
