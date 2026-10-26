# Fieldguide — task outline

Recreation of the ColorLib **Alert V03** design (`alert-03`) at `apps/fieldguide`. Spec is the
authority: `openspec/specs/template-fieldguide/spec.md`. Design notes:
`docs/templates/fieldguide/design-notes.md`. Live reference:
`https://preview.colorlib.com/theme/bootstrap/alert-03/` (the slug-only `theme/alert-03/` and
`theme/bb/alert-03/` are both 404 — this family lives under `bootstrap/`). Check boxes only as work
ships.

> This is **a documentation article with four admonitions, not a site and not a component demo**: no
> nav, no hero, no footer band, no form, no image, **no script at all**. The reference is **4,423 B of
> HTML and one 7,108 B stylesheet**; `/js/snippet.js` returns a 9-byte soft 404 and the archive has no
> `js/` folder, so there is **nothing to port behaviourally**.
>
> The risk is not a missing band — it is the five things a port flattens: the callout radii are
> **one-sided** (`0 10px 10px 0`, square left corners against a 4 px spine); the tint is a
> **`color-mix(accent 8%, #fff)`** value (`#eef3fd` / `#ecf8f1` / `#f5effe` / `#fbf1e6`) and **not**
> Tailwind's `*-50`; each tone carries **two** colours (bright `accent` on the border, dark `ink` on the
> label and links); the prose is **17 px** while callout copy is **16 px in every band**; and the
> **Caution** callout has **no heading of its own** — it follows Important directly.
>
> Five numbers decide fidelity: article **720 × 923.84** at (360, 72); `h1` **43.69** at y 105.09;
> each callout **720 ≈ 107.88** with padding **14/18/14/20** and inner width **678**; label **23.09** at
> x **384** with an **18 × 18** icon; `main` **1088** tall at 1440.
>
> The reference's own defects are **not** to be reproduced: **4 dead `#` fragments**
> (`#plans`, `#cli`, `#signatures`, `#retries` — the page has no such ids), a phantom
> `.cl-alert03--note` class with no rule, a dead `.cl-icon` selector, a README advertising files that
> do not exist, and a screenshot that is a **macOS window mock-up** whose frame must never be adopted.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest static app> apps/fieldguide` (no router, no forms — this design has no
      state at all); rename the package to `@free-react-templates/fieldguide`
- [ ] `public/CNAME` = `fieldguide.free.componentdock.com`; `"homepage"` =
      `https://fieldguide.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/fieldguide" package-lock.json` → 1)
- [ ] `index.html`: title + **one** `Source Sans 3` `<link>`
      (`family=Source+Sans+3:wght@400;600;700`, verified 200 — the file is a variable cut)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #fbfaf7`, `--color-ink: #22262e`, `--color-muted: #5f6673`,
      `--color-rule: #9aa0ab`, `--color-chip: rgba(34,38,46,.07)`
- [ ] four tone pairs plus their resolved tints:
      note `#2563eb / #1d4ed8 / #eef3fd` · tip `#16a34a / #15803d / #ecf8f1` ·
      important `#7c3aed / #6d28d9 / #f5effe` · caution `#d97706 / #9a4a05 / #fbf1e6`
- [ ] **do not** use `blue-50` / `green-50` / `violet-50` / `amber-50` and **do not** reuse the
      siblings' shapes (no white row, no pastel icon tile, no glass, no shadow)
- [ ] one transition token: `text-decoration-thickness .15s ease` (the only motion in the design)

## 2 — Shell and article column

- [ ] `main`: `box-border min-h-screen` + `padding: clamp(24px,6vw,72px) 16px`, ground `#fbfaf7`
- [ ] article: `max-w-[720px] mx-auto` with `font-size: 17px; line-height: 1.65; color: #22262e`
- [ ] assert the article is **720** at x **360** at 1440 and `vw−32` at x **16** from 751 down
- [ ] no card, no radius, no shadow on the article (the page ground *is* the design)

## 3 — Crumb, title, prose

- [ ] crumb `p`: 14 / 23.1, `#5f6673`, `margin: 0 0 10px`, separators `/` in `#9aa0ab` with
      `margin: 0 6px` and `aria-hidden="true"`
- [ ] `h1`: `clamp(28px,4.4vw,38px)` / 700 / 1.15 / `-0.015em`, `margin: 0 0 14px`
- [ ] `h2`: 21 / 700 / 34.65, `margin: 34px 0 8px`; prose `p`: `margin: 0 0 14px`
- [ ] assert `h1` is **1 line at ≥476** and **2 lines at ≤474**, and **38 px** from 864 up

## 4 — Callout primitive

- [ ] one component taking a `tone` prop, with a typed `Record<Tone, { accent; ink; tint }>`
- [ ] box: `margin: 20px 0`, `padding: 14px 18px 14px 20px`, `border-left: 4px solid <accent>`,
      `border-radius: 0 10px 10px 0`, `background: <tint>`, `box-sizing: border-box`
- [ ] assert radius **is not** uniform (`0 10px 10px 0`) and the left corners are square
- [ ] assert each callout spans the article width (**720**) with padding inside it

## 5 — Label line and icon

- [ ] label: flex, `gap: 8px`, `align-items: center`, `margin: 0 0 4px`, 14 / 700 / 23.1,
      `uppercase`, `letter-spacing: 0.06em`, colour = tone **ink**
- [ ] icon: **18 × 18**, `display: block`, `flex: none`, `stroke: currentColor`, `stroke-width: 2`
      (bang stems **2.2**), `aria-hidden`, `focusable="false"`
- [ ] `lucide-react`: `Info`, `Lightbulb`, `MessageSquareWarning`, `TriangleAlert` (24-viewBox, matches
      the reference's four glyphs); do **not** scale them past 18 px
- [ ] label text is a `<p>` — **never** a heading

## 6 — Body, code chip, link

- [ ] body: **16px / 26.4 in every band** (it must not follow the article's 17→16 step),
      `width: 100%` inside the padded box (678 at 1440)
- [ ] code chip: `0.86em`, `padding: 1px 6px`, `border-radius: 5px`, `background: rgba(34,38,46,.07)`,
      mono stack, `overflow-wrap: anywhere`
- [ ] link: 600, tone **ink**, `underline` 1 px, `text-underline-offset: 3px`, hover 2 px over `.15s`
- [ ] focus: `outline: 2px solid <accent>; outline-offset: 2px; border-radius: 3px`

## 7 — Section 1 + Tip

- [ ] `h2` "1. Create an endpoint" (`id="create-an-endpoint"`) + one prose paragraph
- [ ] **Tip** callout with a CLI chip; the chip wraps to 2 lines at 320, not overflows

## 8 — Section 2 + Important + Caution

- [ ] `h2` "2. Verify the signature" (`id="verify-the-signature"`) + one prose paragraph
- [ ] **Important** callout, then **Caution** callout **directly after it with no heading between**
- [ ] Caution uses the **10 %** mix (`#fbf1e6`), not 8 %

## 9 — Responsive

- [ ] article cap **752**; `padding-top` clamp caps at **1200**, floors at **400**
- [ ] at **480**: prose 16 px, `line-height` 26.4, callout padding `12px 14px 12px 16px`
- [ ] callout body line counts step at article **436 / 479 / 391+570 / 435+630** (note / tip /
      important / caution) — verify at least the 1440 and 320 ends
- [ ] no horizontal scroll at 320 / 360 / 390 / 414 / 440 / 480 / 481 / 600 / 640 / 680 / 720 / 752 /
      760 / 900 / 1024 / 1440 (`scrollX 0` after `scrollTo(300,0)`)

## 10 — Accessibility and anchors

- [ ] 3 headings only (one `h1`, two `h2`); each callout `role="note"` named by **`aria-labelledby`**
      on its visible label (fix the reference's duplicated `aria-label`)
- [ ] **every** `href="#…"` resolves to a real id; demote the links whose section does not exist to
      `<strong>` (the reference's four dead fragments are a defect)
- [ ] tab order = the surviving links only, each with a visible 2 px accent ring
- [ ] **0** buttons, **0** forms, **0** inputs, **0** images, **0** scripted behaviour — do not invent
      a dismiss/toggle "because the family has one"

## 11 — Wiring, docs, ship

- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `TEMPLATES.md`: paste the `Alert 03` row as the **third** entry of `## Bootstrap Alerts (12)`
      (created by the `alert-01` implementer), between `## Bootstrap Accordions` and
      `## Bootstrap Buttons`; re-read the surrounding lines first
- [ ] `npm run verify:app fieldguide` green (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-fieldguide --type spec` valid
- [ ] `npm run readme:status`; PR body names source, preview URL, tokens and deltas
- [ ] `curl -I https://fieldguide.free.componentdock.com` → 200, `ssl_verify_result=0`
