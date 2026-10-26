# Template: Snapback (Alert — a shared-drive file list with an undo bar and a connection-recovery bar)

## Purpose

A **single 642 px panel on a light grey ground**, and the whole document is that panel: a file list
with **two actionable alert bars stacked underneath**. The header carries a breadcrumb
("Shared drive › Marketing"), a **22 px / 700** title ("Autumn campaign") and a right-aligned count
("4 files"); five rows follow, each with a **40 × 34.5 px tinted type chip** (DOC / PNG / XLS / MP4),
a 15 px / 600 filename over a 13 px meta line, and a **38 × 38 px** trash button. One row ships
**`hidden`**, so the panel opens showing four.

Under the list sits a **`grid` stack on `#f7f9fb`** holding two dark bars of identical geometry
(**608 × 56.3**, `border-radius: 12px`):

- an **undo bar** on `#1b2430` — trash icon, a curly-quoted sentence naming the file just trashed, and
  an **Undo** action in `#8fd3ff`; pressing a row's trash button rewrites the sentence, hides the row,
  decrements the count and **moves focus to Undo**; pressing Undo un-hides the row, rewrites the
  sentence to "restored", hides itself and **returns focus to that row's trash button**;
- a **connection bar** on `#3a1d12` — a struck-through wifi glyph, **"Connection lost."** in bold plus
  "3 changes are waiting to sync.", and a **Retry** action in `#ffc9ab`. Retry runs a **three-state
  machine**: offline → **busy** (glyph replaced by a **20 px spinner** spinning at 0.8 s linear,
  label becomes **"Retrying…"**, `aria-disabled="true"`) → after **1.2 s** **online** (bar repaints
  `#0f3324`, glyph becomes a check-in-circle in `#7ee2b0`, copy becomes **"Back online.** 3 changes
  synced just now.", label becomes **Dismiss**) → Dismiss hides the bar and **focuses the `h1`**.

Everything is **DM Sans** (400 / 600 / 700, one variable cut), the page is **900 px tall with no
scroll** at 1440 × 900, and the document contains **0 links, 0 images, 0 forms** — 6 ids, 7 buttons,
8 inline SVGs.

- **Source slug:** `alert-05`
- **ColorLib page:** https://colorlib.com/wp/template/alert-05/ — **HTTP 200, 113,350 B**, `<title>`
  `Alert V05 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V05"**, meta description *"A
  shared-drive file list with two actionable alert bars underneath. Free download, no jQuery or
  plugins."*, `datePublished` **2026-09-25T14:53:41+00:00**, claims *"375 KB"* (measured **383,699 B
  = 374.7 KiB** ✓), and links its siblings as *previous post: Alert V04* / *next post: Alert V06*
  plus a 6-item related grid (the family runs to twelve). This is the **design name the naming audit
  reads**: ColorLib "Alert V05".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-05/ —
  **HTTP 200, 7,080 B**, `<title>` `Alert V05 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  `<script>`. The slug-only path `theme/alert-05/` is **404 (9 B)**; `theme/bb/alert-05/` is **404
  (9 B)**. Same `bootstrap/` prefix ladder as the four earlier variants of this family.
- **Design category:** Alert (action-result bars: undo a destructive action + recover a connection,
  inside a file-list panel).
  **Fifth** of the **`alert` snippet family** (**12** variants) in the **214 snippet variants** of
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/snapback`,
  package `@free-react-templates/snapback`, CNAME `snapback.free.componentdock.com`.

**What this design is, and what it is not.** The family so far: **noticeboard** is a static severity
ladder, **allclear** a dismiss/restore *list*, **fieldguide** admonitions inside prose with no script
at all, **banderole** a page-level announcement bar over a landing page. `alert-05` is the first
variant whose bars are **caused by the page's own controls**: a trash button creates the undo bar's
subject, a Retry button creates the busy and online states. It is also the first with **three states
on one bar** and the first where a bar **shrinks** (the undo bar drops from 56.3 to **41.02** when its
action hides). There is no site chrome at all — no header, no nav, no footer, no hero — so almost the
entire fidelity budget is the panel's arithmetic and the two state machines.

**The five things a careless port flattens** (each measured here, expanded below):

- **The panel is `content-box`.** `max-width: 640px` measures **642 outer** (`+1px` border each side)
  at every viewport ≥ **674**; below that the card is exactly **`vw − 32`** (the demo's `16px` padding).
  A `border-box` port is 2 px narrow and every row/chip measurement drifts.
- **The two bars are not one colour.** Undo is `#1b2430`, offline is `#3a1d12`, online is `#0f3324` —
  three dark grounds, and each one repaints its **action colour** (`#8fd3ff` / `#ffc9ab` / `#a6f0cb`)
  and its **icon colour** (`#b8c3cf` / `#ffb38a` / `#7ee2b0`).
- **Bar height is a sum, not a setting.** `56.3 = 10 + 36.3 + 10`, where **36.3 is the action button**
  (14 px / 1.45 + `8px` padding) and the copy is only 21.02 tall. Once the copy wraps (**2 lines at
  ≤434** for undo, **≤533** for the connection bar) the *text* takes over: 62.03, then 83.05 at three
  lines, then 104.06 at four.
- **`[hidden]` needs a rule.** Rows are `display: flex` and both bars are `display: flex`, so the
  sheet ships `.cl-alert05__file[hidden]{display:none}` **and** `.cl-alert05__bar[hidden]{display:none}`
  — the UA's `[hidden]{display:none}` loses to any flex declaration. A Tailwind port must not lean on
  `hidden` alone.
- **The type chips are the panel's only colour.** Four tints (`#e3eeff`, `#fde7f1`, `#dff5e8`,
  `#efe7ff`) on four inks (`#1d4fa8`, `#a3195b`, `#17693d`, `#5b32b8`), 10 px / 700 / `+0.5px`. The
  rest of the panel is ink `#16202b` on white with the muted `#5a6573`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,901** rows, **3,157** lines), so this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `alert-05` is one of the **214 snippet variants in 19 families**; the 42 standalone designs
in that gap are all prepped. Families are worked **in family order, then variant number** — the card
family (20) is closed, the alert family is in progress (noticeboard, allclear, fieldguide and
banderole are prepped, **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **fifth** entry
of a section that does not exist yet. It belongs **between `## Bootstrap Accordions (20)` (line 639)
and `## Bootstrap Buttons (20)` (line 663)** — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 05** — [colorlib](https://colorlib.com/wp/template/alert-05/) · [snapback](https://snapback.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-05.jpg)
```

Row-grammar warning, measured on main `9d4e55e5d`: `## Bootstrap Accordions` (the section immediately
above) uses `[colorlib] · [app] · ![preview]`; `## Bootstrap Buttons` uses `[colorlib] · ![preview] ·
[app]` for 12 rows and app-before-preview for 7. Use the **accordion** form (app before preview) and
re-read the surrounding lines **immediately before pushing** — two implementer streams write this file.

**The name.** `snapback` — one lowercase word (a snap return to a previous position, which is exactly
what Undo is), and it matches the family's closed-single-word pattern (noticeboard, allclear,
fieldguide, banderole) and the card family's (coursebook, roadbook, shortlist). Verified free on main
`9d4e55e5d`: `git grep -il snapback origin/main` → **0 files**; no `apps/snapback`; no
`openspec/specs/template-snapback`; no bold name in `TEMPLATES.md`; and the ColorLib catalogue URLs
`colorlib.com/wp/template/snapback/`, `preview.colorlib.com/theme/snapback/`,
`preview.colorlib.com/theme/bootstrap/snapback/` and `theme/bb/snapback/` all **404**.

Zero-collision alternatives measured the same run, still free if a later variant needs one: `backline`,
`undoer`, `restorely`, `trashline`, `resync`, `signalbar`, `netcheck`, `handback`. Rejected on
measurement because the repo already contains the substring: `recall` (3 files), `rewind` (15),
`rollback` (9), `lifeline` (1), `keepline` (2), `uplink` (43 — an app *and* a spec). Do **not** reuse
`noticeboard`, `allclear`, `fieldguide` or `banderole`, nor the card family's twenty taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 7,080 B** live (`6,877 B` inside the archive), `<title>` "Alert V05 \| Colorlib", `lang="en"`, **one** stylesheet, **one** `<script>` |
| preview path      | **`theme/bootstrap/alert-05/`**; `theme/alert-05/` **404** (9 B), `theme/bb/alert-05/` **404** (9 B)                          |
| stylesheet        | `css/style.css?v=af94b77d`, **9,646 B**, 454 lines, sha256 `7728790667e8ddd1bb1ebe04ab3f03c23c265d5993ab701db1e870036554826a` |
| script            | `js/snippet.js?v=c69db547`, **3,064 B**, 99 lines, sha256 `13cb2615878e7cd049018ac427f0e6571da528dcb6480a22312072b45fced836` — a real script (unlike fieldguide's 9-byte soft 404) |
| archive           | `preview.colorlib.com/downloads/free/alert-05.zip`, **200, 383,699 B** (= 374.7 KiB ✓ the page's "375 KB"), **16 entries**: 4 dirs + `index.html` 6,877 B + `css/style.css` 9,646 B + `js/snippet.js` 3,064 B + `README.md` 1,262 B + **8 `woff2`** |
| live ↔ archive    | CSS **identical sha256**, JS **identical sha256**; the two HTML files differ **only** in the `<head>` (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, the `?v=` query strings) → **live preview verified; the archive is its un-versioned twin** |
| README            | lists `images/  its images` — **there is no `images/` directory and the page has no `<img>`** (defect 7)                      |
| fonts             | **8** `woff2` but **2 distinct binaries**: latin **62,556 B** sha256 `aa530716b0d3…`, latin-ext **31,312 B** sha256 `0d0609aee778…`, each duplicated at 400 / 500 / 600 / 700. The sheet declares **400 / 600 / 700** × latin / latin-ext = **6** `@font-face`; the two **500** files ship but are **never declared** |
| type proof        | canvas advance of "Autumn campaign" at 100 px: **400 → 776**, 500 → 776 (resolves to the 400 face), **600 → 819**, **700 → 835**, 900 → 835 (clamped to the declared 700 face); system sans 400 → 806, 700 → 872. Three distinct advances from **one** binary ⇒ **one variable cut, wght 400–700**, declared three times |
| classes           | **26** in the markup, **26** styled ⇒ **0 phantom** (the family's first). Script-only classes: `is-busy` (rules exist), `cl-alert05__bar--online` (rules exist, not in markup) and **`is-restored` (no rule at all)**. Dead selector: `.cl-icon` — the tenth sibling in a row carrying that leftover |
| custom properties | **5** on `.cl-alert05`: `--cl-alert05-ink: #16202b`, `--cl-alert05-muted: #5a6573`, `--cl-alert05-line: #e3e8ee`, `--cl-alert05-bar: #1b2430`, `--cl-alert05-action: #8fd3ff` |
| CSS anatomy       | 6 `@font-face` + 10 `:where(html) … { all: revert }` guard blocks + **29 design rule blocks**; **2** `@media` (`max-width: 480px`, `prefers-reduced-motion: reduce`), **2** `@keyframes` (`cl-alert05-in`, `cl-alert05-spin`), **0** `transition`, **0** `@supports`, **0** container queries |
| controls          | **7** `<button>` (5 delete + Undo + Retry), **0** `<a>`, **8** `<svg>` (5 delete glyphs, 1 trash icon, 2 connection glyphs), **0** `<img>`, **0** forms/inputs; **6** focusable (the hidden row's button is not) |
| headings          | **1 × `h1`** (`tabindex="-1"`) and **no `h2`–`h6`**                                                                          |
| landmarks         | `<main>` (unlabelled) → `<section aria-labelledby="cl-alert05-title">` → `<header>`; the bars are plain `<div>`s, **not** `role="alert"` regions themselves — the live regions are the two `<p>`s inside them |
| live regions      | `role="status"` on the undo copy, `role="alert"` on the connection copy                                                       |
| ids / fragments   | **6** ids (`cl-alert05-title`, `cl-alert05-f1`…`f5`) — all valid; **0** anchors, so nothing can be a dead fragment           |
| document height   | **900** at 1440 × 900 (`min-height: 100vh` on the wrapper) — the panel is 514.7 tall, so the page never scrolls             |
| screenshot        | `alert-05.jpg` **13,822 B**, **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it — and it is a **browser-chrome mock-up** (see defect 8) |

### Page arithmetic — one content-box panel, one grid stack, four clamps

```css
body  { margin: 0; background: #eef1f4;
        font-family: "DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.cl-alert05-demo { display: flex; justify-content: center; align-items: flex-start;
                   box-sizing: border-box; min-height: 100vh;
                   padding: clamp(24px, 7vw, 88px) 16px; }
.cl-alert05      { width: 100%; max-width: 640px;            /* content-box → 642 outer */
                   border: 1px solid #e3e8ee; border-radius: 18px; overflow: hidden;
                   background: #fff; color: #16202b; line-height: 1.45;
                   box-shadow: 0 24px 48px -28px rgba(22, 32, 43, .35); }
.cl-alert05__head   { display: flex; gap: 16px; align-items: flex-end; justify-content: space-between;
                      padding: 22px 24px 16px; }
.cl-alert05__file   { display: flex; gap: 14px; align-items: center;
                      padding: 12px 16px 12px 24px; border-bottom: 1px solid #e3e8ee; }
.cl-alert05__stack  { display: grid; gap: 10px; padding: 18px 16px; background: #f7f9fb; }
.cl-alert05__bar    { display: flex; gap: 12px; align-items: center;
                      padding: 10px 10px 10px 16px; border-radius: 12px;
                      background: #1b2430; color: #eef2f6;
                      animation: cl-alert05-in .28s cubic-bezier(.2,.9,.3,1.2); }
```

Height is a sum of the three children plus the two borders, and every break is explained by it:

```
cardH = 2 + head + filesUl + stack
1440 : 2 + 90.73 + 263.38 + 158.59 = 514.70   ✓ (4 rows × 65.59 + 1 px ul border; 18 + 56.3 + 10 + 56.3 + 18)
        head  = 22 + [path 18.84 + 2 + title 31.89] + 16   = 90.73
        row   = 12 + max(del 38, name 21.75 + info 18.84) + 12 + 1 = 65.59
        bar   = 10 + max(text 21.02, action 36.3) + 10      = 56.30
```

Measured geometry at 1440 × 900 (first layout pass; document height **900**, i.e. no scroll):

| element            | box                                | note                                                        |
| ------------------ | ---------------------------------- | ----------------------------------------------------------- |
| `.cl-alert05-demo` | 1440 × **900** at (0, 0)           | padding `88px 16px`, `min-height: 100vh`                     |
| `.cl-alert05`      | **642 × 514.7** at (399, 88)       | 642 = `max-width 640` (content-box) + 2 × 1 px border        |
| `.__head`          | 640 × **90.73** at (400, 89)       | `padding: 22px 24px 16px`, `gap: 16px`, `align-items: flex-end` |
| `.__path`          | **193.7 × 18.84** at (424, 111)    | 13 / 18.85, `#5a6573`, `margin: 0 0 2px`                     |
| `.__title`         | **193.7 × 31.89** at (424, 131.84) | 22 / 31.9 (1.45), 700, `letter-spacing: −0.22px`, `#16202b`  |
| `.__meta`          | **40 × 20.3** at (976, 143.44)     | 14 px, `#5a6573`, `white-space: nowrap`                      |
| `.__files`         | 640 × **263.38** at (400, 179.73)  | `border-top: 1px`, `list-style: none`                        |
| `.__file`          | 640 × **65.59** at y 180.73 / 246.33 / (**f3 hidden**) / 311.92 / 377.52 | `padding: 12px 16px 12px 24px`, `gap: 14px` |
| `.__type`          | **40 × 34.5** at (424, 195.78)     | `padding: 10px 0`, r **8**, 10 / 700, `+0.5px`, centred      |
| `.__name`          | **494 × 40.59** at (478, 192.73)   | 15 / 21.75, 600, `overflow-wrap: anywhere`, `flex: 1`        |
| `.__info`          | **494 × 18.84** at (478, 214.48)   | `display: block`, 13 / 18.85, 400, `#5a6573`                 |
| `.__del`           | **38 × 38** at (986, 194.03)       | r **10**, grid-centred, `#5a6573`, 18 px glyph at `stroke 1.8` |
| `.__stack`         | 640 × **158.59** at (400, 443.11)  | `padding: 18px 16px`, `gap: 10px`, `#f7f9fb`                 |
| `.__bar` (undo)    | **608 × 56.3** at (416, 461.11)    | `#1b2430`, r 12, `padding: 10px 10px 10px 16px`, `gap: 12px` |
| `.__bar` (offline) | **608 × 56.3** at (416, 527.41)    | `#3a1d12`                                                    |
| icon               | **20 × 20** at (432, 479.25)       | `stroke 1.8` (conn `1.9`), `currentColor`                    |
| `.__text`          | **470.88 × 21.02** at (464, 478.75) | 14.5 / 21.025, `flex: 1`, `min-width: 0`                    |
| `.__action`        | **67.13 × 36.3** at (946.88, 471.11) | `padding: 8px 14px`, r **8**, 14 / 700, `+0.28px`, transparent |

### Design tokens — six greys, three dark grounds, four chip tints

```css
.cl-alert05 { --cl-alert05-ink: #16202b; --cl-alert05-muted: #5a6573; --cl-alert05-line: #e3e8ee;
              --cl-alert05-bar: #1b2430; --cl-alert05-action: #8fd3ff; }
body        { background: #eef1f4; }
.__stack    { background: #f7f9fb; }
.__file:hover { background: #f7f9fb; }
.__bar--offline { background: #3a1d12; }  .__bar--online { background: #0f3324; }
.__del:hover    { background: #fdecec; color: #b42318; }
```

| token / value            | reference value                                   | where it is used                                    |
| ------------------------ | ------------------------------------------------- | --------------------------------------------------- |
| page ground              | `#eef1f4`                                          | `body` (visible as a 1.09-contrast rim around the card) |
| card surface / border    | `#ffffff` / `#e3e8ee`                              | the panel and every row separator (`--line`)         |
| ink / muted              | `#16202b` / `#5a6573`                              | title + filenames / breadcrumb, meta, icons          |
| stack well               | `#f7f9fb`                                          | the alert stack **and** the row hover                |
| undo bar                 | `#1b2430`                                          | `--bar`                                              |
| offline bar / online bar | `#3a1d12` / `#0f3324`                              | connection bar states                               |
| bar ink                  | `#eef2f6`, `strong` → `#ffffff`                    | both bars' copy                                      |
| undo action              | `#8fd3ff` (`--action`)                             | the Undo label                                       |
| offline / online action  | `#ffc9ab` / `#a6f0cb`                              | Retry / Dismiss labels                               |
| icons                    | `#b8c3cf` (trash) · `#ffb38a` (offline) · `#7ee2b0` (online) | the three glyphs                            |
| chip tints → inks        | DOC `#e3eeff`→`#1d4fa8` · PNG `#fde7f1`→`#a3195b` · XLS `#dff5e8`→`#17693d` · MP4 `#efe7ff`→`#5b32b8` | the four type badges |
| delete hover             | `#fdecec` + `#b42318`                              | the trash button                                     |
| focus rings              | `2px solid #1d6fd8` (title `offset 4`, row buttons `offset 1`) · `2px solid #ffffff` (bar actions, `offset 1`) | — |
| spinner                  | `20 × 20`, `border: 2.5px solid rgba(255,255,255,.25)`, `border-top-color: #ffb38a`, 0.8 s linear infinite | the busy state |
| radii                    | **18** card · **12** bars · **10** trash button · **8** chips and actions · **4** title focus | — |
| type                     | `DM Sans` 400 / 600 / 700 (one variable cut), fallback `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | everything |

### Behaviour — two machines, one measured outcome each

```js
// undo machine (initUndo)
pending = document.getElementById(bar.dataset.clAlert05Undo)          // "cl-alert05-f3" — a HIDDEN row
if (!pending) bar.hidden = true                                       // bar visible only while a row is pending
delete(row) : finalize()          // removes the PREVIOUS pending row from the DOM (defect 3)
              pending = row; row.hidden = true
              bar.hidden = false; undo.hidden = false
              text = `“${row.dataset.name}” moved to trash.`
              count = number of `.cl-alert05__file:not([hidden])`;  undo.focus()
undo()      : row.hidden = false; bar.classList.add('is-restored')     // is-restored has NO rule (defect 4)
              text = `“${row.dataset.name}” restored.`;  undo.hidden = true;  del(row).focus()

// connection machine (initRetry) — state ∈ {offline, busy, online}
offline → click : state = busy; bar.classList.add('is-busy'); btn aria-disabled=true; btn = "Retrying…"
                  setTimeout(1200) → state = online; −is-busy, −bar--offline, +bar--online
                                     aria-disabled removed; btn = "Dismiss"
                                     text = "<strong>Back online.</strong> 3 changes synced just now."
online  → click : bar.hidden = true;  heading.focus()                 // the h1 carries tabindex="-1"
busy    → click : swallowed (`if (state === 'busy') return`)
```

Measured with Playwright at 1440 × 900 (fresh context per state run):

| action                    | observed                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| load                      | count **4**, **5** rows in the DOM (1 `hidden`), undo bar **56.3**, connection bar **56.3** offline, active `BODY`, card **514.7** |
| click trash on row 1      | count **3**, rows in the DOM **4** (row 3 was removed), bar text `“Campaign brief.docx” moved to trash.`, active = **Undo**, card **449.11** |
| click Undo                | count **4**, class `bar is-restored`, text `“Campaign brief.docx” restored.`, Undo **hidden**, bar **41.02**, card **499.42**, active = that row's **trash** button |
| click trash on row 2      | count **3**, `#cl-alert05-f3` **no longer exists** in the DOM (defect 3), card **449.11**, active = Undo |
| click Retry               | label **"Retrying…"**, `aria-disabled="true"`, classes `bar bar--offline is-busy`, spinner `display: block`, offline glyph `none` |
| after 1.2 s               | classes `bar bar--online`, label **Dismiss**, text `Back online. 3 changes synced just now.`, online glyph `block` |
| click Dismiss             | connection bar `hidden` (0 × 0), card **382.81**, stack **92.30**, active = **H1**                 |
| `prefers-reduced-motion`  | `.cl-alert05__bar` `animation-name: none`; the spinner keeps spinning at **2.4 s** (a slowed loop, not a stop) |

The script is **3,064 B, an IIFE, `'use strict'`, no dependencies, no localStorage, no network** — the
only asynchrony is the single un-cleared `setTimeout(…, 1200)` (defect 6).

### Contrast (WCAG 2.x, computed from the shipped hexes)

| run                                        | value        | note                                              |
| ------------------------------------------ | ------------ | ------------------------------------------------- |
| title `#16202b` on `#ffffff`               | **16.46**    |                                                   |
| breadcrumb / meta / trash `#5a6573` on white | **5.93**   | 13–14 px runs, clears AA                          |
| muted on the stack well `#f7f9fb`           | **5.61**     |                                                   |
| chips: DOC / PNG / XLS / MP4               | **6.56 / 6.28 / 5.88 / 6.77** | all clear AA at 10 px / 700        |
| bar copy `#eef2f6` on `#1b2430` / `#3a1d12` / `#0f3324` | **13.91 / 13.68 / 12.29** |                       |
| `strong` `#ffffff` on `#1b2430`            | **15.65**    |                                                   |
| Undo `#8fd3ff` on `#1b2430`                | **9.64**     |                                                   |
| Retry `#ffc9ab` on `#3a1d12`               | **10.40**    |                                                   |
| Dismiss `#a6f0cb` on `#0f3324`             | **10.50**    |                                                   |
| icons: trash / offline / online            | **8.75 / 8.84 / 8.81** | non-text, clears 3:1 by a wide margin   |
| delete hover `#b42318` on `#fdecec`        | **5.76**     |                                                   |
| focus ring `#1d6fd8` on white / on ground  | **4.86 / 4.29** | a non-text indicator: clears 3:1, fails 4.5 on the ground — acceptable, and the ring never sits on the ground |

There is **no failing text pairing** in this design — the first variant in the family with that
property. The port must not "improve" the palette; it must not flatten the three dark grounds either.

## Defects found in the reference (fix in the port; do not reproduce)

1. **The undo bar announces an event that has not happened.** It ships visible, with
   `role="status"` and the copy *"Hero banner v1.png" moved to trash.* while the row it names is merely
   `hidden` — no click occurred. The port renders the bar **only after a delete** (or with a neutral
   idle copy) and never states an action on first paint.
2. **The initial pending row is a hidden decoy.** Row 3 ships `hidden` and the bar's
   `data-pending` points at it, so the panel's "restore" affordance restores a row the user never saw.
   The port starts with **four real rows and no pending state**.
3. **Deleting one file silently destroys another.** `finalize()` calls `pending.remove()` — so the
   *previous* pending row leaves the DOM permanently. Measured: clicking trash on row 1 leaves **4**
   rows in the DOM (row 3 gone), and clicking trash on row 2 then removes row 1 … while the count and
   Undo keep describing a single reversible action. This is **data loss**, not a UI quirk: the port
   keeps a **single pending row, hidden but never removed**, and discards it only when a new delete
   supersedes it *without* deleting the row from the data model.
4. **`is-restored` has no CSS rule.** The class is added on Undo and does nothing, so the only visible
   change is that Undo disappears — the restored bar then sits there at **41.02 px forever**, with no
   dismiss control and no way back. The port shows the restored state for a short, defined interval
   (or with an explicit close), and makes it visually distinct.
5. **The busy state is JS-guarded only.** `aria-disabled="true"` is set but the button stays
   focusable/clickable and there is no `aria-busy`; a second click is swallowed by the state check.
   The port sets `aria-busy` on the bar, keeps the label stable for screen readers via an explicit
   live region, and disables the action for real.
6. **The retry timer is never cleared.** `setTimeout(…, 1200)` has no handle, so unmounting mid-retry
   would still write into a detached node. The port clears it on unmount and on a repeat click.
7. **`README.md` advertises `images/  its images`** — there is no `images/` directory and **no `<img>`
   anywhere** in the page. Nothing to port; noted so a later reader does not go looking.
8. **The screenshot is a browser mock-up**: `alert-05.jpg` is **1200 × 972**, an AVIF behind a `.jpg`
   extension, framed in a macOS window (traffic lights, a `preview.colorlib.com` address bar) on a grey
   desk with a drop shadow. The frame is **never** adopted: the page ground `#eef1f4` is edge to edge.
9. **Dead `.cl-icon` selector** (styled, never used in the markup) — the tenth sibling in this family
   to carry that leftover; the sheet also ships two **undeclared** `500` weight files it never uses.
10. **Both bars animate on load** (`cl-alert05-in` runs on first paint for bars the user did not
    trigger), so the page "arrives" with two alerts sliding up. The port animates a bar only when it
    appears **in response to a control**.

## Requirements

### Feature: The panel skeleton

#### Scenario: Landmarks and order

- **GIVEN** the `snapback` app at 1440 × 900
- **WHEN** the document is read top to bottom
- **THEN** the order SHALL be: **`<main>` wrapper → one `<section>` (panel) → `<header>` (breadcrumb,
  title, count) → file list → alert stack (undo bar, connection bar)**
- **AND** the section SHALL carry `aria-labelledby` pointing at the `h1`, so it exposes a named region
- **AND** the page SHALL contain **exactly 1 `h1` and 0 `h2`–`h6`**, the `h1` carrying `tabindex="-1"`
- **AND** the document SHALL fit **900 px** at 1440 × 900 with **no scrollbar** (wrapper
  `min-height: 100vh`, content 514.7), and there SHALL be **no page chrome** — no nav, no footer band,
  no hero, no second panel

#### Scenario: The panel box is content-box

- **GIVEN** the panel at 1440
- **WHEN** its box is measured
- **THEN** it SHALL be **642 × 514.7** at (399, 88) — `max-width: 640px` on a **`content-box`** element
  plus `1px` border each side
- **AND** its surface SHALL be `#ffffff`, its border `1px solid #e3e8ee`, its radius **18**, its
  shadow `0 24px 48px -28px rgba(22,32,43,.35)`, its ink `#16202b`, its `line-height` **1.45**
- **AND** it SHALL be `overflow: hidden` so the stack's well is clipped by the bottom radius
- **AND** the wrapper SHALL centre it with `display: flex; justify-content: center; align-items:
  flex-start` and `padding: clamp(24px, 7vw, 88px) 16px` (**88** at ≥1257, **24** at ≤343)

### Feature: The file list

#### Scenario: Header

- **GIVEN** the panel header at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **640 × 90.73** at (400, 89) with `padding: 22px 24px 16px`, `gap: 16px`,
  `align-items: flex-end`, `justify-content: space-between`
- **AND** the breadcrumb SHALL be **13 px / 18.85** in `#5a6573`, `margin: 0 0 2px`, with the `›`
  separator `aria-hidden="true"`
- **AND** the `h1` SHALL be **22 px / 31.9 (1.45)**, weight **700**, `letter-spacing: −0.22px`,
  `#16202b`, `margin: 0`
- **AND** the count SHALL be **14 px** in `#5a6573`, `white-space: nowrap`, right-aligned on the
  header's baseline row

#### Scenario: One row

- **GIVEN** any visible row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **640 × 65.59**, `display: flex`, `gap: 14px`, `align-items: center`,
  `padding: 12px 16px 12px 24px`, `border-bottom: 1px solid #e3e8ee`, hover ground `#f7f9fb`
- **AND** the type chip SHALL be **40 × 34.5**, `padding: 10px 0`, `border-radius: 8px`,
  `font-size: 10px`, weight **700**, `letter-spacing: 0.5px`, centred, `aria-hidden="true"`, with the
  tint/ink pair of its kind (**DOC** `#e3eeff`/`#1d4fa8`, **PNG** `#fde7f1`/`#a3195b`, **XLS**
  `#dff5e8`/`#17693d`, **MP4** `#efe7ff`/`#5b32b8`)
- **AND** the filename SHALL be **15 px / 21.75**, weight **600**, `overflow-wrap: anywhere`,
  `flex: 1; min-width: 0`, with a **13 px / 18.85**, weight 400, `#5a6573` meta line as a block child
- **AND** the delete control SHALL be **38 × 38**, `border-radius: 10px`, transparent, `#5a6573`, a
  grid-centred **18 px** trash glyph (`stroke 1.8`), its accessible name **"Delete <filename>"**, hover
  `#fdecec` + `#b42318`, focus-visible `2px solid #1d6fd8` at `offset 1`
- **AND** a row SHALL be hidden with `hidden` **and** a `[hidden]{display: none}` rule, because the row
  is `display: flex`

#### Scenario: The list frame and the count

- **GIVEN** the list
- **WHEN** it is measured
- **THEN** the `<ul>` SHALL carry `border-top: 1px solid #e3e8ee`, `list-style: none`, no padding, and
  `aria-label="Files"`
- **AND** the count SHALL equal the number of **visible** rows (**4** on load) and SHALL re-render
  after a delete (**3**) and after an undo (**4**)
- **AND** the delete controls SHALL be real `<button type="button">` elements, five of them, each with
  a per-file accessible name

### Feature: The undo bar

#### Scenario: A delete creates the bar

- **GIVEN** the panel with no pending delete and the undo bar **absent**
- **WHEN** a row's trash button is pressed
- **THEN** the bar SHALL appear with a `cl-alert05-in`-style entrance (`opacity 0 → 1`,
  `translateY(8px) → 0`, `0.28 s cubic-bezier(.2,.9,.3,1.2)`)
- **AND** its copy SHALL name that file in curly quotes followed by "moved to trash." and the bar SHALL
  expose `role="status"` so the sentence is announced politely
- **AND** the row SHALL be hidden, the count decremented, and **focus SHALL move to the Undo button**
- **AND** the bar SHALL be **608 × 56.3** with `#1b2430`, radius **12**, `padding: 10px 10px 10px 16px`,
  `gap: 12px`, a **20 px** trash glyph in `#b8c3cf`, a **14.5 px / 21.025** `#eef2f6` copy, and an
  **Undo** button (`padding: 8px 14px`, radius **8**, `14 px / 700`, `+0.28px`, `#8fd3ff`, hover
  `rgba(255,255,255,.1)`, focus-visible `2px solid #ffffff` at `offset 1`)

#### Scenario: Undo restores exactly one row

- **GIVEN** a pending delete
- **WHEN** Undo is pressed
- **THEN** that row SHALL be un-hidden **and SHALL still be the same element** — no row may be removed
  from the document by the delete/undo cycle (defect 3 SHALL NOT be reproduced)
- **AND** the copy SHALL become "<name>" restored., the Undo button SHALL hide, the bar SHALL shrink to
  **41.02** (`10 + 21.02 + 10`), the count SHALL return to its previous value
- **AND** **focus SHALL return to that row's trash button**
- **AND** the restored state SHALL be visually distinct and SHALL NOT persist as a permanent dead bar
  (defect 4): it SHALL auto-dismiss after a defined interval, or carry its own dismiss control

#### Scenario: One pending delete at a time

- **GIVEN** a pending delete
- **WHEN** a second file is deleted
- **THEN** the first pending row SHALL be **committed** (it stays deleted) and the bar SHALL describe
  only the new file
- **AND** the first row's **data SHALL remain in the model** until the commit is explicit — the port
  SHALL NOT `remove()` a row as a side effect of the next delete
- **AND** the count SHALL still equal the visible rows after the swap

### Feature: The connection bar

#### Scenario: Offline state

- **GIVEN** the panel
- **WHEN** the connection bar renders
- **THEN** it SHALL be **608 × 56.3**, `#3a1d12`, radius **12**, holding a **20 px** struck-through wifi
  glyph in `#ffb38a` (`stroke 1.9`), a **14.5 px / 21.025** copy `"Connection lost."` in `<strong>`
  (`#ffffff`, 700) plus "3 changes are waiting to sync.", and a **Retry** action in `#ffc9ab`
- **AND** the copy SHALL carry `role="alert"` (assertive: unsynced work is at risk)

#### Scenario: Busy, then online

- **GIVEN** the offline bar
- **WHEN** Retry is pressed
- **THEN** the glyph SHALL be replaced by a **20 × 20** spinner (`border: 2.5px solid
  rgba(255,255,255,.25)`, `border-top-color: #ffb38a`, `border-radius: 50%`, `0.8 s linear infinite`),
  the label SHALL become **"Retrying…"** (U+2026) and the action SHALL be disabled for real
  (`disabled`/`aria-busy` on the bar — not just `aria-disabled`)
- **AND** after **1.2 s** the bar SHALL repaint `#0f3324`, show a **check-in-circle** glyph in
  `#7ee2b0`, copy **"Back online."** in bold plus "3 changes synced just now.", and a **Dismiss**
  action in `#a6f0cb`
- **AND** pressing Dismiss SHALL hide the bar and move focus to the **`h1`**
- **AND** the timer SHALL be cleared on unmount and on a repeated press (defect 6)

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page is loaded and a bar appears
- **THEN** the bar's entrance animation SHALL be **`none`**
- **AND** the spinner SHALL keep its shape but slow to **2.4 s** per turn (the reference's behaviour),
  and no other motion SHALL be added

### Feature: Type and faces

#### Scenario: One variable face, three weights

- **GIVEN** the shipped stylesheet and the archive's `fonts/`
- **WHEN** the eight `woff2` are hashed
- **THEN** there SHALL be **2 distinct binaries** — latin **62,556 B** (`aa530716b0d3…`) and latin-ext
  **31,312 B** (`0d0609aee778…`) — each duplicated at 400 / 500 / 600 / 700, i.e. **one variable cut**
  with a **wght 400–700** axis, declared only at **400 / 600 / 700**
- **AND** the app SHALL load it with a single Google Fonts `<link>`
  (`family=DM+Sans:wght@400;600;700`, verified **200**) and keep the fallback stack
  `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- **AND** the app SHALL **not** copy any font file into `public/`

#### Scenario: The scale

- **GIVEN** any viewport
- **WHEN** computed sizes are read
- **THEN** the title SHALL be **22 px / 700**, the breadcrumb **13 px**, the meta and count **14 px**,
  a filename **15 px / 600**, its info line **13 px / 400**, a chip **10 px / 700**, a bar copy
  **14.5 px**, a bar action **14 px / 700**
- **AND** every number SHALL keep `letter-spacing` where the reference sets one
  (`h1 −0.01em`, chip `+0.05em`, action `+0.02em`)

### Feature: Responsiveness and overflow

#### Scenario: The measured width ladder

- **GIVEN** viewports swept at 1 px granularity from 300 to 700, plus 768 / 900 / 1024 / 1200 / 1440
- **WHEN** the panel is measured
- **THEN** the panel SHALL be **642** at **≥674** and exactly **`vw − 32`** at **≤673** (641 at 673,
  628 at 660, 608 at 640, 528 at 560, 448 at 480, 358 at 390, 288 at 320)
- **AND** the header SHALL be **90.73** at **≥481**, **84.73** at **316–480** (the ≤480 media step:
  `padding: 18px 16px 14px`), and **116.63** at **≤315**, where the `h1` wraps to **two lines** (63.78)
- **AND** rows SHALL be **65.59** at **≥481** and **61.59** at **≤480** (`padding: 10px 8px 10px 16px`),
  the fifth row wrapping to two lines at **≤339** (83.34) and three at **≤314** (102.19), the first
  row's meta line wrapping at **≤316** (80.44)
- **AND** the undo bar's copy SHALL be **1 line at ≥435** (bar 56.3), **2 at 321–434** (62.03),
  **3 at ≤320** (83.05); the connection bar's copy **1 line at ≥534** (56.3), **2 at 377–533**
  (62.03), **3 at 305–376** (83.05), **4 at ≤304** (104.06)
- **AND** the ≤480 media step SHALL also set the stack padding to `14px 10px` and the bar padding-left
  to `12px` with `gap: 10px`, without touching the bar colours or the chips

#### Scenario: No horizontal overflow

- **GIVEN** each width in 300, 304, 314, 315, 316, 320, 360, 375, 390, 414, 434, 435, 480, 481, 533,
  534, 560, 640, 673, 674, 700, 768, 900, 1024, 1440
- **WHEN** `documentElement.scrollWidth` is compared with `clientWidth` after load, and
  `scrollTo(300, 0)` is called
- **THEN** they SHALL be **equal at every width** (measured equal in all 401 widths swept) and
  `scrollX` SHALL stay **0**
- **AND** no row, chip, bar or action SHALL be clipped: `overflow: hidden` on the panel is a radius
  clip, not a way to hide a too-wide child

### Feature: Semantics, links and repo integration

#### Scenario: Accessible names and states

- **GIVEN** the rendered page
- **WHEN** the accessibility tree is read
- **THEN** each delete control SHALL be named **"Delete <filename>"**, and the Undo / Retry / Dismiss
  controls SHALL be real `<button type="button">` elements with visible labels
- **AND** the undo copy SHALL be a `role="status"` region and the connection copy a `role="alert"`
  region, each rendered **only when it has something true to say** (defects 1 and 5)
- **AND** every SVG SHALL be `aria-hidden="true"` + `focusable="false"`
- **AND** the page SHALL hold **0 links, 0 forms, 0 inputs, 0 `<img>`** and **6 ids**, every one valid

#### Scenario: Repo wiring

- **GIVEN** the shipped app
- **WHEN** the repo is inspected
- **THEN** `apps/snapback` SHALL exist with package `@free-react-templates/snapback`,
  `public/CNAME` = `snapback.free.componentdock.com` and `"homepage"` =
  `https://snapback.free.componentdock.com`
- **AND** `TEMPLATES.md` SHALL gain the `Alert 05` row as the **fifth** entry of
  `## Bootstrap Alerts (12)`, inserted between `## Bootstrap Accordions` and `## Bootstrap Buttons`,
  using the accordion grammar `[colorlib] · [snapback] · ![preview]`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"

#### Scenario: Provenance stays out of the app

- **GIVEN** every file under `apps/snapback`
- **WHEN** they are grepped (case-insensitive) for the source site's name and for the source slug
- **THEN** there SHALL be **no** hit in code, comments, `index.html`, tests or CSS token notes
- **AND** the reference's own copy SHALL be paraphrased with a new host brand (the panel is a shared
  drive called **Quietquill** in the port) so no source string survives
- **AND** the provenance SHALL live only in this spec, `TEMPLATES.md` and the PR body

## Adapting to the repo (deltas — read before writing code)

| reference                                                          | port                                                                                     |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` — **10** guard rules               | **drop entirely.** Tailwind preflight already normalises; `all: revert` would undo the app's base styles |
| `--cl-alert05-*` custom properties + `.cl-alert05__*` names         | `@theme` tokens (`--color-ink`, `--color-muted`, `--color-line`, `--color-ground`, `--color-well`, `--color-bar`, `--color-bar-offline`, `--color-bar-online`, `--color-action`, `--color-action-offline`, `--color-action-online`) + components `FilePanel`, `FileRow`, `UndoBar`, `ConnectionBar` |
| `content-box` panel with `max-width: 640px`                          | keep `max-w-[640px]` **with `box-sizing: content-box`** (or `max-w-[642px]` with `border-box` and document why) — 2 px decides every child measurement |
| `[hidden]` + `.cl-alert05__file[hidden]{display:none}`               | Tailwind's `hidden` utility (`display: none`) on a conditional element, **not** the `hidden` attribute on a `flex` row — the attribute loses to `display: flex` |
| `data-pending` row id + `pending.remove()`                           | `useState<PendingDelete \| null>` holding `{ id, name }`; the row list keeps every file; a second delete **commits** the previous one |
| `is-restored` class with no rule                                     | an explicit `restored` state: distinct copy, auto-clear after a defined interval, and a dismiss control |
| `setTimeout(…, 1200)` with no handle                                 | `useEffect` cleanup + a ref handle; the timeout SHALL be cleared on unmount and on a repeat click |
| `aria-disabled="true"` while busy                                    | real `disabled` on the action + `aria-busy="true"` on the bar, label held in a live region |
| two hand-rolled SVGs per bar (offline/online swapped by CSS)         | `lucide-react`: `Trash2` (18 px, bar icon 20 px), `WifiOff`, `CheckCircle2`, `Loader2` — or one spinner element, `aria-hidden` |
| `DM Sans` woff2 self-hosted (2 binaries, 8 files)                    | Google Fonts `<link>` for `DM+Sans:wght@400;600;700` (verified 200)                        |
| dead `.cl-icon`, undeclared 500 files, duplicated `.__action` colour rules | none of them ported; one atomic class per control                                   |
| screenshot's macOS window + grey desk + shadow                        | **never** adopted — the ground is `#eef1f4` edge to edge                                  |

Copy: paraphrase freely, but keep the *kind* of content — a shared-drive breadcrumb, a campaign-folder
title, a file count, five files with type/size/edited-at lines, an undo sentence naming the file, a
connection sentence with a pending-change count.

## Verification checklist

- [ ] `apps/snapback` exists, package `@free-react-templates/snapback`, `public/CNAME` =
      `snapback.free.componentdock.com`, `"homepage"` = `https://snapback.free.componentdock.com`
- [ ] `npm run verify:app snapback` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-snapback --type spec` is valid
- [ ] measured at 1440: panel **642 × 514.7** at (399, 88); header **90.73**; rows **65.59** each;
      stack **158.59**; bars **608 × 56.3** at y 461.11 / 527.41; text **470.88 × 21.02**;
      action **67.13 × 36.3**; chip **40 × 34.5**; trash **38 × 38**
- [ ] panel is **content-box**: 642 outer at 1440, `vw − 32` below 674
- [ ] the three dark grounds are distinct: undo `#1b2430`, offline `#3a1d12`, online `#0f3324`, each
      with its own action colour (`#8fd3ff` / `#ffc9ab` / `#a6f0cb`) and icon colour
      (`#b8c3cf` / `#ffb38a` / `#7ee2b0`)
- [ ] the four chip tints are exact (`#e3eeff`/`#1d4fa8`, `#fde7f1`/`#a3195b`, `#dff5e8`/`#17693d`,
      `#efe7ff`/`#5b32b8`) and are the panel's only colour besides the bars
- [ ] delete → bar appears, count −1, focus on **Undo**; undo → row restored **as the same element**,
      count back, bar **41.02**, focus back on that row's trash button; the restored state is distinct
      and does not persist as a dead bar
- [ ] deleting a second file **commits** the first (it stays deleted) and **never removes** a third row
      from the document — `document.querySelectorAll('.cl-alert05__file').length` is constant
- [ ] Retry → spinner + "Retrying…" + real `disabled` + `aria-busy`; after 1.2 s → online colours,
      "Back online." copy, Dismiss label; Dismiss hides the bar and focuses the `h1`
- [ ] the retry timer is cleared on unmount (unmount mid-retry leaves no pending state update)
- [ ] `prefers-reduced-motion: reduce`: bar entrance `none`, spinner slowed to **2.4 s**, nothing else moves
- [ ] width ladder verified: panel **642 ≥674**; header **84.73 ≤480**, **116.63 ≤315**; rows
      **61.59 ≤480**; undo copy 1 line **≥435**, 2 **≤434**, 3 **≤320**; connection copy 1 line
      **≥534**, 2 **≤533**, 3 **≤376**, 4 **≤304**; row 5 two lines **≤339**, three **≤314**
- [ ] no horizontal overflow at 300 / 304 / 314 / 315 / 316 / 320 / 360 / 375 / 390 / 414 / 434 / 435 /
      480 / 481 / 533 / 534 / 560 / 640 / 673 / 674 / 700 / 768 / 900 / 1024 / 1440 (measured equal
      across all 401 widths from 300 to 700)
- [ ] exactly **1 heading** (`h1`, `tabindex="-1"`), **0 links**, **0 forms**, **0 images**, **6 ids**
      and every `aria-label` / live region present as specified
- [ ] every contrast pairing clears AA (worst text pair **5.61**: muted on the well) and the port does
      not "improve" the palette
- [ ] no occurrence of the source slug or the source site's name in any app file; the host brand is
      renamed (Quietquill)
- [ ] `TEMPLATES.md` carries the `Alert 05` row as the fifth entry of `## Bootstrap Alerts (12)`
- [ ] `curl -I https://snapback.free.componentdock.com` → 200, `ssl_verify_result=0`
