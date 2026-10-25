# Template: Nightwatch (Commercial janitorial trade brand — published rates + square-footage calculator)

## Purpose

A **trade-services site for a commercial cleaning company that publishes a price range before anyone
visits the building**, and ColorLib's own description names the design's single job:

> Across 49 commercial cleaning sites, 23 lead with "get a quote" and not one shows a price, so a
> facilities manager holding three bids has no way to rank them. Nightshift puts an estimator in the
> first screen: building type, cleanable square footage and frequency in, an indicative monthly range
> out, then a written proposal request carrying the same values.

So this is **not** a "hero photo + three features + newsletter" local-trades page. The organising idea is
**arithmetic in the first screen**: the hero's right-hand column *is* a working estimator (four answers,
a live monthly range, ±15 %, rounded to the nearest $50), and every band after it exists to justify the
number — a published **scope table** with a frequency against every task, six **building types** with a
rate per cleanable square foot, a **staffing** band (turnover is the product), a four-step **process**, a
town list, references, and an FAQ written for procurement. A recreation that swaps the estimator for a
generic "Request a quote" form, or that hides the rates behind a CTA, has deleted the template.

The register is **plain-spoken trade copy with the caveats left in**: *"Sample scope for demonstration"*,
*"Starting rates are sample data"*, *"A range, not a quote. The proposal that follows a walkthrough is a
single number, and it is the one we hold."* Those lines are part of the artefact — the reference is a 2026
Astro build whose content is sample data by design. Keep them.

The catalogue's feature list also states two fidelity constraints worth quoting because an implementer
would otherwise "improve" them: **"Rates are per square foot per month, and frequency scales
sub-linearly"** (0.32 / 0.52 / 0.70 / 1.00 for 1–5 nights a week, *not* 0.2 / 0.4 / 0.6 / 1.0) and
**"Specification values set in mono so three bids line up"** (every figure in the scope table and the
estimate itself is `JetBrains Mono`, tabular by construction).

Composition: **one navy hero (with the calculator floating in it), then alternating white / `#f4f6fa`
information bands, one grey testimonial carousel, one white FAQ, one amber `primary-700` contact band and
one near-black footer.** At 1440 × 900 (measured, `getBoundingClientRect`):

| #  | band                                     | ground                     | height |
| -- | ---------------------------------------- | -------------------------- | -----: |
| 0  | licence bar (`[data-licence-bar]`)        | `ink-800` `#162135`        |     37 |
| 1  | `<header>` sticky, translucent white      | `#ffffff / 90 %`           |     81 |
| 2  | hero + `#proposal` estimator              | `ink-900` `#0d1522`        |  1,028 |
| 3  | `#scope` — the published scope table      | `#ffffff`                  |  1,190 |
| 4  | `#industries` — six rates, hairline grid  | `#ffffff`                  |    999 |
| 5  | `#why-us` — roster panel + rule list      | `ink-50` `#f4f6fa`         |    876 |
| 6  | `#process` — four numbered steps          | `#ffffff`                  |    788 |
| 7  | `#areas` — fourteen towns                 | `#ffffff`                  |    513 |
| 8  | `#testimonials` — carousel of three       | `gray-50` `#f9fafb`        |    812 |
| 9  | `#faq` — six procurement answers          | `#ffffff`                  |    901 |
| 10 | `#contact` — closing CTA band             | `primary-700` `#cb6e17`    |    440 |
| 11 | `<footer>`                                | `gray-900` `#111827`       |    567 |

**Document height 8,232 px** at 1440 × 900; **12,719 px** at 390 × 844. Hero top offset is **118 px**
(37 licence bar + 81 header) and the header is `sticky` — every in-page anchor needs
`scroll-margin-top ≥ 101 px` or the heading lands under it.

The palette is **one navy `ink` ramp, one amber `primary` ramp and stock Tailwind greys**. The three jobs
are not interchangeable: `ink-900` `#0d1522` is the **hero ground**, `ink-800` `#162135` the **licence bar
and every heading on a white band**, `ink-500` `#465a80` every paragraph, and `ink-100` `#e6eaf2` every
hairline; `primary-500` `#f0b429` is **every solid CTA** (label `ink-900`), `primary-600` `#de911d` the
**back-to-top disc, scroll-progress bar and the `#process` step numbers**, `primary-700` `#cb6e17` the
**contact-band ground and every eyebrow/rate line**, `primary-400` `#f7c948` the **hero eyebrow, the
hero's second sentence and the testimonial stars**. Amber is a *middle* tone, never a tint — there is no
gradient anywhere except two decorative `blur-3xl` circles at 10 % opacity.

Two traps in the palette: `#scope` is the **one band whose eyebrow is neutral** (`ink-500`, not amber) —
it is a document, and that is deliberate; and `#testimonials`/`#faq` use **stock Tailwind greys**
(`gray-900` headings, `gray-600` body) while every other band uses the `ink` ramp. Sampling both and
"unifying" them is the fastest way to make the page look wrong in a way nobody can name.

The type is **two variable faces**: **Inter** for everything (400/500/600/700 in use) and **JetBrains
Mono** for every specification figure — the estimate value, the scope table's `<dd>` column, the process
step numbers (`tabular-nums`). Both are served by Cloudflare's automatic font service from
`/cf-fonts/v/inter/5.2.8/…` and `/cf-fonts/v/jetbrains-mono/5.2.8/…` as **variable `wght` woff2** (no
per-weight files, no `@font-face` in the stylesheet, no font `<link>` in the HTML). Headings are 700 with
**tight negative tracking** (`−0.9 px` on a 36 px `h2`, `−1.5 px` on the 60 px `h1`) and eyebrows are
700 **uppercase with positive tracking** (`+0.35 px`); that pairing is the page's typographic signature.

Recreation of the ColorLib "Nightshift" design (https://colorlib.com/wp/template/nightshift/, live preview
https://preview.colorlib.com/theme/nightshift/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `nightshift`
- **ColorLib page:** https://colorlib.com/wp/template/nightshift/ — **HTTP 200, 112,016 B**, `<title>`
  **"Nightshift - Commercial Cleaning Website Template 2026 - Colorlib"**, dated **September 24, 2026**,
  by Aigars Silkalns, categories **Astro · Home Services · Tailwind CSS**, *"Template Details: Author:
  Colorlib · Released: September 2026 · Credits: Images from Unsplash"*, under **Home Services Website
  Templates**. Marketing copy: *"Built with Astro 7 and Tailwind CSS 4"*, *"All content lives in simple
  YAML and Markdown files"*, *"includes a built-in blog with search and filtering, dark mode with
  persistent toggle, View Transitions"*.
- **Live preview:** https://preview.colorlib.com/theme/nightshift/ — **HTTP 200, 84,493 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` is **"Commercial cleaning in
  Indianapolis, priced by square footage | Nightshift Commercial Cleaning"**. A 2026 **Astro** build: one
  hashed stylesheet `_astro/Base.BWJdxn0z.css` (**59,639 B**, `/*! tailwindcss v4.3.3 */`), one behaviour
  bundle `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B** — byte-for-byte
  the same house kit as the Metroflow/Drainwise prep; it carries carousel/pricing/blog-filter/lightbox
  handlers this page never uses), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (**16,357 B**, the same file
  as every sibling in this 2026 set).
- **Four inline `<script>` bodies** (454 / 359 / 1,119 / 370 B): the pre-paint theme resolver, the
  `ProfessionalService` JSON-LD, **the estimator** (§Behaviour), and the `load` handler that removes
  `#preloader`. The estimator is *not* in the bundle — read the inline script, not the kit.
- **No archive, no alternate family path:** `downloads/free/nightshift.zip` is not linked and
  `theme/bootstrap/nightshift/`, `theme/bb/nightshift/`, `etc/cs/nightshift/index.html` do not exist on
  this host; the live preview is the only copy.
- **Single-page?** No. **Nine top-level inner routes are live** (`services`, `industries`, `pricing`,
  `our-people`, `about`, `blog`, `contact`, `privacy`, `terms`), all HTTP 200 **only with the trailing
  slash** — the bare path answers **308** with an empty body. See §Inner-page inventory.
- **Fonts:** no `<link>` to Google Fonts and **no `@font-face` in the stylesheet**; the only font rules
  are inline `<style>` blocks naming `'Inter'` and `'JetBrains Mono'` and pointing at
  `/cf-fonts/v/{inter,jetbrains-mono}/5.2.8/{latin,latin-ext,cyrillic,…}/wght/normal.woff2` (13 URLs, all
  **variable weight**). `document.fonts` reports Inter 400 **loaded**. The recreation loads both from
  Google Fonts explicitly (`family=Inter:wght@400;500;600;700` + `family=JetBrains+Mono:wght@400;600`).

- **Recreation name:** `nightwatch` — one lowercase word, trade-adjacent and *not* the source name, no
  collision with `apps/`, `openspec/specs/`, `docs/templates/`, any bold name in `TEMPLATES.md` or any
  existing row (`git grep -il nightwatch origin/main` → **no matches**, so zero substring hits and the
  `navpane`/`navpanel` trap does not apply), and `colorlib.com/wp/template/nightwatch/`,
  `preview.colorlib.com/theme/nightwatch/`, `preview.colorlib.com/theme/bootstrap/nightwatch/` all →
  **404**. The recreation lives at `apps/nightwatch`, package `@free-react-templates/nightwatch`,
  `nightwatch.free.componentdock.com`. **No ColorLib string may appear in the app** — provenance lives in
  this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**), so this design comes from `docs/catalog-coverage.md` —
the **42 standalone designs** on colorlib.com's listing that the checklist never recorded. This is row
**`nightshift`** of 42 (*preview 200, 84,493 B*), the row after `metroflow`. When the app ships, append the
row under the best-fit category — **`## Business`** — **in source-name alphabetical order** (between the
`newave`-class and `nimbus`-class neighbours; re-read the section rather than trusting this line, a
concurrent prep may have landed first) and bump that heading's count.

## Reference readings (2026-10-25, `curl -4`)

| what                                    | value                                                                                                            |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| preview HTML                            | 200, **84,493 B**, `text/html; charset=utf-8`                                                                     |
| stylesheet `_astro/Base.BWJdxn0z.css`   | 200, **59,639 B**, `/*! tailwindcss v4.3.3 */`                                                                    |
| behaviour kit `…_lang.BLoalVWc.js`      | 200, **16,233 B** (identical to the Drainwise/Metroflow prep)                                                     |
| router `…CYDbzu1r.js`                   | 200, **16,357 B** (same house router)                                                                             |
| inline `<script>` bodies                | **4** (theme 454 B · JSON-LD 359 B · estimator 1,119 B · preloader 370 B)                                          |
| logo                                    | `assets/img/logo.svg` (dark on light) + `assets/img/logo-light.svg` (footer); natural **210 × 40**; header renders `h-8` → 32 px tall (`lg:h-9` → 36), footer `h-10` → **210 × 40** measured |
| content images                          | **1** — `assets/img/people-panel.svg` (**3,930 B**, `viewBox 0 0 800 600`), a **hand-drawn roster panel**, rendered **576 × 432**, radius 16, `object-fit: cover` |
| favicon / OG                            | `favicon.svg`; `og:title`, `og:description`, `og:type`, `og:site_name`, `og:image=/og-image.jpg`; **no canonical**; `<meta name="robots" content="noindex, nofollow">` |
| inner routes                            | **9** top-level, all 200 with trailing slash, 308 without (see §Inner-page inventory)                              |
| document height                         | **8,232 px** at 1440 × 900; **12,719 px** at 390 × 844                                                            |
| anchors                                 | **45** `a[href]` — 30 path links, 4 `#proposal`, 2 `#service-areas` (**dead id**), 3 bare `#`, 1 skip-link `#main-content`, 4 `tel:` (one malformed), 1 `mailto:` |
| inline `<svg>`                          | **40** (0 icon font, 0 sprite sheet); 15 are the testimonial stars, 2 the carousel arrows                             |
| headings                                | 1 × `h1`, 9 × `h2` (the estimator card owns one), 14 × `h3`                                                        |
| structure                               | **459** `class="…"` attributes, **336** distinct utility names; **1** `<dl>` of 11 rows in `#scope`                |

## Design tokens (measured from `Base.BWJdxn0z.css`, 59,639 B, and from `getComputedStyle` at 1440 px)

### `ink` — navy neutral ramp (all structure)

| tone | hex       | where it is used                                                                 |
| ---- | --------- | -------------------------------------------------------------------------------- |
| 50   | `#f4f6fa` | `#why-us` band ground, the estimator's range box, scope header row, zebra rows (60 %) |
| 100  | `#e6eaf2` | licence-bar text, every hairline, the industry grid's 1 px gaps                   |
| 200  | `#cad3e4` | card and field borders, the scope table's outer border                            |
| 300  | `#9aaac8` | placeholders (`placeholder:text-ink-300`)                                         |
| 400  | `#65799f` | sample-data notes, the estimator's uppercase label, figcaptions                   |
| 500  | `#465a80` | every paragraph on a light band; the `#scope` eyebrow                             |
| 600  | `#314262` | nav labels, pill labels, the scope header row text                                |
| 700  | `#22304a` | field labels, town list items                                                     |
| 800  | `#162135` | **every heading on a light band**, the licence bar ground                         |
| 900  | `#0d1522` | **the hero ground**, and the label colour of every solid amber CTA                |

### `primary` — amber ramp (CTAs, eyebrows, figures, one band)

| tone | hex       | where it is used                                                              |
| ---- | --------- | ----------------------------------------------------------------------------- |
| 50   | `#fffbea` | contact-band button hover                                                     |
| 100  | `#fff3c4` | contact-band lead paragraph; testimonial/FAQ pill ground; 48 px author discs  |
| 200  | `#fce588` | dark-mode `primary-200` accents                                               |
| 300  | `#fadb5f` | dark mode only (`dark:text-primary-300`)                                      |
| 400  | `#f7c948` | **hero eyebrow, "A number out.", testimonial stars, `btn-primary:hover`**     |
| 500  | `#f0b429` | **every solid CTA** (header CTA, form submit, footer Subscribe)               |
| 600  | `#de911d` | **`#process` step numbers, back-to-top disc, scroll-progress bar, active dot** |
| 700  | `#cb6e17` | **`#contact` band ground, every band eyebrow, every rate line, pill text**    |
| 800  | `#b44d12` | dark mode only (`dark:border-primary-800`)                                    |
| 900  | `#8d2b0b` | dark mode pill ground (`dark:bg-primary-900/50`)                              |

### Stock Tailwind greys (only in `#testimonials`, `#faq` and the footer)

`gray-50 #f9fafb` (testimonial band ground) · `gray-100 #f3f4f6` (FAQ icon disc) · `gray-200 #e5e7eb`
(FAQ row divider) · `gray-300 #d1d5db` (inactive carousel dot, cookie Decline border) · `gray-500
#6b7280` (bottom-bar links) · `gray-600 #4b5563` (testimonial/FAQ body) · `gray-700 #374151` (footer
input border) · `gray-800 #1f2937` (footer chips/inputs, FAQ divider in dark) · `gray-900 #111827`
(testimonial/FAQ headings **and the footer ground**). `amber-400 #fbbf24` is used once, for the licence
bar's rating star, and is *not* the `primary` ramp.

### Dark mode (`.dark` on `<html>`, measured by emulating `prefers-color-scheme: dark`)

| element              | light                              | dark                                        |
| -------------------- | ---------------------------------- | ------------------------------------------- |
| `<body>`             | `#ffffff` / `#111827`              | `#030712` (gray-950) / `#f3f4f6`            |
| header               | `#ffffff / 90 %`                   | `gray-950 / 90 %`, border `gray-800`        |
| hero                 | `#0d1522`                          | **unchanged `#0d1522`**                     |
| `#why-us` band       | `#f4f6fa`                          | `#111827` (gray-900)                        |
| testimonial band     | `#f9fafb`                          | `#111827`                                   |
| cards / estimator    | `#ffffff`, border `#cad3e4`        | `#030712`, border `#374151`                 |
| range box / inputs   | `#f4f6fa` / `#ffffff`              | `#111827` / `#111827`, text white           |
| scope `<dd>`         | `#465a80`                          | `#9ca3af`                                   |
| nav labels           | `#314262`                          | `#9ca3af`                                   |
| `#contact` band      | `#cb6e17`                          | **unchanged**                               |
| footer               | `#111827`                          | **unchanged `#111827`**                     |

Resolution is **pre-paint** (inline script: `localStorage.theme` → `prefers-color-scheme`), the toggle
writes `theme` and flips the class; there must be no white flash on reload.

### Typography (measured)

| role                   | face            | size / line-height | weight | tracking | colour              |
| ---------------------- | --------------- | ------------------ | ------ | -------- | ------------------- |
| `h1` (hero)            | Inter           | 60 / 64.8 (`1.08`) | 700    | −1.5 px  | `#ffffff`           |
| `h1` @ `sm` / @ base   | Inter           | 48 / 52 · 36 / 39  | 700    | −0.9 px  | `#ffffff`           |
| `h2` (band)            | Inter           | 36 / 40            | 700    | −0.9 px  | `#162135` / white   |
| `h2` (estimator card)  | Inter           | 20 / 28            | 700    | normal   | `#162135`           |
| `h3` (cards/steps)     | Inter           | 18 / 28            | 700    | normal   | `#162135`           |
| band eyebrow           | Inter           | 14 / 20            | 700    | +0.35 px, uppercase | `#cb6e17` (or `#f7c948` in hero, `#465a80` in `#scope`) |
| lead / blurb           | Inter           | 18 / 28            | 400    | normal   | `#465a80`           |
| body                   | Inter           | 16 / 24            | 400    | normal   | `#465a80` — `#22304a` in lists |
| pill label             | Inter           | 14 / 20            | 600    | normal   | `#314262`, checked → white |
| estimate value         | **JetBrains Mono** | 30 / 36         | 600    | normal   | `#162135`           |
| scope `<dd>`           | **JetBrains Mono** | 14 / 20         | 400    | normal   | `#465a80`           |
| micro label            | Inter           | 12 / 16            | 700    | +0.3 px, uppercase | `#65799f`  |
| licence bar            | Inter           | 12 / 16            | 400 / 500 | normal | `#e6eaf2` on `#162135` |

### Buttons, fields, radii, shadows (measured at 1440)

| token             | value                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------- |
| `btn-primary`     | bg `#f0b429`, label `#0d1522`, 14/20 **700**, radius **8**, padding **10 × 20**, h **40**; hover bg `#f7c948` + `shadow-lg`; focus ring 2 px `#f7c948`, offset 2 |
| header CTA        | same block, `px-5 py-2.5`, hidden below **1280**                                           |
| contact buttons   | fill: bg white, label `#cb6e17`, 16/24 **700**, `px-8 py-4` → **211 × 56**, radius 8; outline: transparent, **2 px** `white / 40`, white label, **257 × 60** |
| fields            | h **46**, radius **8**, 1 px `#cad3e4`, bg white, `px-4 py-2.5`, 16/24 `#162135`; focus `border-primary-500` + 2 px ring `primary-500 / 30` |
| frequency / extras pill | radius **full**, 1 px `#cad3e4`, `px-4 py-2` (8 × 16), 14/20 **600** `#314262`; checked bg `#162135`, text white |
| radii             | fields & buttons **8** · range box **12** · cards, grids, table wrapper **16** · discs/pills **full** |
| `shadow-soft`     | `0 4px 16px -4px #0000001a` (testimonial cards)                                             |
| container         | `max-width 1280`, `px-4 lg:px-8` → **1,216 px** of content at 1440                          |
| section rhythm    | `.section` = `py-20` (80) → `lg:py-28` (**112**); hero container `py-16` (64) → `lg:py-24` (**96**) |

## Reference document order

```
licence bar → header → [hero: copy 5/12 + estimator 7/12] → #scope → #industries → #why-us
→ #process → #areas → #testimonials → #faq → #contact → footer → (fixed) cookie, back-to-top
```

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Licence bar (37 px, `#162135`)

`h-9` (36 + 1 px border) `text-xs`, three facts on the left and a rating on the right; items 2–3 are
`hidden sm:flex`:

1. "Bonded and insured" (70 % opacity) + **"$2M general liability"** (600)
2. "Every cleaner background checked"
3. "Serving" + **"Central Indiana"**

Right: an `amber-400` star glyph, **"4.7"**, "90+ reviews on Google (sample)" at 70 % opacity.
It is **not** sticky and it scrolls away with the page.

### 1 — Header (81 px, `sticky`, `bg-white/90` + `backdrop-blur-lg`)

- logo `h-8` → `lg:h-9`, dark/light pair swapped by `dark:`
- **seven labels**, 14/600 `#314262`, `gap-7`, switching on at **`xl` (1280), not `lg`** — the markup
  says why: *"a trade header carries a six or seven item nav plus a phone pill, a theme toggle and a CTA.
  That does not fit until about 1280"*; between 1024 and 1279 a `lg` nav buried one to four links under
  the pill.
- **city pill** "Indianapolis, IN" with a pin glyph — `hidden 2xl:block` (1536), for the same reason,
  and it links to `#service-areas` (**an id that does not exist** — see §Known reference defects)
- **phone pill** `(555) 050-0500` — `hidden md:block`, `tel:5550500500`, full radius, 1 px `#cad3e4`
- **theme toggle** (`data-dark-toggle`), 20 px sun/moon pair
- **CTA "Request a proposal"** → `#proposal`, `hidden xl:inline-flex`
- **hamburger** `xl:hidden` (40 × 40, radius 8) opening the mobile panel: seven labels (16/600, `py-3`,
  full-width rows) + phone + city + full-width CTA; `aria-expanded` flips, glyph swaps ☰ ↔ ✕. Open height
  **492 px** at 390.
- past **50 px** of scroll the header gains `shadow-lg` (no size change)

### 2 — Hero + estimator (1,028 px, `#0d1522`)

A 12-column grid, `items-start`, `gap-16` (64), inside `py-24` (96). A **460 px `primary-500/10`
`blur-3xl` circle** sits at `-left-40 top-1/3`, clipped by the section's `overflow-hidden` — decoration
only, `aria-hidden`, never a gradient.

**Left column, 5/12 (469 px, `lg:pt-6`)**

- eyebrow: "Indianapolis · Bonded, insured, background checked" — 14/700 uppercase `#f7c948`
- `h1` **"Square footage in. A number out."** — 60/64.8 700 −1.5 px white, with **"A number out." in
  `#f7c948`** (a `<span>`, not an `h1:after`). It wraps to three lines at 1440 in a 469 px column:
  "Square footage / in. A number / out."
- lead: "You are comparing three bids and none of them will give you a figure without a site visit. We
  checked 49 cleaning companies and not one showed a price. Put your building in below, get an indicative
  monthly range now, and a written proposal within one working day." — 18/28 `white / 70`
- four checks, `mt-8`, `space-y-3`, 16/24 `white / 85`, 16 px tick in `#f7c948`:
  1. "An indicative range before you speak to anyone"
  2. "Written proposal inside one working day"
  3. "Every cleaner background checked and badged"
  4. "One named account manager, not a call centre"

**Right column, 7/12 — the estimator card (683 × 836, white, radius 16, 1 px `#cad3e4`, `p-8`)** —
`<form data-proposal-form>`, also wrapped by `<section id="proposal">` so `#proposal` anchors to it:

- head: **"Price your building"** 20/28 700 + "Four answers. The range updates as you type." 14/20 `#465a80`
- row 1 (two columns, `gap-6`): **Type of building** `<select name="facility">` with six options in this
  order — Office (rate **20**), Medical or dental (**34**), School or childcare (**26**), Industrial or
  warehouse (**12**), Retail or showroom (**22**), Gym or studio (**30**); **Cleanable square footage**
  `<input type="number" min="500" step="500" value="12000" required inputmode="numeric">` (**mono** text)
- row 2 `<fieldset>` **How often** — four radio pills: Once a week (**0.32**), Twice a week (**0.52**),
  Three nights (**0.70**), Five nights (**1.00**, `checked`)
- row 3 `<fieldset>` **Anything on top** — four checkbox pills: Restroom consumables (**+180**), Monthly
  floor care (**+340**), Interior glass (**+120**), Day porter, 4 hours (**+2,400**)
- **Indicative monthly range** box (radius 12, `#f4f6fa`, `p-5`): micro label 12/700 uppercase +0.3 px
  `#65799f`; the value 30/36 **600 JetBrains Mono** `#162135` with `aria-live="polite"`; the caveat "A
  range, not a quote. The proposal that follows a walkthrough is a single number, and it is the one we
  hold." 14/20 `#465a80`
- **Your name** / **Work email** (two columns, `gap-4`, `required`, `autocomplete="name" / "email"`)
- submit **"Request the written proposal"** — `btn-primary`, full width
- fine print 12/16 `#65799f`, and a hidden confirmation paragraph (`role="status"`) that reads
  *"Thank you. A written proposal follows within one working day. This is a demo confirmation — connect
  the form to your CRM."*

### 3 — `#scope` (1,190 px, white) — the document, not a feature list

Eyebrow **"The scope"** — the page's only **neutral** eyebrow (`#465a80`). `h2` "What "nightly cleaning"
actually means". Lead: "Every proposal in this category says "thorough" and "detail-oriented". Neither of
those is a frequency. This is the document you should be comparing bids on, and ours is published before
you ask for it."

Table wrapper `mt-10`, radius 16, 1 px `#cad3e4`, clipped: a header row (`#f4f6fa`, `px-6 py-4`, 14/600
`#314262`, bottom border) reading **"Standard office scope. Frequencies shown are for a five-night
schedule."**, then a `<dl>` of **eleven** rows (`px-6 py-4`, `dt` = 2/5 of the row = **466 px**, 16/700
`#162135`; `dd` = `JetBrains Mono` 14/20 `#465a80`; every second row tinted `#f4f6fa` at 60 %):

| task                                        | frequency line                                                        |
| ------------------------------------------- | --------------------------------------------------------------------- |
| Trash and recycling                         | Every visit. Liners replaced when soiled, not on a rota.              |
| Restrooms                                   | Every visit. Fixtures disinfected, dispensers filled, floors machine-mopped not spot-mopped. |
| Vacuuming, traffic lanes                    | Every visit.                                                          |
| Vacuuming, full coverage including under desks | Weekly.                                                            |
| Hard floor damp mop                         | Every visit in kitchens and restrooms, weekly elsewhere.              |
| Kitchen and break room                      | Every visit. Counters, sinks, table tops, appliance exteriors.        |
| Glass, interior partitions                  | Weekly, plus spot cleaning every visit.                               |
| High and low dusting                        | Monthly and weekly respectively. Most bids omit high dusting entirely. |
| Vents and diffusers                         | Quarterly.                                                            |
| Floor burnishing or buffing                 | Monthly, quoted as an extra rather than assumed.                      |
| Carpet extraction                           | Twice a year, quoted separately.                                      |

Closing note (`mt-6`, 14/20 `#65799f`): "Sample scope for demonstration. Replace with your own before
launch. The proposal you receive lists every task at the frequency agreed for your building."

### 4 — `#industries` (999 px, white) — six rates in one hairline grid

Eyebrow "Who we clean for" (`#cb6e17`). `h2` "Six building types, priced differently for a reason". Lead
ends "Every figure below is per cleanable square foot per month at five nights a week."

**One bordered wrapper (1,216 × 443, radius 16, ground + 1 px border `#e6eaf2`) whose cells are separated
by the wrapper's own `gap-px`** — the same construction as the sibling Drainwise prep, not cards with
shadows. Six cells **404 × 208**, `p-8`, white, no radius of their own; 3 columns at `lg`, 2 at `sm`.
Each cell: `h3` 18/28 700, blurb 16/24 `#465a80` **as the flex-growing element** (so the six rate lines
share a baseline per row), then the rate in 14/700 `#cb6e17`:

Office "From 20c per sq ft per month" · Medical and dental "34c" · Schools and childcare "26c" ·
Industrial and warehouse "12c" · Retail and showroom "22c" · Gyms and studios "30c".

Closing note: "Starting rates are sample data for demonstration. Replace with your own before launch."

### 5 — `#why-us` (876 px, `#f4f6fa`) — the roster panel and four rules

Two columns (`lg:grid-cols-2`, `gap-16`, `items-center`), image **first in DOM but `order-last lg:order-first`**.

- `<figure>`: `people-panel.svg` rendered **576 × 432**, radius 16, `object-fit: cover`; figcaption
  "Replace with a photograph of your own crew before launch." 14/20 `#65799f`. The panel is a **drawn
  artefact, not a photo** — a `#0d1522` ground with a `#162135` inset card, the title "The same crew,
  twelve months", a MON–FRI header row in mono `#65799f`, and a 5 × 5 grid of shift chips: **amber
  `#f7c948` chips with initials (AK)** for the named crew and **`#22304a` chips with "rl f"** for relief
  nights, footnoted "Yellow is your named crew. Grey is relief, and you are told in advance." A
  recreation may redraw it (inline SVG / CSS grid) but must keep the *idea*: one glance shows the same
  initials every day with relief marked — a stock photo of a cleaner deletes the argument.
- right: eyebrow "Our people"; `h2` **"Turnover is the product"**; lead "Industry turnover in janitorial
  runs high enough that "who is cleaning my building this month" is a real question. Almost every quality
  problem in this trade traces back to it."; then a `<dl>` of **four** entries, `space-y-6`, each
  `border-l-2 #de911d pl-5` (`dt` 16/700 `#162135`, `dd` 16/24 `#465a80`):
  1. "We pay above the local average" — "It is the single highest-leverage thing a janitorial company can
     do about quality, and it is the reason our price is rarely the lowest of the three you are comparing."
  2. "The same crew, named on your account" — "You get the names and you meet them at the walkthrough. If
     somebody is covering, you are told in advance rather than finding a stranger in the building."
  3. "Background checked and badged" — "Every cleaner, checked before their first shift and badged on
     site. Certificates go to you before the contract starts, not when you ask."
  4. "Supervised, and the log proves it" — "A supervisor walks each site weekly and records it. You see the
     log. An unsupervised night crew is how a contract quietly degrades over six months."

### 6 — `#process` (788 px, white) — four steps in a three-column grid

Eyebrow "How it goes"; `h2` "From the form to the first night"; lead "Four steps, and the first one you
can do on this page."

`<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` with **four** `<li>` — i.e. **three steps on row
one and the fourth alone on row two**. That is the reference's measured layout, not a transcription
error: verify it before "balancing" the grid, because four columns changes the band's rhythm.

Each step: a baseline row of the number (**"01"–"04"**, 14/700 `tabular-nums` `#de911d`) and a 1 px
`#e6eaf2` rule filling the rest; `h3` `mt-4`; blurb; tag in 14/600 `#cb6e17`:

1. **You price it here** — "Building type, square footage, frequency and any extras. You get an indicative
   range immediately and a written proposal within one working day." — *Under two minutes*
2. **We walk the building** — "Usually within three working days. We measure what is actually cleanable,
   which is normally less than the leased area, and that is what you are billed on." — *30 to 60 minutes*
3. **You get one number and a scope** — "A single monthly figure, with every task and its frequency
   listed. If you are comparing bids, this is the document to compare." — *Within 1 working day of the walk*
4. **We start, supervised** — "A supervisor is on site for the first week and weekly thereafter, with the
   log shared with you. Your account manager is named on the contract." — *Usually within 2 weeks*

### 7 — `#areas` (513 px, white) — fourteen towns, seven columns wide

12-column grid (`lg:grid-cols-12 gap-16`): left `lg:col-span-5` with `h2` **"Where we work"** (no eyebrow)
and the lead "Central Indiana, with crews based on both sides of the I-465 loop. We take buildings within
about forty minutes of a depot, because a night crew that travels too far starts late."; right
`lg:col-span-7` a `<ul>` of **14** towns in `grid-cols-2 sm:grid-cols-3`, each `border-b #e6eaf2 py-2.5`,
16/24 `#22304a`:

Indianapolis · Carmel · Fishers · Noblesville · Zionsville · Avon · Greenwood · Plainfield ·
Brownsburg · Westfield · Speedway · Beech Grove · Franklin · Danville

Closing note: "Replace this list with your own towns. Written as plain text it is the cheapest local
search signal a services site has."

### 8 — `#testimonials` (812 px, `#f9fafb`) — a carousel that is static at 1440

Centred head (`max-w-3xl`): pill **"References"** (`#fff3c4` ground, `#cb6e17` label, radius full,
`px-3 py-1`, 14/500); `h2` "What facilities managers say" in `gray-900`; note "Sample references for
demonstration. Replace with your own, and get permission before naming a client." in `gray-600`.

Carousel `mt-16`: a flex track of **three** slides, each **405 px** wide with `px-3` gutters (card **381 ×
336**), white, radius 16, `p-8`, `shadow-soft`. At 1440 the arrows compute `display: none` and the dots
container is **empty** — three cards, three per view, one position, so the kit injects nothing. At 390 it
is one card of **334 px**, two 36 px white arrow discs and **three** dots (active 32 × 10 `#de911d`,
others 10 × 10 `#d1d5db`); autoplay **5 s**, pause on hover, dots/arrows reset the timer.

Card anatomy: five 20 px `#f7c948` stars; the quote is a `<blockquote>` at 18/28 **500** `gray-900` with real curly quotes
(*""They were the only one of four bidders…"*); author row `mt-6` — 48 px `#fff3c4` disc with the initial
in `#de911d`, name 16/24 600 `gray-900`, role 14/20 `gray-600`:

1. **Dana Whitfield**, Facilities manager, professional services — "They were the only one of four bidders
   who gave me a number I could take to my director before the site visit. That alone shortened the
   process by two weeks."
2. **Ray Osei**, Operations, medical group — "The scope document is the reason we switched. Our previous
   contract said "regular dusting" and it turned out that meant twice a year."
3. **Mel Kaminski**, Office manager, software company — "Same two people for eighteen months. In this
   industry that is genuinely unusual and it shows in the building."

### 9 — `#faq` (901 px, white) — six answers for procurement

Pill "Questions", `h2` "Before you request a proposal", note "The things procurement asks, answered
here." List `max-w-3xl mt-16`, rows divided by 1 px `gray-200`, `py-6`: a full-width `<button>` with the
question 18/600 `gray-900` and a **32 px circular `#f3f4f6` disc** holding a 20 px "＋" that **rotates 45°
into an "×"**; the answer is a `max-height`/`opacity` 300 ms transition (opening one closes the others),
16/24 `gray-600`, `pt-4`. Row height closed **81 px**.

1. **Why publish rates at all?** — "Because you are comparing three bids and none of the others will give
   you a figure. Of 49 cleaning companies we looked at, five asked for square footage anywhere in the
   quote flow, and it is the single biggest driver of the number they were about to send you. A range
   costs us nothing and saves you a fortnight."
2. **Is the range the price?** — "No, and we would rather say so twice. It is derived from square footage,
   building type and frequency. The walkthrough finds the things that move it: how much of the floor is
   actually carpet, how many restrooms, whether there is a loading dock, how the building is accessed at
   night."
3. **What is a cleanable square foot?** — "The area we actually clean, which excludes leased-but-empty
   space, elevator shafts, mechanical rooms and anything you exclude. It is usually meaningfully less than
   the leased area, and billing on leased area is one of the quiet ways a bid gets inflated."
4. **Are your staff employees or subcontractors?** — "Employees, paid above the local average, background
   checked and badged. It costs more than the subcontract model and it is the reason the same people are
   in your building next year."
5. **What insurance do you carry?** — "Two million dollars general liability, workers compensation and a
   janitorial bond. Certificates go to you before the contract starts. Ask every bidder for these up
   front, because the cheapest bid in this category is sometimes the uninsured one."
6. **Can you cover at short notice?** — "We hold relief crews seven nights a week, charged at the standard
   nightly rate with no premium. If we cannot staff it we will tell you within the hour rather than send
   somebody who has never been in your building."

### 10 — `#contact` (440 px, `#cb6e17`) — the closing band

Centred `max-w-3xl`: `h2` "Comparing bids and missing a number?" white 36/40 −0.9; lead "Put your square
footage in and you will have a range in about a minute, and a written proposal tomorrow." 18/28
`#fff3c4` `max-w-xl`; `mt-10` two buttons — white fill ("Price your building" → `#proposal`) and a 2 px
`white/40` outline with a phone glyph ("Call (555) 050-0500" → `tel:`). Full width stacked below `sm`.

### 11 — Footer (567 px, `#111827`, `pt-16 lg:pt-24`)

12-column grid (`gap-12 lg:gap-8`), measured columns **384 / 488 / 280** (plus the two 32 px gaps =
1,216):

- **brand `lg:col-span-4`**: `logo-light.svg` at **210 × 40** (210 px wide is its natural size), blurb
  "Commercial janitorial services in Indianapolis. Tell us the square footage and the frequency, and get a
  written proposal within one working day." `max-w-xs` `gray-400`, three 40 px social chips
  (`rounded-lg bg-gray-800`, 20 px glyphs, `aria-label` Twitter/Instagram/LinkedIn — **all `href="#"`**),
  then address "1230 North Capitol Avenue, Indianapolis, OH 43215" (the reference's own state/city
  mismatch — keep or correct, do not silently "fix" one half), phone and
  `mailto:proposals@nightshiftclean.example`, 14/20 `gray-400`.
- **links `sm:grid-cols-3 lg:col-span-5`**: **Services** — Nightly janitorial, Floor care, Day porters,
  Disinfection; **Company** — About, Industries, Our people, Blog; **Support** — Request a proposal, How
  we price, Contact, Privacy, Terms. Headings 14/600 uppercase `+0.7 px` white; links `gray-400` hover
  white.
- **newsletter `lg:col-span-3`**: "Stay Updated" + "Seasonal maintenance reminders and plain-English notes
  on what actually needs doing before winter." + a **dead** form (`data-newsletter-form`, no `action`, no
  handler anywhere in the bundle or inline scripts): email field **46 px** `bg-gray-800`, 1 px
  `gray-700`, radius 8, and an amber **Subscribe** button 46 px, 16/500 `#0d1522`.
- **bottom bar** `mt-16 border-t #1f2937 py-8` (85 px): "© 2026 Nightshift Commercial Cleaning. All rights
  reserved." 14/20 `gray-500` + Privacy Policy / Terms of Service.
- **required addition:** the recreation's footer MUST link `https://www.componentdock.com/`
  ("Component Dock") — AGENTS.md rule 5 — placed in this bottom bar (or replacing the social chips).

### 12 — Fixed chrome

- **`#preloader`** — full-screen white (dark `gray-950`) overlay with a 40 px spinner, 4 px border,
  `border-t-primary-600`; removed on `window.load` (opacity → 0, 300 ms). It is *gone* from the DOM in
  every later reading, so measure it early or not at all.
- **`#scroll-progress`** — 2 px bar, top-left, `#de911d`, width = `scrollY / (scrollHeight − innerHeight)`.
- **skip link** — "Skip to content" → `#main-content`, `sr-only` until focused.
- **`#back-to-top`** — 48 px `#de911d` disc, `bottom-6 right-6`, white chevron, hidden (opacity 0,
  `pointer-events: none`, `translateY(16px)`) until **300 px** of scroll, smooth scroll on click.
- **`#cookie-consent`** — fixed bottom strip, white, `border-t gray-200`, `py-4 sm:py-6`, `role="dialog"`,
  slides up **after 1,500 ms** unless `localStorage['cookie-consent']` exists; "Decline" writes
  `essential`, "Accept All" writes `accepted`, then it translates back down and removes itself (300 ms).

## Behaviour the recreation must reproduce

### The estimator (inline script, 1,119 B — the page's only bespoke logic)

```
rate   = Number(selectedOption.dataset.rate) / 100   // dollars per sq ft per month
sqft   = Number(sizeInput.value || 0)
factor = Number(checkedFrequency.dataset.factor)     // 0.32 | 0.52 | 0.70 | 1.00
if (!rate || !sqft || !factor) → text = "—"           // any missing term shows an em dash
monthly = rate * sqft * factor
        + Σ Number(eachCheckedExtra.dataset.monthly)   // 180 · 340 · 120 · 2400
round50 = v => Math.round(v / 50) * 50
text = "$" + round50(monthly * 0.85).toLocaleString("en-US")
     + " to $" + round50(monthly * 1.15).toLocaleString("en-US")
```

- wired to `input` **and** `change` on the form (so both typing and pill clicks update it), run **once** on
  mount, guarded by a `data-proposal-ready` flag because the script re-runs on `astro:page-load`;
- `submit` is `preventDefault`ed and reveals the confirmation paragraph (`role="status"`, `bg-#162135`,
  white, radius 8, `px-4 py-3`);
- the value carries `aria-live="polite"` so a screen reader hears the range change;
- **verified arithmetic on the live page**: defaults (Office, 12,000 sq ft, Five nights) →
  **"$2,050 to $2,750"** (2,400 × 0.85 = 2,040 → 2,050; × 1.15 = 2,760 → 2,750); Medical, 20,000 →
  **"$5,800 to $7,800"**; plus Monthly floor care → **"$6,050 to $8,200"**. Any recreation that produces
  $2,040 or $2,760 has skipped the rounding and is wrong.

### The house kit (16,233 B) — what this page actually uses

Wired here: `data-dark-toggle`, `data-mobile-toggle`/`data-mobile-menu` (+ accordions inside the panel),
`data-header` (shadow past 50 px), `data-animate` reveal with `data-delay`, `data-nav-link` scrollspy
(**every value is a route path — `/services`, `/industries`, … — so `getElementById` finds nothing and no
nav label ever activates; the recreation must point them at real ids if it wants the scrollspy**),
smooth in-page scrolling with header offset, `data-faq-toggle`, cookie strip, `data-carousel`,
`#scroll-progress`, `#back-to-top`, preloader teardown.

Present in the bundle but **unused** on this page (do not port them): billing toggle, pricing cards,
counters, typewriter, video modal, lightbox, blog search/category filter, parallax, toast, form validation
helper, image shimmer.

`data-newsletter-form` exists in the markup with **no handler** — it is a dead form in the reference.

## Data-attribute inventory (measured on the live index)

`data-animate` · `data-delay` · `data-header` · `data-dark-toggle` · `data-mobile-toggle` ·
`data-mobile-menu` · `data-accordion-toggle` · `data-nav-link` · `data-licence-bar` · `data-phone` ·
`data-cookie-accept` · `data-cookie-decline` · `data-carousel` · `data-carousel-track` ·
`data-carousel-slide` · `data-carousel-prev` · `data-carousel-next` · `data-carousel-dots` ·
`data-faq-toggle` · `data-faq-icon` · `data-proposal-form` · `data-proposal-facility` ·
`data-proposal-size` · `data-proposal-estimate` · `data-proposal-confirmation` · `data-proposal-ready` ·
`data-rate` · `data-factor` · `data-monthly` · `data-newsletter-form` (dead) · `data-cf-beacon` /
`data-cfasync` / `data-astro-exec` (host-injected, ignore).

## Anchor map (all 45 `a[href]`)

| count | href                                    | notes                                                      |
| ----: | --------------------------------------- | ---------------------------------------------------------- |
|     6 | `/theme/nightshift/services`            | nav, mobile panel, footer Services                         |
|     4 | `/theme/nightshift/#proposal`           | header CTA, mobile CTA, `#contact` primary button, footer Support |
|     3 | `/theme/nightshift/industries`          | nav, mobile, footer                                        |
|     3 | `/theme/nightshift/pricing`             | nav ("How we price"), mobile, footer                       |
|     3 | `/theme/nightshift/our-people`          | nav, mobile, footer                                        |
|     3 | `/theme/nightshift/about`               | nav, mobile, footer                                        |
|     3 | `/theme/nightshift/blog`                | nav, mobile, footer                                        |
|     3 | `/theme/nightshift/contact`             | nav, mobile, footer                                        |
|     3 | `tel:5550500500`                        | three phone pills                                          |
|     1 | `tel:(555) 050-0500`                    | **footer — malformed `tel:` URI (spaces + parentheses)**   |
|     3 | `#`                                     | **dead** — the three footer social chips                   |
|     2 | `#service-areas`                        | **dead id** — header city pill and the mobile panel's copy |
|     2 | `/theme/nightshift/privacy`             | footer                                                     |
|     2 | `/theme/nightshift/terms`               | footer                                                     |
|     2 | `/theme/nightshift/`                    | logo (header + footer)                                     |
|     1 | `#main-content`                         | skip link                                                  |
|     1 | `mailto:proposals@nightshiftclean.example` | footer                                                  |

**Single-page mapping for the recreation** (the reference's seven nav routes become in-page anchors):

| label          | recreation target | section                     |
| -------------- | ----------------- | --------------------------- |
| Services       | `#scope`          | the published scope         |
| Industries     | `#industries`     | six building types          |
| How we price   | `#proposal`       | the estimator               |
| Our people     | `#why-us`         | turnover / roster panel     |
| About          | `#process`        | how it goes                 |
| Blog           | `#faq`            | the procurement questions   |
| Contact        | `#contact`        | closing band                |
| city pill      | `#areas`          | towns (`#service-areas` does not exist) |
| CTA            | `#proposal`       |                             |

## Inner-page inventory (9 routes, all HTTP 200 with trailing slash, 2026-10-25)

| route          | bytes  | `<h1>` on that page                                                  |
| -------------- | -----: | -------------------------------------------------------------------- |
| `services/`    | 51,779 | "Nightly cleaning, and the things that are not nightly"              |
| `industries/`  | 52,079 | —                                                                    |
| `pricing/`     | 57,994 | "Published, because you are comparing three proposals"               |
| `our-people/`  | 47,603 | "Turnover is the product"                                            |
| `about/`       | 43,812 | "About Nightshift Commercial Cleaning"                               |
| `blog/`        | 43,667 | "Insights & Updates"                                                 |
| `contact/`     | 42,334 | "Contact Nightshift Commercial Cleaning"                             |
| `privacy/`     | 44,354 | —                                                                    |
| `terms/`       | 43,208 | —                                                                    |

Bare paths answer **308** with an empty body — quote the trailing-slash form in any evidence line.

## Class census

**336** distinct utility names across **459** `class="…"` attributes; **40** inline `<svg>` and **no** icon
font or sprite. The non-utility, hand-authored layer is exactly five selectors: `.btn`, `.btn-primary`,
`.btn-secondary` (unused here), `.section`, `.nav-active`, plus `shadow-soft`. Anything else an
implementer invents is not in the reference.

## Screenshot analysis (`nightshift-template.jpg`)

`https://colorlib.com/wp/wp-content/uploads/sites/2/nightshift-template.jpg` → **200, 106,416 B,
`image/avif`** (like the Marrow sibling, the `.jpg` name lies — convert with PIL before viewing), **2400 ×
1892**. It is a **marketing composition, not a browser capture**: one macOS-style window with rounded
corners floating on a light grey ground, shadowed, showing **hero only** — the licence bar at the top of
the window frame, the white header with the navy wordmark, seven nav labels, the phone pill, the sun
toggle and the amber CTA, then the navy hero with the amber eyebrow, the three-line white headline whose
last clause is amber, the lead paragraph, the four ticked promises, and the right-hand white estimator
card cut off at the window's bottom edge.

What the implementer must **not** copy from it: the grey ground, the window chrome/corner radius, the drop
shadow, and the composition's own framing. They are presentation around the artefact. The page is a
full-bleed white-and-navy document; only the licence bar, header and hero are visible in the shot, so the
screenshot is a *hero-only* reference — everything from `#scope` down comes from the DOM.

## Known reference defects — measure them, do not reproduce them

1. **Horizontal overflow by design-error:** `document.documentElement.scrollWidth` is **401 px** at both
   320 and 390 while `clientWidth` is 320/390. The culprit is the footer's single-column grid track
   (**385 px**), pinned by the newsletter column's min-content width — not the carousel (whose over-wide
   slides are clipped by `overflow-hidden`). The recreation must satisfy
   `scrollWidth === clientWidth` at every width, e.g. by allowing the newsletter row to wrap.
2. **`#service-areas` does not exist.** Both city pills link to it. Map them to `#areas`.
3. **Three dead `#` social chips** in the footer, and one **malformed `tel:` URI** (`tel:(555) 050-0500`).
4. **The newsletter form is dead markup** — no `action`, no handler. Either wire it or remove the submit's
   implied promise; do not ship a silent no-op.
5. **The scrollspy never activates** (`data-nav-link` values are route paths). If the recreation implements
   a scrollspy, point it at the mapped ids above.
6. **The address contradicts itself:** "1230 North Capitol Avenue, Indianapolis, **OH** 43215" (43215 is
   Columbus, OH while the whole page is Indianapolis, IN). Pick one city and be consistent.
7. **`#process` is a four-item `<ol>` in a three-column grid** (3 + 1). Measured, and consistent at every
   width. Keep it unless the design owner says otherwise; it is not a bug to "fix" silently.

## Requirements

### Requirement 1: Page chrome (licence bar, skip link, preloader, progress bar, back-to-top, cookie strip)

The app SHALL render the fixed/licence chrome in the reference's order and geometry: a 37 px `#162135`
licence bar above a sticky header, a skip link, a 2 px amber scroll-progress bar, a 48 px back-to-top disc
and a delayed cookie strip.

#### Scenario: Licence bar at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the licence bar is measured
- **THEN** it is **37 px** tall (`36 + 1 px` border), ground **`#162135`**, text **`#e6eaf2`** 12/16
- **AND** it reads "Bonded and insured **$2M general liability** · Every cleaner background checked ·
  Serving **Central Indiana**" with the last two items hidden below `sm`
- **AND** the right side shows an `amber-400` star, "4.7" and "90+ reviews on Google (sample)" at 70 %
  opacity
- **AND** it is **not** sticky — it scrolls away, and the header sticks at `top: 0` in its place

#### Scenario: Skip link and landmarks

- **GIVEN** the page is loaded
- **THEN** the first focusable element is "Skip to content" targeting `#main-content`, hidden until focused
- **AND** the document has exactly one `<h1>`, a `<main id="main-content">`, and `<header>`/`<footer>`
  landmarks

#### Scenario: Preloader is not a blocker

- **GIVEN** an environment where `window.load` never fires again (already-complete document) or jsdom
- **WHEN** the app mounts
- **THEN** the preloader is treated as finished (`loaded || document.readyState === 'complete'`) so content
  is never trapped behind it
- **AND** in a real browser it fades out over 300 ms and is removed from the DOM

#### Scenario: Progress bar and back-to-top thresholds

- **GIVEN** the page scrolled to 50 % of its scrollable height
- **THEN** `#scroll-progress` is **2 px** tall, `#de911d`, and about **50 %** of the viewport wide
- **AND** below 300 px of scroll the back-to-top disc has `opacity: 0` and `pointer-events: none`; above it,
  `opacity: 1`, `translateY(0)`, and clicking it scrolls to the top

### Requirement 2: Sticky header with seven labels, phone pill, city pill, dark toggle and mobile disclosure

The app SHALL render the header as a translucent sticky bar whose desktop nav appears at **1280 px**, not
1024, with the city pill held back to **1536 px**, and a hamburger panel below 1280.

#### Scenario: Desktop header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** tall (`h-16 lg:h-20` plus border), `position: sticky`, `top: 0`, ground
  `rgb(255 255 255 / 0.9)` with `backdrop-filter: blur(16px)`, bottom border 1 px `#e6eaf2`
- **AND** the logo renders **168 × 32** (`lg:h-9` → 36 tall) with the dark-on-light asset, and the light
  asset in dark mode
- **AND** seven labels at 14/20 **600** `#314262`, `gap: 28px`: Services, Industries, How we price, Our
  people, About, Blog, Contact
- **AND** the phone pill (full radius, 1 px `#cad3e4`, `px-3 py-1.5`, 14/600) and the amber CTA
  (`#f0b429`, label `#0d1522`, radius 8, `px-5 py-2.5`, 14/700) are visible
- **AND** the city pill is **not** visible at 1440 (it appears at ≥ 1536)

#### Scenario: The nav collapses at 1280, not 1024

- **GIVEN** widths 1024 and 1279
- **THEN** the desktop nav, the phone pill's CTA and the city pill are hidden and the hamburger is shown
- **AND** at 1280 the seven-label nav and the CTA appear without any label being clipped or overlapped
- **AND** no nav label ever renders underneath the phone pill at any width between 1024 and 1600

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport
- **WHEN** the hamburger is activated
- **THEN** the panel opens below the header (`display: block`, **492 px** tall) with seven full-width
  16/600 rows, the phone pill, the city pill and a full-width amber CTA
- **AND** `aria-expanded` flips to `true` and the glyph becomes ✕; activating again closes it

#### Scenario: Header shadow and dark toggle

- **GIVEN** the page scrolled past 50 px
- **THEN** the header gains `shadow-lg` and keeps its 81 px height
- **AND** the theme toggle flips `.dark` on `<html>`, persists the choice in `localStorage.theme`, and the
  choice is applied **before first paint** (no light flash on reload)

### Requirement 3: Hero copy column — the argument, in five twelfths

The app SHALL render the hero as a 12-column grid with copy in 5 columns and the estimator in 7, on the
`ink-900` ground, with an amber eyebrow, a three-line headline whose second sentence is amber, four ticked
promises, and one decorative blurred circle.

#### Scenario: Hero geometry at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the hero is measured
- **THEN** the band is **1,028 px** tall on **`#0d1522`**, top offset **118 px**, inner padding
  **96 px** vertical and **32 px** horizontal inside a 1,280 px container
- **AND** the grid is **1,216 px** wide with a **64 px** gap; the copy column is **469 px**, the estimator
  **683 px**
- **AND** exactly one `460 × 460` `border-radius: 50 %` `#f0b429 / 10 %` circle with `blur(48px)` sits at
  the left edge, clipped by the band, marked `aria-hidden`

#### Scenario: Headline and lead

- **GIVEN** the hero copy column
- **THEN** the eyebrow computes **14/20 700**, uppercase, **+0.35 px** tracking, `#f7c948`
- **AND** the `h1` computes **60 / 64.8 700**, tracking **−1.5 px**, white, and wraps to three lines at
  1440 ("Square footage / in. A number / out.")
- **AND** the phrase "A number out." is `#f7c948` (a span inside the `h1`, not a background trick)
- **AND** the lead is **18/28** at `rgb(255 255 255 / 0.7)`, capped to the column width
- **AND** the `h1` steps to 48 px at `sm` and 36 px at base, keeping a line-height ratio of about 1.08

#### Scenario: Four promises

- **GIVEN** the promise list
- **THEN** it is a `<ul>` with `margin-top: 32px` and `row-gap: 12px`
- **AND** each item is a 16 px `#f7c948` tick plus 16/24 `rgb(255 255 255 / 0.85)` text:
  "An indicative range before you speak to anyone", "Written proposal inside one working day", "Every
  cleaner background checked and badged", "One named account manager, not a call centre"

### Requirement 4: The estimator card — layout, controls and states

The app SHALL render a 683 × 836 white card in the hero's seven-column slot containing four questions, a
live range box, name/email fields and a submit, with no page reload.

#### Scenario: Card anatomy at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the card is **683 × 836**, white, radius **16**, 1 px `#cad3e4`, padding **32 px**, subtle
  shadow
- **AND** its heading is **20/28 700** `#162135` with the sub-line 14/20 `#465a80`
- **AND** the six-select and the numeric input sit in two columns with a **24 px** gap and the input shows
  its default `12000` in **JetBrains Mono**

#### Scenario: Field and pill styling

- **GIVEN** any field in the card
- **THEN** it is **46 px** tall, radius **8**, 1 px `#cad3e4`, white ground, `10 px 16 px` padding, 16/24
  `#162135`
- **AND** focus shows `border-color: #f0b429` plus a 2 px `#f0b429 / 30 %` ring
- **AND** frequency and extras render as full-radius pills at 14/20 **600** `#314262`, and a selected pill
  is `#162135` ground with white text (the radio/checkbox inputs are visually hidden but still focusable,
  with a visible focus ring on the pill)

#### Scenario: The range box

- **GIVEN** the range box
- **THEN** it is radius **12**, ground **`#f4f6fa`**, padding **20 px**, `margin-top: 32px`
- **AND** the label is 12/16 **700** uppercase with **+0.3 px** tracking in `#65799f`
- **AND** the value is **30/36 600 JetBrains Mono** in `#162135` and carries `aria-live="polite"`
- **AND** the caveat below it is 14/20 `#465a80`

#### Scenario: Submit and confirmation

- **GIVEN** the form is filled and submitted
- **THEN** no navigation occurs
- **AND** a `role="status"` paragraph appears reading "Thank you. A written proposal follows within one
  working day. This is a demo confirmation — connect the form to your CRM."

### Requirement 5: The estimator arithmetic

The app SHALL compute the indicative range exactly as the reference does, from a rate table, a frequency
factor, additive extras, a ±15 % band and rounding to the nearest $50 — and SHALL show an em dash whenever
a term is missing.

#### Scenario: Rates and factors

- **GIVEN** the six building types
- **THEN** their rates are Office **20**, Medical or dental **34**, School or childcare **26**, Industrial
  or warehouse **12**, Retail or showroom **22**, Gym or studio **30** (cents per cleanable sq ft per month
  at five nights)
- **AND** the frequency factors are Once a week **0.32**, Twice a week **0.52**, Three nights **0.70**,
  Five nights **1.00** — **sub-linear**, not 1/5 · 2/5 · 3/5 · 5/5
- **AND** the extras are Restroom consumables **$180**, Monthly floor care **$340**, Interior glass **$120**,
  Day porter 4 hours **$2,400** per month, additive after the multiplication

#### Scenario: Default reading

- **GIVEN** the untouched form (Office, 12,000 sq ft, Five nights, no extras)
- **THEN** the range reads exactly **"$2,050 to $2,750"**
- **AND** neither endpoint is $2,040 or $2,760 (the reference rounds to the nearest $50)

#### Scenario: Recomputation on every input

- **GIVEN** Medical or dental selected and 20,000 typed
- **THEN** the range reads **"$5,800 to $7,800"**
- **AND** after checking Monthly floor care it reads **"$6,050 to $8,200"**
- **AND** the value updates on `change` (pills, select) as well as on `input` (typing), with no submit

#### Scenario: Missing terms

- **GIVEN** the square-footage field is emptied (or set to 0)
- **THEN** the range reads **"—"** rather than "$0 to $0"
- **AND** re-entering a value restores the range immediately

### Requirement 6: `#scope` — the published scope table

The app SHALL render an eleven-row definition list inside a bordered wrapper with a header row, a
two-fifths task column, a mono frequency column and alternating tints.

#### Scenario: Table geometry at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **1,190 px** tall on white with **112 px** padding
- **AND** the wrapper is **1,216 × 690**, radius **16**, 1 px `#cad3e4`, `margin-top: 40px`, clipped
- **AND** the header row is **53 px** tall, ground `#f4f6fa`, `16 px 24 px`, 14/20 **600** `#314262`, with a
  bottom border
- **AND** each row is `16 px 24 px` and **75 px** tall at 1440, laid out row-wise from `sm` upward

#### Scenario: Row atomics

- **GIVEN** any scope row
- **THEN** the `<dt>` is **2/5** of the row (**466 px**) at 16/24 **700** `#162135`
- **AND** the `<dd>` is **JetBrains Mono** 14/20 `#465a80`
- **AND** every second row is tinted `#f4f6fa` at 60 % so the task and its frequency stay on one visual line
- **AND** the eleven tasks are exactly the sequence in §3 above, in that order
- **AND** the band closes with the "Sample scope for demonstration…" note at 14/20 `#65799f`

#### Scenario: The neutral eyebrow

- **GIVEN** the `#scope` band head
- **THEN** the eyebrow "The scope" is **`#465a80`**, not amber — this band is a document and is the only
  band whose eyebrow is neutral
- **AND** the `h2` is 36/40 **700**, tracking **−0.9 px**, `#162135`, and the lead is 18/28 `#465a80`

### Requirement 7: `#industries` — six rates in one hairline grid

The app SHALL render the six building types as one bordered, radius-16 wrapper whose 1 px gaps *are* the
rules, with the blurb growing so the six rate lines align.

#### Scenario: Grid construction at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the grid is measured
- **THEN** the wrapper is **1,216 × 443**, radius **16**, 1 px `#e6eaf2` border, ground `#e6eaf2`
- **AND** both gaps are **1 px**; three columns of **404 px** at `lg`, two at `sm`, one below
- **AND** each cell is **404 × 208**, white, `p-8`, with **no** border and **no** radius of its own

#### Scenario: Cell content and rate alignment

- **GIVEN** any industry cell
- **THEN** the `h3` is 18/28 **700** `#162135`, the blurb 16/24 `#465a80` and the rate 14/20 **700**
  `#cb6e17`
- **AND** the blurb is the flex-growing element so all six rates sit on a common baseline per row
- **AND** the six titles and rates are Office 20c, Medical and dental 34c, Schools and childcare 26c,
  Industrial and warehouse 12c, Retail and showroom 22c, Gyms and studios 30c
- **AND** the band closes with "Starting rates are sample data for demonstration…"

### Requirement 8: `#why-us` — the roster panel and four amber-ruled arguments

The app SHALL render a two-column band on `#f4f6fa` with the roster panel figure first (on `lg`) and a
four-entry definition list, each entry ruled by a 2 px amber left border.

#### Scenario: Band geometry at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **876 px** tall on **`#f4f6fa`** with **112 px** padding and a two-column grid with a
  **64 px** gap, vertically centred
- **AND** the figure is **576 px** wide; the image renders **576 × 432** (4:3) with radius **16** and
  `object-fit: cover`
- **AND** the figcaption is 14/20 `#65799f` and reads "Replace with a photograph of your own crew before
  launch."

#### Scenario: The panel is a drawn roster, not stock photography

- **GIVEN** the figure in the recreation
- **THEN** it shows a **5 × 5 grid of shift chips** with a MON–FRI header row in mono, amber `#f7c948`
  chips carrying the crew's initials and dark `#22304a` chips marking relief nights
- **AND** its caption reads "Yellow is your named crew. Grey is relief, and you are told in advance."
- **AND** no photograph of a person is substituted for it — the panel *is* the argument about turnover

#### Scenario: The four rules

- **GIVEN** the `#why-us` definition list
- **THEN** it holds exactly four entries with `row-gap: 24px`, each `border-left: 2px #de911d` and
  `padding-left: 20px`
- **AND** each `<dt>` is 16/24 **700** `#162135` and each `<dd>` 16/24 `#465a80`
- **AND** the titles are "We pay above the local average", "The same crew, named on your account",
  "Background checked and badged", "Supervised, and the log proves it", in that order

### Requirement 9: `#process` — four numbered steps in a three-column grid

The app SHALL render four steps as an `<ol>` that lays out **three across** and the fourth on a second row,
each opening with a tabular number and a hairline rule.

#### Scenario: Steps at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **788 px** tall on white with **112 px** padding and a `max-w-2xl` head
- **AND** the list is `sm:grid-cols-3` with a **32 px** row gap and a **24 px** column gap, so steps 1–3 fill
  row one and step 4 sits alone at the left of row two
- **AND** each number row is baseline-aligned with "01"–"04" at 14/20 **700** `tabular-nums` `#de911d` and
  a 1 px `#e6eaf2` rule filling the remainder
- **AND** each `h3` is 18/28 **700** `#162135` with the blurb at 16/24 `#465a80` and the tag at 14/20
  **600** `#cb6e17`

#### Scenario: The step copy

- **THEN** the four steps are "You price it here" (Under two minutes), "We walk the building" (30 to 60
  minutes), "You get one number and a scope" (Within 1 working day of the walk) and "We start, supervised"
  (Usually within 2 weeks), in that order

### Requirement 10: `#areas` — fourteen towns in seven twelfths

The app SHALL render "Where we work" as a 5/7 split with the town list as a plain, indexable `<ul>` in two
or three columns.

#### Scenario: Areas band at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **513 px** tall on white with **112 px** padding, split `5 / 7` with a **64 px** gap
- **AND** the left column holds the `h2` "Where we work" (36/40 700 −0.9) and a 18/28 `#465a80` lead, with
  **no eyebrow**
- **AND** the list is two columns at base and three at `sm`, `column-gap: 24px`, each item `10 px` top and
  bottom padding with a 1 px `#e6eaf2` bottom border, 16/24 `#22304a`
- **AND** the fourteen towns are exactly those in §7 above, in that order
- **AND** the closing note reads "Replace this list with your own towns…"

### Requirement 11: `#testimonials` — a three-card carousel that is static on desktop

The app SHALL render a centred head with a "References" pill and a carousel that shows **3 / 2 / 1** cards
per view, autoplays every 5 s, pauses on hover, and injects dots only when more than one position exists.

#### Scenario: Desktop carousel is static

- **GIVEN** a 1440 px viewport
- **WHEN** the carousel is measured
- **THEN** three slides of **405 px** sit on the 1,216 px track with **12 px** gutters each side
- **AND** each card is **381 × 336**, white, radius **16**, `p-8`, `box-shadow: 0 4px 16px -4px #0000001a`
- **AND** the arrows compute `display: none` and the dots container has **zero** children, because
  `maxIndex === 0` at three-per-view with three slides

#### Scenario: Mobile carousel moves

- **GIVEN** a 390 px viewport
- **THEN** one card of **334 px** is visible with two **36 px** white arrow discs
- **AND** **three** dots are injected: the active one **32 × 10** `#de911d`, the others **10 × 10** `#d1d5db`
- **AND** the track advances every 5 s and any arrow or dot click resets the timer; hovering pauses it

#### Scenario: Card anatomy and copy

- **GIVEN** any testimonial card
- **THEN** five **20 px** stars in `#f7c948` sit above an 18/28 **500** `gray-900` `<blockquote>` in curly quotes
- **AND** a **48 px** `#fff3c4` disc with the initial in `#de911d` sits beside the name (16/24 600
  `gray-900`) and the role (14/20 `gray-600`)
- **AND** the three samples are Dana Whitfield, Ray Osei and Mel Kaminski, in that order, with the band's
  own "Sample references for demonstration…" note above the carousel

### Requirement 12: `#faq` — six procurement answers as an accordion

The app SHALL render six questions in a divided list where one answer is open at a time, the icon rotates
45° into a close mark, and the question text is a button.

#### Scenario: Accordion at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **901 px** tall on white with **112 px** padding, head centred on `max-w-3xl`, list
  `max-w-3xl` with `margin-top: 64px`
- **AND** rows are divided by 1 px `#e5e7eb`, each `padding: 24px 0`, **81 px** tall while closed
- **AND** the question is an 18/24 **600** `gray-900` label inside a full-width `<button>`, with a **32 px**
  circular `#f3f4f6` disc holding a 20 px plus that rotates **45°** when open
- **AND** opening one answer closes any other, and the answer panel animates `max-height` and `opacity`
  over **300 ms** at 16/24 `gray-600`

#### Scenario: Answered, not hidden

- **THEN** all six questions are present in the DOM with their answers as text (an accordion hides, it does
  not delete), and the questions are exactly those listed in §9 above

### Requirement 13: `#contact` — the amber closing band

The app SHALL close the page with a `primary-700` band holding a white headline, an amber-tinted lead and
two large buttons.

#### Scenario: Contact band at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **440 px** tall on **`#cb6e17`** with **112 px** vertical padding
- **AND** the `h2` is 36/40 **700**, **−0.9 px**, white; the lead is 18/28 `#fff3c4` capped at `max-w-xl`
- **AND** the primary button is **211 × 56**, white ground, `#cb6e17` label 16/24 **700**, `px-8 py-4`,
  radius 8, linking to `#proposal`
- **AND** the secondary is **257 × 60**, transparent with a **2 px** `white / 40` border, white label and a
  phone glyph, linking `tel:`
- **AND** below `sm` both buttons are full width and stacked

### Requirement 14: Footer — 12 columns, a dead-newsletter slot and the Component Dock line

The app SHALL render a `#111827` footer in a 12-column grid (4 / 5 / 3) with a legal bar, and SHALL link
`https://www.componentdock.com/`.

#### Scenario: Footer at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the footer is **567 px** tall, `padding-top: 96px`, text `#d1d5db`, columns **384 / 488 / 280**
- **AND** the brand column holds the logo at **210 × 40**, a `max-w-xs` blurb, three social chips, the
  address, the phone and the email at 14/20 `gray-400`
- **AND** the link block is three columns of headings (Services 4, Company 4, Support 5) with 14/600
  uppercase `+0.7 px` white headings and `gray-400` links
- **AND** the third column is "Stay Updated" with a 46 px email field (`#1f2937`, border `#374151`) and an
  amber Subscribe button
- **AND** the bottom bar is `margin-top: 64px`, `border-top: 1px #1f2937`, `padding: 32px 0`, with the
  copyright at 14/20 `gray-500` and two legal links

#### Scenario: Attribution and no dead links

- **GIVEN** the rendered footer
- **THEN** it contains a link to `https://www.componentdock.com/` ("Component Dock")
- **AND** no anchor has `href="#"`; the social chips either point at real destinations with accessible names
  or are removed
- **AND** every `tel:` value is a valid E.164-style string with no spaces or parentheses, and the `mailto:`
  is well formed
- **AND** no ColorLib string appears anywhere in `apps/nightwatch/**`

### Requirement 15: Responsive, dark-mode, reduced-motion and anchor fidelity

The app SHALL hold its layout at every common width without horizontal scroll, honour
`prefers-reduced-motion`, implement the reference's dark palette, and present the reference's nine routes
as in-page anchors that clear the sticky header.

#### Scenario: No horizontal scroll

- **GIVEN** widths 320, 390, 768, 1024, 1280, 1440 and 1600
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every one — including 390, where the
  **reference itself overflows to 401 px** (do not copy that defect)
- **AND** the estimator card stacks under the hero copy below `lg`, the industry grid is 1 / 2 / 3 columns
  at 390 / 768 / 1440, and the footer's newsletter row wraps rather than forcing a 385 px track

#### Scenario: Dark mode

- **GIVEN** `.dark` on `<html>`
- **THEN** the body is `#030712` with `#f3f4f6` text, tinted bands become `#111827`, cards become `#030712`
  with `#374151` borders, inputs and the range box become `#111827`
- **AND** the hero (`#0d1522`), the `#contact` band (`#cb6e17`) and the footer (`#111827`) are unchanged
- **AND** the header is `gray-950 / 90 %`, nav labels `#9ca3af`, and the state survives a reload with no
  flash of light theme

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads
- **THEN** no `[data-animate]` element is left at `opacity: 0` or translated
- **AND** the carousel does not autoplay, smooth scrolling is disabled, and the preloader does not animate
  into view

#### Scenario: Anchors resolve

- **GIVEN** the single-page recreation
- **THEN** the seven nav labels, both city pills and the CTAs resolve to existing ids among
  `#proposal`, `#scope`, `#industries`, `#why-us`, `#process`, `#areas`, `#testimonials`, `#faq`, `#contact`
- **AND** every `id` target sits below the 81 px sticky header (`scroll-margin-top ≥ 101px`)
- **AND** the estimator's submit and both closing-band buttons behave without a page reload

## Verification checklist

- [ ] `apps/nightwatch` exists, `@free-react-templates/nightwatch` in `package.json`, `public/CNAME` =
      `nightwatch.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included)
- [ ] bands in this order: licence bar → header → hero + `#proposal` → `#scope` → `#industries` →
      `#why-us` → `#process` → `#areas` → `#testimonials` → `#faq` → `#contact` → footer
- [ ] licence bar **37 px** `#162135`, 12 px text, three facts + `4.7` rating, not sticky
- [ ] header **81 px** sticky, `white/90` + `blur(16px)`, 1 px `#e6eaf2`; seven labels 14/600 `#314262`;
      phone pill ≥ `md`; CTA and nav ≥ **1280**; city pill ≥ **1536**; hamburger below 1280; `shadow-lg`
      past 50 px
- [ ] hero `#0d1522`, **1,028 px**, 12-col 5/7 with a 64 px gap; eyebrow 14/700 `#f7c948`; `h1` 60/64.8
      700 −1.5 px with "A number out." in `#f7c948`; lead 18/28 `white/70`; four `#f7c948` ticks; one
      460 px `primary-500/10` `blur-3xl` circle, `aria-hidden`
- [ ] estimator card **683 × 836** radius 16 `p-8`; select + numeric field; four frequency pills
      (0.32 / 0.52 / 0.70 / 1.00, five nights checked); four extra pills (180 / 340 / 120 / 2,400); range
      box radius 12 `#f4f6fa` with 30/36 600 mono value and `aria-live="polite"`
- [ ] estimator arithmetic: defaults → **"$2,050 to $2,750"**; Medical 20,000 → **"$5,800 to $7,800"**;
      + floor care → **"$6,050 to $8,200"**; empty size → **"—"**; updates on both `input` and `change`
- [ ] `#scope`: neutral `#465a80` eyebrow, **eleven** rows, 2/5 `<dt>` (466 px), mono `<dd>`, zebra 60 %,
      radius-16 wrapper with a `#f4f6fa` header row, sample-scope note
- [ ] `#industries`: **one** wrapper `bg #e6eaf2`, `gap-px`, radius 16, six white cells `p-8` (404 × 208),
      three columns at `lg`, rates 14/700 `#cb6e17` aligned via `flex-1`
- [ ] `#why-us`: `#f4f6fa`, 576 × 432 roster panel (radius 16) with amber/dark shift chips *drawn, not
      photographed*, four `border-l-2 #de911d pl-5` entries
- [ ] `#process`: `<ol>` of **4** in `sm:grid-cols-3` (3 + 1 measured), numbers `tabular-nums` `#de911d`
      + 1 px rule, tags 14/600 `#cb6e17`
- [ ] `#areas`: 5/7 split, **fourteen** towns in 2 / 3 columns with `border-b #e6eaf2`, plain text
- [ ] `#testimonials`: `#f9fafb`, "References" pill `#fff3c4`/`#cb6e17`, carousel 3/2/1, **no arrows and
      no dots at 1440**, 36 px arrows + three dots at 390, 5 s autoplay with hover pause, cards 381 × 336
      `shadow-soft`, stars `#f7c948`, 48 px initial discs
- [ ] `#faq`: "Questions" pill, six rows divided by 1 px `#e5e7eb`, 81 px closed, 32 px disc whose plus
      rotates 45°, one-open-at-a-time, 300 ms `max-height`/`opacity`
- [ ] `#contact`: `#cb6e17`, **440 px**, white `h2` 36/40 −0.9, `#fff3c4` lead, 56 px white button +
      60 px 2 px `white/40` outline button, stacked full width below `sm`
- [ ] footer `#111827`, **567 px**, 12-col 4/5/3 (384 / 488 / 280), "Stay Updated" column, bottom bar
      `mt-16 border-t #1f2937 py-8`
- [ ] fixed chrome: preloader (spinner, self-removing, non-blocking), 2 px `#de911d` progress bar,
      skip link, 48 px back-to-top past 300 px, cookie strip after 1,500 ms with `accepted` / `essential`
      in `localStorage`
- [ ] dark mode: `#030712` body, `#111827` tinted bands, hero/contact/footer unchanged, pre-paint
      resolution, persisted toggle, no white flash
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600 (the reference fails at
      320 and 390 — the recreation must not)
- [ ] zero bare `#` anchors; `#service-areas` replaced by `#areas`; every `tel:` well formed; every image
      has `alt`; the roster panel is an inline SVG/CSS composition, not a photo of a person
- [ ] 100% coverage on the new app, `scripts/verify-app.sh nightwatch` green
