# Mayfly — design notes

Reference: ColorLib **Alert V08** (`alert-08`) · live `https://preview.colorlib.com/theme/bootstrap/alert-08/`
(**200, 2,616 B**) · CSS `css/style.css?v=61fbfce1` (**8,775 B**, sha
`369f5df4…9678` live **and** archive) · JS `js/snippet.js?v=95f98c1e` (**4,146 B**, sha `e192374f…70b3` live
**and** archive) · archive `downloads/free/alert-08.zip` (**195,826 B**, 16 entries; HTML differs from live
only in `<head>`) → **live preview verified, the archive is its un-versioned twin**.

Measured 2026-10-26 with Playwright 1.62 Chromium against the live page at 1440 × 900, real `woff2` faces
loaded, then swept 1 px at a time from 300 to 1010.

## What the design is

**A profile card that can raise notifications, and a column of dark toasts whose whole body is a clock.**
The card is ordinary settings furniture — avatar, name, three facts, two buttons, a note that explains the
mechanic in plain words. The toasts are where the design lives: near-black cards with a single teal accent,
a 4 px bar along the bottom edge that empties left to right over five seconds, an uppercase
`CLOSES IN 5S` label that ticks down, and a promise that hovering or focusing **pauses** it.

The name **mayfly** is that promise: the message exists for a few seconds and then it is gone. It also
carries the family's single-word pattern (noticeboard, allclear, fieldguide, banderole, snapback, beaconry,
proofmark).

Unlike every earlier variant, the alert here is **not** a state of the page's content: it is a transient
object with a lifecycle — created by a button, counted down, pausable, dismissible, focus-returning. The
port is therefore a **timer problem**, not a layout problem; the layout is small and fully arithmetic.

## DOM skeleton (the reference, verbatim shape)

```html
<main class="cl-alert08-demo">                      <!-- min-height:100vh, padding clamp(24px,7vw,88px) 16px, teal bloom -->
  <div class="cl-alert08-layout">                    <!-- grid 1fr / 380, gap 28, max-width 960 -->
    <section class="cl-alert08-card" aria-labelledby="cl-alert08-title">   <!-- p 28, r 22, white -->
      <div class="cl-alert08-card__profile">
        <span class="cl-alert08-card__avatar" aria-hidden="true">JR</span>  <!-- 56², r 18, gradient -->
        <div>
          <h1 class="cl-alert08-card__title" id="cl-alert08-title">Jonah Reyes</h1>   <!-- 24/700 -->
          <p class="cl-alert08-card__sub">Product designer &middot; Nimbus Labs</p>
        </div>
      </div>
      <dl class="cl-alert08-card__facts">            <!-- 3 rows, border-top hairline, 49 each -->
        <div><dt>Time zone</dt><dd>Lisbon (UTC+1)</dd></div>
        <div><dt>Visibility</dt><dd>Everyone in workspace</dd></div>
        <div><dt>Team</dt><dd>Growth squad, 12 people</dd></div>
      </dl>
      <div class="cl-alert08-card__actions">          <!-- flex wrap, gap 10 -->
        <button class="cl-alert08-card__btn" type="button" data-cl-alert08-trigger="saved">Save changes</button>
        <button class="cl-alert08-card__btn cl-alert08-card__btn--ghost" type="button"
                data-cl-alert08-trigger="invite">Invite a teammate</button>
      </div>
      <p class="cl-alert08-card__note">Alerts close by themselves after 5 seconds. Hover or focus one to pause it.</p>
    </section>

    <div class="cl-alert08-region" role="status" aria-label="Notifications" data-cl-alert08-region></div>
  </div>

  <template id="cl-alert08-tpl">                      <!-- the toast prototype -->
    <div class="cl-alert08">
      <span class="cl-alert08__icon" aria-hidden="true"></span>
      <div class="cl-alert08__body">
        <p class="cl-alert08__title"></p>
        <p class="cl-alert08__text"></p>
        <p class="cl-alert08__timer" aria-hidden="true"></p>
      </div>
      <button class="cl-alert08__close" type="button" aria-label="Dismiss notification">✕</button>
      <span class="cl-alert08__line" aria-hidden="true"><span class="cl-alert08__fill"></span></span>
    </div>
  </template>
</main>
```

Counts: **1 `h1`** and nothing else, **4 `<button>`** (2 triggers + 1 close per rendered toast), **4
`<svg>`** (check/envelope + cross, one pair per toast), **0 `<a>`**, **0 `<img>`**, **0 `<input>`**, **1
`<template>`**, **2 ids** (`cl-alert08-title`, `cl-alert08-tpl`), **no fragments**. 22 classes in the markup,
all 22 styled; 2 state classes the script adds (`is-paused`, `is-leaving`) that are styled; 2 kind classes
(`cl-alert08--saved`, `cl-alert08--invite`) that **no rule matches**.

## The script, in full (4,146 B — it is the whole design)

```js
const DURATION = 5000;
const ICONS = { saved: '<svg … check …>', invite: '<svg … envelope …>' };
const MESSAGES = {
  saved:  { title: 'Profile saved',    text: 'Your changes are live for everyone in Nimbus Labs.' },
  invite: { title: 'Invitation sent',  text: 'We emailed a join link to priya.nair@nimbuslabs.io. It expires in 7 days.' },
};

const show = (kind, trigger) => {
  const el = tpl.content.firstElementChild.cloneNode(true);
  el.classList.add(`cl-alert08--${kind}`);            // ← dead: no rule matches
  … set icon / title / text; close.setAttribute('aria-label', `Dismiss: ${msg.title}`);
  let remaining = DURATION, last = performance.now(), hovered = false, focused = false, gone = false;

  const paint = () => {
    fill.style.transform = `scaleX(${Math.max(0, remaining / DURATION).toFixed(4)})`;
    const paused = hovered || focused;
    el.classList.toggle('is-paused', paused);
    timer.textContent = paused ? 'Paused' : `Closes in ${Math.max(1, Math.ceil(remaining / 1000))}s`;
  };
  const remove = () => {
    if (gone) return; gone = true; cancelAnimationFrame(frame);
    const hadFocus = el.contains(document.activeElement);
    const finish = () => { el.remove(); if (hadFocus && document.contains(trigger)) trigger.focus(); };
    if (reduceMotion()) { finish(); return; }
    el.classList.add('is-leaving'); setTimeout(finish, 260);
  };
  const tick = (now) => {
    const dt = now - last; last = now;
    if (!hovered && !focused) remaining -= dt;
    paint();
    if (remaining <= 0) { remove(); return; }
    frame = requestAnimationFrame(tick);
  };
  el.addEventListener('mouseenter', …); el.addEventListener('mouseleave', …);
  el.addEventListener('focusin', …);    el.addEventListener('focusout', (e) => { if (!el.contains(e.relatedTarget)) … });
  close.addEventListener('click', remove);
  el.addEventListener('keydown', (e) => { if (e.key === 'Escape') remove(); });

  region.prepend(el);                                   // ← newest on top
  …
};
show('invite', …); show('saved', …);                     // ← two toasts on load (demo only)
```

That is the entire behaviour surface: **one rAF loop, one pause flag pair, one 260 ms exit, one focus
return**. Everything the port must reproduce is in `paint()` and `remove()`.

## CSS token reference (the rules that decide the look)

```css
body                 { margin:0; background:#f1f5f4; font-family:"Outfit", system-ui, … }
.demo                { box-sizing:border-box; min-height:100vh; padding:clamp(24px,7vw,88px) 16px;
                       background:linear-gradient(135deg, rgba(20,184,166,.10), transparent 40%), #f1f5f4 }
.layout              { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,380px); gap:28px;
                       align-items:start; max-width:960px; margin:0 auto }
.layout *            { box-sizing:border-box }        /* children only — .layout itself is content-box */
.card                { padding:28px; border-radius:22px; background:#fff;
                       box-shadow:0 20px 40px -28px rgba(15,50,45,.35); color:#10231f; line-height:1.5 }
.card__profile       { display:flex; gap:16px; align-items:center }
.card__avatar        { display:grid; place-items:center; width:56px; height:56px; border-radius:18px;
                       background:linear-gradient(135deg,#14b8a6,#0e7490); color:#fff; font-size:20px;
                       font-weight:700 }
.card__title         { margin:0; font-size:24px; font-weight:700; letter-spacing:-.01em }
.card__sub           { margin:0; color:#52635f }
.card__facts         { display:grid; gap:0; margin:24px 0 }
.card__facts div     { display:flex; flex-wrap:wrap; gap:4px 16px; justify-content:space-between;
                       padding:12px 0; border-top:1px solid #e5ecea }
.card__facts dt      { color:#52635f }
.card__facts dd      { margin:0; font-weight:600 }
.card__actions       { display:flex; flex-wrap:wrap; gap:10px }
.card__btn           { padding:12px 20px; border:0; border-radius:12px; background:#0f766e; color:#fff;
                       font:inherit; font-weight:600; cursor:pointer; transition:background-color .15s ease }
.card__btn:hover     { background:#0b5d57 }
.card__btn--ghost    { background:#e6f2f0; color:#0b4f49 }
.card__btn--ghost:hover { background:#d3e9e5 }
.card__btn:focus-visible { outline:3px solid #0f766e; outline-offset:2px }
.card__note          { margin:16px 0 0; color:#52635f; font-size:14px }
.region              { display:grid; gap:12px; min-height:1px }        /* ← in flow, no fixed */
.cl-alert08          { --cl-alert08-tone:#2dd4bf; position:relative; display:grid;
                       grid-template-columns:auto 1fr auto; gap:12px; align-items:start; overflow:hidden;
                       padding:16px 12px 18px 16px; border-radius:16px; background:#0f1f1d;
                       box-shadow:0 18px 36px -18px rgba(15,31,29,.65); color:#e8f3f1; line-height:1.45;
                       animation:cl-alert08-in .32s cubic-bezier(.2,.9,.3,1.15) }
.cl-alert08.is-leaving { opacity:0; transform:translateX(24px) scale(.98);
                       transition:opacity .24s ease, transform .24s ease }
.__icon              { display:grid; place-items:center; width:36px; height:36px; border-radius:50%;
                       background:rgba(255,255,255,.08); color:var(--cl-alert08-tone) }
.__body              { min-width:0 }
.__title             { margin:0; color:#fff; font-size:16px; font-weight:600 }
.__text              { margin:2px 0 0; color:#c5d6d3; font-size:14.5px; overflow-wrap:anywhere }
.__timer             { margin:8px 0 0; color:var(--cl-alert08-tone); font-size:12.5px; font-weight:600;
                       letter-spacing:.04em; text-transform:uppercase }
.__close             { display:grid; place-items:center; width:32px; height:32px; padding:0; border:0;
                       border-radius:8px; background:transparent; color:#c5d6d3; cursor:pointer }
.__close:hover       { background:rgba(255,255,255,.10); color:#fff }
.__close:focus-visible { outline:2px solid var(--cl-alert08-tone); outline-offset:1px }
.__line              { position:absolute; left:0; right:0; bottom:0; height:4px;
                       background:rgba(255,255,255,.08) }
.__fill              { display:block; height:100%; background:var(--cl-alert08-tone);
                       transform-origin:left center }
.is-paused .__fill   { opacity:.55 }
@keyframes cl-alert08-in { from { opacity:0; transform:translateY(-10px) } }
@media (max-width:800px) { .layout { grid-template-columns:minmax(0,1fr) } .region { order:-1 }
                           .card { padding:22px 18px } }
@media (prefers-reduced-motion:reduce) { .cl-alert08 { animation:none } .is-leaving { transition:none } }
```

Motion budget: **1 `@keyframes`** (entry, 0.32 s), **2 real transitions** (button colour .15 s, leaving
toast .24 s), **1 `transition: none`** under reduced motion, and the per-frame `transform` the script writes.
Zero other animation, zero hover transforms, zero parallax.

## Screenshot analysis (`sites/2/alert-08.jpg`, 17,546 B)

**AVIF behind a `.jpg`** (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it. **1200 × 972** and
it is the family's **macOS browser mock-up**: traffic lights, an **empty** `preview.colorlib.com` URL pill
(no path, unlike the earlier variants), a grey desk, a card shadow. **Never adopt the frame.**

What it shows, and what to copy: a pale mint ground with a teal bloom in the top-left; a white 22-radius
card with the teal-gradient avatar, the bold name, the muted role line, three hairline-ruled fact rows
(label left in muted, value right in semibold ink), a solid teal button and a pale-teal ghost button, and the
one-line note; and, in the right column, **two stacked dark toasts** — circular icon tile with a teal glyph,
white title, muted two/three-line body, uppercase teal `CLOSES IN 5S`, a small × at the top right, and the
teal progress bar about two-thirds full along the bottom edge.

The content is an honest capture of the demo (the same two messages, the same progress position); the page
inside is rendered at roughly 1112 px, which is why the card looks 424 px wide rather than 552. Only the
frame and the desk are additions.

## Section-by-section fidelity notes

1. **Wrapper.** `min-height: 100vh` + `padding: clamp(24px, 7vw, 88px) 16px` — 24 at ≤ 342 (knee at
   `24 / 0.07`), `7vw` from 343, **88** from **1258** (measured `87.99` at 1257, `88` at 1258). The ground is
   **two layers**: the teal bloom (`.10` at 135°, fading out at 40 %) over `#f1f5f4`. At 1440 the top 88 px
   are empty air on both sides — do not centre vertically.
2. **Grid.** `960 = 552 + 28 + 380` at 1440 and `769 = 361 + 28 + 380` at 801: the toast column is a **fixed
   380** and the card takes the rest, which is why the card **shrinks** when the second column appears.
   `.cl-alert08-layout` is the tree's only `content-box` element and it has no padding or border, so nothing
   measures wrong — but the child reset is `*`, not `inherit`, so the card is `border-box`.
3. **Card.** Padding **28** in two columns and **22px 18px** at ≤ 800. Height `396 = 28 + 60 + 24 + 147 + 24 +
   48 + 16 + 21 + 28`; every term is a separate rule (`profile` height, `facts` margin `24px 0`, `actions`,
   note `margin-top: 16px`).
4. **Facts.** Each row is `1 px border-top + 12 + 24 + 12 = 49`, so the `<dl>` is **147**. The row is a
   **wrapping** flex (`justify-content: space-between`) — below ~315 px the `dd` drops to a second line and
   the row becomes **77** (`1 + 12 + 24 + 4 + 24 + 12`), which is what makes the card **564** at 300 and
   **508** at 320.
5. **Buttons.** Content-driven widths: `12px 20px` padding ⇒ **144** for "Save changes" and **183** for
   "Invite a teammate". They share one flex-wrap row until content drops below **337** (= 144 + 10 + 183),
   i.e. viewport **405** in one column and **833** in two, and then stack to **106**.
6. **Toast.** `380 − 16 − 12 = 340` of grid width across `36 / 12 / 260 / 12 / 32`. Height is
   `16 + body + 18` with `body = 23.2 (16 × 1.45) + 2 + n × 21.025 (14.5 × 1.45) + 8 + 18.125 (12.5 × 1.45)`
   — so the two-line `saved` toast is **127.34** and the three-line `invite` toast is **148.36**, and the
   stack is **287.7**. A port that hard-codes 127 busts the stack by 21 px on the second toast.
7. **Progress line.** Absolutely positioned inside the toast (`overflow: hidden` gives it the 16 px radius
   for free), **4 px** tall, track `rgba(255,255,255,.08)`, fill in the tone with
   `transform-origin: left center` and `scaleX(remaining / 5000)` written every frame with `toFixed(4)`.
   Paused ⇒ fill `opacity: .55` (no colour change, no transition).
8. **Type.** Outfit only — the archive ships **8** `woff2` (2 binaries), the sheet declares **6**
   `@font-face` (**400 / 600 / 700**), and the `outfit-500-*` pair is **undeclared**. Canvas A/B at 32 px on
   `"Profile saved invitation"`: 400 → 324, 500 → 324, 600 → 335, 700 → 347, 800 → 347 ⇒ one variable cut,
   **three pinned instances**, with 500 aliasing to 400 and 800 to 700. The `h1`'s `-.01em` is **−0.24 px**;
   the timer's `.04em` is **0.5 px**.

## Source → React adaptation

| reference mechanism                                                | port                                                                                      |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `<template>` + `cloneNode(true)` + `querySelector` per part         | a `<Toast>` component with props; no `<template>`, no `innerHTML`                          |
| `MESSAGES` / `ICONS` maps keyed by a `data-cl-alert08-trigger`      | typed `ToastKind` union + a `{ title, text, Icon }` record; lucide `Check` / `Mail`         |
| `requestAnimationFrame` closure with `remaining`, `last`, `hovered` | `useEffect` with refs + a cancellable frame; pause flags in state for the label/class       |
| `fill.style.transform = scaleX(…)`                                 | `style={{ transform: \`scaleX(${progress})\` }}`; never animate `width`                     |
| `timer.textContent = paused ? 'Paused' : \`Closes in …\``          | derived label; keep `aria-hidden`; announce the pause **once** elsewhere                    |
| `el.classList.add('cl-alert08--' + kind)` (no rule)                 | drop the dead class, or use it for the icon slot only                                       |
| `el.classList.add('is-leaving'); setTimeout(finish, 260)`           | `leaving` state → classes → `onDismiss` after 260 ms; immediate under reduced motion        |
| `el.contains(document.activeElement)` → `trigger.focus()`           | keep a `triggerRef` per toast and restore focus on unmount                                  |
| `region.prepend(el)`                                                | unshift into state (cap 4) — the newest renders first                                       |
| `role="status"` on the region (atomic)                              | `role="status"` **per toast** (defect 1)                                                    |
| `mouseenter` / `focusin` only                                       | add `pointerdown`; no `@media (hover: none)` path exists in the reference (defect 6)        |
| two toasts injected on load                                         | start empty (defect 7)                                                                      |
| 8 woff2 over 2 binaries, 6 declared                                  | one Google Fonts `<link>` for `Outfit:wght@400;600;700` (verified 200)                       |
| zero anchors                                                        | exactly one: the Component Dock footer link                                                 |
| macOS mock-up screenshot                                            | never adopted — ground `#f1f5f4` + teal bloom, edge to edge                                 |

## Measurement traps from this run (reusable)

- **A `rAF` countdown is a transform, and a transform is what you assert.** Read
  `getComputedStyle(fill).transform` (`matrix(0.3467, 0, 0, 1, 0, 0)`) or the inline
  `style.transform` — both are stable across samples, so "paused" is provable by sampling the same value
  900 ms apart. Reading a `width` would have shown nothing, because there is no width animation.
- **The label is `ceil`, so it lags its own bar.** At fill `0.64` (3.2 s left) the label still reads `4s`;
  at `0.0701` it reads `1s` and at `0` it **still** reads `1s` (`Math.max(1, …)`). Sampling only the text
  would suggest the countdown never ends; sample the transform.
- **`is-paused` outlives the click.** Closing with the close button or `Escape` leaves the class on the
  leaving element (`cl-alert08 is-paused is-leaving`), because focus is still inside it. Do not assert
  `className` equality on a dismissing toast.
- **Two `@font-face` weights over one binary can still render differently.** Here 600 (335) and 700 (347)
  differ from 400 (324) while sharing a byte-identical file, but 500 and 800 collapse onto their neighbours
  — three **pinned instances**, not five. Always run the width table before writing "variable".
- **The stack is in flow, so it has a height budget.** `287.7` at two toasts, `566.39` at four, `1123.77`
  at eight, document **1300**. A "toast" that is a grid child cannot be unbounded — cap it.
- **A pixel sample beats a computed swatch for a gradient.** The avatar's token (`#14b8a6`, 2.49 : 1 against
  white) is worse than the *rendered* ground under the glyphs (`#129f9e`, 3.17 : 1), because the glyphs never
  reach the gradient's corner. Crop the element out of a screenshot and sample the pixels the letters
  actually sit on.
- **A screenshot can be an honest capture inside a dishonest frame.** This one shows the same two messages
  at the same progress position as the live page — but at ~1112 px inside a macOS window with an empty URL
  pill. Read the content, discard the chrome.

## Sibling comparison within the alert family

| variant | device | script | the trap it teaches |
| --- | --- | --- | --- |
| noticeboard | static severity ladder of four tones | — | tint per tone, one wash |
| allclear | dismiss / restore list with a footer pill | yes | footer height is not the live line |
| fieldguide | four inline admonitions inside prose | **none** (`js/` is a 9 B soft 404) | a doc page is not a component |
| banderole | page-level announcement bar over a landing page | yes | dismiss state + sticky offset |
| snapback | file list with two actionable bars | yes | `[hidden]` vs `display:flex` |
| beaconry | dark cluster-health panel, four simultaneous alerts | **none** | a tally that must agree with its list |
| proofmark | a form returned with an error summary | 3,809 B | the summary is derived state; the error indent is layout |
| **mayfly** | **a stack of self-dismissing toasts beside a profile card** | **4,146 B** | **time is the design: a per-frame transform, a carried budget, a 260 ms exit, and a stack that has to be capped** |

Compared with proofmark (the immediately preceding sibling) the axis turns from **space** to **time**:
proofmark's alerts change size when the state changes and stay until the user acts; mayfly's alerts shrink
continuously and disappear on their own, so nothing about them can be asserted from a single screenshot —
every acceptance test here is a **sequence** (pause ⇒ frozen, resume ⇒ carried, expiry ⇒ 260 ms, dismissal ⇒
focus back). And where proofmark had to *derive* a stale count, mayfly has to *cancel* a live loop: the
`requestAnimationFrame` id is the resource this template leaks if you port it carelessly.
