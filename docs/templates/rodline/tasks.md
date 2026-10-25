# Rodline — Tasks

Recreation of ColorLib **"Flowpage"** (https://colorlib.com/wp/template/flowpage/) as a React 19 + Vite +
Tailwind 4 + TypeScript app under the name **Rodline** (`apps/rodline`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `flowpage` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> **`## Business`** *before* the PR claims a row — the exact line is in the spec, §Purpose — between
> **`Florist`** and **`Foundation2`** (the section is sorted by the ColorLib source name). On
> `origin/main` `04143c41b` the heading reads `## Business (371)` over 371 rows, so the honest value
> after adding Flowpage is **`(372)`**. Re-count the rows, do not copy the number.

**Scope:** the source is a **four-page** Astro site (landing + privacy + terms + thank-you). Build the
**landing page only**; the other three are inventoried in the spec and out of scope. The thank-you copy
belongs *inside* the quote card as the post-submit state (Deviation 1), not as a route.

**Dark mode is in scope, without a toggle.** The page ships a real class-based theme driven by
`prefers-color-scheme` (plus a `localStorage.theme` override that no visible control writes). Requirement
13. Do not add a theme switch — the reference has none.

**No navigation exists.** The header is a wordmark and one phone button. Do not build a menu, a search
field or a hamburger.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, **45,731 B**, sha256 `c49ae422…fb53e`,
      `<title>` *Drain clearing in Denver from $49 | Flowpage Plumbing*); stylesheet
      `_astro/Base.DIpRwtfA.css` (46,310 B, sha256 `9df9388e…dad`) and behaviour bundle
      `_astro/Base.…BLoalVWc.js` (16,233 B, sha256 `e26cc055…92f2`) recorded; **the bundle is
      byte-identical to the one the Brassworks prep recorded** (same Astro family engine)
- [x] Reachability probed beyond the slug-only path: `theme/flowpage/` and `theme/flowpage/index.html`
      both 200 with identical bytes; `services`, `contact`, `about`, `404` are 404 (landing-only design);
      `privacy/`, `terms/`, `thank-you/` are live; `sitemap.xml` is a generic `example.com` placeholder
- [x] Token sheet measured: **primary** 50 `#eef1fe` · 100 `#dde3fd` · 200 `#bac6fb` · 300 `#8e9ff8` ·
      400 `#5e72f6` · 500 `#3854f4` · **600 `#2447f2`** · **700 `#1734c8`** · 900 `#0f2179` (no 800);
      **ink** 50 `#f6f7fb` · 100 `#eceef4` · 200 `#d6dae4` · 300 `#aeb5c6` · 400 `#727c93` · 500
      `#4b5468` · 600 `#2e3648` · 700 `#1c2333` · **800 `#101828`** · 900 `#0a101c`; greys `#f9fafb` /
      `#f3f4f6` / `#e5e7eb` / `#4b5563` / `#111827` / `#030712`; amber `#fbbf24`
- [x] Class census: all **269** distinct classes in the document have an emitted rule — **zero missing**
      (the rule-less things are `data-*` attribute hooks, not classes). `shadow-soft` **is** emitted
      (`0 4px 16px -4px rgb(0 0 0 / .1)`) — do not swap it for `shadow-lg`
- [x] Live-render verification (Playwright, Chromium, 1440 / 1280 / 1024 / 992 / 768 / 576 / 390 / 360):
      `h1` **60 / 66 / −1.5** at ≥1024 → **48** at 992–768 → **36 / 39.6 / −0.9** at ≤576; band `h2` 36 →
      30; header **73 px** at ≥1024 / **65 px** below; document **3,904 / 3,904 / 4,048 / 4,895 / 4,895 /
      5,005 / 5,333 / 5,455**; hero quote-card form **408 / 301 / 686 / 308** px; service cells **404 /
      366.5 / 356** px; review slides **405 / 320 / 368 / 358** px
- [x] Behaviour read from the bundle and **tested in the browser**: seven live behaviours (inline theme,
      preloader, scroll-progress, reveal with 100/150/200 ms delays, offer dismiss, FAQ accordion, native
      form POST) and **three dormant hooks** — `[data-header]` is absent so the header never gains a
      shadow, there is no `[data-dark-toggle]`, and the validation handler binds `form[data-validate]`
      while the form says `data-form` (so no `[data-error]` nodes are ever created)
- [x] Carousel measured: 3 slides, 3-per-view at ≥1024 → **one page at every width**, so the bundle hides
      both arrows and builds **zero** dots. Reproduce the absence, not a working carousel
- [x] Link census: **10** anchors — 6 × `tel:5550100163`, 1 × the wordmark's self link, 1 ×
      `#main-content`, `Privacy`, `Terms`. **Zero** dead `href="#"` anchors
- [x] Screenshot analysed (`flowpage-template.jpg`, 364,662 B, 2400×1892 JPEG): a macOS browser window
      framing offer bar → header → hero + quote card → first `<dl>` claims; nothing below that. Live DOM
      is the authority
- [x] Dark render measured (Chromium `colorScheme: dark`): body `#030712`, hero/why `#111827`, card
      `#111827`, header `gray-950/95`, headings white
- [x] Google Fonts checked: `css2?family=Inter:wght@400;500;600;700&display=swap` → **200**
- [x] Name `rodline` cleared: no `apps/rodline`, no `template-rodline` spec, no `docs/templates/rodline`,
      `git grep -il rodline origin/main` empty, `grep -ci rodline TEMPLATES.md` = 0, and
      `wp/template/rodline/`, `preview.colorlib.com/theme/rodline/`,
      `…/theme/bootstrap/rodline/` all **404**
- [x] Spec written: `openspec/specs/template-rodline/spec.md` (15 requirements, 34 scenarios); notes in
      `docs/templates/rodline/design-notes.md`

## Build

- [ ] `npm install` at the repo root **first** (the workspace must be registered), then scaffold
      `apps/rodline` by copying the simplest existing app; rename the package to
      `@free-react-templates/rodline`
- [ ] `vite.config.ts` registers `injectUiSource()`; `react`/`react-dom` are `latest`; `public/CNAME` =
      `rodline.free.componentdock.com`; `package.json#homepage` =
      `https://rodline.free.componentdock.com`
- [ ] `src/index.css`: paste the `@theme` block from `docs/templates/rodline/design-notes.md` verbatim
      (primary 50–700 + 900, ink 50–900, the greys the dark variant needs, amber-400) +
      `@custom-variant dark` + `html { scroll-behavior: smooth }` + the `prefers-reduced-motion` override
- [ ] `index.html`: `<link>` Google Fonts **Inter** (`wght@400;500;600;700`, `display=swap`); the inline
      `applyTheme()` script in `<head>`; one `<title>`, one meta description

### Sections, in reference order

- [ ] `ScrollProgress` — 2 px (`h-0.5`) `primary-600` strip, `fixed top-0 left-0`, `z-[60]`,
      `pointer-events-none`, width = `scrollY / (scrollHeight - innerHeight)`, `passive` scroll listener
- [ ] `Preloader` — `fixed inset-0 z-[100]`, white (dark `gray-950`), 40 px spinner
      (`border-4 border-gray-200 border-t-primary-600`, `animate-spin`); fade to `opacity-0` then unmount
      **300 ms** after `load` — derive `hidden = loaded || document.readyState === 'complete'` so an
      already-complete document still hides it
- [ ] `OfferBar` — `#101828`, white, `py-2.5`, measured **44 px**; bold lead 14 px/700 + `white/70`
      qualifier (`hidden sm:inline`, `ml-2`), right group `gap-3` with `tel:` phone and a ✕ button that
      **removes the bar** (`aria-label="Dismiss offer"`), no persistence
- [ ] `Navbar` (wordmark + CTA only) — `sticky top-0 z-50`, `bg-white/95` + `backdrop-blur`, 1 px
      `ink-100` border; row `h-16 lg:h-18` (**73 px / 65 px**), `justify-between`; logo = inline SVG
      (F path `#101828`, 6 px dot `#2447f2`, Inter 700 word) at `h-8`, light variant via
      `dark:hidden`/`dark:block`; CTA `rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-bold` →
      `sm:px-5 sm:text-base`, phone glyph + `(555) 010-0163` (`hidden sm:inline`) / `Call now`
      (`sm:hidden`). **No shadow on scroll** — the reference's hook is dormant
- [ ] `Hero` — `bg-ink-50`, `py-12 lg:py-16`, `grid gap-10 lg:grid-cols-12 lg:gap-14`; copy
      `lg:col-span-7` (`h1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight` with
      the second line in `text-primary-600`), lede `max-w-xl text-lg text-ink-500`, four tick rows
      (`space-y-2.5`, `gap-3`, `text-base font-medium text-ink-700`, `Check` glyph `text-primary-600`),
      then `tel:` at `text-2xl sm:text-3xl font-bold tracking-tight` and the rating line
      (`text-sm text-ink-600`, five `amber-400` stars `aria-hidden`, `4.8` bold, demo qualifier)
- [ ] `QuoteForm` — card `lg:col-span-5`, `rounded-2xl border border-ink-100 bg-white p-6 shadow-md
      lg:p-8`; `h2 text-xl font-bold lg:text-2xl`, 14 px sub; three fields (`space-y-4`, labels
      `text-sm font-semibold text-ink-700`, controls `rounded-lg border-ink-200 px-4 py-3 text-base`,
      focus `border-primary-500` + `ring-2 ring-primary-500/20`), select with the placeholder option and
      six choices, full-width submit, 12 px `text-ink-400` fine print; `onSubmit` →
      `preventDefault()` + reset + swap to the thank-you copy (no network, no route)
- [ ] `WhyUs` — `section bg-ink-50`, 2-col `gap-12 lg:gap-16`; `<figure class="order-last lg:order-first">`
      with the picsum placeholder (`rounded-2xl object-cover`, 800×600) and a 14 px `text-ink-400`
      caption; eyebrow (`text-sm font-bold uppercase tracking-wide text-primary-700`) → `h2` (36/40,
      `tracking-tight`) → lede (`text-lg text-ink-500`) → `<dl class="mt-8 space-y-6">` of three items,
      each `border-l-2 border-primary-600 pl-5`, `dt text-base font-bold`, `dd mt-1 text-ink-500`
- [ ] `Services` — `section bg-white`, head `max-w-2xl`, then
      `mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2
      lg:grid-cols-3`; each cell `flex flex-col bg-white p-6 lg:p-8` with `h3 text-lg font-bold`, blurb
      `mt-2 flex-1 text-ink-500`, price `mt-4 text-sm font-bold text-primary-700`
- [ ] `Testimonials` — `bg-gray-50` (NOT `ink-50`), `py-20 lg:py-28`; centred `max-w-3xl` head with the
      `Reviews` pill (`rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`),
      `h2`, lede; three cards in a flex track (`px-3` slides, `rounded-2xl bg-white p-8 shadow-soft`),
      **`primary-400` stars**, quote `text-lg font-medium`, 48 px `bg-primary-100` initial disc, name +
      city. **No arrows, no dots** — the reference hides them at every width
- [ ] `Faq` — `bg-white`, `py-20 lg:py-28`, centred head with the `Questions` pill; list `max-w-3xl`,
      `divide-y divide-gray-200`; rows `py-6` with a `<button aria-expanded aria-controls>` (18 px/600),
      a 32 px `rounded-full bg-gray-100` plus-circle that rotates **45°**, and a panel that animates
      `max-height`/`opacity` over 300 ms; **one open at a time**, all closed initially
- [ ] `Availability` — `bg-primary-600 text-white`, `py-6 lg:py-8`, flex row `lg:justify-between`;
      label `text-sm font-semibold uppercase tracking-wide opacity-90` with the 8 px dot
      (`animate-ping` ring + solid core), line `text-lg font-bold lg:text-xl`; CTA
      `rounded-full bg-white px-6 py-3 text-lg font-bold text-primary-700 hover:bg-primary-50` with the
      phone glyph
- [ ] `StickyCall` — `fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden`, one
      full-width `rounded-full bg-primary-600 py-3` `tel:` link with glyph + `Same-day availability ·
      (555) 010-0163`; **73 px**, overlap with the footer kept (Deviation 3)
- [ ] `Footer` — `border-t border-ink-100 bg-white py-10`; one flex row (`flex-col sm:flex-row
      sm:justify-between`) with copyright (`text-sm text-ink-400`), then `tel:` in `text-ink-700`
      font-bold, `Privacy`, `Terms`, **and the required Component Dock link**; 12 px `text-ink-300`
      notice `mt-6`
- [ ] `useReveal` hook — `[data-animate]` equivalents (use a `data-animate` attribute or a ref) start at
      `opacity 0 / translateY(20px)` **only when they begin below 80 % of the viewport**, transition
      `.6s ease-out` with `100/150/200 ms` delays, `IntersectionObserver` (`threshold .1`,
      `rootMargin '0px 0px -10% 0px'`), unobserve after reveal, **skipped** under
      `prefers-reduced-motion: reduce`

### House contract

- [ ] Skip link → `#main-content`, `sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4`
- [ ] Exactly one `h1`; `main`, `header`, `footer` landmarks; every control labelled; star row
      `aria-hidden` with a text equivalent
- [ ] No `colorlib` / `flowpage` strings anywhere under `apps/rodline`; footer links
      `https://www.componentdock.com/`
- [ ] `public/CNAME` = `rodline.free.componentdock.com`; `homepage` matches

## Verify

- [ ] `scripts/verify-app.sh rodline` → typecheck + lint + knip + fallow + 100 % coverage + build
- [ ] Tests cover: both palettes on their bands, the 7/5 → stacked hero, the mosaic's 1 px gutter, the
      reviews being `gray-50` while the hero is `ink-50`, blue vs amber stars, FAQ single-open behaviour
      and icon rotation, form validation + confirmation swap, offer-bar dismissal, reveal skip under
      reduced motion, and the breakpoint table
- [ ] Playwright spot-check at 1440 / 992 / 390: document heights within ±24 px of the table, and
      screenshots compared against `/tmp` reference captures (offer bar, hero, mosaic, reviews, FAQ,
      closing band, footer)

## Bookkeeping (implementer, after merge)

- [ ] Add the `TEMPLATES.md` row (spec §Purpose has the exact line) between **Florist** and
      **Foundation2**, re-count the `## Business` heading (371 → 372), then `npm run readme:status`
- [ ] `gh workflow run deploy-surge.yml -f app="rodline"`; verify
      `curl -4 -sI https://rodline.free.componentdock.com` → 200
- [ ] Record the deploy URL in the row and the spec, and note in the PR that the reference overlap in
      Deviation 3 was reproduced deliberately
