# Enthalpy — task outline

Recreation of the ColorLib **Rightsize** HVAC design (`rightsize`) at `apps/enthalpy`. Spec is the authority:
`openspec/specs/template-enthalpy/spec.md`. Design notes: `docs/templates/enthalpy/design-notes.md`. Check boxes
only as work ships.

> The page's thesis is **the `#cost` total-cost calculator** — three systems, four horizons, a total that includes
> the replacement you will have to buy, and a winner that changes as the horizon moves (builder at 5, mid at 10,
> variable at 15, mid at 20). Build that band first; it is what makes every other claim checkable. All copy is in
> the spec §Content inventory — copy it verbatim, including the sample-figure caveats. **There is no photograph to
> source:** the only image is an authored duty-cycle diagram you draw yourself.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/enthalpy`; rename the package to
      `@free-react-templates/enthalpy`
- [ ] `public/CNAME` = `enthalpy.free.componentdock.com`; `homepage` = `https://enthalpy.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/enthalpy" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Plus Jakarta Sans 400/500/600/700/800 + JetBrains Mono
      500/700** (`css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap`),
      `preconnect` to `fonts.gstatic.com`
- [ ] pre-paint theme script (`localStorage.theme` → `prefers-color-scheme`) in `<head>`, as the reference's 442 B
      inline body does it
- [ ] `@theme` in `src/index.css`: the **`ink` warm-grey ramp** (`50 #f7f7f6 · 100 #ededea · 200 #dbdbd5 ·
      300 #b7b7ad · 400 #8a8a7e · 500 #67675c · 600 #4d4d45 · 700 #3a3a34 · 800 #252522 · 900 #171715`), the
      **`primary` teal ramp** (`50 #f0faf7 · 100 #d8f2ea · 200 #aee3d5 · 300 #79cdba · 400 #45b09b ·
      500 #2a9381 · 600 #1f7668 · 700 #1c5f55 · 900 #193f3a`), `--radius-2xl: 1rem`,
      `--shadow-soft: 0 4px 16px -4px #0000001a`, `font-sans: "Plus Jakarta Sans", system-ui, sans-serif`,
      `font-mono: "JetBrains Mono", ui-monospace, monospace`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [ ] `Button` — `solid` (`#1f7668`, white, radius 8, `px-5 py-2.5` 14/700 for the header CTA, `px-6 py-3.5` 16/700
      for the form submit), `light` (white ground, `#1c5f55` label, `px-8 py-4`, 16/700), `outline-light`
      (2 px `white/40`, `px-8 py-4`, 16/700, phone-glyph slot), `block`
- [ ] `Pill` — three jobs: header city/phone pills (full radius, 1 px `#dbdbd5`, `px-3 py-1.5`, 14/600, `gap-1.5`),
      the **horizon pills** (full radius, `px-4 py-2`, 14/700, `aria-pressed` → `#2a9381` + `#171715`, idle
      `white/60`), and section badges (`#d8f2ea` ground, `#1c5f55`, `px-3 py-1`, 14/500)
- [ ] `Field` — 50 px (`px-4 py-3`, 16/24, radius 8, 1 px `#dbdbd5`, text `#252522`, placeholder `#b7b7ad`);
      focus `border-primary-500` + `ring-2 ring-primary-500/20`; label 14/600 `#3a3a34`; error 14 tied by
      `aria-describedby`
- [ ] `Select` — the same box (`<select required>`), 49 px measured; the third question only
- [ ] `Section` — `.section` = `py-20 lg:py-28`; `Container` = `max-w-7xl` (`80rem`) with `px-4 lg:px-8`
- [ ] `Eyebrow` — 14/20 700, uppercase, `+0.35px`; `tone="light"` `#1c5f55`, `tone="dark"` `#45b09b`
- [ ] `Reveal` — `[data-animate]` equivalent: fade 20 px over 600 ms with a `delay` prop, IntersectionObserver
      `threshold .1` / `rootMargin 0 0 -10% 0`, **no-op under `prefers-reduced-motion: reduce`**

## 2 — Chrome

- [ ] `LicenceBar` — 37 px `#252522`, 12 `#ededea`: `Licence` `AZ ROC #000000` · `Manual J on every quote` ·
      `Serving` `Maricopa County` (2–3 `hidden sm:flex`), right side one `amber-400` star + `4.9` +
      `300+ reviews on Google (sample)`; **hide or wrap whole items — no mid-token clip at 390**; not sticky
- [ ] `Header` — sticky 81 px (`h-16 lg:h-20`), `white/90` + `backdrop-blur-lg`, border `#ededea`, `shadow-lg` past
      50 px; logo `h-8 lg:h-9` (light + light-on-dark pair); nav 6 labels 14/600 `#4d4d45` `gap-7` at **`xl`**;
      phone pill `tel:5550800800`; **city pill at `2xl` only** → `#areas`; 36 px theme toggle; CTA 14/700
      `#1f7668` radius 8 `px-5 py-2.5` at `xl`
- [ ] `MobileMenu` — `aria-expanded` + `Open menu`/`Close menu` label swap, six 16/600 rows, hairline, pill pair,
      full-width CTA
- [ ] `Preloader` / `ScrollProgress` (2 px) / `BackToTop` (48 px disc, 300 px threshold) / `CookieStrip` (87 px,
      1,500 ms delay, `accepted` / `essential` in `localStorage['cookie-consent']`)
- [ ] `SkipLink` → `#main-content`

## 3 — Hero and the request card

- [ ] band `#f7f7f6`, container `py-14 lg:py-20`, grid 12 cols `gap-10 lg:gap-16`: copy 7 cols, card 5 cols
- [ ] copy: eyebrow 14/700 `#1c5f55` +0.35 · `h1` 60/66 700 −1.5 `#252522` with the `#1f7668` span starting at
      "is rarely the cheapest to own." · lede 18/28 `#67675c` `max-w-xl` · rating row (5 `amber-400` stars, `4.9`,
      sample line) · four `#1f7668` ticks in a `sm:grid-cols-2 gap-3` list
- [ ] `QuoteCard` — white card radius 16 `p-8` **`shadow-soft`, no border**; `h2` 24/32 + 14 px sub-line; name
      (`autocomplete="name"`, required) + phone (`type="tel"`, `autocomplete="tel"`, required) + **native
      `<select required>`** with `Choose the closest match` (`value=""`) and the six options in order; submit
      403 × 52 full width; 12 px centred footnote
- [ ] validation: per-field messages, no reload, no query string, visible confirmation on success

## 4 — `#cost` (build this second, after the hero)

- [ ] band `#171715` `py-28`; header row `sm:items-end sm:justify-between`: `max-w-2xl` block (eyebrow `#45b09b`,
      `h2` 36/40 −0.9 white, lead 18/28 `white/70`) + horizon group `rounded-full border-white/20 p-1`
- [ ] horizon group: `role="group"` + `aria-label="Choose how many years to total"`, four
      `<button type="button" aria-pressed>` pills, **default 10**, selected `#2a9381` on `#171715`
- [ ] `SystemCard` × 3 from one data array (`price`, `running`, `upkeep`, `life`, `efficiency`) — **the data is the
      single source of truth**; the `dd` figures render from it (the reference's `dl` copy disagrees with its own
      `data-` attributes; do not copy that)
- [ ] calculator: `total = price + (running + upkeep) × years + price × floor((years − 1) / life)` when
      `years > life + 1`, rounded to the nearest 50 — derived during render, never stored in state
- [ ] four verified states: **5** → 18,350 / 18,600 / 20,750 · **10** → 30,300 / 27,600 / 28,100 · **15** →
      48,650 / 36,600 / 35,450 · **20** → 60,600 / 55,200 / 56,200
- [ ] rank pills: cheapest → `Cheapest to own` (`#2a9381` ground, `#171715` text), others `#2` / `#3`
      (`white/60` on `white/10`); re-sorted per horizon
- [ ] life note (`Includes replacing it once: expected life N years.`) inside a `min-h-[1.25rem]` reservation so
      the three cards keep one height across horizons
- [ ] card anatomy: 389 × 439, radius 16, `p-6`, `white/5` + `white/10`; **middle card featured**
      (`border-primary-500`, `bg-white/[0.07]`); total 30/36 700 **mono** `#79cdba` `tabular-nums`
- [ ] closing note (sample figures) + `Get these figures for your house` CTA

## 5 — `#why-us`

- [ ] band `#f7f7f6`, `lg:grid-cols-2 gap-16 items-center`; figure `order-last lg:order-first`
- [ ] **authored SVG diagram** (short cycling vs long run, 800 × 600 viewBox, radius 16, descriptive `alt`) +
      14 px `#8a8a7e` caption — no photograph, no stock image
- [ ] four `<dl>` rules `space-y-6`, each `border-l-2 border-primary-600 pl-5` (16/700 title + 16/24 `#67675c`)

## 6 — `#rebates` and `#process`

- [ ] `#rebates`: `gap-px` plate on `bg-ink-100` + `border-ink-100` + radius 16 + `overflow-hidden`,
      `sm:grid-cols-2 lg:grid-cols-3`, six white cells `p-6 lg:p-8` (404 × 232), `h3` 18/28, copy `flex-1`,
      amount 14/700 `#1c5f55`; sixth cell `Financing` / `From 0% for 12 months`; full-width 14 px note below
- [ ] `#process`: `<ol>` `sm:grid-cols-3` with **four** steps (3 + 1 — the fourth alone on row 2), each head =
      14/700 `tabular-nums` `#1f7668` number + `h-px flex-1 bg-ink-100` rule, `h3` `mt-4`, body `mt-2`, duration
      `mt-3` 14/600 `#1c5f55`

## 7 — `#areas`, `#testimonials`, `#faq`

- [ ] `#areas`: 12-col grid, `h2` in 5 cols (**no eyebrow**), 12 towns in a `grid-cols-2 sm:grid-cols-3` `<ul>`
      (`py-2.5`, 16 `#3a3a34`, 1 px `#ededea` bottom rule) in 7 cols + 14 px note
- [ ] `#testimonials`: `gray-50` ground, `Reviews` pill `#d8f2ea`/`#1c5f55`, stock-grey headings, three cards
      381 × 348 `shadow-soft` with **five `primary-400`** stars (not amber), `<blockquote>` 18/28 500, 48 px
      initials disc, name + town
- [ ] carousel: per-view 3 / 3 / 2 / 2 / 1 at 1440 / 1024 / 768 / 640 / 390; **0 dots and hidden arrows ≥ 1024**,
      2 dots at 768/640, 3 at 390; active dot 32 px pill `#2a9381`, idle 10 px `#d1d5db`; 500 ms track, 5 s
      autoplay paused on hover, no autoplay under reduced motion
- [ ] `#faq`: `max-w-3xl` centred, five `py-6` rows divided by 1 px `#e5e7eb`, question 18/600 in a full-width
      `<button>` with `aria-expanded` + `aria-controls` (**the reference ships neither**), 32 px `#f3f4f6` disc
      rotating 45°, single-open, `max-height` animation

## 8 — Closing band, footer, dark mode

- [ ] `#contact`: `#1c5f55`, centred `max-w-3xl`, white `h2` 36/40 −0.9, lead **`#d8f2ea`**, solid white
      241 × 56 + 2 px `white/40` outline 259 × 60 with phone glyph; full width and stacked below `sm`
- [ ] footer `#111827` `pt-24`, 12-col: brand 4 (40 px light logo, blurb, three 40 × 40 social chips with real
      destinations, address/phone/mail) · link columns `sm:grid-cols-3` in 5 · newsletter in 3 (input `#1f2937` +
      `#1f7668` Subscribe **that actually does something**) · bottom bar `mt-16 border-t #1f2937 py-8` with
      copyright + **Component Dock** link
- [ ] dark mode per spec: `#030712` body, `#111827` hero/`#why-us`, `gray-950` white bands, `gray-800` rebate gaps
      and review cards, `#171715` cost and `#1c5f55` contact unchanged; pre-paint resolution, no flash

## 9 — Verification

- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600 (the reference fails at 320:
      371 px)
- [ ] nav visible at ≥ 1280 and hidden at 1024; **city pill at ≥ 1536 only**
- [ ] no bare `#` anchors; `#service-areas` replaced by `#areas`; every `tel:` well formed; every icon-only control
      has an accessible name; the horizon group is announced with a name and exposes the selection via
      `aria-pressed`
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] no ColorLib string in any app file (comments included); footer links `https://www.componentdock.com/`
- [ ] `npm run spec:validate`; `scripts/verify-app.sh enthalpy` green; 100% coverage
