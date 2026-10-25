# Tierline — design notes

Source: ColorLib **Card V04** (`card-04`), ColorLib page `https://colorlib.com/wp/template/card-04/`
(HTTP 200, 113,170 B), live preview `https://preview.colorlib.com/theme/bootstrap/card-04/`
(**HTTP 200, 4,184 B**, read 2026-10-25 with `curl -4`; **note the `/bootstrap/` prefix** — the slug-only path
404s, both as a directory and as `/index.html`, and `/theme/bb/` 404s too). Recreation name `tierline`. Spec:
`openspec/specs/template-tierline/spec.md`. Tasks: `docs/templates/tierline/tasks.md`.

A **hand-written static snippet**, not a theme build: 4.0 KB of HTML and one 9,675 B stylesheet with **no
script element, no `js/` directory and no behaviour whatsoever**. Bootstrap appears only as a
`:where(html) :is(html, body, div, …) { all: revert; }` guard (55 lines, plus six `::-webkit-datetime-edit`
selectors) so the snippet renders identically inside any host page; Tailwind's preflight replaces it. The
stylesheet's header says it plainly: *"Every style this snippet uses, and nothing else. No framework, no
build step."*

The live sheet is byte-identical to the copy inside `downloads/free/card-04.zip`
(sha256 `8630b5563a809a7e285732e326d5251936841b6a6ae84850c64cbcc4a21b15bc`, 9,675 B); the live HTML is the zip's
`index.html` (3,992 B) plus the host's injections (two `robots` metas, a `cdnjs` `dns-prefetch`, the `?v=` cache
buster with `fetchpriority="high"`). So: **live preview verified; the archive is its un-versioned twin.**

⚠️ The archive's `README.md` lists `js/snippet.js  the behaviour, in plain JavaScript` **and**
`images/  its images`. **There is no `js/` directory, no `images/` directory, no `<script>` and not one
`<img>`.** Same lie as the siblings `card-01` and `card-03`; the opposite of `card-02`, which really ships
1,628 B of JS. Do not go looking for behaviour or photography here — there is none.

## Structure order (measured at 1440 × 900)

| # | band                                        | hook               | ground    |   top |   height |
| - | ------------------------------------------- | ------------------ | --------- | ----: | -------: |
| 0 | page                                        | `body`             | `#0c0f1d` |     0 |    956.2 |
| 1 | container (1,152 outer / 1,120 content)     | `.cl-card04-demo`  | + radial violet glow | 0 | 956.2 |
| 2 | head: eyebrow / `h1` / sub, 620, centred    | `__head`           | —         |    88 |    189.7 |
| 3 | grid (3 × 360, gap 20, `align-items:center`) | `.cl-card04-grid` | —         | 321.7 |    546.5 |
| — | *nothing else*                              | —                  | —         |     — |        — |

Per plain card, top to bottom: `__name` (30) → 6 → `__for` (45) → 22 → `__price` (48) → 22 → `__cta` (50.5) →
26 → `__list-title` (42.5: 22 pad-top + 1 rule + 19.5) → 12 → `__list` (4 × 22.5 + 3 × 10 = 120) → 32 pad.
Featured card: same order plus `__ribbon` (absolute, 0 px of height) and a fifth `<li>` (+32.5), with padding
`44px 28px` instead of `30px 28px 32px` (+26).

## Section-by-section fidelity notes

**1 — The glow (band background).** `radial-gradient(60% 50% at 50% 0%, rgba(124,92,255,.22), transparent 70%)`
is the **container's** `background-image`, so it spans the 1,152 px outer box and reaches at most 239 px down
(a 691 × 478 ellipse centred on the container's top edge). It is not on `body`, it is not full-bleed, and it has
no hard edge inside the container — measured, `body` has `background-image: none`. Reproduced as one Tailwind
arbitrary `bg-[radial-gradient(...)]` on the band, or a `::before` overlay with the same geometry.

**2 — The head.** Fixed `max-width: 620px`, centred, `margin-bottom: 44px`. The eyebrow is **sentence case in
the DOM** ("Pricing") and uppercased by CSS with `.14em` tracking — 18 px tall for 13 px text. The `h1` is
`clamp(28px, 4vw, 44px)` at line-height **1.12** with `−.03em` tracking, so at 1,440 it is **49.28** per line.
Its wrap behaviour is the single most surprising thing in the sheet: **two lines at ≥ 1,060 and at ≤ 434, one
line in between**, because a fixed 620 px head races a growing font (see §Traps 4).

**3 — The grid.** Three `minmax(0, 1fr)` tracks, **20 px gap, no clamp**, `align-items: center`. One width
query: `max-width: 880px` → a single `minmax(0, 440px)` track with `justify-content: center`. There is **no
two-column state and no `auto-fit`** — the family's other three members all use `auto-fit` and none has a width
query, so an implementer working from memory will get this wrong in both directions.

**4 — The card plate.** Radius **22**, `1px solid #262c47`, fill `#151a2e`, padding `30px 28px 32px`, text
`15px/1.5`. Card border-box 360 wide → **302 px of content**, identical on the featured card because its border
is `transparent`, not removed. The only other radii on the page are the CTA's **12**, the ribbon's **999** and
the tick disc's **50 %**.

**5 — The featured card.** Not scaled, not widened, not offset: the *skin* changes. White surface,
`#14142b` ink, `#4d5170` mute, `#5b3df5` name, `#ebe8fb` rule, `#efeaff` tick grounds, `#5b3df5` tick strokes
and focus ring, gradient CTA. Its "outline" is the first shadow layer `0 0 0 1px rgba(139,114,255,.6)`; the
second, `0 30px 80px -20px rgba(124,92,255,.55)`, is a wide violet bloom that lands on the dark ground around
the card and is invisible on white — it must sit on the *outside* of the white card, which is why it reads as a
glow rather than a border.

**6 — The ribbon.** `position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%)` on a `<p>` inside
a bordered article. Because `top: 0` resolves to the **padding box** (1 px inside the border) and the transform
is half its own 30.8 px height, the pill measures **14.4 px above the card's outer top edge** (307.3 vs 321.7)
— 1 px higher than a naive `-50%` calc on a borderless box would put it. 116 px wide (`6px 14px` padding
around 12.5 px text at `.04em`), radius 999, `white-space: nowrap`, gradient `#6d4dff → #b04dff`.

**7 — The two button skins.** Both are `<a>` blocks: 302 × **50.5** (13 + 13 padding + 22.5 line + 2 px of
border), radius 12, 15/700 white, `text-align: center`. Dark: `border #3a4166`, hover fill `#222844` + border
`#4d5580`, transition on background/border/transform at `.2s ease`, ring `3px #b7a8ff` offset 3. Featured:
gradient `#5b3df5 → #9333ea`, transparent 1 px border, `0 10px 24px -10px rgba(91,61,245,.8)`, hover darkens
the gradient **and** lifts `−1px`, ring `3px #5b3df5` offset 3. Additionally, `prefers-reduced-motion: reduce`
kills the transition and the lift, and touches nothing else — because nothing else animates.

**8 — The list.** The label above the list is a `<p>`, not a heading (so the page keeps exactly one `h1` and
three `h2`), 13/19.5/700/`.78px` uppercase, separated from the CTA by `margin-top: 26px`, `padding-top: 22px`
and a 1 px rule. Rows are a `grid` with `gap: 10px`, 22.5 px each. Each row opens with a 20 × 20 disc
(`border-radius: 50%`, `padding: 2px`, so the tick draws at 16 px), `margin-top: 1px`, then 10 px of gap.

**9 — No hover on the card.** Hover exists only on the CTAs. There is no lift, no border-colour change, no
shadow change, no cursor change on the card, no scroll reveal and no `@keyframes`. Two of the three siblings
animate photographs; this one has no photograph to animate.

## What is different from Nameplate / Marketrow / Octavo (the earlier `card` variants)

| property            | card-01/02/03 (siblings)                    | **card-04 (this one)**                                  |
| ------------------- | ------------------------------------------- | ------------------------------------------------------- |
| ground              | paper `#fbfaf7` / `#f1f1ef`                  | **near-black `#0c0f1d`** with a violet radial glow      |
| card plate          | one plate style for all cards; octavo has none | **two opposing skins** (dark vs white) on one row    |
| row relationship    | peers, one height                            | **featured is 58.5 px taller and centred against the others** |
| grid                | `auto-fit`, no width queries                  | fixed 3 tracks + **one 880 px query, never 2 columns**  |
| decoration          | photograph / chip / avatar                    | **ribbon + two gradients + a shadow bloom**             |
| media               | 0–3 `<img>`                                   | **0 `<img>`, 13 inline ticks**                          |
| page vs viewport    | section shorter than 900 px                   | **956.2 px at 1440 — it scrolls**                       |

## Traps (all measured, all cheap to repeat)

1. **`theme/card-04/` 404s twice** (directory + `/index.html`), `theme/bb/` too — the family is
   `theme/bootstrap/card-04/`. Directory *listings* are disabled (9 B 404s for `css/`, `fonts/`); fetch files by
   exact name, and prefer `/index.html` when you need a stable reading (the directory form flakes in this
   family).
2. **The featured card's border is `transparent`, not `none`.** All three cards consume 1 px on each side, so
   all three have **302 px** of content. A `border-none` on the featured card widens its content to 304 and
   pushes every interior box 1 px right — the row is no longer aligned.
3. **`min-height: 3em` on `__for` is 45 px, not 67.5.** `em` resolves against the element's own 15 px font size
   (3 × 15), then wraps to two 22.5 px lines. Reading it as "three lines" adds 22.5 px to every card.
4. **The `h1` wraps in two separate places.** `nowrap` advance at 1,059 px = **615.6** inside a 620 px head (one
   line); at 1,060 px the font is 42.4 and the advance is **620.6** (two lines: 503.2 + 110.6). Below 652 px the
   head is `vw − 32`, so at 435 the head is **403** against a 404 advance (two lines) and at 436 it is exactly
   **404** (one line). Do not hard-code a font size or a breakpoint for this — reproduce `clamp(28,4vw,44)` and
   `max-width: 620px` and it falls out.
5. **Heights are non-monotonic in both directions.** 870.9 at 1,024 → 925 at 1,060 (the `h1` gains a line) →
   941.5 at 1,152 → 956.2 at 1,440; then 931.5 at 881 → **1,860.3** at 880 (the grid collapses). The tallest
   reading in the sweep is **1,953** at 320.
6. **At 1,024 `document.scrollHeight` lies** — it reports 900 (the viewport) because the band is 870.9 tall.
   Measure the band element, or you will "verify" a number that is really the window height.
7. **`align-items: center` is load-bearing.** Drop it (or add `items-stretch`) and the two plain cards stretch
   to 546.5 with their list floating at the top — a visible change, and one that also removes the 29.25 px
   vertical offset the composition depends on.
8. **All three CTA anchors are `href="#"`.** Follow Nameplate's precedent: keep the anchors (the skins' focus
   rings and hovers need them) but point them at real in-page fragments and test `a[href] !== '#'`. Do not
   invent a signup or checkout route — the source has no inner pages (`about/contact/pricing.html` all 404).
9. **`.cl-icon` is dead again** (defined in the sheet, absent from the markup) — the 13 ticks are unclassed
   `<svg>`s styled through `.cl-card04__list svg`. Third sibling in a row with this leftover.
10. **Every bold is synthetic.** Ten `woff2` files hash to **two** binaries (`e310b55a…` latin, `ce093b34…`
    latin-ext), weight **600 ships undeclared**, and the declared 700/800 are Chrome's synthetic bold of the 400
    outline — "Plans that grow" at 48 px measures **344 / 364 / 368** in the reference versus **344 / 365 / 369**
    for real Manrope v20 from Google Fonts. Load 400; 500; 700; 800 and bundle nothing.

## Artifacts

`openspec/specs/template-tierline/spec.md` (≈ 700 lines, `openspec validate template-tierline --type spec` →
**valid**) · `docs/templates/tierline/tasks.md` · `docs/templates/tierline/design-notes.md` (this file).
Row when it ships: new `## Bootstrap Cards (20)` section between `## Bootstrap Carousels (20)` (line ~710) and
`## Bootstrap Checkboxes (20)` (line ~733) — *Card 04* → `tierline`.
Next prep in the family: **`card-05`**.
