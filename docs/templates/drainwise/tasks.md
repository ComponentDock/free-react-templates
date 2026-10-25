# Drainwise — task outline

Recreation of the ColorLib **Metroflow** multi-location plumbing design (`metroflow`) at `apps/drainwise`.
Spec is the authority: `openspec/specs/template-drainwise/spec.md`. Check boxes only as work ships.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/drainwise`; rename the package to
      `@free-react-templates/drainwise`
- [ ] `public/CNAME` = `drainwise.free.componentdock.com`; `homepage` = `https://drainwise.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/drainwise" package-lock.json`
- [ ] `index.html`: Poppins 400/500/600/700 via one Google Fonts `<link>` (verified 200 with
      `css2?family=Poppins:wght@400;500;600;700&display=swap`); pre-paint theme script
      (`localStorage.theme` → `prefers-color-scheme`); `<title>` uses the new name
- [ ] `@theme` in `src/index.css`: the `primary` 10-step blue and the `ink` 10-step slate (exact hexes in
      the spec), `--radius-2xl: 1rem`, `--shadow-soft: 0 4px 16px -4px #0000001a`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from any existing app — never a relative
      `@source`)
- [ ] `dark` variant wired the same way the other apps do it

## 1 — Primitives (build once, use ~15×)

- [ ] `Button` — `solid` (`#1d4ed8`, radius 8, `px-5 py-2.5`, 14/700), `light` (white ground, `#183fae`
      label, radius 8, `px-8 py-4`, 16/700), `outline-light` (2 px `white/40`, radius 8, `px-8 py-4`),
      `field` (white ground, `#183fae` label, `px-6 py-3.5`)
- [ ] `PhonePill` — full radius, 1 px `#cfd4e0`, `px-3 py-1.5`, 14/600, 16 px phone glyph, hover border
      `#1d4ed8` + label `#183fae`
- [ ] `Eyebrow` — three variants: `hero` (14/600 `#dfe6fe`), `band` (14/700 `#183fae`),
      `promise` (14/600 `#1d4ed8`) — the third is not a typo, see spec §Typography
- [ ] `SectionHeading` — eyebrow + `h2` + optional lede, with a `size` prop: `default` (36/40 −0.9) and
      `quiet` (30/36, no tracking — `#guarantees` only)
- [ ] `Card` — radius 16, 1 px `#e9ebf1`, `p-6`, white; `CardShadow` variant for testimonials (`p-8`,
      `shadow-soft`)
- [ ] `Reveal` — `[data-animate]` equivalent: `opacity 0 / translateY(20px)`, 600 ms ease-out, stagger from
      `data-delay`, IO `threshold .1` + `rootMargin 0 0 -10%`, **bail out entirely under reduced motion**
- [ ] `Counter` — 2,000 ms ease-out cubic; render the final value when `IntersectionObserver` is absent

## 2 — Chrome

- [ ] `#preloader` overlay + `window.load` fade/removal (300 ms)
- [ ] Skip link to `<main id="main-content">`
- [ ] Sticky header: logo (32 → 36 px), six labels, phone pill, dark toggle, CTA (≥1280), hamburger
      (<1280), `shadow-lg` past 50 px
- [ ] Mobile panel: six labels + phone + CTA, `aria-expanded`, hamburger ↔ X glyph swap
- [ ] Dark toggle with persistence and pre-paint application
- [ ] Cookie strip: 1,500 ms delay, `accepted` / `essential`, self-removal
- [ ] Back-to-top disc: 48 px, appears past 300 px, smooth scroll

## 3 — Hero (`#top`)

- [ ] `bg-[#1d4ed8]`, `py-20` (665 px at 1440), 12-col grid 6/6, `gap-14`, `items-center`
- [ ] Eyebrow "Twelve cities · One guarantee"; `h1` 60/66 700 −1.5 px white (36 → 48 → 60 across
      `sm`/`lg`); lead 18/28 `#eef2ff` `max-w-lg`
- [ ] Rating row: five `#fbbf24` stars, `4.8` bold, muted "12,000+ reviews on Google · sample data"
- [ ] ZIP finder: label, input (`name="postcode"`, `required`, `autocomplete="postal-code"`), submit
      button, hidden message; prefix map 925/928 · 430/432 · 041/040
- [ ] Finder behaviour: `startsWith` match → scroll to `#locations` + mark the card; miss → message, then
      1,200 ms fallback; empty submit no-op
- [ ] Hero image: 4:3 box (radius 16, `object-fit: cover`) with a deterministic placeholder
      (`picsum.photos/seed/drainwise-1/1200/900`) — never the Unsplash URL

## 4 — `#guarantees`

- [ ] White strip, `py-12`, `border-b #e9ebf1`, `max-w-2xl` head
- [ ] `<dl class="grid sm:grid-cols-3 gap-8">`, three `<dt>` (20 px check icon `#1d4ed8` + 16/24 700) /
      `<dd>` (`mt-2 pl-8`, 16/24 `#4a5369`)
- [ ] Closing sample-terms note 14/20 `#6b7590`

## 5 — `#services`

- [ ] `max-w-2xl` head + hairline grid wrapper (`bg #e9ebf1`, `gap-px`, radius 16, 1 px border)
- [ ] Six white cells `p-8`: `h3` 18/28 700, blurb 16/24 `#4a5369` `flex-1`, price 14/20 700 `#183fae`
- [ ] 1 / 2 / 3 columns at base / `sm` / `lg`; closing sample-prices note

## 6 — `#locations`

- [ ] `#f5f6f9` band, `py-28`, `max-w-2xl` head
- [ ] Three cards (`p-6`, radius 16, `flex flex-col`): name, region, `tel:` phone, licence line, towns
      (`flex-1`), "See this branch"
- [ ] Card ids/refs so the finder can mark the matched branch (`aria-current` + scroll)

## 7 — Counter band

- [ ] `#f9fafb`, `border-y #e5e7eb`, `py-20`, 2 cols below `sm` / 4 above
- [ ] Four `Counter`s: `12` Cities, `140` Employed plumbers, `2 hr` Arrival window, `2011` Founded

## 8 — `#process`

- [ ] `<ol>` 3 cols `gap-6`: number + 1 px rule row (`items-baseline`), `h3`, blurb, tag
- [ ] Numbers `tabular-nums` 14/700 `#1d4ed8`; tags 14/600 `#183fae`

## 9 — `#testimonials`

- [ ] Centred head: "Reviews" pill (`#dfe6fe` / `#183fae`), `h2`, sample note
- [ ] Carousel: track + three slides `px-3`, per-view 3/2/1, `translateX`, `transition-transform .5s`
- [ ] Arrows 36 px discs, shown only when `maxIndex > 0`; dots injected, none when one position
- [ ] Autoplay 5 s, reset on click, pause on hover
- [ ] Card: five 20 px `#6b83f5` stars, quote 18/28 500, 48 px initial disc, name + place

## 10 — `#contact` + footer

- [ ] `#183fae` band, centred `max-w-3xl`, white `h2` 36/40 −0.9, `#dfe6fe` lede, two radius-8 buttons
- [ ] Footer `#111827`, 12-col grid: brand 4 / links 5 / licence 3, bottom bar `border-t #1f2937`
- [ ] Footer logo `#e9ebf1`-safe (white variant), three social chips with real destinations or none
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")

## 11 — QA

- [ ] `scripts/verify-app.sh drainwise` — typecheck + lint + knip + fallow + 100% coverage + build
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600
- [ ] reduced-motion pass: no reveal stuck invisible, no autoplay, counters final
- [ ] dark-mode pass: `#030712` body, `#111827` tinted bands, hero/contact unchanged, no white flash on reload
- [ ] zero bare `#`; every nav/CTA anchor resolves and clears the 81 px sticky header
- [ ] no ColorLib string in `apps/drainwise/**`; `public/CNAME` + `homepage` correct
