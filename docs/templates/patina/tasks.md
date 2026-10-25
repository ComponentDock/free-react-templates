# Patina — task outline

Recreation of the ColorLib **Onyx** premium bathroom-renovation design (`onyx`) at `apps/patina`. Spec is the
authority: `openspec/specs/template-patina/spec.md`. Design notes:
`docs/templates/patina/design-notes.md`. Check boxes only as work ships.

> The page's thesis is **the programme**: three stages with a price and a duration, one before/after you can
> drag, and two long testimonials instead of six short ones. Build the **compare band** and the **process
> band** early — they are what make "we are emphatically not the cheapest" credible. The palette is **one warm
> ink ramp and one brass ramp on a hard-coded dark page**; the only cool band is the testimonials' `#111827`.
> All copy is in the spec — copy it, do not re-invent it, and keep the sample-data disclaimers.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/patina`; rename the package to `@free-react-templates/patina`
- [ ] `public/CNAME` = `patina.free.componentdock.com`; `homepage` = `https://patina.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/patina" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` —
      `css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap`
      (both verified **HTTP 200**), `preconnect` to `fonts.gstatic.com`, and `<html lang="en" class="dark">`
      (`dark` is **pinned** — there is no toggle in this design)
- [ ] `@theme` in `src/index.css`: the **`ink` 10-step warm-grey ramp**, the **`primary` 10-step brass ramp**
      (exact hexes in the spec §Design tokens), `--radius-lg: .5rem`, `--radius-2xl: 1rem`,
      `--shadow-soft: 0 4px 16px -4px #0000001a`, `font-sans: Manrope, system-ui, sans-serif`,
      `font-serif: "Playfair Display", Georgia, serif`
- [ ] `body` sizing/colour: `background: #0b0b0b`, `color: #ede9e0`, antialiased
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] test: `index.css` token block contains both ramps; `index.html` has the two families and `display=swap`

## 1 — Primitives

- [ ] `Button` variants:
      `outline-square` (hero + header CTA: 1 px `primary-500`, `px-8 py-4` / `px-5 py-2.5`, **radius 0**,
      12/600 uppercase `+0.18em` `primary-400`, hover `bg-primary-500 text-ink-900`),
      `outline-rounded` (`#contact`: same but `rounded-lg`, `bg-transparent` / `border-white/30`),
      `pill` (footer phone: `rounded-full bg-primary-600 px-5 py-3` 16/700 white)
- [ ] `Eyebrow` — two sizes, both uppercase 600: **12/16 `+3.36 px` (`.28em`)** for hero/portfolio/compare/
      owner, and **14/20 `+0.35 px`** for `#process` (the reference's inconsistency — keep it)
- [ ] `SectionHeading` — serif variant (Playfair 400 36/40) and sans variant (Manrope 700 36/40 `−0.9 px`),
      `max-w-2xl` left-aligned, `max-w-3xl` centred
- [ ] `Hairline` — `h-px flex-1 bg-white/15` used by the process step headers
- [ ] `Reveal` — `opacity 0 / translateY(20px)`, 600 ms, `data-delay` stagger; IO `threshold .1`,
      `rootMargin 0 0 -10%`; **bails out entirely** under `prefers-reduced-motion: reduce`
- [ ] `StarIcon` — the five 20 × 20 `fill="currentColor"` stars from the reference's own path data
      (or `lucide-react`'s `Star` filled — same silhouette, one shape)
- [ ] test: each primitive's class output, the two eyebrow sizes, and `Reveal` returning identity markup under
      reduced motion

## 2 — Chrome

- [ ] `Preloader` — fixed `inset-0 z-[100]` `ink-900`, 40 px `animate-spin` brass ring; hidden by
      `loaded || document.readyState === 'complete'` (derive, do not `setState` in an effect)
- [ ] `ScrollProgress` — fixed top, **2 px**, `primary-600`, width = scroll fraction
- [ ] `SkipLink` → `#main-content`; `<main id="main-content">`
- [ ] `CookieStrip` — `role="dialog"`, `aria-label="Cookie consent"`, `Decline` / `Accept All` storing
      `essential` / `accepted` in `localStorage['cookie-consent']`; removed 300 ms after a decision; never
      covers the footer's bottom bar
- [ ] `BackToTop` — 48 px `rounded-full` `primary-600`, visible past **300 px**, smooth scroll to top
- [ ] test: preloader never traps content in jsdom; consent persists; back-to-top threshold at 299/301

## 3 — Header

- [ ] `Header` — `absolute` → `fixed` via a `stuck` state set at **80 px**, plus `shadow-lg` at **50 px**;
      `h-20 lg:h-24`, `border-b white/10`, stuck ground `ink-900/95` + `backdrop-blur`
- [ ] `Wordmark` — **text/inline SVG**: "ONYX" Playfair 500 26 px `letter-spacing 3` `#EDE9E0`, an 86 × 1
      `#C9A227` rule, a Manrope subtitle; renders **171 × 40**
- [ ] `Nav` — `3 left · wordmark · 2 right + CTA`, visible **only at ≥1280 (`xl`)**; labels 12/600 uppercase
      **`+2.16 px` (`.18em`)**, `ink-200` → `primary-400`; targets per spec §D1
- [ ] `MobileMenu` — `aria-expanded` + `aria-controls`, hamburger↔X glyph swap, five rows + full-width CTA
- [ ] test: no nav below 1280; `stuck` toggles at the right scroll; `aria-expanded` round-trips

## 4 — Bands

- [ ] `Hero` — `min-h-[70vh] lg:min-h-[88vh]`, background photo + `ink-900/65` overlay, copy bottom-aligned:
      eyebrow, `h1` (Playfair 400 60/69, `max-w-3xl`), lead (18/28 `ink-100`, `max-w-xl`), square CTA
- [ ] `Portfolio` — `#portfolio`, three 4:5 cards, `grid-cols-2 lg:grid-cols-3`; caption (Playfair 18 + 12/600
      `primary-400`) revealed on **hover and focus-visible** over `bg-ink-900/55` with `scale-[1.03]`; the
      third card spans both columns below `lg`
- [ ] `Compare` — `#compare`, `<figure>` with two images, `clip-path` after-image, 2 px white divider, the
      `Before` / `After` chips, and a labelled range whose value drives clip + divider
- [ ] `Process` — `#process`, `<ol>` of three: numeral + `flex-1` hairline, `h3` 18/700, body 18/28
      `white/70`, meta 14/600 `primary-400`; `sm:grid-cols-3`
- [ ] `Studio` — `#owner`, centred: 112 px round portrait, eyebrow, Playfair 30/37.5 lead, two 18/28
      paragraphs, Playfair 20 signature, 12/600 `ink-300` city line, `border-b` link
- [ ] `Testimonials` — `#testimonials`, `#111827`, `Clients` pill, Manrope-bold `h2`, two cards
      (radius 16, `p-8`, `#1f2937`, `shadow-soft`), five brass stars, 48 px initial discs; carousel per-view
      **3 / 2 / 1**, arrows hidden when `maxIndex ≤ 0`, dots only when `maxIndex > 0`; pair **centred** at
      ≥1024
- [ ] `Contact` — `#contact`, Playfair `h2`, lead, two CTAs, then the four-field enquiry form
      (`name`, `email`, `subject`, `message`) with per-field errors and a visible success state
- [ ] `Footer` — `#101010` `pt-24`, 12-col 4/5/3: wordmark + blurb + **Component Dock** chip + address/phone/
      email; three link columns; `Licensed` + brass phone pill; bottom bar
- [ ] test per band: one `describe` each, scenario-per-`it` mirroring the spec's Gherkin

## 5 — Cross-cutting

- [ ] Every `tel:` well formed (`tel:+15550100244`); no bare `#`; every image has an accessible name
- [ ] Focus-visible rings (`primary-500`) on every control; carousel buttons `type="button"` with labels and
      `aria-current` on the active dot
- [ ] No horizontal overflow at 320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] Document height within ~5 % of 6,197 / 6,386 / 6,876 / 7,359 px (1440 / 768 / 390 / 320)
- [ ] Reduced motion: no element stranded at `opacity: 0`; no transform animations; no smooth scroll

## 6 — Verify

- [ ] `npm run verify:app -- patina` green: typecheck → lint → vitest **100 % coverage** → build
- [ ] `scripts/verify-app.sh patina` green
- [ ] open the built app at 1440 and 390 and compare band-by-band against the reference (spec §Band-by-band)
- [ ] after merge: `[~]`→`[x]` on the new `TEMPLATES.md` row + surge URL + `npm run readme:status`
