# Template: Hedgerow (Business — garden design practice sold on a seasonal calendar and a portfolio with real budgets)

## Purpose

A one-page site for a **garden design and maintenance practice** in Bath: the proposition is not "we
build gardens", it is *"a garden is a ten-year conversation"* — the headline that runs the whole page
and is the reason the design leads with a **maintenance plan** and a **seasonal calendar** rather than
a hero photograph of a finished garden.

The composition is a **centred, editorial single column that widens into four different grid disciplines**
and never repeats one: a centred hero (`max-w-4xl`) with a two-line headline whose **second line cycles
through three phrases** (a typewriter), four stats, and one framed photograph; four tinted counters on a
ruled band; **three before/after project pairs** on a warm stone ground, alternating sides for one of
them only; six plant cards with a fixed three-row `<dl>` of aspect/height/interest plus a green-ruled
callout; **four season cards whose header tints escalate through the year** (pale green → pale stone →
deep green → deep stone); three maintenance tiers on the page's one **near-black band**, the middle tier
filled green; a three-up testimonial carousel; five bordered FAQ rows; and a closing band on a
**green gradient with a dot-grid** under it.

The palette is a **two-ramp split, both stock Tailwind**: green `primary` (`#16a34a` brand) for every
action and every plant cue, and warm stone `accent` (`#fafaf9` … `#1c1917`) for the portfolio ground and
the dark maintenance band. **Nothing else is coloured.** The type is the design's second argument: a
**sans hero** (DM Sans 700, 60 px, −1.5 px) against **serif section headings** (Fraunces 600, 36 px,
−0.9 px) — and the split is not consistent: the work, planting, calendar and maintenance headings are
Fraunces, while the testimonials, FAQ and closing headings are **DM Sans 700**. Both are in the
reference; unify neither.

Three details carry the "designed, planted, looked after" voice:
**the before/after pair** — two 3:4 frames side by side, `Before` on an `accent-900/85` chip and `After`
on a `primary-700` chip, with the brief, what was done, and a ruled `<dl>` of plot / time on site /
budget underneath;
**the season tints** — Spring `primary-100`, Summer `accent-100`, Autumn `primary-700`, Winter
`accent-800`, i.e. the card headers darken as the year darkens, which is the whole calendar's argument
in four swatches;
**the middle plan** — the only filled card in the near-black band (`bg-primary-600 ring-2
ring-primary-400`) with the only solid CTA, exactly the tier the page wants you to buy.

Recreation of the ColorLib "Groundwork" design (https://colorlib.com/wp/template/groundwork/, live
preview https://preview.colorlib.com/theme/groundwork/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

* **Source slug:** `groundwork`
* **ColorLib page:** https://colorlib.com/wp/template/groundwork/ — HTTP 200, **111,771 B**
  (sha256 `5ba19bda…15dd4`), `<title>` **"Groundwork - Landscaping Website Template 2026 - Colorlib"**,
  `<h1>` **"Groundwork"**, `og:title` the same, canonical `https://colorlib.com/wp/template/groundwork/`,
  `<meta name="description">` *"Landscaping is sold on what a garden will look like in three years, not
  next week. Groundwork is built around a seasonal maintenance calendar and a project portfolio with
  real budgets and timescales, …"*. Its `og:image` is
  `https://colorlib.com/wp/wp-content/uploads/sites/2/groundwork-template.jpg`, so this design's
  screenshot is `groundwork-template.jpg` (the naive `groundwork.jpg` is not the catalogue path).
* **Live preview:** https://preview.colorlib.com/theme/groundwork/ — **HTTP 200, 81,096 B**
  (sha256 `3b67f05d…eb0992`), read 2026-10-25 with `curl -4` (**every** fetch on this host needs `-4`:
  the machine resolves an IPv6 address that is blackholed). An **Astro** build: one hashed stylesheet
  (`_astro/Base.BvcOmSDk.css`, 63,707 B), one hashed behaviour bundle
  (`_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js`, 16,233 B) and the Astro
  view-transition router (`_astro/ClientRouter…CYDbzu1r.js`, 16,357 B). No Bootstrap, no jQuery, no
  per-page CSS. The 8,946-byte `<head>` carries one **6,496-byte inline `<style>`** (twenty
  `@font-face` rules pointing at `/cf-fonts/v/…`) and three inline scripts (`applyTheme` 442 B, the
  JSON-LD 159 B, the preloader teardown 358 B).
  `/theme/groundwork/index.html` is the same **81,096 B** document (byte-identical to the directory
  URL) — a no-op link, never a 404. Every **bare** route answers **308** with a `Location` ending in
  `/` (verified `/theme/groundwork/about` → `…/about/`), and the in-page `href`s are bare, so each nav
  click costs one redirect in the reference.
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**groundwork-template.jpg** —
  HTTP 200, **430,624 B**, `image/jpeg`, **2400×1892** (sha256 `07e3c4db…6f769c`). A **macOS browser
  window on a light desk ground**, framing the page from the sticky header down to the bottom of the
  hero photograph — i.e. it confirms the header, the badge, the two-tone headline, the CTA pair, the
  `Watch Demo` control, the four-stat strip and the framed photo, and shows **nothing** of the counter
  band, the portfolio, the plants, the calendar, the plans, the reviews, the FAQ, the closing band or
  the footer.
* **New name:** `hedgerow` (`apps/hedgerow`, `@free-react-templates/hedgerow`) — one lowercase word:
  a hedgerow is the planted boundary that *is* the structure of an English garden, which is the design's
  subject, and it is not the source name. No `apps/hedgerow`, no
  `openspec/specs/template-hedgerow/`, no `docs/templates/hedgerow/`, `git grep -il hedgerow
  origin/main` prints nothing, `grep -ci hedgerow TEMPLATES.md` is **0**, and the three ColorLib URL
  forms `wp/template/hedgerow/`, `preview.colorlib.com/theme/hedgerow/` and
  `preview.colorlib.com/theme/bootstrap/hedgerow/` all return **404** (checked 2026-10-25). Do not
  rename without re-running those five checks.
* **Deploy target:** https://hedgerow.free.componentdock.com (`apps/hedgerow/public/CNAME`, `homepage`
  in `apps/hedgerow/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: **`## Business`** (line 880 on `origin/main` `467c8803b`, heading reads
  **`## Business (372)`** over 372 rows; the next heading is `## Charity (37)` at line 1254). That is
  the section that already holds every sibling design from this catalogue-gap queue (Thermly,
  Plantroom, Veranda, Flowcert, Aquifer, Smallpaw, Kettle, Chalkline, Stryde/Emberly, Quarto, Rodline)
  plus the shipped **Gardening** → `gardenly` and **Landscaping**-adjacent trades. The section is
  ordered by **ColorLib source name**, so this row belongs between **`Gravity`** (line 1039) and
  **`Grunt`** (line 1040) — `Grav` < **`Grou`** < `Grun`.

### Why this design has no row (catalogue gap, measured 2026-10-24/25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, every row `[x]` — but the catalogue is not complete: all 40
pages of https://colorlib.com/wp/templates/ were crawled and compared with the 1,631 slugs the checklist
cites, and **256 designs are on the listing that the checklist never recorded** (42 standalone + 214
snippet variants). The census and both buckets are in `docs/catalog-coverage.md`, whose standalone table
already carries this design's line: `groundwork` — *app exists (other design); orphan prep (other
design)*, i.e. `apps/groundwork` recreates **Bootstrap Footer 04** (row at `TEMPLATES.md` line 783) and
`openspec/specs/template-groundwork/` documents *that* design, not this one. **A same-named app and spec
already exist for a different ColorLib design** — which is exactly why this prep needs a new invented
name and why a slug-coverage scan must not be trusted here: `grep -l 'theme/groundwork/'` finds nothing
in the 2,857 specs (verified), so the HTML is unclaimed, but `ls apps/ | grep groundwork` and
`ls openspec/specs/ | grep groundwork` both hit.

**Fifteen** of the 42 standalone designs were prepped before this run — ten shipped (Thermly,
Plantroom, Veranda, Flowcert, Aquifer, Smallpaw, Kettle, Chalkline, Emberly, Rodline) and five pending
(Closeknit, Stoke, Percline, Quarto, Brassworks) — and they established the hand-off pattern this spec
follows. Catalogue-gap queue order (the table in `docs/catalog-coverage.md`): `airwise` → … →
`flowpage` → **`groundwork` (this) → `halfpast` → `journeyman` → `lantern` → `mainline` → `marrow`**.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this
line into `## Business` **in source-name alphabetical order** (between **Gravity** and **Grunt**) and
bump the heading count:

```
- [x] **Groundwork** — [colorlib](https://colorlib.com/wp/template/groundwork/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/groundwork-template.jpg) · [hedgerow](https://hedgerow.free.componentdock.com)
```

⚠️ **Re-measure the count before you write it.** On `origin/main` `467c8803b` the section reads
`## Business (372)` over **372** rows (line 880; the next heading is `## Charity (37)` at line 1254), and
`Gravity` is line 1039, `Grunt` line 1040. Adding Groundwork makes **373**. Count the rows; do not copy
this number.

Do not invent a second row for the same slug, and do not touch the existing `## Bootstrap (216)` row for
**Bootstrap Footer 04** at line 783 — that row belongs to `apps/groundwork`, a different design.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/groundwork/` page (DOM authority) | 81,096 | `3b67f05dd27271e94b88ae9ce230cbbca2bb075cdf258c69de79105dbdbe0992` |
| `_astro/Base.BvcOmSDk.css` (token authority, Tailwind 4) | 63,707 | `5ab9ef9fd034f84f3ad83b9f9e3d960015396817fecfe9b2afc6ad35171dcbc2` |
| `_astro/Base.…BLoalVWc.js` (house kit — **same hash as eight siblings**) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `_astro/ClientRouter…CYDbzu1r.js` (view transitions) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| inline `<style>` (Fraunces + DM Sans, 20 faces, `/cf-fonts/…`) | 6,496 | — |
| inline scripts: `applyTheme` · JSON-LD · preloader teardown | 442 · 159 · 358 | — |
| `assets/img/logo.svg` · `favicon.svg` | 561 · 377 | `fa64d579…` · `5d183df4…` (the favicon is the kit's, **byte-identical to the Emberly and Rodline reads**) |
| catalog screenshot `groundwork-template.jpg` (**JPEG**, 2400×1892) | 430,624 | `07e3c4dbdec5150658fdf9938734b11cbe494c8dfe0a4e437e646fa91a6f769c` |
| `colorlib.com/wp/template/groundwork/` (catalog entry) | 111,771 | `5ba19bdad9d2b7b34a997a93400932ae1ff24b42e5065e52262deaaf49315dd4` |
| `about/` page | 32,539 | `a27706d7e2c763f3a35ae41d5a78aac33ee97f1bf8230eb849fb29f8dd941f08` |
| `pricing/` page | 46,900 | `e7e15e7b0776395894d1ec448b905e766f6025d357fe63e2adef5f828b36b935` |
| `contact/` page | 31,372 | `2211a96a93b1fadccb2120db507fa045416f22425df134b068c3db0b77d7b815` |
| `blog/` page | 38,094 | `fe2a5e023f9a527ecff5d6a850907735ed280f0e00c052a32f44d4aaa1e99914` |
| `elements/` page (style guide) | 51,937 | `4398e68af038e65db257b3296a4bad675b844641dd5cafd1d79cb554d4d41215` |
| `privacy/` page | 33,398 | `e1687f6c3cd71e6598e9aea81d9cacacf87fe7e9bca5eb3da07ed2df218851d8` |
| `terms/` page | 32,152 | `6b5cee4898b90c6ffe46b40dc3464ed7974feba93bb122979a8e3d6576002852` |

**No archive twin:** `downloads/free/groundwork.zip` answers **404** (9-byte body), and `css/style.css`
and `js/snippet.js` do not exist — this is a pure Astro build, so the live page *is* the only reference.
`og:image` is the **relative** `/og-image.jpg`, which is **404** — do not ship it.

## Design tokens (measured from `_astro/Base.BvcOmSDk.css`, 63,707 B, and the live render at 1440 px)

### Brand ramp — `primary` (**stock Tailwind `green`**, emitted as compiled utilities)

The Astro/Tailwind-4 family does not emit `--color-*` custom properties for these: the sheet carries
them as escaped utility classes (`.bg-primary-600{background-color:#16a34a}`,
`.text-primary-700{color:#15803d}`). Grep `.bg-primary-<step>{` and `.text-primary-<step>{`.

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#f0fdf4` | **the hero gradient's top stop** (`bg-gradient-to-b from-primary-50 to-white`), the plant-card tag chips (`bg-primary-50`), the hero badge fill, the planting callout's ground (`bg-primary-50`) |
| `primary-100` | `#dcfce7` | **the planting + calendar pill eyebrows** (`bg-primary-100 text-primary-800`), the Spring season header (`bg-primary-100 text-primary-900`), the testimonial avatar discs (`bg-primary-100 text-primary-600`), the hero's second blob (`bg-primary-100/40`) |
| `primary-200` | `#bbf7d0` | **the hero badge border** (`border-primary-200`), the hero's left blob (`bg-primary-200/50`), the middle plan's tick colour (`text-primary-200`) |
| `primary-300` | `#86efac` | **dark mode only** (`dark:text-primary-300` on the pill eyebrows) **and the logo's leaf vein stroke** — it is in `logo.svg`, not on the page |
| `primary-400` | `#4ade80` | **the fifteen testimonial stars** (`text-primary-400`), **every maintenance tick** on the two plain tiers, the gradient's right stop in `.text-gradient`, the hero's ping dot, `dark:text-primary-400` everywhere, the middle plan's ring (`ring-primary-400`) |
| `primary-500` | `#22c55e` | **the six-pixel dots in the 16 season-list items** (`bg-primary-500`), the hero dot's solid twin, `focus:ring-primary-500` on the footer field |
| `primary-600` | `#16a34a` | **brand** — every solid button (hero, header, mobile bar, footer subscribe, cookie accept), the four counters, the **`.text-gradient` start stop**, the maintenance eyebrow chip, **the middle tier card's ground**, the scroll-progress bar, the back-to-top disc, the skip link's focus fill (`focus:bg-primary-600`), the closing band's gradient start stop |
| `primary-700` | `#15803d` | **the `Recent gardens` eyebrow chip** (`bg-primary-700 text-white`), **the work-case overlines** (`text-primary-700`), **the three `After` chips** (`bg-primary-700`), **the Autumn season header** (`bg-primary-700 text-white`), the budgets in the work `<dl>`, `hover:bg-primary-700` on every primary button, the closing band's solid CTA label (`text-primary-700`), **the logo's leaf fill** |
| `primary-800` | `#166534` | **the closing band's gradient end stop** (`to-primary-800`), the plant-card tag text (`text-primary-800`) |
| `primary-900` | `#14532d` | **dark mode only** (`dark:bg-primary-900/50`, `/40`, `/30`) **and the Spring season header's text** (`text-primary-900`) — the only light-mode use |

### Accent ramp — `accent` (**stock Tailwind `stone`**) — the warm neutral that makes the green read planted

| token | hex | where |
| --- | --- | --- |
| `accent-50` | `#fafaf9` | **the whole portfolio band's ground** (`bg-accent-50`, measured `rgb(250,250,249)`) — the only place on the page that is not white, grey or green |
| `accent-100` | `#f5f5f4` | **the Summer season header** (`bg-accent-100 text-accent-900`), the plant-card `<dl>`'s top rule (`border-accent-100`), the season-list top rule |
| `accent-200` | `#e7e5e4` | **every plant card's border** (`border-accent-200`), **every season card's border**, the work-case `<dl>`'s top rule (`border-accent-200`) |
| `accent-300` | `#d6d3d1` | **body copy on the maintenance band** (`text-accent-300`: the lede, the visit lines, the tier blurbs, the price units) |
| `accent-800` | `#292524` | **the Winter season header** (`bg-accent-800 text-white`) |
| `accent-900` | `#1c1917` | **the maintenance band's ground** (`bg-accent-900`, measured `rgb(28,25,23)`) **and the `Before` chips** (`bg-accent-900/85`) |
| `accent-900` (text) | `#1c1917` | **the Summer header's text** (`text-accent-900`) and the logo wordmark's fill |

### Chrome grey, status colours, grounds

| token | value | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | **the counter band's ground** and **the testimonials band's ground** (both measured `rgb(249,250,251)`) |
| `gray-100` | `#f3f4f6` | the FAQ plus-discs (`bg-gray-100`), the mobile bar's `Call Now` chip (`bg-gray-100`) |
| `gray-200` | `#e5e7eb` | every header/band hairline (`border-gray-200`), the counter band's `border-y`, the FAQ `divide-y`, the hero's stat-strip rule |
| `gray-300` | `#d1d5db` | the hero ghost CTA's border (`border-gray-300`), the cookie `Decline` border |
| `gray-400` | `#9ca3af` | **the footer's blurb, links and contact lines** (`text-gray-400`), and the `dark:text-gray-400` counterpart of every `gray-600` line |
| `gray-500` | `#6b7280` | the work `<dl>` labels, the plant `<dl>` labels, the plant latin names (`text-gray-500 italic`), the season summary labels, the footer legal text and placeholder |
| `gray-600` | `#4b5563` | **body copy on light grounds** (`text-gray-600`: the hero lede, section ledes, work briefs, season items, FAQ answers), the nav links, the header hamburger, the FAQ glyph |
| `gray-700` | `#374151` | the hero ghost CTA's label (`text-gray-700`), the `Watch Demo` label, the season-list items (`text-gray-700`), the cookie `Decline` label, the footer email field's border (`border-gray-700`) |
| `gray-800` | `#1f2937` | the footer email ground, the footer social tiles (`bg-gray-800`), the footer bottom rule (`border-gray-800`), `dark:bg-gray-800` surfaces |
| `gray-900` | `#111827` | **the footer's ground** (measured `rgb(17,24,39)`), **every `h1`/`h3` on light grounds** (`text-gray-900`), the FAQ questions, the work `<dl>` values |
| `gray-950` | `#030712` | `dark:` grounds (`dark:bg-gray-950` on the header, FAQ, preloader) |
| white | `#fff` | the hero gradient's bottom stop, the grounds of `#planting` / `#calendar` / `#faq`, the scrolled header's fill; the plant cards, the season cards' bodies, the testimonial cards, the hero's ghost CTA, the closing band's `h2` and its solid CTA |
| black | with alpha | `.shadow-soft` `#0000001a`, `.hover:shadow-soft-lg` `#00000024`, the hero image's `shadow-2xl` |

**Note the two-ramp discipline:** `primary` (green) is action **and** plant cue; `accent` (stone) is
ground and dark band; **`amber` never appears** (the stars are `primary-400`, not amber — this is the
opposite of the Emberly sibling, whose licence strip is amber). Keep all of it.

### Typography

**Two faces**, both delivered from the preview's own `/cf-fonts/` cache inside the 6,496-byte inline
`<style>` (which is why grepping the sheet for `@font-face` finds nothing):

* **DM Sans** — `body { font-family: "DM Sans", system-ui, sans-serif }` (measured), and it is also the
  **`h1` face** and the face of the testimonials/FAQ/closing `h2`s. Four weights (400/500/600/700) over
  the `latin`, `latin-ext` and `vietnamese` subsets: 8 declarations.
* **Fraunces** — the **serif** face (`--font-serif` → `font-serif`), 400/500/600/700 over the same three
  subsets: 12 declarations. `font-serif` is applied per band, not globally.
* **No mono.** `font-mono` compiles into the sheet but no element on the page uses it (unlike the
  Fieldline sibling's JetBrains Mono labels).

| role | measured | notes |
| --- | --- | --- |
| `h1` | `text-4xl` 36 → `sm:text-5xl` 48 → `lg:text-6xl` **60 px / 60 px / −1.5 px**, **`font-bold` (700)**, **DM Sans** (not serif), `tracking-tight`, `text-gray-900` | measured **896 × 120** at 1440 (the `max-w-4xl` inner column), 358 × 120 at 390 (36 / 40 / −0.9). One `h1` on the page |
| `h2` — serif bands | `font-serif text-3xl font-semibold tracking-tight sm:text-4xl` = **36 / 40 / −0.9 px, weight 600**, Fraunces | `#work`, `#planting`, `#calendar`, `#maintenance`. The `#maintenance` one is `text-white` |
| `h2` — sans bands | `text-3xl font-bold tracking-tight sm:text-4xl` = **36 / 40 / −0.9 px, weight 700**, DM Sans | `#testimonials`, `#faq` — and the closing band is `text-3xl … lg:text-5xl` = **48 / 48 / −1.2 px, 700, white** |
| `h3` | work cases `font-serif text-2xl font-semibold` (**24 px**, Fraunces) · plant cards `font-serif text-lg font-semibold` (**18 px**) · season cards `text-xl font-semibold` (**20 px**) · tier names `font-serif text-2xl font-semibold` (**24 px**, on the dark band) | four different `h3` sizes in one page — copy them per band |
| hero badge | `text-sm font-medium text-primary-700` (14 px / 500) inside `rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5` | measured as a wide pill on mobile (358 px), centred |
| eyebrow chip (dark) | `text-xs font-semibold uppercase tracking-wider text-white` on `bg-primary-700` | `Recent gardens` only — the darkest chip on the page |
| eyebrow chip (pale) | `text-xs font-semibold uppercase tracking-wider text-primary-800` on `bg-primary-100` | `Planting` and `Through the year` |
| eyebrow pill (testimonials/FAQ) | `text-sm font-medium text-primary-700` on `bg-primary-100` | 14 px, **not** uppercase — a different treatment from the three chips above |
| overline (work cases) | `text-sm font-semibold uppercase tracking-wider text-primary-700` | `Widcombe, Bath` etc. — 14 px, on the stone ground |
| lede | hero: `text-lg sm:text-xl` (**20 px** at 1440) `text-gray-600`; band ledes: 16 px `text-gray-600`; the maintenance lede: 16 px `text-accent-300` | the hero lede is the only 20 px body copy |
| body | 16 px / 24 px, `text-gray-900` (measured `rgb(17,24,39)`) | card copy `text-gray-600`, `leading-relaxed` on the work briefs |
| price | `font-serif text-4xl font-semibold tabular-nums` = **36 px**, baseline-aligned with a 14 px unit (`gap-1.5`) | the three tiers, measured inside 347 px cards |
| footer column head | `text-sm font-semibold uppercase tracking-wider text-white` (14 px / 600) | `Spaces`, `Company`, `Support`, `Stay Updated` |
| nav link | 14 px / **500** `text-gray-600`, `hover:text-gray-900`; active = `.nav-active` → `#111827` + weight **600** | measured widths 103 / 53 / 111 / 86 / 40 / 34 / 47 / 54 px, `gap: 32 px` |

Load both with one request each (both URLs return 200):

```
https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&display=swap
https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&display=swap
```

⚠️ **Fraunces is a variable face with optical sizing.** The reference serves a plain `wght` instance
(`/cf-fonts/v/fraunces/5.2.9/latin/wght/normal.woff2`) at 400/500/600/700, i.e. **no `opsz` axis in
play** — the 36 px `h2` and the 24 px `h3` are the same cut. Do not "improve" it by adding optical
sizing; the measured letterspacing (−0.9 px on `h2`) is what keeps the serif from looking loose.

### Buttons, radii, shadows

| token | value | where |
| --- | --- | --- |
| hero solid CTA | `rounded-lg px-6 py-3` (**24 / 12 px**), 16 px `font-medium`, `bg-primary-600`, white, `shadow-lg shadow-primary-600/25`, `hover:bg-primary-700` | `Book a site visit`, with a 20 px arrow glyph |
| hero ghost CTA | `rounded-lg border border-gray-300 bg-white px-6 py-3`, 16 px `font-medium`, `text-gray-700`, `hover:bg-gray-50` | `See recent gardens` |
| hero video control | a **48 px** `rounded-full bg-primary-600` disc holding a 20 px play glyph + a 14 px `font-medium` label, `gap-3` | `Watch Demo` — the page's one video-modal trigger |
| header CTA | `rounded-lg px-5 py-2.5` (**20 / 10 px**), **14 px `font-medium`**, `bg-primary-600` | measured 14 px / 500 — `Book a site visit`, `hidden … sm:inline-flex` |
| tier CTA | `rounded-xl px-5 py-3` (**20 / 12 px**), **16 px `font-semibold`**, `mt-7`; `bg-white/10 hover:bg-white/20` on the two plain cards, `bg-white text-primary-700` on the middle | `Enquire about …` |
| closing CTAs | `rounded-lg px-8 py-4` (**32 / 16 px**), 16 px `font-medium`; **solid white with `text-primary-700`** (`hover:bg-gray-100`) + ghost `border-2 border-white/30` (`hover:border-white hover:bg-white/10`) with a 20 px phone glyph | measured 20 px/24 px padding pairs on the same band |
| footer subscribe | `rounded-lg px-4 py-2.5`, 16 px `font-medium`, `bg-primary-600` | `Subscribe` |
| mobile bar CTAs | `rounded-lg py-3`, 14 px `font-semibold`, `flex-1`; `bg-gray-100 text-gray-900` (`Call Now`, with a 16 px phone glyph) and `bg-primary-600 text-white` (`Book a Tour`) | measured bar height **69 px**, `lg:hidden` |
| cookie buttons | `rounded-lg px-4 py-2`, 14 px `font-medium`; outline `border border-gray-300` and solid `bg-primary-600` | `Decline` / `Accept All` |
| radii | `lg` .5 rem (**8 px**) · `xl` .75 rem (12) · `2xl` **1 rem (16 px)** · `3xl` 1.5 rem (**24 px**) · `full` | `lg` = every button and input; `xl` = the tier CTAs and the hero image frame; `2xl` = the plant cards, season cards, the work images, the testimonial cards, the planting callout, the hero photo frame; `3xl` = **the three maintenance tiers only**; `full` = the hero badge, the eyebrow chips and pills, the 48 px testimonial avatars, the 32 px FAQ discs, the 48 px back-to-top disc, the pulsing dot |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | **the three testimonial cards** (the only place it appears on this page) |
| `shadow-lg` | stock Tailwind | the header once scrolled, the hero's solid CTA (`shadow-primary-600/25`), the back-to-top disc, the cookie strip, the mobile bar |
| `shadow-2xl` | stock Tailwind | **the hero photograph's frame** (`rounded-2xl shadow-2xl ring-1 ring-gray-200`) |
| `.text-gradient` | `linear-gradient(to right, #16a34a, #4ade80)` + `background-clip: text` + `color: #0000` | **the `h1`'s second line only** — `ten-year conversation` etc. |
| `.nav-active` | `[data-nav-link].nav-active { color: #111827; font-weight: 600 }` (dark: `#fff`) | the scroll-spy state |
| `animate-ping` | stock Tailwind (1 s cubic-bezier ping) | **the hero badge's dot only** — a `bg-primary-400` ring at `opacity-75` over a solid `bg-primary-500` 8 px dot |
| `animate-hero-float` / `-reverse` | `@keyframes hero-float` (translate + scale, `0%`/`33%`/`to`), applied as **`8s ease-in-out infinite`** and **`10s … reverse`** | the two blurred blobs behind the hero |
| `animate-spin` | stock | **the preloader ring only** (`h-10 w-10 border-4 border-gray-200 border-t-primary-600`) |

### Rhythm, containers, measured heights

* Preloader: `fixed inset-0 z-[100] bg-white` with a 40 px `animate-spin` ring; a 358-byte inline script
  removes it on `load` (verified gone after load).
* Skip link + **`#scroll-progress`**: `h-0.5` = **2 px**, `bg-primary-600`, `fixed top-0 left-0 z-[60]`.
* Header: `sticky z-50`, `bg-white/80` + `backdrop-blur-lg`, `border-b border-gray-200`,
  `h-16` (64) → `lg:h-20` (80) — **measured 81 px including the border**, **65 px at 390**; gains
  `shadow-lg` past 50 px of scroll. Logo `h-8 lg:h-10` (`196 × 40` intrinsic, 4.9:1).
* **Containers — this design deliberately mixes two systems.** The chrome bands use Tailwind's
  `container mx-auto px-4 lg:px-8` (hero, counters, testimonials, FAQ, contact, footer); the five
  content-heavy bands use an **authored max-width wrapper** (`mx-auto max-w-<n> px-4 sm:px-6 lg:px-8`).
  Measured at 1440 both resolve to the same 1,280 px box (**1,216 px of content, 32 px pad**), which is
  why the difference is easy to miss:

  | band | wrapper | content width at 1440 |
  | --- | --- | ---: |
  | hero, counters, `#testimonials`, `#faq`, `#contact`, footer | `container mx-auto px-4 lg:px-8` | 1,280 (1,216 inside) |
  | `#work`, `#calendar` | `mx-auto max-w-7xl …` | 1,280 |
  | `#planting`, `#maintenance` | `mx-auto max-w-6xl …` | 1,152 |
  | the hero's text column | `mx-auto max-w-4xl` | 896 |
  | `#faq` list, centred band headers | `max-w-3xl` | 768 |
  | band headers (every band but the hero) | `max-w-2xl` | 672 |

  ⚠️ `container` **steps its max-width at every breakpoint** (475 / 640 / 768 / 1024 / 1280) while a
  `max-w-*` wrapper does not, so between 640 and 1,280 px the two systems give different card widths.
  Do not "unify" them; copy each band's wrapper as measured, and if the app defines `container` in
  `@theme`, declare the same steps the source uses (`--breakpoint-xs: 475px`).
* At 390 px every wrapper is full-bleed with **16 px** padding (`sm:px-6` is what makes the 640–1023
  range 24 px).
* Hero: `container … py-20 lg:py-32` (**80 / 128 px** vertical) — **measured 1,437 px** at 1440,
  **1,268 px** at 390. Two decorative blobs behind it: 500 px and 400 px discs, `blur-3xl`,
  `bg-primary-200/50` and `bg-primary-100/40`, carrying `data-parallax="0.15"` / `"-0.1"`.
  The framed photograph is `max-w-5xl` (1,024 px) with a **2:1** crop, `mt-16 lg:mt-24`.
* Counter band: `border-y border-gray-200 bg-gray-50 py-16 lg:py-20` (**64 / 80 px**) — **238 px**
  at 1440; `grid-cols-2 sm:grid-cols-4 gap-8`, numbers `text-4xl lg:text-5xl` (36 → 48 px) 700
  `text-primary-600`.
* `#work`: `bg-accent-50 py-20 sm:py-28` (**80 / 112 px**) — **1,641 px** at 1440, **2,714 px** at 390;
  `mt-14 space-y-10` stack of three `<article class="grid items-center gap-8 lg:grid-cols-2">`; each
  figure is `grid grid-cols-2 gap-3` — measured **592 × 387** with two **290 × 387** (3:4) frames;
  only the **second** article carries `lg:[&>figure]:order-2`.
* `#planting`: white, `py-20 sm:py-28` — **925 px**; `max-w-6xl`; header `max-w-2xl` **left-aligned**;
  `<ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">`; card **352 × 193**, `rounded-2xl border
  border-accent-200 bg-white p-5`.
* `#calendar`: white, `py-20 sm:py-28` — **893 px**; `max-w-7xl`; header **centred** `max-w-2xl`;
  `<ol class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">`; card **289 × 383**, `rounded-2xl border
  border-accent-200 bg-white` with a `px-5 py-4` tinted header and a `p-5` body.
* `#maintenance`: `bg-accent-900 py-20 text-white sm:py-28` — **1,032 px**; `max-w-6xl`; header centred
  `max-w-2xl`; `<ul class="mt-14 grid gap-6 lg:grid-cols-3">`; card **347 × 521**,
  `rounded-3xl p-7` (28 px pad), `bg-white/5 ring-1 ring-white/10`; the middle card is
  `bg-primary-600 ring-2 ring-primary-400`.
* `#testimonials`: `bg-gray-50 py-20 lg:py-28` — **740 px**; `container`; centred `max-w-3xl` header;
  carousel `relative mt-16`; slide **405 × 292** (`flex-shrink-0 px-3`), card
  `rounded-2xl bg-white p-8 shadow-soft`.
* `#faq`: white, `py-20 lg:py-28` — **820 px**; `container`; centred `max-w-3xl` header; the list is
  `max-w-3xl` `divide-y divide-gray-200`; each row `py-6` — **measured 768 × 81**.
* `#contact`: `bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28` — **500 px**; centred
  `max-w-3xl`; a dot grid over it (`radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
  `40 px` pitch, `opacity-10`) plus two `blur-3xl` white blobs at the corners.
* `footer`: `bg-gray-900 pt-16 text-gray-300 lg:pt-24` — **568 px** at 1440, **1,238 px** at 390
  (the 12-column grid collapses to a single stack); brand `lg:col-span-4`, links
  `sm:grid-cols-3 lg:col-span-5`, newsletter `lg:col-span-3`.
* Section heights at 1440 (measured, useful for eyeballing a build): header 81, hero **1,437**,
  counters 238, `#work` **1,641**, `#planting` 925, `#calendar` 893, `#maintenance` 1,032,
  `#testimonials` 740, `#faq` 820, `#contact` 500, footer 568. Document height **8,874 px** at 1440
  (**8,875** at 1200 — the layout barely changes until the 1,024 px breakpoint), **13,482 px** at 390.

## Reference document order (three chrome pieces before the header, nine bands, three after the footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white (`dark:gray-950`) | fixed `z-[100]`, 40 px `animate-spin` ring `border-4 border-gray-200 border-t-primary-600`; removed by the page-local 358-byte script on `load` (verified gone) |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio |
| — | `header[data-header]` | `bg-white/80` + `backdrop-blur-lg`, `border-b border-gray-200` | sticky `z-50`, 64/80 px: `logo.svg` (`dark:hidden`) + `logo-light.svg` (`dark:block`) · **eight** nav links (`Recent gardens`, `Planting`, `Through the year`, `Maintenance`, `About`, `Plans`, `Journal`, `Contact`, `gap-8`, `hidden lg:flex`) · **moon toggle** (`data-dark-toggle`, sun/moon glyph swap) · solid `Book a site visit` (`hidden sm:inline-flex`) · hamburger (`data-mobile-toggle`, `lg:hidden`, `aria-expanded`) |
| — | `[data-mobile-menu]` | white (`dark:gray-950`), `border-t`, `px-4 py-4` | `hidden lg:hidden` panel: the eight links as `block py-3` rows, then a full-width solid `Book a site visit` |
| 1 | (hero, no id) | **`bg-gradient-to-b from-primary-50 to-white`** `#f0fdf4 → #fff`, two floating blobs | `container … py-20 lg:py-32`, inner `max-w-4xl` **centred**: badge (pulsing `primary-500` dot + `Design, build and maintenance across Bath and North Somerset`), `h1` **`A garden is a`** `<br>` **`.text-gradient` typewriter line**, 20 px lede, then **`Book a site visit`** + **`See recent gardens`** + the **`Watch Demo`** disc/label, then a ruled **four-stat strip** (`border-t`, `pt-10`, `grid-cols-2 sm:grid-cols-4`: `180+ / Gardens planted`, `14 yrs / Designing`, `92% / Stay on maintenance`, `RHS / Trained` **static, not counters**), then the **framed 2:1 photograph** (`max-w-5xl`, `rounded-2xl shadow-2xl ring-1`) |
| 2 | (counters, no id) | **`bg-gray-50`** `#f9fafb`, `border-y border-gray-200`, `py-16 lg:py-20` | `container`, `grid-cols-2 sm:grid-cols-4 gap-8`, four `<span data-counter>` figures **shipping `0`** and animating to `180` / `14` / `92%` / `3`, labels `Gardens designed and planted` / `Years in practice` / `Clients who stay on a maintenance plan` / `Gold medals at regional shows` |
| 3 | `#work` | **`bg-accent-50`** `#fafaf9`, `py-20 sm:py-28` | `max-w-7xl`; centred header: chip `Recent gardens` (`bg-primary-700`, the only dark chip), serif `h2 Three we finished this year`, *With the brief, the budget and how long we were actually on site.*; then **three before/after cases** (below) |
| 4 | `#planting` | white, `py-20 sm:py-28` | `max-w-6xl`; **left-aligned** header: chip `Planting` (pale), serif `h2 A palette that suits the site you have`, *Six plants we return to constantly, and the conditions each actually wants. The most expensive mistake in a garden is a plant in the wrong aspect.*; then **six plant cards** in `sm:grid-cols-2 lg:grid-cols-3 gap-4`, then the **green-ruled callout** (`rounded-2xl border-l-4 border-primary-600 bg-primary-50 px-5 py-4`) |
| 5 | `#calendar` | white, `py-20 sm:py-28` | `max-w-7xl`; **centred** header: chip `Through the year`, serif `h2 What actually happens, and when`, *Garden maintenance is not one job repeated monthly…*; then **four season cards** in `sm:grid-cols-2 lg:grid-cols-4 gap-5`, then a centred `max-w-3xl` 14 px footnote under the grid |
| 6 | `#maintenance` | **`bg-accent-900`** `#1c1917`, `text-white`, `py-20 sm:py-28` | `max-w-6xl`; centred header: chip `Maintenance` (`bg-primary-600`), serif `h2 Looking after it afterwards`, `text-accent-300` lede; then **three tier cards**, then a centred 14 px note (`All plans include the same team each visit…`) |
| 7 | `#testimonials` | **`bg-gray-50`**, `py-20 lg:py-28` | `container`; centred pill `Clients` (`text-sm`, not uppercase), **sans** `h2 What people say a few years on`, lede; **3-slide carousel** (`[data-carousel]`) of `rounded-2xl bg-white p-8 shadow-soft` cards: five `primary-400` stars, a 18 px `font-medium` blockquote, a **48 px** `bg-primary-100 text-primary-600` initial disc + name + village; round arrows (`absolute`, hidden) and a `[data-carousel-dots]` div the kit fills |
| 8 | `#faq` | white, `py-20 lg:py-28` | `container`; centred pill `Questions`, **sans** `h2 Before you get in touch`, lede; `divide-y divide-gray-200` list of **five** rows inside `max-w-3xl`: full-width `button` + `py-6` + 18 px semibold question + a **32 px** `rounded-full bg-gray-100` plus-disc that rotates 45° when open, and a `max-height:0` panel (`duration-300`) |
| 9 | `#contact` | **`bg-gradient-to-br from-primary-600 to-primary-800`** `#16a34a → #166534`, **dot grid + two white blur blobs**, `py-20 lg:py-28` | centred `max-w-3xl`: white `h2 The best planting window is autumn` (**48 px** 700), `text-primary-100` lede, then **white solid `Book a site visit`** + a `border-2 border-white/30` ghost `See what a plan includes` with a phone glyph. **No form** |
| — | `footer` | **`bg-gray-900`** `#111827`, `text-gray-300`, `pt-16 lg:pt-24` | 12-col grid: brand `col-span-4` (`logo-light.svg` 40 px, blurb, **three** `rounded-lg bg-gray-800 p-2.5` 40 px social tiles — X / Instagram / LinkedIn, all `href="#"` — address `The Potting Shed, Marlow Lane, Bath, BA2 6QN`, phone, `studio@groundwork.garden`) · nested `sm:grid-cols-3 lg:col-span-5` block with **`Spaces`** (Hot Desk, Dedicated Desk, Private Office, Meeting Rooms — **leftover coworking copy, all pointing at `#spaces`, an id that does not exist**), `Company` (About, Blog) and `Support` (Contact, Terms) · `Stay Updated` `col-span-3` with a `border-gray-700 bg-gray-800` email field + `Subscribe`; bottom bar `mt-16 border-t border-gray-800 py-8`: `© 2026 Groundwork. All rights reserved.` + `Privacy Policy` / `Terms of Service` / `Style Guide` |
| — | `#mobile-cta` | white (`dark:gray-900`), `border-t`, `p-3`, `lg:hidden` | fixed bottom bar, **69 px** tall: `Call Now` (`tel:5556789012`, `bg-gray-100`) + **`Book a Tour`** (`bg-primary-600`, → `#contact`; another leftover label from the coworking kit) |
| — | `#cookie-consent` | white (`dark:gray-900`), `border-t`, `shadow-lg` | fixed bottom `role="dialog"` `aria-label="Cookie consent"`, `translateY(100%)` in the markup, slides up 1.5 s after load, `Decline` (outline) + `Accept All` (primary) |
| — | `#back-to-top` | `primary-600` + `shadow-primary-600/25` | 48 px disc, `bottom-6 right-6`, appears past 300 px, `aria-label="Back to top"` |

**On mobile the bottom edge carries three fixed layers**: the mobile CTA bar (`z-40`, 69 px), the cookie
strip (`z-50`) and the 48 px back-to-top disc (`z-50`) — the bar is the reason the cookie strip must sit
above it in the stacking order.

### The three garden projects (the portfolio's real content — reproduce in this order)

| # | place | title | the brief (in one line) | what was done (in one line) | plot | on site | budget | image side |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `Widcombe, Bath` | *A north-facing courtyard that had given up* | A walled courtyard in permanent shade, gravel over membrane, three dead bay trees; the client wanted somewhere to eat outside and had been told nothing would grow. | Raised the levels with imported topsoil, planted a shade palette of ferns, hydrangea and Japanese anemone, laid a light limestone terrace, replaced the bays with multi-stem amelanchier. | `8 × 6 m` | `4 weeks` | **`£18,400`** | figure **left** |
| 2 | `Oldfield Park` | *A long thin garden with nowhere to sit* | The classic Victorian terrace plot — six metres wide, thirty long, a lawn down the middle that made it feel like a corridor; two children and a dog. | Broke the length into three rooms with hornbeam hedging, moved the seating to the sunny middle third, kept a proper lawn, deep borders on the west boundary. | `6 × 30 m` | `6 weeks` | **`£31,000`** | figure **right** (`lg:[&>figure]:order-2`) |
| 3 | `Combe Down` | *A sloping plot on thin limestone soil* | — (the third case's brief continues in the DOM; paraphrase in the same register) | — | `400 m²` | `9 weeks` | **`£46,500`** | figure **left** |

Each case is `<article class="grid items-center gap-8 lg:grid-cols-2">` → a `<figure class="grid
grid-cols-2 gap-3">` of two `aspect-[3/4]` frames with `<figcaption>` chips at `bottom-2 left-2`
(`Before`: `bg-accent-900/85`, `After`: `bg-primary-700`, both `rounded px-2 py-0.5 text-[10px]
font-semibold uppercase tracking-wide text-white`) → then the overline, the serif `h3`, two
`leading-relaxed` paragraphs each opened by a **bold inline lead-in** (`The brief.`, `What we did.`) →
then `<dl class="mt-6 grid grid-cols-3 gap-4 border-t border-accent-200 pt-5 text-sm">` with
`gray-500` `<dt>` labels and semibold `<dd>` values, **the budget in `primary-700`**.

⚠️ **Only the second article flips.** Articles 1 and 3 are figure-left/text-right; the alternating
rhythm the screenshot suggests is not what the DOM does. Copy the DOM.

⚠️ The **after** photograph of cases 2 and 3 is the **same Unsplash asset**
(`photo-1585320806297-9794b3e4eeae`) — a source defect. Use distinct placeholders in the recreation.

### The six plants (the planting band's content, and the card anatomy)

| # | name | tag | latin (italic) | aspect | height | interest |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `Amelanchier` | `Structure` | *Amelanchier lamarckii* | Sun or part shade | `4–6 m` | Three seasons |
| 2 | `Japanese anemone` | `Late colour` | *Anemone × hybrida* | Part or full shade | `90 cm` | Aug–Oct |
| 3 | `Hart's tongue fern` | `Ground cover` | *Asplenium scolopendrium* | Full shade | `45 cm` | Evergreen |
| 4 | `Russian sage` | `Drought planting` | *Salvia yangii* | Full sun, sharp drainage | `1.2 m` | Jul–Sep |
| 5 | `Hornbeam` | `Hedging` | *Carpinus betulus* | Any but waterlogged | `To 4 m clipped` | Winter marcescence |
| 6 | `Box-leaved holly` | `Low hedging` | *Ilex crenata* | Sun or part shade | `40–60 cm` | Evergreen |

Card anatomy: `h3` (serif 18 px) + a `shrink-0 rounded bg-primary-50 px-2 py-0.5 text-[11px]
font-semibold text-primary-800` tag on the same baseline row (`flex items-baseline justify-between
gap-3`), the latin name as `mt-0.5 text-sm italic text-gray-500`, then a `border-t border-accent-100`
`<dl class="mt-4 space-y-1.5">` of three `flex justify-between` rows — `gray-500` label left,
`text-right font-medium` value right, **the height value `tabular-nums`**.

The band closes with a **four-pixel green rule** on a pale ground:
`We plant for the soil and aspect rather than the photograph. If your site is dry shade we will tell you
that hydrangeas will sulk, however much you like them, and suggest something that will not.`

### The four seasons (the design's centrepiece — header tints escalate, four items each)

| # | season | months | header | summary (italic) | items |
| --- | --- | --- | --- | --- | --- |
| 1 | `Spring` | `Mar – May` | `bg-primary-100 text-primary-900` | *Everything wants doing at once, and half of it can wait.* | Mulch borders before growth closes them in · Cut back grasses and perennials left for winter · Divide congested clumps as they wake · First mow, blades set high |
| 2 | `Summer` | `Jun – Aug` | `bg-accent-100 text-accent-900` | *Mostly watering, deadheading and standing still looking at it.* | Water new planting deeply, not often · Deadhead repeat-flowering roses · Trim formal hedges after nesting ends · Feed pots fortnightly |
| 3 | `Autumn` | `Sep – Nov` | **`bg-primary-700 text-white`** | *The best planting season, and the one everybody misses.* | Plant trees and shrubs into warm soil · Lift and divide herbaceous perennials · Plant spring bulbs in drifts · Mulch and leave the leaf fall where it can stay |
| 4 | `Winter` | `Dec – Feb` | **`bg-accent-800 text-white`** | *Structural work, while you can see the bones.* | Prune apples and pears while dormant · Coppice dogwood and willow for colour · Repair fences, paths and edging · Leave seedheads standing for the birds |

The tint order is the point: **100, 100 → 700, 800** — the two growing seasons are pale, the two
dormant/mid seasons are deep. Each card is `rounded-2xl border border-accent-200 bg-white` with a
`px-5 py-4` header (`h3` serif 20 px + a `text-xs font-semibold uppercase tracking-wider opacity-80`
month line) and a `p-5` body whose summary is `text-sm italic text-gray-600` and whose list is
`border-t border-accent-100 pt-4` with **6 px `bg-primary-500` dots** (`mt-1.5 h-1.5 w-1.5 rounded-full`,
`aria-hidden`) and `text-sm text-gray-700` items.

The band's footnote (centred, `max-w-3xl`, 14 px):
*The single most common mistake we correct is pruning at the wrong moment — cutting spring shrubs in
winter removes the flowers, and cutting hedges in late spring disturbs nesting birds, which is also an
offence.*

### The three maintenance plans (the dark band's real content)

| # | name | visits | price | blurb | tick list | CTA | card |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `Seasonal` | `Four visits a year` | **£840** `per year` | Established gardens that mostly need the right job done at the right moment. | One visit each season · Pruning to the correct timing · Border edging and mulching · A written note of what we did and why | `Enquire about Seasonal` | `bg-white/5 ring-1 ring-white/10`, ticks `primary-400` |
| 2 | `Fortnightly` | `Twenty-four visits a year` | **£2,980** `per year` | Planted gardens with lawns and borders that want keeping on top of. | Everything in Seasonal · Mowing and lawn care through the season · Continuous weeding and deadheading · Pots and containers maintained · Priority on storm damage | `Enquire about Fortnightly` | **`bg-primary-600 ring-2 ring-primary-400`**, ticks `primary-200`, CTA `bg-white text-primary-700` |
| 3 | `Estate` | `Weekly, plus project days` | **£7,400** `per year` | Larger plots, or gardens still being developed year on year. | Everything in Fortnightly · Weekly visits March to October · Two project days a year for new planting · Annual review and updated planting plan · Direct line to the designer | `Enquire about Estate` | `bg-white/5 ring-1 ring-white/10`, ticks `primary-400` |

Each card is `flex flex-col rounded-3xl p-7`: serif `h3` (24 px) → `mt-1 text-sm text-accent-300` visit
line → `mt-5 flex items-baseline gap-1.5` price row (**serif 36 px `tabular-nums`** + `text-sm
text-accent-300` unit) → `mt-4 border-t border-white/10 pt-4 text-sm text-accent-300` blurb →
`mt-5 flex-1 space-y-2.5 text-sm` tick list (a 16 px check SVG + text) → the `mt-7` CTA. Because of the
`flex-1` list the three cards are the **same height** (521 px at 1440) and the CTAs sit on one line.

### The five questions (index page; the `pricing/` route re-uses this same five)

| # | question | answer, in one line |
| --- | --- | --- |
| 1 | What does a design cost? | £1,200–£2,400 for a typical town garden, including site survey, scale drawing and planting plan, **deducted from the build cost** if they go on to do the work. |
| 2 | How long from first visit to finished garden? | Six to ten weeks for design and drawings, then the build; construction is booked about three months ahead, so an autumn planting wants a conversation in early summer. |
| 3 | Do I have to take a maintenance plan? | No — it is offered because a planting scheme is a ten-year plan and most schemes fail in year three from well-intentioned wrong pruning; **92 %** of clients take one (the page states this in the answer). |
| 4 | Can you work with a garden we already have? | Usually, and often that is the better job: mature structure is worth a great deal and takes decades to replace. |
| 5 | What if a plant dies? | Anything supplied and planted is replaced free in its first two years, provided the garden has been maintained as agreed. |

### Leftover strings from the coworking kit underneath (a source defect — replace every one)

This design is a **re-skin**: the Astro kit it was built on is a coworking/office-space theme, and four
strings were never rewritten. They are *in the live reference* and they must **not** survive into the
recreation:

| leftover | where | what the recreation uses instead |
| --- | --- | --- |
| `Hot Desk` · `Dedicated Desk` · `Private Office` · `Meeting Rooms` | the footer's **`Spaces`** column, four links | a garden-relevant column of four links (`Garden design`, `Planting plans`, `Seasonal care`, `RHS-trained team`) pointing at real band ids |
| `#spaces` | the same four footer links | **no `id="spaces"` exists on the page** — all four are broken fragments |
| `Book a Tour` | the mobile sticky bar's primary CTA | `Book a visit` → the contact band |
| `Watch Demo` + `https://www.youtube.com/embed/dQw4w9WgXcQ` | the hero's video control | keep the control only if the app ships a real modal with an authored sample clip; otherwise drop it (Deviation 6) |

## Behaviour the recreation must reproduce

All shared handlers live in the **house kit** (`Base…BLoalVWc.js`, 16,233 B, whose hash is
**byte-identical to the Flowpage, Emberly, Aquifer, Plantroom, Veranda, Stoke, Closeknit, Kettle,
Smallpaw and Percline reads**), wired once per `astro:page-load`. Four pieces are page-local:
`applyTheme()`, the JSON-LD, the preloader teardown, and (in the recreation) nothing else.

The page wires **27 `data-animate` elements** (23 with `data-delay`) and — unusually for this family —
**every one of the kit's showy branches except five**: `typewriter`, `counter`, `parallax`,
`video-modal`, `cookie`, `carousel`, `faq`, `nav-link`, plus the kit's blog/billing/lightbox branches
which are **absent**.

1. **Reveal on scroll** (`[data-animate]`, 27 elements, 23 with `data-delay`) — `fade-in-up`: measured
   start state `opacity: 0`, `translateY(20px)`, `transition: opacity .6s ease-out, transform .6s
   ease-out`; revealed once at `threshold .1` / `rootMargin 0 0 -10%`; **skipped entirely under
   `prefers-reduced-motion: reduce`**. ⚠️ The kit only arms elements whose
   `getBoundingClientRect().top > innerHeight × 0.8` at load — so **anything already in the first
   screenful never animates**. Copy that (it is why the hero does not flash), or animate everything;
   do not animate the hero *and* claim fidelity.
2. **Typewriter** (`[data-typewriter]`, **one** element, the `h1`'s gradient span) — the attribute holds
   a JSON array of three phrases; the element starts with the first, then every **3 s** fades out
   (`opacity 0`, `translateY(10px)`, 300 ms), swaps the text and fades back. It cycles forever and
   becomes `display:inline-block` once initialised.
3. **Counters** (`[data-counter]`, **four**) — `IntersectionObserver` at `threshold .5`, **2 s** eased
   (`1 − (1 − p)³`) from `0` to the target, honouring `%`, `+`, `K`, `M`, `$` suffixes and one decimal.
   The static HTML ships **`0`** in all four. ⚠️ The hero's stat strip (`180+ / 14 yrs / 92% / RHS`)
   is **static text** and is *not* a counter — do not wire it.
4. **Parallax** (`[data-parallax]`, **two** blobs, values `0.15` and `-0.1`) — on scroll,
   `translateY(scrollY × factor)` while the element is within the viewport + 200 px.
5. **Header shadow** past `scrollY > 50` — `shadow-lg` appended to `[data-header]`.
6. **Mobile disclosure** (`< lg`, i.e. below 1024 px) — `aria-expanded` on the trigger, glyph swap
   (hamburger ↔ close), `hidden` toggled on the panel; the panel's own `data-accordion-toggle` branch
   also exists in the kit and is **not used here** (the panel is a flat list).
7. **Scroll spy** — **eight** `[data-nav-link]` values, but only **four** (`work`, `planting`,
   `calendar`, `maintenance`) resolve to ids on the page; `about`, `pricing`, `blog`, `contact` are
   route paths (`/theme/groundwork/about`, `/pricing`, `/blog`, `/contact`). So the reference's spy
   lights four labels and the other four never activate. The recreation maps all eight onto bands
   (Requirement 15).
8. **Smooth in-page scroll** for `a[href^="#"]` (not `#`), offset = header height **+ 20 px**,
   `history.pushState`.
9. **Carousel** (`[data-carousel]`) — per-view **3 ≥1024 px, 2 ≥640 px, 1 below** (verified: slide
   405 px of a 1,216 px track at 1440; 358 px at 390); slide width =
   `track.parentElement.offsetWidth / perView`; advances every **5 s**, wrapping; **paused on
   `mouseenter`, resumed on `mouseleave`**; dots are generated by the kit (`h-2.5 w-8 bg-primary-600`
   active / `w-2.5 bg-gray-300` otherwise) and **arrows are shown only while there is somewhere to
   scroll** — with three slides and three per view they are `display:none` at ≥1024 px, which is
   correct, not a bug; there is one dot (not rendered) and no arrow at 1440.
10. **FAQ** (`[data-faq-toggle]` / `[data-faq-icon]`) — **exclusive**: opening one collapses every other
    panel to `max-height:0 / opacity:0` and resets its disc to `rotate(0)`; the open row gets
    `max-height: scrollHeight / opacity:1` and `rotate(45deg)`. ⚠️ The reference **never sets
    `aria-expanded` or `aria-controls`** (measured: `grep -c aria-controls` = **0**, one
    `aria-expanded` on the page and it is the mobile trigger) — the recreation adds both (Deviation 7).
11. **Video modal** (`[data-video-modal]`, **one**) — builds an overlay `fixed inset-0 z-[100]
    bg-black/80 backdrop-blur-sm` with a 16:9 `aspect-video rounded-2xl` iframe, closes on backdrop
    click, the close button, and **Escape**; `document.body.style.overflow` locked while open.
12. **Cookie strip** (`[data-cookie-accept]` / `[data-cookie-decline]`) — slides up **1.5 s** after
    load, slides down and removes itself; the kit writes `cookie-consent` (`accepted` / `essential`)
    to `localStorage`.
13. **Chrome** — preloader removed on `load`; back-to-top past 300 px; scroll progress bar; dark toggle
    (`documentElement.classList.toggle('dark')` + `localStorage.theme`, booted by `applyTheme()`).
14. **Forms** — the page's **only** form is the footer newsletter: `<form data-newsletter-form>` with
    **no `action`, no handler** (`grep -c data-validate` = **0**), so submitting reloads the page. The
    `#contact` band is **CTAs only**; the four-field contact form lives on the inner `/contact` route,
    which this recreation does not rebuild. The recreation wires the newsletter field (Requirement 13).

### Data-attribute inventory (measured on the live page)

| hook | count | what it drives |
| --- | ---: | --- |
| `data-animate` (23 with `data-delay`) | 27 | reveal |
| `data-nav-link` | 8 | scroll spy (**only 4 resolve** — see 7) |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | exclusive accordion |
| `data-counter` | 4 | the counter band |
| `data-carousel` / `-track` / `-slide` / `-prev` / `-next` / `-dots` | 1 / 1 / 3 / 1 / 1 / 1 | testimonials |
| `data-typewriter` | 1 | the `h1`'s second line |
| `data-parallax` | 2 | the hero blobs (`0.15`, `-0.1`) |
| `data-video-modal` | 1 | the hero's `Watch Demo` |
| `data-dark-toggle` | 1 | the header's moon button |
| `data-header`, `data-mobile-toggle`, `data-mobile-menu` | 1 each | sticky chrome |
| `data-cookie-accept`, `data-cookie-decline` | 1 each | the strip |
| `data-newsletter-form` | 1 | the footer form (**the kit binds nothing to it**) |

`data-lightbox`, `data-billing-toggle`, `data-blog-*`, `data-accordion-toggle` and `data-validate` are
**absent** even though the shared kit supports them.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **46 anchors** over **21 distinct `href` values** (counted in the DOM — the
same 46 `<a>` elements the HTML ships):

| count | href | kind |
| ---: | --- | --- |
| 9 | `/theme/groundwork/contact` | live → **308** → `/contact/` **200** (31,372 B) — the header CTA, the hero CTA, all three tier CTAs, the closing CTA, the mobile bar's `Book a Tour`, the footer `Contact` |
| 4 | `/theme/groundwork/#spaces` | **broken fragment** — no element has `id="spaces"` (`grep -c 'id="spaces"'` = **0**); the four leftover `Spaces` links |
| 3 | `/theme/groundwork/about` | live → 308 → 200 (32,539 B) |
| 3 | `/theme/groundwork/blog` | live → 308 → 200 (38,094 B) |
| 3 | `#` | **dead** — the three footer social tiles |
| 2 | `/theme/groundwork/` | the two wordmarks (header + footer), a no-op self-link |
| 2 | `/theme/groundwork/#work` | live fragment (the header nav label + one footer/mobile twin) |
| 2 | `/theme/groundwork/#planting` | live fragment |
| 2 | `/theme/groundwork/#calendar` | live fragment |
| 2 | `/theme/groundwork/#maintenance` | live fragment (one of them is the closing band's ghost CTA `See what a plan includes`, whose glyph is a **phone**, not a pin) |
| 2 | `/theme/groundwork/#contact` | live fragment |
| 2 | `/theme/groundwork/pricing` | live → 308 → 200 (46,900 B) |
| 2 | `/theme/groundwork/terms` | live → 308 → 200 (32,152 B) |
| 1 | `#main-content` | skip link → exists |
| 1 | `#work`, `#maintenance` | bare local fragments (the hero's `See recent gardens`, the closing band's ghost) |
| 1 | `/theme/groundwork/privacy` | live → 308 → 200 (33,398 B) |
| 1 | `/theme/groundwork/elements` | live → 308 → 200 (51,937 B) — the footer's `Style Guide` |
| 1 | `tel:(555) 620-1174` | **malformed** `tel:` (spaces and parentheses) — the footer's first number |
| 1 | `tel:5556789012` | valid — the mobile bar's `Call Now` |
| 1 | `mailto:studio@groundwork.garden` | sample mailbox |

**So: 3 dead `#`, 4 broken `#spaces`, 1 malformed `tel:`, and 7 live inner routes** — every other
fragment resolves.

**Inner-page inventory (all live after the 308; the recreation folds their argument into one page):**

| page | bytes | `<title>` | `<h1>` |
| --- | ---: | --- | --- |
| `about/` | 32,539 | About Groundwork \| Groundwork | About Groundwork |
| `pricing/` | 46,900 | Plans \| Groundwork | Plans |
| `contact/` | 31,372 | Contact Groundwork \| Groundwork | Contact Groundwork |
| `blog/` | 38,094 | Blog \| Groundwork | Insights & Updates |
| `privacy/` | 33,398 | Privacy Policy \| Groundwork | Privacy Policy |
| `terms/` | 32,152 | Terms of Service \| Groundwork | Terms of Service |
| `elements/` | 51,937 | Elements \| Groundwork | Elements |

The multi-page shell is the authoritative reference for copy the single-page recreation folds in:

* **`pricing/`** is **not** a pricing table — its four `h2`s are `Looking after it afterwards`,
  `What actually happens, and when`, `Before you get in touch` and `The best planting window is
  autumn`, i.e. it **re-uses the landing page's maintenance, calendar, FAQ and closing bands** in a
  shorter order under an `h1 Plans`. There is **no billing toggle** on it (`data-billing-toggle` count
  = 0 in the whole site), so do not invent monthly/yearly switching: the prices are annual.
* **`contact/`** carries the site's **only real form**:
  `<form class="mt-8 space-y-6" data-validate data-contact-form>` with `Full Name` (`text`, required),
  `Email` (`email`, required), `Subject` (`text`, optional) and `Message` (`textarea rows=5`,
  required), each `mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3` with
  `focus:border-primary-500 focus:ring-2`, and a submit button
  `rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-600/25`.
  The band heading is `Tell us about the garden`. Its whole grammar is reusable if the recreation wants
  a working enquiry form — but the landing page has **no form**, so adding one is a deviation.
* **`elements/`** is a full style guide (Typography, Buttons, Badges & Tags, Alerts, Cards, Form
  Elements, Lists, Tables, Tabs) — the cheapest possible cross-check for any token question, and it
  contains **no** new colour outside the two ramps.
* **`about/`** and **`blog/`** are one-band pages; **`privacy/`** and **`terms/`** are boilerplate lorem
  with the source brand substituted.

**The recreation does not rebuild those pages.**

## Class census (no phantom-class delta)

The page uses **373 distinct class tokens** across **573 `class` attributes**, and **every one compiles**
to a rule in `Base.BvcOmSDk.css` (checked programmatically, including Tailwind's escaped variants) —
**no phantom-class delta** to floor into this spec.

⚠️ Three traps when re-running this census:

1. Variants are escaped in the sheet (`sm\:grid-cols-3`, `bg-white\/80`, `lg\:\[\&\>figure\]\:order-2`).
2. `dark:` utilities compile as `:is(.dark *)` suffixes, so a `.token{` search misses them — that is
   where `primary-300`, `primary-900`, `accent-300` and `gray-950` live.
3. Breakpoints ship as `@media (width>=40rem)` (not `min-width:`): 40rem `sm`, 48rem `md`, 64rem `lg`,
   80rem `xl`, 96rem `2xl`. The nav switches at **`lg`** here (unlike the Emberly sibling's `xl`).

## Screenshot analysis (2400×1892 JPEG, macOS browser window)

The capture is a light-mode desktop view inside a browser window on a pale desk ground, so the outer
frame is chrome, not design. Inside it, top to bottom:

* the **white sticky header**: a leaf-and-soil-lines mark with the `Groundwork` wordmark in the serif,
  the eight nav labels in 14 px grey, a moon toggle, and the solid green `Book a site visit`;
* the **pale green hero** (`#f0fdf4` fading to white): the outlined badge with its green pulsing dot,
  the **60 px two-line headline** — `A garden is a` in ink, `ten-year conversation` in the **green->light
  green gradient** — the three-line grey lede, then `Book a site visit` (solid), `See recent gardens`
  (outline) and the `Watch Demo` disc + label;
* the **ruled four-stat strip** (`180+ / 14 yrs / 92% / RHS`) in ink;
* the **framed 2:1 photograph** — the design's only full-width image — with its ring and heavy shadow.

Everything below the photograph — the counter band, the portfolio, the plants, the calendar, the plans,
the reviews, the FAQ, the closing gradient and the footer — is **not in the screenshot**: read those
from the DOM and the sheet. The screenshot *is* authoritative for three things: the **hero's vertical
rhythm** (badge → 60 px headline → lede → three controls → ruled stats → framed photo), the **two-tone
headline treatment** (ink + green gradient), and the fact that this design **uses exactly one photograph
in its hero and none anywhere else**.

## Requirements

### Requirement 1: Page chrome (skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar at the very
top of the document, a 48 px back-to-top disc that appears past 300 px, and a cookie strip that slides
up 1.5 s after mount and dismisses into component state. It SHALL NOT paint a preloader.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the document reaches `readyState === "complete"`
- **THEN** no spinner overlay is painted at all, because the recreation never mounts one
- **AND** no fixed element covers the hero until the visitor scrolls or the 1.5 s cookie delay elapses

#### Scenario: Visitor scrolls a long way

- **GIVEN** the visitor is at the top of the page
- **WHEN** they scroll past 300 px
- **THEN** the 48 px back-to-top disc fades in at `bottom-6 right-6`
- **AND** the progress bar's width equals `scrollY / (scrollHeight − innerHeight)`
- **AND** the header gains `shadow-lg` past 50 px

#### Scenario: Cookie strip dismissal

- **GIVEN** the strip has slid up
- **WHEN** the visitor presses `Accept All` or `Decline`
- **THEN** the strip slides down and unmounts
- **AND** it does not return in the same session

### Requirement 2: Header, mobile disclosure and theme toggle

The app SHALL render a sticky 64/80 px header with the wordmark, eight nav labels, a moon toggle, a
solid CTA and a hamburger below 1024 px, and a disclosure panel that repeats the eight labels.

#### Scenario: Desktop header

- **GIVEN** the viewport is at least 1024 px
- **WHEN** the header renders
- **THEN** the eight labels are laid out with a 32 px gap at 14 px / weight 500
- **AND** the hamburger is not rendered and the solid CTA is visible from 640 px up
- **AND** the header measures 80 px tall plus its 1 px bottom border

#### Scenario: Mobile menu

- **GIVEN** the viewport is 390 px
- **WHEN** the visitor taps the hamburger
- **THEN** the panel opens with eight `block py-3` rows and a full-width solid CTA
- **AND** `aria-expanded` flips to `true` and the glyph swaps to a close icon
- **AND** the header measures 65 px including its border

#### Scenario: Theme toggle

- **GIVEN** the reference ships a working `data-dark-toggle`
- **WHEN** the recreation is built
- **THEN** it is light-only (Deviation 2) and no moon button is rendered
- **AND** every measured dark value is recorded in §Design tokens so the decision is reversible

### Requirement 3: Hero (badge, typewriter headline, lede, three controls, stats strip, framed photo)

The app SHALL render a centred hero on the `primary-50 → white` gradient with two decorative blobs, a
badge with a pulsing dot, a two-part headline whose second part cycles three phrases, a 20 px lede, the
solid and ghost CTAs, the video control, a ruled four-stat strip and one framed 2:1 photograph.

#### Scenario: Desktop hero

- **GIVEN** the viewport is 1440 px
- **WHEN** the hero renders
- **THEN** the column is 896 px wide and the section 1,437 px tall
- **AND** the `h1` measures 60 px / 60 px / −1.5 px at weight 700 in DM Sans
- **AND** its second line is painted with the `#16a34a → #4ade80` gradient clipped to the text
- **AND** the stat strip is separated by a 1 px `gray-200` rule and holds `180+`, `14 yrs`, `92%`, `RHS`

#### Scenario: The headline cycles

- **GIVEN** the page has been mounted for three seconds
- **WHEN** the typewriter interval fires
- **THEN** the gradient line fades out over 300 ms, swaps to the next of the three phrases and fades back
- **AND** the three phrases are `ten-year conversation`, `long argument with the weather`,
  `thing you finish slowly`, cycling forever
- **AND** under `prefers-reduced-motion: reduce` the line stays on the first phrase

#### Scenario: Mobile hero

- **GIVEN** the viewport is 390 px
- **WHEN** the hero renders
- **THEN** the `h1` is 36 px / 40 px / −0.9 px and the column is 358 px wide
- **AND** the badge becomes a full-width pill with the dot at its left edge
- **AND** the three controls stack, and the sticky mobile bar sits below them

#### Scenario: The video control

- **GIVEN** the visitor activates `Watch Demo`
- **WHEN** the modal opens
- **THEN** an overlay locks body scroll and shows a 16:9 frame at `z-[100]`
- **AND** backdrop click, the close button and `Escape` all close it and restore scrolling
- **AND** the modal's source is authored for this app, never the reference's placeholder video id

### Requirement 4: Counter band

The app SHALL render four counters on `gray-50` inside a `border-y` band, animating once from zero.

#### Scenario: Counters enter the viewport

- **GIVEN** the band is below the fold
- **WHEN** at least half of a counter's box is visible
- **THEN** it animates from `0` to its target over 2 s on a cubic ease-out
- **AND** the four targets are `180`, `14`, `92%`, `3` and the `%` suffix is preserved
- **AND** each counter animates exactly once, and not at all under reduced motion

### Requirement 5: Recent gardens (three before/after cases)

The app SHALL render exactly three projects in DOM order, each a two-column article on the `accent-50`
band with a 3:4 before/after pair, an overline, a serif headline, two labelled paragraphs and a ruled
three-cell metadata row.

#### Scenario: Desktop portfolio

- **GIVEN** the viewport is 1440 px
- **WHEN** the band renders
- **THEN** the three articles stack with 40 px between them, each `lg:grid-cols-2` with 32 px gap
- **AND** each figure is 592 px wide holding two 290 × 387 frames with a 12 px gap
- **AND** the first and third articles put the figure **left**, the second puts it **right**

#### Scenario: The before/after chips

- **GIVEN** any case's figure
- **WHEN** it renders
- **THEN** each frame carries a `bottom-2 left-2` chip, 10 px semibold uppercase
- **AND** `Before` is `accent-900/85` and `After` is `primary-700`
- **AND** the two frames of one case are different photographs (the reference's duplicated after-shot
  is a defect that must not be reproduced)

#### Scenario: The metadata row

- **GIVEN** a case's text column
- **WHEN** it renders
- **THEN** a three-cell `<dl>` sits under a 1 px `accent-200` rule with `gray-500` labels and semibold
  values
- **AND** the cells are `Plot`, `On site`, `Budget` and the budget is `primary-700`
- **AND** the values are `8 × 6 m / 4 weeks / £18,400`, `6 × 30 m / 6 weeks / £31,000`,
  `400 m² / 9 weeks / £46,500` in that order

### Requirement 6: Planting palette (six cards + callout)

The app SHALL render six plant cards in a responsive 1/2/3 grid, each with a name, a pale tag, an
italic latin name and a three-row definition list, followed by one green-ruled callout.

#### Scenario: Desktop grid

- **GIVEN** the viewport is at least 1024 px
- **WHEN** the grid renders
- **THEN** it is three columns of 352 × 193 cards with a 16 px gap
- **AND** each card is `rounded-2xl` with a 1 px `accent-200` border and 20 px padding
- **AND** the header block of the band is left-aligned, not centred

#### Scenario: Card anatomy

- **GIVEN** any plant card
- **WHEN** it renders
- **THEN** the tag chip is 11 px semibold on `primary-50` in `primary-800`
- **AND** the latin name is 14 px italic in `gray-500`
- **AND** the `<dl>` opens with a 1 px `accent-100` rule and each row is label-left, value-right with
  the height value in `tabular-nums`

#### Scenario: The callout

- **GIVEN** the six cards
- **WHEN** the band ends
- **THEN** a `rounded-2xl` panel with a 4 px `primary-600` left border on `primary-50` carries the
  "we plant for the soil and aspect" paragraph in 14 px

### Requirement 7: Seasonal calendar (four tinted season cards)

The app SHALL render four season cards in a 1/2/4 grid whose header tints escalate from pale to deep
across the year, each with a month range, an italic summary and four bulleted jobs.

#### Scenario: Desktop calendar

- **GIVEN** the viewport is 1440 px
- **WHEN** the band renders
- **THEN** there are four 289 × 383 cards with a 20 px gap inside a 1,280 px wrapper
- **AND** the band header is centred while the planting band's is left-aligned

#### Scenario: The tints escalate

- **GIVEN** the four cards in DOM order
- **WHEN** their headers render
- **THEN** Spring is `primary-100` on `primary-900`, Summer `accent-100` on `accent-900`,
  Autumn **`primary-700` on white**, Winter **`accent-800` on white**
- **AND** no other season card tint exists

#### Scenario: Card body

- **GIVEN** any season card
- **WHEN** it renders
- **THEN** the summary is 14 px italic in `gray-600` and the list opens with a 1 px `accent-100` rule
- **AND** each of the four items is prefixed by a 6 px `primary-500` dot marked `aria-hidden`
- **AND** the band closes with one centred 14 px note about pruning at the wrong moment

### Requirement 8: Maintenance plans (the dark band)

The app SHALL render the three plans on the page's near-black `accent-900` band, with the middle card
filled green and the only solid CTA.

#### Scenario: Desktop tiers

- **GIVEN** the viewport is 1440 px
- **WHEN** the band renders
- **THEN** three 347 × 521 cards sit in a 24 px gap with `rounded-3xl` and 28 px padding
- **AND** the first and third are `bg-white/5` with a 1 px `white/10` ring
- **AND** the middle is `primary-600` with a 2 px `primary-400` ring and carries the white CTA
- **AND** all three cards are the same height because the tick list is `flex-1`

#### Scenario: Tier content

- **GIVEN** the three cards in order
- **WHEN** they render
- **THEN** they read `Seasonal` / `Four visits a year` / `£840 per year` / four ticks,
  `Fortnightly` / `Twenty-four visits a year` / `£2,980 per year` / five ticks,
  `Estate` / `Weekly, plus project days` / `£7,400 per year` / five ticks
- **AND** each CTA reads `Enquire about <plan name>` and points at the contact band
- **AND** the price is 36 px serif with a `tabular-nums` figure and a 14 px `accent-300` unit

#### Scenario: The band's copy is legible

- **GIVEN** the dark ground
- **WHEN** body copy renders
- **THEN** it uses `accent-300` (measured `#d6d3d1`) and never `gray-400` or lower contrast
- **AND** the band closes with one centred 14 px note about the same team attending

### Requirement 9: Testimonials carousel

The app SHALL render three client reviews in a carousel that shows 3 / 2 / 1 cards per view, advances
every five seconds, and honours hover, keyboard and reduced-motion.

#### Scenario: Three-up desktop carousel

- **GIVEN** the viewport is at least 1024 px
- **WHEN** the carousel renders
- **THEN** each slide is 405 px of a 1,216 px track and the card is `rounded-2xl bg-white p-8` with
  `shadow-soft`
- **AND** five `primary-400` stars, a 18 px medium blockquote, a 48 px `primary-100` initial disc and
  the name/village pair are present
- **AND** the arrows are hidden and no dots are rendered, because three slides fit exactly

#### Scenario: One-up mobile carousel

- **GIVEN** the viewport is 390 px
- **WHEN** the carousel renders
- **THEN** one 358 px card is visible, the arrows are rendered and three dots exist
- **AND** the active dot is a 32 × 10 px `primary-600` pill and the others are 10 px `gray-300` discs
- **AND** the track advances every 5 s, wrapping, and pauses on hover

### Requirement 10: FAQ accordion (exclusive)

The app SHALL render five questions as divided rows in a 768 px column, opening one at a time.

#### Scenario: Opening a question

- **GIVEN** all panels are closed
- **WHEN** the visitor activates a question
- **THEN** that panel expands to its scroll height with `opacity: 1` over 300 ms
- **AND** its plus disc rotates 45°
- **AND** `aria-expanded="true"` and `aria-controls` are exposed on the trigger

#### Scenario: Opening a second question

- **GIVEN** one panel is open
- **WHEN** another question is activated
- **THEN** the first collapses to `max-height: 0` / `opacity: 0` and its disc returns to 0°
- **AND** only one panel is ever open

#### Scenario: Keyboard use

- **GIVEN** focus is on a question
- **WHEN** the visitor presses Enter or Space
- **THEN** the panel toggles exactly as it does on click
- **AND** focus stays on the trigger

### Requirement 11: Closing CTA band

The app SHALL render a centred closing band on the `primary-600 → primary-800` diagonal gradient with a
dot grid, two soft corner blobs, a 48 px headline and two CTAs.

#### Scenario: Desktop band

- **GIVEN** the viewport is 1440 px
- **WHEN** the band renders
- **THEN** the section is 500 px tall with `py-20 lg:py-28`
- **AND** the `h2` is 48 px / 48 px / −1.2 px at weight 700 in white
- **AND** the dot grid is a 1 px white radial at a 40 px pitch at 10 % opacity
- **AND** the solid CTA is white with a `primary-700` label and the ghost is `border-2 border-white/30`

#### Scenario: Band CTAs resolve

- **GIVEN** the two buttons
- **WHEN** they are activated
- **THEN** `Book a site visit` scrolls to the contact/enquiry target
- **AND** `See what a plan includes` scrolls to the maintenance band, and carries a **phone** glyph as
  the reference does (its icon does not match its label — keep or replace, but state the choice)

### Requirement 12: Footer and mobile bar

The app SHALL render the 12-column footer on `gray-900` with four link columns, a newsletter field,
three social tiles and a legal bar, plus a sticky mobile CTA bar below 1024 px.

#### Scenario: Desktop footer

- **GIVEN** the viewport is 1440 px
- **WHEN** the footer renders
- **THEN** the brand block is 4 of 12 columns, the link block 5 and the newsletter 3, with a 32 px gap
- **AND** the four column heads are 14 px semibold uppercase white
- **AND** the three social tiles are 40 px `rounded-lg bg-gray-800 p-2.5` squares with accessible labels
- **AND** the bottom bar is separated by a 1 px `gray-800` rule and holds the copyright plus three legal
  links

#### Scenario: The leftover coworking column is replaced

- **GIVEN** the reference's `Spaces` column reads `Hot Desk` / `Dedicated Desk` / `Private Office` /
  `Meeting Rooms` and points all four links at a non-existent `#spaces`
- **WHEN** the recreation renders its footer
- **THEN** that column holds four garden-relevant links pointed at real band ids
- **AND** no `#spaces` fragment exists anywhere in the app

#### Scenario: Mobile bar

- **GIVEN** the viewport is 390 px
- **WHEN** the page renders
- **THEN** a 69 px fixed bar at `z-40` shows a `Call Now` chip and a solid primary CTA
- **AND** the CTA reads like a site visit, never the reference's literal `Book a Tour`
- **AND** the bar is not rendered at 1024 px and above

### Requirement 13: Forms

The app SHALL wire the footer newsletter field locally and SHALL NOT post anywhere.

#### Scenario: Invalid submission

- **GIVEN** the newsletter field holds a string with no `@`
- **WHEN** the form is submitted
- **THEN** no navigation or network request occurs
- **AND** an inline error message is announced

#### Scenario: Valid submission

- **GIVEN** the newsletter field holds a valid address
- **WHEN** the form is submitted
- **THEN** the field resets and a confirmation is announced
- **AND** the reference's inert `<form data-newsletter-form>` (no action, no handler) is not reproduced

### Requirement 14: Responsive behaviour

The app SHALL match the reference's measured geometry at 1440, 1200 and 390 px.

#### Scenario: Breakpoints

- **GIVEN** the reference's compiled breakpoints
- **WHEN** the app is resized
- **THEN** the nav collapses at **1024 px** (`lg`), the plant and season grids go 2-up at **640 px**
  (`sm`) and 3/4-up at **1024 px**, and the tier grid goes 3-up at 1024 px
- **AND** the counters go 2-up below 640 px and 4-up above it

#### Scenario: Measured heights

- **GIVEN** a 1440 px viewport
- **WHEN** the whole page is measured
- **THEN** the document is within a few per cent of **8,874 px** and the eight content bands are within
  a few per cent of 1,437 / 238 / 1,641 / 925 / 893 / 1,032 / 740 / 820 / 500 / 568
- **AND** at 390 px the document is within a few per cent of **13,482 px**

### Requirement 15: Navigation mapping (eight labels, one page)

The app SHALL map all eight nav labels onto bands and run the scroll spy against those ids.

#### Scenario: Nav labels resolve

- **GIVEN** the recreation is mounted
- **WHEN** the visitor activates `Recent gardens`, `Planting`, `Through the year`, `Maintenance`,
  `About`, `Plans`, `Journal` or `Contact`
- **THEN** the page scrolls, with a header offset, to four fragment bands — `#work`, `#planting`,
  `#calendar`, `#maintenance` — and to four mapped targets for the reference's route links:
  `About` → the hero's practice statement, `Plans` → `#maintenance`, `Journal` → a planting/notes band
  (`#planting`), `Contact` → `#contact`
- **AND** **all eight** labels resolve to an element that exists, so the reference's four dead labels
  (route paths with no in-page target) are not reproduced

#### Scenario: Scroll spy

- **GIVEN** the visitor scrolls through the bands
- **WHEN** a band enters the viewport
- **THEN** its label gains `.nav-active` (`gray-900`, weight 600)
- **AND** only one label is active at a time
- **AND** the four labels the reference could never activate are active here

### Requirement 16: Accessibility, performance and provenance

The app SHALL be keyboard-navigable, expose no ColorLib provenance in `apps/hedgerow`, and ship no
copied assets.

#### Scenario: Provenance isolation

- **GIVEN** the built app
- **WHEN** `grep -ri colorlib apps/hedgerow` and `grep -ri groundwork apps/hedgerow` run
- **THEN** both return nothing
- **AND** the strings `studio@groundwork.garden`, `The Potting Shed, Marlow Lane`, `Bath, BA2 6QN`,
  `Hot Desk`, `Book a Tour`, `RHS Trained`-as-a-brand-claim and the three client names have been
  rewritten or removed

#### Scenario: Focus visibility

- **GIVEN** the visitor tabs through the page
- **WHEN** focus reaches any control
- **THEN** a visible ring of at least 2 px is drawn in `#22c55e`, `#16a34a`, `#15803d` or `#111827`
- **AND** the skip link is the first stop

#### Scenario: No copied assets

- **GIVEN** the repository
- **WHEN** `apps/hedgerow` is inspected
- **THEN** it ships no `logo.svg`, `logo-light.svg` or `favicon.svg` from the reference
- **AND** no reference photograph is bundled: all imagery is `picsum.photos` placeholders seeded per
  template, and the reference's Unsplash URLs appear nowhere
- **AND** the brand mark is redrawn as an authored SVG (a hedge line plus a leaf, two greens)

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page renders
- **THEN** the reveal, the typewriter, the counters, the parallax and the carousel autoplay are all off
- **AND** smooth scrolling becomes instant

## Deliberate deviations from the reference

1. **Multi-page → single page.** The reference ships seven inner routes (`about`, `pricing`, `contact`,
   `blog`, `elements`, `privacy`, `terms`); the recreation folds their argument into one page and maps
   the four route labels onto bands (Requirement 15). Inner-page copy is summarised, not rebuilt.
2. **Dark toggle dropped.** The reference has `data-dark-toggle` + `applyTheme()` and a full `dark:`
   set. The recreation is light-only; every measured dark value (`primary-300 #86efac`,
   `primary-900 #14532d`, `accent-300 #d6d3d1`, `gray-950 #030712`) is recorded in §Design tokens so the
   decision is reversible.
3. **Cookie consent is component state, not `localStorage`.** The reference persists `cookie-consent`;
   the recreation keeps it in memory so a returning visitor sees the strip once per session.
4. **The newsletter form is wired.** The reference's `data-newsletter-form` binds to nothing.
5. **Counters never render `0`.** The reference's static HTML ships `0` in all four nodes and fills them
   on intersection; the recreation renders the final figure server-side/first-paint and animates from 0
   without a flash of zero — same numbers, no empty band.
6. **The hero's `Watch Demo` video is not reproduced as-is.** The reference opens a YouTube iframe with
   the placeholder id `dQw4w9WgXcQ`. Either ship the modal with an authored sample clip, or drop the
   control and keep the two CTAs — do not ship the placeholder id.
7. **The FAQ trigger gains `aria-expanded` / `aria-controls`.** The reference sets neither (measured:
   one `aria-expanded` on the entire page, and it belongs to the mobile trigger). The panels stay
   `max-height` transitions, not `<details>`.
8. **Broken and malformed targets are fixed.** The four `#spaces` links target an id that does not
   exist — replace the column (Requirement 12); the footer's `tel:(555) 620-1174` becomes a valid
   `tel:` href; the three `href="#"` social tiles get real destinations or lose the link.
9. **The leftover coworking copy is replaced.** `Hot Desk` / `Dedicated Desk` / `Private Office` /
   `Meeting Rooms`, `Book a Tour` and `Spaces` are all from the office-space kit underneath this
   design. The recreation keeps the *shape* (a four-link column, a two-control mobile bar) and replaces
   the words.
10. **The JSON-LD is not copied.** The reference's block *parses* but is nonsense — its `@context` is
    the string `https://***@type` (a mangled `schema.org`), its `url` is a bare `/`, and its
    `og:image` (`/og-image.jpg`) is **404**. Write a clean `LocalBusiness` block from scratch or emit
    none.
11. **Brand and sample strings are replaced.** `Groundwork`, `studio@groundwork.garden`, the Potting
    Shed address, `(555) 620-1174` / `5556789012` and the three client names become Hedgerow
    equivalents (invented, clearly sample). The prices, plot sizes, budgets and the six plants stay as
    measured — they are the design.
12. **The logo is redrawn.** `logo.svg` (561 B: a `#15803d` leaf, a 1.6 px `#86efac` vein, two soil
    rules in `#78716c` and `#a8a29e`, and a Fraunces 600 `#1c1917` wordmark) and `logo-light.svg` are
    **descriptions**, not files to copy. Keep the leaf-plus-soil-lines idea and the two greens.
13. **The duplicated after-shot is fixed.** The reference uses one Unsplash asset for the after-frame of
    projects 2 *and* 3. Each project gets its own placeholder.
14. **`RHS Trained` and `Gold medals at regional shows` are sample claims.** Keep the stat *slots*
    (the design's argument is credentials) but attribute them to the invented practice's own wording;
    do not imply a real RHS accreditation.

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-hedgerow/`
- [ ] `scripts/verify-app.sh hedgerow` green: typecheck, lint, 100 % coverage tests, build
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/hedgerow" package-lock.json` ≥ 1)
- [ ] `apps/hedgerow/public/CNAME` and `package.json#homepage` are `hedgerow.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`; `react`/`react-dom` pinned to `latest`
- [ ] No `colorlib` / `groundwork` strings under `apps/hedgerow` (`grep -ri` both, comments included)
- [ ] Footer links `https://www.componentdock.com/`
- [ ] One `h1`, 60 px / 60 px / −1.5 px, **weight 700 in DM Sans**, second line in the
      `#16a34a → #4ade80` clipped gradient, cycling three phrases every 3 s
- [ ] `h2` split preserved: **Fraunces 600** on work/planting/calendar/maintenance, **DM Sans 700** on
      testimonials/FAQ, and the closing `h2` at 48 px
- [ ] Both faces loaded (`DM Sans` + `Fraunces`), not substituted; no Georgia fallback rendered on Linux
- [ ] Three projects in DOM order with only the **second** flipped, three-cell `<dl>` with
      `£18,400 / £31,000 / £46,500`, and three **distinct** after-photographs
- [ ] Six plants with the exact tag/latin/aspect/height/interest table; the green-ruled callout present
- [ ] Four season cards with the tints `primary-100 / accent-100 / primary-700 / accent-800`, four items
      each, 6 px `primary-500` dots, and the centred footnote
- [ ] Three tiers on `accent-900` with the middle one `primary-600 ring-2 primary-400`, equal heights,
      `£840 / £2,980 / £7,400` and `Enquire about …` CTAs
- [ ] Testimonials: 3/2/1 per view, 405 px slides at 1440, arrows hidden at ≥1024, dots on mobile,
      5 s autoplay, hover pause
- [ ] Five FAQ rows, exclusive behaviour, `max-height` transition, 45° icon, `aria-expanded` added
- [ ] Closing band: `primary-600 → primary-800` diagonal, 40 px white dot grid at 10 %, 48 px white `h2`
- [ ] Footer: 12 columns (4 / 5 / 3), four heads, three social tiles, wired newsletter, legal bar,
      **no `Hot Desk` strings and no `#spaces`**
- [ ] Mobile bar below 1024 px only, 69 px, `Call Now` + a site-visit CTA (never `Book a Tour`)
- [ ] Reveal (27 elements), header shadow at 50 px, counters at 0.5 threshold over 2 s, typewriter,
      parallax blobs, progress bar, back-to-top at 300 px, cookie at 1.5 s — all present; **no
      preloader, no billing toggle, no lightbox, no blog filter**
- [ ] All decorative SVGs `aria-hidden`; the pulse dot is not announced; stars have an accessible label
- [ ] Reduced motion disables reveal, typewriter, counters, parallax, autoplay and smooth scroll
- [ ] `TEMPLATES.md` row added under `## Business` between **Gravity** and **Grunt**, heading
      re-counted (372 → 373), marker `[x]` set in the bookkeeping commit
- [ ] Deploy via `gh workflow run deploy-surge.yml -f app="hedgerow"`; then
      `curl -sI https://hedgerow.free.componentdock.com` returns 200
