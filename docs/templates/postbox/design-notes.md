# Postbox — design notes (`card-19` → `apps/postbox`)

ColourLib **Card V19**, nineteenth of the twenty `card` snippet variants. Reference fetched
2026-10-26 with `curl -4` + Playwright 1.62 (Chromium): the live preview
`https://preview.colorlib.com/theme/bootstrap/card-19/` (HTTP 200, 4,464 B) and the archive
`preview.colorlib.com/downloads/free/card-19.zip` (HTTP 200, 281,718 B). Tokens come from the
stylesheet and were then re-read from `getComputedStyle`/`getBoundingClientRect` on the rendered
page at eleven widths. Where a stylesheet declaration and the render disagree, the render wins and
the disagreement is listed in §5.

Files: `openspec/specs/template-postbox/spec.md` (authority) · `docs/templates/postbox/tasks.md`
(build order). Local artefacts kept for this run: `/tmp/c19/{index.html,style.css,snippet.js,card19.zip}`,
`/tmp/c19/measure{,2,3,4}.json`, `/tmp/c19/live-{1440,1024,640,390,error,done,both-done,focus}.png`.

## 1 — What this design actually is

Two independent **email-capture cards** in one row. The left card sells a newsletter with an
illustration, a paragraph and a labelled input + gold button with a fine-print line; the right card
sells product updates in a narrower, plainer white pocket with a full-width navy button. There is
nothing else: no nav, no hero, no footer, no social strip, no badge row, no second row of cards.

What makes it *this* design rather than "two signup cards":

- **The pair is one stretched row.** `align-items: stretch` gives the white card the navy card's
  height (**410.38**), and because the white card is a single-column grid with `align-items: center`,
  its **351.94** px content floats with a **29.22** px band above and below. Drop the stretch and the
  design reads as two unrelated cards.
- **The navy card is a *split*, the white card is a *column*.** 0.8fr / 1.2fr art/form on the left;
  one column on the right. That asymmetry (art vs no art, row vs stacked) is the whole composition.
- **The gold button is the only saturated accent on the page.** `#fde047` appears exactly three
  times: the eyebrow text on navy, the button fill, and (in the illustration) the envelope body.
- **Success replaces the form.** Both cards swap their form for a tick + "check your inbox" block and
  **shrink**; the page height changes with the state (602 → 546 → 450), which is only possible
  because the stage is content-height.

It is the **first card in the family with a form**: no sibling prep from `card-01` to `card-18` is
recorded with a `<form>` or an `<input>`, and every sibling that counts its controls states **0 / 0**
explicitly (tonearm, isobar and notebell among them). It is also the first with a **fixed unequal two-card row**
(every sibling is one card, a repeated `auto-fit` grid, or a stack of panels).

## 2 — Section order (exact, no invented sections)

```
body            #eef2ff, Epilogue 16/1.5
└ main.cl-card19-demo        max-width 1160, padding clamp(36,7vw,96) 16
  └ div.cl-card19-grid       2fr | 1fr, gap 22, stretch
    ├ section.cl-card19               (aria-labelledby=cl-card19-t1)   navy
    │ ├ div.cl-card19__art            (aria-hidden) radial glow + SVG envelope
    │ └ div.cl-card19__content        (data-cl-card19 — the JS root)
    │   ├ div.cl-card19__form-wrap
    │   │ ├ p.cl-card19__eyebrow      "The Friday Frontend · 21,400 readers"
    │   │ ├ h2.cl-card19__title       "One useful CSS trick, every Friday."
    │   │ ├ p.cl-card19__copy         layout / accessibility / performance blurb
    │   │ └ form.cl-card19__form
    │   │   ├ label.cl-card19__label  "Email address" (for=cl-card19-email)
    │   │   ├ div.cl-card19__row
    │   │   │ ├ input.cl-card19__input   type=email required autocomplete=email
    │   │   │ └ button.cl-card19__submit "Subscribe"
    │   │   ├ p.cl-card19__hint       "Unsubscribe with one click. We never share your address."
    │   │   └ p.cl-card19__error      role=alert hidden
    │   └ div.cl-card19__done         hidden → tick + h3 + copy with <strong data-cl-card19-addr>
    └ section.cl-card19.cl-card19--compact  (aria-labelledby=cl-card19-t2)  white
      └ div.cl-card19__content        (data-cl-card19)
        ├ div.cl-card19__form-wrap
        │ ├ p.cl-card19__eyebrow      "Product updates"
        │ ├ h2.cl-card19__title       "Get release notes by email"
        │ ├ p.cl-card19__copy         monthly blurb
        │ └ form.cl-card19__form
        │   ├ label.cl-card19__label  "Work email" (for=cl-card19-email2)
        │   ├ input.cl-card19__input
        │   ├ p.cl-card19__error      role=alert hidden   ← before the button
        │   └ button.cl-card19__submit "Notify me"
        └ div.cl-card19__done         hidden → tick + h3 "You're on the list" + copy
```

`<script src="js/snippet.js">` is the last node. **No footer, no nav, no `<h1>`, no `<a>`, no `<img>`,
no `<picture>`, no background-image beyond the art panel's radial gradient.**

## 3 — Section-by-section fidelity notes

### 3.1 The ground and the stage

`body { margin: 0; background: #eef2ff; font-family: Epilogue, … }` — a pale periwinkle, *not* white
and *not* `#eef4ff`. `main` is `max-width: 1160px; margin: 0 auto; padding: clamp(36px, 7vw, 96px) 16px`.
At 1,440 the padding resolves to 96 and the border box is **1192** (1,160 + 2 × 16), so `main` starts
at x **124** and the grid at x **140**.

The stage is **content-height**: 602.38 at 1,440 inside a 900 px viewport. Every sibling in this
family has the same rule, and it is the first thing a naive port breaks with `min-h-screen`.

### 3.2 The pair (`grid-template-columns: minmax(0, 2fr) minmax(0, 1fr)`)

Available width 1,160 − 22 gap = 1,138 → **758.66 : 379.34** (exactly 2:1). `align-items: stretch`
is what makes the white card **410.38** tall; at 1,440 its own content is only **351.94**, so the
white space is 29.22 above and below. Verified by reading `gridTemplateRows` — one row, `410.375px`.

Below **900** the grid is one column and the cards stack with the 22 gap between them; each takes its
own height (**315.64** / **322.69** at 900). Note the ordering trap: at 900 the *pair* is stacked but
the navy card is **still** a two-column split (**344 / 516**).

### 3.3 The navy card

- radius **28**, `background: #1e3a8a`, no border, `overflow: hidden` (this is what clips the art glow
  into the rounded corner — remove it and a square glow corner appears).
- shadow `0 30px 60px -36px rgba(30,58,138,.7)`: a large y-offset with a −36 spread, so it reads as a
  soft navy halo under the card rather than a drop shadow.
- own grid `minmax(0,.8fr) minmax(0,1.2fr)` + `gap: 8` over 758.66 → **300.25 / 450.41**.
- `font-size: 15.5px; line-height: 1.5` → 23.25; this re-base propagates to the label (**21**), the
  hint (**19.5**) and the error (**21**), none of which set their own line-height except the hint's
  19.5 (`13 × 1.5`).

### 3.4 The art panel

`align-self: stretch` (against the card's `align-items: center`), `display: grid; place-items:
center`, `min-height: 220px`, `padding: 24px`, and a single radial gradient
`circle at 50% 50%, rgba(79,110,247,.75), transparent 62%` — a violet-blue disc behind the envelope,
62 % of the *box*, not the circle's radius.

The SVG is `width: 100%; max-width: 260px; height: auto` over a 240 × 200 viewBox, so at 1,440 it is
**252.25 × 210.2** (the panel is 300.25 − 48 padding = 252.25), at 900 it hits the **260** cap, and
below 640 it is capped at **200** while the panel drops to **min-height: 160** and spans the full card
width (**608 × 214.66** at 640: 200 wide → 166.67 tall + 48 padding).

Six shapes, exact: gold envelope body (`rect 34 52 172×118 rx14`), navy flap (`M34 66 120 124l86-58`,
`stroke-width 6`), white letter (`rect 58 22 124×86 rx8`, rotated `-6 120 65` — the rotation is what
makes it read as "just posted"), three blue rules (`stroke #93c5fd`, width 6, round caps), pink badge
(`circle 196 44 r18`, `#f472b6`), white check (`stroke-width 4`). Rebuild it as JSX with the same
coordinates — do not redraw it "in the spirit of" the original; the −6° tilt and the badge's overlap
are the illustration.

### 3.5 The navy copy block

Eyebrow **13.5 / 700 / 20.25** in gold, then `margin: 8px 0 10px` on the title, then the copy. At
1,440 in a 370.41 column: title **two lines** (70.38) because 32 px at −0.96 tracking still breaks
"One useful CSS trick," / "every Friday."; copy **three lines** (69.75). The title is
`clamp(24px, 2.6vw, 32px)` — 32 above 1,231, **26.62** at 1,024, **24** below 923 — so the line count
changes with the viewport (one line at 900, where the card is 868 wide).

### 3.6 The navy form

`margin-top: 22`, then label (**21**), `margin-bottom: 6`, the flex row (**54**), the hint
(`margin-top: 10`, **39** two lines), and a hidden error. Row total 130 = 27 + 54 + 49.

The input is `flex: 1 1 220px; min-width: 0` with a **2 px transparent** border that it keeps at rest
(so focus and invalid do not shift the layout), radius 14, `padding: 13px 16px`, `font-size: 16px`
(an explicit override of the card's 15.5). The button is `flex: none`, 132 wide, `padding: 13px 22px`,
gold, `#111827` at **16 / 800**.

Because both are flex items on one line, both are **54** tall — the button's own box is
13 + 24 + 13 = **50**, and the extra 4 px is the flex line stretching to the input's height. That
detail matters: as soon as the row wraps (see §4), the button is alone on its line and reads **50**.

### 3.7 The white card

Same shell, five token overrides (`--bg #fff`, `--ink #111827`, `--muted #4b5563`, `--accent #1e3a8a`,
`--error #b91c1c`), a `1px solid #dfe5f5` border, the lighter shadow, `grid-template-columns:
minmax(0,1fr)` and `align-items: center` inherited from the base rule.

Content **377.34 × 351.94** at y **125.22**, i.e. centred inside the stretched 410.38 card (the 1 px
border is inset). Eyebrow **`#1e40af`** (a lighter navy than the fill — the base rule's gold is
overridden *without* going through the `--accent` variable, which is why the accent token is `#1e3a8a`
but the eyebrow is `#1e40af`). Title **22 px** fixed, 800, −0.66 px tracking, one line at 1,440.
Copy two lines. Then label (**21**) at `margin-top: 22`, input **54**, and the button **full width,
50 tall, `margin-top: 10`** in `#1e3a8a` with a white label.

The compact form has **no `.cl-card19__row`** and **no hint**, so its error paragraph sits **between**
the input and the button (the navy card's sits after the hint). Do not harmonise them — each card's
DOM order is part of the reference.

## 4 — Responsive behaviour, as measured

| width | grid | navy card | navy split | white card | page |
| ----: | ---- | --------: | ---------- | ---------: | ---: |
| 1,440 | 2 col |    410.38 | 300.25 / 450.41 |    410.38 |  602 |
| 1,200 | 2 col |    408.63 | 300.25 / 450.41 |    408.63 |  577 |
| 1,024 | 2 col |    456.56 | 255.45 / 383.20 |    456.56 |  600 |
|   902 | 2 col |    486.44 | 222.92 / …      |    486.44 |  613 |
|   901 | 2 col |    486.34 | 222.66 / …      |    486.34 |  612 |
|   900 | **1 col** | **315.64** | 344 / 516 | **322.69** |  786 |
|   768 | 1 col |    354.72 | 291.19 / 436.81 |    312.13 |  796 |
|   642 | 1 col |    422.13 | 240.80 / …      |    325.28 |  859 |
|   641 | 1 col |    422.03 | 240.39 / …      |    325.19 |  859 |
|   640 | 1 col | **517.48** | **stacked** | **325.13** |  954 |
|   480 | 1 col |    563.94 | stacked         |    321.94 |  980 |
|   440 | 1 col |    583.44 | stacked         |    321.94 |  999 |
|   439 | 1 col |    641.44 | stacked         |    321.94 | 1,057 |
|   390 | 1 col |    641.44 | stacked         |    321.94 | 1,057 |
|   375 | 1 col |    641.44 | stacked         |    346.13 | 1,082 |
|   360 | 1 col |    641.44 | stacked         |    369.38 | 1,105 |
|   320 | 1 col |    684.94 | stacked         |    369.38 | 1,148 |

Three thresholds, each verified either side of the line:

1. **900** — `@media (max-width: 900px)` collapses the pair to one column (901 = 2 col).
2. **640** — collapses the navy card's own split (641 = art beside content at 240.39 wide; 640 = art
   above, full width, 200 px SVG, 214.66 panel).
3. **360 px of content box** — the flex row wraps. At 440 the card is 408 wide and the content 360, so
   220 + 8 + 132 fits exactly; at 439 the content is 359 and the button drops to its own line, the
   input takes the full **359**, and the button reads **50** tall instead of 54. **This is not a
   media query** — express it as `flex-wrap` and let the browser find it, or a hand-written
   breakpoint will disagree at 440.

Card-A height is *not* monotonic: 422 at 641 → **517** at 640 (the art stacks on top) → 583 at 440 →
**641** at 439 (the button wraps). Any "heights shrink as the viewport shrinks" assumption is wrong
here.

## 5 — Where the sheet and the render disagree (the deltas to ship)

1. **No `h1`.** The rendered outline is `h2`, `h3`, `h2`, `h3`. ColourLib's own screenshot shows two
   headline-size titles with no hierarchy hint, but the DOM is unambiguous. Ship `h1` (navy) /
   `h2` (white) / `h3` (each success) — the same fix every other prep in this family records.
2. **The error badge is invisible — a `currentColor` bug, not a design choice.**
   `.cl-card19__error::before { background: currentColor; color: var(--cl-card19-bg); }` — a
   pseudo-element's `currentColor` resolves to **its own** computed `color`, so this paints the disc
   in `#1e3a8a` on a `#1e3a8a` card with a `#1e3a8a` `!` glyph. Measured on the live page:
   `background-color rgb(30,58,138)`, `color rgb(30,58,138)`. In the compact card the same rule makes
   it white-on-white. The screenshot of the error state shows **text only, no badge**. The intent is
   obvious (`background: currentColor` for the fill + the card colour for the glyph, which works only
   if `color` is *not* set in the same rule). Ship the badge in `--error` with the card's ink for the
   glyph, 18 × 18, radius 50 %, 12 / 700.
3. **`nope@nope` is accepted.** `type=email` per HTML has no TLD requirement, so the reference shows
   *Check your inbox* for an undeliverable address — verified by typing it and submitting. Ship the
   stricter dot rule (documented in the spec as the one behavioural delta).
4. **The 500 weight ships as files and is declared nowhere.** Eight woff2, two binaries, six
   `@font-face` (400 / 700 / 800 × 2 subsets). Measured at 40 px, `"One useful CSS trick"` is 391.00 /
   391.00 / 415.00 / 415.00 / 425.00 at 400 / 500 / 600 / 700 / 800 — 500 *is* 400 and 600 *is* 700.
   Load 400 / 700 / 800; never ship `font-medium`; treat `font-semibold` as 700.
5. **`.cl-icon` is dead** (declared, zero markup hits) — eleventh card in a row with the leftover.
6. **Two conflicting robots metas** on the live head (`noindex, nofollow` first, `noindex, follow`
   last). Preview-host artifact; ignore.
7. **The two cards' error positions differ** (after the hint / before the button). Real; reproduce.
8. **The tick glyph is 2.28 : 1** white-on-green. It is `aria-hidden`, so it is not a WCAG text
   failure, but do not put any text inside that disc.

Not defects, but easy to "fix" wrongly: `.cl-card19__form-wrap` has no rule (plain block); the card's
`overflow: hidden` is load-bearing for the glow; the white card's button is deliberately **not** 54 px
tall; the input's 2 px transparent border is deliberate (it prevents a 4 px layout jump on focus).

## 6 — Screenshot analysis (`card-19.jpg`, AVIF 1200 × 972 behind a `.jpg`)

`file` reports `ISO Media, AVIF Image` (25,286 B). Convert before viewing:
`python3 -c "from PIL import Image; Image.open('card-19.jpg').convert('RGB').save('card-19.png')"`.
`card-19-free-template.jpg` and `card-19-featured.jpg` do **not** exist (both 404) — this is the only
screenshot URL for the slug.

The image is ColourLib's **browser-frame mockup**: a macOS title bar with three traffic lights and a
`preview.colorlib.com` address pill over a white page, the design inset with a large margin below. In
it: the periwinkle ground, the navy card at roughly twice the white card's width with the yellow
envelope at its left and the form at its right, the white card with its grey-bordered input and navy
full-width button, and both cards ending on the same baseline with the same rounded corners.

It matches the live render 1:1 — same copy, same order, same illustration, same button labels, same
green-free palette. Two things it does **not** show: the error state (so the invisible badge is only
findable in CSS) and any narrow width. Useful only for confirming palette and proportion; all numbers
in this file come from the render.

## 7 — Source → React adaptation

| reference | port |
| --- | --- |
| `.cl-card19*` classes | Tailwind utilities + `cn()`; no `cl-` prefix, no ColourLib strings in `apps/postbox` |
| `--cl-card19-{bg,ink,muted,accent,error}` on `.cl-card19`, re-declared on `--compact` | `variant` prop (`primary` \| `compact`) → a typed `Record<Variant, string>` class map, plus `@theme` tokens |
| two markup copies | **one** `<SignupCard variant …>` rendered twice |
| `data-cl-card19` root + `snippet.js` IIFE | one `useSignupForm` hook per instance (no shared state, no context) |
| `form action="#" method="post" novalidate` | `<form noValidate onSubmit={…}>`, `preventDefault` |
| `input.checkValidity()` + `validity.valueMissing` / `typeMismatch` | same native validity reads + one dot-in-domain regex |
| `error.hidden = false/true` | `error` state in React (`null` \| message) |
| `wrap.hidden` / `done.hidden` | `submitted` boolean driving which subtree renders (keep the done block mounted only when submitted, so `autoFocus`-style focus effects run) |
| `title.focus()` on success | `useEffect` + `ref.current?.focus()` on the `h3` (`tabIndex={-1}`) |
| art SVG | inline JSX, same six shapes, `aria-hidden="true"` |
| `clamp()` sizes | keep as arbitrary values: `text-[clamp(24px,2.6vw,32px)]`, `p-[clamp(24px,4vw,40px)]`, `py-[clamp(36px,7vw,96px)]` |
| `:where(html) …` reset blocks | **do not port** — Tailwind preflight covers it |
| images | none needed; **no picsum placeholders** — the design has no photography |

## 8 — Sibling comparison (same `card` family)

| variant | invented | shape | how Postbox differs |
| --- | --- | --- | --- |
| `card-01`…`card-08` | nameplate, marketrow, octavo, tierline, plaudit, statline, lodgerow, roadbook | repeated `auto-fit` card grids (240–290 px minmax) | Postbox is a **fixed 2fr/1fr pair**, not a repeat |
| `card-09` | lexeme | four flip flashcards | Postbox's state is a **form pipeline**, not a per-card toggle |
| `card-10`…`card-14` | coffer, showbill, coursebook, shortlist, baylist | money / product / course cards | none has a control that writes text back into the card |
| `card-15`…`card-17` | tiffin, tonearm, isobar | media / product / weather panels | Postbox is the family's **first** `<form>` and `<input>` (no sibling records one; the count is **0 / 0** on every sibling that states it) |
| `card-18` | **notebell** | dark notification inbox, 620 column, 4 cards, archive + undo | Postbox is **light** (periwinkle ground, one navy and one white card), has **two** sections instead of one, and its actions are **submit**, not toggle. Shared: content-height stage, no photography, one accent, `hidden`-driven state |
| `card-19` | **postbox** | two-card signup row, art + form / form | — |
| `card-20` | *(still unprepped)* | — | next in the family |

Family invariants Postbox keeps: content-height page (no `min-h-screen`), one type family with a
narrow weight set, a single saturated accent, `aria-labelledby` on the section, `aria-hidden`
decorative art, `prefers-reduced-motion` handling, and **no** photography. Family invariants it
breaks: it is the only one with **two** sections and the only one with a `role="alert"` live region.

## 9 — Traps met while measuring (for the next prep run)

1. **`pg.fill()` after a "bad email" test can silently succeed.** `nope@nope` passes `type=email`, so
   the submit I intended as a *failure* put the card in its success state and the next `fill()`
   timed out for 30 s with "element is not visible" — the form wrapper was hidden. Lesson: when
   probing validation, use `not-an-email` (no `@`) for `typeMismatch`, and when a locator becomes
   invisible mid-script, suspect your own earlier submit rather than the selector.
2. **Both cards' `.cl-card19__submit` match the same selector**, and `pg.click` picks the first. Fine
   here (the navy card is first in DOM order), but scope with `.cl-card19--compact …` for the second.
3. **A stretched grid item's *content* is what you must measure, not the item.** The white card reads
   410.38 (stretched) while its content is 351.94; a table of "card heights" alone hides the 29.22 px
   bands. Read `gridTemplateRows` (one row, `410.375px`) to prove the stretch.
4. **`overflow: hidden` + a radial gradient** means a screenshot of the corner is the only way to
   confirm the glow is clipped — a computed-style read says nothing about it.
5. **`background: currentColor` in a rule that also sets `color`** is always a bug worth checking on
   any pseudo-element badge: read both `getComputedStyle(el,'::before').backgroundColor` **and**
   `.color` and compare them. Here they were identical, which is the tell.
6. **Clamp crossovers are worth computing rather than measuring** (`7vw = 96` at 1,371.4, `4vw = 40` at
   1,000, `2.6vw = 24` at 923.08), but the **flex-wrap** threshold is worth measuring either side
   (440 / 439) because it depends on `flex-basis + gap + sibling`, not on a length.
7. **`document.fonts` lists six faces, three of them `unloaded`** — the woff2 count (8) says nothing
   about the weight count (3). The canvas/font probe (`getBoundingClientRect` of a probe span at 40 px
   in each weight) is what proves 500 ≡ 400 and 600 ≡ 700.
8. **The colour literal census:** `#fde047` (gold), `#1e3a8a` (navy), `#1e40af`, `#dbe4ff`, `#111827`,
   `#4b5563`, `#fecaca`, `#b91c1c`, `#ef4444`, `#22c55e`, `#dfe5f5`, `#c7d2ea`, `#6b7280`, `#93c5fd`,
   `#f472b6`, `#eef2ff` — sixteen, of which the illustration owns three (`#93c5fd`, `#f472b6`, plus
   gold). Grepping the sheet for `#` and de-duplicating before writing the token table is faster and
   more complete than reading rules one at a time.
