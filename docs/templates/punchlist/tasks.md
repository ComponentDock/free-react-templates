# Punchlist — task outline

Recreation of the ColorLib **ToolBelt** handyman design (`toolbelt`) at `apps/punchlist`. The spec is the authority:
`openspec/specs/template-punchlist/spec.md`. Design notes: `docs/templates/punchlist/design-notes.md`. Check boxes
only as work ships.

> The page's thesis is **the price list before the brochure**: a hero that states the call-out fee, and a third band
> that is a real eight-row table of jobs with `From` and `Typical` figures. Build the **rates table first** — it is
> the template — then the hero (typewriter + stat row + 2:1 photo), then the counter strip, then the case studies.
> The palette is **one orange** (`#ea580c` → `#9a3412`) on white / `#f9fafb`, with **one dark slate band**
> (`#0f172a`) and **one orange gradient band**. **One typeface** (DM Sans 400–700); the only mono is the system stack
> for postcodes and policy lines. All copy lives in the spec §Content inventory — copy it verbatim, keep the British
> voice and the `£`. **Do not reproduce the coworking leftovers** (the *Spaces* footer column, *Book a Tour*, the
> `#spaces` anchors, the second phone number) or the clipped 320 px table.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/punchlist`; rename the package to `@free-react-templates/punchlist`
- [ ] `"homepage": "https://punchlist.free.componentdock.com"`, `public/CNAME` the same
- [ ] keep `injectUiSource()` in `vite.config.ts` untouched; `npm install` at the root once (registers the workspace
      in `package-lock.json`)
- [ ] Google Fonts `<link>` for DM Sans 400/500/600/700 in `index.html`; `@theme` in `src/index.css` with the
      `primary` (orange) and `accent` (slate) ramps from the spec, plus `--shadow-soft`
- [ ] delete the copied app's sections; `src/App.tsx` composes the eleven bands in order

## 1 — Primitives

- [ ] `Button` variants used on the page: `primary` (orange, radius 8, `shadow-lg/25`), `secondary` (white, 1 px
      `#d1d5db`), `inverse` (white on orange), `outline-white` (2 px `white/30`) — through `cn()`, reusing
      `packages/ui` where the variant exists
- [ ] `SectionPill` (12/700 uppercase `tracking-wider`) with three tones: pale (`primary-100` / `primary-800`),
      solid (`primary-500` / white), dark (`accent-900` / `primary-300`)
- [ ] `Section` wrapper (padding 80 → 112 px) + `SectionHeading` (h2 36/40 700, lede 16/24 `#4b5563`)
- [ ] `Counter` (48/1 700 `#ea580c`, 2,000 ms ease-out, suffix-aware, final value in the DOM)
- [ ] `Accordion` (single-open, `aria-expanded` + `aria-controls`, 32 px plus rotating 45°)
- [ ] `Carousel` (slides-per-view 1/2/3, dots, arrows only when `maxIndex > 0`, 5 s autoplay, hover pause,
      reduced-motion aware)

## 2 — Chrome

- [ ] `ScrollProgress` (2 px, `primary-600`, `aria-hidden`)
- [ ] `Navbar` (`sticky top-0 z-50`, `h-16 lg:h-20`, `bg-white/80 backdrop-blur-lg`, 1 px `#e5e7eb`, wordmark,
      8 links at 14/500 `#4b5563` `gap-8`, orange CTA, dark toggle with `aria-pressed`, burger with
      `aria-expanded` + `aria-controls`)
- [ ] `MobileMenu` panel (8 links + full-width CTA, closes on link/Escape, focus returns)
- [ ] `MobileCtaBar` (69 px, `lg:hidden`, `fixed bottom-0 z-40`, *Call now* + *Send the list*, body reserves height)
- [ ] `BackToTop` (48 px disc, past 300 px, sits **above** the 69 px bar)
- [ ] `CookieStrip` (`role="dialog"`, 1.5 s, `localStorage['cookie-consent']`, Decline / Accept All)
- [ ] `SkipLink` → `#main-content`

## 3 — Hero

- [ ] gradient ground `from-primary-50 to-white` + two `aria-hidden` float blobs (8 s / 10 s reverse), both disabled
      under `prefers-reduced-motion`
- [ ] pill: pulsing dot + *"Fixed call-out fee. No charge for the quote."*
- [ ] `h1` 60/60 700 `#111827` (`text-4xl sm:text-5xl lg:text-6xl`), second line a gradient span
- [ ] typewriter: 3 phrases, 3,000 ms, 300 ms swap, first phrase server-side/DOM-first
- [ ] CTAs (orange arrow / white outline) + 48 px play disc *Watch Demo* → dialog (own clip or none)
- [ ] stat row on a 1 px top rule: `£45`, `2,400+`, `4.9`, `12 yrs` (30/36 700 + 14/20 labels, `grid-cols-2
      sm:grid-cols-4`)
- [ ] 2:1 photo, `max-w-5xl`, `rounded-2xl shadow-2xl ring-1 ring-gray-200`, picsum placeholder, real `alt`

## 4 — Stats strip (build the Counter here first)

- [ ] `border-y` `#e5e7eb`, `#f9fafb`, `py-16 lg:py-20`, four counters (2,400 / 4.9 / 96% / 12) with the spec's labels
- [ ] figures are **correct before hydration**; animation is additive only

## 5 — `#rates` (the band that is the template)

- [ ] `max-w-5xl`, `rounded-2xl border overflow-hidden` shell
- [ ] `#0f172a` `<thead>` 12/700 uppercase: Job · What that covers · From · Typical
- [ ] eight rows from a `rates` array; job name 16/600, description 14/20 `#4b5563`, `From` 16/700
      `primary-700 tabular-nums`, `Typical` 14/20 grey
- [ ] `Most booked` chips on *Flat-pack assembly* and *Minor electrical*
- [ ] `primary-50` footnote with 4 px `primary-500` left border
- [ ] responsive: description folds into the job cell below `sm`, `Typical` hides below `md`, **`From` never hides**
      and the row stacks at 320 so no price is clipped

## 6 — `#work`

- [ ] `max-w-7xl`, `md:grid-cols-3 gap-6`, three cards **389 × 523**: 4:3 image + category chip
      (`bg-primary-600`, 10/700 uppercase), `h3`, blurb, `Area / Time / Cost` `dl` with the cost in `primary-700`
- [ ] hover: image `scale-105` over 500 ms; no whole-card link to `#work`

## 7 — `#areas` and `#credentials`

- [ ] `#areas` on `bg-accent-900`, solid orange eyebrow, lede `accent-300`, `sm:grid-cols-2 lg:grid-cols-3 gap-4`,
      cards `border-white/10 bg-white/5 backdrop-blur`, response chips `primary-500/20` + `primary-300`, mono
      postcodes, travel notes, disclaimer
- [ ] `#credentials`: pale eyebrow, `sm:grid-cols-2 lg:grid-cols-4 gap-5`, **`border-2 border-gray-200`** cards,
      48 px `bg-accent-900` tiles with `primary-400` lucide icons, mono footer lines, invented policy numbers

## 8 — `#testimonials` and `#faq`

- [ ] carousel: 3-up static at 1440 (no arrows, no dots), 2-up at 768, 1-up at 390, 5 s autoplay, `shadow-soft` cards,
      five `primary-400` stars, initial discs
- [ ] `#faq`: `max-w-3xl`, 1 px dividers, five real disclosures, one open at a time, `Escape` closes

## 9 — `#contact` and footer

- [ ] orange gradient band (`primary-600 → primary-800`), `bg-white/10 blur-3xl` discs, radial dot grid at
      `opacity-10`, centred `max-w-3xl`, two buttons, **no form**
- [ ] the form lives on the contact route (or a routed section): `name`, `email`, `subject`, `message` + submit, all
      labelled, per-field errors on invalid submit, success state; sidebar with phone / email / workshop / hours
- [ ] footer `#111827`, 12-col **4 / 2 / 2 / 2 / 3**, light wordmark, social chips, address, three link lists
      (**no** *Spaces*), newsletter with `<label class="sr-only">` + validation, bottom bar
- [ ] footer link to `https://www.componentdock.com/` ("Component Dock")

## 10 — Behaviour

- [ ] dark mode: `.dark` on `<html>`, `localStorage.theme`, guard respects `prefers-color-scheme` when unset
- [ ] reveals staged 0–500 ms; nothing animates under `prefers-reduced-motion`
- [ ] every animation fallback derived during render (no `setState` in an effect for counters/typewriter)
- [ ] focus-visible rings `ring-2 ring-primary-500` on every interactive element

## 11 — Fidelity fixes (reference defects, do not reproduce)

- [ ] 320 px: rates table holds its `From` prices (reference clips them)
- [ ] footer: no *Spaces* column, no `#spaces` anchors, no *Book a Tour*
- [ ] one phone number, one well-formed `tel:` (reference has `tel:(555) 330-8814` and a second number)
- [ ] accordion exposes `aria-expanded` / `aria-controls` and hides closed panels
- [ ] *Watch Demo* is a real clip in a real dialog, or it is gone (reference rick-rolls)
- [ ] counters correct in the DOM (reference ships literal `0`)
- [ ] `prefers-reduced-motion` honoured everywhere (reference has no guard)
- [ ] dark toggle exposes `aria-pressed`; header either gets its scroll elevation or drops the transition
- [ ] valid JSON-LD (`HomeAndConstructionBusiness`) or none (reference JSON is broken)
- [ ] credential glyphs are lucide icons, not `◈ ⚡ ◉ ✓` text characters

## 12 — Verification

- [ ] `scripts/verify-app.sh punchlist` green (typecheck + lint + knip + fallow + 100 % coverage tests + build)
- [ ] `body.scrollWidth === clientWidth` and `scrollX 0` at 320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] no `href="#"`, no dead `#` ids, no ColorLib string in app files, `punchlist` in `package-lock.json`
- [ ] when merging: add the `TEMPLATES.md` row from the spec under `## Business` (384 → 385, after
      *Publishing Company*), `npm run readme:status`, deploy to `punchlist.free.componentdock.com`
