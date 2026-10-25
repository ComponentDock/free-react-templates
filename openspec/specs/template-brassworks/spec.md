# Template: Brassworks (Business — plumbing supply trade counter, sold as stock depth)

## Purpose

A one-page site for a **plumbing supply house** whose product is not a product but **what is on the
shelf**: four thousand lines, priced on account, collected from the counter. The design is a
*shop*, not a brochure — a 40 px **ink utility bar** (`#1f2328`) carries opening hours and the counter
phone; a **sticky two-row header** pairs a wordmark with a full-width **catalogue search** and a
"Request a quote" button that only appears at ≥1280 px; and under it a 49 px **catalogue nav rail**
(`Catalogue · Brands · Trade accounts · Showroom · Contact`) that reads like a stock system's menu, not
a marketing site's.

The palette is two neutrals and one fired clay: warm off-white `#fafaf9` ground, hairline `#dededb`
rules, graphite text `#1f2328`, and a **terracotta brand `#b5652f`** used for exactly three things —
the primary button, the uppercase eyebrows, and the eyebrow-weight price line inside each product card.
The last band swaps the clay for its darker sibling `#925026` full-bleed, and one mid-page band is
**near-black `#1f2328`**, which is where the page turns from catalogue to trade argument.

Three details give the design its discipline:
**a hairline-mosaic brand grid** (one 1 px `#dededb` gutter, `gap: 1px` over a `bg-ink-200` ground, so
eight supplier tiles read as one ruled table rather than eight cards);
**square product photography** (`aspect-square`) inside `16px`-radius cards with a three-row
label/value `<dl>` and a full-width outlined "Request a quote" button at the bottom; and
**type that shifts face once** — the whole page is Poppins, except the band title `Lines we are
holding deep` and every product-card `<h3>`, which are serif (`ui-serif, Georgia`). There is no
photographic hero, no carousel, no testimonial, no parallax and no scroll animation: the only motion is
a **preloader spinner**, a **0.5 px scroll-progress bar** in brand clay, a header shadow after 50 px,
and a back-to-top disc after 300 px.

Site-wide dark mode is real (`html.dark`, `localStorage.theme`, `prefers-color-scheme` default) and must
be built, not stubbed — see Requirement 10.

Recreation of the ColorLib "Fixtura" design
(https://colorlib.com/wp/template/fixtura/, live preview
https://preview.colorlib.com/theme/fixtura/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `fixtura`
* **ColorLib page:** https://colorlib.com/wp/template/fixtura/ — HTTP 200, **111,654 B**
  (sha256 `d49218dd…62a6`), `<title>` **"Plumbing supply and fixture showroom in Sacramento | Fixtura
  Supply"** on the preview. The catalogue entry's `og:image` is
  `https://colorlib.com/wp/wp-content/uploads/sites/2/fixtura-template.jpg`, so this design's screenshot
  name is `fixtura-template.jpg` (not the `fixtura.jpg` a naive guess produces — that path is **404**).
* **Live preview:** https://preview.colorlib.com/theme/fixtura/ — **HTTP 200, 41,456 B**
  (sha256 `2e6b8461…a226`), read 2026-10-25 with `curl -4` (this host resolves an IPv6 address that is
  blocked, so **every** fetch needs `-4`). An **Astro** build: one hashed stylesheet
  (`_astro/Base.Cf1ozeHK.css`, 54,868 B) and one hashed behaviour bundle
  (`_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js`, 16,233 B) — no per-page CSS, no
  Bootstrap, no jQuery, no inline styles beyond what the scripts write.
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**fixtura-template.jpg** —
  HTTP 200, **375,189 B**, `image/jpeg`, **2400×1892** (sha256 `4cafc707…7e20`). Unlike most of the
  catalogue's captures it is a **macOS browser window on a light desk ground**, framing the live page
  from the top down to the first row of featured products — i.e. it confirms the utility bar, the
  two-row header, the hero and the four category cards, and shows nothing of the dark bands. The live
  DOM is the authority for everything below the fold.
* **New name:** `brassworks` (`apps/brassworks`, `@free-react-templates/brassworks`) — one lowercase
  word: *brassware* is the fixture trade's own word for taps, valves and fittings, and "-works" is the
  suffix the trade gives a supply house (brickworks, ironworks). It is not the source name and not a
  product name. No `apps/brassworks`, no `openspec/specs/template-brassworks/`, no
  `docs/templates/brassworks/`, `git grep -il brassworks origin/main` prints nothing, and the three
  ColorLib URL forms `wp/template/brassworks/`, `preview.colorlib.com/theme/brassworks/`,
  `preview.colorlib.com/theme/bootstrap/brassworks/` all return **404** (checked 2026-10-25).
  Do not rename without re-running those four checks.
* **Deploy target:** https://brassworks.free.componentdock.com (`apps/brassworks/public/CNAME`,
  `homepage` in `apps/brassworks/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: **`## Business (371)`** (line 880 on `origin/main` `bda408d26`), the section that
  already holds the sibling trade designs Airwise→Thermly, Curbline→Plantroom, Dowser→Aquifer,
  Everhot→Kettle, Fernhill→Smallpaw and Heatline→Emberly. It is ordered by **ColorLib source name**, so
  this row belongs between **`Fitzone 2`** and **`Flatter`** (`Fi-t` < `Fi-x` < `Fl-`).

### Why this design has no row (catalogue gap, measured 2026-10-24/25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, every row `[x]` — but the catalogue is not complete: all
40 pages of https://colorlib.com/wp/templates/ were crawled and compared with the 1,631 slugs the
checklist cites, and **256 designs are on the listing that the checklist never recorded** (42
standalone + 214 snippet variants). The census and both buckets are in `docs/catalog-coverage.md`,
whose standalone table already carries this design's line: `fixtura` — *preview 200, 41456 B* (the byte
count matches this run's fetch exactly).

**Thirteen** of the 42 standalone designs were prepped before this run — seven shipped (Thermly,
Plantroom, Veranda, Flowcert, Aquifer, Smallpaw, Kettle) and six pending (Chalkline, Closeknit, Stoke,
Percline, Emberly, Quarto) — and they established the hand-off pattern this spec follows. This is the
**fourteenth**. No spec on main names `theme/fixtura` (`git grep -l 'theme/fixtura/' origin/main --
openspec docs` → nothing), no app named `fixtura` or `brassworks` exists, so this prep is not a
duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this
line into `## Business` **in source-name alphabetical order** (between **Fitzone 2** and **Flatter**)
and bump the heading count:

```
- [x] **Fixtura** — [colorlib](https://colorlib.com/wp/template/fixtura/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/fixtura-template.jpg) · [brassworks](https://brassworks.free.componentdock.com)
```

⚠️ **Re-measure the count before you write it.** On `origin/main` `bda408d26` the section reads
`## Business (371)` over **371** rows (line 880; the next heading is `## Charity (37)` at line 1254).
Adding Fixtura makes **372**. Count the rows; do not copy this number.

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/fixtura/` page (DOM authority) | 41,456 | `2e6b8461c6a5400900708b6d6ae4456287c939e33a6bb437fcb30e0fded6a226` |
| `_astro/Base.Cf1ozeHK.css` (token authority) | 54,868 | `50837b009e7df8d3865d0d4644f17ab597dc0c896f98a2be125fdc49aba714e5` |
| `_astro/Base.…BLoalVWc.js` (behaviour authority) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| catalog screenshot `fixtura-template.jpg` (2400×1892 JPEG) | 375,189 | `4cafc7074e32ca502cb1c4a94e345079e172a141cc1164ad3d153877ddc97e20` |
| `colorlib.com/wp/template/fixtura/` (catalog entry) | 111,654 | `d49218dd3f8d3eeb64f52f248e6bb9fafbba83df29019c2d0d7dcdb0e75c62a6` |
| `wp-content/uploads/sites/2/fixtura.jpg` (the *wrong* guess) | 146 | **HTTP 404** (`text/html`) — use `fixtura-template.jpg` |
| `theme/bootstrap/fixtura/`, `theme/bb/fixtura/` | — | not probed; the Astro preview path is the only one the catalogue links |

### The reference is twelve live pages, not one

All probed `-L` (the extension-less forms 308 to the trailing-slash form; both resolve):

| page | `<title>` | `h1` | bytes |
| --- | --- | --- | ---: |
| `/theme/fixtura/` | Plumbing supply and fixture showroom in Sacramento \| Fixtura Supply | Fixtures, water heaters and fittings, in stock. | 41,456 |
| `catalogue/` | Catalogue \| Fixtura Supply | Four categories, four thousand lines | 26,729 |
| `catalogue/fixtures/` | Fixtures \| Fixtura Supply | Fixtures | 38,633 |
| `catalogue/water-heaters/` | Water heaters \| Fixtura Supply | Water heaters | 38,898 |
| `catalogue/pipe-and-fittings/` | Pipe and fittings \| Fixtura Supply | Pipe and fittings | 38,947 |
| `catalogue/tools/` | Tools \| Fixtura Supply | Tools | 38,551 |
| `brands/` | Brands \| Fixtura Supply | What we carry, and how deep | 34,807 |
| `trade-accounts/` | Trade accounts \| Fixtura Supply | Most of our counter is on account | 36,339 |
| `showroom/` | Showroom \| Fixtura Supply | Turn the taps on before you specify them | 27,578 |
| `contact/` | Contact Fixtura \| Fixtura Supply | Contact Fixtura | 28,619 |
| `privacy/` | Privacy Policy \| Fixtura Supply | Privacy Policy | 30,836 |
| `terms/` | Terms of Service \| Fixtura Supply | Terms of Service | 29,610 |

Every page carries `<meta name="robots" content="noindex, nofollow">` (host chrome, not a design
feature). Per house precedent for catalogue/detail pages, **only the landing page is built**; the other
eleven are inventoried in *Inner-page inventory* for copy the landing page abbreviates.

## Design tokens (measured from `Base.Cf1ozeHK.css` and the live render)

Tailwind v4, one `@theme`-style block, **no `@font-face` at all**, and — this matters — **exactly one
class the markup uses has no emitted rule** (`bg-sand-50`; see *The one un-emitted class*).

### Brand ramp — `primary`

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#fbf3ee` | `hover:bg-primary-50` on the closing band's white CTA |
| `primary-100` | `#f6e5d9` | **the closing band's lede** (`text-primary-100`) |
| `primary-200` | `#ebc8b0` | available in the sheet (`border-primary-200`); unused on the landing page |
| `primary-300` | `#dea481` | `hover:text-primary-300` in the utility bar and the `dark:` hover on light ground — the lightest usable clay, never on a white band |
| `primary-400` | `#cc7e51` | **the eyebrow on the near-black band** (`text-primary-400`), every `dark:` eyebrow |
| `primary-500` | `#be6b38` | input focus border + ring (`focus:border-primary-500`, `ring-primary-500/20`), hero-card hover border |
| `primary-600` | `#b5652f` | **brand** — every solid button (`bg-primary-600`), the scroll-progress bar, the preloader spinner's arc, the back-to-top disc, the brands eyebrow |
| `primary-700` | `#925026` | **every eyebrow on a light ground**, the product-card price line, the closing band's ground, the solid CTA's label |
| `primary-800` / `-900` | — | **not defined** — do not invent them |

### Neutral ramp — `ink`

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#fafaf9` | **body ground** (measured `rgb(250,250,249)`), **search input ground**, **hero category-card ground** |
| `ink-100` | `#f0f0ee` | product-card border (measured `rgb(240,240,238)`), the header nav rail's top border, the showroom hours rules, the product `<dl>` top rule |
| `ink-200` | `#dededb` | **every structural hairline**: header bottom, hero bottom, brands band top+bottom, hero/category card borders, search-input border, **the brands mosaic's gutter fill** |
| `ink-300` | `#b5b5b0` | the utility bar's second sentence, notice lines on dark |
| `ink-400` | `#7c7c76` | card sub-labels ("180 lines stocked"), placeholder text, `<dt>` labels, product-card notice |
| `ink-500` | `#57574f` | **body copy on light grounds** (hero lede, band ledes), the dark toggle's icon |
| `ink-600` | `#3a3a34` | the desktop nav rail's links, the showroom address, the mobile-toggle icon |
| `ink-700` | `#2a2a26` | the product `<dl>`'s values, product-card button labels |
| `ink-800` | `#1f2328` | **body text colour** (measured `rgb(31,35,40)`), every heading, **the utility bar's ground**, **the trade band's ground** |
| `ink-900` | `#14171a` | defined; unused on the landing page |

### Sand, and the dark greys

| token | value | where |
| --- | --- | --- |
| `sand-50` | **not emitted** | `bg-sand-50` is the featured band's intended ground; with no rule it falls through to the body (`#fafaf9`) — the band's measured ground is **`rgba(0,0,0,0)`**. Reproduce the *rendered* value; see Deviation 2 |
| `gray-900` | `#111827` | **the footer's ground** (measured `rgb(17,24,39)`) — note this is *not* `ink-800`; also `dark:bg-gray-900` on the hero |
| `gray-800` | `#1f2937` | dark-mode hairlines (`dark:border-gray-800`), footer social discs, the footer's bottom-bar rule |
| `gray-700` | `#374151` | `dark:border-gray-700` on the search inputs and the cookie "Decline" button |
| `gray-950` | `#030712` | **the dark body ground** (measured `rgb(3,7,18)`) and `dark:bg-gray-950` on the featured / brands / showroom bands, the preloader and the mobile panel |
| `gray-400` | `#9ca3af` | the footer's blurb, link columns and contact lines |
| `gray-500` | `#6b7280` | the footer's bottom bar and social glyphs |

### The one un-emitted class (fidelity trap — read before writing CSS)

`bg-sand-50` is **in the markup and absent from the sheet** (the Astro content scan missed it). Nothing
else is: `text-primary-300` (`#dea481`), `border-gray-700` (`#374151`) and `bg-gray-950` (`#030712`) are
all emitted in their `dark:`/`hover:` forms, so the dark mode is complete — the only visual fallback in
the whole theme is the featured band's ground.

Consequences measured in the browser: the featured band renders on the body ground (`#fafaf9`), **not**
on a warm sand. The recreation defines `sand-50` (as `#fafaf9`, the rendered value) and may use it on
that band, or use `bg-ink-50` — record the choice in the PR. Do **not** give the band a different tint
than the body: the two hairlines that bound the brands band stop reading as separators if you do.

### Typography

One loaded family, one that is declared and not loaded:

* **Poppins** — the whole page. The sheet sets `font-family: Poppins, system-ui, sans-serif` in the
  preflight/base layer but ships **no `@font-face` and no Google Fonts `<link>`**, so on a machine
  without Poppins installed the preview renders in `system-ui` (measured `font-family` string is
  `Poppins, system-ui, sans-serif`; glyphs are fallback). For the recreation load Poppins from Google
  Fonts (`css2?family=Poppins:wght@400;500;600;700` → HTTP 200, verified) via `<link>`; never copy a
  font file. Weights actually used: **400, 500, 600, 700**.
* **Serif** — `--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`, used in
  exactly two places: the featured band's `h2` and every product-card `h3`. Linux CI has no
  `ui-serif`/Georgia, so specify `Georgia, "Gelasio", "Times New Roman", serif` and load **Gelasio**
  (metric-compatible, Google Fonts 200, verified) — the same call the Quarto prep made.
* No italics, no uppercase headings, no gradient text.

Measured type scale (`body` 16 px / 1.5):

| role | reference rule | 1440 px | 992 px | 576 px | 390 px |
| --- | --- | ---: | ---: | ---: | ---: |
| `h1` (hero) | `text-4xl leading-tight tracking-tight` → `sm:text-5xl` | **48** / 60, `-1.2px` | 48 | **36** / 45, `-0.9px` | 36 |
| `h2` featured (serif) | `font-serif text-3xl sm:text-4xl` | **36** / 40, 600 | 36 | **30** / 36 | 30 |
| `h2` brands | `text-2xl font-bold` (no tracking) | **24** / 32, 700 | 24 | 24 | 24 |
| `h2` trade / showroom | `text-3xl font-semibold tracking-tight sm:text-4xl` | **36** / 40, 600 | 36 | **30** / 36 | 30 |
| `h2` closing CTA | `text-3xl font-bold tracking-tight sm:text-4xl` | **36** / 40, 700 | 36 | 30 | 30 |
| `h3` product card | `font-serif text-lg font-semibold` | **18** / 27, 600 (serif) | 18 | 18 | 18 |
| band lede `p` | `text-lg` | **18** / 28, `ink-500` | 18 | 18 | 18 |
| eyebrow | `text-sm font-semibold uppercase tracking-wide` | **14**, `0.35px`, `primary-700` | 14 | 14 | 14 |
| brands tile name | `text-base font-bold tracking-tight` | **16**, `-0.4px` | 16 | 16 | 16 |
| brands tile sub | `text-sm` | **14**, `ink-400` | 14 | 14 | 14 |
| solid CTA (hero) | `text-sm font-semibold` | **14**, white | 14 | 14 | 14 |
| unit bar | `text-xs` | **12**, `ink-100` | 12 | 12 | 12 |
| nav rail link | `text-sm font-semibold` | **14**, `ink-600` | 14 | — (menu) | — (menu) |
| product `<dt>`/`<dd>` | `text-sm` | **14** / 21 | 14 | 14 | 14 |
| footer column link | `text-gray-400` (16 px default) | **16** / 24 | 16 | 16 | 16 |
| footer column head | `text-sm font-semibold uppercase tracking-wider` | **14**, `0.7px`, white | 14 | 14 | 14 |

Letter-spacing is the design's tell: `tracking-tight` = **`-0.025em`** on every `h1`/`h2`/brand tile
(measured `-1.2px` at 48 px, `-0.9px` at 36 px), `tracking-wide` = **`0.025em`** on every uppercase
eyebrow, `tracking-wider` = **`0.05em`** on footer column heads.

### Radii, shadows, focus

| element | measured | notes |
| --- | --- | --- |
| `rounded-lg` | **8 px** | every button, both search inputs, the brands mosaic's outer clip, the cookie buttons, the social discs (with `p-2.5`) |
| `rounded-xl` | **12 px** | the four hero category cards, the showroom photo |
| `rounded-2xl` | **16 px** | every featured product card |
| `rounded-full` | **50 %** | the 48 px back-to-top disc, the preloader spinner |
| shadows | — | **only two**: the header gains `shadow-lg` at `scrollY > 50`; the back-to-top disc carries `shadow-lg shadow-primary-600/25` (`shadow-xl` on hover). Nothing else on the page has a shadow — no card elevation, no CTA elevation |
| focus (search) | `ring-2 ring-primary-500/20` + `border-primary-500` + `bg-white` | the input's own focus treatment |
| focus (back-to-top) | `focus:ring-2 focus:ring-primary-500 focus:ring-offset-2` | the only element with a ring on a button |
| skip link | `focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg` | 8 px radius, white text, fixed 16/16 |

## Rhythm, containers and measured heights

* **Container** — `max-w-7xl` = **1280 px**, `mx-auto`, `px-4` (16) below 1024 and `px-8` (32) at ≥1024.
  At 1440 the content box is **1216 px starting at x = 112**; at 1024 it is 960 at x = 32; at 390 it is
  358 at x = 16.
* **Utility bar** — 40 px (`h-10`), `#1f2328`, 12 px text, `ink-100`.
* **Header** — `sticky top-0 z-50`, `bg-white/95` + `backdrop-blur`, 1 px `#dededb` bottom border.
  Row 1 is `h-16` (64) → **`lg:h-20` (80)**; the nav rail is **49 px** (48 + the 1 px top border) and
  only exists at ≥1024. **Total 130 px at ≥1024, 65 px below.**
* **Hero** — `py-12` (48) → **`lg:py-16` (64)**; copy column `max-w-2xl` = **672 px**; card row
  `mt-10` (40).
* **`section` bands** (featured + showroom) — `padding-block: 112px` at ≥1024, **80 px** below.
* **Brands band** — `py-12` = 48 px, hairline top **and** bottom, `mb-8` (32) under its head.
* **Trade band** — `py-16` (64) → `py-20` (80); 12-column grid, left `lg:col-span-5`, right
  `lg:col-span-7`, `gap-10` (40) → `lg:gap-16` (64).
* **Closing CTA** — `py-20` (80) → `py-28` (**112**), centred `max-w-3xl`.
* **Footer** — `pt-16` (64) → `lg:pt-24` (96), **no bottom padding** (the bottom bar's `py-8` supplies
  it); 12-column grid, brand `lg:col-span-4`, link columns `lg:col-span-5` (internally
  `sm:grid-cols-3`), trade block `lg:col-span-3`; bottom bar `mt-16` + `border-t` + `py-8`.
- **Document height** (measured, live): **4,831 px at 1440 and 1280** · 4,907 at 1024 · **6,641 at 992
  and 768** · 9,187 at 576 · **9,130 at 390** · 9,164 at 360.
  Band heights at 1440: utility 40 · header 130 · hero **786** · featured **1,073** · brands **431** ·
  trade **516** · showroom **847** · closing **440** · footer **568**.
- **Scrolling** — `html { scroll-behavior: smooth }` **is** in the sheet (no `scroll-padding-top`), and
  there is **no `@media (prefers-reduced-motion)` block anywhere** in it. The back-to-top's smooth jump
  depends on that rule; the recreation keeps the rule **and** adds the reduced-motion guard the
  reference lacks (Deviation 14).

## Reference document order

```
a.skip                        "Skip to content" → #main-content (visible on focus, brand ground)
div#scroll-progress           0.5 px (h-0.5) primary-600 bar, fixed top-0, width = scroll %
div#preloader                 fixed inset-0 z-[100] white (dark: gray-950), 40 px spinner, removed on load
div.utility-bar               bg-ink-800 · 40 px · hours + "next-day collection" | Trade accounts · phone
header[data-header]           sticky · row 1 (logo · search · dark toggle · quote CTA · menu toggle)
                              row 2 nav rail (5 links, ≥1024)
                              + div[data-mobile-<menu>] panel (<1280): search · 5 links · quote CTA
main#main-content
  1  section (hero)           white, border-b · eyebrow · h1 · lede · CTA · 4 category cards
  2  section#featured         `.section` py-28 · "This month" eyebrow · serif h2 · lede · 4 product cards · notice
  3  section#brands           border-y · eyebrow · h2 · 8-tile hairline mosaic · notice
  4  section#trade            bg-ink-800 · eyebrow primary-400 · h2 white · lede · CTA · notice | 3-column <dl>
  5  section#showroom         `.section` white · eyebrow · h2 · lede · address · hours <dl> · notice · CTA | 2:1 photo
  6  section#contact          bg-primary-700 · centred h2 · lede · white CTA + outlined phone CTA
footer                        bg-gray-900 · brand + socials + contact | 3 link columns | trade block | bottom bar
div#cookie-consent            fixed bottom, role="dialog" aria-label="Cookie consent", 1.5 s delay
button#back-to-top            fixed 24/24, 48 px disc, appears at scrollY > 300
```

There is **no** carousel, no testimonial slider, no FAQ accordion, no lightbox, no count-up and no
`[data-animate]` element in this theme, even though the shared bundle implements all of them — they are
kit, not design (Deviation 8).

## Content inventory (verbatim roles — paraphrase freely, keep the kind)

**Utility bar** — left `Counter open Mon - Fri 06:30 - 17:00, Sat 07:00 - 13:00`, then a second span
`Next-day collection on stocked lines` (hidden below `sm`), the whole `<p>` `truncate`; right
`Trade accounts` (hidden below `sm`) and the phone `(555) 010-0266` (`tel:5550100266`).

**Header row 1** — wordmark (SVG logo, 180 × 36 at ≥1024 / 160 × 32 below, dark variant swaps via
`dark:block`); search `form[role=search]` → `GET /catalogue?q=`, placeholder
`Search fixtures, heaters, fittings…`, visually hidden label `Search the catalogue`; moon/sun toggle
(`aria-label="Toggle dark mode"`, hidden below `sm`); `Request a quote` solid CTA (only ≥1280);
hamburger (`aria-label="Open menu"`, `aria-expanded`, only <1280).

**Header row 2 (nav rail)** — `nav[aria-label="Catalogue navigation"]`, five links at `14px/600`,
`gap-8` (32): `Catalogue` · `Brands` · `Trade accounts` · `Showroom` · `Contact`, each carrying
`data-nav-link`.

**Mobile panel** — its own `nav`: search input (placeholder `Search the catalogue…`), the same five
links as `block py-3` rows at 16 px/600, then a full-width solid CTA `Request a quote`.

**Hero** — eyebrow `Sacramento · Counter and showroom` · `h1` `Fixtures, water heaters and fittings, in
stock.` · lede `Four thousand lines held on site, trade pricing on account, and a showroom where you can
actually turn the taps on before specifying them.` · CTA `Open a trade account`. Four category cards,
each a whole-card link, image (`aspect-[4/3]`) + name + count: `Fixtures` / `180 lines stocked` ·
`Water heaters` / `64 lines stocked` · `Pipe and fittings` / `900 lines stocked` · `Tools` /
`240 lines stocked`.

**Featured band** — eyebrow `This month` · serif `h2` `Lines we are holding deep` · lede `Prices are
shown to account holders once you are logged in. Everyone else gets a quote the same day, which is
usually faster than a cart would be.` Four product cards (square photo, serif `h3`, blurb, 3-row `<dl>`,
price line, full-width outlined CTA):

1. `Wall-hung WC frame` — *Concealed cistern frame with dual flush plate, to standard stud spacing.* —
   `Projection` 500 mm · `Flush` 6/3 litre dual · `Stock` 40+ on site — `Trade price on account`
2. `Tankless gas heater` — *Condensing tankless, sized for three simultaneous outlets.* —
   `Flow rate` 9.8 gpm · `Efficiency` 0.96 UEF · `Stock` 12 on site — `Trade price on account`
3. `Press fittings, copper` — *Full range in 1/2 to 2 inch, with press tool hire available.* —
   `Sizes` 1/2 in - 2 in · `Standard` ASME B16.51 · `Stock` Deep — `Trade price on account`
4. `Sectional drain machine` — *For 3 to 6 inch lines, available to buy or to hire by the day.* —
   `Capacity` 3 in - 6 in · `Cable` 100 ft sections · `Hire` Day or week — `Hire from $95 a day`

All four CTAs read `Request a quote`. Notice under the grid: `Sample products and stock figures for
template demonstration. Replace with your own before launch.`

**Brands band** — eyebrow `Brands` · `h2` `What we carry` · eight tiles (`name` / `range`):
`Northgate`/Fixtures and brassware · `Cascade`/Water heaters · `Ferro-Line`/Pipe and fittings ·
`Wrenchworks`/Tools and hire · `Kelvin`/Valves and controls · `Basin & Bar`/Showroom ranges ·
`Duralite`/Drainage · `Provex`/Consumables. Notice: `Sample brand names for template demonstration.
Replace with the ranges you actually stock — listing a brand you cannot supply is the fastest way to
lose an account customer.`

**Trade band** — eyebrow `Trade accounts` (this one is `primary-400`, the only eyebrow on dark) · `h2`
`Most of our counter is on account` · lede `Trade pricing, thirty-day terms and next-day collection on
stocked lines. The application takes about ten minutes and we turn it round the same week.` · CTA
`Open an account` · notice `Sample terms for template demonstration.` Right side, a three-column `<dl>`:
`Trade pricing` / *Banded by volume and reviewed every quarter, not fixed at whatever you negotiated the
year you opened.* · `Thirty-day terms` / *Statement at month end, one invoice, and a named person on the
phone who knows your account.* · `Collection, not delivery slots` / *Order by four, collect from the
counter the next morning. No waiting in for a van that says "before six".*

**Showroom band** — eyebrow `Showroom` · `h2` `Turn the taps on before you specify them` · lede
`Sixty bays of fixtures plumbed in and working, which is worth an hour of anyone's time before
committing a client to a range from a catalogue photograph.` · `address.mt-6` (not italic, `ink-600`):
`Fixtura Supply` / `2200 Del Paso Boulevard` / `Sacramento, CA 95815` · hours `<dl class="mt-6 max-w-sm">`
with three hairline rows: `Monday to Friday` 06:30 - 17:00 · `Saturday` 07:00 - 13:00 · `Sunday` Closed ·
notice `Sample details for template demonstration. Bring the drawings and we will pull the matching
ranges before you arrive.` · CTA `Book a showroom visit` · photo `alt="The showroom interior"`, 2:1.

**Closing band** — centred `h2` `Need something priced?` · lede `Send a schedule or a photograph of the
fitting and we will quote it the same day.` · white CTA `Request a quote` + outlined CTA
`Call the counter` with a 20 px phone glyph.

**Footer** — brand logo (light variant) · blurb `Plumbing supply and fixture showroom in Sacramento.
Trade accounts, next-day collection and a catalogue you can get priced properly.` · three social discs
(Twitter, Instagram, LinkedIn — all `href="#"`, i.e. **three dead anchors**, the page's only ones) ·
`2200 Del Paso Boulevard, Sacramento, CA 95815` · `(555) 010-0266` · `counter@fixturasupply.example`
(`mailto:`). Columns: **Catalogue** (`Fixtures`, `Water heaters`, `Pipe and fittings`, `Tools`) ·
**Company** (`Catalogue`, `Brands`, `Trade accounts`, `Showroom`) · **Support** (`Contact`, `Privacy`,
`Terms`) · **Trade accounts** block (`Trade pricing, 30-day terms and next-day collection on stocked
lines. Apply in about ten minutes.` + CTA `Open a trade account`). Bottom bar: `© 2026 Fixtura Supply.
All rights reserved.` + `Privacy Policy` · `Terms of Service`.

**Cookie banner** — `role="dialog"`, `aria-label="Cookie consent"`, fixed to the bottom, white ground,
`border-t`, `shadow-lg`: `We use cookies to enhance your experience. By continuing to visit this site
you agree to our use of cookies.` + `Decline` (outlined) and `Accept All` (solid brand).

## Behaviour the recreation must reproduce

Read from the 16,233 B bundle — **seven behaviours are live on this page**, all vanilla:

1. **Theme** — an inline head script applies `document.documentElement.classList.add('dark')` when
   `localStorage.theme === 'dark'` **or** (`'theme'` absent **and**
   `matchMedia('(prefers-color-scheme: dark)')` matches), else removes it. The header toggle flips the
   class and writes `theme` = `'dark'` / `'light'` (measured: `html.className` becomes `"dark"`,
   `body` ground `#030712`, `h1` colour white, `localStorage.theme === 'dark'`; toggling back stores
   `'light'`).
2. **Mobile menu** — `[data-mobile-toggle]` flips `[data-mobile-menu]`'s `hidden` class and mirrors
   `aria-expanded`. The panel is a `nav` with its own search + links + CTA. No Escape handler in the
   bundle: add one (Deviation 6), or the panel traps a keyboard user below 1280 px.
3. **Header shadow** — on `scroll` (passive), `shadow-lg` is added when `scrollY > 50`.
4. **Scroll progress** — `#scroll-progress`'s width is
   `scrollY / (documentElement.scrollHeight - innerHeight) * 100 %`, set on `scroll` and once on load.
   It is a 2 px (`h-0.5`) `primary-600` bar at the very top, `z-[60]`, above the header.
5. **Cookie consent** — if `localStorage['cookie-consent']` is absent, the panel slides in
   (`translateY(100%)` → `0`) after **1,500 ms**; `Accept All` / `Decline` both write the key and slide
   it out, then `remove()` the node.
6. **Back-to-top** — visible only at `scrollY > 300`: `opacity/pointerEvents/translateY` are set inline;
   click scrolls to top smoothly.
7. **Preloader** — `window.load` fades `#preloader` to `opacity: 0` and removes it after **300 ms**. It
   is present in the initial HTML as a `fixed inset-0 z-[100]` white sheet with a 40 px spinner
   (`border-4 border-gray-200 border-t-primary-600`, `animate-spin`).

**Not used here** (in the bundle, zero elements on this page): `[data-counter]` count-ups,
`[data-faq]` accordions, `[data-lightbox]`, `[data-animate]` reveals, the slide carousel, the
rotating-quote ticker. Do not build them.

## Requirements

### Requirement 1: Page chrome and document shell

The app SHALL render, in this order, a skip link, a scroll-progress bar, a preloader and the sticky
header, and SHALL NOT mount any scroll-reveal or smooth-scroll behaviour — the reference has none.

#### Scenario: Visitor loads the page

- **GIVEN** a 1440 px viewport with JavaScript enabled
- **WHEN** the document finishes loading
- **THEN** the white preloader sheet (`z-[100]`, 40 px spinner) fades out within 300 ms and is removed
  from the DOM
- **AND** the first `Tab` press reveals a `Skip to content` link at 16/16 with a `primary-600` ground,
  8 px radius, white 14 px text, pointing at `#main-content`
- **AND** no element overlays the content afterwards

#### Scenario: Scrolling the page

- **GIVEN** the page is at `scrollY = 0`
- **WHEN** the visitor scrolls to the middle of the document
- **THEN** the 2 px `primary-600` progress bar at the top reads approximately 50 % width
- **AND** the header has gained `shadow-lg` (it had none at the top)
- **AND** the header stays `sticky` at `top: 0` with its `bg-white/95` + `backdrop-blur` treatment

### Requirement 2: Utility bar

The app SHALL render a 40 px `#1f2328` utility bar above the header with opening hours, a secondary
line, a trade-accounts link and the counter phone.

#### Scenario: Desktop utility bar (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the bar renders
- **THEN** it is exactly **40 px** tall on `#1f2328` with 12 px `#f0f0ee` text
- **AND** the left `<p>` is `truncate` and reads `Counter open Mon - Fri 06:30 - 17:00, Sat 07:00 -
  13:00` followed by `Next-day collection on stocked lines` in `ink-300`, 12 px apart
- **AND** the right group holds a `Trade accounts` link and `(555) 010-0266` as a `tel:` link, both 600

#### Scenario: Utility bar at 390 px

- **GIVEN** a 390 px viewport
- **WHEN** the bar renders
- **THEN** the second sentence and the `Trade accounts` link are hidden, leaving the hours (truncated
  with an ellipsis, never wrapping) and the phone
- **AND** `scrollWidth === clientWidth`

### Requirement 3: Header, search and mobile panel

The app SHALL render a **sticky two-row header**: row 1 = wordmark, catalogue search, dark-mode toggle,
quote CTA and menu toggle with the reference's exact visibility ladder; row 2 = a 49 px nav rail at
≥1024 only.

#### Scenario: Header at 1440 px

- **GIVEN** a 1440 px viewport
- **WHEN** the header renders
- **THEN** it is **130 px** tall (80 px row + 49 px rail + hairlines), `position: sticky; top: 0;
  z-index: 50`, white at 95 % with a backdrop blur and a 1 px `#dededb` bottom border
- **AND** the wordmark is **180 × 36** at `x = 112`
- **AND** the search input is **762 × 42**, `flex-1`, placeholder `Search fixtures, heaters, fittings…`,
  8 px radius, `#fafaf9` ground, 1 px `#dededb` border, magnifier glyph at `left: 12px`
- **AND** the actions are the dark toggle (`sm:block`), the solid `Request a quote` CTA
  (`xl:inline-flex`, `14px/600`, `px-5 py-2.5`, 8 px radius) and no hamburger
- **AND** the rail holds five 14 px/600 `#3a3a34` links with **32 px** gaps, each `data-nav-link`

#### Scenario: Header between 768 and 1279 px

- **GIVEN** a 1024 or 768 px viewport
- **WHEN** the header renders
- **THEN** the CTA is **absent** (it only appears at ≥1280) and the hamburger **is** present
- **AND** at 1024 the rail is visible (so the hamburger is redundant — reproduce it anyway, the
  reference ships it) and the header is still 130 px; at 768 the rail is gone and the header is 65 px
- **AND** the search is visible from 768 up and hidden at 390

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport
- **WHEN** the visitor presses the hamburger
- **THEN** `aria-expanded` flips `false → true` and the panel drops **in flow** under row 1, full width,
  with a `#f0f0ee` top border, 16 px padding, the catalogue search and five 16 px/600 links at `py-3`
- **AND** a full-width solid `Request a quote` CTA closes the panel's content
- **AND** `Escape` closes it and returns focus to the toggle (added behaviour — Deviation 6)
- **AND** the document width stays 390 px

### Requirement 4: Hero and the four category cards

The app SHALL render the hero as a 672 px copy column over a 2-up (mobile) / 4-up (≥1024) card row of
whole-card links with `4:3` photography.

#### Scenario: Hero at 1440 px

- **GIVEN** a 1440 px viewport
- **WHEN** the hero renders
- **THEN** the band is white with a 1 px `#dededb` bottom border and `64px` of top padding
- **AND** the eyebrow `SACRAMENTO · COUNTER AND SHOWROOM` is 14 px/600 uppercase, `0.025em`, `#925026`
- **AND** the `h1` is **48 px / 60 px / −1.2 px / 600**, `#1f2328`, **672 px** wide, on two lines
- **AND** the lede is 18 px/28 px `#57574f`, 672 px wide
- **AND** the CTA is `#b5652f`, white 14 px/600, `padding: 12px 24px`, **8 px** radius, 24 px below the
  lede
- **AND** the card row starts 40 px below the copy: four **286 px** cards with a 24 px gap, image
  **284 × 213** (`4:3`), 12 px radius on the card, 1 px `#dededb` border, `#fafaf9` ground
- **AND** each card's caption is 16 px of padding, name 16 px/600 `#1f2328`, count 14 px `#7c7c76`
- **AND** hovering a card swaps its border to `#be6b38` and its name to `#925026`

#### Scenario: Hero at 768 and 390 px

- **GIVEN** a 768 px viewport
- **WHEN** the hero renders
- **THEN** the cards are **2-up** at 360 px each (the row goes 4-up only at ≥1024) and the `h1` stays
  48 px
- **GIVEN** a 390 px viewport
- **THEN** the `h1` is **36 px / 45 px / −0.9 px**, the copy is 358 px wide, the cards are **2-up** at
  **171 px** (image 169 × 127) with a 16 px gap, and the band is 934 px tall

### Requirement 5: Featured products band

The app SHALL render the featured band with a serif `h2`, a lede, and four `16px`-radius product cards
whose structure is image → serif `h3` → blurb → 3-row `<dl>` → price line → outlined CTA.

#### Scenario: Desktop band (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** it carries `padding-block: 112px` and the ground is the body's `#fafaf9` (the `bg-sand-50`
  class emits no rule — Deviation 2)
- **AND** the eyebrow `THIS MONTH` is 14 px/600, `0.025em`, `#925026`
- **AND** the `h2` `Lines we are holding deep` is **36 px / 40 px**, weight 600, in the **serif** stack
- **AND** the lede is 18 px/28 px `#57574f`
- **AND** the grid is four **286 px** cards with a 24 px gap, each **621 px** tall: square photo
  **284 × 284**, 16 px radius, 1 px `#f0f0ee` border, white ground
- **AND** the card body is `padding: 20px`: serif `h3` 18 px/600, blurb 14 px/21 px `#57574f`, then a
  `<dl>` with a `border-t` rule, 6 px row gaps and three `dt`/`dd` pairs (`dt` `#7c7c76` left, `dd` 500
  `#2a2a26` right)
- **AND** the price line is 14 px/600 `#925026`, then a **full-width** outlined CTA (`8 px` radius,
  1 px `#dededb`, `padding: 10px 16px`, centred 14 px/600 `#2a2a26`)
- **AND** the notice line under the grid is 14 px `#7c7c76`

#### Scenario: Band at 768 and 390 px

- **GIVEN** a 768 px viewport
- **THEN** the cards go **2-up** (356 px, photo 354 × 354) and the band's padding is **80 px**
- **GIVEN** a 390 px viewport
- **THEN** the cards are **1-up at 358 px**, each 673 px tall, and the band (with its four cards) is
  **3,244 px** tall

### Requirement 6: Brands mosaic

The app SHALL render eight supplier tiles as one **hairline mosaic** — a single `1px` `#dededb` gutter,
not eight separated cards.

#### Scenario: Mosaic at 1440 px

- **GIVEN** a 1440 px viewport
- **WHEN** the brands band renders
- **THEN** the band is 48 px padded, white, with a 1 px hairline top **and** bottom, and its head sits
  32 px above the mosaic
- **AND** the eyebrow `BRANDS` is 14 px/**700**, `#b5652f`; the `h2` `What we carry` is **24 px/700**
  with 8 px above it
- **AND** the mosaic is a `grid` with `gap: 1px` over a `#dededb` ground, 8 px outer radius and
  **hidden overflow**, four columns of **303 px** each, two rows
- **AND** each tile is `padding: 20px` on white, name 16 px/700 `#1f2328` (`tracking-tight`), range
  14 px `#7c7c76` 4 px below
- **AND** the notice line is 14 px `#7c7c76`

#### Scenario: Mosaic at 390 px

- **GIVEN** a 390 px viewport
- **THEN** the mosaic is **1-up** (358 px per tile, 8 rows), still with 1 px gutters and hidden overflow
- **AND** no tile is clipped at the rounded corners

### Requirement 7: Trade accounts band

The app SHALL render the trade band as a **near-black 12-column split**: argument + CTA in the left
five columns, a three-column `<dl>` of terms in the right seven.

#### Scenario: Desktop band (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** its ground is **`#1f2328`** with `padding-block: 80px`, and its content is 1216 px wide
- **AND** the left column is **469 px**: eyebrow `TRADE ACCOUNTS` in **`#cc7e51`** (14 px/600), `h2`
  white 36 px/600 on two lines, lede 18 px/28 px `#dededb`, solid CTA (`padding: 14px 24px`),
  and the notice 14 px `#b5b5b0`
- **AND** the right column is **683 px** holding a `dl` of **three equal columns** (206 px each, 32 px
  gap), each `dt` 16 px/600 white and `dd` 16 px `#dededb` 8 px below
- **AND** nothing in this band has a radius except the CTA, and nothing has a shadow

#### Scenario: Band at 390 px

- **GIVEN** a 390 px viewport
- **THEN** the two halves stack (64 px padding), and the `<dl>` is **1-up** (358 px rows, 32 px gaps)
- **AND** the band is 920 px tall and the eyebrow stays `primary-400`, never `primary-700`

### Requirement 8: Showroom band

The app SHALL render the showroom band as a 12-column split — copy, address and a three-row hours `<dl>`
in the left five columns, a `2:1` photo in the right seven.

#### Scenario: Desktop band (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** it is white, `padding-block: 112px`, with a 64 px column gap
- **AND** the left column (469 px) reads eyebrow `SHOWROOM` `#925026`, `h2` 36 px/600, lede 18 px
  `#57574f`, then an `address` (not italic, `#3a3a34`) of three lines 24 px below the lede
- **AND** the hours `<dl>` is `max-width: 384px`, each row `padding-block: 10px` with a 1 px
  `#f0f0ee` bottom rule, label `#57574f` and value 600 `#1f2328`
- **AND** the notice is 14 px `#7c7c76` and the CTA is the solid brand button, 24 px below
- **AND** the photo is **683 × 341** (`2:1`), 12 px radius, `object-cover`

#### Scenario: Band at 390 px

- **GIVEN** a 390 px viewport
- **THEN** the copy and the photo stack, the photo is 358 × 179, and the hours `<dl>` is full width
- **AND** the band is 1,042 px tall

### Requirement 9: Closing call to action and footer

The app SHALL render the closing band on `#925026` full-bleed with two CTAs, and a `#111827` footer of
four regions plus a bottom bar.

#### Scenario: Closing band (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** the ground is **`#925026`** with `padding-block: 112px` and a centred 768 px column
- **AND** the `h2` `Need something priced?` is **36 px/700** white (`tracking-tight`)
- **AND** the lede is 18 px/28 px **`#f6e5d9`**, `max-width: 576px`, centred
- **AND** the CTAs are a white 8 px-radius button (`padding: 16px 32px`, 16 px/**700** `#925026`
  label) beside an outlined one (`border: 2px solid rgba(255,255,255,.4)`, white label, 20 px phone
  glyph, 8 px gap), 32 px gap, 40 px above
- **AND** the white button is 205 × 56 and the outlined one 234 × 60 (the 2 px border)

#### Scenario: Footer (1440 px)

- **GIVEN** a 1440 px viewport
- **WHEN** the footer renders
- **THEN** its ground is **`rgb(17,24,39)`** (`gray-900`, *not* `ink-800`) with `padding-top: 96px`
- **AND** the grid is 12 columns: brand block 4, three link columns 5 (internally three equal columns),
  the trade block 3
- **AND** the brand block holds the light wordmark (40 px tall), a **320 px**-max blurb in `gray-400`,
  three 40 px social discs (`#1f2937` ground, 8 px radius, `aria-label`s Twitter / Instagram /
  LinkedIn, `href="#"`), then address / phone / email lines at 16 px `gray-400`
- **AND** each column head is 14 px/600 uppercase `0.05em` white, its links 16 px `gray-400` on 12 px
  rhythm; the trade block adds a 16 px blurb and a solid brand CTA
- **AND** the bottom bar is `margin-top: 64px`, `border-top: 1px #1f2937`, `padding-block: 32px`,
  14 px `gray-500`: the copyright left, `Privacy Policy` and `Terms of Service` right (24 px gap)
- **AND** the footer is 568 px tall

#### Scenario: Footer at 390 px

- **GIVEN** a 390 px viewport
- **THEN** the brand block, the three link columns (still three up at ≥640, stacked below) and the trade
  block stack with 48 px gaps, and the bottom bar stacks and centres
- **AND** the footer is 1,372 px tall and nothing overflows

### Requirement 10: Dark mode

The app SHALL implement the reference's class-based dark theme, driven by `localStorage.theme` with a
`prefers-color-scheme` default, and SHALL theme every band — this design is not light-only.

#### Scenario: First visit with a dark OS preference

- **GIVEN** no `theme` key in `localStorage`
- **AND** `prefers-color-scheme: dark`
- **WHEN** the page loads
- **THEN** `<html>` carries `class="dark"` before first paint (the reference does this in an inline
  head script — avoid the flash)
- **AND** the body ground is **`#030712`**, headings render white, and the hairlines become `#1f2937`

#### Scenario: Toggling

- **GIVEN** the page is light
- **WHEN** the visitor presses the moon button (`aria-label="Toggle dark mode"`)
- **THEN** `.dark` is added to `<html>` and `localStorage.theme` becomes `"dark"`
- **AND** pressing it again stores `"light"` and removes the class
- **AND** the toggle's icon swaps (moon ↔ sun) and the wordmark swaps to its light variant
- **AND** the choice survives a reload, and a stored `"light"` **overrides** a dark OS preference

#### Scenario: Dark surfaces

- **GIVEN** dark mode is on
- **THEN** the header is `gray-950` at 95 %, the hero `gray-900`, the featured/showroom/brands bands
  `gray-950`, cards `gray-900`/`gray-950` with `#1f2937` borders, body copy `gray-400`, and the
  `#1f2328` trade band and `#925026` closing band keep their own grounds (they are already dark/strong)
- **AND** the tan `dark:` eyebrow (`primary-400`) is used on every light-ground eyebrow

### Requirement 11: Cookie consent

The app SHALL reproduce the delayed cookie panel: 1.5 s after load, once, unless the visitor has
answered before.

#### Scenario: First visit

- **GIVEN** no `cookie-consent` key in `localStorage`
- **WHEN** the page has been open for 1.5 s
- **THEN** a bottom-fixed panel (`role="dialog"`, `aria-label="Cookie consent"`, white, 1 px top
  border, shadow) slides up from below the viewport
- **AND** it offers `Decline` (outlined) and `Accept All` (solid brand), both 8 px radius, 14 px/500
- **AND** either button writes the key and slides the panel out, then removes it

#### Scenario: Return visit

- **GIVEN** `localStorage['cookie-consent']` is set
- **WHEN** the page loads
- **THEN** no panel is rendered at all (not merely hidden)

### Requirement 12: Back-to-top control

The app SHALL render a 48 px brand disc, 24 px from the bottom-right, hidden until 300 px of scroll.

#### Scenario: Scroll threshold

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls 200 px
- **THEN** the disc is invisible and non-interactive (`opacity: 0; pointer-events: none`)
- **WHEN** they pass 300 px
- **THEN** it becomes visible (`opacity: 1`, `translateY(0)`) with `shadow-lg shadow-primary-600/25`
- **AND** pressing it returns the document to the top, keyboard focusable with its 2 px
  `primary-500` ring at 2 px offset

### Requirement 13: Responsive behaviour

The app SHALL reproduce the reference's four layout regimes — **≥1280** (CTA in header, rail, 4-up card
rows), **1024–1279** (no header CTA, rail still shown, 4-up rows), **640–1023** (single header row,
no rail, 2-up card rows), **<640** (2-up hero cards, 1-up products/brands, no header search).

#### Scenario: Breakpoint table

- **GIVEN** the listed widths
- **WHEN** the page renders
- **THEN** these measured values hold (±2 px):

| viewport | doc height | header | `h1` | band `h2` | hero cards | product cards | brand tiles |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| 1440 | 4,831 | 130 | 48 | 36 | 286 × 4 | 286 × 4 | 303 × 4 |
| 1280 | 4,831 | 130 | 48 | 36 | 286 × 4 | 286 × 4 | 303 × 4 |
| 1024 | 4,907 | 130 | 48 | 36 | 222 × 4 | 222 × 4 | 239 × 4 |
| 992 | 6,641 | 65 | 48 | 36 | 360 × 2 | 356 × 2 | 367 × 2 |
| 768 | 6,641 | 65 | 48 | 36 | 360 × 2 | 356 × 2 | 367 × 2 |
| 576 | 9,187 | 65 | 36 | 30 | 213 × 2 | 443 × 1 | 443 × 1 |
| 390 | 9,130 | 65 | 36 | 30 | 171 × 2 | 358 × 1 | 358 × 1 |
| 360 | 9,164 | 65 | 36 | 30 | 156 × 2 | 328 × 1 | 328 × 1 |

#### Scenario: No horizontal scroll at any width

- **GIVEN** the 8 widths above
- **WHEN** the page renders
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every one
- **AND** the truncated utility-bar sentence is the element most likely to break this — check 360 first

### Requirement 14: Accessibility and motion

The app SHALL use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`, `address`, `dl`),
**exactly one `h1`**, a logical heading order, labelled controls, and SHALL honour
`prefers-reduced-motion`.

#### Scenario: Landmarks and labels

- **GIVEN** a screen reader
- **WHEN** it walks the page
- **THEN** it finds one `main#main-content`, one `nav[aria-label="Catalogue navigation"]` (plus the
  panel's `nav` when open), one `address`, and a `<dl>` per product and for the showroom hours
- **AND** each search input has a visually hidden label, the dark toggle is labelled
  `Toggle dark mode`, the hamburger `Open menu`, and every social disc is labelled
- **AND** the six sections are announced in document order with one `h1` and five `h2`s

#### Scenario: Keyboard and reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page renders
- **THEN** the preloader and the scroll-progress bar still work (state, not decoration) but any
  transition is dropped, and back-to-top jumps instantly instead of smoothly — **added by the
  recreation**: the reference's sheet has no `prefers-reduced-motion` block at all (Deviation 14)
- **AND** every interactive element shows a visible focus ring — the reference only rings the search
  and the back-to-top disc, so add `focus-visible` rings to nav links, buttons and card links
  (Deviation 7)
- **AND** the cookie panel is dismissible by keyboard and does not trap focus

### Requirement 15: Provenance isolation

The app SHALL contain no `colorlib` / `fixtura` string (source, comments, data, README, CSS notes),
SHALL carry the new name in its package/CNAME/homepage, and SHALL put the source mapping only in this
spec, `TEMPLATES.md` and the PR.

#### Scenario: Provenance check

- **GIVEN** `apps/brassworks` is complete
- **WHEN** `grep -ri 'colorlib\|fixtura' apps/brassworks` runs
- **THEN** it prints nothing
- **AND** `apps/brassworks/public/CNAME` and `package.json#homepage` are
  `brassworks.free.componentdock.com`
- **AND** the footer links `https://www.componentdock.com/` (the reference's footer has no attribution
  link at all — add one, AGENTS.md rule 5)

## Deliberate deviations from the reference

1. **Twelve pages → one.** The reference is a real shop site (`catalogue`, four category pages,
   `brands`, `trade-accounts`, `showroom`, `contact`, `privacy`, `terms`). Build the landing page only.
   Map: nav `Catalogue`→`#featured`, `Brands`→`#brands`, `Trade accounts`→`#trade`, `Showroom`→
   `#showroom`, `Contact`→`#contact`; every "Request a quote" / "Open a trade account" CTA targets
   `#contact` / `#trade`; the four hero cards and four product cards become non-navigating links
   (`href="#"` with the default prevented, or `<button>` styled identically). Record the choice in the
   PR. Hide the header's `<form>` submission or make it a client-side filter — do not point it at a
   page that does not exist.
2. **The one un-emitted class is completed, not replicated as bug.** `bg-sand-50` is used in the markup
   and missing from the sheet, so the reference *renders* the featured band on the body ground. Define
   `sand-50: #fafaf9` so the same visual result comes from intent rather than from a missing rule; use
   it (or `bg-ink-50`) on that band. It must stay `#fafaf9` — *not* a warmer sand — or the page gains a
   fourth tint it was never designed with. Everything else in the sheet is complete, dark mode included.
3. **Poppins is loaded from Google Fonts.** The reference declares Poppins and ships **no** `@font-face`
   and **no** `<link>`, so most machines see `system-ui`. Load
   `Poppins:wght@400;500;600;700` (verified 200) via `<link>`; never self-host a copy. Expected visual
   delta: Poppins is slightly wider than `system-ui` — accept it, the design's type is Poppins.
4. **Serif gets a fallback.** `--font-serif` is `ui-serif, Georgia, …`; Linux CI has neither. Ship
   `Georgia, "Gelasio", "Times New Roman", serif` and load **Gelasio** (verified 200). It appears twice
   only: the featured `h2` and product-card `h3`s.
5. **Photography is placeholder.** The reference hot-links four Unsplash photos (hero ×4) and reuses the
   same four for the products plus one showroom interior. Use
   `https://picsum.photos/seed/brassworks-<n>/<w>/<h>` at the reference's ratios — `800×600` (4:3) for
   the categories, `800×800` (square) for the products, `1200×600` (2:1) for the showroom — with
   descriptive `alt` text. No asset is copied.
6. **The mobile panel gets an Escape handler.** The bundle only toggles `hidden` + `aria-expanded`; add
   `Escape`-to-close with focus return (house convention, no visual change).
7. **Focus rings are added where the reference has none.** Only the search input and the back-to-top
   disc are ringed in the source. Add `focus-visible` rings (brand `primary-500`) to nav links, CTAs,
   card links and the hamburger — required by AGENTS.md, invisible at rest.
8. **The kit's unused behaviours stay unbuilt.** The shared bundle implements count-ups, FAQ accordions,
   lightboxes, an autoplay carousel and reveal-on-scroll; **zero elements** on this page use them. Do
   not add a carousel, a counter, a lightbox or a reveal animation.
9. **The dead social links are kept dead.** Twitter/Instagram/LinkedIn are `href="#"` in the reference;
   keep the three discs labelled and non-navigating. Do not invent URLs.
10. **Component Dock attribution replaces nothing.** The reference footer has no attribution line at
    all (no "Template by Colorlib"). Add a Component Dock line in the bottom bar — it is the one
    addition to the design (AGENTS.md rule 5).
11. **The demo identity is re-voiced.** `Fixtura Supply`, `2200 Del Paso Boulevard`, `(555) 010-0266`,
    `counter@fixturasupply.example` and every brand name (Northgate, Cascade, Ferro-Line, Wrenchworks,
    Kelvin, Basin & Bar, Duralite, Provex) are sample content. Keep the *kinds* (a supply house,
    a street address, a counter phone, eight supplier names) but invent new ones, and keep/re-voice all
    five "Sample …" notices — a licensee must know what to replace.
12. **`robots: noindex` and the JSON-LD block are dropped.** Both are demo-host furniture
    (`<meta name="robots" content="noindex, nofollow">`, `schema.org/HardwareStore`); the recreation is
    a standalone template and may ship its own metadata.
13. **Sticky header, not static.** Unlike most of the Astro siblings this theme's header really is
    `sticky top-0 z-50`; keep it, and keep the `scrollY > 50` shadow.
14. **A reduced-motion guard is added.** `html { scroll-behavior: smooth }` ships in the sheet and there
    is **no** `@media (prefers-reduced-motion: reduce)` block anywhere in it — the reference animates
    regardless of preference. Keep the smooth scroll (the back-to-top depends on it) and add the
    `prefers-reduced-motion` override: instant jumps, no transitions, spinner and progress bar still
    functional.

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-brassworks/`
- [ ] `scripts/verify-app.sh brassworks` green: typecheck, lint, 100 % coverage tests, build
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/brassworks" package-lock.json` ≥ 1)
- [ ] `apps/brassworks/public/CNAME` and `package.json#homepage` are
      `brassworks.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`; `react`/`react-dom` are `latest`
- [ ] No `colorlib` / `fixtura` strings under `apps/brassworks` (`grep -ri`, comments included)
- [ ] Footer links `https://www.componentdock.com/`
- [ ] **Exactly one `h1`**, 48 px at ≥640 / 36 px at 390, weight 600, `-0.025em`, ink `#1f2328`
- [ ] Palette: `primary-600 #b5652f` (buttons), `primary-700 #925026` (eyebrows + closing band),
      `primary-400 #cc7e51` (eyebrow on dark), `ink-800 #1f2328` (text + utility bar + trade band),
      `ink-50 #fafaf9` (body + search + hero cards), hairlines `ink-200 #dededb` / `ink-100 #f0f0ee`,
      footer `#111827`
- [ ] Radii are **8 / 12 / 16 px + 50 %** and the only shadows are the scrolled header and the
      back-to-top disc
- [ ] Utility bar 40 px on `#1f2328`; header **130 px at ≥1024 / 65 px below**, sticky, 95 % white +
      blur, `shadow-lg` past 50 px; 49 px nav rail with five 14 px links and 32 px gaps
- [ ] Header ladder: search hidden <768, dark toggle hidden <640, quote CTA only ≥1280, hamburger
      <1280; mobile panel = search + five `py-3` links + full-width CTA, `Escape` closes
- [ ] Hero: 672 px copy column, 4-up cards 286 px at ≥1024 / 2-up at 360 px at 768 / 2-up 171 px at 390,
      cards 12 px radius on `#fafaf9` with `#dededb` borders and 4:3 images
- [ ] Featured band: serif `h2` 36 px, four 16 px-radius cards with square photos, 3-row `<dl>`, price
      line `#925026`, full-width outlined CTA, notice line
- [ ] Brands: **8 tiles in one hairline mosaic** (`gap: 1px` over `#dededb`, 8 px outer radius, hidden
      overflow), 4-up at ≥1024 / 2-up at 768 / 1-up at 390
- [ ] Trade band: `#1f2328` ground, `primary-400` eyebrow, 5/7 split, three-column `<dl>` of terms
- [ ] Showroom: 5/7 split, `address` block, three hairline hours rows, 2:1 photo at 12 px radius
- [ ] Closing band: `#925026`, centred 768 px, white CTA + outlined phone CTA with the glyph
- [ ] Footer: `#111827`, 4/5/3 grid, social discs, three link columns, trade block, bottom bar with
      Component Dock
- [ ] **Dark mode works end to end**: `localStorage.theme` + `prefers-color-scheme` default, no flash,
      body `#030712`, every band themed, icon and wordmark swap
- [ ] Cookie panel appears once after 1.5 s, stores `cookie-consent`, both buttons dismiss, never
      returns
- [ ] Scroll-progress bar tracks the document; back-to-top appears past 300 px and jumps to top
- [ ] Preloader fades and unmounts within 300 ms of load (and does not trap focus if JS is slow)
- [ ] Breakpoint table in Requirement 13 reproduced (±2 px) at 1440 / 1280 / 1024 / 992 / 768 / 576 /
      390 / 360, `scrollWidth === clientWidth` at every width
- [ ] `TEMPLATES.md` row added under `## Business` between **Fitzone 2** and **Flatter**, heading
      re-counted (371 → 372), marker `[x]` set in the bookkeeping commit
- [ ] Deploy via `gh workflow run deploy-surge.yml -f app="brassworks"`; then
      `curl -4 -sI https://brassworks.free.componentdock.com` returns 200
