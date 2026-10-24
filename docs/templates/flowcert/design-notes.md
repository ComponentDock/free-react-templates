# Flowcert — Design Notes

Reference: **Backstop** — https://colorlib.com/wp/template/backstop/
Live preview: https://preview.colorlib.com/theme/backstop/ (HTTP 200, 74,502 B, page title
`Backflow testing in Omaha, fixed price and filed the same day | Backstop Backflow`, read 2026-10-24
with `curl -4` — the host resolves an IPv6 address that is banned here, so `-4` is mandatory)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/backstop-template.jpg (real JPEG,
333,718 B, 2400×1892 — licence strip, header, hero and the top three-and-a-half explainer steps)
Token authority: `theme/backstop/_astro/Base.DGmaIQ3L.css` (54,746 B, sha256
`669d475db003541d6c08b9ba020bac226120a5b14ed12ce9b1593da7499a7453`)
Behaviour authority: `_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (16,233 B)
Spec: `openspec/specs/template-flowcert/spec.md`
Shipped: — (not built yet; no `TEMPLATES.md` row exists)

An indigo-blue trade page (`#2d4fd0`) on alternating `#f6f7f9` / white grounds, set in Inter with a
mono sub-wordmark. Its argument is **"short, priced, filed"**: a licence strip states the credential
before the logo does, the hero pairs a two-tone headline with a three-field booking card, and the
price list is a published band rather than a "call for a quote" tease. The page is flat — no
gradients, no photography on the home page — and its one structural device is the **1 px hairline
grid**: pricing and services are both a single `rounded-2xl` block whose cells are separated by the
block's own ground showing through `1px` gaps.

Provenance note: this design is **absent from `TEMPLATES.md`**, not mis-attributed to another app.
The catalogue crawl in `docs/catalog-coverage.md` found 256 designs on ColorLib's own listing that the
checklist never recorded (42 standalone + 214 snippet variants). `backstop` is the second standalone
design prepped after the checklist was exhausted (the first was `airwise` → `thermly`), and no spec on
main names `template/backstop` — so there is no false `[x]` row to repair, only a row to add.

## Document order

| # | band | ground | notes |
| --- | --- | --- | --- |
| 0 | licence strip | `ink-800` `#242932`, `h-9`, `text-xs` | three label/value pairs + amber star + `4.9` + `380+ reviews (sample)` |
| — | header | `bg-white/90` + `backdrop-blur-lg`, 1 px `ink-100`, sticky | logo lockup; six links; city pill; `tel:` pill; solid CTA; disclosure below `xl` |
| 1 | hero copy (7/12) | `ink-50` `#f6f7f9`, container `py-14 lg:py-20` | eyebrow, two-tone `h1` (60 px at `lg`), lede, `4.9` rating, four ticks in 2 columns |
| 2 | quick-book card (5/12, `#quote`) | white `rounded-2xl` + `shadow-md` | name, phone, select (6 options), full-width submit, fine print |
| 3 | `process` | white, `.section` | eyebrow, h2, lede, `<ol>` of four steps; `01`–`04` + hairline rule |
| 4 | `pricing` | white | six cells in one hairline block; price lines in `primary-700`; sample footnote |
| 5 | `why-us` | `ink-50` | figure (4:3) + caption left; `<dl>` of four left-bordered items right |
| 6 | `services` | white | six cells, same hairline block; `Free` on the reminder service |
| 7 | `areas` | white | 5/7 split: copy left, twelve towns in a bordered 2→3 column list right |
| 8 | `testimonials` | `gray-50` `#f9fafb` | pill badge, h2, carousel of three cards, dots + `lg` arrows, 5 s autoplay |
| 9 | `faq` | white | pill badge, h2, five `divide-y` rows, **exclusive** expansion |
| 10 | `contact` | `primary-700` `#263fa8` | centred h2, one line, white solid CTA + 2 px white/40 outline `tel:` |
| — | footer | `gray-900` `#111827`, `pt-16 lg:pt-24` | brand block (4) + three link columns (5) + newsletter (3) + legal bar |
| — | chrome | — | preloader, scroll-progress bar, skip link, cookie strip, back-to-top |

Total: `header` + 10 `<section>`s (the hero is one, holding `#quote`) + `footer`. Every band below the
hero is `.section` = `padding-block: 5rem` / `lg: 7rem`.

## DOM skeleton (abridged, classes verbatim)

```html
<div data-licence-bar class="w-full border-b bg-ink-800 text-ink-100 border-transparent">
  <div class="container mx-auto flex h-9 items-center justify-between gap-4 px-4 text-xs lg:px-8">
    <ul class="flex min-w-0 items-center gap-x-4 gap-y-1 overflow-hidden">
      <li class="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
        <span class="opacity-70">Certified tester</span><span class="font-semibold">NE #00000</span></li>
      ...
    </ul>
    <p class="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium">
      <svg class="h-3.5 w-3.5 text-amber-400">…</svg><span>4.9</span>
      <span class="opacity-70">380+ reviews on Google (sample)</span></p>
  </div>
</div>

<header data-header class="sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg">
  <div class="container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
    <a class="flex shrink-0 items-center gap-2"><img class="h-8 w-auto lg:h-9" …></a>
    <nav class="hidden min-w-0 xl:flex xl:items-center xl:gap-7" aria-label="Main navigation">
      <a class="whitespace-nowrap text-sm font-semibold text-ink-600 hover:text-primary-700">…</a> ×6
    </nav>
    <div class="flex shrink-0 items-center gap-2">
      <span class="hidden 2xl:block"><a href="#service-areas"
        class="inline-flex items-center rounded-full border border-ink-200 px-3 py-1.5 text-sm">Omaha, NE</a></span>
      <a href="tel:5551501500" class="… rounded-full …">(555) 150-1500</a>
      <a class="btn-primary">Book a test</a>
      <button data-mobile-toggle aria-expanded="false" class="xl:hidden">…</button>
    </div>
  </div>
</header>

<main id="main-content">
  <section class="bg-ink-50">
    <div class="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
      <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7 lg:pt-6">
          <p class="text-sm font-bold uppercase tracking-wide text-primary-700">Omaha · Certified backflow tester</p>
          <h1 class="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
            You got the letter. <span class="text-primary-600">This takes twenty minutes.</span></h1>
          <p class="mt-5 max-w-xl text-lg text-ink-500">…</p>
          <p class="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">4.9 …</p>
          <ul class="mt-8 grid gap-3 sm:grid-cols-2">
            <li class="flex gap-2.5 text-base font-medium text-ink-700">✓ Fixed price, published, no survey first</li> ×4
          </ul>
        </div>
        <div id="quote" class="lg:col-span-5">
          <div class="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8">
            <h2 class="text-xl font-bold text-ink-800 lg:text-2xl">Book a test</h2>
            <form class="space-y-4 mt-6" action="#" method="post">
              <input class="mt-1.5 block w-full rounded-lg border border-ink-200 px-4 py-3 …">
              <select class="…">…6 options…</select>
              <button class="w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold text-white hover:bg-primary-700">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="process" class="section bg-white">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="max-w-2xl"><p class="text-sm font-bold uppercase tracking-wide text-primary-700">The letter</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-ink-800">…</h2>
        <p class="mt-4 text-lg text-ink-500">…</p></div>
      <ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
        <li>
          <div class="flex items-baseline gap-3">
            <span class="text-sm font-bold tabular-nums text-primary-600">01</span>
            <span class="h-px flex-1 bg-ink-100" aria-hidden="true"></span>
          </div>
          <h3 class="mt-4 text-lg font-bold text-ink-800">…</h3>
          <p class="mt-2 text-ink-500">…</p>
          <p class="mt-3 text-sm font-semibold text-primary-700">You may not know where</p>
        </li> ×4
      </ol>
    </div>
  </section>

  <section id="pricing" class="section bg-white">
    <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100
                sm:grid-cols-2 lg:grid-cols-3">
      <div class="flex flex-col bg-white p-6 lg:p-8">
        <h3 class="text-lg font-bold text-ink-800">Residential irrigation device</h3>
        <p class="mt-2 flex-1 text-ink-500">…</p>
        <p class="mt-4 text-sm font-bold text-primary-700">$85</p>
      </div> ×6
    </div>
  </section>

  <section id="why-us" class="section bg-ink-50">
    <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <figure class="order-last lg:order-first">
        <img class="w-full rounded-2xl object-cover" …><figcaption class="mt-3 text-sm text-ink-400">…</figcaption>
      </figure>
      <div><p class="text-sm font-bold uppercase tracking-wide text-primary-700">Why anyone bothers</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">…</h2>
        <dl class="mt-8 space-y-6">
          <div class="border-l-2 border-primary-600 pl-5"><dt class="text-base font-bold text-ink-800">…</dt>
            <dd class="mt-1 text-ink-500">…</dd></div> ×4
        </dl></div>
    </div>
  </section>

  <section id="services" class="section bg-white">  <!-- same hairline block, 6 cells --> </section>

  <section id="areas" class="section bg-white">
    <div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-ink-800">Where we work</h2>…</div>
      <div class="lg:col-span-7">
        <ul class="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
          <li class="border-b py-2.5 text-base text-ink-700 border-ink-100">Omaha</li> ×12
        </ul>
      </div>
    </div>
  </section>

  <section id="testimonials" class="bg-gray-50 py-20 lg:py-28">
    <div class="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">Reviews</div>
    <div class="relative mt-16" data-carousel>
      <div class="overflow-hidden"><div class="flex transition-transform duration-500 ease-out">
        <div class="flex-shrink-0 px-3">
          <div class="rounded-2xl bg-white p-8 shadow-soft">
            <div class="mb-6 flex gap-1"><svg class="h-5 w-5 text-primary-400">★</svg> ×5</div>
            <blockquote class="text-lg font-medium text-gray-900">…</blockquote>
            <div class="mt-6 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-600">R</div>
              <div><div class="font-semibold text-gray-900">Reggie N.</div>
                   <div class="text-sm text-gray-600">Papillion</div></div>
            </div>
          </div></div> ×3
      </div></div>
      <button data-carousel-prev class="absolute -left-4 top-1/2 hidden lg:flex …" aria-label="Previous testimonial">
      <button data-carousel-next class="absolute -right-4 top-1/2 hidden lg:flex …" aria-label="Next testimonial">
      <div data-carousel-dots class="mt-8 flex justify-center gap-2"></div>
    </div>
  </section>

  <section id="faq" class="bg-white py-20 lg:py-28">
    <div class="mx-auto mt-16 max-w-3xl"><div class="divide-y divide-gray-200">
      <div class="py-6">
        <button data-faq-toggle class="flex w-full items-center justify-between text-left" aria-expanded="false">
          <span class="text-lg font-semibold text-gray-900">What happens if I ignore the letter?</span>
          <span data-faq-icon class="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 …">+</span>
        </button>
        <div class="overflow-hidden transition-all duration-300" style="max-height:0;opacity:0"><p class="pt-4 text-gray-600">…</p></div>
      </div> ×5
    </div></div>
  </section>

  <section id="contact" class="bg-primary-700 py-20 lg:py-28">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Letter on the counter?</h2>
      <p class="mx-auto mt-5 max-w-xl text-lg text-primary-100">Fixed price, twenty minutes, filed the same day.</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a class="inline-flex rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 hover:bg-primary-50">Book a test</a>
        <a href="tel:5551501500" class="inline-flex rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white">Call (555) 150-1500</a>
      </div>
    </div>
  </section>
</main>

<footer class="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
  <div class="container mx-auto px-4 lg:px-8">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-4">logo-light · blurb · 3 × <a class="rounded-lg bg-gray-800 p-2.5"> · address · phone · mail</div>
      <div class="grid gap-8 sm:grid-cols-3 lg:col-span-5">
        <div><h3 class="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
             <ul class="mt-4 space-y-3"><a class="text-gray-400 hover:text-white">…</a> ×4</ul></div> ×3
      </div>
      <div class="lg:col-span-3"><h3 …>Stay Updated</h3><p class="mt-4 text-gray-400">…</p>
        <form class="mt-4" data-newsletter-form>
          <input class="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-white">
          <button class="rounded-lg bg-primary-600 px-4 py-2.5 font-medium text-white hover:bg-primary-700">Subscribe</button>
        </form></div>
    </div>
    <div class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 sm:flex-row">
      <p class="text-sm text-gray-500">© 2026 Backstop Backflow. All rights reserved.</p>
      <div class="flex gap-6"><a class="text-sm text-gray-500">Privacy Policy</a><a …>Terms of Service</a></div>
    </div>
  </div>
</footer>
```

## CSS token reference (paste-ready `@theme` for `apps/flowcert/src/index.css`)

```css
@theme {
  --color-primary-50:  #eef4ff;
  --color-primary-100: #dce7fd;
  --color-primary-200: #bfd3fc;
  --color-primary-300: #94b5f9;
  --color-primary-400: #628ef3;
  --color-primary-500: #3f6be8;
  --color-primary-600: #2d4fd0;  /* brand: CTA, submit, ordinals, prose links */
  --color-primary-700: #263fa8;  /* closing band, eyebrows, price lines, hover */
  --color-primary-800: #243785;  /* dark-mode tint only (unused in the light build) */
  --color-primary-900: #22326a;  /* dark-mode tint only */

  --color-ink-50:  #f6f7f9;  /* hero + why-us ground */
  --color-ink-100: #eceef2;  /* hairlines, dividers, header border */
  --color-ink-200: #d8dce4;  /* input + pill borders */
  --color-ink-300: #b0b7c6;  /* placeholders */
  --color-ink-400: #818b9f;  /* fine print */
  --color-ink-500: #606a7e;  /* body copy, ledes */
  --color-ink-600: #475061;  /* nav links */
  --color-ink-700: #373e4b;  /* labels, ticks, town names */
  --color-ink-800: #242932;  /* headlines, licence strip */
  --color-ink-900: #161a20;  /* deepest ground */

  --font-sans: "Inter", system-ui, sans-serif;               /* Google Fonts 400/500/600/700/800 */
  --font-mono: "JetBrains Mono", Consolas, monospace;        /* 500/700 — lockup sub-label only */

  --radius-lg: 0.5rem;   /* controls, buttons */
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;    /* cards, hairline blocks */

  --shadow-card: 0 4px 16px -4px #0000001a;                              /* testimonial card */
  --shadow-btn: 0 10px 15px -3px #2d4fd040, 0 4px 6px -4px #2d4fd040;    /* .btn-primary */
}
```

Not in `@theme` because Tailwind already ships them, but named here so the implementer does not
"correct" them: the lower bands use stock `gray-50 #f9fafb`, `gray-100 #f3f4f6`, `gray-200 #e5e7eb`,
`gray-300 #d1d5db`, `gray-400 #9ca3af`, `gray-500 #6b7280`, `gray-600 #4b5563`, `gray-700 #374151`,
`gray-800 #1f2937`, `gray-900 #111827`; the single licence-strip star is `amber-400`, kept in the
sheet as `oklch(82.8% .189 84.429)` ≈ `#ffb900`.

## Screenshot analysis (2400 × 1892)

* **Frame:** a macOS browser window shot — traffic lights, a light chrome bar, then the page. The
  dark licence strip reads as the top of the *page*, not the browser chrome: it carries the three
  credential pairs and the amber-star rating at 12 px.
* **Header:** 80 px, white with a translucent blur, hairline bottom border, logo lockup at the left
  (dark rounded plate + `Backstop` + a tiny mono `BACKFLOW`), six 13–14 px links centred, then a
  bordered `Omaha, NE` pill, a phone pill and one solid blue `Book a test`.
* **Hero:** the left 7 columns on `#f6f7f9`; 12 px blue caps eyebrow; headline at ~60 px with the
  second sentence in `#2d4fd0`; a single 18 px grey paragraph; the rating line; four ticks in two
  columns with small blue checks. The right 5 columns are a white card that is visually *lifted* by a
  soft `shadow-md`, not bordered boldly.
* **First band below the fold:** white, eyebrow `THE LETTER`, a 36 px near-black h2, a grey lede, then
  three columns of steps whose tops are a blue ordinal and a hairline running right — step 04 starts
  the second row, which is the tell that the grid is a plain 3-column `sm:grid-cols-3`.
* **What the screenshot does NOT show:** pricing, why-us, services, areas, testimonials, FAQ, the
  closing band and the footer. Those were read from the DOM and the sheet (all tokens above are
  measured, not inferred from the shot).

## Section-by-section fidelity notes

1. **Licence strip** — `h-9` (36 px) with the first item always visible, the second
   (`Results filed for you`) and third (`Serving …`) hidden below `sm`. Labels `opacity-70`, values
   `font-semibold`. The rating block is 14 px amber glyph + `4.9` + `opacity-70` tail.
2. **Header** — desktop nav switches on at `xl`, not `lg`; the source comments explain the decision
   (six links + two pills + CTA do not fit at 1024; the last link used to render under the pill). The
   city pill is held back to `2xl` for the same reason. Reproduce those two breakpoints, not `lg`.
3. **Hero** — copy column `lg:col-span-7 lg:pt-6`, card `lg:col-span-5`; the headline's second
   sentence is a `span` in `primary-600` (so the two-tone is not two headings). The rating line is one
   `p` (`inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600 mt-6`) holding five
   `h-4 w-4 text-amber-400` stars, `4.9` in `font-bold` and the tail in `opacity-80` — note it is a
   *different* treatment from the licence strip (14 px stars, plain `4.9`, `opacity-70` tail, whole
   block `font-medium`). Ticks are a `<ul>` of four `flex gap-2.5` items with `aria-hidden` check
   icons.
4. **Quick-book card** — `rounded-2xl border-ink-100 shadow-md p-6 lg:p-8`; three fields only; the
   select's first option is the empty placeholder `Choose the closest match` (a `required` select
   with `value=""`), then the six reasons in the reference order: annual test / irrigation /
   commercial / new installation / failed and needs repair / do not know. Fine print is `text-xs`
   centred `ink-400`.
5. **Explainer** — `<ol>` (not divs) of four; ordinal `01`–`04` `tabular-nums`; the rule is
   `h-px flex-1 bg-ink-100` and `aria-hidden`; each step's blue micro-link is the *only* coloured text
   in the cell.
6. **Price list** — one block: `grid gap-px overflow-hidden rounded-2xl border border-ink-100
   bg-ink-100`, cells `bg-white p-6 lg:p-8 flex flex-col`, blurb `flex-1` so price lines align on the
   last baseline. Six cells in one flat grid (not three "cards" + three "add-ons"). Footnote is
   `text-sm text-ink-400` **outside** the block.
7. **Why-us** — `figure` is `order-last lg:order-first`; the `<dl>` items are
   `border-l-2 border-primary-600 pl-5` with `space-y-6`; the fourth item is the punchline ("the
   reminder is the actual service"), so it must not be merged with the third.
8. **Services** — same block as pricing (share one component with a `cells` prop); six cells; the
   reminder service's price is the literal word `Free`, not `$0`.
9. **Areas** — the town list is `grid-cols-2 sm:grid-cols-3` of `border-b py-2.5` rows on
   `border-ink-100`; twelve names, plain text.
10. **Reviews** — carousel mechanics from the kit script: three slides per view at `lg` (so with
    three cards the track has one position and both arrows are hidden), two at `sm`, one below;
    `transition-transform duration-500 ease-out`; dots are `h-2.5` pills that widen to `w-8` when
    active; autoplay every 5 s, cleared on `mouseenter` and resumed on `mouseleave`.
11. **FAQ** — exclusive: opening one sets every sibling's `max-height: 0` and `opacity: 0`. The icon
    circle is `bg-gray-100` 32 px with the `+` rotated 45° when open. Rows are `py-6` inside a
    `divide-y divide-gray-200` column of `max-w-3xl`.
12. **Closing band** — `bg-primary-700` full-bleed, centred `max-w-3xl`, `text-primary-100` subline,
    white solid CTA and a **2 px** `border-white/40` outline CTA (not 1 px), both `px-8 py-4`.
13. **Footer** — 12-col grid 4/5/3; social tiles are `rounded-lg bg-gray-800 p-2.5` with
    `hover:bg-gray-700`; the newsletter is an inline `flex` with a `min-w-0 flex-1` input; legal bar
    `mt-16 border-t border-gray-800 py-8`.
14. **Chrome** — preloader is a white overlay with a 40 px ring (`border-4`, `border-t-primary-600`);
    scroll-progress is `h-0.5 bg-primary-600` fixed at the very top; back-to-top is a 48 px
    `rounded-full bg-primary-600` circle with `shadow-primary-600/25`, hidden until 300 px.

## Source → React adaptation

| reference | recreation | note |
| --- | --- | --- |
| Astro `.astro` page + one kit script | `src/App.tsx` composing `src/components/*Section.tsx` | one component per band, same order |
| `data-*` delegated listeners (`data-faq-toggle`, `data-carousel`, `data-cookie-*`, `data-mobile-toggle`) | React state per band | no global listeners, no `document.querySelector` |
| `max-height` accordion animation | `grid-template-rows: 0fr → 1fr` or measured height on a `ref` | keep the `overflow-hidden` + `duration-300` feel |
| IntersectionObserver reveal (`data-animate`, `translateY(20px)`, 0.6 s) | one `useReveal` hook returning a class; resolves visible when `IntersectionObserver` is undefined or reduced motion matches | house rule: derive, never `setState` from an effect |
| carousel `translateX` by measured slide width | same maths with a `ref` width, recomputed on resize; autoplay via `setInterval` in an effect that clears on unmount | tests use fake timers; arrows hidden when `maxIndex === 0` |
| `localStorage` cookie choice | component state | deviation 9 in the spec |
| preloader overlay | derived `hidden` from `document.readyState` | deviation 10 |
| nav `#service-areas` (dead) | `#areas` | deviation 7 |
| price/service/footer link tables | typed arrays in `src/data/` | keeps copy out of JSX and makes counts testable |
| inline SVG glyphs | `lucide-react` (`Check`, `Star`, `Phone`, `Plus`, `ChevronLeft/Right`, `ArrowUp`) | no copied paths |

## Sibling comparison (same ColorLib kit, different accent)

`backstop` belongs to the **new local-trade kit**: the seven other standalone designs in the same
listing bucket (HVAC in Tulsa and in Fort Worth, boilers in Leeds, water heaters in Richmond, water
softeners in Tucson, a 24-hour plumber in Austin, and the HVAC design already prepped as **Thermly**)
are all Astro + Tailwind 4 and all share the `.section` rhythm, the hairline block, the
licence/utility strip and a seven-step `primary` ramp beside an `ink` ramp. Measured 2026-10-24 from
each design's `_astro/Base.<hash>.css` (the sibling slugs are deliberately not written here — a bare
un-prepped slug in `docs/templates/` masks that item for the prepping scan):

| design | accent `primary-600` | band ground `ink-50` | headline `ink-800` | steps used as `bg-primary-N` |
| --- | --- | --- | --- | --- |
| **this design** (backflow testing) | `#2d4fd0` indigo | `#f6f7f9` | `#242932` | 50/100/200/400/500/600/700 |
| HVAC, Tulsa | `#d41f1f` red | `#f6f7f8` | `#20242d` | 50/100/200/400/500/600/700 |
| 24-hour plumber, Austin | `#e5322d` red | `#f6f6f6` | `#141414` | 50/100/200/400/500/600/700 |

So the ramp *shape* is the kit's, the accent is the design's: do not copy a sibling's palette. This
design's sheet also defines `primary-300 #94b5f9`, `primary-800 #243785` and `primary-900 #22326a`,
which appear **only** as dark-mode text/border/tint values — the light build needs 50/100/200/400/
500/600/700, exactly the seven the siblings use as `bg-primary-N`.
The nearest neighbours by subject are the Austin plumber design (emergency plumbing: 24/7 promise,
service-area list) and **Thermly** (arrival-window booking) — but this design's differentiator is
that its hero asks for **three fields, not a wizard**, and that its price list is a *published band*
with six flat cells rather than plan cards.
