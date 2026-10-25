# Driftway — design notes (ColorLib `kinetic`)

Measured 2026-10-25 against the live preview (`curl -4` + Playwright at 1440 / 1024 / 768 / 390), the
compiled sheet `_astro/Base.60HYJDXP.css` (65,542 B), the behaviour bundle
`Base.astro_astro_type_script_index_0_lang.YE-jyORa.js` (**18,404 B** — a third kit size), and the
catalogue screenshot `kinetic-template.jpg` (2400 × 1892 JPEG, 320,074 B). The spec is the authority;
this file is the working map.

**What this design is:** a motion-design studio landing page whose every band demonstrates the technique
it names. Violet brand, lime accent, stock grey chrome, one typeface (Poppins), nine bands, and a hard
`prefers-reduced-motion` contract that switches everything **off** rather than shortening it.

## DOM skeleton (measured: header + nine bands + five fixed pieces)

```
#preloader          fixed inset-0 z-100 bg-white, 40px animate-spin ring → removed 300ms after load
#main-content       skip-link target
#scroll-progress    fixed top-0 left-0 z-60, h-0.5 (2px) bg-primary-600, width = scroll %
HEADER              sticky top-0 z-50, 81px @1440 / 65px @390, border-b gray-200, bg-white/80 blur-16
                    container h-16 lg:h-20 px-4 lg:px-8
                    [logo 2×img] [nav: 7 labels, gap-8, lg:flex] [moon] [violet pill]

1  <section>          1,437  gradient primary-50 → white, py-20 lg:py-32, overflow-hidden
    2 blurred blobs (500/400px, blur-3xl, animate-hero-float, aria-hidden)
    centred max-w-4xl → badge · h1 (2 lines, line 2 = .text-gradient typewriter) · lede · 3 CTAs
    · stat strip (border-t, 4 cols) · hero image max-w-5xl rounded-2xl ring-1 shadow-2xl (1024×512)

2  <section>            178  border-y gray-200, bg-gray-50, py-10  (marquee, aria-label)
    .marquee-viewport → 2× 96px edge fade · ul.marquee (12 li) · ul.marquee--reverse (10 li)

3  <section>            238  border-y gray-200, bg-gray-50, py-16 lg:py-20
    grid-cols-2 sm:grid-cols-4 → 4× [data-counter] (12 / 0 / 60fps / 100%)

4  #showcase          1,504  py-20 sm:py-28, white
    head (lime chip · h2 · lede) → ul.3-col gap-6 → 12× li.tilt[data-tilt="6"] rounded-3xl p-6

5  #scroll-story      1,413  bg-gray-950 text-white py-24 sm:py-32
    sticky h-1 rail (white/10 + gradient fill, data-scroll-progress)
    head (accent-300 chip · h2 in .reveal-line · sub)
    ol.space-y-24 → 3× [ordinal 01/02/03 · h3.reveal-line · p]
    svg 800×60 .draw-path (stroke #7c3aed → #a3e635)

6  #interactions        805  py-20 sm:py-28, white
    head (violet chip · h2 · lede) → ul 4-col gap-5 → 4× li.rounded-2xl.p-6 (hover lift + bottom rule)
    centred magnetic pill (.btn-primary px-8 py-4, data-magnetic="0.3")

7  #testimonials        768  bg-gray-50 py-20 lg:py-28
    head (chip "Feedback") → [data-carousel] → 3× [data-carousel-slide] rounded-2xl p-8 shadow-soft

8  #faq                 820  bg-white py-20 lg:py-28
    head (chip "Questions") → max-w-3xl divide-y → 5× py-6 [button[data-faq-toggle] + panel]

9  #contact             452  bg-gradient-to-br primary-600 → primary-800, py-20 lg:py-28
    2 white/10 blur-3xl discs + 40px dot grid (aria-hidden) → white h2 48px · lede · 2 CTAs

FOOTER                 592  bg-gray-900 pt-16 lg:pt-24, lg:grid-cols-12 (4 / 5 / 3) + legal bar
#mobile-cta                 fixed bottom-0 z-40 lg:hidden (Call Now + Book a Tour)
#cookie-consent             fixed bottom-0 z-50, 87px, translateY(100%) until +1.5s
#back-to-top                fixed bottom-6 right-6 z-50, 48px violet disc
```

## CSS token block (verbatim for `@theme`)

```css
@theme {
  /* brand — stock violet, used as the brand */
  --color-primary-50:  #f5f3ff;
  --color-primary-100: #ede9fe;
  --color-primary-200: #ddd6fe;
  --color-primary-300: #c4b5fd;
  --color-primary-400: #a78bfa;
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;  /* every solid CTA, every counter, the gradient start */
  --color-primary-700: #6d28d9;  /* every hover, every mono token */
  --color-primary-800: #5b21b6;  /* chip text, the closing gradient's far stop */
  --color-primary-900: #4c1d95;  /* dark mode only, as /30 and /50 */

  /* spark — stock lime */
  --color-accent-200:  #d9f99d;  /* "Motion patterns" chip ground */
  --color-accent-300:  #bef264;  /* story chip text */
  --color-accent-400:  #a3e635;  /* gradient far stops (rule, rail, SVG) */
  --color-accent-500:  #84cc16;  /* the ✦ marquee separators */
  --color-accent-900:  #365314;  /* chip text */

  --font-sans: "Poppins", system-ui, sans-serif;   /* and no other face */
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
               "Liberation Mono", "Courier New", monospace;
}
```

Custom rules the design needs (all copied from the compiled sheet):

```css
.tilt        { transform: perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
               will-change: transform; transition: transform .22s cubic-bezier(.22,1,.36,1); }
.marquee     { display:flex; gap:2rem; width:max-content;
               animation: 32s linear infinite kinetic-marquee; }
.marquee--reverse { animation-direction: reverse; }
.marquee-viewport:hover .marquee { animation-play-state: paused; }
@keyframes kinetic-marquee { to { transform: translate(-50%) } }
.reveal-line        { display:block; overflow:hidden; }
.reveal-line > span { display:block; transform: translateY(110%);
                      transition: transform .7s cubic-bezier(.22,1,.36,1); }
.reveal-line.is-visible > span { transform: translateY(0); }
.draw-path          { stroke-dasharray: var(--len,400); stroke-dashoffset: var(--len,400);
                      transition: stroke-dashoffset 1.4s ease-in-out; }
.draw-path.is-visible { stroke-dashoffset: 0; }
.magnetic    { will-change: transform; transition: transform .26s cubic-bezier(.22,1,.36,1); }
.shadow-soft { box-shadow: 0 4px 16px -4px #0000001a; }
.text-gradient { background-image: linear-gradient(to right, #7c3aed, #a78bfa);
                 -webkit-background-clip: text; background-clip: text; color: transparent; }
.animate-hero-float         { animation: 8s  ease-in-out infinite hero-float; }
.animate-hero-float-reverse { animation: 10s ease-in-out infinite reverse hero-float; }
@keyframes hero-float {
  0%, to  { transform: translate(0) scale(1) }
  33%     { transform: translate(30px,-20px) scale(1.05) }
  66%     { transform: translate(-20px,15px) scale(.95) }
}
@media (prefers-reduced-motion: reduce) {
  .marquee   { animation: none }
  .tilt      { transition: none; transform: none }
  .magnetic  { transition: none; transform: none !important }
  .reveal-line > span { transition: none; transform: none }
  .draw-path { stroke-dashoffset: 0; transition: none }
}
```

## Section-by-section fidelity notes

**Header.** 81 px at ≥1024 (80 px `h-20` + 1 px border), 65 px below (`h-16`). `bg-white/80` +
`backdrop-filter: blur(16px)`; `shadow-lg` appears past **50 px** of scroll and is removed below it.
The wordmark is **two `<img>` tags** (light / `dark:block` light-ink), not text — author your own SVG at
`h-8 lg:h-10`. Nav is `hidden lg:flex` with **32 px** gaps and 14 px / 500 labels in `#4b5563`; the
breakpoint is **lg = 1024**, measured (nav still `flex` at 1024, `none` at 900). The "Licence" label points
at `/pricing` — labels are marketing copy, not routes.

**Hero.** `py-20 lg:py-32` (80 / 128) inside the section, on top of a `primary-50 → white` gradient. The
two blobs are `500 × 500` and `400 × 400`, `blur-3xl`, `primary-200/50` and `primary-100/40`, animated
8 s / 10 s in opposite directions and parallaxed by 0.15 / −0.1 — they inflate the section box
(`517 px` and `391 px` measured because of the float transform), which is why the band measures 1,437 px
rather than a round number. The `h1` is **60 / 60 at −1.5 px** and breaks after "is a"; the second line is
the `.text-gradient` typewriter (initial "design decision", then "performance budget", "accessibility
choice", cycling every 3 s with a 300 ms fade and a 10 px rise). Ledes: 20 px / 28 capped at 672 px. The
stat strip is `border-t` + `pt-10`, four columns at ≥640.

**Marquee.** Two rows, each a **doubled** list — that duplication is what makes `translate(-50%)` loop
without a seam; do not animate from 0 to −100 %. Row 1 = 6 phrases (12 `<li>`), row 2 = 5 (10 `<li>`),
both 30 px / 700 `tracking-tight`, `gap-8`, separated by a lime ✦. Widths measured: **3,340** px and
**3,524** px at 1440. Edge fades are `w-24` (96 px) on each side. Hover anywhere in the viewport pauses both.

**Counters.** `12 / 0 / 60fps / 100%` — the `0` is the punchline and must stay `0`. The ramp is **2,000 ms**
with `1 − (1−t)³`; the suffix parser appends an unknown suffix verbatim, which is how `60fps` survives.
Numbers 48 px / 700 `primary-600`; labels 14 px / 500 `gray-600` at `mt-2`.

**Showcase.** Twelve cards, `rounded-3xl` (24 px) with a **border and no shadow** — the only elevation on
the page belongs to the micro cards and the testimonial cards. Each card has a `160 px` corner blob
(`from-primary-400/30 to-accent-400/30`, `blur-2xl`) that scales **1.5×** on `group-hover`, a chip, an
18 px title, a 14 px paragraph and a monospace token above a `border-t gray-100` rule. Reveal delays step
by **80 ms** (0 → 880) even though card 2's copy says "ninety milliseconds" — keep the copy, ship the 80.

**Story band.** The sticky rail is inside the section and sticks at `top: 0` — it overlaps the header once
scrolled, which is deliberate. Its inner bar is `scaleX(0 → 1)` driven by the band's own progress, **not**
by the global `#scroll-progress` bar (both exist). Ordinals are 48 / 60 px monospace at `white/15`; the
headings are `.reveal-line` masks staggered 90 ms by index. The SVG is a single 3 px round-cap path with a
`userSpaceOnUse` gradient from `#7c3aed` to `#a3e635` and `--len` set from the path length.

**Interactions.** Four cards + one pill. The cards lift `-8px`, warm their border to `primary-400` and take
`shadow-xl` over 300 ms, plus a 4 px gradient rule that scales from the left over 500 ms. The pill's
`data-magnetic="0.3"` is weaker than the default 0.35 — keep 0.3, the difference is visible at the edges.

**Testimonials.** At 1440 the carousel is **inert**: 3 slides, perPage 3, `maxIndex = 0`, so the dots
container renders **empty** and both arrows are `display: none`. That is the reference's behaviour, not a
missing feature. 900 px → 2 dots and visible arrows; 390 px → 3 dots. Autoplay 5 s, paused on hover.

**FAQ.** Single-open, 300 ms `max-height` transition, icon `rotate(45deg)`. The reference sets **no**
`aria-expanded`, no `aria-controls`, and the panel is a bare `div` — the single most important thing to
improve rather than copy.

**Closing band.** The h2 is **48 px** here (the only `lg:text-5xl` heading on the page) and the lede is
`primary-100`. The dot grid is a `radial-gradient(circle at 1px 1px, white 1px, transparent 0)` at
`40px 40px` with `opacity-10`.

**Footer.** `lg:grid-cols-12` with 4 / 5 / 3 spans. Socials are 40 px `gray-800` tiles with **`href="#"`** —
replace with real targets. The four "Spaces" links point at **`#spaces`, which does not exist**. The
newsletter row **overflows at 390 px** (form 471 px inside a 358 px column: input 350 + button 113), which
is the sole cause of the reference's `scrollWidth` 487 vs 390 — fix it, don't copy it.

## Source → React adaptation table

| Source construct | React / Tailwind equivalent |
| --- | --- |
| Astro `<section id>` blocks | one component per band in `src/components/`, composed in `App.tsx` |
| `[data-animate]` + `data-delay` inline styles | `useReveal()` hook returning a ref + `style` on the element, or a `<Reveal delay={n}>` wrapper |
| `[data-counter]` with a suffix parser | a typed `useCounter(value, { duration: 2000 })` that returns the formatted string |
| `[data-tilt]` / `[data-magnetic]` / `[data-parallax]` | pointer/scroll hooks that attach **nothing** under reduced motion; `--rx` / `--ry` written via `style.setProperty` |
| `[data-carousel]` DOM initializer | `useCarousel(slides, { perPage, interval: 5000 })` with `matchMedia` for perPage and a resize listener |
| `[data-faq-toggle]` `max-height` juggling | controlled `openIndex` state + measured `scrollHeight`, `aria-expanded` / `aria-controls` |
| `applyTheme()` inline script | inline `<script>` in `index.html` (no flash) + a `useTheme()` hook for the toggle |
| `astro:page-load` initializers | `useEffect` per hook, with cleanup |
| `.marquee` CSS animation | plain CSS class — no JS; keep the doubled list |
| `localStorage` reads | guarded (`try/catch`) so SSR/jsdom never throws |

## Extra observations worth keeping (the prep's census findings)

1. **371 classes, 0 phantom.** Every class token in the landing DOM has a rule in the compiled sheet
   (Tailwind escape rules applied). Anything outside that set is invented.
2. **46 `data-animate` elements** (27 with `fade-in-up`, 19 bare) with delays 0/70/100/140/150/200/300/…/880.
   A React implementation that animates *fewer* elements will look correct in a screenshot and wrong in
   motion.
3. **No dead `data-*` markers** — unlike sibling sites in this catalogue, every attribute in the inventory
   has a consumer in the 18,404 B bundle.
4. **Two progress indicators, not one**: the global 2 px `#scroll-progress` and the story band's 4 px
   sticky rail. They measure different things (document vs band).
5. **Three hues only** (violet, lime, grey) and exactly one status colour in the sheet (`red-500`, contact
   page form errors). There is no blue, no green, no amber on this page.
6. **`font-family` is a single stack** — Poppins with `system-ui` fallback. There is no serif and no mono
   *face*: the "mono" tokens use the UA monospace stack.
7. **`documentElement.colorScheme` is never set** — the reference has no `color-scheme` declaration, so form
   controls stay light in dark mode. Setting `color-scheme: dark` in the recreation is a small improvement
   the spec allows (note it in the PR).
8. **The mobile overflow is the newsletter row**, not the marquee (the marquee's 2,803 px track sits inside
   `overflow-hidden`). Diagnosed by walking every element whose `right` exceeded the viewport **and** whose
   ancestors do not clip.
9. **`.html` routes 404 while bare routes 308** — if you probe inner pages for content, use the directory
   form with a trailing slash (and `curl -4 -sSL`).
10. **Naming trap:** `kinetic` is a live app and a live spec in this repo — for a *different* ColorLib
    design (Bobsled). Do not read `apps/kinetic` as a reference for this page, and do not rename anything
    that already exists.

## Screenshot analysis

`kinetic-template.jpg` (2400 × 1892, JPEG, 320,074 B) is a **genuine macOS browser capture** — traffic
lights, rounded title bar, soft shadow, pale grey desk ground — framing the sticky header and the hero down
to the top of the hero image. It corroborates: the wordmark is an image, the nav's seven labels, a moon
icon, the violet CTA, the pinging badge, the two-line `h1` with the gradient phrase, the 20 px lede, the
three CTAs (one a solid violet pill, one a white outline pill, one a 48 px play disc + label), the four-stat
strip above a hairline, and the hero image's 1 px ring against white.

It shows **nothing** of the marquees, counters, twelve cards, dark band, micro-interactions, testimonials,
FAQ, closing band or footer — all of that came from the DOM and `getComputedStyle`. The hero photo in the
capture is a **retro-gaming desk in magenta and cyan neon** (the hotlinked Unsplash photo the DOM still
points at); replace it with a seeded placeholder and rewrite the alt.

The capture also shows one nav label **underlined** — that is `.nav-active` (`color:#111827; font-weight:600`
plus the capture's pointer underline), which the page's IntersectionObserver really does produce here,
unlike the pathname-based sibling sites.

## Sibling comparison (same 2026 Astro family — do not copy values blindly)

This is the **eighteenth** catalogue-gap design and the **third distinct behaviour-bundle size**: 16,233 B
(base kit), 17,669 B (booking kit) and **18,404 B** (this one — adds typewriter, carousel, video modal,
lightbox, blog filters, billing toggle and form validation). Consequences:

* **Kit size names the behaviour set.** Grep the markup's `data-*` markers against the bundle before
  assuming an effect exists; this page's markers are all live, but that is a measurement, not a rule.
* **Token delivery differs by build.** Here the `primary` / `accent` ramps are emitted as **literal hex**
  utilities (`@theme` declared outside the sheet's scope), so grepping `var(--color-primary` finds nothing
  and looks like a stock palette. Read the rules.
* **The palette is a stock Tailwind family this time** (violet + lime + grey), unlike the hand-picked ramps
  of the previous designs — do not assume "custom ramp" because a sibling had one.
* **Down-compiled `oklab()`**: gradients and opacity variants print as `oklab(...)` / `color-mix(...)` with
  `@supports` fallbacks. Copy the hex the rule used, not the oklab string.
* **Same `CYDbzu1r` router, same inline `applyTheme()`, same preloader pattern** across the family — the
  inline scripts are ~360 B and must be reproduced (no-flash theme, preloader removal), not skipped.
