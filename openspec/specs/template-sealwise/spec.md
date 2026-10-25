# Template: Sealwise (Business — a licensed pest-control company whose whole argument is a published price)

## Purpose

A **Charlotte, NC structural pest-control company that quotes before it speaks to you**, and puts the promise
in the `h1` as a two-part sentence in two colours:

> "Tell us what you found. **We will tell you the price.**"

The page opens on a **9-tab pest finder** (`#identify`) that asks the visitor to pick the animal before the
site starts talking, and answers each pick with four numbers-worth of honesty: *Visits*, *One-off price* (the
only field rendered in `primary-300`), *We can be there*, and one paragraph saying whether the **quarterly plan
already covers it**. Five of the nine say **"On the plan."**; four say **"Not on the plan."** — a page that
admits what it does not sell is the design's voice, and a recreation that makes all nine covered has deleted
it.

Everything below the finder is the same argument repeated in a different shape:

- **`#emergency`** — a 164 px `primary-600` strip with a **pinging dot** and one `rounded-full` white phone
  pill: *"Wasps, rodents or bed bugs? Call today"* / *"Same-day visits for stinging insects and rodents inside
  the house."* / *"If a single treatment will fix it, we will say so rather than sell you a plan."*
- **`#plans`** — three tiers **with the monthly price printed** ($39 / $59 / $89), the middle one ringed in
  `primary-600` and badged **"Most chosen"**, and a footnote that is a commercial promise rather than fine
  print: *"Priced monthly, billed after each visit. Cancel with 30 days notice, no cancellation fee."*
- **`#why-us`** — a dark SVG diagram of a treated perimeter beside four `dt`/`dd` pairs, the first of which is
  *"We will tell you one visit is enough"*.
- **`#process`** — three steps `01 / 02 / 03` with hairline rules and a duration under each (`Do it now`,
  `Same day`, `Usually 1 to 3 visits`).
- **`#areas`** — **fourteen towns in plain text** (`Charlotte … Gastonia`), with the radius stated honestly:
  *"Same-day work is limited to a 30-minute radius, which we would rather state than pretend otherwise."*
- **`#testimonials`** — three quotes that are all about *the price arriving first* and *not being sold a plan*,
  in the shared house carousel (a static three-up row at ≥1024).
- **`#faq`** — five answers, including the two the trade usually avoids: *"No. Every treatment on this site can
  be bought once."* and *"a plan sold to someone who did not need one cancels within three months."*
- **`#contact`** — a `primary-700` band, two buttons, the first pointing back up at `#identify`.

The register is **plain, numerate, first-person plural, and slightly combative about its own industry** — *"The
money in this trade is recurring, which gives every company a reason to put you on a plan whether or not you
need one. Four of the 35 sites we looked at publish a price for anything at all."* No exclamation marks, no
"Welcome", no stock photography of smiling technicians: the one image on the page is a **diagram**, and its own
`figcaption` says *"Replace with a photograph of your own technician and van before launch."*

Recreation name **Sealwise** — the trade term for what the page actually sells (exclusion and a sealed
perimeter), invented here because the ColorLib slug is the company's own name.

Recreation of the ColorLib "Perimeter" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `perimeter`
- **ColorLib page:** https://colorlib.com/wp/template/perimeter/ — **HTTP 200, 112,237 B**. Its listing
  screenshot is `perimeter-template.jpg` (**322,715 B**, a real baseline JPEG, **2400 × 1892** — see
  §Screenshot analysis).
- **Live preview:** https://preview.colorlib.com/theme/perimeter/ — **HTTP 200, 89,710 B**,
  `text/html; charset=utf-8`, `<title>` **"Pest control in Charlotte, priced before you call | Perimeter Pest
  Control"**, read 2026-10-25 with `curl -4`. A 2026 **Astro** build: one hashed stylesheet
  `_astro/Base.CUJDtBHH.css` (**61,296 B**, `/*! tailwindcss v4.3.3 */`, sha256 `1ae0dffb79be676b…`), one
  behaviour bundle `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256
  `e26cc055dec23e63…` — **byte-identical to the house kit in every other 2026 Astro prep**), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (**16,357 B**, sha256
  `69eb3ac5c16a8d9a…`).
- **Page-specific logic is one 469 B inline module** (the nine-pest finder) plus a 454 B `localStorage` theme
  initialiser and a 370 B preloader remover; everything else is the shared kit.

| item | value |
| --- | --- |
| ColorLib source | `perimeter` — <https://colorlib.com/wp/template/perimeter/> (HTTP 200) |
| live preview | <https://preview.colorlib.com/theme/perimeter/> (HTTP 200, **89,710 B**, read 2026-10-25 with `curl -4`) |
| screenshot | `perimeter-template.jpg` (2400 × 1892, 322,715 B, baseline JPEG — a **marketing composition**, see below) |
| new app | `apps/sealwise` · `@free-react-templates/sealwise` · `sealwise.free.componentdock.com` |
| stack | Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript strict · Vitest + Testing Library, 100 % coverage |

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is exhausted (every one of its 2,857 rows is `[x]`) but it never listed the whole catalogue: of
the 1,874 distinct `wp/template/<slug>/` links on colorlib.com's 40 listing pages, **256 are absent from the
checklist** — 42 standalone designs and 214 snippet variants. `perimeter` is one of the 42 standalone designs
and the next item in the queue recorded in `docs/catalog-coverage.md`; this spec's folder is the prep marker for
the *design*, not for a checklist row.

## Reference readings (2026-10-25, `curl -4`)

| resource | status | bytes |
| --- | --- | --- |
| `theme/perimeter/` | 200 | 89,710 |
| `theme/perimeter/index.html` | 200 | 89,710 (byte-identical to the directory URL) |
| `_astro/Base.CUJDtBHH.css` | 200 | 61,296 (`/*! tailwindcss v4.3.3 */`) |
| `_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` | 200 | 16,233 |
| `_astro/ClientRouter.astro_astro_type_script_index_0_lang.CYDbzu1r.js` | 200 | 16,357 |
| `favicon.svg` / `assets/img/logo.svg` / `logo-light.svg` / `why-panel.svg` | 200 | 318 / 723 / 723 / 1,201 |
| `og-image.jpg` · `sitemap.xml` · `downloads/free/perimeter.zip` | **404** | — |
| `theme/bootstrap/perimeter/`, `theme/bb/perimeter/` | **404** | — |
| `colorlib.com/etc/cs/perimeter/index.html` | **200 — but it is a soft 404** | 27,542, `<title>` **"Page Not Found - Colorlib"** (`grep -ci 'not found'` = 3); a status-only probe would call it live |

The design is **the same 2026 Astro + Tailwind 4 house build** as its siblings: one compiled sheet, one house
kit whose sha256 is **`e26cc055dec23e63`** (16,233 B — byte-identical to the kit in the other Astro preps, so
the behaviours are the shared ones and only the page-level inline module differs), plus the shared client
router (`69eb3ac5…`). **No archive**: `downloads/free/perimeter.zip` 404s, so the live preview is the only
reference and there is no "un-versioned twin" claim to make.

## Design tokens (from `Base.CUJDtBHH.css` + `getComputedStyle` at 1440 × 900)

Ten steps each, all emitted as **utility literals** — Tailwind 4 compiled the custom palette without emitting
`--color-primary-*` custom properties, so the hexes must be copied into `@theme` by hand (a class census of the
sheet is the only way to recover them).

### `ink` — a warm, green-cast neutral (every text colour, every ground, every rule)

| step | hex | role on the page |
| --- | --- | --- |
| 50 | `#f5f6f4` | hero ground, `#why-us` ground (the "paper" band) |
| 100 | `#e7eae5` | header border, card borders, `#process` hairlines, `#areas` row rules |
| 200 | `#ccd2c8` | input/select borders, the location + phone pills' borders |
| 300 | `#a4ae9f` | **input placeholders only** (`placeholder:text-ink-300`) |
| 400 | `#76826f` | micro-copy under the hero form (`text-ink-400`) |
| 500 | `#566151` | hero lead paragraph, plan blurbs, process/areas body copy |
| 600 | `#3d473a` | nav links, checklist items, plan features, footer-adjacent body |
| 700 | `#2b332a` | form labels, the outline plan CTA, `why-panel` interior |
| 800 | `#1a201a` | **`h1`**, all `h2`/`h3` on light grounds, the licence bar, the wordmark plate |
| 900 | `#0e120e` | **the `#identify` band** (full-bleed near-black), the diagram's ground |

### `primary` — one green, ten steps (the only hue in the design)

| step | hex | role on the page |
| --- | --- | --- |
| 50 | `#f2fbe9` | "Most chosen" badge ground, phone-pill hover |
| 100 | `#e1f6cc` | the Reviews / Questions pills, testimonial avatars |
| 200 | `#c4ec9c` | (declared, not used on this page) |
| 300 | `#a2de66` | **the finder's `One-off price` value**, dark-mode small text |
| 400 | `#84cc3c` | the "START HERE" kicker, selected tab border, plan-note borders, dark hover text |
| 500 | `#69b024` | focus rings, input focus border |
| 600 | `#528c1a` | **every primary fill**: header CTA, hero submit, scroll-progress, back-to-top, cookie Accept, newsletter Subscribe, the `#emergency` band, `h1`'s second sentence |
| 700 | `#426e18` | the kickers' text, all link hover, `#contact` band ground (the darker close) |
| 800 | `#375818` | dark-mode primary text |
| 900 | `#2e4917` | dark-mode tints only (`dark:bg-primary-900/40`, `dark:from-primary-900`) |

### Stock Tailwind greys — used **alongside** `ink`, and not interchangeable with it

`#testimonials` is `gray-50` `#f9fafb`, `#faq` is white, the footer is `gray-900` `#111827`, the FAQ icon discs
are `gray-100` `#f3f4f6`, the FAQ dividers `gray-200` `#e5e7eb`, the testimonial pill text `gray-600`
`#4b5563`. The body's own colour is **`gray-900` `#111827`**, not `ink-800` — the design mixes the two ramps
deliberately: **`ink` for structure, `gray` for the last three bands and the chrome**. Replacing `gray-50`
with `ink-50` turns a cool band warm by 6 units per channel and is visible at 1:1.

### Radii, shadows, spacing

| token | value | used by |
| --- | --- | --- |
| `rounded-lg` | **8 px** (`--radius-lg: .5rem`) | every button, input, select, the outline CTA, social squares' radius (10 px on the footer icons via `rounded-lg`) |
| `rounded-xl` | **12 px** (`--radius-xl: .75rem`) | the nine pest tabs |
| `rounded-2xl` | **16 px** (`--radius-2xl: 1rem`) | the hero quote card, the finder's detail panel, the plan cards, the testimonial cards, the `#why-us` figure |
| `rounded-full` | `9999px` | the three header pills, the `#emergency` phone button, the "On the plan." note? **no** — that is `rounded-lg`; the FAQ icon discs, the carousel arrows, avatars, the back-to-top disc, the pinging dot |
| `shadow-md` | `0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a` | the hero quote card and the highlighted plan card |
| `shadow-soft` | `0 4px 16px -4px var(--tw-shadow-color,#0000001a)` | the three testimonial cards only |
| `shadow-lg` | header stuck state, carousel arrows, back-to-top |
| container | `max-width: 1280px` **at ≥1280** (`.container` = `width:100%` + breakpoint max-widths), `px-4` → `lg:px-8`, so content is **1,216 px** at 1440 | all bands |
| section rhythm | `.section` = `py-20` → **`lg:py-28` (112 px)**; the hero uses `py-14` → `lg:py-20` (56 → 80); `#emergency` uses `py-6` → `lg:py-8` | see the band table |

### Typography — one family, five weights

**Outfit** for every glyph on the page (400/500/600/700/800 declared; **no italic, no serif, no mono**). It
arrives from Cloudflare's font service as **10 `@font-face` rules inside a single inline `<style>` block** —
`/cf-fonts/v/outfit/5.2.8/latin/wght/normal.woff2` + the `latin-ext` twin, `font-display: swap`, **no `<link>`
and no stylesheet rule** — with `font-family: Outfit, system-ui, sans-serif` on `body`. Ship it from Google
Fonts instead: `css2?family=Outfit:wght@400;500;600;700;800&display=swap` (all three URL forms verified
**HTTP 200** on 2026-10-25).

| role | size / line-height / weight | tracking | colour |
| --- | --- | --- | --- |
| `h1` | **36 → 48 (`sm`) → 60 px (`lg`)**, `leading-[1.1]` (measured 66 px at 60), **700** | `-1.5px` at 60 (`tracking-tight`) | `ink-800`, second sentence `primary-600` |
| `h2` (section) | **30 → 36 px (`sm:text-4xl`)**, 700 | `tracking-tight` | `ink-800` on light, white on `ink-900`, white at `#contact` |
| `h2` (`#testimonials`, `#faq`) | 30 → 36 px, 700 | `tracking-tight` | **`gray-900`** |
| `h3` (plan name, process step, finder panel) | 18 / 24 / **24 px** in the panel, 700 | — | `ink-800` / white |
| kicker / eyebrow | **14 px, 700, uppercase** | **`0.35px`** (`tracking-wide`) | `primary-700` on light, `primary-400` on `ink-900` |
| hero lead | 18 / 28 (`text-lg`), 400 | — | `ink-500` |
| section lead | 18 / 28, 400, `max-w-2xl` | — | `ink-500` / `gray-400` in the last bands |
| nav link | **14 px, 600** | — | `ink-600` → `primary-700` hover |
| body / list item | 16 / 24, 400–500 | — | `ink-600`/`ink-700` |
| price | **30 px, 700** (`text-3xl`) + 14 px `per month` in `ink-400` | — | `ink-800` |
| micro-copy | 12 px (`text-xs`) / 14 px (`text-sm`) | — | `ink-400`, `gray-500` |
| numerals `01–03` | 14 px, 700, **`tabular-nums`** | — | `primary-600` |
| licence bar | 12 px (`text-xs`) | — | `ink-100` on `ink-800` |

The **type-tracking pair** matters: every kicker is `uppercase` at `+0.35px`, the `h1`/`h2` are `-1.5px`/
`tracking-tight`; the footer column headings are `uppercase` at `tracking-wider` (`0.05em`). Losing the pair
makes a correct palette read as a different template.

## Reference document order (measured; `top` is the document offset at 1440 and at 390)

| # | band | id / hook | ground | top @1440 | height @1440 | height @390 |
| --- | --- | --- | --- | ---: | ---: | ---: |
| — | licence bar, 37 px, **not sticky** | `[data-licence-bar]` | `ink-800 #1a201a` | 0 | 37 | 37 |
| 0 | header, sticky, 90 % white + blur | `[data-header]` | `#fff/90` + `backdrop-blur-lg` | 37 | **81** (65 below `lg`) | 65 |
| 1 | hero — kicker, two-tone `h1`, lead, rating, 4-item checklist, quote card | *(1st `<section>`)* | `ink-50 #f5f6f4` | 118 | **668** | 1,275 |
| 2 | **the pest finder** — 9 tabs + detail panel | `#identify` | `ink-900 #0e120e` | 786 | **971** | 1,774 |
| 3 | emergency strip — pinging dot, phone pill | `#emergency` | `primary-600 #528c1a` | 1,757 | **164** | 264 |
| 4 | three plan tiers | `#plans` | white | 1,921 | **970** | 1,826 |
| 5 | the argument — diagram + four commitments | `#why-us` | `ink-50 #f5f6f4` | 2,891 | **868** | 1,341 |
| 6 | three steps, numbered | `#process` | white | 3,759 | **564** | 948 |
| 7 | fourteen towns | `#areas` | white | 4,323 | **513** | 743 |
| 8 | three quotes | `#testimonials` | `gray-50 #f9fafb` | 4,836 | **768** | 774 |
| 9 | five questions | `#faq` | white | 5,604 | **820** | 804 |
| 10 | closing band | `#contact` | `primary-700 #426e18` | 6,424 | **412** | 480 |
| 11 | footer, four zones + bottom bar | `<footer>` | `gray-900 #111827` | 6,836 | **543** | 1,357 |

**Document height: 7,379 px at 1440 *and* 1280 · 7,705 at 1024 · 9,578 at 768 · 9,762 at 640 · 11,687 at 390 ·
12,637 at 320.** The bands above sum to the document height to within 1 px rounding at every width. Chrome
outside the flow: `#preloader` (white/`gray-950` full-screen, removed 300 ms after `load`), `#scroll-progress`
(2 px `primary-600`), skip link → `#main-content`, `#cookie-consent` (87 px at 1440, **147 px at 390**),
`#back-to-top` (48 px), and `[data-sticky-call]` (97 px white bar at <1024, **73 px** at 640–768).

## Band-by-band content (the reference's real copy — reproduce the order, paraphrase lightly)

### Licence bar (`[data-licence-bar]`, 37 px, `ink-800`, `text-xs`, `ink-100`)

`h-9` (36 px) + 1 px transparent bottom border. Left, a single nowrap row of three pairs, the value in
`font-semibold` and the label at `opacity-70`:

1. **Licence** · `NC SPCA #0000-P`
2. **Pesticide applicators certified** *(hidden below `sm`)*
3. **Serving** · `Mecklenburg County` *(hidden below `sm`)*

Right, `font-medium`: five tiny `primary-300` stars + **`4.8`** + `520+ reviews on Google (sample)` at
`opacity-70`. The bar is a **compliance row**, not a marketing row — it is the first thing on the page and it
scrolls away (only the header is sticky).

### 0 — Header (81 px at ≥1024, 65 px below; `sticky top-0 z-50`)

`bg-white/90` + `backdrop-blur-lg` + 1 px `ink-100` bottom border; `h-16` → `lg:h-20`; `shadow-lg` is **added**
once `scrollY > 50`.

- **Wordmark** — `assets/img/logo.svg`, a **200 × 40** SVG rendered `h-8` (32 px) → `lg:h-9` (36 px): a
  26 × 26 `ink-800` plate (`rx 7`), a 14 × 14 inset square stroked `#84CC3C` **`stroke-dasharray="4 3"`** (a
  dashed perimeter), a 2.6 r `#84CC3C` dot, then live `<text>`: **"Perimeter"** 16 px/700 `ink-800` and
  **"PEST CONTROL"** 9 px/500 `#566151` at `letter-spacing 2.2`. `logo-light.svg` swaps the plate to
  `#84CC3C`, the strokes to `#0E120E`, the wordmark to white and the sub-line to `#A4AE9F`; the dark-mode
  `<img>` is a second element toggled with `hidden dark:block`.
- **Nav** — seven links, `Pests · Plans · Services · Service areas · About · Blog · Contact`, 14 px/600,
  `gap-7`, **only from `xl` (1280)** — this is the template's one unusual breakpoint: at 1024–1279 the desktop
  nav is *hidden* and the hamburger is shown.
- **Right cluster** — `Charlotte, NC` pill (`border-ink-200`, `rounded-full`, `px-3 py-1.5 text-sm`,
  `hidden 2xl:block`, href `#service-areas`), `(555) 040-0400` pill (`tel:5550400400`, `hidden md:block`),
  the **theme toggle** (icon-only button, `p-2`, `aria-label="Toggle dark mode"`), the **"Book a visit"** CTA
  (`bg-primary-600`, `rounded-lg`, `px-5 py-2.5`, `text-sm font-bold`, `hidden xl:inline-flex`), and the
  hamburger (`xl:hidden`, `aria-label="Open menu"`).
- **Mobile panel** — `[data-mobile-menu] hidden xl:hidden`, a `nav` with the same seven links at `text-base`
  `font-semibold` `py-3`, then a bordered row with the two pills and a full-width "Book a visit". Measured
  **492 px** tall at 390.

### 1 — Hero (668 px at 1440; 1,275 at 390)

`ink-50`, `py-14 lg:py-20`, `grid lg:grid-cols-12 lg:gap-16`, left `lg:col-span-7` (`lg:pt-6`), right
`lg:col-span-5`. At 1440 the left column is **683 px** and the card **469 × 508**.

- kicker **"Charlotte · Licensed structural pest control"** — `primary-700`, 14/700, uppercase, `+0.35px`
- `h1` **"Tell us what you found."** in `ink-800` + **"We will tell you the price."** in `primary-600`
  (60/66, −1.5 px, 683 × 132 at 1440; 36/39.6, −0.9 px, 358 × 119 at 390)
- lead, `mt-5 max-w-xl text-lg ink-500`: *"Pick the pest below and you get the treatment, the number of visits,
  the cost and whether the quarterly plan already covers it. Nothing to fill in, unless you would rather we
  called."*
- rating line `mt-6 text-sm ink-600`: 5 × 20 px stars, **4.8** in `font-bold`, `opacity-80`:
  **"520+ reviews on Google · sample data"**
- **four checklist items** in `mt-8 grid gap-3 sm:grid-cols-2` (2 × 2 at 1440, **335 px** cells, 48 px tall
  including the gap), each a check glyph + `text-base font-medium ink-700`:
  1. "A price before you speak to anyone"
  2. "Same-day visits for rodents and stinging insects"
  3. "We say when one treatment is enough"
  4. "Re-treat free if they come back inside the guarantee"
- **the quote card** `#quote` — `rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8`
  (**469 × 508**, radius 16, pad 32): `h2` "Prefer to just ask?" (20 → 24 px, 700), sub *"Three fields. We
  reply within the hour on weekdays."*, then a `space-y-4` form:
  - `Your name` → `input[type=text] #qf-name` placeholder "First and last name" — **403 × 50**, radius 8,
    `border-ink-200`, `px-4 py-3`, 16 px text
  - `Phone` → `input[type=tel] #qf-phone` placeholder "(555) 000-0000"
  - `What have you seen?` → `select #qf-problem` (48 px tall) with a placeholder option *"Choose the closest
    match"* and nine values: `Ants · Roaches · Mice or rats · Termites · Bed bugs · Wasps or hornets · Spiders ·
    Mosquitoes · Something else`
  - submit **"Get my price"** — `bg-primary-600`, `rounded-lg`, `px-6 py-3.5`, `text-base font-bold`,
    **403 × 52**
  - micro-copy `text-center text-xs ink-400`: *"No obligation. We never sell your details."*

### 2 — `#identify` — "What did you find?" (971 px, `ink-900`, white, `py-28`)

The page's centrepiece and the only dark full-bleed band. Header block `max-w-2xl`: kicker **"Start here"** in
`primary-400`; `h2` "What did you find?" (30 → 36 px, 700); lead `text-lg text-white/70` = *"The answer changes
completely depending on the pest, so the site should ask before it starts talking. The average site in this
category names twelve pests and gives you no way to pick one. Prices are illustrative starting points for a
typical single-family home."*

Then `mt-10 grid lg:grid-cols-12 lg:gap-10`: **tabs `lg:col-span-7`** (a `grid grid-cols-2 gap-3 sm:grid-cols-3`
of nine buttons) and **panel `lg:col-span-5`**.

Each tab is a `<button type="button" data-pest-tab="…">`, **223 × 95** at 1440 (173 × 95 at 390, 2-up
below `sm`), `rounded-xl` (12 px), `border border-white/15`, `p-4`, `text-left`, `hover:border-white/40`, and
`aria-expanded` drives the selected state (`aria-expanded:border-primary-400 aria-expanded:bg-primary-400/10`).
Inside: a `font-bold text-white/70` label (`group-aria-expanded:text-white`) and a 12 px `text-white/40` line:

| tab | label | sub-line |
| --- | --- | --- |
| `ants` | Ants | Trails along baseboards or counters |
| `roaches` | Roaches | Seen at night, or droppings in cupboards |
| `rodents` | Mice and rats | Droppings, gnawing, noise in the ceiling |
| `termites` | Termites | Mud tubes, blistered paint, discarded wings |
| `bedbugs` | Bed bugs | Bites in a line, dark spots on seams |
| `wasps` | Wasps and hornets | A nest under the eaves or in the ground |
| `spiders` | Spiders | Webs in corners, garages and crawl spaces |
| `mosquitoes` | Mosquitoes | Unusable yard from May onward |
| `fleas` | Fleas | Bites around the ankles, pets scratching |

Under the grid, `mt-6 text-sm text-white/40`: *"Sample pricing for demonstration. Replace with your own before
launch. Every price assumes a standard single-family property; larger or heavily infested properties are quoted
after an inspection."*

The **panel** (`[data-pest-panel]`, 483 × 507 at 1440, `rounded-2xl border border-white/10 bg-white/5 p-6
sm:p-8`; the other eight carry `hidden`) holds `h3` (24 px, 700), a `text-white/70` lead, a
`dl.space-y-4 border-t border-white/10 pt-6` of three `dt`/`dd` pairs (`dt` 14 px `white/50`, `dd`
`font-semibold` right-aligned; the **price is `primary-300`**), a `rounded-lg` note in
`border-primary-400/40 bg-primary-400/10 text-primary-100`, and two CTAs: `btn btn-primary` **"Book this
treatment"** → `/book?pest=<slug>` and an outline **"See the quarterly plan"** → `/plans`.

| panel | lead (verbatim gist) | Visits | One-off price | We can be there | plan note |
| --- | --- | --- | --- | --- | --- |
| Ants | non-repellent the colony carries back + perimeter barrier; killing the trail does nothing | One, with a follow-up at 14 days if needed | **From $145** | Usually within 2 days | **On the plan.** ants are why most people start it |
| Roaches | gel bait in harbourage points, not spray; growth regulator | Two to three, at 14-day intervals | **From $220** | Usually within 2 days | **On the plan.** German roaches covered after the clean-out |
| Mice and rats | find and seal entry points first, trap, follow up; bait outside only | Two to four over three weeks | **From $320** | Same day if they are inside | **On the plan.** exterior stations; interior exclusion quoted separately |
| Termites | full inspection, then liquid barrier or monitored baiting | Inspection, treatment, then annual renewal | **Quoted after inspection** | Inspection within 3 days | **Not on the plan.** |
| Bed bugs | heat treatment or staged chemical programme | One heat treatment, or three chemical visits | **From $950** | Inspection within 2 days | **Not on the plan.** |
| Wasps and hornets | nest treated and removed where reachable; no surcharge for height | One | **From $175** | Same day | **On the plan.** one nest a year included |
| Spiders | web removal + perimeter treatment; treat what they eat too | One | **From $145** | Usually within 2 days | **On the plan.** |
| Mosquitoes | barrier on foliage + larvicide in standing water | Monthly, April to October | **From $65 per visit** | Usually within 3 days | **Not on the plan.** |
| Fleas | interior treatment + growth regulator + yard treatment | Two, at 14 days | **From $240** | Usually within 2 days | **Not on the plan.** |

**Five "On the plan." / four "Not on the plan." is the design's honesty mechanism** — keep the split, and keep
the three refusal sentences identical in shape (*"This one is quoted and treated on its own, because it needs a
different product and a different follow-up."*).

> **Measured correction (implementer run, 2026-10-25):** the live index carries **five** `On the plan.`
> notes (ants, roaches, mice and rats, wasps, spiders) and **four** `Not on the plan.` notes (termites,
> bed bugs, mosquitoes, fleas), not the six/three this spec first recorded. The table above was always
> right; the prose was not. The recreation follows the live page and its own test asserts 5 / 4.

### 3 — `#emergency` (164 px, `primary-600`, `py-6 lg:py-8`)

A `lg:flex-row lg:justify-between` row: left a `text-sm font-semibold uppercase opacity-90` line that starts
with a **`relative flex h-2 w-2` pinging dot** (`animate-ping` + a solid core, `bg-current`), then
`text-lg lg:text-xl font-bold` "Same-day visits for stinging insects and rodents inside the house.", then
`max-w-2xl text-sm opacity-90` *"We tell you on the phone what the visit costs and what it covers. If a single
treatment will fix it, we will say so rather than sell you a plan."* Right, **shrink-0**: a `rounded-full
bg-white px-6 py-3 text-lg font-bold text-primary-700` phone link **211 × 52**.

### 4 — `#plans` — "Four visits a year, and anything between them is free" (970 px, white)

Kicker **"The quarterly plan"**; lead *"Most pests are a maintenance problem rather than an event. Of 35
companies we looked at, 21 sell a plan and 3 tell you what it costs. Sample pricing for demonstration."*
Then `grid gap-6 grid-cols-1 lg:grid-cols-3` → three cards **389 × 442**, `rounded-2xl border p-6`; the middle
one is `border-primary-600 shadow-md` and carries the `mb-3 inline-flex w-fit rounded-full bg-primary-50 px-3
py-1 text-xs font-bold uppercase` badge **"Most chosen"** (which is why it is 442 px tall against the others'
398 at 390).

| tier | price | blurb | features | CTA |
| --- | --- | --- | --- | --- |
| **Perimeter** | **$39** /per month | "The exterior barrier, kept current." | Four exterior treatments a year · Ants, spiders, roaches and silverfish covered · Free call-backs between visits · Wasp nest once a year included | outline "Choose Perimeter" |
| **Perimeter Plus** *(Most chosen)* | **$59** /per month | "Adds rodents and the inside of the house." | Everything in Perimeter · Interior treatment on request · Exterior rodent stations maintained · Annual termite inspection · Priority same-day booking | filled "Choose Perimeter Plus" |
| **Yard and Home** | **$89** /per month | "Adds the mosquito season." | Everything in Perimeter Plus · Monthly mosquito treatment, April to October · Flea yard treatment included · 20% off bed bug and termite work | outline "Choose Yard and Home" |

Footnote `mt-6 text-sm ink-400`: *"Priced monthly, billed after each visit. Cancel with 30 days notice, no
cancellation fee."* Note the **tier names are the brand's own** — one of them is the ColorLib design's company
name, so the recreation must rename the tiers (see deviations).

### 5 — `#why-us` (868 px, `ink-50`)

`grid items-center gap-12 lg:grid-cols-2 lg:gap-16`, figure **first** on `lg` (`order-last lg:order-first`):
`why-panel.svg`, **800 × 600**, `rounded-2xl object-cover` — a **dark diagram** (`#0E120E` ground, `#1A201A`
inset, a `stroke-dasharray="14 10"` `#84CC3C` perimeter rectangle, a house silhouette in `#2B332A`/`#3D473A`
with two sealed entry points and four lime markers) — captioned `text-sm ink-500`: *"Replace with a photograph
of your own technician and van before launch."*

Text side: kicker **"How we work"**; `h2` **"We would rather treat once than sell you four"**; lead *"The money
in this trade is recurring, which gives every company a reason to put you on a plan whether or not you need one.
Four of the 35 sites we looked at publish a price for anything at all."*; then `dl.space-y-6` with four
`dt` (`text-base font-bold ink-800`) / `dd` (`mt-1 ink-500`) pairs:

1. **"We will tell you one visit is enough"** — "A wasp nest is one visit. A single mouse is usually one visit
   and some steel wool. We say so, and we do not make the price conditional on signing up for anything."
2. **"The price before the technician arrives"** — "Every common treatment has a published starting price on
   this site. If your property changes it, we tell you on the phone, not on the doorstep."
3. **"Exclusion before poison"** — "With rodents we find and seal the entry first. Baiting without exclusion is
   a subscription to the same problem."
4. **"Re-treat free, in writing"** — "If a covered pest comes back between visits we return at no charge. That
   is the whole point of a plan, and it is the part most companies bury."

### 6 — `#process` — "From the pest to the price to the visit" (564 px, white)

Kicker **"What happens"**, sub *"Three steps, and the first one is on this page."*. `ol.mt-12 grid gap-8
sm:grid-cols-3 sm:gap-6` → three **389 × 176** items, each: a `flex items-baseline gap-3` row with the numeral
(`text-sm font-bold tabular-nums primary-600`) and a **`h-px flex-1 bg-ink-100` hairline**, then `h3` (18 px,
700) and body, then a `text-sm font-semibold primary-700` duration.

1. **01 · "Identify it"** — "Use the selector above, or send a photograph. Most identifications take us about
   ten seconds and save you an inspection fee." → **Do it now**
2. **02 · "We confirm the price"** — "The published price holds for a standard property. If yours is larger or
   the infestation is established we tell you before we book, not afterwards." → **Same day**
3. **03 · "We treat and follow up"** — "You get a written record of what was applied and where, which matters
   if you sell the house or if anyone in it is sensitive to a product." → **Usually 1 to 3 visits**

### 7 — `#areas` (513 px, white) — the split is **5 / 7**, text left

Left `lg:col-span-5`: `h2` **"Where we work"**, lead *"Mecklenburg County and the towns listed here. Same-day
work is limited to a 30-minute radius, which we would rather state than pretend otherwise."*
Right `lg:col-span-7`: `ul.grid grid-cols-2 gap-x-6 sm:grid-cols-3` → **three 212 px columns** at 1440,
fourteen items at `border-b py-2.5 border-ink-100 text-base ink-700`, then `mt-6 text-sm ink-500`
*"Replace this list with your own towns. Written as plain text it is the cheapest local search signal a trade
site has."*

Towns, in order: **Charlotte · Matthews · Mint Hill · Pineville · Huntersville · Cornelius · Davidson ·
Concord · Harrisburg · Indian Trail · Waxhaw · Fort Mill · Belmont · Gastonia** (14, so the 3-column grid ends
with two in the last row).

### 8 — `#testimonials` — "What people say afterwards" (768 px, `gray-50`)

Centred header `max-w-3xl`: pill **"Reviews"** (`bg-primary-100 text-primary-700 rounded-full px-3 py-1 text-sm
font-medium`), `h2` in `gray-900`, sub *"Sample reviews for demonstration. Replace with your own, ideally
pulled from Google."* Then `[data-carousel]` — `relative mt-16`, track `flex transition-transform duration-500`,
three slides `flex-shrink-0 px-3`, each a `rounded-2xl bg-white p-8 shadow-soft` card with five
`primary-400` stars, a `blockquote` at `text-lg font-medium`, and an avatar disc (`h-12 w-12 rounded-full
bg-primary-100 text-primary-600`) with the initial, the name and the neighbourhood:

1. **Erin M.** · Plaza Midwood — *"I clicked 'mice' on their site at eleven at night and had a price and a date
   before I went to bed. Every other company wanted a form and a call back."*
2. **Devon R.** · Matthews — *"They found where the mice were getting in and sealed it before putting a single
   trap down. The last company just kept refilling bait boxes for a year."*
3. **Carla P.** · Huntersville — *"Told me a single wasp nest treatment was all I needed and did not try to sell
   me a plan. I signed up for the plan in the spring anyway."*

**The carousel is a static row at ≥1024**: three slides × 405 px = the 1,216 px track, so the kit renders
**0 dots and hides both arrows** (`display:none`, transform stays `matrix(1,0,0,1,0,0)` after a click). At 768
it is 2-up (**2 dots**), at 390 1-up (**3 dots**, arrows `display:flex`, slides 358 px, `translateX(-358px)` per
step, 5 s auto-advance, dots 32 px active / 10 px idle). Reproduce both states; do not "fix" the desktop row.

### 9 — `#faq` — "Before you book" (820 px, white)

Centred header with pill **"Questions"**, `h2` in `gray-900`, sub *"The things people ask on the phone,
answered here so you do not have to call."*, then `mx-auto mt-16 max-w-3xl` → `divide-y divide-gray-200` with
**five `py-6` rows**. Each row: a `button[data-faq-toggle]` (full width, `items-center justify-between`) with an
18 px `font-semibold gray-900` question and a **32 px** `rounded-full bg-gray-100` disc holding a
`rotate`d chevron/plus (`transition-transform duration-200`), then a paragraph that the kit animates from
`max-height 0 / opacity 0` to `scrollHeight`/1 and rotates the disc **45°**. Single-open.

1. **"Is the treatment safe around children and pets?"** — "The products are applied to places children and pets
   do not reach, and everything we use is registered for residential use at the rate we apply it. We ask you to
   stay off treated surfaces until they are dry, usually two to four hours, and we tell you exactly what was
   applied and where."
2. **"Do I have to sign up for a plan?"** — "No. Every treatment on this site can be bought once. We will tell
   you when a single visit will do it, because a plan sold to someone who did not need one cancels within three
   months."
3. **"What does the guarantee cover?"** — "If a pest covered by your plan comes back between scheduled visits we
   return at no charge. On a one-off treatment the guarantee runs for 30 days for most pests and 90 days for
   roaches."
4. **"Do you need to get inside the house?"** — "For the quarterly exterior plan, no. Somebody needs to be home
   for interior work, roaches, bed bugs and rodent exclusion."
5. **"How quickly can you come?"** — "Same day for rodents inside the house and for stinging insects. Two to
   three days for most other work. In spring, when everything hatches at once, it can be longer and we will tell
   you honestly rather than book a date we cannot hold."

### 10 — `#contact` (412 px, `primary-700`) — the close

Centred: `h2` **"Found something you would rather not have?"** (30 → 36, 700, white), sub `text-lg
text-primary-100` *"Pick it from the list and you will have a price in about ten seconds."*, then two CTAs in
`mt-10 flex flex-col sm:flex-row`:

- **"Identify the pest"** → `#identify` — `bg-white text-primary-700 px-8 py-4 rounded-lg text-base font-bold`,
  **56 px** tall
- **"Call (555) 040-0400"** → `tel:` — `border-2 border-white/40 text-white px-8 py-4 rounded-lg`, same height

### 11 — Footer (543 px, `gray-900`, `pt-16 lg:pt-24`)

`grid gap-12 lg:grid-cols-12 lg:gap-8`:

- **`lg:col-span-4`** — `logo-light.svg` at `h-10` (40 px), the blurb *"Licensed pest control in Charlotte.
  Identify the pest, see the price, and choose between a one-off treatment and a quarterly plan."*
  (`max-w-xs text-gray-400`), three **`rounded-lg bg-gray-800 p-2.5`** social squares (`href="#"`,
  `aria-label=Twitter/Instagram/LinkedIn`), then `mt-6 space-y-2 text-sm text-gray-400`:
  `1815 Camden Road, Charlotte, NC 28203` · `tel:(555) 040-0400` · `mailto:office@perimeterpest.example`
- **`grid gap-8 sm:grid-cols-3 lg:col-span-5`** — three link columns, headings `text-sm font-semibold
  uppercase tracking-wider text-white`, links `text-gray-400 hover:text-white`:
  **Services** (Ants and roaches · Mice and rats · Termites · Bed bugs) · **Company** (About · Service areas ·
  Plans · Blog) · **Support** (Contact · Services · Privacy · Terms)
- **`lg:col-span-3`** — **"Stay Updated"**, *"Seasonal maintenance reminders and plain-English notes on what
  actually needs doing before winter."*, then a `flex gap-2` form: email input (`min-w-0 flex-1 rounded-lg
  border-gray-700 bg-gray-800 px-4 py-2.5`) + **Subscribe** (`bg-primary-600 px-4 py-2.5`)
- **bottom bar** — `mt-16 flex flex-col sm:flex-row border-t border-gray-800 py-8`: `© 2026 Perimeter Pest
  Control. All rights reserved.` at `text-sm gray-500`, and Privacy Policy / Terms of Service links

**The recreation replaces both the copyright line and the whole attribution zone with the Component Dock
link** (`https://www.componentdock.com/`, "Component Dock") and removes the company name from every string (see
deviations).

## Behaviour the recreation must reproduce

Everything below is measured on the live page (Playwright, 1440 × 900 and 390 × 844, 2026-10-25).

1. **Theme toggle** — `[data-dark-toggle]` toggles `dark` on `<html>` and stores `theme=dark|light` in
   `localStorage`; an inline head script applies `localStorage.theme === 'dark'`, else
   `prefers-color-scheme: dark`, before paint. Dark grounds: body `#030712` (`gray-950`), hero band →
   `gray-900 #111827`, testimonial band `gray-900`, `#identify` unchanged, header `gray-950/90`.
2. **Mobile menu** — toggles `hidden` on `[data-mobile-menu]`, flips `aria-expanded`, and **swaps the hamburger
   SVG path** for an X. 492 px tall open at 390. The panel also owns a second accordion handler
   (`[data-accordion-toggle]`) that this page does not use.
3. **Header shadow** — `scrollY > 50` adds `shadow-lg`, removed below.
4. **Scroll progress** — `#scroll-progress` width = `scrollY / (scrollHeight - innerHeight)`.
5. **Back to top** — past 300 px: `opacity 1`, `pointer-events auto`, `translateY(0)`; below: `0` / `none` /
   `translateY(16px)`; click scrolls smoothly to 0.
6. **Reveal on scroll** — 14 `[data-animate="fade-in-up"]` elements with `data-delay` `100/150/200/250/300`:
   `opacity 0` + `translateY(20px)` → visible over 600 ms, `IntersectionObserver` at `threshold .1`,
   `rootMargin 0 0 -10%`; **bails out entirely** under `prefers-reduced-motion: reduce`.
7. **The pest finder** — a **page-level 469 B inline module**, not the kit: on click it sets `aria-expanded` on
   all nine tabs (`true` for the match, `false` otherwise) and toggles `hidden` on all nine panels. Ants is
   open on load. Section height changes with the panel (971 → 951 at 1440 when switching to Roaches, whose
   panel is 20 px shorter).
8. **FAQ accordion** — single-open; opens by writing `max-height: <scrollHeight>px` and `opacity: 1`, closes the
   others to `0px`/`0`; the disc rotates **45°** while open. **`aria-expanded` is never set on the reference**
   (see defects) — set it, plus `aria-controls`.
9. **Carousel** — per-view 3 / 2 / 1 by `innerWidth ≥1024 / ≥640 / else`; slide width = parent/`perView`; next
   wraps to 0 at the last index; auto-advance **5 s**, paused on `mouseenter`; dots rebuilt as
   `maxIndex + 1` buttons; arrows hidden when `maxIndex === 0`.
10. **Cookie strip** — `#cookie-consent` slides up **1,500 ms** after load unless `localStorage
    ['cookie-consent']` exists; Accept stores `accepted`, Decline stores `essential`, both slide the strip out
    and remove it after 300 ms; `role="dialog"` + `aria-label="Cookie consent"`.
11. **Smooth anchor scrolling** — every `a[href^="#"]:not([href="#"])` intercepts the click, scrolls to
    `target.top - headerHeight - 20` and pushes the hash. On this page that is exactly **one** working anchor
    (`#identify`) plus `#main-content`; the two `#service-areas` links resolve to **nothing** (see defects).
12. **Forms** — the hero form and the newsletter form are **not bound** to any handler on the reference (the
    kit's `form[data-validate]` never matches `[data-form]`); the hero form is `action="#" method="post"` with
    three `required` fields, so submitting reloads the page. The recreation validates client-side (deviation
    D4).
13. **Lazy-image shimmer** — `img[loading=lazy]` gets `img-shimmer` until `load`.
14. **Preloader** — removed 300 ms after `load`; the reference also removes it on `astro:before-swap`.

**Kit behaviours present in the shared bundle but unused by this page** (do not ship dead code): typewriter,
counters, billing toggle, video modal, lightbox, blog filters/search, parallax, `[data-accordion-toggle]`,
`nav-active` scroll spy (the seven nav links carry `data-nav-link="/pests"` etc., so `getElementById` returns
null and the observer never binds — the nav never highlights).

## Data-attribute inventory (measured on the live index)

`data-animate` ×14 · `data-delay` ×12 · `data-nav-link` ×7 · `data-faq-toggle` / `data-faq-icon` ×5 each ·
`data-phone` ×5 · `data-carousel-slide` ×3 · `data-carousel`, `-track`, `-dots`, `-prev`, `-next` ×1 each ·
`data-pest-tab` ×9 · `data-pest-panel` ×9 · `data-pestfinder` ×1 (the `<section>`) · `data-dark-toggle`,
`data-mobile-toggle`, `data-mobile-menu`, `data-header`, `data-licence-bar`, `data-emergency`, `data-form`,
`data-newsletter-form`, `data-cookie-accept`, `data-cookie-decline`, `data-sticky-call` ×1 each.

## Anchor map (`67` anchors, `27` distinct values — `3` bare `#` plus `2` links to a dead id)

| count | href | note |
| ---: | --- | --- |
| 15 | `/theme/perimeter/plans` | footer + every plan CTA + the finder's secondary CTA |
| 6 | `/theme/perimeter/pests` | nav, mobile nav, four footer service links |
| 5 | `tel:5550400400` | header pill, emergency pill, sticky bar, `#contact`, mobile panel |
| 3 each | `/services`, `/service-areas`, `/about`, `/blog`, `/contact` | nav + mobile nav + footer |
| 3 | `#` | **the three social squares** — dead by design |
| 2 each | `/`, `/book`, `/privacy`, `/terms` | wordmark + footer |
| 2 | `#service-areas` | **dead id** — no element has that id (the band is `#areas`) |
| 1 each | `/book?pest=<nine slugs>`, `#identify`, `#main-content`, `tel:(555) 040-0400` (a **second, malformed** `tel:`), `mailto:office@perimeterpest.example` | per-panel booking deep links |
| — | external hosts | **none** — the page links nowhere off-site |

## Inner-page inventory (10 routes, all **HTTP 200 with a trailing slash**; the bare path is a **308**)

`pests/` (56,700 B, `h1` "Every pest, with what it costs to deal with" — the same finder plus
*"When each one shows up in the Carolinas"* and *"Telling them apart"*) · `plans/` (44,098 B, *"Three tiers"*,
*"What the plan does not cover"*, *"Before you sign up"*) · `services/` (41,942 B, six services:
quarterly plans, one-off, rodent exclusion, termite, bed bug, commercial/food service) · `service-areas/`
(31,970 B, *"Towns we cover"*, *"Why the radius is stated"*) · `about/` (34,179 B, *"The recurring revenue is
the conflict of interest"*, *"Three commitments"*, *"The technicians"*) · `blog/` (34,402 B, a filterable grid
— the kit's `data-blog-filters`/`data-blog-search` are live **there**) · `contact/` (32,831 B — the only page
with `data-validate`) · `book/` (57,541 B, the booking flow: `data-booking-form`, `data-day-chip`,
`data-window-index`, `data-window-status`, a confirmation block) · `privacy/` (34,835 B, 10 sections) ·
`terms/` (33,649 B, 12 sections).

The single-page recreation takes **the index only**. The inner routes are the authoritative reference if a
section needs more copy (the `/plans` page's *"What the plan does not cover"* is the honest counterweight to
tier three, and `/book`'s window picker is the one interaction the index promises but does not contain).

## Class census (1440 px)

**362 distinct classes** in the markup; **361 have a rule** in the compiled sheet. The single miss is
**`2xl:block`**, which compiles to `.\32 xl\:block` — the escaped-digit form that breaks naive class censuses
(count it with `\\\\32` in the regex, or it reads as a phantom). Zero genuinely phantom classes. Zero dead
selectors were spot-checked. Anything in a recreation that cannot be mapped to those 362 is invented.

## Screenshot analysis (`perimeter-template.jpg`, 2400 × 1892, 322,715 B, baseline JPEG)

**It is a marketing composition, not a browser capture**: the page is shown inside a **rounded macOS-style
browser frame** (three traffic-light dots, an empty URL bar) floating on a **white ground with a soft shadow**.
The frame, the ground and the drop shadow belong to ColorLib's catalogue tile — **do not adopt them into the
app**. Inside the frame the capture is the top ~1,900 px of the page at ~1080 CSS px wide, so the density reads
about 1:1 at 1440.

What it shows, and what to match: the slim **dark licence strip** running the full width with the licence
number and the 4.8/520+ review count at the far right; the **white header** with the small dark wordmark plate
and dashed lime square, seven centred nav links, the two outline pills, a moon glyph and one solid green CTA;
the **warm off-white hero** split ~7/5 with a heavy near-black `h1` whose second sentence is green, a 2 × 2
checklist with small green checks at 16 px, and the white quote card at radius 16 with a **full-width green
submit**; below it the **near-black finder band** with the lime "START HERE" kicker, a 3 × 3 grid of hairline
tabs (ants selected: outline + tint) and the detail panel's `dl` with the price in pale green. The
composition's own palette accents (the mac dots, the white ground) appear nowhere in the design.

## Known reference defects — measure them, do not reproduce them

1. **Horizontal overflow below 390 px.** `documentElement.scrollWidth` is **389** at every viewport from 320 to
   375 (67 px of sideways scroll at 320) because the footer newsletter row's intrinsic width — the email
   input's default intrinsic size (**263 px**) + 8 px gap + the Subscribe button (**102 px**) — becomes the
   footer grid item's `min-width: auto` (**373 px**) inside a **343 px** track. The recreation must keep
   `scrollWidth === clientWidth` at 320 (`min-w-0`, `size`/`w-full` on the input, or stack the row below `sm`).
2. **Dead `#service-areas` anchors (×2).** The header's location pill and the mobile panel's copy point at
   `#service-areas`, but the band's id is `#areas`. Target `#areas`.
3. **The hero form does nothing.** `action="#" method="post"` + `data-form` and no handler: submitting
   navigates and posts the three fields to the page itself. Build a real controlled form with validation and a
   success state (deviation D4); same for the newsletter.
4. **`aria-expanded` is never set on the five FAQ buttons** (measured `null`), and no `aria-controls` links them
   to their panels. The finder's tabs do it correctly — copy that pattern.
5. **Malformed JSON-LD.** The `<script type="application/ld+json">` reads
   `{"@context":"https://***@type":"PestControlService",…}` — the `schema.org` host was sanitised into the
   string, so `@type` is inside `@context` and the block does not parse as LocalBusiness data. Either ship a
   correct `@context`/`@type` pair or ship none; do not copy this block.
6. **`og:image` 404s** (`/og-image.jpg` not deployed) and there is **no `sitemap.xml`**; `robots.txt` is a
   `/theme/perimeter/`-relative 213 B stub. Every sibling in this family has per-page, not per-kit, social
   images — check both on the recreation.
7. **Two `tel:` shapes** — `tel:5550400400` (×5, valid) and `tel:(555) 040-0400` (×1, in the footer, with
   parentheses and spaces). Ship one normalised `tel:+15550400400`.
8. **Three `href="#"` social squares** whose icons go nowhere. A recreation either drops them or points them at
   real profiles; it must not ship three dead links.
9. **The pricing copy is placeholder-honest** — *"(sample)"*, *"Sample pricing for demonstration"*, *"Prices are
   illustrative starting points"*. Keep one such marker (it is the design's voice) and drop the rest, or the
   page reads like a lorem-ipsum skeleton.
10. **The design's tier and company names are the source's brand** — the middle tier is literally
    "Perimeter Plus" and the footer carries the company name, address and `office@perimeterpest.example`. None
    of it may appear in the app (AGENTS.md rule 5): rename the tiers, keep the *shape*.

## Deliberate deviations from the reference (single-page recreation)

- **D1 — one page.** The ten inner routes are not built. Nav links that pointed at them become in-page
  anchors (`#plans`, `#areas`, `#faq`, `#contact`) or are dropped; the footer's two link columns are reduced to
  the bands that exist. Every remaining anchor must resolve — no `#` and no dead ids (defects 2, 8).
- **D2 — one brand name.** "Sealwise" replaces the company name everywhere: wordmark, footer, `©` line,
  `title`, JSON-LD (if kept), and the three tier names (`Sentry` / `Sentry Plus` / `Yard and Home` — keep the
  ladder wording and the $39/$59/$89 prices).
- **D3 — the diagram is redrawn, not copied.** The `why-panel.svg` is reference *art*; ship an original inline
  SVG (a perimeter rectangle with a dashed lime stroke, a simplified house, four markers) or a
  `picsum.photos/seed/sealwise-1/800/600` placeholder. Its `figcaption`'s instruction — replace with your own
  photograph — is *content to keep*.
- **D4 — the forms work.** Both forms are controlled, validated (`required` + email pattern for the
  newsletter, phone pattern for the quote form) and show an inline success state; no network call.
- **D5 — Component Dock in the footer.** The bottom bar carries the "More templates at Component Dock" link
  (`https://www.componentdock.com/`) where the reference has the copyright + legal links.
- **D6 — no external assets.** Outfit from Google Fonts; the logo, favicon and diagram as inline SVG
  components; the nine pest panels as a typed data module.
- **D7 — accessibility added, not subtracted.** `aria-expanded` + `aria-controls` on the FAQ, `role="tablist"`-
  style semantics on the finder (or at minimum `aria-pressed` plus a labelled panel region), a focus-visible
  ring on every interactive element, and a skip link that actually moves focus.

## Requirements

### Requirement 1: Page chrome (preloader, progress bar, skip link, cookie strip, back-to-top, mobile call bar)

The app SHALL render the reference's out-of-flow chrome: a self-dismissing preloader, a 2 px `primary-600`
scroll-progress bar, a skip link to `#main-content`, a cookie strip, a 48 px back-to-top disc and an
`< lg` sticky call bar.

#### Scenario: Preloader never traps content

- **GIVEN** the app mounts in jsdom, or in a browser whose document is already `complete`
- **WHEN** no further `load` event will fire
- **THEN** the preloader is treated as finished (`loaded || document.readyState === 'complete'`)
- **AND** in a real browser it fades and is removed from the DOM within 300 ms

#### Scenario: Progress bar and back-to-top

- **GIVEN** the page is scrolled to 50 % of its scrollable height
- **THEN** `#scroll-progress` is **2 px** tall, `primary-600` `#528c1a`, `fixed top-0 left-0 z-[60]`, and
  about half the viewport wide
- **AND** below 300 px the back-to-top disc is `opacity: 0` / `pointer-events: none` / `translateY(16px)`;
  above it `opacity: 1`, `translateY(0)`
- **AND** the disc is **48 × 48**, `rounded-full`, `primary-600`, `shadow-lg`, `fixed bottom-6 right-6`,
  `aria-label="Back to top"`, and scrolls smoothly to the top

#### Scenario: Cookie strip

- **GIVEN** no stored decision in `localStorage['cookie-consent']`
- **THEN** the strip slides up **1,500 ms** after load and is **87 px** tall at 1440 / **147 px** at 390
- **AND** it carries `role="dialog"` + `aria-label="Cookie consent"`, *Decline* stores `essential`,
  *Accept All* stores `accepted`, and both remove it within 300 ms
- **AND** it is not shown again when a decision exists, and it never covers the footer's bottom row or the
  sticky call bar (deviation)

#### Scenario: Mobile call bar

- **GIVEN** a viewport below 1024 px
- **THEN** `[data-sticky-call]` is visible: a **97 px** white bar (73 px at 640–768) with a 1 px `ink-200` top
  border and one `bg-primary-600` full-width phone link
  (*"Wasps, rodents or bed bugs? Call today · (555) 040-0400"*, one normalised `tel:`)
- **AND** at ≥1024 it is `display: none` and takes no space in the document

#### Scenario: Skip link and landmarks

- **GIVEN** the app has loaded
- **THEN** the first focusable element is "Skip to content" → `#main-content`, invisible until focused
- **AND** the page has exactly one `<h1>`, `<main id="main-content">`, a `<header>` and a `<footer>`

### Requirement 2: Licence bar and header

The app SHALL render a non-sticky 37 px compliance strip above a sticky header that is **81 px at ≥1024** and
**65 px below**, with the desktop nav appearing **only from 1280 px**.

#### Scenario: Licence bar content

- **THEN** the strip is `ink-800` `#1a201a`, `text-xs` `ink-100`, 37 px tall, and holds *Licence ·
  NC SPCA #0000-P*, *Pesticide applicators certified* (hidden below `sm`), *Serving · Mecklenburg County*
  (hidden below `sm`), and on the right five small stars + `4.8` + `520+ reviews on Google (sample)`
- **AND** it scrolls away with the document (`position: static`)

#### Scenario: Header at rest and stuck

- **GIVEN** `scrollY === 0`, viewport 1440
- **THEN** the header is **81 px**, `sticky top-0 z-50`, `bg-white/90` + `backdrop-blur-lg`, 1 px `ink-100`
  bottom border, and has no shadow
- **WHEN** `scrollY` passes **50 px**
- **THEN** `shadow-lg` is added, and removed again below the threshold

#### Scenario: Breakpoints and nav visibility

- **GIVEN** a viewport of 1280 or wider
- **THEN** the seven-link nav is `display: flex` at 14 px/600 `ink-600`, `gap-7`, and the hamburger is hidden
- **GIVEN** a viewport of 1024–1279
- **THEN** the nav is `display: none` and the hamburger is visible — the header still measures 81 px
- **GIVEN** a viewport below 1024
- **THEN** the header is 65 px, the `Charlotte, NC` pill (`hidden 2xl:block`) and the "Book a visit" CTA
  (`hidden xl:inline-flex`) are not rendered, and the phone pill is shown from `md` up

#### Scenario: Wordmark

- **THEN** the wordmark is an inline SVG at `200 × 40`, rendered 32 px tall (36 px at `lg`): a 26 × 26 `ink-800`
  plate `rx 7`, a 14 × 14 inset square stroked `#84cc3c` with `stroke-dasharray="4 3"`, a 2.6 r lime dot, the
  name at 16/700 and the sub-line at 9/500 `#566151` with `letter-spacing 2.2`
- **AND** a second, light variant is used in the footer and in dark mode; no raster logo anywhere

#### Scenario: Mobile panel

- **WHEN** the hamburger is pressed
- **THEN** `aria-expanded` flips, the panel unhides (**492 px** tall at 390) with seven `py-3` links, the two
  pills and a full-width CTA, and the icon becomes an X

### Requirement 3: Hero — two-tone `h1`, rating, four-item checklist and a live quote card

#### Scenario: Composition at 1440

- **THEN** the band is `ink-50` `#f5f6f4`, `py-14` → **`lg:py-20` (56 → 80 px)** — not the `.section` 112 px
  rhythm — and **668 px** tall, with a 12-column grid and a
  64 px gutter: text `col-span-7` (**683 px**), card `col-span-5` (**469 × 508**)
- **AND** the kicker is "Charlotte · Licensed structural pest control" at 14/700 uppercase `+0.35px` in
  `primary-700`
- **AND** the `h1` is **60/66 700** at `-1.5px` `ink-800`, its second sentence in `primary-600`, and measures
  **683 × 132**
- **AND** the lead is 18/28 `ink-500` at `max-w-xl`, the rating line shows five 20 px stars + **4.8** +
  `520+ reviews on Google · sample data`, and the four checklist items sit in a 2 × 2 grid of **335 px** cells
  with green check glyphs

#### Scenario: The quote card

- **THEN** `#quote` is white, `rounded-2xl` (**16 px**), 1 px `ink-100`, `shadow-md`, **32 px** padding
- **AND** it holds `h2` "Prefer to just ask?" (24 px at `lg`), the three-field form (name `403 × 50`, phone
  `403 × 50`, select `403 × 48`, all `rounded-lg`, 1 px `ink-200`, `px-4 py-3`, 16 px text), the
  `403 × 52` `primary-600` submit **"Get my price"**, and the `text-xs ink-400` reassurance line
- **AND** the select offers exactly the nine pest labels plus the placeholder *"Choose the closest match"*

#### Scenario: Form behaviour (deviation D4)

- **GIVEN** the submit is pressed with a blank name or phone
- **THEN** an inline error is shown next to the field and nothing is submitted
- **GIVEN** all three fields are valid
- **THEN** the form shows a success state on the page and the field values are cleared; **no network request
  is made**

#### Scenario: Breakpoints

- **THEN** at 1024 the grid is still 12 columns but the card is **363 × 528** and the `h1` box **533 × 198**
- **THEN** at 768 and 640 the grid is one column (**736 / 608 px**), the `h1` is 48 px, the checklist is 2-up
  and the card is full width
- **THEN** at 390 the `h1` is 36/39.6 at `-0.9px`, the card is `358 × 508` and the band is **1,275 px** tall

### Requirement 4: `#identify` — the nine-pest finder

The app SHALL render the dark finder band with nine selectable pests, a single-open detail panel, and the
"on the plan / not on the plan" split preserved exactly (five covered, four not).

#### Scenario: Band and frame

- **THEN** the band is `ink-900` `#0e120e`, `py-28` (**112 px**), **971 px** tall at 1440 with Ants open
- **AND** the kicker "Start here" is `primary-400`, the `h2` is 36 px/700 white, and the lead is 18/28
  `white/70` at `max-w-2xl`
- **AND** the body grid is 12 columns with a **40 px** gutter: tabs `col-span-7` (693 px), panel `col-span-5`
  (**483 × 507**)

#### Scenario: The nine tabs

- **THEN** each tab is a `<button type="button">` measuring **223 × 95**, `rounded-xl` (12 px), 1 px
  `white/15`, `p-4`, left-aligned, with a bold `white/70` label and a 12 px `white/40` sub-line
- **AND** the selected tab carries `aria-expanded="true"` and renders `border-primary-400` +
  `bg-primary-400/10`, its label at full white
- **AND** exactly one tab is expanded at all times, and `ants` is the initial state
- **THEN** at 390 the grid is 2-up (**173 × 95**) and at 640–1440 it is 3-up

#### Scenario: The detail panel

- **GIVEN** any tab is selected
- **THEN** exactly one `[data-pest-panel]` is visible — `rounded-2xl`, 1 px `white/10`, `bg-white/5`,
  **32 px** padding — with `h3` 24/700, the `white/70` lead, the three `dl` rows (*Visits*, *One-off price* in
  `primary-300`, *We can be there*) above a `border-t border-white/10` rule
- **AND** the plan note is `rounded-lg` in `border-primary-400/40 bg-primary-400/10 text-primary-100`, opening
  with the bold words **"On the plan."** for ants, roaches, rodents, wasps, spiders and **"Not on the plan."**
  for termites, bed bugs, mosquitoes and fleas
- **AND** the two CTAs are "Book this treatment" (filled) and "See the quarterly plan" (outline), both 8 px
  radius, both resolving inside the app (deviation D1)

#### Scenario: Content fidelity

- **THEN** the nine panels reproduce the reference's `Visits` / `One-off price` / `We can be there` values from
  the table in this spec ($145 · $220 · $320 · quoted · $950 · $175 · $145 · $65 per visit · $240) and the
  three refusal sentences for the three uncovered pests
- **AND** the `text-sm white/40` note under the grid keeps the "sample pricing" disclosure

#### Scenario: Interaction is keyboard-complete

- **GIVEN** focus is on a tab
- **WHEN** Enter or Space is pressed
- **THEN** the same panel switch happens as on click, focus stays on the tab, and the panel is reachable by the
  next Tab press

### Requirement 5: `#emergency` — the pinging strip

#### Scenario: Band, dot and button

- **THEN** the band is `primary-600` `#528c1a`, white text, **164 px** tall at 1440 (`py-8`), **264 px** at 390
- **AND** it opens with a **8 px** (`h-2 w-2`) dot whose outer span animates `animate-ping` and whose inner span
  is solid, both `bg-current`
- **AND** the headline is 18 → 20 px bold white, the supporting line 14 px at `opacity-90`,
- **AND** the phone link is a white `rounded-full` pill, `primary-700` text, 18 px bold, **211 × 52**, on one
  normalised `tel:`
- **AND** the row is `flex-col` below `lg` and `lg:flex-row lg:justify-between` above it
- **AND** under `prefers-reduced-motion: reduce` the ping is still (no animation)

### Requirement 6: `#plans` — three tiers with published prices

#### Scenario: Cards

- **THEN** the band is white, `py-28`, **970 px** tall, and the grid is 3 × **389 px** at 1440 with a 24 px
  gutter, stacking to one column below 640
- **AND** every card is `rounded-2xl`, 1 px `ink-100` (middle: `primary-600` + `shadow-md`), `p-6`
- **AND** each shows the name (`h3`, 18/700), the price at **30/700** with `per month` at 14 px `ink-400`, the
  blurb, the feature list with check glyphs at `space-y-2.5`, and one CTA
- **AND** the middle card alone carries the `primary-50`/`primary-700` uppercase badge **"Most chosen"**,
  which makes it **44 px** taller than its siblings when stacked at 390 (442 vs 398)

#### Scenario: Copy and prices

- **THEN** the three tiers are `Sentry` **$39**, `Sentry Plus` **$59** (3 + 4 + 5 features) and `Yard and Home`
  **$89** (4 features), with the reference's feature wording preserved
- **AND** the section keeps the two honesty lines: the lead's *"Of 35 companies we looked at, 21 sell a plan
  and 3 tell you what it costs"* and the footnote *"Priced monthly, billed after each visit. Cancel with 30
  days notice, no cancellation fee."*

#### Scenario: Paid-tier accent

- **THEN** the two side CTAs are outline (`border-ink-200 text-ink-700`, hover `border-primary-600
  text-primary-700`) and the middle one is filled `primary-600` white; all three are 8 px radius, full width,
  `px-5 py-3`, 14 px/700

### Requirement 7: `#why-us` — the diagram and the four commitments

#### Scenario: Layout

- **THEN** the band is `ink-50`, `py-28`, **868 px** tall, `grid lg:grid-cols-2 gap-16`
- **AND** the figure is **first** on `lg` (`order-last lg:order-first`), `rounded-2xl`, and its caption is
  14 px `ink-500`
- **AND** the text column is kicker + `h2` (36 px) + lead (18/28 `ink-500`) + a `dl` of four entries

#### Scenario: The four commitments

- **THEN** the four `dt` are bold `ink-800` at 16 px and their `dd` are `ink-500` at 16/24, in this order:
  *one visit is enough* · *the price before the technician arrives* · *exclusion before poison* ·
  *re-treat free, in writing*
- **AND** the closing line of the lead — *"Four of the 35 sites we looked at publish a price for anything at
  all"* — is preserved, because it is the section's argument

#### Scenario: The figure is not a photograph (deviation D3)

- **THEN** the image is an original inline SVG (or a deterministic `picsum` placeholder) sized 4:3 and rendered
  `w-full rounded-2xl object-cover`
- **AND** the app contains no ColorLib asset path and no copy of the reference SVG

### Requirement 8: `#process` — three numbered steps

#### Scenario: Grid

- **THEN** the band is white, `py-28`, **564 px** tall, with `grid gap-8 sm:grid-cols-3 sm:gap-6` → three
  **389 × 176** cells at 1440, stacking at 390 (`948 px` band)
- **AND** each cell is `01/02/03` (`text-sm font-bold tabular-nums primary-600`) followed by a
  **`h-px flex-1 bg-ink-100`** hairline in a `items-baseline gap-3` row — a divider, not a border
- **AND** each has an `h3` (18/700), a 16/24 body paragraph, and a `text-sm font-semibold primary-700`
  duration: **Do it now · Same day · Usually 1 to 3 visits**

### Requirement 9: `#areas` — fourteen towns, 5/7 split

#### Scenario: Layout and list

- **THEN** the band is white, `py-28`, **513 px** tall, 12 columns: text `col-span-5`, list `col-span-7`
- **AND** the list is 3 columns of **212 px** at 1440 (`grid-cols-2` below `sm`), each item `border-b
  border-ink-100 py-2.5 text-base ink-700`
- **AND** the fourteen towns are rendered in the reference's order and the closing note ("cheapest local
  search signal") is kept as 14 px `ink-500`

### Requirement 10: `#testimonials` — three quotes, a carousel only below 1024

#### Scenario: At 1440

- **THEN** the band is `gray-50` `#f9fafb`, `py-28`, **768 px** tall, with a centred pill/h2/sub block
- **AND** the track is **1,216 px** holding three **405 px** slides, each a `rounded-2xl bg-white p-8
  shadow-soft` card with five `primary-400` stars, a 18/28 `font-medium` quote, and a 48 px avatar disc
  (`bg-primary-100 text-primary-600`) with initial, name and neighbourhood
- **AND** there are **0 dots** and both arrows are `display: none`, and a click on either does not move the
  track (`matrix(1,0,0,1,0,0)`)

#### Scenario: Below 1024

- **THEN** at 768 the carousel is 2-up (**368 px** slides), renders **2 dots** and shows both arrows
- **AND** at 390 it is 1-up (**358 px**), renders **3 dots** (32 px active / 10 px idle) and advances
  `-358px` per step
- **AND** it auto-advances every **5 s**, pauses on `mouseenter`, and wraps from the last slide to the first
- **AND** under reduced motion there is no auto-advance

#### Scenario: Cards stay equal height per view

- **THEN** the three cards render at equal height at 1440 (320 px) regardless of quote length, and re-measure
  on resize

### Requirement 11: `#faq` — five single-open rows

#### Scenario: Structure

- **THEN** the band is white, `py-20 lg:py-28`, **820 px** tall, header centred at `max-w-3xl`, rows in a
  `divide-y divide-gray-200` block of `max-w-3xl`
- **AND** each row is `py-6` with a full-width button (18/600 question) and a **32 px** `rounded-full
  bg-gray-100` disc on the right
- **AND** the five questions and their answers are the reference's (see the band notes)

#### Scenario: Toggling

- **GIVEN** all rows closed
- **WHEN** a button is pressed
- **THEN** that paragraph animates from `max-height: 0` / `opacity: 0` to its scroll height / `1`, the disc
  rotates **45°**, and any other open row closes
- **AND** `aria-expanded` and `aria-controls` are set on every button (the reference omits both — defect 4)
- **AND** the animation is skipped (instant) under `prefers-reduced-motion: reduce`

### Requirement 12: `#contact` — the closing band

#### Scenario: Band and CTAs

- **THEN** the band is `primary-700` `#426e18`, **412 px** tall at 1440 (`py-20 lg:py-28`), text centred
- **AND** the `h2` is white 36/700 and the sub-line is 18/28 `primary-100`
- **AND** there are exactly two CTAs, **56 px** tall, 8 px radius, `px-8 py-4`: white-filled
  "Identify the pest" → `#identify`, and `border-2 border-white/40` "Call …" → the one `tel:`
- **AND** they stack full-width below `sm`

### Requirement 13: Footer — four zones, working links, Component Dock

#### Scenario: Geometry

- **THEN** the footer is `gray-900` `#111827`, `pt-16 lg:pt-24`, **543 px** at 1440, 12 columns (4 / 5 / 3)
  with 32 px gutters, collapsing to one column at 390 (**1,357 px**)
- **AND** the light wordmark renders at **40 px** tall, the blurb at `max-w-xs text-gray-400`, and the three
  social squares are `rounded-lg bg-gray-800 p-2.5`
- **AND** the three link columns use `text-sm font-semibold uppercase tracking-wider text-white` headings and
  `text-gray-400 → hover:text-white` links

#### Scenario: Links

- **THEN** every footer link resolves inside the app (no `#`, no dead ids) and there is exactly one `tel:` and
  one `mailto:` — or none, if the recreation omits the contact block
- **AND** the bottom bar is `mt-16 border-t border-gray-800 py-8` and contains the Component Dock link
  (`https://www.componentdock.com/`) in place of the reference's copyright + legal pair

#### Scenario: Newsletter

- **THEN** the form is an email input (`rounded-lg border-gray-700 bg-gray-800 px-4 py-2.5`) plus a
  `primary-600` Subscribe button, in a `flex gap-2` row
- **AND** the row **can shrink**: `scrollWidth === clientWidth` at 320 (defect 1 — the reference overflows to
  389 px)
- **AND** submitting an invalid address shows an inline error; a valid one shows a success state, no network

### Requirement 14: Design tokens, both themes, type delivery and responsive integrity

#### Scenario: Palette

- **THEN** `src/index.css` `@theme` carries the **ten `ink` steps** (`#f5f6f4` … `#0e120e`) and the **ten
  `primary` steps** (`#f2fbe9` … `#2e4917`) exactly as tabulated above
- **AND** the last three bands use **Tailwind's own `gray`** ramp, not `ink` (`gray-50` testimonials,
  `gray-900` footer, `gray-200` dividers, `gray-100` discs)
- **AND** no colour outside those two ramps + `gray` + white appears in the UI

#### Scenario: Type

- **THEN** the only family is **Outfit**, loaded from Google Fonts with `display=swap` at weights
  400/500/600/700/800, and `body` resolves to `Outfit, system-ui, sans-serif`
- **AND** no italic, no serif and no monospace face is loaded; the numerals `01–03` use `tabular-nums`
- **AND** the tracking pair holds: kickers `uppercase` `+0.35px`, headings `tracking-tight` (`-1.5px` at 60 px)

#### Scenario: Themes

- **GIVEN** `prefers-color-scheme: dark` and no stored choice
- **THEN** the app is dark: `body` `#030712`, hero band `gray-900`, testimonial band `gray-900`, header
  `gray-950/90`, FAQ band `gray-950`, and `#identify` unchanged (`ink-900`)
- **AND** the toggle flips the theme, persists it (`theme`), and survives a reload

#### Scenario: No horizontal scroll

- **THEN** `documentElement.scrollWidth === clientWidth` at 320 / 390 / 640 / 768 / 1024 / 1280 / 1440
  (the reference fails at 320–375 with 389 px — defect 1)

#### Scenario: Document height

- **THEN** the document measures within ~5 % of **7,379** at 1440 and 1280, **7,705** at 1024, **9,578** at
  768, **9,762** at 640, **11,687** at 390 and **12,637** at 320

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** no `[data-animate]` element stays at `opacity: 0`, the pinging dot does not animate, the carousel
  does not auto-advance, accordion/panel transitions are instant and smooth scrolling becomes immediate

## Verification checklist

- [ ] `apps/sealwise` exists, `@free-react-templates/sealwise` in `package.json`, `public/CNAME` =
      `sealwise.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string, no "Perimeter" company name, no
      `perimeterpest.example` address in any app file (comments included); wordmark + favicon are inline SVG
- [ ] bands in this order: licence bar → header → hero → `#identify` → `#emergency` → `#plans` → `#why-us` →
      `#process` → `#areas` → `#testimonials` → `#faq` → `#contact` → footer
- [ ] licence bar **37 px** `#1a201a` (non-sticky); header **81 px** at ≥1024 / **65 px** below, sticky,
      `bg-white/90` + blur + 1 px `#e7eae5`, `shadow-lg` past 50 px; nav **only at ≥1280**; wordmark 200 × 40
      SVG at 32/36 px; CTA 8 px radius; mobile panel **492 px** at 390
- [ ] hero **668 px** at 1440 / **1,275** at 390: kicker 14/700 `#426e18` `+0.35px`; `h1` **60/66 700 −1.5px**
      two-tone (`#1a201a` + `#528c1a`), 683 × 132; lead 18/28 `#566151`; 4.8 rating + sample line; four
      checklist items **335 px** cells; card **469 × 508** radius 16 pad 32 with inputs 403 × 50/48 and submit
      403 × 52
- [ ] `#identify` **971 px** `#0e120e`: nine tabs **223 × 95** radius 12 in a 3-up grid (`lg:col-span-7`),
      panel **483 × 507** (`lg:col-span-5`), selected tab = `#84cc3c` border + `#84cc3c14` fill, prices in
      `#a2de66`, **five "On the plan." / four "Not on the plan."**, `aria-expanded` single-open, ants default
- [ ] `#emergency` **164 px** `#528c1a` with the 8 px pinging dot and the **211 × 52** white `rounded-full`
      phone pill
- [ ] `#plans` **970 px** white: three **389 × 442** cards radius 16 pad 24, middle ringed `#528c1a` +
      `shadow-md` + "Most chosen" badge, prices **$39 / $59 / $89**, five/six/four features, the
      "cancel with 30 days notice" footnote
- [ ] `#why-us` **868 px** `#f5f6f4`: 2-col split, figure first, four `dt/dd` commitments in order, original
      diagram (no ColorLib asset), caption kept
- [ ] `#process` **564 px** white: three **389 × 176** cells, `01–03` in `#528c1a` `tabular-nums` with
      `h-px` `#e7eae5` hairlines, durations *Do it now / Same day / Usually 1 to 3 visits*
- [ ] `#areas` **513 px** white: 5/7 split, fourteen towns in a **212 px** 3-column list with `#e7eae5`
      bottom rules, radius note kept
- [ ] `#testimonials` **768 px** `#f9fafb`: **0 dots / no arrows at 1440** (three 405 px cards, 1,216 px
      track), **2 dots at 768**, **3 dots + arrows at 390**, 5 s auto-advance, 32/10 px dots
- [ ] `#faq` **820 px** white: five `py-6` rows in a `divide-y`, **32 px** `#f3f4f6` discs rotating 45°,
      single-open, `aria-expanded` + `aria-controls` present (reference omits them)
- [ ] `#contact` **412 px** `#426e18` with the two **56 px** CTAs (white fill → `#identify`, `border-2
      white/40` → `tel:`) stacking below `sm`
- [ ] footer **543 px** `#111827`: 12-col 4/5/3, three link columns, newsletter row that shrinks (no overflow),
      bottom bar with the Component Dock link
- [ ] chrome: preloader non-blocking, 2 px `#528c1a` progress bar, skip link, 48 px back-to-top past 300 px,
      87 px cookie strip after 1.5 s storing `accepted`/`essential`, **97 px** mobile call bar below 1024
- [ ] both themes shipped, dark `body` `#030712`, `#identify` unchanged in dark, choice persisted
- [ ] fonts: **Outfit 400–800** from Google Fonts with `display=swap` (HTTP 200 verified), no second family,
      no italic
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 640 / 768 / 1024 / 1280 / 1440 — the 389 px footer
      overflow of the reference is fixed, not reproduced
- [ ] document height within ~5 % of 7,379 (1440, 1280) / 7,705 / 9,578 / 9,762 / 11,687 / 12,637
- [ ] **zero** bare `#` anchors and **zero** dead ids (`#service-areas` is `#areas` here), exactly one
      normalised `tel:`, one `mailto:` or none
- [ ] one `<h1>`, one `<main id="main-content">`, no JSON-LD copied from the reference (it does not parse)
- [ ] reduced motion: no element stuck at `opacity: 0`, no ping, no auto-advance, no smooth scrolling
- [ ] 100 % coverage on the new app and `scripts/verify-app.sh sealwise` green
