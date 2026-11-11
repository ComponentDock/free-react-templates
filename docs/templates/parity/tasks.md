# Parity — implementation tasks (ColorLib Pricing Table V03, `pricing-table-03`)

Spec: `openspec/specs/template-parity/spec.md` (45 KB, valid). Read it first; this file is the build order, not a
second spec. Every number below is a **port** number (Google IBM Plex Sans + port copy), measured 2026-11-11 on a
replica page built from the reference's own stylesheet with only the font source and the product name changed.

Order matters: the table first (steps 3–6) is 80 % of the risk, the two bulk controls (step 7) are the only state.

## 0. Scaffold

- [ ] `apps/parity` from the simplest existing app (`virga` is the current minimum); rename the package to
      `@free-react-templates/parity`; `public/CNAME` = `parity.free.componentdock.com`; `"homepage"` =
      `https://parity.free.componentdock.com`
- [ ] `<title>Parity — plan comparison</title>`, `theme-color: #f2f4f3`, description without the source name
- [ ] IBM Plex Sans 400/500/600/700 via the Google `css2` link — **pick the ASCII (`U+0000-00FF`) subset**; verify
      with `CSS.getPlatformFontsForNode` that no `DejaVu Sans` appears
- [ ] `npm run verify:app parity` green before any component work (empty shell)

## 1. Tokens (`@theme`)

- [ ] `--color-accent: #0f766e`, `--color-tint: #effaf8`, `--color-head-tint: #f0faf8`, `--color-ink: #0f1f1d`,
      `--color-muted: #4a5a57`, `--color-line: #e1e7e5`, `--color-hover: #f7f9f8`, `--color-ground: #f2f4f3`,
      `--color-cta-hover: #115e59`
- [ ] the two **fixed** tokens: `--color-cross: #6b7a76` (was `#8a9793`, 2.84 on the tint) and
      `--color-control-line: #8a9793` (was `#e1e7e5`, 1.25)
- [ ] `--pad: clamp(24px, 4vw, 48px)`; card `max-width: calc(1080px + 2 * var(--pad))`, `padding: var(--pad)`,
      `border-radius: 20px`, `background: #fff`, the two-layer shadow from the spec
- [ ] radius tokens: 20 (card), 16 (card ≤720), 14 (featured header cell top), 8 (buttons, CTAs, toggle ring), 999 (pill)

## 2. Shell + head (RED first)

- [ ] `main` `padding: clamp(36px, 6vw, 80px) 16px`, ground `#f2f4f3`, one `<section aria-labelledby>`
- [ ] eyebrow "Compare plans" 13/700 `.06em` uppercase accent; `h1` 38/700 `-0.02em` 1.15 `margin: 8 0 8`;
      lede 15/400 muted; head `margin-bottom: 32`
- [ ] assert head **1080 × 155.94** at (180, 128): 19.5 + 8 + 43.69 + 8 + 22.5 + 18 + 36.25

## 3. Toolbar

- [ ] two ghost buttons, `padding: 7px 14px`, `border: 1px var(--line)`, radius 8, 13.5/600; widths **97 / 105**;
      `gap: 8`, `margin-top: 18`, row height **36.25**
- [ ] hover swaps border + label to the accent; focus ring 3 px accent, offset **2**
- [ ] RED test: clicking "Collapse all" flips four `aria-expanded` values (wire to step 7's state)

## 4. The table frame

- [ ] `<table>` `width: 100%`, `table-layout: fixed`, `border-collapse: separate`, `border-spacing: 0` — all four are
      load-bearing; `border-collapse: collapse` kills the sticky borders and the 14 px radius
- [ ] `<caption>` present, visually hidden, naming the three plans
- [ ] `<colgroup>`: `col` **34 %** + `col span=3`; assert columns **367.19 / 237.59 / 237.59 / 237.63** (±0.05)
- [ ] assert table **1080 × 1260.5** at (180, 315.94)

## 5. The plan header row

- [ ] corner `<td>`: the note at 13/400 muted, `max-width: 200`, 2 lines, hanging from the bottom
- [ ] three `<th scope="col">`: `padding: 18px 14px 16px`, `vertical-align: bottom`, `border-bottom: 1px line`,
      `position: sticky; top: 0`, `background: rgba(255,255,255,.96)`, `backdrop-filter: blur(6px)` inside `@supports`
- [ ] featured cell: `background: #f0faf8`, `border-radius: 14px 14px 0 0`, pill **inside** at 6 px above the name
- [ ] stack: pill 21.25 (in a ≈23.25 line box — the strut is why the row is 193.75, not 191.75) · plan 25.5 ·
      price 34.5 (`margin-top: 2`) · per 19.5 · CTA 37 (`margin-top: 12`)
- [ ] assert header row **193.75**, pill **64.63 × 21.25** at (798.78, 334.94), CTA **97 × 37** at (455.69 y)
- [ ] RED test: sticky — at `scrollY 400` the `<th>`'s `top` is 0; at `scrollY 200` it is 115.94

## 6. Groups and rows

- [ ] four `<tbody>`s; a `ghead` `<tr>` with `<th scope="rowgroup" colspan="4">` holding the toggle button
      (`padding: 26px 14px 10px`, `gap: 12`, 15/700), the count (13/400 muted), and an 18 × 18 chevron pushed right by
      `margin-left: auto`
- [ ] rows: `<th scope="row">` 14.5/400 `#26332f`, three `<td>`s 14/400 ink, `padding: 13px 14px`, 1 px bottom rule;
      every cell carries `headers="<group> <feature> <plan>"`; every tick/cross carries a hidden label
- [ ] 17 rows of data: 5 / 4 / 4 / 4, with **21 ticks, 15 crosses, 15 values** and the exact matrix in the spec
- [ ] row hover `#f7f9f8` on the `th` + the two plain cells only; the featured cell keeps `#effaf8`
- [ ] assert rows **48.75**, group 1 **303.25**, groups **303.25 / 254.5 / 254.5 / 254.5**
- [ ] the tick is a filled 20 × 20 circle (`#0f766e`) with a white 2 px check, the cross a 20 × 20 stroke at
      `--color-cross`, the chevron 18 × 18 — three inline SVGs, no icon package required

## 7. Expansion state

- [ ] `useState<Record<GroupId, boolean>>` → `hidden` on each row (keep the rows mounted), `aria-expanded` +
      `aria-controls` on each toggle, two bulk setters
- [ ] collapse one 5-row group → document **1704 → 1461**; a 4-row group → **−195**; all closed → **900** (floor) and
      table **431.75**; expand all → **1704**
- [ ] chevron: `rotate(-90deg)` when closed, `transition: transform .2s`
- [ ] fake timers not needed — no JS animation, only the CSS transition on the chevron
- [ ] RED test: fresh mount at ≤ 720 opens **group 1 only** (read `matchMedia` once at mount; do **not** subscribe)

## 8. Responsive ladder

- [ ] at ≤ 720: card `padding: 20px 12px`, radius 16; `colf: 37 %`; thead `padding: 12px 6px 10px`; note 11.5;
      pill 10.5/`1px 7px`; plan 14; price 20; rows `padding: 11px 6px`; `th` 13.5; `td` 12.5 +
      `overflow-wrap: anywhere`; toggle `padding: 20px 6px 10px`, `flex-wrap: wrap`
- [ ] `__per` and `__cta` **hidden** at ≤ 720 — and add the mobile CTA path from spec delta 8 (a compact CTA row
      under the table) or the page has no signup on a phone
- [ ] assert the 721 → 720 inversion: table **631.34 → 664**, thead **193.75 → 96.75**, rows **48.75 → 43.25**
- [ ] assert the ladder at 1440/1280/1200/1120/1080/1000/900/800/768/721/720/700/650/600/560/520/500/480/414/390/375/
      360/331/320 from the spec table
- [ ] `scrollWidth === clientWidth` and `scrollX === 0` at every one of those widths

## 9. Contrast, motion, a11y

- [ ] contrast test over the token pairs (ink 17.02, muted 7.26, accent 5.47, white-on-accent 5.47, row `th` 13.15,
      cross 4.22, control border 3.03)
- [ ] `prefers-reduced-motion` → the three transitions become `none`; zero `@keyframes` in the app's CSS
- [ ] `scope`, `headers`, `<caption>`, hidden `Included`/`Not included`, three resolving CTAs, `aria-controls`
- [ ] one `<h1>`, no `<h2>`, no `<img>`

## 10. Footer + verify

- [ ] Component Dock strip on the ground, 13/400 muted, one link to `https://www.componentdock.com/`
- [ ] `npm run verify:app parity` (typecheck + lint + 100 % coverage + build)
- [ ] `grep -riE 'colorlib|pricing-table-03|tallyboard' apps/parity` → 0
- [ ] README status, then the `TEMPLATES.md` row under `## Bootstrap Pricing Tables (12)` (create before
      `## Bootstrap Wizards (30)` if no sibling shipped), then `gh workflow run deploy-surge.yml -f app="parity"`
