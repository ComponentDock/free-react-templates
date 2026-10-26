# Coffer — design notes (`card-10`)

Research run 2026-10-26. Live preview **verified** (`theme/bootstrap/card-10/index.html`, 200, 4,963 B)
and its CSS **byte-identical** to `downloads/free/card-10.zip` (157,079 B, 14 entries) — so the archive
is this file's un-versioned twin and neither source is privileged. Every number below was read from the
live sheet or from `getComputedStyle` / `getBoundingClientRect` in Chromium at 1440 (Playwright), not
estimated from the screenshot. Spec: `openspec/specs/template-coffer/spec.md`.

## 1 — What this design actually is

Three cards, one per financial instrument, on a **full-viewport gradient stage**:

| card | what it shows | the one device that makes it |
| ---- | ------------- | ---------------------------- |
| 1 | account + balance + card number + holder/expiry | the balance's **cents set one size down** (36 → 20 px) and the **bulleted, letter-spaced** number |
| 2 | a savings goal with a progress donut and a CTA | the **116 px ring** — `pathLength="100"` so `stroke-dasharray="68 100"` is a real percentage, svg rotated `-90deg` with every `<text>` counter-rotated |
| 3 | four transactions | the **ruled list**: 1 px `rgba(255,255,255,.14)` hairlines, no fills, 38 px icon tiles, tabular amounts |

Everything else is shared: one card shell (24 px radius, 24 px padding, glass, two-layer shadow), one
typeface (Sora, 400–700, variable), one palette (three gradient stops + white + `violet-100` + gold +
mint). There is **no navigation, no hero image, no footer, no form, no script**. The page's whole
justification is that the glass looks like glass.

Three architectural facts an implementer must not "improve":

1. **The stage is `min-height: 100vh` and at 1440 it is exactly the viewport (900), while its content
   ends at 525.** More than 40 % of the screen is bare gradient. That emptiness is deliberate — it is
   what makes the row read as a floating dashboard rather than a section of a long page.
2. **The cards are `flex-direction: column` with `margin-top: auto` on one child each** (the meta strip
   in card 1, the CTA in card 2). That, plus grid `stretch`, is the entire vertical layout system: no
   heights, no `justify-between` hacks, no absolute positioning.
3. **The blobs are `position: absolute` siblings of the content, not `::before`s of the cards.** They
   are painted on the stage and *seen through* the glass, which is why `backdrop-filter` is doing real
   work here and why the contrast depends on where a card happens to sit.

## 2 — Token reference (copy-paste block from the live sheet)

```css
/* ground */
body                     { background: #2e1065; }                    /* unreachable, see note 1 */
.cl-card10-demo          { min-height: 100vh; padding: clamp(40px, 7vw, 88px) 16px; overflow: hidden;
                           background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 45%, #9d174d 100%);
                           color: #fff; }

/* blobs */
.cl-card10-demo__blob--a { top: 8%;  left: 6%;   width: 320px; height: 320px;
                           background: radial-gradient(circle at 30% 30%, #f472b6, #db2777 70%); }
.cl-card10-demo__blob--b { right: 4%; bottom: 6%; width: 380px; height: 380px;
                           background: radial-gradient(circle at 30% 30%, #fb923c, #c2410c 70%); }
.cl-card10-demo__blob--c { top: 36%; left: 44%;  width: 220px; height: 220px;
                           background: radial-gradient(circle at 30% 30%, #67e8f9, #0e7490 70%); }
.cl-card10-demo__blob    { position: absolute; border-radius: 50%; filter: blur(8px); }

/* container */
.cl-card10-demo__head,
.cl-card10-grid          { max-width: 1140px; margin-inline: auto; position: relative; }
.cl-card10-demo__head    { margin-bottom: 32px; }
.cl-card10-grid          { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
                           gap: 22px; }

/* card shell */
.cl-card10               { --cl-card10-edge: rgba(255,255,255,.28);
                           display: flex; flex-direction: column; padding: 24px;
                           border: 1px solid var(--cl-card10-edge); border-radius: 24px;
                           background: #3b1a6e;                        /* fallback only */
                           color: #fff; font-size: 15px; line-height: 1.5;
                           box-shadow: 0 24px 60px -24px rgba(10,0,30,.6),
                                       inset 0 1px 0 rgba(255,255,255,.25); }
@supports (backdrop-filter: blur(1px)) {
  .cl-card10             { background: linear-gradient(160deg, rgba(255,255,255,.2), rgba(255,255,255,.06));
                           backdrop-filter: blur(22px) saturate(160%); }
}

/* type */
-- h1        clamp(28px, 3.6vw, 40px) / 700 / normal / -.03em
-- sub       16px / 400 / #ede9fe
-- card h2   16px / 600 / 1.5
-- label     12.5px / 400 (600 in the meta strip) / .04em / #ede9fe
-- balance   36px / 700 / 1 / -.03em   + cents 20px / 700 / #ede9fe
-- number    17px / 500 / .12em + word-spacing .2em
-- pill      12.5px / 600 / 4px 10px / 999px / #bbf7d0 on #14532d
-- goal      18px / 600 ; sums 15px / 400 / #ede9fe ; strong 20px / 700 / #fff
-- muted     13.5px / 400 / #ede9fe
-- cta       15px / 600 / 12px 16px / 14px / #fff on #4c1d95
-- link      13.5px / 600 / underline-offset 3px
-- row       15px / 600 / 1.3 ; meta 12.5px / 400 / #ede9fe
-- amount    15px / 600 / tabular-nums / nowrap ; credit #bbf7d0
-- ring      116px ; track rgba(255,255,255,.2) ; fill #fde68a ; stroke 10 ; num 24/700 ; cap 12px

/* motion + focus */
.cl-card10__btn:hover    { transform: translateY(-1px); box-shadow: 0 10px 24px -10px rgba(0,0,0,.5); }
.cl-card10__btn          { transition: transform .2s ease, box-shadow .2s ease; }
:focus-visible           { outline: 3px solid #fde68a; outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) {
  .cl-card10__btn        { transition: none; }
  .cl-card10__btn:hover  { transform: none; }
}
```

**Note 1 — the body colour never paints.** `main` covers `min-height: 100vh` with the gradient, so
`body { background: #2e1065 }` is visible only on overscroll. Set the body to the gradient's **top**
stop (`#1e1b4b`) instead, or the edges flash `violet-950` when a phone rubber-bands.

## 3 — Palette, contrast, and the six failing pairs

Stock Tailwind throughout, with one exception:

| role | value | Tailwind |
| ---- | ----- | -------- |
| gradient stops | `#1e1b4b` / `#4c1d95` / `#9d174d` | `indigo-950` / `violet-900` / `pink-900` |
| blob A | `#f472b6` → `#db2777` | `pink-400` → `pink-600` |
| blob B | `#fb923c` → `#c2410c` | `orange-400` → `orange-700` |
| blob C | `#67e8f9` → `#0e7490` | `cyan-300` → `cyan-700` |
| card fallback | `#3b1a6e` | **not a Tailwind step** |
| secondary ink | `#ede9fe` | `violet-100` |
| gold | `#fde68a` | `amber-200` |
| mint / pill ink | `#bbf7d0` / `#14532d` | `green-200` / `green-900` |
| CTA ink | `#4c1d95` | `violet-900` |

**The contrast problem is positional, so measure it positionally.** The card's background is not one
value: it is gradient + blob + glass at each pixel. Method used here (reproduce it when verifying):

1. screenshot the page at 1440;
2. `addStyleTag('*{color:transparent !important}')` and screenshot again — geometry unchanged, text gone;
3. for each text run, mask the pixels that changed between the two shots (its glyphs), take the
   **median background colour** under that mask, and compute WCAG against the run's CSS colour.

Results at 1440 (**24 runs**): **6 fail**, and the pattern is not random — it is exactly the blobs:

| run | behind | size/wt | ratio | needs |
| --- | ------ | ------- | ----: | ----: |
| `Available balance` | blob A core | 12.5/400 | **2.48** | 4.5 |
| `€320 a month · target March 2027` | blob C core | 13.5/400 | **2.05** | 4.5 |
| `Everyday account` | blob A core | 16/600 | **2.79** | 4.5 |
| head sub-line | blob A tail | 16/400 | **3.39** | 4.5 |
| `€2,720 of €4,000` | blob C tail | 15/400 | **4.29** | 4.5 |
| `−€8.40` | blob B tail | 15/600 | **4.48** | 4.5 |
| balance `€6,482.30` | blob A | 36/700 | 3.15 | 3.0 (pass, 5 % margin) |
| h1 | blob A | 40/700 | 5.10 | 3.0 |
| everything else | — | — | 5.21 – 10.95 | 4.5 |

Boxes that explain it: blob A `(86,72)–(406,392)` vs card 1 `(150,198)–(515,525)`; blob C
`(634,324)–(854,544)` vs card 2 `(537,198)–(903,525)`; blob B `(1002,466)–(1382,846)` vs card 3
`(925,198)–(1290,525)`. Every blob's **core** lands on a card, and all three also wash the head.

**Verified fix** (measured, not proposed):

```css
.cl-card10-demo__blob { opacity: .35; }
.cl-card10            { background-color: rgba(20, 8, 40, .5); }
```

→ **0 of 22 runs fail, worst 6.95:1** (`Available balance`), and the screenshot still reads as frosted
glass with visible blobs. What does **not** work, each tested: scrim only (`rgba(20,8,40,.38)`) → 4
fails; `blob opacity .5` only → 4 fails; scrim `.6` + blobs `.25` → 1 fail (`€320 a month`, 4.18);
blobs `1` + scrim `.35` → 4 fails; repositioning blob A to `top:-4%;left:-6%` and blob C to
`top:78%;left:30%` → 1 fail. The dim **and** the scrim together are the only clean pass.

## 4 — Geometry, section by section (1440 px)

Stage **1440 × 900** (viewport), head **1140 × 99** at (150, 88), grid **1140** at y **198**.

Card 1 — `365.33 × 327` at (150, 198), content box `315.33`, padding 24:

| part | y | h | notes |
| ---- | -: | -: | ----- |
| title row | 223 | 26 | `h2` 24 px line + 44 × 26 mark |
| label | 271 | 18.8 | `margin-top: 22` (`--bank > .label`), `.04em` |
| balance | 293.8 | 36 | gap above = **4 px** (`.label + .big` override) |
| chip | 351.8 | 30 | `margin-top: 22` after the balance |
| number | 391.8 | 25.5 | `margin: 10px 0 14px` |
| meta strip | 460.3 | 39.8 | `margin-top: auto`, `gap: 36` → **29 px of slack** |

Card 2 — ring **116 × 116** at (562.3, 269.8); goal copy 18 px to its right; CTA **315.33 × 46.5** at
y **453.5** (24 px above the card's bottom edge, `margin-top: auto`).

Card 3 — list starts y **261** (`margin-top: 14`); rows **57 / 57 / 57 / 56** at **261 / 322 / 383 /
444**; icon tiles 38 × 38 at radius 12; row padding `9px 0`.

The arithmetic worth copying into the test suite: card 1's own content (`24 + 26 + 22 + 18.8 + 4 + 36 +
22 + 30 + 10 + 25.5 + 14 = 232.3`) is **less than the card's height at every width**, because the card is
stretched by the row, not sized by its content. Only card 3 ever sets the row's height.

## 5 — Responsive behaviour (measured per width)

| viewport | cols | track | row heights | h1 | document |
| -------: | ---: | ----: | ----------- | -: | -------: |
| 1440 | 3 | 365.33 | 327 / 327 / 327 | 40 | 900 |
| 1024 | 3 | 316.00 | 327 / 327 / 327 | 36.86 | 900 |
| 947 | 3 | 290.33 | 372 / 372 / 372 | 34.09 | 900 |
| **946** | 3 | **290.00** | 372 / 372 / 372 | 34.06 | 900 |
| 945 | 2 | 445.50 | 320 / 320 ‖ 327 | 34.02 | 903 |
| 900 | 2 | 423.00 | 320 / 320 ‖ 327 | 32.40 | 900 |
| 768 | 2 | 357.00 | 320 / 320 ‖ 327 | 28 | 900 |
| 640 | 2 | 293.00 | 341 / 341 ‖ 341 | 28 | 900 |
| **634** | 2 | **290.00** | 341 / 341 ‖ 372 | 28 | 918 |
| 633 | 1 | 601.00 | 320 ‖ 281 ‖ 327 | 28 | 1,155 |
| 480 | 1 | 448.00 | 320 ‖ 281 ‖ 327 | 28 | 1,146 |
| 390 | 1 | 358.00 | 320 ‖ 281 ‖ 327 | 28 | 1,146 |
| 340 | 1 | 308.00 | 320 ‖ 320 ‖ 327 | 28 | 1,206 |
| 320 | 1 | **290.00** | 320 ‖ 341 ‖ 372 | 28 | 1,272 |

- **Thresholds are arithmetic**: `3·290 + 2·22 = 914` → viewport **946**; `2·290 + 22 = 602` → **634**.
  Both boundaries verified at ±1 px, and at each one the tracks are exactly **290.00** — the `minmax`
  floor binding.
- **Card height is a function of copy wrapping, not of a breakpoint.** The goal sub-line
  (`13.5 px`, "€320 a month · target March 2027") is one line at a 315–316 px content box and **two**
  below ~308, which is why card 2 grows from 327 → 341 exactly where card 1 stays at 320.
- **At 3 columns the row stretches to the tallest**: 327 at 1024+, **372** at 946 because card 3 needs
  more vertical room at a 290 px track.
- **The orphan**: at 2 columns the third card sits alone in row 2 at half width — 423 px wide at 900,
  leaving a 423 px hole. Recreate it; do not `col-span-2`.
- **At 320 the track is 2 px wider than the grid** (290 in 288): the right gutter is **14 px**, the left
  is 16. `overflow: hidden` absorbs it — no scrollbar (`scrollX 0`). It is not a bug to fix.

## 6 — States

The reference has almost no state, which is itself a fact the implementer has to decide about:

- **Only one transition on the page**: the CTA's `translateY(-1px)` + shadow on `:hover`, 200 ms, with a
  `prefers-reduced-motion` block that kills both.
- **`See all` is underlined by UA default** (`text-decoration-line: underline`, colour `#fff`, offset
  3 px) — the sheet never sets `text-decoration`, it only sets the offset. Keep the underline; it is the
  only affordance signal on the card.
- **Nothing else responds**: no hover on cards, no focus styles on the cards themselves, no active
  state, no loading state. The two anchors are `href="#"`, i.e. inert (defect 2 in the spec).
- **Recommended state model** for the recreation: one typed dataset + a `pressed`/`dialog` affordance for
  the CTA (a real `<button>`), `See all` as a link to a ledger route or removed. Whatever you choose,
  **no `#` hrefs**, and the donut percentage must be computed from the dataset so a changed `saved`
  moves the arc, the number and the "On track" pill together.

## 7 — Screenshot analysis (`card-10.jpg`)

- **33,128 B AVIF behind a `.jpg`** — `file` says *ISO Media, AVIF*; `PIL` opens it, `vision_analyze`
  rejects the raw file, convert first. Only image at that path (`card-10-featured.jpg` and
  `card-10-free-template.jpg` do not exist).
- **1,200 × 972**, macOS browser chrome baked in (traffic lights + `preview.colorlib.com` URL bar).
- **A scaled render, not a 1,200 px layout**: the stage spans ≈ 1,120 px against a real 1,440, and a card
  measures ≈ 283 against a real 365 → scale ≈ **0.775**. Measure nothing from it.
- It shows the page **uncropped, including its emptiness**: head, one row of three cards, then ~380 px of
  untouched gradient to the frame's bottom. The framing is the closest in the family to a real browser
  window, precisely because the page is viewport-height.
- **The screenshot records the blob wash and therefore the defect**: card 1's left half is pink, card 2's
  lower half cyan, card 3's bottom-right orange. Someone recreating from this image alone would read the
  pink as "the account card is pink" and paint a **solid pink** card — losing the glass and keeping the
  contrast failure.
- Visual read: violet→magenta field; three glass slabs with a **1 px white edge and a highlight along the
  top**; one **gold** accent doing all the warmth (donut, chip, focus ring); one **mint** accent doing all
  the positivity (pill, credit); hierarchy carried entirely by **size and weight** (40 → 36 → 24 → 18 →
  16 → 12.5); the ledger ruled by three hairlines at `.14` white and no fills; the card number the only
  tracked type on the page.

## 8 — Sibling comparison (the `card` family)

| sibling | ground | device | what Coffer borrows / rejects |
| ------- | ------ | ------ | ----------------------------- |
| Nameplate | light portrait cards | roster of people | rejects the light ground entirely |
| Marketrow | paper | commerce row + rating stars | same "three/four across" arithmetic, no commerce chrome |
| Octavo | paper | serif article cards | Coffer has **no serif** — Sora only |
| Tierline | dark band | raised middle plan | Coffer's dark ground is a **gradient + blobs**, not a flat band, and no card is emphasised |
| Plaudit | tinted | inverted quote card | no inversion: all three cards are the same surface |
| Statline | tinted | KPI chips + sparklines | **closest cousin**: Coffer's donut is Statline's sparkline slot; Statline puts `tabular-nums` on the values — Coffer forgets to on the balance |
| Lodgerow | photo-left rentals | badges + price block | Coffer has **zero photography** |
| Roadbook | photos under a scrim | hover reveal | Coffer's scrim is **glass over a gradient**, not a photo scrim, and there is no reveal |
| Lexeme | lavender | flip cards + 3D | Coffer is the first **dark + translucent** member; both are single-viewport bands |

Family constants worth reusing: 1 stylesheet, no framework, namespaced `.cl-*` classes, inline SVG for
every glyph, one `prefers-reduced-motion` block, and a `.cl-icon` rule that nothing selects.

## 9 — Traps for the implementer (each cost a measurement here)

1. **Do not read the card's colour as a token.** It is gradient + blob + glass. A flat
   `bg-violet-800/40` will look "close" in a diff and wrong on screen, and it will silently change every
   contrast number. Stack: scrim → white glass gradient → `backdrop-filter`.
2. **`backdrop-filter` needs a fallback or the cards die.** Outside `@supports` the reference uses
   `#3b1a6e`; a recreation that only writes `backdrop-blur` renders the card as a nearly transparent
   white slab on browsers without blur, and white text on it is unreadable.
3. **`pathLength="100"` is load-bearing.** Without it `stroke-dasharray="68 100"` means 68 user units of a
   314 px circumference → a **21 %** arc instead of 68 %. If you compute the dasharray in React you must
   keep `pathLength` on the circle.
4. **The donut needs both rotations.** svg `rotate(-90deg)` (arc starts at 12 o'clock) **and** each
   `<text>` `rotate(90 60 60)`. Drop the second and "68% / saved" read sideways; drop the first and the
   arc starts at 3 o'clock.
5. **Card heights are content-driven.** 281 → 372. Giving the cards `h-[327px]` clips the goal sub-line at
   320 and strands the CTA mid-card at 946. Let the grid stretch them.
6. **The 2-column band orphans the third card.** It is real, it is visible (423 px hole at 900), and it is
   the reference's behaviour. Do not "balance" it.
7. **The half-pixel sizes are the layout.** `12.5 px` labels (18.8 px line) and `13.5 px` muted copy
   (20.25 px line). Rounding either moves the goal card's wrap point and every card's height.
8. **`line-height` is `normal`, not `1`.** The 40 px title occupies **51 px**; `leading-none` would
   collapse the head by 11 px and pull the grid up with it.
9. **`tabular-nums` on amounts only is a real defect, not a nicety.** The balance, the goal sums and the
   donut number are proportional, so `€6,482.30` → `€6,483.30` shifts the width and the cents span jitters.
   Apply it to every figure.
10. **The chip is an SVG, not an emoji or an image.** 40 × 30, `rx="7"`, gold at `.85`, a `1.2` stroke at
    `rgba(120,80,0,.45)`. `lucide-react`'s `CreditCard` is a different drawing — inline the rects.
11. **`.cl-icon` is dead again.** Do not port the rule, and do not introduce a utility class layer to
    "reuse" it.
12. **The archive's README lists `js/snippet.js` and `images/`.** Neither is in the zip (14 entries). No
    behaviour to port; do not invent one.

## 10 — Source → React adaptation

| reference | recreation |
| --------- | ---------- |
| three blob `<div>`s, sibling of content | same, `aria-hidden`, `absolute`, `[filter:blur(8px)]`, `opacity-[.35]` |
| `@supports` block | `supports-[backdrop-filter]:` variants, or a plain CSS block in `index.css` — Tailwind 4 has no fallback wrapper |
| `.cl-card10__row` × 2 (title, meta) | `<div className="flex items-center justify-between gap-3">`; the meta variant swaps to `justify-start gap-9` |
| `<p class="cl-card10__big">€6,482<span>.30</span></p>` | `<p>` + `<span className="text-xl text-violet-100">`; keep the runs separate for the sr-only prefix |
| bulleted number | `<span className="sr-only">Card ending in </span><span aria-hidden>•••• •••• •••• </span>4821` |
| donut `<svg>` | inline SVG component taking `pct`; `strokeDasharray={`${pct} 100`}`, texts `transform="rotate(90 60 60)"` |
| `<ul>`/`<li>` ledger | `<ul>` mapping the dataset; amount class switched by `kind` |
| two `href="#"` anchors | `<button>` + a real link (defect 2) |
| 8 `@font-face` / 2 binaries | one Google Fonts `css2?family=Sora:wght@400..700&display=swap` |
| `:where(html) … { all: revert }` (60 lines) | do not port; Tailwind preflight |
| `#3b1a6e`, scrim, gradient stops | `@theme` tokens (`--color-glass-fallback`, `--color-scrim`, three stop tokens) if the arbitrary values get noisy |
| no footer | one Component Dock attribution line |

## 11 — Reference readings kept for citation

| what | value |
| ---- | ----- |
| preview | `https://preview.colorlib.com/theme/bootstrap/card-10/` — 200, 4,963 B (live), 4,771 B (archive) |
| slug-only preview | `https://preview.colorlib.com/theme/card-10/` — **404**, 9 B (`text/plain`) |
| listing page | `https://colorlib.com/wp/template/card-10/` — 200, 113,464 B; "download is 153 KB" |
| stylesheet | `css/style.css?v=918baee9` — 11,527 B, 519 lines, 65 rules / 147 selectors (57 `.cl-*`), 1 `@media`, 1 `@supports`, 0 `@keyframes` |
| css sha256 | `ecba3f6580f6c1c100dc956b19d4fb585dd0a497ccd67a6918fba2d2b916c3c8` (live = archive) |
| archive | `downloads/free/card-10.zip` — 157,079 B, 14 entries, no `js/`, no `images/` |
| fonts | Sora 400/500/600/700 × latin/latin-ext = 8 rules, **2 binaries**: `3902474d…` (25,240 B, latin ×4), `8d9b4a41…` (12,116 B, latin-ext ×4) |
| font A/B | canvas, "Good evening, Lina" at 40 px: **389 px @400**, **397 px @700** → variable cut, no synthesis |
| Google Fonts | `css2?family=Sora` → 200; `css2?family=Sora:wght@400..700` → 200 |
| screenshot | `colorlib.com/wp/wp-content/uploads/sites/2/card-10.jpg` — 33,128 B, AVIF, 1,200 × 972 |
| DOM counts | 3 sections · 1 `h1` · 3 `h2` · 7 `svg` · 2 `a` · 0 `img` · 1 `ul` · 4 `li` · 7 `p` · 24 `span` |
| contrast sweep | 24 runs at 1440; 6 fail AA, worst 2.05:1; verified fix → 0 fail, worst 6.95:1 |
