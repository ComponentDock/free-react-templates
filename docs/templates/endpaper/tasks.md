# Endpaper — build tasks (ColorLib `lantern`)

Implementer checklist. Work in `apps/endpaper`. Tests precede code (red → green), and
`scripts/verify-app.sh endpaper` gates the push. Statuses below are **not** ticked by the prep stream.
Read `openspec/specs/template-endpaper/spec.md` first — it is the authority; this file is the order of
work.

> Row status: **no `TEMPLATES.md` row yet** — `lantern` is a catalogue gap (one of 42 standalone designs in
> `docs/catalog-coverage.md`). The spec carries the exact row to paste into `## Directory`, between
> **Jobstart** and **Listco**. Do that before the PR claims the design, or the marketplace never lists it.

## 0. Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/endpaper`, rename the package to `@free-react-templates/endpaper`
- [ ] `public/CNAME` = `endpaper.free.componentdock.com`; `"homepage"` the same; footer links
      `https://www.componentdock.com/` as "Component Dock"
- [ ] `index.html`: `<title>Endpaper — documentation that answers the question</title>`, a meta
      description, Google Fonts preconnect + the two verified `css2` URLs for **Inter 400;500;600;700**
      and **JetBrains Mono 400;500;600**
- [ ] `index.css` `@theme`: the `--color-primary-50…900` ramp (`#f6f7f8 #eceef0 #d5dade #b0b9c1 #84919d
      #657381 #505c69 #424b56 #3a4149 #22272d`), `--color-accent-300…700` (cyan `#67e8f9 #22d3ee
      #06b6d4 #0891b2 #0e7490`), the two status hues, `--font-sans` / `--font-mono`, and the three radii
      from the spec's token block. **No `primary-950`** — it does not exist in the reference
- [ ] the inline no-flash `applyTheme()` script in `index.html` (6 lines, from the spec §Behaviour 1)
- [ ] Register the workspace in the lockfile (`npm install` at the root — never hand-edit
      `package-lock.json`)

## 1. Primitive tests (before any section code)

- [ ] `ui/Eyebrow` — JetBrains Mono 12px, weight 600, uppercase, `+0.15em` (1.8px), `accent-700` on light
      grounds and `accent-400` on dark ones (**two variants, both tested**)
- [ ] `ui/Mono` — the 10 / 11 / 12 / 14px mono metadata sizes with `tabular-nums` where numbers align
- [ ] `ui/Card` — radius 12, 1px `primary-200` border, white ground, **no shadow at rest**; hover variant
      (`primary-300` border + `shadow-lg`) for the category cards only
- [ ] `ui/Button` — three variants: solid `primary-600` (radius 8, 10/20 or 20/32 padding), white-on-
      gradient (`text-primary-700`, `shadow-lg`), and the 2px `white/30` outline
- [ ] `ui/Pill` — the mono search pill (`rounded-full`, 1px `primary-700`, 12px mono, 24px tall) and the
      FAQ intro pill (`bg-primary-100`, `text-primary-700`, 14px)
- [ ] `hooks/useReveal` — `data-delay` honoured; **returns early and leaves everything visible** under
      reduced motion; jsdom has no `IntersectionObserver` → **define** a stub, never `spyOn`
- [ ] `hooks/useFaq` — single-open, `max-height` from `scrollHeight`, 45° disc, `aria-expanded` +
      `aria-controls` (a deliberate improvement over the reference)
- [ ] `hooks/useDocFilter` — case-insensitive match over title + body of the 6 cards and 6 rows, empty
      state copy, `⌘K`/`Ctrl+K` focus, `Escape` clear
- [ ] `hooks/useTheme` — `.dark` + `localStorage.theme`, no FOUC, system preference on first visit

## 2. Chrome

- [ ] skip link → `#main-content` (first focusable), visible on focus only
- [ ] preloader — 40px ring, `border-4` with a `primary-600` head, removed 300ms after load (no fade under
      reduced motion), `aria-hidden`
- [ ] `ScrollProgress` — 2px `primary-600`, `scrollY / (scrollHeight − innerHeight) * 100` (measured 21.9%
      at `scrollY=1200` on the 6,304px document at 900px)
- [ ] header — sticky, `h-16 lg:h-20`, `bg-white/80 backdrop-blur-lg`, `border-b gray-200`, `shadow-lg`
      past 50px (measured **81px** at 1440, **65px** at 390)
- [ ] wordmark — authored component (lantern mark + Inter 700 21px text), two inks
      (`#22272d`/`#d5dade` + `#22d3ee` bulb), `h-8 lg:h-10`; **not** the source SVG's live `<text>`
- [ ] nav — seven labels (`Categories`, `Popular articles`, `Changelog`, `Support`, `About`, `Blog`,
      `Contact`), `gap-8`, 14px/500, visible **only at ≥1024px**; `.nav-active` (`#111827`, 600) from an
      IntersectionObserver over the four in-page sections
- [ ] theme toggle (moon) with the no-flash inline script
- [ ] mobile disclosure — `aria-expanded`, `hidden` panel, hamburger ⇄ X, same seven labels at 16px + CTA
- [ ] cookie strip (`localStorage['cookie-consent']`, +1.5s, 87px, "Decline"/"Accept All")
- [ ] back-to-top (48px disc, past 300px, `opacity`/`translateY`/`pointer-events`)
- [ ] mobile bar (`lg:hidden`, two buttons) — **relabelled** "Search docs" + "Contact support"

## 3. `#search` hero

- [ ] band `#22272d`, `border-b primary-200`, `py-16 sm:py-20`
- [ ] `h1` "How can we help?" — 36/40, 700, `−0.9px`, white; 30px at 390
- [ ] lede 16/24 in `primary-300`, `max-w-xl`
- [ ] search field — 704×58 at 1440, radius 12, `#3a4149`, border `#424b56`, 56px left inset, magnifier
      icon 20px at left-4, `⌘K` chip at right-4 (12px mono, radius 4)
- [ ] the field is **functional**: filters the 6 cards + 6 rows, `⌘K`/`Ctrl+K` focuses, `Escape` clears,
      empty state line
- [ ] "Popular:" + five mono pills (rate limits · webhook retries · 401 unauthorized · sandbox keys ·
      pagination), wrapping without overflow at 390

## 4. `#categories`

- [ ] head: eyebrow `Browse`, `h2` "Documentation by area" 36/40/`−0.9`, lede
- [ ] **six** cards, `sm:grid-cols-2 lg:grid-cols-3 gap-5`, radius 12, 24px padding, border only at rest
- [ ] per card: 40×40 radius-8 `primary-100` icon square (lucide at 18px), mono counter top-right,
      `h3` 16/600 with a full-card link overlay, 14px body, `border-t primary-100` list of three links
      with `→` in `accent-600`
- [ ] counts **18 / 74 / 21 / 43 / 52 / 32** (sum 240 — the hero's number)
- [ ] hover: `primary-300` border + `shadow-lg`, no layout shift

## 5. `#articles`

- [ ] band `primary-50`; one `rounded-xl` white card holding six rows with dividers
- [ ] per row: mono 11 eyebrow `accent-700`, 16/600 title, 12px mono meta, right-aligned
      `VIEWS`/`HELPFUL` (10px mono uppercase + 14px mono 600 `tabular-nums`, helpful in `accent-700`)
- [ ] values 18.4k / 14.1k / 11.7k / 9.8k / 7.2k / 6.4k and 94 / 91 / 96 / 88 / 92 / 89 %
- [ ] row hover `primary-50`; whole row one link target

## 6. `#changelog`

- [ ] four entries, `border-t primary-200`, `py-6`, `grid sm:grid-cols-[8rem_1fr] gap-8`
- [ ] version 14px mono/600 + date 12px mono `primary-400` in the fixed **128px** column
- [ ] four badges in four colours: Added `bg-accent-600` white · Fixed `bg-primary-200`
      `text-primary-800` · Deprecated `bg-amber-400` `text-amber-950` · Breaking `bg-red-600` white
- [ ] closing note panel (`rounded-xl`, `border-primary-200`, `bg-primary-50`, 20/16 padding)
- [ ] below 640px: one column, version above the badge

## 7. `#support`

- [ ] band `#22272d`, `text-primary-100`, `py-20 sm:py-28`; head with the `accent-400` eyebrow and a white
      `h2`
- [ ] four cards `sm:grid-cols-2 lg:grid-cols-4`, `bg-primary-800/60`, `border-primary-700`, radius 12
- [ ] per card: white `h3`, `flex-1` body, `border-t` `dl` with the mono cyan response value and the
      12px "Best for …" line
- [ ] the four routes: Community forum ~4 hours · Email support 1 working day · Status page Live ·
      Security 24 hours
- [ ] closing policy paragraph in `primary-300`

## 8. `#faq`

- [ ] centred head (`max-w-3xl`): `bg-primary-100` pill "About these docs", `h2`, lede
- [ ] five rows in `divide-y divide-gray-200`, `py-6`: 18/600 question + 32px `gray-100` plus disc
- [ ] panel `overflow-hidden` with `max-height`/`opacity` transition; open panel ≈ 88px; disc rotates 45°
- [ ] single-open: opening one closes the others; second click closes
- [ ] `aria-expanded` / `aria-controls` / `role="region"` / `aria-labelledby` (deviation 2)

## 9. `#contact`

- [ ] gradient `to bottom right` `#505c69 → #3a4149`, `relative overflow-hidden`, `py-20 lg:py-28`
- [ ] decorations, both `aria-hidden`: two 256px `bg-white/10 blur-3xl` circles (top-right, bottom-left)
      and the 40px-pitch white dot grid at 10% opacity
- [ ] `h2` "Still stuck?" at **48px** (≥1024), 36 at `sm`; lede 18px `primary-100`
- [ ] two CTAs: white solid (radius 8, 32/16, `shadow-lg`) and the 2px `white/30` outline

## 10. Footer

- [ ] `bg-gray-900`, `pt-16 lg:pt-24`, 12-column grid (brand 4 / links 5 / newsletter 3)
- [ ] brand: light logo, blurb, three 40px social tiles with **real** URLs (never `#`)
- [ ] link columns headed 14/600 uppercase `+0.7px` white: **Resources** (replacing the dead "Spaces"),
      **Company**, **Support**
- [ ] newsletter: `type="email" required`, inline validation + success line, no navigation
- [ ] legal bar (`border-t gray-800`): copyright + Privacy / Terms / Style guide
- [ ] **`min-width: 0` on the three grid children** — the reference overflows 401px at a 390px viewport
      because of this column

## 11. Cross-cutting verification

- [ ] dark mode matches the spec's dark table (body `#030712`, ink `#f3f4f6`, cards `primary-900/40`,
      the two dark bands unchanged)
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] band heights within 5% of 397 / 985 / 1,087 / 1,223 / 720 / 820 / 452 (+ header 81, footer 539)
- [ ] reduced motion: nothing left at `opacity: 0`, no preloader fade, accordion still opens instantly
- [ ] no bare `#`, no `tel:` without digits, every in-page `#id` exists
- [ ] no ColorLib string anywhere in `apps/endpaper` (comments included); footer links Component Dock
- [ ] `scripts/verify-app.sh endpaper` green (typecheck, lint, **100% coverage**, build)
- [ ] `TEMPLATES.md` row added under `## Directory` between **Jobstart** and **Listco**, heading count
      bumped to `(34)`
