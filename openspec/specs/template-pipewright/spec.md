# Template: Pipewright (Business — owner-operator trade services, a one-van plumbing business sold as a named person)

## Purpose

A one-page site for a **business that is one person**: a licensed plumber in Asheville, North Carolina, who
has worked alone for eleven years and cannot be in two places at once. The whole design is built to make
that limitation read as the credential — the hero headline is *"You get me, and you get my van."*, the
portrait sits beside it with the owner's name in the first sentence, the price list is a **plain ruled
list** rather than a grid of cards, and the second band is an open admission (*"I tried running three vans
for two years. The work got worse and I stopped enjoying it."*) signed *Sam Ordway*.

ColorLib's own catalogue copy states the intent exactly: *"A one-van plumber is selling the person, not the
company, and a template full of stock crews works against that. Journeyman sets the wordmark in Playfair
with the licence number underneath, opens with a portrait of the owner, and prices the work as a plain list
rather than a grid of cards. A named owner page replaces the anonymous About Us."* Every structural decision
below follows from that sentence.

The composition is **two columns that alternate side and weight**: a 12-column hero (5 photo / 7 text, the
photo a 4:5 portrait with an instructional caption under it), then a 4/8 split whose right column is a
`<dl>` of six priced services separated by hairlines, then a **centred** 3xl testimony band, then a thin
**ruled emergency strip** (a pinging dot, two lines of copy, a bronze pill), then a 5/7 split whose right
column is a **two-to-three-column list of twelve towns**, then a centred testimonial row that is a real
carousel below 1024 px and a **static three-up row** at desktop, then a full-bleed bronze closing band, and
a four-column dark footer. Section rhythm is `section` = `padding-block: 80px / 112px`; the hero and the
emergency strip opt out and carry their own `py-14 / py-20` and `py-6 / py-8` insets, which is why the strip
is only **164 px** tall.

The palette is a **warm bronze on warm paper**, both ramps hand-picked (neither is a stock Tailwind family):
`ink` is the warm grey-brown that replaces every neutral (`ink-50 #faf8f5` is the page, `ink-800 #2a2622`
is the body ink, `ink-100 #f0ece6` is every hairline), and `primary` is the bronze (`#b8863b` brand — every
CTA, every kicker, every price) deepening to `#946a2d` for the closing band and to `#735225` for hover
text. **Nothing else is coloured** except the five `amber-400` stars in the hero rating row and the
`primary-100` chips behind avatars and the reviews badge. Stock `gray-*` appears only in the two bands the
kit's own components own — the testimonials band (`bg-gray-50`) and the footer (`bg-gray-900`).

The type is a strict two-face split. **Playfair Display 600** carries the wordmark (30 px) and the
editorial voice: the hero `h1` (60 / 66), the services `h2` (36 px), the six service names (20 px), the
owner's serif lede (30 / 1.375) and the signature. **Inter** carries every functional string: nav labels
(14 px, 600, uppercase, +0.05em), kickers (12 px, 600, uppercase, +0.2em), body copy (16 / 24 and 18 / 29
ledes), the price labels (14 px, 600, uppercase, +0.05em, bronze) and — the trap — **three of the four
`h2`s** (services areas, testimonials, closing band: Inter 700 36 px, `tracking-tight` −0.025em). A single
global `h2` rule breaks three bands; a single global `h2` in Playfair breaks four.

Recreation of the ColorLib "Journeyman" design (https://colorlib.com/wp/template/journeyman/, live preview
https://preview.colorlib.com/theme/journeyman/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `journeyman`
* **ColorLib page:** https://colorlib.com/wp/template/journeyman/ — **HTTP 200, 112,326 B**, `<title>`
  **"Journeyman - Owner-Operator Plumber Website Template 2026 - Colorlib"**, `<h1>` **"Journeyman"**,
  `<meta name="description">` *"A one-van plumber is selling the person, not the company, and a template
  full of stock crews works against that. Journeyman sets the wordmark in Playfair with the licence number
  underneath, opens with a portrait of the owner, and prices the work as a plain list rather than a grid of
  cards. A named owner page replaces the anonymous About Us."* The catalogue's screenshot is
  **`journeyman-template.jpg`** (the `-1024x807` variant also exists; the plain
  `journeyman-template.jpg` is the 2400×1892 master).
* **Live preview:** https://preview.colorlib.com/theme/journeyman/ — **HTTP 200, 53,087 B** read
  2026-10-25 with `curl -4` (**every** fetch on this host needs `-4`: the machine resolves a blackholed
  IPv6 address). A 2026 **Astro** build: one hashed stylesheet `_astro/Base.Dm3pkJRE.css` (**55,230 B**,
  sha256 `5709a545…56d020`), one hashed behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (**16,233 B**, sha256 `e26cc055…90a92f2`)
  and the Astro view-transition router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.CYDbzu1r.js` (**16,357 B** — the same
  `CYDbzu1r` router every 2026 Astro build ships). The behaviour bundle is **exactly 16,233 B — the
  Hedgerow/Groundwork kit size, not the 17,669 B booking-flow kit**; this page therefore has no
  booking-widget, billing-toggle or typewriter initializer, and it should not be given one.
  ⚠️ **Do not use the HTML's sha256 as identity** (recorded `9917f0f9…6e6469` for the run above): two
  consecutive fetches differ only in the **order** of the 40 inline `@font-face` rules that Cloudflare's
  `/cf-fonts/` CSS injects. Both are exactly 53,087 B. Cite **byte size + section census**, not the hash.
  `/theme/journeyman/index.html` is the same 53,087-byte document, and every **bare** route answers
  **308** with a `Location` ending in `/` (verified `/theme/journeyman/services` → `…/services/`), so each
  nav click costs one redirect in the reference.
* **No archive:** `https://preview.colorlib.com/downloads/free/journeyman.zip` → **404** (9 B
  `text/plain`). This is one of the 2026 Astro builds with no downloadable twin, so the **live preview is
  the only authoritative source** for both DOM and tokens.
* **Inner pages are live** (they are the authority for anything the single page has to invent):
  `services/` **40,961 B** · `meet-sam/` **34,284 B** · `reviews/` **40,848 B** · `contact/` **34,287 B** ·
  `privacy/` **36,462 B** · `terms/` **35,216 B** — all HTTP **200**. `about`, `gallery` and `projects`
  are **404** (the owner page is `/meet-sam`, exactly as the catalogue copy says).
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**journeyman-template.jpg** —
  **HTTP 200, 328,576 B**, `image/jpeg` (not AVIF), **2400×1892**. A **macOS browser window on a pale grey
  desk ground** (three traffic lights, a grey rounded title bar, a soft drop shadow), framing the page from
  the sticky header down to the second service row. It is a genuine browser capture, not a marketing
  collage — it corroborates the header, the whole hero and the top of the price list, and shows **nothing**
  of the owner band, the emergency strip, the towns, the testimonials, the closing band or the footer.
* **New name:** `pipewright` (`apps/pipewright`, `@free-react-templates/pipewright`) — one lowercase word:
  a *wright* is a maker/fitter of a thing (wheelwright, cartwright), so a pipewright is the person who does
  the pipes, which is this design's entire subject, and it is not the source name. Checked 2026-10-25
  against `origin/main` (`e6c7b3bdb`): **no** `apps/pipewright`, **no**
  `openspec/specs/template-pipewright/`, `git grep -il pipewright origin/main` prints **nothing** (0 hits
  repo-wide, so the zero-substring rule holds), `grep -ci pipewright TEMPLATES.md` is **0**, and all three
  ColorLib URL forms — `wp/template/pipewright/`, `preview.colorlib.com/theme/pipewright/`,
  `preview.colorlib.com/theme/bootstrap/pipewright/` — return **404**. Re-run those checks before renaming.
  (`vanwise`, `onevan`, `copperline`, `solderline`, `tapsure`, `vanline`, `plumblane` and `mainstop` were
  all also free; `mainline` — the obvious word for a pipe run — is **already a ColorLib source name** and
  therefore forbidden.)
* **Deploy target:** https://pipewright.free.componentdock.com (`apps/pipewright/public/CNAME`,
  `homepage` in `apps/pipewright/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** (see below). Suggested home: **`## Business`** —
  heading reads **`## Business (372)`** at line **881** on `origin/main` `e6c7b3bdb`, and the next heading
  is `## Charity (37)` at line 1256. Insert **in source-name alphabetical order, between `Jobpply`
  (line 1076) and `Kanox` (line 1077)** — `Jobp` < **`Jour`** < `Kano` — and bump the heading to
  **`(373)`**.

### Why this design has no row (catalogue gap, measured 2026-10-24/25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, every one of its marks `[x]` — but the catalogue is not
complete: all 40 pages of https://colorlib.com/wp/templates/ were crawled and compared with the slugs the
checklist cites, and **256 designs are on the listing that the checklist never recorded** (42 standalone +
214 snippet variants). The census and both buckets live in `docs/catalog-coverage.md`, whose standalone
table carries this design's line: `| journeyman | preview 200, 53087 B |`. **No app and no spec exist for
this slug at all** (unlike `groundwork`/`lantern`/`onyx`/`threadline`/`zephyr`/`kinetic`/`cairn`, whose
names are taken by *different* designs), so only the name-collision checks above are needed.

Queue order in that table: `airwise` → `backstop` → `cairn` → `circles` → `coldsnap` → `commons` →
`curbline` → `dowser` → `everhot` → `fernhill` → `fieldline` → `fieldnotes-student` → `fixtura` →
`flowpage` → `groundwork` → `halfpast` → `heatline` → **`journeyman` (this)** → `kinetic` → `lantern` →
`mainline` → `marrow` → `metroflow` → … (`docs/catalog-coverage.md` holds the full 42). Shipped so far:
Thermly, Plantroom, Veranda, Flowcert, Aquifer, Smallpaw, Kettle, Chalkline, Emberly, Rodline, Brassworks,
Closeknit; prepped and unbuilt: Stoke, Percline, Hedgerow, Slotline, Quarto.

**Implementer note:** because there is no row yet, add one **before** the PR claims anything — paste this
line into `## Business` between **Jobpply** and **Kanox** and bump the count:

```
- [x] **Journeyman** — [colorlib](https://colorlib.com/wp/template/journeyman/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/journeyman-template.jpg) · [pipewright](https://pipewright.free.componentdock.com)
```

⚠️ **Re-measure the line numbers and the count yourself** — the file moves under this queue by dozens of
lines per day (Hedgerow's prep recorded `Gravity` at 1039 on `467c8803b`; Slotline's recorded `Hairsal` at
1042 and `Halo` at 1043 on `7e20fa642`; this prep records `Jobpply` at 1076 and `Kanox` at 1077 on
`e6c7b3bdb`). Locate `## Business`, then find the last row whose source name sorts before `Journeyman`.

## Reference readings (2026-10-25, `curl -4`)

| reading | URL | status | bytes |
| --- | --- | --- | --- |
| landing page | `https://preview.colorlib.com/theme/journeyman/` | 200 | 53,087 |
| stylesheet | `…/journeyman/_astro/Base.Dm3pkJRE.css` | 200 | 55,230 |
| behaviour bundle | `…/journeyman/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` | 200 | 16,233 |
| view-transition router | `…/journeyman/_astro/ClientRouter…CYDbzu1r.js` | 200 | 16,357 |
| inline `<style>` (fonts) | inside the HTML `<head>` | — | **40** `@font-face` rules (Inter 5.2.8 + Playfair Display 5.2.8, all `/cf-fonts/v/…`) |
| favicon | `…/journeyman/favicon.svg` | 200 | 377 |
| footer logo | `…/journeyman/assets/img/logo-light.svg` | 200 | 322 |
| og image | `…/journeyman/og-image.jpg` | **404** | 9 — the `<meta property="og:image">` is dead |
| archive | `…/downloads/free/journeyman.zip` | **404** | 9 |
| catalogue shot | `https://colorlib.com/wp/wp-content/uploads/sites/2/journeyman-template.jpg` | 200 | 328,576 |
| catalogue page | `https://colorlib.com/wp/template/journeyman/` | 200 | 112,326 |
| inner: services | `…/journeyman/services/` | 200 | 40,961 |
| inner: meet-sam | `…/journeyman/meet-sam/` | 200 | 34,284 |
| inner: reviews | `…/journeyman/reviews/` | 200 | 40,848 |
| inner: contact | `…/journeyman/contact/` | 200 | 34,287 |
| inner: privacy | `…/journeyman/privacy/` | 200 | 36,462 |
| inner: terms | `…/journeyman/terms/` | 200 | 35,216 |

Prefix ladder, for the record: `theme/bootstrap/journeyman/` **404**, `theme/bb/journeyman/` **404** —
this is a normal 2026 design at `theme/<slug>/`, not a Bootstrap-family demo. Google Fonts delivery for
the recreation (both **200**, verified with `curl -4 -o /dev/null -w '%{http_code}'` on 2026-10-25):

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap
```

Both faces are genuinely delivered by the reference (the sheet carries
`html{…font-family:Inter,system-ui,sans-serif;line-height:1.5}` and the 40 `/cf-fonts/` faces), and both
resolve **200** on the `css2` API with and without an axis list — there is **no** font substitution to
document here, unlike the Georgia and script-face cases elsewhere in this repo. Ship the two `css2` URLs
above; do not drop Playfair for a "browser serif", because the whole editorial voice is that face at 600.

## Design tokens (measured from `Base.Dm3pkJRE.css`, 55,230 B, and from `getComputedStyle` at 1440 px)

### Warm neutral ramp — `ink` (**hand-picked, replaces every grey in the page chrome**)

| token | hex | where it carries the design |
| --- | --- | --- |
| `ink-50` | `#faf8f5` | the page background (`body`), the hero band, the owner band, the emergency strip, the header at 95 % (`bg-ink-50/95`), the mobile panel |
| `ink-100` | `#f0ece6` | **every hairline**: the six `border-t` rules between service rows, the towns' `border-b`, the header border on hover states, the hover ground of the moon/menu buttons |
| `ink-200` | `#ded6cb` | the header's bottom border (`border-ink-200`) |
| `ink-300` | `#bcb0a1` | compiled, used **only** as `placeholder:text-ink-300` |
| `ink-400` | `#8a7d6d` | the wordmark's licence microline, the hero figcaption, the "-from" notes, the moon icon |
| `ink-500` | `#615648` | **body copy in the bands**: hero ledes (18 px), the services `dd`, the towns' intro, the nav labels (`text-ink-500`) |
| `ink-600` | `#453d33` | the rating row's text, the owner band's paragraphs |
| `ink-700` | `#332d26` | the towns' list items, the desktop nav labels once inside the header (`text-ink-700` in the mobile panel), hover ink (`hover:text-ink-700`) |
| `ink-800` | `#2a2622` | **the body ink**: every heading, every `dt`, the signature, the wordmark; also `.btn-secondary`'s text base and the emergency strip's inherited colour |
| `ink-900` | `#1c1916` | compiled (`bg-ink-900`), unused on this page |

### Brand ramp — `primary` (**hand-picked bronze**)

| token | hex | where it carries the design |
| --- | --- | --- |
| `primary-50` | `#fbf7f0` | the hero's `from-primary-50` gradient stop (compiled; the hero band itself is `ink-50`) |
| `primary-100` | `#f5eddd` | the reviews badge pill, the two 12 px avatar discs in the testimonial cards, the closing band's body copy (`text-primary-100`) |
| `primary-200` | `#ead9ba` | `text-primary-200` in the inner pages' breadcrumbs; compiled here via `border-primary-200` |
| `primary-300` | `#dcc08d` | dark-mode only (`dark:text-primary-300`, `dark:hover:text-primary-300`) |
| `primary-400` | `#cba45f` | the five stars in the testimonial cards (`text-primary-400`), dark-mode kickers |
| `primary-500` | `#be8f46` | focus rings (`focus:ring-primary-500`), `aria-pressed` borders |
| `primary-600` | `#b8863b` | **the brand**: every bronze pill (`bg-primary-600`), the price labels, `border-primary-600` on the underline link, the carousel's active dot, the back-to-top disc, `.text-gradient`'s first stop |
| `primary-700` | `#946a2d` | **every kicker** (`text-primary-700`), the hover ground of the bronze pill (`hover:bg-primary-700`), the reviews badge's text, **the closing band's whole ground** (`bg-primary-700`), the white CTA's label |
| `primary-800` | `#735225` | `hover:text-primary-800`, `hover:border-primary-800` |
| `primary-900` | `#5a401f` | dark-mode grounds only (`dark:bg-primary-900`) |

### Chrome greys (stock Tailwind — the kit's own components, not the brand)

| token | hex | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | the **testimonials band ground** (`bg-gray-50`) — the one cool band in the page |
| `gray-100` | `#f3f4f6` | compiled, unused here (hover ground of the mobile CTA) |
| `gray-200` | `#e5e7eb` | the cookie strip's top border, the shimmer placeholder |
| `gray-300` | `#d1d5db` | `.btn-secondary`'s border, the carousel's inactive dots (`bg-gray-300`) |
| `gray-400` | `#9ca3af` | footer links, footer blurb, `text-gray-400` in cards |
| `gray-500` | `#6b7280` | the hero rating's "sample data" note (`opacity-80` on `ink-600`, computed `#615648`), footer legal line |
| `gray-600` | `#4b5563` | the testimonial `blockquote`'s secondary text, the carousel arrows |
| `gray-700` | `#374151` | hover of the footer's social tiles (`hover:bg-gray-700`) |
| `gray-800` | `#1f2937` | the footer's social tiles (`bg-gray-800`), dark-mode cards |
| `gray-900` | `#111827` | **the footer ground** (`bg-gray-900`), the testimonial headings, the `nav-active` colour |
| `gray-950` | `#030712` | dark-mode page ground only |

Status hues in the sheet: `amber-400` (the hero's five stars and nothing else), `green-100/600/700`,
`red-500/600` (the shared kit's toast — **not used on this page**).

### Typography

| element | face | size / line-height | weight | tracking | colour |
| --- | --- | --- | --- | --- | --- |
| `html`/`body` | `Inter, system-ui, sans-serif` | 16 / 24 (`line-height:1.5` on `html`) | 400 | normal | `#2a2622` on `#faf8f5` |
| wordmark | Playfair Display | 24 / lg 30, `leading-none` | 600 | normal | `ink-800` |
| licence microline | Inter | **10.4 px** (`text-[0.65rem]`) | 600 | **+0.18em** | `ink-400`, uppercase, `truncate` |
| desktop nav label | Inter | 14 | 600 | +0.05em | `ink-500` → `ink-700`/`primary-*` on hover, uppercase |
| kicker | Inter | 12 | 600 | **+0.2em** (`tracking-[0.2em]`) | `primary-700`, uppercase |
| hero `h1` | **Playfair Display** | **60 / 66** (`leading-[1.1]`), sm 48, base 36 | 600 | normal | `ink-800` |
| hero lede | Inter | 18 / 29.25 (`leading-relaxed`) | 400 | normal | `ink-500` |
| services `h2` | **Playfair Display** | 36 / 40 (`text-3xl sm:text-4xl`) | 600 | normal | `ink-800` |
| service `dt` | **Playfair Display** | 20 | 600 | normal | `ink-800` |
| service `dd` | Inter | 16 / 24 | 400 | normal | `ink-500` |
| price label | Inter | 14 | 600 | +0.05em | `primary-700`, uppercase |
| owner serif lede | **Playfair Display** | 24 / sm 30, `leading-snug` 1.375 | 400 | normal | `ink-800` |
| owner paragraphs | Inter | 18 / 29.25 | 400 | normal | `ink-600` |
| signature | **Playfair Display** | 20 | 400 | normal | `ink-800` |
| `h2` in service-areas / testimonials / closing | **Inter** | 36 / 40 | **700** | **−0.025em** (`tracking-tight`) | `ink-800` / `gray-900` / `white` |
| towns list item | Inter | 16, `py-2.5` | 400 | normal | `ink-700` |
| testimonial `blockquote` | Inter | 18 / 28 | 500 | normal | `gray-900` |
| closing band body | Inter | 18 / 29.25 | 400 | normal | `primary-100` |
| footer column head | Inter | 14 | 600 | +0.05em | `white`, uppercase |
| footer link / blurb | Inter | 16 | 400 | normal | `gray-400` |
| footer legal | Inter | 14 | 400 | normal | `gray-500` |

Rules that are not utilities and must be copied verbatim (all measured in the compiled sheet):

* `.section` → `padding-block: calc(var(--spacing) * 20)` and `calc(var(--spacing) * 28)` at ≥1024 —
  i.e. **80 px / 112 px**. Five bands use it; the hero and the emergency strip do not.
* `.container` → `width:100%`, capped at **1280 px** at this viewport, with `px-4` and `lg:px-8`, so the
  inner content measures **1216 px** at 1440 and **358 px** at 390.
* `html` → `scroll-behavior:smooth`; `body` → `-webkit-font-smoothing:antialiased`,
  `-moz-osx-font-smoothing:grayscale`, `color:#2a2622`, `background-color:#faf8f5`.
* `.shadow-soft` → `box-shadow: 0 4px 16px -4px #0000001a` (the testimonial cards).
* `.btn`, `.btn-primary`, `.btn-secondary`, `.card`, `.container-narrow` **are compiled but unused by this
  page** — the kit ships them and this design styles its own buttons inline. Do not import them; the
  recreation's buttons are utilities per the table below.
* `.img-shimmer` → `linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%) 0 0/200% 100%` with a
  1.5 s `shimmer` animation (one element uses it: the hero photo's placeholder).
* `@keyframes hero-float` and `.animate-hero-float` are compiled but **not used on this page** (0 elements)
  — leave them out.
* `[data-nav-link].nav-active{color:#111827;font-weight:600}` — the sheet's active state, which the landing
  page never triggers (see Requirement 2).

### Buttons, pills, radii, shadows (measured)

| control | classes (source) | measured at 1440 |
| --- | --- | --- |
| phone pill (header + hero + emergency + footer) | `inline-flex items-center rounded-full font-semibold bg-primary-600 text-white hover:bg-primary-700`, `px-4 py-2.5` with a 16–20 px phone glyph | **183 × 46**, radius full, 16 px text, `10 / 16` padding |
| closing-band primary | `rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700` | **218 × 56**, radius **8 px** |
| closing-band secondary | `rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white` | **259 × 60** (the 2 px border adds 4 px of box) |
| reviews badge | `rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700` | **81 × 28** |
| testimonial card | `rounded-2xl bg-white p-8 shadow-soft` | **381 × 348**, radius **16 px**, `0 4px 16px -4px #0000001a` |
| carousel arrow | `rounded-full bg-white p-2 shadow-lg` (hidden ≥1024 by the kit's own JS rule) | 40 px disc |
| carousel dot | `h-2.5 rounded-full` → active `w-8 bg-primary-600`, inactive `w-2.5 bg-gray-300` | 32 px wide active, 10 px inactive |
| moon / menu buttons | `rounded-lg p-2 text-ink-400 hover:bg-ink-100` | 36–40 px square |
| cookie buttons | `rounded-lg px-4 py-2 text-sm font-medium` (outline `border-gray-300` / solid `bg-primary-600`) | 36 px tall |
| back-to-top | `h-12 w-12 rounded-full bg-primary-600` at `bottom-6 right-6` | **48 px** disc |

Radii in use: **8 px** (`rounded-lg`: buttons, moon/menu tiles, the closing band's CTAs, cookie buttons),
**16 px** (`rounded-2xl`: cards, the hero photo, the avatar-adjacent surfaces), **full** (every phone pill,
the 112 px avatar, the 48 px disc, the badge). No `rounded-xl` on this page even though the sheet compiles
it (an inner-page icon tile uses it).

### Rhythm, containers, measured heights (1440 px, cookie strip dismissed)

| band | ground | height | top |
| --- | --- | --- | --- |
| `<header>` (sticky, `h-20 lg:h-24`) | `ink-50/95` + `backdrop-blur` + 1 px `ink-200` | **97** | 0 |
| hero (`<section>` no id) | `ink-50` | **799** | 97 |
| `#services` | `white` | **1,013** | 896 |
| `#owner` | `ink-50` | **836** | 1,909 |
| `#emergency` | `ink-50` | **164** | 2,745 |
| `#service-areas` | `white` | **448** | 2,909 |
| `#testimonials` | `gray-50` | **796** | 3,357 |
| `#contact` | `primary-700` `#946a2d` | **440** | 4,153 |
| `<footer>` | `gray-900` | **543** | 4,593 |
| document | — | **5,136** | — |

The cookie strip is a fixed 87 px bar. At **390 px** the document is **7,150 px**: header **81**, hero
**1,257**, services **953** (`dl` alone), emergency **264**, towns **270**, testimonial card **334 × 376**,
closing-band buttons **358 × 56** and **358 × 60**, footer **1,251**.

## Reference document order

```
#preloader            (fixed, full-screen ink-50, 40 px spinning ring; removed on window.load)
skip link             (sr-only until focused, first focusable element)
#scroll-progress      (fixed top, h-0.5, bg-primary-600, width set from scrollY)
<header data-header>  (sticky; wordmark block + nav + phone pill + moon + menu)
  <nav aria-label="Main navigation">   (xl:flex — 4 labels, hidden below 1280)
  collapsed panel     (xl:hidden, repeats the 4 labels + the pill)
<main id="main-content">
  hero section        (no id, grid-cols-12: figure 5 / copy 7)
  #services           (4/8 split, <dl> of six priced rows)
  #owner              (centred max-w-3xl testimony, 112 px avatar)
  #emergency          (thin ruled strip, ping dot + pill, data-emergency)
  #service-areas      (5/7 split, 12 towns in 2/3 columns)
  #testimonials       (centred head + 3-card carousel, gray-50)
  #contact            (bronze band, two CTAs)
<footer>              (4-column 12-grid + legal bar)
#cookie-consent       (fixed bottom, slides up 1.5 s after load)
#back-to-top          (48 px disc, appears past 300 px)
```

## Band-by-band content (the reference's real copy — reproduce this order, paraphrase lightly)

### 0 — Header (97 px, sticky)

Two-line wordmark on the left: `Journeyman` in Playfair 600 / 30 px over a **10.4 px** uppercase microline
`NC Licence #000000 · (555) 010-0142` in `ink-400`, tracked **+0.18em**, truncating on narrow screens.
Then, only at **≥1280 px**, four uppercase 14 px labels: `What I do` · `Meet Sam` · `Reviews` · `Contact`
(each `whitespace-nowrap`, `text-ink-500`, `hover:text-primary-700`). On the right: the bronze phone pill
`(555) 010-0142` (from **768 px** up), a **moon** button (`aria-label="Toggle dark mode"`), and a
**hamburger** (`aria-label="Open menu"`, `aria-expanded="false"`) that is the only nav control below
1280 px. The collapsed panel is `xl:hidden` and repeats the four labels as `block py-3 text-base`
uppercase rows plus the pill inside a `border-t` block.

### 1 — Hero (799 px, `ink-50`, no id)

Twelve columns, `gap-10 lg:gap-16`, `items-center`, `px-4 py-14 lg:px-8 lg:py-20`.
**Left, `lg:col-span-5`:** a `4/5` portrait (`aspect-[4/5] w-full rounded-2xl object-cover`, measured
**469 × 587**) whose `alt` is *"A plumber at work on a pipe run"*, and directly under it a 14 px `ink-400`
`figcaption`: *"Replace with a photograph of yourself beside your own van. On a one-van business this image
is the credential."*
**Right, `lg:col-span-7`:** kicker `Asheville · Licensed since 1996` → `h1` *"You get me, and you get my
van."* → two 18 px ledes: *"I am Sam Ordway. I have been plumbing in Asheville for thirty years, the last
eleven on my own. There is no dispatcher, no apprentice sent instead, and no van number two."* and *"That
means I cannot be everywhere, and I will tell you honestly when I am booked. It also means the person who
quotes your job is the person standing in your crawl space doing it."* → a row with the bronze phone pill
and, inline beside it, **five `amber-400` stars**, `5.0` in `font-bold`, and `90+ reviews on Google · sample
data` at `opacity-80`.

### 2 — `#services` (1,013 px, white) — "A short list, done properly"

Four/eight split. Left (`lg:col-span-4`): kicker `What I do`, Playfair `h2`, intro *"If it is not on this
list I probably know someone better than me for it, and I will give you their number."*
Right (`lg:col-span-8`): a `<dl>` (measured **789 px** wide, **737 px** tall) of **six** rows, each
`flex flex-col gap-1 border-ink-100 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8`, where
**rows 2–6 carry `border-t`** and row 1 carries nothing — so the list is separated *between* items, never
capped top or bottom. Each row: `dt` (Playfair 20 px) + `dd` (16 px `ink-500`) on the left capped at
`sm:max-w-xl`, and a right-aligned `p` price in 14 px uppercase bronze `tracking-wider`. Row heights
**122 / 123 × 5**. The six rows:

| `dt` | `dd` | price |
| --- | --- | --- |
| Repairs and leaks | Dripping taps, failed shut-offs, leaking traps and the pipe behind the washing machine that has been damp for a year. | **From $110** |
| Drain clearing | Kitchen, bath and laundry. I cable it, then tell you whether it will come back and why. | **From $160** |
| Water heaters | Repair where a repair is honest, replacement where it is not. I take the old one away. | **From $980 fitted** |
| Toilets and fixtures | Running toilets, new faucets, and the small jobs the bigger outfits will not book you in for. | **From $95** |
| Crawl space and freeze damage | Asheville winters split pipes every year. I insulate, repair and lag so the same run does not go again. | **Quoted on site** |
| Advice on the phone, free | If you can fix it yourself in ten minutes I would rather tell you how than charge you to watch me do it. | **No charge** |

Under the list, 14 px `ink-400`: *"Prices are sample data for demonstration. Replace them with your own
before launch."*

### 3 — `#owner` (836 px, `ink-50`) — "Why one van"

Centred `mx-auto max-w-3xl text-center`. A **112 × 112** round avatar (`mx-auto h-28 w-28 rounded-full
object-cover`, `alt="Portrait of Sam Ordway"`), kicker `Why one van`, then the serif lede *"I tried running
three vans for two years. The work got worse and I stopped enjoying it."*, then two 18 px paragraphs
(*"So I went back to one. I answer the phone myself, I quote the job myself, and I do the work myself. …"*
and *"If you ring and I cannot fit you in this week, I will say so straight away rather than booking you a
fortnight out and hoping."*), then the signature `Sam Ordway` in Playfair 20 px with a 12 px uppercase
`Licensed plumber, Asheville` under it, then a text link *"Read more about how I work"* styled as
`border-b-2 border-primary-600 pb-1`.

### 4 — `#emergency` (164 px, `ink-50`, `data-emergency`)

A **thin strip, not a band**: `py-6 lg:py-8` on the inner container, `flex flex-col lg:flex-row` with the
pill right-aligned. Left: a **pinging dot** (`relative flex h-2 w-2` with an `absolute` `animate-ping`
twin + a solid core, both `bg-current`, the outer at `opacity-60` — measured **16 × 16** including the
ping's scale), the label `Out of hours` in 14 px uppercase `tracking-wide` at `opacity-90`, then *"I answer
my own phone until 21:00, and from 06:00."* in 18/20 px bold, then *"Overnight I let it go to voicemail,
because a plumber who has not slept should not be soldering in your ceiling."* at 14 px `opacity-90`.
Right: the bronze phone pill at **larger scale** (`px-6 py-3 text-lg font-bold`, `rounded-full`).

### 5 — `#service-areas` (448 px, white) — "Where I get to"

Five/seven split. Left: **Inter 700 36 px** `h2` + an 18 px `ink-500` intro (*"Asheville and the valleys
around it. Further out for bigger jobs, but I will be straight with you about travel."*). Right: a `<ul>`
(measured **683 × 180**) of **twelve** towns in `grid-cols-2 sm:grid-cols-3` with `gap-x-6`; each `li` is
`border-b py-2.5` in `ink-100` (measured **45 px** tall), so the grid reads as ruled columns —
`Asheville · West Asheville · Black Mountain · Weaverville · Arden · Fletcher · Swannanoa · Candler ·
Fairview · Leicester · Woodfin · Mars Hill`. Under it, 14 px `ink-400`: *"Replace this list with your own
towns before launch."*

### 6 — `#testimonials` (796 px, `gray-50`) — "What people say"

Centred head: a `rounded-full bg-primary-100` badge `Reviews` (**81 × 28**), then **Inter 700 36 px**
`h2`, then *"Sample reviews for demonstration. Replace with your own."* Below, a carousel:
`overflow-hidden` wrapper → `flex transition-transform duration-500 ease-out` track →
**three** `flex-shrink-0 px-3` slides (**405 px** each at 1440, `381 px` card inside) → each card
`rounded-2xl bg-white p-8 shadow-soft` with five `primary-400` stars, an 18 px `font-medium` `blockquote`,
and a footer row of a 48 px round `primary-100` initial chip + name + town. The three reviews:

| quote (abridged) | name | town | initial |
| --- | --- | --- | --- |
| "Sam talked me through shutting the water off on the phone, then turned up when he said he would…" | Ruth M. | West Asheville | R |
| "Booked three weeks out because he only has the one van, and worth every day of the wait. Tidy, straight…" | Callum B. | Black Mountain | C |
| "Rang about a dripping faucet and he told me which washer to buy and how to do it myself. Did not charge…" | Imogen P. | Arden | I |

Two arrow buttons (`aria-label="Previous testimonial"` / `"Next testimonial"`, `absolute -left-4` /
`-right-4 top-1/2`) and a dots container `mt-8 flex justify-center gap-2` — see Requirement 8 for the
**responsive** truth about these: the container is **empty and the arrows are `display:none` at 1440**.

### 7 — `#contact` (440 px, `primary-700` `#946a2d`)

Centred `max-w-3xl`. `h2` *"Ring Sam"* in **white Inter 700 36 px**, then an 18 px `primary-100` line
(*"If I am on a job I will ring you back the same day. If I am under a house it might be the evening."*),
then two CTAs side by side at ≥640 px: a **white** `rounded-lg` **218 × 56** primary
(*"Call (555) 010-0142"*, label `primary-700`) and a **transparent, 2 px `white/40`** bordered **259 × 60**
secondary (*"Send a message instead"*). Both are full-width and stacked at 390 px.

### 8 — Footer (543 px, `gray-900`)

`pt-16 lg:pt-24` then a twelve-column grid `gap-12 lg:gap-8`: col-span-4 (measured **384 px**) holds the
**light** logo (`assets/img/logo-light.svg`, `h-10 w-auto` → 190 × 40), the blurb *"One plumber, one van,
thirty years of it. Repairs, drains and water heaters across Asheville and the valley."*, three
`bg-gray-800` social tiles (`aria-label` Twitter / Instagram / LinkedIn, all `href="#"`) and an address
block: `41 Haywood Road, Asheville, NC 28806` · `(555) 010-0142` · `sam@journeymanplumbing.example`.
col-span-5 holds three sub-columns (**141 px** each): `What I do` (Repairs / Drains / Water heaters / Small
jobs), `Company` (Meet Sam / Reviews / Contact) and `Support` (Privacy / Terms). col-span-3 (**280 px**)
holds `Licensed` with *"NC licence #000000, insured and bonded. Sample details for template
demonstration."* and a bronze pill. Then a `border-t border-gray-800` legal bar:
`© 2026 Journeyman. All rights reserved.` + `Privacy Policy` / `Terms of Service`.

### 9 — Fixed chrome

`#cookie-consent` — 87 px bar, `border-t border-gray-200 bg-white`, copy *"We use cookies to enhance your
experience…"*, `Decline` (outline) and `Accept All` (bronze); it starts at `translateY(100%)` and slides in
**1.5 s after load**, persisting `cookie-consent` (`accepted` / `essential`) in `localStorage`.
`#scroll-progress` — 2 px bronze bar, width = scroll fraction. `#back-to-top` — 48 px bronze disc, appears
past **300 px** scroll, smooth-scrolls to top. `#preloader` — full-screen `ink-50` overlay with a 40 px
spinning ring, removed 300 ms after `window.load`.

## Behaviour the recreation must reproduce

The 16,233 B bundle initializes **21** markers; this page touches **eleven** behaviours and leaves ten
unused. Reproduce exactly these eleven, in React state:

1. **Preloader** (inline script, not the kit): the overlay fades and unmounts 300 ms after `load`. The
   recreation must **not** ship it (deviation 3) — record the value, skip the flash.
2. **Scroll progress** — `width = scrollY / (scrollHeight − innerHeight) * 100 %`, passive listener, value
   set on mount too (measured `0px` at top, `100%` at the bottom).
3. **Header shadow** — past **50 px** the sticky header gains `shadow-lg`; it loses it again on the way up.
4. **Reveal on scroll** — every `[data-animate]` starts at `opacity:0; transform:translateY(20px)` with
   `transition: opacity .6s ease-out, transform .6s ease-out` and `transition-delay: {data-delay}ms`, and
   an `IntersectionObserver` (threshold **0.8 of viewport height** worth of entry, `rootMargin` default)
   clears both. Six elements carry it: the reviews badge, the testimonials `h2` (delay **100**), its lede
   (delay **200**) and the three cards (delays **100 / 200 / 300**). Nothing above the testimonials
   animates — the hero renders immediately.
5. **Mobile disclosure** — the hamburger toggles the `xl:hidden` panel, flipping `aria-expanded` to
   `"true"`/`"false"` and swapping the hamburger glyph for an ✕; the panel closes on a second tap.
6. **Nav active state** — `[data-nav-link]` compares `data-nav-link` against `location.pathname` and adds
   `nav-active` (`color:#111827; font-weight:600`). On the landing page the path is `/` and **no** label
   matches, so **nothing is ever active** (measured: all four `false`, before and after scrolling).
   The recreation has no router path from a single page, so the state can never be reached — do **not** invent a
   scroll-spy (see deviation 12).
7. **Carousel** — per-page count is **3 at ≥1024, 2 at ≥640, 1 below**, derived from `innerWidth` on load
   and on resize; slide width = wrapper width / per-page; `maxIndex = max(0, slides − perPage)`;
   `translateX(-index * slideWidth)`; arrows are shown **only when `maxIndex > 0`** (`display:flex`),
   dots are generated **only when `maxIndex > 0`** (`maxIndex + 1` buttons); autoplay advances every
   **5 s**, clears on `mouseenter` and restarts on `mouseleave`; pressing an arrow or a dot advances and
   restarts the timer. **With exactly three slides this means: at 1440 px the row is static, the arrows
   are `display:none`, and the dots container is empty** (measured: 0 dots, both arrows `none`, track
   `matrix(1,0,0,1,0,0)`); at 900 px there are **2** dots and both arrows are visible; at 390 px there are
   **3** dots. This is correct responsive behaviour, not a bug — do not "fix" it into a visible desktop
   carousel, and do not ship an empty dots container at desktop.
8. **Cookie strip** — 1.5 s delay, `Accept All` stores `accepted`, `Decline` stores `essential`, both
   slide out over 300 ms and unmount.
9. **Back to top** — visible past 300 px (`opacity:1; pointer-events:auto; translateY(0)`), hidden below
   it, smooth scroll on press.
10. **Theme application** (inline script) — reads `localStorage.theme`, else
    `prefers-color-scheme: dark`, and toggles `.dark` on `<html>`; the moon button toggles and persists
    `theme`. The recreation drops dark mode (deviation 2) and must therefore drop the button, not leave it
    inert.
11. **Nothing else** — `data-accordion-toggle`, `data-faq-toggle`, `data-billing-toggle`,
    `data-blog-filters`, `data-blog-search`, `data-counter`, `data-lightbox`, `data-parallax`,
    `data-typewriter`, `data-video-modal` and `data-validate`/`data-contact-form` are **absent from the
    landing page**. In particular there is **no** counter band and **no** form on `/`, and no number on
    the page animates.

Two markers in the markup are **dead in this kit**: `data-emergency` (on `#emergency`) and `data-phone`
(4 occurrences) appear in the HTML but **not once** in the 16,233 B bundle — the emergency strip is pure
CSS, and the phone styling is inline utilities. Keep the ids for testability if useful; do not build a
handler for them.

## Data-attribute inventory (measured on the live page)

| marker | count on `/` | initializer present in the kit | what it does |
| --- | --- | --- | --- |
| `data-header` | 1 | yes | adds `shadow-lg` past 50 px |
| `data-nav-link` | 4 | yes | pathname → `.nav-active` (never matches on `/`) |
| `data-mobile-toggle` | 1 | yes | opens/closes the panel, flips `aria-expanded` |
| `data-mobile-menu` | 1 | yes | the `xl:hidden` panel |
| `data-dark-toggle` | 1 | yes | toggles `.dark`, persists `theme` |
| `data-carousel` | 1 | yes | wrapper |
| `data-carousel-track` | 1 | yes | the `flex` track |
| `data-carousel-slide` | 3 | yes | the `flex-shrink-0 px-3` slides |
| `data-carousel-prev` / `-next` | 1 / 1 | yes | arrows, `display` driven by `maxIndex` |
| `data-carousel-dots` | 1 | yes | generated dots (0 at 1440, 2 at 900, 3 at 390) |
| `data-cookie-accept` / `-decline` | 1 / 1 | yes | localStorage + slide-out |
| `data-animate` (+ `data-delay`) | 6 | yes | reveal on scroll, delays 0/100/200/300 |
| `data-emergency` | 1 | **no** | dead marker — no handler anywhere |
| `data-phone` | 4 | **no** | dead marker — no handler anywhere |

## Link and destination census (LT axis, measured 2026-10-25)

The live page holds **35** anchors over **12** distinct targets, and **every internal target is live**:

| target | count | what it is |
| --- | --- | --- |
| `/theme/journeyman/services` | 6 | header, mobile panel, hero nav, footer "What I do" (4×) + footer list (2×) |
| `tel:5550100142` | 6 | every phone pill (header, hero, emergency, footer ×2) |
| `/theme/journeyman/meet-sam` | 4 | header, mobile panel, owner-band text link, footer |
| `/theme/journeyman/contact` | 4 | header, mobile panel, closing-band secondary, footer |
| `/theme/journeyman/reviews` | 3 | header, mobile panel, footer |
| `#` | **3** | the three footer social tiles — **dead** |
| `/theme/journeyman/` | 2 | wordmark, footer logo |
| `/theme/journeyman/privacy` | 2 | footer "Support" + legal bar |
| `/theme/journeyman/terms` | 2 | footer "Support" + legal bar |
| `#main-content` | 1 | the skip link (in-page, resolves) |
| `tel:(555) 010-0142` | 1 | **malformed** — parentheses and a space inside a `tel:` URI, in the footer contact block |
| `mailto:sam@journeymanplumbing.example` | 1 | footer |

Arithmetic: **35 = 29 live internal + 6 `tel:`** and **3 dead `#`**; the only `href="#"` on the page are
those three social tiles, and one `tel:` is syntactically broken. The recreation must end with **zero**
dead anchors and **zero** malformed URIs (Requirement 14).

## Class census (no phantom-class delta)

**295** distinct classes appear in the landing page's markup and **every one of them has a rule in the
compiled sheet — 0 phantom classes**, so the markup-to-CSS mapping is complete and any class you cannot map
in the recreation is invented. Two consequences worth knowing:

* the sheet compiles `.btn`, `.btn-primary`, `.btn-secondary`, `.card`, `.container-narrow`,
  `.animate-hero-float` and `.text-gradient`, **none of which this page uses** — they come from the shared
  kit and from sibling designs in the same family. Copying them into `index.css` adds dead CSS;
* `bg-ink-*` / `bg-primary-*` rules are emitted with **literal hex values** (e.g.
  `.bg-primary-700{background-color:#946a2d}`) rather than `var(--color-primary-700)`, because the theme
  colours were declared outside `@theme`. If the recreation uses Tailwind 4 `@theme` tokens it must keep the
  same literals, or the whole-tree contrast changes.

## Screenshot analysis (`journeyman-template.jpg`, 2400×1892 JPEG)

A **macOS browser window on a pale grey desk ground** — three traffic lights, a grey rounded title bar, a
soft drop shadow — framing the page from the sticky header to the second service row. Visible and useful:
the two-line wordmark with its licence microline, the four uppercase nav labels, the bronze pill and moon
glyph, the 4:5 portrait at the left of the hero with the instructional caption under it, the bronze kicker,
the **two-line Playfair headline**, both 18 px ledes, the bronze pill + five amber stars + `5.0` rating row,
the band change from warm `ink-50` to white at `#services`, and the price list's first two rows with their
hairline separator and right-aligned bronze "FROM $110" / "FROM $160".

**Not visible, and therefore not corroborated by the shot:** the owner band, the emergency strip, the
towns, the testimonials, the bronze closing band, the footer, the cookie strip, and every interactive
state. Do not adopt the marketing framing (window chrome, desk ground, drop shadow) into the app, and do
not sample colours from the JPEG — the AVIF-free JPEG still carries compression in the `<h1>`'s antialiasing.

## Requirements

### Requirement 1: Page chrome (skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px `primary-600` scroll-progress bar
fixed at the top, a 48 px `bg-primary-600` back-to-top disc at `bottom-6 right-6`, and a cookie strip that
slides up 1.5 s after mount and dismisses into component state. It SHALL NOT paint a preloader.

#### Scenario: Visitor loads the page

- **GIVEN** the page is mounting
- **WHEN** the first paint happens
- **THEN** the hero is visible immediately (no `#preloader` overlay, unlike the reference)
- **AND** nothing fixed covers the hero except the sticky 97 px header
- **AND** the cookie strip is off-screen (`translateY(100%)`) until 1.5 s after mount

#### Scenario: Cookie strip lifecycle

- **GIVEN** the strip is off-screen
- **WHEN** 1.5 s have elapsed
- **THEN** it slides up over 300 ms and carries `aria-label="Cookie consent"`
- **AND** pressing `Accept All` or `Decline` slides it back down and unmounts it
- **AND** it does not return in the same session, and the choice is readable from `localStorage.cookie-consent`
  (`accepted` / `essential`)

#### Scenario: Reading progress and back to top

- **GIVEN** the visitor is at the top
- **WHEN** they scroll
- **THEN** the progress bar's width is `scrollY / (scrollHeight − innerHeight) * 100` % of the viewport
- **AND** past 300 px the back-to-top disc fades in and returns the page to `top: 0` when pressed
- **AND** past 50 px the header gains `shadow-lg` and loses it again above the threshold

### Requirement 2: Header, two-line wordmark and the 1280 px nav breakpoint

The app SHALL render a sticky header measuring **97 px** at ≥1280 px and **81 px** at 390 px
(`h-20 lg:h-24` + 1 px border), on `bg-ink-50/95` with `backdrop-blur` and a `border-ink-200` bottom
border. It SHALL show the wordmark block, four uppercase nav labels, the bronze phone pill and a hamburger,
and it SHALL NOT ship a dark-mode button.

#### Scenario: Desktop header

- **GIVEN** the viewport is at least **1280 px**
- **WHEN** the header renders
- **THEN** the inner container is **1216 px** wide with `px-8`
- **AND** the wordmark measures **267 × 36** (`text-3xl`, `leading-none`) with the microline **10.4 px**
  uppercase at **+0.18em** in `ink-400`
- **AND** the four labels are 14 px / 20, weight 600, uppercase, **+0.05em**, `ink-500`, separated by a
  **32 px** gap (`xl:gap-8`), each measured **81 × 20**
- **AND** the phone pill measures **183 × 46** with `rounded-full`
- **AND** the moon button and the hamburger are both absent from the rendered layout at ≥1280 px

#### Scenario: The nav disappears at 1279 px, not at 1024

- **GIVEN** the viewport is **1024 px**
- **WHEN** the header renders
- **THEN** the `<nav aria-label="Main navigation">` is `display:none` (its `xl:flex` never applies) and
  measures **0 × 0**
- **AND** the hamburger is visible and the pill still shows (it is hidden only below 768 px)
- **AND** at **1280 px** the nav is visible again while the hamburger is hidden

#### Scenario: Mobile disclosure

- **GIVEN** the viewport is 390 px
- **WHEN** the visitor taps the hamburger
- **THEN** the panel opens below the header with four `block py-3` 16 px uppercase labels and the pill
  inside a `border-t border-ink-200` block
- **AND** `aria-expanded` flips to `"true"` and the glyph swaps hamburger ↔ ✕
- **AND** a second tap closes it, and the header measures **81 px** with the wordmark **262 × 32**

### Requirement 3: Hero

The app SHALL render a twelve-column hero on `bg-ink-50` with a `4/5` portrait in `lg:col-span-5` and the
copy in `lg:col-span-7`, the portrait carrying its instructional `figcaption` beneath it.

#### Scenario: Desktop hero

- **GIVEN** the viewport is 1440 px
- **WHEN** the hero renders
- **THEN** the section measures **799 px** tall and the inner grid **1216 × 639** with `gap-16`
- **AND** the photo measures **469 × 587** (`4/5`), `rounded-2xl`, with a **40 px** tall caption under it
  in 14 px `ink-400`
- **AND** the `h1` measures **683 × 132** and resolves to **Playfair Display 600, 60 px / 66 px,
  `letter-spacing: normal`** in `ink-800`
- **AND** the kicker is 12 px / 600 / uppercase / **+0.2em** in `#946a2d`
- **AND** both ledes are **18 px / 29.25**, `ink-500`, capped at `max-w-xl`
- **AND** the bronze pill measures **183 × 46** and the rating row sits inline beside it with five
  `amber-400` stars, `5.0` bold and the `opacity-80` sample-data note

#### Scenario: Mobile hero

- **GIVEN** the viewport is 390 px
- **WHEN** the hero renders
- **THEN** the band measures **1,257 px** and stacks photo → caption → copy in one column
- **AND** the photo is **358 × 448** and the `h1` is **36 px** over **79 px** (two lines)
- **AND** the pill and the rating row wrap onto their own lines (`flex-wrap`), the rating staying inline

#### Scenario: The hero copy is not lorem

- **GIVEN** the hero is rendered
- **WHEN** its text is read
- **THEN** it names the owner (`Sam Ordway`), the town (`Asheville`), the tenure (`thirty years`, `eleven
  on my own`) and the constraint (*"no dispatcher, no apprentice sent instead, and no van number two"*)
- **AND** the second paragraph admits the limit honestly rather than promising availability

### Requirement 4: `#services` price list

The app SHALL render `#services` as a four/eight split whose right column is a `<dl>` of **six** priced
services separated by `border-t` hairlines **between** rows only.

#### Scenario: Desktop list

- **GIVEN** the viewport is 1440 px
- **WHEN** `#services` renders
- **THEN** the band measures **1,013 px** with **112 px** block padding and a **789 px** wide `<dl>`
- **AND** the six rows measure **122 / 123 / 123 / 123 / 123 / 123 px**
- **AND** row 1 has **no** top rule while rows 2–6 each carry a **1 px** `border-t` in `ink-100`
- **AND** each `dt` is **Playfair Display 600, 20 px** and each `dd` is **16 / 24** in `#615648`
- **AND** each price is right-aligned, `uppercase`, 14 px, weight 600, `+0.05em`, in `#946a2d`

#### Scenario: Mobile list

- **GIVEN** the viewport is 390 px
- **WHEN** `#services` renders
- **THEN** each row stacks (`flex-col`) with its price under the description
- **AND** the rows measure **170 / 147 / 147 / 147 / 171 / 171 px** and the `<dl>` **358 px** wide

#### Scenario: The prices are the reference's, including the two non-numeric ones

- **GIVEN** the list is rendered
- **WHEN** the prices are read
- **THEN** they are `From $110`, `From $160`, `From $980 fitted`, `From $95`, `Quoted on site`, `No charge`
  in that order
- **AND** the sample-data note under the list is present and explicit

### Requirement 5: `#owner` testimony band

The app SHALL render `#owner` as a centred `max-w-3xl` testimony on `bg-ink-50` with a **112 px** round
avatar, a serif lede, two Inter paragraphs, a signature block and an underlined text link.

#### Scenario: Desktop band

- **GIVEN** the viewport is 1440 px
- **WHEN** `#owner` renders
- **THEN** the band measures **836 px** with 112 px block padding
- **AND** the avatar is **112 × 112**, `rounded-full`, centred
- **AND** the serif lede is **Playfair Display at 30 px** with `leading-snug` (1.375) in `ink-800`
- **AND** both paragraphs are 18 px / 29.25 in `ink-600`
- **AND** the signature is Playfair 20 px with a 12 px uppercase `+0.18em` role line under it
- **AND** the link is `border-b-2 border-primary-600`, not an underline utility

### Requirement 6: `#emergency` strip

The app SHALL render `#emergency` as a **thin ruled strip** (not a padded band) on `bg-ink-50` whose
left side is a pinging dot plus two lines of out-of-hours copy and whose right side is an enlarged bronze
pill.

#### Scenario: Desktop strip

- **GIVEN** the viewport is 1440 px
- **WHEN** `#emergency` renders
- **THEN** the band measures **164 px** tall (32 px inner `lg:py-8`, no `section` padding)
- **AND** the dot is a `relative flex h-2 w-2` core with an `absolute` `animate-ping` twin at
  `opacity-60`, both `bg-current`, measuring **16 × 16** in the layout
- **AND** the label `Out of hours` is 14 px uppercase `tracking-wide` at `opacity-90` over an 18/20 px bold
  sentence
- **AND** the pill is larger than the header's (`px-6 py-3 text-lg font-bold`) and right-aligned at ≥1024 px

#### Scenario: Mobile strip

- **GIVEN** the viewport is 390 px
- **WHEN** the strip renders
- **THEN** it measures **264 px** and stacks copy over the pill
- **AND** the ping animation still respects `prefers-reduced-motion` (it stops, the core dot remains)

### Requirement 7: `#service-areas` town grid

The app SHALL render `#service-areas` as a five/seven split with an Inter 700 heading and a ruled grid of
**twelve** towns.

#### Scenario: Desktop grid

- **GIVEN** the viewport is 1440 px
- **WHEN** the band renders
- **THEN** the `<ul>` measures **683 × 180** in `grid-cols-3` with a **24 px** column gap
- **AND** each `li` is **45 px** tall with `border-b border-ink-100 py-2.5` in `ink-700`
- **AND** the `h2` is **Inter 700 36 px −0.025em** — **not** Playfair (this is the first of the three sans
  `h2`s)

#### Scenario: Mobile grid

- **GIVEN** the viewport is 390 px
- **WHEN** the band renders
- **THEN** the towns are `grid-cols-2` at **167 px** each and the grid is **270 px** tall
- **AND** the twelve names and their order are unchanged

### Requirement 8: `#testimonials` and its responsive carousel

The app SHALL render `#testimonials` on `bg-gray-50` with a bronze `Reviews` badge, an Inter 700 heading
and **three** testimonial cards in a carousel whose per-page count is **3 / 2 / 1** at **≥1024 / ≥640 /
below**.

#### Scenario: Static three-up at desktop

- **GIVEN** the viewport is 1440 px
- **WHEN** the band renders
- **THEN** the band measures **796 px** and the track holds three **405 px** slides around **381 × 348**
  cards
- **AND** **no dot is rendered** (the dots container is empty) and **both arrows are `display:none`**,
  because `maxIndex === 0` when `slides === perPage`
- **AND** the track is never translated (`matrix(1,0,0,1,0,0)`)
- **AND** the badge measures **81 × 28** and each card carries five `primary-400` stars, an 18 px
  `font-medium` quote, a 48 px `primary-100` initial chip, a name and a town

#### Scenario: Two-up at 900 px

- **GIVEN** the viewport is **900 px**
- **WHEN** the carousel initializes
- **THEN** the slides measure **368 px** each and two are visible
- **AND** **two** dots are generated (the active one `w-8 bg-primary-600`, the other `w-2.5 bg-gray-300`)
- **AND** both arrows become `display:flex`

#### Scenario: One-up at 390 px

- **GIVEN** the viewport is 390 px
- **WHEN** the carousel initializes
- **THEN** the card is **334 × 376** inside a **358 px** slide and **three** dots are generated
- **AND** pressing the next arrow advances one card and restarts the 5 s autoplay timer

#### Scenario: Autoplay pauses on hover

- **GIVEN** the carousel is advancing
- **WHEN** the pointer enters it
- **THEN** the interval clears; on `mouseleave` it restarts from the beginning of a 5 s period
- **AND** with `prefers-reduced-motion: reduce` the autoplay does not start at all

### Requirement 9: `#contact` closing band

The app SHALL render `#contact` as a full-bleed `bg-primary-700` (`#946a2d`) centred band with a white
Inter 700 heading, `primary-100` body copy and two CTAs.

#### Scenario: Desktop band

- **GIVEN** the viewport is 1440 px
- **WHEN** the band renders
- **THEN** it measures **440 px** with 112 px block padding and a `max-w-3xl` inner column
- **AND** the `h2` is **Inter 700 36 px**, white, `tracking-tight`
- **AND** the primary CTA is **218 × 56**, `rounded-lg` (**8 px**), white ground, `primary-700` label
- **AND** the secondary is **259 × 60**, transparent with a **2 px** `white/40` border (the border explains
  the 4 px difference) and a white label
- **AND** neither is a `rounded-full` pill

#### Scenario: Mobile band

- **GIVEN** the viewport is 390 px
- **WHEN** the band renders
- **THEN** both CTAs are **358 px** wide and stack with a 16 px gap
- **AND** their labels stay on one line

### Requirement 10: Footer

The app SHALL render a `bg-gray-900` footer with a twelve-column grid: brand + socials + address
(col-span-4), three link columns (col-span-5), a licence column (col-span-3), and a legal bar.

#### Scenario: Desktop footer

- **GIVEN** the viewport is 1440 px
- **WHEN** the footer renders
- **THEN** it measures **543 px** with `pt-24` and no bottom padding above the legal bar
- **AND** the four grid children measure **384 / 488 / 141 / 141 / 141 / 280** px wide, 298 px tall
- **AND** the logo is a **light** 190 × 40 mark, not the dark wordmark recoloured with CSS filters
- **AND** the three link-column heads are 14 px / 600 / uppercase / `+0.05em` white over `gray-400` links
- **AND** the legal bar is separated by a `border-t border-gray-800` and links
  `https://www.componentdock.com/` from the bottom row

#### Scenario: Mobile footer

- **GIVEN** the viewport is 390 px
- **WHEN** the footer renders
- **THEN** it measures **1,251 px** and the three link columns become a `sm:grid-cols-3` grid that
  collapses to one column
- **AND** the legal bar stacks its copyright over the two policy links

### Requirement 11: Reveal-on-scroll, scoped to the testimonials

The app SHALL animate **six** elements only — the reviews badge, the testimonials heading, its lede and the
three cards — with a 20 px rise, 0.6 s ease-out and per-element delays of 0/100/200/300 ms.

#### Scenario: Reveal

- **GIVEN** the visitor lands at the top of the page
- **WHEN** the testimonials band enters the viewport
- **THEN** each of the six elements transitions from `opacity:0; translateY(20px)` to `opacity:1;
  translateY(0)` over 600 ms
- **AND** the heading starts 100 ms after the badge, the lede 100 ms after the heading, and the three cards
  at 100 / 200 / 300 ms
- **AND** **nothing above `#testimonials` animates** — the hero, the price list and the towns are visible
  on first paint

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads
- **THEN** no element is given an inline opacity/transform, so all six render in their final state
- **AND** the ping, the ping's scale animation, the carousel autoplay and smooth scrolling are all disabled

### Requirement 12: Responsive behaviour and breakpoints

The app SHALL reproduce the reference's breakpoints exactly: **640** (sm), **768** (md), **1024** (lg),
**1280** (xl), and SHALL NOT introduce a horizontal scrollbar at any width.

#### Scenario: The three widths

- **GIVEN** viewports of **1440 / 1024 / 390** px
- **WHEN** the page renders
- **THEN** the document widths equal the viewport widths (no horizontal overflow) and the documents measure
  **5,136** and **7,150** px tall at 1440 / 390
- **AND** the header measures **97 / 97 / 81** px, the hero **799 / 687 / 1,257** px, the footer
  **543 / 567 / 1,251** px
- **AND** the town grid is `grid-cols-3` at ≥640 px and `grid-cols-2` below it

#### Scenario: Content survives every width

- **GIVEN** any width between 320 and 1600 px
- **WHEN** the page is rendered
- **THEN** the wordmark's microline truncates rather than wrapping or overflowing
- **AND** the nav is reachable at every width (labels at ≥1280 px, hamburger below)
- **AND** no card, list or button text is clipped

### Requirement 13: Accessibility and semantics

The app SHALL expose one `h1`, four `h2`s and three footer `h3`s in document order, a working skip link, an
`aria-expanded` disclosure, labelled icon buttons and a `<dl>` for the price list.

#### Scenario: Heading structure

- **GIVEN** the page is parsed
- **WHEN** the heading outline is read
- **THEN** there is **one** `h1` (the hero), **four** `h2`s (`#services`, `#service-areas`,
  `#testimonials`, `#contact`) and **three** `h3`s (the footer link-column heads)
- **AND** no level is skipped and no band uses a `p` styled as a heading in place of its `h2`

#### Scenario: Keyboard and screen-reader affordances

- **GIVEN** a keyboard-only visitor
- **WHEN** they tab from the top
- **THEN** the skip link is first and jumps to `#main-content`
- **AND** the hamburger, both carousel arrows, all dots, the cookie buttons and the back-to-top disc are
  reachable and operable with `Enter`/`Space`
- **AND** the moon button does not exist (dark mode is not shipped), so no control is inert
- **AND** every social tile has an `aria-label` and a real destination, and the carousel arrows keep
  `Previous testimonial` / `Next testimonial`

### Requirement 14: Zero dead or malformed links

The app SHALL contain no `href="#"` and no malformed `tel:` / `mailto:` URI.

#### Scenario: Anchor audit

- **GIVEN** the finished page
- **WHEN** every `a[href]` is inspected
- **THEN** there are **no** `href="#"` anchors (the reference has three, in the footer socials)
- **AND** every phone link is `tel:+15550100142` or `tel:5550100142` — **not** `tel:(555) 010-0142`
- **AND** the mailto uses a real, example-safe address and the second closing CTA resolves to something
  real (a `mailto:` is acceptable; a dead route is not)
- **AND** the in-page nav labels resolve to elements that exist on the page

## Deliberate deviations from the reference

1. **Multi-page → single page.** The reference ships **six live inner routes** (`services/`, `meet-sam/`,
   `reviews/`, `contact/`, `privacy/`, `terms/`). The recreation rebuilds the landing page only. The four
   nav labels become in-page anchors to `#services`, `#owner`, `#testimonials` and `#contact`; the two
   legal links are dropped from the footer rather than left dead. The inner pages are the authority for
   anything the single page must invent — `/services/` has the same six services as **cards** with three
   bullets each in a `gap-px bg-ink-100` hairline grid; `/meet-sam/` has the story, **three principles**
   (`I tell you when you do not need me`, `I do not subcontract`, `The quoted price is the price`) and the
   one-person "whole company" grid; `/reviews/` is a review grid with the same 5.0 / 90+ figures and a
   `Want Sam to look at yours?` CTA; `/contact/` is a real four-field form (`name`, `email`, `subject`,
   `message`, the first three `required`, `type="email"`, wrapped in `form[data-validate][data-contact-form]`).
   **Do not** rebuild them, and do not silently re-invent their content inside the landing page.
2. **Dark mode dropped.** The reference has `data-dark-toggle`, an `applyTheme()` inline script and a full
   `dark:` set (page `gray-950 #030712`, bands `gray-900 #111827`, cards `gray-800 #1f2937`, header
   `gray-950/95`, kickers `primary-400`, closing band `primary-900`, footer unchanged). The recreation is
   **light-only** and the moon button is omitted, so no control is dead. Every measured dark value is in
   §Design tokens, so the decision stays reversible.
3. **No preloader.** The reference paints a full-screen `ink-50` overlay with a spinning ring and removes it
   300 ms after `load` — a blank first paint. The recreation mounts nothing.
4. **The broken `tel:` is repaired.** `tel:(555) 010-0142` (parens + space) is not a valid URI. Use
   `tel:+15550100142` everywhere; keep the **displayed** string `(555) 010-0142` unchanged.
5. **The three footer social `#` tiles get real targets** (or become non-anchor elements). They are the
   page's only dead links.
6. **The footer logo is redrawn, not fetched.** `assets/img/logo-light.svg` is the source's own asset; ship
   an authored equivalent (wordmark + licence microline in `white` / `gray-400`) instead of hotlinking it.
7. **The JSON-LD is not copied.** The reference's block is corrupt: `"@context":"https://***@type"` (the
   URL was mangled), `"url":"/"` is a bare path, `"priceRange":"$$"`, and its phone (`+1-555-0142`) does not
   match the displayed `(555) 010-0142`. Either write a clean `Plumber` block from scratch or emit none.
8. **`og:image` and `og:title` are not copied.** `og-image.jpg` is **404** and the served head still carries
   the sibling page's `og:title` *"Meet Sam | Journeyman"* on the landing page. Ship a correct `<title>`
   and no og image, or author one.
9. **`data-emergency` and `data-phone` are not behaviours.** Neither string exists in the 16,233 B bundle;
   the strip is pure CSS. Keep the ids if they help tests, but do not invent handlers.
10. **No scroll-spy.** `[data-nav-link]` is **pathname**-based, and on a single page no path ever matches,
    so the reference's active state can never fire (measured: nothing active at any scroll position). Do not
    build a scroll-spy to "fix" it; if an active state is wanted, the four labels are anchors and the
    honest solution is an intentional one (e.g. an `aria-current` on the section in view), documented in the
    PR — not a copy of the sheet's `.nav-active` rule with no producer.
11. **The desktop testimonial row is static on purpose.** With three slides and a 3-per-page count the
    carousel is inert at ≥1024 px (`maxIndex === 0` → no dots, arrows `display:none`). Ship exactly that;
    a visible arrow at desktop is a fidelity bug, and an empty dots container is a DOM wart the reference
    itself only avoids by not rendering one.
12. **Dead CSS is not imported.** `.btn`, `.btn-primary`, `.btn-secondary`, `.card`, `.container-narrow`,
    `.text-gradient`, `.animate-hero-float` and `@keyframes hero-float` are compiled but unused by this
    page. Author only what the page uses.
13. **Sample data is kept and labelled.** Prices, the twelve towns, `90+ reviews`, the licence number
    `#000000`, the address, the phone and the three reviews are the reference's sample content, and every
    one of them already carries a "sample data / replace before launch" note in the design. Keep both the
    numbers and the notes; do not "improve" the figures.
14. **Brand and sample strings are replaced.** `Journeyman`, `sam@journeymanplumbing.example`,
    `© 2026 Journeyman` and the two Unsplash portraits become `Pipewright`, a `pipewright.example` address,
    `© 2026 Pipewright` and seeded placeholder photography. The hero `alt` stays honest
    (`A plumber at work on a pipe run` describes the reference's photo — write an alt that describes
    **your** image).
15. **The two currency-free price notes stay.** `Quoted on site` and `No charge` are not prices; they must
    not be given a `$` to make the column uniform.

## Verification checklist

- [ ] `apps/pipewright` exists, package `@free-react-templates/pipewright`, `public/CNAME` =
      `pipewright.free.componentdock.com`, `homepage` the same, footer links `https://www.componentdock.com/`
- [ ] No app file mentions the source brand or the source slug (provenance lives in this spec and the PR)
- [ ] `npm run verify:app pipewright` passes (typecheck, lint, 100 % coverage tests, build)
- [ ] Nine bands in the measured order; heights within ±3 % of `799 / 1013 / 836 / 164 / 448 / 796 / 440`
      at 1440, header **97**, footer **543**, document ≈ **5,136** px (or re-measure and record why)
- [ ] `ink` and `primary` ramps match the hex tables exactly, including `ink-200 #ded6cb` (the header
      border) and `primary-700 #946a2d` (the closing band)
- [ ] Body is `Inter, system-ui, sans-serif` 16 / 1.5 on `#faf8f5` with `#2a2622` ink; **Playfair Display
      600** on the `h1`, the wordmark, the services `h2`, the six `dt`s, the owner lede and the signature
- [ ] Three `h2`s are **Inter 700 36 px / −0.025em** (service-areas, testimonials, contact) and one is
      **Playfair 600 36 px** (services) — verified with `getComputedStyle`, not by eye
- [ ] Kickers 12 px / 600 / uppercase / `+0.2em` in `#946a2d`; price labels 14 px / 600 / uppercase /
      `+0.05em` in the same bronze; nav labels 14 px / 600 / uppercase / `+0.05em`
- [ ] Header: 97 px, `bg-ink-50/95` + backdrop blur, `border-ink-200`; nav only at **≥1280 px**; phone pill
      **183 × 46** `rounded-full`; **no** dark-mode button; hamburger `aria-expanded` disclosure below 1280
- [ ] Hero: 4:5 portrait **469 × 587** with its `figcaption`, `h1` **683 × 132** / 60-66, two 18 px ledes,
      bronze pill + five `amber-400` stars + `5.0` + sample-data note
- [ ] `#services`: six rows **122/123…**, `border-t` on rows 2–6 only, `dt` Playfair 20 px, right-aligned
      uppercase bronze prices `From $110 · From $160 · From $980 fitted · From $95 · Quoted on site ·
      No charge`, sample-data note present
- [ ] `#owner`: 112 px avatar, 30 px serif lede, two 18 px paragraphs, Playfair signature, `border-b-2`
      bronze link
- [ ] `#emergency`: **164 px** strip, `animate-ping` twin at `opacity-60` over a solid core, two copy lines,
      enlarged pill right-aligned at ≥1024 px
- [ ] `#service-areas`: twelve towns in `grid-cols-3` (683 × 180, 45 px rows, `border-b`), Inter 700 `h2`
- [ ] `#testimonials`: **static three-up at 1440 with zero dots and both arrows `display:none`**; **2 dots
      + visible arrows at 900**; **3 dots at 390**; 5 s autoplay that pauses on hover; three cards
      **381 × 348** with `shadow-soft` and `primary-100` initial chips
- [ ] `#contact`: `#946a2d` ground, white Inter 700 `h2`, `primary-100` lede, CTAs **218 × 56** (8 px
      radius) and **259 × 60** (2 px `white/40` border), full-width and stacked at 390 px
- [ ] Footer: **543 px**, col-span 4 / 5 / 3, light 190 × 40 logo, three 14 px uppercase heads,
      `gray-800` social tiles with real targets, legal bar links Component Dock
- [ ] Fixed chrome: skip link, 2 px progress bar, 48 px back-to-top past 300 px, cookie strip after 1.5 s
      with `localStorage.cookie-consent`, **no preloader**
- [ ] Reveals: exactly six elements, delays 0/100/200/300, nothing above `#testimonials` animated
- [ ] **Zero** `href="#"`, zero malformed `tel:` (`tel:+15550100142`), no dead in-page anchors
- [ ] 390 px: header 81, hero 1,257, h1 36 px, towns `grid-cols-2`, card 334 × 376, CTAs 358 px,
      document ≈ 7,150 px, no horizontal overflow at 320/390/768/1024/1280/1440
- [ ] Reduced motion: no reveal, no ping animation, no carousel autoplay, no smooth scroll — content visible
- [ ] One `h1`, four `h2`, three `h3`, no skipped level, skip link first in tab order, every icon button
      labelled
- [ ] `TEMPLATES.md` row added under `## Business` between `Jobpply` and `Kanox`, heading count bumped to
      `(373)` (re-count it), `README.md` status regenerated after deploy
