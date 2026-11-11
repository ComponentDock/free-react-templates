# Limelight — implementation tasks (ColorLib Pricing Table V04, `pricing-table-04`)

Spec: `openspec/specs/template-limelight/spec.md` (46 KB, valid). Read it first; this file is the build order, not a
second spec. Every number below is the **reference** number, measured 2026-11-11 at 1440 × 900 on the live preview and
reproduced to the hundredth by the archive twin.

There is **no state on this page** — no toggle, no observer, no timer, no script at all. The risk is entirely spatial:
the dark ground's five background layers, the featured card's gradient border, and the 0.66 px fit that Google's font
breaks. Build it top-down and assert rects as you go.

## 0. Scaffold

- [x] `apps/limelight` from the simplest existing app (`virga` is the current minimum); rename the package to
      `@free-react-templates/limelight`; `public/CNAME` = `limelight.free.componentdock.com`; `"homepage"` =
      `https://limelight.free.componentdock.com`
- [x] `<title>Limelight — creator pricing</title>`, `theme-color: #08060f`, description without the source name
- [x] Space Grotesk 400 / 500 / 700 via the Google `css2` link — **take the `U+0000-00FF` ASCII subset**; confirm with
      `CSS.getPlatformFontsForNode` that the `h1` reports the custom face and **no** DejaVu
- [x] `npm run verify:app limelight` green on the empty shell before any component work

## 1. Tokens (`@theme`)

- [x] `--color-neon-pink: #f472b6`, `--color-neon-cyan: #22d3ee`, `--color-neon-violet: #a78bfa`,
      `--color-ink: #f5f3ff`, `--color-muted: #b9b3d1`, `--color-ground: #08060f`
- [x] `--color-card-top: rgba(30,22,52,.9)`, `--color-card-bottom: rgba(18,14,32,.95)`,
      `--color-feat-top: #221538`, `--color-feat-bottom: #140f24`
- [x] the **fixed** token `--color-cta-line: rgba(167,139,250,.6)` (shipped `.45` = 2.33 : 1; `.6` = 3.12 / 3.43)
- [x] radii 20 / 12 / 6 / 999; gap **22**; section `max-width: 1120px`; wrapper padding `clamp(48px, 8vw, 104px) 16px`

## 2. Ground + shell (RED first)

- [x] `main` with the **five** background layers in order: pink radial (38 % 30 % at 18 % 8 %, `rgba(236,72,153,.22)`),
      cyan radial (34 % 30 % at 85 % 20 %, `rgba(34,211,238,.18)`), violet hairline `1px` at 7 % on a **44 px** tile,
      the same at `90deg`, `#08060f`
- [x] one `<section aria-labelledby>` inside; assert **1440 × 1081.77** wrapper and **1120 × 873.77** at (160, 104)
- [x] assert the document is **1082** tall at 1440 × 900 — before the port footer

## 3. Head

- [x] eyebrow pill: `inline-flex`, `gap: 8`, `padding: 6px 14px`, `border: 1px rgba(167,139,250,.35)`, radius 999,
      `background: rgba(167,139,250,.08)`, `#ddd6fe`, 13 / 500 → assert **196 × 34.14** at (622, 104)
- [x] the 8 px `#4ade80` dot with `box-shadow: 0 0 10px #4ade80`, `aria-hidden`, 8 px in from the pill's padding edge
- [x] `h1` `clamp(34px, 5.6vw, 60px)` / 700 / `-.03em` / `1.02`, `margin: 18px 0 14px` → **61.19** at y 156.14, one line
- [x] the glow word: a `<span>` in `#22d3ee` with `text-shadow: 0 0 24px rgba(34,211,238,.55)` — its rect is
      **192.2 × 77** (inline box), not the 61.2 line box; do not "fix" that with `display: inline-block`
- [x] lede 16.5 / 400, `#b9b3d1`, `text-wrap: balance` → **51.13** (2 lines) at y 231.33; head `margin-bottom: 56`

## 4. The grid and a plain card

- [x] grid `repeat(3, minmax(0, 1fr))`, `gap: 22`, `align-items: stretch` → **1120 × 577.63**, tracks
      **358.656 / 358.672 / 358.656**, cards at x **160 / 540.66 / 921.33**
- [x] card `flex column`, `padding: 30px 28px 28px`, radius 20, `border: 1px rgba(167,139,250,.2)`,
      `linear-gradient(180deg, rgba(30,22,52,.9), rgba(18,14,32,.95))`, `position: relative`
- [x] icon tile **46 × 46** at y 369.45, radius 12, per-plan wash + inset 1 px ring, `<svg>` 24 × 24 inset 11 px
- [x] name 22 / 700, `margin: 20px 0 4px` → **34.09** at y 435.45; description 14.5 / 22.475 `#b9b3d1`
- [x] price row: `flex`, `align-items: baseline`, `gap: 6`, `margin: 22px 0`, `padding-bottom: 22px`,
      `border-bottom: 1px dashed rgba(167,139,250,.25)` → **73** tall; amount 50 / 700 / `-.04em` / `lh 1`
- [x] `/ month` only on the paid plans (15 / 400, `#b9b3d1`, baseline-aligned)
- [x] list `flex: 1`, `margin: 0 0 28px`, `list-style: none`; `li` **34.47** (`padding: 6px 0 6px 28px`), sparkle
      `::before` **12 × 12** at `top: 12; left: 2` — cyan on plain, pink on featured
- [x] CTA `block`, `padding: 13px 18px`, radius 12, 15 / 700 centred, `border: 1px var(--color-cta-line)` → **51.25**
- [x] assert all three CTA bottom edges **887.08** and the stretch slack in each list (**194.81 / 174.34 / 172.34**)

## 5. The featured card

- [x] `border: 1px solid transparent` + **two** backgrounds: `linear-gradient(180deg, #221538, #140f24) padding-box`
      and `linear-gradient(135deg, #f472b6, #a78bfa 50%, #22d3ee) border-box` (Tailwind: `bg-clip-padding` +
      `bg-origin-border` + both layers, or the arbitrary-value shorthand)
- [x] three shadows: `0 0 0 1px rgba(244,114,182,.15)`, `0 30px 80px -30px rgba(244,114,182,.6)`,
      `0 0 60px -20px rgba(34,211,238,.4)`
- [x] flag `absolute`, `top: 28; right: 24` (both resolve against the **padding** box → 29 / 25 from the outer edge) →
      **145.09 × 26.59** at (729.23, 367.45); `padding: 4px 10px`, radius 6, `90deg` pink→`#c084fc`, 12 / 700,
      `uppercase`, `.02em`; a sibling of the icon, never inside the `h2`
- [x] amount `text-shadow: 0 0 28px rgba(244,114,182,.6)`; CTA `border: 0`, gradient
      `#f9a8d4 → #c4b5fd 55% → #67e8f9`, `color: #16091f`, `0 10px 30px -10px rgba(244,114,182,.8)` → **49.25** tall

## 6. Hover, focus, motion

- [x] card hover `translateY(-4px)` + border `.2 → .45`, `250ms` ease; featured keeps `transparent` + its shadows
- [x] ghost CTA hover `background: rgba(167,139,250,.14)`, `200ms`; featured hover swaps to
      `#fbcfe8 → #ddd6fe 55% → #a5f3fc` + `0 12px 36px -8px rgba(34,211,238,.7)`
- [x] `:focus-visible` `outline: 3px solid #22d3ee; outline-offset: 3px` on all three anchors, nothing on cards
- [x] `prefers-reduced-motion: reduce` → `transition: none` + `transform: none` on hover; the page has **zero**
      `@keyframes` either way

## 7. The responsive step

- [x] `@media (max-width: 900px)`: grid `minmax(0,1fr)`, `max-width: 460`, `margin: 0 auto` → document **1096 → 2103**,
      cards **520.69 / 553.16 / 555.16** (no longer equal)
- [x] narrow ladder checks: 375 cards **543.16 / 575.63 / 577.63**; 331 cards **565.63 / 665.50 / 600.09**
- [x] `scrollX = 0` at 320 … 1440 (26 widths in the spec's sweep)

## 8. Contrast, a11y, copy

- [x] test the fixed CTA border: `rgba(167,139,250,.6)` → **3.12** on the card top, **3.43** on the bottom
- [x] test the pairs that pass: ink **15.70 / 15.54**, muted **8.55 / 9.40 / 8.46 / 9.28 / 10.00**, flag **7.13 / 7.15**,
      glow CTA **10.59 / 10.41 / 13.25**, eyebrow **13.32**, cyan **9.53**, pink **6.43**, violet **6.33**,
      focus ring **9.53 / 11.14**
- [x] Rookie description must fit **one line at 1440** in the served font (the reference's copy misses by 0.66 px and
      Google's version misses by 7 px): use e.g. `Everything you need to start streaming.` (286 px)
- [x] three resolving CTAs (no `href="#"`), `aria-labelledby` on each `article`, icons/dot/sparkles `aria-hidden`
- [x] **no** `:where(html){all:revert}` shield, **no** dead `.cl-icon` rule, **no** billing switch

## 9. Footer + verify

- [x] Component Dock footer strip as the last element, one link to `https://www.componentdock.com/`
- [x] `npm run verify:app limelight`; `openspec validate template-limelight --type spec`
- [x] `grep -riE 'colorlib|pricing-table-04|glitchcast' apps/limelight` → **0**
- [x] bookkeeping: `npm run readme:status`; **append** the `TEMPLATES.md` row **Pricing Table 04** under
      `## Bootstrap Pricing Tables (12)` (line **891**, after the Pricing Table 01 row — the section exists now, opened
      by `ratecard`'s shipment; `## Bootstrap Wizards (30)` is at **895**);
      `gh workflow run deploy-surge.yml -f app="limelight"`
