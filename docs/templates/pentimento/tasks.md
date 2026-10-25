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

- [ ] `cp -r apps/<simplest-existing-app> apps/pentimento`; rename the package to
      `@free-react-templates/pentimento`
- [ ] `public/CNAME` = `pentimento.free.componentdock.com`; `homepage` = `https://pentimento.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/pentimento" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` —
      `css2?family=Inter:wght@300..700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap` (both verified
      **HTTP 200**), `preconnect` to `fonts.gstatic.com`, `<html lang="en">` — **no** pinned `dark` class
- [ ] `@theme` in `src/index.css`: the **ten `primary` steps**, the **three real `accent` steps**
      (400/600/700 — do not invent 50–300/500/800/900), `--font-sans: Inter`, `--font-serif: Lora`,
      `--radius-sm/lg/2xl`, and the `.text-gradient` class (exact block in the design notes)
- [ ] `body` light `#ffffff` on `#111827`, dark `#030712` on `#f3f4f6`; antialiased
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] test: `index.css` carries all ten `primary` hexes and exactly three `accent` hexes; `index.html` has both
      families with `display=swap`

## 1 — Primitives

- [ ] `Button` variants:
      `primary` (`bg-primary-600 text-white`, radius 8, `px-6 py-3`, `shadow-lg shadow-primary-600/25`,
      hover `bg-primary-700` + `shadow-xl`),
      `secondary` (white + `border-gray-300 text-gray-700`),
      `onDark` (`bg-white text-primary-700`, `px-8 py-4`),
      `onDarkOutline` (`border-2 border-white/30 text-white`, `px-8 py-4`),
      `squareOutline` (`#acquire`: `border border-primary-900 px-8 py-3.5`, **radius 0**, hover inverts),
      `headerCta` (`px-5 py-2.5 text-sm`, 90 × 40)
- [ ] `Eyebrow` — light (`accent-700`) and dark-band (`accent-400`) variants: 12/500 uppercase, `+2.4 px`
- [ ] `SectionHeading` — serif (`Lora 500 36/40`, `−0.9 px`) for `#works`/`#statement`/`#exhibitions`/`#acquire`,
      sans (`Inter 700 36/40`) for `#faq`, sans 48/48 `−1.2 px` for `#contact`; keep the mid-document switch
- [ ] `Badge` — hero pill and `#faq` pill (both `rounded-full`, different grounds: `primary-50` + border vs
      `primary-100`)
- [ ] `StatusDot` — 6 px dot + label, `accent-600` for *Available*, `primary-400` *Reserved*,
      `primary-300` *Sold* / *Private collection*
- [ ] `Reveal` — `opacity 0 / translateY(20px)` → visible, 600 ms, `data-delay` stagger; IO `threshold .1`,
      `rootMargin 0 0 -10%`; **bails out entirely** under `prefers-reduced-motion: reduce`
- [ ] `useTypewriter` — 3,000 ms cycle, 300 ms fade + `translateY(10px)`; static under reduced motion; the `h1`
      keeps a static `aria-label`
- [ ] `Accordion` — single-open, `max-height` from 0 to `scrollHeight`, icon rotates 45°, `aria-expanded` +
      `aria-controls` (the reference lacks both)
- [ ] `VideoDialog` — overlay `z-[100] bg-black/80 backdrop-blur-sm`, `max-w-4xl` 16:9 iframe, Escape + backdrop
      close, focus trap and restore

## 2 — Bands

- [ ] Header: sticky, 81/65 px, `bg-white/80` + blur, `shadow-lg` past 50 px, nav ≥1024, moon toggle persisting
      `theme`, mobile panel (446 px at 390) with the D1 label set
- [ ] Hero: `primary-50 → white`, two parallax blobs, badge 279 × 34, `h1` 60/60 with the gradient typewriter,
      lead `max-w-2xl`, three CTAs, image 1,024 × 512 in a 16 px frame
- [ ] `#works`: `max-w-7xl`, 3 / 2 / 1 grid, six cards at 4:5 in `primary-100` wells, statuses and **three**
      prices exactly as tabulated
- [ ] `#statement`: `max-w-6xl`, 1fr/1.1fr with 64 px gap, sticky `top-28` figure, four `1.85` paragraphs, pull
      quote with the 2 px `accent-600` rule
- [ ] `#exhibitions`: `primary-900` band, seven rows (`80/56 px` year column), tag grammar (Solo filled, others
      `primary-700`), the two-tag first row, closing CV note
- [ ] `#acquire`: `primary-50`, three 341 px cards 01/02/03, hairlines + fine print, *Represented by*, the
      **square** 228 × 54 CTA
- [ ] `#faq`: centred `max-w-3xl`, pill, sans `h2`, five rows in a `divide-y` list, single-open accordion
- [ ] `#contact`: 135° gradient, two blobs, 40 px dot grid at 10 %, two CTAs, and the **merged four-field form**
      with inline validation + success state (D2 — the app's only structural addition)
- [ ] Footer: `gray-900` plate, 12-col 4/5/3, Component Dock chip, **THE WORK** column (D4), newsletter with
      local validation, bottom bar

## 3 — Chrome

- [ ] Preloader (non-blocking, removed on `load` / `readyState === 'complete'`)
- [ ] `#scroll-progress` 2 px `primary-600`
- [ ] Skip link → `#main-content`
- [ ] `#back-to-top` 48 px disc past 300 px
- [ ] Cookie strip after 1.5 s, `accepted` / `essential`, never over the footer row or the mobile bar
- [ ] Mobile CTA bar: **Enquire** + **Call the studio** (`tel:+4532884106`), no coworking copy (D5)

## 4 — Verify

- [ ] tests first (RED) for every behaviour hook, then implementation to 100 % coverage
- [ ] `scripts/verify-app.sh pentimento` green (typecheck · lint · 100 % coverage · build · knip · fallow)
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 640 / 768 / 1024 / 1280 / 1440 (the reference fails 320/390 —
      the footer form is the cause, defect 1)
- [ ] document height within ~5 % of 8,356 (1440) / 8,224 (1024) / 9,636 (768) / 12,450 (390), plus the added
      form's height, documented in the PR
- [ ] zero bare `#` anchors, one well-formed `tel:`, descriptive `alt` on all six paintings
- [ ] both themes: light default, `prefers-color-scheme` honoured, choice persisted, `.text-gradient` the only
      non-inverting element
- [ ] reduced motion: no stuck `opacity: 0`, no typewriter, no blob float, no parallax
- [ ] app file copy audit: no "Ostend", no "ColorLib", no author name in any app file
