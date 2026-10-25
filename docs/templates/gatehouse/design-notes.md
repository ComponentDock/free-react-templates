# Gatehouse — design notes

Recreation of the ColorLib **Relay Auth** design (`relay-auth`) at `apps/gatehouse`.
Spec: `openspec/specs/template-gatehouse/spec.md`. Task outline:
`docs/templates/gatehouse/tasks.md`.

Everything below was measured on 2026-10-25 from the live preview
(`https://preview.colorlib.com/theme/relay-auth/`, HTTP 200, 4,052 B) with `curl -4` plus a
headless Chromium pass over all nine documents at **1440 × 900** and **390 × 844**, and from the
preview's own `assets/style.css` (8,591 B, sha256 `d5cf0438a4e02432…`) and `assets/app.js`
(5,448 B, sha256 `2922447ca27b9f23…`). No archive exists (`downloads/free/relay-auth.zip` → 404),
so the live preview is the only DOM/CSS reference.

## What this design is, in one paragraph

An eight-screen authentication kit for a fictional "workspace" product, built as nine static HTML
documents sharing one stylesheet and one script. Its identity is a **46 / 54 split**: a cream story
panel that never changes on the left, a 410 px form column on the right that carries every state.
The palette is one green on cream and ink with a single error red; the illustration is six
positioned divs and two unicode glyphs; the type is Inter at *variable* weights (550 / 650 / 750).
It is the only one of the catalogue-gap designs that is **multi-document and framework-free** — the
2026 house builds (Sealwise, Makeready, Thermly, Patina, Pentimento, Flowcert) are single-page
Astro + Tailwind 4 compilations with a preloader, progress bar, cookie strip and back-to-top; this
one has none of that chrome and no build step at all.

## Structure order (measured)

```
.shell                                   (grid 46% / 54%, min-height 100svh)
├── aside.story                          (cream #f6f5ef, padding 44px 11%, min-height 880)
│   ├── a.brand                          (mark 32 + "Gatehouse" 29/750 + WORKSPACE 10/500/1.5)
│   ├── div.story-copy                   (margin-top 70)
│   │   ├── p.eyebrow                    (10/700/2, #66735c)
│   │   ├── h2                           (clamp 40–65 / 1.09 / 500 / −3, <em> Georgia #4d6840)
│   │   └── p                            (15/1.8, #626d60, two <br> lines)
│   ├── div.illustration                 (250 px, aria-hidden)
│   │   ├── div.orbit                    (240 px, 1 px #d8dfcb + 27/28 px halo rings)
│   │   ├── div.note                     (242×220, −7deg, #e1edc9)  → label, strong, 2 bars, ✓ disc
│   │   ├── div.small-note               (150×68, +6deg, white)      → "↗ Room to grow"
│   │   └── div.spark                    (66 px ✳, #829465)
│   └── footer.story-footer              ("A calmer way forward." + 28 px ✳, margin-top auto)
└── section.content                      (padding 42px clamp(28,5vw,86) 20px, flex column)
    ├── header.topbar                    (pill "INTERACTIVE DEMO" + "Setup guide ↗", 12 px)
    ├── main#main[tabindex=-1]           (410 px, margin 78px auto 38px)
    │   ├── p.step                       ("01 / SIGN IN", 10/700/2)
    │   ├── h1                           (38/550/−1.6/1.13)
    │   ├── p.intro                      (14/1.75, muted)
    │   ├── div.notice[role=status]       (hidden unless ?notice=reset)
    │   ├── form[data-operation]          (fields → links row → .primary → .form-status)
    │   │   └── div.form-error[role=alert][tabindex=-1][hidden]
    │   └── p.switch                     (centred 12 px + bold link)
    └── footer.content-footer            (410 px, margin-top auto)
        ├── details.preview-tools        (summary + scenario select + 5-link screen nav)
        └── p                            ("Gatehouse · Made by Component Dock", 10 px)
```

Screens 04, 07 and 08 replace `form` with `div.message-card` (+ optional `.resend-row`,
`.secondary`, `.demo-next`); screen 09 replaces the whole `.shell` with a `.doc` column.

## Token reference block (paste into `apps/gatehouse/src/index.css`)

```css
@import "tailwindcss";

@theme {
  /* the seven custom properties of the source sheet */
  --color-ink: #20362c;
  --color-muted: #627069;
  --color-green: #254e3d;
  --color-cream: #f6f5ef;
  --color-line: #d8ded6;
  --color-error: #9b342d;
  --color-focus: #608438;

  /* literals that only exist inside rules in the source — name them once, here */
  --color-green-deep: #183d2c;   /* .primary:hover */
  --color-eyebrow: #66735c;      /* story eyebrow + story footer */
  --color-story-em: #4d6840;     /* the italic <em> phrase */
  --color-story-body: #626d60;   /* story sub-copy */
  --color-step: #6d776d;         /* .step */
  --color-badge: #647067;        /* .demo-badge text */
  --color-credit: #718074;       /* credit line */
  --color-field-border: #cad3c9;
  --color-placeholder: #7e8980;
  --color-invalid-bg: #fffafa;
  --color-note: #e1edc9;
  --color-note-border: #cddaba;
  --color-note-bar: #c1d0a9;
  --color-orbit: #d8dfcb;
  --color-orbit-halo: #f0f1e7;
  --color-orbit-halo-2: #e0e4d4;
  --color-spark: #829465;
  --color-chip-border: #e6e6dc;
  --color-error-bg: #fff5f2;
  --color-error-border: #e5bdb7;
  --color-error-ink: #86362d;
  --color-notice-bg: #edf5e4;
  --color-notice-border: #cfddbf;
  --color-card-bg: #fafbf7;
  --color-disc: #e0edcd;
  --color-demo-border: #bac8b5;
  --color-code-bg: #f1f4ec;
  --color-doc-aside: #eff4e8;

  --font-sans: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-serif: Georgia, "Times New Roman", serif;

  --radius-field: 7px;
  --radius-chip: 6px;
  --radius-card: 10px;
  --radius-pill: 30px;

  --shadow-note: 0 16px 22px #243d2310;  /* 6 % — an 8-digit hex, keep it */
  --shadow-chip: 0 8px 20px #21352b0b;   /* 4 % */
}

html { color-scheme: light; }
body { background: #fff; color: var(--color-ink); font-family: var(--font-sans); font-size: 15px; line-height: 1.6; }
:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 4px; }

@media (prefers-reduced-motion: no-preference) {
  button, a, input { transition: background-color .15s, border-color .15s; }
}
```

Two shadow colours are **8-digit hex with alpha** (`#243d2310`, `#21352b0b`). Tailwind 4 accepts
them; do not convert to `rgb(… / 6%)` and lose the exact value.

## Screenshot analysis (`relay-auth-featured.jpg`, AVIF, 37,608 B, 1200 × 947)

The file is served as **AVIF despite the `.jpg` extension** (`file` → `ISO Media, AVIF Image`), so
`vision_analyze` rejects the raw bytes; `ffmpeg -y -i featured.raw featured.png` converts it.

It is a **promo composition, not a page capture**: a pale sage ground headed
`COLORLIB · HTML / CSS / JAVASCRIPT`, *Relay Auth* in a large grotesque, the strapline *"Eight
connected authentication screens. One complete UI starter."*, a `Frontend template` pill on the
right, and a **2 × 2 grid of four browser frames** titled Sign in / Create account / Password
recovery / Code verification, each a thin window chrome with a centred title label.

What it is evidence for:

- the palette (cream ground, ink type, one deep green for the CTA) and the **one-hue** discipline;
- the **46 / 54 split** with the form column visibly narrow (410 px against a 778 px column);
- the italic serif phrase inside an otherwise sans headline;
- the rotated note card + tick disc + chip + spark as the *only* illustration;
- that the four illustrated screens and the four not illustrated share one shell, so the shell is
  a component and the screen is a slot;
- that the button label is left-aligned with the arrow pushed right.

What it is **not** evidence for: no measurement in this document comes from it — the geometry and
colours above are computed-style readings and stylesheet literals. The live render at 1440
(screenshot of the actual preview) is the design reference; this image only corroborates it.

## Section-by-section fidelity notes

### Shell and story panel

- The grid is `minmax(0,46%) minmax(0,54%)` — measured **662 / 778** at 1440. At 1500 px the story
  padding widens to 16 %, which is the only place the split's *content* changes.
- `.story` is `display:flex; flex-direction:column; min-height:880px` with
  `justify-content` untouched, so the footer is pushed down by `margin-top:auto`. Because the
  content column is taller than 880 on most screens, the measured height is **904** and the story
  stretches with the grid — the 880 is a floor, not a fixed height.
- `overflow:hidden` on `.story` is load-bearing: the note card and the chip are rotated past the
  panel's edges and would otherwise create a horizontal scrollbar.
- The note card's shadow is `0 16px 22px #243d2310` (6 % alpha) and the chip's is
  `0 8px 20px #21352b0b` (4 %) — both very soft; a default Tailwind `shadow-xl` is far too strong.
- The orbit is **one** 1 px circle plus **two** `box-shadow` rings at 27 px and 28 px, which is how
  the reference gets three concentric rings from one element. Reproduce it with one div, not three.
- Three unicode glyphs carry the illustration: `✳` (spark, and again in the story footer), `✓`
  (tick disc), `↗` (chip, every CTA, the check-email card). They must be in the markup — an icon
  library would change the metrics.
- `GEORGIA` appears exactly once: the `<em>` inside the story `h2`. No other serif anywhere.

### Topbar and content footer

- The `INTERACTIVE DEMO` pill is an outline badge, not a button: transparent ground, 1 px `#d8ded6`,
  radius 30, `padding:5px 10px`, 9 px / 1.4 px, measured **133 × 26**. It must not get a hover fill.
- `Preview settings` is a native `<details>` with `border-top:1px solid #d8ded6`, `padding-top:16px`,
  12 px muted text, `summary { width:max-content }`, and an inner nav that wraps
  (`gap:8px 16px`) with 11 px links. It is demo chrome; keep it collapsed by default.
- The credit line is 10 px `#718074`, centred, `margin:28px 0 0`; in the recreation it becomes
  `Gatehouse · Made by Component Dock` → `https://www.componentdock.com/`.

### Screens 01–03, 05, 06 (the five forms)

- One column, 20 px between fields; each field is a label (12/650, `margin-bottom:8px`) plus a
  **52 px** input (`min-height:50px` + 1 px border + `13px` padding at 15 px / 1.6). The
  `min-height` is not decorative: it holds the button and the input at the same visual weight.
- The reveal button is absolutely positioned inside `.input-wrap` at `right:8px; top:8px`, 34 px
  tall, transparent, 11/650, and only the **password** inputs reserve space for it
  (`padding-right:70px`). Hover fills cream.
- `.form-links` is right-aligned, 12 px, with a **negative** top margin (`-5px`) — it tucks up under
  the field it belongs to. The gap to the CTA below is 25 px.
- The CTA is a flex row with `justify-content:center` **and** `span{margin-left:auto}`: that is how
  the label reads left and the arrow sits hard right. Reproduce the span; `justify-between` alone
  centres the label wrongly.
- Success does not animate: the adapter resolves, the form resets, and the view swaps. No toast, no
  spinner — the only busy signal is the disabled button, `aria-busy`, and `Please wait…`.
- The password hint under field 1 on screens 02 and 05 is `margin:-9px 0 21px` — deliberately
  pulled up to read as part of the field, not as a new block.

### Screen 04 (check your inbox)

- No form at all: one `.message-card`, one `.resend-row`, one `.secondary`, one switch line and an
  `<aside class="demo-next">` with a dashed border. The card is the only 10 px radius in the kit.
- The intro is anti-enumeration copy (*"If an account matches that address…"*) — keep it; it is the
  design's tone, not filler.
- `.demo-next` is `border:1px dashed #bac8b5; padding:16px 18px; margin-top:26px` and its `<strong>`
  + two `<p>`/`<a>` lines are the only place the kit admits it is a preview. Keep it every bit as
  plain as it is.

### Screens 07 and 08

- Both are card + single CTA + switch. The CTA is an **anchor** with the `.primary` class (so it is
  a `<a class="primary">`, not a `<button>`); hover is the same `#183d2c`.
- Screen 08's second paragraph is the honesty line — *"No real account or authenticated session has
  been created."* — and must survive the rewrite verbatim in meaning.

### Screen 09 (setup guide → "How this demo works")

- The guide is the **only** document without `.story`: a `.doc` column, `max-width:850px`,
  `margin:50px auto`, `padding:0 25px`, with its own brand block and `h1 { margin-top:45px }`.
- It carries its own typographic scale: `h2` 23 px, body 15/1.8, `<aside>` `#eff4e8` radius 8,
  `<code>`/`<pre>` on `#f1f4ec` (radius 3 / 8, `overflow-wrap:anywhere`), table 13 px with 1 px
  `--line` row rules and `padding:12px 8px`.
- It links **all eight** screens (the only complete nav in the kit) plus a 5-row file table. In the
  recreation the file table becomes a *behaviour* table and the `python3 -m http.server` block
  becomes the repo's dev command; the section order is preserved.

## Source → React adaptation table

| source | recreation |
| --- | --- |
| nine `.html` documents | **nine views** in one SPA: `signin`, `register`, `recovery`, `check-email`, `reset`, `verify`, `expired`, `welcome`, `how-it-works` |
| `location.href` navigation / `location.assign(route)` | `navigate(view)` + `location.hash` mirror (`#sign-in`, `#register`, `#recovery`, `#check-email`, `#reset-password`, `#verify`, `#expired-link`, `#welcome`, `#how-it-works`) |
| `?notice=reset` on the sign-in URL | a one-shot `notice` prop passed by `navigate('signin', { notice: 'reset' })` |
| `form[data-operation]` + `routes{}` map | `operation` prop on a shared `<AuthForm>` + a typed `ROUTES` const |
| `auth-adapter.js` (`isDemo`, `authenticate`) | `src/lib/auth.ts` — same signature, `scenario` argument, 650 ms `setTimeout`, typed `AuthErrorCode` union |
| `for (const button of document.querySelectorAll('[data-reveal]'))` | `useReveal()` / `<PasswordField>` owning `type` + `aria-pressed` + label |
| `form.querySelectorAll('input')` validation loop | `validate(values, rules)` returning `{ field, message }[]`, same five messages |
| `.form-status` / `[data-resend-status]` live regions | `aria-live="polite"` elements rendered from state |
| `setInterval` 500 ms resend ticker + `pagehide` cleanup | `useResend()` with `useEffect` cleanup |
| `document.querySelector('#scenario')` read at submit | `scenario` state from the `<select>` in `Preview settings` |
| `<noscript>` bar, duplicate `<meta name="robots">`, `cdnjs` prefetch | **not reproduced** |
| `assets/mark.svg` (212 B) | new inline SVG mark (D2) |
| `Made by Colorlib` | `Made by Component Dock` → componentdock.com (D6) |

## Sibling comparison — same catalogue-gap generation, different build

| | this design | the 2026 house builds (Sealwise, Makeready, Thermly, Patina, Pentimento, Flowcert) |
| --- | --- | --- |
| build | hand-written HTML/CSS/JS, **no build step** | Astro + compiled Tailwind 4 |
| documents | **nine** (eight screens + a guide) | one |
| colours | CSS **custom properties** (`--ink`, `--green`, …) | utility literals, no emitted custom properties |
| length | **4 KB** of HTML per screen, 8.6 KB CSS total | 45–105 KB of HTML, 60 KB+ of CSS |
| chrome | none | preloader, scroll progress bar, cookie strip, back-to-top, mobile call bar |
| illustrations | CSS + unicode only | SVG diagrams or placeholder photography |
| state | five fake operations + a scenario select | usually none, or one accordion |
| type | Inter at **variable** weights 550 / 650 / 750 | Outfit / Manrope etc. at static weights |

Two consequences for the implementer: (1) there is **no house kit to reuse** here — this design is
small enough that primitives should be local to the app, and (2) because the source is nine
documents, the parity claim must be made **per screen** (step label, `h1`, field count, CTA, route),
not per band.

## Measured defects and quirks — decide, do not "fix" silently

1. **Two contradictory `<meta name="robots">`** in every head (`noindex, nofollow` then
   `noindex,follow`). Do not reproduce either.
2. **The submit ships `disabled` and `app.js` enables it on load.** Ours renders enabled from first
   paint (D8) — same end state, no flash.
3. **The brand subtitle inverts at the 950 / 700 boundary**: hidden at ≤950, visible again at ≤700.
   It reads as intentional on a phone (the header would otherwise say only `relay`), so keep it.
4. **Inter is never loaded** — the sheet names it, no `<link>` or `@import` exists, and a
   `dns-prefetch` points at a CDN for a font that is never requested. The kit's own claim (*"no
   external assets"*) is true and is exactly why the type falls back on most machines. Ours loads
   Inter (D4).
5. **`input[type=password], input[data-password]`** both reserve the 70 px reveal padding — and
   `app.js` sets `dataset.password` on load anyway, so the pair is redundant. One rule is enough.
6. **The reveal `aria-label` is derived from `input.labels[0].textContent.toLowerCase()`**, so it
   inherits any trailing whitespace the markup has. Build it from the label's trimmed text.
7. **`setup.html` has no `#main` skip link** although it is the longest document in the kit — the
   eight screens do. Ours puts the skip link on all nine views.
8. **`.story` `min-height:880` is a floor**, so the panel's height is really the content column's
   (904 on six screens, 927 / 929 on two). Do not hard-code 880 anywhere.
9. **The `demo-next` aside is the only route to the reset screen** — a real flow would arrive from
   an email. Keep it visibly demo-only, and keep the reset view reachable from the preview nav too
   so no state is a dead end.
10. **`maxlength="6"` plus `pattern="[0-9]{6}"`** means five digits fail with *"Enter all six
    digits."* (a pattern message), not with a length message. Keep the message mapping exact.

## Placeholder policy

No imagery is required: the story panel is entirely CSS, and the only raster asset in the reference
is the promo image on the ColorLib listing. If an implementer chooses to add a photograph anywhere
(do not), it must be `https://picsum.photos/seed/gatehouse-<n>/<w>/<h>` — deterministic per
template, never a ColorLib asset. The brand mark must be redrawn inline (32 × 32, `rx 10`,
`#214c3b` plate, `#d8f2b3` glyph), not copied from `assets/mark.svg`.
