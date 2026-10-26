# Tonearm — design notes (`card-16` → `apps/tonearm`)

Everything below was measured on **2026-10-26** against the live preview
`https://preview.colorlib.com/theme/bootstrap/card-16/` (HTTP 200, 6,621 B) with `curl -4` +
Playwright 1.62 Chromium, and cross-checked against the source archive
`preview.colorlib.com/downloads/free/card-16.zip` (227,899 B). Tokens come from the stylesheet
(`css/style.css`, 11,887 B, sha256 `ec1a0a9e…`) and from `getComputedStyle` at 1,440; behaviour comes
from driving the live page (clicking play, skip, speed and rows). Where the sheet and the render
disagree, the render wins, and the disagreements are listed in §5.

## 1 — What this design actually is

The family's **first pair and first interactive card**. Fifteen siblings before it are single static
objects — a name plate, a job notice, a price card, a listing row, a recipe plate. This one is a
**two-card console**: a hero-ish dark panel with cover art and a transport, beside a light panel whose
rows are themselves controls.

```
        ┌──────────────────────────┐   ┌──────────────────────────┐
        │ ╔══════════════════════╗ │   │ ╭────╮  ALBUM · 2026     │
        │ ║ The Long             ║ │   │ │art │  Night Swim        │
        │ ║ Commute        ☀     ║ │   │ ╰────╯  Juniper Coast…   │
        │ ║ ～～～～～～～～～～～ ║ │   │         (▶)              │
        │ ╚══════════════════════╝ │   │  1  Low Tide Lights  3:34│
        │  EPISODE 84 · 42 MIN     │   │  2  Salt in the Radio4:11│
        │  Why cities are plant…   │   │ ▸3 ▮▮▮ Harbour Cats  3:18│  ← current
        │  The Long Commute · with │   │  4  Swimming After…  4:36│
        │  ▬▬▬▬▬▬▬▬▬░░░░░░░░░░░    │   │  5  Postcards (Rep.) 3:23│
        │  18:42          -23:36   │   │  ▬░░░░░░░░░░░░░░░░░░░    │
        │  1×  ↺15 (▶) 30↻  ☰+     │   │  0:00             -3:34  │
        └──────────────────────────┘   └──────────────────────────┘
             645.77 tall                    448.02 tall
        ↑ both start at y 80; align-items: start → a 197.75 px step
```

Everything is one 28 px-radius, 22 px-padded card twice over: same radius, same padding, same 15 px
body, one near-black (`#17151f`) with an amber accent, one cream (`#fffdf8`) with a teal accent. The
teal card is not a "light variant" of the dark one — it is a **different accent and a different content
model** (a list instead of a cover), which is why the pair reads as a product rather than as a template.

The information order is a player, not a marketing card: *what you're listening to → how far in you are
→ what you can do about it*. The album card repeats that order in miniature per row: *number → name →
length*.

## 2 — Section order (exact, no invented sections)

| # | block                                                                 | reference element                |
| - | --------------------------------------------------------------------- | -------------------------------- |
| 1 | page ground + centred row                                             | `main.cl-card16-demo`, `.cl-card16-row` |
| 2 | **podcast card** — cover → info (eyebrow / `h2` / byline) → progress + times → transport | `section.cl-card16--podcast` |
| 3 | **album card** — head (cover + text column + play) → 5-row track list → progress + times | `section.cl-card16--album` |
| 4 | *(nothing)*                                                           | the reference ends at the row; the port adds one Component Dock line |

No nav, no logo, no hero, no CTA, no testimonial, no newsletter, no footer in the reference. **Do not
add a section to fill the 197.75 px step** — the step is the composition.

## 3 — Section-by-section fidelity notes

### 3.1 The row (820 px, top-aligned)

- `max-width: 820px` — **not** the family's usual 1,140. At 1,440 the page has 310 px of ground each
  side. Widening it turns two 398 px cards into 558 px cards: bigger cover, longer measure, different
  design.
- `gap: 24px`, `align-items: start`. The album stops at 448.02 while the podcast runs to 645.77. Grid
  default (`stretch`) would make both 645.77 and kill the silhouette — this is the single easiest way
  to get the card wrong.
- `repeat(auto-fit, minmax(min(100%, 340px), 1fr))` with **no media query**. 2 × 340 + 24 = 704 of grid
  width = **736 viewport**; measured **2 columns and tracks of exactly 340.00 at 736**, **1 column of
  703 at 735**.

### 3.2 The podcast cover

- Square, and its edge is the card's **content** width: `aspect-ratio: 1` inside `padding: 22px` →
  **354 × 354** at 1,440, **314** at 390, **244** at 320, **204** at 280. Any fixed size breaks the
  square-ness at some width.
- `border-radius: 20px` (the album's cover is **16** — they are deliberately different).
- `linear-gradient(160deg, #3a0ca3, #7209b7 60%, #b5179e)`.
- Art is **inline SVG, 0 `<img>` on the page**: a `#ffd166` circle at `cx 150 cy 104 r 28` and two wave
  paths, `#ef476f` at `opacity=".85"` and `#7b2cbf`, on a `0 0 200 200` viewBox scaled to fill.
- The show name is an absolutely positioned span at `top: 20px; left: 22px`, `clamp(30px, 6vw, 44px)`,
  **700**, `line-height: .95`, `letter-spacing: -.04em`, white, with a hard `<br>`. It occupies the top
  ~24 % of the art, which is exactly why white survives there (11.92:1 at `#3a0ca3`, 5.86:1 at
  `#b5179e`).
- The sun circle is not decoration: `is-playing` scales **that circle** to 1.12 every 2.4 s with
  `transform-origin: 150px 104px`. Re-authoring the scene as flat paths or an `<img>` deletes the pulse.

### 3.3 The podcast head

Eyebrow → title → byline, `margin: 20px 0 16px`, giving **99.64** px between the cover and the bar.

- eyebrow **13 / 600 / .04em** in **`#ffb27a`** — an override; the card's declared accent is `#ff8a3d`
  and it never paints on this card (see defect 7 in the spec).
- title **21 / 700 / −.01em / 1.25**, `margin: 4px 0`, two lines at 398 px (52.5 tall). It is an `h2`,
  not an `h1`: the reference page has **no `h1` at all**.
- byline **14 / 400** in `#b9b4c9`.

### 3.4 Progress and times

- **6 px** bar, `border-radius: 999px`, `overflow: hidden`. Podcast track `rgba(255,255,255,.16)`,
  album track `#e4ebe8`.
- Fill width is **inline, written by script** (`width: 44.208%` on load). In React it is
  `style={{ width: pct + '%' }}` — never a CSS class per percentage.
- Podcast fill is a **90° gradient** `#ffb27a → #ff5f8f`; album fill is flat `#0f766e`.
- Times: **12.5 / 400**, `tabular-nums`, `justify-content: space-between`, `margin-top: 6`. Left is
  `m:ss`; right is `-` + remaining, also `m:ss`, **minutes unpadded** (`-23:36`, `-3:34`).
- `role="progressbar"` with `aria-valuemin / max / now` (rounded seconds) and a human
  `aria-valuetext` (`"18:42 of 42:18"`). It is **not** seekable — no handler, `cursor: auto`, not
  focusable. Keep it that way (defect 3).

### 3.5 The transport

Five controls, `space-between`, `gap: 8`:

| control | size | notes |
| ------- | ---: | ----- |
| speed `1×` | **46** | text label, `font-size: 14 / 600`; cycles 1 → 1.5 → 2 |
| back 15 | **46** | `stroke-width: 1.8` arrow with a **9 / 700** `15` absolutely centred |
| play/pause | **68** | `bg-white`, icon `#17151f`, `shadow 0 10px 24px -8px rgba(255,138,61,.6)`, hover 1.05, active .95 |
| forward 30 | **46** | mirror of back, glyph `30` |
| queue | **46** | **22 px** icon; the only control with no handler in the reference |

Icons are **26 × 26** (`fill: none; stroke: currentColor; stroke-linecap/linejoin: round`), the disc's
icons **28**. The play/pause swap is pure CSS: `[aria-pressed="true"] .i-play { display: none }` and
`.i-pause { display: none }` by default.

Sizing is fragile below a 340 px card: the row is a plain flex with `flex-shrink: 1`, so the reference
**compresses** the buttons (46 → 42.4 at 340, 38.7 at 320, 35 at 300, 27.8 at 260) and the disc (68 →
62.6 → 57.2 → 51.8 → 41). That compression is what keeps the page from overflowing; reproduce it and fix
only the 2 px that appear at 240.

### 3.6 The album head

`flex`, `gap: 18`, `align-items: center`, `margin-bottom: 16` → **133.14** tall.

- cover **120 × 120**, `flex: none`, radius **16**, `linear-gradient(180deg, #14b8a6, #5eead4 55%,
  #fde68a)`, authored SVG (`#fef3c7` sun at `cx 100 cy 92 r 46`, hills `#0f766e` / `#134e4a`).
- text column 200 wide: eyebrow **13 / 600 / .04em** `#0f766e` → title **24 / 700** → byline **14 / 400**
  `#56625e` → **44 × 44** teal play disc at `margin-top: 12`.
- The byline (`"Juniper Coast · 5 songs, 19 min"`) is the widest string in the card: it wraps at **412**
  and takes the album from **448.02** to **468.31**. Height changes are content, not breakpoints.

### 3.7 The track list

`<ol>` → 5 × `<li>` → `<button>`, **354 × 41.75** each, radius **12**, `padding: 10px 12px`,
`grid-template-columns: 22px 1fr auto`, `gap: 12`.

- number **22** wide, **13 / 600** muted tabular; name `15 / 400` with ellipsis
  (`min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap`); length **27**,
  **13 / 400** muted tabular.
- States: hover `#f1f5f3`; `aria-current="true"` → `#e6f4f1`, text `#0b5a54`, `font-weight: 600`.
  The current row does **not** change on hover — its rule wins.
- **The equaliser shares the number's grid cell** (`grid-column: 1; grid-row: 1`). While playing, the
  number's `visibility` goes hidden and the three **3 × 14** accent bars (`gap: 2`, `origin-bottom`)
  fade in with staggered delays. Porting it as a fourth column shifts every name.

### 3.8 The clock (the only non-CSS behaviour)

`setInterval(tick, 250)`; each tick `elapsed += 0.25 × rate`. So 1× is real time, 1.5× is 1.5×, 2× is
twice. At `elapsed >= duration`: advance to the next `aria-current` row if any, else clamp and pause.
State is `{ playing, elapsed, duration, rate }`; outward signals are **`aria-pressed`** and one
**`.is-playing`** class on the card. Everything animated keys off that class.

Verified live: load → `pressed=false`, `44.208 %`, `1122`, `"18:42 of 42:18"`; play +1.1 s → `pressed=true`,
`1123`, `"18:43 of 42:18"`, pause icon `display:block`; three speed clicks → back to `1×`; `+30` → `1154`,
`"19:14 of 42:18"`; album row 3 → `max 198`, `"0:01 of 3:18"`, `-3:18`, equaliser `display:flex`, row 3's
number `visibility:hidden`.

## 4 — Copy inventory (what the tests pin)

| where | string |
| ----- | ------ |
| cover | `The Long` ⏎ `Commute` |
| podcast eyebrow | `Episode 84 · 42 min` |
| podcast title | `Why cities are planting forests on rooftops` |
| podcast byline | `The Long Commute · with Priya Nair` |
| album eyebrow | `Album · 2026` |
| album title | `Night Swim` |
| album byline | `Juniper Coast · 5 songs, 19 min` |
| tracks | `Low Tide Lights 3:34` · `Salt in the Radio 4:11` · `Harbour Cats 3:18` · `Swimming After Midnight 4:36` · `Postcards (Reprise) 3:23` |
| labels | `Playback speed 1×` · `Back 15 seconds` · `Play` / `Pause` · `Forward 30 seconds` · `Add to queue` |
| ARIA | `Episode progress` / `Song progress`, `18:42 of 42:18`, `0:00 of 3:34` |

Durations in seconds: **214 / 251 / 198 / 276 / 203** = **1,142 s = 19:02** ✓ the byline's "19 min";
podcast **2,538 s = 42:18** ✓ its "42 min". Middle dots are **U+00B7**, the speed glyph is **U+00D7**.

## 5 — Where the sheet and the render disagree

1. **Bold is synthetic.** All eight `woff2` files in the archive are **two files repeated** across
   400/500/600/700 (latin sha256 `99ec7ccb…` ×4, latin-ext `b11446f4…` ×4), and the 500 pair is never
   referenced. Declaring 600/700 over 400 outlines makes Chromium embolden: the same string measures
   **379 px at 400/500, 398 px at 600/700**. The port loads real Rubik weights and is therefore ~5 %
   narrower in bold — an intentional, documented delta.
2. **`.cl-card16__progress` has no rule.** It is a bare wrapper; only its children (bar, times) are
   styled.
3. **`--cl-card16-accent: #ff8a3d` never paints on the podcast.** Eyebrow → `#ffb27a`, fill → gradient,
   equaliser → album-only, focus ring → hard-coded `#ffb27a`. A live token with a dead value.
4. **`.cl-icon` is dead** (declared, 0 markup hits) — the 8th consecutive card with this leftover.
5. **`data-cl-card16-list`** on the album section is never read by the script.
6. **`aria-label="Play"` never becomes `"Pause"`** while `aria-pressed="true"`.
7. **The queue button has no handler.**
8. **The bar looks seekable and is not** (no handler, `cursor: auto`, not focusable).
9. **The page has 0 `h1`**; both cards label themselves with `h2` via `aria-labelledby`.
10. **2 px of horizontal scroll at 240** (`scrollWidth 242`); nothing above 260 overflows.
11. **No-JS degradation is inconsistent**: the podcast's times are hard-coded `18:42` / `-23:36` in the
    HTML, but the fill starts at `width: 0` and is only set by script — so with JS off the bar shows 0 %
    next to an 18:42 label. React renders both from state, which removes the class of bug.

## 6 — Screenshot

`card-16.jpg` is **1200 × 972** and is really an **AVIF** file behind a `.jpg` name (`file` → `ISO
Media, AVIF Image`, 21,816 B) — convert it before viewing. It is ColorLib's **marketing frame**: browser
chrome, rounded canvas and padding around the same two cards. Nothing in the frame is design; the cards
inside it match the live render pixel for pixel at the same width, including the amber fill at ~44 % and
the teal highlight on row 1.

## 7 — What a reviewer should check first

1. **820**, not 1,140 — and `items-start`, so the album stops early.
2. Cover is **square and full content width** (354 at 398), with the title pinned **top-left** at 44 px.
3. **Two columns at 736** with tracks of exactly 340.00, one at 735.
4. Transport **46 / 46 / 68 / 46 / 46**, `gap: 8`, disc white and glowing amber.
5. Podcast fill **44.208 %** on load in the amber→rose gradient; album fill **0** and teal.
6. Row 1 current, teal-tinted, and the equaliser **replaces** its number when playing.
7. Play → pause icon + `aria-pressed="true"` + **"Pause"** label; speed cycles through three states.
8. Auto-advance at the end of a track; the last one clamps and stops.

## 8 — Shipped deltas (implementer, 2026-10-26)

Three readings changed between prep and the build. Each is arithmetic or an accessible-name fix, not a
visual change.

1. **`+30` lands on `1152`, not `1154`.** The prep's live measurement (`aria-valuenow=1154`,
   `19:14 of 42:18`) was taken *after* ~2 s of simulated playback, so it folded clock drift into a skip
   that the scenario states as `1122 → +30`. `1122 + 30 = 1152` → `19:12 of 42:18`; the spec's normative
   scenario and verification checklist now carry that number, and the measured line stays as the record
   of what the live page read at the moment of the probe.
2. **Track rows carry an explicit accessible name.** The reference concatenates its four spans with no
   separators, so row 3 announces *"3Harbour Cats3:18"*. The port sets
   `aria-label="3. Harbour Cats, 3:18"` on the row button — same visible text, a name a screen reader can
   read. Class-for-class the markup is unchanged.
3. **The speed control is labelled, not concatenated.** `"Playback speed "` + `"1×"` in two spans loses
   its word gap in the accessible-name computation (`"Playback speed1×"`), so the button carries
   `aria-label="Playback speed 1×"` while the visible glyph stays the bare rate.

Also shipped as designed: a visually hidden `h1` (the reference has none), the queue button as a real
`aria-pressed` toggle, the read-only `progressbar` kept out of the tab order, and both covers re-authored
as inline SVG with no `<img>` anywhere on the page.
