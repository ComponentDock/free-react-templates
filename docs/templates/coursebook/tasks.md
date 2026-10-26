# Coursebook — task outline

Recreation of the ColorLib **Card V12** design (`card-12`) at `apps/coursebook`. Spec is the
authority: `openspec/specs/template-coursebook/spec.md`. Design notes:
`docs/templates/coursebook/design-notes.md`. Live reference:
`https://preview.colorlib.com/theme/bootstrap/card-12/` (the slug-only `theme/card-12/` is 404 — this
family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **single-screen dashboard band, not a site**: a head over three course cards on cool grey
> `#f6f7fb`, each card a photo with a level chip + track + title + instructor + two meta facts + a
> striped progress bar + a tinted footer strip. The reference is **6,048 B of HTML and one 10,466 B
> stylesheet**, with **3 anchors, 0 buttons, 0 forms, 0 scripts, 0 keyframes, 0 `@supports`**.
> The risk is not a missing band — it is flattening the five things that make it read as a *progress*
> card: **the 16:9 band that really is 16:9 here**, **the footer pinned by `flex: 1` so all three
> strips share one baseline**, **the per-card strip wrap (297 / 305 / 227 px of need)**, **the 8 px
> striped bar fill**, and **the 2 px inset step between body text and strip text**.
>
> Five numbers decide fidelity: thumb **350 × 196.88** at a **372** track (never 220 px); card
> **372 × 504.41**; strip y **574.91** on every card with a **20 vs 43.39 px** bar gap; grid
> **3 / 2 / 1** at **946 / 634** with 290 px floors; header **33 → 77** at **422**.
>
> **There is no behaviour.** No script, no handlers, no state. The only interaction is CSS hover and
> focus.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/coursebook`; rename the package to
      `@free-react-templates/coursebook`
- [ ] `public/CNAME` = `coursebook.free.componentdock.com`; `"homepage"` =
      `https://coursebook.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/coursebook" package-lock.json` → 1)
- [ ] `index.html`: title + `Lexend` Google Fonts `<link>`
      (`family=Lexend:wght@400..700`, verified 200 — one `<link>`, it is a variable face)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #f6f7fb`, `--color-ink: #161a2e`, `--color-muted: #4b5168`,
      `--color-hairline: #e6e8f0`; three accent pairs `#4f46e5`/`#eef0ff`, `#0f766e`/`#e6f6f3`,
      `#b45309`/`#fdf3e4`; streak `#fff1e6` / `#9a3412` / `#f97316`
- [ ] confirm the ground is **blue-leaning** `#f6f7fb`, not warm paper and not white
- [ ] the **soft** tint is a role, not a shade: it is the thumb ground, the avatar disc, the bar
      track **and** the whole footer strip — three per-card values, none of them `indigo-50`
- [ ] type at **400 / 500 / 600 / 700 only** — 800 and 900 render identically to 700

## 2 — Shell and head

- [ ] `main`: `max-width: 1160px`, `margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`,
      `color: #161a2e`; **no** `min-height`
- [ ] header: `flex flex-wrap items-center justify-between gap-3`, `margin-bottom: 24px`
- [ ] `h1` "Continue learning" at `clamp(26px,3.4vw,34px)` / 700 / `−.02em`; measured **295.45 × 43**
      at 1440 and **233.17** wide from 764 down to 320 (it never wraps)
- [ ] streak pill "6-day streak": `inline-flex`, `gap-1.5`, `padding: 7px 14px 7px 10px`, radius
      **999**, `#9a3412` on `#fff1e6`, 14/600, flame SVG **18 × 18** `fill: #f97316`
      `aria-hidden="true"`
- [ ] grid: `grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[22px]` — **no** breakpoint classes,
      no JS, no `md:`/`lg:` variants

## 3 — Data module

- [ ] one typed `courses` array (3 entries): `id`, `track`, `title`, `level`, `teacher`,
      `initials`, `lessons`, `duration`, `done`, `accent`, `soft`, `nextLabel`, `imageSeed`
- [ ] derive `pct = Math.round(done / lessons * 100)` and the printed figure from the data — never
      hand-write "58 %" beside a bar that computes it
- [ ] the finished card's figure is the **word** "Completed", its `aria-valuenow` is **100**, and its
      strip sentence is the certificate line (a `done` flag drives all three)
- [ ] the accent and soft hexes are **data**, because the stylesheet only defines the indigo pair

## 4 — Card shell

- [ ] card: `flex flex-col`, `p-[10px]`, `border border-[#e6e8f0]`, `rounded-[22px]`, `bg-white`,
      14.5 px / 1.5, `color: #161a2e`; at 1440 it is **372 × 504.41**
- [ ] body SHALL be `flex-1` — this is what pins every strip to y **574.91**; without it the middle
      card's strip rides 23.4 px higher
- [ ] hover: `hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-26px_rgba(22,26,46,.45)]`,
      `transition-[transform,box-shadow] duration-[250ms]`
- [ ] `motion-reduce:transition-none motion-reduce:hover:translate-y-0` on the card and the chip

## 5 — Media band and level chip

- [ ] thumb: `relative overflow-hidden rounded-[16px] aspect-[16/9] bg-[var(--soft)]`
- [ ] photo `absolute inset-0 h-full w-full object-cover` — **keep 16:9**: it measures 1.7778 at
      every width here; do **not** substitute 700:440 (adds 23 px at 1440)
- [ ] placeholder images `https://picsum.photos/seed/coursebook-<n>/700/440` with descriptive `alt`
- [ ] level chip: `absolute bottom-[10px] left-[10px] rounded-[8px] px-[10px] py-1 text-[12px]
      font-semibold` on `rgba(255,255,255,.94)` — measured **109 / 78 / 78** px wide (Intermediate /
      Beginner / All levels)

## 6 — Body: track, title, teacher, meta

- [ ] body `px-3 pt-4 pb-1` — i.e. **16 / 12 / 4**, content **326** at 1440 (the 12 is deliberate:
      the strip below uses 14, a **2 px** step you must keep)
- [ ] track: 13/600 in the card's accent, `margin: 0`
- [ ] title `h2` 18/600/1.3/`−.01em`, `margin: 4px 0 12px`; measured **46.78 / 46.78 / 23.39**
      (two, two, one line) at 1440
- [ ] title wraps one `<a>` whose `::after` is `absolute inset-0 rounded-[22px]` — the **card-wide
      hit area**; link `href="#course-<n>"` with `id="course-<n>"` on the `<article>` (**no**
      `href="#"`)
- [ ] link `:focus-visible` → `outline-none` on the link, `outline: 3px solid <accent>` at
      `outline-offset: 3px` on the `::after`
- [ ] instructor row: `flex items-center gap-2 mb-3`, **28 × 28** `rounded-full` disc on the soft tint
      with **11/700** accent initials (`aria-hidden`), name at 14.5/500
- [ ] meta `ul`: `flex flex-wrap gap-4 mb-4 text-[13.5px] text-[#4b5168]`, each `li` `inline-flex
      gap-1.5` with a **17 × 17** stroked icon (`fill-none stroke-current stroke-[1.8]`, round joins)
      — `PlayCircle`/`Clock` from `lucide-react` match the reference's two glyphs

## 7 — Progress block

- [ ] label row: `flex justify-between gap-2 mb-1.5 text-[13px]`; left half muted ("14 of 24
      lessons"), right half ink 600 ("58%" / "Completed")
- [ ] track: `h-2 rounded-full overflow-hidden bg-[var(--soft)]`
- [ ] fill: `h-full rounded-[inherit] bg-[var(--accent)]` **plus** the stripe overlay
      `bg-[linear-gradient(90deg,rgba(255,255,255,.25)_25%,transparent_25%_50%,rgba(255,255,255,.25)_50%_75%,transparent_75%_100%)]`
      at `bg-[length:16px_16px]` → an **8 px** period (4 white / 4 clear)
- [ ] fill width from `pct`: **189.08** px (58 %) and **55.42** px (17 %) in a 326 track
- [ ] `role="progressbar"` + `aria-valuemin/max/now`, `aria-label="Progress on <title>"` (the
      reference's `aria-labelledby` reads the value twice — defect 4)
- [ ] wrapper `.cl-card12__progress` has no rule of its own in the reference: do not hang `flex` on it

## 8 — Footer strip

- [ ] strip: full inner width (**350**), `mt-4 flex items-center justify-between gap-2.5`,
      `rounded-[14px] px-3.5 py-3` (12 / 14), ground `var(--soft)`, 13 px muted; measured **57.5**
      tall on one line and **63** when it wraps
- [ ] sentence `span`: `inline-flex items-center gap-1.5 min-w-0`; the word "Next:" muted and the
      lesson title in a `<strong>` (ink, 600)
- [ ] chip: `inline-flex flex-none items-center gap-1 rounded-[10px] px-3 py-1.5` in the accent with
      white 13/600, arrow **16 × 16** at `stroke-width: 2.2`, `transition-[gap] duration-200`,
      `group-hover:gap-2`; measured **96** px (Resume) / **76** (View), **33.5** tall
- [ ] chip is a **`<span aria-hidden="true">`** — decoration inside the card-wide link, never a
      second `<button>`
- [ ] strip is a `<div>`, not a `<p>` (defect 3)
- [ ] do **not** add `whitespace-nowrap` or shorten the copy to stop the wrap: at 1024 the first two
      strips genuinely wrap and the row stretches to 478.41

## 9 — The finished variant

- [ ] `done` card: ink-coloured, 600-weight strip sentence; **18 × 18** stroked medal icon in the
      accent (`Award` in `lucide-react`); chip label "View →"; keep the strip at 57.5 px
- [ ] nothing else changes — the accent/soft, layout and radius are identical

## 10 — Accessibility

- [ ] **1 `h1`**, **3 `h2`**, **3** focusable elements (the title links), **0** `href="#"`,
      **0** `<button>`, **0** forms
- [ ] focus ring **3 px at 3 px offset in the card's accent** (6.29 / 5.47 / 5.02 on white) — this
      family's usual pale ring defect does not apply here
- [ ] `prefers-reduced-motion: reduce` → no lift, no shadow change, no gap growth
- [ ] decorative SVGs (level flame, meta icons, medal, arrow) all `aria-hidden="true"`
- [ ] footer line linking `https://www.componentdock.com/` as "Component Dock"

## 11 — Tests (write first, 100 % coverage)

- [ ] render: head copy + pill, three `h2`s, three images with `alt`, three `ul`s of two facts
- [ ] copy: the three tracks, titles, instructors, initials, lesson strings and durations verbatim
- [ ] `pct`: **58 / 17 / 100** from `done`/`lessons`; the finished card prints "Completed" and its bar
      is full width
- [ ] links: each `h2 > a` has `href="#course-<n>"` and the matching id exists on the article (the
      **no `href="#"`** assertion is the regression test for defect 1)
- [ ] a11y: `role="progressbar"` ×3 with `aria-valuenow` 58/17/100 and unique `aria-label`s; no
      element with `aria-hidden` is the only carrier of the CTA verb
- [ ] structure: 3 `<article>`, 1 `<main>`, 1 `<header>`, 0 `<button>`, 0 `<form>`
- [ ] no test asserts a Tailwind class string that encodes a measured px value without a comment

## 12 — Verification

- [ ] `npm run verify:app coursebook` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-coursebook --type spec` is valid
- [ ] measured at 1440: grid **1160** at x 140 / y 139, cards **372 × 504.41**, thumb
      **350 × 196.88**, strip y **574.91**, content **715.41**
- [ ] measured at 946 / 945 / 634 / 633: **3 / 2 / 2 / 1** columns, tracks **290.00** at both floors
- [ ] measured at 1,024: cards **478.41**, strips **63 / 63 / 57.5** (two wrapped, one not)
- [ ] measured at 423 / 422: header **33 / 77**
- [ ] measured at 320: track **290** in a **288** grid, `scrollX 0` after `scrollTo(200,0)`, content
      **1,642**
- [ ] bar fills **189.08 / 55.42** with the 8 px stripe period visible at 1× zoom
- [ ] contrast sweep: no text run under AA (worst 4.57:1, amber track on its soft); ring 5.02:1 minimum
- [ ] `curl -I https://coursebook.free.componentdock.com` → 200, `ssl_verify_result=0`
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)`; `npm run readme:status` re-run
