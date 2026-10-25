# Headwater — task outline

Recreation of the ColorLib **Springwell** water-treatment design (`springwell`) at `apps/headwater`. The spec is
the authority: `openspec/specs/template-headwater/spec.md`. Design notes:
`docs/templates/headwater/design-notes.md`. Check boxes only as work ships.

> The page's thesis is **a product catalogue, not a service page**: a Products dropdown in the nav, a **square
> photograph of the installed unit** in the hero, and **a three-question quiz instead of a quote form**. There is
> **no `<form>` and no `<input>` anywhere on the page**. Build the quiz first (it is the only stateful widget),
> then the four-card product grid, then bind the rest. All copy lives in the spec §Content inventory; copy it
> verbatim, including the four sample-data caveats.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/headwater`; rename the package to `@free-react-templates/headwater`
- [ ] `public/CNAME` = `headwater.free.componentdock.com`; `homepage` = `https://headwater.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/headwater" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` —
      `css2?family=DM+Sans:wght@400;500;600;700&family=Lora:wght@400;500;600&display=swap` — plus
      `preconnect` to `fonts.gstatic.com`
- [ ] `@theme` in `src/index.css`: **sand** (`#fbf8f3 / #f5efe6`), **ink** (`#f6f5f1 / #eae8e1 / #d3cfc3 /
      #aaa595 / #78725f / #57523f / #3d3a2c / #2c2a22 / #22301f / #161e14`), **primary**
      (`#f1f7f3 / #dfede4 / #bfdbca / #94c2a7 / #63a57f / #4a9268 / #3f8f5f / #33724c / #2a5b3e / #234a33`),
      `--color-star: #fbbf24`, `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)`,
      `font-sans: "DM Sans", system-ui, sans-serif`, `font-serif: "Lora", Georgia, serif`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [ ] `Section` (`py-20 lg:py-28`) + `Container` (`max-w-7xl`, `px-4 lg:px-8` → 1,216 px at ≥ 1280)
- [ ] `Button` — the page's two button shapes: **radius 8** filled (`#3f8f5f`, white, 16/600, `px-6 py-3.5`,
      `hover:bg-primary-700`) and outline (1 px `#d3cfc3`, `#2c2a22`), plus the **white-on-green** variant for
      `#contact` (white ground, `#33724c` label, 16/700, `px-8 py-4`)
- [ ] `Pill` — full radius, two skins: **outlined** (1 px `#d3cfc3`, 14/600, `px-3 py-1.5`, icon + label — the
      phone and city pills) and **chip** (1 px `#d3cfc3` on white, 14/500, `px-4 py-2.5` → **42 px**, with
      `aria-pressed:border-primary-600 aria-pressed:bg-primary-600 aria-pressed:text-white`)
- [ ] `Eyebrow` — 14/20 uppercase `#33724c`, **500** weight in the hero/quiz and **700** in products/why-us/
      service; `tracking-wide` (+0.35 px measured)
- [ ] `StarRow` — five 16 px `#fbbf24` stars + bold value + 14 px lineage (hero only)

## 2 — Chrome

- [ ] `Header` — **81 px** sticky (`#fff`/90 + `blur(16px)`, 1 px `#eae8e1`), **65 px** below `xl`; logo 180 × 36
- [ ] Products **hover dropdown** (`group-hover` visibility + chevron `rotate-180`; `rounded-xl` panel, `md` shadow)
- [ ] City pill **`2xl` only**, phone pill **`md`+**, dark toggle 36 × 36, CTA **`xl`+ (144 × 40)**, burger
      `xl:hidden` with the `aria-expanded` + glyph-swap contract
- [ ] Mobile panel: Products accordion (`rotate-180` chevron) + Learn / About / Contact + phone · city · CTA
- [ ] Header `shadow-lg` past **50 px** of scroll
- [ ] `ScrollProgress` (2 px, `#3f8f5f`), `BackToTop` (48 px disc past 300 px), `CookieStrip`
      (1,500 ms, `localStorage['cookie-consent']`, `accepted` / `essential`), `Preloader`
      (derive `loaded || readyState === 'complete'`)
- [ ] `SkipLink` → `#main-content`; every in-page anchor offset by `headerHeight + 20`

## 3 — Hero

- [ ] Band **736 px** on **`#f5efe6`**, `py-20 px-8`, 12-col **6 / 6**, `gap: 64px`
- [ ] Text column **576**: eyebrow · `h1` **Lora 600 60/69 `#22301f`** (36 → 48 → 60) · lede 18/29.25 `#57523f`
      at `max-w-lg` (512) · star line (5 × 16 px `#fbbf24`, **4.9**, *"480+ reviews on Google · sample data"*)
      · two CTAs (`Test your water` → `#quiz`, `See products` → products)
- [ ] Image **576 × 576** at `x 752`, radius 16, `aspect-square object-cover`
      (`picsum.photos/seed/headwater-hero/1200/1200`)
- [ ] Stacking at 390: text then image, `padding: 56px 16px`, `h1` **36 px**

## 4 — Quiz (build this second, test it first)

- [ ] `QUIZ` data module: 3 questions × (3 / 4 / 3) chips with `value`s, plus **five outcomes + fallback**
      exactly as tabled in the spec, in order
- [ ] State: `Record<Question, Value>`; `complete = answers.size === 3`; outcome derived in render
      (`outcomes.find(o => o.match.every(v => values.includes(v))) ?? fallback`)
- [ ] Chips: `aria-pressed`-driven skin, one pressed per fieldset, changeable after a result appears
- [ ] Result card: `hidden` until complete, **12 px** radius, `#bfdbca` border, white on cream, eyebrow
      *"Most likely what you need"*, serif product line, explanation, green **See this product** link, fine print
- [ ] `role="status"` + `aria-live="polite"` on the result region (a **fix**, the reference omits it)
- [ ] Tests: each of the five outcomes, the fallback, precedence (`taste` + `city` before `taste` + `well`),
      re-answer after result, and that the card is hidden before the third answer

## 5 — Products

- [ ] Band **1,093 px** on **`#fbf8f3`**; head left-aligned `max-w-2xl` (eyebrow 700, **serif** `h2` 36/40/600)
- [ ] `<ul>` grid **4 × 286** `gap-24` (→ 2 at 640, 1 below); `<li>` cards radius 16, 1 px `#eae8e1`, white
- [ ] Card body `p-5`: serif 18/28 linked `h3`, 14 px blurb, `<dl>` of three spec rows (1 px top rule, `dt`
      `#78725f`, `dd` 14/500 right-aligned), 14/600 `#33724c` price, bordered **Request a quote**
- [ ] Four products with the twelve spec values and four prices from the spec table
- [ ] Footnote *"Sample products and pricing for template demonstration…"*

## 6 — Why us

- [ ] Band **800 px** on **`#f6f5f1`**, 6/6 `gap-64`; figure **576 × 432** radius 16 + figcaption, and
      **figure last on mobile / first at `lg`**
- [ ] Sans `h2` 36/40/**700** with **−0.9 px** tracking + 18/29 lede
- [ ] Four commitments as a `<dl>`, each `border-l-2 #3f8f5f` + `pl-5`, `dt` 16/700, `dd` 16/24 `#57523f`, `24px` apart

## 7 — Service

- [ ] Band **783 px** white; head left `max-w-2xl` (eyebrow 700, sans `h2`, 18/29 lede)
- [ ] Grid shell: `grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100`
      (**hairlines, not cell borders**); 1 / 2 / 3 columns, **four** cells
- [ ] Cell: `p-8`, 18/700 sans `h3`, 16/24 body `flex-1`, 14/**700** `#33724c` price pinned to the bottom

## 8 — Testimonials carousel

- [ ] Band **768 px** `#f9fafb`; pill `Reviews` (`bg-primary-100`, `text-primary-700`, 14/500) + `h2` + lede
- [ ] Track: **3 slides at 405 px** (1,216 ÷ 3), `px-3` inner padding, cards **381 × 292** radius 16 white
      `shadow-soft`, five 20 px `#63a57f` stars, 48 px initials disc, name + town
- [ ] Per-view **3 / 2 / 1**; `maxIndex = slides − perView`; **0 dots and no arrows at ≥ 1024**, 2 at 768, 3 at 390
- [ ] Autoplay 5 s, pause on hover, restart on arrow/dot; active dot 32 × 10; **off under reduced motion**
- [ ] Three quotes, three attributions, following the spec (§Content inventory)

## 9 — Contact band + footer

- [ ] `#contact` **440 px** `#33724c` `py-28`: white `h2` 36/700, lede 18/29 `#dfede4` at 576, white **203 × 56**
      pill + 2 px `white/40` outline pill, stacked full-width below `sm`
- [ ] Footer **568 px** `#111827` `pt-96`: 12-col **4 / 5 / 3** (384 / 488 / 280), light logo 190 × 40, blurb,
      three 40 px social chips (real destinations), address / phone / email, three link columns,
      **Water testing** block with a green CTA
- [ ] Bottom bar `mt-16 border-t #1f2937 py-8`: © line + Privacy Policy / Terms of Service
- [ ] Footer links `https://www.componentdock.com/` (Component Dock) as required by AGENTS.md rule 5

## 10 — Dark mode

- [ ] `.dark` class on `<html>`; `localStorage.theme` = `dark` / `light`; first paint honours
      `prefers-color-scheme` when the key is absent
- [ ] Band mapping: body `#030712`, hero/quiz `gray-900`, products `gray-950`, why-us `gray-900`,
      service `gray-950`, testimonials `gray-900`, contact unchanged `#33724c`, footer `gray-900`
- [ ] No light hairline survives the switch (`border-ink-*` → `border-gray-800`); toggle has an accurate
      accessible name

## 11 — Verify

- [ ] `apps/headwater` typecheck + lint clean; **100% coverage** on the new app
- [ ] `scripts/verify-app.sh headwater` green; build produces a working `dist`
- [ ] No ColorLib string in any app file (comments included); the app never says "Springwell"
- [ ] No `<form>` / `<input>` on the page; zero `href="#"`; zero dead `#service-areas`; every `tel:` well formed
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] Reduced motion: no element stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] Then (implementer, not prep): paste the `TEMPLATES.md` row from the spec §catalogue-gap, `[~]` → `[x]`,
      add the surge URL, regenerate the README status, deploy
