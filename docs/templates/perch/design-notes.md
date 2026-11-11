# Perch — design notes (ColorLib **Pricing Table V07**, slug `pricing-table-07`)

Research run 2026-11-11. Everything below was read from the artefact, not from the marketing page: `curl -4` for the
bytes, a local `python3 -m http.server` over the downloaded archive for the rects, node Playwright (Chromium 1234) at
`document.fonts.ready` for the computed styles, and `vision` for the screenshot.

## Source inventory

| What | Value |
| ---- | ----- |
| ColorLib page | `https://colorlib.com/wp/template/pricing-table-07/` — **200, 114,143 B** |
| `h1` / `title` | `Pricing Table V07` / `Pricing Table V07 - Free Bootstrap Pricing Tables 2026 - Colorlib` |
| `datePublished` | `2026-09-25T15:12:51+00:00` |
| meta description | _Coworking memberships laid out as full-width rows instead of columns. Free download, no jQuery or plugins._ — **accurate** |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/pricing-table-07/` — **200, 5,648 B** (slug-only and `bb/` → **404, 9 B**) |
| Stylesheet | `css/style.css?v=00f3ebca` — **9,999 B**, sha256 `a26cf535481b9968cc694ab3770e3decc45e6416f0ea2259381df9403528447d` |
| Script | **none** — the document has no `<script>`; `js/snippet.js` → **404 (9 B)** |
| Archive | `https://preview.colorlib.com/downloads/free/pricing-table-07.zip` — **200, 194,804 B** |
| Archive contents | `index.html` 5,456 B · `css/style.css` 9,999 B (**hash-identical to live**) · `README.md` 1,278 B · `fonts/` 8 woff2 — **no `js/`, no `images/`** |
| Live vs archive | `<body>` **byte-identical** (5,203 B each); the 192 B delta is `<head>` only (2 `noindex` metas, `cdnjs.cloud` dns-prefetch, `fetchpriority`, `?v=`) |
| Screenshot | `pricing-table-07.jpg` — **200, 31,747 B, 1200 × 972**, **AVIF behind a `.jpg`** (`file` → ISO Media, AVIF) |
| Reference rects | local archive at 1440 × 900 == live preview at 1440 × 900, to the hundredth |

**README lies (eighth variant in a row):** it lists `js/snippet.js` and `images/` — neither is in the zip and neither is
on the page. It also ships `outfit-500-{latin,latin-ext}.woff2` although the sheet declares only 400 / 600 / 700. The
8 woff2 files are **2 binaries**: the four latin files share sha256 `92684e4a…` (32,228 B each) and the four latin-ext
files share `9e38b3f1…` (14,760 B each) — one variable cut, four names.

## CSS census

- **9,999 B**, **431** lines, **67** rule blocks, **6** `@font-face`, **3** `@media` (`max-width: 900px`,
  `max-width: 420px`, `prefers-reduced-motion: reduce`), **0** `@keyframes`, **0** gradients, **0** `filter`.
- 60-ish lines are the **host-neutralising shield** (`:where(html) :is(html, body, div, …) { all: revert }` plus
  `[hidden]`, `img/svg`, `table`, `th`, `caption`, `hr` re-asserts) — **do not port**.
- One dead rule: `.cl-icon { height: 1em; width: auto; fill: currentColor }` — no element carries the class.
- **5** custom properties, all on `.cl-pricing07`: `--cl-pricing07-{accent,ink,muted,line,card}`. Every other colour is a
  literal: `#f4efe6 #f1e7d8 #3b2d23 #f9a8d4 #fbcfe8 #500724 #fbf6ee #d9ccbb #4a3a2e #cdbfa9 #fff`.
- **2** transitions (`.2s ease` on the row's border/shadow and the CTA's background/colour), **1** shadow (row hover).

## DOM skeleton (reference, 1440 × 900)

```
main.cl-pricing07-demo                      1440 wide, padding 96 16
  section.cl-pricing07                      1080 × 669.5 @ (180, 96), aria-labelledby=h1
    header.cl-pricing07__head               flex, wrap, items-end, justify-between, gap 16/48, mb 32
      div
        p.cl-pricing07__eyebrow             "…· Canal Street"   14/600 #9d174d
        h1.cl-pricing07__title              "Memberships"       72/72 700 -.04em
      p.cl-pricing07__lede                  400 × 48, right side, #5f5249
    ul.cl-pricing07__rows                   grid, gap 12
      li.cl-pricing07__row                  ×4, grid 4 tracks, 1px #e2d8c9, r18, #fffcf7, 22/24
        div.cl-pricing07__plan              tile 48 r14 + (h2.name 21/600 + p.desc 14.5)
        ul.cl-pricing07__feats              aria-label="<Plan> includes", chips 13.5 r999, gap 6/8
        p.cl-pricing07__price               flex column, text-right: [from] amount(30/700 tabular) per(13.5)
        a.cl-pricing07__cta                 124×50, r999, 1.5px #231a14, sr-only suffix
        (li 3 only) p.cl-pricing07__flag    "Most chosen" abs, top -11, left 24, #fbcfe8/#500724
    p.cl-pricing07__foot                    "All prices include sales tax…" 14 #5f5249, mt 28
```

Census: **1** `h1`, **4** `h2`, **12** `p`, **5** `ul` (1 rows + 4 chips), **17** `li`, **4** `a`, **4** `svg`,
**0** `img` / `script` / `form` / `input` / `button` / `footer`. The four glyphs are coffee cup, door, desk, building.

## The token block, as the port should write it

```css
@theme {
  /* surfaces */
  --color-perch-ground: #f4efe6;   /* body — the only ground on the page */
  --color-perch-card: #fffcf7;     /* every row */
  --color-perch-tile: #f1e7d8;     /* icon tile, plain rows */
  /* text */
  --color-perch-ink: #231a14;      /* section text, featured fill, CTA border/hover fill */
  --color-perch-muted: #5f5249;    /* lede, descriptions, per, from, footnote */
  --color-perch-accent: #9d174d;   /* eyebrow + glyphs only — NOT rose-800 (#9f1239) */
  /* hairlines */
  --color-perch-line: #e2d8c9;     /* row + chip borders */
  --color-perch-line-hover: #cdbfa9;
  /* the featured row */
  --color-perch-pop-text: #fbf6ee;
  --color-perch-pop-muted: #d9ccbb;
  --color-perch-pop-tile: #3b2d23;
  --color-perch-pop-glyph: #f9a8d4;  /* = pink-300 */
  --color-perch-pop-line: #4a3a2e;
  /* the pink pair */
  --color-perch-pink: #fbcfe8;      /* = pink-200 */
  --color-perch-pink-ink: #500724;  /* = pink-950 */
}
```

`pink-200 / pink-300 / pink-950` happen to be exact Tailwind values — alias them rather than re-declaring hexes. The
accent, the ground, the card, the ink, the muted and all four neutrals are bespoke; **do not** snap them to the nearest
Tailwind step.

## Screenshot analysis (AVIF, 1200 × 972, page at ≈0.9 of the window)

A macOS browser mock-up — traffic lights, a `preview.colorlib.com` URL pill, a rounded window with a drop shadow on a
grey surround. Ignore the frame; read the page:

- **Ground** is a warm cream, not white — the single strongest signal of this variant's identity. Rows are a barely-lighter
  off-white, so the row/ground distinction is carried by the **hairline border (1.06 : 1 fill difference, 1.38 : 1
  border)** — deleting the border dissolves the layout.
- **Type**: one enormous lowercase-adjacent display word ("Memberships") at 72 px with tight −0.04em tracking, a tiny
  magenta eyebrow above it, and a quiet two-line grey lede sitting **on the right, bottom-aligned** with the headline.
  The asymmetry is the whole head composition.
- **Rows read as a table**: name/description left, chips centre (they look like tags, not bullets), price right-aligned
  with the period under it, then a pill button at the far right. The eye runs down the price column.
- **The third row inverts** to near-black with cream text; a **pink pill straddles its top edge** and its CTA is the only
  filled button on the page. It is the sole focal point.
- **Chips** are outlined pills, 13.5 px, in a wrapping strip — a fourth chip forces a second line, which is what makes
  that row taller than its siblings.
- **No photography, no icons beyond the four glyphs**, no dividers, no gradients.

## Section-by-section fidelity notes

1. **Wrapper** — `clamp(40px, 7vw, 96px)` vertical, 16 px horizontal. At 1440 the `7vw` (100.8) loses to the 96 cap; at
   ≤ 1371 it starts shrinking, hitting 40 at ≤ 571.
2. **Head** — `flex` + `wrap` + `items-end` + `justify-between` + `gap: 16px 48px`. The gap is **two values**: 16 vertical
   (used only when wrapped), 48 horizontal. At 765 the lede wraps under, and the head grows 74.8 → 138.72.
3. **Row tracks** — `1.25fr / 1.6fr / 0.8fr / auto`. The `auto` track is the CTA at its 124 px `min-width`; the price
   column is the `0.8fr`. `align-items: center` — the CTAs do **not** line up with the row tops.
4. **Row height** = `max(plan, chips, price, CTA) + 44 + 2`. Four different heights at 1440 (**101.25 / 123 / 112.5 /
   118.75**) from three different causes: a two-line description (row 2), four chips wrapping (row 3), and the `from`
   label (row 4). Any "make them equal height" instinct breaks the reference.
5. **Plan track** — 48 px tile, 16 px gap, name 21/31.5, description 14.5/21.75 with a 2 px top margin. The tile is
   `#f1e7d8` with a `#9d174d` glyph on plain rows and `#3b2d23` / `#f9a8d4` on the featured one.
6. **Chips** — 30.25 tall (`4 + 20.25 + 4 + 2`) with `nowrap` above 420. The featured row's chip border is `#4a3a2e`, a
   fourth border value.
7. **Price** — right-aligned column, amount 30/700/`tabular-nums`, period beneath. Studio prepends `from` (13 px), which
   is why its price block is 72.75 and its row 118.75.
8. **CTA** — `min-width: 124`, `12px 20px` padding, 1.5 px border (used 1 px at DPR 1), radius 999. Hover inverts to
   ink; the featured CTA is pink with a white hover. Focus ring: 3 px accent at 3 px offset (pink on the featured row).
9. **Flag** — absolutely positioned at `top: -11px` / `left: 24px`, so it straddles the border and overlaps the row above
   by 11 px. It is the row's **first** child, so reading order puts "Most chosen" before "Resident".
10. **Footnote** — 14 px muted, `margin-top: 28`, and it is the last thing in the section (the port adds the footer
    after it).

## Source → React adaptation table

| Reference | Port |
| --------- | ---- |
| `.cl-pricing07-demo` wrapper + `body` background | `<div className="min-h-screen bg-perch-ground px-4 py-[clamp(40px,7vw,96px)]">` |
| `ul.cl-pricing07__rows` (`list-style: none`) | `<ul role="list" className="grid gap-3 list-none p-0">` — restores semantics |
| `li.cl-pricing07__row` ×4 hard-coded | `plans.map(...)` over a typed `plans.ts` array |
| `.cl-pricing07__row--pop` | `featured` flag → `cn()` variant with `bg-perch-ink text-perch-pop-text` |
| 4 inline `<svg>` paths | `lucide-react` `Coffee` / `DoorOpen` / `Armchair` / `Building2`, `size={22} strokeWidth={1.8}` |
| `.cl-pricing07__vh` (clip-path) | `sr-only` |
| `p.cl-pricing07__flag` first child | same, `absolute -top-[11px] left-6` — DOM order preserved on purpose |
| `href="#"` ×4 | keep (`limelight` precedent); the sr-only suffix carries the disambiguation |
| no `<footer>` | repo footer strip, one Component Dock link |
| `--cl-pricing07-*` on the section | `@theme` tokens, no CSS variables left in components |

## Sibling comparison (same `pricing-table` family, 12 variants)

| # | app | shape | identity |
| - | --- | ----- | -------- |
| 01 | ratecard | 3-card grid | light, accent plan card |
| 02 | tallyboard | 4-plan, usage metrics | table-ish columns |
| 03 | parity | 3-plan **comparison table** | real `<table>`, muted |
| 04 | limelight | 3-card neon | dark `#08060f`, gradient featured card |
| 05 | prorata | per-seat calculator | one numeric field + graduated rate table |
| 06 | runrate | metered calculator | dark navy, two non-linear sliders, stacked bar |
| **07** | **perch** | **4 full-width rows** | **warm cream, one inverted row, chips, zero JS** |

Perch is the family's **only row layout** and its **only warm-light** centre of gravity after four light/dark column
variants — the differentiator to protect in review is *rows, not cards*: if the four `<li>`s ever become a grid of
cards, the variant is duplicated.

## Measurement method + traps this run confirmed

- **The preview path needs the `bootstrap/` prefix.** `theme/pricing-table-07/` and `theme/bb/pricing-table-07/` both
  404 with a 9-byte body — a 9-byte 404 is the tell that the path, not the slug, is wrong.
- **Serve the archive, not the network, for rects.** `page.goto(..., waitUntil: 'networkidle')` on the preview host
  **never settles** (the `cdnjs.cloud` prefetch keeps a connection warm); use `'load'` + `document.fonts.ready`, and
  prefer `python3 -m http.server` over the local archive — it is byte-identical and 20× faster across 19 widths.
- **`getComputedStyle` reports the *used* border width**: the CTA declares `1.5px`, computes `1px` at DPR 1. Do not
  "fix" the declaration.
- **The screenshot is AVIF.** `file` says `ISO Media, AVIF`; `PIL` opens it fine, but a `.jpg` mime sniff in a browser
  may not — convert before feeding it to any tool that trusts the extension.
- **Sweep the wrap points, not just the breakpoints.** The page has **three** discontinuities — 900 (media), 420 (media)
  and **765** (flex wrap). A 1440/1024/768/375 sweep misses the last one entirely.
- **Two non-monotonic runs** in one page: `900 → 901` (−282) and `768 → 700 → 600` (+50, −19). Anyone asserting "the page
  shrinks as the viewport shrinks" will fail.

## Name candidates still free (checked 2026-11-11)

`benchly`, `deskwise`, `seatwise`, `lodgework`, `benchspace`, `roomkey`, `deskpass`, `daypass`, `hotdesk` — all **0**
hits in `apps/`, `openspec/specs/` and `TEMPLATES.md`, none a ColorLib slug. `perch` was chosen for the meaning
(a place to settle for the day), one word, one syllable, no component vocabulary in it.
Taken and therefore unavailable: `roost`, `huddle`, `cove`, `workbench` (all already app folders).
