# Template: Mandrel (Industrial mechanical contractor — the capability matrix as the argument)

## Purpose

A **commercial and industrial mechanical contractor's site where the selling device is a grid, not a hero
image**: **seven** trades down the side, five client sectors across the top, and a tick or an em-dash in every
one of the **35** cells. The `h1` promises *"Plant rooms, process pipework, and the paperwork
that comes with them."*, but the page's real claim is the table in `#capabilities`: *"The question a facilities
manager actually asks is not whether we can do the work, but whether we have done it in their sector."* A
tick is a sector reference; an em-dash is an honest refusal. Nothing else on the page argues as directly.

That matrix dictates the rest of the design. **Every band is a table or a list of pairs**: the hero carries a
four-row `<table>` of prequalification facts (founded, engineers, EMR, bonding capacity), `#projects` is three
cards each ending in a two-cell `<dl>` (**value band** + **duration**) because *"that is what a bid list is
screened on"*, `#certifications` is an **eight-cell hairline grid** (licence, OSHA 30, EMR, bonding, ASME,
medical gas, ISO, liability), and `#process` is **three numbered steps** each signed off with a promise
(*"Usually 10 working days"*, *"Agreed, not imposed"*, *"Documentation at PC"*). There is **no photograph in
any band above the fold except the hero's**, and no service-card icon set at all — the page withholds imagery
and gives you columns of facts instead.

The page is **grey → white → grey → white → steel blue → near-black**, six bands plus a chrome strip: a
**37 px licence bar** (`#111827`) above a **sticky white header**, a **grey `#f3f4f6` hero**, a white matrix
band, a **grey `#f3f4f6` projects band**, white certifications, white process, and then a **deep steel-blue
`#31485f` closing band** (*"Have a set of drawings?"*) over a **near-black `#111827` footer**. Blue-steel is
used as **line work and ink** far more than as fill: the only large blue surface on the page is that closing
band, plus every filled CTA.

Typography is **one face — Manrope — at four weights**, and the discipline is in the *scale*, not in a font
pair: `h1` **48/52.8 at 700**, `h2` **36/40 at 700 with −0.9 px tracking**, `h3` 18/28 at 700, eyebrows 14/20
**700 uppercase `+0.35 px`** in steel blue, ledes 18/28 `400` in `#4b5563`. There is no serif anywhere, no
display face, no italic accent. The page looks like a **tender document that happens to be a website**, and
that is the design.

Recreation of the ColorLib **"Steelworks"** design (https://colorlib.com/wp/template/steelworks/, live preview
https://preview.colorlib.com/theme/steelworks/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `steelworks`
- **ColorLib page:** https://colorlib.com/wp/template/steelworks/ — **HTTP 200, 112,147 B**.
  `<title>` **"Steelworks - Commercial Plumbing Contractor Template 2026 - Colorlib"**. Listing
  `og:image` `https://colorlib.com/wp/wp-content/uploads/sites/2/steelworks-template.jpg`.
- **Live preview:** https://preview.colorlib.com/theme/steelworks/ — **HTTP 200, 57,659 B**,
  `text/html; charset=utf-8`, read **2026-10-25** with `curl -4` (this host answers IPv6 first and hangs; every
  fetch in this spec used `curl -4`). `<title>` **"Commercial and industrial mechanical contractor | Steelworks
  Mechanical"**, `<meta name="description">` *"Commercial and industrial mechanical contractor. Plant rooms,
  process pipework, statutory compliance and planned maintenance across the Midwest."*, `<meta
  name="robots" content="noindex, nofollow">`. A 2026 **Astro** build in the same house kit as Headwater /
  Cresting / Nightwatch / Conduit / Jetline: one hashed stylesheet `_astro/Base.C9x0H87u.css` (**55,238 B**,
  `/*! tailwindcss v4.3.3 */`, sha256 `f6aa86733440f616…`), the behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256 `e26cc055dec23e63…`
  — **byte-identical** to the kit shipped on Headwater / Cresting / Nightwatch / Conduit / Jetline), and the
  router `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (**16,357 B**, sha256
  `69eb3ac5c16a8d9a…` — the same router filename as every sibling in this 2026 set).
- **No archive.** `https://preview.colorlib.com/downloads/free/steelworks.zip` → **HTTP 404**. The live preview
  is the sole DOM/CSS reference, so there is no un-versioned twin to diff and no "archive-verified" claim to
  make. `theme/bootstrap/steelworks/` and `theme/bb/steelworks/` → **404** as well; only the slug-only path
  answers.
- **Four inline `<script>` bodies** (plus the two module tags): a **theme FOUC guard** (454 B — applies `dark`
  when `localStorage.theme === 'dark'`, or when the key is absent **and** `prefers-color-scheme: dark`), a
  JSON-LD block (299 B, **structurally broken — see §Reference defects**), a **preloader teardown** (370 B: on
  `load`, fade `#preloader` to `opacity: 0`, then `remove()` after 300 ms; also removes the incoming document's
  preloader on `astro:before-swap`), and the Astro view-transition marker.
- **JSON-LD:** as authored it reads
  `{"@context":"https://***@type":"PlumbingContractor","name":"Steelworks Mechanical",…,"telephone":"+1-555-0205","areaServed":"Midwest United States"}`
  — the `@context` value swallowed `schema.org"` and the `"@type"` **key**, so the block parses as JSON but
  declares **no `@type`**. It is invalid structured data; do not copy it (see §Reference defects).
- **Multi-page, not one page.** **Twelve inner routes are live and all are trailing-slash only** (bare path →
  **308**): `capabilities/`, `projects/`, `sectors/`, `certifications/`, `careers/`, `about/`, `rfq/`
  (**38,979 B**), `privacy/`, `terms/`, and three project detail routes
  (`projects/hospital-plant-room/`, `projects/food-process-pipework/`, `projects/school-compliance-programme/`).
  `theme/steelworks/index.html` answers 200 and is the directory URL itself, so it is a no-op link, not a
  second page.
- **Fonts:** **Manrope only**, delivered from Cloudflare's automatic font service
  (`/cf-fonts/v/manrope/5.2.8/{latin,cyrillic}/wght/normal.woff2`, variable `wght`) inside an inline
  `<style media="print" onload="this.media='all'">` — **no Google Fonts `<link>`, no `@font-face` in the
  stylesheet**. Measured body stack `Manrope, system-ui, sans-serif`; loaded faces **400 / 500 / 600 / 700**
  (`document.fonts`). Manrope is on Google Fonts (**verified 200** for
  `css2?family=Manrope:wght@400;500;600;700;800&display=swap`), so the recreation may load it explicitly.
- **Headings:** exactly one `h1`, **five `h2`** (capabilities, projects, certifications, process, contact),
  **ten `h3`** (3 project cards + 3 process steps + 4 footer column heads), **no `h4`**.
- **Motion:** **none.** The page carries **zero `[data-animate]` elements** — no reveal-on-scroll, no stagger,
  no parallax, no typewriter. The kit ships all of them; this page only wires the dark toggle, the mobile
  menu, the header shadow, the scroll-progress bar, back-to-top, the cookie strip and the preloader. Do not
  add reveal animations to this recreation.

- **Recreation name:** `mandrel` — one lowercase word, mechanical without echoing the source (a *mandrel* is the
  form a pipe is bent around, which is what a plant-room contractor's work is literally made of), not the source
  name, and no collision: `git grep -il mandrel origin/main` → **no matches** (zero substring hits), `ls apps/`
  has no `mandrel`, no `openspec/specs/template-mandrel/`, and `colorlib.com/wp/template/mandrel/`,
  `preview.colorlib.com/theme/mandrel/`, `preview.colorlib.com/theme/bootstrap/mandrel/` all → **404**. The
  recreation lives at `apps/mandrel`, package `@free-react-templates/mandrel`,
  `mandrel.free.componentdock.com`. **No ColorLib string may appear in the app** — provenance lives in this
  spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5). Alternatives checked and still free if a
  later mechanical slug needs them: `trunnion`, `manifold`, `flange`, `valvework` (all zero repo hits).
  Rejected here: `plantwise` (zero hits but a pun that reads as software), `billet` (3 repo hits — it is a
  substring of `billet`-adjacent test fixtures in `apps/gangway`), `pipework` (7 hits — it is ordinary copy in
  Emberly / Patina / Drainwise), `steelhead`, `ironwork`, `gantry` (all taken).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, `[~]` count **0**, **2,880** ticked rows across the
category sections), so this design comes from `docs/catalog-coverage.md` — the **42 standalone designs** on
colorlib.com's own listing that the checklist never recorded. This is row **`steelworks`** of 42 (*preview 200,
57,659 B*), the row after `springwell` (prepped as *Headwater*) in that table's order. When the app ships,
append this line under **`## Industrial`** — currently headed `## Industrial (15)`, bump it to **16** —
positioned alphabetically after **Roofing** (`roofing` → `shingle`) and before **Supreme** (`supreme` →
`stamp`). *Rooter24* (→ `jetline`) and *Springwell* (→ `headwater`) preps name the same slot; if they landed
first the order is `Roofing` → `Rooter24` → `Springwell` → `Steelworks` → `Supreme`. Re-read the section before
pasting, a concurrent stream may have moved it:

```markdown
- [x] **Steelworks** — [colorlib](https://colorlib.com/wp/template/steelworks/) · [mandrel](https://mandrel.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/steelworks-template.jpg)
```

## Reference readings (2026-10-25, `curl -4`)

| what                                   | value                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| preview HTML                           | 200, **57,659 B**, `text/html; charset=utf-8`                                                                                                                 |
| stylesheet `_astro/Base.C9x0H87u.css`  | 200, **55,238 B**, `/*! tailwindcss v4.3.3 */`, sha256 `f6aa86733440f616…`                                                                                     |
| behaviour kit `…_lang.BLoalVWc.js`     | 200, **16,233 B**, sha256 `e26cc055dec23e63…` — the **same house kit** as Headwater / Cresting / Nightwatch / Conduit / Jetline                              |
| router `…CYDbzu1r.js`                  | 200, **16,357 B**, sha256 `69eb3ac5c16a8d9a…` — the same hashed router as every sibling in this 2026 set                                                     |
| official archive `steelworks.zip`      | **404** — no archive; the live preview is the only reference                                                                                                  |
| `theme/bootstrap/steelworks/`, `theme/bb/steelworks/` | **404** — the slug-only path is the only live demo                                                                                             |
| logo `assets/img/logo.svg`             | **200**, header mark, rendered **150 × 32** (`h-8` → `lg:h-9` = 36)                                                                                            |
| logo `assets/img/logo-light.svg`       | **200**, the footer / dark-mode twin, rendered **190 × 40** (`h-10`)                                                                                           |
| content images                         | **4 image slots, 3 distinct photographs** — all hot-linked `images.unsplash.com` (`photo-1581092160562` used **twice**: hero at 1200 × 1600 and card 1 at 800 × 600, `photo-1581092918056`, `photo-1607472586893`). **Seven `<img>`** elements in total (2 header logo variants, hero, 3 cards, footer logo); 4 `loading="lazy"` |
| favicon / OG                           | `favicon.svg`; `og:image=/og-image.jpg` (relative), `og:type`; **no canonical**, **no `rel=alternate`**                                                        |
| incoming styles                        | **1** `<link rel="stylesheet">` (`fetchpriority="high"`), **0** Google Fonts links, **1** inline `<style>` holding the Manrope `@font-face` set                  |
| inner routes                           | **12**, all **200 only with a trailing slash** (bare path → **308**)                                                                                           |
| document height                        | **4,748** px at 1440 × 900 **and** at 1280; **4,791** at 1024; **7,499** at 768; **8,157** at 390; **8,394** at 320                                            |
| horizontal overflow                    | **none** — `body.scrollWidth === documentElement.clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440, and `window.scrollTo(200, 0)` leaves `scrollX === 0`. (`documentElement.scrollWidth` reads **648** at 390/320 because the **matrix's `min-w-[680px]` is clipped by its own `overflow-x-auto` wrapper**, not because the page scrolls — see §Structure) |
| anchors                                | **48** `a[href]` — 7 × `capabilities`, 6 × `rfq`, 4 × `projects`, 3 × each of `sectors` / `certifications` / `careers` / `about`, **3 × dead `#` (social chips)**, 2 × `/` (logo, footer logo), **2 × `#service-areas` that resolve to nothing on the home page**, 2 × `tel:5550100205`, 2 × `privacy`, 2 × `terms`, 1 skip link, 1 each project-detail route, **1 malformed `tel:(555) 010-0205`** (footer), 1 `mailto:bids@steelworksmech.example` |
| inline `<svg>`                         | **36** (checkbox ticks, phone, pin, sun/moon, burger, social glyphs, back-to-top, spinner ring) — all inline, no icon dependency                                |
| structure                              | **376** `class="…"` attributes, **268** distinct utility names, **10** ids, **5** `<button>`, **0** `<form>`, **0** `<input>` / `<textarea>` / `<select>` on the home page |
| ids on the home page                    | `preloader`, `scroll-progress`, `main-content`, `capabilities`, `projects`, `certifications`, `process`, `contact`, `cookie-consent`, `back-to-top`             |
| gradients                              | **zero** — no `bg-gradient`, no `from-`/`via-`/`to-` utility is used in the markup                                                                             |

## Page structure (measured 2026-10-25, `getBoundingClientRect` in Playwright/Chromium)

| #  | band           | element                                        | ground              | top | height | notes                                                                    |
| -- | -------------- | ---------------------------------------------- | ------------------- | --: | -----: | ------------------------------------------------------------------------ |
| 0  | licence bar    | `<div data-licence-bar>`                       | `#111827`           |   0 |   **37** | 36 px row (`h-9`) + 1 px border; `text-ink-100`, 12 px type               |
| 1  | header         | `<header data-header>` sticky, z-50            | `#fff` @ 90 %, blur |  37 |   **81** | 80 px row + 1 px `ink-100` border; **65 px below `xl`**                   |
| 2  | hero           | `<section>` (no id)                            | `#f3f4f6`           | 118 |   **799** | 12-col **7 / 5**, `gap: 48px`; **479 × 638** image right                  |
| 3  | capabilities   | `<section id="capabilities" class="section">`  | `#ffffff`           | 917 |   **869** | the **7 × 5** matrix, `min-w-[680px]` in an `overflow-x-auto` wrapper     |
| 4  | projects       | `<section id="projects" class="section">`      | `#f3f4f6`           |1786 |   **952** | `<ul>` 3 × **389** cards, `gap: 24px`                                     |
| 5  | certifications | `<section id="certifications">`                | `#ffffff`           |2738 |   **411** | `py-12`, **1 px hairline grid**, 8 cells **303 × 88**                     |
| 6  | process        | `<section id="process" class="section">`       | `#ffffff`           |3149 |   **592** | `<ol>` 3 numbered steps, `sm:grid-cols-3`                                 |
| 7  | contact        | `<section id="contact">`                       | `#31485f`           |3741 |   **440** | centred `max-w-3xl`, white pill + 2 px outline pill                       |
| 8  | footer         | `<footer>`                                     | `#111827`           |4181 |   **567** | `pt-16 lg:pt-24`, 12-col **4 / 5 / 3**, 4 column heads                     |

**Document height 4,748 px** at 1440 **and** at 1280 (identical — the container caps at 80 rem); **4,791** at
1024; **7,499** at 768; **8,157** at 390; **8,394** at 320. Band heights at the smaller widths, for the
responsive scenarios:

| width | hero  | capabilities | projects | certifications | process | contact | footer |
| ----: | ----: | -----------: | -------: | -------------: | ------: | ------: | -----: |
|  1440 |   799 |          869 |      952 |            411 |     592 |     440 |    567 |
|  1280 |   799 |          869 |      952 |            411 |     592 |     440 |    567 |
|  1024 |   818 |          869 |      908 |            431 |     616 |     440 |    591 |
|   768 | 1,309 |         893 |    2,659 |            609 |     604 |     376 |    947 |
|   390 | 1,102 |       1,049 |    2,036 |            985 |   1,004 |     472 |  1,407 |
|   320 | 1,213 |       1,085 |    1,919 |          1,005 |   1,112 |     508 |  1,451 |

`.section` is `padding-block: calc(var(--spacing) * 20)` = **80 px** (`py-20`) → **112 px** at `lg`
(`padding-block: 112px`, measured). The hero container is `py-14 px-4` (**56 / 16**) → `lg:py-20 lg:px-8`
(**80 / 32**). Tailwind's `container` resolves to **`max-width: 1,280 px`** at ≥ 1280 with `px-4` →
`lg:px-8`, so the content column is **1,216 px** at 1440 and 1280, **960 px** at 1024 and fluid below.
`#certifications` is the exception: `py-12` (**48 px**) at every width.

Fixed chrome, out of flow: `#preloader` (`fixed inset-0 z-[100]`, `bg-ink-50`, dark `#030712`, removed on
`load`), `#scroll-progress` (**2 px** = `h-0.5`, `top-0 left-0 z-[60]`, `bg-primary-600`, `width: 0%` inline),
`#back-to-top` (48 px disc, `bottom-6 right-6`, `z-50`, `opacity: 0; pointer-events: none; translateY(16px)` at
rest), `#cookie-consent` (`bottom-0`, `z-50`, inline `translateY(100%)` until shown). The licence bar is **in
flow**, not fixed, and it scrolls away — so the sticky header's own top edge moves up as the bar leaves.

## Design tokens (measured from `Base.C9x0H87u.css`, 55,238 B, plus `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values** in
> the compiled utilities, so the sheet contains **no `--color-primary-*` / `--color-ink-*` custom properties** —
> only Tailwind's generated defaults (`--color-white`, `--color-black`, the stock green/red/amber oklch ramps,
> `--radius-lg .5rem` / `xl .75rem` / `2xl 1rem`, `--spacing .25rem`). The two ramps below were reconstructed by
> parsing every `bg-` / `text-` / `border-` / `ring-` / `divide-` / `from-` rule for `primary-*` and `ink-*`
> (including the `/40` and `/50` opacity forms), then confirmed against `getComputedStyle` on the rendered
> page. Declare them in the app's own `@theme`.

### `primary` — steel blue (the brand)

| step | hex       | used for                                                                                    |
| ---- | --------- | -------------------------------------------------------------------------------------------- |
| 50   | `#f1f4f7` | `hover:bg-primary-50` on the white contact pill, `from-primary-50`                            |
| 100  | `#e2e8ee` | **the `#contact` lede ink** (`text-primary-100`), `bg-primary-100/40`                          |
| 200  | `#c4d0dc` | `border-primary-200`, `text-primary-200` (dark-mode lede), `bg-primary-200/50`                 |
| 400  | `#6b87a3` | **every `dark:` accent** (`dark:text-primary-400` on eyebrows, ticks, step numbers)            |
| 500  | `#4e6b89` | focus ring, `text-primary-500` in dark chrome, `text-primary-500/20` on the back-to-top shadow |
| 600  | `#3c5a78` | **every filled CTA** (header, hero, footer, cookie accept, back-to-top, progress bar), **the matrix ticks**, **every eyebrow on the light bands** |
| 700  | `#31485f` | **the `#contact` band ground**, `hover` fill for every CTA, the **process** eyebrows and step promises (`text-primary-700`) |

Steel blue is a **flat fill, never a gradient**. The page has **no gradients at all** — no washes, no overlays,
no text gradients.

### `ink` — cool slate (all text and hairlines)

| step | hex       | used for                                                                                     |
| ---- | --------- | --------------------------------------------------------------------------------------------- |
| 50   | `#f3f4f6` | **the hero ground**, **the projects ground**, the preloader ground, `hover:bg-ink-50` on the dark toggle |
| 100  | `#e5e7eb` | **header bottom border**, matrix row rules, project-card `<dl>` rules, process step rules        |
| 200  | `#d1d5db` | **hero band bottom border**, **certifications hairline ground** (`bg-ink-200` with `gap-px`), the certifications `border-y` |
| 300  | `#9ca3af` | **the "See projects" outline border**, `placeholder:text-ink-300` (no input on this page)        |
| 400  | `#6b7280` | **`dt` labels** in the project `dl`, the hero fact-table `<th>` row labels, both sample-data footnotes |
| 500  | `#4b5563` | **body / lede ink** — every `p` under a heading; the dark toggle glyph                            |
| 600  | `#374151` | **nav labels** (`text-ink-600`), the burger glyph                                                 |
| 700  | `#1f2937` | secondary-button labels, the phone pill label (`text-ink-800` on the light HERO only — see below)  |
| 800  | `#111827` | **every `h1` / `h2` / `h3`**, the licence bar ground, `dd` values, the phone pill label           |
| 900  | `#0a0f1a` | emitted for `bg-ink-900` (used by sibling builds, not visible here)                               |

### Stock Tailwind greys — exactly four jobs

| token              | hex       | job                                                                |
| ------------------ | --------- | -------------------------------------------------------------------- |
| `gray-900`         | `#111827` | **footer ground**                                                     |
| `gray-800`         | `#1f2937` | footer social chips, `border-gray-800` footer rule                    |
| `gray-950`         | `#030712` | **dark-mode page ground** (`body`), every dark band ground             |
| `gray-400/500/600` | `#9ca3af` / `#6b7280` / `#4b5563` | footer link ink, footer legal ink, cookie copy                |
| `gray-700`         | `#374151` | `dark:` borders on chips, pills and the matrix rules                   |

### Type

| role                | size / line / weight / tracking                                              |
| ------------------- | ----------------------------------------------------------------------------- |
| `h1`                | 36 → **48** (`sm:text-5xl`) / **52.8** (`leading-[1.1]`) / **700**, `tracking-tight` (**−1.2 px**) |
| `h2`                | 30 → **36** (`sm:text-4xl`) / **40** / **700**, `tracking-tight` (**−0.9 px**; **−0.75 px** at 30) |
| `h3`                | **18** / 28 / **700** (`text-lg`)                                              |
| certification cell  | 16 / 24 / **700** (`text-base`, `tracking-tight`); sub-line 14 / 20 / 400 `#6b7280` |
| project card meta   | 12 / 16 / **700** uppercase `+0.3 px` (`text-xs tracking-wide`) in `#3c5a78`      |
| lede (`text-lg`)    | **18** / **28** (1.556) / 400 `#4b5563`                                         |
| body                | 16 / 24 / 400                                                                  |
| eyebrow             | 14 / 20 / **700** uppercase **+0.35 px** (`tracking-wide`) — `#3c5a78` on the light bands, `#31485f` in `#process` |
| hero fact table     | `th` 14 / 20 / **500** `#6b7280`; `td` 14 / 20 / **600** `#111827`              |
| nav label           | 14 / 20 / **600** `#374151`                                                     |
| footer column head  | 14 / 20 / **600** uppercase **+0.7 px** (`tracking-wider`) in white             |

### Shape, shadow, rhythm

| token            | value                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `--radius-lg`    | **8 px** — every button, CTA, pill *box* (cookie buttons, social chips), cert-grid shell       |
| `--radius-xl`    | **12 px** — the hero image, the three project cards                                            |
| full radius      | the **phone pill** and **city pill**, back-to-top, every icon button's circle (6 uses)         |
| header shadow    | `shadow-lg` past **50 px** of scroll (class toggled, height unchanged)                          |
| container        | `max-width: 80rem`; `px-4` → `lg:px-8` (**1,216 px** of content at ≥ 1280)                      |
| section rhythm   | `py-20` (**80**) → `lg:py-28` (**112**); `#certifications` is `py-12` (**48**)                  |
| matrix geometry  | cells `padding: 14px 12px`, rows **53 px** at ≥ 1024 (77 px when a sector head wraps), tick **20 × 20** |
| breakpoints used | `sm 640` · `md 768` · `lg 1024` · **`xl 1280`** (nav + CTA) · **`2xl 1536`** (city pill)        |

## Content inventory (verbatim copy; paraphrase the brand, never the operational detail)

**Licence bar** (`data-licence-bar`, 37 px, `bg-ink-800`, `text-xs text-ink-100`, `h-9`, container-aligned):
three `<li>` items — **"Master plumber #000205"** (always visible), **"OSHA 30 · EMR 0.71"** and
**"Bonded to $5M"** (both `hidden sm:flex`). At 390 only the licence number survives. This strip is the
design's sharpest idea: the credentials a contractor puts on the *van* are the first thing on the page.

**Header** (sticky, `bg-white/90 backdrop-blur-lg`, `border-b border-ink-100`, **81 px** ≥ 1280 / **65 px**
below). Logo (150 × 32 → 36). Desktop nav (`xl`+, `gap-7` = 28 px, 14/600 `#374151`): **Capabilities ·
Projects · Sectors · Certifications · Careers · About**. Right cluster: **city pill "Cleveland, OH"**
(`2xl` only — **not visible at 1440**), **phone pill "(555) 010-0205"** (`md`+), a **dark-mode toggle**
(`aria-label="Toggle dark mode"`, sun/moon glyphs swapped by `dark:`), the CTA **Request a quote**
(**177 × 54**, `bg-primary-600`, 14/700 white, `px-5 py-2.5`, `xl`+ only), and the burger (`xl:hidden`,
`aria-label="Open menu"`). The mobile panel repeats all six items, then a rule-separated row of the two pills
(phone · city), then a full-width **Request a quote**.

**Hero** (`#f3f4f6`, 12-col 7 / 5). Eyebrow `Commercial and industrial mechanical contractor`. `h1`
**"Plant rooms, process pipework, and the paperwork that comes with them."** Lede: *"We work in live hospitals,
food production and school estates, where the sequencing matters more than the pipework and the documentation is
half the job."* CTAs **Request a quote** (`#3c5a78`, white, **177 × 54**, radius 8) and **See projects**
(1 px `#9ca3af`, `#1f2937` label, same geometry). Below them, a `<table>` (`mt-10`, `max-w-md` = 448) of four
`th`/`td` rows:

| th                 | td                            |
| ------------------ | ----------------------------- |
| Founded            | **1998**                      |
| Engineers          | **64 directly employed**      |
| EMR                | **0.71 (3-year average)**     |
| Bonding capacity   | **$5M single, $12M aggregate** |

Right column: one photograph, *"A commercial plant room during installation"*, **3:4 portrait at `lg`**
(`aspect-[3/4]`, 479 × 638) and **4:3 below it** (`aspect-[4/3]`, 358 × 269 at 390), `rounded-xl`.

**`#capabilities`.** Eyebrow `Capabilities`. `h2` **"What we do, and where we have done it"**. Lede: *"The
question a facilities manager actually asks is not whether we can do the work, but whether we have done it in
their sector."* Then a real `<table>` with `<caption class="sr-only">Capabilities by sector</caption>`, one
`<th scope="col">` **Capability** plus five sector heads — **Healthcare · Education · Food & bev · Industrial ·
Commercial** — and seven `<th scope="row">` rows. A tick is a 20 × 20 `#3c5a78` check `<svg>`; a refusal is an
em-dash `<span aria-hidden="true">` in `#d1d5db`. **Every cell also carries an `sr-only` sentence** — the
accessible matrix is 35 sentences of the form *"Plant room replacement in Healthcare: yes"* / *"…: no"*.

| # | capability (`th scope="row"`)      | HC | Ed | F&B | Ind | Com |
| - | ---------------------------------- | -- | -- | --- | --- | --- |
| 1 | Plant room replacement             | ✓  | ✓  | ✓   | ✓   | ✓   |
| 2 | Process pipework                   | —  | —  | ✓   | ✓   | —   |
| 3 | Medical gas                        | ✓  | —  | —   | —   | —   |
| 4 | Water compliance and legionella    | ✓  | ✓  | ✓   | ✓   | ✓   |
| 5 | Planned maintenance contracts      | ✓  | ✓  | ✓   | ✓   | ✓   |
| 6 | Drainage and pump stations         | ✓  | ✓  | ✓   | ✓   | —   |
| 7 | Steam and condensate               | ✓  | —  | ✓   | ✓   | —   |

**25 ticks, 10 em-dashes.** Keep the ragged shape exactly — the two rows of all-five and the single-tick
`Medical gas` row are the argument. Footnote: *"Sample matrix for template demonstration. Replace the
capabilities, sectors and ticks with your own before launch."*

**`#projects`.** Eyebrow `Projects`, `h2` **"Three recent jobs"**, lede *"Each with the scope, the duration and
the value band, because that is what a bid list is screened on."* A `<ul>` of three cards (389 wide, `rounded-xl`
white, 1 px `#d1d5db`), each **4:3 image + eyebrow + linked `h3` + blurb + a two-cell `<dl>`** pinned to the
card foot by a rule:

| card | sector eyebrow | `h3` (linked) | blurb | value band | duration |
| ---- | -------------- | ------------- | ----- | ---------- | -------- |
| 1 | Healthcare | **Acute hospital plant room replacement** | Two 1970s calorifiers replaced in a live acute hospital with no interruption to theatre or ward hot water. | **$1m - $2.5m** | **16 weeks** |
| 2 | Food and beverage | **Food-grade process pipework install** | Stainless process lines for a dairy expansion with full weld traceability and documented passivation. | **$2.5m - $5m** | **22 weeks** |
| 3 | Education | **Multi-site water compliance programme** | Fourteen schools assessed, remediated and brought under one monitoring regime across two summers. | **$500k - $1m** | **Two summers** |

**`#certifications`.** `py-12` white band, eyebrow `Prequalification`, `h2` **"What is in the pack"**, then an
`<ul>` that is **one hairline table made of list cells**: `grid gap-px overflow-hidden rounded-lg bg-ink-200`
with `bg-white p-5` cells, **2 columns at `sm`, 4 at `lg`** (303 × 88 at 1440). Eight cells, each a bold title
and a quiet sub-line:

| title                    | sub-line                          |
| ------------------------ | --------------------------------- |
| **Master plumber licence** | #000205, Ohio                   |
| **OSHA 30**              | All supervisors, refreshed annually |
| **EMR 0.71**             | Three-year average                |
| **$5M bonding**          | Single project capacity           |
| **ASME B31.3**           | Process piping procedures         |
| **Medical gas certified** | ASSE 6010 installers             |
| **ISO 9001**             | Quality management                |
| **$10M liability**       | Certificates on request           |

Footnote: *"Sample accreditations for template demonstration. Replace with your own before launch, and never
list a certification you do not hold."*

**`#process`.** Eyebrow `How we work` (**`text-primary-700`**, the only eyebrow that uses 700), `h2` **"Bid,
mobilise, commission, hand over"**, lede *"The stage most contractors handle badly is the last one, so it is the
one we resource properly."* An `<ol>` of three steps (`sm:grid-cols-3`), each: a **number + a 1 px rule that
fills the remaining width** (`01` `#3c5a78` tabular-nums, `<span class="h-px flex-1 bg-ink-100">`), then `h3`,
body, and a **promise line** in 14/700 `#31485f`:

1. **Bid and prequalification** — *"We price from drawings and a site walk, and the prequalification pack goes
   back with the bid rather than three weeks later."* → **Usually 10 working days**
2. **Mobilise and sequence** — *"Sequencing is agreed with your operations team before anything is ordered,
   because in a live building that is what decides the programme."* → **Agreed, not imposed**
3. **Commission and hand over** — *"Witnessed commissioning, O&M manuals and the training session, all
   delivered at practical completion rather than chased afterwards."* → **Documentation at PC**

**`#contact`.** The only blue band: `#31485f`, `py-20 lg:py-28` (**440 px**), centred `max-w-3xl`. `h2`
**"Have a set of drawings?"** (white, 36/700), lede *"Send them over and we will come back with a priced bid and
a prequalification pack."* (`#e2e8ee`, capped at 576). Two CTAs: **Request a quote** (white ground, `#31485f`
label, 16/700, `px-8 py-4`, radius 8, `hover:bg-primary-50`) and **See capabilities** (**2 px** `white/40`
border, white label, `hover:border-white hover:bg-white/10`), side by side at `sm`+ and full-width stacked
below.

**Footer** (`#111827`, 16/24 `#d1d5db`, `pt-16 lg:pt-24`). 12-col **4 / 5 / 3**: brand column with the
**190 × 40** light logo, blurb *"Commercial and industrial mechanical contractor. Plant rooms, process
pipework, statutory compliance and planned maintenance across the Midwest."*, **three 40 px social chips**
(`rounded-lg bg-gray-800 p-2.5`, `aria-label` Twitter / Instagram / LinkedIn), then address **4100 Industrial
Parkway, Cleveland, OH 44135**, phone **(555) 010-0205**, **bids@steelworksmech.example**. Middle: three
sub-columns of **Capabilities** (Plant rooms · Process pipework · Statutory compliance · Planned maintenance) ·
**Company** (Projects · Sectors · Certifications · Careers) · **Support** (Request a quote · About · Privacy ·
Terms). Last: **Prequalification** — *"Insurance certificates, safety statistics and trade references are
available on request for prequalification packs."* plus a `bg-primary-600` **Request a quote** button. Bottom
bar (`mt-16 border-t #1f2937 py-8`, 14 px `gray-500`): `© 2026 Steelworks Mechanical. All rights reserved.` +
`Privacy Policy` / `Terms of Service`.

**Cookie strip** (87 px, `role="dialog" aria-label="Cookie consent"`): *"We use cookies to enhance your
experience. By continuing to visit this site you agree to our use of cookies."* with **Decline** (1 px
`#d1d5db` outline) and **Accept All** (`#3c5a78`, white).

## Interaction inventory

| behaviour             | contract                                                                                                                             |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Dark-mode toggle      | Flips `.dark` on `<html>` and stores `theme` = `dark` / `light`. On first paint `dark` is applied when `localStorage.theme === 'dark'` **or** when the key is absent and `prefers-color-scheme: dark` matches. Light is the default in a fresh profile. |
| Mobile menu           | `aria-expanded` flip on `[data-mobile-toggle]`, `hidden` toggle on `[data-mobile-menu]`, and a **burger ↔ ✕ glyph swap** (the `<path d>` is replaced, not rotated). No accordion — all six links are flat. |
| Header shadow         | Past **50 px** of scroll the header gains `shadow-lg`; below it the class is removed. Height never changes (**81**/**65** px).           |
| Scroll progress       | **2 px** `#3c5a78` bar, width = `scrollY / (scrollHeight − innerHeight) × 100 %`, `fixed top-0 z-[60]`.                                   |
| Back-to-top           | 48 px `#3c5a78` disc, `shadow-primary-600/25`, `fixed bottom-6 right-6`; `opacity: 0; pointer-events: none; translateY(16px)` below **300 px** of scroll, visible above it, smooth-scrolls to 0. |
| Cookie strip          | Appears **1,500 ms** after load unless `localStorage['cookie-consent']` is set; slides up from `translateY(100%)`. `Accept All` stores `accepted`, `Decline` stores `essential`; either slides out and **removes the node**. |
| Preloader             | `#preloader` covers the viewport at `z-[100]` with a spinning 40 px ring (`border-4`, `border-t-primary-600`). On `load` it fades to `opacity: 0` and is removed after 300 ms. |
| Smooth in-page scroll | Every `a[href^="#"]` except bare `#` scrolls to `target.top − (header.offsetHeight + 20)` and pushes the hash.                            |
| Active nav link       | The attribute exists (`data-nav-link="/capabilities"`) but **never matches** — the kit resolves it with `getElementById('/capabilities')`, which is null on every page. Dead code; do not port it. |
| Matrix                | **Static.** No filtering, no hover reveal, no expand-on-mobile: below 1024 the table keeps its `min-w-[680px]` and the *wrapper* scrolls horizontally (680 px table in a 358 px wrapper at 390). |
| Forms                 | **None on the home page.** The quote form lives on `/rfq/` (`company`, `name`, `email`, `site`, `sector`, `value`, `timeline`, `drawings`, `scope` + submit). Do **not** invent a hero form, a newsletter input or a contact form. |

## Inner-page inventory (authoritative for anything the home page only summarises)

All twelve are live at a trailing-slash URL and share the same chrome, licence bar, cookie strip and footer.

- **`/capabilities/`** — the long-form version of the matrix: per-trade sections with scope, typical jobs and
  the sector list each trade covers.
- **`/projects/`** — the full job list the home page trims to three, same card grammar.
- **`/projects/hospital-plant-room/`**, **`/projects/food-process-pipework/`**,
  **`/projects/school-compliance-programme/`** — the three detail pages the home cards link to: scope, programme,
  constraints, outcome, and the same value band / duration pair.
- **`/sectors/`** — the five sector columns as prose: what changes in a live hospital, a food plant, a school
  estate.
- **`/certifications/`** — the prequalification pack as a document: every certificate, its number and its
  expiry — the detail behind the eight cells.
- **`/careers/`** — the only inner page with a **`#service-areas` id**; the home page's two `#service-areas`
  anchors resolve here and nowhere else (see §Reference defects).
- **`/about/`**, **`/rfq/`** (`h1` *"Request a quote"*, `h2` *"What you get back"*, the nine-field form),
  **`/privacy/`**, **`/terms/`**.

The recreation is **single-page**: `#capabilities` carries the matrix, `#projects` the three cards (linking
in-page or to `#contact`), and the quote CTAs resolve to `#contact`. State the substitution in the PR.

## Screenshot analysis (`steelworks-template.jpg`, 2400 × 1892, served as a real `image/jpeg`)

This is a **marketing composition, not a browser capture**: the page sits inside a **macOS window frame** (three
traffic-light dots, a grey `#f3f4f6` desktop ground with a 24 px inset) and the crop shows only the top
~1,900 px — licence bar, header, the whole hero, and the matrix's header row. It is rendered at a width where
the **city pill is visible**, i.e. **≥ 1536 px**, so a 1440 screenshot of the live page looks slightly emptier
at the right of the header. **Do not adopt the window frame or the grey desktop ground** — they are the
catalogue's presentation, not the design.

Inside the frame, what the shot confirms about the design: a **near-black 36 px licence strip** with three tiny
credential pairs; a **white header** with the wordmark at the far left, six small nav labels centred, and the
three-part right cluster (city pill, phone pill, blue CTA); a **flat grey hero** carrying a five-line
**near-black headline at 48 px**, a two-line grey lede, a **blue filled button next to a hairline-outline
button**, and a **four-row fact table** whose labels are grey and values near-black; and on the right a
**portrait 12 px-radius photograph of a plant room**. Below it the white matrix band opens with a blue
uppercase eyebrow, a bold `h2`, a grey lede, and the table's header row — **CAPABILITY** left, five sector
heads centred over a 2 px rule. The overall read is *calm, documentary, credential-first* — nothing on the page
shouts, and there is no photograph competing with the hero's.

## Reference defects (fix in the recreation; do not reproduce)

1. **Two `#service-areas` anchors that resolve to nothing on the home page.** The header city pill and the
   mobile panel's city pill both point at `#service-areas`; the home page has **0** elements with that id, and
   across the seven fetched inner pages the id exists only on **`/careers/`**. Point them at a real in-page
   target (the footer's address line, or `#contact`).
2. **One malformed `tel:(555) 010-0205`** in the footer — parentheses and a space inside a `tel:` URI. The two
   header pills are well formed (`tel:5550100205`).
3. **Three dead `href="#"`** — the footer's Twitter, Instagram and LinkedIn chips.
4. **The JSON-LD is structurally broken.** `"@context":"https://***@type":"PlumbingContractor"` means the
   `@context` value absorbed `schema.org"` and the `"@type"` key, so the block has **no `@type`** and describes
   nothing. If the port ships structured data, write it correctly —
   `{"@context":"https://schema.org","@type":"PlumbingContractor",…}`.
5. **`data-nav-link` is inert.** The kit looks the value up with `getElementById('/capabilities')`; the ids on
   the page are `capabilities`, `projects`, … with no leading slash, so the active-nav observer collects an
   empty list and returns. Port an in-page active-section highlight only if you want it — it is not in the
   reference's behaviour.
6. **The matrix has no small-screen story beyond scrolling.** At 390 the table is 680 px wide inside a 358 px
   wrapper: the reader must swipe sideways and the row labels leave the viewport. Reproduce the geometry for
   parity, but **sticky-position the row-label column** (`position: sticky; left: 0` with the `bg-white` cell
   ground) so the capability name stays visible while the sectors scroll — a fix, not a redesign.
7. **The credential strip competes with the sticky header.** The licence bar is in flow, so the sticky header's
   top edge jumps by 37 px the moment the bar scrolls away. Keep the bar in flow (parity) and make sure no
   in-page anchor lands under the header — every anchor needs `scroll-margin-top ≥ headerHeight + 37`.
8. **The preloader can flash on a cached load.** It is a `fixed inset-0` opaque overlay removed only on `load`;
   derive readiness in the React port (`loaded || document.readyState === 'complete'`, see
   `docs/conventions.md` §Effects) rather than effect-writing state.
9. **The dark-mode default is environment-dependent** (`prefers-color-scheme` when the key is absent). Keep that
   behaviour, but make the toggle's `aria-label` and `aria-pressed` reflect the current mode.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Landmarks and skip link

- **GIVEN** the page is loaded
- **THEN** the first focusable element is "Skip to content" targeting `#main-content`, hidden until focused and
  then a `#3c5a78` pill at `left-4 top-4` with `z-[80]`
- **AND** the document has exactly one `<h1>`, one `<main id="main-content">`, one `<header>` and one `<footer>`
- **AND** the `h1` lives in the hero band, not inside a card

#### Scenario: No horizontal overflow at any audited width

- **GIVEN** widths 320 / 390 / 768 / 1024 / 1280 / 1440
- **THEN** `body.scrollWidth === documentElement.clientWidth` at every one of them, and
  `window.scrollTo(200, 0)` leaves `window.scrollX === 0`
- **AND** the only scrollable thing on the page is the **matrix wrapper** (`overflow-x: auto`, 680 px table in a
  358 px wrapper at 390) — its scroll never moves the document

#### Scenario: Fixed chrome

- **THEN** `#scroll-progress` is **2 px** tall, `#3c5a78`, fixed at `top-0 z-[60]`, width = scroll fraction
- **AND** the back-to-top disc is **48 × 48**, full radius, `#3c5a78` with a `primary-600/25` shadow, fixed
  `bottom-6 right-6`, invisible (`opacity: 0`, `pointer-events: none`) below **300 px** of scroll
- **AND** the cookie strip is a `role="dialog"` `aria-label="Cookie consent"` that slides up **1,500 ms** after
  load unless `localStorage['cookie-consent']` is set, with `Decline` (outline) and `Accept All` (`#3c5a78`)
  storing `essential` / `accepted` and then removing the node
- **AND** the preloader covers the viewport at `z-[100]` on `#f3f4f6` and is gone once the document is ready

#### Scenario: No reveal animation

- **THEN** no band, card or heading fades, slides or staggers in — the reference ships **zero
  `[data-animate]` elements**, and adding motion here is a fidelity regression

### Feature: Licence bar

#### Scenario: Licence bar at 1440

- **THEN** a **37 px** strip (`h-9` + 1 px border) on `#111827` sits **above** the header, in flow, inside the
  same 1,216 px container
- **AND** it reads **Master plumber #000205** · **OSHA 30 · EMR 0.71** · **Bonded to $5M** as 12 px
  `#e5e7eb` text with `opacity-70` labels and 600-weight values
- **AND** items 2 and 3 are `hidden` below `sm` (at 390 only the licence number shows)

### Feature: Sticky header

#### Scenario: Header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** tall (80 + 1 px border), `position: sticky`, `top: 0`, `z-50`, ground
  `#fff` at **90 %** with `backdrop-filter: blur(16px)`, bottom border 1 px `#e5e7eb`
- **AND** the logo renders **150 × 32** (`lg` 36) from an original mark (never the source SVG)
- **AND** the six nav labels are 14/20 **600** `#374151` with `gap: 28px`, `hover:text-primary-700`
- **AND** the phone pill is full radius, 1 px `#d1d5db`, 14/600 `#111827`, `padding: 6px 12px`, phone glyph
- **AND** the CTA is **177 × 54**, radius **8**, `#3c5a78`, white 14/**700**, `hover:bg-primary-700`
- **AND** the dark toggle and burger are **40 × 40** icon buttons (`rounded-lg p-2`), `aria-label`
  "Toggle dark mode" / "Open menu"
- **AND** **no city pill is visible at 1440** — it appears only at ≥ 1536 (`2xl`)

#### Scenario: Nav collapses at 1280, not 1024

- **GIVEN** widths 1024 / 1100 / 1279
- **THEN** the desktop nav and the header CTA are both hidden (`xl:`), the burger is visible and the header is
  **65 px** (measured at 1024, 1100, 1279)
- **AND** at 1280 the six labels, the phone pill, the toggle and the CTA all render and the header is **81 px**
- **AND** between 1024 and 1279 nothing overlaps: the nav keeps `min-w-0` and the city pill is held back to
  `2xl` (the source's own comment records the buried-links bug this fixed)

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport with the burger pressed
- **THEN** `aria-expanded` flips to `true`, the burger glyph becomes ✕, and the panel shows the six links at
  16/600 `#1f2937` with 12 px block padding
- **AND** below a rule the phone and city pills sit side by side, then a full-width `#3c5a78`
  **Request a quote**
- **AND** the panel closes on a second press and on `Escape`

#### Scenario: Header shadow

- **THEN** past **50 px** of scroll the header gains `shadow-lg` and loses it on the way back; the height, the
  blur and the border never change

### Feature: Hero

#### Scenario: Hero at 1440

- **THEN** the band is **799 px** on `#f3f4f6`, `py-20 px-8`, content **1,216**, 12-col **7 / 5** with
  `gap: 48px`
- **AND** the eyebrow is **14/700 uppercase `#3c5a78` with +0.35 px tracking**
- **AND** the `h1` is **Manrope 700, 48/52.8, `#111827`**, `max-w-2xl` (**672**), tracking −1.2 px
- **AND** the lede is 18/28 `#4b5563` at `max-w-xl` (**576**)
- **AND** the two CTAs are **177 × 54** at radius 8: **Request a quote** (`#3c5a78`, white 16/700) and
  **See projects** (1 px `#9ca3af`, `#1f2937` label, `hover:border-primary-600 hover:text-primary-700`)
- **AND** the fact table is `mt-10`, `max-w-md` (**448**), four rows with 1 px `#e5e7eb` rules, `th` 14/500
  `#6b7280` at `w-2/5`, `td` 14/600 `#111827`, **Founded / Engineers / EMR / Bonding capacity** →
  **1998 / 64 directly employed / 0.71 (3-year average) / $5M single, $12M aggregate**
- **AND** the image column renders **479 × 638** (`aspect-[3/4]`) at radius 12

#### Scenario: Hero stacks below `lg`

- **GIVEN** a 390 px viewport
- **THEN** the text column is full width, the `h1` drops to **36 px**, and the image follows the fact table at
  **358 × 269** (`aspect-[4/3]`, radius 12)
- **AND** the band height becomes **1,102** at 390 and **1,213** at 320 (the CTAs may wrap; the fact table keeps
  its 2/5–3/5 split)

### Feature: `#capabilities` — the matrix

#### Scenario: Matrix at 1440

- **THEN** the band is **869 px** of white with `py-28`, a `max-w-2xl` header block, and the table **1,216** wide
  with no horizontal scroll
- **AND** the table is a real `<table>` with `<caption class="sr-only">Capabilities by sector</caption>`,
  **six columns** (**Capability** + Healthcare · Education · Food & bev · Industrial · Commercial) and **seven
  rows**
- **AND** the header row sits over a **2 px** `#d1d5db` rule, sector heads are 14/700 `#374151` centred, and the
  row labels are 16/600 `#111827` left-aligned with `padding-right: 24px`
- **AND** every cell is `padding: 14px 12px` and **53 px** tall, the tick is a **20 × 20** `#3c5a78` check, and a
  refusal is an em-dash in `#d1d5db` marked `aria-hidden="true"`
- **AND** the tick pattern is exactly the seven rows in §Content inventory — **25 ticks and 10 em-dashes**

#### Scenario: The matrix is accessible without the ticks

- **GIVEN** a screen reader
- **THEN** every one of the 35 cells carries an `sr-only` sentence of the form
  *"Plant room replacement in Healthcare: yes"* / *"…: no"*
- **AND** the tick SVGs are `aria-hidden="true"` (they duplicate the sentence)
- **AND** the band's footnote reads *"Sample matrix for template demonstration. Replace the capabilities,
  sectors and ticks with your own before launch."*

#### Scenario: Matrix below 1024

- **GIVEN** a 390 px viewport
- **THEN** the wrapper is `overflow-x: auto`, the table keeps `min-width: 680px`, and the wrapper measures
  **358** (390) / **288** (320) wide
- **AND** the row-label column is **sticky to the left edge** so the capability name stays visible while the
  sector columns scroll
- **AND** the band grows to **1,049** px at 390 and **1,085** at 320

### Feature: `#projects`

#### Scenario: Projects at 1440

- **THEN** the band is **952 px** on `#f3f4f6`; eyebrow `Projects`, `h2` 36/700 −0.9 px, lede 18/28 in
  `max-w-2xl`
- **AND** the `<ul>` is three columns at `lg` with `gap: 24px`, cards **389** wide, `rounded-xl` white with a
  1 px `#d1d5db` border
- **AND** each card is **4:3 image + `p-6` body**: 12/700 uppercase steel-blue sector eyebrow, linked 18/700
  title, 14/28 `#4b5563` blurb, then a `<dl>` pinned to the foot by a 1 px `#e5e7eb` rule with two cells —
  `dt` 12/500 `#6b7280`, `dd` 14/700 `#111827` — **Value band** and **Duration**
- **AND** the three cards carry the sector / title / blurb / value / duration values in §Content inventory
  verbatim

#### Scenario: Projects stack

- **GIVEN** widths 768 and 390
- **THEN** the list is one column and the band grows to **2,659** (768) and **2,036** (390) px
- **AND** each card's `<dl>` stays a two-cell row (never stacked)

### Feature: `#certifications` — the hairline grid

#### Scenario: Grid at 1440

- **THEN** the band is **411 px** with `py-12` and 1 px `#d1d5db` top **and** bottom borders
- **AND** the header block is `mb-8`: eyebrow `Prequalification`, `h2` **24 px** (`text-2xl`) 700 `#111827`
- **AND** the eight cells form **one** grid: `display: grid`, **`gap: 1px`**, ground `#d1d5db`, shell
  `overflow-hidden rounded-lg`, **2 columns at `sm`, 4 at `lg`** — cells **303 × 88** at 1440 (`p-5`, white)
- **AND** each cell is a 16/700 `#111827` title with `tracking-tight` over a 14/400 `#6b7280` sub-line
- **AND** the cells are **not** individually bordered — the 1 px gaps *are* the rules; adding borders doubles them
- **AND** the footnote reads *"Sample accreditations for template demonstration. Replace with your own before
  launch, and never list a certification you do not hold."*

#### Scenario: Grid reflows

- **GIVEN** widths 1024 / 768 / 390 / 320
- **THEN** the band is **431 / 609 / 985 / 1,005** px and cells measure **239 × 108 / 368 × 88 / 358 × 88 /
  288 × 88**

### Feature: `#process`

#### Scenario: Process at 1440

- **THEN** the band is **592 px** of white, eyebrow **`How we work` in `#31485f`** (the only 700-weight eyebrow
  colour), `h2` 36/700, lede 18/28 in `max-w-2xl`
- **AND** the `<ol>` is **three columns at `sm`** with `gap: 24px` and `mt-12`
- **AND** each step opens with a **`tabular-nums` number in 14/700 `#3c5a78`** followed by a **1 px `#e5e7eb`
  rule that fills the remaining width** (`h-px flex-1`)
- **AND** then 18/700 `#111827` `h3`, 16/28 `#4b5563` body, and a **14/700 `#31485f` promise line**
  (**Usually 10 working days** / **Agreed, not imposed** / **Documentation at PC**)
- **AND** the three step titles, bodies and promises match §Content inventory verbatim

### Feature: `#contact` — the steel-blue band

#### Scenario: Band at 1440

- **THEN** the band is **440 px** of `#31485f` with `py-28`, content centred in `max-w-3xl`
- **AND** the `h2` is 36/40/**700** with −0.9 px tracking in **white**, the lede 18/28 in **`#e2e8ee`** capped
  at 576
- **AND** the CTAs are **Request a quote** (white ground, `#31485f` 16/700, `px-8 py-4`, radius 8,
  `hover:bg-primary-50`) and **See capabilities** (**2 px** `white/40` border, white 16/700,
  `hover:border-white hover:bg-white/10`), side by side at `sm`+ and full-width stacked below
- **AND** the band is the only large steel-blue surface on the page

### Feature: Footer

#### Scenario: Footer at 1440

- **THEN** the footer is **567 px** on `#111827` with `pt-24` and 16/24 `#d1d5db` body
- **AND** the 12-col grid is **4 / 5 / 3** (`gap: 32px`): brand **384**, three link columns inside **488**,
  prequalification **280**
- **AND** the brand column holds a **190 × 40** light logo, a `max-w-xs` `gray-400` blurb, three **40 px**
  social chips (`rounded-lg bg-gray-800 p-2.5`), then address / phone / email as `gray-400` links
- **AND** the four column heads are 14/600 uppercase **+0.7 px** white; links are 16/400 `gray-400`,
  `hover:text-white`
- **AND** the last column is headed **Prequalification** with its blurb and a `#3c5a78` **Request a quote**
- **AND** the bottom bar is `mt-16 border-t #1f2937 py-8`, 14 px `gray-500`: `© 2026 {Brand}. All rights
  reserved.` plus `Privacy Policy` / `Terms of Service`

### Feature: Content parity

#### Scenario: The sample-data caveats survive

- **THEN** the page keeps all three caveats — *"Sample matrix for template demonstration…"*, *"Sample
  accreditations for template demonstration… never list a certification you do not hold."*, and the *"sample
  matrix"* footer note — because the honesty is the design
- **AND** the operational copy (value bands, durations, EMR 0.71, the three promises) is preserved verbatim;
  only the brand name is replaced
- **AND** the footer links `https://www.componentdock.com/` and no ColorLib string appears in any app file,
  comments included

#### Scenario: Dark mode

- **GIVEN** the toggle is activated
- **THEN** `<html>` gains `.dark`, `localStorage.theme` becomes `dark`, the body ground becomes `#030712`,
  the hero becomes `#111827`, every white band becomes `#030712`, the projects band becomes `#111827`, and
  `#contact` stays `#31485f`
- **AND** text inverts to `#f3f4f6`, headings to white, and every accent turns `primary-400` (`#6b87a3`)
- **AND** no light hairline survives — the matrix rules, card borders and the cert-grid gutter all move to
  `gray-700` / `gray-800`

## Verification checklist

- [ ] `apps/mandrel` exists, `@free-react-templates/mandrel` in `package.json`, `public/CNAME` =
      `mandrel.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included); the app never says "Steelworks"
- [ ] bands in this order: **licence bar** → sticky header → hero → `#capabilities` → `#projects` →
      `#certifications` → `#process` → `#contact` → footer (+ fixed preloader / progress / back-to-top / cookie)
- [ ] licence bar **37 px** `#111827` above the header, in flow; 3 credential pairs, last two `hidden` below `sm`
- [ ] header **81 px** sticky (`#fff`/90 + `blur(16px)`, 1 px `#e5e7eb`), **65 px** below `xl`; logo 150 × 32;
      six labels 14/600 `#374151` `gap-28`; phone pill; dark toggle; CTA 177 × 54 radius 8 `#3c5a78`;
      **city pill only at ≥ 1536**; `shadow-lg` past 50 px
- [ ] mobile panel: `aria-expanded`, burger↔✕ glyph swap, six links, phone + city pills, full-width CTA
- [ ] hero **799 px** on **`#f3f4f6`**, content 1,216, 7/5 split `gap-48`; eyebrow 14/700 uppercase `#3c5a78`
      +0.35; `h1` **48/52.8 700 `#111827`** at 672; lede 18/28 `#4b5563` at 576; two 177 × 54 radius-8 CTAs;
      four-row fact table at 448 (Founded / Engineers / EMR / Bonding capacity); image **479 × 638** radius 12,
      **3:4 at `lg`, 4:3 below**
- [ ] `#capabilities` **869 px** white; real `<table>` with `sr-only` caption, **6 × 7**, header rule 2 px,
      rows **53 px**, cells `14px 12px`, tick **20 × 20 `#3c5a78`**, refusal em-dash `#d1d5db`;
      **25 ticks / 10 em-dashes** in the exact pattern; 35 `sr-only` sentences; sample-matrix footnote;
      wrapper `overflow-x: auto` with **680 px** min-width and a **sticky row-label column**
- [ ] `#projects` **952 px** `#f3f4f6`; three **389** cards radius 12 `gap-24`; 4:3 image + `p-6`; sector
      eyebrow 12/700 uppercase; linked 18/700 title; `dl` with **Value band** / **Duration** pinned by a rule;
      values verbatim from §Content inventory
- [ ] `#certifications` **411 px**, `py-12`, `border-y`; **one** grid with `gap: 1px` on `#d1d5db` in a
      `rounded-lg overflow-hidden` shell, **2 → 4** columns, cells **303 × 88** `p-5`, eight credential pairs,
      sample-accreditation footnote
- [ ] `#process` **592 px** white; eyebrow in `#31485f`; `<ol>` 3 columns at `sm`; number + 1 px rule opener;
      18/700 title, 16/28 body, **14/700 `#31485f` promise**; three steps verbatim
- [ ] `#contact` **440 px** `#31485f` `py-28`; white `h2` 36/700; lede `#e2e8ee`; white pill + 2 px `white/40`
      outline pill
- [ ] footer **567 px** `#111827` `pt-24`; 12-col **384 / 488 / 280**; 190 × 40 light logo; three 40 px social
      chips; four uppercase column heads; **Prequalification** block with a `#3c5a78` CTA; bottom bar
      `mt-16 border-t #1f2937 py-8`
- [ ] chrome: 2 px `#3c5a78` progress bar, skip link, 48 px back-to-top past 300 px, cookie strip after
      1,500 ms storing `accepted` / `essential`, preloader removed when ready
- [ ] dark mode: `.dark` on `<html>`, `localStorage.theme`, ground `#030712`, hero `#111827`, ticks
      `primary-400`, no light hairline survives
- [ ] **no** reveal animation anywhere (the reference ships none); reduced-motion still respected for smooth
      scroll
- [ ] `body.scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440; the **only** horizontal
      scroller is the matrix wrapper
- [ ] **zero** `href="#"`; **zero** `#service-areas` dead anchors on the page; every `tel:` well formed; every
      icon-only control has an accessible name
- [ ] **no** `<form>` and **no** `<input>` on the page — the quote is a CTA to `#contact`, not a form
- [ ] 100% coverage on the new app, `scripts/verify-app.sh mandrel` green

## Implementation notes for the port (not requirements)

- **One face, four weights.** Manrope 400/500/600/700 from Google Fonts
  (`css2?family=Manrope:wght@400;500;600;700&display=swap`, verified 200). Do not add a serif "for warmth" —
  the single-face discipline is what makes the page read as a tender document.
- **The matrix is the template.** Build it as a real `<table>` from a `capabilities × sectors` data table plus a
  `Set` of "yes" pairs, and generate the 35 `sr-only` sentences from the same data. Do not hand-author 35 cells
  twice.
- **The em-dash is a design token, not an empty cell.** `#d1d5db`, `aria-hidden`, and the sentence carries the
  meaning. An empty `<td>` loses both the visual and the accessibility.
- **Hairlines, not borders.** Both the project `dl` rules and the certifications grid are 1 px *gaps/rules on a
  `#d1d5db` ground*; adding `border` to the cells doubles every line.
- **The licence bar is the brand's best idea** — three credential pairs above the nav, the first of which
  survives at 390. Keep it in flow, keep it `text-xs`, and do not turn it into a marquee or a dismissible
  banner.
- **Facts over imagery.** Four image slots, three photographs, and none above the fold except the hero's. If you
  are tempted to add a service-icon grid to `#capabilities`, the answer is the table.
- **Placeholder imagery:** `https://picsum.photos/seed/mandrel-<n>/<w>/<h>`; the source's Unsplash files must not
  be hot-linked. Keep the *kinds*: hero = a plant room being installed (3:4 portrait at `lg`), cards = one 4:3
  job photo each (hospital plant room, food-grade stainless pipework, school water works).
- **Icons:** `lucide-react` (`Check`, `Phone`, `MapPin`, `Menu`, `X`, `Sun`, `Moon`, `ArrowUp`, `ArrowRight`).
  The wordmark is yours — a bold condensed mark plus a 700-weight wordmark reads the same without copying the
  SVG.
- **Single-page substitutions** (state them in the PR): the six nav items and the in-page CTAs anchor to
  `#capabilities` / `#projects` / `#certifications` / `#process` / `#contact` instead of inner routes;
  **Request a quote** resolves to `#contact`, whose terminal action is a `mailto:` on the `bids@` address;
  `/rfq/`'s nine-field form is **out of scope** — do not invent it.
- **Copy is content.** *"…the paperwork that comes with them"*, *"the sequencing matters more than the
  pipework"*, *"the prequalification pack goes back with the bid rather than three weeks later"*, *"Agreed, not
  imposed"*, *"Documentation at PC"* — the register is the design. Paraphrase the brand, keep the argument.
