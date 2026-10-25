# Cresting — task outline

Recreation of the ColorLib **Ridgeline** roofing design (`ridgeline`) at `apps/cresting`. Spec is the
authority: `openspec/specs/template-cresting/spec.md`. Design notes:
`docs/templates/cresting/design-notes.md`. Check boxes only as work ships.

> The page's thesis is **the six-stage insurance-claim rail in `#claim`** — six numbered buttons where the last
> four stages are the insurer's clock, not the contractor's, and every panel ends with a "Worth knowing." caveat
> that admits the answer can be no. Build that band early; it is what makes the rest credible. All copy is in the
> spec §Content inventory — copy it verbatim, including the sample-data caveats. There are **no illustration
> assets to redraw**: the project plates are gradients plus a chevron watermark, and the two photos are
> placeholders you supply.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/cresting`; rename the package to
      `@free-react-templates/cresting`
- [ ] `public/CNAME` = `cresting.free.componentdock.com`; `homepage` = `https://cresting.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/cresting" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Space Grotesk 400/500/600/700**
      (`css2?family=Space+Grotesk:wght@400;500;600;700&display=swap`), `display=swap`, `preconnect` to
      `fonts.gstatic.com`
- [ ] pre-paint theme script (`localStorage.theme` → `prefers-color-scheme`) in `<head>`, exactly as the
      reference's 442 B inline body does it
- [ ] `@theme` in `src/index.css`: the **`ink` 10-step cool-navy ramp**, the **`primary` 10-step burnt-orange
      ramp** (exact hexes in the spec §Design tokens), `--radius-2xl: 1rem`,
      `--shadow-soft: 0 4px 16px -4px #0000001a`, `font-sans: "Space Grotesk", system-ui, sans-serif`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [ ] `Button` — `solid` (`#ce450b`, white, radius 8, `px-5 py-2.5`, 14/**500** for the form submit and
      14/**700** for the header CTA), `solid-sm`, `light` (white ground, `#a8350d` label, `px-8 py-4`, 16/700),
      `outline-light` (2 px `white/40`, `px-8 py-4`, 16/700, phone glyph slot), `block`
- [ ] `Pill` — two jobs: header city/phone pills (full radius, 1 px `#d3d9e1`, `px-3 py-1.5`, 14/600 `#3e4c60`)
      and section badges (`#ffe4d2` ground, `#a8350d`, `px-3 py-1`, 14/500)
- [ ] `ChipRadioGroup` — `<fieldset>` + `<legend>` + five `input.peer.sr-only type=radio` labels rendered as
      full-radius pills (1 px `#d3d9e1`, `px-4 py-2`, 14/600 `#3e4c60`; checked `#ce450b` + white;
      `peer-focus-visible` ring on the pill)
- [ ] `Field` — 46 px (`px-4 py-2.5`, 16/24, radius 8, 1 px `#d3d9e1`, text `#1c2634`); focus
      `border-primary-500` + `ring-2 ring-primary-500/30`; label 14/600 `#2c3849`; error text 14 `#ef4444` tied
      by `aria-describedby`
- [ ] `Section` — `.section` = `py-20 lg:py-28`; `Container` = `max-w-7xl` (`80rem`) with `px-4 lg:px-8`
- [ ] `Eyebrow` — 14/20 700, uppercase, `+0.35px`; `tone="light"` `#a8350d`, `tone="dark"` `#fa7838`
- [ ] `Reveal` — `[data-animate]` equivalent: fade 20 px over 600 ms with a `delay` prop, IntersectionObserver
      `threshold .1` / `rootMargin 0 0 -10% 0`, **no-op under `prefers-reduced-motion: reduce`**

## 2 — Chrome

- [ ] `LicenceBar` — 37 px `#1c2634`, 12/500 `#eaedf1`: `Licence` `OK CIB #00000000` · `Manufacturer certified`
      · `Serving` `Oklahoma City metro` (2–3 `hidden sm:flex`), right side one `amber-400` star + `4.9` +
      `410+ reviews on Google (sample)`; **wrap or hide whole items — no mid-token clipping at 390**; not sticky
- [ ] `Header` — sticky 81 px (`h-16 lg:h-20`), `white/90` + `backdrop-blur-lg`, border `#eaedf1`, `shadow-lg`
      past 50 px; logo inline SVG at `h-8 lg:h-9`; nav 7 labels 14/600 `#3e4c60` `gap-7` at **`xl`**; city pill →
      `#areas`; phone pill `tel:5550300300`; 40 px theme toggle; CTA 14/700 `#ce450b` radius 8 `px-5 py-2.5`
- [ ] `MobileMenu` — `aria-expanded` + `Open menu`/`Close menu` label swap, seven 18/600 rows, hairline, pill
      pair, full-width CTA
- [ ] `Preloader` / `ScrollProgress` / `BackToTop` (48 px disc, 300 px threshold) / `CookieStrip` (87 px,
      1,500 ms delay, `accepted` / `essential` in `localStorage['cookie-consent']`)
- [ ] `SkipLink` → `#main-content`

## 3 — Hero and the inspection card

- [ ] band `#121a25`, `py-16 lg:py-24`, grid 12 cols `gap-16`, copy 6 / card 6, 96 px wash over an `opacity-30`
      photo (`from-ink-900 via-ink-900/85 to-ink-900/40`, left to right)
- [ ] copy: eyebrow 14/700 `#fa7838` +0.35 · `h1` 60/64.8 700 −1.5 white with the `#fa7838` span starting at
      "how bad it actually is." · lede 18/28 `white/70` `max-w-xl` · rating row (5 `amber-400` stars, `4.9`,
      sample line) · four `#fa7838` ticks in a `sm:grid-cols-2 gap-3` list
- [ ] `InspectionForm` — white card radius 16 `p-8` `shadow-md` **no border**; three required inputs in a
      `grid-cols-2`/full-width row; five chips with `Recent storm` checked; submit full width `#ce450b`; 12 px
      footnote. **Wire it**: submit → confirmation naming the caller and property; missing field → inline error;
      never a reload, never a query string
- [ ] `#inspection` is the anchor target the header CTA, hero CTA and closing band point at; it sits under the
      sticky header (`scroll-margin-top: 101px`)

## 4 — `#claim` (the design)

- [ ] band `#1c2634`, header `max-w-2xl` (eyebrow `Storm damage`, `h2` 36/40 −0.9, lead 18/28 `white/70`)
- [ ] `ClaimRail` — `<ol>` of **six** `<button aria-expanded>` rows: 2 px left rule (`white/15` → `#ee5b14`),
      `py-4 pl-5`, `gap-4`, `tabular-nums` number 14/700 (`white/40` → `#fa7838`), title (`white/60` → white),
      meta `owner · duration` 14 `white/40`
- [ ] `ClaimPanel` — radius 16, `white/10` border, `white/5` ground, `p-6 sm:p-8`: eyebrow `Stage one`…`Stage
      six` in `#fa7838`, `h3` 24/32 white, body 16/24 `white/70`, `sm:grid-cols-2` `dl` (`Who does it`,
      `Typically takes`), `border-t white/10` block with `What you need to hand` + ticked `<ul>`, then the
      **`Worth knowing.`** callout (`border-primary-500/40`, `bg-primary-500/10`, radius 8, `px-4 py-3`,
      `#ffe4d2`)
- [ ] **Reserve the panel height** (517 px at 1440, or `min-h` per breakpoint) so switching stages never moves
      the band; assert it in a test
- [ ] all six panels in the DOM, five `hidden`; single source of truth for the active index
- [ ] copy stages 1–6 and their caveats verbatim from the spec table

## 5 — `#services` and `#projects`

- [ ] `#services`: `gap-px` plate on `#eaedf1`, radius 16, 1 px border, six white **404 × 208** `p-8` cells
      (`h3` 18/700, blurb `mt-2 flex-1`, price `mt-4` 14/700 `#a8350d`), 1/2/3 columns, sample-price footnote
- [ ] `#projects`: 3 × 389 grid `gap-6`, `<article>` **389 × 585** radius 16 border `#eaedf1`; media plate
      `aspect-[4/3]` `p-6` `items-end` with the **192 px chevron watermark** at `white/10`, town 12/700 uppercase
      `white/60`, roof type 24/700 white
- [ ] plate gradient rotation **ink-800→700, primary-700→600, ink-700→600, repeated** — exactly two orange plates
- [ ] card body: `h3` 18/700, copy 14/20 `#57677d` `flex-1`, `dl grid-cols-2` rows `Size` / `On site` /
      `Paid by` (12/700 `#78879b` label, 14/600 `#2c3849` value, `Paid by` value `#a8350d`)
- [ ] funding note under the grid

## 6 — `#why-us`, `#process`, `#areas`

- [ ] `#why-us`: `#f6f7f9`, 2 × 576 `gap-16`; 576 × 432 photo radius 16 (copy first on mobile) + 14 `#78879b`
      caption; eyebrow + refusal `h2` + lead; four `border-l-2 #ce450b pl-5` rules (16/700 title, 16/24 body)
- [ ] `#process`: `<ol>` 3 × 389 `gap-6`; number 14/700 `tabular-nums` `#ce450b` + `h-px flex-1 bg-ink-100`
      rule, `h3`, body, tag 14/600 `#a8350d`
- [ ] `#areas`: 5/7 split, **no eyebrow**, `h2` + lead, fourteen towns in `grid-cols-2 sm:grid-cols-3` with
      `py-2.5` + 1 px `#eaedf1` bottom border, 14 px note

## 7 — `#testimonials`, `#faq`, `#contact`, footer

- [ ] `#testimonials`: `gray-50` ground, stock greys (`#111827` heading / `#4b5563` body) — **do not unify with
      the `ink` ramp**; `Reviews` pill; three **381 × 348** `shadow-soft` cards, five `#fa7838` stars, quote-first
      layout, 48 px `#ffe4d2` initials disc
- [ ] `Carousel` primitive: per-view **3/3/2/1**, slide **405/320/368/358**, **no dots and hidden arrows when
      `maxIndex === 0`**, 5 s autoplay paused on hover, disabled under reduced motion
- [ ] `#faq`: `max-w-3xl`, five `py-6` rows, 1 px `#e5e7eb` dividers, 18/600 questions, 32 px `#f3f4f6` disc with
      a 45° rotating plus, single-open, **`aria-expanded` + `aria-controls`**
- [ ] `#contact`: `#a8350d`, `max-w-3xl` centred, white `h2` 36/40 −0.9, `#ffe4d2` lead, solid white button
      **237 × 56** + 2 px `white/40` outline with a phone glyph, stacked full width below `sm`
- [ ] footer: `#111827` `pt-24`, 12-col 4/5/3, 40 px light logo, `gray-400` blurb, three social chips with real
      destinations, address/phone/email, three link columns with 14/600 uppercase headings, `Stay Updated` form
      that stores the address or confirms visibly, bottom bar `mt-16 border-t #1f2937 py-8`
- [ ] footer contains **`Component Dock`** → `https://www.componentdock.com/`

## 8 — Verify before the PR

- [ ] dark mode: `#030712` body / `#111827` tinted bands; hero, `#claim`, `#contact`, footer unchanged; toggle
      persists and resolves pre-paint
- [ ] `scrollWidth === clientWidth` at **320, 390, 768, 1024, 1280, 1440, 1600** (the reference fails at 320 with
      357 px)
- [ ] zero bare `#` anchors, no `#service-areas`, every `tel:` well formed, every icon-only control named
- [ ] band heights within ~35 px of the reference: 37 / 81 / 750 / 1,033 / 919 / 1,643 / 840 / 564 / 513 / 796 /
      820 / 440 / 568
- [ ] `npm run test:coverage` 100 % on the new app; `scripts/verify-app.sh cresting` green
- [ ] no ColorLib string anywhere in `apps/cresting` (comments, `alt`, copy); the app never says "Ridgeline"
- [ ] `open items` bookkeeping: append the `TEMPLATES.md` row (under `## Business`, after **Repeat**, before
      **Roberto**, bumping `(378)` → `(379)`) and set it `[x]` only when the app ships
- [ ] PR title `feat: Cresting — roofing trade template with a six-stage claim explainer (ColorLib Ridgeline)`
