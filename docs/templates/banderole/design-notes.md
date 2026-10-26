# Banderole — design notes

Source: ColorLib **Alert V04** (`alert-04`), preview `https://preview.colorlib.com/theme/bootstrap/alert-04/`.
Target: `apps/banderole`. Spec: `openspec/specs/template-banderole/spec.md`. All numbers below were
measured on 2026-10-26 with `curl -4` + Playwright 1.62 Chromium at 1440 × 900 unless stated.

---

## 1. What this design is

A **product landing page with a dismissible announcement bar on top**. Three bands, nothing else:

```
aside.cl-alert04     57.75 px   gradient 100deg #14532d → #0f766e, ink #f0fdf4
header.cl-alert04-site  72 px   1120 + 24/24 padding, logo + 3 nav links
main.cl-alert04-hero   608 px   820 + 24/24 padding, centred, on #f6f4ee
```

The bar is the subject, and it is the family's first **persistent** state: dismiss writes
`localStorage`, a reload starts collapsed, and the only way back is a control in the hero. Compare the
siblings: `alert-01` (noticeboard) is a static severity ladder, `alert-02` (allclear) is a
dismiss/restore *list*, `alert-03` (fieldguide) is admonitions inside prose and has **no script at all**.
`alert-04` is the one where the announcement is **page chrome** — which is why it needs a header and a
hero under it, and why 60 % of its fidelity budget is the bar's geometry rather than its copy.

Counts as shipped: **1 h1, 0 h2–h6, 2 buttons, 6 links, 3 svgs, 0 imgs, 0 forms, 0 inputs, 8 focusable**.

## 2. Exact DOM tree (as shipped, 2,790 B live / 2,587 B in the archive)

```
body.cl-alert04-page                     ← class exists, has NO rule (phantom)
├── aside.cl-alert04[aria-label="Announcement"][data-cl-alert04-key="fernwood-offline-2026-10"]
│   └── div.cl-alert04__inner
│       ├── p.cl-alert04__msg
│       │   ├── span.cl-alert04__tag            "New"        (CSS uppercases → NEW)
│       │   └── span.cl-alert04__copy           <strong>Offline mode is here.</strong> Keep writing on the train…
│       ├── a.cl-alert04__cta[href="#release-notes"]
│       │   ├── "Read the release notes"
│       │   └── svg 16×16  M5 12h13M13 6l6 6-6 6  (stroke 2.2, round caps)
│       └── button.cl-alert04__close[type=button][aria-label="Dismiss announcement"]
│           └── svg 18×18  M6 6l12 12M18 6 6 18
├── header.cl-alert04-site
│   ├── a.cl-alert04-site__logo[href="#top"]
│   │   ├── svg 28×28  rect rx=9 fill #14532d + leaf path stroke #bbf7d0 / 2
│   │   └── "Fernwood"
│   └── nav.cl-alert04-site__nav[aria-label="Main"]   → #features  #pricing  #journal
└── main.cl-alert04-hero#top
    ├── p.cl-alert04-hero__kicker        "A calm place for long-form writing"
    ├── h1.cl-alert04-hero__title[tabindex="-1"]
    ├── p.cl-alert04-hero__text
    ├── div.cl-alert04-hero__actions
    │   └── a.cl-alert04-hero__button[href="#start"]  "Start writing free"
    └── p.cl-alert04-hero__demo
        └── "Closed the banner? " + button.cl-alert04-hero__reset[data-cl-alert04-reset] "Show it again"
```

One script: `js/snippet.js` (1,970 B) — `initAnnouncement()` only. **ids in the document: `#top`, and
nothing else.** Five `href` values (`#release-notes`, `#features`, `#pricing`, `#journal`, `#start`)
are dead in the reference.

## 3. Section-by-section fidelity notes

### 3.1 The bar — geometry is a sum, not a setting

```
barH = padTop + max(msgLine 21.75, ctaH 33.75) [+ 8 gap + row2…] + padBottom
1440 : 12 + 33.75 + 12               = 57.75   ✓ measured 57.75
1000 : 12 + 21.75 + 8 + 33.75 + 12   = 87.50   ✓ (CTA wraps to row 2)
700  : 12 + 43.5 + 8 + 33.75 + 12    = 109.25  ✓ (copy → 2 lines)
≤640 : 12 + 43.5 + 8 + 33.75 + 14    = 111.25  ✓ (bottom padding 14)
420  : 12 + 65.25 + 8 + 33.75 + 14   = 133.00  ✓ (copy → 3 lines)
320  : 12 + 87 + 8 + 33.75 + 14      = 154.75  ✓ (copy → 4 lines)
```

The single-row threshold is **1001 px**: `msg 630.2 + gap 20 + cta 222 = 872.2` plus `128` padding
= `1000.2`. Measured: **one row at 1001, two at 1000.** Do not add a breakpoint for it — `flex-wrap`
gets it right once the paddings and the CTA's `padding: 6px 14px` are exact.

Every child:

| child            | value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| `.__inner`       | `position: relative`, flex, `flex-wrap: wrap`, `gap: 8px 20px`, centred, `padding: 12px 64px`, `min-height: 0`, `overflow: hidden`, 15 / **21.75** (1.45) |
| `.__msg`         | flex, `gap: 12px`, `align-items: center`, `margin: 0`                                          |
| `.__tag`         | `flex: none`, `padding: 2px 9px`, r **999**, `background: #bef264`, ink `#14350f`, **12 / 700**, `letter-spacing: .06em` (**0.72 px**), uppercase → **46.2 × 21.4** |
| `.__copy strong` | 700 (the rest inherits 400)                                                                    |
| `.__cta`         | inline-flex, `gap: 6px`, `padding: 6px 14px`, r 999, `background: rgba(255,255,255,.14)`, `box-shadow: inset 0 0 0 1px rgba(255,255,255,.28)`, `color: #fff`, **15 / 600**, `white-space: nowrap` → **222 × 33.75**; svg 16 with `transition: transform .2s`; hover fill `.24` + arrow `translateX(3px)` |
| `.__close`       | absolute, `right: 14px`, `top: 50%`, `translateY(-50%)`, **36 × 36**, grid-centred, r 50%, transparent, ink colour, hover `rgba(255,255,255,.16)` |

Two focus rings, deliberately different: **banner controls** `2px solid #bef264; offset 2`, **page
controls** `2px solid #0f766e; offset 3; radius 6`, and the `h1`'s programmatic ring
`2px solid #0f766e; offset 6; radius 6` with the plain `:focus` outline suppressed.

### 3.2 Header — a 1120 box, not a 1120 page

`.cl-alert04-site` is `max-width: 1120px; padding: 22px 24px` → **1168** wide at x **136** on a 1440
viewport, height **72** = `22 + 28 + 22`. No border, no shadow, same ground as the page.

- mark: 28 × 28, `rx 9`, fill `#14532d`, glyph stroked `#bbf7d0` at 2
- wordmark: **20 / 700**, `#14281c`, `gap: 10px` to the mark
- nav: three links, `gap: 24px`, **16 / 500**, `#3b4a40` → hover `#14532d` + underline offset 4
- ≤640: padding `18px 16px` → height **64**; ≤400: nav wraps to its own row → height **97**
  (`18 + 28 + 12 + 21 + 18`)

### 3.3 Hero — three clamps stacked

`max-width: 820px; margin: 0 auto; padding: clamp(48px, 10vw, 110px) 24px 96px; text-align: center` on
`#f6f4ee`; the content column is 820 at ≥868 viewport, else `vw − 48`.

| run        | value                                                     | measured                     |
| ---------- | --------------------------------------------------------- | ---------------------------- |
| kicker     | 16 / **600** `#0f766e`, `margin: 0 0 14px`                | 820 × 21                     |
| `h1`       | `clamp(36px, 7vw, 68px)` / **1.02** / `−0.035em` / `#14281c` | **138.72** — two lines at 68 px, width 820, ls **−2.38** |
| paragraph  | 18 / **1.55** `#445248`, `max-width: 560`, `margin: 20px auto 0` | **560 × 83.7** (3 lines)     |
| actions    | flex, `gap: 12px`, `margin-top: 32px`                     | button **183 × 47**          |
| button     | 16 / 600, `padding: 13px 22px`, r 999, `#14532d`, hover `#0f3f22` | 183 wide incl. label        |
| demo line  | 14 px `#56645a`, `margin: 28px 0 0`                       | **820 × 18**                |
| reset      | 14 / **600** `#0f5f58`, underline `offset 3px`, hover `#14532d` | **97 × 18**           |

Clamp ladders (verified point by point):

| vw      | 1440 | 1200 | 1024 | 900  | 820   | 760   | 700  | 660   | 640   | 600 | 520   | ≤514.3 |
| ------- | ---: | ---: | ---: | ---: | ----: | ----: | ---: | ----: | ----: | --: | ----: | -----: |
| `h1`    |   68 |   68 |   68 |   63 |  57.4 |  53.2 |   49 |  46.2 |  44.8 |  42 |  36.4 |     36 |
| pad-top |  110 |  110 | 102.4|   90 |    82 |    76 |   70 |    66 |    64 |  60 |    52 |     48 |

### 3.4 The behaviour, exactly

```js
const KEY = 'cl-alert04:' + (banner.dataset.clAlert04Key || 'announcement');
//   → "cl-alert04:fernwood-offline-2026-10"

if (store.get(KEY) === 'dismissed') banner.hidden = true;   // load: no transition, no flash

hide()  : store.set(KEY, 'dismissed')
          if (reduceMotion())               banner.hidden = true
          else  banner.classList.add('is-closing')            // grid-rows 1fr→0fr, opacity 1→0
                end on transitionend(target === banner, once)  OR  setTimeout(end, 500) — once-guarded
                end(): hidden = true; classList.remove('is-closing')
          h1.focus()                                          // h1[tabindex="-1"]

reset() : store.remove(KEY); classList.remove('is-closing'); banner.hidden = false
          cta.focus()
```

Measured outcomes (fresh context per row):

| action                    | result                                                                      |
| ------------------------- | --------------------------------------------------------------------------- |
| load, no key              | bar **57.75**, header `y 57.75`, 8 focusable                                |
| close                     | `hidden=true`, **0 px**, header `y 0`, class removed, key=`dismissed`, focus **H1** |
| "Show it again"           | `hidden=false`, **57.75**, key **deleted**, focus **CTA**                   |
| reload after dismiss      | `hidden` before layout, header `y 0`, **no flash**                          |
| close with `reduceMotion` | `hidden=true` instantly, **`.is-closing` never applied**, key written        |

`localStorage` is read/written through a `try/catch` wrapper — a throwing store degrades to "always
visible", never to a broken page.

## 4. Tokens

| token                  | value                       | where                                    |
| ---------------------- | --------------------------- | ---------------------------------------- |
| `--cl-alert04-from`    | `#14532d`                   | gradient start (top-left, 100deg)        |
| `--cl-alert04-to`      | `#0f766e`                   | gradient end (bottom-right)              |
| `--cl-alert04-ink`     | `#f0fdf4`                   | bar copy, close icon                     |
| `--cl-alert04-lime`    | `#bef264`                   | **tag fill + banner focus ring only**    |
| tag ink                | `#14350f`                   | on the lime                              |
| CTA glass              | `rgba(255,255,255,.14)` + `inset 0 0 0 1px rgba(255,255,255,.28)` | the pill |
| page ground            | `#f6f4ee`                   | body                                     |
| ink / body / muted     | `#14281c` / `#445248` / `#3b4a40` | headline / hero text / nav          |
| kicker                 | `#0f766e`                   | hero eyebrow                             |
| demo / reset           | `#56645a` / `#0f5f58`       | the "Closed the banner?" line            |
| primary button         | `#14532d`, hover `#0f3f22`  | hero CTA                                 |
| radii                  | **999** pills, **50%** close, **9** logo mark, **6** focus rings | — |
| face                   | `Space Grotesk` 400–700 (one variable cut) | everything                  |

Contrast (computed): bar ink **8.70 → 5.23** across the gradient; tag **10.40**; nav **8.53**; headline
**14.14**; hero text **7.50**; button **9.11**; demo **5.67**; reset **6.82**; kicker **4.98**. The one
soft spot is the **CTA's white label on its own glass** — **6.26** at the dark end, **4.65** at the
pill's real position, **4.17** at the gradient's teal extreme. The port must keep it ≥ 4.5 across the
whole gradient (`bg-white/22` or a darker pill).

## 5. Reference defects (do not reproduce)

1. **5 dead fragments** — `#release-notes`, `#features`, `#pricing`, `#journal`, `#start`; the document's
   only id is `#top`.
2. **Restore control visible while the bar is up**, where it does nothing but steal focus to the CTA.
   Render it only when dismissed.
3. **README advertises `images/  its images`** — no `images/` directory, no `<img>` on the page.
4. **Phantom `.cl-alert04-page`** (on `<body>`, no rule) and **dead `.cl-icon`** (styled, unused) — the
   ninth snippet in a row with that leftover.
5. **`.cl-alert04-hero__button` declared twice** with the same selector.
6. **No `aria-live` / `role="alert"`** on the bar (correct for a persistent banner, but it means the
   dismissal is only conveyed by the focus move — keep the focus move).
7. **The screenshot is a browser mock-up**: `alert-04.jpg` is **1200 × 972** AVIF behind a `.jpg`
   extension, framed in a macOS window on a grey desk with a drop shadow. The ground is `#f6f4ee` edge
   to edge; adopt none of the chrome.

## 6. Structure order for the port (and why it cannot be reordered)

1. `AnnouncementBar` — **first in the DOM** and a sibling of the header, so dismissing it pulls the whole
   page up (the reference's `header y 57.75 → 0` measurement is the proof).
2. `SiteHeader` — 1120 box, mark + wordmark left, nav right.
3. `Hero` — the only content band; it also owns the restore control, because the reference puts it
   there and because a restore control inside the collapsed bar would be unreachable.

No footer band, no second section, no imagery. A port that "improves" this with a features grid or a
footer has built a different template.
