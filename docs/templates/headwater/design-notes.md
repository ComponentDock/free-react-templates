# Headwater — design notes

Recreation of ColorLib **Springwell** (`springwell`) — https://colorlib.com/wp/template/springwell/ ·
live preview https://preview.colorlib.com/theme/springwell/ · read **2026-10-25** with `curl -4`, plus
`getComputedStyle` / `getBoundingClientRect` in Playwright (Chromium from
`/root/free-templates-firebase/node_modules/playwright`) at 1440 × 900, 1280, 1024, 768, 390 and 320.

Everything here is measured. Where a value is a reconstruction (Tailwind 4 inlines theme colours, so the sheet
carries **no** `--color-sand-*` / `--color-ink-*` / `--color-primary-*` custom properties), the provenance is
stated.

## The thesis, in one paragraph

This is a **product catalogue for water treatment**, not an emergency service page. Three consequences drive
every layout decision: the nav's first item is a **Products dropdown**, the hero image is **the installed unit**
(square, warm, cream-compatible), and the only interactive element on the page is a **three-question quiz** that
ends in a recommendation which is sometimes *"Honestly, nothing yet."* There is **no form and no `<input>`
anywhere on the home page** — the conversion happens on `/contact`, one route away.

## Structure order (measured at 1440 × 900)

| # | band         | element                                       | ground              |  top | height | notes |
| - | ------------ | --------------------------------------------- | ------------------- | ---: | -----: | ----- |
| 0 | header       | `<header data-header>` sticky                 | `#fff`/90, blur 16  |    0 |     81 | 1 px `#eae8e1` bottom border |
| 1 | hero         | `section.bg-sand-100` (no id)                 | `#f5efe6`           |   81 |    736 | 6/6 split, 576² image right |
| 2 | quiz         | `section#quiz.section`                        | `#ffffff`           |  817 |    782 | 3 fieldsets, 10 chips, 1 result |
| 3 | products     | `section#products.section`                    | `#fbf8f3`           | 1599 |  1,093 | `<ul>` 4 × 286 |
| 4 | why-us       | `section#why-us.section`                      | `#f6f5f1`           | 2692 |    800 | 576 img + 4 left-rule items |
| 5 | service      | `section#service.section`                     | `#ffffff`           | 3492 |    783 | 1 px hairline 3-col, 4 cells |
| 6 | testimonials | `section#testimonials`                        | `#f9fafb`           | 4275 |    768 | carousel 3/2/1, 0 dots at 1440 |
| 7 | contact      | `section#contact`                             | `#33724c`           | 5043 |    440 | white pill + outline pill |
| 8 | footer       | `<footer>`                                    | `#111827`           | 5483 |    568 | `pt-96`, 4/5/3 |

Fixed chrome (out of flow): `#preloader` (`inset-0`, `z-[100]`, `bg-sand-50`, removed on `load`),
`#scroll-progress` (2 px, `top-0`, `z-[60]`), `#back-to-top` (48 px, `bottom-6 right-6`, `z-50`),
`#cookie-consent` (`bottom-0`, `z-50`).

Document height: **6,051** at 1440 and 1280 · **6,171** at 1024 · **7,888** at 768 · **10,030** at 390 ·
**10,481** at 320. `scrollWidth === clientWidth` at all six widths — **the reference has no overflow at any
audited size**, so any horizontal scrollbar in the port is a new bug.

## DOM skeleton

```
<html lang="en" class="">                       ← light by default; `dark` is runtime-toggled
  <body class="min-h-screen">
    <div id="preloader" class="fixed inset-0 z-[100] … bg-sand-50">
      <div class="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
    </div>
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 …">
    <div id="scroll-progress" class="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600" style="width:0%">

    <header data-header class="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-lg">
      <div class="container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
        <a href="/"><img logo.svg 180×36 /></a>
        <nav class="hidden min-w-0 xl:flex xl:items-center xl:gap-7" aria-label="Main navigation">
          <div class="group relative">                       ← Products hover dropdown
            <button>Products <svg chevron class="group-hover:rotate-180"/></button>
            <div class="invisible absolute … group-hover:visible group-hover:opacity-100">
              <div class="min-w-48 rounded-xl border border-ink-100 bg-white p-2 shadow-md">4 links</div>
            </div>
          </div>
          <a data-nav-link="/learn">Learn</a> · <a data-nav-link="/about">About</a> · <a data-nav-link="/contact">Contact</a>
        </nav>
        <div class="flex shrink-0 items-center gap-2">
          <span class="hidden 2xl:block"><a href="#service-areas" pill>Tucson, AZ</a></span>   ← ≥1536 only
          <span class="hidden md:block"><a href="tel:5550100221" pill>(555) 010-0221</a></span>
          <button data-dark-toggle aria-label="Toggle dark mode">moon · sun</button>
          <a href="/#quiz" class="hidden … xl:inline-flex">Test your water</a>
          <button data-mobile-toggle aria-expanded="false" aria-label="Open menu">burger</button>
        </div>
      </div>
      <div data-mobile-menu class="hidden xl:hidden"><nav class="border-t … px-4 py-4">accordion + 4 rows</nav></div>
    </header>

    <main id="main-content">
      <section class="bg-sand-100">                        ← hero
        <div class="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
          <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div class="lg:col-span-6"> eyebrow · h1 · lede · stars · 2 CTAs </div>
            <div class="lg:col-span-6"><img aspect-square rounded-2xl /></div>
          </div>
        </div>
      </section>

      <section id="quiz" class="section bg-white">
        <div class="container …"><div class="mx-auto max-w-3xl">
          <div class="text-center">eyebrow · h2 · lede</div>
          <div data-water-quiz data-config='{outcomes,fallback}' class="mt-10 rounded-2xl bg-sand-100 p-6 lg:p-8">
            <fieldset><legend/> 3 chips</fieldset> <fieldset class="mt-8">4 chips</fieldset> <fieldset class="mt-8">3 chips</fieldset>
            <div data-quiz-result class="mt-8 hidden rounded-xl border border-primary-200 bg-white p-6">
              <p>Most likely what you need</p><p data-quiz-product/><p data-quiz-explanation/>
              <a data-quiz-link>See this product</a><p>This is a guide, not a test result…</p>
            </div>
          </div>
        </div></div>
      </section>

      <section id="products" class="section bg-sand-50">   ← <ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <section id="why-us"  class="section bg-ink-50">     ← figure(order-last lg:order-first) + <dl> 4 items
      <section id="service" class="section bg-white">      ← div.grid.gap-px.rounded-2xl.bg-ink-100, 4 cells
      <section id="testimonials" class="bg-gray-50 py-20 lg:py-28">
        <div class="relative mt-16" data-carousel>
          <div class="overflow-hidden"><div class="flex transition-transform duration-500" data-carousel-track>
            3 × <div class="flex-shrink-0 px-3" data-carousel-slide><div class="rounded-2xl bg-white p-8 shadow-soft">
          <button data-carousel-prev> · <button data-carousel-next> · <div data-carousel-dots>
      <section id="contact" class="bg-primary-700 py-20 lg:py-28">
    </main>

    <footer class="bg-gray-900 pt-16 lg:pt-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
        brand(col-span-4) · links(grid sm:grid-cols-3 col-span-5) · water-testing(col-span-3)
        bottom bar mx-auto mt-16 border-t border-gray-800 py-8
    </footer>
    <div id="cookie-consent" role="dialog" aria-label="Cookie consent" class="fixed bottom-0 … translate-y-full">
    <button id="back-to-top" aria-label="Back to top">
```

## CSS token reference block

```css
@theme {
  /* warm paper */
  --color-sand-50:  #fbf8f3;
  --color-sand-100: #f5efe6;

  /* warm charcoal-green: text + hairlines */
  --color-ink-50:  #f6f5f1;
  --color-ink-100: #eae8e1;
  --color-ink-200: #d3cfc3;
  --color-ink-300: #aaa595;
  --color-ink-400: #78725f;
  --color-ink-500: #57523f;
  --color-ink-600: #3d3a2c;
  --color-ink-700: #2c2a22;
  --color-ink-800: #22301f;
  --color-ink-900: #161e14;

  /* brand: deep sage */
  --color-primary-50:  #f1f7f3;
  --color-primary-100: #dfede4;
  --color-primary-200: #bfdbca;
  --color-primary-300: #94c2a7;
  --color-primary-400: #63a57f;
  --color-primary-500: #4a9268;
  --color-primary-600: #3f8f5f;
  --color-primary-700: #33724c;
  --color-primary-800: #2a5b3e;
  --color-primary-900: #234a33;

  --color-star: #fbbf24;              /* amber-400 — hero stars only */

  --font-sans:  "DM Sans", system-ui, sans-serif;
  --font-serif: "Lora", Georgia, serif;

  --radius-lg: .5rem;                 /* buttons */
  --radius-xl: .75rem;                /* quiz result */
  --radius-2xl: 1rem;                 /* cards, images, quiz card */

  --shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1);
}

.section { padding-block: 5rem; }      /* 80 px  → 112 px at lg */
@media (min-width: 1024px) { .section { padding-block: 7rem; } }
```

Stock Tailwind greys are used for exactly four jobs: `gray-50` testimonial band, `gray-900` footer,
`gray-800` footer chips/rules, `gray-950` dark-mode ground; plus the legal/attribution ink
(`gray-400/500/600`).

## Screenshot analysis (`springwell-template.jpg` → AVIF → `shot.png`, 2400 × 1892)

- **Header**: white bar, small **green droplet + serif wordmark** left, four nav items centred, and on the right
  **two outlined pills** (pin + *Tucson, AZ*; phone + *(555) 010-0221*) then a **green rounded CTA**. The
  location pill is `2xl`-only: at 1440 it disappears. Reproduce the breakpoint, not the marketing crop.
- **Hero**: a **cream `#f5efe6` ground** with a left column (green uppercase eyebrow → **two-line serif
  headline** → two-line sans lede → five amber stars + "4.9" + review count → green filled + thin outlined
  buttons) and a **square right-hand photograph of chrome plumbing fittings**, 16 px radius. The photo's warm
  browns sit deliberately inside the cream band — a cold/blue water photo would break it.
- **Below the fold**: white band with a **centred serif heading** and a **cream quiz card** (numbered
  questions, pill chips). Then cream cards on cream ground, a rule-marked commitment list, a hairline service
  table, grey reviews, one **deep-green** closing band, grey footer.
- **Overall read**: calm, warm, editorial — a *catalogue*, not a call-out page. No urgency devices at all
  (no countdown, no "24/7" strip, no sticky call bar).

## Section-by-section fidelity notes

**Header.** The breakpoint choice is load-bearing and the source documents it in an HTML comment: the desktop
nav switches on at **`xl` (1280)**, not `lg`, because a seven-item trade header plus phone pill plus toggle
plus CTA does not fit at 1024–1279 (its own comment records "one to four buried links across that whole range").
The city pill is held to **`2xl` (1536)** for the same reason. Port both decisions.

**Hero.** 12-col grid with **6/6** columns and `gap: 64px`; the text column is 576 and the image 576², so the
band is a clean half-and-half. `h1` is `text-4xl` → `sm:text-5xl` → `lg:text-6xl` with `leading-[1.15]` and **no
tracking correction** (Lora's metrics do not want it). The star line is *not* a rating widget — five amber
stars, a bold number and a lineage string, all 14 px, 20 px tall.

**Quiz (`#quiz`).** The card is **cream on white**, 768 wide, `p-8`, radius 16. Ten chips in **3 / 4 / 3**
groups, 42 px tall. Pressed skin is expressed with `aria-pressed:` variants, so the attribute drives the
colour — no JS class toggling. The result card is a **white card with a `primary-200` border** inside the cream
card, which is the only place that border colour appears.

**Products (`#products`).** A `<ul>` of `<li>`, not divs — semantic and cheap. Card = image + `p-5` body;
the three spec rows are a `<dl>` with `justify-between` rows separated from the blurb by a 1 px `ink-100` rule.
Prices are **14/600 `primary-700`**, not a big display number: this is a catalogue line item, not a price card.

**Why-us (`#why-us`).** Figure is `order-last` on mobile (copy first, image after) and `order-first` at `lg`.
Four commitments are a `<dl>` where each item carries a **2 px `primary-600` left rule** and `pl-5` — that rule
is the section's only decoration.

**Service (`#service`).** The `gap: 1px` + `bg-ink-100` + `overflow-hidden rounded-2xl` trick makes four cells
read as one bordered table with internal hairlines. With four cells on a 3-column grid the fourth cell leaves a
gap in the second row — that is the authored layout, not a bug (do not synthesise a fifth cell).

**Testimonials (`#testimonials`).** Grey band, centred head, **three slides at 3 per view at ≥1024** so nothing
pages: no dots, no arrows. Cards are white with `shadow-soft` on grey, 48 px initials discs in `primary-100`.
Autoplay 5 s, pause on hover.

**Contact (`#contact`).** The only large green surface. White pill + 2 px `white/40` outline pill, both
203-ish × 56. Lede ink is `primary-100`, not white — that half-tone is what keeps the band from glaring.

**Footer.** Back to dark grey-900 with `pt-24`; **4 / 5 / 3** columns (384 / 488 / 280) where the middle 5 is
itself a 3-column grid. The fourth column is not a link list — it is a **Water testing** pitch with the green
CTA, which is the page's last conversion point.

## Source → React adaptation table

| source device                                | React port                                                                                     |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data-water-quiz` + `data-config` JSON blob  | typed `QUIZ_OUTCOMES` module const; `useState<Record<Question, Value>>({})`; outcome derived in render |
| `[data-quiz-question]` `aria-pressed` chips  | `<button type="button" aria-pressed={selected[q]===v}>` + `aria-pressed:` Tailwind variants      |
| `[data-quiz-result].classList.remove('hidden')` | keep the region mounted, toggle `hidden`, add `role="status"` `aria-live="polite"`             |
| `[data-carousel]` width math + 5 s interval  | `useState(index)`; `maxIndex = slides - perView` from a `matchMedia`/resize hook; arrows/dots rendered only when `maxIndex > 0`; interval cleaned up in the effect |
| `[data-dark-toggle]` + FOUC guard script     | `documentElement.classList.toggle('dark')` + `localStorage.theme`, initial value read in a lazy initialiser (no effect write) |
| `[data-mobile-toggle]` glyph `innerHTML` swap | two `lucide-react` icons swapped by a boolean (`Menu` / `X`), not a DOM rewrite                  |
| `#preloader` removed on `load`               | derive `hidden = loaded || document.readyState === 'complete'`; attach a `load` listener that sets state |
| `#cookie-consent` slide-up after 1,500 ms    | `useState` + `setTimeout` in an effect, `localStorage['cookie-consent']` guard, node unmounted on choice |
| `#scroll-progress` / `#back-to-top`           | one passive `scroll` listener + `requestAnimationFrame`-free width/opacity derivation            |
| `.section` padding rhythm                     | one `<Section>` primitive (`py-20 lg:py-28`) + `<Container>` (`max-w-7xl px-4 lg:px-8`)         |
| inline 36 SVGs                                | `lucide-react` (Droplet, Phone, MapPin, ChevronDown, Menu, X, Sun, Moon, Star, ArrowUp, ArrowRight) |
| Unsplash photographs                          | `https://picsum.photos/seed/headwater-<n>/<w>/<h>` — same kinds, never the same files            |
| `logo.svg` / `logo-light.svg`                 | original mark: `Droplet` glyph in `#3f8f5f` (light) / `#94c2a7` (dark) + Lora 600 wordmark       |

## Sibling comparison (same 2026 Astro house kit)

| slug        | recreation   | band story                                                                                       |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------ |
| `rooter24`  | jetline      | dark-only `#111` + red; phone as hero; six-chip triage; **no photographs**                        |
| `ridgeline` | cresting     | roofing/insurance-claim explainer                                                                 |
| `relay-auth`| gatehouse    | auth utility page                                                                                 |
| `rightsize` | enthalpy     | sizing/quote explainer                                                                            |
| **`springwell`** | **headwater** | **light warm-paper product catalogue; quiz as the form; the only kit sibling with a hero photograph and a cream ground** |

What makes `springwell` different from every other slug in this batch: it is the **only one built around a
product list** (prices with model specs, "Request a quote" per card), the **only one whose interactive device
replaces a form** rather than explaining a service, and the **only one using two typefaces deliberately**
(serif for the editorial half, sans for the operational half).

## Deltas recorded for the implementer

1. Placeholder photography (picsum), original logo mark, `lucide-react` icons — no source assets.
2. Fix the two dead `#service-areas` links, the malformed `tel:`, and the four `href="#"`.
3. Add `role="status"` + `aria-live="polite"` to the quiz result region.
4. The result card grows the band by ~180 px when it appears; either accept (parity) or reserve height and say
   which in the PR.
5. The third quiz question is collected but never matched — keep it, and keep the outcome stable when it changes.
6. Dark mode defaults to the OS preference when `localStorage.theme` is absent; keep that, and keep the toggle's
   accessible name accurate.
