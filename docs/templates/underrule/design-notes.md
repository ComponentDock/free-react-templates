# Underrule — design notes (Alert V11, `alert-11`)

Recreation notes for `apps/underrule`. Authority for requirements is
`openspec/specs/template-underrule/spec.md`; this file is the research trail: DOM skeleton, the CSS token
block, the screenshot analysis, section-by-section fidelity, the source→React mapping, sibling comparison and
the measurement traps that cost time.

Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-11/` — **200, 4,655 B**.
Archive (verified its un-versioned twin — CSS and JS hashes identical, HTML differs only in `<head>`):
`https://preview.colorlib.com/downloads/free/alert-11.zip` — **130,229 B**, 16 entries, 12 files.

---

## 1. DOM skeleton (as shipped; indentation mine)

```html
<main class="cl-alert11-demo">                       <!-- flex, centre, min-height:100vh, padding clamp -->
  <form class="cl-alert11" novalidate aria-labelledby="cl-alert11-title">   <!-- the card, 6 custom props -->
    <h1 class="cl-alert11__title" id="cl-alert11-title">Public profile</h1>
    <p  class="cl-alert11__intro">This is how other makers find you on Loomwork.</p>

    <div class="cl-alert11__field is-success" data-cl-alert11-field="username">
      <label class="cl-alert11__label" for="cl-alert11-username">Username</label>
      <div class="cl-alert11__control">
        <span class="cl-alert11__prefix" aria-hidden="true">loomwork.co/</span>
        <input class="cl-alert11__input" id="cl-alert11-username" type="text"
               autocomplete="username" spellcheck="false" value="lena.weaves"
               aria-describedby="cl-alert11-username-msg">
      </div>
      <p class="cl-alert11__msg" id="cl-alert11-username-msg" aria-live="polite">
        <svg class="cl-alert11__i" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">…</svg>
        <span data-cl-alert11-text>Nice, @lena.weaves is available.</span>
      </p>
    </div>

    <div class="cl-alert11__field is-error"   data-cl-alert11-field="email">   <!-- input type="email", aria-invalid="true" -->
    <div class="cl-alert11__field is-warning" data-cl-alert11-field="website"> <!-- input type="url" -->
    <div class="cl-alert11__field is-hint"    data-cl-alert11-field="bio">     <!-- textarea rows=3 maxlength=160 -->

    <div class="cl-alert11__foot">
      <button class="cl-alert11__save" type="submit">Save profile</button>
      <p class="cl-alert11__saved" role="status" data-cl-alert11-saved></p>
    </div>
  </form>
</main>
<script src="js/snippet.js?v=58408659"></script>
```

Census: **1** `<form>` (no `action`, no `method`, `novalidate`), **3** `<input>` (`text`/`email`/`url`),
**1** `<textarea>` (`rows=3`, `maxlength=160`), **1** `<button type=submit>`, **4** inline `<svg>`
(`16 × 16`), **9** ids, **4** `aria-live="polite"`, **1** `<h1>`, **0** `<a>`, **0** `<img>`, **0** `nav`,
**0** `footer`. Only `.cl-alert11-demo` and the card are landmarks.

Note the `data-cl-alert11-field` keys — they *are* the rule dispatch (`username`/`email`/`website`/`bio`).
In React the same information lives in the field id / a typed `key` union; do not re-create data attributes
just to mirror the source.

---

## 2. The stylesheet, in the order it matters

```css
/* 1. the framework guard — 10 :where() groups, 22 `revert` declarations (2 of them `all: revert`) */
:where(html) :is(html,body,div,span,p,a,h1,…,textarea,button,form,…), :is(html,body) { all: revert; }
/* …9 more groups: webkit-datetime-edit, img/svg vertical-align, box-sizing for img/table/…, th text-align, hr … */

/* 2. fonts — 8 @font-face, Figtree 400/500/600/700 × (latin, latin-ext), 2 binaries only */
@font-face { font-family:'Figtree'; font-weight:400; font-display:swap;
             src:url(../fonts/figtree-400-latin.woff2) format('woff2'); unicode-range:U+0000-00FF,…; }

/* 3. body + demo ground */
body { margin:0; background:#f6f3ef;
       font-family:"Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.cl-alert11-demo {
  display:flex; justify-content:center; align-items:flex-start; box-sizing:border-box;
  min-height:100vh; padding:clamp(24px,6vw,72px) 16px;
  background: repeating-linear-gradient(45deg, rgba(120,90,60,.035) 0 2px, transparent 2px 12px), #f6f3ef;
}

/* 4. the card — content-box on purpose (never gets border-box) */
.cl-alert11 {
  --cl-alert11-ink:#231d18; --cl-alert11-muted:#62574d; --cl-alert11-line:#d8cfc5;
  --cl-alert11-focus:#7c4dff; --cl-alert11-tone:#5f6b7a; --cl-alert11-tint:#f1f3f6;
  width:100%; max-width:520px; padding:clamp(22px,5vw,36px);
  border-radius:20px; background:#fff; box-shadow:0 24px 48px -32px rgba(35,29,24,.4);
  color:var(--cl-alert11-ink); line-height:1.5;
}
.cl-alert11 *, .cl-alert11 *::before, .cl-alert11 *::after { box-sizing:border-box; }  /* children only! */

/* 5. the four states — each redefines exactly tone + tint */
.cl-alert11__field.is-success { --cl-alert11-tone:#157347; --cl-alert11-tint:#e8f6ee; }
.cl-alert11__field.is-error   { --cl-alert11-tone:#c21f3a; --cl-alert11-tint:#fdebee; }
.cl-alert11__field.is-warning { --cl-alert11-tone:#9a5300; --cl-alert11-tint:#fff4e2; }
.cl-alert11__field.is-hint    { --cl-alert11-tone:#52606f; --cl-alert11-tint:#f1f3f6; }

/* 6. the joined shape */
.cl-alert11__control {
  display:flex; align-items:stretch; background:#fff;
  border:1.5px solid var(--cl-alert11-line);          /* computes to 1px */
  border-radius:12px 12px 0 0;
  transition:border-color .15s ease, box-shadow .15s ease;
}
.cl-alert11__field:not(.is-hint) .cl-alert11__control { border-color:var(--cl-alert11-tone); }   /* 0,3,0 */
.cl-alert11__control:focus-within {                                                             /* 0,2,0 — LOSES */
  border-color:var(--cl-alert11-focus); box-shadow:0 0 0 4px rgba(124,77,255,.18);
}
.cl-alert11__msg {
  display:flex; gap:8px; align-items:flex-start; margin:0; padding:7px 12px;
  border:1.5px solid var(--cl-alert11-tone); border-top:0;        /* the control's bottom border IS the seam */
  border-radius:0 0 12px 12px; background:var(--cl-alert11-tint); color:var(--cl-alert11-tone);
  font-size:13.5px; font-weight:600; line-height:1.4;
}
.cl-alert11__field.is-hint .cl-alert11__msg { border-color:var(--cl-alert11-line); font-weight:500; }

/* 7. the only @media in 347 lines */
@media (prefers-reduced-motion: reduce) { .cl-alert11__control { transition:none; } }
```

Anatomy: **49** top-level blocks = **10** guard groups + **8** `@font-face` + **30** style rules + **1**
`@media`; **0** width media queries, **0** `@keyframes`, **2** `transition` declarations, **1** gradient,
**25** colour literals (19 distinct), **14** custom-property declarations.

Measured: the `1.5px` borders compute to **1px** at DPR 1 **and** DPR 2 (a bare `data:` page with
`border:1.5px` also reports `1px` in this Chromium — it is a flooring behaviour, not a font/host artefact).

---

## 3. Screenshot analysis (the `TEMPLATES.md` / wp image)

`https://colorlib.com/wp/wp-content/uploads/sites/2/alert-11.jpg` — **20,998 B**, **1200 × 972**, but an
**AVIF container behind a `.jpg`** (`file` → `ISO Media, AVIF Image`). `vision_analyze` refuses the raw file;
`float` → `PIL` opens it and `Image.open(...).convert('RGB').save('shot.png')` works.

What the frame shows, and what to ignore:

- **Ignore the frame.** It is a **macOS browser mock-up**: traffic lights top-left, a drop shadow, a
  `preview.colorlib.com` URL pill, grey surround. The page itself is the warm hatched ground.
- **Ground:** a very faint 45° hatch on `#f6f3ef` — visible in the shot as a barely-there diagonal weave. It
  is `rgba(120,90,60,.035)` at 2 px per 12 px, which is why it reads as paper rather than as a pattern.
- **Card:** white, `20px` radius, one soft shadow that is almost entirely a bottom-edge glow
  (`0 24px 48px -32px` at 40 % of the ink), centred, `592` wide at desktop. The shot's card occupies about a
  third of the frame — the page is deliberately narrow.
- **Header:** a bold 26 px title and a single muted sentence, left aligned, tight (`4px`) to each other and
  `26px` above the first label.
- **The four fields:** label, white control with a 1 px status edge, and the coloured strip welded under it.
  Reading top to bottom in the shot: **green** (circle + check) on a mint tint, **red** (circle + stem) on a
  blush tint, **orange** (triangle + stem) on a cream tint, **slate** (circle + i) on a pale blue-grey tint.
  The strips are the visual anchor — four coloured rules of differing widths because the copy differs.
- **Bio:** the textarea shows its resize grip in the bottom-right corner (Chromium), which is why the control
  is visibly taller than the single-line ones.
- **Button:** near-black, `12px` radius, 137 × 48, left aligned with no secondary action beside it.

**The one discrepancy in the shot:** the bio bar reads **"93 characters left."** while the static HTML ships
**"94 characters left."** for the same 67-character value — the script rewrites it on load (160 − 67 = 93).
The shot is the truthful one; the markup is stale (defect 10).

Live render (Playwright, `fullPage`) matches the shot 1:1 apart from the frame; captured at 1440 and 390 for
this run (`/tmp/alert11/live-1440.png`, `live-390.png`).

---

## 4. Section-by-section fidelity

| band / element | reference | fidelity notes for the port |
| -------------- | --------- | --------------------------- |
| ground | `#f6f3ef` + 45° hatch, 2 px / 12 px, `rgba(120,90,60,.035)` | copy the exact gradient; it is the only texture on the page and it is *almost* invisible — a stronger one immediately looks wrong |
| demo shell | `flex`, `justify-content:center`, `align-items:flex-start`, `min-height:100vh`, `padding: clamp(24px,6vw,72px) 16px` | port `min-h-[100svh]` with `clamp(16px,4vw,56px)` so the card fits a 900 px viewport (defect 5) |
| card | 592 outer = 520 content + 2 × 36; radius 20; shadow `0 24px 48px -32px rgba(35,29,24,.4)` | **the `content-box` trap** — under the repo's `border-box` the card must be `max-w-[592px] p-[36px]` |
| `h1` | 26 / 700 / 39, tracking `-.02em`, `#231d18` | keep the `-0.52px` tracking; without it the title reads 4 % wider |
| intro | 16 / 400 / 24, `#62574d`, margin `4px 0 26px` | copy must stay **46 characters** or the 349 fold moves |
| label row | 14.5 / 600 / 21.75 + `6px`; "optional" 400 / muted / `ml-4px` | the label is *not* inside the control — it is a sibling above it |
| control | 520 × 49.25 = `12 + 23.25 + 12` + 2 × 1 border; radius `12 12 0 0`; white | 1 px in the port; if you bump the input to 16 px the control becomes 50 and every card height shifts by 0.75 |
| prefix (handle) | 15 px muted, `padding-left: 14px`, `nowrap`; input after it `pl-2px` | the prefix is `aria-hidden` in the source — **expose it** (defect 9) |
| bar | 520 × 33.89 = `7 + 18.9 + 7 + 1`; `border-top: 0`; radius `0 0 12 12`; 13.5 / 600 / 1.4 | the seam is the control's own bottom border; do not add a wrapper |
| bar (hint) | same box, tone `#52606f`, tint `#f1f3f6`, **weight 500**, neutral border | hint is the only state that keeps the `--line` edge — and that edge is the 1.54 : 1 failure |
| glyph | 16 × 16, `fill: currentColor`, `mt-px`, `flex:none`; inner paths stroked `#fff` 1.8–1.9 | four hand-written paths (circle+check, circle+stem, triangle+stem, circle+i); `lucide-react` equivalents are acceptable if the geometry stays 16 px |
| bio control | 520 × 95.75 (textarea 93.75 = 12 + 3 × 23.25 + 12), resize grip visible | the textarea is a nested scroll container in the source (defect 7) |
| foot | `flex flex-wrap`, `gap 12px 16px`, `margin-top: 26`; button 137 × 48 | the confirmation `<p>` sits *beside* the button, so a long string wraps under it |
| button | `#231d18` → hover `#40362d`, radius 12, `12px 22px`, 16 / 600 | hover contrast rises (11.77 : 1); focus-visible outline is `3px #7c4dff` offset 2 |
| footer | **none in the source** | the repo requires a Component Dock footer — add a plain one, nothing else |

---

## 5. Source → React mapping

| source | port |
| ------ | ---- |
| `.cl-alert11-demo` `<main>` | `<main className="flex min-h-[100svh] items-start justify-center bg-ground px-4 py-[clamp(16px,4vw,56px)]">` + hatch style |
| `.cl-alert11` `<form novalidate>` | `<form noValidate>` + card utility string; `onSubmit={onSubmit}` |
| `--cl-alert11-*` custom props | `@theme` tokens + a `tone` prop that sets `--tone`/`--tint` inline (or four static classes) |
| `.is-success/.is-error/.is-warning/.is-hint` | a `Tone` union + a `toneClass` record; **never** toggle by string concatenation |
| `data-cl-alert11-field` dispatch | `FieldKey` union + a `rules` map object |
| `RULES.username/email/website/bio` | `src/rules.ts` — four pure functions returning `[Tone, string]` |
| `input`/`blur` listeners with the `key === 'username' \|\| key === 'bio' \|\| is-error \|\| is-warning` guard | `onChange` / `onBlur` handlers calling `revalidate(key, { live })`; encode the guard as data (`liveKeys = new Set(['username','bio'])`) |
| `STATES.forEach(toggle)` | derive the class from state (one class), not four toggles |
| `icon.innerHTML = ICONS[state]` | `<FieldGlyph tone={tone} />` — four JSX branches, no `dangerouslySetInnerHTML` |
| `label.textContent = text` if different | React does the diff; keep the "don't re-announce an unchanged verdict" *behaviour* by not re-rendering the text when the string is equal |
| `saved.textContent = ''` | `confirmation` state + `setConfirmation('')` on any input |
| `form.submit` → `preventDefault` + first-error focus | `onSubmit` + `useRef` map, `fieldsInOrder.find(...)` then `refs[key].current?.focus()` |
| `clamp()` padding | arbitrary-value Tailwind (`p-[clamp(22px,5vw,36px)]`), not a media query |
| `@media (prefers-reduced-motion)` on the control | `motion-reduce:transition-none` |

---

## 6. Sibling comparison (why this one is different)

| variant | device | what does **not** carry over |
| ------- | ------ | ---------------------------- |
| noticeboard | static severity ladder, four stacked tone rows | nothing is computed; no inputs |
| allclear | dismiss + restore list with a restore pill | footer height changes with state; here the card is static in height |
| fieldguide | admonitions inside prose | documentation page, no script |
| banderole | page-level bar above the content | one bar, not four |
| snapback | file list with two action bars | actions in bars, no fields |
| beaconry | dark cluster panel of four simultaneous alerts | dark ground; tone = severity, not verdict |
| proofmark | a **form returned** with an error summary at the top | *this is the nearest sibling*: proofmark summarises at the top and lists fields below; **underrule puts the verdict on the field** and has no summary |
| mayfly | self-dismissing toast stack | time-driven, unbounded stack |
| steadystate | status page, never changes | inert |
| punnet | 2 × 2 wall of permanent alert tiles | tone = category, no inputs, no script |
| **underrule** | **one form; four fields; a joined verdict bar per field; a 120-line rule engine** | — |

Carry over from the family: the `:where(html) … all: revert` guard block exists in all eleven variants (do
**not** port it — Tailwind 4 preflight is the port's reset), `.cl-icon` has been a dead rule in eleven
consecutive variants, and the README directory-lie pattern is now four variants running.

---

## 7. Measurement traps (this run)

1. **A `content-box` card hides its own width.** `max-width: 520px` + `padding: 36px` measured **592** wide.
   The tell: `getBoundingClientRect().width` disagreed with the declared max-width by exactly `2 × padding`.
   The card gets `border-box` from *nothing* — the sheet's `.cl-alert11 *` selector excludes the card itself.
   Same family as notebell's `main` and allclear's glass panel.
2. **`1.5px` is not a border width you can rely on.** Computed `1px` at DPR 1 and at DPR 2, and a bare
   `div{border:1.5px solid}` on a `data:` page also computed `1px` in this Chromium. Build the height ledger on
   **1 px** or every box is off by 0.5 per edge.
3. **A specificity tie is invisible unless you measure the computed colour.** The focus test first read
   `border-color: rgb(21,115,71)` *while focused*, which looks like a broken test — it is the state rule
   winning. Read `getComputedStyle` on both a toned field **and** the hint field; only the hint field turns
   `#7c4dff`. The give-away is the `box-shadow` arriving alone.
4. **A transition mid-flight lies.** The first focus reading returned
   `rgba(124,77,255,0.02) 0 0 0 0.450757px` for the halo because the `150 ms` transition was still running.
   Wait ≥ 250 ms before reading any transitioned property (the family's punnet/steadystate trap).
5. **Fold thresholds are content widths, not viewports.** Because two clamps are in play, `viewport → content`
   is not linear: the handle bar turns from 2 lines to 1 at viewport **334**, but the email bar's 2→1 is at
   **518** and the website's at **507** — a 11 px difference for two strings of similar length. Record the
   content width, then convert.
6. **`docH` at desktop is `card + 2 × demo padding`, not `100vh`.** `min-height: 100vh` loses as soon as
   `card + padding` exceeds it: 933 at 1440, 912 at 1024, and exactly 900 from 768 down to 360 — do not read
   "no scroll" from a `min-height` rule.
7. **The screenshot's counter disagrees with the markup.** Two numbers for one fact (93 vs 94) is a documented
   defect, not a measurement error: the script computes the counter on load.
8. **`aria-live` count is not the a11y problem** — four live regions on a form is defensible; the problem is
   *frequency* (one polite announcement per keystroke on a valid field, and per keystroke on the counter).
   Grep the JS for the write path before writing "live regions are wrong".
