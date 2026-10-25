# Template: Pentimento (Artist portfolio — a warm-grey studio page that sells the hour before the light goes)

## Purpose

A **painter's studio page in Copenhagen whose argument is the light, not the artist**, and whose thesis is
stated in the pull quote of `#statement`:

> "A room is at its most honest in the twenty minutes before someone turns a lamp on."

Everything above and below that line is built to make it credible. The hero is not "welcome to my portfolio":
it is *"Painting the hour **before the light goes**"* — the second line is the design's one piece of theatre,
a **typewriter** that cycles *"before the light goes"* → *"when the room turns grey"* → *"nobody photographs"*
every three seconds, and the phrase it is cycling through is the actual subject of the paintings. The page then
answers the four questions a collector actually has, in order: **what is for sale** (`#works`, six paintings,
three of them *Available* with a DKK price), **what the work is** (`#statement`, four paragraphs and one pull
quote), **where it has been** (`#exhibitions`, seven dated rows on the darkest band on the page), and **how to
buy it** (`#acquire`, three routes with the awkward rules printed underneath each one).

**Refusal is content**: *"I take one or two commissions a year… I will say no to most requests and it is
nothing personal."* · *"No. It is a reasonable question and the answer is simply that the paintings depend on
surface and thickness, and a print of one is a photograph of a texture rather than the thing itself."* ·
*"Studio prices are not [negotiable]. They are set in consultation with the gallery so that buying direct is
never cheaper than buying through them, which would be an unpleasant thing to do to people who have supported
the work for years."* A recreation that adds a discount, a print shop, a newsletter pop-up with an offer, or a
five-star testimonial carousel has deleted the template.

The register is **first-person, dry, specific and unsentimental**: sizes in centimetres, prices in DKK,
materials named (*oil on linen*, *oil on board*), a shipping cost range (*"DKK 3,000 to 9,000"*), a studio with
*"no heating to speak of in January"*. No exclamation marks, no "Welcome", no adjectives about passion.

Composition: **a warm off-white page (`#faf9f7` → `#ffffff` gradient hero, white body), one near-black band
(`#1a1815`), one stone band (`#faf9f7`), one white band, and a single saturated gradient closing band**
(`#655e55` → `#2e2b26`, 135°). Measured at 1440 × 900:

| #  | band                                             | id / hook         | ground                          |   top | height |
| -- | ------------------------------------------------ | ----------------- | ------------------------------- | ----: | -----: |
| 0  | `<header>` sticky, white 80 % + blur             | `[data-header]`   | `#fff/80` over the hero         |     0 |     81 |
| 1  | hero — badge, h1 + typewriter, 3 CTAs, 2:1 image | *(1st `<section>`)* | `primary-50` → `white` gradient |    81 |  1,240 |
| 2  | six paintings (works)                            | `#works`          | transparent on white            | 1,321 |  1,732 |
| 3  | statement — sticky figure + 4 paragraphs         | `#statement`      | transparent on white            | 3,053 |  1,103 |
| 4  | exhibition history, seven dated rows             | `#exhibitions`    | `primary-900` `#1a1815`         | 4,156 |  1,395 |
| 5  | three ways to buy                                | `#acquire`        | `primary-50` `#faf9f7`          | 5,551 |    942 |
| 6  | five questions                                   | `#faq`            | `#ffffff`                       | 6,493 |    820 |
| 7  | "Three works are currently available"            | `#contact`        | 135° `#655e55` → `#2e2b26`      | 7,313 |    500 |
| 8  | footer, four zones                               | `<footer>`        | `gray-900` `#111827`            | 7,813 |    543 |

**Document height 8,356 px** at 1440 × 900 and at 1280; **8,224 px** at 1024, **9,636 px** at 768, **9,485 px**
at 640, **12,450 px** at 390 and **12,431 px** at 320. The header is `sticky` and **81 px** at ≥1024 (`h-20` +
1 px border) but **65 px** below `lg` (`h-16` + border), so the band tops above are the header height plus every
band before it — the nine bands sum exactly to the document height at each width.

The palette is **one warm-grey `primary` ramp (a stone/taupe scale, not a hue), a three-step rosewood `accent`,
and stock Tailwind greys for the footer only**. The jobs are load-bearing: `primary-600` `#655e55` is the
**only saturated fill on the light page** — every primary button, the header CTA, the back-to-top disc, the
scroll-progress bar, the footer Subscribe button and the start of the closing gradient; `primary-900`
`#1a1815` is the **exhibitions ground**; `primary-50` `#faf9f7` the **hero start and the acquire ground**;
`primary-700` `#4a453e` **every body paragraph in `#statement`**; `primary-500` `#847c71` **every card's
dimensions line**; `primary-300` `#cdc7bc` and `primary-400` `#a9a196` the **muted half of the exhibition band**.
`accent-600` `#a82f47` is *only* ever a small mark: the **Solo tag ground**, the **"Available" dot**, the
**numerals 01/02/03**, and the **2 px rule beside the pull quote**. `accent-700` `#8a253b` is every light-band
eyebrow; `accent-400` `#df7484` is its dark-band twin (and the rose triangle inside the logo).

Two traps in the palette. **The grey ramp is warm, not neutral** — `primary-100` is `#f2f0ec` (a paper tone),
so replacing it with Tailwind's `stone-100` or `gray-100` shifts every eyebrow, tag and ground by a visible
amount. **The accent ramp has only three steps** (`400`, `600`, `700`); the compiled sheet contains no
`accent-50/100/200/300/500/800/900` at all, so *do not invent the missing steps* — if a design calls for
`accent-500` the reference would have failed to compile it, and the honest move is to reuse `accent-600`.

The type is **Lora for every display heading and every italic line, Inter for every interface line**, and the
switch is **deliberate and mid-document**: the `h1` is **Inter 700**, `#works` / `#statement` / `#exhibitions` /
`#acquire` `h2` are **Lora 500**, and then `#faq` and `#contact` `h2` go back to **Inter 700**. So the page
opens sans, turns serif for its three content bands, and returns to sans for the questions and the close — the
mirror image of the usual arrangement, and the reason the two closing bands read as *admin* rather than
*editorial*. Both faces arrive from Cloudflare's font service (`/cf-fonts/v/lora/5.2.8/…`,
`/cf-fonts/v/inter/5.2.8/…`) as **variable** `wght` woff2 in **56 `@font-face` rules inside one inline
`<style>` block** — **no `<link>`, no stylesheet rule**. Lora ships **400/500/600/700 upright only, no italic
file**, yet the page sets `italic` on six-item captions, the pull quote and every exhibition title (see
§Known reference defects).

Recreation of the ColorLib "Ostend" design (https://colorlib.com/wp/template/ostend/, live preview
https://preview.colorlib.com/theme/ostend/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `ostend`
- **ColorLib page:** https://colorlib.com/wp/template/ostend/ — **HTTP 200, 111,128 B**, `<title>`
  **"Ostend - Artist Portfolio Website Template 2026 - Colorlib"**. Its listing screenshot is
  `ostend-template.jpg` (**211,538 B**, a real baseline JPEG, **2400 × 1892** — see §Screenshot analysis).
- **Live preview:** https://preview.colorlib.com/theme/ostend/ — **HTTP 200, 69,797 B**,
  `text/html; charset=utf-8`, sha256 `9533453afab59ca2…`, read 2026-10-25 with `curl -4`. `<title>` is
  **"Home | Clara Ostend"**. A 2026 **Astro** build: one hashed stylesheet `_astro/Base.Ca0ix07Y.css`
  (**63,042 B**, `/*! tailwindcss v4.3.3 */`, sha256 `b4bb14e8070ee3f5…`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256
  `e26cc055dec23e63…` — **byte-identical to the house kit in the `conduit`, `nightwatch`, `drainwise` and
  `patina` preps**), and the router `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js`
  (**16,357 B**, the same file as every sibling in this 2026 set).
- **Page-specific logic is two inline `<script>` bodies** (**442 B** theme init from `localStorage` /
  `prefers-color-scheme` + `astro:after-swap`, **358 B** preloader teardown) plus one `application/ld+json`
  block (**178 B**, `@type: Organization`, `name: "Clara Ostend"`). Everything else — typewriter, parallax,
  video modal, FAQ accordion, dark toggle, mobile menu, reveal-on-scroll, cookie strip, scroll progress,
  back-to-top, smooth anchor scrolling — is the shared kit, driven by `data-` hooks the markup does provide.
- **No archive, no alternate family path:** `downloads/free/ostend.zip` → **404**,
  `etc/cs/ostend/index.html` → **404**, `theme/bootstrap/ostend/` and `theme/bb/ostend/` → **404**. There is no
  archived twin to hash-compare, so every token below is read from the live sheet and from
  `getComputedStyle`.
- **Single-page?** No. **Six inner routes are live** (`about`, `blog`, `contact`, `elements`, `privacy`,
  `terms`), all HTTP 200 **only with a trailing slash** — the bare path answers **308** with an empty body.
  See §Inner-page inventory.
- **Fonts:** no `<link>` to Google Fonts and **no `@font-face` in the stylesheet**; the only faces are 56
  rules in the inline `<style>` block naming `'Lora'` (400/500/600/700, normal only) and `'Inter'`
  (300/400/500/600), pointing at `/cf-fonts/v/{lora,inter}/5.2.8/{latin,latin-ext,vietnamese,symbols,math,…}/wght/normal.woff2`
  — **variable weight, per-subset**. The recreation loads both from Google Fonts explicitly.
- **Recreation name:** `pentimento` — one lowercase word, the painting term for the earlier image that shows
  through a later one (the page's own process: *"in thin layers, with a great deal of scraping back"*), and
  *not* the source name, with no collision anywhere: `git grep -il pentimento origin/main` → **no matches**,
  no `apps/pentimento`, no `openspec/specs/template-pentimento`, no `docs/templates/pentimento`, no bold name
  in `TEMPLATES.md`, and `colorlib.com/wp/template/pentimento/`, `preview.colorlib.com/theme/pentimento/`,
  `preview.colorlib.com/theme/bootstrap/pentimento/` all → **404**. The recreation lives at `apps/pentimento`,
  package `@free-react-templates/pentimento`, `pentimento.free.componentdock.com`.
  (Three other candidates were checked the same way: `nocturne` — clean, but reads as a music/audio product
  long before it reads as a painting; `grisaille` — clean and the palette's own technique, but it is the grey
  *underlayer* while this page argues about light; `imprimatura` — clean, and a real term, but five syllables
  that no one spells twice. All three are documented alternatives, not decisions.)
  **No ColorLib string may appear in the app** — provenance lives in this spec, the `TEMPLATES.md` row and the
  PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, `[~]` count **0**), so this design comes from
`docs/catalog-coverage.md` — the standalone designs on colorlib.com's listing that the checklist never recorded.
This is the row **`ostend`** (`preview 200, 69797 B`), the design immediately after `onyx` in that table's
order, and it is **not** one of the four names that already own an app or a prep for a different design
(`cairn`, `groundwork`, `kinetic`, `lantern`, `threadline`, `zephyr`). When the app ships, append a row under
the best-fit category — **`## Portfolio`** — **in source-name alphabetical order** (between `ostend`'s
neighbours; re-read the section rather than trusting this line, a concurrent prep may have landed first) and
bump that heading's count.

## Reference readings (2026-10-25, `curl -4`)

| what                                   | value                                                                                                |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| preview HTML                           | 200, **69,797 B**, `text/html; charset=utf-8`, sha256 `9533453afab59ca2…`                             |
| stylesheet `_astro/Base.Ca0ix07Y.css`  | 200, **63,042 B**, `/*! tailwindcss v4.3.3 */`, sha256 `b4bb14e8070ee3f5…`                            |
| behaviour kit `…_lang.BLoalVWc.js`     | 200, **16,233 B**, sha256 `e26cc055dec23e63…` (identical to the `conduit`/`nightwatch`/`patina` kit)   |
| router `…CYDbzu1r.js`                  | 200, **16,357 B**, sha256 `69eb3ac5c16a8d9a…` (the same house router as every sibling)                |
| inline `<script>` bodies               | **2** (theme init 442 B · preloader 358 B) + one JSON-LD block, 178 B                                  |
| inline `<style>`                       | **1**, **22,648 B**, exactly **56 `@font-face` rules** and nothing else                               |
| logo                                   | `assets/img/logo.svg` + `logo-light.svg`, **479 B** each, `viewBox="0 0 200 40"`: a 24 × 24 canvas rectangle with a **rose `#df7484` triangle** and a dot inside, then the words *"Clara Ostend"* as **live `<text>`** in `Lora` 18 px; header renders it at **200 × 40** (`h-8 … lg:h-10`, `w-auto`) |
| favicon                                | `favicon.svg`, 200, **377 B**                                                                          |
| social card                            | `og:image` = `/og-image.jpg` → **404** (see §Known reference defects)                                 |
| archive / alternate demo               | `downloads/free/ostend.zip` **404** · `etc/cs/ostend/index.html` **404** · `theme/bootstrap/ostend/` **404** · `theme/bb/ostend/` **404** |
| `<meta name="description">`            | *"Painter working in oil on linen. Works, exhibition history, studio notes and acquisition enquiries."* — identical to `og:description`; `og:title` is the `<title>` |
| `<html lang>`                          | `en`, **no `class="dark"`** — the theme is decided at runtime by the 442 B inline script              |

The JSON-LD is `@type: "Organization"` with `name: "Clara Ostend"`, `description` = the meta description and
`url: "/"`. There is no `telephone` and no `address` in it, so it does not contradict the footer's *two*
different phone numbers (see §Known reference defects).

## Design tokens (reconstructed from `Base.Ca0ix07Y.css`, 63,042 B, and `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal values** in the
> compiled utilities. `grep -o -- '--color-primary-[0-9]*'` on this sheet returns **0 hits**, so neither ramp
> exists as a custom property — the tables below were rebuilt by parsing every `*-primary-<n>` /
> `*-accent-<n>` utility rule and cross-checked against `getComputedStyle`. Declare them in the app's own
> `@theme`.

### `primary` — warm-grey / stone ramp (all structure, all fills)

| step | hex       | used for                                                                                                              |
| ---- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| 50   | `#faf9f7` | **hero gradient start**, **`#acquire` ground**, hero badge ground, `hover:bg-gray-50`'s near neighbour               |
| 100  | `#f2f0ec` | image well behind every painting (`bg-primary-100`), `#faq` pill ground, hero blob `primary-100/40`                    |
| 200  | `#e4e0d9` | hero badge border, the hairline above each acquire card's fine print (`border-primary-200`), hero blob `primary-200/50` |
| 300  | `#cdc7bc` | "Sold" and "Private collection" dots (`bg-primary-300`), exhibitions venue text (`text-primary-300`)                    |
| 400  | `#a9a196` | exhibitions year column, the **end of the h1 gradient** (`text-gradient`), "Reserved"/muted dot, card dimensions        |
| 500  | `#847c71` | card category line (`text-primary-500`), dimensions, "Reserved" label, footer "Represented by" eyebrow                 |
| 600  | `#655e55` | **every primary button** (header CTA, hero CTA, cookie Accept, footer Subscribe, back-to-top), `#works` lead, `text-gradient` start, `#contact` gradient start |
| 700  | `#4a453e` | **every body paragraph in `#statement`**, card price (`text-primary-700`), hero badge text, `Exhibitions` tag ground, `border-primary-700` row rules |
| 800  | `#2e2b26` | pull-quote text (`text-primary-800`), **`#contact` gradient end**, `dark:bg-primary-800` image wells                |
| 900  | `#1a1815` | **`#exhibitions` ground**, the square outline CTA border in `#acquire`, `dark:bg-primary-900/40` on `#acquire`        |

### `accent` — rosewood, **three steps only**

| step | hex       | used for                                                                              |
| ---- | --------- | ------------------------------------------------------------------------------------- |
| 400  | `#df7484` | eyebrow + tag text **on the dark band** (`dark:text-accent-400`, `#exhibitions` eyebrow, "Forthcoming"), **logo triangle** |
| 600  | `#a82f47` | "Solo" tag ground, the **"Available" dot**, the numerals **01/02/03**, the **2 px rule** beside the pull quote |
| 700  | `#8a253b` | **every light-band eyebrow** (Selected works, Statement, Acquiring work), "Available" label text, `accent-600`'s hover-dark |

The sheet contains **no other accent step**. Tailwind 4 only compiles the utilities it finds, so the absence is
real: `accent-500` does not exist anywhere on this page.

### Stock Tailwind greys (the footer, the FAQ accordion, the cookie strip, the dark ground)

`gray-100 #f3f4f6` (FAQ plus-disc) · `gray-200 #e5e7eb` (header border, FAQ dividers, hero-image ring,
`divide-y`) · `gray-300 #d1d5db` (hero secondary CTA border, cookie Decline border) · `gray-400 #9ca3af`
(**footer body copy**, social icons, `placeholder-gray-500`'s neighbour in the mobile CTA) ·
`gray-500 #6b7280` (footer bottom bar) · `gray-600 #4b5563` (nav labels, hero lead, FAQ answers, cookie copy) ·
`gray-700 #374151` (hero secondary CTA text, footer input border) · `gray-800 #1f2937` (**footer social chips
and input ground**) · `gray-900 #111827` (**footer ground**, `h1`/`h2` text) · `gray-950 #030712`
(**dark `body` / `#faq` ground**, `dark:bg-gray-950/80` header).

### Gradients and overlays — three gradients, one dot grid, four blurred blobs

1. **Hero** — `bg-gradient-to-b from-primary-50 to-white`, i.e. `linear-gradient(in oklab, #faf9f7 0%,
   #ffffff 100%)`; dark twin `dark:from-gray-900 dark:to-gray-950` → `#111827 → #030712`.
2. **The h1's second line** — `.text-gradient` (a hand-written class, not a utility):
   `background-image: linear-gradient(to right in oklab, #655e55 0%, #a9a196 100%); background-clip: text;
   color: transparent`. It has **no dark variant**, so in dark mode the line stays a taupe→stone gradient
   against `#030712` — measured, and deliberately kept (it is the only element that does not invert).
3. **`#contact`** — `bg-gradient-to-br from-primary-600 to-primary-800` =
   `linear-gradient(to right bottom in oklab, #655e55 0%, #2e2b26 100%)`; **identical in dark mode**.
4. **Dot grid inside `#contact`** — an inline style on a `div.absolute.inset-0.opacity-10`:
   `background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px`.
   At 10 % opacity on the gradient it reads as texture, not as a grid; a `bg-[linear-gradient(...)]` substitute
   with a different spacing is visible immediately.
5. **Blobs** — hero: `500 × 500` `primary-200/50` at `-top-40 left-1/2 -translate-x-1/2` and `400 × 400`
   `primary-100/40` at `right-0 top-0`, both `blur-3xl`, animated `hero-float` **8 s** / **10 s reverse**;
   `#contact`: two `256 × 256` `bg-white/10` `blur-3xl` discs at `-right-20 -top-20` and `-bottom-20 -left-20`.
   All of them are inside `overflow-hidden` parents, so none of them widens the document.

### Typography (measured)

| role                              | size / line-height / weight                   | tracking                        | colour                                   |
| --------------------------------- | --------------------------------------------- | ------------------------------- | ---------------------------------------- |
| `h1` (hero)                       | **60 / 60 / 700 Inter** (`lg:text-6xl`), 48 / 48 at 768, **36 / 40 at 390** | **−1.5 px** (`tracking-tight`, −0.025em) | `gray-900` `#111827`; 2nd line `.text-gradient` |
| `h2` serif (`#works`, `#statement`, `#exhibitions`, `#acquire`) | **36 / 40 / 500 Lora** (`text-4xl` at ≥640; `text-3xl` 30/36 below) | **−0.9 px** | `#111827`, or `primary-100` `#f2f0ec` on `#exhibitions` |
| `h2` sans (`#faq`)                | **36 / 40 / 700 Inter**                       | −0.9 px                         | `#111827` / `#fff`                       |
| `h2` sans (`#contact`)            | **48 / 48 / 700 Inter** (`sm:text-4xl`, `lg:text-5xl`) | **−1.2 px**             | `#ffffff`                                |
| hero badge                        | **14 / 20 / 500**                             | `normal`                        | `primary-700` `#4a453e`                  |
| hero lead                         | **20 / 28 / 400** (`text-lg sm:text-xl`)      | `normal`                        | `gray-600` `#4b5563`, `max-w-2xl` (**672 px**) |
| eyebrow (light bands)             | **12 / 16 / 500 uppercase**                   | **+2.4 px** (`.2em`)            | `accent-700` `#8a253b`                   |
| eyebrow (`#exhibitions`)          | 12 / 16 / 500 uppercase                       | +2.4 px                         | `accent-400` `#df7484`                   |
| card category                     | **11 / 16.5 / 400 uppercase**                 | **+1.98 px** (`.18em`)          | `primary-500` `#847c71`                  |
| card title                        | **18 / 28 / 400 Lora *italic*** + a non-italic `, 2032` | `normal`              | `#111827` + `primary-500`                |
| card medium / dimensions          | **14 / 20 / 400**                             | `normal`                        | `primary-600` · `primary-500`            |
| card status / price               | 14 / 20 / 500 · **14 / 20 / 400 `tabular-nums`** | `normal`                     | `accent-700` · `primary-700`             |
| statement paragraph               | **16 / 29.6 / 400** (`leading-[1.85]`)        | `normal`                        | `primary-700` `#4a453e`                  |
| pull quote                        | **20 / 32.5 / 400 Lora *italic***             | `normal`                        | `primary-800` `#2e2b26`, `border-l-2 accent-600`, `pl-6` |
| exhibition year                   | **18 / 28 / 400 Lora `tabular-nums`**         | `normal`                        | `primary-400` `#a9a196`                  |
| exhibition title                  | **18 / 28 / 400 Lora *italic***               | `normal`                        | `primary-100` `#f2f0ec`                  |
| exhibition venue                  | 14 / 20 / 400                                 | `normal`                        | `primary-300` `#cdc7bc`                  |
| exhibition tag                    | **10 / 15 / 600 uppercase**                   | **+0.5 px** (`tracking-wider`)  | white on `accent-600`, or `primary-200` on `primary-700` |
| acquire numeral                   | **30 / 36 / 400 Lora**                        | `normal`                        | `accent-600` `#a82f47`                   |
| acquire card title                | **20 / 28 / 400 Lora**                        | `normal`                        | `#111827`                                |
| FAQ question                      | **18 / 28 / 600 Inter**                       | `normal`                        | `#111827` / `#fff`                       |
| footer column heading             | **14 / 20 / 600 uppercase**                   | **+0.7 px** (`tracking-wider`)  | `#ffffff`                                |
| footer body · bottom bar          | 16 / 24 · 14 / 20                             | `normal`                        | `gray-400` `#9ca3af` · `gray-500` `#6b7280` |
| nav label · header CTA            | 14 / 20 / 500                                 | `normal`                        | `gray-600` → `gray-900`; CTA white on `primary-600` |

`font-family: Inter, system-ui, sans-serif` sits on `html` and `body`; `body { background:#ffffff;
color:#111827; -webkit-font-smoothing: antialiased }`, and **`.dark body { background:#030712; color:#f3f4f6 }`**
(measured). `.font-serif` = `Lora, Georgia, serif`. Two facts the implementer must not "fix":

- **`h1` is Inter at weight 700, but the sheet declares Inter only up to 600.** The five Inter `@font-face`
  rules are 300/400/500/600; `font-bold` therefore asks for a weight that does not exist and Chrome renders a
  **synthesised bold**. Load real Inter 700 (or the variable axis) and record the delta — it is genuinely
  heavier than the reference's synthesised version, so compare at 100 % zoom rather than "correcting" it back.
- **Every serif italic on the page is synthetic.** Lora's 56 rules are all `font-style: normal`; the six card
  titles, the pull quote and all seven exhibition titles set `italic` anyway, so the reference renders a
  **oblique**. Ship true Lora italic (Google Fonts, verified **HTTP 200** for
  `css2?family=Lora:ital,wght@0,400..700;1,400..700`) — the true italic is what the design wanted, and the
  synthetic slant is the defect.

### Radii — four values, chosen per component, plus one deliberate square

- **0** — the **`#acquire` outline CTA** (`border border-primary-900 px-8 py-3.5`, 228 × 54). It is the only
  square interactive element on the page and it sits at the end of the section that discusses money.
- **4 px** (`rounded-sm`) — the exhibition tags (43 × 19), and nothing else.
- **8 px** (`rounded-lg`) — header CTA (90 × 40), hero CTA 1 (235 × 48), hero CTA 2 (195 × 50), cookie buttons,
  the two `#contact` CTAs (254 × 56 and 288 × 60), footer input (46 tall) and Subscribe button (109 × 46),
  footer social chips (40 × 40), mobile-CTA buttons.
- **16 px** (`rounded-2xl`) — the hero image frame (1,024 × 512), the page's single largest radius.
- **full** — hero badge (279 × 34), the `#faq` pill (28 tall), the "Watch Demo" disc (48 × 48), the FAQ plus
  disc (32 × 32), the back-to-top disc (48 × 48), the status dots (6 × 6), the "ping" dot (8 × 8).

### Shadows, spacing, container

- `shadow-lg` — header **past 50 px of scroll** (`[data-header]` handler adds the class), hero CTA 1, the
  cookie strip, the back-to-top disc, the white `#contact` CTA.
- `shadow-2xl` — the **hero image frame only**; `ring-1 ring-gray-200` rides with it (16 px radius + 1 px ring
  + a 25 px shadow is the page's one "gallery" treatment).
- `shadow-primary-600/25` — hero CTA 1 and the back-to-top disc, with `hover:shadow-primary-600/30` +
  `hover:shadow-xl` on both. `#contact`'s white CTA swaps to `hover:shadow-xl` with no tint.
- Section rhythm: `py-20` → **80 px**, `sm:py-28` → **112 px** on `#works`, `#statement`, `#exhibitions`,
  `#acquire`; `#faq` and `#contact` use `py-20 lg:py-28`. The hero uses `py-20 lg:py-32` (**80 / 128 px**) and
  the footer `pt-16 lg:pt-24` (**64 / 96 px**) with **no bottom padding on the plate** — the gap under the last
  row is the bottom bar's own `py-8`.
- `.container` (Tailwind) = `width:100%; max-width:1280px; margin-inline:auto` → measured content **1,216 px**
  at 1440 (with the page's own `lg:px-8`), **358 px** at 390. Four independent content widths are in play:
  hero text **896** (`max-w-4xl`), hero image **1,024** (`max-w-5xl`), works **1,280** (`max-w-7xl`),
  statement/acquire **1,088** (`max-w-6xl`), exhibitions **896** with `px-8` inside (`max-w-4xl` → 832 of rows),
  FAQ/contact **768** (`max-w-3xl`).

## Reference document order

`header` → `hero` → `#works` → `#statement` → `#exhibitions` → `#acquire` → `#faq` → `#contact` → `footer`,
plus five fixed/overlay pieces outside the flow: `#preloader`, `#scroll-progress`, the skip link
(`#main-content`), `#mobile-cta` (`lg:hidden`), `#cookie-consent` and `#back-to-top` — six, counting the mobile
bar.

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Header (81 px at ≥1024, 65 px below; `sticky top-0`, `bg-white/80` + `backdrop-blur-lg`, 1 px
`border-b gray-200`)

`h-16` → `lg:h-20`, `container px-4 lg:px-8`, three zones: **logo** (`200 × 40`, the light/dark pair swapped by
`dark:hidden` / `hidden dark:block`), **nav** (`hidden lg:flex gap-8`, 7 labels: *Works · Exhibitions ·
Statement · Acquiring work · About · Studio notes · Contact*, all `14/500 gray-600`, hover `gray-900`; the
first four carry `data-nav-link` = `works|exhibitions|statement|acquire` for the kit's scroll-spy), and a
right cluster: **moon icon** (`aria-label="Toggle dark mode"`, `data-dark-toggle`, 36 × 36 hit area),
**Enquire** (`sm:inline-flex`, `bg-primary-600 px-5 py-2.5 text-sm`, **90 × 40**) and a **hamburger**
(`lg:hidden`, `aria-label="Open menu"`, `data-mobile-toggle aria-expanded="false"`). The mobile panel
(`div.hidden.lg:hidden[data-mobile-menu]`) repeats the seven labels as `block py-3 text-base` rows plus a
full-width `Enquire` — measured **446 px** tall when open at 390.

### 1 — Hero (1,240 px at 1440 = 81 + 80 + content + 128; 895 px at 390)

`bg-gradient-to-b from-primary-50 to-white`, two animated blobs behind an `aria-hidden` wrapper at `-z-10`, and
inside `container px-4 py-20 lg:px-8 lg:py-32` a `max-w-4xl` centre column:

1. **badge** — `inline-flex gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm
   font-medium text-primary-700` with an 8 px dot pair (`animate-ping` `primary-400` at 75 % opacity over a
   solid `primary-500`): **"Studio, Refshaleøen · Copenhagen"**, 279 × 34 at y = 209.
2. **`h1`** — `text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl`: *"Painting the hour"* `<br>` then
   `<span class="text-gradient" data-typewriter='["before the light goes","when the room turns grey","nobody photographs"]'>before the light goes</span>`,
   **896 × 120** (two 60 px lines) at y = 267.
3. **lead** — `mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl`: *"Oil on linen, worked slowly and
   mostly from observation. Recent paintings, current exhibitions and how to acquire work directly from the
   studio."* (672 × 84).
4. **CTA row** — `mt-10 flex flex-col items-center gap-4 sm:flex-row`: **View available works** → `#works`
   (filled `primary-600`, radius 8, **235 × 48**, arrow-right icon, `shadow-lg shadow-primary-600/25`);
   **Read the statement** → `#statement` (white + `border-gray-300`, **195 × 50**); **Watch Demo** — a bare
   `<button data-video-modal="https://www.youtube.com/embed/dQw4w9WgXcQ">` with a **48 × 48** `primary-600`
   play disc and a `14/500 gray-700` label.
5. **image** — `mt-16 lg:mt-24` → `max-w-5xl`, `rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200`,
   **1,024 × 512** (2:1, Unsplash `photo-1517697471339` = paint jars and brushes), `h-auto w-full`.

### 2 — `#works` — "Recent paintings" (1,732 px, transparent on white, `py-28`)

`max-w-7xl px-4 sm:px-6 lg:px-8`. Intro block `max-w-2xl`, left-aligned: eyebrow **SELECTED WORKS**
(`accent-700`, +2.4 px), `h2` **Lora 500 36/40** *"Recent paintings"*, lead `text-primary-600 max-w-xl`
*"Prices are for unframed works collected from the studio. Framing, crating and shipping are quoted separately
and at cost."*

`ul.mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3` → **384 px cards, 32 px column gap, 56 px row
gap**, six `li.group` figures, each a **4:5 image (384 × 480)** in an `overflow-hidden bg-primary-100` well with
`group-hover:scale-[1.03] duration-700`, then a caption stack: category (`11/400 uppercase +1.98 px
primary-500`), `h3` (*Lora italic 18* + non-italic year in `primary-500`), medium (`14 primary-600`),
dimensions (`14 primary-500`), and a status row — a 6 px dot + label on the left, price (`tabular-nums
primary-700`) pushed right with `ml-auto`:

| # | category   | title (+ year)              | medium       | size        | status             | price      |
| - | ---------- | --------------------------- | ------------ | ----------- | ------------------ | ---------- |
| 1 | Interiors  | Kitchen, four in the afternoon, 2032 | Oil on linen | 120 × 90 cm | **Available** (dot `accent-600`, label `accent-700` 500) | DKK 46,000 |
| 2 | Interiors  | Two chairs, one occupied, 2032 | Oil on linen | 90 × 70 cm | Reserved (dot `primary-400`) | DKK 32,000 |
| 3 | Refshaleøen | Harbour, low tide, 2031    | Oil on linen | 150 × 110 cm | Sold (dot `primary-300`) | — |
| 4 | Interiors  | Study for a long room, 2031 | Oil on board | 40 × 30 cm  | **Available**       | DKK 12,500 |
| 5 | Refshaleøen | Crane at rest, 2031        | Oil on linen | 110 × 110 cm | Private collection (dot `primary-300`) | — |
| 6 | Interiors  | The window, repainted, 2030 | Oil on linen | 100 × 80 cm | **Available**       | DKK 38,000 |

**Exactly three are Available** — the same number `#contact`'s heading promises. Keep that arithmetic; it is
the only cross-band consistency check the design has.

### 3 — `#statement` — "On painting rooms nobody is looking at" (1,103 px, transparent, `py-28`)

`max-w-6xl` with `grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16` → **487.6 / 536.4 px columns, 64 px gap**.
Left: a `figure` that is `lg:sticky lg:top-28 lg:self-start` — 4:5 image (**487.6 × 609.5**) in a
`bg-primary-100` well, caption `mt-3 text-xs italic text-primary-500` = *"Studio, Refshaleøen, February 2032"*.
Right: eyebrow **STATEMENT**, `h2` *"On painting rooms nobody is looking at"*, then `mt-8 space-y-6` of four
`leading-[1.85] text-primary-700` paragraphs (quoted in full below), with one `blockquote` between the first and
the second:

> I paint interiors, mostly my own and mostly at the end of the afternoon. The subject is not really the room —
> it is the particular quality of light that arrives just before it becomes necessary to switch something on,
> when colour drains out of everything unevenly and the corners go first.

> **A room is at its most honest in the twenty minutes before someone turns a lamp on.**

> Everything is worked from observation over a long period, which means the paintings record several afternoons
> rather than one. A chair moves between sittings. The light changes and I keep the earlier version. I have
> stopped regarding this as a problem to solve and started treating it as the actual subject.

> The Refshaleøen series came out of walking to the studio along the water in winter. Industrial structures at
> that hour behave like furniture — they stop being cranes and start being shapes that interrupt a grey field.
> The two series are more closely related than they look.

> I work in oil on linen almost exclusively, occasionally on board for studies. Slowly, in thin layers, with a
> great deal of scraping back. A large painting takes between four and nine months and I usually have three
> going at once because waiting for a layer to dry is unbearable otherwise.

### 4 — `#exhibitions` — "Where the work has been" (1,395 px, `#1a1815`, `py-28`, `text-primary-100`)

`max-w-4xl px-8` → rows **832 px** wide, `ol` of seven `li` — `grid grid-cols-[5rem_1fr] gap-5 border-t
border-primary-700 py-6` at ≥640, `grid-cols-[3.5rem_1fr]` below (**128 px** for the first row). Year is
`font-serif text-lg text-primary-400 tabular-nums`; then a wrap of tag(s) (`rounded-sm px-1.5 py-0.5 text-[10px]
font-semibold uppercase tracking-wider`, **Solo** = `bg-accent-600 text-white`, everything else =
`bg-primary-700 text-primary-200`; the first row adds a second, borderless tag **FORTHCOMING** in
`accent-400`), an `h3` in *Lora italic 18*, and a venue line `text-sm text-primary-300`.

| year | tag        | title                                   | venue                            |
| ---- | ---------- | --------------------------------------- | -------------------------------- |
| 2033 | Solo + Forthcoming | The Long Room                   | Galleri Nordhavn · Copenhagen    |
| 2032 | Group      | Painting After Observation              | Kunsthal Aarhus · Aarhus         |
| 2032 | Prize      | Shortlist, Nordic Painting Award        | Nationalmuseum · Stockholm       |
| 2031 | Solo       | Refshaleøen                             | Galleri Nordhavn · Copenhagen    |
| 2031 | Residency  | Winter studio residency                 | Fogo Island Arts · Newfoundland  |
| 2030 | Group      | Interiors, Nine Painters                | Kunstverein Hamburg · Hamburg    |
| 2029 | Solo       | First Rooms                             | Sydhavn Projektrum · Copenhagen  |

Closing note after a `border-t` rule: *"Full CV and high-resolution images available to galleries, curators and
press on request. Please write to the studio address rather than through social channels."*

### 5 — `#acquire` — "Three ways to buy" (942 px, `primary-50`, `py-28`)

`max-w-6xl`. Intro `max-w-2xl`: eyebrow **ACQUIRING WORK**, `h2` *"Three ways to buy"*, lead *"Available works
can be bought directly from the studio. Everything else goes through the galleries below."* Then
`ol.mt-12 grid gap-8 sm:grid-cols-3` (**341 px** each):

- **01 — Directly from the studio.** *"Works marked available on this page can be bought direct. Write with the
  title and I will confirm it is still free, send additional images and arrange a studio visit if you are in
  Copenhagen."* Fine print above a `border-t border-primary-200`: *"Payment in two instalments. Nothing leaves
  the studio until the second clears."*
- **02 — Through a gallery.** *"Works in current exhibitions are handled entirely by the showing gallery,
  including pricing and shipping. I will pass your enquiry on rather than working around them."* Fine print:
  *"Gallery prices include their commission and are not negotiable by me."*
- **03 — Commission.** *"I take one or two commissions a year, always interiors, always from observation, which
  means I need access to the room. I will say no to most requests and it is nothing personal."* Fine print:
  *"Twelve to eighteen months from agreement. Fifty percent on commencement."*

Then `mt-14 border-t border-primary-200 pt-8`: **REPRESENTED BY** (`12/500 uppercase +2.4 px primary-500`) and
two inline pairs — *Galleri Nordhavn* + `Copenhagen`, *Kunstverein Hamburg* + `Hamburg (group exhibitions)`
(serif 18 + sans 14 `primary-500`). Closing outlined CTA **Enquire about a work** → `/contact`,
`border border-primary-900 px-8 py-3.5`, **radius 0**, **228 × 54**, hover `bg-primary-900 text-primary-50`.

### 6 — `#faq` — "Before you write" (820 px, white, `py-20 lg:py-28`)

Centred `max-w-3xl`: pill **Practical questions** (`bg-primary-100 px-3 py-1 text-sm font-medium
text-primary-700`, 28 tall), `h2` **Inter 700 36/40** *"Before you write"*, lead `text-lg gray-600` *"Shipping,
framing, condition and the questions collectors ask most."* Then `mt-16 divide-y divide-gray-200` with five
rows (`py-6`), each `button[data-faq-toggle]` = question (`18/600`) + a **32 × 32** `rounded-full bg-gray-100`
disc holding a `+` icon (`data-faq-icon`), and a panel div (`overflow-hidden transition-all duration-300`) that
the kit collapses to `max-height: 0`.

1. **Are prices negotiable?** — *"Studio prices are not. They are set in consultation with the gallery so that
   buying direct is never cheaper than buying through them, which would be an unpleasant thing to do to people
   who have supported the work for years."*
2. **Do works come framed?** — *"No. Prices are for unframed work collected from the studio. I am happy to
   recommend two framers in Copenhagen who understand oil on linen, and to advise on a moulding, but framing is
   arranged and paid for by the buyer."*
3. **How is work shipped?** — *"Crated by a fine-art shipper and insured for the full value. Within Europe this
   is typically DKK 3,000 to 9,000 depending on size. I do not roll paintings or send them by ordinary courier
   under any circumstances."*
4. **Can I visit the studio?** — *"Yes, by arrangement on Thursdays and Fridays. It is a working studio on
   Refshaleøen with no heating to speak of in January, which is worth knowing before you come."*
5. **Do you sell prints?** — *"No. It is a reasonable question and the answer is simply that the paintings depend
   on surface and thickness, and a print of one is a photograph of a texture rather than the thing itself."*

### 7 — `#contact` — "Three works are currently available" (500 px, 135° `#655e55` → `#2e2b26`, `py-20 lg:py-28`)

`relative overflow-hidden`; an `aria-hidden` layer holds the two white blobs and the **40 px dot grid** at 10 %.
Inside, `container relative z-10` → `max-w-3xl` centred: `h2` **Inter 700 48/48 white** (768 × 96),
lead `text-lg text-primary-100` *"Write with a title and I will confirm availability, send further images and
arrange a viewing."*, then two CTAs: **Enquire about a work** (`bg-white text-primary-700`, radius 8,
**254 × 56**, arrow icon) and **See the exhibition history** → `#exhibitions` (`border-2 border-white/30`,
radius 8, **288 × 60**, gallery icon).

### 8 — Footer (543 px, `gray-900 #111827`, `pt-24`, no bottom padding)

`container` → `grid gap-12 lg:grid-cols-12 lg:gap-8` (**72 px columns**, 32 px gaps, 1,216 total):

- **`lg:col-span-4`** — the light logo (200 × 40), blurb *"Painter working in oil on linen. Works, exhibition
  history, studio notes and acquisition enquiries."* (`max-w-xs`, `gray-400`), three 40 × 40 social chips
  (`rounded-lg bg-gray-800 p-2.5`, X / Instagram / LinkedIn icons, `aria-label`s, **all `href="#"`**), and three
  contact lines in `14 / gray-400 space-y-2`: *Refshalevej 213, Copenhagen, 1432* · `tel:+45 32 88 41 06` ·
  `mailto:studio@claraostend.art`.
- **`sm:grid-cols-3 lg:col-span-5`** — **SPACES** (Hot Desk · Dedicated Desk · Private Office · Meeting Rooms,
  all → `#spaces`), **COMPANY** (About → `/about`, Blog → `/blog`), **SUPPORT** (Contact → `#contact`, Terms →
  `/terms`).
- **`lg:col-span-3`** — **STAY UPDATED**, *"Occasional studio notes and first sight of new work, usually before
  it reaches a gallery."*, and a `form[data-newsletter-form]` with `input[type=email][required]`
  (placeholder *"Enter your email"*, `bg-gray-800 border-gray-700 rounded-lg`, **46 px** tall) + **Subscribe**
  (`bg-primary-600`, radius 8, **109 × 46**).

Bottom bar: `mt-16 border-t border-gray-800 py-8` — *"© 2026 Clara Ostend. All rights reserved."* (`gray-500`)
and *Privacy Policy* → `/privacy`, *Terms of Service* → `/terms`, *Style Guide* → `/elements`.

### Chrome (outside the flow)

- **`#preloader`** — `fixed inset-0 z-[100] bg-white` with a 40 px `border-4 border-gray-200 border-t-primary-600`
  spinner; removed on `window.load` (+300 ms fade).
- **`#scroll-progress`** — `fixed top-0 left-0 z-[60] h-0.5 bg-primary-600`, inline `width` = scroll fraction
  (measured **5.3 %** at `scrollY = 400`).
- **skip link** — `sr-only focus:not-sr-only … focus:bg-primary-600`, *"Skip to content"* → `#main-content`.
- **`#mobile-cta`** (`lg:hidden`, `fixed bottom-0 inset-x-0 z-40 border-t bg-white p-3`) — two `flex-1` buttons:
  **Call Now** (`tel:5556789012`, `bg-gray-100`) and **Book a Tour** (`#contact`, `bg-primary-600`). Both labels
  and the number are **coworking-template leftovers** (see §Known reference defects) — measured **69 px** tall at
  390 and hidden at ≥1024.
- **`#cookie-consent`** — `fixed bottom-0 inset-x-0 z-50 border-t bg-white p-4 sm:p-6`, `role="dialog"`
  `aria-label="Cookie consent"`, copy *"We use cookies to enhance your experience. By continuing to visit this
  site you agree to our use of cookies."* + **Decline** (outline) / **Accept All** (`bg-primary-600`); the kit
  slides it in **1,500 ms** after load and stores `essential` / `accepted` in `localStorage['cookie-consent']`.
  **87 px** tall at 1440, **147 px** at 390.
- **`#back-to-top`** — `fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary-600 text-white shadow-lg
  shadow-primary-600/25`, hidden (`opacity:0; pointer-events:none; translateY(16px)`) until `scrollY > 300`.

## Behaviour the recreation must reproduce

Abstracted from the two inline scripts **plus** the shared kit (only the handlers whose hooks exist here):

1. **Theme selection (inline, before paint).** `localStorage.theme === 'dark'`, or no stored value and
   `prefers-color-scheme: dark` → `<html class="dark">`. The moon button (`[data-dark-toggle]`) toggles the class
   and writes `theme` to `localStorage`. Measured: clicking it at 1440 sets `html.dark`, `body` → `#030712`.
2. **Header shadow past 50 px** (`[data-header]` adds/removes `shadow-lg`); the header stays `sticky` and keeps
   `bg-white/80` — it does **not** change height or become `fixed` (measured 81 px at `scrollY = 400`).
3. **Scroll progress** — `#scroll-progress.style.width` follows `scrollY / (scrollHeight − innerHeight)`.
4. **Typewriter** on `[data-typewriter]` — parses the JSON array, prepends the element's current text, then every
   **3,000 ms** fades the span out (`opacity 0; translateY(10px)`, 300 ms), swaps text, fades back in. The
   element is forced `display:inline-block`. Measured cycling through all three phrases.
5. **Parallax** on `[data-parallax]` — `translateY(scrollY × factor)` with factors **0.15** and **−0.1**, skipped
   when the element is more than 200 px outside the viewport.
6. **Reveal on scroll** — **16** `[data-animate="fade-in-up"]` elements only: **hero 5** (`data-delay`
   0/100/200/300/500), **`#faq` 8** (0/100/150/200/250/300 plus the pill and lead), **`#contact` 3**
   (0/100/200). `#works`, `#statement`, `#exhibitions` and `#acquire` have **none** — they paint immediately.
   IO `threshold .1`, `rootMargin 0 0 -10%`, and the whole effect **bails out** under
   `prefers-reduced-motion: reduce`.
7. **FAQ accordion** — single-open: sets the clicked panel's `max-height` to `scrollHeight`, closes the others,
   rotates `[data-faq-icon]` **45°** when open (measured: panel 0 → 88 px on the first row).
8. **Video modal** — `[data-video-modal]` builds a `fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm` overlay
   with a `max-w-4xl` `iframe` of the URL in the attribute (`…/embed/dQw4w9WgXcQ` — a placeholder), a close
   button at `-top-12 right-0`, a backdrop click and `Escape` to dismiss.
9. **Mobile disclosure** — `[data-mobile-toggle]` flips `hidden` on `[data-mobile-menu]`, swaps the hamburger
   path for an X, maintains `aria-expanded` (measured `true` + 446 px panel at 390) and also re-binds the
   panel's accordion rows.
10. **Smooth anchor scrolling** — every `a[href^="#"]` that resolves to an element scrolls with
    `offset = headerHeight + 20` and calls `history.pushState`.
11. **Scroll-spy** — the four `[data-nav-link]` labels get `nav-active` while their section is in
    `rootMargin: -20% 0 -70%`.
12. **Cookie strip** — shown after 1,500 ms when `localStorage['cookie-consent']` is absent; either button slides
    it out and removes the node in 300 ms.
13. **Back-to-top** — visible past 300 px; click scrolls smoothly to `0`.
14. **Preloader** — removed on `load` + 300 ms; must never trap content when `load` has already fired (see
    `docs/conventions.md` §Document readiness).
15. **Nothing binds to the newsletter form.** The kit's validator looks for `form[data-validate]`; the footer
    form carries `data-newsletter-form`, so submitting it performs a **native POST to the same URL** and reloads
    the page. The recreation must not reproduce a bare reload (see §Deliberate deviations D6).

## Data-attribute inventory (measured on the live index)

| attribute | count | element | owner |
| --------- | ----: | ------- | ----- |
| `data-header` | 1 | `<header>` | kit — `shadow-lg` past 50 px |
| `data-dark-toggle` | 1 | header moon button | kit — toggles `html.dark`, persists `theme` |
| `data-mobile-toggle` / `data-mobile-menu` | 1 / 1 | hamburger / panel | kit |
| `data-nav-link` | **4** | Works, Exhibitions, Statement, Acquiring work | kit — scroll-spy |
| `data-typewriter` | 1 | the `h1`'s gradient span (JSON of 3 phrases) | kit |
| `data-parallax` | 2 | the two hero blobs (`0.15`, `-0.1`) | kit |
| `data-animate` / `data-delay` | **16** / **15** | hero 5, `#faq` 8, `#contact` 3 | kit |
| `data-video-modal` | 1 | "Watch Demo" button (YouTube URL) | kit |
| `data-faq-toggle` / `data-faq-icon` | **5** / **5** | the five questions / their discs | kit |
| `data-newsletter-form` | 1 | footer form | **nobody** — no kit handler |
| `data-cookie-accept` / `data-cookie-decline` | 1 / 1 | cookie strip | kit |
| `data-billing-*`, `data-carousel*`, `data-counter`, `data-blog-*`, `data-validate`, `data-accordion-toggle`, `data-lightbox`, `data-rating-*` | **0** | — | kit handlers present, **no hooks** — do not implement them |

## Anchor map (all 42 `a[href]`)

| href | count | labels |
| ---- | ----: | ------ |
| `/theme/ostend/contact` | **6** | Enquire (header, CTA, mobile panel) · Contact (nav, SUPPORT column) · Enquire about a work ×2 |
| `/theme/ostend/#spaces` | **4** | Hot Desk · Dedicated Desk · Private Office · Meeting Rooms — **the id does not exist** |
| `/theme/ostend/about` | 3 | About (nav, mobile panel, COMPANY) |
| `/theme/ostend/blog` | 3 | Studio notes (nav, mobile panel) · Blog |
| `#` | **3** | the three social chips (dead) |
| `/theme/ostend/` | 2 | header logo, footer logo |
| `/theme/ostend/#works` | 2 | Works (nav, mobile panel) |
| `/theme/ostend/#exhibitions` | 2 | Exhibitions (nav, mobile panel) |
| `/theme/ostend/#statement` | 2 | Statement (nav, mobile panel) |
| `/theme/ostend/#acquire` | 2 | Acquiring work (nav, mobile panel) |
| `/theme/ostend/#contact` | 2 | Contact (nav, mobile panel) — the mobile CTA bar adds a third `#contact` via `Book a Tour` |
| `/theme/ostend/terms` | 2 | Terms (SUPPORT) · Terms of Service (bottom bar) |
| `#main-content` | 1 | Skip to content |
| `#works`, `#statement`, `#exhibitions` | 1 each | the hero CTAs and the `#contact` secondary CTA |
| `/theme/ostend/privacy` | 1 | Privacy Policy |
| `/theme/ostend/elements` | 1 | Style Guide |
| `tel:+45 32 88 41 06` | 1 | footer phone (valid) |
| `tel:5556789012` | 1 | mobile CTA bar `Call Now` (**placeholder, US-shaped**) |
| `mailto:studio@claraostend.art` | 1 | footer e-mail |

That is **7 dead or dangling** (`3 × #` + `4 × #spaces`) out of 42 — the design's one real link defect, and the
reason the recreation must re-point the "Spaces" column (D4).

## Inner-page inventory (6 routes, all HTTP 200 with a trailing slash, 2026-10-25)

| route | bytes | `<h1>` | holds |
| ----- | ----: | ------ | ----- |
| `/about/` | 47,216 | *About* | three principles as `h3`s — *Direct prices match gallery prices*, *One or two commissions a year*, *No prints, no reproductions* — plus *Enquiries* (Studio, Galleri Nordhavn) and *Studio visits on Thursdays and Fridays* |
| `/blog/` | 53,485 | *Insights & Updates* | six posts over three filters (Process / Practical / Materials), a `[data-blog-search]` input, and a newsletter block |
| `/contact/` | 46,898 | *Contact* | **the site's only real form** — `name` (text, required), `email` (required), `subject` (text), `message` (textarea, required), submit *Send enquiry* — plus a Studio card (Email / Phone / Studio / Visiting) |
| `/elements/` | 67,579 | *Elements* | the style guide: type scale, palette, buttons, form controls |
| `/privacy/` | 49,044 | *Privacy Policy* | legal |
| `/terms/` | 47,808 | *Terms of Service* | legal |

The `/blog/` `h1` — *"Insights & Updates"* — and the `/contact/` card's **Spaces** heading are the two clearest
signs that the page set was assembled from a coworking template (see §Known reference defects).

## Class census (1440 px)

**352 distinct class tokens** in the markup; the 63,042 B sheet defines **590 plausible class selectors**, of
which **238 are unused by this page** (the shared kit's `.btn`/`.btn-primary`/`.card`/`.container-narrow`, every
other palette's light/dark pairs, and the utilities for handlers with no hook here — carousel, counters, billing
toggle, blog search, form validation). **0 phantom classes** — every token in the DOM has a rule.

Two traps when re-running this census:

- `group` (6 uses) and `font-sans` have **no rule of their own** — `group` exists only to drive
  `group-hover:scale-[1.03]`, and `font-sans` is Tailwind's default. A naive "class with no rule" scan reports
  both; whitelist them.
- `sm:`, `lg:` and `dark:` variants escape as `.sm\:inline-flex`, `.lg\:col-span-4`, `.dark\:bg-gray-950/80`,
  and arbitrary values as `.w-\[500px\]`, `.tracking-\[0\.2em\]`, `.text-\[11px\]` — a census that does not
  un-escape reports ~60 false phantoms.

## Screenshot analysis (`ostend-template.jpg`)

**211,538 B, a real baseline JPEG, 2400 × 1892**
(`colorlib.com/wp/wp-content/uploads/sites/2/ostend-template.jpg`; the catalogue also references an
`ostend-template.avif` and an `ostend-template-1024x807.jpg` variant). It is a **composed browser-window mockup,
not a raw capture**: a white ground, a macOS window with traffic lights, a URL bar showing
`preview.colorlib.com`, cropped to the **hero only** — the sticky header, the badge, the two-line `h1` (second
line already in the taupe gradient), the lead, the three CTAs and the top two-thirds of the `1,024 × 512` image
frame.

It confirms three things the DOM alone does not: (a) the **hero is the product** — the catalogue sells this
template on one screen of type and one image, with no cards visible; (b) the gradient's top (`#faf9f7`) is
warm enough to read as paper rather than as white, and the h1's gradient line is noticeably **lighter** than the
sans first line, so the typewriter phrase sits at ~55 % contrast — it is a texture, not a headline; (c) the
nav's *"Acquiring work"* is rendered **bolder** than its neighbours in the capture, which is the review of the
scroll-spy's `nav-active` class when the screenshot was taken — the rest state is uniform `gray-600`.

**Do not adopt** the white catalogue ground, the window chrome or the rounded window corners: they are catalogue
furniture. The screenshot shows no cookie strip and no back-to-top disc, confirming both are runtime chrome.

## Known reference defects — measure them, do not reproduce them

1. **The footer newsletter form overflows the viewport below 640 px.** `scrollWidth` is **401 px** at 390 (11 px
   of horizontal scroll) and **401 px** at 320 (81 px). Bisected: hiding `form.mt-4` returns `scrollWidth` to
   **390**. The form's intrinsic width propagates through the footer grid column, and every sibling block then
   measures 385 px wide. Fix by letting the input shrink (`min-w-0` on the flex container as well) or stacking
   the row below `sm`.
2. **`og:image` points at `/og-image.jpg` → 404**, on both `preview.colorlib.com/og-image.jpg` and the theme
   path. Ship a real social card or drop the tag.
3. **All italic is synthetic.** Lora's 56 `@font-face` rules are `normal` only; `italic` is requested on six card
   titles, the pull quote, the statement caption and seven exhibition titles. Same for **Inter 700** against a
   300–600 declaration set. Load true italics and a real 700.
4. **The `h1` is not stable.** The typewriter replaces its second line every three seconds, so the document
   heading changes from *"Painting the hour before the light goes"* to *"…when the room turns grey"* and back.
   Keep the theatre, but keep a **static accessible name** (`aria-label` on the `h1`, the animated span
   `aria-hidden`) and never let the text swap change the heading's box height (the phrases differ in length; at
   390 the reference happens to hold two lines for all three).
5. **Two phone numbers on one page** — `tel:+45 32 88 41 06` in the footer and `tel:5556789012` in the mobile CTA
   bar — and the second is a **placeholder number in a different country**.
6. **Coworking-template copy survives in the chrome:** the mobile bar's **"Book a Tour"**, the footer column
   headed **SPACES** (*Hot Desk · Dedicated Desk · Private Office · Meeting Rooms*) and the `/blog/` `h1`
   *"Insights & Updates"*. Four of those links point at **`#spaces`, an id that does not exist**.
7. **Three dead `#` social chips** (X, Instagram, LinkedIn) — the only `aria-label`d anchors with no target.
8. **The cookie strip covers the mobile CTA bar and the footer's bottom row.** Both are `fixed bottom-0`
   (`z-50` cookie vs `z-40` bar), so at 390 the 147 px strip sits on top of the 69 px bar and eats the copyright
   line.
9. **The FAQ accordion has no `aria-expanded` / `aria-controls`.** The kit only animates `max-height` and rotates
   the icon, so screen readers get five buttons with no state. Add the attributes and `hidden` on the closed
   panels.
10. **Motion is unguarded outside the reveal.** `prefers-reduced-motion` is honoured by `[data-animate]` only —
    the typewriter keeps cycling, the hero blobs keep floating (`animate-hero-float`, infinite) and the parallax
    listener keeps writing transforms. Guard all four.
11. **Header nav labels mix registers** (*Works*, *Exhibitions*, *Statement*, *Acquiring work*, *About*,
    *Studio notes*, *Contact*) and two of them are pages while four are bands. The recreation must not keep that
    ambiguity — see D1.
12. **The newsletter form submits natively** (no handler, no `action`) so pressing *Subscribe* reloads the page.
    Give it a real inline success state instead.

## Deliberate deviations from the reference (single-page recreation)

Recorded here so the implementer does not "restore fidelity" by re-breaking them:

- **D1 — nav targets.** The reference's seven labels are four bands and three pages. One page has bands, so the
  nav becomes `Works` → `#works`, `Exhibitions` → `#exhibitions`, `Statement` → `#statement`,
  `Acquiring work` → `#acquire`, `Questions` → `#faq` (a rename of *Studio notes*, which pointed at `/blog`),
  `Contact` → `#contact`, and the **Enquire** CTA → `#contact`. **`About` is dropped** — the statement band *is*
  the about page's content, and two labels pointing at one band is the ambiguity this replaces. Keep the
  left-nav / right-cluster geometry and the 7-item count.
- **D2 — the enquiry form moves into `#contact`.** The home page has **no form**; it lives on `/contact`, which
  the design links to six times. A one-page template whose primary CTA goes nowhere useful is a broken artefact,
  so the `#contact` band gains the reference's four fields (`name`, `email`, `subject`, `message`) beneath the two
  CTAs, left-aligned in a `max-w-xl` block under the centred copy, with client-side validation and a visible
  success state (no backend). The band's `h2`, lead and both CTAs stay exactly as authored, and the band's height
  will grow — document that in the PR rather than compressing the padding to hide it.
- **D3 — Component Dock.** AGENTS.md rule 5 requires `https://www.componentdock.com/` ("Component Dock") in the
  footer. The three dead social chips become **one** Component Dock chip (globe icon, same 40 × 40 geometry,
  `rel="noopener"`), and the bottom bar gains no extra link — the chip is the requirement.
- **D4 — the SPACES column becomes real links.** *Hot Desk · Dedicated Desk · Private Office · Meeting Rooms* and
  their dead `#spaces` target are coworking leftovers. Replace the column with **four honest links that exist in
  this app** — `Works` → `#works`, `Statement` → `#statement`, `Exhibitions` → `#exhibitions`,
  `Acquiring work` → `#acquire` — and rename the heading from **SPACES** to **THE WORK**. Keep the paragraph
  that the mobile bar pointed at (`Book a Tour`) out of the app entirely.
- **D5 — zero dead links, one phone number.** No `href="#"` anywhere; the mobile CTA bar becomes **Enquire**
  (`#contact`) + **Call the studio** (`tel:+4532884106`), reusing the one valid number.
- **D6 — the newsletter form is local.** Inline validation + a visible confirmation, never a native POST/reload.
- **D7 — images.** All eight photographs become placeholders
  (`https://picsum.photos/seed/pentimento-<n>/<w>/<h>`) at the reference's intrinsic sizes: hero **1200 × 600**,
  the six paintings **600 × 750** (rendered 384 × 480 at 1440), statement **700 × 875** (rendered 487.6 × 609.5).
  Never hotlink the Unsplash IDs.
- **D8 — the wordmark.** It is a **479 B SVG with a live `<text>` node** (Lora 18 px, plus a 24 × 24 canvas
  rectangle, a rose `#df7484` triangle and a dot). Recreate it as an inline SVG component with the text
  preserved as text (or as styled text beside a drawn mark), in both the light (`logo.svg`) and light-on-dark
  (`logo-light.svg`) variants. Do not ship a rasterised logo and do not depend on a file we do not own.
- **D9 — both themes, no pinning.** Unlike the `patina` prep, this page **does** ship a working toggle: build the
  light theme as the default, honour `prefers-color-scheme`, persist the choice, and keep the one element that
  does not invert (the `h1`'s `.text-gradient`).

## Requirements

### Requirement 1: Page chrome (preloader, progress bar, skip link, cookie strip, back-to-top)

The app SHALL render the reference's out-of-flow chrome: a self-dismissing preloader, a 2 px stone
scroll-progress bar, a skip link to `#main-content`, a bottom cookie strip and a 48 px back-to-top disc.

#### Scenario: Preloader never traps content

- **GIVEN** the app mounts in jsdom, or in a browser whose document is already `complete`
- **WHEN** no further `load` event will fire
- **THEN** the preloader is treated as finished (`loaded || document.readyState === 'complete'`)
- **AND** in a real browser it fades over 300 ms and is removed from the DOM

#### Scenario: Progress bar and back-to-top

- **GIVEN** the page scrolled to 50 % of its scrollable height
- **THEN** `#scroll-progress` is **2 px** tall (`h-0.5`), `primary-600` `#655e55`, `fixed top-0 left-0 z-[60]`,
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
- **AND** it is **not** shown again on a later visit with a stored decision, and it never overlaps the footer's
  bottom row or the mobile CTA bar (deviation from the reference — defect 8)

#### Scenario: Skip link and landmarks

- **THEN** the first focusable element is *"Skip to content"*, visually hidden until focused, then a
  `rounded-lg bg-primary-600 px-4 py-2` chip
- **AND** the page exposes `header` / `main#main-content` / `footer` landmarks and the skip link targets
  `#main-content`

### Requirement 2: Header — sticky, 81 px at ≥1024, nav only from `lg`, working theme toggle

#### Scenario: At rest at 1440

- **THEN** the header is **81 px** tall (`h-20` + 1 px bottom border), `position: sticky`, `top: 0`, `z-50`,
  `background: rgba(255,255,255,.8)` with `backdrop-filter: blur(16px)`, `border-bottom: 1px solid #e5e7eb`
- **AND** the logo is **200 × 40** at `x = 112`; the seven nav labels are `14/500 gray-600` with a **32 px** gap;
  the moon button, the **Enquire** CTA (**90 × 40**, `primary-600`, radius 8) and the hamburger sit right
- **AND** the hamburger is `display: none` and the nav `display: flex` at 1440

#### Scenario: Stuck state

- **GIVEN** `scrollY > 50`
- **THEN** the header gains `shadow-lg` and **keeps** its height, position and 80 % white ground (measured at
  `scrollY = 400`: 81 px, `sticky`, `rgba(255,255,255,.8)`, shadow present)
- **AND** the section whose `id` matches the hovered `[data-nav-link]` marks that label `nav-active`

#### Scenario: Breakpoints

- **THEN** at **1024** the full nav and the CTA are visible; at **768** and **390** they are gone and the
  hamburger + moon remain, with the header **65 px** tall (`h-16` + border)
- **AND** the mobile panel opens to **446 px** at 390 with `aria-expanded="true"`, listing the seven labels as
  `block py-3 text-base` rows plus a full-width *Enquire*

#### Scenario: Theme toggle

- **GIVEN** the moon button is pressed
- **THEN** `<html>` gains/loses `class="dark"`, `localStorage.theme` is set to `dark`/`light`, and `body`
  becomes `#030712` on `#f3f4f6` in dark and `#ffffff` on `#111827` in light
- **AND** first paint with no stored value follows `prefers-color-scheme` and never flashes the wrong theme
  (the inline script runs before paint)

### Requirement 3: Hero — paper gradient, two blobs, a typewritten second line and three actions

The app SHALL render the hero as a centred `max-w-4xl` column over a `primary-50` → white gradient, with the
`h1`'s second line as a typewriter and three actions: two anchor CTAs and a video trigger.

#### Scenario: Geometry at 1440

- **THEN** the band is **1,240 px** tall (`py-32` = 128 px top and bottom) and its gradient is
  `linear-gradient(in oklab, #faf9f7 0%, #ffffff 100%)`
- **AND** the badge is **279 × 34**, `rounded-full`, `bg-primary-50`, `border-primary-200`, `14/500 primary-700`,
  with an 8 px `primary-500` dot and a `primary-400` `animate-ping` twin at 75 % opacity
- **AND** the `h1` is **Inter 700 60/60**, tracking **−1.5 px**, `gray-900`, **896 × 120**; its second line is
  `.text-gradient` (`linear-gradient(to right in oklab, #655e55, #a9a196)`, `background-clip: text`,
  `color: transparent`)
- **AND** the lead is **20/28** `gray-600`, `max-w-2xl` (**672 px**), centred
- **AND** CTA 1 *View available works* is **235 × 48** (`primary-600`, radius 8, `shadow-lg
  shadow-primary-600/25`), CTA 2 *Read the statement* is **195 × 50** (white, `border-gray-300`, radius 8), and
  *Watch Demo* is a 48 px `primary-600` disc with a `14/500 gray-700` label
- **AND** the image frame is **1,024 × 512**, `rounded-2xl`, `ring-1 ring-gray-200`, `shadow-2xl`, and starts
  **96 px** below the CTA row (`lg:mt-24`)

#### Scenario: The typewriter cycles without breaking the layout

- **GIVEN** the hero is mounted
- **THEN** the span starts as *"before the light goes"* and every **3,000 ms** switches to the next phrase of
  *"when the room turns grey"* / *"nobody photographs"*, fading out and back in over 300 ms with a
  `translateY(10px)` nudge
- **AND** the `h1`'s accessible name stays *"Painting the hour before the light goes"* (the animated span is
  `aria-hidden`), and the heading's height never changes between phrases
- **AND** under `prefers-reduced-motion: reduce` the span is static on the first phrase

#### Scenario: Parallax on the two blobs

- **GIVEN** the page scrolls
- **THEN** the `500 × 500` `primary-200/50` blob moves at **0.15 ×** and the `400 × 400` `primary-100/40` blob at
  **−0.1 ×** the scroll offset, both `blur-3xl`, both inside an `overflow-hidden` parent so neither widens the
  document
- **AND** neither is animated under `prefers-reduced-motion`

#### Scenario: Watch Demo opens the video modal

- **GIVEN** *Watch Demo* is activated
- **THEN** a `fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm` overlay appears with a `max-w-4xl` `iframe`
  (16:9), a close button above it, and **Escape** / backdrop click both dismiss it
- **AND** focus moves into the dialog and returns to the trigger on close

### Requirement 4: `#works` — six paintings, three of them purchasable

#### Scenario: Grid at 1440

- **THEN** `#works` is **1,732 px** tall on white, `py-28` (**112 px**), content **1,216 px** inside `max-w-7xl`
- **AND** the intro is left-aligned in `max-w-2xl`: eyebrow **SELECTED WORKS** (`accent-700`, `12/500 uppercase`,
  `+2.4 px`), `h2` *"Recent paintings"* (**Lora 500 36/40**, `−0.9 px`), lead in `primary-600` (`max-w-xl`)
- **AND** the grid is **3 × 384 px** with `32 px` column and **56 px** row gaps, six cards, each image **4:5**
  (**384 × 480**) inside an `overflow-hidden bg-primary-100` well that scales to **1.03** over 700 ms on
  `group-hover`

#### Scenario: Card anatomy and statuses

- **THEN** each caption is category (`11/400 uppercase`, `+1.98 px`, `primary-500`), title (**Lora 400 italic
  18/28**) with a **non-italic year** in `primary-500`, medium (`14 primary-600`), dimensions (`14
  primary-500`), then a status row
- **AND** *Available* renders a 6 px `accent-600` dot with an `accent-700` 500 label and a **DKK price**
  right-aligned in `tabular-nums primary-700`; *Reserved*, *Sold* and *Private collection* use `primary-400` /
  `primary-300` dots with `primary-500` labels, and only *Reserved* carries a price
- **AND** **exactly three** cards are *Available*, matching `#contact`'s "Three works are currently available"
- **AND** the six titles, media, sizes and prices are exactly those in §Band-by-band content

#### Scenario: Cards at 390

- **THEN** the grid is one column, the image is **358 × 448**, and the caption stack keeps its order and colours
  (no two-line clamp, no horizontal scroll)

### Requirement 5: `#statement` — sticky figure beside four paragraphs and one pull quote

#### Scenario: Composition at 1440

- **THEN** `#statement` is **1,103 px** on white, `py-28`, content **1,088 px** (`max-w-6xl`)
- **AND** the split is **487.6 / 536.4 px** with a **64 px** gap (`lg:grid-cols-[1fr_1.1fr]`)
- **AND** the figure is `sticky top-28` (**112 px**), its image **4:5** (487.6 × 609.5) in a `bg-primary-100`
  well, caption `12 italic primary-500` *"Studio, Refshaleøen, February 2032"*
- **AND** the right column is eyebrow **STATEMENT**, `h2` *"On painting rooms nobody is looking at"*, then four
  `16 / 29.6` (`leading-[1.85]`) `primary-700` paragraphs separated by `24 px`
- **AND** the pull quote sits between paragraphs 1 and 2: **Lora 20/32.5 italic**, `primary-800`,
  `border-left: 2px solid #a82f47`, `padding-left: 24px`, `padding-block: 4px`

#### Scenario: At 390

- **THEN** the columns stack (figure first, not sticky), the image is **358 × 448**, the quote keeps its 2 px
  rule, and the paragraphs stay `1.85`

### Requirement 6: `#exhibitions` — seven dated rows on the darkest band

#### Scenario: Band at 1440

- **THEN** `#exhibitions` is **1,395 px** on `primary-900` `#1a1815` with `text-primary-100`, `py-28`, content
  **896 px** (`max-w-4xl` with `px-8` → rows **832 px**)
- **AND** it starts with eyebrow **EXHIBITIONS** in `accent-400`, `h2` *"Where the work has been"* (Lora 500 36,
  `#f2f0ec`) and the lead *"Solo shows, selected group exhibitions, prizes and residencies."* in `primary-300`

#### Scenario: Row anatomy

- **THEN** each row is `grid-cols-[5rem_1fr]` (**80 px** year column at ≥640, **56 px** below), `gap-5`,
  `border-top: 1px solid #4a453e`, `padding-block: 24px`, and the first row measures **832 × 128**
- **AND** the year is **Lora 18/28 `tabular-nums`** in `primary-400`; tags are `rounded-sm` (`4 px`),
  `10/600 uppercase`, `+0.5 px` — **Solo** on `accent-600` with white text, every other tag on `primary-700` with
  `primary-200` text; the first row adds a borderless **FORTHCOMING** tag in `accent-400`
- **AND** the title is **Lora 18/28 italic** in `primary-100` and the venue `14/20` in `primary-300`
- **AND** the seven rows are exactly those in §Band-by-band content, and the closing CV note sits under a
  `border-t` rule in `primary-400`

### Requirement 7: `#acquire` — three routes, the rules printed under each, one square CTA

#### Scenario: Band at 1440

- **THEN** `#acquire` is **942 px** on `primary-50` `#faf9f7`, `py-28`, content **1,088 px**
- **AND** the intro is `max-w-2xl`: eyebrow **ACQUIRING WORK** (`accent-700`), `h2` *"Three ways to buy"*, lead in
  `primary-600`

#### Scenario: The three cards

- **THEN** the cards are a `grid gap-8 sm:grid-cols-3` of **341 px** each, in order: **01** *Directly from the
  studio*, **02** *Through a gallery*, **03** *Commission*
- **AND** each numeral is **Lora 30/36** in `accent-600`, each title **Lora 20/28** in `#111827`, each body
  `16` `primary-600 leading-relaxed`, and each fine-print line separated by `border-t border-primary-200` in
  `14 primary-500`
- **AND** the bodies and fine print are the reference's copy verbatim, including the three refusals quoted in
  §Band-by-band content

#### Scenario: Represented by, and the square CTA

- **THEN** under a `border-t border-primary-200` the eyebrow **REPRESENTED BY** (`12/500 uppercase +2.4 px
  primary-500`) is followed by two inline pairs — *Galleri Nordhavn* + `Copenhagen`, *Kunstverein Hamburg* +
  `Hamburg (group exhibitions)` — serif 18 name, sans 14 `primary-500` city
- **AND** the CTA *Enquire about a work* is **228 × 54**, `border border-primary-900`, **radius 0** (the only
  square control), `14/500`-equivalent `px-8 py-3.5`, hover `bg-primary-900 text-primary-50`

### Requirement 8: `#faq` — five questions, single-open accordion

#### Scenario: Band at 1440

- **THEN** `#faq` is **820 px** on white, `py-20 lg:py-28`, content **768 px** (`max-w-3xl`), centred
- **AND** the pill *Practical questions* is `bg-primary-100 text-primary-700`, `14/500`, **28 px** tall, radius
  full; the `h2` *"Before you write"* is **Inter 700 36/40** (`−0.9 px`); the lead is `18 gray-600`
- **AND** the five rows sit in a `divide-y divide-gray-200` list with `24 px` vertical padding, the question
  **18/600** on the left and a **32 × 32** `rounded-full bg-gray-100` disc with a `+` icon on the right

#### Scenario: Opening and closing

- **GIVEN** the first question is activated
- **THEN** its panel animates `max-height` from **0** to its `scrollHeight` (measured **88 px**) and the icon
  rotates **45°** into an ×
- **AND** opening a second question closes the first, and the buttons expose `aria-expanded` + `aria-controls`
  (deviation — the reference has neither)
- **AND** with JS disabled or before hydration every answer is readable (panels are not `display: none` in
  markup)

### Requirement 9: `#contact` — gradient close with a dot grid and a real enquiry form

#### Scenario: Band at 1440

- **THEN** `#contact` is **500 px** tall (before the added form) on
  `linear-gradient(to right bottom in oklab, #655e55 0%, #2e2b26 100%)`, `py-20 lg:py-28`
- **AND** an `aria-hidden` layer holds two `256 × 256` `bg-white/10` `blur-3xl` discs and the **40 × 40 px** white
  dot grid at **10 %** opacity
- **AND** the centred `max-w-3xl` column holds `h2` *"Three works are currently available"* (**Inter 700 48/48**,
  `−1.2 px`, white, **768 × 96**), the lead in `primary-100` (`18`, `max-w-xl`), and two CTAs
- **AND** CTA 1 *Enquire about a work* is **254 × 56** (`bg-white text-primary-700`, radius 8); CTA 2 *See the
  exhibition history* is **288 × 60** (`border-2 border-white/30`, radius 8) and scrolls to `#exhibitions`

#### Scenario: The merged enquiry form

- **THEN** beneath the CTAs, in a `max-w-xl` block, the reference `/contact/` form appears: `name` (text,
  required), `email` (email, required), `subject` (text), `message` (textarea, required), submit *Send enquiry*
- **AND** each field is labelled, focus-visible, and shows an inline error when submitted empty
- **AND** a valid submit shows a visible success state without a network request, and the copy stays in the
  studio's voice (no "Thanks for reaching out!")

### Requirement 10: Footer — four zones, Component Dock, a working newsletter

#### Scenario: Plate at 1440

- **THEN** the footer is **543 px** on `gray-900` `#111827` with `pt-24` (**96 px**) and no plate padding at the
  bottom
- **AND** the plate is a **12-column** grid (`72 px` columns, `32 px` gaps, **1,216 px**) split **4 / 5 / 3**
- **AND** zone 1 holds the light logo (**200 × 40**), the blurb in `gray-400` (`max-w-xs`), the **Component Dock**
  chip (40 × 40, `rounded-lg bg-gray-800`, `rel="noopener"`), and three `14 gray-400` contact lines with a valid
  `tel:` and `mailto:`
- **AND** zone 2 holds three columns of `14/600 uppercase +0.7 px` white headings with `gray-400` links; the
  first is **THE WORK** (deviation D4) pointing at `#works`, `#statement`, `#exhibitions`, `#acquire`
- **AND** zone 3 holds **STAY UPDATED**, the blurb, and the e-mail field (**46 px**, `bg-gray-800`,
  `border-gray-700`, radius 8) + **Subscribe** (**109 × 46**, `primary-600`, radius 8)

#### Scenario: Bottom bar and form

- **THEN** the bottom bar is `mt-16 border-t border-gray-800 py-8`, *© 2026 Clara Ostend. All rights reserved.*
  in `gray-500`, with *Privacy Policy*, *Terms of Service*, *Style Guide*
- **AND** submitting the newsletter with an invalid address shows an inline error, and with a valid one shows a
  confirmation **without reloading the page**
- **AND** the footer never causes horizontal overflow at any width from 320 to 1440 (defect 1)

### Requirement 11: Theme — light default, working dark toggle, one non-inverting element

#### Scenario: Light tokens

- **THEN** `body` is `#ffffff` on `#111827` text, `#faq` is white, `#acquire` is `#faf9f7`, `#exhibitions` is
  `#1a1815`, the footer is `#111827`

#### Scenario: Dark tokens

- **GIVEN** `<html class="dark">`
- **THEN** `body` is `#030712` with `#f3f4f6` text, the hero gradient is `#111827 → #030712`, the header is
  `gray-950/80`, `#faq` is `#030712`, `#acquire` is `primary-900` at 40 % over that ground, image wells are
  `primary-800`
- **AND** `#exhibitions`, `#contact` and the footer keep their light-mode grounds (they have no `dark:` variant)
- **AND** the `h1`'s `.text-gradient` keeps `#655e55 → #a9a196` — the page's only element that does not invert —
  and stays legible on `#030712`

#### Scenario: Token contract

- **THEN** `@theme` declares the **ten `primary` steps**, the **three existing `accent` steps**, and the two
  families (`Lora`, `Inter`); no `accent` step outside 400/600/700 is invented
- **AND** no ColorLib string, source slug or author name appears in any app file

### Requirement 12: Responsive integrity from 320 to 1440

#### Scenario: No horizontal scroll

- **THEN** `scrollWidth === clientWidth` at **320, 390, 640, 768, 1024, 1280 and 1440** — the reference fails
  this at 320/390 (**401 px**), so the footer form must shrink (defect 1)
- **AND** the fixed chrome (mobile bar, cookie strip, back-to-top) never widens the document

#### Scenario: Heights track the reference

- **THEN** the document is within **~5 %** of **8,356** px at 1440/1280, **8,224** at 1024, **9,636** at 768 and
  **12,450** at 390 (plus the height of the added enquiry form, documented in the PR)
- **AND** the works grid is **3 / 2 / 1** columns at 1440 / 768 / 390, the statement stacks below 1024, and the
  header drops to 65 px below 1024

### Requirement 13: Accessibility, semantics and motion

#### Scenario: Structure

- **THEN** there is exactly one `h1`, and the band `h2`s follow it in document order; the six paintings are a
  `ul role="list"` of `figure` + `figcaption`, and the seven exhibitions an `ol role="list"`
- **AND** every painting image has an `alt` naming the work, year and medium (*"Kitchen, four in the afternoon,
  2032, Oil on linen"*); the decorative statement photo is `alt=""`
- **AND** every icon-only control has an `aria-label`, and the status dots are `aria-hidden` with the status text
  exposed

#### Scenario: Interaction

- **THEN** every interactive element has a visible `focus-visible` ring, and the FAQ buttons expose
  `aria-expanded` + `aria-controls`
- **AND** the modal traps focus, closes on Escape, and restores focus to *Watch Demo*
- **AND** nothing depends on hover alone (card scaling is decorative; captions are static)

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** the typewriter does not cycle, the two hero blobs do not float, the parallax listener does not write
  transforms, the reveal-on-scroll does not run, and all 16 `[data-animate]` elements are visible at
  `opacity: 1` (never stuck invisible)

### Requirement 14: Copy fidelity

#### Scenario: Voice preserved

- **THEN** the hero, the statement's four paragraphs and pull quote, the five FAQ answers, the three acquire
  bodies with their fine print, the seven exhibition rows and the footer blurb appear in substance as quoted in
  §Band-by-band content — first person, no exclamation marks, no "Welcome", no superlatives
- **AND** the prices are **DKK** and the sizes **centimetres**, exactly as tabulated; exactly **three** works are
  *Available*
- **AND** the refusal lines survive (*"I will say no to most requests and it is nothing personal"*, *"No. It is a
  reasonable question…"*, *"Studio prices are not."*)

## Verification checklist

- [ ] `apps/pentimento` exists, `@free-react-templates/pentimento` in `package.json`, `public/CNAME` =
      `pentimento.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string, no "Ostend", no "Clara" in any app
      file (comments included); the wordmark is an inline SVG/text component, not a raster
- [ ] bands in this order: header → hero → `#works` → `#statement` → `#exhibitions` → `#acquire` → `#faq` →
      `#contact` → footer
- [ ] header **81 px** at 1440 / **65 px** below 1024, `sticky`, `bg-white/80` + blur + 1 px border, `shadow-lg`
      past 50 px; nav **only at ≥1024**; logo **200 × 40**; Enquire **90 × 40**; mobile panel **446 px** at 390
- [ ] hero **1,240 px** at 1440 / **895** at 390: badge **279 × 34**, `h1` Inter 700 **60/60** `−1.5 px` with the
      `#655e55 → #a9a196` gradient second line, lead **20/28** `max-w-2xl`, CTAs **235 × 48** + **195 × 50** +
      48 px play disc, image **1,024 × 512** `rounded-2xl` ring + `shadow-2xl`
- [ ] typewriter cycles the three phrases every **3 s**, the `h1` keeps a **static accessible name**, and the
      heading's height never changes
- [ ] `#works` **1,732 px** white: eyebrow `accent-700` `+2.4 px`, `h2` **Lora 500 36/40** `−0.9 px`, grid
      **3 × 384** with 32/56 gaps, images **384 × 480** in `primary-100` wells, six cards with the tabulated
      titles, media, sizes, statuses and prices, **exactly three Available**
- [ ] `#statement` **1,103 px**: 487.6 / 536.4 split with 64 px gap, sticky figure at `top-28`, image 4:5 in a
      `primary-100` well, four `16/29.6` `primary-700` paragraphs, pull quote Lora 20/32.5 italic `primary-800`
      with a **2 px `accent-600`** left rule
- [ ] `#exhibitions` **1,395 px** `#1a1815`: rows **832** wide, `80/56 px` year column, tags `4 px` radius
      (Solo `accent-600`, others `primary-700`), titles Lora italic `primary-100`, venues `primary-300`, seven
      rows with years exactly as tabulated
- [ ] `#acquire` **942 px** `#faf9f7`: three **341 px** cards 01/02/03 with `accent-600` numerals, `primary-200`
      hairlines under each fine print, *Represented by* pair, and the **228 × 54 radius-0** outline CTA
- [ ] `#faq` **820 px** white: pill 28 px, `h2` **Inter 700 36/40**, five rows in a `divide-y` list, 32 px plus
      disc rotating 45°, single-open accordion with `aria-expanded`
- [ ] `#contact` **500 px** + form: 135° `#655e55 → #2e2b26` gradient, two `white/10` blobs, **40 px** white dot
      grid at 10 %, `h2` Inter 700 **48/48** `−1.2 px`, CTAs **254 × 56** + **288 × 60**, the four-field form
      with validation and a real success state
- [ ] footer **543 px** `#111827` `pt-24`: 12-col **4/5/3**, Component Dock chip 40 × 40, **THE WORK** column
      pointing at real bands, newsletter **46 px / 109 × 46** with inline validation, bottom bar
      `mt-16 border-t py-8`
- [ ] chrome: preloader non-blocking, 2 px stone progress bar, skip link, 48 px back-to-top past 300 px, cookie
      strip after 1.5 s with `accepted`/`essential`, never covering the footer row or the mobile bar
- [ ] both themes shipped: light default, `prefers-color-scheme` honoured, choice persisted, dark `body`
      `#030712`, the `text-gradient` the only non-inverting element
- [ ] fonts: **Lora 400–700 + true italic** and **Inter 300–700** from Google Fonts with `display=swap` (both
      verified **200**); the sans→serif→sans heading rhythm preserved (`h1` Inter, four band `h2`s Lora,
      `#faq`/`#contact` Inter)
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 640 / 768 / 1024 / 1280 / 1440; document height within ~5 %
      of 8,356 (1440) / 8,224 (1024) / 9,636 (768) / 12,450 (390)
- [ ] zero bare `#` anchors, one well-formed `tel:`, every painting image has a descriptive `alt`
- [ ] reduced motion: no element stuck at `opacity: 0`, no typewriter, no blob float, no parallax, no smooth
      scrolling
- [ ] 100 % coverage on the new app and `scripts/verify-app.sh pentimento` green
