# Afterglow — task outline

Recreation of the ColorLib **Hero V02** design (`hero-02`) at `apps/afterglow`. Spec is the authority:
`openspec/specs/template-afterglow/spec.md`. Design notes: `docs/templates/afterglow/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/hero-02/` (the slug-only `theme/hero-02/` and
`theme/bb/hero-02/` are both **404** — this family lives under `bootstrap/`). Check boxes only as work ships.

> **One centred hero on a four-blob mesh, plus a logo cloud** — a floating glass pill for a bar, a rating pill,
> a balanced 86.4 px headline, a sub, two pill buttons, a free-plan note, then a second section with an
> uppercase kicker and **six wordmarks in six type treatments**. **No `<img>` anywhere**; the mesh is four
> blurred `<span>`s and three keyframes.
>
> This is the **hero family's variant 2 of 12** — the first of them with a *second* section, and the first
> whose document scrolls (950 at a 900 px viewport).
>
> The risk is not a missing section — it is the eight things a port flattens: the mesh is **four blobs and a
> scrim**, not one gradient; the **scrim** is what keeps the sub at 7.4 : 1; the dropdown is anchored to the
> **pill**, not the bar, because `backdrop-filter` makes the pill a containing block; the bar's mobile mode
> exists **only if JS runs** (`is-enhanced` — without it the bar is 248.3 tall at 390); the headline holds
> **3 lines from 1440 to 390** and only splits at 320; the logo grid steps **6 → 3 → 2** with the tile
> height stepping **64 → 56**; the six wordmarks are **six typographic treatments** (one of them is Georgia
> italic); and the blobs get **wider** at ≤ 860 (`46vw → 80vw`, capped at 680) while the blur softens.
>
> Seven numbers decide fidelity: bar pill **1080 × 65.25 at (180, 16)**; hero **900 × 699 at (270, 81.25)**;
> `h1` **86.4 px / 3 lines / 264.38 tall**; actions **428 × 54**; logo section **1080 × 170.14 at
> (180, 780.25)**; grid **6 × 156.66 × 64**; document **950**.
>
> The reference's defects are **not** to be reproduced: eight dead `#` anchors, `aria-current="page"` parked
> on *Product*, no footer, the `:where(html) … revert` guard block, the dead `.cl-icon` rule, the inert
> `.cl-hero02__brand--kestrel` hook, the `!important`s, and a screenshot framed in macOS chrome.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/afterglow`; package `@free-react-templates/afterglow`
- [ ] `public/CNAME` = `afterglow.free.componentdock.com`; `"homepage"` = `https://afterglow.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace
      (`grep -c free-react-templates/afterglow package-lock.json` ≥ 1)
- [ ] one `<link>`: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap`
      (**five weights; 300 and 900 do not exist in the source** — 900 measures identically to 800)

## 2. Tokens and ground

- [ ] `@theme` block: `#fbfaff` ground, `#14121f` ink, `#423f55` muted, `#4a4760` kicker, `#3a374c` wordmark,
      `#d97706` star, `#6d28d9` ring, the four mesh colours; radii 999 / 24 / 16; `--gutter: clamp(16px,4vw,40px)`
- [ ] root: `min-height:100vh`, `overflow:hidden`, `isolation:isolate`, `16px / 1.55`
- [ ] `<Mesh />`: `position:absolute; inset:0; z-index:-1; overflow:hidden`, **four** spans at
      `46vw` / max `680` / `aspect-ratio:1` / `border-radius:50%` / `blur(70px)` / `opacity:.75`
- [ ] three keyframes only: `translate(14vw,10vh) scale(1.15)`, `translate(-16vw,14vh) scale(.9)`,
      `translate(8vw,-12vh) scale(1.2)`; d reuses a's at 16 s `alternate-reverse`
- [ ] `::after` scrim: `linear-gradient(180deg, rgba(251,250,255,.1), rgba(251,250,255,.55) 60%, #fbfaff)`
- [ ] ≤ 860: blobs `80vw` + `blur(50px)`; reduced motion: `animation:none` on everything, blobs stay put

## 3. Header

- [ ] bar `padding: 16px gutter 0`; pill `max-width:1080`, radius 999,
      `rgba(255,255,255,.62)` + `backdrop-blur-[14px]`, `1px rgba(255,255,255,.8)`,
      `padding: 10px 10px 10px 18px`, `gap: 28`, shadow `0 8px 30px -12px rgba(40,30,90,.18)`
- [ ] wordmark: 26 px round SVG mark + `18px/800`, `-.02em`, 9 px gap → **115.77 × 27.89**
- [ ] four links `15px/600` muted, `8px 14px`, radius 999, hover `rgba(20,18,31,.06)` + ink, centred with
      `mx-auto` (`margin: 0 auto !important` in the source), one `aria-current="page"`
- [ ] `Log in`: `15px/700`, `10px 20px`, ink fill, hover `#2e2a45` → **85 × 43.25**
- [ ] menu button **44 × 44** ink circle, hidden until `is-enhanced`; open/close icons swapped by `is-open`
- [ ] dropdown: `absolute`, `top: calc(100% + 8px)`, `left/right: var(--gutter)` (it resolves against the
      pill's **padding box**, so it lands 1 px border + gutter in from the pill's edge), radius **24**,
      `rgba(255,255,255,.96)`, shadow `0 24px 48px -18px rgba(40,30,90,.35)` — **inside the pill**, so it
      anchors to the pill
- [ ] `useMobileMenu`: `is-enhanced` on mount, toggle `is-open` + `aria-expanded` + label, close on link click,
      Escape (**focus back to the button**), outside click, and `matchMedia('(min-width: 861px)')`
- [ ] no-JS fallback preserved: nav in flow, `flex-wrap`, radius 24 (at 390 the bar is **358 × 248.3**)

## 4. Hero section

- [ ] section `max-width:900`, `padding: clamp(40,6vw,80) gutter clamp(36,4.5vw,60)`, `text-align:center`
- [ ] rating pill **322 × 35.69**: `14px/600`, `6px 14px`, glass fill, five **14 px** amber stars
      (`aria-hidden`) + the sentence "4.8/5 from 1,200 remote teams", `gap: 8`
- [ ] `h1`: `clamp(2.5rem,1.2rem+5.2vw,5.4rem)`, **800**, `1.02`, `-.045em`, `text-wrap:balance`,
      `margin: 24px 0 20px` → **86.4 px / 3 lines / 264.38**
- [ ] sub: `clamp(1.02rem,.95rem+.35vw,1.2rem)`, 400, `1.55`, `max-width:36em`, `text-wrap:pretty`, muted
- [ ] actions: `flex-wrap`, `gap: 12`, `margin-top: 34`; both buttons `min-height:54`, `padding: 0 28px`,
      radius 999, `16px/700`
- [ ] primary: ink fill + `0 14px 30px -12px rgba(20,18,31,.55)`, `translateY(-2px)` + stronger shadow on
      hover, 16 px arrow that shifts `3px` right
- [ ] ghost: `rgba(255,255,255,.75)` + `1px rgba(20,18,31,.12)`, hover `#fff`
- [ ] note: `14px/500` muted, `margin-top: 16`

## 5. Logo cloud

- [ ] section `max-width:1080`, `padding: 0 gutter 64`, `text-align:center`
- [ ] `h2`: `13px/700 uppercase .14em` `#4a4760`, `margin: 0 0 22px`
- [ ] grid: 6 columns → **3 at ≤ 960** → **2 at ≤ 520**, `gap: 12` (10 at ≤ 520)
- [ ] tile: radius **16**, `padding: 0 12`, `min-height: 64` (**56** at ≤ 520), `rgba(255,255,255,.5)` fill,
      `1px rgba(255,255,255,.85)`, hover `.85`, `gap: 8`, **156.66 × 64**
- [ ] the six treatments as data: `19px/800` · `500 /.02em` · **Georgia 700 italic** · `15px/.16em` ·
      `700/-.04em` · `600 italic` (+26 px mark); `LUMEN LABS` → 13 px / `.1em` at ≤ 520
- [ ] six inline SVG marks, `22 px` (26 for bluefin), `aria-hidden`

## 6. Footer (the port's only addition)

- [ ] `<footer>` below the logo cloud with a `https://www.componentdock.com/` link ("Component Dock")
- [ ] no features grid, testimonial band, pricing table, third CTA or nav column

## 7. Tests (TDD, 100 % coverage)

- [ ] `App` renders header + hero + logo cloud + footer; exactly one `h1`, one `h2`
- [ ] rating: five stars `aria-hidden` + the sentence as text
- [ ] menu: opens, `aria-expanded` flips, label swaps, Escape closes **and focuses the button**, link click
      closes, outside click closes, `matchMedia` ≥ 861 closes (mock `matchMedia`)
- [ ] reduced motion / matchMedia mocks do not leak between tests
- [ ] logo cloud renders six tiles with the six discriminator classes; grid class steps at 960 / 520
- [ ] footer link points at `https://www.componentdock.com/`
- [ ] `npm run verify:app afterglow` green

## 8. Ship

- [ ] measure at 1440 × 900 against the spec's arithmetic table; document **950**
- [ ] `scrollX === 0` at 320 / 390 / 480 / 520 / 768 / 860 / 960 / 1024 / 1440
- [ ] `TEMPLATES.md`: `Hero 02` row as the **second** entry of `## Bootstrap Heroes (12)`
- [ ] `npm run readme:status`; CNAME + homepage verified; deploy audit (**HTTPS 200** + `ssl_verify_result=0`)
- [ ] no `colorlib` / `hero-02` / `Driftwork` in any app file
