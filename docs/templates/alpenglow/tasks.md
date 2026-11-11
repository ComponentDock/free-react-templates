# Alpenglow — implementation tasks

`apps/alpenglow` recreates the ColorLib **Hero V11** outdoor-film hero (a three-range sunset landscape drawn in pure
CSS, a left-aligned two-line display headline, a pulsing play disc that opens a modal film player, and a
three-chapter strip) under a new name. Read `openspec/specs/template-alpenglow/spec.md` first — it carries every
measured number, the token table and the thirteen deltas. `docs/templates/alpenglow/design-notes.md` carries the DOM
skeleton, the CSS token block, the screenshot read, the section-by-section fidelity notes, the adaptation table and
the sibling comparison.

Reference: https://preview.colorlib.com/theme/bootstrap/hero-11/ (the slug-only path 404s — the `bootstrap/`
prefix is the only live one). Source: https://colorlib.com/wp/template/hero-11/.

## 0. Scaffold

- [ ] copy the simplest existing app to `apps/alpenglow`; rename the package to `@free-react-templates/alpenglow`
- [ ] `public/CNAME` = `alpenglow.free.componentdock.com`; `"homepage"` = `https://alpenglow.free.componentdock.com`
- [ ] register the workspace in `package-lock.json` (`npm install` at the root; never hand-edit the lockfile)
- [ ] load **Figtree** once in `index.html`:
      `https://fonts.googleapis.com/css2?family=Figtree:wght@400..800&display=swap` — one variable face, the
      **only** webfont, exactly the reference's two binaries
- [ ] no ColorLib string, comment or asset anywhere in the app: the product is **Alpenglow**, and none of
      "Northbound", "Made for the long way round", "Svolvær", "Kabelvåg", "Reinebringen", "the last ferry" or the
      source sub-paragraph may appear
- [ ] register `injectUiSource()` in `vite.config.ts` (copy an existing app's config verbatim)

## 1. Tokens

- [ ] `@theme`: `--color-night #0f1426`, `--color-ink #fff`, `--color-soft #dfe3f1`, `--color-amber #ffb86b`,
      `--color-live #ff5d5d`, `--color-hairline rgb(255 255 255 / .22)`, `--color-sky-1 #1a2150`,
      `--color-sky-2 #43377a`, `--color-sky-3 #b95d8a`, `--color-sky-4 #f59a6c`, `--color-sky-5 #ffd48e`,
      `--color-range-far #6d3f78`, `--color-range-mid #392d5c`, `--color-range-near #161b33`,
      `--color-dialog #0b0f1f`, `--gutter clamp(16px,4vw,48px)`
- [ ] radii: pill and screen chip **`rounded-full`** (999), every disc `rounded-full` (50 %), dialog + dropdown
      **`rounded-[20px]`**, control bar `rounded-xl` (12), inline `code` `rounded` (4), track `rounded-[2px]`
- [ ] type scale 99.2 / 20 / 19.2 / 18 / 17 / 16 / 15 / 14 / 13 with line heights 94.24 / 31 / 29.76 / 22.5 / 23.8 /
      24.8 / 23.25 / 21.69 / 20.15 (body is 16 px / 1.55 = 24.8)
- [ ] the two shadows: dialog `0 40px 100px -20px rgb(0 0 0 / .7)`, dropdown `0 24px 48px -16px rgb(0 0 0 / .6)`

## 2. Shell + the drawn scene

- [ ] root: `relative isolate flex min-h-screen flex-col overflow-hidden bg-night text-ink text-[16px] leading-[1.55]`
- [ ] scene: `absolute inset-0 -z-[1] overflow-hidden` + `aria-hidden`, seven `absolute` spans inside
- [ ] sky: `linear-gradient(180deg, var(--color-sky-1) 0%, var(--color-sky-2) 30%, var(--color-sky-3) 55%,
      var(--color-sky-4) 75%, var(--color-sky-5) 100%)`, `background-size: 100% 160%`, `cl-hero11-sky` **16 s
      ease-in-out infinite alternate** (to `background-position: 0 100%`)
- [ ] stars: `inset: 0 0 45% 0`, eight `radial-gradient(1–1.5px 1–1.5px at …)` dots in `#fff`, `opacity: .7`,
      `cl-hero11-twinkle` **4 s** (to `.3`)
- [ ] sun: `left: 62%`, `bottom: 22%`, `width: 34vmin`, `aspect-ratio: 1`, `rounded-full`,
      `radial-gradient(circle, #fff0c2 0 30%, #ffd08a 31%, rgb(255 190 120 / .5) 40%, rgb(255 160 120 / 0) 70%)`,
      `cl-hero11-sun` **16 s** (to `translateY(12%)`, `opacity: .8`)
- [ ] ranges: three `absolute inset-x-0 bottom-0` bands, heights **46 % / 34 % / 22 %**, `repeat-x`,
      `background-size: 1200px|1000px|800px 100%`, inline-SVG data URIs, `linear infinite` pans of
      **120 s / 70 s / 40 s** to `-2400 / -2000 / -1600 px`; far adds `opacity: .85`
- [ ] grain: `linear-gradient(90deg, rgb(10 13 28 / .78), rgb(10 13 28 / .35) 55%, rgb(10 13 28 / 0))` +
      `repeating-linear-gradient(0deg, rgb(255 255 255 / .025) 0 1px, transparent 1px 3px)`
- [ ] below **861**: the grain flips to `180deg` with `.55 / .6 / .2`, and the sun goes `left: 45%`,
      `bottom: 14%`, `50vmin`
- [ ] `.is-paused` on the root pauses **every** scene animation (`animation-play-state: paused`)

## 3. Header bar (RED first)

- [ ] `<header class="relative z-[5]">`; inner `mx-auto flex max-w-[1320px] items-center gap-6 px-[var(--gutter)] py-6`
      — no border, no fill
- [ ] wordmark: `<a href="#top">` with a 26 px stroke-only mountain-path SVG (`currentColor`), 20 px/800,
      `tracking-[.02em]`, `gap-2.5`
- [ ] nav: `<nav aria-label="Main" class="ml-auto">` with `ul` `flex gap-[30px]`; each link `block py-1` + a **2 px**
      transparent bottom border, 16 px/500, `transition-colors` — 24.8 line box + 8 padding + 2 border = **34.8**
- [ ] link colours on the element (`text-soft` resting, `text-ink` hover/current), never through an inherited anchor
      rule — the reference's `a { color: inherit }` repaints every resting link white
- [ ] current link: `aria-current="page"` + amber underline; hover: ink + `rgb(255 255 255 / .5)` underline
- [ ] menu button: `hidden` above 860; at ≤860 `grid size-[46px] place-items-center rounded-full border
      border-white/35 bg-[rgb(15_20_38_/_0.35)]` with `aria-expanded`, `aria-controls`, swapping `aria-label`,
      and `Menu`/`X` glyph swap
- [ ] focus: `outline: 3px solid var(--color-amber); outline-offset: 3px` on every focusable control

## 4. Mobile dropdown (≤ 860)

- [ ] with `.is-enhanced` and `.is-open`: the nav becomes `absolute top-full` `left/right: var(--gutter)`,
      `rounded-[20px] bg-[rgb(15_20_38_/_0.96)] px-[18px] py-[10px]` + the 48 px shadow
- [ ] links in the panel: `flex-col`, `py-[14px] text-[19px]`, `border-b border-white/10`, last one borderless →
      **58.44** each, panel **252.75** tall
- [ ] toggle `.is-open` + `aria-expanded` + `aria-label`; close on link click, `Escape` (focus back to the button),
      outside click, and `matchMedia('(min-width: 861px)')` matching
- [ ] without JS the inner row and the link list `flex-wrap` — the dropdown is progressive, never the default
- [ ] test: at 860 the panel top edge is **y 94** (the bar's padding box) and 4 links measure **58.44 / 58.44 /
      58.44 / 57.44**

## 5. Hero copy block

- [ ] `<main class="mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center px-[var(--gutter)]">`
- [ ] `<section class="max-w-[720px] pt-[clamp(40px,8vw,96px)] pb-[clamp(32px,5vw,56px)]">`
- [ ] kicker: `inline-flex items-center gap-2.5` (inline-level — keep it a `p` with `inline-flex`), 14 px/700,
      `tracking-[.16em] uppercase text-amber`, `::before` 8 px `bg-[#ff5d5d] rounded-full shadow-[0_0_0_4px_rgb(255_93_93_/_0.25)]`
- [ ] `h1`: `mt-[18px] mb-5 font-extrabold leading-[.95] tracking-[-.04em] [text-wrap:balance]
      [text-shadow:0_2px_30px_rgb(10_13_28_/_0.35)]` sized `clamp(2.8rem, 1.3rem + 5.6vw, 6.2rem)`
- [ ] sub: `max-w-[34em] text-soft` sized `clamp(1.02rem, .98rem + .3vw, 1.2rem)`
- [ ] test: h1 is **2 lines** at 1440 (538.39 / 652.45) and **3** at 320; sub is **3 / 4 / 5 / 6** lines at
      1440 / 390 / 326 / 320

## 6. Action row

- [ ] `div`: `mt-9 flex flex-wrap items-center gap-x-7 gap-y-[18px]`
- [ ] play `<button type="button" aria-haspopup="dialog" aria-controls="…">`: `inline-flex items-center gap-4 pr-6`,
      no border/fill, ink label
- [ ] disc: `relative grid size-[76px] place-items-center rounded-full bg-white text-night pl-[3px]` + two
      `::before`/`::after` rings (`border-2 border-white/60 rounded-full`) running `cl-hero11-ripple` **2.4 s
      ease-out infinite**, the second `animation-delay: 1.2s`; hover `scale-106` over `.25s`
- [ ] label: `grid text-[18px] font-bold leading-tight` + its duration line `text-[14px] font-medium text-soft`
- [ ] shop pill: `rounded-full border border-white/45 bg-[rgb(15_20_38_/_0.25)] px-6 py-3.5 text-base font-semibold
      px-[24px]`; hover `bg-white border-white text-night` over `.2s`
- [ ] `@media (max-width:520px)`: disc **64**, pill `flex-1 basis-full text-center` → row **136.8**
- [ ] test: single row **76** tall from 574; **148.8** (wrapped) at 521–573; **136.8** at ≤520

## 7. Chapter strip

- [ ] `<ul id="chapters">`: `flex flex-wrap gap-x-10 gap-y-3 border-t border-hairline pt-[22px] pb-8 text-[15px]
      text-soft` — **full main width (1224 at 1440)**, not the hero's 720
- [ ] each `li`: `flex items-baseline gap-2.5`; its number `text-[13px] font-bold text-amber`
- [ ] `@media (max-width:520px)`: `flex-col gap-2`, items full width → **140.75** tall
- [ ] test: **78.25** tall / one row ≥603, **113.5** / two rows 521–602, **140.75** / column ≤520

## 8. The film dialog

- [ ] one `<dialog>` at the end of the shell: `w-[min(960px,calc(100%-32px))] max-h-[calc(100%-32px)] rounded-[20px]
      bg-dialog p-0 text-ink overflow-hidden shadow-[0_40px_100px_-20px_rgb(0_0_0_/_0.7)]`
- [ ] backdrop: `bg-[rgb(6_8_18_/_0.82)] backdrop-blur-[6px]`; open animation `cl-hero11-pop` `.3s
      cubic-bezier(.2,.8,.2,1)` (from `opacity 0`, `translateY(16px) scale(.97)`)
- [ ] head: `flex items-center justify-between gap-4 py-3.5 pr-3.5 pl-[22px]`, an `h2` at 17 px/700 and a
      **42 × 42** circular close button `bg-white/10`
- [ ] screen: `aspect-[16/9] grid place-content-center justify-items-center gap-2.5 p-6`, the amber-radial over the
      160° gradient, a dashed `rounded-full` "Video placeholder" chip and one 15 px note
- [ ] control bar: `absolute inset-x-4 bottom-3.5 flex items-center gap-3.5 rounded-xl bg-[rgb(6_8_18_/_0.6)] px-3.5
      py-2.5 text-[13px]`, 28 px white disc, a `h-1 flex-1` track with the amber fill at **28 %**, tabular time —
      wrap the whole bar in `aria-hidden="true"`
- [ ] open: `showModal()`, add `.is-paused` to the root, focus the close button; close: `close()`
- [ ] backdrop click: only when `e.target === dialog` **and** the point falls outside `getBoundingClientRect()`
- [ ] on `close`: remove `.is-paused`, return focus to the play button
- [ ] `@media (max-width:520px)`: screen `aspect-[4/3]` with `p-[16px_16px_56px]`, bar `inset-x-2 bottom-2` at
      **40** tall, note 13 px
- [ ] test: **960 × 610** at 1440 with a **960 × 540** screen and a **928 × 48** bar; **352 × 334** at 390 with a
      **352 × 264** screen

## 9. Responsive ladder + a11y

- [ ] only two media queries: **860** (menu, grain direction, sun) and **520** (disc, pill, strip, dialog); everything
      else is fluid type and natural wrapping
- [ ] no horizontal overflow at 320/360/390/520/768/1024/1440/1920 (`scrollX` stays 0 after `scrollTo(300,0)`)
- [ ] one `h1`, one `h2` (the dialog title), `<nav aria-label="Main">`, `aria-current="page"`, `aria-haspopup` /
      `aria-controls` on the play button, `aria-hidden` on the scene and the fake control bar
- [ ] `prefers-reduced-motion: reduce` → one reset killing **all** animations and transitions on the shell and the
      dialog subtrees

## 10. Docs, footer, bookkeeping

- [ ] footer: a slim strip inside the shell, 13 px soft, one link `https://www.componentdock.com/` labelled
      **"Component Dock"**, no new colour or radius; record the height it adds to the ladder
- [ ] `TEMPLATES.md`: add the Hero 11 row **in the same PR that ships the app** (prep streams never touch markers);
      re-read the section first, the implementer streams rewrite it concurrently
- [ ] README app list entry + `docs/` status, following the sibling heroes
- [ ] PR description: source template, preview URL, tokens used, and the deltas (rewritten copy, lucide icons,
      resolved anchors, the 2.15 px kicker strut, the restored soft nav-link colour)
