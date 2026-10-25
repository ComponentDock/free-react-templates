# Template: Cresting (Roofing trade brand — the insurance claim explained in six stages, and a hero form that argues with you)

## Purpose

A **storm-damage roofing brand for Oklahoma City whose product is the *explanation*, not the roof**, and whose
own copy states the thesis on the page:

> *"Thirteen of the roofing companies we looked at advertise storm work. Seven explain the claim. This is the
> whole sequence, including the parts where the answer can be no."*

The `#claim` band is the template. It is a **six-stage interactive sequence** — a numbered rail of six buttons on
the left (each with an owner and a duration: *"Us · 30 to 60 minutes"*, *"Your insurer · One to two weeks after
the visit"*) and a **single detail panel** on the right that swaps when a stage is chosen. The panel gives the
stage a title, a paragraph, two labelled facts (*Who does it* / *Typically takes*), a checklist (*What you need
to hand*) and a bordered **"Worth knowing."** caveat in `primary-100` on `primary-500/10`. Every stage panel is
in the DOM at once and all but the active one carry `hidden` — the protocol is `aria-expanded` on the buttons,
not a tablist widget.

The rest of the page exists to make that sequence credible, and every band keeps a caveat in it. Services are
**six priced cells** whose footnote reads *"Starting prices are sample data for demonstration"*. Projects are
**six cards whose third meta row is a funding route** — *"Insurance claim"*, *"Financed over 60 months"*,
*"Paid directly"* — because *"Funding route is shown because it is the fact most homeowners in this market are
actually scanning for."* The why-us band refuses the usual "why choose us": its `h2` is **"We would rather lose
the job than sell you a claim"** and one of its four rules is *"Your deductible is your deductible. Anyone
offering to absorb it is committing fraud on your behalf."* The FAQ's fourth answer is *"No. It is insurance
fraud in this state and we will not do it."*

The hero is the same argument in miniature: a 6/6 split whose right half is not a photograph and not a
newsletter box but **a four-field inspection request** — name, phone, property address, and a five-chip
"what prompted the call?" radio group with **Recent storm pre-selected** — above the promise *"We will be on
the roof within two working days, and you get the photographs whether or not you hire us."* The left half is a
two-tone `h1` (*"We will climb up and tell you **how bad it actually is.**"*, the second sentence in
`primary-400`) over four ticked promises and a sample rating line.

Composition: **one dark-navy hero photograph under a left-to-right ink wash, one dark-navy claim band, then
alternating white / `ink-50` information bands, one stock-grey review carousel, one white FAQ, one
`primary-700` closing band and one `gray-900` footer.** At 1440 × 900 (measured, `getBoundingClientRect`):

| #  | band                                       | ground                  |   top | height |
| -- | ------------------------------------------ | ----------------------- | ----: | -----: |
| 0  | licence bar `[data-licence-bar]`            | `ink-800` `#1c2634`     |     0 |     37 |
| 1  | `<header>` sticky, translucent white        | `#ffffff / 90 %`        |    37 |     81 |
| 2  | hero + `#inspection` form                   | `ink-900` `#121a25`     |   118 |    750 |
| 3  | `#claim` — six stages, one panel            | `ink-800` `#1c2634`     |   868 |  1,033 |
| 4  | `#services` — six priced cells              | `#ffffff`               | 1,901 |    919 |
| 5  | `#projects` — six cards, three per row      | `#ffffff`               | 2,820 |  1,643 |
| 6  | `#why-us` — photo + four rules              | `ink-50` `#f6f7f9`      | 4,463 |    840 |
| 7  | `#process` — three numbered steps           | `#ffffff`               | 5,303 |    564 |
| 8  | `#areas` — fourteen towns                   | `#ffffff`               | 5,867 |    513 |
| 9  | `#testimonials` — carousel of three         | `gray-50` `#f9fafb`     | 6,380 |    796 |
| 10 | `#faq` — five answers                       | `#ffffff`               | 7,176 |    820 |
| 11 | `#contact` — closing CTA                    | `primary-700` `#a8350d` | 7,996 |    440 |
| 12 | `<footer>`                                  | `gray-900` `#111827`    | 8,436 |    568 |

**Document height 9,004 px** at 1440 × 900 and at 1280; **8,996 px** at 1600; **9,274 px** at 1024;
**11,300 px** at 768; **15,530 px** at 390; **16,503 px** at 320. Hero top offset is **118 px** (37 licence
bar + 81 header) and the header is `sticky`, so every in-page anchor needs `scroll-margin-top ≥ 101 px`.
`.section` is `py-20` → `lg:py-28` (**80 px**, then **112 px**); the hero's container is `py-16` → `lg:py-24`
(**64 px**, then **96 px**). The container is `max-width: 80rem` at `≥ 1280` with `px-4` / `lg:px-8`, so the
content column is **1,216 px** at 1440 and at 1280, and the page is fluid below that.

The palette is **one cool-navy `ink` ramp, one burnt-orange `primary` ramp and stock Tailwind greys for two
bands only**. The jobs are not interchangeable: `ink-900` `#121a25` is the **hero ground**, `ink-800` `#1c2634`
the **licence bar, the claim band and every heading on a light band**, `ink-50` `#f6f7f9` the **`#why-us`
ground**, `ink-500` `#57677d` every paragraph on a light band, `ink-400` `#78879b` every small caps label,
and `ink-100` `#eaedf1` every hairline *and* the services grid's 1 px background (the cells are white, so the
wrapper draws the dividers); `primary-600` `#ce450b` is **every solid CTA, the scroll-progress bar and the
back-to-top disc**, `primary-700` `#a8350d` the **`#contact` ground and every eyebrow on a light band**,
`primary-500` `#ee5b14` the **active claim-stage rule and every focus ring**, `primary-400` `#fa7838` the **`h1`
accent span, the claim eyebrow, the review stars and every dark-band tick**, `primary-100` `#ffe4d2` the
**`#contact` lead**.

Orange is a **flat fill, never a gradient on text**; the only gradients on the page are the hero's ink wash and
the **three-cycle loop of project card media plates** (`ink-800 → ink-700`, `primary-700 → primary-600`,
`ink-700 → ink-600`, repeating over the six cards). Dropping that rotation makes a recognisably ordered page
read as random.

The type is **Space Grotesk for everything, one face, four weights**. It arrives from Cloudflare's automatic
font service (`/cf-fonts/v/space-grotesk/5.2.10/{latin,latin-ext,vietnamese}/wght/normal.woff2`, **variable
`wght`**, four `@font-face` blocks per subset in an **inline `<style>`** — there is no Google Fonts `<link>` and
no `@font-face` in the stylesheet). Headings are 700 with **tight negative tracking** (`−1.5 px` on the 60 px
`h1`, `−0.9 px` on the 36 px `h2`) and every eyebrow and micro-label is 700 **uppercase with positive
tracking** (`+0.35 px` on section eyebrows, `+0.025em` on card labels, `+0.05em` on footer headings). The
pairing is the page's typographic signature: lose the negative tracking and a pixel-correct palette still looks
like a different template. All numerals that line up in columns carry `tabular-nums` (claim stage numbers,
process numbers).

Recreation of the ColorLib **"Ridgeline"** design (https://colorlib.com/wp/template/ridgeline/, live preview
https://preview.colorlib.com/theme/ridgeline/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `ridgeline`
- **ColorLib page:** https://colorlib.com/wp/template/ridgeline/ — **HTTP 200, 112,303 B**, `<title>`
  **"Ridgeline - Roofing Website Template 2026 - Colorlib"**. The listing's screenshot is
  `ridgeline-template.jpg` (**380,126 B**, `image/jpeg`, **2400 × 1892** — see §Screenshot analysis). ColorLib
  exposes `ridgeline-template.avif` and `ridgeline-template-1024x807.jpg` beside it; the `.jpg` here really is
  JPEG (unlike some siblings whose `.jpg` is AVIF).
- **Live preview:** https://preview.colorlib.com/theme/ridgeline/ — **HTTP 200, 92,808 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` is **"Roofing in Oklahoma City, with
  the insurance claim explained | Ridgeline Roofing"**. A 2026 **Astro** build: one hashed stylesheet
  `_astro/Base.BKpOUAT_.css` (**62,989 B**, `/*! tailwindcss v4.3.3 */`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B** — the *same* house kit as
  the Conduit/Nightwatch/Drainwise preps; it carries carousel/pricing/blog-filter/lightbox/typewriter handlers
  this page never uses), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (the same file as every sibling
  in this 2026 set).
- **Four inline `<script>` bodies** (**442 B** theme resolver · **472 B** claim-stage switcher · **358 B**
  preloader teardown · **333 B** JSON-LD data block). The claim switcher is the page's only page-specific
  logic: it reads `[data-claim]`, toggles `aria-expanded` on `[data-claim-tab]` and `hidden` on
  `[data-claim-panel]`.
- **JSON-LD:** one `application/ld+json` block, `@type: "RoofingContractor"`, `name: "Ridgeline Roofing"`,
  `telephone: "+1-555-0300"`, `areaServed: "Oklahoma City, Oklahoma"`, `priceRange: "$$"`, `url: "/"`. The
  telephone disagrees with every `tel:` link on the page (`5550300300`) — a delta, not a spec.
- **No archive, no alternate family path:** `theme/bootstrap/ridgeline/` → **404**, `theme/bb/ridgeline/` →
  **404**, `downloads/free/ridgeline.zip` → **404**. The slug-only preview path is the live build, as expected
  for this family.
- **Single-page?** No. **Ten inner routes are live**, all HTTP 200: `services` (41,560 B), `storm-damage`
  (58,314 B), `projects` (46,458 B), `financing` (40,249 B), `about` (35,063 B), `blog` (35,082 B), `contact`
  (33,353 B), `service-areas` (32,622 B), `privacy` (35,451 B), `terms` (34,240 B). They are the authoritative
  reference for anything the home page only summarises (see §Inner-page inventory).
- **Fonts:** **Space Grotesk** only, 400/500/600/700, variable, `/cf-fonts/v/space-grotesk/5.2.10/…` in an
  inline `<style>`. The recreation loads it from Google Fonts explicitly
  (`css2?family=Space+Grotesk:wght@400;500;600;700&display=swap`).
- **Motion:** 14 elements carry `[data-animate]` with 12 `data-delay` values (0–300 ms). The kit fades them in
  on `IntersectionObserver` (`threshold .1`, `rootMargin 0 0 -10% 0`) and **bails out entirely** under
  `prefers-reduced-motion: reduce`.

- **Recreation name:** `cresting` — one lowercase word, roof-adjacent (roof cresting is the ridge trim a roof is
  finished with) and *not* the source name, no collision with `apps/`, `openspec/specs/`, `docs/templates/`, any
  bold name in `TEMPLATES.md` or any existing row (`git grep -il cresting origin/main` → **no matches**, so
  zero substring hits and the `navpane`/`navpanel` trap does not apply), and
  `colorlib.com/wp/template/cresting/`, `preview.colorlib.com/theme/cresting/`,
  `preview.colorlib.com/theme/bootstrap/cresting/` all → **404**. The recreation lives at `apps/cresting`,
  package `@free-react-templates/cresting`, `cresting.free.componentdock.com`. **No ColorLib string may appear
  in the app** — provenance lives in this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5).
  `shingle` (ColorLib *Roofing*), `ridgeline`, `roofline` and `roofing` were all rejected: taken, taken,
  source-adjacent and source. `sarking`, `ridgecap`, `gablewise`, `underlay` and `batten` were checked and also
  free — `cresting` is the one that reads as a finished roof finish rather than a product.

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**), so this design comes from `docs/catalog-coverage.md` —
the **42 standalone designs** on colorlib.com's listing that the checklist never recorded. This is row
**`ridgeline`** of 42 (*preview 200, 92,808 B*), the row after `relay-auth`/`gatehouse`. When the app ships,
append this line under **`## Business`** — currently headed `## Business (378)`, bump it to **379** — **in
source-name alphabetical order**, i.e. immediately after **Repeat** (`repeat` → `loop`) and immediately before
**Roberto** (`roberto` → `retreat`); re-read the section rather than trusting this line, a concurrent prep may
have landed first:

```markdown
- [x] **Ridgeline** — [colorlib](https://colorlib.com/wp/template/ridgeline/) · [cresting](https://cresting.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/ridgeline-template.jpg)
```

## Reference readings (2026-10-25, `curl -4`)

| what                                  | value                                                                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| preview HTML                          | 200, **92,808 B**, `text/html; charset=utf-8`                                                                             |
| stylesheet `_astro/Base.BKpOUAT_.css` | 200, **62,989 B**, `/*! tailwindcss v4.3.3 */`                                                                            |
| behaviour kit `…_lang.BLoalVWc.js`    | 200, **16,233 B** (byte-identical to Conduit/Nightwatch/Drainwise), sha256 `e26cc055…`                                     |
| router `…CYDbzu1r.js`                 | 200, **16,357 B** (same house router as every sibling)                                                                     |
| inline `<script>` bodies              | **4**: theme 442 B · claim switcher 472 B · preloader 358 B · JSON-LD 333 B                                                |
| logo                                  | `assets/img/logo.svg` (dark on light) + `assets/img/logo-light.svg` (header dark theme **and** footer); natural **150 × 32**, header renders **h-8** → 32 (`lg:h-9` → 36), footer **h-10** → 40 |
| content images                        | **2** — hero `photo-1632759145351…` (`w=1600&h=900`, `opacity-30`) and `#why-us` `photo-1558036117…` (`w=800&h=600`, lazy), both hosted on `images.unsplash.com`; plus the two logo files |
| favicon / OG                          | `favicon.svg`; `og:title`, `og:description`, `og:type`, `og:site_name`, `og:image=/og-image.jpg`, `twitter:description`; **no canonical**; `<meta name="robots" content="noindex, nofollow">` |
| inner routes                          | **10** top-level, all 200 (see §Inner-page inventory)                                                                     |
| document height                       | **9,004 px** at 1440 × 900 and at 1280; 8,996 at 1600; 9,274 at 1024; 11,300 at 768; 15,530 at 390; 16,503 at 320          |
| anchors                               | **44** `a[href]` — 30 path links, 3 path+`#inspection`, 4 `tel:` (**one malformed**), 1 `mailto:`, 2 `#service-areas` (**dead id**), 3 bare `#`, 1 skip-link `#main-content` |
| inline `<svg>`                        | **59** (0 icon font, 0 sprite sheet): 5 hero stars, 10 claim ticks, 15 review stars, 3 project chevrons, the rest chrome/social |
| headings                              | 1 × `h1`, 10 × `h2` (the hero card owns one), 25 × `h3`                                                                   |
| structure                             | **670** `class="…"` attributes, **361** distinct utility names, **18** ids, 9 `<input>` (**0** `<select>`), 20 `<button>`  |

## Design tokens (measured from `Base.BKpOUAT_.css`, 62,989 B, and `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values** in the
> compiled utilities, so the sheet contains **no `--color-ink-*` or `--color-primary-*` custom properties** (only
> Tailwind's generated `:root` defaults — `--color-white`, `--color-green-600`, the type scale, `--radius-lg/xl/2xl`,
> `--spacing: .25rem`). The ramps below were reconstructed by parsing every `*-ink-<n>` / `*-primary-<n>` utility
> rule, then confirmed against `getComputedStyle` on the rendered page. That is the authority; declare the ramps
> in the app's own `@theme`.

### `ink` — cool-navy neutral ramp (all structure)

| step | hex       | used for                                                                                             |
| ---- | --------- | ---------------------------------------------------------------------------------------------------- |
| 50   | `#f6f7f9` | **`#why-us` ground**, cookie-strip decline hover                                                     |
| 100  | `#eaedf1` | every hairline on a light band, header border, **`#services` grid background** (draws the 1 px gaps), licence-bar text |
| 200  | `#d3d9e1` | form field borders (and the radio chips' unselected border)                                           |
| 300  | `#aab5c3` | sheet only on this page (placeholder tint in siblings)                                                |
| 400  | `#78879b` | every **small-caps meta label** (`dt`, project "Size"/"On site", card location on light), placeholder |
| 500  | `#57677d` | every paragraph / section lead on a light band                                                        |
| 600  | `#3e4c60` | desktop nav labels, unselected chip labels, project `dd` values                                       |
| 700  | `#2c3849` | form labels, project `dd` values, `#areas` town text, upsell rows                                     |
| 800  | `#1c2634` | **licence-bar ground, `#claim` ground, every `h2`/`h3` on a light band**, project plate gradient stop |
| 900  | `#121a25` | **hero ground and the hero's gradient origin**                                                        |

### `primary` — burnt-orange ramp (CTAs, eyebrows, marks)

| step | hex       | used for                                                                                    |
| ---- | --------- | ------------------------------------------------------------------------------------------- |
| 50   | `#fff4ed` | hover ground of the white buttons (`hover:bg-primary-50`) and gradient origin on `primary-50` |
| 100  | `#ffe4d2` | `#contact` lead, claim "Worth knowing." text                                                |
| 200  | `#ffc5a3` | `border-primary-200` (sheet only on this page)                                              |
| 300  | `#ff9e6b` | dark-mode eyebrow and link accents (`dark:text-primary-300`)                                |
| 400  | `#fa7838` | **`h1` accent span, `#claim` + hero eyebrow, the claim "Stage one" label, all ticks on dark bands, the 15 review stars** |
| 500  | `#ee5b14` | **active claim-stage left rule**, focus rings (`ring-primary-500/30`), the "Worth knowing." border at 40 % |
| 600  | `#ce450b` | **every solid CTA** (header CTA, form submit, chip-selected state, back-to-top disc), scroll-progress bar, project plate gradient |
| 700  | `#a8350d` | **`#contact` ground, every eyebrow on a light band, project "Paid by" value**, CTA hover     |
| 800  | `#872d12` | dark-mode borders (`dark:border-primary-800`); no light-mode use on this page                |
| 900  | `#6e2812` | dark-mode pill grounds (`dark:bg-primary-900/50` on the Reviews badge)                        |

### Stock Tailwind greys (only `#testimonials`, `#faq`, the footer and the chrome)

`gray-50 #f9fafb` (`#testimonials` ground) · `gray-100 #f3f4f6` (FAQ icon disc) · `gray-200 #e5e7eb` (cookie
border, FAQ divider) · `gray-300 #d1d5db` (cookie decline border, footer social text) · `gray-400 #9ca3af`
(dark-mode body, footer body/notes) · `gray-500 #6b7280` (footer bottom-bar text) · `gray-600 #4b5563`
(FAQ question, testimonial author line) · `gray-700 #374151` (footer input border, dark-mode form borders) ·
`gray-800 #1f2937` (footer input ground, footer bottom border, dark-mode cards) · `gray-900 #111827`
(**footer ground**, light-band body text, `#testimonials`/`#faq` headings) · `gray-950 #030712` (dark-mode body
and `dark:bg-gray-950` bands). `amber-400` (`#fbbf24`) is used for exactly **two** star rows: the licence bar's
single star and the hero's five stars — **the review stars are `primary-400` `#fa7838`, not amber.**

### Type scale (Space Grotesk, one face)

| role                          | size / line-height | weight | tracking  | colour                                  |
| ----------------------------- | ------------------ | ------ | --------- | --------------------------------------- |
| `h1` (hero)                    | **60 / 64.8** (1.08), 48 at `sm`, 36 at base | **700** | **−1.5 px** (−1.2 / −0.9 below `lg`) | `#ffffff`, accent span `#fa7838` |
| `h2` (section)                 | **36 / 40**, 30 at `sm`, 24 at base | **700** | **−0.9 px** | `#1c2634` light band · `#ffffff` on `#claim`/`#contact` · `#111827` on `#testimonials`/`#faq` |
| `h3` (card / step)             | **18 / 28** (`lg` 18/28, project card 18/28, claim panel **24 / 32**) | **700** | normal | `#1c2634`, white on dark bands |
| eyebrow / kicker               | **14 / 20**, uppercase | **700** | **+0.35 px** | `#a8350d` light band · `#fa7838` on `#claim`/hero |
| section lead                   | **18 / 28** | 400 | normal | `#57677d` light · `white/70` on dark bands |
| body / card copy               | **16 / 24** | 400 | normal | `#57677d` (project card `text-sm` 14/20) |
| micro-label (`dt`, card kicker) | **12 / 16**, uppercase | **700** | **+0.025em** | `#78879b` · `white/40`–`white/60` on dark |
| footer heading                 | **14 / 20**, uppercase | **600** | **+0.05em** (`.7px`) | `#ffffff` |
| fine print                     | **12 / 16** | 500 | normal | `#eaedf1` on the licence bar · `#78879b` on white |

### Spacing, radii, shadow, chrome

- `--spacing: .25rem`; `.section{padding-block: 5rem}` → `7rem` at `≥ 64rem`. Hero container `py-16` → `lg:py-24`.
- Container: `max-width: 80rem` from `≥ 80rem`, `padding-inline: 1rem` → `1.5rem` at `sm` → `2rem` at `lg` →
  `2.5rem` at `xl` → `3rem` at `2xl`. Measured **1,280 px** box / **1,216 px** content at 1440.
- Radii: **8 px** (`--radius-lg`) on buttons, inputs, chips' non-pill corners, list plates; **16 px**
  (`--radius-2xl`) on cards, the form card, the claim panel, the `#services` plate, project cards, the
  `#why-us` image; **full** on the FAQ disc, the review avatar, the back-to-top disc and the "Reviews" badge.
- Shadow: `.shadow-soft{--tw-shadow: 0 4px 16px -4px #0000001a}` — the review cards. `shadow-md` on the hero
  form card and the project cards' hover-free rest state. `shadow-lg` on the header past 50 px of scroll, on the
  back-to-top disc and on the cookie strip.
- Chrome: `#preloader` (white, 40 px spinner, `border-4`, top border `primary-600`), `#scroll-progress` (2 px,
  `primary-600`, `z-60`), skip link, `#back-to-top` (**48 px** disc, `primary-600`, fixed `bottom-6 right-6`,
  `opacity: 0` until 300 px), `#cookie-consent` (**87 px** white strip, `border-t gray-200`, `py-4 sm:py-6`,
  `translateY(100%)` until 1,500 ms).

### Dark mode (`.dark` on `<html>`, measured by clicking the toggle and re-reading `getComputedStyle`)

| surface                          | light                     | dark (`<html class="dark">`)            |
| -------------------------------- | ------------------------- | --------------------------------------- |
| `<body>`                         | `#ffffff`, text `#111827`  | `#030712`, text `#f3f4f6`               |
| hero band                        | `#121a25` (unchanged)      | `#121a25` — the photo and wash stay     |
| `#claim`                         | `#1c2634` (unchanged)      | `#1c2634`, panels `white/5`             |
| `#services` / `#projects` / `#process` / `#areas` / `#faq` | `#ffffff` | `gray-950` `#030712` |
| `#why-us`                       | `#f6f7f9`                  | `gray-900` `#111827`                    |
| `#testimonials`                 | `#f9fafb`                  | `gray-900` `#111827` (cards `gray-800`)  |
| `#contact`                      | `#a8350d` (unchanged)      | `#a8350d` — white text stays            |
| `<footer>`                      | `#111827` (unchanged)      | `#111827`                               |
| hero form card                  | `#ffffff`                  | `gray-950` `#030712` with `gray-700` borders |
| headings on light bands         | `#1c2634`                  | `#ffffff`                               |
| paragraphs on light bands       | `#57677d`                  | `#9ca3af` — **never both greys at once** |

## Band map and geometry (measured at 1440 × 900, `getBoundingClientRect`)

| band            | geometry                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| licence bar     | 37 px, `#1c2634`, one row `h-9`, left `<ul>` `overflow-hidden` (3 facts at 12/500 `#eaedf1`, `opacity-70` on the key), right: one `amber-400` star + `4.9` + `410+ reviews on Google · sample data` |
| header          | 81 px (`h-16 lg:h-20` + 1 px border), `sticky top-0`, `white/90` + `backdrop-blur-lg`, border `#eaedf1`; logo **180 × 36**; nav 7 labels 14/600 `#3e4c60` `gap-28`; city pill (`#service-areas`, dead), phone pill, `#ce450b` CTA **146 × 40** radius 8 14/700; theme toggle 40 px; hamburger below **1280** |
| hero            | 750 px, `ink-900`, photo `object-cover opacity-30` + `bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40`; container `py-16 lg:py-24` → content **558 px** tall at y = 214; grid **12 cols, 64 px gap**, copy **576** (`lg:col-span-6`), card **576** (`lg:col-span-6`) |
| hero copy       | **576 × 523** at x = 112; eyebrow 14/700 `#fa7838` +0.35; `h1` **576 × 194** 60/64.8 −1.5 white with `#fa7838` span; lede `max-w-xl` 18/28 `white/70`; rating row `inline-flex` 14 `white/90` (5 amber stars + bold `4.9` + `opacity-80` label); `<ul>` **576 × 108**, `sm:grid-cols-2`, `gap-3`, four items (16/24 `white/85` + 16 px `#fa7838` tick) |
| hero form card  | **576 × 558** at x = 752, white, radius 16, `p-8`, `shadow-md`, no border; `h2` 20/28 700 `#1c2634`; sub-line 14 `#57677d`; row 1 `grid-cols-2 gap-4` (**248 px** fields), address full width; fields **248 × 46** radius 8 border `#d3d9e1` `px-4 py-2.5` 16; labels 14/600 `#2c3849`; chip group 5 radios, 14/600, `px-4 py-2` full radius, selected `#ce450b` on white text; submit **512 × 40** radius 8 `#ce450b` 14/500 `shadow-primary-600/25`; footnote 12 `#78879b` centred |
| `#claim`        | 1,033 px, `#1c2634`; header block `max-w-2xl` (**672 × 172**) at y = 980; grid **12 cols, 48 px gap** at y = 1,200, **517 px** tall; tab rail **479 px** (`lg:col-span-5`), panel **689 px** (`lg:col-span-7`) |
| claim tab       | **479 × 78**, `border-l-2` (`white/15`, active `#ee5b14`), `py-4 pl-5`, `gap-4`; number 14/700 `tabular-nums` (`white/40`, active `#fa7838`); title bold `white/60` (active `#ffffff`); meta 14 `white/40` (`Us · 30 to 60 minutes`) |
| claim panel     | **689 × 517**, radius 16, border `white/10`, ground `white/5`, `p-6 sm:p-8`; eyebrow 14/700 `#fa7838` (`Stage one`…`Stage six`); `h3` **24/32 700** white; body 16/24 `white/70`; `dl` `sm:grid-cols-2 gap-4` with 12/700 `white/40` `dt` and 16/24 600 `dd`; then a `border-t white/10` block: 12/700 `white/40` label + `<ul>` of ticks (14 `white/80`); then the callout `rounded-lg border border-primary-500/40 bg-primary-500/10 px-4 py-3` 14 `#ffe4d2` with a bold `Worth knowing.` lead-in |
| `#services`     | 919 px, white; header `max-w-2xl` **672 × 184**; plate **1,216 px**, `mt-12`, radius 16, 1 px border `#eaedf1`, `gap-1px`, ground `#eaedf1`, `lg:grid-cols-3`; six white cells **404 × 208** `p-8`, `flex flex-col` (`h3` 18/700, blurb `mt-2 flex-1` 16 `#57677d`, price `mt-4` 14/700 `#a8350d`); footnote 14 `#78879b` |
| `#projects`     | 1,643 px, white; grid **3 × 389** with `gap-6` at y = 3,124, **1,175 px**; card **389 × 585**, radius 16, 1 px `#eaedf1`, `overflow-hidden`; media **387 × 290** (`aspect-[4/3]`, `p-6`, `items-end`) with a **192 px chevron SVG watermark** at `white/10` top-right, location 12/700 uppercase `white/60`, roof type **24/700** white; body `p-6`: `h3` 18/700, copy `text-sm` `#57677d` `flex-1`, `dl` `grid-cols-2 gap-x-4 gap-y-3 border-t #eaedf1 pt-5` with 12/700 `#78879b` `dt` and 14/600 `#2c3849` `dd` (`Paid by` value `#a8350d`) |
| `#why-us`       | 840 px, `#f6f7f9`; grid **2 × 576**, `gap-16` at y = 4,575; image **576 × 432** radius 16 + 14 `#78879b` caption; right column: eyebrow, `h2`, lead, then four entries `space-y-6`, each `border-l-2 #ce450b pl-5` (**576 px**), 16/700 title + 16 `#57677d` body |
| `#process`      | 564 px, white; `<ol>` **3 × 389** `gap-6`, items **176 px**; each: number 14/700 `tabular-nums` `#ce450b` + 1 px `#eaedf1` rule filling the row, `h3` 18/700 `mt-4`, body 16 `#57677d`, tag 14/600 `#a8350d` |
| `#areas`        | 513 px, white; grid **12 cols, 64 px gap**; heading block `lg:col-span-5`, list **683 px** at x = 645 (`lg:col-span-7`); `<ul>` `grid-cols-2 sm:grid-cols-3`, **211 px** columns, 24 px column gap, fourteen `<li>` 16 `#2c3849` `py-2.5` with 1 px `#eaedf1` bottom border; note 14 `#78879b` |
| `#testimonials` | 796 px, `#f9fafb`; header centred `max-w-3xl`, "Reviews" **pill** (`#ffe4d2` / `#a8350d`, 14, `px-3 py-1`); carousel track **1,216 px**, three slides **405 px** `px-3`; each card **381 × 348**, white, radius 16, `p-8`, `shadow-soft`, five `#fa7838` stars, quote 18/28 500 `#111827`, **48 px** `#ffe4d2` avatar disc, 16/600 name, 14 `#4b5563` town; **0 dots, arrows hidden at ≥ 1024** |
| `#faq`          | 820 px, white; `max-w-3xl` **768 px** at x = 336; five rows `py-6` divided by 1 px `#e5e7eb`; question 18/600 `#111827`; 32 px `#f3f4f6` disc, `#4b5563` plus; panel `max-height: 0`, `opacity: 0`, `transition: all .3s` |
| `#contact`      | 440 px, `#a8350d`; inner `max-w-3xl` **768 px** at x = 336; `h2` 36/40 white; lead 18/28 `#ffe4d2` `max-w-xl` `mt-5`; button row `flex gap-4` `mt-10`: solid white **237 × 56** radius 8 `px-8 py-4` 16/700 `#a8350d`, and outline **2 px `white/40`** transparent white 16/700 with a phone glyph |
| footer          | 568 px, `#111827`, `pt-24`; grid **12 cols, 32 px gap**, **323 px** tall at y = 8,532; brand `lg:col-span-4` (40 px light logo, blurb `gray-400`, three `#1f2937` social chips, address/phone/email 14), three link columns `sm:grid-cols-3` in `lg:col-span-5`, newsletter `lg:col-span-3` (14/600 uppercase white heading, blurb, `#1f2937` input + `#ce450b` Subscribe); bottom bar `mt-16 border-t #1f2937 py-8`, `gray-500` 14 copyright + two legal links |

## Content inventory (use this copy verbatim — do not re-invent, do not "improve")

**Licence bar** — `Licence` `OK CIB #00000000` · `Manufacturer certified` · `Serving` `Oklahoma City metro`
(items 2–3 `hidden sm:flex`); right: ★ `4.9` `410+ reviews on Google (sample)`.

**Header nav** — Services · Storm damage · Projects · Financing · About · Blog · Contact; city pill
`Oklahoma City, OK`; phone pill `(555) 030-0300`; CTA `Free inspection`.

**Hero** — eyebrow `Oklahoma City · Licensed and manufacturer certified`; `h1` *"We will climb up and tell you
how bad it actually is."* (accent span from *"how bad it actually is."*); lede *"Free inspection, photographs
you keep, and a written report you can hand straight to your insurer. No obligation, and no pressure to file a
claim that will not succeed."*; rating `4.9` `410+ reviews on Google · sample data`; ticks *"Inspection and
report are free" · "We meet your adjuster on the roof" · "Workmanship warranty in writing" · "Financing on the
part insurance does not cover"*.

**Hero form** — `Book a free inspection` / *"We will be on the roof within two working days, and you get the
photographs whether or not you hire us."*; fields `Your name`, `Phone`, `Property address`; chips *"Recent
storm"* (checked) · *"Visible leak"* · *"Missing shingles"* · *"Selling the house"* · *"Roof is just old"*;
submit `Request my inspection`; footnote *"No obligation. We never sell your details."*

**`#claim`** — eyebrow `Storm damage`; `h2` *"What actually happens after a hail storm"*; lead *"Thirteen of the
roofing companies we looked at advertise storm work. Seven explain the claim. This is the whole sequence,
including the parts where the answer can be no."* Six stages, in order (number · title · owner · duration):

| # | title | owner · duration | "Worth knowing." |
| - | ----- | ---------------- | ---------------- |
| 01 | Free inspection and report | Us · 30 to 60 minutes | *"If we do not think the damage will support a claim we will say so at this stage. Filing a claim that gets denied is not free to you, and it can affect your renewal."* |
| 02 | You file the claim | You · 15 minutes on the phone | *"File within the window in your policy, which is often one year from the date of loss. A claim on a two-year-old storm is usually denied on timing alone."* |
| 03 | The adjuster comes out | Your insurer, with us · One to three weeks to schedule | *"An adjuster who visits alone will write what they see from their own ladder. Two sets of eyes on the same slope is how a missed elevation gets added."* |
| 04 | The scope and the settlement | Your insurer · One to two weeks after the visit | *(copy in §Inner-page inventory — `storm-damage` carries the same six stages in full)* |
| 05 | We build the roof | Us · One to three days on site | — |
| 06 | Final invoice and depreciation released | Us and your insurer · Two to four weeks | — |

Stage 1 body: *"We get on the roof, photograph every slope, and mark the hail bruising and wind damage against
a diagram. You get the report by email the same day whether you file or not."* — `Who does it` `Us` ·
`Typically takes` `30 to 60 minutes` · `What you need to hand`: *"Somewhere we can park a truck"*, *"Access to
the attic if there is any staining"*. Stage 2 body: *"You call your carrier, not us. They will ask for the date
of loss and what you have seen. Give them our report number and tell them a contractor has already inspected."*
— `You` · `15 minutes on the phone` · *"Your policy number"*, *"The date of the storm"*, *"Our inspection report"*.
Stage 3 body: *"The carrier sends an adjuster to make their own assessment. We meet them on the roof. That is
the single most useful thing a contractor does in this process, because it is where scope gets agreed or quietly
cut."* — `Your insurer, with us` · `One to three weeks to schedule` · *"To be home, or to authorise us to attend
without you"*.

**`#services`** — eyebrow `What we do`; `h2` *"Roofs, and the things around them that leak"*; lead *"Residential
and light commercial across the Oklahoma City metro. Prices are illustrative starting points, not quotes."* Six
cells: `Roof replacement` *"Full tear off to the deck, rotten sheathing replaced, new underlayment, flashing and
ridge. Not an overlay."* `From $9,800` · `Storm and hail damage` *"Inspection, documentation and the claim walked
through with you. Emergency tarping the same day if it is open."* `Insurance, plus deductible` · `Roof repair`
*"Missing shingles, failed flashing, pipe boots and valleys. The repairs that are worth doing on a roof with life
left."* `From $450` · `Gutters and downspouts` *"Seamless aluminium, sized to the roof area rather than to
whatever was there before."* `From $9 per foot` · `Skylights and chimneys` *"The two things that leak most often
and are blamed on the roof least often."* `Quoted on site` · `Attic ventilation` *"Under-ventilated attics cook
shingles from underneath and void more manufacturer warranties than hail ever does."* `From $650`. Footnote
*"Starting prices shown are sample data for demonstration. Replace with your own before launch."*

**`#projects`** — eyebrow `Recent work`; `h2` *"Roofs we finished this year"*; lead *"Sample projects for
demonstration. Replace with photographs of your own crews and your own addresses."* Six cards (location ·
roof type · title · body · Size / On site / Paid by):

| location | plate | title | size | on site | paid by |
| -------- | ----- | ----- | ---- | ------- | ------- |
| Edmond | ink-800→700 | Hail replacement, full tear off | 32 squares | 2 days | Insurance claim |
| Nichols Hills | primary-700→600 | Age replacement with upgrade | 24 squares | 4 days | Financed over 60 months |
| Moore | ink-700→600 | Wind damage, partial slope | 9 squares | 1 day | Insurance claim |
| Yukon | ink-800→700 | Leak traced to a chimney | One chimney | Half a day | Paid directly |
| Bethany | primary-700→600 | Commercial flat roof recover | 6,400 square feet | 5 days | Paid directly |
| Deer Creek | ink-700→600 | New build, from the deck | 41 squares | 3 days | Paid directly |

Roof-type lines, in order: `Architectural asphalt, Class 4` · `Standing seam metal` · `Architectural asphalt` ·
`Flashing and counter-flashing` · `TPO single ply` · `Architectural asphalt`. Closing note:
*"Funding route is shown because it is the fact most homeowners in this market are actually scanning for."*

**`#why-us`** — eyebrow `Why homeowners pick us`; `h2` *"We would rather lose the job than sell you a claim"*;
lead *"This market has a storm-chasing problem. Here is how we are different, stated in ways you can check."*
Four rules: `We will tell you not to file` · `We meet your adjuster on the roof` · `We are still here next
spring` · `Your deductible is your deductible` (bodies in the shipped design, reproduced from the reference).
Image caption *"Replace with a photograph of your own crew. On a roofing site it is the image people look at
longest."*

**`#process`** — eyebrow `How it goes`; `h2` *"From the form to a finished roof"*; lead *"Three steps if you are
paying directly, six if insurance is involved."* `01 Free inspection` / `Within 2 working days` ·
`02 A decision, then a plan` / `Same visit` · `03 We build it` / `1 to 3 days`.

**`#areas`** — `h2` *"Where we work"* (**no eyebrow**); lead *"The Oklahoma City metro and the towns listed here.
Storm response reaches further, because that is when it matters."* Fourteen towns: Oklahoma City, Edmond, Moore,
Norman, Yukon, Mustang, Bethany, Del City, Midwest City, Nichols Hills, Piedmont, Choctaw, Newcastle, Guthrie.
Note *"Replace this list with your own towns. Written as plain text it is the cheapest local search signal a
trade site has."*

**`#testimonials`** — badge `Reviews`; `h2` *"What people say afterwards"*; lead *"Sample reviews for
demonstration. Replace with your own, ideally pulled from Google."* Three reviews: **Curtis B.** (Moore, initial
`C`) — *"They inspected, then told me my roof had five years left and I should not file. Three companies before
them had told me it was totalled. Guess who I called when the hail finally got it."*; **Hannah D.** (Edmond,
`H`) — *"Meeting the adjuster with them made a visible difference. The first scope covered two slopes. After the
walk it covered the whole roof and the gutters."*; **Marcus L.** (Yukon, `M`) — *"Two days, start to finish, and
you could not find a nail in the yard afterwards. The depreciation cheque arrived about three weeks later
exactly like they said."*

**`#faq`** — badge `Questions`; `h2` *"Before you file"*; lead *"The questions we get asked standing in the
driveway."* Five questions: *Is the inspection really free?* · *Will filing a claim raise my premium?* · *What if
my claim is denied?* · *Can you waive my deductible?* · *How long does a roof take?* (answers in the reference;
the deductible answer is *"No. It is insurance fraud in this state and we will not do it."*).

**`#contact`** — `h2` *"Standing in the yard wondering how bad it is?"*; lead *"We will climb up, photograph it
and tell you, free, whether or not you hire us."*; buttons `Book a free inspection` (solid white) and
`Call (555) 030-0300` (2 px outline, phone glyph).

**Footer** — brand blurb *"Roof replacement, storm damage and repairs across Oklahoma City. Free inspection, and
we handle the insurance claim with you."*; `2210 North Meridian Avenue, Oklahoma City, OK 73107` ·
`(555) 030-0300` · `office@ridgelineroofing.example`; three social chips (**dead `#` in the reference**);
columns **Services** (Roof replacement, Storm and hail damage, Roof repair, Gutters) · **Company** (About,
Projects, Service areas, Blog) · **Support** (Contact, Financing, Privacy, Terms) · **Stay Updated**
(*"Seasonal maintenance reminders and plain-English notes on what actually needs doing before winter."*, email
field + `Subscribe`); bottom bar `© 2026 Ridgeline Roofing. All rights reserved.` + `Privacy Policy` +
`Terms of Service`.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Skip link and landmarks

- **GIVEN** the page is loaded
- **THEN** the first focusable element is "Skip to content" targeting `#main-content`, hidden until focused
- **AND** the document has exactly one `<h1>`, a `<main id="main-content">`, a `<header>` and a `<footer>`
- **AND** the `h1` is inside the hero copy column, not the inspection card

#### Scenario: Preloader is not a blocker

- **GIVEN** a jsdom/hydration environment where `load` has already fired
- **WHEN** the app mounts
- **THEN** the preloader is treated as finished (`loaded || document.readyState === 'complete'`) so content is
  never trapped behind it
- **AND** in a real browser it fades out over 300 ms and is removed from the DOM

#### Scenario: Progress bar and back-to-top

- **GIVEN** the page scrolled to 50 % of its scrollable height
- **THEN** `#scroll-progress` is **2 px** tall, `#ce450b`, about half the viewport wide
- **AND** below **300 px** of scroll the back-to-top disc has `opacity: 0` and `pointer-events: none`; above it,
  `opacity: 1` and `translateY(0)`
- **AND** the disc is **48 × 48**, full radius, `#ce450b`, fixed `bottom-6 right-6`, and clicking it scrolls to
  the top

#### Scenario: Cookie strip

- **GIVEN** no `localStorage['cookie-consent']`
- **WHEN** 1,500 ms have passed
- **THEN** the strip slides up (`translateY(0)`) as a `role="dialog"` with `aria-label="Cookie consent"`, **87 px**
  tall, white, `border-t gray-200`, `py-4 sm:py-6`, shadow
- **AND** `Accept All` stores `accepted` and `Decline` stores `essential`, and either slides it out and removes it
- **AND** with the key already set it never appears

#### Scenario: Reveal-on-scroll and reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads
- **THEN** no `[data-animate]` element is left at `opacity: 0` or translated — the reference bails out of the
  whole reveal pass under reduced motion and the recreation must too
- **AND** with motion allowed, elements below 80 % of the viewport fade up 20 px over 600 ms with their
  `data-delay` honoured, and unobserved after their first intersection

### Feature: Licence bar and sticky header

#### Scenario: Licence bar at 1440

- **GIVEN** a 1440 px viewport
- **THEN** a **37 px** strip on `#1c2634` sits above the header, text 12/16 **500** `#eaedf1`
- **AND** the left `<ul>` shows `Licence` `OK CIB #00000000` · `Manufacturer certified` · `Serving`
  `Oklahoma City metro`, with the key at `opacity-70` and the value at 600
- **AND** the right side shows one `amber-400` star, **`4.9`**, and `410+ reviews on Google (sample)`
- **AND** the strip is **not sticky** — it scrolls away and the header sticks at `top: 0` in its place

#### Scenario: Licence bar does not clip mid-token

- **GIVEN** a 390 px viewport
- **THEN** the strip shows the licence fact and the rating only, and every visible fact is whole
- **AND** the reference clips this row (`Licence OK CIB #`) because its `<ul>` is `overflow-hidden` with
  `whitespace-nowrap` children — the recreation wraps or hides whole items instead

#### Scenario: Header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** tall, `position: sticky`, `top: 0`, ground `rgb(255 255 255 / .9)` with
  `backdrop-filter: blur(16px)`, bottom border 1 px `#eaedf1`
- **AND** the logo renders **180 × 36** (`h-8 lg:h-9`), dark-on-light asset in light mode and the light asset in
  dark mode
- **AND** seven labels at 14/20 **600** `#3e4c60`, `gap: 28px`: Services, Storm damage, Projects, Financing,
  About, Blog, Contact
- **AND** the phone pill and city pill are full-radius 1 px `#d3d9e1` pills (`px-3 py-1.5`, 14/600), the theme
  toggle is a 40 px icon button, and the CTA is **146 × 40**, `#ce450b`, white 14/**700**, radius 8

#### Scenario: The nav collapses at 1280, not 1024

- **GIVEN** widths 1024 and 1279
- **THEN** the desktop nav and the CTA are hidden, the hamburger is shown (`display: block`), and the header is
  **65 px** above `lg`
- **AND** at 1280 the seven-label nav renders without any label clipped or overlapped and the header is **81 px**
- **AND** the reference ships a markup comment justifying exactly this breakpoint — keep it as a comment in the
  port *without* naming ColorLib

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport
- **WHEN** the hamburger is activated
- **THEN** `aria-expanded` flips to `true`, the glyph becomes ✕, and a panel opens below the header with seven
  full-width rows (18/600 `#1c2634`), a hairline, the phone and city pills side by side, and a full-width
  `#ce450b` CTA
- **AND** activating again closes it; the dark-mode toggle remains visible in both states

#### Scenario: Header shadow and dark toggle

- **GIVEN** the page scrolled past 50 px
- **THEN** the header gains `shadow-lg` and keeps its height
- **AND** the toggle flips `.dark` on `<html>`, persists `'dark'`/`'light'` in `localStorage.theme`, and the
  choice is applied **before first paint** (no light flash on reload)

### Feature: Hero — the promise, in six of twelve columns

#### Scenario: Hero geometry at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **750 px** on `#121a25`, top offset **118 px**, container padding **96 px** vertical /
  **32 px** horizontal inside a 1,280 px box
- **AND** the grid is **1,216 px** wide, **12 columns**, `gap: 64px`; the copy column and the form column are
  **576 px** each
- **AND** there is a background photograph (`object-cover`, `opacity-30`) under an inline
  `linear-gradient(to right, #121a25, #121a25/85 %, #121a25/40 %)` wash — the copy never sits on bare photo
- **AND** the copy column is **523 px** tall (band height is set by the **558 px** form) and starts 17 px below
  the form's top

#### Scenario: Headline, rating and promises

- **GIVEN** the hero copy column
- **THEN** the eyebrow computes 14/20 **700**, uppercase, **+0.35 px**, `#fa7838`, reading
  `Oklahoma City · Licensed and manufacturer certified`
- **AND** the `h1` computes **60 / 64.8 700**, tracking **−1.5 px**, white, box **576 × 194**, and the span
  `how bad it actually is.` is `#fa7838`
- **AND** the lead is 18/28, `white/70`, capped at `max-w-xl`
- **AND** the rating row is `inline-flex` 14 px `white/90`: five `amber-400` stars (decorative, `aria-hidden`),
  bold `4.9`, and `410+ reviews on Google · sample data` at 80 % opacity
- **AND** the promise list is a `<ul>` with `margin-top: 32px`, `sm:grid-cols-2`, `gap: 12px`, four items of
  16/24 `white/85` each preceded by a 16 px `#fa7838` tick

### Feature: The `#inspection` card — four fields and five chips

#### Scenario: Card anatomy at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the card is **576 × 558**, white, radius **16**, `padding: 32px`, `shadow-md`, **no border**
- **AND** its `h2` is **20 / 28 700** `#1c2634` reading `Book a free inspection`, followed by a 14 px
  `#57677d` line: `We will be on the roof within two working days, and you get the photographs whether or not
  you hire us.`

#### Scenario: Fields, chips and submit

- **GIVEN** the form
- **THEN** it is a real `<form id="inspection">` whose first row is `grid-cols-2 gap-4` (name, phone — **248 px**
  each), then a full-width address field
- **AND** each control is **46 px** tall, radius 8, 1 px `#d3d9e1`, `px-4 py-2.5`, 16/24 `#1c2634`, with a
  14/600 `#2c3849` label above; focus is `border #ee5b14` plus a 2 px `#ee5b14/30` ring
- **AND** name is `type=text autocomplete=name` **required**, phone is `type=tel autocomplete=tel` **required**,
  address is `type=text autocomplete=street-address` **required**
- **AND** the question `What prompted the call?` is a `<fieldset>` + `<legend>` (14/600 `#2c3849`) holding five
  **radio** chips in a `flex flex-wrap gap-2` group: `Recent storm` (**checked**), `Visible leak`,
  `Missing shingles`, `Selling the house`, `Roof is just old`
- **AND** each chip label renders as a full-radius pill, 1 px `#d3d9e1`, `px-4 py-2` 14/600 `#3e4c60`, and the
  checked one is `#ce450b` with white text; keyboard focus shows a visible ring on the pill
- **AND** the submit is **512 × 40**, full width, `#ce450b`, white 14/**500**, radius 8, with
  `shadow-primary-600/25`, labelled `Request my inspection`
- **AND** the footnote under it is 12 px `#78879b` centred: `No obligation. We never sell your details.`

#### Scenario: The form is not inert

- **GIVEN** the user submits with valid values
- **THEN** nothing reloads the page and no query string is appended to the URL
- **AND** the app shows a confirmation naming the caller and the property, or an explicit inline error — never a
  silent no-op (the reference form has **no** `action` and **no** handler, so submitting does a GET reload; do
  not reproduce that defect)
- **AND** submitting with a missing required field shows a per-field message tied by `aria-describedby` and
  clears on the next edit

### Feature: `#claim` — the six-stage insurance sequence

#### Scenario: Band and rail geometry at 1440

- **GIVEN** a 1440 px viewport
- **THEN** `#claim` is **1,033 px** tall on `#1c2634` with 112 px padding and white text
- **AND** the header block is `max-w-2xl` (**672 × 172**): eyebrow `Storm damage` (14/700 `#fa7838`), `h2`
  **36 / 40 700** tracking **−0.9 px** white, lead 18/28 `white/70`
- **AND** the grid is **12 columns**, `gap: 48px`, **517 px** tall; the rail is **479 px** (5 columns) and the
  panel **689 px** (7 columns)
- **AND** each rail row is **78 px**: `border-left: 2px #ffffff26`, `padding: 16px 0 16px 20px`, `gap: 16px`; the
  number is 14/700 `tabular-nums` `white/40`, the title bold `white/60`, the meta 14 px `white/40` reading
  `Us · 30 to 60 minutes` (owner `·` duration)

#### Scenario: The active stage

- **GIVEN** stage 1 is active on first render
- **THEN** its rail row has `aria-expanded="true"`, `border-left-color: #ee5b14`, its number `#fa7838` and its
  title `#ffffff`; every other row is `aria-expanded="false"` with `white/15`
- **AND** exactly one `[data-claim-panel]` is visible and the other five carry `hidden` (all six are in the DOM)
- **AND** the panel is radius 16, 1 px `white/10`, ground `white/5`, `p-8`, and **517 px** tall for stage 1
- **AND** the panel reads, in order: eyebrow `Stage one` (14/700 `#fa7838`), `h3` **24/32 700** white, body
  16/24 `white/70`, a `sm:grid-cols-2` `dl` of `Who does it` / `Typically takes` (12/700 `white/40` label,
  16/24 600 value), a `border-t white/10` block labelled `What you need to hand` with ticked `<li>`s, then the
  `Worth knowing.` callout (`border-primary-500/40`, `bg-primary-500/10`, radius 8, `px-4 py-3`, 14 `#ffe4d2`)

#### Scenario: Switching stages

- **GIVEN** stage 1 is open
- **WHEN** stage 3 is activated
- **THEN** stage 1's row flips to `aria-expanded="false"` and `white/15`, stage 3's becomes `#ee5b14` with a
  white title, and stage 3's panel is the only one without `hidden`
- **AND** the panel's content changes to `Stage three` / `The adjuster comes out` / `Your insurer, with us` /
  `One to three weeks to schedule`
- **AND** the panel swaps **without** a layout jump: the panel column keeps its 517 px reservation (fixed
  `min-height` or a grid row), so the band height is identical for every stage
- **AND** every rail row is a real `<button type="button">` in a `<ol>`, reachable by keyboard, with a visible
  focus ring and a name that includes its number and title

#### Scenario: Stage count and order are content

- **GIVEN** the rail
- **THEN** there are exactly **six** stages in this order: Free inspection and report · You file the claim · The
  adjuster comes out · The scope and the settlement · We build the roof · Final invoice and depreciation released
- **AND** the lead's arithmetic ("Thirteen … Seven explain the claim") is not contradicted by any count rendered
  on the page
- **AND** no stage is "hidden until you call" — the whole sequence is on the page, which is the design's argument

### Feature: `#services` — six priced cells on a hairline plate

#### Scenario: Plate at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the plate is **1,216 px** wide, `mt-12`, radius **16**, 1 px `#eaedf1` border, `gap: 1px`, ground
  `#eaedf1`, `lg:grid-cols-3`
- **AND** each cell is white, **404 × 208**, `p-8`, and the six fill two rows at x = 113 / 518 / 923
- **AND** each cell is `flex flex-col`: `h3` 18/700 `#1c2634`, blurb `mt-2 flex-1` 16/24 `#57677d`, price
  `mt-4` 14/700 `#a8350d`
- **AND** the six price lines read `From $9,800`, `Insurance, plus deductible`, `From $450`, `From $9 per foot`,
  `Quoted on site`, `From $650` and share a baseline inside each column because the blurb is `flex-1`
- **AND** the footnote under the plate is 14 `#78879b`: `Starting prices shown are sample data for
  demonstration. Replace with your own before launch.`

#### Scenario: Column steps

- **GIVEN** widths 390, 768 and 1440
- **THEN** the plate is **1 / 2 / 3** columns and the 1 px dividers survive every step
- **AND** the price line never wraps away from its cell

### Feature: `#projects` — six cards whose third meta row is money

#### Scenario: Grid and card anatomy at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the grid is **3 × 389 px** with `gap: 24px`, **1,175 px** tall, starting at y = 3,124
- **AND** each card is **389 × 585**, radius 16, 1 px `#eaedf1` border, `overflow: hidden`, `flex-col`
- **AND** the media plate is **387 × 290** (`aspect-[4/3]`, `items-end`, `p-6`) filled with a
  `linear-gradient(to bottom right, …)` and a **192 px chevron watermark** (`white/10`, stroke 4,
  `-right-8 -top-10`) that suggests a roof line
- **AND** the plate holds the location at 12/700 uppercase `white/60` and the roof type at **24/700** white
- **AND** the body is `p-6`: `h3` 18/700, copy 14/20 `#57677d` (`flex-1`), then a
  `dl grid-cols-2 gap-x-4 gap-y-3 border-t #eaedf1 pt-5` of `Size` / `On site` / `Paid by` (12/700 `#78879b`
  labels, 14/600 `#2c3849` values, `Paid by` value `#a8350d`)

#### Scenario: The plate rotation is content

- **GIVEN** the six cards in order
- **THEN** plates 1–6 use `ink-800 → ink-700`, `primary-700 → primary-600`, `ink-700 → ink-600`,
  `ink-800 → ink-700`, `primary-700 → primary-600`, `ink-700 → ink-600`
- **AND** exactly **two** of the six plates are orange; "unifying" the plates or randomising them is a fidelity
  regression, not a style choice

#### Scenario: Funding routes are the point

- **GIVEN** the six `Paid by` values
- **THEN** they are `Insurance claim`, `Financed over 60 months`, `Insurance claim`, `Paid directly`,
  `Paid directly`, `Paid directly` — in that order
- **AND** the closing note under the grid keeps the reference's explanation of why the row exists
- **AND** the six cards are `<article>` elements and the `dl` uses real `dt`/`dd` pairs

### Feature: `#why-us` — a photograph and four rules that can be checked

#### Scenario: Split at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **840 px** on `#f6f7f9`, grid **2 × 576** with `gap: 64px`
- **AND** the image is **576 × 432**, radius 16, `object-cover`, `loading="lazy"`, with a 14 `#78879b` caption
  underneath
- **AND** on mobile the image comes **after** the copy (`order-last lg:order-first` semantics: copy first, photo
  second)

#### Scenario: The four rules

- **GIVEN** the copy column
- **THEN** the eyebrow is `Why homeowners pick us`, the `h2` is `We would rather lose the job than sell you a
  claim`, and the lead is 18/28 `#57677d`
- **AND** there are exactly **four** entries, `space-y-6`, each `border-left: 2px #ce450b`, `padding-left: 20px`,
  **576 px** wide, 16/700 title over 16/24 `#57677d` body
- **AND** the titles are `We will tell you not to file`, `We meet your adjuster on the roof`, `We are still here
  next spring`, `Your deductible is your deductible`

### Feature: `#process` — three steps, three columns, one line each

#### Scenario: Step anatomy

- **GIVEN** a 1440 px viewport
- **THEN** the `<ol>` is **3 × 389 px** with `gap: 24px`, each item **176 px**
- **AND** each head is `flex items-baseline gap-3`: the number (`01`…`03`) at 14/700 `tabular-nums` `#ce450b`,
  then a 1 px `#eaedf1` rule filling the rest of the row
- **AND** the `h3` is 18/700 `mt-4`, the body 16/24 `#57677d`, and the tag is 14/600 `#a8350d`
  (`Within 2 working days`, `Same visit`, `1 to 3 days`)
- **AND** at 768 the three stay in one row (`sm:grid-cols-3`) and at 390 they stack

### Feature: `#areas` — fourteen towns in plain text

#### Scenario: Split at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **513 px**, grid **12 columns** with `gap: 64px`; the heading is 5 columns and the list
  **683 px** in 7 columns
- **AND** the `h2` is `Where we work` with **no eyebrow** above it, followed by an 18/28 `#57677d` lead
- **AND** the list is `grid-cols-2 sm:grid-cols-3`, **211 px** columns with 24 px column gaps, fourteen `<li>` at
  16 px `#2c3849`, `py-2.5`, 1 px `#eaedf1` bottom border
- **AND** the towns are Oklahoma City, Edmond, Moore, Norman, Yukon, Mustang, Bethany, Del City, Midwest City,
  Nichols Hills, Piedmont, Choctaw, Newcastle, Guthrie, followed by the 14 px note
- **AND** the towns are plain text, not links, not a map

### Feature: `#testimonials` — a stock-grey carousel that is static at desktop

#### Scenario: Header and cards

- **GIVEN** a 1440 px viewport
- **THEN** the band is **796 px** on `#f9fafb`, header centred in `max-w-3xl`
- **AND** the badge is a **pill** (`#ffe4d2` ground, `#a8350d` text, 14 px, `px-3 py-1`) reading `Reviews`
- **AND** the `h2` is `#111827` and the lead `#4b5563` — stock greys, unlike every other light band
- **AND** each card is **381 × 348**, white, radius 16, `p-8`, `shadow-soft`: five `#fa7838` stars, an 18/28
  **500** `#111827` quote, a **48 px** `#ffe4d2` avatar disc with the initial, a 16/600 name and a 14 `#4b5563`
  town

#### Scenario: Carousel geometry per width

- **GIVEN** widths 1440, 1024, 768 and 390
- **THEN** per-view is **3 / 3 / 2 / 1** and the slide width is **405 / 320 / 368 / 358 px**
- **AND** at 1440 and 1024 there are **0 dots** and both arrows are `display: none` (three slides, three per view)
- **AND** at 768 there are **2 dots** and the arrows are visible; at 390 there are **3 dots** and the arrows are
  visible
- **AND** the active dot is a **32 px** pill (`#ce450b`), inactive dots are **10 px** (`#d1d5db`)
- **AND** the track transition is 500 ms and the autoplay interval is 5 s, paused on hover
- **AND** the carousel is disabled (no autoplay, all three visible) under `prefers-reduced-motion: reduce`

### Feature: `#faq` — five rows, one open at a time

#### Scenario: Closed rows

- **GIVEN** a 1440 px viewport
- **THEN** the section is `max-w-3xl` (**768 px**) centred, five rows `py-6` divided by 1 px `#e5e7eb`
- **AND** each question is 18/600 `#111827` inside a full-width `<button>`, with a **32 px** `#f3f4f6` disc
  holding a plus icon in `#4b5563`
- **AND** the panel has `max-height: 0`, `opacity: 0`, `overflow: hidden`, `transition: all .3s`

#### Scenario: Opening and switching

- **GIVEN** all rows closed
- **WHEN** row 1 is activated
- **THEN** its panel gets `max-height` = its `scrollHeight` (the reference measures **64 px** for row 1) and
  `opacity: 1`, and its icon rotates **45°**
- **AND** activating row 3 closes row 1 and opens row 3 (single-open)
- **AND** activating an open row closes it and resets the icon to 0°
- **AND** the button carries `aria-expanded` and `aria-controls` (the reference ships **neither** — fix it, do not
  copy it)

### Feature: `#contact`, footer and attribution

#### Scenario: Closing band

- **GIVEN** a 1440 px viewport
- **THEN** the band is **440 px** on `#a8350d`, content centred in `max-w-3xl` (**768 px**), `py-28`
- **AND** the `h2` is **36 / 40 700** tracking **−0.9 px** white: `Standing in the yard wondering how bad it is?`
- **AND** the lead is 18/28 `#ffe4d2`, `max-w-xl`, `mt-5`
- **AND** the solid button is **237 × 56**, white, radius 8, `px-8 py-4`, 16/700 `#a8350d`, `hover:bg-primary-50`
- **AND** the second is 2 px `white/40`, transparent, `px-8 py-4`, 16/700 white with a 20 px phone glyph, and
  below `sm` both are full width and stacked with a 16 px gap

#### Scenario: Footer plate

- **GIVEN** a 1440 px viewport
- **THEN** the footer is **568 px** on `#111827` with `pt-24` and a **12-column, 32 px-gap** grid
- **AND** the brand column is 4 columns: 40 px light logo, `gray-400` blurb, **three** `#1f2937` social chips, then
  address, phone and email at 14 px `gray-400`
- **AND** the middle block is `sm:grid-cols-3` inside 5 columns, headed by 14/600 uppercase white labels
  (`+0.05em`): Services (4 links), Company (4), Support (4)
- **AND** the last 3 columns hold `Stay Updated`, its blurb, and a `#1f2937` email field with a `#ce450b`
  `Subscribe` button
- **AND** the bottom bar is `mt-16 border-t #1f2937 py-8` with the copyright in `gray-500` 14 and two legal links

#### Scenario: Attribution and working forms

- **GIVEN** the shipped app
- **THEN** the footer contains a link to **https://www.componentdock.com/** labelled `Component Dock`
  (AGENTS.md rule 5)
- **AND** no ColorLib string appears in any app file, including comments, `alt` text and the CTA — the app never
  says `Ridgeline`
- **AND** the newsletter submit does something observable (a stored address or a visible confirmation); the
  reference's dead `data-newsletter-form` is not a behaviour to copy
- **AND** the three social chips point at real destinations rather than `#`

### Feature: Anchors, responsive behaviour and accessibility

#### Scenario: No horizontal scroll

- **GIVEN** widths 320, 390, 768, 1024, 1280, 1440 and 1600
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every one — including **320**, where the
  reference reports **357 px** (a 37 px overflow; do not copy it)
- **AND** the hero stacks below `lg`, the services plate is 1/2/3 columns at 390/768/1440, the projects grid is
  1/2/3, and the footer's newsletter row wraps

#### Scenario: Anchors resolve on a single page

- **GIVEN** the single-page recreation
- **THEN** the seven nav labels, both city pills, the hero CTA and both closing buttons resolve to existing ids
  among `#claim`, `#services`, `#projects`, `#why-us`, `#process`, `#areas`, `#testimonials`, `#faq`, `#contact`
  and the form anchor `#inspection`
- **AND** the reference's two `#service-areas` links (a **dead id** — the section is `#areas`) are replaced by
  `#areas`
- **AND** every `id` target sits below the **81 px** sticky header (`scroll-margin-top ≥ 101px`), and smooth
  scrolling offsets by the header height
- **AND** every `tel:` is well formed (`tel:5550300300`) — the reference ships one malformed
  `tel:(555) 030-0300` — and the email is a real `mailto:`
- **AND** there are **zero** bare `#` anchors (the reference has three, in the footer social chips)

#### Scenario: Dark mode

- **GIVEN** `.dark` on `<html>`
- **THEN** the body is `#030712` with `#f3f4f6` text, `#f6f7f9` and `#f9fafb` bands become `#111827`, and the
  white bands become `#030712`
- **AND** the hero (`#121a25`), `#claim` (`#1c2634`), `#contact` (`#a8350d`) and the footer (`#111827`) are
  **unchanged**
- **AND** the inspection card becomes `#030712` with `gray-700` borders and white labels, headings are white,
  paragraphs `#9ca3af`, and the choice survives reload with no flash of light theme

#### Scenario: Keyboard and labelling

- **GIVEN** the page is reached by keyboard only
- **THEN** the skip link is first, every claim rail row and FAQ row is focusable and operable with Enter/Space,
  the chip radios are reachable in DOM order and check with the arrow keys
- **AND** every icon-only control has an accessible name (theme toggle, hamburger with `aria-label` that flips
  between `Open menu` and `Close menu`, carousel arrows, back-to-top)
- **AND** every decorative SVG is `aria-hidden`, every rating star row is not announced as six items, and the
  contact form's labels are associated with `for`/`id`

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** reveals do not translate, the carousel does not autoplay, the preloader does not animate into view,
  and smooth scrolling is disabled

## Known reference defects (do not reproduce)

1. **`#service-areas` is a dead id.** The header's city pill and the mobile panel's city pill both target it; the
   section is `#areas`. Two anchors, one missing target, zero scroll.
2. **The inspection form has no `action` and no handler.** Submitting reloads the page with the field values in
   the query string (measured: `form submit -> navigated`). Nothing in the house kit binds
   `[data-inspection-form]` — only `form[data-validate]`, which this page does not use.
3. **The newsletter form is the same** — `data-newsletter-form`, no handler, GET reload.
4. **The FAQ buttons ship no `aria-expanded` and no `aria-controls`.** The accordion works visually and is
   invisible to assistive technology.
5. **The nav's active state never binds.** `data-nav-link` values are route paths (`/services`), but the kit
   looks them up with `getElementById`, so the observer list is empty on this page. There is no active nav state
   at all — do not invent one that follows the wrong rules, and do not ship a dead `nav-active` class.
6. **The 320 px layout overflows by 37 px** (`scrollWidth 357` vs `clientWidth 320`). The wide element is the
   hero/`#projects` plate row, not the footer (unlike its siblings). Find it, wrap it, and assert
   `scrollWidth === clientWidth`.
7. **One `tel:` is malformed** (`tel:(555) 030-0300`) and the JSON-LD telephone (`+1-555-0300`) disagrees with
   every link (`5550300300`).
8. **Three footer social chips are bare `#`.**
9. **The licence bar clips mid-token at 390** (`Licence OK CIB #`) because of `overflow-hidden` +
   `whitespace-nowrap`.

## Verification checklist

- [ ] `apps/cresting` exists, `@free-react-templates/cresting` in `package.json`, `public/CNAME` =
      `cresting.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments included);
      the app never says "Ridgeline"
- [ ] bands in this order: licence bar → header → hero + `#inspection` → `#claim` → `#services` → `#projects` →
      `#why-us` → `#process` → `#areas` → `#testimonials` → `#faq` → `#contact` → footer
- [ ] licence bar **37 px** `#1c2634`, 12/500 `#eaedf1`, three facts + one `amber-400` star and `4.9`, not sticky,
      **no mid-token clipping at 390**
- [ ] header **81 px** sticky, `white/90` + `blur(16px)`, 1 px `#eaedf1`; logo `h-8` (`lg:h-9`); seven labels
      14/600 `#3e4c60`; phone + city pills; CTA **146 × 40** `#ce450b` 14/700; nav and CTA at **≥ 1280**, hamburger
      below; `shadow-lg` past 50 px
- [ ] hero **750 px** `#121a25`: photo `opacity-30` under an ink wash; 12-col grid `gap 64` with **576 + 576**;
      eyebrow 14/700 `#fa7838` +0.35; `h1` **60/64.8 700 −1.5** white with the `#fa7838` span; lede 18/28
      `white/70`; five `amber-400` stars + `4.9`; four `#fa7838` ticks in a `sm:grid-cols-2` list
- [ ] `#inspection` card **576 × 558** radius 16 `p-8` `shadow-md`; three required fields **46 px** radius 8 +
      five chip radios with `Recent storm` checked; submit **512 × 40** `#ce450b`; 12 px footnote; **submitting
      produces a visible result, never a reload and never a query string**
- [ ] `#claim` **1,033 px** `#1c2634`; rail **479** / panel **689** on a 12-col `gap-48` grid; **six** stages in
      the reference's order; only one panel visible; active rule `#ee5b14`; panel `white/5` radius 16 with
      eyebrow + 24/32 `h3` + `Who does it`/`Typically takes` + ticks + the `Worth knowing.` callout; **no layout
      jump when switching**
- [ ] `#services` **919 px**: `gap-px` plate on `#eaedf1`, radius 16, six white **404 × 208** cells `p-8`,
      `flex-1` blurbs, six price lines, sample-price footnote
- [ ] `#projects` **1,643 px**: **3 × 389** grid `gap-6`, cards **389 × 585** radius 16 border `#eaedf1`, media
      **387 × 290** with the chevron watermark, **plate rotation ink/primary/ink ×2**, three-row `dl` with
      `Paid by` in `#a8350d`, funding note under the grid
- [ ] `#why-us` **840 px** on `#f6f7f9`: 2 × 576 `gap-16`; image **576 × 432** radius 16 + caption; four
      `border-l-2 #ce450b pl-5` rules, `h2` = "We would rather lose the job than sell you a claim"
- [ ] `#process` **564 px**: `<ol>` of **3 × 389**, numbers `tabular-nums` `#ce450b` + 1 px `#eaedf1` rule, three
      tags in `#a8350d`
- [ ] `#areas` **513 px**: 5/7 split, **no eyebrow**, **fourteen** towns in 2 / 3 columns with `border-b #eaedf1`,
      plain text, local-search note
- [ ] `#testimonials` **796 px** on `gray-50`: `Reviews` **pill** `#ffe4d2`/`#a8350d`, stock-grey headings, three
      cards **381 × 348** `shadow-soft`, five `#fa7838` stars, 48 px initials; carousel 3/3/2/1 with **0 dots and
      hidden arrows at ≥ 1024**, 2 dots at 768, 3 dots at 390
- [ ] `#faq` **820 px**: `Questions` pill, five rows `py-6` divided by 1 px `#e5e7eb`, 32 px `#f3f4f6` disc whose
      plus rotates 45°, one open at a time, **with `aria-expanded`/`aria-controls`**
- [ ] `#contact` **440 px** `#a8350d`: white `h2` 36/40 −0.9, `#ffe4d2` lead, solid **237 × 56** + 2 px outline,
      full width and stacked below `sm`
- [ ] footer **568 px** `#111827`, `pt-24`, 12-col 4/5/3, 40 px logo, three social chips (real destinations),
      three link columns, working newsletter, bottom bar `mt-16 border-t #1f2937 py-8`
- [ ] fixed chrome: preloader (self-removing, non-blocking), 2 px `#ce450b` progress bar, skip link, 48 px
      back-to-top past 300 px, cookie strip after 1,500 ms storing `accepted` / `essential`
- [ ] dark mode: `#030712` body, `#111827` tinted bands, hero/claim/contact/footer unchanged, pre-paint
      resolution, persisted toggle, no white flash
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600 (the reference fails at 320
      with 357 px — the recreation must not)
- [ ] zero bare `#` anchors; `#service-areas` replaced by `#areas`; every `tel:` well formed; every image has a
      meaningful `alt`; every icon-only control has an accessible name
- [ ] 100% coverage on the new app, `scripts/verify-app.sh cresting` green

## Implementation notes for the port (not requirements)

- **The two photographs are placeholders.** The reference hot-links Unsplash (`photo-1632759145351…` hero,
  `photo-1558036117…` why-us). Ship any licensed roofer/roof photograph you own, keep the **`opacity-30` +
  ink-wash** treatment on the hero and the **4:3 / radius 16 / caption** treatment on `#why-us`, and keep both
  `alt` texts descriptive. The template reads as a photograph-led trade site; a flat colour hero kills it.
- **One face, four weights, no fallback theatre.** `Space Grotesk` 400/500/600/700 from Google Fonts with
  `display=swap` and `preconnect`; the system stack is `system-ui, sans-serif`. Do not add a display serif — the
  reference has none.
- **The claim rail is your only stateful widget.** Keep it a `<ol>` of `<button aria-expanded>` rows plus a
  sibling panel stack; derive the active index from one piece of state and let `hidden` do the rest. Reserve the
  panel's height so switching stages does not move the band.
- **Chips, not a `<select>`.** The four-field card's fifth question is a radio group rendered as pills; a native
  `<select>` would be a different design and would also break the `Recent storm` checked state.
- **Copy is content.** The caveats (`sample data`, `Replace with your own…`, the deductible paragraph) are what
  make this template different from every other roofing page; they are not placeholders to be deleted.
