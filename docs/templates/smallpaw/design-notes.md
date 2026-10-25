# Smallpaw — Design Notes

Companion to `openspec/specs/template-smallpaw/spec.md`. Everything here was measured, not guessed; the
`curl -4` reads, the computed-style probe and the hashes are in the spec's §Reference readings.

## Reference set (all read 2026-10-25, `curl -4`)

| what | URL | reading |
| --- | --- | --- |
| live preview (DOM authority) | `https://preview.colorlib.com/theme/fernhill/` | 200, 75,015 B, `<title>Home \| Fernhill`, Astro + Tailwind 4.3.3 |
| stylesheet (token authority) | `/theme/fernhill/_astro/Base.BVSEoPKG.css` | 200, 62,963 B, 786 top-level rules, **no** `--color-primary-*` vars |
| house kit | `/theme/fernhill/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` | 200, 16,233 B, sha256 identical to the Kettle/Aquifer/Plantroom/Veranda/Stoke/Closeknit reads |
| view-transition router | `…/ClientRouter…CYDbzu1r.js` | 200, 16,357 B, identical hash to the siblings |
| fonts | 7,656 B inline `<style>` | **Plus Jakarta Sans** 300–800, 24 `woff2` via `/cf-fonts/v/plus-jakarta-sans/5.2.8/…` |
| catalog entry | `https://colorlib.com/wp/template/fernhill/` | 200, 111,147 B, "Veterinary Website Template 2026" |
| catalog screenshot | `…/sites/2/fernhill-template.jpg` | 200, 99,152 B, **AVIF**, 2400×1892 |
| legacy paths | `css/style.css`, `js/snippet.js`, `og-image.jpg`, `downloads/free/fernhill.zip` | all **404** — Astro build, no archive |
| inner pages | `/about/`, `/blog/`, `/pricing/`, `/contact/`, `/terms/`, `/privacy/`, `/elements/` | all **200**; `/spaces/` **404** |

`/elements/` (53,027 B) is the design's own **style-guide page** — useful if you need a second opinion on a
component's markup, but the landing page is authoritative for this template.

## Document order

```
#preloader                     fixed inset-0 z-[100] bg-white, 40px animate-spin ring, removed 300ms after load
skip link                      sr-only, targets #main-content
#scroll-progress               fixed top-0 left-0 z-[60] h-0.5 bg-primary-600, width = scroll ratio
header[data-header]            sticky z-50, h-16 lg:h-20, bg-white/80 + backdrop-blur-lg, border-b gray-200
[data-mobile-menu]             hidden lg:hidden, 8 link rows + full-width CTA
main#main-content
  1 hero (no id)               gradient from-primary-50 to-white, py-20, 2 blur blobs, facts strip, photo
  2 #out-of-hours              bg-primary-800 #6f284b, py-14, amber pill + tel button + provider card + schedule
  3 stats (no id)              bg-gray-50, border-y, py-16, 4 counters
  4 #species                   white, py-20 sm:py-28, 6 cards (4 + 2 referred), accent callout
  5 #health-plans              bg-primary-50, py-20 sm:py-28, 3 plan cards (middle featured), footnote
  6 #fees                      white, py-20 sm:py-28, 8-row table, accent callout
  7 #testimonials              bg-gray-50, py-20 lg:py-28, 3-slide carousel
  8 #faq                       white, py-20 lg:py-28, 5 exclusive rows
  9 #contact                   gradient primary-600 → primary-800, dot grid, 2 CTAs
footer                         bg-gray-900, pt-16 lg:pt-24, 12-col: brand 4 · 3 link cols · newsletter 3
#mobile-cta                    fixed bottom z-40 lg:hidden, 69px, Call + Register
#cookie-consent                fixed bottom z-50, slides up after 1.5s
#back-to-top                   fixed bottom-6 right-6 z-50, 48px disc, past 300px
```

## Paste-ready token block (`src/index.css`)

```css
@import 'tailwindcss';

/* Smallpaw palette — measured from the reference sheet and the live render.
   Two ramps only: `primary` (plum/rose magenta) and `accent` (amber), plus stock
   Tailwind `gray` for chrome. The reference defines NO custom properties for the
   palette (it was a Tailwind config compiled to literals), so these values are
   read out of the compiled rules, not out of `--color-*` declarations.
   Type: Plus Jakarta Sans 400/500/600/700, loaded in index.html.
   Shape: 8px controls, 12px plan CTAs, 16px cards/artefacts, 24px plan cards, pills at 9999px. */
@theme {
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* brand — plum / rose magenta */
  --color-primary-50: #fdf4f8;
  --color-primary-100: #fbe8f1;
  --color-primary-200: #f6d0e3;
  --color-primary-400: #df77a9;
  --color-primary-500: #c9508a;
  --color-primary-600: #a83a6f; /* brand */
  --color-primary-700: #8a2f5b; /* plans band eyebrow, fee thead, plan CTAs, featured card */
  --color-primary-800: #6f284b; /* out-of-hours band, schedule cells, gradient end */
  --color-primary-900: #5b2440; /* text on amber */

  /* accent — amber */
  --color-accent-50: #fdf8ed;
  --color-accent-100: #f9edcf;
  --color-accent-300: #e9be62;
  --color-accent-400: #d4a24c; /* phone button, featured ring, callout rules */
  --color-accent-800: #684324;

  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;

  --shadow-soft: 0 4px 16px -4px #0000001a;

  --animate-hero-float: hero-float 8s ease-in-out infinite;
  --animate-hero-float-reverse: hero-float 10s ease-in-out infinite reverse;

  @keyframes hero-float {
    0%, 100% { transform: translate(0) scale(1); }
    33% { transform: translate(30px, -20px) scale(1.05); }
    66% { transform: translate(-20px, 15px) scale(0.95); }
  }
}

@layer base {
  html { scroll-behavior: smooth; }
  body {
    background: #ffffff;
    color: #111827;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    font-size: 1rem;
  }
}

/* the h1's second line: gradient-clipped text, and the typewriter target */
.text-gradient {
  background-image: linear-gradient(to right, #a83a6f, #df77a9);
  background-clip: text;
  color: transparent;
}
```

`index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

`primary-300` is deliberately absent: the sheet never compiles it (it only exists as a `dark:` token in the
source markup). Do not add a made-up value.

## Section-by-section fidelity notes

### Header (`header[data-header]`)

64 px tall, 80 px from `lg` (measured 65 / 81 px including the 1 px `gray-200` border), `bg-white/80` +
`backdrop-blur-lg`, sticky `z-50`, `shadow-lg` past 50 px. Left: the paw-pad wordmark (`h-8` → `h-10`).
Middle: **eight** links, `text-sm font-medium text-gray-600`, `gap-8`, visible from `lg`. Right: a moon toggle
(icon button, `rounded-lg p-2`), then the solid `Register your pet` from `lg`, then the hamburger
(`lg:hidden`). The mobile panel is a white block with `border-t`, eight `block py-3 text-base` rows, then a
`mt-4 border-t pt-4` block with a full-width CTA.

### Hero

Centred `max-w-4xl`, `py-20` (80 px), on `linear-gradient(to bottom, #fdf4f8, #ffffff)`. Two decoration layers
behind (`-z-10`): a 500 px `primary-200/50` disc at `-top-40 left-1/2` with `data-parallax="0.15"` and a 400 px
`primary-100/40` disc at `right-0 top-0` with `data-parallax="-0.1"`, both `blur-3xl` and both on the
`hero-float` keyframe (8 s / 10 s reverse). Rhythm, with the delays the reference uses:

| element | spec |
| --- | --- |
| eyebrow pill | `rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700` + a **ping dot** (`h-2 w-2`, `animate-ping bg-primary-400/75` over a solid `bg-primary-500`), delay 0 |
| `h1` | 36 → 48 → **60 px**, `font-bold tracking-tight` (−1.5 px), `text-gray-900`; line 1 `Your vet should tell you`, line 2 the `.text-gradient` span; delay 100 |
| lede | `max-w-2xl`, `text-lg sm:text-xl text-gray-600`; delay 200 |
| CTA row | `flex flex-col items-center justify-center gap-4`; solid + outlined + the (dropped) play button; delay 300 |
| facts strip | `mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4`, 896×105; 30 px `lg:text-4xl` values, 14 px `text-gray-600` labels; delay 400 |
| photograph | wrapper `mt-16`, `max-w-5xl` (1,024 px), `rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200`, image **1024×512**; delay 500 |

The section measures **1,409 px** at 1440. The four facts are **static** (`£46 / Consultation`,
`24/7 / Cover arranged`, `4,100 / Registered pets`, `16 / Years independent`) — only the stats band's four
count.

### Out-of-hours (`#out-of-hours`)

The band that carries the design's argument. `bg-primary-800` `#6f284b` (measured `rgb(111,40,75)`),
`text-primary-50`, `py-14` (56 px), inner `max-w-6xl`, **581 px** tall.

1. Flex row (`items-start justify-between`, wraps): left `max-w-xl` — an `accent-400` pill
   (`px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-900`) with a ping dot in
   `primary-800/60`, then a **30 px** white `h2` (`text-2xl`, **not** the 36 px the other bands use) and a
   `text-primary-200` lede that says the practice does not staff its own overnight service; right — the phone
   button.
2. The phone button is the loudest element on the page: `rounded-2xl` (16 px), `bg-accent-400` `#d4a24c`,
   `text-primary-900` `#5b2440`, `px-7 py-4`, **18 px `font-bold`**, with a 20 px phone glyph. Measured
   `rgb(212,162,76)` on `rgb(91,36,64)`. Its `href` is `tel:01743660214` (the footer's copy of the same number
   carries spaces — a reference defect, normalise it).
3. `mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]`: the **provider card** (`rounded-2xl bg-primary-900/60 p-5
   ring-1 ring-white/10`, measured 484×148) with `WHERE YOU WOULD GO` in `accent-300`, an 18 px bold provider
   name, the address in `text-primary-200`, and a `rounded-full bg-primary-700 px-3 py-0.5 text-xs` distance
   chip; beside it the **schedule** — a `dl` with `grid gap-px overflow-hidden rounded-2xl bg-white/10
   sm:grid-cols-3` whose cells are `bg-primary-800 p-4`, so the 1 px gutters read as hairlines (measured
   580×148). Each cell: a `dt` in 12 px `accent-300` uppercase, a `dd` in semibold white.
4. Footnote: `mt-6 max-w-3xl text-sm leading-relaxed text-primary-200`, closing with the £180–£250 warning.

### Stats strip

`bg-gray-50`, `border-y border-gray-200`, `py-16` (64 px), **238 px** tall, `container` with
`grid grid-cols-2 gap-8 sm:grid-cols-4`. Values `4,100` / `16` / `5` / `100%`, each a `data-counter` in
`text-4xl lg:text-5xl font-bold text-primary-600` with a 14 px `font-medium text-gray-600` label underneath.
In the source the text nodes are literally `0` and the kit ramps them; **in React, render the final value when
`IntersectionObserver` is absent** (jsdom) and animate otherwise — see `docs/conventions.md`
"Animation fallbacks". Delays 0/100/200/300.

### Species (`#species`)

Headers centred in `max-w-2xl`: a `primary-100` pill (`text-primary-800`), 36 px `h2`, `text-gray-600` lede.
Grid `mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3` (cards measured **352×274**). Card anatomy, top to
bottom:

```
li.rounded-2xl border p-6 border-primary-200 bg-white
  div.flex items-start justify-between gap-3   → span.text-3xl emoji (aria-hidden)  [ + optional chip ]
  h3.mt-3 text-lg font-bold
  p.mt-2 text-sm leading-relaxed text-gray-600
  p.mt-4 border-t pt-3 text-sm border-primary-100
     span.text-gray-500 "Routine care" · span.ml-2 font-semibold text-primary-700 <value>
```

The two rejected species swap the border and ground: `border-dashed border-gray-300 bg-gray-50`, an extra
`rounded-full bg-gray-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-600` chip
reading `Referred on`, a `border-gray-200` rule instead of `primary-100`, and the value
`Referred at registration`. The callout below is
`rounded-2xl border-l-4 border-accent-400 bg-accent-50 px-5 py-4 text-sm leading-relaxed text-gray-700`
(measured `rgb(253,248,237)` with a 4 px `rgb(212,162,76)` left rule).

### Health plans (`#health-plans`)

`bg-primary-50` band (measured `rgb(253,244,248)`), `py-20 sm:py-28`, `max-w-6xl`, **981 px**. Header pill is
the inverted one: `bg-primary-700 text-white`. Cards `mt-14 grid gap-6 lg:grid-cols-3`, each
`flex flex-col rounded-3xl p-7` (28 px padding, measured **347×447**).

| | outer cards (`Puppy & Kitten`, `Senior`) | featured (`Adult`) |
| --- | --- | --- |
| ground | `border border-primary-200 bg-white` | `bg-primary-700 text-white ring-2 ring-accent-400` |
| subtitle | `text-gray-500` | `text-primary-200` |
| badge | `bg-accent-100 text-accent-800` | `bg-accent-400 text-primary-900` |
| tick glyph | `text-primary-600` (`h-4 w-4`) | `text-accent-300` |
| price suffix | `text-gray-500` | `text-primary-200` |
| divider | `border-primary-100` | `border-primary-600` |
| CTA | `bg-primary-700 text-white` | `bg-white text-primary-700` |

Both CTA variants are `rounded-xl` (12 px) `px-5 py-3 font-semibold`, `mt-7`, full width. Price is
`text-4xl font-bold tabular-nums` (`£17` / `£21` / `£29`) with `flex items-baseline gap-1.5`. Inclusions are a
`mt-6 flex-1 space-y-2.5 border-t pt-5 text-sm` list of five `flex gap-2.5` rows. Footnote:
`mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-gray-600`.

### Fee guide (`#fees`)

The only **left-aligned** header on the page (`max-w-2xl`, not centred) — copy that asymmetry, it is what makes
the band read as a document rather than a section. `max-w-5xl` (1,024 px) content, table **958×671**, `thead`
40 px:

```
div.mt-12.overflow-hidden.rounded-2xl.border.border-primary-200
  table.w-full.text-left
    thead.bg-primary-700.text-white  th.px-5.py-3.text-xs.font-bold.uppercase.tracking-wider
    tbody.bg-white
      tr[.border-t.border-primary-100] × 7 after the first
        td.px-5.py-4  span.font-semibold <item> + span.mt-0.5.block.text-sm.text-gray-500 <description>
        td.px-5.py-4.text-right.font-semibold.tabular-nums <standard>
        td.px-5.py-4.text-right.tabular-nums  span.font-semibold.text-primary-700 <plan> | span.text-gray-400 "—"
```

The `On a plan` column carries three shapes on purpose: `Included` (plum, semibold), a discounted figure
(`£131`, `£239`, `£279`), and an em dash for euthanasia. Keep all three distinct. Right-align both money
columns and use `tabular-nums`; the numbers line up in the reference and that alignment is the point.

### Testimonials (`#testimonials`)

`bg-gray-50`, `py-20 lg:py-28`, `container` (wider than the `max-w-6xl` bands), **768 px**. Header centred in
`max-w-3xl` with a `primary-100` pill at 14 px `font-medium`. Carousel structure:

```
div.relative.mt-16[data-carousel]
  div.overflow-hidden
    div.flex.transition-transform.duration-500.ease-out[data-carousel-track]
      div.flex-shrink-0.px-3[data-carousel-slide]  → div.rounded-2xl.bg-white.p-8.shadow-soft
        div.mb-6.flex.gap-1        → 5× svg.h-5.w-5.text-primary-400
        blockquote.text-lg.font-medium.text-gray-900
        div.mt-6.flex.items-center.gap-4 → 48px disc bg-primary-100 text-primary-600 + name + village
  button[data-carousel-prev] / [data-carousel-next]   absolute -left-4/-right-4, rounded-full bg-white p-2
                                                     shadow-lg, hidden lg:flex
  div.mt-8.flex.justify-center.gap-2[data-carousel-dots]
```

Cards measure **381×320** at 3-up. Per-view 3 / 2 / 1 at `lg` / `sm` / below; 5 s autoplay; hover pauses.

### FAQ (`#faq`)

White, `py-20 lg:py-28`, `max-w-3xl`, `divide-y divide-gray-200`. Each row is `py-6` containing a full-width
`button.flex.items-center.justify-between.text-left` (18 px semibold question + a `ml-4 flex h-8 w-8
flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600` disc) and an
`overflow-hidden transition-all duration-300` panel with `p.pt-4.text-gray-600`. The disc is **32×32** and
rotates to 45° when open. The reference's buttons carry **no** `aria-expanded`/`aria-controls`; add them.

### Closing band (`#contact`)

`bg-gradient-to-br from-primary-600 to-primary-800` (measured start `rgb(168,58,111)`, end `rgb(111,40,75)`),
`py-20 lg:py-28`, **452 px**. Three decoration layers inside `aria-hidden` + `absolute inset-0 z-0`: two
`h-64 w-64 rounded-full bg-white/10 blur-3xl` blobs (`-right-20 -top-20`, `-bottom-20 -left-20`) and a **dot
grid** written as inline style —
`background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;`
at `opacity-10`. Heading **48 px** white (`lg:text-5xl`), `mt-6 max-w-xl text-lg text-primary-100` lede, then
`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`: white solid CTA (`px-8 py-4`, `text-primary-700`,
`shadow-lg`) and a `border-2 border-white/30` ghost with a phone glyph.

### Footer

`bg-gray-900`, `text-gray-300`, `pt-16 lg:pt-24` (96 px measured), **567 px**, `container`,
`grid gap-12 lg:grid-cols-12 lg:gap-8`.

| block | content |
| --- | --- |
| brand `lg:col-span-4` | `logo-light.svg` at `h-10`, `mt-4 max-w-xs text-gray-400` blurb, `mt-6 flex gap-4` three `rounded-lg bg-gray-800 p-2.5 text-gray-400` social tiles (X / Instagram / LinkedIn), then `mt-6 space-y-2 text-sm text-gray-400` with the address, the phone (`tel:` — normalised) and the mailbox |
| link columns | a nested `grid gap-8` of three columns with `h3.text-sm.font-semibold.uppercase.tracking-wider.text-white` heads and `mt-4 space-y-3` lists. **`Spaces` is the reference's coworking leftover — replace it** with the practice's own links |
| `Stay Updated` `lg:col-span-3` | 14 px headline, `mt-4 text-gray-400` blurb, then `flex gap-2`: `min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5` email field + a plum `Subscribe` (`rounded-lg px-4 py-2.5 font-medium`, measured 46 px tall) |
| legal bar | `mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8`: `text-sm text-gray-500` copyright + `flex gap-6` with Privacy / Terms / **Component Dock** |

### Trailing fixed layers

`#mobile-cta` — `fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 shadow-lg lg:hidden`,
**69 px** at 390, two equal buttons (`bg-gray-100` call, `bg-primary-600` booking). `#cookie-consent` —
`fixed bottom-0 z-50 border-t bg-white p-4 shadow-lg`, one sentence + `Decline` (outline) / `Accept All`
(plum), slides in after 1.5 s. `#back-to-top` — 48 px `bg-primary-600` disc with `shadow-primary-600/25`.

## Source → React adaptation table

| reference | React |
| --- | --- |
| Astro partials + `ClientRouter` view transitions | one `App.tsx` composing section components; no router |
| `.text-gradient` span + kit `data-typewriter` (`setInterval` 3 s, `textContent` swap) | `useTypewriter`-style state: `useState(0)` + `useEffect` interval, `aria-live="off"`, static under `prefers-reduced-motion` |
| `data-counter` + `IntersectionObserver` + `requestAnimationFrame` (2 s ease-out-cubic) | `useEffect` observer + `requestAnimationFrame`; **derive the final value during render when `IntersectionObserver` is undefined** (jsdom) |
| `data-parallax` inline `transform` on two blobs | one scroll listener writing a CSS variable or style on the two refs (`scrollY × factor`) |
| kit carousel (`translateX`, per-view 3/2/1, 5 s) | `useState(index, perView)` + `resize` listener; index math must clamp on shrink |
| kit FAQ (`max-height` + `rotate(45deg)`, exclusive) | `openIndex` state; panel height via `scrollHeight` on a ref, or a `grid-template-rows` trick |
| header `shadow-lg` past 50 px, disclosure `hidden` toggle | state + scroll listener; `aria-expanded` |
| cookie strip in `localStorage`, 1.5 s delay | component state + `setTimeout`; no storage key |
| newsletter form (inert, native submit) | controlled input + local validation + toast; no network |
| `logo.svg` / `logo-light.svg` (516 B, `<text>` wordmark) | redraw as inline SVG/JSX with `Smallpaw` text; never copy the file (it contains the source brand) |
| catalog photograph (Safari-framed) | `https://picsum.photos/seed/smallpaw-1/1200/600` |
| emoji glyphs (🐕 🐈 🐇 🐹 🦜 🐴) | keep the emoji as text with `aria-hidden` (they are content, not icons); no `lucide-react` substitute |
| inline SVG icons (phone, stars, ticks, socials, arrows) | `lucide-react` equivalents (`Phone`, `Star`, `Check`, `X`/`Instagram`/`Linkedin`, `ChevronLeft/Right`, `Plus`) |

## Sibling comparison (same generated-template family, different designs)

| design | new name | palette | type | thesis |
| --- | --- | --- | --- | --- |
| **Fernhill** | **smallpaw** | **plum `#a83a6f` + amber `#d4a24c`** | **Plus Jakarta Sans** | published fees + stated out-of-hours |
| Everhot | kettle | burnt orange `#ae6211` on warm grey | Manrope + JetBrains Mono | tank-vs-tankless sizing tool |
| Curbline | plantroom | blue on blue-grey | Inter | HVAC response tiers |
| Dowser | aquifer | cyan on blue-grey | Space Grotesk | water-treatment diagnosis |
| Commons | veranda | (see its spec) | — | community membership |
| Coldsnap | stoke | (see its spec) | — | cold-chain |
| Circles | closeknit | (see its spec) | — | circles/friendship app |

Shared: the same house kit hash, the same eleven-part shell (preloader, skip link, progress, header, mobile
menu, hero, bands, footer, mobile bar, cookie, back-to-top), `shadow-soft`, `ping`/`spin`, `max-w-6xl` bands and
`rounded-2xl` cards. **Not** shared: palette, type, band order, and the one page-local interaction. Fernhill's
distinctive pieces are the **amber phone button on plum**, the **typewriter on a gradient headline**, and the
**species grid's two greyed referral cards** — none of them appears in a sibling.

## Traps (measured, in the order they bite)

1. **`-4` on every curl.** `preview.colorlib.com` resolves an IPv6 address this host is blocked on; a plain
   `curl` hangs. Playwright reaches it without a host rule.
2. **The screenshot is AVIF.** `fernhill-template.jpg` is `image/avif`; `vision_analyze` rejects the raw file.
   Convert first: `python3 -c "from PIL import Image; Image.open('shot.avif').save('shot.png')"`.
3. **No palette custom properties.** `grep -c '\-\-color-primary' Base.BVSEoPKG.css` → **0**. Reading
   `--color-*` tells you nothing here; read the compiled rules (`bg-primary-600{…}`).
4. **`primary-300` does not exist** in the sheet. If a class list suggests it, you read a `dark:` token.
5. **The gradient span is the typewriter.** Swapping `textContent` is correct; replacing the span with a plain
   coloured element loses `background-clip:text` and the headline turns black.
6. **The facts strip is not animated.** Only the stats band's four numbers use `data-counter`; the hero's four
   are static text (`4,100` appears in both — deliberate redundancy).
7. **Two column rhythms for the counters.** Hero facts are `text-3xl lg:text-4xl` on `gray-900`; the stats band
   is `text-4xl lg:text-5xl` on `primary-600`. Do not unify them.
8. **`#fees` is left-aligned** while every other band heading is centred.
9. **`Spaces` is not a practice section.** Four footer links to a 404 coworking page; replace the column.
10. **`tel:5556789012`** in the mobile bar and **`Book a Tour`** are the same leftover pair; the real number is
    `01743 660 214`.
11. **The `Watch Demo` button is a rickroll placeholder** (`data-video-modal` → `dQw4w9WgXcQ`). Drop it.
12. **Footer `tel:` has spaces** (`tel:01743 660 214`) — malformed; normalise.
13. **The JSON-LD is corrupt** (`"@context":"https://***@type"`) on this design and its siblings; do not copy.
14. **The favicon is amber `#d97706`**, not the plum brand — replace it.
15. **`/elements/` is a live style guide, not a 404.** If you need a second opinion on a component, it is
    there; the landing page still wins.
16. **375 classes, 0 phantom** — if your census reports a miss, it is the escaping (`sm\:`, `bg-white\/10`,
    `text-[11px]`, leading-digit `2xl:`), not the sheet.
