# Patina — design notes

Source: ColorLib **Onyx** (`onyx`), live preview `https://preview.colorlib.com/theme/onyx/`
(HTTP 200, 44,519 B, read 2026-10-25 with `curl -4`). Recreation name `patina`. Spec:
`openspec/specs/template-patina/spec.md`. Tasks: `docs/templates/patina/tasks.md`.

A 2026 **Astro + Tailwind 4** build (`/*! tailwindcss v4.3.3 */`, one 55,410 B sheet, the same 16,233 B house
kit as the `conduit`/`nightwatch`/`drainwise` preps) for a **bathroom design-and-build studio in Chicago**.
The `<title>` states the business — *"Bathroom design and renovation plumbing in Chicago"* — and the `h1`
states the argument: *"The room you stand in first thing, done properly once."* The whole page is a
justification of that frequency-of-use premise, ending with the line most trade sites would never print:
*"If you want the cheapest bathroom in Chicago we are emphatically not it."*

This is the **first catalogue-gap design in this family with a hard-coded dark theme** (`<html class="dark">`,
no toggle), and the first whose **display face is a serif used for entire headings** rather than artwork.

## Structure order (measured at 1440 × 900)

| #  | band                          | id / hook            | ground               |   top | height |
| -- | ----------------------------- | -------------------- | -------------------- | ----: | -----: |
| 0  | header (absolute → fixed)     | `[data-onyx-header]` | transparent          |     0 |     97 |
| 1  | hero, photo + `ink-900/65`    | 1st `<section>`      | image                |     0 |    792 |
| 2  | three rooms                   | `#portfolio`         | `#0b0b0b`            |   792 |    903 |
| 3  | before / after compare        | *(none)*             | `#101010`            | 1,695 |  1,092 |
| 4  | three stages                  | `#process`           | `#101010`            | 2,787 |    632 |
| 5  | the studio                    | `#owner`             | `#0b0b0b`            | 3,419 |    868 |
| 6  | two testimonials (carousel)   | `#testimonials`      | `#111827`            | 4,287 |    936 |
| 7  | book a consultation           | `#contact`           | `#101010`            | 5,223 |    430 |
| 8  | footer                        | `<footer>`           | `#101010`            | 5,653 |    544 |

Document **6,197 px** at 1440 × 900; **6,386** at 768; **6,876** at 390; **7,359** at 320. The eight in-flow
bands sum to exactly 6,197 px — the header is `absolute` and overlaps the hero.

Note the **band alternation is not a zebra**: `900 → 800 → 800 → 900 → gray-900 → 800 → 800`. Two pairs of
equal grounds sit next to each other (compare+process, contact+footer), so the page reads as **six** bands to
the eye even though there are eight in the DOM. Keeping the two `#101010` pairs adjacent is what makes the
single cool `#111827` testimonial band land as a tonal event.

## Token reference block (paste into `src/index.css`)

```css
@theme {
  /* ink — warm-grey neutral ramp */
  --color-ink-50: #ede9e0;
  --color-ink-100: #d7d2c6;
  --color-ink-200: #ada69a;
  --color-ink-300: #7e786e;
  --color-ink-400: #565149;
  --color-ink-500: #3a3631;
  --color-ink-600: #26231f;
  --color-ink-700: #161616;
  --color-ink-800: #101010;
  --color-ink-900: #0b0b0b;

  /* primary — brass ramp */
  --color-primary-50: #fbf7ea;
  --color-primary-100: #f5edd0;
  --color-primary-200: #eadca2;
  --color-primary-300: #dcc66d;
  --color-primary-400: #cfb143;
  --color-primary-500: #c9a227;
  --color-primary-600: #ac8a1f;
  --color-primary-700: #8a6e19;
  --color-primary-800: #6b5514;
  --color-primary-900: #54430f;

  --font-sans: Manrope, system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;

  --radius-lg: 0.5rem;
  --radius-2xl: 1rem;
  --shadow-soft: 0 4px 16px -4px #0000001a;
}

body {
  background-color: #0b0b0b;
  color: #ede9e0;
  -webkit-font-smoothing: antialiased;
}
```

The sheet defines **no** `--color-ink-*` / `--color-primary-*` custom properties (Tailwind 4 inlines the
literals), so these two ramps were parsed back out of the compiled utilities — they are complete and verified
against the rendered page.

## Screenshot analysis (`onyx-template.jpg`)

70,617 B, served `image/avif` despite the extension, **2400 × 1892** — a **composed browser-window mockup**
(macOS traffic lights, white ground, rounded window), not a raw capture. It shows the hero and the top of
"Three rooms" with **three** portrait cards in one row.

Read it for three facts: the hero copy is **bottom-left with a wide left gutter**; the 65 % wash leaves the
photograph legible as a *room* rather than a texture; brass appears **only** as thin rules, outlines and small
caps — there is no brass fill above the fold. Do **not** adopt the white ground or the window chrome.

The screenshot cannot show the project names, because the reference hides every caption behind `opacity-0` +
hover. That is exactly why the spec lists them (`Linden House / Lincoln Park`, `Walnut Court / Oak Park`,
`Harper Loft / West Loop`).

## Section-by-section fidelity notes

### 0 — Header

Three zones (3 labels · wordmark · 2 labels + CTA) with two independent scroll behaviours stacked on the same
element: the kit adds `shadow-lg` past **50 px** on `[data-header]`, and the page's own 274 B script sets a
`data-stuck` **attribute** past **80 px** on `[data-onyx-header]`. Only `data-stuck` produces the visual
state that matters — `data-[stuck]:fixed data-[stuck]:bg-ink-900/95 data-[stuck]:backdrop-blur` — so the
absolute→fixed flip happens 30 px after the shadow appears. Reproduce both; the 30 px lag is perceptible.

The nav is `xl` (1280) while the height step is `lg` (1024): between those widths the header is a wordmark and
a hamburger at 97 px. That is correct, not a bug — a five-label split nav with a centred wordmark needs the
width.

The wordmark is a **text SVG** (`viewBox 0 0 180 42`, `<text>` in Playfair Display + Manrope, `fill #EDE9E0`,
an 86 × 1 `#C9A227` rule), and `logo.svg` / `logo-light.svg` are byte-identical — there is no dark/light logo
pair, just one asset used twice. Because it is live text, **the wordmark inherits the webfont**: if Playfair
Display fails to load, the header logo falls back to Georgia and looks wrong. Which is another reason the
`<link>` must be `preconnect`ed and the font request must not be blocked.

### 1 — Hero

`min-h-[70vh] lg:min-h-[88vh]`, `items-end` (bottom-aligned), copy column `pb-16 pt-32 lg:pb-24 lg:pt-40`. The
`pt-40` (160 px) exists to clear the 97 px absolute header — keep it, or the eyebrow collides with the logo.

The overlay is `bg-ink-900/65`, i.e. a **wash**, and the hero photograph is the same image as portfolio card 1
(`photo-1620626011761…`) and as the "after" frame in the compare band. One building appears three times across
the page; in the recreation that becomes the **same picsum seed** used three times, so the page still reads as
"this is one room, before, after, and in the portfolio".

At 320 the band grows to 640 px because `70vh` (560) is shorter than the copy column — the reference does
**not** clip, and neither should the recreation.

### 2 — `#portfolio`

Three 4:5 cards, `gap 24` at `lg`, `gap 16` below; measured 389 × 487 at 1440. The hover state is a
`bg-ink-900/55` scrim fading in with a `scale-[1.03]` image transform over 500 ms, and the caption is a
**Playfair 18** name over a 12/600 `+0.18em` brass city line.

Two things to fix rather than copy: the third card leaves a **171 × 214 hole** at 390 (`grid-cols-2` with
three items), and the captions are invisible to a pointer-less reviewer. Keep the hover scrim, add
`focus-visible` parity (the reference already has it), and let the last card span both columns below `lg`.

### 3 — Compare band (no `id`)

The page's most distinctive interaction: a `figure` with the *after* image clipped by
`clip-path: inset(0 0 0 50%)` and a 2 px `white/90` divider at `left: 50%`, driven by a full-width range
input sitting at `bottom-4`, `w-[85%]`. The range is `accent-white` (so the thumb is a plain white pill) and
its label is `sr-only`: *"Reveal the finished work"*.

The caption chips (`Before` / `After`) are `pointer-events-none` and sit **above** the images at `top-0 p-4`,
so a real product would want them anchored to the divider's sides. Reproduce as authored; this is one place
where the reference's staticness is the design (nothing moves but the clip).

Note the arithmetic in the copy: eleven weeks is justified **structurally** ("the wet room floor was built up
over the existing joists rather than cut into them"). That sentence is the design's proof — keep it.

### 4 — `#process`

The **serif→sans switch happens here**: `#portfolio` and the compare band use Playfair 400 `h2`, `#process`
and `#testimonials` use **Manrope 700 with `−0.9 px` tracking**, then `#contact` returns to Playfair. If one
face is used for all five, the page's rhythm disappears and nothing else explains the difference.

The step header is a numeral plus a **flex-1 hairline** (`h-px bg-white/15`) that runs to the column edge —
that rule is the band's only structural device and it must stretch, not sit at a fixed width.

The three meta lines answer three different questions (`From $300, credited` / `Two to three weeks` /
`6 - 14 weeks`), so the columns end at different heights. Do not equalise them.

### 5 — `#owner`

Centred on `max-w-3xl`, and the only band with a **portrait**. The lead is the page's second-largest type
(Playfair 30/37.5, 24 px at 390) and it carries the studio's origin story; the two body paragraphs then do the
scarcity argument and the anti-cheapness argument in that order. The signature (Playfair 20) + city line
(12/600 `+0.18em` `ink-300`) pair is what makes the band read as a letter rather than a feature block.

`More about the studio` is the page's **only underlined** action (`border-b border-primary-500 pb-1`), measured
193 × 21. Every other action is a box or a pill; this one is an editorial link.

The paragraph class list is `text-ink-200 … text-white` — a duplicate colour whose winner is decided by sheet
order (measured white). Emit one colour class.

### 6 — `#testimonials`

The only **cool** band (`#111827`) and the only band with **reveal animation** (five `[data-animate]`
elements: pill, `h2`, lead and both cards, delays 0 / 100 / 200 / 100 / 200 ms).

Two cards of unequal height (488 and 376) because the quotes are 68 and 48 words — and the heading says so:
*"Two long ones rather than six short ones."* A recreation that trims them to a sentence each has deleted the
argument. Keep both quotes at full length.

The carousel is **dormant at desktop**: per-view 3 against 2 slides ⇒ `maxIndex 0` ⇒ no dots, arrows
`display:none`, and a 406 px empty third of the track. Centre the pair (documented fix) or the band looks
like a broken slider.

The `text-white` blockquote inside a `bg-white dark:bg-gray-800` card has **no `dark:` prefix** — legible only
because the theme is pinned. That is the clearest evidence that the design is dark-only by construction, not
by preference.

### 7 — `#contact` and the merged form

430 px, centred, and much quieter than the rest of the page: Playfair `h2`, one lead sentence, two CTAs
(242 × 50 brass outline + 217 × 50 white outline, `rounded-lg`, stacked full-width below `sm`). There is **no
form** on the reference's home page — the enquiry lives on `/contact`, four fields, with two placeholders
left over from a coworking template.

The single-page merge (spec §D2) puts that form under the two CTAs and rewrites the placeholders
(`Which room?`, `Tell us about the property, the timeline and what is not working`). Everything above the form
stays byte-faithful.

### 8 — Footer

12-column plate, 4 / 5 / 3: brand (wordmark, blurb, three social chips with **dead `#` hrefs**, address,
phone, email), three link columns (141 px each), then a `Licensed` column with the licence sentence and a
**full-radius brass phone pill** — the only pill-shaped *action* on the page.

Two contact links point at the same number with two different hrefs, one of them invalid
(`tel:(555) 010-0244`). Emit one.

The reference's bottom bar is `© 2026 Onyx. All rights reserved.` + `Privacy Policy` / `Terms of Service`.
Ours replaces the three dead social chips with the **Component Dock** link required by AGENTS.md rule 5 and
keeps the bottom bar structure.

## Source → React adaptation table

| Reference (Astro/Tailwind) | Recreation (React 19 + Vite + TS) |
| --- | --- |
| `<html class="dark">`, no toggle | pinned dark palette in `@theme`; no theme context at all |
| `data-onyx-header` + inline 274 B script | `useStuck(threshold)` hook in `Header`, `data-stuck` attribute preserved |
| `data-before-after` + 407 B script | `<BeforeAfter>` with `useState<number>(50)`; clip-path + `left` derived during render |
| `[data-carousel]` kit (per-view 3/2/1) | `<Carousel>` with a `useMediaQuery`-free `ResizeObserver`/`matchMedia` per-view, arrows/dots derived from `maxIndex` |
| `[data-animate]` + IO reveal (5 nodes) | `<Reveal delay={n}>` wrapper, bails out under reduced motion |
| `dataRange` → `clipPath` string | same string, but built from `value` in render (no effect) |
| cookie strip: inline `translateY(100%)` + kit init | `<CookieConsent>` initialised from `localStorage` in a lazy initialiser |
| preloader removed on `load` | `loaded || document.readyState === 'complete'` derived (per `docs/conventions.md`) |
| `.section`, `.container`, `.btn`, `.card` (kit) | keep only `.section` semantics via utilities; the page's own buttons are utility strings |
| 7 Unsplash photographs | `https://picsum.photos/seed/patina-<n>/<w>/<h>` at the reference's intrinsic sizes |
| text-SVG wordmark | inline `<svg>` with the same `viewBox`, Playfair/Manrope text and brass rule |

## Sibling comparison (same 2026 Astro family)

| | `conduit` (Nodig) | `nightwatch` (Nightshift) | **`patina` (Onyx)** |
| --- | --- | --- | --- |
| ground | warm off-white, terracotta | light, single accent | **near-black + brass, dark pinned** |
| display type | Inter everywhere (serif only inside an SVG) | sans | **Playfair for 3 of 5 `h2`s, Manrope for 2** |
| hero payload | 3-field survey card | square-footage calculator | **photograph + 4-line copy, no form** |
| interactive core | comparison table (static) | estimator arithmetic | **drag-to-compare clip slider** |
| forms on the page | 1 (inert) | 1 (working estimator) | **0 — the form lives on `/contact`** |
| testimonial device | 3-card carousel, stock greys | reviews grid | **2 long quotes under a self-aware heading** |
| inline page script | none | estimator only | **3 bodies (header, compare, preloader)** |
| shared kit hash | `e26cc055…` | `e26cc055…` | `e26cc055…` (identical) |
| inner routes | 7 | 8 | **11 (incl. 3 case studies)** |

The lesson from the siblings holds here: the kit is a shared 16 KB bundle full of handlers this page never
binds (`data-faq-toggle`, `data-lightbox`, `data-counter`, `data-billing-*`, `data-blog-*`,
`data-accordion-toggle`, `data-typewriter`, `data-video-modal`). **Do not implement any of them** — the page
has zero hooks for each. Implement only the nine behaviours listed in the spec's §Behaviour.
