# Tallyboard — implementation tasks

`apps/tallyboard` recreates the ColorLib **Pricing Table V02** pageview-analytics pricing table (a centred
title/lede head, a monthly↔annual switch that counts the prices up, a four-column grid of four _equal_ 22 px cards
whose third is a solid deep-green "Best value" panel, pill CTAs and tick bullets) under a new name. Read
`openspec/specs/template-tallyboard/spec.md` first — it carries every measured number, the token table and the twelve
deltas. `docs/templates/tallyboard/design-notes.md` carries the DOM skeleton, the CSS token block, the screenshot read,
**the prescribed copy**, the section-by-section notes, the adaptation table and the sibling comparison.

Reference: <https://preview.colorlib.com/theme/bootstrap/pricing-table-02/> (the slug-only path **404s** and so does
`theme/bb/` — the `bootstrap/` prefix is the only live one). Source:
<https://colorlib.com/wp/template/pricing-table-02/>.

Checked boxes below are ticked **only after the app ships** — this file starts fully open.

## 0. Scaffold

- [x] copy the simplest existing app to `apps/tallyboard`; rename the package to `@free-react-templates/tallyboard`
- [x] `public/CNAME` = `tallyboard.free.componentdock.com`; `"homepage"` = `https://tallyboard.free.componentdock.com`
- [x] register the workspace with `npm install` at the root (never hand-edit `package-lock.json`)
- [x] load **Plus Jakarta Sans** once in `index.html`:
      `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap` — one family,
      four weights, **no 500** (the archive ships an undeclared, unused 500 pair) and **no italic**
- [x] no ColorLib string, comment or asset anywhere in the app: the product is **Tallyboard**, and none of
      "Quillmetric", "cookie-free web analytics", "Hobby / Starter / Pro / Team", "$15 / $40 / $100", "10k pageviews /
      month" or "pricing-table-02" may appear
- [x] register `injectUiSource()` in `vite.config.ts` (copy an existing app's config verbatim)

## 1. Tokens

- [x] `@theme`: `--color-ground #fbf7ef`, `--color-card #fffdf8`, `--color-ink #1c1917`, `--color-muted #57534e`,
      `--color-line #e7e0d2`, `--color-forest #14532d`, `--color-lime #bef264`, `--color-lime-ink #1a2e05`,
      `--color-pop #f7fee7`, `--color-pop-muted #d9f99d`, `--color-track #8a8079` (**darkened from `#a8a29e`,
      which is 2.36 : 1**), `--color-cta-hover #44403c`
- [x] radii: card **22**, CTA **999**, flag **999**, chip **999**, knob **50 %**
- [x] type scale from the sheet: **48 / 51.84** (`h1`, 800, `-.035em`, `1.08`) · **19 / 29.45** (name, 700) ·
      **16.5 / 25.575** (lede) · **15 / 23.25** (body, side labels at 600) · **14.5 / 22.475** (CTA, bullets) ·
      **14 / 21.7** (views) · **13.5 / 20.925** (note) · **12.5 / 19.375** (chip) · **12 / 18.6** (flag) ·
      **46 / 46** (amount, 800, `-.04em`, `tabular-nums`)
- [x] one shadow only — the knob's `0 2px 6px rgb(0 0 0 / .25)`. **The cards have no shadow** (do not carry the
      previous variant's card shadow across)
- [x] section `max-width: 1200px`, `font-size: 15px`, `line-height: 1.55`; `<main>` `padding: clamp(40px,7vw,92px) 16px`
      on `bg-ground`

## 2. Head (RED first)

- [x] head `mx-auto max-w-[680px] text-center`
- [x] `h1` `mb-3.5 text-[clamp(30px,4.5vw,48px)] font-extrabold tracking-[-.035em] leading-[1.08] [text-wrap:balance]`
      — **two** balanced lines, **103.66** tall at 1440
- [x] lede `<p>` 16.5 px `text-muted [text-wrap:balance]` — **2 lines**, **51.13**
- [x] test: head **680 × 168.78** at (380, 92); `h1` 2 × 51.84; lede 51.13

## 3. Billing row + switch

- [x] row `flex flex-wrap items-center justify-center gap-3.5 mt-9 mb-11 text-[15px] font-semibold` — **1200 × 34**
      at y 296.78
- [x] side labels `inline-flex items-center gap-2 text-muted transition-colors duration-200`; the first is ink while
      monthly is active, the last one while annual is; both `aria-hidden`
- [x] `Save 20%` chip `rounded-full bg-lime px-2.5 py-[3px] text-[12.5px] font-bold text-lime-ink` (name it
      something of your own — see the copy in the design notes)
- [x] switch `<button type="button" aria-pressed>` `relative h-[34px] w-[60px] rounded-full border-0 bg-track
    transition-colors duration-250 aria-pressed:bg-forest` with a **visually hidden** `<span>` whose text is
      **"Annual billing"** (a state name, not "Bill annually")
- [x] knob `<span aria-hidden>` `absolute left-1 top-1 h-[26px] w-[26px] rounded-full bg-white
    shadow-[0_2px_6px_rgb(0_0_0_/_.25)] transition-transform duration-300
    [transition-timing-function:cubic-bezier(.3,1.4,.5,1)]` + `translate-x-[26px]` when on
- [x] live region `<p role="status" aria-live="polite">` with the source's visually-hidden clip technique, **empty at
      mount**
- [x] test: switch **60 × 34** at (643, 296.78); knob **26 × 26** at 4/4; knob transform settles at **26 px**

## 4. Grid + a plan card

- [x] grid `grid gap-[18px] [grid-template-columns:repeat(4,minmax(0,1fr))]` (**write the raw track** — `grid-cols-4`
      compiles to `minmax(0,1fr)` but the explicit form documents the intent) — **1200 × 452.19**, columns **286.5**
- [x] card `relative flex flex-col rounded-[22px] border border-line bg-card px-6 pt-7 pb-[30px]`
- [x] name `h2` 19 px/700 `leading-[29.45px]`; views `mt-1 text-[14px] leading-[21.7px] text-muted`
- [x] price row `mt-[22px] mb-0.5 flex items-baseline gap-1.5`; amount `text-[46px] font-extrabold leading-none
    tracking-[-.04em] tabular-nums`; "/ mo" `text-[15px] font-semibold text-muted` (**baseline**, not centre)
- [x] note `min-h-[23px] mb-[22px] text-[13.5px] leading-[20.925px] text-muted`
- [x] CTA `block rounded-full bg-ink px-4 py-[11px] text-center text-[14.5px]/[22.475px] font-bold text-white
    transition-[background-color,transform] duration-200 hover:bg-cta-hover hover:-translate-y-px` — height **44.47**
- [x] list `mt-6` + `li` `relative py-[5px] pl-[26px] text-[14.5px]/[22.475px]` with a **14 × 14** tick at
      `top: 10px; left: 2px` (`lucide-react` `Check size={14} strokeWidth={2.4}` is the closest match) — item **32.47**
- [x] test: card **286.5 × 452.19** at (120, 374.78); name **29.44** @ 403.78; views **21.69** @ 437.22; price row
      **47.25** @ 480.91; note **23** @ 530.16; CTA **236.5 × 44.47** @ 575.16; lists **97.41 / 129.88 / 129.88 /
      152.34** @ 643.63

## 5. The featured card

- [x] `border border-forest bg-forest text-pop` — a **1 px** border, no `-my`, no `pt-12`, no shadow, no 2 px border
- [x] muted children (`views`, `/ mo`, note) `text-pop-muted`; CTA `bg-lime text-lime-ink hover:bg-[#d9f99d]`
      (`--color-pop-muted` doubles as the hover fill)
- [x] flag `<p>` `absolute right-5 top-6 rounded-full bg-lime px-2.5 py-[3px] text-[12px] font-bold text-lime-ink`
      — **79 × 24.59** at (915.5, 399.78) in the port (**85** in the reference)
- [x] test: featured box **identical** to its siblings (286.5 × 452.19), flag 13.22 px below the card's top edge and
      clear of the plan name's line box

## 6. Billing state machine

- [x] `useState(false)` for annual; the click handler derives everything from it (no DOM reads, no class toggles by
      hand)
- [x] `aria-pressed={annual}`; section class flips to the annual state; the four figures render from
      `[0, 15, 40, 100]` → `[0, 12, 32, 80]`; the four notes swap to the "billed yearly" strings in the same frame
- [x] count-up: per-figure `requestAnimationFrame`, **600 ms**, ease-out cubic `1 − (1 − t)³`, started from the
      **currently displayed** number; cancel the previous frame on a re-click; a figure whose target equals its start
      (**0**) is set, not animated
- [x] `matchMedia('(prefers-reduced-motion: reduce)').matches` → set every figure in one frame, skip the loop
- [x] status text: `Annual billing: prices shown per month, billed yearly.` / `Monthly billing.`
- [x] tests: click → 12/32/80 + the three notes + the status sentence; second click → 15/40/100 + "Monthly billing.";
      rapid double click restarts from the mid-flight value; reduced motion lands instantly; the free plan never
      animates

## 7. Responsive ladder

- [x] at **≤1080**: `[grid-template-columns:repeat(2,minmax(0,1fr))] max-w-[720px] mx-auto` — cards **351** wide,
      **429.72** tall, document **1311**
- [x] at **≤600**: one column — cards **568** wide at 600, card 1 **397.25** and cards 2–4 **429.72**
- [x] nothing else changes: **no** padding step, **no** type step, **no** `min-h` reset in the breakpoints
- [x] test every stop in the spec's ladder (919 / 914 / 903 / 914 / 909 / 1311 / 1294 / 1226 / 1201 / 1189 / 1180 /
      1202 / 1201 / 1196 / 2036 / 2057 / 2090 / 2115 / 2155 / 2177) plus the port footer's height, and `scrollX = 0`
      at 320, 331, 360, 375, 390, 428, 480, 560, 600, 601, 640, 645, 700, 768, 900, 1000, 1080, 1081, 1120, 1280, 1440

## 8. Contrast, motion, a11y

- [x] `motion-reduce:transition-none motion-reduce:hover:translate-y-0`; **zero `@keyframes`** in the app
- [x] focus rings: 3 px / 3 px, `#14532d`; the featured CTA's ring lime (`focus-visible:outline-lime`)
- [x] contrast asserted in a test: ink 16.37 / 17.20, muted 7.14 / 7.50, pop body 8.80, pop muted 7.80,
      lime-on-green 6.97, chip ink 11.19, white-on-ink 17.49, **track 3.61** (the fixed `#8a8079`), knob 3.86
- [x] a11y shape: one `h1`; `aria-labelledby` on the section and on each `<article>` pointing at its own `<h2>` id;
      real `<ul>`/`<li>`; switch named **"Annual billing"**; both side labels `aria-hidden`; status region empty at
      mount; four resolving CTAs (**no `href="#"`**)

## 9. Footer + verify

- [x] slim Component Dock strip under the section: 13 px muted, one link `https://www.componentdock.com/` labelled
      **"Component Dock"**; no new colour, radius or band
- [x] `npm run verify:app tallyboard` (typecheck + lint + 100 % coverage + build)
- [x] `openspec validate template-tallyboard --type spec`
- [x] `grep -riE 'colorlib|quillmetric|pricing-table-02|hobby|team of ten' apps/tallyboard` → 0 hits
- [x] `npm run readme:status` and the TEMPLATES.md bookkeeping: row under `## Bootstrap Pricing Tables (12)`
      (create the section immediately before `## Bootstrap Wizards (30)` if the first variant has not shipped)
      `- [x] **Pricing Table 02** — [colorlib](https://colorlib.com/wp/template/pricing-table-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-02.jpg) · [tallyboard](https://tallyboard.free.componentdock.com)`
- [x] deploy: `gh workflow run deploy-surge.yml -f app="tallyboard"`, then the demo-health probe (HTTPS 200 +
      `ssl_verify_result=0` via `scripts/audit-deployments.sh`)
