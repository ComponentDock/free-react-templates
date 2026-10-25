# Kilter — task outline

Recreation of the ColorLib **Upright** chiropractic-clinic design (`upright`) at `apps/kilter`. The spec is the
authority: `openspec/specs/template-kilter/spec.md`. Design notes: `docs/templates/kilter/design-notes.md`.
Check boxes only as work ships.

> The page's thesis is **an honest prognosis**: a hero that promises to tell you *when you would be better off
> elsewhere*, four condition cards that each print a **session count**, a dark first-visit timeline that adds up to
> **45 minutes**, fee cards with **no packages**, and a closing band that says *"Book an assessment, not a course of
> treatment"*. Build the **four condition cards** and the **dark step list** first — they are the design. There is
> **no form on the home page**: the only form in the recreation is the footer newsletter (and it must actually
> confirm). Copy lives in the spec §Content inventory; keep the numbers, change the brand.

## 0 — Scaffold

- [ ] `cp -r apps/mandrel apps/kilter`; rename the package to `@free-react-templates/kilter`
- [ ] `public/CNAME` = `kilter.free.componentdock.com`; `homepage` = `https://kilter.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/kilter" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **DM Sans 400/500/600/700** only — no serif face (defect 4)
- [ ] `src/index.css`: `@theme` with `primary` 50–900 and `accent` 50–900 from the spec's token tables,
      `--radius-lg .5rem`, `--radius-2xl 1rem`, `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)`
- [ ] `vite.config.ts` keeps `injectUiSource()`

## 1 — Content module (test first)

- [ ] `src/content.ts`: `BRAND = 'Kilter'`, address `Studio 3, 210 Whiteladies Road, Bristol, BS8 2XS`, phone
      `0117 496 0123` / `tel:+441174960123`, email `reception@kilter.example`, `COMPONENTDOCK_HREF`
- [ ] Typed arrays: `NAV_LINKS` (6), `HERO_FACTS` (4), `COUNTERS` (4), `CONDITIONS` (4, each with `feels` +
      `approach` + `course`), `VISIT_STEPS` (4, each with `minutes`), `TEAM` (3, each with a 3-row `dl`),
      `FEES` (3, each with `price`, `minutes`, 4–5 `features`), `QUOTES` (3), `FAQS` (5), `FOOTER_COLUMNS` (3)
- [ ] Test: the arrays have exactly those lengths and the four course strings are `4–6 sessions`, `6–10 sessions`,
      `3–5 sessions`, `2–4 sessions`

## 2 — Chrome (`components/Chrome.tsx`)

- [ ] Preloader: white overlay `z-[100]`, 40 px spinner, removed on `load` + 300 ms — and never traps the page with
      JS disabled (defect 11)
- [ ] Skip link, 2 px scroll-progress bar `#40664a`, back-to-top disc (> 300 px), cookie dialog (`role="dialog"`,
      1,500 ms delay, `essential` / `accepted` keys)
- [ ] `lib/useScrollState` for `y` + `progress`; `lib/theme` for the stored/system theme
- [ ] Test: progress width maths, back-to-top visibility at 299/301, cookie storage + node removal

## 3 — Header

- [ ] Sticky `top-0 z-50`, `bg-white/80 backdrop-blur-lg`, 1 px `#e5e7eb` border, `h-16 lg:h-20` (81 px at 1440)
- [ ] Original three-bar logo mark + **Kilter** wordmark (no source SVG)
- [ ] Six nav labels 14/500, `.nav-active` (`#111827`, 600) driven by an IO over the six section ids
- [ ] Theme toggle (`aria-pressed`), filled CTA `hidden sm:inline-flex`, burger below `lg` with `aria-expanded`
      and a panel that repeats the labels + CTA
- [ ] Header gains `shadow-lg` past 50 px (hysteresis-free, matches the reference)
- [ ] Test: `aria-expanded` toggles, panel opens/closes, active label follows the observer, shadow class at 51 px

## 4 — Hero

- [ ] `linear-gradient(#f4f7f4 → #fff)` ground, two `blur-3xl` blobs (`animate-hero-float` 8 s / 10 s), both
      `aria-hidden`
- [ ] Chip with the pulsing dot + **GCC registered · Bristol · Since 2016**
- [ ] `h1` 36/48/60, `−0.9/−1.2/−1.5 px`; line two is `text-gradient` `#40664a → #769d7e`
- [ ] Typewriter: 3 s cycle over the three phrases, 300 ms fade/`translateY(10px)`, static `sr-only` phrase for AT,
      first phrase only under reduced motion (defect 6)
- [ ] CTAs: filled + outline + play chip (*Watch Demo* → neutral modal or `#first-visit`, **not** the Rickroll —
      defect 10)
- [ ] Fact row: `border-t #e5e7eb`, `pt-10`, 4 cells (`£65`, `45 min`, `3–6`, `8`), 2 × 2 below `sm`
- [ ] Hero photograph in a `max-w-5xl` 16:8 card, radius 16, `shadow-2xl`, `ring-1 #e5e7eb`, picsum seed `kilter-1`
- [ ] Test: phrase rotation with fake timers, reduced-motion branch, exactly one `h1`, four fact cells

## 5 — Counter strip

- [ ] `#f9fafb`, `border-y`, `py-16 lg:py-20`; 4-up from `sm`, 2-up below
- [ ] IO threshold 0.5, 2,000 ms cubic ease-out, suffix-aware formatting (`%`, `min`, `,`)
- [ ] **Render the final value when `IntersectionObserver` is absent** (jsdom) — no `setState` in an effect
- [ ] Test: final values `3–6` / `45 min` / `2,400` / `100%` on first paint in jsdom; animated path with a stubbed IO

## 6 — `#conditions`

- [ ] Header block `max-w-2xl`: eyebrow **What we treat**, `h2` 36/40/600, lede 16 `#4b5563`
- [ ] Grid `sm:grid-cols-2 gap-5` → four cards: white, 1 px `#c9d9cc`, radius 16, `p-6`, no shadow
- [ ] Card internals: title 20/600 · two `dt` 14/600 `#2c4132` + `dd` 14/22.75 `#4b5563` · **Typical course** rule
      `border-t #e4ece5 pt-3` with the value 14/600 `#874736`
- [ ] Closing callout: `border-l-4 #c2704f` on `#fdf5f1`, radius 16, `16px 20px`, 14/22.75 `#374151`
- [ ] Test: four cards, four course values, both `dt` present per card, callout copy

## 7 — `#first-visit` (dark)

- [ ] Ground `#25362a`, ink `#f4f7f4`, content `max-w-5xl`
- [ ] Eyebrow on `#c2704f`; `h2` white 36/600; lede `#c9d9cc`
- [ ] `<ol>` shell radius 16, `space-y-px`, rows `#2c4132/60 p-6`; `sm` grid: **160 px** number+time column + text
- [ ] `01`–`04` 24/32/600 `#e8a88a`; time pill `#35513c` 12/600 `#e4ece5`; titles 20/600; bodies 16/26 `#c9d9cc`
- [ ] Closing note `rgba(194,112,79,.15)` + `ring-1 rgba(220,133,96,.3)`, radius 16
- [ ] Test: four steps, the durations `15/15/10/5 min` in order, the list is an `<ol>` with `role="list"`

## 8 — `#team`

- [ ] Centred header (`max-w-2xl`) with **Practitioners** chip and the corrected lede ("Both chiropractors…" —
      defect 8)
- [ ] `md:grid-cols-3 gap-8`; photo 4:5, radius 16, on `#e4ece5`, picsum seeds `kilter-2..4`
- [ ] Name 20/600, role 14 `#874736`, bio 14/22.75 `#4b5563`, `dl` `border-t #e4ece5` with mono registration value
- [ ] Foot note about the GCC register
- [ ] Test: three cards, three registration strings, one `dl` of three rows each

## 9 — `#appointments`

- [ ] `#f4f7f4`, header centred with the **Appointments** chip on `#c2704f`
- [ ] `lg:grid-cols-3 gap-6`; card 1 dark `#2c4132` + `ring-2 #dc8560`; cards 2–3 white + 1 px `#c9d9cc`
- [ ] `p-7`, radius 16; price 30/36/600 `tabular-nums` + "· N minutes" 14; ticks 16 px (`#e8a88a` / `#40664a`)
- [ ] 5 / 4 / 4 features, separated from the price by a 1 px rule; closing note + filled CTA
- [ ] Test: £65/£42/£55 and 45/20/30 minutes, feature counts, only card 1 carries the ring

## 10 — `#testimonials`

- [ ] `#f9fafb`, header in `max-w-3xl` with the **Patients** chip (`primary-100`, 14/500)
- [ ] White cards radius 16 `p-8 shadow-soft`; five 20 px `#769d7e` stars; 18/28/500 quote; 48 px avatar disc
- [ ] Carousel: 3 / 2 / 1 slides, 5 s autoplay, pause on hover, dots only when pages > 1 — **or** static 3-up at
      `lg` with a fourth quote added (defect 9; pick one and say which in the PR)
- [ ] Test: 3 / 2 / 1 per view at 1440 / 768 / 390, autoplay advances with fake timers, no controls when one page

## 11 — `#faq`

- [ ] `max-w-3xl` header, five rows in 768 with `divide-y #e5e7eb`, `py-6` per row
- [ ] Question 18/28/600; 32 px icon disc `#f3f4f6` that rotates 45° when open
- [ ] Exclusive accordion: opening one closes the rest; panel `max-height` 0 → `scrollHeight`, `opacity` 0 → 1, 300 ms
- [ ] `aria-expanded` on the button, panel hidden from AT while closed (or native `<details>`)
- [ ] Test: exclusivity (open B closes A), `aria-expanded` values, keyboard activation, panel not focusable closed

## 12 — `#contact` + footer

- [ ] Gradient `135°, #40664a → #2c4132`, two `white/10 blur-3xl` circles + 40 px radial-dot grid (`aria-hidden`)
- [ ] `h2` 48/48/700 white in 768; white 8 px CTA + 2 px `white/30` outline CTA with a phone glyph
- [ ] Footer `#111827 pt-16 lg:pt-24`, 12-col grid **4 / 5 / 3**, social chips, contact lines, three link columns
- [ ] **Replace the coworking "Spaces" column** with clinic links (defect 1)
- [ ] Newsletter: real validation + confirmation, no network call (defect 3)
- [ ] Bottom bar with copyright + legal links **and `Made with Component Dock` → `https://www.componentdock.com/`**
- [ ] Test: newsletter invalid/valid paths, Component Dock link present with the right href, footer columns count

## 13 — Fidelity fixes (reference defects, do not reproduce)

- [ ] Footer column no longer links to the non-existent `#spaces`
- [ ] Mobile CTA bar: **Book an assessment** → `#contact` and **Call** → `tel:+441174960123` (no `tel:5556789012`)
- [ ] Newsletter form has a handler, a success message and an error path
- [ ] No serif face is loaded; every heading computes to DM Sans
- [ ] Valid JSON-LD if any (`Organization` with `@context` + `@type`, real URL)
- [ ] The `h1` does not mutate for assistive tech; reduced motion shows one phrase
- [ ] Dark-mode gradient text keeps ≥ 4.5:1
- [ ] Team lede agrees with the three cards
- [ ] `Watch Demo` opens something neutral, never `dQw4w9WgXcQ`
- [ ] Preloader cannot strand the page (no-JS / reduced motion)
- [ ] Six nav labels, all resolving to a real in-page id; no `.nav-active` on a link without a target

## 14 — Verification

- [ ] `scripts/verify-app.sh kilter` green (typecheck · lint · 100 % coverage · build)
- [ ] `npm run spec:validate` (or the per-item openspec validate) passes for `template-kilter`
- [ ] Band heights within ±8 % of the spec table at 1440 / 768 / 390; `body.scrollWidth === clientWidth` at
      320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] Reduced-motion pass: no reveal, no blobs, no typewriter, no autoplay, no counter animation
- [ ] Dark-mode pass: every band flips, no light-ground remainder, all text ≥ 4.5:1
- [ ] `grep -ri -E 'colorlib|upright' apps/kilter` → empty
- [ ] `TEMPLATES.md` row added under **`## Medical`** (32 → 33) after *Remedic*, in the **claim commit**, then filled
      with `https://kilter.free.componentdock.com` after deploy; `npm run readme:status` after that
- [ ] Deploy target live: `curl -sS -o /dev/null -w '%{http_code}' https://kilter.free.componentdock.com` → 200
