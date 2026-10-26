# Snapback — design notes

Source: ColorLib **Alert V05** (`alert-05`), preview `https://preview.colorlib.com/theme/bootstrap/alert-05/`.
Target: `apps/snapback`. Spec: `openspec/specs/template-snapback/spec.md`. All numbers below were
measured on 2026-10-26 with `curl -4` + Playwright 1.62 Chromium at 1440 × 900 unless stated.

---

## 1. What this design is

**One panel, and nothing else.** The document is a centred 642 px card on `#eef1f4`, 514.7 px tall,
with a header, five file rows and two dark alert bars stacked under the list:

```
main.cl-alert05-demo          900 px min-height, padding 88 / 16, flex-centred
└── section.cl-alert05        642 × 514.7   white, r 18, border #e3e8ee, shadow
    ├── header  .__head       640 × 90.73   breadcrumb + h1 22/700 + "4 files"
    ├── ul      .__files      640 × 263.38  4 visible rows × 65.59 + 1 px top rule
    └── div     .__stack      640 × 158.59  #f7f9fb, grid gap 10, 18/16 padding
        ├── div .__bar        #1b2430  undo bar       (trash + sentence + Undo)
        └── div .__bar        #3a1d12  connection bar (wifi-off + sentence + Retry)
```

Every earlier variant of the family is a *component demo*: **noticeboard** a severity ladder,
**allclear** a dismiss/restore list, **fieldguide** admonitions inside prose (no script at all),
**banderole** a page-level announcement bar over a landing page. `alert-05` is the first whose bars are
**produced by the page's own controls** — a trash button creates the undo bar's subject, a Retry
button creates the busy and online states — and the first with **three states on one bar** and a bar
that **shrinks** (56.3 → 41.02 when Undo hides). It is also the first with no site chrome whatsoever.

Counts as shipped: **1 h1, 0 h2–h6, 7 buttons, 0 links, 8 svgs, 0 imgs, 0 forms, 0 inputs, 6 focusable,
6 ids**.

## 2. Exact DOM tree (as shipped, 7,080 B live / 6,877 B in the archive)

```
body                                  ← no class (unlike banderole's phantom .*-page)
└── main.cl-alert05-demo
    └── section.cl-alert05[aria-labelledby="cl-alert05-title"]
        ├── header.cl-alert05__head
        │   ├── div
        │   │   ├── p.cl-alert05__path        "Shared drive › Marketing"   (› is aria-hidden)
        │   │   └── h1.cl-alert05__title[id=cl-alert05-title][tabindex=-1]  "Autumn campaign"
        │   └── p.cl-alert05__meta            <span data-cl-alert05-count>4</span> " files"
        ├── ul.cl-alert05__files[aria-label="Files"]
        │   └── li.cl-alert05__file × 5       id f1…f5, data-name="<filename>"; f3 has `hidden`
        │       ├── span.cl-alert05__type.cl-alert05__type--{doc|img|sheet|video}  "DOC|PNG|XLS|MP4"
        │       ├── span.cl-alert05__name     "<filename>" + span.cl-alert05__info "48 KB · Edited 2 hours ago"
        │       └── button.cl-alert05__del[aria-label="Delete <filename>"]  18 px trash svg
        └── div.cl-alert05__stack
            ├── div.cl-alert05__bar[data-cl-alert05-undo][data-pending="cl-alert05-f3"]
            │   ├── svg.cl-alert05__icon.cl-alert05__icon--trash   20 px
            │   ├── p.cl-alert05__text[role=status][data-cl-alert05-undo-text]
            │   └── button.cl-alert05__action[data-cl-alert05-undo-btn]  "Undo"
            └── div.cl-alert05__bar.cl-alert05__bar--offline[data-cl-alert05-conn]
                ├── svg.cl-alert05__icon.cl-alert05__icon--offline  20 px, stroke 1.9
                ├── svg.cl-alert05__icon.cl-alert05__icon--online   (display: none until .--online)
                ├── span.cl-alert05__spinner                        (display: none until .is-busy)
                ├── p.cl-alert05__text[role=alert][data-cl-alert05-conn-text]
                └── button.cl-alert05__action[data-cl-alert05-retry]  "Retry"
```

One script: `js/snippet.js` (3,064 B) — `initUndo()` + `initRetry()`. **No anchors at all**, so the
link census is trivial (0 dead fragments) and the id census is 6 valid ids.

## 3. Section-by-section fidelity notes

### 3.1 The panel — content-box arithmetic

`max-width: 640px` on a **`content-box`** element with `1px` borders = **642 outer** at any viewport
≥ **674** (674 − 32 padding = 642). Below that the card is exactly **`vw − 32`**:

| vw       | 1440 | 1024 | 900  | 768   | 700 | 674 | 673 | 660 | 640 | 560 | 480 | 414   | 390  | 360   | 320 |
| -------- | ---: | ---: | ---: | ----: | --: | --: | --: | --: | --: | --: | --: | ----: | ---: | ----: | --: |
| card     |  642 |  642 |  642 |   642 | 642 | 642 | 641 | 628 | 608 | 528 | 448 |   382 |  358 |   328 | 288 |
| card top |   88 | 71.67|   63 | 53.75 |  49 | 47.2| 47.1| 46.2| 44.8| 39.19| 33.59| 28.97| 27.3 | 25.19 |  24 |

The top offset is the wrapper's `clamp(24px, 7vw, 88px)` (**88** at ≥1257.1, **24** at ≤342.9), because
the wrapper is `align-items: flex-start`.

Child geometry that follows from it: header **640 × 90.73** (`22 + [18.84 + 2 + 31.89] + 16`), row
**640 × 65.59** (`12 + 40.59 + 12 + 1`), stack **640 × 158.59** (`18 + 56.3 + 10 + 56.3 + 18`), bars
**608 × 56.3** (640 − 32 stack padding).

### 3.2 The file rows — four tints, one shape

| part     | value                                                                                     |
| -------- | ----------------------------------------------------------------------------------------- |
| row      | flex, `gap: 14px`, `align-items: center`, `padding: 12px 16px 12px 24px`, `border-bottom: 1px solid #e3e8ee`, hover `#f7f9fb` |
| chip     | **40 × 34.5**, `padding: 10px 0`, r **8**, **10 px / 700**, `letter-spacing: .05em` (**0.5 px**), centred, `flex: none` |
| tints    | DOC `#e3eeff`/`#1d4fa8` · PNG `#fde7f1`/`#a3195b` · XLS `#dff5e8`/`#17693d` · MP4 `#efe7ff`/`#5b32b8` |
| filename | **15 / 21.75**, 600, `flex: 1; min-width: 0`, `overflow-wrap: anywhere` → **494 wide** at 1440 |
| meta     | `display: block`, **13 / 18.85**, 400, `#5a6573` — the second line of the same span         |
| delete   | **38 × 38**, r **10**, grid-centred, `#5a6573`, 18 px trash glyph `stroke 1.8`; hover `#fdecec` + `#b42318`; focus-visible `2px solid #1d6fd8` offset 1 |

A row is **40.59 px of content** (name 21.75 + info 18.84) against a 38 px button, so the *text* sets
the height, not the control. At ≤480 the padding drops to `10px 8px 10px 16px` → **61.59**.

### 3.3 The two bars — one shape, three grounds

```
barH  = 10 + max(textLines × 21.025, action 36.3) + 10
      = 56.30 (1 line) · 62.03 (2) · 83.05 (3) · 104.06 (4)
undo bar with the action hidden = 10 + 21.02 + 10 = 41.02
```

| part     | value                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------- |
| bar      | flex, `gap: 12px`, `align-items: center`, `padding: 10px 10px 10px 16px`, r **12**, `color: #eef2f6`, `box-shadow: 0 10px 24px -14px rgba(22,32,43,.7)` |
| grounds  | undo `#1b2430` · offline `#3a1d12` · online `#0f3324`                                            |
| icon     | **20 × 20**, `stroke 1.8` (connection `1.9`), `currentColor`: `#b8c3cf` / `#ffb38a` / `#7ee2b0`  |
| copy     | **14.5 / 21.025**, `flex: 1; min-width: 0`; `<strong>` is 700 `#ffffff`                          |
| action   | `padding: 8px 14px`, r **8**, **14 / 700**, `+0.02em` (**0.28 px**), transparent, `#8fd3ff` / `#ffc9ab` / `#a6f0cb`; hover `rgba(255,255,255,.1)`; focus-visible `2px solid #ffffff` offset 1 |
| spinner  | **20 × 20**, `border: 2.5px solid rgba(255,255,255,.25)`, `border-top-color: #ffb38a`, r 50 %, `cl-alert05-spin .8s linear infinite` |
| entrance | `cl-alert05-in .28s cubic-bezier(.2,.9,.3,1.2)` — `opacity 0→1`, `translateY(8px)→0`           |

The action is **36.3 tall** (`14 px` at inherited `1.45` + `8px` padding) and is therefore the tallest
child in the one-line state: the bar is **56.3**, not `10 + 21.02 + 10 = 41.02`. Porting the bar as a
40 px strip is 16 px short.

### 3.4 The state machines — exact

```js
// undo
pending = document.getElementById(bar.dataset.clAlert05Undo)   // "cl-alert05-f3" — a HIDDEN row
if (!pending) bar.hidden = true                                // bar only exists while something is pending
delete(btn): finalize()                    // ← removes the PREVIOUS pending row (defect 3)
             pending = row; row.hidden = true; bar.hidden = false; undo.hidden = false
             text = `“${row.dataset.name}” moved to trash.`
             count = `.__file:not([hidden])`.length;  undo.focus()
undo():      row.hidden = false; bar.className += ' is-restored'   // ← no CSS rule for it (defect 4)
             text = `“${row.dataset.name}” restored.`; undo.hidden = true
             row.querySelector('.__del').focus()
```

```js
// connection — state ∈ {offline, busy, online}
offline → click: state = 'busy'; bar.classList.add('is-busy')
                 btn.setAttribute('aria-disabled', 'true'); btn.textContent = 'Retrying…'
                 setTimeout(1200) → state = 'online'
                                    −is-busy, −.__bar--offline, +.__bar--online
                                    btn.removeAttribute('aria-disabled'); btn.textContent = 'Dismiss'
                                    text.innerHTML = '<strong>Back online.</strong> 3 changes synced just now.'
online  → click: bar.hidden = true; heading.focus()          // h1[tabindex="-1"]
busy    → click: return (swallowed)
```

Measured (fresh context per run):

| action               | result                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------ |
| load                 | count **4**, **5** rows in the DOM (1 hidden), bars **56.3 / 56.3**, card **514.7**, active `BODY` |
| trash row 1          | count **3**, rows in the DOM **4** (row 3 removed), active **Undo**, card **449.11**         |
| Undo                 | count **4**, `bar is-restored`, Undo hidden, bar **41.02**, card **499.42**, active = row trash |
| trash row 2          | count **3**, `#cl-alert05-f3` **gone from the DOM**, active Undo                            |
| Retry                | `Retrying…`, `aria-disabled="true"`, `is-busy`, spinner `block`, offline glyph `none`        |
| +1.2 s               | `bar--online`, `Dismiss`, "Back online. 3 changes synced just now.", online glyph `block`    |
| Dismiss              | connection bar `hidden` (0 × 0), card **382.81**, stack **92.30**, active **H1**             |
| reduced motion       | bar `animation-name: none`; spinner keeps `cl-alert05-spin` at **2.4 s**                     |

There is **no localStorage, no network call, no scroll listener**: the whole behaviour budget is these
two machines plus one `setTimeout`.

### 3.5 The width ladder (1 px granularity, 300 → 700)

| width    | what changes                                                                                 |
| -------- | -------------------------------------------------------------------------------------------- |
| **674**  | panel stops being `max-width`-capped (642 → 641 → 628 …)                                       |
| **≥534** | connection copy **1 line** (bar 56.3)                                                         |
| **533**  | connection copy **2 lines** (62.03)                                                           |
| **≥481** | header **90.73**, rows **65.59**                                                              |
| **480**  | media step: header **84.73** (`18/16/14`), rows **61.59** (`10/8/16`), stack `14/10`, bar `gap: 10` + `padding-left: 12` |
| **≥435** | undo copy **1 line** (56.3)                                                                   |
| **434**  | undo copy **2 lines** (62.03)                                                                 |
| **377**  | connection copy back to **2 lines**                                                           |
| **376**  | connection copy **3 lines** (83.05)                                                           |
| **339**  | row 5's filename wraps → row **83.34**                                                        |
| **≥321** | undo copy 2 lines                                                                             |
| **320**  | undo copy **3 lines** (83.05)                                                                 |
| **316**  | row 1's meta line wraps → row **80.44**                                                       |
| **315**  | `h1` wraps to **2 lines** → header **116.63**                                                 |
| **314**  | row 5's filename **3 lines** → row **102.19**                                                 |
| **304**  | connection copy **4 lines** (104.06)                                                          |

No width in the sweep produced horizontal overflow (`scrollWidth === clientWidth` at all **401**
widths, `scrollTo(300,0)` → `scrollX 0`).

## 4. Tokens

| token                  | value                        | where                                     |
| ---------------------- | ---------------------------- | ----------------------------------------- |
| ground                 | `#eef1f4`                    | `body`                                    |
| surface / line         | `#ffffff` / `#e3e8ee`        | panel and every rule                      |
| ink / muted            | `#16202b` / `#5a6573`        | title, filenames / breadcrumb, meta, icons |
| well                   | `#f7f9fb`                    | stack background **and** row hover        |
| bar (undo)             | `#1b2430`                    | undo bar                                  |
| bar offline / online   | `#3a1d12` / `#0f3324`        | connection bar states                     |
| bar ink / strong       | `#eef2f6` / `#ffffff`        | copy / bold lead-in                       |
| action undo            | `#8fd3ff`                    | Undo                                      |
| action offline / online| `#ffc9ab` / `#a6f0cb`        | Retry / Dismiss                           |
| icons                  | `#b8c3cf` / `#ffb38a` / `#7ee2b0` | trash / wifi-off / check             |
| chips                  | 4 tint/ink pairs (see 3.2)   | type badges                               |
| delete hover           | `#fdecec` + `#b42318`        | trash button                              |
| focus rings            | `#1d6fd8` (offset 4 title, 1 controls) · `#ffffff` (bar actions) | — |
| radii                  | 18 panel · 12 bar · 10 delete · 8 chip + action · 4 title focus | — |
| face                   | `DM Sans` 400 / 600 / 700 (one variable cut) | everything                   |

**Type evidence.** The archive ships 8 woff2 that hash to **2** files (latin 62,556 B `aa530716b0d3…`,
latin-ext 31,312 B `0d0609aee778…`), duplicated at 400/500/600/700; the sheet declares only 400/600/700.
Canvas advance A/B at 100 px: **400 → 776**, 500 → 776 (500 is undeclared, so it resolves to the 400
face), **600 → 819**, **700 → 835**, 900 → 835 (clamped to the declared 700 face), system sans 400 → 806
/ 700 → 872. Three distinct advances out of one binary ⇒ **one variable cut**, wght 400–700.

Contrast (computed): ink **16.46**, muted **5.93** (5.61 on the well), chips **5.88–6.77**, bar copy
**12.29–13.91**, strong **15.65**, actions **9.64 / 10.40 / 10.50**, icons **8.75–8.84**, delete hover
**5.76**, focus ring **4.86 on white / 4.29 on the ground**. **No text pairing fails AA** — the first
variant in this family with that property.

## 5. Reference defects (do not reproduce)

1. The undo bar **announces an event that never happened** — it ships visible, `role="status"`, with
   *"Hero banner v1.png" moved to trash.* while the row it names is only `hidden`.
2. Its `data-pending` points at a row that **ships hidden** (a decoy the user never saw).
3. **Deleting one file destroys another.** `finalize()` runs `pending.remove()`, so a second delete
   permanently drops the *previous* pending row from the DOM (measured: 5 rows → 4, then the original
   pending row is unrecoverable). This is data loss, not a quirk.
4. **`is-restored` has no rule**, so the restored state is invisible and the shrunken bar
   (**41.02**) stays on screen forever with no dismiss control.
5. **The busy state is JS-guarded only**: `aria-disabled="true"`, no `disabled`, no `aria-busy`, and a
   second click is silently swallowed.
6. **The retry `setTimeout` has no handle** — it cannot be cleared on unmount.
7. **`README.md` advertises `images/`** — there is no `images/` directory and no `<img>` on the page.
8. **The screenshot is a browser mock-up**: `alert-05.jpg` 13,822 B, **1200 × 972**, AVIF behind a
   `.jpg`, framed in a macOS window (traffic lights, address bar) on a grey desk with a drop shadow.
   The page ground is `#eef1f4` edge to edge — adopt none of the chrome.
9. Dead `.cl-icon` selector (styled, unused) — tenth sibling in a row — plus two **undeclared** `500`
   weight files in `fonts/`.
10. **Both bars animate on load** (`cl-alert05-in` runs on first paint for bars nobody triggered).

## 6. Structure order for the port

1. `FilePanel` — the card, the header and the list; owns the file array and the count.
2. `FileRow` — chip, name + meta, delete button. Presentational; the delete callback comes from the
   panel.
3. `UndoBar` — a **sibling** of the list inside the stack, so its appearance does not shift the rows
   (the stack is the last child and grows downward). Rendered only while a delete is pending or while
   the restored confirmation is live.
4. `ConnectionBar` — second in the stack; owns the offline/busy/online machine and hides itself after
   Dismiss.

The stack order (undo above connection) is the reference's and is not arbitrary: the undo bar is the
newer, more urgent message of the two.

**Sibling note (do not copy values blindly).** Every earlier variant of this family looks like a
"panel with bars" too, but the tokens differ per slug: this one is the only one with **two dark
grounds plus a third online ground**, the only one where a bar **shrinks**, and (measured) the only one
with **zero phantom classes** and **zero failing contrast pairs**. Read the live sheet, not a sibling
spec.
