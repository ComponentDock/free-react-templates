# Pentimento — task outline

Recreation of the ColorLib **Ostend** artist-portfolio design (`ostend`) at `apps/pentimento`. Spec is the
authority: `openspec/specs/template-pentimento/spec.md`. Design notes:
`docs/templates/pentimento/design-notes.md`. Check boxes only as work ships.

> The page's thesis is **the hour before the light goes**: one typewritten `h1`, six paintings with three of
> them actually for sale, four paragraphs and a pull quote, seven dated exhibitions on the only near-black band,
> and three ways to buy with the awkward rules printed underneath. Build `#works` and `#statement` first — they
> are what make the typewriter's promise credible. The palette is **one warm-grey `primary` ramp and three
> rosewood `accent` steps**; nothing else is tinted. All copy is in the spec — copy it, do not re-invent it, and
> keep the refusals.

## 0 — Scaffold

- [x] `cp -r apps/<simplest-existing-app> apps/pentimento`; rename the package to
      `@free-react-templates/pentimento`
- [x] `public/CNAME` = `pentimento.free.componentdock.com`; `homepage` = `https://pentimento.free.componentdock.com`
- [x] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/pentimento" package-lock.json`
- [x] `index.html`: one Google Fonts `<link>` —
      `css2?family=Inter:wght@300..700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap` (both verified
      **HTTP 200**), `preconnect` to `fonts.gstatic.com`, `<html lang="en">` — **no** pinned `dark` class
- [x] `@theme` in `src/index.css`: the **ten `primary` steps**, the **three real `accent` steps**
      (400/600/700 — do not invent 50–300/500/800/900), `--font-sans: Inter`, `--font-serif: Lora`,
      `--radius-sm/lg/2xl`, and the `.text-gradient` class (exact block in the design notes)
- [x] `body` light `#ffffff` on `#111827`, dark `#030712` on `#f3f4f6`; antialiased
- [x] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [x] test: `index.css` carries all ten `primary` hexes and exactly three `accent` hexes; `index.html` has both
      families with `display=swap`

## 1 — Primitives

- [x] `Button` variants:
      `primary` (`bg-primary-600 text-white`, radius 8, `px-6 py-3`, `shadow-lg shadow-primary-600/25`,
      hover `bg-primary-700` + `shadow-xl`),
      `secondary` (white + `border-gray-300 text-gray-700`),
      `onDark` (`bg-white text-primary-700`, `px-8 py-4`),
      `onDarkOutline` (`border-2 border-white/30 text-white`, `px-8 py-4`),
      `squareOutline` (`#acquire`: `border border-primary-900 px-8 py-3.5`, **radius 0**, hover inverts),
      `headerCta` (`px-5 py-2.5 text-sm`, 90 × 40)
- [x] `Eyebrow` — light (`accent-700`) and dark-band (`accent-400`) variants: 12/500 uppercase, `+2.4 px`
- [x] `SectionHeading` — serif (`Lora 500 36/40`, `−0.9 px`) for `#works`/`#statement`/`#exhibitions`/`#acquire`,
      sans (`Inter 700 36/40`) for `#faq`, sans 48/48 `−1.2 px` for `#contact`; keep the mid-document switch
- [x] `Badge` — hero pill and `#faq` pill (both `rounded-full`, different grounds: `primary-50` + border vs
      `primary-100`)
- [x] `StatusDot` — 6 px dot + label, `accent-600` for *Available*, `primary-400` *Reserved*,
      `primary-300` *Sold* / *Private collection*
- [x] `Reveal` — `opacity 0 / translateY(20px)` → visible, 600 ms, `data-delay` stagger; IO `threshold .1`,
      `rootMargin 0 0 -10%`; **bails out entirely** under `prefers-reduced-motion: reduce`
- [x] `useTypewriter` — 3,000 ms cycle, 300 ms fade + `translateY(10px)`; static under reduced motion; the `h1`
      keeps a static `aria-label`
- [x] `Accordion` — single-open, `max-height` from 0 to `scrollHeight`, icon rotates 45°, `aria-expanded` +
      `aria-controls` (the reference lacks both)
- [x] `VideoDialog` — overlay `z-[100] bg-black/80 backdrop-blur-sm`, `max-w-4xl` 16:9 iframe, Escape + backdrop
      close, focus trap and restore

## 2 — Bands

- [x] Header: sticky, 81/65 px, `bg-white/80` + blur, `shadow-lg` past 50 px, nav ≥1024, moon toggle persisting
      `theme`, mobile panel (446 px at 390) with the D1 label set
- [x] Hero: `primary-50 → white`, two parallax blobs, badge 279 × 34, `h1` 60/60 with the gradient typewriter,
      lead `max-w-2xl`, three CTAs, image 1,024 × 512 in a 16 px frame
- [x] `#works`: `max-w-7xl`, 3 / 2 / 1 grid, six cards at 4:5 in `primary-100` wells, statuses and **three**
      prices exactly as tabulated
- [x] `#statement`: `max-w-6xl`, 1fr/1.1fr with 64 px gap, sticky `top-28` figure, four `1.85` paragraphs, pull
      quote with the 2 px `accent-600` rule
- [x] `#exhibitions`: `primary-900` band, seven rows (`80/56 px` year column), tag grammar (Solo filled, others
      `primary-700`), the two-tag first row, closing CV note
- [x] `#acquire`: `primary-50`, three 341 px cards 01/02/03, hairlines + fine print, *Represented by*, the
      **square** 228 × 54 CTA
- [x] `#faq`: centred `max-w-3xl`, pill, sans `h2`, five rows in a `divide-y` list, single-open accordion
- [x] `#contact`: 135° gradient, two blobs, 40 px dot grid at 10 %, two CTAs, and the **merged four-field form**
      with inline validation + success state (D2 — the app's only structural addition)
- [x] Footer: `gray-900` plate, 12-col 4/5/3, Component Dock chip, **THE WORK** column (D4), newsletter with
      local validation, bottom bar

## 3 — Chrome

- [x] Preloader (non-blocking, removed on `load` / `readyState === 'complete'`)
- [x] `#scroll-progress` 2 px `primary-600`
- [x] Skip link → `#main-content`
- [x] `#back-to-top` 48 px disc past 300 px
- [x] Cookie strip after 1.5 s, `accepted` / `essential`, never over the footer row or the mobile bar
- [x] Mobile CTA bar: **Enquire** + **Call the studio** (`tel:+4532884106`), no coworking copy (D5)

## 4 — Verify

- [x] tests first (RED) for every behaviour hook, then implementation to 100 % coverage
- [x] `scripts/verify-app.sh pentimento` green (typecheck · lint · 100 % coverage · build · knip · fallow)
- [x] `scrollWidth === clientWidth` at 320 / 390 / 640 / 768 / 1024 / 1280 / 1440 (the reference fails 320/390 —
      the footer form is the cause, defect 1)
- [x] document height within ~5 % of 8,356 (1440) / 8,224 (1024) / 9,636 (768) / 12,450 (390), plus the added
      form's height, documented in the PR
- [x] zero bare `#` anchors, one well-formed `tel:`, descriptive `alt` on all six paintings
- [x] both themes: light default, `prefers-color-scheme` honoured, choice persisted, `.text-gradient` the only
      non-inverting element
- [x] reduced motion: no stuck `opacity: 0`, no typewriter, no blob float, no parallax
- [x] app file copy audit: no "Ostend", no "ColorLib", no author name in any app file

## Shipped — measured 2026-10-25 (`apps/pentimento`)

`scripts/verify-app.sh pentimento` green: typecheck · oxlint · **89 tests at 100 %** statements /
branches / functions / lines · production build 297.8 kB (91.9 kB gzip JS), 43.9 kB CSS.
`npm run spec:validate` → 3,274 items, 0 failed.

Browser measurements of the built app (Chromium, `domcontentloaded`, 1440 × 900):

| width | `scrollWidth` = `clientWidth` | document height | header |
| ----: | ----------------------------- | --------------: | -----: |
|   320 | 320 = 320                     |          13,362 |     65 |
|   390 | 390 = 390                     |          13,364 |     65 |
|   640 | 640 = 640                     |          10,107 |     65 |
|   768 | 768 = 768                     |          10,306 |     65 |
|  1024 | 1024 = 1024                   |           8,719 |     81 |
|  1280 | 1280 = 1280                   |           8,762 |     81 |
|  1440 | 1440 = 1440                   |           8,762 |     81 |

At 1440 the reference measures 8,356 px and this build 8,762 px — the **+406 px is the merged
enquiry form** (D2), which is inside the band the spec said would grow. Band heights at 1440:
`#works` 1,733 (ref 1,732) · `#statement` 1,036 (1,103) · `#exhibitions` 1,341 (1,395) ·
`#acquire` 952 (942) · `#faq` 834 (820) · `#contact` 956 (500 + the form).

Reference defects fixed, measured in the browser: **no horizontal scroll at 320/390** (the reference
is 401 px at both — its footer form was the cause), the cookie strip sits **above** the mobile action
bar (`bottom-[69px] lg:bottom-0`) instead of covering it, the back-to-top disc clears that bar
(`bottom-24 lg:bottom-6`), the FAQ buttons expose `aria-expanded`/`aria-controls`, and the typewriter
keeps a static `aria-label` on the `h1`.

Two implementation notes worth keeping:

1. **`rootMargin` needs units on every value.** `'0 0 -10%'` throws
   `Failed to construct 'IntersectionObserver'` in Chromium and blanks the whole app (React unmounts
   on the effect error). The reveal now passes `'0px 0px -10% 0px'`, and a test asserts the string so
   it cannot regress.
2. **The legal labels stay text.** `Privacy Policy` / `Terms of Service` / `Style Guide` pointed at
   inner routes that a single page cannot serve, and `href="#"` is banned by D5 — so they render as
   labels in the bottom bar, and the only footer links are real bands, `tel:`, `mailto:` and
   Component Dock.
