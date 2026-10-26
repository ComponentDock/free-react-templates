# Tendril — task outline

Recreation of the ColorLib **Hero V04** design (`hero-04`) at `apps/tendril`. Spec is the authority:
`openspec/specs/template-tendril/spec.md`. Design notes: `docs/templates/tendril/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/hero-04/` (the slug-only `theme/hero-04/` and
`theme/bb/hero-04/` both 404 — this family lives under `bootstrap/`). Check boxes only as work ships.

> **One app-landing hero screen** — a mint gradient ground with a lime halo, a marked wordmark and a 364 px pill
> nav that becomes a disclosure below 861, a rating line, a **two-tone 83.2 px headline** (ink line, then a green
> block line), a three-line paragraph, two dark 190 px store buttons, three dot-marked facts, and a **two-phone
> CSS product mock** (upright habit screen + a back phone rotated 8° showing a 42-day streak) standing on a
> 440 px lime disc, with a white "🎉 42-day streak!" toast floating over the phones' left edge.
>
> **No images, no forms.** Five inline SVGs and one data-URI checkmark do all the drawing. Exactly **one** script,
> and it only opens and closes the menu.
>
> This is the **hero family's variant 4 of 12**: the first *product-mock* entry since the first variant, the
> first with a **real disclosure menu**, the first with **8 `@font-face` rules over 2 variable binaries**, and
> the first whose document height is **flat at exactly 900 from 1440 down to 961** and then jumps **310 px at a
> single pixel**.
>
> Eight numbers decide fidelity: bar **1440 × 83.25**; wordmark **92.38 × 34.09 at (160, 24.58)**; pill
> **364 × 39.25 at (916, 22)**; hero **1200 × 680 at (120, 151.63)**; `h1` **528 × 163.06 at (160, 298.33)** =
> **83.2 px / 81.536 line box / 2 lines**; visual **528 × 560 at (752, 199.63)**; front phone **270 × 556 at
> (881, 199.63)**; toast **173 × 47.25 at (716, 535.63)**.
>
> The three ways a port loses it: (1) rendering the headline as **one text node** instead of a text node plus a
> `display:block` span (the two-line rhythm is structural); (2) measuring the **rotated** back phone with
> `getBoundingClientRect` — 240 × 494 reads as **306.42 × 522.59**; (3) anchoring the toast to the page instead
> of the visual, or "fixing" it by hiding it — the reference **clips 39.5 px** of it at 521 and that is a defect,
> not a design.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/tendril`; package `@free-react-templates/tendril`
- [ ] `public/CNAME` = `tendril.free.componentdock.com`; `"homepage"` = `https://tendril.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace
      (`grep -c free-react-templates/tendril package-lock.json` ≥ 1)
- [ ] one `<link>`: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400..800&display=swap` (**200**) —
      the reference ships that same variable face under four weight names

## 2. Tokens and ground

- [ ] `@theme`: the 25 tokens listed in the spec's **Design tokens** table (`--color-ground:#e9f4ee`,
      `--color-ink:#0f2e22`, `--color-muted:#3d5a4d`, `--color-green:#127a4f`, `--color-lime:#c6f36b`,
      `--color-phone:#0b0f0d`, … `--color-stars:#b45309`); `--font-sans: "DM Sans", system-ui, …`;
      `--gutter: clamp(16px, 4vw, 40px)`
- [ ] shell: `min-height:100vh; display:flex; flex-direction:column; overflow:hidden`, background
      `radial-gradient(50% 60% at 78% 55%, #c9ecd8 0%, transparent 70%), linear-gradient(180deg, #f3faf6, #e9f4ee)`,
      `color: ink`, `font-size:16px`, `line-height:1.55`, DM Sans
- [ ] `--text-display: clamp(2.6rem, 1.2rem + 5vw, 5.2rem)` and `--text-lede: clamp(1.02rem, .95rem + .35vw, 1.2rem)`;
      Tailwind's scale cannot express either
- [ ] `main`: `flex:1; display:flex; align-items:center` — **this is what centres the hero**, not padding

## 3. Header

- [ ] bar: `position:relative; z-index:5`; inner `max-width:1200; margin:0 auto; display:flex; align-items:center;
      gap:24px; padding: 22px var(--gutter)` → inner **1200 × 83.25** at (120, 0)
- [ ] wordmark: **34 × 34** ink tile radius **11** with an 18 px lime ring `<svg>` (`circle r=6.5`,
      `stroke-width:3`, `stroke-dasharray="30 11"`, `rotate(-60 10 10)`), `gap:10`, text `22px/800/-.03em`
      → **92.38 × 34.09** at (160, 24.58)
- [ ] pill: `margin-left:auto; display:flex; gap:6px; padding:5px; border-radius:999px;
      background: rgba(255,255,255,.7)` → **364 × 39.25** at (916, 22)
- [ ] links: `padding: 8px 16px; border-radius:999px; font-size:15px; font-weight:500; color:muted;
      transition: background-color .2s, color .2s` → widths **96 / 102 / 83 / 65**
- [ ] `:hover` → white bg + ink label; `[aria-current="page"]` → ink bg + white label
- [ ] focus-visible on every `a`/`button`: `outline: 3px solid var(--color-green); outline-offset: 3px`

## 4. Menu (the page's only behaviour)

- [ ] button: `display:none; place-items:center; width:44px; height:44px; border:0; border-radius:14px;
      background:#fff; margin-left:auto`, `aria-expanded`, `aria-controls`, `aria-label`
- [ ] two glyphs (`.menu-open`, `.menu-close`) swapped by `.is-open` on the bar — no animation
- [ ] at **≤ 860**: `display:grid` on the button; nav becomes
      `position:absolute; top: calc(100% - 8px); left/right: var(--gutter); display:none`
- [ ] panel: white, radius **22**, `padding: 8`, `box-shadow: 0 24px 48px -18px rgba(15,46,34,.35)`,
      links `13px 16px / 17px` → **358 × 243.38** at (16, 80) at 390, overlaying **235.38 px** of the hero
- [ ] script behaviour, ported to React: toggle on click; `aria-expanded` + label + both glyphs follow;
      **Escape** closes and returns focus to the button; outside click closes; a link click inside closes;
      `matchMedia('(min-width: 861px)')` closes on grow; **remove every listener on unmount**
- [ ] keep the no-JS fallback shape (`.bar:not(.is-enhanced)` wraps and the nav stays visible)

## 5. Copy column

- [ ] rating: `inline-flex; align-items:center; gap:10` → **287.25 × 27.25** at (160, 251.08)
- [ ] score chip **45 × 27.25** — radius 8, `2px 10px`, `15/700`, white on ink; stars **77.25 × 23.25** at
      (215, 253.08), `#b45309`, `letter-spacing:2px`, `aria-hidden`; sentence `15/500` muted
- [ ] `h1`: `margin: 20px 0 18px; font-size: var(--text-display); font-weight:800; line-height:.98;
      letter-spacing:-.045em` → **528 × 163.06** at (160, 298.33), **2 lines** at every width
- [ ] line 2 is a `<span className="block">` in `--color-green`; line 1 is the bare text node — never one node
- [ ] paragraph: `max-width:30em; margin:0; color:muted; font-size: var(--text-lede)` → **528 × 89.25**,
      **3 lines** at 1440, `max-width` **576** (does not bite at 528)
- [ ] store row: `display:flex; flex-wrap:wrap; gap:12; margin-top:32` → **528 × 55.06** at (160, 600.64)
- [ ] each store: `inline-flex; align-items:center; gap:12; min-width:190px; padding: 10px 22px 10px 16px;
      border-radius:14px; background:#0b0f0d; color:#fff; box-shadow: 0 12px 24px -12px rgba(11,15,13,.6)` →
      **190 × 55.06**; label block = `11.5px` `opacity:.85` over `19px/700/-.01em`; 26 px generic icon
- [ ] store hover: `translateY(-2px)` + `#1d2a24` over `.2s`
- [ ] facts: `display:flex; flex-wrap:wrap; gap: 8px 24px; margin-top:30; color:muted; font-size:14.5px` →
      **528 × 22.47** at (160, 685.7); each `li` `padding-left:16` with a **7 × 7** green `::before` dot at
      `top:.6em`; `<strong>` in ink
- [ ] **measure the facts after `document.fonts.ready`** — before the webfont lands the row wraps at 1100
      (52.94) and after it does not (22.47)

## 6. Phone mock

- [ ] visual: `position:relative; display:flex; justify-content:center; min-height:560px` → **528 × 560** at (752, 199.63)
- [ ] disc `::before`: **440 × 440**, `border-radius:50%`, `--color-lime`, `top:50%; left:50%;
      transform: translate(-40%, -50%)` → its right edge is flush with the visual's right edge (1280)
- [ ] front phone: `position:relative; width:270px; height:556px; padding:10px; border-radius:44px;
      background:#0b0f0d; box-shadow: 0 0 0 2px #2c3a33 inset, 0 40px 70px -30px rgba(15,46,34,.6); z-index:2`
      + `animation: bob 6s ease-in-out infinite`
- [ ] notch: **84 × 24**, radius 999, `top:20; left:50%; translateX(-50%)`, `z-index:3`
- [ ] screen: `height:100%; overflow:hidden; padding: 52px 16px 16px; border-radius:34px; background:#fbfdfb;
      font-size:12.5px` → **250 × 536**; content must end **39.17 px** above the bottom (no clipping)
- [ ] habit screen, top to bottom: greeting (`17/800/-.02em`) + **30 px** avatar (`#fde68a`/`#713f12`);
      5 day cells **38.8** wide (radius 12, `#eef5f0`, `10.5/500` + `14/700`, third inverted);
      ring well (`#e6f7ea`, radius 18, `padding:12`, `margin-top:14`) with a **64 px**
      `conic-gradient(green 71%, #cfe8d7 0)` ring, a **50 px** inner disc, `5/7 done` at 9.5/15 px;
      5 habit rows **218 × 41.38**, `gap:7`, `margin-top:12`, `1px solid #e3ece6`, radius 14,
      **18 × 18** radius-6 checkbox (tick = data-URI SVG at 14 px), `is-done` → `#54705f` + `#9ab8a5` strike
- [ ] back phone: `position:absolute; top:40px; left: calc(50% + 10px); width:240px; height:494px;
      transform: rotate(8deg)` → box **240 × 494** at (274, 40) inside the visual; **measure it with
      `offsetWidth/offsetHeight`** (its rect reads 306.42 × 522.59 and its screen's rect 283.83 × 500.01)
- [ ] stats screen: `display:flex; flex-direction:column; align-items:flex-end; text-align:right; padding: 44px 18px 16px 110px;
      background: ink; color:#d6ebe0` → **220 × 474**; "This week" `12/500` `.9`; **"42" at 68/800/-.05em lime**;
      "day streak" `13/500`; week chart **110** tall, 7 bars `height: calc(var(--v) * 100%)`, radius 6, `gap:8`,
      `rgba(198,243,107,.85)`; initials `M T W T F S S` at 10 px
- [ ] toast: `position:absolute; top:60%; left: calc(50% - 300px); padding: 12px 18px; border-radius:16px;
      background:#fff; box-shadow: 0 18px 40px -16px rgba(15,46,34,.45); font-size:15px; font-weight:700;
      z-index:3` + `animation: bob 6s ease-in-out -3s infinite` → **173 × 47.25** at (716, 535.63)
- [ ] **clamp the toast** (`left: max(0px, calc(50% - 300px))` or move the ≤520 re-anchor up to 640): the
      reference clips **20 px** at 560 and **39.5 px** at 521
- [ ] `@keyframes bob { 50% { transform: translateY(-10px) } }` on the front phone and the toast only

## 7. Breakpoints

- [ ] **≤ 960**: hero → `grid-template-columns:1fr; text-align:center`; copy → centred flex column; stores and
      facts centred; paragraph `margin-inline:auto` (its `max-width:30em` starts to bite) → document **1210**
- [ ] **≤ 860**: the disclosure (section 4)
- [ ] **≤ 520**: visual `min-height:500; margin-top:8`; disc **320** with `translate(-50%,-50%)`; front phone
      **244 × 500**; **back phone hidden**; toast `top:auto; bottom:-6; left:50%; translateX(-50%);
      animation:none; white-space:nowrap`; stores full width (`122.13` tall)
- [ ] **reduced motion**: kill every animation and transition (the sheet does it on every descendant)

## 8. Footer and routes (deltas)

- [ ] `<footer>` below the 100vh hero linking `https://www.componentdock.com/` ("Component Dock") — the hero keeps
      `min-height:100vh` so the fold numbers above still hold
- [ ] real destinations for the seven anchors (wordmark, four links, two store buttons)
- [ ] `aria-current="page"` only on the current page's link (the reference parks it on *Features*)
- [ ] brand **Tendril** (7 characters vs the source's 4): the wordmark grows to ~**109** and the pill ~**10**
      wider; the headline, paragraph tail, facts and store labels stay as measured
- [ ] no `colorlib`, `hero-04` or the source's brand in any app file; the toast's streak claim also appears in
      the visible copy

## 9. Tests (100 % coverage, TDD — write these first)

- [ ] landmarks: one `<header>`, one `<nav aria-label="Main">`, one `<main>`, one `<section aria-labelledby>`;
      exactly one `<h1>`, zero `<h2>`
- [ ] the `h1` renders a text line plus **one** block span, in that order
- [ ] the rating row renders the score, five `aria-hidden` stars and the count sentence
- [ ] two store buttons, each with two label lines; the icons are `aria-hidden`
- [ ] three facts in order with their `<strong>` emphasis
- [ ] five habit rows, exactly three with `is-done`; five day cells, exactly one `is-today`; seven week bars with
      the `--v` values `.6 .85 .7 1 .9 .45 .75`
- [ ] the toast is `aria-hidden` and its claim also appears in visible copy
- [ ] menu: closed by default (`aria-expanded="false"`), opens on click, closes on Escape with focus returned,
      closes on outside click and on a link click, and closes when `matchMedia` flips to ≥ 861 (mock it)
- [ ] the button has `aria-controls` pointing at the nav's id, and the nav's id exists exactly once
- [ ] footer contains a link to `https://www.componentdock.com/`
- [ ] no `<img>`, no `<form>`, no `<input>` in the rendered tree

## 10. Verification

- [ ] `npm run verify:app tendril` (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-tendril --type spec`
- [ ] 1440 × 900 (motion off, fonts ready): every box in the spec's checklist line, and the document is
      **exactly 900** with `scrollX === 0`
- [ ] ladder: **900** at 1440 → 961, **1210** at 960, **1184** at 861, **1188** at 860, **1132** at 520,
      **1203** at 320 — not monotonic, and 520 is taller than 521
- [ ] `scrollWidth === clientWidth` at **1440, 1100, 1078, 1077, 1024, 961, 960, 860, 768, 640, 560, 521, 520,
      480, 390, 320**
- [ ] `h1` is **2 lines** at every width and **41.6 px** at 320; facts **1 row at 1078**, **2 rows at 1077**,
      **3 rows at 320**
- [ ] back phone box **240 × 494** via `offsetWidth/offsetHeight`; toast fully visible at **560** and **521**
- [ ] bob moves the front phone and toast in opposite phase (`matrix.f` 0 → −10); reduced motion → `none`
- [ ] `TEMPLATES.md` row added after the existing hero rows in `## Bootstrap Heroes (12)`, then
      `npm run readme:status`
