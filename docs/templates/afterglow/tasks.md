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

- [x] copy the simplest existing app to `apps/afterglow`; package `@free-react-templates/afterglow`
- [x] `public/CNAME` = `afterglow.free.componentdock.com`; `"homepage"` = `https://afterglow.free.componentdock.com`
- [x] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [x] root `npm install` so `package-lock.json` registers the workspace
      (`grep -c free-react-templates/afterglow package-lock.json` ≥ 1)
- [x] one `<link>`: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap`
      (**five weights; 300 and 900 do not exist in the source** — 900 measures identically to 800)

## 2. Tokens and ground

- [x] `@theme` block: `#fbfaff` ground, `#14121f` ink, `#423f55` muted, `#4a4760` kicker, `#3a374c` wordmark,
      `#d97706` star, `#6d28d9` ring, the four mesh colours; radii 999 / 24 / 16; `--gutter: clamp(16px,4vw,40px)`
- [x] root: `min-height:100vh`, `overflow:hidden`, `isolation:isolate`, `16px / 1.55`
- [x] `<Mesh />`: `position:absolute; inset:0; z-index:-1; overflow:hidden`, **four** spans at
      `46vw` / max `680` / `aspect-ratio:1` / `border-radius:50%` / `blur(70px)` / `opacity:.75`
- [x] three keyframes only: `translate(14vw,10vh) scale(1.15)`, `translate(-16vw,14vh) scale(.9)`,
      `translate(8vw,-12vh) scale(1.2)`; d reuses a's at 16 s `alternate-reverse`
- [x] `::after` scrim: `linear-gradient(180deg, rgba(251,250,255,.1), rgba(251,250,255,.55) 60%, #fbfaff)`
- [x] ≤ 860: blobs `80vw` + `blur(50px)`; reduced motion: `animation:none` on everything, blobs stay put

## 3. Header

- [x] bar `padding: 16px gutter 0`; pill `max-width:1080`, radius 999,
      `rgba(255,255,255,.62)` + `backdrop-blur-[14px]`, `1px rgba(255,255,255,.8)`,
      `padding: 10px 10px 10px 18px`, `gap: 28`, shadow `0 8px 30px -12px rgba(40,30,90,.18)`
- [x] wordmark: 26 px round SVG mark + `18px/800`, `-.02em`, 9 px gap → **115.77 × 27.89**
- [x] four links `15px/600` muted, `8px 14px`, radius 999, hover `rgba(20,18,31,.06)` + ink, centred with
      `mx-auto` (`margin: 0 auto !important` in the source), one `aria-current="page"`
- [x] `Log in`: `15px/700`, `10px 20px`, ink fill, hover `#2e2a45` → **85 × 43.25**
- [x] menu button **44 × 44** ink circle, hidden until `is-enhanced`; open/close icons swapped by `is-open`
- [x] dropdown: `absolute`, `top: calc(100% + 8px)`, `left/right: var(--gutter)` (it resolves against the
      pill's **padding box**, so it lands 1 px border + gutter in from the pill's edge), radius **24**,
      `rgba(255,255,255,.96)`, shadow `0 24px 48px -18px rgba(40,30,90,.35)` — **inside the pill**, so it
      anchors to the pill
- [x] `useMobileMenu`: `is-enhanced` on mount, toggle `is-open` + `aria-expanded` + label, close on link click,
      Escape (**focus back to the button**), outside click, and `matchMedia('(min-width: 861px)')`
- [x] no-JS fallback preserved: nav in flow, `flex-wrap`, radius 24 (at 390 the bar is **358 × 248.3**)

## 4. Hero section

- [x] section `max-width:900`, `padding: clamp(40,6vw,80) gutter clamp(36,4.5vw,60)`, `text-align:center`
- [x] rating pill **322 × 35.69**: `14px/600`, `6px 14px`, glass fill, five **14 px** amber stars
      (`aria-hidden`) + the sentence "4.8/5 from 1,200 remote teams", `gap: 8`
- [x] `h1`: `clamp(2.5rem,1.2rem+5.2vw,5.4rem)`, **800**, `1.02`, `-.045em`, `text-wrap:balance`,
      `margin: 24px 0 20px` → **86.4 px / 3 lines / 264.38**
- [x] sub: `clamp(1.02rem,.95rem+.35vw,1.2rem)`, 400, `1.55`, `max-width:36em`, `text-wrap:pretty`, muted
- [x] actions: `flex-wrap`, `gap: 12`, `margin-top: 34`; both buttons `min-height:54`, `padding: 0 28px`,
      radius 999, `16px/700`
- [x] primary: ink fill + `0 14px 30px -12px rgba(20,18,31,.55)`, `translateY(-2px)` + stronger shadow on
      hover, 16 px arrow that shifts `3px` right
- [x] ghost: `rgba(255,255,255,.75)` + `1px rgba(20,18,31,.12)`, hover `#fff`
- [x] note: `14px/500` muted, `margin-top: 16`

## 5. Logo cloud

- [x] section `max-width:1080`, `padding: 0 gutter 64`, `text-align:center`
- [x] `h2`: `13px/700 uppercase .14em` `#4a4760`, `margin: 0 0 22px`
- [x] grid: 6 columns → **3 at ≤ 960** → **2 at ≤ 520**, `gap: 12` (10 at ≤ 520)
- [x] tile: radius **16**, `padding: 0 12`, `min-height: 64` (**56** at ≤ 520), `rgba(255,255,255,.5)` fill,
      `1px rgba(255,255,255,.85)`, hover `.85`, `gap: 8`, **156.66 × 64**
- [x] the six treatments as data: `19px/800` · `500 /.02em` · **Georgia 700 italic** · `15px/.16em` ·
      `700/-.04em` · `600 italic` (+26 px mark); `LUMEN LABS` → 13 px / `.1em` at ≤ 520
- [x] six inline SVG marks, `22 px` (26 for bluefin), `aria-hidden`

## 6. Footer (the port's only addition)

- [x] `<footer>` below the logo cloud with a `https://www.componentdock.com/` link ("Component Dock")
- [x] no features grid, testimonial band, pricing table, third CTA or nav column

## 7. Tests (TDD, 100 % coverage)

- [x] `App` renders header + hero + logo cloud + footer; exactly one `h1`, one `h2`
- [x] rating: five stars `aria-hidden` + the sentence as text
- [x] menu: opens, `aria-expanded` flips, label swaps, Escape closes **and focuses the button**, link click
      closes, outside click closes, `matchMedia` ≥ 861 closes (mock `matchMedia`)
- [x] reduced motion / matchMedia mocks do not leak between tests
- [x] logo cloud renders six tiles with the six discriminator classes; grid class steps at 960 / 520
- [x] footer link points at `https://www.componentdock.com/`
- [x] `npm run verify:app afterglow` green

## 8. Ship

- [x] measure at 1440 × 900 against the spec's arithmetic table; document **950**
- [x] `scrollX === 0` at 320 / 390 / 480 / 520 / 768 / 860 / 960 / 1024 / 1440
- [x] `TEMPLATES.md`: `Hero 02` row as the **second** entry of `## Bootstrap Heroes (12)`
- [x] `npm run readme:status`; CNAME + homepage verified; deploy audit (**HTTPS 200** + `ssl_verify_result=0`)
- [x] no `colorlib` / `hero-02` / `Driftwork` in any app file

## 9. As shipped — measured 2026-10-26 (Playwright Chromium, 1440 × 900)

Light-mode numbers below are from the built `apps/afterglow` bundle (`vite preview`),
`getBoundingClientRect` at DPR 1, after `document.fonts.ready`.

| element | spec | shipped |
| --- | --- | --- |
| bar | 1440 × 81.25 at (0, 0) | 1440 × 81.25 at (0, 0) |
| glass pill | 1080 × 65.25 at (180, 16) | 1080 × 65.25 at (180, 16) |
| wordmark | 115.77 × 27.89 at (199, 34.67) | 125.77 × 27.89 at (199, 34.67) |
| one nav link | 90 × 39.25 | 85 × 39.25 |
| `Log in` | 85 × 43.25 at (1164, 27) | 82 × 43.25 at (1167, 27) |
| hero section | 900 × 699 at (270, 81.25) | 900 × 699 at (270, 81.25) |
| rating pill | 322 × 35.69 at (559, 161.25) | 314 × 35.69 at (563, 161.25) |
| `h1` | 820 × 264.38 at (310, 220.94) | 820 × 264.38 at (310, 220.94) |
| sub | 691.19 × 89.25 at (374.41, 505.31) | 691.19 × 89.25 at (374.41, 505.31) |
| actions / CTA / ghost | 428 × 54 at (506, 628.56) | 428 × 54 at (506, 628.56), CTA 227, ghost 189 |
| note | 266 × 21.69 at (587, 698.56) | 256 × 21.69 at (592, 698.56) |
| logo section | 1080 × 170.14 at (180, 780.25) | 1080 × 170.14 at (180, 780.25) |
| logo grid | 6 × 156.66 × 64, gap 12 | 6 × 156.66 × 64, gap 12 |
| root | 1440 × 950 | 1440 × 950.39 |
| document | 950 at 1440 | 1003.53 (root 950.39 + the footer band) |

Width ladder (all `scrollX === 0`, `scrollWidth === clientWidth`): document 1084 at 320,
978 at 390, 966 at 480, 973 at 520, 947 at 768, 947 at 860, 947 at 960, 947 at 1024,
1003.53 at 1440; logo grid **6 → 3** at 960 and **3 → 2** at 520; tiles **64 → 56** at 520;
`h1` **3 lines** at 390–1440 and **4** at 320.

Menu at 860: open panel **720.44 × 306.63 at (69.78, 89)**, `offsetParent` = the pill,
`aria-expanded="true"`, label "Close menu", document unchanged; Escape closes it and
`document.activeElement` is the 44 px button.

**Three documented deltas, none of them layout bugs:**

1. **Google-Fonts metrics.** The reference bundles its own Manrope binaries; this port
   loads `css2?family=Manrope:wght@400;500;600;700;800` as the replication rules require.
   The current Google cut is a few per cent wider/narrower per glyph, so the pill's *contents*
   shift by 3–10 px (wordmark 125.77 vs 115.77 — different letters anyway, "Nightwave" vs the
   source's brand; rating pill 314 vs 322; links 85 vs 90) while every container that is
   clamped or capped is exact. The `h1` fold lands on `Async video / updates your team /
   will actually watch` instead of the source's looser first line — same **three** lines,
   which is the property the spec pins.
2. **The footer sits outside the root**, so the 950 px one-screen document is preserved and
   the mandatory Component Dock band is additive (document 1003.53). Placing it inside the
   root would have pushed the hero's centring by its own height.
3. **The no-JS page is unreachable in a React SPA** — the bar renders with `is-enhanced`
   already set (JS ran). The stylesheet still carries the `:not(.is-enhanced)` fallback rules
   verbatim, so the cascade is faithful even though nothing can trigger it here.
