# Binnacle — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V16"** (source slug `website-menu-16`) — the Website Menus
family's **dark utility strip + white in-flow bar + centred gold-slab rows + search field**
variant. Its features, in order of visual weight:

- a **centred heading band** (`section.ftco-section{padding:7em 0}` = `112px 0`) over a **`#fafafa`**
  page, carrying one `28 px` black heading whose source text reads `Website menu #06`;
- a **full-bleed dark strip** (`div.wrap`, `background:#202020`, **no padding**, **34 px** tall)
  holding a white `12 px` phone link at its left (with a grey `12.56 × 16` phone glyph) and **four
  `34 × 34` square `#4d4d4d` social tiles** at its right (`border-radius:0`, `1 px` apart, hover
  fill **`#f1bc31`**, glyphs **not rendered** — no icon font ships);
- a **white in-flow bar** (`nav.ftco-navbar-light`, `background:#fff !important`, `padding:0`,
  `z-index:3`, `box-shadow:0 5px 20px -17px rgba(0,0,0,.34)`, **never sticky**, ≈**83.8 px** tall)
  laid out wordmark → **centred** row list → search field;
- a **two-line wordmark** (`20 px`/`700`/uppercase `#000` over a `12 px`/`500` `#000` `display:block`
  span, `padding:5px 0`, `margin-right:16px`, ≈ `114 × 42`);
- **five `11 px` UPPERCASE rows with `letter-spacing:2px`** (`#4d4d4d`, `padding:32px 20px` →
  **83.8 px** tall — they *set* the bar's height), **centred inside the bar by `margin:auto`**
  (`cl-m-auto`, ≈ 132.7 px per side at 1440 px): `Home` (current) · `Page` (dropdown) · `Catalog` ·
  `Blog` · `Contact`;
- the **gold slab** row treatment: a full-height `::before` (`width:100%; height:100%; bottom:0;
  left:0; z-index:-1`) in **`#f1bc31`**, hidden at rest (`visibility:hidden`,
  `transform:scaleX(0)`), wiped in on hover (`.2s ease-in-out`) **together with a white label**,
  and worn **permanently** by the current row (desktop);
- a **white `257 × 46` search field** (`border:1px solid rgba(0,0,0,.05)`, **`border-radius:5px`**,
  input `calc(100% - 46px)` / `46 px` / `border:none` / `#fff` / `rgba(0,0,0,.7)` / `14 px`, submit
  **46 × 46** with a magnifier glyph) — **second in the DOM but ordered last** on screen at
  ≥992 px (`order:13`), flush with the container's content right edge;
- a **`Page` dropdown**: white surface, `border:none`, `min-width:160px`, `padding:8px 0`,
  `margin:2px 0 0`, **`border-radius:4px`**, `box-shadow:0 10px 34px -20px rgba(0,0,0,.41)`,
  **four** items `12 px`/`#000`/`padding:4px 24px` with a **`#f1bc31` hover fill + white ink**, and
  a **rendered `6 × 3` currentColor caret** on the trigger;
- below **`992 px`** the bar **keeps its white surface** but becomes a wrapping, `10px 15px`-padded
  chrome with a `☰ MENU` toggler (**third in DOM**, `rgba(0,0,0,.5)`, uppercase `16 px`,
  `letter-spacing:.1em`) that reveals an **in-flow full-width panel** (`flex-basis:100%`,
  height-animated `0.35s ease`) of five **49.6 px** rows (`padding:14.4px 0`), with the submenu
  **permanently expanded** inside it (`display:block !important`, `position:static`, no shadow);
- the mobile chrome **wraps**: **66 px** at 768–991 px, **82 px** at 767 px (brand bottom margin),
  **128 px** at 375 px (search + toggler drop to a second line).

The source page holds **nothing else** — no content sections, no images, no footer, no second page,
no sticky chrome — and it is shorter than the viewport (`439.8 px` tall at desktop widths;
`documentElement.scrollHeight === clientHeight`, `scrollWidth === innerWidth`). **14** of its
**15** anchors are dead `href="#"` (the 15th is the wordmark's `index.html`).

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/website-menu-16/` | **200**, 109,014 B, sha256 `487c65f3…`, title *"Website Menu V16 - Free Menu & Top Bar Template 2026 - Colorlib"*, `datePublished` 2021-03-09T14:22:30+00:00, `dateModified` 2026-09-25T10:42:07+00:00, author Rok Krivec |
| Slug-only preview | `https://preview.colorlib.com/theme/website-menu-16/` | **404** (family-wide gap — **not** a dead preview) |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/website-menu-16/` | **200**, 6,506 B, `<title>Website menu 06</title>`, sha256 `8c3d57e5…` |
| Stylesheet | `…/bootstrap/website-menu-16/css/style.css?v=b66eaf1a` | **200**, 22,999 B, 164 rule blocks, 20 `@media`, 4 `@font-face`, sha256 `b7307351…` |
| Behaviour JS | `…/bootstrap/website-menu-16/js/snippet.js?v=53830328` | **200**, 5,798 B, sha256 `19132f19…` |
| Snippet archive | `https://preview.colorlib.com/downloads/free/website-menu-16.zip` | **200**, 260,102 B ("254 KB"), sha256 `7ee6418d…`; ships `index.html` 6,303 B (`f773a5b8…`), `css/style.css` + `js/snippet.js` **byte-identical** to the live copies, `README.md` 1,264 B, 8 Roboto woff2 (247,856 B), **no `images/`** |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-16.jpg` | **200**, served **AVIF** despite the `.jpg` name, 7,158 B, 1200 × 972, sha256 `119210f6…` → PNG 46,772 B, inspected visually |
| `diff` live ↔ archive `index.html` | — | **head-only** (two `noindex` metas, `cdnjs` `dns-prefetch`, `fetchpriority`, `?v=` busters) — the archive is the live preview's readable twin |

Everything below was read from the sheet by `curl` **and** re-read in the browser (byte-identical,
sha256 `b7307351…`), then cross-checked against the live render at 1440 / 1200 / 992 / 991 / 768 /
767 / 375 px. Tokens come from the sheet (canonical); geometry comes from the render.

## DOM skeleton (live preview, 6,506 B — archive twin 6,303 B)

```
section.ftco-section                       (padding:7em 0 — the WHOLE page lives inside it)
├─ div.cl-container
│  └─ div.cl-row.cl-justify-content-center
│     └─ div.cl-col-md-6.cl-text-center.cl-mb-5
│        └─ h2.heading-section  →  "Website menu #06"        (own copy in the recreation)
├─ div.wrap                               (background:#202020 — the dark strip, 34 px)
│  └─ div.cl-container                    (1140/960/720/540, padding:0 15px)
│     └─ div.cl-row.cl-justify-content-between   (margin:0 -15px, 34 px)
│        ├─ div.cl-col
│        │  └─ p.cl-mb-0.phone            (16 px, color:gray)
│        │     ├─ span.fa.fa-phone › inline SVG glyph (12.56 × 16, fill:currentColor → #808080)
│        │     └─ a[href="#"]             ("+00 1234 567", #fff, 12 px)
│        └─ div.cl-col.cl-d-flex.cl-justify-content-end
│           └─ div.social-media › p.cl-mb-0.cl-d-flex
│              └─ 4 × a.cl-d-flex.cl-align-items-center.cl-justify-content-center[href="#"]
│                    (34 × 34, #4d4d4d, radius 0, margin-right 1px, hover #f1bc31)
│                    └─ span.fa.fa-<network> › i.cl-sr-only  (NO glyph — renders 0 × 0)
└─ nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark.ftco_navbar.ftco-navbar-light.cl-bg-dark
   └─ div.cl-container                    (padding:0 15px at ≥992 px, 0 below)
      ├─ a.cl-navbar-brand[href="index.html"]   →  "Papermag <span>Magazine</span>"
      ├─ form.searchform.order-sm-start.cl-order-lg-last[action="#"]     ← 2nd in DOM, order:13
      │  └─ div.cl-form-group.cl-d-flex
      │     ├─ input.cl-form-control.cl-pl-3[type=text][placeholder="Search"]
      │     └─ button.cl-form-control.search[type=submit] › span.fa.fa-search › inline SVG (16.7 × 18)
      ├─ button.cl-navbar-toggler[data-toggle=collapse][data-target="#ftco-nav"]
      │        [aria-controls=ftco-nav][aria-expanded=false][aria-label="Toggle navigation"]
      │  └─ span.fa.fa-bars › inline SVG (13.7 × 16)  +  text "Menu"      ← 3rd in DOM
      └─ div#ftco-nav.cl-collapse.cl-navbar-collapse
         └─ ul.cl-navbar-nav.cl-m-auto                (margin:auto !important → CENTRED)
            ├─ li.cl-nav-item.cl-active  › a.cl-nav-link[href="#"]  "Home"
            ├─ li.cl-nav-item.cl-dropdown
            │  ├─ a.cl-nav-link.cl-dropdown-toggle[href="#"][id=dropdown04]
            │  │     [data-toggle=dropdown][aria-haspopup=true][aria-expanded=false]  "Page"
            │  │     └─ ::after  = 6 × 3 currentColor triangle (border-top:.3em solid)
            │  └─ div.cl-dropdown-menu[aria-labelledby=dropdown04]
            │     └─ 4 × a.cl-dropdown-item[href="#"]     "Page 1"…"Page 4"
            ├─ li.cl-nav-item › a.cl-nav-link[href="#"]  "Catalog"
            ├─ li.cl-nav-item › a.cl-nav-link[href="#"]  "Blog"
            └─ li.cl-nav-item › a.cl-nav-link[href="#"]  "Contact"
```

## CSS token reference (from `css/style.css`, canonical)

```
/* page frame */
body            { font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
                  font-weight:normal; background:#fafafa; color:gray; }        /* gray = #808080 */
a               { transition:.3s all ease; color:#f1bc31; }
h2, .h2         { line-height:1.5; font-family:"Poppins", Arial, sans-serif;
                  font-weight:400; color:#000; }
.heading-section{ font-size:28px; color:#000; }
.ftco-section   { padding:7em 0; }                                /* 112px 0, no x-padding */

/* the dark strip */
.wrap           { background:#202020; }                           /* 34px, no padding */
.wrap .phone a  { color:#fff; font-size:12px; }

/* social tiles */
.social-media          { display:inline-block; }
.social-media p a      { width:34px; height:34px; background:#4d4d4d; margin-right:1px; }
.social-media p a span { color:#fff; }                            /* no icon font → blank square */
.social-media p a:hover{ background:#f1bc31; border-color:#f1bc31; }

/* the bar */
.ftco-navbar-light { background:#fff !important; z-index:3; padding:0;
                     box-shadow:0px 5px 20px -17px rgba(0,0,0,.34); }
.ftco-navbar-light .cl-navbar-brand       { color:#000; text-transform:uppercase;
                                            font-weight:700; font-size:20px; line-height:1; }
.ftco-navbar-light .cl-navbar-brand span  { display:block; font-size:12px; font-weight:500; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link {
  font-size:11px; padding:2rem 20px; font-weight:500; color:#4d4d4d; text-transform:uppercase;
  letter-spacing:2px; position:relative; opacity:1 !important; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:before {
  content:""; position:absolute; width:100%; height:100%; bottom:0; left:0;
  background-color:#f1bc31; visibility:hidden; transform:scaleX(0);
  transition:all .2s ease-in-out 0s; z-index:-1; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:hover { color:#fff; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:hover:before {
  visibility:visible; background-color:#f1bc31; transform:scaleX(1); }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item.cl-active > a        { color:#fff; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item.cl-active > a:before {
  visibility:visible; background-color:#f1bc31; transform:scaleX(1); }   /* permanent slab */

/* dropdown restyle (framework base supplies position/top/left/z-index/160px/padding/margin) */
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item .cl-dropdown-menu {
  border:none; background:#fff; box-shadow:0px 10px 34px -20px rgba(0,0,0,.41);
  border-radius:4px; }
… .cl-dropdown-item            { font-size:12px; color:#000; }
… .cl-dropdown-item:hover,
  .cl-dropdown-item:focus      { background:#f1bc31; color:#fff; }

/* search field */
.searchform                        { height:46px; border:1px solid rgba(0,0,0,.05);
                                     overflow:hidden; border-radius:5px; }
.searchform .cl-form-control       { width:calc(100% - 46px); border:none;
                                     background:#fff !important; color:rgba(0,0,0,.7) !important;
                                     font-size:14px; }
.searchform .search                { width:46px; height:46px; }
.searchform .search span           { font-size:18px; }              /* .cl-icon → 18px glyph */
.cl-form-control                   { height:46px !important; background:#fff !important;
                                     color:#000 !important; font-size:14px; border-radius:0px;
                                     box-shadow:none !important; border:1px solid rgba(0,0,0,.1); }
.cl-form-control:focus, :active    { border-color:#000; }

/* toggler */
.ftco-navbar-light .cl-navbar-toggler       { border:none; color:rgba(0,0,0,.5) !important;
                                              cursor:pointer; padding-right:0;
                                              text-transform:uppercase; font-size:16px;
                                              letter-spacing:.1em; }
.ftco-navbar-light .cl-navbar-toggler:focus { outline:none !important; }

/* framework base worth keeping (all Bootstrap-blue values are overridden / unused here) */
.cl-container   { width:100%; padding:0 15px; margin:auto; }  /* max-width 540/720/960/1140 */
.cl-row         { display:flex; flex-wrap:wrap; margin:0 -15px; }
.cl-col         { flex-basis:0; flex-grow:1; max-width:100%; padding:0 15px; }
.cl-col-md-6    { flex:0 0 50%; max-width:50% at ≥768px; padding:0 15px; }
.cl-m-auto      { margin:auto !important; }
.cl-collapse:not(.cl-show) { display:none; }
.cl-collapsing  { position:relative; height:0; overflow:hidden; transition:height .35s ease; }
.cl-icon        { height:1em; width:auto; fill:currentColor; display:inline-block; }
.cl-dropdown-toggle::after { display:inline-block; margin-left:.255em; vertical-align:.255em;
                             content:""; border-top:.3em solid; border-right:.3em solid transparent;
                             border-bottom:0; border-left:.3em solid transparent; }
```

`@media (max-width:991.98px)` block (all four pieces matter):

```
.cl-navbar-expand-lg > .cl-container { padding-right:0; padding-left:0; }
.ftco-navbar-light                   { background:#fff; position:relative; top:0; padding:10px 15px; }
.ftco-navbar-light .cl-navbar-nav    { padding-bottom:10px; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link {
  padding-left:0; padding-right:0; padding-top:.9rem; padding-bottom:.9rem; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:hover { color:#fff; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item .cl-dropdown-menu {
  display:block !important; background:#fff; box-shadow:none; }      /* submenu ALWAYS open */
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item.cl-active > a { color:#000; }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item.cl-active > a:before { display:none; }

@media (max-width:767.98px) {
  .ftco-navbar-light .cl-navbar-brand { margin-bottom:20px; }
  .ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link {
    border-bottom:1px solid rgba(0,0,0,.05); }
}
```

## Screenshot analysis (1200 × 972, AVIF → PNG)

A browser-chrome mock of the rendered page (`preview.colorlib.com` in the URL bar):

1. **Heading band** — `Website menu #06` centred in black, generous white space above it.
2. **Dark strip** — one full-width `#202020` band carrying `+00 1234 567` at the left (with a small
   phone glyph) and four **dark-grey square tiles** at the right. In the mock those tiles **show**
   glyphs (a facebook `f`, a bird, a camera, a dribbble ball) because ColorLib's own page loads
   Font Awesome — the shipped snippet does not, so the live render shows **blank squares** and the
   recreation must supply real icons.
3. **White bar** — `PAPERMAG` over `MAGAZINE` (two-line black uppercase lockup) at the left, then
   the uppercase rows `HOME` (**white label on a solid gold block** — the current row) ·
   `PAGE` with a small dark ▾ · `CATALOG` · `BLOG` · `CONTACT`, then the white `Search` field with a
   magnifier at the right end. A soft shadow separates the bar from the page below.
4. **The rest of the frame is empty `#fafafa`** — no content sections, no footer.

## Section-by-section

### 1 — Page frame and heading band (`section.ftco-section`)

`padding:112px 0`, **no horizontal padding** (which is what makes the strip full-bleed), background
inherited from `body` (**`#fafafa`**). The heading is `28 px` / weight `400` / `line-height:1.5`
(42 px) / **`#000`**, centred inside `div.cl-col-md-6.cl-text-center.cl-mb-5`
(`flex:0 0 50%` at ≥768 px, `padding:0 15px`, margin-bottom `8px` + `48px`) → the strip's top edge
lands at **`y = 210`** (112 + 42 + 8 + 48) and the bar at **`y = 244`** at every width.

### 2 — Dark utility strip (`div.wrap`)

`background:#202020`, **no padding**, `display:block`, `position:static`, full-bleed, measured
**1440 × 34 at `y = 210`**. The height is decided by the **34 px social tiles**, not by the 28.8 px
phone line (16 px × 1.8). Inside: `div.cl-container` (1140 px at 1440, `x = 150`) ›
`div.cl-row.cl-justify-content-between` (34 px) › two `div.cl-col`s (`padding:0 15px`).

- **Phone** (`p.phone.cl-mb-0`): 16 px, `color:gray` (`#808080`), `margin-bottom:0`, measured
  **540 × 28.8 at `x = 165`**. The glyph is `span.fa.fa-phone` › inline SVG **12.56 × 16** with
  `fill:currentColor` → **grey `#808080`** (a `body{color:gray}` inheritance accident), while the
  link text is **`#fff` at `12 px`** (`line-height:21.6px`), measured **73.8 × 14 at `x = 182`**.
  Reproduce the grey glyph or normalise both to white — record the choice as a delta.
- **Socials** (`div.social-media` › `p.cl-mb-0.cl-d-flex` › four anchors): **34 × 34**,
  `background:#4d4d4d`, **`border-radius:0`** (squares — the family's other social rows are circles),
  `display:flex` + centred, **`margin-right:1px`**, `transition:.3s all ease`, hover →
  **`#f1bc31`**. Measured at `x = 1135, 1170, 1205, 1240` (group **140 × 34**), the last tile flush
  with the container's content right edge (**1275**). **The glyphs render 0 × 0**: no icon font and
  no `.fa-*` rule ship, and each `span.fa` holds only an `<i class="cl-sr-only">`. Real
  `lucide-react` glyphs are a delta; the `sr-only` accessible names exist and must be preserved.

### 3 — The white bar (`nav.ftco-navbar-light`)

`background:#fff !important`, `padding:0`, `z-index:3`,
`box-shadow:0px 5px 20px -17px rgba(0,0,0,.34)`, `position:relative` — **zero `sticky`/`fixed` in
the whole sheet**. Measured **1440 × 83.8 at `y = 244`**; full-bleed, while its container is the
standard tier (1140/960/720/540 with `padding:0 15px`, `flex-wrap:nowrap` at ≥992 px). Reading it
left→right at 1440 px: wordmark **114.1 × 42 at `x = 165`** → collapsible wrapper
**722.9 px at `x = 295.1`** (`flex-basis:auto; flex-grow:1; align-items:center`) → search form
**257 × 46 at `x = 1018 → 1275`**. **No** radius, **no** hairline rules, **no** CTA (the `-07`/`-11`
siblings' CTA and the `-14`/`-15` card treatment are absent here).

### 4 — Two-line wordmark (`a.cl-navbar-brand`)

`20 px` / `700` / `text-transform:uppercase` / `line-height:1` / **`#000`** with `padding:5px 0` and
`margin-right:16px`, plus a `display:block` **`12 px` / `500`** `#000` span underneath (the source
reads `Papermag` / `Magazine` — never reused). Measured **114.1 × 42**, second line at
`y = 289.9`. Hover colour is identical to rest (`.cl-navbar-brand:hover,:focus{color:#000}`) →
add a hover affordance (delta). Below `767.98px` it takes **`margin-bottom:20px`**, which is what
pushes the mobile chrome to **82 px** at 767 px and helps it wrap at 375 px.

### 5 — The centred row list (`ul.cl-navbar-nav.cl-m-auto`)

`display:flex; flex-direction:row` at ≥992 px, **centred by `cl-m-auto` → `margin:auto !important`**
(≈ **132.7 px** resolved per side at 1440 px — *not* `justify-content`, *not* `margin-left:auto`),
measured **457.4 × 83.8 at `x = 427.8 → 885.2`**. Each row's link: **`font-size:11px`**,
`font-weight:500`, uppercase, **`letter-spacing:2px`**, **`padding:2rem 20px`** (32px 20px →
**83.8 px** tall, which sets the bar's height), `color:#4d4d4d`, `position:relative`,
`opacity:1 !important`, `line-height:19.8px`. Measured widths at 1440 px: `Home` **81** (current),
`Page` **86.6** (caret adds 8.8 px), `Catalog` **104.9**, `Blog` **78.6**, `Contact` **106.4**.

**The gold slab is the whole row interaction** (see the token block): a full-height `::before` at
`bottom:0; left:0`, `z-index:-1`, `#f1bc31`, hidden (`visibility:hidden`, `scaleX(0)`),
`transition:all .2s ease-in-out 0s`; hover reveals it **and turns the label `#fff`**; the current
row wears it permanently with a white label. Verified live: `::before` on `Home` =
`rgb(241,188,49)` + `matrix(1,0,0,1,0,0)` while the four siblings sat `hidden` +
`matrix(0,0,0,1,0,0)`, and a forced `:hover` on a sibling rendered the same gold block with white
ink in the 1440 px screenshot. There is **no** underline and **no** border.

### 6 — `Page` dropdown (`.cl-dropdown-menu`)

Framework base: `position:absolute; top:100%; left:0; z-index:1000; display:none` (→ `block` with
`.cl-show`), `min-width:10rem` (**160 px**), `padding:.5rem 0`, `margin:.125rem 0 0`,
`background-color:#fff`, `border:1px solid rgba(0,0,0,.15)`, `border-radius:.25rem`. The custom
block then sets `border:none`, `background:#fff`,
`box-shadow:0px 10px 34px -20px rgba(0,0,0,.41)`, **`border-radius:4px`**; items are **`12 px`**,
**`#000`**, `padding:.25rem 1.5rem` (**4px 24px** → **29.6 px** rows), `line-height:21.6px`, and
`:hover,:focus` → **`background:#f1bc31; color:#fff`**. Measured open at 1440 px:
**160 × 134.4 at `x = 508.8, y = 329.8`** (flush under the trigger's left edge: 244 + 83.8 + 2),
items 29.6 px each with the 8 px top/bottom padding of the panel. **Below 992 px the panel is
permanently expanded** — `display:block !important`, `position:static`, `background:#fff`,
`box-shadow:none`, radius kept — measured **345 × 134.4** at 375 px inside the open panel, with the
`Page` row at 411.6 and the four items running 471.2 → 589.5.

**Caret:** this variant *does* render one — `.cl-dropdown-toggle::after`, the framework's
`border-top:.3em solid` triangle, measured **6 × 3 px**, `border-top-color:rgb(77,77,77)`,
`margin-left:2.805px`, `vertical-align:2.805px`, `display:inline-block`. It is **currentColor**, so
it turns white with the label on hover.

**Behaviour (`js/snippet.js`, 5,798 B):** three independent bindings — (a) **hover**:
`mouseenter`/`mouseleave` on every `nav .cl-dropdown` toggles `cl-show` on the `li` **and** the menu
and keeps `aria-expanded` in sync; (b) **collapse**: the toggler's `click` runs the
`cl-collapsing` → animated → `cl-show` cycle (`transition:height .35s ease`); (c) **dropdown
data-API**: trigger `click` opens/closes (with a viewport-overflow guard flipping
`left:auto; right:0`), `ArrowDown` on the trigger opens + focuses the first item,
`ArrowDown`/`ArrowUp` rove focus, `Escape` closes and refocuses the trigger, outside click closes.
Reproduce all three in React.

### 7 — Search field (`form.searchform.order-sm-start.cl-order-lg-last`)

`height:46px`, `border:1px solid rgba(0,0,0,.05)`, `border-radius:5px`, `overflow:hidden`,
`margin:0`, and **`order:13` at ≥992 px** (via `cl-order-lg-last`) although it is the **second child
of the bar's container**. Measured **257 × 46 at `x = 1018 → 1275`**, flush with the container's
content right edge at every tier (1440: `x = 1018`; 1200: `x = 898`; 992: `x = 704`).

- **Input** `input.cl-form-control.cl-pl-3`: computed **209 px** (`calc(100% - 46px)`),
  **`height:46px`** (a final `.cl-form-control{height:46px !important}` beats the framework's
  `calc(1.5em + .75rem + 2px)` = 38 px), `border:none`, `background:#fff !important`,
  `color:rgba(0,0,0,.7) !important`, `font-size:14px`, `padding:6px 12px 6px 16px`.
- **Submit** `button.cl-form-control.search[type=submit]`: **46 × 46**, white, `border:none`, ink
  `rgba(0,0,0,.7)`, magnifier SVG **16.7 × 18** (`.searchform .search span{font-size:18px}` with
  `.cl-icon{height:1em}`), at `x = 1228 → 1274`.
- **Never hidden** at any width, and **nothing visibly changes on focus** in the source (the input
  has no border and `:focus{border-color:#000}` therefore paints nothing) → restore real
  `focus-visible` rings and a working submit (delta).

### 8 — Toggler (`button.cl-navbar-toggler`)

`border:none`, **`color:rgba(0,0,0,.5) !important`** (dark glyph on a WHITE bar — note the
`-14`/`-15` siblings are white-on-black), `cursor:pointer`, `padding:4px 0 4px 12px` (the variant
rule zeroes the right padding), `text-transform:uppercase`, `font-size:16px`, `letter-spacing:.1em`
(measured `1.6px`), focus `outline:none !important`. Content = the inline 3-bar SVG (**13.7 × 16**)
+ the word `Menu`; measured **85.3 × 24.7**, `display:none` at ≥992 px. It is the **third child** of
the bar's container (brand → search → toggler → collapse), which is why at 375 px it sits *after*
the search field on the wrapped second line.

### 9 — Mobile chrome and the in-flow panel

Below `992 px` the container's gutters are **zeroed** (`.cl-navbar-expand-lg > .cl-container
{padding:0}`) and the bar takes `padding:10px 15px` — **still `#fff`**. Three heights, all from the
same block:

| Width | Bar height | Why |
| --- | --- | --- |
| 768–991 | **66** | one line: brand (42) + search (46) + toggler (24.7), tallest = 46, + 20 padding |
| 767 | **82** | brand gains `margin-bottom:20px` → the flex line is `42 + 20 = 62` tall, + 20 padding |
| 375 | **128** | the flex row **wraps**: line 1 = brand (62), line 2 = search (46) + toggler (24.7) = 108, + 20 padding |

The list (`#ftco-nav`) carries `flex-basis:100%; flex-grow:1; align-items:center` **outside** any
media query, so opening the toggler appends a full-width in-flow line: measured **345 px** wide at
375 px, list **394.3 px** tall = 5 rows × **49.6 px** (padding `14.4px 0` = `.9rem`) + the
permanently-expanded submenu **134.4 px** + `padding-bottom:10px` + the submenu's `2px` margin.
Rows are left-aligned `#4d4d4d` at `11 px`/`2px` letter-spacing with a
`1px solid rgba(0,0,0,.05)` bottom rule below `767.98px`; the **current** row is **`#000`** with its
slab `display:none`. The dropdown becomes `position:static`, white, shadowless, radius kept.
(The transition itself is frozen in a backgrounded tab — `document.hidden === true` — so the panel's
final height was taken from the inner list's rect while the wrapper sat at `0 px` mid-animation;
the class/`aria` state `cl-collapsing` + `aria-expanded="true"` is the behavioural evidence.)

### 10 — Materialised sections (delta) + footer (delta)

The source has **nothing below the bar**: the recreation must add real content of the same *kinds*
as the source's own destinations — an intro/home block for the wordmark, a current-page block, one
block per plain row, dropdown destination panels, a contact block for the phone link, a social
block for the tiles, an editorial block for the dropdown — plus the mandatory
`https://www.componentdock.com/` footer line (which the source does not have). Chrome height is
**34 + 83.8 = 117.8 px**, so use `scroll-margin-top` ≥ `120px` on every target. Imagery comes from
`https://picsum.photos/seed/binnacle-<n>/<w>/<h>` (the source ships **no** images).

## Source → React adaptation

| Source | Recreation |
| --- | --- |
| `section.ftco-section` wrapper with `padding:7em 0` | `<main className="pt-28 pb-28 bg-page">` (band) + real content sections below |
| `div.wrap` + `p.phone` + `div.social-media` | `<TopBar />` — dark strip, phone link, four social tiles with `lucide-react` glyphs |
| `nav.ftco-navbar-light` + `ul.cl-navbar-nav.cl-m-auto` | `<Navbar />` — `<header>` (in-flow, non-sticky) + `<nav>` + centred `<ul>` |
| `.cl-nav-item > .cl-nav-link:before` slab | row link with `before:absolute before:inset-0 before:-z-10 before:bg-accent before:origin-left before:scale-x-0 before:transition-transform before:duration-200 hover:before:scale-x-100 hover:text-white`, plus `aria-current` + a persistent slab class for the current row |
| `.cl-dropdown-menu` + `snippet.js` data-API | `<PageDropdown />` — hover + click + `ArrowDown`/`ArrowUp` + `Escape` + outside click, `aria-expanded`/`aria-haspopup`/`aria-controls`, caret chevron |
| `form.searchform` (+ `order:13`) | `<SearchForm />` rendering **last in the flex row** (DOM order may differ; keep the visual order) with a real label and a non-navigating submit |
| `button.cl-navbar-toggler` + `div#ftco-nav.cl-collapse` | toggler `<button aria-expanded>` + panel with `flex-basis:100%`, height animation, submenu always expanded below 992 px |
| inline SVG paths (phone, magnifier, bars) | `lucide-react` (`Phone`, `Search`, `Menu`) — never copy the paths |
| `@font-face` Roboto ×8 + `"Poppins"` stack that never loads | one Google Fonts Poppins `<link>` in `index.html` (delta) |
| blank `href="#"` (14 anchors) | real `id`/route targets + `scroll-margin-top` |

## Deltas (documented, deliberate)

1. New name **binnacle** (apps/binnacle) + own wordmark, own five row labels, own dropdown menu,
   own heading and own copy — no source string is reused.
2. **14 dead `href="#"`** become real destinations with real content blocks behind them.
3. **Real `lucide-react` icons** for the phone, the search magnifier, the toggler bars and the four
   social tiles (the source's tiles render **blank** and its inline SVG paths are not copied).
4. **A real Google Fonts Poppins `<link>`** instead of eight dead self-hosted Roboto woff2 files
   (247,856 B = 95.3 % of the download).
5. **Restored `focus-visible` rings** on rows, tiles, the input, the search button, the toggler and
   the dropdown items (the source strips outlines and paints no focus state on the input).
6. `aria-current="page"` on the current row; `aria-label`s on the tiles; `aria-expanded` on the
   toggler and the dropdown trigger; reduced-motion handling for the panel animation.
7. The **search field actually works** (filters the recreation's own sections or is explicitly a
   labelled, non-submitting field) — the source's form posts to `#` and never changes anything.
8. A **footer** with the mandatory Component Dock credit — the source has no footer.

## Sibling comparison (read before prepping 17+)

The *Website Menus* family shares almost nothing but its skeleton — every slug re-declares its own
palette, bar shape and breakpoint. This variant's standouts against the closest siblings:

| | `-07` sibling (dark utility bar) | `-11`/`-15` siblings (mobile `#000`) | **`-16` → binnacle** |
| --- | --- | --- | --- |
| top bar | `0.8rem` links, phone + **four socials**, hides labels below 768 px | none | **`#202020`, 34 px, no padding, 12 px phone + four `34 × 34` SQUARE tiles**, visible at every width |
| bar surface | white, **sticky on scroll** | mobile `#000` | white, **never sticky**, white on mobile too |
| row treatment | white current label (a specificity accident) | gold/amber **text** or slab per slug | **full-height `#f1bc31` `:before` slab** on hover **and permanently on the current row** |
| row alignment | `cl-col-2`/`cl-col-10` split | right-aligned (`margin-left:auto`) | **centred (`margin:auto`)** |
| search field | none | none (`-15`) / hidden below 768 px (`-13`) | **`257 × 46`, radius 5 px, `order:13`, visible at every width** |
| dropdown | flyout with nested submenu | cart / plain menu | **four items, gold hover fill, caret rendered**, permanently expanded below 992 px |
| mobile chrome | panel slides in from the right | drawer or full-width panel | **in-flow wrapping line** (66 / 82 / 128 px) |

The next un-prepped items after this one are the family's **`-17`…`-20`**, then the entries in the
celebration section that comes after them — prep each one at a time off its own live sheet; do
not carry this variant's gold `#f1bc31`, its 83.8 px rows or its search field across without
re-reading the CSS.
