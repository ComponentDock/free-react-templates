# Sealwise — design notes

Source: ColorLib **Perimeter** (`perimeter`), live preview `https://preview.colorlib.com/theme/perimeter/`
(HTTP 200, **89,710 B**, read 2026-10-25 with `curl -4`). ColorLib page
`https://colorlib.com/wp/template/perimeter/` (HTTP 200, 112,237 B). Recreation name **sealwise**. Spec:
`openspec/specs/template-sealwise/spec.md`. Tasks: `docs/templates/sealwise/tasks.md`.

A 2026 **Astro + Tailwind 4** build (`/*! tailwindcss v4.3.3 */`, one 61,296 B sheet, the same **16,233 B house
kit — sha256 `e26cc055dec23e63`** — as every other 2026 sibling prep, plus the shared client router) for **a
licensed pest-control company in Charlotte, NC**. The `<title>` is a claim rather than a label — *"Pest control
in Charlotte, priced before you call"* — and the `h1` is the same claim split into a question and an answer:
*"Tell us what you found."* / *"We will tell you the price."*

This is the first trade prep in the set whose **primary content is a price table behind a selector** rather than
a service list, and the first whose "features" are a **nine-row `dl` of visits / price / lead time**. It is also
the first with a **compliance strip** above the header (licence number, certification, county) — the reference
is selling regulated work, and the design says so before it says anything else.

## Structure order (measured at 1440 × 900)

| # | band | id / hook | ground | top | height |
| -- | --- | --- | --- | ---: | ---: |
| — | licence bar, non-sticky | `[data-licence-bar]` | `ink-800 #1a201a` | 0 | 37 |
| 0 | header, sticky | `[data-header]` | `#fff/90` + blur | 37 | 81 |
| 1 | hero: kicker · two-tone h1 · lead · rating · 2 × 2 checklist · quote card | 1st `<section>` | `ink-50 #f5f6f4` | 118 | 668 |
| 2 | nine-pest finder | `#identify` | `ink-900 #0e120e` | 786 | 971 |
| 3 | emergency strip | `#emergency` | `primary-600 #528c1a` | 1,757 | 164 |
| 4 | three plan tiers | `#plans` | white | 1,921 | 970 |
| 5 | diagram + four commitments | `#why-us` | `ink-50 #f5f6f4` | 2,891 | 868 |
| 6 | three numbered steps | `#process` | white | 3,759 | 564 |
| 7 | fourteen towns | `#areas` | white | 4,323 | 513 |
| 8 | three quotes | `#testimonials` | `gray-50 #f9fafb` | 4,836 | 768 |
| 9 | five questions | `#faq` | white | 5,604 | 820 |
| 10 | closing band | `#contact` | `primary-700 #426e18` | 6,424 | 412 |
| 11 | footer, 4 zones + bottom bar | `<footer>` | `gray-900 #111827` | 6,836 | 543 |

Document height: **7,379** px at 1440 **and** 1280 · **7,705** at 1024 · **9,578** at 768 · **9,762** at 640 ·
**11,687** at 390 · **12,637** at 320. Header **81** px at ≥1024, **65** below. Chrome outside the flow:
`#preloader`, `#scroll-progress` (2 px), skip link → `#main-content`, `#cookie-consent` (87 / 147 px),
`#back-to-top` (48 px), `[data-sticky-call]` (97 px `<1024`, 73 px at 640–768).

## Token reference block (paste into `apps/sealwise/src/index.css`)

```css
@theme {
  /* warm, green-cast neutral — text, grounds, rules */
  --color-ink-50:  #f5f6f4;
  --color-ink-100: #e7eae5;
  --color-ink-200: #ccd2c8;
  --color-ink-300: #a4ae9f;   /* placeholders only */
  --color-ink-400: #76826f;
  --color-ink-500: #566151;
  --color-ink-600: #3d473a;
  --color-ink-700: #2b332a;
  --color-ink-800: #1a201a;
  --color-ink-900: #0e120e;

  /* the only hue on the page */
  --color-primary-50:  #f2fbe9;
  --color-primary-100: #e1f6cc;
  --color-primary-200: #c4ec9c;
  --color-primary-300: #a2de66;
  --color-primary-400: #84cc3c;
  --color-primary-500: #69b024;
  --color-primary-600: #528c1a;
  --color-primary-700: #426e18;
  --color-primary-800: #375818;
  --color-primary-900: #2e4917;

  --font-sans: "Outfit", system-ui, sans-serif;
  --radius-lg: 0.5rem;   /* buttons, inputs */
  --radius-xl: 0.75rem;  /* pest tabs */
  --radius-2xl: 1rem;    /* cards, panels */
}

.shadow-soft { --tw-shadow: 0 4px 16px -4px var(--tw-shadow-color, #0000001a); }
```

The testimonial band, the FAQ chrome and the footer use **stock `gray`** on purpose: `gray-50 #f9fafb`,
`gray-100 #f3f4f6` (discs), `gray-200 #e5e7eb` (dividers), `gray-400 #9ca3af`, `gray-500 #6b7280`,
`gray-600 #4b5563`, `gray-800 #1f2937`/`gray-900 #111827`, `gray-950 #030712` (dark body). **`ink-50` and
`gray-50` are 6 units apart per channel and both are on the page** — using one where the reference uses the
other is the most likely invisible-but-wrong mistake in this design.

## DOM skeleton (index, in order)

```
div[data-licence-bar]                     ← 37px, ink-800, 3 pairs + stars/4.8/520+
header[data-header]                       ← sticky, 81/65px, wordmark + nav(xl) + pills + toggle + CTA + burger
  div[data-mobile-menu].hidden
div#preloader  div#scroll-progress        ← chrome, outside <main>
canvas… actually:
main#main-content
  section.bg-ink-50                       ← hero: grid lg:grid-cols-12, left col-span-7 / right col-span-5
    div#quote                             ← white card 469×508, form[data-form]
  section#identify[data-pestfinder].bg-ink-900
    div.grid.lg:grid-cols-12
      div.lg:col-span-7                   ← 9 × button[data-pest-tab], grid-cols-2 sm:grid-cols-3
      div.lg:col-span-5                   ← 9 × div[data-pest-panel], 8 of them .hidden
  section#emergency.bg-primary-600        ← dot + copy + a[data-phone]
  section#plans.section.bg-white
    div.grid.lg:grid-cols-3               ← 3 cards (middle: border-primary-600 shadow-md + badge)
  section#why-us.section.bg-ink-50
    div.grid.lg:grid-cols-2               ← figure (order-last lg:order-first) + dl (4 dt/dd)
  section#process.section.bg-white
    ol.grid.sm:grid-cols-3                ← 3 li: numeral + h-px hairline + h3 + p + duration
  section#areas.section.bg-white
    div.grid.lg:grid-cols-12              ← text col-span-5 / ul col-span-7 (14 towns, 3 cols)
  section#testimonials.bg-gray-50
    div[data-carousel]                    ← track + 3 slides + prev/next + dots
  section#faq.bg-white
    div.divide-y.divide-gray-200          ← 5 × div.py-6 (button[data-faq-toggle] + p)
  section#contact.bg-primary-700          ← h2 + p + 2 CTA
footer.bg-gray-900                        ← 12-col 4/5/3 + bottom bar
div#cookie-consent  button#back-to-top  a[data-sticky-call]
```

## Screenshot analysis (`perimeter-template.jpg`, 2400 × 1892, 322,715 B)

**A marketing composition, not a browser capture**: the page sits inside a rounded **macOS-style browser
frame** (three traffic lights, empty URL bar) on a **white ground with a soft drop shadow**. The frame and the
ground belong to ColorLib's catalogue tile — **never adopt them**. Inside the frame, ~1,900 px of the page at
roughly 1,080 CSS px wide: licence strip → header → hero → the top of the finder.

Read from the image: the **dark licence strip** spans edge to edge with the licence number on the left and a
small gold-star cluster plus "4.8 · 520+ reviews" at the far right; the **white header** carries a small dark
square wordmark with a dotted lime inner square, seven centred links in medium grey, two outline pills, a moon
glyph and one solid green CTA; the hero's **off-white ground** holds a very heavy two-tone headline (near-black
sentence one, green sentence two) at roughly 60 px, a grey lead at ~max-56ch, four green checkmarks in a 2 × 2
grid, and the white quote card at 16 px radius with a **full-width green submit**; the finder band's near-black
is visibly the darkest surface on the page, with the lime "START HERE" kicker the only saturated text there and
a 3 × 3 tab grid whose selected cell shows a lime outline and a faint lime wash.

## Section-by-section fidelity notes

### Licence bar + header

- The bar is **not sticky** — it scrolls away and the header sticks to the top. A recreation that makes the bar
  sticky loses 37 px of viewport permanently.
- The review line is a **sample marker** (`520+ reviews on Google (sample)`); keep one such marker on the page,
  not five.
- The nav breakpoint is **1280 (`xl`)**, not 1024. This is the design's most easily-missed breakpoint; at 1024
  the reference shows a hamburger while the header is still 81 px tall.
- Wordmark geometry: 200 × 40 viewBox → 32 px tall (`h-8`) → 36 px (`lg:h-9`). The dashed inner square
  (`stroke-dasharray="4 3"`) is the brand's whole idea — a *perimeter*, drawn. Keep it, redraw it, but keep the
  dash.

### Hero

- The `h1` is one `<h1>` with a `<span>` for the second sentence; the span is `primary-600`. 683 × 132 at 1440
  means it breaks as two sentences across ~2 lines — do not set it as two headings.
- The checklist is `grid gap-3 sm:grid-cols-2`, i.e. **4 cells of 335 px at 1440** and 2 columns at 390.
- The quote card is the page's only `shadow-md` in the hero: `rounded-2xl border-ink-100 bg-white p-8` at
  `lg`. Inputs are 50 px tall (select 48), submit 52 — the submit is deliberately **taller than the fields**.
- The card's heading is an `h2` ("Prefer to just ask?") *inside* the hero — keep the heading level even though
  it looks like a card title.

### `#identify` — the finder

- Tabs are **`aria-expanded`-driven**, not class-driven: the styling hinges on
  `aria-expanded:border-primary-400 aria-expanded:bg-primary-400/10` and
  `group-aria-expanded:text-white`. Port the pattern with React state + the attribute, not a `selected` class.
- Nine tabs in 3 columns at ≥640 and 2 below; **9 is not divisible by 2**, so the last row at 390 holds one
  tab — the reference leaves it ragged, so do the same (no centring, no placeholder cell).
- The panel is `bg-white/5` on `ink-900` with a `white/10` border — a 5 % white wash, not a solid card. Ship it
  as `bg-white/5` (Tailwind 4 handles the alpha).
- The `dl` is the content: `dt` 14 px `white/50`, `dd` `font-semibold` right-aligned, **price in
  `primary-300`**. It is the only place in the design where a price is not `ink-800`.
- Panel height varies per pest (507 px for ants at 1440, 20 px less for roaches) — the band's height is
  content-driven; do not fix it to 971.

### `#emergency`

- 164 px tall, and the **only `rounded-full` CTA that is not a pill-shaped text link** — the phone button is
  211 × 52 with 18 px bold text in `primary-700` on white.
- The dot is `relative flex h-2 w-2` with an `animate-ping` outer span (`opacity-60`) and a solid inner span;
  both `bg-current` so they inherit the white. Under reduced motion, keep the solid dot, drop the ping.

### `#plans`

- Three 389 px cards, 442 px tall, `p-6`, 16 px radius. The middle card is the only one with `shadow-md` and the
  only one with a badge; the badge is what makes it 44 px taller when stacked.
- Prices are 30 px/700 with the unit at 14 px `ink-400` **baseline-aligned** (`flex items-baseline gap-1`).
- Feature rows are `space-y-2.5` with a check glyph — 4 / 5 / 4 features, so the CTAs do **not** align across
  cards at 1440; the grid stretches the cards, not the button positions.

### `#why-us`

- Figure first on `lg` (`order-last lg:order-first`) — a 4:3, 16 px-radius image followed by a 14 px caption.
- The reference image is a **diagram**, so the recreation owes the viewer an original diagram (dashed lime
  perimeter around a house on `#0E120E`) rather than a stock photograph. A `picsum` placeholder is the
  fallback, and the caption tells the client to replace it either way.
- The four `dt/dd` pairs are the section's payload: bold 16 px claim, 16/24 grey paragraph. Keep all four and
  the order.

### `#process`

- The **hairline is a `span`, not a border**: `h-px flex-1 bg-ink-100` in an `items-baseline gap-3` row with the
  `01` numeral. It reads as a rule that grows to fill the cell — a border-bottom cannot reproduce it.
- Numerals are `tabular-nums`; durations are `text-sm font-semibold primary-700`, not body copy.

### `#areas`

- 5/7 split with the list on the right. 14 towns → 3 columns, so the last row has two items and the third cell
  is empty; keep the ragged end.
- Items are separated by `border-b border-ink-100` only — no bullets, no icons, no cards.

### `#testimonials`

- At 1440 this is **a static three-up row**: 3 × 405 = 1,216 px track, 0 dots, arrows `display:none`. The kit
  computes `maxIndex = slides - perView = 0` and hides everything. Any of the three "fixing" instincts
  (add dots, show arrows, make it draggable) is a fidelity regression.
- Below 1024 it becomes a real carousel: 2 dots at 768, 3 at 390, 32 px active dot / 10 px idle, 5 s
  auto-advance, pause on hover.
- Cards are `shadow-soft` (4 px / 16 px, 10 % black), not `shadow-md` — visually softer than the hero card.

### `#faq`

- Rows are `py-6` inside a single `divide-y divide-gray-200` wrapper, so the first row has no top rule and the
  last no bottom rule.
- The disc is 32 px of `gray-100` holding a chevron/plus that rotates 45° and is `transition-transform
  duration-200`. The reference writes `max-height`/`opacity` inline (`88px` for the open first answer at 1440)
  rather than using a `hidden` class — reproduce the animation, not the inline styles.
- **`aria-expanded` is missing on the reference**; add it and `aria-controls`.

### `#contact`

- `primary-700` — a full step darker than `#emergency`'s `primary-600`. The page closes on the darkest green it
  owns; do not unify the two bands.
- Both CTAs are 56 px tall; the outline one is `border-2 border-white/40` (2 px, 40 % white), the filled one is
  pure white with `primary-700` text.

### Footer

- `gray-900`, not `ink-900` — the footer is a **cool** black against the finder's warm near-black. Side by side
  the difference is subtle; at a glance it is not there at all, which is why it is easy to get wrong.
- 12 columns: 4 (brand) / 5 (three link columns, `sm:grid-cols-3`) / 3 (newsletter).
- The newsletter row is where the reference **breaks the page at 320** (see below) — the fix belongs here.

## Source → React adaptation table

| reference | recreation |
| --- | --- |
| `logo.svg` / `logo-light.svg` (`<img>`, two elements toggled by `dark:hidden`) | one `Wordmark` component with a `tone` prop (`dark` default, `light` for footer + dark header); inline SVG, no asset |
| `assets/img/why-panel.svg` (800 × 600 reference art) | original inline SVG diagram (or `picsum.photos/seed/sealwise-1/800/600`); never the source file |
| nine `[data-pest-tab]` buttons + nine `[data-pest-panel]` divs, `hidden` class toggling | `PESTS` typed array (`slug, label, hint, lead, visits, price, eta, covered, planNote`) → `PestFinder` renders tabs + the single active panel |
| 469 B inline module toggling `aria-expanded` + `hidden` | React state (`useState<string>('ants')`), `aria-expanded` on tabs, `role="region"` + `aria-labelledby` on the panel |
| 14 `[data-animate]` elements with `data-delay` | `<Reveal delay={ms}>` wrapper; no-ops under reduced motion |
| `form[data-form] action="#" method="post"` (no handler) | controlled `QuoteForm` with validation + success state, no network |
| footer newsletter `<input>` (causes the 320 overflow) | `min-w-0` + `size={1}` + `w-full`, stacked below `sm` |
| `data-carousel` kit behaviour | `useCarousel` hook: per-view from a `matchMedia` listener, `maxIndex`, dots, 5 s timer |
| `#service-areas` anchors (dead) | `#areas` |
| `tel:5550400400` ×5 + `tel:(555) 040-0400` ×1 | one `TEL = '+15550400400'` constant |
| `© 2026 Perimeter Pest Control …` + Privacy/Terms | `Made with Component Dock` → `https://www.componentdock.com/` |
| JSON-LD `{"@context":"https://***@type":…}` (does not parse) | omit, or emit a valid `LocalBusiness` block for Sealwise |

## Sibling comparison — what is different about this design

Against the other 2026 Astro preps in this set:

1. **A compliance strip above the header** — 37 px of licence/certification/county before any marketing. It is
   the only sibling with a band above the sticky header, and it changes the scroll maths for every anchor.
2. **The dark band is the selector, not a services list.** Siblings put a priced list or a statistics band on
   their near-black surface; here it is a nine-state `dl` whose content changes on click, with the state living
   in `aria-expanded`.
3. **Two greens as bands** — `primary-600` (emergency, 164 px) and `primary-700` (contact, 412 px) are 90 px
   apart in the document and deliberately different shades. The sibling preps use one dark band and one
   accent band; this one uses the same hue twice at two values.
4. **`ink` + `gray` in the same page.** The first four bands and every structural rule are `ink`; the last three
   bands and all chrome are Tailwind `gray`. No sibling mixes the two this way.
5. **The one image is a diagram with an instruction in its caption** (*"Replace with a photograph of your own
   technician and van before launch."*) — the design tells the buyer what to swap, which is a content decision
   worth keeping.
6. **The carousel's 1440 state is a static row** — same idiom as the Makeready prep (3 × 405 = the track), so
   the "0 dots / hidden arrows" rule is now confirmed on two independent designs in this family.

## Measured defects to fix (not reproduce)

1. **389 px document width at every viewport below 390.** `scrollWidth` is 389 at 320/340/360/375. Chain: footer
   newsletter `input` intrinsic **263 px** + 8 px gap + Subscribe button **102 px** = **373 px** min-content →
   the footer grid item cannot shrink below it inside a **343 px** track → the document is 389. Fix in the
   recreation with `min-w-0`, `size={1}`, `w-full` on the input (or stack the row below `sm`).
2. `#service-areas` ×2 point at an id that does not exist (the band is `#areas`).
3. The hero form posts to `#` with no handler; user input is silently discarded.
4. FAQ buttons have no `aria-expanded`/`aria-controls`.
5. The JSON-LD block does not parse (`"@context":"https://***@type"`).
6. `og-image.jpg` 404s; no `sitemap.xml`; `robots.txt` is a 213 B stub.
7. Two `tel:` shapes (one malformed with parentheses and spaces).
8. Three `href="#"` social squares.
9. The "sample" markers repeat four times (*"(sample)"*, *"Sample pricing for demonstration"*, *"Prices are
   illustrative starting points"*, *"Sample reviews for demonstration"*) — keep one, drop the rest.
10. Tier and company names are the source's brand (`Perimeter Plus`, address, `office@perimeterpest.example`) —
    rename all of them (AGENTS.md rule 5).
