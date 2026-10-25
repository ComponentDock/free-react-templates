# Stoke — Tasks

Recreation of ColorLib **"Coldsnap"** (https://colorlib.com/wp/template/coldsnap/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Stoke** (`apps/stoke`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `coldsnap` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> `## Business (365)` *before* opening the PR — the exact line is in the spec, §Purpose.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 74,998 B,
      `<title>` *Emergency HVAC in Tulsa, with the arrival window published | Coldsnap Heating &
      Cooling*)
- [x] Token sheet measured (`_astro/Base.h47zVCKl.css`, 58,651 B, sha256 `a2e21609…`) — brand
      **`#d41f1f`** on a ten-stop red ramp, `ink` neutral `#f6f7f8 → #14171d`, `ice` `#f2f8fb` /
      `#c4e0ee` / `#95c9e0` / `#285a7c`, stock `gray`/`amber` beneath, radii `.5/1/1.5 rem`,
      `shadow-soft` `0 4px 16px -4px #0000001a`
- [x] Class census: **340** distinct class tokens, **339** compile, the one miss (`group`) is a
      Tailwind marker — **no phantom-class delta**. Two escaping traps recorded in the spec
      (`.\\32 xl\\:block` for `2xl:block`; `data-[active]:border-primary-500` compiles with an
      attribute selector)
- [x] Fonts identified: **Inter** 400–800 + **JetBrains Mono** 500/700, delivered from the preview's
      `/cf-fonts` inside an inline `<style>` (so grepping the sheet for `@font-face` finds nothing);
      both Google Fonts URLs → **200**
- [x] Tokens verified against the **live render** at 1600 px (Playwright, IPv4-pinned): `h1` 60/63 px
      `#14171d` with the span `#d41f1f`, `.btn-primary` `#d41f1f` / 8 px radius / `10px 20px` /
      brand shadow, bands `112px` padding-top, hero 774 px tall, licence strip 37 px `#20242d`,
      closing band `#b11717`, testimonial card 16 px radius + `rgba(0,0,0,.1) 0 4px 16px -4px`
- [x] **The clock verified live**: at 03:1x local the card read `first call at 7am` / `Overnight` in
      `rgb(149,201,224)` = `#95c9e0`, and row `22-7` carried `data-active`
- [x] Structure extracted from the DOM: licence strip + header + **9** `<section>`s + footer + 4
      chrome pieces; 3 window rows, 4 process steps, 6 services, 4 claims, 12 towns, 3 reviews,
      5 FAQs
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B — **byte-identical to the
      Circles prep's read**) plus the page's three inline scripts: reveal observer, header shadow at
      50 px, mobile disclosure, dark toggle, scroll-spy, smooth scroll offset, exclusive FAQ,
      carousel (3/2/1, 5 s), cookie strip, scroll progress, back-to-top at 300 px, preloader — and
      the signature **response clock** (7–17 / 17–22 / 22–7, wrap-aware, 60 s interval, `ice-300`
      for overnight)
- [x] Link census: **44** anchors — 3 dead `#` (social tiles), 2 + 1 fragments (`#service-areas` ×2
      is a **broken target**, the band's id is `areas`), 1 malformed `tel:(555) 060-0600`; 7 inner
      routes all live (`/services` 49,510 B, `/about` 42,932 B, `/rates` 47,016 B, `/service-areas`
      39,954 B, `/contact` 41,582 B, `/terms` 42,411 B, `/privacy` 43,557 B — all `308 → 200`)
- [x] No archive twin: `css/style.css`, `js/snippet.js` and `downloads/free/coldsnap.zip` all **404**
- [x] Screenshot read (`coldsnap-template.jpg`, real JPEG 304,360 B, 2400×1892, macOS frame — licence
      strip + header + whole hero + the top of the dark band only)
- [x] Name check: `stoke` free in `apps/`, `openspec/specs/`, `docs/templates/`,
      `git grep -i stoke origin/main` → empty; `wp/template/stoke/`, `theme/stoke/`,
      `theme/bootstrap/stoke/`, `theme/bb/stoke/` → **404**
- [x] Spec: `openspec/specs/template-stoke/spec.md`
- [x] Design notes: `docs/templates/stoke/design-notes.md`

## Scaffold

- [ ] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `homepage` = `https://stoke.free.componentdock.com`, `public/CNAME` = same host
- [ ] `index.html`: `<title>Stoke — emergency heating and cooling, with the arrival window
      published</title>`, meta description, `<link>` for Inter 400–800 + JetBrains Mono 500/700,
      inline SVG favicon
- [ ] `src/index.css`: the `@theme` block from `design-notes.md` (red ramp, `ink` neutral, `ice`,
      radii, `shadow-soft`, `shadow-brand`), `.btn` / `.btn-primary`, `.nav-active`, `.section`
      (`80px` → `112px` at `lg`)
- [ ] Draw the wordmark inline (a flame/thermometer glyph + `STOKE`) — do not copy `logo.svg`

## Sections (tests first, reference order)

- [ ] Chrome: skip link → `#main-content`, 2 px scroll-progress bar, back-to-top disc past 300 px
      (48 px, `primary-600`, `shadow-primary-600/25`), cookie strip as `role="dialog"` dismissed into
      state, preloader never blocks the page
- [ ] Licence strip: `#20242d`, 36 px, `text-xs`, `Licence OK MECH #00000` + `NATE-certified on every
      truck` + `Serving Tulsa metro` (last two `hidden sm:flex`), rating `4.9` +
      `260+ reviews on Google (sample)` right-aligned, not sticky
- [ ] Header: sticky `white/90` + blur, 64/80 px, six links at **`xl`** only, city pill `2xl`, phone
      pill `md`, `Call now` `xl`, disclosure below `xl` with `aria-expanded` + glyph swap,
      `shadow-lg` past 50 px, scroll-spy `aria-current`
- [ ] Hero: `ice-50` + clipped 520 px blurred `ice-200/50` disc, `ice-700` eyebrow, two-tone `h1`
      (block span in `primary-600`, `leading-[1.05]`), lede, solid `tel:` + ghost → response band,
      5 amber stars + `4.9` + sample suffix, four ticks in `sm:grid-cols-2`
- [ ] **Response band**: `ink-900`, 5/7 split, three `data-window-row` rows with the exact
      labels/notes/promises and the `border-white/15` → `primary-500` active border, the `white/5`
      card with `Right now`, the 36/48 px **JetBrains Mono** promise, the shift label, the note, the
      CTA row, the sample note
- [ ] **The clock**: `useArrivalWindow` over the three-window table — 07–17 `within 2 hours`
      (`primary-400`), 17–22 `within 3 hours` (`primary-400`), 22–07 `first call at 7am`
      (**`ice-300`**), wrap-aware test, one `data-active` row, `aria-live="polite"`, 60 s re-resolve,
      static fallback strings (`Weekday daytime crew` / `Six trucks out, dispatch answers on the
      first ring.`) before hydration — tests inject the hour, no clock mocking
- [ ] Process: four items, zero-padded ordinals + growing hairline rule, `sm:grid-cols-3` (fourth
      alone on row two), four `primary-700` takeaway lines
- [ ] Services: six hairline cells (`gap-px` over `ink-100`, `overflow-hidden rounded-2xl`,
      `sm:grid-cols-2 lg:grid-cols-3`, square cells), blurb `flex-1`, six price lines
- [ ] Why-us: `ink-50`, figure `order-last lg:order-first`, **redrawn** day-by-window SVG (three bars
      `#ee3b3b` / `#b11717` / `#285a7c`, mono ticks 07:00/17:00/22:00/07:00, accessible name),
      figcaption, four `border-l-2 primary-600 pl-5` claims
- [ ] Areas: no eyebrow, `h2` + lede in a 5-col cell, 12 towns in `grid-cols-2 sm:grid-cols-3` with
      `border-b` rows, sample note
- [ ] Testimonials: `gray-50` ground, filled `primary-100` eyebrow pill, 3 cards (stars, quote,
      48 px initial disc, name + town), 3/2/1 per view, `w-8` active dot, arrows from `lg`, 5 s
      autoplay, no autoplay/reveal under reduced motion
- [ ] FAQ: five rows, **exclusive**, `aria-expanded`/`aria-controls`, icon rotates 45°, panel starts
      at `max-height: 0; opacity: 0`
- [ ] Closing band: `#b11717`, `Is it cold in there, or hot?`, `primary-100` lede, white solid `tel:`
      (`px-8 py-4 text-base font-bold`, 8 px radius) + `border-2 white/40` ghost → `#response`
- [ ] Footer: brand block (redrawn light wordmark, blurb, three `rounded-lg bg-gray-800 p-2.5` social
      tiles with real hrefs, address/phone/email) + `Services` / `Company` / `Support` +
      `Stay Updated` newsletter (`type="email"`, `required`, confirmation without navigation), legal
      bar with **`Component Dock` → https://www.componentdock.com/**

## Polish and gates

- [ ] Contrast pass: `primary-600` only on white/`ice-*` grounds, `primary-400` inside the `ink-900`
      band, `ice-300` for the overnight promise, `white/30` notes verified ≥ 3:1 for the smallest
      text and all body copy ≥ 4.5:1
- [ ] Reduced-motion pass: reveal, carousel autoplay and the clock's colour transition are inert;
      the clock still *updates its text* (it is information, not decoration)
- [ ] Keyboard pass: skip link, disclosure, dark toggle absent (light-only), carousel dots, all five
      FAQ rows, back-to-top
- [ ] No `colorlib` / source brand / `coldsnaphvac.example` / copied SVG anywhere in `apps/stoke`
- [ ] `npm run spec:validate` and `scripts/verify-app.sh stoke` green (typecheck, lint, 100 %
      coverage, build)

## Deploy

- [ ] Row added under `## Business (365)` (the line is in the spec, §Purpose), flipped to `[x]` in the
      same bookkeeping commit that writes the surge URL
- [ ] PR titled `feat: Stoke — emergency HVAC template (ColorLib Coldsnap)`, merged immediately
      (`gh pr merge --squash --delete-branch`)
- [ ] Deploy `stoke.free.componentdock.com`, then verify with the house probe:
      HTTPS 200 + `ssl_verify_result=0`
