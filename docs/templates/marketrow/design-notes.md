# Marketrow — design notes

Source: ColorLib **Card V02** (`card-02`), ColorLib page `https://colorlib.com/wp/template/card-02/`
(HTTP 200, 113,718 B), live preview `https://preview.colorlib.com/theme/bootstrap/card-02/`
(**HTTP 200, 6,990 B**, read 2026-10-25 with `curl -4`; **note the `/bootstrap/` prefix** — the slug-only path
404s). Recreation name `marketrow`. Spec: `openspec/specs/template-marketrow/spec.md`. Tasks:
`docs/templates/marketrow/tasks.md`.

A **hand-written static snippet**, not a theme build: 7 KB of HTML, one 10,764 B stylesheet, **1,628 B of
vanilla JS**, Bootstrap 5 present only as a `:where(html) … { all: revert; }` reset guard so the snippet renders
the same inside any host page. The stylesheet's header says it plainly: *"Every style this snippet uses, and
nothing else. No framework, no build step."*

The live sheet is byte-identical to the copy inside `downloads/free/card-02.zip`
(sha256 `242f23d8b8bcda0b10755a712b081d482083f800d3e288342b685c619ba3dfa2`, 10,764 B), **and so is the script**
(`js/snippet.js`, 1,628 B, `161780102f824585…`); the live HTML is the zip's `index.html` plus the host's
injections (two `robots` metas, a `cdnjs` `dns-prefetch`, the `?v=` cache-busters with `fetchpriority="high"`,
and per-image `fetchpriority` / `decoding` / `loading` hints). So: **live preview verified; the archive is its
un-versioned twin.**

## Structure order (measured at 1440 × 900)

| # | band                               | hook                | ground     |   top | height |
| - | ---------------------------------- | ------------------- | ---------- | ----: | -----: |
| 0 | page                               | `body`              | `#f1f1ef`  |     0 |    740 |
| 1 | container (1,232 outer / 1,200)    | `.cl-card02-demo`   | —          |     0 |    740 |
| 2 | header: eyebrow + `h1` + bag chip  | `__head`            | —          |    72 |     64 |
| 3 | live status (empty)                | `__status`          | —          |   146 |      1 |
| 4 | product grid (4 × 285)             | `.cl-card02-grid`   | —          |   165 |    503 |
| — | *nothing else*                     | —                   | —          |     — |      — |

Per card, top to bottom: `__media` (285 square, `__flag` pinned inside it) → `__body` (138.2: `__cat`,
`__name`, `__rating` → `__stars` + `__score` + `__muted`, `__price` → `__now` + `__was`) → `__add` (button,
47.8 tall, inset 18 / 18 with 14 px above).

## Section-by-section fidelity notes

### The head

Left: an **eyebrow above the headline**, not beside it — `"Autumn edit"` at 14/500 `#52525b`, then
`"Everyday carry"` at `clamp(28px, 3.6vw, 40px)` / 1.1 / 700 / `−0.03em`, with `margin: 2px 0 0`. Right: the
**Bag chip**, bottom-aligned with the headline because the header is `align-items: flex-end`. The chip is a
`<p>`: 128 × 44, radius 999, white on the off-white ground, a soft 2 % shadow, an 18 px bag glyph, the word
"Bag" and a 24 px ink disc holding the count. At **320 px** the chip wraps onto its own row (header 110.8 tall,
chip at y 98.8) because `flex-wrap: wrap` + `gap: 16px` cannot fit both columns in 288 px.

The header's `margin-bottom: 28px` is *not* the space you see: the status line sits between them with
`margin: -18px 0 18px` and a 1 px min-height, so the grid starts at `72 + 64 + 28 + 1 = 165`.

### The grid

`repeat(auto-fill, minmax(236px, 1fr))`, `gap: 20px`, inside a container whose `max-width: 1200px` is a
**content box** (the `:where(html){all:revert}` guard leaves `box-sizing: content-box` alone). Above 1,232 px
viewport the container stops growing: outer 1,232, content 1,200, cards **285**. Column thresholds bisected one
pixel at a time: **1 ≤ 523 · 2 = 524–779 · 3 = 780–1,035 · 4 ≥ 1,036** (`4 × 236 + 3 × 20 = 1,004` must fit in
`vw − 32`). `auto-fill` here, not `auto-fit` — with exactly four items there is no empty track to collapse, so
the two behave identically; the sheet says `auto-fill` and the recreation should too.

The **minimum track is smaller than the longest name**, and that is deliberate: "Arc Wireless Headphones"
measures **211 px** at 17 px/700, the name track is `card − 36`, so a card narrower than **247 px** wraps. The
4-column state is under that between **1,036 and ~1,079 px** (measured at 1,060: two names on two lines, all
cards 501.6), and the 2-column state between **524 and 539 px**. At 524 the third card's rating row also wraps
(`4.3 (1,042 reviews)` = stars 80 + gap 8 + text 128 = 216 px in a 200 px track), so bodies become
**160.3 / 179.9** and cards **476.1 / 495.6** — card heights differ *by grid row*, not within a row.

### The card

No border. The plate is `#ffffff` with radius **18** and `overflow: hidden`, so the square photo is clipped at
the top and the button keeps its 18 px margins at the bottom. Shadow is a single 5 % 1 px line, and hover swaps
it for `0 18px 40px -24px rgba(0,0,0,.35)` — **the card does not lift**; only the photo scales (`1.04`,
`.5s`). That is the opposite of the sibling team-card template (`translateY(-4px)`), so do not carry the lift
across.

The **flag** is the card's only badge: top 12 / left 12, padding `4/10`, radius **8** (a rectangle, not a pill),
12.5/700, and three variants for four cards — `-25%` and `-15%` on `#b91c1c`, `New` on ink, `Only 3 left` as
white with `#92400e` text. One per card, never two.

### The rating

One element, not five icons: 80 × 15 `span`, `mask: url(<star>) 0 0 / 16px 15px repeat-x` (five stars exactly
across 80 px) over `linear-gradient(90deg, #f59e0b F, #d4d4d8 F)` where `F = score / 5 * 100%`. So **4.3**
fills 86 % — four whole stars and 30 % of the fifth, a straight vertical edge through the star, not a half-star
glyph. The score is 13.5/700 and the review count is the same size at weight 400 in `#52525b`; the bar is
`aria-hidden` and a visually hidden "Rated 4.6 out of 5" carries the meaning.

### The price

`flex`, `align-items: baseline`, `gap: 8px`. Current 21/700/`−0.42px` in **`#b91c1c`** when discounted,
**`#18181b`** when not (`--plain`), original 15/400/`#52525b` in a `<del>` with a hidden "Was ". Only the
headphones and the backpack have a struck price; the watch and the tote have none — do not "complete the set".

### The button

Full-bleed inside the card's 18 px side padding (`margin: 14px 18px 18px`), so it is **249 px** wide at 1440 and
**322 / 252** at 390 / 320 — it is never 100 % of the card. Ink ground, white 15/700, radius **12**, a declared
**1.5 px** border that Chromium snaps to **1 px** at device scale 1 (hence the 47.8 px height, not 48.75), an
18 px glyph at `stroke-width 2.2`, and a plus that is swapped for a tick in the added state. Hover `#3f3f46`,
active `scale(.98)`, focus `3px solid #a1a1aa` offset 2 — the only focus ring in the design, and a grey one on
purpose (there is no brand colour to ring with).

### The behaviour (the whole of `js/snippet.js`, 34 lines)

One `querySelectorAll('[data-cl-card02-product]')` loop. Each card carries its **product name as the attribute
value**, which is what the announcement interpolates. On click: `added = !btn.classList.contains('is-added')` →
toggle the class → label textContent `'Added to bag'` / `'Add to bag'` → `items += added ? 1 : -1` → counter
`textContent = String(items)` + `is-bumped` for **250 ms** → `announce()`.

`announce()` is the subtle part: it **clears the status text, then sets it after a 50 ms `setTimeout`**, so
repeating the *same* message still re-announces (an unchanged `textContent` would not). Copy it, timer included.
The counter is a closure variable, so it counts *cards currently added*, not clicks: all four on → `4`, toggle
one off → `3`, and it can never go negative because each card toggles its own state.

There is **no** add-to-cart persistence, no cart drawer, no product page, no filter, no localStorage.

## Traps measured on this design

1. **`theme/bootstrap/card-02/` returned 404 once and 200 on the immediate retry** (edge cache miss on a
   directory index; `…/card-02/index.html` answered 200 the first time). Retry before writing "unreachable", and
   read the explicit `/index.html` when you need a stable byte count.
2. **The archive is not where the sibling themes keep theirs.** `preview.colorlib.com/downloads/free/card-02.zip`
   → 200, 441,796 B; `colorlib.com/wp-content/uploads/sites/2/downloads/free/card-02.zip` → **404**. The
   ColorLib page's own download link is the authority.
3. **The document height is not monotonic.** 3,028 px at 520 but 2,508 px at 390 — the single 1fr column is
   488 px wide at 520, so each square photo is 488 px tall. Do not add a breakpoint to "fix" it.
4. **Card height is `photo width + 218` only while names fit one line** — see the grid section. At the narrow
   4-column and 2-column edges the cards are 476.1 / 495.6 by row, and `218 → 240/260` where text wraps.
5. **The first announcement shifts the page 17 px** (grid y 165 → 182): `min-height: 1px` on the status element.
   The recreation reserves a 20 px line — the single deliberate deviation, invisible until the first click.
6. **A declared 1.5 px border measures 1 px** at device scale 1 (button 47.8 tall). Do not "correct" the height.
7. **`.cl-icon` is a dead selector** (defined, never used) and `.cl-card02__label` / `.cl-card02__score` have no
   rules at all (hooks for the script and for structure). Class census: 30 in the markup, 29 selected.
8. **Six `@font-face` blocks, two files**: `latin` 62,556 B and `latin-ext` 31,312 B, each hashed identically
   across the 400/500/700 weights — one variable face copied three times per subset. Ship one Google Fonts link
   with three weights instead.
9. **The last two photos are `loading="lazy"`**: a full-page capture shows them as empty `#e4e4e7` panels. That
   is a capture artefact, not a design state.
10. **The only `@media` block is `prefers-reduced-motion: reduce`** — there is no width query anywhere, so any
    `sm:`/`lg:` ladder in the recreation will disagree with the measured column counts.

## What the implementer must not do

- **Do not add a brand colour.** The ink `#18181b` *is* the accent token (`.cl-card02 { --cl-card02-accent:
  #18181b }`), and the four hues each mean exactly one thing. A blue or indigo "primary" breaks the template's
  thesis: grey chrome, colour only where a product speaks.
- **Do not link the cards.** The reference has **zero anchors** — no product page exists, and a link to `#` or a
  fake `/product/:id` route would be invented structure. The page's only anchor is the mandated Component Dock
  footer link.
- **Do not wire the bag chip.** It is a `<p>` counter that looks like a control; there is no cart.
- **Do not replace the star bar with five icons**, and do not round 4.3 up to 4.5 or down to 4.
- **Do not add `truncate` / `nowrap`** to the name or the rating row to keep card heights equal — the reference
  wraps, and the wrap is the reason its `minmax()` minimum is 236 px.
- **Do not recompute the flags** from the prices (−25.1 % / −15.2 %); keep `-25%` / `-15%`.
- **Do not name ColorLib, `card-02`, or the source title anywhere in `apps/marketrow`** — provenance lives in
  the spec, the `TEMPLATES.md` row and the PR.
