# Template: Veranda (Community — membership landing page for a build-in-public community)

## Purpose

A subscription landing page for a **moderated community that sells belonging, not software**. The
page is built on one promise it keeps repeating in different shapes: *every discussion is public to
read, membership is what pays the moderators* — so the whole argument is **transparency about what
the money buys**. A typewriter headline rotates three phrasings of the same idea inside an indigo
gradient, four counters prove the room is busy, six channel cards name the rooms and their cultures,
a five-row discussion list shows the actual product (threads with votes, tags, answered marks and
reply counts), three spotlight members prove contribution is measured in helpful answers, four dated
event cards show the calendar is real, three tiers with a monthly/yearly switch price the membership
in public, three testimonials, five FAQ rows about what the product refuses to do, and a full-bleed
indigo closing band over a near-black four-block footer.

Recreation of the ColorLib **"Commons"** design (https://colorlib.com/wp/template/commons/, live
preview https://preview.colorlib.com/theme/commons/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

* **Source slug:** `commons`
* **ColorLib page:** https://colorlib.com/wp/template/commons/ — HTTP 200, 112,573 B,
  `<title>` **"Commons - Community Website Template 2026 - Colorlib"**
* **Live preview:** https://preview.colorlib.com/theme/commons/ — HTTP 200, 84,310 B, page
  `<title>` **"Home | Commons"** (read 2026-10-25 with `curl -4`; this host resolves an IPv6 address
  that is banned, so every fetch needs `-4`, and a browser needs
  `--host-resolver-rules=MAP preview.colorlib.com 104.26.10.149`)
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/commons-template.jpg
  (served as **JPEG**, 309,252 B, 2400×1892 — a macOS-Safari-window-framed capture of the header, the
  whole hero, the four-counter row and the hero figure; nothing below the hero is in it)
* **New name:** `veranda` (apps/veranda, `@free-react-templates/veranda`) — one lowercase word, the
  porch the hero itself points at (*"14,000 builders, one front porch"*); differs from the source
  slug, has **zero** hits repo-wide (`git grep -il veranda origin/main` → empty), no `apps/veranda`,
  no `openspec/specs/template-veranda/`, no `docs/templates/veranda/`, and all four ColorLib URL
  forms (`wp/template/veranda/`, `theme/veranda/`, `theme/bootstrap/veranda/`, `theme/bb/veranda/`)
  return **404** (probed 2026-10-25)
* **Deploy target:** https://veranda.free.componentdock.com (`apps/veranda/public/CNAME`,
  `homepage` in `apps/veranda/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## App Landing Page (35)` (line 54), the section that already holds the
  product/subscription landings **and the sibling prep of this same design family** — `circles` →
  **Closeknit** — whose page is built from the same house kit (typewriter hero, counter strip,
  pricing switch, testimonial carousel). **Bump the heading count to `(36)` when the row is added** —
  the parenthetical equals the row count today (35 rows, measured 2026-10-25).

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, 2,857 `[x]`, every row resolving to an app and a spec — but
the **catalogue is not complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled
and compared with the 1,631 slugs the checklist cites, and **256 designs are on the listing that the
checklist never recorded** (42 standalone + 214 snippet variants). The census, its commands, the open
decision and both buckets are recorded in `docs/catalog-coverage.md`.

`commons` is one of the 42 standalone designs (a row of that table: `commons` — preview 200,
84,310 B). Four of the 42 have been prepped before this run — `airwise` → **Thermly**,
`backstop` → **Flowcert**, `circles` → **Closeknit**, `coldsnap` → **Stoke** — and they established
the hand-off pattern this spec follows. No spec on main names `template/commons`
(`git grep -l 'wp/template/commons/' origin/main -- openspec/specs` → empty) and no app named
`commons` exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR title claims a row —
paste this line under `## App Landing Page (35)` (and change the heading to `## App Landing Page
(36)`), then flip it to `[x]` with the same bookkeeping commit that writes the surge URL:

```
- [~] **Commons** — [colorlib](https://colorlib.com/wp/template/commons/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/commons-template.jpg) · [veranda](https://veranda.free.componentdock.com)
```

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/commons/` page (DOM authority) | 84,310 | `7faa41c1d57d0ca464066ee5f6ea47e98d105b78d2570c2a209dcd65ddd0e982` |
| `theme/commons/_astro/Base.DWrPyb6r.css` (token authority) | 63,818 | `d94fae08e9b3d62fffbf7da9bcd1a14024b8c520158252326cdaf99ce961db35` |
| `theme/commons/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (house kit) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/commons/_astro/ClientRouter…CYDbzu1r.js` (view-transition router) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| inline `<style>` (`@font-face` for Outfit, weights 300–800) | 3,912 | — |
| inline `<script>`: `applyTheme()` (localStorage + `prefers-color-scheme`) | 442 | — |
| inline `<script>`: JSON-LD `Organization` block | 207 | — |
| inline `<script>`: preloader removal on `load` | 358 | — |
| `assets/img/logo.svg` / `logo-light.svg` (168×40, three overlapping speech marks — `#4f46e5` + `#f43f5e`) | 500 / 500 | — / `deedc22c1a5c58b6d540b3a2cdc67554d8826d2d1e84f0700d087893d330ab86` |
| `favicon.svg` | 377 | `5d183df4c100257454ea9657642d6dcdbee62f744542c97b5b6c64b3075d9aa7` |
| `og-image.jpg` (referenced by `og:image`) | — | **HTTP 404** |
| `css/style.css`, `js/snippet.js`, `downloads/free/commons.zip` | — | **HTTP 404** — the theme is an Astro 7 build, so the live preview is the sole DOM/CSS reference |
| catalog screenshot `commons-template.jpg` | 309,252 | `606c7b4d494b18713fcf02c8f9ebfb2bff78af559ffcd0655b64cf84f60bd321` (real JPEG, 2400×1892 — see §Screenshot analysis) |
| `colorlib.com/wp/template/commons/` (catalog entry) | 112,573 | `64dc0f78d1ffeebc7a9fba99a9ccf90289fa6f8a8449a8b3075950e97a218515` |

The preview is an **Astro 7 build with Tailwind 4.3 output**: one stylesheet, one kit script, one
client router, no framework bundle. **Both `_astro` scripts are byte-identical to the ones the
Coldsnap (→ Stoke) and Circles (→ Closeknit) preps measured** — the same house kit renders every one
of these 2026 designs, so the *behaviour* inventory transfers between them while the markup, palette
and band order do not. Do not copy a sibling's tokens because the kit hash matches: Commons is
**indigo + rose on Outfit**, not Coldsnap's red or Circles' blue.

The catalog entry's `<meta name="description">` describes a *different* product shape (working
groups, a members directory, named leads). The **live preview is the authority** and it is the
membership/channel build described in this spec; where the two disagree, the DOM wins.

## Design tokens (measured from `_astro/Base.DWrPyb6r.css`, 63,818 B, and the live render)

### Brand ramp — `primary` (indigo; the literal values are Tailwind's indigo ramp, compiled)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#eef2ff` | **hero gradient top** (`from-primary-50`), hero badge ground, channel/eyebrow pill ground, trusted tiles |
| `primary-100` | `#e0e7ff` | eyebrow pill ground on pricing / testimonials / FAQ, testimonial avatar discs, channel icon tiles (primary group) |
| `primary-200` | `#c7d2fe` | hero badge border, the blurred top blob at `/50` |
| `primary-300` | `#a5b4fc` | dark-mode only: channel tile text, hover borders |
| `primary-400` | `#818cf8` | **`text-gradient` end stop**, dark-mode counter numbers, the five stars on every testimonial |
| `primary-500` | `#6366f1` | toggle focus ring, member-avatar gradient start, the live badge dot |
| `primary-600` | `#4f46e5` | **brand** — `.btn-primary`, header `Join the Community`, scroll-progress bar, preloader arc, event date tiles, `Most Popular` pill and the `ring-2` on that tier, check icons, `Answered`-adjacent accents, back-to-top disc, sticky mobile CTA |
| `primary-700` | `#4338ca` | **`.btn-primary:hover`**, eyebrow text on light grounds, `Most Popular` label, closing band's white button label |
| `primary-800` | `#3730a3` | **contact band gradient end** (`to-primary-800`), dark-mode blob |
| `primary-900` | `#312e81` | dark mode only, always at `/40`–`/50` alpha |
| `primary-950` | — | not emitted; dark grounds use `gray-950` |

### Accent ramp — `accent` (rose; the counter-colour that keeps the page from reading as one hue)

| token | hex | where |
| --- | --- | --- |
| `accent-50` | `#fff1f2` | **`Live now` pill ground** (discussions), `Events` pill ground, member-badge pill ground |
| `accent-100` | `#ffe4e6` | the accent channel tiles (`Show & Tell`, `Reading Group`) |
| `accent-500` | `#f43f5e` | member-avatar gradient end (`from-primary-500 to-accent-500`) |
| `accent-700` | `#be123c` | accent eyebrow text, member-badge text |

### Neutrals, status colours, grounds

| token | value | where |
| --- | --- | --- |
| white | `#fff` | header, channels/members/pricing/FAQ grounds, cards, tier 2 |
| `gray-50` | `#f9fafb` | **counter band ground**, discussions / events / testimonials grounds, `Reader` tier ground |
| `gray-100` | `#f3f4f6` | FAQ icon discs, seat chips, channel tiles in the neutral group, `Start reading` button |
| `gray-200` | `#e5e7eb` | every card border, header border, toggle track, thread avatar discs, preloader ring |
| `gray-300` | `#d1d5db` | ghost-button border, inactive carousel dots |
| `gray-400` | `#9ca3af` | muted footer text, vote arrows, drag-handle icon |
| `gray-500` | `#6b7280` | meta lines, `posts/wk` units, billed-note text |
| `gray-600` | `#4b5563` | body copy on white, nav links, seat chip text |
| `gray-700` | `#374151` | `.btn-secondary` label, billing-monthly label, footer input border |
| `gray-800` | `#1f2937` | footer social tiles, footer newsletter input ground, footer borders |
| `gray-900` | `#111827` | **footer ground**, `h1`/`h2`/`h3` on light grounds, `.nav-active` |
| `gray-950` | `#030712` | dark mode only |
| `emerald-50` / `emerald-700` | `oklch(97.9% .021 166.113)` / `oklch(50.8% .118 165.612)` | **`Answered`** chip (tick + label) |
| `green-100` / `green-700` | `oklch(96.2% .044 156.743)` / `oklch(52.7% .154 150.069)` | **`Save 20%`** chip beside the yearly label |

### Typography

One face for the whole page: **Outfit** (Google Fonts), loaded 300/400/500/600/700/800 from the
preview's own `/cf-fonts/v/outfit/5.2.8/…` cache inside a 3,912-byte inline `<style>` — which is why
grepping the stylesheet for `@font-face` finds nothing. `html` sets
`font-family: Outfit, system-ui, sans-serif`.

| role | size (measured tokens) | notes |
| --- | --- | --- |
| `h1` | `text-4xl` 2.25 rem (36 px) → `sm:text-5xl` 3 rem (48) → `lg:text-6xl` 3.75 rem (60), `font-bold`, `tracking-tight`, `leading:1` at the two large steps | two lines by hand: a `<br>` after `starts`, then the **`text-gradient`** span |
| `h2` | `text-3xl` 1.875 rem (30) → `sm:text-4xl` 2.25 rem (36), `font-bold`, `tracking-tight` | every band heading; closing band adds `lg:text-5xl` (48) |
| section lede | `text-gray-600` (16 px) in channels/members/events; `text-lg` (18 px) in pricing/testimonials/FAQ; hero `text-lg sm:text-xl` (18→20) | the reference is inconsistent on purpose — keep the split |
| card `h3` | 16 px `font-semibold` (`text-base`) / 20 px on pricing tiers (`text-xl`) | channels + discussions + events use 16; tiers 20 |
| body / meta | 16 / 14 / 12 px (`text-base` / `text-sm` / `text-xs`) | `tabular-nums` on every number (counters, votes, member counts, prices) |
| eyebrow — channels/members/events | `text-xs` 12 px `font-semibold uppercase tracking-wider`, pill `rounded-full px-3 py-1` | ground `primary-50`+`primary-700` or `accent-50`+`accent-700` |
| eyebrow — pricing/testimonials/FAQ | `text-sm` 14 px `font-medium`, pill `rounded-full px-3 py-1` | slightly looser than the first group |
| price | `text-5xl` 3 rem `font-bold`, baseline-aligned with a 16 px `/month` | tier cards |

Load it with a `<link>` in `index.html`:
`https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap` (the
exact family/weight list the reference requests; the URL returns 200).

### Buttons, radii, shadows, custom utilities

| token | value | where |
| --- | --- | --- |
| `.btn` | `inline-flex`, centre, `gap:8px`, `border-radius:.5rem`, `padding:10px 20px`, `font-size:14px`, `font-weight:500`, `transition:all` | `See all discussions`, `View the full calendar` |
| `.btn-primary` | `background:#4f46e5`, white, `shadow-lg` with a brand tint (`#4f46e540`); hover `#4338ca` | calendar CTA |
| `.btn-secondary` | white ground, `1px` `#d1d5db`, label `#374151` | `See all discussions` |
| hero CTA pair | `rounded-lg px-6 py-3` (24/12 px), `text-base` (16 px) `font-medium`, solid `#4f46e5` with `shadow-lg shadow-primary-600/25` + white ghost | `Join the Community`, `Browse Discussions` |
| closing CTA pair | `rounded-lg px-8 py-4` (32/16 px), 16 px medium; solid **white** with `text-primary-700`, ghost `border-2 border-white/30` | contact band |
| pricing CTA | full width `rounded-lg py-3` 14 px medium: tier 1 `bg-gray-200 text-gray-900`, tier 2 `bg-primary-600` white, tier 3 `bg-primary-100 text-primary-700` | three labels: `Start reading`, `Join the Community`, `Become a patron` |
| radii | `lg` .5 rem (8) · `xl` .75 rem (12) · `2xl` 1 rem (16) · `full` | `lg` = buttons/inputs, `xl` = event date tile + channel icon, `2xl` = every card / tier / thread list / carousel slide / hero figure, `full` = pills, avatars, dots, toggle |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | pricing tiers, testimonial cards |
| `shadow-lg` / `xl` / `2xl` | stock Tailwind (`0 10px 15px -3px …`, `0 20px 25px -5px …`, `0 25px 50px -12px #00000040`) | header past 50 px, channel card hover, hero figure (`shadow-2xl` + `ring-1 ring-gray-200`) |
| `.text-gradient` | `linear-gradient(to right in oklab, #4f46e5, #818cf8)`, `background-clip:text`, `color:transparent` | the rotating half of the `h1` only |
| `.animate-hero-float` / `-reverse` | `8s` / `10s ease-in-out infinite` of `hero-float` (`0/33/66%` → `translate(0,0) scale(1)` / `translate(30px,-20px) scale(1.05)` / `translate(-20px,15px) scale(.95)`) | the two hero blobs |
| `.nav-active` | `color:#111827; font-weight:600` (white in dark) | scroll-spy on the header links |

### Rhythm and containers

* `py-20` (80 px) → `sm:py-28` (112 px) on `#channels`, `#discussions`, `#members`, `#events`;
  `py-20` → `lg:py-28` on `#pricing`, `#testimonials`, `#faq`, `#contact`. Same 112 px at desktop,
  reached through different breakpoints — copy the classes, not the resolved number.
* Counter band: `py-16` (64) → `lg:py-20` (80), `border-y border-gray-200 bg-gray-50`.
* Header: `h-16` (64) → `lg:h-20` (80), sticky, `bg-white/80` + `backdrop-blur-lg`.
* Containers: `container mx-auto px-4 lg:px-8` for hero / pricing / testimonials / FAQ / contact
  (max-width 64 rem at `lg`, 80 rem at `xl`); `max-w-7xl` (80 rem) for channels and members;
  `max-w-6xl` (72) for events; `max-w-5xl` (64) for the discussions list; `max-w-2xl`/`3xl`/`4xl`
  for the centred heading blocks (42/48/56 rem).

## Reference document order (chrome, header, hero, seven bands, closing band, footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white (`dark:gray-950`) | fixed `z-[100]` overlay, 40 px `animate-spin` ring `border-4 border-gray-200 border-t-primary-600`; removed 300 ms after `load` |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio |
| — | `header[data-header]` | `bg-white/80` + `backdrop-blur-lg`, `border-b border-gray-200` | sticky `z-50`, 64/80 px: 168×40 wordmark · **nine** nav links at `lg` (`About`, `Channels`, `Discussions`, `Events`, `Members`, `Membership`, `Guidelines`, `Blog`, `Contact`) · moon toggle · solid `Join the Community` (`sm`+) · hamburger (`lg:hidden`) |
| — | `[data-mobile-menu]` | white (`dark:gray-950`) | `hidden lg:hidden` panel: the same nine links as `block py-3` rows + a full-width `Join the Community` |
| 1 | (hero, no id) | **`bg-gradient-to-b from-primary-50 to-white`** `#eef2ff → #fff` | 500 px `primary-200/50` blob top-centre (`data-parallax="0.15"`) + 400 px `primary-100/40` blob top-right (`data-parallax="-0.1"`), both `blur-3xl`; badge pill (pulsing dot + `14,000 builders, one front porch`); `h1` `Every good idea starts` + `<br>` + gradient span typed through three phrases; lede; `Join the Community` + `Browse Discussions` + circular play `Watch Demo`; 4-stat row over a `border-t border-gray-200 pt-10`; **hero figure** (`rounded-2xl shadow-2xl ring-1 ring-gray-200`, the only photograph on the page) |
| 2 | (counter band, no id) | `gray-50`, `border-y` | `grid-cols-2 sm:grid-cols-4`: `14,200 Active members`, `92% Questions answered`, `< 3h Median first reply`, `240 Events last year` — big `text-4xl lg:text-5xl primary-600` numbers with `text-sm` labels |
| 3 | `#channels` | white | centred eyebrow · `h2 Find the room where your problem is normal` · lede; **six** cards (`sm:grid-cols-2 lg:grid-cols-3`), each `rounded-2xl border p-6` with an 44 px `rounded-xl` glyph tile (`◇`, `◈`, `?`, `◆`, `❋`, `◉`) whose colour alternates primary / accent / neutral, an `h3` name, a blurb, and a `dl` row (`4,120 members` · `180 posts/wk`) over a `border-t` |
| 4 | `#discussions` | `gray-50`, `max-w-5xl` | left-aligned head: `Live now` accent pill · `h2 What the community is working through today` · lede, and a `btn-secondary` `See all discussions` bottom-right; then **five** rows inside one `rounded-2xl border` list, each `flex gap-4 p-5 sm:p-6`: vote column (grey triangle + `tabular-nums` count), channel tag pill, optional `Answered` emerald chip, `h3` title, then avatar initials + name · replies · relative time |
| 5 | `#members` | white | centred eyebrow `Member spotlight` · `h2 The people who make it worth showing up` · lede; **three** `<figure>` cards (`md:grid-cols-3`) with a 48 px `from-primary-500 to-accent-500` initial disc, name + role, a blockquote, and a `border-t` footer with `312 helpful answers` and a badge pill |
| 6 | `#events` | `gray-50`, `max-w-6xl` | centred eyebrow `Events` · `h2 Show up live, or catch the recording` · lede; **four** cards (`sm:grid-cols-2`) with a 64 px `rounded-xl bg-primary-600` date tile (day over `Mar`/`Apr`), a `text-xs uppercase` event type, title, `18:00 GMT · 90 min · hosted by …`, and a seat chip; centred `btn-primary` `View the full calendar` |
| 7 | `#pricing` | white | centred eyebrow `Membership` · `h2 Free to read, paid to belong` · lede · **billing switch** (`Monthly` — track — `Yearly` + green `Save 20%`); **three** tiers (`lg:grid-cols-3`): `Reader` `$0` (gray ground, two features struck through), `Member` `$9` (white, `ring-2 ring-primary-600`, `Most Popular` pill straddling the top edge), `Patron` `$29` (`bg-primary-50`); each 5 features with tick/cross icons and a full-width CTA |
| 8 | `#testimonials` | `gray-50` | centred eyebrow `Why people stay` · `h2 Small enough to be known, big enough to be useful` · lede; **3-slide carousel** (`[data-carousel]`) of white `rounded-2xl p-8 shadow-soft` cards: five `primary-400` stars, a `text-lg font-medium` quote, a 48 px `bg-primary-100 text-primary-600` initial disc + name + role; round arrows at `-left-4`/`-right-4` (hidden below `lg`) and a dot row |
| 9 | `#faq` | white | centred eyebrow `Questions` · `h2 Before you join` · lede; `divide-y divide-gray-200` list of **five** rows: full-width `button` + 16 px semibold question + a 32 px `rounded-full bg-gray-100` plus-icon disc that rotates 45° when open, and a `max-height:0` panel |
| 10 | `#contact` | **`bg-gradient-to-br from-primary-600 to-primary-800`** `#4f46e5 → #3730a3` | two `bg-white/10 blur-3xl` discs and a 40 px **radial dot grid** at `opacity-10`; centred `h2 The room is already talking` (36→48 px), `text-primary-100` lede, then a **white** solid `Join the Community` + a `border-2 border-white/30` ghost `Browse discussions first` |
| — | `footer` | `bg-gray-900` `#111827`, `text-gray-300`, `pt-16 lg:pt-24` | 12-col grid: brand block (`logo-light.svg` 40 px, blurb, three `rounded-lg bg-gray-800 p-2.5` social tiles, address / phone / mail) · three link columns in a `sm:grid-cols-3` block — `Spaces` (`Hot Desk`, `Dedicated Desk`, `Private Office`, `Meeting Rooms`), `Company` (`About`, `Blog`), `Support` (`Contact`, `Terms`) · `Stay Updated` with an email field + `Subscribe`; bottom bar `border-t border-gray-800`: `© 2026 …` + `Privacy Policy` / `Terms of Service` / `Style Guide` |
| — | `#mobile-cta` | white (`dark:gray-900`), `border-t`, `shadow-lg` | `lg:hidden` fixed bottom bar with two flex-1 buttons — `Call Now` (`tel:5556789012`, gray) and `Book a Tour` (→ `#contact`, primary) |
| — | `#cookie-consent` | white (`dark:gray-900`), `border-t`, `shadow-lg` | fixed bottom `role="dialog"`, slides up after 1.5 s, `Decline` (outline) + `Accept All` (primary) |
| — | `#back-to-top` | `primary-600` + `shadow-primary-600/25` | 48 px disc, `bottom-6 right-6`, appears past 300 px |

## Behaviour the recreation must reproduce

All twelve handlers live in the **house kit** (`Base…BLoalVWc.js`, 16,233 B, the same hash as Stoke's
and Closeknit's); only `applyTheme`, the JSON-LD block and the preloader removal are page-local.
Items 1–4 are the ones this design leans on hardest.

1. **Typewriter** (`[data-typewriter]`) — the span's initial text is phrase 0 and its attribute is a
   JSON array of the rest (`["as a half-formed question","with someone else's reply"]`); every **3 s**
   the text fades out (`opacity 0`, `translateY(10px)`, 300 ms), swaps, fades back in, and loops. The
   reference never respects `prefers-reduced-motion` here — the recreation does (Deviation 9).
2. **Counters** (`[data-counter]`) — an `IntersectionObserver` at `threshold .5` fires once, then a
   **2,000 ms** cubic ease-out (`1-(1-p)³`) writes the number into the span, honouring `%`, `K`, `M`,
   `$` and one decimal; on the final frame it writes the **literal attribute value**, which is why
   `< 3h` ends up as `&lt; 3h` rather than `3`.
3. **Video modal** (`[data-video-modal]`) — click injects a `fixed inset-0 z-[100] bg-black/80`
   overlay with an `aspect-video` `iframe` (`src + ?autoplay=1`), a close button at `-top-12`, closes
   on backdrop click and `Escape`; the button itself keeps its 48 px play disc.
4. **Parallax blobs** (`[data-parallax]`) — `translateY(scrollY × factor)` with `0.15` and `-0.1`,
   skipped while the element is more than 200 px below the viewport; it composes with the CSS float
   animation, so the blobs both drift and follow the scroll.
5. **Billing switch** (`[data-billing-toggle]`, `role="switch"`) — flips `aria-checked`, moves the
   knob `translateX(28px)`, recolours the track `gray-200 → primary-600`, swaps the two label
   colours, rewrites each `[data-price-monthly]`/`[data-price-yearly]` price and toggles
   `[data-show-monthly]`/`[data-show-yearly]` notes.
6. **FAQ** (`[data-faq-toggle]`) — **exclusive**: opening one closes the rest; `max-height` →
   `scrollHeight` + `opacity`, the plus icon rotates 45°.
7. **Carousel** (`[data-carousel]`) — per-view **3 ≥1024 px, 2 ≥640 px, 1 below**; each slide's width
   is set to `track.parentElement.offsetWidth / perView` and the track translated by `index × width`;
   dots are `h-2.5 w-8 bg-primary-600` when active and `w-2.5 bg-gray-300` otherwise; arrows only
   render when there is more than one page; **autoplay every 5 s**, paused on hover.
8. **Reveal on scroll** (`[data-animate]`, 34 elements) — `fade-in-up`, skipped entirely under
   `prefers-reduced-motion: reduce`; elements below 80 % of the viewport start at `opacity:0`,
   `translateY(20px)`, `.6s ease-out` with `data-delay` as the transition delay; revealed once.
9. **Header shadow** past `scrollY > 50`; mobile disclosure with `aria-expanded` + glyph swap
   (hamburger ↔ close) and `hidden` on the panel.
10. **Dark-mode toggle** — `documentElement.classList.toggle('dark')` + `localStorage.theme`; boots
    from `applyTheme()` (stored value, else `prefers-color-scheme`). Dropped in the recreation
    (Deviation 2).
11. **Scroll spy** — each `data-nav-link` names a band id (`channels`, `discussions`, `events`,
    `members`); an observer at `rootMargin: -20% 0 -70% 0` sets `.nav-active`.
12. **Chrome**: scroll-progress width, back-to-top past 300 px (`opacity` + `translateY(16px)`),
    preloader removed on `load`, cookie strip 1.5 s after load storing `cookie-consent`.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **68 anchors**:

| count | href | kind |
| ---: | --- | --- |
| 8 | `/theme/commons/#channels` | cross-page fragment (the six channel cards' `after:absolute` overlays also point here) |
| 7 | `/theme/commons/#discussions` | cross-page fragment |
| 6 | `/theme/commons/#events` | cross-page fragment |
| 6 | `/theme/commons/pricing` | live route → `200` (39,913 B) |
| 6 | `/theme/commons/contact` | live route → `200` (28,995 B) |
| 4 | `/theme/commons/#spaces` | **broken fragment** — no `id="spaces"` exists anywhere on the page |
| 3 | `/theme/commons/about` | live route → `200` (29,994 B) |
| 3 | `/theme/commons/blog` | live route → `200` (36,180 B) |
| 3 | `#` | **dead** — the three footer social tiles |
| 2 | `/theme/commons/` | the wordmark (header + footer) |
| 2 | `/theme/commons/#members` | cross-page fragment |
| 2 | `/theme/commons/guidelines` | live route → `200` (29,615 B) |
| 2 | `#discussions` | in-page fragment → exists |
| 2 | `/theme/commons/#contact` | cross-page fragment |
| 2 | `/theme/commons/terms` | live route → `200` (29,719 B) |
| 1 | `#main-content` | skip link → exists |
| 1 | `#channels` | in-page fragment → exists |
| 1 | `/theme/commons/privacy` | live route → `200` (30,980 B) |
| 1 | `/theme/commons/elements` | live route → `200` (49,534 B) — the style-guide page |
| 1 | `tel:(555) 214-0980` | **malformed** `tel:` (spaces, parentheses) |
| 1 | `tel:5556789012` | the sticky mobile CTA's `Call Now` — a **different number** from the footer's |
| 1 | `mailto:hello@commons.community` | `.community` is a fictional TLD-safe placeholder |
| 1 | `https://cdnjs.cloudflare.com` | a stray `<link rel="preconnect">` |
| 1 | `/theme/commons/favicon.svg` | icon |
| 1 | `/theme/commons/_astro/Base.DWrPyb6r.css` | stylesheet |

**Inner-page inventory (all live, all `200`):**

| page | bytes | `<title>` |
| --- | ---: | --- |
| `about/` | 29,994 | About Commons \| Commons |
| `pricing/` | 39,913 | Membership \| Commons |
| `guidelines/` | 29,615 | Community Guidelines \| Commons |
| `blog/` | 36,180 | Blog \| Commons |
| `contact/` | 28,995 | Contact Commons \| Commons |
| `privacy/` | 30,980 | Privacy Policy \| Commons |
| `terms/` | 29,719 | Terms of Service \| Commons |
| `elements/` | 49,534 | Elements \| Commons |

The multi-page shell is the authoritative reference for what the landing page folds away — the
`/pricing/` page in particular carries the full tier comparison. **The recreation does not rebuild
those pages** — see Deviation 1 for the mapping each route gets.

## Class census (no phantom-class delta)

The page uses **391 distinct class tokens**. 390 of them compile to a rule in
`Base.DWrPyb6r.css`; the only one that does not is **`group`**, which is a Tailwind marker with no
declarations by design. There is therefore no "class with no rule" to floor into this spec.

⚠️ Two traps when re-running this census:

1. Utilities with variants are escaped in the sheet (`sm\:grid-cols-2`, `bg-primary-600\/25`,
   `lg\:col-span-3`) — grep for the escaped form, not the raw token.
2. `dark:` utilities compile as `:is(.dark *)` suffixes, so a `.token{` search misses them; several
   primary stops (`200`, `300`, `800`, `900`) exist **only** in dark-mode rules — do not conclude the
   stop is unused in the design.

## Screenshot analysis (2400 × 1892, macOS-Safari window frame)

The capture is a light-mode desktop view framed in Safari chrome (traffic lights, address bar), so
the top ~90 px and the outer ~60 px are browser, not design. Inside it, top to bottom:

* the **white header**: the indigo-and-rose speech-mark glyph with the `Commons` wordmark, the nine
  nav labels in a centred row, a moon glyph, and the solid indigo `Join the Community`;
* the **lavender-to-white hero**: the small pill with a dot and `14,000 builders, one front porch`,
  a 60 px `h1` whose first line is near-black (`Every good idea starts`) and whose second line is
  the **indigo gradient** (`as a conversation`), the two-line lede, then the three controls — solid
  indigo `Join the Community →`, white outline `Browse Discussions`, and a 48 px indigo circle with
  a play triangle beside `Watch Demo`;
* the **four-stat row** divided by a hairline: `14.2k / Members`, `38 / Channels`,
  `1.4k / Posts a week`, `92% / Questions answered`;
* the **hero figure**: a 16 px-radius photograph of four people around a laptop at a wooden table,
  with a soft drop shadow and a 1 px ring — the only photography above the fold.

Everything below the hero figure — counter band, channels, discussions, members, events, pricing,
testimonials, FAQ, closing band, footer — is **not in the screenshot**: read those from the DOM and
the sheet (which is what §Reference document order and the design notes do). The screenshot is
useful for three things only: the header composition, the hero's exact vertical rhythm, and the fact
that the page ships **light** (the dark mode is a toggle, not the default).

## Requirements

### Requirement 1: Page chrome (preloader, skip link, scroll progress, back to top, cookie strip, sticky mobile CTA)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar under the
sticky header, a 48 px back-to-top disc that appears past 300 px, a cookie strip that slides up 1.5 s
after load and dismisses into component state, and a two-button sticky action bar that is visible
only below `lg`. It SHALL NOT leave the preloader overlay at `opacity: 1` once the document is ready.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the `load` event fires (or `readyState === "complete"`)
- **THEN** the white overlay with the 40 px indigo-topped spinner is gone within 300 ms
- **AND** the page is fully readable with JavaScript disabled, because the overlay is never rendered
  in the recreation

#### Scenario: Visitor scrolls

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls past 300 px
- **THEN** the progress bar's width equals `scrollY / (scrollHeight - innerHeight)` as a percentage
- **AND** the back-to-top disc fades in (`opacity 1`, `translateY(0)`) and returns the page to the top
- **AND** below 300 px it is `opacity: 0` with `pointer-events: none`

#### Scenario: Visitor answers the cookie strip

- **GIVEN** the strip has slid up
- **WHEN** either `Decline` or `Accept All` is activated
- **THEN** the strip slides out and is removed, and the choice is held in component state (no
  invented storage key — Deviation 3)
- **AND** the strip is a `role="dialog"` with an accessible name

#### Scenario: Visitor on a phone with the cookie strip up

- **GIVEN** the viewport is below `lg` and the cookie strip is visible
- **WHEN** the page is inspected
- **THEN** the sticky action bar is not painted behind or under the strip (the reference stacks two
  fixed bottom bars and clips one — Deviation 10), and once the strip is dismissed the bar is
  reachable with the footer content above it

### Requirement 2: Header and mobile disclosure

The app SHALL render a sticky translucent header with **nine** navigation labels at `lg`, a theme
control that the recreation drops (Deviation 2), and a disclosure menu below `lg`.

#### Scenario: Visitor inspects the header at desktop width

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** the header is inspected
- **THEN** it reads the wordmark, then `About`, `Channels`, `Discussions`, `Events`, `Members`,
  `Membership`, `Guidelines`, `Blog`, `Contact`, and the solid `Join the Community`
- **AND** it is `position: sticky`, `top: 0`, `z-50`, `bg-white/80` with `backdrop-blur-lg`, 64 px
  tall rising to 80 px at `lg`, and gains `shadow-lg` only once `scrollY > 50`

#### Scenario: Visitor opens the mobile menu

- **GIVEN** the viewport is below `lg`
- **WHEN** the visitor activates the menu control
- **THEN** the control reports `aria-expanded="true"`, its glyph swaps to a close icon, and the panel
  lists the same nine links as full-width rows plus a `Join the Community` button
- **AND** activating it again closes the panel

#### Scenario: Visitor scrolls through the page

- **GIVEN** the header is rendered at a desktop width
- **WHEN** each of `Channels`, `Discussions`, `Members` and `Events` passes the upper third of the
  viewport
- **THEN** the matching nav link carries `.nav-active` (`#111827`, `font-weight: 600`) — or the
  inverse in the recreated dark treatment if one is added
- **AND** `About`, `Membership`, `Guidelines`, `Blog` and `Contact` never take the active style,
  because their targets are not on this page

### Requirement 3: Hero

The app SHALL render the gradient hero with the pulsing badge, the two-line `h1` whose second line is
gradient-filled and typed, three controls, the four-stat row and the single photograph, in the
reference order.

#### Scenario: Visitor lands on the page

- **GIVEN** the page has loaded
- **WHEN** the hero is in view
- **THEN** the ground runs from `#eef2ff` at the top to white, with two blurred blobs that drift
  (`8s` and `10s` float animations) and follow the scroll (`0.15` and `-0.1` factors)
- **AND** the badge pill reads `14,000 builders, one front porch` with a pulsing `primary-500` dot
- **AND** the only `h1` is `Every good idea starts` in `gray-900` followed by a line break and a
  `text-gradient` span, and no text below it competes for the same weight

#### Scenario: Visitor waits on the hero

- **GIVEN** the hero is visible
- **WHEN** 3 seconds pass
- **THEN** the gradient span swaps to the next of the three phrases (`as a conversation`,
  `as a half-formed question`, `with someone else's reply`) with a 300 ms fade-and-rise, and keeps
  cycling
- **AND** the first phrase is the one present in the markup, so a visitor with JavaScript disabled
  reads a complete sentence
- **AND** under `prefers-reduced-motion: reduce` the phrase stays fixed (Deviation 9)

#### Scenario: Visitor uses the hero controls

- **GIVEN** the hero is in view
- **WHEN** the three controls are inspected
- **THEN** the solid control reads `Join the Community` with a right arrow and targets the pricing
  band, the ghost control reads `Browse Discussions` and targets the discussions band
- **AND** the third control is a 48 px circular play disc labelled `Watch Demo` that opens the video
  modal (Requirement 4)

#### Scenario: Visitor reads the hero proof row

- **GIVEN** the hero is in view
- **WHEN** the stat row is inspected
- **THEN** it reads `14.2k Members`, `38 Channels`, `1.4k Posts a week`, `92% Questions answered` in
  `text-3xl lg:text-4xl gray-900` with `text-sm gray-600` labels, in a `grid-cols-2 sm:grid-cols-4`
  over a `border-t border-gray-200 pt-10`
- **AND** the photograph below it is `rounded-2xl` with `shadow-2xl ring-1 ring-gray-200`, uses a
  seeded placeholder image (Deviation 7), and carries descriptive alt text

### Requirement 4: Video modal

The app SHALL open an accessible modal from the `Watch Demo` control and close it on the close
button, a backdrop click or `Escape`.

#### Scenario: Visitor opens and closes the demo

- **GIVEN** the hero is in view
- **WHEN** `Watch Demo` is activated
- **THEN** a `fixed inset-0` overlay at `bg-black/80` with `backdrop-blur` fades in containing a
  16:9 video frame and a close control above its top-right corner
- **AND** `Escape`, the close control, and a backdrop click each dismiss it, returning focus to the
  `Watch Demo` button
- **AND** the modal points at the recreation's own demo source, never at the reference's placeholder
  embed id (Deviation 8), and no third-party request is made before the modal opens

### Requirement 5: Counter band

The app SHALL render four counters that animate once when half-visible and land on the exact literal
values from the reference, including the one value that is not a number.

#### Scenario: Visitor scrolls the counter band into view

- **GIVEN** the counter band is below the fold
- **WHEN** it reaches 50 % visibility
- **THEN** each counter animates from `0` over 2,000 ms with a cubic ease-out and settles on
  `14,200`, `92%`, `< 3h` and `240`
- **AND** `92%` keeps its percent sign while counting and `< 3h` is written as its literal string on
  the final frame (the reference's own odd behaviour — the `3` is what animates)
- **AND** each number is `text-4xl lg:text-5xl font-bold primary-600` with a `text-sm font-medium`
  `gray-600` label beneath and `tabular-nums` so the row does not jitter

#### Scenario: A returning visitor scrolls back up

- **GIVEN** the counters have finished
- **WHEN** the band leaves and re-enters the viewport
- **THEN** the animation does not restart (the observer disconnects after the first intersection)
- **AND** the values remain readable with JavaScript disabled, because the markup ships `0` inside a
  labelled element whose accessible name carries the final value

### Requirement 6: Channels

The app SHALL render six channel cards with the reference's glyph-and-colour rhythm and its two
numbers per card.

#### Scenario: Visitor scans the channels

- **GIVEN** the channels band is in view
- **WHEN** the cards are inspected
- **THEN** they appear in this order — `Design Critique` (`◇`, primary), `Show & Tell` (`◈`,
  accent), `Ask the Room` (`?`, primary), `Hiring & Gigs` (`◆`, neutral), `Reading Group` (`❋`,
  accent), `Off Topic` (`◉`, neutral) — in `gap-5 sm:grid-cols-2 lg:grid-cols-3`
- **AND** each card is `rounded-2xl border border-gray-200 bg-white p-6` and lifts to
  `hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg`
- **AND** each carries a blurb and a `border-t` footer reading `<members> members` and
  `<posts> posts/wk`, both `tabular-nums` with the unit in `gray-500`
- **AND** the eyebrow pill reads `Channels` and the heading reads `Find the room where your problem
  is normal`

### Requirement 7: Discussions

The app SHALL render five thread rows in one bordered list, each with a vote count, a channel tag, an
optional answered mark, a title, an author and a reply/time meta line.

#### Scenario: Visitor reads the thread list

- **GIVEN** the discussions band is in view
- **WHEN** the list is inspected
- **THEN** the rows are, in order: `128` · `Ask the Room` · Answered · `How do you price a redesign
  when the client has no brief?` · NF Nadia Ferreira · 34 replies · 2 hours ago; `214` ·
  `Show & Tell` · `Six months of building in public — what actually moved the needle` · TL Tomas
  Lindqvist · 61 replies · 5 hours ago; `76` · `Design Critique` · Answered · `Critique wanted:
  onboarding flow for a two-sided marketplace` · PR Priya Raman · 18 replies · Yesterday; `143` ·
  `Off Topic` · `Is anyone else finding async standups worse than the meeting?` · DW Dan Whitfield ·
  92 replies · Yesterday; `88` · `Hiring & Gigs` · Answered · `Contract template for a three-month
  retainer — what am I missing?` · Amara Osei · 27 replies · 2 days ago
- **AND** the three rows with `Answered` carry the emerald tick chip and the other two do not
- **AND** every row is `p-5 sm:p-6` inside one `rounded-2xl border` list, separated by
  `border-t border-gray-100` on rows 2–5, and the vote column is `aria-hidden` decoration whose
  number is also stated in the row's accessible name
- **AND** the band's eyebrow is the accent pill `Live now`, the heading is `What the community is
  working through today`, and the `See all discussions` control is a `.btn-secondary`

### Requirement 8: Member spotlight

The app SHALL render three member figures with gradient initial discs, verbatim-scale quotes, an
answer count and a role badge where the reference has one.

#### Scenario: Visitor reads the spotlight

- **GIVEN** the members band is in view
- **WHEN** the three figures are inspected
- **THEN** they are `Priya Raman` (Product designer, Bangalore — 312 helpful answers, `Top
  contributor`), `Tomas Lindqvist` (Indie founder, Malmö — 198 helpful answers, `Channel
  moderator`), `Amara Osei` (Freelance developer, Accra — 147 helpful answers, no badge)
- **AND** each is a `<figure>` with a 48 px `rounded-full bg-gradient-to-br from-primary-500
  to-accent-500` initials disc, a `<blockquote>` at `text-sm leading-relaxed`, and a `border-t`
  footer with the count in `tabular-nums` and the badge in an `accent-50`/`accent-700` pill
- **AND** the band is `md:grid-cols-3` and the eyebrow reads `Member spotlight`

### Requirement 9: Events

The app SHALL render four dated event cards with a date tile, an event type, a time-and-host line and
a seat chip.

#### Scenario: Visitor checks the calendar

- **GIVEN** the events band is in view
- **WHEN** the four cards are inspected
- **THEN** they read `12 Mar` · `Critique session` · `Portfolio teardown, live and unedited` ·
  `18:00 GMT · 90 min · hosted by Design Critique moderators` · `12 of 40 seats left`; `19 Mar` ·
  `Member talk` · `How we priced ourselves out of a bad market` · `16:00 GMT · 45 min · hosted by
  Tomas Lindqvist` · `Open to all members`; `26 Mar` · `Reading group` · `Reading group — Working in
  Public, chapters 4–6` · `19:00 GMT · 60 min · hosted by Reading Group channel` · `8 of 25 seats
  left`; `02 Apr` · `Open session` · `Office hours with the moderator team` · `15:00 GMT · 60 min ·
  hosted by [host]` · `Drop in any time`
- **AND** each date tile is a 64 px `rounded-xl bg-primary-600 text-white` square with the day in
  `text-xl font-bold tabular-nums` over a `text-[10px] uppercase tracking-wider` month
- **AND** the seat chip is `rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600`
- **AND** the band ends with a centred `.btn-primary` `View the full calendar` and the eyebrow reads
  `Events` in the accent pill

### Requirement 10: Pricing and the billing switch

The app SHALL render three tiers with a `role="switch"` monthly/yearly control that rewrites every
price and every billing note without a reload.

#### Scenario: Visitor inspects the default (monthly) state

- **GIVEN** the pricing band is in view
- **WHEN** it is inspected before any interaction
- **THEN** `Reader` reads `$0` `/month` with `Billed monthly`, a `gray-50` ground and a
  `bg-gray-200` `Start reading` button, and two of its five features (`Post and reply in channels`,
  `Member directory`) are struck through with cross icons
- **AND** `Member` reads `$9` `/month` with `Billed monthly`, a white ground, `ring-2 ring-primary-600`
  and the `Most Popular` pill straddling its top edge, all five features ticked, and a
  `bg-primary-600` `Join the Community` button
- **AND** `Patron` reads `$29` `/month` with `Billed monthly`, a `bg-primary-50` ground and a
  `bg-primary-100 text-primary-700` `Become a patron` button
- **AND** the switch reports `aria-checked="false"` with the knob at the left and the yearly label
  carrying the green `Save 20%` chip

#### Scenario: Visitor switches to yearly

- **GIVEN** the switch is off
- **WHEN** the visitor activates it
- **THEN** it reports `aria-checked="true"`, the track turns `#4f46e5`, the knob moves 28 px right and
  the two label colours swap
- **AND** the prices become `$0`, `$90` and `$290` and the notes become `Billed annually ($0/year)`,
  `Billed annually ($90/year)` and `Billed annually ($290/year)` — **the reference prints `$1080` and
  `$3480`, a 10× arithmetic error (Deviation 5); the recreation states the real annual totals, which
  are the same two numbers the switch itself computes**
- **AND** the `/month` suffix stays as the reference renders it (the yearly figure is a whole-year
  total displayed with the monthly suffix); if the implementer prefers to swap the suffix, that is an
  accepted deviation and must be noted in the PR

### Requirement 11: Testimonials carousel

The app SHALL render a three-slide carousel with per-view 3/2/1, dot navigation, arrows where a page
exists and a 5-second autoplay that respects reduced motion and hover.

#### Scenario: Visitor scrolls the testimonials

- **GIVEN** the testimonials band is in view
- **WHEN** the carousel is inspected
- **THEN** each slide is a `rounded-2xl bg-white p-8 shadow-soft` card with five `primary-400` stars,
  a `text-lg font-medium gray-900` quote, and a 48 px `bg-primary-100 text-primary-600` initial disc
  beside a name and a role
- **AND** the three quotes are Dan Whitfield (Engineering lead, Northgate), Nadia Ferreira
  (Independent consultant) and Marcus Hale (Founder, Hale & Co)
- **AND** at ≥1024 px three cards are visible and the arrows are hidden (nothing to page to); at
  640–1023 px two are visible, at <640 px one, and in both narrower cases the arrows appear and the
  dots track the page

#### Scenario: Visitor leaves the carousel alone

- **GIVEN** the carousel is visible
- **WHEN** 5 seconds pass
- **THEN** it advances one page, wrapping to the start after the last
- **AND** hovering pauses the advance and leaving resumes it
- **AND** under `prefers-reduced-motion: reduce` autoplay does not start

### Requirement 12: FAQ accordion (exclusive)

The app SHALL render five exclusive rows whose panels animate open and close and whose icon rotates
45° while open.

#### Scenario: Visitor opens a question

- **GIVEN** the FAQ band is in view
- **WHEN** `Is the community public or private?` is activated
- **THEN** its panel expands to its content height and fades in, the button reports
  `aria-expanded="true"` and controls a labelled region, and the plus icon rotates 45°
- **AND** activating a second question closes the first, so exactly one is open at a time
- **AND** the five questions are, in order: `Is the community public or private?`, `How is this
  different from a Slack or Discord group?`, `What does moderation actually look like?`, `Can I
  cancel at any time?`, `Do you sell ads or member data?` — each with the reference's answer text
  paraphrased no further than necessary

#### Scenario: Visitor uses the keyboard

- **GIVEN** the FAQ is in view
- **WHEN** the visitor tabs to a question and presses `Enter` or `Space`
- **THEN** the panel toggles exactly as a click does and focus stays on the question button

### Requirement 13: Closing band

The app SHALL render the full-bleed indigo gradient band with its dot grid, a white solid control and
a 2 px white/30 outline control.

#### Scenario: Visitor reaches the end of the page

- **GIVEN** the closing band is in view
- **WHEN** it is inspected
- **THEN** its ground runs `#4f46e5` → `#3730a3` on the diagonal, with two `bg-white/10 blur-3xl`
  discs and a 40 px radial dot pattern at `opacity-10` behind the content
- **AND** the `h2` reads `The room is already talking` in white at 36 px → 48 px at `lg`, the lede
  reads `Read anything you like for free. When you want to join in, membership is nine dollars a
  month.` in `primary-100`
- **AND** the solid control is white with `text-primary-700` and targets the pricing band, and the
  outline control is `border-2 border-white/30` and targets the discussions band

### Requirement 14: Footer

The app SHALL render the four-block `gray-900` footer in the reference order and SHALL add the house
Component Dock credit.

#### Scenario: Visitor reads the footer

- **GIVEN** the footer is in view
- **WHEN** it is inspected
- **THEN** the columns are the brand block (light wordmark, blurb, three social tiles, `210 Union
  Street, Portland, OR 97204`, `(555) 214-0980`, `hello@veranda.example`), a four-link channel column,
  `Company` (`About`, `Blog`), `Support` (`Contact`, `Terms`) and `Stay Updated` with an email field
  and `Subscribe`
- **AND** the channel column lists four real channel names and targets the channels band, because the
  reference's `Spaces` column (`Hot Desk`, `Dedicated Desk`, `Private Office`, `Meeting Rooms`) is
  leftover copy from a coworking template and all four of its links point at the non-existent
  `#spaces` (Deviation 6)
- **AND** the bottom bar holds `© 2026 Veranda. All rights reserved.`, the legal links, **and a
  `Component Dock` link to `https://www.componentdock.com/`** (house rule; the reference has no such
  link)
- **AND** the newsletter field is `type="email"` and `required`, and submitting it shows a
  confirmation without navigating

### Requirement 15: Navigation mapping (single page)

The app SHALL resolve the reference's nine nav labels against bands that exist on the page, and SHALL
NOT introduce a band the landing page does not have.

#### Scenario: Visitor uses the navigation

- **GIVEN** the header is rendered at a desktop width
- **WHEN** each nav item is followed
- **THEN** `Channels` targets the channels band, `Discussions` the discussions band, `Events` the
  events band, `Members` the member band, `Membership` the pricing band, `Contact` the closing band,
  `Guidelines` the FAQ band (its five answers are the page's moderation policy), `About` the
  member band and `Blog` the discussions band (its five threads are the page's writing)
- **AND** every target id exists, no anchor is left pointing at `#`, and the scroll-spy highlights the
  band in view
- **AND** every in-page link offsets by `header.offsetHeight + 20`

### Requirement 16: Accessibility and provenance

The app SHALL meet the house accessibility baseline and SHALL NOT reference the source design
anywhere in `apps/veranda`.

#### Scenario: Keyboard and screen-reader use

- **GIVEN** a keyboard-only visitor
- **WHEN** they tab from the top
- **THEN** the first stop is the skip link; the disclosure, the billing switch, the carousel, the
  video modal and every FAQ row are operable from the keyboard, and focus is visible against both the
  light grounds and the indigo closing band
- **AND** the switch exposes `role="switch"` + `aria-checked`, the carousel's arrows have names, the
  counters do not announce on every frame, decorative blobs/dots/glyph tiles are `aria-hidden`, and
  no text sits below 4.5:1 against its ground — `primary-700` on `primary-50` and white on
  `primary-600` are the only brand-on-brand pairs used for text
- **AND** the video modal traps focus, restores it on close, and never autoplays audio

#### Scenario: Provenance audit

- **GIVEN** the implementation is complete
- **WHEN** `grep -ril "colorlib" apps/veranda` runs
- **THEN** it prints nothing
- **AND** no file contains the source brand, its `hello@commons.community` mailbox, its wordmark SVG
  or its stylesheet, and the footer links `https://www.componentdock.com/`

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is a nine-route Astro site (`/about`, `/pricing`,
   `/guidelines`, `/blog`, `/contact`, `/privacy`, `/terms`, `/elements` and `/`, all live — see §Link
   and destination census). The recreation is the single landing page described here. Route links
   become in-page fragments per Requirement 15; `/pricing` folds into the pricing band, `/guidelines`
   into the FAQ, and `/privacy`/`/terms`/`/elements` into the closing band. The deeper content of
   those pages is deliberately **not** rebuilt.
2. **Dark mode dropped.** The source compiles a complete dark palette (`dark:` on nearly every
   utility) plus a `localStorage` theme toggle and a `applyTheme()` boot script. The recreation is
   light-only (house convention) and drops the toggle, so the header cluster is the nav plus the
   `Join the Community` button. Every dark value measured is recorded above so the decision is
   reversible.
3. **Cookie persistence.** The source stores `cookie-consent` in `localStorage`; the recreation keeps
   the dismissed state in component state so no test depends on an invented storage key.
4. **Copy and identity re-branded.** Veranda replaces the source brand everywhere: the wordmark
   (redrawn from the same three-overlapping-speech-marks idea), the `© 2026` line, the mailbox
   (`hello@veranda.example`), the document title, the OG/meta set and every URL. The fictional
   Portland address, the `(555) …` numbers, the member names/towns and the channel cultures are kept
   — they are already fictional and they are the page's content.
5. **The pricing arithmetic is corrected.** The reference's yearly notes read `Billed annually
   ($1080/year)` for a `$9`-per-month tier whose own switch computes `$90`, and `($3480/year)` for
   `$29` → `$290` — both off by a factor of ten. The recreation states `$90` and `$290`. Keep the
   switch's own computed values as the single source of truth for both the price and the note.
6. **Leftover coworking copy is replaced.** The footer's `Spaces` column (`Hot Desk`, `Dedicated
   Desk`, `Private Office`, `Meeting Rooms`, all pointing at a non-existent `#spaces`) and the sticky
   mobile bar's `Book a Tour` are content from a different template. The footer column becomes four
   real channel links pointing at the channels band, and the mobile bar keeps its two-button shape
   with community labels.
7. **Placeholder imagery.** The hero photograph becomes
   `https://picsum.photos/seed/veranda-1/1600/900` (deterministic per template). Nothing else on the
   page is photographic — every other visual is an inline SVG glyph, an initials disc or a gradient.
8. **The demo modal gets a real source.** The reference's `data-video-modal` points at a placeholder
   YouTube id. The recreation ships its own demo source (or a poster + link), and no third-party
   iframe is created before the modal opens.
9. **The typewriter honours reduced motion.** The reference cycles forever regardless of the
   visitor's motion preference; the recreation renders the first phrase statically under
   `prefers-reduced-motion: reduce`.
10. **The two fixed bottom bars are de-conflicted.** The reference stacks the sticky mobile CTA
    (`z-40`) and the cookie strip (`z-50`) at the same `bottom-0`, so the strip covers the bar. The
    recreation hides the CTA while the strip is open.
11. **Reference defects not reproduced.** The three `href="#"` social tiles get real external hrefs
    with `rel="noreferrer"`; the footer's malformed `tel:(555) 214-0980` becomes
    `tel:5552140980`; the mobile bar's second phone number (`5556789012`, an obvious placeholder that
    contradicts the footer) becomes the footer number; the `#spaces` and `#contact`-from-footer
    fragments point at ids that exist; and `og-image.jpg` (a `404` on the reference) is generated for
    the app or omitted from the meta set.

## Verification checklist

- [ ] Spec validates: `openspec validate template-veranda --type spec` prints
      `Specification 'template-veranda' is valid`
- [ ] `apps/veranda` scaffolded from the simplest existing app, package renamed
      `@free-react-templates/veranda`, `public/CNAME` = `veranda.free.componentdock.com`, `homepage` =
      `https://veranda.free.componentdock.com`
- [ ] Tokens: `primary` indigo `#eef2ff` → `#312e81` with `#4f46e5` as the brand, `accent` rose
      `#fff1f2` / `#ffe4e6` / `#f43f5e` / `#be123c`, neutrals `#f9fafb` → `#111827`; radii
      `.5/1/1.5 rem`; `shadow-soft` `0 4px 16px -4px #0000001a`; `.btn` 8 px radius, 10/20 px
      padding, 14 px medium
- [ ] Fonts: **Outfit 300–800** via `<link>` in `index.html`; no second family anywhere; `tabular-nums`
      on every number
- [ ] Custom utilities: `.text-gradient` (`#4f46e5 → #818cf8`, `background-clip:text`) and the two
      float animations (`8s` / `10s reverse`) with the `hero-float` keyframes
- [ ] Header: sticky, `white/80` + blur, 64/80 px, nine links at `lg`, hamburger below, `shadow-lg`
      past 50 px, scroll-spy `.nav-active` on the four in-page targets
- [ ] Hero: `from-primary-50 to-white` gradient, two parallax blobs, pulsing badge pill, two-line `h1`
      with a gradient typewriter span (3 phrases, 3 s, reduced-motion static), lede, three controls,
      four-stat row over a hairline, `rounded-2xl shadow-2xl ring-1` photo
- [ ] Video modal: opens from `Watch Demo`, 16:9 frame, closes on X / backdrop / `Escape`, focus
      returns to the trigger, no third-party request before open
- [ ] Counter band: `gray-50` + `border-y`, `grid-cols-2 sm:grid-cols-4`, four values animating over
      2 s at 50 % visibility with the literal `< 3h` land
- [ ] Channels: six cards in the exact order with the primary/accent/neutral glyph rhythm, blurbs,
      `members` / `posts/wk` footer, hover lift, `sm:grid-cols-2 lg:grid-cols-3`
- [ ] Discussions: five rows, one bordered list with `border-t` separators, vote + tag + `Answered`
      chip on the right three rows, initial disc + name + replies + relative time, `See all
      discussions` as `.btn-secondary`
- [ ] Members: three figures, gradient initials discs, quotes, counts, two badges
- [ ] Events: four dated cards with 64 px indigo date tiles, type labels, host lines, seat chips, and
      the `.btn-primary` calendar CTA
- [ ] Pricing: billing switch with `role="switch"`, `aria-checked`, knob travel 28 px, price and note
      swapping; `$0`/`$9`/`$29` monthly and `$90`/`$290` yearly with **corrected** annual notes; tier
      2 ringed with the `Most Popular` pill; two features struck through on `Reader`
- [ ] Testimonials: 3 slides, 3/2/1 per view, dots `w-8` when active, arrows only when paged, 5 s
      autoplay paused on hover and off under reduced motion
- [ ] FAQ: five rows, **exclusive**, `aria-expanded`/`aria-controls`, icon rotates 45°, `max-height`
      transition
- [ ] Closing band: `#4f46e5 → #3730a3` diagonal, dot grid + two blurred discs, white solid CTA with
      `text-primary-700`, `border-2 border-white/30` ghost
- [ ] Footer: four blocks + `Stay Updated`, four real channel links (no `Spaces` leftovers), social
      tiles with real hrefs, address/phones/mail coherent, legal bar with the `Component Dock` link to
      `https://www.componentdock.com/`
- [ ] Chrome: preloader, skip link, progress bar, back-to-top, cookie strip in state, sticky mobile
      bar hidden while the strip is up
- [ ] No `colorlib` string, no source brand, no `hello@commons.community`, no copied SVG or
      stylesheet under `apps/veranda`; the wordmark is redrawn
- [ ] Row added for the design under `## App Landing Page` with the heading bumped to `(36)` and
      flipped to `[x]` with the bookkeeping commit (the exact line is in §Purpose)
- [ ] `npm run spec:validate`, `scripts/verify-app.sh veranda` and the CI gate are green
