# Prorata — design notes (ColorLib Pricing Table V05, `pricing-table-05`)

Research record for `apps/prorata`. Everything here was measured 2026-11-11 against the **live** preview
(`https://preview.colorlib.com/theme/bootstrap/pricing-table-05/`, HTTP 200, 3,631 B) with node Playwright Chromium
(1440 × 900, `document.fonts.ready` awaited) and cross-checked against the **archive twin**
(`downloads/free/pricing-table-05.zip`, 208,620 B), which was served from `python3 -m http.server` next to a
Google-font copy of the same markup. The archive copy reproduces the live page **on every rect at all 12 checked
widths**, so reference numbers below are also port numbers.

---

## 1. Source facts

| Field                | Value                                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ColorLib design name | **Pricing Table V05** (`h1` on the listing page)                                                                                                                                 |
| Slug                 | `pricing-table-05`                                                                                                                                                               |
| Listing page         | https://colorlib.com/wp/template/pricing-table-05/ — 200, 114,119 B, `datePublished` 2026-09-25T15:12:47                                                                         |
| Listing description  | _"A minimal one-plan pricing section with a calculator card. Free download, no jQuery or plugins."_ (accurate — unlike V04's copy-paste)                                         |
| Real preview         | `theme/bootstrap/pricing-table-05/` — **200, 3,631 B**; `theme/pricing-table-05/` and `theme/bb/…` are **404 (9 B)**                                                             |
| Stylesheet           | `css/style.css?v=5ae95599`, 13,491 B, sha256 `3e8ea9944fd12afdde5ee7ec002c042a22657e2a9afcee06b1f728c6a8fed9d1` → identical live ↔ archive                                       |
| Script               | `js/snippet.js?v=87d4f924`, 2,890 B, sha256 `a5be0cb3c96c1ed67ab11d54671bcb0493585ed4174b6995015a9dcdb06cf6a0` → identical live ↔ archive                                        |
| Archive              | 208,620 B; `index.html` **3,428 B** vs the live DOM's **3,631 B** — a **203 B head-only** diff (two `noindex` metas, a `cdnjs` dns-prefetch, `fetchpriority`, two `?v=` queries) |
| Fonts                | 10 woff2 = **2 binaries** (latin 24,576 B / latin-ext 15,240 B), repeated across weights 400 / 500 / 600 / 700 / 800 → variable cut                                              |
| Screenshot           | `…/pricing-table-05.jpg` — 200, 50,378 B, 1200 × 972, **real progressive JPEG** (the previous four variants were AVIF behind `.jpg`)                                             |
| Invented name        | **prorata** — 0 repo hits, no `apps/`, no spec, and `…/template/prorata/` + both preview paths **404**                                                                           |

---

## 2. DOM skeleton (the whole 63-line document, one script tag)

```
main.cl-pricing05-demo                     ← padding clamp(40px, 8vw, 110px) 16px
└ section.cl-pricing05[aria-labelledby=title]     ← grid 1.05fr / 1fr, gap clamp(32,6vw,88), align-items:center
  ├ div.cl-pricing05__info
  │ ├ p.__eyebrow        "One plan. Every feature."
  │ ├ h1.__title#title   "Pay per seat, nothing else"
  │ ├ p.__lede           "Inkpost gives your whole team contracts, … as your team grows."
  │ └ ul.__list          6 × li  (dash marker via ::before)
  └ form.__calc[aria-labelledby=calc-title]
    ├ h2.__calc-title#calc-title   "Estimate your price"
    ├ div.__seats
    │ ├ label.__label[for=range]   "Team seats"
    │ └ div.__number
    │   ├ label.__vh[for=input]    "Number of seats"      ← sr-only, 1px + clip-path
    │   └ input.__input#input[type=number min=1 max=200 step=1 value=12 inputmode=numeric]
    ├ input.__range#range[type=range min=1 max=200 step=1 value=12 aria-valuetext="12 seats, $140 per month"]
    ├ div.__scale[aria-hidden=true]   5 × span  1 50 100 150 200
    ├ ol.__tiers[aria-label="Graduated price per seat"]
    │ └ 3 × li.__tier[data-min data-max data-rate]
    │   ├ span.__tier-range   "Seats 1–10"
    │   └ span.__tier-rate    "$12"  + ::after " / seat"
    ├ div.__total
    │ ├ p.__total-label  "Your price"
    │ ├ p.__sum  → output.__out[for="range input" aria-live=polite] "$140"  +  span.__per "/ month"
    │ └ p.__detail       "10 × $12 + 2 × $10. Average $11.67 per seat, billed monthly."
    ├ a.__cta[href=#]    "Start a 14-day trial"
    └ p.__fine           "Over 200 seats? <a href=#>Talk to us about volume pricing</a>"
```

Counts that matter: **1** `h1`, **1** `h2`, **1** form, **1** `ul` (6), **1** `ol` (3), **2** inputs, **1** output,
**2** anchors, **0** img / svg / button. The whole design is type, two rules and one radius.

---

## 3. CSS token reference (verbatim values)

```css
body {
  background: #fafaf9;
  font-family:
    'Manrope',
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.cl-pricing05 {
  --cl-pricing05-accent: #c2410c; /* orange-700 */
  --cl-pricing05-ink: #0c0a09; /* stone-950  */
  --cl-pricing05-muted: #57534e; /* stone-600  */
  --cl-pricing05-line: #e7e5e4; /* stone-200  */
  --cl-pricing05-fill: 5.5%; /* overwritten inline by the script */
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: clamp(32px, 6vw, 88px);
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 15.5px;
  line-height: 1.6;
}

.cl-pricing05__title {
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.02;
  margin: 10px 0 16px;
}
.cl-pricing05__lede {
  max-width: 470px;
  font-size: 17px;
  color: var(--muted);
}
.cl-pricing05__list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px 24px;
  margin: 32px 0 0;
  padding: 28px 0 0;
  border-top: 1px solid var(--line);
}
.cl-pricing05__list li {
  padding: 5px 0 5px 22px;
  font-size: 14.5px;
  font-weight: 500;
}
.cl-pricing05__list li::before {
  content: '';
  position: absolute;
  top: 14px;
  left: 0;
  width: 10px;
  height: 2px;
  background: var(--accent);
}

.cl-pricing05__calc {
  padding: clamp(24px, 4vw, 40px);
  border: 1px solid var(--line);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 30px 60px -40px rgba(12, 10, 9, 0.35);
}
.cl-pricing05__calc-title {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 24px;
}

.cl-pricing05__input {
  width: 92px;
  padding: 8px 10px;
  border: 1px solid #d6d3d1;
  border-radius: 10px;
  background: #fafaf9;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  font-variant-numeric: tabular-nums;
}
.cl-pricing05__input:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 1px;
  border-color: transparent;
}

.cl-pricing05__range::-webkit-slider-runnable-track {
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--ink) var(--fill), #e7e5e4 var(--fill));
}
.cl-pricing05__range::-webkit-slider-thumb {
  width: 26px;
  height: 26px;
  margin-top: -9px;
  border: 3px solid var(--ink);
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.15s ease;
}
.cl-pricing05__range:active::-webkit-slider-thumb {
  transform: scale(1.12);
}
.cl-pricing05__range:focus-visible::-webkit-slider-thumb {
  box-shadow:
    0 0 0 4px #fff,
    0 0 0 7px var(--accent);
}
/* Firefox: -moz-range-thumb is 20 × 20 and there is a separate ::-moz-range-progress */

.cl-pricing05__scale {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  color: #78716c;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}
.cl-pricing05__scale span {
  color: #6b6560;
} /* overrides the parent — a genuinely odd double rule */

.cl-pricing05__tier {
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 12px;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}
.cl-pricing05__tier-range {
  font-size: 12.5px;
  color: var(--muted);
}
.cl-pricing05__tier-rate {
  font-size: 17px;
  font-weight: 800;
}
.cl-pricing05__tier-rate::after {
  content: ' / seat';
  font-size: 12.5px;
  font-weight: 500;
  color: var(--muted);
}
.cl-pricing05__tier.is-used {
  border-color: #d6d3d1;
  background: #f5f5f4;
}
.cl-pricing05__tier.is-current {
  border-color: var(--ink);
  background: var(--ink);
  color: #fff;
}
.cl-pricing05__tier.is-current .__tier-range,
.cl-pricing05__tier.is-current .__tier-rate::after {
  color: #d6d3d1;
}

.cl-pricing05__out {
  font-size: clamp(44px, 6vw, 60px);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.05;
  font-variant-numeric: tabular-nums;
}
.cl-pricing05__cta {
  display: block;
  padding: 15px 20px;
  border-radius: 14px;
  background: var(--accent);
  color: #fff;
  font-weight: 700;
  text-align: center;
  transition: background-color 0.2s ease;
}
.cl-pricing05__cta:hover {
  background: #9a3412;
}
.cl-pricing05__cta:focus-visible {
  outline: 3px solid var(--ink);
  outline-offset: 3px;
}
.cl-pricing05__fine {
  font-size: 13.5px;
  color: var(--muted);
  text-align: center;
  margin: 14px 0 0;
}

@media (max-width: 860px) {
  .cl-pricing05 {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 480px) {
  .__list {
    grid-template-columns: minmax(0, 1fr);
  }
  .__tiers {
    gap: 6px;
  }
  .__tier {
    padding: 8px;
  }
  .__tier-rate::after {
    display: block;
    content: 'per seat';
  }
}
@media (prefers-reduced-motion: reduce) {
  .__tier,
  .__cta,
  .__range::-webkit-slider-thumb {
    transition: none;
  }
}
```

**Do not port** the sheet's opening `:where(html) … { all: revert }` firewall block (35 lines of framework insulation
plus the `[hidden]` restore) — it exists so the snippet can be dropped into a Bootstrap page, and it is the same
do-not-port item `ratecard` recorded. Tailwind's base layer already does the job in the port.

---

## 4. Screenshot analysis (1200 × 972, real JPEG, ≈ 0.79 scale of 1440)

The shot is a **macOS browser mock-up**: three traffic lights, a URL pill reading `preview.colorlib.com`, a rounded
white window with a drop shadow on a warm grey surround. Inside it, the page is complete from eyebrow to footnote
because it is only **836 px** tall at 1440.

- **Composition**: a wide empty left margin, then a 2-column band — copy on the left (eyebrow, a two-line headline
  broken after the comma, a three-line lede, a hairline rule, then six bullets in two columns of three), and the white
  calculator card on the right, floating 24-radius with a very soft shadow.
- **Colour**: sand-white ground (`#fafaf9`), one saturated orange (`#c2410c`) used **only** for the eyebrow, the six
  dashes and the CTA; everything else is a stone ramp — near-black ink for the type, mid-grey for secondary copy.
  It reads as a printed rate card, not as a SaaS gradient page.
- **The card's own hierarchy**: uppercase micro-heading → `Team seats` + boxed number → slider with the handle at
  ~5 % of the track → five evenly spaced scale ticks → three chips where the **middle one is filled solid black** →
  a rule → "Your price" → a 60 px `$140` with a small `/ month` beside it → an itemised arithmetic line where the
  average is bolded → a full-width orange CTA → a centred one-line footnote with an underlined link.
- **What the eye does not see in the screenshot**: the third chip ("Seats 51+") is _not_ black at 12 seats — only the
  middle one is; and the card is **616.34** px tall at 1440 but grows **22.39** px once the seats pass 50. Both are
  visible only by interaction.

---

## 5. Section-by-section fidelity notes

### 5.1 The ground and the wrapper

One flat `#fafaf9` — **no** gradient, no grid, no noise, no radial wash (contrast with `limelight`, whose whole read is
five background layers). The wrapper's block padding is `clamp(40px, 8vw, 110px)`; at 1440 that is **110**, which is why
the section starts at y 110. At 900 × 900 the padding is 72.

### 5.2 The two columns

`1.05fr / 1fr` with a `clamp(32px, 6vw, 88px)` gap: at 1440 that gives **519.16 / 494.45** with an **86.4** gutter. The
left column is **not** top-aligned — `align-items: center` puts it at y **200.2** (the card is 616.34 tall, the copy
435.92, so it starts 90.2 px down). This is the first thing a port gets wrong, and it is also why the copy column
**moves** when the card grows at 51 seats (+11.21).

### 5.3 The copy column

- Eyebrow is a bare `<p>` in accent, **not** a pill, **not** uppercase, and it is a full sentence ("One plan. Every
  feature.") — the family's other variants use pills and tracked caps.
- The `h1` is `clamp(34px, 5vw, 56px)` with tight `-.045em` tracking and `1.02` leading: at 56 px the two lines are
  **57.12** each — tighter than a normal body line. `Pay per seat,` (317.25) and `nothing else` (311.77) both fit the
  519.16 column, so the break is _copy-driven_: change the words and you change the line count.
- The lede is capped at **470** (not at the column width), so it wraps at 470 and leaves 49 px of air on the right —
  visible in the screenshot as a slightly ragged block.
- The bullets use a **10 × 2 dash**, an unusual marker: not a tick, not a bullet, not an icon. It is a `::before`
  painted in accent at `top: 14px` from the item's top, so a two-line item's dash aligns with the **first** line.
  Item 1 ("Unlimited documents and templates") wraps at 1440 and is 56.38 tall; its neighbours are 33.19.

### 5.4 The card shell

`padding: clamp(24px, 4vw, 40px)`, radius **24**, `1px solid #e7e5e4`, and one very soft shadow
`0 30px 60px -40px rgba(12,10,9,.35)` — a 40 px negative spread keeps it from reading as a drop shadow at all. The
content width is 412.45 at 1440; everything inside is measured against that number.

### 5.5 The seat controls — three quirks

1. **The visible label belongs to the slider.** `<label for="…-range">Team seats</label>` sits next to the number field
   but targets the range; the field is labelled by a visually-hidden second label. Click "Team seats" and the _slider_
   takes focus. That is defensible (the slider is the primary control) but the port must keep a hidden label on the
   field, not delete it as redundant.
2. **The field is 92 px wide and 46.8 tall** — `8px 10px` padding + 18 px text (`28.8` line) + the 1 px border. It is
   the tallest control in the row, which vertically centres the 27.19-tall label.
3. **`tabular-nums`.** Every number on the page is tabular: the field, the scale, the amount. Without it the total's
   width jumps as digits change, and the `/ month` suffix slides — at 1 seat `$12` is 103.91 wide, at `$1,720` it is
   189.81.

### 5.6 The slider

The track is a **hard-stop gradient** on the runnable pseudo-element, driven by `--fill`, which the script writes as an
**inline custom property on the section**. Two consequences:

- Tailwind cannot express it as a utility, and React cannot pass it as a prop to a pseudo-element → set it with
  `style={{ ['--fill' as string]: pct }}` on the wrapper and put the gradient in the component's CSS (or an
  `[&::-webkit-slider-runnable-track]:bg-[…]` arbitrary variant, which does work but is unreadable).
- The gradient's stop (**22.8 px** at 12 seats) and the thumb's centre (**34.36 px**) are **11.4 px apart**. The fill
  edge is _under_ the thumb, which is exactly what the screenshot shows; a port that "fixes" the mismatch by centring
  the stop on the thumb will look different.

Pixel measurements (screenshot scan of the slider crop, since `getComputedStyle(el, '::-webkit-slider-thumb')` returns
the **host** box in this Chromium): track occupies rows 10–17 of the 28 px element (8 rows), the thumb rows 1–26 with a
3 px ink ring and a white interior — 26 px total, `margin-top: -9px` relative to an 8 px track.

### 5.7 The chips

Three equal tracks (132.15) with `gap: 8`. The state machine is two classes, and the visual grammar is subtle:

- `is-used` = stone-100 fill + stone-300 border (light),
- `is-current` = **ink fill** + ink border + white rate + `#d6d3d1` range/suffix,
- neither = transparent + stone-200 border.

Both transitions are **.2 s**, so a test that reads colours immediately after changing seats sees the previous state —
this cost a full probe cycle here: at 1 seat the first chip measured `#f5f5f4` background with **white** text, which is
a state that cannot exist. Waiting 350 ms gave the correct ink fill. **Always settle before asserting a chip colour.**

Also note the suffix rule: at `≤ 480` the `::after` flips from `" / seat"` inline to `"per seat"` on its own line,
growing the rate line from 27.19 to 47.19 and the chip from 69.19 to 85.19. The chip's _outer_ height at that width is
105.19, set by the stretch of the tallest sibling, and the extra space shows up as 20 px of empty padding at the bottom
of chips whose text did not wrap.

### 5.8 The price block

- The `<output>` is a real `<output for="range input" aria-live="polite">` — the only live region on the page.
- `align-items: baseline` on the sum row: the 60 px amount and the 15.5 px suffix share a baseline, so `/ month` sits
  at y 515.56 inside a row that starts at 479.56 — 36 px down, not at the top and not centred.
- The detail line is a **sentence built from the tier arithmetic**, and its bold span is only the average. It is the
  page's only explanation of the pricing model, which is why the 51-seat wrap (below) is a feature of the design's
  honesty rather than a layout accident.
- At **200** seats the detail is **449** px of text in a 412.45 box → it wraps at every width below 1035.

### 5.9 The reflow at 51 seats (the family's first live layout change)

|               | 12 seats | 51 seats |          Δ |
| ------------- | -------: | -------: | ---------: |
| detail height |    22.39 |    44.78 | **+22.39** |
| card height   |   616.34 |   638.73 |     +22.39 |
| CTA y         |   594.95 |   617.34 |     +22.39 |
| copy column y |    200.2 |   211.41 | **+11.21** |
| document      |      900 |      900 |          0 |

The document does not move because the page is 836 tall inside a 900 viewport; the copy column moves because the grid
re-centres it. Any test that only asserts `scrollHeight` will see **nothing**. Assert element rects.

### 5.10 The CTA and the footnote

The CTA is a **block anchor**, `padding: 15px 20px`, radius **14** (not the card's 24, not a pill), and the only hover
on the page is its fill going `#c2410c → #9a3412`. The footnote is 13.5 px and its link is the page's second anchor;
both hrefs are `#` in the source — the port must give them real destinations.

---

## 6. Contrast ledger

| Pair                                                    |                   Ratio | Verdict                                                          |
| ------------------------------------------------------- | ----------------------: | ---------------------------------------------------------------- |
| eyebrow `#c2410c` on `#fafaf9` (14 / 700)               |                **4.96** | pass                                                             |
| lede / detail / footnote `#57534e` on `#fff`            |                **7.63** | pass                                                             |
| same on the page ground `#fafaf9`                       |                **7.30** | pass                                                             |
| ink `#0c0a09` on `#fafaf9` / on `#fff`                  |       **18.92 / 19.76** | pass                                                             |
| CTA white on `#c2410c` / on hover `#9a3412`             |         **5.18 / 7.31** | pass                                                             |
| current chip's range + suffix `#d6d3d1` on ink          |               **13.26** | pass                                                             |
| current chip's rate white on ink                        |               **19.76** | pass                                                             |
| scale `#78716c` / spans `#6b6560` on white              |         **4.80 / 5.74** | pass                                                             |
| focus rings: accent on white / page, ink on white       | **5.18 / 4.96 / 19.76** | pass (≥ 3)                                                       |
| **field border `#d6d3d1` on white**                     |                **1.49** | **FAIL** → `#8f877f` = **3.54** (3.39 on its own `#fafaf9` fill) |
| **resting track `#e7e5e4` on white**                    |                **1.26** | **FAIL** → `#8f877f` = **3.54**                                  |
| idle chip border `#e7e5e4` / used-chip border `#d6d3d1` |             1.26 / 1.37 | decorative — fill + text also carry the state, may stay          |

The palette is Tailwind `orange-700/800` plus a `stone` ramp, so the fixes should be read as "one ramp step darker than
the shipped `stone-300`": `#8f877f` is not a Tailwind stone, but it is the smallest step that clears 3 : 1 on both
grounds.

---

## 7. Google-vs-archive font drift (measured in-context, not from the sheet)

| String                                                         | size / weight       |    archive |    Google |           Δ |
| -------------------------------------------------------------- | ------------------- | ---------: | --------: | ----------: |
| `10 × $12 + 2 × $10. Average $11.67 per seat, billed monthly.` | 14 / 400            | **375.00** |    358.00 | **−4.53 %** |
| `Over 200 seats? ` (plain)                                     | 13.5 / 400          |     106.00 |    105.00 |     −0.94 % |
| `Talk to us about volume pricing`                              | 13.5 / 600          |     209.00 |    200.00 | **−4.31 %** |
| `One plan. Every feature.`                                     | 14 / 700            |     171.00 |    163.00 |     −4.68 % |
| `ESTIMATE YOUR PRICE`                                          | 15 / 700, `.04em`   |     180.41 |    173.41 |     −3.88 % |
| `Team seats`                                                   | 17 / 700            |      96.00 |     92.00 |     −4.17 % |
| `Start a 14-day trial`                                         | 15.5 / 700          |     144.00 |    138.00 |     −4.17 % |
| `Seats 1–10`                                                   | 12.5 / 400          |      59.00 | **62.00** | **+5.08 %** |
| `$12`                                                          | 17 / 800            |      30.00 |     29.00 |     −3.33 % |
| `Pay per seat,`                                                | 56 / 800, `-.045em` |     317.25 |    319.25 |     +0.63 % |
| `Pay per seat, nothing else`                                   | 56 / 800, `-.045em` |     637.48 |    643.48 |     +0.94 % |
| `$140`                                                         | 60 / 800, `-.045em` |     138.20 |    138.20 |      0.00 % |
| `/ month`                                                      | 15.5 / 600          |      60.00 |     59.00 |     −1.67 % |

Both directions on one page, and **not** monotonic in size: 13.5–17 px is 3–5 % narrower in Google's cut while 56–60 px
is up to 0.9 % **wider**, and 12.5 px is **wider** by 5 %. Per-glyph advances are identical (`canvas.measureText` on
every character of the detail string returns the same value in both faces), so the difference is in the shaping of
longer runs — which is why the honest test is a cloned-span `getBoundingClientRect`, not `measureText`.

**Consequences, all measured on a Google-font copy of the page:**

| Where               | Reference                   | Port (Google)                                | Effect                                                               |
| ------------------- | --------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| footnote at 861–878 | 2 lines (card **640.44**)   | **1 line** (card **618.84**)                 | card 21.59 shorter, copy column re-centres −10.8, document stays 900 |
| footnote at 390     | 2 lines (document **1247**) | 1 line (document **1225**)                   | 22 px shorter page                                                   |
| chip range label    | 1 line at 349               | 1 line at 349 (2 at ≤ 340 → shifts one step) | chip internals only; outer box unchanged (stretch)                   |
| everything at 1440  | —                           | identical                                    | the 1440 table is safe                                               |

---

## 8. Traps this run produced (carry to the next variant)

1. **A 22.39 px layout change hides inside a page shorter than the viewport.** The 51-seat detail wrap moves the card,
   the CTA **and** the copy column, yet `documentElement.scrollHeight` stays exactly 900. Assert rects.
2. **`setViewportSize` + 120 ms is not enough for this card.** Two ladder passes disagreed by exactly one detail line
   at eight widths (1024, 1000, 960, 920, 901, 900, 899, 880, 414) because the card's width changes a beat after the
   viewport does. With a **300 ms** settle every width agreed with the archive twin. If a ladder number looks like a
   sibling width ± 22.39, it is a stale read.
3. **`getComputedStyle(el, '::-webkit-slider-thumb')` returns the host box.** It reported `412.453 × 28` for a 26 × 26
   thumb. Measure the slider from **pixels** (a clipped screenshot + a row scan), or trust the sheet.
4. **Transitions lie about state.** The chips transition fill and border in .2 s; an immediate read gives the previous
   colour and can invent a state that never renders (`#f5f5f4` background with white text).
5. **`getClientRects()` counts inline splits, not lines.** The footnote returns **3** rects on one line (plain text +
   `<a>` + trailing text) and **5** on two. Divide the element's height by its computed `line-height` instead.
6. **The tightest fit is 0.52 px** (`315.00` text in a `315.60` box at vw 880) and it is a _mixed-weight_ line — the
   `<a>` is 600. Measuring the paragraph's `textContent` in one weight gives 303 and hides the whole problem. Split
   the runs.
7. **The archive README advertises `images/`** — there is no `images/` in the zip, and no images on the page. Sixth
   variant in a row with a phantom file line.
8. **The live `<head>` differs from the archive's by 203 B** (two `noindex` metas, a `cdnjs` preconnect, `fetchpriority`
   and two `?v=` queries). Hash the **CSS + JS**, not the HTML, when you want to prove the twin claim.

---

## 9. Source → React adaptation

| Reference                    | Port (`apps/prorata`)                                                                                                                     | Notes                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `.cl-pricing05-demo` wrapper | `<main className="bg-ground px-4 py-[clamp(40px,8vw,110px)]">`                                                                            | one ground, no layers                     |
| `.cl-pricing05` grid         | `<section className="mx-auto grid max-w-[1100px] items-center gap-[clamp(32px,6vw,88px)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">` | `items-center` is load-bearing            |
| `.__info` + 4 children       | `<PlanSummary/>`                                                                                                                          | props: eyebrow, title, lede, `features[]` |
| `form.__calc`                | `<SeatCalculator/>` → `<fieldset role="group">` or `<form>` (see spec delta 6)                                                            | `aria-labelledby` the `h2`                |
| `.__seats` + `.__range`      | `<SeatControls seats onChange/>`                                                                                                          | native range + number, one `clampSeats`   |
| `ol.__tiers`                 | `<TierChips seats tiers/>`                                                                                                                | derived classes, `aria-current` added     |
| `.__total` + `output`        | `<PriceTotal seats total avg parts/>`                                                                                                     | all derived in the parent's render        |
| `a.__cta`, `p.__fine`        | `<CallToAction/>`, `<FootNote/>`                                                                                                          | real hrefs                                |
| `js/snippet.js` IIFE         | pure module `src/lib/pricing.ts` + one `useState`                                                                                         | no effects, no observers                  |
| class names `cl-pricing05*`  | **none** — Tailwind utilities + `cn()`                                                                                                    | provenance lives only in the spec         |

---

## 10. Sibling comparison (same family)

| Variant                | Name           | Shape                   | Device                            | JS                   |
| ---------------------- | -------------- | ----------------------- | --------------------------------- | -------------------- |
| `pricing-table-01`     | **ratecard**   | 3 plan cards, light     | plan grid + billing switch        | none                 |
| `pricing-table-02`     | **tallyboard** | 3 cards + annual switch | switch + count-up                 | yes                  |
| `pricing-table-03`     | **parity**     | a real `<table>`        | comparison rows, sticky `th`      | none                 |
| `pricing-table-04`     | **limelight**  | 3 glass cards on black  | gradient border + flag            | none                 |
| **`pricing-table-05`** | **prorata**    | **1 card, 2 columns**   | **seat slider + graduated total** | **yes (calculator)** |
| variant 06 (4,550 B)   | —              | small                   | not yet read                      | —                    |
| variant 08 (19,821 B)  | —              | table branch            | not yet read                      | —                    |
| variant 12 (6,683 B)   | —              | small                   | not yet read                      | —                    |

(Un-prepped variants are named by size here on purpose: writing another variant's **slug** into a spec or note file
makes the prep queue's slug-coverage scan report it as already prepped and silently skips it.)

What is **not** shared with the siblings, and must not be carried over: no plan cards, no featured column, no
monthly/annual toggle, no `<table>`, no imagery, no dark ground, no gradient, no `@keyframes`. What _is_ shared is the
family's shape discipline — one ground, one accent, one radius family, one soft shadow, and a single 15.5 px base size
with a `clamp()` display size.

What a later calculator variant should reuse from this record: the **pure-function-first** build order
(`clampSeats` / `tierCounts` / `total` / `fill` as tested functions, then markup), the **hidden-label + visible-slider**
labelling pattern, the **inline `--fill` custom property** for a pseudo-element gradient, and the whole §8 trap list.
