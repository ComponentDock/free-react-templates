# Roadbook — design notes (`card-08`)

Research run 2026-10-26. Live preview **verified** (`theme/bootstrap/card-08/index.html`, 200, 4,465 B) and its
CSS + all four images **byte-identical** to `downloads/free/card-08.zip` (490,403 B, 17 entries) — so the
archive is this file's un-versioned twin and neither source is privileged. Every number below was read from
`getComputedStyle` / `getBoundingClientRect` at 1440 px (Playwright 1.62 Chromium), from PIL samples of the
rendered page, or bisected at the pixel.

Spec is the authority: `openspec/specs/template-roadbook/spec.md`. Tasks: `docs/templates/roadbook/tasks.md`.

## 1 — Live DOM skeleton (as served, dedented)

```
body                                   #111210 · Space Grotesk 16/normal · margin 0
└─ main.cl-card08-demo                 max-w 1280 (content-box!) · pad clamp(36,6vw,72) 16 · color #f4f1ea
   ├─ header.cl-card08-demo__head      mb 32
   │  ├─ p.cl-card08-demo__eyebrow     "Field guides · 2026 edition"   (U+00B7)  14/500 #d9f99d
   │  └─ h1.cl-card08-demo__title      "Where to go when the season turns"  clamp(30,4.4vw,52)/700/1.02
   └─ ul.cl-card08-grid                grid repeat(auto-fit,minmax(250px,1fr)) · gap 16
      └─ li → article.cl-card08 ×4     relative · flex items-end · min-h 440 · radius 22 · overflow hidden
         │                             isolation: isolate · bg #2a2c28 · 15/1.5 · #fff
         ├─ img.cl-card08__img         absolute inset-0 · z -2 · cover · transition transform .8s
         │                             hover/focus-within scale(1.07)
         ├─ div.cl-card08__shade       absolute inset-0 · z -1 · 4-stop gradient · hover bg rgba(0,0,0,.25)
         ├─ span.cl-card08__tag        absolute 16/16 · pill 13/500 · blur(6px)
         └─ div.cl-card08__content     w 100% · pad 22 22 24
            ├─ p.cl-card08__kicker     "Dolomites, Italy"   13/500 · uppercase · .08em · #d9f99d
            ├─ h2.cl-card08__title     a.cl-card08__link  href="#"  (::after inset 0, z 1, radius 22)
            │                          28/700/1.1 · -.03em
            └─ div.cl-card08__more     grid · rows 0fr · opacity 0 → 1fr / 1 on hover+focus-within
               └─ div.cl-card08__inner min-h 0 · overflow hidden
                  ├─ p.cl-card08__text      15/400/1.5 #f1efe8 · mt 10
                  └─ p.cl-card08__facts     flex · gap 8 · mt 12 · 2 chips 12.5/700 lime
```

Card copy, in order:

| # | tag        | kicker              | title             | blurb (3 lines at 264 px)                                                                 | facts                |
| - | ---------- | ------------------- | ----------------- | ----------------------------------------------------------------------------------------- | -------------------- |
| 1 | Hiking     | Dolomites, Italy    | Lakes and larches | Five day hikes between mountain huts, timed for the golden larch weeks in mid October.     | 5 routes · 6 min read |
| 2 | City break | Tokyo, Japan        | Neon after dark   | Late-night food alleys, record bars and the last trains home, neighbourhood by neighbourhood. | 18 places · 9 min read |
| 3 | Trekking   | Cusco region, Peru  | Above the clouds  | Acclimatise in the Sacred Valley, then walk four days to the citadel on a quieter route.    | 4 days · 11 min read |
| 4 | Winter     | Tromsø, Norway      | Chasing the lights| How to read the forecast, where to drive on cloudy nights, and what to pack for minus fifteen. | 3 nights · 7 min read |

## 2 — CSS token reference block (verbatim values)

```css
body { background: #111210; font-family: "Space Grotesk", system-ui, …; }
.cl-card08-demo      { max-width: 1280px; margin: 0 auto; padding: clamp(36px,6vw,72px) 16px; color: #f4f1ea; }
.cl-card08-demo__head    { margin-bottom: 32px; }
.cl-card08-demo__eyebrow { color: #d9f99d; font-size: 14px; font-weight: 500; }
.cl-card08-demo__title   { max-width: 640px; margin: 8px 0 0; font-size: clamp(30px,4.4vw,52px);
                           font-weight: 700; letter-spacing: -.035em; line-height: 1.02; }
.cl-card08-grid      { display: grid; grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
                       gap: 16px; margin: 0; padding: 0; list-style: none; }
.cl-card08           { --cl-card08-accent: #d9f99d; position: relative; display: flex; align-items: flex-end;
                       min-height: 440px; overflow: hidden; border-radius: 22px; background: #2a2c28;
                       color: #fff; font-size: 15px; line-height: 1.5; isolation: isolate; }
.cl-card08__img      { position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%;
                       object-fit: cover; transition: transform .8s cubic-bezier(.2,.7,.2,1); }
.cl-card08__shade    { position: absolute; inset: 0; z-index: -1;
                       background: linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,0) 30%,
                                                   rgba(0,0,0,.35) 55%, rgba(0,0,0,.9) 100%);
                       transition: background-color .4s ease; }
.cl-card08__tag      { position: absolute; top: 16px; left: 16px; padding: 6px 12px;
                       border: 1px solid rgba(255,255,255,.45); border-radius: 999px;
                       background: rgba(0,0,0,.45); color: #fff; font-size: 13px; font-weight: 500;
                       -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); }
.cl-card08__content  { width: 100%; padding: 22px 22px 24px; }
.cl-card08__kicker   { margin: 0 0 4px; color: var(--cl-card08-accent); font-size: 13px; font-weight: 500;
                       letter-spacing: .08em; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,.6); }
.cl-card08__title    { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -.03em;
                       line-height: 1.1; text-shadow: 0 1px 3px rgba(0,0,0,.5); }
.cl-card08__link::after      { content: ""; position: absolute; inset: 0; z-index: 1; border-radius: 22px; }
.cl-card08__link:focus-visible { outline: none; }
.cl-card08__link:focus-visible::after { outline: 3px solid var(--cl-card08-accent); outline-offset: -5px; }
.cl-card08__more     { display: grid; grid-template-rows: 0fr; opacity: 0;
                       transition: grid-template-rows .45s ease, opacity .35s ease; }
.cl-card08__inner    { min-height: 0; overflow: hidden; }
.cl-card08__text     { margin: 10px 0 0; color: #f1efe8; font-size: 15px; }
.cl-card08__facts    { display: flex; gap: 8px; margin: 12px 0 0; }
.cl-card08__facts span { padding: 4px 10px; border-radius: 999px; background: var(--cl-card08-accent);
                         color: #1a2e05; font-size: 12.5px; font-weight: 700; }
.cl-card08:hover .cl-card08__img, .cl-card08:focus-within .cl-card08__img { transform: scale(1.07); }
.cl-card08:hover .cl-card08__shade, .cl-card08:focus-within .cl-card08__shade { background-color: rgba(0,0,0,.25); }
.cl-card08:hover .cl-card08__more, .cl-card08:focus-within .cl-card08__more { grid-template-rows: 1fr; opacity: 1; }
@media (hover: none) { .cl-card08__more { grid-template-rows: 1fr; opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  .cl-card08__img, .cl-card08__shade, .cl-card08__more { transition: none; }
  .cl-card08:hover .cl-card08__img, .cl-card08:focus-within .cl-card08__img { transform: none; }
}
```

Measured at 1440: `body` **748.06** tall, `main` **1312 × 748.06** at x 64 with `padding: 72px 16px`
(content-box), head **1280 × 132.06** at y 72, grid **1280** at x 80 with four **308 × 440** cards.

## 3 — Section-by-section fidelity notes

### 3.1 The band

One element does the page: `<main>` with a clamp padding and a `1280px` **content** width. There is no
max-width on the body, no wrapper, no second container. At 1440 the page is **shorter than the viewport**
(748 against 900), so the ground runs to the window edge and there is no scrollbar — a fact worth keeping
because it makes the four-card row look like a poster rather than a page.

### 3.2 The head

Two lines of text, nothing else: a 14 px lime eyebrow (**U+00B7**, not a bullet, not a pipe) and a
clamp-scaled title capped at **640 px**. The cap is why the title breaks after "the" at 1440 and stays on
one line from 517 to 896 — the wrap is a function of *two* ceilings (640 px and the container), and each
one wins in a different range:

| range            | constraint that wraps | measured           |
| ---------------- | --------------------- | ------------------ |
| ≥ 897            | the 640 px `max-width` | 2 lines, `534.7 + 98.09` |
| 517 – 896        | neither               | 1 line (484.36 – 638.47) |
| ≤ 516            | the container width   | 2 lines, `403.66 + 73.77` |

Font-size: 52 px at ≥ 1,182 (`4.4vw` hits the cap), `4.4vw` from 682 to 1,181, 30 px at ≤ 681.

### 3.3 The grid

`repeat(auto-fit, minmax(250px, 1fr))` + `gap: 16px` is the whole responsive story — there is **no column
media query** anywhere in the sheet. The three thresholds fall out of the arithmetic `n·250 + (n−1)·16`
against the grid width:

| columns | grid width needed | viewport   | measured pair      |
| ------: | ----------------: | ---------- | ------------------ |
| 4       | 1048              | ≥ 1080     | 1080 / 1079        |
| 3       | 782               | 814 – 1079 | 814 / 813          |
| 2       | 516               | 548 – 813  | 548 / 547          |
| 1       | —                 | ≤ 547      | 547                |

A recreation that "helpfully" adds `sm:grid-cols-2 lg:grid-cols-4` will drift at every one of those
boundaries: `sm:` is 640 (not 548) and `lg:` is 1024 (not 1080).

### 3.4 The card

Four decisions, all load-bearing:

1. **`min-height: 440px` + `align-items: flex-end`** — the content block is bottom-anchored and the card
   height is a *floor*, not a ratio. Because the tallest content (239.05 px at 320, panel open) never
   reaches 440 − 46 of padding, the card is **440 at every width**. This is the exact opposite of
   `card-07`, where each `article` sized itself and three heights appeared on one page.
2. **`overflow: hidden` + `border-radius: 22px`** — clips both the photo and its `scale(1.07)`.
3. **`isolation: isolate`** — makes `z-index: -2 / -1` on the photo and the scrim safe: they sit behind
   the text but **inside** the card's stacking context. Without it the photo falls behind the page
   background and the card shows `#2a2c28`.
4. **`font-size: 15px; line-height: 1.5`** on the root, so every child's line box is computed from 15 —
   this is why the 13 px kicker sits on 19.5, the 12.5 px chip on 18.75, and the 3-line blurb on 67.5.

### 3.5 The scrim (the part that is easy to get wrong)

Four stops, and the hover state **adds a background-color under them** rather than swapping the gradient:

```
0 %   .25   ← keeps the tag readable at the top
30 %  0     ← the photo's own window
55 %  .35   ← where the OPEN panel's kicker sits (the weak spot)
100 % .90   ← where the CLOSED stack sits (safe)
```

The text moves up the card when the panel opens, so it walks from the strong end of the gradient into
its weak middle:

| run             | rest (82 – 95 %)   | open (56 – 86 %)        |
| --------------- | ------------------ | ----------------------- |
| kicker (lime)   | alpha .68 – .74 → **6.80:1** computed on white | alpha .36 – .41 → **2.16:1** |
| title (white)   | .75 – .83 → 10.4    | .42 – .47 → 3.07        |
| blurb           | —                   | .54 – .73 → 3.95 – 8.20 |

On the reference's four photographs the open state measures **7.25 – 8.46** (Dolomites) because the lake
and the mountain are dark at mid-height — so the design *looks* fine and is one bright photo away from
failing. PIL samples of the rendered page, idle state, kicker row: **9.77 / 9.29 / 9.84 / 15.19**; tag
chip: **3.90 / 4.98 / 3.73 / 7.95** at the blurred surface's brightest decile. Deepen 55 % → `.55` and
100 % → `.92` (or put an opaque plate behind the content) and leave the idle state alone.

### 3.6 The reveal

`grid-template-rows: 0fr → 1fr` is the only correct way to animate an auto-height panel in pure CSS, and
it only works with **both** `min-height: 0` and `overflow: hidden` on the child. Measured interpolation
at 50 ms: row **1.47 px**, opacity **.171** — so no probe may read the open state before ~500 ms.

The `@media (hover: none)` override is the accessibility half of the feature: on a touch device the panel
is *permanently* open (116.25 px at 390), which is the only way the blurb is reachable there. Reduced
motion keeps the open/close but removes the .45 s / .35 s / .8 s timings **and** the zoom.

### 3.7 The link and the ring

One anchor per card, stretched by `::after { inset: 0 }`, so the tag, the kicker and the chips are all
inside the hit area (`elementFromPoint` over the tag returns the link). The ring is drawn on that
`::after` at `outline-offset: -5px`, i.e. **5 px inside the card's edge** — which is what keeps it from
being clipped by `overflow: hidden`, and why the radius must be repeated (`22px`) on the pseudo-element.

The reference's ring is lime on a photograph. On the Dolomites card the photo behind the ring is a bright
sky: **1.17:1**. Add a 1 px `rgba(0,0,0,.6)` twin (box-shadow on the same pseudo-element) — it is the
family's standing "documented delta" for focus indicators.

## 4 — Screenshot analysis (`card-08.jpg`)

- 1,200 × 972 progressive JPEG, **86,878 B**; macOS chrome + `preview.colorlib.com` bar baked in.
- Scale ≈ **0.775 – 0.782** (card 241 px against a real 308; card row 991 against a real 1280). Do not
  measure the design from it.
- Whole page, uncropped — but the page is taller than the mock window, so the ground simply continues
  below the cards.
- **Collapsed state only.** No blurb, no chips, no zoom, no wash: the catalogue image documents perhaps a
  third of the component. Everything in §3.5 – 3.6 comes from the live DOM.
- **The card's bottom 20 px is the same colour as the page ground** (the scrim is 90 % black there), so a
  naive edge detection reports a card 410 px tall instead of 440. Sample the card's *side* edges.
- Ground sampled `#11110f`; real `#111210` (JPEG noise, 1 digit per channel).

## 5 — Source → React adaptation table

| reference                                    | recreation                                                                 |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| `max-width: 1280px` content-box                | `max-w-[1312px] px-4` (content 1280) — `max-w-[1280px]` gives 300 px cards  |
| `repeat(auto-fit,minmax(250px,1fr))`           | `grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4`                      |
| `min-height: 440px` + `align-items: flex-end`   | `min-h-[440px] items-end`                                                   |
| `isolation: isolate` + `z-index: -2/-1`         | `[isolation:isolate] -z-20` / `-z-10`                                       |
| 4-stop gradient                                 | arbitrary `bg-[linear-gradient(…)]`, stops **deepened** to .55 / .92        |
| hover `background-color` under the gradient      | `group-hover:bg-black/25 transition-colors duration-[400ms]`                |
| `0fr → 1fr` collapse                             | `grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows,opacity]` |
| `@media (hover: none)`                           | plain CSS block (no Tailwind variant exists)                                |
| 6 × woff2 (2 binaries, faux 500/700)             | one Google Fonts link, Space Grotesk `400;500;700`                          |
| 4 × 560 × 720 JPEG (50 – 140 KB)                 | `picsum.photos/seed/roadbook-1..4/560/720`                                  |
| lime ring on `::after`                           | same + a 1 px dark twin                                                     |
| no footer                                        | Component Dock attribution line                                             |

## 6 — Sibling comparison (`card` family, `card-01` … `card-08`)

| member    | shape                                   | height behaviour                | motion                          | unique device                         |
| --------- | --------------------------------------- | ------------------------------- | ------------------------------- | ------------------------------------- |
| nameplate | 3 profile cards, one page               | fixed per card                  | minimal                         | avatar + role plate                   |
| marketrow | product row cards                       | fixed                           | hover lift                      | price + swatch stack                  |
| octavo    | article cards                           | fixed                           | hover shift                     | kicker + byline                       |
| tierline  | pricing cards, one inverted             | fixed                           | ring on featured                | tier table                            |
| plaudit   | testimonial cards                       | fixed                           | —                               | quote mark + attribution              |
| statline  | KPI cards, 8 woff2 claimed / 2 real     | **constant 256.38**             | counters                        | `preserveAspectRatio` sparkline        |
| lodgerow  | 3 wide photo-left split cards           | **per card, crosses over**      | `.6 s` zoom + CTA gap           | container query, stretched link       |
| **roadbook** | **4 full-bleed photo cards, 4 columns** | **constant 440 at every width** | **`.8 s` zoom + 0fr→1fr panel** | **gradient scrim as its own layer**   |

Carry from the siblings: the `.cl-icon` dead-selector hunt (now **seven** in a row), the faux-type canvas
A/B (direction is not predictable — `card-06` −1.7 %, `card-07` +1.8 %, `card-08` **+1.25 %**), the
"verify the README's `js/` and `images/` claims per slug" rule (this one lies about `js/`, tells the
truth about `images/`), and the `content-box` container lesson (write the **outer** width in Tailwind).

Do **not** carry: `card-07`'s per-card heights (here the height is constant), `card-06`'s container-query
threshold (there is no container query), or Mandrel's "no motion" rule.

## 7 — Traps (in the order they cost time this run)

1. **`grid-template-rows: 0fr → 1fr` needs `min-height: 0` on the child.** A grid row sized `0fr` still
   respects the child's `min-content` height unless the child opts out. Both halves of `min-height: 0;
   overflow: hidden` are mandatory; with either missing the panel simply never closes (or never clips).
2. **The card's height is invisible after a `scale()` probe.** Once the image is zoomed the photo box
   reads `329.6 × 470.8` for a 440 px card — measure the *card*, not the image, and measure it before you
   hover or after you settle.
3. **The tag chip sits under the stretched link.** `elementFromPoint` over it returns the anchor, so
   "the tag is clickable" is false and "the tag is an interactive element" is false. It is a label.
4. **The page is shorter than the viewport at 1440** (748 vs 900). `documentElement.scrollHeight` reports
   **900** — the viewport, not the content. Read `body.getBoundingClientRect().height` for the band.
5. **The card's bottom edge is the scrim's 90 % black**, i.e. the same colour as the ground. Any crop or
   edge-detection exercise on the screenshot or the live render will under-report the card's height by
   ~20 px. Sample the side edges.
6. **`h1` wraps twice for two different reasons.** One ceiling is `max-width: 640px` (≥ 897), the other
   is the container (≤ 516). Asserting "the title is two lines on desktop" without the range is how a
   recreation ends up with a 640 px cap it never needed, or none at all.
7. **Faux-bold drift has no predictable sign.** `card-08`'s synthesised 700 is **+1.25 % wider** than
   real Space Grotesk; `card-06`'s was −1.7 %. Always run the canvas A/B, never infer.
8. **`@media (hover: none)` must be tested with a real touch context** (`hasTouch: true, isMobile: true`),
   not by resizing — a narrow desktop viewport still matches `(hover: hover)` and keeps the panel closed.

## 8 — Ten-minute verification recipe

```bash
# 1. live twin
curl -4 -sS -o /tmp/c8.html https://preview.colorlib.com/theme/bootstrap/card-08/
curl -4 -sS -o /tmp/c8.css  https://preview.colorlib.com/theme/bootstrap/card-08/css/style.css
curl -4 -sS -o /tmp/c8.zip  https://preview.colorlib.com/downloads/free/card-08.zip
sha256sum /tmp/c8.css   # eb0396f0… ; compare with the zip's css/style.css

# 2. tokens
grep -nE "#111210|#d9f99d|#1a2e05|#2a2c28|#f4f1ea|#f1efe8|440px|22px|0fr|1fr" /tmp/c8.css

# 3. geometry (node + the container's playwright)
#    cards 308×440 at 1440, 4/3/2/1 at 1080/814/548, body 748.06, doc 900
# 4. reveal: hover → more 0 → 116.25, rows 0px → 116.25px, shade → rgba(0,0,0,.25), img 1.07
# 5. touch: context({ hasTouch: true, isMobile: true }) → panel 116.25 without hover
# 6. focus: Tab → ::after outline 3px #d9f99d at -5px; only that card's panel opens
# 7. overflow: scrollTo(300,0) → scrollX 0 at 320/360/390/547/640/768/1024/1440
```
