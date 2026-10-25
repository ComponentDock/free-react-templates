# Template: Emberly (Business — boiler cover plans sold as the hero, in place of a photograph)

## Purpose

A one-page site for a **domestic heating and plumbing firm whose product is a monthly cover plan**. The
design's opening argument is unusual for a trade site: there is **no photograph anywhere** — the hero's
right-hand seven columns are **three plan cards**, the middle one ringed in brand blue and badged
`MOST CHOSEN`, so the visitor meets the price before the sales copy. The page then does the arithmetic
the customer would otherwise do in their head (a **finance slider** that turns an installation quote into
a monthly figure), prices the six jobs in a **hairline-divided six-cell grid**, inserts a single
**warm-ember warning band** (*Service the boiler before winter, not during it*), walks three numbered
steps, lists twelve Leeds towns, runs a three-slide review carousel, answers five questions about cover,
and closes on a flat brand-blue band with two CTAs.

The whole page is **cool steel blue on a navy-tinted ink ramp**, typeset in **DM Sans** (300–700), with
radii of 8 / 12 / 16 px and exactly **one warm colour on the page** — the ember accent (`#f0705a` family)
reserved for the seasonal band's left rule and its CTA, plus the flame in the logo. That single warm band
is the design's emotional punctuation: do not spread it across the page.

Recreation of the ColorLib "Heatline" design (https://colorlib.com/wp/template/heatline/, live preview
https://preview.colorlib.com/theme/heatline/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `heatline`
* **ColorLib page:** https://colorlib.com/wp/template/heatline/ — HTTP 200, 111,896 B,
  `<title>` **"Heatline - Plumbing and Heating Website Template 2026 - Colorlib"**. Its
  `<meta name="description">` states the design decision this spec is built around: *"Boiler cover is
  bought by comparison, not under pressure, so the three plans are the hero rather than a photograph. A
  finance slider turns an installation quote into a monthly figure on the page, and the plan exclusions
  are stated on the plans page rather than buried in policy wording."*
* **Live preview:** https://preview.colorlib.com/theme/heatline/ — HTTP 200, 64,887 B, page `<title>`
  **"Boiler installation, repairs and cover plans in Leeds | Heatline"**, read 2026-10-25 with
  `curl -4` (this host resolves an IPv6 address that is blocked, so every fetch needs `-4`).
  Astro build with Tailwind 4 output (`/*! tailwindcss v4.3.3 */`).
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**heatline-template.jpg** — HTTP
  200, 274,236 B, a real **JPEG** (unlike several siblings, which serve AVIF behind a `.jpg` name),
  **2400×1892**, a macOS-Safari-window-framed capture of the licence strip, the header, the whole hero
  (all three plan cards) and the top of the finance band down to the `£77 a month` readout.
  ⚠️ This design has **no `TEMPLATES.md` row**, so there is no `![preview]` thumbnail to reuse: the
  catalogue capture above is the screenshot reference, discovered from the ColorLib post's
  `og:image`.
* **New name:** `emberly` (`apps/emberly`, `@free-react-templates/emberly`) — one lowercase word, taken
  from the design's own single warm accent (the ember `#f0705a` flame in the logo and the seasonal
  band's rule), the way a heating firm names itself rather than describes its layout. It differs from the
  source slug; no `apps/emberly`, no `openspec/specs/template-emberly/`, no `docs/templates/emberly/`,
  and `git grep -il emberly origin/main` prints **nothing**. All three ColorLib URL forms
  (`wp/template/emberly/`, `theme/emberly/`, `theme/bootstrap/emberly/`) return **404** (probed
  2026-10-25). Rejected on the same checks and recorded so the next auditor does not retry them:
  `hearth` (an existing `apps/hearth` **and** `template-hearth` spec), `calor`, `vesta` (both already
  appear in shipped app code) and `warmfront`/`cinderby` (repo-clean but weaker suggestions). Do not
  rename without re-running the four checks (folder, spec, `git grep`, ColorLib 404).
* **Deploy target:** https://emberly.free.componentdock.com (`apps/emberly/public/CNAME`, `homepage` in
  `apps/emberly/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## Business (369)` (line 880 on `origin/main` `334179a34`), the commercial-services
  section that already holds the sibling catalogue-gap preps (Thermly, Plantroom, Flowcert, Veranda,
  Closeknit, Stoke, Aquifer, Kettle, Smallpaw, Chalkline, Percline).

### Why this design has no row (catalogue gap, measured 2026-10-24/25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, **2,862** `[x]` rows on `origin/main` `334179a34` — but the
**catalogue is not complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled and
compared with the 1,631 slugs the checklist cites, and **256 designs are on the listing that the
checklist never recorded** (42 standalone + 214 snippet variants). The census, its commands and both
buckets are recorded in `docs/catalog-coverage.md`, whose standalone table already carries this design's
line: `heatline` — *preview 200, 64887 B* (the byte count matches this run's fetch exactly).

**Eleven** of the 42 standalone designs were prepped before this run — five shipped (Thermly, Flowcert,
Veranda, Plantroom, Aquifer) and six pending (Kettle, Smallpaw, Chalkline, Closeknit, Stoke, Percline) —
and they established the hand-off pattern this spec follows. This is the **twelfth**. No spec on main
names `theme/heatline` (`git grep -l 'theme/heatline/' origin/main -- openspec/specs docs` → nothing), no
app named `heatline` or `emberly` exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this
line into `## Business` **in source-name alphabetical order** (the section is ordered by the ColorLib
source name; `Heatline` sorts between **Hardenero** and **Heaven** — `H-e-a-t` < `H-e-a-v`), and bump the
heading count:

```
- [x] **Heatline** — [colorlib](https://colorlib.com/wp/template/heatline/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/heatline-template.jpg) · [emberly](https://emberly.free.componentdock.com)
```

⚠️ **Re-measure the count before you write it.** On `origin/main` `334179a34` the section reads
`## Business (369)` over **369** rows (line 880). Adding Heatline makes **370**. Count the rows; do not
copy this number.

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/heatline/` page (DOM authority) | 64,887 | `88ae83aeffdc1cfaab7aa5cae89763884473ba0d5c9fd16d3baa03f07b10c291` |
| `theme/heatline/_astro/Base.CvHGvUwD.css` (token authority) | 59,082 | `473c5938c6d0dfec6ab754c4004bc6067b08ce9f7757ceb9d392b13655dc7a7a` |
| `theme/heatline/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (house kit) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/heatline/_astro/ClientRouter…CYDbzu1r.js` (view-transition router) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| inline `<style>` (`@font-face` for **DM Sans** 300/400/500/600/700, 10 declarations over 2 subsets) | 3,280 | — |
| inline `<script>` 1: `applyTheme()` | 454 | — |
| inline `<script>` 2: JSON-LD `Plumber` (**valid** — unlike the Fieldline sibling's corrupt block) | 294 | — |
| inline `<script>` 3: the **finance calculator** | 656 | — |
| inline `<script>` 4: preloader removal + smooth in-page scroll | 370 | — |
| `assets/img/logo.svg` (viewBox 190×38, rendered `h-8 lg:h-9`) | 404 | `0016a839b01e4aa50fdd9ae9b53aed300a1ca5c556c1911638d4a0952fc5adc8` |
| `assets/img/logo-light.svg` (footer, `h-10`) | 404 | `42b2e1627b5bc292f9714b1d7b89db87a109f327a35dabbdd357ed01a6bd85c7` |
| `favicon.svg` | 377 | `5d183df4c100257454ea9657642d6dcdbee62f744542c97b5b6c64b3075d9aa7` |
| catalog screenshot `heatline-template.jpg` (real **JPEG**, 2400×1892) | 274,236 | `18710b7aa54b800f65a5789bd68bc0f29b223aed1e539dca5d9ff334b55b3fea` |
| `colorlib.com/wp/template/heatline/` (catalog entry) | 111,896 | `2846f878af0b1286c6edfa9b027c6b92694dca63db9dda27085dfce3c114b5dc` |
| `css/style.css`, `js/snippet.js`, `downloads/free/heatline.zip`, the page's own `og:image=/og-image.jpg` | — | **HTTP 404** — Astro build, so the live preview is the sole DOM/CSS reference and the OG image the page advertises does not exist |

The preview is an **Astro build with Tailwind 4 output**: one stylesheet, one kit script, one client
router. **Both `_astro` scripts are byte-identical to the ones the Aquifer (Dowser), Plantroom
(Curbline), Veranda (Commons), Stoke (Coldsnap), Closeknit (Circles), Kettle (Everhot), Smallpaw
(Fernhill) and Percline (Fieldline) preps measured** — the same house kit renders every one of these
2026 designs, so the *behaviour* inventory transfers while the markup, palette and band order do not.
**Do not copy a sibling's tokens because the kit hash matches**, and note that a matching *face* is not a
matching *design* either: Percline is also **DM Sans**, but it is green on warm stone, while Emberly is
blue on a cool navy ink ramp. This page's own palette and the ember accent are what make it this design.

The catalog entry's prose agrees with the live page's positioning but is written differently. The **live
preview is the authority**; where the two disagree, the DOM wins.

## Design tokens (measured from `_astro/Base.CvHGvUwD.css`, 59,082 B, and the live render at 1440 px)

### Brand ramp — `primary` (steel / trade blue, not a Tailwind stock ramp)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#eff6fb` | the `MOST CHOSEN` pill's ground (`bg-primary-50`), `hover:bg-primary-50` on the closing band's white CTA |
| `primary-100` | `#dbebf6` | **the two pill eyebrows** (`bg-primary-100`, testimonials + FAQ) |
| `primary-200` | `#b4d5ec` | in the sheet (`bg-primary-200/50`, `border-primary-200`); unused on this page |
| `primary-300` | `#83b8dd` | **dark mode only** (`dark:text-primary-300`) — the pill eyebrows' dark text, dark links |
| `primary-400` | `#4a95c8` | **the fifteen testimonial stars** (`text-primary-400`), `dark:text-primary-400` everywhere |
| `primary-500` | `#2a7cb4` | footer input focus border/ring, `hover:border-primary-500`, focus rings |
| `primary-600` | `#1e6fa8` | **brand** — every solid button, the eyebrow on the hero/finance/services/process bands, the scroll-progress bar, the back-to-top disc, the tick glyphs, the process step numbers, the checkmark SVGs, `focus:ring-primary-500` offsets |
| `primary-700` | `#185887` | **every eyebrow on a light ground for the services/process bands** (`font-bold` variant), the prices, the `Choose` link hover, `hover:bg-primary-700` on primary buttons, **the closing band's ground** |
| `primary-900` | `#113954` | **dark mode only** (`dark:bg-primary-900`, `/30`, `/40`, `/50`) — the pill eyebrows' dark ground |

### Neutral ramp — `ink` (cool navy-grey; this is what makes the blue read warm rather than corporate)

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f4f8fb` | in the sheet; **unused on this page** |
| `ink-100` | `#e5eef4` | every light card/header border, **the services grid's gutter fill** (`bg-ink-100`), the process hairline rules, the finance card's divider |
| `ink-200` | `#c8dae6` | the hero's ghost CTA border, the plan cards' `Choose` border |
| `ink-300` | `#9bb6c9` | compiled only as `.placeholder\:text-ink-300`; **no field on this page uses it** (the only form is the footer email field, which uses `placeholder-gray-500`) |
| `ink-400` | `#5f7f96` | the plan cards' `a month` suffix, the service prices' footnote, the finance card's `£800`/`£4,500` end labels and `Total repayable` line |
| `ink-500` | `#3d5e76` | **body copy on light grounds** (measured `rgb(61,94,118)`), card blurbs, the process bodies, the areas list heading lede, `Book a repair`'s resting text is `ink-700` |
| `ink-600` | `#26485e` | the plan cards' tick text, the seasonal band's body, the ghost CTA text, the finance label |
| `ink-700` | `#1a3a4e` | **the twelve town rows**, the ghost CTAs' text, form labels |
| `ink-800` | `#14324a` | **`h1`/`h2`/`h3` on light grounds** (measured `rgb(20,50,74)`), **the licence strip's ground** (`bg-ink-800`, measured `rgb(20,50,74)`) |
| `ink-900` | `#0e2434` | in the sheet; **unused on this page** (the footer uses stock `gray-900`) |

### Accent ramp — `heat` (the ember; **one band and the logo only**)

| token | hex | where |
| --- | --- | --- |
| `heat-50` | `#fef2f0` | **the seasonal band's ground** (`bg-heat-50`, measured `rgb(254,242,240)`) |
| `heat-400` | `#f0705a` | **the seasonal band's 4 px left rule** (`border-l-4 border-heat-400`) and **the flame in `logo.svg`** |
| `heat-600` | `#ce4630` | **the seasonal band's `Book a service` CTA** |
| `heat-700` | `#a93727` | the seasonal band's eyebrow (`Before the cold`) and the CTA's hover |
| `heat-300` | `#f6a899` | **dark mode only** (`dark:text-heat-300`) |
| `heat-500` | `#e55940` | **dark mode only** (`dark:border-heat-500`) |
| `heat-900` | `oklab(37.1685% .0902038 .053282)` ≈ `#4a2a20` | **dark mode only** (`dark:bg-heat-900/20`) |

### Chrome grey, status colours, grounds

| token | value | where |
| --- | --- | --- |
| `sky-100` | `#e3f2fa` | **the `#finance` band's ground** (measured `rgb(227,242,250)`) — the only sky token on the page |
| `gray-50` | `#f9fafb` | **`#testimonials` ground** (measured `rgb(249,250,251)`) |
| `gray-100` | `#f3f4f6` | the FAQ plus-discs (`bg-gray-100`) |
| `gray-200` | `#e5e7eb` | the FAQ `divide-y` rule, the cookie strip's top border |
| `gray-300` | `#d1d5db` | the cookie `Decline` border |
| `gray-400` | `#9ca3af` | footer body copy, footer links, `Subscribe`'s neighbours |
| `gray-500` | `#6b7280` | footer legal text, the footer email placeholder, the FAQ disc glyph |
| `gray-600` | `#4b5563` | testimonial town lines, cookie copy |
| `gray-700` | `#374151` | the footer email field's border (`border-gray-700`), `dark:border-gray-700` |
| `gray-800` | `#1f2937` | the footer email ground, the footer bottom rule |
| `gray-900` | `#111827` | **footer ground**, the testimonial/FAQ headings (`text-gray-900`), the FAQ questions, the blockquote text |
| `gray-950` | `#030712` | `dark:` ground for the hero, services, process, areas, FAQ and the mobile menu |
| `amber-400` | `oklch(82.8% .189 84.429)` = `#fbbf24` | **the five hero stars and the licence strip's star** — the only amber on the page |
| white | `#fff` | hero/finance-card/services/seasonal band/process/areas/FAQ grounds, the plan cards, the closing band's solid CTA |

**Note the three-ramp split:** the page chrome (footer, testimonial ground, FAQ rules, headings inside
those two bands) uses stock Tailwind `gray`, the product surfaces use `ink`, and the accent is `heat`.
That is the reference — keep all three, do not "normalise" one into another. The stars **deliberately
differ** by band: `amber-400` in the licence strip and the hero, `primary-400` inside the testimonials —
copy both, do not unify.

### Typography

One face, delivered from the preview's own `/cf-fonts/v/dm-sans/5.2.8/…` cache inside the 3,280-byte
inline `<style>` (which is why grepping the sheet for `@font-face` finds nothing):

* **DM Sans** — the whole page, `body { font-family: DM Sans, system-ui, sans-serif }` (measured).
  Ten `@font-face` declarations: **300, 400, 500, 600, 700** over the `latin` and `latin-ext` subsets,
  all pointing at two `wght`-axis `woff2` files (`…/latin/wght/normal.woff2`,
  `…/latin-ext/wght/normal.woff2`). There is **no second family on the page** — `font-mono` is never used
  (0 occurrences in 396 `class` attributes), unlike the Fieldline sibling's JetBrains Mono labels.

| role | measured | notes |
| --- | --- | --- |
| `h1` | `text-4xl` 36 → `sm:text-5xl` 48 → `lg:text-6xl` **60 px / 69 px / −1.5 px**, **`font-medium` (500)**, `leading-[1.15]`, `tracking-tight`, `text-ink-800` | measured 469×138 at 1440 and 36 px / 41.4 px / −0.9 px at 390. **Weight 500, not 700** — this is the page's most easily missed token; the services/process headings are the bold ones |
| `h2` | 30 px `text-3xl` → `sm:text-4xl` **36 px / 40 px / −0.9 px** at 1440 (30 / 36 / −0.75 at 390) | **weight splits by band**: `#finance`'s h2 is `font-medium` (500, measured), while `#services`, `#process`, `#areas`, `#testimonials`, `#faq`, `#contact` use **`font-bold` (700, measured)**. Do not unify |
| seasonal `h2` | `text-xl` → `lg:text-2xl` **24 px / 500** | the only sub-30 px band heading; measured `rgb(20,50,74)` |
| `h3` | 18 px `text-lg font-bold` | the six services, the three plan names, the three process steps; measured `rgb(20,50,74)` |
| lede | 18 px / 29.25 px, **`font-light` (300)**, `text-ink-500` on the hero and finance bands, `text-ink-500`/`text-gray-600` in services/testimonials | the 300 weight is real and loaded — do not render it at 400 |
| eyebrow (light bands) | 14 px `text-sm`, `uppercase`, `tracking-wide` (**0.35 px measured**), `text-primary-600` on the **hero** (weight **500**) but `font-bold text-primary-700` on **services/process** (`#185887`) | two different eyebrow treatments in the reference; measured both |
| eyebrow (seasonal) | 14 px `font-medium uppercase tracking-wide text-heat-700` | `#a93727` |
| pill eyebrow | `rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700` | testimonials (`Reviews`) and FAQ (`Questions`) only — these bands centre their headers |
| body | 16 px / 24 px, `text-gray-900` (`body` colour measured `rgb(17,24,39)`) | card copy uses `ink-500`, the seasonal band `ink-600 font-light` |
| price | `text-3xl font-bold` + `text-sm text-ink-400` (`a month`), baseline-aligned with `gap-1` | plan cards |
| footer column head | `text-sm font-semibold uppercase tracking-wider text-white` (14 px / 600, measured) | `Heating`, `Company`, `Support`, `Stay Updated` |

Load it with one `<link>` (this exact URL returns 200; the bare `css2?family=DM+Sans` also returns 200):

```
https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap
```

### Buttons, radii, shadows

| token | value | where |
| --- | --- | --- |
| hero solid CTA | `rounded-lg px-6 py-3.5` (24 / 14 px), 16 px `font-medium`, `bg-primary-600`, white, `hover:bg-primary-700` | measured **210 × 54** at 1440, 210 × 52 at 390 — `Compare cover plans` |
| hero ghost CTA | `rounded-lg border border-ink-200 px-6 py-3.5`, 16 px `font-medium`, `text-ink-700`, `hover:border-primary-500 hover:text-primary-700` | `Book a repair` |
| header CTA | `rounded-lg px-5 py-2.5` (20 / 10 px), **14 px `font-bold`**, `bg-primary-600` | measured **186 × 40** — `Compare cover plans`, `hidden xl:inline-flex` |
| plan card CTA | `mt-6 block rounded-lg px-5 py-3`, 14 px `font-bold`, centred; outline `border-ink-200 text-ink-700 hover:border-primary-600 hover:text-primary-700` on the two plain cards, solid `bg-primary-600` white on the middle card | `Choose` |
| seasonal CTA | `rounded-lg bg-heat-600 px-6 py-3` (24 / 12 px), 14 px `font-medium`, white, `hover:bg-heat-700` | `Book a service` |
| finance CTA | `rounded-lg bg-primary-600 px-6 py-3.5`, 16 px `font-medium`, `hover:bg-primary-700` | `Get a fixed quote` |
| closing CTAs | `rounded-lg px-8 py-4` (32 / 16 px), 16 px `font-bold`; solid **white with `text-primary-700`** (`hover:bg-primary-50`), ghost `border-2 border-white/40` (`hover:border-white hover:bg-white/10`) with a 20 px phone glyph | measured 155 × 56 for the solid one |
| footer subscribe | `rounded-lg px-4 py-2.5`, 16 px `font-medium`, `bg-primary-600` | `Subscribe` |
| header pills | `rounded-full`, 14 px; phone pill `font-semibold` with a 14 px phone glyph, location pill `font-medium` with a 14 px pin | `Leeds`, `0800 000 0000` |
| radii | `lg` .5 rem (**8 px**) · `xl` .75 rem (12) · `2xl` **1 rem (16 px)** · `full` | `lg` = every button, input and pill-less control; `2xl` = the plan cards, the finance card, the seasonal band, the services grid, the testimonial cards; `full` = the header pills, the two eyebrow pills, the 32 px FAQ disc, the 48 px back-to-top |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | the three testimonial cards |
| `shadow-md` | stock Tailwind (`0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a`) | **the middle (`MOST CHOSEN`) plan card only** |
| `shadow-lg` | stock Tailwind | the header once scrolled (`shadow-lg` added at runtime), the back-to-top disc (`shadow-primary-600/25`), the cookie strip |
| `.section` | `padding-block: calc(var(--spacing) * 20)` = **80 px**, overridden at `@media (width>=64rem)` to `* 28` = **112 px** (measured 112 px at 1440) | `#finance`, `#services`, `#process`, `#areas`; `#testimonials`, `#faq`, `#contact` use `py-20 lg:py-28` instead (the same 80/112) |
| `animate-ping` / `animate-spin` | stock | **spin only** (the preloader ring); `ping` exists in the sheet but **no element on this page uses it** — do not invent an emergency dot |

### Rhythm, containers, measured heights

* Licence strip: `h-9` — **measured 37 px including the 1 px border**, `bg-ink-800`, `text-ink-100`,
  `text-xs`. The two middle facts (`Insured to £5m`, `Covering Leeds and West Yorkshire`) are
  `hidden sm:flex`.
* Header: `h-16` (64) → `lg:h-20` (80) — measured **81 px including the border**; sticky,
  `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100`, `transition-all`, gains `shadow-lg` past
  50 px of scroll.
* Scroll progress: `h-0.5` = **2 px**, `bg-primary-600`, `fixed top-0 left-0 z-[60]`.
* Hero: `bg-white`, `container … px-4 py-16 lg:px-8 lg:py-24` (so **64 / 96 px** vertical, not `.section`);
  measured **708 px** at 1440, 852 px at 1200, **1,896 px** at 390 (the three plan cards stack).
* Containers: `container mx-auto px-4 lg:px-8` everywhere; `max-width` **1280 px** at 1440 (measured
  1,216 px of content, 32 px padding-inline), 1024 at 1200 (960 content), 390 with 16 px padding at 390.
* Hero split: `lg:grid-cols-12` with **5 / 7** (`gap-12 lg:gap-16` = 48 / 64 px); left column
  `lg:col-span-5 lg:pt-4`; the right column is a wrapper with a **bare `class` attribute** (`<div class>` —
  an Astro artefact that renders as `class=""`), no rule depends on it.
* Plan cards: `grid gap-6 grid-cols-1 sm:grid-cols-3`, each `rounded-2xl border p-6` (24 px);
  measured **212 × 472** at 1440, **162 × 616** at 1200, **358 × 328** (and 412 for the middle card, which
  carries the badge) stacked at 390.
* Finance band: `#finance`, `bg-sky-100`, `.section` (112 px) — measured **916 px**; inner `max-w-3xl`
  **768 px**, card `rounded-2xl bg-white p-6 lg:p-8` measured **768 × 444** at 1440 (32 px pad) and
  **358 × 428** at 390 (24 px pad).
* Services grid: `mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100
  sm:grid-cols-2 lg:grid-cols-3`; cells `flex flex-col bg-white p-6 lg:p-8` — measured **404 × 184** per
  cell, grid 1,216 × 371 at 1440 (two rows), 1,063 px tall at 390 (six rows).
* Seasonal band: `py-12` (**48 px**), not a `.section`; inner box `rounded-2xl border-l-4 border-heat-400
  bg-heat-50 p-6 lg:p-8` — measured **1,216 × 208** at 1440 (32 px pad) and **358 × 328** at 390 (24 px);
  band height **304 px** at 1440, 424 at 390.
* Section heights at 1440 (measured, useful for eyeballing a build): licence 37, header 81, hero 708,
  `#finance` 916, `#services` 831, `#seasonal` 304, `#process` 564, `#areas` 448, `#testimonials` 768,
  `#faq` 820, `#contact` 412, footer **544**. Document height **6,433 px** at 1440, 6,725 at 1200,
  **9,859 px** at 390.
* Testimonial card: **381 × 320**, `rounded-2xl bg-white p-8` (32 px), `shadow-soft`; the slides are
  `flex-shrink-0 px-3` inside `overflow-hidden`, 3 per view at 1440 (405 px each of a 1,216 px track),
  1 per view at 390 (358 px).
* FAQ: `max-w-3xl` (768 px), `divide-y divide-gray-200`, rows `py-6`; question 18 px / **600**
  (`rgb(17,24,39)`), a 32 px `rounded-full bg-gray-100` disc holding a 20 px plus glyph.

## Reference document order (three chrome pieces before the header, nine bands, three after the footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white (`dark:gray-950`) | fixed `z-[100]`, 40 px `animate-spin` ring `border-4 border-gray-200 border-t-primary-600`; the page-local script removes it on `load` (verified gone after load) |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio (measured `7.23%` at `scrollY 400`) |
| — | `[data-licence-bar]` | **`bg-ink-800` `#14324a`, `text-ink-100`**, `h-9`, `text-xs` | left `<ul>`: `Gas Safe` / **`#000000`**, `Insured to £5m` (**sm**+), `Covering` / **`Leeds and West Yorkshire`** (**sm**+); right: an `amber-400` star + **`4.9`** + `600+ reviews on Checkatrade (sample)` |
| — | `header[data-header]` | `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100` | sticky `z-50`, 64/80 px: logo (`logo.svg` `dark:hidden` + `logo-light.svg` `dark:block`, `h-8 lg:h-9`) · **seven** nav links from **`xl`** (`Boilers`, `Cover plans`, `Repairs`, `Areas`, `About`, `Blog`, `Contact`, `gap-7`) · location pill (`Leeds`, opens `#service-areas`, a fragment that does not exist) · phone pill (`0800 000 0000`, `tel:08000000000`) · dark toggle · solid `Compare cover plans` (`xl`+) · hamburger (`xl:hidden`) |
| — | `[data-mobile-menu]` | white (`dark:gray-950`), `border-t`, `px-4 py-4` | `hidden xl:hidden` panel: the seven links as `block py-3` rows, then the phone + location pills and a full-width CTA; measured **492 px** open at 390, hamburger `aria-expanded=true` when open |
| 1 | (hero, no id) | **white** | `lg:grid-cols-12`, left `col-span-5 lg:pt-4`: eyebrow `Gas Safe registered · Leeds and West Yorkshire`, `h1 Keep the house warm all year.`, 18 px 300 lede (*Boiler installation, repairs and annual servicing, with cover plans that mean a breakdown in February is a phone call rather than a bill.*), **five `amber-400` stars** + `4.9` + `600+ reviews on Checkatrade · sample data`, then **`Compare cover plans`** + **`Book a repair`**; right `col-span-7`: the **three plan cards** (see below) and the footnote `Sample pricing for template demonstration. Replace with your own before launch.` **No image in the hero.** |
| 2 | `#finance` | **`bg-sky-100` `#e3f2fa`**, `.section` | `max-w-3xl`, **left-aligned**: eyebrow `Spreading the cost` (`primary-600`, 500), `h2 A new boiler, by the month` (**500**), 18 px light lede (*Move the slider to the sort of figure you have been quoted and see what it looks like spread over three years.*), then the **white calculator card** (label `Cost of the work`, `£2,400` at 30 px, a full-width range input `min 800 max 4500 step 50 value 2400`, `£800` … `£4,500` end labels, a `border-t` rule, `Over 36 months at 9.9% APR representative`, the monthly figure at **`text-4xl text-primary-700`** + `a month`, `Total repayable £0`, the `Get a fixed quote` CTA) and the footnote `Representative example for template demonstration only. Replace with your own lender's rates and the regulatory wording they require before launch.` |
| 3 | `#services` | white | `max-w-2xl` header: eyebrow `What we do` (**700** `primary-700`), `h2 Heating, and the plumbing around it`, lede *Domestic heating and plumbing across West Yorkshire. Prices are illustrative starting points.*; then the **six-cell hairline grid** (below); footnote `Sample prices for demonstration. Replace with your own before launch.` |
| 4 | `#seasonal` | white band, **`heat-50` box** | `py-12`, box `border-l-4 border-heat-400 bg-heat-50`, `lg:flex-row lg:items-center lg:justify-between`: eyebrow `Before the cold` (`heat-700`), `h2 Service the boiler before winter, not during it` (24 px / 500), body *Nine out of ten breakdowns we attend in January are on boilers that have not been serviced in over two years. A service in September costs £89 and takes an hour.*, footnote `Figures are illustrative sample content.`, and the ember CTA `Book a service` |
| 5 | `#process` | white | `max-w-2xl` header: eyebrow `How it works`, `h2 From quote to first hot radiator`, lede *Fixed price before we start, and a date we keep.*; then `<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` of **three** steps, each with a `text-sm font-bold tabular-nums text-primary-600` index (`01`/`02`/`03`), a `h-px flex-1 bg-ink-100` rule beside it, an 18 px bold title, a body and a `text-sm font-semibold text-primary-700` note |
| 6 | `#areas` | white | `lg:grid-cols-12` (`gap-10 lg:gap-16`): left `col-span-5` **`h2 Where we cover`** + lede (*Leeds and the towns around it, with a Gas Safe engineer on the road every weekday.*) — **no eyebrow here**; right `col-span-7` a `grid-cols-2 sm:grid-cols-3` list of **twelve** towns as `border-b border-ink-100 py-2.5` rows + the footnote `Replace this list with your own coverage before launch.` |
| 7 | `#testimonials` | **`bg-gray-50`**, `py-20 lg:py-28` | centred pill `Reviews`, `h2 What customers say` (**700**, `gray-900`), sample-data lede; **3-slide carousel** (`[data-carousel]`, `relative mt-16`): `rounded-2xl bg-white p-8 shadow-soft` cards with five **`primary-400`** stars, an 18 px `font-medium` `<blockquote>`, a 48 px `bg-primary-100 text-primary-600` initial disc + name + town; round arrows (`absolute -left-4` / `-right-4 top-1/2`, `hidden`) and a `[data-carousel-dots]` div the kit fills |
| 8 | `#faq` | white, `py-20 lg:py-28` | pill `Questions`, `h2 Before you book`, lede; `divide-y divide-gray-200` list of **five** rows inside `max-w-3xl`: full-width `button` + `py-6` + 18 px semibold question + a 32 px `rounded-full bg-gray-100 text-gray-600` plus-disc that rotates 45° when open, and a `max-height:0` panel (measured 88 px open, `duration-300`) |
| 9 | `#contact` | **`bg-primary-700` `#185887`**, `py-20 lg:py-28` | centred `max-w-3xl`: white `h2 Cold house, or a boiler on its last legs?` (36 px 700), `text-primary-100` lede (*Book a repair, a service, or a fixed quote for a replacement.*), then a **white** solid `Book online` + a `border-2 border-white/40` ghost `Call 0800 000 0000` with a phone glyph. Flat brand band — no gradient, no blobs, **no form** |
| — | `footer` | **`bg-gray-900` `#111827`**, `text-gray-300`, `pt-16 lg:pt-24` | 12-col grid: brand block `col-span-4` (`logo-light.svg` 40 px, blurb, **three** `rounded-lg bg-gray-800 p-2.5` 40 px social tiles — all `href="#"` — address `Unit 7, Kirkstall Road, Leeds, West Yorkshire LS4 2AZ`, phone, `hello@heatline.example`) · a nested `sm:grid-cols-3 lg:col-span-5` block with `Heating` (Boiler installation, Boiler repairs, Annual servicing, Landlord certificates), `Company` (Cover plans, Areas covered, About, Blog) and `Support` (Contact, Privacy, Terms) · `Stay Updated` `col-span-3` with a `border-gray-700 bg-gray-800` email field + `Subscribe`; bottom bar `mt-16 border-t border-gray-800 py-8`: `© 2026 Heatline. All rights reserved.` + `Privacy Policy` / `Terms of Service` |
| — | `#cookie-consent` | white (`dark:gray-900`), `border-t`, `shadow-lg` | fixed bottom `role="dialog"` `aria-label="Cookie consent"`, `translateY(100%)` in the markup, slides up 1.5 s after load, `Decline` (outline) + `Accept All` (primary) |
| — | `#back-to-top` | `primary-600` + `shadow-primary-600/25` | 48 px disc, `bottom-6 right-6`, appears past 300 px (measured `opacity: 1` at `scrollY 400`) |

**On mobile the bottom edge carries two fixed layers**: the cookie strip (`z-50`) and the 48 px
back-to-top disc (`bottom-6 right-6`, also `z-50`). There is **no sticky call bar** on this design —
unlike its Percline sibling. Do not invent one.

### The three plan cards (the hero's real content — reproduce in this order)

| # | name | price | blurb | tick list | CTA |
| --- | --- | --- | --- | --- | --- |
| 1 | `Boiler only` | **£9** `a month` | *Boiler and controls, parts and labour.* | `Unlimited callouts` · `Annual service included` · `£60 excess` | outline `Choose` |
| 2 | `Boiler and heating` — badge **`Most chosen`** | **£14** `a month` | *Everything above plus radiators, pipework and the pump.* | `Unlimited callouts` · `Annual service included` · `No excess` · `Radiators and pipework` | solid `Choose` |
| 3 | `Whole home` | **£22** `a month` | *Heating, plumbing and drains, under one plan.* | `Everything in Boiler and heating` · `Internal plumbing and drains` · `Taps, toilets and leaks` · `No excess` | outline `Choose` |

The middle card is the design's emphasis: `border-primary-600` (1 px, `#1e6fa8`), `shadow-md`, the
`Most chosen` pill (`rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wide
text-primary-700`) as its first child, and the **only** solid CTA. The other two carry `border-ink-100`.
The card heights are equal at `sm`+ because the grid stretches them (**472 px** each at 1440) and the CTA
sits after a `flex-1` blurb — at 390 the middle card is **412 px** against 328 px for its neighbours
because of the badge.

### The six services and their six prices (verbatim roles, paraphrase freely)

| name | blurb | price line |
| --- | --- | --- |
| `Boiler installation` | Combi, system and conventional, with the old unit removed and the system flushed. | `From £1,850 fitted` |
| `Boiler repairs` | No heat, no hot water, pressure loss and fault codes. Most parts carried on the van. | `From £96` |
| `Annual servicing` | The service your warranty requires, with the certificate emailed the same day. | `£89` |
| `Landlord certificates` | CP12 gas safety checks for letting agents and private landlords, lodged and emailed. | `£79` |
| `Radiators and pipework` | New radiators, valve changes, balancing and the cold one at the end of the run. | `From £140` |
| `Plumbing repairs` | Taps, toilets, leaks and shut-off valves, because the same engineer is already there. | `From £96` |

### The five FAQ rows (index page — the plans page has a *different* five; see the census)

| # | question | answer, in one line |
| --- | --- | --- |
| 1 | What is not covered by a plan? | Boilers over fifteen years old, systems unsafe at first inspection, and damage caused by someone else's work — stated at the first service rather than at claim time. |
| 2 | How quickly do you attend a breakdown? | Same day if you ring before noon on a weekday, next working day otherwise; a no-heat call with a vulnerable person in the house is prioritised regardless. |
| 3 | Do I need a new boiler or will a repair do? | Under about twelve years old, a repair is usually better value; they state the age, the part cost and an honest view before you decide. |
| 4 | Is the installation price really fixed? | Yes once the installation has been seen, in person or by video; only a genuinely hidden find changes it, and you are shown before any work. |
| 5 | Who notifies Building Control? | They do — every installation is notified through Gas Safe and the certificate arrives by post and email, usually within a fortnight. |

## Behaviour the recreation must reproduce

All handlers live in the **house kit** (`Base…BLoalVWc.js`, 16,233 B, whose hash is **byte-identical to
the Aquifer, Plantroom, Veranda, Stoke, Closeknit, Kettle, Smallpaw and Percline reads**). Four pieces are
page-local: `applyTheme()`, the JSON-LD, the **finance calculator**, and the preloader/smooth-scroll
script. The page wires **14 `data-animate` elements** and uses none of the kit's typewriter, counter,
parallax, video, lightbox, billing, blog-filter or `data-accordion-toggle` branches.

1. **Reveal on scroll** (`[data-animate]`, 14 elements, **12** carrying `data-delay` 100–300 ms) —
   `fade-in-up`; measured start state `opacity: 0`, `translateY(20px)`, `transition: opacity .6s ease-out,
   transform .6s ease-out`; revealed once at `threshold .1` / `rootMargin 0 0 -10%`, and **skipped
   entirely under `prefers-reduced-motion: reduce`**. There is **no `[data-animate]` rule in the sheet**,
   so a DOM read alone shows the content plainly — the start state is applied by the kit at runtime. Do
   not conclude the design has no reveal.
2. **Header shadow** past `scrollY > 50` — the `shadow-lg` class is appended to `[data-header]`
   (verified: `… transition-all shadow-lg` after scrolling 400 px).
3. **Mobile disclosure** (`< xl`, i.e. below 1280 px) with `aria-expanded` + glyph swap (hamburger ↔
   close) and `hidden` on the panel. Verified at 390: nav `display: none`, hamburger `display: block`,
   panel 492 px when open. The source carries an authored comment explaining that the nav switches at
   **`xl`, not `lg`**, because seven links plus a location pill, a phone pill, a theme toggle and a CTA do
   not fit at 1024–1279 px — the recreation must keep the 1280 px threshold.
4. **Scroll spy** — all **seven** `[data-nav-link]` values are route paths (`/boilers`, `/plans`,
   `/repairs`, `/areas`, `/about`, `/blog`, `/contact`), so on this page the spy has **zero** live band
   ids. The recreation maps every label onto a band (Requirement 15) and runs the spy against those ids.
5. **Carousel** (`[data-carousel]`) — per-view **3 ≥1024 px, 2 ≥640 px, 1 below** (verified: slide 405 px
   of a 1,216 px track at 1440; 358 px at 390); each slide's width is
   `track.parentElement.offsetWidth / perView`; advances every **5 s**, wrapping; paused on `mouseenter`,
   resumed on `mouseleave`; dots `h-2.5 w-8 bg-primary-600` active / `w-2.5 bg-gray-300` otherwise;
   **arrows are shown only while there is somewhere to scroll** — with three slides and three per view
   they never appear here (measured `display: none` on both), which is correct, not a bug.
6. **FAQ** (`[data-faq-toggle]` / `[data-faq-icon]`) — **exclusive**: opening one collapses every other
   panel to `max-height:0` / `opacity:0` and resets every other icon to `rotate(0)`; the open row gets
   `max-height: scrollHeight` / `opacity:1` and `rotate(45deg)` on its disc (verified: matrix at 45°,
   panel 88 px). ⚠️ The reference **never sets `aria-expanded`** on the button (measured `null`) — the
   recreation adds it (Deviation 6).
7. **Finance calculator** (page-local, 656 B) — see the block below. This is the design's one
   interactive tool and the reason the ColorLib note calls the design distinctive.
8. **Cookie strip** (`[data-cookie-accept]` / `[data-cookie-decline]`) — slides up 1.5 s after load,
   slides down and removes itself on either choice; the kit stores `cookie-consent` in `localStorage`
   (dropped in the recreation, Deviation 3).
9. **Back-to-top** — `scrollY > 300` sets `opacity:1; pointer-events:auto; translateY(0)` (verified
   `opacity: 1` at 400 px); click smooth-scrolls to `top: 0`.
10. **Scroll progress** — `width = scrollY / (scrollHeight − innerHeight) × 100` %, passive listener.
11. **Dark toggle** (`[data-dark-toggle]`) — toggles `.dark` on `documentElement` + `localStorage.theme`;
    boots from `applyTheme()`. Dropped in the recreation (Deviation 2); every measured dark value is
    recorded above so the decision is reversible.
12. **Chrome** — the preloader is removed on `load` (verified absent afterwards); smooth in-page scrolling
    with a header offset for `a[href^="#"]`.
13. **Forms — the reference's only form on this page is the footer newsletter**, and it is **inert**:
    `<form data-newsletter-form>` with no `action` and no handler (`grep -c data-validate` = 0), so
    submitting reloads the page. The `#contact` band is **CTAs only** (the four-field contact form lives
    on the inner `/contact` route, which this recreation does not rebuild). The recreation wires the
    newsletter field itself (Requirement 5).

### The finance calculator (reproduce the arithmetic exactly)

Markup: `<div data-finance-calc data-months="36" data-apr="9.9" data-currency="£">` wrapping a
`<input type="range" id="finance-amount" min="800" max="4500" step="50" value="2400">` and three output
nodes (`[data-finance-amount]`, `[data-finance-monthly]`, `[data-finance-total]`).

```js
const months = Number(el.dataset.months) || 36;
const apr = Number(el.dataset.apr) || 0;
const r = apr / 100 / 12;
const monthly = r === 0 ? amount / months : (amount * r) / (1 - (1 + r) ** -months);
// every output is `£` + value.toLocaleString('en-GB', { maximumFractionDigits: 0 })
// total = round-to-display(monthly) * months  — the source multiplies the UNROUNDED monthly,
// then formats: verify with the table below
```

Verified live (formatter rounds to whole pounds): `2400 → £77 / month, £2,784 total`;
`800 → £26 / £928`; `1000 → £32 / £1,160`; `4500 → £145 / £5,220`. The recreation must match those five
readings exactly, including the `£800` / `£4,500` end labels and the initial `£2,400` position.

⚠️ **The static HTML ships `£0` in both output nodes** — the numbers appear only once the script runs. A
faithful *shipped* recreation must compute on first render (no flash of `£0`), which is a documented
improvement, not a deviation from the values.

### Data-attribute inventory (measured on the live page)

| hook | count | what it drives |
| --- | ---: | --- |
| `data-animate` (12 with `data-delay`) | 14 | reveal |
| `data-nav-link` | 7 | scroll-spy (**zero** live band ids — all seven are route paths) |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | exclusive accordion |
| `data-carousel` / `-track` / `-slide` / `-prev` / `-next` / `-dots` | 1 / 1 / 3 / 1 / 1 / 1 | testimonials |
| `data-finance-calc` / `-input` / `-amount` / `-monthly` / `-total` | 1 each | the calculator |
| `data-months` / `data-apr` / `data-currency` | 1 each | calculator config (`36` / `9.9` / `£`) |
| `data-phone` | 3 | `tel:` links (header pill, mobile panel, closing band) |
| `data-header`, `data-mobile-toggle`, `data-mobile-menu`, `data-dark-toggle` | 1 each | sticky chrome |
| `data-licence-bar`, `data-newsletter-form`, `data-cookie-accept`, `data-cookie-decline` | 1 each | the page-specific pieces |

`data-counter`, `data-typewriter`, `data-parallax`, `data-video-modal`, `data-lightbox`,
`data-billing-toggle`, `data-blog-*`, `data-accordion-toggle`, `data-validate` are **absent** even though
the shared kit supports them.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **50 anchors** over **16 distinct `href` values** (counted in the DOM; the
extra `href` attributes in the source belong to `<link>`/`<a>` chrome the page itself renders):

| count | href | kind |
| ---: | --- | --- |
| 10 | `/theme/heatline/plans` | live → **308** → `/plans/` **200** (41,841 B) — the header CTA, the mobile CTA, the hero's `Compare cover plans`, the three `Choose`s, the footer `Cover plans`/`Annual servicing` |
| 7 | `/theme/heatline/contact` | live → **308** → **200** (32,347 B) — `Book a repair`, `Get a fixed quote`, `Book a service`, `Book online`, footer `Contact` |
| 4 | `/theme/heatline/repairs` | live → **308** → **200** (37,264 B) |
| 3 | `/theme/heatline/boilers` | live → **308** → **200** (34,591 B) |
| 3 | `/theme/heatline/areas` | live → **308** → **200** (31,085 B) |
| 3 | `/theme/heatline/about` | live → **308** → **200** (33,832 B) |
| 3 | `/theme/heatline/blog` | live → **308** → **200** (34,216 B) |
| 3 | `tel:08000000000` | valid — the header pill, the mobile panel, the closing band's `Call` |
| 3 | `#` | **dead** — the three footer social tiles |
| 2 | `/theme/heatline/privacy` | live → **308** → **200** (34,551 B) |
| 2 | `/theme/heatline/terms` | live → **308** → **200** (33,295 B) |
| 2 | `/theme/heatline/` | the two wordmarks (header + footer), a no-op self-link |
| 2 | `#service-areas` | **broken fragment** — no element has `id="service-areas"` and `grep -c 'id="service-areas"'` = **0**; the band is `id="areas"` (the header location pill `Leeds` and its mobile twin) |
| 1 | `#main-content` | skip link → exists |
| 1 | `tel:0800 000 0000` | **malformed** `tel:` (spaces) — the footer's copy |
| 1 | `mailto:hello@heatline.example` | `.example` placeholder mailbox |

⚠️ **This build redirects every bare route**: unlike the Fieldline sibling (which answered 200 on the
bare path), `curl /theme/heatline/<route>` returns **308** with a `Location` ending in `/`. The in-page
`href`s are **bare (no trailing slash)**, so every nav click costs one redirect in the reference. The
recreation has one page and no such cost; do not reproduce the redirect as a design feature.

**Inner-page inventory (all live after the 308; the recreation folds their argument into one page):**

| page | bytes | `<title>` | `<h1>` |
| --- | ---: | --- | --- |
| `plans/` | 41,841 | Cover plans \| Heatline | A breakdown in February should be a phone call |
| `repairs/` | 37,264 | Boiler and heating repairs \| Heatline | Most faults are one part and one visit |
| `boilers/` | 34,591 | Boiler installation \| Heatline | A fixed price, and a date we keep |
| `about/` | 33,832 | About Heatline \| Heatline | About Heatline |
| `blog/` | 34,216 | Blog \| Heatline | Insights & Updates |
| `privacy/` | 34,551 | Privacy Policy \| Heatline | Privacy Policy |
| `terms/` | 33,295 | Terms of Service \| Heatline | Terms of Service |
| `areas/` | 31,085 | Areas we cover \| Heatline | Leeds and West Yorkshire |
| `contact/` | 32,347 | Contact Heatline \| Heatline | Contact Heatline |
| `elements/` | — | — | **no style-guide page** (not in the nav) |

The multi-page shell is the authoritative reference for copy the single-page recreation folds in, and for
two things the landing page cannot show:

* **`plans/` explains the three plans properly** — `Three plans`, *All include an annual service, which on
  its own costs £89, so the cheapest plan roughly pays for itself.*, the same three cards with extended
  tick lists (`Boilers under 12 years old`, `Power flush at half price`, `Priority booking in winter`) and
  CTAs reading `Ask about this plan`; then a **`The small print`** band of five **different** questions
  (which boilers they refuse, the fourteen-day waiting period, the annual service, cancellation, whole-house
  cover) and a closing `Not sure which plan fits?` pair. The recreation keeps the **index**'s five
  questions and does **not** import this band wholesale.
* **`contact/` carries the four-field form** (`Full Name` / `Email` / `Subject` / `Message`, `required`
  on all but Subject). ⚠️ Its `subject` and `message` placeholders are **leftover coworking-template
  copy** — `Membership inquiry, event space, tour request...` and *Tell us what you're looking for in a
  workspace...* — a source defect. Nothing of it belongs in the recreation.
* **`areas/`** is the fuller coverage page (same twelve towns, longer prose); **`about/`** and
  **`blog/`** are one-band pages, not references for this recreation.

**The recreation does not rebuild those pages.**

## Class census (no phantom-class delta)

The page uses **326 distinct class tokens** across **396 `class` attributes**, and **every one compiles**
to a rule in `Base.CvHGvUwD.css` (checked programmatically, including Tailwind's escaped variants) —
**no phantom-class delta** to floor into this spec. One markup oddity that is *not* a class: the hero's
right column is `<div class>` (an empty attribute) — it renders as `class=""` and no rule depends on it.
Do not copy the artefact.

⚠️ Three traps when re-running this census:

1. Variants are escaped in the sheet (`sm\:grid-cols-3`, `bg-white\/90`, `border-primary-600`).
2. `dark:` utilities compile as `:is(.dark *)` suffixes, so a `.token{` search misses them entirely —
   that is where `primary-300`, `primary-900`, `heat-300`, `heat-500` and `heat-900` live.
3. Breakpoints ship as `@media (width>=40rem)` (not `min-width:`): 40rem `sm`, 48rem `md`, 64rem `lg`,
   80rem **`xl`** (where the nav appears), 96rem `2xl`.

## Screenshot analysis (2400×1892 JPEG, macOS-Safari window frame)

The capture is a light-mode desktop view framed in Safari chrome (traffic lights, empty address bar), so
the top ~90 px and the outer ~60 px are browser, not design. Inside it, top to bottom:

* the **navy licence strip**: `Gas Safe #000000` · `Insured to £5m` · `Covering Leeds and West
  Yorkshire`, and on the right an amber star with `4.9` and `600+ reviews on Checkatrade (sample)`;
* the **white header**: the `Heatline` wordmark with its ember flame and a blue rule, the seven nav
  labels, a `Leeds` pill with a pin, a `0800 000 0000` pill with a phone glyph, a moon toggle, and the
  solid blue `Compare cover plans`;
* the **white hero**, a 5/7 split with nothing photographic: the letterspaced blue eyebrow
  `GAS SAFE REGISTERED · LEEDS AND WEST YORKSHIRE`, a **60 px headline in weight 500** —
  `Keep the house warm all year.` on two lines — the three-line grey lede, five amber stars + `4.9`, then
  `Compare cover plans` (solid) and `Book a repair` (outline); and on the right the **three plan cards**,
  the middle one ringed in blue with the `MOST CHOSEN` tag and the only filled `Choose`;
* the **bottom of the hero**: `Sample pricing for template demonstration. Replace with your own before
  launch.` in small grey type;
* the top of the **pale sky-blue finance band**: the centred-on-desktop-but-left-aligned `SPREADING THE
  COST` eyebrow, `A new boiler, by the month` (weight 500), the two-line lede, and the white calculator
  card down to `Cost of the work`, `£2,400`, the slider at roughly the middle of its 800–4,500 range, the
  `£800` / `£4,500` end labels, `Over 36 months at 9.9% APR representative`, **`£77 a month`** and
  `Total repayable £2,784`.

Everything below the calculator card — the six services, the ember seasonal band, the three steps, the
twelve towns, the carousel, the FAQ, the closing band and the footer — is **not in the screenshot**: read
those from the DOM and the sheet (which is what §Reference document order and the design notes do). The
screenshot is authoritative for three things: the **licence-strip composition**, the **hero's vertical
rhythm** (eyebrow → 60 px headline → lede → rating → CTA pair) and the fact that this design is
**blue-on-white with no photography and no full-bleed image anywhere**.

## Requirements

### Requirement 1: Page chrome (skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar at the very
top of the document, a 48 px back-to-top disc that appears past 300 px, and a cookie strip that slides up
1.5 s after mount and dismisses into component state. It SHALL NOT leave any overlay in front of the
content once the document is ready.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the document reaches `readyState === "complete"`
- **THEN** no white spinner overlay is painted at all, because the recreation never mounts one
- **AND** the page is fully readable with JavaScript disabled

#### Scenario: Visitor scrolls a long way

- **GIVEN** the document is 6,000 px or taller
- **WHEN** the visitor scrolls past 300 px
- **THEN** the progress bar's width equals `scrollY / (scrollHeight − innerHeight)`
- **AND** the back-to-top disc fades in and is clickable, returning the page to `top: 0`

#### Scenario: Cookie strip dismissal

- **GIVEN** the cookie strip is up
- **WHEN** the visitor presses `Accept All` or `Decline`
- **THEN** the strip slides out and unmounts
- **AND** no value is written to `localStorage` (Deviation 3)

### Requirement 2: Licence strip

The app SHALL render a 37 px `#14324a` strip above the header carrying the registration number, the
insurance line and the served region on the left, and the rating on the right, with the two middle facts
hidden below `sm`.

#### Scenario: Desktop licence strip

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the strip reads `Gas Safe` · `#000000` · `Insured to £5m` · `Covering` ·
  `Leeds and West Yorkshire`, and on the right an `amber-400` star, `4.9` and
  `600+ reviews on Checkatrade (sample)`
- **AND** its ground is `#14324a` and its text `#e5eef4` at 12 px

#### Scenario: Narrow licence strip

- **GIVEN** a 390 px viewport
- **WHEN** the page renders
- **THEN** only `Gas Safe #000000` and the rating line are painted
- **AND** the strip stays one row tall (37 px) with no wrapping

### Requirement 3: Header and mobile disclosure

The app SHALL render a sticky 64/80 px header with the wordmark, seven nav links, a location pill, a phone
pill, the primary CTA, and a hamburger below **1280 px** that opens an in-flow panel.

#### Scenario: Desktop header

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the seven links `Boilers`, `Cover plans`, `Repairs`, `Areas`, `About`, `Blog`, `Contact` are
  visible at `xl` with `gap-7`
- **AND** the CTA measures 186 × 40 px at 14 px weight 700, and the phone pill is a `rounded-full`
  outline link to `tel:`
- **AND** the header's first pixel row is at `top: 0` and it gains `shadow-lg` past 50 px of scroll

#### Scenario: Header between 1024 and 1279 px

- **GIVEN** a 1200 px viewport
- **WHEN** the page renders
- **THEN** the nav is hidden and the hamburger is visible (the source's own comment explains the choice)
- **AND** no nav link is clipped or wrapped under the pills

#### Scenario: Mobile menu

- **GIVEN** a 390 px viewport
- **WHEN** the visitor presses the hamburger
- **THEN** the panel expands in flow with the seven links as full-width rows, the phone and location
  pills and a full-width CTA
- **AND** the trigger's `aria-expanded` becomes `true` and its glyph becomes a close icon
- **AND** the document width stays 390 px (no horizontal scroll)

### Requirement 4: Hero with the three plan cards

The app SHALL render the hero as a 12-column split — five columns of copy, seven columns of **three plan
cards** — with no image, one `h1`, and the middle card emphasised.

#### Scenario: Desktop hero

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the eyebrow is 14 px `#1e6fa8` at weight 500, letter-spaced 0.35 px
- **AND** the `h1` reads `Keep the house warm all year.` at **60 px / 69 px / −1.5 px, weight 500**,
  `#14324a`
- **AND** the lede is 18 px / 29.25 px at **weight 300**, `#3d5e76`
- **AND** five `amber-400` stars, `4.9` and `600+ reviews on Checkatrade · sample data` sit between the
  lede and the CTAs
- **AND** `Compare cover plans` is `#1e6fa8` white at `rounded-lg` 8 px with 24/14 px padding (210 × 54)
  and `Book a repair` is an `#c8dae6` outline with `#1a3a4e` text

#### Scenario: The plan cards

- **GIVEN** the hero has rendered
- **WHEN** the visitor reads the card row
- **THEN** three cards present `Boiler only £9`, `Boiler and heating £14`, `Whole home £22`, each with a
  16 px radius, a 1 px border, 24 px padding, an 18 px bold name, a 30 px bold price and `a month` in
  `#5f7f96`
- **AND** the middle card alone carries a 1 px `#1e6fa8` border, `shadow-md`, the uppercase
  `Most chosen` pill on `#eff6fb`, and the only **filled** `Choose` button
- **AND** the three cards are the same height at `sm`+ and stack full width below it

#### Scenario: Mobile hero

- **GIVEN** a 390 px viewport
- **WHEN** the page renders
- **THEN** the copy block comes first, the `h1` is 36 px / 41.4 px, and the three cards stack one per row
- **AND** nothing in the hero overflows the viewport

### Requirement 5: Footer newsletter form

The app SHALL render the `Stay Updated` block with an email field and a `Subscribe` button, wired locally:
required + email validation on submit, an inline error, a success state that clears the field, and no
network call.

#### Scenario: Invalid submission

- **GIVEN** the newsletter field is empty or not an email
- **WHEN** the visitor presses `Subscribe`
- **THEN** an inline error is shown and focus returns to the field
- **AND** nothing is submitted anywhere

#### Scenario: Valid submission

- **GIVEN** a valid address is typed
- **WHEN** the visitor presses `Subscribe`
- **THEN** the field clears and a confirmation replaces the error
- **AND** no request leaves the page (the reference's form is inert)

### Requirement 6: Finance band and calculator

The app SHALL render the `#finance` band on `#e3f2fa` with a left-aligned `max-w-3xl` header and a white
16 px-radius card containing a range input and two computed outputs.

#### Scenario: Initial render

- **GIVEN** the page has mounted
- **WHEN** the visitor reaches the band without touching the slider
- **THEN** the amount reads `£2,400`, the monthly figure reads **`£77`** and the total reads **`£2,784`**
- **AND** the slider's `min`/`max`/`step`/`value` are `800`/`4500`/`50`/`2400`

#### Scenario: Moving the slider

- **GIVEN** the calculator is mounted
- **WHEN** the visitor sets 800, 1000 or 4500
- **THEN** the outputs read `£26 / £928`, `£32 / £1,160` and `£145 / £5,220` respectively
- **AND** every figure is formatted `£` + `toLocaleString('en-GB', { maximumFractionDigits: 0 })`
  and the APR line reads `Over 36 months at 9.9% APR representative`

#### Scenario: Keyboard use

- **GIVEN** focus is in the slider
- **WHEN** the visitor presses an arrow key
- **THEN** the value moves by one step (50) and both outputs update
- **AND** the slider keeps a visible focus ring in `#2a7cb4`

### Requirement 7: Services grid

The app SHALL render six services in a hairline-divided grid — three columns at `lg`, two at `sm`, one
below — inside a single 16 px-radius box whose 1 px gaps are the `#e5eef4` gutter.

#### Scenario: Desktop services

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** six cells of 404 × 184 px present `Boiler installation`, `Boiler repairs`, `Annual servicing`,
  `Landlord certificates`, `Radiators and pipework`, `Plumbing repairs`
- **AND** each carries a 16 px body and a 14 px **bold** price line in `#185887`
  (`From £1,850 fitted`, `From £96`, `£89`, `£79`, `From £140`, `From £96`)
- **AND** the grid's ground shows through as 1 px rules between cells

#### Scenario: Services footnote

- **GIVEN** the grid has rendered
- **WHEN** the visitor reaches the bottom of the band
- **THEN** `Sample prices for demonstration. Replace with your own before launch.` sits below it in
  `#5f7f96`

### Requirement 8: Seasonal (ember) band

The app SHALL render one warm band — and only one — as a `#fef2f0` box with a 4 px `#f0705a` left rule,
inside the white page ground, with the ember CTA.

#### Scenario: Desktop seasonal band

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the box measures 1,216 × 208 px with 32 px padding and a 16 px radius (a 4 px left rule)
- **AND** the eyebrow `Before the cold` is `#a93727`, the heading is 24 px weight 500 and the body is
  weight 300 in `#26485e`
- **AND** `Book a service` is `#ce4630` white with 24/12 px padding

#### Scenario: Accent discipline

- **GIVEN** the whole page
- **WHEN** every `heat-*` usage is counted
- **THEN** they appear only in this band (ground, rule, eyebrow, CTA) and in the logo flame
- **AND** no other section paints a warm ground

### Requirement 9: Three-step process

The app SHALL render the process as an ordered list of three steps, one column on mobile and three at
`sm`+, each with a tabular numeral and a hairline rule.

#### Scenario: Process rendering

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the steps read `01 Video or home survey` (`Free, no obligation`),
  `02 Fixed written quote` (`Valid 90 days`), `03 Fitted, tested, registered` (`Most installs, one day`)
- **AND** each numeral is 14 px bold tabular `#1e6fa8` followed by a 1 px `#e5eef4` rule
- **AND** each title is 18 px bold and each note 14 px semibold `#185887`

### Requirement 10: Service areas

The app SHALL render the coverage band as a 5/7 split with the heading on the left and twelve towns in a
two- or three-column rule list on the right, with no eyebrow.

#### Scenario: Towns list

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the twelve rows are `Leeds`, `Headingley`, `Horsforth`, `Pudsey`, `Morley`, `Wetherby`,
  `Otley`, `Guiseley`, `Yeadon`, `Garforth`, `Rothwell`, `Bramhope`
- **AND** each row is 16 px `#1a3a4e` on a 1 px `#e5eef4` bottom rule with 10 px vertical padding
- **AND** the band's left column carries only an `h2` and a lede

### Requirement 11: Testimonials carousel

The app SHALL render three reviews in a carousel showing three per view at `lg`, two at `sm` and one
below, with five `#4a95c8` stars per card, and arrows that appear only when there is somewhere to scroll.

#### Scenario: Three-up desktop carousel

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** each slide is 405 px wide inside a 1,216 px track and each card is 381 × 320 px with 32 px
  padding, a 16 px radius, white ground and `shadow-soft`
- **AND** the three quotes belong to `Gemma W.` (Horsforth), `Idris K.` (Morley) and `Ann-Marie T.`
  (Wetherby), each with a 48 px `#dbebf6` initial disc
- **AND** both arrows are hidden because all three slides are in view

#### Scenario: One-up mobile carousel

- **GIVEN** a 390 px viewport
- **WHEN** the page renders
- **THEN** exactly one 358 px slide is visible and the track can be advanced
- **AND** the band's ground is `#f9fafb` and its heading is centred under a `Reviews` pill

### Requirement 12: FAQ accordion (exclusive)

The app SHALL render five questions in a `max-w-3xl` divided list, exclusive (opening one closes the
others), with a 32 px plus-disc that rotates 45° when open and `aria-expanded` on every trigger.

#### Scenario: Opening a question

- **GIVEN** the accordion is closed
- **WHEN** the visitor activates `What is not covered by a plan?`
- **THEN** its panel expands to its content height with a 300 ms transition and its disc rotates 45°
- **AND** any other open panel collapses to zero height and its disc returns to 0°

#### Scenario: Accessibility of the accordion

- **GIVEN** a keyboard visitor
- **WHEN** focus reaches a question
- **THEN** the trigger is a `button` with `aria-expanded` reflecting the panel's state and
  `aria-controls` pointing at the panel id (an improvement on the reference, Deviation 6)

### Requirement 13: Closing band

The app SHALL render the closing band on `#185887` with a centred heading, a `#dbebf6` lede and exactly
two CTAs.

#### Scenario: Closing band rendering

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the heading reads `Cold house, or a boiler on its last legs?` in white at 36 px weight 700
- **AND** `Book online` is a white button with `#185887` text (32/16 px padding) and `Call …` is a
  `border-2 border-white/40` ghost with a phone glyph
- **AND** the band has no form, no gradient and no decorative image

### Requirement 14: Footer

The app SHALL render a `#111827` footer with the wordmark, a blurb, three social tiles, the contact
block, three link groups and the newsletter, plus a bottom bar with the copyright and two legal links.

#### Scenario: Footer structure

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the groups read `Heating` (Boiler installation, Boiler repairs, Annual servicing, Landlord
  certificates), `Company` (Cover plans, Areas covered, About, Blog) and `Support` (Contact, Privacy,
  Terms) with 14 px uppercase 600 white headings
- **AND** the brand column shows the address, a `tel:` link and a `mailto:` link
- **AND** the bottom bar carries `© 2026 …` and the two legal links above a `#1f2937` rule

#### Scenario: Component Dock attribution

- **GIVEN** the footer has rendered
- **WHEN** the visitor reads the bottom bar
- **THEN** it contains a link to `https://www.componentdock.com/` ("Component Dock")
- **AND** that link is keyboard reachable and visually distinguishable

### Requirement 15: Navigation mapping (single page)

The app SHALL map the reference's seven route links onto the single page's bands, run the scroll spy
against those band ids, and keep every CTA functional.

#### Scenario: Nav labels resolve

- **GIVEN** the recreation is mounted
- **WHEN** the visitor activates `Boilers`, `Cover plans`, `Repairs`, `Areas`, `About`, `Blog` or
  `Contact`
- **THEN** the page scrolls to a real band (`#services`, `#finance` or the plan cards, `#process`,
  `#areas`, `#process`, `#faq`, `#contact` respectively) with a header offset
- **AND** no link points at a fragment that does not exist (the reference's `#service-areas` is fixed)

#### Scenario: Scroll spy

- **GIVEN** the visitor scrolls through the bands
- **WHEN** a band enters the viewport
- **THEN** its nav label is marked active from the same ids the links target
- **AND** only one label is active at a time

### Requirement 16: Accessibility, performance and provenance

The app SHALL be keyboard-navigable, expose no ColorLib provenance in `apps/emberly`, and ship no copied
assets.

#### Scenario: Provenance isolation

- **GIVEN** the built app
- **WHEN** `grep -ri colorlib apps/emberly` and `grep -ri heatline apps/emberly` run
- **THEN** both return nothing
- **AND** the strings `hello@heatline.example`, `Gas Safe #000000`, `Unit 7, Kirkstall Road` and the
  three review quotes naming the source brand have been rewritten or removed

#### Scenario: Focus visibility

- **GIVEN** the visitor tabs through the page
- **WHEN** focus reaches any button, link, field or the slider
- **THEN** a visible ring at least 2 px is drawn in `#2a7cb4`, `#1e6fa8`, `#185887` or `#111827`
- **AND** the skip link is the first stop

#### Scenario: No copied assets

- **GIVEN** the repository
- **WHEN** `apps/emberly` is inspected
- **THEN** it ships no `logo.svg`, `logo-light.svg` or `favicon.svg` from the reference
- **AND** no base64 blob reproduces the flame mark; the brand mark is redrawn as an authored SVG

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page renders
- **THEN** the reveal is skipped, the carousel does not auto-advance and the smooth scroll becomes
  instant

## Deliberate deviations from the reference

1. **Multi-page → single page.** The reference ships nine inner routes; the recreation folds their
   argument into one page and maps the nav labels onto bands (Requirement 15). Inner-page copy is
   summarised, not rebuilt.
2. **Dark toggle dropped.** The reference has `data-dark-toggle` + `applyTheme()`. The recreation is
   light-only; every measured dark value (`primary-300 #83b8dd`, `primary-900 #113954`, `heat-300
   #f6a899`, `heat-500 #e55940`, `heat-900` ≈ `#4a2a20`, `ink-300 #9bb6c9`, `gray-950 #030712`) is
   recorded in the token tables so the decision is reversible.
3. **Cookie consent is component state, not `localStorage`.** The reference persists `cookie-consent`;
   the recreation keeps it in memory so a returning visitor sees the strip once per session. Record the
   choice in the PR.
4. **The newsletter form is wired.** The reference's `data-newsletter-form` binds to nothing. The
   recreation validates locally, resets on success and never calls the network.
5. **The calculator renders a real number immediately.** The reference's static HTML ships `£0` in both
   output nodes until its script runs; the recreation computes `£77 / £2,784` on first render. Same
   arithmetic (Requirement 6), no flash of zero.
6. **The FAQ trigger gains `aria-expanded` / `aria-controls`.** The reference never sets either
   (measured `aria-expanded = null`), so its accordion is opaque to assistive technology. Also note the
   reference's panels are `max-height` transitions rather than `<details>`; keep the visual behaviour and
   add the attributes.
7. **Broken fragments and malformed links are fixed.** `#service-areas` (two links) targets an id that
   does not exist — point it at the areas band; the footer's `tel:0800 000 0000` becomes a valid `tel:`
   href; the three `href="#"` social tiles get real destinations or lose the link.
8. **The JSON-LD is not copied.** The block is well formed (`Plumber`, `areaServed: Leeds`) but the URL
   is a bare `/` and the brand is the source's — write a valid `LocalBusiness` block from scratch or emit
   none. Do not ship `og:image=/og-image.jpg`: the reference's own OG image returns **404**.
9. **Brand and sample strings are replaced.** `Heatline`, `hello@heatline.example`, the Kirkstall Road
   address, `Gas Safe #000000` and the three review quotes become Emberly equivalents (invented, clearly
   sample). The prices and plan structure stay as measured — they are the design.
10. **The logo is redrawn.** `logo.svg` (404 B: a `#f0705a` flame path, a 3 px `#1e6fa8` rule and a
    19 px DM Sans 500 `#14324a` wordmark) and `logo-light.svg` are **descriptions**, not files to copy.
    Redraw the mark as an authored SVG and keep the ember-plus-blue two-colour idea.
11. **The eyebrow weight split is preserved, not normalised.** The hero's eyebrow is 500 on `#1e6fa8`;
    services/process are 700 on `#185887`. That inconsistency is in the reference.
12. **Sample-content footnotes are kept** (`Sample pricing…`, `Figures are illustrative…`,
    `Representative example…`, `Replace this list…`) because they tell a licensee what to replace. Keep
    the wording in the app's own voice; do not attribute it to ColorLib.

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-emberly/`
- [ ] `scripts/verify-app.sh emberly` green: typecheck, lint, 100 % coverage tests, build
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/emberly" package-lock.json` ≥ 1)
- [ ] `apps/emberly/public/CNAME` and `package.json#homepage` are `emberly.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`; `react`/`react-dom` pinned to `latest`
- [ ] No `colorlib` / `heatline` / `heatline.example` strings under `apps/emberly`
      (`grep -ri` both, comments included)
- [ ] Footer links `https://www.componentdock.com/`
- [ ] One `h1`, at 60 px weight **500** (not 700); the finance `h2` is 500 while the other `h2`s are 700
- [ ] Three plan cards with the middle one ringed/badged/solid-CTA; six services with the six prices;
      three process steps; twelve towns; three reviews; five questions
- [ ] Calculator matches `£77 / £2,784` at 2,400 and `£26/£928`, `£32/£1,160`, `£145/£5,220` at
      800/1,000/4,500 — identical formatter, `min 800 max 4500 step 50`
- [ ] Tokens match §Design tokens exactly, including `sky-100` on `#finance`, `ink-800` on the licence
      strip, `ink-100` as the services grid gutter, and **`heat-*` confined to the seasonal band + logo**
- [ ] `.section` = 80 / 112 px; hero `py-16 lg:py-24`; seasonal band `py-12` (not a `.section`)
- [ ] Reveal, header shadow at 50 px, mobile disclosure at `xl` (1280), exclusive FAQ, 3/2/1 carousel with
      bounds-driven arrows, cookie at 1.5 s, back-to-top at 300 px, progress bar — all present; **no ping
      dot, no sticky call bar, no counter/typewriter/parallax/lightbox**
- [ ] All decorative SVGs `aria-hidden`; stars have an accessible label; the slider has a `<label>`
- [ ] Reduced motion disables reveal, carousel autoplay and smooth scroll
- [ ] `TEMPLATES.md` row added under `## Business` between **Hardenero** and **Heaven**, heading
      re-counted (369 → 370), marker `[x]` set in the bookkeeping commit
- [ ] Deploy via `gh workflow run deploy-surge.yml -f app="emberly"`; then
      `curl -sI https://emberly.free.componentdock.com` returns 200
