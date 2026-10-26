# Coffer — task outline

Recreation of the ColorLib **Card V10** design (`card-10`) at `apps/coffer`. Spec is the authority:
`openspec/specs/template-coffer/spec.md`. Design notes: `docs/templates/coffer/design-notes.md`.
Check boxes only as work ships.

> This is a **single-screen band, not a site**: a greeting head over three frosted-glass cards on a
> `135deg` violet→magenta gradient with three blurred blobs, `min-height: 100vh`, and — at 1440 — a
> 900 px stage with the card row ending at 525. The reference is **4,963 B of HTML + one 11,527 B
> stylesheet, 2 dead anchors, 0 buttons, 0 forms, 0 images, 0 scripts, 0 keyframes**.
> The risk is not a missing band — it is flattening the four things that make it glass:
> **the `@supports`-gated `backdrop-filter` with a `#3b1a6e` fallback**, **the two-layer shadow
> (inset top highlight + outer soft drop)**, **content-driven card heights that stretch per row**,
> and **the blob wash that is both the signature and the accessibility defect**.
>
> Five numbers decide fidelity: cards are **365.33 × 327** at 1440 and **never** a fixed height
> (281 → 372 across widths); the grid is **3 / 2 / 1 at 946 / 634 / 633** with 290 px floors
> (arithmetic, not breakpoints); the donut is **116 px with `pathLength="100"` and a double
> rotation**; the goal sub-line is **13.5 px and wraps at a 290–308 px track**, which is what makes
> the goal card taller than the bank card below 340; and the blobs must be **dimmed to `.35` plus a
> `rgba(20,8,40,.5)` scrim** or six text runs stay under AA (worst 2.05:1).

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/coffer`; rename the package to
      `@free-react-templates/coffer`
- [ ] `public/CNAME` = `coffer.free.componentdock.com`; `homepage` =
      `https://coffer.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/coffer" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Sora 400..700**
      (`css2?family=Sora:wght@400..700&display=swap` — verified 200); `<title>Coffer — …</title>`,
      `lang="en"`
- [ ] `@theme` entries: `--color-glass-fallback: #3b1a6e`, `--color-scrim: rgba(20,8,40,.5)` and the
      three gradient stops **only if** you cannot express them with stock `indigo-950` /
      `violet-900` / `pink-900`

## 1 — Tokens

- [ ] stage: `min-h-screen overflow-hidden relative` + `[background:linear-gradient(135deg,#1e1b4b_0%,#4c1d95_45%,#9d174d_100%)]`
      + `py-[clamp(40px,7vw,88px)] px-4`; `body` background `#1e1b4b` (not `#2e1065`, defect 7)
- [ ] three blobs: `aria-hidden`, `rounded-full [filter:blur(8px)]`, sizes 320 / 380 / 220, positions
      8 %-6 % / right 4 %-bottom 6 % / 36 %-44 %, radial gradients (`#f472b6→#db2777`,
      `#fb923c→#c2410c`, `#67e8f9→#0e7490`), **`opacity-[.35]`**
- [ ] card: `rounded-[24px] p-6 border border-white/28`, glass gradient inside a `@supports`
      (`supports-[backdrop-filter]:`) with `backdrop-blur-[22px] backdrop-saturate-[1.6]`, scrim
      `bg-[rgba(20,8,40,.5)]` beneath the gradient, fallback `#3b1a6e`,
      `shadow-[0_24px_60px_-24px_rgba(10,0,30,.6),inset_0_1px_0_rgba(255,255,255,.25)]`
- [ ] type: Sora everywhere; `leading-[normal]` on the h1 and body; `tracking-[-.03em]` on title and
      balance; `text-[12.5px]` labels, `text-[13.5px]` goal sub-line and `See all`
- [ ] accents: gold `#fde68a` (donut, chip, focus ring), mint `#bbf7d0` / `#14532d` (pill, credits),
      CTA `#fff` / `#4c1d95`

## 2 — Shell and head

- [ ] `<main>` holds blobs → `<header>` → grid; header and grid are both `max-w-[1140px] mx-auto`
- [ ] h1 "Good evening, Lina" at `clamp(28px,3.6vw,40px)`/700/`-.03em`, **51 px box**, 1 line; sub
      "Here is where your money stands this week." at 16 px `#ede9fe`, 6 px below; `mb-8` on the head
- [ ] grid `grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[22px]` — no column breakpoint

## 3 — Card 1 · the account card

- [ ] `<section aria-labelledby>` + `<h2>` 16/600 "Everyday account" + two-disc mark SVG 44 × 26
      (left disc `.85`, right `.45`), both `aria-hidden`
- [ ] label "Available balance" 12.5/400 `#ede9fe` `.04em`, `mt-[22px]`
- [ ] balance `€6,482` at 36/700/`-.03em` + `<span>` ".30" at 20 px `#ede9fe`, **`mt-1` above it**
      (the `.label +` override, not 22 px)
- [ ] chip SVG 40 × 30, gold `.85` fill, `rgba(120,80,0,.45)` stroke at 1.2, `mt-[22px]`
- [ ] number 17/500, `tracking-[.12em]`, `[word-spacing:.2em]`, sr-only "Card ending in " + four
      U+2022 groups + `4821`; `mt-2.5 mb-3.5`
- [ ] meta strip `mt-auto gap-9`, labels 12.5/600 `#ede9fe`, values 14/600: "Card holder / Lina
      Moretti", "Expires / 08/29"

## 4 — Card 2 · the savings goal

- [ ] `<h2>` "Savings goal" + mint pill "On track" (`#bbf7d0` on `#14532d`, `px-2.5 py-1`,
      `rounded-full`, 12.5/600)
- [ ] donut: inline SVG 116 × 116, `viewBox="0 0 120 120"`, `rotate(-90deg)` on the svg,
      `pathLength="100"`, track `rgba(255,255,255,.2)` 10 px, fill `#fde68a` 10 px round-capped with
      `strokeDasharray={`${pct} 100`}`, `<text>` at 24/700 and 12 px **counter-rotated**
      `rotate(90 60 60)`; `role="img"` + `aria-label="68 percent saved"`
- [ ] copy block 18 px gap from the ring: "Kyoto in spring" 18/600, "**€2,720** of €4,000"
      (`strong` 20/700 `#fff`), "€320 a month · target March 2027" 13.5/400 `#ede9fe`
- [ ] CTA: real `<button>`, `mt-auto`, `w-full rounded-[14px] py-3 px-4 bg-white text-[#4c1d95]`
      15/600, hover `-translate-y-px` + `shadow-[0_10px_24px_-10px_rgba(0,0,0,.5)]`,
      `transition-[transform,box-shadow] duration-200`, `motion-reduce:transition-none`
      `motion-reduce:hover:translate-y-0`

## 5 — Card 3 · the ledger

- [ ] `<h2>` "Recent activity" + `See all` (13.5/600, `underline underline-offset-[3px]`) as a real
      link — **never `href="#"`**
- [ ] `<ul>` `mt-3.5` of 4 `<li>`: `flex items-center gap-3 py-[9px] border-b border-white/14`,
      `last:border-0`
- [ ] icon tile `size-[38px] rounded-xl bg-white/16 grid place-items-center` with an 18 px stroke icon
      (`ShoppingBag`, `DollarSign`, `Briefcase`, `Coffee` — 1.8 stroke)
- [ ] name 15/600 `leading-[1.3]` over `category · date` 12.5/400 `#ede9fe` (U+00B7)
- [ ] amount 15/600 `tabular-nums whitespace-nowrap`, credits `text-[#bbf7d0]`, debits white with
      **U+2212**

## 6 — Data, state and accessibility

- [ ] one typed dataset (`lib/finance.ts` or `data.ts`): balance, goal `{saved, target, monthly}`,
      four transactions `{merchant, category, date, amount, kind}`; formatters for `€` + U+2212
- [ ] donut percentage computed as `Math.round(saved / target * 100)` — **not** a literal 68
- [ ] `<section aria-labelledby>` × 3, `h1` + `h2` × 3, no skipped levels, blobs `aria-hidden`
- [ ] focus ring `outline-3 outline-[#fde68a] outline-offset-[3px]` on both controls
      (`focus-visible:`), drawn outside the control
- [ ] `tabular-nums` on **every** figure (balance, goal sums, donut number, amounts)
- [ ] footer: one line linking `https://www.componentdock.com/` as "Component Dock"

## 7 — Tests (write first, 100 % coverage)

- [ ] head renders the greeting and the sub-line; **1** h1 and **3** h2 in the tree
- [ ] three cards render in order and each `<section>` is named by its `h2`
- [ ] card 1 renders `€6,482` + `.30` as separate runs, the sr-only "Card ending in ", `4821`
- [ ] donut `strokeDasharray` **follows the dataset** (change `saved` → dasharray changes; 2,720/4,000
      → "68 100")
- [ ] pill text and colour derive from the dataset's on-track boolean
- [ ] ledger renders exactly 4 rows, credits get the mint class, debits render U+2212
      (`screen.getByText('−€42.18')` — assert the codepoint, not the ASCII hyphen)
- [ ] CTA is a `<button>` and its click handler is called; `See all` has a non-`#` href
- [ ] no row renders a `#` href (guard test: `queryAllByRole('link')` hrefs all differ from `#`)
- [ ] formatters: thousands comma, two decimals, U+2212 for negatives, U+00B7 in `category · date`

## 8 — Verification

- [ ] `npm run verify:app coffer` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-coffer --type spec` is valid
- [ ] measured at 1440: stage **900**, grid **1140** at x 150, cards **365.33 × 327**, h1 **40 px**
- [ ] measured at 946 / 945 / 634 / 633: **3 / 2 / 2 / 1** columns, tracks **290.00** at both floors
- [ ] measured at 320: track **290** in a **288** grid (14 px right gutter), 1 column, document
      **1,272**, `scrollX 0` after `scrollTo(300,0)`
- [ ] at 900 the third card is at **y 504, 423 px** wide (orphan row reproduced)
- [ ] contrast sweep at 1440: **0** runs under AA, worst **≥ 6.9:1** (the reference's four
      blob-under-text failures are gone)
- [ ] `prefers-reduced-motion: reduce` emulation: CTA `transform: none`, `transition: none`
- [ ] deployment: `curl -I https://coffer.free.componentdock.com` → 200, `ssl_verify_result=0`
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)`
