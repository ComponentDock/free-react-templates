# Steadystate — design notes

Reference: ColorLib **Alert V09** (`alert-09`) · live `https://preview.colorlib.com/theme/bootstrap/alert-09/`
(**200, 4,909 B**) · CSS `css/style.css?v=cadafce7` (**12,347 B**, 517 lines, sha
`2506f03e…a87a0c4` live **and** archive) · **no script** (`/js/snippet.js` → hard **404**, 9 B; the archive
has no `js/`) · archive `downloads/free/alert-09.zip` (**309,885 B** = 302.6 KiB, 18 entries; HTML differs
from live only in `<head>`) → **live preview verified, the archive is its un-versioned twin**.

Measured 2026-10-26 with Playwright 1.62 Chromium against the live page at 1440 × 900, all faces loaded,
then swept 1 px at a time across every seam (320 → 1440).

## What the design is

**A status page, not an alert.** The family's previous eight entries all *show* an alert — a bar, a toast, a
severity ladder, an error summary, a set of admonitions. This one is the page an alert lives on: a brand
line, one incident card that states a degraded capability in plain language, a collapsible timeline of what
happened, and a second panel listing every service with a colour dot beside a word. Nothing is dismissible;
nothing times out; no button exists. The status *is* the page.

Two palettes run in parallel and they mean different things: **amber** (`#f2a900` bar, pill glyph, current
dot, `Degraded` dot) is **state**, **green** (`#146c43` text / `#1f9d61` dot) is **also state**, and **blue**
(`#0b5cad`) is **interaction only** — the one link and every focus ring. Nothing else in the sheet uses
blue, which is why the link reads as interactive at a glance.

The name **steadystate** is the control-theory term for a system that has settled — the thing this page is
reporting on. It carries the family's single-word pattern (noticeboard, allclear, fieldguide, banderole,
snapback, beaconry, proofmark, mayfly).

The port is therefore a **layout and semantics problem, not a behaviour problem**: there is no script to
translate, and the only interactive element is a native `<details>` the browser already implements.

## DOM skeleton (the reference, verbatim shape)

```html
<main class="cl-alert09-demo">                          <!-- min-height:100vh, padding clamp(24px,6vw,72px) 16px -->
  <div class="cl-alert09-page">                         <!-- max-width 720, colour #16202e, line-height 1.55 -->
    <header class="cl-alert09-page__head">              <!-- flex wrap, space-between, mb 24 -->
      <p class="cl-alert09-page__brand">                <!-- 18/700, gap 10, 24px inline SVG mark -->
        <svg …/> Tidewater Pay status
      </p>
      <a class="cl-alert09-page__sub" href="#subscribe">Subscribe to updates</a>   <!-- 14/600 #0b5cad, DEAD -->
    </header>

    <section class="cl-alert09" role="status" aria-labelledby="cl-alert09-title">   <!-- border-top 6px tone, r 14 -->
      <div class="cl-alert09__top">                     <!-- padding-top 18, flex wrap space-between -->
        <span class="cl-alert09__state">                <!-- pill: 4 12 4 10, radius 999, #fff3d6 / #5c3a00 -->
          <svg …/>                                      <!-- 16px triangle, fill currentColor(#f2a900), stroke #3d2a00 -->
          Degraded performance
        </span>
        <span class="cl-alert09__since">                <!-- 12.5 mono #566173 -->
          Started 25 Sep, 09:12 UTC &middot; 2 h 18 min
        </span>
      </div>
      <h1 class="cl-alert09__title" id="cl-alert09-title">Card payments in the EU are slower than usual</h1>
      <p class="cl-alert09__text">…</p>                 <!-- 16/400 #3b4658 -->

      <ul class="cl-alert09__affected" aria-label="Affected services">              <!-- gap 8, my 16/18 -->
        <li class="cl-alert09__chip cl-alert09__chip--degraded">Card payments &middot; EU</li>
        <li class="cl-alert09__chip cl-alert09__chip--degraded">3-D Secure</li>
        <li class="cl-alert09__chip">Payouts &middot; operational</li>              <!-- not affected — defect -->
      </ul>

      <details class="cl-alert09__details" open>                                    <!-- margin 0 -24, border-top -->
        <summary class="cl-alert09__summary">                                        <!-- flex, 14 24, 600 -->
          <span>Incident timeline</span>
          <span class="cl-alert09__count">4 updates</span>                           <!-- literal — defect -->
          <svg class="cl-alert09__chev" …/>                                          <!-- 18px, ml auto, 180° while open -->
        </summary>
        <ol class="cl-alert09__timeline">                                            <!-- pt 4, px 24, pb 18, pl 52 -->
          <li class="cl-alert09__event cl-alert09__event--current">                  <!-- ::before dot, ::after rail -->
            <p class="cl-alert09__ev-head">
              <span class="cl-alert09__ev-label">Monitoring</span>
              <time class="cl-alert09__ev-time" datetime="2026-09-25T11:20Z">11:20 UTC</time>
            </p>
            <p class="cl-alert09__ev-text">…</p>
          </li>
          <!-- Identified / Update / Investigating, newest first, same shape -->
        </ol>
      </details>
    </section>

    <ul class="cl-alert09-services" aria-label="All services">                        <!-- mt 20, r 14, border -->
      <li><span>REST API</span><span class="cl-alert09-services__ok">Operational</span></li>
      <!-- Dashboard · Card payments (__warn, Degraded) · Webhooks -->
    </ul>
  </div>
</main>
```

Counts: **1 `h1`** and nothing else (no `h2`–`h6`; event labels are `<span>`s), **1 `<a>`**, **0 `<button>`**,
**0 `<input>`**, **0 `<img>`**, **3 `<svg>`** (brand mark, pill triangle, chevron — all `aria-hidden`),
**1 `<details>`**, **4 `<time>`**, **11 `<li>`** (3 chips + 4 events + 4 services), **1 id**, **1 fragment**
(`#subscribe` → nothing). **28** markup classes, **28** styled, **0** unstyled, **1** dead rule
(`.cl-icon`). **0 `<script>`**.

## Section-by-section fidelity notes

### 1. Ground and column

`body { margin: 0; background: #f4f6f9; font-family: "IBM Plex Sans", system-ui, … }` — a cool grey-blue
ground, **not** the warm off-white of the earlier variants. The demo wrapper is
`box-sizing: border-box; min-height: 100vh; padding: clamp(24px, 6vw, 72px) 16px`, so the top gutter is 24
at ≤ 400, `6vw` between, and 72 from **1200** up (measured 72 at 1440 — the column starts at y 72, not 0).
The column is `max-width: 720px; margin: 0 auto` with **no** breakpoint of its own: it is `vw − 32` below
752 and 720 above.

### 2. Header

One flex row, `flex-wrap: wrap; gap: 8px 16px; align-items: center; justify-content: space-between;
margin-bottom: 24`. The brand is `18/700` with a **24 × 24** inline SVG (two wave strokes `#0b5cad` + a
`#f2a900` dot in the reference — re-draw it in the port's palette; it is a *decorative* mark, `aria-hidden`,
`focusable="false"`). The link is `14/600` `#0b5cad` with `text-underline-offset: 3px` and a
`2px #0b5cad` focus ring at `offset: 2px`.

**Two facts:** the row holds one line at content ≥ **376** (brand 216 + gap 16 + link 144) — measured
one row at **408**, two at **407**, where the header grows 27.89 → 57.6 — and the link's target is **dead**
(defect 1). The port points it at `#services` or a real feed URL.

### 3. The card and its 6 px bar

`border: 1px solid #ead9b0` on three sides plus `border-top: 6px solid var(--tone)`, `border-radius: 14`,
`overflow: hidden`, `background: #fff`, `padding: 0 24px 8px`, and the double shadow
`0 1px 2px rgba(22,32,46,.05), 0 16px 32px -24px rgba(22,32,46,.3)`. The `overflow: hidden` is load-bearing:
without it the amber bar would square off over the radius. The card is **720 × 601.86** and its arithmetic
is exact:

```
6 (border-top) + 46.14 (__top) + 14 + 32.5 + 6 (h1) + 49.59 (__text)
+ 16 + 28.14 + 18 (__affected) + 376.48 (__details) + 8 (pb) + 1 (border-bottom) = 601.85
```

The top row is `display: flex; flex-wrap: wrap; gap: 8px 16px; align-items: center;
justify-content: space-between; padding-top: 18px` — the 18 px lives **on the row**, not on the card, which
is why `__top` measures 46.14 (18 + 28.14) and starts flush under the bar.

**The pill** is 197 wide: `inline-flex; gap: 8; align-items: center; padding: 4px 12px 4px 10px;
border-radius: 999px; background: #fff3d6; color: #5c3a00; font-size: 13px; font-weight: 700`, with a
16 × 16 triangle whose `fill` is `currentColor` (which the rule `.__state svg { color: var(--tone) }` turns
amber) and whose inner `!` stroke is a literal `#3d2a00`. The glyph is `aria-hidden` — the pill's words are
the state.

**The start line** is 304 wide, `12.5px` IBM Plex Mono `#566173`, `space-between`-pushed to the right edge
(x 751 against the pill's 385). It is the only place the mono face appears outside the timeline.

### 4. Headline, summary, chips

The `h1` is `clamp(21px, 3.4vw, 26px)/700`, `line-height: 1.25`, `letter-spacing: -.01em` (−0.26 px at 26),
`margin: 14px 0 6px`; 32.5 tall and one line at 1440 (content 670). It drops to two lines below content
**454** (vw **535**).

The paragraph is two lines (**49.59**) at `16 / 1.55`; three lines at 540–640, four at 400–500, five at
360–375, six at 320. Its *kind* matters: it says what fraction is affected, that money is not lost, and that
the scope is regional — the reference's own reassurance pattern.

The chips are `flex; flex-wrap: wrap; gap: 8; margin: 16px 0 18px; list-style: none`. Two carry
`--degraded` (`border-color: #efcf82; background: #fffaf0; color: #5c3a00; font-weight: 600`), the third is
plain (`1px solid #d5dbe4`, inherited ink, weight 400). Widths at 1440: **147 / 93 / 147**, so one row needs
`147 + 8 + 93 + 8 + 147 = 403` px of content.

**The fold is not monotonic**: `content = vw − 82` above 480 and `vw − 66` at ≤ 480. One row at **≥ 485**
(content 403), **two rows at 481–484** (content 399–402), **one row again at 469–480** (content 403–414),
two rows at ≤ 468. Measured card heights across the seam: **764.6 (480) · 804.7 (481) · 768.6 (485)**. This
is the same content-box/padding-step trap the family hit on the second variant, arriving through a second
door.

### 5. The `<details>` panel

`margin: 0 -24px` (so it spans the full 718 px inside the 1 px borders), `border-top: 1px solid #e8ebf0`,
**`open` in the markup**. The summary is `flex; gap: 10; align-items: center; padding: 14px 24px;
font-weight: 600; cursor: pointer`, with the marker suppressed (`list-style: none` +
`::-webkit-details-marker { display: none }`), a `#f8f9fb` hover and an inset focus ring. Its height is
**52.8** (`14 + 24.8 + 14`).

The count pill (12.5 / 500, sans) is `#eef1f5`/`#475264`, radius 999, `padding: 1px 8px`. The chevron is 18 px,
`margin-left: auto`, `color: #566173`, `transition: transform .2s ease`, and the rotate rule is
`[open] .__chev { transform: rotate(180deg) }`.

**Measured transforms:** open → `matrix(-1, 0, 0, -1, 0, 0)`; closed → `none`; 60 ms after a click →
`matrix(-0.281552, 0.959546, …)` (≈ −73°) — i.e. *mid-transition*, which is neither state. Any test that
samples the transform immediately after toggling is wrong; wait ≥ 200 ms (or disable transitions via
`prefers-reduced-motion`, where the rule is `transition: none`).

**Open → closed:** card 601.86 → **279.17**, document 1018 → **900**, `<details>` box 376.48 → **53.8**.
Reopening restores 601.86 / 1018 exactly. `Enter` on the focused summary toggles it; nothing in the port
needs to handle keys.

### 6. The timeline rail

`position: relative; list-style: none; padding: 4px 24px 18px 52px` — the 52 px left padding is the rail's
gutter. Each `li` is `position: relative; padding-bottom: 18px` (last child 0).

```css
.__event::before {                       /* the dot */
  content: ""; position: absolute; top: 7px; left: -23px;
  width: 11px; height: 11px; border: 2px solid #b6bfcc;
  border-radius: 50%; background: #fff;
}
.__event::after {                        /* the connector */
  content: ""; position: absolute; top: 22px; bottom: -4px; left: -18px;
  width: 1.5px; background: #dde2e9;
}
.__event:last-child::after { display: none }
.__event--current::before {
  border-color: var(--tone); background: var(--tone); box-shadow: 0 0 0 4px #fff0cc;
}
```

The `bottom: -4px` is what makes the rail continuous across the 18 px gap: each connector reaches 4 px past
its event, into the next one's padding. Measured connector heights **73.2969 / 73.2969 / 50.0469 / none**
against event heights **91.3 / 91.3 / 68.05 / 50.05** (2-line, 2-line, 1-line, 1-line bodies).

The **first** event is the current one (`--current` on the first `<li>`, the `<ol>` ordered newest-first), so
a port that marks "the last item" as current inverts the design. Its label colour is `--cl-alert09-deep`
(`#7a4b00`); every other label is the inherited `#16202e`.

Event head: `flex; flex-wrap: wrap; gap: 4px 12px; align-items: baseline`, label `16/700`, time `12.5` mono
`#566173` in a `<time datetime>` (the datetime values are minute-precision UTC, `2026-09-25T11:20Z`). Body
`15px` at `line-height: 23.25`, `margin: 2px 0 0`.

### 7. The services panel

`margin: 20px 0 0; border: 1px solid #e1e6ed; border-radius: 14; background: #fff; list-style: none`. Each row
`display: flex; gap: 12; justify-content: space-between; padding: 12px 20px; font-weight: 500` with
`border-top: 1px solid #eef1f5` (first child 0) — hence 48.8 then 3 × 49.8 and a 200.19 panel. The status is
`inline-flex; gap: 8; align-items: center; font-size: 14px` with an **8 px** `::before` dot: `#1f9d61` for
`__ok` (`#146c43` text), `#f2a900` for `__warn` (`#7a4b00` text). Both carry the word, so the dot is
redundant by design.

## Screenshot analysis (the TEMPLATES.md reference image)

`https://colorlib.com/wp/wp-content/uploads/sites/2/alert-09.jpg` — **32,566 B**, **1200 × 972**, an
**AVIF container behind a `.jpg`** (`file` → `ISO Media, AVIF Image`; `PIL` opens it and converts to PNG for
viewing). Sizes available: `-1024x829`, `-768x622`, `-408x330`, `-353x286`, `-338x274`.

**It is a macOS browser mock-up**: traffic-light buttons, a grey desk surround, a drop shadow, and a URL pill
reading `preview.colorlib.com` (filled, unlike the earlier variant's empty one). Inside the frame the content
matches the live render 1:1 — brand line and right-aligned link, the amber-topped card with the pill and the
mono start line, the `h1`, the two-line summary, three chips (two tinted), the open timeline with four
events and the amber current dot, and the four service rows with green/amber dots.

**What to take from it:** the vertical rhythm (20 px between the card's bottom edge and the services panel's
`margin-top`), the fact that the chips are *outlined* rather than filled, and that the timeline is **open by
default**. **What not to take:** the window chrome, the desk grey, the shadow, the URL pill. The page is
edge-to-edge `#f4f6f9`.

## Token reference block

```css
/* ground / ink */
--ground: #f4f6f9;  --paper: #ffffff;  --ink: #16202e;  --ink-body: #3b4658;  --muted: #566173;
/* amber = state */
--tone: #f2a900;  --tone-strong: #b45309;  --tone-deep: #7a4b00;
--pill-wash: #fff3d6;  --pill-ink: #5c3a00;  --chip-wash: #fffaf0;  --chip-border: #efcf82;
/* green = also state */
--ok: #146c43;  --ok-dot: #1f9d61;
/* blue = interaction only */
--link: #0b5cad;
/* structure */
--card-border: #ead9b0;  --hairline: #e8ebf0;  --hairline-soft: #eef1f5;  --panel-line: #e1e6ed;
--dot: #b6bfcc;  --rail: #dde2e9;  --halo: #fff0cc;  --hover-wash: #f8f9fb;
--shadow-card: 0 1px 2px rgba(22,32,46,.05), 0 16px 32px -24px rgba(22,32,46,.3);
/* shape */
--radius-card: 14px;  --radius-chip: 6px;  --bar: 6px;
/* type */
--font-sans: "IBM Plex Sans", system-ui, sans-serif;
--font-mono: "IBM Plex Mono", ui-monospace, monospace;
--h1: clamp(21px, 3.4vw, 26px);  --lh-page: 1.55;  --lh-h1: 1.25;
```

Palette census in the reference sheet: **24 hexes + 2 rgba** — `#0b5cad #146c43 #16202e #1f9d61 #3b4658
#475264 #566173 #5c3a00 #7a4b00 #b6bfcc #d5dbe4 #dde2e9 #e1e6ed #e8ebf0 #ead9b0 #eef1f5 #efcf82 #f2a900
#f4f6f9 #f8f9fb #fff #fff0cc #fff3d6 #fffaf0` + `rgba(22,32,46,.05)` / `rgba(22,32,46,.3)`. No gradient, no
`@keyframes`, **3** custom properties, **12** `@font-face`, **2** `@media`, **63** style rules, **2**
`transition` declarations, **0** container queries.

## Source → React adaptation

| reference                                                       | port                                                                                            |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 4 `:where(html) … { all: revert }` guard groups (~48 lines)      | drop — Tailwind preflight covers it                                                             |
| `.cl-alert09-page * { box-sizing: border-box }`                  | default in Tailwind                                                                             |
| `border-top: 6px solid var(--tone)` + `overflow: hidden`         | `border-t-[6px] border-t-tone-strong overflow-hidden rounded-[14px]`                            |
| `.cl-alert09__*` BEM                                             | `StatusHeader` · `IncidentCard` · `StatePill` · `AffectedChips` · `IncidentTimeline` · `TimelineEvent` · `ServiceStatusList` · `SiteFooter` |
| `<details open>` + `[open] .__chev`                              | `<details defaultOpen>` (uncontrolled) + `group` on the details, `group-open:rotate-180` on the chevron |
| `summary { list-style: none }` + `::-webkit-details-marker`      | `list-none [&::-webkit-details-marker]:hidden`                                                  |
| `::before` / `::after` rail                                       | keep pseudo-elements (`before:` / `after:` utilities); do **not** swap in an icon column         |
| `4 updates` literal                                               | `{events.length} updates`                                                                       |
| `role="status"` on the `<section>`                                | `role="status"` on the pill + start row only                                                    |
| `href="#subscribe"` (dead)                                        | `href="#services"` on the panel, or a real feed/`mailto:`                                        |
| `.cl-icon` dead rule                                              | not ported                                                                                      |
| mono 500 pair declared and unused                                 | request mono **400** only                                                                        |
| 3 inline SVGs                                                     | `lucide-react` `AlertTriangle` / `ChevronDown`; keep the brand mark inline (house mark)           |
| `#f2a900` on bar + glyph (1.4.11 fail)                            | `#b45309` on bar + glyph; `#f2a900` on the dots only                                             |
| no `header`/`footer`, one dead anchor                             | real `<header>` + `<footer>` + the Component Dock link (`https://www.componentdock.com/`)         |
| macOS mock-up screenshot                                          | never adopted; ground `#f4f6f9` edge to edge                                                     |

Copy to keep *in kind*, not verbatim: an invented payments product; a **degraded** state; a start stamp with
a `<time datetime>` plus a duration; an `h1` naming capability + region; a summary that quantifies the
impact and says what is *not* lost; **three** chips of which at least two are degraded; **four** events
newest-first (`Monitoring` → `Identified` → `Update` → `Investigating`) each with a `<time>` and one
paragraph; **four** service rows with exactly one degraded. The reference's own strings (`Tidewater Pay`,
`Card payments in the EU`, `Frankfurt`, `6%`, `5 seconds`, `11:20 UTC`) must not appear in the port.

## Sibling comparison (the `alert` family, variants 01–09)

All nine are a **single narrow column on a light ground with one card or panel**, and each picks a different
hue to be the alert itself: **noticeboard** blue `#2563eb` on `#f5f6f8` (severity ladder), **allclear**
indigo `#5b5876` on `#eceafd` (dismiss/restore), **fieldguide** per-admonition accents on `#fbfaf7` (prose),
**banderole** green gradient `#14532d → #0f766e` with lime `#bef264` (announcement bar), **snapback** slate
`#5a6573` on `#1b2430`/`#16202b` (file list + bars), **beaconry** a **dark** navy `#e6ebf2` on dark with sky
`#38bdf8` / rose `#fb7185` (cluster health), **proofmark** crimson `#c0182e` + green `#1f5c4a` + amber
`#ffbf47` (form errors), **mayfly** mint `#f1f5f4` ground with teal `#0f766e` and a `#0f1f1d` toast. This
variant is the family's **first three-hue system**: amber for *state*, green for *state*, and blue reserved
for *interaction* — on a cool grey-blue ground rather than the warm off-whites of the prose and card
variants. It is one of only two siblings with **no script** (the other is the admonition/prose variant), the
only one whose "alert" is a **page-level durable state**, and the only one that ships a **native
disclosure**.

## Traps this prep measured (reusable)

1. **A `<details>`'s closed content still reports layout.** With the panel closed the card is 279.17 and the
   `<details>` 53.8, yet `ol.__timeline.getBoundingClientRect().height` still returns **322.69**. Assert the
   card or the `<details>`; an assertion on the `<ol>` cannot distinguish open from closed.
2. **Never sample a transitioned transform mid-flight.** 60 ms after a click the chevron reads
   `matrix(-0.281552, 0.959546, …)` while the settled states are `matrix(-1,0,0,-1,0,0)` and `none`.
3. **A padding step at a breakpoint can invert a wrap twice.** The chips are one row at ≥ 485, two at 481–484,
   one at 469–480 and two below — because `24 → 16` padding at 480 gains 16 px of content exactly where the
   viewport loses 1. Test both sides of both edges.
4. **`border-top` is inside a `border-box` card.** The 6 px bar is part of 601.86; modelling it as a padded
   div silently adds 6 px to every height assertion.
5. **One binary can carry four weights.** The sans latin `woff2` is byte-identical for 400/500/600/700 and
   the advances still differ (357 / 356 / 361 / 369 at 32 px) — that is a **variable cut**, not aliasing.
   Mono, by contrast, measured flat 437 at every weight with all faces loaded, and its 500 pair is never
   requested.
6. **Colour-carrying chrome needs its own 3 : 1 check.** The amber bar is 2.01 : 1 on paper and the pill
   glyph 1.82 : 1 on its wash — both fail 1.4.11 as load-bearing non-text, and neither shows up in a text
   contrast sweep. `#b45309` fixes both (5.02 / 4.55).
