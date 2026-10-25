# Template: Stoke (Home services — emergency HVAC landing built on a published arrival window)

## Purpose

An emergency HVAC page whose entire argument is a number the visitor can hold the company to: **the
arrival window, published by shift**. The hero refuses the trade's usual claim ("we are fast") and
replaces it with a time ("we will tell you when"), then a dark band does the arithmetic — three
shifts, three different promises (`within 2 hours` daytime, `within 3 hours` evenings, `first call at
7am` overnight) — and a live card reads the visitor's own clock and shows which window they are in
*right now*, in 48 px monospace, recolouring to ice-blue when the thin overnight crew is the honest
answer. Around that spine sit four things to try before calling, six things the crew comes out for
with price lines, four reasons the published window is the point, twelve covered towns, three
reviews, five questions about when *not* to call, and a red closing band.

Recreation of the ColorLib **"Coldsnap"** design (https://colorlib.com/wp/template/coldsnap/, live
preview https://preview.colorlib.com/theme/coldsnap/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

* **Source slug:** `coldsnap`
* **ColorLib page:** https://colorlib.com/wp/template/coldsnap/ — HTTP 200, 111,765 B,
  `<title>` **"Coldsnap - Emergency HVAC Website Template 2026 - Colorlib"**
* **Live preview:** https://preview.colorlib.com/theme/coldsnap/ — HTTP 200, 74,998 B, page
  `<title>` **"Emergency HVAC in Tulsa, with the arrival window published | Coldsnap Heating &
  Cooling"** (read 2026-10-25 with `curl -4`; this host resolves an IPv6 address that is banned, so
  every fetch needs `-4`, and the browser needs
  `--host-resolver-rules=MAP preview.colorlib.com 104.26.10.149`)
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coldsnap-template.jpg
  (served as **JPEG**, 304,360 B, 2400×1892 — a macOS-Safari-window-framed capture of the licence
  strip, the header, the whole hero and the top of the dark response band)
* **New name:** `stoke` (apps/stoke, `@free-react-templates/stoke`) — one lowercase word meaning *to
  stoke* a furnace, i.e. the heating half of the trade; differs from the source slug and has **zero**
  substring hits repo-wide (`git grep -il stoke origin/main` → empty), no `apps/stoke`, no
  `openspec/specs/template-stoke/`, no `docs/templates/stoke/`, no `**Stoke**` bold name in
  `TEMPLATES.md`, and all four ColorLib URL forms (`wp/template/stoke/`, `theme/stoke/`,
  `theme/bootstrap/stoke/`, `theme/bb/stoke/`) return **404** (probed 2026-10-25)
* **Deploy target:** https://stoke.free.componentdock.com (`apps/stoke/public/CNAME`, `homepage` in
  `apps/stoke/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## Business (365)` (line 879), the section that already holds every HVAC row
  (`hvac` → `clutch` / `aeroworks`, `hvacompany` → `frostguard`).

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, 2,857 `[x]`, every row resolving to an app and a spec — but
the **catalogue is not complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled
and compared with the 1,631 slugs the checklist cites, and **256 designs are on the listing that the
checklist never recorded** (42 standalone + 214 snippet variants). The census, its commands, the open
decision and both buckets are recorded in `docs/catalog-coverage.md`.

`coldsnap` is one of the 42 standalone designs (a row of that table: `coldsnap` — preview 200,
74,998 B). Three of the 42 have been prepped before this run — `airwise` → **Thermly**,
`backstop` → **Flowcert**, `circles` → **Closeknit** — and they established the hand-off pattern.
No spec on main names `template/coldsnap`
(`git grep -l 'wp/template/coldsnap/' origin/main -- openspec/specs` → empty) and no app named
`coldsnap` exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR title claims a row —
paste this line under `## Business (365)`, then flip it to `[x]` with the same bookkeeping commit
that writes the surge URL:

```
- [~] **Coldsnap** — [colorlib](https://colorlib.com/wp/template/coldsnap/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/coldsnap-template.jpg) · [stoke](https://stoke.free.componentdock.com)
```

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/coldsnap/` page (DOM authority) | 74,998 | `ad2c084e68d758ca3fec85e197f73fef5ec7c47c5de1284183ec834a17470e07` |
| `theme/coldsnap/_astro/Base.h47zVCKl.css` (token authority) | 58,651 | `a2e216095b229401c7b9d60defaabd4474f0324d2c49901ccb5b5c7f1f567355` |
| `theme/coldsnap/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/coldsnap/_astro/ClientRouter…CYDbzu1r.js` | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` (view-transition router; no design content) |
| inline `<style>` in the page (`@font-face`, 12,360 B — the **only** font source) | — | Inter 400/500/600/700/800 + JetBrains Mono 500/700, pointing at the preview's `/cf-fonts/v/…/wght/normal.woff2`, `font-display: swap` |
| inline `<script>`: `applyTheme()` (2 lines of logic) | 454 | `localStorage.theme` + `prefers-color-scheme`, re-applied on `astro:after-swap` |
| inline `<script>`: **response clock** (the page's signature behaviour) | 2,391 | window table + per-minute `render()`, quoted in §Behaviour |
| inline `<script>`: preloader removal on `load` | 370 | fades `#preloader` to `opacity: 0`, removes after 300 ms |
| catalog screenshot `coldsnap-template.jpg` | 304,360 | `84a5a867d8cd2a618a30e1d227558c3fdeb921e285c2309a4ce13dc6298352ac` (real JPEG, 2400×1892 — see §Screenshot analysis) |
| `colorlib.com/wp/template/coldsnap/` (catalog entry) | 111,765 | `247aa63dfcad767254d3c63a58375bfd3f61dd13e32664744443c24ab184613c` |
| `assets/img/logo.svg` / `logo-light.svg` (200×40, same file twice) | 739 / 739 | `a717ab4e3cca1570a6b3d923a5cc207f4954c0fe024d99bccd41364d4f4600bd` / `2c0d171d8aa5d24737458f43051d4d46d894d8f57e2e9d7511b8cda413ce0003` |
| `assets/img/window-panel.svg` (800×600 diagram) | 1,806 | `55c91333449d8409cfe297ec9b70fc539401bed4ebbc10e5bdb6147e367b8248` |
| `favicon.svg` | 328 | `c5678afd6069a6dd76535abef0ef157f7e83f162e88cd59a44ae0de7d911adb1` |
| `css/style.css`, `js/snippet.js` | — | **HTTP 404** — the theme is an Astro build, so there is no `css/style.css` and no kit snippet; the two `_astro` scripts are the whole JS surface |
| `downloads/free/coldsnap.zip` | — | **HTTP 404** — there is no archive twin, so the live preview is the sole DOM/CSS reference |

The preview is an **Astro 5 build with Tailwind 4.3.3 output**: one stylesheet, one deferred kit
script, one client router, no framework bundle. **Both `_astro` scripts are byte-identical to the ones
the Circles prep measured on 2026-10-25** (`e26cc055…` / `69eb3ac5…`) — the same house kit renders
every one of these 2026 designs, so the *behaviour* inventory transfers between them while the
markup, palette and band order do not. Do not copy a sibling's tokens because the kit hash matches.

## Design tokens (measured from `_astro/Base.h47zVCKl.css`, 58,651 B, and the live render at 1600 px)

### Brand ramp — `primary` (a red, **not** an orange, and not the stock Tailwind red)

The design does not use stock `red-*`; it defines its own ten-stop ramp and compiles the literals
below. This is the single most important fidelity fact on the page: the brand is **`#d41f1f`**.

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#fff1f1` | closing-CTA button hover ground (`hover:bg-primary-50`) |
| `primary-100` | `#ffdfdf` | testimonial avatar discs, the `Reviews` / `Questions` eyebrow pills, closing-band lede text |
| `primary-200` | `#ffc4c4` | header city/phone pill hover border |
| `primary-300` | `#ff9b9b` | dark-mode only: active window promise (`dark:` on the clock) and link hover |
| `primary-400` | `#fb6363` | **the live clock promise** in light-of-dark-band (`text-primary-400`, 48 px mono), eyebrow labels inside the dark band, dark-mode accents |
| `primary-500` | `#ee3b3b` | focus rings on the dark band (`focus:ring-primary-500`), **the daytime bar in the `window-panel` diagram**, testimonials carousel dot (active) |
| `primary-600` | `#d41f1f` | **brand** — `.btn-primary` ground, scroll-progress bar, preloader spinner arc, `.nav-active` sibling accents, back-to-top disc, hero `h1` second sentence, process ordinals, cookie `Accept All`, newsletter `Subscribe` |
| `primary-700` | `#b11717` | `.btn-primary:hover`, every light-band eyebrow label, every service price line, the **whole closing CTA band** (`bg-primary-700`), the evening bar in the diagram |
| `primary-800` | `#921717` | dark-mode hover only (`dark:hover:bg-primary-800`) |
| `primary-900` | `#7a1a1a` | dark-mode only — `dark:bg-primary-900` disc behind the `Reviews` pill |

### Cool ramp — `ink` (the neutral, blue-cast, not stock gray)

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f6f7f8` | why-us band ground, `hover:bg-ink-50` on icon buttons |
| `ink-100` | `#eceef1` | **the service grid's hairline ground** (`bg-ink-100` + `gap-px`), hero bottom border, header border, licence-band text colour |
| `ink-200` | `#d6dae0` | header pill borders |
| `ink-300` | `#b0b7c2` | hero ghost-button border |
| `ink-400` | `#7e8898` | why-us figcaption, diagram time ticks |
| `ink-500` | `#5d6879` | body copy in the light bands, dark-toggle icon colour |
| `ink-600` | `#454e5e` | nav link colour, hero lede |
| `ink-700` | `#333a47` | hero checklist items, ghost-button label, town list |
| `ink-800` | `#20242d` | **licence strip ground**, all light-band `h2`s |
| `ink-900` | `#14171d` | **response band ground**, `h1`, diagram canvas |

### Ice ramp — `ice` (the cold half of the palette; only four stops are used)

| token | hex | where |
| --- | --- | --- |
| `ice-50` | `#f2f8fb` | **hero ground** (`bg-ice-50`) |
| `ice-200` | `#c4e0ee` (emitted only as `oklab(89.05% -.0231 -.0269 / .5)`, i.e. `bg-ice-200/50`) | the 520 px blurred disc behind the hero's top-right corner |
| `ice-300` | `#95c9e0` | **the overnight clock promise** (the script swaps `text-primary-400` → `text-ice-300` when the thin night crew is the honest answer), dark-mode eyebrow |
| `ice-700` | `#285a7c` | hero eyebrow label (`Tulsa · Licensed mechanical contractor`), the overnight bar in the diagram |
| `ice-900` | `oklab(36.23% -.0247 -.0463)` ≈ `#234157`, only at `/20` | dark-mode hero disc |

### Stock values the page also leans on

| token | value | where |
| --- | --- | --- |
| `gray-50` / `gray-900` | `#f9fafb` / `#111827` | testimonials ground / **footer ground** |
| `gray-100`–`gray-800` | stock Tailwind | FAQ icon discs, cookie border, footer input ground (`gray-800`), footer borders |
| `amber-400` | `oklch(82.8% .189 84.429)` = `#fbbf24` | the five hero stars and the five stars per testimonial |
| `body` | `background:#fff`, `color:#111827`, `-webkit-font-smoothing:antialiased` | read from the sheet's `body` rule |

### Typography

| role | face | sizes (measured) |
| --- | --- | --- |
| everything | **Inter**, `system-ui, sans-serif` — set on `html,:host` with `line-height: 1.5`, weights 400/500/600/700/800 loaded | `h1` **60 px / 63 px** (`leading-[1.05]`, `tracking-tight`), `h2` 36 px → 40 px at `sm`, lede 18 px, body 16 px, `text-sm` 14 px, eyebrow 14 px `font-bold uppercase tracking-wide` |
| machine voice | **JetBrains Mono**, `Consolas, monospace` — weights 500/700 | **the clock promise `text-4xl` (36 px) → `sm:text-5xl` (48 px), weight 700, `tabular-nums`**; the three window promises `text-sm`; the diagram's time ticks |

Both faces are on Google Fonts and both exact URLs return **200** (probed 2026-10-25 with a browser
UA): `css2?family=Inter:wght@400;500;600;700;800` and
`css2?family=JetBrains+Mono:wght@500;700`. Load them with a `<link>` in `index.html`; the reference
delivers them from its own `/cf-fonts` cache inside an inline `<style>` block, which is why grepping
the stylesheet for `@font-face` finds nothing.

### Buttons, radii, shadows

| token | value | where |
| --- | --- | --- |
| `.btn` | `border-radius: .5rem` (8 px), `padding: 10px 20px`, `font-size: 14px`, `font-weight: 500`, `gap: 8px`, `justify-content/align-items: center`, `transition: all` | every component button; the hero and clock CTAs add `text-base` (16 px) and `justify-center` |
| `.btn-primary` | `background:#d41f1f`, `color:#fff`, brand shadow `0 10px 15px -3px rgba(212,31,31,.25)` + `0 4px 6px -4px rgba(212,31,31,.25)`; hover `background:#b11717` with the shadow at `/30` | call CTAs, cookie accept, newsletter submit |
| `.btn-secondary` | white ground, `1px` border, `hover:bg-gray-50`; dark variant `#111827` ground, `#374151` border | unused on this page but part of the kit |
| radii | `lg .5rem` · `xl .75rem` · `2xl 1rem` · `full 2147483647px` | `2xl` = the service grid, the clock card, the testimonial cards, the why-us figure; `full` = pills, dots, avatar discs, back-to-top |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | testimonial cards (measured `rgba(0,0,0,.1) 0 4px 16px -4px`) |
| `shadow-lg` | stock Tailwind | header once `scrollY > 50`; cookie strip |
| container | `max-width 96rem` with `padding-inline 1rem → 3rem` by breakpoint (`40/64/80/96 rem`) | every band |

### Rhythm (measured, not guessed)

* `.section` = `padding-block: 5rem` (`py-20`), `7rem` (`py-28`) from `lg` — the live `padding-top`
  of six of the eight bands at 1600 px is **112 px**.
* `#testimonials`, `#faq`, `#contact` use `py-20 lg:py-28` inline instead of `.section` but land on
  the same 112 px.
* The hero is **774 px tall at 1600 × 1000** (measured `getBoundingClientRect`), i.e. content-height,
  not `100vh`.
* `#process`'s `ol` is `grid gap-8 sm:grid-cols-3` and holds **four** items — so at ≥640 px the fourth
  sits alone on a second row, left-aligned. That is the reference's layout, not a bug to "fix" into
  `lg:grid-cols-4`; check it against the live page before changing it.
* `#services` is `grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100
  sm:grid-cols-2 lg:grid-cols-3` with **no radius on the cells** — the `gap-px` over `ink-100` draws
  the hairlines, and the outer `2xl` radius + `overflow-hidden` clips the corner cells. Cells are
  white, `p-6 lg:p-8`, and the price line is pushed down with `flex-1` on the blurb.

## Reference document order (chrome, licence strip, header, nine bands, footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white (`dark:gray-950`) | fixed `z-[100]` overlay, 40 px spinner `border-4 border-gray-200 border-t-primary-600`, `animate-spin`; removed on `load` |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio |
| — | `[data-licence-bar]` | `ink-800` (`#20242d`), text `ink-100` | 36 px strip, `text-xs`: `Licence` + bold **`OK MECH #00000`** · (`sm`+) `NATE-certified on every truck` · (`sm`+) `Serving` + bold **`Tulsa metro`**; right side a star + bold `4.9` + `260+ reviews on Google (sample)` |
| — | `header` | `bg-white/90` + `backdrop-blur-lg`, `border-ink-100` | sticky `z-50`, **64 px / 80 px at `lg`**; wordmark (`logo.svg`, 32/36 px tall; `logo-light.svg` in dark); desktop nav at **`xl`** (1280) — `Emergency`, `Services`, `Rates`, `Service areas`, `About`, `Contact`; right cluster: city pill `Tulsa, OK` → `#service-areas` (**`2xl` only**), phone pill `(555) 060-0600` (`md`+), dark-mode toggle, solid `Call now` (`xl`+), hamburger (`xl:hidden`); mobile panel repeats the six links + a phone pill |
| 1 | (hero, no id) | `bg-ice-50` `#f2f8fb`, `border-b border-ink-100` | 520 px blurred `ice-200/50` disc clipped at the top-right; eyebrow `Tulsa · Licensed mechanical contractor` (`ice-700`); `h1` two sentences — `We will not tell you we are fast.` in `ink-900` + a **block** span `We will tell you when.` in `primary-600`; lede; solid `Call (555) 060-0600` + ghost `What time can you be here?` → `#response`; five amber stars + `4.9` + `260+ reviews on Google · sample data`; four ticks in a `sm:grid-cols-2` list |
| 2 | `#response` | **`ink-900` `#14171d`**, white text, `text-white/*` steps | 12-col split 5/7. Left: eyebrow `Response` (`primary-400`), `h2` `The window, by the hour`, lede, then an `ol` of **three rows**, each `border-l-2 border-white/15 pl-4` and `data-window-row="7-17" \| "17-22" \| "22-7"` — `Weekday daytime` / `Six trucks out. Most calls are reached well inside the window.` / **`within 2 hours`** in mono; `Evenings to 10pm` / `Three trucks. After-hours rate applies and is quoted on the phone.` / **`within 3 hours`**; `Overnight` / `Two technicians on call overnight for no-heat below freezing and for anything unsafe. Everything else is booked first thing.` / **`first call at 7am`**. Right: the **live card** — `rounded-2xl border-white/10 bg-white/5 p-6 sm:p-8`, label `Right now` (`text-xs font-bold uppercase tracking-wide text-white/40`), the promise (`font-mono text-4xl sm:text-5xl font-bold tabular-nums text-primary-400`, `aria-live="polite"`), the shift label (`text-lg text-white/80`), a note (`text-sm text-white/45`, `min-h-[1.5rem]`), a `border-t border-white/10` row with the solid call CTA + `Answered by a technician, not an answering service.`; footnote in `text-white/35` about sample windows |
| 3 | `#process` | white | eyebrow `Before we arrive` (`primary-700`), `h2` `Four things worth trying while you wait`, lede, then **four** numbered items in a `sm:grid-cols-3` grid: each an ordinal `01`–`04` (`text-sm font-bold tabular-nums text-primary-600`) beside a `h-px flex-1 bg-ink-100` rule, an `h3`, a paragraph, and a `text-sm font-semibold text-primary-700` takeaway (`Fixes it more often than you would think`, `Two minutes`, `One to three hours`, `Call us`) |
| 4 | `#services` | white | eyebrow `What we come out for`, `h2` `The calls we take at two in the morning`, lede; the hairline 6-cell grid described above — `No cooling`, `No heat`, `Anything unsafe`, `Water where it should not be`, `Frozen system`, `Commercial cover`, each with a blurb and a price line (`From $119 after hours`, `From $119 after hours`, `Safety call, no diagnostic fee`, `From $149`, `From $149`, `Contract rates`); footnote about sample prices |
| 5 | `#why-us` | `bg-ink-50` `#f6f7f8` | two columns at `lg` (`items-center gap-12 lg:gap-16`), **figure first at `lg`, last below** (`order-last lg:order-first`): the `window-panel.svg` diagram (`rounded-2xl object-cover`, 800×600) + figcaption in `text-ink-400`; right: eyebrow `Why publish a window`, `h2` `A promise you can check is worth more than one you cannot`, lede, and a `<dl>` of **four** `border-l-2 border-primary-600 pl-5` items — `The window is by shift, not one number`, `You hear before the window, not after`, `The after-hours rate is quoted first`, `We tell you when it can wait` |
| 6 | `#areas` | white | 12-col split 5/7, **no eyebrow**: left `h2` `Where we run at night` + lede; right a `ul` of **12 towns** in `grid-cols-2 sm:grid-cols-3`, each `border-b border-ink-100 py-2.5` — `Tulsa`, `Broken Arrow`, `Owasso`, `Jenks`, `Bixby`, `Sand Springs`, `Sapulpa`, `Catoosa`, `Claremore`, `Coweta`, `Glenpool`, `Skiatook`; note about replacing the list |
| 7 | `#testimonials` | `bg-gray-50` `#f9fafb` | centred header with a `rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700` eyebrow pill `Reviews`, `h2` `What people say afterwards`, sample-reviews note; a **3-slide carousel** (`[data-carousel]`, `overflow-hidden`, `flex transition-transform duration-500 ease-out`) of white `rounded-2xl p-8 shadow-soft` cards — five amber stars, the quote in `text-lg font-medium`, a 48 px `rounded-full bg-primary-100 text-primary-600` initial disc, name + town (`Ellis W. · Broken Arrow`, `Nadia F. · Jenks`, `Rob T. · Owasso`); round white `shadow-lg` arrows at `-left-4` / `-right-4` (hidden below `lg`) and a dot row |
| 8 | `#faq` | white | eyebrow pill `Questions`, `h2` `Before you call at 3am`, note; `divide-y divide-gray-200` list of **five** rows, each a full-width `button` + a `span` in a `h-8 w-8 rounded-full bg-gray-100` disc (the icon rotates 45° when open) + a `max-height: 0` panel: `What counts as an emergency?`, `What does after hours cost?`, `Will you really tell me not to call you out?`, `Do you charge to come out if it is a tripped breaker?`, `Can you fix it the same night?` |
| 9 | `#contact` | **`primary-700` `#b11717`**, white text | centred, **no eyebrow**: `h2` `Is it cold in there, or hot?`, a `text-lg text-primary-100` line, then a white solid `Call (555) 060-0600` (`rounded-lg px-8 py-4 text-base font-bold text-primary-700`, measured 16/32 px padding, 8 px radius) and a `border-2 border-white/40` ghost `See the arrival windows` → `#response` |
| — | `footer` | `bg-gray-900` `#111827`, `text-gray-300`, `pt-16 lg:pt-24` | 12-col grid: brand block (`logo-light.svg` 40 px, blurb, three `rounded-lg bg-gray-800 p-2.5` social tiles, address / phone / email in `text-gray-400`) · three link columns in one `sm:grid-cols-3` block — `Services` (`No cooling`, `No heat`, `Unsafe systems`, `Commercial cover`), `Company` (`Arrival windows`, `Rates`, `Service areas`, `About`), `Support` (`Contact`, `Privacy`, `Terms`) · `Stay Updated` with an email field + `Subscribe`; bottom bar `border-t border-gray-800`: `© 2026 …` + `Privacy Policy` / `Terms of Service` |
| — | `#cookie-consent` | white (`dark:gray-900`), `border-t`, `shadow-lg` | fixed bottom `role="dialog"`, slides up after 1.5 s, `Decline` (outline) + `Accept All` (`btn`-shaped, `primary-600`) |
| — | `#back-to-top` | `primary-600`, `shadow-lg shadow-primary-600/25` | 48 px `rounded-full` disc, `bottom-6 right-6`, appears past 300 px |

## Behaviour the recreation must reproduce

Read from the two `_astro` scripts (16,233 B kit + 16,357 B router, both byte-identical to the
Circles prep's reads) and the three page-local inline scripts. **Only the first item is unique to
this design**; the rest is the house kit and every sibling page has it.

1. **The response clock** (inline, 2,391 B) — the reason this template exists. A window table
   `[{from:7,to:17,label:"Weekday daytime",promise:"within 2 hours",note:"Six trucks out. Most calls
   are reached well inside the window."},{from:17,to:22,label:"Evenings to 10pm",promise:"within 3
   hours",note:"Three trucks. After-hours rate applies and is quoted on the phone."},{from:22,to:7,
   label:"Overnight",promise:"first call at 7am",note:"Two technicians on call overnight for no-heat
   below freezing and for anything unsafe. Everything else is booked first thing.",overnight:true}]`
   is resolved against `new Date().getHours()` with a wrap-aware test
   (`from <= to ? h >= from && h < to : h >= from || h < to` — the reference's own comment: *"A window
   is allowed to wrap midnight, e.g. 22 to 6"*). The promise, label and note texts are rewritten, the
   promise's colour is swapped `text-primary-400` ↔ `text-ice-300` for the overnight window, and the
   matching `[data-window-row]` gets `data-active` (which drives `data-[active]:border-primary-500`,
   `group-data-[active]:text-white`, `…:text-white/55` and `…:text-primary-300`). It re-runs on a
   **60 s interval** ("so a page left open overnight does not lie") and on `astro:page-load`.
   Verified live at 03:1x local: the card read **`first call at 7am` / `Overnight`** in
   `rgb(149,201,224)` = `#95c9e0` and row `22-7` carried `data-active`.
   Note the static markup is a *fallback pair*, not the same strings: it ships
   `Weekday daytime crew` and `Six trucks out, dispatch answers on the first ring.`, which the script
   replaces on first paint. Keep both (server-rendered fallback, hydrated value).
2. Reveal-on-scroll for `[data-animate]` (`fade-in-up`), **skipped entirely** under
   `prefers-reduced-motion: reduce`: elements below 80 % of the viewport start at `opacity:0`,
   `translateY(20px)`, `transition .6s ease-out` with the element's `data-delay` as
   `transition-delay`; an `IntersectionObserver` (`threshold .1`, `rootMargin 0 0 -10% 0`) reveals
   once and unobserves.
3. Header gains `shadow-lg` past `scrollY > 50`; removed above it.
4. Mobile disclosure: `aria-expanded` flip, `hidden` on the panel, hamburger↔close path swap; inner
   `[data-accordion-toggle]` rows toggle `hidden` + `rotate-180`.
5. Dark-mode toggle: `documentElement.classList.toggle('dark')` + `localStorage.theme`; the page boots
   from `applyTheme()` (`localStorage.theme === 'dark'` or, absent a stored value,
   `prefers-color-scheme: dark`).
6. Scroll-spy on `[data-nav-link]`: each link's `data-nav-link` names a band id; an observer with
   `rootMargin: -20% 0 -70% 0` sets `.nav-active` (`color:#111827; font-weight:600`, white in dark).
   On this page `Emergency`'s value is `response`, so it needs a real `id` target — see the nav
   mapping in Requirement 3.
7. Smooth in-page scroll for `a[href^="#"]:not([href="#"])` with a `header.offsetHeight + 20` offset
   and `history.pushState`.
8. FAQ: **exclusive** — opening one closes the others; panels animate `max-height` to
   `scrollHeight` + `opacity`, the icon rotates 45°.
9. Carousel: per-view **3 ≥1024 px, 2 ≥640 px, 1 below**; each slide's width is set to
   `track.parentElement.offsetWidth / perView` and the track translated by `index * width`; dots are
   `h-2.5 w-8 bg-primary-600` when active and `w-2.5 bg-gray-300` otherwise; arrows only render when
   there is more than one page; **autoplay every 5 s**.
10. Cookie strip: `localStorage['cookie-consent']`, slides in 1.5 s after load, both buttons store a
    value and slide it out.
11. Scroll-progress width = `scrollY / (scrollHeight - innerHeight)`; back-to-top past 300 px with
    `opacity` + `translateY(16px)`; preloader removed on `load`.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **44 anchors**:

| count | href | kind |
| ---: | --- | --- |
| 6 | `/theme/coldsnap/services` | live route → `200` (49,510 B) |
| 4 | `/theme/coldsnap/#response` | live route + fragment → `200` |
| 3 | `/theme/coldsnap/rates` | live route → `200` (47,016 B) |
| 3 | `/theme/coldsnap/service-areas` | live route → `200` (39,954 B) |
| 3 | `/theme/coldsnap/about` | live route → `200` (42,932 B) |
| 3 | `/theme/coldsnap/contact` | live route → `200` (41,582 B) |
| 3 | `#` | **dead** — the three footer social tiles |
| 2 | `/theme/coldsnap/` | the wordmark (header + footer) — the page itself |
| 2 | `/theme/coldsnap/privacy` | live route → `200` (43,557 B) |
| 2 | `/theme/coldsnap/terms` | live route → `200` (42,411 B) |
| 2 | `#service-areas` | in-page fragment, `id="areas"` on the band → **broken anchor** (`#service-areas` does not exist; it lands nowhere) |
| 1 | `#main-content` | skip link → exists (`main#main-content`) |
| 1 | `#response` | the hero ghost button → exists |
| 8 | `tel:` | 7 × `tel:5550600600` + **1 malformed** `tel:(555) 060-0600` (footer) |
| 1 | `mailto:dispatch@coldsnaphvac.example` | `.example` TLD, i.e. a deliberate placeholder |

So: **44 anchors, 3 dead `#`, 1 broken fragment, 1 malformed `tel:`** — recorded as reference
defects, not reproduced (Requirement 14). `index.html` also answers `200` and is byte-identical to
the directory URL, so `index.html` links are a no-op, never a 404.

**Inner-page inventory (all live, all `308 → 200` on the trailing slash — probe with `-L`):**

| page | bytes | `<title>` | `h1` | `h2`s |
| --- | ---: | --- | --- | --- |
| `services/` | 49,510 | Emergency HVAC services in Tulsa \| Coldsnap Heating & Cooling | A short list, on purpose | No cooling · No heat · Anything unsafe · Condensate and water damage · Frozen coil · Commercial cover · Not sure if it can wait? |
| `about/` | 42,932 | About Coldsnap Heating & Cooling \| … | About Coldsnap Heating & Cooling | Everyone says twenty-four seven. We say what time. · Three commitments · On call · Cold house, or a hot one? |
| `rates/` | 47,016 | Emergency HVAC rates in Tulsa \| … | The number you are afraid to ask on the phone | What a call costs · Four things that are not on the invoice · What people ask about the bill · Want the figure for your call? |
| `service-areas/` | 39,954 | Emergency HVAC service areas around Tulsa \| … | The metro, and an honest edge to it | Towns we cover · Why the edge is stated · In one of these towns? |
| `contact/` | 41,582 | Contact Coldsnap Heating & Cooling \| … | Contact Coldsnap Heating & Cooling | Send us a message · Reach us |
| `terms/` | 42,411 | Terms of Service \| … | Terms of Service | 1. Acceptance of Terms … 12. Contact Information (twelve sections) |
| `privacy/` | 43,557 | Privacy Policy \| … | Privacy Policy | 1. Information We Collect … 10. Contact Us (ten sections) |

The multi-page shell is the authoritative reference for what the landing page folds away — the
`/rates/` page in particular carries the full price table (`Weekday 7am–5pm $89 diagnostic`,
`Evening 5pm–10pm $119`, `Overnight 10pm–7am $169`, `Weekend daytime $119`, `Safety call` no fee,
`Second visit for a part`, `Repair labour`, `Contract holders`) and the "four things that are not on
the invoice" band. **The recreation does not rebuild those pages** — see Deviation 1 for the mapping
each route gets.

## Class census (no phantom-class delta)

The page uses **340 distinct class tokens**. 339 of them compile to a rule in
`Base.h47zVCKl.css`; the only one that does not is **`group`**, which is a Tailwind marker with no
declarations by design.

⚠️ **Two traps when re-running this census** (both produced false "unstyled class" conclusions on
this page before they were checked):

1. `2xl:block` is compiled as **`.\\32 xl\\:block{display:block}`** — Tailwind escapes the leading
   digit as `\32 ` (a CSS hex escape plus a space). Grepping the sheet for the literal string `2xl`
   returns exactly **one** hit, the unrelated `--container-2xl:42rem`, and that is *not* evidence the
   utility is missing. Verified in the live browser: the wrapper `<span class="hidden 2xl:block">`
   computes to `display: block` at 1600 px and the `Tulsa, OK` pill is 113 × 34 px.
2. `data-[active]:border-primary-500` compiles to
   `.data-\[active\]\:border-primary-500[data-active]`, i.e. rule *plus* an attribute selector — a
   naive `.token{` search misses it.

There is therefore **no comingsoon_13-style "class with no rule"** to floor into this spec.

## Screenshot analysis (2400 × 1892, macOS-Safari window frame)

The capture is a light-mode desktop view framed in Safari chrome (traffic lights, address bar), so
the top ~90 px and the outer ~60 px are browser, not design. Inside it, top to bottom:

* the **near-black licence strip** — `Licence OK MECH #00000` · `NATE-certified on every truck` ·
  `Serving Tulsa metro` on the left, `★ 4.9 260+ reviews on Google (sample)` hard right;
* the **white sticky header**: small red-and-black wordmark (a flame/thermometer glyph + `COLD SNAP`
  over a tiny `HEATING & COOLING` line), a centred six-link nav, then `📍 Tulsa, OK`, `📞 (555)
  060-0600`, a moon glyph and the solid red `Call now`;
* the **ice-blue hero** on `#f2f8fb` with the blurred disc barely visible top-right: the small
  `ice-700` uppercase eyebrow, a 60 px two-tone `h1` in which "We will not tell you we are fast."
  wraps to two lines in near-black and "We will tell you when." is a third line in brand red, the
  lede, the red solid + outlined pair of buttons, the five amber stars with `4.9`, and the four ticks
  in two columns with red check glyphs;
* the **top of the dark band**: `RESPONSE` in red, `The window, by the hour`, the lede, the first two
  and a half window rows (label + grey note left, mono promise right) and, on the right, the
  bordered card with `RIGHT NOW`, a **large red `within 2 hours`**, `Weekday daytime`, the note, the
  red CTA and the "answered by a technician" line; the band is cut off mid-row.

Everything below the dark band's first card — process, services, why-us, areas, testimonials, FAQ,
closing band, footer — is **not in the screenshot**: read those from the DOM and the sheet (which is
what §Reference document order and the design notes do). The screenshot is useful for two things
only: the header/hero composition and the fact that the capture was taken during **weekday daytime**,
so the clock card shows the red 2-hour promise rather than the ice-blue overnight one.

## Requirements

### Requirement 1: Page chrome (preloader, skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar under the
sticky header, a 48 px back-to-top disc that appears past 300 px, and a cookie strip that slides up
1.5 s after load and dismisses into component state. It SHALL NOT leave the preloader overlay at
`opacity: 1` once the document is ready.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the `load` event fires (or `readyState === "complete"`)
- **THEN** the white overlay with the 40 px red-topped spinner is gone within 300 ms
- **AND** the page is interactive with JavaScript disabled, because the overlay is never rendered
  server-side in the recreation

#### Scenario: Visitor scrolls

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls past 300 px
- **THEN** the progress bar's width equals `scrollY / (scrollHeight - innerHeight)` as a percentage
- **AND** the back-to-top disc fades in (`opacity 1`, `translateY(0)`) and returns the page to the top
- **AND** below 300 px it is `opacity: 0` with `pointer-events: none`

#### Scenario: Visitor answers the cookie strip

- **GIVEN** the strip has slid up
- **WHEN** either `Decline` or `Accept All` is activated
- **THEN** the strip slides out and is removed, and the choice is held in state (no invented storage
  key — see Deviation 3)
- **AND** the strip is a `role="dialog"` with an accessible name

### Requirement 2: Licence strip and header (with the reference's breakpoint behaviour)

The app SHALL render the 36 px `ink-800` licence strip above a sticky translucent header whose
desktop navigation appears at `xl` (1280 px), not `lg`, and a disclosure menu below it.

#### Scenario: Visitor inspects the licence strip

- **GIVEN** the page has loaded at a desktop viewport
- **WHEN** the strip is inspected
- **THEN** it reads `Licence OK MECH #00000`, `NATE-certified on every truck`, `Serving Tulsa metro`
  and, right-aligned, a star with `4.9` and `260+ reviews on Google (sample)`
- **AND** its ground is `#20242d` with `ink-100` text at 12 px, and it is not sticky

#### Scenario: Visitor inspects the header at three widths

- **GIVEN** the page is rendered at 1600 px
- **WHEN** the header is inspected
- **THEN** the six nav links, the `Tulsa, OK` pill, the `(555) 060-0600` pill, the dark-mode toggle,
  the `Call now` button and no hamburger are visible
- **AND** at 1200 px the six links and `Call now` are replaced by the hamburger (`xl:hidden`), the
  phone pill survives from `md`, and the city pill is hidden until `2xl` — matching the reference's
  own comment that a trade header carries too many items for `lg`
- **AND** the header is `position: sticky`, `top: 0`, `z-50`, `bg-white/90` with `backdrop-blur-lg`,
  and gains `shadow-lg` only once `scrollY > 50`

#### Scenario: Visitor opens the mobile menu

- **GIVEN** the header is rendered below `xl`
- **WHEN** the visitor activates the menu control
- **THEN** the control reports `aria-expanded="true"`, its glyph swaps to a close icon, and the panel
  lists the same six links plus the phone pill
- **AND** activating it again closes the panel

### Requirement 3: Hero

The app SHALL render a two-tone `h1` on the `ice-50` ground, with the second sentence on its own line
in the brand red, plus the rating row, two controls and four ticks, in the reference order.

#### Scenario: Visitor lands on the page

- **GIVEN** the page has loaded
- **WHEN** the hero is in view
- **THEN** the only `h1` reads `We will not tell you we are fast.` in `ink-900` and `We will tell you
  when.` on a `block` line in `primary-600`
- **AND** the eyebrow reads `Tulsa · Licensed mechanical contractor` in `ice-700`, 14 px, bold,
  uppercase, `tracking-wide`
- **AND** the solid control is a `tel:` link labelled `Call (555) 060-0600` and the ghost control is
  labelled `What time can you be here?` and targets the response band

#### Scenario: Visitor reads the proof row

- **GIVEN** the hero is in view
- **WHEN** the rating and tick list are inspected
- **THEN** five amber stars precede `4.9` and `260+ reviews on Google · sample data`
- **AND** the four ticks read `The arrival window, published by time of day`, `After-hours rate quoted
  before we set off`, `A technician answers, not an answering service`, `If we will miss the window
  you hear before it opens`, in two columns from `sm`

### Requirement 4: The response band and its live clock (the signature behaviour)

The app SHALL resolve the visitor's current hour against three overlapping-by-shift windows and
render the matching promise, shift label, note and active row, recolouring the promise to `ice-300`
for the overnight window, and SHALL re-resolve at least once a minute.

#### Scenario: A daytime visitor loads the page

- **GIVEN** the local hour is between 07:00 and 16:59
- **WHEN** the band renders
- **THEN** the card shows `within 2 hours`, `Weekday daytime`, the six-trucks note, and the promise is
  `primary-400` (`#fb6363`)
- **AND** exactly one row carries the active treatment: `data-window-row="7-17"`, whose left border
  becomes `primary-500`, whose label becomes white and whose promise becomes `primary-300`

#### Scenario: An evening visitor loads the page

- **GIVEN** the local hour is between 17:00 and 21:59
- **WHEN** the band renders
- **THEN** the card shows `within 3 hours`, `Evenings to 10pm` and the after-hours note in
  `primary-400`
- **AND** the active row is `data-window-row="17-22"`

#### Scenario: An overnight visitor loads the page

- **GIVEN** the local hour is 22:00 or later, or before 07:00 — i.e. the window that wraps midnight
- **WHEN** the band renders
- **THEN** the card shows `first call at 7am`, `Overnight` and the two-technicians note
- **AND** the promise is painted `ice-300` (`#95c9e0`), **not** the red `primary-400`, because the
  reference deliberately colours the thin night promise down
- **AND** the active row is `data-window-row="22-7"`

#### Scenario: The page is left open across a window boundary

- **GIVEN** the page rendered in the daytime window
- **WHEN** the clock crosses 17:00 while the tab is open
- **THEN** the next tick (≤ 60 s) re-resolves and the card shows the evening window without a reload
- **AND** the promise element is `aria-live="polite"` so the change is announced once, not on every
  tick

#### Scenario: JavaScript has not run yet

- **GIVEN** the document is still the server-rendered markup
- **WHEN** the card is inspected before hydration
- **THEN** it shows the reference's own fallback pair — `within 2 hours` with `Weekday daytime crew`
  and `Six trucks out, dispatch answers on the first ring.` — and the night colour is not applied

### Requirement 5: "Before we arrive" process band

The app SHALL render four numbered items with a hairline rule beside each ordinal, in the reference's
`sm:grid-cols-3` grid (so the fourth sits alone on the second row from 640 px up).

#### Scenario: Visitor scans the four checks

- **GIVEN** the process band is in view
- **WHEN** the list is inspected
- **THEN** it renders exactly four items in this order: `Check the breaker and the switch`,
  `Change the filter`, `If the coil is iced, switch to fan only`, `Then stop`
- **AND** each ordinal is zero-padded (`01`–`04`) in `primary-600`, `tabular-nums`, with a
  `h-px flex-1 bg-ink-100` rule filling the rest of its row
- **AND** each item ends with its takeaway line in `text-sm font-semibold text-primary-700`:
  `Fixes it more often than you would think`, `Two minutes`, `One to three hours`, `Call us`

### Requirement 6: Services band (hairline six-cell grid)

The app SHALL render six service cells inside one `rounded-2xl` block whose `gap-px` over an
`ink-100` ground draws the dividers, at two columns from `sm` and three from `lg`.

#### Scenario: Visitor compares what the crew comes out for

- **GIVEN** the services band is in view
- **WHEN** the grid is inspected
- **THEN** it holds exactly six cells in this order — `No cooling`, `No heat`, `Anything unsafe`,
  `Water where it should not be`, `Frozen system`, `Commercial cover`
- **AND** each cell is white, `p-6 lg:p-8`, has a blurb that grows (`flex-1`) and a price line in
  `text-sm font-bold text-primary-700`
- **AND** the price strings are `From $119 after hours`, `From $119 after hours`, `Safety call, no
  diagnostic fee`, `From $149`, `From $149`, `Contract rates`
- **AND** the block's outer corners are 16 px and the cells themselves have no radius

### Requirement 7: "Why publish a window" band with the day diagram

The app SHALL render the diagram figure on the left at `lg` (and last below it) beside four
`border-l-2 border-primary-600 pl-5` claims.

#### Scenario: Visitor reads the argument

- **GIVEN** the band is in view at a desktop width
- **WHEN** the layout is inspected
- **THEN** the figure sits in the left column and the text in the right, and below `lg` the figure
  moves after the text (`order-last lg:order-first`)
- **AND** the figure is a **drawn diagram** — an `ink-900` 800 × 600 canvas with three rounded bars
  (daytime `#ee3b3b`, evening `#b11717`, overnight `#285a7c`), mono time ticks at `07:00`, `17:00`,
  `22:00`, `07:00`, the label `The day, by window`, an accessible name and a caption — redrawn in the
  app, never copied from `window-panel.svg`
- **AND** the four claims read `The window is by shift, not one number`, `You hear before the window,
  not after`, `The after-hours rate is quoted first`, `We tell you when it can wait`

### Requirement 8: Service-area band

The app SHALL render the twelve covered towns as a bordered list, two columns below `sm` and three
above, with no eyebrow — matching the reference's asymmetry (this band has an `h2` but no label).

#### Scenario: Visitor checks whether their town is covered

- **GIVEN** the areas band is in view
- **WHEN** the list is inspected
- **THEN** it holds exactly twelve towns in this order: `Tulsa`, `Broken Arrow`, `Owasso`, `Jenks`,
  `Bixby`, `Sand Springs`, `Sapulpa`, `Catoosa`, `Claremore`, `Coweta`, `Glenpool`, `Skiatook`
- **AND** each row is `border-b border-ink-100 py-2.5`
- **AND** the band has no eyebrow pill or eyebrow label above its `h2`

### Requirement 9: Testimonials carousel

The app SHALL render three review cards in a translating track with 3 / 2 / 1 per view, dot controls,
arrows from `lg`, and 5 s autoplay that honours reduced motion.

#### Scenario: Visitor pages through the reviews

- **GIVEN** the carousel is in view
- **WHEN** the visitor activates a dot or an arrow
- **THEN** the track translates one page at a time, the active dot widens to `w-8` in `primary-600`
  and the rest stay `w-2.5` in `gray-300`
- **AND** the three quotes, names and towns are `Ellis W. · Broken Arrow`, `Nadia F. · Jenks`,
  `Rob T. · Owasso`
- **AND** each card carries five amber stars, a 48 px `rounded-full bg-primary-100` initial disc and
  `rounded-2xl … shadow-soft`

#### Scenario: A visitor prefers reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the carousel mounts
- **THEN** no autoplay timer is started, the reveal observer is not created, and every card is
  already at `opacity: 1`

### Requirement 10: FAQ band

The app SHALL render five questions as an **exclusive** accordion, each with a circular icon that
rotates 45° while its panel is open.

#### Scenario: Visitor opens a question

- **GIVEN** no question is open
- **WHEN** the visitor activates `What does after hours cost?`
- **THEN** its panel expands to its content height with `opacity: 1` and its icon rotates 45°
- **AND** the control is a real `button` with `aria-expanded` and the panel is referenced by
  `aria-controls`

#### Scenario: Visitor opens a second question

- **GIVEN** the first question is open
- **WHEN** the visitor activates another
- **THEN** the first collapses (panel `max-height: 0`, icon back to 0°) and only one is open
- **AND** activating the open one collapses it

### Requirement 11: Closing call-out

The app SHALL render the full-bleed `primary-700` band with a white solid call control and a 2 px
white/40 outline control, both 16 px bold and 8 px radius.

#### Scenario: Visitor reaches the end of the page

- **GIVEN** the closing band is in view
- **WHEN** it is inspected
- **THEN** the `h2` reads `Is it cold in there, or hot?` in white with no eyebrow above it
- **AND** the lede is `primary-200`/`primary-100` on `#b11717`
- **AND** the solid control is a `tel:` link in white text on `#b11717` and the outline control links
  back to the response band

### Requirement 12: Footer

The app SHALL render the four-block `gray-900` footer in the reference order and SHALL add the house
Component Dock credit.

#### Scenario: Visitor reads the footer

- **GIVEN** the footer is in view
- **WHEN** it is inspected
- **THEN** the columns are the brand block (`logo-light`, blurb, three social tiles, address, phone,
  email), `Services` (`No cooling`, `No heat`, `Unsafe systems`, `Commercial cover`), `Company`
  (`Arrival windows`, `Rates`, `Service areas`, `About`), `Support` (`Contact`, `Privacy`, `Terms`)
  and `Stay Updated` with an email field and a `Subscribe` button
- **AND** the bottom bar holds the copyright line, the legal links, **and a `Component Dock` link to
  `https://www.componentdock.com/`** (house rule; the reference has no such link)
- **AND** the newsletter field is `type="email"` and `required`, and submitting it shows a
  confirmation without navigating

### Requirement 13: Route mapping (single page)

The app SHALL resolve the reference's six nav labels against bands that exist on the page, and SHALL
NOT introduce a band the landing page does not have.

#### Scenario: Visitor uses the navigation

- **GIVEN** the header is rendered at a desktop width
- **WHEN** each nav item is followed
- **THEN** `Emergency` targets the response band (the reference's own `#response` value),
  `Services` the services band, `Rates` the services band (its six price lines; see Deviation 1),
  `Service areas` the areas band, `About` the why-us band and `Contact` the closing band
- **AND** every target id exists on the page, no anchor is left pointing at `#`, and the scroll-spy
  highlights the band in view

### Requirement 14: Accessibility and provenance

The app SHALL meet the house accessibility baseline and SHALL NOT reference the source design
anywhere in `apps/stoke`.

#### Scenario: Keyboard and screen-reader use

- **GIVEN** a keyboard-only visitor
- **WHEN** they tab from the top
- **THEN** the first stop is the skip link; the disclosure, dark toggle, carousel and every FAQ row
  are operable, and focus is visible against both the light grounds and the `ink-900` band
- **AND** the clock promise is `aria-live="polite"`, the diagram has an accessible name, decorative
  discs/rules are `aria-hidden`, and no text sits below 4.5:1 against its ground — the red brand
  `#d41f1f` is used on white only, never as small text on `ink-900` (that band uses `primary-400`)

#### Scenario: Provenance audit

- **GIVEN** the implementation is complete
- **WHEN** `grep -ril "colorlib" apps/stoke` runs
- **THEN** it prints nothing
- **AND** no file contains the source brand, its `coldsnaphvac.example` mailbox, its logo SVG or its
  stylesheet, and the footer links `https://www.componentdock.com/`

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is an eight-route Astro site (`/services`, `/rates`,
   `/service-areas`, `/about`, `/contact`, `/privacy`, `/terms` and `/`, all live — see §Link and
   destination census). The recreation is the single landing page described here. Route links become
   in-page fragments; `Rates` folds into the services band's six price lines plus the response band's
   after-hours note, because the landing page already states every figure the `/rates/` page states
   at the top of its table (the deeper `/rates/` content — the nine-row price table, the "four things
   that are not on the invoice" band and its four questions — is deliberately **not** rebuilt; it is
   a second page, not a tenth band). `Privacy` and `Terms` in the footer point at the closing band.
2. **Dark mode dropped.** The source compiles a complete dark palette (`dark:` on nearly every
   utility) and a `localStorage` theme toggle in the header. The recreation is light-only (house
   convention) and drops the toggle, so the header cluster is the city pill, the phone pill and the
   `Call now` button. Every dark value measured is recorded above so the decision is reversible.
3. **Cookie strip persistence.** The source stores `cookie-consent` in `localStorage`; the recreation
   keeps the dismissed state in component state so no test depends on an invented storage key.
4. **Copy and identity re-branded.** Stoke replaces the source brand everywhere: the wordmark
   (redrawn), the `© 2026` line, the `dispatch@…` mailbox (`dispatch@stokehvac.example`), the
   document title and every URL. The trade city, the twelve towns, the `(555) 060-0600` number and the
   `1420 East 15th Street, Tulsa, OK 74120` address are kept — they are already fictional and they are
   the page's local-search content. The licence strip's `OK MECH #00000` is likewise kept as the
   demo placeholder it is, never presented as a real licence.
5. **Sample-data notes reworded, not removed.** The reference carries seven in-page notes telling the
   buyer to replace demo content (`Sample windows for demonstration…`, `Starting prices are sample
   data…`, `Sample reviews for demonstration…`, `Replace this list with your own towns…`,
   `Replace with a photograph of your own crew and trucks before launch.`, plus the hero's
   `· sample data` suffix and one FAQ answer's `Sample rates are on the rates page`). A marketplace
   template cannot ship "replace before launch" instructions, so each becomes a shorter demo note in
   the same position and type scale (e.g. `Sample windows, shown for the demo`), keeping the band
   heights and the page's honest voice without instructing a buyer in production copy.
6. **The why-us figure is redrawn.** `window-panel.svg` is a generated diagram, not photography, so
   the recreation draws the same idea (three bars, four mono ticks, `The day, by window`) as an inline
   SVG in the app's own palette — no file copied.
7. **Reference defects not reproduced.** The three `href="#"` social tiles get real external hrefs
   with `rel="noreferrer"`; the header city pill's `#service-areas` target becomes `#areas` (the id
   that actually exists); the footer's malformed `tel:(555) 060-0600` becomes `tel:5550600600`; and
   the `#response` scroll offset is handled the way the kit does it (`header.offsetHeight + 20`).
8. **Placeholder imagery.** The page uses no photography at all — one diagram and one inline SVG
   wordmark. Nothing needs `picsum.photos`; if the implementer adds a crew photograph anywhere, it
   must be `https://picsum.photos/seed/stoke-<n>/<w>/<h>`.
9. **Component Dock credit.** The footer's bottom bar gains a `Component Dock` link to
   `https://www.componentdock.com/`. This is the one addition to the reference's layout.
10. **The clock is client-only.** The reference resolves the window in an inline script on
    `astro:page-load`. The recreation resolves it in an effect, renders the static fallback on the
    server/first paint, and re-resolves on a 60 s interval; tests inject the hour rather than mocking
    the clock at module scope, so the three windows are all covered deterministically.

## Verification checklist

- [ ] Spec validates: `openspec validate template-stoke --type spec` prints
      `Specification 'template-stoke' is valid`
- [ ] `apps/stoke` scaffolded from the simplest existing app, package renamed
      `@free-react-templates/stoke`, `public/CNAME` = `stoke.free.componentdock.com`, `homepage` =
      `https://stoke.free.componentdock.com`
- [ ] Tokens: `primary` `#d41f1f` brand on a ten-stop red ramp (`#fff1f1` → `#7a1a1a`), `ink`
      `#f6f7f8` → `#14171d`, `ice` `#f2f8fb` / `#c4e0ee` / `#95c9e0` / `#285a7c`; radii
      `.5/1/1.5 rem`; `shadow-soft` `0 4px 16px -4px #0000001a`; `.btn` 8 px radius, 10/20 px
      padding, 14 px medium, brand shadow at `/25`
- [ ] Fonts: Inter 400–800 and **JetBrains Mono 500/700** via `<link>` in `index.html`; the mono face
      is used for the clock promise, the three window promises and the diagram ticks — not for body
- [ ] Licence strip: `#20242d` ground, 12 px `ink-100` text, three facts left and the 4.9 rating
      right, not sticky
- [ ] Header: sticky, `white/90` + blur, 64/80 px, six links at `xl` only, city pill `2xl`, phone pill
      `md`, `Call now` `xl`, disclosure below `xl` with `aria-expanded`, `shadow-lg` past 50 px,
      scroll-spy `aria-current` on the band in view
- [ ] Hero: `ice-50` ground with the clipped blurred disc, `ice-700` eyebrow, two-tone `h1`
      (`ink-900` + block `primary-600` line), lede, solid `tel:` + ghost → response band, five amber
      stars + `4.9` + sample suffix, four ticks in two columns
- [ ] Response band: `#14171d` ground, three `data-window-row` rows with the exact labels/notes/
      promises, hairlines `border-white/15` and the active row `primary-500`, the card with
      `bg-white/5` + `border-white/10` and the 36/48 px mono promise
- [ ] Clock: 07–17 → `within 2 hours` in `primary-400`; 17–22 → `within 3 hours` in `primary-400`;
      22–07 → `first call at 7am` in **`ice-300`**; one active row each; `aria-live="polite"`;
      re-resolves on a 60 s interval; static fallback strings present before hydration
- [ ] Process band: four items, zero-padded ordinals with the hairline rule, `sm:grid-cols-3` (the
      fourth alone on row two), four takeaway lines
- [ ] Services band: six hairline cells in the reference order, `gap-px` over `ink-100`, 16 px outer
      radius and square cells, six price lines
- [ ] Why-us band: `ink-50` ground, figure first at `lg` and last below, redrawn diagram with three
      bars (`#ee3b3b`, `#b11717`, `#285a7c`) and four ticks, four `border-l-2 primary-600` claims
- [ ] Areas band: no eyebrow, twelve towns in the reference order, `grid-cols-2 sm:grid-cols-3`,
      `border-b` rows
- [ ] Testimonials: three cards, 3/2/1 per view, dots (`w-8` active), arrows from `lg`, 5 s autoplay
      off under reduced motion, three quotes with initials and towns
- [ ] FAQ: five rows, **exclusive**, `aria-expanded`/`aria-controls`, icon rotates 45°, `max-height`
      transition
- [ ] Closing band: `#b11717` ground, `Is it cold in there, or hot?`, white solid `tel:` + 2 px
      white/40 outline, both 8 px radius, 16/32 px padding
- [ ] Footer: four blocks + `Stay Updated`, social tiles with real hrefs, address/phone/email, legal
      bar with the `Component Dock` link to `https://www.componentdock.com/`
- [ ] No `colorlib` string, no source brand, no `coldsnaphvac.example`, no copied SVG or stylesheet
      under `apps/stoke`; the wordmark is redrawn
- [ ] Row added for the design under `## Business (365)` and flipped to `[x]` with the bookkeeping
      commit (the exact line is in §Purpose)
- [ ] `npm run spec:validate`, `scripts/verify-app.sh stoke` and the CI gate are green
