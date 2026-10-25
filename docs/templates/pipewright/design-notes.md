# Pipewright — design notes (ColorLib `journeyman`)

Reference: `https://preview.colorlib.com/theme/journeyman/` · 53,087 B · Astro + Tailwind 4.3.3 ·
row in `docs/catalog-coverage.md` (`journeyman`, preview 200, 53087 B) · prep commit:
`openspec/specs/template-pipewright/spec.md` + this folder.

Every number below came from `getComputedStyle` / `getBoundingClientRect` on the **live** render at
1440 / 1024 / 390 px plus the compiled sheet `_astro/Base.Dm3pkJRE.css` (55,230 B). Where the sheet and the
render disagree, the render wins and the disagreement is recorded as a delta.

## DOM skeleton (measured: nine bands + four fixed pieces)

```
#preloader                     fixed inset-0 z-100 bg-ink-50 → 40px spinning ring   ← not reproduced
a.sr-only[href=#main-content]  "Skip to content", focus:not-sr-only
#scroll-progress               fixed top-0 left-0 z-60 h-0.5 bg-primary-600, width = scroll %
header[data-header]            sticky top-0 z-50 border-b border-ink-200 bg-ink-50/95 backdrop-blur
  div.container.h-20.lg:h-24.flex.items-center.justify-between.gap-3.px-4.lg:px-8
    a[href=…/].min-w-0.leading-none
      span.block.font-serif.text-2xl.lg:text-3xl.font-semibold.text-ink-800   ← 267×36
      span.mt-1.5.block.truncate.text-[0.65rem].uppercase.tracking-[0.18em].text-ink-400
    nav[aria-label="Main navigation"].hidden.xl:flex.xl:gap-8   → 4 × a (14px/600/upper/+0.05em, 81×20)
    div.flex.shrink-0.items-center.gap-2
      span.hidden.md:block > a.rounded-full.bg-primary-600.px-4.py-2.5   ← 183×46
      button[data-dark-toggle]  (aria-label "Toggle dark mode")          ← dropped in the recreation
      button[data-mobile-toggle] (xl:hidden, aria-expanded)
  div.hidden.xl:hidden > nav.border-t.border-ink-200.bg-ink-50.px-4.py-4
      → 4 × a.block.py-3.text-base.uppercase.tracking-wider + pill in a border-t block
main#main-content
  §hero        bg-ink-50 → container.px-4.py-14.lg:px-8.lg:py-20          (799)
      div.grid.items-center.gap-10.lg:grid-cols-12.lg:gap-16             (1216×639)
        figure.lg:col-span-5  img.aspect-[4/5].rounded-2xl.object-cover  (469×587)
                              figcaption.mt-3.text-sm.text-ink-400       (469×40)
        div.lg:col-span-7
          p.text-xs.font-semibold.uppercase.tracking-[0.2em].text-primary-700   (12px / +2.4px)
          h1.mt-5.font-serif.text-4xl.sm:text-5xl.lg:text-6xl.font-semibold.leading-[1.1]
          p ×2 .mt-5.max-w-xl.text-lg.leading-relaxed.text-ink-500     (18 / 29.25)
          div.mt-8.flex.flex-wrap.items-center.gap-4
            a.rounded-full.bg-primary-600 … (183×46) · p.flex.flex-wrap (5× star svg amber-400 + 5.0 + note)
  §#services   .section.bg-white → container.px-4.lg:px-8               (1013)
      div.grid.gap-10.lg:grid-cols-12.lg:gap-16
        div.lg:col-span-4  kicker 12px + h2.font-serif.text-3xl.sm:text-4xl + p.mt-4.text-ink-500
        dl.lg:col-span-8                                                   (789×737)
          div.flex.flex-col.gap-1.border-ink-100.py-5
              .sm:flex-row.sm:items-baseline.sm:justify-between.sm:gap-8   (+ `.border-t` on rows 2–6)
            div.sm:max-w-xl > dt.font-serif.text-xl.font-semibold + dd.mt-1.5.text-ink-500
            p.shrink-0.whitespace-nowrap.text-sm.font-semibold.uppercase.tracking-wider.text-primary-700
      p.mt-8.text-sm.text-ink-400   ← "Prices are sample data…"
  §#owner      .section.bg-ink-50 → container > div.mx-auto.max-w-3xl.text-center      (836)
      img.mx-auto.h-28.w-28.rounded-full (112×112) · kicker · p.font-serif.text-2xl.sm:text-3xl.leading-snug
      p ×2 .mt-5.text-lg.leading-relaxed.text-ink-600 · p.font-serif.text-xl (signature)
      p.mt-1.text-xs.uppercase.tracking-[0.18em] · a.mt-8.border-b-2.border-primary-600.pb-1
  §#emergency  bg-ink-50.text-ink-800[data-emergency]                                  (164)
      div.container.px-4.py-6.lg:px-8.lg:py-8 > flex.flex-col.lg:flex-row.lg:justify-between
        span.relative.flex.h-2.w-2 > span.absolute.animate-ping.opacity-60 + span.relative.h-2.w-2
        p.text-sm.uppercase.tracking-wide.opacity-90 · p.text-lg.font-bold · p.text-sm.opacity-90
        a.rounded-full.bg-primary-600.px-6.py-3.text-lg.font-bold
  §#service-areas .section.bg-white                                                  (448)
      div.grid.lg:grid-cols-12 → div.lg:col-span-5 (h2 **Inter 700** tracking-tight) ·
      div.lg:col-span-7 > ul.grid.grid-cols-2.gap-x-6.sm:grid-cols-3   (683×180)
          li.border-b.border-ink-100.py-2.5.text-ink-700  ×12           (45 each)
  §#testimonials bg-gray-50.py-20.lg:py-28                                           (796)
      div.mx-auto.max-w-3xl.text-center → div.badge.rounded-full.bg-primary-100 (81×28) + h2 + p
      div.relative.mt-16 > div.overflow-hidden > div.flex.transition-transform.duration-500.ease-out
          div.flex-shrink-0.px-3  ×3                                      (405 each)
            div.rounded-2xl.bg-white.p-8.shadow-soft                      (381×348)
              5× svg.text-primary-400 · blockquote.text-lg.font-medium · div.h-12.w-12.rounded-full.bg-primary-100
      button[data-carousel-prev/-next].absolute.hidden…lg:flex  → display:none at 1440 (kit JS decides)
      div[data-carousel-dots].mt-8.flex.justify-center.gap-2     → EMPTY at 1440, 2 dots at 900, 3 at 390
  §#contact    bg-primary-700.py-20.lg:py-28                                         (440)
      div.mx-auto.max-w-3xl.text-center → h2 (Inter 700 36 white) · p.text-primary-100
      div.mt-10.flex.flex-col.sm:flex-row → a.bg-white.rounded-lg.px-8.py-4 (218×56) ·
                                          a.border-2.border-white/40 (259×60)
footer.bg-gray-900.pt-16.lg:pt-24.text-gray-300                                       (543)
  div.grid.gap-12.lg:grid-cols-12 → col-span-4 (logo 190×40, blurb, 3 social tiles, address block)
                                 · col-span-5 (3 × sub-col: h3 14px upper + ul.mt-4.space-y-3)
                                 · col-span-3 (Licensed + bronze pill)
  div.mt-16.border-t.border-gray-800.py-8 → © + Privacy/Terms links
#cookie-consent  fixed bottom-0 z-50 border-t.bg-white.py-4 (87 tall) — translateY(100%) until +1.5 s
#back-to-top     fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary-600
```

## CSS token block (verbatim for `@theme`)

```css
@theme {
  /* warm neutral — replaces every grey in the page chrome */
  --color-ink-50:  #faf8f5;  /* page, hero, owner, emergency strip, header @95% */
  --color-ink-100: #f0ece6;  /* every hairline: service rows, town rows, hover grounds */
  --color-ink-200: #ded6cb;  /* header bottom border */
  --color-ink-300: #bcb0a1;  /* placeholder:text-ink-300 only */
  --color-ink-400: #8a7d6d;  /* microline, figcaption, sample-data notes */
  --color-ink-500: #615648;  /* body copy in bands, nav labels */
  --color-ink-600: #453d33;  /* rating row, owner paragraphs */
  --color-ink-700: #332d26;  /* town rows, hover ink */
  --color-ink-800: #2a2622;  /* body ink: headings, dt, signature, wordmark */
  --color-ink-900: #1c1916;  /* compiled, unused on this page */

  /* hand-picked bronze */
  --color-primary-50:  #fbf7f0;
  --color-primary-100: #f5eddd;  /* badge, avatar chips, closing-band body copy */
  --color-primary-200: #ead9ba;
  --color-primary-300: #dcc08d;  /* dark mode only */
  --color-primary-400: #cba45f;  /* testimonial stars */
  --color-primary-500: #be8f46;  /* focus rings */
  --color-primary-600: #b8863b;  /* THE brand: pills, prices, active dot, disc */
  --color-primary-700: #946a2d;  /* kickers, pill hover, closing band ground */
  --color-primary-800: #735225;  /* hover text/border */
  --color-primary-900: #5a401f;  /* dark mode only */

  --font-sans:  Inter, system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;
}

html { scroll-behavior: smooth; }
body { color: #2a2622; background-color: #faf8f5; -webkit-font-smoothing: antialiased; }

/* .section — 80px, 112px from lg. The hero and #emergency opt out. */
.section { padding-block: calc(var(--spacing) * 20); }
@media (min-width: 64rem) { .section { padding-block: calc(var(--spacing) * 28); } }

.shadow-soft { box-shadow: 0 4px 16px -4px rgb(0 0 0 / 0.10); }
```

Deliberately **not** copied: `.btn`, `.btn-primary`, `.btn-secondary`, `.card`, `.container-narrow`,
`.text-gradient`, `.animate-hero-float`, `@keyframes hero-float` and `.img-shimmer`. All nine are compiled
in the reference sheet and **none** is used by this landing page — they belong to the shared kit and to
sibling designs. Copying them adds dead CSS and invites an implementer to reach for `.btn-primary` and
silently change the pill's shape (`.btn-primary` is `rounded-lg`, the page's pills are `rounded-full`).

## Section-by-section fidelity notes

1. **Hero — 5/7, and the picture is the argument.** The portrait is `aspect-[4/5]` (469 × 587 at 1440) with
   a `figcaption` that *instructs the buyer* ("Replace with a photograph of yourself beside your own van. On
   a one-van business this image is the credential."). Keep the caption — it is the template's sales pitch —
   and keep the photo **first in DOM order** so the mobile stack reads photo → caption → headline.
2. **The rating row is not a card.** It is an inline `p` after the pill: five 16 px `amber-400` stars
   (`gap-0.5`), `5.0` at `font-bold`, then `90+ reviews on Google · sample data` at `opacity-80`. It wraps
   *as a unit* (`flex flex-wrap items-center gap-x-2 gap-y-1`), which is why 390 px shows the pill on one
   line and the rating on the next, never mid-figure.
3. **Separators sit between rows, never around them.** Row 1 of the price list has **no** rule; rows 2–6
   carry `border-t` in `ink-100`. That single detail is what makes a `<dl>` read as a printed price list
   rather than a table — do not "tidy" it into `divide-y` (which would add a rule under the last row and
   close the list with a hard edge the design does not have).
4. **One `<dl>`, six rows, two non-numeric prices.** `Quoted on site` and `No charge` sit in the same
   right-hand column style as `From $110`. Do not add a `$` to them and do not right-pad them into a
   numeric tabular column — the reference does not use `tabular-nums` here at all.
5. **The owner band is centred and quiet.** Everything is `max-w-3xl`, and the only ornament is the 112 px
   avatar. The lede is the largest serif on the page below the `h1` (30 px, `leading-snug`) — that is what
   makes the confession read as the second headline.
6. **The emergency strip is 164 px, not a band.** It reuses the hero's ground (`ink-50`) with no `section`
   padding and no border, so on a warm page it reads as a footnote rather than a promo. Its pill is
   deliberately **larger** than the header's (`text-lg`, `px-6 py-3`). The ping is two nested spans
   (`absolute animate-ping opacity-60` over a solid `relative` core) and both are `bg-current`, inheriting
   `ink-800` from the section — recolouring the strip recolours the dot for free.
7. **The towns are a ruled grid.** Twelve items, `grid-cols-2 sm:grid-cols-3`, each with a `border-b` and
   `py-2.5` (45 px rows). The rules give the grid its list-like weight without cards; adding `rounded` or a
   background to a row breaks the effect immediately.
8. **Testimonials: the only cool band.** `bg-gray-50` (not `ink-50`) is intentional — it separates the
   three white cards from the warm page. The cards are the only `shadow-soft` surfaces on the page, and the
   badge is the only `primary-100` pill in the main column.
9. **The closing band is the page's only saturated ground** (`#946a2d`, `primary-700`). Its `h2` is
   **Inter 700**, not Playfair, and the two CTAs are **8 px `rounded-lg`**, not pills — the pill shape is
   reserved for phone numbers throughout, which is a real system: *pill = call*, *rectangle = navigate*.
10. **The footer's three link columns are sub-columns of one grid cell**, each measuring **141 px** at 1440,
    inside a col-span-5. They are one `grid gap-8 sm:grid-cols-3` — not three siblings of the outer grid.
    Getting this wrong makes the footer look 40 % too loose.

## Source → React adaptation table

| reference construct | reference mechanism | recreation |
| --- | --- | --- |
| `#preloader` | inline script removes it 300 ms after `load` | not rendered (no flash) |
| `#scroll-progress` | `div` + inline width from a passive scroll listener | `useScrollProgress` hook → `style={{ width }}` |
| header shadow past 50 px | kit adds/removes `shadow-lg` on the section's `classList` | `useScrolled(50)` boolean → conditional class |
| `[data-mobile-toggle]` + `[data-mobile-menu]` | `aria-expanded` string comparison + `classList` toggle | `useState` + `aria-expanded`, panel unmounted when closed |
| `[data-animate]` + `data-delay` | IntersectionObserver writes inline opacity/transform | `useReveal` with a `delay` prop; initial state applied in CSS, cleared by the observer |
| `[data-carousel]` family | one initializer computing perPage, `maxIndex`, dots, 5 s interval | `useCarousel({ slides, perPage })` returning `index`, `maxIndex`, `next`, `prev`, `goTo`; dots as real `<button>`s |
| `[data-cookie-accept/-decline]` | `localStorage` + 1.5 s timer + slide-out then `remove()` | `useCookieStrip` (mount timer, `localStorage`, unmount) |
| `#back-to-top` | scroll listener toggles inline opacity/pointer-events | `useScrolled(300)` + `window.scrollTo({ behavior: 'smooth' })` |
| `[data-dark-toggle]` + `applyTheme()` | `.dark` on `<html>` + `localStorage.theme` | **omitted** (light-only), values recorded in the spec |
| four nav labels pointing at routes | real `href="/theme/<slug>/services"` etc. → 308 → live page | in-page anchors (`#services`, `#owner`, `#testimonials`, `#contact`) |
| footer social `href="#"` | dead | real URLs or non-anchor elements |
| `tel:(555) 010-0142` | malformed URI | `tel:+15550100142`-style valid URI; display string unchanged |
| JSON-LD `Plumber` block | corrupt (`https://***@type`) | emit a clean block or none |

## Extra observations worth keeping (the prep's census findings)

* **295 classes in the markup, 0 phantom** — every class the HTML carries has a rule in the compiled sheet.
  That makes "anything you cannot map to those 295 is invented" a hard claim, and it is the cheapest way to
  audit the recreation's markup.
* **Custom palette values are emitted as literals**, not variables: `.bg-primary-700{background-color:#946a2d}`,
  `.text-ink-800{color:#2a2622}`. The theme colours were declared outside `@theme`, so Tailwind inlined them.
  If the recreation uses `@theme` tokens the *rendered* result is identical, but a naive `grep var(--color-primary`
  against the reference sheet returns nothing — do not read that as "the palette is stock".
* **The nav breakpoint is `xl` (1280 px), not `lg`.** Measured 0 × 0 at 1024 px. Four labels + the pill +
  the moon + the hamburger do not fit at 1024, and the reference's own header proves it.
* **The `h1` has no gradient, no `text-gradient`, no typewriter.** The sheet compiles `.text-gradient` (it is
  in the kit) and this page uses it **zero** times. Any two-tone headline in the recreation is invented.
* **`.animate-hero-float` is compiled and unused** — this page has no floating blobs, unlike its siblings.
  The only ambient motion is the emergency ping.
* **`data-emergency` and `data-phone` are dead markers** (absent from the 16,233 B bundle). Four `data-phone`
  attributes and one `data-emergency` ship in the HTML with no consumer at all.
* **The behaviour bundle is the 16,233 B kit**, byte-for-byte the size the Hedgerow/Groundwork builds ship —
  i.e. this design uses no initializer that its siblings lack. The corollary: there is no counter, no
  typewriter, no lightbox, no FAQ, no billing toggle and no form validator on this page, so none may appear
  in the recreation.
* **The document hash is unstable; the byte size is not.** Two fetches of `index.html` both measured
  53,087 B but differed in the *order* of the 40 inline `@font-face` rules (Cloudflare re-emits
  `/cf-fonts/` CSS). Cite size + census.
* **`og:image` is 404 and `og:title` is a sibling's** (*"Meet Sam | Journeyman"* on the landing page). The
  served head is not a model to copy.
* **The `services` inner page proves the price list's card form is the *alternate* presentation**: six
  `article`s in a `grid gap-px bg-ink-100` hairline grid, each with three bulleted inclusions. If a future
  ask needs a services page, that is the measured reference — do not grow the landing page's `<dl>` into it.

## Screenshot analysis

`journeyman-template.jpg` (2400 × 1892 JPEG, 328,576 B) — a **genuine macOS browser capture on a pale grey
desk ground**, not a marketing collage. It frames the page from the header to the second service row and
therefore corroborates exactly: the two-line wordmark + licence microline, the four uppercase labels, the
bronze pill and moon glyph, the 4:5 portrait with its caption, the bronze kicker, the two-line Playfair
headline, both ledes, the pill + five amber stars + `5.0` rating row, the band change from `#faf8f5` to
white, and the first two price rows with their hairline separator and right-aligned `FROM $110` /
`FROM $160`.

It corroborates **nothing** below the second service row, and it must not be sampled for colour: the desk
ground and window chrome are the catalogue's staging, and the JPEG's antialiasing on the serif headline is
noticeably darker than the render's `#2a2622`.

## Sibling comparison (same 2026 Astro family — do not copy values blindly)

| sibling prep | document | behaviour kit | heading faces | brand | rhythm |
| --- | --- | --- | --- | --- | --- |
| **this design → Pipewright** | 53,087 B | **16,233 B** (base kit) | Playfair `h1`, Playfair on **1 of 4** `h2`s | bronze `#b8863b` on warm `#faf8f5` | 80 / 112 px, **2 bands opt out** |
| Hedgerow (prepped) | — | 16,233 B (base kit) | per-band split | different | `.section` throughout |
| Slotline (prepped) | 105,852 B | 17,669 B (booking kit) | Fraunces `h1`, Inter on **2 of 5** `h2`s | plum + sage | 80 / 112 px, all bands |

Three rules that survived across the family and are worth re-checking here:

1. **Kit size identifies the behaviour set.** 16,233 B = the base kit; 17,669 B adds booking + billing. Never
   infer an interaction from a sibling's spec.
2. **The heading-face split is per band, not per template.** This design has one serif `h2` and three sans
   `h2`s; a global rule is wrong by three bands whichever face it picks.
3. **A "carousel" with `slides === perPage` is a static row, and that is correct.** Read `maxIndex` before
   filing a bug or "fixing" the desktop layout.
