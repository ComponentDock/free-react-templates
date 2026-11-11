# Perch — implementation tasks (ColorLib Pricing Table V07, `pricing-table-07`)

One run, one app. Read `openspec/specs/template-perch/spec.md` first — it carries every measured number quoted here.
The reference is a **static** page: four rows, no script, no form, no state. The work is almost entirely **layout
fidelity** (a four-track grid that becomes a two-row card at 900) and **token discipline** (nine bespoke neutrals).

Checklist convention: write the test, watch it fail, then implement — one `describe` per component, `it` names mirroring
the spec's scenarios.

- [ ] `git fetch origin && git checkout main && git pull --rebase origin main`; confirm the spec exists
      (`openspec/specs/template-perch/spec.md`) and that `[~]` is claimed in `TEMPLATES.md` before writing code
- [ ] claim the row (`[~]`) **before** the first implementation commit — the prep deliberately did not touch the file

## 0. Scaffold

- [ ] `cp -r apps/<simplest existing app> apps/perch`, then rename: `package.json` → `@free-react-templates/perch`,
      `"homepage": "https://perch.free.componentdock.com"`, `public/CNAME` → `perch.free.componentdock.com`
- [ ] keep `vite.config.ts`'s `injectUiSource()` verbatim (absolute `@source`; a relative one silently drops
      `packages/ui` classes)
- [ ] `index.html`: title `Perch — coworking memberships`, `theme-color #f4efe6`, description, and the Outfit link:
      `https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap` (no 500)
- [ ] `npm install` at the repo **root**; `grep -c "free-react-templates/perch" package-lock.json` → **≥ 1**

## 1. Tokens (`src/index.css`, `@theme`)

- [ ] ground `#f4efe6`, card `#fffcf7`, ink `#231a14`, line `#e2d8c9`, muted `#5f5249`, accent `#9d174d`
- [ ] tile `#f1e7d8`, pop tile `#3b2d23`, pop glyph `#f9a8d4`, pink `#fbcfe8`, pink ink `#500724`,
      pop text `#fbf6ee`, pop muted `#d9ccbb`, pop line `#4a3a2e`, line hover `#cdbfa9`
- [ ] `#9d174d` is **not** `rose-800` (`#9f1239`) and `#fbcfe8`/`#f9a8d4`/`#500724` **are** `pink-200/300/950` — alias the
      exact ones, declare a token for the accent
- [ ] no `@font-face` in the sheet (Google `<link>` only), no `@keyframes`, no `prefers-color-scheme`

## 2. The data module (RED first)

- [ ] `src/data/plans.ts`: four entries — `{ name, desc, chips[], price: { from?, amount, per }, cta: { label, suffix },
      featured?, icon }`; `plans.test.ts` asserts the four names, the 3/3/4/3 chip counts (**13**), the four amounts
      (`$28`/`$190`/`$390`/`$1,450`), that only Row 3 has `featured`, and that only Studio has `from`
- [ ] keep the strings verbatim (en dashes `8am–6pm`, `2–6`, U+00B7 in the eyebrow, `’` in the footnote); the venue is
      renamed `Perch House · Canal Street`

## 3. Shell (RED first)

- [ ] `App.tsx` → `main > section aria-labelledby > header + ul.rows + p.footnote + footer`
- [ ] wrapper `min-h-screen bg-perch-ground px-4 py-[clamp(40px,7vw,96px)]`, section `mx-auto max-w-[1080px] text-perch-ink`
- [ ] test: one `h1`, four `h2`, section labelled by the `h1`, exactly one `main`/`section`/`header`

## 4. Head

- [ ] `flex flex-wrap items-end justify-between gap-x-12 gap-y-4 mb-8`, eyebrow `text-sm font-semibold text-perch-accent`
      `m-0`, `h1` `mt-1 text-[clamp(40px,6.5vw,72px)] font-bold leading-none tracking-[-0.04em]`, lede
      `max-w-[400px] m-0 text-perch-muted`
- [ ] test: eyebrow text, `h1` = `Memberships`, lede exact string
- [ ] the lede must sit on the **right** at desktop and **under** the title below 766 — no JS, `flex-wrap` does it

## 5. The row grid and a row

- [ ] list `grid gap-3 list-none p-0 m-0` with `role="list"`
- [ ] row: `relative grid items-center gap-6 rounded-[18px] border border-perch-line bg-perch-card py-[22px] px-6`
      `grid-cols-[minmax(0,1.25fr)_minmax(0,1.6fr)_minmax(0,0.8fr)_auto]`, `transition-[border-color,box-shadow]`
      `hover:border-perch-line-hover hover:shadow-[0_14px_30px_-22px_rgba(35,26,20,0.45)]`
- [ ] children carry explicit `[grid-area:plan|feats|price|cta]` names so the ≤ 900 area map can reflow them
- [ ] test: four `<li>`, each with 4 direct children in order plan → chips → price → CTA

## 6. Plan track

- [ ] `flex items-center gap-4`, tile `grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-perch-tile
      text-perch-accent` and `aria-hidden`, name `text-[21px] font-semibold leading-[31.5px] tracking-[-0.01em] m-0`,
      desc `mt-0.5 text-[14.5px] leading-[21.75px] text-perch-muted`
- [ ] lucide icons at `size={22} strokeWidth={1.8}`: `Coffee`, `DoorOpen`, `Armchair`, `Building2`
- [ ] test: every plan name is an `h2`; the tile is `aria-hidden` and renders an `<svg>`

## 7. Chips

- [ ] `ul role="list" aria-label="<Plan> includes"` + `flex flex-wrap gap-x-2 gap-y-1.5` + chip
      `rounded-full border border-perch-line px-[11px] py-1 text-[13.5px] leading-[20.25px] whitespace-nowrap
      max-[420px]:whitespace-normal`
- [ ] test: 13 chips total, 4 on the featured row, each list carries its plan's `aria-label`

## 8. Price block

- [ ] `flex flex-col text-right` — `from` (13 px, muted) then `amount` (30 px / 700 / `-.03em` / `leading-[1.1]` /
      `tabular-nums`) then `per` (13.5 px, muted)
- [ ] test: the Studio row renders `from`, the other three do not; the amount is above the period in DOM order
- [ ] `tabular-nums` is load-bearing (`$1,450` vs `$28` share the column)

## 9. CTA

- [ ] `<a href="#" className="inline-flex min-w-[124px] items-center justify-center rounded-full border-[1.5px]
      border-perch-ink px-5 py-3 font-semibold text-perch-ink no-underline transition-colors hover:bg-perch-ink
      hover:text-perch-pop-text focus-visible:outline-3 focus-visible:outline-offset-[3px]
      focus-visible:outline-perch-accent">`
- [ ] the visually-hidden suffix as `<span className="sr-only">: Day Pass</span>` (reference uses a clip-path class —
      port `sr-only`)
- [ ] test: four links, accessible names `Book a day: Day Pass` / `Join Flex 10` / `Join Resident` /
      `Book a tour: Studio`

## 10. The featured row

- [ ] add `bg-perch-ink text-perch-pop-text border-perch-ink`; tile → `bg-perch-pop-tile text-perch-pop-glyph`;
      desc/`per`/`from` → `text-perch-pop-muted`; chips → `border-perch-pop-line`; CTA → `bg-perch-pink
      text-perch-pink-ink border-perch-pink hover:bg-white hover:text-perch-pink-ink hover:border-white
      focus-visible:outline-perch-pink`
- [ ] flag: `<p className="absolute -top-[11px] left-6 rounded-full bg-perch-pink px-2.5 py-0.5 text-[12.5px]
      font-semibold text-perch-pink-ink">Most chosen</p>` — first child of the row, **before** the plan
- [ ] test: exactly one inverted row; the flag precedes the plan name in DOM order; nothing sets `overflow: hidden`

## 11. Responsive

- [ ] `max-[900px]:grid-cols-[minmax(0,1fr)_auto] max-[900px]:gap-4 max-[900px]:px-[18px] max-[900px]:py-5` +
      `[grid-template-areas:'plan_price'_'feats_feats'_'cta_cta']`; CTA `max-[900px]:w-full`
- [ ] `max-[420px]` on the plan block: `gap-3`, tile `h-10 w-10 rounded-xl`, name `text-[19px]`, amount `text-[26px]`
- [ ] test the class strings as a proxy (jsdom cannot evaluate media queries) **and** verify the real ladder in the
      browser before the PR

## 12. Footer, verify, bookkeeping

- [ ] `<footer>` with one link, `https://www.componentdock.com/`, labelled **Component Dock** — the only element added
      below the reference page
- [ ] `npm run verify:app perch` (typecheck + lint + 100 % coverage + build)
- [ ] browser check at **1440 · 900 · 901 · 766 · 765 · 420 · 375 · 320**: heights
      `900 · 1182 · 900 · 1155 · 1218 · 1362 · 1407 · 1545` (plus the footer's own height) and `scrollX = 0` everywhere
- [ ] `openspec validate template-perch --type spec`; `grep -riE 'colorlib|pricing-table-07|hatchyard' apps/perch` → 0
- [ ] bookkeeping: `[~]` → `[x]`, append the `Pricing Table 07` row under `## Bootstrap Pricing Tables (12)` (re-read
      the file after the rebase), `npm run readme:status`,
      `gh workflow run deploy-surge.yml -f app="perch"`, then audit the Surge URL (HTTPS 200 +
      `ssl_verify_result=0`)
