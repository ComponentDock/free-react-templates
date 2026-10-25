# Makeready — task outline

Recreation of the ColorLib **Overprint** design (`overprint`) at `apps/makeready`. Spec is the authority:
`openspec/specs/template-makeready/spec.md`. Design notes: `docs/templates/makeready/design-notes.md`.
Check boxes only as work ships.

> The page's thesis is **production, not taste**: one typewritten `h1`, three case studies in
> brief/approach/outcome with one hard number each, four disciplines with a starting price printed beside each,
> four fixed stages with durations, and **the file list published** — then five answers about money and
> ownership, and a closing band that asks for the problem rather than the brief. Build `#work` and
> `#disciplines` first: they are what make the hero's promise checkable. The palette is **one warm paper→charcoal
> `primary` ramp and a two-step lime `accent`**; chips and plates are **square**, cards and frames are 16 px.
> All copy is in the spec — copy it, do not re-invent it, and keep the refusals ("we are not a full-service
> agency", "further rounds are quoted, not silently absorbed", "we do not build them").

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/makeready`; rename the package to
      `@free-react-templates/makeready`
- [ ] `public/CNAME` = `makeready.free.componentdock.com`; `homepage` = `https://makeready.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/makeready" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` —
      `css2?family=Space+Grotesk:wght@400;500;600;700&display=swap` (verified **HTTP 200**), `preconnect` to
      `fonts.gstatic.com`, `<html lang="en">` — **no** pinned `dark` class
- [ ] `@theme` in `src/index.css`: the **ten `primary` steps**, the **two real `accent` steps** (400/500 — do not
      invent 50–300/600–900), `--font-sans: "Space Grotesk"`, `--font-mono` = the **OS stack exactly as
      declared**, `--radius-lg` 8 px, `--radius-2xl` 16 px, `.text-gradient` and `.shadow-soft`
      (exact blocks in the design notes)
- [ ] `body` light `#ffffff` on `#111827`, dark `#030712` on `#f3f4f6`; antialiased
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] test: `index.css` carries all ten `primary` hexes and exactly two `accent` hexes; `index.html` has
      Space Grotesk with `display=swap` and **no** second font family

## 1 — Primitives

- [ ] `Button` variants:
      `primary` (`bg-primary-600 text-white`, radius 8, `px-6 py-3`, `shadow-lg shadow-primary-600/25`,
      hover `bg-primary-700` + `shadow-xl`),
      `secondary` (white + `border-gray-300 text-gray-700`),
      `onDark` (`bg-white text-primary-700`, `px-8 py-4`),
      `onDarkOutline` (`border-2 border-white/30 text-white`, `px-8 py-4`),
      `outlineSm` (cookie Decline),
      `headerCta` (`px-5 py-2.5 text-sm`, 139 × 40)
- [ ] `Chip` — **square** (`px-2 py-0.5`, radius **0**), 12/700 uppercase `+1.8 px`; two tones: `dark`
      (`bg-primary-900 text-accent-400`) and `inverted` (`bg-accent-400 text-primary-900`); used by five bands
- [ ] `TagPill` — **square**, 1 px `primary-600` border, 11 px mono uppercase `+0.55 px`, pad 4/10, on the dark band
- [ ] `Pill` — `rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700` (testimonials + FAQ)
- [ ] `MonoLabel` — the technical layer: `font-mono` + `uppercase` + per-role tracking (11 px labels, 12 px prices
      and company lines) — **one component**, because `font-mono` is used 56 times
- [ ] `StatCell` — numeral `36/40 700` (`lg:text-4xl`) over a `14/400 gray-600` label
- [ ] `Reveal` — `opacity 0 / translateY(20px)` → visible, 600 ms, `data-delay` stagger; IO `threshold .1`,
      `rootMargin 0 0 -10%`; **bails out entirely** under `prefers-reduced-motion: reduce`
- [ ] `useTypewriter` — 3,000 ms cycle, 300 ms fade + `translateY(10px)`; static under reduced motion; the `h1`
      keeps a static `aria-label` and the span a **fixed two-line box** (defect 1)
- [ ] `Accordion` — single-open, `max-height` from 0 to `scrollHeight`, icon rotates 45°, `aria-expanded` +
      `aria-controls` (the reference lacks both)
- [ ] `VideoDialog` — overlay `z-[100] bg-black/80 backdrop-blur-sm`, `max-w-4xl` 16:9 iframe, Escape + backdrop
      close, focus trap and restore
- [ ] `Wordmark` — inline SVG: two 18 × 18 `rx 2` plates + the **8 × 12 overlap** in the third tone + live `<text>`
      (Space Grotesk 21/700, `−0.4`), light and light-on-dark variants (507 B reference, design notes §wordmark)

## 2 — Bands

- [ ] Header: sticky, 81/65 px, `bg-white/80` + blur, `shadow-lg` past 50 px, nav ≥1024, moon toggle persisting
      `theme`, mobile panel (446 px at 390) with the D1 label set
- [ ] Hero: `primary-50 → white`, two parallax blobs, badge 345 × 34 with the two-tone ping dot, `h1` 60/60 with
      the gradient typewriter, lead `max-w-2xl`, three CTAs, **four stats** under a hairline, image 1,024 × 512
      in a 16 px frame
- [ ] `#work`: `max-w-7xl`, three 580/580 rows with 56 px gaps, the **second reversed**, figures 580 × 435 in
      `primary-100` wells with **lime plates**, `dl` with the **2 px lime left rule**, metrics `2 colours` /
      `6 issues` / `60 pp` exactly as tabulated
- [ ] `#disciplines`: `primary-900` band, **inverted chip**, four 160 px rows split 486.7/681.3 by 1 px `#464642`
      rules with `border-y`, lime `from €…` prices, `h3` hover → lime, square tag pills 5/5/4/3
- [ ] `#process`: `max-w-6xl`, `grid gap-px bg-primary-200` so the **ground is the divider**, four 271.25 × 322
      white cells, lime mono numerals 01–04, durations as tabulated, `You get` footers, three footnote squares
- [ ] `#deliverables`: `primary-50`, three 346.7 px columns with **2 px `primary-900`** top rules, twelve rows at
      39/21 px with mono format labels, the white note with the **4 px lime left border**
- [ ] `#testimonials`: `gray-50`, pill, `h2` 36/40, three 381 px cards (**unequal heights** 320/292/348), five
      **`primary-400`** stars each, **static 3-up at ≥1024** and a real carousel (3 dots + arrows) below `lg`
- [ ] `#faq`: centred `max-w-3xl`, pill, `h2` 36/40, five 81 px rows in a `divide-y`, single-open accordion with
      `aria-expanded` + `aria-controls`
- [ ] `#contact`: 135° gradient, two blobs, 40 px dot grid at 10 %, two CTAs, and the **merged four-field form**
      with inline validation + success state (D2 — the app's only structural addition)
- [ ] Footer: `gray-900` plate, 12-col 4/5/3, Component Dock chip, **THE STUDIO** column (D4), newsletter with
      local validation, bottom bar

## 3 — Chrome

- [ ] Preloader (non-blocking, removed on `load` / `readyState === 'complete'`)
- [ ] `#scroll-progress` 2 px `primary-600`
- [ ] Skip link → `#main-content`
- [ ] `#back-to-top` 48 px disc past 300 px
- [ ] Cookie strip after 1.5 s, `accepted` / `essential`, never over the footer row or the mobile bar
- [ ] Mobile CTA bar: **Enquire** + **Call the studio** (`tel:+35315590284`), no coworking copy (D5)

## 4 — Verify

- [ ] tests first (RED) for every behaviour hook, then implementation to 100 % coverage
- [ ] `scripts/verify-app.sh makeready` green (typecheck · lint · 100 % coverage · build · knip · fallow)
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 640 / 768 / 1024 / 1280 / 1440 (the two known offenders are
      the 845 px typewriter phrase at 1440 and the footer newsletter row at 320)
- [ ] document height within ~5 % of 8,857 (1440) / 9,295 (1024) / 10,915 (768) / 12,778 (390) / 13,799 (320),
      plus the added form's height, documented in the PR
- [ ] zero bare `#` anchors, one well-formed `tel:`, descriptive `alt` on all four photographs
- [ ] both themes: light default, `prefers-color-scheme` honoured, choice persisted, `.text-gradient` the only
      non-inverting element
- [ ] reduced motion: no stuck `opacity: 0`, no typewriter, no parallax
- [ ] app file copy audit: no "Overprint", no "ColorLib", no studio name in any app file
