# Capstan — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V13"** (source slug `website-menu-13`) — the Website Menus
family's **minimal, transparent white-bar** variant. Its features, in order of visual weight:

- a **centred heading band** (`padding:112px 0`) over a pure **`#fff`** page, carrying one
  `28 px` black heading;
- a **full-bleed, transparent, hairline-bounded strip** (`1px solid rgba(0,0,0,0.05)` top and
  bottom, `z-index:3`, `padding:0`, `position:relative`, ≈**63.77 px** tall) — the only thing that
  makes it visible over the white page is those two hairlines;
- a **single-line uppercase `#000` wordmark** on the strip's left (source text `Magz.`, `20 px`,
  `padding:5px 0`, `margin-right:16px`);
- **six `13 px` grey (`#808080`) rows** in the middle of the bar (`margin:auto` on both sides),
  each `19.2px 20px` padded → **62 px** tall;
- a **teal `#40bfc1` underline wipe** as the only hover affordance: a `1px`, full-width, `bottom:-1px`
  bar that goes `scaleX(0) → scaleX(1)` over `0.5s ease-in-out` while the label turns `#40bfc1`;
  the current row keeps that underline **permanently** and its desktop label stays **`#000`**;
- a **white `257 × 46`, `4 px`-radius search field** bolted to the strip's **right** end
  (`order:last` on desktop), a `209 px` white `14 px` input + a `46 × 46` white magnifier button;
- below **`992 px`**: the strip turns **`#000`** (`padding:10px 15px`, `68 px`), the wordmark goes
  white, a `◫ Menu` toggler (`rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`)
  reveals a **height-animated collapsing panel** of the six rows (`rgba(255,255,255,.7)`, hover
  `#fff`, **current row `#40bfc1`**, underline off) whose `Page` sub-list is **always expanded**
  (`#000`, `1px rgba(255,255,255,0.3)` left rule, items `rgba(255,255,255,.8)`);
- below **`768 px`**: the **search field is removed entirely**.

The source page holds **nothing else** — no content sections, no images, no footer, no second page,
no sticky chrome. **10** of its **11** anchors are dead `href="#"` (the 11th is the wordmark's
`index.html`); the document does not scroll.

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/website-menu-13/` | **200**, 108,957 B, title *"Website Menu V13 - Free Minimal Navigation Bar Template 2026 - Colorlib"* |
| Slug-only preview | `https://preview.colorlib.com/theme/website-menu-13/` | **404**, 9 B (family-wide gap) |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/website-menu-13/` | **200**, 4,216 B, `<title>Website menu 03</title>`, sha256 `265c97bb…` |
| Stylesheet | `…/bootstrap/website-menu-13/css/style.css?v=821da340` | **200**, 21,762 B, sha256 `20b27715…` |
| Behaviour JS | `…/bootstrap/website-menu-13/js/snippet.js?v=0986fb90` | **200**, 5,798 B, sha256 `ef135830…` |
| Snippet archive | `https://preview.colorlib.com/downloads/free/website-menu-13.zip` | **200**, 259,149 B, sha256 `429d2c19…` |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-13.jpg` | **200**, AVIF, 6,057 B, 1200×972 |

The archive's `css/style.css` and `js/snippet.js` are **byte-identical** (same sha256) to the live
preview's; its `index.html` (4,013 B) differs from the live page (4,216 B) **head-only** (noindex
meta tags, a cdnjs `dns-prefetch`, and the cache-busting query strings). Fonts: **eight** Roboto
woff2 files (100/300/400/700 × latin/latin-ext) totalling **247,856 B = 95.6 %** of the download —
**all dead** (the `body` stack resolves to Poppins).

Live render cross-checked in a browser at **1280 px** (desktop) and **780 px** (mobile).

## Section-by-section

### 1 — Heading band (`.ftco-section`)

- `padding:7em 0` = **112 px**; page background **`#fff`** (this variant differs from its `-12`
  sibling's `#fafafa`).
- `div.cl-container` → `div.cl-row.cl-justify-content-center` → `div.cl-col-md-6.cl-text-center
  .cl-mb-5` → `h2.heading-section` = **`Website menu #03`**.
- `h2`: `font-size:28px` (beats the framework's `2rem`), `font-weight:400`, `line-height:1.5`
  (`42 px`), `color:#000`, `margin-bottom:8px` + `.cl-mb-5` **48 px** → the strip's top edge is at
  `112 + 42 + 8 + 48 = ` **210 px**.
- Recreation: own heading copy, `py-28`, `#fff` page, centred `28px`/`400`/`lh-42px` heading, `48px`
  bottom margin. **Delta:** own words.

### 2 — The strip (`nav.ftco-navbar-light`)

- Desktop: `background:transparent !important`, `z-index:3`, `padding:0`,
  `border-top`+`border-bottom:1px solid rgba(0,0,0,0.05)`, `position:relative` (**not** sticky).
  Measured **1280 × 63.77 at `y = 210`** at 1280 px. The two hairlines are the *whole* visual — a
  recreation that paints a solid colour is wrong.
- `.cl-bg-dark{background:#343a40 !important}` is on the element but **never renders** (the
  `transparent !important` rule wins by source order); every `.cl-navbar-dark` colour is likewise
  overridden.
- Mobile `< 992 px`: `background:#000 !important`, `padding:10px 15px`, `position:relative; top:0`,
  height **68 px** (measured at 780 px).
- Container `.cl-container`: `padding:0 15px; margin:auto` with tiers **540/720/960/1140**; measured
  **1140 × 62 at `x = 70`** at 1280 px; `display:flex; justify-content:space-between;
  align-items:center`; `flex-wrap:nowrap` at ≥992 px; gutters removed below 992 px.
- Recreation: `w-full`, transparent, `border-y border-[rgba(0,0,0,0.05)]`, `relative z-[3] p-0`,
  `no radius/shadow`, container tiers as above, `max-lg:px-0`, `max-lg:bg-black max-lg:p-[10px_15px]`.

### 3 — Wordmark (`a.cl-navbar-brand`)

- Source text `Magz.`, `text-transform:uppercase`, `font-size:20px`, `line-height:36px`,
  `color:#000`, `padding:5px 0`, `margin-right:16px`, `display:inline-block`, `white-space:nowrap`;
  **single line** (the `-12` sibling's two-line lockup is absent here). Measured ~**63 × 46** in the
  62 px line.
- Mobile: `color:#fff`.
- Hover/`:focus` keeps `#000` → **no hover colour change**; only the "real href" in the chrome
  (`index.html`).
- Recreation: own single-line uppercase wordmark, `#000` desktop / white mobile, `py-[5px] mr-4`,
  links to page top, visible focus ring, no hover colour shift.

### 4 — The list and the rows (`ul.cl-navbar-nav.cl-m-auto`)

- `cl-m-auto` = `margin:auto` → the list floats in the **middle** of the slack between the wordmark
  and the search field (measured **460 × 62 at `x = 321`** at 1280 px). It is *not* left-pinned
  (that is `-12`'s `mr-auto`) nor right-pinned.
- **Six rows**, source order: **Home** (`cl-active`), **Page** (`cl-dropdown` → four
  `cl-dropdown-item`s `Page 1`…`Page 4`), **Catalog**, **Work**, **Blog**, **Contact**.
- `.cl-nav-link`: `font-size:13px`, `font-weight:400`, `padding:1.2rem 20px` (`19.2px 20px`),
  `color:gray` (`#808080`), `position:relative`, `opacity:1 !important`, `line-height:23.4px` →
  **62 px**. Measured row x/width at 1280 px: Home 75@321, Page 80@396, Catalog 85@475, Work 70@560,
  Blog 66@630, Contact 85@696.
- Mobile: `padding:.7rem 0` (`11.2px`), color `rgba(255,255,255,0.7)`, hover `#fff`.

### 5 — The teal underline wipe (`.cl-nav-link:before`) — the family's differentiator

- `content:""`, `position:absolute`, `width:100%`, `height:1px`, `bottom:-1px`, `left:0`,
  `background-color:#40bfc1`, `visibility:hidden`, `transform:scaleX(0)`,
  `transition:all .5s ease-in-out 0s`, `z-index:-1`.
- `:hover`: `color:#40bfc1` on the label **and** the bar → `visibility:visible;
  transform:scaleX(1)`.
- Current row (`.cl-active > a`): label **`#000`** on desktop, underline permanently
  `transform:scaleX(1)` / visible; on mobile the label is **`#40bfc1`** and the underline is
  `display:none`.
- Recreation: a `#40bfc1` `h-px w-full origin-left scale-x-0 bottom-[-1px] -z-10
  transition-transform duration-500 ease-in-out` bar per row; label turns `#40bfc1` on hover;
  visible at rest on the current row; disabled under `prefers-reduced-motion: reduce`.

### 6 — Dropdown (`div.cl-dropdown-menu`)

- Opens on **hover** (`mouseenter`/`mouseleave` in the source's `snippet.js`) **and** on **click**.
- Desktop: `position:absolute; top:100%; left:0; z-index:1000`, `border:none`, `background:#fff`,
  `border-radius:4px`, `padding:0`, `box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)`; items
  `font-size:12px`, `color:#000`, `padding:.25rem 1.5rem` (**4px 24px** → **29.59 px** rows);
  **hover/`:focus` → `background:#40bfc1; color:#fff`** (a visible teal fill).
- Keyboard (source `snippet.js`): `ArrowDown` on the trigger opens + focuses the first item;
  `ArrowUp`/`ArrowDown` step inside the panel; `Escape` closes and refocuses the trigger; a click
  outside closes; on overflow it flips to `left:auto; right:0`.
- Mobile: `display:block !important; background:#000; border-left:1px solid rgba(255,255,255,0.3);
  border-radius:0`; items `rgba(255,255,255,0.8)` — an **always-expanded** sub-list.
- Recreation: white `4 px` panel + shadow as above; four own items; **visible teal hover/focus**;
  hover + click + keyboard + outside-click + `Escape`; viewport-flip guard; truthful mobile
  `aria-expanded` (or a real disclosure control).

### 7 — Toggler (`button.cl-navbar-toggler`)

- `border:none`, `color:rgba(255,255,255,0.5) !important`, `cursor:pointer`, `padding-right:0`,
  `text-transform:uppercase`, `font-size:16px`, `letter-spacing:.1em`, focus
  `outline:none !important`.
- Content: `span.fa.fa-bars` holding an **inline SVG** (`viewBox="0 0 1536 1792"`) + the literal
  word **`Menu`**. Measured **85 × 25** at the container's right at 780 px
  (`padding:4px 0 4px 12px`); `display:none` at ≥992 px.
- **DOM order:** brand → form → **toggler** → collapse wrapper (the `-12` sibling has the toggler
  *first*). Recreation should keep the same order and a real focus ring (delta).

### 8 — Search form (`.searchform`)

- `height:46px`, `border:1px solid rgba(255,255,255,0.1)`, **`border-left:1px solid rgba(0,0,0,0.05)`**
  (the left edge is the dark hairline), `overflow:hidden`, `border-radius:4px`; measured
  **257 × 46 at `x = 938, y = 219`** at 1280 px, right edge on the container's inner right (1195);
  `order:13` (`cl-order-lg-last`) → last on desktop.
- Input `input.cl-form-control.cl-pl-3`: `width:calc(100% - 46px)` = **209 px**, `border:none`,
  `background:#fff !important`, `color:rgba(0,0,0,0.7) !important`, `font-size:14px`, padding
  `6px 12px 6px 16px`, placeholder `rgba(0,0,0,0.7)` — no label, no `aria-label`. Button
  `button.cl-form-control.search`: **46 × 46** white with a **16 px** inline magnifier SVG, no
  accessible name.
- `action="#"`; **hidden below `767.98 px`** (`@media (max-width:767.98px){.searchform{display:none}}`)
  — so at 375/320 px the bar shows only the wordmark + toggler.
- Recreation: `257×46`, `rounded-[4px]`, hairlines as above, **hidden below 768 px**, labelled
  input + named submit inside `role="search"`, real `preventDefault()` handler, visible focus ring.

### 9 — Materialised sections (delta) + footer (delta)

The source's page is short, does not scroll, and its 10 non-wordmark links all point at nothing.
The recreation materialises all **ten** as real in-app destinations (`scroll-margin-top`), adds
sections of the source's *kinds* (intro/home, current-page, a pages group for the four dropdown
items, blocks for the three plain rows) so the non-sticky strip genuinely scrolls away, and adds a
minimal footer linking `https://www.componentdock.com/` ("Component Dock") with a computed year.

## Summary of deltas

New name **capstan** + own wordmark, six labels, four dropdown items and heading; ten dead
`href="#"` materialised; real `lucide-react` icons (magnifier, three-bar toggler, `ChevronDown`
caret) instead of the inline-SVG glyphs and the CSS caret triangle; a labelled `role="search"` form
with a real submit handler instead of `action="#"`; restored hover/`focus-visible` affordances
everywhere the source says `outline:none`; `aria-current` on the current row; a truthful mobile
`aria-expanded`; `Escape` focus management; reduced-motion handling for the `.5s` wipe and `.35s`
collapse; Google Fonts Poppins instead of eight dead self-hosted Roboto files; the blank filler page
replaced with real content; and the added footer.

## Prep status (re-verified 2026-10-12)

This prep's spec **failed `openspec validate template-capstan --type spec`** ("Spec must have a
Requirements section") because its requirements used the older `## Requirements (Gherkin)` header
with bullet-only `- **Scenario: …**` entries. The requirements section was rewritten to the house
form (`## Requirements` + `### Requirement:` + `#### Scenario:` with `GIVEN/WHEN/THEN/AND`
bullets) and now validates clean. **No design fact changed** — every token, measurement, section
and delta above is unchanged from the original run.

Audit context: with **0** un-prepped `- [ ]` items left on main, the prep stream audits existing
preps instead of writing new ones. All 30 open-item specs were validated in this sweep; capstan was
the only failure, and its `tasks.md` + `design-notes.md` are present.
