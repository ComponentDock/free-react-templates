# Tidewater — task outline

Recreation of the ColorLib **Marrow** author-site design (`marrow`) at `apps/tidewater`.
Spec is the authority: `openspec/specs/template-tidewater/spec.md`. Check boxes only as work ships.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/tidewater`; rename the package to
      `@free-react-templates/tidewater`
- [ ] `public/CNAME` = `tidewater.free.componentdock.com`; `homepage` = `https://tidewater.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/tidewater" package-lock.json`
- [ ] `index.html`: Playfair Display 400/600 + Manrope 400/500/600/700 via one Google Fonts `<link>`;
      pre-paint theme script (`localStorage.theme` → `prefers-color-scheme`); `<title>` uses the new name
- [ ] `@theme` in `src/index.css`: the `primary` 10-step slate navy and the `accent` 9-step sand gold
      (exact hexes in the spec), plus `--font-serif` / `--font-sans`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from any existing app — never a relative
      `@source`)
- [ ] `dark` variant wired the same way the other apps do it

## 1 — Primitives (build once, use ~25×)

- [ ] `Button` — `solid` (radius full, `#2c3547`, white 16/500, `px-6 py-3`), `ghost` (radius full, 1 px
      `#d1d5db`, `#374151`), `solid-sm` (radius full, `px-5 py-2.5`, 14/500), `light` (radius 8, white
      ground, `#374359` label, `px-8 py-4`), `outline-light` (radius 8, **2 px `white/30`**, `px-8 py-4`)
- [ ] `Pill` — full radius, 1 px border, 14/500, used for the hero badge, event type, event status
      (solid vs **dashed sold-out** variant), book retail links, "Copy bio"
- [ ] `Eyebrow` — three variants: pill (`accent-100`/`accent-800`, +0.14 em), bare (`accent-700`,
      +0.20 em), grey (`#6b7280`, +0.22 em)
- [ ] `SectionHeading` — eyebrow + `h2` + optional lede, with a `font` prop (`serif` default, **`sans`
      for `#faq` and `#contact`**)
- [ ] `Reveal` — `[data-animate]` equivalent: `opacity 0 / translateY(20px)` → visible at
      `threshold .1`, `rootMargin 0 0 -10%`, **bail out entirely under reduced motion**
- [ ] `Counter` — 2,000 ms ease-out cubic; render the final value when `IntersectionObserver` is absent
- [ ] `BookJacket` — `size` (`featured` | `backlist`), `ground`, `imprint`, `title`, `subtitle`,
      `author`: `aspect-[2/3]`, dotted `radial-gradient` at 7 %, 12 px spine + 1 px hairline, `rounded-sm`,
      `shadow-2xl`/`shadow-lg`, ring `black/20` (dark: `white/15`)

## 2 — Chrome

- [ ] `Header` — sticky, `bg-white/80 backdrop-blur-lg`, 1 px `#e5e7eb`, `h-16 lg:h-20`, elevation past 50 px
- [ ] `Nav` — 7 labels at `lg`, hamburger + disclosure below, `aria-expanded`; active-label observer
      (only `#tour`, `#praise`, `#press` have targets)
- [ ] `DarkToggle` — 40 × 40, moon ↔ sun glyph swap, `aria-label`, writes `localStorage.theme`
- [ ] `SkipLink`, `Preloader` (removed on `load`, readyState-aware), `ScrollProgress` (`accent-500`),
      `BackToTop` (48 px disc, past 300 px)
- [ ] `CookieStrip` — 1.5 s delay, two buttons, `localStorage['cookie-consent']`
- [ ] `MobileCta` — `lg:hidden`, "The books" + "Get the letter"

## 3 — Bands

- [ ] `Hero` — cream gradient, two parallax+float blobs, badge, `h1` with the typewriter clause, lede,
      3 CTAs, 4 Playfair stats, 1,024 × 512 image
- [ ] `VideoModal` — `fixed inset-0 z-[100] bg-black/80 backdrop-blur`, 16:9 frame, close at `-top-12`,
      ESC + backdrop click, body scroll lock; neutral embed
- [ ] `CounterBand` — `#f9fafb`, `border-y`, 4 count-ups in `primary-600`
- [ ] `Books` — featured 5/7 spread (jacket + `<dl>` + 3 paragraphs + 4 price rows + 4 retail pills +
      italic note) and the 4-card backlist
- [ ] `Tour` — one divided `<ul>`, six rows: 96 px date block, title + type pill, venue · time, italic
      note, status pill (solid link vs dashed sold-out)
- [ ] `Praise` — four `border-l-2 #d29a4c pl-6` quotes in 2 columns + the 6-row prizes ledger
- [ ] `Press` — 3 bio cards with copy-to-clipboard (label → "Copied" 2 s, `execCommand` fallback),
      3 headshots (2 portrait + 1 full-width landscape), 4 contact cells
- [ ] `Faq` — 6 rows, single-open, `max-height`/`opacity` 300 ms, 45° glyph, `aria-expanded`/`aria-controls`
- [ ] `NewsletterBand` — `#contact`, diagonal brand gradient + 10 % dot grid + two blurred discs, 2 CTAs
- [ ] `Footer` — brand + Books/More/Enquiries + Stay Updated, validated email form, legal bar, Component Dock

## 4 — Tests (100 % coverage on the app)

- [ ] One `describe` per component; scenarios mirror the spec's Gherkin blocks 1:1
- [ ] Copy-bio: success path, clipboard-rejection fallback, label revert (fake timers)
- [ ] FAQ: single-open, toggle closed, `aria-expanded` transitions
- [ ] Counters: final value with no `IntersectionObserver` (jsdom) — never assert the `0` initial state
- [ ] Typewriter: cadence with fake timers; and the reduced-motion branch that never changes the phrase
- [ ] Newsletter: invalid → inline error + `aria-invalid`, valid → confirmation, no navigation
- [ ] Cookie strip: appear/no-appear from `localStorage`, both buttons
- [ ] Theme: toggle writes `localStorage.theme`; no `setState` in an effect for any of it

## 5 — Verify & ship

- [ ] `scripts/verify-app.sh tidewater` (typecheck + lint + 100 % coverage + build)
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600
- [ ] No ColorLib string anywhere in `apps/tidewater`; footer links Component Dock
- [ ] `scripts/audit-deployments.sh` after the Surge deploy (HTTPS 200 + `ssl_verify_result=0`)
