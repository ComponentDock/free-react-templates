# Conduit — task outline

Recreation of the ColorLib **Nodig** trenchless pipe-relining design (`nodig`) at `apps/conduit`. Spec is the
authority: `openspec/specs/template-conduit/spec.md`. Design notes:
`docs/templates/conduit/design-notes.md`. Check boxes only as work ships.

> The page's thesis is **the comparison table** — nine rows where the dig wins three times, and one row that
> is deliberately neutral so the footnote's arithmetic ("relining wins 5, open cut wins 3") is true. Build
> the table early; it is the band that makes the rest of the page credible. All copy is in the spec — copy it,
> do not re-invent it. The only image on the page is a **drawn SVG cross-section**; redraw it, never
> photograph it.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/conduit`; rename the package to
      `@free-react-templates/conduit`
- [ ] `public/CNAME` = `conduit.free.componentdock.com`; `homepage` = `https://conduit.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/conduit" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Inter 400/500/600/700** + **Fraunces 500/700**
      (`css2?family=Inter:wght@400;500;600;700&family=Fraunces:wght@500;700&display=swap`), `display=swap`,
      `preconnect` to `fonts.gstatic.com`
- [ ] pre-paint theme script (`localStorage.theme` → `prefers-color-scheme`) in `<head>`, exactly as the
      reference's 454 B inline body does it
- [ ] `@theme` in `src/index.css`: the **`ink` 10-step warm-grey ramp**, the **`primary` 10-step terracotta
      ramp** (exact hexes in the spec §Design tokens), `--radius-2xl: 1rem`,
      `--shadow-soft: 0 4px 16px -4px #0000001a`, `font-sans: Inter, system-ui, sans-serif`,
      `font-display: Fraunces, Georgia, serif`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [ ] `Button` — `solid` (`#974e2c`, white, radius 8, `px-6 py-3.5`, 16/700, hover `#7b3f26`),
      `solid-sm` (header CTA, `px-5 py-2.5`, 14/700), `light` (white ground, `#7b3f26` label, `px-8 py-4`),
      `outline-light` (2 px `white/40`, `px-8 py-4`), `pill-light` (`#emergency` only: full radius, 18/700
      `#7b3f26`, `px-6 py-3`), `block`
- [ ] `Pill` — the rounded chip used three ways: header city/phone pills (full radius, 1 px `#d6d6ce`,
      `px-3 py-1.5`, 14/600 `#383830`) and the section badges (`#f5e5d9` ground, `#7b3f26`, `px-3 py-1`,
      14/500)
- [ ] `Field` — 50 px (radius 8, 1 px `#d6d6ce`, `px-4 py-3`, 16/24, placeholder `#b2b2a6`); focus
      `border #b4643b` + 2 px `#b4643b/20`; `Label` 14/600 `#383830` at `mt-1.5`; `Select` is the same shell
      with the reference's seven options
- [ ] `Eyebrow` — 14/700 uppercase `+0.35 px`, `#7b3f26` (light bands) / `#c97f55` (`dark:`); **`#areas` has
      none** — do not add one for symmetry
- [ ] `SectionHeading` — eyebrow + `h2` 36/40 700 −0.9 + optional lead 18/28 `#636356`, `max-w-2xl`
      (centred `max-w-3xl` variant for testimonials/FAQ)
- [ ] `Card` — radius 16, 1 px `#ebebe7`, white, `shadow-md` (hero quote card) / `shadow-soft`
      (testimonial cards)
- [ ] `Reveal` — `opacity 0 / translateY(20px)`, 600 ms, stagger via `data-delay` (100–300 ms in 50 ms steps),
      IO `threshold .1` + `rootMargin 0 0 -10%`, **bails out entirely under reduced motion**
- [ ] `useTheme` — pre-paint class + persisted toggle
- [ ] `Tick` — the 16 px check glyph (`stroke-width 2.5`) used four times in the hero

## 2 — Chrome

- [ ] `LicenceBar` — 37 px `#242420`, 12 px `#ebebe7`, facts + `4.9` rating; **not sticky**; facts must wrap
      or drop whole items below `sm` (the reference clips mid-word — do not copy that)
- [ ] `Header` — sticky, `white/90` + `backdrop-blur-lg`, `h-16 lg:h-20`, 1 px `#ebebe7`; nav `xl` (1280)
      not `lg`; phone pill `md`; city pill `2xl`; CTA `xl`; hamburger below `xl`; `shadow-lg` past 50 px
- [ ] `MobileMenu` — `aria-expanded`, glyph swap, six rows + pills + full-width CTA
- [ ] `SkipLink`, `ScrollProgress` (2 px `#974e2c`), `BackToTop` (48 px disc, 300 px threshold),
      `Preloader` (non-blocking; never trap content behind `load`)
- [ ] `CookieStrip` — `role="dialog"`, reveals after **1,500 ms**, `accepted` / `essential` in
      `localStorage['cookie-consent']`, slides out and unmounts
- [ ] `StickyCallBar` — fixed bottom, `lg:hidden`, 97 px at 390

## 3 — Hero (`#quote`)

- [ ] 12-col grid, copy `lg:col-span-7` (+ `lg:pt-6`), card `lg:col-span-5`, `gap-16` at `lg`, band `#f6f6f4`
- [ ] eyebrow, `h1` (60/66, −1.5 px, second sentence in `#974e2c`), lead, rating line (5 amber stars + `4.9`
      + sample note), four ticks in `sm:grid-cols-2`
- [ ] `SurveyCard` — `h2` 20/24 700, promise line, three required fields (name / phone / problem select with
      the reference's seven options), full-width submit, 12 px footnote
- [ ] submit produces an **observable result** (confirmation state); `action="#"` must not become a real GET

## 4 — `#emergency`

- [ ] 164 px `#974e2c`, `py-6 lg:py-8`, `flex-col lg:flex-row lg:justify-between`
- [ ] pulsing dot (`animate-ping` twin), 14/600 uppercase kicker, 18/700 line, 14 px paragraph at 90 %
- [ ] white **full-radius** pill `(555) 070-0700` with a phone glyph (215 × 52)

## 5 — `#compare` (the design)

- [ ] header block (`The decision` / "Relining against digging, row by row" / lead) in `max-w-2xl`
- [ ] wrapper `mt-10 rounded-2xl border border-ink-200 overflow-hidden`
- [ ] column header row: `hidden md:grid md:grid-cols-12`, `#f6f6f4`, `px-6 py-4`, 53 px
- [ ] `ComparisonRow` — 12-col, 4/4/4, `px-6 py-5`, 88 px, even rows `bg-ink-50/60`, mobile labels
      (`RELINING` `#7b3f26` / `OPEN CUT` `#848475`) shown only below `md`
- [ ] **emphasis data lives in the row data, not in the component**: rows 1–4 + 9 bold relining, rows 5–7 bold
      open cut, row 8 bold neither
- [ ] the counting note + fine print under the table; add a unit test asserting 5 bold-relining, 3
      bold-open-cut, 1 neutral across the nine rows

## 6 — `#process` and `#services`

- [ ] four steps in `sm:grid-cols-3` (**3 + 1 — keep it**), number `tabular-nums` `#974e2c` + 1 px rule,
      `h3` 18/700, body 16 `#636356`, tag 14/600 `#7b3f26`
- [ ] services plate: `grid gap-px` on `#ebebe7`, radius 16, six white cells `p-8`, `sm:grid-cols-2
      lg:grid-cols-3`; each cell `flex flex-col` with a `flex-1` blurb so price lines align
- [ ] six price lines + the sample-price footnote

## 7 — `#why-us`

- [ ] band `#f6f6f4`, `lg:grid-cols-2 gap-16`, figure `order-last lg:order-first`
- [ ] `LinerPanel` — **inline SVG or CSS**, not a `<img>` of a downloaded asset: `#161614` ground,
      `#242420` plate radius 24, `#4A4A40` ground bar, old pipe `#383830`, liner `#b4643b`, bore `#161614`,
      two `#f6f6f4` access shafts, legend, and the title in Fraunces 26/700
- [ ] four `<dl>` entries, `border-l-2 #974e2c pl-5`, `dt` 16/700 / `dd` 16 `#636356`
- [ ] figure caption (the reference's own note about replacing the drawing with a camera still)

## 8 — `#areas`, `#testimonials`, `#faq`, `#contact`, footer

- [ ] `#areas`: 5/7 split, **no eyebrow**, twelve towns `grid-cols-2 sm:grid-cols-3`, `border-b #ebebe7`
      `py-2.5`, local-search note
- [ ] `#testimonials`: `gray-50` band, "Reviews" **pill**, stock-grey headings, three cards 381 × 320
      `shadow-soft`, five `#c97f55` stars, 48 px initials, carousel 3/2/1 with **0 dots + no arrows at `lg`**,
      pill-style active dot (32 px), 500 ms transform
- [ ] `#faq`: "Questions" pill, five rows `divide-y #e5e7eb`, 81 px closed, 32 px disc rotating 45°,
      single-open `max-height`/`opacity` accordion
- [ ] `#contact`: `#7b3f26`, 440 px, white `h2` 36/40, `#f5e5d9` lead, white 240 × 56 + 2 px outline
      255 × 60, stacked below `sm`
- [ ] footer: `#111827`, `pt-24`, 12-col 4/5/3, logo-light 40 px, three social chips, three link columns,
      newsletter row (wrapping), bottom bar; **Component Dock link** in the footer

## 9 — Verify before the PR

- [ ] `scripts/verify-app.sh conduit` green (typecheck + lint + knip/fallow + 100 % coverage + build)
- [ ] `npm run spec:validate` green
- [ ] no horizontal scroll at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600 — **the reference reports 401 px at
      320 and 390; the recreation must not**
- [ ] dark mode by toggle and by `prefers-color-scheme`; band-by-band colours match the spec table
- [ ] `prefers-reduced-motion: reduce`: nothing stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] zero bare `#` anchors, no dead ids (the reference ships `#service-areas` twice), every `tel:` well formed
- [ ] `grep -ri "colorlib\|nodig" apps/conduit` → **no matches** (provenance lives in the spec and the PR)
