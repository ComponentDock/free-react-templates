# Template: Plantroom (Business — commercial HVAC contractor selling a maintenance agreement with published response tiers)

## Purpose

A one-page site for a **commercial mechanical contractor that publishes what happens when it misses a
response time**. The whole page is one argument, told in the order a facilities manager buys: the hero
says the quiet part out loud (*every contractor says twenty-four seven — ask what happens when they
miss it*), a dark band turns that into **three response tiers with a stated remedy** (a credited month,
half a month, a rescheduled visit at our cost), a hairline grid lists what the monthly fee actually
contains, a second grid names the buildings where a failure costs money, a 12-town list keeps the
service radius honest, three references, five procurement questions, and a deep-blue closing band that
asks the buyer to compare proposals. The commercial engine of the design is that **it argues against
the reader's current contractor rather than for its own brand**, so the copy is specific, numeric, and
slightly adversarial — and the page has no photography at all: the single illustration is a dark
"asset register" panel, drawn in SVG in the source.

Recreation of the ColorLib **"Curbline"** design (https://colorlib.com/wp/template/curbline/, live
preview https://preview.colorlib.com/theme/curbline/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

* **Source slug:** `curbline`
* **ColorLib page:** https://colorlib.com/wp/template/curbline/ — HTTP 200, 111,336 B,
  `<title>` **"Curbline - Commercial HVAC Website Template 2026 - Colorlib"**; its
  `<meta name="description">` sells the same idea ("a response time with no consequence attached is
  marketing")
* **Live preview:** https://preview.colorlib.com/theme/curbline/ — HTTP 200, 75,675 B, page
  `<title>` **"Commercial HVAC in Fort Worth, with published response tiers | Curbline Mechanical"**
  (read 2026-10-25 with `curl -4`; this host resolves an IPv6 address that is banned, so every fetch
  needs `-4`, and a browser needs `--host-resolver-rules=MAP preview.colorlib.com 104.26.10.149`)
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/curbline-template.jpg —
  **JPEG**, 363,802 B, 2400×1892, a macOS-Safari-window-framed capture of the licence strip, the
  header, the whole hero and the first two-thirds of the dark response band
* **New name:** `plantroom` (apps/plantroom, `@free-react-templates/plantroom`) — one lowercase word,
  the room where the plant the agreement covers actually lives (the source's own `/services` h1 is
  *"Plant, not products"*). Differs from the source slug; `git grep -il plantroom origin/main` prints
  **nothing**; no `apps/plantroom`, no `openspec/specs/template-plantroom/`, no
  `docs/templates/plantroom/`; and all four ColorLib URL forms (`wp/template/plantroom/`,
  `theme/plantroom/`, `theme/bootstrap/plantroom/`, `theme/bb/plantroom/`) return **404**
  (probed 2026-10-25)
* **Deploy target:** https://plantroom.free.componentdock.com (`apps/plantroom/public/CNAME`,
  `homepage` in `apps/plantroom/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## Business (366)` (line 879), which already holds the sibling catalogue-gap prep
  of this same generation — `airwise` → **Thermly** (line 885) — and is the commercial-services
  section. ⚠️ **The Business heading is already off by one**: on `main` `6e0d87e98` it reads `(366)`
  over **367** rows, because Thermly's row was added without bumping the parenthetical. Adding
  Curbline makes 368 rows — write `(368)`, measured, not `(367)`.

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, 2,857 `[x]`, every row resolving to an app and a spec — but
the **catalogue is not complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled and
compared with the 1,631 slugs the checklist cites, and **256 designs are on the listing that the
checklist never recorded** (42 standalone + 214 snippet variants). The census, its commands, the open
decision and both buckets are recorded in `docs/catalog-coverage.md`.

`curbline` is one of the 42 standalone designs (a row of that table: `curbline` — preview 200,
75,675 B). Five of the 42 have been prepped before this run — `airwise` → **Thermly** (shipped),
`backstop` → **Flowcert**, `circles` → **Closeknit**, `coldsnap` → **Stoke** and `commons` →
**Veranda** — and they established the hand-off pattern this spec follows. No spec on main names
`template/curbline` (`git grep -il curbline origin/main` → only `docs/catalog-coverage.md` and
`scripts/data/colorlib-demos.json`) and no app named `curbline` exists, so this prep is not a
duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this
line into `## Business` (and change the heading from `(366)` to `(368)`, see the off-by-one above),
then flip the marker to `[x]` with the same bookkeeping commit that writes the surge URL:

```
- [~] **Curbline** — [colorlib](https://colorlib.com/wp/template/curbline/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/curbline-template.jpg) · [plantroom](https://plantroom.free.componentdock.com)
```

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/curbline/` page (DOM authority) | 75,675 | `b66a8487ed10054df6b0603205470321c96e08990ad9a634998faeb51be36fe9` |
| `theme/curbline/_astro/Base.4pe9WVqO.css` (token authority) | 55,544 | `e7e16b99b649b730fa757bf2d5f630bd99c20d5220c73f2d566e6001783720dc` |
| `theme/curbline/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (house kit) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/curbline/_astro/ClientRouter…CYDbzu1r.js` (view-transition router) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| inline `<style>` (`@font-face` for **Inter** + **JetBrains Mono**) | 12,360 | — |
| inline `<script>`: `applyTheme()` (localStorage + `prefers-color-scheme`) | 442 | — |
| inline `<script>`: JSON-LD `HVACBusiness` | 333 | — |
| inline `<script>`: preloader removal on `load` | 358 | — |
| `assets/img/logo.svg` · `logo-light.svg` (210×40 wordmark) | 719 · 719 | `369888fb5b191adcc587bbb7bd7977cdc6c5f22facb42063a7e1ca3fae99382e` · `f001833ba9412e57cf2788fb06a0cbce196c4e67db14355bcf11893ea022d30c` |
| `assets/img/asset-panel.svg` (the only illustration) | 2,429 | `ac34c377f57ab9e1b63eb4e9a76315a8249d5f40767d543f74db369beecb930d` |
| `favicon.svg` | 313 | `4a8e3ac2882790c601042102032a4faa8acd14c37f758d97ff2546f1fa71960c` |
| catalog screenshot `curbline-template.jpg` | 363,802 | `b68f1add7d6598a1142642ff7760388ec3f90232fd8842aec0ccd196c34fe25c` (real JPEG, 2400×1892) |
| `colorlib.com/wp/template/curbline/` (catalog entry) | 111,336 | `ed1177f6807cab279555c415f0ae00ea2f55eadcecdc82dcf579a1498064f7e0` |
| `css/style.css`, `js/snippet.js`, `downloads/free/curbline.zip`, `og-image.jpg` | — | **HTTP 404** — Astro 7 build, so the live preview is the sole DOM/CSS reference and the OG image it advertises does not exist |

The preview is an **Astro 7 build with Tailwind 4 output**: one stylesheet, one kit script, one client
router. **Both `_astro` scripts are byte-identical to the ones the Veranda (Commons), Stoke (Coldsnap)
and Closeknit (Circles) preps measured** — the same house kit renders every one of these 2026 designs,
so the *behaviour* inventory transfers while the markup, palette and band order do not. Do not copy a
sibling's tokens because the kit hash matches: Curbline is **blue on ink-grey in Inter + JetBrains
Mono**, not Commons' indigo Outfit.

The catalog entry's `meta description` agrees with the live page's positioning, but its copy is
different prose. The **live preview is the authority**; where the two disagree, the DOM wins.

## Design tokens (measured from `_astro/Base.4pe9WVqO.css`, 55,544 B, and the live render at 1440 px)

### Brand ramp — `primary` (a cool corporate blue, not a Tailwind stock ramp)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#edf6ff` | closing band's white button hover (`hover:bg-primary-50`) |
| `primary-100` | `#d7ebff` | testimonial avatar discs, FAQ/eyebrow pill grounds on testimonial + FAQ bands (`bg-primary-100`) |
| `primary-200` | `#afd7ff` | not emitted in the landing DOM (available in the sheet) |
| `primary-300` | `#7bbcfb` | **the tier SLA numerals**, testimonial stars' sibling blue, the logo's two dots, `dark:` hero accents |
| `primary-400` | `#479cf0` | **tier card 1 border**, testimonial stars (`text-primary-400`), `.text-gradient` end stop, dark-mode eyebrow text |
| `primary-500` | `#247edc` | the logo's inner bar, footer input focus border, `.btn` shadow tint |
| `primary-600` | `#1963b4` | **brand** — every solid button (`Request a site survey`, `Subscribe`), the `h1` span, the checklist ticks, the scroll-progress bar, the preloader arc, back-to-top, the carousel's active dot |
| `primary-700` | `#175090` | **`.btn-primary:hover`**, every eyebrow on a light ground, every grid cell's badge line, the closing band's ground, `text-primary-700` on the closing band's white button |
| `primary-800` | `#194375` | available in the sheet, unused on this page |
| `primary-900` | `#183961` | dark-mode only, at `/30`–`/50` alpha |

### Neutral ramp — `ink` (a warm-neutral grey ramp the sheet defines itself; this is what makes the page read "mechanical" rather than "SaaS")

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f5f6f7` | **hero ground** (measured `rgb(245,246,247)`), `#why-us` ground, hamburger/toggle hover |
| `ink-100` | `#e9ebed` | every card border, header border, footer dividers, **the hairline grid's gutter** (`bg-ink-100` behind the cells), mobile-menu border |
| `ink-200` | `#d2d6da` | input borders, the header's location/phone pill borders, the asset-register rows' primary text |
| `ink-300` | `#a9b0b7` | input placeholders (`placeholder:text-ink-300`) |
| `ink-400` | `#78828c` | form footnote, `figcaption`, the asset register's subtitle |
| `ink-500` | `#57626c` | **body copy on light grounds** (measured `rgb(87,98,108)`), card blurbs, dark-mode toggle icon |
| `ink-600` | `#3f4951` | header nav links, the rating line |
| `ink-700` | `#30383f` | hero checklist text, form labels, `.btn-secondary`-ish pill text |
| `ink-800` | `#1f252a` | **`h1`/`h2`/`h3` on light grounds** (measured `rgb(31,37,42)`), the licence strip's ground, the logo's square |
| `ink-900` | `#13171a` | **`#response` band ground** (measured `rgb(19,23,26)`), the asset-register panel's outer frame |

### Chrome grey, status colours, grounds

| token | value | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | `#testimonials` ground, FAQ icon disc hover, `.btn-secondary:hover` |
| `gray-100` | `#f3f4f6` | FAQ icon discs (`bg-gray-100`) |
| `gray-200` | `#e5e7eb` | cookie-strip border, FAQ `divide-y`, preloader ring |
| `gray-300` | `#d1d5db` | cookie `Decline` border, inactive carousel dots |
| `gray-400` | `#9ca3af` | footer body copy (`text-gray-400`), footer link default |
| `gray-500` | `#6b7280` | footer legal bar text |
| `gray-600` | `#4b5563` | testimonial roles, cookie copy, carousel arrow glyphs |
| `gray-700` | `#374151` | footer input border, dark-mode grounds |
| `gray-800` | `#1f2937` | footer social tiles (`bg-gray-800`), footer input ground |
| `gray-900` | `#111827` | **footer ground** (measured `rgb(17,24,39)`), `body` colour, testimonial/FAQ headings |
| `amber-400` | `oklch(82.8% .189 84.429)` | the 5 hero rating stars + the licence strip's star |
| `#f6bb63` | amber, **inside the asset-register SVG only** | the `Replace` condition and the panel's call-out line |
| `green-600` / `red-600` | `oklch(62.7% .194 149.214)` / `oklch(57.7% .245 27.325)` | the kit's toast (success / error) — the recreation reuses this pair |
| white | `#fff` | hero card, `#agreement`/`#sectors`/`#areas`/`#faq` grounds, the closing band's solid button |

**Note the mixed house kit vs page palette:** the footer and the testimonial/FAQ bands use stock
Tailwind `gray`, while the hero, the three grids, the areas band and every card border use `ink`. That
split is in the reference and looks deliberate (dark chrome recedes, blue-greys carry content) — keep
both ramps, do not "normalise" one into the other.

### Typography

Two faces, both delivered from the preview's own `/cf-fonts/…` cache inside the 12,360-byte inline
`<style>` (which is why grepping the sheet for `@font-face` finds nothing):

* **Inter** — the whole page. `body` sets `font-family: Inter, system-ui, sans-serif` (measured).
  Weights in use: **400, 500, 600, 700, 800**.
* **JetBrains Mono** — numerals and machine-y labels only: `font-mono` on the three tier SLAs, the
  asset-register table, and the `MECHANICAL` line of the wordmark. `font-family: JetBrains Mono,
  Consolas, monospace`. Weights in use: **400, 500, 600, 700**.

| role | measured | notes |
| --- | --- | --- |
| `h1` | `text-4xl` 36 → `sm:text-5xl` 48 → `lg:text-6xl` **60 px** (measured at 1440), `font-bold`,
`leading-[1.1]` (66 px), `tracking-tight` (**−1.5 px**), `text-ink-800` | two sentences; the second (`Ask what
happens when they miss it.`) is a `<span class="text-primary-600">` — **not** a gradient |
| `h2` | 30 px → `sm:text-4xl` 36 px, `font-bold`, `tracking-tight` | every band heading; hero card heading is `text-xl lg:text-2xl` (20/24 px) |
| `h3` | 18 px `text-lg font-bold` | tier names, grid-cell titles, footer column heads are 14 px `uppercase tracking-wider` instead |
| lede | 18 px `text-lg`, `text-ink-500` (hero, `#why-us`, `#areas`) or `text-gray-600` (testimonials/FAQ) | the closing band's lede is `text-primary-100` |
| eyebrow | 14 px `text-sm font-bold uppercase tracking-wide` (0.35 px measured), `text-primary-700` | hero + `#why-us`; the testimonial/FAQ eyebrows are pills instead (`rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`) |
| tier SLA | **JetBrains Mono 30 px / 700**, `text-primary-300`, `tabular-nums` | `2 hours` · `Next working day` · `On the agreed date` |
| tier micro-label, cell badge, `dt` | 12 px `text-xs font-bold uppercase tracking-wide` | `24 hours, every day` etc. in `text-white/40`; cell badges are `text-sm font-bold text-primary-700` |
| mono tables | 13–14 px JetBrains Mono | only inside the asset-register SVG |

Load them with two `<link>`s in `index.html` (both URLs return 200 with a browser UA):

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap
```

### Buttons, radii, shadows

| token | value | where |
| --- | --- | --- |
| `.btn` | `inline-flex`, centre, `gap:8px`, `border-radius:.5rem` (8 px), `padding:10px 20px`, `font-size:14px`, `font-weight:500`, `transition:all` | the response band's `See what an agreement covers` |
| `.btn-primary` | `background:#1963b4`, white, `shadow-lg` tinted `#1963b440`; hover `#175090` + `shadow-xl` | ditto |
| `.btn-secondary` | white ground, `1px #d1d5db` border, label `#374151`, `hover:bg-gray-50` — **defined in the sheet but not used on this page** (the sibling Commons prep needs it) | — |
| hero/form CTA | `rounded-lg px-6 py-3.5` (24/14 px), 16 px `font-bold` | `Request the survey` (full width inside the card) |
| header CTA | `rounded-lg px-5 py-2.5` (20/10 px), 14 px `font-bold` | `Request a site survey`, visible from `xl` |
| closing CTA pair | `rounded-lg px-8 py-4` (32/16 px), 16 px `font-bold`; solid white with `text-primary-700`, ghost `border-2 border-white/40` | `Request a site survey` / `Call (555) 100-1000` |
| radii | `lg` .5 rem (8) · `xl` .75 rem (12) · `2xl` 1 rem (16) · `full` | `lg` = buttons/inputs, `2xl` = every card, tier, grid block, figure, `full` = pills, avatars, dots, discs |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | testimonial cards |
| `shadow-md` | stock Tailwind | the hero's survey card (`#quote`) |
| `shadow-lg` | stock Tailwind; header gains it past 50 px | header, carousel arrows, back-to-top, cookie strip |
| `.text-gradient` | `linear-gradient(to right in oklab, #1963b4, #479cf0)` + `background-clip:text` | defined in the sheet, **NOT used on the landing page** — do not add it |
| `.nav-active` | `color:#111827; font-weight:600` (white in dark) | scroll-spy on the header's single in-page link |
| keyframes present | `hero-float`, `shimmer`, `ping`, `spin` | only `spin` (preloader) and `ping` are reachable from this DOM; there is **no** float/blob animation, no typewriter and no counter on this page |

### Rhythm and containers

* `.section` = `padding-block` **80 px → 112 px at ≥64rem** (measured 112 px at 1440). `#testimonials`,
  `#faq` and `#contact` do not carry `.section` and instead use `py-20 lg:py-28` (the same 80/112 at the
  same breakpoint) — copy the classes, not the number.
* Hero: `py-14` (56) → `lg:py-20` (80), `bg-ink-50`, no border.
* Licence strip: `h-9` (36 px), `bg-ink-800`, `text-ink-100`, `text-xs`.
* Header: `h-16` (64) → `lg:h-20` (80) — measured **65 / 81 px including the 1 px border**; sticky,
  `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100`.
* Containers: `container mx-auto px-4 lg:px-8` throughout (max-width 80 rem = 1,280 px at `xl`, so
  1,216 px of content at 1440 with `px-8`). Inner widths: hero form column `lg:col-span-5` of 12,
  `#why-us` is a plain `lg:grid-cols-2`, `#areas` splits `lg:col-span-5` / `lg:col-span-7`, and the two
  hairline grids are `sm:grid-cols-2 lg:grid-cols-3`.

## Reference document order (four chrome pieces, licence strip, header, hero, seven bands, footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white (`dark:gray-950`) | fixed `z-[100]`, 40 px `animate-spin` ring `border-4 border-gray-200 border-t-primary-600`; removed 300 ms after `load` |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio |
| — | `[data-licence-bar]` | **`bg-ink-800` `#1f252a`, `text-ink-100`**, `h-9`, `text-xs` | left: `Licence` / **`TX TACLA #00000C`**, `$5M general liability`, `Serving` / **`Tarrant County`** (the last two hidden below `sm`); right: an `amber-400` star + **`4.8`** + `70+ reviews on Google (sample)` |
| — | `header[data-header]` | `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100` | sticky `z-50`, 64/80 px: 210×40 wordmark · **six** nav links from `xl` (`Response tiers`, `Agreements`, `Services`, `Service areas`, `About`, `Contact`) · location pill (`2xl` only) · phone pill (`md`+) · dark toggle · solid `Request a site survey` (`xl`+) · hamburger (`xl:hidden`) |
| — | `[data-mobile-menu]` | white (`dark:gray-950`), `border-t` | `hidden xl:hidden` panel: the six links as `block py-3` rows, then phone + location pills and a full-width CTA |
| 1 | (hero, no id) | **`bg-ink-50` `#f5f6f7`** | `lg:grid-cols-12`: left `col-span-7` — eyebrow `Fort Worth · TACLA licensed mechanical`, `h1` (two sentences, second in `primary-600`), 18 px lede, 5 `amber-400` stars + `4.8` + `70+ reviews on Google · sample data`, then a 2×2 checklist with `primary-600` ticks; right `col-span-5` — the **survey card** `#quote` (`rounded-2xl border-ink-100 bg-white p-6 lg:p-8 shadow-md`) with `h2 Request a site survey`, `Three fields. We reply the same working day.`, a 3-field form (`Your name`, `Work email`, `What prompted this?` select with 7 options) and a full-width `Request the survey` button plus the `No obligation…` footnote. **No image in the hero.** |
| 2 | `#response` | **`bg-ink-900` `#13171a`, `text-white`** | eyebrow `Response`, `h2 Three tiers, and what happens when we miss one`, lede in `text-white/70`; **three** cards (`lg:grid-cols-3`) each `rounded-2xl border p-6 bg-white/5`: card 1 alone has `border-primary-400` + `bg-white/[0.07]`; `h3` name, mono SLA, micro-label (`24 hours, every day` / `Working hours` ×2), then a `dl` over a `border-t border-white/10` with `What qualifies` and `If we miss it`; a sample-data footnote and `.btn-primary See what an agreement covers` beneath |
| 3 | `#agreement` | white | eyebrow `What an agreement includes`, `h2 The parts other proposals leave to be discovered`, lede; a **6-cell hairline grid** (`grid gap-px rounded-2xl border border-ink-100 bg-ink-100`, cells `bg-white p-6 lg:p-8`): `Scheduled maintenance visits`, `Filters and belts`, `Response cover`, `Asset register`, `Statutory logs`, `Quoted repairs` — each with a blurb and a `text-primary-700` badge (`In the monthly fee` ×5, `Quoted per job`); sample-data footnote |
| 4 | `#why-us` | `bg-ink-50` | `lg:grid-cols-2`, figure **first on `lg`** (`order-last lg:order-first`): the `asset-panel.svg` illustration in `rounded-2xl` + a `figcaption` telling you to replace it with a photograph; right: eyebrow `Why facilities managers move to us`, `h2 Three things that are boring and decisive`, lede, then **four** `border-l-2 border-primary-600 pl-5` definition rows (`The asset register is yours`, `A named engineer, not a queue`, `Repairs are quoted with a photograph`, `We tell you when to replace`) |
| 5 | `#sectors` | white | eyebrow `Buildings we look after`, `h2 Where the failure costs something`, lede; a **second 6-cell hairline grid** (same kit as #3): `Restaurants and kitchens`, `Data and comms rooms`, `Offices and multi-tenant`, `Retail and showrooms`, `Warehouses and light industrial`, `Medical and dental`, badges `Priority one by default` / `Priority two, upgradeable` / `Quoted per site`; sample-data footnote |
| 6 | `#areas` | white | `lg:grid-cols-12`: left `col-span-5` `h2 Where we work` + lede + a replace-me footnote; right `col-span-7` a `grid-cols-2 sm:grid-cols-3` list of **12 towns** as `border-b border-ink-100 py-2.5` rows: Fort Worth, Arlington, Grapevine, Southlake, Keller, Bedford, Euless, Hurst, Mansfield, Burleson, Haltom City, North Richland Hills |
| 7 | `#testimonials` | `bg-gray-50`, `py-20 lg:py-28` | centred pill eyebrow `References`, `h2 What facilities managers say`, sample-data lede; **3-slide carousel** (`[data-carousel]`): `rounded-2xl bg-white p-8 shadow-soft` cards with 5 `primary-400` stars, a `text-lg font-medium gray-900` quote, a 48 px `bg-primary-100 text-primary-600` initial disc + name + role; round arrows at `-left-4`/`-right-4` (`hidden … lg:flex`) and an empty `[data-carousel-dots]` div the kit fills |
| 8 | `#faq` | white, `py-20 lg:py-28` | pill eyebrow `Questions`, `h2 What procurement asks`, lede; `divide-y divide-gray-200` list of **five** rows: full-width `button` + 18 px semibold question + a 32 px `rounded-full bg-gray-100` plus-icon disc that rotates 45° when open, and a `max-height:0` panel |
| 9 | `#contact` | **`bg-primary-700` `#175090`** | centred `h2 Comparing maintenance proposals?` (30→36 px), `text-primary-100` lede, then a **white** solid `Request a site survey` + a `border-2 border-white/40` ghost `Call (555) 100-1000` with a phone glyph. No gradient, no dot grid, no blobs — a flat brand band |
| — | `footer` | **`bg-gray-900` `#111827`**, `text-gray-300`, `pt-16 lg:pt-24` | 12-col grid: brand block (`logo-light.svg` 40 px, blurb, three `rounded-lg bg-gray-800 p-2.5` social tiles, address / phone / mail) · three link columns (`Services`: Rooftop units, Close control, Refrigeration, Extract ventilation; `Company`: Response tiers, Agreements, Service areas, About; `Support`: Contact, Privacy, Terms) · `Stay Updated` with an email field + `Subscribe`; bottom bar `border-t border-gray-800`: `© 2026 …` + `Privacy Policy` / `Terms of Service` |
| — | `#cookie-consent` | white (`dark:gray-900`), `border-t`, `shadow-lg` | fixed bottom `role="dialog"` `aria-label="Cookie consent"`, slides up after 1.5 s, `Decline` (outline) + `Accept All` (primary) |
| — | `#back-to-top` | `primary-600` + `shadow-primary-600/25` | 48 px disc, `bottom-6 right-6`, appears past 300 px |

**There is no sticky mobile CTA bar** (unlike the sibling Veranda prep) — the page's mobile bottom
edge is the cookie strip alone.

## Behaviour the recreation must reproduce

All handlers live in the **house kit** (`Base…BLoalVWc.js`, 16,233 B, the same hash as Veranda's,
Stoke's and Closeknit's); only `applyTheme`, the JSON-LD block and the preloader removal are
page-local. The page wires **14 `data-animate` elements** and the hooks listed in §Data-attribute
inventory — it uses *none* of the kit's typewriter, counter, parallax, video, lightbox, billing or
blog-filter branches, so those must not be invented into the build.

1. **Reveal on scroll** (`[data-animate]`, 14 elements, delays 100–300 ms) — `fade-in-up`, skipped
   entirely under `prefers-reduced-motion: reduce`; elements below 80 % of the viewport start at
   `opacity:0`, `translateY(20px)`, `.6s ease-out` with `data-delay` as the transition delay, revealed
   once at `threshold .1` / `rootMargin 0 0 -10%`.
2. **Header shadow** past `scrollY > 50`; mobile disclosure with `aria-expanded` + glyph swap
   (hamburger ↔ close) and `hidden` on the panel.
3. **Scroll spy** — `[data-nav-link]` carries the band id; an observer at `rootMargin -20% 0 -70% 0`
   toggles `.nav-active`. Only `response` is an in-page target on this page; the other five nav links
   point at inner routes (see §Link census), so the spy has exactly one live target.
4. **Carousel** (`[data-carousel]`) — per-view **3 ≥1024 px, 2 ≥640 px, 1 below**; each slide's width
   becomes `track.parentElement.offsetWidth / perView`; advance every **5 s**, wrapping; paused on
   `mouseenter` and resumed on `mouseleave`; dots generated as `h-2.5 w-8 bg-primary-600` when active
   and `w-2.5 bg-gray-300` otherwise; one dot per page. **At ≥1024 px with three slides there is
   exactly one page**, so the kit produces *zero* dots and hides both arrows — the band renders as a
   static 3-up row (measured: `dotCount 0`, `prevDisplay none` at 1440).
5. **FAQ** (`[data-faq-toggle]` + `[data-faq-icon]`) — **exclusive**: opening one sets every other
   panel to `max-height:0`/`opacity:0` and every other icon back to `rotate(0)`; the open row gets
   `max-height: scrollHeight` + `opacity:1` and `rotate(45deg)` on its disc.
6. **Cookie strip** (`[data-cookie-accept]` / `[data-cookie-decline]`) — slides up 1.5 s after load,
   slides down and removes itself on either choice; the kit stores `cookie-consent` in
   `localStorage` (dropped in the recreation, Deviation 3).
7. **Back-to-top** — `scrollY > 300` sets `opacity:1; pointer-events:auto; translateY(0)`, otherwise
   `opacity:0; pointer-events:none; translateY(16px)`; click smooth-scrolls to `top:0`.
8. **Scroll progress** — `width = scrollY / (scrollHeight - innerHeight) × 100` %, updated on a
   passive `scroll` listener.
9. **Dark toggle** (`[data-dark-toggle]`) — toggles `.dark` on `documentElement` + `localStorage.theme`;
   boots from `applyTheme()` (stored value, else `prefers-color-scheme`). Dropped in the recreation
   (Deviation 2), but every measured dark value is recorded above.
10. **Chrome**: preloader removed 300 ms after `load`; smooth in-page scrolling with a header offset
    for `a[href^="#"]`.
11. **Forms — the reference's forms are inert.** The hero form is `<form data-form method="post"
    action="#">` and the footer newsletter is `<form data-newsletter-form>`; the kit only binds
    `form[data-validate]`, which **neither** uses (`grep -c 'data-validate'` = 0 on the page), so a
    submit navigates to `/#` and nothing validates. The recreation must wire both forms itself
    (Requirement 5): required + e-mail validation on submit and on blur, inline error text, a reset on
    success, and the kit's own toast (`bg-green-600` / `bg-red-600`, `top-6 right-6`, `translateX(120%)`
    → 0, auto-dismissed after 4 s) — no network call, no navigation.

### Data-attribute inventory (measured on the live page)

| hook | count | what it drives |
| --- | ---: | --- |
| `data-animate` | 14 | reveal (12 carry `data-delay`) |
| `data-nav-link` | 6 | scroll-spy (only `response` resolves) |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | exclusive accordion |
| `data-phone` | 3 | `tel:` links (header pill, mobile panel, closing band) |
| `data-carousel` / `-track` / `-slide` / `-prev` / `-next` / `-dots` | 1 / 1 / 3 / 1 / 1 / 1 | testimonials |
| `data-header`, `data-mobile-toggle`, `data-mobile-menu`, `data-dark-toggle` | 1 each | sticky chrome |
| `data-licence-bar`, `data-form`, `data-newsletter-form`, `data-cookie-accept`, `data-cookie-decline` | 1 each | the page-specific pieces |

`data-counter`, `data-typewriter`, `data-parallax`, `data-video-modal`, `data-lightbox`,
`data-billing-toggle`, `data-blog-*`, `data-accordion-toggle`, `data-validate` are **absent** from this
page even though the shared kit supports them.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **42 anchors** over **15 distinct `href` values**:

| count | href | kind |
| ---: | --- | --- |
| 6 | `/theme/curbline/services` | live route → `200` (47,539 B) |
| 6 | `/theme/curbline/contact` | live route → `200` (41,626 B) |
| 4 | `/theme/curbline/agreements` | live route → `200` (47,814 B) |
| 3 | `/theme/curbline/#response` | cross-page fragment → exists |
| 3 | `/theme/curbline/service-areas` | live route → `200` (40,583 B) |
| 3 | `/theme/curbline/about` | live route → `200` (43,011 B) |
| 3 | `tel:5551001000` | valid |
| 3 | `#` | **dead** — the three footer social tiles |
| 2 | `/theme/curbline/` | the wordmark (header + footer) |
| 2 | `#service-areas` | **broken fragment** — the page's band id is `areas`, there is no `id="service-areas"` anywhere (the header location pill and its mobile-menu twin both point here) |
| 2 | `/theme/curbline/privacy` | live route → `200` (43,546 B) |
| 2 | `/theme/curbline/terms` | live route → `200` (42,345 B) |
| 1 | `#main-content` | skip link → exists |
| 1 | `tel:(555) 100-1000` | **malformed** `tel:` (spaces, parentheses) — the footer's copy |
| 1 | `mailto:service@curblinemech.example` | `.example` placeholder mailbox |

**Inner-page inventory (all live, all `200`; `elements` → `404`):**

| page | bytes | `<title>` | `<h1>` |
| --- | ---: | --- | --- |
| `agreements/` | 47,814 | Commercial HVAC maintenance agreements \| Curbline Mechanical | The exclusions are the interesting part |
| `services/` | 47,539 | Commercial HVAC services in Fort Worth \| Curbline Mechanical | Plant, not products |
| `service-areas/` | 40,583 | Commercial HVAC service areas around Fort Worth \| Curbline Mechanical | Tarrant County and the western metroplex |
| `about/` | 43,011 | About Curbline Mechanical \| Curbline Mechanical | About Curbline Mechanical |
| `contact/` | 41,626 | Contact Curbline Mechanical \| Curbline Mechanical | Contact Curbline Mechanical |
| `privacy/` | 43,546 | Privacy Policy \| Curbline Mechanical | Privacy Policy |
| `terms/` | 42,345 | Terms of Service \| Curbline Mechanical | Terms of Service |
| `elements/` | 9 | — | **404** (unlike Commons there is no style-guide page) |

The multi-page shell is the authoritative reference for the sections a single-page recreation has to
invent: `/agreements` carries **What is outside the monthly fee** and **Four questions for every
bidder** (the exclusions the landing page only promises), `/services` carries six service categories
(the footer's four link labels are drawn from it), `/service-areas` carries the town-by-town reasoning,
and `/about` carries **Three commitments** + **Who you deal with**. Those headings are the source for
the copy the recreation places in the bands that fold them in — **the recreation does not rebuild
those pages** (Deviation 1).

## Class census (no phantom-class delta)

The page uses **323 distinct class tokens and every one of them compiles** to a rule in
`Base.4pe9WVqO.css`. The single apparent miss is **`2xl:block`**, and it is a **false miss**: Tailwind
escapes the leading digit as `.\32 xl\:block`, and that selector is present in the sheet. There is
therefore no "class with no rule" to floor into this spec.

⚠️ Three traps when re-running this census:

1. Variants are escaped in the sheet (`sm\:grid-cols-2`, `bg-white\/\[0\.07\]`, `lg\:col-span-5`) —
   grep the escaped form, and remember leading digits escape as `\32 ` / `\33 `.
2. `dark:` utilities compile as `:is(.dark *)` suffixes, so a `.token{` search misses them entirely.
3. Breakpoints ship as `@media (width>=40rem)` (not `min-width:`): 40rem `sm`, 48rem `md`, 64rem `lg`,
   80rem **`xl`** (where the nav appears), 96rem `2xl` (where the location pill appears), plus
   `475px` and `1920px` container steps.

## Screenshot analysis (2400 × 1892, macOS-Safari window frame)

The capture is a light-mode desktop view framed in Safari chrome (traffic lights, address bar), so the
top ~90 px and the outer ~60 px are browser, not design. Inside it, top to bottom:

* the **near-black licence strip**: `Licence TX TACLA #00000C`, `$5M general liability`,
  `Serving Tarrant County`, and on the right an amber star with `4.8` and `70+ reviews on Google
  (sample)`;
* the **white header**: a small dark rounded-square glyph containing a blue bar and two pale-blue dots
  beside the `Curbline` wordmark with a letterspaced `MECHANICAL` under it, the six nav labels, a phone
  pill and the solid blue `Request a site survey`;
* the **pale grey hero** (`#f5f6f7`, not white): the letterspaced blue eyebrow
  `FORT WORTH · TACLA LICENSED MECHANICAL`, a 60 px near-black headline **`Every contractor says
  twenty-four seven.`** whose next sentence **`Ask what happens when they miss it.`** is solid brand
  blue, the two-line grey lede, five amber stars + `4.8` + `70+ reviews on Google · sample data`, then
  a **2×2 checklist with blue ticks** (`Response tiers written into the agreement`, `A service credit
  when we miss one`, `Named account engineer, not a dispatch queue`, `Asset register and service
  history you can export`);
* the **white survey card** on the right, floating on the grey: `Request a site survey`, the
  `Three fields. We reply the same working day.` line, three labelled fields in a single column and a
  full-width blue button;
* the **start of the dark band**: `RESPONSE`, `Three tiers, and what happens when we miss one`, and
  three dark cards whose first card is outlined in brighter blue than the other two, each with a
  mono-font SLA at 30 px in pale blue (`2 hours` / `Next working day` / `On the agreed date`) and two
  labelled definition rows.

Everything below the tier cards — the two hairline grids, the why-us figure, the town list, the
carousel, the FAQ, the blue closing band and the footer — is **not in the screenshot**: read those
from the DOM and the sheet (which is what §Reference document order and the design notes do). The
screenshot is useful for exactly three things: the licence-strip composition, the hero's vertical
rhythm (eyebrow → headline → lede → rating → checklist), and the fact that the design is **light with
no photography**.

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
  the back-to-top disc fades in (`opacity 1`, `translateY(0)`, 48 px, `#1963b4`, `shadow-lg` with a
  brand tint)
- **AND** below 300 px the disc is `opacity: 0` with `pointer-events: none`, and activating it
  smooth-scrolls to the top

#### Scenario: Visitor answers the cookie strip

- **GIVEN** the strip has slid up over the footer's legal bar (which is what happens on the reference —
  it is `fixed bottom-0`)
- **WHEN** either `Decline` or `Accept All` is activated
- **THEN** the strip slides down and is removed, and the choice is held in component state (no invented
  storage key — Deviation 3)
- **AND** the strip is a `role="dialog"` with the accessible name `Cookie consent`

### Requirement 2: Licence strip

The app SHALL render the dark credibility strip above the header with the licence number, the insurance
line, the service county and the sample rating, collapsing the middle two facts below `sm`.

#### Scenario: Visitor inspects the top of the page at desktop width

- **GIVEN** the page is rendered at ≥640 px
- **WHEN** the strip is inspected
- **THEN** it is 36 px tall on `#1f252a` with `text-xs` copy in `#e9ebed`, reading `Licence`
  `TX TACLA #00000C` · `$5M general liability` · `Serving` `Tarrant County` on the left, and an
  `amber-400` star, `4.8` and `70+ reviews on Google (sample)` on the right
- **AND** below `sm` only the licence pair and the rating remain, and the strip does not wrap

#### Scenario: Visitor reads the rating claim

- **GIVEN** the strip and the hero both show `4.8` / `70+ reviews`
- **WHEN** either is inspected
- **THEN** both carry an explicit sample disclosure (`(sample)` / `· sample data`) — the reference's own
  wording, which the recreation must not turn into a factual claim (Deviation 9)

### Requirement 3: Header, mobile disclosure and scroll spy

The app SHALL render a sticky translucent header with **six** nav labels from `xl`, two utility pills, a
theme control the recreation drops, and a disclosure menu below `xl`.

#### Scenario: Visitor inspects the header at desktop width

- **GIVEN** the page is rendered at ≥1280 px
- **WHEN** the header is inspected
- **THEN** it reads the wordmark, then `Response tiers`, `Agreements`, `Services`, `Service areas`,
  `About`, `Contact`, then the phone pill, the solid `Request a site survey` and the hamburger (hidden
  at this width)
- **AND** it is `position: sticky`, `top: 0`, `z-50`, `bg-white/90` with `backdrop-blur-lg`, 64 px tall
  rising to 80 px at `lg`, and gains `shadow-lg` only once `scrollY > 50`
- **AND** the nav appears at `xl` (1280 px), **not** at `lg` — measured: `nav` is `display:none` at 900 px
  and `flex` at 1440 px

#### Scenario: Visitor opens the mobile menu

- **GIVEN** the viewport is below `xl`
- **WHEN** the visitor activates the menu control
- **THEN** the control reports `aria-expanded="true"`, its glyph swaps to a close icon, and the panel
  lists the same six links as full-width rows followed by the phone pill, the location pill and a
  full-width `Request a site survey`
- **AND** activating it again closes the panel and restores the hamburger

#### Scenario: Visitor scrolls through the page

- **GIVEN** the header is rendered at a desktop width
- **WHEN** the response-tiers band passes the upper third of the viewport
- **THEN** `Response tiers` carries `.nav-active` (`#111827`, `font-weight: 600`)
- **AND** the other five links never take the active style, because their targets are not on this page

### Requirement 4: Hero

The app SHALL render the two-column hero on the `#f5f6f7` ground: proof column on the left, the survey
card on the right, in the reference order, with no image anywhere in the band.

#### Scenario: Visitor lands on the page

- **GIVEN** the page has loaded
- **WHEN** the hero is in view
- **THEN** the eyebrow reads `Fort Worth · TACLA licensed mechanical` in 14 px/700 uppercase
  `#175090` with 0.35 px tracking
- **AND** the only `h1` reads `Every contractor says twenty-four seven.` in `#1f252a` followed by a
  `#1963b4` span `Ask what happens when they miss it.`, at 36 px → 48 px → 60 px with
  `line-height: 1.1` and −1.5 px tracking at the largest step
- **AND** beneath it sit the 18 px lede in `#57626c`, a row of five `amber-400` stars with `4.8` and
  `70+ reviews on Google · sample data`, and a `sm:grid-cols-2` checklist whose four items each carry a
  16 px `#1963b4` tick

#### Scenario: Visitor uses the hero checklist

- **GIVEN** the hero is in view
- **WHEN** the checklist is inspected
- **THEN** the four items are exactly `Response tiers written into the agreement`, `A service credit
  when we miss one`, `Named account engineer, not a dispatch queue`, `Asset register and service
  history you can export`
- **AND** they are static text, not links — the reference makes none of them clickable

### Requirement 5: Site-survey form (the reference's inert form, wired)

The app SHALL render the `#quote` card with the three-field form and SHALL validate it locally, because
the reference binds no handler to it.

#### Scenario: Visitor inspects the card

- **GIVEN** the hero is in view at ≥1024 px
- **WHEN** the card is inspected
- **THEN** it is `rounded-2xl` (16 px), `1px #e9ebed`, white, 32 px padding, `shadow-md`, spanning
  `lg:col-span-5`
- **AND** it holds the `h2 Request a site survey` (20/24 px), `Three fields. We reply the same working
  day.`, a `Your name` text input, a `Work email` e-mail input, a `What prompted this?` select and a
  full-width 16 px/700 `Request the survey` button on `#1963b4` (`hover:bg-primary-700`)
- **AND** the select's options are, in order: the empty `Choose the closest match`, `Current contractor
  is not responding`, `Our agreement is up for renewal`, `Repeated failures on the same unit`, `New
  building or new tenancy`, `We have no agreement at all`, `Budgeting for replacement`
- **AND** the footnote reads `No obligation. You keep the asset condition report either way.`

#### Scenario: Visitor submits an empty or invalid form

- **GIVEN** the form is untouched
- **WHEN** the visitor submits with a blank name, a blank e-mail or an address without `@` and a dot
- **THEN** the offending field gets a 2 px error border, an inline `This field is required` or
  `Please enter a valid email address` message appears beneath it, and **nothing navigates**
- **AND** errors clear as the field is corrected, and the message is associated with its input via
  `aria-describedby` + `aria-invalid` (an improvement over the reference, which has neither)

#### Scenario: Visitor submits a valid form

- **GIVEN** all three fields are filled correctly
- **WHEN** the visitor submits
- **THEN** the form resets and a green toast reading `Message sent successfully!` slides in from the
  right at `top-6 right-6`, holds 4 s, and slides back out
- **AND** no request leaves the browser and no mail client opens (Deviation 5)

### Requirement 6: Response tiers band (the page's argument)

The app SHALL render the dark three-tier band with the mono SLA line, the qualifying condition, the
remedy and the sample-data footnote, and SHALL mark the first tier as the featured one.

#### Scenario: Visitor reads the tiers

- **GIVEN** the band is in view
- **WHEN** it is inspected
- **THEN** its ground is `#13171a`, `text-white`, with 112 px vertical padding at desktop and a
  left-aligned head: eyebrow `RESPONSE` in `primary-400`, `h2` `Three tiers, and what happens when we
  miss one` (30→36 px) and a lede in `text-white/70`
- **AND** three cards sit in `lg:grid-cols-3`, each `rounded-2xl border p-6` with `bg-white/5`; the
  first alone uses `border-primary-400` and `bg-white/[0.07]`, which is how the reference marks the
  priority tier
- **AND** each card reads, in order: the name (`Priority one`, `Priority two`, `Planned`) at 18 px/700;
  the SLA in **JetBrains Mono 30 px/700 `#7bbcfb`** (`2 hours`, `Next working day`,
  `On the agreed date`); a 12 px uppercase micro-label in `text-white/40` (`24 hours, every day`,
  `Working hours`, `Working hours`)
- **AND** below a `border-t border-white/10` each card carries a two-row `dl` — `What qualifies` and
  `If we miss it` — with the reference's exact wording (total loss vs partial loss vs scheduled work;
  a full month credited, half a month credited, rescheduled inside five working days at our cost)

#### Scenario: Visitor looks for the catch

- **GIVEN** the band is in view
- **WHEN** the bottom of the band is inspected
- **THEN** a 14 px `text-white/40` footnote reads `Sample tiers and remedies for demonstration. Replace
  with your own before launch, and have the remedy wording reviewed before it goes into a contract.`
  and sits beside the `.btn-primary See what an agreement covers` control
- **AND** that control targets the agreement band (the reference targets `/agreements`, which the
  single-page recreation maps — Requirement 15)

### Requirement 7: Agreement inclusions grid

The app SHALL render the six inclusions as a hairline grid built from the gutter colour, not from
per-cell borders.

#### Scenario: Visitor reads what the fee contains

- **GIVEN** the band is in view
- **WHEN** the grid is inspected
- **THEN** it is a `rounded-2xl` block whose own ground is `#e9ebed` with a `1px` border of the same
  colour and `gap-px`, so the white cells read as separated by hairlines (measured: grid ground
  `rgb(233,235,237)`, cell ground `#fff`, 32 px cell padding)
- **AND** the cells run `Scheduled maintenance visits`, `Filters and belts`, `Response cover`,
  `Asset register`, `Statutory logs`, `Quoted repairs` — `sm:grid-cols-2 lg:grid-cols-3` — each with an
  18 px/700 title, a `mt-2` blurb that flexes to equalise cell heights, and a 14 px/700
  `text-primary-700` badge
- **AND** the badges are `In the monthly fee` for the first five and `Quoted per job` for the last
- **AND** the sample-data footnote `Sample inclusions for demonstration. Replace with your own scope
  before launch.` sits beneath the grid in 14 px `text-ink-400`

### Requirement 8: Why-us band with the asset-register figure

The app SHALL recreate the asset-register panel as an **inline SVG React component** (the source's only
illustration) and SHALL render the four commitments as left-rule definitions.

#### Scenario: Visitor reaches the why-us band

- **GIVEN** the band is in view at ≥1024 px
- **WHEN** it is inspected
- **THEN** the ground is `#f5f6f7`, the figure is on the **left** (`lg` order) inside a `lg:grid-cols-2`,
  and its caption reads `Replace with a photograph of your own engineers on a roof before launch.` in
  14 px `text-ink-400`
- **AND** the panel is a `rounded-2xl` dark card on `#13171a` with an inner `#1f252a` panel: the title
  `Asset register`, the subtitle `Exported on request, and on the day you leave.`, a mono header row
  `ASSET / AGE / GAS / CONDITION`, five rows (`RTU-01 4 yr R-410A Good`, `RTU-02 11 yr R-410A Fair`,
  `RTU-03 17 yr R-22 Replace`, `SPL-01 6 yr R-410A Good`, `CU-COMMS 9 yr R-410A Good`) and a
  `#30383f` call-out box with `RTU-03: repair spend to date has passed half of replacement cost.` over
  `We will tell you. Most contractors will keep repairing it.` — `Good`/`Fair` in `#7bbcfb`, `Replace`
  in `#f6bb63`, row text `#d2d6da`, secondary `#a9b0b7`, labels `#57626c`
- **AND** on the right: eyebrow `Why facilities managers move to us`, `h2 Three things that are boring
  and decisive`, the lede, then four definitions each `border-l-2 border-primary-600 pl-5` with an
  18 px/700 title and `mt-1` grey body: `The asset register is yours`, `A named engineer, not a queue`,
  `Repairs are quoted with a photograph`, `We tell you when to replace`
- **AND** the SVG carries `role="img"` and an `aria-label` that describes it in one sentence, and its
  text remains legible at 320 px (it scales as an image, so no text may be smaller than ~11 px at that
  width)

### Requirement 9: Sectors grid

The app SHALL render the six building types with the same hairline-grid kit as Requirement 7 and the
reference's per-sector priority badge.

#### Scenario: Visitor reads where the failure costs money

- **GIVEN** the band is in view
- **WHEN** the grid is inspected
- **THEN** the cells are `Restaurants and kitchens`, `Data and comms rooms`, `Offices and multi-tenant`,
  `Retail and showrooms`, `Warehouses and light industrial`, `Medical and dental`
- **AND** the badges are `Priority one by default` (restaurants, data rooms, **medical**),
  `Priority two, upgradeable` (offices, retail) and `Quoted per site` (warehouses) — the reference
  really does label medical as priority one *and* list it last, so the badge order is: 1st and 2nd and
  6th = priority one, 3rd and 4th = priority two, 5th = quoted per site
- **AND** the sample-data footnote `Sample sectors for demonstration. Replace with your own before
  launch.` sits beneath the grid

### Requirement 10: Service areas

The app SHALL render the 12-town list as a two-to-three-column list of hairline rows and keep the
"replace this list" footnote.

#### Scenario: Visitor checks the radius

- **GIVEN** the band is in view at ≥1024 px
- **WHEN** it is inspected
- **THEN** the left column (`col-span-5`) holds `h2 Where we work` and the lede
  `Tarrant County and the western half of the metroplex. Response tiers only mean something inside a
  radius we can actually hold, so we keep the map honest.`
- **AND** the right column (`col-span-7`) lists `Fort Worth`, `Arlington`, `Grapevine`, `Southlake`,
  `Keller`, `Bedford`, `Euless`, `Hurst`, `Mansfield`, `Burleson`, `Haltom City`,
  `North Richland Hills` as `grid-cols-2 sm:grid-cols-3` rows with `border-b border-ink-100 py-2.5`
- **AND** the footnote `Replace this list with your own towns. Written as plain text it is the cheapest
  local search signal a services site has.` follows the list

### Requirement 11: Testimonials carousel

The app SHALL render the three references in a carousel whose paging behaviour matches the reference at
every width, including the fact that it is static at desktop.

#### Scenario: Visitor views the testimonials at desktop width

- **GIVEN** the viewport is ≥1024 px
- **WHEN** the band is inspected
- **THEN** all three cards are visible side by side on the `gray-50` ground, with **no dots and no
  arrows** — the reference's own kit produces one page of three and hides both (measured at 1440 px)
- **AND** each card is `rounded-2xl bg-white p-8 shadow-soft` with five `primary-400` stars, a
  `text-lg font-medium` quote and a 48 px `bg-primary-100 text-primary-600` initial disc beside the name
  and role
- **AND** the three are Dana Okonjo (Facilities manager, multi-tenant office), Bill Haverty (Operations,
  restaurant group) and Priya Venkataraman (Estates, medical group), with the reference's quoted
  wording kept close (it is the page's only social proof)

#### Scenario: Visitor views the testimonials at tablet or phone width

- **GIVEN** the viewport is below 1024 px
- **WHEN** the band is inspected
- **THEN** two cards are visible between 640 and 1023 px and one below 640 px, and the dot row appears
  with one dot per page (`w-8 bg-primary-600` when active, `w-2.5 bg-gray-300` otherwise)
- **AND** the arrows become usable and advance one page, wrapping at the end
- **AND** autoplay advances every 5 s, pauses on hover, resumes on leave, and does not start under
  `prefers-reduced-motion: reduce`

#### Scenario: Visitor inspects the arrows on a phone

- **GIVEN** the viewport is below 640 px
- **WHEN** the arrows are inspected
- **THEN** they are positioned so they remain inside the viewport rather than 16 px outside the card
  edge, which is where the reference's inline `display:flex` leaves them (Deviation 6)

### Requirement 12: FAQ accordion (exclusive)

The app SHALL render five exclusive rows whose panels animate open and whose icon rotates 45°.

#### Scenario: Visitor opens a question

- **GIVEN** the FAQ band is in view
- **WHEN** `What happens if you miss a response time?` is activated
- **THEN** its panel expands to its content height and fades in, and the plus disc rotates 45°
- **AND** activating a second question closes the first, so exactly one is open at a time
- **AND** the five questions are, in order: `What happens if you miss a response time?`, `Who owns the
  asset data?`, `Are consumables included?`, `Will we get the same engineer?`, `Can we start without an
  agreement?`, each with the reference's answer kept close — those five answers are the page's real
  sales argument (the credit is applied automatically, the asset data is yours, filters and belts are
  in the fee, you get a named engineer plus a named backup, and time-and-materials is possible but
  slower)

#### Scenario: Visitor uses the keyboard or a screen reader

- **GIVEN** the FAQ is in view
- **WHEN** the visitor tabs to a question and presses `Enter` or `Space`
- **THEN** the panel toggles exactly as a click does and focus stays on the question
- **AND** the button exposes `aria-expanded` and `aria-controls`, and the open panel is a labelled
  region — the reference exposes neither (Deviation 10)

### Requirement 13: Closing band

The app SHALL render the flat `#175090` band with a white solid control and a `border-2 border-white/40`
ghost control.

#### Scenario: Visitor reaches the end of the page

- **GIVEN** the closing band is in view
- **WHEN** it is inspected
- **THEN** its ground is `#175090` with 112 px vertical padding and **no gradient, dot grid or blobs**
- **AND** the centred `h2` reads `Comparing maintenance proposals?` in white at 30→36 px, the lede reads
  `Ask every bidder what happens when they miss a response time, then compare the answers.` in
  `text-primary-100`
- **AND** the solid control is white with `text-primary-700` and targets the survey form, and the ghost
  control is `border-2 border-white/40` with a phone glyph and dials the business number

### Requirement 14: Footer

The app SHALL render the four-block `gray-900` footer in the reference order and SHALL add the house
Component Dock credit.

#### Scenario: Visitor reads the footer

- **GIVEN** the footer is in view
- **WHEN** it is inspected
- **THEN** the columns are the brand block (light wordmark, blurb, three `rounded-lg bg-gray-800 p-2.5`
  social tiles, `900 Northeast 28th Street, Fort Worth, TX 76106`, `(555) 100-1000`,
  `service@plantroom.example`), `Services` (four service labels), `Company` (`Response tiers`,
  `Agreements`, `Service areas`, `About`), `Support` (`Contact`, `Privacy`, `Terms`) and
  `Stay Updated` with an e-mail field and `Subscribe`
- **AND** the `Services` labels stay the reference's four — `Rooftop units`, `Close control`,
  `Refrigeration`, `Extract ventilation` — because they name the plant the agreement covers
- **AND** the bottom bar holds `© 2026 Plantroom Mechanical. All rights reserved.`, `Privacy Policy`,
  `Terms of Service`, **and a `Component Dock` link to `https://www.componentdock.com/`** (house rule;
  the reference has no such link)

#### Scenario: Visitor subscribes

- **GIVEN** the newsletter field is empty or invalid
- **WHEN** `Subscribe` is activated
- **THEN** the field shows the same inline error treatment as the survey form and nothing navigates
- **AND** with a valid address the field clears and the success toast appears — the reference's
  newsletter form is inert (Deviation 5)

### Requirement 15: Navigation mapping (single page)

The app SHALL resolve the reference's six nav labels and its route links against bands that exist on the
page, and SHALL NOT introduce a band the landing page does not have.

#### Scenario: Visitor uses the navigation

- **GIVEN** the header is rendered at a desktop width
- **WHEN** each nav item is followed
- **THEN** `Response tiers` targets the response band, `Agreements` the agreement band, `Services` the
  sectors band, `Service areas` the areas band, `About` the why-us band, and `Contact` the closing band
- **AND** the header's location pill targets the areas band (the reference's `#service-areas` fragment is
  broken on this page — Deviation 11), the phone pills dial the footer number, and the `Request a site
  survey` CTAs target the survey form's card
- **AND** every target id exists, no anchor is left pointing at `#`, and in-page links offset by
  `header.offsetHeight + 20`

### Requirement 16: Accessibility and provenance

The app SHALL meet the house accessibility baseline and SHALL NOT reference the source design anywhere
in `apps/plantroom`.

#### Scenario: Keyboard and screen-reader use

- **GIVEN** a keyboard-only visitor
- **WHEN** they tab from the top
- **THEN** the first stop is the skip link, and the disclosure, the carousel, both forms and every FAQ
  row are operable from the keyboard with a visible focus ring against every ground (including the
  `#13171a` band and the `#175090` band)
- **AND** `role="dialog"` is set on the cookie strip only, `aria-expanded` on the menu and the FAQ
  buttons, `aria-invalid` + `aria-describedby` on invalid fields, and the decorative SVG (ticks, stars,
  glyphs) is `aria-hidden` while the asset-register panel keeps its `role="img"` + label
- **AND** no text sits below 4.5:1 against its ground — the pairs the design uses are white on
  `#13171a`, white on `#175090`, `#1f252a`/`#57626c` on `#f5f6f7`, `#1963b4` on white and
  `text-white/70`-or-lighter on `#13171a`; **`text-white/40` micro-labels are decorative and must be
  lifted to at least `text-white/60`** if they carry the only instance of a fact

#### Scenario: Provenance audit

- **GIVEN** the implementation is complete
- **WHEN** `grep -ril "colorlib" apps/plantroom` runs
- **THEN** it prints nothing
- **AND** no file contains the source brand (`Curbline`, `Curbline Mechanical`), its
  `service@curblinemech.example` mailbox, its wordmark SVG, its `asset-panel.svg` or its stylesheet; the
  wordmark and the register panel are redrawn from the documented geometry, and the footer links
  `https://www.componentdock.com/`

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is an eight-route Astro site (`/agreements`, `/services`,
   `/service-areas`, `/about`, `/contact`, `/privacy`, `/terms` and `/`, all live; `/elements` is a
   404 — see §Link and destination census). The recreation is the single landing page described here.
   Route links become in-page fragments per Requirement 15: `/agreements` folds into the agreement band
   (whose six inclusions are the "what's in the fee" half of that page), `/services` into the sectors
   band, `/service-areas` into the areas band, `/about` into the why-us band, `/contact` into the
   closing band, and `/privacy`/`/terms` are not rebuilt. The inner pages' *exclusion* content is the
   deliberate omission: it is the most valuable copy on the reference and it does not fit a one-page
   site.
2. **Dark mode dropped.** The source compiles a complete dark palette (`dark:` on most utilities) plus a
   `localStorage` theme toggle and an `applyTheme()` boot script. The recreation is light-only (house
   convention) and drops the toggle, so the header cluster is the two pills plus the CTA. Every dark
   value measured is recorded above so the decision is reversible.
3. **Cookie persistence.** The source stores `cookie-consent` in `localStorage`; the recreation keeps
   the dismissed state in component state so no test depends on an invented storage key.
4. **Copy and identity re-branded.** Plantroom replaces the source brand everywhere: the wordmark
   (redrawn from the same idea — a dark rounded square containing a brand-blue bar over two pale dots,
   with `Plantroom` in Inter 700 and a letterspaced `MECHANICAL` in JetBrains Mono), the `© 2026` line,
   the mailbox (`service@plantroom.example`), the document title, the OG/meta set and every URL. The
   fictional Fort Worth address, the `(555) …` numbers, the TACLA licence string, the town list, the
   tier wording and the testimonial names are kept — they are already fictional and they are the page's
   content.
5. **The inert forms are wired.** Both reference forms (`data-form`, `data-newsletter-form`) bind to no
   handler at all, so submit navigates to `/#` with no validation. The recreation validates locally and
   confirms with the kit's own toast. Nothing is sent anywhere; if the implementer prefers a real
   endpoint, that is a product decision and must be noted in the PR.
6. **Carousel arrows are clamped.** The kit writes `display:flex` inline on both arrows whenever there
   is more than one page, which overrides their `hidden … lg:flex` classes — so the reference shows
   arrows at every width, 16 px outside the card edge on a phone. The recreation keeps the reference's
   page behaviour but keeps the arrows inside the layout below `sm`.
7. **`#service-areas` fragment repaired.** Two anchors (the header location pill and its mobile twin)
   point at `#service-areas`, an id the landing page does not have; its band id is `areas`. The
   recreation points them at the band that exists (Requirement 15).
8. **Reference defects not reproduced.** The three `href="#"` social tiles get real external hrefs with
   `rel="noreferrer"`; the footer's malformed `tel:(555) 100-1000` becomes `tel:5551001000`; the
   `.example` mailbox stays `.example` (it must never resolve); `og-image.jpg` (a `404` on the reference)
   is generated for the app or dropped from the meta set; and the JSON-LD `HVACBusiness` block is
   replaced with the app's own name/address or omitted rather than copied with the source brand.
9. **Sample-data disclosures are kept and strengthened.** The reference labels its rating
   `(sample)` / `· sample data` and both grids' contents as demonstration copy. The recreation keeps
   those strings verbatim — they are the honest part of the design and removing them would turn a
   template into a false claim.
10. **Accessibility attributes added.** The reference's FAQ buttons have no `aria-expanded`, its panels
    no `aria-controls`, and its form errors (which never render) no association. The recreation adds
    them, plus a visible focus ring on the two dark grounds.
11. **The asset-register panel is redrawn, not copied.** The source ships a 2,429 B `asset-panel.svg`.
    The recreation reimplements the same panel as an inline React SVG using the measured geometry and
    palette above. Nothing is downloaded from the preview at runtime.

## Verification checklist

- [ ] Spec validates: `openspec validate template-plantroom --type spec` prints
      `Specification 'template-plantroom' is valid`
- [ ] `apps/plantroom` scaffolded from the simplest existing app, package renamed
      `@free-react-templates/plantroom`, `public/CNAME` = `plantroom.free.componentdock.com`,
      `homepage` = `https://plantroom.free.componentdock.com`
- [ ] Tokens: `primary` `#edf6ff` → `#183961` with **`#1963b4`** as the brand and `#175090` as its
      hover, `ink` `#f5f6f7` → `#13171a`, stock `gray` 50–900 for the footer and the testimonial/FAQ
      bands, `amber-400` for stars and `#f6bb63` only inside the register panel; radii 8/12/16 px;
      `shadow-soft` `0 4px 16px -4px #0000001a`
- [ ] Fonts: **Inter 400–800** and **JetBrains Mono 400–700** via two `<link>`s; `tabular-nums` on the
      tier SLAs and any figure; no third family
- [ ] `.btn` / `.btn-primary` / `.nav-active` / `.section` reproduced; **no** `.text-gradient`, no float
      animation, no typewriter, no counter — none of them are used by this design
- [ ] Licence strip: 36 px `#1f252a`, licence + insurance + county + `4.8`/`70+ (sample)` rating,
      two middle facts hidden below `sm`
- [ ] Header: sticky `white/90` + blur, 64/80 px, **six** links from **`xl`**, phone pill from `md`,
      location pill only at `2xl`, CTA from `xl`, hamburger below `xl`, `shadow-lg` past 50 px,
      scroll-spy on `response` only
- [ ] Hero: `#f5f6f7` ground, 12-col split (7/5), eyebrow, 60 px `h1` with the second sentence in
      `#1963b4`, 18 px lede, five amber stars + sample rating, 2×2 tick checklist, **no image**
- [ ] Survey card: `#quote`, `rounded-2xl`/16 px, white, 32 px padding, `shadow-md`, 3 fields with the
      seven-option `What prompted this?` select, full-width CTA, footnote
- [ ] Forms: local validation (required + e-mail), inline errors with `aria-invalid`/`aria-describedby`,
      reset on success, kit-styled green toast, **no navigation and no network**
- [ ] Response band: `#13171a`, three cards, card 1 ringed `primary-400` + `bg-white/[0.07]`, mono
      JetBrains 30 px SLAs in `#7bbcfb`, `What qualifies` / `If we miss it` `dl`, sample footnote,
      `.btn-primary` CTA to the agreement band
- [ ] Agreement grid: 6 cells in the reference order, `gap-px` over an `#e9ebed` block, badges
      `In the monthly fee` ×5 + `Quoted per job`, sample footnote
- [ ] Why-us: figure left on `lg`, asset-register SVG redrawn (5 rows, `Replace` in `#f6bb63`,
      call-out box), caption, four `border-l-2 border-primary-600` definitions
- [ ] Sectors grid: 6 cells, badges `Priority one by default` ×3 (incl. medical), `Priority two,
      upgradeable` ×2, `Quoted per site` ×1, sample footnote
- [ ] Areas: 12 towns in order, `grid-cols-2 sm:grid-cols-3`, hairline rows, replace-me footnote
- [ ] Testimonials: 3 quotes with initials discs and roles; **static 3-up with no dots/arrows at
      ≥1024 px**, 2-up/1-up with dots + arrows below; 5 s autoplay paused on hover, off under reduced
      motion; arrows inside the viewport below `sm`
- [ ] FAQ: five rows, **exclusive**, `aria-expanded`/`aria-controls`, icon rotates 45°, `max-height`
      transition, the five questions in the reference order
- [ ] Closing band: flat `#175090`, white solid CTA + `border-2 border-white/40` ghost with phone glyph
- [ ] Footer: brand block + `Services`/`Company`/`Support`/`Stay Updated`, working newsletter
      validation, legal bar with the `Component Dock` link to `https://www.componentdock.com/`
- [ ] Chrome: no preloader overlay, skip link, progress bar, back-to-top, cookie strip in state and
      `role="dialog"`
- [ ] No `colorlib` string, no source brand, no `service@curblinemech.example`, no copied SVG or
      stylesheet under `apps/plantroom`; wordmark and register panel redrawn
- [ ] Row added for the design under `## Business` with the heading corrected to `(368)` and flipped to
      `[x]` with the bookkeeping commit (the exact line is in §Purpose)
- [ ] `npm run spec:validate`, `scripts/verify-app.sh plantroom` and the CI gate are green
