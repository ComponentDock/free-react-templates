# Ledger — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/ledger`
> (<https://ledger.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Source design: ColorLib **Daren** (`https://colorlib.com/wp/template/daren/`, preview
`https://preview.colorlib.com/theme/daren/`) → recreation name **ledger**. Shipped at
https://ledger.free.componentdock.com.

Row note: `TEMPLATES.md` lists this design twice — row **253** under `## Blog (60)` and row
**372** under `## Bootstrap (216)`) — and both rows link `ledger`. One app, one design listed
twice (`ROW-MULTI`); there is no row pointer to move.

Provenance note (2026-10-24): this brief and `openspec/specs/template-ledger/spec.md` were
rewritten. The earlier pair recorded ColorLib "Accounting" (green `#1BA12D`, Montserrat), a
design `apps/ledger` never rendered; the `SPEC-STALE` verdict in
`docs/spec-row-mismatch.md` (main `268627962`) settled it by matching the app's own copy
against both live previews. Tokens below are re-measured from the Daren sheet.

Scope: a light editorial blog landing page — wordmark navbar with a focus-expanding search
field, two-panel photographic hero with white overlay cards, three-story feature row,
three-card category grid with chips on the image edge, five-row post list + four-widget
sidebar with "LOADING MORE", near-black three-column footer with the newsletter form.
React 19 · Vite · Tailwind CSS 4 · TypeScript.

> Section-level requirements now exist in the spec (`## Requirements`, one `### Feature:` per
> band). Where a band's copy matters, this brief and the spec agree; the spec is the contract.

## Component breakdown (order in `apps/ledger/src/App.tsx`)

### 1. `Header` — spec: Feature: Header and navigation
- [x] Wordmark left, centred nav (Home · Archive · Category · Contact · Pages), Pages dropdown
      ("Single blog", "elements")
- [x] `#wrap` search field that grows 0 → 300 px on focus (`2px solid #ffe4e4`, `#fafafa`),
      magnifier glyph against a `2px solid #a0a5a7` divider
- [x] Four social glyphs (Facebook, Twitter, Instagram, Skype) at 13 px `#2a2a2a`, hidden
      below `lg`
- [x] Sticky past 50 px of scroll (the reference's `menu_fixed` / `fadeInDown`)
- [x] Mobile menu toggle; no dead `href="#"` anywhere

### 2. `Banner` — spec: Feature: Hero band
- [x] Two gutters-free cover panels; white cards at `45px` padding
- [x] Panel 1 card: `max-width: 490px`, centred, `bottom: 160px`
- [x] Panel 2 card: `left: 23%`, `bottom: -96px`, headline clipped by the section edge
- [x] Eyebrow "Creative & Design" 11 px uppercase `#ef1313`; serif `h2` 22 px `#2a2a2a`
- [x] Byline "By Michal / March 30 , 2019" — author span `#0a0a0a` at weight 800

### 3. `FeaturedPosts` — spec: Feature: Feature row
- [x] Three blocks (photo + text): eyebrows "creative design", "Art & illustration",
      "creative design"; serif `h3` 18 px/600
- [x] Icon row **2 Comment · 0 Like · Share** (13 px `#888888`) over a `1px solid #ecf0f2` rule
- [x] Middle block hidden below `lg`

### 4. `BorderDivider` — spec: Feature: Band divider
- [x] `border-top: 5px solid #ffe4e4`, centred, width-clamped per breakpoint
- [x] Rendered twice: after the feature row and after the category grid

### 5. `CategoryGrid` — spec: Feature: Category grid
- [x] Three cards; white chip with `#ef1313` 11 px uppercase text, `padding: 15px 30px`,
      `border-top-right-radius: 10px`, pinned to the image's bottom edge
- [x] Chips "abstract design", "illustration", "brand identity"; serif title 20 px `#2a2a2a`
- [x] Third card hidden below `lg`

### 6. `PostList` — spec: Feature: Post list and Load More
- [x] Five media rows: square thumbnail, `1px solid #e9ecee` left rule, chip
      (`border-top-left-radius: 10px`), `h3`, byline, icon row
- [x] "LOADING MORE" `.btn_1` (`14.5px 22px`, square, `#ef1313`) appends five more rows
- [x] Band padding `100px 0` (80/70 px at narrower breakpoints)

### 7. `Sidebar` — spec: Feature: Sidebar widgets
- [x] Widgets in order: Search Objects · Popular Feeds · Categories · Popular Tags
- [x] Title underline pair: `:before` 15 × 4 px and `:after` 40 × 1 px in `#ef1313`
- [x] Search input on `#f9f9ff`, placeholder "Search Keyword", 50 px square brand button
      (`border-radius: 0`), submission handled in-page
- [x] Popular Feeds = three thumbnail rows separated by `single_border_bottom`
- [x] Tags: Nature, business, tech, News, html — serif `#888888` chips on white

### 8. `Footer` — spec: Feature: Footer and newsletter
- [x] `#111516`, `padding: 100px 0 30px`; columns About Me · Contact us · Newsletter
- [x] Contact blocks: address and phone with icon glyphs
- [x] Newsletter: email field + 49 × 48 px square brand button (`border-radius: 0`),
      inline validation (`aria-invalid`) and a status confirmation
- [x] Copyright bar behind `1px solid #41404f`, crediting Component Dock

## Verification

- [x] `apps/ledger` ships on https://ledger.free.componentdock.com
- [x] Typecheck / lint / tests / build pass (`scripts/verify-app.sh ledger`)
- [x] Section order and copy match the design notes and the spec's eight bands
- [x] Tokens live in `@theme` and match the reference sheet's measured values
- [x] No source-designer name, source URL or source template name under `apps/ledger/`
- [x] Footer links Component Dock
- [ ] Re-check the three reference-only details against the live page if the app is touched
      again: the clipped second hero card, the `#a0a5a7` search divider, the `#ecf0f2` icon-row
      rule

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
