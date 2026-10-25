# Emberly — Tasks

Recreation of ColorLib **"Heatline"** (https://colorlib.com/wp/template/heatline/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Emberly** (`apps/emberly`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `heatline` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under `## Business`
> *before* opening the PR — the exact line is in the spec, §Purpose — **between `Hardenero` and
> `Heaven`** (the section is sorted by the ColorLib source name). On `origin/main` `334179a34` the
> heading reads `## Business (369)` over 369 rows, so the honest value after adding Heatline is
> **`(370)`**. Re-count the rows, do not copy the number.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 64,887 B, `<title>` *Boiler installation,
      repairs and cover plans in Leeds | Heatline*, sha256 `88ae83ae…`)
- [x] Token sheet measured (`_astro/Base.CvHGvUwD.css`, 59,082 B, sha256 `473c5938…`, Tailwind
      **v4.3.3**) — brand **`#1e6fa8`** on an eight-step steel-blue `primary` ramp
      (`#eff6fb` → `#113954`, with `primary-300 #83b8dd` and `primary-900 #113954` **dark-only**), a
      nine-step cool navy `ink` ramp (`#f4f8fb` → `#0e2434`), an **ember accent `heat` ramp**
      (`#fef2f0`, `#f0705a`, `#ce4630`, `#a93727` + three dark-only steps) used **only** in the seasonal
      band and the logo, `sky-100 #e3f2fa` as the finance ground, stock `gray` 50–950 for the
      footer/testimonial/FAQ chrome, `amber-400` stars in the licence strip and the hero but
      **`primary-400` stars in the testimonials**; radii 8/12/16 px, `shadow-soft`
      `0 4px 16px -4px #0000001a` on the testimonial cards, `shadow-md` on the middle plan card only
- [x] Live-render verification (Playwright, 1440 / 1200 / 390 px): `h1` **60 px / 69 px / −1.5 px weight
      500** (`rgb(20,50,74)`); `h2` 36 / 40 / −0.9 — **500 in `#finance`, 700 in the other bands**;
      seasonal `h2` 24 / 500; plan cards **212 × 472** at 1440, 162 × 616 at 1200,
      358 × 328 / 412 at 390; finance card **768 × 444** (32 px pad) / 358 × 428 (24 px pad); services
      cell **404 × 184** over a `rgb(229,238,244)` gutter; seasonal box **1,216 × 208** on
      `rgb(254,242,240)`; testimonial card **381 × 320**; question 18 px / 600; footer column head
      14 px / 600; licence strip **37 px** on `rgb(20,50,74)`; header **81 px**; `#finance`
      `rgb(227,242,250)` 916; `#services` 831; `#seasonal` 304; `#process` 564; `#areas` 448;
      `#testimonials` `rgb(249,250,251)` 768; `#faq` 820; `#contact` `rgb(24,88,135)` 412; footer
      **544** `rgb(17,24,39)`; document height **6,433 px** at 1440, 6,725 at 1200, **9,859 px** at 390
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B, sha256 `e26cc055…` —
      **byte-identical to the Aquifer / Plantroom / Veranda / Stoke / Closeknit / Kettle / Smallpaw /
      Percline reads**) plus the page-local inline scripts: reveal (14 elements, 12 delays, 0.6 s),
      header shadow at 50 px, mobile disclosure at **`xl` (1280, not `lg`)** — verified: nav `none` and
      hamburger `block` at 1200, panel 492 px open at 390 — exclusive FAQ (icon 45°, panel 88 px,
      **no `aria-expanded` in the reference**), carousel 3/2/1 with **bounds-driven arrows (`display:
      none` with three slides in view)**, cookie strip at 1.5 s, back-to-top at 300 px, progress bar
      (2 px, `7.23 %` at `scrollY 400`). **No ping dot, no sticky call bar, no counter / typewriter /
      parallax / video / lightbox / billing / blog-filter branch**
- [x] **The finance calculator is the page's one interactive tool** (page-local, 656 B) — `36` months,
      `9.9 %` APR, `min 800 max 4500 step 50 value 2400`, `£` + `toLocaleString('en-GB',
      {maximumFractionDigits: 0})`; verified live `2400 → £77/£2,784`, `800 → £26/£928`,
      `1000 → £32/£1,160`, `4500 → £145/£5,220`. ⚠️ the static HTML ships **`£0`** until the script runs
- [x] Link census: **50 anchors** over **16** distinct hrefs — 3 dead `#` (social tiles),
      **2 × broken `#service-areas`** (no such id; the band is `areas`), 1 malformed `tel:0800 000 0000`;
      **every inner route live but behind a 308** (`/plans` 41,841 B, `/repairs` 37,264, `/boilers`
      34,591, `/about` 33,832, `/blog` 34,216, `/privacy` 34,551, `/terms` 33,295, `/areas` 31,085,
      `/contact` 32,347 — all `308 → /<route>/` then 200, unlike the Fieldline sibling which 200s bare)
- [x] No archive twin: `css/style.css`, `js/snippet.js`, `downloads/free/heatline.zip` and the page's own
      `og:image=/og-image.jpg` all **404**
- [x] Reference defects noted: the contact page's form placeholders are **leftover coworking copy**
      (`Membership inquiry, event space, tour request...`) and the JSON-LD's `url` is a bare `/` — the
      JSON-LD itself is **valid** (unlike Fieldline's corrupt block), so write a clean block or none
- [x] Screenshot read (`heatline-template.jpg`, real **JPEG** 274,236 B, 2400×1892, macOS frame — licence
      strip, header, whole hero with all three plan cards, and the finance band down to `£77 a month`).
      This design has **no `TEMPLATES.md` row**, so the catalogue capture from the ColorLib post's
      `og:image` is the screenshot reference
- [x] Class census: **326** distinct tokens in 396 `class` attributes, **all compile** — no phantom-class
      delta. One artefact that is not a class: the hero's right column is `<div class>`
- [x] Font identified: **DM Sans 300/400/500/600/700**, 10 `@font-face` declarations over `latin` +
      `latin-ext` from the preview's `/cf-fonts/v/dm-sans/5.2.8/…` cache inside a 3,280 B inline
      `<style>` (grepping the sheet for `@font-face` finds nothing). **No second family** — `font-mono`
      is never used. `css2?family=DM+Sans:wght@300;400;500;600;700&display=swap` verified **200**
- [x] Name check: `emberly` free in `apps/`, `openspec/specs/`, `docs/templates/`;
      `git grep -il emberly origin/main` → nothing; `wp/template/emberly/`, `theme/emberly/` and
      `theme/bootstrap/emberly/` all **404**. Rejected: `hearth` (existing app + spec), `calor`, `vesta`
      (already in shipped code), `warmfront`, `cinderby` (clean but weaker)
- [x] No un-prepped sibling slug is named anywhere in this spec or these docs (the prep finder reads
      slugs from specs; naming one would mark it prepped)

## Build

- [ ] Scaffold `apps/emberly` from the simplest shipped app; rename the package to
      `@free-react-templates/emberly`; `public/CNAME` = `emberly.free.componentdock.com`; `homepage`
      = `https://emberly.free.componentdock.com`; `vite.config.ts` keeps `injectUiSource()`
- [ ] `src/index.css`: Tailwind 4 `@theme` with the **three** ramps (`primary`, `ink`, `heat`) and
      `sky-100`; load DM Sans 300–700 from Google Fonts in `index.html`
- [ ] Tokens first, then sections — tests before each section (100 % coverage on changed code)

### Sections, in reference order

- [ ] `SkipLink` + `ScrollProgress` + `BackToTop` + `CookieStrip` (state only, no `localStorage`)
- [ ] `LicenceStrip` — `#14324a`, 37 px, `Gas Safe #000000` · `Insured to £5m` · `Covering <region>`,
      amber star + `4.9` + `600+ reviews … (sample)`
- [ ] `Header` — sticky 64/80, wordmark, **seven** links at `xl ≥1280`, location pill, phone pill, CTA
      (186 × 40), hamburger + in-flow panel below 1280; `shadow-lg` past 50 px
- [ ] `Hero` — 5/7 split, eyebrow 500, `h1` **60 px / 500**, 18 px **300** lede, five `amber-400` stars,
      `Compare cover plans` + `Book a repair`; right: **three plan cards** with the middle one ringed
      `#1e6fa8`, `shadow-md`, `Most chosen` pill, solid `Choose`; sample-pricing footnote
- [ ] `FinanceBand` — `#e3f2fa`, left-aligned `max-w-3xl`, eyebrow 500, `h2` **500**, white card with the
      range input and the two outputs; compute on first render (no `£0` flash)
- [ ] `Services` — six-cell hairline grid (`gap-px` over `#e5eef4`), 18 px bold names, 14 px bold prices,
      footnote
- [ ] `SeasonalBand` — the **only** ember surface: `#fef2f0` box, 4 px `#f0705a` left rule, 24 px / 500
      heading, weight-300 body, `#ce4630` CTA
- [ ] `Process` — `<ol>` of three steps with tabular numerals + 1 px rules, three notes
- [ ] `Areas` — 5/7 split, **no eyebrow**, twelve towns on `#e5eef4` rules, footnote
- [ ] `Testimonials` — `#f9fafb`, centred pill, 3-slide carousel (3/2/1, 5 s, hover pause, arrows only
      when scrollable), five `#4a95c8` stars per card, 48 px initial discs
- [ ] `Faq` — exclusive accordion, 18 px / 600 questions, 32 px plus-disc rotating 45°,
      **`aria-expanded` + `aria-controls` added**
- [ ] `ClosingBand` — `#185887`, white `h2` 36/700, `#dbebf6` lede, white CTA + `border-2` ghost with a
      phone glyph
- [ ] `Footer` — `#111827`, brand + three social tiles, `Heating` / `Company` / `Support`, newsletter
      form (validated locally), bottom bar with the **Component Dock** link
- [ ] Authored SVG brand mark (ember flame + blue rule + wordmark) and `favicon` — **no copied files**

### Behaviour

- [ ] Reveal on scroll via `IntersectionObserver` (14 elements, 12 delays), skipped under
      `prefers-reduced-motion`
- [ ] Scroll spy against the mapped band ids (the reference's seven `data-nav-link` values are routes)
- [ ] Carousel: per-view 3/2/1, 5 s autoplay, mouseenter pause, dots, bounds-driven arrows
- [ ] Calculator: the exact amortisation formula and `en-GB` formatter (spec §The finance calculator)
- [ ] Newsletter validation: required + email, inline error, success reset, **no network**

### Hand-off

- [ ] Add the `TEMPLATES.md` row (spec §Purpose), heading `(369)` → `(370)`, marker `[x]` only at ship
- [ ] `npm run readme:status`
- [ ] `scripts/verify-app.sh emberly` green (typecheck, lint, 100 % coverage, build)
- [ ] PR title `feat(template): Emberly (ColorLib Heatline)`; description records source, preview URL,
      tokens used and the twelve deviations from the spec
- [ ] `gh pr merge --squash --delete-branch`, then `gh workflow run deploy-surge.yml -f app="emberly"`
- [ ] `curl -sI https://emberly.free.componentdock.com` → 200; then run the deploy audit
