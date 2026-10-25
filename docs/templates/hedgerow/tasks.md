# Hedgerow — Tasks

Recreation of ColorLib **"Groundwork"** (https://colorlib.com/wp/template/groundwork/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Hedgerow** (`apps/hedgerow`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `groundwork` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under `## Business`
> *before* opening the PR — the exact line is in the spec, §Purpose — **between `Gravity` and
> `Grunt`** (the section is sorted by the ColorLib source name). On `origin/main` `467c8803b` the
> heading reads `## Business (372)` over 372 rows, so the honest value after adding Groundwork is
> **`(373)`**. Re-count the rows, do not copy the number.
>
> ⚠️ **`apps/groundwork` and `openspec/specs/template-groundwork/` already exist** — they recreate
> ColorLib **Bootstrap Footer 04** (row at `TEMPLATES.md` line 783), a different design. Do not touch
> them, do not copy from them, and do not "reuse" that app folder for this template.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 81,096 B, `<title>` *Home | Groundwork*,
      sha256 `3b67f05d…`); `/index.html` byte-identical; every **bare** route answers **308** →
      `/<route>/` → 200; **no archive twin** (`downloads/free/groundwork.zip` 404, no `css/style.css`)
- [x] Token sheet measured (`_astro/Base.BvcOmSDk.css`, 63,707 B, sha256 `5ab9ef9f…`, Tailwind 4):
      brand = **stock Tailwind `green`** emitted as compiled utilities — `primary-600 #16a34a`
      (buttons, counters, middle tier), `primary-700 #15803d` (dark chip, overlines, `After` chips,
      Autumn header, budgets), `primary-50 #f0fdf4` (hero gradient top, chips, callout), 
      `primary-100 #dcfce7` (pale chips, Spring header, avatars), `primary-200 #bbf7d0` (badge border,
      hero blob), `primary-400 #4ade80` (15 stars, ticks, gradient end, ping dot), `primary-500
      #22c55e` (season dots, ring), `primary-800 #166534` (closing gradient end, tag text), `primary-900
      #14532d` (Spring header text + dark mode); warm neutral = **stock Tailwind `stone`** —
      `accent-50 #fafaf9` (portfolio band), `accent-100/200 #f5f5f4/#e7e5e4` (Summer header, card
      borders, hairlines), `accent-300 #d6d3d1` (dark-band body copy), `accent-800 #292524` (Winter
      header), `accent-900 #1c1917` (maintenance band + `Before` chips); stock `gray` 50–950 for the
      counter/testimonial grounds and the footer; **no amber anywhere**
- [x] Live-render verification (Playwright, 1440 / 1200 / 390 px): `h1` **60 / 60 / −1.5 px, weight 700,
      DM Sans** (896 × 120 at 1440; 36 / 40 / −0.9 at 390); `h2` **36 / 40 / −0.9** — **Fraunces 600**
      on work/planting/calendar/maintenance, **DM Sans 700** on testimonials/FAQ — and the closing `h2`
      **48 / 48 / −1.2**; `h3` splits 24 / 18 / 20 / 24 px by band; plant card **352 × 193**, season
      card **289 × 383**, tier **347 × 521**, testimonial slide **405 × 292**, work figure **592 × 387**
      (two 290 × 387 frames), FAQ row **768 × 81**; container **1,280** (1,216 content, 32 px pad),
      hero column **896**; header **81 px** (65 at 390); mobile bar **69 px**; bands at 1440 —
      hero **1,437**, counters 238, `#work` **1,641**, `#planting` 925, `#calendar` 893,
      `#maintenance` **1,032**, `#testimonials` 740, `#faq` 820, `#contact` 500, footer 568;
      document height **8,874 px** at 1440, **13,482 px** at 390
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B, sha256 `e26cc055…` —
      **byte-identical to the Flowpage / Emberly / Aquifer / Plantroom / Veranda / Stoke / Closeknit /
      Kettle / Smallpaw / Percline reads**) plus three page-local inline scripts (`applyTheme` 442 B,
      JSON-LD 159 B, preloader teardown 358 B): reveal (**27** elements, **23** delays, 0.6 s,
      arms only what is below `0.8 × innerHeight`), **typewriter** (1, three phrases, 3 s cycle),
      **counters** (4, 2 s cubic, threshold .5, ship `0`), **parallax** (2 blobs, `0.15` / `-0.1`),
      header shadow at 50 px, mobile disclosure at **`lg` (1024)**, scroll spy (**8** links, only
      **4** resolve), carousel 3/2/1 with **arrows hidden when three slides fill the track**, exclusive
      FAQ (45° icon, **no `aria-expanded` in the reference**), video modal, cookie strip at 1.5 s,
      back-to-top at 300 px, progress bar. **No preloader kept, no billing toggle, no lightbox, no
      blog filter, no `data-validate` anywhere on the site**
- [x] Link census: **46 anchors** over **21** distinct hrefs — **3 dead `#`** (social tiles),
      **4 × broken `#spaces`** (no such id; the four leftover coworking links), 1 malformed
      `tel:(555) 620-1174`; **7 inner routes live** behind a 308 (`/about` 32,539 B, `/pricing` 46,900,
      `/contact` 31,372, `/blog` 38,094, `/elements` 51,937, `/privacy` 33,398, `/terms` 32,152)
- [x] Class census: **373** distinct tokens over **573** `class` attributes, **0 phantom** (every one
      compiles into the single sheet); `text-gradient` appears **once** (the `h1` span),
      `shadow-soft` **three** times (the testimonial cards)
- [x] Screenshot read (`groundwork-template.jpg`, real **JPEG** 430,624 B, 2400×1892, macOS window on a
      pale desk): header → pale-green hero (badge, 60 px two-tone headline, lede, three controls, ruled
      `180+ / 14 yrs / 92% / RHS` strip) → the single framed 2:1 photograph. Everything below the
      photograph is **not** in the capture
- [x] Reference defects recorded: the footer's **`Spaces`** column is **leftover coworking copy**
      (`Hot Desk` / `Dedicated Desk` / `Private Office` / `Meeting Rooms`) pointing at a `#spaces` that
      does not exist; the mobile bar's CTA reads **`Book a Tour`**; the hero's video modal points at the
      placeholder id `dQw4w9WgXcQ`; the JSON-LD parses but its `@context` is the mangled string
      `https://***@type`; `og:image` is a relative `/og-image.jpg` that **404s**; the after-photograph
      of projects 2 and 3 is the **same asset**

## Build order

1. **Scaffold** — copy the simplest existing app, rename the package to
   `@free-react-templates/hedgerow`, `public/CNAME` = `hedgerow.free.componentdock.com`,
   `homepage` in `package.json`, `vite.config.ts` with `injectUiSource()`.
2. **Tokens** — extend `src/index.css`'s `@theme` with the two ramps as **real tokens**
   (`--color-primary-*` = the green ramp, `--color-accent-*` = the stone ramp). The reference emits
   them as compiled utilities because it is an Astro build; a Tailwind-4 app should declare them so
   `bg-primary-600` etc. resolve. Keep the numbers identical — they are the design.
3. **Fonts** — `<link>` `DM Sans` **and** `Fraunces` in `index.html`; `--font-sans` → DM Sans,
   `--font-serif` → Fraunces. Verify the serif actually loads on Linux/CI (a Georgia fallback silently
   ruins every `h2`).
4. **Chrome** — skip link, scroll-progress bar, sticky header (logo, 8 links, CTA, hamburger), mobile
   disclosure panel, back-to-top, cookie strip, mobile CTA bar. No preloader.
5. **Hero** — gradient + two blobs (parallax), badge with the ping dot, `h1` with the
   `.text-gradient` typewriter span, lede, two CTAs, the stats strip, the framed photograph.
6. **Counter band** — four counters animating from 0 on intersection.
7. **Portfolio** (`#work`) — three cases; only the second flips; distinct images; the `<dl>` row.
8. **Planting** (`#planting`) — six cards + the green-ruled callout; left-aligned header.
9. **Calendar** (`#calendar`) — four tinted cards + the centred footnote; centred header.
10. **Maintenance** (`#maintenance`) — the dark band, three tiers, middle filled, closing note.
11. **Testimonials** (`#testimonials`) — the carousel with 3/2/1 per view and dots at mobile.
12. **FAQ** (`#faq`) — exclusive accordion with `aria-expanded` / `aria-controls` added.
13. **Closing band** (`#contact`) — gradient + dot grid + two blobs + two CTAs.
14. **Footer** — 12-column grid, four link columns (**the `Spaces` column replaced**), wired
    newsletter, three social tiles, legal bar + the Component Dock link.
15. **Wiring** — nav mapping (8 labels → real targets), scroll spy, smooth scroll with the header
    offset, reduced-motion switches.
16. **Tests** — one spec file per section at 100 % coverage; the behaviour tests should assert the
    *measured* numbers where cheap (60 px `h1`, four counters, five FAQ rows, three tiers).
17. **TEMPLATES.md** — add the row (between `Gravity` and `Grunt`), re-count the heading, `[x]`.
18. **Ship** — `scripts/verify-app.sh hedgerow`, then `gh workflow run deploy-surge.yml -f
    app="hedgerow"`, then probe `https://hedgerow.free.componentdock.com`.

## Do not

- Do not copy `logo.svg` / `logo-light.svg` / `favicon.svg`, the Unsplash images, or any of the
  reference's CSS. Redraw the mark; use `picsum.photos/seed/hedgerow-<n>/<w>/<h>`.
- Do not write the words `Groundwork`, `colorlib`, `Hot Desk`, `Book a Tour`, `studio@groundwork.garden`
  or `The Potting Shed` into `apps/hedgerow` (comments included).
- Do not keep the reference's dark mode if the app is light-only — but do not delete the measured dark
  values from the spec either.
- Do not "fix" the reference's inconsistencies: the **serif/sans `h2` split**, the **four `h3` sizes**,
  the **four eyebrow treatments** and the **single flipped portfolio row** are all deliberate.
- Do not add a monthly/yearly billing toggle to the plans. The site has none (`data-billing-toggle`
  count = 0); the prices are annual.
- Do not add a hero photograph *and* keep the framing identical — there is **one** photograph on this
  page, inside the hero frame. No full-bleed image bands.
