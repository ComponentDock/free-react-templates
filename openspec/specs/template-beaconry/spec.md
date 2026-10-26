# Template: Beaconry (Alert — a dark infrastructure cluster-health alert list with severity dots and a live tally)

## Purpose

A **single 810 px dark panel on a near-black ground**, and the whole document is that panel: a
**cluster-health alert list**. The header carries a mono environment line ("prod · eu-west-1"), a
22 px title ("Cluster health") and a right-aligned **three-pill tally** ("1 critical", "1 warning",
"2 resolved"). Four rows follow, each a **three-column grid** — a **10 px pulsing severity dot**, a
body (severity chip + 15 px / 600 headline, a 14 px description, a mono meta line) and a **ghost
action button** ("Runbook" / "Inspect" / "Details" / "Changes").

The four tones are the design: **critical `#fb7185`**, **warning `#fbbf24`**, **info `#38bdf8`**,
**ok `#34d399`**. Only the critical row is tinted — a rose wash behind it and a rose 1 px border —
and only the critical and warning dots animate (a halo that scales 1 → 3 while fading out). The info
tone is not a modifier at all: `#38bdf8` is the **base** `--cl-alert06-tone`, so the info row carries a
class (`cl-alert06__item--info`) that styles nothing.

Everything is **Inter** (one variable cut, 400–700) with **JetBrains Mono** for the environment line,
the severity chips and the meta lines (one variable cut, 400–500). There is **no JavaScript**: the
page is 3,955 B of HTML and one 11,966 B stylesheet, and the ColorLib page itself says so — *"It is
plain HTML and CSS: no jQuery, no Bootstrap files, no plugins"*. Total motion is **one `@keyframes`**
with a `prefers-reduced-motion` pair.

- **Source slug:** `alert-06`
- **ColorLib page:** https://colorlib.com/wp/template/alert-06/ — **HTTP 200, 113,480 B**, `<title>`
  `Alert V06 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V06"**, meta description *"A dark
  infrastructure panel listing critical, warning, info and resolved alerts for a production cluster.
  Free download, no jQuery or plugins."*, `datePublished` **2026-09-25T14:53:43+00:00**, claims
  *"the download is 614 KB"* (measured **628,539 B = 613.8 KiB** ✓), and links its siblings in a
  6-item related grid (the family runs to twelve). This is the **design name the naming audit reads**:
  ColorLib "Alert V06".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-06/ —
  **HTTP 200, 3,955 B**, `<title>` `Alert V06 | Colorlib`, `lang="en"`, **one** stylesheet, **no**
  theme `<script>`. The slug-only path `theme/alert-06/` is **404 (9 B)**; `theme/bb/alert-06/` is
  **404 (9 B)**; `theme/bootstrap/alert-06/index.html` is **200, the same 3,955 B** (a no-op link,
  never a 404). Same `bootstrap/` prefix ladder as the five earlier variants of this family.
- **Design category:** Alert (a severity-coded incident list: tally + four rows + per-row action).
  **Sixth** of the **`alert` snippet family** (**12** variants) in the **214 snippet variants** of
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/beaconry`,
  package `@free-react-templates/beaconry`, CNAME `beaconry.free.componentdock.com`.

**What this design is, and what it is not.** The family so far: **noticeboard** is a static severity
ladder, **allclear** a dismiss/restore *list*, **fieldguide** admonitions inside prose with no script
at all, **banderole** a page-level announcement bar over a landing page, **snapback** a file list with
two actionable bars. `alert-06` is the first variant that is a **dashboard panel** rather than a
message: four *co-existing* alerts of four different severities on one surface, colour carried by a
**pulsing dot and a chip** instead of a bar, and the **only** colour on the tinted row. It is also the
first whose header carries a **summary** that has to agree with the list — which the reference gets
wrong (defect 2), so the port's one real job is to make the tally live.

**The six things a careless port flattens** (each measured here, expanded below):

- **The panel is `content-box`.** `max-width: 760px` measures **810 outer** (24 px padding + 1 px
  border each side) at every viewport ≥ **842**; below that the card is exactly **`vw − 32`**. A
  `border-box` port is 50 px narrow and every row measurement drifts.
- **Four tones, one of which has no rule.** Critical `#fb7185`, warning `#fbbf24`, **info `#38bdf8`
  (the base value of `--cl-alert06-tone`, not a modifier)**, ok `#34d399`; and the info row is the
  only one whose modifier class styles nothing.
- **Only the critical row is tinted and bordered.** `linear-gradient(90deg, rgba(251,113,133,.10),
  rgba(251,113,133,.02) 60%)` behind a `rgba(251,113,133,.35)` border; the other three rows are
  `rgba(255,255,255,.025)` behind the same `rgba(148,163,184,.14)` hairline as the panel.
- **The row's height is a stack, not a setting.** `107.5 = 2 + 32 + 22.5 + 4 + 21 + 8 + 18`; when the
  description takes a second line the row is **128.5**, and at the ≤560 layout each card is **172**
  because the action moves *under* the body.
- **Only two things move**: the critical dot (1.6 s) and the warning dot (2.6 s), both
  `opacity .6 → 0` with `scale 1 → 3`. Under `prefers-reduced-motion` both stop — but only the
  critical dot keeps a static ring, so the warning dot goes **blank** (defect 9).
- **The tally is wrong in the reference.** It says **1 critical · 1 warning · 2 resolved** while the
  list holds **1 critical, 1 warning, 1 info, 1 resolved** — there is no info pill and "2 resolved" is
  false. The port computes it from the rows.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,902** rows, **3,158** lines), so this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `alert-06` is one of the **214 snippet variants in 19 families**; the 42 standalone designs
in that gap are all prepped. Families are worked **in family order, then variant number** — the card
family (20) is closed, the alert family is in progress (noticeboard, allclear, fieldguide, banderole
and snapback are prepped, **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **sixth** entry
of a section that does not exist yet. It belongs **between `## Bootstrap Accordions (20)` (line 639)
and `## Bootstrap Buttons (20)` (line 663)** — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 06** — [colorlib](https://colorlib.com/wp/template/alert-06/) · [beaconry](https://beaconry.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-06.jpg)
```

Row-grammar warning, measured on main `50187e26a`: `## Bootstrap Accordions` (the section immediately
above) uses `[colorlib] · [app] · ![preview]` — preview **last**; `## Bootstrap Buttons` uses
`[colorlib] · ![preview] · [app]` for 12 rows and app-before-preview for 7. Use the **accordion**
form (preview last) and re-read the surrounding lines **immediately before pushing** — two implementer
streams write this file.

**The name.** `beaconry` — one lowercase word (a beacon station: the thing that raises the signal), and
it matches the family's closed-single-word pattern (noticeboard, allclear, fieldguide, banderole,
snapback) and the card family's (coursebook, roadbook, shortlist). Verified free on main `50187e26a`:
`git grep -il beaconry origin/main` → **0 files**; no `apps/beaconry`; no
`openspec/specs/template-beaconry`; no bold name in `TEMPLATES.md`; and the ColorLib catalogue URLs
`colorlib.com/wp/template/beaconry/`, `preview.colorlib.com/theme/beaconry/` and
`preview.colorlib.com/theme/bootstrap/beaconry/` all **404**.

Zero-collision alternatives measured the same run, still free if a later variant needs one:
`watchdeck`, `signalpost`, `posthouse`, `opspanel`, `healthdeck`, `statuspane`, `wardlight`.
Rejected on measurement because the repo already contains the substring: `lookout` (1 file). Do **not**
reuse `noticeboard`, `allclear`, `fieldguide`, `banderole` or `snapback`, nor the card family's twenty
taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 3,955 B** live (`3,763 B` inside the archive), `<title>` "Alert V06 \| Colorlib", `lang="en"`, **one** stylesheet, **0** theme `<script>` |
| preview path      | **`theme/bootstrap/alert-06/`**; `theme/alert-06/` **404** (9 B), `theme/bb/alert-06/` **404** (9 B), `…/index.html` **200** (same 3,955 B) |
| stylesheet        | `css/style.css?v=be2e4226`, **11,966 B**, **452** lines, sha256 `d607a2287d08f7fed53d5fd15ba8c0e824bda3598c9d1d54f870ae3b45c46267` |
| script            | **none.** `js/snippet.js` → **HTTP 404 with a 9 B body `Not Found`** (soft 404 — check the body size, not just the status); the archive has **no `js/` directory**. The 10 `<script>` tags in the live DOM are the preview host's (gtag + Zaraz) |
| archive           | `preview.colorlib.com/downloads/free/alert-06.zip`, **200, 628,539 B** (= 613.8 KiB ✓ the page's "614 KB"), **18 entries**: 3 dirs + `index.html` 3,763 B + `css/style.css` 11,966 B + `README.md` 1,262 B + **12 `woff2`** |
| live ↔ archive    | CSS **identical sha256**; the two HTML files differ **only** in the `<head>` (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, the `?v=` query) → **live preview verified; the archive is its un-versioned twin** |
| README            | lists `js/snippet.js  the behaviour, in plain JavaScript` and `images/  its images` — **neither exists** (defect 6)           |
| fonts             | **12** `woff2` but **4 distinct binaries**: Inter latin **48,432 B** sha256 `c9407645…`, Inter latin-ext **85,272 B** sha256 `a28eb6d3…`, JetBrains Mono latin **31,340 B** sha256 `2c32b9b3…`, JetBrains Mono latin-ext **11,596 B** sha256 `9c38cb2d…`; each Inter binary is duplicated at 400 / 500 / 600 / 700, each mono binary at 400 / 500 |
| type proof        | DOM probe at identical box width (`font-variation-settings: 'wght' 470` vs normal): **Inter 137 → 139 px** and **JetBrains Mono pixels change at constant 598 px advance** ⇒ **both are variable cuts**. Inter canvas advance of "Cluster health 800 ms 87%" at 32 px: **400 → 409**, 500 → **413**, 600 → **418**, 700 → **425**, 300 → 409 (clamps to the 400 floor), 800 / 900 → 425 (clamps to the 700 ceiling). Mono advance is fixed (**323** at every weight), so weight is read from pixels: 400, 500 and 700 all render differently, and **700 is never declared** ⇒ synthesised |
| classes           | **24** in the markup, **23** styled ⇒ the only markup class with no rule is **`cl-alert06__item--info`**, and that is **deliberate** (the info tone is the base value). The sheet also carries **dead `.cl-icon`** — the **sixth** sibling in a row carrying that leftover |
| custom properties | **6**: `--cl-alert06-ink: #e6ebf2`, `--cl-alert06-muted: #97a3b6`, `--cl-alert06-line: rgba(148,163,184,.14)`, `--cl-alert06-mono: "JetBrains Mono", ui-monospace, …`, and **per-row** `--cl-alert06-tone` / `--cl-alert06-glow` (base `#38bdf8` / `rgba(56,189,248,.55)`) |
| CSS anatomy       | **12** `@font-face` + 2 `:where(html) … { all: revert }` guard groups + **~29 design rule blocks**; **2** `@media` (`max-width: 560px`, `prefers-reduced-motion: reduce`), **1** `@keyframes` (`cl-alert06-pulse`), **2** `transition` declarations, **3** `animation` declarations, **0** `@supports`, **0** container queries |
| controls          | **4** `<a>` (the row actions) and **nothing else**: **0** `<button>`, **0** `<form>` / `<input>`, **0** `<img>`, **0** `<svg>`; **4** focusable elements in DOM order (row 1 → row 4) |
| headings          | **1 × `h1`** and **no `h2`–`h6`**                                                                                            |
| landmarks         | `<main>` (unlabelled) → `<section aria-labelledby="cl-alert06-title">` → `<header>`; the list is a plain `<div>`, the rows are `<div>`s |
| live regions      | **`role="alert"` on the static critical row**, `role="status"` on the other three (defect 4)                                  |
| ids / fragments   | **1** id (`cl-alert06-title`), consumed by `aria-labelledby`; the page holds **4** anchors and **all four fragments are dead** (`#runbook`, `#node-3`, `#maintenance`, `#deploy`) |
| document height   | **900** at 1440 × 900 (`min-height: 100vh` on the wrapper) — no scroll; **1094** at 390, **1366** at 320 (vertical only: `window.scrollTo(300, 0)` leaves `scrollX` **0** at every width 300–820) |
| screenshot        | `https://colorlib.com/wp/wp-content/uploads/sites/2/alert-06.jpg`, **26,958 B**, **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it — and it is a **macOS browser mock-up** (see defect 7) |

### Page arithmetic — one content-box panel, four tones, one hairline

```css
body  { margin: 0; background: #06080d;
        font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.cl-alert06-demo { display: flex; justify-content: center; align-items: flex-start;
                   box-sizing: border-box; min-height: 100vh;
                   padding: clamp(24px, 7vw, 88px) 16px;
                   background: radial-gradient(40% 40% at 20% 0%, rgba(56,189,248,.10) 0%, transparent 70%),
                               radial-gradient(35% 40% at 90% 100%, rgba(244,63,94,.08) 0%, transparent 70%), #06080d; }
.cl-alert06      { width: 100%; max-width: 760px;              /* content-box → 810 outer */
                   padding: 24px; border: 1px solid var(--cl-alert06-line); border-radius: 20px;
                   background: linear-gradient(180deg, #111723 0%, #0c111a 100%);
                   box-shadow: 0 40px 80px -40px rgba(0, 0, 0, .8);
                   color: #e6ebf2; line-height: 1.5; }
.cl-alert06__head  { display: flex; flex-wrap: wrap; gap: 12px 24px; align-items: flex-end;
                     justify-content: space-between; margin-bottom: 20px; }
.cl-alert06__list  { display: grid; gap: 10px; }
.cl-alert06__item  { display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: start;
                     padding: 16px 18px; border: 1px solid var(--cl-alert06-line); border-radius: 14px;
                     background: rgba(255,255,255,.025); }
```

Height is a sum of the header, its margin and the list, plus the panel's own box:

```
panelH = 2 + 48 + head + 20 + list
1440  : 2 + 48 + 55.75 + 20 + 481   = 606.75   ✓ (list = 107.5 + 107.5 + 128.5 + 107.5 + 3 × 10)
        head = env 18.75 + 4 + h1 33 = 55.75
        item = 2 + 32 + max(dot 10, body 73.5) = 107.5
        body = row 22.5 + 4 + desc 21 + 8 + meta 18 = 73.5
        row  = max(pill 19.25, name 22.5) = 22.5      (flex-wrap, gap 6px 10px, align-items: center)
```

Measured geometry at 1440 × 900 (first layout pass; document height **900**, i.e. no scroll):

| element             | box                                  | note                                                             |
| ------------------- | ------------------------------------ | ---------------------------------------------------------------- |
| `.cl-alert06-demo`  | 1440 × **900** at (0, 0)             | padding `88px 16px`, `min-height: 100vh`                          |
| `.cl-alert06`       | **810 × 606.75** at (315, 88)        | 810 = `max-width 760` (content-box) + 2 × 24 padding + 2 × 1 border |
| `.__head`           | 760 × **55.75** at (340, 113)        | `gap: 12px 24px`, `align-items: flex-end`, `margin-bottom: 20px`  |
| `.__env`            | **142.92 × 18.75** at (340, 113)     | mono **12.5 / 18.75**, `#7dd3fc`, `margin: 0 0 4px`               |
| `.__title`          | **142.92 × 33** at (340, 135.75)     | Inter **22 / 33** (1.5), 600, `letter-spacing: −0.22px`, `#e6ebf2` |
| `.__tally`          | **300 × 30.75** at (800, 138)        | `gap: 8px`, right-aligned on the header's baseline (bottom 168.75) |
| tally `<li>`        | **86 / 94 / 104 × 30.75** at x 800 / 894 / 996 | `padding: 5px 11px`, radius **999**, `1px solid` hairline, **12.5 / 18.75**, 500, `#97a3b6` |
| `.__pip`            | **7 × 7** at (812, 149.88)           | radius 50 %, `background: currentColor`, own `color` per tone     |
| `.__list`           | 760 × **481** at (340, 188.75)       | `display: grid; gap: 10px`                                        |
| `.__item` (1)       | 760 × **107.5** at (340, 188.75)     | `grid-template-columns: 18px 591px 81px`                          |
| `.__item` (2)       | 760 × **107.5** at (340, 306.25)     | cols `18px 600px 72px`                                            |
| `.__item` (3)       | 760 × **128.5** at (340, 423.75)     | cols `18px 604px 68px` — description takes **2** lines            |
| `.__item` (4)       | 760 × **107.5** at (340, 562.25)     | cols `18px 589px 83px`                                            |
| `.__dot`            | **10 × 10** at (363, 212.75)         | `margin: 7px 4px 0` — that is where the **18 px** grid column comes from |
| `.__body`           | 591 × **73.5** at (393, 205.75)      | third grid child is the action, `align-self: center`              |
| `.__row`            | 591 × **22.5** at (393, 205.75)      | `display: flex; flex-wrap: wrap; gap: 6px 10px; align-items: center` |
| `.__sev`            | **75.69 × 19.25** at (393, 207.38)   | mono **11.5 / 17.25**, 500, `+0.46px`, **uppercase**, `padding: 1px 8px`, radius **6**, ground `rgba(255,255,255,.06)`, ink = tone |
| `.__name`           | **231 × 22.5** at (478.69, 205.75)   | Inter **15 / 22.5**, 600, `#f5f8fc`                                |
| `.__desc`           | 591 × **21** at (393, 232.25)        | **14 / 21**, `#b3bdcc`, `margin: 4px 0 0`                          |
| `.__meta`           | 591 × **18** at (393, 261.25)        | mono **12 / 18**, `#97a3b6`, `margin: 8px 0 0`, `gap: 4px 16px`    |
| `.__link`           | **81 × 35.5** at (1000, 224.75)      | `padding: 7px 12px`, radius **8**, `1px solid` hairline, **13 / 19.5**, 500, `#e6ebf2`, `white-space: nowrap` |

Action widths are content-driven and **constant at every viewport**: **81** (Runbook), **72**
(Inspect), **68** (Details), **83** (Changes).

### Design tokens — five inks, four tones, one hairline

```css
ground        #06080d                          /* body */
ground-tints  rgba(56,189,248,.10) 40%→at 20% 0%   +   rgba(244,63,94,.08) 35%→at 90% 100%
panel-top     #111723      panel-bottom #0c111a    /* linear-gradient(180deg) */
hairline      rgba(148,163,184,.14)          /* panel border + row border + pill border + link border */
row-wash      rgba(255,255,255,.025)
chip-wash     rgba(255,255,255,.06)
hover-wash    rgba(255,255,255,.04)   hover-hairline rgba(148,163,184,.28)
ink           #e6ebf2      name  #f5f8fc      desc  #b3bdcc
muted         #97a3b6      env   #7dd3fc
critical      #fb7185   wash rgba(251,113,133,.10) → .02 60%   border rgba(251,113,133,.35)   glow rgba(251,113,133,.60)
warning       #fbbf24                                                                          glow rgba(251,191,36,.50)
info          #38bdf8   (base --cl-alert06-tone)                                               glow rgba(56,189,248,.55)
ok            #34d399                                                                          glow rgba(52,211,153,.45)
radii         panel 20 · row 14 · chip 6 · link 8 · pip/dot 50 %
shadow        panel 0 40px 80px -40px rgba(0,0,0,.8) ; dot 0 0 0 3px rgba(255,255,255,.04), 0 0 12px 2px var(--cl-alert06-glow)
faces         Inter 400–700 (variable) · JetBrains Mono 400–500 (variable) for env, chips, meta
```

### The width ladder (1 px sweep, 300–820; every value measured)

| what                                  | thresholds |
| ------------------------------------- | ---------- |
| panel outer                           | **810** at ≥ **842**; **`vw − 32`** at 300–841 |
| panel content (rows / header)         | **760** at ≥842 · **`vw − 82`** 561–841 · **`vw − 62`** ≤560 |
| panel padding                         | `24px` at ≥561 · **`18px 14px`** ≤560 |
| head                                  | **55.75** ≥529 · **98.5** 362–528 (tally drops to its own line) · **137.25** ≤361 (tally wraps to two rows) |
| tally                                 | **30.75** ≥362 · **69.5** ≤361 |
| row 1 (critical)                      | 107.5 ≥696 · 128.5 619–695 · 150.5 568–618 · **175.75** 561–567 · 172 490–560 · 194 439–489 · 219.25 414–438 · 240.25 355–413 · 262.25 353–354 · 284.75 319–352 · 305.75 ≤318 |
| row 2 (warning)                       | 107.5 ≥696 · 128.5 561–695 · 172 401–560 · 197.25 369–400 · 219.25 349–368 · 240.25 322–348 · 262.75 ≤321 |
| row 3 (info)                          | 128.5 ≥622 · 149.5 561–621 · 172 506–560 · 193 422–505 · 218.25 366–421 · 240.75 360–365 · 261.75 327–359 · 283.75 322–326 · 304.75 ≤321 |
| row 4 (ok)                            | 107.5 ≥744 · 128.5 561–743 · 172 392–560 · 197.25 371–391 · 218.25 327–370 · 240.25 306–326 · 262.75 ≤305 |
| description lines (21 px each)        | r1 **4** ≤318, **3** 319–413, **2** ≥414 · r2 **3** ≤348, **2** 349–695, **1** ≥696 · r3 **5** ≤321, **4** 322–359, **3** 360–505, **2** 506–560, **3** 561–621, **2** ≥622 · r4 **3** ≤370, **2** 371–743, **1** ≥744 |
| meta rows (18 px each)                | r1 **3** ≤354, **2** 355–489, **1** 490–560, **2** 561–618, **1** ≥619 · r2 **2** ≤368, **1** ≥369 · r3 / r4 **2** ≤326, **1** ≥327 |
| chip+name row (22.5 / 47.75 / 70.25)  | r1 **3 lines** ≤352, **2** 353–438, **1** 439–560, **2** 561–567, **1** ≥568 · r2 **3** ≤321, **2** 322–400, **1** ≥401 · r3 **3** ≤365, **2** 366–421, **1** ≥422 · r4 **3** ≤305, **2** 306–391, **1** ≥392 |
| document height                       | **900** at ≥561 (no scroll) · 910 at 560 · 1143.75→1409 down to 300 |
| horizontal overflow                   | **none at any width 300–820** (`scrollX` stays **0** after `scrollTo(300, 0)`) |

Two discontinuities are real and must be reproduced, not smoothed: **`≤560` is a layout change**
(the action moves to `grid-column: 2` under the body, `gap` 16 → 12, `padding` 16/18 → 14), so each
card gets **taller** while the panel gets **~94 px shorter** (561 → 831.75 at 560); and **row 3's
description is 2 lines at 506–560 but 3 lines at 561–621** — the narrower three-column body wraps
more than the two-column one.

### Contrast (WCAG 2.x, computed from the shipped hexes over the composited background)

| pair                                            | ratio | verdict |
| ----------------------------------------------- | ----- | ------- |
| `h1` `#e6ebf2` on panel `#101621`               | 15.13 | AA / AAA |
| name `#f5f8fc` on row wash                      | 16.03–16.86 | AA / AAA |
| desc `#b3bdcc` on row wash                      | 9.00–9.47 | AA / AAA |
| muted `#97a3b6` (tally, meta)                   | 6.69–7.10 | AA / AAA |
| env `#7dd3fc` on panel                          | 10.87 | AA / AAA |
| chip text, critical `#fb7185` on chip wash      | **5.00** | AA (worst text pair) |
| chip text, warning / info / ok                  | 8.97 / 6.99 / 7.79 | AA |
| critical row: name / desc / meta                | 15.12 / 8.49 / 6.31 | AA |
| action label `#e6ebf2` on row wash              | 14.42 | AA / AAA |
| **action border `rgba(148,163,184,.14)`**       | **1.27** | **fails 1.4.11** (needs 3:1 for the control's only affordance) — defect 5 |
| pips (non-text) rose / amber / green            | 6.73 / 10.86 / 9.43 | fine |
| focus ring (tone) on panel                      | 6.31–6.86 | fine |

## Defects found in the reference (fix in the port; do not reproduce)

1. **Four dead in-page fragments.** The page holds **4** `<a>` elements and **1** id — the `h1`'s,
   consumed by `aria-labelledby`:

   | action copy | `href`         | target |
   | ----------- | -------------- | ------ |
   | "Runbook"   | `#runbook`     | **DEAD** |
   | "Inspect"   | `#node-3`      | **DEAD** |
   | "Details"   | `#maintenance` | **DEAD** |
   | "Changes"   | `#deploy`      | **DEAD** |

   **Rule for the port: no `href="#…"` may point at a non-existent id.** The actions become real
   `<button type="button">` elements (see the dialog requirement) — a test must assert that no anchor
   on the page carries a fragment.
2. **The tally does not add up.** Three pills say **1 critical · 1 warning · 2 resolved**, but the
   list holds **1 critical, 1 warning, 1 info, 1 resolved**. There is no pill for the info tone and
   "2 resolved" is simply false. The port derives **four** pills (critical, warning, info, resolved)
   from the row data, so the sum always equals the list.
3. **Hovering the critical row destroys its tint.** `.cl-alert06__item:hover` sets the `background`
   **shorthand**, which resets `background-image` to `none` — measured after a real mouse move on
   `.cl-alert06__item--critical`: `backgroundImage: none`, `backgroundColor: rgba(255,255,255,.04)`,
   `borderColor: rgba(148,163,184,.28)`. The one row that must read as severe becomes the plainest row
   under the cursor. The port changes **`background-color` only** (or re-declares the gradient in
   `:hover`) and keeps the rose border.
4. **Live-region roles on static content.** The critical row carries **`role="alert"`** and the other
   three **`role="status"`** — an assertive announcement fires on page load, before the user has done
   anything, and the three polite regions queue behind it. Static content must not be a live region.
   The port uses list semantics (`<ul>` / `<li>`) and no `role="alert"` / `role="status"` unless it
   adds an update that deserves one.
5. **The action control's only affordance is a 1.27 : 1 border.** `rgba(148,163,184,.14)` over the row
   wash fails 1.4.11 (3 : 1). Raise it to **`rgba(148,163,184,.6)`** for the control (3.28 : 1) and
   keep `.14` for decorative hairlines only.
6. **The README advertises files that do not exist** — `js/snippet.js` and `images/`. The archive has
   no `js/` and no `images/`, the live page has no theme `<script>`, and the page's own copy says
   "plain HTML and CSS". Nothing to port.
7. **The screenshot is a browser mock-up.** `alert-06.jpg` is a **macOS window** (traffic-light dots,
   a chrome bar reading `preview.colorlib.com`, a drop shadow on a grey desk) at **1200 × 972** — the
   same canvas as the previous variant's mock-up. Never adopt the frame: the ground is `#06080d` edge
   to edge, with the two radial tints.
8. **Dead `.cl-icon` rule** in the sheet, referenced by nothing — the sixth sibling in a row carrying
   that leftover. Do not port it.
9. **The reduced-motion fallback is asymmetric.** Under `prefers-reduced-motion: reduce` both
   animations stop, but only the **critical** dot gets a static ring (`opacity: .25`,
   `transform: scale(2)`); the warning dot's `::after` has no such rule, so it stays at `opacity: 0`
   and the warning row loses its halo entirely (measured: `anim none`, `opacity 0`, `transform none`).
   The port shows **both** static rings or **neither** — do not ship a hover-less, motion-less dot that
   silently disappears.
10. **`__item--info` is a class that styles nothing.** Harmless — the info tone is the base value of
    `--cl-alert06-tone` — but it means the row's colour lives 14 lines away in the shared rule. Declare
    all four tones explicitly in the port (the fieldguide lesson, twice over).

## Requirements

### Feature: The panel skeleton

#### Scenario: Landmarks and order

- **GIVEN** the `beaconry` app at 1440 × 900
- **WHEN** the document is read top to bottom
- **THEN** the order SHALL be: **`<main>` wrapper → one `<section>` (panel) → `<header>` (env, `h1`, tally) → alert list → footer**
- **AND** the section SHALL carry `aria-labelledby` pointing at the `h1`, so it exposes a named region
- **AND** the page SHALL contain **exactly 1 `h1` and 0 `h2`–`h6`**
- **AND** the document SHALL fit **900 px** at 1440 × 900 with **no scrollbar** (wrapper `min-height: 100vh`,
  panel 606.75), and SHALL have **no page chrome** — no nav, no hero band, no second panel

#### Scenario: The panel box is content-box

- **GIVEN** the panel at 1440
- **WHEN** its box is measured
- **THEN** it SHALL be **810 × 606.75** at (315, 88) — `max-width: 760px` on a **`content-box`** element
  plus `24px` padding and `1px` border each side
- **AND** below **842** the outer width SHALL be exactly **`vw − 32`** (the wrapper's `16px` padding),
  never narrower — a `border-box` port is 50 px off at every width
- **AND** its surface SHALL be `linear-gradient(180deg, #111723 0%, #0c111a 100%)`, its border
  `1px solid rgba(148,163,184,.14)`, its radius **20**, its shadow `0 40px 80px -40px rgba(0,0,0,.8)`,
  its ink `#e6ebf2`, its `line-height` **1.5**
- **AND** the wrapper SHALL centre it with `display: flex; justify-content: center; align-items: flex-start`
  and `padding: clamp(24px, 7vw, 88px) 16px` (**88** at ≥1258, **24** at ≤342)
- **AND** the wrapper's ground SHALL be `#06080d` plus the two radial tints
  (`rgba(56,189,248,.10)` at 20 % 0 %, `rgba(244,63,94,.08)` at 90 % 100 %)

#### Scenario: The list container

- **GIVEN** the four rows
- **WHEN** the container is measured
- **THEN** it SHALL be a **`<ul>`** of four **`<li>`** items, `display: grid`, `gap: 10px`,
  **760 × 481** at (340, 188.75), with `list-style: none` and no padding
- **AND** the reference's `div` list SHALL NOT be reproduced (defect 4) — the rows are list items

### Feature: The header and the tally

#### Scenario: Environment line and title

- **GIVEN** the panel header at 1440
- **WHEN** it is measured
- **THEN** the `<header>` SHALL be **760 × 55.75** with `display: flex; flex-wrap: wrap;
  gap: 12px 24px; align-items: flex-end; justify-content: space-between; margin-bottom: 20px`
- **AND** the environment line SHALL be **12.5 / 18.75** mono `#7dd3fc`, `margin: 0 0 4px`, carrying the
  reference's *kind* of copy (a deployment environment and a region, e.g. "prod · eu-west-1")
- **AND** the `h1` SHALL be **22 / 33**, weight **600**, `letter-spacing: −0.22px`, `#e6ebf2`, `margin: 0`

#### Scenario: A truthful four-pill tally

- **GIVEN** the four rows: one critical, one warning, one info, one resolved
- **WHEN** the tally renders
- **THEN** it SHALL be a `<ul aria-label="Summary">` holding **four** `<li>` pills in the order
  **critical, warning, info, resolved**, each **`padding: 5px 11px`**, radius **999**,
  `border: 1px solid rgba(148,163,184,.14)`, **12.5 / 18.75**, weight **500**, `#97a3b6`, `gap: 8px`
- **AND** every count SHALL be **computed from the row data** — the sum of the four pills SHALL equal
  the number of rows, and the port SHALL NOT ship the reference's fixed "1 / 1 / 2" (defect 2)
- **AND** each pill SHALL open with a **7 × 7** pip, radius 50 %, `background: currentColor`, whose own
  `color` is its tone (`#fb7185` / `#fbbf24` / `#38bdf8` / `#34d399`), `aria-hidden="true"`
- **AND** a test SHALL assert the rendered counts against a fixture whose severities are *not*
  1 / 1 / 1 / 1, so a hard-coded tally cannot pass

#### Scenario: The tally wraps before the title does

- **GIVEN** the header at narrow widths
- **WHEN** the viewport passes **528 → 529**
- **THEN** the header SHALL measure **98.5** below and **55.75** at 529 and above (the tally drops to
  its own line — it is 300 px wide, plus a 24 px column gap, beside a 142.92 px title block)
- **AND** at **361 → 362** the tally SHALL go from **69.5** (two pill rows) to **30.75** (one row) and
  the header from **137.25** to **98.5**
- **AND** with a fourth pill the port's own thresholds SHALL move (tally ≈ 382 px) — re-measure and
  record the new numbers rather than copying the reference's 528 / 361

### Feature: The alert rows

#### Scenario: One row

- **GIVEN** any row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be `display: grid; grid-template-columns: auto 1fr auto; gap: 16px;
  align-items: start; padding: 16px 18px; border: 1px solid rgba(148,163,184,.14); border-radius: 14px;
  background: rgba(255,255,255,.025)`
- **AND** the first column SHALL be **18 px** wide because the dot is **10 × 10** with
  `margin: 7px 4px 0` — the dot's top edge sits **7 px** below the row's padding edge
- **AND** the body SHALL be the second column (**591** wide for row 1) and the action the third
  (`align-self: center`), so the action is vertically centred (**81 × 35.5** at (1000, 224.75))
- **AND** the row heights SHALL be **107.5, 107.5, 128.5, 107.5** with the reference's copy, and
  **not monotonic** down the page — only row 3's description takes two lines at 1440

#### Scenario: The critical row is the tinted one

- **GIVEN** the critical row
- **WHEN** its paint is read
- **THEN** its background image SHALL be
  `linear-gradient(90deg, rgba(251,113,133,.10), rgba(251,113,133,.02) 60%)` over
  `rgba(255,255,255,.025)`, and its border SHALL be `rgba(251,113,133,.35)`
- **AND** no other row SHALL carry a tint — warning, info and ok rows are the shared
  `rgba(255,255,255,.025)` wash behind the panel hairline
- **AND** hovering the critical row SHALL keep both (defect 3) — only `background-color` and the
  border colour may change; the rose gradient MUST survive `:hover`

#### Scenario: The severity chip

- **GIVEN** a row's chip
- **WHEN** it is measured
- **THEN** it SHALL be mono **11.5 / 17.25**, weight **500**, `letter-spacing: .46px`,
  `text-transform: uppercase`, `padding: 1px 8px`, radius **6**, ground `rgba(255,255,255,.06)`,
  ink = the row's tone, and **19.25** tall
- **AND** it SHALL sit on the same flex line box as the headline (`gap: 6px 10px`, `align-items: center`)
  and wrap **before** the headline does — the row grows to **47.75** then **70.25** as lines are added
- **AND** the headline SHALL be **15 / 22.5**, weight **600**, `#f5f8fc`; the description **14 / 21**,
  `#b3bdcc`, `margin: 4px 0 0`; the meta line mono **12 / 18**, `#97a3b6`, `margin: 8px 0 0`,
  `gap: 4px 16px` and **no separators** between its spans
- **AND** the four tones SHALL be declared explicitly — critical `#fb7185`, warning `#fbbf24`,
  info `#38bdf8`, ok `#34d399` — not inherited from a base value through an empty modifier (defect 10)

#### Scenario: The action control

- **GIVEN** a row's action
- **WHEN** it is rendered
- **THEN** it SHALL be a real **`<button type="button">`** (not an anchor — defect 1), **35.5** tall,
  `padding: 7px 12px`, radius **8**, **13 / 19.5**, weight **500**, `#e6ebf2`, `white-space: nowrap`
- **AND** its border SHALL be `1px solid rgba(148,163,184,.6)` (**3.28 : 1**, not the reference's
  `.14` at **1.27 : 1** — defect 5), and its width SHALL stay content-driven (**81 / 72 / 68 / 83**
  with the reference's copy)
- **AND** on hover its border SHALL take the row's tone and its ground `rgba(255,255,255,.05)`; on
  `:focus-visible` it SHALL draw `2px solid <tone>` at `outline-offset: 2px`

### Feature: The severity dots and motion

#### Scenario: The dot

- **GIVEN** any row's dot
- **WHEN** it is measured
- **THEN** it SHALL be **10 × 10**, `border-radius: 50%`, `background: var(--tone)`, with
  `box-shadow: 0 0 0 3px rgba(255,255,255,.04), 0 0 12px 2px var(--glow)`, and `aria-hidden="true"`
- **AND** its `::after` SHALL be a full-size, same-tone disc at `opacity: 0` that only the critical and
  warning rows animate

#### Scenario: Only two dots pulse

- **GIVEN** the page at rest
- **WHEN** the dots are sampled over time
- **THEN** the critical dot's `::after` SHALL run `cl-alert06-pulse` for **1.6 s ease-out infinite**
  and the warning dot's for **2.6 s**, both `opacity .6 → 0` and `transform: scale(1) → scale(3)`
- **AND** info and ok dots SHALL NOT animate
- **AND** the whole motion budget SHALL remain **one `@keyframes`** — no entrance, no reveal, no
  transition on the dot
- **AND** a `prefers-reduced-motion: reduce` block SHALL stop both animations and SHALL leave **both**
  critical and warning with a static ring (or neither — never the reference's asymmetric blank, defect 9)

### Feature: The row dialog

#### Scenario: An action opens a detail dialog

- **GIVEN** a row's action button
- **WHEN** it is activated by click or Enter/Space
- **THEN** a `<dialog>` SHALL open with `showModal()`, labelled by the row's headline, showing the
  severity, the full description, the meta pairs and a short timeline of that alert
- **AND** the dialog SHALL close on its own Close button and on `Escape`
- **AND** focus SHALL return to the triggering button when it closes, and the page behind SHALL NOT
  scroll while it is open
- **AND** the rows themselves SHALL remain static content — no acknowledge state, no dismissal, no
  auto-dismiss timers

### Feature: Type and faces

#### Scenario: Two variable cuts

- **GIVEN** the type
- **WHEN** the faces are checked
- **THEN** the body SHALL be **Inter** at weights 400 / 500 / 600 / 700, loaded from Google Fonts
  (`css2?family=Inter:wght@400;500;600;700` → **200**) or self-hosted
- **AND** the environment line, the chips and the meta lines SHALL be **JetBrains Mono** at 400 / 500
  (`css2?family=JetBrains+Mono:wght@400;500` → **200**)
- **AND** the port SHALL NOT declare a mono weight above 500 (the reference never does; 700 there is
  synthesised) and SHALL NOT introduce a third face

### Feature: Responsiveness and overflow

#### Scenario: The ≤560 layout change

- **GIVEN** the viewport crossing **560 → 561**
- **WHEN** the panel is measured
- **THEN** at **≤560** the row SHALL become `grid-template-columns: auto 1fr` with `gap: 12px`,
  `padding: 14px`, and the action SHALL move to `grid-column: 2; justify-self: start` **under** the body
- **AND** the panel padding SHALL shrink from `24px` to `18px 14px`
- **AND** the panel SHALL grow from **738** at 561 to **831.75** at 560 — each card is *taller* in the
  two-column layout (**172** vs **175.75 / 128.5 / 149.5 / 128.5**) while the page as a whole shrinks,
  and that inversion SHALL be reproduced rather than smoothed
- **AND** a test SHALL assert the action's `grid-column` at 560 and at 561

#### Scenario: No horizontal overflow

- **GIVEN** the port at 300, 304, 320, 360, 375, 390, 414, 480, 528, 529, 560, 561, 619, 696, 744,
  768, 842, 1024 and 1440
- **WHEN** `window.scrollTo(300, 0)` runs at each width
- **THEN** `window.scrollX` SHALL stay **0** and `body.scrollWidth` SHALL equal `body.clientWidth`
- **AND** the vertical document height SHALL be **900** at ≥561 and SHALL grow monotonically below it
  (**910** at 560, **1409** at 300)

#### Scenario: Chips and meta wrap, nothing clips

- **GIVEN** a row at 320
- **WHEN** the row is measured
- **THEN** the chip and headline SHALL stack (**70.25** row height) and the meta line SHALL wrap to
  three rows (**62**) rather than clip
- **AND** no element SHALL be `overflow: hidden` on the text paths, and no `text-overflow: ellipsis`
  SHALL be introduced

### Feature: Semantics, links and repo integration

#### Scenario: No dead fragments

- **GIVEN** the rendered page
- **WHEN** every `href` is inspected
- **THEN** there SHALL be **no `href="#"`** and **no fragment that does not resolve to an id on the page**
- **AND** the only anchors SHALL be the footer's Component Dock link (external) — the four row actions
  are buttons

#### Scenario: Repo wiring

- **GIVEN** the app folder
- **WHEN** it is inspected
- **THEN** `apps/beaconry` SHALL exist with package `@free-react-templates/beaconry`,
  `public/CNAME` = `beaconry.free.componentdock.com` and `"homepage"` =
  `https://beaconry.free.componentdock.com`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"
- **AND** **no app file** SHALL name ColorLib, the source slug or the source's copy verbatim
- **AND** `TEMPLATES.md` SHALL gain the `Alert 06` row as the **sixth** entry of `## Bootstrap Alerts (12)`,
  inserted between `## Bootstrap Accordions` and `## Bootstrap Buttons`, using the accordion grammar
  `[colorlib] · [beaconry] · ![preview]`

## Adapting to the repo (deltas — read before writing code)

| reference                                                        | port                                                                                        |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` — **2** guard groups             | **drop entirely.** Tailwind preflight already normalises; `all: revert` would undo the app's base styles |
| `--cl-alert06-*` custom properties + `.cl-alert06__*` names       | `@theme` tokens (`--color-ground`, `--color-panel-top`, `--color-panel-bottom`, `--color-hairline`, `--color-ink`, `--color-muted`, `--color-name`, `--color-desc`, `--color-env`, `--color-critical`, `--color-warning`, `--color-info`, `--color-ok`, `--color-wash`, `--color-chip`) + components `AlertPanel`, `PanelHeader`, `SeverityTally`, `AlertRow`, `SeverityDot`, `RowAction`, `AlertDialog`, `PageFooter` |
| `content-box` panel with `max-width: 760px`                       | keep `max-w-[760px]` **with `box-sizing: content-box`** (or `max-w-[810px]` with `border-box` and document why) — 50 px decides every child measurement |
| grid rows with `auto 1fr auto` at ≥561 and `auto 1fr` at ≤560     | one Tailwind grid with a `max-[560px]:` variant; keep the explicit `18px` dot column (dot 10 + `mx-1` + `mt-[7px]`) |
| `background:` shorthand in `:hover` (kills the critical gradient) | hover changes **`background-color` only** — never the shorthand, never `bg-*` utilities that reset the image |
| four tones via a base custom property + an empty `--info` modifier | one explicit tone map in TS (`critical`, `warning`, `info`, `ok` → tone, wash, border, glow) and no empty class |
| three hard-coded tally pills                                      | tally derived from the row array; four pills; a fixture that proves it is not hard-coded              |
| four dead `#`-fragment anchors                                    | four `<button type="button">` that open `<dialog showModal()>`; Escape + Close; focus returns to the trigger |
| `role="alert"` / `role="status"` on static rows                   | `<ul>` / `<li>`, no live-region roles                                                       |
| 12 `@font-face` (4 binaries, each duplicated per weight)           | Google Fonts `<link>` for `Inter:wght@400;500;600;700` + `JetBrains+Mono:wght@400;500` (both verified **200**) |
| dead `.cl-icon`, `__item--info` with no rule                      | neither ported; one atomic class per element                                                |
| screenshot's macOS window + chrome bar + desk shadow              | **never** adopted — the ground is `#06080d` edge to edge                                     |
| no footer at all                                                  | a quiet single-line footer on the same ground, linking Component Dock (repo rule 5)          |

Copy: paraphrase freely, but keep the *kind* of content — a deployment environment and region, a
cluster-health title, four alerts of four severities (a latency breach, a memory/capacity warning, a
maintenance notice, a completed rollout), each with an identifier line (`svc:` / `node:` / `db:` /
`by:`) and a timestamp, and one short action verb per row.

## Verification checklist

- [ ] `apps/beaconry` exists, package `@free-react-templates/beaconry`, `public/CNAME` =
      `beaconry.free.componentdock.com`, `"homepage"` = `https://beaconry.free.componentdock.com`
- [ ] `npm run verify:app beaconry` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-beaconry --type spec` is valid
- [ ] measured at 1440: panel **810 × 606.75** at (315, 88); head **55.75**; list **481**; rows
      **107.5 / 107.5 / 128.5 / 107.5**; dot **10 × 10** in an **18** column; action **35.5** tall
- [ ] panel is **content-box**: 810 outer at 1440, **`vw − 32`** from 841 down to 300
- [ ] the four tones are exact (**`#fb7185` / `#fbbf24` / `#38bdf8` / `#34d399`**) and the critical
      row alone carries the rose gradient + rose border
- [ ] hovering the critical row **keeps** its gradient and its rose border (defect 3 fixed)
- [ ] the tally holds **four** pills computed from the rows; its sum equals the row count on a
      non-uniform fixture (defect 2 fixed)
- [ ] all four actions are `<button type="button">`; **no `href="#…"` anywhere**; clicking, Enter and
      Space open the dialog; `Escape` and Close dismiss it; focus returns to the trigger
- [ ] only the critical and warning dots animate (**1.6 s** / **2.6 s**, `scale 1→3`, `opacity .6→0`);
      under `prefers-reduced-motion: reduce` both stop **and both keep a static ring**
- [ ] the action border is **`rgba(148,163,184,.6)`** (3.28 : 1) and every text pair clears AA
      (worst **5.00**: chip text on the critical chip wash)
- [ ] width ladder verified: head **55.75 ≥529** / **98.5 362–528** / **137.25 ≤361**; rows
      107.5 **≥696** (r2) and **≥744** (r4); row 3 `149.5` at 561–621; **≤560** layout switch with the
      action under the body; panel **738** at 561 vs **831.75** at 560
- [ ] no horizontal overflow at 300 / 320 / 360 / 390 / 480 / 528 / 529 / 560 / 561 / 619 / 696 / 744 /
      768 / 842 / 1024 / 1440 (`scrollX` 0, `scrollWidth === clientWidth`)
- [ ] exactly **1 heading**, **0 images**, **0 forms**, **1** external link (the footer's Component Dock)
- [ ] Inter 400 / 500 / 600 / 700 and JetBrains Mono 400 / 500 only — no third face, no mono weight > 500
- [ ] no occurrence of the source slug or the source site's name in any app file
- [ ] `TEMPLATES.md` carries the `Alert 06` row as the sixth entry of `## Bootstrap Alerts (12)`
- [ ] `curl -I https://beaconry.free.componentdock.com` → 200, `ssl_verify_result=0`
