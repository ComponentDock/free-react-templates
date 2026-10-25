# Pipewright — build tasks (ColorLib `journeyman`)

Implementer checklist. Work in `apps/pipewright`. Tests precede code (red → green), and
`npm run verify:app pipewright` gates the push. Statuses below are **not** ticked by the prep stream.
Read `openspec/specs/template-pipewright/spec.md` first — it is the authority; this file is the order of work.

## 0. Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/pipewright`, rename package to `@free-react-templates/pipewright`
- [ ] `public/CNAME` = `pipewright.free.componentdock.com`; `"homepage"` the same; footer links
      `https://www.componentdock.com/`
- [ ] `index.html`: `<title>Pipewright — the plumber who answers his own phone</title>`, meta description,
      Google Fonts preconnect + the two verified `css2` URLs (Inter 400–700, Playfair Display 400–700)
- [ ] `index.css` `@theme`: `--color-ink-50…900` and `--color-primary-50…900` from the spec's hex tables
      (sixteen hand-picked values, no stock palette for either ramp), `--font-sans: Inter, system-ui,
      sans-serif`, `--font-serif: "Playfair Display", Georgia, serif`, and the `.section` /
      `.shadow-soft` custom rules
- [ ] Register the workspace in the lockfile (`npm install` at the root — never hand-edit
      `package-lock.json`)

## 1. Primitive tests (before any section code)

- [ ] `ui/PhonePill` renders the bronze pill in its two scales (header **183 × 46** `px-4 py-2.5` /
      emergency `px-6 py-3 text-lg`) and emits a valid `tel:+15550100142` href
- [ ] `ui/Kicker` renders 12 px / 600 / uppercase / `+0.2em` in `primary-700`
- [ ] `ui/Section` enforces `80 / 112` px block padding and the five ground alternation
      (`ink-50`, `white`, `ink-50`, `white`, `gray-50`) **without** applying it to the hero or `#emergency`
- [ ] `ui/PriceRow` renders `dt` in Playfair 20 px, `dd` at 16 / 24, a right-aligned uppercase bronze price,
      and a **top** rule on rows 2–6 only
- [ ] `hooks/useScrollProgress`, `useReveal` (delays), `useCarousel` (perPage 3/2/1, `maxIndex`, autoplay)
      each tested in isolation with fake timers and `matchMedia` stubbed — remember jsdom has no
      `IntersectionObserver`/`matchMedia`: **define** them, never `spyOn`

## 2. Chrome

- [ ] skip link → `#main-content` (first focusable)
- [ ] `ScrollProgress` (2 px `primary-600`, `scrollY / (scrollHeight − innerHeight) * 100`)
- [ ] header: sticky, `h-20 lg:h-24`, `bg-ink-50/95 backdrop-blur`, `border-b border-ink-200`,
      `shadow-lg` past 50 px (measured **97 px** at 1440, **81 px** at 390)
- [ ] two-line wordmark: Playfair 600 24/30 `leading-none` + 10.4 px uppercase `+0.18em` microline with
      `truncate` (measured 267 × 36 — the microline must not push the pill off-screen)
- [ ] four uppercase nav labels, **`xl:` only** (they vanish at 1024 px — verify 1279/1280)
- [ ] phone pill from `md:` up; **no** moon button (dark mode is out of scope)
- [ ] hamburger ↔ ✕ with `aria-expanded`, panel repeating the four labels + the pill
- [ ] back-to-top disc (48 px, past 300 px), cookie strip (slides up after 1.5 s, 300 ms out,
      `localStorage.cookie-consent`)
- [ ] **no preloader** (the reference flashes a full-screen overlay; do not copy it)

## 3. Hero

- [ ] `grid-cols-12`, photo `lg:col-span-5` at `aspect-[4/5] rounded-2xl` (measured 469 × 587), copy
      `lg:col-span-7`, `gap-10 lg:gap-16`, `py-14 lg:py-20` (band **799 px**)
- [ ] `figcaption` under the photo, 14 px `ink-400`, carrying the "replace with your own photograph" note
- [ ] kicker, `h1` **Playfair 600 60 / 66** `leading-[1.1]` in `ink-800` (683 × 132), two 18/29.25 ledes
      (`max-w-xl`)
- [ ] CTA row: bronze pill + five `amber-400` stars + `5.0` bold + `opacity-80` sample-data note, wrapping
      as a unit at 390 px
- [ ] no reveal animation in the hero (it is the one band that paints immediately)

## 4. `#services`

- [ ] 4/8 split, kicker + Playfair `h2` + intro on the left
- [ ] `<dl>` with six rows: `flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8`,
      `border-t border-ink-100` on rows **2–6**, none on row 1
- [ ] `dt` Playfair 600 20 px, `dd` 16/24 `ink-500` capped at `sm:max-w-xl`, price 14 px uppercase bronze
      `tracking-wider` `shrink-0 whitespace-nowrap`
- [ ] copy verbatim from the spec's table, including `Quoted on site` and `No charge` (no `$`)
- [ ] sample-data footnote under the list

## 5. `#owner`

- [ ] centred `max-w-3xl`; 112 px round avatar; kicker `Why one van`
- [ ] Playfair lede at 24 / sm 30 `leading-snug` in `ink-800`
- [ ] two 18/29.25 paragraphs in `ink-600`
- [ ] signature (Playfair 20 px) + 12 px uppercase `+0.18em` role line
- [ ] text link `border-b-2 border-primary-600 pb-1`, `inline-flex items-center gap-2` (with its arrow)

## 6. `#emergency`

- [ ] thin strip, **not** `.section`: `py-6 lg:py-8` inner container (band **164 px** at 1440, **264 px**
      at 390)
- [ ] ping dot: `relative flex h-2 w-2` + `absolute animate-ping … opacity-60` + solid core, all
      `bg-current` (the strip inherits `ink-800`)
- [ ] `Out of hours` label (14 px uppercase `tracking-wide`, `opacity-90`), 18/20 px bold sentence, 14 px
      `opacity-90` second line
- [ ] enlarged bronze pill, right-aligned at `lg:`, stacked otherwise
- [ ] no JS — `data-emergency` is a dead marker in the reference kit

## 7. `#service-areas`

- [ ] 5/7 split; **Inter 700 36 px** `tracking-tight` heading (this is a sans `h2` — do not use the serif)
- [ ] twelve towns in `grid-cols-2 sm:grid-cols-3 gap-x-6`, each `li` `border-b border-ink-100 py-2.5`
      (45 px rows, 683 × 180 grid at 1440)
- [ ] footnote "replace this list with your own towns"
- [ ] no per-row interactive state

## 8. `#testimonials` + `useCarousel`

- [ ] band on `bg-gray-50`, 112 px padding, centred head: bronze `primary-100` badge (81 × 28),
      **Inter 700** `h2`, 18 px `gray-600` lede
- [ ] three cards `rounded-2xl bg-white p-8 shadow-soft` (381 × 348): five `primary-400` stars, 18 px
      `font-medium` quote, 48 px `primary-100` initial chip + name + town
- [ ] track `flex transition-transform duration-500 ease-out`, slides `flex-shrink-0 px-3` sized from the
      wrapper, perPage **3 / 2 / 1** by `innerWidth` on load **and** on resize
- [ ] `maxIndex = max(0, slides − perPage)`; arrows get `display:flex` **only when `maxIndex > 0`**; dots are
      generated only then (`maxIndex + 1`), active `w-8 bg-primary-600`, inactive `w-2.5 bg-gray-300`
- [ ] autoplay 5 s, cleared on `mouseenter`, restarted on `mouseleave` and on any manual move; no autoplay
      under `prefers-reduced-motion: reduce`
- [ ] tests must pin the three observed states: **1440 → 0 dots + both arrows `none` + translate 0**,
      **900 → 2 dots + arrows visible**, **390 → 3 dots**
- [ ] reveal: the badge, heading (delay 100), lede (delay 200) and the three cards (100 / 200 / 300) rise
      20 px over 600 ms; nothing above this band animates

## 9. `#contact`

- [ ] full-bleed `bg-primary-700` (`#946a2d`), 112 px padding, `max-w-3xl` centred, band **440 px**
- [ ] `h2` Inter 700 36 px white `tracking-tight`; lede 18/29.25 `primary-100`
- [ ] primary CTA white `rounded-lg` (8 px) `px-8 py-4 text-base font-bold text-primary-700`
      (218 × 56); secondary transparent `border-2 border-white/40` (259 × 60)
- [ ] the secondary resolves somewhere real (`mailto:` is fine) — **not** a dead route and **not** `#`
- [ ] both `w-full` and stacked at 390 px

## 10. Footer

- [ ] `bg-gray-900`, `pt-16 lg:pt-24`, twelve-column grid: brand + socials + address (col-span-4),
      three link columns (col-span-5), licence (col-span-3); measured **543 px**
- [ ] light logo authored inline (190 × 40) — do **not** fetch `assets/img/logo-light.svg`
- [ ] three `bg-gray-800` social tiles with `aria-label` and **real** targets (the reference's are `#`)
- [ ] link columns: 14 px / 600 / uppercase / `+0.05em` white heads, `gray-400` links, `hover:text-white`
- [ ] address block with a **valid** `tel:` and a `mailto:`
- [ ] legal bar `border-t border-gray-800`, `© 2026 Pipewright`, and the Component Dock link

## 11. Verification

- [ ] Anchor audit test: zero `href="#"`, zero malformed `tel:` (the reference ships one:
      `tel:(555) 010-0142`), every in-page label resolves to an existing id
- [ ] Heading audit test: one `h1`, four `h2`, three `h3`, no skipped level
- [ ] Band-height test at 1440 (±3 % of the spec's table) and no horizontal overflow at
      320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] Reduced-motion test: no reveal, no ping, no autoplay, no smooth scroll
- [ ] `npm run verify:app pipewright` green with 100 % coverage
- [ ] Add the `TEMPLATES.md` row under `## Business` between **Jobpply** and **Kanox**, bump
      `## Business (372)` → `(373)`, regenerate `README.md` after deploy
