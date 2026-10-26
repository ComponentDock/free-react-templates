# Presswork — task outline

Recreation of the ColorLib **Hero V03** design (`hero-03`) at `apps/presswork`. Spec is the authority:
`openspec/specs/template-presswork/spec.md`. Design notes: `docs/templates/presswork/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/hero-03/` (the slug-only `theme/hero-03/`, the
`theme/bb/hero-03/` and the whole `presswork` name are **404** — this family lives under `bootstrap/`).
Check boxes only as work ships.

> **One editorial hero screen, all type** — a hairline header with a serif wordmark and four links, a
> three-run uppercase kicker, a **three-line Fraunces headline at 153.6 px** with the middle line indented and
> one word in italic rust, a **22-second rotating ring badge** pinned to the headline's bottom-right, then a
> rule over a three-column foot (intro paragraph → numbered services → pill CTA).
>
> **No JavaScript. No images. No gradient field.** The whole page is five hex colours, two hairlines, one
> keyframe and two transitions. There is nothing to open, toggle or fetch — if a hook appears in the port,
> something has been over-built.
>
> This is the **hero family's variant 3 of 12**: the family's first *editorial* entry, the first with **zero
> `<script>`**, the first whose document is **exactly the viewport** (900 at 1440), and the first whose
> screenshot is a real JPEG rather than AVIF-behind-a-`.jpg`.
>
> Eight numbers decide fidelity: bar **1440 × 87.09**; wordmark **144.16 × 34.09 at (56, 26)**; kicker
> **1328 × 20.14 at (56, 151.09)**; head **1328 × 522.7 at (56, 171.23)**; `h1` **1328 × 414.7 at
> (56, 215.23)** = **153.6 px / 138.24 line box / 3 lines**, middle indent **215.04**; badge **126.39² at
> (1257.61, 567.55)**; foot **1328 × 138.06 at (56, 705.94)** with columns **542.594 / 417.391 / 252.828**;
> CTA **252.83 × 58.8 at (1131.17, 785.2)**.
>
> The three ways a port loses it: (1) wrapping the `h1` as **one text node** instead of three block lines;
> (2) making `.cl-hero03__head` a **plain block** — its flex-item status is what keeps the `h1`'s 44/64 px
> margins inside it, and losing that moves the badge **64.02 px up**; (3) hard-coding the foot's offset
> instead of `margin-top:auto` (12.01 px of slack at 1440, **0** at 1100, **97.64** at 768).
>
> The reference's defects are **not** to be reproduced: six dead `#` anchors, `aria-current="page"` parked on
> *Work*, an availability sentence that exists **only** inside `aria-hidden` SVG text, a rotating badge that
> makes the page **scroll horizontally by 2 px below ~455 px**, no footer, the `:where(html) … revert` guard
> block (23 `revert`s), the dead `.cl-icon` rule, and the inert `.cl-hero03__nav` hook.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/presswork`; package `@free-react-templates/presswork`
- [ ] `public/CNAME` = `presswork.free.componentdock.com`; `"homepage"` = `https://presswork.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace
      (`grep -c free-react-templates/presswork package-lock.json` ≥ 1)
- [ ] one `<link>`: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&display=swap`
      — the **`opsz` axis is mandatory** (without it `font-variation-settings:"opsz" 144` is inert and the
      display line renders with the wrong thick-to-thin contrast)

## 2. Tokens and ground

- [ ] `@theme`: `--color-paper:#f1ece2`, `--color-ink:#1a1714`, `--color-muted:#5a5249`,
      `--color-rule:#cfc5b5`, `--color-accent:#b3401e`; `--font-display: "Fraunces","Iowan Old Style",Georgia,serif`;
      `--font-sans: system-ui, …`; `--gutter: clamp(16px, 4vw, 56px)`
- [ ] root: `min-height:100vh`, `display:flex`, `flex-direction:column`, `background:paper`, `color:ink`,
      `font-size:16px`, `line-height:1.55`, `font-family` = the system sans stack (**not** Fraunces — the serif
      is display-only on this page)
- [ ] `--text-display: clamp(3rem, .6rem + 10vw, 12rem)` — Tailwind's scale cannot express `.6rem + 10vw`
- [ ] only **5** colour literals in the whole app; there is no `rgb()`/`rgba()` and no gradient except the
      link underline

## 3. Header (the only band with a rule)

- [ ] bar: `display:flex; flex-wrap:wrap; align-items:baseline; justify-content:space-between;
      gap: 8px 24px; padding: 26px var(--gutter); border-bottom: 1px solid var(--rule)` → **87.09** tall
- [ ] wordmark: Fraunces `22px/600`, `letter-spacing:-.01em`, with `®` as a `.55em` superscript `2px` after it
      (the span is `aria-hidden`), `margin-left:2px`, `vertical-align:super` → **144.16 × 34.09 at (56, 26)**
- [ ] links: `display:flex; gap: clamp(16px, 3vw, 40px)` (40 at 1440); each `15px/500`, `padding: 4px 0`
      → widths **37.98 / 47.78 / 51.89 / 58.36**, no wrapping
- [ ] underline is a **background**, not a border:
      `background: linear-gradient(currentColor,currentColor) no-repeat 0 100% / 0 1px;
      transition: background-size .35s ease` → `100% 1px` on `:hover` **and** `[aria-current="page"]`
- [ ] last link `--accent`
- [ ] at **≤ 640**: `flex-direction:column; align-items:flex-start; padding-block:18px` → bar **103.89**,
      wordmark y **18**, nav y **60.09**; link gap **20px**
- [ ] `:focus-visible` on every anchor: `outline: 2px solid var(--accent); outline-offset: 4px`

## 4. Kicker

- [ ] `display:flex; flex-wrap:wrap; gap: 6px 28px; margin:0; color: muted; font-size:13px; font-weight:600;
      letter-spacing:.12em; text-transform:uppercase` → **1328 × 20.14**, three runs **223.7 / 241.59 / 119.14**
- [ ] separator: `span + span::before { content:"/"; margin-right:28px; color: var(--rule) }` — the slash
      belongs to the **following** span, which is why the visual gap is `28 + 28`
- [ ] at **≤ 640**: `font-size:11.5px`, `gap: 4px 14px`, slash margin **14px** — this is why the kicker is
      **2 lines at 641 and 1 line at 640**
- [ ] at 320 it is **3 lines** (**61.44** tall); do not "fix" any of these by hand

## 5. Headline and badge

- [ ] `h1`: `margin: 44px 0 64px` (`clamp(20px,4vw,44px)` top), Fraunces, `font-size: var(--text-display)`,
      `font-weight:350`, `font-variation-settings: "opsz" 144`, `line-height:.9`,
      `letter-spacing:-.045em`; at ≤ 640 `line-height:.95`, `letter-spacing:-.04em`
- [ ] **three `<span class="block">` lines** — never one text node; line boxes **138.23** each at 1440
- [ ] middle line `padding-left: 1.4em` (**215.04**), `.6em` at ≤ 640
- [ ] `<em>` on *outlast*: `color: var(--accent); font-style: italic; font-weight: 300`
- [ ] head wrapper: `position: relative` **and** a flex item of the hero column — the `h1`'s margins stay
      inside it (**522.7** tall). Do not wrap it in an extra block or the badge moves **64.02 px up**
- [ ] badge: `position:absolute; right:0; bottom:0; width: clamp(88px, 6vw + 40px, 150px); aspect-ratio:1`
      → **126.39²** at (1257.61, 567.55)
- [ ] ring SVG: `<textPath>` on a radius-**46** circle, "Booking projects for spring 2027 •",
      `10.5px/600`, `letter-spacing:.18em`, `text-transform:uppercase`, `fill: ink`,
      `animation: spin 22s linear infinite` (`to { transform: rotate(360deg) }`)
- [ ] arrow: `↘` (`&#8600;`) centred via `position:absolute; inset:0; display:grid; place-items:center`,
      **34px** Fraunces accent (**26px** at ≤ 640)
- [ ] whole badge `aria-hidden` — and **contain the rotation** (`overflow-x: clip` on the shell or an inset
      badge): an 88 px square's rotating AABB is **124.45**, i.e. an **18.23 px** overhang against a **16 px**
      gutter, and the reference really scrolls **2 px** at 390/320

## 6. Foot (three columns, bottom-aligned)

- [ ] `display:grid; grid-template-columns: minmax(0,1.3fr) minmax(0,1fr) auto; align-items:end;
      gap: clamp(24px,4vw,64px); margin-top:auto; padding-top:28px; border-top:1px solid var(--rule)`
      → **1328 × 138.06** at (56, 705.94), columns **542.594 / 417.391 / 252.828**, gap **57.6**
- [ ] intro: `max-width:34em; margin:0; color: muted; font-size: clamp(1rem,.96rem+.2vw,1.1rem)`
      → **17.6 px** at 1440, **4 lines**, box **542.59 × 109.06**; append the availability sentence here
- [ ] services `<ol>`: `display:grid; gap:6px; font-family: var(--font-display); font-size:20px`;
      each `<li>` **31** tall; numeral span `display:inline-block; width:36px; font-family: system-ui;
      font-size:12px; font-weight:600; color: muted; vertical-align: 3px` and `aria-hidden`
- [ ] CTA: `display:inline-flex; align-items:center; gap:12px; padding:16px 26px; border:1px solid var(--ink);
      border-radius:999px; font-weight:600; white-space:nowrap` → **252.83 × 58.8**; 22 px arrow
      (`stroke-width:1.6`), `transition: background-color .25s, color .25s`
- [ ] CTA hover: `background: var(--ink); color: var(--paper)`, arrow `translateX(4px)` over `.25s`
- [ ] at **≤ 1100**: foot → **one column**; services → `grid-template-columns: repeat(3, auto);
      justify-content:start; gap: 8px 32px`; CTA → `justify-self:start`
- [ ] at **≤ 640**: services back to **one column** (`font-size:19px`); CTA `justify-self:stretch` + centred;
      badge `bottom:-8px`; arrow **26px**

## 7. Footer and routes (deltas from the reference)

- [ ] `<footer>` **below** the 100vh hero, linking `https://www.componentdock.com/` ("Component Dock") — the
      hero keeps its own `min-height:100vh`, so the fold numbers above still hold and the document is
      `900 + footer`
- [ ] real destinations for the six anchors (wordmark, Work, Studio, Journal, Contact, CTA)
- [ ] `aria-current="page"` only on the current page's link
- [ ] brand **Studio Ferro®** (12 characters — the same as the source's "Atelier Nord", so no box moves);
      headline, kicker, intro, services and CTA copy stay as measured
- [ ] no `colorlib`, `hero-03`, `Atelier Nord` or preview URL in any app file

## 8. Tests (100 % coverage, TDD — write these first)

- [ ] landmarks: one `<header>`, one `<nav aria-label="Main">`, one `<main>`, one `<section
      aria-labelledby>`; exactly one `<h1>`, zero `<h2>`
- [ ] the `h1` renders **three** line spans in order, the middle one carrying the indent class, and the
      `<em>` holds exactly one word
- [ ] the kicker renders three runs and no literal `/` in the markup (the slash is generated)
- [ ] the services `<ol>` renders three items, numerals `aria-hidden`, in order 01/02/03
- [ ] the CTA is a link whose accessible name is "See selected work" and points at a real route
- [ ] the badge is `aria-hidden`, contains a `<textPath>` whose text includes "Booking projects for
      spring 2027", and its wrapper is not focusable
- [ ] the footer contains a link to `https://www.componentdock.com/`
- [ ] no `<img>`, no `<form>`, no `<script>` in the rendered tree

## 9. Verification

- [ ] `npm run verify:app presswork` (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-presswork --type spec`
- [ ] 1440 × 900: every box in the spec's checklist line, and the document is **exactly 900**
- [ ] ladder: **900 / 900 / 900 / 955 / 913 / 900 / 900 / 900 … 900** at
      1440 / 1280 / 1101 / 1100 / 1024 / 900 / 768 / 641 / 320 — tallest at **1100**, not at 320
- [ ] `scrollX === 0` and `scrollWidth === clientWidth` at **1440, 1280, 1101, 1100, 1024, 900, 768, 641,
      640, 560, 480, 390, 320, 300** — the badge containment is what keeps 390/320/300 clean
- [ ] reduced motion: badge `animation-name: none`, transform `none`, every transition `none`
- [ ] `TEMPLATES.md` row added as the **third** entry of a new `## Bootstrap Heroes (12)` section between
      `## Bootstrap Footers (20)` and `## Bootstrap Modals (20)`, then `npm run readme:status`
