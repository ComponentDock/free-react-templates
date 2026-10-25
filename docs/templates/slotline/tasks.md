# Slotline — build tasks (ColorLib `halfpast`)

Implementer checklist. Work in `apps/slotline`. Tests precede code (red → green), and
`npm run verify:app slotline` gates the push. Statuses below are **not** ticked by the prep stream.

## 0. Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/slotline`, rename package to `@free-react-templates/slotline`
- [ ] `public/CNAME` = `slotline.free.componentdock.com`; `"homepage"` the same; footer links
      `https://www.componentdock.com/`
- [ ] `index.html`: `<title>Slotline — one diary, every way people try to book you</title>`, meta
      description, Google Fonts preconnect + the two verified `css2` URLs (Inter 400–700, Fraunces opsz
      400/500/600)
- [ ] `index.css` `@theme`: `--color-primary-50…900` and `--color-accent-50…900` from the spec's hex
      tables (no `accent-600` — it does not exist in the reference); `--font-sans: Inter…`,
      `--font-serif: Fraunces, Georgia, serif`
- [ ] Register the workspace in the lockfile (`npm install` at the root — never hand-edit
      `package-lock.json`)

## 1. Primitive tests (before any section code)

- [ ] `ui/Button` renders `rounded-full` vs `rounded-lg` variants and forwards `disabled`
- [ ] `ui/Pill` renders the sage kicker (12 px uppercase, 1.68 px) and the lavender kicker (14 px, sentence case)
- [ ] `ui/Section` enforces the `py-20 lg:py-28` rhythm and the `bg-white` / `bg-gray-50 + border-y` alternation
- [ ] `hooks/useScrollProgress`, `useReveal`, `useCounter`, `useTypewriter` each tested in isolation with
      fake timers and `matchMedia` stubbed

## 2. Chrome

- [ ] skip link → `#main-content`
- [ ] `ScrollProgress` (2 px, `accent-500`, `scrollY / (scrollHeight − innerHeight)`)
- [ ] header: sticky, `bg-white/80 backdrop-blur-lg`, 1 px border, `h-16 lg:h-20`, shadow past 50 px
- [ ] wordmark redrawn (clock circle `#493748` + `#688554` minute hand) — inline SVG component, no asset fetch
- [ ] six nav labels + `scroll-spy` on `book|availability|policies|channels|pricing|contact`
- [ ] CTA `rounded-lg bg-primary-600 px-5 py-2.5 text-sm` (measured 177 × 40)
- [ ] mobile: hamburger ↔ close, `aria-expanded`, panel with `block py-3` labels + full-width CTA
- [ ] `MobileCtaBar`: two `rounded-full` pills, `lg:hidden`, 69 px
- [ ] back-to-top disc (48 px, past 300 px), cookie strip (1.5 s, in-memory only)
- [ ] no preloader, no dark toggle

## 3. Hero

- [ ] sage gradient band + two `blur-3xl` blobs with the 8 s / 10 s reverse float keyframes, parallax
      factors `0.15` / `-0.1`
- [ ] live pill: `accent-200` border, `bg-white/70`, 8 px dot with `animate-ping` ring
- [ ] `h1` Fraunces 600 `text-4xl sm:text-5xl lg:text-6xl`, second line `.text-gradient` + typewriter
      (three phrases, 3 s, 300 ms fade/10 px lift)
- [ ] three controls: plum `rounded-full` CTA, outline CTA, 48 px play disc + `Watch a 90-second setup`
- [ ] **static** stat strip: `6 / 31 / 4 / 0` in Fraunces 36 px over a `border-t pt-10`, `grid-cols-2 sm:grid-cols-4`
- [ ] framed photo: `max-w-5xl`, 2:1, `rounded-2xl shadow-2xl ring-1 ring-gray-200`,
      `picsum.photos/seed/slotline-hero/1200/600`
- [ ] video modal (authored sample only — never `dQw4w9WgXcQ`), Escape/backdrop/×, body scroll lock

## 4. Counter strip

- [ ] four counters `primary-600` Inter 700 `text-4xl lg:text-5xl`, labels 14/20 500 `gray-600`
- [ ] `IntersectionObserver` at 0.5, 2 s ease-out cubic, integer rounding, **no** thousands separator
- [ ] `prefers-reduced-motion` → final values on first paint

## 5. `#book` — the widget (the highest-risk part; test first)

- [ ] three `lg:col-span-4` columns in a 1216 px `rounded-2xl border shadow-sm` card, `p-6`, `border-r`
- [ ] service radios: 3 options with price + duration + optional note, `has-[:checked]` plum border +
      `bg-primary-50`, native radio `accent-primary-700`
- [ ] calendar table: `caption` (sr-only), seven `text-[0.65rem]` day letters with sr-only names, month
      label Fraunces 18/28 600, day cells 36 px `rounded-lg`, hover `bg-primary-100`,
      `aria-pressed:bg-primary-700`
- [ ] day model: 21 pressable days + 10 `span` days (`title="Fully booked"`, `text-gray-300`, not
      focusable); **day 14 pressed on load**; caption line *"Greyed days are fully booked. 21 of 31
      days still have space."*
- [ ] slots: 9 buttons, 3 `disabled` dashed, 2 accent `data-` scarce with titles, selected =
      plum/white semibold; `grid-cols-3 gap-2`
- [ ] summary `dl` (Service / When / Total) + status line transitions
      (`No card needed…` → `This slot is held for 10 minutes.` → `Demo only — no booking was made.`)
- [ ] confirm button `disabled` until service + day + slot all set
- [ ] tests: initial state, each single change, full selection, re-selection resets the other days,
      confirm press, keyboard operation

## 6. `#availability`

- [ ] `overflow-x-auto rounded-2xl border p-5` card around `min-w-[46rem] border-separate border-spacing-1`
- [ ] 4 rows × 7 chips at 44 px `rounded-md` 12 px medium, each `title="<name>, <day> — <state>"` + `.sr-only` state
- [ ] four states incl. the arbitrary `repeating-linear-gradient` hatch for `Not working`
- [ ] legend (4 × `h-4 w-6` swatches) + utilisation column `tabular-nums` (83 / 85 / 79 / 73 %)
- [ ] the two closing sentences

## 7. `#policies`

- [ ] `ol` of 4 `rounded-xl border p-6` rungs; pill colours sage → plum → plum → near-black
- [ ] rung titles Fraunces 20/28 600; body 14/20 `gray-600`
- [ ] six settings rows: `border-t pt-4`, `dt` label + `accent-700` `tabular-nums` value, `dd` 14/20
- [ ] closing 31 %-median note

## 8. `#channels`

- [ ] four `divide-y` rows, `lg:grid-cols-12` (3 / 4 / 3 / 2)
- [ ] bars: 32 px `bg-gray-100` track, `primary-700` fill at exactly 100 / 61 / 41 / 25 %,
      `role="img"` + `aria-label`
- [ ] `Setup:` in `accent-700` medium + value `gray-500`, right-aligned at `lg`
- [ ] two footnotes (bars scaled to the largest channel; phone share falls to a tenth)

## 9. `#pricing`

- [ ] centred header, **Inter 700** `h2`, lavender kicker
- [ ] `role="switch"` `aria-checked` toggle (56 × 28, 20 px knob, `translateX(28px)`), `Monthly` /
      `Yearly` labels + green `Save 20%` pill
- [ ] three cards: `bg-gray-50` / `bg-white ring-2 ring-primary-600` + `Most Popular` pill / `bg-gray-50`
- [ ] prices 48 px 700 `tabular-nums`, `$12/39/89` ↔ `$10/32/74`, notes swap, 150 ms fade
- [ ] feature lists with plum checks and Solo's two grey ✕ items
- [ ] plan-name `h3` Inter 600 20 px (not Fraunces)

## 10. `#faq`

- [ ] centred header (**Inter 700**), six rows in `mx-auto max-w-3xl`, `divide-y`
- [ ] exclusive accordion, `max-height = scrollHeight`, plus glyph rotates 45°
- [ ] `aria-expanded` + `aria-controls` (recreation improvement over the reference)

## 11. `#contact`

- [ ] `from-primary-600 to-primary-800` gradient + two `white/10` `blur-3xl` circles + 40 px dot grid at
      `opacity-10`
- [ ] `h2` Inter 700 48/48 white, lead 18/28 `primary-100` `max-w-xl`
- [ ] white CTA (arrow) + ghost CTA with `border-2 border-white/30`; stack at 390; bottom padding clears
      the mobile bar

## 12. Footer

- [ ] `bg-gray-900`, `pt-16 lg:pt-24`, 12-col grid (4 / 5 / 3)
- [ ] brand column: logo-light (redrawn), 4-line positioning, three social tiles (real hrefs or
      non-anchors), `hello@slotline.app`, `No commission on your bookings. Ever.`
- [ ] three link columns, only rendering hrefs that resolve (Product 4 anchors, Company 2, Help 1)
- [ ] newsletter form with real validation + success toast
- [ ] bottom bar `© 2026 Slotline. All rights reserved.` + `Component Dock` link

## 13. Cross-cutting

- [ ] 390 / 768 / 1024 / 1440 checks against the spec's responsive tables
- [ ] reduced motion: kill reveal, typewriter, counters, floats, parallax, accordion transitions
- [ ] one `h1`, seven `h2`, no skipped heading levels
- [ ] zero `href="#"`, zero dead links
- [ ] no reference-brand strings anywhere in `apps/slotline`
- [ ] `TEMPLATES.md` row under `## Business` between `Hairsal` and `Halo`, count re-measured, `[~]` →
      `[x]` after merge, `npm run readme:status`
- [ ] PR body: source slug, preview URL, token summary, the deliberate deviations
