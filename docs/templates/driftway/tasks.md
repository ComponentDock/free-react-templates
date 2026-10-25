# Driftway — build tasks (ColorLib `kinetic`)

Implementer checklist. Work in `apps/driftway`. Tests precede code (red → green), and
`npm run verify:app driftway` gates the push. Statuses below are **not** ticked by the prep stream.
Read `openspec/specs/template-driftway/spec.md` first — it is the authority; this file is the order of work.

## 0. Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/driftway`, rename the package to `@free-react-templates/driftway`
- [ ] `public/CNAME` = `driftway.free.componentdock.com`; `"homepage"` the same; footer links
      `https://www.componentdock.com/`
- [ ] `index.html`: `<title>Driftway — motion that survives a Lighthouse audit</title>`, a meta description,
      Google Fonts preconnect + the verified `css2` URL for **Poppins 300;400;500;600;700;800**
- [ ] `index.css` `@theme`: `--color-primary-50…900` (violet: `#f5f3ff #ede9fe #ddd6fe #c4b5fd #a78bfa
      #8b5cf6 #7c3aed #6d28d9 #5b21b6 #4c1d95`) and `--color-accent-200/300/400/500/900`
      (`#d9f99d #bef264 #a3e635 #84cc16 #365314`), `--font-sans: Poppins, system-ui, sans-serif`,
      plus the `.tilt`, `.marquee`, `.reveal-line`, `.draw-path`, `.magnetic`, `.shadow-soft`,
      `.text-gradient`, `.animate-hero-float(-reverse)` rules and the single
      `@media (prefers-reduced-motion: reduce)` block from the spec
- [ ] Register the workspace in the lockfile (`npm install` at the root — never hand-edit
      `package-lock.json`)

## 1. Primitive tests (before any section code)

- [ ] `ui/Pill` — three sizes: hero badge (14 px, `px-4 py-1.5`, `primary-50` on `primary-200`, full
      radius), chip (11 px mono uppercase, `px-2.5 py-1`, radius 8, `primary-800` on `primary-100`), and
      the lime variant (`accent-900` on `accent-200`)
- [ ] `ui/CTA` — solid violet (`px-6 py-3`, radius 8, `shadow-lg shadow-primary-600/25`), white outline
      (`border-gray-300`), white-on-gradient and the 2 px `white/30` outline variant
- [ ] `ui/Section` — enforces `80 / 112` px block padding and the ground alternation
      (`gradient`, `gray-50`, `gray-50`, `white`, `gray-950`, `white`, `gray-50`, `white`, `gradient`) with
      the hero and marquee strips opting out (`py-20 / lg:py-32` and `py-10`)
- [ ] `hooks/useReveal` — `data-delay` honoured; **returns early and leaves everything visible** under
      reduced motion; jsdom has no `IntersectionObserver` → **define** a stub, never `spyOn`
- [ ] `hooks/useCounter` — 2 s cubic ramp; suffix table `%`, `+`, `K`, `M`, `$`, decimal; renders the final
      string on first paint when the observer is absent
- [ ] `hooks/useCarousel` — perPage 3/2/1 from `innerWidth`, `maxIndex = max(0, slides − perPage)`,
      dots rebuilt, arrows hidden at `maxIndex === 0`, 5 s autoplay paused on hover, re-init on resize
- [ ] `hooks/useMagnetic` / `useTilt` / `useParallax` — each returns **no** listener under reduced motion

## 2. Chrome

- [ ] skip link → `#main-content` (first focusable), violet pill on focus
- [ ] `ScrollProgress` — 2 px `primary-600`, `scrollY / (scrollHeight − innerHeight) * 100`
- [ ] header: sticky, `h-16 lg:h-20`, `bg-white/80 backdrop-blur-lg`, `border-b gray-200`,
      `shadow-lg` past 50 px (measured **81 px** at 1440, **65 px** at 390)
- [ ] wordmark: authored SVG (two inks), `h-8 lg:h-10`; **not** the source asset
- [ ] nav: seven labels, `gap-8`, 14 px / 500, visible **only at ≥1024 px**; `.nav-active` from an
      IntersectionObserver over `#showcase` / `#scroll-story` / `#interactions`
- [ ] theme toggle (`.dark` + `localStorage.theme`) with a no-flash inline script in `index.html`
- [ ] mobile disclosure: `aria-expanded`, `hidden` panel, hamburger ⇄ close icon
- [ ] cookie strip (`localStorage.cookie-consent`, +1.5 s), back-to-top (past 300 px), mobile call bar
      (`lg:hidden`) — **no preloader**

## 3. Hero

- [ ] gradient band `primary-50 → white`, two `blur-3xl` blobs with `animate-hero-float(-reverse)` and
      `data-parallax` 0.15 / −0.1 (both `aria-hidden`, both clipped by `overflow-hidden`)
- [ ] badge with the pinging 8 px dot
- [ ] `h1` 60 / 60 / −1.5 px with the gradient `.text-gradient` span cycling three phrases every 3 s
      (**static under reduced motion**)
- [ ] lede 20 / 28 at `max-w-2xl`; three CTAs (violet, outline, play disc + label → video modal)
- [ ] four-stat hairline strip (`grid-cols-2 sm:grid-cols-4`, `border-t`, 36 px numbers / 14 px labels)
- [ ] hero image `max-w-5xl`, `rounded-2xl`, `ring-1 gray-200`, `shadow-2xl`, placeholder at **2:1**
      (1024 × 512), honest alt

## 4. Marquee strip

- [ ] two `.marquee` rows, 6 and 5 phrases **doubled** (12 / 10 `<li>`), `gap-8`, 30 px / 700
- [ ] `32s linear infinite`, row 2 `marquee--reverse`, `animation-play-state: paused` on viewport hover
- [ ] 96 px `from-gray-50 to-transparent` edge fades, `aria-hidden`, `pointer-events-none`
- [ ] `animation: none` under reduced motion

## 5. Counters

- [ ] four `[data-counter]` values `12`, `0`, `60fps`, `100%`; 48 px / 700 `primary-600`; 2 s ramp;
      labels 14 px / 500

## 6. `#showcase`

- [ ] head: lime chip, `h2` 36 / 40 / −0.9, lede
- [ ] **twelve** cards in `sm:grid-cols-2 lg:grid-cols-3 gap-6`, `rounded-3xl`, 24 px padding, border only
- [ ] per card: chip, `h3` 18 / 28, 14 / 22.75 body, 12 px mono token above a `border-t gray-100` rule,
      and the `160 px` blurred corner blob scaling 1.5× on `group-hover`
- [ ] `data-tilt="6"` (perspective 900 px, ±12°) — no handler under reduced motion
- [ ] reveal delays 0, 80, … 880 ms

## 7. `#scroll-story`

- [ ] `bg-gray-950 text-white`, `py-24 sm:py-32`, sticky `h-1` rail (`bg-white/10`) with a
      `from-primary-500 to-accent-400` fill whose `scaleX` tracks the band
- [ ] chip `accent-300` on `white/10`, `h2` in a `.reveal-line` mask
- [ ] three `ol` rows in `sm:grid-cols-[auto_1fr]`, `space-y-24`, ordinals 48/60 px mono at `white/15`
- [ ] self-drawing 800 × 60 SVG: one round-cap path, `linearGradient` `#7c3aed → #a3e635`,
      `stroke-dashoffset` → 0 over 1.4 s, complete under reduced motion

## 8. `#interactions`

- [ ] four cards `lg:grid-cols-4 gap-5`, `rounded-2xl`, hover `-translate-y-2` +
      `border-primary-400` + `shadow-xl`, bottom gradient rule `scaleX 0 → 1`
- [ ] magnetic pill: `.btn-primary px-8 py-4`, `data-magnetic="0.3"`, translate `delta × 0.3`

## 9. `#testimonials`

- [ ] three cards, `rounded-2xl p-8 shadow-soft`, five 20 px `primary-400` stars, 18 px quote,
      48 px initial disc
- [ ] carousel: **no dots and hidden arrows at 1440**, 2 dots at 900, 3 at 390, 5 s autoplay, pause on hover
- [ ] dots have `aria-label="Go to slide N"`; arrows have labels too

## 10. `#faq`

- [ ] five rows, `divide-y gray-200`, `py-6`, 18 px / 600 question, 32 px `gray-100` plus disc
- [ ] single-open `max-height` transition (300 ms), icon `rotate(45deg)`
- [ ] `aria-expanded` + `aria-controls` + a labelled region — **the reference omits all three**

## 11. `#contact`

- [ ] `bg-gradient-to-br from-primary-600 to-primary-800`, two `white/10 blur-3xl` discs, 40 px dot grid at
      `opacity-10` (all `aria-hidden`)
- [ ] white `h2` at 48 px, 18 px `primary-100` lede, white pill + 2 px `white/30` outline CTA
- [ ] full-width stacked CTAs at 390 px

## 12. Footer

- [ ] `#111827`, `pt-16 lg:pt-24`, `lg:grid-cols-12` (4 / 5 / 3), 40 px `gray-800` social tiles with real
      targets, address / phone / email
- [ ] three link columns; **no `#spaces`** — every link resolves
- [ ] newsletter input + Subscribe; input must shrink, and the row must not overflow at 390 px
- [ ] legal bar + **"Made with Component Dock"** → `https://www.componentdock.com/`

## 13. Tests to mirror the spec

- [ ] One `describe` per section; one `it` per Gherkin scenario in the spec's fifteen requirements
- [ ] Viewport scenarios assert the measured numbers (`81 / 65` header, `1,437` hero, `3 / 2 / 1` grid,
      `0 / 2 / 3` dots, `48 / 0 / 60fps / 100%`, `452` closing band)
- [ ] A "no dead links" test that walks every `a[href]` and asserts no `#`, no missing ids, valid `tel:`
- [ ] A reduced-motion test (`matchMedia` stubbed) asserting no listeners attach and content is visible

## 14. Before the PR

- [ ] `npm run verify:app driftway` green (typecheck, lint, 100 % coverage, build)
- [ ] `scrollWidth === clientWidth` at 320/390/768/1024/1280/1440
- [ ] no `colorlib` string anywhere in `apps/driftway`
- [ ] `TEMPLATES.md` row added under `## Creative` between `Kiddos` and `Labs`, heading `(55)` → `(56)`
- [ ] `npm run readme:status` after the deploy; app live at `https://driftway.free.componentdock.com`
