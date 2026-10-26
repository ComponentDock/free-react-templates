# Tiffin — task outline

Recreation of the ColorLib **Card V15** design (`card-15`) at `apps/tiffin`. Spec is the authority:
`openspec/specs/template-tiffin/spec.md`. Design notes: `docs/templates/tiffin/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-15/` (the slug-only
`theme/card-15/` 404s — this family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **single-screen recipe band, not a site**: a rust eyebrow + one serif headline over three
> dish cards on cream `#fbf6ee`, each card a white 28 px-radius panel with a **92 px tinted band** and a
> **176 px circular plate that straddles the band**, sitting **76 px above the card's top edge**. Under
> the plate: course → serif title → blurb → a dashed three-cell stat table with a **3-dot difficulty
> meter** → two tint pills. The reference is **3,893 B of HTML and one 7,178 B stylesheet**, with **0
> scripts, 0 buttons, 0 forms, 3 links, 3 images**.
>
> The risk is not a missing band — it is flattening the four things that make it read as this design:
> **the plate that escapes the card's rectangle**, **the band/padding/row-gap arithmetic that exists
> only to hold that plate**, **the tint that must drive both the band and the pills**, and **the
> no-clipping rule** (`overflow: visible` on the card; the band is a `::before`, not a header).
>
> Four numbers decide fidelity: plate **176** at `top: -76`, band **92**, card padding-top **116**;
> **3 columns at 924, 2 at 923** and **2 at 618, 1 at 617**; the `h1` **one line down to 398, two from
> 397**; stat cells **103.55** in a **74.5** row.
>
> **There is nothing to wire:** the snippet ships no JavaScript at all. The only interaction is CSS —
> the plate `rotate(12deg)` on card hover over `0.6 s`, and a `3 px` ring at `4 px` offset on
> `:focus-visible`. Do **not** add state, a save control or a filter.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/tiffin`; rename the package to
      `@free-react-templates/tiffin`
- [ ] `public/CNAME` = `tiffin.free.componentdock.com`; `"homepage"` =
      `https://tiffin.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/tiffin" package-lock.json` → 1)
- [ ] `index.html`: title, description, and one **DM Serif Display** Google Fonts `<link>`
      (`family=DM+Serif+Display&display=swap` — **400 only**, the reference loads no other weight)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #fbf6ee`, `--color-ink: #2a1d12`, `--color-muted: #5c4a3a`,
      `--color-accent: #c2410c`, `--color-eyebrow: #9a3412`, `--color-tag-ink: #3d2a18`,
      `--color-rule: #e5d8c8`, `--color-tint-peach: #fde7d9`, `--color-tint-sage: #e3f1dc`,
      `--color-tint-butter: #fbeec2`, `--radius-card: 28px`,
      `--shadow-card: 0 30px 50px -40px rgb(80 40 10 / 0.5)`,
      `--shadow-plate: 0 18px 30px -12px rgb(80 40 10 / 0.45)`
- [ ] body font = the **system UI stack** (`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`) —
      no sans webfont; `--font-display: "DM Serif Display", Georgia, serif` for the two serif roles only
- [ ] base `15px / 1.5`; no `cl-` class names anywhere — Tailwind utilities only

## 2 — Shell and head

- [ ] `main`: `bg-ground text-ink`, content **1,140** centred, `px-4` + vertical
      `clamp(32px, 6vw, 72px)`, **no** `min-h-screen`
- [ ] watch the box: `max-w-[1140px] px-4` gives a **1,108** content box. Use
      `max-w-[1172px] px-4` (or padding outside the 1,140 box) so the content lands at 1,140 / x 150
- [ ] header: `text-center`, `mb-24` (**96 px** — plate clearance, not rhythm)
- [ ] eyebrow `<p>`: 14 / 700 / `.12em` / uppercase / `#9a3412`
- [ ] `h1`: `clamp(32px,4.4vw,50px)` / 400 / `-0.01em` / `leading-[1.05]`, `mt-2`, DM Serif
- [ ] exactly **1 `h1`** on the page; eyebrow is a `<p>`, dish titles are `h2`

## 3 — Grid

- [ ] `grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[26px] gap-y-24`
- [ ] verify **3 columns at 924** (tracks exactly 280.00), **2 at 923** (432.50);
      **2 at 618** (280.00), **1 at 617** (585)
- [ ] no column breakpoint, no `md:`/`lg:` column override, no JS measurement

## 4 — Card shell and the tinted band

- [ ] `<article class="relative flex flex-col rounded-[28px] bg-white pt-[116px] px-[26px] pb-6
      text-center shadow-…">` — **no `overflow-hidden`**
- [ ] band: `before:absolute before:inset-x-0 before:top-0 before:h-[92px]
      before:rounded-t-[28px] before:bg-[var(--tint)]` (a pseudo-element, **not** a header div, **not**
      the card's own background)
- [ ] per-card `--tint`: peach `#fde7d9`, sage `#e3f1dc`, butter `#fbeec2` — drive the band **and** the
      tag pills from the same value
- [ ] card shadow `0 30px 50px -40px rgb(80 40 10 / 0.5)`; card base 15 / 1.5

## 5 — The plate

- [ ] `absolute -top-[76px] left-1/2 w-44 h-44 -translate-x-1/2 overflow-hidden rounded-full
      border-8 border-white shadow-…` + `transition-transform duration-[600ms]
      ease-[cubic-bezier(.2,.7,.2,1)]`
- [ ] `<img class="block w-full h-full object-cover" width={700} height={520} />` — 160 × 160 inside the
      176 box; the `700 × 520` source is **centre-cropped to a square** (74.3 % of its width survives),
      which is the look
- [ ] picsum seeds `tiffin-1` … `-3`; first two `fetchPriority="high"`, third `loading="lazy"`
- [ ] verify the join: plate bottom **+100** from card top, photo bottom **+92** = band bottom, ring
      sticking 8 px into the white body

## 6 — Body copy

- [ ] course `<p>`: 13 / 700 / `.08em` / uppercase / `#c2410c`, `m-0`, `relative`
- [ ] `h2`: 25 / 400 / DM Serif / `leading-[1.15]`, `mt-1.5 mb-2`
- [ ] `h2 > a`: `text-inherit no-underline` + `after:absolute after:inset-0 after:rounded-[28px]
      after:z-[1]`; a **real `href`** per recipe, never `#`
- [ ] blurb `<p>`: 15 / `#5c4a3a`, `mb-[18px]`, **`flex-1`** (this is what equalises card heights)

## 7 — Stat table

- [ ] `<dl class="m-0 grid grid-cols-3 py-3.5 border-y border-dashed border-rule">` with `<div>`
      wrappers; cells 2–3 get `border-l border-dashed border-rule`
- [ ] `<dt>`: 12 / 600 / `.06em` / uppercase / muted; `<dd>`: 15 / 700 / ink, `mt-1`
- [ ] copy: Time / Level / Per serving → `45 min` / `Medium` / `610 kcal`, `20 min` / `Easy` /
      `480 kcal`, `35 min` / `Involved` / `540 kcal`
- [ ] key the level cell's `row` layout off a `kind`/`level` field in the data — **not** `nth-child(2)`

## 8 — Difficulty meter

- [ ] `<span aria-hidden="true" class="inline-flex gap-[3px]">` + three `<i>` at `w-[7px] h-[7px]
      rounded-full border-[1.5px] border-accent`; fill the first *n*
- [ ] keep the declared **1.5 px** border — Chromium reports it as `1px` in `getComputedStyle`; that is a
      reading artefact, not the design
- [ ] level 2 / 1 / 3 with the words **Medium** / **Easy** / **Involved**, `gap-1.5` (6 px) to the word,
      `dd` laid out `row`
- [ ] expose the ordinal for assistive tech (e.g. `Level 2 of 3 · Medium`) — the dots are decorative

## 9 — Tag pills

- [ ] `<ul aria-label="Tags" class="mt-4 flex flex-wrap justify-center gap-1.5">`
- [ ] `<li class="px-[11px] py-1 rounded-full text-[13px] font-semibold text-tag-ink
      bg-[var(--tint)]">`
- [ ] copy: `Vegetarian` / `Serves 4`, `Vegan option` / `Meal prep`, `High protein` / `Gluten free`

## 10 — Motion and focus

- [ ] card `hover:` → plate `rotate-[12deg]` **keeping** `-translate-x-1/2` (compose the transform, do
      not overwrite it) — trigger is the **card**, not the link
- [ ] `prefers-reduced-motion: reduce` → `transition-none` and `hover:rotate-0`, everything else identical
- [ ] focus ring on the `::after` overlay: `focus-visible:outline-none` on the link +
      `after:outline-[3px] after:outline-accent after:outline-offset-4` (ring traces the whole card)
- [ ] no colour, shadow or size change on hover — the plate rotation is the only motion

## 11 — Footer

- [ ] one Component Dock attribution line under the grid in the same content column, linking
      `https://www.componentdock.com/` as "Component Dock"

## 12 — Tests (TDD, 100 % coverage)

- [ ] RED first: page shell, head copy, three cards' copy (course / title / blurb / three stat
      pairs / two tags), three tints on band and pills, three levels → 3 / 2 / 1 filled dots
- [ ] static assertions: **0** `button, input, select, textarea`; **0** `a[href="#"]`; no `role="status"`,
      no `aria-live`; every `<img>` has a non-empty alt; the dot span is `aria-hidden`
- [ ] heading outline: 1 `h1`, 3 `h2`, 3 `article`; focusable order = the three title links
- [ ] do **not** assert the 12° rotation in jsdom (no layout, no `:hover`) — assert the class/prop that
      carries it and leave the angle to the browser check

## 13 — Docs, a11y and ship

- [ ] `npm run verify:app tiffin` (typecheck + lint + knip + fallow + coverage + build)
- [ ] `openspec validate template-tiffin --type spec`
- [ ] add the `TEMPLATES.md` row from the spec, directly after the last `Card NN` row (the
      `## Bootstrap Cards (20)` section, currently Cards 01–06 present), marked `[x]` with the live URL;
      `npm run readme:status`
- [ ] footer Component Dock link present; no ColorLib / `card-15` / `cl-card15` strings in `apps/tiffin`
