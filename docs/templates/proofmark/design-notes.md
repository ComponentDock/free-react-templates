# Proofmark — design notes

Reference: ColorLib **Alert V07** (`alert-07`) · live `https://preview.colorlib.com/theme/bootstrap/alert-07/`
(**200, 4,491 B**) · CSS `css/style.css?v=2e919584` (**10,415 B**, sha
`e9850950…` live **and** archive) · JS `js/snippet.js?v=c54f2a1d` (**3,809 B**, sha `17cc5458…` live **and**
archive) · archive `downloads/free/alert-07.zip` (**234,103 B**, 18 entries; HTML differs from live only in
`<head>`) → **live preview verified, the archive is its un-versioned twin**.

Measured 2026-10-26 with Playwright 1.62 Chromium against the archive copy (identical CSS/JS hashes, so the
geometry is the live page's) at 1440 × 900, real `woff2` faces loaded.

## What the design is

**A membership signup form, rendered as if it had just come back from the server with three problems.**
That is the whole idea: the error summary is not an overlay or a toast, it is a *block in the flow*, and the
three failing fields are marked **twice** — a 4 px red rule on the row (which indents the whole row 20 px)
and a red border on the control. The one valid field stays flush left with a black border, so the failed
ones read as a ragged, hand-annotated column. The name **proofmark** is that device: the margin mark a
proofreader sets beside a bad line.

Two states, one page: **error** (the shipped state) and **success** (a green 6 px-bar banner in the
summary's slot). There is no third state and no second step, despite the copy.

## DOM skeleton (the reference, verbatim shape)

```html
<main class="cl-alert07-demo">                     <!-- flex centre, min-height 100vh, padding clamp(24px,6vw,72px) 16px -->
  <section class="cl-alert07" aria-labelledby="…-title">   <!-- content-box, max-width 560, p 40, r 6 -->
    <p class="…__step">Step 1 of 2 · Your details</p>       <!-- 14/600 muted, mb 6 -->
    <h1 class="…__title" id="…-title">…</h1>                <!-- clamp(26,5vw,32)/800, ls -.02em, lh 1.15 -->
    <p class="…__intro">…</p>                               <!-- 16/400 muted, m 10 0 24 -->

    <!-- error summary: rendered as if the form came back from the server -->
    <div class="…__summary" role="alert" tabindex="-1" aria-labelledby="…-sum-title">
      <h2 class="…__sum-title" id="…-sum-title">
        <svg viewBox="0 0 24 24" width="22" height="22">…</svg>   <!-- circle fill currentColor + white ! -->
        <span>There are 3 problems with your details</span>
      </h2>
      <ul class="…__sum-list">
        <li><a href="#…-email">…</a></li> ×3                     <!-- links intercepted by the script -->
      </ul>
    </div>

    <div class="…__success" role="status" tabindex="-1" hidden></div>   <!-- the success slot -->

    <form class="…__form" novalidate>
      <div class="…__field">                <label>…</label><input>…<p class="…__err" hidden></p></div>
      <div class="…__field has-error">      <label><input aria-invalid="true" aria-describedby><p class="…__err">
      <div class="…__field has-error">      <label><p class="…__hint"><input><p class="…__err">
      <div class="…__field …__field--check has-error">  <input type=checkbox><label><p class="…__err">
      <button class="…__submit" type="submit">Continue to membership</button>
    </form>
  </section>
</main>
```

Counts: **1 `h1` + 1 `h2`**, 4 `<input>` (3 text-ish + 1 checkbox), 1 `<button>`, 4 `<a>` (3 summary links +
the house-rules link), 1 `<svg>`, **0 `<img>`**, 11 ids, 19 classes / 19 styled (only `.cl-icon` is dead).

## CSS token reference (the rules that decide the look)

```css
:root-ish (on .cl-alert07)
  --ink:#1b1d1f  --muted:#555b61  --error:#c0182e  --focus:#ffbf47  --brand:#1f5c4a
body            { background:#f3f1ec; font-family:"Public Sans", system-ui, … }
.demo           { display:flex; justify-content:center; align-items:flex-start;
                  box-sizing:border-box; min-height:100vh; padding:clamp(24px,6vw,72px) 16px }
.cl-alert07     { width:100%; max-width:560px; padding:clamp(22px,5vw,40px); border-radius:6px;
                  background:#fff; box-shadow:0 1px 0 #e0ddd4, 0 20px 40px -30px rgba(27,29,31,.35);
                  line-height:1.5 }            /* ← NO box-sizing: content-box by default */
.cl-alert07 *   { box-sizing:border-box }      /* ← children only: the card itself is the lone content-box */
.step           { 14/600 muted, margin:0 0 6px }
.title          { clamp(26px,5vw,32px)/800, letter-spacing:-.02em, line-height:1.15, margin:0 }
.intro          { 16/400 muted, margin:10px 0 24px }
.summary        { margin-bottom:28px; padding:18px 20px; border:3px solid #c0182e; border-radius:6px;
                  background:#fff5f6 }
.summary:focus  { outline:3px solid #ffbf47; outline-offset:0 }
.sum-title      { display:flex; gap:10px; align-items:center; margin:0 0 10px; 19/800; lh 1.3 }
.sum-title svg  { flex:none; color:#c0182e }
.sum-list       { margin:0; padding:0 0 0 32px }
.sum-list li    { margin:4px 0 }
.sum-list a     { color:#c0182e; font-weight:600; text-decoration:underline; text-underline-offset:3px }
.sum-list a:hover { text-decoration-thickness:2px; color:#9d0f22 }
.sum-list a:focus-visible { outline:3px solid transparent; background:#ffbf47; color:#1b1d1f;
                            box-shadow:0 -2px #ffbf47, 0 3px #1b1d1f; text-decoration:none }
.success        { margin-bottom:28px; padding:16px 20px; border-left:6px solid #1f5c4a;
                  background:#e9f4ef; color:#123a2f; font-weight:600 }
.form           { display:grid; gap:22px }
.field          { display:grid; gap:6px }
.field.has-error{ padding-left:16px; border-left:4px solid #c0182e }   /* ← the 20 px shift */
.label          { font-weight:700 }
.hint           { margin:-2px 0 2px; color:#555b61; font-size:14.5px }
.err            { margin:0; color:#c0182e; font-size:15px; font-weight:700; line-height:1.5 }
.input          { width:100%; padding:11px 12px; border:2px solid #1b1d1f; border-radius:4px;
                  background:#fff; font:inherit }
.has-error .input { border-color:#c0182e }
.input:focus    { outline:3px solid #ffbf47; outline-offset:0; box-shadow:inset 0 0 0 2px #1b1d1f }
.field--check   { grid-template-columns:auto 1fr; column-gap:12px; align-items:start }
.field--check .label { font-weight:500 }
.field--check .err   { grid-column:1 / -1 }
.check          { width:24px; height:24px; margin:0; accent-color:#1f5c4a }
.field--check a { color:#1f5c4a; text-underline-offset:3px }
.submit         { justify-self:start; padding:13px 22px; border:0; border-radius:4px;
                  background:#1f5c4a; box-shadow:0 3px 0 #0f3328; color:#fff; font:inherit;
                  font-weight:700; cursor:pointer }
.submit:hover   { background:#17493a }
.submit:active  { transform:translateY(2px); box-shadow:0 1px 0 #0f3328 }
@media (prefers-reduced-motion: reduce) { .submit:active { transform:none } }
```

That is **all** the motion in the design: one `:active` transform and one media query. Zero `@keyframes`,
zero `transition` declarations, zero `animation`.

## Screenshot analysis (`sites/2/alert-07.jpg`, 27,665 B)

**AVIF behind a `.jpg`** (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it. **1200 × 972** and
it is the family's **macOS browser mock-up**: traffic lights, a `preview.colorlib.com` URL bar, a grey desk,
a card shadow, the page rendered inside at roughly 1112 px wide. **Never adopt the frame.**

What it shows, and what to copy: white card on warm grey; step line, bold title, two-line muted intro; a
red-bordered pink block with a filled red circle and white exclamation, a bold count line, and three
**underlined red** links with round bullets; then **Full name** (black 2 px border, filled), **Work email**
(red 2 px border, `marta.oliveira@`), **Password** (hint above, red border, 7 dots), and the terms row
(unchecked 24 px box, "I have read the house rules and agree to follow them", green underlined link) with a
red message under it; finally a dark green button with a hard 3 px bottom shadow.

Differences between the mock-up and the live page: none in content — the mock-up is an honest capture of
the error state. Only the frame and the desk are additions.

## Section-by-section fidelity notes

1. **Wrapper.** `min-height: 100vh` and `padding: clamp(24px, 6vw, 72px) 16px` — at 1440 that is 72 px of
   air above and below, which is why the document is **1074** in a 900 px window. Do not centre vertically:
   `align-items: flex-start` is the reference's, and the card's top edge sits at exactly the padding.
2. **Card.** `content-box` + `max-width: 560px` + `padding: 40px` ⇒ **640** outer. The card is the only
   content-box element: the sheet's `.cl-alert07 *` sets `border-box` on children, which is exactly why the
   child numbers look normal while the outer box is 80 px over `max-width`.
3. **Header.** Step (`14/600`) is muted but *bolder* than the intro; the `·` is a `&middot;`. Title
   `clamp(26px, 5vw, 32px)` with `letter-spacing: -.02em` (= **−0.64px** at 32) and `line-height: 1.15`
   (**36.8** tall). Intro margin `10px 0 24px` gives the 82 px block (`10 + 48 + 24`).
4. **Summary.** Border **3 px** (not 2), wash `#fff5f6`, radius 6, `margin-bottom: 28px`. Its height
   `160.69 = 3 + 18 + 24.69 + 10 + 80 + 4 + 18 + 3`; the trailing **4** is the last `<li>`'s `margin-bottom`
   collapsing out of the `<ul>`, not a padding value — a port that measures 156.69 or 164.69 has "fixed" it.
   Link `text-underline-offset: 3px` and hover `text-decoration-thickness: 2px` are both visible details.
5. **The failing row.** The device is `padding-left: 16px` **plus** `border-left: 4px` ⇒ label/input/message
   all move **+20 px** and the inner width drops **560 → 540**. The input keeps `border-width: 2px` and only
   changes `border-color`, so nothing jumps vertically. The checkbox row is the same shift, with the box at
   x 460 and the label at x 496 (`460 + 24 + 12`).
6. **Fields.** `gap: 6px` between label / hint / input / message. Hint margin `-2px 0 2px` pulls it up under
   the label. Message `15/700` with `line-height: 1.5` ⇒ **22.5**. Inputs are `padding: 11px 12px` +
   `2px` border ⇒ **50** tall with a 24 px line.
7. **Button.** `margin: 0` + `justify-self: start` ⇒ left aligned, **237 × 50** for "Continue to membership".
   The hard shadow `0 3px 0 #0f3328` is a *drop block*, not a blur — reproduce with `shadow-[0_3px_0_…]`.
8. **Success.** 6 px brand left bar, no radius, `#e9f4ef`, `16/600`, 2 lines ⇒ **80** tall, in the summary's
   own slot (`y 257.8`), card **763.55**, document **908**.
9. **Type.** Public Sans only. Ten `@font-face` rules point at **two** binaries (latin 26,636 B, latin-ext
   18,372 B) duplicated at 400/500/600/700/800 — one variable cut with five pinned instances. Advance widths
   at 32 px for the title: 342 / 348 / **347** / 352 / 358 (400/500/600/700/800) — 600 is a hair *narrower*
   than 500; that is the instance set, not a bug to fix. Requests outside 400–800 clamp to the nearest
   declared descriptor (300 → 342, 900 → 358).

## Source → React adaptation

| reference mechanism | port |
| --- | --- |
| `data-cl-alert07-rule` / `-msg` attributes read by `RULES[...]` | typed field descriptors + `rules: Record<Rule, Predicate>`; no attribute reads |
| `wrap.classList.toggle('has-error', !ok)` | `errors` state → row class from props |
| `err.hidden = ok` / `err.textContent = msg` | conditional render of the message `<p>` (keep the id for `aria-describedby`) |
| `aria-describedby = [hint, !ok && err].join(' ')` | derived `aria-describedby` per field (hint only for password) |
| summary rebuilt only inside the submit handler | summary derived from `errors` on **every** render; hidden at zero |
| `summary.hidden = false; summary.focus()` | mount the summary with `role="alert"` + `tabIndex={-1}` after a failed submit, focus in an effect keyed on the submit counter |
| `sumList.addEventListener('click', … preventDefault)` | `onClick` on each link → `scrollIntoView({block:'center'})` + `focus({preventScroll:true})` |
| `success.textContent = …` on submit | success banner state with the first name; cleared by any field change |
| `role="status"` + `.focus()` (double announce) | `tabIndex={-1}` + focus, no role (defect 4) |
| `#house-rules` dead anchor | `<button type="button">` + native `<dialog>` with 3 rules, `Escape`, Close, focus return |
| `:where(html) … { all: revert }` guards | dropped — Tailwind preflight does the job |
| five pinned `@font-face` over two variable binaries | one Google Fonts `<link>`, weights `400;500;600;700;800` (probe 200) |
| `.cl-icon` dead rule | not ported |

## Measurement traps from this run (reusable)

- **Don't infer the card width from `max-width`.** `content-box` + a `clamp()` padding makes the outer width
  a *curve*: `vw − 32` up to 657, `560 + 2p` from 658 to 799 (**625.78 → 640**), 640 from 800. The 1 px
  sweep is the only honest check; a two-point check at 1024 and 390 would have missed the 658 knee.
- **A collapsed `<li>` margin is inside the box height of the parent.** The summary's 160.69 ends in a 4 px
  contribution that no padding or margin property in `.summary` explains.
- **Read the summary's arithmetic, not its text.** The reference agrees with itself only on first paint:
  typing a valid email leaves "There are 3 problems" over a list of three, one of which no longer fails.
  Test the count against a fixture of 1/2/3 failures.
- **`role="status"` + `.focus()` is two announcements.** The sheet's script does both.
- **The failed 1.4.11 test is the amber ring, not the text.** Every text pair here clears AA (worst 5.45,
  the red on the warm ground); the indicator is **1.64 : 1** on white and only the input escapes it because
  `:focus` adds a 2 px **inset ink** ring. Check every outlined control.
- **Two binaries, ten declarations.** `sha256sum` the `woff2` first: five weights over two files means a
  variable cut with pinned descriptors, and the width table is what proves it (300 and 900 clamp).
- **The screenshot is always the mock-up in this family.** AVIF behind `.jpg`, a browser frame; convert with
  `PIL` and read only the content.

## Sibling comparison within the alert family

| variant | device | script | the trap it teaches |
| --- | --- | --- | --- |
| noticeboard | static severity ladder of four tones | — | tint per tone, one wash |
| allclear | dismiss / restore list with a footer pill | yes | footer height is not the live line |
| fieldguide | four inline admonitions inside prose | **none** (`js/` is a 9 B soft 404) | a doc page is not a component |
| banderole | page-level announcement bar over a landing page | yes | dismiss state + sticky offset |
| snapback | file list with two actionable bars | yes | `[hidden]` vs `display:flex` |
| beaconry | dark cluster-health panel, four simultaneous alerts | **none** | a tally that must agree with its list |
| **proofmark** | **a form returned with an error summary** | **3,809 B** | **the summary is derived state; the error indent is layout; the only motion is a press** |

Compared with beaconry (the immediately preceding sibling) the inversion is total: light paper instead of
near-black, one white card instead of a dark panel, **one** amber accent instead of four tones, and the only
"tally" is the pluralised count of failing fields — which, like beaconry's pill row, **must be computed, and
the reference gets it wrong**. Keep that parallel in the port: derive, then test against a non-uniform fixture.
