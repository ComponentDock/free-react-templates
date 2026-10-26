# Beaconry — task outline

Recreation of the ColorLib **Alert V06** design (`alert-06`) at `apps/beaconry`. Spec is the authority:
`openspec/specs/template-beaconry/spec.md`. Design notes: `docs/templates/beaconry/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-06/` (the slug-only
`theme/alert-06/` and `theme/bb/alert-06/` are both 404 — this family lives under `bootstrap/`).
Check boxes only as work ships.

> This is **one dark panel listing four alerts**, not a page: no nav, no hero, no bands, **0 images,
> 0 forms, 0 scripts**, 1 heading, 1 id. The reference is **3,955 B of HTML and one 11,966 B
> stylesheet** — there is no JavaScript at all, so the work is arithmetic plus one dialog.
>
> The risk is not a missing section — it is the six things a port flattens: the panel is
> **`content-box`** (`max-width: 760` = **810 outer**, and exactly `vw − 32` below 842); the info tone
> is the **base** `--cl-alert06-tone`, so its modifier class styles nothing; only the **critical** row
> is tinted, and the reference's own `:hover` **destroys that tint** (the `background` shorthand wipes
> the gradient) — the port must not; a row's height is a stack (**107.5 = 2 + 32 + 22.5 + 4 + 21 + 8 +
> 18**), not a setting; the **≤560** layout moves the action under the body and makes each card taller
> while the panel gets shorter; and the header's tally has to be **computed**, because the reference's
> own tally is arithmetically wrong.
>
> Five numbers decide fidelity: panel **810 × 606.75** at (315, 88); header **55.75**; list **481**;
> rows **107.5 / 107.5 / 128.5 / 107.5**; action **35.5** tall with widths **81 / 72 / 68 / 83**.
>
> The reference's defects are **not** to be reproduced: four dead `#` fragments, a tally that says
> "2 resolved" over one resolved row and no info row at all, a hover that erases the critical tint,
> `role="alert"` on static content, a **1.27 : 1** control border, a README advertising a `js/` folder
> and an `images/` folder that do not exist, and an asymmetric reduced-motion fallback that leaves the
> warning dot blank.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest static app> apps/beaconry` (no router, no data fetching — only the dialog
      is stateful); rename the package to `@free-react-templates/beaconry`
- [ ] `public/CNAME` = `beaconry.free.componentdock.com`; `"homepage"` =
      `https://beaconry.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] add the two Google Fonts faces (`Inter:wght@400;500;600;700`,
      `JetBrains+Mono:wght@400;500`) — both verified **200**

## 1 — Tokens

- [ ] `@theme` block: ground `#06080d`; panel `#111723` → `#0c111a`; hairline
      `rgba(148,163,184,.14)`; wash `rgba(255,255,255,.025)`; chip `rgba(255,255,255,.06)`;
      ink `#e6ebf2`; name `#f5f8fc`; desc `#b3bdcc`; muted `#97a3b6`; env `#7dd3fc`
- [ ] four tones as one map in TS: critical `#fb7185` (wash `.10→.02`, border `.35`, glow `.60`),
      warning `#fbbf24` (glow `.50`), info `#38bdf8` (glow `.55`), ok `#34d399` (glow `.45`)
- [ ] radii 20 / 14 / 6 / 8 / 50 %; panel shadow `0 40px 80px -40px rgba(0,0,0,.8)`; dot shadow
      `0 0 0 3px rgba(255,255,255,.04), 0 0 12px 2px var(--glow)`

## 2 — Shell

- [ ] `<main>` wrapper: `min-height: 100vh`, `display: flex; justify-content: center;
      align-items: flex-start`, `padding: clamp(24px, 7vw, 88px) 16px`, ground `#06080d` plus the two
      radial tints (blue `rgba(56,189,248,.10)` at 20 % 0 %, rose `rgba(244,63,94,.08)` at 90 % 100 %)
- [ ] panel `<section aria-labelledby>`: content-box, `max-width: 760px`, `padding: 24px`, radius 20,
      `1px solid` hairline, gradient surface, `line-height: 1.5`, ink `#e6ebf2`
- [ ] assert 900 px document height at 1440 × 900 (no scroll) and `vw − 32` outer width at 841

## 3 — Header

- [ ] `<header>`: `flex-wrap`, `gap: 12px 24px`, `align-items: flex-end`,
      `justify-content: space-between`, `margin-bottom: 20px` → **55.75** tall at 1440
- [ ] environment line: mono 12.5 / 18.75, `#7dd3fc`, `margin: 0 0 4px`
- [ ] `h1`: 22 / 33, 600, `letter-spacing: −0.22px`, `#e6ebf2`, `margin: 0`
- [ ] tally `<ul aria-label="Summary">` with **four** pills (critical, warning, info, resolved),
      `padding: 5px 11px`, radius 999, hairline border, 12.5 / 18.75 500, `#97a3b6`, `gap: 8px`,
      7 px pips in the tone, `aria-hidden`
- [ ] counts derived from the row data; a fixture with **non-uniform** severities proves it
- [ ] re-measure the header wrap thresholds with the fourth pill (the reference's 528 / 361 move)

## 4 — Rows

- [ ] `<ul>` `display: grid; gap: 10px` → **10** between cards, **481** tall at 1440
- [ ] row `<li>`: `grid-template-columns: auto 1fr auto`, `gap: 16px`, `align-items: start`,
      `padding: 16px 18px`, radius 14, hairline border, `rgba(255,255,255,.025)` wash
      → **107.5** tall (row 3 **128.5** with a two-line description)
- [ ] critical row: rose gradient `90deg, rgba(251,113,133,.10) → rgba(251,113,133,.02) 60%` and a
      rose border `.35`; **no other row tinted**
- [ ] dot: 10 × 10, `margin: 7px 4px 0` inside the 18 px column, box-shadow ring
- [ ] body: chip (mono 11.5 / 17.25, 500, `+0.46px`, uppercase, `padding: 1px 8px`, radius 6, chip
      wash, ink = tone) + headline (15 / 22.5, 600, `#f5f8fc`) on one wrapping flex line
      (`gap: 6px 10px`); description 14 / 21 `#b3bdcc` `margin-top: 4px`; meta mono 12 / 18
      `#97a3b6` `margin-top: 8px`, `gap: 4px 16px`, no separators
- [ ] action: real `<button type="button">`, 35.5 tall, `padding: 7px 12px`, radius 8, 13 / 19.5 500,
      ink, `white-space: nowrap`, border `rgba(148,163,184,.6)`; hover border = tone + ground
      `rgba(255,255,255,.05)`; `:focus-visible` 2 px tone at offset 2
- [ ] hover on any row changes **`background-color` only** — the critical row keeps its gradient

## 5 — Motion

- [ ] `@keyframes`: `opacity .6 → 0`, `transform: scale(1) → scale(3)`, `ease-out`, `infinite`
- [ ] critical dot **1.6 s**, warning dot **2.6 s**; info and ok static
- [ ] `prefers-reduced-motion: reduce`: both animations off, **both** dots keep a static ring
      (opacity ~.25, scale 2) — never one blank dot

## 6 — Dialog

- [ ] four action buttons open a `<dialog>` via `showModal()`, labelled by the row's headline, showing
      severity, full description, meta pairs and a short timeline
- [ ] Close button + `Escape`; focus returns to the triggering button; background inert and not
      scrollable while open
- [ ] rows stay static — no acknowledge, no dismissal, no timers

## 7 — Responsive

- [ ] `max-width: 560px`: panel `padding: 18px 14px`; row `grid-template-columns: auto 1fr`,
      `gap: 12px`, `padding: 14px`; action `grid-column: 2; justify-self: start`
- [ ] verify the inversion: panel **738** at 561 vs **831.75** at 560; cards **172** in two columns
- [ ] verify the ladder: head 55.75 / 98.5 / 137.25 at 529 / 362 / 361; row 2 107.5 at ≥696; row 4
      107.5 at ≥744; row 3 149.5 at 561–621
- [ ] `scrollX` 0 and `scrollWidth === clientWidth` at 300 → 1440

## 8 — Semantics, tests, repo wiring

- [ ] `<ul>` / `<li>` rows, **no `role="alert"` / `role="status"`**, one `h1`, no `h2`–`h6`
- [ ] no `href="#"` and no unresolved fragment anywhere; the only anchor is the footer's Component Dock
- [ ] footer on the same ground, one line, linking `https://www.componentdock.com/` as "Component Dock"
- [ ] tests: tally arithmetic (non-uniform fixture), tone → class mapping for all four severities,
      dot animation class present for critical/warning only, dialog open/Escape/Close/focus-return,
      no-fragment assertion, `grid-column` at 560 vs 561, copy rendering per row
- [ ] 100 % coverage on the app (`npm run verify:app beaconry`)

## 9 — Bookkeeping (only after it ships)

- [ ] `TEMPLATES.md`: create `## Bootstrap Alerts (12)` between `## Bootstrap Accordions (20)` and
      `## Bootstrap Buttons (20)`; add `Alert 06` as the **sixth** entry, accordion grammar
      (`[colorlib] · [beaconry] · ![preview]`)
- [ ] README / catalogue blurb for the app; no ColorLib mention in any app file
