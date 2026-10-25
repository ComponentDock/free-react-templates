# Drainwise — design notes

Reference: ColorLib **Metroflow** (`metroflow`), <https://preview.colorlib.com/theme/metroflow/> (HTTP 200,
52,720 B, read 2026-10-25 with `curl -4`). Spec: `openspec/specs/template-drainwise/spec.md` (the
authority). These notes are the *why* behind the spec's numbers, plus the traps.

## Structure order (do not reorder, do not merge)

1. `#preloader` → skip link → `<header>` (sticky, 81 px)
2. hero (`#1d4ed8`, 665 px) — 6/6 split: eyebrow, `h1`, lead, rating, ZIP finder | 4:3 photo
3. `#guarantees` — white, `py-12`, `border-b`; `<dl>` of three promises (341 px)
4. `#services` — white, `py-28`; **one** hairline grid of six cells (855 px)
5. `#locations` — `#f5f6f9`, `py-28`; three branch cards (674 px)
6. counter band — `#f9fafb`, `border-y`, `py-20`; four figures (238 px)
7. `#process` — white, `py-28`; `<ol>` of three numbered steps (564 px)
8. `#testimonials` — `#f9fafb`, `py-28`; centred head + carousel of three (768 px)
9. `#contact` — `#183fae`, `py-28`; centred CTA pair (440 px)
10. footer — `#111827`, `pt-24`; 12-col grid + legal bar (544 px)
11. fixed: cookie strip, back-to-top

Measured heights at 1440 × 900: 81 + 665 + 341 + 855 + 674 + 238 + 564 + 768 + 440 + 544 = **5,170 px**.
At 390 × 844 the document is **8,533 px**. `scrollWidth === clientWidth` at both.

## Token reference block (copy into the app's `@theme`)

```css
@theme {
  /* primary — brand blue */
  --color-primary-50:  #eef2ff;
  --color-primary-100: #dfe6fe;
  --color-primary-200: #c2cefd;
  --color-primary-300: #9badfa;
  --color-primary-400: #6b83f5;
  --color-primary-500: #3f5bec;
  --color-primary-600: #1d4ed8;  /* hero ground, CTAs */
  --color-primary-700: #183fae;  /* contact ground, accents, prices */
  --color-primary-800: #15348b;
  --color-primary-900: #132c70;

  /* ink — blue-slate neutrals */
  --color-ink-50:  #f5f6f9;      /* #locations band */
  --color-ink-100: #e9ebf1;      /* every hairline */
  --color-ink-200: #cfd4e0;
  --color-ink-300: #a6aec4;
  --color-ink-400: #6b7590;      /* licence lines, sample notes */
  --color-ink-500: #4a5369;      /* body paragraphs */
  --color-ink-600: #2f374a;      /* nav links */
  --color-ink-700: #1d2436;
  --color-ink-800: #0b1220;      /* headings */
  --color-ink-900: #060a14;

  --font-sans: "Poppins", system-ui, sans-serif;
  --radius-2xl: 1rem;
  --shadow-soft: 0 4px 16px -4px #0000001a;
}
```

Stock Tailwind greys are used as-is for the counter/testimonial bands (`#f9fafb`), the footer (`#111827`,
dividers `#1f2937`, links `#9ca3af`) and the dark body (`#030712`). Amber appears exactly once, as
`#fbbf24` on the five hero rating stars.

Layout constants: container `max-width: 1280px` + `px-4 lg:px-8` → **1,216 px** of content at 1440;
`.section` = `py-20` → `lg:py-28` (80 → 112). Header inner 64 → 80 px. Breakpoints: `sm 640`,
`md 768`, `lg 1024`, **`xl 1280`**.

## Section-by-section fidelity notes

### Header

- The nav switches at **`xl` (1280), not `lg`** — the reference carries an authored comment saying so. A
  six-label nav plus phone pill plus CTA does not fit at 1024. If you build it at `lg`, the last two labels
  slide under the pill between 1024 and 1279 — exactly the bug the comment describes.
- The same block of comments claims a **city pill at `2xl`**. There is **no city pill in the DOM** (the
  header holds logo, six links, phone pill, dark toggle, CTA, hamburger). Do not invent one, and do not
  copy the comment into the app (it would also carry the source name).
- Logo is an `<img>` pair (`logo.svg` visible in light, `logo-light.svg` in dark), `h-8 lg:h-9` →
  **32 / 36 px**. In dark mode the light logo measures `0 × 0` because it is `display: none` — a
  measurement artefact, not a layout hole.

### Hero

- **The finder is the design.** Everything else in this band is scaffolding for it. Keep the three-part
  field/button geometry (**320 + 180 px at 54 px tall**) and the hidden message slot; a generic contact CTA
  here is a different template.
- The `data-config` JSON is the branch routing table, and the prefixes are **three digits**. `startsWith`
  (not equality) is what makes `92507` match `925`.
- The **rating row mixes colours on purpose**: stars `#fbbf24`, value `white` at 700, note `white / 80`.
  The testimonial stars in band 7 are `primary-400` — two star colours in one page, both authored.
- The photograph is the **only content image** on the page. It is a construction/rebar site (a crew in
  orange among steel), not a domestic plumbing scene. Recreate it as a deterministic placeholder; do not
  "improve" it to a stock tap.
- Text column measures **580 px** and the image **580 × 435** at 1440 with a **56 px** gap; the band is
  `items-center`, so the shorter column floats to the middle rather than the top.

### `#guarantees`

- This is the band most likely to be "tidied" into something the design is not:
  - its `h2` is **30 px with no `tracking-tight`** while all five other band heads are **36 px at −0.9 px**;
  - its eyebrow is **`primary-600` at weight 600**, the others **`primary-700` at 700**;
  - it is a **`<dl>`**, not cards, and the `<dd>` indents **`pl-8`** — under the title text, not under the
    icon;
  - it is `py-12` (**48 px**), half a section, with a `border-b` rather than a ground change.
- The icons are 20 px outline check-circles in `#1d4ed8` with `mt-0.5` to sit on the title's first line.

### `#services`

- **One grid, not six cards.** The wrapper owns `background: #e9ebf1`, `gap: 1px`, `rounded-2xl`, a 1 px
  border and `overflow-hidden`; the cells are plain white rectangles with `p-6 lg:p-8`. Adding a border or
  radius per cell doubles every rule and breaks the "table" read.
- `flex-1` on the blurb is what aligns the six price lines per row. Underline-less links and per-cell
  shadows are not present.
- Three columns at `lg`, **two at `sm`** (not at `md`).

### `#locations`

- The tint is **`ink-50 #f5f6f9`**, deliberately different from the counter band's `gray-50 #f9fafb`. They
  look identical in a screenshot; they are not.
- Card order is **Riverside, Westbridge, Harbor Point** on the index, while the locations *page* lists them
  alphabetically with Harbor Point first. The index is the authority for the index.
- The towns line is `flex-1`, which is what pushes "See this branch" to the card floor so all three align.
- The licence line is the smallest type on the page (**12/16**) and the only uppercase statement outside
  the eyebrows.

### Counter band

- `py-16 lg:py-20` (64 → 80): visibly tighter than every `.section` band (80 → 112).
- The markup ships **`0`** inside each `[data-counter]`. That is the animation seed. Render the final value
  when there is no observer, otherwise a jsdom test asserts `0` and passes for the wrong reason.
- `2 hr` is a **string** counter: the parser strips non-numerics, counts to 2, then restores `"2 hr"`.
  Do not switch it to a formatted number.
- Two columns below `sm` (not one) — `grid-cols-2 sm:grid-cols-4`.

### `#process`

- Numbered with a **rule that fills the remaining width** (`flex items-baseline gap-3` + `h-px flex-1`),
  not with a badge, circle or icon. `tabular-nums` keeps `01/02/03` from shifting.
- Tags at the foot of each step (`Ten seconds`, `On time or free`, `Two-year warranty`) are type-only in
  `#183fae` at 600 — no pill, no background.

### `#testimonials`

- Almost every number here is **JS-authored**, so it is invisible in the CSS: per-view (1024 → 3,
  640 → 2, else 1), slide width (`track.parentElement.offsetWidth / perView`), the `translateX` step, the
  arrow `display`, and the dots themselves (injected into an empty container, **none** when only one
  position exists — hence **no dots at 1440**).
- Arrows carry `hidden … lg:flex` in the markup, but the script overrides `display` inline. At 390 both
  arrows are visible even though the class says `hidden`; a CSS-only reimplementation that trusts the class
  will hide them on mobile, where they matter.
- Autoplay resets on every arrow/dot click and pauses on `mouseenter` of the whole wrapper.
- The three cards are `data-animate` with delays 100/200/300 — which is why a **full-page screenshot of this
  reference shows band 7 completely blank** (measured: the reveal never fires for off-screen elements
  during a `fullPage` capture). Screenshot tooling must scroll or force the revealed state.

### `#contact` + footer

- The contact band has **no form** — only the ZIP CTA pair. Building a contact form here changes the band's
  job (the form lives on the separate `contact/` page in the reference).
- The footer's three social chips are the page's **only three dead anchors** (`href="#"`). The recreation
  must not reproduce that.
- The footer phone is authored as `tel:(555) 010-0180` — spaces and parentheses in a `tel:` URI. Reproduce
  the *look*, not the malformed value.
- Footer grid is 12 columns split **4 / 5 / 3**; the bottom bar is `mt-16 border-t py-8` with 14 px legal
  type, and the Component Dock link belongs in that bar.

## Source → React adaptation table

| reference | React recreation |
| --------- | ---------------- |
| 11 Astro routes (`/services`, `/locations/…`, `/careers`, …) | **single page**; nav + footer → `#services`, `#locations`, `#guarantees`, `#process`, `#testimonials`, `#contact` |
| `<form data-finder-form data-config='{"locations":[…],"basePath":"/locations/","fallbackUrl":"/locations"}'>` + inline script | one typed `branches` array (`slug`, `name`, `region`, `phone`, `licence`, `towns`, `postcodes`) + a `useZipFinder` hook: `startsWith` match → scroll + `aria-current` on the card; miss → message, 1,200 ms fallback to `#locations` |
| three branch pages with manager/hours/team photo | **not** ported (single page). Keep only the index facts in the cards |
| branch content "add one YAML file" | the `branches` array above, one entry per branch |
| `[data-animate]` + inline opacity/transform + IO | `<Reveal delay={n}>` writing the same inline styles; bails under reduced motion |
| `[data-counter="2 hr"]` seeded with `0` | `<Counter value="2 hr" />`, final value with no observer |
| carousel JS (per-view 3/2/1, injected dots, inline arrow display) | `useCarousel({ slides, perView })` returning `index`, `goTo`, `next`, `prev`, `dots`, `arrowVisible`; widths via `ResizeObserver` on the track's parent |
| `[data-dark-toggle]` + pre-paint inline script | `useTheme()` with the same `localStorage.theme` key and a pre-paint script in `index.html` |
| `[data-header]` shadow past 50 px | `useScrolled(50)` → `shadow-lg` class |
| cookie strip `localStorage['cookie-consent']` | `useCookieConsent()` with the same key and the 1,500 ms delay |
| Unsplash hero photo | `https://picsum.photos/seed/drainwise-1/1200/900` inside a 4:3 radius-16 frame |
| inline `<svg>` icons (phone, moon/sun, chevrons, check, stars, social) | `lucide-react` equivalents; stars may be a filled custom star path to keep the 20 px geometry |
| Poppins via `/cf-fonts/` (injected, not linked) | Google Fonts `<link>` `family=Poppins:wght@400;500;600;700&display=swap` (verified 200) |

## Sibling comparison (what to carry over, what not to assume)

This slug belongs to the **2026 Astro/Tailwind-4 house family** — the same generated kit the sibling preps
measured: one hashed `_astro/Base.*.css` with `/*! tailwindcss v4.3.3 */`, a per-page `Base…js` behaviour
bundle that is *byte-different but functionally the same kit*, and the identical router hash (`CYDbzu1r`).
Two consequences:

- **Never assume a hook is wired because it exists in the bundle.** This page's bundle also carries video
  modal, FAQ accordion, pricing toggle, blog filter, lightbox, form validation, toast, parallax and
  typewriter handlers; **none** of them have markup here. The data-attribute inventory in the spec is the
  list of what is live (nine behaviours).
- **Never assume the palette/typography from a sibling.** Quarto (Hedgerow), Halfpast (Slotline),
  Journeyman (Pipewright), Kinetic (Driftway), Marrow (Tidewater) are all in this family and each owns its
  own ramps: this one is a single blue ramp + blue-slate `ink` + stock greys, Poppins only, **no serif and
  no gradients**, whereas the Marrow/Tidewater prep is a serif/sans two-tone page with a gradient hero.

Within the *catalogue*, its nearest neighbours are the other plumbing designs (**Heatline**, **Steelworks**,
and the `plumbing` snippet family). Those are Bootstrap-era cards-and-icons pages; Metroflow is the 2026
multi-location rebuild. Do not borrow their section patterns — in particular, no "team" band, no pricing
table and no testimonial grid: this design's differentiator is **one guarantee stated three ways plus a
branch finder**.

## Traps, ranked by how expensive they are to discover late

1. **Reveal blanks the page in screenshots.** `[data-animate]` elements below 80 % of the fold get inline
   `opacity: 0`. A `fullPage` capture of the reference itself renders the entire testimonial band empty.
   Force the revealed state before any visual comparison.
2. **The services band is a CSS table.** Per-card borders/radius, or `gap: 24px`, break the signature.
3. **The promise head is 30 px / no tracking, and its eyebrow is one shade and one weight lighter.** Both
   are real; unifying them is a re-skin.
4. **The carousel's geometry is inline JS, not classes.** Slide widths, arrow visibility and dots cannot be
   read from the stylesheet.
5. **`tel:(555) 010-0180`** in the footer is malformed in the source — copy the layout, not the URI.
6. **Poppins is not linked in the HTML** (Cloudflare injects `/cf-fonts/`); if you assume "the font is
   already there", the app silently renders system-ui on a machine without Poppins installed.
7. **Three dead `#` social links.** Do not carry them into the app; the zero-bare-`#` rule is in the
   checklist.
