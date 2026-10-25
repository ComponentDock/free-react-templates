# Sealwise — task outline

Recreation of the ColorLib **Perimeter** design (`perimeter`) at `apps/sealwise`. Spec is the authority:
`openspec/specs/template-sealwise/spec.md`. Design notes: `docs/templates/sealwise/design-notes.md`.
Check boxes only as work ships.

> The page is **a pest-control company that publishes its prices**, and the centrepiece is a **nine-tab pest
> finder** on a near-black band that answers each pick with *Visits*, *One-off price* and *We can be there* —
> then says whether the quarterly plan covers it. **Six of the nine are "On the plan."; three are "Not on the
> plan."** That split is the design; do not flatten it.
> Palette: one ten-step **`ink`** neutral (warm/green-cast, `#f5f6f4` → `#0e120e`) plus one ten-step
> **`primary`** green (`#f2fbe9` → `#2e4917`), with **stock Tailwind `gray`** used for the testimonial band, the
> FAQ chrome and the footer — do not merge the two ramps. Type is **Outfit only** (400–800, no italic). Cards
> and panels are 16 px, tabs 12 px, buttons/inputs 8 px, pills full.
> Build `#identify`, `#plans` and the hero card first — they carry the argument. Copy is in the spec: reproduce
> it, keep the refusals and the "sample pricing" honesty, and rename every company/tier string to Sealwise.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/sealwise`; rename the package to
      `@free-react-templates/sealwise`
- [ ] `public/CNAME` = `sealwise.free.componentdock.com`; `homepage` =
      `https://sealwise.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/sealwise" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` —
      `css2?family=Outfit:wght@400;500;600;700;800&display=swap` (verified **HTTP 200**), `preconnect` to
      `fonts.gstatic.com`, `<html lang="en">`, **no** pinned `dark` class
- [ ] `@theme` in `src/index.css`: the **ten `ink` steps**, the **ten `primary` steps**, `--font-sans: "Outfit"`,
      `--radius-lg` 8 px, `--radius-xl` 12 px, `--radius-2xl` 16 px, `--shadow-soft`
      (exact block in the design notes)
- [ ] `body` light `#111827` on `#ffffff`, dark `#f3f4f6` on `#030712`; antialiased
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] test: `index.css` carries all ten `ink` and ten `primary` hexes; `index.html` has Outfit with
      `display=swap` and no second family

## 1 — Primitives

- [ ] `Button` variants: `primary` (`bg-primary-600 text-white`, radius 8, `px-6 py-3.5`, hover
      `bg-primary-700`), `outline` (`border-ink-200 text-ink-700`, hover `border-primary-600 text-primary-700`),
      `onDark` (`bg-white text-primary-700`), `onDarkOutline` (`border-2 border-white/40 text-white`),
      `pill` (`rounded-full bg-white text-primary-700 px-6 py-3 text-lg font-bold` for `#emergency`)
- [ ] `Kicker` — 14/700 uppercase `tracking-[0.35px]`, two tones (`primary-700` on light, `primary-400` on
      dark)
- [ ] `Pill` — `rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700` (Reviews /
      Questions), and the outline pill used twice in the header
- [ ] `Field` — label 14/600 `ink-700`, input `rounded-lg border-ink-200 px-4 py-3 text-base`, focus
      `border-primary-500 ring-2 ring-primary-500/20`, placeholder `ink-300`
- [ ] `Wordmark` — inline SVG (200 × 40 viewBox): 26 × 26 `ink-800` plate `rx 7`, 14 × 14 inset square stroked
      `#84cc3c` `stroke-dasharray="4 3"`, 2.6 r lime dot, name 16/700 + sub-line 9/500 `letter-spacing 2.2`;
      a `light` variant for the footer/dark header
- [ ] `Favicon` — the same mark at 32 × 32 as an inline SVG in `public/`
- [ ] `Reveal` — `opacity 0 / translateY(20px)` → visible, 600 ms, `data-delay` stagger (100–300 ms); IO
      `threshold .1`, `rootMargin 0 0 -10%`; **bails out** under `prefers-reduced-motion: reduce`
- [ ] `Accordion` (FAQ) — single-open, `max-height` 0 → `scrollHeight`, disc rotates 45°, `aria-expanded` +
      `aria-controls` (the reference omits both — spec defect 4)
- [ ] `PestFinder` — nine-item typed data module + tabs/panel pair, `aria-expanded` single-open, ants default
- [ ] `useCarousel` — per-view 3/2/1 at 1024/640, 5 s auto-advance, pause on hover, dots `maxIndex + 1`,
      arrows hidden when `maxIndex === 0` (the 1440 state is a static row — do not "fix" it)
- [ ] `useScrollProgress`, `useStuckHeader` (>50 px), `useBackToTop` (>300 px), `useCookieConsent`
      (1.5 s delay, `localStorage['cookie-consent']`), `useTheme` (`theme` key + `prefers-color-scheme`)
- [ ] `QuoteForm` — three controlled fields, phone/name validation, success state, **no network call**
- [ ] `NewsletterForm` — email pattern, inline error/success, row must shrink at 320 (`min-w-0`, `size={1}`)

## 2 — Bands

- [ ] `LicenceBar` — 37 px `ink-800` `text-xs`, three nowrap pairs (two `hidden sm:flex`), stars + 4.8 + review
      line at the right, **non-sticky**
- [ ] `Header` — sticky, 81 px at ≥1024 / 65 px below, `bg-white/90` + `backdrop-blur-lg`, 1 px `ink-100`,
      `shadow-lg` past 50 px; nav **only from 1280**; location pill (`hidden 2xl:block`), phone pill
      (`hidden md:block`), theme toggle, "Book a visit" (`hidden xl:inline-flex`), hamburger; mobile panel 492 px
- [ ] `Hero` — `ink-50`, `py-14 lg:py-20`, 12-col with 7/5 split: kicker, two-tone `h1` (60/66 −1.5 px),
      18/28 lead, 4.8 rating line, 2 × 2 checklist (335 px cells), quote card 469 × 508
- [ ] `PestFinder` band — `ink-900`, `py-28`, header block `max-w-2xl`, 12-col 7/5, nine tabs 223 × 95,
      panel 483 × 507 with `dl` (price in `primary-300`), the plan note, the two CTAs, the sample-pricing line
- [ ] `EmergencyBand` — 164 px `primary-600`, pinging 8 px dot, 18/20 bold headline, 14 px support line,
      211 × 52 white `rounded-full` phone pill
- [ ] `Plans` — three 389 × 442 cards, middle ringed `primary-600` + `shadow-md` + "Most chosen" badge,
      $39/$59/$89, feature lists, the two honesty lines, footnote
- [ ] `WhyUs` — `ink-50`, 2-col with the figure first: original perimeter **diagram** (inline SVG or picsum
      seed) + caption, four `dt/dd` commitments in the reference's order
- [ ] `Process` — three cells, `01–03` `tabular-nums` with `h-px bg-ink-100` hairlines, durations
      *Do it now / Same day / Usually 1 to 3 visits*
- [ ] `Areas` — 5/7 split, fourteen towns in a 2/3-column list with `border-b border-ink-100 py-2.5`, the
      radius note
- [ ] `Testimonials` — `gray-50`, pill + `h2` in `gray-900`, three 405 px cards with five stars, avatar disc,
      name + neighbourhood; 0 dots at 1440, 2 at 768, 3 at 390
- [ ] `Faq` — white, five `py-6` rows in a `divide-y divide-gray-200`, 32 px `gray-100` discs, single-open
- [ ] `ContactCta` — `primary-700`, 412 px, white 36 px `h2`, two 56 px CTAs (white fill → `#identify`,
      `border-2 white/40` → `tel:`)
- [ ] `Footer` — `gray-900`, 12-col 4/5/3, light wordmark at 40 px, blurb, three `gray-800` social squares
      (real destinations or omitted — never `#`), three link columns, newsletter, bottom bar with the
      **Component Dock** link

## 3 — Chrome

- [ ] `Preloader` — removed 300 ms after `load`, never traps content in jsdom
- [ ] `ScrollProgress` — 2 px `primary-600` bar
- [ ] `SkipLink` → `#main-content`
- [ ] `CookieStrip` — 87 px at 1440 / 147 px at 390, 1.5 s delay, `accepted`/`essential`
- [ ] `BackToTop` — 48 px disc past 300 px
- [ ] `StickyCallBar` — `<1024` only, 97 px (73 at 640–768), one normalised `tel:`

## 4 — Content and fidelity

- [ ] pest data: nine panels with the spec's exact `Visits` / `One-off price` / `We can be there` values and
      **six covered / three refused**
- [ ] tier names renamed (`Sentry` / `Sentry Plus` / `Yard and Home`), prices unchanged
- [ ] every company string replaced: "Sealwise", no "Perimeter", no `perimeterpest.example`, no `NC SPCA`
      licence number copied verbatim
- [ ] addresses/phone: one normalised `tel:+15550400400`, one `mailto:` or none
- [ ] **no** ColorLib string in any app file, comments included
- [ ] footer links `https://www.componentdock.com/`

## 5 — Verification

- [ ] `scrollWidth === clientWidth` at 320 / 390 / 640 / 768 / 1024 / 1280 / 1440 (the reference fails at 320:
      389 px — spec defect 1)
- [ ] document height within ~5 % of 7,379 (1440/1280) / 7,705 / 9,578 / 9,762 / 11,687 / 12,637
- [ ] zero bare `#` anchors, zero dead ids (`#areas`, not `#service-areas`), one `<h1>`
- [ ] both themes; dark `body` `#030712`; `#identify` unchanged in dark
- [ ] reduced motion: no stuck `opacity: 0`, no ping, no auto-advance
- [ ] `npm run spec:validate` + `scripts/verify-app.sh sealwise` green, 100 % coverage
- [ ] `TEMPLATES.md`: add the row under `## Business` in source-name alphabetical order, bump the heading count,
      `[~]` → `[x]` with the surge URL + homepage after deploy
