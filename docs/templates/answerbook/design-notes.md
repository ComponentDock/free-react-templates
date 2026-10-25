# Answerbook — design notes (replicating ColorLib *Threadline*)

Source: `https://colorlib.com/wp/template/threadline/` · live `https://preview.colorlib.com/theme/threadline/`
(slug `threadline`, catalogue-gap row of `docs/catalog-coverage.md`) · product shot
`https://colorlib.com/wp/wp-content/uploads/sites/2/threadline-template.jpg` (2,400 × 1,892, 67 kB, **AVIF behind a
`.jpg`** — convert before viewing). Reference build: **Astro + Tailwind CSS 4**
(`_astro/Base.D_epE37E.css`, 65,700 B). Everything below was measured on 2026-10-25 with `curl -4`, the compiled
sheet, the 16 kB behaviour bundle, and Playwright/Chromium at 1440 / 768 / 390.

## What this one is

A **developer Q&A archive** — the page's whole argument is *the answer outlives the thread*. Threadline isn't shy
about it: the hero says *"Someone has already solved this"*, the four-step band says the archive is the point, and the
FAQ refuses deletion outright (*"deleting a solved thread takes value from everyone who would have found it later"*).
The copy is unusually specific for a template (lock contention, batching brokers, versioning an API), and that
specificity is the design — a forum page that posts real thread rows proves the place is alive in a way stock photos
never do.

**Port strategy: this preview *is* Tailwind.** Every band, every card, every chip is a utility string on an Astro
build, so the token table in the spec is the reference's own `@theme` read back out of the compiled output
(`bg-primary-600{background-color:#0d9488}`) — no eyeballing. Reproduce structure and metrics; never copy files.
Two things are *not* in the sheet and must be re-timed sensibly: the counter easing (2 s, `1-(1-p)^3`, threshold 0.5)
and the carousel (5 s autoplay, pause on hover, `perView` 3 / 2 / 1).

**The typographic idea is a split.** Space Grotesk carries every sentence; the **system monospace stack** carries every
number, tag, eyebrow, ranking figure and step label. That is why the page reads like a reference book: data is set in
a different voice from prose. Getting this wrong (mono everywhere, or mono nowhere) flattens the design more than any
colour change.

## Band order (do not reorder, do not insert)

1. skip link · 2 px scroll-progress bar
2. sticky header — 81 px incl. its 1 px rule; 65 px below `lg`
3. hero — status pill, two-line `h1` (line 2 = gradient typewriter), lede, 3 controls, 4-cell fact row, 1024 × 512 photo
4. counter strip — `border-y`, four figures animating 0 → final
5. `#questions` — chip *Newest*, heading, lede, CTA, five thread rows with a 144 px stat rail
6. `#tags` — 8 cards, 1 / 2 / 4 columns, hairline figure row per card
7. `#how-it-works` — 4 steps, gradient connector rule at `md+`
8. `#leaderboard` — real `<table>`, 5 rows, rank discs, mono figures
9. `#testimonials` — 3 quote cards, carousel (`data-carousel`)
10. `#faq` — 5 exclusive accordions
11. `#contact` — teal gradient band, dot grid, two blurred discs, two buttons
12. footer — `#111827`, brand column (4) + 3 link columns (5) + newsletter (3), bottom bar
13. chrome over the page: sticky mobile CTA bar, cookie dialog, back-to-top

Measured at 1440: **8,060 px** total (1,409 hero · 238 counters · 1,270 questions · 873 tags · 664 how-it-works ·
870 leaderboard · 768 testimonials · 820 FAQ · 500 closing · 568 footer). At 768: 8,419. At 390: 10,822. **No
horizontal overflow at any of the three widths** — `scrollWidth` equals the viewport and `scrollTo(200,0)` leaves
`scrollX` at 0.

## DOM skeleton (structure only, no classes to copy)

```html
<header data-header>            sticky, white/80 + blur, 1 px rule
  a.wordmark > img(logo, logo-light) | nav(a[data-nav-link] × 8) | button[data-dark-toggle] | a.cta | button[data-mobile-toggle]
  div[data-mobile-menu] > nav(a × 8)
<main id="main-content">
  section.hero                  gradient primary-50 -> white, 2 blobs (data-parallax)
    div.pill                     ping dot + "61,400 questions answered and still findable"
    h1                            "Someone has already" <br> <span data-typewriter='["solved this",…]'>.text-gradient
    p.lede | div.ctas (a.primary, a.secondary, button[data-video-modal]) | div.facts (4)
    div.photo > img(1024×512)
  section.counters              border-y, 4 × [data-counter]
  section#questions             header (chip, h2, p, a.btn-primary) + ol > li × 5
    li > div.rail (votes, answers chip, views) + div.body (bounty, accepted, h3>a, p.clamp-2, tags, time)
  section#tags                  chip + h2 + p + ul > li × 8 (chip>a, p, figure row)
  section#how-it-works          chip + h2 + p + ol > li × 4 (span 01..04, h3, p, footnote)
  section#leaderboard           chip + h2 + p + table (# / Member / Known for / Accepted / Reputation) × 5
  section#testimonials          pill + h2 + p + div[data-carousel] > track > 3 slides + prev/next + dots
  section#faq                   pill + h2 + p + div.divide-y > 5 × (button[data-faq-toggle] + panel)
  section#contact               gradient primary-600 -> primary-800, dot grid, 2 discs, h2 + p + 2 × a
</main>
<footer>                        brand / 3 link columns / newsletter / bottom bar
div#mobile-cta                  fixed bottom, lg:hidden
div#cookie-consent              fixed bottom, translateY(100%) -> 0 after 1.5 s
button#back-to-top              fixed bottom-right, opacity + translateY
```

## CSS token reference block (`@theme`)

```css
@theme {
  --font-sans: "Space Grotesk", system-ui, sans-serif;

  --color-primary-50:  #f0fdfa;
  --color-primary-100: #ccfbf1;
  --color-primary-200: #99f6e4;
  --color-primary-400: #2dd4bf;
  --color-primary-500: #14b8a6;
  --color-primary-600: #0d9488;   /* brand fill */
  --color-primary-700: #0f766e;   /* text on wash, hover */
  --color-primary-800: #115e59;   /* gradient end */

  --color-accent-100:  #fef3c7;
  --color-accent-300:  #fcd34d;
  --color-accent-400:  #fbbf24;   /* rank 1 */
  --color-accent-800:  #92400e;
  --color-accent-950:  #451a03;   /* MISSING in the reference; ship it (defect 8) */

  --radius-lg:  .5rem;   /* buttons, chips */
  --radius-xl:  .75rem;  /* cards */
  --radius-2xl: 1rem;    /* quote cards, hero photo */

  --shadow-soft:  0 4px 16px -4px rgb(0 0 0 / .1);
  --shadow-soft-hover: 0 12px 32px -8px rgb(0 0 0 / .14);
}
```

Gradient utilities the recreation needs: `.text-gradient` = `linear-gradient(to right, #0d9488, #2dd4bf)` with
`background-clip: text; color: transparent`; the hero band is `linear-gradient(to bottom, #f0fdfa, #fff)`; the closing
band is `linear-gradient(to bottom right, #0d9488, #115e59)`; the step connector is
`linear-gradient(to right, #99f6e4, #2dd4bf, #fcd34d)`.

## Screenshot analysis (product shot, 2,400 × 1,892)

A **browser-framed hero only** — it stops at the product photo, so it validates the top 1,400 px and nothing else.
What it shows: white/teal page, centred copy column, a pale teal pill with a dot, a two-line `h1` whose second line is
teal, three controls in a row (filled teal, white outline, round play chip + label), a four-figure row on a hairline,
and a wide rounded photo of hands on a laptop. Two things the shot cannot tell you and the DOM does: the second line
is a **typewriter**, and the photo is a 2:1 **1024 × 512** card with `shadow-2xl` and a 1 px grey ring.

**Capture trap:** 27 elements carry `[data-animate]` and **22 start at `opacity: 0`**. A naive `fullPage` screenshot
shows the testimonials, FAQ and half the tag grid as blank bands. Scroll the page in ~300 px steps with ~120 ms
pauses, then capture (`/tmp/threadline/full-revealed.png` was produced that way and reports **0** elements still
hidden). `prefers-reduced-motion: reduce` disables the whole reveal engine — the reduced-motion test is therefore also
the quickest way to get a clean screenshot.

## Section-by-section fidelity notes

**Header.** `sticky top-0 z-50`, `bg-white/80` + `backdrop-blur-lg` + 1 px `#e5e7eb`, and it gains `shadow-lg` past
50 px of scroll (not at the top). Nav labels are **14 px / 500** in `#4b5563` — not 600, not uppercase. The active
section is marked by `.nav-active` (**`#111827`, 600**) driven by an IntersectionObserver with
`rootMargin: -20% 0 -70%`; in the recreation, drive it from the same sections the anchors point at. The moon toggle is
a 36 px `rounded-lg` square (8 px radius), *not* a circle, and swaps to a sun via `dark:hidden` / `dark:block` SVG
pairs. Two logo files exist (`logo.svg`, `logo-light.svg`) — ship one inline SVG wordmark that adapts with
`currentColor` instead.

**Hero.** Three-deck vertical rhythm: pill → `h1` (60/60, −1.5 px) → lede (20/28, `max-w-2xl`) → controls (24 px
gap) → facts (`mt-16`, `border-t`, `pt-10`, 4 columns from `sm`). The gradient phrase is `inline-block` and animates
via `opacity` + `translateY(10px)` on a **300 ms** fade, cycling on a **3 s** interval with the *initial text as
element 0 of the rotation* — so the first visible phrase is `solved this`, and the sequence is
`solved → hit this exact error → written it up properly → solved …`. Reimplement as a state index + `setInterval`,
cleanup on unmount, and freeze at index 0 under reduced motion. The two blobs are 500 px / 400 px circles at
`primary-200/50` and `primary-100/40` with `blur-3xl`, drifting on 8 s / 10 s mirrored keyframes plus `data-parallax`
(0.15 / −0.1) — the parallax is a scroll-linked `translateY` offset, not a fixed animation.

**Counter strip.** `border-y`, `bg-gray-50`, `py-16 lg:py-20` — deliberately shorter than every other band (80 px vs
112 px). Figures are **teal** (`primary-600`) at 48 px, labels 14 / 500 grey. The animation is a 2 s cubic ease-out
that **formats the value being counted** (`toLocaleString`-ish: 61,400 with a comma) and only writes the *final
string* — including the unit — on the last frame, which is why `18 min` shows as `0 → 7 → 18 min` and never `7 min`.

**Questions.** The rows are the design. Each `li` is `rounded-xl border` with a **144 px left rail** at `sm+`
(`sm:w-36`, `sm:border-r`, `sm:pr-5`) holding votes / answers / views, and the answers cell is a **filled
`primary-600` chip** whenever the count is non-zero — row 3 (`0 answers`) is the one that proves the rule. Bounty
chips (`+150`, `+75`) are `accent-100` on `accent-800`, mono, 12 px. Titles use a stretched `after:absolute
after:inset-0` link so the whole card is clickable *without* swallowing the tag chips — reproduce that pattern (one
`<a>` per card, `relative` on the `li`), not an overlay div. Bodies are `line-clamp-2`. Tag chips are grey
(`gray-100` / `#374151`), 4 px radius, mono 12 — deliberately *not* teal, so the eye lands on the answer chip.

**Tags.** `max-w-7xl`, 1 / 2 / 4 columns. The card's chip is teal-on-wash (`primary-50` / `primary-700`, mono 14,
4 px), the blurb is 14 / 1.6 grey, and the figure row is a `border-t` + `justify-between` in mono 12 with the delta
in teal. Hover raises the border to `primary-400` and adds `shadow-sm` — the only shadow on the page's white cards.

**How it works.** Four `md:grid-cols-4` steps with a **1 px gradient rule** absolutely positioned at `top: 24px`
behind them (`primary-200 → primary-400 → accent-300`). The number square is 48 px, 12 px radius, **2 px**
`primary-500`, white fill, mono 14 / 700 — and it must sit *above* the rule (`relative z-10`), which is the one
stacking detail that makes or breaks the band. Footnotes are mono 12 in a white chip at 4 px radius.

**Leaderboard.** A genuine `<table>` with `border-separate border-spacing-0` and `min-w-[520px]`; the "Known for"
column is `hidden sm:table-cell`, so below 640 px it collapses to rank / member / accepted / reputation. Rank discs:
28 px circles, `accent-400` (1st), `gray-300` (2nd), `amber-700` + `amber-50` (3rd), `gray-100` (4th–5th). Member
initials are 36 px `rounded-lg` **squares** on a `primary-500 → primary-700` gradient — a square, not the circle
used for testimonial avatars. Reputation is the only teal figure in the table. The meta line (*96 days active*) is
present on rows 1–2 only; that inconsistency is in the source, and the recreation may either normalise it or keep it
(the spec keeps it).

**Testimonials.** `bg-gray-50`, 3 slides of **405 px** at 1440 inside an `overflow-hidden` shell, cards 16 px radius
with `shadow-soft` and 32 px padding, five 20 px stars in `primary-400`, `blockquote` 18 / 28 / 500, avatar 48 px
circle `primary-100` / `primary-600`. Controls are 40 px white circles with `shadow-lg` at `-left-4` / `-right-4`, and
dots are generated (8 px active `w-8` pill, 10 px inactive `w-2.5`). Autoplay is 5 s, pauses on `mouseenter`, resets
on any manual move. See defect 7 for why nothing moves at `lg`.

**FAQ.** `bg-white`, `divide-y` on `#e5e7eb`, each item a `py-6` wrapper with a full-width button (`text-left`,
`justify-between`) and a 32 px grey `+` disc that rotates 45°. The panel is `overflow-hidden transition-all
duration-300` with inline `max-height: 0; opacity: 0`; opening sets `max-height = scrollHeight px` and `opacity: 1`,
and **closes every sibling first** (exclusive). The answer paragraph is 16 / 24 grey with `pt-4`. Add
`aria-expanded` / `aria-controls` / `aria-hidden` on the way in.

**Closing band.** `relative overflow-hidden` gradient `to bottom right` from `#0d9488` to `#115e59`, a 40 px
`radial-gradient(circle at 1px 1px, white 1px, transparent 0)` at `opacity-10`, and two 256 px `white/10 blur-3xl`
discs at `-right-20 -top-20` / `-bottom-20 -left-20`. Inner copy is `max-w-3xl` centred; the white button is
`16px 32px` at 16 / 500 in `primary-700`, the outline is `border-2 border-white/30` that goes solid white on hover.

**Footer.** 12-column grid: brand `lg:col-span-4`, link block `lg:col-span-5` (3 columns at `sm`), newsletter
`lg:col-span-3`. Column heads are 14 / 600 uppercase with **0.7 px** tracking in white; links are `gray-400` →
white. Social tiles are 36 px `rounded-lg` `gray-800` squares. The newsletter input is `gray-800` with a `gray-700`
border and a teal focus ring (`ring-1`), and the Subscribe button reuses the brand fill at `14 px`. Bottom bar is
`border-t border-gray-800 py-8`, copyright `gray-500`, three links right-aligned.

## Source → React adaptation table

| source                                    | recreation                                                        |
| ----------------------------------------- | ----------------------------------------------------------------- |
| Astro `.astro` pages + `ClientRouter`     | Vite SPA, single `App.tsx`, sections as components                |
| `data-*` hooks + one 16 kB vanilla bundle | React state/effects; one `useEffect` per behaviour, all cleaned up |
| `data-typewriter='["a","b","c"]'`         | `ROTATING_PHRASES` array + index state, 3 s interval              |
| `[data-counter="61,400"]`                 | `CountUp` component with `Intl.NumberFormat` and a final-string write |
| `data-faq-toggle` + `max-height` inline   | `<button aria-expanded>` + measured-height panel, exclusive state |
| `[data-carousel]` + imperative dots       | `Carousel` component; `perView` from a matchMedia hook            |
| `[data-animate]` + IntersectionObserver   | `Reveal` wrapper component; no-op under reduced motion            |
| `localStorage.theme`                       | same key so a returning visitor keeps their choice                |
| `/theme/threadline/assets/img/logo*.svg`  | inline SVG wordmark, `currentColor`                               |
| `unsplash` product photo                  | `https://picsum.photos/seed/answerbook-1/1200/600`                |
| `/theme/threadline/about`, `/pricing`, …  | dropped; nav reduced to in-page anchors (see spec defect 11)      |

## Sibling comparison (same Astro/Tailwind family)

`toolbelt` (Punchlist) and `upright` (Kilter) were built from the same kit: the same `data-animate` reveal engine,
the same cookie dialog, the same `#mobile-cta` bar and the same **"Spaces" / "Book a Tour" coworking leftovers** in
the footer. Where they differ is instructive:

- **Motion:** Toolbelt has 27 reveals and no reduced-motion guard; Kilter has the guard; Threadline has the guard
  **and** rewrites its `h1` every 3 s. Do not carry a "no motion" rule across siblings — read the bundle.
- **Type:** Kilter is DM Sans only (a serif face declared but never resolved); Threadline is Space Grotesk + mono.
  Never infer a font from a class list — check `getComputedStyle`.
- **Colour:** Kilter is sage/terracotta, Threadline teal/amber, Punchlist orange/slate. All three are literally
  Tailwind ramps renamed `primary` / `accent`, so the token table is a read-back, not a guess.
- **The one thing Threadline has that they do not:** a **table** as a headline device (the leaderboard) and a
  **stat rail** inside a list row. Those are the two components worth building first and testing hardest.

## Open questions for the implementer

1. The design is a *directory* category entry but reads as a product/community page. Keep it in `## Directory` (the
   source's own category) so the catalogue stays honest.
2. The five thread rows are fictional but internally consistent (votes/answers/views). Keep the numbers; only the
   brand changes. Do not invent extra rows — five is the design.
3. The leaderboard gap at row 3 (*Mei Tanaka*, no "days active") is in the source. Keeping it is fine; fixing it is
   also fine. Say which you did in the PR.
