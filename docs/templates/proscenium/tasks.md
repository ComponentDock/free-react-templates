# Proscenium — task outline

Recreation of the ColorLib **Hero V01** design (`hero-01`) at `apps/proscenium`. Spec is the authority:
`openspec/specs/template-proscenium/spec.md`. Design notes: `docs/templates/proscenium/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/hero-01/` (the slug-only `theme/hero-01/` and
`theme/bb/hero-01/` are both **404** — this family lives under `bootstrap/`, like cards and alerts). Check
boxes only as work ships.

> **One 100vh screen, split 1 : 1.1** — copy on the left, and on the right a _dashboard built from divs_:
> fake browser bar, 56 px icon rail, three KPI tiles, twelve bars with an SVG polyline over them, three
> transaction rows, tilted `rotateY(-6deg) rotateX(2deg)` behind `perspective(1600px)`, plus one floating
> "Invoice paid" toast. **No `<img>` anywhere.**
>
> This is the **hero family's variant 1 of 12** — the first family after cards (20) and alerts (12) — and it
> is the first snippet that is a whole viewport: header + one `<section>`, one `<h1>`, **zero `<h2>`**, no
> form, no footer.
>
> The risk is not a missing section — it is the eight things a port flattens: the mock's **rect is 3.9 %
> bigger than its box** (tilt); `.cl-hero01__cta` is **two different buttons** (40/10 vs 50/12); the section
> is **centred by the flex parent**, not by padding; the `h1` gets **fewer** lines at 960 than at 961; the
> mock **deletes** the rail, the third KPI and the third row at ≤ 560 instead of shrinking; the gradient
> headline is an **inline span that wraps**; the mobile menu exists **only if JS runs** (`is-enhanced`); and
> the toast is **clipped** for 139 px of viewport (561–699).
>
> Seven numbers decide fidelity: section **1240 × 720.78 at (100, 129.61)**; columns **518.09 / 569.91**;
> `h1` **65.6 px / 3 lines**; mock **offset 570 × 522**; panel **512**; chart **472 × 150**; toast
> **234 × 62 at (702.09, 716.63)**.
>
> The reference's defects are **not** to be reproduced: ten dead `#` anchors (wordmark included),
> `aria-current="page"` parked on _Product_, no footer, the toast clip, the `:where(html) … revert` guard
> block, the dead `.cl-icon` rule, the five `!important`s, and a screenshot framed in macOS chrome.

## 1. Scaffold

- [x] copy the simplest existing app to `apps/proscenium`; package `@free-react-templates/proscenium`
- [x] `public/CNAME` = `proscenium.free.componentdock.com`; `"homepage"` = `https://proscenium.free.componentdock.com`
- [x] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [x] root `npm install` so `package-lock.json` registers the workspace (`grep -c free-react-templates/proscenium package-lock.json` ≥ 1)
- [x] one `<link>`: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`
      (**five weights, 300 and 900 do not exist in the source** — 900 measured identically to 800)
- [x] `@theme` tokens: `ground #f7f7fb`, `accent #5b3df5`, `accentHover #4a2ee0`, `accent2 #9333ea`,
      `ink #121229`, `muted #535470`, `line #e6e5f0`, `surface #fff`, `mockEdge #dcd9ec`, `mockChrome #fbfbfe`,
      deltas up `#dcfce7`/`#166534`, down `#e0f2fe`/`#075985`, bars `#d9d3fb`, rowRule `#f0eff6`
- [x] radii: `--radius-mock: 18px`, `--radius-cta: 12px` (plus 999/16/14/10/8/7/6/5/2 where the spec lists them)
- [x] `@custom-variant heroLg (@media (max-width: 960px))`, `heroMd` (860), `heroSm` (560) — Tailwind's
      `max-[960px]` is **exclusive** (`<960`), the source's rules are **inclusive** (`≤960`); do not mix them
- [x] `@keyframes grow { from { transform: scaleY(.1) } }` and `@keyframes bob { 50% { transform: translateY(-8px) } }`
      in `index.css`, each guarded by the repo's reduced-motion handling

## 2. Static composition (tests first)

- [x] root `min-h-[100svh] overflow-hidden bg-ground text-ink text-[16px] leading-[1.55]` with the two radial
      blooms as `bg-[radial-gradient(...),radial-gradient(...),#f7f7fb]`, and a `::before` dot grid
      (`bg-[radial-gradient(rgba(18,18,41,.09)_1px,transparent_1px)] bg-[size:22px_22px]` +
      `mask-image: linear-gradient(180deg,#000,transparent 75%)`, `pointer-events-none`)
- [x] `<header>` bar: `mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)] py-5 flex items-center gap-8`
- [x] wordmark: 28 px inline SVG tile (`rect rx=8` in accent) + `text-[19px] font-extrabold tracking-[-.02em] gap-[10px]`
- [x] nav links: `text-[15px] font-medium text-muted px-3 py-2 rounded-lg hover:text-ink hover:bg-[rgba(91,61,245,.07)]`;
      current = `font-semibold text-ink` + `aria-current="page"`
- [x] bar CTA: `min-h-[40px] px-4 rounded-[10px] text-[14.5px] font-bold` — **do not** reuse the hero CTA's classes
- [x] `<main>`: `flex flex-1 items-center`; `<section>` grid `max-w-[1240px] mx-auto
    px-[clamp(16px,4vw,40px)] pt-[clamp(32px,6vw,88px)] pb-[clamp(56px,8vw,112px)]
    grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-[clamp(32px,5vw,72px)] items-center`
- [x] announcement pill: `inline-flex items-center gap-[10px] py-[5px] pr-3 pl-[5px] rounded-full
    border border-line bg-white/80 text-[14px] font-medium`; tag `px-[10px] py-[2px] rounded-full
    bg-accent text-white text-[12.5px] font-bold`; 14 px chevron
- [x] `h1`: `text-[clamp(2.35rem,1.4rem+3.6vw,4.1rem)] font-extrabold leading-[1.04]
    tracking-[-.035em] mt-[22px] mb-[18px]`, accent part an **inline `<span>`** with
      `bg-[linear-gradient(92deg,#5b3df5,#9333ea)] bg-clip-text text-transparent`
- [x] sub: `text-[clamp(1rem,.95rem+.3vw,1.15rem)] text-muted max-w-[34em]`
- [x] actions: `mt-8 flex flex-wrap gap-3`; primary `h-[50px] px-6 rounded-xl bg-accent text-white font-bold
    shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_10px_24px_-10px_rgba(91,61,245,.7)]
    hover:bg-accentHover hover:-translate-y-px`; ghost `h-[50px] pl-3 pr-5 rounded-xl border border-line
    bg-surface font-semibold gap-[10px] hover:border-[#c9c3f5]` with a 28 px play circle
      `bg-[rgba(91,61,245,.1)] text-accent`
- [x] trust list: `mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium text-muted`, each item
      `inline-flex items-center gap-1.5` + a 16 px `#16a34a` check

## 3. The mock (the whole right column)

- [x] visual wrapper `relative`; mock `overflow-hidden rounded-[18px] border border-mockEdge bg-surface
    shadow-[0_2px_4px_rgba(18,18,41,.04),0_40px_80px_-30px_rgba(52,34,150,.35)] text-[13px]
    [transform:perspective(1600px)_rotateY(-6deg)_rotateX(2deg)] [transform-origin:left_center]`
      and `[transform:none]` under `heroLg`
- [x] chrome bar: `flex items-center gap-4 px-4 py-3 bg-mockChrome border-b border-line`; three dots
      `w-2.5 h-2.5 rounded-full` in `#fda4a4` / `#fcd58a` / `#9fe0b1`; URL field `flex-1 max-w-[260px]
    px-3 py-[3px] rounded-md bg-[#f0eff7] text-[#5e5f78] text-[12px]` (**11 px** at ≤ 560)
- [x] body grid `grid-cols-[56px_1fr]` (**`grid-cols-1` at ≤ 560**); rail `bg-mockChrome border-r border-line
    py-[18px] flex flex-col items-center gap-[14px]` (**`hidden` at ≤ 560**)
- [x] panel `px-5 pt-[18px] pb-5` (**`p-3.5` at ≤ 560**); head row + range chip
      `px-[10px] py-1 rounded-lg border border-line text-[#55566e] text-[12px]`
- [x] KPI grid `grid grid-cols-3 gap-2.5 mt-3.5` (**2 cols at ≤ 560**); tile `grid gap-0.5 p-3 rounded-xl
    border border-line`; label `text-[11.5px] font-semibold uppercase tracking-[.06em] text-[#5e5f78]`;
      value `text-[19px] font-extrabold tracking-[-.02em]` (**17 px at ≤ 560**); delta `justify-self-start
    rounded-md px-[7px] py-px text-[11.5px] font-bold` (green/blue pairs); **tile 3 `hidden` at ≤ 560**
- [x] chart `relative mt-3.5 h-[150px] p-3 rounded-xl bg-[linear-gradient(180deg,#faf9ff,#f3f1ff)]`
      (**`h-[120px]` at ≤ 560**); bars `flex items-end gap-[6%] h-full px-[2%]`, each `flex-1
    rounded-t-[5px] rounded-b-[2px] bg-[#d9d3fb] origin-bottom animate-[grow_.9s_cubic-bezier(.2,.8,.2,1)_both]`,
      last one `bg-accent`, the last six `[animation-delay:.15s]`; heights from a `number[]`
- [x] polyline SVG `absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] text-[#9333ea]
    [vector-effect:non-scaling-stroke]` with `preserveAspectRatio="none"`, `stroke-width 2.5`,
      d = `M0 78 C30 70 50 74 75 64 S125 56 150 48 S210 40 235 28 S280 14 300 8`
- [x] rows `grid gap-0.5 mt-3`; each `flex items-center gap-2.5 px-1 py-2 border-b border-[#f0eff6]
    last:border-b-0` (**row 3 `hidden` at ≤ 560**); chip `w-[34px] text-center rounded-md text-[11px]
    font-bold` with `bg-[color-mix(in_srgb,var(--c)_12%,#fff)] text-[var(--c)]`; name `flex-1 font-semibold`;
      amount `font-bold tabular-nums` (use **U+2212**, not a hyphen)
- [x] toast `absolute -left-7 -bottom-11 flex items-center gap-3 pl-3 pr-4 py-3 rounded-[14px] border
    border-line bg-surface shadow-[0_20px_40px_-18px_rgba(18,18,41,.35)] animate-[bob_5s_ease-in-out_infinite]
    text-[14px]` with a 34 px `#16a34a` tile; **fix the clip**: `left: max(-28px, calc(28px - var(--gutter)))`
      and, at ≤ 560, `left: 12px; bottom: -40px` + `mb-6` on the visual wrapper

## 4. Behaviour

- [x] `useMobileMenu()`: `isEnhanced` set on mount (mirrors the source adding `.is-enhanced`), `open`,
      `setOpen(open)` writing `aria-expanded` and the `Close menu` / `Open menu` label, click-to-toggle,
      link click closes, **Escape closes and returns focus to the button**, outside click closes,
      `matchMedia('(min-width: 861px)')` change closes
- [x] no-JS fallback: the nav is **visible and wrapping** by default at ≤ 860 — hide it only behind the
      `isEnhanced` class, never in plain CSS
- [x] menu button `w-11 h-11 grid place-items-center rounded-xl border border-line bg-surface` and only rendered
      as a control at ≤ 860 (visually hidden/flex-wrapped above it)
- [x] mobile panel `absolute left-[gutter] right-[gutter] top-[calc(100%-6px)] flex-col gap-2 p-2.5
    rounded-2xl border border-line bg-surface shadow-[0_24px_48px_-20px_rgba(18,18,41,.3)]`

## 5. Tests (TDD — write these first)

- [x] copy renders: pill (`New` + label + chevron), `h1` split into text + gradient span, sub, two actions,
      three trust items
- [x] the accent is an **inline span inside the `h1`** (not a block, not a second heading)
- [x] mock is a single `role="img"` whose `aria-label` names MRR/net burn/runway and 12.4 %; **all** SVGs sit in
      an `aria-hidden` subtree
- [x] the twelve bar heights come from data and paint as `height: 34%…92%`; the last is accent-coloured
- [x] three transaction rows with U+2212 on the negative amount; chips carry their `--c`
- [x] menu: toggle → `aria-expanded` + label; Escape → closed + `document.activeElement` is the button;
      outside click closes; link click closes; ≥ 861 px mql closes (mock `matchMedia`)
- [x] the two CTAs are **separate components/classes** with different heights (assert `h-10` vs `h-[50px]`
      style tokens, and assert there is no shared size class)
- [x] reduced motion: both animations resolve to `none` (assert the media-query class/CSS, jsdom cannot compute it)
- [x] **fold numbers are browser-verified, not unit-tested** (jsdom has no layout): keep them in the spec's
      checklist and re-measure with Playwright before shipping

## 6. Ship

- [x] `npm run spec:validate` (or `openspec validate template-proscenium --type spec`) still valid
- [x] `npm run verify:app proscenium` (typecheck + lint + 100 % coverage + build)
- [x] `TEMPLATES.md`: insert `## Bootstrap Heroes (12)` **between `## Bootstrap Footers (20)` and
      `## Bootstrap Modals (20)`** with the `Hero 01` row (preview-in-the-middle grammar — re-read the
      neighbouring lines first, two streams write this file)
- [x] footer with `https://www.componentdock.com/` ("Component Dock") **below** the hero band; nothing else added
- [x] PR: source slug, preview URL, tokens, deltas, defects fixed
- [x] after deploy: `curl -I https://proscenium.free.componentdock.com` → 200, `ssl_verify_result=0`

## Port verification (measured in Chromium at 1440 × 900, `apps/proscenium`)

Every box above was ticked against a real render, not against the spec text:

| what                | spec                                                             | port                                          |
| ------------------- | ---------------------------------------------------------------- | --------------------------------------------- |
| bar                 | 1240 × 80 at (100, 0)                                            | **same**                                      |
| section             | 1240 × 720.78 at (100, 129.61)                                   | **same**                                      |
| columns             | 518.09 / 569.91                                                  | **same**                                      |
| copy column         | at (140, 228.58)                                                 | **same**                                      |
| pill                | 259 × 35.38                                                      | 260 × 35.38                                   |
| `h1`                | 204.61 at y 285.95 (65.6 px, 3 lines)                            | **same**                                      |
| sub                 | 85.55 at y 508.56                                                | **same**                                      |
| actions / trust     | 50 at 626.11 / 21.69 at 704.11                                   | **same**                                      |
| visual column       | 569.91 × 522.39 at (730.09, 216)                                 | **same**                                      |
| mock                | offset 570 × 522 (rect 592.15 × 542.28)                          | **same**                                      |
| rail / panel        | 56 / 512                                                         | **same**                                      |
| KPI tiles           | 472 × 97 in three 151s                                           | **same**                                      |
| chart               | 472 × 150                                                        | **same**                                      |
| transaction rows    | 38 / 38 / 37                                                     | **38 / 38 / 37**                              |
| toast               | 234 × 62 at (702.09, 716.63)                                     | 228 × 61.77 at (702.09, 719.67)               |
| headline folds      | 3 / 3 / 2 / 2 / 3 at 1440 / 1024 / 960 / 480 / 320               | **same**                                      |
| mock tilt           | only ≥ 961 px                                                    | **same** (`transform: none` at 960 and below) |
| 560 deletions       | rail + third KPI + third row gone, chart 120                     | **same**                                      |
| horizontal overflow | 0 at 320–1440                                                    | **0 at every width**                          |
| menu at 390         | 44 × 44 button, panel 358 wide at (16, 78), Escape returns focus | **same**                                      |

Two measured deltas, both expected:

1. **Document height** is the spec's `900 / 1166 / 1118 / 1104 / 1145 / 1221` **+ 53 px** — the mandatory
   Component Dock footer sits under the band. The hero band itself is still exactly `100svh` (900 at
   1440 × 900); the section's placement is unchanged.
2. **The toast clamp** is `left: max(-28px, calc(-1 * var(--gutter)))`, not the spec's
   `calc(28px - var(--gutter))`. The spec's form yields **-12 px at 1440** (the gutter is 40) and would
   never reach the measured **-28 px**; the port's form is -28 px wherever the gutter allows it and lands the
   badge on x = 0 in the 561–699 px band, where the reference clips 5.56 px off its left edge.

The toast's 6 px width difference is text metrics (`Plus Jakarta Sans` from Google Fonts vs the source's
self-hosted variable cut).
