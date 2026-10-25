# Statline — task outline

Recreation of the ColorLib **Card V06** design (`card-06`) at `apps/statline`. Spec is the authority:
`openspec/specs/template-statline/spec.md`. Design notes: `docs/templates/statline/design-notes.md`.
Check boxes only as work ships.

> This is a **section, not a site**: one band on a cool grey ground with a two-part head and four KPI cards.
> The reference is **6,439 B of HTML + one 8,892 B stylesheet, 13 inline SVGs, 0 images, 0 authored scripts,
> 0 anchors, 0 forms and not one width query**.
> The risk is not a missing band — it is *inventing* one (a nav, a filter bar, a "view report" CTA, a chart
> legend, a table) or "improving" the five details that make it work: **the per-card accent that tints only the
> icon chip, the sparkline and its gradient**, **`vector-effect: non-scaling-stroke`** (without it every line is
> 4 px thick), **`good`/`bad` as sentiment rather than direction** (card 4 is a falling green arrow),
> **`tabular-nums` on the values and pills**, and **the off-ramp greys** `#eef1f6` / `#eef2f7` that are not
> Tailwind slate.
>
> Three numbers decide fidelity: the card is **286.5 × 256.38** with **244.5 px** of content at 1440, the band
> is **481.38** tall (shorter than a 900 px window — the empty lower half is the design), and the grid is
> **4 → 3 → 2 → 1** columns at **1,046 / 788 / 530** with **no `@media` width query at all**.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/statline`; rename the package to `@free-react-templates/statline`
- [ ] `public/CNAME` = `statline.free.componentdock.com`; `homepage` = `https://statline.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/statline" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Inter 400;500;600;700**
      (`css2?family=Inter:wght@400;500;600;700&display=swap`), `preconnect` to `fonts.gstatic.com` — **not**
      the reference's eight self-hosted `woff2` names (which are two binaries repeated, see notes Trap 1)
- [ ] `@theme` in `src/index.css`: `--color-ground: #eef1f6`, `--color-ink: #0f172a`,
      `--color-muted: #475569`, `--color-faint: #64748b`, `--color-chip-ink: #334155`,
      `--color-card-line: #e2e8f0`, `--color-card-line-hover: #cbd5e1`, `--color-chip-line: #d8dee8`,
      `--color-foot-rule: #eef2f7`, `--color-good: #15803d`, `--color-good-bg: #dcfce7`,
      `--color-bad: #be123c`, `--color-bad-bg: #ffe4e6`, the four accents
      (`--color-accent-indigo: #4f46e5`, `--color-accent-cyan: #0891b2`, `--color-accent-pink: #db2777`,
      `--color-accent-green: #16a34a`), `--radius-card: 16px`, `--radius-chip: 10px`,
      `--font-sans: "Inter", system-ui, …`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] no new dependency: 13 SVGs are inline, the sparklines are hand-drawn paths, and there is **no chart
      library** (recharts/chart.js/d3 would all change the geometry)
- [ ] **do not port the `:where(html) … { all: revert; }` anti-Bootstrap guard** (55 lines + six
      `::-webkit-datetime-edit` selectors + a `[hidden]` re-hide) — Tailwind's preflight is the equivalent
- [ ] ⚠️ **box-sizing:** the reference's container is `max-width: 1200px` *content-box*, i.e. **1,232 px**
      outer. With Tailwind's border-box write `max-w-[1232px] px-4` (content 1,200) — **not**
      `max-w-[1200px] px-4`, which shrinks the content box to 1,168 and every card to 278.5 px
- [ ] keep `box-sizing: border-box` **inside** the cards (the reference sets it on `.cl-card06 *`)

## 1 — Primitives

- [ ] `MetricCard` — `<li>`, white plate, `border: 1px solid #e2e8f0`, radius **16**,
      `padding: 20px 20px 16px`, `font-size: 14px; line-height: 1.4`, `0 1px 2px rgba(15,23,42,.04)`,
      **`position: relative`** (the hidden span needs it), `display: flex; flex-direction: column`
- [ ] hover — `border-color: #cbd5e1`, `box-shadow: 0 10px 28px -18px rgba(15,23,42,.35)`,
      `transition: border-color .2s ease, box-shadow .2s ease`; **no** transform/scale/ring; `transition: none`
      under `prefers-reduced-motion: reduce`
- [ ] the four cards come from **one array** of `{ label, value, foot, accent, tone, dir, path, gradientId? }`
      — not four components, not `nth-child` selectors
- [ ] `CardTop` — `flex; align-items: center; justify-content: space-between; gap: 12px`; `__label` **14/500**
      `#475569`, one line; `IconChip` **34 × 34**, radius **10**, `grid; place-items: center`,
      `background: color-mix(in srgb, {accent} 12%, #fff)`, `color: {accent}`, glyph **18 × 18**
      `stroke-width: 2` round caps/joins, wrapper `aria-hidden="true"`
- [ ] `Value` — **30 / 700 / 1.1 / −.03em**, `tabular-nums`, `#0f172a`, `margin: 10px 0 6px`
- [ ] `DeltaPill` — `<p>` `inline-flex; align-items: center; gap: 4px; align-self: flex-start`,
      `padding: 3px 8px 3px 6px`, radius **999**, **13/600**, `tabular-nums`, a **14 × 14** arrow
      (`aria-hidden`), the number, then a visually-hidden `<span>` (` increase` / ` decrease` /
      ` decrease, an improvement` — leading space included)
- [ ] tone → paint is a **lookup on data**, never derived from `dir`: `good` = `#15803d` on `#dcfce7`,
      `bad` = `#be123c` on `#ffe4e6`. Card 4 is **down + good**
- [ ] `Sparkline` — `<svg viewBox="0 0 120 40" preserveAspectRatio="none" role="img" aria-label="…"
      style="overflow: visible">`, `width: 100%; height: 56px; margin: 14px 0 10px`, `<defs>` with a
      **per-instance unique id** (`useId`), `linearGradient x1="0" x2="0" y1="0" y2="1"` stops accent
      **.28 → 0**, area path (`line path` + `L120 40 L0 40 Z`, `fill="url(#id)"`), line path
      (`stroke: accent; stroke-width: 2; fill: none; stroke-linecap/linejoin: round;
      **vector-effect: non-scaling-stroke**`)
- [ ] `Footnote` — `padding-top: 12px`, `border-top: 1px solid #eef2f7`, **13/400**, `#64748b`, one line,
      `margin: 0`

## 2 — The band

- [ ] `MetricBand` — `<main>` on `#eef1f6`, `max-width: 1232px` (**border-box**, = 1,200 content),
      `margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`, `color: #0f172a`
- [ ] header — `<header>` `flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between;
      gap: 16px; margin-bottom: 24px`; left `div` holds `h1` **28/700/−.02em** (line-height **normal**, 34 box)
      and the sub **15/400** `#475569` with `margin-top: 4px`
- [ ] date chip — `<p>` `inline-flex; align-items: center; gap: 8px; padding: 9px 14px`,
      `border: 1px solid #d8dee8`, radius **10**, `background: #fff`, **14/500** `#334155`, a **16 × 16**
      calendar glyph (`stroke-width: 2`), text **`26 Aug – 24 Sep 2026`** with an **en dash**
- [ ] grid — `<ul>` `grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]`, `list-style: none`,
      `margin: 0; padding: 0`; **no `sm:`/`md:`/`lg:` prefix and no `@media`** — the 4 → 3 → 2 → 1 ladder must
      fall out of the track maths
- [ ] page footer — one small line of print below the band linking **https://www.componentdock.com/**
      ("Component Dock"), styled like the card footnote; it is the app's **only** link and only focusable
      element
- [ ] `prefers-reduced-motion` — one `motion-reduce:transition-none` on the card (there are no keyframes to
      disable)

## 3 — Content

- [ ] head verbatim: `h1` **"Overview"**, sub **"Store performance, last 30 days compared with the previous
      30."**, chip **"26 Aug – 24 Sep 2026"**
- [ ] card 1 **Net revenue** · **$84,210** · ↑ **12.4%** (good) · *vs $74,920 previous period* · `#4f46e5`
- [ ] card 2 **Orders** · **1,286** · ↑ **4.1%** (good) · *vs 1,235 previous period* · `#0891b2`
- [ ] card 3 **Conversion rate** · **3.18%** · ↓ **0.4 pts** (bad) · *vs 3.58% previous period* · `#db2777`
- [ ] card 4 **Refund rate** · **1.9%** · ↓ **0.6 pts** (**good**) · *vs 2.5% previous period* · `#16a34a`
- [ ] sparkline paths verbatim (spec Requirement 7): card 1 `M0 32 L10 30 … L110 8 L120 6`, card 2
      `M0 24 L10 20 … L110 14 L120 12`, card 3 `M0 20 L10 17 … L110 21 L120 25`, card 4
      `M0 10 L10 12 … L110 28 L120 29` — jagged `L` segments, no curves
- [ ] glyphs drawn, never copied as files: dollar (`M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0
      7H6`), bag (`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z` + `M3 6h18M16 10a4 4 0 0 1-8 0`),
      chart (`M3 3v18h18` + `m7 14 4-4 3 3 5-6`), refund (`M3 12a9 9 0 1 0 3-6.7L3 8` + `M3 3v5h5`)
- [ ] arrows: up `M8 13V3M4 7l4-4 4 4`, down `M8 3v10M4 9l4 4 4-4`; calendar
      `rect 3 4 18 18 rx 2` + `M16 2v4M8 2v4M3 10h18`
- [ ] sparkline `aria-label`s verbatim: "Revenue trend, rising steadily over 30 days", "Orders trend, uneven
      with a small rise at the end", "Conversion trend, peaking mid-month then falling", "Refund trend, falling
      over 30 days"
- [ ] **no images** (0 `<img>`), **no authored script** (0 `<script>`), no chart library, no canvas; no ColorLib
      word and no `card-06` anywhere in the app (comments and test names included)

## 4 — Verification

- [ ] columns **1 / 1 / 1 / 1 / 1 / 1 / 1 / 2 / 2 / 2 / 3 / 3 / 4 / 4 / 4** and card widths
      **288 / 328 / 358 / 443 / 444 / 448 / 497 / 240 / 324.5 / 359 / 368.5 / 325.7 / 240 / 286.5 / 286.5** at
      320 / 360 / 390 / 475 / 476 / 480 / 529 / 530 / 699 / 768 / 788 / 1,045 / 1,046 / 1,280 / 1,440
- [ ] band heights **1,296.5 / 1,296.5 / 1,296.5 / 1,296.5 / 1,277.5 / 1,277.5 / 1,277.5 / 728.75 / 748.63 /
      703.92 / 706.31 / 737.13 / 462.88 / 481.38 / 481.38** at the same widths (plus **706.19** at 787 and
      **734.64** at 1,024)
- [ ] `body.scrollWidth === clientWidth` **and** `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 480 / 529 /
      530 / 768 / 787 / 788 / 1,024 / 1,045 / 1,046 / 1,280 / 1,440
- [ ] card **286.5 × 256.38** at 1440; stack `__top` **34** / value **33** at y 218 / pill **24.19** at y 257 /
      spark **244.5 × 56** at y 295.19 / foot **31.19** at y 361.19; card bottom **409.38**
- [ ] **card height 256.38 at every width from 320 to 1,440** (the design's stable axis) and every label,
      footnote and pill on **one line** everywhere
- [ ] head **57** while the chip is inline (**≥ 700**), **110** when it drops (**≤ 699**), **129** below
      **476**; `h1` one line at every width
- [ ] pill widths **73 / 64 / 75 / 76**, heights **24.19**; `good`/`bad` from data, card 4 down + green
- [ ] sparkline lines **2 px** at any width (`vector-effect: non-scaling-stroke` present, `preserveAspectRatio
      ="none"` present); line bboxes **36.4 / 19.6 / 22.4 / 28** tall at offsets **8.4 / 16.8 / 12.6 / 12.6**;
      four **distinct** gradient ids
- [ ] icon tint computed as `color(srgb …)` (`#eae9fc` / `#e1f2f6` / `#fbe5ef` / `#e3f4e9`), glyph colour equals
      the accent exactly
- [ ] one `h1` + four `h2`, `lang="en"`, icons/arrows/calendar `aria-hidden`, sparklines `role="img"` with their
      labels, hidden pill text clipped **and not widening the pill**
- [ ] Inter **400/500/600/700** from Google Fonts only; no bundled `woff2`, no `font-synthesis: none`; the
      faux-bold note (notes Trap 1) carried into the PR
- [ ] `grep -ri colorlib apps/statline` and `grep -ri 'card-06' apps/statline` → no matches
- [ ] 100 % coverage, `scripts/verify-app.sh statline` green
- [ ] after shipping: add the row from the spec under the new `## Bootstrap Cards (20)` section, between
      `## Bootstrap Carousels (20)` and `## Bootstrap Checkboxes (20)`, and mark it `[x]` (the implementer
      stream owns `TEMPLATES.md`, not the prep)
