# Plaudit — design notes

Source: ColorLib **Card V05** (`card-05`), ColorLib page `https://colorlib.com/wp/template/card-05/`
(HTTP 200, 113,096 B), live preview `https://preview.colorlib.com/theme/bootstrap/card-05/index.html`
(**HTTP 200, 5,687 B**, read 2026-10-25 with `curl -4`; **note the `/bootstrap/` prefix** — the slug-only path
404s with a 9 B body, at the directory form and at `/index.html`). Recreation name `plaudit`. Spec:
`openspec/specs/template-plaudit/spec.md`. Tasks: `docs/templates/plaudit/tasks.md`.

A **hand-written static snippet**, not a theme build: 5.7 KB of HTML and one 7,047 B stylesheet with **no
script, no `js/` directory and no behaviour whatsoever** — and, unlike every earlier member of this family, **no
interactive element at all**: 0 anchors, 0 forms, 0 buttons, 0 hover states, 0 transitions. Bootstrap appears
only as a `:where(html) :is(html, body, div, …) { all: revert; }` guard (55 lines plus six
`::-webkit-datetime-edit` selectors and a `[hidden]` re-hide) so the snippet renders identically inside a host
page; Tailwind's preflight replaces it.

The live sheet is byte-identical to the copy inside `downloads/free/card-05.zip`
(sha256 `9400bd236afb94ed835448c33ffa800d1c41cb4d49704e50882723a1d7741082`, 7,047 B); the live HTML (5,687 B) is
the zip's `index.html` (5,495 B) plus the host's injections (two `robots` metas, a `cdnjs` `dns-prefetch`, the
`?v=345a7e7b` cache-buster with `fetchpriority="high"`). So: **live preview verified; the archive is its
un-versioned twin.** The ZIP is **206,307 B, 9 entries**: 4 directories, `index.html`, `css/style.css`,
`README.md` (1,260 B) and four `fonts/*.woff2`.

⚠️ The archive's `README.md` lists `js/snippet.js  the behaviour, in plain JavaScript` **and**
`images/  its images`. **There is no `js/` directory, no `images/` directory, no `<script>` and not one
`<img>`.** Same lie as `card-01`, `card-03` and `card-04`; `card-02` is the only sibling that really ships JS.
Do not go looking for behaviour or photography here — there is none.

## Structure order (measured at 1440 × 900, webfonts loaded)

| #   | band                                          | hook              | ground    |   top | height |
| --- | --------------------------------------------- | ----------------- | --------- | ----: | -----: |
| 0   | page                                          | `body`            | `#fffdf9` |     0 |  650.8 |
| 1   | container (1,192 outer / 1,160 content)       | `.cl-card05-demo` | —         |     0 |  650.8 |
| 2   | head: `h1` / sub, 640 wide, centred           | `-demo__head`     | —         |    80 |  132.2 |
| 3   | grid (3 × 372, gap 22, `align-items:stretch`) | `.cl-card05-grid` | —         | 252.2 |  318.6 |
| —   | _nothing else_                                | —                 | —         |     — |      — |

Per card, top to bottom: `__top` (**20.25** — logo + five 18 px stars, `space-between`, `gap 10`, wrapping) →
20 → `__quote` (`flex: 1`, box **133.4**, text 121.8 at 21 px / 133.4 at 23 px) → 26 → `__by` (**63** = 1 px
rule + 18 pad + 44 avatar) → 26 padding-bottom. Card padding is `30px 28px 26px`.

Inside card 1 at 1440: card 140–512 × 252.2–570.8; `__top` y 282.2 (h 20.25); quote y 322.4 (h 133.4);
`__by` y 481.8 (h 63); avatar y 500.8 (44). The oversized quote mark's box is x 406–492 (86 wide),
y 488.8–688.8, clipped by the card at 570.8 — **82 px visible**, top edge 236.6 px below the card's top.

## Section-by-section fidelity notes

**1 — The ground.** `#fffdf9`, not white and not grey. It is _warm_ (R 255 / G 253 / B 249), and it is the only
surface the three tints sit on. `body` has `margin: 0`, `background-image: none` and the system-sans stack as
its default family; the whole page inherits `#1c1917` from the container, not from `body`.

**2 — The head.** `max-width: 640px`, centred, `margin: 0 auto 40px`. The `h1` is
`clamp(30px, 4vw, 46px)` at **line-height 1.1** with **−.02em** tracking in **Newsreader 500** — a _serif_
headline, which is the family's second serif (Octavo used Fraunces on card headlines only; Tierline used none).
The sub is 16 px system sans, `#57534e`, `margin-top: 12px`, line-height `normal` (19 px box).
At 1440 the head is **132.19** tall because the headline is **two lines**, and the wraps are the single most
surprising thing in the sheet: **two lines at ≥ 1,138 and at ≤ 432, one line in between** (see §Traps 2).

**3 — The grid.** `repeat(auto-fit, minmax(290px, 1fr))`, **gap 22 fixed**, `align-items: stretch`. There is
**no media query** in the file: the ladder is arithmetic. 3 columns while `gridWidth ≥ 914`
(290 × 3 + 22 × 2) → **≥ 946 viewport**; 2 while `gridWidth ≥ 602` → **634–945**; 1 at **≤ 633**. Bisected to
the pixel: **946 → 3**, **945 → 2**, **634 → 2**, **633 → 1**. This is the opposite of Tierline (fixed 3 tracks

- one 880 px query, never 2 columns) and the same mechanism as Nameplate and Marketrow — do not carry either
  sibling's grid across without reading the sheet.

**4 — The card plate.** Radius **24**, no border, no shadow, `padding: 30px 28px 26px`, `overflow: hidden`,
`font-size: 15px; line-height: 1.5`, `position: relative`. Content width **316** at 1440. The only other radii
on the page are the avatar's **50 %** — there is no third radius, no chip, no pill, no button.

**5 — The tints are per-card tokens.** The sheet declares `--cl-card05-bg` / `-accent` / `-ink` / `-muted` on
`.cl-card05` (defaults = the mint card), overrides ink and muted on `.cl-card05--dark`, and relies on **inline
`style` attributes in the markup** for `--cl-card05-bg` and `--cl-card05-accent` on all three figures. So the
tint set is _content_, not stylesheet: mint `#e7f5ee` / `#0f766e`, dark `#1f1d2b` / `#fbbf24`, peach `#fdeee4` /
`#c2410c`. The accent's jobs are exactly four: avatar fill, byline rule (25 % alpha), quotation glyph, and —
only on the dark card — star fill. If an implementer tints the _light_ cards' stars with their accent, the page
loses its one rating colour (`#f59e0b`).

**6 — The dark card.** Same 372 × 318.63, same radius, same padding, same height: it is a **paint job**, not a
promotion. Ink `#f5f3ff` (violet-50), muted `#c4c1d4`, and three small inversions that are easy to miss: the
avatar's initials are **`#1f1d2b`** (dark on amber, the only dark-on-accent disc), the stars take the **card
accent** instead of `#f59e0b`, and the quote jumps to **23 px** via `.cl-card05__quote--big` — a per-card class,
not a breakpoint. Everything else about the card is identical.

**7 — The quotation glyph.** A `::before` on the card: `content: "\201C"`, Newsreader, **200 px**,
`line-height: 1`, `color: var(--accent)`, **`opacity: .18`**, `right: 20px`, **`bottom: -118px`**,
`pointer-events: none`. The glyph's box measures **86 × 200**, so 118 px sits below the card's bottom edge and
the card's `overflow: hidden` reveals only the **top 82 px** (41 %) — the two upper hooks of the mark, reading
as a watermark in the bottom-right corner and never as a quotation you can read. It is **not** an image, **not**
an `<svg>` and **not** a `<span aria-hidden>`: reproduce it in CSS, or the geometry (and the 0 px of height it
adds) changes.

**8 — The byline rule.** `1px solid color-mix(in srgb, var(--accent) 25%, transparent)`, preceded in the sheet
by a `rgba(120,113,108,.3)` fallback declaration. It is the only rule on the card, it is tinted by the card's
own accent, and it sits directly above the avatar — i.e. the byline is separated from the quote by a coloured
hairline, not by whitespace or a chip.

**9 — Nothing moves.** No `@keyframes`, no `transition`, no `:hover`, no `[data-animate]`, no observer, no
scroll reveal, no focus ring (there is nothing focusable). The page is inert by construction, so a reviewer
checking "did they port the behaviour?" should get the answer _there is none_ — the only live things are
`flex: 1` and `auto-fit`.

## What is different from Nameplate / Marketrow / Octavo / Tierline (the earlier `card` variants)

| property         | card-01 nameplate        | card-02 marketrow        | card-03 octavo       | card-04 tierline            | **card-05 (this one)**                       |
| ---------------- | ------------------------ | ------------------------ | -------------------- | --------------------------- | -------------------------------------------- |
| ground           | paper `#fbfaf7`          | `#f1f1ef`                | paper                | near-black `#0c0f1d`        | **warm paper `#fffdf9`**                     |
| card plate       | white, radius 22, shadow | white, radius 18, shadow | **no plate at all**  | dark/white, radius 22       | **three tints, radius 24, no shadow/border** |
| row relationship | four peers               | four peers + chips       | three peers          | featured is 58.5 px taller  | **peers, one inverted by paint only**        |
| headline face    | Plus Jakarta Sans        | DM Sans                  | Fraunces (cards)     | Manrope                     | **Newsreader 500 (serif)**                   |
| quote face       | —                        | —                        | —                    | —                           | **Newsreader _italic_ 400 — the design**     |
| star ratings     | icons in a card body     | **yes (sale chips too)** | no                   | no                          | **yes — 5/5, 5/5, 4/5 with an outline star** |
| decoration       | portraits                | product photos           | cover photos + chips | ribbon + gradients + glow   | **clipped quote glyph, no media at all**     |
| media            | 4 `<img>`                | 4 product images         | 3 cover photos       | 0 `<img>`, 13 ticks         | **0 `<img>`, 18 inline SVGs**                |
| interactivity    | card links               | add-to-bag toggle        | card links           | 3 CTAs (`href="#"`)         | **none — 0 anchors, 0 forms, 0 buttons**     |
| width queries    | `auto-fit`               | `auto-fit`               | `auto-fit`           | **fixed 3 + one 880 query** | **`auto-fit` — and 0 `@media`**              |

## Traps (all measured, all cheap to repeat)

1. **Two hops to reach the preview.** `theme/card-05/` and `theme/bb/card-05/` → **404, 9 B**; only
   `theme/bootstrap/card-05/index.html` answers **200, 5,687 B**. Directory _listings_ are disabled (`css/` 404),
   so fetch files by exact name.
2. **The `h1` wrap races the webfont — and the catalogue screenshot caught the loser.** With the 500 face
   unresolved the headline is **one line** (81.6 box); with it loaded the nowrap advance is **643.41 px** against
   a **640 px** head, so it is **two lines** (101.2). Measure after `document.fonts.ready`, and build the loaded
   state. The `card-05.jpg` mockup shows the one-line fallback render — do not copy its line count, and do not
   shrink the type to chase it (the honest lever, if you want one line, is a 656 px head, disclosed in the PR).
   The exact boundaries: **2 lines ≥ 1,138** (advance 640.7), **1 line 433–1,137**, **2 lines ≤ 432** (head 400
   against a 401.02 advance at 30 px).
3. **The container is `content-box`, so `max-width: 1160px` measures 1,192 outer.** The sheet's reset reverts
   `box-sizing` to the browser default and the container is not inside `.cl-card05 *`. In a Tailwind app
   (`border-box`) `max-w-[1160px] px-4` yields a **1,128** content box and **361.3 px** cards — a 10.7 px error
   on every card. Write `max-w-[1192px] px-4`.
4. **`document.scrollHeight` lies below ~900 px of content.** At 1,440 it reports **900** (the viewport) while
   the band is **650.8**. Measure the band element. Same shape as Tierline at 1,024.
5. **`flex: 1` on the quote is the alignment mechanism.** All three cards are equal height (grid `stretch`), the
   quotes are not equal in length, and the three bylines still share y **481.8**. Remove `flex: 1` and the
   bylines float up under each quote, by a different amount on each card. A spacer or `margin-top: auto` is not
   equivalent and is a visible change.
6. **The glyph is a pseudo-element, and 59 % of it is outside the card.** `bottom: -118px` on a 200 px glyph
   inside `overflow: hidden` is the whole trick. Rendering a full “ (with `content` inside the flow, or an
   `<svg>`) puts a visible character in the corner and adds height.
7. **The track floor beats the container at 320.** `minmax(290px, 1fr)` in a **288** grid → `290px` tracks, so
   each card's right edge is **306** while the content box ends at **304**: 2 px into the padding, no scrollbar
   (`body.scrollWidth 320 === clientWidth 320`, `scrollX 0`). Report it as a floor, not an overflow; if you
   prefer a clean fit, `minmax(min(290px, 100%), 1fr)` gives 288 at 320 and nothing else changes.
8. **The column ladder is arithmetic, not breakpoints.** 946 / 634 are where `290 × n + 22 × (n − 1)` stops
   fitting. Copying Tierline's `@media (max-width: 880px)` (or any `md:` prefix) produces the wrong 2-column
   range and an extra column at 900.
9. **Heights are non-monotonic.** 276.6 at 480 vs **246.1** at 633 for the same card (a wider card needs fewer
   quote lines); the band drops from **1,110.8** at 480 to **1,001.5** at 633 and then climbs again at the
   2-column step (952.8 at 634, 877.9 at 768, 835.8 at 900) before falling to 611.4 at 946. Six readings is
   enough to catch a wrong grid; a single 1440 check is not.
10. **The top row wraps at exactly the 290 px column.** `space-between` + `flex-wrap` + `white-space: nowrap`
    means the stars drop below the logo when `logo + 10 + 102 > column − 56` — true for the 134.5 px and
    147.3 px logos (cards 1 and 3 → `__top` **48.25**) but not for the 98.1 px one (card 2 → **20.25**). At 320,
    634 and 946 the three cards therefore have two different top-row heights, and the card heights follow.
11. **The light cards' stars are not their accent.** `#f59e0b` is hard-coded on `.cl-card05__stars svg` and only
    the dark card re-points it at `var(--cl-card05-accent)`. Three accents, two star colours — deliberate.
12. **`border-top-color` serialises as `color(srgb …)`.** Asserts on `rgba(15,118,110,.25)` will fail even
    though the pixels are right; compare the computed `color(srgb 0.0588235 0.462745 0.431373 / 0.25)` form, or
    compare channels with a tolerance.
13. **`.cl-icon` is dead again** (defined in the sheet, absent from the markup) — the 18 SVGs are unclassed and
    styled through `.cl-card05__stars svg` / `.cl-card05__logo svg`. Fourth sibling in a row; omit it.
14. **The archive's README lies twice** (`js/snippet.js`, `images/`), and the reset guard is 55 lines of
    anti-Bootstrap reverts. Read `zipfile.ZipFile(...).infolist()` and `grep -c '@media'` before believing any
    claim about a `card-*` file set.

## Artifacts

`openspec/specs/template-plaudit/spec.md` (699 lines, 11 requirements / 29 scenarios,
`openspec validate template-plaudit --type spec` → **valid**) · `docs/templates/plaudit/tasks.md` (132 lines) ·
`docs/templates/plaudit/design-notes.md` (this file). Row when it ships: new `## Bootstrap Cards (20)` section
between `## Bootstrap Carousels (20)` (line ~710) and `## Bootstrap Checkboxes (20)` (line ~733) —
_Card 05_ → `plaudit`.
Next prep in the family: **`card-06`**.

## Shipped — implementation deltas (2026-10-26, PR #1911)

`apps/plaudit` is live and matches the reference on every token, box and breakpoint measured — except two
consequences of the **font-availability rule** (no woff2 may be copied; the app loads Google's current
`Newsreader` through one `<link>`). Measured on identical strings, Google's **normal 500 is 2.3 % narrower**
and its **italic 400 is 3 % wider** than the template's own static binaries (ref/live advance 643.41 vs 619.41
at 46 px; 1,194 vs 1,229 for the dark quote at 23 px). Both deltas are disclosed in the PR:

1. **Head cap is 610 px, not 640.** With the narrower 500 the headline fitted a 640 px head on **one** line;
   610 px restores the reference's two-line composition at the unchanged 46 px (`h1` box 101.2, head 132.2).
   The one-line window therefore runs 433–1,115 rather than 433–1,137.
2. **The dark card's quote wraps to five lines**, so all three cards measure **352** tall instead of 318.6 and
   the band is **684.2 / 677.8** at 1,440 / 1,280 (and 1,268.4 at 360 for the mint card). Every other probed
   width matches the reference exactly: **320 → 1,388.2 · 390 → 1,238 · 480 → 1,110.8 · 633 → 1,001.5 ·
   634 → 952.8 · 768 → 877.9 · 900 → 835.8 · 946 → 611.4 · 1,024 → 624.2**, with `scrollWidth === clientWidth`
   and `scrollX === 0` at all twelve widths (the 320 px track still floors at 290 inside a 288 grid — the
   documented 2 px, not an overflow).

Verified: 31 tests / 6 files, 100 % coverage on every source file, `scripts/verify-app.sh plaudit` green,
`npm run spec:validate` 3,299/3,299. Card widths 372 / interior 316 / gap 22, `__top` 20.25 (48.25 at the
290 px column), quote 133.4-case geometry, byline 63, tints, radius 24, `padding: 30px 28px 26px`, the
`color(srgb … /0.25)` byline rule, the 86 × 200 glyph at `bottom: -118px` with only 82 px visible, 15 stars +
3 brand glyphs, 0 `<img>`, 1 anchor and 0 `@media` all reproduce the reference.

**Next implementable in the family: `card-06` → `statline`** (spec + design notes already on main).
