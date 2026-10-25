# Template: Standpipe (Trade services — plumbing company landing page with an above-the-fold quote form)

## Purpose

A landing page for a **licensed plumbing company**, built on ColorLib's own premise for the design:
*"Plumbing is bought under pressure, and almost no plumbing site asks for the job while the visitor is
still on the first screen. Mainline puts a three-field quote form beside the headline, names the towns
served as text, and carries the licence above the navigation where it is read before anything else."*
Every band is a different answer to *why should I let this crew into my basement*: a **seven-item trade
header with a phone pill**, a **12-column hero that puts a three-field quote card in the right five
columns**, a **full-bleed emergency band with a live-pulse dot**, a **six-cell hairline service grid with
"from" prices**, a **photograph-plus-four-promises split**, a **numbered three-step process**, a **fifteen-town
coverage list written as text**, a **financing panel**, a **three-card review carousel**, a **five-question
single-open FAQ**, and a **closing band on the darker brand tone**.

The copy is written by somebody who has actually hired a plumber. It quotes money before it quotes
virtue — *"From $149 call-out"*, *"From $1,200 installed"*, *"Repairs over $500 can be spread over 12
months"*, *"Interest free for 12 months on approved credit"* — and it repeatedly promises the thing
trades are notorious for not doing: *"A price before the work, not after"*, *"If it turns out easier than
expected, the quote does not move"*, *"You decide before any tool comes out"*, *"Boot covers, drop cloths
and the old parts taken away"*. Honesty about what is *sample data* is part of the register too: the
reference labels its own prices *"Prices are illustrative starting points, not quotes"*, its reviews
*"Sample reviews for demonstration"*, and its licence *"CCB #000000"*. A recreation that swaps this for
lorem ipsum or a generic "quality service you can trust" has not recreated the design — the **trade
specificity is the template**.

The composition is **one tinted band, one saturated band, then alternating white/tinted bands, then a
second saturated band, then near-black**: hero (`bg-ink-50`, `#f4f7fa`, 670 px) → emergency
(`bg-primary-600`, `#1a8fd8`, 164 px) → services (white, 831 px) → why-us (`ink-50`, 776 px) → process
(white, 564 px) → service areas (white, 513 px) → financing (white, 48 px padding, a **bordered
`primary-50` panel**, 278 px) → testimonials (`gray-50`, `#f9fafb`, 768 px) → FAQ (white, 820 px) →
contact (`bg-primary-700`, `#1576b2`, 480 px) → footer (`gray-900`, `#111827`, 543 px). Note the two
greys: the marketing bands use the **custom `ink` ramp**, while testimonials/FAQ/footer fall back to
**stock Tailwind greys**. That mix is deliberate in the source and must not be "tidied" into one ramp.

The palette is **one custom blue with a wide, quiet support ramp**. `primary` is a ten-step blue built
around `#1a8fd8` — bright enough to read as "water" on a white page, dark enough that white 14 px bold
sits on `600` and `700` without a second thought. `ink` is a blue-grey that is almost a neutral at 50
(`#f4f7fa`, the hero and why-us ground) and almost black at 800 (`#0f2237`, the licence bar and every
heading). The design uses **exactly one warm accent, once**: the five hero stars in stock
`amber-400` (`#fbbf24`) at 16 px. Everything else that could be an accent is `primary` — including the
**testimonial stars, which are `primary-400` (`#49b3ec`), not amber**. That asymmetry is real and
visible; making both star rows amber is the single easiest way to look "almost right".

The type is **Manrope alone** (400/500/600/700/800, self-hosted through `/cf-fonts/v/manrope/5.2.8/`) — a
geometric-humanist sans with a tall x-height that survives 14 px uppercase eyebrows. There is no second
face and no serif: hierarchy comes from **size, weight and tracking** — `h1` 60/66 at `−1.5 px`
(`tracking-tight`, `leading-[1.1]`), `h2` 36/40 at `−0.9 px`, `h3` 18/28 upright, eyebrows 14 px/700
uppercase at `+0.35 px`, footer column heads 14 px/600 uppercase at `+0.7 px`, and a lone accent clause
inside the `h1` (`"and everywhere between."`) painted `primary-600`. Losing the tight heading tracking
or flattening the eyebrow uppercase kills the trade-brochure feel.

Recreation of the ColorLib "Mainline" design (https://colorlib.com/wp/template/mainline/, live preview
https://preview.colorlib.com/theme/mainline/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `mainline`
* **ColorLib page:** https://colorlib.com/wp/template/mainline/ — **HTTP 200, 111,986 B**, `<title>`
  **"Mainline - Plumbing Website Template 2026 - Colorlib"**, breadcrumb *"HTML & CSS Website Templates ›
  Plumbing Website Templates › Mainline"*, **Released September 2026**, categories **Astro · Plumbing ·
  Tailwind CSS**, credits *"Images from Unsplash"*, licence CC BY 3.0. `<meta name="description">` carries
  the above-the-fold-form premise quoted in the first paragraph.
* **Live preview:** https://preview.colorlib.com/theme/mainline/ — **HTTP 200, 69,579 B** read 2026-10-25
  with `curl -4`. A 2026 **Astro** build: one hashed stylesheet `_astro/Base.C952if9S.css` (**58,248 B**,
  `/*! tailwindcss v4.3.3 */`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B** — the same hashed
  name and byte count the Endpaper prep measured on `lantern`; it is the house base kit, so most of its
  handlers are *not* wired on this page — see §Data-attribute inventory) and the view-transition router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.CYDbzu1r.js` (**16,357 B**).
* **No archive:** `https://preview.colorlib.com/downloads/free/mainline.zip` → **404**, and
  `theme/bootstrap/mainline/` → **404**, `theme/bb/mainline/` → **404**. The live preview is the only
  copy of this design; there is no un-versioned twin to hash against.
* **Single-page?** No. **Nine inner routes are live** (`about`, `services`, `service-areas`, `reviews`,
  `financing`, `blog`, `contact`, `privacy`, `terms` — all HTTP 200). See §Inner-page inventory; they are
  the authoritative reference for the sections a one-page recreation must compress (the services detail
  grid, the coverage explainer, the finance FAQ, the about/story band).

* **Recreation name:** `standpipe` — a real plumbing term (the vertical riser that carries water up a
  building), one lowercase word, no collision with `apps/`, `openspec/specs/`, `TEMPLATES.md` names, or
  any substring in the repository (`git grep -il standpipe origin/main` → nothing), and both
  `colorlib.com/wp/template/standpipe/` and `preview.colorlib.com/theme/standpipe/` → **404**. The
  recreation lives at `apps/standpipe`, package `@free-react-templates/standpipe`,
  `standpipe.free.componentdock.com`. **No ColorLib string may appear in the app** — provenance lives in
  this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, `[x]` count **2,870**), so this design came from
`docs/catalog-coverage.md` — one of the **42 standalone designs** on colorlib.com's listing that the
checklist never recorded. When the app ships, append the row under **`## Business`** (heading currently
`(374)`, line 881) **in source-name alphabetical order**: `mainline` sorts after **Magnews2**
(`magnews2`, line 1100) and before **Marco 2** (`marco-2`, line 1101). **Re-count the heading** rather
than copying `(375)` — a concurrent prep may land first.

## Reference readings (2026-10-25, `curl -4`)

| what                                   | value                                                                 |
| -------------------------------------- | --------------------------------------------------------------------- |
| preview HTML                           | 200, **69,579 B**, `text/html; charset=utf-8`                          |
| stylesheet `Base.C952if9S.css`          | 200, **58,248 B**, `/*! tailwindcss v4.3.3 */`                          |
| behaviour kit `…_lang.BLoalVWc.js`      | 200, **16,233 B** (house kit, hash-shared with `lantern`/`endpaper`)   |
| router `…CYDbzu1r.js`                   | 200, **16,357 B**                                                      |
| logo assets                            | `assets/img/logo.svg` (171 × 36 measured), `assets/img/logo-light.svg` |
| content images                          | **one** — `images.unsplash.com/photo-1558618666-fcd25c85cd64`, 576 × 432 |
| page height                            | **6,525 px** at 1440 × 900 (`scrollHeight`)                             |
| anchors                                | **47** (`document.querySelectorAll('a[href]')`)                        |
| unique classes in markup               | **325** (27 of them `dark:` variants)                                  |
| inline `<svg>` count                   | **46** (0 icon font, 0 sprite sheet)                                   |
| `<forms>`                              | **2** (quote, newsletter); `action="#" method="post"` and none          |
| `<details>`                            | **0** — the FAQ is a JS accordion over authored inline styles          |

## Design tokens (measured from `Base.C952if9S.css`, 58,248 B, and from `getComputedStyle` at 1440 px)

### Brand ramp — `primary` (**a custom blue, not a stock Tailwind ramp**)

Emitted as plain escaped utilities (`.bg-primary-600{background-color:#1a8fd8}`), **not** as
`@layer theme` custom properties — a `--color-primary-600` grep finds nothing.

| step  | hex       | role on the page                                                             |
| ----- | --------- | ---------------------------------------------------------------------------- |
| `50`  | `#f0f9fe` | financing panel ground                                                        |
| `100` | `#dcf0fc` | "Reviews"/"Questions" pill badges, testimonial avatar discs, empty stars      |
| `200` | `#b6e1f8` | financing panel border, phone-pill border hover                               |
| `300` | `#85cef3` | **dark mode only** — `dark:hover:text-primary-300` on text links              |
| `400` | `#49b3ec` | **testimonial stars**, dark-mode eyebrows, dark-mode check icons              |
| `500` | `#289de6` | dark-mode borders (`dark:border-primary-500`)                                |
| `600` | `#1a8fd8` | **the brand**: every solid CTA, the emergency band, the "From $…" prices, hero h1 accent clause |
| `700` | `#1576b2` | the closing contact band, eyebrow text on light bands, hover for every `600` button |
| `800` | `#145d8a` | dark-mode only (borders)                                                     |
| `900` | `#134a6c` | dark-mode only (borders)                                                     |

### Ink ramp — `ink` (**custom blue-grey; the structural colour**)

| step  | hex       | role                                                                          |
| ----- | --------- | ----------------------------------------------------------------------------- |
| `50`  | `#f4f7fa` | **hero band** and **why-us band** ground                                       |
| `100` | `#e6edf4` | every hairline: header border, service-grid ground (the 1 px dividers), list rules |
| `200` | `#c6d6e5` | input borders, pill borders                                                    |
| `300` | `#9db4cc` | `::placeholder` only                                                           |
| `400` | `#5f7e9f` | footnotes ("Starting prices shown are sample data…", the form's 12 px line)     |
| `500` | `#3a5b7f` | **lede paragraphs** and card body copy                                         |
| `600` | `#22405f` | nav labels, form labels, price-line contrast                                   |
| `700` | `#16304a` | checklist items, town-list rows, city pill                                     |
| `800` | `#0f2237` | **licence bar**, every `h1`/`h2`/`h3` on light bands                           |
| `900` | `#0a1827` | emitted, unused in the light theme                                              |

### Stock greys (testimonials, FAQ, footer — deliberately *not* the ink ramp)

| token       | hex       | role                                            |
| ----------- | --------- | ----------------------------------------------- |
| `gray-50`   | `#f9fafb` | testimonials band                               |
| `gray-100`  | `#f3f4f6` | FAQ plus-disc ground                            |
| `gray-200`  | `#e5e7eb` | FAQ `divide-y` rules                            |
| `gray-300`  | `#d1d5db` | footer body text                                |
| `gray-400`  | `#9ca3af` | footer links, testimonial city, FAQ answer text |
| `gray-600`  | `#4b5563` | FAQ disc glyph; testimonial lede                |
| `gray-700`  | `#374151` | newsletter input border                         |
| `gray-800`  | `#1f2937` | footer social squares, newsletter input ground  |
| `gray-900`  | `#111827` | **footer ground**, testimonial `h2`             |
| `gray-950`  | `#030712` | **dark-mode body**                              |
| `amber-400` | `#fbbf24` | **hero stars only** (16 px, five of them)       |

### Dark mode (measured by clicking `[data-dark-toggle]`, `localStorage.theme = "dark"`)

| element                | light                            | dark                                    |
| ---------------------- | -------------------------------- | --------------------------------------- |
| `<body>`               | `#ffffff` / `#111827`            | **`#030712`** / `#f3f4f6`               |
| hero + why-us band     | `#f4f7fa`                        | **`#111827`** (`dark:bg-gray-900`)      |
| quote card             | `#ffffff`, border `#e6edf4`      | **`#111827`**, border `#1f2937`         |
| service cells          | `#ffffff`                        | **`#030712`** (`dark:bg-gray-950`)      |
| inputs                 | `#ffffff`, border `#c6d6e5`      | **`#1f2937`**, border `#374151`         |
| headings               | `#0f2237` / `#111827`            | `#ffffff`                               |
| FAQ disc               | `#f3f4f6`, glyph `#4b5563`       | **`#1f2937`**, glyph `#9ca3af`          |
| footer                 | `#111827` / `#d1d5db`            | unchanged (`dark:bg-gray-900`)          |

The initial theme is chosen by an inline script **before paint**: `localStorage.theme === 'dark'`, else
`prefers-color-scheme: dark`, else light. The toggle writes `localStorage.theme` and flips
`documentElement.classList.toggle('dark')`. The recreation must keep both halves (no flash of light).

### Typography

Single family: **Manrope**, weights **400 / 500 / 600 / 700 / 800** (800 is loaded but unused — headings
are 700). Self-hosted in the reference via `/cf-fonts/v/manrope/5.2.8/`; the recreation loads Manrope
from Google Fonts (`css2?family=Manrope:wght@400;500;600;700;800`, verified 200) and falls back to
`system-ui, sans-serif`.

| role                    | size / line / tracking / weight        | colour                     |
| ----------------------- | -------------------------------------- | -------------------------- |
| body                    | 16 / 24 / normal / 400                 | `#111827`                  |
| `h1` (≥1024)            | **60 / 66 / −1.5 px / 700**            | `#0f2237`, clause `#1a8fd8` |
| `h1` (≥640) / (<640)    | 48 / 53 / −1.2 / 700 · **36 / 40 / −0.9 / 700** | same              |
| `h2` (band heads, ≥640) | **36 / 40 / −0.9 px / 700**            | `#0f2237` (`#111827` in grey bands) |
| `h2` (<640)             | 30 / 36 / −0.75 / 700                  | same                       |
| `h2` (panel: quote card, financing) | 24 / 32 / normal / 700     | `#0f2237`                  |
| `h3` (card / step / dl) | 18 / 28 / normal / 700                 | `#0f2237`                  |
| lede paragraph          | 18 / 28 / normal / 400                 | `#3a5b7f` (`#4b5563` in grey bands) |
| eyebrow (uppercase)     | **14 / 20 / +0.35 px / 700 / uppercase** | `#1576b2`                |
| form label              | 14 / 20 / normal / 600                 | `#16304a`                  |
| price line              | 14 / 20 / normal / 700                 | `#1576b2`                  |
| footnote                | 14 / 20 (12 px inside the quote card) / 400 | `#5f7e9f`             |
| nav label               | 14 / 20 / normal / 600                 | `#22405f` → `#1576b2` hover |
| footer column head      | **14 / 20 / +0.7 px / 600 / uppercase**| `#ffffff`                  |
| licence bar             | 12 / 16 / normal / 400 (`600` for values) | `#e6edf4` (opacity 70 % labels) |
| testimonial quote       | 18 / 28 / normal / 500                 | `#111827`                  |

### Buttons, fields, radii, shadows (measured at 1440)

| element                | geometry / paint                                                              |
| ---------------------- | ----------------------------------------------------------------------------- |
| nav CTA "Get a quote"  | **119 × 40**, radius **8**, `#1a8fd8`, white 14/700, `px-5 py-2.5`, hover `#1576b2` |
| hero form submit       | full width, radius 8, `#1a8fd8`, white 16/700, `py-3.5` (58 px tall)           |
| emergency phone pill   | radius full, white ground, `#1576b2` 18/700, `px-6 py-3`, hover `#f0f9fe`       |
| contact primary CTA    | **155 × 56**, radius 8, white ground, `#1576b2` 16/700, `px-8 py-4`             |
| contact secondary CTA  | **248 × 60**, radius 8, transparent, **2 px `white/40`** border, white 16/700   |
| inputs / select        | **403 × 50**, radius **8**, border **1 px `#c6d6e5`**, `px-4 py-3` (16 px text), white |
| newsletter input       | **164 × 46**, radius 8, `#1f2937` ground, `#374151` border, white text         |
| card radius            | **16 px** (`--radius-2xl: 1rem`) — quote card, service grid shell, image, review cards, financing panel |
| `--radius-lg`          | `0.5rem` (8 px) — every button and field                                       |
| quote card shadow      | `shadow-md` → `0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1)` |
| review card shadow     | `shadow-soft` (house utility) → **`0 4px 16px -4px rgb(0 0 0 / .1)`**          |
| header elevation       | none → `shadow-lg` once `scrollY > 50`                                        |

Section rhythm: `.section` = `padding-block: 80 px`, **`112 px` from 640 px up** (`calc(var(--spacing)
* 20)` → `* 28`). Exceptions, all measured: hero `py-14 lg:py-20` (**56 → 80**), `#emergency`
`py-6 lg:py-8` (**24 → 32**), `#financing` `py-12` (**48**, fixed), `#testimonials` / `#faq` / `#contact`
`py-20 lg:py-28` (**80 → 112**), footer `pt-16 lg:pt-24` (**64 → 96**). The `container` is
`max-width: 1280 px` with `padding-inline` **16 → 24 → 32 → 40 → 48 px** at 640/768/1024/1280/1536.

### Band heights (measured, `getBoundingClientRect`, 1440 × 900)

| band            | height  | ground                                   |
| --------------- | ------: | ---------------------------------------- |
| licence bar     |  **37** | `#0f2237`                                |
| header          |  **81** | `rgb(255 255 255 / .9)` + `blur(16px)`   |
| hero            | **670** | `#f4f7fa`                                |
| `#emergency`    | **164** | `#1a8fd8`                                |
| `#services`     | **831** | white                                    |
| `#why-us`       | **776** | `#f4f7fa`                                |
| `#process`      | **564** | white                                    |
| `#service-areas`| **513** | white                                    |
| `#financing`    | **278** | white (panel `#f0f9fe`)                  |
| `#testimonials` | **768** | `#f9fafb`                                |
| `#faq`          | **820** | white                                    |
| `#contact`      | **480** | `#1576b2`                                |
| footer          | **543** | `#111827`                                |
| **document**    | **6,525** | —                                      |

At 390 × 844: `h1` 36 px, hero grid stacks (1,128 px), service cells stack to 1 column (1,087 px),
town list keeps **2** columns (167 px each), and `scrollWidth === clientWidth` (no horizontal overflow).

## Reference document order

```
#preloader → skip link → #scroll-progress → licence bar → <header> (sticky)
  → <main id="main-content">
      1  section.bg-ink-50            hero + #quote card
      2  #emergency                   primary-600 band
      3  #services                    white, hairline 6-cell grid
      4  #why-us                      ink-50, image + 4-term <dl>
      5  #process                     white, <ol> 01/02/03
      6  #service-areas               white, 5/7 split, 15-town list
      7  #financing                   white, primary-50 inset panel
      8  #testimonials                gray-50, 3-card carousel
      9  #faq                         white, 5-row single-open accordion
     10  #contact                     primary-700 band, two CTAs
  → <footer>                         gray-900, 4 + 5 + 3 columns, newsletter, legal bar
  → fixed: mobile call bar, #cookie-consent, #back-to-top
```

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Licence bar (37 px, `#0f2237`, `data-licence-bar`)

`container` flex, `h-9`, `text-xs`. Left `<ul>` with three items, each `label span.opacity-70` +
`span.font-semibold`: **"Licence · CCB #000000"**, **"Bonded & insured"** (`hidden sm:flex`), **"Serving ·
Portland metro"**. Right: five `amber-400` stars, **"4.9"** bold, and *"200+ reviews on Google (sample)"*
with the last word dimmed. This bar is above the navigation **by design** — it is a trust signal read
before the logo.

### 1 — Header (81 px incl. border; `sticky top-0 z-50`, `bg-white/90`, `backdrop-blur-lg`)

* Wordmark: **`assets/img/logo.svg`**, `h-8 lg:h-9` (rendered **171 × 36**), a blue pipe-shaped mark
  beside a two-line lockup (heavy sans name over a letterspaced `PLUMBING`). A `logo-light.svg` twin is
  `hidden dark:block`.
* Desktop nav appears at **`xl` (1280 px), not `lg`** — the source comments say so explicitly: seven
  labels (`Services`, `Service areas`, `Reviews`, `Financing`, `About`, `Blog`, `Contact`), `gap-7`,
  14 px/600 `#22405f`.
* Right cluster, four separate tap targets: a **city pill** (`Portland, OR`, `hidden 2xl:block` — so it
  only exists at ≥1536 px, measured `inline-flex`, 129 px wide at 1600), a **phone pill** (`md:block`,
  `tel:5550100100`), a **dark-mode toggle** (40 × 40, moon icon, `aria-label="Toggle dark mode"`), and the
  **"Get a quote"** CTA (`#mainline/#quote`).
* Below `xl`: a 40 × 40 hamburger (`aria-label="Open menu"`, `aria-expanded`) and a disclosure panel whose
  links are `block py-3`, with the phone + city pills and a full-width CTA under a rule.

### 2 — Hero (670 px, `#f4f7fa`) — the whole point of the design

`container py-14 lg:py-20` → `grid lg:grid-cols-12 items-start gap-10 lg:gap-16`, split **7 / 5**.

Left (`lg:col-span-7 lg:pt-6`):
* eyebrow **"Licensed plumbers · Portland and 14 nearby towns"**;
* `h1` *"Plumbers in Portland, Beaverton **and everywhere between.**"* — the final clause inside
  `span.text-primary-600`;
* lede *"Repairs, drain clearing, water heaters and re-pipes. Quoted before we start, tidied up after we
  finish, and answered by a plumber at any hour."* (`max-w-xl`);
* rating line: five `amber-400` 16 px stars + **4.9** + *"200+ reviews on Google · sample data"*;
* a **four-item checklist** (`ul mt-8 grid gap-3 sm:grid-cols-2`, `primary-600` check icons): *"Same-day
  appointments on most repairs"*, *"Flat-rate quote before any work starts"*, *"Licensed, bonded and
  insured in Oregon"*, *"Ten-year warranty on re-pipes"*.

Right (`lg:col-span-5`) — **`#quote`, the card the entire template exists for** (469 × 510, white,
radius 16, `1 px #e6edf4`, `p-6 lg:p-8`, `shadow-md`):
* `h2` **"Get a quote"** (24 px) + *"Three fields. We reply within the hour on weekdays."*;
* `<form action="#" method="post" data-form>` with `space-y-4`: **Your name** (`text`,
  placeholder *"First and last name"*), **Phone** (`tel`, *(555) 000-0000*), **What is going on?**
  (`select#qf-problem`, first option *"Choose the closest match"*, then **eight** job types: Burst pipe or
  leak · Blocked drain · No hot water · Water heater replacement · Toilet or faucet repair · Sewer line ·
  Re-pipe or remodel · Something else);
* submit **"Request my quote"** (full width, 58 px);
* footnote 12 px `#5f7e9f`: *"No obligation. We never sell your details."*

### 3 — `#emergency` (164 px, `#1a8fd8`) — full-bleed, one row

Flex column → row at `lg`, `justify-between`. Left: an uppercase eyebrow with a **live pulse** —
two nested `h-2 w-2` discs, the outer one `animate-ping` — reading *"24-hour emergency line"*; then
*"Burst pipe or no water? We answer at any hour."* (18 px → 20 px bold); then the 14 px `opacity-90`
qualifier *"Call-out is quoted before we set off, never added afterwards. If the fault is on the water
company's side of the meter we will tell you and there is no charge."* Right: the white pill
**"(555) 010-0100"** (`tel:5550100100`, 18 px/700, `#1576b2`).

### 4 — `#services` (831 px, white) — a **hairline grid**, not six cards

Header block `max-w-2xl`: eyebrow **"What we do"**, `h2` *"Every job a house throws at you"*, lede
*"Residential and light commercial plumbing across the Portland metro. Prices are illustrative starting
points, not quotes."*

Then the signature pattern: `div.mt-12.grid.gap-px.overflow-hidden.rounded-2xl.border.border-ink-100.
bg-ink-100` with `sm:grid-cols-2 lg:grid-cols-3` — **the 1 px gaps ARE the dividers**, because the grid's
own ground is `#e6edf4` and each cell is `bg-white`. Six cells (`flex flex-col p-6 lg:p-8`), each:
`h3` + one-sentence blurb (`flex-1`) + a **price line** in `#1576b2`:

| # | title | blurb | price line |
| - | ----- | ----- | ---------- |
| 1 | Emergency repairs | Burst pipes, failed shut-offs and anything actively leaking. We isolate first, then fix. | **From $149 call-out** |
| 2 | Drain clearing | Kitchen, bath and main line blockages, cleared with a camera inspection included. | **From $189** |
| 3 | Water heaters | Repair, replacement and tankless conversions, with the old unit hauled away. | **From $1,200 installed** |
| 4 | Toilets and faucets | Running toilets, dripping faucets, seized shut-offs and worn cartridges. | **From $129** |
| 5 | Sewer lines | Camera inspection, hydro jetting, spot repairs and trenchless replacement. | **Quoted after inspection** |
| 6 | Re-pipes and remodels | Whole-house re-pipes in PEX or copper, and rough-in for kitchen and bath remodels. | **Quoted on site** |

Footnote under the grid: *"Starting prices shown are sample data for demonstration. Replace with your
own before launch."* — keep a sample-data disclaimer of the same shape.

### 5 — `#why-us` (776 px, `#f4f7fa`) — photograph left, `<dl>` right

`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`. Left `figure` (**`order-last lg:order-first`**, so on
mobile the image lands *after* the copy): the Unsplash pipe-run photograph (`rounded-2xl`, 576 × 432) plus
a 14 px `#5f7e9f` `figcaption`: *"Replace with a photograph of your own van and crew. It is the single
most useful image on the page."*

Right: eyebrow **"Why homeowners call us back"**, `h2` *"The boring things done properly"*, lede *"Nobody
enjoys hiring a plumber. We try to make it a decision you only have to make once."*, then a `<dl>` of four
terms, each with a **`border-l-2` `#1a8fd8` rule and `pl-5`**: *A price before the work, not after* · *The
same plumbers every time* · *We clean up* · *Warranty in writing* (definitions quoted in full in the
reference; keep the same four promises).

### 6 — `#process` (564 px, white) — numbered, with rules

Header: eyebrow **"What happens next"**, `h2` *"From your call to a working drain"*, lede *"Three steps,
and you know the price before the second one starts."*

`<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">`, each `li` opening with a flex row: the number as
**`text-sm font-bold tabular-nums text-primary-600`** (`01` / `02` / `03`) followed by a
**`span.h-px.flex-1.bg-ink-100`** rule — the page's cheapest and most recognisable divider. Then `h3`,
blurb, and a small `#1576b2` 600 note:

1. **You call or send the form** — *"A plumber picks up, not an answering service…"* — **Answered 24 hours**
2. **We quote on site** — *"…write a flat-rate price. You decide before any tool comes out."* — **Usually same day**
3. **We fix it and tidy up** — *"Most repairs are finished in the first visit…"* — **Most jobs, one visit**

### 7 — `#service-areas` (513 px, white) — towns as text (the local-SEO band)

`grid lg:grid-cols-12 gap-10 lg:gap-16` split **5 / 7**. Left (`col-span-5`): `h2` *"Towns we cover"* +
lede *"We work across the Portland metro and the towns listed here. If yours is not on the list, call
anyway — we travel further for larger jobs."* Right (`col-span-7`): `ul.grid.grid-cols-2.gap-x-6.
sm:grid-cols-3` with **15** `<li class="border-b py-2.5 text-ink-700">` rows (212 × 45 each): Portland,
Beaverton, Hillsboro, Gresham, Tigard, Lake Oswego, Milwaukie, Oregon City, West Linn, Tualatin, Sherwood,
Happy Valley, Clackamas, Wilsonville, Forest Grove. Footnote: *"Replace this list with your own towns.
Written as text like this, it is the cheapest local search signal a trade site has."*

### 8 — `#financing` (278 px, white with a tinted panel)

`py-12`; inside, **one bordered panel** (not a full-bleed band):
`rounded-2xl border border-primary-200 bg-primary-50 p-6`, flex column → row at `lg`. Left: `h2`
*"Repairs over $500 can be spread over 12 months"* (24 px), *"Interest free for 12 months on approved
credit, applied for in about five minutes while we are on site."*, and a 14 px caveat *"Sample offer for
demonstration. Replace with your own finance provider's terms."* Right: **"See financing options"**
(`#1a8fd8`, radius 8, `px-6 py-3`, 14 px/700).

### 9 — `#testimonials` (768 px, `#f9fafb`)

Centred header (`max-w-3xl`): a **pill badge** `bg-primary-100 text-primary-700` reading *"Reviews"*, `h2`
*"What people say afterwards"* (`#111827`), lede *"Sample reviews for demonstration. Replace with your
own, ideally pulled from Google."*

Carousel: `overflow-hidden` → `track.flex.transition-transform.duration-500.ease-out` → **3** slides
(`flex-shrink-0 px-3`, 405 px each at 1440), each a white `rounded-2xl p-8 shadow-soft` card holding:
**five `primary-400` stars** (blue, 20 px), a 18/28/500 `blockquote`, a 48 px avatar disc
(`bg-primary-100`, initial in `primary-600`), a 600 name and a 14 px city:
*Dana R. · Southeast Portland* (burst pipe at half past ten at night), *Marcus T. · Beaverton* (three
quotes, only one explained why the cheap option would not fit), *Priya N. · Lake Oswego* (whole-house
re-pipe in four days).

**Measured behaviour, and it matters:** at ≥1024 px three slides fill three slots, so the maximum index is
`3 − 3 = 0` — the source then sets `display: none` on both arrows and renders **zero dots**. The desktop
state is therefore a **static three-card row**, and the slider only comes alive at 1024 px and below
(3 per view ≥1024, 2 ≥640, 1 below; 5 s auto-advance, paused on hover, dots as 40 × 10 px pills).

### 10 — `#faq` (820 px, white)

Centred header with the pill *"Questions"*, `h2` *"Before you call"*, lede *"The five things people ask on
the phone before they book."* Then `mx-auto mt-16 max-w-3xl` → `divide-y divide-gray-200`, **five**
`py-6` rows: a full-width `<button>` (768 × 32) with an 18 px/600 question and a **32 px
`bg-gray-100` disc** holding a plus glyph that rotates 45° when open; the answer panel is
`overflow-hidden transition-all duration-300` and — **note this** — the collapsed state is authored in
the markup as `style="max-height: 0px; opacity: 0;"`, not by CSS and not by the JS. Questions:
*Do you charge to come out and quote?* · *How quickly can you get here?* · *Are you licensed and insured?*
· *Do you offer a warranty?* · *What payment do you take?* Answers are real trade answers (free quotes for
planned work, a stated emergency call-out fee, same-day/next-morning bookings, licence on every page,
2 years labour / 10 years re-pipe, card + transfer + cash + financing over $500).

The buttons carry **no `aria-expanded` and no `aria-controls`** in the reference (measured: attribute
`null`); the recreation must add both. There is no `<details>` element and no no-JS fallback.

### 11 — `#contact` (480 px, `#1576b2`)

Centred `max-w-3xl`: `h2` *"Got a leak, a blockage, or a water heater on its last legs?"* (white),
lede *"Tell us what is happening and we will tell you what it costs to put right."* (`primary-100`), then
two CTAs side by side at `sm`: **"Get a quote"** (white ground, `#1576b2` label) and
**"Call (555) 010-0100"** (2 px `white/40` outline). Both `w-full` below `sm`.

### 12 — Footer (543 px, `#111827`)

`grid gap-12 lg:grid-cols-12`: **brand (4)** — light logo, the one-line blurb *"Licensed plumbers in
Portland and 14 nearby towns. Repairs, drains, water heaters and a 24-hour emergency line."*, three social
squares (`bg-gray-800 p-2.5`, radius 8), and address / `tel:` / `mailto:` at 14 px; **link columns (5)** —
`grid sm:grid-cols-3` with **Services** (Emergency repairs, Drain clearing, Water heaters, Sewer lines),
**Company** (About, Service areas, Reviews, Blog) and **Support** (Contact, Financing, Privacy, Terms);
**newsletter (3)** — `Stay Updated`, *"Seasonal maintenance reminders and plain-English notes on what
actually needs doing before winter."*, an inline email field (46 px, `#1f2937`) + **Subscribe**
(`#1a8fd8`). Legal bar: `border-t border-gray-800 py-8`, *"© 2026 Mainline Plumbing. All rights
reserved."* left, *Privacy Policy* + *Terms of Service* right.

### 13 — Fixed chrome

* **`#preloader`** — white overlay, 40 px spinner (`border-4 border-gray-200 border-t-primary-600`),
  removed 300 ms after `window.load`.
* **Skip link** — `sr-only focus:not-sr-only`, top-left, jumps to `#main-content`.
* **`#scroll-progress`** — `h-0.5` `#1a8fd8` bar, `fixed top-0`, width = scroll %.
* **Mobile call bar** (`lg:hidden`, 73 px, `z-40`) — full-width `#1a8fd8` pill *"24-hour emergency line ·
  (555) 010-0100"*.
* **`#cookie-consent`** (`z-50`, `bg-white`, 14 px) — appears **1.5 s** after load unless
  `localStorage['cookie-consent']` exists; *"Decline"* writes `essential`, *"Accept All"* writes
  `accepted`, both slide the strip out and remove it. On a 390 px screen the strip (top 697) covers the
  mobile call bar (top 771) — reproduce that stacking, and keep both buttons reachable.
* **`#back-to-top`** — 48 px `#1a8fd8` disc, `fixed bottom-6 right-6`, `opacity 0` until `scrollY > 300`.

## Behaviour the recreation must reproduce

| # | behaviour | reference implementation | notes for React |
| - | --------- | ------------------------ | --------------- |
| 1 | Dark mode | inline pre-paint script: `localStorage.theme` → else `prefers-color-scheme`; toggle writes `localStorage.theme` and flips `.dark` on `<html>` | must not flash light; persist |
| 2 | Header elevation | `scrollY > 50` → add `shadow-lg`, else remove | `useEffect` on scroll, passive |
| 3 | Mobile disclosure | `[data-mobile-toggle]` toggles `aria-expanded`, `hidden` on `[data-mobile-menu]`, and swaps hamburger ↔ X path | state, not DOM surgery |
| 4 | Active nav label | `IntersectionObserver` over `[data-nav-link]` targets, `rootMargin: -20% 0px -70% 0px` → `.nav-active` | 7 labels |
| 5 | Reveal on scroll | 14 `[data-animate]` (with 12 `data-delay`) start at `opacity 0` / `translateY(20px)`, animate in at `threshold .1`, `rootMargin 0 0 -10%`, **skipped entirely under `prefers-reduced-motion: reduce`** | keep the reduced-motion bail-out; never leave anything at `opacity: 0` |
| 6 | Smooth in-page scroll | `a[href^="#"]:not([href="#"])` → scroll to `target − (header + 20)`, `history.pushState` | `#quote`, `#service-areas` only |
| 7 | FAQ accordion | single-open; sets `maxHeight = scrollHeight px`, `opacity 1`, icon `rotate(45deg)`; closes every other row; clicking the open row closes it | 5 rows; **add `aria-expanded`/`aria-controls`** (absent in the reference) |
| 8 | Review carousel | 3 / 2 / 1 per view at ≥1024 / ≥640 / below; 5 s auto-advance; pause on hover; arrows + dots only while `maxIndex > 0`; dots `w-8 bg-primary-600` active vs `w-2.5 bg-gray-300` | at ≥1024 render **no** arrows and **no** dots, exactly like the reference |
| 9 | Cookie strip | 1.5 s delay, `localStorage['cookie-consent']`, two buttons, slide-out + remove | |
| 10 | Back to top | `scrollY > 300` → visible, click scrolls smooth to 0 | |
| 11 | Scroll progress | width = `scrollY / (scrollHeight − innerHeight)` % | |
| 12 | Preloader | removed 300 ms after `load`, also on `astro:before-swap` | |
| 13 | Form validation | **the reference ships none** (`action="#" method="post"`, no `data-validate`, no `required`); the kit's `form[data-validate]` handler is not wired | the recreation **must** add client-side validation + inline errors + a success state, and never navigate |

## Data-attribute inventory (measured on the live page)

Present in the markup: `data-animate` ×14 · `data-delay` ×12 · `data-nav-link` ×7 · `data-phone` ×5 ·
`data-faq-toggle` ×5 · `data-faq-icon` ×5 · `data-carousel-slide` ×3 · `data-carousel-track` ×1 ·
`data-carousel-prev` ×1 · `data-carousel-next` ×1 · `data-carousel-dots` ×1 · `data-carousel` ×1 ·
`data-header` ×1 · `data-mobile-toggle` ×1 · `data-mobile-menu` ×1 · `data-dark-toggle` ×1 ·
`data-cookie-accept` ×1 · `data-cookie-decline` ×1 · `data-sticky-call` ×1 · `data-licence-bar` ×1 ·
`data-emergency` ×1 · `data-form` ×1 · `data-newsletter-form` ×1.

**Inert hooks (verified: zero occurrences in the 16,233 B kit):** `data-phone`, `data-sticky-call`,
`data-licence-bar`, `data-emergency`, `data-form`, `data-newsletter-form`. They look load-bearing and do
nothing — the sticky call bar is shown by `lg:hidden` alone, and the quote/newsletter forms have **no
handler at all**. Do not port the attributes; port the *intent* (a submission that validates and confirms
without leaving the page).

Also present: `aria-label` on the toggle / menu / carousel arrows / socials / cookie region / back-to-top,
`aria-expanded="false"` on the hamburger only, 17 `aria-hidden="true"` on decorative icons, one
`JSON-LD` block typed **`Plumber`** (name, description, telephone, `areaServed: Portland, Oregon`,
`priceRange: "$$"`) and a `<meta name="robots" content="noindex, nofollow">` that belongs to the preview
host, not the design.

## Link and destination census (measured 2026-10-25)

**47** anchors in the live DOM — the wordmark's own path plus **3** dead `href="#"` (footer Privacy,
footer Terms, and the mobile/desktop terms duplicates resolve through `/privacy` and `/terms`, leaving
three bare `#`):

| href | count | note |
| ---- | ----: | ---- |
| `/theme/mainline/services` | 6 | nav, mobile nav, footer, services links |
| `tel:5550100100` | 5 | header pill, emergency pill, mobile bar, footer (×2) |
| `/theme/mainline/contact` | 4 | nav, mobile nav, footer, contact CTA |
| `/theme/mainline/service-areas` | 3 | nav, mobile nav, footer |
| `/theme/mainline/reviews` | 3 | nav, mobile nav, footer |
| `/theme/mainline/financing` | 3 | nav, mobile nav, footer |
| `/theme/mainline/about` | 3 | nav, mobile nav, footer |
| `/theme/mainline/blog` | 3 | nav, mobile nav, footer |
| `/theme/mainline/#quote` | 3 | nav CTA, mobile CTA, mobile-menu CTA |
| `#service-areas` | 2 | city pill (header + mobile menu) |
| `/theme/mainline/` | 2 | wordmark (header + footer) |
| `/theme/mainline/privacy` | 2 | footer column + legal bar |
| `/theme/mainline/terms` | 2 | footer column + legal bar |
| `#` | **3** | dead: footer Privacy column link, footer Terms column link, legal-bar Terms |
| `#main-content` | 1 | skip link |
| `tel:(555) 010-0100` | **1** | **malformed** — a `tel:` href containing spaces and parentheses (the contact band's "Call (555) 010-0100") |
| `mailto:office@mainlineplumbing.example` | 1 | footer |

Recreation rule: **no bare `#`**, every `tel:` written as `tel:+15550100100`, in-page targets limited to
`#quote` and `#service-areas`, and the nine inner routes replaced by in-page anchors or omitted (see §Deltas).

## Inner-page inventory (all live, `curl -4`, 2026-10-25)

| route | size | `<title>` | `<h1>` | band heads |
| ----- | ---: | --------- | ------ | ---------- |
| `/about` | 38,844 | About Mainline Plumbing | About Mainline Plumbing | The quote is the promise · Three commitments · The plumbers · Need a plumber this week? |
| `/services` | 44,391 | Plumbing services | Every job a house throws at you | the same six services as `#services`, each with its own section, + "Not sure which of those you need?" |
| `/service-areas` | 36,753 | Service areas | **Fifteen towns, one crew** | Towns we cover · What coverage actually means · Not sure if you are in the area? |
| `/reviews` | 44,394 | Reviews | What people say afterwards | Want to be the next one? |
| `/financing` | 44,184 | Financing | **Nobody budgets for a water heater** | Two ways to spread it · What people ask about finance · Want to know what the monthly figure would be? |
| `/blog` | 39,343 | Blog | **Insights & Updates** | Stay in the Loop |
| `/contact` | 37,493 | Contact Mainline Plumbing | Contact Mainline Plumbing | Request a quote or a booking · Reach us |
| `/privacy` | 39,622 | — | — | legal prose |
| `/terms` | 38,411 | — | — | legal prose |

`index.html` on this theme **is** the page itself (`/theme/mainline/` and
`/theme/mainline/index.html` return the same document), so the wordmark's two links are no-ops, never
404s. The recreation is **one page**: use the inner pages only as content reference (the six service
descriptions, the "what coverage actually means" explainer, the finance questions) and say so in the PR.

## Class census

**325** unique classes in the live markup, 27 of them `dark:` variants. **All 325 have a matching rule**
in `Base.C952if9S.css` (0 phantom, 0 dead selectors) — a verification line worth keeping: *anything you
cannot map to those 325 is invented*. Two gotchas for anyone re-running the census: `2xl:block` compiles
to `.\32 xl\:block{display:block}` inside `@media (width>=96rem)` (a naive `.2xl\:block` grep reports a
false miss), and the six service cells carry **no** card class — they are plain `div.flex.flex-col.bg-white`
inside the hairline shell, so a `.card`-based census finds nothing.

## Screenshot analysis (`mainline-template.jpg`, 2400 × 1892 JPEG, 349,392 B)

The catalogue screenshot is **above-the-fold only** — a browser frame at desktop width showing: the dark
licence strip with *"Licence CCB #000000 · Bonded & insured"* left, *"Serving: Portland metro"* centre and
the amber stars + *"4.9 · 200+ reviews on Google (sample)"* right; the white/90 sticky header with the blue
pipe mark and the two-line `Mainline / PLUMBING` lockup, seven nav labels, then the location pill, phone
pill, a moon icon button and the blue **Get a quote** button; the `#f4f7fa` hero with the uppercase blue
eyebrow, a three-line `h1` whose last line *"and everywhere between."* is blue, the two-line lede, the
amber star row, the 2 × 2 check list, and the white quote card floating right with three labelled fields,
a select and the full-width blue submit; the saturated `#1a8fd8` emergency band with its uppercase
eyebrow and a white pill on the right; and the first rows of the services section — eyebrow, 36 px
heading, lede, and a **three-column card run whose dividers read as hairlines** (exactly the `gap-px`
trick), each cell showing title, blurb and the blue *"From $149 call-out"* line.

Three things the screenshot gets wrong or cannot show, which the live DOM overrides: (a) it is a
composition at ~1200 px, so the header's **city pill is visible even though the markup hides it below
1536 px**; (b) it stops above the fold, so the hairline grid, the numbered process, the town list, the
financing panel, the carousel, the FAQ and the contact band have **no screenshot reference at all** — the
DOM and this spec are the reference for those; (c) it shows no dark mode. It also frames the page inside a
macOS window chrome with a drop shadow — **do not** reproduce the frame, the traffic-light dots or the
grey backdrop.

## Requirements

### Requirement 1: Page chrome (licence bar, skip link, preloader, progress, cookie strip, back-to-top, mobile bar)

The app SHALL render a licence bar above the header, a skip link as the first focusable element, a 2 px
scroll-progress bar fixed to the top, a preloader removed within 300 ms of load, a cookie strip that
appears 1.5 s after load and persists its choice, a 48 px back-to-top disc past 300 px of scroll, and —
below 1024 px — a full-width sticky call bar.

#### Scenario: Licence bar above the header

- **GIVEN** the page has loaded at 1440 px
- **WHEN** the visitor reads the top of the document
- **THEN** a **37 px** strip on `#0f2237` (`ink-800`) sits above `<header>`
- **AND** it shows three items — a licence label + number, *"Bonded & insured"*, *"Serving"* + a metro name
- **AND** the right side shows five amber stars, a rating figure and a sample-data review count
- **AND** at 390 px the *"Bonded & insured"* and *"Serving"* items are hidden (`hidden sm:flex`) while the
  licence number stays visible

#### Scenario: Skip link and landmarks

- **GIVEN** the page has loaded
- **WHEN** the visitor presses Tab once
- **THEN** focus lands on a "Skip to content" control that is hidden until focused
- **AND** activating it moves focus to `<main id="main-content">`
- **AND** the document has exactly one `<header>`, one `<main>` and one `<footer>`

#### Scenario: Preloader is not a blocker

- **GIVEN** the document is loading
- **WHEN** `window.load` fires
- **THEN** the white overlay with the `#1a8fd8`-topped spinner fades over 300 ms and leaves the DOM
- **AND** no interactive element is unreachable while it is present
- **AND** under `prefers-reduced-motion: reduce` the overlay is removed without the fade

#### Scenario: Scroll progress and back to top

- **GIVEN** a document 6,525 px tall at a 900 px viewport
- **WHEN** the visitor scrolls to 1,200 px
- **THEN** the 2 px `#1a8fd8` bar is `1200 / (6525 − 900) = 21.3 %` of the viewport width, within 1 %
- **AND** at scroll 0 the bar has zero width
- **AND** the back-to-top disc is invisible until `scrollY > 300`, then fades in at `bottom-6 right-6`

#### Scenario: Cookie strip lifecycle

- **GIVEN** `localStorage` has no `cookie-consent` key
- **WHEN** the page has been open for 1.5 s
- **THEN** a white strip slides up from the bottom with exactly two buttons, "Decline" and "Accept All"
- **AND** "Accept All" writes `localStorage['cookie-consent'] = 'accepted'` and "Decline" writes `'essential'`
- **AND** either choice slides the strip out and removes it, and a reload with the key set never shows it
- **AND** at 390 px both buttons remain visible above the mobile call bar and the back-to-top disc

#### Scenario: Mobile call bar

- **GIVEN** a 390 px viewport
- **WHEN** the page has loaded
- **THEN** a 73 px bar pinned to the bottom shows one full-width `#1a8fd8` pill reading
  "24-hour emergency line · (555) 010-0100"
- **AND** its `tel:` link dials digits only (no spaces, no parentheses)
- **AND** at 1024 px and above the bar is not rendered

### Requirement 2: Sticky header, seven-label nav and the 1280 px breakpoint

The app SHALL render a sticky, translucent header with the wordmark, seven desktop nav labels, a phone
pill, a dark-mode toggle and a solid CTA, collapsing to a hamburger below **1280 px** — not below 1024 px.

#### Scenario: Desktop header at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the page has loaded
- **THEN** the header is 81 px tall, `position: sticky`, `top: 0`, background `rgb(255 255 255 / .9)`
  with `backdrop-filter: blur(16px)` and a 1 px `#e6edf4` bottom border
- **AND** the wordmark image renders 171 × 36 with `alt="<brand> Plumbing"`-shaped text
- **AND** seven labels render at 14 px/600 in `#22405f`, `gap: 28px`, hovering to `#1576b2`
- **AND** the CTA is 119 × 40, radius 8, `#1a8fd8`, white 14 px/700
- **AND** the phone pill shows at ≥768 px and the location pill **only at ≥1536 px**

#### Scenario: The nav collapses at 1279 px

- **GIVEN** a viewport 1279 px wide
- **WHEN** the header renders
- **THEN** the desktop nav is not displayed and a 40 × 40 hamburger with `aria-expanded="false"` is
- **AND** at 1280 px the nav is displayed and the hamburger is gone

#### Scenario: Mobile disclosure

- **GIVEN** a 390 px viewport
- **WHEN** the visitor activates the hamburger
- **THEN** `aria-expanded` becomes `"true"`, the panel unhides and the icon becomes a close glyph
- **AND** the panel lists the same seven destinations as `block py-3` rows plus a rule, a phone pill, a
  location pill and a full-width CTA
- **AND** activating it again restores the closed state

#### Scenario: Header elevation and active label

- **GIVEN** the page is at scroll 0 with no shadow
- **WHEN** the visitor scrolls past 50 px
- **THEN** `shadow-lg` is applied and removed again below 50 px
- **AND** as each of the seven `id` targets crosses the `−20 % … −70 %` band its nav label gains the
  active style

### Requirement 3: The hero — a 7/5 split with the quote card above the fold

The app SHALL render the hero on `#f4f7fa` as a twelve-column grid with the copy in columns 1–7 and a
three-field quote card in columns 8–12, and the card SHALL be fully visible at 1440 × 900 without scrolling.

#### Scenario: Hero anatomy at 1440

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the hero renders
- **THEN** the band is 670 px tall on `#f4f7fa` with `padding-block` 80 px
- **AND** the `h1` is **60 px / 66 px / −1.5 px / 700** in `#0f2237`, wrapping to three lines, with the
  final clause in `#1a8fd8`
- **AND** the eyebrow above it is 14 px/700 uppercase at `+0.35 px` in `#1576b2`
- **AND** the lede is 18/28 in `#3a5b7f`, capped at `max-w-xl`
- **AND** five 16 px `#fbbf24` stars sit beside a bold rating figure and a dimmed sample-data note
- **AND** the check list holds exactly four items in two columns from 640 px up, each with a `#1a8fd8`
  check glyph

#### Scenario: The quote card

- **GIVEN** the hero at 1440 px
- **WHEN** the card renders
- **THEN** it is 469 px wide, white, radius 16, 1 px `#e6edf4` border, 32 px padding, `shadow-md`
- **AND** its heading is "Get a quote" at 24 px/700 with a 14 px sub-line about the three fields
- **AND** it holds exactly three controls — a text input, a `tel` input and a select with eight job types
  plus a "Choose the closest match" placeholder option
- **AND** controls are 50 px tall, radius 8, 1 px `#c6d6e5`, 16 px text, and the submit is full width
- **AND** a 12 px `#5f7e9f` line reads like "No obligation. We never sell your details."

#### Scenario: Mobile hero

- **GIVEN** a 390 px viewport
- **WHEN** the hero renders
- **THEN** the `h1` is 36 px and the grid is a single column with the card **below** the copy
- **AND** the hero grid is ~1,128 px tall and `scrollWidth === clientWidth` (no horizontal overflow)

#### Scenario: Quote submission never navigates

- **GIVEN** the visitor filled the three controls
- **WHEN** they submit
- **THEN** the page does not navigate or reload
- **AND** an empty or malformed field shows an inline error next to that field and blocks submission
- **AND** a valid submission clears the form and shows a confirmation message in the live region

### Requirement 4: The emergency band

The app SHALL render a full-bleed, saturated band between the hero and the services section carrying a
pulsing "24-hour emergency line" label, a bold promise, a qualifier, and a white phone pill.

#### Scenario: Emergency band anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** it is 164 px tall on `#1a8fd8` with `padding-block` 32 px and white text
- **AND** the eyebrow is uppercase and preceded by a 8 × 8 px disc whose outer ring animates (`ping`)
- **AND** the bold line is 20 px at `lg` and the qualifier is 14 px at 90 % opacity, capped at `max-w-2xl`
- **AND** the phone pill is white with `#1576b2` 18 px/700 text, `rounded-full`, `px-6 py-3`
- **AND** at 1024 px and above the pill sits on the same row, right-aligned; below that it wraps under

#### Scenario: Reduced motion stops the pulse

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the band renders
- **THEN** the disc is a static dot with no animation running

### Requirement 5: `#services` — a six-cell hairline grid

The app SHALL render six services inside ONE rounded shell whose 1 px gaps act as the dividers, each cell
carrying a title, a blurb and a price line, and SHALL NOT render six separately bordered cards.

#### Scenario: Grid and cell anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the section renders
- **THEN** the header block is capped at `max-w-2xl` with eyebrow "What we do", a 36 px `h2` and an 18 px lede
- **AND** the grid is 1,216 px wide, 371 px tall, `gap: 1px`, radius 16, 1 px `#e6edf4` border, ground `#e6edf4`
- **AND** each of the six cells has a white ground, 32 px padding, an 18 px/700 title, a body that grows
  (`flex-1`) and a 14 px/700 `#1576b2` price line pushed to the bottom
- **AND** no cell has its own border, radius or shadow

#### Scenario: Responsive columns

- **GIVEN** viewports of 1440, 768 and 390 px
- **WHEN** the grid renders
- **THEN** it shows 3, 2 and 1 columns respectively, with the hairlines still exactly 1 px

#### Scenario: Six services and their prices

- **GIVEN** the section has rendered
- **WHEN** the cells are read in order
- **THEN** they are: Emergency repairs (From $149 call-out), Drain clearing (From $189), Water heaters
  (From $1,200 installed), Toilets and faucets (From $129), Sewer lines (Quoted after inspection),
  Re-pipes and remodels (Quoted on site)
- **AND** a 14 px footnote below the grid marks the prices as sample data

### Requirement 6: `#why-us` — image plus four promises

The app SHALL render a two-column band on the tinted ground with a photograph and a caption on one side
and an eyebrow, heading, lede and a four-term definition list on the other, with the image after the copy
on mobile.

#### Scenario: Split and list anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** it is 776 px tall on `#f4f7fa` with a 2-column, `64 px`-gapped grid
- **AND** the photograph is 576 × 432, radius 16, with a 14 px `#5f7e9f` caption beneath it
- **AND** the definition list has exactly four terms, each with a **2 px `#1a8fd8` left border and 20 px
  left padding**, a 16 px/700 term and a `#3a5b7f` definition

#### Scenario: Image order on mobile

- **GIVEN** a 390 px viewport
- **WHEN** the band renders
- **THEN** the copy block renders **before** the figure
- **AND** at 1024 px the figure is on the left

### Requirement 7: `#process` — three numbered steps with rules

The app SHALL render the process as an ordered list of exactly three steps, each headed by a two-digit
number in `tabular-nums` followed by a 1 px rule that fills the remaining width.

#### Scenario: Step anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the section renders
- **THEN** the list is a 3-column grid with `gap: 24px` from 640 px up, single column below
- **AND** each step's header row is `display: flex` with `align-items: baseline` and `gap: 12px`
- **AND** the number is 14 px/700 in `#1a8fd8` and the rule is `height: 1px`, `flex: 1`, `#e6edf4`
- **AND** each step closes with a 14 px/600 `#1576b2` note ("Answered 24 hours", "Usually same day",
  "Most jobs, one visit")
- **AND** the list element is an `<ol>` so the sequence survives without CSS

### Requirement 8: `#service-areas` — fifteen towns as text

The app SHALL render the coverage area as a real list of town names in a five/seven split, two columns on
mobile and three from 640 px up, each row separated by a 1 px bottom border.

#### Scenario: Town list anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the section renders
- **THEN** the left column holds a 36 px `h2` ("Towns we cover") and an 18 px lede
- **AND** the right column holds **15** list rows, each 45 px tall with 10 px vertical padding and a
  1 px `#e6edf4` bottom border, text 16 px in `#16304a`
- **AND** the rows are `Portland, Beaverton, Hillsboro, Gresham, Tigard, Lake Oswego, Milwaukie, Oregon
  City, West Linn, Tualatin, Sherwood, Happy Valley, Clackamas, Wilsonville, Forest Grove`
- **AND** at 390 px the list keeps two columns and each cell is ~167 px wide
- **AND** a 14 px footnote marks the list as replaceable sample content

### Requirement 9: `#financing` — a tinted inset panel

The app SHALL render the financing offer inside a bordered `primary-50` panel with 48 px of section
padding, not as a full-bleed band.

#### Scenario: Panel anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the section renders
- **THEN** the section is 278 px tall with `padding-block: 48px` on white
- **AND** the panel has radius 16, a 1 px `#b6e1f8` border and a `#f0f9fe` ground with 24 px padding
- **AND** the left side holds a 24 px `h2`, a 16 px body line in `#22405f` and a 14 px sample-data caveat
- **AND** the right side holds one `#1a8fd8` button ("See financing options"), 14 px/700, radius 8
- **AND** below 1024 px the panel stacks and the button follows the copy

### Requirement 10: `#testimonials` — three review cards, a slider only below 1024

The app SHALL render exactly three review cards on the grey band, each with five blue stars, a quote, an
avatar disc, a name and a city, and SHALL expose arrows and dots **only** when more slides exist than fit
in the current view.

#### Scenario: Static three-card row at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** three cards of 405 px each sit side by side, white, radius 16, 32 px padding, `shadow-soft`
- **AND** each card's five stars are `#49b3ec` (blue) at 20 px — **not** amber
- **AND** the quote is 18/28/500, the avatar disc is 48 px `#dcf0fc` with a `#1a8fd8` initial
- **AND** **no** arrow buttons are displayed and **zero** dot buttons are rendered

#### Scenario: Slider below 1024

- **GIVEN** a 390 px viewport
- **WHEN** the band renders
- **THEN** one card is visible per view and three dots are rendered
- **AND** the track advances every 5 s, pauses on pointer-enter, resumes on pointer-leave
- **AND** the arrows appear, the active dot is 32 × 10 px `#1a8fd8` and the others 10 px `#d1d5db`
- **AND** pressing "next" on the last index wraps to the first

#### Scenario: Header and sample-data honesty

- **GIVEN** the band has rendered
- **WHEN** the header is read
- **THEN** it carries a `#dcf0fc` pill labelled "Reviews", a 36 px `h2` in `#111827` and a lede that says
  the reviews are sample content

### Requirement 11: `#faq` — five rows, single-open

The app SHALL render five questions with `aria-expanded` and `aria-controls`, opening one at a time, with
the plus glyph rotating 45° while open and all rows collapsed on first paint.

#### Scenario: Collapsed first paint

- **GIVEN** the page has loaded
- **WHEN** the FAQ is inspected before any click
- **THEN** all five answer panels have zero height and `opacity: 0`
- **AND** each trigger exposes `aria-expanded="false"` and `aria-controls` pointing at its panel
- **AND** no answer text is reachable by keyboard while collapsed

#### Scenario: Single-open behaviour

- **GIVEN** all rows are collapsed
- **WHEN** the visitor activates row 3
- **THEN** row 3's panel expands to its content height with a 300 ms transition and its glyph shows
  `rotate(45deg)`
- **AND** every other row is collapsed and its glyph back at `0deg`
- **AND** activating row 3 again collapses it

#### Scenario: Row anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the list renders
- **THEN** it is capped at `max-w-3xl` (768 px) with `divide-y` 1 px `#e5e7eb` rules and 24 px row padding
- **AND** each trigger is a full-width button 32 px tall with an 18 px/600 question
- **AND** each trigger ends in a 32 px `#f3f4f6` disc with a `#4b5563` plus glyph

### Requirement 12: `#contact` — the closing band

The app SHALL render the closing band on `primary-700` with a white heading, a `primary-100` lede and two
adjacent CTAs — a solid white button and a 2 px semi-transparent outline button.

#### Scenario: Band anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** it is 480 px tall on `#1576b2` with `padding-block: 112px`, centred, `max-w-3xl`
- **AND** the `h2` is 36 px white and the lede 18 px in `#dcf0fc`
- **AND** the solid CTA is 155 × 56, white ground, `#1576b2` 16 px/700, radius 8
- **AND** the outline CTA is 248 × 60 with a **2 px `white/40`** border and white text
- **AND** below 640 px both buttons are full width and stacked

### Requirement 13: Footer with newsletter and legal bar

The app SHALL render a four-column-group footer on `#111827` — brand, three link columns, newsletter —
above a legal bar, and it SHALL link `https://www.componentdock.com/` as "Component Dock".

#### Scenario: Footer anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the footer renders
- **THEN** it is 543 px tall with `padding-top: 96px` on `#111827`, body text `#d1d5db` at 16 px
- **AND** the twelve-column grid holds brand (4), link columns (5) and newsletter (3)
- **AND** the three link columns are headed Services / Company / Support at 14 px/600 uppercase `+0.7 px`
  in white, with 12 links in `#9ca3af` at 12 px vertical rhythm
- **AND** the newsletter column holds a heading, one 16 px line, a 46 px `#1f2937` email field with a
  `#374151` border and a `#1a8fd8` Subscribe button on the same row
- **AND** the legal bar above a `#1f2937` rule reads "© 2026 <brand>. All rights reserved." with two links
- **AND** the footer contains a "Component Dock" link to `https://www.componentdock.com/`

#### Scenario: Newsletter validation

- **GIVEN** the newsletter field is empty or holds an invalid address
- **WHEN** the visitor submits
- **THEN** an inline error is shown and no navigation occurs
- **AND** a valid address clears the field and shows a confirmation

### Requirement 14: Dark mode

The app SHALL support a persisted dark theme applied before first paint, with the measured dark palette and
a single toggle in the header.

#### Scenario: Theme resolves before paint

- **GIVEN** `localStorage.theme` is `'dark'` (or unset and the OS prefers dark)
- **WHEN** the document first renders
- **THEN** `<html>` carries `dark` before any content is painted — no flash of the light theme
- **AND** `body` is `#030712` with `#f3f4f6` text, the hero and why-us bands are `#111827`, cards are
  `#111827` with `#1f2937` borders, and inputs are `#1f2937` with `#374151` borders

#### Scenario: Toggle persists

- **GIVEN** the light theme is active
- **WHEN** the visitor activates the moon button
- **THEN** `dark` is added to `<html>`, `localStorage.theme` becomes `'dark'`, and a reload keeps dark
- **AND** activating it again returns to light and stores `'light'`

### Requirement 15: Motion, anchors and fidelity guards

The app SHALL respect `prefers-reduced-motion`, SHALL expose no dead anchors or malformed `tel:` targets,
and SHALL contain no ColorLib string in any app file.

#### Scenario: Reduced motion leaves nothing hidden

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads and is scrolled end to end
- **THEN** no `[data-animate]` element is left at `opacity: 0`, and all 14 reveal targets are fully visible
- **AND** the carousel does not auto-advance and the pulse dot does not animate

#### Scenario: Anchor and phone hygiene

- **GIVEN** the rendered page
- **WHEN** every anchor is resolved
- **THEN** there is no `href="#"`, every in-page target (`#quote`, `#service-areas`, `#main-content`)
  exists, and every `tel:` link matches `/^tel:\+?\d+$/`

#### Scenario: Provenance is not in the app

- **GIVEN** the shipped app files
- **WHEN** they are searched for "colorlib" (case-insensitive, comments included)
- **THEN** there are zero matches
- **AND** `apps/standpipe/package.json` names `@free-react-templates/standpipe`, `public/CNAME` holds
  `standpipe.free.componentdock.com`, and `homepage` is `https://standpipe.free.componentdock.com`

## Deltas from the reference (what the recreation must change)

1. **Name and provenance.** `Mainline Plumbing` → **Standpipe** everywhere (wordmark, `<title>`, footer,
   JSON-LD). No ColorLib reference in app files; the spec, the `TEMPLATES.md` row and the PR carry it.
2. **Images.** The single Unsplash photograph becomes deterministic placeholders
   (`https://picsum.photos/seed/standpipe-1/1152/864`) — never hotlink the reference asset. The wordmark
   becomes an authored SVG/text lockup (a pipe-shaped mark plus a two-line name), not a copy of
   `logo.svg`.
3. **Nine inner routes become anchors or are dropped.** `Services` → `#services`, `Service areas` →
   `#service-areas`, `Reviews` → `#testimonials`, `Financing` → `#financing`, `About` → `#why-us`,
   `Blog` → omitted or a disabled label, `Contact` → `#contact`, `Privacy`/`Terms` → links to
   `https://www.componentdock.com/` policy pages or omitted. **No 404 routes.**
4. **Forms actually work client-side.** The reference's quote form posts to `#` with no handler and the
   newsletter form has neither action nor handler. Ship validation (`required`, email pattern, inline
   errors, `aria-describedby`, `aria-live` confirmation) and never navigate.
5. **FAQ accessibility.** Add `aria-expanded`, `aria-controls` and `role="region"`/`aria-labelledby` on
   the panels — absent in the reference (measured `null`) — and keep the single-open behaviour and the
   45° glyph. Do not replace it with `<details>`; the transition is part of the design.
6. **`tel:` normalisation.** The contact band's `tel:(555) 010-0100` is malformed; use one canonical
   `tel:+15550100100` everywhere.
7. **Dead anchors removed.** The three bare `#` links (footer Privacy, footer Terms, legal-bar Terms)
   must resolve or disappear.
8. **Inert hooks not ported.** `data-phone`, `data-sticky-call`, `data-licence-bar`, `data-emergency`,
   `data-form`, `data-newsletter-form` have no handler in the shipped kit — implement the behaviour in
   React state, not by copying attributes.
9. **Licence number and reviews are sample data.** Keep the *shape* (a licence label and a number above
   the nav, a rating with a sample-data caveat) but do not print a real-looking credential; keep every
   "sample data" disclaimer the reference itself prints.
10. **Dark mode.** The reference toggles to a full dark theme; keep it (it is wired: `data-dark-toggle`),
    including the pre-paint resolution.
11. **The city pill's 1536 px gate.** It is real (`hidden 2xl:block`) and looks like a bug at 1440. Keep
    the gate — or, if the implementer prefers, show it from 1280 px and record that as a delta. Do not
    silently show it at every width.
12. **Footer "Blog"/"Terms" columns.** The reference's Support column mixes in Privacy and Terms; the
    recreation keeps three columns of four links and must not invent a fourth column.

## Verification checklist

- [ ] `apps/standpipe` exists, `@free-react-templates/standpipe` in `package.json`, `public/CNAME` =
      `standpipe.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included)
- [ ] bands in this order: hero → `#emergency` → `#services` → `#why-us` → `#process` → `#service-areas`
      → `#financing` → `#testimonials` → `#faq` → `#contact` → footer
- [ ] licence bar (`#0f2237`, 37 px) above a sticky 81 px translucent header
- [ ] hero `#f4f7fa`, 7/5 split, `h1` 60/66/−1.5/700 with a `#1a8fd8` clause, four amber 16 px stars,
      four checks, and the quote card (469 wide, radius 16, `shadow-md`) fully visible at 1440 × 900
- [ ] quote form has exactly three controls (name, `tel`, select with 8 job types) and never navigates
- [ ] `#emergency` 164 px on `#1a8fd8` with a pulsing dot and a white `rounded-full` phone pill
- [ ] `#services` is ONE rounded shell with 1 px `#e6edf4` gaps and six white cells — no per-card borders
- [ ] the six price lines read From $149 / From $189 / From $1,200 installed / From $129 / Quoted after
      inspection / Quoted on site, with the sample-data footnote
- [ ] `#why-us` has the image 576 × 432 (right-side figure after copy on mobile) and four `<dl>` terms
      with 2 px `#1a8fd8` left rules
- [ ] `#process` is an `<ol>` of three steps with `tabular-nums` numbers 01/02/03 and 1 px fill rules
- [ ] `#service-areas` lists exactly 15 towns in 2 columns (mobile) / 3 (≥640), rows 45 px with 1 px
      `#e6edf4` borders
- [ ] `#financing` is an inset `#f0f9fe` panel with a `#b6e1f8` border, `py-12`, not a full-bleed band
- [ ] `#testimonials` shows three white cards with radius 16 and `shadow-soft`; stars are `#49b3ec`, and
      **no arrows or dots render at ≥1024 px**
- [ ] one card per view with three dots and 5 s auto-advance at 390 px, wrapping at the end
- [ ] `#faq` five rows, all collapsed on first paint, single-open, 45° glyph, `aria-expanded` +
      `aria-controls` present
- [ ] `#contact` on `#1576b2` with a white 155 × 56 CTA and a 2 px `white/40` outline CTA
- [ ] footer `#111827`, brand + Services/Company/Support + newsletter (46 px `#1f2937` field, Subscribe),
      legal bar, Component Dock link
- [ ] dark mode: pre-paint resolution from `localStorage`/`prefers-color-scheme`, `body #030712`, bands
      `#111827`, cards `#111827`, `localStorage.theme` written by the toggle
- [ ] reduced motion: no `[data-animate]` element left at `opacity: 0`, no auto-advance, no pulse
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600
- [ ] no bare `#`, every `tel:` matches `/^tel:\+?\d+$/`, every in-page anchor resolves
- [ ] `npm run spec:validate` passes for `template-standpipe`
- [ ] `scripts/verify-app.sh standpipe` green (typecheck, lint, 100 % coverage, build)
- [ ] `TEMPLATES.md` row added under `## Business` between **Magnews2** and **Marco 2**, heading count
      re-counted (not copied)
