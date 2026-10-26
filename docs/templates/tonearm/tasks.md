# Tonearm — task outline

Recreation of the ColorLib **Card V16** design (`card-16`) at `apps/tonearm`. Spec is the authority:
`openspec/specs/template-tonearm/spec.md`. Design notes: `docs/templates/tonearm/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-16/` (the slug-only
`theme/card-16/` 404s — this family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **two-card player console, not a site**: a dark podcast player and a light album card in one
> **820 px** top-aligned row on greige `#ebe5da`. No nav, no hero, no footer in the reference.
>
> The family's **first interactive** template. A **3,909 B** script simulates playback: a 250 ms clock,
> `aria-pressed` + a single `.is-playing` class as the only signals, ±15 s / +30 s skips, a
> **1× → 1.5× → 2× → 1×** speed cycle, row selection that moves `aria-current`, an equaliser that
> replaces the playing row's number, and auto-advance. **No audio element exists** — the state machine
> *is* the design.
>
> The risk is not the layout, it is flattening the four things that make it read as this design:
> **820, not 1,140** (widen it and both cards change character), **`align-items: start`** so the album
> stops at 448 instead of stretching to 645.77, **the square cover that is the card's full content
> width** with its title pinned top-left over the violet gradient, and **the single `.is-playing` class**
> that drives both the equaliser and the sun's pulse.
>
> Six numbers decide fidelity: row **820** at x 310; cover **354 × 354**; two columns down to **736**
> (tracks exactly 340.00) and one at **735**; transport **46 / 46 / 68 / 46 / 46** with **gap 8**;
> podcast **645.77** vs album **448.02** (**197.75** step); fill **44.208 %** at load.
>
> **Nothing is photographed:** the page has **0 `<img>`**. The cover art is inline SVG and must be
> re-authored (sun + two wave paths, measured palette), not copied and not replaced with picsum.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/tonearm`; rename the package to
      `@free-react-templates/tonearm`
- [ ] `public/CNAME` = `tonearm.free.componentdock.com`; `"homepage"` =
      `https://tonearm.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/tonearm" package-lock.json` → 1)
- [ ] `index.html`: title, description, one **Rubik** Google Fonts `<link>`
      (`family=Rubik:wght@400;600;700&display=swap` — **real** weights; the reference's 600/700 are the
      400 outlines with synthetic bold, do **not** reproduce that)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #ebe5da`, `--color-night: #17151f`, `--color-night-ink: #f6f3ff`,
      `--color-night-muted: #b9b4c9`, `--color-night-track: rgb(255 255 255 / .16)`,
      `--color-amber: #ffb27a`, `--color-amber-deep: #ff8a3d`, `--color-rose: #ff5f8f`,
      `--color-cream: #fffdf8`, `--color-cream-ink: #1d2422`, `--color-cream-muted: #56625e`,
      `--color-cream-track: #e4ebe8`, `--color-teal: #0f766e`, `--color-teal-ink: #0b5a54`,
      `--color-teal-row: #e6f4f1`, `--color-row-hover: #f1f5f3`,
      `--radius-card: 28px`, `--radius-cover: 20px`, `--radius-cover-sm: 16px`, `--radius-row: 12px`,
      `--shadow-card: 0 30px 60px -30px rgb(23 21 31 / .6)`,
      `--shadow-play: 0 10px 24px -8px rgb(255 138 61 / .6)`,
      `--shadow-play-sm: 0 8px 18px -8px rgb(15 118 110 / .8)`
- [ ] `--font-sans: "Rubik", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`; **one** family,
      no display face — hierarchy is size + colour + tracking (`cover 700 / −.04em`, `title 700 /
      −.01em`, `eyebrow 600 / .04em`, `byline 400`)
- [ ] base **15 px / 1.45** inside the cards (page body is 16); no `cl-` class names anywhere

## 2 — Shell and row

- [ ] `main`: `bg-ground flex justify-center px-4 py-[clamp(32px,6vw,80px)]`, **no** `min-h-screen`
      (content is **805.77** tall at 1,440, not the 900 viewport)
- [ ] row: `grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-6
      w-full max-w-[820px]`
- [ ] verify **820 / x 310** at 1,440 with tracks **398 / 398**; **2 columns at 736** (tracks exactly
      **340.00**), **1 at 735** (**703**); no `md:`/`lg:` column override, no JS measurement
- [ ] **`items-start`** — the album must NOT stretch to the podcast's height (197.75 px step)

## 3 — Card shell

- [ ] shared: `rounded-[28px] p-[22px] shadow-card text-[15px] leading-[1.45]`
- [ ] podcast: `bg-night text-night-ink`; album: `bg-cream text-cream-ink`
- [ ] each card is a `<section aria-labelledby>`; **no `overflow-hidden`** on the card

## 4 — Covers (authored SVG, no images)

- [ ] podcast: `relative overflow-hidden rounded-[20px] aspect-square` with
      `bg-[linear-gradient(160deg,#3a0ca3,#7209b7_60%,#b5179e)]`; SVG on a `0 0 200 200` viewBox —
      **`<circle cx="150" cy="104" r="28" fill="#ffd166"/>`** (a real circle: the playing pulse targets
      it) + two wave paths `#ef476f` at `opacity=".85"` and `#7b2cbf`
- [ ] podcast title overlay: `absolute top-5 left-[22px] text-white
      text-[clamp(30px,6vw,44px)] font-bold leading-[.95] tracking-[-.04em]`, text `The Long<br>Commute`
      → **44 / 41.8** at 1,440, **30** below 500
- [ ] album: `flex-none w-[120px] h-[120px] rounded-2xl` with
      `bg-[linear-gradient(180deg,#14b8a6,#5eead4_55%,#fde68a)]`; SVG `<circle cx="100" cy="92" r="46"
      fill="#fef3c7" opacity=".95"/>` + two hill paths `#0f766e` / `#134e4a`
- [ ] both covers `aria-hidden="true"`; the page must end up with **0** `<img>`

## 5 — Podcast head and progress

- [ ] info block: `my-5 mb-4` (**20 / 16**), then eyebrow 13/600/.04em **`#ffb27a`** (not `#ff8a3d`),
      `h2` 21/700/−.01em/1.25 with `my-1`, byline 14/400 `#b9b4c9`
- [ ] copy: `Episode 84 · 42 min` / `Why cities are planting forests on rooftops` /
      `The Long Commute · with Priya Nair` — middle dot **U+00B7**
- [ ] bar: `h-1.5 rounded-full overflow-hidden bg-night-track` (white 16 %), fill
      `h-full rounded-[inherit]` in `bg-[linear-gradient(90deg,#ffb27a,#ff5f8f)]`
- [ ] wrapper (the reference's `.cl-card16__progress` has **no** styles — `mt-3.5` if anything)
- [ ] times: `flex justify-between mt-1.5 text-[12.5px] text-night-muted tabular-nums` →
      **`18:42` / `-23:36`**
- [ ] `role="progressbar"` + `aria-label="Episode progress"` + `min 0 / max 2538 / now 1122` +
      `aria-valuetext="18:42 of 42:18"`

## 6 — Transport

- [ ] row: `flex items-center justify-between gap-2 mt-3.5` → **354 × 68** at y 635.77
- [ ] icon buttons: `grid place-items-center w-[46px] h-[46px] rounded-full border-0 bg-transparent
      text-night-ink hover:bg-white/10 transition-colors duration-200`; icons **26 × 26**,
      `stroke-width 1.8`; queue icon **22**
- [ ] skip glyph **9 / 700** absolutely centred over the arrow icon (`15` / `30`)
- [ ] play disc: **68 × 68** `bg-white text-night` + `shadow-play`, `hover:scale-105 active:scale-95
      transition-transform duration-150`; play/pause icons **28** swapped by
      `aria-pressed="true"` (**CSS-only swap**, exactly as the reference)
- [ ] speed button: label `1×` (U+00D7) with an sr-only **"Playback speed "** prefix
- [ ] queue button: **real toggle** — `aria-pressed`, label swaps to **"Added to queue"** (the reference
      ships it dead; see defect 2)
- [ ] **do not** add `shrink-0`: the reference lets the row compress below a 340 px card
      (46 → 38.7 at 320, disc 68 → 57.2). Add only `min-w-0` so 240 doesn't overflow (defect 8)

## 7 — Album head and track list

- [ ] head: `flex items-center gap-[18px] mb-4` → **133.14** tall; text column starts at 120 + 18,
      **200** wide
- [ ] album eyebrow 13/600/.04em `#0f766e`; title **24/700**; byline 14/400 `#56625e`
- [ ] album play: **44 × 44** `bg-teal text-white shadow-play-sm mt-3`, icons **20**
- [ ] `<ol class="m-0 mb-4 list-none p-0">` of **5** rows; each row
      `grid grid-cols-[22px_1fr_auto] items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left
      transition-colors duration-200 hover:bg-row-hover` (**354 × 41.75**)
- [ ] name cell `min-w-0 overflow-hidden text-ellipsis whitespace-nowrap`; number 13/600 tabular muted;
      length 13/400 tabular muted
- [ ] current row: `bg-teal-row text-teal-ink font-semibold` + `aria-current="true"`; **hover must not
      change it**
- [ ] equaliser: three **3 × 14** bars in the accent, `gap-[2px]`, `origin-bottom`, in **column 1 /
      row 1** — the same cell as the number, swapped by `visibility` / `display` (defect 10)
- [ ] copy + durations: Low Tide Lights `3:34` (214) · Salt in the Radio `4:11` (251) · Harbour Cats
      `3:18` (198) · Swimming After Midnight `4:36` (276) · Postcards (Reprise) `3:23` (203)
- [ ] album bar: track `#e4ebe8`, fill teal `#0f766e`, `0:00` / `-3:34`, `aria-label="Song progress"`,
      `max 214 / now 0`

## 8 — The player state machine (`hooks/usePlayer.ts`)

- [ ] state `{ playing, elapsed, duration, rate }`; one hook instance **per card** (independent clocks)
- [ ] `useEffect` interval **250 ms**: `elapsed += 0.25 * rate`; on `>= duration` advance to the next
      track, else clamp and pause; **clear the interval on unmount**
- [ ] `render`-equivalent derived values: `pct`, `fmt(elapsed)`, `-fmt(duration - elapsed)` (clamp at 0),
      `valuenow` = rounded seconds, `valuetext` = `"m:ss of m:ss"`
- [ ] play/pause: if paused and finished → `elapsed = 0`; then toggle. **Label swaps with the state**
      (defect 1)
- [ ] skip: `clamp(elapsed ± 15/30, 0, duration)`, no pause, no reset
- [ ] speed: `[1, 1.5, 2]` cycling modulo 3; at 2× the clock runs twice real time
- [ ] track click: same row + playing → pause; otherwise select (move `aria-current`, adopt
      `data-duration`, reset elapsed) and play
- [ ] queue toggle: local boolean, `aria-pressed`, label swap

## 9 — Motion

- [ ] `.is-playing` (or `data-playing`) starts the two keyframes: `eq` `scaleY(.25) → scaleY(1)` **0.9 s**
      alternate with **−0.3 / −0.6 s** delays on bars 2 / 3, and `pulse` `scale(1.12)` at 50 % **2.4 s**
      on the **cover's circle** with `transform-origin: 150px 104px`
- [ ] `prefers-reduced-motion: reduce` → `animation: none` on both, second bar `scaleY(.6)`, and all
      transitions (`fill`, `play`, `track`, `skip`, `speed`) **0s**
- [ ] focus ring: **3 px** at **2 px** offset, `#ffb27a` on the podcast, `#0f766e` on the album

## 10 — Footer

- [ ] one Component Dock attribution line under the row, centred, linking
      `https://www.componentdock.com/` as "Component Dock"

## 11 — Tests (TDD, 100 % coverage)

- [ ] RED first: shell + row tokens, both cards' copy, five track rows with their durations, initial
      progress (`44.208 %`, `18:42`, `-23:36`, album `0:00` / `-3:34`)
- [ ] `vi.useFakeTimers()`: play → `+1 s` after `advanceTimersByTime(1000)`; pause holds; at 2× → `+2 s`;
      skip clamps at both ends; `+30` → `1154` / `"19:14 of 42:18"`
- [ ] speed cycle `1× → 1.5× → 2× → 1×`; row 3 → `max 198` / `"0:01 of 3:18"` / `-3:18`; clicking the
      playing row pauses
- [ ] auto-advance: track 4 past its end → track 5 current and still playing; last track → clamp + pause
- [ ] a11y: `aria-pressed` + label change together, queue toggle label, `role="progressbar"` attrs,
      bar **not** in the tab order, **11** buttons, **1** hidden `h1` + **2** `h2`, **0** `<a>` /
      **0** `<img>` / **0** media elements
- [ ] do **not** assert keyframes or `:hover` in jsdom — assert the class/attribute that carries them
- [ ] every branch of `usePlayer` (clamps, wrap, advance, stop, reset-at-end, unmount cleanup) covered

## 12 — Docs, a11y and ship

- [ ] `npm run verify:app tonearm` (typecheck + lint + knip + fallow + coverage + build)
- [ ] `openspec validate template-tonearm --type spec`
- [ ] add the `TEMPLATES.md` row from the spec, directly after the last `Card NN` row (the
      `## Bootstrap Cards (20)` section, currently Cards 01–07 present), marked `[x]` with the live URL;
      `npm run readme:status`
- [ ] footer Component Dock link present; no ColorLib / `card-16` / `cl-card16` strings in `apps/tonearm`
