# Ratecard — implementation tasks

`apps/ratecard` recreates the ColorLib **Pricing Table V01** SaaS pricing page (a centred eyebrow/title/lede head, a
stretch-equal three-column plan grid, the middle card flagged with a 2 px accent border + −16 px margin + a pill, ghost
CTAs everywhere but the middle, check-disc bullets and a one-line footnote) under a new name. Read
`openspec/specs/template-ratecard/spec.md` first — it carries every measured number, the token table and the thirteen
deltas. `docs/templates/ratecard/design-notes.md` carries the DOM skeleton, the CSS token block, the screenshot read,
**the prescribed copy**, the section-by-section notes, the adaptation table and the sibling comparison.

Reference: <https://preview.colorlib.com/theme/bootstrap/pricing-table-01/> (the slug-only path **404s** — the
`bootstrap/` prefix is the only live one; `/js/snippet.js` also 404s because the page has **no JavaScript**).
Source: <https://colorlib.com/wp/template/pricing-table-01/>.

All boxes ticked after `apps/ratecard` shipped (2026-11-11). The run notes at the bottom record what the port actually measured.

## 0. Scaffold

- [x] copy the simplest existing app to `apps/ratecard`; rename the package to `@free-react-templates/ratecard`
- [x] `public/CNAME` = `ratecard.free.componentdock.com`; `"homepage"` = `https://ratecard.free.componentdock.com`
- [x] register the workspace with `npm install` at the root (never hand-edit `package-lock.json`)
- [x] load **Inter** once in `index.html`:
      `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap` — one family, four weights,
      **no italic, no mono, no weight 500** (the archive ships an undeclared 500 file; nothing uses it)
- [x] no ColorLib string, comment or asset anywhere in the app: the product is **Ratecard** by **Slatebox**, and none
      of "Relaylane", "every inbox", "Starter / Growth / Scale", "$19 / $49 / $129" or "Save 15% with annual billing"
      may appear
- [x] register `injectUiSource()` in `vite.config.ts` (copy an existing app's config verbatim)

## 1. Tokens

- [x] `@theme`: `--color-ground #f6f7f9`, `--color-ink #111827`, `--color-muted #4b5563`, `--color-accent #2453d6`,
      `--color-accent-soft #e8eefc`, `--color-accent-hover #1b43b3`, `--color-line #e3e6eb`,
      `--color-cta-line #7f8a9c` (**darkened from `#c9d1de`, which is 1.54 : 1**), `--color-list-ink #1f2937`
- [x] radii: card **18**, CTA **10**, flag pill **999**, disc **50 %**
- [x] type scale from the sheet: **46 / 50.6** (`h1`, `-.035em`, `1.1`) · **20 / 31** (name, `-.01em`) ·
      **16.5 / 25.575** (lede) · **15 / 23.25** (body, CTA) · **14.5 / 22.475** (desc, bullets) · **14 / 21.7**
      (per, footnote) · **13 / 20.15** (eyebrow at `.08em` uppercase, label) · **12.5 / 19.375** (flag) ·
      **48 / 48** (amount, `-.04em`, `tabular-nums`)
- [x] the two shadows verbatim: card `0 1px 2px rgb(17 24 39 / .04)`, hover `0 18px 40px -24px rgb(17 24 39 / .28)`,
      featured `0 24px 48px -28px rgb(36 83 214 / .55)`
- [x] section `max-width: 1120px`, `font-size: 15px`, `line-height: 1.55`; `<main>` `padding: clamp(40px,7vw,96px) 16px`
      on `bg-ground`

## 2. Head (RED first)

- [x] head `mx-auto max-w-[640px] text-center mb-12`
- [x] eyebrow `<p>` 13 px/700, `tracking-[.08em] uppercase text-accent`
- [x] `h1` `mt-[10px] mb-[14px] text-[clamp(30px,4.6vw,46px)] font-extrabold tracking-[-.035em] leading-[1.1] [text-wrap:balance]`
      — the prescribed headline measures **612.92** on one line at 1440
- [x] lede `<p>` 16.5 px `text-muted [text-wrap:balance]` — **2 lines** (588 / 589) at 1440
- [x] test: head is **640 × 145.86** at (400, 96); `h1` **50.59**, lede **51.13**

## 3. Grid + a plan card

- [x] grid `grid grid-cols-3 items-stretch gap-6` (**verify `grid-cols-3` compiles to `minmax(0,1fr)`**; write
      `grid-cols-[repeat(3,minmax(0,1fr))]` if it does not) — measured columns **357.328 / 357.328 / 357.344**
- [x] card `relative flex flex-col rounded-[18px] border border-line bg-white px-[30px] pt-8 pb-[34px] shadow-[0_1px_2px_rgb(17_24_39_/_.04)]`
- [x] name `h2` 20 px/700 `leading-[31px]`; description `mt-2 min-h-12 text-[14.5px] leading-[22.475px] text-muted`
      — **`min-h-12` is what aligns the three price rows**
- [x] price row `mt-[26px] mb-6 flex items-baseline gap-2`; amount `text-[48px] font-extrabold leading-none tracking-[-.04em] tabular-nums`;
      per `text-[14px] text-muted` (**baseline**, not centre)
- [x] CTA `block rounded-[10px] border border-cta-line bg-white px-[18px] py-3 text-center text-[15px] font-semibold
      transition-colors duration-200 hover:border-accent hover:text-accent` — height **49.25**
- [x] label `mt-7 mb-3 border-t border-line pt-6 text-[13px] font-bold leading-[20.15px]` — total **45.14**
- [x] list `ul` with `li` `relative py-1.5 pl-[30px] text-[14.5px] leading-[22.475px] text-list-ink` and a
      `::before`/span disc **20 × 20** at `top: 8px; left: 0`, `rounded-full bg-accent-soft`, holding
      `<Star|Check size={14}>` — item height **34.47**
- [x] hover on the card: `hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgb(17_24_39_/_.28)] transition-[box-shadow,transform] duration-[250ms]`
- [x] test: card **357.33 × 559.73** at (160, 289.86); name **31**, desc **48**, price **48**, CTA **295.33 × 49.25**,
      label **45.14**, list **137.88** (4 items)

## 4. The featured card

- [x] `border-2 border-accent` (**a real border, never `ring`**) plus `-my-4` and `pt-12` (not `pt-8`) — the three
      together are what make it **591.73** tall at y **273.86**
- [x] solid CTA: `border-accent bg-accent text-white hover:bg-accent-hover` (hover keeps the accent border)
- [x] flag `<p>` absolute `top-[-15px] left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full
      bg-accent px-3.5 py-[5px] text-[12.5px] font-bold whitespace-nowrap text-white` with a 14 px `Star`
      `fill="currentColor" aria-hidden` — **130 × 29.38** at (654.98, **260.86**), i.e. 13 px above the card and
      29 px above the grid
- [x] no ancestor of the grid may set `overflow-hidden` (or a `transform`/`filter`/`contain`) — the card overhangs by
      16 px and the flag another 13
- [x] test: featured content sits **1 px lower** than its siblings (price **436.86** vs **435.86**, CTA **508.86** vs
      **507.86**); flag's top is **273.86 + 2 − 15**

## 5. Footnote + footer

- [x] footnote `<p>` `mt-10 text-center text-[14px] leading-[21.7px] text-muted` — **one line (21.69)** at 1440,
      two (43.38) at ≤620
- [x] footnote link 14 px/600 `text-accent underline underline-offset-[3px]` with
      `focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-[2px]`
- [x] all four anchors point at `https://www.componentdock.com/` with `target="_blank" rel="noreferrer noopener"`
      (**no `href="#"` anywhere**); give the section `id="pricing"`
- [x] add the slim Component Dock footer strip below the section: 13 px muted, one link
      `https://www.componentdock.com/` labelled **"Component Dock"**, no new colour, no new radius, no second band —
      it adds its own ≈ 40–56 px to every document height
- [x] test: every anchor resolves; no app file contains "ColorLib"

## 6. Responsive ladder

- [x] at **≤900**: `grid-cols-1 max-w-[460px] mx-auto gap-8`, featured `my-0`, description `min-h-0` — cards
      **522.2 / 574.67 / 534.2**, grid **460** wide at x 220, document **2072**
- [x] at **560**: grid still 460 (section 528), lede **3** lines, footnote **2** lines, document **2060**
- [x] at **480**: grid 448 at x 16, third description **2** lines, document **2083**
- [x] at **320**: section **288** at x 16, `h1` **2** lines at 30 px, lede **5** lines, document **2257**,
      `scrollWidth === clientWidth` and `scrollX = 0`
- [x] test every stop in the spec's height ladder (1007 / 994 / 983 / 972 / 2072 / 2046 / 2023 / 2060 / 2083 / 2141 /
      2257) plus the port footer's height, and `scrollX = 0` at 320, 360, 390, 428, 480, 560, 640, 768, 900, 901, 1024,
      1120, 1280, 1440

## 7. Motion, contrast, a11y

- [x] `motion-reduce:transition-none motion-reduce:hover:translate-y-0`; **zero `@keyframes`** in the app
- [x] focus rings: CTAs `outline-3 outline-accent outline-offset-[3px]`; footnote link 2 px / offset 2
- [x] contrast asserted in a test: ink **17.74**, muted **7.56** (white) / **7.05** (ground), accent **6.4** / **5.97**,
      white-on-accent **6.4**, tick-on-disc **5.5**, ghost border **3.49** (the fixed `#7f8a9c`)
- [x] a11y shape: one `h1`; `aria-labelledby` on the section and on each `<article>` pointing at its own `<h2>` id;
      real `<ul>`/`<li>`; the flag's star `aria-hidden` so the pill reads "Most popular"; CTAs are real `<a>`

## 8. Verify

- [x] `npm run verify:app ratecard` (typecheck + lint + 100 % coverage + build)
- [x] `openspec validate template-ratecard --type spec`
- [x] `grep -riE 'relaylane|every inbox|starter|growth|scale|\$19|\$49|\$129|5,000' apps/ratecard` → 0 hits
- [x] `npm run readme:status` and the TEMPLATES.md bookkeeping: open `## Bootstrap Pricing Tables (12)` immediately
      before `## Bootstrap Wizards (30)` and add
      `- [x] **Pricing Table 01** — [colorlib](https://colorlib.com/wp/template/pricing-table-01/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-01.jpg) · [ratecard](https://ratecard.free.componentdock.com)`
- [x] deploy: `gh workflow run deploy-surge.yml -f app="ratecard"`, then the demo-health probe (HTTPS 200 +
      `ssl_verify_result=0` via `scripts/audit-deployments.sh`)

## Run notes (2026-11-11, `feat/template-ratecard`)

Measured with node Playwright against the built page (`vite build` → `python3 -m http.server`), viewport 1440 × 900,
`document.fonts.ready` + 700 ms. Every reference number in the spec reproduced to the hundredth:

| box | measured | spec |
| --- | --- | --- |
| `main` | 1440 × **1007.28** at (0, 0) | 1007.28 |
| section | 1120 × **815.28** at (160, 96) | 815.28 |
| head | 640 × **145.86**; eyebrow 20.14, `h1` 50.59, lede 51.13 | 145.86 / 20.14 / 50.59 / 51.13 |
| grid | 1120 × **559.73** at (160, 289.86) | same |
| cards | **559.73 / 591.73 / 559.73** at x **160 / 541.33 / 922.66**, featured y **273.86** | same |
| card stack | name 31, desc 48, price 48, CTA **295.33 × 49.25**, label 45.14, list 137.88 / 172.34, item 34.47 | same |
| featured offset | price **436.86** vs 435.86, CTA **508.86** vs 507.86, label 586.11 vs 585.11 | +1.00 px |
| flag | **130 × 29.38** at (**654.98**, **260.86**) | same |
| footnote | 21.69 at y **889.59** | same |
| footer strip | 1440 × **53.14** at y 1007.28 → document **1060** | +53 |

Height ladder (main height, footer excluded): **1007.28** at 1440 · **994.47** (1280) · **983.28** (1200) · **972.22**
(1121) · **972.06** (1120) · **967.09** (1024) · **963.75** (1000) · **964.28** (901) · **2071.58** (900) · **2046.39**
(768) · **2022.63** (640) · **2060.28** (560) · **2082.75** (480) · **2141.31** (428/390/375) · **2256.75** (320).
`scrollWidth === clientWidth` and `scrollX = 0` at all seventeen widths tested (320 … 1440).

Line ladder: `h1` one line at 436, two at 435; lede 2 at 640, 3 at 560, 4 at 436, 5 at 320; footnote one line at 640 and
two from 576 down (see the one copy-length delta below).

At **901**: cards **587.61 / 619.61 / 587.61**, prices **417.33 / 418.33 / 397.92** — the third card's price sits
19.41 px higher, exactly the `min-height` break the spec asks to preserve.

Interaction, read from `getComputedStyle`: card hover `translateY(-2px)` + `0 18px 40px -24px rgba(17,24,39,.28)`;
ghost CTA hover border + label `#2453d6` on a white fill; solid CTA hover `#1b43b3` with the accent border kept; CTA
`:focus-visible` 3 px / 3 px, footnote link 2 px / 2 px with a 2 px radius; `prefers-reduced-motion: reduce` → both
transitions `none` and no hover transform; zero `@keyframes` in the sheet.

### The one delta: the footnote's wrap seam

The prescribed footnote sentence is not the source's, and copy length is the only thing that decides where the note
splits. The port's `Prices in USD, excluding sales tax. Annual billing saves 15%. Compare all features` measures
**542 px** at 14 px, so it goes to two lines at **≤575** (section 528 at 560 → two lines) rather than the reference's
**620**. Every ladder stop the spec asserts is unaffected — 2060 at 560, 2082 at 480, 2257 at 320 and 2023 at 640 all
reproduce — and only the 576…620 window differs by one 21.69 px line. Shortening the copy to restore 620 broke 560;
a 600 px variant restored 620 but added a third line at 320 (2278). 542 is the width that satisfies both asserted
stops, so that is the one shipped.
