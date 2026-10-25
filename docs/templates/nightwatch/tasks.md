# Nightwatch — task outline

Recreation of the ColorLib **Nightshift** commercial-cleaning design (`nightshift`) at `apps/nightwatch`.
Spec is the authority: `openspec/specs/template-nightwatch/spec.md`. Design notes:
`docs/templates/nightwatch/design-notes.md`. Check boxes only as work ships.

> The page's thesis is the **estimator in the hero**. Build the card and its arithmetic first; every other
> band is supporting evidence for that number. Text is in the spec — copy it, do not re-invent it.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/nightwatch`; rename the package to
      `@free-react-templates/nightwatch`
- [ ] `public/CNAME` = `nightwatch.free.componentdock.com`; `homepage` = `https://nightwatch.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/nightwatch" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Inter 400/500/600/700** + **JetBrains Mono 400/600**
      (`css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap`);
      `display=swap`, `preconnect` to `fonts.gstatic.com`
- [ ] pre-paint theme script (`localStorage.theme` → `prefers-color-scheme`) in `<head>`
- [ ] `@theme` in `src/index.css`: the `ink` 10-step navy ramp and the `primary` 10-step amber ramp (exact
      hexes in the spec §Design tokens), `--radius-2xl: 1rem`, `--shadow-soft: 0 4px 16px -4px #0000001a`,
      `font-sans: Inter…`, `font-mono: "JetBrains Mono", Consolas, monospace`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [ ] `Button` — `solid` (`#f0b429`, label `#0d1522`, radius 8, `px-5 py-2.5`, 14/700, hover `#f7c948`),
      `light` (white ground, `#cb6e17` label, `px-8 py-4`, 16/700), `outline-light` (2 px `white/40`,
      `px-8 py-4`), `block` (full width, for the form submit)
- [ ] `Pill` — the shared control for frequency/extras: full radius, 1 px `#cad3e4`, `px-4 py-2`, 14/600
      `#314262`; selected `#162135` + white; **must keep a real (visually hidden) radio/checkbox** with a
      `peer-focus-visible` ring on the pill
- [ ] `Field` — 46 px, radius 8, 1 px `#cad3e4`, `px-4 py-2.5`, 16/24; `mono` variant for the square
      footage; focus `border #f0b429` + 2 px ring `#f0b429/30`
- [ ] `Eyebrow` — `band` (14/700 `#cb6e17`), `hero` (14/700 `#f7c948`), `neutral` (14/700 `#465a80`,
      `#scope` only)
- [ ] `SectionHeading` — eyebrow + `h2` 36/40 700 −0.9 + optional lead 18/28 `#465a80`, `max-w-2xl`
      (centred `max-w-3xl` variant for testimonials/FAQ)
- [ ] `Card` — radius 16, 1 px `#cad3e4`, white; `shadow-soft` variant for testimonials
- [ ] `Reveal` — `opacity 0 / translateY(20px)`, 600 ms, stagger via delay, IO `threshold .1` +
      `rootMargin 0 0 -10%`, **bails out entirely under reduced motion**
- [ ] `useTheme` — pre-paint class + persisted toggle

## 2 — Chrome

- [ ] `LicenceBar` (37 px, `#162135`, 12 px: "Bonded and insured **$2M general liability**" · "Every
      cleaner background checked" · "Serving **Central Indiana**" + `amber-400` star, `4.7`, "90+ reviews
      on Google (sample)"; items 2–3 `hidden sm:flex`)
- [ ] `Header` — logo pair, seven labels 14/600, phone pill, theme toggle, CTA, hamburger; nav + CTA at
      **1280**, city pill at **1536**, `shadow-lg` past 50 px
- [ ] `MobileMenu` — seven full-width rows + phone + city + CTA, `aria-expanded`, ☰ ↔ ✕
- [ ] `#preloader` — spinner, `load`/`readyState` derived removal (never blocks content)
- [ ] `ScrollProgress` (2 px `#de911d`) · `BackToTop` (48 px disc, > 300 px) · `SkipLink`
- [ ] `CookieStrip` — 1,500 ms delay, `accepted` / `essential`, self-removing

## 3 — Hero + estimator (`#top`, `#proposal`)

- [ ] `#0d1522`, `py-16 lg:py-24` (**1,028 px** at 1440), 12-col `5 / 7`, `gap-16`, `items-start`
- [ ] 460 px `#f0b429/10` `blur-3xl` circle at `-left-40 top-1/3`, clipped, `aria-hidden`
- [ ] Copy column (`lg:pt-6`): eyebrow; `h1` 60/64.8 700 −1.5 px with `A number out.` in `#f7c948`; lead
      18/28 `white/70`; four-tick `<ul>`
- [ ] `Estimator` card (683 × 836, radius 16, `p-6 sm:p-8`): facility select (six options with `data-rate`
      20/34/26/12/22/30), square footage (`min 500`, `step 500`, default **12000**, mono), frequency pills
      (0.32/0.52/0.70/1.00, five nights default), extras pills (+180/+340/+120/+2400), range box, name +
      email, submit, fine print, hidden `role="status"` confirmation
- [ ] Range maths: `rate/100 × sqft × factor + Σ extras`, band `×0.85 … ×1.15`, **round to nearest 50**,
      `toLocaleString("en-US")`, `—` when a term is missing, recompute on `input` **and** `change`
- [ ] Tests pin the three readings in the spec ($2,050–$2,750 · $5,800–$7,800 · $6,050–$8,200) and the em
      dash case

## 4 — `#scope`

- [ ] `max-w-2xl` head with the **neutral** eyebrow `#465a80`; `h2` 36/40; lead
- [ ] Wrapper `mt-10`, radius 16, 1 px `#cad3e4`, clipped; header row `#f4f6fa` "Standard office scope…"
- [ ] `<dl>` of **eleven** rows: `dt` 2/5 (466 px) 16/700 `#162135`, `dd` mono 14/20 `#465a80`, zebra rows
      at 60 % `#f4f6fa`, row padding `16px 24px`
- [ ] Sample-scope note 14/20 `#65799f`

## 5 — `#industries`

- [ ] `max-w-2xl` head (eyebrow `#cb6e17`), lead ending "per cleanable square foot per month at five
      nights a week"
- [ ] One wrapper `bg #e6eaf2`, `gap-px`, radius 16, 1 px border; six white cells `p-8` (404 × 208 at
      1440), 1 / 2 / 3 columns
- [ ] Cell: `h3` 18/700, blurb `flex-1` 16/24, rate 14/700 `#cb6e17`
- [ ] Sample-rates note

## 6 — `#why-us`

- [ ] `#f4f6fa`, two columns `gap-16`, `items-center`; figure `order-last lg:order-first`
- [ ] **Roster panel** as an inline SVG or CSS grid (5 × 5 shift chips, MON–FRI mono header, amber `#f7c948`
      chips with initials, `#22304a` relief chips, footnote line) at 4:3, radius 16 — **not a photograph**
- [ ] Figcaption "Replace with a photograph of your own crew before launch."
- [ ] Four-entry `<dl>`, each `border-l-2 #de911d pl-5`, `space-y-6`, `dt` 16/700, `dd` 16/24

## 7 — `#process`

- [ ] `max-w-2xl` head; `<ol>` `mt-12 grid sm:grid-cols-3 gap-8 sm:gap-6` with **four** items (3 + 1)
- [ ] Number row: `01`–`04` 14/700 `tabular-nums` `#de911d` + 1 px `#e6eaf2` rule
- [ ] `h3` 18/700, blurb 16/24, tag 14/600 `#cb6e17`

## 8 — `#areas`

- [ ] 12-col `5 / 7` split, `h2` + lead (no eyebrow)
- [ ] `<ul>` of **fourteen** towns, `grid-cols-2 sm:grid-cols-3`, `border-b #e6eaf2 py-2.5`, plain text
- [ ] Closing note about local search

## 9 — `#testimonials`

- [ ] `#f9fafb`; centred head with "References" pill (`#fff3c4` / `#cb6e17`), `h2` in `gray-900`, note
- [ ] Carousel: track + three slides `px-3`, per-view 3/2/1, `translateX`, `transition-transform .5s`
- [ ] Arrows 36 px white discs shown only when `maxIndex > 0`; dots injected, none when one position
      (**at 1440 there is one position: no arrows, no dots**)
- [ ] Autoplay 5 s, reset on arrow/dot click, pause on hover
- [ ] Card: five 20 px `#f7c948` stars, curly-quoted 18/28 quote, 48 px `#fff3c4` disc, name + role

## 10 — `#faq`

- [ ] "Questions" pill, `h2`, note; list `max-w-3xl mt-16`, rows `divide-y #e5e7eb py-6`
- [ ] Full-width `<button>` with 18/600 question + 32 px `#f3f4f6` disc whose plus rotates 45°
- [ ] One answer open at a time, `max-height` + `opacity` over 300 ms; `aria-expanded` / `aria-controls`

## 11 — `#contact` + footer

- [ ] `#cb6e17` band, **440 px**, centred `max-w-3xl`, white `h2` 36/40 −0.9, `#fff3c4` lead `max-w-xl`
- [ ] White 56 px button → `#proposal`; 60 px 2 px `white/40` outline with phone glyph → `tel:`
- [ ] Footer `#111827`, `pt-16 lg:pt-24`, 12-col 4 / 5 / 3: brand (logo 210 × 40, blurb, three social chips
      with **real** destinations, address, phone, `mailto:`), three link columns, "Stay Updated" form
- [ ] Bottom bar `mt-16 border-t #1f2937 py-8`: copyright + Privacy Policy / Terms of Service
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")

## 12 — QA

- [ ] `scripts/verify-app.sh nightwatch` — typecheck + lint + knip + fallow + 100% coverage + build
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600 (the reference overflows
      to 401 px at 320/390 because of its newsletter row — the recreation must not)
- [ ] reduced-motion pass: no reveal stuck invisible, no autoplay, no smooth scroll
- [ ] dark-mode pass: `#030712` body, `#111827` tinted bands, hero/contact/footer unchanged, no white flash
      on reload
- [ ] zero bare `#`; `#areas` (not `#service-areas`) for both city pills; every anchor clears the 81 px
      header; every image has `alt`
- [ ] no ColorLib string in `apps/nightwatch/**`; `public/CNAME` + `homepage` correct
