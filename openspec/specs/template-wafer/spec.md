# Template: Wafer (Alert — a bottom-pinned cookie consent bar over a one-screen bakery page)

## Purpose

**A cream bakery page with a floating consent card welded to the bottom of the viewport.** The page is the
backdrop — logo bar, one big two-line headline, a lede, three price tiles, a one-line footer — and the design is
the **bar on top of it**: a `980px` rounded card, `22px` radius, pinned `16px` off the bottom edge, carrying a
cookie glyph in a `52px` tinted tile, a bold `17px` title, a three-line paragraph with one inline link, and three
buttons where only one is dark. Press **Settings** and the same card unfolds downward into a **four-row category
panel** with native-checkbox switches (the first locked on), closed by a single **Save my choices** button.

This is the alert family's **last variant** and its only **page-level consent surface**: the alert is not a
message *about* something on the page, it is a **demand for a decision** that sits above the page, hides on
choice, and comes back from a footer link. It is also the family's second real state machine (after
`underrule`): 77 lines of vanilla JavaScript drive a disclosure, four switches, a message grammar that reads
back the choice in words, and focus movement on every transition.

What is *not* here: no nav, no images, no icons beyond two inline SVGs, no scroll animations, no cards to hover,
no second call to action. The whole interaction budget is one `0.4s` entry animation, `150–200ms` on button and
switch colour/knob, a `180°` chevron flip, and one `role="status"` line that reports the result.

- **Source slug:** `alert-12`
- **ColorLib page:** https://colorlib.com/wp/template/alert-12/ — **HTTP 200, 113,194 B**, `<title>`
  `Alert V12 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V12"**, meta description *"A floating
  consent bar pinned to the bottom of a bakery website, with Settings, Necessary only and Accept all buttons.
  Free download, no jQuery or plugins."*, `datePublished` **2026-09-25T14:53:55+00:00**, claims *"the download
  is 204 KB"* (measured **208,718 B = 203.8 KiB** ✓), and lists the behaviours verbatim: *"Settings disclosure
  with aria-expanded and Escape to close"*, *"Category switches built on native checkboxes with role=\"switch\""*,
  *"Rejecting is as easy as accepting"*, *"Focus moves to the reopen button after a choice"*, *"Scrolls inside
  itself on short screens"*; its description adds *"Any choice closes the bar, confirms the choice in a status
  message and moves focus to a Cookie settings link that reopens it; nothing is tracked or stored."* Its
  "Similar Bootstrap Alert Templates" grid says **View all 12**. This is the **design name the naming audit
  reads**: ColorLib "Alert V12".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-12/ — **HTTP 200,
  5,885 B**, `<title>` `Alert V12 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=e022e34d`) and
  **one** snippet `<script>` (`js/snippet.js?v=1fd80c97`). The slug-only `theme/alert-12/` is **404 (9 B)** and
  `theme/bb/alert-12/` is **404 (9 B)**: the same `bootstrap/` prefix ladder as the eleven earlier variants.
- **Design category:** Alert (**consent surface** — a page-level decision bar with a disclosure panel; the first
  variant whose alert is *above* the page rather than in it). **Twelfth and final** of the **`alert` snippet
  family** (**12** variants) in the **214 snippet variants** of `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/wafer`, package
  `@free-react-templates/wafer`, CNAME `wafer.free.componentdock.com`.

**What this design is, and what it is not.** The family so far: **noticeboard** a static severity ladder,
**allclear** a dismiss/restore list, **fieldguide** admonitions inside prose with no script, **banderole** a
page-level announcement bar, **snapback** a file list with two actionable bars, **beaconry** a dark
cluster-health panel, **proofmark** a form *returned* with an error summary, **mayfly** self-dismissing
toasts, **steadystate** a status page that never changes, **punnet** a four-tile notification wall,
**underrule** a form whose verdict is a property of each input. This one is the family's **first true overlay**:
it owns no layout space, it covers the page, it **hides** and is **reopened**, and its four tones are four
*categories of permission*, not four severities. It is also the only variant where the bar grows — the collapsed
card is `134.75px` tall and the expanded one is **`408.5px`** — so the art is in the grid that adds a second
region without adding a second card.

**The eight things a careless port flattens** (each measured below):

- **The page reserves exactly the collapsed bar, never the panel.** `.cl-alert12-site` carries
  `padding-bottom: 220px` (`300px` at ≤480) while the expanded bar is **408.5px** tall at 1440 and **783.8px** at
  320 — with the panel open the card covers the price tiles and the footer. Nothing scrolls it clear.
- **`1.5px` borders do not exist.** `.cl-alert12__btn` declares `border: 1.5px` and Chrome computes **`1px`**
  (measured `1px solid rgb(220,203,180)`, and the button height `45.75 = 11 + 21.75 + 11 + 2`). Declare `1px`.
- **The bar is `position: fixed` + `transform: translateX(-50%)`, so the entry animation must animate
  `translate(-50%, 24px)`.** A port that animates `translateY` alone snaps the card `490px` to the right for one
  frame; the source's `@keyframes` carries the `-50%` **inside** the `from` transform for exactly this reason.
- **The panel is three columns at 1440, not one.** `repeat(auto-fit, minmax(min(100%, 280px), 1fr))` with
  `gap: 0 32px` inside `934px` of content gives **`290px × 3`** — four rows become three on the first line and
  one alone on the second. It is `2 × 395` at 900 and a single column only below **620**.
- **The switch is a native checkbox with `role="switch"`, not a `<div>` with a click handler.** Its 20×20 knob is
  a `::after` moved by `transform: translateX(20px)`; its three colours are `#8a7a68` (off), `#2f7d4a` (on) and
  `#7fa58b` (disabled) — and the **disabled rule comes after `:checked`**, so the locked "Necessary" switch reads
  sage, not green.
- **Nothing is stored.** There is no `localStorage`, no cookie, no fetch — the message says *"Cookie choices
  saved"* and a reload resets every switch. The page's own copy admits *"nothing is tracked or stored"*.
- **The status message lives on the page, not in the bar.** `role="status"` is a `<p>` inside `<main>`, hidden by
  `:empty`, and it is written **after** the bar hides and focus has already moved to the footer button.
- **Escape only works with focus inside the card.** The `keydown` listener is on `.cl-alert12`; tab to the footer
  reopen button with the panel open and Escape does nothing (measured: panel stays open, `aria-expanded` stays
  `"true"`).

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` on main `d18805ad7` is fully `[x]` — **`- [ ]` count 0**, **`- [~]` count 0**, **2,907** rows — so
this design comes from `docs/catalog-coverage.md`: designs on colorlib.com's own listing that the checklist never
recorded. `alert-12` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that gap
are all prepped. Families are worked **in family order, then variant number** — the card family (20) is
**closed**, and this run **closes the alert family** (twelve prepped, **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **twelfth** entry of a
section that does not exist. It belongs **between `## Bootstrap Accordions (20)` (line 639, its last row
`Accordion 20` on line 661) and `## Bootstrap Buttons (20)` (line 663)**, i.e. inserted on line **662** after the
blank line that follows `Accordion 20` — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 12** — [colorlib](https://colorlib.com/wp/template/alert-12/) · [wafer](https://wafer.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-12.jpg)
```

Row-grammar warning, measured on main `d18805ad7`: `## Bootstrap Accordions` uses **both** orders —
`[colorlib] · [app] · ![preview]` (rows 01/02/14/16/19) and `[colorlib] · ![preview] · [app]` (15/17/18/20) — and
`## Bootstrap Buttons` uses preview-in-the-middle. Use the **preview-last** form shown above and re-read the
surrounding lines **immediately before pushing** — two implementer streams write this file.

**The name.** `wafer` — one lowercase word for the thin biscuit a *cookie* is; it names the design's subject
(the consent card is itself a cookie) without touching the bakery brand, and it matches the family's
closed-single-word pattern (noticeboard, allclear, fieldguide, banderole, snapback, beaconry, proofmark,
mayfly, steadystate, punnet, underrule). Verified free on main `d18805ad7`: `git grep -il wafer origin/main` →
**0 files**; no `apps/wafer`; no `openspec/specs/template-wafer`; no bold name in `TEMPLATES.md`; and the
ColorLib catalogue URLs `colorlib.com/wp/template/wafer/` (**404, 63,534 B** shell) and
`preview.colorlib.com/theme/wafer/` (**404, 9 B**) both miss.

Rejected on measurement: **`biscuit`** (an existing `openspec/specs/template-biscuit` — taken), **`shortbread`**
(1 repo hit), and also checked **free**: `crumbline`, `optline`, `consentline`. Do **not** reuse `noticeboard`,
`allclear`, `fieldguide`, `banderole`, `snapback`, `beaconry`, `proofmark`, `mayfly`, `steadystate`, `punnet`,
`underrule`, nor the card family's twenty taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium)

| what             | value                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML     | **200, 5,885 B** live (**5,682 B** in the archive), `<title>` "Alert V12 \| Colorlib", `lang="en"`, **one** stylesheet, **one** snippet `<script>`                                                        |
| preview path     | **`theme/bootstrap/alert-12/`** (200); `theme/alert-12/` **404** (9 B), `theme/bb/alert-12/` **404** (9 B)                                                                                                 |
| stylesheet       | `css/style.css?v=e022e34d`, **12,467 B**, **574** lines, sha256 `205d65049941bd644c295be22be26562f5b2f1ecdec0ffc8b742736c169c223c`                                                                         |
| script           | `js/snippet.js?v=1fd80c97`, **200, 2,623 B**, **77** lines, sha256 `dc096fd03da6a9bf824dafa59cb66faffe935a97178a5bfbe45406b461fe7645`; all inline in one IIFE, no jQuery, no framework                     |
| archive          | `preview.colorlib.com/downloads/free/alert-12.zip`, **200, 208,718 B** (= 203.8 KiB ✓ the page's "204 KB"), sha256 `6125247cc3f06fdded69befd64fadd0c63dea6fc13bf817a2b4dc15f9a901948`, **18 entries** = 4 dirs + **14 files** |
| archive contents | `index.html` **5,682 B**, `css/style.css` **12,467 B**, `js/snippet.js` **2,623 B**, `README.md` **1,262 B**, `fonts/` **10 × woff2** — **no `images/`** although the README lists one                          |
| live ↔ archive   | CSS **identical sha256**, JS **identical sha256**; the two HTML files differ **only in the `<head>`** (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, and the `?v=` query strings) → **live preview verified; the archive is its un-versioned twin** |
| fonts (declared) | **8** `@font-face`, all `Manrope`, weights **400 / 600 / 700 / 800** × two subsets (`latin`, `latin-ext`), self-hosted `../fonts/*.woff2`, `font-display: swap`                                          |
| fonts (binaries) | **10** files but only **2** distinct binaries: every `latin` weight **24,576 B** sha256 `e310b55a…`, every `latin-ext` weight **15,240 B** sha256 `ce093b34…` ⇒ **one variable cut per subset** — and the **`500` pair is shipped but never declared** (dead weight, 39,816 B) |
| classes          | **32** classes in the markup; **31** with at least one rule; `.cl-alert12__copy` is a grid child with **no rule at all**; **2 dead rules** — `.cl-icon` (the **twelfth consecutive** sibling in this family to carry it) and `.is-expanded` (toggled by the script, styled nowhere) |
| custom properties| **4** on `.cl-alert12` (`--cl-alert12-ink`, `-muted`, `-accent`, `-line`), **4** consumers (bar text, bar body, inline link, borders)                                                                       |
| CSS anatomy      | **574** lines; a `:where(html) … { all: revert }` guard block (14 selector groups) to survive a Bootstrap host page, **8** `@font-face`, ~30 style rules, **3** `@media` (**2** width + `prefers-reduced-motion`), **1** `@keyframes`, **5** `transition` declarations, **2** gradients (`radial` ground + none elsewhere), **30** colour literals (**20** distinct) + **4** `rgba()` |
| controls         | **1** `<section class="cl-alert12">`, **4** `<input type="checkbox" role="switch">` (1 `checked disabled`), **0** `<form>`, **0** `<select>`, **5** `<button type="button">`, **2** inline `<svg>`, **0** `<img>`, **1** `<a>` (`#cookie-policy` — **dangling**) |
| headings         | **1** `<h1>` — "Sourdough, pastries and slow mornings." (60 px) and **1** `<h2>` — the bar title (17 px)                                                                                                    |
| landmarks        | `<div class="cl-alert12-site">` → `<header>` + `<main>` + `<footer>`, then the `<section>` bar **after** the site in DOM order (so the bar is visually on top but keyboard-last)                            |
| live regions     | **1** — `p.cl-alert12-site__saved[role="status"]`, empty until a choice, hidden by `:empty`                                                                                                                |
| ids              | **11** — `cl-alert12`, `cl-alert12-title`, `cl-alert12-panel`, then `<cat>` and `<cat>-desc` for `necessary` / `prefs` / `analytics` / `marketing`; **1** fragment (`#cookie-policy`), **1** dangling anchor |
| document height  | **900** at 1440 × 900 (no scroll — the page is exactly one screen); **900** down to **390**; **910** at 360 and **938** at 320 (the `padding-bottom: 300px` at ≤480 outgrows the content). `scrollX` **0** and `scrollWidth === clientWidth` at every width swept |
| screenshot       | `https://colorlib.com/wp/wp-content/uploads/sites/2/alert-12.jpg`, **51,113 B**, **1200 × 972**, a real **progressive JPEG** (`file` → `JPEG image data`), and a **macOS browser mock-up** (traffic lights, a drop shadow, a `preview.colorlib.com` URL pill) whose content matches the live render 1:1                                                                            |

## Page arithmetic — one 900 px screen, one 980 px card on top of it

Measured at **1440 × 900** (Chromium, DPR 1), after the entry animation settled.

| element                | box                                                                    |
| ---------------------- | ---------------------------------------------------------------------- |
| `.cl-alert12-site`     | **1440 × 900** at (0, 0); `padding-bottom: 220px`; ground `#fbf6ee` + radial glow |
| `.__bar` (site header) | **1100 × 54** at (170, 0); padding `24px 24px 0`; `gap: 4px 16px`      |
| `.__logo`              | **132.17 × 30** at (194, 24) — 22 / 800 / `-.02em`                     |
| `.__tag`               | **223 × 19** at (1023, 32) — 14 / 400 / `#6e5a45`                      |
| `.__main`              | **1100 × 607** at (170, 54); padding `110px 24px 40px`                 |
| `.__kicker`            | **1052 × 22** at (194, 164) — 16 / 700 / `#9a5412`; `margin: 0 0 12px` |
| `.__title` (`h1`)      | **720 × 126** at (194, 198) — **60 / 63 / -.035em** = **2 lines**      |
| `.__text`              | **520 × 55.78** at (194, 342) — 18 / 1.55; `margin: 18px 0 0`          |
| `.__menu` (`ul`)       | **1052 × 77** at (194, 429.78) — 3 × **228** tiles, `gap: 12px`        |
| `.__menu li`           | **228 × 77** — padding `16px 18px`, radius **16**, `1px #eadfce`, `rgba(255,255,255,.7)` |
| `.__price`             | **190 × 21** at (213, 468.78) — 15 / 600 / `#7a3f0c`                   |
| `.__saved`             | **0 × 0** (empty ⇒ `display: none`)                                    |
| `.__foot`              | **1100 × 19** at (170, 661); padding `0 24px`                          |
| `.__link` (footer)     | **109 × 19** at (1137, 661) — 14 / 700 / `#7a3f0c`, underlined         |
| `.cl-alert12` (bar)    | **980 × 134.75** at (**230**, **749.25**) ⇒ bottom edge **884** = `900 − 16`; radius **22**, `1px #eadfce`, `#fffdf9` |
| `.__main` (bar)        | **978 × 132.75** at (231, 750.25); padding `20px 22px`; grid **52 / 451 / 391**, gap `18px 20px` |
| `.__icon`              | **52 × 52** at (253, 790.63) — radius **16**, `#fbeedb`, **30 × 30** cookie SVG inside |
| `.__title` (`h2`)      | **451 × 25.5** at (325, 770.25) — 17 / 800 / 1.5                       |
| `.__text`              | **451 × 65.25** at (325, 797.75) — 14.5 / 1.5 = **3 lines**            |
| `.__actions`           | **391 × 45.75** at (796, 793.75) — `Settings` **120**, `Necessary only` **145**, `Accept all` **110**, gap **8** |

The height identities, in one line each:

```
bar (collapsed) = 20 + max(52, 25.5 + 2 + 65.25, 45.75) + 20 + 2 = 134.75
button          = 11 + 21.75 (14.5 × 1.5) + 11 + 2 × 1 border   = 45.75
copy column     = 978 − 44 (padding) − 52 (icon) − 20 (gap) − 20 (gap) − 391 (actions) = 451
panel (open)    = 4 + 4 × 93.5 (rows incl. their 1px rules) + 16 + 45.75 + 20 = 273.75
bar (open)      = 134.75 + 273.75 = 408.5
```

## Design tokens — a cream ground, one ink, one accent, one amber focus

| token              | value                                                | used for                                                        |
| ------------------ | ---------------------------------------------------- | --------------------------------------------------------------- |
| ground             | `#fbf6ee`                                            | page background                                                 |
| ground glow        | `radial-gradient(45% 50% at 85% 20%, #f6dfbf 0%, transparent 70%)` | the only "image" on the page — a warm light from the top right |
| ink                | `#2a1d10`                                            | `h1`, logo, bar title, ghost button text, primary button **background** |
| body text          | `#5b4a38`                                            | the hero lede                                                   |
| muted              | `#6e5a45` (page) / `#5f4e3c` (bar)                   | header tag, footer, bar body, category descriptions             |
| accent             | `#7a3f0c`                                            | price, kicker-adjacent links, footer "Cookie settings", inline "cookie policy" |
| kicker             | `#9a5412`                                            | the 16 / 700 "Fresh from 7am" line                              |
| saved              | `#1f6b3b`                                            | the `role="status"` confirmation (only green in the design)     |
| card               | `#fffdf9`                                            | the consent bar; `1px solid #eadfce`, radius **22**             |
| line               | `#eadfce`                                            | bar border, panel top rule, row rules, price-tile border        |
| tile               | `rgba(255,255,255,.7)` on `#fbf6ee`                  | the three price tiles                                           |
| icon tile          | `#fbeedb`                                            | the 52 px cookie plate                                          |
| cookie             | fill `#e9b872`, stroke `#7a4a12` at `1.8`            | the only illustration on the page (30 × 30, four dots)          |
| ghost button       | border `#dccbb4`, hover border `#7a3f0c` + bg `#fbf1e3` | Settings / Necessary only                                     |
| primary button     | `#2a1d10`, hover `#4a3521`, text `#fff`              | Accept all                                                      |
| focus              | `outline: 3px solid #d9822b`, offset `2`             | every button and switch (`#7a3f0c` `2px` on the two inline links) |
| switch off         | `#8a7a68`                                            | an unchecked category                                           |
| switch on          | `#2f7d4a`                                            | a checked category                                              |
| switch locked      | `#7fa58b`, `cursor: not-allowed`                     | "Necessary" — always checked, never editable                    |
| knob               | `20px`, `#fff`, `0 1px 3px rgba(0,0,0,.25)`, `translateX(20px)` when on | the switch's `::after`                        |

Type — **one family, four weights** (Manrope 400 / 600 / 700 / 800; the shipped `500` is never declared):

| role            | size / weight / line-height | notes                                          |
| --------------- | --------------------------- | ---------------------------------------------- |
| `h1`            | **clamp(34, 6vw, 60) / 800 / 1.05** | `letter-spacing: -.035em` (`-2.1px` at 60), `max-width: 720` |
| hero lede       | 18 / 400 / 1.55             | `#5b4a38`, `max-width: 520`                    |
| kicker          | 16 / **700** / normal       | `#9a5412`                                      |
| logo            | 22 / **800** / normal       | `letter-spacing: -.02em`                       |
| header tag      | 14 / 400                    | `#6e5a45`                                      |
| price tile item | 16 / **700**                | inherits ink                                   |
| price           | 15 / **600**                | `#7a3f0c`                                      |
| footer          | 14 / 400 (link 700)         | `#6e5a45` / `#7a3f0c`, `underline-offset: 3px`  |
| bar title       | 17 / **800** / 1.5          | ink                                            |
| bar body        | **14.5 / 400 / 1.5**        | `#5f4e3c`; the inline link is 700 + underlined  |
| button          | **14.5 / 700 / 1.5**        | `white-space: nowrap`                          |
| category name   | 16 / **700** / 1.5          | `<label for>` — clicking it toggles the switch  |
| category desc   | **13.5 / 400 / 1.5**        | `#5f4e3c`                                      |

Spacing rhythm: site padding `24px` inline; hero block `clamp(40px, 9vw, 110px) 24px 40px`; kicker→title **12**;
title→lede **18**; lede→tiles **32**; tile gap **12**; bar padding `20px 22px`; bar grid gap `18px 20px`;
title→body **2**; button gap **8**; panel padding `4px 22px 20px`; row padding `14px 0`; panel-foot padding-top
**16**.

Radii: bar **22** (`18` at ≤480), icon tile **16** (`14` at ≤480), buttons **12**, price tiles **16**, switch
**999** + **50%** knob, focus rings **2**, nothing else.

Motion: bar entry `cl-alert12-up .4s cubic-bezier(.2,.9,.3,1)` (**opacity 0 → 1 and `translate(-50%,24px)` →
`translate(-50%,0)`**); button `background-color`/`border-color` `.15s`; chevron `transform .2s`; switch
`background-color .2s` and knob `transform .2s`. All of it `none` under `prefers-reduced-motion`.

## The width ladder (measured 1 px-per-step, 320 → 1440)

Two width media queries (**860**, **480**) plus two clamps drive everything:

```
hero heading      = clamp(34px, 6vw, 60px)        → 34 at ≤567, 6vw between, 60 at ≥1000
hero block padding= clamp(40px, 9vw, 110px)       → 40 at ≤445, 9vw between, 110 at ≥1222
bar width         = min(980, viewport − 32)       → 980 at ≥1012; viewport − 32 below
bar width ≤480    = viewport − 16
```

Collapsed bar (the number a port must reproduce):

| viewport  | bar width | bar height | grid columns                | document |
| --------- | --------- | ---------- | --------------------------- | -------- |
| 1440–1024 | **980**   | **134.75** | `52 / 451 / 391`            | 900      |
| 900       | 868       | 156.5      | `52 / 339 / 391`            | 900      |
| 861       | 829       | **182**    | `52 / 300 / 391` (tightest)  | 900      |
| 860       | 828       | 176.8      | `52 / 710` + actions row     | 900      |
| 768       | 736       | 176.8      | `52 / 618` + actions row     | 900      |
| 640       | 608       | 198.5      | `52 / 490` + actions row     | 900      |
| 552       | 520       | 198.5      | `52 / 402` + actions row     | 900      |
| 481       | 449       | 220.3      | `52 / 331` + actions row     | 900      |
| 480       | 464       | 208.3      | `44 / 372` + actions row     | 900      |
| 430       | 414       | **262**    | `44 / 322` + **two action rows** | 900  |
| 390       | 374       | 287.5      | `44 / 282` + two action rows | 900      |
| 360       | 344       | 309.3      | `44 / 252` + two action rows | **910**  |
| 320       | 304       | **331**    | `44 / 212` + two action rows | **938**  |

Expanded bar (Settings open) — the panel is what changes shape:

| viewport | list columns          | row width | bar height |
| -------- | --------------------- | --------- | ---------- |
| 1440     | `290 290 290` (**3**) | 290       | **408.5**  |
| 1100     | `290 290 290` (3)     | 290       | 408.5      |
| 900      | `395 395` (**2**)     | 395       | 389.8      |
| 760      | `325 325` (2)         | 325       | 450.5      |
| 620      | `542` (**1**)         | 542       | **578.3**  |
| 480      | `430` (1)             | 430       | 580        |
| 390      | `340` (1)             | 340       | 679.5      |
| 320      | `270` (1)             | 270       | **783.8**  |

Short screens (the claim *"Scrolls inside itself on short screens"* is true): at **320 × 568** the bar clamps to
`max-height: calc(100vh − 32px)` = **536** and scrolls (`scrollHeight 782` vs `clientHeight 534`); at
**390 × 640** it clamps to **608** (`678` vs `606`); at **1024 × 600** the whole 408.5 fits (no inner scroll).

No horizontal overflow at any width swept (`scrollX` 0, `scrollWidth === clientWidth`).

## Contrast (WCAG 2.x, computed from the shipped hexes)

| pair                                             | ratio      | verdict |
| ------------------------------------------------ | ---------- | ------- |
| ink `#2a1d10` on card `#fffdf9`                   | **16.13**  | AAA     |
| muted `#5f4e3c` on card                           | **7.82**   | AAA     |
| accent `#7a3f0c` on card                          | **8.13**   | AAA     |
| white on primary `#2a1d10`                        | **16.38**  | AAA     |
| white on hover `#4a3521`                          | **11.52**  | AAA     |
| hero lede `#5b4a38` on ground                     | **7.87**   | AAA     |
| kicker `#9a5412` on ground                        | **5.35**   | AA      |
| header tag `#6e5a45` on ground                    | **6.08**   | AA      |
| footer link `#7a3f0c` on ground                   | **7.67**   | AAA     |
| price `#7a3f0c` on the 70 %-white tile            | **7.93**   | AAA     |
| saved `#1f6b3b` on ground                         | **6.05**   | AA      |
| switch off `#8a7a68` on card (boundary)           | **4.08**   | ≥ 3 : 1 ✓ |
| white knob on switch off                          | **4.15**   | ✓       |
| switch on `#2f7d4a` on card (boundary)            | **4.98**   | ✓       |
| white knob on switch on                           | **5.06**   | ✓       |
| focus `#d9822b` on **primary** `#2a1d10`          | **5.60**   | ✓       |
| **`#d9822b` focus ring on the card `#fffdf9`**    | **2.88**   | **fails 1.4.11** (needs 3 : 1) |
| **ghost border `#dccbb4` on card**                | **1.56**   | **fails 1.4.11** — the ghost buttons have no visible edge at rest |
| disabled switch `#7fa58b` on card                 | **2.70**   | boundary, sub-3 (exempt as *disabled*, but it is also the "on" state of the locked row) |
| white knob on disabled switch                     | **2.74**   | same     |
| card border `#eadfce` on card                     | **1.30**   | decorative (the shadow carries the edge) |
| price-tile border `#eadfce` on ground             | **1.22**   | decorative |
| icon tile `#fbeedb` on card                       | **1.13**   | decorative |

Every **text** pair on the page passes AA — this is the family's fourth clean palette after steadystate,
punnet and underrule. Both failures are **boundaries**: the focus ring at **2.88 : 1** and the ghost button edge
at **1.56 : 1**. Both are fixable without moving the look: `#b3661a` gives **4.19 : 1** for the ring, and
`#a08a6d` gives **3.03 : 1** for the ghost edge.

## Behaviour — the consent state machine and the trigger matrix

77 lines, one IIFE, `initConsent()` on load. It binds four things: the Settings toggle, three
`[data-cl-alert12-choice]` buttons, `keydown` on the **bar**, and the footer reopen button.

**State.** One boolean per switch (native `checked`), plus two DOM facts: `bar.hidden` and
`panel.hidden`. `aria-expanded` is mirrored on the Settings button and on the footer reopen button. There is
**no storage** — the state dies with the page.

```js
LABELS = { necessary, preferences, analytics, marketing }
setPanel(open) → toggle.aria-expanded = String(open); panel.hidden = !open; bar.classList.toggle('is-expanded', open)
close(msg)     → bar.hidden = true; setPanel(false); reopen.aria-expanded = 'false'; reopen.focus(); saved.text = msg
```

**Trigger matrix** (measured by driving the live page):

| event                                | what happens                                                                                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| load                                 | bar visible, panel hidden, `Necessary` checked + disabled, `reopen` `aria-expanded="true"`, `saved` empty (`:empty` ⇒ `display: none`)             |
| **Settings** click                   | `aria-expanded` flips, panel unhides, chevron rotates **180°** (`matrix(-1,0,0,-1)`), focus moves to **`#cl-alert12-prefs`** (the first *enabled* switch — by hardcoded index `1`) |
| **Settings** click again             | panel hides, `aria-expanded="false"`, bar back to **134.75**                                                                                      |
| switch click / **Space**             | native toggle: `#8a7a68 → #2f7d4a`, knob `translateX(20px)`; the `<label for>` also toggles it                                                    |
| **Accept all**                       | all four `checked`; bar hides; `saved` = `"Cookie choices saved: necessary, preferences, analytics and marketing."`; focus → footer reopen         |
| **Necessary only**                   | every non-disabled switch unchecked; `saved` = `"Cookie choices saved: necessary."`; focus → footer reopen                                         |
| **Save my choices** (custom)         | keeps the current switches; `saved` joins the checked labels with `", "` and a final `" and "`; e.g. `"Cookie choices saved: necessary, preferences and analytics."`; bar hides; focus → reopen |
| **Escape** (focus inside the bar)    | panel closes, `aria-expanded="false"`, focus → Settings; the bar stays open                                                                        |
| **Escape** (focus outside the bar)   | **nothing** — the listener is on the bar, not the document (defect 3)                                                                              |
| footer **Cookie settings** click     | bar un-hides, `saved` cleared, `aria-expanded="true"`, focus → the **Settings** button (first `.cl-alert12__btn`); the panel stays closed            |
| any `input`/typing                   | nothing — there are no text fields on this page                                                                                                   |
| reload                               | everything resets: switches back to `necessary` only, bar visible again (no persistence)                                                          |

Measured tab order (bar last in DOM, so it comes after the footer button): **footer "Cookie settings" →
"cookie policy" link → Settings → Necessary only → Accept all → (body)**. The disabled switch is correctly
skipped; the panel's switches and "Save my choices" join the order once it is open.

## Defects found in the reference (fix in the port; do not reproduce)

1. **The focus ring fails 3 : 1 on everything except the dark button.** `outline: 3px solid #d9822b` measures
   **2.88 : 1** against the card `#fffdf9` (it clears 5.60 : 1 against the primary's `#2a1d10`). **Fix:** use
   `#b3661a` (**4.19 : 1**) for the ring on light surfaces, or pair the amber ring with a 1 px dark inset.
2. **The ghost buttons have no visible edge at rest.** `#dccbb4` on `#fffdf9` is **1.56 : 1**. Their boundary is
   the only thing saying "button". **Fix:** `#a08a6d` (**3.03 : 1**).
3. **Escape is bound to the bar, not the document.** With the panel open and focus on the footer reopen button,
   Escape does nothing and the panel stays open with `aria-expanded="true"` (measured). **Fix:** a document-level
   `keydown` gated on the panel being open, with focus returned to Settings.
4. **`#cookie-policy` is a dangling anchor.** `document.querySelector('#cookie-policy')` → `null`; the link is
   the only `<a>` in the bar. **Fix:** make the phrase a `<button type="button" aria-controls="…-panel"
   aria-expanded>` that opens the same disclosure (there is no policy section in the design), or render a real
   policy section with an `id`.
5. **"Cookie choices saved" without saving anything.** No `localStorage`, no cookie, no request — a reload resets
   every switch, so the message asserts persistence that does not exist. **Fix:** either persist the four flags
   (and re-hydrate the switches + `reopen` state on load, the pattern used elsewhere in this repo) or reword to
   *"Choices applied for this visit."* Pick one and make the tests assert it.
6. **`1.5px` borders render as `1px`.** Declared on `.cl-alert12__btn`, computed `1px` (button height 45.75
   confirms it). **Fix:** declare `1px`.
7. **The reserved bottom padding only ever matches the collapsed bar.** `padding-bottom: 220px` (300 at ≤480) vs
   an expanded bar of **408.5px** (1440) to **783.8px** (320): with Settings open the card covers the price tiles
   and the footer, and at 320 × 900 it starts at **y 108**. **Fix:** treat the panel as an overlay deliberately
   (it is one), and either reserve the expanded height while open or cap the panel's height with its own scroll
   and keep the page's padding at the collapsed value — but assert the page behind is reachable when the bar is
   closed.
8. **The consent surface is never announced.** It is a `<section aria-labelledby>` at the end of the DOM, shown on
   load, with no `role="dialog"`/`aria-modal`, no initial focus, and no live region — a screen-reader user gets a
   page with no hint that a decision is being asked for until they reach the last element. **Fix:** add
   `role="region"` (it is not modal — do not fake a dialog) and either move focus to the title on first render or
   announce the request once, politely, from the status region.
9. **The `necessary` switch is "on" but reads as disabled-grey-green.** `.cl-alert12__switch:disabled` comes after
   `:checked` in the sheet, so `#2f7d4a` is overridden by `#7fa58b` (**2.70 : 1** on the card) and its white knob
   is **2.74 : 1**. **Fix:** give the locked row its own `checked:disabled` colour that keeps the "on" reading
   (`#4a8f63` is 3.5 : 1 with a white knob at 3.6 : 1) and keep `cursor: not-allowed`.
10. **`.is-expanded` is toggled by the script and styled nowhere.** **Fix:** do not port the class (or give it the
    rule the script implies).
11. **`.cl-icon` is a dead rule for the twelfth variant in a row.** The two glyphs are inline SVGs with their own
    attributes. **Fix:** do not port it.
12. **`500` ships as two font files that no `@font-face` declares** (39,816 B of dead weight in a 208 KB
    download). **Fix:** request exactly **400 / 600 / 700 / 800**.
13. **The README advertises a directory that does not exist.** It lists `images/  its images`; the 14-file
    archive has none (and no `<img>` on the page). **Fix:** do not repeat the claim in the app README, which is
    also where the ColorLib provenance must **not** appear.
14. **The screenshot is a macOS browser mock-up**, not the page: traffic lights, a drop shadow and a URL pill
    around a `1200 × 972` frame on a grey ground. **Fix:** port the page, never the frame.

## Requirements

### Feature: The bakery page under the bar

#### Scenario: One screen, four bands, no navigation

- **GIVEN** the reference at `theme/bootstrap/alert-12/`
- **WHEN** the page renders at 1440 × 900
- **THEN** the document SHALL be exactly **900** tall — no scroll — made of `<header>` (logo + tag), `<main>`
  (kicker, `h1`, lede, three price tiles, status line) and `<footer>` (copyright + "Cookie settings")
- **AND** there SHALL be **no** `<nav>`, no menu, no images, and **one** `<a>`-equivalent inline link in the bar
- **AND** the ground SHALL be `#fbf6ee` with a single
  `radial-gradient(45% 50% at 85% 20%, #f6dfbf 0%, transparent 70%)` glow

#### Scenario: The hero is a two-line clamp headline

- **GIVEN** the hero block with padding `clamp(40px, 9vw, 110px) 24px 40px`
- **WHEN** it renders at 1440
- **THEN** the `h1` SHALL be **60 px / 800 / 63 px** with `letter-spacing: -.035em`, `max-width: 720`, and hold
  **2 lines** (**126 px**)
- **AND** the lede SHALL be 18 / 400 / 1.55 in `#5b4a38`, `max-width: 520` (**55.78 px**, 2 lines), with
  `margin: 18px 0 0`
- **AND** the kicker SHALL be 16 / 700 in `#9a5412` with `margin: 0 0 12px`

#### Scenario: Three price tiles, `flex: 0 1 190px` each but 228 wide

- **GIVEN** the `<ul>` menu with `display: flex; flex-wrap: wrap; gap: 12px`
- **WHEN** it renders at 1440
- **THEN** each `<li>` SHALL be **228 × 77** at `padding: 16px 18px`, `border: 1px solid #eadfce`,
  `border-radius: 16px`, `background: rgba(255,255,255,.7)`
- **AND** the item SHALL be 16 / **700** and the price 15 / **600** in `#7a3f0c`, stacked in a column
- **AND** at ≤480 each tile SHALL be `flex: 1 1 90px` with `padding: 12px` and 14 px text

#### Scenario: The footer carries the port's two obligations

- **GIVEN** the source footer is `© 2026 Crumb & Co.` plus a "Cookie settings" button
- **WHEN** the port renders it
- **THEN** the copyright SHALL be the port's own brand and the right-hand `<button>` SHALL still reopen the bar
  (`aria-controls` the bar, `aria-expanded` mirrored)
- **AND** the mandatory `https://www.componentdock.com/` ("Component Dock") link SHALL appear in a real
  `<footer>`, without adding a nav or a social row

### Feature: The consent bar shell

#### Scenario: A fixed card 16 px off the bottom edge

- **GIVEN** the bar
- **WHEN** it is visible
- **THEN** it SHALL be `position: fixed`, `left: 50%`, `bottom: 16px`, `z-index: 50`,
  `width: calc(100% - 32px)`, `max-width: 980px`, `max-height: calc(100vh - 32px)`, `overflow: auto`,
  `transform: translateX(-50%)`
- **AND** at 1440 × 900 it SHALL measure **980 × 134.75** at (**230**, **749.25**) with a bottom edge of **884**
- **AND** it SHALL carry `border: 1px solid #eadfce`, `border-radius: 22px`, `background: #fffdf9`, and
  `box-shadow: 0 30px 60px -20px rgba(60,35,10,.35), 0 2px 6px rgba(60,35,10,.06)`
- **AND** `box-sizing: border-box` SHALL apply to the bar and all its descendants

#### Scenario: Hidden means hidden

- **GIVEN** a choice has been made
- **WHEN** the bar hides
- **THEN** it SHALL be hidden via the `hidden` attribute **with** a `[hidden] { display: none }` rule (the
  element is a `<section>` and `hidden` alone loses to `display: block` in a host framework's reset)
- **AND** the panel's `[hidden]` SHALL likewise be styled

#### Scenario: The entry animation keeps the centring transform

- **GIVEN** the bar is centred with `translateX(-50%)`
- **WHEN** it animates in
- **THEN** the keyframes SHALL animate `from { opacity: 0; transform: translate(-50%, 24px) }` to the element's
  own transform — **the `-50%` must be inside the keyframe**
- **AND** under `prefers-reduced-motion: reduce` the animation SHALL be `none`

### Feature: Bar content — icon, title, body, three buttons

#### Scenario: A 52 px cookie plate and a two-part copy column

- **GIVEN** the bar's `.__main`
- **WHEN** it renders
- **THEN** it SHALL be a grid `auto 1fr auto` with `gap: 18px 20px`, `align-items: center`,
  `padding: 20px 22px` — measured columns **52 / 451 / 391** at 1440
- **AND** the icon cell SHALL be **52 × 52**, `border-radius: 16px`, `background: #fbeedb`, holding one
  **30 × 30** inline `<svg>` of a cookie (fill `#e9b872`, stroke `#7a4a12` at `1.8`, four dots), `aria-hidden`
  and `focusable="false"`
- **AND** the `<h2>` SHALL be 17 / **800** with `margin: 0`, and the body **14.5 / 400 / 1.5** in `#5f4e3c`
  with `margin: 2px 0 0`, wrapping to **3 lines** at 451 px
- **AND** the inline "cookie policy" phrase SHALL be 700 in `#7a3f0c`, underlined with
  `text-underline-offset: 3px`

#### Scenario: One dark button, two outlined, 45.75 tall

- **GIVEN** `.__actions`
- **WHEN** it renders at 1440
- **THEN** the row SHALL be `flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end` and hold three buttons of
  **120** (Settings, with a 16 × 16 chevron), **145** (Necessary only) and **110** (Accept all) — all **45.75**
  tall
- **AND** every button SHALL be `inline-flex; gap: 6px; padding: 11px 18px; border-radius: 12px; font-size:
  14.5px; font-weight: 700; white-space: nowrap` with a **`1px`** border (never `1.5px`)
- **AND** ghost buttons SHALL be `border-color: #a08a6d` (**fixed** — the source's `#dccbb4` is 1.56 : 1) with
  `background: transparent`, hover `border-color: #7a3f0c` + `background: #fbf1e3`
- **AND** the primary SHALL be `background: #2a1d10; color: #fff`, hover `#4a3521`
- **AND** every button SHALL carry `focus-visible` with an **opaque** `3px` ring that clears 3 : 1 on the card
  (**fixed**: `#b3661a`, not the source's 2.88 : 1 `#d9822b`)

#### Scenario: The chevron flips, it does not swap

- **GIVEN** the Settings button's `16 × 16` chevron
- **WHEN** `aria-expanded="true"`
- **THEN** the glyph SHALL be rotated **180°** with a `transform .2s` transition (measured
  `matrix(-1, 0, 0, -1, 0, 0)`)
- **AND** it SHALL be `aria-hidden` and `focusable="false"`

### Feature: The settings disclosure

#### Scenario: The panel is a second region of the same card

- **GIVEN** Settings is pressed
- **WHEN** the panel opens
- **THEN** it SHALL be a sibling of `.__main` inside the same bar: `padding: 4px 22px 20px`,
  `border-top: 1px solid #eadfce`
- **AND** `aria-expanded` on Settings SHALL be `"true"` and `aria-controls` SHALL point at the panel's id
- **AND** focus SHALL move to the **first enabled switch** — never a hardcoded array index
- **AND** the bar SHALL grow to **408.5** at 1440 (grid rows, no new card, no separate modal)

#### Scenario: Three columns, then two, then one

- **GIVEN** `.__list` = `grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 0 32px`
- **WHEN** the viewport is 1440
- **THEN** the list SHALL render **3 columns of 290** (four rows ⇒ 3 + 1)
- **AND** at 900 it SHALL be **2 × 395**, and a single column from **620** down (542 / 430 / 340 / 270 measured)
- **AND** each row SHALL be `flex; justify-content: space-between; gap: 16px; align-items: center;
  padding: 14px 0; border-bottom: 1px solid #eadfce` (**93.5** tall at 1440)
- **AND** the name SHALL be a `<label for>` at 16 / **700** and the description 13.5 / 400 in `#5f4e3c`

#### Scenario: One button closes the panel

- **GIVEN** `.__panel-foot` = `flex; justify-content: flex-end; padding-top: 16px`
- **WHEN** it renders
- **THEN** it SHALL hold exactly one primary button — "Save my choices" — **157 × 45.75**
- **AND** pressing it SHALL close the bar with the message grammar below

### Feature: The four category switches

#### Scenario: A native checkbox is the switch

- **GIVEN** a category row
- **WHEN** it renders
- **THEN** the control SHALL be `<input type="checkbox" role="switch">` with a `<label for>`, `46 × 26`,
  `appearance: none`, `border-radius: 999px`, and a `::after` knob of **20 × 20** at `top: 3px; left: 3px`,
  white, `border-radius: 50%`, `box-shadow: 0 1px 3px rgba(0,0,0,.25)`
- **AND** off SHALL be `#8a7a68`, on SHALL be `#2f7d4a`, and the knob SHALL move by
  `transform: translateX(20px)` — **not** by animating `left`
- **AND** clicking the label, clicking the control, and pressing **Space** SHALL all toggle it

#### Scenario: Necessary is on and locked

- **GIVEN** the first row
- **WHEN** it renders
- **THEN** its switch SHALL be `checked` and `disabled` (native, no `aria-disabled` needed) with
  `cursor: not-allowed`, and its description SHALL say it is always on
- **AND** the "Accept all"/"Necessary only" handlers SHALL skip disabled controls in both directions
- **AND** its colour SHALL still read as "on" (**fixed**: the source's `:disabled` rule overrides `:checked` and
  paints it `#7fa58b`, 2.70 : 1)

#### Scenario: Four categories, four descriptions

- **GIVEN** the port's copy
- **WHEN** the panel renders
- **THEN** the four rows SHALL be **Necessary** / **Preferences** / **Analytics** / **Marketing**, each with a
  one-sentence description wired by `aria-describedby`, and each carrying a `data-*` category key used by the
  message grammar

### Feature: Choosing, confirming and reopening

#### Scenario: Accept all

- **GIVEN** the bar is open
- **WHEN** "Accept all" is pressed
- **THEN** all four switches SHALL end up checked, the bar SHALL hide, the panel SHALL close, and the status line
  SHALL read `"Cookie choices saved: necessary, preferences, analytics and marketing."`
- **AND** focus SHALL move to the footer reopen button and its `aria-expanded` SHALL become `"false"`

#### Scenario: Necessary only — rejecting is as easy as accepting

- **GIVEN** the bar is open
- **WHEN** "Necessary only" is pressed
- **THEN** every non-disabled switch SHALL be unchecked and the status line SHALL read
  `"Cookie choices saved: necessary."`
- **AND** the two buttons SHALL be peers in the same row with the same size and weight of styling (the reject
  path is not hidden behind the accept path)

#### Scenario: Custom choices use a real list grammar

- **GIVEN** the panel is open and Preferences + Analytics are on
- **WHEN** "Save my choices" is pressed
- **THEN** the message SHALL read
  `"Cookie choices saved: necessary, preferences and analytics."`
- **AND** a single category SHALL read `"…saved: necessary."` and two SHALL read `"… saved: necessary and
  preferences."` — `", "` between all but the last, `" and "` before it

#### Scenario: Escape closes the panel, not the bar

- **GIVEN** the panel is open
- **WHEN** Escape is pressed with focus anywhere on the page
- **THEN** the panel SHALL close, `aria-expanded` SHALL become `"false"`, and focus SHALL return to Settings
- **AND** pressing Escape with the panel closed SHALL do nothing — the bar is not dismissible by keyboard

#### Scenario: The footer link reopens it

- **GIVEN** the bar is hidden
- **WHEN** "Cookie settings" is pressed
- **THEN** the bar SHALL re-appear, the status line SHALL clear, `aria-expanded` SHALL become `"true"`, and focus
  SHALL move to the Settings button
- **AND** pressing it while the bar is already open SHALL NOT close it (idempotent open)

### Feature: The status line

#### Scenario: A polite region that is empty until it matters

- **GIVEN** the confirmation `<p role="status">` in `<main>`
- **WHEN** no choice has been made
- **THEN** it SHALL render nothing at all (`:empty ⇒ display: none`) and occupy **0 × 0**
- **AND** after a choice it SHALL show the message at 700 in `#1f6b3b` with `margin: 20px 0 0`, and the page
  SHALL still be exactly **900** tall at 1440 × 900

### Feature: Motion

#### Scenario: One entrance, three micro-transitions

- **GIVEN** `prefers-reduced-motion: no-preference`
- **WHEN** the page loads and the controls are used
- **THEN** the bar SHALL enter once (`opacity` 0 → 1, `translate(-50%, 24px)` → `translate(-50%, 0)`, `.4s
  cubic-bezier(.2,.9,.3,1)`)
- **AND** buttons SHALL transition `background-color`/`border-color` over `.15s`, the chevron `transform` over
  `.2s`, and the switch `background-color` + knob `transform` over `.2s`
- **AND** under `prefers-reduced-motion: reduce` **all** of it SHALL be disabled and nothing SHALL move

### Feature: Responsiveness

#### Scenario: Two width media queries, both about the grid

- **GIVEN** viewports above 860
- **WHEN** the bar renders
- **THEN** `.__main` SHALL be `auto 1fr auto` with the actions in the third column
- **AND** at **≤860** it SHALL collapse to `auto 1fr`, the actions SHALL span `1 / -1` with
  `justify-content: stretch`, and each button SHALL take `flex: 1 1 auto`
- **AND** at **≤480** the bar SHALL be `bottom: 8px; width: calc(100% - 16px); border-radius: 18px`, its main
  `gap: 14px; padding: 16px; align-items: start`, the icon **44 × 44** at radius **14**, and the panel
  `padding: 0 16px 16px`

#### Scenario: The bar heights match the ladder

- **GIVEN** the measured ladder
- **WHEN** the port renders at 1440 / 900 / 861 / 860 / 768 / 640 / 552 / 481 / 480 / 430 / 390 / 360 / 320
- **THEN** the collapsed bar SHALL measure **134.75 / 156.5 / 182 / 176.8 / 176.8 / 198.5 / 198.5 / 220.3 /
  208.3 / 262 / 287.5 / 309.3 / 331**
- **AND** the expanded bar SHALL measure **408.5 / 389.8 / — / — / 450.5 / 578.3 / 578.3 / — / 580 / 633.8 /
  679.5 / 741.8 / 783.8** (panel 3 / 2 / 1 columns)

#### Scenario: Short screens scroll inside the card

- **GIVEN** a 568 px-tall viewport
- **WHEN** the panel is open at 320 wide
- **THEN** the bar SHALL clamp to `calc(100vh - 32px)` = **536** and scroll internally (`scrollHeight` 782 vs
  `clientHeight` 534)
- **AND** the page beneath SHALL remain reachable when the bar is closed

#### Scenario: No horizontal overflow, ever

- **GIVEN** any width from 320 to 1440
- **WHEN** the page is scrolled horizontally
- **THEN** `scrollX` SHALL be **0** and `scrollWidth` SHALL equal `clientWidth`

### Feature: Accessibility

#### Scenario: Structure

- **GIVEN** the port
- **WHEN** it renders
- **THEN** there SHALL be **1** `<h1>` (the hero) and **1** `<h2>` (the bar title) in that order, the bar SHALL be
  a `<section aria-labelledby="…-title" role="region">` (not a fake modal), and the `<header>`/`<main>`/`<footer>`
  landmarks SHALL exist
- **AND** the IDs SHALL be **11**: the bar, its title, its panel, and `<cat>` + `<cat>-desc` per category
- **AND** the panel's disclosure SHALL be wired with `aria-expanded` + `aria-controls` on the trigger and
  `aria-describedby` on each switch

#### Scenario: Focus is always somewhere sensible

- **GIVEN** every transition
- **WHEN** it completes
- **THEN** opening the panel SHALL focus the first **enabled** switch, closing it SHALL focus Settings, and a
  choice SHALL focus the footer reopen button
- **AND** no transition SHALL leave focus on a hidden element (the source's `hidden` + `focus()` order is
  correct — keep it)
- **AND** every interactive element SHALL have a `focus-visible` indicator ≥ 3 : 1 on its own surface

#### Scenario: Nothing is invented

- **GIVEN** the source quotes no storage
- **WHEN** the port reports a choice
- **THEN** the message SHALL be true of the implementation (persist, or say "for this visit") and the tests SHALL
  assert the chosen behaviour

### Feature: Repo integration

#### Scenario: Wiring

- **GIVEN** the monorepo
- **WHEN** the app is created
- **THEN** it SHALL live at `apps/wafer`, package `@free-react-templates/wafer`,
  `public/CNAME` = `wafer.free.componentdock.com`, `"homepage"` = `https://wafer.free.componentdock.com`
- **AND** it SHALL reuse `packages/ui` where a primitive exists (button, `cn()`), keep
  `injectUiSource()` in `vite.config.ts`, and declare `"react": "latest"`
- **AND** no app file SHALL mention `colorlib`, `alert-12`, `Crumb & Co.`, "Rua das Flores" or any other string
  from the source

#### Scenario: The `TEMPLATES.md` row

- **GIVEN** `TEMPLATES.md` has no `## Bootstrap Alerts` section
- **WHEN** the template ships
- **THEN** the row SHALL be the **twelfth** entry of a `## Bootstrap Alerts (12)` section inserted between
  `## Bootstrap Accordions (20)` and `## Bootstrap Buttons (20)`
- **AND** the row SHALL read `- [x] **Alert 12** — [colorlib](https://colorlib.com/wp/template/alert-12/) ·
  [wafer](https://wafer.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-12.jpg)`

## Adapting to the repo (deltas — read before writing code)

**Copy.** The reference's invented brand and street SHALL NOT appear. Use these replacements (same lengths, so
the fold arithmetic above still holds and can be asserted):

| source                                                   | port                                                       |
| -------------------------------------------------------- | ---------------------------------------------------------- |
| "Crumb & Co." (11)                                       | **"Ryeside"** (7, 800 weight, same slot)                    |
| "Neighbourhood bakery · Est. 2014"                       | "Neighbourhood bakery · Est. 2016"                          |
| "Fresh from 7am"                                         | "Fresh from 6am"                                            |
| "Sourdough, pastries and slow mornings." (38)            | "Sourdough, rye bread and slow mornings." (**39** — keeps the two-line hero at 720) |
| "Order ahead for pickup on Rua das Flores, or have a loaf delivered before breakfast anywhere in Porto." (102) | "Order ahead for pickup on Mill Lane, or have a loaf delivered before breakfast anywhere in Leeds." (**98**) |
| "Country sourdough €5.20" / "Pastel de nata €1.40" / "Cardamom knot €2.80" | "Country sourdough €5.40" / "Pastel de nata €1.50" / "Cardamom knot €2.90" |
| "A few cookies, only if you want them" (36)              | "A few cookies, only if you fancy them" (**37**)             |
| bar body (155)                                           | "We use necessary cookies to keep your basket working. With your permission we also count visits and remember your usual shop. Read our cookie policy." (**~144** — assert it still wraps to 3 lines at 451) |
| "© 2026 Crumb & Co."                                     | "© 2026 Ryeside"                                             |
| category labels + descriptions                           | keep the four generic names; rewrite the descriptions in the port's voice |

**Structure → React.** `App` = `<BakeryPage>` (`Header`, `Hero`, `MenuTiles`, `Footer`) + `<ConsentBar>`. The bar
owns `{ open, panelOpen, choices }` in one `useReducer` (or `useState` with a typed `Choice` record), renders
`__main` (icon / copy / actions) and, when `panelOpen`, `__panel` (four `<CategorySwitch>` rows + `Save my
choices`). Keep the message grammar in a pure `describeChoice(choices)` function and the switch colours in a
typed variant map — never four copy-pasted rows.

**Tokens.** Put the palette in `@theme`: `--color-ground: #fbf6ee`, `--color-glow: #f6dfbf`, `--color-ink:
#2a1d10`, `--color-lede: #5b4a38`, `--color-muted: #6e5a45` + `--color-muted-bar: #5f4e3c`, `--color-accent:
#7a3f0c`, `--color-kicker: #9a5412`, `--color-saved: #1f6b3b`, `--color-card: #fffdf9`, `--color-line:
#eadfce`, `--color-tile: #fbeedb`, `--color-host-edge: #a08a6d` (**fixed**), `--color-focus: #b3661a`
(**fixed**), `--color-switch-off: #8a7a68`, `--color-switch-on: #2f7d4a`, `--color-switch-locked: #4a8f63`
(**fixed**). Radii: `--radius-bar: 22px`, `--radius-tile: 16px`, `--radius-btn: 12px`.

**Prescribed fixes (behavioural, not cosmetic).** (1) A document-level Escape while the panel is open — with focus
returned to Settings — so the disclosure is keyboard-closable from anywhere. (2) The inline "cookie policy" phrase
opens the settings panel (it is a dangling `#cookie-policy` in the source); never ship an anchor with no target.
(3) Declare the persistence decision in code **and** copy — either `localStorage` re-hydration or "for this
visit". (4) Focus the first enabled switch, not `switches[1]`. (5) The bar is a `role="region"`, not a modal;
do not trap focus. (6) Ring `#b3661a` and ghost edge `#a08a6d` so both boundaries clear 3 : 1. (7) Keep the
`-50%` inside the entry keyframes.

**Do not port:** `.cl-icon` (dead), `.is-expanded` (unstyled), the `500` font pair, the `1.5px` borders, the
`images/` README claim, the macOS screenshot frame, the `#d82b`/`#dccbb4` boundary colours, or the "saved" copy
that promises storage the code does not do.

## Verification checklist

- [ ] `apps/wafer` exists, package `@free-react-templates/wafer`, `public/CNAME` =
      `wafer.free.componentdock.com`, `"homepage"` = `https://wafer.free.componentdock.com`
- [ ] `npm run verify:app wafer` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-wafer --type spec` is valid
- [ ] measured at 1440 × 900: bar **980 × 134.75** at (230, 749.25), bottom edge **884**; grid
      **52 / 451 / 391**; icon **52**; `h2` **25.5**; body **65.25** (3 lines); actions **391 × 45.75**;
      buttons **120 / 145 / 110**; `h1` **720 × 126**; tiles **228 × 77**; document **900** (no scroll)
- [ ] panel at 1440: bar **408.5**, panel **273.75**, list **3 × 290**, rows **93.5**, save button
      **157 × 45.75**
- [ ] tokens exact: ground `#fbf6ee` + the `45% 50% at 85% 20%` / `#f6dfbf` radial; ink `#2a1d10`; lede
      `#5b4a38`; muted `#6e5a45` / `#5f4e3c`; accent `#7a3f0c`; kicker `#9a5412`; saved `#1f6b3b`; card
      `#fffdf9`; line `#eadfce`; tile `#fbeedb`; switch off/on/locked `#8a7a68` / `#2f7d4a` / `#4a8f63`
- [ ] boundaries **fixed**: focus ring `#b3661a` (≥ 3 : 1 on the card), ghost edge `#a08a6d` (≥ 3 : 1), locked
      switch still reads "on"; **`1px`** borders everywhere (never `1.5px`)
- [ ] bar: fixed/bottom 16/`max-w-980`/radius 22/`max-height: calc(100vh - 32px)`/`overflow: auto`/`z-50`;
      `[hidden]` styled to `display: none`; entry keyframes carry `translate(-50%, …)`
- [ ] buttons: one primary (`#2a1d10` → hover `#4a3521`), two ghosts (hover border accent + `#fbf1e3`), chevron
      rotates 180° via `aria-expanded`
- [ ] switches: native `<input type="checkbox" role="switch">` + `<label for>`; 46 × 26 with a 20 × 20 `::after`
      knob moved `translateX(20px)`; Space/label/click all toggle; Necessary `checked disabled`
- [ ] behaviour: Accept all → `"…necessary, preferences, analytics and marketing."`; Necessary only →
      `"…necessary."`; custom → `"…necessary, preferences and analytics."`; every choice hides the bar and
      focuses the footer reopen button; reopen is idempotent-open and clears the message
- [ ] Escape closes the panel with focus anywhere on the page (fix 1) and leaves the bar open; Settings toggles the
      panel and focuses the first enabled switch
- [ ] a11y: 1 `h1` + 1 `h2`; bar `role="region"` + `aria-labelledby`; `aria-expanded`/`aria-controls` on both
      triggers; `aria-describedby` on all four switches; 11 ids; `role="status"` empty at load and `:empty`-hidden
- [ ] motion: `.4s` entry, `.15s` button colour, `.2s` chevron/switch; **all none** under
      `prefers-reduced-motion: reduce`
- [ ] width ladder: collapsed **134.75 / 156.5 / 182 / 176.8 / 176.8 / 198.5 / 198.5 / 220.3 / 208.3 / 262 /
      287.5 / 309.3 / 331**; expanded **408.5 / 389.8 / 450.5 / 578.3 / 580 / 633.8 / 679.5 / 741.8 / 783.8**;
      panel **3 / 2 / 1** columns at 1440 / 900 / 620
- [ ] short screen: 320 × 568 clamps the bar to **536** and scrolls inside; the page is reachable when closed
- [ ] no horizontal overflow at 320–1440 (`scrollX` 0, `scrollWidth === clientWidth`)
- [ ] exactly 4 switches, 5 buttons, 2 inline SVGs, **0** `<img>`, **0** `<form>`, 1 `<h1>`, 1 `<h2>`
- [ ] no occurrence of `colorlib`, `alert-12`, `Crumb & Co.`, "Rua das Flores" or any source string in any app
      file; the Component Dock link is in a real `<footer>`
- [ ] `TEMPLATES.md` carries the `Alert 12` row as the twelfth entry of a new `## Bootstrap Alerts (12)` section
      between `## Bootstrap Accordions (20)` and `## Bootstrap Buttons (20)`
- [ ] `curl -I https://wafer.free.componentdock.com` → 200, `ssl_verify_result=0`
