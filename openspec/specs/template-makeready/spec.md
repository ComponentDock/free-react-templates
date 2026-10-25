# Template: Makeready (Creative — a print-first design studio whose argument is the three weeks after the design is approved)

## Purpose

A **Dublin graphic-design studio's page that sells production, not taste**, and states its thesis in the `h1`
itself:

> "Design that survives **contact with production**"

The second line is a **typewriter** cycling *"contact with production"* → *"a print run"* → *"being handed to
someone else"*, and that list is the page's whole argument: the studio is claiming the unglamorous half of the
job — artwork finished properly, files a printer can use, guidelines a non-designer can follow. Everything below
the hero is built to make that claim checkable rather than decorative:

- **`#work`** — three case studies in the only structure that proves it: *Brief · Approach · Outcome*, each with
  one hard number (*2 colours*, *6 issues*, *60 pp*) under a lime rule.
- **`#disciplines`** — four things the studio does **with a starting price printed next to each one**
  (*from €14,000*, *€9,000*, *€11,000*, *€6,500*), on the page's only near-black band.
- **`#process`** — four fixed stages with **durations** (1–2 / 2–3 / 3–5 / 1–2 weeks) and the artefact each stage
  produces, plus three commercial rules stated flatly: *"Fifty percent on commencement, fifty on final artwork
  delivery. Nothing invoiced in between."*
- **`#deliverables`** — **the file list, published**: three columns (Artwork · Specification · Working files) of
  exactly what a client receives, down to `AI · EPS · SVG · PDF` and `PDF · DXF`.
- **`#testimonials`** — three clients, all of whom talk about **handover** rather than beauty:
  *"The guidelines were written for someone who is not a designer, which is exactly who ended up using them."*
- **`#faq`** — money, ownership, scope, in five answers that refuse the usual agency hedging:
  *"hourly punishes you for our inefficiency"*, *"We do not license artwork back to clients"*,
  *"We do not build them"*.
- **`#contact`** — *"Tell us what the actual problem is."*

**Refusal is the design's voice.** *"We are not a full-service agency. There is no digital product team, no media
buying and no motion department, and we will tell you who to ring for those."* · *"We show you the one we
recommend and say why, rather than presenting three and asking you to choose."* · *"Two rounds of revisions are
included at each stage. Further rounds are quoted, not silently absorbed."* · *"You will never need a subscription
to our software to open your own artwork."* A recreation that adds a "trusted by" logo wall, a star-rating
carousel with fake numbers, a "Get a free quote" popup, or greets the visitor with "Welcome to our studio" has
deleted the template. The register is **first-person plural, plain, numerate and unsentimental** — prices,
weeks, file extensions, and no exclamation marks anywhere on the page.

Composition: **a paper-white page (`#f7f7f6` → `#ffffff` gradient hero), one near-black band (`#141413`), one
stone band (`#f7f7f6`), one `gray-50` band, one white band, and a single charcoal gradient close**
(`#575751` → `#2b2b28`, 135°), with **one saturated colour in the entire design — a lime `#c3f53c` / `#a8dc1f`**
used only as small marks: eyebrow chips, `FROM €` labels, the figcaption plates, the rules beside each brief, the
process numerals, the 1.5 px squares in the three process footnotes, and the note's left border. Measured at
1440 × 900:

| #  | band                                                    | id / hook         | ground                          |   top | height |
| -- | ------------------------------------------------------- | ----------------- | ------------------------------- | ----: | -----: |
| 0  | `<header>` sticky, white 80 % + blur                    | `[data-header]`   | `#fff/80` over the hero         |     0 |     81 |
| 1  | hero — badge, h1 + typewriter, 3 CTAs, 4 stats, 2:1 image | *(1st `<section>`)* | `primary-50` → `white` gradient |    81 |  1,409 |
| 2  | three case studies, brief/approach/outcome              | `#work`           | transparent on white            | 1,490 |  2,001 |
| 3  | four disciplines, priced                                | `#disciplines`    | `primary-900` `#141413`         | 3,491 |  1,103 |
| 4  | four fixed stages, 4-up grid                            | `#process`        | transparent on white            | 4,594 |    862 |
| 5  | the file list, three columns                            | `#deliverables`   | `primary-50` `#f7f7f6`          | 5,455 |    766 |
| 6  | three client quotes (carousel below `lg`)               | `#testimonials`   | `gray-50` `#f9fafb`             | 6,221 |    796 |
| 7  | five questions                                          | `#faq`            | `#ffffff`                       | 7,017 |    820 |
| 8  | "Tell us what the actual problem is"                    | `#contact`        | 135° `#575751` → `#2b2b28`      | 7,837 |    452 |
| 9  | footer, four zones                                      | `<footer>`        | `gray-900` `#111827`            | 8,289 |    568 |

**Document height 8,857 px** at 1440 **and** at 1280; **9,295 px** at 1024, **10,915 px** at 768, **11,486 px**
at 640, **12,778 px** at 390 and **13,799 px** at 320. The header is `sticky` and **81 px** at ≥1024 (`h-20` +
1 px border) but **65 px** below `lg` (`h-16` + border); the ten bands above sum to the document height to
within 1 px rounding at every width measured.

The palette is **one warm-grey `primary` ramp that is not a hue** (it is a paper/charcoal scale, `#f7f7f6` →
`#141413`, chroma ≈ 0 in every step), **a two-step lime `accent`**, and **stock Tailwind greys for the testimonial
and FAQ bands and the footer**. The jobs are load-bearing: `primary-600` `#575751` is the **only saturated fill
on the light page** — every primary button, the header CTA, the back-to-top disc, the scroll-progress bar, the
footer Subscribe button and the start of the closing gradient; `primary-900` `#141413` is the **disciplines
ground**, **every eyebrow chip's ground** and **each deliverables column rule**; `primary-50` `#f7f7f6` the
**hero gradient start**, the **hero badge ground** and the **deliverables ground**; `primary-200` `#d8d8d4`
the **process grid's 1 px ground** (the `gap-px` trick) and the badge border; `primary-700` `#464642` **every
brief/approach/outcome paragraph**, `accent-400` `#c3f53c` the **chip text, the figcaption plates, the `FROM €`
labels, the `#deliverables` note border and the `#disciplines` hover colour**; `accent-500` `#a8dc1f` **only the
process numerals 01–04 and the three 1.5 px squares**.

Two traps in the palette. **`accent` has only two steps** (`400`, `500`) — the compiled sheet contains no
`accent-50/100/200/300/600/700/800/900` at all, so *do not invent the missing steps*; the honest move when a
design calls for a darker lime is to reuse `accent-500`. And **the `primary` ramp is warm, not neutral**:
`primary-100` is `#eeeeec` (a paper tone) and `primary-200` `#d8d8d4` — replacing them with Tailwind's `stone-100`
/ `gray-200` (`#e5e7eb`, slightly blue) shifts every well, divider and badge by a visible amount on a page whose
whole surface is 2 % off white.

The type is **Space Grotesk for everything** (400/500/600/700, no italic anywhere on the page) **plus the OS
monospace stack for the "technical" layer** — company names, `BRIEF/APPROACH/OUTCOME` labels, stage durations,
file formats, tag pills, `FROM €14,000` and the numerals. That mono is `var(--font-mono)` = `ui-monospace,
SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`, **not a webfont**: the
reference was screenshotted on macOS (SF Mono) and will render as Liberation Mono on a Linux build. Space Grotesk
arrives from Cloudflare's font service (`/cf-fonts/v/space-grotesk/5.2.10/…`) as **12 `@font-face` rules inside
one inline `<style>` block** — **no `<link>`, no stylesheet rule** — as variable `wght` woff2 per subset
(`latin`, `latin-ext`, `vietnamese`), 400/500/600/700 upright only.

Recreation of the ColorLib "Overprint" design (https://colorlib.com/wp/template/overprint/, live preview
https://preview.colorlib.com/theme/overprint/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `overprint`
- **ColorLib page:** https://colorlib.com/wp/template/overprint/ — **HTTP 200, 111,609 B**, `<title>`
  **"Overprint - Graphic Design Website Template 2026 - Colorlib"**. Its listing screenshot is
  `overprint-template.jpg` (**307,550 B**, a real baseline JPEG, **2400 × 1892** — see §Screenshot analysis).
- **Live preview:** https://preview.colorlib.com/theme/overprint/ — **HTTP 200, 68,551 B**,
  `text/html; charset=utf-8`, `<title>` **"Home | Overprint"**, read 2026-10-25 with `curl -4`. A 2026 **Astro**
  build: one hashed stylesheet `_astro/Base.DePP_LGt.css` (**62,102 B**, `/*! tailwindcss v4.3.3 */`, sha256
  `d04982712da2b108…`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256
  `e26cc055dec23e63…` — **byte-identical to the house kit in the `conduit`, `nightwatch`, `drainwise`, `patina`
  and `pentimento` preps**), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (**16,357 B**, sha256
  `69eb3ac5c16a8d9a…`, the same file as every sibling in this 2026 set).
- **Page-specific logic is two inline `<script>` bodies** (**454 B** theme init from `localStorage` /
  `prefers-color-scheme` + `astro:before-swap`, **370 B** preloader teardown) plus one `application/ld+json`
  block (**183 B**, `@type: Organization`, `name: "Overprint"`). Everything else — typewriter, parallax, video
  modal, FAQ accordion, dark toggle, mobile menu, reveal-on-scroll, cookie strip, scroll progress, back-to-top,
  smooth anchor scrolling, testimonial carousel — is the shared kit, driven by `data-` hooks the markup provides.
- **No archive, no alternate family path:** `downloads/free/overprint.zip` → **404**,
  `etc/cs/overprint/index.html` → **404**, `theme/bootstrap/overprint/` → **404**, `theme/bb/overprint/` →
  **404**. There is no archived twin to hash-compare, so every token below is read from the live sheet and from
  `getComputedStyle`.
- **Single-page?** No. **Six inner routes are live** (`about`, `blog`, `contact`, `elements`, `privacy`, `terms`),
  all HTTP 200 **only with a trailing slash** — the bare path answers **308** with an empty body. See
  §Inner-page inventory.
- **Fonts:** no `<link>` to Google Fonts and **no `@font-face` in the stylesheet**; the only faces are 12 rules in
  the inline `<style>` block naming `'Space Grotesk'` (400/500/600/700, normal only) at
  `/cf-fonts/v/space-grotesk/5.2.10/{latin,latin-ext,vietnamese}/wght/normal.woff2`. The recreation loads the same
  family from Google Fonts (`css2?family=Space+Grotesk:wght@400;500;600;700&display=swap`, verified **200**) and
  **keeps the system mono stack**.
- **Recreation name:** `makeready` — one lowercase word, the printer's term for **make-ready**: the preparation of
  plates, ink and registration *before* the run, which is precisely the half of the work this page claims. It is
  *not* the source name, and it collides with nothing: `git grep -il makeready origin/main` → **no matches**, no
  `apps/makeready`, no `openspec/specs/template-makeready`, no `docs/templates/makeready`, no bold name in
  `TEMPLATES.md`, and `colorlib.com/wp/template/makeready/`, `preview.colorlib.com/theme/makeready/`,
  `preview.colorlib.com/theme/bootstrap/makeready/` all → **404**. The recreation lives at `apps/makeready`,
  package `@free-react-templates/makeready`, `makeready.free.componentdock.com`.
  (Two documented alternatives, both checked the same way and both free: `proofsheet` — the pulled, uncut
  signature you check the run against; and `imposition` — the arranging of pages on a press sheet. Neither is a
  decision; `makeready` wins because it names the *stage* the page is arguing about, and it is the only one of the
  three a client would recognise.)
  **No ColorLib string may appear in the app** — provenance lives in this spec, the `TEMPLATES.md` row and the PR
  only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, `[~]` count **0**), so this design comes from
`docs/catalog-coverage.md` — the standalone designs on colorlib.com's listing that the checklist never recorded.
This is the row **`overprint`** (`preview 200, 68551 B`), the design immediately after the artist-portfolio row
in that table's order, and it is **not** one of the rows that already own an app or a prep for a *different*
design (the rows `docs/catalog-coverage.md` flags "app exists (other design)" or "orphan prep (other design)" —
six of them — which need a fresh invented name, as every row here does). When the app ships, append a row under
the best-fit category — **`## Creative`** — **in source-name alphabetical order** and bump that heading's count
(55 → 56 at the time of writing; re-read the section rather than trusting this line, a concurrent prep or ship
may have landed first).

## Reference readings (2026-10-25, `curl -4`)

| what                                   | value                                                                                                |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| preview HTML                           | 200, **68,551 B**, `text/html; charset=utf-8`                                                         |
| stylesheet `_astro/Base.DePP_LGt.css`  | 200, **62,102 B**, `/*! tailwindcss v4.3.3 */`, sha256 `d04982712da2b108…`                            |
| behaviour kit `…_lang.BLoalVWc.js`     | 200, **16,233 B**, sha256 `e26cc055dec23e63…` (identical to the `conduit`/`nightwatch`/`patina`/`pentimento` kit) |
| router `…CYDbzu1r.js`                  | 200, **16,357 B**, sha256 `69eb3ac5c16a8d9a…` (the same house router as every sibling)                |
| inline `<script>` bodies               | **2** (theme init 454 B · preloader 370 B) + one JSON-LD block, 183 B                                  |
| inline `<style>`                       | **1**, **4,004 B**, exactly **12 `@font-face` rules** and nothing else                                |
| `meta name="description"`              | *"A graphic design studio working in identity, editorial, packaging and type. Six people, print-first, and a deliverables list published before you ask for it."* — identical to `og:description`; `og:title` is the `<title>` |
| `<html lang>`                          | `en`, **no `class="dark"`** — the theme is decided at runtime by the 454 B inline script               |
| logo                                   | `assets/img/logo.svg` **507 B** + `logo-light.svg`, `viewBox="0 0 196 40"`: **two 18 × 18 rounded-2 rects** offset by 10/6, the **overlap knocked through** in a third, darker lime, then the word *Overprint* as **live `<text>`** in Space Grotesk **21 px / 700**, `letter-spacing −0.4`. Header renders it at **196 × 40** (`h-8 … lg:h-10`, `w-auto`), footer at **196 × 40** (`h-10`) |
| favicon                                | `favicon.svg`, 200, **377 B** — an **orange `#d97706` rounded square** with a white device glyph (see §Known reference defects) |
| social card                            | `og:image` = `/og-image.jpg` → **404** (see §Known reference defects)                                 |
| archive / alternate demo               | `downloads/free/overprint.zip` **404** · `etc/cs/overprint/index.html` **404** · `theme/bootstrap/overprint/` **404** · `theme/bb/overprint/` **404** |
| navigation                             | **7** labels — *Work · Disciplines · Process · Deliverables · Studio · Journal · Contact* — four bands + **three pages**; plus *Start a project* |

**The raw page digest is not an identity for this page.** Two `curl -4` fetches of the same URL returned the
same byte count but different sha256 (`c12ca6d079447e4f…` and `bdff362949a2d352…`): the only difference is the
**order of the 12 `@font-face` rules** inside the inline `<style>` block, which Cloudflare's font service emits
non-deterministically. With the block's rules sorted, both fetches hash identically —
**`45301c9a40cc3f50…`** — so that normalised digest is the one to quote as the page's identity.

## Design tokens (reconstructed from `Base.DePP_LGt.css`, 62,102 B, and `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal values** in the
> compiled utilities. `grep -o -- '--color-primary-[0-9]*'` on this sheet returns **0 hits**, so neither ramp
> exists as a custom property — the tables below were rebuilt by parsing every `*-primary-<n>` /
> `*-accent-<n>` utility rule and cross-checked against `getComputedStyle`. Declare them in the app's own
> `@theme`.

### `primary` — warm paper → charcoal (all structure, all fills)

| step | hex       | used for                                                                                                                     |
| ---- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 50   | `#f7f7f6` | **hero gradient start**, **hero badge ground**, **`#deliverables` ground**, `text-primary-50` on the dark band               |
| 100  | `#eeeeec` | **image wells behind every work figure** (`bg-primary-100`), the **`Clients`/`Questions` pill** ground, the 48 px avatar discs |
| 200  | `#d8d8d4` | **hero badge border**, **process grid ground** (`gap-px`), the hairline under each process card's *You get* row               |
| 300  | `#b5b5af` | disciplines lead (`text-primary-300`), dark-mode body text (`dark:text-primary-300`), tag-pill labels on the dark band        |
| 400  | `#8b8b84` | **end of the `h1` gradient** (`text-gradient`), the **testimonial stars**, `dark:text-primary-400` labels                     |
| 500  | `#6e6e67` | **work company line**, every mono `BRIEF/APPROACH/OUTCOME` label, file-format labels, stage durations, `placeholder-gray-500` neighbour |
| 600  | `#575751` | **every primary button** (header CTA, hero CTA, cookie Accept, footer Subscribe, back-to-top), `text-primary-600` leads, **`text-gradient` start**, **`#contact` gradient start** |
| 700  | `#464642` | **every brief/approach/outcome paragraph**, `#contact`'s white CTA label, process footnote text, the disciplines band's 1 px row rules |
| 800  | `#2b2b28` | **`#contact` gradient end**, `dark:bg-primary-800` image wells                                                                 |
| 900  | `#141413` | **`#disciplines` ground**, **every eyebrow chip's ground**, **each `#deliverables` column's 2 px rule**, `hover:bg-primary-700`'s dark twin |

### `accent` — lime, **two steps only**

| step | hex       | used for                                                                                                                    |
| ---- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 400  | `#c3f53c` | **eyebrow chip text on the dark chip** (`Selected work`, `What you actually receive`), **the figcaption plates** behind `Packaging · 2032`, **every `FROM €` price**, the **4 px left border** on the deliverables note, **`group-hover:text-accent-400`** on the four discipline titles, dark-mode column rules |
| 500  | `#a8dc1f` | **the process numerals 01–04** and **the three 1.5 × 1.5 px squares** in the process footnotes — nothing else               |

The sheet contains **no other accent step**. Tailwind 4 only compiles the utilities it finds, so the absence is
real: `accent-600` does not exist anywhere on this page. (Two further literals live only inside the logo SVG and
are **not** theme steps: `#84b012`, the knocked-through overlap of the dark logo, and `#a8dc1f` reused for the
same job in the light logo.)

### Stock Tailwind greys (the testimonial band, the FAQ band, the footer, the dark ground)

`gray-50 #f9fafb` (**`#testimonials` ground**) · `gray-100 #f3f4f6` (FAQ plus discs, `hover:bg-gray-100` on the
dark toggle) · `gray-200 #e5e7eb` (**header border**, hero outline CTA border, FAQ dividers) · `gray-300 #d1d5db`
(hero secondary CTA text border, cookie Decline border) · `gray-400 #9ca3af` (**footer body copy**, social chips,
`dark:text-gray-400` labels) · `gray-500 #6b7280` (footer bottom bar, `placeholder-gray-500`) · `gray-600 #4b5563`
(**nav labels**, hero lead, FAQ answers, cookie copy) · `gray-700 #374151` (hero secondary CTA text, footer input
border, `dark:border-gray-700`) · `gray-800 #1f2937` (**footer social chips and input ground**, footer bottom
border `#1f2937`) · `gray-900 #111827` (**footer ground**, every light-band `h1`/`h2`) · `gray-950 #030712`
(**dark `body` / `#faq` ground**, `dark:bg-gray-950/80` header).

### Gradients and overlays — three gradients, one dot grid, four blurred blobs

1. **Hero** — `bg-gradient-to-b from-primary-50 to-white`, i.e. `linear-gradient(in oklab, #f7f7f6 0%,
   #ffffff 100%)`; dark twin `dark:from-gray-900 dark:to-gray-950` → `#111827 → #030712`.
2. **The h1's second line** — `.text-gradient` (a hand-written class, not a utility):
   `background-image: linear-gradient(to right in oklab, #575751 0%, #8b8b84 100%); background-clip: text;
   color: transparent`. It has **no dark variant**, so in dark mode the line stays a charcoal→stone gradient
   against `#030712` — measured, and deliberately kept (it is the only element that does not invert).
3. **`#contact`** — `bg-gradient-to-br from-primary-600 to-primary-800` =
   `linear-gradient(to right bottom in oklab, #575751 0%, #2b2b28 100%)`; **identical in dark mode**.
4. **Dot grid inside `#contact`** — an inline style on a `div.absolute.inset-0.opacity-10`:
   `background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px`.
   At 10 % on the gradient it reads as texture, not as a grid; a `bg-[linear-gradient(...)]` substitute with a
   different spacing is visible immediately.
5. **Blobs** — hero: `500 × 500` `primary-200/50` at `-top-40 left-1/2 -translate-x-1/2` and `400 × 400`
   `primary-100/40` at `right-0 top-0`, both `blur-3xl`, animated `hero-float` **8 s** / **10 s reverse**
   (`@keyframes hero-float { 0%,to { transform: translate(0) scale(1) } }` — i.e. **it animates nothing visible**;
   see §Known reference defects); `#contact`: two `256 × 256` `bg-white/10` `blur-3xl` discs at `-right-20 -top-20`
   and `-bottom-20 -left-20`. All are inside `overflow-hidden` parents, so none widens the document.

### Typography (measured)

| role                              | size / line-height / weight                    | tracking                        | colour                                    |
| --------------------------------- | ---------------------------------------------- | ------------------------------- | ----------------------------------------- |
| `h1` (hero)                       | **60 / 60 / 700** (`lg:text-6xl`), 48 / 48 at 768, **36 / 40 at 390** | **−1.5 px** (`tracking-tight`, −0.025em) | `gray-900` `#111827` / `#fff`; 2nd line `.text-gradient` |
| `h2` (`#work`, `#disciplines`, `#process`, `#deliverables`) | **48 / 48 / 700** (`sm:text-5xl`), 30 / 36 below 640 | **−1.2 px**         | `#111827` / `primary-50` `#f7f7f6` on the dark band |
| `h2` (`#testimonials`, `#faq`)    | **36 / 40 / 700** (`sm:text-4xl`)              | −0.9 px                         | `#111827` / `#fff`                        |
| `h2` (`#contact`)                 | **48 / 48 / 700** (`lg:text-5xl`, 36 / 40 at `sm`) | −1.2 px                     | `#ffffff`                                 |
| hero badge                        | **14 / 20 / 500**                              | `normal`                        | `primary-700` `#464642` on `primary-50`   |
| hero lead                         | **20 / 28 / 400** (`text-lg sm:text-xl`)       | `normal`                        | `gray-600` `#4b5563`, `max-w-2xl` (**672 px**) |
| eyebrow chip                      | **12 / 16 / 700 uppercase**                    | **+1.8 px** (`0.15em`)          | `accent-400` on `primary-900`, or `primary-900` on `accent-400` |
| section lead                      | **16 / 24 / 400**                              | `normal`                        | `primary-600` `#575751` (or `primary-300` on the dark band) |
| work company line                 | **12 / 16 / 400 mono uppercase**               | **+2.4 px** (`0.2em`)           | `primary-500` `#6e6e67`                   |
| work `h3`                         | **30 / 36 / 700** (`sm:text-3xl`; 24 / 32 below 640) | −0.75 px                  | `#111827`                                 |
| work `dt` (BRIEF …)               | **11 / 16.5 / 400 mono uppercase**             | **+0.55 px** (`wider`)          | `primary-500`                             |
| work `dd`                         | **16 / 26 / 400** (`leading-relaxed`)          | `normal`                        | `primary-700` `#464642`                   |
| work metric                       | **36 / 40 / 700** (`text-4xl`)                 | −0.9 px                         | `#111827` + `14 / primary-500` caption    |
| disciplines `h3`                  | **30 / 36 / 700** (`sm:text-3xl`)              | −0.75 px                        | `primary-50`, **hover `accent-400`**       |
| disciplines price                 | **12 / 16 / 400 mono uppercase**               | +0.6 px                         | `accent-400`                              |
| disciplines body                  | **16 / 26 / 400**                              | `normal`                        | `primary-200` `#d8d8d4`                   |
| tag pill                          | **11 / 16.5 / 400 mono uppercase**             | **+0.55 px**                    | `primary-300` on `primary-900`, 1 px `primary-600` border, pad 4 / 10, **radius 0** |
| process numeral                   | **30 / 36 / 700 mono**                         | `normal`                        | `accent-500` `#a8dc1f`                    |
| process duration                  | **11 / 16.5 / 400 mono uppercase**             | +0.55 px                        | `primary-500`                             |
| process `h3`                      | **18 / 28 / 700**                              | `normal`                        | `#111827` / `#fff`                        |
| process body                      | **14 / 22.75 / 400** (`text-sm leading-relaxed`) | `normal`                      | `primary-600` `#575751`                   |
| process *You get* line            | **12 / 16**                                    | `normal`                        | `primary-500` label + `600` value, above a 1 px `primary-200` rule |
| deliverables column heading       | **16 / 24 / 700 uppercase**                    | **+0.8 px** (`tracking-wider`)  | `#111827`                                 |
| deliverables row name             | **14 / 21 / 500**                              | `normal`                        | `#111827`                                 |
| deliverables row format           | **11 / 16.5 / 400 mono uppercase**             | +0.55 px                        | `primary-500`                             |
| deliverables row note             | **12 / 18**                                    | `normal`                        | `primary-500`                             |
| deliverables closing note         | **14 / 22.75**                                 | `normal`                        | `primary-700` on white, **4 px `accent-400` left rule** |
| testimonial quote                 | **18 / 28 / 500**                              | `normal`                        | `gray-900` `#111827`                      |
| testimonial name · role           | **16 / 24 / 600** · **14 / 20 / 400**          | `normal`                        | `#111827` · `gray-600`                    |
| testimonial avatar                | **18 / 28 / 600** in a **48 px** `primary-100` disc | `normal`                  | `primary-600`                             |
| testimonial stars                 | **5 × 20 px**, `fill: currentColor`            | —                               | `primary-400` `#8b8b84` (**grey stars, not lime**) |
| FAQ question                      | **18 / 28 / 600**                              | `normal`                        | `#111827` / `#fff`                        |
| FAQ answer                        | **16 / 24 / 400**                              | `normal`                        | `gray-600` `#4b5563`                      |
| `#contact` lead                   | **18 / 28 / 400**                              | `normal`                        | `primary-100` `#eeeeec`                   |
| footer column heading             | **14 / 20 / 600 uppercase**                    | **+0.7 px** (`tracking-wider`)  | `#ffffff`                                 |
| footer body · bottom bar          | 16 / 24 · 14 / 20                              | `normal`                        | `gray-400` `#9ca3af` · `gray-500` `#6b7280` |
| nav label · header CTA            | **14 / 20 / 500**                              | `normal`                        | `gray-600` → `gray-900`; CTA white on `primary-600` |

`font-family: "Space Grotesk", system-ui, sans-serif` sits on `html` and `body`; `body { background:#ffffff;
color:#111827; -webkit-font-smoothing: antialiased }`, and **`.dark body { background:#030712; color:#f3f4f6 }`**
(measured). `.font-mono` is the Tailwind default `--font-mono` stack (`ui-monospace, SFMono-Regular, Menlo,
Monaco, Consolas, "Liberation Mono", "Courier New", monospace`) — **no webfont**, 56 uses in the markup. Two facts
the implementer must not "fix":

- **There is no italic anywhere on the page**, and Space Grotesk has no true italic — do not synthesise one.
- **The mono is the OS mono.** Keep the stack exactly as declared: it is what the reference renders, and the
  platform variance (SF Mono on macOS, Liberation Mono on Linux CI) is a property of the design, not a bug.
  A webfont substitute (e.g. JetBrains Mono) would be a **delta**, and only acceptable if recorded in the PR —
  the three labels it touches (`FROM €14,000`, `1–2 WEEKS`, `AI · EPS · SVG · PDF`) are load-bearing set dressing.

### Radii — five values, plus one deliberate zero

- **0** — **every eyebrow chip** (`inline-block px-2 py-0.5`, 135 × 20 for `Selected work`), **every tag pill**
  on the dark band (79 × 27 for `Wordmark`), **every work figure and figcaption** (the figure is a square-cornered
  `overflow-hidden` well), the **process grid's cells**, and the **deliverables note** (4 px left border only).
  The page's print idiom is square: chips and plates are *plates*.
- **3.355e7 px** (`rounded-full`) — hero badge (345 × 34), the `Clients` / `Questions` pills (28 tall),
  the FAQ plus discs (32 × 32), the testimonial avatar discs (48 × 48), the carousel arrows (36 × 36),
  the carousel dots (6 × 6), the back-to-top disc (48 × 48), the untouched ping dot (8 × 8).
- **8 px** (`rounded-lg`) — header CTA (**139 × 40**), hero CTA 1 (**187 × 48**), hero CTA 2 (**150 × 50**),
  the four `#contact` CTAs (**203 × 56**, **286 × 60**), footer input (**46** tall) and Subscribe (**108 × 46**),
  the social chips (**40 × 40**), the two mobile-CTA buttons, the cookie buttons.
- **16 px** (`rounded-2xl`) — the hero image frame (**1,024 × 512**) and the three testimonial cards
  (**381 × 320 / 292 / 348** — they are *not* equal height).
- No `4 px` step exists on this page (the `pentimento` sibling uses it for tags; here tags are square).

### Shadows, spacing, container

- `shadow-lg` — header **past 50 px of scroll** (`[data-header]` adds the class), hero CTA 1, the process? no:
  the cookie strip, the back-to-top disc, the `#contact` white CTA.
- `shadow-2xl` — the **hero image frame only**; `ring-1 ring-gray-200` rides with it (16 px radius + 1 px ring
  + a 25 px shadow is the page's one "portfolio print" treatment).
- `shadow-soft` — a **hand-written component class**: `0 4px 16px -4px #0000001a`; used on the three testimonial
  cards only. `hover:shadow-soft-lg` (`0 12px 32px -8px #00000024`) is defined and **unused** on this page.
- `shadow-primary-600/25` — hero CTA 1 and the back-to-top disc, with `hover:shadow-primary-600/30` +
  `hover:shadow-xl` on both. `#contact`'s white CTA swaps to `hover:shadow-xl` with no tint.
- Section rhythm: `py-20` → **80 px**, `sm:py-28` → **112 px** on the hero's siblings — `#work`, `#disciplines`,
  `#process`, `#deliverables` all measure **112 px top and bottom** at 1440; `#testimonials` and `#faq` use
  `py-20 lg:py-28` (**80 / 112**); the hero uses `py-20 lg:py-32` (**80 / 128**) and the footer `pt-16 lg:pt-24`
  (**64 / 96**) with **no bottom padding on the plate** — the gap under the last row is the bottom bar's own
  `py-8`.
- `.container` (Tailwind) = `width:100%; max-width:1280px; margin-inline:auto` → measured content **1,216 px**
  at 1440 (with the page's own `lg:px-8`, 32 px), **358 px** at 390. Five independent content widths are in play:
  hero text **896** (`max-w-4xl`), hero image **1,024** (`max-w-5xl`), work/disciplines **1,216** (`max-w-7xl`),
  process/deliverables **1,088** (`max-w-6xl`), testimonials/FAQ/contact copy **768** (`max-w-3xl`).

## Reference document order

`header` → `hero` → `#work` → `#disciplines` → `#process` → `#deliverables` → `#testimonials` → `#faq` →
`#contact` → `footer`, plus six fixed/overlay pieces outside the flow: `#preloader`, `#scroll-progress`, the skip
link (`#main-content`), `#mobile-cta` (`lg:hidden`), `#cookie-consent` and `#back-to-top`.

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Header (81 px at ≥1024, 65 px below; `sticky top-0`, `bg-white/80` + `backdrop-blur-lg`, 1 px
`border-b gray-200`)

`h-16` → `lg:h-20`, `container px-4 lg:px-8` (32 px measured), three zones: **logo** (**196 × 40** at
`x = 112`, the light/dark pair swapped by `dark:hidden` / `hidden dark:block`), **nav** (`hidden lg:flex gap-8`,
7 labels: *Work · Disciplines · Process · Deliverables · Studio · Journal · Contact*, all `14/500 gray-600`,
measured widths 34 / 73 / 52 / 82 / 46 / 52 / 55 at `x = 430 … 961`; the first four carry `data-nav-link` =
`work|disciplines|process|deliverables`, the last three `data-nav-link="/about"`, `"/blog"`, `"/contact"` for the
kit's scroll-spy), and a right cluster: **moon icon** (`aria-label="Toggle dark mode"`, `data-dark-toggle`,
36 × 36 hit area), **Start a project** (`sm:inline-flex`, `bg-primary-600 px-5 py-2.5 text-sm`, **139 × 40**) and
a **hamburger** (`lg:hidden`, `aria-label="Open menu"`, `data-mobile-toggle aria-expanded="false"`). The mobile
panel (`div.hidden.lg:hidden[data-mobile-menu]`) repeats the seven labels as `block py-3 text-base` rows plus a
full-width *Start a project* — measured **446 px** tall when open at 390.

### 1 — Hero (1,409 px at 1440 = 81 + 80 + content + 128; 1,220 px at 390)

`bg-gradient-to-b from-primary-50 to-white`, two animated blobs behind an `aria-hidden` wrapper at `-z-10`
(each with `data-parallax`), and inside `container px-4 py-20 lg:px-8 lg:py-32` a `max-w-4xl` centre column:

1. **badge** — `inline-flex gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm
   font-medium text-primary-700` with an 8 px dot pair (`animate-ping` `primary-400` at 75 % over a solid
   `primary-500`): **"Dublin · Identity, editorial, packaging, type"**, **345 × 34** at y = 209.
2. **`h1`** — `text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl`: *"Design that survives"* `<br>` then
   `<span class="text-gradient" data-typewriter='["contact with production","a print run","being handed to someone else"]'>contact with production</span>`,
   **896 × 120** (two 60 px lines) at y = 267. Measured span widths per phrase: **677 / 288 / 845 px** at 1440,
   **358 / 171 / 358 px** at 390.
3. **lead** — `mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl`: *"A six-person studio working mostly in
   print. We finish artwork properly, supply files a printer can actually use, and write guidelines that a future
   in-house designer can follow without ringing us."* (672 × 84 at y = 411).
4. **CTA row** — `mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`: **Start a project** →
   `/contact` (filled `primary-600`, radius 8, **187 × 48**, arrow-right icon, `shadow-lg shadow-primary-600/25`);
   **See the work** → `#work` (white + `border-gray-300`, **150 × 50**); **Watch Demo** — a bare
   `<button data-video-modal="https://www.youtube.com/embed/dQw4w9WgXcQ">` with a **48 × 48** `primary-600` play
   disc and a `14/500 gray-700` label.
5. **stat strip** — `mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4` (**four 200 px
   cells at 1440, 2 × 2 at 390**, 193 px tall block): **11 Years · 140+ Identities · 6 In the studio ·
   3 ISTD awards**, numerals `36/40 700` `lg:text-4xl`, labels `14/400 gray-600`.
6. **image** — `mt-16 lg:mt-24` → `max-w-5xl`, `rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200`,
   **1,024 × 512** (2:1, Unsplash `photo-1626785774573` — printed identity work on a studio table, **the only
   photograph on the page with a real `alt`**; the three case-study figures are `alt=""`), `h-auto w-full`.

### 2 — `#work` — "Three projects, start to finish" (2,001 px, transparent on white, `py-28`)

`max-w-7xl px-4 sm:px-6 lg:px-8` → content **1,216 px**. Intro block `max-w-2xl`, left-aligned: eyebrow chip
**SELECTED WORK** (`bg-primary-900 px-2 py-0.5 text-xs font-bold uppercase tracking-[0.15em] text-accent-400`,
**135 × 20**), `h2` **48/48 700** at y = 1,642, lead `text-primary-600 max-w-xl` *"With the brief as it was
actually written, not as we would have preferred it."*

`div.mt-16.space-y-16` → **64 px between articles**, three `article.grid items-center gap-8 lg:grid-cols-2
lg:gap-14` (**580 / 580 px columns, 56 px gap**; the **second** carries `lg:[&>figure]:order-2`, so its figure
sits at `x = 748` — the page's only alternating row). Each article is a `figure` (**580 × 435**, 4:3 image in a
`bg-primary-100` well, `overflow-hidden`) with a **`figcaption` plate at the top-left** — `bg-accent-400 px-3
py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-primary-900`, **149 × 28** — then a text column:

- company line `font-mono text-xs uppercase tracking-[0.2em] text-primary-500`
- `h3` `text-2xl sm:text-3xl` (30/36, 580 × 72 for the two-line first title)
- a `dl.mt-6.space-y-4.border-l-2.border-accent-400.pl-5` — the **2 px lime rule down the left of all three
  definitions** — with `dt` = **Brief / Approach / Outcome** (11 px mono uppercase) and `dd` `16/26 primary-700`
- the metric: `p.mt-6.flex.items-baseline.gap-3` → `span.text-4xl.font-bold` (**36/40**) + `span.text-sm
  text-primary-500`

| # | plate          | company                  | h3                                                            | metric           | metric caption                            |
| - | -------------- | ------------------------ | ------------------------------------------------------------- | ---------------- | ----------------------------------------- |
| 1 | Packaging · 2032 | Kilbeggan Coffee Roasters | A bag that works at 40 mm and at four metres                 | **2 colours**    | print spec across all eleven SKUs          |
| 2 | Editorial · 2031 | The Liffey Review        | A quarterly that had grown from 48 pages to 210               | **6 issues**     | produced without studio involvement        |
| 3 | Identity · 2031  | Harbour & Vale           | An identity for a firm that will be bought within five years  | **60 pp**        | document system, self-maintained           |

The three `Brief / Approach / Outcome` bodies (reproduce the argument, paraphrase lightly):

1. *Brief* — eleven single-origin coffees sold in a small shop **and** on supermarket shelves, needing instant
   differentiation by staff and by first-time customers. *Approach* — one fixed structure, a variable colour band
   and a large origin numeral; the numeral carries at shelf distance, the band codes the roast, two spot colours
   keep unit cost down. *Outcome* — eleven SKUs, no increase in print cost, and the numeral became the internal
   shorthand for each coffee.
2. *Brief* — a literary quarterly that quadrupled in pages while its layout stayed the same, so readers could no
   longer find anything. *Approach* — four-tier hierarchy, running heads, a real contents architecture, two text
   sizes, one family at four weights so a volunteer team can maintain it. *Outcome* — an InDesign template with
   paragraph styles the editors have used unaided for six issues.
3. *Brief* — a professional-services firm that knows it will be acquired and wants an identity that will not be
   embarrassing inside a larger group. *Approach* — restraint: a wordmark not a symbol, one typeface, a neutral
   palette, and guidelines that show an acquiring brand team what is load-bearing and what is decorative.
   *Outcome* — stationery, signage and a 60-page document system, still in use, amended twice by the client's own
   team.

### 3 — `#disciplines` — "Four things, properly" (1,103 px, `#141413`, `py-28`, `text-primary-50`)

`max-w-7xl` (1,216). Intro `max-w-2xl`: chip **WHAT WE DO** (**inverted — `bg-accent-400` with `text-primary-900`**,
the page's only lime-ground chip), `h2` 48/48 `primary-50`, lead `text-primary-300` *"We are not a full-service
agency. There is no digital product team, no media buying and no motion department, and we will tell you who to
ring for those."*

`ul.mt-16.divide-y.divide-primary-700.border-y.border-primary-700` — **1 px `#464642` rules above, between and
below** — four `li.group` rows, each `grid gap-6 py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-12` → **486.7 / 681.3 px
columns, 48 px gap, 160 px row height**. Left cell: `h3` **30/36 700**, `group-hover:text-accent-400`, and the
price `font-mono text-xs uppercase tracking-wider text-accent-400` (**`FROM €14,000`** — note the reference renders
lowercase `from`; the `uppercase` class makes it FROM). Right cell: `p.leading-relaxed.text-primary-200` then
`ul.mt-4.flex.flex-wrap.gap-2` of square bordered pills:

| # | discipline   | price      | body                                                                                                                        | pills (count)                                                        |
| - | ------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1 | **Identity** | from €14,000 | Wordmarks, symbols and the system around them — typography, colour, layout rules and the guidelines document that makes it usable by people who are not us. | Wordmark · Type system · Colour spec · Guidelines PDF · Artwork files (**5**) |
| 2 | **Editorial** | from €9,000 | Books, journals, reports and annual publications. Grid, hierarchy and a template your team can actually produce the next issue in. | Grid · Paragraph styles · InDesign template · Sample spreads · Handover session (**5**) |
| 3 | **Packaging** | from €11,000 | Structure, artwork and print specification, taken through to a signed-off proof with your printer rather than handed over as a visual. | Dielines · Print-ready artwork · Colour spec · Proof sign-off (**4**) |
| 4 | **Typography** | from €6,500 | Custom lettering, wordmark drawing and type selection and licensing advice. Occasionally a full custom face, though that is a longer conversation. | Vector lettering · Kerning pairs · Licence guidance (**3**) |

### 4 — `#process` — "Four stages, fixed price" (862 px, transparent, `py-28`)

`max-w-6xl` (1,088). Intro `max-w-2xl`: chip **HOW A PROJECT RUNS** (`accent-400` ground on this light band,
`primary-900` text — **the chip inverts again**), `h2`, lead *"Quoted as a whole rather than hourly, with the
stages and the payment points agreed before anything starts."*

`ol.mt-14.grid.gap-px.bg-primary-200.sm:grid-cols-2.lg:grid-cols-4` — **the 1 px ground is the divider**: four
**271.25 × 322 px** white cells (`bg-white p-6`, `dark:bg-primary-900`) separated by the `primary-200` showing
through the 1 px gaps. Each cell: a row with `span.font-mono.text-3xl.font-bold.text-accent-500` (**01 … 04**,
30 px, **the only lime numerals on the page**) and `span.font-mono.text-[11px].uppercase` (the duration,
`primary-500`); `h3.mt-4.text-lg.font-bold`; `p.mt-2.flex-1.text-sm.leading-relaxed.text-primary-600`; and a
footer `p.mt-5.border-t.border-primary-200.pt-3.text-xs` = *You get* (`primary-500`) + a `font-semibold` value.

| # | duration | h3 | you get |
| - | -------- | -- | ------- |
| 01 | 1–2 weeks | Brief and audit | Written brief, agreed scope |
| 02 | 2–3 weeks | Concepts | Two routes, in application |
| 03 | 3–5 weeks | Development | Full system, all applications |
| 04 | 1–2 weeks | Artwork and handover | Artwork, guidelines, proof sign-off |

Bodies: **01** — *"We read what exists, talk to the people who will use the thing, and write the brief back to you
in our own words. Roughly a third of projects change shape at this point."* · **02** — *"Two directions, presented
in context rather than on a white background. We show you the one we recommend and say why, rather than presenting
three and asking you to choose."* · **03** — *"The chosen route taken to completion across every application in
scope. This is the longest and least visible stage, and it is where most of the actual design happens."* ·
**04** — *"Production-ready files, colour specification, and a guidelines document. We speak to your printer
directly and check the first proof."*

Then `ul.mt-10.grid.gap-3.sm:grid-cols-3` — three footnotes, each a **1.5 × 1.5 px `accent-500` square** and
`text-sm text-primary-700`:

1. *"Fifty percent on commencement, fifty on final artwork delivery. Nothing invoiced in between."*
2. *"Two rounds of revisions are included at each stage. Further rounds are quoted, not silently absorbed."*
3. *"You own the final artwork outright on payment. We license nothing back to you."*

### 5 — `#deliverables` — "The file list, published" (766 px, `primary-50`, `py-28`)

`max-w-6xl` (1,088). Intro `max-w-2xl`: chip **WHAT YOU ACTUALLY RECEIVE** (`primary-900` ground, `accent-400`
text — the `#work` treatment), `h2`, lead *"Every studio gets asked this and most answer it in a proposal. It is on
the website because it is the most practical question a client has."*

`div.mt-14.grid.gap-6.md:grid-cols-3` → **three 346.7 px columns, 24 px gap**, each with a **2 px `primary-900`
top rule** (`border-t-2 border-primary-900 pt-5`, `dark:border-accent-400`), an `h3` `font-bold uppercase
tracking-wider` and `ul.mt-4.space-y-3`. Each row is a baseline-aligned pair — `span.text-sm.font-medium` (the
file) and `span.font-mono.text-[11px].uppercase.text-primary-500` (the format) — with an optional `p.mt-0.5.text-xs`
note under it. **Row heights 39 / 21 px** (a row with a note is 39, without is 21):

| column            | rows (name — format — note)                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **ARTWORK**       | Primary logo — `AI · EPS · SVG · PDF` — Positive, reversed and single-colour versions · Secondary marks — `AI · EPS · SVG` · Web-ready exports — `SVG · PNG @1x @2x @3x` · Favicon set — `SVG · ICO · PNG` |
| **SPECIFICATION** | Colour reference — `PDF` — Pantone, CMYK, RGB and HEX with tolerances · Typography spec — `PDF` — Families, weights, sizes and licence status · Clear space and minimum sizes — `PDF` · Guidelines document — `PDF · InDesign` |
| **WORKING FILES** | Source design files — `INDD · AI` — Layered, named and organised · Fonts used — `Licence details` — Licences bought in your name, not ours · Image assets — `TIFF · PSD` · Print dielines — `PDF · DXF` |

Closing note `mt-10` — a **white box with a 4 px `accent-400` left border**, `px-5 py-4 text-sm
leading-relaxed text-primary-700` (1,088 × 78):
*"Everything is supplied in open or industry-standard formats. You will never need a subscription to our software
to open your own artwork, and we do not hold source files hostage — you own them on final payment, in full,
without a licence back to us."*

### 6 — `#testimonials` — "Mostly about the handover" (796 px, `gray-50`, `py-20 lg:py-28`)

Centred `max-w-3xl`: pill **Clients** (`bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`,
**71 × 28**), `h2` **36/40**, lead `text-lg gray-600` *"Which is the part that tends to go wrong elsewhere."*
Then `div.relative.mt-16[data-carousel]` → `overflow-hidden` → `flex[data-carousel-track]` with **three
`[data-carousel-slide]`** (`flex-shrink-0 px-3`, **405 px** each at 1440 → all three visible in the 1,216 px
track; **358 px** at 390 → one visible). Each card is `rounded-2xl bg-white p-8 shadow-soft` (**381 px wide;
320 / 292 / 348 px tall — unequal heights, top-aligned**), containing a row of **five 20 px stars in
`primary-400`** (`fill: currentColor`, `mb-6`), the quote `18/28 500 gray-900`, and a **48 px `primary-100`
avatar disc with the initial in `primary-600`** beside name (`16/600`) + role (`14/400 gray-600`).

1. *"The guidelines were written for someone who is not a designer, which is exactly who ended up using them. We
   have produced six issues without ringing them once."* — **N** · Niamh Cassidy · Editor, The Liffey Review
2. *"They rang our printer directly and sorted a colour problem before it became our problem. Nobody has ever done
   that for us before."* — **E** · Eoin Barry · Kilbeggan Coffee Roasters
3. *"We asked for something that would survive being acquired and they took that brief literally, which we
   appreciated more than a beautiful thing we would have had to abandon."* — **C** · Claire Duggan · Harbour & Vale

### 7 — `#faq` — "Money, ownership and scope" (820 px, white, `py-20 lg:py-28`)

Centred `max-w-3xl`: pill **Questions**, `h2` 36/40, lead *"The three things worth settling before a project
starts."* Then `mt-16 divide-y divide-gray-200` with five rows (`py-6`, **81 px** each), each
`button[data-faq-toggle]` = question (`18/600`) + a **32 × 32** `rounded-full bg-gray-100` disc holding a `+`
icon (`data-faq-icon`), and a panel div (`overflow-hidden transition-all duration-300`) that the kit collapses to
`max-height: 0`.

1. **Why fixed price rather than hourly?** — *"Because hourly punishes you for our inefficiency and makes it
   impossible for you to budget. We quote the whole project after the brief stage, and if we misjudge it that is
   our problem rather than an additional invoice."*
2. **Who owns the work?** — *"You do, outright, on final payment — including source files. We do not license
   artwork back to clients and we do not charge separately for the working files. The only exception is
   typefaces, which are licensed from their foundries in your name."*
3. **What if we do not like either concept?** — *"It has happened twice in eleven years. Both times we went back
   to the brief, because two rejected routes almost always means we misread the problem rather than that we need a
   third route. There is no additional charge for that."*
4. **Do you do websites?** — *"We design them and hand over to a developer, or work alongside yours. We do not
   build them, and a studio that claims equal expertise in identity, print production and front-end development is
   usually stretching at least one of those claims."*
5. **How far ahead are you booking?** — *"Six to ten weeks for a full identity, less for smaller pieces. We run
   three projects at a time and will tell you honestly if the timeline does not suit rather than taking the work
   and delaying you."*

### 8 — `#contact` — "Tell us what the actual problem is" (452 px, 135° `#575751` → `#2b2b28`, `py-20 lg:py-28`)

`relative overflow-hidden`; an `aria-hidden` layer holds two `256 × 256` `bg-white/10` `blur-3xl` discs at
`-right-20 -top-20` / `-bottom-20 -left-20` and the **40 px white dot grid** at 10 %. Inside,
`container relative z-10` → `max-w-3xl` centred: `h2` **48/48 white** (768 × 48), lead `text-lg text-primary-100`
*"The brief you send is rarely the brief we end up working to, and that is fine. Start with the problem."*, then
two CTAs: **Start a project** (`bg-white text-primary-700`, radius 8, **203 × 56**, arrow icon) and
**Read the deliverables list** → `#deliverables` (`border-2 border-white/30`, radius 8, **286 × 60**, list icon).

### 9 — Footer (568 px, `gray-900 #111827`, `pt-24`, no bottom padding)

`container` → `grid gap-12 lg:grid-cols-12 lg:gap-8` (**twelve 72 px columns**, 32 px gaps, 1,216 total):

- **`lg:col-span-4`** — the light logo (**196 × 40**), blurb *"A graphic design studio working in identity,
  editorial, packaging and type. Six people, print-first, and a deliverables list published before you ask for
  it."* (`max-w-xs`, `gray-400`), three **40 × 40** social chips (`rounded-lg bg-gray-800 p-2.5`, X / Instagram /
  LinkedIn icons, `aria-label`s, **all `href="#"`**), and three contact lines in `14 / gray-400 space-y-2`:
  *14 Windmill Lane, Dublin, D02 F206* · `tel:+353 1 559 0284` · `mailto:studio@overprint.design`.
- **`sm:grid-cols-3 lg:col-span-5`** — **SPACES** (Hot Desk · Dedicated Desk · Private Office · Meeting Rooms,
  all → `#spaces`), **COMPANY** (About → `/about`, Blog → `/blog`), **SUPPORT** (Contact → `#contact`,
  Terms → `/terms`).
- **`lg:col-span-3`** — **STAY UPDATED**, *"Four or five times a year: work we have shipped, and the odd note
  about print production."*, and a `form[data-newsletter-form]` with `input[type=email][required]`
  (placeholder *"Enter your email"*, `bg-gray-800 border-gray-700 rounded-lg`, **46 px** tall, 164 wide at 1440)
  + **Subscribe** (`bg-primary-600`, radius 8, **108 × 46**).

Bottom bar: `mt-16 border-t border-gray-800 py-8` — *"© 2026 Overprint. All rights reserved."* (`gray-500`) and
*Privacy Policy* → `/privacy`, *Terms of Service* → `/terms`, *Style Guide* → `/elements`.

### Chrome (outside the flow)

- **`#preloader`** — `fixed inset-0 z-[100] bg-white` with a 40 px `border-4 border-gray-200 border-t-primary-600`
  spinner; removed on `window.load` (+300 ms fade).
- **`#scroll-progress`** — `fixed top-0 left-0 z-[60] h-0.5 bg-primary-600`, inline `width` = scroll fraction.
- **skip link** — `sr-only focus:not-sr-only … focus:bg-primary-600`, *"Skip to content"* → `#main-content`.
- **`#mobile-cta`** (`lg:hidden`, `fixed bottom-0 inset-x-0 z-40 border-t bg-white p-3`) — **69 px** tall at 390:
  **Call Now** (`tel:5556789012`, `bg-gray-100`) and **Book a Tour** (`bg-primary-600` → `#contact`). Both labels
  and the number are **coworking-template leftovers** (see §Known reference defects).
- **`#cookie-consent`** — `fixed bottom-0 inset-x-0 z-50 border-t bg-white p-4 sm:p-6`, `role="dialog"`
  `aria-label="Cookie consent"`, copy *"We use cookies to enhance your experience. By continuing to visit this
  site you agree to our use of cookies."* + **Decline** (outline) / **Accept All** (`bg-primary-600`); the kit
  slides it in **1,500 ms** after load (measured visible, 87 px tall, `transform: translateY(0)` at 1440).
- **`#back-to-top`** — 48 × 48 `primary-600` disc, `bottom-6 right-6`, `opacity: 0; pointer-events: none;
  transform: translateY(16px)` at rest.

## Behaviour the recreation must reproduce

Abstracted from the two inline scripts **plus** the shared kit (only the handlers whose hooks exist here):

1. **Theme selection (inline, before paint).** `localStorage.theme === 'dark'`, or no stored value and
   `prefers-color-scheme: dark` → `<html class="dark">`. The moon button (`[data-dark-toggle]`) toggles the class
   and writes `theme` to `localStorage`. Measured: clicking it at 1440 sets `html.dark`, `body` → `#030712`,
   hero gradient → `#111827 → #030712`, `#deliverables` → `primary-900/40`, `#faq` → `#030712`.
2. **Header shadow past 50 px** (`[data-header]` adds/removes `shadow-lg`); the header stays `sticky` and keeps
   `bg-white/80` — it does **not** change height (measured 81 px at `scrollY = 400`).
3. **Scroll progress** — `#scroll-progress.style.width` follows `scrollY / (scrollHeight − innerHeight)`.
4. **Typewriter** on `[data-typewriter]` — parses the JSON array, prepends the element's current text, then every
   **3,000 ms** fades the span out (`opacity 0; translateY(10px)`, 300 ms), swaps text, fades back in. The
   element is forced `display:inline-block`. Measured: four 900 ms samples of `contact with production`, then
   `a print run` — i.e. a ~3.6 s cycle including the fade.
5. **Parallax** on `[data-parallax]` — `translateY(scrollY × factor)` with factors **0.15** and **−0.1**, skipped
   when the element is more than 200 px outside the viewport.
6. **Reveal on scroll** — **23** `[data-animate="fade-in-up"]` elements (**19** of them carrying a `data-delay`):
   **hero 6** (badge, `h1`, lead, CTA row, stat strip, image; delays 100/200/300/400/500, the badge paints
   immediately), **`#testimonials` 6** (pill 100, `h2` 200, lead immediate, three cards 100/200/300),
   **`#faq` 8** (pill 100, `h2` 200, lead immediate, five rows 100/150/200/250/300) and **`#contact` 3**
   (lead 100, CTA row 200, `h2` immediate). `#work`, `#disciplines`, `#process` and `#deliverables` paint
   immediately. IO `threshold .1`, `rootMargin 0 0 -10%`, and the whole effect **bails out** under
   `prefers-reduced-motion: reduce`.
7. **FAQ accordion** — single-open: sets the clicked panel's `max-height` to `scrollHeight`, closes the others,
   rotates `[data-faq-icon]` **45°** when open (measured: panel 0 → 88 px and `matrix(.707,.707,−.707,.707)`
   on the first row).
8. **Video modal** — `[data-video-modal]` builds a `fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm` overlay
   with a `max-w-4xl` `iframe` of the URL in the attribute (`…/embed/dQw4w9WgXcQ` — a placeholder), a close
   button at `-top-12 right-0`, a backdrop click and `Escape` to dismiss.
9. **Mobile disclosure** — `[data-mobile-toggle]` flips `hidden` on `[data-mobile-menu]`, swaps the hamburger
   path for an X, maintains `aria-expanded` (measured `true` + **446 px** panel at 390).
10. **Smooth anchor scrolling** — every `a[href^="#"]` that resolves to an element scrolls with
    `offset = headerHeight + 20` and calls `history.pushState`.
11. **Scroll-spy** — the seven `[data-nav-link]` labels get `nav-active` while their section is in
    `rootMargin: -20% 0 -70%` (the screenshot shows **Deliverables** bolded, i.e. the reference mid-scroll).
12. **Testimonial carousel** — `[data-carousel]` + `[data-carousel-track]`; the kit derives slides-per-view from
    the track width. At **1440**: 3 slides × 405 px fill the 1,216 px track → **1 page, 0 dots, arrows
    `display: none`**, and clicking next does not transform the track (measured `matrix(1,0,0,1,0,0)` before and
    after). At **390**: 1 slide per view → **3 dots and both arrows visible** (`display: flex`), slides 358 px.
13. **Cookie strip** — shown after 1,500 ms when `localStorage['cookie-consent']` is absent; either button slides
    it out and removes the node in 300 ms.
14. **Back-to-top** — visible past 300 px; click scrolls smoothly to `0`.
15. **Preloader** — removed on `load` + 300 ms; must never trap content when `load` has already fired (see
    `docs/conventions.md` §Document readiness).
16. **Nothing binds to the newsletter form.** The kit's validator looks for `form[data-validate]`; the footer form
    carries `data-newsletter-form`, so submitting it performs a **native POST to the same URL** and reloads the
    page. The recreation must not reproduce a bare reload (see §Deliberate deviations D6).

## Data-attribute inventory (measured on the live index)

| attribute | count | element | owner |
| --------- | ----: | ------- | ----- |
| `data-header` | 1 | `<header>` | kit — `shadow-lg` past 50 px |
| `data-dark-toggle` | 1 | header moon button | kit — toggles `html.dark`, persists `theme` |
| `data-mobile-toggle` / `data-mobile-menu` | 1 / 1 | hamburger / panel | kit |
| `data-nav-link` | **7** | Work, Disciplines, Process, Deliverables (`work`, `disciplines`, `process`, `deliverables`) + Studio, Journal, Contact (`/about`, `/blog`, `/contact`) | kit — scroll-spy (the three page links never match a section id) |
| `data-typewriter` | 1 | the `h1`'s gradient span (JSON of 3 phrases) | kit |
| `data-parallax` | 2 | the two hero blobs (`0.15`, `-0.1`) | kit |
| `data-animate` / `data-delay` | **23** / **19** | hero 6, `#testimonials` 6, `#faq` 8, `#contact` 3 | kit |
| `data-video-modal` | 1 | "Watch Demo" button (YouTube URL) | kit |
| `data-faq-toggle` / `data-faq-icon` | **5** / **5** | the five questions / their discs | kit |
| `data-carousel`, `-track`, `-slide`, `-dots`, `-prev`, `-next` | 1 / 1 / **3** / 1 / 1 / 1 | the testimonial row | kit |
| `data-newsletter-form` | 1 | footer form | **nobody** — no kit handler |
| `data-cookie-accept` / `data-cookie-decline` | 1 / 1 | cookie strip | kit |
| `data-accordion-toggle`, `data-billing-*`, `data-counter`, `data-blog-*`, `data-filter`, `data-lightbox`, `data-validate` | **0** | — | kit handlers present, **no hooks** — do not implement them |

## Anchor map (all 41 `a[href]`)

| href | count | labels |
| ---- | ----: | ------ |
| `/theme/overprint/contact` | **6** | Start a project (header, mobile panel, hero, `#contact`), Contact (nav, SUPPORT column) |
| `/theme/overprint/#spaces` | **4** | Hot Desk · Dedicated Desk · Private Office · Meeting Rooms — **the id does not exist** |
| `/theme/overprint/about` | 3 | Studio (nav, mobile panel), About (COMPANY) |
| `/theme/overprint/blog` | 3 | Journal (nav, mobile panel), Blog (COMPANY) |
| `#` | **3** | the three social chips (dead) |
| `/theme/overprint/` | 2 | header logo, footer logo |
| `/theme/overprint/#work` | 2 | Work (nav, mobile panel) |
| `/theme/overprint/#disciplines` | 2 | Disciplines (nav, mobile panel) |
| `/theme/overprint/#process` | 2 | Process (nav, mobile panel) |
| `/theme/overprint/#deliverables` | 2 | Deliverables (nav, mobile panel) |
| `/theme/overprint/#contact` | 2 | Contact (nav, mobile panel) |
| `/theme/overprint/terms` | 2 | Terms (SUPPORT) · Terms of Service (bottom bar) |
| `#main-content` | 1 | Skip to content |
| `#work` | 1 | **See the work** (hero secondary CTA) |
| `#deliverables` | 1 | Read the deliverables list (`#contact`) |
| `tel:+353 1 559 0284` | 1 | footer phone (valid) |
| `tel:5556789012` | 1 | mobile CTA bar `Call Now` (**placeholder, US-shaped**) |
| `mailto:studio@overprint.design` | 1 | footer e-mail |
| `/theme/overprint/privacy` · `/theme/overprint/elements` | 1 each | Privacy Policy · Style Guide |

That is **7 dead or dangling** (`3 × #` + `4 × #spaces`) out of 41 — the design's one real link defect, and the
reason the recreation must re-point the "Spaces" column (D4).

## Inner-page inventory (6 routes, all HTTP 200 with a trailing slash, 2026-10-25)

| route | bytes | `<title>` / `<h1>` | holds |
| ----- | ----: | ------------------ | ----- |
| `/about/` | 29,445 | *The studio* | *Print-first, and unfashionably so*, *Three ways we work* (three principles as `h3`s — *We present one recommendation*, *Artwork is taken to proof*, *You own everything*), *Who is here* (four named people: Saoirse Kelly, Marcus Adeyemi, Freya Lund, Cian Doherty) and *Six to ten weeks out* |
| `/blog/` | 34,998 | *Blog* / *Insights & Updates* | six posts — *Present One Recommendation, Not Three Options*, *Publish Your Deliverables List*, *Two Spot Colours Is a Better Brief Than Full Colour*, *Write Guidelines for the Person Who Is Not a Designer*, *Why We Quote Fixed Price*, *Check the Proof Yourself* — plus a *Stay in the Loop* block |
| `/contact/` | 28,545 | *Start a project* | **the site's only real form** — `name` (text, required), `email` (required), `subject` (text), `message` (textarea, 5 rows, required), submit *Start a project* — beside a Studio card (Email / Phone / Studio / Hours) |
| `/elements/` | 49,083 | *Elements* | the style guide: type scale (h1–h3), Buttons (variants/sizes/disabled), Badges & Tags, Alerts / Notices, Cards (basic + hover shadow) |
| `/privacy/` | 30,539 | *Privacy Policy* | nine numbered sections |
| `/terms/` | 29,288 | *Terms of Service* | twelve numbered sections |

## Class census (1440 px)

**365 distinct class tokens** in the markup; the 62,102 B sheet defines **586 plausible class selectors**, of
which **222 are unused by this page** (the shared kit's `.btn` / `.btn-primary` / `.btn-secondary` component
classes — **0 uses in the markup** — plus every other palette's light/dark pairs and the utilities for handlers
with no hook here: counters, billing toggle, blog search, lightbox, form validation). **0 phantom classes** — with
one trap: the second work article's `lg:[&>figure]:order-2` is HTML-escaped in the source (`lg:[&amp;>figure]:…`)
and compiles to `.lg\:\[\&\>figure\]\:order-2`, so a census that does not un-escape **and** decode entities
reports exactly one phantom.

The technical layer is heavy: **`font-mono` appears 56 times** (company lines, `dt`s, durations, prices, formats,
pills, numerals, `You get`, stars' parent) — more than any other single utility except `font-bold`.

## Screenshot analysis (`overprint-template.jpg`, 2400 × 1892, 307,550 B, baseline JPEG)

The listing screenshot is a **macOS browser capture of the fold only** (traffic-light chrome, 1200 × 946 CSS px
after the 2 × device pixel ratio), not a full-page composition:

- **Above the fold:** paper-white hero with a barely-there warm cast; the pill badge with its two-tone pulse dot;
  the two-line `h1` with the **second line in the charcoal→stone gradient** ("contact with production"); the lead;
  three CTAs; a **hairline `border-t`** separated stat strip showing **11 · 140+ · 6 · 3**; and the top third of
  the 2:1 rounded photograph (a designer's desk — drawing tablet, keyboard, a book titled *Graphic Design Play
  Book*), which is the one warm, saturated element in an otherwise achromatic screen.
- **Nav:** seven labels, with **Deliverables rendered bolder than its neighbours** — the capture was taken
  mid-scroll with the scroll-spy active, which is the only place the active state is documented.
- **Logo:** the two overlapping plates read as a **single lime square with a knocked-out corner** at 40 px; the
  second (overlap) tone is only visible above ~120 px.
- **Type feel:** Space Grotesk's single-storey `a`, flat-sided `g` and squarish terminals make the page read
  *technical* rather than editorial — which is the point; the brand's only "warm" gesture is the photograph.
- **What the screenshot does NOT show** (and the DOM does): the lime chips, the near-black disciplines band, the
  4-up process grid, the file list, the quotes and the gradient close. Trust the DOM and the measured tokens for
  everything below the fold; the screenshot is evidence for the fold only.

## Known reference defects — measure them, do not reproduce them

1. **The `h1` changes height every three seconds at 390 px.** Measured span boxes: `contact with production`
   **358 × 80**, `a print run` **358 × 40**, `being handed to someone else` **358 × 80** — so the `h1` is
   **120 → 80 → 120 px** and the whole page shifts **40 px** on each cycle (a real CLS, every 3 s, forever).
   At 1440 all three fit one line (60 px) and only the *width* changes (677 / 288 / 845). Fix: reserve two lines
   (`min-h` in `lh` units) and keep a static accessible name.
2. **`og:image` points at `/og-image.jpg` → 404**, on both `preview.colorlib.com/og-image.jpg` and the theme
   path. Ship a real social card or drop the tag.
3. **The favicon is another template's.** `favicon.svg` (377 B) is an **orange `#d97706` rounded square** with a
   white device glyph — a leftover that appears nowhere in the lime/charcoal palette. Replace it with the plate
   mark; do not ship the orange square.
4. **The hero blobs animate nothing.** `@keyframes hero-float` is
   `0%, to { transform: translate(0) scale(1) }` — a single keyframe list with identical endpoints, so
   `animate-hero-float` (8 s) and `animate-hero-float-reverse` (10 s) run a **no-op** animation on two `blur-3xl`
   discs. The parallax on the same two elements (factors `0.15` / `−0.1`) is what actually moves them.
5. **`#spaces` is a dead id and there is no "spaces" content** — the footer's four SPACES links (*Hot Desk*,
   *Dedicated Desk*, *Private Office*, *Meeting Rooms*) are coworking-template leftovers on a print studio's
   page, and all four point at an id that does not exist.
6. **The mobile bar speaks a different template's language** — *Call Now* → `tel:5556789012` (a US placeholder,
   not the footer's `+353 1 559 0284`) and *Book a Tour* (coworking, not a studio).
7. **Three dead `#` social chips** (X, Instagram, LinkedIn) — the only `aria-label`d anchors with no target.
8. **The FAQ promises three things and lists five.** Lead: *"The three things worth settling before a project
   starts."*, accordion: **5** rows (money, ownership, scope, websites, booking). Pick one number.
9. **The FAQ accordion has no `aria-expanded` / `aria-controls`.** The kit only animates `max-height` and rotates
   the icon, so screen readers get five buttons with no state. Add the attributes and `hidden` on closed panels.
10. **Motion is unguarded outside the reveal.** `prefers-reduced-motion` is honoured by `[data-animate]` only —
    the typewriter keeps cycling, the blobs keep their (no-op) animation and the parallax listener keeps writing
    transforms. Guard all three.
11. **The newsletter form submits natively** (no handler, no `action`) so pressing *Subscribe* reloads the page.
    Give it a real inline success state instead.
12. **`#testimonials` is described as a carousel but is a static 3-up row at ≥1024** — 3 slides × 405 px exactly
    fill the track, so the kit renders **0 dots and no arrows** and `next` is a no-op. Only below `lg` does it
    behave as a carousel. Keep both behaviours; do not "fix" the desktop row into a slider.

## Deliberate deviations from the reference (single-page recreation)

Recorded here so the implementer does not "restore fidelity" by re-breaking them:

- **D1 — nav targets.** The reference's seven labels are four bands and three pages. One page has bands, so the
  nav becomes `Work` → `#work`, `Disciplines` → `#disciplines`, `Process` → `#process`,
  `Deliverables` → `#deliverables`, `Questions` → `#faq`, `Contact` → `#contact`, and the **Start a project** CTA
  → `#contact`. That is **six labels + CTA** where the reference has seven + CTA: `Studio` is dropped (the
  `#disciplines` band already carries the studio's argument) and `Journal` becomes `Questions`, keeping the
  button geometry and the item count within one.
- **D2 — the enquiry form moves into `#contact`.** The home page has **no form**; it lives on `/contact`, which
  the design links to six times. A one-page template whose primary CTA goes nowhere useful is a broken artefact,
  so the `#contact` band gains the reference's four fields (`name`, `email`, `subject`, `message`) beneath the two
  CTAs, in a `max-w-xl` left-aligned block under the centred copy, with client-side validation and a visible
  success state (no backend). The band's `h2`, lead and both CTAs stay exactly as authored, and the band grows —
  document that in the PR rather than compressing the padding to hide it.
- **D3 — Component Dock.** AGENTS.md rule 5 requires `https://www.componentdock.com/` ("Component Dock") in the
  footer. The three dead social chips become **one** Component Dock chip (globe icon, same 40 × 40 geometry,
  `rel="noopener"`), and the bottom bar gains no extra link — the chip is the requirement.
- **D4 — the SPACES column becomes real links.** *Hot Desk · Dedicated Desk · Private Office · Meeting Rooms* and
  their dead `#spaces` target are leftovers. Replace the column with **four honest links that exist in this app**
  — `Work` → `#work`, `Disciplines` → `#disciplines`, `Process` → `#process`, `Deliverables` → `#deliverables` —
  and rename the heading from **SPACES** to **THE STUDIO**. Keep *Book a Tour* out of the app entirely.
- **D5 — zero dead links, one phone number.** No `href="#"` anywhere; the mobile CTA bar becomes **Enquire**
  (`#contact`) + **Call the studio** (`tel:+35315590284`), reusing the one valid number.
- **D6 — the newsletter form is local.** Inline validation + a visible confirmation, never a native POST/reload.
- **D7 — images.** All four photographs become placeholders
  (`https://picsum.photos/seed/makeready-<n>/<w>/<h>`) at the reference's intrinsic sizes: hero **1200 × 600**
  (rendered 1,024 × 512), the three case-study figures **700 × 525** (rendered 580 × 435). Never hotlink the
  Unsplash IDs. Give **all four** descriptive `alt`s (the reference leaves the three case-study figures as
  `alt=""`).
- **D8 — the wordmark.** It is a **507 B SVG with a live `<text>` node** (Space Grotesk 21 px / 700,
  `letter-spacing −0.4`) over three rects: two 18 × 18 plates (`rx 2`) offset by 10 / 6, and the **8 × 12 overlap
  knocked through** in a third tone (`#84b012` on the light logo, `#a8dc1f` on the dark one). Recreate it as an
  inline SVG component with the text preserved as text (or as styled text beside a drawn mark), in both variants
  (`logo.svg` = charcoal plate + lime plate + `#84b012` overlap + charcoal words; `logo-light.svg` = `#f7f7f6`
  plate + lime plate + `#a8dc1f` overlap + `#f7f7f6` words). Do not ship a rasterised logo and do not depend on a
  file we do not own.
- **D9 — both themes, no pinning.** The page ships a working toggle: light default, `prefers-color-scheme`
  honoured, choice persisted, and the one element that does not invert (the `h1`'s `.text-gradient`) kept.
- **D10 — the `h1` gets a fixed two-line box** at every width (defect 1) and a static accessible name, with the
  animated span `aria-hidden`.

## Requirements

### Requirement 1: Page chrome (preloader, progress bar, skip link, cookie strip, back-to-top)

The app SHALL render the reference's out-of-flow chrome: a self-dismissing preloader, a 2 px charcoal
scroll-progress bar, a skip link to `#main-content`, a bottom cookie strip and a 48 px back-to-top disc.

#### Scenario: Preloader never traps content

- **GIVEN** the app mounts in jsdom, or in a browser whose document is already `complete`
- **WHEN** no further `load` event will fire
- **THEN** the preloader is treated as finished (`loaded || document.readyState === 'complete'`)
- **AND** in a real browser it fades over 300 ms and is removed from the DOM

#### Scenario: Progress bar and back-to-top

- **GIVEN** the page scrolled to 50 % of its scrollable height
- **THEN** `#scroll-progress` is **2 px** tall (`h-0.5`), `primary-600` `#575751`, `fixed top-0 left-0 z-[60]`,
  and about half the viewport wide
- **AND** below **300 px** of scroll the back-to-top disc is `opacity: 0` / `pointer-events: none` /
  `translateY(16px)`; above it, `opacity: 1` and `translateY(0)`
- **AND** the disc is **48 × 48**, `rounded-full`, `primary-600`, `shadow-lg shadow-primary-600/25`,
  `fixed bottom-6 right-6`, `aria-label="Back to top"`, and scrolls smoothly to the top

#### Scenario: Cookie strip

- **GIVEN** no stored decision in `localStorage['cookie-consent']`
- **THEN** the strip slides up **1,500 ms** after load, is **87 px** tall at 1440 (`p-4 sm:p-6`), and carries
  `role="dialog"` + `aria-label="Cookie consent"`
- **AND** *Decline* stores `essential` and *Accept All* stores `accepted`, both sliding the strip out and
  removing it within 300 ms
- **AND** it is not shown again on a later visit with a stored decision, and it never overlaps the footer's
  bottom row or the mobile CTA bar (deviation from the reference)

#### Scenario: Skip link and landmarks

- **THEN** the first focusable element is *"Skip to content"*, visually hidden until focused, then a
  `rounded-lg bg-primary-600 px-4 py-2` chip
- **AND** the page exposes `header` / `main#main-content` / `footer` landmarks and the skip link targets
  `#main-content`

### Requirement 2: Header — sticky, 81 px at ≥1024, nav only from `lg`, working theme toggle

#### Scenario: At rest at 1440

- **THEN** the header is **81 px** tall (`h-20` + 1 px bottom border), `position: sticky`, `top: 0`, `z-50`,
  `background: rgba(255,255,255,.8)` with `backdrop-filter: blur(16px)`, `border-bottom: 1px solid #e5e7eb`
- **AND** the logo is **196 × 40** at `x = 112`; six nav labels are `14/500 gray-600` with a **32 px** gap;
  the moon button, the **Start a project** CTA (**139 × 40**, `primary-600`, radius 8, `px-5 py-2.5`) and the
  hamburger sit right
- **AND** the hamburger is `display: none` and the nav `display: flex` at 1440

#### Scenario: Stuck state

- **GIVEN** `scrollY > 50`
- **THEN** the header gains `shadow-lg` and **keeps** its height, position and 80 % white ground
- **AND** the section whose `id` matches a `[data-nav-link]` marks that label active

#### Scenario: Breakpoints

- **THEN** at **1024** the full nav and the CTA are visible; at **768** and **390** they are gone and the
  hamburger + moon remain, with the header **65 px** tall (`h-16` + border)
- **AND** the mobile panel opens to **446 px** at 390 with `aria-expanded="true"`, listing the six labels as
  `block py-3 text-base` rows plus a full-width *Start a project*

#### Scenario: Theme toggle

- **GIVEN** the moon button is pressed
- **THEN** `<html>` gains/loses `class="dark"`, `localStorage.theme` is set to `dark`/`light`, and `body`
  becomes `#030712` on `#f3f4f6` in dark and `#ffffff` on `#111827` in light
- **AND** first paint with no stored value follows `prefers-color-scheme` and never flashes the wrong theme
  (the inline script runs before paint)

### Requirement 3: Hero — gradient ground, typewriter `h1`, three CTAs, four stats, 2:1 image

#### Scenario: Composition at 1440

- **THEN** the hero is **1,409 px** tall on `linear-gradient(in oklab, #f7f7f6, #ffffff)`, with two blurred
  `aria-hidden` discs behind a `-z-10` wrapper
- **AND** the badge is **345 × 34** (`rounded-full`, `border-primary-200`, `bg-primary-50`, `14/500
  primary-700`) reading *Dublin · Identity, editorial, packaging, type* with an 8 px `animate-ping` dot
- **AND** the `h1` is **896 × 120**, Space Grotesk **700 60/60**, `letter-spacing −1.5 px`, first line
  *Design that survives* and second line the `.text-gradient` span (`#575751 → #8b8b84`, `background-clip: text`)
- **AND** the lead is **672 px** wide, **20/28**, `gray-600`
- **AND** the CTAs measure **187 × 48** (filled), **150 × 50** (outline) and a **48 × 48** play disc
- **AND** the stat strip is a 4-cell `grid-cols-4` under a `border-t border-gray-200` with `pt-10`, numerals
  **36/40 700** and labels `14/400 gray-600`
- **AND** the image is **1,024 × 512**, `rounded-2xl`, `shadow-2xl`, `ring-1 ring-gray-200`

#### Scenario: Typewriter behaviour and heading stability

- **GIVEN** the hero rendered at any width
- **WHEN** 3,000 ms pass
- **THEN** the second line cycles `contact with production` → `a print run` → `being handed to someone else`
  with a 300 ms fade out/in and never wraps differently enough to change the `h1`'s height
- **AND** the `h1` keeps a **static accessible name** (the animated span is `aria-hidden`) — deviation D10
- **AND** under `prefers-reduced-motion: reduce` the span does not cycle at all

#### Scenario: Breakpoints

- **THEN** at **768** the `h1` is **48/48** with `letter-spacing −1.2 px`; at **390** it is **36/40** with
  `−0.9 px` and the lead drops to `text-lg`; the stat strip becomes **2 × 2** and the image **358 × 179**

### Requirement 4: `#work` — three brief/approach/outcome case studies

#### Scenario: Section frame

- **THEN** `#work` is **2,001 px** tall at 1440 with `py-28` (112 px), content **1,216 px** (`max-w-7xl`)
- **AND** the eyebrow chip is **135 × 20**, square-cornered, `bg-primary-900` with `text-accent-400`,
  `12/700 uppercase`, `letter-spacing 1.8 px`, reading *Selected work*
- **AND** the `h2` is **48/48 700** at `−1.2 px` and the lead is `16/400 primary-600` in a `max-w-xl`

#### Scenario: Case-study rows

- **THEN** three `article`s are stacked with **64 px** between them, each a **580 / 580** two-column grid with a
  **56 px** gap, `items-center`
- **AND** the **second** article reverses its figure to the right column (`lg:[&>figure]:order-2`, figure at
  `x = 748`), and the first and third keep the figure left at `x = 112`
- **AND** each figure is **580 × 435** (4:3) in a `bg-primary-100` well with a **149 × 28** `accent-400`
  figcaption plate at the top-left reading *Packaging · 2032* / *Editorial · 2031* / *Identity · 2031*
  in `11/700` mono uppercase
- **AND** each text column carries the company line (`12/400` mono uppercase, `+2.4 px`, `primary-500`), an
  `h3` at **30/36 700**, a `dl` with a **2 px `accent-400` left rule and 20 px padding**, three
  `dt`/`dd` pairs (Brief / Approach / Outcome, `dd` `16/26 primary-700`), and a metric line pairing a
  **36/40 700** figure with a `14/400 primary-500` caption
- **AND** the three metrics read exactly **2 colours**, **6 issues**, **60 pp** with the captions tabulated above

#### Scenario: Copy fidelity

- **THEN** the three `h3`s are *A bag that works at 40 mm and at four metres*, *A quarterly that had grown from
  48 pages to 210* and *An identity for a firm that will be bought within five years*
- **AND** every Brief/Approach/Outcome body keeps its concrete number (eleven SKUs, two spot colours, 48 → 210
  pages, 60-page document system) — those numbers are the section's entire credibility

### Requirement 5: `#disciplines` — the dark band, four priced services

#### Scenario: Band and frame

- **THEN** `#disciplines` is **1,103 px** tall on `#141413` with `text-primary-50` and `py-28`
- **AND** the chip **inverts** — `bg-accent-400` with `text-primary-900` — reading *What we do*
- **AND** the lead is `16/400 primary-300` in a `max-w-xl`

#### Scenario: Four rows

- **THEN** the list is `divide-y divide-primary-700 border-y border-primary-700` (1 px `#464642` above, between
  and below), four rows each **160 px** tall and **1,216** wide, split **486.7 / 681.3** with a **48 px** gap
- **AND** each row's `h3` is **30/36 700** and turns **`accent-400` on hover** (`group-hover`)
- **AND** each price is `12/400` mono uppercase `accent-400` — *from €14,000*, *from €9,000*, *from €11,000*,
  *from €6,500*
- **AND** each body is `16/26 primary-200`, followed by square bordered pills (`11/400` mono uppercase,
  `border-primary-600`, pad 4 / 10, **radius 0**): 5, 5, 4 and 3 of them, exactly as tabulated

### Requirement 6: `#process` — four fixed stages with durations and deliverables

#### Scenario: The hairline grid

- **THEN** `#process` is **862 px** tall with `py-28`, content **1,088 px** (`max-w-6xl`)
- **AND** the `ol` is `grid gap-px bg-primary-200` so the **1 px `#d8d8d4` ground is the divider**, with four
  **271.25 × 322** white cells at `lg` (2 × 2 at `sm`, one column below)
- **AND** each cell is `p-6` with `flex flex-col`, the numeral **30/36 mono 700 `accent-500`** (`01 … 04`),
  the duration `11` px mono uppercase `primary-500`, an `h3` at **18/28 700**, a `text-sm leading-relaxed`
  body in `primary-600`, and a *You get* footer above a `border-t border-primary-200`

#### Scenario: Content

- **THEN** the four stages are *Brief and audit* (1–2 weeks), *Concepts* (2–3 weeks), *Development* (3–5 weeks),
  *Artwork and handover* (1–2 weeks)
- **AND** their *You get* values are *Written brief, agreed scope*, *Two routes, in application*,
  *Full system, all applications*, *Artwork, guidelines, proof sign-off*
- **AND** three footnotes follow in a `sm:grid-cols-3` row, each led by a **1.5 × 1.5 px `accent-500` square**,
  stating the 50/50 payment split, the two included revision rounds and outright ownership on payment

### Requirement 7: `#deliverables` — the published file list

#### Scenario: Three columns

- **THEN** `#deliverables` is **766 px** tall on `primary-50` with `py-28`, content **1,088 px**
- **AND** the chip is `bg-primary-900` / `text-accent-400` reading *What you actually receive*
- **AND** three **346.7 px** columns (`gap-6`) each open with a **2 px `primary-900` top rule** and an `h3`
  `16/700 uppercase` at `+0.8 px`
- **AND** rows pair a `14/500` file name with a right-aligned `11` px mono uppercase format label, **39 px**
  tall when a note follows and **21 px** when it does not
- **AND** the closing note is a white box, **1,088 × 78**, with a **4 px `accent-400` left border** and
  `14/400 primary-700` copy

#### Scenario: Row content

- **THEN** the Artwork column lists Primary logo, Secondary marks, Web-ready exports and Favicon set with the
  formats *AI · EPS · SVG · PDF*, *AI · EPS · SVG*, *SVG · PNG @1x @2x @3x*, *SVG · ICO · PNG*
- **AND** Specification lists Colour reference, Typography spec, Clear space and minimum sizes and Guidelines
  document with *PDF*, *PDF*, *PDF*, *PDF · InDesign*
- **AND** Working files lists Source design files, Fonts used, Image assets and Print dielines with *INDD · AI*,
  *Licence details*, *TIFF · PSD*, *PDF · DXF*

### Requirement 8: `#testimonials` — three quotes, a carousel only below `lg`

#### Scenario: At 1440

- **THEN** the band is **796 px** tall on `gray-50` with `py-20 lg:py-28`, centred `max-w-3xl` copy
- **AND** the pill *Clients* is **71 × 28** on `primary-100`, the `h2` is **36/40 700** at `−0.9 px`
- **AND** three cards of **381 px** (`rounded-2xl bg-white p-8 shadow-soft`, `0 4px 16px -4px #0000001a`) sit in
  a 1,216 px track at **320 / 292 / 348 px** tall — **unequal heights, top-aligned**, not stretched
- **AND** each card shows **five 20 px `primary-400` stars**, an `18/500` quote, a **48 px `primary-100`** avatar
  disc with the initial, and name + role
- **AND** with three slides filling the track there are **0 dots and no visible arrows**, and the track does not
  transform on `next`

#### Scenario: Below `lg`

- **THEN** one slide is visible (**358 px** at 390), **three dots** render, and both arrows are visible and
  functional
- **AND** the keyboard and `aria-label`s (*Previous testimonial* / *Next testimonial*) still work

### Requirement 9: `#faq` — five accordion rows, single-open

#### Scenario: Structure

- **THEN** the band is **820 px** tall on white with `py-20 lg:py-28`, the pill *Questions* 28 px, the `h2`
  **36/40 700**, the lead `18/400 gray-600`
- **AND** five rows sit in a `divide-y divide-gray-200` list, each **81 px** tall and **768** wide, the question
  `18/600` and the disc **32 × 32** `rounded-full bg-gray-100`

#### Scenario: Toggling

- **GIVEN** a closed row
- **WHEN** its button is pressed
- **THEN** the panel animates from `max-height: 0` to its `scrollHeight` (first row measured **88 px**) over
  300 ms, the icon rotates **45°**, and any other open row closes
- **AND** the button carries `aria-expanded` and `aria-controls` (deviation — the reference omits both)

### Requirement 10: `#contact` — the gradient close, and a real enquiry form

#### Scenario: Band

- **THEN** the band is **452 px** tall on `135deg #575751 → #2b2b28`, opening with `py-20 lg:py-28`
- **AND** an `aria-hidden` layer holds two `256 × 256` `bg-white/10` `blur-3xl` discs and a **40 px** white dot
  grid at 10 % opacity
- **AND** the `h2` is **48/48 700 white** (768 × 48), the lead `18/400 primary-100`, and the two CTAs measure
  **203 × 56** (white, radius 8) and **286 × 60** (`border-2 border-white/30`, radius 8)

#### Scenario: The form (deviation D2)

- **THEN** beneath the copy a `max-w-xl` form renders `name` (text, required), `email` (email, required),
  `subject` (text) and `message` (textarea, 5 rows, required) with visible labels and inline errors
- **AND** submitting with valid values shows a success message **without a network request**, and submitting
  with invalid values blocks submit and announces the errors

### Requirement 11: Footer — four zones, real links, Component Dock

#### Scenario: Geometry

- **THEN** the footer is **568 px** tall on `gray-900 #111827` with `pt-24` and **no bottom padding** on the plate
- **AND** the grid is `lg:grid-cols-12` (**twelve 72 px columns**, 32 px gaps) split **4 / 5 / 3**
- **AND** the light wordmark renders at **196 × 40**, the blurb is `16/400 gray-400` in a `max-w-xs`, and the
  Component Dock chip is **40 × 40** `rounded-lg`
- **AND** the newsletter input is **46 px** tall with the Subscribe button **108 × 46** and radius 8
- **AND** the bottom bar is `mt-16 border-t border-gray-800 py-8` with the copyright and three legal links

#### Scenario: Links

- **THEN** the second column is headed **THE STUDIO** and points at `#work`, `#disciplines`, `#process`,
  `#deliverables` (deviation D4)
- **AND** no anchor anywhere in the app has `href="#"`, and the only `tel:` is the real Dublin number
- **AND** the footer links `https://www.componentdock.com/` as *Component Dock*

### Requirement 12: Design tokens, type and both themes

#### Scenario: Palette

- **THEN** `@theme` declares the ten-step `primary` ramp exactly as measured (`#f7f7f6`, `#eeeeec`, `#d8d8d4`,
  `#b5b5af`, `#8b8b84`, `#6e6e67`, `#575751`, `#464642`, `#2b2b28`, `#141413`)
- **AND** `accent` declares **only two steps** (`400` `#c3f53c`, `500` `#a8dc1f`) and the app never references a
  missing accent step
- **AND** the testimonial and FAQ bands and the footer use stock Tailwind greys, not palette steps

#### Scenario: Type

- **THEN** Space Grotesk 400/500/600/700 loads from Google Fonts with `display=swap` and no italic is synthesised
- **AND** the mono layer uses the **system `ui-monospace` stack** declared as a theme token, with no webfont
  substitution
- **AND** the heading scale holds: `h1` 60/48/36, band `h2`s 48 → 30, quote/FAQ `h2`s 36, `#contact` `h2` 48

#### Scenario: Themes

- **THEN** light is the default, dark applies `body { background:#030712; color:#f3f4f6 }`, and both are
  reachable from the header toggle, `prefers-color-scheme` and a persisted choice
- **AND** the `.text-gradient` `h1` line keeps its charcoal→stone gradient in dark mode (the only element that
  does not invert)

### Requirement 13: Responsive integrity and motion safety

#### Scenario: No horizontal scroll

- **THEN** `document.documentElement.scrollWidth === clientWidth` at **320, 390, 640, 768, 1024, 1280 and 1440**
  (the tricky children are the 845 px typewriter span at 1440 and the footer newsletter row at 320)

#### Scenario: Document height

- **THEN** the rendered page lands within ~5 % of **8,857 / 9,295 / 10,915 / 11,486 / 12,778 / 13,799 px** at
  **1440 / 1024 / 768 / 640 / 390 / 320**

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** no `[data-animate]` element is left at `opacity: 0`, the typewriter does not cycle, the parallax does
  not write transforms, and smooth scrolling becomes instant

## Verification checklist

- [ ] `apps/makeready` exists, `@free-react-templates/makeready` in `package.json`, `public/CNAME` =
      `makeready.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string, no "Overprint" in any app file
      (comments included); the wordmark is an inline SVG/text component, not a raster
- [ ] bands in this order: header → hero → `#work` → `#disciplines` → `#process` → `#deliverables` →
      `#testimonials` → `#faq` → `#contact` → footer
- [ ] header **81 px** at 1440 / **65 px** below 1024, `sticky`, `bg-white/80` + blur + 1 px border, `shadow-lg`
      past 50 px; nav **only at ≥1024**; logo **196 × 40**; CTA **139 × 40**; mobile panel **446 px** at 390
- [ ] hero **1,409 px** at 1440 / **1,220** at 390: badge **345 × 34**, `h1` **60/60 700** `−1.5 px` with the
      `#575751 → #8b8b84` gradient second line, lead **20/28** `max-w-2xl`, CTAs **187 × 48** + **150 × 50** +
      48 px play disc, stats **11 / 140+ / 6 / 3**, image **1,024 × 512** `rounded-2xl` ring + `shadow-2xl`
- [ ] typewriter cycles the three phrases every **3 s**, the `h1` keeps a **static accessible name** and a
      **fixed two-line box at 390** (the reference jumps 40 px — defect 1)
- [ ] `#work` **2,001 px** white: chip **135 × 20** `#141413`/`#c3f53c`, `h2` **48/48 700** `−1.2 px`, three
      580/580 rows with **56 px** gaps, the second reversed, figures **580 × 435** with **149 × 28** lime
      plates, **2 px `accent-400`** rules beside every `dl`, metrics **2 colours / 6 issues / 60 pp**
- [ ] `#disciplines` **1,103 px** `#141413`: **inverted** chip (`bg-accent-400`), four **160 px** rows with 1 px
      `#464642` rules, `486.7 / 681.3` split, prices *from €14,000 / €9,000 / €11,000 / €6,500* in `accent-400`,
      square tag pills (5 / 5 / 4 / 3 per row), `h3` hover → `accent-400`
- [ ] `#process` **862 px** white: four **271.25 × 322** cells on a **1 px `primary-200` ground**
      (`grid gap-px`), numerals **01–04** in `accent-500`, durations *1–2 / 2–3 / 3–5 / 1–2 weeks*, three
      `accent-500` square-bulleted footnotes
- [ ] `#deliverables` **766 px** `#f7f7f6`: three **346.7 px** columns with **2 px `primary-900`** top rules,
      12 rows total at **39 / 21 px** with mono format labels, the **4 px lime-bordered** closing note
- [ ] `#testimonials` **796 px** `#f9fafb`: pill **71 × 28**, `h2` **36/40**, three **381 px** cards
      (**unequal heights 320 / 292 / 348**), five **`primary-400`** stars each, **0 dots / no arrows at 1440**
      and **3 dots + arrows at 390**
- [ ] `#faq` **820 px** white: five **81 px** rows in a `divide-y`, 32 px plus discs rotating **45°**,
      single-open accordion **with `aria-expanded` / `aria-controls`**, and the lead's "three things" reconciled
      with the five questions (defect 8)
- [ ] `#contact` **452 px** + form: 135° `#575751 → #2b2b28`, two `white/10` blobs, **40 px** white dot grid at
      10 %, `h2` **48/48 white**, CTAs **203 × 56** + **286 × 60**, the four-field form with validation and a
      real success state
- [ ] footer **568 px** `#111827` `pt-24`: 12-col **4/5/3**, Component Dock chip 40 × 40, **THE STUDIO** column
      pointing at real bands, newsletter **46 px / 108 × 46** with inline validation, bottom bar
      `mt-16 border-t py-8`
- [ ] chrome: preloader non-blocking, 2 px charcoal progress bar, skip link, 48 px back-to-top past 300 px,
      cookie strip after 1.5 s with `accepted`/`essential`, never covering the footer row or the mobile bar
- [ ] both themes shipped: light default, `prefers-color-scheme` honoured, choice persisted, dark `body`
      `#030712`, the `text-gradient` the only non-inverting element
- [ ] fonts: **Space Grotesk 400–700** from Google Fonts with `display=swap` (verified **200**) and the system
      mono stack untouched; no synthetic italic anywhere
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 640 / 768 / 1024 / 1280 / 1440; document height within ~5 %
      of 8,857 (1440) / 9,295 (1024) / 10,915 (768) / 12,778 (390) / 13,799 (320)
- [ ] zero bare `#` anchors, one well-formed `tel:`, four descriptive image `alt`s
- [ ] reduced motion: no element stuck at `opacity: 0`, no typewriter, no parallax, no smooth scrolling
- [ ] 100 % coverage on the new app and `scripts/verify-app.sh makeready` green
