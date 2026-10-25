# Tidewater — design notes

Reference: ColorLib **Marrow** (`marrow`), <https://preview.colorlib.com/theme/marrow/> (HTTP 200,
85,785 B, read 2026-10-25 with `curl -4`). Spec: `openspec/specs/template-tidewater/spec.md` (the
authority). These notes are the *why* behind the spec's numbers, plus the traps.

## Structure order (do not reorder, do not merge)

1. `#preloader` → skip link → `#scroll-progress` → `<header>` (sticky)
2. hero — cream gradient, badge, typewriter `h1`, lede, 3 CTAs, 4 Playfair stats, one photograph
3. counter band — `#f9fafb`, `border-y`, 4 Manrope count-ups in `primary-600`
4. `#books` — white; featured 5/7 spread + backlist ×4
5. `#tour` — `#f9fafb`; one divided `<ul>`, 6 rows
6. `#praise` — white; 4 ruled pull-quotes (2 cols) + 6-row prizes ledger
7. `#press` — `#f9fafb`; 3 bio cards, 3 headshots, 4 contact cells
8. `#faq` — white; 6-row single-open accordion
9. `#contact` — brand gradient; newsletter band
10. footer — `#111827`, 4 columns + legal bar
11. fixed: mobile CTA bar, cookie strip, back-to-top

Measured heights at 1440 × 900: header 81 · hero 1,409 · counters 238 · books 1,695 · tour 1,300 ·
praise 1,326 · press 2,817 · faq 901 · contact 480 · footer 506 · **document 10,762**. At 390 px the
document is 17,103 px.

## Section-by-section fidelity notes

### Hero

- It is **centred**, not split. One `max-w-4xl` column, then a `max-w-5xl` image below it. There is no
  side-by-side hero — a two-column "hero + image" layout is a different template.
- Two decorative blobs sit behind everything (`-z-10`, `aria-hidden`): 500 px `accent-200/45` and 400 px
  `primary-100/50`, both `blur-3xl`, one floating on an 8 s cycle and one reverse at 10 s, and **both
  parallaxed** (`+0.15` and `−0.1` of `scrollY`). They are the only gradient-ish colour on the page.
- The `h1` is **two lines with an explicit `<br>`**, line two a separate `<span>` that is both
  `italic` and the typewriter host. The typewriter array in the DOM is the *alternates only*; the
  reference runtime prepends `textContent`, giving **four** phrases, cycling every 3 s with a 300 ms
  fade + `translateY(10px)`.
- The stat row is **Playfair**, `border-t`, four items, and — critical — the values are **plain text**
  (`5 / 19 / 6 / 40`). The counters live in the *next* band. Two rows, two faces, two colours.

### Counter band

- `py-16 lg:py-20` (64 → 80), i.e. visibly tighter than every other band (80 → 112).
- Figures are `text-4xl lg:text-5xl font-bold` **Manrope** in `primary-600` (36 → 48 px); labels
  14/500 in `#4b5563`.
- The markup ships the literal text **`0`** inside each `[data-counter]`. That is an animation seed, not
  the design: with no `IntersectionObserver` (jsdom) or under reduced motion, render the final number.

### Books

- **No cover images exist on this page.** Five jackets are built from: `aspect-[2/3]`, a solid ground, a
  `radial-gradient(circle at 1px 1px, white 1px, transparent 0) 6px 6px` layer at `opacity .07`, a
  `w-3 bg-black/25` spine plus a 1 px `bg-white/20` hairline, and type. This is the design's thesis —
  "type-only covers so the design does not depend on cover art you may not have".
- Featured jacket 384 × 576, `max-w-sm`, `rounded-sm` (4 px — deliberately not soft), `shadow-2xl`,
  `ring-1 ring-black/20`, ground `primary-900` `#1c2231`.
- Featured right column: eyebrow `accent-700` +0.20 em, `h3` Playfair 36, a **`<dl>`** in a wrapping row
  (publisher / published / extent / ISBN — the first three have `sr-only` `<dt>`s, ISBN's is visible),
  three paragraphs, **four format rows** in a 2-col grid with `border-t` on each, then four retail pills.
- Backlist: four `a.group` cards, jacket 280 × 420, card 280 × 500, grounds `#2c3547`, `#7c4f24`,
  `#42516d`, `#563821` — two navy, two brown, alternating. Hover lifts the **jacket** 4 px
  (`group-hover:-translate-y-1`), not the card text.

### Tour

- One `<ul>` with `divide-y`, not six cards. Rows are 132–135 px at 1440 and ~277 px at 390 (where the
  date block becomes a horizontal line).
- The date block is `w-24`, centred from `sm`: month 12/600 uppercase +0.20 em `accent-700`, day
  **Playfair 36/36** `tabular-nums`, year 12 px `#9ca3af`.
- Four ticket states exist and they look different on purpose: `Tickets`, `Free entry`, `Waitlist` are
  outlined pill **links**; **`Sold out` is a dashed-border `#9ca3af` pill with `cursor-default` and no
  href**. Reproducing "Sold out" as an identical link is the easiest visible bug in the band.

### Praise

- Pull-quotes with a **2 px `accent-400` left rule and 24 px indent**, two per row (`gap-x-14 gap-y-12`),
  Playfair 24/39. Not cards, no quotation-mark glyphs as elements — the curly quotes are text.
- The attribution is one line: paper name in 600, then `Review ·` / `Lead review ·` /
  `Book of the Month ·` and the book title.
- The prizes block is a **twelve-column grid** (`1 / 5 / 4 / 2`): year `tabular-nums` grey, award medium,
  book in **Playfair italic**, result uppercase 600 `accent-700` right-aligned. Six rows, 57 px each.

### Press

- Three bio cards, 389 × 194, `rounded-lg` (8 px — the softest radius on the page), 1 px `#e5e7eb`, `p-6`.
- Word counts are shown as data (21 / 68 / 136) — keep them, they are the band's proof of usefulness.
- Copy-to-clipboard is **wired** in the reference (`data-copy-bio` + `data-bio-text` + `data-copy-label`):
  `navigator.clipboard.writeText`, an `execCommand('copy')` fallback on rejection, label → **"Copied"**
  for 2 s. Three independent buttons.
- Headshots: two **592 × 740** portraits (`aspect-[4/5]`) and one **1,216 × 521** landscape that spans
  both columns (`sm:col-span-2`). The third image is the same model cropped wide — keep the shape, use a
  placeholder.
- Contacts: four 286 × 105 cells — role eyebrow, name, organisation, `mailto:`.

### FAQ

- **The heading is Manrope 700 at 36/40, not Playfair.** Same for the `#contact` heading (Manrope 700,
  48/48). The four band heads above them are Playfair 600. Measured, twice. Do not "fix" it.
- Six rows, 768 px wide, 81 px tall, `divide-y`, question 16 px, glyph rotates 45°.
- The collapsed state is authored **inline in the markup** (`style="max-height: 0px; opacity: 0;"`) — a
  `max-height` grep in the stylesheet finds nothing, and the behaviour bundle only writes the *open*
  values. Check `[style]` attributes before concluding "the CSS collapses it".
- No `<details>`, no `aria-expanded` in the reference. Add the ARIA; keep the transition.

### Contact band

- Diagonal gradient `primary-600 → primary-800` (`to bottom right`) + a **10 % white dot grid at 40 px** +
  two 256 px `white/10` `blur-3xl` discs. Not the flat navy of the footer, and not the flat `primary-600`
  of the CTAs.
- Heading is **Manrope 700 48/48 white**; lede 18 px `primary-100` `max-w-xl`.
- CTAs are **radius 8** here while every other button on the page is full-radius. That is real: the band
  uses a different button shape.

### Footer

- `gray-900`, `pt-16 lg:pt-24`, grid `4 / 5 / 3` of twelve.
- Three link columns of four; the newsletter is the fourth head ("Stay Updated") with a bordered input on
  `#1f2937` and a submit — the only `<form>` on the page, and it has **no action and no handler**.
- Social squares are 40 px `bg-gray-800` radius 8 with `aria-label`s.
- Legal bar: copyright left, three links right.

## The "do not tidy" list

1. Two hues only — slate navy + sand gold. No third accent.
2. Serif for `h1`/band `h2`/book titles/quotes/day numbers; **sans for the FAQ and newsletter heads**.
3. Two stat rows in the hero area with different faces and different colours (Playfair text vs Manrope
   count-up).
4. Full-radius buttons everywhere **except** the contact band's radius-8 pair.
5. Jackets are CSS, never photographs, and stay `rounded-sm`.
6. Sold-out is a dashed non-link; the other ticket states are outlined links.
7. The hero is centred with the photograph **below** the copy, not beside it.
8. Tracking pair: display type tightened (−0.9 to −1.5 px), micro-labels opened (+0.14 → +0.28 em).

## Reference mechanics worth copying exactly

- Reveal: 70 elements, `opacity 0 / translateY(20px)`, `transition 0.6s ease-out`, per-element
  `transition-delay` from `data-delay` (0/50/60/80/100/120/150/160/180/200/240/250/300/350/400/500 ms),
  `threshold .1`, `rootMargin 0 0 -10%`, and a **whole-function bail-out** on
  `prefers-reduced-motion: reduce`.
- Smooth scroll: `a[href^="#"]:not([href="#"])` → target top minus `header.offsetHeight + 20`.
- Active nav: `rootMargin: -20% 0px -70% 0px`; `.nav-active` is `#111827` + 600 (white in dark). Only
  `#tour`, `#praise`, `#press` are ever observed — the other four labels are route paths in the reference.
- Counters: `threshold .5`, 2,000 ms, `1 - (1 - p)³`, and the formatter handles `+ % K M $ .`.
- Cookie: 1.5 s delay, keys `accepted` / `essential`, slide out then `remove()`.
- Theme: pre-paint inline script; also honour `prefers-color-scheme` when `theme` is unset.

## Pitfalls measured on this page

- **`marrow-template.jpg` is AVIF**, not JPEG (74,472 B, 2400 × 1892) and it is a macOS-window marketing
  composition, hero only. Never reproduce the frame/traffic lights/grey backdrop; convert before viewing.
- **The behaviour bundle is the shared house kit** (16,894 B here, unique hash): it also contains
  carousel, pricing-toggle, blog-filter, lightbox and `data-validate` handlers that this page never uses.
  Grep it per hook before writing a behaviour — `data-newsletter-form` appears **0×**, so that form is
  dead markup, while `data-copy-bio`, `data-parallax`, `data-typewriter`, `data-counter`, `data-video-modal`
  and the FAQ/cookie/theme/menu handlers are all live.
- **`#preloader` is removed by an inline end-of-body script**, not the bundle — a `preloader` grep in the
  JS returns nothing and would wrongly suggest it never disappears.
- **`id="mobile-cta"` is CSS-only** (`lg:hidden`); there is no handler and no `data-` hook.
- **Class census**: 419 unique classes, all 419 with a rule (0 phantom). Naive substring matching
  false-positives (`.border` inside `.border-t-primary-400`); Tailwind escapes leading digits
  (`.\32 xl\:block`), so a `.2xl\:` grep reports a false miss.
- **16 bare `#` anchors** exist in the reference (retail pills, ticket links, downloads, socials). All 16
  must resolve in the recreation.
- The four `data-nav-link` route values (`/books`, `/about`, `/blog`, `/contact`) will never activate:
  `getElementById('/books')` returns `null`, so the observer silently skips them. Don't invent scroll
  targets to "make the nav work".

## Cross-references

- Fidelity process: `docs/replication.md`. House rules: `AGENTS.md` (rule 5 — new name, no ColorLib string,
  Component Dock footer link).
- Sibling prep from the same 2026 Astro family, useful for kit assumptions:
  `openspec/specs/template-standpipe/spec.md` (Mainline), `template-endpaper` (Lantern),
  `template-emberly` (Heatline). **Never copy a sibling's colour ramp** — each design's sheet is measured
  on its own; this one's navy (`#42516d`) and sand (`#bc7f33`) are unique to it.
