# Template: Proofmark (Alert — a membership signup form returned with an error summary and three failing fields)

## Purpose

A **single 640 px white card on a warm grey ground**, and the whole document is that card: **step 1 of a
two-step coworking membership signup**, rendered **as if the form had just come back from the server with
three problems**.

The card stacks in this order: a 14 px muted step line (*"Step 1 of 2 · Your details"*), a 32 px / 800
title, a two-line muted intro, a **160.69 px error-summary box** (3 px red border, `#fff5f6` wash, a 22 px
circle-`!` icon, a 19 px / 800 count line, and three underlined red links), then the form — **Full name**,
**Work email**, **Password** (with a hint above the input), and a **terms checkbox** — and a dark green
submit button with a hard 3 px shadow.

Three of the four fields are **failing**: each failing field is a grid that gains a **4 px red left rule and
16 px left padding**, so its label, input and message all shift 20 px right, and its input's `2px` ink
border turns red. The one valid field (Full name) stays flush left with a black border. That indent is the
design's whole visual signature — a port that "tidies" it into a red input border alone loses the layout.

Everything is **Public Sans** (400 / 500 / 600 / 700 / 800), one face, no second family, no serif. The
script is **3,809 B of vanilla JS**: it validates on submit, **rebuilds** the summary list from the failing
fields, focuses the summary, and on a clean submit swaps the summary for a **success banner** (6 px brand
left bar, `#e9f4ef` wash, "Thanks, {first name}. Your details are saved. …"). Only motion is the button's
`:active` 2 px press, with one `prefers-reduced-motion` override.

- **Source slug:** `alert-07`
- **ColorLib page:** https://colorlib.com/wp/template/alert-07/ — **HTTP 200, 113,695 B**, `<title>`
  `Alert V07 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V07"**, meta description *"A sign-up
  form for a coworking space shown after a failed submit, with an error summary at the top. Free download,
  no jQuery or plugins."*, `datePublished` / `dateModified` **2026-09-25T14:53:45+00:00**, claims *"the
  download is 229 KB"* (measured **234,103 B = 228.6 KiB** ✓), and its related grid links **six of its
  siblings** (the family runs to twelve). This is the **design name the naming audit reads**: ColorLib
  "Alert V07".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-07/ — **HTTP 200,
  4,491 B**, `<title>` `Alert V07 | Colorlib`, `lang="en"`, **one** stylesheet, **one** theme `<script>`.
  The slug-only path `theme/alert-07/` is **404 (9 B)**; `theme/bb/alert-07/` is **404 (9 B)**; same
  `bootstrap/` prefix ladder as the six earlier variants of this family.
- **Design category:** Alert (a **post-submit error summary** attached to a form — the only variant in the
  family where the alert is a *validation result* rather than a message about the page). **Seventh** of the
  **`alert` snippet family** (**12** variants) in the **214 snippet variants** of `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/proofmark`, package
  `@free-react-templates/proofmark`, CNAME `proofmark.free.componentdock.com`.

**What this design is, and what it is not.** The family so far: **noticeboard** a static severity ladder,
**allclear** a dismiss/restore list, **fieldguide** admonitions inside prose with no script,
**banderole** a page-level announcement bar, **snapback** a file list with two actionable bars,
**beaconry** a dark cluster-health panel of four simultaneous alerts. `alert-07` is the first variant that
is **a form**, where the alert is **derived state**: the summary is a *function of which fields fail*, every
failing field is marked twice (a left rule on the row, a red border on the control), and the summary must be
**arithmetically true** — `"There are 3 problems"` with exactly three links, `"There is 1 problem"` with one.

**The seven things a careless port flattens** (each measured here, expanded below):

- **The card is `content-box`.** `max-width: 560px` measures **640 outer** (40 px padding each side, no
  border) at every viewport ≥ **800** — a `border-box` port with `max-w-[560px]` is **80 px narrow** and
  every child measurement drifts. Between **658** and **799** the outer width is `560 + 2 × clamp(22px, 5vw,
  40px)` and keeps growing (625.78 → 640); below 658 it is exactly **`vw − 32`**.
- **The error indent is 20 px of real layout.** A failing `.field` gets `padding-left: 16px` **plus** a
  4 px left rule, so label, hint, input and message all narrow from **560 → 540**. The row does not just
  change colour; it moves.
- **The reference's summary is stale.** Correcting a field clears its error and its red rule, but the
  summary keeps all three links and the count **"There are 3 problems"** — measured: after typing a valid
  email the list still holds three items. The port derives it.
- **Zero transitions, zero keyframes.** The entire motion budget is `.submit:active { transform:
  translateY(2px); box-shadow: 0 1px 0 #0f3328 }` and one `@media (prefers-reduced-motion: reduce)` that
  removes the transform. Nothing else moves — do not add fades to the summary or the success banner.
- **The focus ring is amber `#ffbf47` at 1.64 : 1 on white.** The input survives only because its focus
  style also paints a **2 px inset ink ring** (16.9 : 1); the summary, the success banner, the button, the
  checkbox and the house-rules link have the amber outline alone and fail **WCAG 1.4.11**.
- **The success state keeps the form and dead-ends.** The banner says *"Next, choose a membership plan"*
  and the step line says *"Step 1 of 2"*, but there is no second step anywhere — and editing a field after
  success leaves "Your details are saved" on screen.
- **`#house-rules` is a dead fragment** — the label links it, no element carries the id. The only other
  fragments (`#cl-alert07-email`, `#cl-alert07-password`, `#cl-alert07-terms`) are intercepted by the
  script and never navigate.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,903** rows, **3,159** lines on `285079e0e`), so this
design comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist
never recorded. `alert-07` is one of the **214 snippet variants in 19 families**; the 42 standalone designs
in that gap are all prepped. Families are worked **in family order, then variant number** — the card family
(20) is **closed**, the alert family is in progress (noticeboard, allclear, fieldguide, banderole,
snapback, beaconry prepped; **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **seventh** entry of
a section that does not exist yet. It belongs **between `## Bootstrap Accordions (20)` (line 639) and
`## Bootstrap Buttons (20)` (line 663)** — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 07** — [colorlib](https://colorlib.com/wp/template/alert-07/) · [proofmark](https://proofmark.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-07.jpg)
```

Row-grammar warning, measured on main `285079e0e`: `## Bootstrap Accordions` (the section immediately above)
uses `[colorlib] · [app] · ![preview]` — preview **last**; `## Bootstrap Buttons` mixes both orders. Use the
**accordion** form (preview last) and re-read the surrounding lines **immediately before pushing** — two
implementer streams write this file.

**The name.** `proofmark` — one lowercase word (the margin mark a proofreader sets beside an error: exactly
what a 4 px red rule beside a bad field is), and it matches the family's closed-single-word pattern
(noticeboard, allclear, fieldguide, banderole, snapback, beaconry). Verified free on main `285079e0e`:
`git grep -il proofmark origin/main` → **0 files**; no `apps/proofmark`; no
`openspec/specs/template-proofmark`; no bold name in `TEMPLATES.md`; and the ColorLib catalogue URLs
`colorlib.com/wp/template/proofmark/`, `preview.colorlib.com/theme/proofmark/` and
`preview.colorlib.com/theme/bootstrap/proofmark/` all **404**.

Rejected on measurement: **`errata`** (the obvious name for an error list) — it already appears in
`openspec/specs/template-endpaper/spec.md:88` as a reserved-free alternative, so the zero-substring rule
rules it out; `redraft` / `erratal` are still free (`git grep -il` → 0) if a later variant needs one. Also
free the same run: `redline` (4 files — substring hit, rejected), `signoff` (4 files, rejected),
`annotate` (20 files, rejected). Do **not** reuse `noticeboard`, `allclear`, `fieldguide`, `banderole`,
`snapback` or `beaconry`, nor the card family's twenty taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 4,491 B** live (`4,288 B` inside the archive), `<title>` "Alert V07 \| Colorlib", `lang="en"`, **one** stylesheet, **1** `<script>` (the snippet — no host gtag on this page) |
| preview path      | **`theme/bootstrap/alert-07/`**; `theme/alert-07/` **404** (9 B), `theme/bb/alert-07/` **404** (9 B)                      |
| stylesheet        | `css/style.css?v=2e919584`, **10,415 B**, **414** lines, sha256 `e98509508ef714aae88fbd544c55f6ace345722eff10c57f52efcd38e36df226` |
| script            | `js/snippet.js?v=c54f2a1d`, **3,809 B**, sha256 `17cc5458394cfe949816b17f70012421054fbe6e3acae3013fd60a19aa51ebab`; one IIFE, 105 lines, no framework |
| archive           | `preview.colorlib.com/downloads/free/alert-07.zip`, **200, 234,103 B** (= 228.6 KiB ✓ the page's "229 KB"), **18 entries**: 4 dirs + `index.html` 4,288 B + `css/style.css` 10,415 B + `js/snippet.js` 3,809 B + `README.md` 1,262 B + **10 `woff2`** |
| live ↔ archive    | CSS **and** JS **identical sha256**; the two HTML files differ **only** in the `<head>` (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, the two `?v=` queries) → **live preview verified; the archive is its un-versioned twin** |
| README            | lists `index.html`, `css/style.css`, `js/snippet.js`, `fonts/` and **`images/  its images`** — **there is no `images/` directory** in the archive (defect 8) |
| fonts             | **10** `@font-face`, only **2 distinct binaries**: Public Sans latin **26,636 B** sha256 `c1b6da516e0062e9c2f341b3a51dd2d621d946da72f06c6cfe05fd9d2dd8622d`, latin-ext **18,372 B** sha256 `1c8a26c0ed4312dacc36670714794c9f4b4a0972ccb45f2936646bd8d444d5f8` — each duplicated at **400 / 500 / 600 / 700 / 800** |
| type proof        | one byte-identical binary per subset across five declarations, yet the **advance widths differ** at 32 px for "Join Oakline Coworking": 400 → **342**, 500 → **348**, 600 → **347**, 700 → **352**, 800 → **358**; 300 clamps to **342** and 900 clamps to **358** ⇒ **one variable cut, five pinned instances** (each `@font-face` declares a single weight, so the axis is set from the descriptor). **600 is 1 px narrower than 500** — a real, sub-percent metric quirk; do not "correct" it |
| classes           | **19** in the markup, **19** styled (`grep` finds a rule for every one) — the **only** dead rule is `.cl-icon` (defect 7), the **seventh** sibling in a row carrying that leftover |
| custom properties | **5**: `--cl-alert07-ink: #1b1d1f`, `--cl-alert07-muted: #555b61`, `--cl-alert07-error: #c0182e`, `--cl-alert07-focus: #ffbf47`, `--cl-alert07-brand: #1f5c4a` |
| CSS anatomy       | **10** `@font-face` + 2 `:where(html) … { all: revert }` guard groups (~46 lines of framework reset) + **43** design rule blocks; **1** `@media` (`prefers-reduced-motion: reduce`), **0** `@keyframes`, **0** `transition` declarations, **0** `animation`, **0** `@supports`, **0** container queries — the only layout unit is `clamp()` |
| controls          | **4 `<input>`** (3 text-ish + 1 checkbox), **1 `<button type="submit">`**, **4 `<a>`** (3 summary links + the house-rules link), **1 `<svg>`** (the summary icon), **0 `<img>` |
| headings          | **1 `h1`** (the card title) and **1 `h2`** (the error-summary title) — no `h3`–`h6`                                     |
| landmarks         | `<main class="cl-alert07-demo">` (unlabelled) → `<section aria-labelledby="cl-alert07-title">`; the form is a real `<form novalidate>` |
| live regions      | `role="alert"` on the summary (**visible at load**, defect 3), `role="status"` on the empty success div (`hidden`)          |
| ids / fragments   | **11** ids; **4** fragments — three resolve (`email`, `password`, `terms`), **`#house-rules` is dead** (defect 6)            |
| document height   | **1074** at 1440 × 900 (scrolls 174 px); **988** at 300 × 900; **940** at 320; **900** from 333 up (the wrapper's `min-height: 100vh` is the floor); **908** in the success state at 1440 |
| screenshot        | `https://colorlib.com/wp/wp-content/uploads/sites/2/alert-07.jpg`, **27,665 B**, **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it — and it is a **macOS browser mock-up** (defect 9). `alert-07-free-template.jpg` and `alert-07-featured.jpg` are **404** |

## Page arithmetic — one content-box card, one 20 px indent

Measured at 1440 × 900 with the real faces loaded (the archive copy, whose CSS/JS hash identically to live).

| box                       | x     | y       | w      | h        |
| ------------------------- | ----- | ------- | ------ | -------- |
| `main.cl-alert07-demo`    | 0     | 0       | 1440   | 1073.73  |
| `section.cl-alert07`      | 400   | 72      | **640**| **929.73** |
| `__step`                  | 440   | 112     | 560    | 21       |
| `__title`                 | 440   | 139     | 560    | 36.8     |
| `__intro`                 | 440   | 185.8   | 560    | 48       |
| `__summary`               | 440   | 257.8   | 560    | **160.69** |
| `__sum-title`             | 463   | 278.8   | 514    | 24.69    |
| `__sum-list`              | 463   | 313.48  | 514    | 80       |
| `form.cl-alert07__form`   | 440   | 446.48  | 560    | **515.25** |
| field 1 (name, valid)     | 440   | 446.48  | 560    | **80**   |
| field 2 (email, failing)  | 440   | 548.48  | 560    | **108.5** |
| field 3 (password, failing)| 440  | 678.98  | 560    | **136.25** |
| field 4 (terms, failing)  | 440   | 837.23  | 560    | **52.5** |
| `__submit`                | 440   | 911.73  | **237**| **50**   |

The sums the port must preserve (each is a stack, not a setting):

- **Card:** `80 (padding) + 21 + 6 + 36.8 + (10 + 48 + 24) + 160.69 + 28 + 515.25 = 929.74`.
- **Summary:** `3 + 18 + 24.69 + 10 + 80 + 4 + 18 + 3 = 160.69` — the trailing **4** is the last `<li>`'s
  own `margin-bottom` collapsing out of the list.
- **Field (valid):** `24 (label) + 6 (gap) + 50 (input) = 80`.
- **Field (failing, no hint):** `24 + 6 + 50 + 6 + 22.5 (message) = 108.5`.
- **Field (failing, with hint):** `24 + 6 + 21.75 (hint, net of its −2/+2 margins) + 6 + 50 + 6 + 22.5 = 136.25`.
- **Checkbox field:** `max(24, 24) + 6 + 22.5 = 52.5` — the message spans `grid-column: 1 / -1`.
- **Form:** `80 + 22 + 108.5 + 22 + 136.25 + 22 + 52.5 + 22 + 50 = 515.25` (a `grid` with `gap: 22`).
- **Failing field inner width:** `560 − 16 (padding) − 4 (rule) = 540`; the label sits at **x 460**, the
  input at **460 × 540**, and the checkbox field's label at **496** (`460 + 24 + 12` column gap).
- **Success state:** the banner is **560 × 80** at the summary's own slot (`16 + 20` padding, 2 lines of
  `24`), the card is **763.55**, and the document is **908** at 1440 × 900.

State transitions measured end to end (this is the behaviour to port, not a guess):

1. **Load** — summary visible, **3** items, `"There are 3 problems with your details"`; failing fields 2, 3,
   4 carry `has-error` + `aria-invalid="true"`; field 1 is clean; nothing is focused (`activeElement` =
   `BODY`).
2. **Click summary link 1** — the handler `preventDefault`s, scrolls the field wrapper to `block: center`,
   then focuses `#cl-alert07-email` with `preventScroll: true`; the URL does **not** change.
3. **Type a valid email** — that field's error clears, `aria-invalid` is removed, the red rule disappears,
   the card shrinks to **901.23** — but the summary still reads **"There are 3 problems"** with three links
   (**defect 1**).
4. **Submit with only the name empty** — the list is rebuilt to **one** item, the count flips to the
   singular **"There is 1 problem with your details"**, and the summary receives focus (card **816.73**).
5. **Submit clean** — the summary is hidden, the banner appears with
   `"Thanks, Marta. Your details are saved. Next, choose a membership plan."` (**first name only**), the
   banner takes focus (card **763.55**, document **908**).
6. **Edit any field after success** — the banner stays exactly as it was (**defect 2**).

## Design tokens — five inks, two washes, one amber

| role                     | value                | where                                                                 |
| ------------------------ | -------------------- | --------------------------------------------------------------------- |
| ink                      | `#1b1d1f`            | card text, input border, `--cl-alert07-ink`                            |
| muted                    | `#555b61`            | step line, intro, hint, `--cl-alert07-muted`                           |
| error                    | `#c0182e`            | summary border (3 px), message text, failing field rule (4 px), failing input border, summary links |
| error hover              | `#9d0f22`            | `.sum-list a:hover` (plus `text-decoration-thickness: 2px`)            |
| error wash               | `#fff5f6`            | summary background                                                    |
| focus                    | `#ffbf47`            | every focus ring (`--cl-alert07-focus`)                                |
| brand                    | `#1f5c4a`            | submit ground, success bar (6 px), `accent-color` of the checkbox      |
| brand hover              | `#17493a`            | `.submit:hover`                                                       |
| brand press              | `#0f3328`            | `.submit` hard shadow `0 3px 0` → `0 1px 0` while pressed              |
| brand ink                | `#123a2f`            | success text                                                         |
| brand wash               | `#e9f4ef`            | success background                                                    |
| paper                    | `#ffffff`            | the card                                                             |
| ground                   | `#f3f1ec`            | `body`                                                               |
| hairline                 | `#e0ddd4`            | the card's first shadow, `0 1px 0`                                    |
| card shadow              | `0 1px 0 #e0ddd4, 0 20px 40px -30px rgba(27,29,31,.35)` | `.cl-alert07`             |

Radii: card **6**, summary **6**, input **4**, button **4**, checkbox native. Type: **Public Sans** only —
step `14 / 600`, title `clamp(26px, 5vw, 32px) / 800` with `letter-spacing: -.02em` and `line-height: 1.15`,
intro `16 / 400`, sum-title `19 / 800` (`line-height: 1.3`), summary link `16 / 600`, label `16 / 700`
(the checkbox's label is **500**), hint `14.5 / 400`, message `15 / 700` (`line-height: 1.5`), input
`16 / 400`, button `16 / 700`; card `line-height: 1.5`.

Fixed metrics: card padding **40** (`clamp(22px, 5vw, 40px)`), wrapper padding `clamp(24px, 6vw, 72px) 16px`,
form `gap: 22`, field `gap: 6`, input `padding: 11px 12px` + `2px` border, button `padding: 13px 22px`,
summary `padding: 18px 20px` + `3px` border, message `padding-left: 16px` + `4px` rule, checkbox
`24 × 24` with a `12px` column gap.

## The width ladder (1 px sweep, 300 → 820; every value measured)

`outer = min(560, vw − 32 − 2p) + 2p` where `p = clamp(22px, 5vw, 40px)`; padding is **22** at ≤ 440,
`5vw` from 441 to 799, **40** at ≥ 800.

| vw      | card outer | card padding | title px | title lines | document |
| ------- | ---------: | -----------: | -------: | ----------: | -------: |
| 300     | 268.00     | 22           | 26       | 2           | 988      |
| 320     | 288.00     | 22           | 26       | 2           | 940      |
| 351     | 319.00     | 22           | 26       | **2**       | 900      |
| 352     | 320.00     | 22           | 26       | **1**       | 900      |
| 390     | 358.00     | 22           | 26       | 1           | 900      |
| 440     | 408.00     | 22           | 26       | 1           | 900      |
| 560     | 528.00     | 28           | 28       | 1           | 900      |
| 640     | 608.00     | 32           | 32       | 1           | 900      |
| 657     | 625.00     | 32.85        | 32       | 1           | 900      |
| 658     | 625.78     | 32.90        | 32       | 1           | 900      |
| 672     | 627.19     | 33.60        | 32       | 1           | 900      |
| 768     | 636.78     | 38.40        | 32       | 1           | 900      |
| 800     | **640.00** | 40           | 32       | 1           | 900      |
| 1024    | 640.00     | 40           | 32       | 1           | 1074     |
| 1440    | 640.00     | 40           | 32       | 1           | 1074     |

Three facts to keep: the outer width is **not a plateau** — it rises 1 px per 1 px of viewport until **658**
(the point where the 560 px content cap bites) and then keeps rising *with the padding* to **640 at 800**;
the **title wrap flips between 351 and 352** (2 lines → 1) and drives a 30 px document step; and there is
**no horizontal overflow at any width** (`window.scrollTo(200, 0)` leaves `scrollX` **0** at 300, 320, 360,
390, 440, 560, 640, 768, 820 — `body.scrollWidth === clientWidth` at all of them).

## Contrast (WCAG 2.x, computed from the shipped hexes)

| pair                                          | ratio     | verdict |
| --------------------------------------------- | --------: | ------- |
| ink `#1b1d1f` on paper `#fff`                  | **16.91** | AA/AAA  |
| muted `#555b61` on paper                       | **6.87**  | AA/AAA  |
| muted on ground `#f3f1ec`                      | **6.09**  | AA/AAA  |
| error `#c0182e` on paper (message 15 / 700)    | **6.16**  | AA/AAA  |
| error on summary wash `#fff5f6` (links)        | **5.76**  | AA/AAA  |
| error on ground                                | **5.45**  | AA      |
| success `#123a2f` on `#e9f4ef`                 | **11.16** | AA/AAA  |
| brand `#1f5c4a` on paper (house-rules link)    | **7.81**  | AA/AAA  |
| white on brand (button)                        | **7.81**  | AA/AAA  |
| white on brand hover `#17493a`                 | **10.24** | AA/AAA  |
| **focus amber `#ffbf47` on paper**             | **1.64**  | **fails 1.4.11 (3 : 1)** |
| focus amber on summary wash                    | **1.54**  | fails 1.4.11 |
| focus amber on success wash `#e9f4ef`          | **1.46**  | fails 1.4.11 |
| focus amber on ink (summary-link block)        | **10.30** | passes  |
| focus amber on brand (button edge)             | **4.76**  | passes  |
| input border `#1b1d1f` on paper                | **16.91** | passes  |
| failing input border `#c0182e` on paper        | **6.16**  | passes  |
| card paper on ground (the card's own edge)     | **1.13**  | decorative only — the `0 1px 0 #e0ddd4` hairline is the visible edge |

**Every text pair in this design passes AA; the one real failure is non-text contrast on the focus
indicator** (defect 5) — and only the input escapes it, because `.input:focus` adds
`box-shadow: inset 0 0 0 2px #1b1d1f`. The summary links escape it too, via the amber **background block**.

## Defects found in the reference (fix in the port; do not reproduce)

1. **The summary does not reconcile with the fields.** `setFieldState` clears a field's own error on input,
   but the summary's count and links are only rebuilt on the *next* submit. Measured: a valid email typed
   over the failing one leaves `"There are 3 problems with your details"` and three links pointing at three
   fields, one of which is now valid. **Port:** derive the summary from the *currently* failing fields on
   every change, and hide it when none fail.
2. **The success banner survives edits.** After a clean submit, typing in any field leaves
   `"Thanks, Marta. Your details are saved."` on screen while the form is being changed (measured: banner
   still visible and still focused-away after `fill('#…-name', 'Marta O')`). **Port:** clear the banner on
   the first subsequent edit.
3. **`role="alert"` on a summary that is present at load.** The reference ships the post-failure state, so
   an assertive live region announces three problems before the user has done anything. **Port:** the
   summary carries `role="alert"` only when it appears **as the result of a submit**; the initial
   (reference) state renders it as a labelled `role="region"`. Keep the programmatic focus on submit.
4. **Success double-announces.** The banner is `role="status"` (polite) **and** gets `.focus()` — two
   announcements of the same sentence. **Port:** focus it (`tabindex="-1"`) and drop the role, or keep the
   role and do not focus; do not do both.
5. **The focus ring fails 1.4.11 on white** (1.64 : 1, table above) on the summary, the banner, the submit,
   the checkbox and the house-rules link. **Port:** keep `#ffbf47` but add an **ink** component — e.g.
   `outline: 3px solid #ffbf47; outline-offset: 2px; box-shadow: 0 0 0 2px #1b1d1f` — so the indicator has
   a 16.91 : 1 edge against the control and a 10.30 : 1 edge against the amber.
6. **`#house-rules` is a dead fragment** — the terms label links it, no element has the id, and the script
   does not intercept it, so the click is a silent no-op. **Port:** a `<button type="button">` styled as the
   link (same underline, brand colour, focus treatment) that opens a native `<dialog>` "House rules" with
   the three rules and a Close button; `Escape` closes, focus returns to the trigger.
7. **Dead CSS:** `.cl-icon` (`height: 1em; width: auto; fill: currentColor`) styles nothing in this markup —
   the seventh consecutive sibling in this family to carry it. Do not port it.
8. **The README advertises an `images/` directory** that the archive does not contain (the zip has
   `index.html`, `css/`, `js/`, `fonts/`, `README.md` only). Nothing in the DOM uses an image.
9. **The screenshot is a macOS browser mock-up** — 1200 × 972, traffic lights, a `preview.colorlib.com`
   URL bar, a grey desk and a drop shadow, with the page rendered inside it. Its *content* is an honest
   capture of the live error state (word for word), but the frame is **never** adopted: the recreation's
   ground is `#f3f1ec` edge to edge.

Two further reference facts that are **not** defects but must not be "fixed" either: the password field
ships a literal 7-character demo value (the port starts with an **empty** password that still fails the
`min10` rule — same error state, same measurements, no shipped credential), and the five declared weights
over two variable binaries give a 600 that measures **1 px narrower** than 500 (a sub-percent metric quirk
of the instance set).

## Requirements

### Feature: The card skeleton and its box

#### Scenario: One card, one ground, no chrome

- **GIVEN** the `proofmark` app at 1440 × 900
- **WHEN** the document is read top to bottom
- **THEN** the order SHALL be: **`<main>` wrapper → one `<section aria-labelledby>` → step line → `h1` →
  intro → error summary (or success banner) → `<form>` → footer**
- **AND** the page SHALL contain **no nav, no hero, no bands, no second card** — the only surface is the
  white card on `#f3f1ec`
- **AND** the wrapper SHALL centre it with `display: flex; justify-content: center; align-items:
  flex-start`, `box-sizing: border-box`, `min-height: 100vh` and
  `padding: clamp(24px, 6vw, 72px) 16px` (**72** at ≥ 1200, **24** at ≤ 400)

#### Scenario: The card is content-box and must be measured as such

- **GIVEN** the card at 1440
- **WHEN** its box is measured
- **THEN** it SHALL be **640 × 929.73** at (400, 72) — `width: 100%`, `max-width: 560px`,
  `box-sizing: content-box`, `padding: 40px`, **no border**
- **AND** its surface SHALL be `#fff`, radius **6**, `color: #1b1d1f`, `line-height: 1.5`, and its shadow
  `0 1px 0 #e0ddd4, 0 20px 40px -30px rgba(27,29,31,.35)`
- **AND** every *descendant* SHALL be `border-box` (the reference sets it on `.cl-alert07 *` only) — the
  card's own box is the only content-box in the tree
- **AND** the card's padding SHALL be `clamp(22px, 5vw, 40px)`: **22** at ≤ 440, `5vw` from 441 to 799,
  **40** at ≥ 800
- **AND** a `border-box` port with `max-w-[560px]` (80 px narrow) SHALL be treated as a fidelity failure

### Feature: The header

#### Scenario: Step line, title and intro

- **GIVEN** the card at 1440
- **WHEN** the three header blocks are measured
- **THEN** the step line SHALL be **560 × 21** at (440, 112), `14 / 600`, `#555b61`, `margin: 0 0 6px`, and
  its copy SHALL keep the reference's *kind* — a step indicator plus a short step name separated by `·`
- **AND** the `h1` SHALL be **560 × 36.8** at (440, 139), `font-size: clamp(26px, 5vw, 32px)`, weight
  **800**, `line-height: 1.15`, `letter-spacing: -.02em` (**−0.64px** at 32), `margin: 0`
- **AND** the intro SHALL be **560 × 48** (two lines) at (440, 185.8), `16 / 24`, `#555b61`,
  `margin: 10px 0 24px`
- **AND** the `h1` SHALL be a *membership signup claim for an invented workspace* — the port SHALL NOT reuse
  the reference's brand name, and SHALL NOT name ColorLib anywhere

#### Scenario: The title wraps once, between 351 and 352

- **GIVEN** the viewport sweeping 300 → 820 one pixel at a time
- **WHEN** `getBoundingClientRect()` on the `h1` is read at each width
- **THEN** it SHALL measure **59.78** (two lines) at **≤ 351** and **29.89** (one line) at **≥ 352** with the
  reference's copy, and the document SHALL step **940 → 900** across that boundary (at the 900 px viewport)
- **AND** the port's own title text SHALL move that threshold — re-measure and record it rather than copying
  351 / 352
- **AND** the `h1` font-size SHALL be **26** at ≤ 520, `5vw` from 521 to 639, **32** at ≥ 640

### Feature: The error summary

#### Scenario: The summary box and its parts

- **GIVEN** the initial (returned) state at 1440
- **WHEN** the summary is measured
- **THEN** it SHALL be **560 × 160.69** at (440, 257.8): `padding: 18px 20px`, `border: 3px solid #c0182e`,
  radius **6**, `background: #fff5f6`, `margin-bottom: 28px`
- **AND** the title line SHALL be a flex row at (463, 278.8), **514 × 24.69**, `19 / 800`, `gap: 10px`,
  `margin: 0 0 10px`, holding a **22 × 22** `currentColor` circle-`!` icon (`#c0182e`) and a bold count that
  is **text**, not a heading style borrowed from somewhere else
- **AND** the list SHALL be a real `<ul>` at (463, 313.48), `514 × 80`, `padding-left: 32px`, `margin: 0`,
  with `<li>`s **482 × 24**, `margin: 4px 0` (28 px rhythm)
- **AND** each list item SHALL be a link at **16 / 600** in `#c0182e`, `text-decoration: underline`,
  `text-underline-offset: 3px`, whose `:hover` is `#9d0f22` at `text-decoration-thickness: 2px`
- **AND** its height SHALL decompose as `3 + 18 + 24.69 + 10 + 80 + 4 + 18 + 3 = 160.69`

#### Scenario: The count is arithmetic, and singular

- **GIVEN** any set of failing fields
- **WHEN** the summary renders
- **THEN** the count line SHALL read `There is 1 problem with your details` for exactly one failure and
  `There are {n} problems with your details` otherwise — the reference's own pluralisation, kept
- **AND** the number of `<li>` SHALL equal the number of failing fields **on every keystroke**, not only on
  submit (defect 1)
- **AND** when the last failure is corrected the summary SHALL be **hidden** rather than left with a stale
  count of zero or of three
- **AND** a test SHALL assert the rendered count against a fixture of **1**, **2** and **3** failures, so a
  hard-coded string cannot pass

#### Scenario: Order of announcement

- **GIVEN** the initial render
- **WHEN** the accessibility tree is read
- **THEN** the summary SHALL expose a labelled region (`aria-labelledby` → its own title) and **SHALL NOT**
  carry `role="alert"` — the returned state is page content, not an event (defect 3)
- **AND** a summary produced by a **failed submit** SHALL carry `role="alert"`, SHALL be `tabindex="-1"`, and
  SHALL receive focus after the rebuild, with the document title prefixed `Error: ` while it is visible
  (**port addition**, the standard validation-summary pattern)

### Feature: The form fields

#### Scenario: The four fields in order

- **GIVEN** the form at 1440
- **WHEN** it is measured
- **THEN** it SHALL be a `<form novalidate>` at (440, 446.48), **560 × 515.25**, `display: grid; gap: 22px`
- **AND** the fields SHALL be, in order: **Full name** (`type="text"`, `autocomplete="name"`), **Work email**
  (`type="email"`, `autocomplete="email"`), **Password** (`type="password"`,
  `autocomplete="new-password"`) and a **terms** `<input type="checkbox">` — four fields, no fifth
- **AND** every text field SHALL be `display: grid; gap: 6px` with the label first
- **AND** the password field alone SHALL carry a hint **above** its input — **540 × 21.75**,
  `14.5 / 400`, `#555b61`, `margin: -2px 0 2px`
- **AND** the checkbox field SHALL be `grid-template-columns: auto 1fr; column-gap: 12px;
  align-items: start`, with the **24 × 24** checkbox at x 460 and its label at x 496, weight **500**, and
  the message spanning `grid-column: 1 / -1`

#### Scenario: A failing field shifts 20 px and turns red

- **GIVEN** a field with a validation failure
- **WHEN** its row and control are measured
- **THEN** the row SHALL gain `padding-left: 16px` and `border-left: 4px solid #c0182e`, so its inner width
  goes **560 → 540** and every child moves **+20 px** (label x 440 → 460)
- **AND** its input SHALL keep its `2px` border width and only change colour (`#1b1d1f` → `#c0182e`), so the
  control's size never changes — **50** tall, `padding: 11px 12px`, radius **4**
- **AND** its message SHALL be a `<p>` **540 × 22.5**, `15 / 700`, `#c0182e`, `margin: 0`
- **AND** the row heights SHALL be **80** (valid), **108.5** (failing, no hint), **136.25** (failing, with
  hint) and **52.5** (the checkbox row) with the reference's copy
- **AND** clearing the failure SHALL remove the class, the rule, the indent, `aria-invalid` and the message
  in one render

#### Scenario: The checkbox

- **GIVEN** the terms row
- **WHEN** it is measured
- **THEN** the checkbox SHALL be **24 × 24** with `accent-color: #1f5c4a` (a real native control, not a
  drawn box) and its label **16 / 500**
- **AND** the label SHALL contain a link to the house rules rendered as a `<button type="button">` styled
  as a link (**16 / 400** inherited, `#1f5c4a`, `text-underline-offset: 3px`) — never a dead fragment
  (defect 6)
- **AND** the link's accessible name SHALL say where it goes, and activating it SHALL open a `<dialog>`

#### Scenario: The submit button

- **GIVEN** the button at 1440
- **WHEN** it is measured and pressed
- **THEN** it SHALL be **237 × 50** at (440, 911.73), `justify-self: start`, `padding: 13px 22px`,
  `border: 0`, radius **4**, `background: #1f5c4a`, `color: #fff`, `16 / 700`, and a hard
  `box-shadow: 0 3px 0 #0f3328`
- **AND** `:hover` SHALL be `#17493a` and `:active` SHALL be `transform: translateY(2px)` with
  `box-shadow: 0 1px 0 #0f3328`
- **AND** under `prefers-reduced-motion: reduce` the press SHALL **not** translate (the shadow may still
  change) — the reference's only motion rule

### Feature: The success banner

#### Scenario: A clean submit replaces the summary

- **GIVEN** four valid values
- **WHEN** the form is submitted
- **THEN** the summary SHALL be hidden and a banner SHALL take its slot — **560 × 80** at (440, 257.8),
  `padding: 16px 20px`, `border-left: 6px solid #1f5c4a`, `background: #e9f4ef`, `color: #123a2f`,
  `16 / 600`, `margin-bottom: 28px`, no radius
- **AND** its copy SHALL name the **first name only** (`Thanks, {first name}. Your details are saved. …`)
  and keep the reference's *kind* — a confirmation plus a pointer to the next step
- **AND** the card SHALL be **763.55** and the document **908** in that state at 1440 × 900
- **AND** the banner SHALL be focused once (`tabindex="-1"`), with **no** `role="status"` alongside it
  (defect 4)
- **AND** the step line SHALL NOT promise a step that does not exist unless the port ships it — either the
  banner's second sentence names a real in-page target or the copy is trimmed (the reference's own
  "choose a membership plan" has nowhere to go)

### Feature: Validation, focus and the state machine

#### Scenario: The four rules are the reference's

- **GIVEN** any submit
- **WHEN** the values are validated
- **THEN** the rules SHALL be: `required` (`value.trim().length > 0`), `email`
  (`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`), `min10` (`value.length >= 10`), `checked` (`el.checked`)
- **AND** validation SHALL run **only on submit**, never on mount and never on blur — a field is marked
  the first time it fails a submit, and clears as soon as a keystroke makes it valid
- **AND** the field wrapper SHALL carry `aria-invalid="true"` and `aria-describedby` pointing at the hint
  (password only) plus the message while it fails, and SHALL drop both when it passes

#### Scenario: Focus goes where the summary says

- **GIVEN** a visible summary
- **WHEN** any of its links is activated by mouse, `Enter` or `Space`
- **THEN** the page SHALL **not** navigate (no URL fragment change) and focus SHALL land on the named
  control after scrolling its row to `block: center`
- **AND** the scroll/focus pair SHALL be `scrollIntoView({ block: 'center' })` then
  `focus({ preventScroll: true })`, so the field is not scrolled twice
- **AND** after a failed submit focus SHALL move to the summary itself, and after a clean submit to the
  banner

#### Scenario: No stale results

- **GIVEN** a state that has shown a summary or a banner
- **WHEN** the user edits any field
- **THEN** the summary SHALL be recomputed immediately (count + links) and hidden at zero failures
- **AND** the banner SHALL be cleared by the first edit (defect 2)
- **AND** a test SHALL type a valid email over a failing one and assert **two** remaining list items, then
  fix both and assert the summary is gone

### Feature: Type, faces and tokens

#### Scenario: One face, five pinned weights

- **GIVEN** the built app
- **WHEN** the loaded faces are inspected
- **THEN** the only family SHALL be **Public Sans** at **400 / 500 / 600 / 700 / 800** (Google Fonts
  `css2?family=Public+Sans:wght@400;500;600;700;800&display=swap`, probed **200** with a browser UA on
  2026-10-26)
- **AND** no serif, no mono, no second sans SHALL appear anywhere in the tree
- **AND** the five weights SHALL each be used at least once (400 body/input, 500 checkbox label, 600 step +
  summary links + banner, 700 labels + messages + button, 800 title + summary count)

#### Scenario: Tokens live in `@theme`

- **GIVEN** `apps/proofmark/src/index.css`
- **WHEN** it is read
- **THEN** it SHALL declare the palette above as tokens (`ink`, `muted`, `error`, `error-hover`,
  `error-wash`, `focus`, `brand`, `brand-hover`, `brand-press`, `brand-ink`, `brand-wash`, `paper`,
  `ground`, `hairline`) and every component SHALL consume them through Tailwind classes + `cn()`
- **AND** **no** app file SHALL contain `colorlib`, the source slug, or a reference comment naming it —
  provenance lives in this spec and in `TEMPLATES.md` only
- **AND** the sheet's `:where(html) … { all: revert }` framework guards and the `--cl-alert07-*` names SHALL
  **not** be ported

### Feature: Responsiveness and overflow

#### Scenario: The width ladder

- **GIVEN** the port at 300, 320, 351, 352, 390, 440, 560, 640, 657, 658, 672, 768, 800, 1024 and 1440
- **WHEN** the card is measured
- **THEN** its outer width SHALL equal `min(560, vw − 32 − 2p) + 2p` with `p = clamp(22px, 5vw, 40px)` —
  **268** at 300, **358** at 390, **528** at 560, **608** at 640, **625.78** at 658, **636.78** at 768,
  **640** at 800 and above
- **AND** the card SHALL keep growing **past** 658 (the 560 px content cap) because the padding grows — the
  outer width is not a plateau and SHALL NOT be clamped to 640 below 800

#### Scenario: No horizontal overflow

- **GIVEN** the port at 300, 320, 360, 390, 440, 560, 640, 768 and 820
- **WHEN** `window.scrollTo(200, 0)` runs at each width
- **THEN** `window.scrollX` SHALL stay **0** and `body.scrollWidth` SHALL equal `body.clientWidth`
- **AND** the document height SHALL be **988** at 300, **940** at 320 and **900** from 333 up (in the initial
  state, at a 900 px viewport), and **1074** at 1440

#### Scenario: Nothing is clipped at 300

- **GIVEN** the card at 300
- **WHEN** the failing checkbox row is measured
- **THEN** the label SHALL wrap instead of clipping (inner width **216** at that width), the message SHALL
  stay on its own line spanning both columns, and no `overflow: hidden` or `ellipsis` SHALL be introduced
  on any text path

### Feature: Semantics and repo integration

#### Scenario: No dead fragments, one dialog

- **GIVEN** the rendered page
- **WHEN** every interactive element is inspected
- **THEN** there SHALL be **no `href="#"`** and **no fragment that does not resolve to an id on the page**
- **AND** the only `<a>` elements SHALL be the footer's Component Dock link and, if the port adds one, the
  banner's pointer — everything in-page SHALL be a `<button type="button">`
- **AND** the house-rules `<dialog>` SHALL be a native `<dialog>` opened with `showModal()`, closable with
  `Escape` and its Close button, returning focus to the trigger

#### Scenario: Repo wiring

- **GIVEN** the app folder
- **WHEN** it is inspected
- **THEN** `apps/proofmark` SHALL exist with package `@free-react-templates/proofmark`, `public/CNAME` =
  `proofmark.free.componentdock.com` and `"homepage"` = `https://proofmark.free.componentdock.com`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"
- **AND** `vite.config.ts` SHALL register `injectUiSource()`, `package.json` SHALL declare
  `"react": "latest"`, and the lockfile SHALL register the workspace after a root `npm install`
- **AND** `TEMPLATES.md` SHALL gain the `Alert 07` row as the **seventh** entry of `## Bootstrap Alerts (12)`,
  inserted between `## Bootstrap Accordions` and `## Bootstrap Buttons`, using the accordion grammar
  `[colorlib] · [proofmark] · ![preview]`

## Adapting to the repo (deltas — read before writing code)

| reference                                                              | port                                                                                                        |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` — 2 guard groups, ~46 lines            | **drop entirely** — Tailwind preflight already normalises; `all: revert` would undo the app's base styles     |
| `--cl-alert07-*` custom properties + `.cl-alert07__*` BEM names          | `@theme` tokens (table above) + components `SignupCard`, `CardHeader`, `ErrorSummary`, `SuccessBanner`, `FieldRow`, `TextField`, `CheckboxField`, `SubmitButton`, `HouseRulesDialog`, `SiteFooter` |
| `content-box` card with `max-width: 560px`                               | keep `max-w-[560px]` **with `box-sizing: content-box`** (or `max-w-[640px]` with `border-box` and a comment saying why) — 80 px decides every child measurement |
| `document.querySelector` + `data-cl-alert07-rule` string rules            | a typed field descriptor array (`{ id, name, label, type, rule, message }`) and a `rules: Record<Rule, (v) => boolean>` map; no DOM queries |
| `el.closest('.cl-alert07__field').classList.toggle('has-error')`          | derived render state — `errors: Record<FieldId, boolean>` → `hasError` class from props                      |
| summary rebuilt only on submit (stale)                                    | summary **derived** from `errors` every render; hidden at zero failures                                      |
| banner left on screen after an edit                                       | cleared in the first change handler                                                                          |
| `role="alert"` at load                                                    | `role={announced ? 'alert' : undefined}` — `announced` becomes true only after a failed submit               |
| `role="status"` **and** `.focus()` on success                             | `tabindex="-1"` + `.focus()` only                                                                            |
| `#house-rules` dead fragment                                              | `<button type="button">` + native `<dialog showModal()>`; `Escape` + Close; focus returns to the trigger     |
| 3 px amber focus ring at 1.64 : 1                                         | amber ring **plus** a 2 px ink ring (`box-shadow: 0 0 0 2px #1b1d1f`) so 1.4.11 passes                       |
| 10 `@font-face` over 2 variable binaries                                  | one Google Fonts `<link>` for `Public+Sans:wght@400;500;600;700;800` (verified 200)                          |
| dead `.cl-icon`                                                           | not ported                                                                                                   |
| a literal 7-char password shipped in the markup                           | empty password that still fails `min10` — same error state, no shipped credential                           |
| screenshot's macOS window, URL bar, desk, drop shadow                     | **never** adopted — the ground is `#f3f1ec` edge to edge                                                     |
| no footer at all                                                          | a quiet single-line footer under the card's content, linking Component Dock (repo rule 5)                    |

Copy: keep the *kind* of content — a step indicator, a membership-signup title for an **invented** workspace,
a two-line intro about desks and meeting rooms in a named set of spaces, three field errors with the
reference's exact wording patterns (`Enter an email address in the format name@example.com`, `Password must
be at least 10 characters`, `Accept the house rules to continue`), a singular/plural summary count, and a
success sentence naming the first name.

## Verification checklist

- [ ] `apps/proofmark` exists, package `@free-react-templates/proofmark`, `public/CNAME` =
      `proofmark.free.componentdock.com`, `"homepage"` = `https://proofmark.free.componentdock.com`
- [ ] `npm run verify:app proofmark` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-proofmark --type spec` is valid
- [ ] measured at 1440: card **640 × 929.73** at (400, 72); summary **160.69**; form **515.25**; rows
      **80 / 108.5 / 136.25 / 52.5**; button **237 × 50**; document **1074**
- [ ] the card is **`content-box`**: **640** outer at 1440, **`vw − 32`** down to 658, then `560 + 2p`
      rising to **640** at 800
- [ ] the five tokens are exact — ink `#1b1d1f`, muted `#555b61`, error `#c0182e`, brand `#1f5c4a`, focus
      `#ffbf47` — plus washes `#fff5f6` / `#e9f4ef` and ground `#f3f1ec`
- [ ] a failing field is **20 px indented with a 4 px red rule** (inner width 560 → 540) and its input only
      changes **border colour**, never size
- [ ] the summary count is **derived**: 1 → singular, 3 → plural, and it shrinks to 2 then disappears as
      fields are corrected (defect 1 fixed), with a fixture test that would fail a hard-coded string
- [ ] the success banner is cleared by the first edit (defect 2 fixed) and is focused exactly once
      (defect 4 fixed)
- [ ] the summary is **not** a live region on the initial render and **is** `role="alert"` after a failed
      submit, with the title prefixed `Error: ` (defect 3 fixed + port addition)
- [ ] every focus indicator has an **ink** component (16.91 : 1 against the control, 10.30 : 1 against the
      amber) — the reference's 1.64 : 1 ring alone fails 1.4.11 (defect 5)
- [ ] the house-rules trigger is a button opening a native dialog; `Escape` and Close dismiss it; focus
      returns; **no `href="#…"` anywhere** (defect 6)
- [ ] Public Sans **400 / 500 / 600 / 700 / 800** only — no serif, no mono, no third family
- [ ] the only motion is the button's `:active` 2 px press, disabled under `prefers-reduced-motion: reduce`
      — **no** fades, no keyframes, no transitions
- [ ] width ladder verified: card 268 @ 300, 358 @ 390, 528 @ 560, 608 @ 640, 625.78 @ 658, 636.78 @ 768,
      640 @ 800+; title **2 lines ≤ 351**, **1 line ≥ 352** (re-measured for the port's own copy)
- [ ] no horizontal overflow at 300 / 320 / 360 / 390 / 440 / 560 / 640 / 768 / 820 (`scrollX` 0,
      `scrollWidth === clientWidth`); document **988** @ 300, **940** @ 320, **900** from 333
- [ ] exactly **1 `h1`**, **1 `h2`**, **4 form controls**, **1 submit**, **0 images**, one external link
      (Component Dock)
- [ ] no occurrence of `colorlib`, the source slug or the source brand name in any app file
- [ ] `TEMPLATES.md` carries the `Alert 07` row as the seventh entry of `## Bootstrap Alerts (12)`
- [ ] `curl -I https://proofmark.free.componentdock.com` → 200, `ssl_verify_result=0`
