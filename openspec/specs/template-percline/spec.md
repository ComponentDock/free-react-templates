# Template: Percline (Business — septic inspection sold against a ten-day contingency clock)

## Purpose

A one-page site for a **septic inspection and pumping company whose product is turnaround inside someone
else's deadline**. The page is one argument in the order a seller under contract reads it: the hero states
the thing nobody says out loud (*Selling a house with a septic system? / **The clock has already started.***)
beside a **three-field inspection card**; a near-black band walks the **seven steps of a typical Kansas
contract** and marks the two places deals actually slip; a flat green band turns a backup into one phone
call; a six-cell hairline grid prices the trade; a two-column band explains the four things that cause most
failures around a **redrawn site diagram**; twelve towns, three reviews, five questions and a deep-green
closing band finish it.

There is **no photography anywhere** — the only illustration is a 2,234-byte SVG "field panel" and there is
exactly **one `h1`** — and the palette is a single **green ramp** (`#f1f7ee` → `#365a28`, brand
`#41712f`, plus two dark-only steps `#2e4a24`/`#283e21`) on a **warm stone** ink ramp
(`#f7f6f4` → `#191713`), typeset in **DM Sans** with **JetBrains Mono** reserved for day labels and
numerals. This is a light-first design with exactly **two dark grounds** (`#191713`, `#111827`) and
exactly **two green bands** (`#41712f`, `#365a28`).

Recreation of the ColorLib "Fieldline" design (https://colorlib.com/wp/template/fieldline/, live preview
https://preview.colorlib.com/theme/fieldline/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `fieldline`
* **ColorLib page:** https://colorlib.com/wp/template/fieldline/ — HTTP 200, 111,591 B,
  `<title>` **"Fieldline - Septic Service Website Template 2026 - Colorlib"**; its
  `<meta name="description">` sells the same idea (*"Most septic work is not urgent. The exception is a
  property sale, where the inspection sits inside a ten-day contingency and a failure needs a quote before
  closing. Fieldline is built around that clock, and marks the two steps where deals actually slip."*).
  The `cutoff` that makes the design distinctive is that clock, not the trade.
* **Live preview:** https://preview.colorlib.com/theme/fieldline/ — HTTP 200, 70,376 B, page `<title>`
  **"Septic inspection and pumping around Wichita, turned around the same day | Fieldline Septic"** (read
  2026-10-25 with `curl -4`; this host resolves an IPv6 address that is blocked, so every fetch needs
  `-4`). Astro build with Tailwind 4 output.
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**fieldline-template.jpg** — HTTP 200,
  113,977 B, served as **AVIF** despite the `.jpg`, **2400×1892**, a macOS-Safari-window-framed capture of
  the licence strip, the header, the whole hero, the quote card and the top of the timeline band.
  ⚠️ `…/sites/2/fieldline.jpg` and `…/fieldline-septic.jpg` both **404** — the `-template` suffix is the
  file that exists.
* **New name:** `percline` (`apps/percline`, `@free-react-templates/percline`) — one lowercase word, built
  from the trade's own vocabulary (*percolation* + *line*), the way a septic contractor would name a
  company rather than describe a layout. Differs from the source slug; no `apps/percline`, no
  `openspec/specs/template-percline/`, no `docs/templates/percline/`, and `git grep -il percline
  origin/main` prints **nothing**. The three ColorLib URL forms (`wp/template/percline/`,
  `theme/percline/`, `theme/bootstrap/percline/`) all return **404** (probed 2026-10-25). Four near
  neighbours were rejected on the same checks and are recorded so the next auditor does not retry them:
  `percfield`, `sumpwell`, `leachline`, `daymark` — all free in the repo but rejected as weaker brand
  suggestions; **`fieldglass`** was rejected because it is one letter of reuse away from the source
  wordmark. Do not rename without re-running the four checks (folder, spec, `git grep`, ColorLib 404).
* **Deploy target:** https://percline.free.componentdock.com (`apps/percline/public/CNAME`, `homepage` in
  `apps/percline/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## Business (369)` (line 880 on `origin/main` `22a117b36`), the commercial-services
  section that already holds the sibling catalogue-gap preps (`airwise` → **Thermly**, `curbline` →
  **Plantroom**, `backstop` → **Flowcert**, `commons` → **Veranda**, `circles` → **Closeknit**,
  `coldsnap` → **Stoke**, `dowser` → **Aquifer**, `everhot` → **Kettle**, `fernhill` → **Smallpaw**,
  `cairn` → **Chalkline**).

### Why this design has no row (catalogue gap, measured 2026-10-24/25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, **2,862** `[x]` rows on `origin/main` `22a117b36` over
**1,647** distinct template names, every row resolving to an app and a spec — but the **catalogue is not
complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled and compared with the 1,631
slugs the checklist cites, and **256 designs are on the listing that the checklist never recorded**
(42 standalone + 214 snippet variants). The census, its commands and both buckets are recorded in
`docs/catalog-coverage.md`.

`fieldline` is one of the 42 standalone designs (its row in that page reads
`fieldline` — preview 200, 70376 B). **Ten** of the 42 were prepped before this run — five shipped
(`airwise` → **Thermly**, `backstop` → **Flowcert**, `commons` → **Veranda**, `curbline` → **Plantroom**,
`dowser` → **Aquifer**) and five pending (**Kettle**, **Smallpaw**, **Chalkline**, **Closeknit**,
**Stoke**) — and they established the hand-off pattern this spec follows. This is the **eleventh**. No spec
on main names `theme/fieldline` (`grep -rl 'theme/fieldline/' openspec/specs docs` → nothing), no app
named `fieldline` or `percline` exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this line
into `## Business` **in source-name alphabetical order** (the section is ordered by the ColorLib source
name; `Fieldline` sits between **Feliciano** and **Finances**), and bump the heading count:

```
- [x] **Fieldline** — [colorlib](https://colorlib.com/wp/template/fieldline/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/fieldline-template.jpg) · [percline](https://percline.free.componentdock.com)
```

⚠️ **Re-measure the count before you write it.** On `origin/main` `22a117b36` the section reads
`## Business (369)` over **369** rows — honest after Aquifer's bookkeeping commit (`42b3ffed8`, "README
status 1651/1651"). Adding Fieldline makes **370**. Count the rows; do not copy this number.

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/fieldline/` page (DOM authority) | 70,376 | `a1e4bddf90a1f41e452ba0d06a27fc530e2e8175260c356dde3ef0cc48e5e929` |
| `theme/fieldline/_astro/Base.v6AZTsRx.css` (token authority) | 56,139 | `4437aeaa67ec19be0dfaa7b84546ff1bdff906e9eeff11b3efab6789b66abd24` |
| `theme/fieldline/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (house kit) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/fieldline/_astro/ClientRouter…CYDbzu1r.js` (view-transition router) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| inline `<style>` (`@font-face` for **DM Sans** 400/500/700 + **JetBrains Mono** 500/700, 18 `woff2` files) | 5,408 | — |
| inline `<script>` 1: `applyTheme()` | 454 | — |
| inline `<script>` 2: JSON-LD `Plumber` (**corrupt** — see deviations) | 325 | — |
| inline `<script>` 3: preloader removal + `astro:before-swap` | 370 | — |
| `assets/img/field-panel.svg` (the only illustration, 800×600) | 2,234 | `66a231ea66cc8bf60db92a8f4f1297e70cfe5ba9244779c8f3f17aae92306323` |
| `assets/img/logo.svg` (150×32 rendered, `h-8 lg:h-9`) | 829 | `a6f231f6c0332b1a0d2b2876354ee49142303ec1ad98dc6948bfe5d027b5b029` |
| `assets/img/logo-light.svg` (footer, `h-10`) | 829 | `d7d0efcdc35bc42ecd0c3b11100eb4ce76b599c512a1c86375a4298c7a1d6e39` |
| `favicon.svg` | 419 | `cb0cb52eefd39b52ff3860f6bec60f82f5030c40efcf95916b8436be54b0dea7` |
| catalog screenshot `fieldline-template.jpg` | 113,977 | `44fdcdb426f95f1298f1805b630f71392e2524068c8a348b73c71f44b9b5fa99` (real **AVIF**, 2400×1892) |
| `colorlib.com/wp/template/fieldline/` (catalog entry) | 111,591 | `7dc68cc385cccaf8d5ba5ab903d71c045dde9e4b7e59e13da9fbca747d274154` |
| `css/style.css`, `js/snippet.js`, `downloads/free/fieldline.zip`, `og-image.jpg` | — | **HTTP 404** — Astro build, so the live preview is the sole DOM/CSS reference and the OG image the page advertises (`og:image=/og-image.jpg`) does not exist |

The preview is an **Astro build with Tailwind 4 output** (sheet header: `tailwindcss v4.3.3`): one
stylesheet, one kit script, one client router. **Both `_astro` scripts are byte-identical to the ones the
Aquifer (Dowser), Plantroom (Curbline), Veranda (Commons), Stoke (Coldsnap), Closeknit (Circles),
Kettle (Everhot) and Smallpaw (Fernhill) preps measured** — the same house kit renders every one of these
2026 designs, so the *behaviour* inventory transfers while the markup, palette and band order do not.
**Do not copy a sibling's tokens because the kit hash matches**: Fieldline is **green on warm stone in DM
Sans**, not Dowser's cyan on blue-grey in Space Grotesk, not Everhot's burnt orange in Manrope and not
Fernhill's plum in Plus Jakarta Sans.

The catalog entry's `meta description` agrees with the live page's positioning but its prose is different.
The **live preview is the authority**; where the two disagree, the DOM wins.

## Design tokens (measured from `_astro/Base.v6AZTsRx.css`, 56,139 B, and the live render at 1440 px)

### Brand ramp — `primary` (a grass / septic-trade green, not a Tailwind stock ramp)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#f1f7ee` | `hover:bg-primary-50` on the closing band's solid CTA |
| `primary-100` | `#deedd6` | **the two pill eyebrows** (`bg-primary-100`, testimonials + FAQ), the closing band's lede (`text-primary-100`), the timeline's "Where deals slip" callout text, the field-panel labels |
| `primary-200` | `#bedcaf` | in the sheet (`border-primary-200`, `text-primary-200`); unused on this page |
| `primary-300` | `#95c47f` | **every timeline day label** (`font-mono text-primary-300`), the dark-band eyebrow, `dark:` accents — and one line of the field panel |
| `primary-400` | `#6ea857` | **the five testimonial stars**, the field panel's d-box + drain-field pipes, the timeline callout ring (`border-primary-400/40`) and ground (`bg-primary-400/10`), `dark:` accents |
| `primary-500` | `#548d3d` | input focus border + ring (`focus:border-primary-500`, `ring-primary-500/20`), buttons' focus ring, newsletter focus |
| `primary-600` | `#41712f` | **brand** — every solid button, the `h1` span, the checklist ticks, the `border-l` rules in the why-us list, the emergency band ground, the back-to-top disc, the sticky call pill, the progress bar, the avatar initials text |
| `primary-700` | `#365a28` | **every eyebrow on a light ground**, the six price lines, `.btn-primary:hover`, the **closing band ground**, the emergency pill's label |
| `primary-800` | `#2e4a24` | **dark mode only** (`dark:border-primary-800`) — do not use it on a light ground |
| `primary-900` | `#283e21` | **dark mode only** (`dark:bg-primary-900`, `/30`, `/40`, `/50`) — the pill eyebrows' dark ground |

### Neutral ramp — `ink` (warm stone; this is what keeps the green from reading "municipal website")

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f7f6f4` | **hero ground** (measured `rgb(247,246,244)`), `#why-us` ground |
| `ink-100` | `#edebe6` | every card/header border, **the services grid's gutter fill** (`bg-ink-100`), the areas row rules |
| `ink-200` | `#dcd8cf` | **input borders**, the header pills' borders, the sticky bar's border |
| `ink-300` | `#b9b2a4` | only `placeholder:text-ink-300` on the three quote fields and the newsletter field |
| `ink-400` | `#8d8574` | `figcaption`, the services footnote, the quote card's footnote, the wordmark's sub-label |
| `ink-500` | `#6b6454` | **body copy on light grounds** (measured `rgb(107,100,84)`), card blurbs, the areas footnote |
| `ink-600` | `#514c3f` | header nav links (measured), the hero rating line |
| `ink-700` | `#3d3931` | the hero checklist text, the areas town labels, form labels |
| `ink-800` | `#282520` | **`h1`/`h2`/`h3` on light grounds** (measured `rgb(40,37,32)`), **the licence strip's ground** |
| `ink-900` | `#191713` | **the timeline band's ground** (measured `rgb(25,23,19)`), the field panel's outer rect |

### Chrome grey, status colours, grounds

| token | value | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | **`#testimonials` ground** |
| `gray-100` | `#f3f4f6` | FAQ icon discs (`bg-gray-100`) |
| `gray-200` | `#e5e7eb` | FAQ `divide-y` rule, cookie strip border, preloader ring |
| `gray-300` | `#d1d5db` | cookie `Decline` border, inactive carousel dots |
| `gray-400` | `#9ca3af` | footer body copy, footer link default, social glyphs |
| `gray-500` | `#6b7280` | footer legal text, FAQ icon glyph, newsletter placeholder |
| `gray-600` | `#4b5563` | testimonial town lines, cookie copy, carousel arrows |
| `gray-700` | `#374151` | footer input border, footer social tile hover |
| `gray-800` | `#1f2937` | footer social tiles + footer input ground, footer bottom-bar rule |
| `gray-900` | `#111827` | **footer ground** (measured `rgb(17,24,39)`), `body` colour, testimonial/FAQ headings |
| `gray-950` | `#030712` | `dark:` ground for the hero, services, FAQ and the mobile menu |
| `amber-400` | `oklch(82.8% .189 84.429)` = `#fbbf24` | the licence strip's star **and** the hero's five stars |
| white | `#fff` | quote card, hero/timeline/services/areas/faq grounds, the closing band's solid CTA |

**Note the mixed house kit vs page palette:** the footer, the testimonial ground and the FAQ rules use
stock Tailwind `gray`, while the hero, the timeline band, every card border and the areas rules use `ink`.
That split is in the reference — keep both ramps, do not "normalise" one into the other. The **stars
deliberately match here** (both `amber-400`), unlike the Everhot sibling where they differ.

### Typography

Two faces, both delivered from the preview's own `/cf-fonts/v/…` cache inside the 5,408-byte inline
`<style>` (which is why grepping the sheet for `@font-face` finds nothing):

* **DM Sans** — the whole page. `body` sets `font-family: DM Sans, system-ui, sans-serif` (measured).
  Weights present: **400, 500, 700** only.
* **JetBrains Mono** — reserved for day labels and machine-ish bits: the timeline's `Day 0` / `Day 1 to 3`
  labels, the `01`–`07` step index, the wordmark's letterspaced `SEPTIC` sub-label. Weights **500, 700**.

| role | measured | notes |
| --- | --- | --- |
| `h1` | `text-4xl` 36 → `sm:text-5xl` 48 → `lg:text-6xl` **60 px** (measured at 1440), `font-bold`, `leading-[1.1]` (**66 px**), `tracking-tight` (**−1.5 px**), `text-ink-800` | two sentences; the second (`The clock has already started.`) is a `<span class="text-primary-600">` — **not** a gradient, **not** a highlight box, and it wraps onto its own two lines |
| `h2` | 30 px `text-3xl` → `sm:text-4xl` **36 px / 40 px / −0.9 px** (measured), `font-bold`, `tracking-tight` | every band heading; the quote card's heading is `text-xl lg:text-2xl` (**24 px at 1440**, 20 px at 390) |
| `h3` | 18 px `text-lg font-bold`, `text-ink-800` | six services; the timeline's step names are 16 px `font-bold text-white` with a mono index; footer column heads are 14 px `uppercase tracking-wider` |
| lede | 18 px `text-lg` / 28 px line, `text-ink-500` on light grounds, `text-gray-600` in testimonials/FAQ, `text-white/70` on the timeline band, `text-primary-100` on the closing band | — |
| eyebrow | 14 px `text-sm font-bold uppercase tracking-wide` (**0.35 px measured**), `text-primary-700` (#365a28) on light, `text-primary-300` (#95c47f) on the timeline band | hero, timeline, services, why-us; the testimonial/FAQ eyebrows are **pills** instead (`rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`) |
| mono day label | **JetBrains Mono** 14 px / 700, `text-primary-300`; the actor line under it is 12 px `font-semibold uppercase tracking-wide text-white/40` | the seven timeline rows (the only mono on the page apart from the wordmark) |
| step index | **JetBrains Mono** 14 px `text-white/30`, `mr-2` before the step name | `01`…`07` |
| body | 16 px / 24 px, `text-gray-900` (`body` colour measured `rgb(17,24,39)`) | card copy uses `ink-500`, timeline copy `text-white/65` |

Load them with two `<link>`s in `index.html` (both `css2` URLs return 200):

```
https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap
```

### Buttons, radii, shadows

| token | value | where |
| --- | --- | --- |
| `.btn` (kit) | `inline-flex`, centre, `gap:8px`, `border-radius:.5rem` (8 px), `padding:10px 20px`, `font-size:14px`, `font-weight:500`, `transition:all` | the timeline's closing `Book the inspection` |
| `.btn-primary` | `background:#41712f`, white, `shadow-lg` tinted `#41712f40`; hover `#365a28` + `shadow-xl` (`#41712f4d`); focus ring `#548d3d` offset 2 | ditto |
| header CTA | `rounded-lg px-5 py-2.5` (20/10 px), 14 px `font-bold`, `bg-primary-600`, hover `primary-700`; `hidden xl:inline-flex` | `Book an inspection` |
| quote card CTA | `w-full rounded-lg px-6 py-3.5` (24/14 px), 16 px `font-bold`, `bg-primary-600`, hover `primary-700`, `focus:ring-2 focus:ring-primary-500 ring-offset-2` | `Book the inspection` |
| emergency pill | `rounded-full px-6 py-3` (24/12 px), 18 px `font-bold`, **white ground, `text-primary-700`**, hover `primary-50`; leading phone glyph 20 px | `(555) 110-1100` |
| closing CTA pair | `rounded-lg px-8 py-4` (32/16 px), 16 px `font-bold`; solid **white with `text-primary-700`**, ghost `border-2 border-white/40` + `hover:bg-white/10` | `Book an inspection` / `Call (555) 110-1100` |
| footer subscribe | `rounded-lg px-4 py-2.5`, 16 px `font-medium`, `bg-primary-600` | `Subscribe` |
| header pills | `rounded-full`, `1px #dcd8cf` border, 14 px; phone pill `font-semibold`, location pill `font-medium` with a 16 px pin | `Wichita, KS` (`2xl`), `(555) 110-1100` (`md`+) |
| mobile-menu CTA | `mt-3 block w-full rounded-lg px-5 py-3 text-sm font-bold` | same label |
| radii | `lg` .5 rem (8) · `xl` .75 rem (12) · `2xl` 1 rem (16) · `full` | `lg` = buttons/inputs/callouts, `2xl` = the quote card, the services grid, the field panel, testimonial cards, `full` = every pill, dot, the 32 px FAQ disc, the 48 px back-to-top |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | testimonial cards |
| `shadow-md` | stock Tailwind (`0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a`) | **the hero quote card** (measured on the card) |
| card hover | `0 12px 32px -8px #00000024` (`.card:hover` in the sheet) | the kit's `.card` only — not used by this page's markup |
| `.section` | `padding-block: calc(var(--spacing) * 20)` = **80 px**, overridden at `@media (width>=64rem)` to `* 28` = **112 px** (measured 112 px at 1440) | `#timeline`, `#services`, `#why-us`, `#areas`; `#testimonials`, `#faq`, `#contact` use `py-20 lg:py-28` instead (same 80/112) |
| keyframes present | `ping`, `spin` | only **`ping`** (the emergency dot) and **`spin`** (the preloader ring) are reachable from this DOM; there is **no** float, blob, typewriter or counter on this page |

### Rhythm and containers

* Hero: `py-14` (56 px) → `lg:py-20` (**80 px**), `bg-ink-50`, no border; measured **805 px** tall at 1440.
* Licence strip: `h-9` — **measured 37 px including the 1 px border**, `bg-ink-800`, `text-ink-100`,
  `text-xs`.
* Header: `h-16` (64) → `lg:h-20` (80) — measured **81 / 65 px including the border**; sticky,
  `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100`.
* Emergency band: `bg-primary-600`, container `py-6 lg:py-8` (24/32 px) — a thin band, **not** a
  `.section`; measured **164 px** at 1440.
* Containers: `container mx-auto px-4 lg:px-8` everywhere; `max-width` measured **1280 px**, i.e.
  **1,216 px** of content at 1440. Hero splits `lg:grid-cols-12` with **7 / 5** (`gap-16` = 64 px); the
  quote card measures **469×509** (32 px padding) at 1440 and **358×525** (24 px padding) at 390.
* Timeline rows: `<ol>` of `<li class="grid gap-3 border-l-2 border-white/15 pb-8 pl-6 last:pb-0
  sm:grid-cols-12 sm:gap-6">` — the day block is `sm:col-span-3`, the content `sm:col-span-9`; a callout
  inside is `rounded-lg border border-primary-400/40 bg-primary-400/10 px-4 py-3 text-sm text-primary-100`.
* Services grid: `grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100
  sm:grid-cols-2 lg:grid-cols-3`; cells `flex flex-col bg-white p-6 lg:p-8` (3 × 404 px, 232 px tall at
  1440 as in the sibling).
* Section heights at 1440 (measured, useful for eyeballing a build): licence 37, header 81, hero 805,
  `#timeline` 1,334, `#emergency` 164, `#services` 915, `#why-us` 840, `#areas` 468, `#testimonials` 796,
  `#faq` 820, `#contact` 452, footer 592. Document height **7,304 px** at 1440 and **11,469 px** at 390.

## Reference document order (three chrome pieces before the header, nine bands, three after the footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white (`dark:gray-950`) | fixed `z-[100]`, 40 px `animate-spin` ring `border-4 border-gray-200 border-t-primary-600`; removed 300 ms after `load` |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio |
| — | `[data-licence-bar]` | **`bg-ink-800` `#282520`, `text-ink-100`**, `h-9`, `text-xs` | left: `Licence` / **`KDHE #00000`**, `Certified septic inspector` (**sm**+), `Serving` / **`Sedgwick County`** (**sm**+) — the two middles are `hidden sm:flex`; right: an `amber-400` star + **`4.9`** + `240+ reviews on Google (sample)` |
| — | `header[data-header]` | `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100` | sticky `z-50`, 64/80 px: logo (150×32, `h-8 lg:h-9`) · **six** nav links from **`xl`** (`Selling a house`, `Services`, `How septic works`, `Service areas`, `About`, `Contact`, `gap-7`) · location pill (`Wichita, KS`, `2xl` only) · phone pill (`(555) 110-1100`, `md`+) · dark toggle · solid `Book an inspection` (`xl`+) · hamburger (`xl:hidden`) |
| — | `[data-mobile-menu]` | white (`dark:gray-950`), `border-t` | `hidden xl:hidden` panel: the six links as `block py-3` rows, then phone + location pills and a full-width CTA |
| 1 | (hero, no id) | **`bg-ink-50` `#f7f6f4`** | `lg:grid-cols-12`, left `col-span-7 lg:pt-6` — eyebrow `Wichita · KDHE licensed`, `h1`, 18 px lede, **five `amber-400` stars** + `4.9` + `240+ reviews on Google · sample data`, then a **2×2 checklist** (`sm:grid-cols-2`, `primary-600` ticks at 16 px): `Inspection report the same day, not in a week`, `Failures quoted before you leave the closing table`, `Same-day pumping when it is backing up indoors`, `We will tell you when it is the line, not the tank`; right `col-span-5` — the **quote card** (`#quote`, `rounded-2xl border-ink-100 bg-white p-6 lg:p-8 shadow-md`) with `h2 Book an inspection`, `Three fields. We reply within the hour on weekdays.`, a 3-field form and a full-width `Book the inspection` button plus `No obligation. The report is yours whether or not we do any repair.` **No image in the hero.** |
| 2 | `#timeline` | **`bg-ink-900` `#191713`, `text-white`** | eyebrow `Selling` (`primary-300`), `h2 Ten days, and two places it goes wrong`, `text-lg text-white/70` lede; `<ol class="mt-12 space-y-0">` of **seven** `<li>` (see the table below), then a footnote row (`text-sm text-white/40`, `max-w-3xl`) and a `.btn .btn-primary` `Book the inspection` pushed right at `sm` |
| 3 | `#emergency` | **`bg-primary-600` `#41712f`, `text-white`** | a thin band (`py-6 lg:py-8`): a **pinging dot** + uppercase eyebrow `Backing up into the house?`, `Same-day pumping when sewage is backing up indoors.` at 18/20 px bold, a `text-sm opacity-90` paragraph, and one white **pill** `(555) 110-1100` with a phone glyph, right-aligned from `lg` |
| — | `[data-sticky-call]` | white (`dark:gray-900`), `border-t border-ink-200`, `p-3` | **`lg:hidden`** fixed bottom bar, `z-40`, **73 px tall measured at 390**: a full-width **green pill** `data-phone` link `Backing up into the house? · (555) 110-1100` with a phone glyph |
| 4 | `#services` | white (`dark:gray-950`) | eyebrow `What we do`, `h2 Pumping, inspecting, and the repairs in between`, lede; a **6-cell hairline grid** (`sm:grid-cols-2 lg:grid-cols-3`, cells `flex flex-col bg-white p-6 lg:p-8`): `Real estate inspection` / `Routine pumping` / `Drain field diagnosis` / `Drain field repair and replacement` / `Baffles, lids and risers` / `Emergency pumping`, each with a `flex-1` blurb and a `text-sm font-bold text-primary-700` price line (`From $425`, `From $375`, `From $295`, `Quoted after evaluation`, `From $240`, `From $495`); footnote `Starting prices are sample data for demonstration. Replace with your own before launch.` |
| 5 | `#why-us` | **`bg-ink-50` `#f7f6f4`** | `lg:grid-cols-2` (`gap-12 lg:gap-16`, `items-center`), figure **first on `lg`** (`order-last lg:order-first`): `field-panel.svg` in `rounded-2xl` + a `text-sm text-ink-400` `figcaption` (`Replace with a photograph of your own crew and truck before launch.`); right: eyebrow `How it works`, `h2 Three things that explain most failures`, lede, then a `<dl class="mt-8 space-y-6">` of **four** `border-l-2 border-primary-600 pl-5` rows (`dt` = `The tank separates, the field disposes` / `Pumping is maintenance, not a cure` / `Water use kills fields` / `Roots and lids`; `dd` = `mt-1 text-ink-500`) |
| 6 | `#areas` | white | `lg:grid-cols-12` (`gap-10 lg:gap-16`): left `col-span-5` `h2 Where we work` + lede; right `col-span-7` a `grid-cols-2 sm:grid-cols-3` list of **12 towns** as `border-b border-ink-100 py-2.5` rows: Wichita, Derby, Andover, Goddard, Maize, Valley Center, Haysville, Mulvane, Rose Hill, Bel Aire, Cheney, Augusta + a replace-me footnote |
| 7 | `#testimonials` | **`bg-gray-50`**, `py-20 lg:py-28` | centred pill eyebrow `Reviews`, `h2 What people say afterwards`, sample-data lede; **3-slide carousel** (`[data-carousel]`): `rounded-2xl bg-white p-8 shadow-soft` cards with five **`primary-400`** stars, an 18 px `font-medium` quote, a 48 px `bg-primary-100 text-primary-600` initial disc + name + town; round arrows and a `[data-carousel-dots]` div the kit fills |
| 8 | `#faq` | white, `py-20 lg:py-28` | pill eyebrow `Questions`, `h2 Before you book`, lede; `divide-y divide-gray-200` list of **five** rows inside `max-w-3xl`: full-width `button` + `py-6` + 18 px semibold question + a 32 px `rounded-full bg-gray-100 text-gray-600` plus-icon disc that rotates 45° when open, and a `max-height:0` panel |
| 9 | `#contact` | **`bg-primary-700` `#365a28`**, `py-20 lg:py-28` (112 px) | centred white `h2 Under contract, and the septic has not been looked at?` (36 px), `text-primary-100` lede (`Book it now rather than on day eight. The report lands the same day.`), then a **white** solid `Book an inspection` + a `border-2 border-white/40` ghost `Call (555) 110-1100` with a phone glyph. Flat brand band — no gradient, no blobs |
| — | `footer` | **`bg-gray-900` `#111827`**, `text-gray-300`, `pt-16 lg:pt-24` (96 px measured) | 12-col grid: brand block `col-span-4` (`logo-light.svg` 40 px, blurb, **three** `rounded-lg bg-gray-800 p-2.5` 40 px social tiles — Twitter / Instagram / LinkedIn, address `4120 South Hydraulic Avenue, Wichita, KS 67216`, phone, `office@fieldlineseptic.example`) · a nested `sm:grid-cols-3 lg:col-span-5` block with `Services` (Inspections, Routine pumping, Drain field repair, Emergency pumping), `Company` (Selling a house, How septic works, Service areas, About) and `Support` (Contact, Privacy, Terms) · `Stay Updated` `col-span-3` with an email field + `Subscribe`; bottom bar `mt-16 border-t border-gray-800 py-8`: `© 2026 Fieldline Septic. All rights reserved.` + `Privacy Policy` / `Terms of Service` |
| — | `#cookie-consent` | white (`dark:gray-900`), `border-t`, `shadow-lg` | fixed bottom `role="dialog"` `aria-label="Cookie consent"`, slides up after 1.5 s, `Decline` (outline) + `Accept All` (primary) |
| — | `#back-to-top` | `primary-600` + `shadow-primary-600/25` | 48 px disc, `bottom-6 right-6`, appears past 300 px |

**On mobile the bottom edge carries two fixed layers**: the `lg:hidden` call bar (`z-40`) and the cookie
strip (`z-50`). The cookie strip is painted over the call bar until it is dismissed — copy that order.

### The seven timeline rows (the page's spine — reproduce in this order)

| # | day label | actor | step | callout |
| --- | --- | --- | --- | --- |
| 1 | `Day 0` | `You and your agent` | `01 Contract accepted, contingency begins` | **Yes** — *Where deals slip.* Booking the septic inspection in the second week leaves no time to fix anything. Book it in the first three days even if the general inspector has not been yet. |
| 2 | `Day 1 to 3` | `Us` | `02 Inspection and pump-out` | — |
| 3 | `Same day` | `Us` | `03 Report issued` | — |
| 4 | `Day 3 to 5` | `You` | `04 If it passed, you are done` | — |
| 5 | `Day 3 to 5` | `Us` | `05 If it failed, a quote the same week` | **Yes** — *Where deals slip.* A failed inspection with no quote attached turns into the buyer's own worst estimate, which is always higher than the real one. Get the number before the negotiation, not after. |
| 6 | `Day 5 to 10` | `You and the buyer` | `06 Negotiate with a real figure` | — |
| 7 | `After closing` | `Us` | `07 The work, if it is being done` | — |

Step bodies (paraphrase freely, keep the *kind*): 1 *"The septic inspection is usually part of the general
inspection contingency. It is also the item most often booked last, because everybody is thinking about
the roof."* · 2 *"The tank is pumped so the baffles and the tank walls can actually be seen, the field is
checked for surfacing and the distribution box is opened. Dye testing where the history is unclear."* ·
3 *"Written, with photographs, in the format your county accepts. The same day, because a report that
arrives on day eight is a report that arrives too late to act on."* · 4 *"The report goes to the buyer's
agent and to the county if a transfer inspection is required. Nothing else happens."* · 5 *"Repair or
replacement, priced, with the county permit requirements stated. A number that a negotiation can actually
use."* · 6 *"Price reduction, escrow holdback or repair before closing. All three are workable. Guesswork
is not."* · 7 *"Drain field repairs and replacements are permitted work and take longer than a pump-out.
We will tell you honestly whether it fits before closing or needs an escrow."*

⚠️ **The two callouts are the design.** They are the only `primary-400/10` grounds on the page and they
carry the argument; do not reduce them to plain paragraphs.

## Behaviour the recreation must reproduce

All handlers live in the **house kit** (`Base…BLoalVWc.js`, 16,233 B, the same hash as the Aquifer,
Plantroom, Veranda, Stoke, Closeknit, Kettle and Smallpaw reads); only `applyTheme`, the preloader removal
and the JSON-LD block are page-local. **This page has no page-local tool** — unlike its Everhot sibling
there is no calculator, counter or countdown in the markup, and none may be invented. The page wires
**14 `data-animate` elements** and the hooks in §Data-attribute inventory; it uses *none* of the kit's
typewriter, counter, parallax, video, lightbox, billing or blog-filter branches.

1. **Reveal on scroll** (`[data-animate]`, 14 elements, 12 delays 100–300 ms) — `fade-in-up`, skipped
   entirely under `prefers-reduced-motion: reduce`; elements start at `opacity:0`, `translateY(20px)`,
   `.6s ease-out`, revealed once at `threshold .1` / `rootMargin 0 0 -10%`. **There is no
   `[data-animate]` rule in the sheet**, so a DOM read alone shows the content plainly — the start state is
   applied by the kit at runtime. Do not conclude the design has no reveal.
2. **Header shadow** past `scrollY > 50`; mobile disclosure with `aria-expanded` + glyph swap
   (hamburger ↔ close) and `hidden` on the panel.
3. **Scroll spy** — **all six** `[data-nav-link]` values are route paths (`/selling`, `/services`,
   `/how-septic-works`, `/service-areas`, `/about`, `/contact`), so on this page the spy has **zero** live
   band ids (its Everhot sibling had one). The recreation maps every label onto a band (Requirement 15) and
   runs the spy against those ids.
4. **Carousel** (`[data-carousel]`) — per-view **3 ≥1024 px, 2 ≥640 px, 1 below**; each slide's width is
   `track.parentElement.offsetWidth / perView`; advances every **5 s**, wrapping; paused on `mouseenter`,
   resumed on `mouseleave`; dots are `h-2.5 w-8 bg-primary-600` when active and `w-2.5 bg-gray-300`
   otherwise, one per page; **the arrows are shown only while there is somewhere to scroll**
   (`display:none` at either end — this page's arrows are not `hidden lg:flex` like Everhot's).
5. **FAQ** (`[data-faq-toggle]` + `[data-faq-icon]`) — **exclusive**: opening one sets every other panel
   to `max-height:0`/`opacity:0` and every other icon back to `rotate(0)`; the open row gets
   `max-height: scrollHeight` + `opacity:1` and `rotate(45deg)` on its disc.
6. **Cookie strip** (`[data-cookie-accept]` / `[data-cookie-decline]`) — slides up 1.5 s after load,
   slides down and removes itself on either choice; the kit stores `cookie-consent` in `localStorage`
   (dropped in the recreation, Deviation 3).
7. **Back-to-top** — `scrollY > 300` sets `opacity:1; pointer-events:auto; translateY(0)`, otherwise
   `opacity:0; pointer-events:none; translateY(16px)` (both inline in the reference's markup); click
   smooth-scrolls to `top:0`.
8. **Scroll progress** — `width = scrollY / (scrollHeight - innerHeight) × 100` %, passive listener.
9. **Dark toggle** (`[data-dark-toggle]`) — toggles `.dark` on `documentElement` + `localStorage.theme`;
   boots from `applyTheme()`. Dropped in the recreation (Deviation 2); every measured dark value is
   recorded in the token tables so the decision is reversible.
10. **Emergency ping** — the `#emergency` dot is two stacked spans, the outer `animate-ping`
    (`opacity-60`) behind a static 8 px dot; it is the only looping animation on the page besides the
    preloader and it must stop under `prefers-reduced-motion`.
11. **Chrome**: preloader removed 300 ms after `load`; smooth in-page scrolling with a header offset for
    `a[href^="#"]`.
12. **Forms — the reference's quote and newsletter forms are inert.** The quote form is
    `<form action="#" method="post" data-form>` and the footer newsletter is `<form data-newsletter-form>`;
    the kit only binds `form[data-validate]`, which **neither** uses (`grep -c 'data-validate'` = 0 on the
    page), so a submit navigates to `/#` with no validation. The recreation must wire both forms itself
    (Requirement 5): required + phone/email checks on submit and on blur, inline error text, a reset on
    success, and the kit's own toast (`bg-green-600` / `bg-red-600`, `top-6 right-6`,
    `translateX(120%)` → 0, auto-dismissed after 4 s) — no network call, no navigation.

### Data-attribute inventory (measured on the live page)

| hook | count | what it drives |
| --- | ---: | --- |
| `data-animate` (12 with `data-delay`) | 14 | reveal |
| `data-nav-link` | 6 | scroll-spy (**zero** live band ids — all six are route paths) |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | exclusive accordion |
| `data-phone` | 5 | `tel:` links (header pill, mobile panel, emergency pill, sticky bar, closing band) |
| `data-carousel` / `-track` / `-slide` / `-prev` / `-next` / `-dots` | 1 / 1 / 3 / 1 / 1 / 1 | testimonials |
| `data-header`, `data-mobile-toggle`, `data-mobile-menu`, `data-dark-toggle` | 1 each | sticky chrome |
| `data-licence-bar`, `data-emergency`, `data-sticky-call`, `data-form`, `data-newsletter-form`, `data-cookie-accept`, `data-cookie-decline` | 1 each | the page-specific pieces |

`data-counter`, `data-typewriter`, `data-parallax`, `data-video-modal`, `data-lightbox`,
`data-billing-toggle`, `data-blog-*`, `data-accordion-toggle`, `data-validate` are **absent** even though
the shared kit supports them.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **44 anchors** over **15 distinct `href` values** (counted in the DOM, not
eyeballed; the extra `href` attributes in the source belong to `<link>` elements — stylesheet, favicon,
`dns-prefetch`):

| count | href | kind |
| ---: | --- | --- |
| 7 | `/theme/fieldline/contact` | live route → `200` (34,664 B) — both header CTAs, the mobile-panel CTA, the timeline button, the quote submit's surrounding band, the closing CTA, the footer `Contact` |
| 6 | `/theme/fieldline/services` | live route → `200` (42,820 B) — header, mobile menu, footer service links |
| 5 | `tel:5551101100` | valid — the header pill, the mobile panel, the emergency pill, the sticky bar, the closing band |
| 3 | `/theme/fieldline/selling` | live route → `200` (40,731 B) |
| 3 | `/theme/fieldline/how-septic-works` | live route → `200` (40,262 B) |
| 3 | `/theme/fieldline/service-areas` | live route → `200` (33,591 B) |
| 3 | `/theme/fieldline/about` | live route → `200` (36,051 B) |
| 3 | `#` | **dead** — the three footer social tiles (Twitter / Instagram / LinkedIn) |
| 2 | `/theme/fieldline/` | the wordmark (header + footer), a no-op self-link |
| 2 | `#service-areas` | **broken fragment** — the band id is `areas`, and `grep -c 'id="service-areas"'` = **0** (header location pill + its mobile twin) |
| 2 | `/theme/fieldline/privacy` | live route → `200` (36,645 B) |
| 2 | `/theme/fieldline/terms` | live route → `200` (35,429 B) |
| 1 | `#main-content` | skip link → exists |
| 1 | `tel:(555) 110-1100` | **malformed** `tel:` (spaces, parentheses) — the footer's copy |
| 1 | `mailto:office@fieldlineseptic.example` | `.example` placeholder mailbox |

**Inner-page inventory (all live; the bare path `200`s on this build, unlike the Everhot sibling which
`308`ed):**

| page | bytes | `<title>` | `<h1>` |
| --- | ---: | --- | --- |
| `services/` | 42,820 | Septic services around Wichita \| Fieldline Septic | Pumping is the cheap part |
| `selling/` | 40,731 | Septic inspections for a house sale \| Fieldline Septic | A failed septic does not kill a sale. A late one might. |
| `how-septic-works/` | 40,262 | How a septic system actually works \| Fieldline Septic | Two parts, and only one of them is expensive |
| `service-areas/` | 33,591 | Septic service areas around Wichita \| Fieldline Septic | Sedgwick County and out into the townships |
| `about/` | 36,051 | About Fieldline Septic \| Fieldline Septic | About Fieldline Septic |
| `contact/` | 34,664 | Contact Fieldline Septic \| Fieldline Septic | Contact Fieldline Septic |
| `privacy/` | 36,645 | Privacy Policy \| Fieldline Septic | Privacy Policy |
| `terms/` | 35,429 | Terms of Service \| Fieldline Septic | Terms of Service |
| `elements/` | 9 | — | **404** (no style-guide page) |

The multi-page shell is the authoritative reference for the copy the single-page recreation folds in:
`/selling` carries the timeline's argument, `/how-septic-works` carries the diagram's headline (*Two parts,
and only one of them is expensive*), `/services` carries *Pumping is the cheap part*. **The recreation does
not rebuild those pages.**

## Class census (no phantom-class delta)

The page uses **346 distinct class tokens** (418 `class` attributes) and **every one compiles** to a rule
in `Base.v6AZTsRx.css`. One token looks missing to a naive `.token{` grep — `2xl:block`, which Tailwind
escapes as `.\32 xl\:block` (a leading-digit escape) — and it is present. There is therefore **no
phantom-class delta** to floor into this spec.

⚠️ Three traps when re-running this census:

1. Variants are escaped in the sheet (`sm\:grid-cols-3`, `bg-white\/90`, `peer-checked\:bg-primary-400`).
2. `dark:` utilities compile as `:is(.dark *)` suffixes, so a `.token{` search misses them entirely.
3. Breakpoints ship as `@media (width>=40rem)` (not `min-width:`): 40rem `sm`, 48rem `md`, 64rem `lg`,
   80rem **`xl`** (where the nav appears), 96rem `2xl` (where the location pill appears).

## Screenshot analysis (2400×1892 AVIF, macOS-Safari window frame)

The capture is a light-mode desktop view framed in Safari chrome (traffic lights, empty address bar), so
the top ~90 px and the outer ~60 px are browser, not design. Inside it, top to bottom:

* the **near-black licence strip**: `Licence KDHE #00000` · `Certified septic inspector` ·
  `Serving Sedgwick County`, and on the right an amber star with `4.9` and
  `240+ reviews on Google (sample)`;
* the **white header**: a small dark rounded-square mark with three short green strokes beside the
  `Fieldline` wordmark and its letterspaced mono `SEPTIC` sub-label, the six nav labels, a `Wichita, KS`
  pill with a pin glyph, a `(555) 110-1100` phone pill, a moon toggle, and the solid green
  `Book an inspection`;
* the **pale warm-stone hero** (`#f7f6f4`, not white): the letterspaced green eyebrow
  `WICHITA · KDHE LICENSED`, a **60 px near-black headline** whose first sentence is
  `Selling a house with a septic system?` and whose next is **`The clock has already started.`** in solid
  brand green, wrapping onto its own two lines; the three-line grey lede; five amber stars + `4.9` +
  `240+ reviews on Google · sample data`; then a **2×2 checklist with green ticks**;
* the **white quote card** on the right, floating on the stone ground: `Book an inspection`, the
  `Three fields. We reply within the hour on weekdays.` line, three labelled fields in a single column
  (`Your name`, `Phone`, `What do you need?` with `Choose the closest match`) and a full-width green
  button reading **`Book the inspection`**, plus the tiny `No obligation…` footnote;
* the **near-black timeline band**: the `SELLING` eyebrow in pale green, the white 36 px
  `Ten days, and two places it goes wrong` heading, the grey lede, then the first three rows — `DAY 0` /
  `YOU AND YOUR AGENT` in mono, the `01` index in dim mono, the white step name, the grey body, and the
  **green-tinted `Where deals slip.` callout** with its `primary-400/40` border.

Everything below the third timeline row — the rest of the band, the emergency band, the six services, the
field panel, the towns, the carousel, the FAQ, the closing band and the footer — is **not in the
screenshot**: read those from the DOM and the sheet (which is what §Reference document order and the design
notes do). The screenshot is authoritative for three things: the licence-strip composition, the hero's
vertical rhythm (eyebrow → headline → lede → rating → checklist), and the fact that the design is
**light, green-on-stone, with no photography**.

## Requirements

### Requirement 1: Page chrome (skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar at the very
top of the document, a 48 px back-to-top disc that appears past 300 px, and a cookie strip that slides up
1.5 s after load and dismisses into component state. It SHALL NOT leave any overlay in front of the
content once the document is ready.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the document reaches `readyState === "complete"`
- **THEN** no white spinner overlay is painted at all, because the recreation never mounts one
- **AND** the page is fully readable with JavaScript disabled

#### Scenario: Visitor scrolls a long way

- **GIVEN** the document is 7,000 px or taller
- **WHEN** the visitor scrolls past 300 px
- **THEN** the progress bar's width equals `scrollY / (scrollHeight − innerHeight)`
- **AND** the back-to-top disc fades in and is clickable, returning the page to `top: 0`

#### Scenario: Cookie strip dismissal

- **GIVEN** the cookie strip is up
- **WHEN** the visitor presses `Accept All` or `Decline`
- **THEN** the strip slides out and unmounts
- **AND** no value is written to `localStorage` (Deviation 3)

### Requirement 2: Licence strip

The app SHALL render a 37 px `#282520` strip above the header carrying the licence number, the
certification and the served county on the left, and the rating on the right, with the two middle facts
hidden below `sm`.

#### Scenario: Desktop licence strip

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the strip reads `Licence` · `KDHE #00000` · `Certified septic inspector` · `Serving` ·
  `Sedgwick County` on the left in 12 px `#edebe6`
- **AND** an `amber-400` star, `4.9` and `240+ reviews on Google (sample)` sit right-aligned

#### Scenario: Mobile licence strip

- **GIVEN** a 390 px viewport
- **WHEN** the page renders
- **THEN** `Certified septic inspector` and `Serving Sedgwick County` are not rendered
- **AND** the licence number and the rating still fit on one line without overflow

### Requirement 3: Header and mobile disclosure

The app SHALL render a sticky header that is 64 px below `lg` and 80 px at `lg`+, white at 90 % opacity
with a backdrop blur, and a disclosure that replaces the navigation below `xl`.

#### Scenario: Navigation appears at xl, not lg

- **GIVEN** a 1,200 px viewport
- **WHEN** the header renders
- **THEN** the six nav links are **not** visible and the hamburger is
- **AND** at 1,280 px the six links, the phone pill, the toggle and the CTA are all visible with no
  overlap

#### Scenario: Disclosure toggling

- **GIVEN** the mobile menu is closed
- **WHEN** the visitor presses the hamburger
- **THEN** the panel shows the six links as full-width rows plus a phone pill, a location pill and a
  full-width CTA
- **AND** the trigger reports `aria-expanded="true"` and its glyph becomes a close icon
- **AND** pressing it again restores the closed state

#### Scenario: Header gains a shadow

- **GIVEN** the page is at `scrollY = 0`
- **WHEN** the visitor scrolls past 50 px
- **THEN** the header gains the `shadow-lg` treatment
- **AND** it is removed again when they scroll back above 50 px

### Requirement 4: Hero

The app SHALL render the hero on `#f7f6f4` as a 12-column split (7 copy / 5 form card) with the eyebrow,
the two-sentence `h1` (second sentence in `#41712f`), the lede, the rating line and the four-item
checklist, and it SHALL render exactly one `h1` on the page.

#### Scenario: Headline treatment

- **GIVEN** a 1440 px viewport
- **WHEN** the hero renders
- **THEN** the `h1` measures 60 px / 66 px with −1.5 px tracking and the `#282520` colour
- **AND** the span `The clock has already started.` is `#41712f` with no gradient and no background

#### Scenario: Checklist

- **GIVEN** any viewport
- **WHEN** the hero renders
- **THEN** four rows appear in the reference order with 16 px `#41712f` ticks
- **AND** at `sm`+ they sit in two columns, below `sm` in one

#### Scenario: Rating line

- **GIVEN** any viewport
- **WHEN** the hero renders
- **THEN** five `amber-400` stars, `4.9` in bold and `240+ reviews on Google · sample data` at 80 %
  opacity appear in one flex row
- **AND** the stars are decorative (`aria-hidden`) with the rating repeated in text

### Requirement 5: Quote card form

The app SHALL render the `#quote` card (16 px radius, 32 px padding, `shadow-md`) with three required
fields — name, phone, and a six-option select — a full-width submit and the footnote, and it SHALL
validate locally without any network call.

#### Scenario: Empty submit

- **GIVEN** the form is untouched
- **WHEN** the visitor presses `Book the inspection`
- **THEN** each empty required field shows an inline error and `aria-invalid="true"`
- **AND** focus moves to the first invalid field
- **AND** no request is made

#### Scenario: Invalid phone

- **GIVEN** the name is filled
- **WHEN** the phone field loses focus containing `abc`
- **THEN** the phone error appears before submit
- **AND** it clears when a valid number is typed

#### Scenario: Valid submit

- **GIVEN** all three fields are valid
- **WHEN** the visitor submits
- **THEN** the form resets and a success toast appears for ~4 s
- **AND** the page does not navigate

#### Scenario: Select options

- **GIVEN** the select is opened
- **WHEN** it renders
- **THEN** the placeholder reads `Choose the closest match`
- **AND** the six options are `Inspection for a sale`, `Routine pumping`, `Backing up into the house`,
  `Wet patch or smell in the yard`, `Slow drains everywhere`, `Buying a house with septic`

### Requirement 6: Timeline band

The app SHALL render the near-black `#191713` band with the eyebrow, heading, lede, all **seven** rows in
reference order, both *Where deals slip.* callouts, the footnote and the trailing button.

#### Scenario: Seven rows with the two marked steps

- **GIVEN** the timeline renders
- **WHEN** the list is read
- **THEN** seven rows appear, each with a mono day label, an actor line, a mono index `01`–`07` and a step
  name
- **AND** exactly rows 1 and 5 carry a `primary-400/10` callout beginning `Where deals slip.`

#### Scenario: Row geometry

- **GIVEN** a 1440 px viewport
- **WHEN** a row renders
- **THEN** it is a 12-column grid with the day block at 3 columns and the content at 9
- **AND** it carries a 2 px `white/15` left rule and 24 px left padding, with 32 px bottom padding except
  the last

#### Scenario: Band footer

- **GIVEN** the last row
- **WHEN** the band ends
- **THEN** the illustrative footnote sits left and the `Book the inspection` button right at `sm`+, and
  both stack below `sm`

### Requirement 7: Emergency band and the mobile call bar

The app SHALL render a flat `#41712f` band with a pinging dot, an uppercase eyebrow, a bold headline, a
supporting paragraph and a white phone pill, and a fixed call bar below `lg`.

#### Scenario: Ping respects reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the emergency band renders
- **THEN** the pinging ring is not animated and a static 8 px dot remains

#### Scenario: Call bar

- **GIVEN** a 390 px viewport
- **WHEN** the page renders
- **THEN** a fixed bottom bar carries one full-width green pill reading
  `Backing up into the house? · (555) 110-1100`
- **AND** at 1,024 px and above that bar is not rendered

#### Scenario: Cookie strip layers above the call bar

- **GIVEN** a mobile viewport and the cookie strip visible
- **WHEN** both fixed layers are on screen
- **THEN** the cookie strip paints over the call bar and both remain dismissible

### Requirement 8: Services grid

The app SHALL render six service cells in a hairline grid over `#edebe6` with the six prices, and a
sample-data footnote.

#### Scenario: Grid columns

- **GIVEN** a 1440 px viewport
- **WHEN** the grid renders
- **THEN** it is three columns of white cells separated by 1 px gutters inside a 16 px radius
- **AND** at 640–1,023 px it is two columns, and one below 640

#### Scenario: Price text

- **GIVEN** any viewport
- **WHEN** a cell renders
- **THEN** its price sits at the bottom (`mt-auto`/`flex-1` blurb) in 14 px bold `#365a28`
- **AND** the six strings are `From $425`, `From $375`, `From $295`, `Quoted after evaluation`,
  `From $240`, `From $495`

### Requirement 9: Why-us band and the field panel

The app SHALL render the two-column why-us band with a **redrawn** field-panel illustration on the left
(first on `lg`, last below it) and four left-ruled definition rows on the right.

#### Scenario: Figure order

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** the figure precedes the text
- **AND** at 390 px it follows the text

#### Scenario: Four rows under a "three things" heading

- **GIVEN** the band renders
- **WHEN** the list is read
- **THEN** four rows appear with a 2 px `#41712f` left rule and 20 px left padding
- **AND** the heading keeps the reference's `Three things that explain most failures` wording even though
  four rows follow (Deviation 6)

#### Scenario: The illustration is original

- **GIVEN** the build
- **WHEN** the panel is inspected
- **THEN** it is an authored SVG with `role="img"` and an accessible name describing a tank, a
  distribution box and a drain field
- **AND** it contains no path, comment or byte copied from `field-panel.svg`

### Requirement 10: Service areas

The app SHALL render the `#areas` band as a 5/7 split with the twelve towns as ruled rows and the
replace-me footnote.

#### Scenario: Town list

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** twelve towns appear in reference order in three columns
- **AND** below 640 px they appear in two columns with the same bottom rules

### Requirement 11: Testimonials carousel

The app SHALL render three testimonial slides in a carousel that shows 3 / 2 / 1 per view at `lg` / `sm` /
below, advances every 5 s, pauses on hover, and exposes dots.

#### Scenario: Per-view sizing

- **GIVEN** a 1,440 px viewport
- **WHEN** the carousel mounts
- **THEN** three slides are visible with equal widths
- **AND** at 768 px two are visible, and at 390 px one

#### Scenario: Autoplay and hover

- **GIVEN** the carousel is mounted
- **WHEN** 5 s pass
- **THEN** it advances by one slide and wraps at the end
- **AND** hovering the track pauses the advance until the pointer leaves

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the carousel mounts
- **THEN** it does not autoplay and the arrows/dots still work

#### Scenario: Arrow visibility at the ends

- **GIVEN** a carousel whose slides fit in one view
- **WHEN** the render settles
- **THEN** neither arrow is shown
- **AND** when there is more than one page, the corresponding arrow appears

### Requirement 12: FAQ accordion (exclusive)

The app SHALL render five question rows inside a 768 px column with a plus-disc that rotates on open, and
opening one row SHALL close the others.

#### Scenario: Opening a row

- **GIVEN** all five panels are closed
- **WHEN** the visitor presses the second question
- **THEN** its panel expands to its content height with `opacity: 1`
- **AND** its disc rotates 45° into a close mark
- **AND** every other panel collapses and resets its disc

#### Scenario: Keyboard operation

- **GIVEN** focus is on a question button
- **WHEN** the visitor presses Enter or Space
- **THEN** the same toggle happens as a click
- **AND** the button reports `aria-expanded` and controls its panel

### Requirement 13: Closing band

The app SHALL render the flat `#365a28` band with the white heading, the pale-green lede and the two-button
pair.

#### Scenario: Button pair

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** a solid white button (`text #365a28`) and a `border-2 white/40` ghost button with a phone
  glyph sit side by side, centred
- **AND** below `sm` they stack at full width

### Requirement 14: Footer

The app SHALL render the `#111827` footer with a brand column, three link columns, a working newsletter
field, a bottom bar, and a **Component Dock** link.

#### Scenario: Newsletter validation

- **GIVEN** the footer newsletter field
- **WHEN** the visitor submits `not-an-email`
- **THEN** an inline error appears and no request is made
- **AND** a valid address clears the field and shows the success toast

#### Scenario: Component Dock attribution

- **GIVEN** any viewport
- **WHEN** the footer renders
- **THEN** it contains a link to `https://www.componentdock.com/` labelled as Component Dock
- **AND** that link is visible, keyboard-focusable and has a discernible name

### Requirement 15: Navigation mapping (single page)

The app SHALL map the reference's six route links onto in-page bands, because the recreation is a single
page, and the scroll spy SHALL highlight the band in view.

#### Scenario: Label to band mapping

- **GIVEN** the nav renders
- **WHEN** a label is activated
- **THEN** `Selling a house` reaches the timeline band, `Services` the services grid, `How septic works`
  the why-us band, `Service areas` the areas list, `About` the why-us lede's section, and `Contact` the
  closing band
- **AND** every target id exists in the document (no `#service-areas` dead fragment)

#### Scenario: Active state

- **GIVEN** the visitor scrolls into the timeline band
- **WHEN** the spy runs
- **THEN** `Selling a house` carries the active treatment (600 weight, `#282520`)
- **AND** only one link is active at a time

### Requirement 16: Accessibility, performance and provenance

The app SHALL be keyboard-navigable, expose no ColorLib provenance in `apps/percline`, and ship no copied
assets.

#### Scenario: Provenance isolation

- **GIVEN** the built app
- **WHEN** `grep -ri colorlib apps/percline` and `grep -ri fieldline apps/percline` run
- **THEN** both return nothing
- **AND** the strings `office@fieldlineseptic.example`, `KDHE #00000`, `4120 South Hydraulic Avenue` and
  the two testimonial quotes naming the source brand have been rewritten or removed

#### Scenario: Focus visibility

- **GIVEN** the visitor tabs through the page
- **WHEN** focus reaches any button, link or field
- **THEN** a visible ring at least 2 px is drawn in `#548d3d`, `#41712f`, `#365a28` or `#111827`
- **AND** the skip link is the first stop

#### Scenario: No copied assets

- **GIVEN** the repository
- **WHEN** `apps/percline` is inspected
- **THEN** it ships no `field-panel.svg`, `logo.svg`, `logo-light.svg` or `favicon.svg` from the reference
- **AND** no base64 blob reproduces one

## Deliberate deviations from the reference

1. **Multi-page → single page.** The reference ships eight inner routes; the recreation folds their
   argument into one page and maps the nav labels onto bands (Requirement 15). Inner-page copy is
   summarised, not rebuilt.
2. **Dark toggle dropped.** The reference has `data-dark-toggle` + `applyTheme()`. The recreation is
   light-only; every measured dark value (`primary-800 #2e4a24`, `primary-900 #283e21`, `gray-950
   #030712`) is recorded in the token tables so the decision is reversible.
3. **Cookie consent is component state, not `localStorage`.** The reference persists `cookie-consent`;
   the recreation keeps it in memory so a returning visitor sees the strip once per session. Record the
   choice in the PR.
4. **Both forms are wired.** The reference's quote and newsletter forms are inert (`data-form` /
   `data-newsletter-form` bind to nothing). The recreation validates locally, resets on success and never
   calls the network.
5. **The JSON-LD is not copied.** The reference's block is corrupt — `"@context":"https://***@type"` — and
   its `og:image=/og-image.jpg` is a 404. Emit no dangling OG image; if structured data is wanted, write a
   valid `LocalBusiness` block from scratch.
6. **Brand and sample strings are replaced.** `Fieldline`, `Fieldline Septic`, `fieldlineseptic.example`,
   the Wichita address, the `KDHE #00000` licence and the review quotes that name the brand become
   Percline equivalents (invented, clearly sample).
7. **The illustration is redrawn.** `field-panel.svg` (2,234 B, 800×600, `#191713` ground, `#282520` inner
   card, `#41712f` lawn bar, `#514c3f` tank, `#6ea857` d-box and pipes, `#deedd6` labels, `#8d8574`
   captions, headline *Two parts, one of them expensive*) is a **description**, not a file to copy: redraw
   it as an authored SVG with the same information.
8. **Broken fragments are fixed.** `#service-areas` (two links) targets a non-existent id; the recreation
   points them at the real areas band.
9. **The `Three things` / four-rows mismatch is kept.** The reference's heading says three and lists four.
   Keeping the wording is the faithful choice; if the implementer prefers to correct it, that is a
   deliberate copy change and must be recorded in the PR.
10. **`tel:` normalised.** The footer's `tel:(555) 110-1100` is malformed; use `tel:+15551101100`-shaped
    hrefs everywhere (sample number, so keep it visibly fictional).

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-percline/`
- [ ] `scripts/verify-app.sh percline` green: typecheck, lint, 100 % coverage tests, build
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/percline" package-lock.json` ≥ 1)
- [ ] `apps/percline/public/CNAME` and `package.json#homepage` are `percline.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`; `react`/`react-dom` pinned to `latest`
- [ ] No `colorlib` / `fieldline` / `fieldlineseptic` strings under `apps/percline`
      (`grep -ri` both, comments included)
- [ ] Footer links `https://www.componentdock.com/`
- [ ] One `h1`; hero span is the only `primary-600` headline treatment
- [ ] Seven timeline rows, two *Where deals slip.* callouts, six services with the six prices, twelve
      towns, three reviews, five questions
- [ ] Tokens match §Design tokens exactly, including `primary-800/900` reserved for dark and `ink-300`
      used only as a placeholder colour
- [ ] `.section` = 80 / 112 px; hero `py-14 / lg:py-20`; emergency band is not a `.section`
- [ ] Reveal, header shadow at 50 px, exclusive FAQ, 3/2/1 carousel at 5 s with hover pause, cookie at
      1.5 s, back-to-top at 300 px, progress bar, ping dot — all present; no counter/typewriter/parallax
- [ ] All decorative SVGs `aria-hidden`; the field panel carries `role="img"` + a name
- [ ] Reduced motion disables reveal, ping and autoplay
- [ ] `TEMPLATES.md` row added under `## Business` between **Feliciano** and **Finances**, heading
      re-counted (369 → 370), marker `[x]` set in the bookkeeping commit
- [ ] Deploy via `gh workflow run deploy-surge.yml -f app="percline"`; then
      `curl -sI https://percline.free.componentdock.com` returns 200
