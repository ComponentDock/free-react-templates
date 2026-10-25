# Template: Kettle (Business — water-heater replacement sized on simultaneous demand)

## Purpose

A one-page site for a **water-heater installer whose product is the sizing decision, not the tank**. The
page is built as one argument in the order a household with no hot water reads it: the hero states the
industry's mistake out loud (*Forty or fifty gallon **is the wrong question**.*) beside a **three-field
quote card**; a near-black band runs a **four-input sizing tool** that computes a tankless flow and a
tank volume live and then argues with the visitor about which one is honest; a flat burnt-orange band
turns the leaking-tank case into one phone call; a six-cell hairline grid prices six options including
*repair rather than replace*; a two-column band explains the four sizing questions around an **inline
flow-panel diagram**; three numbered steps, a twelve-town list, three reviews, five questions and a
deep-orange closing band finish it.

There is **no photography anywhere** — the only illustration is a 1,739-byte SVG "flow panel" — and the
palette is a single **burnt-orange ramp** (`#fff8ec` → `#8d4e12`) on a **warm grey** ramp
(`#f7f7f7` → `#161616`), typeset in **Manrope** with **JetBrains Mono** reserved for numbers and machine
labels. This is a light-first design with exactly **two dark grounds** (`#161616` and `#111827`) and
exactly **two orange bands** (`#ae6211`, `#8d4e12`).

Recreation of the ColorLib **"Everhot"** design (https://colorlib.com/wp/template/everhot/, live preview
https://preview.colorlib.com/theme/everhot/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `everhot`
* **ColorLib page:** https://colorlib.com/wp/template/everhot/ — HTTP 200, 111,716 B,
  `<title>` **"Everhot - Water Heater Website Template 2026 - Colorlib"**; its
  `<meta name="description">` sells the same idea (*"«40 or 50 gallon» is the query people type, and the
  category answers it with a chart of house sizes. Everhot asks what runs in the same minute and how cold
  the water arrives, then sizes tank and tankless separately, because one is a question about volume and
  the other about flow."*)
* **Live preview:** https://preview.colorlib.com/theme/everhot/ — HTTP 200, 85,846 B, page `<title>`
  **"Water heater replacement in Richmond, sized on what runs at once | Everhot Water Heaters"** (read
  2026-10-25 with `curl -4`; this host resolves an IPv6 address that is banned, so every fetch needs
  `-4` — Playwright reached it directly with no host rule)
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**everhot-template.jpg** — HTTP 200,
  318,790 B, a real **JPEG**, **2400×1892**, a macOS-Safari-window-framed capture of the licence strip,
  the header, the whole hero, the hero quote card and the top half of the sizing band. ⚠️ The
  `…/sites/2/everhot.jpg` and `…/everhot-water-heaters.jpg` guesses **404** — the `-template` suffix is
  the one that exists.
* **New name:** `kettle` (apps/kettle, `@free-react-templates/kettle`) — one lowercase word, the vessel
  the whole page is about, and deliberately **domestic rather than industrial** (the design sells to a
  household, not to a contractor). Differs from the source slug; no `apps/kettle`, no
  `openspec/specs/template-kettle/`, no `docs/templates/kettle/`, and the three ColorLib URL forms
  (`wp/template/kettle/`, `theme/kettle/`, `theme/bootstrap/kettle/`) all return **404** (probed
  2026-10-25). `git grep -il kettle origin/main` is **not** empty, but every hit is body copy or an asset
  name inside another app (`Copper Kettle` in `apps/paperie`, `Kettlebell power` in `apps/fitcraft`, a
  prose sentence in `apps/capstan`) — never a workspace, folder or spec identifier, so there is no
  collision of the kind the name rule is about. Recorded here so the next auditor does not have to
  re-derive it.
* **Deploy target:** https://kettle.free.componentdock.com (`apps/kettle/public/CNAME`, `homepage` in
  `apps/kettle/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## Business (368)` (line 880), the commercial-services section that already holds
  the sibling catalogue-gap preps of this same 2026 generation (`airwise` → **Thermly**, `curbline` →
  **Plantroom**, `backstop` → **Flowcert**, `commons` → **Veranda**, `circles` → **Closeknit**,
  `dowser` → **Aquifer**).

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, 2,861 `[x]` rows on `origin/main` `b62ea3b6d`, every row
resolving to an app and a spec — but the **catalogue is not complete**: all 40 pages of
https://colorlib.com/wp/templates/ were crawled and compared with the 1,631 slugs the checklist cites,
and **256 designs are on the listing that the checklist never recorded** (42 standalone + 214 snippet
variants). The census, its commands, the open decision and both buckets are recorded in
`docs/catalog-coverage.md`.

`everhot` is one of the 42 standalone designs (a row of that table: `everhot` — preview 200, 85,846 B).
Seven of the 42 were prepped before this run — `airwise` → **Thermly** (shipped), `backstop` →
**Flowcert** (shipped), `circles` → **Closeknit**, `coldsnap` → **Stoke**, `commons` → **Veranda**
(shipped), `curbline` → **Plantroom** (shipped), `dowser` → **Aquifer** — and they established the
hand-off pattern this spec follows. No spec on main names `theme/everhot` (`grep -rl 'theme/everhot/'
openspec/specs` → nothing) and no app named `everhot` exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this
line into `## Business` **in source-name alphabetical order** — measured on `main` the run lands between
**Evento** and **Expert** (`Evans` → `Evento` → `Everhot` → `Expert`; this spec's earlier
`Ecoland`/`Eiser` note was an E-section miscount) — and bump the heading count:

```
- [x] **Everhot** — [colorlib](https://colorlib.com/wp/template/everhot/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/everhot-template.jpg) · [kettle](https://kettle.free.componentdock.com)
```

⚠️ **Re-measure the count before you write it.** On `origin/main` `b62ea3b6d` the section reads
`## Business (368)` over **368** rows — the heading is honest again after Plantroom's bookkeeping commit
(`b62ea3b6d`, "Curbline shipped, README status 1650/1650"). Adding Everhot makes **369**; if Aquifer's
row lands first, the honest value is **370**. Count the rows, do not copy this number.

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/everhot/` page (DOM authority) | 85,846 | `a8e188baab039d8f1f97c6021fd956bccf23b52631bcdb55c658d9a34a5c8852` |
| `theme/everhot/_astro/Base.JYuhjam6.css` (token authority) | 56,390 | `1b7b8eb310a83f1248371238907799931764ea2ddcb831124c31f3623019ac17` |
| `theme/everhot/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (house kit) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/everhot/_astro/ClientRouter…CYDbzu1r.js` (view-transition router) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| inline `<style>` (`@font-face` for **Manrope** 400/500/600/700/800 + **JetBrains Mono** 500/700, 12 `woff2` files) | 11,620 | — |
| inline `<script>` 1: `applyTheme()` | 454 | — |
| inline `<script>` 2: JSON-LD `Plumber` | 362 | — |
| inline `<script>` 3: **the sizing tool** (`targetTemp = 120`, `initSizeIt`) | 3,554 | — |
| inline `<script>` 4: preloader removal + `astro:before-swap` | 370 | — |
| `assets/img/logo.svg` (150×32 rendered, 32/36 px tall) | 678 | `1e1ddc148acaebda5fc576b68ad894459049167385fca0d6ea04e06d57b4a6fe` |
| `assets/img/logo-light.svg` | 678 | `578db2cf30cda50434b1972a7c5dc3ed98504f8d0ccbcdbe511ffbf0366630b1` |
| `assets/img/flow-panel.svg` (the only illustration, 800×600) | 1,739 | `9d8c274ab241d06280256efa694d7ab831969dd68b753706fd4b6772c6419203` |
| `favicon.svg` | 272 | `8dd6d91790c31533ae1cafc5ac10404f0b0b489c2f3ad2abce528ee629529792` |
| catalog screenshot `everhot-template.jpg` | 318,790 | `dbb2859e6bdef30151e27bfecee837a4713a94329cd5c584a6b2eb6e95b690b2` (real **JPEG**, 2400×1892) |
| `colorlib.com/wp/template/everhot/` (catalog entry) | 111,716 | — |
| `css/style.css`, `js/snippet.js`, `downloads/free/everhot.zip`, `og-image.jpg` | — | **HTTP 404** — Astro build, so the live preview is the sole DOM/CSS reference and the OG image it advertises (`og:image=/og-image.jpg`) does not exist |

The preview is an **Astro build with Tailwind 4 output** (sheet header: `tailwindcss v4.3.3`): one
stylesheet, one kit script, one client router. **Both `_astro` scripts are byte-identical to the ones the
Aquifer (Dowser), Plantroom (Curbline), Veranda (Commons), Stoke (Coldsnap) and Closeknit (Circles) preps
measured** — the same house kit renders every one of these 2026 designs, so the *behaviour* inventory
transfers while the markup, palette and band order do not. Do not copy a sibling's tokens because the kit
hash matches: Everhot is **burnt orange on warm grey in Manrope**, not Dowser's cyan on blue-grey in Space
Grotesk and not Curbline's blue Inter.

The catalog entry's `meta description` agrees with the live page's positioning, but its prose is
different. The **live preview is the authority**; where the two disagree, the DOM wins.

## Design tokens (measured from `_astro/Base.JYuhjam6.css`, 56,390 B, and the live render at 1440 px)

### Brand ramp — `primary` (a burnt orange / amber, not a Tailwind stock ramp)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#fff8ec` | `hover:bg-primary-50` on the closing band's solid CTA |
| `primary-100` | `#ffedd0` | **the testimonial initials discs** (`bg-primary-100`), the closing band's lede text |
| `primary-200` | `#fcd79e` | available in the sheet (`border-primary-200`); unused on this page |
| `primary-300` | `#f6bb63` | **the tankless output number** (`text-primary-300`, 36 px mono) and `dark:` accent text |
| `primary-400` | `#e99c31` | **the selected chips** (`peer-checked:bg-primary-400`), the five testimonial stars, the flow-panel bars, the closing band's `border-primary-400/40` verdict ring, the `primary-400/10` verdict ground, the `dark:` accents |
| `primary-500` | `#d07e16` | input focus border + ring (`focus:border-primary-500`, `ring-primary-500/20`) |
| `primary-600` | `#ae6211` | **brand** — every solid button, the `h1` span, the progress bar, the emergency band ground, the checklist ticks, the `dt` left rules, the back-to-top disc, the mobile call pill, the preloader arc, `bg-primary-600` on the header CTA |
| `primary-700` | `#8d4e12` | **every eyebrow on a light ground**, the price lines, `.btn-primary:hover`, the **closing band ground**, the solid CTA's label |
| `primary-800` / `-900` | — | **not defined in the sheet** — do not invent them |

### Neutral ramp — `ink` (warm grey; this is what keeps the orange from reading "generic construction site")

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f7f7f7` | **hero ground** (measured `rgb(247,247,247)`), `#why-us` ground |
| `ink-100` | `#ededed` | every card border, header border, **the options grid's gutter fill** (`bg-ink-100`), the areas row rules |
| `ink-200` | `#dadada` | **input borders**, the header pills' borders, the sticky bar's border |
| `ink-300` | — | **not defined in the sheet**, yet `placeholder:text-ink-300` is used on both input sets — the placeholder therefore falls back to the browser default. The recreation may define `ink-300` (`#b4b4b4` is the value the flow panel uses for labels) or drop the class; **record which**. |
| `ink-400` | `#858585` | `figcaption`, form footnote |
| `ink-500` | `#636363` | **body copy on light grounds** (measured `rgb(99,99,99)`), card blurbs |
| `ink-600` | `#494949` | header nav links (measured `rgb(73,73,73)`), the hero rating line |
| `ink-700` | `#373737` | checklist text, area town labels |
| `ink-800` | `#242424` | **`h1`/`h2`/`h3` on light grounds** (measured `rgb(36,36,36)`), **the licence strip's ground** |
| `ink-900` | `#161616` | **the sizing band's ground** (measured `rgb(22,22,22)`), the flow panel's outer rect |

### Chrome grey, status colours, grounds

| token | value | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | **`#testimonials` ground** |
| `gray-100` | `#f3f4f6` | FAQ icon discs (`bg-gray-100`) |
| `gray-200` | `#e5e7eb` | FAQ `divide-y` rule, cookie strip border, preloader ring |
| `gray-300` | `#d1d5db` | cookie `Decline` border, inactive carousel dots |
| `gray-400` | `#9ca3af` | footer body copy, footer link default, social glyphs |
| `gray-500` | `#6b7280` | footer legal text, FAQ icon glyph, toggle glyph |
| `gray-600` | `#4b5563` | testimonial town lines, cookie copy, carousel arrows |
| `gray-700` | `#374151` | footer input border, dark-mode grounds |
| `gray-800` | `#1f2937` | footer social tiles + footer input ground |
| `gray-900` | `#111827` | **footer ground** (measured `rgb(17,24,39)`), `body` colour, testimonial/FAQ headings |
| `amber-400` | `oklch(82.8% .189 84.429)` = `#fbbf24` | the licence strip's star |
| white | `#fff` | hero card, `#options`/`#process`/`#areas`/`#faq` grounds, the closing band's solid CTA |

**Note the mixed house kit vs page palette:** the footer, the testimonial ground and the FAQ rules use
stock Tailwind `gray`, while the hero, the sizing band, the why-us panel and every card border use `ink`.
That split is in the reference (dark chrome recedes, warm greys carry content) — keep both ramps, do not
"normalise" one into the other. The **stars deliberately differ between the two places they appear**:
`amber-400` in the licence strip, `primary-400` `#e99c31` in the testimonials.

### Typography

Two faces, both delivered from the preview's own `/cf-fonts/v/…` cache inside the 11,620-byte inline
`<style>` (which is why grepping the sheet for `@font-face` finds nothing):

* **Manrope** — the whole page. `body` sets `font-family: Manrope, system-ui, sans-serif` (measured).
  Weights in use: **400, 500, 600, 700, 800** (800 only inside the flow-panel SVG's headline).
* **JetBrains Mono** — reserved for numerals and machine-ish labels: the two 36 px output numbers
  (`tabular-nums`), the `2 gpm` / `62°F` suffixes inside the chips, the flow panel's gpm labels.
  `font-family: JetBrains Mono, Consolas, monospace`. Weights present: **500, 700**.

| role | measured | notes |
| --- | --- | --- |
| `h1` | `text-4xl` 36 → `sm:text-5xl` 48 → `lg:text-6xl` **60 px** (measured at 1440), `font-bold`, `leading-[1.1]` (66 px), `tracking-tight` (**−1.5 px**), `text-ink-800` | two sentences; the second (`is the wrong question.`) is a `<span class="text-primary-600">` — **not** a gradient, **not** a highlight box |
| `h2` | 30 px `text-3xl` → `sm:text-4xl` **36 px / 40 px / −0.9 px** (measured), `font-bold`, `tracking-tight` | every band heading; the hero card's heading is `text-xl lg:text-2xl` (20/24 px) |
| `h3` | 18 px `text-lg font-bold`, `text-ink-800` | six options, three steps, footer column heads are 14 px `uppercase tracking-wider` instead |
| lede | 18 px `text-lg` / 28 px line, `text-ink-500` on light grounds, `text-gray-600` in testimonials/FAQ, `text-primary-100` on the closing band, `text-white/70` on the sizing band | — |
| eyebrow | 14 px `text-sm font-bold uppercase tracking-wide` (**0.35 px measured**), `text-primary-700` on light (+ the closing band uses none), `text-primary-400` on the sizing band | hero, `#size`, `#options`, `#why-us`, `#process`; the testimonial/FAQ eyebrows are **pills** instead (`rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`) |
| mono numerals | **JetBrains Mono** 36 px / 700, `tabular-nums`; `primary-300` for the tankless number, white for the tank number | the two outputs only |
| chip labels | 14 px `font-semibold` `text-white/70` → `text-ink-900` when selected; the unit suffix is `font-mono text-xs opacity-70` | all nine chips (`6 fixtures`, `3 climates`, `6 people` — the people chips are `w-12` squares-in-pills with `font-bold`) |

Load them with two `<link>`s in `index.html` (both `css2` URLs return 200 with a browser UA):

```
https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap
```

### Buttons, radii, shadows

| token | value | where |
| --- | --- | --- |
| `.btn` (kit) | `inline-flex`, centre, `gap:8px`, `border-radius:.5rem` (8 px), `padding:10px 20px`, `font-size:14px`, `font-weight:500`, `transition:all` | `Get a fixed quote` in the sizing panel |
| `.btn-primary` | `background:#ae6211`, white, `shadow-lg` tinted `#ae621140`; hover `#8d4e12` + `shadow-xl` | ditto (rendered `rgb(174,98,17)`, 8 px radius, `10px 20px`) |
| header CTA | `rounded-lg px-5 py-2.5` (20/10 px), 14 px `font-bold`, `bg-primary-600`, hover `primary-700` | `Size mine` |
| hero card CTA | `.btn .btn-primary` + `w-full justify-center`, 8 px radius, 14 px, full card width | `Get my answer` |
| emergency pill | `rounded-full px-6 py-3`, 18 px `font-bold`, **white ground, `text-primary-700`**, hover `primary-50`; leading phone glyph 20 px | `(555) 090-0900` |
| closing CTA pair | `rounded-lg px-8 py-4` (32/16 px), 16 px `font-bold`; solid white with `text-primary-700`, ghost `border-2 border-white/40` | `Size mine` / `Call (555) 090-0900` |
| footer subscribe | `rounded-lg px-4 py-2.5`, 16 px `font-medium` | `Subscribe` |
| header pills | `rounded-full`, `1px #dadada` border, 14 px; phone pill `font-semibold`, location pill `font-medium` with a 16 px pin | `Richmond, VA` (`2xl`), `(555) 090-0900` (`md`+) |
| radii | `lg` .5 rem (8) · `2xl` 1 rem (16) · `full` | `lg` = buttons/inputs, `2xl` = the hero card, the options grid, the sizing panel, the flow panel, testimonial cards, `full` = every chip, pill, dot, the 32 px FAQ disc, the 48 px back-to-top |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | testimonial cards |
| `shadow-md` | stock Tailwind (`0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a`) | **the hero quote card** (measured on the card) |
| `shadow-lg` / `shadow-xl` | stock Tailwind; back-to-top is tinted `shadow-primary-600/25` | header past 50 px, carousel arrows, cookie strip, back-to-top |
| `.section` | `padding-block: calc(var(--spacing) * 20)` = **80 px**, overridden at `@media (width>=64rem)` to `* 28` = **112 px** (measured 112 px at 1440) | `#size`, `#options`, `#why-us`, `#process`, `#areas`; `#testimonials`, `#faq`, `#contact` use `py-20 lg:py-28` instead (same 80/112) |
| keyframes present | `ping`, `spin` | only **`ping`** (the emergency dot) and **`spin`** (the preloader ring) are reachable from this DOM; there is **no** float, blob, typewriter or counter on this page |

### Rhythm and containers

* Hero: `py-14` (56 px) → `lg:py-20` (**80 px**), `bg-ink-50`, no border; section height **670 px** at 1440.
* Licence strip: `h-9` (36 px box) — **measured 37 px including the 1 px border**, `bg-ink-800`,
  `text-ink-100`, `text-xs`.
* Header: `h-16` (64) → `lg:h-20` (80) — measured **65 / 81 px including the border**; sticky,
  `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100`.
* Emergency band: `bg-primary-600`, container `py-6 lg:py-8` (24/32 px) — a thin band, **not** a
  `.section`; measured height **164 px** at 1440.
* Containers: `container mx-auto px-4 lg:px-8` everywhere; `max-width` measured **1280 px**, i.e.
  **1,216 px** of content at 1440. Hero splits `lg:grid-cols-12` with **7 / 5** (`gap-16` = 64 px); the
  quote card measures **469×510** (32 px padding) at 1440 and **358×510** (24 px padding) at 390.
  `#size` splits `lg:grid-cols-12` with the form at **7** (689 px) and the output panel at **5**
  (479 px, 32 px padding, `rounded-2xl`, `border-white/10`, `bg-white/5`); the verdict box inside is
  **413×86** at 8 px radius, `12px 16px` padding.
* Section heights at 1440 (measured, useful for eyeballing a build): hero 670, `#size` 1073, `#emergency`
  164, `#options` 927, `#why-us` 872, `#process` 564, `#areas` 468, `#testimonials` 796, `#faq` 820,
  `#contact` 440, footer 567. Mobile document height **11,735 px** at 390.

## Reference document order (three chrome pieces before the header, ten bands, three after the footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white (`dark:gray-950`) | fixed `z-[100]`, 40 px `animate-spin` ring `border-4 border-gray-200 border-t-primary-600`; removed 300 ms after `load` |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio |
| — | `[data-licence-bar]` | **`bg-ink-800` `#242424`, `text-ink-100`**, `h-9`, `text-xs` | left: `Licence` / **`VA DPOR #0000000000`**, `Gas fitting certified`, `Serving` / **`Greater Richmond`** (the middle two hidden below `sm`); right: an `amber-400` star + **`4.9`** + `410+ reviews on Google (sample)` |
| — | `header[data-header]` | `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100` | sticky `z-50`, 64/80 px: logo (150×32, `h-8 lg:h-9`) · **six** nav links from `xl` (`Size mine`, `Tank vs tankless`, `Services`, `Service areas`, `About`, `Contact`, `gap-7`) · location pill (`Richmond, VA`, `2xl` only) · phone pill (`(555) 090-0900`, `md`+) · dark toggle · solid `Size mine` (`xl`+) · hamburger (`xl:hidden`) |
| — | `[data-mobile-menu]` | white (`dark:gray-950`), `border-t` | `hidden xl:hidden` panel: the six links as `block py-3` rows, then phone + location pills and a full-width CTA |
| 1 | (hero, no id) | **`bg-ink-50` `#f7f7f7`** | `lg:grid-cols-12`, left `col-span-7 lg:pt-6` — eyebrow `Richmond · Licensed and gas certified`, `h1`, 18 px lede, 5 `amber-400` stars + `4.9` + `410+ reviews on Google · sample data`, then a **2×2 checklist** (`sm:grid-cols-2`, `primary-600` ticks): `Sized on simultaneous demand, not on square footage`, `Incoming water temperature actually accounted for`, `Common sizes on the truck for same-day swaps`, `We will tell you when a repair is the better answer`; right `col-span-5` — the **quote card** (`#quote`, `rounded-2xl border-ink-100 bg-white p-6 lg:p-8 shadow-md`, measured 469×510) with `h2 Prefer to just ask?`, `Three fields. We reply within the hour on weekdays.`, a 3-field form and a full-width `Get my answer` button plus the `No obligation. We never sell your details.` footnote. **No image in the hero.** |
| 2 | `#size` | **`bg-ink-900` `#161616`, `text-white`** | eyebrow `Sizing` (`primary-400`), `h2 Answer four things and we will size both options`, `text-lg text-white/70` lede; `lg:grid-cols-12` — left **form** (7 cols): three `<fieldset>`s with numbered `1.`/`2.`/`3.` legends in `text-primary-400`, `text-white/45` hints and `peer`-driven chips; right **output panel** (5 cols, `rounded-2xl border-white/10 bg-white/5 p-6 sm:p-8`): `If you go tankless` → 36 px mono `primary-300` value + rise sentence; a `border-t border-white/10` divider; `If you stay with a tank` → 36 px mono white value + peak-hour note; the verdict box (`rounded-lg border border-primary-400/40 bg-primary-400/10 px-4 py-3 text-sm text-primary-100`); a full-width `Get a fixed quote` `.btn-primary` linking to `/contact`; and the sample-data footnote in `text-sm text-white/35` |
| 3 | `#emergency` | **`bg-primary-600` `#ae6211`, `text-white`** | a thin band (`py-6 lg:py-8`): a **pinging dot** + uppercase eyebrow `No hot water, or a leaking tank?`, `A leaking tank is a same-day call. We carry the common sizes on the truck.` at 18/20 px bold, a `text-sm opacity-90` paragraph, and one white **pill** `(555) 090-0900` with a phone glyph, right-aligned from `lg` |
| — | `[data-sticky-call]` | white (`dark:gray-900`), `border-t border-ink-200`, `p-3` | **`lg:hidden`** fixed bottom bar, `z-40`, **97 px tall measured at 390**: a full-width **orange pill** `data-phone` link `No hot water, or a leaking tank? · (555) 090-0900` with a phone glyph |
| 4 | `#options` | white | eyebrow `The honest version`, `h2 Tankless is not automatically better`, lede; a **6-cell hairline grid** (`grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100`, `sm:grid-cols-2 lg:grid-cols-3`, cells `flex flex-col bg-white p-6 lg:p-8`, measured 3 × 404 px cells, 232 px tall): `Tank, replaced like for like` / `Tank, upsized` / `Heat pump water heater` / `Tankless, gas` / `Tankless, electric` / `Repair rather than replace`, each with a blurb and a `text-sm font-bold text-primary-700` price line (`From $1,450 installed`, `From $1,750 installed`, `From $2,900 installed`, `From $3,600 installed`, `From $2,200 installed`, `From $180`); sample-data footnote |
| 5 | `#why-us` | **`bg-ink-50` `#f7f7f7`** | `lg:grid-cols-2` (`gap-16`, `items-center`), figure **first on `lg`** (`order-last lg:order-first`): `flow-panel.svg` in `rounded-2xl` + a `text-sm text-ink-400` `figcaption` telling you to replace it with a photograph; right: eyebrow `How we work`, `h2 The sizing is the product`, lede, then a `<dl class="mt-8 space-y-6">` of **four** `border-l-2 border-primary-600 pl-5` rows (`dt` = `We ask what runs at once`, `We ask how cold your water is`, `We check the gas line before quoting`, `We will tell you to repair it`; `dd` = `mt-1 text-ink-500`); figure measures 576 px wide |
| 6 | `#process` | white | eyebrow `How it goes`, `h2 From no hot water to hot water`, lede `Three steps, and the first one you can do on this page.`; an `<ol>` (`gap-8 sm:grid-cols-3`, ~389 px columns) of **three** `<li>`: a mono numeral (`01`…`03`, `tabular-nums`, `primary-600`) + a `h-px flex-1 bg-ink-100` rule, `h3` step name, body, and a `text-sm font-semibold text-primary-700` duration (`Two minutes`, `Same day`, `Half a day to one day`) |
| 7 | `#areas` | white | `lg:grid-cols-12` (`gap-16`): left `col-span-5` `h2 Where we work` + lede; right `col-span-7` a `grid-cols-2 sm:grid-cols-3` list of **12 towns** as `border-b border-ink-100 py-2.5` rows: Richmond, Henrico, Chesterfield, Glen Allen, Midlothian, Short Pump, Mechanicsville, Ashland, Bon Air, Sandston, Chester, Powhatan + a replace-me footnote |
| 8 | `#testimonials` | **`bg-gray-50`**, `py-20 lg:py-28` | centred pill eyebrow `Reviews`, `h2 What people say afterwards`, sample-data lede; **3-slide carousel** (`[data-carousel]`): `rounded-2xl bg-white p-8 shadow-soft` cards (measured 381×348 at 1440, 334×404 at 390) with 5 **`primary-400`** stars, an 18 px `font-medium` quote, a 48 px `bg-primary-100 text-primary-600` initial disc + name + town; round arrows at `-left-4`/`-right-4` and a `[data-carousel-dots]` div the kit fills |
| 9 | `#faq` | white, `py-20 lg:py-28` | pill eyebrow `Questions`, `h2 Before you buy`, lede; `divide-y divide-gray-200` list of **five** rows inside `max-w-3xl` (768 px): full-width `button` + `py-6` + 18 px semibold question + a 32 px `rounded-full bg-gray-100 text-gray-600` plus-icon disc that rotates 45° when open, and a `max-height:0` panel |
| 10 | `#contact` | **`bg-primary-700` `#8d4e12`**, `py-28` (112 px) | centred white `h2 Not sure what size you need?` (36 px), `text-primary-100` lede (`Four questions on this page and you will have both answers, tank and tankless.`), then a **white** solid `Size mine` + a `border-2 border-white/40` ghost `Call (555) 090-0900` with a phone glyph. Flat brand band — no gradient, no blobs |
| — | `footer` | **`bg-gray-900` `#111827`**, `text-gray-300`, `pt-16 lg:pt-24` (96 px measured) | 12-col grid: brand block `col-span-4` (`logo-light.svg` 40 px, blurb, **three** `rounded-lg bg-gray-800 p-2.5` 40 px social tiles — Twitter / Instagram / LinkedIn, address `1815 West Broad Street, Richmond, VA 23220`, phone, `office@everhotwater.example`) · a nested `sm:grid-cols-3 lg:col-span-5` block with `Services` (Tank replacement, Tankless conversion, Heat pump water heaters, Repairs), `Company` (Size mine, Tank vs tankless, Service areas, About) and `Support` (Contact, Privacy, Terms) · `Stay Updated` `col-span-3` with an email field + `Subscribe`; bottom bar `border-t border-gray-800`: `© 2026 …` + `Privacy Policy` / `Terms of Service` |
| — | `#cookie-consent` | white (`dark:gray-900`), `border-t`, `shadow-lg` | fixed bottom `role="dialog"` `aria-label="Cookie consent"`, slides up after 1.5 s, `Decline` (outline) + `Accept All` (primary) |
| — | `#back-to-top` | `primary-600` + `shadow-primary-600/25` | 48 px disc, `bottom-6 right-6`, appears past 300 px |

**On mobile the bottom edge carries two fixed layers**: the `lg:hidden` call bar (`z-40`) and the cookie
strip (`z-50`). The cookie strip is painted over the call bar until it is dismissed — copy that order.

## Behaviour the recreation must reproduce

All handlers live in the **house kit** (`Base…BLoalVWc.js`, 16,233 B, the same hash as the Aquifer,
Plantroom, Veranda, Stoke and Closeknit reads); only `applyTheme`, the preloader removal, the JSON-LD
block and **the sizing tool** are page-local. The page wires **14 `data-animate` elements** and the hooks
in §Data-attribute inventory — it uses *none* of the kit's typewriter, counter, parallax, video, lightbox,
billing or blog-filter branches, so those must not be invented into the build.

1. **Reveal on scroll** (`[data-animate]`, 14 elements, 12 delays 100–300 ms) — `fade-in-up`, skipped
   entirely under `prefers-reduced-motion: reduce`; elements start at `opacity:0`, `translateY(20px)`,
   `.6s ease-out`, revealed once at `threshold .1` / `rootMargin 0 0 -10%`.
   **There is no `[data-animate]` rule in the sheet**, so a DOM read alone shows the content plainly —
   the start state is applied by the kit at runtime. Do not conclude the design has no reveal.
2. **Header shadow** past `scrollY > 50`; mobile disclosure with `aria-expanded` + glyph swap
   (hamburger ↔ close) and `hidden` on the panel.
3. **Scroll spy** — five of the six `[data-nav-link]` values are route paths (`/tank-vs-tankless`,
   `/services`, `/service-areas`, `/about`, `/contact`) and **one is a real band id** (`size`). So unlike
   its siblings, this page's spy has one live target out of six. The recreation maps all six labels onto
   bands (Requirement 16) and runs the spy against those ids — that is the one behavioural place where it
   is *better* than the reference.
4. **Carousel** (`[data-carousel]`) — per-view **3 ≥1024 px, 2 ≥640 px, 1 below**; each slide's width is
   `track.parentElement.offsetWidth / perView`; advances every **5 s**, wrapping; paused on `mouseenter`,
   resumed on `mouseleave`; dots are `h-2.5 w-8 bg-primary-600` when active and `w-2.5 bg-gray-300`
   otherwise, one per page. Arrows are `hidden lg:flex`, so below `lg` the carousel is **swipe/dot only**.
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
   recorded above so the decision is reversible.
10. **Emergency ping** — the `#emergency` dot is two stacked spans, the outer `animate-ping`
    (`opacity-60`) behind a static 8 px dot; it is the only looping animation on the page besides the
    preloader and it must stop under `prefers-reduced-motion`.
11. **Chrome**: preloader removed 300 ms after `load`; smooth in-page scrolling with a header offset for
    `a[href^="#"]`.
12. **Forms — the reference's quote and newsletter forms are inert.** The quote form is `<form
    action="#" method="post" data-form>` and the footer newsletter is `<form data-newsletter-form>`; the
    kit only binds `form[data-validate]`, which **neither** uses (`grep -c 'data-validate'` = 0 on the
    page), so a submit navigates to `/#` with no validation. The recreation must wire both forms itself
    (Requirement 5): required + phone/email checks on submit and on blur, inline error text, a reset on
    success, and the kit's own toast (`bg-green-600` / `bg-red-600`, `top-6 right-6`,
    `translateX(120%)` → 0, auto-dismissed after 4 s) — no network call, no navigation.

### The sizing tool — the page's actual product (inline script, 3,554 B; reproduce exactly)

This is the one interactive component that is **not** in the house kit, and it is the reason the design
exists. It must be reimplemented as React state with the same arithmetic, the same defaults and the same
copy. Reference code, in full:

```js
const targetTemp = 120;                       // fixed, not an input
gpm     = Σ data-gpm     of checked  input[name="fixture"]
gallons = Σ data-gallons of checked  input[name="fixture"]
incoming = data-incoming of checked input[name="climate"]  || 55   // default when none checked
rise    = targetTemp - incoming
people  = Number(checked input[name="people"]?.value) || 4         // default 4
if (gpm === 0) → gpm "—" / rise "Pick at least one fixture." / tank "—" / note "" /
                 verdict "Choose what might run at once and we will size both options."; return
gpmOut   = gpm.toFixed(1) + " gpm"
riseOut  = "At a " + rise + " degree rise, which is what a unit has to deliver in your coldest month."
peakHour = Math.round(gallons + people * 3)
tank     = peakHour <= 70 ? 40 : peakHour <= 85 ? 50 : peakHour <= 105 ? 65 : 80
tankOut  = tank + " gallon"
tankNote = "Covers about " + peakHour + " gallons in your busiest hour. Sized on that, not on the tank you have now."
verdict  = rise >= 70 && gpm >= 5 ? "At this flow and this cold an incoming supply, a single tankless unit will struggle. Either a tank, or two tankless units in parallel. Anybody quoting one unit here has not asked about your groundwater."
         : gpm <= 3.5            ? "Either works. Tankless suits you if you want endless hot water and have the gas line or electrical capacity for it; a tank is cheaper to fit and simpler to replace."
         :                         "Tankless is a reasonable fit at this flow, provided the gas supply and venting are right. We check both before quoting rather than after."
```

The fixtures and their data (order matters — it is the chip order):

| chip label | `value` | `data-gpm` | `data-gallons` | checked in the reference |
| --- | --- | ---: | ---: | --- |
| `Shower` | `shower` | 2 | 20 | **yes** |
| `Second shower` | `shower2` | 2 | 20 | **yes** |
| `Filling a bath` | `bath` | 4 | 30 | no |
| `Kitchen sink` | `kitchen` | 1.5 | 4 | no |
| `Dishwasher` | `dishwasher` | 1.5 | 6 | no |
| `Washing machine` | `laundry` | 2 | 7 | no |

Climate radios: `Mild winter` `62°F` (`62`), `Virginia average` `52°F` (`52`, **checked**), `Hard winter`
`42°F` (`42`). People radios: `1`…`5`, `6+` (`value="6"`, label `6+`), **none checked** in the reference —
so the 4-person default is what a first-time visitor gets. `render()` runs once on init and on every
`change`.

**Measured initial render at 1440 (defaults: both showers on, Virginia average, 4 people):**
`4.0 gpm`, `At a 68 degree rise, …`, `40 gallon`, `Covers about 52 gallons in your busiest hour. …`,
verdict = the "reasonable fit" sentence (because 68 < 70, so the first branch is false and 4.0 > 3.5).
Use these five strings as the first test fixture — they are a checksum of the whole formula.

⚠️ **Copy trap:** the tankless headline above the number is `If you go tankless` and its unit is **gpm**;
the tank headline is `If you stay with a tank` and its unit is **gallon**. The verdict is the page's
honesty device — do not soften it into marketing copy.

### Data-attribute inventory (measured on the live page)

| hook | count | what it drives |
| --- | ---: | --- |
| `data-animate` (12 with `data-delay`) | 14 | reveal |
| `data-nav-link` | 6 | scroll-spy (**one** real band id `size`, five route paths) |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | exclusive accordion |
| `data-phone` | 5 | `tel:` links (header pill, mobile panel, emergency pill, sticky bar, closing band) |
| `data-carousel` / `-track` / `-slide` / `-prev` / `-next` / `-dots` | 1 / 1 / 3 / 1 / 1 / 1 | testimonials |
| `data-header`, `data-mobile-toggle`, `data-mobile-menu`, `data-dark-toggle` | 1 each | sticky chrome |
| `data-sizeit` / `data-sizeit-form` | 1 / 1 | the sizing tool's root + form |
| `data-gpm` / `data-gallons` | 6 / 6 | the six fixture chips (use `data-gpm`, not `data-flow` — a rename silently zeroes the sum) |
| `data-incoming` | 3 | the three climate radios |
| `data-gpm-out` / `data-rise-out` / `data-tank-out` / `data-tank-note` / `data-verdict` | 1 each | the five output slots, both numbers carrying `aria-live="polite"` |
| `data-licence-bar`, `data-emergency`, `data-sticky-call`, `data-form`, `data-newsletter-form`, `data-cookie-accept`, `data-cookie-decline` | 1 each | the page-specific pieces |

`data-counter`, `data-typewriter`, `data-parallax`, `data-video-modal`, `data-lightbox`,
`data-billing-toggle`, `data-blog-*`, `data-accordion-toggle`, `data-validate` are **absent** even though
the shared kit supports them.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **44 anchors** over **15 distinct `href` values** (counted in the DOM, not
eyeballed; the 47 `href` attributes in the source include three `<link>`s: the stylesheet, the favicon and
a `dns-prefetch`):

| count | href | kind |
| ---: | --- | --- |
| 6 | `/theme/everhot/#size` | the header CTA, the mobile-panel CTA, the nav's first link, the closing band's solid CTA, … — all resolve to the sizing band, which exists |
| 6 | `/theme/everhot/services` | live route → `200` (49,299 B) — header, mobile menu, footer service links |
| 5 | `tel:5550900900` | valid — the header pill, the mobile panel, the emergency pill, the sticky bar, the closing band |
| 4 | `/theme/everhot/contact` | live route → `200` (40,722 B) — header, mobile menu, the sizing panel's CTA, footer |
| 3 | `/theme/everhot/tank-vs-tankless` | live route → `200` (47,974 B) |
| 3 | `/theme/everhot/service-areas` | live route → `200` (39,810 B) |
| 3 | `/theme/everhot/about` | live route → `200` (42,369 B) |
| 3 | `#` | **dead** — the three footer social tiles (Twitter / Instagram / LinkedIn) |
| 2 | `/theme/everhot/` | the wordmark (header + footer), a no-op self-link |
| 2 | `#service-areas` | **broken fragment** — the band id is `areas`, and `grep -c 'id="service-areas"'` = **0** (header location pill + its mobile twin) |
| 2 | `/theme/everhot/privacy` | live route → `200` (42,820 B) |
| 2 | `/theme/everhot/terms` | live route → `200` (41,629 B) |
| 1 | `#main-content` | skip link → exists |
| 1 | `tel:(555) 090-0900` | **malformed** `tel:` (spaces, parentheses) — the footer's copy |
| 1 | `mailto:office@everhotwater.example` | `.example` placeholder mailbox |

**Inner-page inventory (all live; the bare path `308`s, the trailing-slash path `200`s — follow
redirects):**

| page | bytes | `<title>` | `<h1>` |
| --- | ---: | --- | --- |
| `services/` | 49,299 | Water heater services in Richmond \| Everhot Water Heaters | One product, done properly |
| `tank-vs-tankless/` | 47,974 | Tank or tankless water heater \| Everhot Water Heaters | Neither one is simply better |
| `about/` | 42,369 | About Everhot Water Heaters \| Everhot Water Heaters | About Everhot Water Heaters |
| `privacy/` | 42,820 | Privacy Policy \| Everhot Water Heaters | Privacy Policy |
| `terms/` | 41,629 | Terms of Service \| Everhot Water Heaters | Terms of Service |
| `contact/` | 40,722 | Contact Everhot Water Heaters \| Everhot Water Heaters | Contact Everhot Water Heaters |
| `service-areas/` | 39,810 | Water heater service areas around Richmond \| Everhot Water Heaters | Greater Richmond |
| `elements/` | 9 | — | **404** (no style-guide page) |

The multi-page shell is the authoritative reference for the copy the single-page recreation folds in:
`/tank-vs-tankless` carries *Neither one is simply better* (the why-us band's four rows summarise it),
`/services` carries *One product, done properly* (the six options grid is its price table), and
`/service-areas` carries *Greater Richmond* (the twelve-town list). **The recreation does not rebuild
those pages.**

## Class census (no phantom-class delta)

The page uses **354 distinct class tokens** (461 `class` attributes) and **every one compiles** to a rule
in `Base.JYuhjam6.css`. One token looks missing to a naive `.token{` grep — `2xl:block`, which Tailwind
escapes as `.\32 xl\:block` (a leading-digit escape) — and it is present. There is therefore **no
phantom-class delta** to floor into this spec.

⚠️ Three traps when re-running this census:

1. Variants are escaped in the sheet (`sm\:grid-cols-3`, `bg-white\/90`, `peer-checked\:bg-primary-400`).
2. `dark:` utilities compile as `:is(.dark *)` suffixes, so a `.token{` search misses them entirely.
3. Breakpoints ship as `@media (width>=40rem)` (not `min-width:`): 40rem `sm`, 48rem `md`, 64rem `lg`,
   80rem **`xl`** (where the nav appears), 96rem `2xl` (where the location pill appears).

## Screenshot analysis (2400×1892 JPEG, macOS-Safari window frame)

The capture is a light-mode desktop view framed in Safari chrome (traffic lights, empty address bar), so
the top ~90 px and the outer ~60 px are browser, not design. Inside it, top to bottom:

* the **near-black licence strip**: `Licence VA DPOR #0000000000` · `Gas fitting certified` ·
  `Serving Greater Richmond`, and on the right an amber star with `4.9` and
  `410+ reviews on Google (sample)`;
* the **white header**: a small orange circular mark beside the `Everhot` wordmark with a letterspaced
  `WATER HEATERS` under it, the six nav labels, a `Richmond, VA` pill with a pin glyph, a
  `(555) 090-0900` phone pill, a moon toggle, and the solid orange `Size mine`;
* the **pale warm-grey hero** (`#f7f7f7`, not white): the letterspaced orange eyebrow
  `RICHMOND · LICENSED AND GAS CERTIFIED`, a 60 px near-black headline **`Forty or fifty gallon`** whose
  next sentence **`is the wrong question.`** is solid brand orange and wraps onto its own two lines, the
  three-line grey lede, five amber stars + `4.9` + `410+ reviews on Google · sample data`, then a
  **2×2 checklist with orange ticks** (`Sized on simultaneous demand, not on square footage`,
  `Incoming water temperature actually accounted for`, `Common sizes on the truck for same-day swaps`,
  `We will tell you when a repair is the better answer`);
* the **white quote card** on the right, floating on the grey: `Prefer to just ask?`, the
  `Three fields. We reply within the hour on weekdays.` line, three labelled fields in a single column
  (`Your name`, `Phone`, `What is going on?` with `Choose the closest match`) and a full-width orange
  button reading **`Get my answer`**, plus the tiny `No obligation. We never sell your details.` footnote;
* the **near-black sizing band**: the orange `SIZING` eyebrow, the white 36 px
  `Answer four things and we will size both options` heading wrapping over two lines, the grey lede, then
  the numbered `1.` / `2.` questions with the chip rows — **`Shower 2 gpm` and `Second shower 2 gpm` are
  painted solid orange** (the two that are checked on load), the other four are outlined; and the
  right-hand output panel showing `IF YOU GO TANKLESS` / **`4.0 gpm`** in pale orange mono,
  `At a 68 degree rise, …`, then `IF YOU STAY WITH A TANK` / **`40 gallon`** in white mono and the
  peak-hour note.

Everything below the climate chips — the people chips, the verdict, the emergency band, the six options,
the why-us figure, the towns, the carousel, the FAQ, the closing band and the footer — is **not in the
screenshot**: read those from the DOM and the sheet (which is what §Reference document order and the
design notes do). The screenshot is authoritative for three things: the licence-strip composition, the
hero's vertical rhythm (eyebrow → headline → lede → rating → checklist), and the fact that the design is
**light with no photography**.

## Requirements

### Requirement 1: Page chrome (preloader, skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar at the very
top of the document, a 48 px back-to-top disc that appears past 300 px, and a cookie strip that slides
up 1.5 s after load and dismisses into component state. It SHALL NOT leave any overlay in front of the
content once the document is ready.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the document reaches `readyState === "complete"`
- **THEN** no white spinner overlay is painted at all, because the recreation never mounts one
- **AND** the page is fully readable with JavaScript disabled

#### Scenario: Visitor scrolls

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls past 300 px
- **THEN** the progress bar's width equals `scrollY / (scrollHeight - innerHeight)` as a percentage and
  the back-to-top disc fades in (`opacity 1`, `translateY(0)`, 48 px, `#ae6211`, tinted shadow)
- **AND** below 300 px the disc is `opacity: 0` with `pointer-events: none`, and activating it
  smooth-scrolls to the top

#### Scenario: Visitor answers the cookie strip on a phone

- **GIVEN** the viewport is below `lg`, so the sticky call bar is also fixed to the bottom edge
- **WHEN** the strip slides up
- **THEN** it is painted **over** the call bar (`z-50` vs `z-40`) and either `Decline` or `Accept All`
  slides it away and removes it, leaving the call bar reachable
- **AND** the choice is held in component state (no invented storage key — Deviation 3)
- **AND** the strip is a `role="dialog"` with the accessible name `Cookie consent`

### Requirement 2: Licence strip

The app SHALL render the dark credibility strip above the header with the licence number, the
certification line, the service region and the sample rating, collapsing the middle facts below `sm`.

#### Scenario: Visitor inspects the top of the page at desktop width

- **GIVEN** the page is rendered at ≥640 px
- **WHEN** the strip is inspected
- **THEN** it is 36 px tall on `#242424` with `text-xs` copy in `#ededed`, reading `Licence`
  `VA DPOR #0000000000` · `Gas fitting certified` · `Serving` `Greater Richmond` on the left, and an
  `amber-400` star, `4.9` and `410+ reviews on Google (sample)` on the right
- **AND** below `sm` only the licence pair and the rating remain, and the strip does not wrap

#### Scenario: Visitor reads the rating claim

- **GIVEN** the strip and the hero both show `4.9` / `410+ reviews`
- **WHEN** either is inspected
- **THEN** both carry an explicit sample disclosure (`(sample)` / `· sample data`) — the reference's own
  wording, which the recreation must not turn into a factual claim (Deviation 8)

### Requirement 3: Header, mobile disclosure and scroll spy

The app SHALL render a sticky translucent header with **six** nav labels from `xl`, two utility pills, a
theme control the recreation drops, and a disclosure menu below `xl`.

#### Scenario: Visitor inspects the header at desktop width

- **GIVEN** the page is rendered at ≥1280 px
- **WHEN** the header is inspected
- **THEN** it reads the wordmark, then `Size mine`, `Tank vs tankless`, `Services`, `Service areas`,
  `About`, `Contact`, then the `Richmond, VA` location pill (only ≥1536 px), the phone pill, the
  `Size mine` CTA, and the hamburger is hidden
- **AND** the bar is 81 px tall (65 px below `lg`) on `white/90` with a `backdrop-blur` and a
  `1px #ededed` bottom border, and gains `shadow-lg` past 50 px of scroll
- **AND** the nav appears at `xl` and **not** at `lg` — the reference's own markup comment records that
  between 1024 and 1279 px a six-item nav plus two pills and a CTA overlapped, so the breakpoint is
  deliberately `xl`. Do not "fix" it down to `lg`.

#### Scenario: Visitor opens the menu on a phone

- **GIVEN** the viewport is below `xl`
- **WHEN** the hamburger is activated
- **THEN** `aria-expanded` flips to `true`, the glyph becomes a close icon, and the panel shows the six
  links as full-width rows plus the phone pill, the location pill and a full-width CTA
- **AND** the panel closes on a second activation and on any link activation

#### Scenario: Scroll spy

- **GIVEN** the reference's six `data-nav-link` values are one band id (`size`) and five route paths
- **WHEN** the recreation maps the labels to bands (Requirement 16)
- **THEN** the active link is marked against the band currently in view, using the hybrid
  `rootMargin: -20% 0 -70% 0` observer
- **AND** exactly one link carries the active treatment at any scroll position, and none before the
  first band is crossed

### Requirement 4: Hero

The app SHALL render the hero as a 12-column split (7 / 5) on `#f7f7f7` with the headline's second
sentence in `#ae6211`, a sample rating line, a 2×2 tick checklist and the quote card, and **no image**.

#### Scenario: Visitor reads the hero at 1440 px

- **GIVEN** the page is rendered at 1440 px
- **WHEN** the hero is inspected
- **THEN** the eyebrow reads `Richmond · Licensed and gas certified` in 14 px `#8d4e12` uppercase with
  0.35 px tracking, the `h1` measures **60 px / 66 px / −1.5 px** in `#242424`, and its second sentence
  `is the wrong question.` is `#ae6211`
- **AND** the lede is 18 px / 28 px in `#636363`, the rating line shows five `amber-400` stars, `4.9` and
  `410+ reviews on Google · sample data`, and the checklist is two columns of two with `#ae6211` ticks
- **AND** the left column carries `lg:pt-6` so it sits 24 px below the card's top edge, the section pad is
  80 px top and bottom, and the section measures ~670 px tall
- **AND** the headline's line breaks are not forced — the reference wraps after `gallon` at 1440 by
  measure, not by `<br>`

#### Scenario: Visitor reads the hero on a phone

- **GIVEN** the viewport is 390 px
- **WHEN** the hero is inspected
- **THEN** the `h1` measures **36 px**, the checklist is a single column, the quote card stacks below the
  copy at **358×510** with 24 px padding, and the fixed call bar covers the bottom **97 px** — the page's
  last element must not hide behind it

### Requirement 5: Quote card

The app SHALL render the quote card with the reference's three fields and validate them locally on
submit and on blur, confirming with the kit's toast. Nothing SHALL be sent anywhere.

#### Scenario: Visitor submits an incomplete form

- **GIVEN** the card's fields are `Your name`, `Phone` and `What is going on?` (a select whose first
  option is `Choose the closest match` and whose other **six** options are `No hot water at all`,
  `Running out too quickly`, `The tank is leaking`, `It is old and I want to plan`,
  `Thinking about tankless`, `Rusty or smelly hot water`)
- **WHEN** `Get my answer` is activated with any field empty
- **THEN** each empty field shows an inline error, carries `aria-invalid="true"` and an
  `aria-describedby` that names its message, and the first invalid field receives focus
- **AND** nothing navigates and no request is made

#### Scenario: Visitor submits a complete form

- **GIVEN** a name, a phone number of at least ten digits and one problem option
- **WHEN** the form is submitted
- **THEN** the fields reset, the success toast appears in the kit's green (`#16a34a`-family) at
  `top-6 right-6`, and it auto-dismisses after 4 s
- **AND** the card keeps its `rounded-2xl` 16 px radius, `1px #ededed` border, 32 px padding and
  `shadow-md`, and its footnote `No obligation. We never sell your details.` stays in 12 px `#858585`

### Requirement 6: The sizing tool

The app SHALL render the near-black sizing band with three chip groups, a live two-answer output panel
and the verdict, reproducing the reference's arithmetic exactly (see §The sizing tool) in React state,
with no page reload and no request.

#### Scenario: Visitor lands on the band with the reference's defaults

- **GIVEN** `Shower` and `Second shower` are checked, `Virginia average` is checked, no people chip is
  checked (default 4), and `targetTemp` is a constant 120
- **WHEN** the band first renders
- **THEN** the tankless slot reads `4.0 gpm`, the rise line reads
  `At a 68 degree rise, which is what a unit has to deliver in your coldest month.`, the tank slot reads
  `40 gallon`, the note reads
  `Covers about 52 gallons in your busiest hour. Sized on that, not on the tank you have now.`, and the
  verdict reads `Tankless is a reasonable fit at this flow, provided the gas supply and venting are right. We check both before quoting rather than after.`
- **AND** the two checked chips are painted `#e99c31` with `#161616` labels, the four unchecked chips are
  `border-white/20` with `text-white/70`, every chip is `rounded-full` with `px-4 py-2`, and its unit
  suffix (`2 gpm`, `62°F`) is 12 px JetBrains Mono at 70 % opacity

#### Scenario: Visitor changes the inputs

- **GIVEN** the band is rendered
- **WHEN** a fixture is unchecked, a different climate is chosen, or a people chip is picked
- **THEN** the tankless gpm, the rise sentence, the tank volume, the peak-hour note and the verdict all
  recompute on the same change event, with no debounce and no submit
- **AND** the tank volume follows `≤70 → 40`, `≤85 → 50`, `≤105 → 65`, else `80` gallons, and the verdict
  follows `rise ≥ 70 && gpm ≥ 5` → the "will struggle" sentence, else `gpm ≤ 3.5` → the "either works"
  sentence, else the "reasonable fit" sentence
- **AND** both numbers carry `aria-live="polite"` so a screen reader hears the new answer

#### Scenario: Visitor unchecks every fixture

- **GIVEN** no fixture is checked
- **WHEN** the band renders
- **THEN** the tankless slot reads `—`, the rise line reads `Pick at least one fixture.`, the tank slot
  reads `—`, the note is empty, and the verdict reads
  `Choose what might run at once and we will size both options.`
- **AND** nothing throws, and the first fixture can be re-checked to recover

#### Scenario: The panel is inspected

- **GIVEN** the band is rendered at ≥1024 px
- **WHEN** the output panel is inspected
- **THEN** the ground is `#161616` with the panel on `bg-white/5` at 16 px radius and 32 px padding, the
  two headlines are 12 px uppercase `text-white/40`, the tankless number is 36 px JetBrains Mono in
  `#f6bb63`, the tank number is 36 px JetBrains Mono in white, and the verdict box is 8 px radius with a
  `border-primary-400/40` ring on `bg-primary-400/10` in `#ffedd0`
- **AND** the panel ends with `Get a fixed quote` (`.btn-primary`, full width) and the band ends with the
  `Illustrative sizing for demonstration. …` footnote in 14 px `text-white/35`
- **AND** below `lg` the form and the panel stack, panel after form

### Requirement 7: Emergency band and the mobile call bar

The app SHALL render the thin orange band with a pinging status dot, the emergency headline, the shut-off
advice and a white phone pill, plus a `lg`-only sticky call bar.

#### Scenario: Visitor reads the band

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#emergency` is inspected
- **THEN** its ground is `#ae6211` with white copy, its container pads 32 px vertically, and it reads a
  **pinging 8 px dot** + `No hot water, or a leaking tank?` in 14 px uppercase `opacity-90`, then
  `A leaking tank is a same-day call. We carry the common sizes on the truck.` in 18/20 px bold, then the
  `text-sm opacity-90` paragraph about water coming from the tank itself
- **AND** the right-hand pill is `rounded-full`, white, 18 px bold in `#8d4e12`, 24/12 px, and dials
  `tel:5550900900`

#### Scenario: Visitor loads the page on a phone

- **GIVEN** the viewport is below `lg`
- **WHEN** the page has finished loading
- **THEN** a fixed `z-40` white bar with a `1px #dadada` top border and 12 px padding sits at the bottom,
  holding one full-width `rounded-full` `#ae6211` pill that reads
  `No hot water, or a leaking tank? · (555) 090-0900` and dials the same number
- **AND** the bar is 97 px tall, is not rendered at or above `lg`, and the ping animation is disabled
  under `prefers-reduced-motion: reduce`

### Requirement 8: Options grid

The app SHALL render the six options as a single hairline-bordered block divided into six cells, each with
a price line.

#### Scenario: Visitor reads the grid

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#options` is inspected
- **THEN** the block is `rounded-2xl`, `1px #ededed` bordered, filled `#ededed`, split by 1 px gaps into
  three columns (measured 404 px each, 232 px tall) of white cells padded 32 px
- **AND** the six cells appear in the reference order with their price lines — `Tank, replaced like for
  like` `From $1,450 installed`, `Tank, upsized` `From $1,750 installed`, `Heat pump water heater`
  `From $2,900 installed`, `Tankless, gas` `From $3,600 installed`, `Tankless, electric`
  `From $2,200 installed`, `Repair rather than replace` `From $180` — the price in 14 px bold `#8d4e12`
- **AND** the band carries the reference's footnote that the starting prices are sample data
- **AND** at `sm` the grid is two columns and below `sm` one, and the blurb blocks are `flex-1` so all
  price lines sit on the same baseline within a row

### Requirement 9: Why-us band and the flow panel

The app SHALL render the four sizing questions as a definition list with 2 px brand rules beside a figure
whose SVG is redrawn from the reference's geometry.

#### Scenario: Visitor reads the band

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#why-us` is inspected
- **THEN** the ground is `#f7f7f7`, the figure is the left column, and the right column reads the
  eyebrow `How we work`, `The sizing is the product`, the lede
  `Anybody can carry a tank up your stairs. What you are paying for is that it is the right one.`, then
  four rows (`We ask what runs at once`, `We ask how cold your water is`,
  `We check the gas line before quoting`, `We will tell you to repair it`) each with a `border-l-2`
  `#ae6211` left rule, 20 px of left padding, a 16 px bold `dt` and a `#636363` `dd`
- **AND** the figure measures 576 px wide, carries `rounded-2xl` and a `text-sm #858585` caption reading
  `Replace with a photograph of your own installation work before launch.`
- **AND** below `lg` the figure moves **after** the copy (`order-last`), which is the reference's order

#### Scenario: The figure is inspected for provenance

- **GIVEN** the reference ships a 1,739 B `flow-panel.svg` (800×600)
- **WHEN** the implementation is reviewed
- **THEN** the panel is redrawn as an inline React SVG — a `#161616` ground, a `#242424` inner card at
  24 px radius, three labelled orange bars with their gpm values, and a `#373737` divider — with no
  copied paths, and no file from the preview is downloaded at runtime
- **AND** the drawing carries `role="img"` with an accessible name, and its inner text is `aria-hidden`

### Requirement 10: Three steps

The app SHALL render the process as a numbered three-column list whose numerals are JetBrains Mono with
hairline rules, each with a duration label.

#### Scenario: Visitor reads the band

- **GIVEN** the page is rendered at ≥640 px
- **WHEN** `#process` is inspected
- **THEN** the eyebrow reads `How it goes`, the `h2` reads `From no hot water to hot water` at 36 px, and
  the lede sits in 18 px `#636363`
- **AND** the list is an `<ol>` in three columns with 24 px gaps whose three items appear in the reference
  order — `Size it` (`Two minutes`), `Fixed quote, including the awkward bits` (`Same day`), `We fit it`
  (`Half a day to one day`) — each headed by a mono numeral `01`…`03` in `#ae6211` followed by a 1 px
  `#ededed` rule that stretches to the column's end
- **AND** each item's duration label is 14 px 600 `#8d4e12`, and below `sm` the list is one column

### Requirement 11: Service areas

The app SHALL render the twelve towns as a hairline list beside the band's heading.

#### Scenario: Visitor reads the band

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#areas` is inspected
- **THEN** the heading column takes 5 of 12 columns and the list 7, separated by 64 px
- **AND** the list is two columns below `sm`, three from `sm`, and reads Richmond, Henrico, Chesterfield,
  Glen Allen, Midlothian, Short Pump, Mechanicsville, Ashland, Bon Air, Sandston, Chester, Powhatan in
  that order, each a `border-b #ededed` row with 10 px vertical padding in `#373737`
- **AND** the replace-me footnote is present

### Requirement 12: Testimonials carousel

The app SHALL render the three reviews in the kit's carousel with 3 / 2 / 1 per view.

#### Scenario: Visitor reads the band at desktop width

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#testimonials` is inspected
- **THEN** the ground is `#f9fafb`, the header block is centred, the pill eyebrow reads `Reviews` on
  `#ffedd0` in `#8d4e12`, and the band renders a **three-up row with no visible dots** (one page at this
  width) while both arrows are `display:flex`
- **AND** each card is `rounded-2xl` white with 32 px padding, `0 4px 16px -4px #0000001a` shadow, five
  20 px `#e99c31` stars, an 18 px `font-medium` quote, and a 48 px `#ffedd0` initials disc in `#ae6211`
  with the name and the town
- **AND** the three quotes and their attributions (`Trevor B.` / Church Hill, `Shanice D.` / Midlothian,
  `Aled M.` / Glen Allen) are the reference's, and the sample-data disclaimer is kept

#### Scenario: Visitor reads the band on a phone

- **GIVEN** the viewport is 390 px
- **WHEN** the carousel is inspected
- **THEN** one slide fills the track at 334 px wide, dots are generated (`w-8` `#ae6211` for the active
  one, `w-2.5 #d1d5db` otherwise), and **both arrows are hidden** (`hidden lg:flex` — the reference has no
  arrow below `lg`, so the dots and swipe are the only controls)
- **AND** the slide advances every 5 s, paused while the pointer is over the track, and no auto-advance
  runs under `prefers-reduced-motion: reduce`

### Requirement 13: FAQ accordion (exclusive)

The app SHALL render the five buying questions as an exclusive accordion with a rotating plus disc.

#### Scenario: Visitor opens a question

- **GIVEN** the five questions `Is tankless worth it?`, `How long should a water heater last?`,
  `My tank is leaking. Can it be repaired?`, `What is an expansion tank and do I need one?`,
  `Why is one quote so much cheaper?`
- **WHEN** one is activated
- **THEN** its panel expands to its scroll height with `opacity 1` while every other panel collapses to
  `max-height: 0`, and its 32 px `#f3f4f6` disc rotates 45° while the others return to 0°
- **AND** the button carries `aria-expanded` and `aria-controls`, the panel is the controlled region, and
  the rows are separated by 1 px `#e5e7eb` rules inside a `max-w-3xl` (768 px) column

### Requirement 14: Closing band

The app SHALL render the closing call to action as a flat `#8d4e12` band with a solid and a ghost button.

#### Scenario: Visitor reaches the end of the page

- **GIVEN** the page is rendered at any width
- **WHEN** `#contact` is inspected
- **THEN** the ground is `#8d4e12` and the section pads 112 px vertically, the heading
  `Not sure what size you need?` is 36 px white and centred, and the lede is 18 px `#ffedd0`
- **AND** the solid button is white on 32/16 px padding with 16 px bold `#8d4e12` label, the ghost is
  `border-2 border-white/40` with a phone glyph, both are `rounded-lg`, and there is no gradient, dot grid
  or image in the band

### Requirement 15: Footer

The app SHALL render the four-part footer on `#111827` with a working newsletter field and the house
provenance link.

#### Scenario: Visitor inspects the footer

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** the footer is inspected
- **THEN** the 12-column grid reads a brand block across 4 columns (light wordmark at 40 px, the
  `Water heater replacement and tankless conversion in Richmond…` blurb in `#9ca3af`, three 40 px
  `#1f2937` social tiles for Twitter / Instagram / LinkedIn, then the address
  `1815 West Broad Street, Richmond, VA 23220`, the phone and `office@kettle.example`), a three-column
  block across 5 columns headed `Services`, `Company`, `Support`, and a `Stay Updated` column across 3
  columns with an email field on `#1f2937` with a `#374151` border and a `Subscribe` button
- **AND** the column heads are 14 px uppercase `tracking-wider` white, the links `#9ca3af` at 16 px, and
  the bottom bar is separated by a `1px #1f2937` rule carrying `© 2026`, `Privacy Policy`,
  `Terms of Service`, **and a `Component Dock` link to `https://www.componentdock.com/`** (house rule; the
  reference has no such link)

#### Scenario: Visitor subscribes

- **GIVEN** the newsletter field is empty or invalid
- **WHEN** `Subscribe` is activated
- **THEN** the field shows the same inline error treatment as the quote form and nothing navigates
- **AND** with a valid address the field clears and the success toast appears — the reference's newsletter
  form is inert (Deviation 5)

### Requirement 16: Navigation mapping (single page)

The app SHALL resolve the reference's six nav labels and its route links against bands that exist on the
page, and SHALL NOT introduce a band the landing page does not have.

#### Scenario: Visitor uses the navigation

- **GIVEN** the header is rendered at a desktop width
- **WHEN** each nav item is followed
- **THEN** `Size mine` targets the sizing band (the reference already does this — it is the one live band
  id in its nav), `Tank vs tankless` targets the options band (the *honest version* argument lives there),
  `Services` targets the three-steps band, `Service areas` the areas band, `About` the why-us band and
  `Contact` the closing band
- **AND** the location pill targets the areas band (the reference's `#service-areas` fragment is broken —
  Deviation 6), the phone pills dial the footer number, the hero card stays the quote target for the
  `Get a fixed quote` CTA's sibling paths, and every target id exists
- **AND** no anchor is left pointing at `#`, and in-page links offset by `header.offsetHeight + 20`

### Requirement 17: Accessibility and provenance

The app SHALL meet the house accessibility baseline and SHALL NOT reference the source design anywhere in
`apps/kettle`.

#### Scenario: Keyboard and screen-reader use

- **GIVEN** a keyboard-only visitor
- **WHEN** they tab from the top
- **THEN** the first stop is the skip link, and the disclosure, the sizing chips, the carousel, the FAQ
  rows, both forms and the sticky call bar are operable from the keyboard with a visible focus ring
  against every ground (including `#ae6211`, `#8d4e12`, `#161616` and `#111827`)
- **AND** the chip inputs stay focusable even though they are `sr-only` (the reference's pattern is a
  visually hidden input plus a styled sibling driven by `peer-checked` and `peer-focus-visible`); the
  recreation must keep an operable radio/checkbox and paint `:focus-visible` on the sibling
- **AND** `role="dialog"` is set on the cookie strip only, `aria-expanded` on the menu and the FAQ
  buttons, `aria-live="polite"` on both sizing numbers, `aria-invalid` + `aria-describedby` on invalid
  fields, the live dot is `aria-hidden`, and every decorative glyph (stars, ticks, phone, arrows) is
  `aria-hidden` while the flow panel keeps `role="img"` and a name
- **AND** no text sits below 4.5:1 against its ground — the pairs the design uses are white on `#ae6211`,
  white on `#8d4e12`, `#242424`/`#636363` on `#f7f7f7`, `#ae6211` on white, `#8d4e12` on `#ffedd0` and
  `#9ca3af` on `#111827`; **the sizing band's `text-white/45` hints and `text-white/35` footnote, and the
  closing band's `#ffedd0` lede, are the three to check first** (the reference's own `white/35` on
  `#161616` is borderline — raise it if the check fails and note the deviation)

#### Scenario: Provenance audit

- **GIVEN** the implementation is complete
- **WHEN** `grep -ril "colorlib" apps/kettle` runs
- **THEN** it prints nothing
- **AND** no file contains the source brand (`Everhot`, `Everhot Water Heaters`), its
  `office@everhotwater.example` mailbox, its wordmark SVGs, its `flow-panel.svg` or its stylesheet; the
  wordmark and the panel are redrawn from the documented geometry, and the footer links
  `https://www.componentdock.com/`

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is an eight-route Astro site (`/services`,
   `/tank-vs-tankless`, `/service-areas`, `/about`, `/contact`, `/privacy`, `/terms` and `/`, all live;
   `/elements` is a 404 — see §Link and destination census). The recreation is the single landing page
   described here. Route links become in-page fragments per Requirement 16. **The tank-vs-tankless route
   is the one real loss**: it carries the long-form argument the options band compresses into six cells
   and one lede. Record that in the PR rather than inventing a comparison table the reference does not
   have.
2. **Dark mode dropped.** The source compiles a complete dark palette (`dark:` on most utilities), a
   `localStorage` toggle and an `applyTheme()` boot script. The recreation is light-only (house
   convention) and drops the toggle, so the header cluster is the two pills plus the CTA. Every dark
   value measured is recorded above so the decision is reversible.
3. **Cookie persistence.** The source stores `cookie-consent` in `localStorage`; the recreation keeps the
   dismissed state in component state so no test depends on an invented storage key.
4. **Copy and identity re-branded.** Kettle replaces the source brand everywhere: the wordmark (redrawn
   from the same idea — an orange mark beside `Kettle` in Manrope 700 with a letterspaced `WATER HEATERS`
   in JetBrains Mono), the `© 2026` line, the mailbox (`office@kettle.example`), the document title, the
   OG/meta set and every URL. The fictional Richmond address, the `(555) 090-0900` numbers, the
   `VA DPOR #0000000000` licence string, the town list, the prices and the testimonial names are kept —
   they are already fictional and they are the page's content.
5. **The inert forms are wired.** Both reference forms (`data-form`, `data-newsletter-form`) bind to no
   handler at all, so submit navigates to `/#` with no validation. The recreation validates locally and
   confirms with the kit's own toast. Nothing is sent anywhere; if the implementer prefers a real
   endpoint, that is a product decision and must be noted in the PR.
6. **`#service-areas` fragment repaired.** Two anchors (the header location pill and its mobile twin)
   point at `#service-areas`, an id the landing page does not have; its band id is `areas`. The recreation
   points them at the band that exists (Requirement 16).
7. **Reference defects not reproduced.** The three `href="#"` social tiles get real external hrefs with
   `rel="noreferrer"`; the footer's malformed `tel:(555) 090-0900` becomes `tel:5550900900`; the
   `.example` mailbox stays `.example` (it must never resolve); `og-image.jpg` (a `404` on the reference)
   is generated for the app or dropped from the meta set; and the **JSON-LD block is not copied** — the
   reference emits the same corrupt one as its siblings (`"@context":"https://***@type"`, a slider that
   rewrote `schema.org`), so the app writes its own `LocalBusiness`-style block or omits it.
8. **Sample-data disclosures are kept and strengthened.** The reference labels its rating
   `(sample)` / `· sample data`, its reviews `Sample reviews for demonstration…`, its prices
   `Starting prices are sample data for demonstration.` and the sizing tool
   `Illustrative sizing for demonstration.` The recreation keeps those strings verbatim — they are the
   honest part of the design and removing them would turn a template into a false claim.
9. **Accessibility attributes added.** The reference's FAQ buttons have no `aria-expanded`, its panels no
   `aria-controls`, its carousel arrows have labels but no live region, and its form errors never render.
   The recreation adds them, plus a visible focus ring on all four dark/saturated grounds. The sizing
   numbers already carry `aria-live="polite"` in the reference — keep it.
10. **The flow panel is redrawn, not copied.** The source ships a 1,739 B `flow-panel.svg`. The recreation
    reimplements the same panel as an inline React SVG using the measured geometry and palette above.
    Nothing is downloaded from the preview at runtime.
11. **Scroll-spy actually works.** Five of the reference's six `data-nav-link` values are route paths, so
    only `Size mine` ever activates. The recreation maps all six labels to bands and runs the same
    observer, so the header highlights the current band — the one place the build deliberately improves on
    the reference. Document it in the PR so it is not mistaken for a fidelity miss.
12. **The sizing tool moves from a page script to React state.** The reference computes on `change` with
    `document.querySelector` and writes `textContent` into five slots. The recreation derives the same five
    values during render from form state — which also means the initial values are correct with JavaScript
    disabled only in the sense that they must not be rendered as empty placeholders; render the default
    answer server-side-equivalent (i.e. as the initial React state), not `—`. This is the one component
    the TDD cycle must pin with the reference's exact strings (Requirement 6).

## Verification checklist

- [x] Spec validates: `openspec validate template-kettle --type spec` prints
      `Specification 'template-kettle' is valid`
- [x] `apps/kettle` scaffolded from the simplest existing app, package renamed
      `@free-react-templates/kettle`, `public/CNAME` = `kettle.free.componentdock.com`, `homepage` =
      `https://kettle.free.componentdock.com`
- [x] Tokens: `primary` `#fff8ec` → `#8d4e12` with **`#ae6211`** as the brand and `#8d4e12` as its
      hover/ground, `ink` `#f7f7f7` → `#161616`, stock `gray` 50–900 for the footer and the
      testimonial/FAQ bands, `amber-400` for the licence star and **`primary-400` `#e99c31`** for the
      testimonial stars and the selected chips; radii 8/16 px; `shadow-soft` `0 4px 16px -4px #0000001a`
- [x] Fonts: **Manrope 400–800** and **JetBrains Mono 500/700** via two `<link>`s; `tabular-nums` on both
      sizing numbers and on the `01`–`03` numerals; no third family
- [x] `.section` (80 → 112 px at `lg`) / `.btn` / `.btn-primary` / `.nav-active` reproduced; the **ping**
      dot and the **spin** preloader are the only keyframes used — no float, no typewriter, no counter
- [x] Licence strip: 36 px `#242424`, licence number + certification + region + `4.9`/`410+ (sample)`
      rating, two middle facts hidden below `sm`
- [x] Header: sticky `white/90` + blur, 64/80 px, **six** links from **`xl`**, phone pill from `md`,
      location pill only at `2xl`, CTA from `xl`, hamburger below `xl`, `shadow-lg` past 50 px
- [x] Hero: `#f7f7f7` ground, 12-col split (7/5), eyebrow, 60 px `h1` with `is the wrong question.` in
      `#ae6211`, 18 px lede, five amber stars + sample rating, 2×2 tick checklist, **no image**
- [x] Quote card: `rounded-2xl`/16 px, white, `1px #ededed`, 32 px padding, `shadow-md`, 3 fields with the
      six-option problem select, full-width `Get my answer`, footnote
- [x] Forms: local validation (required + phone/email), inline errors with `aria-invalid`/
      `aria-describedby`, reset on success, kit-styled green toast, **no navigation and no network**
- [x] **Sizing tool**: three fieldsets with the reference's chip order and data, defaults
      (both showers + Virginia average + 4 people) producing `4.0 gpm` / `40 gallon` / peak hour `52` and
      the "reasonable fit" verdict; `≤70/≤85/≤105/else → 40/50/65/80`; both verdict thresholds; the
      empty-fixture branch; `aria-live="polite"` on both numbers; sample footnote
- [x] Emergency band: `#ae6211`, pinging 8 px dot, 14 px uppercase eyebrow, bold 18/20 px headline,
      `opacity-90` paragraph, white `rounded-full` pill on the right from `lg`
- [x] Sticky call bar: `lg:hidden`, fixed `z-40`, white, 12 px padding, 97 px tall, one full-width orange
      pill; hidden from `lg` up; cookie strip paints over it
- [x] Options grid: 6 cells in the reference order, `gap-px` over an `#ededed` block, prices
      `$1,450` / `$1,750` / `$2,900` / `$3,600` / `$2,200` / `$180`, sample-data footnote, `flex-1` bodies
- [x] Why-us: `#f7f7f7`, figure left from `lg` (below the copy under `lg`), redrawn flow panel with
      `role="img"`, caption, four `border-l-2 border-primary-600` rows, figure 576 px at 1440
- [x] Three steps: `<ol>` 3/1 columns, mono `01`–`03` + hairline rule, the three headings in order, the
      three durations in order, 36 px `h2`
- [x] Areas: 12 towns in order, `grid-cols-2 sm:grid-cols-3`, hairline rows, replace-me footnote
- [x] Testimonials: 3 quotes with initials discs and towns; 3-up at `lg` with no dots, arrows
      `hidden lg:flex`; dots + swipe below; 5 s autoplay paused on hover, off under reduced motion
- [x] FAQ: five rows, **exclusive**, `aria-expanded`/`aria-controls`, 32 px disc rotates 45°,
      `max-height` transition, the five questions in the reference order
- [x] Closing band: flat `#8d4e12`, 112 px pad, white solid CTA + `border-2 border-white/40` ghost with
      phone glyph
- [x] Footer: brand block + `Services`/`Company`/`Support`/`Stay Updated`, working newsletter validation,
      legal bar with the `Component Dock` link to `https://www.componentdock.com/`
- [x] Chrome: no preloader overlay, skip link, 2 px progress bar, 48 px back-to-top, cookie strip in state
      and `role="dialog"`
- [x] No `colorlib` string, no source brand, no `office@everhotwater.example`, no copied SVG or stylesheet
      under `apps/kettle`; wordmark and flow panel redrawn; no copied JSON-LD
- [x] Row added for the design under `## Business` between **`Evento` and `Expert`**, heading
      re-measured to **`(371)`** on `main` `d089ec83e`, marker flipped to `[x]` with the bookkeeping
      commit
- [x] `npm run spec:validate`, `scripts/verify-app.sh kettle` and the CI gate are green
