# Noticeboard — design notes

Reference: `https://preview.colorlib.com/theme/bootstrap/alert-01/` (live, 3,733 B; the archive
`downloads/free/alert-01.zip`, 541,001 B, is its un-versioned twin — same body markup, same CSS
sha256). Screenshot: `alert-01.jpg` (AVIF in a `.jpg` container, 1200 × 972).

This file is the *why* behind the numbers in the spec. Read it before the first component.

## Structure order (1:1 with the reference)

```
body                          #f5f6f8, margin 0
└─ main.cl-alert01-demo       flex · center · align-start · min-h 100vh · pad clamp(24,7vw,88) 16
   └─ section.cl-alert01-panel   grid · gap 14 · max-w 680 · color #111827 · lh 1.5
      ├─ header                 margin-bottom 14
      │  ├─ p.eyebrow          LEDGERLY · BILLING          13/600 · +.04em · uppercase · #4b5563
      │  ├─ h1                 Invoices and payments        30/700 · −.02em · lh 1.5
      │  └─ p.intro            15/400 · #4b5563 · mt 8
      └─ 4 × div.cl-alert01     grid 22px 1fr · gap 14 · pad 16 18 · r 12 · 1px border · shadow
         ├─ svg.icon           22 × 22 · stroke currentColor · accent · mt 1px
         └─ div.body           min-width 0
            ├─ p.title          15/600 · lh 22.5 · var(--title)
            └─ p.text           14/400 · lh 21 · #374151 · mt 3
```

Nothing above, nothing below. The repo's Component Dock attribution line is the **only** addition
(AGENTS.md rule 5) and it lives outside the section.

## Section-by-section fidelity notes

### 1. The ground is a viewport, not a band

`main` is `min-height: 100vh` with `align-items: flex-start`, so the panel sits at the top after the
clamp padding and the rest of the viewport stays empty grey. At 1440 the panel is 577 tall inside a
900 viewport; at 320 it is 807 + 48 padding = 855, still inside 900. **The page never scrolls at any
width we probed** (`body.scrollHeight` = 900 everywhere). Do not introduce a `min-h-screen` band
*and* a `pb-*` — the emptiness is the design, and the screenshot shows exactly that.

### 2. The head's three lines and the double gap

`gap: 14px` on the panel plus `margin-bottom: 14px` on the header is not redundant CSS — it is a
**28 px** separation. Proof: the panel's computed `grid-template-rows` at 1440 reads
`115px 101.5px 101.5px 101.5px 101.5px` (the header's row is 101 + 14), the header box ends at
y **189** and the first alert starts at y **217**. A port that puts the gap only once (or replaces both
with `space-y-4`) pulls the whole stack 14 px up and changes the panel's height from 577 to 563.

Measured panel height 577 = 115 + 4 × 101.5 + 4 × 14. Both numbers matter; neither is derived from a
spacer element.

### 3. The four quads are the design — treat them as data

| severity | bg        | line      | title     | accent  | title contrast |
| -------- | --------- | --------- | --------- | ------- | -------------: |
| info     | `#eff5ff` | `#c7dbfe` | `#1e3a8a` | `#2563eb` | 9.46 |
| success  | `#ecfdf5` | `#b7ecd4` | `#064e3b` | `#059669` | 9.23 |
| warning  | `#fff8eb` | `#fbdba7` | `#7c2d12` | `#c2410c` | 8.87 |
| danger   | `#fef2f2` | `#fbcaca` | `#7f1d1d` | `#dc2626` | 9.16 |

Three structural facts about this table:

1. **The titles are not the accents.** Each title is a *darker* shade of the same hue; the accent is
   used for the icon only. Using the accent for the title collapses the contrast to 3.6–4.7:1 and makes
   the four titles look like links in a page with zero links.
2. **The body text is one grey (`#374151`) for all four**, not a per-variant ink. A port that tints the
   body copy breaks the family resemblance in the opposite direction.
3. **The borders are 1.25–1.33:1 — decoration, deliberately.** The severity cue is carried by tint +
   icon + title, so the border is free to be nearly invisible. Darkening the borders to "pass" a
   non-text contrast rule makes the panel look like a wireframe.

Tailwind's `blue-50` / `emerald-50` / `amber-50` / `red-50` are close but not equal (`#eff6ff`,
`#ecfdf5`, `#fffbeb`, `#fef2f2`); the info and warning grounds would drift. Use the measured hexes.

### 4. Card geometry: 18 px horizontal, 16 px vertical, 12 px radius

`padding: 16px 18px` plus a 1 px border gives the icon's left edge at **19 px** inside the card
(x 399 = panel 380 + 19) and the text column at **55 px** (19 + 22 icon + 14 gap). The tracks are
`22px 606px` at a 680 card: `680 − 36 − 2 − 22 − 14 = 606`.

The shadow is `0 1px 2px rgba(17,24,39,.04)` — the ink at 4 %, i.e. almost nothing. Its job is to keep
the pale card from dissolving into the pale ground; it is not a lift.

### 5. The icon is nudged 1 px, and that is measurable

`margin-top: 1px` on a 22 × 22 icon in a row that starts at the title's line box. The title's line box
is 22.5 tall, so the icon sits 1 px lower than the line box top and its optical centre lands on the
title's cap height. Remove the 1 px and the glyph rides high by one pixel — visible on four stacked
cards at the same y.

At ≤ 480 the card padding drops to 14, so the icon's left edge moves to **15 px** (16 gutter → panel
starts at x 16; card 448 wide) while the head above it does not move. This is the only place where the
head and the cards disagree about their left inset, and it is reproduced in the reference.

### 6. Type: Inter, three declared instances, no 500

The archive ships **eight** `woff2` files that are **two** binaries: `inter-*-latin` (48,432 B,
sha256 `c9407645…`) and `inter-*-latin-ext` (85,272 B, sha256 `a28eb6d3…`). The 400/500/600/700
"weights" are four names for the same file. The sheet declares only 400, 600 and 700; **500 is never
declared**, and a canvas measurement proves it: at 30 px, weights 300/400/500 all measure **324**,
600 measures **331**, 700/800/900 measure **335**. Declaring the same binary with
`font-weight: 100 900` produces a continuous progression (414 → 465 at 40 px), i.e. the file *is*
variable — the sheet just pins three points on the axis.

Practical consequence: **use `font-normal` / `font-semibold` / `font-bold` only.** A `font-medium`
step renders identically to `font-normal`, and `font-extrabold`/`font-black` collapse onto bold.

`h1` is `clamp(24px, 4vw, 30px)` — fluid only between 600 and 750 px, and it never wraps (measured
one line / 36 px at every width down to 320). The eyebrow's uppercase is `text-transform`; keep the
source string in sentence case so the accessible name isn't shouted.

### 7. Responsive behaviour is one media query with a visible step

```css
@media (max-width: 480px) { .cl-alert01 { gap: 12px; padding: 14px; } }
```

That is the *entire* responsive design beyond two clamps. Measured consequences:

- **481 → 480** the first alert drops **122.5 → 118.5** because 3 lines at the wider text column
  become 2 at the narrower one *and* the padding shrinks by 2 px per side. The panel height jumps
  **653.5 → 637.5** while the viewport loses 1 px.
- The card's own left inset goes **19 → 15 px**; the head's inset stays 16 px.
- Nothing else changes: radius 12, shadow, type sizes, the 680 cap and the `vw − 32` formula.

Boundaries worth memorising: **panel cap 712** (`711 → 679`), **intro wraps at 671** (`672 → one
line`), **`h1` hits its 30 px ceiling at 750 and its 24 px floor at 600**, **padding-top caps at 1,257
and floors at 343**, **media query at 480**.

### 8. Copy drives every height

There is no fixed card height. `101.5 = 16 + 16 + 2 + 22.5 + 3 + n × 21`, and `n` is a function of the
words. The reference's four bodies are 2 lines each at 1440 — which is why the four cards look like a
grid — but the moment the column narrows they diverge (560: danger → 3; 520: info → 3; 390: danger →
4; 320: info/danger → 5). **Do not add a `min-h` to "keep them equal"**: at 1440 they are equal by
copy, and at 560 the reference genuinely shows a taller last card.

If the copy is paraphrased, keep the character counts within a few percent or the measured heights in
this spec stop matching.

### 9. Semantics

One `h1`, four `<p>` titles (not headings — the reference has no `h2`), `aria-hidden` icons, and the
live-region roles `status / status / status / alert`. The `section` is labelled by the `h1` via
`aria-labelledby`. There are **zero** focusable elements, so there is no focus ring to design and no
tab order to test.

Static live regions are a known quirk (defect 3 in the spec): content present at load is not
"announced" as an alert. Keep the roles for fidelity, add no JavaScript.

## Traps a port falls into (each one measured)

| trap                                                     | consequence                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------- |
| collapsing the header margin + grid gap into one 14 px    | whole stack 14 px high; panel 563 instead of 577; head→alert gap 14  |
| using the accent for the title                            | 3.6–4.7:1 titles; four "links" on a page with no links               |
| tinting the body copy per severity                        | family breaks; bodies must be `#374151` on all four                  |
| `p-4` + `p-5` thinking (`p-4` = 16 all round)              | text column moves from 55 to 53–57 px; icon left edge from 19 to 17  |
| rounding 12 px radius to `rounded-lg` (8) or `rounded-2xl` (16) | the pale cards stop reading as one family                      |
| adding a `min-h` so the four cards match at every width    | hides the reference's real divergence at 560 and 390                 |
| promoting alert titles to `h2`                            | 4 headings where the reference has 1; changes the AT outline         |
| adding a dismiss `×` button                               | 4 focusable elements and a control the reference does not have       |
| `font-medium` somewhere                                    | renders as 400 (no 500 face); a hierarchy step silently disappears    |
| porting the `all: revert` guard block                      | undoes Tailwind preflight; every element reverts to browser defaults  |
| fixing the 1 px icon `margin-top`                          | icon rides 1 px high on all four cards                               |
| "fixing" the 481/480 step                                  | the panel no longer shrinks at the right place; heights drift by 4 px |

## How to re-verify a claim in this file

```sh
# DOM + tokens (any width)
curl -4 -s https://preview.colorlib.com/theme/bootstrap/alert-01/ | sed -n '1,120p'
curl -4 -s https://preview.colorlib.com/theme/bootstrap/alert-01/css/style.css | sha256sum
#   → e5102b0dc2c71af47cc49e2eafc2994827a1006ae01d5d9b0e33112c3c5e196f

# geometry (Playwright, from a tree that has playwright installed)
NODE_PATH=/root/free-templates-firebase/node_modules node -e "…"   # see the spec's measurement tables
```

The arithmetic is closed-form, so it can also be checked without a browser: panel
`min(680, vw − 32)`, padding `clamp(24, 0.07vw, 88)`, head `101`, header row `115`, alert
`16 + 16 + 2 + 22.5 + 3 + 21 n`, panel `115 + Σ alerts + 4 × 14`.
