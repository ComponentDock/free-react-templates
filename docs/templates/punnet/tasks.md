# Punnet — task outline

Recreation of the ColorLib **Alert V10** design (`alert-10`) at `apps/punnet`. Spec is the authority:
`openspec/specs/template-punnet/spec.md`. Design notes: `docs/templates/punnet/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-10/` (the slug-only `theme/alert-10/`
and `theme/bb/alert-10/` are both 404 — this family lives under `bootstrap/`). Check boxes only as work
ships.

> This is **one 900 px measure** with a centred two-line header and a **2 × 2 grid of four pastel tiles**.
> **0 images, 0 buttons, 0 inputs, 0 `<script>`** in the reference — the whole interaction budget is a
> `200 ms` hover lift on a tile and a `150 ms` fill inversion on four pill links.
>
> The risk is not a missing section — it is the six things a port flattens: the two-column seam is a
> **`minmax(min(100%,380px), 1fr)`** fact (viewport **812/811**), not `md:grid-cols-2` (768); the badges are
> **`64 × 64` rotated `∓4°`**, so they measure **68.31** and their shadow is an **inset** bottom edge plus a
> tone-coloured drop; the four variants are **four custom properties** with one **shared** body colour
> (`#3f3547`, a literal) that the tones do not touch; the pill is **white with no border** (`1.12–1.19 : 1`
> against its tile) and only inverts on hover; a grid **row stretches** to its tallest cell (peach reads
> `225.75` with `202` of content at vw 815); and the **480 padding/badge step grows the content** while the
> viewport shrinks (content `319 → 346`).
>
> Five numbers decide fidelity: wrap **900** at (270, 88); tiles **440 × 202**; badge rect **68.31**; body
> column **310**; document **900** at ≥ 812 (the page does not scroll at desktop sizes).
>
> The reference's defects are **not** to be reproduced: four dead fragments (`#track`, `#treat`, `#card`,
> `#reschedule`), four live regions on permanent tiles (one `role="alert"`), `<p>` titles with no heading per
> message, a hover lift on non-interactive containers, a dead `.cl-icon` (tenth variant in a row) plus a
> phantom `.cl-alert10--mint`, body text asking for a **400 face nobody ships**, a pill with no visible edge,
> a README advertising `js/`, `fonts/` and `images/` that do not exist, and a screenshot that is a macOS
> browser mock-up.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/punnet`; package `@free-react-templates/punnet`
- [ ] `public/CNAME` = `punnet.free.componentdock.com`; `"homepage"` = `https://punnet.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace (`grep -c free-react-templates/punnet package-lock.json` ≥ 1)
- [ ] one `<link>`:
      `https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800&display=swap`
      (the archive's own URL — **no 400 request**, see the type note below)
- [ ] `@theme` tokens: `ground #fffdf8`, `ink #2b2433`, `muted #6b5f73`, `body #3f3547`, pill `#fff`, and
      per variant × `bg / badge / ink / btn`:
      mint `#e3f7ec / #9be3bd / #0f5132 / #13603c`,
      lilac `#efe8ff / #cdb8ff / #4a2b91 / #5b37b0`,
      peach `#fff0e0 / #ffc98f / #7a3c06 / #8e4608`,
      rose `#ffe8ee / #ffb3c5 / #8f1239 / #a3163f`

## 2. Static composition (tests first)

- [ ] `<main>` wrapper: `min-h-screen box-border`, `padding: clamp(24px,7vw,88px) 16px`, ground `#fffdf8`
- [ ] wrap: `max-w-[900px] mx-auto text-ink leading-[1.5]`
- [ ] `PageHeader`: `text-center mb-7`; greeting `text-[17px] font-bold text-muted mb-1` + decorative emoji
      in `aria-hidden`; `h1` `text-[clamp(28px,5vw,40px)] font-extrabold leading-[1.5] tracking-[-.02em]`
- [ ] `AlertWall`: `grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-5`
      — **do not** replace with `sm:grid-cols-2` / `md:grid-cols-2`
- [ ] `AlertTile` (`tone` prop): `flex items-start gap-[18px] p-6 rounded-[28px] bg-tone-bg
      transition-[transform,box-shadow] duration-200 max-[480px]:gap-3.5 max-[480px]:px-[18px]
      max-[480px]:py-5 max-[480px]:rounded-3xl`
- [ ] `TileBadge`: `grid place-items-center size-16 shrink-0 rounded-[22px] bg-tone-badge text-tone-ink
      -rotate-4 shadow-[inset_0_-4px_0_rgba(0,0,0,.06),0_6px_14px_-8px_var(--tone-ink)]
      max-[480px]:size-[52px] max-[480px]:rounded-[18px]`; even tile `rotate-4`
- [ ] glyph: `Truck` / `Gift` / `CreditCard` / `CircleAlert` at `30`, `strokeWidth={2.2}`,
      `max-[480px]:size-[26px]`, always `aria-hidden`
- [ ] `h2` (port fix — the reference uses `<p>`): `text-[19px] font-extrabold leading-[1.25] mt-0.5 mb-1
      text-tone-ink`
- [ ] paragraph: `text-[15.5px] font-medium text-body m-0 mb-3.5` (**500**, because that is what renders)
- [ ] `TileAction`: `inline-block rounded-full bg-white px-[18px] py-[9px] text-[15px] font-extrabold
      text-tone-btn shadow-[0_2px_0_rgba(0,0,0,.06)] border border-[color-mix(in_srgb,var(--tone-btn)_28%,transparent)]
      transition-colors duration-150 hover:bg-tone-btn hover:text-white
      focus-visible:outline-[3px] focus-visible:outline-tone-btn focus-visible:outline-offset-2`
- [ ] `SiteFooter` with the Component Dock link — the port's **fifth** anchor, a real `<footer>`

## 3. The variant system (the actual work)

- [ ] one component, four tones — no copy-pasted tile blocks; the tone drives `--tone-bg`, `--tone-badge`,
      `--tone-ink`, `--tone-btn` (or four `@theme` token families + a lookup map)
- [ ] the paragraph colour is **shared** (`#3f3547`) and SHALL NOT follow the tone
- [ ] badge tilt alternates by **DOM order** (odd `-4°`, even `+4°`) at every width — not per column
- [ ] copy lengths keep the tiles equal height at 1440: titles **~22–27** characters (one line each),
      bodies **3 / 2 / 3 / 3** lines at `15.5 px` in a **310 px** column, pill labels **2–3 words**
      (`133 / 151 / 121 / 142` px wide in the reference)

## 4. Semantics and accessibility (defect fixes)

- [ ] **no live regions** on the wall — the four tiles are static content, not announcements
- [ ] one `h1` + one `h2` per tile; the wall is `aria-labelledby` the `h1`, each tile `aria-labelledby` its
      own `h2`
- [ ] four pill links resolve to real destinations (a section id or a route) — never `#`
- [ ] the tile itself is **not** focusable and **not** clickable; the pill is the only tab stop per tile
      (the hover lift stays as decoration)
- [ ] pill gets the added **1 px** `color-mix(--tone-btn 28%)` edge (≥ 3 : 1 on all four tints)
- [ ] contrast floor after the fixes: rose icon on its badge **5.41 : 1**; every text pair passes AA
- [ ] keyboard: four tab stops, `outline: 3px` at `offset: 2px` in the tile's own button colour, no ring on
      mouse click

## 5. Responsiveness

- [ ] grid `auto-fit`/`minmax` — two columns at **≥ 812**, one at **811**; card width **440 / 424 / 380** at
      1440 / 900 / 812
- [ ] tile padding `p-6` → `20px 18px` at **480** (`max-[480px]:`), gap `18 → 14`, radius `28 → 24`,
      badge `64 → 52` (radius `22 → 18`), glyph `30 → 26`; **nothing else steps**
- [ ] verify the backwards seam: content **319 @ 481 → 346 @ 480**, document **1012 @ 481 → 933 @ 480**
- [ ] verify the title-fold ladder at content **252 / 202 / 201 / 198** (rose, lilac, peach, mint)
- [ ] no horizontal overflow at 320 / 356 / 390 / 480 / 481 / 768 / 812 / 1024 / 1440 (`scrollX` 0)

## 6. Verification and ship

- [ ] `npm run verify:app punnet` green (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-punnet --type spec` valid
- [ ] `TEMPLATES.md`: create `## Bootstrap Alerts (12)` between `## Bootstrap Accordions (20)` and
      `## Bootstrap Buttons (20)`; **Alert 10** is its tenth row, grammar `[colorlib] · [app] · ![preview]`
- [ ] row goes `[x]` with the app URL **only after** the deploy is live
- [ ] `curl -I https://punnet.free.componentdock.com` → 200, `ssl_verify_result=0`
- [ ] no `colorlib` / `alert-10` / `Sprout Box` / `Ines` / `Rui` string in any app file
