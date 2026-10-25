# Plantroom — Tasks

Recreation of ColorLib **"Curbline"** (https://colorlib.com/wp/template/curbline/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Plantroom** (`apps/plantroom`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `curbline` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> `## Business` *before* opening the PR — the exact line is in the spec, §Purpose. Note the heading is
> already off by one on `main` (`## Business (366)` over **367** rows, because Thermly's row landed
> without a bump): the honest value after adding Curbline is **`(368)`**.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 75,675 B,
      `<title>` *Commercial HVAC in Fort Worth, with published response tiers | Curbline Mechanical*,
      sha256 `b66a8487…`)
- [x] Token sheet measured (`_astro/Base.4pe9WVqO.css`, 55,544 B, sha256 `e7e16b99…`) — brand
      **`#1963b4`** on a ten-step blue `primary` ramp (`#edf6ff` → `#183961`), a ten-step warm-neutral
      `ink` ramp (`#f5f6f7` → `#13171a`), stock `gray` 50–900 for the footer and the
      testimonial/FAQ bands, `amber-400` stars, `#f6bb63` only inside the register panel, radii
      8/12/16 px, `shadow-soft` `0 4px 16px -4px #0000001a`
- [x] Live-render verification (Playwright, 1440 / 900 / 390 px): hero ground `rgb(245,246,247)`,
      `h1` **60 px / 66 px / −1.5 px**, `#response` `rgb(19,23,26)` at 112 px padding, tier card border
      `rgb(71,156,240)` + `bg white/7 %`, SLA **JetBrains Mono 30 px `#7bbcfb`**, hairline grid ground
      `rgb(233,235,237)` with 32 px white cells, closing band `rgb(23,80,144)`, footer `rgb(17,24,39)`,
      header **65 / 81 px**, carousel **one page at 1440 (0 dots, arrows hidden)**, 2 pages at 900,
      3 at 390
- [x] Class census: **323** distinct class tokens, **all compile**; the single apparent miss
      (`2xl:block`) is the Tailwind leading-digit escape `.\32 xl\:block` — **no phantom-class delta**
- [x] Fonts identified: **Inter 400–800** + **JetBrains Mono 400–700**, delivered from the preview's
      `/cf-fonts/v/…` inside a 12,360 B inline `<style>` (so grepping the sheet for `@font-face` finds
      nothing); both Google Fonts `css2` URLs verified **200** with a browser UA
- [x] Structure extracted from the DOM: licence strip + skip link + progress bar + sticky header (+
      mobile panel) + **hero (7/5 split with the survey card)** + `#response` + `#agreement` + `#why-us`
      + `#sectors` + `#areas` + `#testimonials` + `#faq` + `#contact` + footer + cookie strip +
      back-to-top; **no mobile CTA bar**; 3 tiers, 6 inclusions, 4 commitments, 6 sectors, 12 towns,
      3 testimonials, 5 FAQs, 7 select options
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B, sha256 `e26cc055…` —
      **byte-identical to the Veranda / Stoke / Closeknit reads**) plus three inline scripts: reveal
      (14 elements), header shadow at 50 px, mobile disclosure, dark toggle, scroll-spy (only
      `response` resolves), carousel (3/2/1, 5 s, hover pause), exclusive FAQ, cookie strip, back-to-top,
      progress, smooth-scroll offset. **The page uses none of the kit's typewriter / counter / parallax
      / video / lightbox / billing / blog-filter branches.**
- [x] **Both forms are inert in the reference** — `data-form` and `data-newsletter-form` bind to no
      handler (`grep -c data-validate` = 0), so submit POSTs to `#` with no validation. The recreation
      wires them locally (spec Requirement 5 / Deviation 5)
- [x] Link census: **42** anchors over **15** distinct hrefs — 3 dead `#` (social tiles),
      **2 × `#service-areas` broken** (the band id is `areas`), 1 malformed `tel:(555) 100-1000`;
      **all 7 inner routes live** (`/agreements` 47,814 B, `/services` 47,539 B, `/service-areas`
      40,583 B, `/about` 43,011 B, `/contact` 41,626 B, `/privacy` 43,546 B, `/terms` 42,345 B),
      `/elements` **404**
- [x] No archive twin: `css/style.css`, `js/snippet.js`, `downloads/free/curbline.zip` and the
      advertised `og-image.jpg` all **404**
- [x] Screenshot read (`curbline-template.jpg`, real JPEG 363,802 B, 2400×1892, macOS frame — licence
      strip, header, whole hero and the first two thirds of the dark tier band)
- [x] Name check: `plantroom` free in `apps/`, `openspec/specs/`, `docs/templates/`,
      `git grep -il plantroom origin/main` → empty; `wp/template/plantroom/`, `theme/plantroom/`,
      `theme/bootstrap/plantroom/`, `theme/bb/plantroom/` → **404**
- [x] Spec: `openspec/specs/template-plantroom/spec.md` (`openspec validate … --type spec` → valid)
- [x] Design notes: `docs/templates/plantroom/design-notes.md`

## Scaffold

- [ ] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `homepage` = `https://plantroom.free.componentdock.com`, `public/CNAME` = same host
- [ ] `index.html`: `<title>Plantroom — commercial mechanical, with response tiers in the agreement</title>`,
      meta description, OG tags (no dangling `og-image.jpg` — generate one or omit the tag), the two
      Google Fonts `<link>`s, inline SVG favicon
- [ ] `src/index.css`: the `@theme` block from `design-notes.md` (blue `primary` 50–900, `ink` 50–900,
      `--color-amber-panel`, `--font-sans`, `--font-mono`, `--shadow-soft`), `.section`, `.btn`,
      `.btn-primary`, `.nav-active`
- [ ] Draw the wordmark inline (dark rounded square + blue bar + two pale dots, `Plantroom` / `MECHANICAL`)
      — do not copy `logo.svg`

## Sections (tests first, reference order)

- [ ] Chrome: skip link → `#main-content`, 2 px scroll-progress bar, back-to-top disc past 300 px
      (48 px, `primary-600`, `shadow-primary-600/25`), **no preloader overlay**, cookie strip as
      `role="dialog"` dismissed into state
- [ ] Licence strip: 36 px, `bg-ink-800`, licence + insurance + county + `4.8`/`70+ (sample)` rating,
      the two middle facts hidden below `sm`, no wrap
- [ ] Header: sticky `white/90` + `backdrop-blur-lg`, `border-b ink-100`, 64/80 px, **six** links from
      **`xl`** (1280 px), location pill only at `2xl`, phone pill from `md`, CTA from `xl`, hamburger
      below `xl` with `aria-expanded` + glyph swap, `shadow-lg` past 50 px, scroll-spy `.nav-active`
      on `response`
- [ ] Hero: `bg-ink-50`, `py-14 lg:py-20`, `lg:grid-cols-12` 7/5; eyebrow; `h1` 36→48→60 px with the
      second sentence in `text-primary-600`; 18 px `text-ink-500` lede; five `amber-400` stars + `4.8` +
      sample disclosure; `sm:grid-cols-2` checklist with four `primary-600` ticks; **no image, no
      gradient, no blobs**
- [ ] Survey card `#quote`: `rounded-2xl border-ink-100 bg-white p-6 lg:p-8 shadow-md`, `h2`, three
      fields (name / e-mail / 7-option select), full-width CTA, `No obligation…` footnote
- [ ] Forms: local required + e-mail validation, inline errors (`aria-invalid` + `aria-describedby`),
      reset + green toast on success, **no navigation, no network**
- [ ] Response band: `#13171a` + `.section`, left-aligned `max-w-2xl` head; three cards, card 1 with
      `border-primary-400 bg-white/[0.07]`; mono 30 px SLA in `#7bbcfb`; `dt/dd` `What qualifies` /
      `If we miss it` over `border-t border-white/10`; sample-data footnote + `.btn-primary` CTA
- [ ] Agreement grid: six cells in order, `gap-px` over `bg-ink-100`, `rounded-2xl overflow-hidden`,
      badges `In the monthly fee` ×5 + `Quoted per job`, sample footnote
- [ ] Why-us: `bg-ink-50`, `lg:grid-cols-2`, figure **left** at `lg` and below the text on a phone,
      redrawn asset-register SVG (5 rows, `Replace` in `#f6bb63`, call-out box), caption, four
      `border-l-2 border-primary-600 pl-5` definitions under a *"Three things"* heading (keep both)
- [ ] Sectors grid: same component, six cells, badges `Priority one by default` ×3 (restaurants, data
      rooms, **medical last**), `Priority two, upgradeable` ×2, `Quoted per site` ×1, sample footnote
- [ ] Areas: `lg:grid-cols-12` 5/7, 12 towns in order in `grid-cols-2 sm:grid-cols-3` hairline rows,
      replace-me footnote
- [ ] Testimonials: `gray-50`, pill eyebrow, 3 cards (`rounded-2xl bg-white p-8 shadow-soft`, five
      `primary-400` stars, `text-lg font-medium` quote, 48 px `primary-100` initial disc);
      **static 3-up with no dots and no arrows at ≥1024 px**, 2-up at 640–1023 with dots + arrows,
      1-up below; 5 s autoplay paused on hover, off under reduced motion; arrows clamped inside the
      viewport below `sm`
- [ ] FAQ: white, five rows in order, **exclusive**, `aria-expanded`/`aria-controls`, 32 px
      `bg-gray-100` disc rotating 45°, panel starting at `max-height: 0; opacity: 0`
- [ ] Closing band: flat `bg-primary-700` (no gradient, no dots, no blobs), `h2` 30→36 px white,
      `text-primary-100` lede, white solid CTA (`text-primary-700`) + `border-2 border-white/40` ghost
      with a phone glyph
- [ ] Footer: `gray-900`, brand block (light wordmark, blurb, three `rounded-lg bg-gray-800 p-2.5`
      social tiles with real hrefs, address / phone / `service@plantroom.example`), `Services` (four
      plant labels), `Company`, `Support`, `Stay Updated` newsletter (validated, confirmation without
      navigation), legal bar with **`Component Dock` → https://www.componentdock.com/**
- [ ] Navigation mapping: six nav labels → `response`, `agreement`, `sectors`, `areas`, `why-us`,
      `contact`; location pill → `areas` (**repairs the reference's broken `#service-areas`**); every
      CTA → the survey card; in-page links offset by `header.offsetHeight + 20`

## Polish and gates

- [ ] Contrast pass: `text-white/70` body on `#13171a` and white on `#175090` verified ≥ 4.5:1;
      `text-white/40` micro-labels lifted to `/60` where they carry the only instance of a fact;
      `ink-500` on `ink-50` verified
- [ ] Reduced-motion pass: reveal skipped, carousel autoplay off, smooth scroll still functional —
      no information is carried by motion on this page
- [ ] Keyboard pass: skip link, mobile disclosure, carousel arrows + dots, both forms, all five FAQ
      rows, back-to-top
- [ ] Numeric pass: every visible figure matches the reference (`4.8`, `70+`, `2 hours`,
      `Next working day`, `On the agreed date`, `$5M`, `TX TACLA #00000C`, 3 tiers, 6 + 6 grid cells,
      4 commitments, 12 towns, 3 testimonials, 5 FAQs, 7 select options, 5 register rows)
- [ ] No `colorlib` / source brand (`Curbline`) / `service@curblinemech.example` / copied SVG or
      stylesheet anywhere in `apps/plantroom`
- [ ] `npm run spec:validate` and `scripts/verify-app.sh plantroom` green (typecheck, lint, 100 %
      coverage, build)

## Deploy

- [ ] Row added under `## Business` with the heading corrected to `(368)` (the line is in the spec,
      §Purpose), flipped to `[x]` in the same bookkeeping commit that writes the surge URL
- [ ] PR titled `feat: Plantroom — commercial HVAC response-tier template (ColorLib Curbline)`, merged
      immediately (`gh pr merge --squash --delete-branch`)
- [ ] Deploy `plantroom.free.componentdock.com`, then verify with the house probe:
      HTTPS 200 + `ssl_verify_result=0`
