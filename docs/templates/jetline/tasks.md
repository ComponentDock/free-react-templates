# Jetline — task outline

Recreation of the ColorLib **Rooter24** emergency-plumber design (`rooter24`) at `apps/jetline`. Spec is the
authority: `openspec/specs/template-jetline/spec.md`. Design notes:
`docs/templates/jetline/design-notes.md`. Check boxes only as work ships.

> The page's thesis is **the phone number set at 60 px** and **the six-chip triage in `#problems`** — a chip
> answers *"what do I do before you arrive"* before the page asks for anything. There is **no photograph and no
> form anywhere on the home page**: the whole page is Inter on `#111`, one red ramp, one table, one carousel.
> Build the hero and the picker first; everything else is arithmetic. All copy is in the spec
> §Content inventory — copy it verbatim, including the sample-data caveats.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/jetline`; rename the package to `@free-react-templates/jetline`
- [ ] `public/CNAME` = `jetline.free.componentdock.com`; `homepage` = `https://jetline.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/jetline" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Inter 400/500/600/700/800**
      (`css2?family=Inter:wght@400;500;600;700;800&display=swap`), `preconnect` to `fonts.gstatic.com`
- [ ] dark-only root: `<html class="dark">` (or an equivalent always-dark root) — **no theme toggle, no
      `localStorage.theme` script, no light variant**; the reference has none
- [ ] `@theme` in `src/index.css`: the **`ink` ramp** (`#f6f6f6 / #e6e6e6 / #c9c9c9 / #6e6e6e / #4a4a4a /
      #2e2e2e / #1b1b1b / #141414 / #111111`), the **`primary` ramp** (`#fef2f2 / #fde3e2 / #fbc7c5 / #f79c99 /
      #f06b67 / #e5443f / #e5322d / #be221e / #731614`), `--radius-2xl: 1rem`,
      `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)`, `font-sans: "Inter", system-ui, sans-serif`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [ ] `PillButton` — the page's only button shape is **full radius**: `solid` (`#e5322d`, white, 18/700,
      `px-8 py-4`, `hover:bg-primary-700`), `solid-sm` (header + card CTA, 16/800, `px-5 py-2.5` / `px-6 py-3`),
      `outline-light` (1 px `white/25`, `hover:border-white/60`, `px-8 py-4`), `white-on-red` (white ground,
      `#be221e` label, 18/700, `px-6 py-3`), `block`
- [ ] `Chip` — full radius, `px-5 py-2.5` (**46 px**), 16/600, `border-white/20 text-white/80`,
      `hover:border-white/50`, and the selected skin expressed with **`aria-pressed:` variants**
      (`aria-pressed:border-primary-500 aria-pressed:bg-primary-600 aria-pressed:text-white`) — the attribute
      *is* the state, never a class toggle
- [ ] `Section` — `.section` = `py-20 lg:py-28`; `Container` = `max-w-7xl` (`80rem`) with `px-4 lg:px-8`
      (**1,216 px** of content at ≥ 1280)
- [ ] `Eyebrow` — 14/20 700 uppercase; `tone="hero"` `+2.8 px` `#e5443f`; `tone="section"` `+0.35 px` `#f06b67`
- [ ] `PhoneLink` — every `tel:` is one component with digits-only href: header pill, hero number (60 px),
      picker CTA, call-band pill, mobile bar, footer pill. Nothing else ever writes a `tel:` string
- [ ] `Reveal` — fade 20 px over 600 ms with `delay` 0/100/200/300, IntersectionObserver
      `threshold .1` / `rootMargin '0px 0px -10% 0px'`, unobserve on first hit, **no-op under
      `prefers-reduced-motion: reduce`**
- [ ] `Wordmark` + `Logo` — an **original** red-ring/glyph mark with a two-tone wordmark (lucide `Clock` or
      `Wrench` in `#e5322d`); never copy the source `logo.svg` (607 B, red ring + clock hands + "Rooter 24")

## 2 — Chrome

- [ ] `Header` — sticky `top-0 z-50`, **81 px** (`h-16 lg:h-20` + 1 px border), `bg-ink-900/95` +
      `backdrop-blur` (8 px), border `white/10`, `shadow-lg` past 50 px; logo `h-8 lg:h-9` (180 × 36); five
      labels 14/**700** `white/70` `hover:text-white` `gap-8`, shown at **`xl`** only (**not** `lg`);
      phone pill 16/800 `px-4 py-2.5 sm:px-5` with the number replaced by `Call` below `sm`; burger
      `rounded-lg p-2` visible below `xl`
- [ ] `MobileMenu` — `aria-expanded` **and** an `Open menu` / `Close menu` label swap, `Menu`↔`X` icons from
      `lucide-react`, panel `bg-ink-900 border-t white/10 px-4 py-4`, five 16/700 full-width rows
- [ ] `StickyCallBar` — `fixed inset-x-0 bottom-0 z-40 lg:hidden`, **73 px** (`p-3` + 48 px pill), ground
      `#111827`, top hairline `#1f2937`, full-width red pill `Open now · (555) 010-0124`; page shell reserves
      `pb-[73px] lg:pb-0` so the footer's last line is never covered (the reference gets this wrong)
- [ ] `ScrollProgress` — 2 px `#e5322d`, `fixed top-0 z-[60]`, width = scroll fraction
- [ ] `BackToTop` — 48 px `#e5322d` disc, `bg-primary-600` + `shadow-primary-600/25`, appears past **300 px**,
      `opacity`/`pointer-events`/`translateY` transition, smooth scroll to 0
- [ ] `CookieStrip` — 1,500 ms delay, `role="dialog" aria-label="Cookie consent"`, ground `#111827`,
      `border-t #1f2937`, `py-4 sm:py-6`, `Decline` (outline, radius 8) / `Accept All` (`#e5322d`, radius 8),
      `localStorage['cookie-consent']` = `accepted` / `essential`, removal after the slide-out

## 3 — Hero

- [ ] band `bg-ink-900`, `container px-4 py-16 lg:px-8 lg:py-24` → **735 px** at 1440, **664** at 768,
      **863** at 390; **no image, no gradient, no texture**
- [ ] eyebrow `Open now · someone is awake` with a 10 px pinging dot (`animate-ping` ring + solid dot, both
      `#e5443f`), 14/700 uppercase `+2.8 px`
- [ ] `h1` **72 / 68.4 / 800 / −1.8 px** (`text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight`),
      `max-w-4xl`, second sentence in a `block` span at `#e5443f`
- [ ] lede 18/28 `white/70` at `max-w-xl` (576)
- [ ] phone anchor `lg:text-6xl` (**60 / 60 / 800 / −1.5**), `hover:text-primary-400`
- [ ] CTA row `mt-8 flex flex-col gap-3 sm:flex-row`: red pill `Call now` (**168 × 60**, phone icon) +
      outline pill `What it costs` (**182 × 62**, `white/25` border) — full width and stacked below `sm`
- [ ] four ticks `flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/60`, each with a 4 px
      `#e5443f` dot; the fourth keeps the word `(sample)`

## 4 — `#problems` (the design)

- [ ] centred head `mx-auto max-w-3xl text-center`: `h2` 36/40/700 −0.9 + lede 18/28 `white/70`
- [ ] `role="group" aria-label="Choose your problem"` wrapping **six** chips in the reference order
      (`Burst pipe`, `Blocked drain`, `No hot water`, `Sewer backup`, `Overflowing toilet`, `Leak I cannot
      find`), `flex flex-wrap justify-center gap-3`, 4 + 2 at 1440 and 2 per row at 390
- [ ] **one** pressed key of state; `aria-pressed` on every chip; exactly one `[data-problem-panel]` visible;
      `Burst pipe` pressed on load
- [ ] card `mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 text-center`, **768** wide,
      **reserved height** = tallest panel (no layout jump when switching)
- [ ] panel title 18/700 white, body 16/24 `white/70` at `max-w-xl`, then the red phone pill (`px-6 py-3`,
      18/700, phone icon)
- [ ] six panels of copy verbatim from the spec (the operational advice is the content — do not paraphrase it)

## 5 — `#process`

- [ ] kicker `How it works` (`#f06b67`, `+0.35 px`), `h2` in a **672 px** column (two lines at 1440), lede
      `max-w-3xl`
- [ ] `<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` of three **389**-wide items, **176 px** tall
- [ ] each item: `01/02/03` 14/700 `tabular-nums` `#f06b67` in `flex items-baseline gap-3` beside
      `h-px flex-1 bg-white/15`, then `h3` 18/700 (`mt-4`), body 16/24 `white/70` (`mt-2`), tag 14/600
      `#f06b67` (`mt-3`)
- [ ] **no card, no border, no background** on a step — the 1 px rule is the only shape in the band

## 6 — `#pricing`

- [ ] kicker `Call-out pricing` (`#e5443f`, `+2.8 px`), `h2` at **800** (the page's only extrabold `h2`), lede
- [ ] real `<table class="w-full min-w-[540px] border-collapse text-left">` inside `mt-10 overflow-x-auto` —
      the **wrapper** scrolls below 640, the page never does
- [ ] `th` 14/700 uppercase `+0.35 px` `white/50`, `padding: 12px 16px 12px 0`; header rule `white/15`,
      body rules `white/10`; **no zebra, no card, no hover row**
- [ ] four rows in order: `$89` weekdays / `$149` evenings / `$219` overnight / `$219` Sundays; prices 18/**800**
      `#e5443f`; third column 16/600 `white/80` (`Within 2 hours`, `Within 2 hours`, `Within 90 minutes`,
      `Within 2 hours`); row 4 has **no sub-label**
- [ ] footnote 14/24 `white/50` `max-w-3xl`, verbatim (sample pricing + the city's-side-of-the-line promise)

## 7 — `#areas`

- [ ] band `bg-ink-800` (**#141414**) `text-white`, **448 px** at 1440, **no kicker**
- [ ] `grid gap-10 lg:grid-cols-12 lg:gap-16` with **`lg:col-span-5`** (469) and **`lg:col-span-7`** (683)
- [ ] right column: `<ul class="grid grid-cols-2 gap-x-6 sm:grid-cols-3">` of **twelve** towns in the
      reference's order, items 16 px `white/90` with `border-b border-white/15 py-2.5`
- [ ] note 14/24 `white/70` under the list (*"Replace with your own coverage area before launch."*)

## 8 — `#testimonials`

- [ ] band `bg-gray-900` (**#111827**) `py-20 lg:py-28` → **768 px**; centred head `max-w-3xl`
- [ ] `Reviews` pill **81 × 28**, full radius, `px-3 py-1`, fill `#731614` at 50 %, label `#f79c99` 14/500
      (these are the **dark** values — the light pair in the markup is dead)
- [ ] three cards **381 × 320**, radius 16, `p-8`, ground `#1f2937`, `shadow-soft`: five 20 px `#f06b67` stars,
      quote 18/**500** white, 48 px initials disc (`#731614` fill, `#f06b67` glyph 18/600), name 16/600 white,
      town 14/24 `gray-400`
- [ ] carousel: 3 per view ≥ 1024 / 2 at 768 / 1 at 390, `transform` track, slides `px-3` with widths from
      measured container width; arrows **hidden** and dots **not rendered** when `maxIndex === 0`
      (⇒ 0 dots at 1440, 2 at 768, 3 at 390; active dot 32 × 10 `#e5322d`, idle 10 × 10 grey)
- [ ] autoplay 5 s, paused on hover, **off** under `prefers-reduced-motion`; equal card heights

## 9 — `#call`, footer

- [ ] `#call` `bg-primary-600` `py-6 lg:py-8` → **164 px** (256 at 390): `Open now` with ping dot,
      *"We answer 24 hours, including holidays."* 20/700, paragraph 14/24 at 90 % `max-w-2xl`, and the white
      pill **210 × 52** with a `#be221e` label (the only white-ground button on the page)
- [ ] footer `bg-ink-900 pt-16 lg:pt-24`, **568 px**, top border `white/10`, `text-white/70`
- [ ] grid **4 / 5 / 3** (`lg:grid-cols-12`, `gap-12 lg:gap-8`): brand (190 × 40 logo, `max-w-xs` `gray-400`
      blurb, four **40 px** `rounded-lg bg-gray-800 p-2.5` social chips with real destinations, address /
      phone / email), three link columns inside `sm:grid-cols-3` (heads 14/600 uppercase `+0.5 px` white,
      links 16/400 `gray-400`), licence box (sample-licence sentence + red phone pill)
- [ ] bottom bar `mt-16 border-t border-gray-800 py-8`, `gray-500` 14 px: `© 2026 {Brand}. All rights
      reserved.` + `Privacy Policy` / `Terms of Service`
- [ ] footer links **https://www.componentdock.com/** ("Component Dock"); no ColorLib string in any app file

## 10 — Verify before the PR

- [ ] `scripts/verify-app.sh jetline` green (typecheck + lint + knip + fallow + 100 % coverage tests + build)
- [ ] `scrollWidth === clientWidth` at **320** (the reference fails with 334), 390, 768, 1024, 1280, 1440
- [ ] the chip row is keyboard-operable, every chip exposes `aria-pressed`, and the burger's `aria-label`
      flips to "Close menu"
- [ ] every `tel:` href is digits only (the source ships one malformed `tel:(555) 010-0124`); **zero bare `#`**
      anchors; every icon-only control has an accessible name
- [ ] the mobile call bar does not cover the copyright line; the page reserves its 73 px
- [ ] no image assets beyond the logo/glyph SVGs; no stock photo added "for warmth"
- [ ] sample-data caveats all present (pricing, reviews, arrival time, licence number, coverage note)
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] run the section-by-section diff against `design-notes.md` §Structure order and the spec
      §Band map and geometry (band heights ±8 px, type sizes exact)
