# Balancepoint — task outline

Recreation of the ColorLib **Switchover** heat-pump-installer design (`switchover`) at `apps/balancepoint`. The
spec is the authority: `openspec/specs/template-balancepoint/spec.md`. Design notes:
`docs/templates/balancepoint/design-notes.md`. Check boxes only as work ships.

> The page's thesis is **the ledger before the brochure**: a split hero whose right rail is a three-field quote
> card, and a **very dark `#13181c` band** whose six checkbox rows subtract itemised incentives from `$14,800`
> until the net figure (`$10,400`) sits under them in 36 px mono. Build the ledger **first** — it is the design —
> then the hero card, then the chart band, then the hairline services grid. Lime is a **signal**: one lime band
> (`#4a6918` closing CTA), everything else lime text/ticks/borders on light grounds. All copy lives in the spec
> §Content inventory; copy it verbatim, including the six incentive conditions, the five FAQ answers and the four
> sample-data caveats. **No photography exists on the reference** and its one image slot is a chart, not a photo.

## 0 — Scaffold

- [x] `cp -r apps/<simplest-existing-app> apps/balancepoint`; rename the package to
      `@free-react-templates/balancepoint`
- [x] `public/CNAME` = `balancepoint.free.componentdock.com`; `homepage` = `https://balancepoint.free.componentdock.com`
- [x] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/balancepoint" package-lock.json`
- [x] `index.html`: one Google Fonts `<link>` —
      `css2?family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap` (verified
      200, 9,127 B) — plus `preconnect` to `fonts.gstatic.com`
- [x] `@theme` in `src/index.css`: **primary** (`#f4fbe8 / #e6f6cb / #ceec9c / #b0dc66 / #93c63c / #78a926 /
      #5d861b / #4a6918`), **ink** (`#f5f7f8 / #e8ecef / #d0d8dd / #a6b3bc / #748592 / #546472 / #3e4b56 /
      #303a43 / #1f262c / #13181c`), `font-sans: "Outfit", system-ui, sans-serif`,
      `font-mono: "JetBrains Mono", Consolas, monospace`, `--shadow-soft: 0 4px 16px -4px #0000001a`
- [x] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [x] `Section` (`py-20 lg:py-28`) + `Container` (`max-w-7xl`, `px-4 lg:px-8` → 1,216 px at ≥ 1280)
- [x] `Button` — filled (`#5d861b`, white, `px-5 py-2.5`, 14/700, radius 8, `hover:bg-primary-700`), outline
      (`2 px white/40` for the lime band), white-on-lime (for the contact band), and a dark-surface variant
- [x] `Eyebrow` (14/20 700 uppercase `tracking-wide`, `#4a6918` light / `#b0dc66` dark)
- [x] `Money` (`font-mono tabular-nums`, `−$` U+2212 prefix helper: `formatAmount(n)`, `formatNet(n)`)
- [x] `Pill` (full radius, 1 px `#d0d8dd`, 14 px — location / phone)
- [x] `SectionPill` (`bg-primary-100 text-primary-700` chip used by *Reviews* and *Questions*)

## 2 — Chrome

- [x] **Licence strip**: 37 px (`h-9` + 1 px border), `bg-ink-800`, 12 px `text-ink-100`; *Licence* + number,
      *Rebate paperwork filed for you*, *Serving* + county (last two `hidden sm:flex`); right-side star + 4.9 +
      `(sample)`
- [x] **Header**: sticky `top-0 z-50`, `bg-white/90 backdrop-blur-lg`, 1 px `border-ink-100`; 64 px row → 80 at
      `lg`; wordmark (`150 × 32`, 36 at `lg`); six nav labels `gap-7`; location pill `hidden 2xl:block`; phone
      pill `hidden md:block`; dark toggle; lime CTA; burger `xl:hidden`
- [x] `shadow-lg` on the header past **50 px** of scroll (`data-header` behaviour, ported as a scroll listener)
- [x] Mobile disclosure: `aria-expanded` + panel of six links, phone + location pills, full-width CTA; close on
      link click and `Escape`, return focus to the burger
- [x] Fixed chrome: 2 px progress bar (`#5d861b`, `aria-hidden`, width = scroll fraction), 48 px back-to-top past
      300 px, cookie `role="dialog"` with working Decline / Accept All + `localStorage['cookie-consent']`,
      preloader removed on ready (skipped under reduced motion)
- [x] Skip link → `#main-content`; `<html lang="en">`; original `favicon.svg`

## 3 — Hero

- [x] `#f5f7f8`, `py-14 lg:py-20`, 12-col **7 / 5**, `gap-10 lg:gap-16`
- [x] Eyebrow *Spokane · Licensed and rebate certified*; `h1` 60/66 **700** `−1.5px` `#1f262c` with
      *"Here they are, itemised."* in `#5d861b`; lede 18/28 `#546472` `max-w-xl`
- [x] Rating line: five `amber-400` stars, **4.9**, *190+ reviews on Google · sample data*
- [x] Four ticks (`sm:grid-cols-2`, `primary-600` tick + 16 px `#303a43` label), copy verbatim
- [x] Quote card `#quote`: `rounded-2xl border-ink-100 shadow-md p-8`, **469 × 524**; `h2` 24/32; three labelled
      controls (name `text`, phone `tel`, replace `select` with seven options); lime submit **Get the figure**;
      inline validation + success message; closing caveat line

## 4 — `#incentives` (the ledger — build this first)

- [x] `#13181c`, `padding-block: 112px`, 12-col **7 / 5**, `gap-48`; eyebrow `#b0dc66`; `h2` 36/40 white; lede
      `white/70`
- [x] One `incentives` data module: `{ id, name, amount, source, condition, defaultChecked }` × 6, amounts
      `2000 / 1600 / 1800 / 800 / 900 / 1200`, defaults **federal, utility, manufacturer**
- [x] Six rows as `<label>` + `<input type="checkbox" class="accent-primary-400">`: `rounded-xl border
      border-white/10 p-4`, name 600 white, amount mono `#b0dc66` on the same baseline, uppercase `white/35`
      source, 14 px `white/50` condition
- [x] Selected treatment via `has-[:checked]:border-primary-400/60` + `has-[:checked]:bg-primary-400/5`
- [x] Summary card: `dl` (Installed price `$14,800` / Incentives selected `−$…`), `border-t white/10`,
      *What you actually pay* + **36 px mono** net with `aria-live="polite"`, paperwork paragraph, lime CTA
      → `#contact`, 14 px `white/35` caveat
- [x] Arithmetic: load `−$4,400 / $10,400`, all six `−$8,300 / $6,500`, none `−$0 / $14,800`; floored at zero
- [x] Tests: every subset total, the U+2212 character, `toLocaleString('en-US')` grouping, the floor

## 5 — `#why-us` (the chart band)

- [x] `#f5f7f8`, two columns `gap-16`, figure left / copy right (`order-last lg:order-first` on the figure)
- [x] Eyebrow *The honest part*; `h2` 36/40; lede 18/28; four `dl` entries with **2 px `#5d861b` left border**,
      `pl-5`, `space-y-6`, copy verbatim
- [x] **Inline SVG chart** (800 × 600, `role="img"` + `aria-label`): `#13181c` ground, `#1f262c` inner card
      `rx=24`, title *Output against temperature*, `#303a43` axes, `#93c63c` rising curve, lime balance-point dot
      with *"What the house loses"* / *"Below here, backup makes up the difference"*, mono `5°F / 20°F / 35°F /
      50°F`, footer line *Where it sits is a property of your house, not of the brochure.* + `figcaption`

## 6 — `#services`

- [x] White, `padding-block: 112px`; eyebrow, `h2` **"Four routes, and two things to do first"** (the reference
      says *four* over six cells — see spec §Reference defects 7), lede
- [x] Shell `rounded-2xl border border-ink-100 overflow-hidden`; grid `sm:grid-cols-2 lg:grid-cols-3`,
      **`gap: 1px` on `bg-ink-100`**; cells `bg-white p-8`, **404 × 208**, `flex flex-col`
- [x] Six cells: 18/28 700 `h3`, 16/24 blurb with `flex-1`, 14/700 `#4a6918` price line pinned to the bottom
- [x] Footnote *Starting prices are sample data for demonstration…*

## 7 — `#areas` and `#testimonials`

- [x] `#areas`: 12-col **5 / 7**; `h2` + lede left; twelve-town `<ul>` `grid-cols-2 sm:grid-cols-3` `gap-x-6`,
      45 px rows with 1 px `#e8ecef` rules; footnote
- [x] Point the header location pill at `#areas` (the reference's `#service-areas` is dead on the home page)
- [x] `#testimonials`: `#f9fafb`, `py-20 lg:py-28`, centred header + *Reviews* pill; three `405 × 320`
      `rounded-2xl bg-white p-8 shadow-soft` cards (five `primary-400` stars, 18/24 quote, 48 px initial disc,
      name + town); quotes name **Balancepoint**; keep the sample-reviews caveat
- [x] Either a **working** one-per-view slider below `lg` (arrows + dots, `aria-live`) or **no** arrows and **no**
      empty dot container — never dead controls

## 8 — `#faq` and `#contact`

- [x] `#faq`: white, `py-20 lg:py-28`, *Questions* pill, `h2` + lede; five disclosures 768 wide, 1 px
      `#e5e7eb` rules, 18/24 600 question, 32 px round chevron
- [x] Accordion **actually works** (the reference's five answers measure 0 px): `aria-expanded` +
      `aria-controls`, first open on load, ≤ 200 ms height transition, reduced-motion respected
- [x] `#contact`: `#4a6918`, `padding-block: 112px`, centred `max-w-3xl`; white `h2`; lede `#e6f6cb`; white pill +
      2 px `white/40` outline pill; well-formed `tel:`

## 9 — Footer

- [x] `#111827`, `pt-16 lg:pt-24`, 12-col **4 / 5 / 3**; 190 × 40 light wordmark, blurb, three 40 px social chips
      (real destinations or omitted), address / phone / e-mail
- [x] Three link lists (**Services** 4, **Company** 4, **Support** 3) with `uppercase tracking-wider` heads
- [x] **Stay Updated**: blurb, e-mail input + lime **Subscribe** with inline validation; **no fixed 373 px
      minimum** (the reference overflows at 320 because of it)
- [x] Bottom bar `mt-16 border-t border-gray-800 py-8`; copyright + Privacy + Terms
- [x] `https://www.componentdock.com/` link present

## 10 — Behaviour

- [x] Dark mode: `.dark` on `<html>`, `localStorage.theme`, OS default when the key is absent, `aria-pressed` on
      the toggle, grounds as in the spec (`#030712` body, `#111827` hero/why-us, `#13181c` ledger untouched)
- [x] 14 `fade-in-up` reveals on exactly the testimonials (6) + FAQ (8) targets; nothing in hero/ledger/services/
      areas; `prefers-reduced-motion` → `opacity: 1`, no transition
- [x] Forms: no network; visible inline success; `required` + `aria-describedby` errors

## 11 — Fidelity fixes (reference defects, do not reproduce)

- [x] FAQ opens (defect 1) · review controls work or are gone (2) · location pill → `#areas` (3) · one
      well-formed `tel:` (4) · no 320 px overflow (5) · valid or absent JSON-LD (6) · `h2` does not say *four*
      over six cells (7) · four sample-data caveats kept (8) · licence number invented in the same shape (9) ·
      chart ported, not replaced by a photo (10) · cookie strip functional (11)

## 12 — Verification

- [x] `scripts/verify-app.sh balancepoint` green — typecheck + lint + 100 % coverage + build
- [x] `npm run spec:validate` still passes; spec checklist in
      `openspec/specs/template-balancepoint/spec.md` fully ticked by the implementer (not by prep)
- [x] `body.scrollWidth === clientWidth` at **320** / 390 / 768 / 1024 / 1280 / 1440
- [x] zero `href="#"`, zero dead in-page anchors, every icon-only control named, every input labelled
- [x] **no** ColorLib / "Switchover" string in any app file (comments included)
- [x] add the `TEMPLATES.md` row from the spec (§Why this design has no row), `[~]` → `[x]`, then
      `npm run readme:status`
