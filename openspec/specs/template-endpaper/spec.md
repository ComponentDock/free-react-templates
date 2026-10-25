# Template: Endpaper (Knowledge base — documentation and help-centre landing page)

## Purpose

A landing page for a **documentation site**, built on the premise that *"help centres fail on findability,
not on writing"* (ColorLib's own catalogue sentence). Every band is a different answer to *how do I find
the page I need*: a **search hero** on a near-black band, **six category cards** numbered by article count,
a **most-read list** with view and helpfulness metrics, a **changelog** that leads with what will break you,
a **four-route support band**, a **five-question FAQ about the docs themselves**, and a closing CTA.

The copy is written by someone who has maintained docs: *"Search 240 articles across guides, API reference
and troubleshooting. Most questions are answered in under a minute"*; *"The errors people actually hit,
written as symptoms rather than as causes"*; *"Breaking changes are announced at least ninety days before
they ship, and never in a patch release"*; *"Draft responses sometimes, review never. Every published page
has a named human maintainer who is accountable for its accuracy, and that name is on the page."* A
recreation that substitutes lorem ipsum or generic SaaS copy has not recreated this design — the register
**is** the template.

The composition is **one dark band, then alternating light bands, then a gradient closing band**: hero
(`#search`, `primary-900`, 397 px), categories (white, 985 px), most-read (`primary-50`, 1,087 px),
changelog (white, 1,223 px), support (`primary-900`, 720 px), FAQ (white, 820 px), closing gradient
(`primary-600 → primary-800`, 452 px), footer (`gray-900`, 539 px). Section rhythm is `py-20` →
`sm:py-28` (**80 / 112 px**) everywhere except the FAQ and the closing band (`py-20 lg:py-28`), and the
content column **changes width band by band** — `max-w-3xl` (768) hero and FAQ, `max-w-7xl` (1,280)
categories, `max-w-5xl` (1,024) most-read, `max-w-4xl` (896) changelog, `max-w-6xl` (1,152) support. That
width ladder is the page's editorial logic: narrow where it is prose, wide where it is a grid.

The palette is **a desaturated blue-grey as the brand and cyan as the only saturated colour**. `primary` is
a custom ten-step ramp (`#f6f7f8 … #22272d`, a slate that reads almost neutral at the light end and nearly
black at 900), and it does *all* the structural work: hero and support grounds, every card border, every
muted label. `accent` is the stock **Tailwind cyan** ramp, used sparingly as the *signal*: the mono
eyebrows above every section head, the arrows in the category card's link lists, the "Added" changelog
badge, the response times in the support cards. Then stock **Tailwind greys** for the header, the footer
and the FAQ's plus discs, and three status hues borrowed from stock Tailwind for the changelog badges
(`red-600` Breaking, `amber-400` Deprecated).

The type is **two faces with a strict division of labour**: Inter (400/500/600/700) for everything read as
prose, and **JetBrains Mono** (400/500/600) for every piece of metadata — eyebrows, article counts, dates,
version numbers, view counts, response times, the `⌘K` key hint, the popular-search pills. There is no
serif. Headings are `tracking-tight` (−0.9 px at 36 px); the mono labels are `+0.15em` uppercase. Losing
either the tight heading tracking or the mono/sans split collapses the design into a generic Tailwind
page.

Recreation of the ColorLib "Lantern" design (https://colorlib.com/wp/template/lantern/, live preview
https://preview.colorlib.com/theme/lantern/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `lantern`
* **ColorLib page:** https://colorlib.com/wp/template/lantern/ — **HTTP 200, 111,390 B**, `<title>`
  **"Lantern - Knowledge Base Website Template 2026 - Colorlib"**, breadcrumb *"HTML & CSS Website
  Templates › Directory Website Templates › Lantern"*, **Released September 2026**, categories
  **Astro · Directory · Education · Tailwind CSS**, credits *"Images from Unsplash"* (there are **no
  content images** in the design — see §Class census). `<meta name="description">` carries the
  findability paragraph quoted above.
* **Live preview:** https://preview.colorlib.com/theme/lantern/ — **HTTP 200, 64,098 B** read 2026-10-25
  with `curl -4`. A 2026 **Astro** build: one hashed stylesheet `_astro/Base.CtG3PydY.css` (**62,940 B**,
  `/*! tailwindcss v4.3.3 */`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B** — the plain base kit,
  the same size the Driftway prep measured on `kinetic`) and the view-transition router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.CYDbzu1r.js` (**16,357 B** — the same
  `CYDbzu1r` router every 2026 Astro build in this catalogue ships).
* **No archive:** `https://preview.colorlib.com/downloads/free/lantern.zip` → **404** (9 B `text/plain`).
  The live preview is the only authoritative source for both DOM and tokens.
* **Prefix ladder** (all **404**): `theme/bootstrap/lantern/` (9 B), `theme/bb/lantern/` (9 B),
  `colorlib.com/etc/cs/lantern/index.html` (27,542 B — a real ColorLib 404 page, not a demo). This is a
  normal 2026 design at `theme/<slug>/`, not a Bootstrap-family demo. `/theme/lantern/index.html` is the
  same **64,098-byte** document as the directory URL.
* **Inner pages are live** (they are the authority for anything a single page has to invent):
  `about/` **37,743 B** · `blog/` **43,069 B** · `contact/` **36,284 B** · `terms/` **37,380 B** ·
  `privacy/` **38,641 B** · `elements/` **57,181 B** (the style guide, linked from the footer as "Style
  Guide") — all HTTP **200**, each with its own `<title>` (`About these docs | Lantern`, `Blog | Lantern`,
  `Contact support | Lantern`, `Terms of Service | Lantern`, `Privacy Policy | Lantern`,
  `Elements | Lantern`). The **`.html` form of every route is 404**; a bare `/about` answers **308** with a
  trailing-slash `Location`.
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**lantern-template.jpg** — **HTTP
  200, 257,995 B**, `image/jpeg` (not AVIF), **2400 × 1892**. A genuine macOS browser capture (traffic
  lights, rounded title bar, grey desk ground) framing the header, the whole search hero and the
  six-card category grid — nothing below the grid. See §Screenshot analysis.
* **New name:** `endpaper` (`apps/endpaper`, `@free-react-templates/endpaper`) — one lowercase word: the
  inside leaf of a book, the sheet that carries the endpapers of a volume; it names the *documentation*
  subject without touching the source name (`lantern` is also **taken**: `apps/lantern` recreates ColorLib
  **Quitelight**, and `openspec/specs/template-lantern/spec.md` documents that other design). Checked
  2026-10-25 against `origin/main` (`420707d19`): **no** `apps/endpaper`, **no**
  `openspec/specs/template-endpaper/`, **no** `docs/templates/endpaper/`, `git grep -il endpaper
  origin/main` prints **nothing** (0 hits repo-wide, so the zero-substring rule holds), `grep -ci endpaper
  TEMPLATES.md` is **0**, and all three ColorLib URL forms — `wp/template/endpaper/`,
  `preview.colorlib.com/theme/endpaper/`, `preview.colorlib.com/theme/bootstrap/endpaper/` — return
  **404**. Re-run those checks before renaming. (`errata`, `palimpsest`, `incunabula`, `deckle`, `garland`
  were also free and verified; `vellum`, `codex`, `lexicon`, `almanac`, `folio` are all taken.)
* **Deploy target:** https://endpaper.free.componentdock.com (`apps/endpaper/public/CNAME`, `homepage` in
  `apps/endpaper/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** (see below). Suggested home: **`## Directory`** — the
  catalogue's category order is *Astro* → *Directory* → *Education* → *Tailwind CSS*, and `TEMPLATES.md`
  has no `## Astro` section, so the first category that exists in the checklist wins; the breadcrumb also
  files it under *Directory Website Templates*. The heading reads **`## Directory (33)`** at line **1531**
  on `origin/main` `420707d19`. Insert in source-name alphabetical order: **`Jobstart`** (1551) <
  **`Lantern`** < **`Listco`** (1552), so the row goes between them and the heading becomes **`(34)`**.
  (`## Education (44)` at line 1630 is the defensible alternative if the marketplace prefers the subject
  over the breadcrumb; do not add the row twice.)

### Why this design has no row (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, every mark `[x]` — but the catalogue is not complete: all 40
pages of https://colorlib.com/wp/templates/ were crawled and compared with the slugs the checklist cites,
and **256 designs are on the listing that the checklist never recorded** (42 standalone + 214 snippet
variants). `docs/catalog-coverage.md` carries this design's line:
`| lantern | app exists (other design); orphan prep (other design) |`. So **the app name is taken but the
design is not**: `apps/lantern` and `openspec/specs/template-lantern/` recreate ColorLib **Quitelight**
(blog template, preview `theme/quitelight/`), and this design needs a fresh invented name — which is
exactly why the row is unbuilt while its name looks used.

Queue position in that table: this design follows `kinetic` (prepped as Driftway) and precedes **seven
standalone designs that are still unprepped** — `docs/catalog-coverage.md` is the ordered queue and holds
all 42 (their invented names are not written here on purpose: a bare unprepped slug inside a spec makes
the coverage scan report that item as already done). Prepped and unbuilt before this one: Percline,
Quarto, Hedgerow, Slotline, Pipewright, Driftway; shipped: Thermly, Plantroom, Veranda, Flowcert, Aquifer,
Smallpaw, Kettle, Chalkline, Emberly, Rodline, Brassworks, Closeknit, Stoke.

⚠️ **Why the usual "is it prepped?" grep lies for this slug.** `grep -rl 'theme/lantern/' openspec/specs`
prints **nothing** on `420707d19`, but `openspec/specs/template-lantern/spec.md` exists and is a prep for
**Quitelight** — its `- **Preview URL:**` line reads `theme/quitelight/`, and its invented name happens to
be the same word this design is called. A folder-name check ("is `template-lantern` taken?") therefore
reports this item as prepped. Coverage is per **slug**, read from the spec's `Source slug:` line, never
from a folder name.

**Implementer note:** because there is no row yet, add one **before** the PR claims anything — paste this
line into `## Directory`, between **Jobstart** and **Listco**, and bump the count:

```
- [x] **Lantern** — [colorlib](https://colorlib.com/wp/template/lantern/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/lantern-template.jpg) · [endpaper](https://endpaper.free.componentdock.com)
```

⚠️ **Re-measure the line numbers and the count yourself** — this prep recorded `## Directory (33)` at 1531,
`Jobstart` at 1551 and `Listco` at 1552 on `420707d19`. Locate `## Directory`, then find the last row whose
source name sorts before `Lantern`.

## Reference readings (2026-10-25, `curl -4`)

| reading | URL | status | bytes |
| --- | --- | --- | --- |
| landing page | `https://preview.colorlib.com/theme/lantern/` | 200 | 64,098 |
| stylesheet | `…/lantern/_astro/Base.CtG3PydY.css` | 200 | 62,940 |
| behaviour bundle | `…/lantern/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` | 200 | 16,233 |
| view-transition router | `…/lantern/_astro/ClientRouter…CYDbzu1r.js` | 200 | 16,357 |
| inline `<style>` (fonts) | inside the HTML `<head>` | — | **7** family/weight blocks: Inter 400/500/600/700 + JetBrains Mono 400/500/600, all `/cf-fonts/v/…/5.2.8/…woff2` |
| inline `<script>` (theme) | inside the `<head>` | — | `applyTheme()` — `localStorage.theme` or `prefers-color-scheme`, re-run on `astro:after-swap` |
| inline `<script>` (preloader) | end of `<body>` | — | window `load` → `opacity:0` → `remove()` after 300 ms; also strips the preloader from `e.newDocument` on `astro:before-swap` |
| favicon | `…/lantern/favicon.svg` | 200 | 377 |
| header logo (ink) | `…/lantern/assets/img/logo.svg` | 200 | 525 |
| header/footer logo (light ink) | `…/lantern/assets/img/logo-light.svg` | 200 | 525 |
| og image | `…/lantern/og-image.jpg` | **404** | 9 — `<meta property="og:image" content="/og-image.jpg">` is dead |
| archive | `…/downloads/free/lantern.zip` | **404** | 9 |
| catalogue shot | `https://colorlib.com/wp/wp-content/uploads/sites/2/lantern-template.jpg` | 200 | 257,995 |
| catalogue page | `https://colorlib.com/wp/template/lantern/` | 200 | 111,390 |
| inner: about | `…/lantern/about/` | 200 | 37,743 |
| inner: blog | `…/lantern/blog/` | 200 | 43,069 |
| inner: contact | `…/lantern/contact/` | 200 | 36,284 |
| inner: terms | `…/lantern/terms/` | 200 | 37,380 |
| inner: privacy | `…/lantern/privacy/` | 200 | 38,641 |
| inner: elements (style guide) | `…/lantern/elements/` | 200 | 57,181 |
| route with `.html` | `…/lantern/about.html` (and 5 siblings) | **404** | 9 |
| bootstrap-family path | `…/theme/bootstrap/lantern/` | **404** | 9 |
| bb-family path | `…/theme/bb/lantern/` | **404** | 9 |

Google Fonts delivery for the recreation — **HTTP 200**, verified with `curl -4 -o /dev/null -w
'%{http_code}' -A "<Chrome UA>"` on 2026-10-25:

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap
```

Both faces are genuinely what the reference ships — but **not from the theme**: `Base.CtG3PydY.css`
contains **0** `@font-face` rules and the document has **no** `fonts.googleapis.com` link. The faces arrive
in a host-injected `<style>` block of `/cf-fonts/v/inter/5.2.8/…` and `/cf-fonts/v/jetbrains-mono/5.2.8/…`
faces (Unicode-range split, `font-display:swap`). The recreation loads them from Google Fonts instead —
same families, same weights, no substitution to document. Do **not** add a serif: this design has none.

## Design tokens (measured from `Base.CtG3PydY.css`, 62,940 B, and from `getComputedStyle` at 1440 px)

<!-- heading-role-tokens: lantern/ink/template-endpaper -->
**Heading-ink role (measured 2026-10-25):** the `headings` row states `#f3f4f6`, but the page declares it only for non-heading elements (body:is(.dark *)) — no heading rule carries it. The rendered headings paint rgb(17, 24, 39) x19, rgb(255, 255, 255) x10.
<!-- /heading-role-tokens -->

### Brand ramp — `primary` (**custom blue-grey, not a stock Tailwind ramp**)

| token | hex | where it carries the design |
| --- | --- | --- |
| `primary-50` | `#f6f7f8` | **the most-read band's ground** (`bg-primary-50`), the changelog closing note's fill, the row hover (`hover:bg-primary-50`), the hero gradient's far stop in other page templates |
| `primary-100` | `#eceef0` | the 40 px category-card **icon square** (`bg-primary-100`), the FAQ's intro pill (`bg-primary-100`), the support band's body ink (`text-primary-100`), the newsletter input's `text-primary-100` |
| `primary-200` | `#d5dade` | **every card border** (`border-primary-200`), the hero band's bottom rule, the changelog row rules, the changelog note border, the article-card border, the popular-pill text (`text-primary-200`) |
| `primary-300` | `#b0b9c1` | the hero lede (`text-primary-300`), band ledes on light grounds (`dark:text-primary-300`), support-card body copy, the closing band's label ink |
| `primary-400` | `#84919d` | **every muted metadata label**: the category card's `18 articles` badge, the article row's `Updated … · N min read` and `VIEWS`/`HELPFUL` labels, the changelog date, the popular pill's `Popular:` label, the support card's `Best for …` line |
| `primary-500` | `#657381` | the card link lists (`text-primary-500`), the focus border on inputs (`focus:border-primary-500`), the newsletter's focus ring |
| `primary-600` | `#505c69` | **the brand**: every solid CTA (`bg-primary-600` — header "Contact support", hero-less but the mobile bar's second button, cookie "Accept All"), the `#scroll-progress` fill, the back-to-top disc, the preloader's spinner head, the closing gradient's **start**, `hover:bg-primary-600` on the mobile bar's secondary button |
| `primary-700` | `#424b56` | the search field's border (`border-primary-700`), the popular pills' border, the support cards' border, the footer's focus/hover ink, the closing band's heading-to-CTA shadow tone |
| `primary-800` | `#3a4149` | the **search input's ground** (`bg-primary-800`), the support cards' translucent fill (`bg-primary-800/60`), the changelog badge text (`text-primary-800`), the closing gradient's **end** |
| `primary-900` | `#22272d` | **the two dark bands**: the search hero and the support band (`bg-primary-900`), plus `dark:bg-primary-900/30 · /40` variants |

`primary-950` is **not** defined in the compiled sheet — the ramp stops at 900. Do not invent 950.

### Accent ramp — `accent` (**stock Tailwind cyan, used as the signal**)

| token | hex | where it carries the design |
| --- | --- | --- |
| `accent-300` | `#67e8f9` | `hover:text-accent-300` on the popular pills (the only hover the pills have) |
| `accent-400` | `#22d3ee` | the **support band's eyebrows, response times and the card-icon bulb colour**, plus the logo's lantern bulb; `dark:text-accent-400` for every eyebrow on a dark ground |
| `accent-500` | `#06b6d4` | the search field's **focus border** (`focus:border-accent-500`) and the logo's light-cone fill at 35 % |
| `accent-600` | `#0891b2` | the **"Added"** changelog badge (`bg-accent-600`), the category card's sub-link arrows (`text-accent-600`), the mobile bar's secondary hover |
| `accent-700` | `#0e7490` | **every light-ground eyebrow** (`text-accent-700`): BROWSE, MOST READ, CHANGELOG, the article category labels, the article `HELPFUL` figures |

### Chrome greys (stock Tailwind, structural only)

| token | hex | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | the FAQ's answer ground on hover, the closed panel's ink unaffected |
| `gray-100` | `#f3f4f6` | the FAQ's 32 px plus disc (`bg-gray-100`), the mobile bar's "Call Now" ground (`bg-gray-100`), `hover:bg-gray-100` on the theme toggle and the closing band's white CTA |
| `gray-200` | `#e5e7eb` | the header's bottom rule (`border-gray-200`), the FAQ's `divide-y`, the preloader ring, the cookie strip's top rule |
| `gray-300` | `#d1d5db` | the footer's body ink (`text-gray-300`), the cookie "Decline" border |
| `gray-400` | `#9ca3af` | the footer blurb and links (`text-gray-400`), the nav's resting ink, `placeholder-gray-500` sits beside it |
| `gray-500` | `#6b7280` | the footer's legal line (`text-gray-500`), the newsletter placeholder |
| `gray-600` | `#4b5563` | **body copy on light bands** (`text-gray-600`), the nav labels' resting colour, the FAQ's plus glyph ink |
| `gray-700` | `#374151` | the footer's newsletter input border (`border-gray-700`), the social tiles' hairline |
| `gray-800` | `#1f2937` | the footer's social tile ground (`bg-gray-800`), the newsletter input ground, dark-mode card borders |
| `gray-900` | `#111827` | **the footer ground** (`bg-gray-900`), every heading's ink on light bands (`text-gray-900`), the dark-mode mobile bar |
| `gray-950` | `#030712` | the dark-mode page ground (`dark:bg-gray-950`), the FAQ's and preloader's dark fill |

Status hues on this page, all stock: `red-600 #dc2626` (Breaking badge), `amber-400 #fbbf24` on
`amber-950 #451a03` (Deprecated badge). Nothing else leaves the four ramps above.

### Dark mode (measured by clicking `[data-dark-toggle]`, `localStorage.theme = "dark"`)

| role | light | dark |
| --- | --- | --- |
| page / body | `#ffffff` / ink `#111827` | `#030712` (`gray-950`) / ink `#f3f4f6` (`gray-100`) |
| header | `rgba(255,255,255,.8)` + `blur(16px)`, rule `gray-200` | `oklab(0.1296 -0.0040 -0.0271 / .8)` ≈ `gray-950/80` + blur, rule `gray-800` |
| search hero | `#22272d` | `#22272d` (unchanged), bottom rule `primary-800` instead of `primary-200` |
| search input | `#3a4149`, border `#424b56` | unchanged |
| category card | `#ffffff`, border `#d5dade` | `primary-900/40`, border `primary-800` |
| category icon square | `#eceef0`, ink `#111827` | `primary-800`, ink `gray-100` |
| most-read band | `#f6f7f8` | `primary-900/30` |
| support band | `#22272d` | `#22272d` (unchanged) |
| FAQ band | `#ffffff` | `#030712` (`gray-950`) |
| footer | `#111827` (unchanged) | `#111827` (unchanged) |
| headings | `#111827` | `#f3f4f6` (`gray-100`, **not** white) |

### Typography

| element | face | size / line-height | weight | tracking | colour |
| --- | --- | --- | --- | --- | --- |
| `html`/`body` | `Inter, system-ui, sans-serif` | 16 / 24 | 400 | normal | `#111827` on `#ffffff` |
| hero `h1` | Inter | **36 / 40** (`text-3xl sm:text-4xl`; **30** below 640 px) | **700** | **−0.9 px** (`tracking-tight`) | white |
| hero lede | Inter | 16 / 24, `max-w-xl` centred | 400 | normal | `primary-300` (`#b0b9c1`) |
| search input text | Inter | 16 / 24 | 400 | normal | white, `placeholder:text-primary-400` |
| `⌘K` hint | JetBrains Mono | 12 | 400 | normal | `primary-300` on `primary-700` |
| popular pill | JetBrains Mono | 12 | 400 | normal | `primary-200`, `border-primary-700`, `rounded-full`, `px-3 py-1` |
| section eyebrow | JetBrains Mono | **12** (`text-xs`) | **600** | **+1.8 px** (`tracking-[0.15em]`), uppercase | `accent-700` light / `accent-400` dark |
| band `h2` | Inter | **36 / 40** (`text-3xl sm:text-4xl`) | 700 | **−0.9 px** | `gray-900` / white on dark |
| band lede | Inter | 16 / 24 | 400 | normal | `primary-600` light / `primary-300` dark |
| category card title | Inter | 16 / 24 | 600 | normal | `gray-900` |
| category card body | Inter | 14 / 22.75 (`text-sm leading-relaxed`) | 400 | normal | `primary-600` |
| category card counter | JetBrains Mono | 12 | 400 | normal | `primary-400` |
| category card sub-link | Inter | 14 | 400 | normal | `primary-500`, arrow `accent-600` |
| article eyebrow | JetBrains Mono | **11** (`text-[11px]`) | 400 | **+0.55 px** (`tracking-wider`), uppercase | `accent-700` |
| article title | Inter | 16 / 24 | 600 | normal | `gray-900` |
| article meta line | JetBrains Mono | 12 | 400 | normal | `primary-400` |
| article metric label | JetBrains Mono | **10** (`text-[10px]`) | 400 | +0.55 px, uppercase | `primary-400` |
| article metric value | JetBrains Mono | 14 (`text-sm`) | 600 | normal, `tabular-nums` | `gray-900`; the helpfulness figure `accent-700` |
| changelog version | JetBrains Mono | 14 | 600 | normal | `gray-900` |
| changelog date | JetBrains Mono | 12 | 400 | normal | `primary-400` |
| changelog badge | JetBrains Mono | **10** | **700** | +0.55 px, uppercase | per status (below) |
| changelog title | Inter | 16 | 600 | normal | `gray-900` |
| changelog body | Inter | 14 / 22.75 | 400 | normal | `primary-600` |
| support card title | Inter | 16 | 600 | normal | white |
| support card body | Inter | 14 / 22.75 | 400 | normal | `primary-300` |
| support `dt` (Response) | Inter | 14 | 400 | normal | `primary-400` |
| support `dd` (value) | JetBrains Mono | 14 | 600 | normal | `accent-400` |
| support "Best for" | Inter | 12 | 400 | normal | `primary-400` |
| FAQ question | Inter | **18 / 28** (`text-lg`) | 600 | normal | `gray-900` |
| FAQ answer | Inter | 16 / 24 | 400 | normal | `gray-600` |
| closing `h2` | Inter | **48 / 1** (`lg:text-5xl`), 36 at `sm` | 700 | −0.9 px | white |
| closing lede | Inter | 18 / 28 (`text-lg`) | 400 | normal | `primary-100` |
| footer column head | Inter | 14 | 600 | +0.7 px (`tracking-wider`), uppercase | white |
| footer link / blurb | Inter | 16 / 24 (`text-sm` for links) | 400 | normal | `gray-400` |
| footer legal | Inter | 14 | 400 | normal | `gray-500` |

Rules that are **not** utilities and must be copied verbatim (all from the compiled sheet):

* `html{scroll-behavior:smooth; -webkit-text-size-adjust:100%}`; `body{line-height:1.5}`; the sheet never
  sets a body colour, so `body` inherits `#111827` from the preflight reset.
* `.container` → `width:100%`, capped at **1280 px**, with `px-4` / `lg:px-8`, so inner content measures
  **1216 px** at 1440 and **358 px** at 390.
* `.img-shimmer{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%) 0 0/200% 100%;
  animation:1.5s ease-in-out infinite shimmer}` — applied to the footer logo (`class="h-10 w-auto
  img-shimmer"`), i.e. a shimmer on an SVG, visible only during load. Optional to reproduce; if you do,
  animate nothing under reduced motion.
* `[data-nav-link].nav-active{color:#111827;font-weight:600}` — the active state the header's
  IntersectionObserver fires (measured: "Support" renders `#111827`/600 while its section is in view).
* **`@media (prefers-reduced-motion:reduce)`** — the sheet has **no** reduced-motion block of its own; the
  only guard is in `base.js` (the reveal initializer returns early when
  `matchMedia('(prefers-reduced-motion: reduce)').matches`). The recreation must add the guard where the
  reference has none (see §Behaviour).
* `.prose`, `.btn`, `.card`, `@keyframes shimmer`, `.marquee*`, `.tilt`, `.magnetic` exist in the sheet
  because the family kit ships them; **this page uses none of them** except `.img-shimmer`. Do not import
  them wholesale.

### Buttons, fields, radii, shadows (measured at 1440)

| control | classes (source) | measured |
| --- | --- | --- |
| header CTA | `hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700 lg:inline-flex` | **10 / 20** padding, radius **8**, 14 px / 500, `#505c69`, no shadow |
| search field | `w-full rounded-xl border border-primary-700 bg-primary-800 py-4 pl-14 pr-20 text-white` | **704 × 58** at 1440, radius **12**, 16 px padding block, 56 px left inset (icon), `#3a4149` fill |
| search icon | absolutely positioned `left-4`, 20 px stroke icon, `text-primary-400` | 20 × 20 at x = 16 inside the field |
| `⌘K` hint | `absolute right-4 top-1/2 -translate-y-1/2 rounded border border-primary-600 bg-primary-700 px-2 py-1 font-mono text-xs` | radius **4**, 12 px, `#424b56` fill |
| popular pill | `rounded-full border border-primary-700 px-3 py-1 font-mono text-xs text-primary-200 hover:border-primary-500 hover:text-accent-300` | 24 px tall, radius full, 1 px `#424b56` |
| category card | `rounded-xl border border-primary-200 bg-white p-6 hover:border-primary-300 hover:shadow-lg` | **392 × 279** at 1440, radius **12**, 24 px padding, **no shadow at rest** |
| category icon square | `flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-lg` | **40 × 40**, radius **8**, 18 px glyph |
| article card | `overflow-hidden rounded-xl border border-primary-200 bg-white` | radius **12**, one card around all six rows |
| article row | `flex flex-wrap items-center gap-x-6 gap-y-2 p-5 hover:bg-primary-50` | 20 px padding, 24 px column gap |
| changelog badge | `inline-block rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider` | radius **4**, 18 px tall; colours per status |
| changelog note | `mt-6 rounded-xl border border-primary-200 bg-primary-50 px-5 py-4 text-sm` | radius **12**, 20 / 16 padding |
| support card | `flex flex-col rounded-xl border border-primary-700 bg-primary-800/60 p-5` | radius **12**, 20 px padding, translucent fill |
| FAQ plus disc | `flex h-8 w-8 rounded-full bg-gray-100 text-gray-600` | **32 px**, rotates **45°** when open |
| FAQ row | `py-6` inside `divide-y divide-gray-200` | 24 px block padding, 1 px rules |
| closing primary CTA | `inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 shadow-lg hover:bg-gray-100 hover:shadow-xl` | radius **8**, 16 px, 32 px sides |
| closing secondary CTA | `inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white hover:border-white hover:bg-white/10` | **2 px** white/30 border |
| social tile | `rounded-lg bg-gray-800 p-2.5 text-gray-400 hover:bg-gray-700 hover:text-white` | **40 × 40**, radius **8** |
| newsletter button | `rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700` | radius **8** |
| newsletter input | `min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-white` | radius **8**, 42 px tall |
| back-to-top | `h-12 w-12 rounded-full bg-primary-600 shadow-lg shadow-primary-600/25` | **48 px** disc, bottom/right 24 px |
| cookie buttons | `rounded-lg px-4 py-2 text-sm font-medium` (Decline = `border-gray-300`, Accept = `bg-primary-600`) | 36 px tall |

Radii in use: **4 px** (`rounded`: changelog badge, kbd, small chips), **8 px** (`rounded-lg`: buttons,
icon square, social tiles, footer form controls), **12 px** (`rounded-xl`: category cards, the article
list card, the search field, the changelog note, support cards), **full** (`rounded-full`: popular pills,
FAQ discs, back-to-top, the closing band's blurred blobs). No `rounded-2xl`/`3xl` on this page.

Shadows in use: `shadow-lg` on the header past 50 px scroll, on the closing band's two CTAs, on the
category card hover, on the cookie strip and the mobile bar; `shadow-primary-600/25` on the back-to-top
disc (`0 10px 15px -3px rgba(80,92,105,.25)`); `shadow-xl` on the two hover states. Cards at rest carry
**no** shadow — only a 1 px border.

### Band heights (measured, `getBoundingClientRect`)

| band | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| header (sticky) | **81** | 81 | **65** | 65 |
| 1 `#search` | **397** | 397 | 397 | **453** |
| 2 `#categories` | **985** | 1,008 | 1,306 | **2,135** |
| 3 `#articles` | **1,087** | 1,087 | 1,087 | **1,487** |
| 4 `#changelog` | **1,223** | 1,223 | 1,291 | **1,633** |
| 5 `#support` | **720** | 720 | 908 | **1,399** |
| 6 `#faq` | **820** | 820 | 756 | **912** |
| 7 `#contact` | **452** | 452 | 380 | **476** |
| footer | **539** | 539 | 893 | **1,209** |
| **document** | **6,304** | 6,327 | 7,084 | 9,769 |

The header is `h-16` (64 px) + 1 px border below 1024 and `lg:h-20` (80 px) + 1 px above it. Grid columns,
measured: category grid `392 × 3` at 1440 → `306.7 × 3` at 1024 → `350 × 2` at 768 → `358 × 1` at 390;
support grid `257 × 4` → `225 × 4` → `350 × 2` → `358 × 1`; the changelog row is
`grid-cols-[8rem_1fr]` (**128 + 672**) at ≥640 and a single column below. The category card is
**392 × 279** at 1440 and **358 × ~300** at 390.

⚠️ **The reference overflows horizontally at 390 px** (`documentElement.scrollWidth` **401** vs
`clientWidth` **390**). Cause, measured by hiding columns one at a time: the footer's **Stay Updated**
column (`lg:col-span-3`, the email input + Subscribe row) has a min-content width of **385 px**, and
because every footer grid child is `min-width:auto`, all three stacked tracks stretch to 385 px inside a
358 px content box. `min-width:0` on the grid children (or `min-w-0` on the form's flex parent) restores
`scrollWidth === clientWidth`. It is a genuine defect — **do not copy it**; assert no overflow at
320/390/768/1024/1280/1440.

## Reference document order

Measured ids, in document order, with the element each one is:

```
#preloader            (fixed inset-0 z-100, bg-white, 40 px spinning ring, 4 px border with a primary-600 head; faded + removed 300 ms after load)
#main-content         (the skip link's target — <main>)
#scroll-progress      (fixed top-0 left-0 z-60, h-0.5 (2 px), bg-primary-600, width = scroll %)
HEADER                (sticky top-0 z-50, 81 px, border-b gray-200, bg-white/80 backdrop-blur-lg; shadow-lg past 50 px)
  band 1  #search     (397 px, bg-primary-900, border-b primary-200 — search hero)
  band 2  #categories (985 px, white — six category cards)
  band 3  #articles   (1,087 px, bg-primary-50 — "Most read", six rows in one card)
  band 4  #changelog  (1,223 px, white — four version entries)
  band 5  #support    (720 px, bg-primary-900, text-primary-100 — four contact routes)
  band 6  #faq        (820 px, white — five-question accordion about the docs)
  band 7  #contact    (452 px, gradient primary-600 → primary-800 — closing CTA)
FOOTER                (bg-gray-900, 539 px — brand + 4 columns + newsletter + legal bar)
#mobile-cta           (fixed bottom-0 z-40, lg:hidden, two buttons — a coworking leftover)
#cookie-consent       (fixed bottom-0 z-50, 87 px, slides up at +1.5 s)
#back-to-top          (fixed bottom-6 right-6 z-50, 48 px primary disc; opacity 0 + translateY(16px) until 300 px)
```

⚠️ `#spaces` — referenced by **four footer links** — **does not exist** on the landing page *or* on any of
the six inner pages (checked: `id="spaces"` count = 0 in all seven documents). See the link census.

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Header (81 px at ≥1024, sticky)

Logo = **two `<img>` tags** (`assets/img/logo.svg` in light, `logo-light.svg` in dark), `h-8 lg:h-10`,
`gap-2`, inside an `<a href="/">` with no accessible name beyond the image `alt="Lantern"`. The SVG is a
**168 × 40** wordmark: a lantern glyph (cap `#22272d`, body `#22272d`, **bulb `#22d3ee`**, light cone
`#06b6d4` at 35 %) plus a live `<text font-family="Inter" font-size="21" font-weight="700">Lantern</text>`
— i.e. **the wordmark is text inside the SVG**, so it breaks if Inter is unavailable. The light logo
(`logo-light.svg`) repaints the glyph `#d5dade` and the wordmark `#f6f7f8`.

Nav (`hidden lg:flex lg:items-center lg:gap-8`, 32 px gaps) — **seven** labels, 14 px / 500 / `gray-600`,
hover `gray-900`: **Categories** (`#categories`) · **Popular articles** (`#articles`) · **Changelog**
(`#changelog`) · **Support** (`#support`) · **About** (`/about`) · **Blog** (`/blog`) · **Contact**
(`/contact`). Right cluster: a moon button (`data-dark-toggle`, `aria-label="Toggle dark mode"`, 40 px
`rounded-lg` hover `gray-100`) and the **"Contact support"** pill (`/contact`, `hidden … lg:inline-flex`).
Below 1024 the nav collapses to a hamburger (`data-mobile-toggle`, `aria-label="Open menu"`,
`aria-expanded`) over a `hidden lg:hidden` panel (`data-mobile-menu`) that repeats the seven labels at
16 px / 500 / `gray-900` (`block py-3`) plus a full-width "Contact support" CTA under a hairline.

### 1 — `#search` (397 px, `bg-primary-900`, `border-b border-primary-200`, `py-16 sm:py-20`)

Centred column (`max-w-3xl`), `text-center`:

* `h1` — **"How can we help?"** (36 / 40, white, −0.9 px).
* Lede — *"Search 240 articles across guides, API reference and troubleshooting. Most questions are
  answered in under a minute."* (16 / 24, `primary-300`, `max-w-xl`).
* Search form — `role="search"`, **`onsubmit="return false"`** (i.e. inert), a magnifier icon at
  `left-4`, an `<input id="docsearch" type="search" placeholder="Search for a guide, endpoint or error
  message…">` (704 × 58, radius 12, `#3a4149`), and a `⌘K` `<kbd>` at the right — a hint for a command
  palette that **does not exist** in the page's JS. No handler, no filtering, no shortcut binding.
* Popular row — `mt-5 flex flex-wrap items-center justify-center gap-2 text-sm`, label **"Popular:"** in
  `primary-400`, then **five** mono pills: **rate limits · webhook retries · 401 unauthorized · sandbox
  keys · pagination**. Each pill is an `<a>`; four go to `/theme/lantern/#categories` variants and one to
  `/theme/lantern/#articles` (see census) — the pills are navigation, not search queries.

### 2 — `#categories` (985 px, white, `py-20 sm:py-28`)

Head (`max-w-2xl`, left-aligned): mono eyebrow **"Browse"** (`accent-700`), `h2` **"Documentation by
area"**, lede *"Start here if you would rather read than search. Each area has a maintainer and a
last-reviewed date on every page."*

`ul.mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3` — **six** cards. Each card is
`group relative flex flex-col rounded-xl border border-primary-200 bg-white p-6` with `hover:border-
primary-300 hover:shadow-lg`, and carries: a **40 × 40 `rounded-lg bg-primary-100` square holding a single
text glyph** (not an SVG), the article count top-right in mono 12 / `primary-400`, an `h3` 16 / 600 whose
link covers the whole card via `after:absolute after:inset-0`, a 14 px body, then a `border-t
border-primary-100` list of **three** links (`flex items-center gap-2 text-sm text-primary-500`) each
prefixed by a `→` in `accent-600`.

| # | glyph | count | title | body | three links |
| --- | --- | --- | --- | --- | --- |
| 1 | `▲` | 18 articles | Getting started | Install, authenticate and make a first successful call in about ten minutes. | Quickstart in your language · Authentication and API keys · Sandbox versus production |
| 2 | `⌘` | 74 articles | API reference | Every endpoint with request and response schemas, error codes and copyable examples. | Endpoint index · Error code reference · Pagination and cursors |
| 3 | `⇄` | 21 articles | Webhooks | Event types, delivery guarantees, retry behaviour and signature verification. | Verifying signatures · Retry and backoff schedule · Replaying failed deliveries |
| 4 | `⚠` | 43 articles | Troubleshooting | The errors people actually hit, written as symptoms rather than as causes. | 401 despite a valid key · Timeouts on large exports · Duplicate webhook deliveries |
| 5 | `◈` | 52 articles | Guides | Longer walkthroughs for complete tasks that span several endpoints. | Migrating from v2 to v3 · Building an idempotent sync · Handling partial failures |
| 6 | `◉` | 32 articles | Account and billing | Plans, limits, invoices, seat management and data export. | Understanding rate limits · Exporting your data · Changing plan mid-cycle |

The six counts sum to **240**, which is the number the hero states — a detail worth preserving.

### 3 — `#articles` (1,087 px, `bg-primary-50`, `py-20 sm:py-28`)

Head (`max-w-2xl`): eyebrow **"Most read"**, `h2` **"What people open most this month"**, lede *"With the
proportion who marked each one helpful, because an article nobody finds useful should be rewritten rather
than left up."*

`ol.mt-12 overflow-hidden rounded-xl border border-primary-200 bg-white` — **one card, six rows**, divided
by hairlines; each row is `relative flex flex-wrap items-center gap-x-6 gap-y-2 p-5 hover:bg-primary-50`
with a full-card link overlay. Left: category eyebrow (mono 11, uppercase, `accent-700`), title (16 / 600),
meta line (mono 12, `primary-400`, **"Updated 6 days ago · 4 min read"**). Right: a `dl` of **two**
metrics, labels `VIEWS` / `HELPFUL` (mono 10, uppercase, `primary-400`), values mono 14 / 600
`tabular-nums`, the helpfulness figure in `accent-700`.

| # | category | title | meta | views | helpful |
| --- | --- | --- | --- | --- | --- |
| 1 | Troubleshooting | Why am I getting a 401 with a key that works elsewhere? | Updated 6 days ago · 4 min read | 18.4k | 94% |
| 2 | Account and billing | Rate limits, burst allowance and what a 429 actually means | Updated 2 weeks ago · 6 min read | 14.1k | 91% |
| 3 | Webhooks | Verifying webhook signatures without leaking timing information | Updated 3 days ago · 8 min read | 11.7k | 96% |
| 4 | Guides | Migrating from v2 to v3 — the four breaking changes | Updated Yesterday · 12 min read | 9.8k | 88% |
| 5 | API reference | Cursor pagination, and why offset stops working past 10,000 rows | Updated 1 month ago · 5 min read | 7.2k | 92% |
| 6 | Guides | Building a sync that survives being run twice | Updated 3 weeks ago · 10 min read | 6.4k | 89% |

### 4 — `#changelog` (1,223 px, white, `py-20 sm:py-28`)

Head (`max-w-2xl`): eyebrow **"Changelog"**, `h2` **"What changed, and when it will break you"**, lede
*"Breaking changes are announced at least ninety days before they ship, and never in a patch release."*

`ol.mt-12` — **four** entries, each `grid gap-4 border-t border-primary-200 py-6 sm:grid-cols-[8rem_1fr]
sm:gap-8` (128 px + rest). Left cell: version in mono 14 / 600 and the date in mono 12 / `primary-400`.
Right cell: a status badge, an `h3` (16 / 600), a 14 px body. Then a closing note in
`rounded-xl border border-primary-200 bg-primary-50 px-5 py-4 text-sm`:

* **v3.4.0 · 12 Mar 2032 · `Added`** (`bg-accent-600 text-white`) — *Cursor pagination on the events
  endpoint* — "Events now accept a cursor parameter alongside the existing offset. Offset continues to
  work and remains the default, but degrades past ten thousand rows and will be deprecated in v4."
* **v3.3.2 · 28 Feb 2032 · `Fixed`** (`bg-primary-200 text-primary-800`) — *Duplicate webhook deliveries
  under retry* — "A retry could occasionally deliver an event twice with the same delivery ID when the
  first attempt timed out after the handler had already committed. Deduplicate on delivery ID regardless
  — this remains the documented guarantee."
* **v3.3.0 · 09 Feb 2032 · `Deprecated`** (`bg-amber-400 text-amber-950`) — *The legacy list filters* —
  "Filtering with bracket syntax is deprecated in favour of the structured query parameter. Bracket
  syntax keeps working until v4.0 at the earliest, which is not before January 2033."
* **v3.0.0 · 14 Nov 2031 · `Breaking`** (`bg-red-600 text-white`) — *Timestamps are RFC 3339 everywhere* —
  "All timestamps in requests and responses are now RFC 3339 with an explicit offset. Unix epoch integers
  are no longer accepted. Announced 2 August 2031, shipped 104 days later."
* Note — "Every entry links to the migration note where one is needed. Deprecations stay functional for at
  least two minor versions after announcement, and we email every account using an affected endpoint
  rather than relying on you reading this page."

The four badge classes are the page's **status colour system**; keep one variant per status and keep
"Deprecated" the only amber and "Breaking" the only red.

### 5 — `#support` (720 px, `bg-primary-900`, `text-primary-100`, `py-20 sm:py-28`)

Head (`max-w-2xl`): eyebrow in `accent-400` **"When the docs do not answer it"**, `h2` in white **"How to
reach a person"**, lede in `primary-300` *"Four routes, with honest response times rather than aspirational
ones."*

`ul role="list" class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"` — **four** cards
(`rounded-xl border border-primary-700 bg-primary-800/60 p-5`). Each: `h3` in white, a `flex-1` 14 px body
in `primary-300`, then a `border-t border-primary-700` `dl` with **two** rows — `Response` (label
`primary-400`, value mono 600 `accent-400`) and a visually-hidden-`dt` "Best for" row whose `dd` reads
*"Best for …"* at 12 px `primary-400`:

| card | body | response | best for |
| --- | --- | --- | --- |
| Community forum | Public, searchable and answered by other users as well as by us. Your question helps whoever hits it next. | ~4 hours | how-do-I questions |
| Email support | For account-specific problems and anything involving your data. Include your account ID and a request ID if you have one. | 1 working day | account issues |
| Status page | Live incident reporting and a ninety-day history. Subscribe before you need it rather than during an outage. | Live | is it just me? |
| Security | A separate, monitored inbox with a published PGP key. Please do not report vulnerabilities through the forum. | 24 hours | disclosure |

Below the grid, one paragraph in `primary-300`: *"Every support conversation that reveals a gap in the
documentation becomes a ticket against the docs, and roughly a fifth of our articles started life as a
support reply. If you had to ask, the page was not good enough."*

### 6 — `#faq` (820 px, white, `py-20 lg:py-28`, `container`)

Centred head inside `max-w-3xl`: an intro pill (`inline-flex rounded-full bg-primary-100 px-3 py-1
text-sm font-medium text-primary-700`) reading **"About these docs"**, `h2` **"How the documentation
works"**, lede *"Some of this is unusual enough to be worth stating."*

`mx-auto mt-16 max-w-3xl` → `div.divide-y.divide-gray-200`, **five** rows `py-6`. Each row is a
`button type="button" data-faq-toggle` (`flex w-full items-center justify-between text-left`) holding an
18 px / 600 question and a `32 px` `rounded-full bg-gray-100` disc with a **plus** SVG, followed by a
panel `div.overflow-hidden.transition-all.duration-300` carrying **inline `max-height:0; opacity:0`**:

1. **Why does every page have a last-reviewed date?** — "Because "last updated" only tells you when
   someone touched the file, which is often a typo fix. Last-reviewed means a maintainer has confirmed the
   content is still accurate against the current version. Anything not reviewed in twelve months is
   flagged automatically."
2. **Can I see the docs for an older version?** — "Yes. Every minor version back to v2.0 stays published
   at its own URL and is never edited after release, so a link you saved in 2029 still shows what was true
   in 2029."
3. **Is there an offline or printable version?** — "The full documentation is available as a single
   downloadable file per version, and every page prints cleanly with code blocks intact and navigation
   stripped."
4. **How do I report an error in the docs?** — "Every page has an edit link that opens a pull request
   against the docs repository. If that is too much friction, the feedback widget at the bottom of each
   page reaches the same maintainer."
5. **Do you use AI to write these?** — "Draft responses sometimes, review never. Every published page has a
   named human maintainer who is accountable for its accuracy, and that name is on the page."

### 7 — `#contact` (452 px, `bg-gradient-to-br from-primary-600 to-primary-800`, `py-20 lg:py-28`)

`relative overflow-hidden`, with an `aria-hidden` decoration layer: two `256 px` `rounded-full bg-white/10
blur-3xl` blobs (`-right-20 -top-20` and `-bottom-20 -left-20`) and a dot grid
(`radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px`, `opacity-10`).

Content (`container`, `max-w-3xl` centred): `h2` **"Still stuck?"** — **48 px at ≥1024** (`lg:text-5xl`),
36 at `sm`; lede *"The forum is usually faster than email, and the answer stays public for the next
person."* (18 px, `primary-100`); two CTAs — **"Contact support →"** (white solid, `text-primary-700`,
`shadow-lg`, `/contact`) and **"Browse the categories"** (2 px `white/30` outline, `→ #categories`) whose
leading glyph is a **telephone icon** — an icon/label mismatch inherited from the family kit (see
§Deliberate deviations).

### 8 — Footer (539 px, `bg-gray-900`, `text-gray-300`, `pt-16 lg:pt-24`)

`grid gap-12 lg:grid-cols-12 lg:gap-8`: a brand column (`lg:col-span-4`) and a link block
(`grid gap-8 sm:grid-cols-3 lg:col-span-5`) plus the newsletter column (`lg:col-span-3`).

* Brand: the light logo (`h-10`), the blurb *"Documentation and help centre — guides, API reference,
  release notes and a support path for when the docs do not answer it."* (`max-w-xs`, `gray-400`), three
  **40 px** social tiles (`rounded-lg bg-gray-800 p-2.5`, `aria-label` X / Instagram / LinkedIn, all
  `href="#"`), then a two-line address block that reads **", Remote,"** (an empty city interpolated next
  to a comma) and `support@lantern.dev` (`mailto:`), and a **`tel:` with no number**.
* **SPACES** — Hot Desk · Dedicated Desk · Private Office · Meeting Rooms, **all four to `#spaces`, which
  does not exist**. A coworking leftover: nothing on a documentation site is a hot desk.
* **COMPANY** — About (`/about`) · Blog (`/blog`).
* **SUPPORT** — Contact (`#contact`) · Terms (`/terms`).
* **STAY UPDATED** — *"Release notes and breaking-change warnings, sent before the change ships rather
  than after."*, then `form.mt-4[data-newsletter-form]` with an `type="email" required` input
  (`placeholder="Enter your email"`) and a "Subscribe" button. **No JS consumes `data-newsletter-form`** —
  the marker is dead and the form would natively GET the page.
* Legal bar (`mt-12 border-t border-gray-800 pt-8`, `flex-col sm:flex-row`): *"© 2026 Lantern. All rights
  reserved."* (`gray-500`) and three links — **Privacy Policy** (`/privacy`) · **Terms of Service**
  (`/terms`) · **Style Guide** (`/elements`).

### 9 — Fixed chrome

* `#mobile-cta` — `fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 shadow-lg
  lg:hidden`; two equal buttons: **"Call Now"** (`tel:5556789012`, `bg-gray-100`, phone icon) and
  **"Book a Tour"** (`#contact`, `bg-primary-600`). Both labels are coworking leftovers on a docs site.
* `#cookie-consent` — `fixed bottom-0 z-50`, `role="dialog" aria-label="Cookie consent"`, **87 px** tall,
  starts at `translateY(100%)`, slides up **1.5 s** after load unless `localStorage['cookie-consent']` is
  set; copy *"We use cookies to enhance your experience. By continuing to visit this site you agree to our
  use of cookies."*, buttons **Decline** (`border-gray-300`) and **Accept All** (`bg-primary-600`).
* `#back-to-top` — 48 px `rounded-full bg-primary-600` disc, `opacity:0; pointer-events:none;
  transform:translateY(16px)` until 300 px of scroll.
* `#scroll-progress` — 2 px bar, `bg-primary-600`, width = `scrollY / (scrollHeight − innerHeight) * 100`.

## Behaviour the recreation must reproduce

Read out of the **16,233 B** base kit. The bundle is the family kit — it initialises far more than this
page uses — and every initializer runs on `astro:page-load`.

1. **Theme (inline, no flash).** `applyTheme()` runs in `<head>`: `localStorage.theme === 'dark'` **or**
   (nothing stored **and** `prefers-color-scheme: dark`) → `.dark` on `documentElement`; re-applied on
   `astro:after-swap`. `[data-dark-toggle]` toggles the class and writes `localStorage.theme`.
2. **Mobile menu.** `[data-mobile-toggle]` flips `aria-expanded`, toggles `hidden` on `[data-mobile-menu]`
   and **rewrites the button's `<svg>` innerHTML** (hamburger ⇄ X). It also binds
   `[data-accordion-toggle]` inside the panel — this page has none.
3. **Header shadow.** `scrollY > 50` → `shadow-lg` on `[data-header]`, removed below it (passive listener).
   Measured: `box-shadow: none` at 0, `0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)` at
   1,200 px.
4. **Reveals.** `[data-animate]` (11 on this page, `data-delay` on 9 of them): if
   `prefers-reduced-motion: reduce`, **return without touching anything**; otherwise elements below 80 %
   of the viewport get `opacity:0; translateY(20px)` and `transition: opacity .6s ease-out, transform .6s
   ease-out` with `transitionDelay = data-delay ms`; an `IntersectionObserver`
   (`threshold .1`, `rootMargin '0px 0px -10% 0px'`) restores `opacity:1; translateY(0)` and unobserves.
5. **Nav active state.** `[data-nav-link]` (7) → observer with `rootMargin '-20% 0px -70% 0px'` over
   `#categories`, `#articles`, `#changelog`, `#support`; the matching label gets `.nav-active`
   (`#111827`, 600). The three page labels (`/about`, `/blog`, `/contact`) can never match.
6. **Smooth anchors.** Every `a[href^="#"]` except bare `#` scrolls to `top = rect.top + scrollY −
   (headerHeight + 20)` and pushes the hash.
7. **FAQ.** `[data-faq-toggle]` — **single-open**: opening one sets every other panel to
   `max-height:0; opacity:0` and resets its icon to `rotate(0deg)`; the open panel gets
   `max-height = scrollHeight + 'px'`, `opacity:1` and its icon `rotate(45deg)`. Re-clicking the open row
   closes it. Measured: closed panel `max-height:0; opacity:0`; open panel `max-height:88px; opacity:1`,
   icon matrix ≈ 45°, panel height 88 px. ⚠️ **No `aria-expanded`, no `aria-controls`, no `hidden`
   attribute** — see §Deliberate deviations.
8. **Cookie strip.** Only when `localStorage['cookie-consent']` is unset: `setTimeout` 1,500 ms → slide to
   `translateY(0)`; Accept / Decline store a value and slide out (300 ms), then the strip is removed.
9. **Scroll progress.** `#scroll-progress.style.width = scrollY / (scrollHeight − innerHeight) * 100 + '%'`
   (passive listener). Measured 21.9 % at `scrollY = 1200` on a 6,304 px document at 900 px.
10. **Back to top.** Past **300 px**: `opacity:1; pointer-events:auto; translateY(0)`; click smooth-scrolls
    to 0.
11. **Preloader.** Inline `window.load` handler fades `#preloader` (300 ms) and removes it; on
    `astro:before-swap` it strips the preloader from the incoming document. There is **no** minimum
    display time — on a warm cache it is invisible.
12. **Search.** ⚠️ **Nothing.** The form is `onsubmit="return false"`, the input has no handler, `⌘K` is
    decorative, and the five popular pills are ordinary anchors. The page's central affordance is inert.
13. **Newsletter.** ⚠️ **Nothing.** `data-newsletter-form` has no consumer in the bundle.
14. **Initializers in the kit that this page does not use:** `[data-carousel]`, `[data-counter]`,
    `[data-blog-filters]` / `[data-blog-search]`, `[data-billing-toggle]`, `[data-lightbox]`,
    `[data-video-modal]`, `[data-parallax]`, `[data-tilt]`, `[data-magnetic]`, `[data-typewriter]`,
    `form[data-validate]`, the toast helper. They belong to `/blog` and `/contact`; do not build them here.

## Data-attribute inventory (measured on the live page)

| attribute | count | behaviour |
| --- | --- | --- |
| `data-animate` | 11 | reveal-on-scroll (item 4) — 2 in the FAQ head, 5 FAQ rows, 3 in the closing band, 1 in the categories head |
| `data-delay` | 9 | per-element `transition-delay` (100 / 150 / 200 / 100 / 150 / 200 / 100 / 200 / 300 ms) |
| `data-nav-link` | 7 | active-state observer (`categories`, `articles`, `changelog`, `support` + three page routes) |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | accordion button / the plus disc |
| `data-header` | 1 | the sticky header (shadow past 50 px) |
| `data-dark-toggle` | 1 | theme button |
| `data-mobile-toggle` / `data-mobile-menu` | 1 / 1 | disclosure |
| `data-cookie-accept` / `data-cookie-decline` | 1 / 1 | cookie strip |
| `data-newsletter-form` | 1 | ⚠️ **dead marker** — no consumer in the 16,233 B bundle |

Astro host markers (`data-astro-exec` ×11, `data-cfasync`, `data-cf-beacon`) are delivery artefacts, not
design.

## Link and destination census (measured 2026-10-25)

The live page holds **56** anchors. The map, counted in the DOM (not by eye):

`/theme/lantern/#categories` **13** · `/theme/lantern/#articles` **8** · `/theme/lantern/contact` **5** ·
`/theme/lantern/#spaces` **4** · `/theme/lantern/about` **3** · `/theme/lantern/blog` **3** · `#` **3** ·
`/theme/lantern/` **2** · `/theme/lantern/#changelog` **2** · `/theme/lantern/#support` **2** ·
`/theme/lantern/#contact` **2** · `/theme/lantern/terms` **2** · `#main-content` **1** · `#categories` **1**
· `tel:` **1** · `tel:5556789012` **1** · `mailto:support@lantern.dev` **1** · `/theme/lantern/privacy` **1**
· `/theme/lantern/elements` **1**.

Four defects to fix (not to copy):

* **3 bare `href="#"`** — the X / Instagram / LinkedIn tiles in the footer.
* **4 × `#spaces`** — the "Spaces" column points at an id that exists on **no** page of the reference
  (`id="spaces"` count = 0 across all seven documents). Dead anchors everywhere.
* **`tel:`** with an empty number (the footer's second phone line) and **`tel:5556789012`** (the mobile
  bar) — a coworking number on a docs site, and the two disagree.
* **The footer address reads `, Remote,`** — an empty city slot interpolated next to a comma.

Of the **56** anchors, **43** resolve to live destinations (six inner pages + five in-page ids + the
logo/home links), **3** are the dead `#`, **4** are `#spaces`, and the two `tel:` values plus the address
line are malformed content rather than dead links.

## Class census

The landing page's DOM carries **309 distinct class tokens**, and **every one of them has a rule in
`Base.CtG3PydY.css`** — **0 phantom classes** (checked with Tailwind's escape rules for `:`, `[`, `]`,
`.`, `/`, `%`, `#`, `(`, `)`, `,`, `!`, `+`, `*`, `'`, `"`, `&`, `<`, `>`, `@`, `=`, `~`, `^`, `$`, `|`).
Anything a recreation renders outside that set of 309 is invented — a cheap, strong check.

**There are no content images.** The page's only `<img>` elements are the three logo instances (header
light/dark + footer); every other visual is CSS — gradients, blurred blobs, a radial-gradient dot grid,
text glyphs and inline SVGs. So there are **no placeholder photographs to source**, and no `picsum`
seeds: the recreation should be image-free.

## Screenshot analysis (`lantern-template.jpg`, 2400 × 1892 JPEG, 257,995 B)

A **genuine macOS browser capture** on a grey desk ground: three traffic lights, a rounded title bar, a
soft drop shadow, the page inset in the window. It frames the **header** (lantern wordmark, seven nav
labels, moon, "Contact support" pill), the **whole search hero** (white `h1`, two-line lede, the 58 px
search field with the magnifier and the `⌘K` chip, then the five mono pills under a "Popular:" label) and
the **entire six-card category grid** — two rows of three, each card showing its glyph square, its
`N articles` counter, the title, the body and three `→` links. The window cuts off just below the grid,
so the capture corroborates **nothing** of the most-read list, the changelog, the support band, the FAQ,
the closing band or the footer — all of which came from the DOM and `getComputedStyle`.

Three details the capture settles:

* The **nav's "Support" label is darker than its neighbours** — that is `.nav-active` (the
  IntersectionObserver had `#support` centred), not a hover.
* The **six glyphs render** as monochrome symbols (▲ ⌘ ⇄ ⚠ ◈ ◉) inside light grey squares at 18 px —
  they are text, not icons, and they render from whatever font owns that glyph on the visitor's machine.
* The **hero band is a very dark desaturated slate** (`#22272d`), not black, and the search field inside it
  is *lighter* than its ground (`#3a4149`) — the one place in the design where a field sits on a dark band.

## Requirements

### Requirement 1: Page chrome (skip link, preloader, progress, cookie strip, back-to-top, mobile bar)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar fixed to the
top, a preloader that is removed within 300 ms of load, a cookie strip that appears 1.5 s after load and
persists its choice, a 48 px back-to-top disc past 300 px, and — below 1024 px — a two-button sticky bar.

#### Scenario: Skip link and landmarks

- **GIVEN** the page has loaded
- **WHEN** the visitor presses Tab once
- **THEN** focus lands on a "Skip to content" control that is visually hidden until focused
- **AND** activating it moves focus to `<main id="main-content">`
- **AND** the document has exactly one `<header>`, one `<main>` and one `<footer>`

#### Scenario: Preloader is not a blocker

- **GIVEN** the document is loading
- **WHEN** `window.load` fires
- **THEN** the white overlay fades over 300 ms and is removed from the DOM
- **AND** no interactive element is unreachable while it is present (`aria-hidden` on the overlay, no
  focus trap)
- **AND** with `prefers-reduced-motion: reduce` the overlay is removed without the fade

#### Scenario: Scroll progress

- **GIVEN** the document is 6,304 px tall at a 900 px viewport
- **WHEN** the visitor scrolls to 1,200 px
- **THEN** the 2 px `primary-600` bar's width is `1200 / (6304 − 900) = 21.9 %` of the viewport, within 1 %
- **AND** at scroll 0 the width is 0 and nothing is painted over the header

#### Scenario: Cookie strip lifecycle

- **GIVEN** `localStorage` has no `cookie-consent` key
- **WHEN** the page has been open for 1.5 s
- **THEN** the 87 px strip is visible with exactly two buttons, "Decline" and "Accept All"
- **AND** pressing "Accept All" writes `accepted` and removes the strip within 400 ms
- **AND** a second load with the key already set never shows the strip

#### Scenario: Back to top

- **GIVEN** the visitor is at the top of the page
- **WHEN** `scrollY` is 0
- **THEN** the 48 px disc is `opacity: 0`, `pointer-events: none` and has `translateY(16px)`
- **AND** past 300 px it is `opacity: 1`, receives pointer events and scrolls to the top on activation

#### Scenario: Mobile bar

- **GIVEN** a viewport below 1024 px
- **WHEN** the footer is reached
- **THEN** a two-button bar is fixed to the bottom edge, each button `flex-1`
- **AND** at ≥1024 px the bar is not rendered at all

### Requirement 2: Sticky header, seven-label nav and the 1024 px breakpoint

The app SHALL render a sticky 81 px header (65 px below 1024) with the two-ink wordmark, seven nav labels,
a theme toggle and a "Contact support" pill, collapsing to a hamburger disclosure below 1024 px.

#### Scenario: Desktop header

- **GIVEN** a 1440 px viewport
- **WHEN** the page renders
- **THEN** the header is `position: sticky; top: 0`, measures **81 px** and carries a 1 px `gray-200`
  bottom rule over an 80 % white ground with a 16 px backdrop blur
- **AND** the nav shows exactly seven labels in this order: Categories, Popular articles, Changelog,
  Support, About, Blog, Contact
- **AND** the pill reads "Contact support" and links to the contact route

#### Scenario: The nav collapses at 1023 px, not at 900

- **GIVEN** a 1023 px viewport
- **WHEN** the page renders
- **THEN** the desktop nav is `display: none` and the hamburger is visible
- **AND** at 1024 px the reverse is true

#### Scenario: Mobile disclosure

- **GIVEN** the hamburger is visible
- **WHEN** it is activated
- **THEN** `aria-expanded` flips to `"true"`, the panel un-hides, and the icon becomes an X
- **AND** the panel lists the same seven labels at 16 px / 500 plus a full-width "Contact support" CTA
- **AND** a second activation reverses all three

#### Scenario: Active section label

- **GIVEN** the visitor scrolls so `#support` sits in the middle band of the viewport
- **WHEN** the observer fires
- **THEN** the "Support" label renders `#111827` at weight 600 and the other six do not
- **AND** no page label (About, Blog, Contact) can ever take that state

#### Scenario: Header elevation

- **GIVEN** the page at scroll 0
- **WHEN** the visitor scrolls past 50 px
- **THEN** the header gains `shadow-lg`; scrolling back below 50 px removes it

### Requirement 3: The search hero

The app SHALL render a `primary-900` band 397 px tall (453 at 390) with a centred `max-w-3xl` column
containing the `h1`, a two-line lede, a search field with a leading icon and a trailing `⌘K` chip, and a
"Popular:" row of five mono pills.

#### Scenario: Hero anatomy at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the hero renders
- **THEN** the band's ground is `#22272d` with a 1 px `#d5dade` bottom rule and 80 px block padding
- **AND** the `h1` is 36 / 40, weight 700, `−0.9 px` tracking, white, reading "How can we help?"
- **AND** the lede is 16 / 24 in `#b0b9c1` capped at `max-w-xl`
- **AND** the search field measures **704 × 58** with radius 12, `#3a4149` fill, `#424b56` border, 56 px
  left inset and a 20 px magnifier icon
- **AND** the `⌘K` chip sits 16 px from the right edge, 12 px JetBrains Mono, radius 4

#### Scenario: Popular pills

- **GIVEN** the hero is rendered
- **WHEN** the pills are counted
- **THEN** there are exactly five, labelled rate limits, webhook retries, 401 unauthorized, sandbox keys,
  pagination
- **AND** each is 24 px tall with a full radius, 1 px `#424b56` border and 12 px mono text
- **AND** the "Popular:" label precedes them in `#84919d`

#### Scenario: Mobile hero

- **GIVEN** a 390 px viewport
- **WHEN** the hero renders
- **THEN** the `h1` is 30 px, the field is full-width and still 58 px tall, and the band measures ~453 px
- **AND** the five pills wrap onto as many lines as needed without overflowing horizontally

### Requirement 4: `#categories` — six cards on a responsive grid

The app SHALL render six category cards in a `1 / 2 / 3` column grid (390 / 768 / 1024), each with a glyph
square, an article count, a title, a body and three links, and the whole card clickable.

#### Scenario: Grid and card anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the section renders
- **THEN** the grid is three columns of **392 px** with 20 px gaps
- **AND** each card is **392 × 279**, radius 12, 1 px `#d5dade` border, 24 px padding, white ground, no
  shadow at rest
- **AND** the icon square is **40 × 40**, radius 8, `#eceef0`, holding one 18 px glyph
- **AND** the counter sits top-right in 12 px mono `#84919d` and reads `18 articles` … `32 articles`
- **AND** the three links sit under a `border-t` hairline, each prefixed by a `→` in `#0891b2`

#### Scenario: The six counts sum to 240

- **GIVEN** the six cards
- **WHEN** their counters are summed
- **THEN** the total is **240**, the same number the hero lede states
- **AND** the six titles are Getting started (18), API reference (74), Webhooks (21), Troubleshooting (43),
  Guides (52), Account and billing (32)

#### Scenario: Responsive columns

- **GIVEN** viewports of 768 and 390
- **WHEN** the grid renders
- **THEN** it is two columns of 350 px and one column of 358 px respectively
- **AND** no card ever exceeds its column width

#### Scenario: Hover

- **GIVEN** a pointer over a card
- **WHEN** it enters the card
- **THEN** the border becomes `primary-300` and `shadow-lg` appears, with no layout shift
- **AND** the whole card remains one link target (`after:inset-0`), not six

### Requirement 5: `#articles` — the most-read list

The app SHALL render one `rounded-xl` card holding six rows, each with a category eyebrow, a title, an
"Updated …" meta line and two right-aligned metrics.

#### Scenario: Row anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the section renders
- **THEN** the card is `primary-50`-grounded, white-filled, radius 12, 1 px `#d5dade` border
- **AND** each row has 20 px padding and a 1 px divider between rows
- **AND** the eyebrow is 11 px mono uppercase in `#0e7490`, the title 16 / 600, the meta 12 px mono in
  `#84919d`
- **AND** the right block holds exactly two metrics labelled `VIEWS` and `HELPFUL`, values in 14 px mono
  `tabular-nums`, the helpfulness figure in `#0e7490`

#### Scenario: The six rows and their numbers

- **GIVEN** the list is rendered
- **WHEN** the values are read
- **THEN** the views are 18.4k, 14.1k, 11.7k, 9.8k, 7.2k, 6.4k and the helpfulness figures 94, 91, 96,
  88, 92, 89 %
- **AND** the first row is the 401 troubleshooting article and the last is "Building a sync that survives
  being run twice"

#### Scenario: Row hover

- **GIVEN** a pointer over a row
- **WHEN** it hovers
- **THEN** the row's ground becomes `#f6f7f8` and nothing else moves

### Requirement 6: `#changelog` — four entries and a status colour system

The app SHALL render four changelog entries in an `8rem + 1fr` grid (≥640 px), each with a version, a
date, a status badge, a title and a body, followed by one note panel.

#### Scenario: Entry anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the section renders
- **THEN** each entry starts with a 1 px `#d5dade` top rule and 24 px block padding
- **AND** the left column is exactly **128 px** with the version in 14 px mono / 600 and the date in 12 px
  mono `#84919d`
- **AND** the body copy is 14 / 22.75 in `#505c69`
- **AND** below 640 px the grid collapses to one column and the version stays above the badge

#### Scenario: Four statuses, four colours

- **GIVEN** the four entries
- **WHEN** their badges are read
- **THEN** `Added` is white on `#0891b2`, `Fixed` is `#3a4149` on `#d5dade`, `Deprecated` is `#451a03` on
  `#fbbf24`, and `Breaking` is white on `#dc2626`
- **AND** every badge is 10 px mono, weight 700, uppercase, `+0.55 px` tracking, radius 4
- **AND** no status reuses another's colour

#### Scenario: Closing note

- **GIVEN** the last entry
- **WHEN** the note renders
- **THEN** it is a `rounded-xl` panel with a `#d5dade` border on `#f6f7f8`, 20 / 16 padding, 14 px text
- **AND** it states the migration-note and deprecation-window policy

### Requirement 7: `#support` — the dark four-route band

The app SHALL render a `primary-900` band with a left-aligned head and four cards, each carrying a title,
a body, a monospace response value and a "Best for" line.

#### Scenario: Band and cards

- **GIVEN** a 1440 px viewport
- **WHEN** the section renders
- **THEN** the band is `#22272d` with `py-20 sm:py-28` and body ink `#eceef0`
- **AND** the grid is four columns of **257 px** with 20 px gaps
- **AND** each card is radius 12, 1 px `#424b56`, `#3a4149` at 60 % over the band, 20 px padding
- **AND** the response value is 14 px JetBrains Mono / 600 in `#22d3ee` and the "Best for" line 12 px in
  `#84919d`

#### Scenario: The four routes

- **GIVEN** the cards are rendered
- **WHEN** they are read
- **THEN** they are Community forum (~4 hours), Email support (1 working day), Status page (Live) and
  Security (24 hours)
- **AND** each body is the reference's *specific* copy, not a generic "contact us"

#### Scenario: Responsive

- **GIVEN** viewports of 768 and 390
- **WHEN** the band renders
- **THEN** it is two columns of 350 px and one column of 358 px, and the band grows to 908 / 1,399 px

### Requirement 8: `#faq` — five questions, single-open accordion

The app SHALL render five documentation questions as buttons over an `overflow-hidden` panel, with
single-open behaviour, a plus disc that rotates 45°, and correct ARIA.

#### Scenario: Closed state

- **GIVEN** the section has just rendered
- **WHEN** no question has been activated
- **THEN** all five panels are `max-height: 0; opacity: 0` and every disc is at `rotate(0deg)`
- **AND** the questions are 18 / 28 at weight 600 and the discs are 32 px circles on `#f3f4f6`

#### Scenario: Opening and single-open

- **GIVEN** the accordion is closed
- **WHEN** the first question is activated
- **THEN** its panel animates to `max-height: 88px; opacity: 1` (≈ its `scrollHeight`) and its disc to
  `rotate(45deg)`
- **AND** activating a second question closes the first (panel back to `max-height: 0`, disc to 0°)
- **AND** activating the open question again closes it

#### Scenario: Accessibility (a deliberate improvement)

- **GIVEN** any question button
- **WHEN** it renders
- **THEN** it carries `aria-expanded` reflecting its panel and `aria-controls` naming the panel's id
- **AND** the panel is `role="region"` with `aria-labelledby` pointing at the button
  (the reference ships **none** of this)

### Requirement 9: `#contact` — the gradient closing band

The app SHALL render a `primary-600 → primary-800` gradient band with a dot grid, two blurred blobs, a
48 px heading and two CTAs.

#### Scenario: Band and decoration

- **GIVEN** a 1440 px viewport
- **WHEN** the band renders
- **THEN** the background is a linear gradient to the bottom-right from `#505c69` to `#3a4149`
- **AND** two `256 px` white/10 blurred circles sit at the top-right and bottom-left, clipped by
  `overflow-hidden` and `aria-hidden`
- **AND** a 1 px white dot grid at 40 px pitch is painted at 10 % opacity over the band
- **AND** the band measures **452 px** with the `h2` at 48 px

#### Scenario: Two CTAs

- **GIVEN** the band's buttons
- **WHEN** they are read
- **THEN** the primary is white with `#424b56` ink, radius 8, 32 / 16 padding, `shadow-lg`, linking to the
  contact route
- **AND** the secondary is a 2 px `white/30` outline that becomes solid white on hover, scrolling to
  `#categories`

### Requirement 10: Footer

The app SHALL render a `gray-900` footer with a brand column, three link columns, a newsletter form and a
legal bar, with no horizontal overflow at any width.

#### Scenario: Columns and content

- **GIVEN** a 1440 px viewport
- **WHEN** the footer renders
- **THEN** it is `#111827` with `96 px` top padding and measures **539 px**
- **AND** the brand column spans 4 of 12 columns with the light logo, the blurb, three 40 px social tiles
  and a working contact address
- **AND** the three link columns are headed in 14 px / 600 uppercase `+0.7 px` white
- **AND** the legal bar is separated by a `gray-800` rule and holds the copyright plus three links

#### Scenario: Newsletter is honest

- **GIVEN** the newsletter form
- **WHEN** it is submitted with an empty or malformed address
- **THEN** a validation message appears and no request is made
- **AND** with a valid address the form reports success inline without navigating
  (the reference's `data-newsletter-form` has no consumer and would natively GET the page)

#### Scenario: No horizontal overflow

- **GIVEN** viewports of 320, 390, 768, 1024, 1280 and 1440 px
- **WHEN** the page renders
- **THEN** `documentElement.scrollWidth === clientWidth` at every width
- **AND** the footer's grid children carry `min-width: 0` so the email input can shrink
  (the reference measures **401 px at 390** and must not be copied)

### Requirement 11: Dark mode

The app SHALL support a persisted dark theme with no flash of the wrong theme.

#### Scenario: Toggle and persistence

- **GIVEN** the page in light mode
- **WHEN** the moon button is activated
- **THEN** `.dark` is added to `<html>` and `localStorage.theme = "dark"`
- **AND** the page ground becomes `#030712`, headings `#f3f4f6`, cards `primary-900/40` with `primary-800`
  borders, and the two dark bands stay `#22272d`
- **AND** a reload applies the dark theme before first paint

#### Scenario: System preference

- **GIVEN** no stored theme
- **WHEN** `prefers-color-scheme: dark` matches
- **THEN** the page renders dark on first load
- **AND** an explicit toggle still overrides it in both directions

### Requirement 12: Search is a real affordance (deliberate improvement)

The app SHALL make the hero search functional: typing filters the six category cards and the six most-read
rows, `⌘K` / `Ctrl+K` focuses the field, `Escape` clears it, and an empty result shows a plain
"nothing matched" line. The reference's field is inert (`onsubmit="return false"`).

#### Scenario: Filtering

- **GIVEN** the field is empty and all twelve items are visible
- **WHEN** the visitor types "webhook"
- **THEN** the Webhooks category card and the webhook article row remain and the rest are hidden
- **AND** the match is case-insensitive and matches title or body text
- **AND** clearing the field restores all twelve

#### Scenario: Shortcut and empty result

- **GIVEN** the page has focus
- **WHEN** `⌘K` (or `Ctrl+K`) is pressed
- **THEN** the field receives focus and the shortcut is not triggered while the visitor is typing in
  another input
- **AND** typing a term that matches nothing shows "No results for “…”" and keeps both sections' headings

### Requirement 13: Zero dead or malformed destinations

The app SHALL ship no dead anchors and no malformed contact links.

#### Scenario: Anchor audit

- **GIVEN** every anchor in the rendered page
- **WHEN** its `href` is checked
- **THEN** there is no bare `#`, no `#spaces`, no `tel:` without a number
- **AND** every in-page `#id` target exists in the document
- **AND** the footer's "Spaces" column is replaced with real destinations (see §Deliberate deviations), so
  no link points at an id the page does not render

#### Scenario: External contact links

- **GIVEN** the footer's email and the mobile bar
- **WHEN** they are activated
- **THEN** the email is a valid `mailto:` and the phone is a valid E.164-ish `tel:` with digits only
- **AND** the social tiles point at real profile URLs (or are removed), never `#`

### Requirement 14: Responsive parity and reduced motion

The app SHALL match the reference's measured heights at 1440 / 1024 / 768 / 390 within 5 %, and SHALL leave
content visible when the visitor asks for reduced motion.

#### Scenario: Band heights

- **GIVEN** viewports of 1440, 1024, 768 and 390 px
- **WHEN** each band is measured
- **THEN** the heights match the spec's table within 5 % (e.g. hero 397, categories 985 / 1,008 / 1,306 /
  2,135, support 720 / 720 / 908 / 1,399)
- **AND** the document totals 6,304 / 6,327 / 7,084 / 9,769 px

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads
- **THEN** no element is left at `opacity: 0` or translated (the reveal initializer returns early)
- **AND** the accordion still opens and closes, instantly
- **AND** the preloader is removed without the fade

## Deliberate deviations (each must be documented in the PR)

1. **Glyph icons → real icons.** The six category icons are text glyphs (▲ ⌘ ⇄ ⚠ ◈ ◉) at 18 px. They
   render from whichever font owns the codepoint, which is why ⚠ and ◉ can look like emoji on some
   systems. Use `lucide-react` equivalents (`zap`/`terminal`/`repeat`/`alert-triangle`/`book-open`/
   `credit-card`) at the same 18 px size, same 40 × 40 `#eceef0` square, same radius 8. Keep the layout
   identical; do not keep the glyphs.
2. **FAQ ARIA.** Add `aria-expanded`, `aria-controls`, a `role="region"` panel and `aria-labelledby`.
   Physical behaviour (single-open, 45° rotation, `max-height` from `scrollHeight`) stays identical.
3. **Search that works.** Requirement 12. Keep the exact visual state; wire a client-side filter and the
   `⌘K` / `Ctrl+K` shortcut the chip already advertises.
4. **Newsletter with validation.** Inline validation and a success line; no network call, no navigation.
5. **Mobile bar relabelled.** The reference's bar says **"Call Now"** (`tel:5556789012`) and **"Book a
   Tour"** — coworking copy on a documentation site. Ship the same two-button geometry with **"Search
   docs"** (focuses the hero field / scrolls to `#search`) and **"Contact support"** (`#contact`).
6. **Footer "Spaces" column replaced.** Four links to a non-existent `#spaces` become **Resources**:
   Guides (`#categories`), Changelog (`#changelog`), Style guide (the style-guide route as a stub or
   removed), Status (`#support`). Drop the `, Remote,` address line and the empty `tel:` entirely.
7. **Footer grid overflow fixed.** `min-width: 0` on the three grid children (measured defect at 390 px).
8. **Wordmark as component.** The reference's logo is an SVG containing a live `<text>` in Inter, so it
   degrades when the font is missing. Author the wordmark as text in the app (Inter 700, 21 px,
   `letter-spacing: -0.01em`) beside an SVG lantern mark in `#22d3ee` / `#06b6d4`, or convert the glyph
   to paths. Two inks: light `#22272d` + `#22d3ee`, dark `#d5dade` + `#22d3ee`.
9. **No ColorLib attribution in app files.** Provenance lives in this spec and the PR only; the footer
   links **https://www.componentdock.com/** as "Component Dock" (AGENTS.md rule 5).
10. **Inner routes are stubs.** The recreation is a single page. `About`, `Blog`, `Contact`, `Terms`,
    `Privacy` and the style guide have no second page to copy; keep their hrefs pointing at in-page
    anchors (`#categories`, `#support`, `#contact`, `#faq`) rather than shipping 404 routes, and say so in
    the PR.

## Verification checklist

- [ ] `apps/endpaper` exists, `@free-react-templates/endpaper` in its `package.json`, `public/CNAME` =
      `endpaper.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included)
- [ ] seven bands in this order: `#search` → `#categories` → `#articles` → `#changelog` → `#support` →
      `#faq` → `#contact`, followed by the footer
- [ ] hero band `#22272d`, `h1` 36 / 40 / −0.9 / 700, lede `#b0b9c1`, field 58 px / radius 12 /
      `#3a4149`, `⌘K` chip present, five mono pills under "Popular:"
- [ ] six category cards with counts 18 / 74 / 21 / 43 / 52 / 32 (sum **240**), three `→` links each
- [ ] six most-read rows with the reference's views (18.4k … 6.4k) and helpfulness (94 … 89 %)
- [ ] four changelog entries with the four distinct badge colours and the closing note
- [ ] four support cards on `#22272d` with mono cyan response values
- [ ] five FAQ rows, single-open, 45° disc, `aria-expanded` + `aria-controls`
- [ ] closing band: bottom-right gradient `#505c69 → #3a4149`, dot grid, two blurred blobs, 48 px `h2`
- [ ] footer `#111827`, three link columns + newsletter, legal bar, no `#spaces`
- [ ] dark mode persists and matches the dark table (body `#030712`, headings `#f3f4f6`, cards
      `primary-900/40`)
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] reduced motion leaves no element at `opacity: 0`
- [ ] no bare `#`, no `tel:` without digits, every in-page anchor resolves
- [ ] `npm run spec:validate` passes for `template-endpaper`
- [ ] `scripts/verify-app.sh endpaper` green (typecheck, lint, 100 % coverage, build)
- [ ] `TEMPLATES.md` row added under `## Directory` between **Jobstart** and **Listco**, heading count
      bumped
