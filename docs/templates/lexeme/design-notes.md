# Lexeme — design notes (ColorLib Card V09 → `apps/lexeme`)

Research run 2026-10-26. Reference: `https://preview.colorlib.com/theme/bootstrap/card-09/` (the only
live path — `theme/card-09/` and `theme/bb/card-09/` are 9 B 404s). Archive:
`https://preview.colorlib.com/downloads/free/card-09.zip` (330,191 B). Spec:
`openspec/specs/template-lexeme/spec.md`. Task outline: `docs/templates/lexeme/tasks.md`.

Everything below was measured on the **live** page with Chromium (Playwright 1.62) at DPR 1, plus the
**live** `css/style.css` (9,451 B) — never inferred from the catalogue screenshot.

---

## 1 — What this design actually is

Nine lines of structure, four of them repeated:

```
<body>                                              #f1eefb, Bricolage Grotesque 15/1.45
  <main class="cl-card09-demo">                      max-width 1200 (content-box → 1232 outer), pad clamp(36,6vw,72)/16
    <header class="cl-card09-demo__head">            max-width 620, margin-bottom 32
      <p class="…__eyebrow">Everyday Spanish · Deck 3</p>      14/600 #5b21b6
      <h1 class="…__title">Words worth knowing</h1>            clamp(30,4vw,46)/800/1.05/−.035em
      <p class="…__sub">Hover a card, or tap it …</p>          16/400/1.5 #4a4560
    </header>
    <ul class="cl-card09-grid">                      repeat(auto-fit,minmax(240px,1fr)) gap 20
      <li class="cl-card09" style="--cl-card09-face:#ff6b4a; --cl-card09-ink:#2b0b03">   ×4
        <button class="cl-card09__toggle" aria-pressed="false">   absolute inset 0, z 3, transparent, r 24
          <span class="cl-card09__sr">Flip card: la sobremesa</span>
        </button>
        <div class="cl-card09__inner">                            perspective 1200 (on the li), preserve-3d
          <div class="…__face …__front">                          absolute inset 0, p 24, r 24, face colour
            <span class="…__pos">noun · feminine</span>            13/600 pill, 1.5px currentColor
            <p class="…__word" lang="es">la sobremesa</p>          clamp(32,3vw,40)/800/1/−.03em
            <p class="…__say">/so·bre·ME·sa/</p>                  15/600 opacity .85
            <span class="…__hint"><svg …/>Flip</span>             14/600, self-end, z 1
          </div>
          <div class="…__face …__back" aria-hidden="true">        white, border 2px face colour, rotateY(180)
            <p class="…__label">Meaning</p>                       12.5/600 uppercase .1em #5b21b6
            <p class="…__meaning">The time spent …</p>            19/600/1.3
            <p class="…__example" lang="es">“La sobremesa …”</p>  15/600 on #f4f2fb, r 12, p 10/12
            <p class="…__trans">The after-lunch chat …</p>        14/400 #4a4560
            <span class="…__count">Card 1 of 40</span>            13/600 #4a4560, margin-top auto, pt 12
          </div>
        </div>
      </li>
    </ul>
  </main>
```

Counts on the live DOM: **22 markup classes**, **49 rules** in the one sheet, **4 `<button>`**,
**4 focusable**, **0 anchors**, **0 forms**, **0 inputs**, **0 `<img>`**, **4 `<svg>`** (the flip glyph),
**1 `h1`**, **0 `h2`**, **0 `@keyframes`**, **0 container queries**, **3 `@media` blocks**, **3 custom
properties**, **0 authored `<script>`** (a browser sees **11**, all host injections).

---

## 2 — Token reference (copy-paste block from the live sheet)

```css
/* ground + ink */
body                { background: #f1eefb; font: 15px/1.45 "Bricolage Grotesque", system-ui, … }
.cl-card09-demo     { max-width: 1200px; padding: clamp(36px,6vw,72px) 16px; color: #1e1b2e }
.cl-card09-demo__eyebrow { color: #5b21b6; font-size: 14px; font-weight: 600 }
.cl-card09-demo__title   { font-size: clamp(30px,4vw,46px); font-weight: 800;
                           line-height: 1.05; letter-spacing: -.035em }
.cl-card09-demo__sub     { color: #4a4560; font-size: 16px; line-height: 1.5 }

/* grid */
.cl-card09-grid     { display: grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
                      gap: 20px; list-style: none; margin: 0; padding: 0 }

/* the card */
.cl-card09          { --cl-card09-face: #ff6b4a; --cl-card09-ink: #2b0b03; --cl-card09-speed: .7s;
                      position: relative; min-height: 320px; perspective: 1200px; font-size: 15px;
                      line-height: 1.45 }
.cl-card09__inner   { position: relative; height: 100%; min-height: inherit; transform-style: preserve-3d;
                      transition: transform var(--cl-card09-speed) cubic-bezier(.3,.8,.3,1) }
.cl-card09.is-flipped .cl-card09__inner,
@media (hover:hover) .cl-card09:not(.is-manual):hover .cl-card09__inner { transform: rotateY(180deg) }

.cl-card09__face    { position: absolute; inset: 0; display: flex; flex-direction: column;
                      padding: 24px; border-radius: 24px; overflow: hidden;
                      backface-visibility: hidden }
.cl-card09__front   { background: var(--cl-card09-face); color: var(--cl-card09-ink);
                      box-shadow: 0 18px 36px -20px rgba(30,27,46,.5) }
.cl-card09__front::after { content:""; position:absolute; right:-40px; bottom:-40px;
                      width:160px; height:160px; border-radius:50%; background: rgba(255,255,255,.18) }
.cl-card09__back    { border: 2px solid var(--cl-card09-face); background: #fff; color: #1e1b2e;
                      box-shadow: 0 18px 36px -20px rgba(30,27,46,.35); transform: rotateY(180deg) }

/* runs */
.cl-card09__pos     { align-self: flex-start; padding: 4px 10px; border: 1.5px solid currentColor;
                      border-radius: 999px; font-size: 13px; font-weight: 600 }
.cl-card09__word    { margin: auto 0 4px; font-size: clamp(32px,3vw,40px); font-weight: 800;
                      line-height: 1; letter-spacing: -.03em }
.cl-card09__say     { margin: 0 0 auto; font-size: 15px; font-weight: 600; opacity: .85 }
.cl-card09__hint    { position: relative; z-index: 1; display: inline-flex; align-self: flex-end;
                      align-items: center; gap: 6px; font-size: 14px; font-weight: 600 }
.cl-card09__label   { color: #5b21b6; font-size: 12.5px; font-weight: 600;
                      letter-spacing: .1em; text-transform: uppercase }
.cl-card09__meaning { margin: 8px 0 14px; font-size: 19px; font-weight: 600; line-height: 1.3 }
.cl-card09__example { margin: 0; padding: 10px 12px; border-radius: 12px; background: #f4f2fb;
                      font-size: 15px; font-weight: 600 }
.cl-card09__trans   { margin: 6px 0 0; color: #4a4560; font-size: 14px }
.cl-card09__count   { margin-top: auto; padding-top: 12px; color: #4a4560;
                      font-size: 13px; font-weight: 600 }

/* the control */
.cl-card09__toggle  { position: absolute; inset: 0; z-index: 3; width: 100%; border: 0;
                      border-radius: 24px; background: transparent; cursor: pointer }
.cl-card09__toggle:focus-visible { outline: 3px solid #1e1b2e; outline-offset: 4px }
```

Behaviour (`js/snippet.js`, 1,358 B, no jQuery): on click it adds `is-manual`, toggles `is-flipped`,
flips `aria-pressed`, and swaps `aria-hidden` on the two faces; `Escape` on the button clears the flip;
`front` is set `aria-hidden="false"` on init.

---

## 3 — Palette, contrast, and the one failing pair

| card | face | ink | ink/face | say @ `.85` |
| ---- | ---- | --- | -------: | ----------: |
| 1 | `#ff6b4a` coral | `#2b0b03` | 6.47 | **5.16** |
| 2 | `#5b5bf0` indigo | `#ffffff` | 5.00 | **4.07 → fails AA** |
| 3 | `#ffc53d` amber | `#2e2000` | 10.06 | **6.99** |
| 4 | `#14b8a6` teal | `#022c28` | 6.05 | **4.62** |

Page-level: band ink `#1e1b2e` on ground `#f1eefb` **14.67**; eyebrow/label `#5b21b6` **7.85** on the
ground and **8.98** on white; muted `#4a4560` **7.94** / **9.09**; meaning on white **16.78**; example
`#1e1b2e` on `#f4f2fb` **15.14**; focus ring **14.67**. Non-text: the back's `2px` coral border is
**2.82** against white — decorative, not a control boundary (the button is transparent and fills the
tile), so it is not a defect.

Only defect: **indigo + `opacity: .85` = 4.07:1** at 15 px/600. Fix on that card only.

Where the decorative disc sits (bottom-right, 160 px, `right/bottom: -40px`) it lightens the face by
18 % white — the hint glyph and label sit over or near it; measured `#2b0b03` on the lightened coral is
still **7.70**, so the disc never costs contrast.

---

## 4 — Geometry, section by section (1440 px)

| region | measurement |
| ------ | ----------- |
| container | outer **1232** at x **104** (content-box), content **1200** at x **120**; padding **72 px** top/bottom |
| head | **620 × 103.3** at (120, 72) — eyebrow 17, title 48.3 (`margin 6/8`), sub 24 |
| gap to grid | **32 px** → grid top **207.3** |
| grid | **1200 wide**, 4 columns of **285**, gap **20** |
| card | **285 × 320**, radius 24, perspective 1200 |
| front pill | (24, 24), **122 × 28.84** (card 1), `1.5px` border |
| front word | y **111.4**, 237 × **80** — two lines at 40 px |
| front say | y **195.4**, 21.75 |
| front hint | (**212**, 275.7), 49 × 20.3 — right-aligned inside the 24 px padding |
| back label | (26, 26) — `2 border + 24 pad` — 233 × 18.13 |
| back meaning | y **52.1**, 233 × 74.06 (3 lines × 24.7) |
| back example | y **140.2**, 233 × 63.5 (2 lines + 20 padding) |
| back translation | y **209.7**, 233 × 40.59 (2 lines) |
| back counter | y **263.2**, 233 × 30.84 — `margin-top: auto` + `padding-top: 12` |
| band height | **599.3** — shorter than the 900 viewport, so `documentElement.scrollHeight` reads **900** |

Back-face budget (316 px content box): `24 + 18.13 + 8 + 74.06 + 14 + 63.5 + 6 + 40.59 + 30.84 + 24 =
303.12` + the counter's `12.88` auto margin = **316**. That is **2.9 % headroom** — the reason defect 3
exists.

---

## 5 — Responsive behaviour (measured per width)

| viewport | cols | grid | card | band | title | back face |
| -------: | ---: | ---: | ---: | ---: | ----: | --------- |
| 1440 | 4 | 1200 | 285 | 599.3 | 46, 1 line | fits |
| 1280 | 4 | 1200 | 285 | 599.3 | 46, 1 line | fits |
| 1200 | 4 | 1168 | 277 | 599.3 | 46 | fits |
| 1100 | 4 | 1068 | 252 | 585.19 | 44 | **+12 px overrun** |
| 1080 | 4 | 1048 | 247 | 581.95 | 43.2 | **+12** |
| 1079 | 4 | 1047 | 246.8 | 581.78 | 43.16 | **+12** |
| 1024 | 3 | 992 | 317.3 | 912.88 | 40.96 | fits (page 913 tall) |
| 900 | 3 | 868 | 276 | 892.8 | 36 | fits |
| 830 | 3 | 798 | 252.7 | 881.45 | 33.2 | **+12** |
| 814 | 3 | 782 | 247.3 | 878.84 | 32.56 | **+12** |
| 792 | 3 | 760 | 240 | 875.3 | 31.68 | **+12** |
| 768 | 2 | 736 | 358 | 871.41 | 30.72 | fits |
| 640 | 2 | 608 | 294 | 855.28 | 30 | fits |
| 600 | 2 | 568 | 274 | 850.5 | 30 | fits |
| 560 | 2 | 528 | 254 | 874.5 | 30 | fits |
| 532 | 2 | 500 | 240 | 874.5 | 30 | **+12** |
| 531 | 1 | 499 | 499 | 1554.5 | 30 | fits |
| 480 | 1 | 448 | 448 | 1554.5 | 30 | fits |
| 390 | 1 | 358 | 358 | 1554.5 | 30 | fits |
| 360 | 1 | 328 | 328 | 1554.5 | 30 | fits |
| 320 | 1 | 288 | 288 | 1610 | 30, **2 lines** | fits |

Three things only measurement reveals:

1. **Column thresholds are arithmetic.** `4·240 + 3·20 = 1020` → viewport **1052**; `3·240 + 2·20 = 760`
   → **792**; `2·240 + 20 = 500` → **532**. Measured brackets: 531 → 1, 532 → 2, 790 → 2, 792 → 3,
   1050 → 3, 1052 → 4.
2. **The word's line count is a `vw` artefact.** `clamp(32px, 3vw, 40px)`: `la sobremesa` is **2 lines at
   1440** (40 px on a 285 px card) and **1 line at 1280** (38.4 px on the *same* 285 px card), then
   **2 lines again** at every card ≤ 252 px where the card narrows faster than the clamp shrinks
   (1100, 1079, 814, 792, 548, 547, 532). A px font-size silently breaks one of those.
3. **The card height never moves** — 320 at all 20 widths. Both faces are `absolute`, so the height is
   `min-height` and nothing else.

No horizontal scroll anywhere: `body.scrollWidth === clientWidth` and `scrollTo(300,0) → scrollX 0` at
320 / 360 / 390 / 480 / 531 / 532 / 547 / 768 / 1024 / 1440.

---

## 6 — The flip, in states

| state | classes | `transform` on `.inner` | `aria-pressed` | front `aria-hidden` | back `aria-hidden` |
| ----- | ------- | ----------------------- | -------------- | ------------------- | ------------------ |
| rest (after JS init) | — | `none` | `false` | `false` | `true` |
| **hover** (`(hover:hover)`) | — | `matrix3d(-1,0,0,0, 0,1,0,0, 0,0,-1,0, 0,0,0,1)` | **`false`** | **`false`** | **`true`** ← defect 1 |
| click / tap / Enter / Space | `is-manual is-flipped` | same matrix | `true` | `true` | `false` |
| Escape after flip | `is-manual` | `none` | `false` | `false` | `true` |
| reduced motion, flipped | `is-manual is-flipped` | **`none`** | `true` | `true` | `false` |
| reduced motion, rest | — | `none` | `false` | `false` | `true` |

`transition: transform .7s cubic-bezier(.3,.8,.3,1)` — settled reads need **≥ 900 ms** (a 50 ms read
still shows an interpolated matrix). Touch context (`hasTouch`, `isMobile`): `(hover: none)` true, cards
unrotated at rest, one tap = `is-manual is-flipped` + `aria-pressed="true"`, second tap back to
`is-manual`.

Reduced motion is a **different mechanism**: `.inner` gets `transform: none; transition: none`, the back
`transform: none; opacity: 0`, and `.cl-card09__face { transition: opacity .2s linear }` — so the flipped
card crossfades (`front 0 → back 1`, measured) and never rotates.

---

## 7 — Screenshot analysis (`card-09.jpg`)

- **AVIF behind a `.jpg`** (20,831 B; `file` says *ISO Media, AVIF*; `PIL` opens it). **1,200 × 972**,
  white frame, **macOS browser chrome** baked in (traffic lights + `preview.colorlib.com` bar).
  `card-09-featured.jpg` and `card-09-free-template.jpg` are **404** — the listing image is the only one.
- **Scaled render, not a 1,200 px layout**: the page inside the frame is ≈ **1,120 px** for a real 1,440
  (scale **0.778**); one card measures **219 px** for a real **285**, the head 72 px of padding for a real
  72 (`55 / 0.778 ≈ 70.7`). Nothing on it is measurable without dividing by ~0.778.
- **Collapsed only.** Four coloured fronts; no back face, no flip, no crossfade. It documents the pill,
  the word, the pronunciation, the hint and the disc — and *none* of the meaning, example, translation or
  counter.
- **It does capture the word wrap**: card 1 reads `la` / `sobremesa` on two lines at 40 px, cards 2–4 one
  line — the detail that flips at 1,280 px on the same card width.
- Ground sampled from the image: **`#f0eefb`** (1–2 digits off the real `#f1eefb`; JPEG noise).
- Visual read: lavender ground, four saturated tiles in one row with **hard colour against white paper
  backs**, a **violet label note** repeated (eyebrow + the two visible… actually the eyebrow only, since
  the backs are hidden), a **heavy 46/800 title with −.035em tracking** as the only large type, white
  hairline grammar pills reading as labels not buttons, and a soft **white quarter-disc** at each tile's
  bottom-right that reads as a sheen. The 24 px radius is what makes them read as paper cards rather than
  panels.

---

## 8 — Sibling comparison (the `card` family, `card-01…card-09`)

| # | name | device | height | state |
| - | ---- | ------ | ------ | ----- |
| 01 | nameplate | team roster, four portrait cards | fixed | static |
| 02 | marketrow | product cards with sale flags, stars, add-to-bag | fixed | one toggle |
| 03 | octavo | article cards, cover photo + category chips + author strip | fixed | static |
| 04 | tierline | three pricing tiers, raised white middle plan, ribbon | fixed | static |
| 05 | plaudit | three tinted quote cards, one inverted, giant clipped glyph | fixed | static |
| 06 | statline | four KPI cards, icon chips, delta pills, SVG sparklines | fixed | static |
| 07 | lodgerow | three wide photo-left rental cards | **content-driven** | hover/focus-within, container queries |
| 08 | roadbook | four full-bleed photo cards, gradient scrim, `grid-rows 0fr→1fr` reveal | **440 constant** | hover / focus |
| **09** | **lexeme** | **four flip flashcards: colour front, white back with meaning + example + counter** | **320 constant** | **hover *and* button (`aria-pressed`), `is-manual` latch, Escape, crossfade fallback** |

Family constants Lexeme shares: the `cl-`-prefixed, namespaced, framework-free stylesheet with an
`all: revert` guard; **`.cl-icon` dead in every member so far (this is the eighth)**; grid-by-arithmetic
(`minmax`) with no column media query; one `<h1>` and no `h2`; `background` and type tokens read straight
off the sheet with no Tailwind scale behind them; and a fixed card height that never responds to width.

Where it departs: **it is the first with a real control** (`<button>`, `aria-pressed`, `sr-only` name) and
the first with a **second face of content** — every previous member put all its content on one surface and
used hover to *reveal* a subset of it. That is also why it is the first whose **keyboard path matters**
(Enter/Space to flip, Escape to unflip) and the first that needs a **non-animation fallback** rather than a
shortened animation.

---

## 9 — Traps for the implementer (each cost a measurement here)

1. **`perspective` goes on the parent, `transform-style: preserve-3d` on the rotating wrapper, and
   `backface-visibility: hidden` on both children.** Miss any one and you get a visible mirrored back face
   at the halfway point (or two faces stacked flat). Tailwind 4 has no core utility for `perspective`,
   `transform-style` or `backface-visibility` — write arbitrary properties.
2. **A fixed 320 px + `overflow: hidden` is a clip waiting to happen.** The reference has **12.88 px** of
   slack at 1440 and **negative slack (−12 px)** on any card narrower than 253 px. Add a line to the
   meaning and the counter disappears. Prefer `min-height: 320px` with the faces in flow, or clamp the
   meaning.
3. **`opacity: .85` is a contrast decision, not a style.** It costs exactly 0.93 of the ratio: white on
   indigo goes 5.00 → **4.07** (fails), teal ink goes 6.05 → 4.62 (passes by 0.12), coral 6.47 → 5.16.
   Fix it on the indigo card only.
4. **Two state paths need a latch, or they fight.** Hover flips (CSS) and clicking flips (state); without
   `is-manual`, a click on a hovered card sets `is-flipped` while `:hover` is still true, and moving the
   pointer away snaps it back. The reference's latch is the correct fix — reproduce it (a `manual`
   boolean, or `data-manual`).
5. **`aria-hidden` must follow the *visible* face, and hover breaks that.** The reference only syncs it in
   the script. Any recreation that keeps the CSS hover flip must sync on `pointerenter`/`pointerleave` or
   it reproduces a real accessibility bug.
6. **The card's own `scrollHeight` lies twice.** The front is always `scrollHeight = clientHeight + 40`
   because of the `right/bottom: -40px` disc (a clipped decoration); the back's `scrollHeight` is the
   honest signal (328 vs 316 when it overruns). Measure the **back** face for overflow, never the front.
7. **Read the band height from `body`, not `documentElement`.** At 1440 the page is **599.3** tall inside a
   900 px viewport, so `scrollHeight` reports **900** — the `card-08` trap, repeated here.
8. **The word is a `vw` clamp, so line counts are not a function of card width.** Two widths, two answers,
   one card: 1440 → 2 lines, 1280 → 1 line. Verify both after any font change (the hosted face is
   2.7–4.9 % wider than the archive's).
9. **The whole tile is one button, so nothing is selectable.** That is the design. Do not add a second
   control or a "reveal" link: it would create two tab stops per card and make `aria-pressed` ambiguous.
10. **Reduced motion is a crossfade.** Setting the transition to `0s` and keeping `rotateY(180deg)` gives
    an instant mirror flip — visible, and not what `prefers-reduced-motion: reduce` is for. Remove the
    transform, crossfade the faces at `.2 s linear`.
11. **`.cl-icon` in the sheet styles nothing** — the flip glyph sizes its own `<svg>` (`18 × 18`, stroke
    `currentColor`, `stroke-width: 2`). Do not invent a `.cl-icon` class to "use" it.
12. **The counter claims a deck of 40.** Derive it from a constant (`DECK_SIZE`) so it stays a single
    source of truth; do not add pagination to justify it.

---

## 10 — Source → React adaptation

| reference | React / Tailwind |
| --------- | ---------------- |
| `max-width: 1200px` on `content-box` | `mx-auto max-w-[1232px] px-4` (content 1200) |
| `padding: clamp(36px,6vw,72px) 16px` | `py-[clamp(36px,6vw,72px)] px-4` |
| `repeat(auto-fit,minmax(240px,1fr))`, `gap: 20px` | `grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5` |
| `min-height: 320px` + two `absolute inset-0` faces | `relative min-h-80` + `absolute inset-0` on both faces |
| `perspective: 1200px` / `preserve-3d` / `backface-hidden` | `[perspective:1200px]`, `[transform-style:preserve-3d]`, `[backface-visibility:hidden]` |
| `.inner` `transition: transform .7s cubic-bezier(.3,.8,.3,1)` | `transition-transform duration-700 ease-[cubic-bezier(.3,.8,.3,1)]` |
| `@media (hover:hover) .not(.is-manual):hover` | `[@media(hover:hover)]:hover:[transform:rotateY(180deg)]` + `data-[manual]:![transform:none]`, or a plain CSS block |
| `.is-flipped .inner` | `data-[flipped]:[transform:rotateY(180deg)]` on the inner wrapper |
| `@media (prefers-reduced-motion: reduce)` crossfade | `motion-reduce:transition-none motion-reduce:[transform:none]` + opacity crossfade on both faces |
| `--cl-card09-face` / `--cl-card09-ink` inline per `<li>` | typed `DeckCard` fields → `style={{ '--face': c.face, '--ink': c.ink }}` |
| 6 self-hosted woff2 (2 binaries, variable cut) | one Google Fonts `<link>` `Bricolage+Grotesque:wght@400;600;800` |
| `:where(html) … { all: revert }` (60 lines) | **do not port** — Tailwind preflight |
| `js/snippet.js` (35 lines of class/ARIA toggling) | one `useState` per card (`flipped`, `manual`) + `onClick` / `onPointerEnter` / `onKeyDown`; **no** `useEffect` state writes (`react(set-state-in-effect)` is an error in this repo) |
| 4 inline `<svg>` flip glyphs | `lucide-react` `RotateCw` at `18px`, or the reference's 24-box path |
| no footer | one Component Dock attribution line |
| `#f1eefb` `#1e1b2e` `#5b21b6` `#4a4560` `#f4f2fb` | `@theme` `--color-ground` `--color-ink` `--color-accent` `--color-muted` `--color-well` |

---

## 11 — Reference readings kept for citation

| item | value |
| ---- | ----- |
| preview | `https://preview.colorlib.com/theme/bootstrap/card-09/` — **200, 5,865 B** (`theme/card-09/`, `theme/bb/card-09/` → **404, 9 B**) |
| ColorLib page | **200, 113,168 B** — "Card V09", Sept 25 2026, Aigars Silkalns, CC BY 3.0, "the download is 322 KB", links *Card V08* / *Card V10* |
| stylesheet | `css/style.css?v=b58fcf24`, **9,451 B**, sha256 `609096867397de25bca36bca4c577da90b54086dae1019e6930310e399bffcbc` |
| script | `js/snippet.js?v=8296f1f0`, **1,358 B**, sha256 `658de6e821f7c7c110011bf66ba7d714f419c9901ca38aa5ab15fd7aff423ff4` |
| archive | **330,191 B** (322.5 KiB), **14 entries**, 4 dirs + `index.html` 5,662 B + `css/style.css` 9,451 B + `js/snippet.js` 1,358 B + `README.md` 1,260 B + 6 `woff2`, **no `images/`** |
| live vs archive | CSS + JS + all 6 fonts **byte-identical**; `index.html` differs only in host lines → **live preview verified; the archive is its un-versioned twin** |
| fonts | Bricolage Grotesque 400/600/800; 6 rules → **2 binaries** (`latin` 76,868 B, `latin-ext` 30,636 B), a variable cut; canvas 46 px **452 / 475 / 483** vs Google Fonts **474 / 488 / 507** |
| screenshot | `card-09.jpg` **20,831 B**, **AVIF behind `.jpg`**, **1,200 × 972**, scale ≈ **0.778**, collapsed state only |
