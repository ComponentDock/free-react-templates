# Hedgerow — Design Notes

Recreation of ColorLib **"Groundwork"** — https://colorlib.com/wp/template/groundwork/, live preview
https://preview.colorlib.com/theme/groundwork/. App: `apps/hedgerow`
(`@free-react-templates/hedgerow`). Read this with `openspec/specs/template-hedgerow/spec.md`
(requirements + exact readings) and `docs/templates/hedgerow/tasks.md` (build order).

**The one-line brief:** a pale-green garden practice page that argues in **seasons and budgets** —
green `primary` on warm stone `accent`, a **sans 60 px hero** over **serif 36 px band headings**, one
photograph (framed, in the hero), four cards per band, and a near-black maintenance band whose middle
tier is the only filled card.

## Reference set (all read 2026-10-25, `curl -4`)

| artefact | bytes | sha256 (first 8) |
| --- | ---: | --- |
| `theme/groundwork/` (DOM authority) | 81,096 | `3b67f05d` |
| `_astro/Base.BvcOmSDk.css` (token authority, Tailwind 4) | 63,707 | `5ab9ef9f` |
| `_astro/…BLoalVWc.js` (house kit — same hash as nine siblings) | 16,233 | `e26cc055` |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | `69eb3ac5` |
| inline `<style>` (Fraunces + DM Sans, 20 faces, `/cf-fonts/…`) | 6,496 | — |
| inline scripts: `applyTheme` · JSON-LD · preloader teardown | 442 · 159 · 358 | — |
| `assets/img/logo.svg` · `favicon.svg` | 561 · 377 | `fa64d579` · `5d183df4` |
| catalog screenshot `groundwork-template.jpg` (**JPEG**, 2400×1892) | 430,624 | `07e3c4db` |
| `colorlib.com/wp/template/groundwork/` | 111,771 | `5ba19bda` |

`css/style.css`, `js/snippet.js`, `downloads/free/groundwork.zip` and `og-image.jpg` are **404** —
Astro build, no archive twin. Every bare inner route answers **308** → `/<route>/` → 200.

## Document order

```
#preloader                     fixed inset-0 z-100 bg-white, 40px animate-spin ring; removed on load
skip link                      sr-only focus:not-sr-only → #main-content
#scroll-progress               fixed top-0 left-0 z-60 h-0.5 (2px) bg-primary-600
header[data-header]            sticky z-50, h-16 → lg:h-20 (81px), bg-white/80 backdrop-blur-lg
                               logo · 8 nav links (lg+) · moon toggle · solid CTA (sm+) · hamburger
[data-mobile-menu]             hidden lg:hidden, border-t; 8 block rows + full-width CTA
section (hero, no id)          bg-gradient-to-b from-primary-50 to-white, 2 parallax blobs
                               container py-20 lg:py-32 (80/128px), inner max-w-4xl CENTRED
                               badge + ping dot · h1 60px/700 + .text-gradient typewriter
                               lede 20px · [solid CTA] [ghost CTA] [Watch Demo disc+label]
                               stat strip (border-t, pt-10): 180+ | 14 yrs | 92% | RHS  ← static
                               framed photo max-w-5xl, 2:1, rounded-2xl shadow-2xl ring-1
section (counters, no id)      bg-gray-50 border-y py-16 lg:py-20 (238px)
                               4 × data-counter (ship 0) → 180 | 14 | 92% | 3
section#work                   bg-accent-50 #fafaf9 py-20 sm:py-28 (1,641px), max-w-7xl
                               centred header (dark chip + serif h2 + lede)
                               3 × article grid lg:grid-cols-2 gap-8 (ONLY #2 has order-2 figure)
                                 figure: 2 × aspect-[3/4] frames + Before/After chips
                                 overline · serif h3 · 2 paragraphs (bold lead-ins) · 3-cell dl
section#planting               white py-20 sm:py-28 (925px), max-w-6xl, LEFT header (pale chip)
                               6 cards grid gap-4 sm:2 lg:3 (352×193) + green-ruled callout
section#calendar               white py-20 sm:py-28 (893px), max-w-7xl, CENTRED header
                               4 cards grid gap-5 sm:2 lg:4 (289×383), header tints 100/100/700/800
                               centred max-w-3xl footnote under the grid
section#maintenance            bg-accent-900 #1c1917 text-white py-20 sm:py-28 (1,032px), max-w-6xl
                               centred header (primary-600 chip) + 3 tiers rounded-3xl p-7
                                 middle: bg-primary-600 ring-2 ring-primary-400, white CTA
                               centred note under the cards
section#testimonials           bg-gray-50 py-20 lg:py-28 (740px), container
                               centred pill (text-sm, NOT uppercase) + SANS h2 + carousel
                               3 slides (405×292), 3/2/1 per view, arrows hidden at lg
section#faq                    white py-20 lg:py-28 (820px), container, list max-w-3xl
                               centred pill + SANS h2 + 5 divided rows (768×81), 45° plus disc
section#contact                bg-gradient-to-br primary-600 → primary-800, dot grid + 2 blobs
                               py-20 lg:py-28 (500px), centred max-w-3xl
                               h2 48px/700 white + lede + [white solid] [border-2 white/30 ghost]
footer                         bg-gray-900 pt-16 lg:pt-24 (568px), 12-col grid 4 / 5(nested 3) / 3
                               brand + 3 social tiles + address/phone/email
                               Spaces(REPLACE) · Company · Support · Stay Updated (form)
                               bottom bar: © + Privacy / Terms / Style Guide
#mobile-cta                    fixed bottom-0 z-40 lg:hidden, 69px: Call Now + solid CTA
#cookie-consent                fixed bottom z-50, slides up 1.5s, Decline + Accept All
#back-to-top                   fixed bottom-6 right-6 z-50, 48px disc, after 300px
```

## Section-by-section fidelity notes

**Hero.** Two decorative blobs, `blur-3xl`, 500 px and 400 px, both `aria-hidden` and both carrying
parallax factors. The badge is a pill with a **pulsing dot**: an `animate-ping` `primary-400` ring at
`opacity-75` over a solid `primary-500` 8 px dot. The `h1` is **two blocks separated by `<br>`**, the
second inside a `.text-gradient` span — that span is the typewriter target, so the text swap must not
change the gradient. The lede is the only 20 px body copy on the page. The three controls are: solid
CTA, ghost CTA, then a **48 px disc + label** (the video trigger) — not a third button in the same row
style. The stat strip is **static text** (`180+`, `14 yrs`, `92%`, `RHS`) and repeats the counter
band's numbers in a different voice — that duplication is in the reference (see "traps").

**Counter band.** Four numbers, `text-4xl lg:text-5xl` (36 → 48 px), `primary-600`, animating from 0
over 2 s. The reference ships literal `0` in the HTML; the recreation renders the real figure and
animates the visual, so no band of zeros is ever painted.

**Portfolio.** The section is on `accent-50`, not white — that warm ground is what separates the
"proof" band from the two white argument bands on either side. Only the **second** article carries
`lg:[&>figure]:order-2`; in Tailwind 4 that arbitrary-variant child selector is the cheapest way to
keep the DOM order (figure first) while flipping the visual. Chips are 10 px uppercase, `accent-900/85`
before and `primary-700` after. The `<dl>` is three equal columns under a 1 px rule, and the **budget
is the only coloured value**. Do not alternate all three rows.

**Planting.** Header is **left-aligned** while the next band's is centred — that alternation is
deliberate. Cards are short (`p-5`, 352 × 193): name and tag share a baseline row, the latin name is a
single italic line, and the three-row `<dl>` is the card's body. The callout at the bottom is a
`rounded-2xl` panel with a **4 px `primary-600` left border** on `primary-50` — the same device the
Emberly sibling uses, in a different colour.

**Calendar.** The design's centrepiece and its clearest argument: the four header tints **darken as the
year darkens** (`primary-100`, `accent-100`, `primary-700`, `accent-800`). Four items per card, each a
6 px `primary-500` dot plus a sentence. The month line is 12 px, uppercase, `opacity-80` inside the
header — it inherits the header's text colour, so on the two dark headers it is white-on-green and
white-on-stone. The footnote below the grid is centred, 14 px and narrow on purpose.

**Maintenance.** The only near-black band (`accent-900 #1c1917`, warmer than the footer's `gray-900` —
they are *not* the same black; side-by-side they differ). Cards are `rounded-3xl p-7`, which is a
larger radius than anywhere else on the page. Middle card filled `primary-600` with a 2 px
`primary-400` ring, `primary-200` ticks and a **white CTA with `primary-700` text**. Body copy is
`accent-300`, never grey. The tick list is `flex-1`, which is what makes the three CTAs align — keep it
or the cards stagger.

**Testimonials.** This band's header is **sans** (`DM Sans 700`) and its pill uses the 14 px
`font-medium` treatment rather than the 12 px uppercase chip used by the three bands above. Stars are
`primary-400` (not amber). The carousel is inert on desktop by design: three slides × three per view =
nothing to scroll, so arrows are hidden and **no dots are rendered**; below 640 px it becomes one-up
with arrows and three dots. Autoplay 5 s, pause on hover.

**FAQ.** Five rows, `divide-y`, `max-w-3xl`, plus-disc that rotates 45°. The reference never exposes
`aria-expanded`/`aria-controls`; add both. The panel is a `max-height` transition (`duration-300`), not
`<details>` — keep the visual behaviour.

**Closing band.** The page's only gradient *band* and its only dot pattern: a 1 px white radial at a
40 px pitch, `opacity-10`, over `primary-600 → primary-800` diagonally, with two white `blur-3xl` blobs
at the corners. The `h2` steps up to **48 px** here (the largest `h2` on the page). The ghost button's
glyph is a **phone** while its label says "see what a plan includes" — a source mismatch; the spec lets
the implementer keep or replace it but demands the choice be stated.

**Footer.** 4 / 5 / 3 across twelve columns, with the middle block itself a `sm:grid-cols-3`. Column
heads are 14 px semibold uppercase white. Social tiles are 40 px `rounded-lg bg-gray-800 p-2.5`
squares. The email field is `border-gray-700 bg-gray-800` with a `primary-500` focus ring. **The
`Spaces` column is leftover coworking copy and four broken `#spaces` links — replace the column.**
Every footer needs the Component Dock link (AGENTS.md rule 5).

**Mobile bar.** Fixed, 69 px, `z-40`, two equal-width controls: a grey chip with a phone glyph and a
solid primary CTA. It sits *under* the cookie strip (`z-50`), which is why the cookie must not be
`bottom-0` with a lower z-index. Label must not be the reference's `Book a Tour`.

## Traps that cost time on this design

1. **The hero's stat strip is not a counter.** `180+ / 14 yrs / 92% / RHS` is plain text; the animated
   `180 / 14 / 92% / 3` band is a *separate section* two blocks later, with different labels
   (`Gold medals at regional shows` vs `RHS / Trained`). Two number blocks, two different sets of
   labels — reproduce both, do not merge them.
2. **Reveal arms only what is below the fold.** The kit skips any `[data-animate]` whose top is above
   `0.8 × innerHeight` at load, so the hero never fades. If the recreation animates everything, the
   hero flashes — a visible regression against the reference.
3. **`h2` face splits mid-page.** Fraunces on four bands, DM Sans on two plus the closing band. A
   single `font-serif` on every `h2` is the most likely "looks almost right" failure.
4. **Four `h3` sizes**: 24 (work), 18 (plants), 20 (seasons), 24 (tiers). One global `h3` size breaks
   three bands.
5. **Four eyebrow treatments**: dark chip (`primary-700`, white), pale chip (`primary-100`,
   `primary-800`), solid chip (`primary-600`, white), 14 px pill (not uppercase). Do not normalise.
6. **Only the second portfolio row flips.** A symmetric alternating rhythm is wrong.
7. **The carousel's hidden arrows are correct**, not a bug — three slides fit at ≥1024 px. A test that
   asserts arrows are always present will fail against the reference.
8. **The typewriter holds the gradient.** The span must keep `.text-gradient` while its text swaps; a
   naive implementation that replaces the `<span>` loses `background-clip: text`.
9. **Two black bands, two blacks**: `#1c1917` (maintenance, stone-900) and `#111827` (footer,
   gray-900). Using one for both is a visible temperature shift.
10. **`accent-50` is the portfolio ground only** (one occurrence in the whole document). Everywhere
    else light means white or `gray-50`.
11. **`shadow-soft` is testimonial-only** (three occurrences). Do not sprinkle it.
12. **Copy register.** The reference's voice is specific and unsentimental ("*a thing you finish slowly*",
    "*the most expensive mistake in a garden is a plant in the wrong aspect*"). Paraphrase in that
    register — short declaratives, one concrete number per claim. Generic marketing prose is the most
    obvious way to fail this template.

## Open questions for the implementer

- Does the closing band keep the phone glyph on a non-phone CTA? (Reference: yes. Recommendation: swap
  it for a leaf/arrow and note the deviation.)
- Is there room for a working enquiry form? The landing page has **none**; the inner `/contact` route
  has a four-field one (`Full Name`, `Email`, `Subject`, `Message`). Adding it is a deviation — if
  added, use that exact field grammar and keep it out of the closing band's gradient.
- Should `Journal` map to `#planting` or to a small "notes" strip? The reference has a `/blog` route
  with filters (`data-blog-filters`), which is **out of scope here**.
