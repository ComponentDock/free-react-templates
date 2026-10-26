# Wafer — design notes (Alert V12, `alert-12`)

Source: `https://colorlib.com/wp/template/alert-12/` · preview `https://preview.colorlib.com/theme/bootstrap/alert-12/`
(200, 5,885 B) · screenshot `.../sites/2/alert-12.jpg` (1200 × 972, JPEG) · archive
`preview.colorlib.com/downloads/free/alert-12.zip` (208,718 B, 18 entries).
Spec: `openspec/specs/template-wafer/spec.md` · Tasks: `docs/templates/wafer/tasks.md`.

Section order is fixed by the reference and is the **first** thing to get right:

```
header (logo | tag)
  main
    kicker
    h1
    lede
    ul.menu  →  3 price tiles
    p[role=status]          ← empty until a choice
  footer (©  |  "Cookie settings" button)

section.cl-alert12          ← fixed, bottom-pinned, AFTER the site in DOM
  div.__main    (icon | copy: h2 + p | actions: 3 buttons)
  div.__panel   (hidden)    (4 rows: label + desc + switch … | Save my choices)
```

## 1. DOM skeleton (as shipped; indentation mine)

```html
<div class="cl-alert12-site">
  <header class="cl-alert12-site__bar">
    <span class="cl-alert12-site__logo">Crumb &amp; Co.</span>
    <span class="cl-alert12-site__tag">Neighbourhood bakery &middot; Est. 2014</span>
  </header>
  <main class="cl-alert12-site__main">
    <p class="cl-alert12-site__kicker">Fresh from 7am</p>
    <h1 class="cl-alert12-site__title">Sourdough, pastries and slow mornings.</h1>
    <p class="cl-alert12-site__text">Order ahead for pickup on Rua das Flores…</p>
    <ul class="cl-alert12-site__menu" aria-label="Baked this morning">
      <li><span class="cl-alert12-site__item">Country sourdough</span><span class="cl-alert12-site__price">&euro;5.20</span></li>
      …×3
    </ul>
    <p class="cl-alert12-site__saved" role="status" data-cl-alert12-saved></p>
  </main>
  <footer class="cl-alert12-site__foot">
    <span>&copy; 2026 Crumb &amp; Co.</span>
    <button class="cl-alert12-site__link" type="button" data-cl-alert12-reopen
            aria-controls="cl-alert12" aria-expanded="true">Cookie settings</button>
  </footer>
</div>

<section class="cl-alert12" id="cl-alert12" aria-labelledby="cl-alert12-title">
  <div class="cl-alert12__main">
    <span class="cl-alert12__icon" aria-hidden="true"><svg viewBox="0 0 32 32" width="30" height="30">…</svg></span>
    <div class="cl-alert12__copy">
      <h2 class="cl-alert12__title" id="cl-alert12-title">A few cookies, only if you want them</h2>
      <p class="cl-alert12__text">… Read our <a class="cl-alert12__link" href="#cookie-policy">cookie policy</a>.</p>
    </div>
    <div class="cl-alert12__actions">
      <button class="cl-alert12__btn cl-alert12__btn--ghost" aria-expanded="false"
              aria-controls="cl-alert12-panel" data-cl-alert12-settings>Settings <svg…></button>
      <button class="cl-alert12__btn cl-alert12__btn--ghost" data-cl-alert12-choice="necessary">Necessary only</button>
      <button class="cl-alert12__btn cl-alert12__btn--primary" data-cl-alert12-choice="all">Accept all</button>
    </div>
  </div>
  <div class="cl-alert12__panel" id="cl-alert12-panel" hidden>
    <ul class="cl-alert12__list">
      <li class="cl-alert12__row">
        <div><label class="cl-alert12__name" for="cl-alert12-necessary">Necessary</label>
             <p class="cl-alert12__desc" id="cl-alert12-necessary-desc">Basket, sign-in and security. Always on.</p></div>
        <input class="cl-alert12__switch" id="cl-alert12-necessary" type="checkbox" role="switch"
               checked disabled aria-describedby="cl-alert12-necessary-desc" data-cl-alert12-cat="necessary">
      </li>
      …×3 (prefs / analytics / marketing, not checked, not disabled)
    </ul>
    <div class="cl-alert12__panel-foot">
      <button class="cl-alert12__btn cl-alert12__btn--primary" data-cl-alert12-choice="custom">Save my choices</button>
    </div>
  </div>
</section>
```

Two structural facts a port must keep: the **bar sits after the site** in DOM order (so keyboard reaches it last,
even though it paints on top), and the **panel is a sibling of the main grid inside the same bordered card** — not
a second card and not a popover.

## 2. The stylesheet, in the order it matters

574 lines, in this order:

1. **A host-reset guard** — `:where(html) :is(html, body, div, span, p, a, h1…mark), :is(html, body) { all: revert }`
   plus about a dozen narrow `revert`s (`img`, `table`, `hr`, `th`, the `::-webkit-datetime-edit` parts). This is
   the family's signature move: the snippet is meant to be dropped into a Bootstrap page and must not inherit the
   framework's reboot. **Do not port it** — the React app owns its reset (`index.css`) — but note that every size
   below is a *browser default* baseline.
2. **8 `@font-face`** (Manrope 400/600/700/800 × latin, latin-ext), self-hosted, `font-display: swap`.
3. `.cl-icon { height: 1em; width: auto; fill: currentColor }` — **dead** (nothing uses it; twelfth variant in a row).
4. **The page** (`body`, `.cl-alert12-site*`) — nine rules, two clamps, one radial gradient.
5. **The bar** (`.cl-alert12`, `.__main`, `.__icon`, `.__title`, `.__text`, `.__link`, `.__actions`, `.__btn*`) —
   four custom properties on the bar (`ink`, `muted`, `accent`, `line`), one grid, one shadow, one keyframe.
6. **The panel** (`.__panel`, `.__list`, `.__row`, `.__name`, `.__desc`, `.__panel-foot`).
7. **The switch** (`.__switch` + `::after` + `:checked` + `:disabled` + `:focus-visible`) — note the **order**:
   `:disabled` comes last, which is why the locked "Necessary" switch is painted `#7fa58b` and not `#2f7d4a`.
8. **Motion** — `@keyframes cl-alert12-up { from { opacity: 0; transform: translate(-50%, 24px) } }`.
9. **Two width media queries** (860, 480) and **`prefers-reduced-motion`**.

Colour budget: **30 hex literals, 20 distinct**, plus 4 `rgba()`. That is the whole palette — cream ground, one
dark brown ink, one burnt accent, one amber focus, three switch states.

## 3. Screenshot analysis (the wp image)

1200 × 972, a **macOS browser mock-up**: traffic lights, a soft drop shadow, a grey ground and a
`preview.colorlib.com` URL pill. The page inside it matches the live render 1:1 (same copy, same three tiles, same
`Cookie settings` link bottom-right, same bar). Port the page, never the frame.

What the frame shows, top to bottom:

- **Warm cream field** with an almost invisible warm glow bleeding in from the upper right — the only "imagery",
  and it is one `radial-gradient`, not a photo.
- **Header** on one baseline: a heavy 22 px wordmark left ("Crumb & Co."), a 14 px muted tag right. Nothing else —
  no nav, no cart, no hamburger.
- **Hero** left-aligned: burnt-orange 16 px kicker, then two lines of near-black 60 px Manrope ExtraBold with tight
  tracking (the line break falls after "and"), then a 18 px lede capped at 520 px (two lines).
- **Three price tiles** in a row, 16 px radii, hairline warm border, 70 % white fill: item name bold above, price
  in accent below. They read as quiet receipts, not cards — no shadow, no hover.
- **A large empty breathing space** (the `flex-1` main and the 220 px reserved padding) before the footer line.
- **Footer**: copyright left, underlined accent "Cookie settings" right.
- **The bar**: a wide white card (980 of the 1200 frame) hovering 16 px above the bottom edge, radius 22, a long
  soft shadow. Inside: a 52 px rounded plate with a two-tone cookie, a bold 17 px line, three lines of small warm
  grey body copy with one underlined accent phrase, then three buttons — `Settings ⌄` and `Necessary only`
  outlined, `Accept all` in near-black. Button radii 12; the primary is the only filled object in the whole page.

## 4. Section-by-section fidelity

| # | section        | fidelity notes |
| - | -------------- | -------------- |
| 1 | header         | max-width **1100**, `padding: 24px 24px 0`, `justify-content: space-between`, `align-items: baseline`, `flex-wrap`, `gap: 4px 16px`. Logo **22 / 800 / -.02em**, tag **14 / 400 / #6e5a45**. No border, no background. |
| 2 | hero            | block padding `clamp(40px, 9vw, 110px) 24px 40px` (**110** at ≥1222). Kicker 16/700 `#9a5412`, `margin: 0 0 12px`. `h1` `clamp(34px, 6vw, 60px)` / **1.05** / **-.035em**, `max-width: 720` ⇒ **720 × 126** (2 lines). Lede 18/1.55, `max-width: 520`, `margin: 18px 0 0` ⇒ **55.78** (2 lines). |
| 3 | price tiles     | `<ul>` flex wrap, `gap: 12`, `margin: 32px 0 0`. Each `li` `flex: 0 1 190px` but **228** wide (grows, does not shrink below content), `padding: 16px 18px`, `border: 1px #eadfce`, `radius: 16`, `background: rgba(255,255,255,.7)`. Item 16/700, price 15/600 `#7a3f0c`. At ≤480: `flex: 1 1 90px`, `padding: 12`, `font-size: 14`, gap 8. |
| 4 | status line     | `<p role="status">`, `margin: 20px 0 0`, `#1f6b3b`, **700**, `:empty { display: none }` so it costs 0 px until it has text. In the port it also carries the Component Dock link's neighbourhood — keep it above the footer. |
| 5 | footer          | `max-width: 1100`, `padding: 0 24px`, `justify-content: space-between`, `flex-wrap`, `gap: 8px 20px`, 14 px `#6e5a45`. The button is bare (`border: 0; background: none; font: inherit; font-weight: 700; text-decoration: underline; text-underline-offset: 3px`). |
| 6 | bar shell       | `fixed; left 50%; bottom 16; z 50; width calc(100% - 32px); max-width 980; max-height calc(100vh - 32px); overflow auto; border 1px #eadfce; radius 22; bg #fffdf9; transform translateX(-50%)`; shadow `0 30px 60px -20px rgba(60,35,10,.35), 0 2px 6px rgba(60,35,10,.06)`; `line-height: 1.5`. At 1440: **980 × 134.75** at (230, 749.25), bottom **884**. |
| 7 | bar grid        | `grid-template-columns: auto 1fr auto`, `gap: 18px 20px`, `align-items: center`, `padding: 20px 22px` ⇒ columns **52 / 451 / 391**. |
| 8 | icon plate      | **52 × 52**, `radius 16`, `#fbeedb`, `display: grid; place-items: center`; the cookie is a **30 × 30** SVG — one path (`#e9b872` fill, `#7a4a12` stroke 1.8, round joins) plus four dots at (11,14) r1.8, (15,21.5) r1.8, (20.5,17) r1.4, (10,20) r1.1. |
| 9 | copy column     | `h2` 17/800/25.5 `margin: 0`; body **14.5 / 1.5** `#5f4e3c`, `margin: 2px 0 0` ⇒ **65.25 (3 lines)** at 451. Inline link 700 `#7a3f0c`, underlined, `underline-offset: 3px`, `:focus-visible` 2 px outline at offset 2. |
| 10 | actions        | three buttons, `gap: 8`, `justify-content: flex-end`. **120 / 145 / 110 × 45.75**; `padding: 11px 18px`, `radius: 12`, `border: 1.5px` (**computed 1px**), `font: inherit` then `size 14.5 / weight 700`, `white-space: nowrap`, `transition: background-color .15s, border-color .15s`. Ghost `#dccbb4` → hover `#7a3f0c` + `#fbf1e3`; primary `#2a1d10` → `#4a3521`. |
| 11 | disclosure     | `padding: 4px 22px 20px`, `border-top: 1px #eadfce`. List = `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`, `gap: 0 32px` ⇒ **3 × 290** (934 content) at 1440. Row = `flex; space-between; gap: 16; align-items: center; padding: 14px 0; border-bottom: 1px #eadfce` ⇒ **93.5**. |
| 12 | switches       | 46 × 26, `radius 999`, `appearance: none`, knob `::after` 20 × 20 at 3/3, `translateX(20px)` when on. Off `#8a7a68`, on `#2f7d4a`, disabled `#7fa58b` (**painted over `checked` — fix in the port**). `role="switch"` on a native checkbox, described by the row's `<p id>`. |
| 13 | panel foot     | `flex; justify-content: flex-end; padding-top: 16px`, one primary button **157 × 45.75**. |
| 14 | motion         | `.4s cubic-bezier(.2,.9,.3,1)` entry with **`translate(-50%, …)`**; `.15s` button colours; `.2s` chevron and switch; all off under `prefers-reduced-motion`. |

## 5. Source → React mapping

| source                                     | port                                                          |
| ------------------------------------------ | ------------------------------------------------------------- |
| `.cl-alert12-site` + `__bar/__main/__foot` | `<BakeryPage>` = `<SiteHeader>`, `<Hero>`, `<MenuTiles>`, `<SiteFooter>` |
| `.cl-alert12`                              | `<ConsentBar>` (`role="region"`, `aria-labelledby`)            |
| `__main` grid                              | `<ConsentSummary>` (icon / copy / actions) — one CSS grid      |
| `__panel` + `__list` + `__row`             | `<ConsentPanel>` + `<CategorySwitch>` × 4                      |
| `__switch` (checkbox + `::after`)          | the same native input; colours from a typed `SwitchState` map  |
| 77-line IIFE + 4 `data-*` hooks            | `useConsent()` reducer + `describeChoice()` pure function      |
| `[data-cl-alert12-saved]` `role="status"`  | `<p role="status" aria-live="polite">` inside `<main>`         |
| `[data-cl-alert12-reopen]` footer button   | `<ReopenButton>` — `aria-controls` + mirrored `aria-expanded`  |
| `#cookie-policy` anchor (dangling)         | a `<button>` that opens the panel (fix 4)                      |

Keep the six transitions in one place: `openPanel`, `closePanel`, `choose('all' | 'necessary' | 'custom')`,
`reopen`, `escape`, `toggle(category)`. Each of them ends with focus on a named element — that is the part the tests
should assert, because it is the part the reference gets right.

## 6. Sibling comparison (why this one is different — and what it closes)

| variant        | shape                                                       | script | dismissible | above the page |
| -------------- | ----------------------------------------------------------- | ------ | ----------- | -------------- |
| noticeboard    | static severity ladder                                      | no     | no          | no             |
| allclear       | dismiss/restore list                                        | yes    | yes         | no             |
| fieldguide     | admonitions inside prose                                    | no     | no          | no             |
| banderole      | page-level announcement bar                                 | yes    | yes         | **yes** (in flow) |
| snapback       | file list, two actionable bars                              | yes    | yes         | no             |
| beaconry       | dark cluster-health panel                                    | yes    | no          | no             |
| proofmark      | form returned with an error summary                         | yes    | yes         | no             |
| mayfly         | self-dismissing toasts                                       | yes    | timeout     | **yes** (fixed) |
| steadystate    | status page that never changes                               | no     | no          | no             |
| punnet         | four-tile notification wall                                  | no     | no          | no             |
| underrule      | per-field verdict strip welded to the input                  | yes    | no          | no             |
| **wafer**      | **fixed consent card + a growing disclosure panel**          | **yes**| **by choice** | **yes** (fixed, over content) |

`wafer` is the family's only variant that is **persistent until decided**, the only one that **grows** (134.75 →
408.5), and the only one whose four "tones" are **categories** rather than severities. It is also the last one:
twelve of twelve prepped, none shipped yet, so the alert family is now closed for prep and the queue moves to the
**`hero` family (12)**, starting at `hero-01`.

## 7. Measurement traps (this run)

- **The doubled-prefix 404.** Probing `https://preview.colorlib.com/theme/theme/bootstrap/alert-12/` returns
  **404 (9 B)** and looks like a broken preview; the real path is `theme/bootstrap/alert-12/` → **200, 5,885 B**.
  Always build the URL as `preview.colorlib.com/` + the path from `TEMPLATES.md`, never `theme/` + a path that
  already starts with `theme/`.
- **`1.5px` is a lie in Chrome.** `border: 1.5px solid #dccbb4` computes to `1px` (measured
  `1px solid rgb(220, 203, 180)`, and the button's `45.75` height only closes with `2 × 1`). Declare `1px`.
- **The screenshot is a browser mock-up**, so its 1200 × 972 frame is not the viewport and its grey ground is not
  the page's `#fbf6ee`.
- **Measure after the animation.** The bar's `.4s` entry starts 24 px low; a sweep sampled 150 ms after load read
  `barY 751.3` and `buttom 886.1` instead of the true `749.25 / 884`. Wait ≥ 600 ms (or `animation: none`) before
  recording geometry.
- **The panel is 3 columns at 1440**, which is easy to miss from the screenshot (the shot shows the bar closed):
  `floor((934 + 32) / (280 + 32)) = 3`.
- **`checked disabled` is one colour, not two.** `.cl-alert12__switch:disabled` is declared after `:checked`, so the
  "always on" row is `#7fa58b`; a port that keeps the source's order inherits the same 2.70 : 1 boundary.
- **Escape needs a real test with focus outside the bar** — driving it from inside the panel passes on a broken
  implementation.
- **The message grammar has three shapes** (1, 2, 4 items) and the four-item case is the only one the screenshot's
  flow reaches; unit-test `describeChoice` for all three.
