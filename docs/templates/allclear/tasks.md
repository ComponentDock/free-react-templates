# Allclear — task outline

Recreation of the ColorLib **Alert V02** design (`alert-02`) at `apps/allclear`. Spec is the authority:
`openspec/specs/template-allclear/spec.md`. Design notes: `docs/templates/allclear/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-02/` (the slug-only
`theme/alert-02/` and `theme/bb/alert-02/` are both 404 — this family lives under `bootstrap/`).
Check boxes only as work ships.

> This is a **single-screen notice board, not a site**: a glass panel on a lavender-to-blue gradient,
> a two-line head with a dark count pill, four dismissible white rows, a dashed empty state and a
> restore pill. The reference is **6,230 B of HTML, one 10,141 B stylesheet and 2,623 B of plain JS**
> with **0 links, 0 inputs, 0 images**, 1 `h1` and **4 focusable** dismiss buttons.
>
> The risk is not a missing band — it is flattening the four things a port gets wrong:
> the panel is **`content-box`**, so `max-width: 620` means **676 px outer**; the rows are separated
> only by a **12 px `padding-bottom`** on the inner (there is **no** list gap, and that 12 px is what
> survives the collapse); the dismissal is a **`grid-template-rows: 1fr → 0fr` collapse**, not a height
> animation; and the **count + live region + focus update on click**, 380 ms before the row is gone.
>
> Five numbers decide fidelity: panel **676 × 560** at (382, 88); head **59** + **18** margin → list at
> y **193**; rows **110.5 / 110.5 / 89.5 / 110.5**; pill **88 × 27.5** ending at **1030**; close button
> **36 × 36** at (984, 203).
>
> The count pill, the empty box (**620 × 74**) and the restore pill (**207 × 39**) are all measured —
> a port that eyeballs any of them lands 4–10 px off.

## 0 — Scaffold

- [ ] `cp -r apps/showbill apps/allclear` (simplest static card app: no router, no forms); rename the
      package to `@free-react-templates/allclear` and drop showbill's `lib/` + `data/` files
- [ ] `public/CNAME` = `allclear.free.componentdock.com`; `"homepage"` =
      `https://allclear.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/allclear" package-lock.json` → 1)
- [ ] `index.html`: title + **one** `Plus Jakarta Sans` `<link>`
      (`family=Plus+Jakarta+Sans:wght@400..800`, verified 200 — one `<link>`, it is a variable face)

## 1 — Tokens

- [ ] `@theme`: `--color-ink: #1c1a33`, `--color-muted: #5b5876`, `--color-focus: #5b3fe0`,
      `--color-ground: #eceafd`, `--color-bloom-a: #d9d3ff`, `--color-bloom-b: #cfe9ff`
- [ ] four tone pairs (`tone` = glyph, `soft` = tile ground):
      violet `#6d4aff / #efebff`, green `#0f8a5f / #e2f6ec`, amber `#b45309 / #fdf0dc`,
      rose `#d0264f / #fde6ec`
- [ ] **do not** build `alert-01`-style tint quads: the row ground is opaque `#fff` on all four, the
      tone lives only in the icon tile
- [ ] `--speed: .38s` in `@theme`; the collapse uses
      `cubic-bezier(.4, 0, .2, 1)` and opacity at `calc(var(--speed) * .6)`

## 2 — Shell and panel

- [ ] `main`: `flex justify-center items-start box-border min-h-screen`,
      `padding: clamp(24px,7vw,88px) 16px`, and the two-bloom gradient over `#eceafd`
- [ ] panel: `w-full max-w-[620px] box-content p-7 rounded-3xl bg-white/[.72]`
      + `shadow-[0_30px_60px_-32px_rgba(60,40,160,.35),inset_0_0_0_1px_rgba(255,255,255,.8)]`
- [ ] assert the outer box is **676** at 1440 — `box-content` is the whole trick
- [ ] panel `color: #1c1a33; line-height: 1.5`; no footer band beyond the attribution line

## 3 — Head

- [ ] `header`: `flex flex-wrap items-end justify-between gap-x-4 gap-y-2 mb-[18px]`
- [ ] `h1` "Project Atlas": `text-2xl font-extrabold tracking-[-.02em]`, `tabindex="-1"`,
      `:focus-visible` ring 2 px `#5b3fe0` offset 4 + radius 4
- [ ] sub "Mobile app redesign · Sprint 14 of 18": `text-sm text-[#5b5876] mt-0.5`
- [ ] count pill: `bg-[#1c1a33] text-white text-[13px] font-bold px-3 py-1 rounded-full`,
      numeral in its own `<span>`; **singularise at 1** ("1 notice")
- [ ] verify: pill **88 × 27.5** at (942, 147.5), bottom flush with the head's bottom (175)

## 4 — The four rows

- [ ] typed `notices` array: `{ id, tone, title, text, icon }` × 4, tones in the order
      violet → green → amber → rose
- [ ] `<ul aria-label="Project notices">` of `<li>`; each `<li>` is the **animated wrapper**
      (`grid` + `grid-template-rows`), each inner is `min-h-0 overflow-hidden pb-3`
- [ ] row: `flex items-start gap-3.5 pt-4 pr-14 pb-4 pl-4 rounded-2xl bg-white` + the two-layer shadow
- [ ] tile: `size-10 rounded-xl grid place-items-center` with `bg-[var(--soft)] text-[var(--tone)]`
      and a 20 px lucide glyph (`Sun`, `Check`, `Clock`, `AlertCircle`), `aria-hidden`
- [ ] title `<p>` 15/700/22.5 ink with `mb-0.5`; body 14/400/21 muted
- [ ] close: `absolute top-2.5 right-2.5 size-9 rounded-[10px]` transparent,
      `aria-label="Dismiss: <title>"`, hover `#f0eef9`, active `#e4e0f6`,
      focus ring 2 px `#5b3fe0` offset 2
- [ ] roles: `status` on the first three rows, `alert` on the rose row
- [ ] verify: rows **110.5 / 110.5 / 89.5 / 110.5**, tile at (426, 209), close at (984, 203)

## 5 — Dismiss behaviour

- [ ] `dismissed` state per row (`in | leaving | gone`); `visible()` excludes `leaving`
- [ ] on click: set `leaving`, then unmount on `transitionend` (`grid-template-rows`) with a **600 ms**
      fallback; `prefers-reduced-motion` → unmount on the same frame
- [ ] count, empty box, restore pill and live text update **before** the animation ends
- [ ] live text: `Dismissed "<title>". <n> notice(s) left.` — pluralise at 1
- [ ] focus handoff: next visible row's × (else the row above, else the restore pill, else the `h1`)
- [ ] keep the **12 px** sliver: the inner's `pb-3` is outside the animated track
- [ ] do **not** add a `min-height: 0`-less grid, a height animation, or a timeout-driven unmount

## 6 — Empty state and restore

- [ ] empty box: `flex items-center gap-3 p-[22px] border border-dashed border-[#c9c3ec] rounded-2xl`
      with a 28 px inbox glyph and "You are all caught up." at 16/600/24 — **620 × 74**
- [ ] restore pill: `px-4 py-[9px] rounded-full bg-[#1c1a33] text-white text-sm font-bold`,
      hover `#38345e`, focus ring offset 3 — **207 × 39**, hidden until the first dismissal
- [ ] restore: all rows back, count 4, live "All notices restored.", focus row 1's ×,
      panel **579.5**
- [ ] panel arithmetic: `0` footer at load, **39** while restore shows, **19.5** after restore

## 7 — Responsive

- [ ] content cap at **709** (`708 → 676/620`, `707 → 675/619`); `vw − 32` outer below it
- [ ] `@media (max-width: 480px)`: panel `p-[20px_16px]` radius **20**, row `p-[14px_48px_14px_14px]`
      gap **12**, tile **34 × 34** radius **10** — content **widens** 393 → 416
- [ ] head wrap at **398** (content 335 = 231 + 16 + 88); titles wrap at 425/422;
      body 1 at 397, bodies 2/4 at 360
- [ ] at 320: panel **288 × 904**, rows **213 / 192 / 171 / 169.5**, document **952**,
      `scrollX 0` after `scrollTo(200,0)` — vertical only
- [ ] no horizontal overflow at any width (320 … 1440)

## 8 — Repo wiring and gate

- [ ] footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] `TEMPLATES.md`: add the `Alert 02` row to `## Bootstrap Alerts (12)` (second row, after
      Alert 01) with the file's grammar `[colorlib] · [allclear] · ![preview]`
- [ ] `npm run verify:app allclear` green (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `PATH=/root/free-react-templates/node_modules/.bin:$PATH openspec validate template-allclear --type spec`
- [ ] no occurrence of the source slug or the source site's name in `apps/allclear`
- [ ] deploy + `curl -I https://allclear.free.componentdock.com` → 200, `ssl_verify_result=0`
