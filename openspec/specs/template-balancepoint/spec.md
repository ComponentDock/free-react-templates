# Template: Balancepoint (Heat pump installer — the rebate ledger as the hero)

## Purpose

A **heat-pump installer's site whose hero is a calculator, not a photograph**: the `h1` says *"The rebates are
real. Here they are, itemised."*, and beside it sits a three-field quote card while the second band turns six
incentive programmes into **six ticked lines that subtract from a real number** — `$14,800` installed, `−$4,400`
selected, **`$10,400` net**, updated live. The page's argument is that *"rebates available"* is a sentence that
hides a figure, so the figure gets printed. Everything else is arranged around that ledger: the band explains
**which** programmes exist and **the condition that most often disqualifies people**, the closing CTA is *"Want
your actual net figure?"*, and the services grid prices each route *"From $12,400 installed"* rather than
describing it.

The design is set in a **lime-on-slate** palette, unusual for the trade: a **lime green** `primary` ramp
(`#5d861b` fills, `#4a6918` closing band, `#93c63c` ticks and stars) against a **cool blue-slate ink** ramp
(`#1f262c` headings, `#13181c` the dark ledger band, `#f5f7f8` the hero ground). Six light bands alternate
grey / white / grey / white, and then **one very dark band** (`#13181c`) holds the calculator, followed by a
**lime band** (`#4a6918`) and a **near-black footer** — so the page reads light → dark → light → dark as a
sequence of claims and receipts.

Its distinctive devices, in order: a **37 px licence strip** above a sticky header (licence number, rebate
paperwork, service county, Google rating); a **split hero** (7/5) whose right column is a live quote form; the
**incentive ledger** — six `checkbox` rows, each with a mono `−$1,600` amount, an uppercase source label and one
blunt disqualifying sentence, beside a sticky-looking summary `dl` ending in a `36 px` mono net figure; a
**hand-drawn-looking SVG line chart** (*"Output against temperature"*, balance point marked) as the only
"image" above the footer; a **hairline 3 × 2 grid** of six routes with prices; a **twelve-town** two/three-column
list of plain text; **three review cards** with lime stars and initial-disc avatars; and a **five-question
accordion** — which on the reference **does not open at all** (see §Reference defects).

Recreation of the ColorLib **"Switchover"** design (https://colorlib.com/wp/template/switchover/, live preview
https://preview.colorlib.com/theme/switchover/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `switchover`
- **ColorLib page:** https://colorlib.com/wp/template/switchover/ — **HTTP 200, 111,608 B**.
  `<title>` **"Switchover - Heat Pump Website Template 2026 - Colorlib"**, `<h1>` **"Switchover"**. Listing
  `og:image` `https://colorlib.com/wp/wp-content/uploads/sites/2/switchover-template.jpg` (**2,400 × 1,892**,
  served as a real `image/jpeg`, **321,270 B**). Listing description: *"Heat pumps are bought on the net figure
  and the net figure is buried behind `rebates available`…"*
- **Live preview:** https://preview.colorlib.com/theme/switchover/ — **HTTP 200, 72,073 B**,
  `text/html; charset=utf-8`, read **2026-10-25** with `curl -4` (this host answers IPv6 first and hangs; every
  fetch in this spec used `curl -4`). `<title>` **"Heat pump installation in Spokane, with every rebate itemised
  | Switchover Heat Pumps"**, `<meta name="description">` *"Heat pump installation in Spokane. Every rebate
  itemised against the installed price, and an honest explanation of what happens when it gets properly cold."*,
  `<meta name="robots" content="noindex, nofollow">`.
- **The 2026 Astro house kit**, same family as Mandrel / Headwater / Cresting / Nightwatch / Conduit / Jetline /
  Emberly. One hashed stylesheet `_astro/Base.**D9sh5N6u**.css` (**56,014 B**, `/*! tailwindcss v4.3.3 */`,
  sha256 `2561ee086c82de27…`), the behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256
  `e26cc055dec23e63…` — **byte-identical** to every sibling in the set) and the router
  `_astro/ClientRouter…**CYDbzu1r**.js` (**16,357 B**, sha256 `69eb3ac5c16a8d9a…`). Only the stylesheet differs.
- **No archive.** `https://preview.colorlib.com/downloads/free/switchover.zip` → **HTTP 404**; and
  `theme/bootstrap/switchover/` / `theme/bb/switchover/` → **404** too. The live preview is the sole DOM/CSS
  reference — there is no un-versioned twin to diff, so no "archive-verified" claim is made anywhere below.
- **Four inline `<script>` bodies** (plus the two module tags): a **theme FOUC guard** (442 B — applies `dark`
  when `localStorage.theme === 'dark'`, or when the key is absent **and** `prefers-color-scheme: dark`), a
  **JSON-LD block** (325 B, **structurally broken — `"@context":"https://***`**), **the incentive calculator**
  (1,099 B — the only page-specific behaviour in the document), and a **preloader teardown** (358 B: on `load`,
  fade `#preloader` to `opacity: 0` then `remove()` after 300 ms).
- **Two typefaces, and the mono is content, not decoration:** **Outfit** (variable wght, faces registered at
  400 / 500 / 600 / 700 / 800) for every heading and all body copy, and **JetBrains Mono** (500 / 700) for
  **every money figure** — the six `−$…` amounts, the installed price, the net total. Both are served from the
  preview host's own proxy (`/cf-fonts/v/outfit/5.2.8/latin/wght/normal.woff2` and
  `/cf-fonts/v/jetbrains-mono/5.2.8/…`, both 200) — there is **no Google Fonts `<link>`** in the reference
  document; the `@font-face` rules live in the stylesheet. Use Google Fonts in the recreation (verified 2026-10-25:
  `css2?family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap` → **200**, 9,127 B).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (open items **0**, `[~]` **0**, 2,857 rows; `find-next-unprepped.py` reports
`items with NO spec on main: 0`), so this design comes from `docs/catalog-coverage.md` — the **42 standalone
designs** on colorlib.com's own listing that the checklist never recorded. This is row **`switchover`** of 42
(*preview 200, 72,073 B*), the row **immediately after `steelworks`** (prepped as *Mandrel*, `8fe37122c`) in that
table's order.

When the app ships, append this line under **`## Business`** — currently headed `## Business (383)`, bump it to
**384** — positioned alphabetically after **Supreme** (`supreme` → `stamp`, line 1214 on `8fe37122c`) and before
**Tailor** (`tailor`, line 1215). `Switchover` sorts between `Supreme` and `Tailor` in that section's A→Z order.
Re-read the section before pasting; a concurrent stream may have inserted rows above it:

```markdown
- [x] **Switchover** — [colorlib](https://colorlib.com/wp/template/switchover/) · [balancepoint](https://balancepoint.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/switchover-template.jpg)
```

## Reference readings (2026-10-25, `curl -4` + Playwright/Chromium 1440 × 900)

| what                                                  | value                                                                                                                                                    |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML                                          | 200, **72,073 B**, `text/html; charset=utf-8`                                                                                                            |
| stylesheet `_astro/Base.D9sh5N6u.css`                 | 200, **56,014 B**, `/*! tailwindcss v4.3.3 */`, sha256 `2561ee086c82de27…`                                                                                |
| behaviour kit `…_lang.BLoalVWc.js`                    | 200, **16,233 B**, sha256 `e26cc055dec23e63…` — the house kit, byte-identical to the sibling builds                                                       |
| router `…CYDbzu1r.js`                                 | 200, **16,357 B**, sha256 `69eb3ac5c16a8d9a…`                                                                                                             |
| official archive `switchover.zip`                     | **404** — no archive                                                                                                                                     |
| `theme/bootstrap/switchover/`, `theme/bb/switchover/` | **404** — the slug-only path is the only live demo                                                                                                       |
| assets `assets/img/*.svg`                             | **3 files**: `logo.svg` (header, rendered **150 × 32**, `h-8` → `lg:h-9` = 36), `logo-light.svg` (header dark-mode twin **and** footer, **190 × 40**), `switchover-panel.svg` (**800 × 600**, `viewBox="0 0 800 600"`, the *"Output against temperature"* chart) |
| content images                                        | **4 `<img>` elements, 3 distinct local SVGs, ZERO photographs** — the page has no stock photography at all, which is the design's austerity              |
| incoming styles                                       | **1** `<link rel="stylesheet">`, **0** Google Fonts links (the faces are `@font-face` inside the sheet), **1** `dns-prefetch` to `cdnjs.cloudflare.com` (unused), `favicon.svg` |
| inner routes                                          | **7** — `/about/`, `/cold-weather/`, `/contact/`, `/privacy/`, `/service-areas/`, `/services/`, `/terms/`, all **200 with a trailing slash** (`/services` → **308**) |
| document height                                       | **6,904** px at 1440 **and** 1280 (identical — the container caps at 80 rem); **7,198** at 1024; **8,504** at 768; **10,586** at 390; **11,726** at 320      |
| horizontal overflow                                   | **none** at 390 / 768 / 1024 / 1280 / 1440 (`body.scrollWidth === clientWidth`, `scrollTo(200,0)` → `scrollX 0`); **yes at 320** — `body.scrollWidth 389` vs `clientWidth 320`, caused by the **footer newsletter row's 373 px minimum** (see §Reference defects) |
| anchors                                               | **42** `a[href]`, **15** distinct values: **6 ×** `/…/#incentives`, **6 ×** `/…/services`, **4 ×** `/…/contact`, **3 ×** each `#` (social chips) / `/…/about` / `/…/cold-weather` / `/…/service-areas` / `tel:5551201200`, **2 ×** each `/…/` (both logos) / `#service-areas` / `/…/privacy` / `/…/terms`, **1 ×** skip link `#main-content`, **1 ×** `mailto:hello@switchoverhp.example`, **1 ×** malformed `tel:(555) 120-1200` |
| inline `<svg>`                                        | **44** (star rows, tick bullets, phone, pin, sun/moon, burger, social glyphs, back-to-top, spinner)                                                        |
| structure                                             | **16 ids**, **14 `<button>`**, **2 `<form>`**, **9 `<input>`**, **1 `<select>`, 0 `<textarea>`, 0 `<table>`, 2 `<dl>`, 3 `<blockquote>`, 8 `<section>`, 0 `<details>` |
| data attributes                                       | `data-animate` **14** (all `fade-in-up`), `data-delay` **12**, `data-nav-link` **6**, `data-amount` **6**, `data-dark-toggle`, `data-mobile-toggle`, `data-header`, `data-incentives`, `data-incentive-total`, `data-net-total` |
| gradients                                             | **zero** — no `bg-gradient`, no `from-`/`via-`/`to-` utility in the markup; every band is a flat fill                                                    |
| keyframes in the sheet                                | `spin` (preloader), `ping`, `hero-float`, `shimmer` — the last two are defined by the kit and **unused** on this page                                      |

## Page structure (measured 2026-10-25, `getBoundingClientRect` in Playwright/Chromium)

| #  | band          | element                                    | ground    | top | height | notes                                                                     |
| -- | ------------- | ------------------------------------------ | --------- | --: | -----: | ------------------------------------------------------------------------- |
| 0  | licence strip | `<div>` (`bg-ink-800`, 1 px bottom border) | `#1f262c` |   0 |   **37** | 36 px row (`h-9`), 12 px type; in flow, scrolls away                       |
| 1  | header        | `<header data-header>` sticky, `z-50`      | `#fff` 90 % + `blur(16px)` | 37 | **81** | 80 px row + 1 px `ink-100`; **65 px below `xl`**                |
| 2  | hero          | `<section>` (no id)                        | `#f5f7f8` | 118 |   **684** | 12-col **7 / 5**, `gap: 64px`; quote card **469 × 524** right            |
| 3  | `#incentives` | `<section id="incentives" class="section">` | `#13181c` | 802 | **1,200** | 12-col **7 / 5**, `gap: 48px`; six ledger rows left, summary card right  |
| 4  | `#why-us`     | `<section id="why-us" class="section">`     | `#f5f7f8` |2002 |   **936** | 2-col `lg`, `gap: 64px`; **SVG chart** left (order-last below `lg`)      |
| 5  | `#services`   | `<section id="services" class="section">`   | `#ffffff` |2938 |   **903** | hairline grid **3 × 2**, cells **404 × 208**, `gap: 1px`                 |
| 6  | `#areas`      | `<section id="areas" class="section">`      | `#ffffff` |3841 |   **468** | 12-col **5 / 7**; town list **3 columns** (`2` at 390), rows 45 px       |
| 7  | `#testimonials` | `<section id="testimonials">`             | `#f9fafb` |4309 |   **768** | `py-20 lg:py-28`; three **405 × 320** cards in a 1,216 track; arrows + empty dot row |
| 8  | `#faq`        | `<section id="faq">`                       | `#ffffff` |5077 |   **820** | `py-20 lg:py-28`; five rows **768** wide, 81 px each — answers **0 px**  |
| 9  | `#contact`    | `<section id="contact">`                   | `#4a6918` |5897 |   **440** | `py-20 lg:py-28`; centred `max-w-3xl`, white pill + 2 px outline pill    |
| 10 | footer        | `<footer>`                                 | `#111827` |6337 |   **567** | `pt-16 lg:pt-24`; 12-col **4 / 5 / 3**                                    |

**Document height 6,904 px** at 1440 **and** at 1280 (identical — the container caps at 80 rem); **7,198** at
1024; **8,504** at 768; **10,586** at 390; **11,726** at 320. Band heights at the smaller widths, for the
responsive scenarios:

| width | hero  | incentives | why-us | services | areas | testimonials | faq | contact | footer |
| ----: | ----: | ---------: | -----: | -------: | ----: | -----------: | --: | ------: | -----: |
|  1440 |   684 |      1,200 |    936 |      903 |   468 |          768 | 820 |     440 |    567 |
|  1280 |   684 |      1,200 |    936 |      903 |   468 |          768 | 820 |     440 |    567 |
|  1024 |   710 |      1,220 |  1,036 |    1,003 |   468 |          796 | 820 |     440 |    587 |
|   768 | 1,050 |      1,609 |  1,392 |    1,048 |   536 |          714 | 756 |     376 |    921 |
|   390 | 1,271 |      1,901 |  1,429 |    1,783 |   698 |          774 | 804 |     480 |  1,345 |
|   320 | 1,343 |      2,297 |  1,596 |    2,031 |   718 |          886 | 880 |     508 |  1,365 |

`.section` is `padding-block: calc(var(--spacing) * 20)` = **80 px**, → **112 px** at `lg`. The hero container is
`py-14 px-4` (**56 / 16**) → `lg:py-20 lg:px-8` (**80 / 32**). Tailwind's `container` resolves to
`max-width: 1,280px` with `px-4` → `lg:px-8`, so the content column is **1,216 px** at 1440 and 1280, 960 px at
1024, fluid below. The header row is `h-16` (**64**) → `lg:h-20` (**80**), so the header is **65 px at 1024 and
below**, **81 px at 1280 and above** — measured at exactly those widths.

Grid measurements at 1440: hero `lg:grid-cols-12` with `col-span-7` / `col-span-5` and `gap: 64px`; the quote
card is **469 × 524** (`rounded-2xl` 16, `p-8`). `#incentives` uses the same 12-col split with `gap: 48px`
(`lg:gap-12`) — ledger column 690, summary column 476. `#services`' grid is `sm:grid-cols-2 lg:grid-cols-3` with
**`gap: 1px` on a `#e8ecef` ground** inside `rounded-2xl border border-ink-100 overflow-hidden`, so the rules are
gaps, not borders; each cell is `bg-white p-8` (**404 × 208**). `#areas`' town `<ul>` is `grid-cols-2
sm:grid-cols-3` with `gap-x-6`, each `<li>` a 45 px row with a 1 px `ink-100` bottom rule (211 × 45 at 1440).
Testimonials: track 1,216 wide, three `flex-shrink-0 px-3` slides of **405** (= exactly 1/3), inner card
`rounded-2xl bg-white p-8` + `shadow-soft` (`0 4px 16px -4px #0000001a`). FAQ rows are **768** wide (the
`max-w-3xl` column), 81 px each, separated by a `divide-y` 1 px `#e5e7eb` rule.

Fixed chrome, out of flow: `#preloader` (`fixed inset-0 z-[100]`, `bg-white` / dark `#030712`, a 40 px `spin`
ring in `primary-600`, removed on `load`), `#scroll-progress` (**2 px** = `h-0.5`, `top-0 left-0 z-[60]`,
`#5d861b`, width = scroll fraction — **0 px** at top, **138 px** at 600 px of a 6,904 px page, **832 px** at the
bottom), `#back-to-top` (**48 px** disc, `bottom-6 right-6`, `z-50`, `opacity: 0` + `pointer-events: none` until
**300 px** of scroll, then `1`), `#cookie-consent` (`bottom-0`, `z-50`, `role="dialog"`,
`transform: translateY(87px)` = hidden below the fold until shown). The licence strip is **in flow**, so the
sticky header's top edge moves as it scrolls away.

## Design tokens (measured from `Base.D9sh5N6u.css`, 56,014 B, plus `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values**, so the
> sheet contains **no `--color-primary-*` / `--color-ink-*` custom properties** — only Tailwind's generated
> defaults (`--radius-lg .5rem` / `xl .75rem` / `2xl 1rem`, `--spacing .25rem`, `--font-weight-*`). The two ramps
> below were reconstructed by parsing every `bg-` / `text-` / `border-` / `ring-` / `accent-` / `divide-` /
> `placeholder-` / `shadow-` rule for `primary-*` and `ink-*` (including the `/5`, `/10`, `/35`, `/40`, `/50`,
> `/60`, `/90` opacity forms) and then confirmed against `getComputedStyle` on the rendered page. Declare them in
> the app's own `@theme`.

### `primary` — lime green (the brand)

| step | hex       | used for                                                                                              |
| ---- | --------- | ------------------------------------------------------------------------------------------------------ |
| 50   | `#f4fbe8` | `hover:bg-primary-50` on the white contact pill; `from-primary-50` in the kit's unused gradient        |
| 100  | `#e6f6cb` | **the two section pills** (`bg-primary-100`, *Reviews* / *Questions*), the **testimonial avatar disc** (`bg-primary-100`) |
| 200  | `#ceec9c` | `text-primary-200` (dark-mode lede), `border-primary-200`                                              |
| 300  | `#b0dc66` | **every `−$…` amount** in the ledger (`text-primary-300`), the *"The net price"* eyebrow on the dark band, the selected-incentives `dd` |
| 400  | `#93c63c` | **the five stars on each review card** (`text-primary-400`), `accent-primary-400` on every checkbox, every `dark:` accent |
| 500  | `#78a926` | focus rings (`ring-primary-500`), `has-[:checked]` borders at 60 % (`primary-400/60` — see note below), input focus border |
| 600  | `#5d861b` | **every filled CTA** (header, hero form, footer subscribe, cookie accept, back-to-top), **the progress bar**, **the preloader ring**, the `h1`'s second line (`text-primary-600`), the hero tick bullets |
| 700  | `#4a6918` | **the `#contact` band ground**, every CTA `hover`, **the eyebrows on the light bands** (`text-primary-700`), every *"From $… installed"* price line, the `#why-us` list borders |

The lime is **ink as much as fill**: the only large lime surface is the closing band (`#4a6918`); everything else
is lime text, ticks, stars, 1 px borders and button fills on light grounds. Never put lime text on the dark band
below `primary-300` — the reference's own dark-band labels drop to `white/35`.

`has-[:checked]` note: the selected ledger row is styled by `has-[:checked]:border-primary-400/60` +
`has-[:checked]:bg-primary-400/5`, compiled as
`border-color: oklab(76.4497% -.105603 .136617 / .6)` and `background-color: oklab(… / .05)` — i.e. `#93c63c` at
60 % / 5 %. Reproduce with `has-[:checked]` utilities (Tailwind 4 supports them natively) rather than JS state.

### `ink` — cool blue-slate (all text and hairlines)

| step | hex       | used for                                                                                                  |
| ---- | --------- | ---------------------------------------------------------------------------------------------------------- |
| 50   | `#f5f7f8` | **the hero ground**, **the `#why-us` ground**, the preloader ground (light), `hover:bg-ink-50` on the dark toggle |
| 100  | `#e8ecef` | **the header bottom border**, **the services hairline ground** (`bg-ink-100` under `gap-px`), the town-list rules, the quote-card border |
| 200  | `#d0d8dd` | the phone / location pill borders, every form `border-ink-200`                                             |
| 300  | `#a6b3bc` | `placeholder:text-ink-300` only                                                                            |
| 400  | `#748592` | the sample-data footnotes (`text-ink-400`), the `#why-us` figcaption, the cookie copy                     |
| 500  | `#546472` | **body / lede ink** — every `<p>` under a heading, the dark toggle glyph                                  |
| 600  | `#3e4b56` | **nav labels** (`text-ink-600`), the burger glyph, the hero rating line                                   |
| 700  | `#303a43` | tick-bullet labels, town-list items, form labels                                                          |
| 800  | `#1f262c` | **every `h1` / `h2` / `h3`**, **the licence-strip ground** (`bg-ink-800`), pill labels, `dd` values        |
| 900  | `#13181c` | **the `#incentives` ledger ground** (`bg-ink-900`) — the darkest surface before the footer                 |

### Stock Tailwind greys, amber and white — five jobs

| token                 | hex                | where                                                                                          |
| --------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| `gray-50`             | `#f9fafb`          | **the `#testimonials` ground** (`bg-gray-50`)                                                   |
| `gray-900` / `gray-950` | `#111827` / `#030712` | **the footer** (`bg-gray-900`); `gray-950` is the dark-mode ground on white bands            |
| `gray-100` … `gray-400` | `#f3f4f6` / `#e5e7eb` / `#d1d5db` / `#9ca3af` | FAQ row rules (`divide-gray-200`), FAQ + social chips, dark-mode borders, muted dark-mode copy |
| `amber-400`           | `#fbbf24` (oklch `82.8% .189 84.429`) | **only** the five stars in the hero rating line and the licence-strip star — the reviews band uses `primary-400` instead |
| `white` / `white/70` / `white/55` / `white/45` / `white/35` | `#fff` | the ledger band's text ladder: headings `#fff`, lede `70 %`, `dt` labels `55 %`, caveat `45 %`, uppercase source labels `35 %`; borders `white/10` |

### Type

| role            | family            | size / line-height | weight | tracking | colour                     |
| --------------- | ----------------- | ------------------ | ------ | -------- | -------------------------- |
| `h1`            | Outfit            | **60 / 66** (`text-4xl sm:text-5xl lg:text-6xl`, `leading-[1.1]`) | 700 | **−1.5 px** | `#1f262c`, second line `#5d861b` |
| `h1` at 768 / 390 | Outfit          | 48 / 36            | 700    | −1.2 / −0.9 |                            |
| band `h2`       | Outfit            | **36 / 40** (`text-3xl sm:text-4xl`), 30 at 390 | 700 | −0.9 | `#1f262c` (white on the ledger + contact bands) |
| card `h2` (hero form) | Outfit       | **24 / 32** (`text-xl lg:text-2xl`) | 700 | normal | `#1f262c` |
| `h3`            | Outfit            | 18 / 28            | 700    | normal   | `#1f262c`                  |
| eyebrow         | Outfit            | **14 / 20**, uppercase | 700 | `tracking-wide` (+0.35) | `#4a6918` light bands / `#b0dc66` dark band |
| lede            | Outfit            | **18 / 28**        | 400    | normal   | `#546472` (`white/70` on dark) |
| body            | Outfit            | 16 / 24            | 400    | normal   | `#111827` base, `#546472` in prose |
| small / caveat  | Outfit            | 14 / 20, 12 / 16   | 400–600 |         | `#748592` / `white/45`      |
| **money**       | **JetBrains Mono** | net total **36 / 40** (`text-4xl`), amounts 14 / 20, `dl` values 16 | 700 (`500` on `dl`) | `tabular-nums` on the net figure | `#fff` / `#b0dc66` |

Two faces only. **Outfit** is a geometric-humanist sans with a single-storey `a` and a wide, round `o`; it is what
makes a trade page look decided rather than default. **JetBrains Mono** appears **only on money** — six `−$`
amounts, the installed price, the selected total, the net figure — and that is a token, not a mood: it signals
"these are figures, not adjectives". Do not use the mono for labels, timestamps or body copy.

### Shape, shadow, rhythm

| token        | value                                                         | where                                                        |
| ------------ | ------------------------------------------------------------- | ------------------------------------------------------------ |
| `radius-lg`  | **8 px**                                                      | every button, every pill-adjacent input, dark toggle/burger   |
| `radius-xl`  | **12 px**                                                     | each of the six ledger rows (`rounded-xl`)                    |
| `radius-2xl` | **16 px**                                                     | the quote card, the ledger summary card, the services grid shell, the `#why-us` figure, each review card |
| full         | `9999px`                                                      | dark-mode toggle? no — the location + phone pills, the avatar discs, the arrows, the back-to-top disc, the two section pills |
| `shadow-soft`| `0 4px 16px -4px #0000001a`                                   | the review cards                                              |
| `shadow-md`  | Tailwind `md`                                                 | the quote card (`shadow-md`)                                  |
| `shadow-lg`  | Tailwind `lg`                                                 | the header past 50 px of scroll; the testimonial arrows       |
| section pad  | 80 px → **112 px** at `lg`                                    | every `.section` band                                         |
| grid gaps    | 64 px (`lg:gap-16`) hero + `#why-us`; 48 px ledger; **1 px** services hairline; 24 px town `gap-x-6` | |

## Content inventory (verbatim copy; paraphrase the brand, never the operational detail)

**Licence strip** (12 px, `#1f262c`, `text-ink-100`, `opacity-70` labels + 600-weight values): *Licence*
**WA SWITCHO#000AA** · *Rebate paperwork filed for you* (`hidden` below `sm`) · *Serving* **Spokane County**
(`hidden` below `sm`) — right side: `★ 4.9` · *190+ reviews on Google (sample)*.

**Header:** wordmark; nav **Rebates** → `/#incentives`, **Cold weather**, **Services**, **Service areas**,
**About**, **Contact** (14 / 20, 600, `#3e4b56`, `hover:text-primary-700`); location pill **Spokane, WA**
(`2xl` only); phone pill **(555) 120-1200** (`md`+); dark toggle (**40 × 40**, `aria-label="Toggle dark mode"`);
CTA **Get your net price**; burger (`xl:hidden`, `aria-label="Open menu"`).

**Hero.** Eyebrow *Spokane · Licensed and rebate certified*. `h1` *"The rebates are real."* + *"Here they are,
itemised."* Lede: *"'Rebates available' is what most quotes say, which leaves you unable to tell whether the
incentive was passed on or quietly kept. Tick the ones you qualify for and watch the price come down."* Rating
line: five `amber-400` stars, **4.9**, *190+ reviews on Google · sample data*. Four ticks — *Every incentive
listed as its own line* / *The conditions that disqualify people, stated* / *Utility and manufacturer paperwork
filed for you* / *Honest about what happens below fifteen degrees*.

**Quote card** (`#quote`): h2 *Get your net price*; *Three fields. We reply within the hour on weekdays.*; fields
**Your name** (`text`) / **Phone** (`tel`) / **What are you replacing?** (`select`: *Choose the closest match*,
*Electric resistance heating*, *A gas furnace*, *An old heat pump*, *Oil or propane*, *Nothing, this is a new
build*, *Adding cooling as well*); button **Get the figure**; note *No obligation. We will tell you if a heat pump
is the wrong answer for your house.*

**`#incentives`.** Eyebrow *The net price*; h2 *What you actually pay*; lede *Six programmes, each with the
condition that most often disqualifies people. Untick anything that does not apply to you and the figure
updates.* Six rows, in this order (**bold = `checked` on load**, `data-amount` in brackets):

| # | programme | amount | source label | disqualifying condition (verbatim) |
| - | --------- | -----: | ------------ | ---------------------------------- |
| 1 | **Federal efficiency tax credit** | `−$2,000` (2000) | *Federal, claimed on your return* | *Requires qualifying equipment and a tax liability to offset. It is a credit, not a rebate, so it arrives at filing rather than at installation.* |
| 2 | **Utility heat pump rebate** | `−$1,600` (1600) | *Your electric utility* | *Usually requires the system to replace electric resistance heating rather than gas. We check your account before quoting.* |
| 3 | State income-qualified top-up | `−$1,800` (1800) | *State programme* | *Household income must fall under the published threshold for your county and family size.* |
| 4 | **Manufacturer promotion** | `−$800` (800) | *Equipment manufacturer* | *Seasonal, and larger in spring and autumn than in the middle of a cold snap when everybody is buying under pressure.* |
| 5 | Insulation and air sealing incentive | `−$900` (900) | *Utility, bundled programme* | *Only where the work is done alongside the heat pump. Worth taking because a leaky house wastes any system you buy.* |
| 6 | Electrical panel upgrade support | `−$1,200` (1200) | *State electrification programme* | *Only if your panel actually needs upgrading. We measure before quoting, and plenty of houses do not need it.* |

Summary card: `dl` *Installed price* **$14,800** / *Incentives selected* **−$4,400** (lime); above a `border-t`
rule the label *What you actually pay* and the net figure **$10,400** (36 px mono, `tabular-nums`,
`aria-live="polite"`); then *We file the utility and manufacturer paperwork for you. The federal credit is
claimed on your own return and we supply the certificate.*; CTA **Check what I qualify for** → `/contact`;
caveat *Sample amounts for demonstration. Incentive programmes change frequently and several carry income or
equipment conditions. Verify every figure and every condition before this page goes live.*

**`#why-us`.** Figure (`switchover-panel.svg`, 800 × 600): a dark panel (`#13181c` ground, `#1f262c` inner card
at `rx=24`) titled **"Output against temperature"**, axis rules `#303a43`, a lime `#93c63c` rising curve, a lime
dot at the **"balance point"** with the annotations *"What the house loses"* and *"Below here, backup makes up
the difference"*, mono `5°F / 20°F / 35°F / 50°F` ticks, and the footer line *Where it sits is a property of your
house, not of the brochure.* Figcaption: *Replace with a photograph of your own installations before launch.*
Eyebrow *The honest part*; h2 *What happens when it gets properly cold*; lede *This is where heat pump marketing
gets vague and where Spokane customers get let down. So here is the mechanism, plainly.* Four `dl` entries, each
opened by a **2 px lime left border**:

1. *Capacity falls as it gets colder* — *A heat pump moves heat rather than making it, and there is less heat
   outside to move at ten degrees than at forty. Modern cold-climate units hold usable output far lower than
   older ones, but the curve is real and nobody repeals it.*
2. *The switchover point is a setting, not a limit* — *On a dual-fuel system the control hands over to the gas
   furnace below a temperature you choose. Set it too high and you never get the savings; too low and you get a
   cold house. We set it from your actual tariffs, and we show you where.*
3. *Backup heat is expensive, and it is normal* — *All-electric systems use resistance strips below the balance
   point. They work and they cost a lot per hour. A quote that never mentions them is a quote that has not
   thought about January.*
4. *Sizing matters more here, not less* — *Oversizing to cover the coldest hour of the decade means short
   cycling for the other eight thousand. A properly sized unit with a sensible switchover beats a large one
   every winter.*

**`#services`.** Eyebrow *What we do*; h2 *Four routes, and we will say which suits* (**six** cells follow — see
§Reference defects); lede *A heat pump is not automatically the answer. In a well-supplied gas house with a young
furnace it frequently is not, and we will tell you.* Six cells, `h3` + blurb + lime price line:

| cell | `h3` | blurb | price line |
| ---- | ---- | ----- | ---------- |
| 1 | Replacing electric resistance | *The strongest case there is. Running costs typically fall by half or more and the utility rebates are aimed squarely at this switch.* | *From $12,400 installed* |
| 2 | Dual fuel with an existing furnace | *Heat pump for the mild majority of the winter, your gas furnace below the switchover point. Most of the saving, none of the January anxiety.* | *From $9,800 installed* |
| 3 | Cold climate all-electric | *For houses leaving gas entirely. Needs a properly sized unit, real insulation and a frank conversation about backup strip heat.* | *From $16,200 installed* |
| 4 | Ductless mini split | *For additions, converted basements and rooms the ducts never reached. Room by room, and cheaper than extending ductwork.* | *From $4,200 per zone* |
| 5 | Panel and service assessment | *Done before we quote, not after. Some houses need an upgrade and some do not, and assuming either way is how a quote moves by thousands.* | *$0 with a quote* |
| 6 | Insulation and air sealing | *Frequently the better first purchase. We will say so even though it is a smaller job for us, because a heat pump in a leaky house disappoints everybody.* | *Quoted with the survey* |

Footnote: *Starting prices are sample data for demonstration. Replace with your own before launch.*

**`#areas`.** h2 *Where we work*; lede *Spokane County and the Palouse edge. Cold-climate work is booked rather
than urgent, so we travel further for it than for service calls.* Twelve towns, plain `<li>` text with 1 px
rules: **Spokane · Spokane Valley · Liberty Lake · Cheney · Airway Heights · Deer Park · Medical Lake · Mead ·
Nine Mile Falls · Millwood · Otis Orchards · Colbert**. Footnote: *Replace this list with your own towns. Written
as plain text it is the cheapest local search signal a trade site has.*

**`#testimonials`.** Pill *Reviews*; h2 *What people say afterwards*; lede *Sample reviews for demonstration.
Replace with your own, ideally pulled from Google.* Three cards (five `primary-400` stars, blockquote, initial
disc, name + town):

1. *"Three quotes said "rebates available". Switchover listed six programmes, told me I would not qualify for
   two of them, and the net figure still beat everyone."* — **Halvard N.**, *South Hill*
2. *"They talked me out of all-electric and into dual fuel because of my panel. Honest, and it saved me about
   four thousand in electrical work."* — **Bree T.**, *Liberty Lake*
3. *"The switchover point is set where they said it would be and I can see it on the thermostat. First
   contractor who showed me a setting rather than a slogan."* — **Oscar A.**, *Spokane Valley*

**`#faq`.** Pill *Questions*; h2 *Before you commit*; lede *The questions that decide whether this is a good
purchase for your particular house.* Five questions, answers verbatim:

1. *Will a heat pump actually work in Spokane?* — *Yes, with a caveat that is worth understanding. Current
   cold-climate units hold usable output well below freezing. Below the balance point something else makes up the
   difference, either a gas furnace on dual fuel or resistance strips on all-electric. That is normal, and a
   contractor who does not mention it has not planned for January.*
2. *Are the rebates really available?* — *The ones on this page are real programmes, but several carry conditions
   and two of the six do not apply to most households. That is exactly why they are listed separately with their
   conditions rather than summed into a headline.*
3. *Do I need a panel upgrade?* — *Sometimes, and it is the largest hidden cost in electrification. We measure
   your service and your existing load before quoting. Plenty of houses are fine, and assuming otherwise is how
   quotes move by thousands.*
4. *Should I replace my gas furnace?* — *If it is young and working, often not. Dual fuel keeps it as backup and
   gets you most of the saving. Ripping out a healthy furnace to be fully electric is a values decision as much
   as a financial one, and we will price both honestly.*
5. *What about insulation?* — *Frequently the better first purchase, and we will say so even though it is a
   smaller job for us. Heating a leaky house efficiently is still heating a leaky house.*

**`#contact`.** h2 *Want your actual net figure?*; lede *Tick what you qualify for above, then let us check it
against your utility account.* Buttons: **Get your net price** (white pill, lime label, radius 8, `px-8 py-4`)
→ `#incentives`; **Call (555) 120-1200** (2 px `white/40` outline, `hover:border-white`).

**Footer.** Wordmark (`logo-light.svg`, 190 × 40); blurb (the meta description verbatim); three social chips
(`#`, `aria-label` Twitter / Instagram / LinkedIn); *1420 West Sprague Avenue, Spokane, WA 99201*;
**(555) 120-1200**; *hello@switchoverhp.example*. Columns: **Services** — *Replacing electric heat, Dual fuel,
Cold climate all-electric, Mini splits* (all → `/services`); **Company** — *Rebates, Cold weather, Service
areas, About*; **Support** — *Contact, Privacy, Terms*; **Stay Updated** — *Seasonal maintenance reminders and
plain-English notes on what actually needs doing before winter.*, e-mail input + **Subscribe**. Bottom bar:
*© 2026 Switchover Heat Pumps. All rights reserved.* · *Privacy Policy* · *Terms of Service*.

## Interaction inventory

| device | reference behaviour (measured) | what the recreation must do |
| ------ | ------------------------------ | --------------------------- |
| **Incentive ledger** | `[data-incentives]` root; six `input[name="incentive"]` with `data-amount`; three start `checked`; on `change`, sum the checked amounts and set `[data-incentive-total]` = `−$` + sum (`toLocaleString('en-US')`) and `[data-net-total]` = `$` + `max(14800 − sum, 0)`. Measured: load **−$4,400 / $10,400**; all ticked **−$8,300 / $6,500**; none ticked **−$0 / $14,800**. | React state, same formula, same strings — including the `−` (U+2212 minus, not a hyphen) and the `Math.max(…, 0)` floor. `aria-live="polite"` on the net figure. |
| **Dark mode** | `[data-dark-toggle]` toggles `.dark` on `<html>` and writes `localStorage.theme`; the inline FOUC guard applies `dark` when the key is `dark`, or when the key is absent **and** `prefers-color-scheme: dark`. Verified: click flips the class. | Keep the default-from-OS behaviour, keep the key `theme`, and give the button `aria-pressed` (the reference has only `aria-label`). |
| **Mobile menu** | `[data-mobile-toggle]` flips `aria-expanded` and unhides `[data-mobile-menu]` (`hidden xl:hidden` → `xl:hidden`), swapping burger ↔ ✕; the panel is **444 px** tall at 390 with six links, phone + location pills and a full-width CTA. | Same, as a disclosure; close on link click and on `Escape`. |
| **FAQ accordion** | **Broken.** Five `<button>`s, no `aria-expanded`, no `data-accordion-toggle`; the kit's handler only binds inside the mobile menu, so every answer panel measures **0 px** and a click changes nothing. | Build a working accordion: `aria-expanded` + `aria-controls`, one open at a time, first item open on load, height animates ≤ 200 ms, and reduced-motion respected. |
| **Review carousel** | **Inert.** Three `405 × 320` slides in a 1,216 track; both arrows exist (`aria-label` Previous / Next testimonial) and the dot container is **empty**; clicking twice leaves `transform: matrix(1,0,0,1,0,0)`. | Either ship a real one-per-view slider at `< lg` (arrows + dots, `aria-live` on the slide) **or** drop the arrows and the empty dot row and show the three cards statically. Pick one; do not ship dead controls. |
| **Header** | `[data-header]` gains `shadow-lg` past **50 px** of scroll. | Same threshold. |
| **Progress bar** | `#scroll-progress` 2 px, `#5d861b`, width = scroll fraction of the document (measured 0 / 138 / 832 px). | Same, `aria-hidden`, respect `prefers-reduced-motion` (no smoothing). |
| **Back to top** | 48 px disc, `opacity: 0; pointer-events: none` until **300 px**, then `1`; smooth-scrolls up. | Same. |
| **Cookie strip** | `role="dialog"`, hidden by `translateY(87px)`; **Decline** (outline) + **Accept All** (lime) — no script binds them in the reference, so the strip never appears. | Show it once after ~1.5 s unless `localStorage['cookie-consent']` is set; the two buttons store `essential` / `accepted` and dismiss. |
| **Preloader** | `#preloader` covers the viewport at `z-[100]`, removed on `load` + 300 ms fade. | Same, and skip it entirely under `prefers-reduced-motion`. |
| **Reveals** | **14** `[data-animate="fade-in-up"]` elements (`data-delay` 12) — the kit's IntersectionObserver fades each from `opacity: 0` to `1`, some measured mid-transition at `0.68`–`0.95`. The stylesheet defines **no** `[data-animate]` rules (`hero-float` / `shimmer` keyframes are unused). | Reproduce as a single `fade-in-up` on the same 14 targets: **`#testimonials` pill / h2 / lede + 3 cards (6), `#faq` pill / h2 / lede + 5 rows (8)** — nothing in the hero, the ledger, the services or the areas bands animates. Honour `prefers-reduced-motion: reduce` by rendering at `opacity: 1`. |

## Inner-page inventory (authoritative for anything the home page only summarises)

All seven routes answer **200 with a trailing slash**; the bare path **308**s to it (same as every sibling in
this kit). The home page *is* the directory URL (`/theme/switchover/` and `/theme/switchover/index.html` are
byte-identical, 72,073 B both).

| route | `<title>` | `<h1>` | `<h2>`s | use it for |
| ----- | --------- | ------ | ------- | ---------- |
| `/cold-weather/` | *Do heat pumps work in cold weather?* | *Yes, and here is the part nobody explains* | *What happens as the temperature falls*, *Four things to get right*, *What people ask about January*, *Want this worked out for your house?* | the long-form version of `#why-us`; the four "things to get right" |
| `/services/` | *Heat pump installation in Spokane* | *Four routes, and the survey decides* | the six route names individually + *Not sure which route suits?* | per-route detail and the order of the survey |
| `/service-areas/` | *Heat pump installation across Spokane County* | *Spokane County and the Palouse edge* | *Towns we cover*, *What is local about heat pumps here*, *In one of these towns?* | the town list expanded — **and the only page carrying `id="service-areas"`** |
| `/about/` | *About Switchover Heat Pumps* | *About Switchover Heat Pumps* | *"Rebates available" is not a number*, *Three commitments*, *The crew* | the crew and the three commitments |
| `/contact/` | *Contact Switchover Heat Pumps* | *Contact Switchover Heat Pumps* | *Get your net price*, *Reach us* | the full form (`name`, `email`, `subject`, `message`) |
| `/privacy/`, `/terms/` | *Privacy Policy* / *Terms of Service* | same | eight numbered sections each | legal shells |

## Screenshot analysis (`switchover-template.jpg`, 2,400 × 1,892, real `image/jpeg`, 321,270 B)

The catalogue card is a **scaled-down whole-page render**, not a hero crop, so it reads as a vertical rhythm
strip: a thin dark line at the top (the licence strip), a white header, then a **pale grey hero with a large
two-line headline on the left and a white card on the right**, then a **long very dark band** occupying roughly a
third of the image — the ledger, its six rows and the lime `−$…` amounts readable even at this scale — then
light bands with a **dark chart panel** on the left, a **3-column card grid**, a **two-column text list**, three
**white cards**, five **collapsed rows**, a **solid lime band** with two buttons, and a **black footer**. Colour
census of the card: pale grey `#f5f7f8`, white, near-black `#13181c`, lime `#5d861b`/`#93c63c`, then the lime
`#4a6918` band. What the card makes obvious and the DOM does not: **(a)** the dark ledger is the visual centre of
the page — it is the only saturated dark surface and it sits directly under the hero; **(b)** the page has **no
photography**, so the chart panel and the ledger rows carry all the visual weight; **(c)** the lime is used
**sparingly** — three or four touches per band — and the eye reads the page as grey-and-white with green signals.

## Reference defects (fix in the recreation; do not reproduce)

1. **The FAQ does not open.** Five answers exist in the DOM and none can be read: no `aria-expanded`, no
   `aria-controls`, no handler, panels at `0 px`. This is the page's most important content (it answers the
   objections the rest of the page raises) — ship it working.
2. **The review carousel's controls are dead.** Both arrows measure 40 × 40 and do nothing; the dot container is
   an empty `<div>`. Either implement it or remove the controls.
3. **`#service-areas` resolves to nothing on the home page.** Two anchors (`href="#service-areas"` — the header
   location pill and its mobile twin) point at an id that exists **only on `/service-areas/`**. The home section
   is `id="areas"`. Point them at `#areas`.
4. **One malformed `tel:`** — the footer's is `href="tel:(555) 120-1200"`, i.e. spaces and brackets inside the
   URI, while the header's and the contact band's are `tel:5551201200`. Normalise all three.
5. **Horizontal overflow at 320 px.** `body.scrollWidth` is **389** against a **320** viewport. Cause: the footer
   newsletter row (a `min-w-0 flex-1` input beside a `px-4` button) forces its grid column to **373 px**, so at
   390 the page clears by exactly 1 px and at 320 it scrolls. Fix the input (`min-w-0` on the column, or stack
   the row below `sm`) — do not copy the 373.
6. **The JSON-LD block is not valid JSON**: `{"@context":"https://***@type":"HVACBusiness",…}` — the context URL
   is truncated into the next key. Emit valid `HVACBusiness` JSON-LD (or none at all).
7. **`"Four routes, and we will say which suits"` sits above a six-cell grid.** The copy promises four; cells 5
   and 6 (*Panel and service assessment*, *Insulation and air sealing*) are services, not routes. Say *"Four
   routes, and two things to do first"* — or list six routes. Keep the honesty, drop the miscount.
8. **Four sample-data caveats must not be dropped** (*"190+ reviews … sample data"*, *"Sample amounts for
   demonstration…"*, *"Starting prices are sample data…"*, *"Sample reviews for demonstration…"*) plus the
   figcaption *"Replace with a photograph…"* and the towns note. They are the design's argument.
9. **The licence number encodes the source brand** (`WA SWITCHO#000AA`). Invent your own in the same shape
   (`WA BALANCE#000AA`) — and never let the source name survive anywhere in the app.
10. **No stock photography exists on the reference**, and the ONE image slot is a **chart, not a photo**. Do not
    "fix" that with a hero photograph: if you replace the chart with a photo you delete the best idea on the
    page. Port the chart as an inline SVG in the same tokens.
11. **The cookie strip is dead code** (nothing binds Decline / Accept All, and it never appears). Implement it
    properly or remove it — an invisible dialog is a false affordance.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Landmarks and skip link

- **GIVEN** the page is loaded
- **THEN** the first focusable element is "Skip to content" targeting `#main-content`, hidden until focused and
  then a lime pill at `left-4 top-4` with `z-[80]`
- **AND** the document has exactly one `<h1>`, one `<main id="main-content">`, one `<header>` and one `<footer>`
- **AND** the `h1` lives in the hero band, not inside the quote card

#### Scenario: Band order and grounds

- **GIVEN** a 1440 px viewport
- **THEN** the bands appear in this order: **licence strip → sticky header → hero (`#f5f7f8`) → `#incentives`
  (`#13181c`) → `#why-us` (`#f5f7f8`) → `#services` (`#ffffff`) → `#areas` (`#ffffff`) → `#testimonials`
  (`#f9fafb`) → `#faq` (`#ffffff`) → `#contact` (`#4a6918`) → footer (`#111827`)**
- **AND** the heights are within 5 % of 37 / 81 / 684 / 1,200 / 936 / 903 / 468 / 768 / 820 / 440 / 567 px, and
  the document is **6,904 px** tall
- **AND** **no gradient** appears anywhere; every band is a flat fill

#### Scenario: No horizontal overflow at 390 and up

- **GIVEN** widths 390 / 768 / 1024 / 1280 / 1440
- **THEN** `body.scrollWidth === documentElement.clientWidth` and `window.scrollTo(200, 0)` leaves `scrollX === 0`
- **AND** at **320** the same holds in the recreation, even though the reference overflows there (§Reference
  defects 5) — the footer newsletter row must not impose a 373 px minimum

#### Scenario: Fixed chrome

- **THEN** `#scroll-progress` is **2 px** tall, `#5d861b`, fixed `top-0 left-0 z-[60]`, `aria-hidden`, width = the
  scroll fraction, and **0 px** at the top of the page
- **AND** the back-to-top disc is **48 × 48**, full radius, `#5d861b`, fixed `bottom-6 right-6`, invisible
  (`opacity: 0`, `pointer-events: none`) below **300 px** of scroll
- **AND** the cookie strip is a `role="dialog"` `aria-label="Cookie consent"` that appears ~1.5 s after load
  unless `localStorage['cookie-consent']` is set, with **Decline** (outline) and **Accept All** (lime) storing
  `essential` / `accepted` and then dismissing it
- **AND** the preloader covers the viewport at `z-[100]` and is gone once the document is ready

#### Scenario: Reveals

- **THEN** exactly **14** elements animate `fade-in-up` — the `#testimonials` pill, `h2`, lede and three cards,
  and the `#faq` pill, `h2`, lede and five rows — and nothing in the hero, ledger, services or areas bands moves
- **AND** under `prefers-reduced-motion: reduce` every one renders at `opacity: 1` with no transition

### Feature: Licence strip

#### Scenario: Strip at 1440

- **THEN** a **37 px** strip (36 px row + 1 px border) on `#1f262c` sits **above** the header, in flow, inside the
  1,216 px container
- **AND** it reads *Licence* **WA BALANCE#000AA** · *Rebate paperwork filed for you* · *Serving* **Spokane
  county** as 12 px `#e8ecef` text with `opacity-70` labels and 600-weight values
- **AND** items 2 and 3 are `hidden` below `sm` (at 390 only the licence number and the rating show)
- **AND** the right side shows an `amber-400` star, **4.9**, and *190+ reviews on Google (sample)*

### Feature: Sticky header

#### Scenario: Header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** tall (80 + 1 px border), `position: sticky`, `top: 0`, `z-50`, ground `#fff` at
  **90 %** with `backdrop-filter: blur(16px)`, bottom border 1 px `#e8ecef`
- **AND** the wordmark renders **150 × 32** (`lg` 36) from an original mark — never the source SVG
- **AND** the six nav labels are 14/20 **600** `#3e4b56` with `gap: 28px`, `hover:text-primary-700`, and the
  current section is marked (`aria-current`)
- **AND** the location pill **Spokane, WA** is visible **only at ≥ 1536** (`2xl`); the phone pill is visible from
  `md`; both are full-radius, 1 px `#d0d8dd`, 14 px
- **AND** the CTA is radius **8**, `#5d861b`, white 14/**700**, `px-5 py-2.5`, `hover:bg-primary-700`
- **AND** the dark toggle and burger are 40 × 40 icon buttons with `aria-label` "Toggle dark mode" / "Open menu"

#### Scenario: Nav collapses at 1280

- **GIVEN** widths 1024 / 1100 / 1279
- **THEN** the desktop nav and the header CTA are hidden, the burger is visible and the header is **65 px**
- **AND** at 1280 the six labels, the phone pill, the toggle and the CTA all render and the header is **81 px**

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport
- **THEN** the burger flips `aria-expanded` to `true` and reveals a panel (~444 px) of six links, the phone and
  location pills, and a full-width lime CTA
- **AND** the glyph swaps burger ↔ ✕, the panel closes on link activation and on `Escape`, and focus returns to
  the burger

#### Scenario: Header shadow

- **THEN** the header has no shadow at the top and gains `shadow-lg` past **50 px** of scroll

### Feature: Hero (`#f5f7f8`)

#### Scenario: Hero at 1440

- **THEN** the band is **684 px** on `#f5f7f8`, content **1,216**, a 12-col grid with a **7 / 5** split and
  `gap: 64px`
- **AND** the eyebrow is 14/20 **700 uppercase** `#4a6918` reading *Spokane · Licensed and rebate certified*
- **AND** the `h1` is **60/66, 700, −1.5 px, `#1f262c`** with the second sentence *"Here they are, itemised."* in
  `#5d861b`, and the lede is 18/28 `#546472` capped at `max-w-xl`
- **AND** the rating line is five `amber-400` stars + **4.9** + *190+ reviews on Google · sample data*
- **AND** four tick bullets render in a `sm:grid-cols-2` grid, each a `primary-600` tick plus a 16 px `#303a43`
  label: *Every incentive listed as its own line* / *The conditions that disqualify people, stated* / *Utility
  and manufacturer paperwork filed for you* / *Honest about what happens below fifteen degrees*

#### Scenario: Quote card

- **THEN** a `#quote` card **469 × 524** (`rounded-2xl`, white, 1 px `#e8ecef`, `shadow-md`, `p-8`) sits in the
  5-column right rail
- **AND** it holds `h2` *Get your net price* (24/32), the line *Three fields. We reply within the hour on
  weekdays.*, three labelled controls — **Your name** (`text`), **Phone** (`tel`), **What are you replacing?**
  (`select` with the seven options in §Content inventory, first option the placeholder) — and the lime submit
  **Get the figure**
- **AND** each control has a real `<label for>`, `placeholder:text-ink-300`, and a visible focus ring
  (`focus:ring-2 focus:ring-primary-500/20`)
- **AND** submitting runs client-side validation (name + phone required) and shows an inline success message —
  the app posts nowhere
- **AND** the card closes with *No obligation. We will tell you if a heat pump is the wrong answer for your
  house.*

#### Scenario: Hero stacks below `lg`

- **GIVEN** widths 390 and 768
- **THEN** the grid collapses to one column with `gap: 40px`, the copy precedes the card, and the card fills the
  column (**358 × 524** at 390)
- **AND** the `h1` is **36 px** at 390 and **48 px** at 768, the four ticks stack to two columns at 768 and one
  at 390

### Feature: `#incentives` — the ledger

#### Scenario: Ledger at 1440

- **THEN** the band is **1,200 px** on `#13181c`, `padding-block: 112px`, in the 1,216 px container with a 12-col
  **7 / 5** split and `gap: 48px`
- **AND** the eyebrow *The net price* is `#b0dc66`; the `h2` *What you actually pay* is 36/40 white; the lede
  *"Six programmes, each with the condition that most often disqualifies people. Untick anything that does not
  apply to you and the figure updates."* is 18/28 `white/70`
- **AND** six rows render as `label` + `input[type=checkbox]` (`accent-primary-400`, 16 × 16), each a
  `rounded-xl border border-white/10 p-4` card with the programme name (600 white), the **mono `−$…` amount** in
  `#b0dc66` right-aligned on the same baseline, the uppercase `white/35` source label, and the condition at 14 px
  `white/50`
- **AND** the amounts and the conditions are exactly those in §Content inventory (2,000 / 1,600 / 1,800 / 800 /
  900 / 1,200)
- **AND** a checked row shows the lime border + wash — `#93c63c` at 60 % border and 5 % background — via
  `has-[:checked]`, not JS class juggling

#### Scenario: The arithmetic

- **GIVEN** the page has just loaded
- **THEN** **three** boxes are ticked (federal, utility, manufacturer) and the summary reads *Installed price*
  **$14,800**, *Incentives selected* **−$4,400**, *What you actually pay* **$10,400**
- **AND** ticking all six yields **−$8,300** and **$6,500**
- **AND** unticking all six yields **−$0** and **$14,800** — the net figure is floored at zero and never negative
- **AND** the minus sign is **U+2212** (`−`), the thousands separator is `,`, both totals are `font-mono
  tabular-nums`, and the net figure carries `aria-live="polite"`

#### Scenario: Summary card

- **THEN** the right rail is a `rounded-2xl border border-white/10 bg-white/5 p-8` card holding a `dl` (two pairs
  pinned by space-between, values mono), a `border-t border-white/10` rule, the uppercase label *What you
  actually pay* and the **36 px mono** net figure
- **AND** below it the paragraph *We file the utility and manufacturer paperwork for you…*, the lime-on-dark CTA
  **Check what I qualify for** linking to `#contact`, and the 14 px `white/35` sample-data caveat

#### Scenario: Ledger below `lg`

- **THEN** the two columns stack (ledger first, summary second), each row keeps its amount on the same line as
  the name down to 320, and the summary card follows the last row

### Feature: `#why-us` — the chart band

#### Scenario: Band at 1440

- **THEN** the band is **936 px** on `#f5f7f8` with a two-column grid (`gap: 64px`) — **figure left, copy right**
- **AND** the eyebrow *The honest part* is `#4a6918`; the `h2` *What happens when it gets properly cold* is
  36/40 `#1f262c`; the lede is 18/28 `#546472`
- **AND** four `dl` entries each open with a **2 px `#5d861b` left border**, `pl-5`, a 16/24 **700** `dt` and a
  16/28 `#546472` `dd`, with `space-y-6` between them
- **AND** the figure is an **inline SVG chart** in the page's own tokens (dark `#13181c` panel, `#1f262c` inner
  card, `#303a43` axes, `#93c63c` curve, a marked balance point, mono temperature ticks) authored from the
  description in §Content inventory — **not** the source file, and not a photograph
- **AND** the `figcaption` keeps *Replace with a photograph of your own installations before launch.*

#### Scenario: Figure reflows

- **GIVEN** widths below `lg`
- **THEN** the grid collapses to one column, the figure moves **below** the copy (`order-last lg:order-first`)
  and the chart keeps its 800 × 600 aspect

### Feature: `#services` — the six-cell hairline grid

#### Scenario: Grid at 1440

- **THEN** the band is **903 px** white; eyebrow *What we do* `#4a6918`; `h2` 36/40 `#1f262c`; lede 18/28
- **AND** a `rounded-2xl border border-ink-100 overflow-hidden` shell holds a `sm:grid-cols-2 lg:grid-cols-3` grid
  with **`gap: 1px` on `bg-ink-100`**, so the dividers are gaps, not borders
- **AND** each cell is `bg-white p-8`, **404 × 208** at 1440, with an 18/28 **700** `h3`, a 16/24 `#546472`
  blurb, and a **14/700 `#4a6918`** price line pinned to the bottom of the cell (`flex-1` on the blurb)
- **AND** the six `h3`s, blurbs and price lines are exactly those in §Content inventory
- **AND** the footnote *Starting prices are sample data for demonstration. Replace with your own before launch.*
  follows the grid at 14 px `#748592`
- **AND** the `h2` does not promise four routes over six cells — use *Four routes, and two things to do first*
  (or list six) per §Reference defects 7

#### Scenario: Grid reflows

- **THEN** three columns at `lg`, two at `sm`, one below, the 1 px rules surviving at every count, and every
  cell keeps its price line at the bottom

### Feature: `#areas` — the town list

#### Scenario: Areas at 1440

- **THEN** the band is **468 px** white, a 12-col **5 / 7** split with `gap: 64px`
- **AND** the left column holds the `h2` *Where we work* (36/40) and the lede *Spokane County and the Palouse
  edge…*
- **AND** the right column is a `<ul>` of **twelve** towns in `grid-cols-2 sm:grid-cols-3` with `gap-x-6`, each
  `<li>` a 45 px row with a 1 px `#e8ecef` bottom rule, 16 px `#303a43`
- **AND** the footnote *Replace this list with your own towns…* follows at 14 px `#546472`

#### Scenario: The location pill resolves

- **THEN** every `#service-areas` anchor in the reference becomes `#areas` here, so the header pill scrolls to
  this band on the home page — **zero** dead anchors

### Feature: `#testimonials`

#### Scenario: Reviews at 1440

- **THEN** the band is **768 px** on `#f9fafb`, `padding-block: 112px`, centred `max-w-3xl` header
- **AND** a `bg-primary-100 text-primary-700` pill reads *Reviews*; the `h2` is 36/40 `#111827`; the lede is
  18/28 `#6b7280`
- **AND** three cards render `405 × 320`, `rounded-2xl bg-white p-8 shadow-soft`, each with five `primary-400`
  stars, an 18/24 **500** `#111827` blockquote, a 48 px `bg-primary-100` initial disc and *Name* (600) + *Town*
  (14 px `#6b7280`)
- **AND** the three quotes name **Balancepoint**, not the source brand, and keep the *sample reviews* caveat
- **AND** if arrows and dots are shown they work (one card per view below `lg`, `aria-live` on the slide,
  labelled controls); if they are not shown there is no empty dot container

#### Scenario: Cards stack

- **THEN** one card per row below `lg`, three across at `lg`, and the band grows to 774 px at 390 with no
  horizontal scroll

### Feature: `#faq`

#### Scenario: Five questions, all readable

- **THEN** the band is **820 px** white with a *Questions* pill, `h2` *Before you commit* and the lede *The
  questions that decide whether this is a good purchase for your particular house.*
- **AND** five `<button>` disclosures render in a `max-w-3xl` column separated by 1 px `#e5e7eb` rules, each
  with the question at 18/24 **600** and a 32 px round chevron that rotates on open
- **AND** **every answer's text is reachable**: `aria-expanded` + `aria-controls` are correct, the first is open
  on load, and clicking a closed one opens it (the reference measures **0 px** for all five — see §Reference
  defects 1)
- **AND** the five question/answer pairs are verbatim from §Content inventory

### Feature: `#contact`

#### Scenario: Lime closing band

- **THEN** the band is **440 px** `#4a6918`, `padding-block: 112px`, centred `max-w-3xl`
- **AND** the `h2` *Want your actual net figure?* is 36/40 white; the lede *Tick what you qualify for above, then
  let us check it against your utility account.* is 18/28 `#e6f6cb`
- **AND** two buttons sit side by side at `sm` and stacked below: **Get your net price** (white ground, `#4a6918`
  label, radius 8, `px-8 py-4`) and **Call (555) 120-1200** (2 px `white/40` outline, white label,
  `hover:border-white`), the second a well-formed `tel:5551201200`

### Feature: Footer

#### Scenario: Footer at 1440

- **THEN** the footer is **567 px** on `#111827`, `pt-24`, in the 1,216 px container with a 12-col **4 / 5 / 3**
  split
- **AND** the first column holds the **190 × 40** light wordmark, the blurb, three 40 px `bg-gray-800` social
  chips (real destinations or omitted — never `href="#"`), the street address, the phone and the e-mail
- **AND** the middle column is three link lists under `uppercase tracking-wider` headings — **Services** (4),
  **Company** (4), **Support** (3) — every link resolving to a real anchor or route
- **AND** the last column is **Stay Updated**: the blurb *Seasonal maintenance reminders…*, an e-mail input and a
  lime **Subscribe** button that validates and confirms inline; the row must not impose a fixed minimum width
  (§Reference defects 5)
- **AND** the bottom bar is `mt-16 border-t border-gray-800 py-8`: *© 2026 Balancepoint. All rights reserved.*,
  *Privacy Policy*, *Terms of Service*
- **AND** the footer links `https://www.componentdock.com/` and **no** ColorLib string appears in any app file,
  comments included

### Feature: Content parity

#### Scenario: The honesty survives

- **THEN** all six incentive conditions, the four *why-us* mechanisms, the five FAQ answers, the four review
  quotes and every sample-data caveat are present verbatim (brand name aside)
- **AND** the operational copy (amounts, prices, towns, licence shape, phone) keeps its *kind* — figures stay
  figures, towns stay towns
- **AND** the app never says "Switchover" or "ColorLib" anywhere, and the wordmark, the logo SVGs and the chart
  are authored, not copied

#### Scenario: Dark mode

- **GIVEN** the toggle is activated (or `prefers-color-scheme: dark` with no stored key)
- **THEN** `<html>` gains `.dark`, `localStorage.theme` becomes `dark`, the body ground becomes `#030712`, the
  hero and `#why-us` become `#111827`, the white bands become `#030712`, `#incentives` stays `#13181c`, and
  `#contact` stays `#4a6918`
- **AND** text inverts to `#f3f4f6`, headings to white, accents move to `primary-400` (`#93c63c`), and the card
  grounds become `gray-800` / `gray-900`
- **AND** the toggle exposes `aria-pressed` reflecting the current mode

#### Scenario: Accessibility floor

- **THEN** every icon-only control has an accessible name, every input a label, every band a landmark
- **AND** contrast holds for the dark-band copy at `white/50` **on `#13181c`** (≈ 6.4:1) and fails nowhere as
  badly as the reference's own `white/35` labels — raise those to `white/50` where they carry information
- **AND** keyboard tab order follows the visual order and the skip link is first

## Verification checklist

- [ ] `apps/balancepoint` exists, `@free-react-templates/balancepoint` in `package.json`, `public/CNAME` =
      `balancepoint.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments included);
      the app never says "Switchover"
- [ ] bands in this order: **licence strip → sticky header → hero → `#incentives` → `#why-us` → `#services` →
      `#areas` → `#testimonials` → `#faq` → `#contact` → footer** (+ fixed preloader / progress / back-to-top /
      cookie)
- [ ] strip **37 px** `#1f262c` above the header, in flow; three credential pairs, the last two `hidden` below
      `sm`; rating on the right
- [ ] header **81 px** sticky (white 90 % + `blur(16px)`, 1 px `#e8ecef`), **65 px** below `xl`; six labels
      14/600 `#3e4b56`; phone pill from `md`; **location pill only at ≥ 1536**; lime CTA radius 8;
      `shadow-lg` past 50 px; working mobile disclosure
- [ ] hero **684 px** `#f5f7f8`, 12-col **7 / 5**, `gap-64`; `h1` **60/66 700 −1.5 `#1f262c`** + lime second
      line; eyebrow 14/700 `#4a6918`; four ticks; quote card **469 × 524** with three labelled fields and a
      working submit
- [ ] `#incentives` **1,200 px** `#13181c`; six checkbox rows with mono `−$` amounts and verbatim conditions;
      selected rows lime-bordered via `has-[:checked]`; summary + `aria-live` net figure
- [ ] arithmetic: load **−$4,400 / $10,400**, all six **−$8,300 / $6,500**, none **−$0 / $14,800**; U+2212 minus;
      `tabular-nums`
- [ ] `#why-us` **936 px** `#f5f7f8`; four `dl` entries with 2 px lime left borders; **inline SVG chart** in the
      page's tokens + figcaption
- [ ] `#services` **903 px**; hairline **3 × 2** grid (`gap: 1px` on `#e8ecef`), cells 404 × 208, six `h3` +
      blurb + lime price line, sample-price footnote, and the `h2` no longer miscounts four over six
- [ ] `#areas` **468 px**; twelve towns in 2 → 3 columns with 1 px rules; town footnote
- [ ] `#testimonials` **768 px** `#f9fafb`; three **405 × 320** `shadow-soft` cards, lime stars, initial discs;
      caveat kept; **no dead arrows and no empty dot row**
- [ ] `#faq` **820 px**; five disclosures that actually open, `aria-expanded` + `aria-controls`, first open, all
      five answers verbatim
- [ ] `#contact` **440 px** `#4a6918`; white pill + 2 px outline pill; `tel:` well formed
- [ ] footer **567 px** `#111827`; 12-col **4 / 5 / 3**; light wordmark 190 × 40; three link lists; newsletter
      that validates without imposing a fixed minimum width; bottom bar
- [ ] chrome: 2 px `#5d861b` progress bar, skip link, 48 px back-to-top past 300 px, cookie strip that stores
      `accepted` / `essential`, preloader removed when ready
- [ ] 14 `fade-in-up` reveals on exactly the testimonials + FAQ targets, none under `prefers-reduced-motion`
- [ ] dark mode: `.dark` on `<html>`, `localStorage.theme`, ground `#030712`, ledger stays `#13181c`, contact
      stays `#4a6918`, accents `primary-400`
- [ ] `body.scrollWidth === clientWidth` at **320** / 390 / 768 / 1024 / 1280 / 1440; the reference's 320 px
      overflow is fixed, not reproduced
- [ ] **zero** `href="#"`; **zero** dead `#service-areas` anchors; every `tel:` well formed; every icon-only
      control named; valid JSON-LD or none
- [ ] 100% coverage on the new app, `scripts/verify-app.sh balancepoint` green

## Implementation notes for the port (not requirements)

- **The ledger is the template.** Build it from a single `incentives` array (`{ id, name, amount, source,
  condition, defaultChecked }`), derive the totals from it, and render the amount with
  `'−$' + total.toLocaleString('en-US')`. Do not hand-place six rows and six numbers; the arithmetic is the
  product.
- **Two faces, and the mono is a semantic token.** Outfit 400–800 for prose and headings; JetBrains Mono
  **only** for money. If you find yourself setting a label in the mono, stop.
- **Lime is a signal, not a ground.** One large lime surface (`#4a6918`), everything else lime text/ticks/borders
  on light grounds. Put fat lime blocks in every band and the page turns into a farm-supply flyer.
- **Port the chart as an inline SVG** in the page's own colours (dark panel, `#303a43` axes, lime curve, mono
  ticks). It is the only picture on the page and it is load-bearing: it is what *"below this line, backup makes
  up the difference"* means.
- **Hairlines, not borders,** in the services grid: `gap: 1px` on a `#e8ecef` ground inside a `rounded-2xl
  overflow-hidden` shell. Adding `border` to cells doubles every rule.
- **`has-[:checked]` over state classes.** The lime selected-row treatment belongs in CSS; keep React state only
  for the numbers.
- **Placeholder imagery:** none needed. If you add photography, use
  `https://picsum.photos/seed/balancepoint-<n>/<w>/<h>` — but the reference has **no photos**, and the figcaption
  invites one only as a launch decision.
- **Icons:** `lucide-react` (`Check`, `Star`, `Phone`, `MapPin`, `Menu`, `X`, `Sun`, `Moon`, `ChevronDown`,
  `ArrowUp`, `ArrowRight`). The wordmark is yours: an all-caps 700 wordmark plus a lime dot reads the same
  without copying the source SVG.
- **The wordmark's second line** in the `h1` is `text-primary-600`; keep the two-sentence split (`"The rebates are
  real." / "Here they are, itemised."`) because the colour break lands on the promise.
