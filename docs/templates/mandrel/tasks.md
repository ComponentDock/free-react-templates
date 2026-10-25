# Mandrel — task outline

Recreation of the ColorLib **Steelworks** mechanical-contractor design (`steelworks`) at `apps/mandrel`. The
spec is the authority: `openspec/specs/template-mandrel/spec.md`. Design notes:
`docs/templates/mandrel/design-notes.md`. Check boxes only as work ships.

> The page's thesis is **credentials before imagery**: a 37 px licence strip above the nav, a hero that pairs a
> 48 px headline with a **four-row fact table**, and a `#capabilities` band whose whole argument is a
> **7 × 5 tick matrix** (25 ticks, 10 honest em-dashes). Build the matrix first (it is the design), then the
> hero fact table, then the three project cards with their **value band / duration** `dl`. There is **no form
> and no input on the page** — do not add one. All copy lives in the spec §Content inventory; copy it verbatim,
> including the three sample-data caveats.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/mandrel`; rename the package to `@free-react-templates/mandrel`
- [ ] `public/CNAME` = `mandrel.free.componentdock.com`; `homepage` = `https://mandrel.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/mandrel" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` —
      `css2?family=Manrope:wght@400;500;600;700&display=swap` — plus `preconnect` to `fonts.gstatic.com`
- [ ] `@theme` in `src/index.css`: **primary** (`#f1f4f7 / #e2e8ee / #c4d0dc / #6b87a3 / #4e6b89 / #3c5a78 /
      #31485f`), **ink** (`#f3f4f6 / #e5e7eb / #d1d5db / #9ca3af / #6b7280 / #4b5563 / #374151 / #1f2937 /
      #111827 / #0a0f1a`), `font-sans: "Manrope", system-ui, sans-serif`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [ ] `Section` (`py-20 lg:py-28`) + `Container` (`max-w-7xl`, `px-4 lg:px-8` → 1,216 px at ≥ 1280)
- [ ] `Button` — **radius 8** filled (`#3c5a78`, white, 16/700, `px-6 py-3.5` → **177 × 54**, `hover:bg-primary-700`),
      outline (1 px `#9ca3af`, `#1f2937` label), and the **white-on-steel** variant for `#contact`
      (white ground, `#31485f` label, 16/700, `px-8 py-4`, `hover:bg-primary-50`)
- [ ] `Pill` — full radius, 1 px `#d1d5db`, 14/600 `#111827`, `px-3 py-1.5`, icon + label (phone and city)
- [ ] `Eyebrow` — 14/20 uppercase **700**, `tracking-wide` (**+0.35 px**), `#3c5a78` on the light bands and
      `#31485f` in `#process`
- [ ] `FactTable` — 1 px `#e5e7eb` rules, `th` 14/500 `#6b7280` at `w-2/5`, `td` 14/600 `#111827`

## 2 — Chrome

- [ ] `LicenceBar` — **37 px** (`h-9` + 1 px border) on `#111827`, in flow **above** the header, three
      credential pairs, the last two `hidden` below `sm`
- [ ] `Header` — **81 px** sticky (`#fff`/90 + `blur(16px)`, 1 px `#e5e7eb`), **65 px** below `xl`; logo 150 × 32
- [ ] Six nav labels (Capabilities · Projects · Sectors · Certifications · Careers · About) at 14/600 `#374151`,
      `gap-7`, `hover:text-primary-700`
- [ ] City pill **`2xl` only**, phone pill **`md`+**, dark toggle, CTA **`xl`+ (177 × 54)**, burger `xl:hidden`
      with the `aria-expanded` + glyph-swap contract
- [ ] Mobile panel: six flat links (no accordion) + phone · city pills + full-width CTA
- [ ] Header `shadow-lg` past **50 px** of scroll
- [ ] `ScrollProgress` (2 px, `#3c5a78`), `BackToTop` (48 px disc past 300 px), `CookieStrip`
      (1,500 ms, `localStorage['cookie-consent']`, `accepted` / `essential`), `Preloader`
      (derive `loaded || readyState === 'complete'`)
- [ ] `SkipLink` → `#main-content`; every in-page anchor offset by `licenceBar + header + 20` px

## 3 — Hero

- [ ] Band **799 px** on **`#f3f4f6`**, `py-20 px-8`, 12-col **7 / 5**, `gap: 48px`
- [ ] Text column: eyebrow · `h1` **Manrope 700 48/52.8 `#111827`** at `max-w-2xl` (672), tracking −1.2 px ·
      lede 18/28 `#4b5563` at `max-w-xl` (576) · two **177 × 54** radius-8 CTAs
- [ ] `FactTable` `mt-10` `max-w-md` (448): Founded **1998** · Engineers **64 directly employed** · EMR
      **0.71 (3-year average)** · Bonding capacity **$5M single, $12M aggregate**
- [ ] Image **479 × 638** `aspect-[3/4]` `rounded-xl`; **4:3 below `lg`** (**358 × 269** at 390)
- [ ] Stacked layout at 390 → band **1,102** px (and **1,213** at 320)

## 4 — `#capabilities` (the matrix)

- [ ] Band **869 px** white, `py-28`; header block `max-w-2xl` (eyebrow · 36/700 `h2` · 18/28 lede)
- [ ] Data table: **7 capabilities × 5 sectors**, `Set` of "yes" pairs; **25 ticks / 10 em-dashes** in the exact
      pattern from the spec
- [ ] Real `<table>`: `<caption class="sr-only">Capabilities by sector</caption>`, `<th scope="col">` × 6,
      `<th scope="row">` × 7, header row over a **2 px** `#d1d5db` rule
- [ ] Cells `padding: 14px 12px`, rows **53 px**; tick **20 × 20** `#3c5a78` `aria-hidden`; refusal em-dash
      `#d1d5db` `aria-hidden`
- [ ] **35 `sr-only` sentences** generated from the same data (*"… in Healthcare: yes|no"*)
- [ ] Wrapper `overflow-x: auto` + `min-w-[680px]` table; **sticky row-label column** (`position: sticky; left: 0`)
- [ ] Sample-matrix footnote

## 5 — `#projects`

- [ ] Band **952 px** `#f3f4f6`; eyebrow · 36/700 `h2` · 18/28 lede in `max-w-2xl`
- [ ] `<ul>` 3 columns at `lg`, `gap: 24px`, cards **389** wide, `rounded-xl` white + 1 px `#d1d5db`
- [ ] Card: 4:3 image · `p-6` body · 12/700 uppercase steel-blue sector · linked 18/700 title · 14/28 blurb
- [ ] `<dl>` pinned by a 1 px rule: **Value band** and **Duration** (`dt` 12/500 `#6b7280`, `dd` 14/700)
- [ ] Values verbatim: $1m - $2.5m / 16 weeks · $2.5m - $5m / 22 weeks · $500k - $1m / Two summers

## 6 — `#certifications`

- [ ] Band **411 px**, `py-12`, **1 px `#d1d5db` top and bottom borders**
- [ ] Header `mb-8`: eyebrow `Prequalification` + **24 px** `h2` **What is in the pack**
- [ ] One grid: `gap: 1px` on `#d1d5db`, shell `overflow-hidden rounded-lg`, **2 cols `sm` → 4 `lg`**; cells
      **303 × 88** `p-5` white — **no cell borders** (the gaps are the rules)
- [ ] Eight credential pairs (title + sub-line) verbatim; sample-accreditation footnote

## 7 — `#process`

- [ ] Band **592 px** white; eyebrow in **`#31485f`**; `h2` **Bid, mobilise, commission, hand over**
- [ ] `<ol>` 3 columns at `sm`, `gap: 24px`, `mt-12`
- [ ] Each step: **number `01`/`02`/`03`** 14/700 tabular-nums `#3c5a78` + **1 px `#e5e7eb` rule** filling the
      row; 18/700 `h3`; 16/28 body; **14/700 `#31485f` promise** (*Usually 10 working days* / *Agreed, not
      imposed* / *Documentation at PC*)

## 8 — `#contact` and footer

- [ ] `#contact` **440 px** `#31485f` `py-28`, centred `max-w-3xl`; white 36/700 `h2`; lede `#e2e8ee` at 576
- [ ] Two CTAs: white pill (`#31485f` label, `px-8 py-4`) + **2 px `white/40`** outline pill
- [ ] Footer **567 px** `#111827` `pt-24`; 12-col **4 / 5 / 3**; 190 × 40 light logo; `max-w-xs` blurb; three
      40 px social chips; address / phone / email
- [ ] Link columns **Capabilities · Company · Support** (4 items each) at 16/400 `gray-400`
- [ ] **Prequalification** column: blurb + `#3c5a78` **Request a quote**
- [ ] Bottom bar `mt-16 border-t #1f2937 py-8`: `© 2026 {Brand}. All rights reserved.` + Privacy / Terms
- [ ] **Footer links `https://www.componentdock.com/`** ("Component Dock")

## 9 — Behaviour and dark mode

- [ ] Dark toggle: `.dark` on `<html>`, `localStorage.theme`, first-paint guard (stored value **or**
      `prefers-color-scheme`), `aria-pressed` reflects the mode
- [ ] Dark grounds: body/white bands `#030712`, hero/projects `#111827`, `#contact` unchanged, accents
      `primary-400`
- [ ] **No reveal-on-scroll, no stagger, no parallax** — the reference ships none
- [ ] Cookie strip after 1,500 ms; preloader removed when ready; back-to-top past 300 px; progress bar 2 px

## 10 — Fidelity fixes (reference defects, do not reproduce)

- [ ] `#service-areas` anchors point at a **real** in-page target (footer address line or `#contact`)
- [ ] **Zero** `href="#"` — give the three social chips real destinations
- [ ] Footer `tel:` well formed (`tel:+15550100205`), no parentheses or spaces inside the URI
- [ ] If shipping JSON-LD: `{"@context":"https://schema.org","@type":"PlumbingContractor",…}` — the source's
      block has no `@type`
- [ ] No `data-nav-link` active-state observer (inert in the reference)
- [ ] Sticky matrix row-label column below 1024; `scroll-margin-top` clears licence bar + header

## 11 — Verification

- [ ] `scripts/verify-app.sh mandrel` green (typecheck · lint · 100% coverage · build)
- [ ] `body.scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440; the only horizontal scroller
      is the matrix wrapper
- [ ] `npm run spec:validate` (or the per-item openspec validate) passes for `template-mandrel`
- [ ] Add the `TEMPLATES.md` row under **`## Industrial`** (bump the count), commit, deploy, then update the row
      with the surge URL
