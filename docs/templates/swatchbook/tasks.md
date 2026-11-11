# Swatchbook — implementation tasks (ColorLib Pricing Table V08, `pricing-table-08`)

One run, one app. Read `openspec/specs/template-swatchbook/spec.md` first — it carries every measured number quoted here.
The reference is a **marketplace gig page**: a listing column (crumbs → title → seller → cover → 8-row comparison table)
and a **sticky 400 px package card** with three ARIA tabs. The work is layout fidelity **plus** one small, real piece of
state — this is the family's only variant that needs `useState`.

Checklist convention: write the test, watch it fail, then implement — one `describe` per component, `it` names mirroring
the spec's scenarios.

- [ ] `git fetch origin && git checkout main && git pull --rebase origin main`; confirm the spec exists
      (`openspec/specs/template-swatchbook/spec.md`) and that `[~]` is claimed in `TEMPLATES.md` before writing code
- [ ] claim the row (`[~]`) **before** the first implementation commit — the prep deliberately did not touch the file
      (variant 08 has **no** row yet; append one under `## Bootstrap Pricing Tables (12)`, after line 898)

## 0. Scaffold

- [ ] `cp -r apps/<simplest existing app> apps/swatchbook`, then rename: `package.json` → `@free-react-templates/swatchbook`,
      `"homepage": "https://swatchbook.free.componentdock.com"`, `public/CNAME` → `swatchbook.free.componentdock.com`
- [ ] keep `vite.config.ts`'s `injectUiSource()` verbatim (absolute `@source`; a relative one silently drops
      `packages/ui` classes)
- [ ] `index.html`: title `Swatchbook — brand identity packages`, `theme-color #f7f7fb`, description, and the Figtree
      link `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700;800&display=swap`
- [ ] `npm install` at the repo **root**; `grep -c "free-react-templates/swatchbook" package-lock.json` → **≥ 1**

## 1. Tokens (`src/index.css`, `@theme`)

- [ ] ground `#f7f7fb`, band `#faf9fd`, ink `#17151f`, label `#2c2838`, muted `#5a5668`, line `#e4e2ec`, accent `#5b21b6`
- [ ] ok `#047857`, off `#6f6b7e` (**the fix** — the reference's `#8e8a9c` is 3.35 : 1), badge `#fef3c7`, badge ink
      `#78350f`, star `#d97706`, avatar `#7c3aed → #db2777`
- [ ] alias the exact Tailwind steps (`amber-100/900`, `emerald-700`, `violet-600/800`, `pink-600`) instead of new hexes
      where they are exact; `#17151f`, `#2c2838`, `#5a5668`, `#6f6b7e`, `#e4e2ec`, `#f7f7fb`, `#faf9fd` are bespoke
- [ ] no `@font-face`, no `@keyframes`, no `prefers-color-scheme`, no `all: revert` reset

## 2. Data modules (RED first)

- [ ] `src/data/compare.ts`: eight rows of label + three cells, where a cell is a discriminated union — text, yes
      (`Check` + `sr-only` "Included"), or no (`—` + `sr-only` "Not included"); test the eight labels, the three `yes` on
      `Vector source file`, the two `no` on `Colour palette and fonts` at Basic, the `16 pages` value, and that no cell is
      empty
- [ ] `src/data/packages.ts`: three entries `{ tab, name, price, desc, meta: [string, string], includes: {label, on}[] }`
      (Basic 3 in / 3 off, Standard 5 in / 1 off, Premium 6 in / 0 off; every panel exactly **six** items)
- [ ] test the three tab labels, the three panel names, `$180/$420/$890`, and that only Standard is `default`
- [ ] keep the copy verbatim (U+00B7 in the rating line, U+203A in the crumbs, `’` in the description); the studio is
      renamed **`Swatchbook Studio`**, initials **`SS`**

## 3. Shell (RED first)

- [ ] `App.tsx` → `main > section[aria-labelledby] > (div.gig, aside.box) + footer`
- [ ] wrapper `min-h-screen bg-swatch-ground px-4 py-[clamp(32px,6vw,72px)]`; section
      `mx-auto grid max-w-[1160px] grid-cols-[minmax(0,1fr)_400px] items-start gap-10 text-swatch-ink`
- [ ] test: one `h1`, one (visually hidden) `h2`, three `h3`, exactly one `main`/`section`/`aside`

## 4. Gig header

- [ ] crumbs `m-0 text-[13.5px] leading-[20.92px] text-swatch-muted` with the `›` in `<span aria-hidden>`
- [ ] `h1` `mt-2 mb-[18px] text-[clamp(26px,3.4vw,36px)] leading-[1.15] font-extrabold tracking-[-0.025em]
      [text-wrap:balance]`
- [ ] seller `mb-[22px] flex items-center gap-[14px]`; avatar `grid h-12 w-12 shrink-0 place-items-center rounded-full
      bg-[linear-gradient(135deg,#7c3aed,#db2777)] text-[15px] font-bold text-white`, `aria-hidden`, text **SS**
- [ ] name row `flex flex-wrap items-center gap-2 text-[15px] font-bold`; badge `rounded-md bg-swatch-badge
      px-2 py-px text-[12px] font-bold text-swatch-badge-ink`; rating `mt-0.5 flex flex-wrap items-center gap-1
      text-[14px] text-swatch-muted` with the star in `text-swatch-star`
- [ ] test: the exact crumb string, the `h1` string, `Studio Halden` **absent**, `SS` present, the rating string

## 5. Cover

- [ ] `<img src="https://picsum.photos/seed/swatchbook-1/900/560" width={900} height={560} alt="…colour swatches…"
      className="block w-full rounded-2xl object-cover aspect-[900/560]" />`
- [ ] test: `aspect-ratio` class present, `alt` non-empty and free of the source's name

## 6. Comparison table

- [ ] `table` wrapper: `mt-8 w-full overflow-hidden rounded-[14px] bg-white shadow-[0_0_0_1px_var(--color-swatch-line)]
      border-collapse-collapse` — a **ring**, not a border (`border-collapse: collapse` drops radii)
- [ ] `caption` `pb-3 text-left text-[20px] font-extrabold leading-[31px]` → `Compare packages`
- [ ] thead: 1 empty `<td>` + 3 `<th scope="col" id=…>` each holding the plan name and `<span class="block font-medium
      text-swatch-muted">$180</span>`; band `bg-swatch-band`
- [ ] cells `px-4 py-3 text-[14px] text-center border-b border-swatch-line max-[520px]:px-1.5 max-[520px]:py-2.5
      max-[520px]:text-[13px]`; row labels `text-left font-medium text-swatch-label`; last row drops the rule
- [ ] `✔` = 16 px `Check` with `stroke-[2]` in `text-swatch-ok` + `sr-only` `Included`; `—` = `<span aria-hidden>—</span>`
      + `sr-only` `Not included`; both in **`text-swatch-off`** (the fixed `#6f6b7e`)
- [ ] every `td` carries `headers="col row"`; test the header wiring, the three cell kinds and the screen-reader text

## 7. Package card

- [ ] `aside` `sticky top-6 overflow-hidden rounded-[18px] border border-swatch-line bg-white
      shadow-[0_24px_50px_-32px_rgba(23,21,31,0.35)]`
- [ ] tablist `grid grid-cols-3 border-b border-swatch-line [&>*+*]:shadow-[inset_1px_0_var(--color-swatch-line)]`,
      `role="tablist" aria-label="Packages"`; each tab `<button type="button" role="tab" aria-controls aria-selected
      tabIndex>` `px-2 py-4 text-[15px] font-bold cursor-pointer` with `bg-swatch-band text-swatch-muted` unselected and
      `bg-white text-swatch-accent` + a 3 px accent bar when selected
- [ ] panels `role="tabpanel" aria-labelledby hidden={!selected} tabIndex={0}` at `px-6 pt-6 pb-[26px]`
- [ ] name/price row `flex items-baseline justify-between gap-3`, name `text-[18px] font-extrabold`, price
      `text-[30px] font-extrabold tracking-[-0.03em]`
- [ ] description `mt-2 mb-4 text-[14.5px] text-swatch-muted`; meta `mb-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]
      font-bold` with 18 px `Clock` / `RefreshCcw`; list `mb-[22px]`, items `flex items-center gap-2.5 py-1 text-[14.5px]`
      with 16 px `Check` / `X`
- [ ] CTA `<a href="#">` `flex items-center justify-center gap-2.5 rounded-xl bg-swatch-ink px-[18px] py-3.5
      text-[15px] font-bold text-white hover:bg-swatch-accent` + chip `rounded-md bg-white/16 px-2 py-px text-[14px]`
- [ ] contact strip `border-t border-swatch-line bg-swatch-band px-6 py-3.5 text-center text-[14px] text-swatch-muted`
- [ ] test: initial Standard selected, click switches, `ArrowRight` from Premium wraps to Basic, `Home`/`End`, exactly one
      panel visible, CTA names `Continue $180/420/890`, contact link `Message Swatchbook Studio`

## 8. Responsive

- [ ] section `max-[960px]:flex max-[960px]:flex-col max-[960px]:gap-0` (**keep `items-start`** — it is what limits the
      seller to 318 px), gig `max-[960px]:contents`, card `max-[960px]:static max-[960px]:order-1 max-[960px]:mx-auto
      max-[960px]:mt-6 max-[960px]:w-full max-[960px]:max-w-[560px]`, table `max-[960px]:order-2`
- [ ] `max-[520px]` on cells and panel padding as above
- [ ] test the class strings as a proxy (jsdom cannot evaluate media queries) **and** verify the real ladder in the
      browser before the PR

## 9. Footer, verify, bookkeeping

- [ ] `<footer>` with one link, `https://www.componentdock.com/`, labelled **Component Dock**
- [ ] `npm run verify:app swatchbook` (typecheck + lint + 100 % coverage + build)
- [ ] browser check at **1440 · 1024 · 961 · 960 · 521 · 520 · 414 · 375 · 320** — document
      `1308 · 1179 · 1128 · 1956 · 1653 · 1593 · 1527 · 1565 · 1668` (the reference reads
      `1308 · 1179 · 1128 · 1956 · 1653 · 1593 · 1549 · 1585 · 1749`: one table label wraps earlier under the
      reference's font build — quote both, do not chase it) and `scrollX = 0` everywhere
- [ ] sticky check: scroll 400 at 1440 → the card's viewport top is **24**, and still **24** at the maximum 408
- [ ] `openspec validate template-swatchbook --type spec`; `grep -riE 'colorlib|pricing-table-08|halden' apps/swatchbook`
      → 0
- [ ] bookkeeping: `[~]` → `[x]`, append the `Pricing Table 08` row under `## Bootstrap Pricing Tables (12)` (re-read the
      file after the rebase), `npm run readme:status`, `gh workflow run deploy-surge.yml -f app="swatchbook"`, then audit
      the Surge URL (HTTPS 200 + `ssl_verify_result=0`)
