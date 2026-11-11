# Runrate — implementation tasks (ColorLib Pricing Table V06, `pricing-table-06`)

Spec: `openspec/specs/template-runrate/spec.md` (62 KB, valid: `openspec validate template-runrate --type spec`).
Read it first; this file is the build order, not a second spec. Every number below is a **reference** number, measured
2026-11-11 at 1440 × 900 on the live preview (`theme/bootstrap/pricing-table-06/`, 4,550 B) and reproduced to the
hundredth by the archive twin, then re-measured on a **replica** built from the archive's own stylesheet with the
prescribed copy and the served Google face — that replica is what the port must match, and it matches the reference at
23 of 25 widths (the two deltas are in §10).

This template **has state** — three inputs, two ladders and one boolean — but the arithmetic is one multiplication and
two `Math.max`, with no tiers, no clamping and no formatting tricks. The risk is **spatial** (a two-column page whose
left panel is 42 px shorter than its right card, a 3.13 px fit in the support row, a bar whose widths are raw dollars)
and **copy-length** (five strings are length-tuned against the served face).

## 0. Scaffold

- [ ] `apps/runrate` from the simplest existing app; rename the package to `@free-react-templates/runrate`;
      `public/CNAME` = `runrate.free.componentdock.com`; `"homepage"` = `https://runrate.free.componentdock.com`
- [ ] `<title>Runrate — usage-based pricing</title>`, `theme-color: #0b1120`, description without the source name
- [ ] DM Sans **400 / 600 / 700** via `css2?family=DM+Sans:wght@400;600;700&display=swap` — **no 500** (the archive ships
      a 500 binary pair its own sheet never declares); confirm the `h1` reports `DM Sans` / `custom=true` and no DejaVu
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `npm run verify:app runrate` green on the empty shell before any component work

## 1. Tokens (`@theme`)

- [ ] `--color-ground: #0b1120`, `--color-panel: #111a2e`, `--color-panel-line: #22304a`,
      `--color-ink: #e2e8f0`, `--color-muted: #a3b0c2`, `--color-teal: #2dd4bf`
- [ ] `--color-card: #f8fafc`, `--color-card-ink: #0f172a`, `--color-card-muted: #475569`,
      `--color-card-dt: #334155`, `--color-card-rule: #e2e8f0`
- [ ] segments: `--color-seg-base: #0f172a`, `--color-seg-calls: #14b8a6`, `--color-seg-storage: #3b82f6`,
      `--color-seg-support: #f43f5e`; CTA `#0f172a` / hover `#134e4a` / focus `#0d9488`
- [ ] the **two fixed** tokens: `--color-track-rest: #506890` (**3.07 : 1**, replaces `#2a3a57` **1.52**) and
      `--color-check-line: #546c8f` (**3.24 : 1**, replaces `#33476b` **1.86**) — fixed literals, never derived
- [ ] radii **20** (panels) / **14** (support row) / **12** (CTA) / **6** (thumb) / **3** (legend key) / **999** (track,
      bar); section `max-width: 1100`; head `max-width: 760`; grid `minmax(0,1.35fr) minmax(0,1fr)` gap **24**;
      wrapper padding `clamp(40px, 7vw, 96px) 16px`; panel padding `clamp(22px, 4vw, 38px)`; card padding
      `clamp(22px, 3.5vw, 32px)`

## 2. Pure functions first (RED before any markup)

- [ ] `CALL_STEPS`, `STORAGE_STEPS`, `PRICES` as module constants (spec §"The calculator contract") — the tests table-drive
      every stop from them
- [ ] `callsCost(index)`, `storageCost(index)`, `totalOf({callsIndex, storageIndex, support})`,
      `fillPct(value, min, max)` and `costParts(...)` → `{ base, calls, storage, support }`
- [ ] `callsCost`: `[0, 0, 1.5, 4, 9, 24, 49, 99, 249, 499, 999]` for indices 0…10 (free tier = first 100,000)
- [ ] `storageCost`: `[0, 0, 0.6, 2.4, 5.4, 11.4, 29.4, 59.4, 119.4, 239.4, 599.4, 1199.4]` for indices 0…11 (free tier = 5 GB)
- [ ] `totalOf` at the defaults → **39.4**; the corner combos → **25 / 1173 / 1373.4 / 2372.4 / 332.4**
      (`0/0/off`, `10/0/on`, `0/11/on`, `10/11/on`, `7/7/on`)
- [ ] three module-scope formatters: currency (2 dp, grouped), compact (`maximumFractionDigits: 1`), grouping
      (for `aria-valuetext`) — **never** `toFixed` and never a hand-built `"$" + n`
- [ ] `compactLabel(index)`: `0 · 100K · 250K · 500K · 1M · 2.5M · 5M · 10M · 25M · 50M · 100M`
- [ ] `gbLabel(gb)`: `1 GB … 500 GB`, then `1 TB · 2 TB · 5 TB · 10 TB` (`gb >= 1000 ? gb/1000 + ' TB'`)

## 3. Shell + head (RED first)

- [ ] `main` `#0b1120` + `radial-gradient(60% 50% at 80% 0%, rgba(45,212,191,.12), transparent 70%)` over it, padding
      `96px 16px` at 1440 → assert **1440 × 859.19** and document **900**
- [ ] section **1100 × 667.19** at (170, 96), `max-width: 1100`, base 15 / 23.25 `#e2e8f0`
- [ ] head **760 × 142.94** at y 96, `margin-bottom: 40`
- [ ] eyebrow **20.14** (13 / 700 / `.08em` → **1.04 px** / uppercase / `#2dd4bf`), `margin: 0`
- [ ] `h1` **49.67** at y 126.14 — **one** line (46 / 700 / `-1.38px` / `1.08` / `#fff`), `margin: 10px 0 12px`,
      copy _Pay for what your app really uses_ (**694.47** of 760; 65.5 px slack — **do not** add a word, the next
      candidate is 913.67 and wraps)
- [ ] lede **51.13** at y 187.81 — **two** lines of 25.575 (16.5 / 400 / `#a3b0c2`), copy from the spec table (**902** in
      760; it is tuned so the 3→2 seam lands within 4 px of the reference's 485)

## 4. Body grid + panel

- [ ] body **1100 × 484.25** at y 278.94, grid `1.35fr / 1fr`, gap **24**, **`align-items: start`** — the panel (441.81)
      is shorter than the card (484.25) and both tops align; `align-items: center` is the classic port bug here
- [ ] panel **618.13 × 441.81** at (170, 278.94): `padding: 38`, radius 20, `1px solid #22304a`, `#111a2e`, grid gap **34**
- [ ] field **540.13 × 109.22**: row **40.3** + 12 + slider **26** + 10 + hint **20.92**; field 2 at y 461.16

## 5. Slider rows

- [ ] row `flex`, `align-items: baseline`, `space-between`, gap 12, `margin-bottom: 12` → **40.3**
- [ ] label 15 / 600 `#e2e8f0` → **175 × 23.25** at y 330.94 (baseline-aligned, i.e. 13 px below the row top), `for` the
      slider
- [ ] value pill 26 / 700 / `-0.52px` / `#fff` / `tabular-nums` → **30.97 × 40.3** right-aligned at x **718.16**;
      it is **not** an `<output>` (the total is) — give it `aria-hidden` and let `aria-valuetext` carry the value
- [ ] hint 13.5 / 20.925 / `#a3b0c2`, `margin: 10px 0 0` → **20.92**; copy: _First 100,000 API calls are free, then $1.00
      per 100,000._ (**345** — it must wrap at 414 / box 336 and not at 440 / box 362) and _First 5 GB free, then $0.12
      per GB._ (**211**)

## 6. Range inputs

- [ ] `<input type="range" min=0 max=10 step=1 value=4>` and `min=0 max=11 step=1 value=4`; `appearance: none`,
      `background: transparent`, height **26**, `width: 100%`, `cursor: pointer`
- [ ] `::-webkit-slider-runnable-track` **6 px**, radius 999,
      `linear-gradient(90deg, #2dd4bf var(--fill), #506890 var(--fill))` — a **hard stop** with the **fixed** rest colour
- [ ] `::-webkit-slider-thumb` **22 × 22**, `margin-top: -8px`, `border: 0`, `border-radius: 6`, `#fff`,
      `box-shadow: 0 0 0 4px rgba(45,212,191,.35)`
- [ ] Firefox: `::-moz-range-track` (`#506890`) + `::-moz-range-progress` (teal) + `::-moz-range-thumb` (22 × 22, radius 6)
- [ ] `--fill` written **inline on the input** (`style={{ ['--fill']: pct }}` with a `CSSProperties` cast):
      **40 %** calls, **36.3636 %** storage at the defaults; `pct = (value − min)/(max − min) × 100`
- [ ] `:focus-visible` → thumb ring `0 0 0 3px #0b1120, 0 0 0 6px #fff`, `outline: none` on the input
- [ ] `aria-valuetext` = **`1,000,000 requests`** / **`50 GB`** (human), refreshed on every change; the pill stays compact

## 7. Support row

- [ ] label **540.13 × 77.38** at y 604.38: `padding: 16`, radius 14, **`1px dashed #546c8f`**, flex, `align-items:
    flex-start`, gap 12, 14 / 21.7, `#a3b0c2`
- [ ] box **20 × 20** at (226, 622.38), `margin: 1px 0 0`, `flex: none`, `accent-color: #2dd4bf` (native appearance — do
      **not** restyle it)
- [ ] text **474.13 × 43.38** (**two** lines) — `<strong>` at `#fff`, then
      _— one-hour replies and a shared channel. $149 / month._ (**467** in 474.13; the reference wraps by **3.13 px**, so
      any shorter paraphrase collapses the row to 55.69 and the panel to 420.13)
- [ ] checked state from React state → `data-checked`, giving `border-style: solid`, `border-color: #2dd4bf`,
      `background: rgba(45,212,191,.06)`; **no** `:has()` dependency
- [ ] add the missing **row-level** focus ring (`outline: 3px solid #2dd4bf; outline-offset: 2px`) on top of the box's own
      ring

## 8. Bill card

- [ ] card **457.88 × 484.25** at (812.13, 278.94): `#f8fafc`, `#0f172a`, padding **32**, radius 20,
      `box-shadow: 0 30px 60px -30px rgba(0,0,0,.6)`, `position: sticky; top: 24` (static under 860)
- [ ] title **21.69** at y 310.94 — 14 / 600 / `#475569` (_Your estimated bill_)
- [ ] total block **56.69** at y 336.63 (`margin: 4px 0 18px`); `<output>` 54 / 700 / `-2.16px` / `1.05` / `tabular-nums`,
      `clamp(42px, 5vw, 54px)` → **161.05** wide for `$39.40`, **219.56** for `$2,372.40`; `htmlFor` lists the three inputs
- [ ] bar **393.88 × 10** at y 411.31, `#e2e8f0`, radius 999, `overflow: hidden`, `margin-bottom: 18`; four spans
      `flex: 0 1 0`, `min-width: 0`, `box-shadow: inset -2px 0 #f8fafc`, `transition: flex-grow .35s ease`,
      `style={{ flexGrow: cost }}` → widths **249.92 / 89.97 / 53.98 / 0** at the defaults
- [ ] `<dl>` **165.88** at y 439.31 (`margin: 0 0 24px`); rows **41.47** (`padding: 9px 0`, `border-top: 1px #e2e8f0`,
      14.5 / 22.475); `dt` flex gap 10 `#334155`; key **10 × 10** radius 3, `aria-hidden`; `dd` 600, `tabular-nums`,
      `margin: 0`
- [ ] four line names in this order: **Platform fee · API calls · Storage · Priority support**
- [ ] status node `role="status"` `aria-live="polite"`, visually hidden (`1px + clip-path: inset(50%)`), text
      `Estimated total $39.40 per month.` after a **700 ms** debounce (`useEffect` + `setTimeout` + cleanup; **not** a
      synchronous `setState` in an effect — `react(set-state-in-effect)` is an error here)
- [ ] CTA **393.88 × 49.25** at y 629.19 — `padding: 13px 18px`, radius 12, `#0f172a`, `#fff` 700, hover `#134e4a` `.2s`,
      focus `3px #0d9488` at +3; a **real** `href` (the reference's is `#`)
- [ ] fine print **38.75** at y 692.44 — 12.5 / 19.375 / `#475569`, `margin: 14px 0 0`, **two** lines at 1440 and
      **three** at 861–876; copy from the spec table (**568** in 393.88 — the reference measures 566)

## 9. Wiring

- [ ] three `useState`s (`callsIndex` 4, `storageIndex` 4, `support` false); every visible value derived in render
- [ ] both ranges `onInput`/`onChange` → set the **index**; checkbox `onChange` → set the boolean; the `<form>`'s
      `onSubmit` → `preventDefault()` (there is no submit button, so `Enter` must do nothing)
- [ ] the two `--fill` percentages and the four `flex-grow`s are **derived**, never stored
- [ ] assert the free tiers: calls index 1 (`100K`) → line `$0.00`; storage index 1 (`5 GB`) → line `$0.00`; storage
      index 0 (`1 GB`, track at 0 %) → line `$0.00`
- [ ] assert the storage quirk: at index 0 the pill reads **`1 GB`**, not `0 GB`, and `aria-valuetext` agrees

## 10. Responsive + the two known deltas

- [ ] `@media (max-width: 860px)`: `grid-template-columns: minmax(0, 1fr)`, bill `position: static` → document
      **1181**, support row **1** line (55.69), fine print **1** line (19.38), bill **449.52**
- [ ] ladder (port): 1440 **900** · 861 **900** · 860 **1181** · 800 **1160** · 768 **1149** · 700 **1126** ·
      640 **1127** · 600 **1139** · 520 **1131** · 480 **1189** · 440 **1189** · 414 **1210** · 390 **1210** ·
      375 **1232** · 360 **1251** · 320 **1277**
- [ ] the ladder is **non-monotonic** twice: 600 (1139) → 520 (1131) shrinks while narrowing; 480 (1189) grows again
- [ ] **delta 1:** at **320** the support row is **3** lines, so the document is **1277** (reference **1298**) and the panel
      **452.42** (reference 474.11) — assert the port's numbers, do not tune the copy further
- [ ] **delta 2:** at **414** the calls hint does **not** wrap (port panel **409.81**, reference **430.73**) — the hint
      measures 345 in the served face vs the reference's 342, and the wrap seam sits at 424
- [ ] `scrollX = 0` and `scrollWidth === clientWidth` at every width 320 … 1440

## 11. Contrast, a11y, copy

- [ ] test the two fixed pairs: track `#506890` **3.07**, dashed border `#546c8f` **3.24** on `#111a2e`
- [ ] test the pairs that pass: eyebrow **10.12 / 9.32**, ink **15.27 / 14.07**, muted **8.56 / 7.88**, title **18.83**,
      bill title **7.24**, `dt` **9.90**, `dd` **17.06**, CTA **17.85** (hover **9.48**), focus ring **3.58**
- [ ] record (do not "fix") the teal segment's **2.38 : 1** — it is redundant with the legend key, the row label and the
      amount beside it
- [ ] a11y: two labelled ranges with `aria-valuetext`, one labelled checkbox, one `output` with `for`, one debounced
      `role="status"`, one real anchor, **no** `aria-hidden` on any focusable element
- [ ] **no** `:where(html) … all: revert`, **no** `[hidden]` re-assert, **no** `.cl-icon`, **no** `--cl-pricing06-*`,
      **no** colourlib / pricing-table-06 / parcelbase strings anywhere in `apps/runrate`

## 12. Footer + verify

- [ ] Component Dock footer strip as the last element, one link to `https://www.componentdock.com/`, inside the same
      `#0b1120` ground — it adds its height to **every** number in the ladder (measure once, add it, do not "fix" the spec)
- [ ] `npm run verify:app runrate`; `openspec validate template-runrate --type spec`
- [ ] `grep -riE 'colorlib|pricing-table-06|parcelbase' apps/runrate` → **0**
- [ ] bookkeeping: `npm run readme:status`; **append** the `TEMPLATES.md` row **Pricing Table 06** under
      `## Bootstrap Pricing Tables (12)` (header line **891**, rows 01/02 at **893/894**, `## Bootstrap Wizards (30)` at
      **896** as of `cb462ce41`) — grammar `[colorlib] · ![preview] · [app]`, and re-read the file **after** the rebase;
      `gh workflow run deploy-surge.yml -f app="runrate"`
