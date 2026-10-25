# Standpipe — task outline

Recreation of the ColorLib **Mainline** plumbing design (`mainline`) at `apps/standpipe`.
Spec is the authority: `openspec/specs/template-standpipe/spec.md`. Check boxes only as work ships.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/standpipe`; rename package to `@free-react-templates/standpipe`
- [ ] `public/CNAME` = `standpipe.free.componentdock.com`; `homepage` = `https://standpipe.free.componentdock.com`
- [ ] `index.html`: Manrope 400/500/600/700/800 via one Google Fonts `<link>`, `<title>` =
      "Standpipe — plumbers in Portland, Beaverton and 13 nearby towns" (no ColorLib string)
- [ ] `@theme` in `src/index.css`: the `primary` 10-step blue, the `ink` 10-step blue-grey, and the
      `shadow-soft` utility (`0 4px 16px -4px rgb(0 0 0 / .1)`)
- [ ] `dark` variant wired (`@custom-variant dark (&:is(.dark *))` or the project's existing pattern);
      pre-paint theme script in `index.html`

## 1 — Primitives (build once, use 20×)

- [ ] `Button` — `solid` (radius 8, `primary-600`, white 14/700, `px-5 py-2.5`, hover `primary-700`),
      `block` (full-width `py-3.5` 16/700), `light` (white ground, `primary-700` label),
      `outline-light` (2 px `white/40`) variants
- [ ] `Field` — label 14/600 `ink-700`, control 50 px, radius 8, 1 px `ink-200`, 16 px text, error slot
- [ ] `Pill` — `rounded-full` `px-3 py-1.5` 14/600 `ink-800` with `ink-200` border (phone + city)
- [ ] `Badge` — `primary-100` / `primary-700` 14/500 (Reviews, Questions)
- [ ] `Eyebrow` — 14/700 uppercase `+0.35px` `primary-700`
- [ ] `SectionHeading` — eyebrow + `h2` (30 → 36, `−0.9px`) + optional 18/28 lede
- [ ] `StarRow` — `size` + `tone` (`amber` for the hero, `primary` for reviews)

## 2 — Chrome

- [ ] `LicenceBar` — 37 px `ink-800`, three items + star rating block, `hidden sm:flex` on two items
- [ ] `Header` — sticky, `bg-white/90 backdrop-blur-lg`, 1 px `ink-100` border, elevation past 50 px
- [ ] `Nav` — 7 labels at `xl`, hamburger + disclosure below; `aria-expanded`; phone pill at `md`,
      city pill at `2xl`
- [ ] `DarkToggle` — moon icon, `aria-label`, writes `localStorage.theme`
- [ ] `SkipLink`, `Preloader`, `ScrollProgress`, `BackToTop`
- [ ] `CookieStrip` — 1.5 s delay, two buttons, `localStorage['cookie-consent']`
- [ ] `MobileCallBar` — `lg:hidden`, one full-width pill, `tel:+15550100100`

## 3 — Bands

- [ ] `Hero` — `ink-50` band, 12-col 7/5 split, eyebrow + `h1` (clause span) + lede + stars + 4 checks
- [ ] `QuoteCard` — `#quote`, white, radius 16, `shadow-md`, `p-6 lg:p-8`; name / phone / select (8 job
      types) / submit / 12 px footnote; validation + confirmation, no navigation
- [ ] `EmergencyBand` — `primary-600`, pulsing dot (`animate-ping`), bold line, qualifier, white pill
- [ ] `Services` — `max-w-2xl` header; ONE `grid gap-px` shell on `ink-100` ground, radius 16,
      `sm:grid-cols-2 lg:grid-cols-3`; six cells white `p-6 lg:p-8` with `flex-1` body + price line;
      sample-data footnote
- [ ] `WhyUs` — `ink-50`, 2-col; `figure` `order-last lg:order-first`, image radius 16 + caption;
      `<dl>` with four 2 px `primary-600` left rules
- [ ] `Process` — `<ol>` 3 steps, `tabular-nums` 01/02/03 + `h-px flex-1` rule + note line
- [ ] `ServiceAreas` — 5/7 split, `<ul>` of 15 towns `border-b py-2.5`, `grid-cols-2 sm:grid-cols-3`
- [ ] `Financing` — `py-12`, inset `primary-50` panel with `primary-200` border, 24 px `h2` + CTA
- [ ] `Testimonials` — `gray-50`, pill + `h2` + lede; 3 cards (blue stars, quote, avatar, name, city);
      slider 3/2/1 per view below 1024 only, 5 s auto-advance, pause on hover, arrows + dots conditional
- [ ] `Faq` — `max-w-3xl`, `divide-y`, 5 rows, single-open, `maxHeight` transition, 45° glyph,
      `aria-expanded` + `aria-controls`; all collapsed on first paint
- [ ] `ContactBand` — `primary-700`, `py-20 lg:py-28`, white `h2`, `primary-100` lede, two CTAs
- [ ] `Footer` — `gray-900`, brand(4) + three link columns(5) + newsletter(3), legal bar,
      Component Dock link, newsletter validation

## 4 — Behaviour

- [ ] Reveal-on-scroll for 14 targets (staggered `data-delay` equivalent), bailing out under
      `prefers-reduced-motion` and never leaving anything at `opacity: 0`
- [ ] Scroll-spy for the seven nav labels (`rootMargin -20% / -70%`)
- [ ] Smooth in-page scroll offset by header height + 20 px, `#quote` and `#service-areas` only
- [ ] Dark mode across every band, card, field and the FAQ disc
- [ ] JSON-LD `Plumber`-shaped entity with the recreation's own name and a fictional service area

## 5 — Tests (TDD, 100 % coverage)

- [ ] Unit: star row tone, price-line parsing/formatting, FAQ single-open reducer, carousel index math
      (`maxIndex = slides − perView`, wrap on next/prev, `perView` at 1440/768/390)
- [ ] Unit: theme resolution (`localStorage` → `prefers-color-scheme` → light) and persistence
- [ ] Unit: cookie-strip lifecycle (absent key → visible after 1.5 s; either choice persists)
- [ ] Integration: quote form validation (empty, bad phone, happy path) with no navigation
- [ ] Integration: newsletter validation + confirmation
- [ ] Integration: header disclosure `aria-expanded` flip and icon swap
- [ ] A11y: skip link target, one `main`, FAQ `aria-controls` resolves to an existing panel
- [ ] Responsive: no horizontal overflow at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600

## 6 — Ship

- [ ] `scripts/verify-app.sh standpipe` green (typecheck, lint, 100 % coverage, build)
- [ ] PR description: source `mainline`, preview URL, tokens used, deltas (name, placeholders, inner
      routes, a11y additions)
- [ ] merge → deploy → `curl -sI https://standpipe.free.componentdock.com/` is 200 with a valid cert
- [ ] `TEMPLATES.md` row under `## Business` between **Magnews2** and **Marco 2**; heading re-counted;
      `npm run readme:status`
